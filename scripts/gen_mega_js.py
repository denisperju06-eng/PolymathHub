# -*- coding: utf-8 -*-
"""
Generator for JavaScript mega curriculum expansion (9 comprehensive lessons).
Covers Event Delegation, IntersectionObserver, MutationObserver, CustomEvent,
Web Workers, WebSockets, Proxy & Reflect, Event Loop (Microtasks vs Macrotasks),
and AbortController.
Each lesson features rich <pre><code>...</code></pre> code blocks, runnable examples, and precise tasks.
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
<p>Când un eveniment (precum un click) se produce pe un element din browser, el parcurge 3 faze conform standardului W3C: Capturing, Target și Bubbling (urcarea înapoi prin toți părinții).</p>

<h4>1. Tehnica Event Delegation</h4>
<p>În loc să atașăm 1000 de handleri de eveniment pe fiecare element dintr-o listă, atașăm <strong>un singur listener pe părinte</strong> și folosim <code>e.target.closest('button')</code> pentru a identifica elementul acționat.</p>

<h4>2. Exemplu Complet de Delegare de Evenimente</h4>
<pre><code>const list = document.querySelector("#todo-list");

// Un singur listener atașat pe containerul părinte:
list.addEventListener("click", (e) => {
    // Găsește cel mai apropiat element buton de la punctul de click:
    const btn = e.target.closest("button");
    if (!btn) return; // Click-ul nu a fost pe un buton

    const item = btn.closest("li");
    console.log("Acțiune pe elementul ID:", item.dataset.id);
});
</code></pre>
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
            "prompt": "Atașează un eveniment 'click' pe 'list' și verifică dacă s-a dat click pe un buton folosind 'const btn = e.target.closest(\"button\");'.",
            "task": "Atașează un eveniment 'click' pe 'list' și verifică dacă s-a dat click pe un buton folosind 'const btn = e.target.closest(\"button\");'.",
            "example": "const btn = e.target.closest(\"button\");",
            "starterCode": "const btn = e.target.closest(\"button\");",
            "officialSolution": "const btn = e.target.closest(\"button\");",
            "expectedOutputPattern": "const\\s+btn\\s*=\\s*e\\.target\\.closest\\([\"']button[\"']\\);?",
            "regexPattern": "const\\s+btn\\s*=\\s*e\\.target\\.closest\\([\"']button[\"']\\);?",
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
<p><strong>IntersectionObserver</strong> este un API modern asincron care monitorizează intersecția unui element țintă cu viewport-ul dispozitivului, fără a bloca firul principal sau a forța Layout Thrashing.</p>

<h4>1. Exemplu de Lazy Loading cu IntersectionObserver</h4>
<pre><code>function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Încarcă imaginea reală
            observer.unobserve(img);   // Oprește monitorizarea
        }
    });
}

// Instanțiere simplă:
const observer = new IntersectionObserver(handleIntersect);
document.querySelectorAll("img.lazy").forEach(el => observer.observe(el));
</code></pre>
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
            "prompt": "Instanțiază un 'IntersectionObserver' transmițând callback-ul 'handleIntersect' în variabila 'observer'.",
            "task": "Instanțiază un 'IntersectionObserver' transmițând callback-ul 'handleIntersect' în variabila 'observer'.",
            "example": "const observer = new IntersectionObserver(handleIntersect);",
            "starterCode": "const observer = new IntersectionObserver(handleIntersect);",
            "officialSolution": "const observer = new IntersectionObserver(handleIntersect);",
            "expectedOutputPattern": "const\\s+observer\\s*=\\s*new\\s+IntersectionObserver\\(handleIntersect(?:,\\s*options)?\\);?",
            "regexPattern": "const\\s+observer\\s*=\\s*new\\s+IntersectionObserver\\(handleIntersect(?:,\\s*options)?\\);?",
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
<p><strong>MutationObserver</strong> colectează toate modificările (adăugare/ștergere noduri, schimbare atribute sau text) și le livrează într-un singur batch asincron către funcția callback.</p>

<h4>1. Exemplu Complet de Monitorizare cu MutationObserver</h4>
<pre><code>const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            console.log("Noduri modificate în DOM:", mutation.addedNodes.length);
        }
    }
});

// Pornire monitorizare pe elementul țintă:
observer.observe(targetElement, { childList: true });
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
            "prompt": "Pornește monitorizarea pe 'targetElement' pentru 'childList: true' rulând 'observer.observe(targetElement, { childList: true });'.",
            "task": "Pornește monitorizarea pe 'targetElement' pentru 'childList: true' rulând 'observer.observe(targetElement, { childList: true });'.",
            "example": "observer.observe(targetElement, { childList: true });",
            "starterCode": "observer.observe(targetElement, { childList: true });",
            "officialSolution": "observer.observe(targetElement, { childList: true });",
            "expectedOutputPattern": "observer\\.observe\\(targetElement,\\s*\\{\\s*childList:\\s*true\\s*\\}\\);?",
            "regexPattern": "observer\\.observe\\(targetElement,\\s*\\{\\s*childList:\\s*true\\s*\\}\\);?",
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
<p>Pentru a construi arhitecturi decuplate și sisteme modulare (Publish/Subscribe) fără biblioteci externe, browserul oferă clasa nativă <strong>CustomEvent</strong>.</p>

<h4>1. Exemplu Complet de Creare și Declanșare de CustomEvent</h4>
<pre><code>// 1. Creare eveniment cu payload prin proprietatea 'detail':
const myEvent = new CustomEvent("userLogin", {
    detail: { userId: 101, username: "alex" },
    bubbles: true
});

// 2. Ascultare eveniment pe document:
document.addEventListener("userLogin", (e) => {
    console.log("Date primite:", e.detail.username);
});

// 3. Declanșare pe nodul DOM:
document.dispatchEvent(myEvent);
</code></pre>
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
            "prompt": "Emite evenimentul 'myEvent' pe elementul 'document' folosind 'document.dispatchEvent(myEvent);'.",
            "task": "Emite evenimentul 'myEvent' pe elementul 'document' folosind 'document.dispatchEvent(myEvent);'.",
            "example": "document.dispatchEvent(myEvent);",
            "starterCode": "document.dispatchEvent(myEvent);",
            "officialSolution": "document.dispatchEvent(myEvent);",
            "expectedOutputPattern": "document\\.dispatchEvent\\(myEvent\\);?",
            "regexPattern": "document\\.dispatchEvent\\(myEvent\\);?",
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
<p>JavaScript în browser rulează pe un singur fir principal de execuție. Calculele intensive blochează complet interfața utilizator. Un <strong>Web Worker</strong> rulează codul într-un fir separat de execuție.</p>

<h4>1. Exemplu de Comunicare cu Web Worker</h4>
<pre><code>// Firul principal:
const myWorker = new Worker("worker.js");

// Trimitere mesaj către worker:
myWorker.postMessage({ cmd: "START" });

// Recepționare rezultat:
myWorker.onmessage = (e) => {
    console.log("Rezultat din background thread:", e.data);
};
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
            "prompt": "Trimite obiectul '{ cmd: \"START\" }' către 'myWorker' folosind 'myWorker.postMessage({ cmd: \"START\" });'.",
            "task": "Trimite obiectul '{ cmd: \"START\" }' către 'myWorker' folosind 'myWorker.postMessage({ cmd: \"START\" });'.",
            "example": "myWorker.postMessage({ cmd: \"START\" });",
            "starterCode": "myWorker.postMessage({ cmd: \"START\" });",
            "officialSolution": "myWorker.postMessage({ cmd: \"START\" });",
            "expectedOutputPattern": "myWorker\\.postMessage\\(\\s*\\{\\s*cmd:\\s*[\"']START[\"']\\s*\\}\\s*\\);?",
            "regexPattern": "myWorker\\.postMessage\\(\\s*\\{\\s*cmd:\\s*[\"']START[\"']\\s*\\}\\s*\\);?",
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
<p>Spre deosebire de protocolul HTTP care este de tip request-response, <strong>WebSocket (wss://)</strong> deschide un canal TCP persistent, bidirecțional și de latență minimă.</p>

<h4>1. Exemplu de Conexiune și Trimitere Mesaj</h4>
<pre><code>const ws = new WebSocket("wss://api.example.com/live");

ws.onopen = () => {
    // Trimitere mesaj formatat ca JSON către server:
    ws.send(JSON.stringify({ ping: true }));
};

ws.onmessage = (event) => {
    console.log("Răspuns server:", event.data);
};
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
            "prompt": "Trimite mesajul JSON 'JSON.stringify({ ping: true })' prin socket-ul 'ws' folosind 'ws.send(JSON.stringify({ ping: true }));'.",
            "task": "Trimite mesajul JSON 'JSON.stringify({ ping: true })' prin socket-ul 'ws' folosind 'ws.send(JSON.stringify({ ping: true }));'.",
            "example": "ws.send(JSON.stringify({ ping: true }));",
            "starterCode": "ws.send(JSON.stringify({ ping: true }));",
            "officialSolution": "ws.send(JSON.stringify({ ping: true }));",
            "expectedOutputPattern": "ws\\.send\\(JSON\\.stringify\\(\\s*\\{\\s*ping:\\s*true\\s*\\}\\s*\\)\\);?",
            "regexPattern": "ws\\.send\\(JSON\\.stringify\\(\\s*\\{\\s*ping:\\s*true\\s*\\}\\s*\\)\\);?",
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
<p>Obiectul <strong>Proxy</strong> permite interceptarea și redefinirea operațiunilor de citire (<code>get</code>), atribuire (<code>set</code>) sau invocare de metode pe un obiect țintă.</p>

<h4>1. Exemplu de Proxy cu Trap get și Reflect.get</h4>
<pre><code>const target = { price: 100 };

const handler = {
    get(target, prop, receiver) {
        console.log(`Proprietatea citită: ${prop}`);
        // Delegare către comportamentul nativ prin Reflect:
        return Reflect.get(target, prop, receiver);
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.price); // 100
</code></pre>
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
            "prompt": "Returnează rezultatul apelului 'Reflect.get(target, prop, receiver)' în interiorul unui trap 'get'.",
            "task": "Returnează rezultatul apelului 'Reflect.get(target, prop, receiver)' în interiorul unui trap 'get'.",
            "example": "return Reflect.get(target, prop, receiver);",
            "starterCode": "return Reflect.get(target, prop, receiver);",
            "officialSolution": "return Reflect.get(target, prop, receiver);",
            "expectedOutputPattern": "return\\s+Reflect\\.get\\(target,\\s*prop,\\s*receiver\\);?",
            "regexPattern": "return\\s+Reflect\\.get\\(target,\\s*prop,\\s*receiver\\);?",
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
<p>Înțelegerea ordinii de execuție asincrone în JavaScript necesită distincția clară dintre Microtask Queue și Macrotask Queue.</p>

<h4>1. Exemplu de Programare a unui Microtask</h4>
<pre><code>// Cod sincron:
console.log("1. Sincron start");

// Macrotask (programat la final):
setTimeout(() => console.log("4. Macrotask (setTimeout)"), 0);

// Microtask de prioritate maximă:
queueMicrotask(() => {
    console.log("3. Microtask (queueMicrotask)");
});

Promise.resolve().then(() => console.log("2. Microtask (Promise)"));
</code></pre>
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
            "prompt": "Programează funcția 'updateData' pe coada de microtask-uri folosind 'queueMicrotask(updateData);'.",
            "task": "Programează funcția 'updateData' pe coada de microtask-uri folosind 'queueMicrotask(updateData);'.",
            "example": "queueMicrotask(updateData);",
            "starterCode": "queueMicrotask(updateData);",
            "officialSolution": "queueMicrotask(updateData);",
            "expectedOutputPattern": "queueMicrotask\\(updateData\\);?",
            "regexPattern": "queueMicrotask\\(updateData\\);?",
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
<p><strong>AbortController</strong> permite anularea cererilor asincrone <code>fetch</code> sau a evenimentelor DOM pentru a preveni Race Conditions și consumul inutil de lățime de bandă.</p>

<h4>1. Exemplu Complet de Anulare a unei Cereri HTTP</h4>
<pre><code>const controller = new AbortController();

fetch("https://api.example.com/search?q=js", { signal: controller.signal })
    .then(res => res.json())
    .catch(err => {
        if (err.name === "AbortError") {
            console.log("Cererea a fost anulată cu succes.");
        }
    });

// Anulare la comandă:
controller.abort();
</code></pre>
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
            "prompt": "Anulează cererea activă apelând metoda 'abort()' pe instanța 'controller': 'controller.abort();'.",
            "task": "Anulează cererea activă apelând metoda 'abort()' pe instanța 'controller': 'controller.abort();'.",
            "example": "controller.abort();",
            "starterCode": "controller.abort();",
            "officialSolution": "controller.abort();",
            "expectedOutputPattern": "controller\\.abort\\(\\);?",
            "regexPattern": "controller\\.abort\\(\\);?",
            "hint": "Scrie controller.abort();"
        }
    ]
