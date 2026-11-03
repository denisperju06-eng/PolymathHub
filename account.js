(function () {
  "use strict";
  const $ = id => document.getElementById(id);
  const account = { user: null, configured: false, ready: false, revision: null, sync: "", loading: false, dirty: false, saving: null, timer: null, authenticating: false };
  window.PolymathAccount = account;
  const text = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const accountIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
  async function api(path, options = {}) {
    const response = await fetch(path, { ...options, credentials: "same-origin", cache: "no-store", headers: { "Content-Type": "application/json", ...options.headers }, signal: AbortSignal.timeout(12000) });
    let data; try { data = await response.json(); } catch { data = {}; }
    if (!response.ok) { const error = new Error(data.error || "Serviciul nu este disponibil momentan."); error.status = response.status; throw error; }
    return data;
  }
  function snapshot() {
    const course = structuredClone(window.PolymathApp.snapshot().state);
    delete course.user; delete course.customLessons;
    return { course, vocabulary: window.PolymathStudio.vocabularySnapshot(), revision: account.revision };
  }
  function stored(key, fallback) { try { return JSON.parse(localStorage.getItem(key) || "null") || fallback; } catch { return fallback; } }
  function emptyVocabulary() { return { saved: [], learned: [], cache: [] }; }
  function renderControl() {
    const control = $("account-control"); control.hidden = !account.configured;
    if (!account.configured) return;
    control.innerHTML = `<button type="button" class="account-button" data-open-account>${accountIcon}<span>${account.user ? "Contul meu" : "Intră în cont"}</span></button>`;
    if ($("account-sync")) $("account-sync").textContent = account.sync;
  }
  async function applyUser(user) {
    account.loading = true;
    clearTimeout(account.timer);
    if (account.saving) await account.saving;
    account.ready = false;
    account.user = user;
    account.dirty = false;
    try {
      const result = await api("/api/progress", { headers: { "X-Polymath-Account": user.id } });
      const progress = result.progress;
      account.revision = progress?.revision ?? null;
      window.PolymathStudio.replaceVocabulary(progress?.vocabulary || emptyVocabulary());
      window.PolymathApp.replaceProgress(progress?.course || null, user.id);
      account.ready = true; account.sync = progress ? "Progresul contului este actualizat." : "Cont conectat. Progresul se va salva automat.";
    } catch {
      window.PolymathStudio.replaceVocabulary(stored("polymath_vocabulary_v1:" + user.id, emptyVocabulary()));
      window.PolymathApp.replaceProgress(stored("polymath_edtech_state_v2:" + user.id, null), user.id);
      account.sync = "Sincronizarea nu este disponibilă. Încearcă să reîncarci progresul contului.";
    } finally { account.loading = false; renderControl(); }
  }
  function flush() {
    if (account.saving) return account.saving;
    if (!account.ready || !account.user || !account.dirty) return;
    account.dirty = false;
    account.sync = "Se salvează progresul…";
    renderControl();
    const headers = { "X-Polymath-Account": account.user.id };
    account.saving = api("/api/progress", { method: "PUT", headers, body: JSON.stringify(snapshot()) })
      .then(result => {
        account.revision = result.revision;
        account.sync = "Progres salvat în cont.";
      })
      .catch(error => {
        account.sync = error.message;
        account.dirty = true;
        account.ready = false;
        window.PolymathApp.toast(error.status === 412 ? error.message
          : error.status === 409 ? "Progres actualizat în altă sesiune. Deschide Contul meu pentru reîncărcare."
          : "Progresul contului nu s-a putut sincroniza. Verifică din Contul meu.");
      })
      .finally(() => {
        account.saving = null;
        renderControl();
        if (account.ready && account.dirty) queueSave();
      });
    return account.saving;
  }
  function queueSave() { if (!account.user || !account.ready || account.loading) return; account.dirty = true; clearTimeout(account.timer); account.timer = setTimeout(flush, 900); }
  function dialog() {
    if (!$("account-dialog")) { const element = document.createElement("dialog"); element.id = "account-dialog"; element.className = "auth-dialog"; element.setAttribute("aria-labelledby", "auth-title"); document.body.appendChild(element); }
    return $("account-dialog");
  }
  function open(mode = "login") {
    if (account.loading || account.authenticating) return;
    const element = dialog();
    if (account.user) {
      element.innerHTML = `<button type="button" class="dialog-close" data-close-account aria-label="Închide contul">×</button><span class="eyebrow">POLYMATHHUB</span><h2 id="auth-title">Contul meu</h2><p class="auth-intro">Lecțiile și cuvintele tale, în același cont.</p><div class="account-summary"><strong>${text(account.user.name)}</strong><span>${text(account.user.email)}</span></div><p id="account-sync" class="account-sync" role="status">${text(account.sync)}</p><button class="studio-secondary" type="button" data-reload-account>Reîncarcă progresul din cont</button><p class="auth-note">Reîncărcarea preia ultima versiune salvată în cont și înlocuiește modificările care nu s-au sincronizat.</p><button type="button" class="studio-primary" data-logout-account style="margin-top:18px;width:100%">Ieși din cont</button><div id="auth-feedback" role="status"></div>`;
    } else {
      const register = mode === "register";
      element.innerHTML = `<button type="button" class="dialog-close" data-close-account aria-label="Închide autentificarea">×</button><span class="eyebrow">POLYMATHHUB</span><h2 id="auth-title">${register ? "Creează un cont" : "Conectează-te"}</h2><p class="auth-intro">Salvează progresul și revino la el de pe alt dispozitiv.</p><form id="auth-form" class="auth-form" data-mode="${mode}"><label>Email<input type="email" name="email" autocomplete="username" maxlength="254" required></label><label>Parolă<input type="password" name="password" autocomplete="${register ? "new-password" : "current-password"}" minlength="10" maxlength="128" required></label><button class="studio-primary" type="submit">${register ? "Creează contul" : "Conectează-te"}</button></form><div id="auth-feedback" role="status" aria-live="polite"></div><p class="auth-switch">${register ? 'Ai deja cont? <button type="button" data-auth-mode="login">Conectează-te</button>' : 'Nu ai cont? <button type="button" data-auth-mode="register">Creează unul</button>'}</p>${register ? '<p class="auth-note">Folosește un email în format valid ca identificator și o parolă de minimum 10 caractere. Nu trebuie să ai acces la căsuța poștală.</p>' : ""}`;
    }
    if (!element.open) element.showModal();
    element.querySelector("input")?.focus();
  }
  document.addEventListener("submit", async event => {
    if (event.target.id !== "auth-form") return;
    event.preventDefault(); const form = event.target; const values = new FormData(form); const mode = form.dataset.mode;
    if (account.authenticating || account.loading || account.user) return;
    account.authenticating = true;
    const submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;
    $("auth-feedback").textContent = "Se verifică datele…";
    try {
      const data = await api("/api/account?action=" + mode, { method: "POST", body: JSON.stringify({ email: values.get("email"), password: values.get("password") }) });
      form.reset(); await applyUser(data.user);
      $("account-dialog").close(); window.PolymathApp.toast(mode === "register" ? "Cont creat. Bine ai venit!" : "Te-ai conectat la cont.");
    } catch (error) { $("auth-feedback").innerHTML = `<p class="feedback-error">${text(error.message || "Conectarea nu a reușit. Încearcă din nou.")}</p>`; }
    finally { account.authenticating = false; submit.disabled = false; }
  });
  document.addEventListener("click", async event => {
    const button = event.target.closest("button"); if (!button) return;
    if (button.hasAttribute("data-open-account")) open();
    else if (button.hasAttribute("data-close-account")) $("account-dialog").close();
    else if (button.dataset.authMode) open(button.dataset.authMode);
    else if (button.hasAttribute("data-reload-account") && account.user && !account.loading && !account.authenticating) {
      button.disabled = true;
      await applyUser(account.user);
      button.disabled = false;
    }
    else if (button.hasAttribute("data-logout-account") && account.user && !account.loading && !account.authenticating) {
      account.authenticating = true;
      button.disabled = true;
      try {
        await flush();
        if (account.dirty && account.ready) await flush();
        await api("/api/account?action=logout", {
          method: "POST", headers: { "X-Polymath-Account": account.user.id }, body: "{}"
        });
        clearTimeout(account.timer); account.user = null; account.ready = false; account.loading = true;
        window.PolymathStudio.replaceVocabulary(stored("polymath_vocabulary_v1", emptyVocabulary()));
        window.PolymathApp.replaceProgress(window.PolymathApp.guestProgress(), null);
        account.loading = false; renderControl(); $("account-dialog").close(); window.PolymathApp.toast("Ai ieșit din cont.");
      } catch (error) { $("auth-feedback").textContent = error.message; button.disabled = false; }
      finally { account.authenticating = false; }
    }
  });
  window.addEventListener("polymath:progress", queueSave);
  document.addEventListener("visibilitychange", () => { if (document.hidden && account.ready && account.dirty) flush(); });
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const config = await api("/api/account?action=config"); account.configured = config.configured;
      if (!account.configured) return;
      const result = await api("/api/account?action=session"); if (result.user) await applyUser(result.user);
    } catch { /* The public learning experience remains usable without accounts. */ }
    finally { renderControl(); }
  });
})();
