const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
fs.mkdirSync(output, { recursive: true });
const files = fs.readdirSync(root).filter(file => /^(index\.html|styles\.css|studio\.css|app\.js|studio\.js|account\.js|vocabulary\.js|manifest\.json|curriculum(?:-[\w-]+)?\.js)$/.test(file));
for (const file of files) fs.copyFileSync(path.join(root, file), path.join(output, file));
for (const required of ["index.html", "app.js", "studio.js", "vocabulary.js", "studio.css"]) {
  if (!fs.existsSync(path.join(output, required))) throw new Error(`Missing required asset: ${required}`);
}
console.log(`Static build ready: ${files.length} assets in dist/`);
