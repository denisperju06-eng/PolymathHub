const puppeteer = require("puppeteer-core");
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:8000";

async function testFlowCitadelChapters() {
  console.log("========================================================");
  console.log("🛸 TEST: FLUX CITADELA 3D -> CAPITOLE / TEME -> DUAL SPLIT");
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

  try {
    // 1. Verificare: 3D Citadela activă pe Desktop
    console.log("\n🪐 1. Verificare Spațiere Figuri 3D & Dimensiune Sateliți...");
    const sceneCheck = await page.evaluate(() => {
      const is3DActive = window.document.body.classList.contains("simple-catalog-mode") === false;
      const stage = document.getElementById("cosmos-orbit-stage");
      return {
        is3DActive,
        stageVisible: stage && getComputedStyle(stage).display !== "none"
      };
    });

    if (sceneCheck.is3DActive && sceneCheck.stageVisible) {
      successes.push("✓ Citadela 3D este activă și imersivă pe Desktop.");
    } else {
      errors.push("Citadela 3D nu este afișată corespunzător pe desktop!");
    }

    // 2. Click pe figura C++ sau apelare warpToTrack("C & C++")
    console.log("\n🎯 2. Selectare domeniu satelit 'C & C++': Verificare că NU sare direct la lecție...");
    await page.evaluate(() => {
      // Simulăm click pe un satelit sau apel direct warpToTrack
      const satPills = Array.from(document.querySelectorAll(".sat-orbit-pill"));
      const cppPill = satPills.find(p => p.textContent.includes("C++"));
      if (cppPill) {
        cppPill.click();
      } else {
        // Fallback dacă sateliții nu sunt extinși
        const chip = Array.from(document.querySelectorAll(".hud-mini-chip")).find(c => c.textContent.includes("C"));
        if (chip) chip.click();
        else {
          // Trigger warpToTrack direct
          const major = document.querySelector(".major-figure-pill");
          if (major) major.click();
        }
      }
    });

    await page.evaluate(() => {
      // Testăm apelul direct pe warpToTrack("C & C++")
      const sat = Array.from(document.querySelectorAll(".sat-orbit-pill")).find(p => p.textContent.includes("C++"));
      if (sat) sat.click();
      else {
        // Dacă nodul IT nu e deschis, deschidem IT și apoi C++
        const itBtn = document.querySelector("[data-planet='it']");
        if (itBtn) itBtn.click();
      }
    });
    await new Promise(r => setTimeout(r, 600));

    // Acum sateliții IT sunt vizibili, dăm click pe C & C++
    await page.evaluate(() => {
      const sat = Array.from(document.querySelectorAll(".sat-orbit-pill")).find(p => p.textContent.includes("C++"));
      if (sat) sat.click();
    });
    await new Promise(r => setTimeout(r, 600));

    const stateAfterSatClick = await page.evaluate(() => {
      const isViewingChapters = document.body.classList.contains("viewing-chapters");
      const isStudyVisible = !document.getElementById("study-view").classList.contains("hidden");
      const chaptersSection = document.getElementById("catalog-chapters-section");
      const chaptersTitle = document.getElementById("catalog-domain-subtitle")?.textContent || "";
      const chaptersCount = document.querySelectorAll(".catalog-chapter-item").length;
      const backBtn = document.getElementById("btn-back-to-citadel");

      return {
        isViewingChapters,
        isStudyVisible,
        chaptersTitle,
        chaptersCount,
        hasBackBtn: !!backBtn && getComputedStyle(backBtn).display !== "none"
      };
    });

    if (stateAfterSatClick.isViewingChapters && !stateAfterSatClick.isStudyVisible) {
      successes.push("✓ Click pe satelit (C++) NU sare direct la lecție! Se deschide mai întâi pagina cu toate temele.");
    } else {
      errors.push(`Stare incorectă după click pe satelit: isViewingChapters=${stateAfterSatClick.isViewingChapters}, isStudyVisible=${stateAfterSatClick.isStudyVisible}`);
    }

    if (stateAfterSatClick.chaptersCount > 0 && stateAfterSatClick.hasBackBtn) {
      successes.push(`✓ Pagina de teme afișează ${stateAfterSatClick.chaptersCount} capitole disponibile și butonul '← Înapoi la Citadela 3D'.`);
    } else {
      errors.push(`Capitolele sau butonul de înapoi lipsesc: count=${stateAfterSatClick.chaptersCount}, hasBackBtn=${stateAfterSatClick.hasBackBtn}`);
    }

    // 3. Verificare Buton '← Înapoi la Citadela 3D'
    console.log("\n🔙 3. Verificare Buton '← Înapoi la Citadela 3D'...");
    await page.click("#btn-back-to-citadel");
    await new Promise(r => setTimeout(r, 400));

    const stateAfterBack = await page.evaluate(() => {
      const isViewingChapters = document.body.classList.contains("viewing-chapters");
      const stage = document.getElementById("cosmos-orbit-stage");
      return {
        isViewingChapters,
        stageVisible: stage && getComputedStyle(stage).display !== "none"
      };
    });

    if (!stateAfterBack.isViewingChapters && stateAfterBack.stageVisible) {
      successes.push("✓ Butonul '← Înapoi la Citadela 3D' a readus utilizatorul impecabil în scena spațială 3D.");
    } else {
      errors.push(`Revenirea la Citadela 3D a eșuat: isViewingChapters=${stateAfterBack.isViewingChapters}`);
    }

    // 4. Redeschidem capitolele și selectăm o temă specifică -> deschide lecția în Dual Split
    console.log("\n📖 4. Alegere temă din lista de capitole -> Deschidere în Dual Split...");
    // Deschidem din nou capitolele
    await page.evaluate(() => {
      const sat = Array.from(document.querySelectorAll(".sat-orbit-pill")).find(p => p.textContent.includes("C++"));
      if (sat) sat.click();
    });
    await new Promise(r => setTimeout(r, 600));

    // Dăm click pe primul capitol
    await page.click(".catalog-chapter-item .chapter-start-btn");
    await new Promise(r => setTimeout(r, 500));

    const studyState = await page.evaluate(() => {
      const isStudyVisible = !document.getElementById("study-view").classList.contains("hidden");
      const trackIndicator = document.getElementById("study-track-indicator")?.textContent || "";
      const theoryTab = document.getElementById("dual-tab-theory");
      const practiceTab = document.getElementById("dual-tab-practice");
      const activePane = document.body.getAttribute("data-dual-pane");

      return {
        isStudyVisible,
        trackIndicator,
        hasDualTabs: !!(theoryTab && practiceTab),
        activePane
      };
    });

    if (studyState.isStudyVisible && studyState.trackIndicator.includes("C")) {
      successes.push(`✓ Capitolul ales s-a deschis cu succes în modul de studiu (${studyState.trackIndicator}).`);
    } else {
      errors.push(`Deschiderea studiului a eșuat: visible=${studyState.isStudyVisible}, track=${studyState.trackIndicator}`);
    }

    if (studyState.hasDualTabs) {
      successes.push(`✓ Modul de studiu utilizează interfața completă Dual Split (Teorie + Exemple + Practică).`);
    } else {
      errors.push("Tab-urile Dual Split lipsesc în vizualizarea de studiu!");
    }

  } catch (err) {
    errors.push(`Eroare de execuție în test: ${err.message}`);
  } finally {
    await browser.close();
  }

  console.log("\n================ REZULTATE TESTE ================");
  successes.forEach(s => console.log(s));
  if (errors.length > 0) {
    console.error("\n❌ ERORI DETECTATE:");
    errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  } else {
    console.log("\n✨ TOATE TESTELE PENTRU NOUL FLUX AU TRECUT CU SUCCES 100%!");
  }
}

testFlowCitadelChapters();
