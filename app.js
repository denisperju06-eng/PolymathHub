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
    masteryPoints: {},   // { [lessonId]: points }
    dailyHistory: {},    // { [date]: count of autonomous tasks }
    assistedHistory: {}, // { [date]: count of assisted (50/50) tasks }
    theme: "emerald-forest",
    customLessons: [],
    activeTrack: "SQL",
    activeLessonId: "sql-1",
    activePracticeMode: "write", // "write" | "match" | "quiz"
    activeView: "catalog",       // "catalog" | "study" | "activity" | "leagues" | "profile"
    user: {
      firstName: "Denis",
      lastName: "Perju",
      email: "denis@polymath.com",
      bio: "Pasionat de programare, limbi străine și cunoaștere polimată.",
      avatar: "🎓"
    },
    preferences: {
      dailyTarget: 3,
      confettiEnabled: true
    }
  };

  let state = loadState();

  // Flag sesiune pentru soluție asistată (dacă a deschis răspunsul oficial sau a copiat soluția)
  let lessonSessionAssisted = false;

  // Stare temporară pentru jocul de potrivire pe 2 coloane
  let matchState = {
    selectedLeftIndex: null,
    matchedIndices: new Set()
  };

  // 1. Încărcarea și Fuzionarea Tuturor Lecțiilor din Curriculum Oficial
  const allLessonsRaw = [
    ...(typeof DEFAULT_CURRICULUM !== "undefined" ? DEFAULT_CURRICULUM : []),
    ...(typeof EXTENDED_MODULES !== "undefined" ? EXTENDED_MODULES : []),
    ...(typeof EXTENDED_CURRICULUM !== "undefined" && typeof EXTENDED_MODULES === "undefined" ? EXTENDED_CURRICULUM : []),
    ...(typeof ADVANCED_CURRICULUM_EXPANSION !== "undefined" ? ADVANCED_CURRICULUM_EXPANSION : []),
    ...(typeof ADVANCED_CURRICULUM !== "undefined" && typeof ADVANCED_CURRICULUM_EXPANSION === "undefined" ? ADVANCED_CURRICULUM : [])
  ];

  // Deduplicare inteligentă pe baza ID-ului
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

  // Helper Tipografie Română: previne lăsarea particulelor și prepozițiilor scurte orfane pe capăt de rând
  function formatRomanianTypography(str) {
    if (!str || typeof str !== "string") return str;
    return str
      .replace(/\b([aAîÎoOuUeE|și|de|la|pe|cu|un|o])\s+/g, "$1\u00A0")
      .replace(/\s+([!?:;])/g, "\u00A0$1");
  }

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

  // Încărcare stare cu migrare automată din v1 / stări anterioare
  function loadState() {
    try {
      let raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
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
              assistedHistory: {},
              theme: "emerald-forest",
              customLessons: v1.customLessons || [],
              activeTrack: v1.activeTrack || "SQL",
              activeLessonId: v1.activeLessonId || "sql-1",
              masteryPoints: {},
              activeView: "catalog"
            };
            if (v1.masteryCounts) {
              Object.keys(v1.masteryCounts).forEach(id => {
                migrated.masteryPoints[id] = v1.masteryCounts[id];
              });
            }
            window.localStorage.removeItem("polymath_edtech_state_v1");
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
      parsed.dailyHistory = parsed.dailyHistory || {};
      parsed.assistedHistory = parsed.assistedHistory || {};
      parsed.theme = parsed.theme || "emerald-forest";
      parsed.activeView = parsed.activeView || "catalog";
      parsed.customLessons = [];
      parsed.user = {
        firstName: (parsed.user && parsed.user.firstName) || "Denis",
        lastName: (parsed.user && parsed.user.lastName) || "Perju",
        email: (parsed.user && parsed.user.email) || "denis@polymath.com",
        bio: (parsed.user && parsed.user.bio) || "Pasionat de programare, limbi străine și cunoaștere polimată.",
        avatar: (parsed.user && parsed.user.avatar) || "🎓"
      };
      parsed.preferences = {
        dailyTarget: (parsed.preferences && parsed.preferences.dailyTarget) ? Number(parsed.preferences.dailyTarget) : 3,
        confettiEnabled: (parsed.preferences && typeof parsed.preferences.confettiEnabled === "boolean") ? parsed.preferences.confettiEnabled : true
      };
      return parsed;
    } catch (e) {
      return { ...defaultState };
    }
  }

  function getDailyTarget() {
    return (state.preferences && state.preferences.dailyTarget) ? Number(state.preferences.dailyTarget) : DAILY_GOAL_TARGET;
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

  // Înregistrare activitate autonomă 100% (rezolvat de sine stătător)
  function recordAutonomousActivity(xpEarned, lesson) {
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

  // Înregistrare activitate asistată 50/50 (utilizatorul a cerut răspunsul)
  // Penalizare: doar 5 XP, fără punct de Mastery, NU contorizează la obiectivul 3/3, dar streak-ul se menține
  function recordAssistedActivity(lesson) {
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

    state.assistedHistory[today] = (state.assistedHistory[today] || 0) + 1;
    state.xp += 5; // Doar 5 XP consolare

    if (!state.completedLessons.includes(lesson.id)) {
      state.completedLessons.push(lesson.id);
    }

    saveState();
  }

  const LEAGUES = [
    { id: 1, name: "Rang I: Inițiat", minXp: 0, maxXp: 99, icon: "🥉", desc: "Primul pas în călătoria enciclopedică polimată." },
    { id: 2, name: "Rang II: Explorator Activ", minXp: 100, maxXp: 279, icon: "🥈", desc: "Practică susținută și consolidare de concepte de bază." },
    { id: 3, name: "Rang III: Practician Avansat", minXp: 280, maxXp: 549, icon: "🥇", desc: "Stăpânire autonomă a sintaxei și a lexicului complex." },
    { id: 4, name: "Rang IV: Arhitect Sintactic", minXp: 550, maxXp: 899, icon: "💠", desc: "Nivel înalt de finețe tehnică și fluență." },
    { id: 5, name: "Rang V: Enciclopedist Polimat", minXp: 900, maxXp: Infinity, icon: "💎", desc: "Măiestrie absolută în toate domeniile studiate." }
  ];

  function getRankTitle(xp) {
    const current = LEAGUES.slice().reverse().find(l => xp >= l.minXp) || LEAGUES[0];
    return current.name;
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

  // Referințe DOM
  const els = {
    // Header & Navigație Top SPA
    brandHomeBtn: document.getElementById("brand-home-btn"),
    navCatalogBtn: document.getElementById("nav-catalog-btn"),
    navStudyBtn: document.getElementById("nav-study-btn"),
    navActivityBtn: document.getElementById("nav-activity-btn"),
    navLeaguesBtn: document.getElementById("nav-leagues-btn"),
    navProfileBtn: document.getElementById("nav-profile-btn"),
    headerProfileBtn: document.getElementById("header-profile-btn"),
    headerAvatarIcon: document.getElementById("header-avatar-icon"),
    headerProfileName: document.getElementById("header-profile-name"),

    // Stats Cluster
    streakPill: document.getElementById("streak-pill"),
    streakCount: document.getElementById("streak-count"),
    xpPill: document.getElementById("xp-pill"),
    xpCount: document.getElementById("xp-count"),
    userRank: document.getElementById("user-rank"),
    goalPill: document.getElementById("goal-pill"),
    goalIcon: document.getElementById("goal-icon"),
    dailyProgressText: document.getElementById("daily-progress-text"),
    dailyProgressLabel: document.getElementById("daily-progress-label"),
    goalTooltipTitle: document.getElementById("goal-tooltip-title"),
    goalTooltipText: document.getElementById("goal-tooltip-text"),
    themeSelector: document.getElementById("theme-selector"),

    // View 1: Catalog
    catalogView: document.getElementById("catalog-view"),
    catalogDomainsGrid: document.getElementById("catalog-domains-grid"),
    catalogDomainSubtitle: document.getElementById("catalog-domain-subtitle"),
    catalogSelectedDomainTitle: document.getElementById("catalog-selected-domain-title"),
    catalogLevelFilter: document.getElementById("catalog-level-filter"),
    catalogSearchInput: document.getElementById("catalog-search-input"),
    catalogChaptersGrid: document.getElementById("catalog-chapters-grid"),

    // View 2: Study
    studyView: document.getElementById("study-view"),
    backToCatalogBtn: document.getElementById("back-to-catalog-btn"),
    studyTrackIndicator: document.getElementById("study-track-indicator"),
    openPocketDrawerBtn: document.getElementById("open-pocket-drawer-btn"),

    // Study Theory
    lessonCategoryBadge: document.getElementById("lesson-category-badge"),
    lessonLevelBadge: document.getElementById("lesson-level-badge"),
    lessonStatusBadge: document.getElementById("lesson-status-badge"),
    lessonTitle: document.getElementById("lesson-title"),
    lessonTheory: document.getElementById("lesson-theory"),
    dictionaryBox: document.getElementById("dictionary-box"),
    lessonDictionary: document.getElementById("lesson-dictionary"),
    lessonExample: document.getElementById("lesson-example"),
    copyExampleBtn: document.getElementById("copy-example-btn"),

    // Study Practice
    lessonXpTag: document.getElementById("lesson-xp-tag"),
    tabModeWrite: document.getElementById("tab-mode-write"),
    tabModeMatch: document.getElementById("tab-mode-match"),
    tabModeQuiz: document.getElementById("tab-mode-quiz"),
    paneWrite: document.getElementById("practice-mode-write"),
    paneMatch: document.getElementById("practice-mode-match"),
    paneQuiz: document.getElementById("practice-mode-quiz"),

    // Mode 1: Write
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

    // Mode 2: Match
    matchColLeft: document.getElementById("match-col-left"),
    matchColRight: document.getElementById("match-col-right"),
    matchStatusMsg: document.getElementById("match-status-msg"),
    resetMatchBtn: document.getElementById("reset-match-btn"),

    // Mode 3: Quiz
    quizQuestionText: document.getElementById("quiz-question-text"),
    quizOptionsGrid: document.getElementById("quiz-options-grid"),
    quizFeedbackMsg: document.getElementById("quiz-feedback-msg"),

    // Pocket Drawer
    pocketDrawerBackdrop: document.getElementById("pocket-drawer-backdrop"),
    pocketDrawer: document.getElementById("pocket-drawer"),
    closePocketDrawerBtn: document.getElementById("close-pocket-drawer-btn"),
    pocketTrackTabs: document.getElementById("pocket-track-tabs"),
    pocketCompletionBadge: document.getElementById("pocket-completion-badge"),
    pocketLessonList: document.getElementById("pocket-lesson-list"),

    // View 3: Activitate & Calendar Lunar
    activityView: document.getElementById("activity-view"),
    actStreakVal: document.getElementById("act-streak-val"),
    actLongestStreakVal: document.getElementById("act-longest-streak-val"),
    actTodayVal: document.getElementById("act-today-val"),
    actTotalTasksVal: document.getElementById("act-total-tasks-val"),
    activityCalendarGrid: document.getElementById("activity-calendar-grid"),

    // View 4: Ligi & Realizări
    leaguesView: document.getElementById("leagues-view"),
    pageLeagueIcon: document.getElementById("page-league-icon"),
    pageLeagueTitle: document.getElementById("page-league-title"),
    pageLeagueDesc: document.getElementById("page-league-desc"),
    pageLeagueProgressFill: document.getElementById("page-league-progress-fill"),
    pageLeagueXpStatus: document.getElementById("page-league-xp-status"),
    pageLeagueNextStatus: document.getElementById("page-league-next-status"),
    pageLeaguesList: document.getElementById("page-leagues-list"),
    pageAchievementsGrid: document.getElementById("page-achievements-grid"),

    // View 5: Profil & Setări
    profileView: document.getElementById("profile-view"),
    profileCardAvatar: document.getElementById("profile-card-avatar"),
    profileCardName: document.getElementById("profile-card-name"),
    profileCardEmail: document.getElementById("profile-card-email"),
    profileCardBio: document.getElementById("profile-card-bio"),
    profileStatXp: document.getElementById("profile-stat-xp"),
    profileStatRank: document.getElementById("profile-stat-rank"),
    profileStatStreak: document.getElementById("profile-stat-streak"),
    profileStatLessons: document.getElementById("profile-stat-lessons"),
    profileForm: document.getElementById("profile-form"),
    profileFirstNameInput: document.getElementById("profile-first-name-input"),
    profileLastNameInput: document.getElementById("profile-last-name-input"),
    profileEmailInput: document.getElementById("profile-email-input"),
    emailValidationFeedback: document.getElementById("email-validation-feedback"),
    profileBioInput: document.getElementById("profile-bio-input"),
    avatarSelectorGrid: document.getElementById("avatar-selector-grid"),
    profileSaveStatus: document.getElementById("profile-save-status"),
    settingsThemePicker: document.getElementById("settings-theme-picker"),
    settingsDailyTarget: document.getElementById("settings-daily-target"),
    settingsConfettiToggle: document.getElementById("settings-confetti-toggle"),
    profileDeleteAccountBtn: document.getElementById("profile-delete-account-btn"),

    confettiCanvas: document.getElementById("confetti-canvas")
  };

  function applyTheme(themeName) {
    const validTheme = themeName || "emerald-forest";
    document.documentElement.setAttribute("data-theme", validTheme);
    if (els.themeSelector) els.themeSelector.value = validTheme;
    if (els.settingsThemePicker) {
      els.settingsThemePicker.querySelectorAll(".theme-card-opt").forEach(btn => {
        if (btn.getAttribute("data-theme-val") === validTheme) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }
    state.theme = validTheme;
    saveState();
  }

  function getTracks() {
    const descriptions = {
      "SQL": "Baze de date relaționale, clauze SELECT, filtrări WHERE, JOIN-uri și agregări.",
      "Java": "Programare Orientată pe Obiecte (POO), clase, polimorfism, colecții și algoritmi.",
      "JavaScript": "Dezvoltare web modernă, funcții ES6+, asincronism async/await și manipulare DOM.",
      "Engleză (A1–A2)": "Fundamente gramaticale, prezent simplu/continuu, verbe neregulate și dialog uzual.",
      "Engleză (B1–B2)": "Timpuri compuse, diateză pasivă, fraze condiționale și vocabular intermediar.",
      "Engleză (C1–C2)": "Structuri de inversiune, modale deductive, nuanțe stilistice și colocuiri academice.",
      "Engleză: Familie & Hobby": "Vocabular aplicat pentru viața de zi cu zi, activități, pasiuni și familie."
    };

    const map = new Map();
    allLessons.forEach(item => {
      if (!map.has(item.track)) {
        map.set(item.track, {
          name: item.track,
          icon: item.icon || "📘",
          description: descriptions[item.track] || "Capitole enciclopedice și exerciții practice complete."
        });
      }
    });
    return Array.from(map.values());
  }

  // Actualizare Cluster Statistici (Streak, Rang, Obiectiv Zilnic cu Tooltip)
  function renderStats() {
    const today = getTodayKey();
    const todayAutonomous = state.dailyHistory[today] || 0;
    const todayAssisted = state.assistedHistory[today] || 0;

    const totalAutonomous = Object.values(state.dailyHistory).reduce((a, b) => a + b, 0);
    const totalAssisted = Object.values(state.assistedHistory).reduce((a, b) => a + b, 0);
    const totalExercises = totalAutonomous + totalAssisted;
    const dailyTarget = getDailyTarget();

    if (els.streakCount) els.streakCount.textContent = state.streak;
    if (els.xpCount) els.xpCount.textContent = `${state.xp} XP`;
    if (els.userRank) els.userRank.textContent = getRankTitle(state.xp);

    // Stare Obiectiv Zilnic
    if (els.goalPill) {
      if (todayAutonomous >= dailyTarget) {
        els.goalPill.classList.add("goal-completed");
        if (els.dailyProgressText) els.dailyProgressText.textContent = `✅ ${dailyTarget}/${dailyTarget}`;
        if (els.dailyProgressLabel) els.dailyProgressLabel.textContent = "Complet!";
        if (els.goalIcon) els.goalIcon.textContent = "✅";
        if (els.goalTooltipTitle) els.goalTooltipTitle.textContent = "🎉 Obiectiv Zilnic Completat!";
        if (els.goalTooltipText) {
          els.goalTooltipText.innerHTML = `Azi ai îndeplinit cu succes scopul de <strong>${dailyTarget}/${dailyTarget}</strong> sarcini rezolvate autonom.<br>În total ai finalizat <strong>${totalExercises}</strong> sarcini în enciclopedie.`;
        }
      } else {
        els.goalPill.classList.remove("goal-completed");
        if (els.dailyProgressText) els.dailyProgressText.textContent = `${todayAutonomous}/${dailyTarget}`;
        if (els.dailyProgressLabel) els.dailyProgressLabel.textContent = "Azi";
        if (els.goalIcon) els.goalIcon.textContent = "🎯";
        if (els.goalTooltipTitle) els.goalTooltipTitle.textContent = "🎯 Obiectiv Zilnic";
        if (els.goalTooltipText) {
          els.goalTooltipText.innerHTML = `Azi ai rezolvat autonom <strong>${todayAutonomous} din ${dailyTarget}</strong> sarcini.<br>În total ai finalizat <strong>${totalExercises}</strong> sarcini.`;
        }
      }
    }

    // Sincronizare Header Profil
    if (els.headerAvatarIcon) els.headerAvatarIcon.textContent = state.user.avatar || "🎓";
    if (els.headerProfileName) els.headerProfileName.textContent = state.user.firstName || "Denis";
  }

  // =========================================================================
  // VIEW SWITCHING (SPA MULTI-PAGE: CATALOG, STUDY, ACTIVITY, LEAGUES, PROFILE)
  // =========================================================================
  function switchView(viewName) {
    const validViews = ["catalog", "study", "activity", "leagues", "profile"];
    const target = validViews.includes(viewName) ? viewName : "catalog";
    state.activeView = target;
    saveState();

    const views = [
      els.catalogView,
      els.studyView,
      els.activityView,
      els.leaguesView,
      els.profileView
    ];
    views.forEach(v => {
      if (v) v.classList.add("hidden");
    });

    document.querySelectorAll(".nav-link-btn").forEach(btn => {
      if (btn.getAttribute("data-view") === target) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    closePocketDrawer();

    if (target === "catalog") {
      if (els.catalogView) els.catalogView.classList.remove("hidden");
      renderCatalogView();
    } else if (target === "study") {
      if (els.studyView) els.studyView.classList.remove("hidden");
      renderStudyView();
    } else if (target === "activity") {
      if (els.activityView) els.activityView.classList.remove("hidden");
      renderActivityView();
    } else if (target === "leagues") {
      if (els.leaguesView) els.leaguesView.classList.remove("hidden");
      renderLeaguesView();
    } else if (target === "profile") {
      if (els.profileView) els.profileView.classList.remove("hidden");
      renderProfileView();
    }

    renderStats();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // =========================================================================
  // VIEW 1: CATALOG VIEW (DASHBOARDUL PRINCIPAL FĂRĂ SARCINI CLUTTER)
  // =========================================================================
  function renderCatalogView() {
    const tracks = getTracks();
    els.catalogDomainsGrid.innerHTML = "";

    tracks.forEach(track => {
      const trackLessons = allLessons.filter(l => l.track === track.name);
      const completedCount = trackLessons.filter(l => (state.masteryPoints[l.id] || 0) > 0).length;
      const pct = trackLessons.length ? Math.round((completedCount / trackLessons.length) * 100) : 0;
      const isActive = state.activeTrack === track.name;

      const card = document.createElement("div");
      card.className = `domain-card ${isActive ? "active" : ""}`;
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.innerHTML = `
        <div class="domain-card-header">
          <span class="domain-card-icon" aria-hidden="true">${track.icon}</span>
          <span class="domain-card-badge">${trackLessons.length} capitole</span>
        </div>
        <h3 class="domain-card-title">${track.name}</h3>
        <p class="domain-card-desc">${track.description}</p>
        <div class="domain-progress-row">
          <span>Progres Măiestrie</span>
          <strong>${completedCount}/${trackLessons.length} (${pct}%)</strong>
        </div>
        <div class="domain-progress-bar" aria-hidden="true">
          <div class="domain-progress-fill" style="width: ${pct}%;"></div>
        </div>
      `;

      card.addEventListener("click", () => {
        state.activeTrack = track.name;
        saveState();
        renderCatalogView();
      });

      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          state.activeTrack = track.name;
          saveState();
          renderCatalogView();
        }
      });

      els.catalogDomainsGrid.appendChild(card);
    });

    // Actualizare Antet Capitole Domeniu Selectat
    els.catalogDomainSubtitle.textContent = `DOMENIUL SELECTAT: ${state.activeTrack.toUpperCase()}`;
    els.catalogSelectedDomainTitle.textContent = `Capitole disponibile (${allLessons.filter(l => l.track === state.activeTrack).length})`;

    updateCatalogFilterOptions();
    renderCatalogChapters();
  }

  function updateCatalogFilterOptions() {
    const currentVal = els.catalogLevelFilter ? els.catalogLevelFilter.value : "ALL";
    const track = state.activeTrack || "";

    if (track === "Engleză (A1–A2)") {
      els.catalogLevelFilter.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (A1 → A2)</option>
        <option value="1.">🟢 Nivel A1 (1 pt Mastery)</option>
        <option value="2.">🔵 Nivel A2 (2 pt Mastery)</option>
      `;
    } else if (track === "Engleză (B1–B2)") {
      els.catalogLevelFilter.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (B1 → B2)</option>
        <option value="1.">🟢 Nivel B1 (1 pt Mastery)</option>
        <option value="2.">🔵 Nivel B2 (2 pt Mastery)</option>
      `;
    } else if (track === "Engleză (C1–C2)") {
      els.catalogLevelFilter.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (C1 → C2)</option>
        <option value="1.">🟣 Nivel C1 (1 pt Mastery)</option>
        <option value="2.">🟠 Nivel C1+ (2 pt Mastery)</option>
        <option value="3.">🔴 Nivel C2 (3 pt Mastery)</option>
      `;
    } else {
      els.catalogLevelFilter.innerHTML = `
        <option value="ALL">📊 Toate Nivelele (Începător → Exemplar)</option>
        <option value="1.">🥉 1. Începător (1 pt Mastery)</option>
        <option value="2.">🥈 2. Junior (2 pt Mastery)</option>
        <option value="3.">🥇 3. Middle (3 pt Mastery)</option>
        <option value="4.">💠 4. Senior (4 pt Mastery)</option>
        <option value="5.">💎 5. Exemplar (5 pt Mastery)</option>
      `;
    }

    const optionExists = Array.from(els.catalogLevelFilter.options).some(o => o.value === currentVal);
    els.catalogLevelFilter.value = optionExists ? currentVal : "ALL";
  }

  function renderCatalogChapters() {
    const allTrackLessons = allLessons
      .filter(l => l.track === state.activeTrack)
      .sort((a, b) => (a.level || "").localeCompare(b.level || ""));

    const selectedLevel = els.catalogLevelFilter ? els.catalogLevelFilter.value : "ALL";
    const query = els.catalogSearchInput ? els.catalogSearchInput.value.trim().toLowerCase() : "";

    const filteredLessons = allTrackLessons.filter(l => {
      const matchesLevel = selectedLevel === "ALL" || (l.level && l.level.startsWith(selectedLevel));
      const matchesQuery =
        !query ||
        l.title.toLowerCase().includes(query) ||
        (l.theory && l.theory.toLowerCase().includes(query)) ||
        (l.prompt && l.prompt.toLowerCase().includes(query));
      return matchesLevel && matchesQuery;
    });

    els.catalogChaptersGrid.innerHTML = "";

    if (filteredLessons.length === 0) {
      els.catalogChaptersGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2rem; text-align: center; color: var(--text-secondary);">
          🔍 Niciun capitol nu corespunde criteriilor de căutare. Încearcă un alt termen sau schimbă filtrul de nivel.
        </div>
      `;
      return;
    }

    filteredLessons.forEach(lesson => {
      const realIndex = allTrackLessons.findIndex(item => item.id === lesson.id) + 1;
      const mStatus = getLessonMasteryStatus(lesson);

      const item = document.createElement("div");
      item.className = "catalog-chapter-item";
      item.innerHTML = `
        <div class="chapter-info-col">
          <span class="chapter-level-tag">${lesson.level || "Nivel"} • ${mStatus.icon} ${mStatus.tier}</span>
          <span class="chapter-name">${realIndex}. ${formatRomanianTypography(lesson.title)}</span>
        </div>
        <button class="chapter-start-btn" aria-label="Studiază capitolul ${lesson.title}">
          Studiază →
        </button>
      `;

      item.addEventListener("click", () => {
        state.activeLessonId = lesson.id;
        lessonSessionAssisted = false;
        saveState();
        switchView("study");
      });

      els.catalogChaptersGrid.appendChild(item);
    });
  }

  // =========================================================================
  // VIEW 2: STUDY VIEW (WORKSPACEL DE LECTURĂ & ANTRENAMENT INTERACTIV)
  // =========================================================================
  function renderStudyView() {
    const lesson = allLessons.find(l => l.id === state.activeLessonId) || allLessons[0];
    if (!lesson) return;

    // Resetare sesiune de asistență pentru capitolul curent
    lessonSessionAssisted = false;

    // Indicator temă curentă în navigația de sus
    els.studyTrackIndicator.textContent = `${lesson.icon || "📘"} ${lesson.track}`;

    const mStatus = getLessonMasteryStatus(lesson);

    els.lessonCategoryBadge.textContent = `${lesson.icon || "📘"} ${lesson.track}`;
    els.lessonLevelBadge.textContent = lesson.level || "1. Începător";
    els.lessonStatusBadge.textContent = mStatus.label;

    els.lessonTitle.textContent = formatRomanianTypography(lesson.title);
    els.lessonTheory.innerHTML = formatRomanianTypography(lesson.theory);

    // Dicționar & Tabel de Concepte / Vocabular
    const glossaryItems = lesson.glossary || getMatchingPairsForLesson(lesson).map(p => ({ term: p.left, def: p.right }));
    els.lessonDictionary.innerHTML = "";
    glossaryItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "dict-entry";
      div.innerHTML = `
        <div class="dict-term-row">
          <span class="dict-term">${item.term}</span>
          <span class="dict-arrow" aria-hidden="true">➔</span>
        </div>
        <span class="dict-def">${formatRomanianTypography(item.def)}</span>
      `;
      els.lessonDictionary.appendChild(div);
    });

    els.lessonExample.textContent = lesson.example;
    els.lessonXpTag.textContent = `+${lesson.xp || 30} XP`;
    els.lessonPrompt.textContent = formatRomanianTypography(lesson.prompt);

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

  // =========================================================================
  // MODUL 2: JOCUL DE POTRIVIRE PE 2 COLOANE (MATCHING GAME)
  // =========================================================================
  function getMatchingPairsForLesson(lesson) {
    if (Array.isArray(lesson.matchingPairs) && lesson.matchingPairs.length >= 3) {
      return lesson.matchingPairs;
    }
    if (Array.isArray(lesson.glossary) && lesson.glossary.length >= 3) {
      return lesson.glossary.slice(0, 4).map(g => ({ left: g.term, right: g.def }));
    }

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
      btn.textContent = formatRomanianTypography(item.text);
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
          matchState.matchedIndices.add(targetIdx);
          leftBtn.classList.remove("selected");
          leftBtn.classList.add("matched");
          btn.classList.add("matched");
          matchState.selectedLeftIndex = null;

          if (matchState.matchedIndices.size === pairs.length) {
            els.matchStatusMsg.textContent = "✅ Felicitări! Ai potrivit corect toate perechile!";
            els.matchStatusMsg.style.color = "var(--success-green)";
            recordAutonomousActivity(20, lesson);
            renderStats();
            els.lessonStatusBadge.textContent = getLessonMasteryStatus(lesson).label;
            launchConfetti();
          } else {
            els.matchStatusMsg.textContent = `✓ Pereche corectă! (${matchState.matchedIndices.size}/${pairs.length})`;
            els.matchStatusMsg.style.color = "var(--success-green)";
          }
        } else {
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

  // =========================================================================
  // MODUL 3: QUIZ 2x2 (GRILĂ SIMETRICĂ DE ALEGERE MULTIPLĂ)
  // =========================================================================
  function getQuizForLesson(lesson) {
    if (lesson.quiz && lesson.quiz.question && Array.isArray(lesson.quiz.options)) {
      return lesson.quiz;
    }

    const sol = lesson.officialSolution;
    let distractor1 = "";
    let distractor2 = "";
    let distractor3 = "";

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
      question: `Care este varianta corectă conform regulilor din capitolul „${lesson.title}”?`,
      options: options.map(o => o.text),
      correctIndex: correctIdx
    };
  }

  function renderQuizMode(lesson) {
    const qData = getQuizForLesson(lesson);
    els.quizQuestionText.textContent = formatRomanianTypography(qData.question);
    els.quizFeedbackMsg.textContent = "Selectează opțiunea corectă de mai sus.";
    els.quizFeedbackMsg.style.color = "var(--text-secondary)";
    els.quizOptionsGrid.innerHTML = "";

    qData.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option-btn";
      btn.textContent = formatRomanianTypography(optText);
      const isCorrect = idx === qData.correctIndex;

      btn.addEventListener("click", () => {
        // Dacă a fost deja selectat răspunsul corect, blochează orice alt click
        const alreadySolved = Array.from(els.quizOptionsGrid.querySelectorAll(".quiz-option-btn")).some(b => b.classList.contains("correct"));
        if (alreadySolved) return;

        if (isCorrect) {
          btn.classList.remove("wrong");
          btn.classList.add("correct");
          els.quizFeedbackMsg.textContent = "✅ Răspuns corect! Punctul de Măiestrie a fost acordat.";
          els.quizFeedbackMsg.style.color = "var(--success-green)";
          recordAutonomousActivity(15, lesson);
          renderStats();
          els.lessonStatusBadge.textContent = getLessonMasteryStatus(lesson).label;
          launchConfetti();

          // Blochează toate opțiunile: opțiunea corectă rămâne verde aprins, celelalte devin inactive
          Array.from(els.quizOptionsGrid.querySelectorAll(".quiz-option-btn")).forEach(b => {
            b.disabled = true;
            b.style.pointerEvents = "none";
            if (b !== btn) {
              b.classList.remove("wrong");
              b.classList.add("locked-other");
            }
          });
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

  // =========================================================================
  // MODUL 1: SCRIERE & VALIDARE (CU REGULĂ ANTI-CHEAT 50/50 PENTRU SOLUȚIE ASISTATĂ)
  // =========================================================================
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
      els.nextLessonBtn.classList.remove("hidden");

      if (lessonSessionAssisted) {
        // Cazul 50/50: a cerut răspunsul sau l-a copiat direct
        recordAssistedActivity(lesson);
        els.validationFeedback.innerHTML = "⚠️ <strong>Rezolvare Asistată (50/50):</strong> Ai obținut <strong>+5 XP de consolare</strong>. Progresul de Măiestrie și Obiectivul Zilnic 3/3 nu se contorizează pentru soluțiile asistate, dar Streak-ul a fost menținut!";
        els.validationFeedback.style.color = "var(--assisted-amber)";
      } else {
        // Cazul Autonom 100%: a rezolvat de sine stătător
        recordAutonomousActivity(lesson.xp || 30, lesson);
        els.validationFeedback.textContent = "✅ Excelent! Răspunsul este 100% corect. Ai câștigat XP complet și ai avansat în Obiectivul Zilnic 3/3!";
        els.validationFeedback.style.color = "var(--success-green)";
        launchConfetti();
      }

      renderStats();
      els.lessonStatusBadge.textContent = getLessonMasteryStatus(lesson).label;
    } else {
      els.inputZone.classList.remove("state-success");
      els.inputZone.classList.remove("state-error");
      void els.inputZone.offsetWidth;
      els.inputZone.classList.add("state-error");
      els.validationFeedback.textContent = rawInput.trim()
        ? "❌ Răspuns incorect! Caseta rămâne roșie până când tastezi varianta corectă."
        : "❌ Caseta este goală! Scrie răspunsul la cerința evidențiată mai sus.";
      els.validationFeedback.style.color = "var(--error-red)";
    }
  }

  // =========================================================================
  // BUZUNAR GLISANT OFF-CANVAS (POCKET DRAWER)
  // =========================================================================
  function openPocketDrawer() {
    renderPocketDrawer();
    els.pocketDrawer.classList.add("open");
    els.pocketDrawerBackdrop.classList.remove("hidden");
    els.openPocketDrawerBtn.setAttribute("aria-expanded", "true");
  }

  function closePocketDrawer() {
    els.pocketDrawer.classList.remove("open");
    els.pocketDrawerBackdrop.classList.add("hidden");
    els.openPocketDrawerBtn.setAttribute("aria-expanded", "false");
  }

  function renderPocketDrawer() {
    const tracks = getTracks();
    els.pocketTrackTabs.innerHTML = "";

    tracks.forEach(t => {
      const countInTrack = allLessons.filter(l => l.track === t.name).length;
      const btn = document.createElement("button");
      btn.className = `track-tab-btn ${state.activeTrack === t.name ? "active" : ""}`;
      btn.innerHTML = `
        <span style="display:flex; align-items:center; gap:0.4rem;">${t.icon} ${t.name}</span>
        <span style="font-size:0.75rem; color:var(--text-secondary); opacity:0.85;">${countInTrack} cap.</span>
      `;
      btn.addEventListener("click", () => {
        state.activeTrack = t.name;
        saveState();
        renderPocketDrawer();
      });
      els.pocketTrackTabs.appendChild(btn);
    });

    const trackLessons = allLessons
      .filter(l => l.track === state.activeTrack)
      .sort((a, b) => (a.level || "").localeCompare(b.level || ""));

    const completedInTrack = trackLessons.filter(l => (state.masteryPoints[l.id] || 0) > 0).length;
    const pct = trackLessons.length ? Math.round((completedInTrack / trackLessons.length) * 100) : 0;
    els.pocketCompletionBadge.textContent = `${completedInTrack}/${trackLessons.length} (${pct}%)`;

    els.pocketLessonList.innerHTML = "";
    trackLessons.forEach((lesson, idx) => {
      const mStatus = getLessonMasteryStatus(lesson);
      const isActive = lesson.id === state.activeLessonId;

      const li = document.createElement("li");
      li.className = `lesson-item ${isActive ? "active" : ""} ${mStatus.current > 0 ? "completed" : ""}`;
      li.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:2px; min-width:0; flex:1;">
          <span style="font-size:0.68rem; color:var(--text-secondary); font-weight:700;">${lesson.level || "Nivel"}</span>
          <span style="word-break:break-word; text-wrap:pretty;">${idx + 1}. ${formatRomanianTypography(lesson.title)}</span>
        </div>
        <span class="lesson-mastery-pill">${mStatus.icon} ${mStatus.current}/${mStatus.max}</span>
      `;

      li.addEventListener("click", () => {
        state.activeLessonId = lesson.id;
        lessonSessionAssisted = false;
        saveState();
        closePocketDrawer();
        renderStudyView();
      });

      els.pocketLessonList.appendChild(li);
    });
  }

  // =========================================================================
  // VIEW 3: PAGINĂ COMPLETĂ ACTIVITATE & CALENDAR (FĂRĂ POP-UP)
  // =========================================================================
  function renderActivityView() {
    const today = getTodayKey();
    const todayAutonomous = state.dailyHistory[today] || 0;
    const totalAutonomous = Object.values(state.dailyHistory).reduce((a, b) => a + b, 0);
    const totalAssisted = Object.values(state.assistedHistory).reduce((a, b) => a + b, 0);
    const totalExercises = totalAutonomous + totalAssisted;
    const dailyTarget = getDailyTarget();

    if (els.actStreakVal) els.actStreakVal.textContent = `${state.streak} ${state.streak === 1 ? "zi" : "zile"}`;
    if (els.actLongestStreakVal) els.actLongestStreakVal.textContent = `${state.longestStreak} ${state.longestStreak === 1 ? "zi" : "zile"}`;
    if (els.actTodayVal) els.actTodayVal.textContent = `${todayAutonomous}/${dailyTarget}`;
    if (els.actTotalTasksVal) els.actTotalTasksVal.textContent = totalExercises;

    if (!els.activityCalendarGrid) return;
    els.activityCalendarGrid.innerHTML = "";

    // Ultimele 28 de zile în ordine cronologică
    for (let i = 27; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = toLocalDateKey(d);

      const autonomousCount = state.dailyHistory[key] || 0;
      const assistedCount = state.assistedHistory[key] || 0;

      const cell = document.createElement("div");
      cell.className = "calendar-cell";

      if (autonomousCount >= dailyTarget) {
        cell.classList.add("cell-complete"); // 🟢 Verde
        cell.title = `${key}: Obiectiv ${dailyTarget}/${dailyTarget} atins (${autonomousCount} rezolvări autonome)`;
      } else if (autonomousCount > 0) {
        cell.classList.add("cell-streak"); // 🟠 Portocaliu
        cell.title = `${key}: Streak păstrat (${autonomousCount} sarcini)`;
      } else if (assistedCount > 0) {
        cell.classList.add("cell-assisted"); // 🟡 Galben/Chihlimbar
        cell.title = `${key}: Studiu asistat 50/50 (${assistedCount} sarcini)`;
      } else {
        cell.title = `${key}: Fără activitate înregistrată`;
      }

      if (key === today) cell.classList.add("today-cell");
      cell.textContent = d.getDate();

      els.activityCalendarGrid.appendChild(cell);
    }
  }

  // =========================================================================
  // VIEW 4: PAGINĂ COMPLETĂ LIGI & REALIZĂRI (FĂRĂ POP-UP)
  // =========================================================================
  const ACHIEVEMENTS = [
    {
      id: "first_step",
      icon: "🚀",
      title: "Primul Pas",
      desc: "Finalizează cu succes prima ta sarcină enciclopedică.",
      isUnlocked: s => Object.values(s.dailyHistory).reduce((a, b) => a + b, 0) >= 1
    },
    {
      id: "streak_fire",
      icon: "🔥",
      title: "Flacăra Constanței",
      desc: "Menține un streak activ de minimum 3 zile de studiu consecutiv.",
      isUnlocked: s => s.streak >= 3 || s.longestStreak >= 3
    },
    {
      id: "daily_target",
      icon: "🎯",
      title: "Disciplină de Fier",
      desc: "Îndeplinește obiectivul zilnic complet într-o singură zi.",
      isUnlocked: s => (s.dailyHistory[getTodayKey()] || 0) >= getDailyTarget()
    },
    {
      id: "xp_seeker",
      icon: "💎",
      title: "Căutător de Comori",
      desc: "Acumulează cel puțin 250 XP în contul tău enciclopedic.",
      isUnlocked: s => s.xp >= 250
    },
    {
      id: "polymath_master",
      icon: "👑",
      title: "Maestru Polimat",
      desc: "Stăpânește și finalizează cel puțin 15 capitole distincte.",
      isUnlocked: s => s.completedLessons.length >= 15
    }
  ];

  function renderLeaguesView() {
    const userXp = state.xp;
    const currentLeague = LEAGUES.slice().reverse().find(l => userXp >= l.minXp) || LEAGUES[0];
    const nextLeague = LEAGUES.find(l => l.minXp > userXp);

    if (els.pageLeagueIcon) els.pageLeagueIcon.textContent = currentLeague.icon;
    if (els.pageLeagueTitle) els.pageLeagueTitle.textContent = currentLeague.name;
    if (els.pageLeagueDesc) els.pageLeagueDesc.textContent = currentLeague.desc;

    if (nextLeague) {
      const span = nextLeague.minXp - currentLeague.minXp;
      const progress = Math.min(100, Math.max(0, Math.round(((userXp - currentLeague.minXp) / span) * 100)));
      if (els.pageLeagueProgressFill) els.pageLeagueProgressFill.style.width = `${progress}%`;
      if (els.pageLeagueXpStatus) els.pageLeagueXpStatus.textContent = `${userXp} / ${nextLeague.minXp} XP`;
      if (els.pageLeagueNextStatus) els.pageLeagueNextStatus.textContent = `Următorul: ${nextLeague.name} (${nextLeague.minXp} XP)`;
    } else {
      if (els.pageLeagueProgressFill) els.pageLeagueProgressFill.style.width = "100%";
      if (els.pageLeagueXpStatus) els.pageLeagueXpStatus.textContent = `${userXp} XP (Rang Maxim)`;
      if (els.pageLeagueNextStatus) els.pageLeagueNextStatus.textContent = "🏆 Măiestrie Supremă Atingă";
    }

    // Lista tuturor celor 5 ligi
    if (els.pageLeaguesList) {
      els.pageLeaguesList.innerHTML = "";
      LEAGUES.forEach(league => {
        const isCurrent = league.id === currentLeague.id;
        const isPassed = userXp >= league.maxXp && league.maxXp !== Infinity;
        const row = document.createElement("div");
        row.className = `league-row ${isCurrent ? "current-league" : ""}`;
        row.innerHTML = `
          <div class="league-icon" aria-hidden="true">${league.icon}</div>
          <div class="league-info">
            <div class="league-name">
              ${league.name}
              ${isCurrent ? '<span class="league-status-badge">👑 Rangul Tău Curent</span>' : (isPassed ? '<span class="league-status-badge" style="background:var(--border-color); color:var(--text-secondary);">✓ Rang Depășit</span>' : '')}
            </div>
            <div class="league-req">Cerință: ${league.minXp} XP ${league.maxXp !== Infinity ? "– " + league.maxXp + " XP" : "+"}</div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:0.25rem;">${league.desc}</p>
          </div>
        `;
        els.pageLeaguesList.appendChild(row);
      });
    }

    // Realizări și Trofee
    if (els.pageAchievementsGrid) {
      els.pageAchievementsGrid.innerHTML = "";
      ACHIEVEMENTS.forEach(ach => {
        const unlocked = ach.isUnlocked(state);
        const card = document.createElement("div");
        card.className = `achievement-card ${unlocked ? "unlocked" : "locked"}`;
        card.innerHTML = `
          <div class="achievement-icon" aria-hidden="true">${ach.icon}</div>
          <div class="achievement-info">
            <div class="achievement-title">
              ${ach.title}
              <span class="achievement-badge ${unlocked ? "unlocked" : "locked"}">${unlocked ? "✓ Deblocat" : "🔒 Blocat"}</span>
            </div>
            <p class="achievement-desc">${ach.desc}</p>
          </div>
        `;
        els.pageAchievementsGrid.appendChild(card);
      });
    }
  }

  // =========================================================================
  // VIEW 5: PAGINĂ COMPLETĂ PROFIL & SETĂRI UTILIZATOR
  // =========================================================================
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.(com|ru|md|ro|org|net|io|edu|dev|me|info|[a-z]{2,})$/i;

  function validateEmailFormat(email) {
    return EMAIL_REGEX.test((email || "").trim());
  }

  function checkEmailFieldValidity(val) {
    if (!els.emailValidationFeedback) return;
    if (validateEmailFormat(val)) {
      els.emailValidationFeedback.textContent = "✓ Adresă de email validă (@ și extensie recunoscută).";
      els.emailValidationFeedback.className = "field-validation-msg valid";
    } else {
      els.emailValidationFeedback.textContent = "Trebuie să conțină @ și un domeniu valid (ex: .com, .ru, .ro, .md).";
      els.emailValidationFeedback.className = "field-validation-msg invalid";
    }
  }

  function renderProfileView() {
    // Profil Sidebar
    if (els.profileCardAvatar) els.profileCardAvatar.textContent = state.user.avatar || "🎓";
    if (els.profileCardName) els.profileCardName.textContent = `${state.user.firstName || "Denis"} ${state.user.lastName || "Perju"}`.trim();
    if (els.profileCardEmail) els.profileCardEmail.textContent = state.user.email || "denis@polymath.com";
    if (els.profileCardBio) els.profileCardBio.textContent = state.user.bio || "Pasionat de programare, limbi străine și cunoaștere polimată.";

    if (els.profileStatXp) els.profileStatXp.textContent = `${state.xp} XP`;
    if (els.profileStatRank) els.profileStatRank.textContent = getRankTitle(state.xp);
    if (els.profileStatStreak) els.profileStatStreak.textContent = `${state.streak} ${state.streak === 1 ? "zi" : "zile"}`;
    if (els.profileStatLessons) els.profileStatLessons.textContent = state.completedLessons.length;

    // Form inputs
    if (els.profileFirstNameInput) els.profileFirstNameInput.value = state.user.firstName || "";
    if (els.profileLastNameInput) els.profileLastNameInput.value = state.user.lastName || "";
    if (els.profileEmailInput) {
      els.profileEmailInput.value = state.user.email || "";
      checkEmailFieldValidity(state.user.email || "");
    }
    if (els.profileBioInput) els.profileBioInput.value = state.user.bio || "";

    // Avatar Grid selection
    if (els.avatarSelectorGrid) {
      els.avatarSelectorGrid.querySelectorAll(".avatar-opt-btn").forEach(btn => {
        if (btn.getAttribute("data-avatar") === (state.user.avatar || "🎓")) {
          btn.classList.add("selected");
        } else {
          btn.classList.remove("selected");
        }
      });
    }

    // Theme Picker selection
    if (els.settingsThemePicker) {
      els.settingsThemePicker.querySelectorAll(".theme-card-opt").forEach(btn => {
        if (btn.getAttribute("data-theme-val") === state.theme) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }

    // Study Preferences
    if (els.settingsDailyTarget) {
      els.settingsDailyTarget.value = String(getDailyTarget());
    }
    if (els.settingsConfettiToggle) {
      els.settingsConfettiToggle.value = String(state.preferences.confettiEnabled !== false);
    }
  }

  function launchConfetti() {
    if (state.preferences && state.preferences.confettiEnabled === false) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = els.confettiCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#10b981", "#059669", "#34d399", "#f59e0b", "#6366f1"];
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

  // =========================================================================
  // ATRIBUIRE EVENIMENTE
  // =========================================================================
  function bindEvents() {
    // Navigare Brand spre Pagina Principală (Catalog)
    if (els.brandHomeBtn) {
      els.brandHomeBtn.addEventListener("click", () => switchView("catalog"));
      els.brandHomeBtn.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          switchView("catalog");
        }
      });
    }

    // Navigație Pagini Top SPA (Catalog, Studiu, Activitate, Ligi, Profil)
    [els.navCatalogBtn, els.navStudyBtn, els.navActivityBtn, els.navLeaguesBtn, els.navProfileBtn].forEach(btn => {
      if (btn) {
        btn.addEventListener("click", () => {
          const view = btn.getAttribute("data-view");
          if (view) switchView(view);
        });
      }
    });

    // Buton Profil din Header
    if (els.headerProfileBtn) {
      els.headerProfileBtn.addEventListener("click", () => switchView("profile"));
    }

    // Cluster Statistici Navigabil Direct
    if (els.streakPill) {
      els.streakPill.addEventListener("click", () => switchView("activity"));
      els.streakPill.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          switchView("activity");
        }
      });
    }

    if (els.xpPill) {
      els.xpPill.addEventListener("click", () => switchView("leagues"));
      els.xpPill.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          switchView("leagues");
        }
      });
    }

    if (els.goalPill) {
      els.goalPill.addEventListener("click", () => switchView("activity"));
      els.goalPill.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          switchView("activity");
        }
      });
    }

    // Buton Înapoi la Catalog din Studiul Focalizat
    if (els.backToCatalogBtn) {
      els.backToCatalogBtn.addEventListener("click", () => switchView("catalog"));
    }

    // Buzunar Glisant (Pocket Drawer)
    if (els.openPocketDrawerBtn) els.openPocketDrawerBtn.addEventListener("click", openPocketDrawer);
    if (els.closePocketDrawerBtn) els.closePocketDrawerBtn.addEventListener("click", closePocketDrawer);
    if (els.pocketDrawerBackdrop) els.pocketDrawerBackdrop.addEventListener("click", closePocketDrawer);

    // Filtre & Căutare în Catalog
    if (els.catalogLevelFilter) {
      els.catalogLevelFilter.addEventListener("change", renderCatalogChapters);
    }
    if (els.catalogSearchInput) {
      els.catalogSearchInput.addEventListener("input", renderCatalogChapters);
    }

    // Comutator Moduri de Practică în Studiul Focalizat
    if (els.tabModeWrite) els.tabModeWrite.addEventListener("click", () => switchPracticeMode("write"));
    if (els.tabModeMatch) els.tabModeMatch.addEventListener("click", () => switchPracticeMode("match"));
    if (els.tabModeQuiz) els.tabModeQuiz.addEventListener("click", () => switchPracticeMode("quiz"));

    // Buton Reamestecare Joc de Potrivire
    if (els.resetMatchBtn) {
      els.resetMatchBtn.addEventListener("click", () => {
        const lesson = allLessons.find(l => l.id === state.activeLessonId);
        if (lesson) renderMatchingGame(lesson);
      });
    }

    // Validare Răspuns Scris
    if (els.verifyBtn) els.verifyBtn.addEventListener("click", verifyCurrentAnswer);
    if (els.userAnswerInput) {
      els.userAnswerInput.addEventListener("keydown", e => {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
          e.preventDefault();
          verifyCurrentAnswer();
        }
      });
    }

    // Indiciu Fără Spoiler
    if (els.hintBtn) {
      els.hintBtn.addEventListener("click", () => {
        if (els.hintDrawer) els.hintDrawer.classList.toggle("hidden");
      });
    }

    // M-am Dat Bătut (Arată Soluția -> Activează penalizarea 50/50)
    if (els.giveUpBtn) {
      els.giveUpBtn.addEventListener("click", () => {
        lessonSessionAssisted = true;
        if (els.solutionDrawer) els.solutionDrawer.classList.remove("hidden");
      });
    }

    // Copiază Soluția & Validează (Activează penalizarea 50/50)
    if (els.applySolutionBtn) {
      els.applySolutionBtn.addEventListener("click", () => {
        const lesson = allLessons.find(l => l.id === state.activeLessonId);
        if (!lesson) return;
        lessonSessionAssisted = true;
        if (els.userAnswerInput) els.userAnswerInput.value = lesson.officialSolution;
        verifyCurrentAnswer();
      });
    }

    // Capitolul Următor
    if (els.nextLessonBtn) {
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
        lessonSessionAssisted = false;
        saveState();
        renderStudyView();
        renderStats();
      });
    }

    // Copiere Exemplu
    if (els.copyExampleBtn) {
      els.copyExampleBtn.addEventListener("click", () => {
        if (els.lessonExample) {
          navigator.clipboard.writeText(els.lessonExample.textContent);
          els.copyExampleBtn.textContent = "✓ Copiat";
          setTimeout(() => {
            if (els.copyExampleBtn) els.copyExampleBtn.textContent = "Copiază";
          }, 1400);
        }
      });
    }

    // Comutator Teme Header
    if (els.themeSelector) {
      els.themeSelector.addEventListener("change", e => applyTheme(e.target.value));
    }

    // Comutator Teme din Setări Profil
    if (els.settingsThemePicker) {
      els.settingsThemePicker.querySelectorAll(".theme-card-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          const th = btn.getAttribute("data-theme-val");
          if (th) applyTheme(th);
        });
      });
    }

    // Validare Email în Timp Real la Tastare
    if (els.profileEmailInput) {
      els.profileEmailInput.addEventListener("input", e => {
        checkEmailFieldValidity(e.target.value);
      });
    }

    // Formular Profil & Date Utilizator
    if (els.profileForm) {
      els.profileForm.addEventListener("submit", e => {
        e.preventDefault();
        const emailVal = els.profileEmailInput ? els.profileEmailInput.value.trim() : "";
        if (!validateEmailFormat(emailVal)) {
          checkEmailFieldValidity(emailVal);
          if (els.profileEmailInput) els.profileEmailInput.focus();
          return;
        }

        state.user = {
          firstName: (els.profileFirstNameInput ? els.profileFirstNameInput.value.trim() : "") || "Denis",
          lastName: (els.profileLastNameInput ? els.profileLastNameInput.value.trim() : "") || "Perju",
          email: emailVal,
          bio: els.profileBioInput ? els.profileBioInput.value.trim() : "",
          avatar: state.user.avatar || "🎓"
        };

        saveState();
        renderProfileView();
        renderStats();

        if (els.profileSaveStatus) {
          els.profileSaveStatus.classList.remove("hidden");
          setTimeout(() => {
            if (els.profileSaveStatus) els.profileSaveStatus.classList.add("hidden");
          }, 2500);
        }
      });
    }

    // Selector Avatar în Setări Profil
    if (els.avatarSelectorGrid) {
      els.avatarSelectorGrid.querySelectorAll(".avatar-opt-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const av = btn.getAttribute("data-avatar");
          if (av) {
            state.user.avatar = av;
            saveState();
            renderProfileView();
            renderStats();
          }
        });
      });
    }

    // Preferințe Studiu: Țintă Obiectiv Zilnic
    if (els.settingsDailyTarget) {
      els.settingsDailyTarget.addEventListener("change", e => {
        state.preferences.dailyTarget = Number(e.target.value) || 3;
        saveState();
        renderStats();
        if (state.activeView === "activity") renderActivityView();
      });
    }

    // Preferințe Studiu: Animații Confetti
    if (els.settingsConfettiToggle) {
      els.settingsConfettiToggle.addEventListener("change", e => {
        state.preferences.confettiEnabled = e.target.value === "true";
        saveState();
      });
    }

    // Resetare Totală Cont & Date de la Zero (Zona de Pericol)
    if (els.profileDeleteAccountBtn) {
      els.profileDeleteAccountBtn.addEventListener("click", () => {
        if (window.confirm("Atenție: Această acțiune va șterge ireversibil profilul, toate punctele XP, nivelul ligii, capitolele rezolvate și streak-ul.\n\nEști sigur că vrei să resetezi totul de la zero?")) {
          // 1. Șterge stocarea locală pe toate versiunile
          window.localStorage.removeItem(STORAGE_KEY);
          window.localStorage.removeItem("polymath_edtech_state_v1");
          window.localStorage.removeItem("polymath_state");
          window.localStorage.removeItem("polymath_history");

          // 2. Resetare obiect stare
          state = {
            ...defaultState,
            theme: "emerald-forest",
            user: {
              firstName: "Denis",
              lastName: "Perju",
              email: "denis@polymath.com",
              bio: "Pasionat de programare, limbi străine și cunoaștere polimată.",
              avatar: "🎓"
            },
            preferences: {
              dailyTarget: 3,
              confettiEnabled: true
            }
          };
          saveState();
          applyTheme(state.theme);

          // 3. Resetare interfață de studiu
          lessonSessionAssisted = false;
          if (els.userAnswerInput) els.userAnswerInput.value = "";
          if (els.inputZone) els.inputZone.classList.remove("state-error", "state-success");
          if (els.solutionDrawer) els.solutionDrawer.classList.add("hidden");
          if (els.hintDrawer) els.hintDrawer.classList.add("hidden");
          if (els.nextLessonBtn) els.nextLessonBtn.classList.add("hidden");

          switchView("catalog");
          renderAll();
        }
      });
    }
  }

  function renderAll() {
    applyTheme(state.theme);
    renderStats();
    switchView(state.activeView || "catalog");
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    renderAll();
  });
})();