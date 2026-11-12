(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const P = window.SqlProgress, L = window.LanguagePractice;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const icon = (name, size = 'icon') => `<img class="${size}" src="assets/icons/${name}.svg" alt="" aria-hidden="true">`;
  const key = user => 'pm_learning_workspace_v1' + (user ? ':' + user : '');
  function stored(name) { try { return JSON.parse(localStorage.getItem(name) || 'null'); } catch { return null; } }
  function cleanWorkspace(raw, user = null) {
    return {
      sql: P.clean(raw?.sqlPractice),
      french: L.clean(raw?.languagePractice),
      area: raw?.activeTrack === 'Franceză' ? 'fr' : 'sql',
      stage: ['teorie','exemple','practica'].includes(raw?.activeDualPane) ? raw.activeDualPane : 'teorie'
    };
  }
  let owner = null, state = cleanWorkspace(stored(key(null)) || {sqlPractice:stored('pm_sql_practice_v1')}), course = null;
  let generation = 0, filter = 'pending', drafts = new Map(), toastTimer;
  let languageDraft = null;
  const dialogue = [
    {fr:"Bonjour ! Je voudrais acheter des pommes, s’il vous plaît.",ro:'Bună ziua! Aș dori să cumpăr niște mere, vă rog.'},
    {fr:'Bien sûr ! Combien en voulez-vous ?',ro:'Desigur! Câte doriți?'},
    {fr:"Un kilo, s’il vous plaît. C’est combien ?",ro:'Un kilogram, vă rog. Cât costă?'},
    {fr:'Deux euros cinquante.',ro:'Doi euro și cincizeci de cenți.'}
  ];
  window.PolymathSqlCourse = true;
  function totals() {
    const sql = P.summary(state.sql), fr = L.summary(state.french);
    return {...sql, xp:sql.xp + fr.xp, toReview:sql.toReview + fr.toReview, resolved:sql.resolved + fr.resolved, french:fr};
  }
  function snapshot() {
    return {sqlPractice:P.clean(state.sql), languagePractice:L.clean(state.french),
      activeTrack:state.area === 'fr' ? 'Franceză' : 'SQL', activeDualPane:state.stage,
      xp:totals().xp, completedLessons:[...(course?.lessons || []).filter(l=>l.exercises.every(id=>state.sql.records[id]?.passed)).map(l=>l.id),...(state.french.completed?['fr-market']:[])]};
  }
  function toast(message) {
    $('sql-toast').textContent = message; $('sql-toast').hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(()=>$('sql-toast').hidden = true, 4500);
  }
  function persist() {
    try { localStorage.setItem(key(owner), JSON.stringify(snapshot())); }
    catch { toast('Stocarea locală nu este disponibilă. Conectează-te pentru sincronizare.'); }
    window.dispatchEvent(new Event('polymath:progress'));
    updateStatus();
  }
  window.PolymathApp = {
    snapshot:()=>({state:snapshot()}),
    replaceProgress(raw, user) {
      generation++; owner = user; state = cleanWorkspace(raw, user); drafts.clear(); languageDraft = null;
      try { localStorage.setItem(key(owner), JSON.stringify(snapshot())); } catch {}
      render();
    },
    guestProgress:()=>stored(key(null)) || {sqlPractice:P.clean(stored('pm_sql_practice_v1'))},
    accountProgress:user=>stored(key(user)) || {sqlPractice:P.clean(stored('pm_sql_practice_v1:'+user))}, toast
  };
  window.PolymathStudio = {vocabularySnapshot:()=>({saved:[],learned:[],cache:[]}),replaceVocabulary:()=>{}};
  function accountNote() {
    const a = window.PolymathAccount;
    return a?.user ? (a.sync || 'Progresul se salvează în cont.') : 'Progres salvat în acest browser. Conectează-te pentru a continua și pe alt dispozitiv.';
  }
  function updateStatus() {
    for (const item of document.querySelectorAll('[data-review-count]')) item.textContent = totals().toReview;
    for (const item of document.querySelectorAll('[data-save-status]')) item.textContent = accountNote();
    for (const item of document.querySelectorAll('[data-sql-lesson]')) {
      const lesson = course?.lessons.find(l=>l.id===item.dataset.sqlLesson);
      if(!lesson)continue;
      const done = lesson.exercises.every(id=>state.sql.records[id]?.passed);
      item.classList.toggle('done',done);
      item.querySelector('.step-dot').innerHTML=done?icon('check','icon-small'):String(course.lessons.indexOf(lesson)+1);
    }
    for (const item of document.querySelectorAll('[data-lesson-count]')) {
      const lesson = [...(course?.lessons||[]),course?.project].find(l=>l?.id===item.dataset.lessonCount);
      if(lesson)item.textContent=lesson.exercises.filter(id=>state.sql.records[id]?.passed).length+'/'+lesson.exercises.length+' exerciții rezolvate în această lecție';
    }
    const greeting = $('user-greeting');
    if (greeting) greeting.textContent = window.PolymathAccount?.user?.name ? 'Bun venit, ' + window.PolymathAccount.user.name + '.' : 'Bun venit. Cu ce continuăm?';
  }
  window.addEventListener('polymath:account', updateStatus);
  const sqlLink = (id, stage = 'practica', variant = 0) => '#lectie?' + new URLSearchParams({ex:id, etapa:stage, ...(variant===1?{date:'1'}:{})});
  const frLink = (stage = 'practica') => '#limba?etapa=' + stage;
  const exercise = id => course.exercises.find(item=>item.id === id);
  const lessonFor = ex => course.lessons.find(l=>l.id === ex.lesson) || course.project;
  function dataTable(columns, rows, caption, emphasized = []) {
    return `<div class="table-scroll"><table class="data-table">${caption?`<caption>${esc(caption)}</caption>`:''}<thead><tr>${columns.map((c,i)=>`<th scope="col"${emphasized.includes(i)?' class="emphasis"':''}>${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.length ? rows.map(row=>`<tr>${row.map((value,i)=>`<td${emphasized.includes(i)?' class="emphasis"':''}>${value===null?'<span class="null">NULL</span>':esc(value)}</td>`).join('')}</tr>`).join('') : `<tr><td colspan="${columns.length}">Niciun rând.</td></tr>`}</tbody></table></div>`;
  }
  const saveNote = () => `<p class="save-note" data-save-status>${esc(accountNote())}</p>`;
  function home() {
    const sql = P.summary(state.sql), fr = L.summary(state.french);
    const current = exercise(P.resume(state.sql));
    const lesson = lessonFor(current), french = state.area === 'fr';
    const progress = french ? fr.correct / 3 : sql.completed / 15;
    const destination = french ? frLink(state.stage) : sqlLink(current.id, state.stage);
    return `<div class="home"><p class="home-greeting"><strong id="user-greeting"></strong></p>
      <section aria-labelledby="resume-title"><h2 id="resume-title" class="section-label">Continuă unde ai rămas</h2>
      <div class="resume-entry"><span class="resume-icon">${icon(french?'translate':'code')}</span><div class="resume-copy"><div class="meta">${french?'Franceză · Conversație':'SQL · Lecția '+(course.lessons.indexOf(lesson)+1 || 'finală')}</div><h1>${esc(french?'Au marché — La piață':lesson.title)}</h1><div class="progress-track" role="progressbar" aria-label="Progresul cursului" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress*100)}"><span style="width:${Math.round(progress*100)}%"></span></div><small>${french?fr.correct+'/3 răspunsuri corecte':sql.completed+'/15 exerciții rezolvate'}</small></div><a class="primary" href="${destination}">Continuă ${icon('arrow-right','icon-small')}</a></div></section>
      <section class="explore-section" aria-labelledby="explore-title"><h2 id="explore-title" class="section-label">Explorează</h2><div class="domain-doors">
      <a class="domain-door" href="#cursuri?domeniu=programare">${icon('code','domain-symbol')}<span class="section-label">De la prima linie de cod</span><h2>Programare</h2><p>SQL, de la prima interogare la un proiect al tău.</p><span class="door-arrow">${icon('arrow-right')}</span></a>
      <a class="domain-door language" href="#cursuri?domeniu=limbi">${icon('translate','domain-symbol')}<span class="section-label">Cu româna ca punct de pornire</span><h2>Limbi străine</h2><p>Franceză în context. Ascultă, înțelege și răspunde.</p><span class="door-arrow">${icon('arrow-right')}</span></a></div></section>
      <section class="word-row" aria-label="Expresia de azi"><h2 class="section-label">O expresie de luat cu tine</h2><span class="word-expression" lang="fr">s’il vous plaît</span><span class="translation">vă rog</span><a class="text-button" href="${frLink('exemple')}">Ascultă și exersează ${icon('arrow-right','icon-small')}</a></section>
      </div>`;
  }
  function courseRow(lesson, index) {
    const done = lesson.exercises.filter(id=>state.sql.records[id]?.passed).length;
    const ex = lesson.exercises.find(id=>!state.sql.records[id]?.passed) || lesson.exercises[0];
    return `<a class="course-row" href="${sqlLink(ex,'teorie')}"><span class="row-number">${String(index+1).padStart(2,'0')}</span><span class="row-copy"><h3>${esc(lesson.title)}</h3><p>${esc(lesson.description)}</p></span><span class="row-status">${done}/2 rezolvate</span>${icon('arrow-right')}</a>`;
  }
  function catalog(domain) {
    const showSQL = domain !== 'limbi', showFR = domain !== 'programare';
    return `<div class="catalog"><p class="section-label">Alege următorul pas</p><h1>Cursurile tale</h1><p class="page-intro">Începe cu o idee, înțelege-o și pune-o în practică. Poți reveni oricând.</p>
      ${showSQL?`<section><div class="catalog-heading">${icon('code')}<h2>SQL de la zero</h2></div>${course.lessons.map(courseRow).join('')}<div class="project-intro"><h2>Un magazin. Trei rapoarte.</h2><p class="page-intro">Proiectul final leagă filtrarea, relațiile dintre tabele și totalurile.</p><a class="secondary" href="#proiect">Deschide proiectul · ${P.summary(state.sql).projectDone}/3 ${icon('arrow-right','icon-small')}</a></div></section>`:''}
      ${showFR?`<section><div class="catalog-heading">${icon('translate')}<h2>Franceză, în context</h2></div><a class="course-row" href="${frLink('teorie')}"><span class="row-number">01</span><span class="row-copy"><h3>Au marché — La piață</h3><p>O conversație, pronunție și trei propoziții de completat.</p></span><span class="row-status">${L.summary(state.french).correct}/3 corecte</span>${icon('arrow-right')}</a></section>`:''}${saveNote()}</div>`;
  }
  function project() {
    const summary = P.summary(state.sql);
    return `<div class="catalog"><p class="section-label">Proiect practic · SQL</p><h1>Analizează comenzile unui magazin.</h1><p class="page-intro">Trei întrebări pentru datele magazinului. Le poți încerca oricând și poți reveni la lecții când ai nevoie.</p><p class="muted">${summary.projectDone}/3 cerințe îndeplinite</p>${course.project.exercises.map((id,index)=>{const ex=exercise(id);return `<a class="course-row" href="${sqlLink(id)}"><span class="row-number">${index+1}</span><span class="row-copy"><h3>${esc(ex.title.replace(/^\d\.\s*/,''))}</h3><p>${esc(ex.prompt)}</p></span><span class="row-status">${state.sql.records[id]?.passed?'Rezolvat':'Începe'}</span>${icon('arrow-right')}</a>`;}).join('')}${saveNote()}</div>`;
  }
  function review() {
    const sqlRows = Object.entries(state.sql.records).filter(([,r])=>filter==='pending'?r.needsReview:r.hadMistake&&!r.needsReview&&r.passed);
    const fr = state.french;
    const includeFR = filter==='pending'?fr.needsReview:fr.hadMistake&&!fr.needsReview&&fr.passed;
    const items = sqlRows.map(([id,r])=>`<article class="review-item"><div class="review-meta"><span>SQL · ${r.needsReview?'De repetat':'Rezolvat ulterior'}</span><span>${r.attempts} încercări</span></div><h2>${esc(exercise(id)?.title||id)}</h2><pre class="review-query">${esc(r.lastQuery)}</pre><p class="last-feedback">${esc(r.lastFeedback)}</p><div class="actions"><a class="primary" href="${sqlLink(id,'practica',r.variant)}">Reia încercarea</a><a class="text-button" href="${sqlLink(id,'practica',1-r.variant)}">Încearcă alte date ${icon('arrow-right','icon-small')}</a></div></article>`);
    if(includeFR)items.push(`<article class="review-item"><div class="review-meta"><span>Franceză · ${fr.needsReview?'De repetat':'Rezolvat ulterior'}</span><span>${fr.attempts} încercări</span></div><h2>Au marché — Completează conversația</h2><p class="last-feedback">${L.summary(fr).correct}/3 răspunsuri corecte. Verifică folosirea lui acheter și combien.</p><a class="primary" href="${frLink()}">Reia conversația</a></article>`);
    const count=totals();
    return `<div class="review-page"><p class="section-label">Înveți și din încercări</p><h1>Greșelile mele</h1><p class="page-intro">Revino la o idee care nu a fost clară. Ultima încercare este păstrată, ca să continui de acolo.</p><div class="review-toolbar" role="group" aria-label="Filtrare greșeli"><button data-filter="pending" aria-pressed="${filter==='pending'}">De repetat · ${count.toReview}</button><button data-filter="resolved" aria-pressed="${filter==='resolved'}">Rezolvate ulterior · ${count.resolved}</button></div>${items.length?items.join(''):`<div class="empty"><h2>${filter==='pending'?'Nimic de repetat acum.':'Încă nu ai exerciții rezolvate ulterior.'}</h2><p>Exercițiile reluate își vor găsi locul aici, pe măsură ce înveți.</p><a class="primary" href="#cursuri">Înapoi la cursuri ${icon('arrow-right','icon-small')}</a></div>`}${saveNote()}</div>`;
  }
  function progressView() {
    const t=totals();
    return `<div class="progress-page"><p class="section-label">Un pas mic, în fiecare zi</p><h1>Progresul meu</h1><p class="page-intro">Ce ai parcurs și unde merită să mai exersezi.</p><div class="progress-summary"><div><strong>${t.completed}/15</strong><span>Exerciții SQL</span></div><div><strong>${t.french.correct}/3</strong><span>Răspunsuri în franceză</span></div><div><strong>${t.toReview}</strong><span>De repetat</span></div><div><strong>${t.xp}</strong><span>XP câștigat</span></div></div><p class="page-intro">Primești 20 XP la prima rezolvare corectă a unui exercițiu SQL sau a conversației complete. Repetarea este pentru înțelegere și nu adaugă alte puncte.</p><a class="secondary" href="#greseli">Deschide greșelile mele ${icon('arrow-right','icon-small')}</a><div class="catalog-heading"><h2>Traseul SQL</h2></div>${course.lessons.map(courseRow).join('')}${saveNote()}</div>`;
  }
  function rail(area, ex, stage) {
    if(area==='fr') {
      const steps=[['teorie','Înțelege expresiile'],['exemple','Ascultă conversația'],['practica','Completează și verifică']];
      return `<a class="rail-back" href="#cursuri?domeniu=limbi">${icon('arrow-left','icon-small')} Cursuri</a><h2 class="rail-title">Limba franceză</h2><p class="rail-caption">Au marché · La piață</p><ol class="step-list">${steps.map(([id,label],index)=>`<li class="${(id==='practica'&&state.french.completed)||index<steps.findIndex(s=>s[0]===stage)?'done':''}"><a href="${frLink(id)}" ${stage===id?'aria-current="step"':''}><span class="step-dot">${index+1}</span><span class="step-label">${label}</span></a></li>`).join('')}</ol>${railBottom(false)}`;
    }
    const active = lessonFor(ex);
    return `<a class="rail-back" href="#cursuri?domeniu=programare">${icon('arrow-left','icon-small')} Cursuri</a><h2 class="rail-title">SQL de la zero</h2><p class="rail-caption">6 lecții · un proiect practic</p><ol class="step-list">${course.lessons.map((lesson,index)=>{const done=lesson.exercises.every(id=>state.sql.records[id]?.passed);return `<li data-sql-lesson="${lesson.id}" class="${done?'done':''}"><a href="${sqlLink(lesson.exercises[0],'teorie')}" ${active.id===lesson.id?'aria-current="step"':''} aria-label="Lecția ${index+1}: ${esc(lesson.title)}"><span class="step-dot">${done?icon('check','icon-small'):index+1}</span><span class="step-label">${esc(lesson.title)}</span></a></li>`;}).join('')}</ol>${railBottom(true)}`;
  }
  function railBottom(sql) {
    return `<div class="rail-bottom"><a href="#greseli">${icon('book-open','icon-small')} Greșelile mele <span class="count" data-review-count>${totals().toReview}</span></a>${sql?`<a href="#proiect">${icon('code','icon-small')} Proiect final · ${P.summary(state.sql).projectDone}/3</a>`:''}<a href="#progres">Progresul meu ${icon('arrow-right','icon-small')}</a></div>`;
  }
  function stageTabs(ex, stage, variant) {
    return `<nav class="stage-tabs" aria-label="Etapele lecției"><a href="${sqlLink(ex.id,'teorie',variant)}" ${stage==='teorie'?'aria-current="page"':''}>Teorie și exemplu</a><a href="${sqlLink(ex.id,'practica',variant)}" ${stage==='practica'?'aria-current="page"':''}>Practică</a></nav>`;
  }
  function relevantTables(id) {
    if(['s1-all','s1-columns','s6-cities'].includes(id))return ['customers'];
    if(['s2-select','s2-alias','s3-stock','s4-price','s4-limit'].includes(id))return ['products'];
    if(['s3-orders','s6-status','p1'].includes(id))return ['orders'];
    return ['customers','orders'];
  }
  function theoryVisual(lesson, variant) {
    const data=course.datasets[variant];
    if(lesson.id==='l5')return `<div class="relationship">${dataTable(['id','name'],data.customers.slice(0,3).map(r=>r.slice(0,2)),'customers')}${icon('arrow-right')}${dataTable(['id','customer_id','total'],data.orders.slice(0,3).map(r=>r.slice(0,3)),'orders')}</div><p class="relation-note">customers.id = orders.customer_id</p><p class="tip">Aceeași valoare a cheii leagă clientul de comenzile lui. Numele clientului poate apărea pe mai multe rânduri.</p>`;
    if(lesson.id==='l2')return dataTable(course.tables.products.columns,data.products.slice(0,3),'products · observă coloanele name și price',[1,3]);
    if(lesson.id==='l3')return dataTable(['name','price','stock'],data.products.slice(0,4).map(r=>[r[1],r[3],r[4]]),'products · ce produse îndeplinesc condiția?');
    if(lesson.id==='l4')return dataTable(['name','price'],[...data.products].sort((a,b)=>b[3]-a[3]||a[0]-b[0]).slice(0,4).map(r=>[r[1],r[3]]),'Exemplu de ordine: price DESC, id ASC');
    if(lesson.id==='l6') {
      const groups=new Map();for(const row of data.orders)groups.set(row[1],(groups.get(row[1])||0)+1);
      return dataTable(['customer_id','comenzi'],[...groups],'Un rând pentru fiecare grup');
    }
    return dataTable(course.tables.customers.columns,data.customers.slice(0,4),'customers · un rând pentru fiecare client');
  }
  function sqlTheory(ex, variant) {
    const lesson=lessonFor(ex);
    if(!lesson.theory)return sqlPractice(ex,variant);
    return `<article class="reader">${stageTabs(ex,'teorie',variant)}<h1>${esc(lesson.title)}</h1><div class="body-copy">${lesson.theory.map(p=>`<p>${esc(p)}</p>`).join('')}</div>${theoryVisual(lesson,variant)}<p class="example-label">Un exemplu de interogare</p><pre class="code-example">${esc(lesson.example)}</pre><div class="reader-next"><a class="primary" href="${sqlLink(ex.id,'practica',variant)}">Continuă la practică ${icon('arrow-right','icon-small')}</a></div><p class="lesson-progress">Lecția ${course.lessons.indexOf(lesson)+1} din 6</p></article>`;
  }
  function datasetBlock(name, variant, expanded = false) {
    const rows=course.datasets[variant][name], preview=expanded?rows:rows.slice(0,2);
    return `<h2>${name}</h2>${dataTable(course.tables[name].columns,preview,'')}<div class="table-details"><span>${preview.length}/${rows.length} rânduri</span>${rows.length>2?`<button type="button" data-expand-table="${name}" data-expanded="${expanded}">${expanded?'Arată mai puține':'Arată toate ('+rows.length+')'}</button>`:''}</div>`;
  }
  function sqlPractice(ex, variant) {
    const lesson=lessonFor(ex), tables=relevantTables(ex.id), record=state.sql.records[ex.id];
    const draft=drafts.get(ex.id+':'+variant)??record?.lastQuery??'';
    const index=lesson.exercises.indexOf(ex.id)+1;
    return `<section class="practice"><div class="practice-toolbar">${lesson.theory?stageTabs(ex,'practica',variant):''}<nav class="exercise-switcher" aria-label="Exercițiile lecției">${lesson.exercises.map((id,i)=>`<a href="${sqlLink(id,'practica',variant)}" ${id===ex.id?'aria-current="step"':''}>${state.sql.records[id]?.passed?'Rezolvat · ':''}${ex.lesson==='project'?'Cerința':'Exercițiul'} ${i+1}</a>`).join('')}</nav></div>
      <div class="task-sheet"><div class="task-top"><span class="exercise-label">${ex.lesson==='project'?'Cerința':'Exercițiul'} ${index} din ${lesson.exercises.length}</span><span id="task-status" class="task-status">${record?.passed?'Rezolvat · poți repeta':'20 XP la prima rezolvare'}</span></div><h1 class="task-prompt">${esc(ex.prompt)}</h1><div class="dataset-grid ${tables.length===1?'one-table':''}">${tables.map(name=>`<section data-dataset="${name}">${datasetBlock(name,variant)}</section>`).join('')}</div><p class="schema-note">${tables.length>1?'Relație: orders.customer_id → customers.id. ':''}Setul ${variant+1}. ${ex.ordered?'Respectă ordinea rândurilor cerută.':'Ordinea rândurilor este liberă.'} Ordinea coloanelor contează.</p></div>
      <div class="editor-frame"><div class="editor-caption"><label for="sql-editor">Interogarea ta SQL</label><small>SQLite · Ctrl/⌘ + Enter pentru execuție</small></div><div class="editor-body"><pre id="line-numbers" class="line-numbers" aria-hidden="true">1</pre><textarea id="sql-editor" wrap="off" spellcheck="false" autocapitalize="off" autocomplete="off" maxlength="2000" placeholder="Scrie interogarea aici…">${esc(draft)}</textarea></div></div>
      <div class="editor-actions"><button class="primary" id="run-sql">${icon('play','icon-small')} Execută</button><button class="text-button" id="hint-button">${icon('lightbulb','icon-small')} Indiciu</button><button class="text-button" id="clear-sql">${icon('arrow-counter-clockwise','icon-small')} Resetează</button><button class="text-button alternate" id="alternate-data">Alte date</button></div>
      <div id="sql-feedback" role="status" aria-live="polite"></div><div id="hint-content" class="hint-content" hidden><ol id="hint-list"></ol></div><div id="sql-result" class="result-area"><div class="result-empty">Rezultatele vor apărea aici după execuție.</div></div>
      <div class="workspace-foot"><span class="save-status" data-save-status>${esc(accountNote())}</span><div id="next-exercise" hidden></div></div><p class="lesson-progress" data-lesson-count="${lesson.id}">${lesson.exercises.filter(id=>state.sql.records[id]?.passed).length}/${lesson.exercises.length} exerciții rezolvate în această lecție</p></section>`;
  }
  function conversation() {
    return `<div class="conversation">${dialogue.map((line,i)=>`<div class="conversation-line"><button class="icon-button" data-speak="${i}" aria-label="Ascultă replica ${i+1} în franceză">${icon('speaker-high')}</button><p lang="fr">${esc(line.fr)}<small class="dialogue-ro" lang="ro" hidden>${esc(line.ro)}</small></p></div>`).join('')}<button class="text-button conversation-translate" id="translate-dialogue" aria-expanded="false">Arată traducerea în română</button></div>`;
  }
  function languageView(stage) {
    const tabs=`<nav class="stage-tabs" aria-label="Etapele lecției de franceză">${[['teorie','Înțelege'],['exemple','Ascultă'],['practica','Exersează']].map(([id,label])=>`<a href="${frLink(id)}" ${stage===id?'aria-current="page"':''}>${label}</a>`).join('')}</nav>`;
    if(stage==='teorie')return `<article class="reader">${tabs}<h1>O conversație la piață.</h1><div class="body-copy"><p>Vrei să cumperi fructe. Cum spui politicos ce dorești și cum întrebi cât costă?</p><p><strong lang="fr">Je voudrais…</strong> înseamnă „Aș dori…”. După această expresie, verbul rămâne la infinitiv: <em lang="fr">je voudrais acheter</em> — aș dori să cumpăr.</p><p><strong lang="fr">Combien</strong> te ajută să întrebi despre cantitate sau preț. Contextul îți arată sensul.</p></div><div class="translation-card"><p lang="fr">Je voudrais acheter des pommes, s’il vous plaît.</p><p class="muted">Aș dori să cumpăr niște mere, vă rog.</p></div><p class="tip"><span lang="fr">S’il vous plaît</span> înseamnă „vă rog”. Este potrivit când vorbești cu cineva pe care nu îl cunoști.</p><div class="reader-next"><a class="primary" href="${frLink('exemple')}">Ascultă conversația ${icon('arrow-right','icon-small')}</a></div></article>`;
    if(stage==='exemple')return `<article class="reader">${tabs}<h1>Ascultă și urmărește sensul.</h1><p class="body-copy">Apasă difuzorul de lângă fiecare replică. Dacă ai nevoie, deschide traducerea și observă cum se folosesc expresiile.</p>${conversation()}<div class="word-chips"><span class="word-chip">acheter = a cumpăra</span><span class="word-chip">combien = cât / câte</span><span class="word-chip">s’il vous plaît = vă rog</span></div><div class="reader-next"><a class="primary" href="${frLink()}">Continuă la practică ${icon('arrow-right','icon-small')}</a></div><p class="save-note">Pronunția folosește vocile disponibile în browserul și sistemul tău.</p></article>`;
    const answers=languageDraft??state.french.answers;
    return `<section class="practice language-sheet">${tabs}<div class="task-sheet">${conversation()}<div class="word-chips"><span class="word-chip">acheter = a cumpăra</span><span class="word-chip">combien = cât / câte</span><span class="word-chip">s’il vous plaît = vă rog</span></div><form id="language-form" class="language-questions"><p class="section-label">Pune expresiile în context</p><h1>Completează propozițiile</h1>${[
      ['Je voudrais','des oranges.'],['','en voulez-vous ?'],["C’est",'?']
    ].map(([before,after],i)=>`<div class="cloze-row"><label class="cloze-sentence"><span class="cloze-number">${i+1}.</span><span lang="fr">${esc(before)}</span><input class="cloze-input" name="answer-${i}" aria-label="Propoziția ${i+1}: cuvântul lipsă" lang="fr" maxlength="100" autocomplete="off" autocapitalize="off" value="${esc(answers[i])}"><span lang="fr">${esc(after)}</span></label><p class="answer-feedback" id="answer-feedback-${i}" hidden></p></div>`).join('')}<div class="language-meta"><div class="actions"><button class="primary" type="submit">Verifică</button><button class="text-button" type="button" id="language-hint">Indiciu</button></div><div class="language-meter"><div class="progress-track" role="progressbar" aria-label="Răspunsuri corecte" aria-valuemin="0" aria-valuemax="3" aria-valuenow="${L.summary(state.french).correct}" id="language-meter"><span style="width:${L.summary(state.french).correct/3*100}%"></span></div><span id="language-count">${L.summary(state.french).correct}/3 răspunsuri corecte</span></div></div><div id="language-feedback" role="status" aria-live="polite"></div><div id="language-hints" class="hint-content" hidden></div></form></div>${saveNote()}</section>`;
  }
  function configureShell(view, ex, stage) {
    const learning=view==='lectie'||view==='limba';
    document.body.dataset.learning=String(learning);
    $('learning-rail').hidden=!learning; $('outline-button').hidden=!learning;
    $('header-context').innerHTML=learning ? (view==='limba'?`<span>Franceză · Au marché</span>${icon('caret-right')}<strong>${stage==='practica'?'Vocabular și completare':stage==='exemple'?'Ascultă conversația':'Înțelege expresiile'}</strong>`:`<span>SQL de la zero</span>${icon('caret-right')}<strong>${esc(lessonFor(ex).title)}</strong>`) : '';
    for(const link of $('global-nav').querySelectorAll('a'))link.toggleAttribute('aria-current',false);
    const active=$('global-nav').querySelector(`[href="#${view==='traseu'?'cursuri':view}"]`);if(active)active.setAttribute('aria-current','page');
    if(learning){$('learning-rail').innerHTML=rail(view==='limba'?'fr':'sql',ex,stage);$('mobile-outline').innerHTML=$('learning-rail').innerHTML;}
  }
  function render() {
    generation++; if(!course)return;
    let [view,search='']=location.hash.slice(1).split('?');const params=new URLSearchParams(search);
    if(view==='traseu'){view='cursuri';params.set('domeniu','programare');}
    if(!['acasa','cursuri','lectie','limba','proiect','greseli','progres'].includes(view))view='acasa';
    const ex=exercise(params.get('ex'))||exercise(P.resume(state.sql));
    let stage=['teorie','exemple','practica'].includes(params.get('etapa'))?params.get('etapa'):'practica';
    if(view==='lectie'&&(stage==='exemple'||!lessonFor(ex).theory))stage='practica';
    const variant=params.get('date')==='1'?1:0;
    configureShell(view,ex,stage);
    const host=$('main-content');
    if(view==='lectie') {
      state.sql.activeExerciseId=ex.id;state.area='sql';state.stage=stage;
      host.innerHTML=stage==='teorie'?sqlTheory(ex,variant):sqlPractice(ex,variant);
      if(stage==='practica')wireSQL(ex,variant);persist();
    } else if(view==='limba') {
      state.area='fr';state.stage=stage;host.innerHTML=languageView(stage);wireLanguage(stage);persist();
    } else {
      host.innerHTML=view==='cursuri'?catalog(params.get('domeniu')):view==='proiect'?project():view==='greseli'?review():view==='progres'?progressView():home();
    }
    host.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;render();}));
    updateStatus();document.title=(view==='lectie'?lessonFor(ex).title:view==='limba'?'Au marché · Franceză':view==='greseli'?'Greșelile mele':view==='cursuri'?'Cursuri':'Jurnalul tău de studiu')+' · PolymathHub';
  }
  function wireSQL(ex,variant) {
    const editor=$('sql-editor'),button=$('run-sql'),feedback=$('sql-feedback');let hints=0,hasExecuted=false;
    document.querySelector('.dataset-grid').addEventListener('click',event=>{const button=event.target.closest('[data-expand-table]');if(!button)return;const name=button.dataset.expandTable;const host=button.closest('[data-dataset]');host.innerHTML=datasetBlock(name,variant,button.dataset.expanded!=='true');host.querySelector('button')?.focus();});
    const numbers=()=>$('line-numbers').textContent=Array.from({length:Math.max(4,editor.value.split('\n').length)},(_,i)=>i+1).join('\n');numbers();
    editor.addEventListener('scroll',()=>{$('line-numbers').scrollTop=editor.scrollTop;});
    editor.addEventListener('input',()=>{drafts.set(ex.id+':'+variant,editor.value);generation++;button.disabled=false;feedback.replaceChildren();feedback.className='';$('next-exercise').hidden=true;$('sql-result').innerHTML='<div class="result-empty">'+(hasExecuted?'Execută din nou pentru a verifica modificările.':'Rezultatele vor apărea aici după execuție.')+'</div>';numbers();});
    editor.addEventListener('keydown',event=>{if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();run();}});
    $('clear-sql').addEventListener('click',()=>{editor.value='';editor.dispatchEvent(new Event('input'));editor.focus();});
    $('alternate-data').addEventListener('click',()=>{drafts.set(ex.id+':'+(1-variant),editor.value);location.hash=sqlLink(ex.id,'practica',1-variant);});
    $('hint-button').addEventListener('click',()=>{if(hints===3)return;$('hint-content').hidden=false;const item=document.createElement('li');item.textContent=ex.hints[hints++];$('hint-list').append(item);$('hint-button').innerHTML=icon('lightbulb','icon-small')+' Indiciu · '+hints+'/3';$('hint-button').disabled=hints===3;});
    async function run() {
      if(button.disabled)return;
      if(window.PolymathAccount?.loading||window.PolymathAccount?.authenticating){toast('Așteaptă conectarea contului, apoi încearcă din nou.');return;}
      const query=editor.value.trim();if(!query){feedback.className='feedback error';feedback.textContent='Scrie întâi o interogare SQL.';editor.focus();return;}
      const token=++generation,user=owner;button.disabled=true;feedback.className='feedback';feedback.textContent='Se execută interogarea și se verifică rezultatul…';$('next-exercise').hidden=true;
      try {
        const response=await fetch('/api/sql-lab',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({exerciseId:ex.id,query,variant}),signal:AbortSignal.timeout(10000)});
        if(!response.ok&&response.status!==400)throw new Error();const result=await response.json();if(token!==generation||owner!==user)return;
        if(typeof result.correct!=='boolean'&&typeof result.error!=='string')throw new Error();
        hasExecuted=true;const before=P.summary(state.sql).xp;state.sql=P.attempt(state.sql,ex.id,query,result,variant);persist();
        feedback.className='feedback '+(result.correct?'success':'error');feedback.innerHTML=`<p><strong>${result.correct?'Rezolvare corectă. '+(P.summary(state.sql).xp>before?'+20 XP':'XP a fost deja acordat.'):'Mai încearcă o dată.'}</strong></p><p>${esc(result.correct?ex.explanation:result.error)}</p>`;
        if(!result.correct){const link=document.createElement('a');link.href='#greseli';link.textContent='Salvat în Greșelile mele';feedback.append(link);}
        $('sql-result').innerHTML=Array.isArray(result.rows)?`<p class="result-title">Rezultatul interogării tale · ${result.rows.length} rânduri</p>${dataTable(result.columns,result.rows,'')}`:'<div class="result-empty">Corectează interogarea și execută din nou.</div>';
        if(result.correct){$('task-status').textContent='Rezolvat · poți repeta';const next=P.ids[P.ids.indexOf(ex.id)+1];$('next-exercise').innerHTML=next?`<a class="primary" href="${sqlLink(next,lessonFor(exercise(next)).id===lessonFor(ex).id?'practica':'teorie')}">Continuă ${icon('arrow-right','icon-small')}</a>`:'<a class="primary" href="#progres">Vezi progresul</a>';$('next-exercise').hidden=false;}
      } catch {
        if(token!==generation||owner!==user)return;feedback.className='feedback error';feedback.textContent='Laboratorul nu a putut verifica răspunsul. Reîncearcă; problema de conexiune nu este salvată ca greșeală.';
      } finally {if(token===generation&&owner===user)button.disabled=false;}
    }
    button.addEventListener('click',run);
  }
  function speak(index) {
    if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){toast('Pronunția nu este disponibilă în acest browser. Poți folosi textul și traducerea.');return;}
    const utterance=new SpeechSynthesisUtterance(dialogue[index].fr);utterance.lang='fr-FR';utterance.rate=.9;
    const voice=window.speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('fr'));if(voice)utterance.voice=voice;
    utterance.onerror=event=>{if(!['canceled','interrupted'].includes(event.error))toast('Pronunția nu a pornit. Verifică vocile și sunetul dispozitivului.');};
    window.speechSynthesis.cancel();window.speechSynthesis.speak(utterance);
  }
  function wireLanguage(stage) {
    document.querySelectorAll('[data-speak]').forEach(button=>button.addEventListener('click',()=>speak(Number(button.dataset.speak))));
    const translate=$('translate-dialogue');
    if(translate)translate.addEventListener('click',()=>{const expanded=translate.getAttribute('aria-expanded')!=='true';translate.setAttribute('aria-expanded',String(expanded));translate.textContent=expanded?'Ascunde traducerea':'Arată traducerea în română';for(const line of document.querySelectorAll('.dialogue-ro'))line.hidden=!expanded;});
    if(stage!=='practica')return;
    const form=$('language-form'),inputs=[...form.querySelectorAll('input')];let hints=0;
    function drawAnswers() {
      const result=L.check(state.french.answers);
      for(let i=0;i<3;i++){inputs[i].classList.toggle('correct',result.correct[i]);inputs[i].classList.toggle('incorrect',!result.correct[i]);inputs[i].setAttribute('aria-invalid',String(!result.correct[i]));inputs[i].setAttribute('aria-describedby','answer-feedback-'+i);const message=$('answer-feedback-'+i);message.hidden=false;message.className='answer-feedback'+(result.correct[i]?'':' incorrect');message.textContent=(result.correct[i]?'Corect. ':'Mai încearcă. ')+result.explanations[i];}
      $('language-count').textContent=result.correct.filter(Boolean).length+'/3 răspunsuri corecte';$('language-meter').setAttribute('aria-valuenow',String(result.correct.filter(Boolean).length));$('language-meter').firstElementChild.style.width=result.correct.filter(Boolean).length/3*100+'%';
    }
    if(state.french.attempts && (!languageDraft || languageDraft.every((answer,i)=>answer===state.french.answers[i])))drawAnswers();
    for(const input of inputs)input.addEventListener('input',()=>{languageDraft=inputs.map(i=>i.value);input.classList.remove('correct','incorrect');input.removeAttribute('aria-invalid');const i=inputs.indexOf(input);$('answer-feedback-'+i).hidden=true;$('language-feedback').replaceChildren();$('language-feedback').className='';});
    form.addEventListener('submit',event=>{
      event.preventDefault();if(window.PolymathAccount?.loading||window.PolymathAccount?.authenticating){toast('Așteaptă conectarea contului.');return;}
      const before=L.summary(state.french).xp;state.french=L.attempt(state.french,inputs.map(i=>i.value));languageDraft=[...state.french.answers];persist();drawAnswers();
      const feedback=$('language-feedback');feedback.className='feedback '+(state.french.passed?'success':'error');feedback.textContent=state.french.passed?(L.summary(state.french).xp>before?'Conversație completată corect. +20 XP.':'Conversație completată corect. XP a fost deja acordat.'):'Încercarea este salvată în Greșelile mele. Citește explicațiile și mai încearcă.';
    });
    $('language-hint').addEventListener('click',()=>{const hintsText=['După je voudrais folosești verbul la infinitiv. Caută în dialog verbul „a cumpăra”.','Întrebarea despre cantitate începe cu combien.','Pentru a întreba prețul, spui C’est combien ?'];if(hints===3)return;$('language-hints').hidden=false;const p=document.createElement('p');p.textContent=hintsText[hints++];$('language-hints').append(p);$('language-hint').textContent='Indiciu · '+hints+'/3';$('language-hint').disabled=hints===3;});
  }
  $('help-button').addEventListener('click',()=>$('help-dialog').showModal());
  $('outline-button').addEventListener('click',()=>$('course-dialog').showModal());
  document.addEventListener('click',event=>{if(event.target.closest('[data-close-dialog]'))event.target.closest('dialog').close();if(event.target.closest('dialog a[href^="#"]'))event.target.closest('dialog').close();});
  window.addEventListener('hashchange',()=>{generation++;if('speechSynthesis' in window)window.speechSynthesis.cancel();render();window.scrollTo(0,0);});
  async function load() {
    try {const response=await fetch('/api/sql-lab',{signal:AbortSignal.timeout(12000)});if(!response.ok)throw new Error();course=await response.json();if(course.lessons?.length!==6||course.exercises?.length!==15)throw new Error();render();}
    catch {$('main-content').innerHTML='<div class="empty"><h1>Spațiul de studiu nu s-a putut încărca.</h1><p>Verifică conexiunea și încearcă din nou.</p><button class="primary" id="reload-course">Reîncearcă</button></div>';$('reload-course').addEventListener('click',load);}
  }
  load();
})();
