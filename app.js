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
    layoutMode: "bento-nextjs",
    soundEnabled: false,
    is3DActive: true,
    customLessons: [],
    activeTrack: "SQL",
    activeLessonId: "sql-1",
    activePracticeMode: "write", // "write" | "match" | "quiz"
    activeView: "catalog",       // "catalog" | "study" | "activity" | "leagues"
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
    ...(typeof ADVANCED_CURRICULUM !== "undefined" && typeof ADVANCED_CURRICULUM_EXPANSION === "undefined" ? ADVANCED_CURRICULUM : []),
    ...(typeof NEW_EXPANDED_CURRICULUM !== "undefined" ? NEW_EXPANDED_CURRICULUM : []),
    ...(typeof CPP_EXPANDED_CURRICULUM !== "undefined" ? CPP_EXPANDED_CURRICULUM : []),
    ...(typeof MEGA_EXPANDED_CURRICULUM !== "undefined" ? MEGA_EXPANDED_CURRICULUM : [])
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

  // Elimină vechile fragmente disparate pentru franceză, spaniolă și python în favoarea curriculumului canonic de capitole complete
  const deprecatedLegacyIds = new Set([
    "fr-a1-1", "fr-a1-2", "fr-a1-3", "fr-b1-1-ex1", "fr-b1-1-ex2", "fr-b1-1-ex3", "fr-b1-2-ex1", "fr-b1-2-ex2", "fr-c1-1-ex1",
    "es-a1-1", "es-a1-2", "es-a1-3", "es-b1-1-ex1", "es-b1-1-ex2", "es-b1-2-ex1", "es-b1-2-ex2", "es-c1-1-ex1",
    "py-core-1", "py-core-2", "py-core-3", "py-core-4"
  ]);
  allLessons = allLessons.filter(l => !deprecatedLegacyIds.has(l.id));

  // Asigură că activeLessonId din localStorage nu punctează la o lecție eliminată / inexistentă
  if (state.activeLessonId && !allLessons.some(l => l.id === state.activeLessonId)) {
    const fallbackInTrack = allLessons.find(l => l.track === state.activeTrack);
    state.activeLessonId = fallbackInTrack ? fallbackInTrack.id : (allLessons[0] ? allLessons[0].id : "sql-1");
  }

  // Normalizare structură discipline pentru o clasificare clară și intuitivă
  allLessons.forEach(l => {
    if (l.track === "JavaScript: DOM & Events") {
      l.track = "JavaScript";
      l.division = "Informatică și Programare";
      if (!l.level || l.level.startsWith("1.")) {
        l.level = "4. DOM & Evenimente Browser";
      }
    } else if (l.track && l.track.includes("C & C++")) {
      l.track = "C & C++";
      l.division = "Informatică și Programare";
      if (l.level && l.level.includes("Mid-Level")) l.level = "3. Middle";
      else if (l.level && l.level.includes("Senior Architect")) l.level = "5. Arhitect / Exemplar";
      else if (l.level && l.level.includes("Senior /")) l.level = "4. Senior";
    } else if (l.track && l.track.includes("C#")) {
      l.track = "C#";
      l.division = "Informatică și Programare";
    } else if (l.track && l.track.includes("Python")) {
      l.track = "Python";
      l.division = "Informatică și Programare";
    } else if (l.track && l.track.includes("DevOps")) {
      l.track = "DevOps & Sisteme Linux";
      l.division = "Informatică și Programare";
    } else if (l.track && l.track.includes("TypeScript")) {
      l.track = "TypeScript & React";
      l.division = "Informatică și Programare";
    } else if (l.track && l.track.includes("Algoritmi")) {
      l.track = "Algoritmi & Structuri de Date";
      l.division = "Informatică și Programare";
    } else if (l.track && l.track.includes("Franceză")) {
      l.track = "Limba Franceză";
      l.division = "Limbi Străine & Comunicare";
      if (!l.level || l.level.includes("A1") || l.level.includes("A2") || l.level.startsWith("1.") || l.id.startsWith("fr-a1")) {
        l.level = "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)";
      } else if (l.level.includes("B1") || l.level.includes("B2") || l.level.startsWith("2.") || l.level.startsWith("3.") || l.id.startsWith("fr-b1")) {
        l.level = "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)";
      } else {
        l.level = "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)";
      }
    } else if (l.track && l.track.includes("Spaniolă")) {
      l.track = "Limba Spaniolă";
      l.division = "Limbi Străine & Comunicare";
      if (!l.level || l.level.includes("A1") || l.level.includes("A2") || l.level.startsWith("1.") || l.id.startsWith("es-a1")) {
        l.level = "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)";
      } else if (l.level.includes("B1") || l.level.includes("B2") || l.level.startsWith("2.") || l.level.startsWith("3.") || l.id.startsWith("es-b1")) {
        l.level = "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)";
      } else {
        l.level = "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)";
      }
    } else if (l.track === "SQL" || l.track === "Java" || l.track === "JavaScript") {
      l.division = "Informatică și Programare";
    } else if (l.track && l.track.includes("Engleză")) {
      l.division = "Limbi Străine & Comunicare";
      if (l.track.includes("Familie") || l.id.startsWith("eng-fam") || l.id.startsWith("eng-h-")) {
        l.track = "Engleză: Familie & Hobby";
      } else if (l.id.startsWith("eng-a1") || l.id.startsWith("eng-a2") || l.id.startsWith("eng-a-") || (l.level && (l.level.includes("A1") || l.level.includes("A2")))) {
        l.track = "Engleză (A1–A2)";
        if (l.id.startsWith("eng-a1") || l.id.startsWith("eng-a-") || (l.level && l.level.includes("A1"))) l.level = "1. A1 Începător";
        else l.level = "2. A2 Elementar";
      } else if (
        l.id.startsWith("eng-b1") || l.id.startsWith("eng-b2") || l.id.startsWith("eng-b-") ||
        l.id === "eng-adv-1" || l.id === "eng-adv-2" || l.id === "eng-adv-3" ||
        l.id === "eng-v1" || l.id === "eng-lexical-4" || l.id === "eng-lexical-12" ||
        (l.level && (l.level.includes("B1") || l.level.includes("B2")))
      ) {
        l.track = "Engleză (B1–B2)";
        if (l.id.startsWith("eng-b1") || l.id.startsWith("eng-b-") || l.id === "eng-adv-1" || (l.level && l.level.includes("B1"))) {
          l.level = "1. B1 Intermediate";
        } else {
          l.level = "2. B2 Upper-Intermediate";
        }
      } else {
        l.track = "Engleză (C1–C2)";
        if (l.level && (l.level.includes("C2") || l.id.startsWith("eng-adv-14") || l.id.startsWith("eng-adv-15") || l.id.startsWith("eng-adv-16") || l.id.startsWith("eng-adv-17") || l.id.startsWith("eng-adv-18") || l.id === "eng-v6" || l.id === "eng-c-2")) {
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

  // Parser robust pentru Markdown și entități speciale în textul teoriei (elimină orice asteriscuri brute)
  function parseMarkdownToHtml(str) {
    if (!str || typeof str !== "string") return "";
    let html = str;

    // LaTeX săgeți matematice / gramaticale
    html = html.replace(/\$\\rightarrow\$/g, "&rarr;").replace(/\\rightarrow/g, "&rarr;");

    // Markdown bold: **text** -> <strong>text</strong>
    html = html.replace(/\*\*([^*\n\r]+?)\*\*/g, "<strong>$1</strong>");

    // Markdown italic: *text* (fără a strica pointeri C++ sau operatori de multiplicare)
    html = html.replace(/(?<=[\s\(\[\{>]|^)\*([a-zA-Z0-9àâäéèêëîïôöùûüÿçœæÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇŒÆáéíóúñÁÉÍÓÚÑ_\s\(\)\,\.\:\'\’\?!\/-]+?)\*(?=[\s\)\]\},.;:!?<]|$)/g, "<em>$1</em>");

    // Inline backticks: `code` -> <code>code</code>
    html = html.replace(/`([^`\n\r]+?)`/g, "<code>$1</code>");

    // Dacă teoria este text simplu fără structură de paragrafe HTML, transformă în paragrafe și liste
    if (!/<p>|<div>|<h4>|<ul>|<ol>|<pre>/i.test(html)) {
      const paragraphs = html.split(/\n\s*\n/);
      html = paragraphs.map(p => {
        p = p.trim();
        if (!p) return "";
        if (p.startsWith("- ") || p.startsWith("* ")) {
          const items = p.split(/\n(?=[-*]\s+)/).map(li => `<li>${li.replace(/^[-*]\s+/, "")}</li>`).join("");
          return `<ul>${items}</ul>`;
        }
        if (/^\d+\.\s+/.test(p)) {
          const items = p.split(/\n(?=\d+\.\s+)/).map(li => `<li>${li.replace(/^\d+\.\s+/, "")}</li>`).join("");
          return `<ol>${items}</ol>`;
        }
        return `<p>${p.replace(/\n/g, "<br>")}</p>`;
      }).join("\n");
    }

    return html;
  }

  function formatTheoryContent(theory, lesson) {
    if (!theory && !lesson) return "";
    let html = parseMarkdownToHtml(theory || "");

    // Asigură că fiecare capitol de studiu conține un bloc vizual de cod practic ilustrativ
    if (lesson && !html.includes("<pre>") && (lesson.example || lesson.starterCode)) {
      const code = (lesson.example || lesson.starterCode || "").trim();
      if (code) {
        const isLang = lesson.track && (lesson.track.includes("Franceză") || lesson.track.includes("Spaniolă") || lesson.track.includes("Engleză"));
        const titleLabel = isLang ? "Exemple Practice de Dialog & Expresii:" : "Exemplu Practic de Cod:";
        const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        html += `\n<h4>${titleLabel}</h4>\n<pre><code>${escaped}</code></pre>`;
      }
    }

    return formatRomanianTypography(html);
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

  // Utilitare Securitate & Notificări
  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str.replace(/[&<>"']/g, m => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[m]));
  }

  function showToast(message) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "polymath-toast";
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Extragere defensivă a soluției oficiale fără riscul de 'undefined'
  function getLessonOfficialSolution(lesson) {
    if (!lesson) return "";
    if (typeof lesson.officialSolution === "string" && lesson.officialSolution.trim() !== "") {
      return lesson.officialSolution;
    }
    if (Array.isArray(lesson.acceptedAnswers) && lesson.acceptedAnswers.length > 0 && typeof lesson.acceptedAnswers[0] === "string" && lesson.acceptedAnswers[0].trim() !== "") {
      return lesson.acceptedAnswers[0];
    }
    if (lesson.hint && typeof lesson.hint === "string") {
      const cleaned = lesson.hint.replace(/^[Ss]crie\s+/i, "").replace(/^['"`]|['"`]$/g, "").trim();
      if (cleaned) return cleaned;
    }
    if (lesson.example && typeof lesson.example === "string" && lesson.example.trim()) {
      return lesson.example.trim();
    }
    return lesson.starterCode || "";
  }

  // =========================================================================
  // GESTIUNE STARE PERSISTENTĂ (LOCALSTORAGE)
  // =========================================================================
  function loadState() {
    try {
      let raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        raw = window.localStorage.getItem("polymath_state_profile_default") || window.localStorage.getItem("polymath_edtech_state_v1");
      }
      if (!raw) {
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
      parsed.activeView = ["catalog", "study", "activity", "leagues"].includes(parsed.activeView) ? parsed.activeView : "catalog";
      parsed.customLessons = [];
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

  function renderAllViews() {
    renderStats();
    if (state.activeView === "catalog") renderCatalog();
    else if (state.activeView === "study") renderStudyView();
    else if (state.activeView === "activity") renderActivityView();
    else if (state.activeView === "leagues") renderLeaguesView();
  }

  // Sistem Dinamic de Mastery (Bronz -> Argint -> Aur -> Platină -> Diamant)
  function getMasteryConfig(levelStr) {
    const lvl = levelStr || "1. Începător";
    if (lvl.startsWith("1.") || lvl.includes("A1") || lvl.includes("Începător")) return { max: 1, tier: "Bronz" };
    if (lvl.startsWith("2.") || lvl.includes("A2") || lvl.includes("Junior")) return { max: 2, tier: "Argint" };
    if (lvl.startsWith("3.") || lvl.includes("B1") || lvl.includes("Middle")) return { max: 3, tier: "Aur" };
    if (lvl.startsWith("4.") || lvl.includes("B2") || lvl.includes("C1") || lvl.includes("Senior")) return { max: 4, tier: "Platină" };
    if (lvl.startsWith("5.") || lvl.includes("C2") || lvl.includes("Exemplar")) return { max: 5, tier: "Diamant" };
    return { max: 2, tier: "Practician" };
  }

  function getLessonMasteryStatus(lesson) {
    const cfg = getMasteryConfig(lesson.level);
    const current = Math.min(cfg.max, state.masteryPoints[lesson.id] || 0);
    const isMaxed = current >= cfg.max;
    return {
      current,
      max: cfg.max,
      tier: cfg.tier,
      label: `${isMaxed ? "Maestru" : cfg.tier} ${current}/${cfg.max}`
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
    {
      id: 1,
      name: "Rang I: Inițiat",
      minXp: 0,
      maxXp: 99,
      icon: `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cd7f32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      desc: "Primul pas în călătoria enciclopedică polimată."
    },
    {
      id: 2,
      name: "Rang II: Explorator Activ",
      minXp: 100,
      maxXp: 279,
      icon: `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      desc: "Practică susținută și consolidare de concepte de bază."
    },
    {
      id: 3,
      name: "Rang III: Practician Avansat",
      minXp: 280,
      maxXp: 549,
      icon: `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      desc: "Stăpânire autonomă a sintaxei și a lexicului complex."
    },
    {
      id: 4,
      name: "Rang IV: Arhitect Sintactic",
      minXp: 550,
      maxXp: 899,
      icon: `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      desc: "Nivel înalt de finețe tehnică și fluență."
    },
    {
      id: 5,
      name: "Rang V: Enciclopedist Polimat",
      minXp: 900,
      maxXp: Infinity,
      icon: `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      desc: "Măiestrie absolută în toate domeniile studiate."
    }
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
    layoutSelector: document.getElementById("layout-selector"),
    soundToggleBtn: document.getElementById("sound-toggle-btn"),
    soundToggleIcon: document.getElementById("sound-toggle-icon"),
    cyberCommandStage: document.getElementById("cyber-command-stage"),
    cyberCliInput: document.getElementById("cyber-cli-input"),
    cyberCliRunBtn: document.getElementById("cyber-cli-run-btn"),
    cyberTerminalOutput: document.getElementById("cyber-terminal-output"),
    cyberTelemetryClock: document.getElementById("cyber-telemetry-clock"),
    cosmosOrbitStage: document.getElementById("cosmos-orbit-stage"),
    cosmosOrbitCanvas: document.getElementById("cosmos-orbit-canvas"),
    cosmosTelemetryNodes: document.getElementById("cosmos-telemetry-nodes"),
    cosmosHudCard: document.getElementById("cosmos-hud-card"),
    hudTargetName: document.getElementById("hud-target-name"),
    hudCardDesc: document.getElementById("hud-card-desc"),
    hudWarpBtn: document.getElementById("hud-warp-btn"),
    cosmosNavShortcuts: document.getElementById("cosmos-nav-shortcuts"),
    dualSplitStatusbar: document.getElementById("dual-split-statusbar"),
    statusCurrentTrack: document.getElementById("status-current-track"),
    statusMasteryXp: document.getElementById("status-mastery-xp"),
    dualSplitTopicNav: document.getElementById("dual-split-topic-nav"),
    dualTrackTitle: document.getElementById("dual-track-title"),
    dualChapterSelect: document.getElementById("dual-chapter-select"),
    dualTabTheory: document.getElementById("dual-tab-theory"),
    dualTabExamples: document.getElementById("dual-tab-examples"),
    dualTabPractice: document.getElementById("dual-tab-practice"),
    dualTabExercises: document.getElementById("dual-tab-exercises"),
    dualPrevBtn: document.getElementById("dual-prev-btn"),
    dualNextBtn: document.getElementById("dual-next-btn"),
    aimCursor: document.getElementById("aim-cursor"),
    aimDot: document.getElementById("aim-dot"),

    // Gamification Hub (Claude Experiment 12)
    gamificationCalendarGrid: document.getElementById("gamification-calendar-grid"),
    hudLevelBadge: document.getElementById("hudLevelBadge"),
    textLevel: document.getElementById("textLevel"),
    xpPercentText: document.getElementById("xpPercentText"),
    questVal1: document.getElementById("quest-val-1"),
    questVal2: document.getElementById("quest-val-2"),
    questVal3: document.getElementById("quest-val-3"),

    // View 1: Catalog
    catalogView: document.getElementById("catalog-view"),
    catalogDomainsGrid: document.getElementById("catalog-domains-grid"),
    catalogDomainsToggleWrap: document.getElementById("catalog-domains-toggle-wrap"),
    btnToggleDomains: document.getElementById("btn-toggle-domains"),
    btnToggleDomainsText: document.getElementById("btn-toggle-domains-text"),
    btnToggleDomainsIcon: document.getElementById("btn-toggle-domains-icon"),
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


    confettiCanvas: document.getElementById("confetti-canvas")
  };

  function applyTheme(themeName) {
    const validTheme = themeName || "emerald-forest";
    document.documentElement.setAttribute("data-theme", validTheme);
    if (els.themeSelector) els.themeSelector.value = validTheme;
    state.theme = validTheme;
    saveState();
  }

  /* ==========================================================================
     SINTETIZATOR AUDIO WEB AUDIO API (100% NATIV, FĂRĂ DEPENDENȚE EXTERNE)
     ========================================================================== */
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playUiSound(type = "click") {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === "click") {
        // Clic mecanic de tastatură tactile
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(650, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === "success") {
        // Coardă armonică triumfală ascendentă (C5, E5, G5, C6)
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const t = now + idx * 0.06;
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.08, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.28);
        });
      } else if (type === "hint") {
        // Semnal acustic cald de ghidaj
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.14);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.14);
      } else if (type === "warp") {
        // Puls spațial sci-fi (Cosmos / Cyber)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.18);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      }
    } catch (e) {
      // Ignoră erorile audio dacă utilizatorul nu a interacționat încă cu pagina
    }
  }

  function toggleSound() {
    state.is3DActive = (state.is3DActive === undefined) ? false : !state.is3DActive;
    state.soundEnabled = !state.soundEnabled;
    saveState();
    if (els.soundToggleIcon) {
      els.soundToggleIcon.textContent = state.is3DActive ? "🧊 3D" : "📄 Simplu";
    }
    const stage = document.getElementById("cosmos-orbit-stage");
    if (stage) {
      stage.style.display = state.is3DActive ? "block" : "none";
    }
    const simpleHero = document.querySelector(".catalog-hero");
    if (simpleHero && window.innerWidth > 768) {
      simpleHero.style.display = state.is3DActive ? "none" : "block";
    }
    if (state.is3DActive) {
      showToast("🧊 Modul 3D Citadela activat");
    } else {
      showToast("📄 Modul Simplu activat");
    }
  }

  /* ==========================================================================
     METRICI & CLASIFICĂRI SPECIALE PENTRU CELE 5 ARHITECTURI DE LAYOUT
     ========================================================================== */
  function getTrackRarity(name) {
    if (name.includes("C & C++") || name.includes("Algoritmi")) return "💎 LEGENDARY CITADEL";
    if (name.includes("Python") || name.includes("Java") || name.includes("SQL")) return "🔮 EPIC RUNESTONE";
    if (name.includes("Engleză") || name.includes("Franceză") || name.includes("Spaniolă")) return "🏛️ MYTHIC POLYGLOT";
    return "⚡ RARE MATRIX";
  }

  function getTrackAct(name) {
    if (name.includes("C & C++") || name.includes("Linux") || name.includes("SQL")) return "ACT I: SISTEME & HARDWARE";
    if (name.includes("Python") || name.includes("Algoritmi") || name.includes("Java") || name.includes("TypeScript") || name.includes("JavaScript") || name.includes("C#")) return "ACT II: INTELIGENȚĂ & ALGORITMI";
    return "ACT III: POLIGLOT & COMUNICARE";
  }

  function updateDualSplitStatusbar() {
    if (!els.dualSplitStatusbar) return;
    if (els.statusCurrentTrack) {
      els.statusCurrentTrack.textContent = `Workspace: ${state.activeTrack || "SQL"}`;
    }
    if (els.statusMasteryXp) {
      els.statusMasteryXp.textContent = `XP: ${state.xp || 0}`;
    }
  }

  function applyLayoutMode(mode) {
    const validModes = ["bento-nextjs", "dual-split", "swiss-editorial", "cyber-kernel", "spatial-cosmos", "micro-scroll"];
    const validLayout = validModes.includes(mode) ? mode : "bento-nextjs";
    document.documentElement.setAttribute("data-layout", validLayout);
    state.layoutMode = validLayout;
    saveState();
    if (els.layoutSelector) els.layoutSelector.value = validLayout;

    // Toggle etape speciale de layout
    if (els.cyberCommandStage) {
      if (validLayout === "cyber-kernel" && state.activeView === "catalog") {
        els.cyberCommandStage.classList.remove("hidden");
      } else {
        els.cyberCommandStage.classList.add("hidden");
      }
    }

    if (els.cosmosOrbitStage) {
      if (state.activeView === "catalog") {
        els.cosmosOrbitStage.classList.remove("hidden");
        initCosmosOrbitCanvas();
      } else {
        els.cosmosOrbitStage.classList.add("hidden");
      }
    }

    if (els.dualSplitStatusbar) {
      if (state.activeView === "study" || validLayout === "dual-split") {
        els.dualSplitStatusbar.classList.remove("hidden");
        updateDualSplitStatusbar();
      } else {
        els.dualSplitStatusbar.classList.add("hidden");
      }
    }

    // Dual Split Workspace este activat peste tot în ecranul de studiu și răspuns
    if (state.activeView === "study" || validLayout === "dual-split") {
      if (!state.activeDualPane) state.activeDualPane = "theory";
      document.documentElement.setAttribute("data-dual-pane", state.activeDualPane);
      document.body.setAttribute("data-dual-pane", state.activeDualPane);
      if (els.studyView) els.studyView.setAttribute("data-dual-pane", state.activeDualPane);
      renderDualSplitWorkspace();
    } else {
      document.documentElement.removeAttribute("data-dual-pane");
      document.body.removeAttribute("data-dual-pane");
      if (els.studyView) els.studyView.removeAttribute("data-dual-pane");
    }

    // Aim cursor activ doar pe desktop în modurile Swiss Editorial & Spatial Cosmos
    const isSpecialCursor = (validLayout === "swiss-editorial" || validLayout === "spatial-cosmos");
    if (els.aimCursor && els.aimDot) {
      els.aimCursor.style.display = isSpecialCursor ? "block" : "none";
      els.aimDot.style.display = isSpecialCursor ? "block" : "none";
    }

    if (state.activeView === "catalog") {
      renderCatalogView();
    } else if (state.activeView === "study") {
      renderStudyView();
    }
  }

  const TRACK_ICONS = {
    "SQL": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    "Java": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    "JavaScript": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    "TypeScript & React": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    "C & C++": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    "C#": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>`,
    "Python": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    "DevOps & Sisteme Linux": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    "Algoritmi & Structuri de Date": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
    "Engleză (A1–A2)": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    "Engleză (B1–B2)": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
    "Engleză (C1–C2)": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    "Engleză: Familie & Hobby": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    "Limba Franceză": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
    "Limba Spaniolă": `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
  };

  const trackDescriptions = {
    "SQL": "Baze de date relaționale, clauze SELECT, filtrări WHERE, JOIN-uri și agregări analitice.",
    "Java": "POO, clase, polimorfism, colecții avansate și Spring Boot REST API.",
    "JavaScript": "Dezvoltare web modernă, funcții ES6+, asincronism async/await și manipulare DOM Tree.",
    "TypeScript & React": "Sintaxă strictă statică, interfețe, hooks React (useState, useEffect) și componente modulare.",
    "C & C++": "Curriculum enciclopedic extins: de la sintaxă C/C++, pointeri și memorie RAII, până la STL, POO, C++20 și POSIX systems.",
    "C#": "Arhitectură .NET Core, LINQ, programare orientată pe obiecte, delegates și evenimente.",
    "Python": "Sintaxă expresivă, structuri de date native, list comprehensions și algoritmi.",
    "DevOps & Sisteme Linux": "Comenzi terminal Bash, pipes, Docker multi-stage, Git internals și protocoale de rețea.",
    "Algoritmi & Structuri de Date": "Tehnici Two Pointers, căutare binară O(log n), stive și optimizarea complexității.",
    "Engleză (A1–A2)": "Fundamente gramaticale, prezent simplu/continuu, verbe neregulate și dialog uzual.",
    "Engleză (B1–B2)": "Timpuri compuse, diateză pasivă, fraze condiționale și vocabular intermediar.",
    "Engleză (C1–C2)": "Structuri de inversiune, modale deductive, nuanțe stilistice și colocuiri academice.",
    "Engleză: Familie & Hobby": "Vocabular aplicat pentru viața de zi cu zi, activități, pasiuni și familie.",
    "Limba Franceză": "3 module progresive de la zero absolut (pronume, être/avoir, numere) până la nivel C2 (Subjonctif, idiomuri, corespondență formală).",
    "Limba Spaniolă": "3 module progresive de la zero absolut (pronume, ser vs estar, tener) până la nivel C2 (Subjuntivo, idiomuri, spaniolă de afaceri)."
  };

  const trackDivisions = {
    "SQL": "Informatică și Programare",
    "Java": "Informatică și Programare",
    "JavaScript": "Informatică și Programare",
    "TypeScript & React": "Informatică și Programare",
    "C & C++": "Informatică și Programare",
    "C#": "Informatică și Programare",
    "Python": "Informatică și Programare",
    "DevOps & Sisteme Linux": "Informatică și Programare",
    "Algoritmi & Structuri de Date": "Informatică și Programare",
    "Engleză (A1–A2)": "Limbi Străine & Comunicare",
    "Engleză (B1–B2)": "Limbi Străine & Comunicare",
    "Engleză (C1–C2)": "Limbi Străine & Comunicare",
    "Engleză: Familie & Hobby": "Limbi Străine & Comunicare",
    "Limba Franceză": "Limbi Străine & Comunicare",
    "Limba Spaniolă": "Limbi Străine & Comunicare"
  };

  let currentDivisionFilter = "ALL";
  let domainsExpanded = false;
  const DOMAINS_LIMIT = 6;

  function getTracks() {
    const tracksOrder = [
      "SQL", "Java", "JavaScript", "TypeScript & React", "C & C++", "C#", "Python",
      "DevOps & Sisteme Linux", "Algoritmi & Structuri de Date",
      "Engleză (A1–A2)", "Engleză (B1–B2)", "Engleză (C1–C2)", "Engleză: Familie & Hobby",
      "Limba Franceză", "Limba Spaniolă"
    ];
    const list = [];
    tracksOrder.forEach(name => {
      const hasAny = allLessons.some(l => l.track === name);
      if (hasAny) {
        list.push({
          name,
          icon: TRACK_ICONS[name] || `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`,
          description: trackDescriptions[name] || "Capitole enciclopedice și exerciții practice complete.",
          division: trackDivisions[name] || "Informatică și Programare"
        });
      }
    });
    return list;
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

    // Stare Obiectiv Zilnic & Widget Unificat de Statistici
    const isStreakMet = todayAutonomous >= dailyTarget;
    const unifiedBadge = document.getElementById("unified-stats-badge");
    const unifiedStreakIcon = document.getElementById("unified-streak-icon");
    const unifiedStreakLabel = document.getElementById("unified-streak-label");

    if (unifiedBadge) {
      if (isStreakMet) {
        unifiedBadge.classList.remove("streak-unfulfilled");
        unifiedBadge.classList.add("streak-fulfilled");
        if (unifiedStreakIcon) unifiedStreakIcon.textContent = "🔥";
        if (unifiedStreakLabel) unifiedStreakLabel.textContent = "Streak!";
        if (els.xpCount) els.xpCount.classList.add("score-milestone-glow");
      } else {
        unifiedBadge.classList.remove("streak-fulfilled");
        unifiedBadge.classList.add("streak-unfulfilled");
        if (unifiedStreakIcon) unifiedStreakIcon.textContent = "🎯";
        if (unifiedStreakLabel) unifiedStreakLabel.textContent = "Azi";
        if (els.xpCount) els.xpCount.classList.remove("score-milestone-glow");
      }
    }

    if (els.goalPill) {
      if (isStreakMet) {
        els.goalPill.classList.add("goal-completed");
        if (els.dailyProgressText) els.dailyProgressText.textContent = `${dailyTarget}/${dailyTarget}`;
        if (els.dailyProgressLabel) els.dailyProgressLabel.textContent = "Complet!";
        if (els.goalIcon) {
          els.goalIcon.innerHTML = `<svg class="ui-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--success-green);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
        }
        if (els.goalTooltipTitle) els.goalTooltipTitle.textContent = "Obiectiv Zilnic Completat!";
        if (els.goalTooltipText) {
          els.goalTooltipText.innerHTML = `Azi ai îndeplinit cu succes scopul de <strong>${dailyTarget}/${dailyTarget}</strong> sarcini rezolvate autonom.<br>În total ai finalizat <strong>${totalExercises}</strong> sarcini în enciclopedie.`;
        }
      } else {
        els.goalPill.classList.remove("goal-completed");
        if (els.dailyProgressText) els.dailyProgressText.textContent = `${todayAutonomous}/${dailyTarget}`;
        if (els.dailyProgressLabel) els.dailyProgressLabel.textContent = "Azi";
        if (els.goalIcon) {
          els.goalIcon.innerHTML = `<svg class="ui-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`;
        }
        if (els.goalTooltipTitle) els.goalTooltipTitle.textContent = "Obiectiv Zilnic";
        if (els.goalTooltipText) {
          els.goalTooltipText.innerHTML = `Azi ai rezolvat autonom <strong>${todayAutonomous} din ${dailyTarget}</strong> sarcini.<br>În total ai finalizat <strong>${totalExercises}</strong> sarcini.`;
        }
      }
    }


  }

  // =========================================================================
  // VIEW SWITCHING (SPA MULTI-PAGE: CATALOG, STUDY, ACTIVITY, LEAGUES)
  // =========================================================================
  function switchView(viewName) {
    const validViews = ["catalog", "study", "activity", "leagues"];
    const target = validViews.includes(viewName) ? viewName : "catalog";
    state.activeView = target;
    saveState();

    const views = [
      els.catalogView,
      els.studyView,
      els.activityView,
      els.leaguesView
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
    }

    renderStats();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // =========================================================================
  // VIEW 1: CATALOG VIEW (DASHBOARDUL PRINCIPAL FĂRĂ SARCINI CLUTTER)
  // =========================================================================
  function renderCatalogView() {
    if (els.cosmosOrbitStage) {
      els.cosmosOrbitStage.classList.remove("hidden");
      initCosmosOrbitCanvas();
    }
    const tracks = getTracks();
    els.catalogDomainsGrid.innerHTML = "";

    const visibleTracks = tracks.filter(track => {
      if (!currentDivisionFilter || currentDivisionFilter === "ALL") return true;
      return track.division === currentDivisionFilter;
    });

    const shouldLimit = !domainsExpanded && visibleTracks.length > DOMAINS_LIMIT;
    let tracksToRender = visibleTracks;

    if (shouldLimit) {
      tracksToRender = visibleTracks.slice(0, DOMAINS_LIMIT);
      // Asigură că dacă domeniul activ curent este în visibleTracks, el este vizibil
      if (!tracksToRender.some(t => t.name === state.activeTrack)) {
        const activeObj = visibleTracks.find(t => t.name === state.activeTrack);
        if (activeObj) {
          tracksToRender[DOMAINS_LIMIT - 1] = activeObj;
        }
      }
    }

    tracksToRender.forEach(track => {
      const trackLessons = allLessons.filter(l => l.track === track.name);
      const completedCount = trackLessons.filter(l => (state.masteryPoints[l.id] || 0) > 0).length;
      const pct = trackLessons.length ? Math.round((completedCount / trackLessons.length) * 100) : 0;
      const isActive = state.activeTrack === track.name;

      const rarity = getTrackRarity(track.name);
      const act = getTrackAct(track.name);
      const isCyber = state.layoutMode === "cyber-kernel";
      const isEditorial = state.layoutMode === "swiss-editorial";
      const isCosmos = state.layoutMode === "spatial-cosmos";
      const isDual = state.layoutMode === "dual-split";

      const card = document.createElement("div");
      card.className = `domain-card ${isActive ? "active" : ""}`;
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.innerHTML = `
        <div class="card-gloss-overlay" aria-hidden="true"></div>
        <div class="domain-card-header">
          <span class="domain-card-icon" aria-hidden="true">${track.icon}</span>
          <div style="display:flex; gap:0.4rem; align-items:center; flex-wrap:wrap;">
            <span class="domain-division-badge">${track.division === "Informatică și Programare" ? "Informatică" : "Limbi Străine"}</span>
            <span class="domain-card-badge">${trackLessons.length} capitole</span>
          </div>
        </div>
        ${isCosmos ? `<div style="margin-bottom:0.25rem;"><small class="domain-rarity-badge" style="font-size:0.68rem; font-weight:800; color:#c084fc; letter-spacing:0.04em;">${rarity}</small></div>` : ""}
        ${isEditorial ? `<div style="margin-bottom:0.25rem;"><small class="domain-act-badge" style="font-size:0.68rem; font-family:'Cormorant Garamond',serif; font-style:italic; color:#c5a059; letter-spacing:0.06em;">${act}</small></div>` : ""}
        ${isDual ? `<div style="margin-bottom:0.25rem;"><small class="domain-ide-badge" style="font-size:0.68rem; font-family:'JetBrains Mono',monospace; color:var(--accent-primary);">SRC: //tracks/${track.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}</small></div>` : ""}
        <h3 class="domain-card-title">${isCyber ? `$ run ${track.name.toLowerCase()}` : track.name}</h3>
        <p class="domain-card-desc">${track.description}</p>
        <div class="domain-progress-row">
          <span>Progres Măiestrie</span>
          <strong>${completedCount}/${trackLessons.length} (${pct}%)</strong>
        </div>
        <div class="domain-progress-bar" aria-hidden="true">
          <div class="domain-progress-fill" style="width: ${pct}%;"></div>
        </div>
      `;

      // 3D Perspective Tilt & Specular Cursor Sheen on Desktop
      if (window.matchMedia("(min-width: 769px) and (hover: hover)").matches) {
        card.addEventListener("mousemove", e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
          card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
          card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
        });

        card.addEventListener("mouseleave", () => {
          card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
        });
      }

      function selectDomainAndScroll() {
        playUiSound("click");
        state.activeTrack = track.name;
        saveState();
        renderCatalogView();
        if (state.layoutMode === "dual-split") updateDualSplitStatusbar();
        const chaptersSection = document.getElementById("catalog-chapters-section") || els.catalogSelectedDomainTitle;
        if (chaptersSection) {
          chaptersSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      card.addEventListener("click", selectDomainAndScroll);

      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectDomainAndScroll();
        }
      });

      els.catalogDomainsGrid.appendChild(card);
    });

    // Buton Toggle Afișare / Restrângere Domenii Suplimentare
    if (els.catalogDomainsToggleWrap && els.btnToggleDomains) {
      if (visibleTracks.length <= DOMAINS_LIMIT) {
        els.catalogDomainsToggleWrap.classList.add("hidden");
      } else {
        els.catalogDomainsToggleWrap.classList.remove("hidden");
        const total = visibleTracks.length;
        if (domainsExpanded) {
          if (els.btnToggleDomainsText) els.btnToggleDomainsText.textContent = `Restrânge la ${DOMAINS_LIMIT} discipline`;
          if (els.btnToggleDomainsIcon) els.btnToggleDomainsIcon.innerHTML = `<polyline points="18 15 12 9 6 15"></polyline>`;
        } else {
          if (els.btnToggleDomainsText) els.btnToggleDomainsText.textContent = `Afișează toate domeniile (${total}) ▾`;
          if (els.btnToggleDomainsIcon) els.btnToggleDomainsIcon.innerHTML = `<polyline points="6 9 12 15 18 9"></polyline>`;
        }
      }
    }

    // Actualizare Antet Capitole Domeniu Selectat
    els.catalogDomainSubtitle.textContent = `DOMENIUL SELECTAT: ${state.activeTrack.toUpperCase()}`;
    els.catalogSelectedDomainTitle.textContent = `Capitole disponibile (${allLessons.filter(l => l.track === state.activeTrack).length})`;

    updateCatalogFilterOptions();
    renderCatalogChapters();
  }

  function updateCatalogFilterOptions() {
    const currentVal = els.catalogLevelFilter ? els.catalogLevelFilter.value : "ALL";
    const track = state.activeTrack || "";

    if (track.includes("Franceză") || track.includes("Spaniolă")) {
      els.catalogLevelFilter.innerHTML = `
        <option value="ALL">Toate Modulele (A1 → C2)</option>
        <option value="1.">Modulul 1: A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)</option>
        <option value="2.">Modulul 2: B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)</option>
        <option value="3.">Modulul 3: C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)</option>
      `;
    } else if (track === "Engleză (A1–A2)") {
      els.catalogLevelFilter.innerHTML = `
        <option value="ALL">Toate Nivelurile</option>
        <option value="1.">Nivel A1 (1 pt Mastery)</option>
        <option value="2.">Nivel A2 (2 pt Mastery)</option>
      `;
    } else if (track === "Engleză (B1–B2)") {
      els.catalogLevelFilter.innerHTML = `
        <option value="ALL">Toate Nivelurile (B1 → B2)</option>
        <option value="1.">Nivel B1 (1 pt Mastery)</option>
        <option value="2.">Nivel B2 (2 pt Mastery)</option>
      `;
    } else if (track === "Engleză (C1–C2)") {
      els.catalogLevelFilter.innerHTML = `
        <option value="ALL">Toate Nivelurile (C1 → C2)</option>
        <option value="1.">Nivel C1 (1 pt Mastery)</option>
        <option value="2.">Nivel C1+ (2 pt Mastery)</option>
        <option value="3.">Nivel C2 (3 pt Mastery)</option>
      `;
    } else {
      els.catalogLevelFilter.innerHTML = `
        <option value="ALL">Toate Nivelurile</option>
        <option value="1.">Nivel 1: Începător (1 pt Mastery)</option>
        <option value="2.">Nivel 2: Junior (2 pt Mastery)</option>
        <option value="3.">Nivel 3: Middle (3 pt Mastery)</option>
        <option value="4.">Nivel 4: Senior (4 pt Mastery)</option>
        <option value="5.">Nivel 5: Arhitect / Exemplar (5 pt Mastery)</option>
      `;
    }

    const optionExists = Array.from(els.catalogLevelFilter.options).some(o => o.value === currentVal);
    els.catalogLevelFilter.value = optionExists ? currentVal : "ALL";
  }

  function sortLessonsCanonical(a, b) {
    const lvlComp = (a.level || "").localeCompare(b.level || "");
    if (lvlComp !== 0) return lvlComp;
    const matchA = a.title ? a.title.match(/Capitolul\s+(\d+)/i) : null;
    const matchB = b.title ? b.title.match(/Capitolul\s+(\d+)/i) : null;
    const numA = matchA ? parseInt(matchA[1], 10) : 999;
    const numB = matchB ? parseInt(matchB[1], 10) : 999;
    if (numA !== numB) return numA - numB;
    return (a.id || "").localeCompare(b.id || "");
  }

  function renderCatalogChapters() {
    const allTrackLessons = allLessons
      .filter(l => l.track === state.activeTrack)
      .sort(sortLessonsCanonical);

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
          <span class="chapter-level-tag">${lesson.level || "Nivel"} • ${mStatus.tier} (${mStatus.current}/${mStatus.max})</span>
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

    // Dual Split Workspace este activat universal în studiul focalizat și răspuns
    if (!state.activeDualPane) state.activeDualPane = "theory";
    document.documentElement.setAttribute("data-dual-pane", state.activeDualPane);
    document.body.setAttribute("data-dual-pane", state.activeDualPane);
    if (els.studyView) els.studyView.setAttribute("data-dual-pane", state.activeDualPane);
    renderDualSplitWorkspace();

    // Resetare sesiune de asistență pentru capitolul curent
    lessonSessionAssisted = false;

    // Indicator temă curentă în navigația de sus
    els.studyTrackIndicator.textContent = lesson.track;

    const mStatus = getLessonMasteryStatus(lesson);

    els.lessonCategoryBadge.textContent = lesson.track;
    els.lessonLevelBadge.textContent = lesson.level || "1. Începător";
    els.lessonStatusBadge.textContent = mStatus.label;

    els.lessonTitle.textContent = formatRomanianTypography(lesson.title);
    els.lessonTheory.innerHTML = formatTheoryContent(lesson.theory, lesson);

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

    els.lessonExample.textContent = lesson.example || lesson.starterCode || "";
    els.lessonXpTag.textContent = `+${lesson.xp || 30} XP`;
    els.lessonPrompt.textContent = formatRomanianTypography(lesson.prompt || lesson.task || "");

    // Resetare casetă scriere
    els.inputZone.classList.remove("state-error", "state-success");
    els.userAnswerInput.value = lesson.starterCode || "";
    els.validationFeedback.textContent = "Citește cerința evidențiată mai sus și tastează răspunsul.";
    els.hintDrawer.classList.add("hidden");
    els.solutionDrawer.classList.add("hidden");
    els.nextLessonBtn.classList.add("hidden");

    els.hintText.textContent = lesson.hint || "Analizează dicționarul de termeni și modelul asemănător de mai sus.";
    els.officialSolutionText.textContent = getLessonOfficialSolution(lesson);
    els.officialSolutionExplanation.textContent = lesson.explanation || lesson.hint || "";

    renderMatchingGame(lesson);
    renderQuizMode(lesson);
    renderAstDebuggerForLesson(lesson);
    updateFlashcardForLesson(lesson);
    updateChameleonAura(null, 1);
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
      btn.className = "match-card neo-plate";
      btn.textContent = pair.left;
      btn.dataset.idx = String(idx);
      btn.addEventListener("click", () => {
        if (matchState.matchedIndices.has(idx)) return;
        matchState.selectedLeftIndex = idx;
        Array.from(els.matchColLeft.children).forEach(c => c.classList.remove("selected", "neo-pressed"));
        btn.classList.add("selected", "neo-pressed");
        playUiSound("click");
      });
      els.matchColLeft.appendChild(btn);
    });

    // Coloana Dreaptă (Amestecată aleatoriu)
    const shuffledRight = pairs
      .map((pair, idx) => ({ text: pair.right, originalIdx: idx }))
      .sort(() => Math.random() - 0.5);

    shuffledRight.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "match-card neo-plate";
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
      btn.className = "quiz-option-btn neo-plate";
      btn.textContent = formatRomanianTypography(optText);
      const isCorrect = idx === qData.correctIndex;

      btn.addEventListener("click", () => {
        playUiSound("click");
        btn.classList.add("neo-pressed");
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

    let isCorrect = Array.isArray(lesson.acceptedAnswers) && lesson.acceptedAnswers.some(
      ans => normalizeInput(ans, lesson.caseSensitive) === normalizedUser
    );

    const pattern = lesson.regexPattern || lesson.expectedOutputPattern;
    if (!isCorrect && pattern) {
      try {
        const flags = lesson.caseSensitive ? "" : "i";
        const re = new RegExp(pattern, flags);
        isCorrect = re.test(rawInput.trim());
      } catch (e) {
        // Fallback
      }
    }

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
      .sort(sortLessonsCanonical);

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

    if (els.activityCalendarGrid) {
      renderCalendarInto(els.activityCalendarGrid);
    }
  }

  // =========================================================================
  // VIEW 4: PAGINĂ COMPLETĂ LIGI & REALIZĂRI (FĂRĂ POP-UP)
  // =========================================================================
  const ACHIEVEMENTS = [
    {
      id: "first_step",
      icon: `<svg class="ui-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
      title: "Primul Pas",
      desc: "Finalizează cu succes prima ta sarcină enciclopedică.",
      isUnlocked: s => Object.values(s.dailyHistory).reduce((a, b) => a + b, 0) >= 1
    },
    {
      id: "streak_fire",
      icon: `<svg class="ui-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
      title: "Flacăra Constanței",
      desc: "Menține un streak activ de minimum 3 zile de studiu consecutiv.",
      isUnlocked: s => s.streak >= 3 || s.longestStreak >= 3
    },
    {
      id: "daily_target",
      icon: `<svg class="ui-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
      title: "Disciplină de Fier",
      desc: "Îndeplinește obiectivul zilnic complet într-o singură zi.",
      isUnlocked: s => (s.dailyHistory[getTodayKey()] || 0) >= getDailyTarget()
    },
    {
      id: "xp_seeker",
      icon: `<svg class="ui-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9"></polygon></svg>`,
      title: "Căutător de Comori",
      desc: "Acumulează cel puțin 250 XP în contul tău enciclopedic.",
      isUnlocked: s => s.xp >= 250
    },
    {
      id: "polymath_master",
      icon: `<svg class="ui-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      title: "Maestru Polimat",
      desc: "Stăpânește și finalizează cel puțin 15 capitole distincte.",
      isUnlocked: s => s.completedLessons.length >= 15
    }
  ];

  function renderLeaguesView() {
    const userXp = state.xp;
    const currentLeague = LEAGUES.slice().reverse().find(l => userXp >= l.minXp) || LEAGUES[0];
    const nextLeague = LEAGUES.find(l => l.minXp > userXp);

    if (els.pageLeagueIcon) els.pageLeagueIcon.innerHTML = currentLeague.icon;
    if (els.pageLeagueTitle) els.pageLeagueTitle.textContent = currentLeague.name;
    if (els.pageLeagueDesc) els.pageLeagueDesc.textContent = currentLeague.desc;

    let progress = 0;
    if (nextLeague) {
      const span = nextLeague.minXp - currentLeague.minXp;
      progress = Math.min(100, Math.max(0, Math.round(((userXp - currentLeague.minXp) / span) * 100)));
      if (els.pageLeagueProgressFill) els.pageLeagueProgressFill.style.width = `${progress}%`;
      if (els.pageLeagueXpStatus) els.pageLeagueXpStatus.textContent = `${userXp} / ${nextLeague.minXp} XP`;
      if (els.pageLeagueNextStatus) els.pageLeagueNextStatus.textContent = `Următorul: ${nextLeague.name} (${nextLeague.minXp} XP)`;
    } else {
      progress = 100;
      if (els.pageLeagueProgressFill) els.pageLeagueProgressFill.style.width = "100%";
      if (els.pageLeagueXpStatus) els.pageLeagueXpStatus.textContent = `${userXp} XP (Rang Maxim)`;
      if (els.pageLeagueNextStatus) els.pageLeagueNextStatus.textContent = "Măiestrie Supremă Atingă";
    }

    // Componente Gamificare Experiment Claude 12
    const level = Math.floor(userXp / 100) + 1;
    if (els.hudLevelBadge) els.hudLevelBadge.textContent = level;
    if (els.textLevel) els.textLevel.textContent = level;
    if (els.xpPercentText) els.xpPercentText.textContent = progress;

    const todayAutonomous = state.dailyHistory[getTodayKey()] || 0;
    if (els.questVal1) els.questVal1.textContent = `${Math.min(3, todayAutonomous)} / 3`;
    if (els.questVal2) els.questVal2.textContent = todayAutonomous > 0 ? "1 / 1 ✓" : "0 / 1";
    if (els.questVal3) els.questVal3.textContent = state.streak > 0 ? `${state.streak} zile 🔥` : "Inactiv";

    // Calendar Lunar Integrat în Hub Gamificare
    if (els.gamificationCalendarGrid) {
      renderCalendarInto(els.gamificationCalendarGrid);
    }

    // Lista tuturor celor 5 ligi
    if (els.pageLeaguesList) {
      els.pageLeaguesList.innerHTML = "";
      LEAGUES.forEach((league, idx) => {
        const isCurrent = league.id === currentLeague.id;
        const isPassed = userXp >= league.maxXp && league.maxXp !== Infinity;
        const tierName = ["Tier I", "Tier II", "Tier III", "Tier IV", "Tier V"][idx] || "Tier";
        const row = document.createElement("div");
        row.className = `league-step league-row ${isCurrent ? "active current-league" : (isPassed ? "completed" : "locked")}`;
        row.innerHTML = `
          <div class="step-marker league-icon" aria-hidden="true">${league.icon}</div>
          <div class="league-info">
            <h4 class="league-name" style="${isCurrent ? "color: #c084fc;" : ""}">
              ${league.name}
              ${isCurrent ? '<span class="league-status-badge">★ Rangul Tău Curent</span>' : (isPassed ? '<span class="league-status-badge" style="background:var(--border-color); color:var(--text-secondary);">✓ Rang Depășit</span>' : '')}
            </h4>
            <div class="league-req" style="font-size:0.75rem; color:var(--text-secondary);">Cerință: ${league.minXp} XP ${league.maxXp !== Infinity ? "– " + league.maxXp + " XP" : "+"}</div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:0.25rem;">${league.desc}</p>
          </div>
          <span class="tier-badge" style="${isCurrent ? "background:rgba(139,92,246,0.25); color:#e9d5ff;" : ""}">${isCurrent ? "Current" : (isPassed ? "✓ Depășit" : tierName)}</span>
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

    renderCurrentFlashcard();
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
  // MOTORUL DE REDESIGN POLYMATH:
  // 1. AETHERIS AMBIENT CHAMELEON AURA
  // 2. SURVIVOR 03 VISUAL RUNTIME AST DEBUGGER
  // 3. LIVE PRACTICE SIMULATION SANDBOX
  // 4. OBSIDIAN 3D FLIP FLASHCARD & POMODORO TIMER
  // =========================================================================

  function updateChameleonAura(colorHexOrRgb, stepNum) {
    const stepColors = {
      1: { o1: "rgba(16, 185, 129, 0.32)", o2: "rgba(6, 182, 212, 0.26)", o3: "rgba(139, 92, 246, 0.2)" }, // Emerald/Cyan
      2: { o1: "rgba(6, 182, 212, 0.34)", o2: "rgba(139, 92, 246, 0.28)", o3: "rgba(59, 130, 246, 0.22)" }, // Cyan/Amethyst
      3: { o1: "rgba(245, 158, 11, 0.32)", o2: "rgba(16, 185, 129, 0.26)", o3: "rgba(249, 115, 22, 0.2)" }, // Amber/Emerald
      4: { o1: "rgba(168, 85, 247, 0.32)", o2: "rgba(236, 72, 153, 0.28)", o3: "rgba(6, 182, 212, 0.2)" }  // Purple/Pink
    };

    const scheme = stepColors[stepNum] || stepColors[1];
    document.documentElement.style.setProperty("--orb-1", scheme.o1);
    document.documentElement.style.setProperty("--orb-2", scheme.o2);
    document.documentElement.style.setProperty("--orb-3", scheme.o3);
  }

  let activeAstLineIndex = 0;
  let astRunInterval = null;

  function generateAstForLesson(lesson) {
    const rawExample = lesson.example || lesson.starterCode || "";
    const lines = rawExample
      .split("\n")
      .map(l => l.trimEnd())
      .filter(l => l.trim().length > 0);

    if (lines.length === 0) {
      return [
        { code: "// Execuție modul " + (lesson.track || "Polimat"), op: "Modulul este inițializat în memorie.", heap: "0 Bytes", blocks: 1, vars: "status: READY" }
      ];
    }

    return lines.map((codeLine, idx) => {
      const trimmed = codeLine.trim();
      let op = "Execută instrucțiunea în registrul procesorului.";
      let heap = `${(idx + 1) * 32} Bytes`;
      let blocks = Math.min(8, Math.max(1, (idx + 1) % 8 + 1));
      let vars = `line_${idx + 1}: OK`;

      if (trimmed.startsWith("//") || trimmed.startsWith("--") || trimmed.startsWith("#")) {
        op = "Directivă sau comentariu semantic de documentare în codul sursă.";
        heap = "0 Bytes (Static)";
        blocks = 0;
        vars = "scope: global";
      } else if (trimmed.includes("SELECT") || trimmed.includes("WHERE") || trimmed.includes("FROM")) {
        op = "Plan de execuție SQL: filtru scanare index și alocare buffer de rezultate.";
        heap = `${(idx + 1) * 64} Bytes (Buffer)`;
        blocks = Math.min(8, idx + 2);
        vars = "query_plan: SCAN_INDEX";
      } else if (trimmed.includes("def ") || trimmed.includes("function") || trimmed.includes("class ")) {
        op = "Declarație de funcție sau clasă: rezervă descriptorul în tabela de simboluri.";
        heap = "128 Bytes (Stack Frame)";
        blocks = 2;
        vars = "symbol: callable";
      } else if (trimmed.includes("return")) {
        op = "Instrucțiune RETURN: transferă valoarea calculată și curăță automat stiva LIFO.";
        heap = "0 Bytes (Curățat RAII)";
        blocks = 0;
        vars = "return_val: OK";
      } else if (trimmed.includes("vector") || trimmed.includes("list") || trimmed.includes("[]") || trimmed.includes("Array")) {
        op = "Alocare container secvențial în memorie continuă Heap cu aliniere la Cache.";
        heap = "512 Bytes (Buffer Heap)";
        blocks = 6;
        vars = "ptr: 0x7ffd98";
      } else if (trimmed.includes("import ") || trimmed.includes("#include")) {
        op = "Legare dinamică și încărcare modul / antete în spațiul de adrese al procesului.";
        heap = "64 Bytes (Metadata)";
        blocks = 1;
        vars = "module: loaded";
      } else if (trimmed.includes("=") && !trimmed.includes("==")) {
        op = "Operație de atribuire: evaluare expresie și scriere în memorie.";
        heap = `${(idx + 1) * 48} Bytes`;
        blocks = Math.min(8, idx + 2);
        vars = "register: assigned";
      }

      return {
        code: codeLine,
        op,
        heap,
        blocks,
        vars
      };
    });
  }

  function renderAstDebuggerForLesson(lesson) {
    const linesContainer = document.getElementById("ast-code-lines");
    if (!linesContainer) return;

    if (astRunInterval) {
      clearInterval(astRunInterval);
      astRunInterval = null;
    }

    const astLines = generateAstForLesson(lesson);
    activeAstLineIndex = 0;

    const extMap = {
      "C & C++": "main.cpp",
      "Python Modern & Data Structures": "model.py",
      "SQL": "query.sql",
      "JavaScript: DOM & Events": "app.js",
      "TypeScript & React": "component.tsx",
      "DevOps & Sisteme Linux": "deploy.sh",
      "Algoritmi & Structuri de Date": "algorithm.cpp"
    };

    const fileNameEl = document.getElementById("ast-filename");
    if (fileNameEl) {
      fileNameEl.textContent = extMap[lesson.track] || `${(lesson.track || "code").toLowerCase().replace(/[^a-z0-9]/g, "_")}.txt`;
    }

    function updateAstDisplay() {
      linesContainer.innerHTML = "";
      astLines.forEach((item, idx) => {
        const isCurrent = idx === activeAstLineIndex;
        const row = document.createElement("div");
        row.className = `ast-code-row ${isCurrent ? "line-active" : ""}`;
        row.innerHTML = `
          <span class="ast-line-num">${idx + 1}</span>
          <span class="ast-line-code">${escapeHtml(item.code)}</span>
          ${isCurrent ? '<span class="ast-line-badge-tag">◄ EXECUTĂ</span>' : ''}
        `;
        row.addEventListener("click", () => {
          activeAstLineIndex = idx;
          playUiSound("click");
          updateAstDisplay();
        });
        linesContainer.appendChild(row);
      });

      const current = astLines[activeAstLineIndex] || astLines[0];
      const badgeText = document.getElementById("ast-badge-text");
      if (badgeText) badgeText.textContent = `LINIA ${activeAstLineIndex + 1} / ${astLines.length}`;

      const currentLineIndicator = document.getElementById("ast-current-line-num");
      if (currentLineIndicator) currentLineIndicator.textContent = `Rândul ${activeAstLineIndex + 1}`;

      const explainEl = document.getElementById("ast-explain");
      if (explainEl && current) explainEl.textContent = current.op;

      const heapEl = document.getElementById("ast-heap-val");
      if (heapEl && current) heapEl.textContent = current.heap;

      const varsEl = document.getElementById("ast-vars-val");
      if (varsEl && current) varsEl.textContent = current.vars;

      const blocksContainer = document.getElementById("ast-memory-blocks");
      if (blocksContainer && current) {
        blocksContainer.innerHTML = "";
        for (let b = 0; b < 8; b++) {
          const cell = document.createElement("div");
          cell.className = `ast-block-cell ${b < current.blocks ? "active-block" : ""}`;
          blocksContainer.appendChild(cell);
        }
      }
    }

    updateAstDisplay();

    const stepBtn = document.getElementById("ast-step-btn");
    if (stepBtn) {
      stepBtn.onclick = () => {
        activeAstLineIndex = (activeAstLineIndex + 1) % astLines.length;
        playUiSound("click");
        updateAstDisplay();
      };
    }

    const runBtn = document.getElementById("ast-run-btn");
    if (runBtn) {
      runBtn.onclick = () => {
        if (astRunInterval) clearInterval(astRunInterval);
        let s = 0;
        astRunInterval = setInterval(() => {
          activeAstLineIndex = s;
          updateAstDisplay();
          playUiSound("pop");
          s++;
          if (s >= astLines.length) {
            clearInterval(astRunInterval);
            astRunInterval = null;
            addXp(30, "Execuție completă AST!");
            playUiSound("success");
          }
        }, 400);
      };
    }

    const resetBtn = document.getElementById("ast-reset-btn");
    if (resetBtn) {
      resetBtn.onclick = () => {
        if (astRunInterval) clearInterval(astRunInterval);
        activeAstLineIndex = 0;
        updateAstDisplay();
        playUiSound("click");
      };
    }
  }

  // Live Practice Simulation Canvas
  let simAnimId = null;
  let simPackets = [];
  let simBurstSparks = [];
  let simDensity = 12;
  let simSpeed = 2.5;

  function initPracticeSimCanvas() {
    const canvas = document.getElementById("practice-sim-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const densitySlider = document.getElementById("sim-density-slider");
    const densityVal = document.getElementById("sim-density-val");
    const speedSlider = document.getElementById("sim-speed-slider");
    const speedVal = document.getElementById("sim-speed-val");
    const burstBtn = document.getElementById("btn-sim-burst");

    if (densitySlider) {
      densitySlider.oninput = e => {
        simDensity = parseInt(e.target.value, 10);
        if (densityVal) densityVal.textContent = simDensity;
        createPackets();
      };
    }

    if (speedSlider) {
      speedSlider.oninput = e => {
        simSpeed = parseFloat(e.target.value);
        if (speedVal) speedVal.textContent = `${simSpeed}x`;
      };
    }

    if (burstBtn) {
      burstBtn.onclick = () => {
        for (let i = 0; i < 35; i++) {
          simBurstSparks.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 8 * (simSpeed / 2),
            vy: (Math.random() - 0.5) * 8 * (simSpeed / 2),
            radius: Math.random() * 3 + 1,
            alpha: 1,
            color: Math.random() > 0.5 ? "#10b981" : "#06b6d4"
          });
        }
        addXp(15, "Burst Memorie generat!");
        playUiSound("success");
      };
    }

    function createPackets() {
      simPackets = [];
      const cw = canvas.width || 600;
      const ch = canvas.height || 150;
      for (let i = 0; i < simDensity; i++) {
        simPackets.push({
          x: Math.random() * cw,
          y: Math.random() * ch,
          vx: (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
          vy: (Math.random() * 0.8 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
          r: Math.random() * 3 + 2,
          color: i % 2 === 0 ? "#10b981" : "#67e8f9"
        });
      }
    }

    createPackets();

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 0.6;
      for (let i = 0; i < simPackets.length; i++) {
        for (let j = i + 1; j < simPackets.length; j++) {
          const dx = simPackets[i].x - simPackets[j].x;
          const dy = simPackets[i].y - simPackets[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.45 * (1 - dist / 90)})`;
            ctx.beginPath();
            ctx.moveTo(simPackets[i].x, simPackets[i].y);
            ctx.lineTo(simPackets[j].x, simPackets[j].y);
            ctx.stroke();
          }
        }
      }

      simPackets.forEach(p => {
        p.x += p.vx * (simSpeed / 2);
        p.y += p.vy * (simSpeed / 2);
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      for (let i = simBurstSparks.length - 1; i >= 0; i--) {
        const s = simBurstSparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.025;
        if (s.alpha <= 0) {
          simBurstSparks.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = s.alpha;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      simAnimId = requestAnimationFrame(draw);
    }

    if (simAnimId) cancelAnimationFrame(simAnimId);
    simAnimId = requestAnimationFrame(draw);
  }

  // =========================================================================
  // SISTEM DE MEMORARE ACTIVĂ: FLASHCARD 3D FEYNMAN
  // =========================================================================
  let flashcardsPool = [];
  let currentFlashcardIndex = 0;
  let activeFlashcardTrack = "ALL";

  function buildFlashcardsPool() {
    const pool = [];
    const seenTerms = new Set();

    // Adunăm termenii din toate lecțiile din curriculum
    allLessons.forEach(lesson => {
      const track = lesson.track || "General";
      if (Array.isArray(lesson.glossary)) {
        lesson.glossary.forEach(g => {
          if (g && g.term && !seenTerms.has(g.term)) {
            seenTerms.add(g.term);
            pool.push({
              q: `Ce reprezintă conceptul „${g.term}”?`,
              a: g.def,
              category: `${track} • ${g.term}`,
              track: track
            });
          }
        });
      }
    });

    // Fallback garantat dacă nu există încă termeni
    if (pool.length === 0) {
      pool.push(
        { q: "Ce garantează principiul RAII în C++?", a: "Durata de viață a resurselor este legată de stivă (LIFO). Constructorul inițializează, iar destructorul eliberează automat memoria la ieșirea din domeniu fără memory leaks.", category: "C++ Determinism RAII", track: "C & C++" },
        { q: "Ce este un Index B-Tree în baze de date?", a: "Structură arborescentă auto-echilibrată care menține datele sortate și permite căutări, acces secvențial, inserări și ștergeri în timp logaritmic O(log N).", category: "SQL & Storage Engine", track: "SQL" },
        { q: "Ce reprezintă un Generator (yield) în Python?", a: "O funcție specială care returnează un iterator și generează valori la cerere (lazy evaluation), consumând memorie O(1) în loc să aloce liste mari în RAM.", category: "Python Memory & Tensors", track: "Python Modern & Data Structures" },
        { q: "Ce este un Container Docker vs o Mașină Virtuală?", a: "Un container partajează kernel-ul sistemului de operare gazdă și izolează procesele prin cgroups și namespaces, fără overhead-ul unui hypervisor sau OS complet.", category: "DevOps & Sisteme Linux", track: "DevOps & Sisteme Linux" }
      );
    }

    return pool;
  }

  function initFlashcardSystem() {
    flashcardsPool = buildFlashcardsPool();
    currentFlashcardIndex = 0;

    const filterSelect = document.getElementById("fc-track-filter");
    if (filterSelect) {
      const tracks = Array.from(new Set(flashcardsPool.map(c => c.track))).sort();
      filterSelect.innerHTML = `<option value="ALL">🌐 Toate Disciplinele (${flashcardsPool.length} Carduri)</option>`;
      tracks.forEach(tr => {
        const count = flashcardsPool.filter(c => c.track === tr).length;
        const opt = document.createElement("option");
        opt.value = tr;
        opt.textContent = `${tr} (${count})`;
        filterSelect.appendChild(opt);
      });

      filterSelect.onchange = e => {
        activeFlashcardTrack = e.target.value;
        currentFlashcardIndex = 0;
        playUiSound("click");
        renderCurrentFlashcard();
      };
    }

    const cardEl = document.getElementById("feynman-card");
    const flipBtn = document.getElementById("btn-flip-card");
    const nextBtn = document.getElementById("btn-next-flashcard");

    function flipCard() {
      if (!cardEl) return;
      cardEl.classList.toggle("flipped");
      playUiSound("pop");
    }

    if (cardEl) {
      cardEl.onclick = e => {
        if (e.target.closest(".fc-grade-btn")) return;
        flipCard();
      };

      cardEl.onkeydown = e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          flipCard();
        }
      };
    }

    if (flipBtn) {
      flipBtn.onclick = () => flipCard();
    }

    if (nextBtn) {
      nextBtn.onclick = () => advanceFlashcard();
    }

    // Butoanele de autoevaluare (Spaced Repetition)
    document.querySelectorAll(".fc-grade-btn").forEach(btn => {
      btn.onclick = e => {
        e.stopPropagation();
        const grade = btn.getAttribute("data-grade");
        let xpGained = 15;
        let msg = "Răspuns evaluat!";
        if (grade === "hard") {
          xpGained = 5;
          msg = "Revizuire marcată (+5 XP)";
        } else if (grade === "good") {
          xpGained = 15;
          msg = "Memorare bună (+15 XP)";
        } else if (grade === "easy") {
          xpGained = 25;
          msg = "Concept stăpânit perfect! (+25 XP)";
          playUiSound("success");
        }
        addXp(xpGained, msg);
        advanceFlashcard();
      };
    });

    renderCurrentFlashcard();
  }

  function getActiveFlashcardList() {
    if (activeFlashcardTrack === "ALL") return flashcardsPool;
    return flashcardsPool.filter(c => c.track === activeFlashcardTrack);
  }

  function advanceFlashcard() {
    const cardEl = document.getElementById("feynman-card");
    if (cardEl) cardEl.classList.remove("flipped");
    playUiSound("click");

    const currentList = getActiveFlashcardList();
    currentFlashcardIndex = (currentFlashcardIndex + 1) % (currentList.length || 1);

    setTimeout(() => {
      renderCurrentFlashcard();
    }, 240);
  }

  function renderCurrentFlashcard() {
    const cardEl = document.getElementById("feynman-card");
    const categoryEl = document.getElementById("fc-category");
    const qEl = document.getElementById("fc-q");
    const aEl = document.getElementById("fc-a");
    const counterBadge = document.getElementById("fc-counter-badge");

    const list = getActiveFlashcardList();
    if (list.length === 0) return;

    const cur = list[currentFlashcardIndex % list.length];
    if (categoryEl) categoryEl.textContent = cur.category || cur.track;
    if (qEl) qEl.textContent = cur.q;
    if (aEl) aEl.textContent = cur.a;
    if (counterBadge) counterBadge.textContent = `Card ${(currentFlashcardIndex % list.length) + 1} / ${list.length}`;
    if (cardEl) cardEl.classList.remove("flipped");
  }

  function updateFlashcardForLesson(lesson) {
    if (!lesson) return;
    const filterSelect = document.getElementById("fc-track-filter");
    if (filterSelect && lesson.track) {
      for (let i = 0; i < filterSelect.options.length; i++) {
        if (filterSelect.options[i].value === lesson.track) {
          filterSelect.selectedIndex = i;
          activeFlashcardTrack = lesson.track;
          currentFlashcardIndex = 0;
          renderCurrentFlashcard();
          break;
        }
      }
    }
  }

  // =========================================================================
  // POMODORO DEEP WORK FOCUS LAB CU RING SVG & PRESETURI
  // =========================================================================
  let pomoMode = "focus"; // "focus", "short", "long"
  let pomoTotalSeconds = 25 * 60;
  let pomoRemainingSeconds = 25 * 60;
  let pomoRunning = false;
  let pomoTimerId = null;
  let pomoSessionCount = 1;

  function initPomodoroTimer() {
    const display = document.getElementById("pomo-display");
    const toggleBtn = document.getElementById("pomo-btn");
    const resetBtn = document.getElementById("btn-pomo-reset");
    const ringEl = document.getElementById("pomo-progress-ring");
    const statusLabel = document.getElementById("pomo-status-label");
    const sessionBadge = document.getElementById("pomo-session-badge");
    const sessionDots = document.getElementById("pomo-session-dots");

    if (!display || !toggleBtn) return;

    function formatTime(s) {
      const mins = Math.floor(s / 60);
      const secs = s % 60;
      return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

    function updateRing() {
      if (!ringEl) return;
      const circumference = 515.22;
      const progress = pomoRemainingSeconds / pomoTotalSeconds;
      const offset = circumference * (1 - progress);
      ringEl.style.strokeDashoffset = offset;

      if (pomoMode === "focus") {
        ringEl.style.stroke = "#10b981";
      } else if (pomoMode === "short") {
        ringEl.style.stroke = "#06b6d4";
      } else {
        ringEl.style.stroke = "#a855f7";
      }
    }

    function updateDisplay() {
      display.textContent = formatTime(pomoRemainingSeconds);
      updateRing();
      if (sessionBadge) sessionBadge.textContent = `Sesiunea ${pomoSessionCount} / 4`;

      if (sessionDots) {
        sessionDots.innerHTML = "";
        for (let i = 1; i <= 4; i++) {
          const dot = document.createElement("span");
          dot.className = `pomo-dot ${i <= pomoSessionCount ? "active" : ""}`;
          dot.textContent = i <= pomoSessionCount ? "🍅" : "⚪";
          sessionDots.appendChild(dot);
        }
      }
    }

    function setMode(mode, minutes) {
      pomoMode = mode;
      pomoTotalSeconds = minutes * 60;
      pomoRemainingSeconds = pomoTotalSeconds;
      pomoRunning = false;
      if (pomoTimerId) clearInterval(pomoTimerId);

      document.querySelectorAll(".pomo-mode-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-mode") === mode);
      });

      if (statusLabel) {
        if (mode === "focus") statusLabel.textContent = "CONCENTRARE";
        else if (mode === "short") statusLabel.textContent = "PAUZĂ SCURTĂ";
        else statusLabel.textContent = "RELAXARE PROFUNDĂ";
      }

      toggleBtn.textContent = "▶️ START FOCUS";
      playUiSound("click");
      updateDisplay();
    }

    document.querySelectorAll(".pomo-mode-btn").forEach(btn => {
      btn.onclick = () => {
        const mode = btn.getAttribute("data-mode");
        const mins = parseInt(btn.getAttribute("data-minutes"), 10) || 25;
        setMode(mode, mins);
      };
    });

    toggleBtn.onclick = () => {
      playUiSound("click");
      if (!pomoRunning) {
        pomoRunning = true;
        toggleBtn.textContent = "⏸️ PAUZĂ FOCUS";
        pomoTimerId = setInterval(() => {
          if (pomoRemainingSeconds > 0) {
            pomoRemainingSeconds--;
            updateDisplay();
          } else {
            clearInterval(pomoTimerId);
            pomoRunning = false;
            playUiSound("success");

            if (pomoMode === "focus") {
              pomoSessionCount++;
              addXp(75, "Sesiune Focus Pomodoro completată!");
              if (pomoSessionCount > 4) {
                pomoSessionCount = 1;
                addXp(150, "Ciclul complet de 4 sesiuni Deep Work finalizat!");
              }
              setMode("short", 5);
            } else {
              addXp(25, "Pauză finalizată! Gata de o nouă sesiune.");
              setMode("focus", 25);
            }
          }
        }, 1000);
      } else {
        pomoRunning = false;
        clearInterval(pomoTimerId);
        toggleBtn.textContent = "▶️ CONTINUĂ";
      }
    };

    if (resetBtn) {
      resetBtn.onclick = () => {
        playUiSound("click");
        if (pomoTimerId) clearInterval(pomoTimerId);
        pomoRunning = false;
        pomoRemainingSeconds = pomoTotalSeconds;
        toggleBtn.textContent = "▶️ START FOCUS";
        updateDisplay();
      };
    }

    updateDisplay();
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
    [els.navCatalogBtn, els.navStudyBtn, els.navActivityBtn, els.navLeaguesBtn].forEach(btn => {
      if (btn) {
        btn.addEventListener("click", () => {
          const view = btn.getAttribute("data-view");
          if (view) switchView(view);
        });
      }
    });



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

    // Filtre Diviziuni Catalog (Informatică vs Limbi Străine)
    document.querySelectorAll(".division-pill-btn").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".division-pill-btn").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        currentDivisionFilter = pill.getAttribute("data-division") || "ALL";
        domainsExpanded = false;
        renderCatalogView();
      });
    });

    // Buton Toggle Afișare / Restrângere Domenii Suplimentare
    if (els.btnToggleDomains) {
      els.btnToggleDomains.addEventListener("click", () => {
        domainsExpanded = !domainsExpanded;
        renderCatalogView();
      });
    }

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
        const solutionToApply = getLessonOfficialSolution(lesson);
        if (els.userAnswerInput) els.userAnswerInput.value = solutionToApply;
        verifyCurrentAnswer();
      });
    }

    // Capitolul Următor
    if (els.nextLessonBtn) {
      els.nextLessonBtn.addEventListener("click", () => {
        const trackLessons = allLessons
          .filter(l => l.track === state.activeTrack)
          .sort(sortLessonsCanonical);
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

    // Comutator Moduri Arhitectură / Layout (5 Arhitecturi Cardinale)
    if (els.layoutSelector) {
      els.layoutSelector.addEventListener("change", e => {
        applyLayoutMode(e.target.value);
        playUiSound("click");
      });
    }

    // Buton Toggle Sunet Sintetizat
    if (els.soundToggleBtn) {
      els.soundToggleBtn.addEventListener("click", toggleSound);
    }

    // Cyber Command Kernel CLI
    if (els.cyberCliRunBtn) {
      els.cyberCliRunBtn.addEventListener("click", executeCyberCli);
    }
    if (els.cyberCliInput) {
      els.cyberCliInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          e.preventDefault();
          executeCyberCli();
        } else if (e.key.length === 1 || e.key === "Backspace") {
          playUiSound("click");
        }
      });
    }

    // Etichete Rapide Cyber CLI
    document.querySelectorAll(".cyber-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const cmd = tag.getAttribute("data-cmd");
        if (els.cyberCliInput && cmd) {
          els.cyberCliInput.value = cmd;
          executeCyberCli();
        }
      });
    });

    // Dual Split Workspace Tabs (Teorie, Exemple, Practică, Exerciții)
    function setActiveDualTab(activeTab, paneName, targetEl) {
      document.querySelectorAll(".dual-nav-tab").forEach(t => t.classList.remove("active"));
      if (activeTab) activeTab.classList.add("active");
      playUiSound("click");

      state.activeDualPane = paneName;
      if (state.layoutMode === "dual-split") {
        document.documentElement.setAttribute("data-dual-pane", paneName);
        document.body.setAttribute("data-dual-pane", paneName);
        if (els.studyView) els.studyView.setAttribute("data-dual-pane", paneName);

        // Glisare animată de sus în jos pe containerul vizibil din dreapta
        const targetContainer = (paneName === "theory" || paneName === "examples")
          ? document.querySelector(".theory-card")
          : els.practiceCard;

        if (targetContainer) {
          targetContainer.classList.remove("dual-pane-animate");
          void targetContainer.offsetWidth; // retrigger reflow
          targetContainer.classList.add("dual-pane-animate");
          targetContainer.scrollTop = 0;
          targetContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        targetEl.style.transition = "box-shadow 0.3s ease";
        targetEl.style.boxShadow = "0 0 25px var(--accent-primary)";
        setTimeout(() => { targetEl.style.boxShadow = ""; }, 1200);
      }
    }

    if (els.dualTabTheory) {
      els.dualTabTheory.addEventListener("click", () => {
        setActiveDualTab(els.dualTabTheory, "theory", els.lessonTheory || document.querySelector(".theory-card"));
        updateChameleonAura(null, 1);
      });
    }
    if (els.dualTabExamples) {
      els.dualTabExamples.addEventListener("click", () => {
        const exampleBox = document.querySelector(".example-box");
        setActiveDualTab(els.dualTabExamples, "examples", exampleBox || els.lessonExample);
        updateChameleonAura(null, 2);
      });
    }
    if (els.dualTabPractice) {
      els.dualTabPractice.addEventListener("click", () => {
        switchPracticeMode("write");
        setActiveDualTab(els.dualTabPractice, "practice", els.paneWrite || els.practiceCard);
        updateChameleonAura(null, 3);
      });
    }
    if (els.dualTabExercises) {
      els.dualTabExercises.addEventListener("click", () => {
        switchPracticeMode("quiz");
        setActiveDualTab(els.dualTabExercises, "exercises", els.paneQuiz || els.practiceCard);
        updateChameleonAura(null, 4);
      });
    }

    if (els.dualPrevBtn) {
      els.dualPrevBtn.addEventListener("click", () => {
        const trackLessons = allLessons.filter(l => l.track === state.activeTrack).sort(sortLessonsCanonical);
        const idx = trackLessons.findIndex(l => l.id === state.activeLessonId);
        if (idx > 0) {
          state.activeLessonId = trackLessons[idx - 1].id;
          saveState();
          renderStudyView();
          playUiSound("click");
        }
      });
    }

    if (els.dualNextBtn) {
      els.dualNextBtn.addEventListener("click", () => {
        const trackLessons = allLessons.filter(l => l.track === state.activeTrack).sort(sortLessonsCanonical);
        const idx = trackLessons.findIndex(l => l.id === state.activeLessonId);
        if (idx !== -1 && idx + 1 < trackLessons.length) {
          state.activeLessonId = trackLessons[idx + 1].id;
          saveState();
          renderStudyView();
          playUiSound("click");
        }
      });
    }

    initPracticeSimCanvas();
    initFlashcardSystem();
    initPomodoroTimer();
  }

  /* ==========================================================================
     INTERACTIVE AMBIENT PARTICLE CONSTELLATION SYSTEM (NEXT.JS CANVAS)
     ========================================================================== */
  function initAmbientParticles() {
    const canvas = document.getElementById("ambient-particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        buildParticles();
      }, 200);
    });

    const mouse = { x: null, y: null, radius: 130 };
    window.addEventListener("mousemove", e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    let particles = [];
    class AmbientParticle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.6 + 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 2.2;
            this.y -= (dy / dist) * force * 2.2;
          }
        }
      }
      draw(themeColor) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = themeColor;
        ctx.fill();
      }
    }

    function buildParticles() {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 16 : Math.min(55, Math.floor((width * height) / 24000));
      for (let i = 0; i < count; i++) {
        particles.push(new AmbientParticle());
      }
    }
    buildParticles();

    let isVisible = true;
    document.addEventListener("visibilitychange", () => {
      isVisible = !document.hidden;
    });

    function renderLoop() {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);
        const style = getComputedStyle(document.documentElement);
        const primaryColor = style.getPropertyValue("--accent-primary").trim() || "#10b981";

        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw(primaryColor);

          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);

            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              const alpha = (1 - dist / 110) * 0.14;
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }
        }
      }
      requestAnimationFrame(renderLoop);
    }
    requestAnimationFrame(renderLoop);
  }

  /* ==========================================================================
     CUSTOM MOMENTUM AIM CURSOR (EDITORIAL & COSMOS)
     ========================================================================== */
  function initAimCursor() {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener("mousemove", e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (els.aimDot) {
        els.aimDot.style.left = `${mouseX}px`;
        els.aimDot.style.top = `${mouseY}px`;
      }
    });

    function loopCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (els.aimCursor) {
        els.aimCursor.style.left = `${ringX}px`;
        els.aimCursor.style.top = `${ringY}px`;
      }
      requestAnimationFrame(loopCursor);
    }
    requestAnimationFrame(loopCursor);
  }

  /* ==========================================================================
     SISTEMUL SOLAR POLIMAT & CITADELA 3D (SURVIVOR 13 ARCHITECTURE) (MOD 5)
     ========================================================================== */
  let cosmosOrbitInitialized = false;
  let cosmosThreeRenderer = null;
  let cosmosThreeCamera = null;

  function initCosmosOrbitCanvas() {
    const canvas = document.getElementById("cosmos-orbit-canvas");
    if (!canvas) return;

    // Pe mobil/telefon (<= 768px) Cosmos este dezactivat pentru viteză maximă și zero consum GPU
    if (window.innerWidth <= 768) {
      return;
    }

    // Butoane Rapide de Telemetrie
    if (els.cosmosTelemetryNodes && els.cosmosTelemetryNodes.children.length === 0) {
      els.cosmosTelemetryNodes.innerHTML = "";
      const tracks = getTracks();
      tracks.forEach(t => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "cosmos-telemetry-chip";
        chip.innerHTML = `<span>⚡ Warp:</span> <strong>${t.name}</strong>`;
        chip.addEventListener("click", () => {
          playUiSound("warp");
          state.activeTrack = t.name;
          saveState();
          renderCatalogView();
          const chaptersSection = document.getElementById("catalog-chapters-section");
          if (chaptersSection) chaptersSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        els.cosmosTelemetryNodes.appendChild(chip);
      });
    }

    if (cosmosOrbitInitialized) {
      if (cosmosThreeRenderer && cosmosThreeCamera) {
        const parent = canvas.parentElement;
        const w = parent ? parent.clientWidth : 800;
        const h = parent ? parent.clientHeight : 600;
        if (w > 0 && h > 0) {
          cosmosThreeCamera.aspect = w / h;
          cosmosThreeCamera.updateProjectionMatrix();
          cosmosThreeRenderer.setSize(w, h);
        }
      }
      return;
    }
    cosmosOrbitInitialized = true;

    // Verificăm disponibilitatea Three.js
    if (typeof THREE === "undefined") {
      initFallback2DCosmos(canvas);
      return;
    }

    try {
      initThreeJSCosmos(canvas);
    } catch (err) {
      console.warn("WebGL Cosmos Init failed, falling back to 2D:", err);
      initFallback2DCosmos(canvas);
    }
  }

  function initThreeJSCosmos(canvas) {
    const parent = canvas.parentElement;
    let width = parent ? parent.clientWidth : 800;
    let height = parent ? parent.clientHeight : 600;
    if (width <= 0) width = 800;
    if (height <= 0) height = 600;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    if (renderer.toneMapping !== undefined) {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
    }
    cosmosThreeRenderer = renderer;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020307, 0.02);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 5, 30);
    cosmosThreeCamera = camera;

    // World Group to hold all 3D entities
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Lighting Rig (Clean Studio Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const topKeyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    topKeyLight.position.set(0, 20, 15);
    scene.add(topKeyLight);

    const cyanRim = new THREE.PointLight(0x00f0ff, 2.2, 50);
    cyanRim.position.set(-15, -4, 10);
    scene.add(cyanRim);

    const magentaRim = new THREE.PointLight(0xd946ef, 2.2, 50);
    magentaRim.position.set(15, -4, 10);
    scene.add(magentaRim);

    const amberFill = new THREE.PointLight(0xf59e0b, 1.8, 40);
    amberFill.position.set(0, -6, 5);
    scene.add(amberFill);

    // 2. High-Tech Ground Floor Grid (Subtle, Clean)
    const floorGrid = new THREE.GridHelper(80, 40, 0x38bdf8, 0x0f172a);
    floorGrid.position.y = -5.5;
    worldGroup.add(floorGrid);

    // 3. Dynamic Texture Generator Helpers
    function createCodeScreenTexture() {
      const c = document.createElement("canvas");
      c.width = 512;
      c.height = 320;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, 512, 320);

      // Terminal Header
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, 512, 28);
      ctx.fillStyle = "#ef4444";
      ctx.beginPath(); ctx.arc(16, 14, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#eab308";
      ctx.beginPath(); ctx.arc(32, 14, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#22c55e";
      ctx.beginPath(); ctx.arc(48, 14, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 11px monospace";
      ctx.fillText("polymath_kernel.rs — 60 FPS", 70, 18);

      // Code Lines
      ctx.font = "bold 15px monospace";
      ctx.fillStyle = "#38bdf8";
      ctx.fillText("// INFORMATICĂ & PROGRAMARE", 20, 58);
      ctx.fillStyle = "#f43f5e";
      ctx.fillText("fn ", 20, 88);
      ctx.fillStyle = "#a855f7";
      ctx.fillText("build_citadel", 48, 88);
      ctx.fillStyle = "#e2e8f0";
      ctx.fillText("() -> Result<Cosmos, Error> {", 160, 88);
      ctx.fillStyle = "#22c55e";
      ctx.fillText("    let mut engine = CoreEngine::init();", 40, 118);
      ctx.fillStyle = "#eab308";
      ctx.fillText("    engine.bind(Python, Cpp, JavaScript);", 40, 148);
      ctx.fillStyle = "#06b6d4";
      ctx.fillText("    engine.deploy_quadrants(15_DOMAINS);", 40, 178);
      ctx.fillStyle = "#38bdf8";
      ctx.fillText("    Ok(engine.ignite_orbit())", 40, 208);
      ctx.fillStyle = "#e2e8f0";
      ctx.fillText("}", 20, 238);

      ctx.fillStyle = "#10b981";
      ctx.font = "bold 13px monospace";
      ctx.fillText("> SATELITE_ORBIT: ACTIVE // 7 DISCIPLINE", 20, 278);
      ctx.fillStyle = "#38bdf8";
      ctx.fillRect(20, 290, 12, 18);

      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    }

    function createKeyboardTexture() {
      const c = document.createElement("canvas");
      c.width = 512;
      c.height = 256;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();
      ctx.fillStyle = "#090d16";
      ctx.fillRect(0, 0, 512, 256);

      ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
      ctx.lineWidth = 2;
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 14; col++) {
          ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
          ctx.strokeRect(20 + col * 34, 18 + row * 40, 30, 30);
          ctx.fillRect(20 + col * 34, 18 + row * 40, 30, 30);
        }
      }
      ctx.fillStyle = "rgba(56, 189, 248, 0.25)";
      ctx.fillRect(150, 218, 210, 26);
      ctx.strokeRect(150, 218, 210, 26);

      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    }

    function createServerTexture() {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 512;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();
      ctx.fillStyle = "#080c14";
      ctx.fillRect(0, 0, 256, 512);

      for (let i = 0; i < 5; i++) {
        const y = 20 + i * 95;
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(15, y, 226, 82);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.strokeRect(15, y, 226, 82);

        // Status LEDs
        ctx.fillStyle = "#22c55e";
        ctx.beginPath(); ctx.arc(35, y + 25, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#fb923c";
        ctx.beginPath(); ctx.arc(55, y + 25, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#06b6d4";
        ctx.beginPath(); ctx.arc(75, y + 25, 6, 0, Math.PI * 2); ctx.fill();

        // Slits
        ctx.fillStyle = "#020617";
        for (let s = 0; s < 10; s++) {
          ctx.fillRect(96 + s * 12, y + 16, 7, 50);
        }
      }

      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    }

    function createBookPageTexture() {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 384;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();
      ctx.fillStyle = "#faf5ea";
      ctx.fillRect(0, 0, 256, 384);

      ctx.strokeStyle = "rgba(168, 85, 247, 0.35)";
      ctx.lineWidth = 3;
      ctx.strokeRect(12, 12, 232, 360);

      ctx.fillStyle = "#701a75";
      ctx.font = "bold 20px serif";
      ctx.textAlign = "center";
      ctx.fillText("POLYMATH", 128, 48);

      ctx.fillStyle = "rgba(51, 65, 85, 0.6)";
      for (let i = 0; i < 14; i++) {
        ctx.fillRect(25, 75 + i * 20, 206, 5);
      }

      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    }

    function createPlanetEmblemTexture(icon, name, color) {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();

      ctx.fillStyle = "#080c16";
      ctx.beginPath();
      ctx.arc(128, 128, 120, 0, Math.PI * 2);
      ctx.fill();

      ctx.lineWidth = 8;
      ctx.strokeStyle = color || "#38bdf8";
      ctx.stroke();

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.beginPath();
      ctx.arc(128, 128, 106, 0, Math.PI * 2);
      ctx.stroke();

      ctx.font = "68px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(icon, 128, 92);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 24px 'Space Grotesk', sans-serif";
      ctx.fillText(name, 128, 178);

      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    }

    const interactiveObjects = [];
    const disciplineNodes = {};
    const majorFigureNodes = [];
    let activeCosmosMode = "overview";
    let isOrbitPaused = false;
    let orbitSpeedMultiplier = 1.0;

    // 4. Figure 1: 💻 CALCULATOR & TERMINAL (Informatică & Programare)
    const itGroup = new THREE.Group();
    itGroup.position.set(-11, 1.2, 0);

    const itBezelGeo = new THREE.BoxGeometry(4.4, 2.8, 0.25);
    const itBezelMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.2 });
    const itBezel = new THREE.Mesh(itBezelGeo, itBezelMat);
    itBezel.position.y = 1.0;
    itGroup.add(itBezel);

    const itScreenGeo = new THREE.PlaneGeometry(4.05, 2.45);
    const itScreenMat = new THREE.MeshBasicMaterial({ map: createCodeScreenTexture() });
    const itScreen = new THREE.Mesh(itScreenGeo, itScreenMat);
    itScreen.position.set(0, 1.0, 0.135);
    itGroup.add(itScreen);

    const itNeckGeo = new THREE.CylinderGeometry(0.18, 0.22, 1.2, 16);
    const itNeckMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9, roughness: 0.1 });
    const itNeck = new THREE.Mesh(itNeckGeo, itNeckMat);
    itNeck.position.y = -0.7;
    itGroup.add(itNeck);

    const itBaseGeo = new THREE.CylinderGeometry(1.4, 1.6, 0.18, 32);
    const itBaseMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.7, roughness: 0.3 });
    const itBase = new THREE.Mesh(itBaseGeo, itBaseMat);
    itBase.position.y = -1.35;
    itGroup.add(itBase);

    const itKbGeo = new THREE.BoxGeometry(3.6, 0.12, 1.6);
    const itKbMat = new THREE.MeshBasicMaterial({ map: createKeyboardTexture() });
    const itKb = new THREE.Mesh(itKbGeo, itKbMat);
    itKb.position.set(0, -1.3, 1.2);
    itKb.rotation.x = 0.15;
    itGroup.add(itKb);

    const itPedGeo = new THREE.RingGeometry(2.2, 2.5, 32);
    const itPedMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.7 });
    const itPed = new THREE.Mesh(itPedGeo, itPedMat);
    itPed.position.y = -1.5;
    itPed.rotation.x = Math.PI / 2;
    itGroup.add(itPed);

    itBezel.userData = {
      id: "it",
      title: "💻 Act I • Informatică & Algoritmi",
      desc: "Calculator 3D: C++, Python, JavaScript, Java, TypeScript, C#, Algoritmi",
      trackName: "Python",
      division: "Informatică și Programare",
      isMajor: true,
      color: "#38bdf8",
      icon: "💻"
    };
    interactiveObjects.push(itBezel);
    worldGroup.add(itGroup);
    disciplineNodes["it"] = { group: itGroup, mesh: itBezel, pos: itGroup.position, cameraTarget: new THREE.Vector3(-11, 1.2, 12) };
    majorFigureNodes.push({ id: "it", group: itGroup, mesh: itBezel, title: "💻 Informatică (7 Cursuri)", color: "#38bdf8" });

    // 5. Figure 2: 🐧 SERVER RACK MAINFRAME (Sisteme Linux & DevOps)
    const osGroup = new THREE.Group();
    osGroup.position.set(-3.8, -1.8, 2.5);

    const osChassisGeo = new THREE.BoxGeometry(2.6, 4.8, 2.4);
    const osChassisMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.85, roughness: 0.25 });
    const osChassis = new THREE.Mesh(osChassisGeo, osChassisMat);
    osGroup.add(osChassis);

    const osFrontGeo = new THREE.PlaneGeometry(2.3, 4.5);
    const osFrontMat = new THREE.MeshBasicMaterial({ map: createServerTexture() });
    const osFront = new THREE.Mesh(osFrontGeo, osFrontMat);
    osFront.position.set(0, 0, 1.21);
    osGroup.add(osFront);

    const osBadgeGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.12, 32);
    const osBadgeMat = new THREE.MeshBasicMaterial({ map: createPlanetEmblemTexture("🐧", "LINUX", "#fb923c") });
    const osBadge = new THREE.Mesh(osBadgeGeo, osBadgeMat);
    osBadge.position.set(0, 3.1, 0);
    osBadge.rotation.x = Math.PI / 2;
    osGroup.add(osBadge);

    const osPedGeo = new THREE.RingGeometry(2.0, 2.3, 32);
    const osPedMat = new THREE.MeshBasicMaterial({ color: 0xfb923c, side: THREE.DoubleSide, transparent: true, opacity: 0.7 });
    const osPed = new THREE.Mesh(osPedGeo, osPedMat);
    osPed.position.y = -2.5;
    osPed.rotation.x = Math.PI / 2;
    osGroup.add(osPed);

    osChassis.userData = {
      id: "os",
      title: "🐧 Act II • Sisteme Linux & DevOps",
      desc: "Server Mainframe 3D: Sisteme Linux, Docker, Shell & Cloud",
      trackName: "DevOps & Sisteme Linux",
      division: "Informatică și Programare",
      isMajor: true,
      color: "#fb923c",
      icon: "🐧"
    };
    interactiveObjects.push(osChassis);
    worldGroup.add(osGroup);
    disciplineNodes["os"] = { group: osGroup, mesh: osChassis, pos: osGroup.position, cameraTarget: new THREE.Vector3(-3.8, -1.8, 14.5) };
    majorFigureNodes.push({ id: "os", group: osGroup, mesh: osChassis, title: "🐧 Sisteme Linux & DevOps", color: "#fb923c" });

    // 6. Figure 3: 🗄️ BAZE DE DATE CYLINDERS (Baze de Date & SQL)
    const dbGroup = new THREE.Group();
    dbGroup.position.set(3.8, -1.8, 2.5);

    const dbCylGeo = new THREE.CylinderGeometry(2.2, 2.2, 0.95, 36);
    const dbCylMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x022c22,
      emissiveIntensity: 0.3
    });
    const c1 = new THREE.Mesh(dbCylGeo, dbCylMat); c1.position.y = 1.35; dbGroup.add(c1);
    const c2 = new THREE.Mesh(dbCylGeo, dbCylMat); c2.position.y = 0.0; dbGroup.add(c2);
    const c3 = new THREE.Mesh(dbCylGeo, dbCylMat); c3.position.y = -1.35; dbGroup.add(c3);

    const dbRingGeo = new THREE.TorusGeometry(2.3, 0.08, 16, 48);
    const dbRingMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const r1 = new THREE.Mesh(dbRingGeo, dbRingMat); r1.position.y = 0.68; r1.rotation.x = Math.PI / 2; dbGroup.add(r1);
    const r2 = new THREE.Mesh(dbRingGeo, dbRingMat); r2.position.y = -0.68; r2.rotation.x = Math.PI / 2; dbGroup.add(r2);

    const dbBadgeGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.12, 32);
    const dbBadgeMat = new THREE.MeshBasicMaterial({ map: createPlanetEmblemTexture("🗄️", "SQL", "#10b981") });
    const dbBadge = new THREE.Mesh(dbBadgeGeo, dbBadgeMat);
    dbBadge.position.set(0, 2.4, 0);
    dbBadge.rotation.x = Math.PI / 2;
    dbGroup.add(dbBadge);

    const dbPedGeo = new THREE.RingGeometry(2.2, 2.5, 32);
    const dbPedMat = new THREE.MeshBasicMaterial({ color: 0x10b981, side: THREE.DoubleSide, transparent: true, opacity: 0.7 });
    const dbPed = new THREE.Mesh(dbPedGeo, dbPedMat);
    dbPed.position.y = -2.0;
    dbPed.rotation.x = Math.PI / 2;
    dbGroup.add(dbPed);

    c2.userData = {
      id: "db",
      title: "🗄️ Act III • Baze de Date & SQL",
      desc: "Storage Pod 3D: Calcul Relațional, SQL, B-Tree & ACID",
      trackName: "Baze de Date & SQL",
      division: "Informatică și Programare",
      isMajor: true,
      color: "#10b981",
      icon: "🗄️"
    };
    interactiveObjects.push(c2);
    worldGroup.add(dbGroup);
    disciplineNodes["db"] = { group: dbGroup, mesh: c2, pos: dbGroup.position, cameraTarget: new THREE.Vector3(3.8, -1.8, 14.5) };
    majorFigureNodes.push({ id: "db", group: dbGroup, mesh: c2, title: "🗄️ Baze de Date & SQL", color: "#10b981" });

    // 7. Figure 4: 🌍 CARTE DESCHISĂ & GLOB (Limbi Străine & Comunicare)
    const langGroup = new THREE.Group();
    langGroup.position.set(11, 1.2, 0);

    const bookSpineGeo = new THREE.BoxGeometry(0.3, 3.4, 2.4);
    const bookSpineMat = new THREE.MeshStandardMaterial({ color: 0x4a044e, metalness: 0.6, roughness: 0.4 });
    const bookSpine = new THREE.Mesh(bookSpineGeo, bookSpineMat);
    bookSpine.position.y = -0.2;
    langGroup.add(bookSpine);

    const bookPageGeo = new THREE.BoxGeometry(2.0, 3.2, 0.12);
    const bookPageMat = new THREE.MeshBasicMaterial({ map: createBookPageTexture() });
    const pageL = new THREE.Mesh(bookPageGeo, bookPageMat);
    pageL.position.set(-1.0, -0.2, 0.3);
    pageL.rotation.y = 0.35;
    langGroup.add(pageL);

    const pageR = new THREE.Mesh(bookPageGeo, bookPageMat);
    pageR.position.set(1.0, -0.2, 0.3);
    pageR.rotation.y = -0.35;
    langGroup.add(pageR);

    const globeGeo = new THREE.SphereGeometry(1.2, 18, 18);
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0xd946ef,
      wireframe: true,
      emissive: 0x86198f,
      emissiveIntensity: 0.7
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    globe.position.set(0, 2.4, 0);
    langGroup.add(globe);

    const gRingGeo = new THREE.TorusGeometry(1.6, 0.04, 16, 48);
    const gRingMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const gRing = new THREE.Mesh(gRingGeo, gRingMat);
    gRing.position.set(0, 2.4, 0);
    gRing.rotation.x = Math.PI / 2.3;
    langGroup.add(gRing);

    const langPedGeo = new THREE.RingGeometry(2.2, 2.5, 32);
    const langPedMat = new THREE.MeshBasicMaterial({ color: 0xd946ef, side: THREE.DoubleSide, transparent: true, opacity: 0.7 });
    const langPed = new THREE.Mesh(langPedGeo, langPedMat);
    langPed.position.y = -2.1;
    langPed.rotation.x = Math.PI / 2;
    langGroup.add(langPed);

    bookSpine.userData = {
      id: "lang",
      title: "🌍 Act IV • Limbi Străine & Comunicare",
      desc: "Codex 3D: 5 Cursuri (Engleză, Franceză, Spaniolă, Germană, Italiană)",
      trackName: "Limba Engleză",
      division: "Limbi Străine & Comunicare",
      isMajor: true,
      color: "#d946ef",
      icon: "🌍"
    };
    interactiveObjects.push(bookSpine);
    worldGroup.add(langGroup);
    disciplineNodes["lang"] = { group: langGroup, mesh: bookSpine, pos: langGroup.position, cameraTarget: new THREE.Vector3(11, 1.2, 12), globe: globe };
    majorFigureNodes.push({ id: "lang", group: langGroup, mesh: bookSpine, title: "🌍 Limbi Străine (5 Cursuri)", color: "#d946ef" });

    // 8. Sistemul Ierarhic de Sateliți Orbitale (Sistem Solar pe Nivelul 2)
    const allSatellites = [];
    function attachSolarSystem(nodeId, satList, orbitRadius, speed) {
      const node = disciplineNodes[nodeId];
      if (!node) return;

      const orbitGroup = new THREE.Group();
      orbitGroup.visible = false;
      orbitGroup.scale.set(0.001, 0.001, 0.001);
      node.group.add(orbitGroup);
      node.orbitGroup = orbitGroup;

      // Inelul de orbită
      const orbitRingGeo = new THREE.TorusGeometry(orbitRadius, 0.03, 8, 80);
      const orbitRingMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
      const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat);
      orbitRing.rotation.x = Math.PI / 2;
      orbitGroup.add(orbitRing);

      const count = satList.length;
      satList.forEach((sat, idx) => {
        const coinGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.16, 32);
        const coinMat = new THREE.MeshBasicMaterial({
          map: createPlanetEmblemTexture(sat.icon, sat.code, sat.color)
        });
        const coinMesh = new THREE.Mesh(coinGeo, coinMat);
        coinMesh.rotation.x = Math.PI / 2;

        coinMesh.userData = {
          id: sat.code,
          title: sat.name,
          desc: `Disciplină activă • ${sat.name}`,
          trackName: sat.name,
          isSatellite: true,
          color: sat.color,
          icon: sat.icon,
          domainId: nodeId
        };
        orbitGroup.add(coinMesh);
        interactiveObjects.push(coinMesh);

        allSatellites.push({
          mesh: coinMesh,
          orbitR: orbitRadius,
          speed: speed,
          offset: (idx * (Math.PI * 2 / count)),
          domainId: nodeId
        });
      });
    }

    // IT Sub-satellites (7)
    attachSolarSystem("it", [
      { name: "C & C++", code: "C++", color: "#38bdf8", icon: "⚡" },
      { name: "Python", code: "Py", color: "#3b82f6", icon: "🐍" },
      { name: "JavaScript", code: "JS", color: "#eab308", icon: "💛" },
      { name: "Java", code: "Java", color: "#f97316", icon: "☕" },
      { name: "TypeScript & React", code: "TS", color: "#60a5fa", icon: "🔷" },
      { name: "C#", code: "C#", color: "#a855f7", icon: "🟣" },
      { name: "Algoritmi & Structuri de Date", code: "Algo", color: "#ec4899", icon: "🌳" }
    ], 6.2, 0.015);

    // Systems Sub-satellite (1)
    attachSolarSystem("os", [
      { name: "DevOps & Sisteme Linux", code: "Linux", color: "#fb923c", icon: "🐧" }
    ], 5.0, 0.02);

    // SQL Sub-satellite (1)
    attachSolarSystem("db", [
      { name: "Baze de Date & SQL", code: "SQL", color: "#10b981", icon: "🗄️" }
    ], 5.0, 0.018);

    // Languages Sub-satellites (5)
    attachSolarSystem("lang", [
      { name: "Limba Engleză", code: "EN", color: "#34d399", icon: "🇬🇧" },
      { name: "Limba Franceză", code: "FR", color: "#6ee7b7", icon: "🇫🇷" },
      { name: "Limba Spaniolă", code: "ES", color: "#a7f3d0", icon: "🇪🇸" },
      { name: "Limba Germană", code: "DE", color: "#fbbf24", icon: "🇩🇪" },
      { name: "Limba Italiană", code: "IT", color: "#f43f5e", icon: "🇮🇹" }
    ], 5.8, 0.014);

    const subSatellites = allSatellites;

    // 7. Strat Plutitor Accesibil pentru Figurile Majore 3D și Sateliți
    activeCosmosMode = "overview"; // "overview" | "solar"
    let activeDomainId = null;

    const labelsLayer = document.getElementById("cosmos-labels-layer");
    if (labelsLayer) labelsLayer.innerHTML = "";
    const majorLabelElements = [];
    const satLabelElements = [];

    majorFigureNodes.forEach(m => {
      if (!labelsLayer) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "major-figure-pill";
      btn.setAttribute("style", `--pill-color: ${m.color || "#38bdf8"}`);
      btn.innerHTML = `<span class="sat-pill-icon">${m.mesh.userData.icon || "💻"}</span><span class="sat-pill-text">${m.title}</span>`;
      btn.addEventListener("click", e => {
        e.stopPropagation();
        playUiSound("warp");
        flyToNode(m.id);
      });
      btn.addEventListener("mouseenter", () => {
        if (hoveredObject) hoveredObject.scale.set(1, 1, 1);
        hoveredObject = m.mesh;
        hoveredObject.scale.set(1.15, 1.15, 1.15);
        hoveredTarget = m.mesh.userData;
        updateHudCard(hoveredTarget);
        playUiSound("quantum");
      });
      btn.addEventListener("mouseleave", () => {
        if (hoveredObject === m.mesh) {
          hoveredObject.scale.set(1, 1, 1);
          hoveredObject = null;
        }
      });
      labelsLayer.appendChild(btn);
      majorLabelElements.push({ element: btn, mesh: m.mesh, id: m.id });
    });

    subSatellites.forEach(s => {
      if (!labelsLayer) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sat-orbit-pill";
      btn.style.display = "none";
      btn.setAttribute("style", `--pill-color: ${s.mesh.userData.color || "#38bdf8"}`);
      btn.innerHTML = `<span class="sat-pill-icon">${s.mesh.userData.icon || "🪐"}</span><span class="sat-pill-text">${s.mesh.userData.title}</span>`;
      btn.addEventListener("click", e => {
        e.stopPropagation();
        playUiSound("warp");
        warpToTrack(s.mesh.userData.trackName);
      });
      btn.addEventListener("mouseenter", () => {
        if (hoveredObject) hoveredObject.scale.set(1, 1, 1);
        hoveredObject = s.mesh;
        hoveredObject.scale.set(1.25, 1.25, 1.25);
        hoveredTarget = s.mesh.userData;
        updateHudCard(hoveredTarget);
        playUiSound("quantum");
      });
      btn.addEventListener("mouseleave", () => {
        if (hoveredObject === s.mesh) {
          hoveredObject.scale.set(1, 1, 1);
          hoveredObject = null;
        }
      });
      labelsLayer.appendChild(btn);
      satLabelElements.push({ element: btn, mesh: s.mesh, domainId: s.domainId });
    });

    // 8. Controale Interactive de Orbită în Antet
    const pauseBtn = document.getElementById("cosmos-pause-btn");
    const speedBtn = document.getElementById("cosmos-speed-btn");
    const resetCamBtn = document.getElementById("cosmos-reset-cam-btn");

    if (pauseBtn) {
      pauseBtn.onclick = () => {
        isOrbitPaused = !isOrbitPaused;
        pauseBtn.textContent = isOrbitPaused ? "▶️ Rulare" : "⏸️ Pauză";
        playUiSound("click");
      };
    }
    if (speedBtn) {
      speedBtn.onclick = () => {
        orbitSpeedMultiplier = (orbitSpeedMultiplier === 1.0) ? 2.0 : 1.0;
        speedBtn.textContent = `⚡ ${orbitSpeedMultiplier}x`;
        playUiSound("click");
      };
    }
    if (resetCamBtn) {
      resetCamBtn.onclick = () => {
        playUiSound("warp");
        flyToNode("ALL");
      };
    }

    // 9. Drag & Orbit Controls with Smooth Lerp
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let targetRot = { x: 0, y: 0 };
    let curRot = { x: 0, y: 0 };
    const mouseNorm = new THREE.Vector2(-9999, -9999);
    const raycaster = new THREE.Raycaster();
    let hoveredObject = null;
    let hoveredTarget = null;

    canvas.addEventListener("mousedown", e => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("mouseup", () => { isDragging = false; });
    window.addEventListener("mousemove", e => {
      const rect = canvas.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      if (relX >= 0 && relX <= rect.width && relY >= 0 && relY <= rect.height) {
        mouseNorm.x = (relX / rect.width) * 2 - 1;
        mouseNorm.y = -(relY / rect.height) * 2 + 1;
      }

      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        targetRot.y += dx * 0.003;
        targetRot.x += dy * 0.003;
        targetRot.x = Math.max(-0.6, Math.min(0.6, targetRot.x));
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    });

    // Touch Support
    canvas.addEventListener("touchstart", e => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });
    window.addEventListener("touchmove", e => {
      if (isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - prevMouse.x;
        const dy = e.touches[0].clientY - prevMouse.y;
        targetRot.y += dx * 0.005;
        targetRot.x += dy * 0.005;
        targetRot.x = Math.max(-0.6, Math.min(0.6, targetRot.x));
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });
    window.addEventListener("touchend", () => { isDragging = false; });

    // Wheel Zoom removed per user request (no camera zoom)

    // Click handler on 3D Canvas
    canvas.addEventListener("click", () => {
      if (hoveredTarget) {
        playUiSound("warp");
        if (hoveredTarget.isMajor) {
          flyToNode(hoveredTarget.id);
        } else if (hoveredTarget.trackName) {
          warpToTrack(hoveredTarget.trackName);
        }
      }
    });

    function flyToNode(id) {
      document.querySelectorAll(".cosmos-jump-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-planet") === id);
      });

      if (id === "ALL") {
        activeCosmosMode = "overview";
        activeDomainId = null;

        Object.keys(disciplineNodes).forEach(k => {
          const node = disciplineNodes[k];
          if (node && node.orbitGroup) {
            if (typeof gsap !== "undefined") {
              gsap.to(node.orbitGroup.scale, {
                x: 0.001, y: 0.001, z: 0.001, duration: 0.6,
                onComplete: () => { node.orbitGroup.visible = false; }
              });
            } else {
              node.orbitGroup.scale.set(0.001, 0.001, 0.001);
              node.orbitGroup.visible = false;
            }
          }
        });

        if (typeof gsap !== "undefined") {
          gsap.to(camera.position, { x: 0, y: 1.5, z: 26, duration: 1.6, ease: "power3.inOut" });
          gsap.to(targetRot, { x: 0, y: 0, duration: 1.2, ease: "power2.out" });
        } else {
          camera.position.set(0, 1.5, 26);
          targetRot.x = targetRot.y = 0;
        }

        if (els.cosmosHudCard) els.cosmosHudCard.style.display = "none";
        return;
      }

      const node = disciplineNodes[id];
      if (node) {
        activeCosmosMode = "solar";
        activeDomainId = id;

        Object.keys(disciplineNodes).forEach(k => {
          const other = disciplineNodes[k];
          if (!other || !other.orbitGroup) return;
          if (k === id) {
            other.orbitGroup.visible = true;
            if (typeof gsap !== "undefined") {
              gsap.to(other.orbitGroup.scale, { x: 1, y: 1, z: 1, duration: 1.0, ease: "back.out(1.4)" });
            } else {
              other.orbitGroup.scale.set(1, 1, 1);
            }
          } else {
            if (typeof gsap !== "undefined") {
              gsap.to(other.orbitGroup.scale, {
                x: 0.001, y: 0.001, z: 0.001, duration: 0.5,
                onComplete: () => { other.orbitGroup.visible = false; }
              });
            } else {
              other.orbitGroup.scale.set(0.001, 0.001, 0.001);
              other.orbitGroup.visible = false;
            }
          }
        });

        if (typeof gsap !== "undefined") {
          gsap.to(camera.position, {
            x: node.cameraTarget.x,
            y: node.cameraTarget.y,
            z: node.cameraTarget.z,
            duration: 1.6,
            ease: "power3.inOut"
          });
          gsap.to(targetRot, { x: 0, y: 0, duration: 1.0 });
        } else {
          camera.position.set(node.cameraTarget.x, node.cameraTarget.y, node.cameraTarget.z);
        }
        updateHudCard(node.mesh.userData);
      }
    }

    function warpToTrack(trackName) {
      state.activeTrack = trackName;
      saveState();
      renderCatalogView();
      const chapters = document.getElementById("catalog-chapters-section");
      if (chapters) chapters.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function updateHudCard(target) {
      if (!els.cosmosHudCard || !target) return;
      els.cosmosHudCard.style.display = "block";
      if (els.hudTargetName) els.hudTargetName.textContent = target.title;
      if (els.hudCardDesc) els.hudCardDesc.textContent = target.desc;

      const quickStats = document.getElementById("hud-quick-stats");
      const statLessons = document.getElementById("hud-stat-lessons");
      const statXp = document.getElementById("hud-stat-xp");
      const chipsRow = document.getElementById("hud-chips-row");

      if (quickStats) quickStats.style.display = "flex";
      if (statLessons) {
        const chaptersCount = allLessons.filter(l => l.track === target.trackName || target.id === "it" || target.id === "lang").length || 32;
        statLessons.textContent = `${chaptersCount} Capitole`;
      }
      if (statXp) statXp.textContent = `+1200 XP`;

      if (chipsRow) {
        chipsRow.innerHTML = "";
        const relatedTracks = getTracks().filter(t => t.division === target.division || t.name === target.trackName).slice(0, 4);
        relatedTracks.forEach(rt => {
          const chip = document.createElement("span");
          chip.className = "hud-mini-chip";
          chip.textContent = rt.name;
          chip.onclick = e => {
            e.stopPropagation();
            warpToTrack(rt.name);
          };
          chipsRow.appendChild(chip);
        });
      }
    }

    // HUD Back & Warp Buttons
    const hudBackBtn = document.getElementById("hud-back-btn");
    if (hudBackBtn) {
      hudBackBtn.onclick = (e) => {
        e.stopPropagation();
        playUiSound("warp");
        flyToNode("ALL");
      };
    }

    // Navigație Comenzi Rapide Solar System (Exact cele 5 Butoane din test)
    document.querySelectorAll(".cosmos-jump-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const planetId = btn.getAttribute("data-planet") || "ALL";
        playUiSound("click");
        flyToNode(planetId);
      });
    });

    // HUD Warp Button
    if (els.hudWarpBtn) {
      els.hudWarpBtn.addEventListener("click", () => {
        const target = (hoveredTarget && hoveredTarget.trackName) || "Python";
        playUiSound("warp");
        warpToTrack(target);
      });
    }

    // Resize Handler
    window.addEventListener("resize", () => {
      if (!canvas || !renderer || !camera) return;
      const p = canvas.parentElement;
      if (!p) return;
      const w = p.clientWidth;
      const h = p.clientHeight;
      if (w <= 0 || h <= 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });

    // 10. Animation Loop
    let time = 0;
    const tempProjVec = new THREE.Vector3();

    function animate(t) {
      if (state.activeView !== "catalog" || window.innerWidth <= 768) {
        requestAnimationFrame(animate);
        return;
      }

      if (!isOrbitPaused) {
        time += 1 * orbitSpeedMultiplier;
      }

      // Smooth Orbit Lerp
      curRot.x += (targetRot.x - curRot.x) * 0.05;
      curRot.y += (targetRot.y - curRot.y) * 0.05;
      worldGroup.rotation.y = curRot.y;
      worldGroup.rotation.x = curRot.x;

      if (!isOrbitPaused) {
        // Floating motion for the 4 3D sculpted figures
        itGroup.rotation.y = Math.sin(time * 0.015) * 0.15;
        itGroup.position.y = Math.sin(time * 0.025) * 0.2;

        osGroup.rotation.y = Math.sin(time * 0.018 + 1) * 0.15;
        osGroup.position.y = Math.sin(time * 0.025 + 1) * 0.2;

        dbGroup.rotation.y += 0.006;
        dbGroup.position.y = Math.sin(time * 0.025 + 2) * 0.2;

        langGroup.position.y = Math.sin(time * 0.025 + 3) * 0.2;
        if (disciplineNodes.lang && disciplineNodes.lang.globe) {
          disciplineNodes.lang.globe.rotation.y += 0.012;
          disciplineNodes.lang.globe.rotation.x += 0.005;
        }

        // Orbit Sub-Satellites for active domain
        if (activeDomainId) {
          subSatellites.forEach(s => {
            if (s.domainId === activeDomainId) {
              const angle = (time * s.speed) + s.offset;
              s.mesh.position.x = Math.cos(angle) * s.orbitR;
              s.mesh.position.z = Math.sin(angle) * s.orbitR;
              s.mesh.position.y = Math.sin(angle * 2) * 0.2;
              s.mesh.rotation.y += 0.01;
            }
          });
        }

        // Drift Floor Grid
        if (typeof floorGrid !== "undefined" && floorGrid) {
          floorGrid.rotation.y = t * 0.00004;
        }
      }

      // Proiectare Etichete Sateliți 3D -> 2D
      const cWidth = canvas.clientWidth || 800;
      const cHeight = canvas.clientHeight || 600;

      if (activeCosmosMode === "overview") {
        satLabelElements.forEach(sl => { sl.element.style.display = "none"; });

        majorLabelElements.forEach(l => {
          l.mesh.getWorldPosition(tempProjVec);
          tempProjVec.y += 2.6;
          tempProjVec.project(camera);

          if (tempProjVec.z < 1) {
            const screenX = (tempProjVec.x * 0.5 + 0.5) * cWidth;
            const screenY = (-(tempProjVec.y * 0.5) + 0.5) * cHeight;

            if (screenX >= 25 && screenX <= cWidth - 25 && screenY >= 25 && screenY <= cHeight - 25) {
              l.element.style.display = "inline-flex";
              l.element.style.left = `${screenX}px`;
              l.element.style.top = `${screenY}px`;
            } else {
              l.element.style.display = "none";
            }
          } else {
            l.element.style.display = "none";
          }
        });
      } else {
        majorLabelElements.forEach(ml => { ml.element.style.display = "none"; });

        satLabelElements.forEach(l => {
          if (l.domainId === activeDomainId) {
            l.mesh.getWorldPosition(tempProjVec);
            tempProjVec.y += 0.85;
            tempProjVec.project(camera);

            if (tempProjVec.z < 1) {
              const screenX = (tempProjVec.x * 0.5 + 0.5) * cWidth;
              const screenY = (-(tempProjVec.y * 0.5) + 0.5) * cHeight;

              if (screenX >= 25 && screenX <= cWidth - 25 && screenY >= 25 && screenY <= cHeight - 25) {
                l.element.style.display = "inline-flex";
                l.element.style.left = `${screenX}px`;
                l.element.style.top = `${screenY}px`;
              } else {
                l.element.style.display = "none";
              }
            } else {
              l.element.style.display = "none";
            }
          } else {
            l.element.style.display = "none";
          }
        });
      }

      // Raycast Hover Detection
      raycaster.setFromCamera(mouseNorm, camera);
      const hits = raycaster.intersectObjects(interactiveObjects);
      let foundHit = null;

      if (hits.length > 0) {
        foundHit = hits[0].object;
        if (hoveredObject !== foundHit) {
          if (hoveredObject) hoveredObject.scale.set(1, 1, 1);
          hoveredObject = foundHit;
          hoveredObject.scale.set(1.18, 1.18, 1.18);
          playUiSound("quantum");
        }
      } else {
        if (hoveredObject) {
          hoveredObject.scale.set(1, 1, 1);
          hoveredObject = null;
        }
      }

      // Update HUD card
      if (foundHit && foundHit.userData) {
        hoveredTarget = foundHit.userData;
        updateHudCard(hoveredTarget);
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  function initFallback2DCosmos(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement;
    let width = (canvas.width = parent ? parent.clientWidth : 800);
    let height = (canvas.height = parent ? parent.clientHeight : 600);

    const SOLAR_SYSTEM = [
      { id: "it", name: "Planeta Informatică & Algoritmi", color: "#06b6d4", radius: 24, orbitRadius: Math.min(width, height) * 0.24, speed: 0.006, desc: "C++, Python, JavaScript, Java, TypeScript, C#, Algoritmi" },
      { id: "os", name: "Planeta Sisteme, Linux & DevOps", color: "#f97316", radius: 22, orbitRadius: Math.min(width, height) * 0.36, speed: 0.004, desc: "Sisteme Linux, Docker, Shell & Cloud" },
      { id: "db", name: "Planeta Baze de Date & Arhitectură", color: "#8b5cf6", radius: 20, orbitRadius: Math.min(width, height) * 0.47, speed: 0.0028, desc: "SQL, Modelare Relațională & ACID" },
      { id: "lang", name: "Planeta Limbi Străine & Comunicare", color: "#10b981", radius: 24, orbitRadius: Math.min(width, height) * 0.58, speed: 0.0018, desc: "Engleză, Franceză, Spaniolă, Germană, Italiană" }
    ];

    let time = 0;
    function draw2D() {
      if (state.activeView !== "catalog") {
        requestAnimationFrame(draw2D);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      time += 1;
      const cx = width / 2;
      const cy = height / 2;

      // Soare
      ctx.beginPath();
      ctx.arc(cx, cy, 32, 0, Math.PI * 2);
      ctx.fillStyle = "#f59e0b";
      ctx.fill();
      ctx.strokeStyle = "#fef08a";
      ctx.lineWidth = 3;
      ctx.stroke();

      SOLAR_SYSTEM.forEach(p => {
        const angle = time * p.speed;
        const px = cx + Math.cos(angle) * p.orbitRadius;
        const py = cy + Math.sin(angle) * (p.orbitRadius * 0.45);

        ctx.beginPath();
        ctx.ellipse(cx, cy, p.orbitRadius, p.orbitRadius * 0.45, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      requestAnimationFrame(draw2D);
    }
    requestAnimationFrame(draw2D);
  }

  /* ==========================================================================
     DUAL SPLIT TOPIC WORKSPACE HELPER (SURVIVOR 12)
     ========================================================================== */
  function renderDualSplitWorkspace() {
    if (!els.dualChapterSelect) return;
    const chapters = allLessons
      .filter(l => l.track === state.activeTrack)
      .sort(sortLessonsCanonical);

    if (els.dualTrackTitle) {
      els.dualTrackTitle.textContent = state.activeTrack || "SQL";
    }

    els.dualChapterSelect.innerHTML = "";
    chapters.forEach((ch, idx) => {
      const opt = document.createElement("option");
      opt.value = ch.id;
      const isMastered = !!state.masteryPoints[ch.id];
      opt.textContent = `${idx + 1}. ${ch.title} ${isMastered ? "★" : ""}`;
      if (ch.id === state.activeLessonId) opt.selected = true;
      els.dualChapterSelect.appendChild(opt);
    });

    els.dualChapterSelect.onchange = e => {
      const newLessonId = e.target.value;
      if (newLessonId) {
        state.activeLessonId = newLessonId;
        saveState();
        renderStudyView();
        playUiSound("click");
      }
    };

    const activePane = state.activeDualPane || "theory";
    document.documentElement.setAttribute("data-dual-pane", activePane);
    document.body.setAttribute("data-dual-pane", activePane);
    if (els.studyView) els.studyView.setAttribute("data-dual-pane", activePane);
    document.querySelectorAll(".dual-nav-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-pane") === activePane);
    });
  }

  /* ==========================================================================
     HELPER: RENDER CALENDAR LUNAR HEATMAP (28 DE ZILE)
     ========================================================================== */
  function renderCalendarInto(gridElement) {
    if (!gridElement) return;
    gridElement.innerHTML = "";
    const today = getTodayKey();
    const dailyTarget = getDailyTarget();

    for (let i = 27; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = toLocalDateKey(d);

      const autonomousCount = state.dailyHistory[key] || 0;
      const assistedCount = state.assistedHistory[key] || 0;

      const cell = document.createElement("div");
      cell.className = "calendar-cell";

      if (autonomousCount >= dailyTarget) {
        cell.classList.add("cell-complete");
        cell.title = `${key}: Obiectiv ${dailyTarget}/${dailyTarget} atins (${autonomousCount} autonome)`;
      } else if (autonomousCount > 0) {
        cell.classList.add("cell-streak");
        cell.title = `${key}: Seria continuată (${autonomousCount} sarcini)`;
      } else if (assistedCount > 0) {
        cell.classList.add("cell-assisted");
        cell.title = `${key}: Asistat 50/50 (${assistedCount} sarcini)`;
      } else {
        cell.title = `${key}: Fără activitate`;
      }

      if (key === today) cell.classList.add("today-cell");
      cell.textContent = d.getDate();

      gridElement.appendChild(cell);
    }
  }

  /* ==========================================================================
     CYBER COMMAND KERNEL EXECUTION ENGINE (MOD 4)
     ========================================================================== */
  function executeCyberCli() {
    if (!els.cyberCliInput) return;
    const cmd = els.cyberCliInput.value.trim().toLowerCase();
    els.cyberCliInput.value = "";
    if (!cmd) return;

    playUiSound("warp");
    const out = els.cyberTerminalOutput;

    function log(msg, colorClass = "") {
      if (!out) return;
      const p = document.createElement("p");
      p.className = `cyber-log-line ${colorClass}`;
      p.textContent = msg;
      out.appendChild(p);
      out.scrollTop = out.scrollHeight;
    }

    log(`$ ${cmd}`, "text-cyan");

    if (cmd === "help") {
      log("> COMENZI DISPONIBILE:");
      log("> run <cpp | python | sql | js | java | linux | algo | fr | es>");
      log("> stats       -> Afișează telemetrie XP, streak și capitole rezolvate");
      log("> sound       -> Comută efectele sonore sintetizate (on/off)");
      log("> solve       -> Activează soluția asistată 50/50");
      log("> clear       -> Curăță ecranul terminalului");
    } else if (cmd === "clear") {
      if (out) out.innerHTML = `<p class="cyber-log-line text-cyan">&gt; Consola curățată.</p>`;
    } else if (cmd === "stats") {
      const today = getTodayKey();
      const done = state.dailyHistory[today] || 0;
      log(`> SYS.STATS: XP=${state.xp} | STREAK=${state.streak} zile | AZI=${done}/3 | MASTER=${Object.keys(state.masteryPoints).length} capitole`);
    } else if (cmd === "sound") {
      toggleSound();
      log(`> AUDIO: Stare comutată la ${state.soundEnabled ? "ACTIVAT" : "DEZACTIVAT"}.`, "text-cyan");
    } else if (cmd.startsWith("run ") || cmd.startsWith("start ")) {
      const query = cmd.replace(/^(run|start)\s+/, "").trim();
      const tracks = getTracks();
      const matched = tracks.find(t => {
        const tn = t.name.toLowerCase();
        return tn.includes(query) ||
          (query === "cpp" && tn.includes("c++")) ||
          (query === "c++" && tn.includes("c & c++")) ||
          (query === "js" && tn.includes("javascript")) ||
          (query === "fr" && tn.includes("franceză")) ||
          (query === "es" && tn.includes("spaniolă")) ||
          (query === "py" && tn.includes("python"));
      });

      if (matched) {
        state.activeTrack = matched.name;
        saveState();
        renderCatalogView();
        log(`> EXECUȚIE: Salt la disciplina ${matched.name}...`, "text-cyan");
        const chaptersSection = document.getElementById("catalog-chapters-section");
        if (chaptersSection) chaptersSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        log(`> EROARE: Disciplina "${query}" nu a fost găsită. Tastează 'help'.`);
      }
    } else {
      log(`> Comandă necunoscută: "${cmd}". Tastează 'help' pentru instrucțiuni.`);
    }
  }

  function renderAll() {
    applyTheme(state.theme);
    applyLayoutMode(state.layoutMode || "bento-nextjs");
    if (els.soundToggleIcon) {
      els.soundToggleIcon.textContent = state.is3DActive !== false ? "🧊 3D" : "📄 Simplu";
    }
    renderStats();
    switchView(state.activeView || "catalog");
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    renderAll();
    initAmbientParticles();
    initAimCursor();
  });
})();