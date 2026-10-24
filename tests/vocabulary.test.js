const test = require("node:test");
const assert = require("node:assert/strict");
const V = require("../vocabulary.js");

test("every offline card provides bilingual learning, two examples and a complete exercise", () => {
  assert.equal(V.WORDS.length, 24);
  assert.equal(new Set(V.WORDS.map(word => word.id)).size, 24);
  for (const lang of ["en", "fr", "es"]) assert.equal(V.WORDS.filter(word => word.lang === lang).length, 8);
  for (const word of V.WORDS) {
    for (const field of ["word", "translation", "ro", "native", "usage", "answer"]) assert.ok(word[field]?.trim(), `${word.id}: ${field}`);
    assert.equal(word.examples.length, 2);
    assert.ok(word.examples.every(example => example.text && example.ro));
    assert.ok(word.prompt.includes("_____"));
    assert.equal(word.answer, word.word);
  }
});
test("Romanian search accepts accents, different case, surrounding whitespace and translations", () => {
  assert.deepEqual(V.search(V.WORDS, "  A INVATA  ", "fr").map(word => word.word), ["apprendre"]);
  assert.deepEqual(V.search(V.WORDS, "RÉUSSIR", "fr").map(word => word.word), ["réussir"]);
  assert.deepEqual(V.search(V.WORDS, "incredere", "en").map(word => word.word), ["reliable"]);
});
test("search never leaks cards from another selected language", () => {
  assert.equal(V.search(V.WORDS, "aprender", "en").length, 0);
  assert.equal(V.search(V.WORDS, "", "es").length, 8);
  assert.equal(V.search(V.WORDS, "a-made-up-word", "fr").length, 0);
});
test("practice accepts reasonable typing variations and rejects wrong or empty answers", () => {
  const word = V.WORDS.find(word => word.word === "réussir");
  assert.equal(V.checkAnswer(word, " REUSSIR! "), true);
  for (const value of ["", " ", "réuss", "apprendre", "réussir quelque chose"]) assert.equal(V.checkAnswer(word, value), false);
});
const source = {
  word: "resilient", entries: [
    { language: { code: "fr" }, partOfSpeech: "wrong-language", senses: [{ definition: "wrong" }] },
    { language: { code: "en" }, partOfSpeech: "adjective", pronunciations: [{ type: "ipa", text: "/rɪˈzɪliənt/" }], senses: [{ definition: "Able to recover after difficulties.", examples: ["She is resilient."] }] }
  ]
};
test("online adapter keeps the requested language and usable example", () => {
  const result = V.fromFreeDictionary(source, "en");
  assert.equal(result.pos, "adjective");
  assert.deepEqual(result.examples, ["She is resilient."]);
  assert.match(result.sourceUrl, /^https:\/\/en\.wiktionary\.org\/wiki\/resilient$/);
  assert.throws(() => V.fromFreeDictionary(source, "es"), /not-found/);
});
test("Wiktionary fallback removes markup and ignores unrelated language entries", () => {
  const result = V.fromWiktionary({ en: [{ definitions: [{ definition: "wrong" }] }], fr: [{ partOfSpeech: "Noun", definitions: [{ definition: '<a href="/wiki/greeting">greeting</a>', examples: ["<b>Bonjour</b>, mon ami !"] }] }] }, "fr", "bonjour");
  assert.equal(result.gloss, "greeting");
  assert.deepEqual(result.examples, ["Bonjour, mon ami !"]);
});
function response(data, status = 200) { return { ok: status >= 200 && status < 300, status, json: async () => data }; }
function translator(url) {
  const q = new URL(url).searchParams.get("q");
  return response({ responseStatus: 200, responseData: { translatedText: q === "resilient" ? "rezilient" : q === "She is resilient." ? "Ea este rezilientă." : "Capabil să își revină după dificultăți." } });
}
test("online lookup produces Romanian meaning, English explanation, example and practice", async () => {
  const word = await V.lookup("resilient", "en", { fetch: async url => url.includes("freedictionaryapi") ? response(source) : translator(url) });
  assert.equal(word.translation, "rezilient"); assert.equal(word.native, "Able to recover after difficulties.");
  assert.equal(word.examples[0].ro, "Ea este rezilientă."); assert.equal(word.partial, false);
  assert.ok(word.prompt.includes("Capabil")); assert.equal(V.checkAnswer(word, "resilient"), true);
});
test("a failed provider falls back to Wiktionary", async () => {
  const word = await V.lookup("resilient", "en", { fetch: async url => {
    if (url.includes("freedictionaryapi")) return response({}, 503);
    if (url.includes("wiktionary")) return response({ en: [{ partOfSpeech: "Adjective", definitions: [{ definition: "Able to recover after difficulties.", examples: ["She is resilient."] }] }] });
    return translator(url);
  } });
  assert.equal(word.provider, "Wiktionary"); assert.equal(word.translation, "rezilient");
});
test("translation quota errors stay explicit and do not masquerade as valid translations", async () => {
  const word = await V.lookup("resilient", "en", { fetch: async url => url.includes("freedictionaryapi") ? response(source) : response({ responseStatus: 429, quotaFinished: true, responseData: { translatedText: "LIMIT EXCEEDED" } }) });
  assert.equal(word.partial, true); assert.equal(word.prompt, null);
  assert.equal(word.translation, "Traducere indisponibilă"); assert.equal(word.native, "Able to recover after difficulties.");
  assert.equal(JSON.stringify(word).includes("LIMIT EXCEEDED"), false);
});
test("unavailable dictionary results in an actionable failure", async () => {
  await assert.rejects(V.lookup("zzzxxyy", "en", { fetch: async () => response({}, 404) }), /not-found/);
});
test("invalid or excessively long queries make no remote request", async () => {
  let called = false; const fetch = async () => { called = true; };
  await assert.rejects(V.lookup("test", "xx", { fetch }), /invalid-query/);
  await assert.rejects(V.lookup(" ", "en", { fetch }), /invalid-query/);
  await assert.rejects(V.lookup("a".repeat(61), "en", { fetch }), /invalid-query/);
  assert.equal(called, false);
});
test("translation request respects the provider's UTF-8 byte limit", async () => {
  let largest = 0;
  const longSource = structuredClone(source); longSource.entries[1].senses[0].definition = "字".repeat(300);
  await V.lookup("resilient", "fr", { fetch: async url => {
    if (url.includes("freedictionaryapi")) { longSource.entries[1].language.code = "fr"; return response(longSource); }
    const q = new URL(url).searchParams.get("q"); largest = Math.max(largest, new TextEncoder().encode(q).length); return translator(url);
  } });
  assert.ok(largest <= 500); assert.ok(largest > 0);
});


test("an example from another part of speech cannot replace the primary meaning", () => {
  const result = V.fromFreeDictionary({ word: "maison", entries: [
    { language: { code: "fr" }, partOfSpeech: "noun", senses: [{ definition: "house", examples: [] }] },
    { language: { code: "fr" }, partOfSpeech: "adjective", senses: [{ definition: "homemade", examples: ["une tarte maison"] }] }
  ] }, "fr");
  assert.equal(result.gloss, "house");
  assert.equal(result.pos, "noun");
  assert.deepEqual(result.examples, []);
});
