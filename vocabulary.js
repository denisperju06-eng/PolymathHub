(function (root) {
  "use strict";
  const LANGUAGES = {
    en: { name: "Engleză", native: "English", flag: "🇬🇧", speech: "en-GB" },
    fr: { name: "Franceză", native: "Français", flag: "🇫🇷", speech: "fr-FR" },
    es: { name: "Spaniolă", native: "Español", flag: "🇪🇸", speech: "es-ES" }
  };
  function entry(lang, word, translation, level, pos, topic, ro, native, usage, examples, prompt, answer, ipa = "") {
    return { id: `${lang}:${word}`, lang, word, translation, level, pos, topic, ro, native, usage, examples: examples.map(([text, ro]) => ({ text, ro })), prompt, answer, ipa, source: "editorial" };
  }
  const WORDS = [
    entry("en", "curious", "curios", "A2", "adjectiv", "Personalitate", "Dornic să afle, să exploreze sau să înțeleagă ceva nou.", "Eager to learn or know more about something.", "Spune «curious about something». Pentru o întrebare politicoasă poți folosi «I'm curious to know…».", [["She is curious about the world.", "Ea este curioasă în legătură cu lumea."], ["I'm curious to know how it works.", "Sunt curios să aflu cum funcționează."]], "She asks many questions. She is very _____.", "curious", "/ˈkjʊəriəs/"),
    entry("en", "learn", "a învăța", "A1", "verb", "Învățare", "A dobândi cunoștințe sau o abilitate prin studiu și practică.", "To gain knowledge or a skill through study or practice.", "«Learn something» pentru un subiect; «learn to + verb» pentru o abilitate. Trecut: learned sau learnt.", [["I learn something new every day.", "Învăț ceva nou în fiecare zi."], ["She wants to learn to swim.", "Ea vrea să învețe să înoate."]], "I want to _____ to speak French.", "learn", "/lɜːn/"),
    entry("en", "journey", "călătorie", "A2", "substantiv", "Călătorii", "Deplasare dintr-un loc în altul; figurat, un proces de dezvoltare.", "An act of travelling from one place to another; also a process of personal development.", "«A journey» pune accent pe parcurs. «Travel» numește în general activitatea de a călători.", [["The train journey takes two hours.", "Călătoria cu trenul durează două ore."], ["Learning a language is a journey.", "Învățarea unei limbi este o călătorie."]], "Our train _____ takes two hours.", "journey", "/ˈdʒɜːni/"),
    entry("en", "improve", "a îmbunătăți", "A2", "verb", "Învățare", "A face ceva mai bun sau a deveni mai bun.", "To make something better or to become better.", "«Improve your English» = a-ți îmbunătăți engleza. Verbul poate avea sau nu complement.", [["Practice helps me improve my English.", "Practica mă ajută să-mi îmbunătățesc engleza."], ["Her pronunciation is improving.", "Pronunția ei se îmbunătățește."]], "I practise every day to _____ my English.", "improve", "/ɪmˈpruːv/"),
    entry("en", "actually", "de fapt", "B1", "adverb", "Conversație", "Introduce o precizare sau corectează o presupunere.", "Used to say what is really true, often in contrast to what was expected.", "Nu înseamnă «actualmente». Pentru «în prezent» folosește «currently» sau «at present».", [["Actually, I live in Chișinău.", "De fapt, locuiesc în Chișinău."], ["The exercise was actually quite easy.", "Exercițiul a fost, de fapt, destul de ușor."]], "I thought it was difficult, but it was _____ easy.", "actually", "/ˈæktʃuəli/"),
    entry("en", "however", "totuși", "B1", "adverb", "Conectori", "Introduce o idee care contrastează cu cea anterioară.", "Used to introduce a statement that contrasts with a previous statement.", "La început de propoziție se scrie de obicei «However, …». Nu unește singur două propoziții doar printr-o virgulă.", [["It was raining. However, we went outside.", "Ploua. Totuși, am ieșit afară."], ["The book is long; however, it is interesting.", "Cartea este lungă; totuși, este interesantă."]], "It was cold. _____, we went for a walk.", "however", "/haʊˈevə/"),
    entry("en", "opportunity", "oportunitate", "B1", "substantiv", "Viață & muncă", "Ocazie favorabilă de a face ceva sau de a progresa.", "A chance to do something useful or beneficial.", "«An opportunity to + verb». Atenție la articol: «an», deoarece începe cu un sunet vocalic.", [["This is an opportunity to learn.", "Aceasta este o oportunitate de a învăța."], ["Thank you for the opportunity.", "Mulțumesc pentru oportunitate."]], "This is a great _____ to learn something new.", "opportunity", "/ˌɒpəˈtjuːnəti/"),
    entry("en", "reliable", "de încredere", "B1", "adjectiv", "Personalitate", "Pe care te poți baza; care funcționează sau se comportă constant bine.", "Able to be trusted or depended on.", "Se folosește despre persoane, surse de informație, servicii sau obiecte: «a reliable source».", [["She is a reliable friend.", "Ea este o prietenă de încredere."], ["We need reliable information.", "Avem nevoie de informații de încredere."]], "You can trust this source. It is _____.", "reliable", "/rɪˈlaɪəbl/"),
    entry("fr", "bonjour", "bună ziua", "A1", "interjecție", "Conversație", "Salut politicos folosit în timpul zilei.", "Une formule de salutation utilisée pendant la journée.", "Folosește «bonjour» la intrarea într-un magazin sau când întâlnești pe cineva. Seara se spune «bonsoir».", [["Bonjour, comment allez-vous ?", "Bună ziua, ce mai faceți?"], ["Elle dit bonjour à son voisin.", "Ea îi spune bună ziua vecinului său."]], "_____, madame ! Comment allez-vous ?", "bonjour", "/bɔ̃.ʒuʁ/"),
    entry("fr", "apprendre", "a învăța", "A1", "verb", "Învățare", "A dobândi o cunoștință sau o abilitate; în anumite contexte, a preda cuiva ceva.", "Acquérir une connaissance ou une compétence par l'étude ou la pratique.", "«Apprendre à + infinitiv»: apprendre à nager. Prezent: j'apprends, nous apprenons.", [["Je veux apprendre le français.", "Vreau să învăț franceza."], ["Il apprend à conduire.", "El învață să conducă."]], "Je veux _____ le français.", "apprendre", "/a.pʁɑ̃dʁ/"),
    entry("fr", "ensemble", "împreună", "A1", "adverb", "Conversație", "În compania altcuiva sau în cadrul aceleiași activități.", "Les uns avec les autres, au même endroit ou dans une même activité.", "Ca adverb nu se acordă: «Nous travaillons ensemble». Poate fi și substantiv în alte contexte.", [["Nous apprenons ensemble.", "Învățăm împreună."], ["On va au cinéma ensemble ?", "Mergem împreună la cinema?"]], "Nous étudions _____ à la bibliothèque.", "ensemble", "/ɑ̃.sɑ̃bl/"),
    entry("fr", "pourtant", "totuși", "B1", "adverb", "Conectori", "Exprimă un contrast între două idei sau între așteptare și realitate.", "Marque une opposition entre deux faits ou deux idées.", "Înseamnă «totuși», nu «prin urmare». Pentru consecință poți folosi «donc».", [["Il pleut, pourtant elle sort.", "Plouă, totuși ea iese."], ["C'est difficile, pourtant je continue.", "Este dificil, totuși continui."]], "Il est fatigué, _____ il continue à travailler.", "pourtant", "/puʁ.tɑ̃/"),
    entry("fr", "réussir", "a reuși", "A2", "verb", "Învățare", "A obține rezultatul dorit sau a trece cu succes o probă.", "Obtenir le résultat souhaité ou avoir du succès.", "«Réussir à + infinitiv»: réussir à comprendre. «Réussir un examen» = a promova un examen.", [["Je veux réussir cet examen.", "Vreau să promovez acest examen."], ["Elle réussit à comprendre le texte.", "Ea reușește să înțeleagă textul."]], "Je travaille pour _____ mon examen.", "réussir", "/ʁe.y.siʁ/"),
    entry("fr", "découvrir", "a descoperi", "A2", "verb", "Călătorii", "A afla sau a vedea pentru prima dată ceva necunoscut.", "Trouver ou connaître quelque chose pour la première fois.", "Prezent: je découvre; participiu trecut: découvert. «Découvrir un pays» = a descoperi o țară.", [["J'aime découvrir de nouveaux mots.", "Îmi place să descopăr cuvinte noi."], ["Nous découvrons la ville à pied.", "Descoperim orașul pe jos."]], "J'aime _____ de nouveaux endroits.", "découvrir", "/de.ku.vʁiʁ/"),
    entry("fr", "bientôt", "în curând", "A1", "adverb", "Conversație", "Într-un interval scurt de timp după momentul prezent.", "Dans peu de temps, dans un avenir proche.", "«À bientôt !» este o formulă de rămas-bun: «Pe curând!». Păstrează accentul circumflex.", [["Le train arrive bientôt.", "Trenul sosește în curând."], ["À bientôt, mon ami !", "Pe curând, prietene!"]], "Le film commence _____.", "bientôt", "/bjɛ̃.to/"),
    entry("fr", "habitude", "obicei", "A2", "substantiv feminin", "Viață & muncă", "Comportament repetat care devine familiar sau automat.", "Une manière d'agir que l'on répète régulièrement.", "«Avoir l'habitude de + infinitiv» = a fi obișnuit să. «D'habitude» = de obicei.", [["Lire est une bonne habitude.", "Cititul este un obicei bun."], ["D'habitude, je me lève tôt.", "De obicei, mă trezesc devreme."]], "Lire chaque jour est une bonne _____.", "habitude", "/a.bi.tyd/"),
    entry("es", "hola", "salut", "A1", "interjecție", "Conversație", "Formulă obișnuită de salut, mai ales în contexte informale.", "Una expresión habitual para saludar a alguien.", "Litera «h» nu se pronunță. Pentru un salut mai formal poți folosi «buenos días».", [["¡Hola! ¿Cómo estás?", "Salut! Ce mai faci?"], ["Ella dice hola a sus amigos.", "Ea își salută prietenii."]], "¡_____! ¿Cómo estás?", "hola", "/ˈola/"),
    entry("es", "aprender", "a învăța", "A1", "verb", "Învățare", "A dobândi cunoștințe sau o abilitate prin studiu ori experiență.", "Adquirir conocimientos o habilidades mediante el estudio o la experiencia.", "«Aprender a + infinitiv»: aprender a nadar. Nu îl confunda cu «enseñar» = a preda.", [["Quiero aprender español.", "Vreau să învăț spaniola."], ["Estamos aprendiendo a cocinar.", "Învățăm să gătim."]], "Quiero _____ a hablar español.", "aprender", "/apɾenˈdeɾ/"),
    entry("es", "juntos", "împreună", "A1", "adjectiv cu sens adverbial", "Conversație", "În compania unei alte persoane sau ca parte a aceluiași grup.", "En compañía de otra persona o formando parte del mismo grupo.", "Se acordă cu grupul: juntos pentru masculin sau mixt, juntas pentru feminin.", [["Estudiamos juntos cada día.", "Studiem împreună în fiecare zi."], ["Las dos amigas viajan juntas.", "Cele două prietene călătoresc împreună."]], "Mis amigos y yo estudiamos _____.", "juntos", "/ˈxuntos/"),
    entry("es", "aunque", "deși", "B1", "conjuncție", "Conectori", "Introduce o idee care nu împiedică acțiunea din propoziția principală.", "Introduce una dificultad que no impide lo expresado en la oración principal.", "Indicativul prezintă un fapt cunoscut: «aunque llueve». Subjonctivul poate exprima o situație ipotetică: «aunque llueva».", [["Aunque estoy cansado, sigo estudiando.", "Deși sunt obosit, continui să studiez."], ["Salimos aunque llueve.", "Ieșim deși plouă."]], "_____ hace frío, salimos a caminar.", "aunque", "/ˈauŋke/"),
    entry("es", "lograr", "a reuși", "A2", "verb", "Învățare", "A atinge un scop sau a obține un rezultat prin efort.", "Conseguir un objetivo o alcanzar un resultado mediante el esfuerzo.", "«Lograr + infinitiv», fără «a»: lograr entender. «Lograr una meta» = a atinge un obiectiv.", [["Quiero lograr mis objetivos.", "Vreau să-mi ating obiectivele."], ["Ella logra entender la conversación.", "Ea reușește să înțeleagă conversația."]], "Con práctica, puedo _____ mis objetivos.", "lograr", "/loˈɣɾaɾ/"),
    entry("es", "descubrir", "a descoperi", "A2", "verb", "Călătorii", "A afla, a găsi sau a vedea ceva pentru prima dată.", "Encontrar o conocer algo por primera vez.", "Participiu trecut neregulat: descubierto. «Descubrir un lugar» = a descoperi un loc.", [["Me gusta descubrir palabras nuevas.", "Îmi place să descopăr cuvinte noi."], ["Vamos a descubrir la ciudad.", "Vom descoperi orașul."]], "Quiero _____ nuevos lugares.", "descubrir", "/deskuˈβɾiɾ/"),
    entry("es", "temprano", "devreme", "A1", "adverb", "Conversație", "Înainte de ora obișnuită sau într-un moment timpuriu al zilei.", "Antes de la hora habitual o en las primeras horas del día.", "Opusul este «tarde». În expresia «a una edad temprana», cuvântul are rol de adjectiv și se acordă.", [["Me levanto temprano.", "Mă trezesc devreme."], ["Llegamos temprano a la estación.", "Ajungem devreme la gară."]], "Me levanto _____ para estudiar antes del trabajo.", "temprano", "/temˈpɾano/"),
    entry("es", "aprovechar", "a profita de", "B1", "verb", "Viață & muncă", "A folosi bine o resursă, timpul sau o ocazie favorabilă.", "Utilizar bien un recurso, el tiempo o una oportunidad.", "În sens pozitiv: «aprovechar el tiempo». «Aprovecharse de alguien» înseamnă a profita de cineva și are sens negativ.", [["Quiero aprovechar esta oportunidad.", "Vreau să profit de această oportunitate."], ["Aprovechamos el tiempo para practicar.", "Folosim timpul ca să exersăm."]], "Debemos _____ esta oportunidad para aprender.", "aprovechar", "/apɾoβeˈtʃaɾ/")
  ];
  function normalize(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim();
  }
  function search(words, query, lang) {
    const q = normalize(query);
    return words.filter(item => item.lang === lang && (!q || [item.word, item.translation, item.topic].some(value => normalize(value).includes(q))));
  }
  function checkAnswer(word, answer) {
    const value = normalize(answer).replace(/[.!?]+$/g, "").trim();
    return value.length > 0 && [word.answer || word.word].flat().some(expected => normalize(expected) === value);
  }
  function plain(value) {
    return String(value || "").replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
  }
  function fromFreeDictionary(data, lang) {
    const entries = (data.entries || []).filter(item => item.language?.code === lang);
    const selected = entries.flatMap(item => (item.senses || []).map(sense => ({ item, sense }))).find(pair => pair.sense.definition);
    if (!selected) throw new Error("not-found");
    return { word: data.word, gloss: plain(selected.sense.definition), pos: plain(selected.item.partOfSpeech), ipa: selected.item.pronunciations?.find(p => p.type === "ipa")?.text || "", examples: (selected.sense.examples || []).slice(0, 2).map(plain), sourceUrl: `https://en.wiktionary.org/wiki/${encodeURIComponent(data.word)}`, provider: "FreeDictionaryAPI.com" };
  }
  function fromWiktionary(data, lang, word) {
    const senses = (data[lang] || []).flatMap(item => (item.definitions || []).map(sense => ({ item, sense })));
    const selected = senses.find(pair => pair.sense.definition);
    if (!selected) throw new Error("not-found");
    return { word, gloss: plain(selected.sense.definition), pos: plain(selected.item.partOfSpeech), ipa: "", examples: (selected.sense.examples || []).slice(0, 2).map(plain), sourceUrl: `https://en.wiktionary.org/wiki/${encodeURIComponent(word)}`, provider: "Wiktionary" };
  }
  async function lookup(word, lang, options = {}) {
    if (!LANGUAGES[lang] || !word.trim() || word.length > 60) throw new Error("invalid-query");
    const fetcher = options.fetch || root.fetch.bind(root);
    const signal = options.signal;
    async function json(url) {
      const response = await fetcher(url, { signal, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(response.status === 429 ? "rate-limit" : response.status === 404 ? "not-found" : "network");
      return response.json();
    }
    async function translate(text, from, to) {
      if (from === to) return text;
      // MyMemory accepts at most 500 UTF-8 bytes, not 500 characters.
      let safe = text.slice(0, 240);
      while (new TextEncoder().encode(safe).length > 480) safe = safe.slice(0, -1);
      const data = await json(`https://api.mymemory.translated.net/get?${new URLSearchParams({ q: safe, langpair: `${from}|${to}` })}`);
      if (Number(data.responseStatus) !== 200 || data.quotaFinished || !data.responseData?.translatedText) throw new Error("translation-unavailable");
      return plain(data.responseData.translatedText);
    }
    let source;
    try { source = fromFreeDictionary(await json(`https://freedictionaryapi.com/api/v1/entries/${lang}/${encodeURIComponent(word)}?translations=true`), lang); }
    catch (error) {
      if (signal?.aborted) throw error;
      source = fromWiktionary(await json(`https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`), lang, word);
    }
    const translations = await Promise.allSettled([
      translate(source.word, lang, "ro"), translate(source.gloss, "en", "ro"), translate(source.gloss, "en", lang),
      ...source.examples.map(text => translate(text, lang, "ro"))
    ]);
    if (signal?.aborted) throw new DOMException("Aborted", "AbortError");
    const translated = index => translations[index]?.status === "fulfilled" ? translations[index].value : null;
    const result = {
      id: `${lang}:${normalize(source.word)}`, lang, word: source.word, translation: translated(0) || "Traducere indisponibilă", level: "Online", pos: source.pos, topic: "Căutările mele", ipa: source.ipa,
      ro: translated(1) || "Traducerea explicației nu este disponibilă momentan.", native: translated(2) || source.gloss,
      nativeLang: translated(2) ? lang : "en", usage: source.examples.length ? "Sens din dicționar. Exemplele din fila Exemple arată utilizarea; verifică sensul potrivit contextului tău." : "Este afișat primul sens din dicționar. Sursa nu oferă o propoziție pentru acest sens; verifică și pagina originală.",
      examples: source.examples.map((text, i) => ({ text, ro: translated(3 + i) || "Traducere indisponibilă momentan." })),
      prompt: translated(1) ? `Scrie cuvântul pentru: ${translated(1)}` : null, answer: source.word,
      source: "online", sourceUrl: source.sourceUrl, provider: source.provider, gloss: source.gloss,
      partial: translations.some(result => result.status === "rejected")
    };
    return result;
  }
  const api = { LANGUAGES, WORDS, normalize, search, checkAnswer, fromFreeDictionary, fromWiktionary, lookup };
  root.PolymathVocabulary = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
