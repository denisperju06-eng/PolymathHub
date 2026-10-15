# -*- coding: utf-8 -*-
"""
Generator for JavaScript mega curriculum expansion (16 lessons).
Special focus on DOM, Modern Web APIs, and Advanced JavaScript.
"""

def get_js_lessons():
    return [
        {
            "id": "js-new-1",
            "track": "JavaScript",
            "division": "Informatică și Programare",
            "icon": "⚡",
            "level": "2. Junior",
            "xp": 35,
            "title": "Capitolul 1: Delegarea Evenimentelor DOM (Bubbling & Event Delegation)",
            "theory": """
<p>Când un eveniment (precum un click) se produce pe un element din browser, el parcurge 3 faze conform standardului W3C:</p>
<ol>
  <li><strong>Faza de Captură (Capturing Phase)</strong>: Coboară de la <code>window</code> și <code>document</code> spre elementul țintă.</li>
  <li><strong>Faza Țintă (Target Phase)</strong>: Atinge elementul pe care s-a dat click direct (<code>e.target</code>).</li>
  <li><strong>Faza de Bule (Bubbling Phase)</strong>: Urcă înapoi prin toți părinții până la rădăcină.</li>
</ol>
<h4>1. Tehnica Event Delegation</h4>
<p>În loc să atașăm 1000 de handleri de eveniment pe fiecare element dintr-o listă (consum masiv de RAM), atașăm <strong>un singur listener pe părinte</strong> (<code>ul</code>) și folosim <code>e.target.closest('li')</code> pentru a identifica elementul acționat.</p>
<h4>2. 'e.target' vs 'e.currentTarget'</h4>
<p><code>e.target</code> este elementul exact pe care s-a făcut click (poate fi un <code>span</code> sau iconiță interioară), în timp ce <code>e.currentTarget</code> este elementul pe care a fost înregistrat listenerul (părintele).</p>
""",
            "glossary": [
                {"term": "Event Bubbling", "def": "Propagarea naturală a unui eveniment în sus prin arborele DOM de la copil către părinți."},
                {"term": "Event Delegation", "def": "Tehnică de optimizare ce atașează un singur handler pe părinte pentru toți copiii prezenți și viitori."},
                {"term": "e.target", "def": "Referință către elementul DOM cel mai adânc care a declanșat inițial evenimentul."},
                {"term": "e.stopPropagation()", "def": "Metodă ce oprește propagarea evenimentului către părinții superiori din arbore."}
            ],
            "matchingPairs": [
                {"left": "e.target.closest('button')", "right": "Găsește cel mai apropiat strămoș de tip buton"},
                {"left": "e.stopPropagation()", "right": "Oprește urcarea evenimentului (bubbling) în arbore"},
                {"left": "e.currentTarget", "right": "Elementul pe care este atașat activ listenerul"},
                {"left": "Event Delegation", "right": "Economie masivă de memorie RAM pentru liste mari"}
            ],
            "quiz": {
                "question": "De ce tehnica Event Delegation funcționează perfect și pentru elementele adăugate dinamic în listă după încărcarea paginii?",
                "options": [
                    "Deoarece listenerul este atașat pe containerul părinte existent, iar evenimentele noilor copii urcă (bubble) natural până la acesta.",
                    "Browserul reîncarcă scriptul JS la fiecare inserare DOM.",
                    "Event Delegation transformă elementele în noduri XML.",
                    "Funcționează doar dacă serverul trimite un semnal WebSocket."
                ],
                "correctIndex": 0,
                "explanation": "Părintele este deja în DOM și ascultă evenimentele care urcă prin bubbling. Orice copil adăugat ulterior va propaga automat click-ul către părinte."
            },
            "task": "Atașează un eveniment 'click' pe 'list' și verifică dacă s-a dat click pe un buton folosind 'e.target.closest(\"button\")'.",
            "starterCode": "list.addEventListener('click', (e) => {\n    const btn = ",
            "expectedOutputPattern": "const\\s+btn\\s*=\\s*e\\.target\\.closest\\([\"']button[\"']\\);?",
            "hint": "Scrie const btn = e.target.closest('button');"
        },
        {
            "id": "js-new-2",
            "track": "JavaScript",
            "division": "Informatică și Programare",
            "icon": "⚡",
            "level": "3. Middle",
            "xp": 45,
            "title": "Capitolul 2: API-ul 'IntersectionObserver' — Lazy Loading & Scroll Infinit",
            "theory": """
<p>Tradițional, detectarea vizibilității elementelor pe ecran se făcea ascultând evenimentul <code>window.addEventListener('scroll')</code> și apelând <code>getBoundingClientRect()</code>, ceea ce forța recalcularea layout-ului (Forced Synchronous Layout / Layout Thrashing) și agăța derularea paginii.</p>
<h4>1. Ce este IntersectionObserver?</h4>
<p><strong>IntersectionObserver</strong> este un API modern asincron care monitorizează intersecția unui element țintă cu un element strămoș sau cu viewport-ul dispozitivului, fără a bloca firul principal de execuție.</p>
<h4>2. Utilizare: Lazy Loading & Praguri (threshold)</h4>
<p>Când <code>entry.isIntersecting</code> devine adevărat, atribuim atributul <code>src</code> din <code>data-src</code> al imaginii și oprim monitorizarea prin <code>observer.unobserve(entry.target)</code>.</p>
""",
            "glossary": [
                {"term": "IntersectionObserver", "def": "API asincron nativ ce monitorizează vizibilitatea unui element în viewport fără impact de performanță."},
                {"term": "isIntersecting", "def": "Proprietate booleană ce indică dacă elementul țintă se află în interiorul ariei vizibile."},
                {"term": "Layout Thrashing", "def": "Degradare de performanță cauzată de citiri și scrieri DOM repetate forțând browserul să recalculeze geometria."},
                {"term": "observer.unobserve(el)", "def": "Oprește monitorizarea unui element după ce acțiunea dorită (ex: încărcare imagine) s-a realizat."}
            ],
            "matchingPairs": [
                {"left": "new IntersectionObserver(callback, options)", "right": "Instanțiază observerul cu pragul dorit"},
                {"left": "entry.isIntersecting", "right": "Verifică dacă elementul a intrat în viewport"},
                {"left": "observer.observe(img)", "right": "Pornește monitorizarea vizibilității imaginii"},
                {"left": "observer.unobserve(img)", "right": "Oprește monitorizarea după încărcare"}
            ],
            "quiz": {
                "question": "De ce este IntersectionObserver mult mai performant pentru Lazy Loading decât ascultarea evenimentului 'scroll'?",
                "options": [
                    "Rulează asincron în afara fluxului principal de randare și nu forțează reflow-uri sincrone la fiecare pixel derulat.",
                    "IntersectionObserver descarcă imaginile înainte ca utilizatorul să deschidă browserul.",
                    "Comprimă automat imaginile în format WebP la rezoluție 4K.",
                    "Dezactivează complet bara de scroll a paginii."
                ],
                "correctIndex": 0,
                "explanation": "IntersectionObserver este gestionat intern de motorul browserului într-un mod complet decuplat și asincron, evitând blocajele (jank) produse de calculele la scroll."
            },
            "task": "Instanțiază un 'IntersectionObserver' transmițând callback-ul 'handleIntersect' în variabila 'observer'.",
            "starterCode": "const observer = ",
            "expectedOutputPattern": "const\\s+observer\\s*=\\s*new\\s+IntersectionObserver\\(handleIntersect(?:,\\s*options)?\\);?",
            "hint": "Scrie const observer = new IntersectionObserver(handleIntersect);"
        },
        {
            "id": "js-new-3",
            "track": "JavaScript",
            "division": "Informatică și Programare",
            "icon": "⚡",
            "level": "3. Middle",
            "xp": 45,
            "title": "Capitolul 3: API-ul 'MutationObserver' — Monitorizarea Arborelui DOM",
            "theory": """
<p>Înainte de MutationObserver, detectarea schimbărilor în DOM se baza pe evenimente învechite (Mutation Events precum <code>DOMNodeInserted</code>), care provocau scăderi drastice de performanță.</p>
<h4>1. Monitorizare Eficientă și Asincronă</h4>
<p><strong>MutationObserver</strong> colectează toate modificările (adăugare/ștergere noduri, schimbare atribute sau conținut text) și le livrează într-un singur batch asincron către funcția callback.</p>
<h4>2. Configurare cu 'observe(target, config)'</h4>
<p>Obiectul de configurare specifică exact ce schimbări ne interesează:</p>
<pre><code>observer.observe(targetNode, {
    childList: true,     // monitorizează adăugarea/ștergerea copiilor
    subtree: true,       // extinde monitorizarea pe toți descendenții
    attributes: true     // monitorizează schimbarea atributelor HTML
});
</code></pre>
""",
            "glossary": [
                {"term": "MutationObserver", "def": "API nativ de înaltă performanță pentru detectarea modificărilor structurale sau de atribute în DOM."},
                {"term": "childList", "def": "Opțiune de configurare ce semnalează adăugarea sau eliminarea de noduri copii directe."},
                {"term": "subtree: true", "def": "Extinde monitorizarea pe întreaga adâncime a subarborelui elementului țintă."},
                {"term": "observer.disconnect()", "def": "Dezactivează complet observerul și eliberează resursele de memorie."}
            ],
            "matchingPairs": [
                {"left": "childList: true", "right": "Detectează adăugarea sau ștergerea elementelor copil"},
                {"left": "attributes: true", "right": "Detectează modificările valorilor atributelor HTML (ex: class, id)"},
                {"left": "observer.disconnect()", "right": "Oprește definitiv ascultarea oricăror mutații DOM"},
                {"left": "record.addedNodes", "right": "Listă cu toate nodurile nou inserate în DOM"}
            ],
            "quiz": {
                "question": "Ce metodă trebuie apelată pe un MutationObserver atunci când o componentă este ștearsă din pagină pentru a preveni memory leaks?",
                "options": [
                    "observer.disconnect()",
                    "observer.destroyAll()",
                    "observer.close()",
                    "delete window.observer"
                ],
                "correctIndex": 0,
                "explanation": "Apelul disconnect() dezactivează observerul, curăță toate mutațiile din coadă și eliberează referințele către nodurile DOM, prevenind scurgerile de memorie."
            },
            "task": "Pornește monitorizarea pe 'targetElement' pentru 'childList: true' rulând 'observer.observe(targetElement, { childList: true });'.",
            "starterCode": "// Monitorizează childList\n",
            "expectedOutputPattern": "observer\\.observe\\(targetElement,\\s*\\{\\s*childList:\\s*true\\s*\\}\\);?",
            "hint": "Scrie observer.observe(targetElement, { childList: true });"
        },
        {
            "id": "js-new-4",
            "track": "JavaScript",
            "division": "Informatică și Programare",
            "icon": "⚡",
            "level": "3. Middle",
            "xp": 50,
            "title": "Capitolul 4: Evenimente Personalizate ('CustomEvent' & 'dispatchEvent')",
            "theory": """
<p>Pentru a construi arhitecturi decuplate și sisteme modulare (Publish/Subscribe) fără dependențe externe, browserul oferă clasa nativă <strong>CustomEvent</strong>.</p>
<h4>1. Crearea unui CustomEvent cu Payload</h4>
<p>Putem atașa date arbitrare prin proprietatea <code>detail</code>:</p>
<pre><code>const event = new CustomEvent('userLogin', {
    detail: { userId: 101, role: 'admin' },
    bubbles: true,        // permite evenimentului să urce în arborele DOM
    cancelable: true     // permite anularea cu e.preventDefault()
});
</code></pre>
<h4>2. Declanșarea cu 'dispatchEvent'</h4>
<p>Evenimentul este emis pe orice nod DOM prin <code>element.dispatchEvent(event)</code> și poate fi interceptat cu metoda standard <code>element.addEventListener('userLogin', (e) => console.log(e.detail));</code>.</p>
""",
            "glossary": [
                {"term": "CustomEvent", "def": "Clasă nativă DOM pentru crearea de evenimente cu nume personalizat și încărcătură de date (detail)."},
                {"term": "detail", "def": "Proprietate standard a unui CustomEvent unde sunt stocate datele transmise către handleri."},
                {"term": "dispatchEvent()", "def": "Metodă sincronă ce declanșează un eveniment pe elementul țintă din DOM."},
                {"term": "Decoupled Architecture", "def": "Model de proiectare unde componentele comunică exclusiv prin mesaje fără referințe directe."}
            ],
            "matchingPairs": [
                {"left": "new CustomEvent('cartUpdate', { detail: item })", "right": "Creează un eveniment cu date atașate"},
                {"left": "window.dispatchEvent(event)", "right": "Emite evenimentul la nivel global în aplicație"},
                {"left": "e.detail", "right": "Acces la datele transmise în corpul evenimentului"},
                {"left": "bubbles: true", "right": "Permite evenimentului personalizat să urce în DOM"}
            ],
            "quiz": {
                "question": "În ce proprietate a obiectului CustomEvent sunt plasate datele transmise către ascultătorii de evenimente?",
                "options": [
                    "detail (de exemplu e.detail)",
                    "payload",
                    "data",
                    "body"
                ],
                "correctIndex": 0,
                "explanation": "Conform standardului W3C DOM Events, proprietatea 'detail' din obiectul de inițializare este locul canonic unde se salvează datele transmise."
            },
            "task": "Emite evenimentul 'myEvent' pe elementul 'document' folosind 'document.dispatchEvent(myEvent);'.",
            "starterCode": "// Declanșează myEvent pe document\n",
            "expectedOutputPattern": "document\\.dispatchEvent\\(myEvent\\);?",
            "hint": "Scrie document.dispatchEvent(myEvent);"
        },
        {
            "id": "js-new-5",
            "track": "JavaScript",
            "division": "Informatică și Programare",
            "icon": "⚡",
            "level": "4. Senior",
            "xp": 55,
            "title": "Capitolul 5: Web Workers — Execuție Paralelă în Background Threads",
            "theory": """
<p>JavaScript în browser rulează pe un singur fir principal de execuție (Single-Threaded). Calculele intensive (procesare video/audio, criptografie, parsare masivă de JSON) blochează complet interfața utilizator (UI freeze).</p>
<h4>1. Ce este un Web Worker?</h4>
<p>Un <strong>Web Worker</strong> rulează un script într-un fir de execuție separat din sistemul de operare. Workerul NU are acces la DOM, la <code>window</code> sau la <code>document</code>, fiind complet izolat.</p>
<h4>2. Comunicare prin Transmitere de Mesaje (postMessage)</h4>
<p>Comunicarea dintre firul principal și worker se realizează exclusiv asincron prin mesaje serializate:</p>
<pre><code>// Firul principal:
const worker = new Worker('worker.js');
worker.postMessage({ data: rawNumbers });
worker.onmessage = (e) => console.log('Rezultat:', e.data);
</code></pre>
""",
            "glossary": [
                {"term": "Web Worker", "def": "Mecanism de rulare a scripturilor JavaScript în fire de execuție paralele fără acces la DOM."},
                {"term": "postMessage(data)", "def": "Metodă sigură de trimitere a datelor între firul principal și worker prin clonare structurală."},
                {"term": "onmessage", "def": "Handler de eveniment declanșat la primirea unui mesaj de la celălalt thread."},
                {"term": "Structured Clone Algorithm", "def": "Algoritm intern ce duplică obiecte complexe transmise prin postMessage."}
            ],
            "matchingPairs": [
                {"left": "new Worker('heavy-task.js')", "right": "Inițializează un nou fir de execuție în fundal"},
                {"left": "worker.postMessage(data)", "right": "Trimite date către worker pentru procesare"},
                {"left": "self.onmessage = (e) => ...", "right": "Recepționează mesajul în interiorul scriptului worker"},
                {"left": "Fără acces la DOM", "right": "Restricție de siguranță arhitecturală a Web Workers"}
            ],
            "quiz": {
                "question": "Ce resurse ale browserului NU pot fi accesate direct din interiorul unui Web Worker?",
                "options": [
                    "Arborele DOM, obiectul document și obiectul window.",
                    "Cereri de rețea prin fetch().",
                    "Operații matematice cu Math.",
                    "Stocarea IndexedDB."
                ],
                "correctIndex": 0,
                "explanation": "Web Workers rulează într-un context separat (DedicatedWorkerGlobalScope) și nu pot atinge direct DOM-ul pentru a preveni condiții de concurență (race conditions) pe UI."
            },
            "task": "Trimite obiectul '{ cmd: \"START\" }' către 'myWorker' folosind 'myWorker.postMessage({ cmd: \"START\" });'.",
            "starterCode": "// Trimite mesajul la worker\n",
            "expectedOutputPattern": "myWorker\\.postMessage\\(\\s*\\{\\s*cmd:\\s*[\"']START[\"']\\s*\\}\\s*\\);?",
            "hint": "Scrie myWorker.postMessage({ cmd: 'START' });"
        },
        {
            "id": "js-new-6",
            "track": "JavaScript",
            "division": "Informatică și Programare",
            "icon": "⚡",
            "level": "4. Senior",
            "xp": 55,
            "title": "Capitolul 6: WebSockets — Comunicare Full-Duplex în Timp Real",
            "theory": """
<p>Spre deosebire de protocolul HTTP care este de tip request-response (unidirecțional inițiat exclusiv de client), protocolul <strong>WebSocket (ws:// sau wss://)</strong> deschide un canal TCP persistent, bidirecțional și de latență minimă.</p>
<h4>1. Handshake-ul WebSocket</h4>
<p>Conexiunea începe ca o cerere HTTP normală cu header-ul <code>Upgrade: websocket</code>. După acceptarea serverului, conexiunea este transformată într-un socket binar continuu.</p>
<h4>2. Ciclul de Viață al unui WebSocket în JS</h4>
<pre><code>const ws = new WebSocket('wss://api.exemplu.ro/live');
ws.onopen = () => ws.send(JSON.stringify({ type: 'SUBSCRIBE' }));
ws.onmessage = (e) => console.log('Date primite:', JSON.parse(e.data));
ws.onerror = (err) => console.error('Eroare WS:', err);
ws.onclose = () => console.log('Conexiune închisă');
</code></pre>
""",
            "glossary": [
                {"term": "WebSocket", "def": "Protocol de comunicație de rețea persistent și full-duplex peste o singură conexiune TCP."},
                {"term": "Full-Duplex", "def": "Capacitatea clientului și a serverului de a transmite date simultan în ambele sensuri."},
                {"term": "wss:// (Secure WebSocket)", "def": "Variantă criptată prin TLS a protocolului WebSocket (echivalentul HTTPS)."},
                {"term": "ws.send(data)", "def": "Metodă de transmitere instantanee a unui mesaj text sau binar către server."}
            ],
            "matchingPairs": [
                {"left": "new WebSocket('wss://...')", "right": "Inițiază conexiunea TCP persistentă criptată"},
                {"left": "ws.onopen", "right": "Eveniment declanșat la stabilirea cu succes a conexiunii"},
                {"left": "ws.onmessage", "right": "Eveniment declanșat la sosirea fiecărui pachet de la server"},
                {"left": "ws.send(payload)", "right": "Trimite date în timp real către server"}
            ],
            "quiz": {
                "question": "Care este avantajul major al WebSockets față de tehnica HTTP Polling (interogare periodică la fiecare 2 secunde)?",
                "options": [
                    "Conexiunea rămâne permanent deschisă; serverul poate trimite date imediat ce apar, fără overhead-ul de headere HTTP repetate.",
                    "WebSockets funcționează chiar dacă calculatorul este oprit complet.",
                    "WebSockets permite descărcarea gratuită a fișierelor de pe orice site.",
                    "Serverul nu mai are nevoie de adresă IP."
                ],
                "correctIndex": 0,
                "explanation": "Cu WebSockets nu mai există cereri HTTP repetate. Anteturile se transmit o singură dată la handshake, după care datele circulă instantaneu în ambele direcții cu overhead minim."
            },
            "task": "Trimite mesajul JSON 'JSON.stringify({ ping: true })' prin socket-ul 'ws' folosind 'ws.send()'.",
            "starterCode": "// Trimite date pe websocket\n",
            "expectedOutputPattern": "ws\\.send\\(JSON\\.stringify\\(\\s*\\{\\s*ping:\\s*true\\s*\\}\\s*\\)\\);?",
            "hint": "Scrie ws.send(JSON.stringify({ ping: true }));"
        },
        {
            "id": "js-new-7",
            "track": "JavaScript",
            "division": "Informatică și Programare",
            "icon": "⚡",
            "level": "4. Senior",
            "xp": 60,
            "title": "Capitolul 7: Obiectele 'Proxy' și 'Reflect' — Metaprogramare & Reactivitate",
            "theory": """
<p>Obiectul <strong>Proxy</strong> din ES6 permite împachetarea unui alt obiect și interceptarea (trapping) tuturor operațiunilor fundamentale: citire de proprietăți (<code>get</code>), atribuire (<code>set</code>), ștergere sau invocare de metode.</p>
<h4>1. Cum funcționează un Trap</h4>
<pre><code>const target = { price: 100 };
const reactive = new Proxy(target, {
    set(obj, prop, value) {
        console.log(`Proprietatea ${prop} s-a modificat în ${value}`);
        return Reflect.set(obj, prop, value);
    }
});
</code></pre>
<h4>2. Motorul Reactivității Moderne</h4>
<p>Proxy este fundamentul pe care sunt construite motoarele moderne de reactivitate din <strong>Vue 3</strong> și <strong>MobX</strong>, permițând detectarea automată a schimbărilor fără a folosi getteri/setteri manuali stufosi.</p>
""",
            "glossary": [
                {"term": "Proxy", "def": "Obiect wrapper ce interceptează și redefinește operațiunile fundamentale efectuate pe un obiect țintă."},
                {"term": "Trap", "def": "Metodă internă (ex: get, set, deleteProperty) definită în handlerul unui Proxy."},
                {"term": "Reflect", "def": "Obiect standard ce furnizează metode utilitare corespunzătoare fiecărui trap din Proxy."},
                {"term": "Reactive State", "def": "Stare care notifică automat sistemul de randare atunci când proprietățile sale sunt modificate."}
            ],
            "matchingPairs": [
                {"left": "get(target, prop, receiver)", "right": "Trap ce interceptează citirea oricărei proprietăți"},
                {"left": "set(target, prop, val, receiver)", "right": "Trap ce interceptează atribuirea de noi valori"},
                {"left": "Reflect.set(...)", "right": "Comportamentul nativ implicit de scriere pe obiect"},
                {"left": "Vue 3 Reactivity", "right": "Sistem construit în totalitate pe baza obiectelor Proxy"}
            ],
            "quiz": {
                "question": "Ce trebuie să returneze obligatoriu un trap de tip 'set' într-un Proxy când este setat în modul strict ('use strict')?",
                "options": [
                    "Valoarea booleană 'true' dacă atribuirea a reușit (altfel aruncă TypeError).",
                    "Numele proprietății modificate ca string.",
                    "Numărul de secunde trecute de la pornire.",
                    "Referința către obiectul window."
                ],
                "correctIndex": 0,
                "explanation": "Trap-ul 'set' trebuie să returneze un boolean; dacă returnează 'false' sau o valoare falsy în strict mode, JavaScript aruncă o excepție de tip TypeError."
            },
            "task": "Returnează rezultatul apelului 'Reflect.get(target, prop, receiver)' în interiorul unui trap 'get'.",
            "starterCode": "get(target, prop, receiver) {\n    return ",
            "expectedOutputPattern": "return\\s+Reflect\\.get\\(target,\\s*prop,\\s*receiver\\);?",
            "hint": "Scrie return Reflect.get(target, prop, receiver);"
        },
        {
            "id": "js-new-8",
            "track": "JavaScript",
            "division": "Informatică și Programare",
            "icon": "⚡",
            "level": "5. Arhitect / Exemplar",
            "xp": 70,
            "title": "Capitolul 8: Event Loop Aprofundat: Microtasks vs Macrotasks",
            "theory": """
<p>Înțelegerea ordinii de execuție în JavaScript necesită cunoașterea distincției clare dintre <strong>Call Stack</strong>, <strong>Microtask Queue</strong> și <strong>Macrotask Queue (Task Queue)</strong>.</p>
<h4>1. Microtasks au Prioritate Absolută</h4>
<p>După ce Call Stack-ul se golește, Event Loop-ul execută <strong>TOATE</strong> microtask-urile existente în coadă înainte de a atinge următorul macrotask:</p>
<ul>
  <li><em>Microtasks</em>: <code>Promise.then()</code>, <code>Promise.catch()</code>, <code>async/await</code> (după reluare), <code>queueMicrotask()</code>, <code>MutationObserver</code>.</li>
  <li><em>Macrotasks</em>: <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code> (Node.js), evenimente I/O, randarea UI a browserului.</li>
</ul>
<h4>2. Riscul de Starvation</h4>
<p>Dacă o buclă generează continuu microtask-uri noi, browserul nu va ajunge niciodată la următorul macrotask sau la randarea cadrelor (60 FPS), blocând complet pagina.</p>
""",
            "glossary": [
                {"term": "Microtask Queue", "def": "Coadă de înaltă prioritate golită complet de Event Loop înainte de orice macrotask sau randare."},
                {"term": "Macrotask (Task)", "def": "Task obișnuit programat de setTimeout sau I/O, rulat câte unul per iterație a buclei de evenimente."},
                {"term": "queueMicrotask()", "def": "Funcție standard pentru programarea explicită a unei funcții pe coada de microtask-uri."},
                {"term": "UI Starvation", "def": "Blocarea randării grafice cauzată de un flux infinit de microtask-uri ce împiedică desenarea pe ecran."}
            ],
            "matchingPairs": [
                {"left": "Promise.resolve().then()", "right": "Programează o funcție pe Microtask Queue"},
                {"left": "setTimeout(fn, 0)", "right": "Programează o funcție pe Macrotask Queue"},
                {"left": "queueMicrotask(fn)", "right": "API standard pentru injectare directă în coada de microtask-uri"},
                {"left": "Golire completă a cozii", "right": "Regula strictă a Event Loop-ului pentru microtask-uri"}
            ],
            "quiz": {
                "question": "Care este ordinea exactă de afișare în consolă a codului:\nconsole.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);",
                "options": [
                    "1, 4, 3, 2",
                    "1, 2, 3, 4",
                    "1, 3, 4, 2",
                    "1, 4, 2, 3"
                ],
                "correctIndex": 0,
                "explanation": "Codul sincron rulează primul (1, 4). Apoi coada de microtask-uri este golită complet (3 de la Promise), și abia în final se extrage macrotask-ul din coadă (2 de la setTimeout)."
            },
            "task": "Programează funcția 'updateData' pe coada de microtask-uri folosind 'queueMicrotask(updateData);'.",
            "starterCode": "// Programează pe microtask queue\n",
            "expectedOutputPattern": "queueMicrotask\\(updateData\\);?",
            "hint": "Scrie queueMicrotask(updateData);"
        },
        {
            "id": "js-new-9",
            "track": "JavaScript",
            "division": "Informatică și Programare",
            "icon": "⚡",
            "level": "5. Arhitect / Exemplar",
            "xp": 75,
            "title": "Capitolul 9: 'AbortController' & Anularea Cererilor HTTP Asincrone",
            "theory": """
<p>Gestionarea corectă a cererilor asincrone în aplicațiile cu funcționalitate de căutare live (Search Typeahead) cere anularea cererilor anterioare pentru a preveni <em>Race Conditions</em> (când un răspuns mai lent al unei căutări vechi suprascrie rezultatul celei mai recente).</p>
<h4>1. Obiectul AbortController</h4>
<p>Instanțiem un controller: <code>const controller = new AbortController();</code> și transmitem proprietatea <code>signal</code> către opțiunile lui <code>fetch</code>:</p>
<pre><code>fetch('/api/search?q=' + query, { signal: controller.signal })
  .then(res => res.json())
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Cererea a fost anulată intenționat');
    }
  });
</code></pre>
<h4>2. Anularea cu 'controller.abort()'</h4>
<p>Apelul <code>controller.abort()</code> oprește imediat conexiunea la nivel de rețea în browser și rejectează promisiunea cu o eroare cu numele <code>AbortError</code>.</p>
""",
            "glossary": [
                {"term": "AbortController", "def": "Obiect standard de control ce permite întreruperea operațiunilor DOM sau a cererilor asincrone fetch()."},
                {"term": "controller.signal", "def": "Obiect de tip AbortSignal transmis către fetch pentru stabilirea legăturii de anulare."},
                {"term": "AbortError", "def": "Eroare specifică aruncată de fetch() când cererea este întreruptă prin apelul abort()."},
                {"term": "Race Condition", "def": "Eroare de sincronizare în care rezultatul depinde necontrolat de ordinea de sosire a pachetelor de rețea."}
            ],
            "matchingPairs": [
                {"left": "const controller = new AbortController()", "right": "Creează un nou controler de anulare"},
                {"left": "fetch(url, { signal: controller.signal })", "right": "Leagă cererea fetch de semnalul de anulare"},
                {"left": "controller.abort()", "right": "Anulează instant conexiunea de rețea activă"},
                {"left": "err.name === 'AbortError'", "right": "Detectează că eroarea a fost cauzată de o anulare voluntară"}
            ],
            "quiz": {
                "question": "Ce excepție este aruncată de 'fetch()' atunci când operațiunea este întreruptă folosind apelul 'controller.abort()'?",
                "options": [
                    "O eroare de tip DOMException având proprietatea name egală cu 'AbortError'.",
                    "O eroare de tip SyntaxError.",
                    "O eroare de tip NetworkTimeoutException.",
                    "Nicio eroare; promisiunea rămâne înghețată la infinit."
                ],
                "correctIndex": 0,
                "explanation": "Browserul rejectează automat promisiunea returnată de fetch cu un DOMException special cu name: 'AbortError', permițând codului să ignore această eroare normală de anulare."
            },
            "task": "Anulează cererea activă apelând metoda 'abort()' pe instanța 'controller'.",
            "starterCode": "// Anulează cererea\n",
            "expectedOutputPattern": "controller\\.abort\\(\\);?",
            "hint": "Scrie controller.abort();"
        }
    ]
