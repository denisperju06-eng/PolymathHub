const puppeteer = require("puppeteer-core");
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:8000";

async function testSolarSystemAndGamification() {
  console.log("========================================================");
  console.log("🪐 TEST: SISTEM SOLAR 3D, DUAL SPLIT WORKSPACE & GAMIFICARE CLAUDE 12");
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
    // 1. Verificare Navigație Lean & Buton Sunet Încadrat
    console.log("\n🧭 1. Verificare Bară Superioară (Navigație Lean & Sunet Integrat)...");
    const navInfo = await page.evaluate(() => {
      const topBar = document.querySelector(".top-bar");
      const soundBtn = document.getElementById("sound-toggle-btn");
      const controlsCluster = document.querySelector(".controls-cluster");
      const visibleNavButtons = Array.from(document.querySelectorAll(".top-nav-links .nav-link-btn"))
        .filter(b => getComputedStyle(b).display !== "none");

      const isInside = controlsCluster && controlsCluster.contains(soundBtn) && topBar && topBar.contains(soundBtn);
      return {
        buttonCount: visibleNavButtons.length,
        buttonLabels: visibleNavButtons.map(b => b.textContent.trim()),
        soundInside: isInside
      };
    });

    if (navInfo.buttonCount === 3) {
      successes.push(`✓ Navigația este simplificată la exact 3 tab-uri principale: ${navInfo.buttonLabels.join(", ")}`);
    } else {
      errors.push(`Așteptat 3 butoane vizibile în navigație, găsit ${navInfo.buttonCount} (${navInfo.buttonLabels.join(", ")})`);
    }

    if (navInfo.soundInside) {
      successes.push("✓ Butonul de sunet este ferm ancorat în interiorul barei de navigație (în controls-cluster).");
    } else {
      errors.push("Butonul de sunet nu se află în interiorul controls-cluster!");
    }

    // 2. Verificare Teme Noi (Tactile Neumorphism & Aurora Borealis)
    console.log("\n🎨 2. Verificare Teme Noi: Neumorphism & Aurora...");
    await page.select("#theme-selector", "tactile-neumorphic");
    await new Promise(r => setTimeout(r, 100));
    let currentTheme = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
    if (currentTheme === "tactile-neumorphic") {
      successes.push("✓ Tema 'tactile-neumorphic' (Soft Clay) este aplicată corect.");
    } else {
      errors.push(`Eșec aplicare tema tactile-neumorphic (curent: ${currentTheme})`);
    }

    await page.select("#theme-selector", "aurora-borealis");
    await new Promise(r => setTimeout(r, 100));
    currentTheme = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
    if (currentTheme === "aurora-borealis") {
      successes.push("✓ Tema 'aurora-borealis' (Northern Lights Glow) este aplicată corect.");
    } else {
      errors.push(`Eșec aplicare tema aurora-borealis (curent: ${currentTheme})`);
    }

    // 3. Verificare Sistem Solar 3D Orrery în Spatial Cosmos
    console.log("\n🪐 3. Verificare Sistem Solar Polimat 3D Orrery...");
    await page.select("#layout-selector", "spatial-cosmos");
    await new Promise(r => setTimeout(r, 200));

    const solarSystemInfo = await page.evaluate(() => {
      const stage = document.getElementById("cosmos-orbit-stage");
      const canvas = document.getElementById("cosmos-orbit-canvas");
      const shortcuts = Array.from(document.querySelectorAll(".cosmos-jump-btn")).map(b => b.textContent.trim());
      const hudCard = document.getElementById("cosmos-hud-card");
      return {
        stageVisible: stage && !stage.classList.contains("hidden"),
        canvasHeight: canvas ? canvas.clientHeight : 0,
        shortcutsCount: shortcuts.length,
        shortcuts,
        hudExists: !!hudCard
      };
    });

    if (solarSystemInfo.stageVisible && solarSystemInfo.canvasHeight >= 500) {
      successes.push(`✓ Scena Sistemului Solar este activă și generoasă (${solarSystemInfo.canvasHeight}px înălțime canvas).`);
    } else {
      errors.push(`Scena spațială nu este optimă (înălțime: ${solarSystemInfo.canvasHeight}px, vizibil: ${solarSystemInfo.stageVisible})`);
    }

    if (solarSystemInfo.shortcutsCount === 5) {
      successes.push(`✓ Toate cele 5 butoane rapide de navigare cerească sunt prezente (${solarSystemInfo.shortcuts.join(" | ")})`);
    } else {
      errors.push(`Așteptat 5 butoane de comandă rapidă a galaxiei, găsit ${solarSystemInfo.shortcutsCount}`);
    }

    // 4. Verificare Dual Split Topic Navigator & Workspace
    console.log("\n💻 4. Verificare Dual Split Topic Workspace (Survivor 12)...");
    await page.select("#layout-selector", "dual-split");
    await new Promise(r => setTimeout(r, 200));

    // Deschidem studiul
    await page.click("#nav-study-btn");
    await new Promise(r => setTimeout(r, 300));

    const dualSplitInfo = await page.evaluate(() => {
      const topicNav = document.getElementById("dual-split-topic-nav");
      const isVisible = topicNav && getComputedStyle(topicNav).display !== "none";
      const chapterSelect = document.getElementById("dual-chapter-select");
      const optionsCount = chapterSelect ? chapterSelect.options.length : 0;
      const tabTheory = document.getElementById("dual-tab-theory");
      const tabExamples = document.getElementById("dual-tab-examples");
      const tabPractice = document.getElementById("dual-tab-practice");
      return {
        isVisible,
        optionsCount,
        tabsPresent: !!(tabTheory && tabExamples && tabPractice)
      };
    });

    if (dualSplitInfo.isVisible && dualSplitInfo.optionsCount > 0 && dualSplitInfo.tabsPresent) {
      successes.push(`✓ Dual Split Topic Workspace este activat în studiul focalizat (${dualSplitInfo.optionsCount} capitole în selector, 3 tab-uri tematice).`);
    } else {
      errors.push(`Dual Split Topic Workspace nu s-a inițializat corect (vizibil: ${dualSplitInfo.isVisible}, opt: ${dualSplitInfo.optionsCount})`);
    }

    // 5. Verificare Hub Gamificare (Claude Experiment 12 - Fără Cufăr)
    console.log("\n🏆 5. Verificare Hub Gamificare (Claude Experiment 12)...");
    await page.click("#nav-leagues-btn");
    await new Promise(r => setTimeout(r, 300));

    const gamificationInfo = await page.evaluate(() => {
      const hud = document.querySelector(".gamification-hud");
      const aura = document.querySelector(".avatar-aura");
      const levelBadge = document.getElementById("hudLevelBadge");
      const quests = [
        document.getElementById("quest-row-1"),
        document.getElementById("quest-row-2"),
        document.getElementById("quest-row-3")
      ].filter(Boolean);
      const timelineSteps = document.querySelectorAll(".league-step");
      const calendarCells = document.querySelectorAll("#gamification-calendar-grid .calendar-cell");
      const chestElement = document.querySelector(".chest-stage, .chest-vault-card, #chestContainer");

      return {
        hudPresent: !!hud,
        auraPresent: !!aura,
        levelText: levelBadge ? levelBadge.textContent.trim() : "",
        questCount: quests.length,
        timelineStepsCount: timelineSteps.length,
        calendarCellsCount: calendarCells.length,
        hasChest: !!chestElement
      };
    });

    if (gamificationInfo.hudPresent && gamificationInfo.auraPresent) {
      successes.push("✓ Gamification HUD este activ cu aura rotativă conică în jurul avatarului.");
    } else {
      errors.push("Gamification HUD sau aura conică lipsesc!");
    }

    if (gamificationInfo.questCount === 3) {
      successes.push("✓ Cele 3 Misiuni Zilnice de Măiestrie sunt active și afișează progresul.");
    } else {
      errors.push(`Așteptat 3 misiuni zilnice, găsit ${gamificationInfo.questCount}`);
    }

    if (gamificationInfo.timelineStepsCount === 5) {
      successes.push("✓ Ierarhia Ligilor conține cele 5 trepte verticale (Bronz, Argint, Aur, Platină, Diamant).");
    } else {
      errors.push(`Așteptat 5 trepte de ligă în timeline, găsit ${gamificationInfo.timelineStepsCount}`);
    }

    if (gamificationInfo.calendarCellsCount === 28) {
      successes.push("✓ Calendarul lunar (28 de celule) este integrat armonios în Hub-ul de Gamificare.");
    } else {
      errors.push(`Așteptat 28 celule calendar în gamificare, găsit ${gamificationInfo.calendarCellsCount}`);
    }

    if (!gamificationInfo.hasChest) {
      successes.push("✓ Cufărul 3D instabil a fost eliminat complet conform cerinței utilizatorului.");
    } else {
      errors.push("Cufărul a rămas prezent în DOM!");
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
    console.log("\n✨ TOATE TESTELE PENTRU NOILE CERINȚE AU TRECUT CU SUCCES 100%!");
  }
}

testSolarSystemAndGamification();
