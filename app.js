(function () {
  "use strict";

  const STORAGE_KEY = "polymath_edtech_state_v2";
  const DAILY_GOAL_TARGET = 3;

  const defaultState = {
    streak: 0,
    longestStreak: 0,
    lastCompletionDate: null,
    xp: 0,
    completedLessons: [],
    masteryPoints: {}, // { [lessonId]: points }
    dailyHistory: {},
    theme: "cyber-dark",
    customLessons: [],
    activeTrack: "SQL",
    activeLessonId: "sql-1",
    activePracticeMode: "write", // "write" | "match" | "quiz"
    tracksExpanded: false,       // false = arată doar 2 domenii; true = arată toate
    lessonsExpanded: false,      // false = arată doar tema curentă; true = arată toate + filtre
    heatmapExpanded: false
  };

  let state = loadState();

  // 1. Încărcarea și Fuzionarea Tuturor Lecțiilor din Curriculum
  const allLessonsRaw = [
    ...(typeof DEFAULT_CURRICULUM !== "undefined" ? DEFAULT_CURRICULUM : []),
    ...(typeof EXTENDED_MODULES !== "undefined" ? EXTENDED_MODULES : []),
    ...(typeof EXTENDED_CURRICULUM !== "undefined" && typeof EXTENDED_MODULES === "undefined" ? EXTENDED_CURRICULUM : []),
    ...(typeof ADVANCED_CURRICULUM_EXPANSION !== "undefined" ? ADVANCED_CURRICULUM_EXPANSION : []),
    ...(typeof ADVANCED_CURRICULUM !== "undefined" && typeof ADVANCED_CURRICULUM_EXPANSION === "undefined" ? ADVANCED_CURRICULUM : []),
    ...(state.customLessons || [])
  ];

  // Deduplicare inteligentă pe baza ID-ului (versiunile îmbogățite cu glosar/matching au prioritate)
  const uniqueLessonsMap = new Map();
  allLessonsRaw.forEach(item => {
    if (!uniqueLessonsMap.has(item.id)) {
      uniqueLessonsMap.set(item.id, item);
    } else {
      const existing = uniqueLessonsMap.get(item.id);
      if ((item.glossary || item.matchingPairs) && (!existing.glossary && !existing.matchingPairs)) {
        uniqueLessonsMap.set(item.id, item);
      }
    }
  });

  let allLessons = Array.from(uniqueLessonsMap.values());

  // Normalizare structură discipline pentru o clasificare clară și intuitivă
  allLessons.forEach(l => {
    if (l.track && l.track.includes("Engleză")) {
      if (l.track.includes("Familie") || l.id.startsWith("eng-fam")) {
        l.track = "Engleză: Familie & Hobby";
        l.icon = "🏡";
      } else if (l.id.startsWith("eng-a1") || l.id.startsWith("eng-a2") || (l.level && (l.level.includes("A1") || l.level.includes("A2")))) {
        l.track = "Engleză (A1–A2)";
        l.icon = "🇬🇧";
        if (l.id.startsWith("eng-a1") || (l.level && l.level.includes("A1"))) l.level = "1. A1 Începător";
        else l.level = "2. A2 Elementar";
      } else if (
        l.id.startsWith("eng-b1") || l.id.startsWith("eng-b2") ||
        l.id === "eng-adv-1" || l.id === "eng-adv-2" || l.id === "eng-adv-3" ||
        l.id === "eng-v1" || l.id === "eng-lexical-4" || l.id === "eng-lexical-12" ||
        (l.level && (l.level.includes("B1") || l.level.includes("B2")))
      ) {
        l.track = "Engleză (B1–B2)";
        l.icon = "🇬🇧";
        if (l.id.startsWith("eng-b1") || l.id === "eng-adv-1" || (l.level && l.level.includes("B1"))) {
          l.level = "1. B1 Intermediate";
        } else {
          l.level = "2. B2 Upper-Intermediate";
        }
      } else {
        l.track = "Engleză (C1–C2)";
        l.icon = "🇬🇧";
        if (l.level && (l.level.includes("C2") || l.id.startsWith("eng-adv-14") || l.id.startsWith("eng-adv-15") || l.id.startsWith("eng-adv-16") || l.id.startsWith("eng-adv-17") || l.id.startsWith("eng-adv-18") || l.id === "eng-v6")) {
          l.level = "3. C2 Mastery";
        } else if (l.level && (l.id.startsWith("eng-adv-9") || l.id.startsWith("eng-adv-10") || l.id.startsWith("eng-adv-11") || l.id.startsWith("eng-adv-12") || l.id.startsWith("eng-adv-13") || l.level.includes("C1+"))) {
          l.level = "2. C1+ Professional";
        } else {
          l.level = "1. C1 Advanced";
        }
      }
    }
  });

  // Stare temporară pentru jocul de potrivire pe 2 coloane
  let matchState = {
    selectedLeftIndex: null,
    matchedIndices: new Set()
  };

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

  // Încărcare stare cu migrare automată din v1 (dacă există)
  function loadState() {
    try {
      let raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        // Verifică starea v1 pentru a nu pierde progresul de pe Vercel
        const v1Raw = window.localStorage.getItem("polymath_edtech_state_v1");
        if (v1Raw) {
          try {
            const v1 = JSON.parse(v1Raw);
            const migrated = {
              ...defaultState,
              streak: v1.streak || 0,
              longestStreak: v1.longestStreak || 0,
              lastCompletionDate: v1.lastCompletionDate || null,
              xp: v1.xp || 0,
              completedLessons: Array.isArray(v1.completedLessons) ? v1.completedLessons : [],
              dailyHistory: v1.dailyHistory || {},
              theme: v1.theme || "cyber-dark",
              customLessons: v1.customLessons || [],
              activeTrack: v1.activeTrack || "SQL",
              activeLessonId: v1.activeLessonId || "sql-1",
              masteryPoints: {}
            };
            if (v1.masteryCounts) {
              Object.keys(v1.masteryCounts).forEach(id => {
                migrated.masteryPoints[id] = v1.masteryCounts[id];
              });
            }
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
            return migrated;
          } catch (_) {}
        }
        return { ...defaultState };
      }

      const parsed = { ...defaultState, ...JSON.parse(raw) };
      const today = getTodayKey();
      const yesterday = getYesterdayKey();

      if (
        parsed.lastCompletionDate &&
        parsed.lastCompletionDate !== today &&
        parsed.lastCompletionDate !== yesterday
      ) {
        parsed.streak = 0;
      }
      parsed.masteryPoints = parsed.masteryPoints || {};
      return parsed;
    } catch (e) {
      return { ...defaultState };
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Eroare la salvare:", e);
    }
  }

  // Sistem Dinamic de Mastery (Bronz -> Argint -> Aur -> Platină -> Diamant)
  function getMasteryConfig(levelStr) {
    const lvl = levelStr || "1. Începător";
    if (lvl.startsWith("1.") || lvl.includes("A1") || lvl.includes("Începător")) return { max: 1, icon: "🥉", tier: "Bronz" };
    if (lvl.startsWith("2.") || lvl.includes("A2") || lvl.includes("Junior")) return { max: 2, icon: "🥈", tier: "Argint" };
    if (lvl.startsWith("3.") || lvl.includes("B1") || lvl.includes("Middle")) return { max: 3, icon: "🥇", tier: "Aur" };
    if (lvl.startsWith("4.") || lvl.includes("B2") || lvl.includes("C1") || lvl.includes("Senior")) return { max: 4, icon: "💠", tier: "Platină" };
    if (lvl.startsWith("5.") || lvl.includes("C2") || lvl.includes("Exemplar")) return { max: 5, icon: "💎", tier: "Diamant" };
    return { max: 2, icon: "🏅", tier: "Practician" };
  }

  function getLessonMasteryStatus(lesson) {
    const cfg = getMasteryConfig(lesson.level);
    const current = Math.min(cfg.max, state.masteryPoints[lesson.id] || 0);
    const isMaxed = current >= cfg.max;
    return {
      current,
      max: cfg.max,
      icon: isMaxed ? "👑" : cfg.icon,
      tier: cfg.tier,
      label: `${isMaxed ? "👑 Maestru" : cfg.icon + " " + cfg.tier} ${current}/${cfg.max}`
    };
  }

  function recordActivityAndMastery(xpEarned, lesson) {
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

    const cfg = getMasteryConfig(lesson.level);
    const currentPts = state.masteryPoints[lesson.id] || 0;
    if (currentPts < cfg.max) {
      state.masteryPoints[lesson.id] = currentPts + 1;
      state.xp += xpEarned;
    } else {
      state.xp += Math.round(xpEarned * 0.25); // Bonus de revizuire
    }

    if (!state.completedLessons.includes(lesson.id)) {
      state.completedLessons.push(lesson.id);
    }

    saveState();
  }

  function getRankTitle(xp) {
    if (xp >= 900) return "Rang V: Enciclopedist Polimat";
    if (xp >= 550) return "Rang IV: Arhitect Sintactic";
    if (xp >= 280) return "Rang III: Practician Avansat";
    if (xp >= 100) return "Rang II: Explorator Activ";
    return "Rang I: Inițiat";
  }

  function normalizeInput(str, isCaseSensitive) {
    if (!str) return "";
    let cleaned = str
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/\s+/g, " ")
      .replace(/\s*\(\s*/g, "(").replace(/\s*\)\s*/g, ")")
      .replace(/\s*,\s*/g, ", ")
      .replace(/\s*;\s*$/g, ";")
      .trim();
    return isCaseSensitive ? cleaned : cleaned.toLowerCase();
  }

  const els = {
    streakCount: document.getElementById("streak-count"),
    streakPill: document.getElementById("streak-pill"),
    longestStreakVal: document.getElementById("longest-streak-val"),
    xpCount: document.getElementById("xp-count"),
    userRank: document.getElementById("user-rank"),
    dailyProgressText: document.getElementById("daily-progress-text"),
    themeSelector: document.getElementById("theme-selector"),
    trackTabs: document.getElementById("track-tabs"),
    tracksCounterLabel: document.getElementById("tracks-counter-label"),
    toggleTracksBtn: document.getElementById("toggle-tracks-btn"),
    currentTrackTitle: document.getElementById("current-track-title"),
    trackCompletionBadge: document.getElementById("track-completion-badge"),
    toggleLessonsBtn: document.getElementById("toggle-lessons-btn"),
    lessonsFilterBox: document.getElementById("lessons-filter-box"),
    levelFilter: document.getElementById("level-filter"),
    searchLessons: document.getElementById("search-lessons"),
    trackProgressBar: document.getElementById("track-progress-bar"),
    lessonList: document.getElementById("lesson-list"),
    toggleHeatmapBtn: document.getElementById("toggle-heatmap-btn"),
    heatmapCollapsible: document.getElementById("heatmap-collapsible"),
    heatmapGrid: document.getElementById("heatmap-grid"),
    lessonCategoryBadge: document.getElementById("lesson-category-badge"),
    lessonLevelBadge: document.getElementById("lesson-level-badge"),
    lessonStatusBadge: document.getElementById("lesson-status-badge"),
    lessonTitle: document.getElementById("lesson-title"),
    lessonTheory: document.getElementById("lesson-theory"),
    dictionaryBox: document.getElementById("dictionary-box"),
    lessonDictionary: document.getElementById("lesson-dictionary"),
    lessonExample: document.getElementById("lesson-example"),
    copyExampleBtn: document.getElementById("copy-example-btn"),
    lessonXpTag: document.getElementById("lesson-xp-tag"),
    lessonPrompt: document.getElementById("lesson-prompt"),
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
    tabModeWrite: document.getElementById("tab-mode-write"),
    tabModeMatch: document.getElementById("tab-mode-match"),
    tabModeQuiz: document.getElementById("tab-mode-quiz"),
    paneWrite: document.getElementById("practice-mode-write"),
    paneMatch: document.getElementById("practice-mode-match"),
    paneQuiz: document.getElementById("practice-mode-quiz"),
    matchColLeft: document.getElementById("match-col-left"),
    matchColRight: document.getElementById("match-col-right"),
    matchStatusMsg: document.getElementById("match-status-msg"),
    resetMatchBtn: document.getElementById("reset-match-btn"),
    quizQuestionText: document.getElementById("quiz-question-text"),
    quizOptionsGrid: document.getElementById("quiz-options-grid"),
    quizFeedbackMsg: document.getElementById("quiz-feedback-msg"),
    resetProgressBtn: document.getElementById("reset-progress-btn"),
    customModal: document.getElementById("custom-modal"),
    openCustomModalBtn: document.getElementById("open-custom-modal-btn"),
    closeCustomModalBtn: document.getElementById("close-custom-modal-btn"),
    cancelModalBtn: document.getElementById("cancel-modal-btn"),
    customLessonForm: document.getElementById("custom-lesson-form"),
    confettiCanvas: document.getElementById("confetti-canvas")
  };

  function applyTheme(themeName) {
    document.documentElement.setAttribute("data-theme", themeName);
    els.themeSelector.value = themeName;
    state.theme = themeName;
    saveState();
  }

  function getTracks() {
    const map = new Map();
    allLessons.forEach(item => {
      if (!map.has(item.track)) {
        map.set(item.track, item.icon || "📘");
      }
    });
    return Array.from(map.entries()).map(([name, icon]) => ({ name, icon }));
  }

  function renderStatsAndHeatmap() {
    const today = getTodayKey();
    const todayCount = state.dailyHistory[today] || 0;

    els.streakCount.textContent = state.streak;
    els.longestStreakVal.textContent = state.longestStreak;
    els.xpCount.textContent = `${state.xp} XP`;
    els.userRank.textContent = getRankTitle(state.xp);
    els.dailyProgressText.textContent = `${Math.min(todayCount, DAILY_GOAL_TARGET)}/${DAILY_GOAL_TARGET}`;

    els.toggleHeatmapBtn.textContent = state.heatmapExpanded ? "−" : "+";
    els.heatmapCollapsible.classList.toggle("hidden", !state.heatmapExpanded);

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
      cell.title = `${key}: ${count} capitole parcurse`;
      els.heatmapGrid.appendChild(cell);
    }
  }

  // Comutator Domenii: 2 domenii inițial, la apăsarea pe + apar toate, la − revine la 2
  function renderTracks() {
    const tracks = getTracks();
    els.trackTabs.innerHTML = "";

    let visibleTracks = tracks;
    if (!state.tracksExpanded && tracks.length > 2) {
      const activeIdx = Math.max(0, tracks.findIndex(t => t.name === state.activeTrack));
      const secondIdx = activeIdx === 0 ? 1 : 0;
      visibleTracks = [tracks[activeIdx], tracks[secondIdx]];
    }

    els.tracksCounterLabel.textContent = `(${visibleTracks.length}/${tracks.length})`;
    els.toggleTracksBtn.textContent = state.tracksExpanded ? "−" : "+";
    els.toggleTracksBtn.setAttribute("aria-expanded", String(state.tracksExpanded));

    visibleTracks.forEach(t => {
      const countInTrack = allLessons.filter(l => l.track === t.name).length;
      const btn = document.createElement("button");
      btn.className = `track-tab-btn ${state.activeTrack === t.name ? "active" : ""}`;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", state.activeTrack === t.name ? "true" : "false");
      btn.innerHTML = `
        <span>${t.icon} ${t.name}</span>
        <span style="font-size:0.72rem; opacity:0.75;">${countInTrack} cap.</span>
      `;
      btn.addEventListener("click", () => {
        state.activeTrack = t.name;
        const firstLesson = allLessons.find(l => l.track === t.name);
        if (firstLesson) state.activeLessonId = firstLesson.id;
        saveState();
        renderAll();
      });
      els.trackTabs.appendChild(btn);
    });
  }

  function updateLevelFilterOptions() {
    if (!els.levelFilter) return;
    const currentVal = els.levelFilter.value;
    const track = state.activeTrack || "";

    if (track === "Engleză (A1–A2)") {
      els.levelFilter.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (A1 → A2)</option>
        <option value="1.">🟢 Nivel A1 (1 pt Mastery)</option>
        <option value="2.">🔵 Nivel A2 (2 pt Mastery)</option>
      `;
    } else if (track === "Engleză (B1–B2)") {
      els.levelFilter.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (B1 → B2)</option>
        <option value="1.">🟢 Nivel B1 (1 pt Mastery)</option>
        <option value="2.">🔵 Nivel B2 (2 pt Mastery)</option>
      `;
    } else if (track === "Engleză (C1–C2)") {
      els.levelFilter.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (C1 → C2)</option>
        <option value="1.">🟣 Nivel C1 (1 pt Mastery)</option>
        <option value="2.">🟠 Nivel C1+ (2 pt Mastery)</option>
        <option value="3.">🔴 Nivel C2 (3 pt Mastery)</option>
      `;
    } else {
      els.levelFilter.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (Începător → Exemplar)</option>
        <option value="1.">🥉 1. Începător (1 pt Mastery)</option>
        <option value="2.">🥈 2. Junior (2 pt Mastery)</option>
        <option value="3.">🥇 3. Middle (3 pt Mastery)</option>
        <option value="4.">💠 4. Senior (4 pt Mastery)</option>
        <option value="5.">💎 5. Exemplar (5 pt Mastery)</option>
      `;
    }

    const optionExists = Array.from(els.levelFilter.options).some(o => o.value === currentVal);
    els.levelFilter.value = optionExists ? currentVal : "ALL";
  }

  // Comutator Lecții: Inițial DOAR lecția curentă; la + apar toate cu filtru și căutare
  function renderLessonList() {
    const allTrackLessons = allLessons
      .filter(l => l.track === state.activeTrack)
      .sort((a, b) => (a.level || "").localeCompare(b.level || ""));

    const completedInTrack = allTrackLessons.filter(l => (state.masteryPoints[l.id] || 0) > 0).length;
    const pct = allTrackLessons.length ? Math.round((completedInTrack / allTrackLessons.length) * 100) : 0;

    els.currentTrackTitle.textContent = state.lessonsExpanded
      ? `Toate Temele (${completedInTrack}/${allTrackLessons.length})`
      : `Tema Curentă (1/${allTrackLessons.length})`;
    els.trackCompletionBadge.textContent = `${pct}%`;
    els.trackProgressBar.style.width = `${pct}%`;

    els.toggleLessonsBtn.textContent = state.lessonsExpanded ? "−" : "+";
    els.toggleLessonsBtn.setAttribute("aria-expanded", String(state.lessonsExpanded));
    els.lessonsFilterBox.classList.toggle("hidden", !state.lessonsExpanded);

    let lessonsToShow = [];
    if (!state.lessonsExpanded) {
      const currentLesson =
        allTrackLessons.find(l => l.id === state.activeLessonId) || allTrackLessons[0];
      if (currentLesson) lessonsToShow = [currentLesson];
    } else {
      const selectedLevel = els.levelFilter ? els.levelFilter.value : "ALL";
      const query = els.searchLessons ? els.searchLessons.value.trim().toLowerCase() : "";
      lessonsToShow = allTrackLessons.filter(l => {
        const matchesLevel = selectedLevel === "ALL" || (l.level && l.level.startsWith(selectedLevel));
        const matchesQuery =
          !query ||
          l.title.toLowerCase().includes(query) ||
          (l.theory && l.theory.toLowerCase().includes(query)) ||
          (l.prompt && l.prompt.toLowerCase().includes(query));
        return matchesLevel && matchesQuery;
      });
    }

    els.lessonList.innerHTML = "";
    lessonsToShow.forEach(lesson => {
      const realIndex = allTrackLessons.findIndex(item => item.id === lesson.id) + 1;
      const mStatus = getLessonMasteryStatus(lesson);
      const isActive = lesson.id === state.activeLessonId;

      const li = document.createElement("li");
      li.className = `lesson-item ${isActive ? "active" : ""} ${mStatus.current > 0 ? "completed" : ""}`;
      li.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:2px;">
          <span style="font-size:0.68rem; color:var(--text-secondary); font-weight:700;">${lesson.level}</span>
          <span>${realIndex}. ${lesson.title}</span>
        </div>
        <span class="lesson-mastery-pill" title="Progres Mastery">${mStatus.icon} ${mStatus.current}/${mStatus.max}</span>
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

  // Generator Inteligent de Perechi pentru Jocul pe 2 Coloane (FĂRĂ texte mock/dummy)
  function getMatchingPairsForLesson(lesson) {
    if (Array.isArray(lesson.matchingPairs) && lesson.matchingPairs.length >= 3) {
      return lesson.matchingPairs;
    }
    if (Array.isArray(lesson.glossary) && lesson.glossary.length >= 3) {
      return lesson.glossary.slice(0, 5).map(g => ({ left: g.term, right: g.def }));
    }

    // Generator dinamic inteligent bazat pe conținutul tematic
    if (lesson.track && lesson.track.includes("Engleză")) {
      const titleConcept = lesson.title.split(":")[1] || lesson.title.split(":")[0];
      return [
        { left: titleConcept.trim().split(" ")[0], right: "Conceptul gramatical/lexical din capitol" },
        { left: "Subject + Verb", right: "Ordinea canonică a propoziției afirmative" },
        { left: "Auxiliary Verb", right: "Ajută la formarea timpurilor compuse și a negației" },
        { left: "Context & Style", right: "Adaptarea la registrul formal sau conversațional" }
      ];
    } else if (lesson.track === "SQL") {
      return [
        { left: "SELECT", right: "Extrage date din coloanele specificate" },
        { left: "WHERE", right: "Filtrează rândurile pe baza unei condiții" },
        { left: "ORDER BY", right: "Sortează rezultatele returnate" },
        { left: "JOIN", right: "Combină înregistrări din două sau mai multe tabele" }
      ];
    } else if (lesson.track === "Java") {
      return [
        { left: "class", right: "Șablonul pentru definirea obiectelor și metodelor" },
        { left: "public static void main", right: "Punctul de intrare în execuția aplicației" },
        { left: "ArrayList", right: "Structură dinamică de date redimensionabilă" },
        { left: "boolean", right: "Tip de date primitiv cu valorile true sau false" }
      ];
    } else {
      // JavaScript
      return [
        { left: "const / let", right: "Declarații de variabile cu domeniu de bloc (block scope)" },
        { left: "map() / filter()", right: "Metode imutabile de transformare și filtrare a tablourilor" },
        { left: "async / await", right: "Sintaxă modernă bazată pe Promises pentru asincronism" },
        { left: "addEventListener", right: "Atașează o funcție de ascultare a evenimentelor DOM" }
      ];
    }
  }

  // Generator Inteligent de Quiz (FĂRĂ variante caraghioase de mock)
  function getQuizForLesson(lesson) {
    if (lesson.quiz && lesson.quiz.question && Array.isArray(lesson.quiz.options)) {
      return lesson.quiz;
    }

    const sol = lesson.officialSolution;
    let distractor1 = "";
    let distractor2 = "";
    let distractor3 = "";

    // Găsește soluții reale din aceeași disciplină pentru distractori plauzibili
    const siblings = allLessons.filter(l => l.track === lesson.track && l.id !== lesson.id);
    if (siblings.length >= 2) {
      distractor2 = siblings[0].officialSolution;
      distractor3 = siblings[1].officialSolution;
    }

    if (lesson.track && lesson.track.includes("Engleză")) {
      distractor1 = sol.includes(" is ") ? sol.replace(" is ", " are ")
        : sol.includes(" are ") ? sol.replace(" are ", " is ")
        : sol.includes(" am ") ? sol.replace(" am ", " is ")
        : sol.includes(" don't ") ? sol.replace(" don't ", " doesn't ")
        : sol.includes(" has ") ? sol.replace(" has ", " have ")
        : sol.replace(/\.$/, "") + " yesterday.";
      if (!distractor2) distractor2 = "She " + sol.toLowerCase();
      if (!distractor3) distractor3 = sol.replace(/\b(to|the|a|an)\b/gi, "").trim();
    } else if (lesson.track === "SQL") {
      distractor1 = sol.includes("WHERE") ? sol.replace("WHERE", "HAVING") : sol.replace("SELECT", "SELECT ALL");
      if (!distractor2) distractor2 = sol.replace(/;?$/, " ORDER BY 1;");
      if (!distractor3) distractor3 = sol.replace(/BETWEEN ([^ ]+) AND ([^ ;]+)/i, "IN ($1, $2)");
    } else if (lesson.track === "Java") {
      distractor1 = sol.includes("System.out.println") ? sol.replace("System.out.println", "System.print") : sol + " // lipsă tip";
      if (!distractor2) distractor2 = sol.replace(/;?$/, "; // Runtime check");
      if (!distractor3) distractor3 = sol.replace("public ", "private ");
    } else {
      // JavaScript
      distractor1 = sol.includes("const ") ? sol.replace("const ", "var ") : sol + "; // undefined reference";
      if (!distractor2) distractor2 = sol.replace("===", "==");
      if (!distractor3) distractor3 = sol.replace("=>", "function()");
    }

    const options = [
      { text: sol, isCorrect: true },
      { text: distractor1, isCorrect: false },
      { text: distractor2, isCorrect: false },
      { text: distractor3, isCorrect: false }
    ].sort(() => Math.random() - 0.5);

    const correctIdx = options.findIndex(o => o.isCorrect);

    return {
      question: `Care este forma corectă conform regulilor din capitolul „${lesson.title}”?`,
      options: options.map(o => o.text),
      correctIndex: correctIdx
    };
  }

  function renderActiveLesson() {
    const lesson = allLessons.find(l => l.id === state.activeLessonId) || allLessons[0];
    if (!lesson) return;

    const mStatus = getLessonMasteryStatus(lesson);

    els.lessonCategoryBadge.textContent = `${lesson.icon || "📘"} ${lesson.track}`;
    els.lessonLevelBadge.textContent = lesson.level || "1. Începător";
    els.lessonStatusBadge.textContent = mStatus.label;

    els.lessonTitle.textContent = lesson.title;
    els.lessonTheory.innerHTML = lesson.theory;

    // Dicționar / Enciclopedie de Termeni
    const glossaryItems = lesson.glossary || getMatchingPairsForLesson(lesson).map(p => ({ term: p.left, def: p.right }));
    els.lessonDictionary.innerHTML = "";
    glossaryItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "dict-entry";
      div.innerHTML = `
        <span class="dict-term">${item.term}</span>
        <span class="dict-def">${item.def}</span>
      `;
      els.lessonDictionary.appendChild(div);
    });

    els.lessonExample.textContent = lesson.example;
    els.lessonXpTag.textContent = `+${lesson.xp || 30} XP`;
    els.lessonPrompt.textContent = lesson.prompt;

    // Resetare casetă scriere
    els.inputZone.classList.remove("state-error", "state-success");
    els.userAnswerInput.value = "";
    els.validationFeedback.textContent = "Citește cerința evidențiată mai sus și tastează răspunsul.";
    els.hintDrawer.classList.add("hidden");
    els.solutionDrawer.classList.add("hidden");
    els.nextLessonBtn.classList.add("hidden");

    els.hintText.textContent = lesson.hint || "Analizează dicționarul de termeni și modelul asemănător de mai sus.";
    els.officialSolutionText.textContent = lesson.officialSolution;
    els.officialSolutionExplanation.textContent = lesson.explanation || "";

    renderMatchingGame(lesson);
    renderQuizMode(lesson);
    switchPracticeMode(state.activePracticeMode || "write");
  }

  function switchPracticeMode(mode) {
    state.activePracticeMode = mode;
    els.tabModeWrite.classList.toggle("active", mode === "write");
    els.tabModeWrite.setAttribute("aria-selected", mode === "write" ? "true" : "false");
    els.tabModeMatch.classList.toggle("active", mode === "match");
    els.tabModeMatch.setAttribute("aria-selected", mode === "match" ? "true" : "false");
    els.tabModeQuiz.classList.toggle("active", mode === "quiz");
    els.tabModeQuiz.setAttribute("aria-selected", mode === "quiz" ? "true" : "false");

    els.paneWrite.classList.toggle("hidden", mode !== "write");
    els.paneMatch.classList.toggle("hidden", mode !== "match");
    els.paneQuiz.classList.toggle("hidden", mode !== "quiz");
  }

  // MODUL 2: Jocul Interactiv de Potrivire pe 2 Coloane
  function renderMatchingGame(lesson) {
    const pairs = getMatchingPairsForLesson(lesson);
    matchState.selectedLeftIndex = null;
    matchState.matchedIndices = new Set();

    els.matchColLeft.innerHTML = "";
    els.matchColRight.innerHTML = "";
    els.matchStatusMsg.textContent = "Selectează un termen din stânga și explicația/traducerea lui din dreapta.";
    els.matchStatusMsg.style.color = "var(--text-secondary)";

    // Coloana Stângă
    pairs.forEach((pair, idx) => {
      const btn = document.createElement("button");
      btn.className = "match-card";
      btn.textContent = pair.left;
      btn.dataset.idx = String(idx);
      btn.addEventListener("click", () => {
        if (matchState.matchedIndices.has(idx)) return;
        matchState.selectedLeftIndex = idx;
        Array.from(els.matchColLeft.children).forEach(c => c.classList.remove("selected"));
        btn.classList.add("selected");
      });
      els.matchColLeft.appendChild(btn);
    });

    // Coloana Dreaptă (Amestecată aleatoriu)
    const shuffledRight = pairs
      .map((pair, idx) => ({ text: pair.right, originalIdx: idx }))
      .sort(() => Math.random() - 0.5);

    shuffledRight.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "match-card";
      btn.textContent = item.text;
      btn.dataset.idx = String(item.originalIdx);

      btn.addEventListener("click", () => {
        const targetIdx = item.originalIdx;
        if (matchState.matchedIndices.has(targetIdx)) return;

        if (matchState.selectedLeftIndex === null) {
          els.matchStatusMsg.textContent = "⚠️ Selectează mai întâi un element din Coloana Stângă!";
          els.matchStatusMsg.style.color = "var(--warning-amber)";
          return;
        }

        const leftBtn = els.matchColLeft.querySelector(`[data-idx="${matchState.selectedLeftIndex}"]`);

        if (matchState.selectedLeftIndex === targetIdx) {
          // Potrivire Corectă!
          matchState.matchedIndices.add(targetIdx);
          leftBtn.classList.remove("selected");
          leftBtn.classList.add("matched");
          btn.classList.add("matched");
          matchState.selectedLeftIndex = null;

          if (matchState.matchedIndices.size === pairs.length) {
            els.matchStatusMsg.textContent = "✅ Felicitări! Ai potrivit corect toate perechile!";
            els.matchStatusMsg.style.color = "var(--success-green)";
            recordActivityAndMastery(20, lesson);
            renderStatsAndHeatmap();
            renderLessonList();
            els.lessonStatusBadge.textContent = getLessonMasteryStatus(lesson).label;
            launchConfetti();
          } else {
            els.matchStatusMsg.textContent = `✓ Pereche corectă! (${matchState.matchedIndices.size}/${pairs.length})`;
            els.matchStatusMsg.style.color = "var(--success-green)";
          }
        } else {
          // Potrivire Greșită -> Roșu cu vibrație
          btn.classList.add("wrong");
          leftBtn.classList.add("wrong");
          els.matchStatusMsg.textContent = "❌ Pereche incorectă! Mai încearcă.";
          els.matchStatusMsg.style.color = "var(--error-red)";
          setTimeout(() => {
            btn.classList.remove("wrong");
            leftBtn.classList.remove("wrong");
          }, 450);
        }
      });

      els.matchColRight.appendChild(btn);
    });
  }

  // MODUL 3: Quiz Interactiv de Gramatică & Sintaxă
  function renderQuizMode(lesson) {
    const qData = getQuizForLesson(lesson);
    els.quizQuestionText.textContent = qData.question;
    els.quizFeedbackMsg.textContent = "Selectează opțiunea corectă de mai jos.";
    els.quizFeedbackMsg.style.color = "var(--text-secondary)";
    els.quizOptionsGrid.innerHTML = "";

    qData.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option-btn";
      btn.textContent = optText;
      const isCorrect = idx === qData.correctIndex;

      btn.addEventListener("click", () => {
        if (isCorrect) {
          btn.classList.remove("wrong");
          btn.classList.add("correct");
          els.quizFeedbackMsg.textContent = "✅ Răspuns corect! Punctul de Mastery a fost acordat.";
          els.quizFeedbackMsg.style.color = "var(--success-green)";
          recordActivityAndMastery(15, lesson);
          renderStatsAndHeatmap();
          renderLessonList();
          els.lessonStatusBadge.textContent = getLessonMasteryStatus(lesson).label;
          launchConfetti();
        } else {
          btn.classList.remove("wrong");
          void btn.offsetWidth;
          btn.classList.add("wrong");
          els.quizFeedbackMsg.textContent = "❌ Opțiune greșită! Consultă teoria din capitol și reîncearcă.";
          els.quizFeedbackMsg.style.color = "var(--error-red)";
        }
      });
      els.quizOptionsGrid.appendChild(btn);
    });
  }

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
      els.validationFeedback.textContent = "✅ Perfect! Răspunsul este 100% corect. Progresul de Mastery și Streak-ul au crescut!";
      els.nextLessonBtn.classList.remove("hidden");

      recordActivityAndMastery(lesson.xp || 30, lesson);
      renderStatsAndHeatmap();
      renderLessonList();
      els.lessonStatusBadge.textContent = getLessonMasteryStatus(lesson).label;
      launchConfetti();
    } else {
      els.inputZone.classList.remove("state-success");
      els.inputZone.classList.remove("state-error");
      void els.inputZone.offsetWidth;
      els.inputZone.classList.add("state-error");
      els.validationFeedback.textContent = rawInput.trim()
        ? "❌ Răspuns incorect! Caseta rămâne roșie până când tastezi varianta corectă."
        : "❌ Caseta este goală! Scrie răspunsul la cerința evidențiată mai sus.";
    }
  }

  function launchConfetti() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = els.confettiCanvas;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#06b6d4"];
    const particles = Array.from({ length: 65 }, () => ({
      x: canvas.width * 0.5,
      y: canvas.height * 0.5,
      vx: (Math.random() - 0.5) * 14,
      vy: -(Math.random() * 12 + 5),
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 9,
      gravity: 0.35,
      opacity: 1
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let active = false;
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.015;
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
      if (active) requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(animate);
  }

  function bindEvents() {
    // Butoane Minimaliste + / -
    els.toggleTracksBtn.addEventListener("click", () => {
      state.tracksExpanded = !state.tracksExpanded;
      saveState();
      renderTracks();
    });

    els.toggleLessonsBtn.addEventListener("click", () => {
      state.lessonsExpanded = !state.lessonsExpanded;
      saveState();
      renderLessonList();
    });

    els.toggleHeatmapBtn.addEventListener("click", () => {
      state.heatmapExpanded = !state.heatmapExpanded;
      saveState();
      renderStatsAndHeatmap();
    });

    if (els.levelFilter) els.levelFilter.addEventListener("change", renderLessonList);
    if (els.searchLessons) els.searchLessons.addEventListener("input", renderLessonList);

    // Comutare moduri de practică
    els.tabModeWrite.addEventListener("click", () => switchPracticeMode("write"));
    els.tabModeMatch.addEventListener("click", () => switchPracticeMode("match"));
    els.tabModeQuiz.addEventListener("click", () => switchPracticeMode("quiz"));

    els.resetMatchBtn.addEventListener("click", () => {
      const lesson = allLessons.find(l => l.id === state.activeLessonId);
      if (lesson) renderMatchingGame(lesson);
    });

    els.verifyBtn.addEventListener("click", verifyCurrentAnswer);
    els.userAnswerInput.addEventListener("keydown", e => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        verifyCurrentAnswer();
      }
    });

    els.hintBtn.addEventListener("click", () => {
      els.hintDrawer.classList.toggle("hidden");
    });

    els.giveUpBtn.addEventListener("click", () => {
      els.solutionDrawer.classList.remove("hidden");
    });

    els.applySolutionBtn.addEventListener("click", () => {
      const lesson = allLessons.find(l => l.id === state.activeLessonId);
      if (!lesson) return;
      els.userAnswerInput.value = lesson.officialSolution;
      verifyCurrentAnswer();
    });

    els.nextLessonBtn.addEventListener("click", () => {
      const trackLessons = allLessons
        .filter(l => l.track === state.activeTrack)
        .sort((a, b) => (a.level || "").localeCompare(b.level || ""));
      const idx = trackLessons.findIndex(l => l.id === state.activeLessonId);
      if (idx !== -1 && idx + 1 < trackLessons.length) {
        state.activeLessonId = trackLessons[idx + 1].id;
      } else {
        const globalIdx = allLessons.findIndex(l => l.id === state.activeLessonId);
        const nextGlobal = allLessons[(globalIdx + 1) % allLessons.length];
        state.activeTrack = nextGlobal.track;
        state.activeLessonId = nextGlobal.id;
      }
      saveState();
      renderAll();
    });

    els.copyExampleBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(els.lessonExample.textContent);
      els.copyExampleBtn.textContent = "✓ Copiat";
      setTimeout(() => {
        els.copyExampleBtn.textContent = "Copiază";
      }, 1400);
    });

    els.themeSelector.addEventListener("change", e => applyTheme(e.target.value));

    els.resetProgressBtn.addEventListener("click", () => {
      if (window.confirm("Resetezi întregul progres local?")) {
        window.localStorage.removeItem(STORAGE_KEY);
        state = loadState();
        renderAll();
      }
    });

    els.openCustomModalBtn.addEventListener("click", () => els.customModal.classList.remove("hidden"));
    const closeModal = () => els.customModal.classList.add("hidden");
    els.closeCustomModalBtn.addEventListener("click", closeModal);
    els.cancelModalBtn.addEventListener("click", closeModal);

    els.customLessonForm.addEventListener("submit", e => {
      e.preventDefault();
      const trackName = document.getElementById("custom-track").value.trim();
      const title = document.getElementById("custom-title").value.trim();
      const theory = `<p>${document.getElementById("custom-theory").value.trim()}</p>`;
      const example = document.getElementById("custom-example").value.trim();
      const prompt = document.getElementById("custom-prompt").value.trim();
      const solution = document.getElementById("custom-solution").value.trim();
      const hint = document.getElementById("custom-hint").value.trim();

      const newLesson = {
        id: "custom-" + Date.now(),
        track: trackName,
        icon: "📖",
        level: "3. Middle",
        xp: 40,
        title,
        theory,
        example,
        prompt,
        caseSensitive: false,
        acceptedAnswers: [solution],
        officialSolution: solution,
        explanation: "Capitol personalizat adăugat în enciclopedie.",
        hint: hint || "Analizează exemplul demonstrativ."
      };

      state.customLessons.push(newLesson);
      allLessons.push(newLesson);
      state.activeTrack = trackName;
      state.activeLessonId = newLesson.id;
      saveState();
      els.customLessonForm.reset();
      closeModal();
      renderAll();
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

  document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    renderAll();
  });
})();