const puppeteer = require("puppeteer-core");
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:8000";

async function testMultiuserAndPython() {
  console.log("========================================================");
  console.log("🧪 TESTARE SPECIFICĂ: PROFILURI MULTIPLE & PYTHON BUGFIX");
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
  
  // Selectăm domeniul Python și prima lecție (py-new-1)
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
    successes.push("✓ Python Bug 1 Rezolvat: La intrarea în lecție, răspunsul NU mai este pre-completat!");
  } else {
    errors.push(`Python Bug 1 Eșuat: Textarea conține deja soluția rezolvată: "${initialEditorValue}"`);
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
    errors.push("Python Bug 2 Eșuat: S-a copiat literal textul 'undefined'!");
  } else if (copiedValue.includes("if scor >= 90:") && copiedValue.includes("print(\"Excelent\")")) {
    successes.push("✓ Python Bug 2 Rezolvat: Soluția oficială a fost copiată impecabil în editor (fără 'undefined').");
  } else {
    errors.push(`Python Bug 2 Eșuat: Valoare neașteptată copiată: "${copiedValue}"`);
  }

  // =========================================================================
  // PARTEA 2: VERIFICARE SISTEM CONTURI & PROFILURI MULTIPLE
  // =========================================================================
  console.log("\n👥 3. Verificare Sistem Multi-User: Creare Profil Nou pentru Prieten...");

  // Navigăm la pagina de Profil
  await page.click("#nav-profile-btn");
  await new Promise(r => setTimeout(r, 300));

  // Verificăm dacă secțiunea de profiluri multiple există
  const multiSectionExists = await page.evaluate(() => {
    return !!document.getElementById("profiles-management-section");
  });
  if (multiSectionExists) {
    successes.push("✓ Secțiunea 'Conturi & Profiluri Multiple' este prezentă pe pagina de profil.");
  } else {
    errors.push("Secțiunea 'Conturi & Profiluri Multiple' nu a fost găsită în DOM.");
  }

  // Deschidem formularul de adăugare profil nou
  await page.click("#btn-toggle-add-profile-form");
  await new Promise(r => setTimeout(r, 150));

  // Completăm datele pentru prietenul lui Denis
  await page.evaluate(() => {
    document.getElementById("new-profile-name-input").value = "Mihai";
    document.getElementById("new-profile-last-name-input").value = "Popescu";
    document.getElementById("new-profile-email-input").value = "mihai.prieten@polymath.com";
    document.getElementById("new-profile-bio-input").value = "Cont separat pentru studiu independent.";
    
    // Selectăm avatarul 🧙
    const wizardBtn = document.querySelector("#new-profile-avatar-grid .avatar-opt-btn-sm[data-avatar='🧙']");
    if (wizardBtn) wizardBtn.click();
    
    // Trimitem formularul
    const form = document.getElementById("add-profile-form");
    form.dispatchEvent(new Event("submit", { cancelable: true }));
  });
  await new Promise(r => setTimeout(r, 350));

  // Verificăm că noul profil 'Mihai' este activ acum
  const activeProfileInfo = await page.evaluate(() => {
    const name = document.getElementById("header-profile-name").textContent;
    const avatar = document.getElementById("header-avatar-icon").textContent;
    const cards = Array.from(document.querySelectorAll(".profile-user-card"));
    const activeCard = cards.find(c => c.classList.contains("active"));
    const activeCardName = activeCard ? activeCard.querySelector(".profile-user-name").textContent : "";
    return { name, avatar, activeCardName };
  });

  if (activeProfileInfo.name === "Mihai" && activeProfileInfo.avatar === "🧙" && activeProfileInfo.activeCardName.includes("Mihai")) {
    successes.push("✓ Profilul nou 'Mihai' a fost creat și activat automat, sincronizat în antet și listă.");
  } else {
    errors.push(`Eroare activare profil nou: ${JSON.stringify(activeProfileInfo)}`);
  }

  // Verificăm că Mihai are 0 XP
  const mihaiInitialXp = await page.evaluate(() => {
    const xpText = document.getElementById("xp-count").textContent;
    return parseInt(xpText, 10);
  });
  if (mihaiInitialXp === 0) {
    successes.push("✓ Profilul nou începe corect cu 0 XP și progres curat.");
  } else {
    errors.push(`Profilul nou are XP diferit de zero: ${mihaiInitialXp}`);
  }

  // Acum testăm comutarea înapoi pe contul inițial (Denis) prin lista din Profil
  console.log("\n🔄 4. Verificare Comutare între Conturi (Mihai -> Denis -> Mihai)...");
  await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".profile-user-card"));
    const denisCard = cards.find(c => c.textContent.includes("Denis"));
    if (denisCard) {
      const switchBtn = denisCard.querySelector(".btn-switch-profile");
      if (switchBtn) switchBtn.click();
    }
  });
  await new Promise(r => setTimeout(r, 350));

  const currentHeaderNameAfterSwitch = await page.evaluate(() => {
    return document.getElementById("header-profile-name").textContent;
  });

  if (currentHeaderNameAfterSwitch === "Denis") {
    successes.push("✓ Comutarea înapoi pe profilul 'Denis' a funcționat instant!");
  } else {
    errors.push(`Comutarea pe Denis a eșuat, antetul afișează: "${currentHeaderNameAfterSwitch}"`);
  }

  // Verificăm și comutatorul rapid din antet (Dropdown Header Switcher)
  console.log("⚡ 5. Verificare Comutator Rapid din Antet (Header Switcher Dropdown)...");
  await page.click("#header-switch-user-btn");
  await new Promise(r => setTimeout(r, 200));

  const isDropdownVisible = await page.evaluate(() => {
    const dd = document.getElementById("header-profiles-dropdown");
    return dd && !dd.classList.contains("hidden");
  });

  if (isDropdownVisible) {
    successes.push("✓ Meniul derulant de schimbare rapidă a contului din antet se deschide corect.");
  } else {
    errors.push("Dropdown-ul din antet nu s-a deschis.");
  }

  // Selectăm profilul Mihai direct din dropdown
  await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll(".dropdown-profile-item"));
    const mihaiItem = items.find(i => i.textContent.includes("Mihai"));
    if (mihaiItem) mihaiItem.click();
  });
  await new Promise(r => setTimeout(r, 350));

  const finalActiveName = await page.evaluate(() => {
    return document.getElementById("header-profile-name").textContent;
  });

  if (finalActiveName === "Mihai") {
    successes.push("✓ Comutarea contului direct din meniul de antet funcționează perfect!");
  } else {
    errors.push(`Comutarea din dropdown a eșuat: ${finalActiveName}`);
  }

  // Comutăm înapoi pe Denis pentru a lăsa contul implicit
  await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".profile-user-card"));
    const denisCard = cards.find(c => c.textContent.includes("Denis"));
    if (denisCard) {
      const switchBtn = denisCard.querySelector(".btn-switch-profile");
      if (switchBtn) switchBtn.click();
    }
  });
  await new Promise(r => setTimeout(r, 200));

  await browser.close();

  console.log("\n========================================================");
  console.log("📊 REZULTATE FINALE:");
  console.log("========================================================");
  successes.forEach(s => console.log(s));
  if (errors.length > 0) {
    console.error("\n❌ ERORI:");
    errors.forEach(e => console.error("  - " + e));
    process.exit(1);
  } else {
    console.log(`\n🎉 TOATE CELE ${successes.length} VERIFICĂRI AU TRECUT CU SUCCES 100%!`);
  }
}

testMultiuserAndPython().catch(err => {
  console.error("Fatal test error:", err);
  process.exit(1);
});
