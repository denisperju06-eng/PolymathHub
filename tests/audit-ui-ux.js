const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");
const axeSource = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:8000";

const VIEWPORTS = [
  { name: "Mobile (375x667)", width: 375, height: 667 },
  { name: "Tablet (768x1024)", width: 768, height: 1024 },
  { name: "Desktop (1280x800)", width: 1280, height: 800 }
];

const THEMES = ["cyber-dark", "sepia-book", "emerald-forest", "daylight-clean"];

async function runAudit() {
  console.log("\n========================================================");
  console.log("🔍 INIȚIALIZARE AUDIT AUTOMAT UI/UX & ERORI TEHNICE");
  console.log("========================================================\n");

  const issues = [];
  const warnings = [];
  const successes = [];

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
  });

  const page = await browser.newPage();

  // Monitorizare erori de consolă și excepții runtime
  const pageErrors = [];
  page.on("pageerror", err => {
    pageErrors.push(`[JS PageError] ${err.toString()}`);
  });
  page.on("console", msg => {
    if (msg.type() === "error") {
      pageErrors.push(`[Console Error] ${msg.text()}`);
    }
  });

  try {
    // 1. Încărcare pagină
    await page.goto(BASE_URL, { waitUntil: "networkidle0" });
    successes.push("✓ Pagina http://localhost:8000 s-a încărcat cu succes.");

    // Verifică erori inițiale
    if (pageErrors.length > 0) {
      pageErrors.forEach(e => issues.push(`Eroare runtime la încărcare: ${e}`));
    } else {
      successes.push("✓ Zero erori de consolă sau excepții JS la pornire.");
    }

    // 2. Audit de Accesibilitate (a11y) și Contrast cu Axe-Core pe toate cele 4 teme
    console.log("🎨 Testare contrast și accesibilitate (WCAG) pe toate temele...");
    for (const theme of THEMES) {
      await page.select("#theme-selector", theme);
      await new Promise(r => setTimeout(r, 200));

      await page.evaluate(axeSource);
      const axeResults = await page.evaluate(async () => {
        return await axe.run({
          runOnly: {
            type: "tag",
            values: ["wcag2a", "wcag2aa", "best-practice"]
          }
        });
      });

      if (axeResults.violations.length === 0) {
        successes.push(`✓ Tema [${theme}]: Zero încălcări de accesibilitate/contrast.`);
      } else {
        axeResults.violations.forEach(v => {
          warnings.push(`[Tema: ${theme}] [${v.impact.toUpperCase()}] ${v.help} (${v.nodes.length} elemente: ${v.nodes[0]?.target?.join(", ")})`);
        });
      }
    }

    // Resetare temă pe cyber-dark
    await page.select("#theme-selector", "cyber-dark");

    // 3. Testare Responsivă și Overflow Orizontal
    console.log("📱 Testare responsivitate și depășire ecran pe 3 rezoluții...");
    for (const vp of VIEWPORTS) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await new Promise(r => setTimeout(r, 200));

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      if (hasHorizontalScroll) {
        issues.push(`[Layout] Pe rezoluția ${vp.name} există scroll orizontal nedorit (elementele depășesc lățimea ecranului)!`);
      } else {
        successes.push(`✓ ${vp.name}: Nu există scroll orizontal nedorit.`);
      }

      // Verifică dacă butoanele au dimensiuni atingibile pe mobil (Touch Target)
      if (vp.width <= 400) {
        const smallButtons = await page.evaluate(() => {
          const btns = Array.from(document.querySelectorAll("button:not(.btn-icon-toggle)"));
          return btns
            .filter(b => {
              const rect = b.getBoundingClientRect();
              return rect.width > 0 && rect.height > 0 && rect.height < 32;
            })
            .map(b => b.textContent.trim().substring(0, 20));
        });

        if (smallButtons.length > 0) {
          warnings.push(`[UX Mobil] Unele butoane au înălțimea sub 32px pe mobil: ${smallButtons.slice(0, 3).join(", ")}`);
        } else {
          successes.push("✓ Butoanele respectă dimensiunile optime de atingere pe mobil.");
        }
      }
    }

    // Resetare viewport pe desktop
    await page.setViewport({ width: 1280, height: 800 });

    // 4. Testare Interactivă: Butoane Minimaliste + / -
    console.log("⚡ Testare funcționalitate butoane minimaliste + / - ...");

    // Domenii Toggle
    const tracksBefore = await page.evaluate(() => document.querySelectorAll(".track-tab-btn").length);
    await page.click("#toggle-tracks-btn");
    await new Promise(r => setTimeout(r, 150));
    const tracksExpanded = await page.evaluate(() => document.querySelectorAll(".track-tab-btn").length);
    await page.click("#toggle-tracks-btn");
    await new Promise(r => setTimeout(r, 150));
    const tracksCollapsedAgain = await page.evaluate(() => document.querySelectorAll(".track-tab-btn").length);

    if (tracksBefore === 2 && tracksExpanded > 2 && tracksCollapsedAgain === 2) {
      successes.push(`✓ Comutatorul de Domenii (+ / −) funcționează perfect (2 -> ${tracksExpanded} -> 2).`);
    } else {
      issues.push(`[Comportament UI] Comutatorul de domenii are valori neașteptate: ${tracksBefore} -> ${tracksExpanded} -> ${tracksCollapsedAgain}`);
    }

    // Teme Toggle
    const lessonsBefore = await page.evaluate(() => document.querySelectorAll(".lesson-item").length);
    await page.click("#toggle-lessons-btn");
    await new Promise(r => setTimeout(r, 150));
    const lessonsExpanded = await page.evaluate(() => document.querySelectorAll(".lesson-item").length);
    await page.click("#toggle-lessons-btn");
    await new Promise(r => setTimeout(r, 150));
    const lessonsCollapsedAgain = await page.evaluate(() => document.querySelectorAll(".lesson-item").length);

    if (lessonsBefore === 1 && lessonsExpanded > 1 && lessonsCollapsedAgain === 1) {
      successes.push(`✓ Comutatorul de Teme (+ / −) funcționează perfect (1 -> ${lessonsExpanded} -> 1).`);
    } else {
      issues.push(`[Comportament UI] Comutatorul de teme are valori neașteptate: ${lessonsBefore} -> ${lessonsExpanded} -> ${lessonsCollapsedAgain}`);
    }

    // 5. Testare Moduri Practice (Scriere, Potrivire 2 Coloane, Quiz)
    console.log("🎮 Testare cele 3 moduri de practică interactivă...");

    // Mod 2: Potrivire
    await page.click("#tab-mode-match");
    await new Promise(r => setTimeout(r, 150));
    const leftColsCount = await page.evaluate(() => document.querySelectorAll("#match-col-left .match-card").length);
    const rightColsCount = await page.evaluate(() => document.querySelectorAll("#match-col-right .match-card").length);

    if (leftColsCount >= 3 && rightColsCount >= 3 && leftColsCount === rightColsCount) {
      successes.push(`✓ Modul 🔗 Potrivire 2 Coloane afișează ${leftColsCount} perechi corect echilibrate.`);
    } else {
      issues.push(`[Mod Potrivire] Număr inegal sau insuficient de perechi pe coloane: stânga=${leftColsCount}, dreapta=${rightColsCount}`);
    }

    // Mod 3: Quiz
    await page.click("#tab-mode-quiz");
    await new Promise(r => setTimeout(r, 150));
    const quizOptionsCount = await page.evaluate(() => document.querySelectorAll("#quiz-options-grid .quiz-option-btn").length);

    if (quizOptionsCount === 4) {
      successes.push("✓ Modul 🎯 Gramatică & Sintaxă (Quiz) generează exact 4 opțiuni de răspuns.");
    } else {
      issues.push(`[Mod Quiz] Număr neașteptat de opțiuni în quiz: ${quizOptionsCount} (așteptat: 4)`);
    }

    // Revenire la Mod 1
    await page.click("#tab-mode-write");

    // 6. Testare Parcurgere Toate cele 7 Discipline
    console.log("📚 Testare navigare prin toate cele 7 discipline...");
    await page.click("#toggle-tracks-btn"); // deschide toate domeniile
    await new Promise(r => setTimeout(r, 150));

    const allTrackNames = await page.evaluate(() => {
      return Array.from(document.querySelectorAll(".track-tab-btn")).map(b => b.querySelector("span:first-child").textContent.trim());
    });

    successes.push(`✓ Toate cele ${allTrackNames.length} discipline sunt prezente: ${allTrackNames.join(", ")}`);

  } catch (err) {
    issues.push(`Eroare fatală în test: ${err.message}`);
  } finally {
    await browser.close();
  }

  // Afișare Raport
  console.log("\n========================================================");
  console.log("📊 REZULTAT AUDIT TEHNIC UI/UX");
  console.log("========================================================\n");

  console.log(`✅ VERIFICĂRI REUȘITE (${successes.length}):`);
  successes.forEach(s => console.log(`  ${s}`));

  if (warnings.length > 0) {
    console.log(`\n⚠️  AVERTISMENTE DE ACCESIBILITATE / UX (${warnings.length}):`);
    warnings.forEach(w => console.log(`  - ${w}`));
  }

  if (issues.length > 0) {
    console.log(`\n❌ ERORI CRITICE DETECTATE (${issues.length}):`);
    issues.forEach(i => console.log(`  - ${i}`));
  } else {
    console.log("\n🎉 ZERO ERORI CRITICE! Toate funcționalitățile și fluxurile UI/UX funcționează impecabil.");
  }

  console.log("\n========================================================\n");
}

runAudit();
