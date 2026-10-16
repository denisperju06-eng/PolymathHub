const puppeteer = require("puppeteer-core");
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:8000";

async function testNewUX() {
  console.log("========================================================");
  console.log("🧪 TESTARE SPECIFICĂ: NOILE CERINȚE UX / UI");
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
  // TEST 1: CATALOG - DOAR 4-6 DOMENII AFIȘATE INIȚIAL + BUTON EXTINDERE
  // =========================================================================
  console.log("\n📚 1. Verificare Catalog: Număr inițial moderat de domenii (6) & Buton Toggle...");

  const initialDomainsCount = await page.evaluate(() => document.querySelectorAll(".domain-card").length);
  if (initialDomainsCount === 6) {
    successes.push(`✓ Catalog: Inițial sunt afișate exact 6 domenii (moderat, aerisit, fără aglomerație).`);
  } else {
    errors.push(`Catalog Eșuat: Număr inițial de domenii afișate este ${initialDomainsCount} (așteptat: 6).`);
  }

  // Verificare buton toggle
  const toggleBtnVisible = await page.evaluate(() => {
    const wrap = document.getElementById("catalog-domains-toggle-wrap");
    const btn = document.getElementById("btn-toggle-domains");
    return wrap && !wrap.classList.contains("hidden") && btn && btn.textContent.includes("15");
  });

  if (toggleBtnVisible) {
    successes.push("✓ Butonul 'Afișează toate domeniile (15)' este prezent și corect etichetat.");
  } else {
    errors.push("Butonul de afișare toate domeniile lipsește sau nu este vizibil.");
  }

  // Apăsare pe butonul de extindere
  await page.click("#btn-toggle-domains");
  await new Promise(r => setTimeout(r, 200));

  const expandedCount = await page.evaluate(() => document.querySelectorAll(".domain-card").length);
  const btnExpandedText = await page.evaluate(() => document.getElementById("btn-toggle-domains-text").textContent);

  if (expandedCount === 15 && btnExpandedText.includes("Restrânge")) {
    successes.push(`✓ La click pe toggle, s-au extins toate cele 15 domenii, iar butonul a devenit '${btnExpandedText}'.`);
  } else {
    errors.push(`Extinderea domeniilor a eșuat: count=${expandedCount}, text="${btnExpandedText}"`);
  }

  // =========================================================================
  // TEST 2: CLICK PE DOMENIU DERULEAZĂ AUTOMAT LA TEME / CAPITOLE
  // =========================================================================
  console.log("\n🎯 2. Verificare: Click pe un domeniu duce direct la capitolele lui...");

  // Revenim sus
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 100));

  // Click pe cardul Python
  await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".domain-card"));
    const pyCard = cards.find(c => c.textContent.includes("Python"));
    if (pyCard) pyCard.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // Verificăm dacă secțiunea de capitole este în vizualizare sau derulată
  const chaptersTitle = await page.evaluate(() => document.getElementById("catalog-domain-subtitle").textContent);
  const scrollY = await page.evaluate(() => window.scrollY);

  if (chaptersTitle.includes("PYTHON") && scrollY > 100) {
    successes.push(`✓ Click pe domeniu a activat Python și a derulat automat la lista de capitole (scrollY: ${scrollY}px).`);
  } else {
    errors.push(`Tranziția la capitole a eșuat: title="${chaptersTitle}", scrollY=${scrollY}`);
  }

  // =========================================================================
  // TEST 3: DICȚIONAR FĂRĂ TEXTUL "2x2"
  // =========================================================================
  console.log("\n📖 3. Verificare Dicționar: Fără textul nepotrivit '2x2'...");

  // Intrăm în modul studiu
  await page.click(".catalog-chapter-item .chapter-start-btn");
  await new Promise(r => setTimeout(r, 300));

  const dictHeaderText = await page.evaluate(() => {
    const header = document.querySelector(".dictionary-header");
    return header ? header.textContent : "";
  });

  if (!dictHeaderText.includes("2x2") && dictHeaderText.includes("Dicționar")) {
    successes.push(`✓ Dicționarul nu mai conține textul derutant '2x2' (titlu curat: "${dictHeaderText.trim()}").`);
  } else {
    errors.push(`Titlul dicționarului încă conține '2x2': "${dictHeaderText}"`);
  }

  // =========================================================================
  // TEST 4: PRACTICĂ PE MOBIL (375x667) - 2 COLOANE PARALELE (FĂRĂ 8 RÂNDURI)
  // =========================================================================
  console.log("\n📱 4. Verificare Practică pe Mobil (375px): 2 coloane paralele fără scroll infinit...");

  // Comutare la viewport de mobil
  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 200));

  // Trecem la modul de potrivire
  await page.click("#tab-mode-match");
  await new Promise(r => setTimeout(r, 250));

  // Verificăm numărul de coloane din grid pe mobil
  const matchingGridCols = await page.evaluate(() => {
    const grid = document.querySelector(".matching-columns-grid");
    return window.getComputedStyle(grid).getPropertyValue("grid-template-columns").split(" ").length;
  });

  const leftCardsCount = await page.evaluate(() => document.querySelectorAll("#match-col-left .match-card").length);
  const rightCardsCount = await page.evaluate(() => document.querySelectorAll("#match-col-right .match-card").length);

  // Verificăm absența scroll-ului orizontal
  const hasHorizontalScroll = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);

  if (matchingGridCols === 2 && leftCardsCount === 4 && rightCardsCount === 4 && !hasHorizontalScroll) {
    successes.push(`✓ Pe mobil (375px): Modul Potrivire păstrează 2 coloane simetrice (${leftCardsCount} la stânga, ${rightCardsCount} la dreapta), eliminând lista lungă de 8 rânduri!`);
  } else {
    errors.push(`Potrivire pe mobil eșuată: coloane=${matchingGridCols}, stânga=${leftCardsCount}, dreapta=${rightCardsCount}, scrollOrizontal=${hasHorizontalScroll}`);
  }

  // Testare interacțiune joc de potrivire pe mobil
  await page.click("#match-col-left .match-card");
  await new Promise(r => setTimeout(r, 100));
  const isLeftSelected = await page.evaluate(() => {
    const card = document.querySelector("#match-col-left .match-card");
    return card && card.classList.contains("selected");
  });

  if (isLeftSelected) {
    successes.push("✓ Selectarea unui element din stânga pe mobil funcționează impecabil și evidențiază cardul.");
  } else {
    errors.push("Selectarea cardului din stânga nu a funcționat pe mobil.");
  }

  await browser.close();

  console.log("\n================ REZULTATE TESTE ================");
  successes.forEach(s => console.log(s));
  if (errors.length > 0) {
    console.error("\n❌ ERORI DETECTATE:");
    errors.forEach(e => console.error(" - " + e));
    process.exit(1);
  } else {
    console.log("\n✨ TOATE TESTELE NOI AU TRECUT CU SUCCES 100%!");
  }
}

testNewUX().catch(err => {
  console.error("Test Crash:", err);
  process.exit(1);
});
