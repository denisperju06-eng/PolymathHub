export class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

export function configuration(env = process.env) {
  const url = env.SUPABASE_URL;
  const key = env.SUPABASE_PUBLISHABLE_KEY || env.SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  try { const parsed = new URL(url); if (parsed.protocol !== "https:" || parsed.username || parsed.password) return null; return { url: parsed.origin, key }; }
  catch { return null; }
}

export function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("Vary", "Cookie");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.end(JSON.stringify(body));
}

export function sameOrigin(req) {
  const origin = req.headers.origin;
  const host = req.headers.host;
  try {
    const parsed = new URL(origin);
    const local = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host || "");
    return parsed.host === host && (parsed.protocol === "https:" || (local && parsed.protocol === "http:"));
  } catch { return false; }
}

export async function readJson(req, limit = 200_000) {
  if (!/^application\/json(?:;|$)/i.test(req.headers["content-type"] || "")) throw new ApiError(415, "Este necesar un formular JSON.");
  if (Number(req.headers["content-length"]) > limit) throw new ApiError(413, "Datele trimise sunt prea mari.");
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    if (Array.isArray(req.body)) throw new ApiError(400, "Datele trimise nu sunt valide.");
    if (Buffer.byteLength(JSON.stringify(req.body)) > limit) throw new ApiError(413, "Datele trimise sunt prea mari.");
    return req.body;
  }
  let text = typeof req.body === "string" ? req.body : "";
  if (!text) for await (const chunk of req) { text += chunk; if (Buffer.byteLength(text) > limit) throw new ApiError(413, "Datele trimise sunt prea mari."); }
  if (Buffer.byteLength(text) > limit) throw new ApiError(413, "Datele trimise sunt prea mari.");
  try { const data = JSON.parse(text); if (!data || Array.isArray(data) || typeof data !== "object") throw new Error(); return data; }
  catch { throw new ApiError(400, "Datele trimise nu sunt valide."); }
}

export function cookieNames(req) {
  const local = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(req.headers.host || "");
  return { access: local ? "pm_access" : "__Host-pm_access", refresh: local ? "pm_refresh" : "__Host-pm_refresh", secure: !local };
}

export function setSession(req, res, session) {
  const names = cookieNames(req);
  const suffix = `; Path=/; HttpOnly; SameSite=Lax${names.secure ? "; Secure" : ""}`;
  res.setHeader("Set-Cookie", [
    `${names.access}=${encodeURIComponent(session?.access_token || "")}; Max-Age=${session ? Math.min(Number(session.expires_in) || 3600, 3600) : 0}${suffix}`,
    `${names.refresh}=${encodeURIComponent(session?.refresh_token || "")}; Max-Age=${session ? 60 * 60 * 24 * 28 : 0}${suffix}`
  ]);
}

function cookies(req) {
  const result = {};
  for (const item of (req.headers.cookie || "").split(";")) {
    const index = item.indexOf("="); if (index < 0) continue;
    try { result[item.slice(0, index).trim()] = decodeURIComponent(item.slice(index + 1)); } catch { /* Ignore malformed cookies. */ }
  }
  return result;
}

export function publicUser(user) {
  return { id: user.id, email: user.email, name: String(user.user_metadata?.display_name || user.email?.split("@")[0] || "").slice(0, 60) };
}

export function provider(config, fetcher = fetch) {
  return async (path, { token, method = "GET", body, headers = {} } = {}) => {
    let response;
    try { response = await fetcher(config.url + path, { method, headers: { apikey: config.key, "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}), ...headers }, ...(body === undefined ? {} : { body: JSON.stringify(body) }), signal: AbortSignal.timeout(8000) }); }
    catch { throw new ApiError(503, "Serviciul de conturi nu este disponibil momentan. Încearcă din nou."); }
    let data; try { data = await response.json(); } catch { data = {}; }
    if (!response.ok) {
      if (response.status === 429) throw new ApiError(429, "Prea multe încercări. Așteaptă puțin și încearcă din nou.");
      if ([400, 401, 403, 422].includes(response.status)) throw new ApiError(401, "Emailul sau parola nu sunt corecte ori contul nu este disponibil.");
      throw new ApiError(503, "Serviciul de conturi nu este disponibil momentan. Încearcă din nou.");
    }
    return data;
  };
}

export async function sessionFor(req, res, call) {
  const names = cookieNames(req); const values = cookies(req);
  const access = values[names.access]; const refresh = values[names.refresh];
  if (!access && !refresh) return null;
  if (access) {
    try { const user = await call("/auth/v1/user", { token: access }); return { user, token: access }; }
    catch (error) { if (error.status !== 401) throw error; }
  }
  if (!refresh) { setSession(req, res, null); return null; }
  try {
    const session = await call("/auth/v1/token?grant_type=refresh_token", { method: "POST", body: { refresh_token: refresh } });
    if (!session.access_token || !session.refresh_token || !session.user?.id) throw new ApiError(401, "Sesiunea a expirat.");
    setSession(req, res, session); return { user: session.user, token: session.access_token };
  } catch (error) { if (error.status === 401) { setSession(req, res, null); return null; } throw error; }
}

export function credentials(body) {
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ApiError(400, "Introdu o adresă de email în format valid.");
  if (password.length < 10 || password.length > 128) throw new ApiError(400, "Parola trebuie să aibă între 10 și 128 de caractere.");
  return { email, password };
}

export function fail(res, error) {
  send(res, error instanceof ApiError ? error.status : 500, { error: error instanceof ApiError ? error.message : "Cererea nu a putut fi procesată." });
}
