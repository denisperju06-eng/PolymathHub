import { ApiError, configuration, send, sameOrigin, readJson, provider, sessionFor, fail } from "../server/auth.mjs";

const cleanObject = value => value && !Array.isArray(value) && typeof value === "object" ? value : {};
export function validateProgress(body) {
  const course = cleanObject(body.course); const vocabulary = cleanObject(body.vocabulary);
  const safeCourse = {};
  for (const field of ["streak", "longestStreak", "xp"]) if (Number.isSafeInteger(course[field]) && course[field] >= 0 && course[field] <= 10_000_000) safeCourse[field] = course[field];
  for (const field of ["lastCompletionDate", "theme", "activeTrack", "activeLessonId", "activeDualPane", "activePracticeMode", "activeView"]) if (typeof course[field] === "string" && course[field].length <= 160) safeCourse[field] = course[field];
  safeCourse.completedLessons = Array.isArray(course.completedLessons) ? [...new Set(course.completedLessons.filter(value => typeof value === "string" && value.length <= 100))].slice(0, 2000) : [];
  for (const field of ["masteryPoints", "dailyHistory", "assistedHistory"]) safeCourse[field] = Object.fromEntries(Object.entries(cleanObject(course[field])).filter(([key, value]) => /^[a-zA-Z0-9:_-]{1,100}$/.test(key) && Number.isSafeInteger(value) && value >= 0 && value <= 10000).slice(0, 3000));
  const preferences = cleanObject(course.preferences);
  safeCourse.preferences = { dailyTarget: Number.isSafeInteger(preferences.dailyTarget) && preferences.dailyTarget >= 1 && preferences.dailyTarget <= 100 ? preferences.dailyTarget : 3, confettiEnabled: preferences.confettiEnabled !== false };
  const safeVocabulary = { saved: [], learned: [], cache: [] };
  for (const field of ["saved", "learned"]) if (Array.isArray(vocabulary[field])) safeVocabulary[field] = [...new Set(vocabulary[field].filter(value => typeof value === "string" && value.length <= 120))].slice(0, 1000);
  if (Array.isArray(vocabulary.cache)) {
    safeVocabulary.cache = vocabulary.cache.slice(-100).filter(value => value && ["en", "fr", "es"].includes(value.lang) && typeof value.word === "string" && typeof value.id === "string" && Array.isArray(value.examples)).map(value => {
      const result = { lang: value.lang, examples: value.examples.slice(0, 2).filter(example => example && typeof example.text === "string" && typeof example.ro === "string").map(example => ({ text: example.text.slice(0, 1200), ro: example.ro.slice(0, 1200) })), partial: Boolean(value.partial) };
      for (const field of ["id", "word", "translation", "level", "pos", "topic", "ipa", "ro", "native", "nativeLang", "usage", "prompt", "answer", "source", "sourceUrl", "provider", "gloss"]) if (typeof value[field] === "string") result[field] = value[field].slice(0, 1500);
      // Source URLs are rebuilt from the word, rather than trusting imported links.
      if (result.source === "online") result.sourceUrl = "https://en.wiktionary.org/wiki/" + encodeURIComponent(result.word);
      return result;
    });
  }
  const revision = body.revision === null ? null : Number.isSafeInteger(body.revision) && body.revision >= 0 ? body.revision : undefined;
  if (revision === undefined) throw new ApiError(400, "Versiunea progresului nu este validă.");
  return { course: safeCourse, vocabulary: safeVocabulary, revision };
}

export function createProgressHandler({ env = process.env, fetcher = fetch } = {}) {
  return async function handler(req, res) {
    try {
      if (!["GET", "PUT"].includes(req.method)) { res.setHeader("Allow", "GET, PUT"); throw new ApiError(405, "Metodă indisponibilă."); }
      if (req.method === "PUT" && !sameOrigin(req)) throw new ApiError(403, "Cererea nu poate fi acceptată de pe această pagină.");
      const config = configuration(env); if (!config) throw new ApiError(503, "Sincronizarea contului nu este activată momentan.");
      const call = provider(config, fetcher); const session = await sessionFor(req, res, call);
      if (!session) throw new ApiError(401, "Conectează-te pentru a accesa progresul contului.");
      const userId = session.user.id;
      if (!/^[0-9a-f-]{36}$/i.test(userId)) throw new ApiError(401, "Sesiunea nu este validă.");
      const base = "/rest/v1/learning_progress";
      if (req.method === "GET") {
        const rows = await call(`${base}?user_id=eq.${userId}&select=course,vocabulary,revision,updated_at`, { token: session.token });
        return send(res, 200, { progress: rows[0] || null });
      }
      const progress = validateProgress(await readJson(req));
      const revision = progress.revision;
      const data = { user_id: userId, course: progress.course, vocabulary: progress.vocabulary, revision: revision === null ? 0 : revision + 1, updated_at: new Date().toISOString() };
      const rows = await call(revision === null ? `${base}?on_conflict=user_id` : `${base}?user_id=eq.${userId}&revision=eq.${revision}`, { token: session.token, method: revision === null ? "POST" : "PATCH", body: data, headers: { Prefer: revision === null ? "resolution=ignore-duplicates,return=representation" : "return=representation" } });
      if (!rows.length) throw new ApiError(409, "Progresul s-a schimbat într-o altă sesiune. Reîncarcă-l din cont înainte de a continua sincronizarea.");
      return send(res, 200, { revision: rows[0].revision, updated_at: rows[0].updated_at });
    } catch (error) { fail(res, error); }
  };
}

export default createProgressHandler();
