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

    // 5. Testare Pagina Principală (Catalog & Domenii & Filtre Diviziuni)
    console.log("📚 Testare Pagina Principală (Catalog View & Diviziuni)...");
    const initialDomainsCount = await page.evaluate(() => document.querySelectorAll(".domain-card").length);
    if (initialDomainsCount === 6) {
      successes.push(`✓ Pagina Principală afișează inițial un număr moderat de 6 domenii pentru un aspect aerisit.`);
    } else {
      issues.push(`Număr neașteptat inițial de domenii în catalog: ${initialDomainsCount} (așteptat: 6).`);
    }

    // Extindere toate domeniile
    await page.click("#btn-toggle-domains");
    await new Promise(r => setTimeout(r, 150));
    const allDomainsCount = await page.evaluate(() => document.querySelectorAll(".domain-card").length);
    if (allDomainsCount === 15) {
      successes.push(`✓ Extinderea prin butonul toggle afișează complet toate cele 15 domenii de studiu.`);
    } else {
      issues.push(`Extinderea domeniilor a eșuat: găsite ${allDomainsCount} (așteptat: 15).`);
    }

    // Testare filtrare pe Diviziunea Informatică (inițial 6, extins 9)
    await page.click('.division-pill-btn[data-division="Informatică și Programare"]');
    await new Promise(r => setTimeout(r, 150));
    const infoInitCount = await page.evaluate(() => document.querySelectorAll(".domain-card").length);
    await page.click("#btn-toggle-domains");
    await new Promise(r => setTimeout(r, 150));
    const infoCount = await page.evaluate(() => document.querySelectorAll(".domain-card").length);
    if (infoInitCount === 6 && infoCount === 9) {
      successes.push(`✓ Filtrarea pe Diviziunea Informatică & Programare afișează 6 inițial și 9 la extindere.`);
    } else {
      issues.push(`Filtrarea pe Informatică a eșuat: inițial ${infoInitCount}, extins ${infoCount} (așteptat: 6 și 9).`);
    }

    // Testare filtrare pe Diviziunea Limbi Străine (6 domenii)
    await page.click('.division-pill-btn[data-division="Limbi Străine & Comunicare"]');
    await new Promise(r => setTimeout(r, 150));
    const langCount = await page.evaluate(() => document.querySelectorAll(".domain-card").length);
    if (langCount === 6) {
      successes.push(`✓ Filtrarea pe Diviziunea Limbi Străine & Comunicare afișează exact 6 discipline.`);
    } else {
      issues.push(`Filtrarea pe Limbi Străine a eșuat: găsite ${langCount} (așteptat: 6).`);
    }

    // Revenire la Toate Disciplinele
    await page.click('.division-pill-btn[data-division="ALL"]');
    await new Promise(r => setTimeout(r, 150));

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

    // 7. Testare Layout Dicționar & Quiz
    console.log("📐 Testare Dicționar & Quiz...");
    const dictHeaderClean = await page.evaluate(() => {
      const h = document.querySelector(".dictionary-header");
      return h && !h.textContent.includes("2x2") && h.textContent.includes("Dicționar");
    });
    if (dictHeaderClean) {
      successes.push("✓ Titlul Dicționarului este curat și nu mai conține textul derutant '(2x2)'.");
    } else {
      issues.push("Titlul dicționarului încă conține textul '(2x2)'.");
    }

    const dictCols = await page.evaluate(() => {
      const grid = document.getElementById("lesson-dictionary");
      return window.getComputedStyle(grid).getPropertyValue("grid-template-columns").split(" ").length;
    });
    if (dictCols === 2) {
      successes.push("✓ Dicționarul de Concepte este aranjat într-o grilă simetrică (2 coloane pe ecran desktop).");
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
      successes.push(`✓ Modul Quiz este aranjat simetric (${quizOptionsTotal} opțiuni pe 2 coloane).`);
    } else {
      issues.push(`Quiz-ul nu este 2x2: ${quizCols} coloane, ${quizOptionsTotal} opțiuni.`);
    }

    // Comutare la Modul Potrivire (Matching)
    await page.click("#tab-mode-match");
    await new Promise(r => setTimeout(r, 150));
    const matchCols = await page.evaluate(() => {
      const grid = document.querySelector(".matching-columns-grid");
      return window.getComputedStyle(grid).getPropertyValue("grid-template-columns").split(" ").length;
    });
    if (matchCols === 2) {
      successes.push("✓ Modul Potrivire păstrează 2 coloane paralele (Termeni vs Semnificație).");
    } else {
      issues.push(`Modul Potrivire nu are 2 coloane: detectat ${matchCols}.`);
    }

    // 8. Testare Buzunar Glisant (Pocket Drawer)
    console.log("📂 Testare Buzunar Glisant (Pocket Drawer)...");
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 100));
    await page.click("#open-pocket-drawer-btn");
    await new Promise(r => setTimeout(r, 350));
    const isPocketOpen = await page.evaluate(() => document.getElementById("pocket-drawer").classList.contains("open"));
    if (isPocketOpen) {
      successes.push("✓ Buzunarul glisant (Pocket Drawer) se deschide corect.");
    } else {
      issues.push("Buzunarul glisant nu s-a deschis la click.");
    }
    await page.click("#close-pocket-drawer-btn");
    await new Promise(r => setTimeout(r, 350));
    const isPocketClosed = await page.evaluate(() => !document.getElementById("pocket-drawer").classList.contains("open"));
    if (isPocketClosed) {
      successes.push("✓ Buzunarul glisant se închide corect.");
    } else {
      issues.push("Buzunarul glisant nu s-a închis la click pe X.");
    }

    // 9. Testare Arhitectură Multi-Pagină SPA (Activitate, Ligi, Profil - Fără Pop-up-uri)
    console.log("🌐 Testare Arhitectură Multi-Pagină SPA (Activitate, Ligi, Profil)...");
    
    // 9a. Pagina Activitate & Calendar prin click pe Streak Pill
    await page.click("#streak-pill");
    await new Promise(r => setTimeout(r, 200));
    const isActivityVisible = await page.evaluate(() => {
      const act = document.getElementById("activity-view");
      const cat = document.getElementById("catalog-view");
      const navBtn = document.getElementById("nav-activity-btn");
      return !act.classList.contains("hidden") && cat.classList.contains("hidden") && navBtn.classList.contains("active");
    });
    const calendarCellsCount = await page.evaluate(() => document.querySelectorAll("#activity-calendar-grid .calendar-cell").length);
    if (isActivityVisible && calendarCellsCount >= 28) {
      successes.push(`✓ Pagina dedicată Activitate & Calendar afișează corect ${calendarCellsCount} celule zilnice cu heatmap și statistici fără pop-up.`);
    } else {
      issues.push("Navigarea la Pagina de Activitate a eșuat sau celulele de calendar lipsesc.");
    }

    // 9b. Pagina Ligi & Realizări prin click pe XP Pill
    await page.click("#xp-pill");
    await new Promise(r => setTimeout(r, 200));
    const isLeaguesVisible = await page.evaluate(() => {
      const lg = document.getElementById("leagues-view");
      const navBtn = document.getElementById("nav-leagues-btn");
      return !lg.classList.contains("hidden") && navBtn.classList.contains("active");
    });
    const leaguesCount = await page.evaluate(() => document.querySelectorAll("#page-leagues-list .league-row").length);
    const achievementsCount = await page.evaluate(() => document.querySelectorAll("#page-achievements-grid .achievement-card").length);
    if (isLeaguesVisible && leaguesCount === 5 && achievementsCount === 5) {
      successes.push(`✓ Pagina Ligi & Realizări afișează toate cele 5 ranguri de măiestrie și 5 trofee polimate.`);
    } else {
      issues.push(`Pagina de Ligi a eșuat: ligi ${leaguesCount}, realizări ${achievementsCount}.`);
    }

    // 9c. Verificare Absență Profil & Structură Lean (4 Pagini SPA: Catalog, Studiu, Activitate, Ligi)
    const profileAbsence = await page.evaluate(() => {
      const profView = document.getElementById("profile-view");
      const navProf = document.getElementById("nav-profile-btn");
      const headerProf = document.getElementById("header-profile-btn");
      const switcher = document.getElementById("header-user-switcher");
      return !profView && !navProf && !headerProf && !switcher;
    });
    if (profileAbsence) {
      successes.push("✓ Interfață Lean: Butonul de profil, setările de profil și comutatorul multi-user au fost eliminate complet.");
    } else {
      issues.push("Elementele de profil sau switcher încă există în DOM.");
    }

    // 10. Testare Comutator Fundal / Teme cu Emoji Colorat în Antet
    console.log("🎨 Testare Selector Fundal / Teme cu Emoji Colorat...");

    const themesOptions = await page.evaluate(() => {
      const select = document.getElementById("theme-selector");
      if (!select) return [];
      return Array.from(select.options).map(o => ({ value: o.value, text: o.text }));
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

    let allEmojisMatch = true;
    for (const exp of expectedThemes) {
      const found = themesOptions.find(t => t.value === exp.value);
      if (!found || !found.text.includes(exp.emoji)) {
        allEmojisMatch = false;
        issues.push(`Tema ${exp.value} nu are emoji-ul ${exp.emoji} în textul vizibil: ${found ? found.text : "lipsă"}`);
      }
    }

    if (allEmojisMatch && themesOptions.length === 7) {
      successes.push("✓ Toate cele 7 teme au emoji-uri colorate distincte în selectorul din colțul de sus.");
    }

    // Testare comutare temă și verificare atribut data-theme
    await page.select("#theme-selector", "cyber-dark");
    await new Promise(r => setTimeout(r, 150));
    const isCyberDark = await page.evaluate(() => document.documentElement.getAttribute("data-theme") === "cyber-dark");

    await page.select("#theme-selector", "sunset-amber");
    await new Promise(r => setTimeout(r, 150));
    const isSunsetAmber = await page.evaluate(() => document.documentElement.getAttribute("data-theme") === "sunset-amber");

    // Revenire la verde
    await page.select("#theme-selector", "emerald-forest");
    await new Promise(r => setTimeout(r, 150));
    const isEmerald = await page.evaluate(() => document.documentElement.getAttribute("data-theme") === "emerald-forest");

    if (isCyberDark && isSunsetAmber && isEmerald) {
      successes.push("✓ Comutatorul de fundal schimbă instant și corect tema vizuală a aplicației.");
    } else {
      issues.push(`Comutarea temelor a eșuat: cyber-dark: ${isCyberDark}, sunset-amber: ${isSunsetAmber}, emerald: ${isEmerald}`);
    }

    // 11. Testare Soluție Asistată 50/50 (Anti-Cheat & Penalizare XP)
    console.log("⚖️ Testare regulă anti-cheat și penalizare pentru soluție asistată (50/50)...");
    await page.click("#nav-study-btn");
    await new Promise(r => setTimeout(r, 200));
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

    // 12. Revenire în Catalog
    await page.click("#nav-catalog-btn");
    await new Promise(r => setTimeout(r, 200));
    const isBackInCatalog = await page.evaluate(() => !document.getElementById("catalog-view").classList.contains("hidden"));
    if (isBackInCatalog) {
      successes.push("✓ Navigarea înapoi la Catalog funcționează impecabil.");
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
