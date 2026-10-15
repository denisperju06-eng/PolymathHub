const puppeteer = require("puppeteer-core");
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:8000";

async function testPythonAndThemes() {
  console.log("========================================================");
  console.log("🧪 TESTARE SPECIFICĂ: PYTHON BUGFIX & SELECTOR TEME EMOJI");
  console.log("========================================================");

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(BASE_URL, { waitUntil: "networkidle0" });

  const errors = [];
  const successes = [];

  // =========================================================================
  // PARTEA 1: VERIFICARE PYTHON - STARTER CODE CURAT & BUTON SOLUȚIE
  // =========================================================================
  console.log("\n🐍 1. Verificare Python: Starter Code fără răspuns pre-completat...");
  
  // Selectăm domeniul Python
  await page.evaluate(() => {
    const domainCard = Array.from(document.querySelectorAll(".domain-card"))
      .find(c => c.textContent.includes("Python"));
    if (domainCard) domainCard.click();
  });
  await new Promise(r => setTimeout(r, 200));

  // Intrăm în prima lecție Python
  await page.evaluate(() => {
    const startBtn = document.querySelector(".catalog-chapter-item .chapter-start-btn");
    if (startBtn) startBtn.click();
  });
  await new Promise(r => setTimeout(r, 300));

  // Verificăm conținutul din textarea
  const initialEditorValue = await page.evaluate(() => {
    const ta = document.getElementById("user-answer-input");
    return ta ? ta.value : "";
  });

  const hasPreFilledAnswer = initialEditorValue.includes("scor >= 90") || 
                             initialEditorValue.includes("print(\"Excelent\")") ||
                             initialEditorValue.includes("print(\"Nota B\")");

  if (!hasPreFilledAnswer && initialEditorValue.includes("scor = 85")) {
    successes.push("✓ Python: La intrarea în lecție, răspunsul NU este pre-completat.");
  } else {
    errors.push(`Python Eșuat: Textarea conține deja soluția rezolvată: "${initialEditorValue}"`);
  }

  // Testare Mă dau bătut -> Copiază Soluția & Validează
  console.log("🏳️ 2. Verificare Python: 'Mă dau bătut' și 'Copiază Soluția & Validează'...");
  await page.click("#give-up-btn");
  await new Promise(r => setTimeout(r, 200));

  const isSolutionDrawerOpen = await page.evaluate(() => {
    const dr = document.getElementById("solution-drawer");
    return dr && !dr.classList.contains("hidden");
  });

  if (isSolutionDrawerOpen) {
    successes.push("✓ Panoul soluției oficiale s-a deschis corect la 'Mă dau bătut'.");
  } else {
    errors.push("Panoul soluției nu s-a deschis la click pe 'Mă dau bătut'.");
  }

  // Apăsăm butonul Copiază Soluția & Validează
  await page.click("#apply-solution-btn");
  await new Promise(r => setTimeout(r, 300));

  const copiedValue = await page.evaluate(() => {
    const ta = document.getElementById("user-answer-input");
    return ta ? ta.value : "";
  });

  if (copiedValue === "undefined") {
    errors.push("Python Eșuat: S-a copiat literal textul 'undefined'!");
  } else if (copiedValue.includes("if scor >= 90:") && copiedValue.includes("print(\"Excelent\")")) {
    successes.push("✓ Python: Soluția oficială a fost copiată impecabil în editor (fără 'undefined').");
  } else {
    errors.push(`Python Eșuat: Valoare neașteptată copiată: "${copiedValue}"`);
  }

  // =========================================================================
  // PARTEA 2: VERIFICARE ELIMINARE BUTON PROFIL & SETĂRI
  // =========================================================================
  console.log("\n🧹 3. Verificare UI Lean: Absența oricărui buton de profil...");
  const profileElements = await page.evaluate(() => {
    return {
      navBtn: !!document.getElementById("nav-profile-btn"),
      headerBtn: !!document.getElementById("header-profile-btn"),
      userSwitcher: !!document.getElementById("header-user-switcher"),
      profileView: !!document.getElementById("profile-view")
    };
  });

  if (!profileElements.navBtn && !profileElements.headerBtn && !profileElements.userSwitcher && !profileElements.profileView) {
    successes.push("✓ Butoanele de profil, meniul de profil și setările au fost eliminate complet din UI.");
  } else {
    errors.push(`Elemente de profil încă detectate în DOM: ${JSON.stringify(profileElements)}`);
  }

  // =========================================================================
  // PARTEA 3: VERIFICARE SELECTOR TEME CU EMOJI COLORAT
  // =========================================================================
  console.log("\n🎨 4. Verificare Selector Teme cu Emoji Colorat...");
  const themeOptions = await page.evaluate(() => {
    const sel = document.getElementById("theme-selector");
    if (!sel) return [];
    return Array.from(sel.options).map(o => ({ value: o.value, text: o.text }));
  });

  const expectedThemes = [
    { value: "emerald-forest", emoji: "🟢" },
    { value: "cyber-dark", emoji: "🌑" },
    { value: "sepia-book", emoji: "📜" },
    { value: "neon-amethyst", emoji: "🟣" },
    { value: "sunset-amber", emoji: "🌅" },
    { value: "ocean-deep", emoji: "🌊" },
    { value: "daylight-clean", emoji: "☀️" }
  ];

  let allThemesValid = true;
  for (const exp of expectedThemes) {
    const opt = themeOptions.find(o => o.value === exp.value);
    if (!opt || !opt.text.includes(exp.emoji)) {
      allThemesValid = false;
      errors.push(`Tema ${exp.value} lipsește sau nu conține emoji-ul ${exp.emoji}`);
    }
  }

  if (allThemesValid && themeOptions.length === 7) {
    successes.push("✓ Toate cele 7 opțiuni de fundal conțin emoji-urile colorate asociate.");
  }

  // Testare comutare fundal
  await page.select("#theme-selector", "sunset-amber");
  await new Promise(r => setTimeout(r, 150));
  const isSunset = await page.evaluate(() => document.documentElement.getAttribute("data-theme") === "sunset-amber");

  await page.select("#theme-selector", "emerald-forest");
  await new Promise(r => setTimeout(r, 150));
  const isEmerald = await page.evaluate(() => document.documentElement.getAttribute("data-theme") === "emerald-forest");

  if (isSunset && isEmerald) {
    successes.push("✓ Comutatorul de fundal funcționează perfect prin selectarea opțiunii cu emoji.");
  } else {
    errors.push("Comutarea fundalului a eșuat la selectarea unei opțiuni.");
  }

  await browser.close();

  console.log("\n================ REZULTATE TESTE ================");
  successes.forEach(s => console.log(s));
  if (errors.length > 0) {
    console.error("\n❌ ERORI DETECTATE:");
    errors.forEach(e => console.error(" - " + e));
    process.exit(1);
  } else {
    console.log("\n✨ TOATE TESTELE SPECIFICE AU TRECUT CU SUCCES 100%!");
  }
}

testPythonAndThemes().catch(err => {
  console.error("Test Crash:", err);
  process.exit(1);
});
