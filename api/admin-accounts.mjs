import { ApiError, configuration, send, provider, sessionFor, fail, checkExpectedAccount } from "../server/auth.mjs";

export function createAdminAccountsHandler({ env = process.env, fetcher = fetch } = {}) {
  return async function handler(req, res) {
    try {
      if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        throw new ApiError(405, "Metodă indisponibilă.");
      }

      const config = configuration(env);
      if (!config) throw new ApiError(503, "Administrarea conturilor nu este disponibilă.");
      const call = provider(config, fetcher);
      const session = await sessionFor(req, res, call);
      if (!session) throw new ApiError(401, "Conectează-te pentru a accesa panoul.");
      checkExpectedAccount(req, session.user);

      const params = new URL(req.url, "http://localhost").searchParams;
      const page = Number(params.get("page") ?? "1");
      if (!Number.isSafeInteger(page) || page < 1 || page > 1_000_000) {
        throw new ApiError(400, "Pagina cerută nu este validă.");
      }
      const accessOnly = params.get("action") === "access";
      const result = await call("/rest/v1/rpc/polymath_admin_accounts", {
        method: "POST",
        token: session.token,
        body: { p_page: page, p_query: (params.get("q") || "").trim().slice(0, 120), p_access_only: accessOnly }
      });
      if (accessOnly) return send(res, 200, { allowed: result?.allowed === true });
      if (result?.allowed !== true) throw new ApiError(403, "Panoul este disponibil doar administratorilor.");
      return send(res, 200, result);
    } catch (error) {
      fail(res, error);
    }
  };
}

export default createAdminAccountsHandler();
