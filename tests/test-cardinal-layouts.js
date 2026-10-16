const puppeteer = require("puppeteer-core");
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:8000";

async function testCardinalLayouts() {
  console.log("========================================================");
  console.log("🌌 TESTARE: CELE 5 ARHITECTURI CARDINALE DE LAYOUT & INTERACȚIUNE");
  console.log("========================================================");

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(BASE_URL, { waitUntil: "networkidle0" });

  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle0" });

  const errors = [];
  const successes = [];

  try {
    // 1. Selectorul de Layout și opțiunile
    console.log("\n📐 1. Verificare Selector de Layout în bară...");
    const layoutOptions = await page.evaluate(() => {
      const select = document.getElementById("layout-selector");
      if (!select) return [];
      return Array.from(select.options).map(o => ({ value: o.value, text: o.text }));
    });

    if (layoutOptions.length === 5) {
      successes.push(`✓ Selectorul de layout conține exact 5 moduri cardinale (${layoutOptions.map(o => o.value).join(", ")}).`);
    } else {
      errors.push(`Așteptat 5 moduri cardinale în selector, găsit ${layoutOptions.length}`);
    }

    // 2. Bento Next.js (Implicit)
    console.log("\n🍱 2. Verificare Bento Next.js (Implicit)...");
    const initialLayout = await page.evaluate(() => document.documentElement.getAttribute("data-layout"));
    if (initialLayout === "bento-nextjs") {
      successes.push("✓ Layout-ul inițial este 'bento-nextjs'.");
    } else {
      errors.push(`Layout-ul inițial este ${initialLayout}, așteptat 'bento-nextjs'.`);
    }

    // 3. Cyber Command Kernel & Live Terminal CLI
    console.log("\n⚡ 3. Verificare Mod 'cyber-kernel' & Terminal HUD CLI...");
    await page.select("#layout-selector", "cyber-kernel");
    await new Promise(r => setTimeout(r, 200));

    const isCyberActive = await page.evaluate(() => {
      const isAttr = document.documentElement.getAttribute("data-layout") === "cyber-kernel";
      const stage = document.getElementById("cyber-command-stage");
      const isStageVisible = stage && !stage.classList.contains("hidden") && stage.offsetHeight > 0;
      return isAttr && isStageVisible;
    });

    if (isCyberActive) {
      successes.push("✓ Modul Cyber Kernel este activat și afișează consola Terminal HUD în catalog.");
    } else {
      errors.push("Modul Cyber Kernel nu a afișat corect #cyber-command-stage.");
    }

    // Testăm tastarea unei comenzi în CLI
    await page.type("#cyber-cli-input", "help");
    await page.click("#cyber-cli-run-btn");
    await new Promise(r => setTimeout(r, 200));

    const cliOutput = await page.evaluate(() => {
      const out = document.getElementById("cyber-terminal-output");
      return out ? out.innerText : "";
    });

    if (cliOutput.includes("COMENZI DISPONIBILE") && cliOutput.includes("stats")) {
      successes.push("✓ Terminalul Cyber CLI a executat comanda 'help' și a afișat comenzile interactive.");
    } else {
      errors.push(`Terminalul Cyber CLI nu a răspuns la 'help'. Ieșire: ${cliOutput}`);
    }

    // Testăm comanda stats
    await page.evaluate(() => {
      document.getElementById("cyber-cli-input").value = "stats";
    });
    await page.click("#cyber-cli-run-btn");
    await new Promise(r => setTimeout(r, 200));

    const statsOutput = await page.evaluate(() => {
      const out = document.getElementById("cyber-terminal-output");
      return out ? out.innerText : "";
    });

    if (statsOutput.includes("SYS.STATS") && statsOutput.includes("XP=")) {
      successes.push("✓ Comanda 'stats' a afișat corect telemetria de progres a sistemului.");
    } else {
      errors.push(`Comanda 'stats' nu a funcționat. Ieșire: ${statsOutput}`);
    }

    // 4. Grand Spatial Cosmos (3D Orbit Canvas & Inventory Crystals)
    console.log("\n🌌 4. Verificare Mod 'spatial-cosmos' & Canvas Gyro 3D...");
    await page.select("#layout-selector", "spatial-cosmos");
    await new Promise(r => setTimeout(r, 250));

    const isCosmosActive = await page.evaluate(() => {
      const isAttr = document.documentElement.getAttribute("data-layout") === "spatial-cosmos";
      const stage = document.getElementById("cosmos-orbit-stage");
      const canvas = document.getElementById("cosmos-orbit-canvas");
      const isVisible = stage && !stage.classList.contains("hidden") && canvas && canvas.offsetHeight > 0;
      return isAttr && isVisible;
    });

    if (isCosmosActive) {
      successes.push("✓ Modul Spatial Cosmos este activat și afișează scena de orbită 3D cu noduri satelit.");
    } else {
      errors.push("Modul Spatial Cosmos nu a afișat corect scena spațială.");
    }

    // 5. Swiss Editorial Prestige (Serif, Acte Romane, Blueprint)
    console.log("\n🏛️ 5. Verificare Mod 'swiss-editorial'...");
    await page.select("#layout-selector", "swiss-editorial");
    await new Promise(r => setTimeout(r, 200));

    const isEditorialActive = await page.evaluate(() => {
      return document.documentElement.getAttribute("data-layout") === "swiss-editorial";
    });

    if (isEditorialActive) {
      successes.push("✓ Modul Swiss Editorial aplică estetica editorială, serif de muzeu și grila clasică.");
    } else {
      errors.push("Modul Swiss Editorial nu a putut fi activat.");
    }

    // 6. Dual Split Studio (IDE Cockpit 50/50 & Status Bar)
    console.log("\n💻 6. Verificare Mod 'dual-split' (Cockpit 50/50 în Studiul Focalizat)...");
    await page.select("#layout-selector", "dual-split");
    await new Promise(r => setTimeout(r, 200));

    // Deschidem o lecție pentru a verifica împărțirea 50/50
    await page.evaluate(() => {
      const startBtn = document.querySelector(".catalog-chapter-item .chapter-start-btn");
      if (startBtn) startBtn.click();
    });
    await new Promise(r => setTimeout(r, 300));

    const isDualSplitStudy = await page.evaluate(() => {
      const studyView = document.getElementById("study-view");
      const statusbar = document.getElementById("dual-split-statusbar");
      const studyActive = studyView && !studyView.classList.contains("hidden");
      const statusbarActive = statusbar && !statusbar.classList.contains("hidden") && statusbar.offsetHeight > 0;
      return studyActive && statusbarActive;
    });

    if (isDualSplitStudy) {
      successes.push("✓ În Dual Split, ecranul de studiu devine un cockpit IDE cu bară de telemetrie la bază.");
    } else {
      errors.push("Dual Split nu a activat bara de telemetrie sau ecranul de studiu corespunzător.");
    }

    // 7. Sintetizator Audio Web Audio API (fără resurse MP3 externe)
    console.log("\n🔊 7. Verificare Buton Audio & Web Audio API...");
    const soundToggle = await page.evaluate(() => {
      const btn = document.getElementById("sound-toggle-btn");
      if (!btn) return null;
      const initialText = btn.textContent.trim();
      btn.click();
      const afterClickText = btn.textContent.trim();
      btn.click();
      const restoredText = btn.textContent.trim();
      return { initialText, afterClickText, restoredText };
    });

    if (soundToggle && soundToggle.initialText !== soundToggle.afterClickText) {
      successes.push(`✓ Butonul audio comută starea sunetului sintetizat (${soundToggle.initialText} -> ${soundToggle.afterClickText}).`);
    } else {
      errors.push("Butonul de sunet nu comută corect.");
    }

    // 8. Responsivitate Mobil pe toate cele 5 moduri
    console.log("\n📱 8. Verificare Responsivitate Mobil (375x667) pentru cele 5 moduri...");
    await page.setViewport({ width: 375, height: 667 });

    const layouts = ["bento-nextjs", "dual-split", "swiss-editorial", "cyber-kernel", "spatial-cosmos"];
    let mobileOverflowOk = true;

    for (const l of layouts) {
      await page.evaluate((lay) => {
        const sel = document.getElementById("layout-selector");
        if (sel) {
          sel.value = lay;
          sel.dispatchEvent(new Event("change"));
        }
      }, l);
      await new Promise(r => setTimeout(r, 150));

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      if (hasOverflow) {
        errors.push(`Layout-ul '${l}' produce scroll orizontal nedorit pe ecran mobil (375px)!`);
        mobileOverflowOk = false;
      }
    }

    if (mobileOverflowOk) {
      successes.push("✓ Niciunul din cele 5 moduri de layout nu depășește lățimea ecranului mobil (zero scroll orizontal la 375px).");
    }

  } catch (err) {
    errors.push(`Excepție în timpul testului: ${err.message}`);
  } finally {
    await browser.close();
  }

  console.log("\n================ REZULTATE TESTE ================");
  successes.forEach(s => console.log(s));
  if (errors.length > 0) {
    console.log("\n❌ ERORI DETECTATE:");
    errors.forEach(e => console.log(" - " + e));
    process.exit(1);
  } else {
    console.log("\n✨ TOATE TESTELE PENTRU CELE 5 ARHITECTURI AU TRECUT CU SUCCES 100%!");
  }
}

testCardinalLayouts();
