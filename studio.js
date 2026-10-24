(function () {
  "use strict";
  const V = window.PolymathVocabulary;
  const KEY = "polymath_vocabulary_v1";
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const paths = {
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>', book: '<path d="M3 4h6a4 4 0 0 1 3 2 4 4 0 0 1 3-2h6v15h-6a4 4 0 0 0-3 2 4 4 0 0 0-3-2H3zM12 6v15"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
    sound: '<path d="m11 4-6 5H2v6h3l6 5zM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>', bolt: '<path d="m13 2-9 12h7l-1 8 10-13h-8z"/>', check: '<path d="m5 12 4 4L19 6"/>', globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>', code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20"/>', close: '<path d="m6 6 12 12M6 18 18 6"/>'
  };
  const icon = (name, size = 20) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
  function readStore() {
    try {
      const parsed = JSON.parse(localStorage.getItem(KEY) || "{}");
      return { saved: Array.isArray(parsed.saved) ? parsed.saved.filter(x => typeof x === "string") : [], learned: Array.isArray(parsed.learned) ? parsed.learned.filter(x => typeof x === "string") : [], cache: Array.isArray(parsed.cache) ? parsed.cache.filter(x => x && V.LANGUAGES[x.lang] && typeof x.id === "string" && typeof x.word === "string" && Array.isArray(x.examples)) : [] };
    } catch { return { saved: [], learned: [], cache: [] }; }
  }
  let store = readStore();
  const ui = { lang: "en", query: "", filter: "all", selected: "en:curious", tab: "meaning", controller: null, revision: 0, review: [], reviewIndex: 0, reviewCorrect: 0 };
  const allWords = () => [...V.WORDS, ...store.cache.filter(item => !V.WORDS.some(word => word.id === item.id))];
  const currentWord = () => allWords().find(word => word.id === ui.selected);
  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); return true; }
    catch { window.PolymathApp.toast("Spațiul de stocare este indisponibil. Modificarea rămâne doar în această sesiune."); return false; }
  }
  function vocabParams(word) { return { lang: ui.lang, ...(word ? { word: word.word } : {}) }; }
  function selectWord(word, scroll = false) {
    ui.selected = word.id; ui.tab = "meaning";
    window.PolymathApp.navigate("vocabulary", vocabParams(word));
    if (scroll && window.innerWidth < 1150) $("word-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function renderHome() {
    const { state, lessons, tracks } = window.PolymathApp.snapshot();
    const active = lessons.find(lesson => lesson.id === state.activeLessonId) || lessons[0];
    const completed = lessons.filter(lesson => state.masteryPoints[lesson.id] > 0).length;
    const today = new Date();
    const date = new Intl.DateTimeFormat("ro-RO", { weekday: "long", day: "numeric", month: "long" }).format(today);
    const dateKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const done = state.dailyHistory[dateKey] || 0;
    const goal = state.preferences?.dailyTarget || 3;
    const percent = Math.min(100, Math.round(done / goal * 100));
    const name = state.user?.firstName || "exploratorule";
    $("home-view").innerHTML = `
      <div class="page-intro"><div><span class="eyebrow">CÂTE PUȚIN, ÎN FIECARE ZI</span><h2>Bine ai revenit, ${escape(name)}<span class="greeting-dot">.</span></h2><p>O idee nouă. Un cuvânt nou. Un pas mai departe.</p></div><span class="today-label">${escape(date)}</span></div>
      <section class="welcome-banner"><div class="welcome-copy"><span class="banner-kicker"><span></span> CURIOZITATEA TA MERITĂ UN SPAȚIU</span><h3>Lumea e mare.<br>Învață ceva <em>nou.</em></h3><p>Programare și limbi străine, într-un singur loc.<br>Alege ce te inspiră. Noi păstrăm firul.</p><button class="studio-primary" data-go="study">Continuă învățarea ${icon("arrow", 18)}</button><span class="banner-footnote">În ritmul tău. Fără presiune.</span></div><div class="learning-art" aria-hidden="true"><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-dot dot-one"></div><div class="art-dot dot-two"></div><span class="art-spark">✦</span><div class="art-card art-code"><span class="art-tiny">o idee care prinde viață</span><strong><i>&lt;</i> hello, world <i>/&gt;</i></strong><div class="art-lines"><b></b><b></b><b></b></div></div><div class="art-card art-word"><span>EN → RO</span><strong>curiosity</strong><small>curiozitate · începutul oricărei descoperiri</small></div><div class="art-stamp">crește<br><strong>câte puțin ↗</strong></div></div></section>
      <div class="home-metrics"><div><span class="metric-icon sage">${icon("book")}</span><p><strong>${completed}</strong><span>capitole explorate</span></p><small>din ${lessons.length} disponibile</small></div><div><span class="metric-icon apricot">${icon("bolt")}</span><p><strong>${state.streak} <small>zile</small></strong><span>ritmul tău de învățare</span></p><small>Orice pas contează</small></div><div><span class="metric-icon lilac">${icon("star")}</span><p><strong>${store.saved.length}</strong><span>cuvinte în colecție</span></p><button class="text-action" data-go="vocabulary">Deschide ${icon("arrow", 14)}</button></div></div>
      <div class="home-section-heading"><h3>Următorul tău pas</h3><button class="text-action" data-go="catalog">Explorează toate domeniile ${icon("arrow", 16)}</button></div>
      <div class="home-next-grid"><article class="continue-card"><div class="card-topline"><span class="soft-label">${icon("book", 14)} CONTINUĂ DE UNDE AI RĂMAS</span><span class="level-chip">${escape(active.track)}</span></div><h4>${escape(active.title)}</h4><p>Un concept explicat clar, urmat de exemple și practică.</p><div class="continue-footer"><span>Teorie <i>·</i> Exemple <i>·</i> Practică</span><button class="circle-action" data-go="study" aria-label="Continuă lecția">${icon("arrow")}</button></div></article><article class="daily-word-card"><div class="card-topline"><span class="soft-label">CUVÂNTUL DE AZI</span><span>🇬🇧</span></div><div class="daily-word-title">curious <button class="sound-button" data-speak="en:curious" aria-label="Ascultă pronunția pentru curious">${icon("sound", 19)}</button></div><span class="pronunciation">/ˈkjʊəriəs/ · adjectiv</span><p>Unele descoperiri încep cu o simplă întrebare.</p><button class="text-action" data-go="vocabulary" data-word="curious">Descoperă sensul și exersează ${icon("arrow", 16)}</button></article></div>
      <div class="home-bottom-grid"><section><div class="home-section-heading"><h3>Urmează-ți curiozitatea</h3><span class="muted-small">${tracks.length} domenii de explorat</span></div><div class="quick-paths"><button data-start-track="Python"><span class="path-icon sage">${icon("code", 21)}</span><span><strong>Scrie prima idee în cod</strong><small>Python · De la zero, pas cu pas</small></span>${icon("arrow", 17)}</button><button data-start-track="Engleză (A1–A2)"><span class="path-flag">🇬🇧</span><span><strong>Mai aproape de o conversație</strong><small>Engleză · Expresii din viața de zi cu zi</small></span>${icon("arrow", 17)}</button><button data-start-track="Limba Franceză"><span class="path-flag">🇫🇷</span><span><strong>Un bonjour pentru un nou început</strong><small>Franceză · Descoperă limba și cultura</small></span>${icon("arrow", 17)}</button></div></section><section class="daily-goal-card"><span class="soft-label">MOMENTUL TĂU DE AZI</span><div class="goal-ring" style="--goal:${percent}%"><strong>${done}<small>/ ${goal}</small></strong></div><h4>${done >= goal ? "Ți-ai atins obiectivul!" : "Pașii mici devin obiceiuri."}</h4><p>${done >= goal ? "Bucură-te de progresul de astăzi." : `${Math.max(0, goal - done)} exerciții până la obiectivul zilnic.`}</p><button class="text-action" data-go="activity">Vezi progresul ${icon("arrow", 15)}</button></section></div>
      <footer class="studio-footer"><span>PolymathHub <span>·</span> Un spațiu pentru minți curioase.</span><span>Făcut pentru a învăța cu sens.</span></footer>`;
  }
  function renderVocabulary(params = {}) {
    if (params.lang && V.LANGUAGES[params.lang]) ui.lang = params.lang;
    if (params.word) {
      const found = allWords().find(word => word.lang === ui.lang && V.normalize(word.word) === V.normalize(params.word));
      if (found) ui.selected = found.id;
      else ui.query = params.word.slice(0, 60);
    }
    if (currentWord()?.lang !== ui.lang) ui.selected = allWords().find(word => word.lang === ui.lang)?.id;
    const lang = V.LANGUAGES[ui.lang];
    $("vocabulary-view").innerHTML = `<div class="page-intro"><div><span class="eyebrow">CUVINTE CARE DESCHID LUMI</span><h2>Nu doar traduce.<br class="mobile-break"> Înțelege.</h2><p>Sens, context și un pic de practică. Cu româna alături.</p></div><button class="studio-primary" data-review>${icon("bolt", 17)} Practică rapidă</button></div>
      <section class="vocabulary-search"><div class="language-tabs" role="group" aria-label="Limba pe care o înveți">${Object.entries(V.LANGUAGES).map(([code, language]) => `<button class="language-tab ${code === ui.lang ? "active" : ""}" data-language="${code}" aria-pressed="${code === ui.lang}">${language.flag} ${language.name}<small>${language.native}</small></button>`).join("")}<span class="native-language">Limba ta: <strong>Română 🇷🇴</strong></span></div><form id="word-search-form" class="word-search-form">${icon("search", 22)}<label class="sr-only" for="word-search">Caută în vocabular</label><input type="search" id="word-search" maxlength="60" value="${escape(ui.query)}" placeholder="Ce cuvânt ai întâlnit astăzi?" autocomplete="off"><button class="studio-primary" type="submit">Caută ${icon("arrow", 17)}</button></form><p class="search-note">Caută în fișe în română sau ${lang.name.toLocaleLowerCase()}. Pentru alte cuvinte, scrie în ${lang.name.toLocaleLowerCase()} și apasă Caută.</p><div id="lookup-status" role="status" aria-live="polite"></div></section>
      <div class="vocab-toolbar"><div class="collection-tabs" role="group" aria-label="Filtrează cuvintele"><button data-collection="all" class="${ui.filter === "all" ? "active" : ""}" aria-pressed="${ui.filter === "all"}">Descoperă <span id="all-count"></span></button><button data-collection="saved" class="${ui.filter === "saved" ? "active" : ""}" aria-pressed="${ui.filter === "saved"}">${icon("star", 15)} Colecția mea <span id="saved-count"></span></button><button data-collection="learned" class="${ui.filter === "learned" ? "active" : ""}" aria-pressed="${ui.filter === "learned"}">${icon("check", 15)} Exersate</button></div><span class="muted-small">Alege un card. Descoperă o lume.</span></div>
      <div class="vocabulary-layout"><section aria-label="Carduri de vocabular"><div class="word-grid" id="word-grid"></div><div class="vocabulary-tip"><span>✦</span><p><strong>Cuvintele se țin minte mai bine în context.</strong> Citește exemplul cu voce tare, apoi încearcă să creezi propria propoziție.</p></div></section><aside id="word-detail" class="word-detail" aria-label="Sens și practică pentru cuvântul selectat"></aside></div>`;
    renderWords(); renderDetail();
  }
  function filteredWords() {
    return V.search(allWords(), ui.query, ui.lang).filter(word => ui.filter === "all" || (ui.filter === "saved" ? store.saved : store.learned).includes(word.id));
  }
  function renderWords() {
    if (!$("word-grid")) return;
    const words = filteredWords();
    $("all-count").textContent = allWords().filter(word => word.lang === ui.lang).length;
    $("saved-count").textContent = allWords().filter(word => word.lang === ui.lang && store.saved.includes(word.id)).length;
    $("word-grid").innerHTML = words.length ? words.map((word, index) => `<article class="word-card ${word.id === ui.selected ? "selected" : ""} ${store.learned.includes(word.id) ? "word-learned" : ""}" style="--card-delay:${Math.min(index, 8) * 30}ms"><div class="word-card-top"><span class="level-chip">${escape(word.level)}</span><button class="save-word ${store.saved.includes(word.id) ? "saved" : ""}" data-save="${escape(word.id)}" aria-label="${store.saved.includes(word.id) ? "Elimină din colecție" : "Salvează"}: ${escape(word.word)}" aria-pressed="${store.saved.includes(word.id)}">${icon("star", 18)}</button></div><button class="word-open" data-open-word="${escape(word.id)}" aria-expanded="${word.id === ui.selected}"><strong lang="${word.lang}">${escape(word.word)}</strong><span class="pronunciation">${escape(word.ipa || word.pos)}</span><span class="word-topic">${escape(word.topic)} ${store.learned.includes(word.id) ? icon("check", 14) : ""}</span><span class="word-discover">${word.id === ui.selected ? "Explorezi acest cuvânt" : "Descoperă sensul"} ${icon("arrow", 16)}</span></button></article>`).join("") : `<div class="vocab-empty"><span>${icon(ui.filter === "saved" ? "star" : "search", 30)}</span><h3>${ui.query ? "Un cuvânt nou de descoperit." : ui.filter === "saved" ? "Colecția ta începe cu un cuvânt." : "Primul pas te așteaptă."}</h3><p>${ui.query ? "Nu este în selecția locală. Apasă Caută pentru dicționarul online." : ui.filter === "saved" ? "Apasă pe steaua unui card ca să îl păstrezi aici." : "Exersează un cuvânt și îl vei găsi în această listă."}</p>${ui.filter !== "all" ? '<button class="studio-secondary" data-collection="all">Descoperă cuvinte</button>' : ""}</div>`;
  }
  function renderDetail() {
    const word = currentWord();
    if (!word || !$("word-detail")) return;
    const lang = V.LANGUAGES[word.lang];
    const practice = ui.tab === "practice";
    $("word-detail").innerHTML = `<div class="detail-topline"><span class="soft-label">${lang.flag} ${lang.native.toUpperCase()} <span>→</span> ROMÂNĂ</span><button class="sound-button" data-speak="${escape(word.id)}" aria-label="Ascultă pronunția pentru ${escape(word.word)}">${icon("sound", 18)}</button></div><div class="detail-title"><h3 lang="${practice ? "ro" : word.lang}">${practice ? "Încearcă tu." : escape(word.word)}</h3><span class="level-chip">${escape(word.level)}</span></div><p class="detail-translation">${practice ? "Fără grabă. Fiecare încercare te ajută." : escape(word.translation)}</p><span class="pronunciation">${practice ? "Completează propoziția de mai jos." : `${escape(word.ipa)} · ${escape(word.pos)}`}</span><div class="detail-tabs" role="tablist" aria-label="Explorează cuvântul">${[["meaning", "Explicație"], ["examples", "Exemple"], ["practice", "Practică"]].map(([tab, label]) => `<button role="tab" id="detail-tab-${tab}" data-detail-tab="${tab}" aria-selected="${ui.tab === tab}" aria-controls="detail-content" tabindex="${ui.tab === tab ? 0 : -1}">${label}</button>`).join("")}</div><div id="detail-content" class="detail-content" role="tabpanel" aria-labelledby="detail-tab-${ui.tab}">
      ${ui.tab === "meaning" ? `<div class="definition-block"><span>ÎN ROMÂNĂ</span><p>${escape(word.ro)}</p></div><div class="definition-block native-definition"><span>${word.nativeLang === "en" && word.lang !== "en" ? "EXPLICAȚIA SURSEI · ENGLISH" : `ÎN ${lang.name.toLocaleUpperCase()}`}</span><p lang="${word.nativeLang || word.lang}">${escape(word.native)}</p></div><div class="usage-note"><strong>Când și cum îl folosești</strong><p>${escape(word.usage)}</p></div>` : ui.tab === "examples" ? word.examples.length ? word.examples.map((example, index) => `<div class="example-sentence"><span class="example-number">0${index + 1}</span><div><p lang="${word.lang}">${escape(example.text)}</p><span>${escape(example.ro)}</span></div></div>`).join("") : '<p class="empty-examples">Sursa nu oferă o propoziție pentru acest sens. Poți exersa sensul în fila Practică.</p>' : word.prompt ? `<span class="practice-kicker">${word.source === "online" ? "RECUNOAȘTE CUVÂNTUL" : "COMPLETEAZĂ SPAȚIUL LIBER"}</span><p class="practice-prompt" lang="${word.source === "online" ? "ro" : word.lang}">${escape(word.prompt)}</p><form id="word-practice-form"><label for="practice-answer" class="sr-only">Răspunsul tău</label><input id="practice-answer" class="studio-input" placeholder="Scrie cuvântul în ${lang.name.toLocaleLowerCase()}…" autocomplete="off" spellcheck="false" required maxlength="80"><button class="studio-primary practice-submit" type="submit">Verifică răspunsul ${icon("check", 16)}</button></form><div id="practice-feedback" role="status" aria-live="polite"></div><button class="text-action practice-hint" data-show-answer>Am nevoie de un indiciu</button>` : '<p>Traducerea necesară exercițiului nu a fost disponibilă. Încearcă din nou căutarea online sau alege o fișă din selecția locală.</p>'}</div>
      <button class="detail-save ${store.saved.includes(word.id) ? "is-saved" : ""}" data-save="${escape(word.id)}">${icon(store.saved.includes(word.id) ? "check" : "star", 17)} ${store.saved.includes(word.id) ? "În colecția mea · elimină" : "Adaugă în colecția mea"}</button>${word.source === "online" ? `<p class="dictionary-attribution">Sens: <a href="${escape(word.sourceUrl)}" target="_blank" rel="noopener noreferrer">Wiktionary</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>${word.provider === "FreeDictionaryAPI.com" ? ' via <a href="https://freedictionaryapi.com/" target="_blank" rel="noopener noreferrer">FreeDictionaryAPI.com</a>' : ""}. Traduceri automate: <a href="https://mymemory.translated.net/" target="_blank" rel="noopener noreferrer">MyMemory</a>. ${word.partial ? "Unele traduceri sunt indisponibile." : "Sensul poate varia în funcție de context."}</p>` : '<p class="editorial-note">Fișă bilingvă · disponibilă fără internet</p>'}`;
  }
  function toggleSaved(id) {
    const exists = store.saved.includes(id);
    store.saved = exists ? store.saved.filter(value => value !== id) : [...store.saved, id];
    persist(); renderWords(); renderDetail();
    window.PolymathApp.toast(exists ? "Cuvânt eliminat din colecție." : "Cuvânt salvat. Revino la el în Colecția mea.");
  }
  function markLearned(word) {
    if (!store.learned.includes(word.id)) { store.learned.push(word.id); persist(); renderWords(); }
  }
  function speak(id) {
    const word = allWords().find(item => item.id === id);
    if (!word) return;
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return window.PolymathApp.toast("Pronunția audio nu este disponibilă în acest browser.");
    speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(word.word); speech.lang = V.LANGUAGES[word.lang].speech; speech.rate = 0.85;
    speech.onerror = () => window.PolymathApp.toast("Vocea pentru această limbă nu este disponibilă pe dispozitiv.");
    speechSynthesis.speak(speech);
  }
  async function lookupOnline() {
    const query = $("word-search").value.trim().normalize("NFC");
    if (!query) { $("word-search").focus(); return; }
    const existing = allWords().find(word => word.lang === ui.lang && [word.word, word.translation].some(text => V.normalize(text) === V.normalize(query)));
    if (existing) { ui.query = ""; ui.filter = "all"; selectWord(existing, true); return; }
    ui.controller?.abort();
    const controller = new AbortController(); ui.controller = controller;
    const lang = ui.lang; const revision = ++ui.revision;
    const timer = setTimeout(() => controller.abort(), 20000);
    $("lookup-status").innerHTML = '<p class="lookup-pending"><span class="loading-dot"></span> Căutăm sensul și exemplele… <button type="button" class="text-action" data-cancel-lookup>Anulează</button></p>';
    $("word-search-form").setAttribute("aria-busy", "true");
    $("word-search-form").querySelector('button[type="submit"]').disabled = true;
    try {
      const word = await V.lookup(query, lang, { signal: controller.signal });
      if (revision !== ui.revision) return;
      const cache = [...store.cache.filter(item => item.id !== word.id), word];
      store.cache = [...cache.filter(item => store.saved.includes(item.id)), ...cache.filter(item => !store.saved.includes(item.id)).slice(-50)]; persist();
      ui.query = ""; ui.filter = "all"; selectWord(word, true);
      $("lookup-status").innerHTML = '<p class="lookup-success">Cuvânt găsit. Explicațiile traduse automat sunt marcate în fișă.</p>';
    } catch (error) {
      if (revision !== ui.revision || !$("lookup-status")) return;
      const message = controller.signal.aborted ? "Căutarea s-a oprit. Poți încerca din nou; fișele locale rămân disponibile." : error.message === "not-found" ? "Nu am găsit cuvântul în această limbă. Verifică ortografia sau încearcă forma de bază." : "Dicționarul online nu este disponibil acum. Încearcă din nou sau explorează fișele locale.";
      $("lookup-status").innerHTML = `<p class="lookup-error">${escape(message)}</p>`;
    } finally {
      clearTimeout(timer);
      if (revision === ui.revision) {
        $("word-search-form")?.removeAttribute("aria-busy");
        const submit = $("word-search-form")?.querySelector('button[type="submit"]'); if (submit) submit.disabled = false;
        ui.controller = null;
      }
    }
  }
  function startReview() {
    const words = allWords().filter(word => word.lang === ui.lang && word.ro && !word.partial);
    const saved = words.filter(word => store.saved.includes(word.id));
    ui.review = saved.length ? saved : words;
    ui.reviewIndex = 0; ui.reviewCorrect = 0;
    if (!ui.review.length) return window.PolymathApp.toast("Alege mai întâi o fișă de vocabular.");
    if (!$("review-dialog")) { const dialog = document.createElement("dialog"); dialog.id = "review-dialog"; dialog.className = "review-dialog"; dialog.setAttribute("aria-labelledby", "review-title"); document.body.appendChild(dialog); }
    renderReview(); $("review-dialog").showModal(); $("review-answer").focus();
  }
  function renderReview() {
    const word = ui.review[ui.reviewIndex];
    const dialog = $("review-dialog");
    if (!word) { dialog.innerHTML = `<button class="dialog-close" data-close-review aria-label="Închide practica">${icon("close")}</button><span class="review-celebration">✦</span><h2 id="review-title">Încă un pas înainte.</h2><p>Ai răspuns corect la <strong>${ui.reviewCorrect} din ${ui.review.length}</strong> cuvinte.</p><p>Revino la ele mâine. Repetiția face diferența.</p><button class="studio-primary" data-close-review>Înapoi la vocabular ${icon("arrow", 17)}</button>`; return; }
    dialog.innerHTML = `<button class="dialog-close" data-close-review aria-label="Închide practica">${icon("close")}</button><span class="eyebrow">RECHEMARE ACTIVĂ · ${ui.reviewIndex + 1} / ${ui.review.length}</span><div class="review-progress"><span style="width:${ui.reviewIndex / ui.review.length * 100}%"></span></div><h2 id="review-title">Cum spui în ${V.LANGUAGES[word.lang].name.toLocaleLowerCase()}?</h2><p class="review-question">${escape(word.translation)}</p><p class="review-context">${escape(word.ro)}</p><form id="review-form"><label for="review-answer" class="sr-only">Cuvântul în ${V.LANGUAGES[word.lang].name.toLocaleLowerCase()}</label><input id="review-answer" class="studio-input" required autocomplete="off" spellcheck="false" maxlength="80" placeholder="Încearcă să îți amintești…"><button class="studio-primary" type="submit">Verifică ${icon("check", 17)}</button></form><div id="review-feedback" role="status" aria-live="polite"></div><button class="text-action" data-reveal-review>Arată răspunsul și continuă</button>`;
  }
  document.addEventListener("click", event => {
    if (event.target.closest(".skip-link")) { event.preventDefault(); const view = document.querySelector("body > main:not(.hidden)"); if (view) { view.tabIndex = -1; view.focus(); } return; }
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.go) { window.PolymathApp.navigate(button.dataset.go, button.dataset.word ? { lang: "en", word: button.dataset.word } : {}); }
    else if (button.dataset.startTrack) window.PolymathApp.selectTrack(button.dataset.startTrack);
    else if (button.dataset.openWord) { const word = allWords().find(item => item.id === button.dataset.openWord); if (word) selectWord(word, true); }
    else if (button.dataset.save) toggleSaved(button.dataset.save);
    else if (button.dataset.speak) speak(button.dataset.speak);
    else if (button.dataset.language) { ui.controller?.abort(); ++ui.revision; ui.lang = button.dataset.language; ui.query = ""; ui.selected = null; ui.tab = "meaning"; window.PolymathApp.navigate("vocabulary", { lang: ui.lang }); }
    else if (button.dataset.collection) { ui.filter = button.dataset.collection; renderVocabulary(); }
    else if (button.dataset.detailTab) { ui.tab = button.dataset.detailTab; renderDetail(); $("detail-tab-" + ui.tab).focus(); }
    else if (button.hasAttribute("data-show-answer")) { const word = currentWord(); $("practice-feedback").innerHTML = `<p class="feedback-hint">Primul sunet te ajută: <strong>${escape((word.answer || word.word).slice(0, 2))}…</strong></p>`; }
    else if (button.hasAttribute("data-cancel-lookup")) ui.controller?.abort();
    else if (button.hasAttribute("data-review")) startReview();
    else if (button.hasAttribute("data-close-review")) $("review-dialog").close();
    else if (button.hasAttribute("data-review-next")) { ++ui.reviewIndex; renderReview(); $("review-answer")?.focus(); }
    else if (button.hasAttribute("data-reveal-review")) { const word = ui.review[ui.reviewIndex]; $("review-feedback").innerHTML = `<p class="feedback-hint">Răspuns: <strong lang="${word.lang}">${escape(word.word)}</strong></p><button class="studio-primary" data-review-next>Următorul ${icon("arrow", 16)}</button>`; button.disabled = true; $("review-form").querySelector("button").disabled = true; }
  });
  document.addEventListener("input", event => { if (event.target.id === "word-search") { ui.query = event.target.value; renderWords(); } });
  document.addEventListener("keydown", event => {
    if (event.target.matches("[data-detail-tab]") && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const tabs = ["meaning", "examples", "practice"]; const index = tabs.indexOf(ui.tab);
      ui.tab = event.key === "Home" ? tabs[0] : event.key === "End" ? tabs[2] : tabs[(index + (event.key === "ArrowRight" ? 1 : 2)) % 3];
      renderDetail(); $("detail-tab-" + ui.tab).focus();
    }
  });
  document.addEventListener("submit", event => {
    if (event.target.id === "word-search-form") { event.preventDefault(); lookupOnline(); }
    else if (event.target.id === "word-practice-form") {
      event.preventDefault(); const word = currentWord(); const input = $("practice-answer");
      if (V.checkAnswer(word, input.value)) { markLearned(word); input.setAttribute("aria-invalid", "false"); $("practice-feedback").innerHTML = `<p class="feedback-success">${icon("check", 17)} Corect! ${escape(word.word)} = ${escape(word.translation)}.</p>`; event.target.querySelector("button").disabled = true; }
      else { input.setAttribute("aria-invalid", "true"); $("practice-feedback").innerHTML = '<p class="feedback-error">Mai încearcă. Verifică forma cuvântului sau cere un indiciu.</p>'; }
    } else if (event.target.id === "review-form") {
      event.preventDefault(); const word = ui.review[ui.reviewIndex];
      if (V.checkAnswer({ answer: word.word }, $("review-answer").value)) { ++ui.reviewCorrect; markLearned(word); $("review-feedback").innerHTML = `<p class="feedback-success">Corect! ${escape(word.examples[0]?.text || word.native)}</p><button class="studio-primary" data-review-next>Următorul ${icon("arrow", 17)}</button>`; event.target.querySelector("button").disabled = true; $("review-dialog").querySelector("[data-reveal-review]").disabled = true; }
      else $("review-feedback").innerHTML = '<p class="feedback-error">Încă puțin. Încearcă din nou sau descoperă răspunsul.</p>';
    }
  });
  window.PolymathStudio = { render(view, params) {
    if (view !== "vocabulary") { ui.controller?.abort(); ++ui.revision; }
    if (view === "home") renderHome();
    else if (view === "vocabulary") renderVocabulary(params);
    if (view === "study") {
      const { state } = window.PolymathApp.snapshot();
      const lang = state.activeTrack.includes("Engleză") ? "en" : state.activeTrack.includes("Franceză") ? "fr" : state.activeTrack.includes("Spaniolă") ? "es" : null;
      document.querySelectorAll(".lesson-vocabulary-link").forEach(link => link.remove());
      if (lang) { const button = document.createElement("button"); button.className = "studio-secondary lesson-vocabulary-link"; button.innerHTML = `${icon("globe", 17)} Deschide dicționarul de ${V.LANGUAGES[lang].name.toLocaleLowerCase()}`; button.onclick = () => window.PolymathApp.navigate("vocabulary", { lang }); $("dictionary-box").appendChild(button); }
    }
  } };
})();
