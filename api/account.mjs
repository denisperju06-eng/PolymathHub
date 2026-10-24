import { ApiError, configuration, send, sameOrigin, readJson, provider, sessionFor, publicUser, credentials, setSession, fail } from "../server/auth.mjs";

export function createAccountHandler({ env = process.env, fetcher = fetch } = {}) {
  return async function handler(req, res) {
    try {
      const action = new URL(req.url, "http://localhost").searchParams.get("action") || "session";
      const config = configuration(env);
      if (req.method === "GET" && action === "config") return send(res, 200, { configured: Boolean(config) });
      if (!config) throw new ApiError(503, "Autentificarea nu este activată momentan.");
      const call = provider(config, fetcher);
      if (req.method === "GET" && action === "session") {
        const session = await sessionFor(req, res, call);
        return send(res, 200, { user: session ? publicUser(session.user) : null });
      }
      if (req.method !== "POST" || !["login", "register", "logout"].includes(action)) { res.setHeader("Allow", "GET, POST"); throw new ApiError(405, "Metodă indisponibilă."); }
      if (!sameOrigin(req)) throw new ApiError(403, "Cererea nu poate fi acceptată de pe această pagină.");
      if (action === "logout") {
        const session = await sessionFor(req, res, call);
        if (session) await call("/auth/v1/logout?scope=local", { method: "POST", token: session.token });
        setSession(req, res, null); return send(res, 200, { user: null });
      }
      const body = await readJson(req, 4096);
      const input = credentials(body);
      let session;
      if (action === "register") {
        // Do not send confirmation emails: the owner explicitly requested unverified email identifiers.
        const settings = await call("/auth/v1/settings");
        if (settings.mailer_autoconfirm !== true) throw new ApiError(503, "Crearea conturilor nu este disponibilă momentan.");
        const name = String(body.name || input.email.split("@")[0]).trim().slice(0, 60);
        session = await call("/auth/v1/signup", { method: "POST", body: { ...input, data: { display_name: name } } });
      } else session = await call("/auth/v1/token?grant_type=password", { method: "POST", body: input });
      if (!session.access_token || !session.refresh_token || !session.user?.id) throw new ApiError(503, "Contul nu poate fi deschis momentan.");
      setSession(req, res, session);
      return send(res, 200, { user: publicUser(session.user) });
    } catch (error) { fail(res, error); }
  };
}

export default createAccountHandler();
