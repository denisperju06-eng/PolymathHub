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

const THEMES = [
  "emerald-forest",
  "cyber-dark",
  "sepia-book",
  "neon-amethyst",
  "sunset-amber",
  "ocean-deep",
  "daylight-clean"
];

async function runAudit() {
  console.log("\n========================================================");
  console.log("🔍 INIȚIALIZARE AUDIT AUTOMAT UI/UX & ARHITECTURĂ v2");
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

    if (pageErrors.length > 0) {
      pageErrors.forEach(e => issues.push(`Eroare runtime la încărcare: ${e}`));
    } else {
      successes.push("✓ Zero erori de consolă sau excepții JS la pornire.");
    }

    // 2. Verificare Temă Implicită: Emerald Forest (Verde)
    const initialTheme = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
    if (initialTheme === "emerald-forest") {
      successes.push("✓ Tema implicită a aplicației este [emerald-forest] (Verde Zen).");
    } else {
      issues.push(`Tema implicită este [${initialTheme}], se aștepta [emerald-forest].`);
    }

    // 3. Testare Contrast și Accesibilitate (WCAG 2.1 AA) pe toate cele 7 teme
    console.log("🎨 Testare contrast și accesibilitate (WCAG) pe toate cele 7 teme...");
    for (const theme of THEMES) {
      await page.select("#theme-selector", theme);
      await new Promise(r => setTimeout(r, 150));

      await page.evaluate(axeSource);
      const axeResults = await page.evaluate(async () => {
        return await axe.run({
          runOnly: {
            type: "tag",
            values: ["wcag2a", "wcag2aa"]
          }
        });
      });

      if (axeResults.violations.length === 0) {
        successes.push(`✓ Tema [${theme}]: Zero încălcări WCAG.`);
      } else {
        axeResults.violations.forEach(v => {
          warnings.push(`[Tema: ${theme}] [${v.impact.toUpperCase()}] ${v.help} (${v.nodes[0]?.target?.join(", ")})`);
        });
      }
    }

    // Revenire la tema emerald-forest
    await page.select("#theme-selector", "emerald-forest");

    // 4. Testare Responsivă și Overflow Orizontal pe 3 Rezoluții
    console.log("📱 Testare responsivitate și depășire ecran pe 3 rezoluții...");
    for (const vp of VIEWPORTS) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await new Promise(r => setTimeout(r, 150));

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      if (hasHorizontalScroll) {
        issues.push(`[Layout] Pe rezoluția ${vp.name} există scroll orizontal nedorit!`);
      } else {
        successes.push(`✓ ${vp.name}: Fără scroll orizontal nedorit.`);
      }

      // Verifică dimensiunile optime de atingere pe mobil (Touch Target >= 32px)
      if (vp.width <= 400) {
        const smallButtons = await page.evaluate(() => {
          const btns = Array.from(document.querySelectorAll("button:not(.btn-close)"));
          return btns
            .filter(b => {
              const rect = b.getBoundingClientRect();
              return rect.width > 0 && rect.height > 0 && rect.height < 32;
            })
            .map(b => b.textContent.trim().substring(0, 20));
        });

        if (smallButtons.length > 0) {
          warnings.push(`[UX Mobil] Butoane cu înălțime sub 32px: ${smallButtons.slice(0, 3).join(", ")}`);
        } else {
          successes.push("✓ Butoanele respectă dimensiunile optime de atingere pe mobil.");
        }
      }
    }

    // Resetare viewport pe Desktop
    await page.setViewport({ width: 1280, height: 800 });

    // 5. Testare Pagina Principală (Catalog & Domenii)
    console.log("📚 Testare Pagina Principală (Catalog View)...");
    const domainCardsCount = await page.evaluate(() => document.querySelectorAll(".domain-card").length);
    if (domainCardsCount === 7) {
      successes.push(`✓ Pagina Principală conține exact toate cele 7 domenii de studiu.`);
    } else {
      issues.push(`Număr neașteptat de domenii în catalog: ${domainCardsCount} (așteptat: 7).`);
    }

    // Verifică lista de capitole din catalog
    const chaptersCount = await page.evaluate(() => document.querySelectorAll(".catalog-chapter-item").length);
    if (chaptersCount > 10) {
      successes.push(`✓ Lista de capitole din catalog afișează ${chaptersCount} capitole pentru domeniul curent.`);
    } else {
      issues.push(`Prea puține capitole afișate în catalog: ${chaptersCount}`);
    }

    // Căutare în capitole
    await page.type("#catalog-search-input", "between");
    await new Promise(r => setTimeout(r, 150));
    const filteredCount = await page.evaluate(() => document.querySelectorAll(".catalog-chapter-item").length);
    if (filteredCount >= 1 && filteredCount < chaptersCount) {
      successes.push(`✓ Căutarea în catalog funcționează (${filteredCount} capitole găsite pentru 'between').`);
    } else {
      issues.push(`Filtrarea căutării în catalog nu funcționează corect (găsite: ${filteredCount}).`);
    }
    // Curățare căutare
    await page.evaluate(() => {
      const input = document.getElementById("catalog-search-input");
      input.value = "";
      input.dispatchEvent(new Event("input"));
    });

    // 6. Testare Trecere în Modul Studiu (Study View)
    console.log("⚡ Testare tranziție în Studiul Focalizat...");
    await page.click(".catalog-chapter-item .chapter-start-btn");
    await new Promise(r => setTimeout(r, 200));

    const isStudyVisible = await page.evaluate(() => {
      const study = document.getElementById("study-view");
      const catalog = document.getElementById("catalog-view");
      return !study.classList.contains("hidden") && catalog.classList.contains("hidden");
    });

    if (isStudyVisible) {
      successes.push("✓ Comutarea între Catalog View și Study View funcționează impecabil.");
    } else {
      issues.push("Eroare la comutarea în Study View (elementele nu au clasele corespunzătoare).");
    }

    // 7. Testare Layout 2x2 (Dicționar & Quiz)
    console.log("📐 Testare simetrie 2x2 Grid...");
    const dictCols = await page.evaluate(() => {
      const grid = document.getElementById("lesson-dictionary");
      return window.getComputedStyle(grid).getPropertyValue("grid-template-columns").split(" ").length;
    });
    if (dictCols === 2) {
      successes.push("✓ Dicționarul de Concepte este aranjat într-o grilă simetrică 2x2 (2 coloane).");
    } else {
      issues.push(`Dicționarul nu are 2 coloane: detectat ${dictCols} coloane.`);
    }

    // Comutare la Quiz
    await page.click("#tab-mode-quiz");
    await new Promise(r => setTimeout(r, 150));
    const quizCols = await page.evaluate(() => {
      const grid = document.getElementById("quiz-options-grid");
      return window.getComputedStyle(grid).getPropertyValue("grid-template-columns").split(" ").length;
    });
    const quizOptionsTotal = await page.evaluate(() => document.querySelectorAll(".quiz-option-btn").length);
    if (quizCols === 2 && quizOptionsTotal === 4) {
      successes.push(`✓ Modul Quiz este aranjat simetric 2x2 (${quizOptionsTotal} opțiuni pe 2 coloane).`);
    } else {
      issues.push(`Quiz-ul nu este 2x2: ${quizCols} coloane, ${quizOptionsTotal} opțiuni.`);
    }

    // 8. Testare Buzunar Glisant (Pocket Drawer)
    console.log("📂 Testare Buzunar Glisant (Pocket Drawer)...");
    await page.click("#open-pocket-drawer-btn");
    await new Promise(r => setTimeout(r, 200));
    const isPocketOpen = await page.evaluate(() => document.getElementById("pocket-drawer").classList.contains("open"));
    if (isPocketOpen) {
      successes.push("✓ Buzunarul glisant (Pocket Drawer) se deschide corect.");
    } else {
      issues.push("Buzunarul glisant nu s-a deschis la click.");
    }
    await page.click("#close-pocket-drawer-btn");
    await new Promise(r => setTimeout(r, 200));
    const isPocketClosed = await page.evaluate(() => !document.getElementById("pocket-drawer").classList.contains("open"));
    if (isPocketClosed) {
      successes.push("✓ Buzunarul glisant se închide corect.");
    } else {
      issues.push("Buzunarul glisant nu s-a închis la click pe X.");
    }

    // 9. Testare Modale Interactive (Calendar & Ligi)
    console.log("🏆 Testare Modale Interactive (Streak & XP)...");
    // Modal Calendar
    await page.click("#streak-pill");
    await new Promise(r => setTimeout(r, 200));
    const isCalendarOpen = await page.evaluate(() => !document.getElementById("calendar-modal").classList.contains("hidden"));
    const calendarCellsCount = await page.evaluate(() => document.querySelectorAll("#calendar-days-grid .calendar-cell").length);
    if (isCalendarOpen && calendarCellsCount >= 28) {
      successes.push(`✓ Modalul Calendar Lunar se deschide corect și conține ${calendarCellsCount} celule zilnice cu culori de legendă.`);
    } else {
      issues.push("Modalul calendar nu s-a deschis sau nu are celule suficiente.");
    }
    await page.click("#close-calendar-modal-btn");
    await new Promise(r => setTimeout(r, 150));

    // Modal Ligi
    await page.click("#xp-pill");
    await new Promise(r => setTimeout(r, 200));
    const isLeaguesOpen = await page.evaluate(() => !document.getElementById("leagues-modal").classList.contains("hidden"));
    const leaguesCount = await page.evaluate(() => document.querySelectorAll("#leagues-list .league-row").length);
    if (isLeaguesOpen && leaguesCount === 5) {
      successes.push(`✓ Modalul Ligi se deschide corect și afișează toate cele 5 ranguri de măiestrie.`);
    } else {
      issues.push(`Modalul ligi nu s-a deschis sau nu afișează 5 ranguri (afiseaza: ${leaguesCount}).`);
    }
    await page.click("#close-leagues-modal-btn");
    await new Promise(r => setTimeout(r, 150));

    // 10. Testare Soluție Asistată 50/50 (Anti-Cheat & Penalizare XP)
    console.log("⚖️ Testare regulă anti-cheat și penalizare pentru soluție asistată (50/50)...");
    await page.click("#tab-mode-write");
    await new Promise(r => setTimeout(r, 150));

    // Deschide soluția oficială
    await page.click("#give-up-btn");
    await new Promise(r => setTimeout(r, 150));

    const initialXp = await page.evaluate(() => parseInt(document.getElementById("xp-count").textContent, 10) || 0);

    // Aplică soluția în editor
    await page.click("#apply-solution-btn");
    await new Promise(r => setTimeout(r, 250));

    const newXp = await page.evaluate(() => parseInt(document.getElementById("xp-count").textContent, 10) || 0);
    const feedbackText = await page.evaluate(() => document.getElementById("validation-feedback").textContent);

    if (newXp === initialXp + 5 && feedbackText.includes("50/50")) {
      successes.push(`✓ Penalizare aplicată corect: Utilizatorul a primit doar +5 XP (de la ${initialXp} la ${newXp}) și avertisment 50/50.`);
    } else {
      issues.push(`Penalizarea de asistență a eșuat: XP a crescut de la ${initialXp} la ${newXp}, mesaj: ${feedbackText}`);
    }

    // 11. Revenire în Catalog
    await page.click("#back-to-catalog-btn");
    await new Promise(r => setTimeout(r, 200));
    const isBackInCatalog = await page.evaluate(() => !document.getElementById("catalog-view").classList.contains("hidden"));
    if (isBackInCatalog) {
      successes.push("✓ Butonul '← Înapoi la Cursuri' navighează cu succes înapoi la catalog.");
    } else {
      issues.push("Revenirea la catalog a eșuat.");
    }

  } catch (err) {
    issues.push(`Eroare fatală în executarea auditului: ${err.message}`);
  } finally {
    await browser.close();
  }

  // Raport Final
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
    console.log(`\n❌ ERORI DETECTATE (${issues.length}):`);
    issues.forEach(i => console.log(`  - ${i}`));
  } else {
    console.log("\n🎉 ZERO ERORI! Toate cele 5 cerințe de UI/UX și arhitectură funcționează impecabil.");
  }

  console.log("\n========================================================\n");

  if (issues.length > 0) process.exit(1);
}

runAudit();
