import test from "node:test";
import assert from "node:assert/strict";
import { createAccountHandler } from "../api/account.mjs";
import { createProgressHandler, validateProgress } from "../api/progress.mjs";
import { credentials, sameOrigin, configuration } from "../server/auth.mjs";

const env = { SUPABASE_URL: "https://project.supabase.co", SUPABASE_ANON_KEY: "public-test-key" };
const id = "11111111-1111-4111-8111-111111111111";
const user = { id, email: "student@example.invalid", user_metadata: { display_name: "Student" } };
const session = { user, access_token: "private-access-token", refresh_token: "private-refresh-token", expires_in: 3600 };
function result(body, status = 200) { return { ok: status >= 200 && status < 300, status, json: async () => body }; }
async function run(handler, { method = "GET", url = "/api/account", body, headers = {} } = {}) {
  const req = { method, url, body, headers: { host: "polymathhub.vercel.app", origin: "https://polymathhub.vercel.app", "content-type": "application/json", ...headers } };
  const response = { headers: {}, setHeader(name, value) { this.headers[name.toLowerCase()] = value; }, end(value) { this.body = JSON.parse(value); } };
  await handler(req, response); return response;
}

test("unconfigured accounts are explicit and never create a fake session", async () => {
  const handler = createAccountHandler({ env: {}, fetcher: () => { throw new Error("must not call"); } });
  const config = await run(handler, { url: "/api/account?action=config" });
  assert.deepEqual(config.body, { configured: false });
  const login = await run(handler, { method: "POST", url: "/api/account?action=login", body: { email: user.email, password: "long-password" } });
  assert.equal(login.statusCode, 503); assert.equal(login.headers["set-cookie"], undefined);
});
test("email is a syntactic identifier; no mailbox-existence or DNS check is performed", () => {
  assert.deepEqual(credentials({ email: " Student@Example.Invalid ", password: "long-password" }), { email: "student@example.invalid", password: "long-password" });
  assert.throws(() => credentials({ email: "not an email", password: "long-password" }));
  assert.throws(() => credentials({ email: user.email, password: "short" }));
  assert.equal(configuration({ SUPABASE_URL: "http://insecure.test", SUPABASE_ANON_KEY: "test" }), null);
});
test("cross-site writes are rejected before contacting the auth provider", async () => {
  const handler = createAccountHandler({ env, fetcher: () => { throw new Error("must not call"); } });
  for (const origin of ["https://attacker.example", "null", "http://polymathhub.vercel.app"]) {
    const response = await run(handler, { method: "POST", url: "/api/account?action=login", body: {}, headers: { origin } });
    assert.equal(response.statusCode, 403);
  }
  assert.equal(sameOrigin({ headers: { host: "127.0.0.1:8000", origin: "http://127.0.0.1:8000" } }), true);
});
test("password login stores opaque tokens only in protected cookies, never in JSON", async () => {
  const handler = createAccountHandler({ env, fetcher: async (url, options) => {
    assert.match(url, /grant_type=password/); assert.equal(JSON.parse(options.body).password, "long-password"); return result(session);
  } });
  const response = await run(handler, { method: "POST", url: "/api/account?action=login", body: { email: user.email, password: "long-password" } });
  assert.equal(response.statusCode, 200); assert.deepEqual(response.body, { user: { id, email: user.email, name: "Student" } });
  assert.equal(JSON.stringify(response.body).includes("private-"), false);
  for (const cookie of response.headers["set-cookie"]) { assert.match(cookie, /^__Host-/); assert.match(cookie, /HttpOnly/); assert.match(cookie, /SameSite=Lax/); assert.match(cookie, /Secure/); assert.match(cookie, /Path=\//); }
  assert.match(response.headers["cache-control"], /no-store/);
});
test("registration refuses to send confirmation emails when the provider is misconfigured", async () => {
  let calls = 0;
  const handler = createAccountHandler({ env, fetcher: async url => { ++calls; assert.match(url, /\/settings$/); return result({ mailer_autoconfirm: false }); } });
  const response = await run(handler, { method: "POST", url: "/api/account?action=register", body: { email: user.email, password: "long-password" } });
  assert.equal(response.statusCode, 503); assert.equal(calls, 1); assert.equal(response.headers["set-cookie"], undefined);
});
test("registration without email confirmation delegates password storage to Supabase Auth", async () => {
  const handler = createAccountHandler({ env, fetcher: async (url, options) => {
    if (url.endsWith("/settings")) return result({ mailer_autoconfirm: true });
    assert.match(url, /\/signup$/); assert.equal(JSON.parse(options.body).data.display_name, "Student"); return result(session);
  } });
  const response = await run(handler, { method: "POST", url: "/api/account?action=register", body: { email: user.email, password: "long-password", name: "Student" } });
  assert.equal(response.statusCode, 200); assert.equal(response.body.user.id, id);
});
test("expired sessions renew using the refresh cookie without leaking either token", async () => {
  const handler = createAccountHandler({ env, fetcher: async url => url.endsWith("/user") ? result({}, 401) : result(session) });
  const response = await run(handler, { headers: { cookie: "__Host-pm_access=expired; __Host-pm_refresh=refresh" } });
  assert.equal(response.statusCode, 200); assert.equal(response.body.user.id, id); assert.equal(response.headers["set-cookie"].length, 2);
});
test("upstream rate limits and failures are reported without exposing provider responses", async () => {
  const handler = createAccountHandler({ env, fetcher: async () => result({ secret: "must-not-leak" }, 429) });
  const response = await run(handler, { method: "POST", url: "/api/account?action=login", body: { email: user.email, password: "long-password" } });
  assert.equal(response.statusCode, 429); assert.equal(JSON.stringify(response.body).includes("must-not-leak"), false);
});
test("progress requires an authenticated server-validated session", async () => {
  const handler = createProgressHandler({ env, fetcher: () => { throw new Error("must not call"); } });
  const response = await run(handler, { url: "/api/progress" });
  assert.equal(response.statusCode, 401);
});
test("progress writes derive ownership from the verified session, ignoring a supplied user ID", async () => {
  let written;
  const handler = createProgressHandler({ env, fetcher: async (url, options) => {
    if (url.endsWith("/user")) return result(user);
    written = JSON.parse(options.body); assert.match(url, new RegExp("user_id=eq\\." + id)); assert.match(url, /revision=eq\.3/);
    assert.equal(options.headers.Authorization, "Bearer access"); return result([{ revision: 4, updated_at: "now" }]);
  } });
  const response = await run(handler, { method: "PUT", url: "/api/progress", headers: { cookie: "__Host-pm_access=access" }, body: { user_id: "another-user", course: { xp: 50 }, vocabulary: { saved: ["en:curious"] }, revision: 3 } });
  assert.equal(response.statusCode, 200); assert.equal(written.user_id, id); assert.equal(written.revision, 4);
});
test("a stale progress revision returns conflict rather than overwriting another session", async () => {
  const handler = createProgressHandler({ env, fetcher: async url => url.endsWith("/user") ? result(user) : result([]) });
  const response = await run(handler, { method: "PUT", url: "/api/progress", headers: { cookie: "__Host-pm_access=access" }, body: { course: {}, vocabulary: {}, revision: 2 } });
  assert.equal(response.statusCode, 409);
});
test("progress validation drops credentials and rebuilds untrusted source URLs", () => {
  const progress = validateProgress({ revision: null, course: { password: "secret", xp: -10, user: { email: user.email }, completedLessons: ["sql-1", "sql-1"], masteryPoints: { "sql-1": 1, invalid: -1 } }, vocabulary: { saved: ["en:curious", "en:curious"], cache: [{ id: "en:test", lang: "en", word: "test", examples: [], source: "online", sourceUrl: "javascript:alert(1)" }] } });
  assert.equal(progress.course.password, undefined); assert.equal(progress.course.user, undefined); assert.equal(progress.course.xp, undefined);
  assert.deepEqual(progress.course.completedLessons, ["sql-1"]); assert.deepEqual(progress.course.masteryPoints, { "sql-1": 1 });
  assert.deepEqual(progress.vocabulary.saved, ["en:curious"]); assert.match(progress.vocabulary.cache[0].sourceUrl, /^https:\/\/en\.wiktionary\.org/);
});
