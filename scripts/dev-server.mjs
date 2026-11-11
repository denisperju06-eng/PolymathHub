import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import account from "../api/account.mjs";
import progress from "../api/progress.mjs";
import adminAccounts from "../api/admin-accounts.mjs";
import { readJson, send, fail } from "../server/auth.mjs";
const root = path.resolve(new URL("..", import.meta.url).pathname);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json" };
const assets = /^(index\.html|styles\.css|studio\.css|app\.js|studio\.js|account\.js|vocabulary\.js|manifest\.json|curriculum(?:-[\w-]+)?\.js|sql-(?:course|progress)\.(?:html|css|js))$/;
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname === "/api/account") return account(req, res);
  if (url.pathname === "/api/progress") return progress(req, res);
  if (url.pathname === "/api/admin-accounts") return adminAccounts(req, res);
  if (url.pathname === "/api/sql-lab") {
    if (!["GET", "POST"].includes(req.method)) {
      res.setHeader("Allow", "GET, POST");
      return send(res, 405, { error: "Trimite interogarea prin POST." });
    }
    try {
      const body = req.method === "GET" ? "{}" : JSON.stringify(await readJson(req, 8192));
      if (Buffer.byteLength(body) > 8192) return send(res, 413, { error: "Cererea este prea mare." });
      const child = execFile("python3", [path.join(root, "api", "sql-lab.py"), ...(req.method === "GET" ? ["--catalog"] : [])], { timeout: 5000, maxBuffer: 65536 }, (error, stdout) => {
        if (error) return send(res, 503, { error: "Laboratorul SQL nu este disponibil. Verifică instalarea Python 3." });
        try {
          const [status, payload] = req.method === "GET" ? [200, JSON.parse(stdout)] : JSON.parse(stdout);
          send(res, status, payload);
        } catch {
          send(res, 502, { error: "Laboratorul SQL a întors un răspuns invalid." });
        }
      });
      child.stdin.on("error", () => {});
      child.stdin.end(body);
    } catch (error) {
      fail(res, error);
    }
    return;
  }
  const file = url.pathname === "/" ? (process.env.POLYMATH_SQL_LAB === "1" ? "sql-course.html" : "index.html") : url.pathname.slice(1);
  if (!assets.test(file)) { res.writeHead(404); return res.end("Not found"); }
  try { const body = await fs.readFile(path.join(root, file)); res.writeHead(200, { "Content-Type": types[path.extname(file)], "Cache-Control": "no-store" }); res.end(body); }
  catch { res.writeHead(404); res.end("Not found"); }
});
server.listen(Number(process.env.PORT) || 8000, "127.0.0.1", () => console.log(`PolymathHub: http://127.0.0.1:${server.address().port}`));
