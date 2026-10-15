(function () {
  "use strict";

  const STORAGE_KEY = "polymath_edtech_state_v1";
  const DAILY_GOAL_TARGET = 3;

  // Starea implicită a aplicației
  const defaultState = {
    streak: 0,
    longestStreak: 0,
    lastCompletionDate: null, // ISO Date String (YYYY-MM-DD)
    xp: 0,
    completedLessons: [],
    masteryCounts: {}, // { [lessonId]: 1..3 }
    dailyHistory: {}, // { "YYYY-MM-DD": count }
    theme: "cyber-dark",
    customLessons: [],
    activeTrack: "SQL",
    activeLessonId: "sql-1",
    selectedLevel: "ALL",
    searchQuery: "",
    isTracksExpanded: false // Start collapsed with 2 buttons, toggleable downwards like an accordion pocket
  };

  let state = loadState();
  if (state.activeTrack && (state.activeTrack.includes("Engleză") || state.activeTrack === "Engleză C1" || state.activeTrack === "Engleză (B1 → C2)")) {
    if (state.activeTrack !== "Engleză (A1–A2)" && state.activeTrack !== "Engleză (B1–B2)" && state.activeTrack !== "Engleză (C1–C2)") {
      state.activeTrack = "Engleză (A1–A2)";
      state.activeLessonId = "eng-a1-1";
    }
  }
  let allLessons = [...DEFAULT_CURRICULUM, ...(state.customLessons || [])];

  // Asigurare compatibilitate și mapare în 3 discipline distincte de limba engleză
  allLessons.forEach(l => {
    if (l.track && l.track.includes("Engleză")) {
      l.icon = "🇬🇧";
      if (l.id.startsWith("eng-a1") || l.id.startsWith("eng-a2") || l.level.includes("A1") || l.level.includes("A2")) {
        l.track = "Engleză (A1–A2)";
        if (l.id.startsWith("eng-a1") || l.level.includes("A1")) l.level = "1. A1 Începător";
        else l.level = "2. A2 Elementar";
      } else if (
        l.id.startsWith("eng-b1") || l.id.startsWith("eng-b2") ||
        l.id === "eng-adv-1" || l.id === "eng-adv-2" || l.id === "eng-adv-3" ||
        l.id === "eng-v1" || l.id === "eng-lexical-4" || l.id === "eng-lexical-12" ||
        l.level.includes("B1") || l.level.includes("B2")
      ) {
        l.track = "Engleză (B1–B2)";
        if (l.id.startsWith("eng-b1") || l.id === "eng-adv-1" || l.level.includes("B1")) {
          l.level = "1. B1 Intermediate";
        } else {
          l.level = "2. B2 Upper-Intermediate";
        }
      } else {
        l.track = "Engleză (C1–C2)";
        if (l.level.includes("C2") || l.id.startsWith("eng-adv-14") || l.id.startsWith("eng-adv-15") || l.id.startsWith("eng-adv-16") || l.id.startsWith("eng-adv-17") || l.id.startsWith("eng-adv-18") || l.id === "eng-v6") {
          l.level = "3. C2 Mastery";
        } else if (l.id.startsWith("eng-adv-9") || l.id.startsWith("eng-adv-10") || l.id.startsWith("eng-adv-11") || l.id.startsWith("eng-adv-12") || l.id.startsWith("eng-adv-13") || l.level.includes("C1+")) {
          l.level = "2. C1+ Professional";
        } else {
          l.level = "1. C1 Advanced";
        }
      }
    }
  });

  // Utilitare pentru calculul exact al datelor (ignorând ora, conform fusului orar local)
  function toLocalDateKey(dateObj) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getTodayKey() {
    return toLocalDateKey(new Date());
  }

  function getYesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return toLocalDateKey(d);
  }

  // Încărcare și validare Streak din localStorage
  function loadState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultState };
      const parsed = { ...defaultState, ...JSON.parse(raw) };

      const today = getTodayKey();
      const yesterday = getYesterdayKey();

      // Dacă ultima completare nu este nici azi, nici ieri, șirul (streak) s-a întrerupt
      if (
        parsed.lastCompletionDate &&
        parsed.lastCompletionDate !== today &&
        parsed.lastCompletionDate !== yesterday
      ) {
        parsed.streak = 0;
      }
      return parsed;
    } catch (e) {
      return { ...defaultState };
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Eroare la salvarea în localStorage:", e);
    }
  }

  // Marchează activitatea pe ziua curentă și actualizează Streak-ul
  function recordDailyActivity(xpEarned, lessonId) {
    const today = getTodayKey();
    const yesterday = getYesterdayKey();

    if (state.lastCompletionDate !== today) {
      if (state.lastCompletionDate === yesterday) {
        state.streak += 1;
      } else {
        state.streak = 1;
      }
      state.lastCompletionDate = today;
    }

    if (state.streak > state.longestStreak) {
      state.longestStreak = state.streak;
    }

    state.dailyHistory[today] = (state.dailyHistory[today] || 0) + 1;

    state.masteryCounts = state.masteryCounts || {};
    const currentStars = state.masteryCounts[lessonId] || 0;
    if (currentStars < 3) {
      state.masteryCounts[lessonId] = currentStars + 1;
      state.xp += xpEarned; // Acordă XP pentru fiecare treaptă de Mastery (până la 3 stele!)
    }
    if (!state.completedLessons.includes(lessonId)) {
      state.completedLessons.push(lessonId);
    }

    saveState();
  }

  // Calcul rang utilizator pe baza XP
  function getRankTitle(xp) {
    if (xp >= 450) return "Rang V: Arhitect Polimat";
    if (xp >= 300) return "Rang IV: Maestru Sintactic";
    if (xp >= 175) return "Rang III: Practician Avansat";
    if (xp >= 75) return "Rang II: Explorator Activ";
    return "Rang I: Inițiat";
  }

  // Normalizare avansată cu Expresii Regulate pentru cod și text
  function normalizeInput(str, isCaseSensitive) {
    if (!str) return "";
    let cleaned = str
      // Normalizează ghilimelele curbe la ghilimele drepte
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      // Elimină spațiile multiple, tab-urile și liniile noi
      .replace(/\s+/g, " ")
      // Normalizează spațiile din jurul parantezelor și virgulelor
      .replace(/\s*\(\s*/g, "(") .replace(/\s*\)\s*/g, ")")
      .replace(/\s*,\s*/g, ", ")
      .replace(/\s*;\s*$/g, ";")
      .trim();

    return isCaseSensitive ? cleaned : cleaned.toLowerCase();
  }

  // Referințe DOM
  const els = {
    streakCount: document.getElementById("streak-count"),
    streakPill: document.getElementById("streak-pill"),
    longestStreakVal: document.getElementById("longest-streak-val"),
    xpCount: document.getElementById("xp-count"),
    userRank: document.getElementById("user-rank"),
    dailyProgressText: document.getElementById("daily-progress-text"),
    themeSelector: document.getElementById("theme-selector"),
    trackPanelHeader: document.getElementById("track-panel-header"),
    trackTabsPocket: document.getElementById("track-tabs-pocket"),
    trackTabs: document.getElementById("track-tabs"),
    toggleTracksBtn: document.getElementById("toggle-tracks-btn"),
    togglePocketIcon: document.getElementById("toggle-pocket-icon"),
    togglePocketText: document.getElementById("toggle-pocket-text"),
    trackCountBadge: document.getElementById("track-count-badge"),
    currentTrackTitle: document.getElementById("current-track-title"),
    trackCompletionBadge: document.getElementById("track-completion-badge"),
    trackProgressBar: document.getElementById("track-progress-bar"),
    lessonList: document.getElementById("lesson-list"),
    heatmapGrid: document.getElementById("heatmap-grid"),
    lessonCategoryBadge: document.getElementById("lesson-category-badge"),
    lessonLevelBadge: document.getElementById("lesson-level-badge"),
    lessonStatusBadge: document.getElementById("lesson-status-badge"),
    lessonTitle: document.getElementById("lesson-title"),
    lessonTheory: document.getElementById("lesson-theory"),
    lessonExample: document.getElementById("lesson-example"),
    copyExampleBtn: document.getElementById("copy-example-btn"),
    lessonXpTag: document.getElementById("lesson-xp-tag"),
    lessonPrompt: document.getElementById("lesson-prompt"),
    contextWrapper: document.getElementById("context-snippet-wrapper"),
    lessonStarterContext: document.getElementById("lesson-starter-context"),
    inputZone: document.getElementById("input-zone"),
    userAnswerInput: document.getElementById("user-answer-input"),
    validationFeedback: document.getElementById("validation-feedback"),
    verifyBtn: document.getElementById("verify-btn"),
    hintBtn: document.getElementById("hint-btn"),
    giveUpBtn: document.getElementById("give-up-btn"),
    nextLessonBtn: document.getElementById("next-lesson-btn"),
    hintDrawer: document.getElementById("hint-drawer"),
    hintText: document.getElementById("hint-text"),
    solutionDrawer: document.getElementById("solution-drawer"),
    officialSolutionText: document.getElementById("official-solution-text"),
    officialSolutionExplanation: document.getElementById("official-solution-explanation"),
    applySolutionBtn: document.getElementById("apply-solution-btn"),
    resetProgressBtn: document.getElementById("reset-progress-btn"),
    customModal: document.getElementById("custom-modal"),
    openCustomModalBtn: document.getElementById("open-custom-modal-btn"),
    closeCustomModalBtn: document.getElementById("close-custom-modal-btn"),
    cancelModalBtn: document.getElementById("cancel-modal-btn"),
    customLessonForm: document.getElementById("custom-lesson-form"),
    confettiCanvas: document.getElementById("confetti-canvas")
  };

  // Aplicare temă vizuală
  function applyTheme(themeName) {
    document.documentElement.setAttribute("data-theme", themeName);
    els.themeSelector.value = themeName;
    state.theme = themeName;
    saveState();
  }

  // Obține lista unică de discipline/hobby-uri
  function getTracks() {
    const map = new Map();
    allLessons.forEach(item => {
      if (!map.has(item.track)) {
        map.set(item.track, item.icon || "📘");
      }
    });
    return Array.from(map.entries()).map(([name, icon]) => ({ name, icon }));
  }

  // Randarea barei de statistici și a Heatmap-ului pe 28 de zile
  function renderStatsAndHeatmap() {
    const today = getTodayKey();
    const todayCount = state.dailyHistory[today] || 0;

    els.streakCount.textContent = state.streak;
    els.longestStreakVal.textContent = state.longestStreak;
    els.xpCount.textContent = `${state.xp} XP`;
    els.userRank.textContent = getRankTitle(state.xp);
    els.dailyProgressText.textContent = `${Math.min(todayCount, DAILY_GOAL_TARGET)}/${DAILY_GOAL_TARGET}`;

    if (state.lastCompletionDate === today) {
      els.streakPill.classList.add("active-today");
    } else {
      els.streakPill.classList.remove("active-today");
    }

    // Generare 28 de celule pentru ultimele 4 săptămâni
    els.heatmapGrid.innerHTML = "";
    for (let i = 27; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = toLocalDateKey(d);
      const count = state.dailyHistory[key] || 0;

      const cell = document.createElement("div");
      cell.className = "heatmap-cell";
      if (count > 0) cell.classList.add("active-day");
      if (key === today) cell.classList.add("today-cell");
      cell.textContent = d.getDate();
      cell.title = `${key}: ${count} exerciții rezolvate`;
      els.heatmapGrid.appendChild(cell);
    }
  }

  // Actualizează dinamic opțiunile filtrului de nivel pentru fiecare disciplină
  function updateLevelFilterOptions() {
    const levelFilterEl = document.getElementById("level-filter");
    if (!levelFilterEl) return;

    const currentVal = levelFilterEl.value;
    const track = state.activeTrack || "";

    if (track === "Engleză (A1–A2)") {
      levelFilterEl.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (A1 → A2)</option>
        <option value="1. A1">🟢 Nivel A1 (Beginner / Baze)</option>
        <option value="2. A2">🔵 Nivel A2 (Elementary / Rutină & Trecut)</option>
      `;
    } else if (track === "Engleză (B1–B2)") {
      levelFilterEl.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (B1 → B2)</option>
        <option value="1. B1">🟢 Nivel B1 (Intermediate / Conversație)</option>
        <option value="2. B2">🔵 Nivel B2 (Upper-Intermediate / Business & Phrasal)</option>
      `;
    } else if (track === "Engleză (C1–C2)") {
      levelFilterEl.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (C1 → C2)</option>
        <option value="1. C1">🟣 Nivel C1 (Advanced / Academic & Vocabular)</option>
        <option value="2. C1+">🟠 Nivel C1+ (Professional / Inversiuni & Mixte)</option>
        <option value="3. C2">🔴 Nivel C2 (Mastery / Retorică Nativă)</option>
      `;
    } else {
      levelFilterEl.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (Începător → Exemplar)</option>
        <option value="1. Începător">🟢 1. Începător (Baze & Sintaxă)</option>
        <option value="2. Junior">🔵 2. Junior (Structuri & Sintaxă)</option>
        <option value="3. Middle">🟣 3. Middle (Avansat & Optimizare)</option>
        <option value="4. Senior">🟠 4. Senior (Arhitectură & Complexitate)</option>
        <option value="5. Exemplar">🔴 5. Exemplar (Principal & Concurență)</option>
      `;
    }

    const optionExists = Array.from(levelFilterEl.options).some(o => o.value === currentVal);
    levelFilterEl.value = optionExists ? currentVal : "ALL";
  }

  // Randarea tab-urilor de discipline
  function renderTracks() {
    const tracks = getTracks();
    els.trackTabs.innerHTML = "";

    tracks.forEach(t => {
      const btn = document.createElement("button");
      btn.className = `track-tab-btn ${state.activeTrack === t.name ? "active" : ""}`;
      btn.innerHTML = `<span>${t.icon}</span> <span>${t.name}</span>`;
      btn.addEventListener("click", () => {
        state.activeTrack = t.name;
        const firstLesson = allLessons.find(l => l.track === t.name);
        if (firstLesson) state.activeLessonId = firstLesson.id;
        saveState();
        renderAll();
      });
      els.trackTabs.appendChild(btn);
    });

    updateTrackPocket();
  }

  // Comutare stare buzunar (pocket accordion)
  function toggleTracksPocket() {
    state.isTracksExpanded = !state.isTracksExpanded;
    saveState();
    updateTrackPocket();
  }

  // Actualizează înălțimea și starea vizuală a buzunarului de discipline
  function updateTrackPocket() {
    if (!els.trackTabsPocket || !els.toggleTracksBtn) return;

    const tracks = getTracks();
    const btns = els.trackTabs ? els.trackTabs.querySelectorAll(".track-tab-btn") : [];

    if (tracks.length <= 2) {
      els.toggleTracksBtn.style.display = "none";
      els.trackTabsPocket.style.maxHeight = "none";
      if (els.trackCountBadge) els.trackCountBadge.textContent = `${tracks.length} Discipline`;
      return;
    }

    els.toggleTracksBtn.style.display = "flex";

    // Calculează înălțimea exactă a primului rând (2 butoane)
    let firstRowH = 44;
    if (btns.length >= 2) {
      firstRowH = Math.max(btns[0].offsetHeight, btns[1].offsetHeight);
    } else if (btns.length === 1) {
      firstRowH = btns[0].offsetHeight;
    }
    firstRowH = firstRowH || 44;

    const isExpanded = !!state.isTracksExpanded;

    if (isExpanded) {
      els.trackTabsPocket.classList.remove("is-collapsed");
      els.trackTabsPocket.classList.add("is-expanded");
      els.toggleTracksBtn.classList.add("is-expanded");
      els.toggleTracksBtn.setAttribute("aria-expanded", "true");

      els.trackTabsPocket.style.maxHeight = `${els.trackTabs.scrollHeight + 4}px`;

      if (els.togglePocketIcon) els.togglePocketIcon.textContent = "▴";
      if (els.togglePocketText) els.togglePocketText.innerHTML = `Mai puține discipline (Restrânge)`;
      if (els.trackCountBadge) els.trackCountBadge.textContent = `Toate cele ${tracks.length}`;
    } else {
      els.trackTabsPocket.classList.remove("is-expanded");
      els.trackTabsPocket.classList.add("is-collapsed");
      els.toggleTracksBtn.classList.remove("is-expanded");
      els.toggleTracksBtn.setAttribute("aria-expanded", "false");

      els.trackTabsPocket.style.maxHeight = `${firstRowH}px`;

      if (els.togglePocketIcon) els.togglePocketIcon.textContent = "▾";

      // Verifică dacă disciplina activă este ascunsă (index >= 2)
      const activeIdx = tracks.findIndex(t => t.name === state.activeTrack);
      const isHidden = activeIdx >= 2;

      if (isHidden) {
        const activeItem = tracks[activeIdx];
        const shortName = activeItem.name.replace("Engleză ", "");
        if (els.togglePocketText) {
          els.togglePocketText.innerHTML = `Mai multe discipline (${tracks.length}) <span class="pocket-active-indicator">${activeItem.icon} ${shortName}</span>`;
        }
      } else {
        if (els.togglePocketText) {
          els.togglePocketText.textContent = `Mai multe discipline (${tracks.length})`;
        }
      }

      if (els.trackCountBadge) els.trackCountBadge.textContent = `2 din ${tracks.length}`;
    }
  }

  // Randarea listei de lecții din disciplina curentă
  function renderLessonList() {
    const levelFilterEl = document.getElementById("level-filter");
    const searchInputEl = document.getElementById("search-lessons");
    const selectedLevel = levelFilterEl ? levelFilterEl.value : "ALL";
    const query = searchInputEl ? searchInputEl.value.trim().toLowerCase() : "";

    const allTrackLessons = allLessons
      .filter(l => l.track === state.activeTrack)
      .sort((a, b) => (a.level || "").localeCompare(b.level || ""));

    const filteredLessons = allTrackLessons.filter(l => {
      const matchesLevel = selectedLevel === "ALL" || (l.level && (
        l.level.startsWith(selectedLevel) ||
        l.level.includes(selectedLevel)
      ));
      const matchesQuery =
        !query ||
        l.title.toLowerCase().includes(query) ||
        l.theory.toLowerCase().includes(query) ||
        l.prompt.toLowerCase().includes(query);
      return matchesLevel && matchesQuery;
    });

    const completedInTrack = allTrackLessons.filter(l => state.completedLessons.includes(l.id)).length;
    const pct = allTrackLessons.length ? Math.round((completedInTrack / allTrackLessons.length) * 100) : 0;

    els.currentTrackTitle.textContent = `${state.activeTrack} (${completedInTrack}/${allTrackLessons.length})`;
    els.trackCompletionBadge.textContent = `${pct}%`;
    els.trackProgressBar.style.width = `${pct}%`;

    els.lessonList.innerHTML = "";
    filteredLessons.forEach((lesson, index) => {
      const stars = (state.masteryCounts && state.masteryCounts[lesson.id]) || (state.completedLessons.includes(lesson.id) ? 1 : 0);
      const starBadge = "★".repeat(stars) + "☆".repeat(Math.max(0, 3 - stars));
      const isActive = lesson.id === state.activeLessonId;

      const li = document.createElement("li");
      li.className = `lesson-item ${isActive ? "active" : ""} ${stars > 0 ? "completed" : ""}`;
      li.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:2px;">
          <span style="font-size:0.7rem; color:var(--text-secondary); font-weight:700;">${lesson.level}</span>
          <span>${index + 1}. ${lesson.title}</span>
        </div>
        <span class="lesson-check" title="Nivel Mastery: ${stars}/3">${starBadge}</span>
      `;
      li.addEventListener("click", () => {
        state.activeLessonId = lesson.id;
        saveState();
        renderLessonList();
        renderActiveLesson();
      });
      els.lessonList.appendChild(li);
    });
  }

  // Randarea lecției active în zona de lucru
  function renderActiveLesson() {
    const lesson = allLessons.find(l => l.id === state.activeLessonId) || allLessons[0];
    if (!lesson) return;

    const isSolved = state.completedLessons.includes(lesson.id);

    els.lessonCategoryBadge.textContent = `${lesson.icon || "📘"} ${lesson.track}`;
    els.lessonLevelBadge.textContent = lesson.level || "Practică Activă";
    els.lessonStatusBadge.textContent = isSolved ? "✓ Completat" : "Nerezolvat";
    els.lessonStatusBadge.className = `badge-status ${isSolved ? "solved" : ""}`;

    els.lessonTitle.textContent = lesson.title;
    els.lessonTheory.innerHTML = lesson.theory;
    els.lessonExample.textContent = lesson.example;
    els.lessonXpTag.textContent = `+${lesson.xp || 25} XP`;
    els.lessonPrompt.textContent = lesson.prompt;

    if (lesson.starterContext) {
      els.contextWrapper.classList.remove("hidden");
      els.lessonStarterContext.textContent = lesson.starterContext;
    } else {
      els.contextWrapper.classList.add("hidden");
    }

    // Resetare stare input, indicii și sertar soluție
    els.inputZone.classList.remove("state-error", "state-success");
    els.userAnswerInput.value = "";
    els.validationFeedback.textContent = "Introduceți soluția și apăsați „Verifică Răspunsul”.";
    els.hintDrawer.classList.add("hidden");
    els.solutionDrawer.classList.add("hidden");
    els.nextLessonBtn.classList.add("hidden");

    els.hintText.textContent = lesson.hint || "Analizează cu atenție modelul sintactic de mai sus.";
    els.officialSolutionText.textContent = lesson.officialSolution;
    els.officialSolutionExplanation.textContent = lesson.explanation || "";
  }

  // Diagnostic specific pentru erori frecvente
  function diagnoseMistake(rawUserText, lesson) {
    const trimmed = rawUserText.trim();
    if (!trimmed) {
      return "❌ Caseta este goală! Scrie varianta corectă pentru a debloca validarea.";
    }
    if (lesson.track === "SQL") {
      if (lesson.id === "sql-3" && !/CHECK\s*\(/i.test(trimmed)) {
        return "❌ Greșit: Nu uita clauza CHECK (...) cu condiția între paranteze!";
      }
      if (lesson.id === "sql-2" && !/VALUES/i.test(trimmed)) {
        return "❌ Greșit: Lipsește cuvântul-cheie VALUES înaintea tuplului de valori.";
      }
    }
    if (lesson.track && lesson.track.includes("Engleză")) {
      if (lesson.id === "eng-2" && /\bwhen\b/i.test(trimmed)) {
        return "❌ Capcană C1: Expresia 'No sooner' se construiește obligatoriu cu 'than', niciodată cu 'when'!";
      }
    }
    return "❌ Răspuns incorect! Caseta rămâne roșie până când scrii sintaxa exactă (sau apasă pe „M-am dat bătut” pentru a vedea soluția).";
  }

  // Verificarea răspunsului
  function verifyCurrentAnswer() {
    const lesson = allLessons.find(l => l.id === state.activeLessonId);
    if (!lesson) return;

    const rawInput = els.userAnswerInput.value;
    const normalizedUser = normalizeInput(rawInput, lesson.caseSensitive);

    const isCorrect = lesson.acceptedAnswers.some(
      ans => normalizeInput(ans, lesson.caseSensitive) === normalizedUser
    );

    if (isCorrect) {
      els.inputZone.classList.remove("state-error");
      els.inputZone.classList.add("state-success");
      els.validationFeedback.textContent = "✅ Excelent! Sintaxa este 100% corectă. Streak-ul și XP-ul au fost actualizate!";
      els.nextLessonBtn.classList.remove("hidden");

      recordDailyActivity(lesson.xp || 25, lesson.id);
      renderStatsAndHeatmap();
      renderLessonList();
      els.lessonStatusBadge.textContent = "✓ Completat";
      els.lessonStatusBadge.classList.add("solved");
      launchConfetti();
    } else {
      // STARE ROȘIE PERSISTENTĂ PÂNĂ LA CORECTARE
      els.inputZone.classList.remove("state-success");
      // Forțare re-declanșare animație shake
      els.inputZone.classList.remove("state-error");
      void els.inputZone.offsetWidth;
      els.inputZone.classList.add("state-error");
      els.validationFeedback.textContent = diagnoseMistake(rawInput, lesson);
    }
  }

  // Motor nativ de Confetti pe HTML5 Canvas (Zero dependențe, < 85 particule, 60fps)
  function launchConfetti() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const canvas = els.confettiCanvas;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#06b6d4", "#facc15"];
    const particles = [];
    const particleCount = 75;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width * 0.5,
        y: canvas.height * 0.55,
        vx: (Math.random() - 0.5) * 16,
        vy: -(Math.random() * 14 + 6),
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.35,
        opacity: 1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let active = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.012;

        if (p.opacity > 0 && p.y < canvas.height) {
          active = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
          ctx.restore();
        }
      });

      if (active) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    requestAnimationFrame(animate);
  }

  // Atașare evenimente
  function bindEvents() {
    els.verifyBtn.addEventListener("click", verifyCurrentAnswer);

    // Scurtătură Ctrl+Enter sau Cmd+Enter în textarea
    els.userAnswerInput.addEventListener("keydown", e => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        verifyCurrentAnswer();
      }
    });

    // Butonul de Indiciu
    els.hintBtn.addEventListener("click", () => {
      els.hintDrawer.classList.toggle("hidden");
    });

    // Butonul Ascuns: „M-am dat bătut (Arată Varianta Corectă)”
    els.giveUpBtn.addEventListener("click", () => {
      els.solutionDrawer.classList.remove("hidden");
    });

    // Aplică soluția oficială direct în caseta de input și validează
    els.applySolutionBtn.addEventListener("click", () => {
      const lesson = allLessons.find(l => l.id === state.activeLessonId);
      if (!lesson) return;
      els.userAnswerInput.value = lesson.officialSolution;
      verifyCurrentAnswer();
    });

    // Trecerea la lecția următoare
    els.nextLessonBtn.addEventListener("click", () => {
      const trackLessons = allLessons.filter(l => l.track === state.activeTrack);
      const idx = trackLessons.findIndex(l => l.id === state.activeLessonId);
      if (idx !== -1 && idx + 1 < trackLessons.length) {
        state.activeLessonId = trackLessons[idx + 1].id;
      } else {
        // Dacă s-a terminat modulul curent, trece la prima lecție din modulul următor
        const globalIdx = allLessons.findIndex(l => l.id === state.activeLessonId);
        const nextGlobal = allLessons[(globalIdx + 1) % allLessons.length];
        state.activeTrack = nextGlobal.track;
        state.activeLessonId = nextGlobal.id;
      }
      saveState();
      renderAll();
    });

    // Copiere exemplu
    els.copyExampleBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(els.lessonExample.textContent);
      els.copyExampleBtn.textContent = "✓ Copiat!";
      setTimeout(() => {
        els.copyExampleBtn.textContent = "Copiază modelul";
      }, 1500);
    });

    // Schimbare temă
    els.themeSelector.addEventListener("change", e => {
      applyTheme(e.target.value);
    });

    // Resetare progres
    els.resetProgressBtn.addEventListener("click", () => {
      if (window.confirm("Sigur doriți resetarea întregului progres și a contorului de Streak?")) {
        window.localStorage.removeItem(STORAGE_KEY);
        state = loadState();
        allLessons = [...DEFAULT_CURRICULUM];
        renderAll();
      }
    });

    // Modal adăugare lecție / hobby nou
    els.openCustomModalBtn.addEventListener("click", () => {
      els.customModal.classList.remove("hidden");
    });
    const closeModal = () => els.customModal.classList.add("hidden");
    els.closeCustomModalBtn.addEventListener("click", closeModal);
    els.cancelModalBtn.addEventListener("click", closeModal);

    els.customLessonForm.addEventListener("submit", e => {
      e.preventDefault();
      const trackName = document.getElementById("custom-track").value.trim();
      const title = document.getElementById("custom-title").value.trim();
      const theory = document.getElementById("custom-theory").value.trim();
      const example = document.getElementById("custom-example").value.trim();
      const prompt = document.getElementById("custom-prompt").value.trim();
      const solution = document.getElementById("custom-solution").value.trim();
      const hint = document.getElementById("custom-hint").value.trim();

      const newLesson = {
        id: "custom-" + Date.now(),
        track: trackName,
        icon: "✨",
        level: "Personalizat",
        xp: 35,
        title,
        theory,
        example,
        prompt,
        starterContext: "",
        caseSensitive: false,
        acceptedAnswers: [solution],
        officialSolution: solution,
        explanation: "Lecție personalizată adăugată în baza de date locală.",
        hint: hint || "Verifică exemplul demonstrativ."
      };

      state.customLessons.push(newLesson);
      allLessons = [...DEFAULT_CURRICULUM, ...state.customLessons];
      state.activeTrack = trackName;
      state.activeLessonId = newLesson.id;
      saveState();
      els.customLessonForm.reset();
      closeModal();
      renderAll();
    });

    const levelFilterEl = document.getElementById("level-filter");
    const searchInputEl = document.getElementById("search-lessons");
    if (levelFilterEl) levelFilterEl.addEventListener("change", renderLessonList);
    if (searchInputEl) searchInputEl.addEventListener("input", renderLessonList);

    // Comutator buzunar discipline (pocket accordion)
    if (els.toggleTracksBtn) {
      els.toggleTracksBtn.addEventListener("click", toggleTracksPocket);
    }
    if (els.trackPanelHeader) {
      els.trackPanelHeader.addEventListener("click", toggleTracksPocket);
    }
    window.addEventListener("resize", () => {
      updateTrackPocket();
    });
  }

  function renderAll() {
    applyTheme(state.theme);
    renderStatsAndHeatmap();
    renderTracks();
    updateLevelFilterOptions();
    renderLessonList();
    renderActiveLesson();
  }

  // Inițializare la încărcarea DOM-ului
  document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    renderAll();
  });
})();