var NEW_EXPANDED_CURRICULUM = [
  {
    "id": "js-dom-1",
    "track": "JavaScript: DOM & Events",
    "division": "Informatică și Programare",
    "icon": "layers",
    "level": "1. Începător",
    "xp": 30,
    "title": "Arhitectura Arborelui DOM și Selectarea Nodurilor",
    "theory": "Document Object Model (DOM) este reprezentarea în memorie, sub formă de arbore ierarhic de obiecte, a unui document HTML încărcat în browser. Când motorul de randare (precum Blink sau WebKit) parsează codul sursă HTML, fiecare etichetă, atribut și fragment de text este convertit într-un nod (Node) distinct, conectat prin relații de tip părinte-copil și frați (siblings). Obiectul global 'document' reprezintă punctul de intrare în această structură și oferă interfața programatică prin care JavaScript poate inspecta sau modifica pagina în timp real.\n\nÎn arhitectura DOM există o distincție fundamentală între noduri generice (Node) și elemente (Element). Orice etichetă HTML devine un nod de tip Element (de exemplu, HTMLElement), însă spațiile albe, întreruperile de linie și comentariile HTML sunt de asemenea păstrate în arbore sub formă de TextNode, respectiv CommentNode. Din acest motiv, proprietățile de navigare precum 'childNodes' returnează toate tipurile de noduri (inclusiv textul invizibil dintre tag-uri), în timp ce 'children' filtrează strict nodurile de tip Element.\n\nPentru interogarea modernă a arborelui DOM, metodele 'document.querySelector()' și 'document.querySelectorAll()' au înlocuit în mare măsură vechile apeluri 'getElementById' sau 'getElementsByClassName'. Avantajul major al metodei 'querySelectorAll' este că acceptă orice selector CSS3 complex și returnează o colecție statică de tip NodeList.\n\nDiferența dintre o colecție statică (NodeList returnat de querySelectorAll) și una dinamică (\"live\" HTMLCollection returnată de getElementsByClassName) este critică pentru performanță și prevenirea buclelor infinite. O colecție statică reprezintă un instantaneu (snapshot) al DOM-ului din momentul apelului: dacă ștergi sau adaugi ulterior elemente în pagină, lista din variabila JavaScript rămâne neschimbată.",
    "glossary": [
      {
        "term": "DOM Tree",
        "def": "Reprezentarea ierarhică în memorie a documentului HTML sub formă de noduri interconectate."
      },
      {
        "term": "Element vs Node",
        "def": "Node este clasa de bază (include text și comentarii), iar Element reprezintă strict etichetele HTML."
      },
      {
        "term": "Static NodeList",
        "def": "Colecție returnată de querySelectorAll care nu se modifică automat dacă DOM-ul este alterat ulterior."
      },
      {
        "term": "Live HTMLCollection",
        "def": "Colecție dinamică ce se actualizează instantaneu la orice modificare a arborelui DOM."
      }
    ],
    "example": "// Selectarea primului buton activ din interiorul unui container cu clasa .toolbar\nconst primaryBtn = document.querySelector('.toolbar button.active');\n\n// Selectarea tuturor cardurilor de produs (returnează un NodeList static)\nconst productCards = document.querySelectorAll('.product-grid > .card');\nproductCards.forEach(card => {\n  card.dataset.initialized = 'true';\n});",
    "prompt": "Selectează primul element din document care are atributul data-role setat pe 'modal' folosind metoda modernă bazată pe selectori CSS și salvează-l într-o constantă numită modalEl.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const modalEl = document.querySelector('[data-role=\"modal\"]');"
    ],
    "officialSolution": "const modalEl = document.querySelector('[data-role=\"modal\"]');",
    "explanation": "Folosește document.querySelector() împreună cu selectorul CSS de atribut între paranteze drepte: [data-role='modal'].",
    "hint": "Folosește document.querySelector() împreună cu selectorul CSS de atribut între paranteze drepte: [data-role='modal'].",
    "matchingPairs": [
      {
        "left": "querySelector",
        "right": "Returnează primul Element care corespunde unui selector CSS"
      },
      {
        "left": "querySelectorAll",
        "right": "Returnează un NodeList static cu toate elementele găsite"
      },
      {
        "left": "getElementsByClassName",
        "right": "Returnează o colecție HTMLCollection dinamică (live)"
      },
      {
        "left": "children",
        "right": "Proprietate care conține doar nodurile copii de tip Element"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă cu o colecție stocată într-o variabilă obținută prin document.querySelectorAll('.item') după ce ștergem un element '.item' din DOM?",
      "options": [
        "Dimensiunea colecției scade automat cu 1 în timp real",
        "Colecția rămâne neschimbată deoarece este un NodeList static",
        "Browserul aruncă o excepție de tip StaleElementReferenceException",
        "Toate referințele din listă devin automat null"
      ],
      "correctIndex": 1,
      "explanation": "Metoda querySelectorAll returnează un NodeList static (un snapshot al stării DOM-ului la momentul execuției), spre deosebire de getElementsByClassName care returnează o colecție live."
    }
  },
  {
    "id": "js-dom-2",
    "track": "JavaScript: DOM & Events",
    "division": "Informatică și Programare",
    "icon": "code",
    "level": "2. Junior",
    "xp": 30,
    "title": "Crearea, Inserarea și Manipularea Securizată a DOM-ului",
    "theory": "Modificarea dinamică a interfeței implică adesea crearea de noi noduri în memorie și atașarea lor în arborele vizibil al documentului. Metoda 'document.createElement(tagName)' instanțiază un obiect Element detașat (în afara DOM-ului activ), permițând configurarea claselor, atributelor și conținutului său înainte de a declanșa o operațiune costisitoare de recalculare a layout-ului (reflow/repaint) în browser.\n\nO decizie arhitecturală esențială în manipularea conținutului este alegerea între proprietățile 'innerHTML' și 'textContent'. În timp ce 'innerHTML' invocă parserul HTML pentru a interpreta șirul de caractere și a construi sub-arbori de noduri, acesta expune aplicația la vulnerabilități critice de tip Cross-Site Scripting (XSS) dacă șirul conține date introduse de utilizator. În schimb, 'textContent' tratează orice intrare strict ca text brut, escapând automat caracterele speciale precum '<' sau '>' și rulând semnificativ mai rapid.\n\nPentru inserarea efectivă în pagină, specificațiile DOM moderne oferă metode expresive precum 'append()', 'prepend()', 'before()' și 'after()', care acceptă atât noduri DOM, cât și șiruri de text direct, înlocuind clasicul 'appendChild()'. Mai mult, atunci când trebuie inserate sute de elemente simultan, utilizarea unui 'DocumentFragment' acționează ca un container ușor în memorie: elementele sunt adăugate în fragment, iar fragmentul este atașat în DOM printr-o singură operațiune de reflow.\n\nManipularea claselor CSS trebuie realizată prin interfața 'element.classList' (cu metodele 'add', 'remove', 'toggle', 'contains') în locul suprascrierii directe a șirului 'className'. Astfel se evită ștergerea accidentală a altor clase existente pe același element.",
    "glossary": [
      {
        "term": "textContent",
        "def": "Proprietate care setează sau citește textul brut dintr-un nod, prevenind injecțiile XSS."
      },
      {
        "term": "Reflow (Layout)",
        "def": "Procesul prin care browserul recalculează pozițiile și dimensiunile geometrice ale elementelor."
      },
      {
        "term": "DocumentFragment",
        "def": "Container DOM invizibil în memorie folosit pentru gruparea inserărilor multiple într-un singur reflow."
      },
      {
        "term": "classList.toggle",
        "def": "Metodă care adaugă o clasă CSS dacă nu există sau o elimină dacă este deja prezentă."
      }
    ],
    "example": "const alertBox = document.createElement('div');\nalertBox.classList.add('notification', 'notification--warning');\n// Utilizare sigură împotriva XSS:\nalertBox.textContent = 'Sesiunea ta expiră în 2 minute.';\n\nconst container = document.querySelector('#app-header');\ncontainer.prepend(alertBox);",
    "prompt": "Pe un element stocat în variabila 'card', comută (adaugă dacă lipsește, șterge dacă există) clasa CSS 'is-expanded' folosind API-ul dedicat pentru clase.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "card.classList.toggle('is-expanded');"
    ],
    "officialSolution": "card.classList.toggle('is-expanded');",
    "explanation": "Accesează proprietatea classList a elementului 'card' și apelează metoda care inversează starea unei clase.",
    "hint": "Accesează proprietatea classList a elementului 'card' și apelează metoda care inversează starea unei clase.",
    "matchingPairs": [
      {
        "left": "textContent",
        "right": "Scrie text sigur fără a interpreta etichete HTML"
      },
      {
        "left": "innerHTML",
        "right": "Parsează șiruri HTML dar prezintă risc de XSS pe input extern"
      },
      {
        "left": "document.createElement",
        "right": "Alocă în memorie un nou nod Element neatașat încă"
      },
      {
        "left": "DocumentFragment",
        "right": "Optimizează inserarea în lot (batch) a multor noduri"
      }
    ],
    "quiz": {
      "question": "De ce este preferată proprietatea 'textContent' în detrimentul 'innerHTML' atunci când afișăm numele unui utilizator preluat dintr-un formular?",
      "options": [
        "Pentru că textContent aplică automat stiluri CSS de bază",
        "Pentru că textContent nu invocă parserul HTML și blochează execuția de scripturi malițioase (XSS)",
        "Pentru că innerHTML funcționează doar pe elemente de tip <div>",
        "Pentru că textContent păstrează tag-urile <b> și <i> active"
      ],
      "correctIndex": 1,
      "explanation": "Proprietatea textContent inserează șirul strict ca nod de text (TextNode), dezactivând orice încercare de injectare a etichetelor <script> sau a atributelor onerror."
    }
  },
  {
    "id": "js-dom-3",
    "track": "JavaScript: DOM & Events",
    "division": "Informatică și Programare",
    "icon": "layers",
    "level": "3. Middle",
    "xp": 30,
    "title": "Propagarea Evenimentelor: Bubbling, Capturing și Event Delegation",
    "theory": "Atunci când un eveniment (precum un click) are loc pe un element DOM, acesta nu se rezumă doar la nodul țintă, ci parcurge un ciclu de viață standardizat în trei faze conform specificației W3C UI Events. Prima este faza de Capturare (Capturing Phase), în care evenimentul coboară de la 'window' și 'document' prin toți strămoșii până la elementul țintă. A doua este faza Țintă (Target Phase), iar a treia este faza dePropagare Ascendentă (Bubbling Phase), în care evenimentul urcă înapoi spre rădăcina documentului.\n\nÎn cadrul funcției de tratare (handler), obiectul 'event' expune două proprietăți esențiale care sunt adesea confundate: 'event.target' și 'event.currentTarget'. Proprietatea 'event.target' indică întotdeauna elementul cel mai adânc din DOM pe care utilizatorul a dat efectiv click, în timp ce 'event.currentTarget' (echivalent cu 'this' în funcțiile clasice) referă elementul pe care a fost atașat ascultătorul 'addEventListener'.\n\nMecanismul de Bubbling stă la baza unuia dintre cele mai puternice șabloane de proiectare din frontend: Delegarea Evenimentelor (Event Delegation). În loc să atașăm câte un 'addEventListener' pe fiecare din cele 500 de butoane ale unui tabel (consumând memorie și pierzând referințele la randarea de rânduri noi), atașăm un singur ascultător pe containerul părinte ('<tbody>').\n\nÎn interiorul ascultătorului de pe părinte, folosim metoda 'event.target.closest(selector)' pentru a verifica dacă click-ul a pornit din interiorul unui element de interes (de exemplu, un buton cu o pictogramă SVG înăuntru) și executăm logica aferentă. Dacă este necesară oprirea propagării către nivelurile superioare, se poate apela 'event.stopPropagation()', iar pentru anularea comportamentului nativ al browserului (cum ar fi reîncărcarea paginii la trimiterea unui formular), se apelează 'event.preventDefault()'.",
    "glossary": [
      {
        "term": "Event Bubbling",
        "def": "Propagarea ascendentă a unui eveniment de la elementul țintă către strămoșii săi până la window."
      },
      {
        "term": "event.target",
        "def": "Elementul concret și cel mai profund din DOM care a declanșat inițial evenimentul."
      },
      {
        "term": "event.currentTarget",
        "def": "Elementul pe care este înregistrat efectiv handlerul addEventListener în execuție."
      },
      {
        "term": "Event Delegation",
        "def": "Tehnică de atașare a unui singur listener pe un container părinte pentru a gestiona evenimentele copiilor."
      }
    ],
    "example": "const todoList = document.querySelector('#todo-list');\n\n// Event Delegation pe containerul <ul>\ntodoList.addEventListener('click', (event) => {\n  const deleteBtn = event.target.closest('.btn-delete');\n  if (!deleteBtn) return; // Click-ul nu a fost pe un buton de ștergere\n  \n  const itemRow = deleteBtn.closest('li');\n  itemRow.remove();\n});",
    "prompt": "În interiorul unui handler de eveniment unde parametrul este numit 'e', oprește comportamentul nativ al browserului (de exemplu, trimiterea unui formular sau deschiderea unui link).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "e.preventDefault();"
    ],
    "officialSolution": "e.preventDefault();",
    "explanation": "Apelează metoda standard de pe obiectul eveniment 'e' care previne acțiunea implicită (default).",
    "hint": "Apelează metoda standard de pe obiectul eveniment 'e' care previne acțiunea implicită (default).",
    "matchingPairs": [
      {
        "left": "event.preventDefault()",
        "right": "Anulează acțiunea implicită a browserului (ex: submit la form)"
      },
      {
        "left": "event.stopPropagation()",
        "right": "Oprește urcarea evenimentului către elementele părinte"
      },
      {
        "left": "event.target",
        "right": "Elementul exact pe care s-a produs interacțiunea inițială"
      },
      {
        "left": "element.closest()",
        "right": "Caută în sus pe arborele DOM cel mai apropiat strămoș potrivit"
      }
    ],
    "quiz": {
      "question": "De ce folosim 'event.target.closest(\"button\")' în loc de 'event.target.tagName === \"BUTTON\"' în șablonul Event Delegation?",
      "options": [
        "Deoarece tagName returnează litere mici în HTML5",
        "Deoarece utilizatorul poate da click pe un <span> sau <svg> aflat în interiorul butonului, caz în care event.target este copilul, nu butonul",
        "Deoarece closest() oprește automat propagarea evenimentului",
        "Deoarece tagName nu funcționează în faza de Bubbling"
      ],
      "correctIndex": 1,
      "explanation": "Dacă un buton conține o iconiță sau un span, click-ul va avea ca event.target acel element intern. Metoda closest('button') urcă în ierarhie și identifică corect butonul părinte."
    }
  },
  {
    "id": "js-dom-4",
    "track": "JavaScript: DOM & Events",
    "division": "Informatică și Programare",
    "icon": "cpu",
    "level": "4. Senior",
    "xp": 30,
    "title": "Event Loop, Microtask Queue și Arhitectura Promises",
    "theory": "JavaScript este un limbaj single-threaded (cu un singur fir de execuție pentru stiva de apeluri — Call Stack), însă reușește să gestioneze operațiuni I/O neblocante prin arhitectura Event Loop oferită de mediul gazdă (browser sau Node.js). Când o operațiune asincronă (precum un timer, o cerere de rețea sau o promisiune) se finalizează, callback-ul său nu întrerupe codul sincron în curs, ci este plasat într-o coadă de așteptare.\n\nEsential pentru nivelul Senior este înțelegerea faptului că există două cozi cu priorități diferite: Macrotask Queue (sau Task Queue, care conține callbacks din 'setTimeout', 'setInterval', evenimente DOM) și Microtask Queue (care conține rezolvările de 'Promise.then/catch/finally' și 'queueMicrotask'). Regula de aur a Event Loop-ului este că, imediat ce Call Stack-ul devine complet gol, motorul JS golește ÎNTREAGA coadă de Microtasks înainte de a executa fie și un singur Macrotask sau de a permite browserului să redeseneze ecranul (render).\n\nUn obiect 'Promise' modelează rezultatul viitor al unei operațiuni asincrone și poate exista în exact una din cele trei stări: 'pending' (în așteptare), 'fulfilled' (îndeplinită cu o valoare) sau 'rejected' (respinsă cu o eroare). Odată ce o promisiune trece în starea 'fulfilled' sau 'rejected', ea devine 'settled' (stabilită), iar starea ei este imutabilă — nu mai poate fi schimbată niciodată.\n\nPentru orchestrarea concurenței, metodele statice oferă comportamente distincte: 'Promise.all()' rulează promisiunile în paralel și eșuează imediat (short-circuit) dacă oricare dintre ele este respinsă, în timp ce 'Promise.allSettled()' așteaptă finalizarea tuturor promisiunilor, returnând un tablou de obiecte cu proprietatea 'status' ('fulfilled' sau 'rejected') pentru fiecare.",
    "glossary": [
      {
        "term": "Call Stack",
        "def": "Stiva LIFO pe un singur fir de execuție unde sunt împinse și executate cadrele funcțiilor sincrone."
      },
      {
        "term": "Microtask Queue",
        "def": "Coadă de înaltă prioritate (Promises) procesată integral imediat după golirea Call Stack-ului."
      },
      {
        "term": "Macrotask Queue",
        "def": "Coadă de prioritate standard (setTimeout, I/O, UI events) din care se preia câte un task per ciclu."
      },
      {
        "term": "Promise.allSettled",
        "def": "Combinator care așteaptă finalizarea tuturor promisiunilor fără a arunca eroare la primul eșec."
      }
    ],
    "example": "console.log('1. Sincron Start');\n\nsetTimeout(() => console.log('4. Macrotask (setTimeout 0ms)'), 0);\n\nPromise.resolve()\n  .then(() => console.log('3. Microtask (Promise.then)'));\n\nconsole.log('2. Sincron End');\n// Ordinea garantată în consolă: 1 -> 2 -> 3 -> 4",
    "prompt": "Folosește metoda statică a clasei Promise care așteaptă executarea în paralel a tabloului '[p1, p2]' și se respinge imediat dacă oricare promisiune eșuează.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "Promise.all([p1, p2]);"
    ],
    "officialSolution": "Promise.all([p1, p2]);",
    "explanation": "Apelează metoda statică Promise.all() trecând ca argument tabloul cu cele două promisiuni.",
    "hint": "Apelează metoda statică Promise.all() trecând ca argument tabloul cu cele două promisiuni.",
    "matchingPairs": [
      {
        "left": "Promise.all",
        "right": "Rezolvă când toate reușesc sau eșuează instant la prima respingere"
      },
      {
        "left": "Promise.allSettled",
        "right": "Așteaptă toate promisiunile indiferent dacă reușesc sau eșuează"
      },
      {
        "left": "Promise.race",
        "right": "Preia rezultatul sau eroarea primei promisiuni care se finalizează"
      },
      {
        "left": "Microtask Queue",
        "right": "Are prioritate absolută față de setTimeout(..., 0)"
      }
    ],
    "quiz": {
      "question": "În ce ordine vor fi afișate mesajele dacă executăm: setTimeout(() => log('A'), 0); Promise.resolve().then(() => log('B')); log('C'); ?",
      "options": [
        "A, B, C",
        "C, A, B",
        "C, B, A",
        "B, C, A"
      ],
      "correctIndex": 2,
      "explanation": "Codul sincron ('C') se execută primul pe Call Stack. Apoi Event Loop golește Microtask Queue unde se află Promise.then ('B'), și abia la final preia următorul Macrotask din setTimeout ('A')."
    }
  },
  {
    "id": "js-dom-5",
    "track": "JavaScript: DOM & Events",
    "division": "Informatică și Programare",
    "icon": "globe",
    "level": "5. Exemplar",
    "xp": 30,
    "title": "Fetch API, Fluxuri de Date și Anularea Cererilor cu AbortController",
    "theory": "Interfața modernă 'fetch()' oferă un mecanism bazat pe Promises pentru efectuarea cererilor HTTP asincrone, înlocuind arhitectura greoaie 'XMLHttpRequest'. Un detaliu critic, care surprinde mulți dezvoltatori, este modul în care 'fetch' gestionează erorile HTTP: promisiunea returnată de 'fetch()' este respinsă (intră pe blocul 'catch') DOAR în cazul unei erori de rețea (de exemplu, lipsa conexiunii DNS sau CORS blocat). Codurile de eroare de la server precum 404 Not Found sau 500 Internal Server Error rezolvă promisiunea normal, dar setează proprietatea 'response.ok' pe 'false'.\n\nProcesarea răspunsului se desfășoară în două etape asincrone distincte. Primul 'await fetch(url)' rezolvă obiectul 'Response' imediat ce antetele (headers) HTTP au sosit de la server, înainte ca întregul corp (body) al răspunsului să fie descărcat. A doua etapă, 'await response.json()' (sau '.text()', '.blob()'), citește fluxul de octeți (ReadableStream) din rețea și îl parsează în memorie.\n\nÎn aplicațiile de producție (de exemplu, la implementarea unui câmp de căutare cu auto-complete sau la schimbarea rapidă a paginilor într-un SPA), cererile HTTP anterioare rămase în zbor pot sosi mai târziu decât ultima cerere, provocând condiții de cursă (Race Conditions) și suprascrierea stării cu date învechite. Pentru a preveni acest defect, JavaScript pune la dispoziție clasa nativă 'AbortController'.\n\nO instanță 'const controller = new AbortController()' expune o proprietate 'controller.signal' care se transmite în obiectul de configurare 'fetch(url, { signal: controller.signal })'. Apelarea metodei 'controller.abort()' întrerupe instantaneu conexiunea TCP/HTTP activă în browser și respinge promisiunea 'fetch' cu o excepție de tip 'AbortError', economisind lățime de bandă și protejând integritatea stării UI.",
    "glossary": [
      {
        "term": "response.ok",
        "def": "Boolean care este true doar dacă statusul HTTP se află în intervalul de succes 200-299."
      },
      {
        "term": "AbortController",
        "def": "Obiect nativ folosit pentru a semnaliza și întrerupe una sau mai multe cereri asincrone Fetch."
      },
      {
        "term": "Race Condition",
        "def": "Defect în care două cereri concurente se termină în altă ordine decât cea în care au fost lansate."
      },
      {
        "term": "ReadableStream",
        "def": "Fluxul de date brute al corpului HTTP consumat asincron prin metode precum response.json()."
      }
    ],
    "example": "const controller = new AbortController();\n\nasync function loadUserProfile(userId) {\n  try {\n    const res = await fetch(`/api/users/${userId}`, { signal: controller.signal });\n    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);\n    return await res.json();\n  } catch (err) {\n    if (err.name === 'AbortError') {\n      console.log('Cererea a fost anulată intenționat.');\n    }\n  }\n}\n// Anulare la părăsirea paginii:\ncontroller.abort();",
    "prompt": "Instanțiază un nou obiect AbortController într-o constantă numită 'ctrl' pentru a putea anula ulterior o cerere fetch.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const ctrl = new AbortController();"
    ],
    "officialSolution": "const ctrl = new AbortController();",
    "explanation": "Folosește operatorul 'new' împreună cu constructorul nativ AbortController().",
    "hint": "Folosește operatorul 'new' împreună cu constructorul nativ AbortController().",
    "matchingPairs": [
      {
        "left": "response.ok",
        "right": "Verifică dacă statusul HTTP este între 200 și 299"
      },
      {
        "left": "response.json()",
        "right": "Citește stream-ul HTTP și îl parsează asincron ca obiect JS"
      },
      {
        "left": "controller.signal",
        "right": "Proprietate transmisă în opțiunile fetch pentru legarea controlerului"
      },
      {
        "left": "controller.abort()",
        "right": "Întrerupe cererea de rețea și aruncă o eroare de tip AbortError"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă când serverul răspunde cu statusul 404 Not Found la un apel 'await fetch(\"/api/data\")'?",
      "options": [
        "Promisiunea fetch este respinsă automat și execuția sare direct în blocul catch",
        "Promisiunea se rezolvă normal, dar proprietatea response.ok va avea valoarea false",
        "Metoda fetch returnează valoarea null fără a arunca eroare",
        "Browserul reîncearcă automat cererea de 3 ori înainte de a arunca eroare"
      ],
      "correctIndex": 1,
      "explanation": "Fetch respinge promisiunea doar la eșecuri de rețea (network failure). Răspunsurile 4xx și 5xx sunt considerate răspunsuri HTTP valide și trebuie verificate prin 'if (!response.ok)'."
    }
  },
  {
    "id": "cpp-sys-1",
    "track": "C & C++ Systems Engineering",
    "division": "Informatică și Programare",
    "icon": "cpu",
    "level": "1. Începător",
    "xp": 30,
    "title": "Modelul de Memorie: Stack vs Heap, Variabile și Adrese",
    "theory": "În C și C++, înțelegerea modului în care programul interacționează cu memoria fizică (RAM) este fundamentală. Spațiul de adrese al unui proces este împărțit în mai multe segmente, dintre care cele mai importante pentru execuția dinamică sunt Stiva (Stack) și Grămada (Heap / Free Store). Fiecare variabilă declarată în cod ocupă un număr precis de octeți consecutivi în memorie, identificabili printr-o adresă hexazecimală unică.\n\nStiva (Stack) este o zonă de memorie extrem de rapidă, gestionată automat de către procesor prin registrul Stack Pointer. Când o funcție este apelată, un nou cadru de stivă (Stack Frame) este alocat instantaneu pentru toate variabilele sale locale. În momentul în care execuția părăsește blocul funcției (la acolada închisă '}'), cadrul de stivă este eliberat automat în timp constant O(1), fără costuri suplimentare de gestiune. Totuși, dimensiunea stivei este strict limitată (de regulă între 1 MB și 8 MB).\n\nHeap-ul (Free Store), în schimb, reprezintă o rezervă vastă de memorie globală a sistemului, limitată doar de memoria RAM/virtuală disponibilă. Alocarea pe Heap este solicitată explicit de programator în timpul execuției (runtime) prin operatorul 'new' în C++ (sau 'malloc' în C) și persistă până când este eliberată manual prin 'delete' (sau 'free'), ori până la terminarea procesului.\n\nPentru a inspecta adresa fizică la care este stocată o variabilă, C++ oferă operatorul unar address-of ('&'). Când este aplicat unei variabile (de exemplu, '&x'), acesta nu returnează valoarea stocată, ci adresa de început a blocului de memorie, în timp ce operatorul 'sizeof()' este evaluat în timpul compilării (compile-time) pentru a determina exact câți octeți ocupă un tip de date pe arhitectura țintă.",
    "glossary": [
      {
        "term": "Stack (Stiva)",
        "def": "Memorie rapidă LIFO cu alocare și dezalocare automată la intrarea și ieșirea din funcții."
      },
      {
        "term": "Heap (Free Store)",
        "def": "Memorie dinamică de mari dimensiuni, alocată și eliberată explicit la runtime."
      },
      {
        "term": "Operatorul & (Address-of)",
        "def": "Operator unar care returnează adresa de memorie în care locuiește o variabilă."
      },
      {
        "term": "Stack Overflow",
        "def": "Eroare fatală cauzată de epuizarea stivei prin recursivitate infinită sau alocări locale uriașe."
      }
    ],
    "example": "#include <iostream>\n\nint main() {\n    int score = 42; // Alocat pe Stack (de obicei 4 octeți)\n    std::cout << \"Valoare: \" << score << \"\\n\";\n    std::cout << \"Adresa RAM: \" << &score << \"\\n\";\n    std::cout << \"Dimensiune (bytes): \" << sizeof(score) << \"\\n\";\n    return 0;\n}",
    "prompt": "Afișează la consola standard (std::cout) adresa de memorie a variabilei 'total' (fără newline la final).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::cout << &total;"
    ],
    "officialSolution": "std::cout << &total;",
    "explanation": "Folosește std::cout << împreună cu operatorul address-of (&) aplicat înaintea numelui variabilei.",
    "hint": "Folosește std::cout << împreună cu operatorul address-of (&) aplicat înaintea numelui variabilei.",
    "matchingPairs": [
      {
        "left": "Stack",
        "right": "Alocare automată ultra-rapidă legată de durata de viață a blocului {}"
      },
      {
        "left": "Heap",
        "right": "Memorie alocată dinamic la runtime care necesită eliberare explicită"
      },
      {
        "left": "&variabila",
        "right": "Expresie care evaluează adresa de memorie a unei variabile"
      },
      {
        "left": "sizeof(int)",
        "right": "Operator evaluat la compilare care returnează numărul de octeți"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă cu o variabilă locală obișnuită 'int count = 10;' alocată pe Stack în momentul în care funcția în care a fost declarată se încheie?",
      "options": [
        "Rămâne în memorie până când rulăm manual delete count;",
        "Este mutată automat pe Heap de către compilator",
        "Memoria ei este eliberată automat și instantaneu prin retragerea Stack Pointer-ului",
        "Este ștearsă de Garbage Collector la următorul ciclu de pauză"
      ],
      "correctIndex": 2,
      "explanation": "Variabilele cu durată de stocare automată (pe Stack) sunt distruse imediat ce părăsesc domeniul de vizibilitate (scope), prin simpla ajustare a registrului Stack Pointer."
    }
  },
  {
    "id": "cpp-sys-2",
    "track": "C & C++ Systems Engineering",
    "division": "Informatică și Programare",
    "icon": "terminal",
    "level": "2. Junior",
    "xp": 30,
    "title": "Pointeri Bruti (Raw Pointers), Dereferențiere și nullptr",
    "theory": "Un pointer este o variabilă specializată a cărei valoare este adresa de memorie a unei alte entități. În C++, declararea unui pointer asociază tipul datelor spre care indică cu simbolul asterisc, de exemplu 'int* ptr;'. Tipul pointerului este esențial: deși pe o arhitectură pe 64 de biți orice pointer ocupă exact 8 octeți (indiferent dacă este 'char*' sau 'double*'), tipul îi spune compilatorului câți octeți să citească la accesarea adresei și cum să efectueze aritmetica pointerilor.\n\nOperația fundamentală asupra unui pointer este dereferențierea, realizată prin operatorul unar '*' aplicat unei variabile pointer deja declarate (de exemplu, '*ptr = 100;'). Dereferențierea instruiește procesorul să sară la adresa de memorie stocată în pointer și să citească sau să modifice direct valoarea aflată în acea locație fizică.\n\nUnul dintre cele mai periculoase defecte în C/C++ este utilizarea unui pointer neinițializat (Wild Pointer), care conține o adresă reziduală aleatorie din RAM, sau a unui Dangling Pointer, care indică spre o zonă de memorie ce a fost deja eliberată. Dereferențierea acestora produce comportament nedefinit (Undefined Behavior) și, de regulă, prăbușirea procesului cu eroarea 'Segmentation Fault'.\n\nÎncepând cu standardul C++11, literalul 'nullptr' (de tip 'std::nullptr_t') a înlocuit macro-ul C 'NULL' și constanta întreagă '0'. Utilizarea 'nullptr' garantează siguranța tipurilor (type safety) în cazul supraîncărcării funcțiilor (function overloading) și semnalează explicit că pointerul nu indică spre nicio adresă validă în acest moment.",
    "glossary": [
      {
        "term": "Dereferențiere (*ptr)",
        "def": "Accesarea sau modificarea valorii stocate efectiv la adresa de memorie către care indică pointerul."
      },
      {
        "term": "nullptr",
        "def": "Literal introdus în C++11 care reprezintă o adresă nulă sigură din punct de vedere al tipului."
      },
      {
        "term": "Dangling Pointer",
        "def": "Pointer care continuă să rețină adresa unei zone de memorie după ce aceasta a fost deja dezalocată."
      },
      {
        "term": "Wild Pointer",
        "def": "Pointer declarat dar neinițializat, care conține o adresă reziduală imprevizibilă."
      }
    ],
    "example": "int health = 100;\nint* pHealth = &health; // pHealth reține adresa variabilei health\n\nif (pHealth != nullptr) {\n    *pHealth -= 25; // Dereferențiere: modifică direct variabila health la 75\n}",
    "prompt": "Declară un pointer la tipul 'double' numit 'pPrice' și inițializează-l în siguranță cu valoarea nulă standard din C++11.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "double* pPrice = nullptr;"
    ],
    "officialSolution": "double* pPrice = nullptr;",
    "explanation": "Folosește tipul 'double*', numele 'pPrice' și cuvântul cheie dedicat din C++11 pentru pointeri nuli.",
    "hint": "Folosește tipul 'double*', numele 'pPrice' și cuvântul cheie dedicat din C++11 pentru pointeri nuli.",
    "matchingPairs": [
      {
        "left": "int* p = &x;",
        "right": "Inițializează pointerul p cu adresa de memorie a variabilei x"
      },
      {
        "left": "*p = 50;",
        "right": "Dereferențiază pointerul pentru a scrie valoarea 50 la adresa țintă"
      },
      {
        "left": "nullptr",
        "right": "Literal C++11 care indică absența unei adrese valide"
      },
      {
        "left": "Dangling Pointer",
        "right": "Pointer care indică spre un bloc de memorie deja șters"
      }
    ],
    "quiz": {
      "question": "Câți octeți ocupă în sine o variabilă pointer 'char* p' față de 'double* d' pe un sistem de operare modern pe 64 de biți?",
      "options": [
        "char* ocupă 1 octet, iar double* ocupă 8 octeți",
        "Ambii pointeri ocupă exact 8 octeți, deoarece amândoi stochează o adresă de memorie pe 64 de biți",
        "char* ocupă 4 octeți, iar double* ocupă 16 octeți",
        "Dimensiunea unui pointer variază dinamic în funcție de valoarea stocată"
      ],
      "correctIndex": 1,
      "explanation": "Un pointer stochează o adresă de memorie. Pe o arhitectură pe 64 de biți (8 octeți), toate adresele au aceeași lungime, indiferent de dimensiunea tipului de date spre care indică."
    }
  },
  {
    "id": "cpp-sys-3",
    "track": "C & C++ Systems Engineering",
    "division": "Informatică și Programare",
    "icon": "code",
    "level": "3. Middle",
    "xp": 30,
    "title": "Referințe L-value, Transmiterea Parametrilor și Const Correctness",
    "theory": "O referință în C++ (declarată cu simbolul '&', de exemplu 'int& ref = original;') este un alias la nivel de compilator pentru o variabilă existentă. Spre deosebire de pointeri, o referință NU poate fi nulă, trebuie obligatoriu inițializată în momentul declarării și nu poate fi reasignată ulterior pentru a referi un alt obiect. Orice operațiune efectuată asupra referinței se aplică direct asupra variabilei originale, fără sintaxă de dereferențiere.\n\nCea mai importantă aplicație a referințelor este transmiterea parametrilor către funcții. În mod implicit, C++ transmite argumentele prin valoare (Pass-by-Value), ceea ce înseamnă că la apelul unei funcții se creează o copie completă a obiectului pe stivă. Dacă transmitem un obiect mare (precum un 'std::vector<std::string>' cu 100.000 de elemente) prin valoare, programul va aloca memorie și va copia fiecare element, degradând sever performanța.\n\nSoluția standard în ingineria C++ este transmiterea prin referință constantă: 'void processData(const std::vector<int>& data)'. Această semnătură oferă viteza maximă a unui pointer (se transmite doar o adresă în spate, zero copieri de date), sintaxa curată a unei variabile normale și garanția strictă verificată la compilare ('const') că funcția nu poate modifica obiectul original al apelantului.\n\nConceptul de 'Const Correctness' (corectitudinea utilizării calificatorului const) se extinde și asupra metodelor unei clase. Marcarea unei metode cu 'const' la sfârșitul antetului său (de exemplu, 'int getBalance() const;') garantează că metoda nu va modifica niciun atribut membru al obiectului ('this' devine un pointer la constantă) și permite apelarea acelei metode pe obiecte constante.",
    "glossary": [
      {
        "term": "L-value Reference (T&)",
        "def": "Alias obligatoriu inițializat și imutabil ca țintă pentru un obiect existent în memorie."
      },
      {
        "term": "Pass-by-Const-Reference",
        "def": "Transmiterea parametrilor ca 'const T&' pentru a evita copierea costisitoare și a proteja originalul."
      },
      {
        "term": "Const Correctness",
        "def": "Practică de proiectare prin care toate datele și metodele care nu modifică starea sunt marcate const."
      },
      {
        "term": "Pass-by-Value",
        "def": "Mecanismul implicit prin care o funcție primește o copie independentă a argumentului."
      }
    ],
    "example": "#include <string>\n#include <iostream>\n\n// Zero copieri de memorie + protecție la scriere:\nvoid printUserLog(const std::string& username) {\n    std::cout << \"[LOG]: \" << username << \"\\n\";\n}",
    "prompt": "Scrie antetul (fără corp/acolade) unei funcții 'void' numite 'render' care primește un parametru 'std::string' numit 'title' transmis prin referință constantă.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "void render(const std::string& title)"
    ],
    "officialSolution": "void render(const std::string& title)",
    "explanation": "Folosește 'void render(const std::string& title)' pentru a combina calificatorul const cu referința (&).",
    "hint": "Folosește 'void render(const std::string& title)' pentru a combina calificatorul const cu referința (&).",
    "matchingPairs": [
      {
        "left": "void fn(int x)",
        "right": "Creează o copie locală; modificările nu afectează originalul"
      },
      {
        "left": "void fn(int& x)",
        "right": "Permite funcției să modifice direct variabila apelantului fără copiere"
      },
      {
        "left": "void fn(const BigObj& x)",
        "right": "Evită copierea obiectului și interzice modificarea lui în funcție"
      },
      {
        "left": "int getVal() const",
        "right": "Metodă de clasă care promite să nu altereze atributele obiectului"
      }
    ],
    "quiz": {
      "question": "Care dintre următoarele afirmații despre referințele C++ ('int& r') este ADEVĂRATĂ în comparație cu pointerii ('int* p')?",
      "options": [
        "O referință poate fi inițializată cu nullptr dacă nu avem încă o variabilă",
        "O referință trebuie inițializată la declarare și nu poate fi redirecționată ulterior spre altă variabilă",
        "Referințele ocupă de două ori mai multă memorie decât pointerii",
        "Referințele necesită operatorul * pentru a le citi valoarea"
      ],
      "correctIndex": 1,
      "explanation": "O referință C++ este un alias imutabil care trebuie legat de o variabilă la declarare și nu poate fi redirecționat sau setat la nullptr."
    }
  },
  {
    "id": "cpp-sys-raii",
    "track": "C & C++ Systems Engineering",
    "division": "Informatică și Programare",
    "icon": "⚙️",
    "level": "Mid-Level / Nivel 3",
    "xp": 30,
    "title": "Capitolul 3: Alocare Dinamică, Stack vs. Heap și Principiul RAII",
    "theory": "În C și C++, memoria este împărțită fundamental în două zone de execuție:\n1. **Stack (Stiva):** Alocare ultra-rapidă (LIFO), gestionată automat de compilator. Variabilele locale sunt distruse imediat la ieșirea din scope (`}`).\n2. **Heap (Free Store):** Memorie alocată dinamic la runtime (prin `malloc`/`free` în C sau `new`/`delete` în C++). Oferă flexibilitate pentru structuri mari de date, dar responsabilitatea eliberării îi revine programatorului.\n\n**Principiul RAII (Resource Acquisition Is Initialization):**\nEste pilonul central al C++-ului modern. RAII garantează că o resursă (memorie pe Heap, fișier deschis, socket, mutex) este legată de durata de viață a unui obiect alocat pe Stack:\n- Resursa este achiziționată în **constructor**.\n- Resursa este eliberată garantat în **destructor** (`~ClassName()`), chiar și în cazul în care apare o excepție.",
    "glossary": [
      {
        "term": "RAII",
        "def": "Resource Acquisition Is Initialization: eliberarea resursei este legată de destructorul pe stivă."
      },
      {
        "term": "Stack",
        "def": "Memorie ultra-rapidă (LIFO) eliberată automat la ieșirea din acolade."
      },
      {
        "term": "Heap",
        "def": "Memorie dinamică alocată cu new și eliberată obligatoriu cu delete/delete[]."
      },
      {
        "term": "Rule of Three/Five",
        "def": "Dacă implementezi un destructor, trebuie să definești copy/move constructor și operator=."
      }
    ],
    "example": "#include <iostream>\n\nclass BufferRAII {\nprivate:\n    int* data;\n    size_t size;\npublic:\n    explicit BufferRAII(size_t s) : size(s), data(new int[s]) {\n        std::cout << \"Memorie alocata pe Heap: \" << size << \" elemente\\n\";\n    }\n    // Destructor: apelat automat la iesirea din scope\n    ~BufferRAII() {\n        delete[] data;\n        std::cout << \"Memorie eliberata sigur!\\n\";\n    }\n    // Dezactivam copierea superficiala (Rule of Three/Five)\n    BufferRAII(const BufferRAII&) = delete;\n    BufferRAII& operator=(const BufferRAII&) = delete;\n};",
    "prompt": "Eliberează corect în C++ un array alocat dinamic pe Heap prin pointerul \"arr\" (alocat cu new int[100]).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "delete[] arr;"
    ],
    "officialSolution": "delete[] arr;",
    "explanation": "Pentru array-uri alocate cu new[], folosește operatorul delete[] urmat de numele pointerului.",
    "hint": "Pentru array-uri alocate cu new[], folosește operatorul delete[] urmat de numele pointerului.",
    "matchingPairs": [
      {
        "left": "Stack",
        "right": "Eliberare automată instantanee la final de scope"
      },
      {
        "left": "Heap",
        "right": "Memorie flexibilă alocată manual la runtime"
      },
      {
        "left": "RAII",
        "right": "Constructorul alocă, destructorul dezalocă garantat"
      },
      {
        "left": "delete[] arr;",
        "right": "Eliberează un array alocat pe Heap cu new[]"
      }
    ],
    "quiz": {
      "question": "Care este beneficiul principal al principiului RAII în C++?",
      "options": [
        "Elimină complet utilizarea compilatorului C++",
        "Garantează eliberarea resurselor chiar dacă apare o excepție în cod",
        "Face programul să ruleze direct în mașina virtuală Java",
        "Dublează viteza ceasului procesorului la rulare"
      ],
      "correctIndex": 1,
      "explanation": "RAII garantează că destructorii obiectelor locale de pe stivă sunt apelați întotdeauna la ieșirea din scope (stack unwinding), prevenind scurgerile de memorie."
    }
  },
  {
    "id": "cpp-sys-4",
    "track": "C & C++ Systems Engineering",
    "division": "Informatică și Programare",
    "icon": "⚙️",
    "level": "Senior / Nivel 4",
    "xp": 40,
    "title": "Capitolul 4: Smart Pointers (std::unique_ptr, std::shared_ptr, std::weak_ptr)",
    "theory": "Începând cu C++11/C++14, utilizarea manuală a lui `new` și `delete` în codul de aplicație este considerată un anti-pattern. Header-ul `<memory>` introduce **Smart Pointers** — wrapper-e RAII peste pointerii clasici:\n\n1. **`std::unique_ptr<T>` (Proprietate Exclusivă):**\n   - Un singur `unique_ptr` poate deține resursa la un moment dat.\n   - **Nu poate fi copiat** (copy constructor-ul este `= delete`), dar **poate fi mutat** cu `std::move()`.\n   - Zero overhead față de un raw pointer. Se creează cu `std::make_unique<T>(args...)`.\n\n2. **`std::shared_ptr<T>` (Proprietate Partajată prin Reference Counting):**\n   - Mai mulți pointeri pot indica spre aceeași resursă.\n   - Menține un **Control Block** thread-safe cu un contor de referințe (`use_count()`).\n   - Obiectul este distrus automat doar când ultimul `shared_ptr` iese din scope (contorul ajunge la 0). Se creează optim cu `std::make_shared<T>(args...)`.\n\n3. **`std::weak_ptr<T>`:**\n   - Observator non-owning peste un `shared_ptr`, folosit pentru a preveni **referințele circulare** (memory leaks între două noduri care se referă reciproc).",
    "glossary": [
      {
        "term": "std::unique_ptr",
        "def": "Smart pointer cu proprietate exclusivă: nu poate fi copiat, doar mutat cu std::move()."
      },
      {
        "term": "std::shared_ptr",
        "def": "Smart pointer partajat: folosește reference counting și șterge obiectul când contorul ajunge la 0."
      },
      {
        "term": "std::weak_ptr",
        "def": "Observator non-owning care previne referințele circulare între shared_ptr-uri."
      },
      {
        "term": "std::make_unique",
        "def": "Funcție helper introdusă în C++14 pentru alocarea sigură a unui unique_ptr."
      }
    ],
    "example": "#include <memory>\n#include <iostream>\n\nstruct Engine {\n    int horsepower;\n    explicit Engine(int hp) : horsepower(hp) {}\n};\n\nvoid manageResources() {\n    // 1. Proprietate exclusiva (recomandat in 90% din cazuri)\n    auto uPtr = std::make_unique<Engine>(450);\n    auto movedPtr = std::move(uPtr); // uPtr devine nullptr\n\n    // 2. Proprietate partajata (Reference Count = 1)\n    auto sPtr1 = std::make_shared<Engine>(600);\n    {\n        auto sPtr2 = sPtr1; // Reference Count = 2\n        std::cout << \"Refs active: \" << sPtr1.use_count() << \"\\n\";\n    } // sPtr2 iese din scope -> Reference Count revine la 1\n}",
    "prompt": "Creează o variabilă \"ptr\" folosind auto și std::make_unique pentru tipul \"int\" inițializată cu valoarea 42.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "auto ptr = std::make_unique<int>(42);"
    ],
    "officialSolution": "auto ptr = std::make_unique<int>(42);",
    "explanation": "auto ptr = std::make_unique<tip>(valoare);",
    "hint": "auto ptr = std::make_unique<tip>(valoare);",
    "matchingPairs": [
      {
        "left": "std::unique_ptr",
        "right": "Proprietate unică, zero cost, mutabil doar cu move"
      },
      {
        "left": "std::shared_ptr",
        "right": "Reference counting thread-safe către aceeași resursă"
      },
      {
        "left": "std::weak_ptr",
        "right": "Previne referințele ciclice fără a crește use_count"
      },
      {
        "left": "std::move()",
        "right": "Transferă dreptul de proprietate al resursei"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă încercăm să copiem un obiect de tip std::unique_ptr prin atribuire directă (u2 = u1)?",
      "options": [
        "Codul nu se compilează deoarece copy constructor-ul este marcat = delete",
        "Obiectul se clonează automat pe Heap",
        "u1 devine automat nullptr",
        "Contorul de referințe crește la 2"
      ],
      "correctIndex": 0,
      "explanation": "std::unique_ptr garantează proprietatea exclusivă și interzice copierea; transferul se poate face doar prin mutare cu std::move()."
    }
  },
  {
    "id": "cpp-sys-5",
    "track": "C & C++ Systems Engineering",
    "division": "Informatică și Programare",
    "icon": "⚙️",
    "level": "Senior Architect / Nivel 5",
    "xp": 40,
    "title": "Capitolul 5: Template-uri C++ și STL (std::vector, Iteratori & Complexitate)",
    "theory": "**Programarea Generică (Templates)** permite scrierea de algoritmi și structuri de date independente de tip, evaluate la compilare (**Zero-Cost Abstractions**). Compilatorul generează cod mașină dedicat pentru fiecare tip cu care este instanțiat template-ul.\n\n**`std::vector<T>` în Standard Template Library (STL):**\nEste containerul implicit în C++ datorită **localității în cache-ul procesorului (CPU Cache Locality)** — elementele sunt stocate contiguu în memorie:\n- **Acces aleatoriu `O(1)`:** prin `v[i]` (fără verificare de limite) sau `v.at(i)` (aruncă `std::out_of_range`).\n- **Inserare la final `O(1)` amortizat:** prin `push_back()` sau `emplace_back()` (care construiește obiectul direct in-place pe Heap, fără copii temporare).\n- **Prealocare optimă:** Când `size() == capacity()`, vectorul își dublează capacitatea și realocă tot blocul. Folosirea metodei `v.reserve(N)` elimină realocările costisitoare atunci când cunoaștem numărul estimativ de elemente.",
    "glossary": [
      {
        "term": "Template (Generice)",
        "def": "Șablon de cod evaluat la compilare care generează cod optimizat pentru orice tip de date."
      },
      {
        "term": "std::vector",
        "def": "Tablou dinamic contiguu în memorie, optimizat pentru cache-ul CPU."
      },
      {
        "term": "reserve()",
        "def": "Prealocă memorie în vector pentru a elimina realocările costisitoare ulterioare."
      },
      {
        "term": "emplace_back()",
        "def": "Construiește elementul direct in-place în container fără copii temporare."
      }
    ],
    "example": "#include <vector>\n#include <iostream>\n\n// Functie template generica\ntemplate <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    std::vector<int> scores;\n    scores.reserve(100); // Prealoca memorie contigua fara realocari\n    scores.emplace_back(95);\n    scores.emplace_back(100);\n\n    for (const auto& val : scores) {\n        std::cout << val << \" \";\n    }\n}",
    "prompt": "Scrie linia de declarare a antetului unui template C++ cu parametrul de tip numit \"T\" (folosind typename).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "template <typename T>"
    ],
    "officialSolution": "template <typename T>",
    "explanation": "template <typename T>",
    "hint": "template <typename T>",
    "matchingPairs": [
      {
        "left": "template <typename T>",
        "right": "Declară o funcție sau clasă generică"
      },
      {
        "left": "std::vector<T>",
        "right": "Container secvențial cu stocare contiguă"
      },
      {
        "left": "reserve(N)",
        "right": "Prealocă memorie pentru N elemente fără a mări size-ul"
      },
      {
        "left": "push_back()",
        "right": "Adaugă un element la finalul vectorului"
      }
    ],
    "quiz": {
      "question": "Care este complexitatea de timp pentru accesarea unui element prin index (v[i]) într-un std::vector?",
      "options": [
        "O(N) - parcurgere liniară",
        "O(1) - timp constant instantaneu datorită memoriei contigue",
        "O(log N) - căutare binară",
        "O(N^2) - acces pătratic"
      ],
      "correctIndex": 1,
      "explanation": "Datorită stocării contigue în memoria RAM, accesul la orice index v[i] se face instantaneu în O(1) printr-un simplu calcul de adresă: adresa_baza + i * sizeof(T)."
    }
  },
  {
    "id": "cs-net-1",
    "track": "C# & .NET Core Architecture",
    "division": "Informatică și Programare",
    "icon": "🎯",
    "level": "Junior / Nivel 1",
    "xp": 25,
    "title": "Capitolul 1: Arhitectura .NET Core, CLR și Value vs. Reference Types",
    "theory": "Ecosistemul **.NET (Core / .NET 8+)** este cross-platform și rulează codul prin **CLR (Common Language Runtime)**:\n1. Codul sursă C# este compilat în **IL (Intermediate Language)**.\n2. La rulare, compilatorul **JIT (Just-In-Time)** traduce IL în cod mașină nativ optimizat pentru procesorul gazdă (x64 sau ARM64).\n3. **Garbage Collector-ul (GC)** gestionează automat eliberarea memoriei pe Heap în generații (Gen 0, Gen 1, Gen 2).\n\n**Distincția critică în memorie:**\n- **Value Types (`struct`, `int`, `double`, `bool`, `enum`):** Stocate direct pe Stack (sau inline). Copierea lor creează o duplicare independentă a valorii.\n- **Reference Types (`class`, `interface`, `delegate`, `string`, `object`):** Referința stă pe Stack, iar instanța propriu-zisă pe Managed Heap.\n- **Nullable Reference Types (`string?`):** Previne faimoasa eroare `NullReferenceException` încă de la compilare.",
    "glossary": [
      {
        "term": "CLR",
        "def": "Common Language Runtime: mașina virtuală .NET care rulează codul intermediar (IL)."
      },
      {
        "term": "JIT Compiler",
        "def": "Just-In-Time compiler: traduce bytecode-ul IL în cod mașină nativ optimizat."
      },
      {
        "term": "Value Types",
        "def": "Tipuri stocate direct pe Stack (int, struct, bool, enum)."
      },
      {
        "term": "Null-coalescing (??)",
        "def": "Operator care returnează operandul stâng dacă nu este null, altfel operandul drept."
      }
    ],
    "example": "using System;\n\n// Value Type (alocat pe Stack, imutabil)\npublic readonly struct Point2D {\n    public double X { get; init; }\n    public double Y { get; init; }\n}\n\n// Entry-point modern (Top-level / Clasa standard)\nstring? optionalName = null;\nstring displayName = optionalName ?? \"Guest User\"; // Null-coalescing operator\nConsole.WriteLine($\"Salut, {displayName}!\");",
    "prompt": "Folosește operatorul null-coalescing (??) pentru a atribui variabilei string \"result\" valoarea lui \"input\" sau \"Default\" dacă input este null.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "string result = input ?? \"Default\";"
    ],
    "officialSolution": "string result = input ?? \"Default\";",
    "explanation": "string result = input ?? \"Default\";",
    "hint": "string result = input ?? \"Default\";",
    "matchingPairs": [
      {
        "left": "Value Types",
        "right": "Stocate direct pe Stack (struct, int, bool)"
      },
      {
        "left": "Reference Types",
        "right": "Instanța pe Heap, referința pe Stack (class, string)"
      },
      {
        "left": "Operatorul ??",
        "right": "Returnează fallback dacă valoarea din stânga este null"
      },
      {
        "left": "CLR JIT",
        "right": "Compilează codul IL în instrucțiuni native la runtime"
      }
    ],
    "quiz": {
      "question": "Unde este stocată instanța unui obiect de tip 'class' în .NET?",
      "options": [
        "Direct pe Stack-ul funcției curente",
        "Pe Managed Heap, iar pe Stack se reține doar adresa de referință",
        "În fișierul temporar de swap al Windows-ului",
        "În memoria ROM a plăcii de bază"
      ],
      "correctIndex": 1,
      "explanation": "În C#, toate tipurile definite ca 'class' sunt Reference Types: datele lor sunt alocate pe Managed Heap și gestionate de Garbage Collector."
    }
  },
  {
    "id": "cs-net-2",
    "track": "C# & .NET Core Architecture",
    "division": "Informatică și Programare",
    "icon": "🎯",
    "level": "Junior-Mid / Nivel 2",
    "xp": 30,
    "title": "Capitolul 2: POO în C# (Clase, Moștenire, virtual / override / sealed)",
    "theory": "În C#, Programarea Orientată pe Obiecte impune reguli explicite pentru siguranța arhitecturală:\n- O clasă poate moșteni **o singură clasă de bază**, dar poate implementa **oricâte interfețe** (`class Admin : User, IAuditable`).\n- **Polimorfism controlat:** În C#, metodele **nu** sunt virtuale în mod implicit (spre deosebire de Java). Pentru a permite suprascrierea unei metode în clasa derivată, metoda din baza trebuie marcată cu `virtual` (sau `abstract`), iar în clasa copil este obligatoriu cuvântul cheie `override`.\n- Cuvântul cheie `base` este folosit pentru a apela constructorul sau metodele clasei părinte.\n- O clasă marcată cu `sealed` blochează moștenirea ulterioară (și permite compilatorului JIT să facă *devirtualization* pentru performanță sporită).",
    "glossary": [
      {
        "term": "virtual",
        "def": "Modificator pe metoda din clasa părinte care autorizează suprascrierea în clase derivate."
      },
      {
        "term": "override",
        "def": "Modificator obligatoriu în clasa copil pentru a implementa o metodă virtuală sau abstractă."
      },
      {
        "term": "sealed",
        "def": "Cuvânt cheie care blochează posibilitatea de a mai moșteni clasa respectivă."
      },
      {
        "term": "base",
        "def": "Cuvânt cheie folosit pentru a apela constructorul sau metodele clasei părinte."
      }
    ],
    "example": "public abstract class PaymentGateway {\n    public string Provider { get; }\n    protected PaymentGateway(string provider) => Provider = provider;\n\n    public abstract bool ProcessPayment(decimal amount);\n    public virtual string GetReceipt() => $\"Processed by {Provider}\";\n}\n\npublic sealed class StripeGateway : PaymentGateway {\n    public StripeGateway() : base(\"Stripe\") {}\n\n    public override bool ProcessPayment(decimal amount) => amount > 0;\n}",
    "prompt": "Declară clasa publică \"Car\" care moștenește clasa \"Vehicle\" (cu corp gol {}).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "public class Car : Vehicle {}"
    ],
    "officialSolution": "public class Car : Vehicle {}",
    "explanation": "În C# moștenirea se specifică prin simbolul două puncte (:).",
    "hint": "În C# moștenirea se specifică prin simbolul două puncte (:).",
    "matchingPairs": [
      {
        "left": "virtual",
        "right": "Permite metodei să fie suprascrisă în copii"
      },
      {
        "left": "override",
        "right": "Furnizează implementarea concretă în clasa derivată"
      },
      {
        "left": "sealed",
        "right": "Interzice moștenirea clasei de către alte clase"
      },
      {
        "left": "base()",
        "right": "Apelează constructorul clasei de bază"
      }
    ],
    "quiz": {
      "question": "Spre deosebire de Java unde toate metodele sunt virtuale implicit, în C# ce este necesar pentru a suprascrie o metodă?",
      "options": [
        "Metoda din părinte trebuie marcată virtual, iar în copil marcată override",
        "Trebuie adăugat doar @Override în clasa copil",
        "Nu se pot suprascrie metode în C#",
        "Trebuie marcată clasa cu static"
      ],
      "correctIndex": 0,
      "explanation": "În C#, metodele sunt non-virtuale implicit pentru performanță; pentru polimorfism este necesar cuplul 'virtual' în părinte și 'override' în clasa copil."
    }
  },
  {
    "id": "cs-net-3",
    "track": "C# & .NET Core Architecture",
    "division": "Informatică și Programare",
    "icon": "🎯",
    "level": "Mid-Level / Nivel 3",
    "xp": 30,
    "title": "Capitolul 3: Properties (get, set, private set, init) și Records",
    "theory": "În loc să scrii metode manuale `getName()` și `setName()` ca în alte limbaje, C# oferă **Properties** ca cetățeni de rangul întâi ai limbajului:\n1. **Auto-Implemented Properties:** Compilatorul generează automat câmpul privat (*backing field*) în spate:\n   `public string Name { get; set; } = string.Empty;`\n2. **Encapsulare strictă (`private set`):** Proprietatea poate fi citită din exterior, dar modificată exclusiv din interiorul clasei.\n3. **Imutabilitate la inițializare (`init` - introdus în C# 9):** Permite setarea valorii doar în constructor sau în blocul de *Object Initializer* (`new User { Id = 1 }`), devenind read-only imediat după construire.\n4. **Computed Properties (Expression-bodied):** `public decimal TotalWithVat => Price * 1.19m;`",
    "glossary": [
      {
        "term": "Auto-Property",
        "def": "Proprietate get/set pentru care compilatorul C# generează automat un backing field privat."
      },
      {
        "term": "private set",
        "def": "Restricționează modificarea proprietății exclusiv la interiorul clasei."
      },
      {
        "term": "init (C# 9+)",
        "def": "Permite setarea valorii doar la inițializare, devenind read-only după construire."
      },
      {
        "term": "Record",
        "def": "Tip de referință imutabil cu equality bazată pe valori și sintaxă concisă."
      }
    ],
    "example": "public class BankAccount {\n    public Guid Id { get; init; } = Guid.NewGuid();\n    public string Owner { get; init; } = string.Empty;\n    public decimal Balance { get; private set; }\n\n    public void Deposit(decimal amount) {\n        if (amount <= 0) throw new ArgumentException(\"Suma invalida\");\n        Balance += amount;\n    }\n}",
    "prompt": "Declară o auto-proprietate publică de tip \"int\" numită \"Age\" cu getter și setter standard.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "public int Age { get; set; }"
    ],
    "officialSolution": "public int Age { get; set; }",
    "explanation": "public int Age { get; set; }",
    "hint": "public int Age { get; set; }",
    "matchingPairs": [
      {
        "left": "{ get; set; }",
        "right": "Proprietate complet accesibilă la citire și scriere"
      },
      {
        "left": "{ get; private set; }",
        "right": "Citire publică, modificare doar din interiorul clasei"
      },
      {
        "left": "{ get; init; }",
        "right": "Modificabil doar la instanțiere în constructor/initializer"
      },
      {
        "left": "record",
        "right": "Tip de date orientat pe imutabilitate și egalitate structurală"
      }
    ],
    "quiz": {
      "question": "Ce avantaj oferă modificatorul 'init' introdus în C# 9+ pentru proprietăți?",
      "options": [
        "Face proprietatea să fie calculată asincron",
        "Permite setarea valorii în object initializer, dar blochează orice modificare ulterioară (imutabilitate)",
        "Șterge proprietatea din memorie după prima citire",
        "Convertește automat șirurile în majuscule"
      ],
      "correctIndex": 1,
      "explanation": "Modificatorul 'init' garantează că obiectul poate fi inițializat curat prin sintaxa new Obj { Prop = val }, rămânând complet imutabil pe parcursul vieții sale."
    }
  },
  {
    "id": "cs-net-4",
    "track": "C# & .NET Core Architecture",
    "division": "Informatică și Programare",
    "icon": "🎯",
    "level": "Senior / Nivel 4",
    "xp": 30,
    "title": "Capitolul 4: Interfețe și Dependency Injection (DI)",
    "theory": "În C# și .NET Core, **Interfețele** definesc contracte de comportament (prin convenție, încep întotdeauna cu litera `I`, ex: `IRepository`, `ILogger`).\nDe ce sunt esențiale în arhitectura modernă?\n- **Decuplare (Loose Coupling):** Un serviciu de business (`OrderService`) nu depinde direct de o bază de date SQL concretă, ci de o interfață `IOrderRepository`.\n- **Dependency Injection (DI) nativ în .NET:** În `Program.cs`, înregistrăm serviciile în containerul IoC folosind 3 durate de viață:\n  - `AddTransient<ITransient, Impl>()`: O instanță nouă de fiecare dată când este cerută.\n  - `AddScoped<IScoped, Impl>()`: O singură instanță per cerere HTTP (recomandat pentru DbContext / Repository).\n  - `AddSingleton<ISingleton, Impl>()`: O singură instanță pe toată durata de viață a aplicației.",
    "glossary": [
      {
        "term": "Interfață (IInterface)",
        "def": "Contract pur de comportament care definește metode și proprietăți fără implementare."
      },
      {
        "term": "Dependency Injection",
        "def": "Șablon prin care dependențele sunt furnizate din exterior de containerul IoC."
      },
      {
        "term": "Scoped",
        "def": "Durată de viață în .NET: o singură instanță creată per cerere HTTP (Request)."
      },
      {
        "term": "Singleton",
        "def": "Durată de viață în .NET: o unică instanță partajată pe toată durata aplicației."
      }
    ],
    "example": "public interface INotificationService {\n    Task SendAsync(string to, string message);\n}\n\npublic class EmailNotificationService : INotificationService {\n    public async Task SendAsync(string to, string message) {\n        await Task.Delay(50); // Simulare trimitere SMTP\n    }\n}\n\n// In Program.cs (.NET DI Container):\n// builder.Services.AddScoped<INotificationService, EmailNotificationService>();",
    "prompt": "Declară o interfață publică numită \"IUserRepository\" (cu corp gol {}).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "public interface IUserRepository {}"
    ],
    "officialSolution": "public interface IUserRepository {}",
    "explanation": "Folosește cuvântul cheie interface.",
    "hint": "Folosește cuvântul cheie interface.",
    "matchingPairs": [
      {
        "left": "interface",
        "right": "Contract abstract pe care clasele îl implementează"
      },
      {
        "left": "AddScoped",
        "right": "O instanță per HTTP Request (ideal pentru DbContext)"
      },
      {
        "left": "AddSingleton",
        "right": "O singură instanță pe întreaga viață a procesului"
      },
      {
        "left": "AddTransient",
        "right": "O instanță nouă la fiecare injectare individuală"
      }
    ],
    "quiz": {
      "question": "Ce durată de viață (lifetime) este recomandată în ASP.NET Core pentru serviciile care lucrează cu baze de date (DbContext)?",
      "options": [
        "Singleton - pentru a partaja aceeași conexiune cu toți utilizatorii",
        "Scoped - o instanță nouă pentru fiecare cerere HTTP izolată",
        "Transient - instanțiere la fiecare metodă apelată",
        "Static - reținut permanent în memoria plăcii video"
      ],
      "correctIndex": 1,
      "explanation": "Scoped este durata de viață standard pentru DbContext deoarece izolează tranzacțiile și starea per utilizator/cerere HTTP, eliberând resursele la finalul requestului."
    }
  },
  {
    "id": "cs-net-5",
    "track": "C# & .NET Core Architecture",
    "division": "Informatică și Programare",
    "icon": "🎯",
    "level": "Senior Architect / Nivel 5",
    "xp": 40,
    "title": "Capitolul 5: LINQ (Language Integrated Query) & Expresii Lambda",
    "theory": "**LINQ** este una dintre cele mai puternice funcționalități din C#, permițând interogarea declarativă și uniformă a colecțiilor în memorie (`IEnumerable<T>`), a bazelor de date SQL prin Entity Framework Core (`IQueryable<T>`), sau a documentelor JSON/XML.\n\n**Operatori fundamentali LINQ (Method Syntax):**\n- **`Where(x => condiție)`**: Filtrează elementele care respectă predicatul.\n- **`Select(x => proiecție)`**: Transformă fiecare element într-o altă formă / DTO (echivalentul lui `map` din JS).\n- **`OrderBy(x => cheie)` / `OrderByDescending`**: Sortează secvența.\n- **`FirstOrDefault(x => condiție)`**: Returnează primul element găsit sau valoarea default (`null`) fără a arunca excepție.\n- **Deferred Execution (Execuție Amânată):** O interogare LINQ nu se execută când este definită, ci doar când este iterată (`foreach`) sau materializată cu `.ToList()`, `.ToArray()` sau `.Count()`.",
    "glossary": [
      {
        "term": "LINQ",
        "def": "Language Integrated Query: sintaxă declarativă uniformă pentru interogarea colecțiilor și bazelor de date."
      },
      {
        "term": "Where()",
        "def": "Operator LINQ de filtrare pe baza unui predicat boolean."
      },
      {
        "term": "Select()",
        "def": "Operator LINQ de proiecție / transformare (echivalentul lui map)."
      },
      {
        "term": "Deferred Execution",
        "def": "Interogarea se execută doar în momentul în care datele sunt iterate sau cerute cu ToList()."
      }
    ],
    "example": "using System.Linq;\nusing System.Collections.Generic;\n\nvar numbers = new List<int> { 5, 12, 8, 21, 3, 18 };\n\n// Filtrare, sortare si proiectie in lant (Pipeline declarativ)\nvar topDoubled = numbers\n    .Where(n => n >= 10)\n    .OrderByDescending(n => n)\n    .Select(n => n * 2)\n    .ToList(); // [42, 36, 24]",
    "prompt": "Folosește LINQ pe colecția \"users\" pentru a filtra cu .Where() doar elementele \"u\" care au proprietatea \"u.IsActive\" adevărată.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "users.Where(u => u.IsActive);"
    ],
    "officialSolution": "users.Where(u => u.IsActive);",
    "explanation": "users.Where(u => u.IsActive)",
    "hint": "users.Where(u => u.IsActive)",
    "matchingPairs": [
      {
        "left": "Where(x => ...)",
        "right": "Filtrează elementele după o condiție logică"
      },
      {
        "left": "Select(x => ...)",
        "right": "Proiectează / transformă fiecare element"
      },
      {
        "left": "OrderBy(x => ...)",
        "right": "Sortează secvența în ordine crescătoare"
      },
      {
        "left": "ToList()",
        "right": "Execută interogarea și materializează rezultatele în memorie"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă că o interogare LINQ are 'Deferred Execution' (Execuție Amânată)?",
      "options": [
        "Interogarea este amânată și aruncă eroare după 30 de secunde",
        "Codul de filtrare nu rulează în momentul definirii, ci doar când este iterat sau apelat ToList()",
        "Interogarea rulează exclusiv pe un thread secundar de fundal",
        "Rezultatele sunt șterse automat după 5 minute"
      ],
      "correctIndex": 1,
      "explanation": "LINQ construiește arborele de expresie sau iteratorul fără a procesa datele imediat; calculul are loc doar în momentul iterației efective (de exemplu la un foreach sau ToList())."
    }
  },
  {
    "id": "py-core-1",
    "track": "Python Modern & Data Structures",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "Junior / Nivel 1",
    "xp": 25,
    "title": "Capitolul 1: F-Strings (Formatted String Literals) și Expresii Inline",
    "theory": "Introduse în Python 3.6 și îmbunătățite continuu, **F-strings** (`f\"...\"`) reprezintă metoda cea mai rapidă și lizibilă de interpolare a șirurilor de caractere în Python (mai rapidă decât `%` sau `.format()` deoarece sunt evaluate la runtime ca expresii directe în bytecode):\n- Poți include orice expresie Python validă în interiorul acoladelor `{expresie}`.\n- **Formatare numerică:** `f\"{price:.2f}\"` afișează numărul cu exact 2 zecimale; `f\"{big_num:,}\"` adaugă separatori de mii.\n- **Debugging rapid (Python 3.8+):** `f\"{user_id=}\"` afișează atât numele variabilei, cât și valoarea ei (`user_id=42`).",
    "glossary": [
      {
        "term": "F-Strings",
        "def": "Formatted String Literals (f'...'): cea mai rapidă metodă de interpolare a șirurilor în Python."
      },
      {
        "term": "Expresii Inline",
        "def": "Posibilitatea de a rula cod Python direct în interiorul acoladelor {expr} dintr-un f-string."
      },
      {
        "term": "Format Specifier",
        "def": "Instrucțiune de formatare numerică (ex: :.2f pentru 2 zecimale, :, pentru separatori de mii)."
      },
      {
        "term": "Debug f'{var=}'",
        "def": "Sintaxă introdusă în Python 3.8 care afișează automat numele variabilei și valoarea ei."
      }
    ],
    "example": "name = \"Alex\"\nscore = 94.5678\nitems = [\"SQL\", \"Python\", \"React\"]\n\nprint(f\"Candidat: {name.upper()} | Medie: {score:.2f}% | Tehnologii: {len(items)}\")\n# Output: Candidat: ALEX | Medie: 94.57% | Tehnologii: 3",
    "prompt": "Creează un f-string atribuit variabilei \"msg\" care afișează \"Hello, {name}!\" folosind variabila \"name\".",
    "caseSensitive": true,
    "acceptedAnswers": [
      "msg = f\"Hello, {name}!\""
    ],
    "officialSolution": "msg = f\"Hello, {name}!\"",
    "explanation": "msg = f\"Hello, {name}!\"",
    "hint": "msg = f\"Hello, {name}!\"",
    "matchingPairs": [
      {
        "left": "f'Salut {nume}'",
        "right": "Interpolează direct variabila nume în șir"
      },
      {
        "left": "f'{pret:.2f}'",
        "right": "Formatează numărul cu exact două zecimale"
      },
      {
        "left": "f'{x=}'",
        "right": "Afișează x=valoare pentru debugging rapid"
      },
      {
        "left": "str.format()",
        "right": "Metoda anterioară de formatare, mai lentă decât f-strings"
      }
    ],
    "quiz": {
      "question": "Care dintre următoarele variante este un f-string valid în Python 3.6+?",
      "options": [
        "$\"Total: {price}\"",
        "f\"Total: {price * 1.19:.2f}\"",
        "format(\"Total: %d\", price)",
        "@string(\"Total: {price}\")"
      ],
      "correctIndex": 1,
      "explanation": "F-strings sunt prefixate cu litera 'f' sau 'F' și permit expresii matematice și formatare numerică direct în acolade: f'Total: {price * 1.19:.2f}'."
    }
  },
  {
    "id": "py-core-2",
    "track": "Python Modern & Data Structures",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "Mid-Level / Nivel 2",
    "xp": 35,
    "title": "Capitolul 2: List Comprehensions și Generator Expressions",
    "theory": "**List Comprehensions** oferă o sintaxă concisă și optimizată la nivel de C (în CPython) pentru a crea liste noi din orice iterabil, înlocuind buclele `for` cu `.append()` repetitive și mai lente:\n- **Sintaxa de bază cu filtrare:**\n  `[expresie for element in iterabil if conditie]`\n- **Sintaxa cu transformare condițională (if-else):**\n  `[val_true if conditie else val_false for element in iterabil]`\n- **Generator Expressions:** Dacă înlocuiești parantezele pătrate `[...]` cu paranteze rotunde `(...)`, obții un **generator** care evaluează elementele *lazy* (pe rând, consumând memorie `O(1)` indiferent dacă secvența are 10 milioane de elemente).",
    "glossary": [
      {
        "term": "List Comprehension",
        "def": "Sintaxă concisă [expr for x in list if cond] pentru crearea și filtrarea rapidă a listelor."
      },
      {
        "term": "Generator Expression",
        "def": "Expresie cu paranteze rotunde (expr for x in iter) care evaluează elementele lazy în O(1) RAM."
      },
      {
        "term": "Lazy Evaluation",
        "def": "Calcularea fiecărui element la cerere pe măsură ce este parcurs, fără a încărca totul în memorie."
      },
      {
        "term": "CPython Bytecode",
        "def": "List comprehensions rulează optimizat la nivel de instrucțiuni C, fiind mai rapide decât for-append."
      }
    ],
    "example": "numbers = [1, 2, 3, 4, 5, 6, 7, 8]\n\n# Patratele numerelor pare: [4, 16, 36, 64]\neven_squares = [n ** 2 for n in numbers if n % 2 == 0]\n\n# Generator expression folosit direct in sum() (fara lista intermediara in RAM)\ntotal_cubes = sum(n ** 3 for n in range(1_000_000))",
    "prompt": "Creează o listă \"squares\" folosind list comprehension care conține x*x pentru fiecare x în range(5).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "squares = [x * x for x in range(5)]"
    ],
    "officialSolution": "squares = [x * x for x in range(5)]",
    "explanation": "squares = [x * x for x in range(5)] (sau x**2)",
    "hint": "squares = [x * x for x in range(5)] (sau x**2)",
    "matchingPairs": [
      {
        "left": "[x*2 for x in nums]",
        "right": "Dublează fiecare element din listă"
      },
      {
        "left": "[x for x in n if x > 0]",
        "right": "Filtrează doar numerele pozitive"
      },
      {
        "left": "(x for x in nums)",
        "right": "Generator expression evaluat lazy în O(1) memorie"
      },
      {
        "left": "sum(x for x in r)",
        "right": "Calculează suma direct din generator fără alocare de listă"
      }
    ],
    "quiz": {
      "question": "Ce diferență fundamentală există între '[x for x in range(1000000)]' și '(x for x in range(1000000))'?",
      "options": [
        "Nu există nicio diferență, ambele creează liste identice în memorie",
        "Varianta cu paranteze pătrate alocă o listă completă de 1 milion de elemente în RAM, pe când parantezele rotunde creează un generator lazy în O(1) RAM",
        "Parantezele rotunde aruncă eroare de sintaxă în Python 3",
        "Parantezele pătrate pot fi folosite doar pentru șiruri de caractere"
      ],
      "correctIndex": 1,
      "explanation": "List comprehension generează lista instantaneu consumând zeci de megabytes, în timp ce generator expression produce valorile pe rând (la cerere) cu consum infim de memorie."
    }
  },
  {
    "id": "py-core-3",
    "track": "Python Modern & Data Structures",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "Mid-Level / Nivel 3",
    "xp": 30,
    "title": "Capitolul 3: Dicționare (dict), Hash Maps și Dict Comprehensions",
    "theory": "Dicționarele (`dict`) în Python sunt implementate ca **Hash Tables** extrem de rapide (timp de căutare, inserare și ștergere `O(1)` în medie) și, începând cu Python 3.7+, **păstrează garantat ordinea de inserare a cheilor**.\n- **Acces sigur cu `.get(key, default)`**: Spre deosebire de `d[key]` care aruncă `KeyError` dacă cheia lipsește, `d.get(\"role\", \"guest\")` returnează valoarea implicită.\n- **Iterare simultană cheie-valoare:** `for k, v in user.items():`\n- **Merge-ul dicționarelor (Python 3.9+):** Operatorul `|` combină două dicționare elegant: `merged = config_default | config_user`.\n- **Dict Comprehension:** `{k: v * 2 for k, v in prices.items() if v > 10}`.",
    "glossary": [
      {
        "term": "dict (Dicționar)",
        "def": "Tabel de dispersie (Hash Map) cheie-valoare cu căutare, inserare și ștergere în O(1) în medie."
      },
      {
        "term": "dict.get(key, default)",
        "def": "Accesare sigură a valorii care returnează valoarea implicită în loc de KeyError dacă cheia lipsește."
      },
      {
        "term": "dict.items()",
        "def": "Metodă care returnează o vedere iterabilă a perechilor (cheie, valoare)."
      },
      {
        "term": "Dict Comprehension",
        "def": "Sintaxă {k: v for ...} pentru construirea dinamică a dicționarelor dintr-un iterabil."
      }
    ],
    "example": "user = {\"id\": 101, \"username\": \"denis_dev\"}\n\n# Citire sigura fara KeyError\nrole = user.get(\"role\", \"admin\")\n\n# Dict Comprehension: mapam fiecare cuvant la lungimea lui\nwords = [\"react\", \"sql\", \"python\"]\nword_lengths = {w: len(w) for w in words}\n# {'react': 5, 'sql': 3, 'python': 6}",
    "prompt": "Extrage în siguranță cheia \"theme\" din dicționarul \"settings\", returnând \"dark\" ca valoare implicită dacă cheia nu există.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "settings.get(\"theme\", \"dark\")"
    ],
    "officialSolution": "settings.get(\"theme\", \"dark\")",
    "explanation": "Folosește metoda .get(\"cheie\", \"default\") pe dicționarul settings.",
    "hint": "Folosește metoda .get(\"cheie\", \"default\") pe dicționarul settings.",
    "matchingPairs": [
      {
        "left": "d.get('role', 'user')",
        "right": "Citește fără KeyError, returnează 'user' ca fallback"
      },
      {
        "left": "for k, v in d.items():",
        "right": "Iterează simultan peste cheie și valoare"
      },
      {
        "left": "d1 | d2",
        "right": "Operatorul de union/merge pentru dicționare în Python 3.9+"
      },
      {
        "left": "{w: len(w) for w in l}",
        "right": "Dict comprehension care mapează cuvintele la lungimea lor"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă accesăm o cheie inexistentă printr-un index direct 'user[\"email\"]' față de 'user.get(\"email\")'?",
      "options": [
        "user['email'] returnează None, iar user.get() aruncă eroare",
        "user['email'] aruncă o excepție KeyError, pe când user.get('email') returnează None în siguranță",
        "Ambele returnează șirul gol \"\"",
        "Python creează automat cheia respectivă cu valoarea 0"
      ],
      "correctIndex": 1,
      "explanation": "Accesarea directă cu paranteze pătrate aruncă KeyError dacă cheia lipsește. Metoda .get() este modul defensiv și pythonic de a citi chei opționale."
    }
  },
  {
    "id": "py-core-4",
    "track": "Python Modern & Data Structures",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "Senior / Nivel 4",
    "xp": 40,
    "title": "Capitolul 4: Funcții Avansate cu *args, **kwargs și Unpacking",
    "theory": "Python oferă un mecanism extrem de flexibil pentru semnăturile funcțiilor, esențial atunci când construiești decoratori, API wrappers sau clase moștenite:\n1. **`*args` (Non-Keyword Positional Arguments):** Colectează un număr variabil de argumente poziționale într-un **tuple** (`args`).\n2. **`**kwargs` (Keyword Arguments):** Colectează un număr variabil de argumente numite (`cheie=valoare`) într-un **dicționar** (`kwargs`).\n3. **Ordinea canonică în definiția unei funcții:**\n   `def func(standard_arg, *args, default_arg=10, **kwargs):`\n4. **Operatorii de Unpacking la apel:** Poți despacheta o listă cu `*my_list` sau un dicționar cu `**my_dict` direct când apelezi o funcție.",
    "glossary": [
      {
        "term": "*args",
        "def": "Colectează orice număr de argumente poziționale suplimentare într-un tuple."
      },
      {
        "term": "**kwargs",
        "def": "Colectează orice număr de argumente numite (cheie=valoare) într-un dicționar."
      },
      {
        "term": "Unpacking (*list, **dict)",
        "def": "Operator de despachetare care expandează colecții în argumente individuale la apelul funcției."
      },
      {
        "term": "Keyword-Only Args",
        "def": "Parametri plasați după * în antet care pot fi transmiși exclusiv specificând numele lor."
      }
    ],
    "example": "def log_event(event_type: str, *tags: str, **metadata) -> None:\n    print(f\"[{event_type.upper()}] Tags: {tags}\")\n    for key, val in metadata.items():\n        print(f\"  -> {key}: {val}\")\n\nlog_event(\"deploy\", \"prod\", \"v2\", author=\"Denis\", region=\"eu-central\")",
    "prompt": "Definește antetul unei funcții numite \"process\" care acceptă orice număr de argumente poziționale (*args) și argumente numite (**kwargs).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "def process(*args, **kwargs):"
    ],
    "officialSolution": "def process(*args, **kwargs):",
    "explanation": "def process(*args, **kwargs):",
    "hint": "def process(*args, **kwargs):",
    "matchingPairs": [
      {
        "left": "def fn(*args):",
        "right": "Colectează argumentele poziționale într-un tuplu"
      },
      {
        "left": "def fn(**kwargs):",
        "right": "Colectează argumentele numite într-un dicționar"
      },
      {
        "left": "fn(*my_list)",
        "right": "Despachetează lista în argumente poziționale separate"
      },
      {
        "left": "{**d1, **d2}",
        "right": "Fuzionează două dicționare prin despachetare"
      }
    ],
    "quiz": {
      "question": "Care este tipul de date al variabilei 'kwargs' în interiorul unei funcții definite ca 'def save_user(**kwargs):'?",
      "options": [
        "Listă standard (list)",
        "Dicționar nativ (dict)",
        "Tuplu imutabil (tuple)",
        "Șir de caractere JSON"
      ],
      "correctIndex": 1,
      "explanation": "Operatorul dublu asterisc (**kwargs) împachetează toți parametrii numiți transmiși la apel într-un dicționar standard Python."
    }
  },
  {
    "id": "fr-a1-1",
    "track": "Limba Franceză — Fundamente A1",
    "division": "Limbi Străine",
    "icon": "🇫🇷",
    "level": "A1 Începător / Nivel 1",
    "xp": 25,
    "title": "Capitolul 1: Verbele Fundamentale „Être” (a fi) și „Avoir” (a avea)",
    "theory": "În limba franceză, **être** (a fi) și **avoir** (a avea) sunt cele mai importante verbe — sunt folosite atât de sine stătător, cât și ca verbe auxiliare pentru formarea timpurilor trecute (*Passé Composé*).\n\n**Conjugarea la indicativ prezent:**\n| Pronume | **ÊTRE (a fi)** | **AVOIR (a avea)** |\n| :--- | :--- | :--- |\n| **Je / J'** | je suis *(eu sunt)* | j'ai *(eu am)* |\n| **Tu** | tu es *(tu ești)* | tu as *(tu ai)* |\n| **Il / Elle / On** | il/elle est *(el/ea este)* | il/elle a *(el/ea are)* |\n| **Nous** | nous sommes *(noi suntem)* | nous avons *(noi avem)* |\n| **Vous** | vous êtes *(voi sunteți / dvs. sunteți)* | vous avez *(voi aveți)* |\n| **Ils / Elles** | ils/elles sont *(ei/ele sunt)* | ils/elles ont *(ei/ele au)* |\n\n> **Atenție la expresiile cu AVOIR (unde în română folosim „a fi” sau „a avea”):**\n> - Pentru exprimarea vârstei se folosește obligatoriu **avoir**: *J'ai vingt ans* (Am 20 de ani).\n> - *Avoir faim* (a-i fi foame), *avoir soif* (a-i fi sete), *avoir froid/chaud* (a-i fi frig/cald).",
    "glossary": [
      {
        "term": "Être",
        "def": "Verbul 'a fi': je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont."
      },
      {
        "term": "Avoir",
        "def": "Verbul 'a avea': j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont."
      },
      {
        "term": "J'ai ... ans",
        "def": "În franceză vârsta se exprimă obligatoriu cu verbul AVOIR (nu cu être)."
      },
      {
        "term": "Avoir faim/soif",
        "def": "Senzațiile corporale (foame, sete, frig, cald) se exprimă cu verbul AVOIR."
      }
    ],
    "example": "// Exemple uzuale cu Être și Avoir:\n\"Je suis étudiant en informatique.\" -> Eu sunt student la informatică.\n\"Nous sommes prêts pour le projet.\" -> Noi suntem pregătiți pentru proiect.\n\"J'ai vingt ans et j'ai un ordinateur portable.\" -> Am 20 de ani și am un laptop.",
    "prompt": "Completează în franceză: \"Eu sunt student\" (folosind masculinul: étudiant).",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Je suis étudiant."
    ],
    "officialSolution": "Je suis étudiant.",
    "explanation": "Je suis ...",
    "hint": "Je suis ...",
    "matchingPairs": [
      {
        "left": "Je suis",
        "right": "Eu sunt (verbul être)"
      },
      {
        "left": "J'ai",
        "right": "Eu am (verbul avoir)"
      },
      {
        "left": "Nous sommes",
        "right": "Noi suntem"
      },
      {
        "left": "Ils ont",
        "right": "Ei au (pronunțat cu legătură 'z')"
      }
    ],
    "quiz": {
      "question": "Cum se spune corect în limba franceză 'Am 25 de ani'?",
      "options": [
        "Je suis 25 ans",
        "J'ai 25 ans",
        "Je fais 25 ans",
        "Moi être 25 ans"
      ],
      "correctIndex": 1,
      "explanation": "În limba franceză, vârsta se exprimă exclusiv cu verbul 'avoir' (a avea): 'J'ai 25 ans' (literal: Am 25 de ani)."
    }
  },
  {
    "id": "fr-a1-2",
    "track": "Limba Franceză — Fundamente A1",
    "division": "Limbi Străine",
    "icon": "🇫🇷",
    "level": "A1 Conversațional / Nivel 2",
    "xp": 25,
    "title": "Capitolul 2: Dialog de Bază, Formule de Salut și Prezentare",
    "theory": "**Structuri esențiale pentru primul dialog în franceză:**\n- **Salutul formal și cotidian:**\n  - *Bonjour !* (Bună ziua / Bună dimineața)\n  - *Bonsoir !* (Bună seara)\n  - *Salut !* (Salut — informal, între prieteni)\n  - *Au revoir !* (La revedere) / *À bientôt !* (Pe curând!)\n- **Cum întrebi și răspunzi „Ce mai faci?”:**\n  - Formal: *Comment allez-vous ?* -> *Je vais très bien, merci. Et vous ?*\n  - Informal: *Comment ça va ?* sau simplu *Ça va ?* -> *Ça va bien, merci !*\n- **Prezentarea numelui (verbul reflexiv *s'appeler*):**\n  - *Je m'appelle Denis.* (Mă numesc Denis.)\n  - *Enchanté(e) !* (Încântat(ă) de cunoștință!)",
    "glossary": [
      {
        "term": "Bonjour",
        "def": "Bună ziua / Bună dimineața (salut universal formal și politicos)."
      },
      {
        "term": "Je m'appelle",
        "def": "Mă numesc (conjugarea verbului reflexiv s'appeler la persoana I)."
      },
      {
        "term": "Comment allez-vous ?",
        "def": "Ce mai faceți? / Cum vă merge? (adresare politicoasă formală)."
      },
      {
        "term": "Enchanté(e)",
        "def": "Încântat(ă) de cunoștință."
      }
    ],
    "example": "— Bonjour ! Comment vous appelez-vous ?\n— Bonjour ! Je m'appelle Denis. Et vous ?\n— Moi, c'est Claire. Enchantée !\n— Enchanté, Claire ! Vous êtes française ?\n— Oui, j'habite à Paris.",
    "prompt": "Traducere RO -> FR: \"Bună ziua, mă numesc Alex.\"",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Bonjour, je m'appelle Alex."
    ],
    "officialSolution": "Bonjour, je m'appelle Alex.",
    "explanation": "Bonjour, je m'appelle Alex.",
    "hint": "Bonjour, je m'appelle Alex.",
    "matchingPairs": [
      {
        "left": "Bonjour",
        "right": "Bună ziua"
      },
      {
        "left": "Au revoir",
        "right": "La revedere"
      },
      {
        "left": "Je m'appelle",
        "right": "Mă numesc"
      },
      {
        "left": "Merci beaucoup",
        "right": "Mulțumesc foarte mult"
      }
    ],
    "quiz": {
      "question": "Care este formula politicoasă de salut la plecare în limba franceză?",
      "options": [
        "Bonjour !",
        "Au revoir !",
        "Enchanté !",
        "S'il vous plaît !"
      ],
      "correctIndex": 1,
      "explanation": "'Au revoir !' înseamnă 'La revedere !' și se folosește standard la despărțire."
    }
  },
  {
    "id": "fr-a1-3",
    "track": "Limba Franceză — Fundamente A1",
    "division": "Limbi Străine",
    "icon": "🇫🇷",
    "level": "A1 Consolidat / Nivel 3",
    "xp": 35,
    "title": "Capitolul 3: Vocabular Esențial, Articole (le/la/un/une) și Negația (ne ... pas)",
    "theory": "În limba franceză, fiecare substantiv are gen (**masculin** sau **feminin**) și este întotdeauna însoțit de un articol:\n1. **Articolele nehotărâte (un / o / niște):**\n   - Masculin singular: **un** (*un livre* — o carte, *un ordinateur* — un calculator)\n   - Feminin singular: **une** (*une maison* — o casă, *une table* — o masă)\n   - Plural (ambele genuri): **des** (*des amis* — niște prieteni)\n2. **Articolele hotărâte (le / la / l' / les):**\n   - Masculin: **le** (*le café* — cafeaua)\n   - Feminin: **la** (*la musique* — muzica)\n   - Înainte de vocală sau *h* mut: **l'** (*l'école*, *l'hôtel*)\n   - Plural: **les** (*les voitures*)\n3. **Regula negației în franceză (`ne ... pas`):**\n   Negația încadrează ca un „sandwich” verbul conjugat:\n   `Subiect + NE (sau N' înainte de vocală) + VERB + PAS`\n   - *Je parle français* -> *Je **ne** parle **pas** français.*\n   - *Il est prêt* -> *Il **n'**est **pas** prêt.*",
    "glossary": [
      {
        "term": "un / une",
        "def": "Articole nehotărâte: un pentru masculin singular, une pentru feminin singular."
      },
      {
        "term": "le / la / l'",
        "def": "Articole hotărâte: le (masculin), la (feminin), l' (înainte de vocală sau h mut)."
      },
      {
        "term": "ne ... pas",
        "def": "Structura standard de negație care încadrează verbul conjugat (ex: Je ne sais pas)."
      },
      {
        "term": "n' (eliziune)",
        "def": "Forma scurtată a particulei 'ne' plasată înaintea verbelor care încep cu o vocală."
      }
    ],
    "example": "Affirmative: \"Je travaille aujourd'hui.\" (Lucrez astăzi.)\nNégative:    \"Je ne travaille pas aujourd'hui.\" (Nu lucrez astăzi.)\n\nAffirmative: \"Elle aime le café.\" (Ei îi place cafeaua.)\nNégative:    \"Elle n'aime pas le café.\" (Ei nu îi place cafeaua.)",
    "prompt": "Transformă la forma negativă propoziția: \"Je parle français\" (Eu nu vorbesc franceză).",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Je ne parle pas français."
    ],
    "officialSolution": "Je ne parle pas français.",
    "explanation": "Pune verbul \"parle\" între \"ne\" și \"pas\".",
    "hint": "Pune verbul \"parle\" între \"ne\" și \"pas\".",
    "matchingPairs": [
      {
        "left": "un livre",
        "right": "o carte (masculin singular)"
      },
      {
        "left": "une maison",
        "right": "o casă (feminin singular)"
      },
      {
        "left": "l'ordinateur",
        "right": "calculatorul (articol cu eliziune l')"
      },
      {
        "left": "ne ... pas",
        "right": "negația care încadrează verbul conjugat"
      }
    ],
    "quiz": {
      "question": "Cum transformăm corect propoziția 'Il aime le café' la forma negativă?",
      "options": [
        "Il pas aime le café",
        "Il n'aime pas le café",
        "Il ne aime pas le café",
        "Il non aime le café"
      ],
      "correctIndex": 1,
      "explanation": "Deoarece verbul 'aime' începe cu o vocală, particula 'ne' devine 'n' prin eliziune: 'Il n'aime pas le café'."
    }
  },
  {
    "id": "es-a1-1",
    "track": "Limba Spaniolă — Fundamente A1",
    "division": "Limbi Străine",
    "icon": "🇪🇸",
    "level": "A1 Începător / Nivel 1",
    "xp": 25,
    "title": "Capitolul 1: Verbele „Ser” vs. „Estar” (Cum spui „a fi” în spaniolă)",
    "theory": "În spaniolă există două verbe distincte pentru „a fi”: **SER** și **ESTAR**. Alegerea corectă este esențială:\n\n1. **SER (esență, identitate, trăsături permanente — acronimul DOCTOR):**\n   - **D**ate / Oră (*Hoy es lunes*), **O**cupație (*Soy programador*), **C**aracteristică permanentă (*Es inteligente*), **T**imp, **O**rigine/Naționalitate (*Soy de Moldavia*), **R**elație/Posesie.\n   - Conjugare: **yo soy, tú eres, él/ella/usted es, nosotros somos, vosotros sois, ellos/ustedes son**.\n\n2. **ESTAR (stare temporară, emoție, locație fizică — acronimul PLACE):**\n   - **P**oziție, **L**ocație (*Estoy en Madrid* — chiar și pentru clădiri permanente!), **A**cțiune în desfășurare, **C**ondiție fizică temporară (*Está enfermo*), **E**moție (*Estoy feliz / cansado*).\n   - Conjugare: **yo estoy, tú estás, él/ella/usted está, nosotros estamos, vosotros estáis, ellos/ustedes están**.",
    "glossary": [
      {
        "term": "SER",
        "def": "Verbul 'a fi' folosit pentru identitate, naționalitate, profesie și trăsături permanente."
      },
      {
        "term": "ESTAR",
        "def": "Verbul 'a fi' folosit pentru locație fizică, stări emoționale și condiții temporare."
      },
      {
        "term": "Soy de ...",
        "def": "Construcție cu verbul SER pentru a exprima țara sau orașul de origine."
      },
      {
        "term": "Estoy en ...",
        "def": "Construcție cu verbul ESTAR pentru a exprima poziția sau locația actuală."
      }
    ],
    "example": "// Comparație directă SER vs ESTAR:\n\"Soy estudiante de informática.\" (Identitate / Ocupație -> SER)\n\"Estoy en casa ahora.\"           (Locație fizică -> ESTAR)\n\"La manzana es verde.\"           (Culoare / soi -> SER)\n\"La manzana está verde.\"         (Stare temporară: mărul e necopt -> ESTAR)",
    "prompt": "Scrie în spaniolă: \"Sunt student\" (masculin, fără pronumele yo obligatoriu sau cu yo).",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Soy estudiante."
    ],
    "officialSolution": "Soy estudiante.",
    "explanation": "Pentru ocupații se folosește verbul SER la persoana I: (Yo) soy estudiante.",
    "hint": "Pentru ocupații se folosește verbul SER la persoana I: (Yo) soy estudiante.",
    "matchingPairs": [
      {
        "left": "Yo soy",
        "right": "Eu sunt (verbul SER - identitate permanentă)"
      },
      {
        "left": "Yo estoy",
        "right": "Eu sunt (verbul ESTAR - locație sau stare temporară)"
      },
      {
        "left": "Soy programador",
        "right": "Sunt programator (profesie -> SER)"
      },
      {
        "left": "Estoy cansado",
        "right": "Sunt obosit (stare fizică temporară -> ESTAR)"
      }
    ],
    "quiz": {
      "question": "Ce verb 'a fi' trebuie folosit în spaniolă pentru a spune 'Sunt în birou' (locație fizică)?",
      "options": [
        "SER: Soy en la oficina",
        "ESTAR: Estoy en la oficina",
        "TENER: Tengo en la oficina",
        "HABER: Hay en la oficina"
      ],
      "correctIndex": 1,
      "explanation": "Pentru orice localizare spațială (chiar și a clădirilor fixe), spaniola impune exclusiv verbul ESTAR: 'Estoy en la oficina'."
    }
  },
  {
    "id": "es-a1-2",
    "track": "Limba Spaniolă — Fundamente A1",
    "division": "Limbi Străine",
    "icon": "🇪🇸",
    "level": "A1 Conversațional / Nivel 2",
    "xp": 30,
    "title": "Capitolul 2: Timpul Prezent (Presente de Indicativo) — Verbe Regulate și „Tener”",
    "theory": "În spaniolă, verbele la infinitiv se împart în 3 grupe după terminație: **-AR** (*hablar* - a vorbi, *trabajar* - a munci), **-ER** (*comer* - a mânca, *aprender* - a învăța) și **-IR** (*vivir* - a locui/trăi, *escribir* - a scrie).\n\n**Terminațiile la timpul prezent (prin înlăturarea lui -ar / -er / -ir):**\n- **Grupa I (-AR, ex: *hablar*):** habl**o**, habl**as**, habl**a**, habl**amos**, habl**áis**, habl**an**\n- **Grupa II (-ER, ex: *aprender*):** aprend**o**, aprend**es**, aprend**e**, aprend**emos**, aprend**éis**, aprend**en**\n- **Grupa III (-IR, ex: *vivir*):** viv**o**, viv**es**, viv**e**, viv**imos**, viv**ís**, viv**en**\n\n**Verbul fundamental TENER (a avea):**\n- **yo tengo**, **tú tienes**, **él/ella tiene**, **nosotros tenemos**, **ellos tienen**.\n- **Notă:** Pentru obligații personale se folosește structura **`tener que + infinitiv`**: *Tengo que estudiar* (Trebuie să studiez).",
    "glossary": [
      {
        "term": "Verbe în -AR",
        "def": "Grupa I de verbe: hablar, trabajar (hablo, hablas, habla, hablamos, habláis, hablan)."
      },
      {
        "term": "Verbe în -ER",
        "def": "Grupa II de verbe: comer, aprender (como, comes, come, comemos, coméis, comen)."
      },
      {
        "term": "Verbe în -IR",
        "def": "Grupa III de verbe: vivir, escribir (vivo, vives, vive, vivimos, vivís, viven)."
      },
      {
        "term": "Tener que + inf",
        "def": "Structură verbală care exprimă obligația personală ('trebuie să...')."
      }
    ],
    "example": "// Exemple la timpul prezent:\n\"Hablo español e inglés.\" -> Vorbesc spaniolă și engleză.\n\"Nosotros vivimos en esta ciudad.\" -> Noi locuim în acest oraș.\n\"Tengo que trabajar hoy.\" -> Trebuie să lucrez astăzi.",
    "prompt": "Traducere RO -> ES: \"Eu vorbesc spaniolă\" (folosind verbul hablar).",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Yo hablo español."
    ],
    "officialSolution": "Yo hablo español.",
    "explanation": "(Yo) hablo español.",
    "hint": "(Yo) hablo español.",
    "matchingPairs": [
      {
        "left": "Yo hablo",
        "right": "Eu vorbesc (verbul hablar)"
      },
      {
        "left": "Nosotros vivimos",
        "right": "Noi trăim / locuim (verbul vivir)"
      },
      {
        "left": "Yo tengo",
        "right": "Eu am (verbul tener la persoana I)"
      },
      {
        "left": "Tengo que estudiar",
        "right": "Trebuie să studiez (obligație)"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă de persoana I singular la prezent pentru verbul neregulat 'tener' (a avea)?",
      "options": [
        "Yo teno",
        "Yo tengo",
        "Yo tieno",
        "Yo tenez"
      ],
      "correctIndex": 1,
      "explanation": "Verbul 'tener' are persoana I neregulată: 'Yo tengo' (urmat de tú tienes, él tiene etc.)."
    }
  },
  {
    "id": "es-a1-3",
    "track": "Limba Spaniolă — Fundamente A1",
    "division": "Limbi Străine",
    "icon": "🇪🇸",
    "level": "A1 Consolidat / Nivel 3",
    "xp": 25,
    "title": "Capitolul 3: Dialog Uzual, Salutări, Călătorii și Expresii Cotidiene",
    "theory": "**Expresii esențiale pentru interacțiunile zilnice în spaniolă:**\n- **Momentele zilei & Salutul:**\n  - *¡Hola!* (Bună / Salut!)\n  - *¡Buenos días!* (Bună dimineața / Bună ziua — până la prânz)\n  - *¡Buenas tardes!* (Bună ziua / Bună după-amiaza)\n  - *¡Buenas noches!* (Bună seara / Noapte bună)\n  - *¡Hasta luego!* (Pe mai târziu!) / *¡Hasta mañana!* (Pe mâine!)\n- **Întrebări și politețe în călătorii / restaurante:**\n  - *¿Cómo estás?* (Ce faci? — informal) / *¿Qué tal?* (Cum merge?)\n  - *Por favor* (Vă rog) / *Muchas gracias* (Mulțumesc mult) / *De nada* (Cu plăcere)\n  - *¿Cuánto cuesta esto?* (Cât costă asta?)\n  - *La cuenta, por favor.* (Nota de plată, vă rog.)\n  - *¿Dónde está la estación?* (Unde este gara?)",
    "glossary": [
      {
        "term": "¡Hola!",
        "def": "Bună! / Salut! (salut universal colocvial și prietenos)."
      },
      {
        "term": "Buenos días",
        "def": "Bună dimineața / Bună ziua (folosit până la masa de prânz)."
      },
      {
        "term": "Por favor",
        "def": "Vă rog / Te rog."
      },
      {
        "term": "La cuenta, por favor",
        "def": "Formula standard de a cere nota de plată la restaurant."
      }
    ],
    "example": "— ¡Hola! ¡Buenos días! ¿Qué tal?\n— ¡Muy bien, gracias! ¿Y tú?\n— Todo bien. Disculpa, ¿dónde está el hotel central?\n— Está muy cerca, a dos minutos de aquí.\n— ¡Muchas gracias! ¡Hasta luego!",
    "prompt": "Cum ceri politicos nota de plată la un restaurant în spaniolă: \"Nota de plată, vă rog\"?",
    "caseSensitive": false,
    "acceptedAnswers": [
      "La cuenta, por favor."
    ],
    "officialSolution": "La cuenta, por favor.",
    "explanation": "La cuenta, por favor.",
    "hint": "La cuenta, por favor.",
    "matchingPairs": [
      {
        "left": "¡Hola! ¿Qué tal?",
        "right": "Salut! Cum merge?"
      },
      {
        "left": "Muchas gracias",
        "right": "Mulțumesc foarte mult"
      },
      {
        "left": "De nada",
        "right": "Cu plăcere / Pentru nimic"
      },
      {
        "left": "¡Hasta luego!",
        "right": "Pe mai târziu!"
      }
    ],
    "quiz": {
      "question": "Cum răspunzi politicos în spaniolă când cineva îți mulțumește spunând '¡Muchas gracias!'?",
      "options": [
        "¡Por favor!",
        "¡De nada!",
        "¡Buenos días!",
        "¡Hasta mañana!"
      ],
      "correctIndex": 1,
      "explanation": "'¡De nada!' înseamnă 'Pentru nimic / Cu plăcere' și este replica standard după 'gracias'."
    }
  },
  {
    "id": "devops-1-ex1",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "level": "Mid-Level / Nivel 2",
    "xp": 35,
    "title": "Capitolul 1: Terminalul Linux, Fluxuri I/O (stdin, stdout, stderr) și Pipes — Partea 1",
    "theory": "În sistemele UNIX/Linux, orice proces deschide automat trei fluxuri standard de intrare/ieșire (identificate prin *File Descriptors*):\n1. **`stdin` (File Descriptor `0`):** Fluxul standard de intrare (implicit tastatura sau datele primite prin redirecționarea `<` ori pipe `|`).\n2. **`stdout` (File Descriptor `1`):** Fluxul standard de ieșire pentru rezultate normale (implicit ecranul terminalului).\n3. **`stderr` (File Descriptor `2`):** Fluxul standard de erori și mesaje de diagnostic (separat de `stdout` pentru a nu polua fișierele de output).\n\n**Operatori esențiali de redirecționare și înlănțuire:**\n- **`>` (Overwrite)** și **`>>` (Append):** Redirecționează `stdout` într-un fișier (`ls -la > list.txt`).\n- **`2>`**: Redirecționează doar erorile (`stderr`), de exemplu `2> errors.log` sau `2> /dev/null` (suprimarea erorilor).\n- **`2>&1`**: Unește fluxul de erori (`2`) cu fluxul standard (`1`), util pentru logarea completă: `./app.sh > full.log 2>&1`.\n- **`|` (Pipe):** Trimite `stdout`-ul comenzii din stânga direct ca `stdin` pentru comanda din dreapta (`cat access.log | grep \"404\" | wc -l`).",
    "glossary": [
      {
        "term": "File Descriptor",
        "def": "Număr întreg prin care nucleul identifică un flux deschis de date (0=in, 1=out, 2=err)."
      },
      {
        "term": "Pipe (|)",
        "def": "Mecanism IPC ce transmite ieșirea standard a unui proces direct în intrarea altui proces."
      },
      {
        "term": "Redirecționare",
        "def": "Modificarea destinației sau sursei fluxurilor I/O către fișiere utilizând operatorii >, >> sau <."
      },
      {
        "term": "Stderr (2)",
        "def": "Canalul dedicat mesajelor de diagnoză și eroare, separat de fluxul standard stdout."
      }
    ],
    "example": "# 1. Redirectionam output-ul normal in out.log si erorile in err.log\nfind /var/log -name \"*.log\" > out.log 2> err.log\n\n# 2. Redirectionam atat stdout cat si stderr in acelasi fisier\nnpm run build > build_output.log 2>&1\n\n# 3. Inlantuire cu Pipes (|) si schimbare permisiuni executie (chmod)\nchmod +x deploy.sh\nps aux | grep \"node\" | awk '{print $2}'",
    "prompt": "Redirecționează erorile standard (descriptorul 2 / stderr) ale comenzii \"make\" către fișierul \"errors.txt\".",
    "acceptedAnswers": [
      "make 2> errors.txt"
    ],
    "regexPattern": "^make\\s+2>\\s*errors\\.txt$",
    "officialSolution": "make 2> errors.txt",
    "explanation": "Folosește operatorul 2> între comandă și fișier.",
    "hint": "Folosește operatorul 2> între comandă și fișier.",
    "matchingPairs": [
      {
        "left": "stdin (0)",
        "right": "Intrarea standard a procesului (tastatură / stream)"
      },
      {
        "left": "stdout (1)",
        "right": "Ieșirea standard a procesului pentru date normale"
      },
      {
        "left": "stderr (2)",
        "right": "Fluxul de diagnostic și erori al procesului"
      },
      {
        "left": "2> /dev/null",
        "right": "Suprimarea completă a mesajelor de eroare"
      }
    ],
    "quiz": {
      "question": "Ce descriptor de fișier identifică fluxul standard de erori (stderr) în UNIX/Linux?",
      "options": [
        "Descriptorul 0",
        "Descriptorul 1",
        "Descriptorul 2",
        "Descriptorul 3"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "devops-1-ex2",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "level": "Mid-Level / Nivel 2",
    "xp": 30,
    "title": "Capitolul 1: Terminalul Linux, Fluxuri I/O (stdin, stdout, stderr) și Pipes — Partea 2",
    "theory": "În sistemele UNIX/Linux, orice proces deschide automat trei fluxuri standard de intrare/ieșire (identificate prin *File Descriptors*):\n1. **`stdin` (File Descriptor `0`):** Fluxul standard de intrare (implicit tastatura sau datele primite prin redirecționarea `<` ori pipe `|`).\n2. **`stdout` (File Descriptor `1`):** Fluxul standard de ieșire pentru rezultate normale (implicit ecranul terminalului).\n3. **`stderr` (File Descriptor `2`):** Fluxul standard de erori și mesaje de diagnostic (separat de `stdout` pentru a nu polua fișierele de output).\n\n**Operatori esențiali de redirecționare și înlănțuire:**\n- **`>` (Overwrite)** și **`>>` (Append):** Redirecționează `stdout` într-un fișier (`ls -la > list.txt`).\n- **`2>`**: Redirecționează doar erorile (`stderr`), de exemplu `2> errors.log` sau `2> /dev/null` (suprimarea erorilor).\n- **`2>&1`**: Unește fluxul de erori (`2`) cu fluxul standard (`1`), util pentru logarea completă: `./app.sh > full.log 2>&1`.\n- **`|` (Pipe):** Trimite `stdout`-ul comenzii din stânga direct ca `stdin` pentru comanda din dreapta (`cat access.log | grep \"404\" | wc -l`).",
    "glossary": [
      {
        "term": "File Descriptor",
        "def": "Număr întreg prin care nucleul identifică un flux deschis de date (0=in, 1=out, 2=err)."
      },
      {
        "term": "Pipe (|)",
        "def": "Mecanism IPC ce transmite ieșirea standard a unui proces direct în intrarea altui proces."
      },
      {
        "term": "Redirecționare",
        "def": "Modificarea destinației sau sursei fluxurilor I/O către fișiere utilizând operatorii >, >> sau <."
      },
      {
        "term": "Stderr (2)",
        "def": "Canalul dedicat mesajelor de diagnoză și eroare, separat de fluxul standard stdout."
      }
    ],
    "example": "# 1. Redirectionam output-ul normal in out.log si erorile in err.log\nfind /var/log -name \"*.log\" > out.log 2> err.log\n\n# 2. Redirectionam atat stdout cat si stderr in acelasi fisier\nnpm run build > build_output.log 2>&1\n\n# 3. Inlantuire cu Pipes (|) si schimbare permisiuni executie (chmod)\nchmod +x deploy.sh\nps aux | grep \"node\" | awk '{print $2}'",
    "prompt": "Acordă permisiuni de execuție (+x) pentru fișierul script \"backup.sh\" în Linux.",
    "acceptedAnswers": [
      "chmod +x backup.sh"
    ],
    "regexPattern": "^chmod\\s+\\+x\\s+backup\\.sh$",
    "officialSolution": "chmod +x backup.sh",
    "explanation": "Folosește comanda chmod +x urmată de numele fișierului.",
    "hint": "Folosește comanda chmod +x urmată de numele fișierului.",
    "matchingPairs": [
      {
        "left": "stdin (0)",
        "right": "Intrarea standard a procesului (tastatură / stream)"
      },
      {
        "left": "stdout (1)",
        "right": "Ieșirea standard a procesului pentru date normale"
      },
      {
        "left": "stderr (2)",
        "right": "Fluxul de diagnostic și erori al procesului"
      },
      {
        "left": "2> /dev/null",
        "right": "Suprimarea completă a mesajelor de eroare"
      }
    ],
    "quiz": {
      "question": "Ce descriptor de fișier identifică fluxul standard de erori (stderr) în UNIX/Linux?",
      "options": [
        "Descriptorul 0",
        "Descriptorul 1",
        "Descriptorul 2",
        "Descriptorul 3"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "devops-1-ex3",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "level": "Mid-Level / Nivel 2",
    "xp": 35,
    "title": "Capitolul 1: Terminalul Linux, Fluxuri I/O (stdin, stdout, stderr) și Pipes — Partea 3",
    "theory": "În sistemele UNIX/Linux, orice proces deschide automat trei fluxuri standard de intrare/ieșire (identificate prin *File Descriptors*):\n1. **`stdin` (File Descriptor `0`):** Fluxul standard de intrare (implicit tastatura sau datele primite prin redirecționarea `<` ori pipe `|`).\n2. **`stdout` (File Descriptor `1`):** Fluxul standard de ieșire pentru rezultate normale (implicit ecranul terminalului).\n3. **`stderr` (File Descriptor `2`):** Fluxul standard de erori și mesaje de diagnostic (separat de `stdout` pentru a nu polua fișierele de output).\n\n**Operatori esențiali de redirecționare și înlănțuire:**\n- **`>` (Overwrite)** și **`>>` (Append):** Redirecționează `stdout` într-un fișier (`ls -la > list.txt`).\n- **`2>`**: Redirecționează doar erorile (`stderr`), de exemplu `2> errors.log` sau `2> /dev/null` (suprimarea erorilor).\n- **`2>&1`**: Unește fluxul de erori (`2`) cu fluxul standard (`1`), util pentru logarea completă: `./app.sh > full.log 2>&1`.\n- **`|` (Pipe):** Trimite `stdout`-ul comenzii din stânga direct ca `stdin` pentru comanda din dreapta (`cat access.log | grep \"404\" | wc -l`).",
    "glossary": [
      {
        "term": "Pipeline",
        "def": "Înlănțuire de programe independente unde datele curg de la stânga la dreapta."
      },
      {
        "term": "grep",
        "def": "Utilitar UNIX de căutare a liniilor ce corespund unei expresii regulate."
      },
      {
        "term": "cat",
        "def": "Concatenarea și afișarea conținutului fișierelor pe stdout."
      },
      {
        "term": "awk",
        "def": "Limbaj de procesare a textului bazat pe coloane și tipare."
      }
    ],
    "example": "# 1. Redirectionam output-ul normal in out.log si erorile in err.log\nfind /var/log -name \"*.log\" > out.log 2> err.log\n\n# 2. Redirectionam atat stdout cat si stderr in acelasi fisier\nnpm run build > build_output.log 2>&1\n\n# 3. Inlantuire cu Pipes (|) si schimbare permisiuni executie (chmod)\nchmod +x deploy.sh\nps aux | grep \"node\" | awk '{print $2}'",
    "prompt": "Folosește un pipe (|) pentru a trimite output-ul comenzii \"cat server.log\" către comanda \"grep ERROR\".",
    "acceptedAnswers": [
      "cat server.log | grep ERROR"
    ],
    "regexPattern": "^cat\\s+server\\.log\\s*\\|\\s*grep\\s+[\"']?ERROR[\"']?$",
    "officialSolution": "cat server.log | grep ERROR",
    "explanation": "cat server.log | grep ERROR",
    "hint": "cat server.log | grep ERROR",
    "matchingPairs": [
      {
        "left": "| (Pipe)",
        "right": "Leagă stdout-ul din stânga la stdin-ul din dreapta"
      },
      {
        "left": "grep",
        "right": "Filtrează liniile de text pe baza unui tipar"
      },
      {
        "left": "cat",
        "right": "Afișează conținutul unui fișier"
      },
      {
        "left": "wc -l",
        "right": "Numără liniile de text primite ca intrare"
      }
    ],
    "quiz": {
      "question": "Ce operator este folosit în terminalul Linux pentru a conecta stdout-ul unei comenzi la stdin-ul altei comenzi?",
      "options": [
        ">",
        ">>",
        "|",
        "&"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "devops-2-ex1",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "level": "Mid-Senior / Nivel 3",
    "xp": 30,
    "title": "Capitolul 2: Git Internals, Branching, Merge vs. Rebase și Stash — Partea 1",
    "theory": "Un inginer software eficient înțelege cum funcționează **Git** ca un graf orientat aciclic (DAG) de commit-uri:\n- **`git checkout -b <branch>` (sau `git switch -c <branch>`):** Creează și comută instantaneu pe o ramură nouă.\n- **`git merge` vs. `git rebase`:**\n  - **Merge** păstrează istoricul cronologic complet și creează un *Merge Commit* suplimentar.\n  - **Rebase** (`git rebase main`) rescrie baza ramurii curente mutând commit-urile tale în vârful ramurii `main`, rezultând un istoric perfect liniar și curat (nu se folosește niciodată pe ramuri publice partajate fără coordonare!).\n- **`git stash` / `git stash pop`:** Salvează temporar modificările necomise într-o stivă locală pentru a putea schimba rapid ramura fără a face un commit incomplet.",
    "glossary": [
      {
        "term": "git checkout -b",
        "def": "Creează instant o nouă ramură de dezvoltare și mută HEAD pe aceasta."
      },
      {
        "term": "git stash",
        "def": "Salvează modificările nestructurate într-o stivă temporară pentru a curăța working tree-ul."
      },
      {
        "term": "git stash pop",
        "def": "Reaplică cel mai recent stash salvat și îl elimină din stivă."
      },
      {
        "term": "Fast-Forward",
        "def": "Actualizarea pointerului de branch fără a crea un commit suplimentar de merge."
      }
    ],
    "example": "# Salvare temporara a lucrului curent\ngit stash push -m \"WIP: refactorizare autentificare\"\n\n# Crearea unei ramuri noi folosind comanda moderna switch\ngit switch -c feature/jwt-auth\n\n# Reaplicarea modificarilor din stash\ngit stash pop\n\n# Aducerea ramurii curente la zi peste main (istoric liniar)\ngit fetch origin\ngit rebase origin/main",
    "prompt": "Creează și comută pe o ramură Git nouă numită \"feature/login\" folosind comanda clasică git checkout.",
    "acceptedAnswers": [
      "git checkout -b feature/login"
    ],
    "regexPattern": "^git\\s+(checkout\\s+-b|switch\\s+-c)\\s+feature\\/login$",
    "officialSolution": "git checkout -b feature/login",
    "explanation": "git checkout -b feature/login",
    "hint": "git checkout -b feature/login",
    "matchingPairs": [
      {
        "left": "git checkout -b",
        "right": "Creează și comută pe o nouă ramură"
      },
      {
        "left": "git stash",
        "right": "Salvează temporar modificările curente neterminate"
      },
      {
        "left": "git stash pop",
        "right": "Restaurează și șterge ultimul stash din stivă"
      },
      {
        "left": "git rebase",
        "right": "Reaplică commit-urile peste noua bază a ramurii"
      }
    ],
    "quiz": {
      "question": "Care comandă Git extrage și aplică ultimul stash din stivă, eliminându-l din listă?",
      "options": [
        "git stash apply",
        "git stash pop",
        "git stash drop",
        "git stash clear"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "devops-2-ex2",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "level": "Mid-Senior / Nivel 3",
    "xp": 35,
    "title": "Capitolul 2: Git Internals, Branching, Merge vs. Rebase și Stash — Partea 2",
    "theory": "Un inginer software eficient înțelege cum funcționează **Git** ca un graf orientat aciclic (DAG) de commit-uri:\n- **`git checkout -b <branch>` (sau `git switch -c <branch>`):** Creează și comută instantaneu pe o ramură nouă.\n- **`git merge` vs. `git rebase`:**\n  - **Merge** păstrează istoricul cronologic complet și creează un *Merge Commit* suplimentar.\n  - **Rebase** (`git rebase main`) rescrie baza ramurii curente mutând commit-urile tale în vârful ramurii `main`, rezultând un istoric perfect liniar și curat (nu se folosește niciodată pe ramuri publice partajate fără coordonare!).\n- **`git stash` / `git stash pop`:** Salvează temporar modificările necomise într-o stivă locală pentru a putea schimba rapid ramura fără a face un commit incomplet.",
    "glossary": [
      {
        "term": "git checkout -b",
        "def": "Creează instant o nouă ramură de dezvoltare și mută HEAD pe aceasta."
      },
      {
        "term": "git stash",
        "def": "Salvează modificările nestructurate într-o stivă temporară pentru a curăța working tree-ul."
      },
      {
        "term": "git stash pop",
        "def": "Reaplică cel mai recent stash salvat și îl elimină din stivă."
      },
      {
        "term": "Fast-Forward",
        "def": "Actualizarea pointerului de branch fără a crea un commit suplimentar de merge."
      }
    ],
    "example": "# Salvare temporara a lucrului curent\ngit stash push -m \"WIP: refactorizare autentificare\"\n\n# Crearea unei ramuri noi folosind comanda moderna switch\ngit switch -c feature/jwt-auth\n\n# Reaplicarea modificarilor din stash\ngit stash pop\n\n# Aducerea ramurii curente la zi peste main (istoric liniar)\ngit fetch origin\ngit rebase origin/main",
    "prompt": "Extrage și aplică ultimele modificări salvate în stiva temporară Git (eliminându-le din stash).",
    "acceptedAnswers": [
      "git stash pop"
    ],
    "regexPattern": "^git\\s+stash\\s+pop$",
    "officialSolution": "git stash pop",
    "explanation": "git stash pop",
    "hint": "git stash pop",
    "matchingPairs": [
      {
        "left": "git checkout -b",
        "right": "Creează și comută pe o nouă ramură"
      },
      {
        "left": "git stash",
        "right": "Salvează temporar modificările curente neterminate"
      },
      {
        "left": "git stash pop",
        "right": "Restaurează și șterge ultimul stash din stivă"
      },
      {
        "left": "git rebase",
        "right": "Reaplică commit-urile peste noua bază a ramurii"
      }
    ],
    "quiz": {
      "question": "Care comandă Git extrage și aplică ultimul stash din stivă, eliminându-l din listă?",
      "options": [
        "git stash apply",
        "git stash pop",
        "git stash drop",
        "git stash clear"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "devops-3-ex1",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "level": "Senior / Nivel 4",
    "xp": 40,
    "title": "Capitolul 3: Containerizare cu Docker & Dockerfile Multi-Stage — Partea 1",
    "theory": "**Docker** izolează aplicațiile și dependențele lor în containere ușoare care partajează kernelul sistemului gazdă:\n- **Imagine (Image):** Un șablon read-only construit în straturi (*layers*) pe baza unui `Dockerfile`.\n- **Container:** O instanță rulabilă a unei imagini.\n- **Multi-Stage Builds:** Tehnică de arhitectură prin care compilarea (ex: `npm run build` sau compilarea C++/C#/Java) se face într-un prim stagiu (`AS builder`), iar în imaginea finală de producție se copiază exclusiv artefactele compilate, reducând dimensiunea imaginii de la >1GB la câteva zeci de MB.",
    "glossary": [
      {
        "term": "Docker Image",
        "def": "Pachet imutabil ce conține codul, dependențele și runtime-ul necesar execuției."
      },
      {
        "term": "Container",
        "def": "Instanță izolată a unei imagini rulată pe kernel-ul sistemului gazdă."
      },
      {
        "term": "Multi-Stage Build",
        "def": "Tehnică Dockerfile ce separă mediul de compilare de imaginea finală minimală."
      },
      {
        "term": "Port Mapping (-p)",
        "def": "Redirecționarea traficului de pe un port al mașinii gazdă către un port din container."
      }
    ],
    "example": "# Stage 1: Build React/Vite App\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\n# Stage 2: Production Nginx Server (Ultra-lightweight)\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]",
    "prompt": "Construiește o imagine Docker din directorul curent (.) și etichetează-o (-t) cu numele \"my-app:v1\".",
    "acceptedAnswers": [
      "docker build -t my-app:v1 ."
    ],
    "regexPattern": "^docker\\s+build\\s+-t\\s+my-app:v1\\s+\\.$",
    "officialSolution": "docker build -t my-app:v1 .",
    "explanation": "docker build -t my-app:v1 .",
    "hint": "docker build -t my-app:v1 .",
    "matchingPairs": [
      {
        "left": "docker build -t",
        "right": "Construiește și etichetează o imagine din Dockerfile"
      },
      {
        "left": "docker run -d",
        "right": "Rulează un container în modul detașat (în fundal)"
      },
      {
        "left": "-p 8080:80",
        "right": "Mapează portul 8080 al gazdei la portul 80 din container"
      },
      {
        "left": "Multi-stage",
        "right": "Optimizează mărimea imaginii finale eliminând uneltele de build"
      }
    ],
    "quiz": {
      "question": "Ce flag este folosit la `docker run` pentru a rula containerul în fundal (daemon / detached mode)?",
      "options": [
        "-b",
        "-d",
        "-f",
        "-bg"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "devops-3-ex2",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "level": "Senior / Nivel 4",
    "xp": 45,
    "title": "Capitolul 3: Containerizare cu Docker & Dockerfile Multi-Stage — Partea 2",
    "theory": "**Docker** izolează aplicațiile și dependențele lor în containere ușoare care partajează kernelul sistemului gazdă:\n- **Imagine (Image):** Un șablon read-only construit în straturi (*layers*) pe baza unui `Dockerfile`.\n- **Container:** O instanță rulabilă a unei imagini.\n- **Multi-Stage Builds:** Tehnică de arhitectură prin care compilarea (ex: `npm run build` sau compilarea C++/C#/Java) se face într-un prim stagiu (`AS builder`), iar în imaginea finală de producție se copiază exclusiv artefactele compilate, reducând dimensiunea imaginii de la >1GB la câteva zeci de MB.",
    "glossary": [
      {
        "term": "Docker Image",
        "def": "Pachet imutabil ce conține codul, dependențele și runtime-ul necesar execuției."
      },
      {
        "term": "Container",
        "def": "Instanță izolată a unei imagini rulată pe kernel-ul sistemului gazdă."
      },
      {
        "term": "Multi-Stage Build",
        "def": "Tehnică Dockerfile ce separă mediul de compilare de imaginea finală minimală."
      },
      {
        "term": "Port Mapping (-p)",
        "def": "Redirecționarea traficului de pe un port al mașinii gazdă către un port din container."
      }
    ],
    "example": "# Stage 1: Build React/Vite App\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\n# Stage 2: Production Nginx Server (Ultra-lightweight)\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]",
    "prompt": "Pornește în fundal (-d) un container din imaginea \"nginx\" mapând portul 8080 al gazdei la portul 80 al containerului (-p 8080:80).",
    "acceptedAnswers": [
      "docker run -d -p 8080:80 nginx"
    ],
    "regexPattern": "^docker\\s+run\\s+(-d\\s+-p|-p\\s+8080:80\\s+-d)(\\s+8080:80)?\\s+nginx$",
    "officialSolution": "docker run -d -p 8080:80 nginx",
    "explanation": "docker run -d -p 8080:80 nginx",
    "hint": "docker run -d -p 8080:80 nginx",
    "matchingPairs": [
      {
        "left": "docker build -t",
        "right": "Construiește și etichetează o imagine din Dockerfile"
      },
      {
        "left": "docker run -d",
        "right": "Rulează un container în modul detașat (în fundal)"
      },
      {
        "left": "-p 8080:80",
        "right": "Mapează portul 8080 al gazdei la portul 80 din container"
      },
      {
        "left": "Multi-stage",
        "right": "Optimizează mărimea imaginii finale eliminând uneltele de build"
      }
    ],
    "quiz": {
      "question": "Ce flag este folosit la `docker run` pentru a rula containerul în fundal (daemon / detached mode)?",
      "options": [
        "-b",
        "-d",
        "-f",
        "-bg"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "ts-react-1-ex1",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "level": "Mid-Level / Nivel 2",
    "xp": 30,
    "title": "Capitolul 1: Sistemul de Tipuri în TypeScript (Interfaces, Union Types & Type Guards) — Partea 1",
    "theory": "**TypeScript** adaugă un sistem de tipizare statică structurală peste JavaScript, eliminând erorile de runtime înainte ca aplicația să ajungă în producție:\n- **`interface` vs. `type`:** Interfețele sunt ideale pentru definirea contractelor obiectelor și ale props-urilor în React (suportă *declaration merging* și `extends`), în timp ce `type` este indispensabil pentru **Union Types** (`type Status = 'idle' | 'loading' | 'success' | 'error'`), **Tuples** și tipuri condiționale.\n- **Proprietăți opționale (`?`) și `readonly`:** Previn mutațiile accidentale ale stării.",
    "glossary": [
      {
        "term": "Union Type (|)",
        "def": "Permite unei valori să aparțină unuia dintre mai multe tipuri declarate explicit."
      },
      {
        "term": "Literal Types",
        "def": "Tipuri care acceptă doar valori specifice constante (ex: 'light' | 'dark')."
      },
      {
        "term": "Type Guard",
        "def": "Expresie de verificare la runtime ce îngustează tipul unei variabile (ex: typeof, instanceof)."
      },
      {
        "term": "Type Inference",
        "def": "Abilitatea compilatorului TypeScript de a deduce automat tipul unei expresii."
      }
    ],
    "example": "export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';\n\nexport interface UserProfile {\n  readonly id: string;\n  username: string;\n  email: string;\n  avatarUrl?: string; // Proprietate optionala (string | undefined)\n}\n\nfunction formatUser(user: UserProfile): string {\n  return `${user.username} (${user.email})`;\n}",
    "prompt": "Definește un Union Type numit \"Theme\" care poate avea doar valorile literale \"light\" sau \"dark\".",
    "acceptedAnswers": [
      "type Theme = \"light\" | \"dark\";"
    ],
    "regexPattern": "^type\\s+Theme\\s*=\\s*[\"']light[\"']\\s*\\|\\s*[\"']dark[\"']\\s*;?$",
    "officialSolution": "type Theme = \"light\" | \"dark\";",
    "explanation": "type Theme = \"light\" | \"dark\";",
    "hint": "type Theme = \"light\" | \"dark\";",
    "matchingPairs": [
      {
        "left": "type Theme",
        "right": "Union type cu valori literale (\"light\" | \"dark\")"
      },
      {
        "left": "Type Guard",
        "right": "Verificare ce îngustează tipul la runtime (typeof x === 'number')"
      },
      {
        "left": "interface",
        "right": "Contract ce definește forma structurală a unui obiect"
      },
      {
        "left": "Type Alias",
        "right": "Nume alternativ atribuit unui tip complex sau primitiv"
      }
    ],
    "quiz": {
      "question": "Cum definim în TypeScript o variabilă care poate fi fie string, fie number?",
      "options": [
        "string & number",
        "string | number",
        "string || number",
        "Union<string, number>"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "ts-react-1-ex2",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "level": "Mid-Level / Nivel 2",
    "xp": 35,
    "title": "Capitolul 1: Sistemul de Tipuri în TypeScript (Interfaces, Union Types & Type Guards) — Partea 2",
    "theory": "**TypeScript** adaugă un sistem de tipizare statică structurală peste JavaScript, eliminând erorile de runtime înainte ca aplicația să ajungă în producție:\n- **`interface` vs. `type`:** Interfețele sunt ideale pentru definirea contractelor obiectelor și ale props-urilor în React (suportă *declaration merging* și `extends`), în timp ce `type` este indispensabil pentru **Union Types** (`type Status = 'idle' | 'loading' | 'success' | 'error'`), **Tuples** și tipuri condiționale.\n- **Proprietăți opționale (`?`) și `readonly`:** Previn mutațiile accidentale ale stării.",
    "glossary": [
      {
        "term": "Union Type (|)",
        "def": "Permite unei valori să aparțină unuia dintre mai multe tipuri declarate explicit."
      },
      {
        "term": "Literal Types",
        "def": "Tipuri care acceptă doar valori specifice constante (ex: 'light' | 'dark')."
      },
      {
        "term": "Type Guard",
        "def": "Expresie de verificare la runtime ce îngustează tipul unei variabile (ex: typeof, instanceof)."
      },
      {
        "term": "Type Inference",
        "def": "Abilitatea compilatorului TypeScript de a deduce automat tipul unei expresii."
      }
    ],
    "example": "export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';\n\nexport interface UserProfile {\n  readonly id: string;\n  username: string;\n  email: string;\n  avatarUrl?: string; // Proprietate optionala (string | undefined)\n}\n\nfunction formatUser(user: UserProfile): string {\n  return `${user.username} (${user.email})`;\n}",
    "prompt": "Declară în TypeScript o funcție săgeată (arrow function) în constanta \"double\" care primește parametrul \"x: number\" și returnează explicit \": number\" cu expresia \"x * 2\".",
    "acceptedAnswers": [
      "const double = (x: number): number => x * 2;"
    ],
    "regexPattern": "^const\\s+double\\s*=\\s*\\(\\s*x\\s*:\\s*number\\s*\\)\\s*:\\s*number\\s*=>\\s*x\\s*\\*\\s*2\\s*;?$",
    "officialSolution": "const double = (x: number): number => x * 2;",
    "explanation": "const double = (x: number): number => x * 2;",
    "hint": "const double = (x: number): number => x * 2;",
    "matchingPairs": [
      {
        "left": "type Theme",
        "right": "Union type cu valori literale (\"light\" | \"dark\")"
      },
      {
        "left": "Type Guard",
        "right": "Verificare ce îngustează tipul la runtime (typeof x === 'number')"
      },
      {
        "left": "interface",
        "right": "Contract ce definește forma structurală a unui obiect"
      },
      {
        "left": "Type Alias",
        "right": "Nume alternativ atribuit unui tip complex sau primitiv"
      }
    ],
    "quiz": {
      "question": "Cum definim în TypeScript o variabilă care poate fi fie string, fie number?",
      "options": [
        "string & number",
        "string | number",
        "string || number",
        "Union<string, number>"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "ts-react-2-ex1",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "level": "Senior / Nivel 4",
    "xp": 40,
    "title": "Capitolul 2: Generics și Utility Types (Partial, Pick, Omit, Record) — Partea 1",
    "theory": "Pentru a evita duplicarea interfețelor în aplicații mari, TypeScript oferă **Generics** și **Utility Types** predefinite:\n1. **`Partial<T>`**: Transformă toate proprietățile lui `T` în proprietăți opționale (ideal pentru payload-uri de tip `PATCH` / update parțial).\n2. **`Pick<T, 'k1' | 'k2'>`**: Creează un tip nou extrăgând doar cheile specificate din `T`.\n3. **`Omit<T, 'id' | 'createdAt'>`**: Creează un tip nou excluzând cheile specificate (ideal pentru formulare de creare unde `id`-ul este generat pe backend).\n4. **`Record<K, V>`**: Definește un dicționar tipizat în care cheile au tipul `K`, iar valorile au tipul `V`.",
    "glossary": [
      {
        "term": "Partial<T>",
        "def": "Utility Type care transformă toate proprietățile lui T în câmpuri opționale (?)"
      },
      {
        "term": "Omit<T, K>",
        "def": "Construiește un tip preluând toate proprietățile lui T și excluzând cheile K."
      },
      {
        "term": "Pick<T, K>",
        "def": "Construiește un tip preluând strict setul de proprietăți specificat în K."
      },
      {
        "term": "Record<K, T>",
        "def": "Creează un tip de dicționar unde cheile sunt de tip K și valorile de tip T."
      }
    ],
    "example": "interface Product {\n  id: string;\n  title: string;\n  price: number;\n  stock: number;\n}\n\n// Pentru creare nu avem inca \"id\"\ntype CreateProductDto = Omit<Product, 'id'>;\n\n// Pentru update partial (orice camp este optional)\ntype UpdateProductDto = Partial<CreateProductDto>;\n\n// Dictionar de preturi pe valute\nconst currencyRates: Record<'EUR' | 'USD' | 'RON', number> = {\n  EUR: 1,\n  USD: 1.08,\n  RON: 4.97\n};",
    "prompt": "Creează un tip numit \"UserUpdate\" care face toate proprietățile interfeței \"User\" opționale folosind un Utility Type.",
    "acceptedAnswers": [
      "type UserUpdate = Partial<User>;"
    ],
    "regexPattern": "^type\\s+UserUpdate\\s*=\\s*Partial\\s*<\\s*User\\s*>\\s*;?$",
    "officialSolution": "type UserUpdate = Partial<User>;",
    "explanation": "Folosește Partial<User>.",
    "hint": "Folosește Partial<User>.",
    "matchingPairs": [
      {
        "left": "Partial<User>",
        "right": "Toate proprietățile devin opționale"
      },
      {
        "left": "Omit<User, 'password'>",
        "right": "Exclude proprietatea password din tip"
      },
      {
        "left": "Pick<User, 'id'>",
        "right": "Păstrează doar proprietatea id"
      },
      {
        "left": "Record<string, number>",
        "right": "Obiect de tip dicționar cu chei string și valori number"
      }
    ],
    "quiz": {
      "question": "Ce Utility Type TypeScript exclude o proprietate specificată dintr-o interfață existentă?",
      "options": [
        "Exclude<T, K>",
        "Omit<T, K>",
        "Remove<T, K>",
        "Pick<T, K>"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "ts-react-2-ex2",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "level": "Senior / Nivel 4",
    "xp": 45,
    "title": "Capitolul 2: Generics și Utility Types (Partial, Pick, Omit, Record) — Partea 2",
    "theory": "Pentru a evita duplicarea interfețelor în aplicații mari, TypeScript oferă **Generics** și **Utility Types** predefinite:\n1. **`Partial<T>`**: Transformă toate proprietățile lui `T` în proprietăți opționale (ideal pentru payload-uri de tip `PATCH` / update parțial).\n2. **`Pick<T, 'k1' | 'k2'>`**: Creează un tip nou extrăgând doar cheile specificate din `T`.\n3. **`Omit<T, 'id' | 'createdAt'>`**: Creează un tip nou excluzând cheile specificate (ideal pentru formulare de creare unde `id`-ul este generat pe backend).\n4. **`Record<K, V>`**: Definește un dicționar tipizat în care cheile au tipul `K`, iar valorile au tipul `V`.",
    "glossary": [
      {
        "term": "Partial<T>",
        "def": "Utility Type care transformă toate proprietățile lui T în câmpuri opționale (?)"
      },
      {
        "term": "Omit<T, K>",
        "def": "Construiește un tip preluând toate proprietățile lui T și excluzând cheile K."
      },
      {
        "term": "Pick<T, K>",
        "def": "Construiește un tip preluând strict setul de proprietăți specificat în K."
      },
      {
        "term": "Record<K, T>",
        "def": "Creează un tip de dicționar unde cheile sunt de tip K și valorile de tip T."
      }
    ],
    "example": "interface Product {\n  id: string;\n  title: string;\n  price: number;\n  stock: number;\n}\n\n// Pentru creare nu avem inca \"id\"\ntype CreateProductDto = Omit<Product, 'id'>;\n\n// Pentru update partial (orice camp este optional)\ntype UpdateProductDto = Partial<CreateProductDto>;\n\n// Dictionar de preturi pe valute\nconst currencyRates: Record<'EUR' | 'USD' | 'RON', number> = {\n  EUR: 1,\n  USD: 1.08,\n  RON: 4.97\n};",
    "prompt": "Creează un tip numit \"UserWithoutPassword\" care exclude cheia \"password\" din interfața \"User\" folosind Omit.",
    "acceptedAnswers": [
      "type UserWithoutPassword = Omit<User, \"password\">;"
    ],
    "regexPattern": "^type\\s+UserWithoutPassword\\s*=\\s*Omit\\s*<\\s*User\\s*,\\s*[\"']password[\"']\\s*>\\s*;?$",
    "officialSolution": "type UserWithoutPassword = Omit<User, \"password\">;",
    "explanation": "type UserWithoutPassword = Omit<User, \"password\">;",
    "hint": "type UserWithoutPassword = Omit<User, \"password\">;",
    "matchingPairs": [
      {
        "left": "Partial<User>",
        "right": "Toate proprietățile devin opționale"
      },
      {
        "left": "Omit<User, 'password'>",
        "right": "Exclude proprietatea password din tip"
      },
      {
        "left": "Pick<User, 'id'>",
        "right": "Păstrează doar proprietatea id"
      },
      {
        "left": "Record<string, number>",
        "right": "Obiect de tip dicționar cu chei string și valori number"
      }
    ],
    "quiz": {
      "question": "Ce Utility Type TypeScript exclude o proprietate specificată dintr-o interfață existentă?",
      "options": [
        "Exclude<T, K>",
        "Omit<T, K>",
        "Remove<T, K>",
        "Pick<T, K>"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "ts-react-3-ex1",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "level": "Senior Architect / Nivel 5",
    "xp": 45,
    "title": "Capitolul 3: React Hooks Avansate (useState Tipizat, useEffect Cleanup, useMemo) — Partea 1",
    "theory": "În arhitectura React modernă, gestionarea corectă a ciclului de viață și a referințelor în memorie previne bug-urile de tip *memory leak* și *stale closures*:\n- **`useState<T>`**: Când valoarea inițială este `null`, specificăm explicit uniunea generică: `const [user, setUser] = useState<User | null>(null);`.\n- **Funcția de Cleanup în `useEffect`**: Orice abonament la WebSockets, event listener pe `window`, timer (`setInterval`) sau cerere HTTP (`AbortController`) trebuie curățat în funcția returnată de `useEffect`.\n- **`useMemo` & `useCallback`**: Memoizează rezultatul unui calcul costisitor (`useMemo`) sau referința unei funcții (`useCallback`) între randări, recalculând doar când se schimbă o dependență din array.",
    "glossary": [
      {
        "term": "useState<T>",
        "def": "Hook React pentru starea locală a componentei, tipizată generic."
      },
      {
        "term": "useEffect",
        "def": "Hook dedicat efectelor secundare (apeluri API, listeneri, subscripții)."
      },
      {
        "term": "Cleanup Function",
        "def": "Funcție returnată de useEffect pentru a elibera resurse la demontare."
      },
      {
        "term": "Dependency Array",
        "def": "Lista variabilelor ce determină re-executarea callback-ului useEffect."
      }
    ],
    "example": "import { useState, useEffect, useMemo } from 'react';\n\nexport function SearchUsers({ users }: { users: { id: number; name: string }[] }) {\n  const [query, setQuery] = useState<string>('');\n\n  // Calcul memoizat: nu refiltreaza lista daca \"users\" si \"query\" nu s-au schimbat\n  const filtered = useMemo(() => {\n    return users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));\n  }, [users, query]);\n\n  useEffect(() => {\n    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setQuery(''); };\n    window.addEventListener('keydown', onKeyDown);\n    return () => window.removeEventListener('keydown', onKeyDown); // Cleanup obligatoriu\n  }, []);\n\n  return <input value={query} onChange={e => setQuery(e.target.value)} />;\n}",
    "prompt": "Inițializează un state React pentru \"user\" și \"setUser\" tipizat generic ca \"User | null\" cu valoarea inițială null.",
    "acceptedAnswers": [
      "const [user, setUser] = useState<User | null>(null);"
    ],
    "regexPattern": "^const\\s*\\[\\s*user\\s*,\\s*setUser\\s*\\]\\s*=\\s*useState\\s*<\\s*User\\s*\\|\\s*null\\s*>\\s*\\(\\s*null\\s*\\)\\s*;?$",
    "officialSolution": "const [user, setUser] = useState<User | null>(null);",
    "explanation": "const [user, setUser] = useState<User | null>(null);",
    "hint": "const [user, setUser] = useState<User | null>(null);",
    "matchingPairs": [
      {
        "left": "useState<T | null>(null)",
        "right": "Inițializează state ce poate conține obiectul T sau null"
      },
      {
        "left": "useEffect(fn, [])",
        "right": "Rulează fn o singură dată, la montarea inițială"
      },
      {
        "left": "return () => cleanup()",
        "right": "Funcție de eliberare a resurselor la demontarea componentei"
      },
      {
        "left": "useMemo",
        "right": "Memorează rezultatul unui calcul costisitor între randări"
      }
    ],
    "quiz": {
      "question": "Ce indică transmiterea unui array vid ([]) ca al doilea argument la useEffect?",
      "options": [
        "Efectul rulează la fiecare randare",
        "Efectul nu rulează niciodată",
        "Efectul rulează o singură dată la montare",
        "Efectul este asincron"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "ts-react-3-ex2",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "level": "Senior Architect / Nivel 5",
    "xp": 40,
    "title": "Capitolul 3: React Hooks Avansate (useState Tipizat, useEffect Cleanup, useMemo) — Partea 2",
    "theory": "În arhitectura React modernă, gestionarea corectă a ciclului de viață și a referințelor în memorie previne bug-urile de tip *memory leak* și *stale closures*:\n- **`useState<T>`**: Când valoarea inițială este `null`, specificăm explicit uniunea generică: `const [user, setUser] = useState<User | null>(null);`.\n- **Funcția de Cleanup în `useEffect`**: Orice abonament la WebSockets, event listener pe `window`, timer (`setInterval`) sau cerere HTTP (`AbortController`) trebuie curățat în funcția returnată de `useEffect`.\n- **`useMemo` & `useCallback`**: Memoizează rezultatul unui calcul costisitor (`useMemo`) sau referința unei funcții (`useCallback`) între randări, recalculând doar când se schimbă o dependență din array.",
    "glossary": [
      {
        "term": "useState<T>",
        "def": "Hook React pentru starea locală a componentei, tipizată generic."
      },
      {
        "term": "useEffect",
        "def": "Hook dedicat efectelor secundare (apeluri API, listeneri, subscripții)."
      },
      {
        "term": "Cleanup Function",
        "def": "Funcție returnată de useEffect pentru a elibera resurse la demontare."
      },
      {
        "term": "Dependency Array",
        "def": "Lista variabilelor ce determină re-executarea callback-ului useEffect."
      }
    ],
    "example": "import { useState, useEffect, useMemo } from 'react';\n\nexport function SearchUsers({ users }: { users: { id: number; name: string }[] }) {\n  const [query, setQuery] = useState<string>('');\n\n  // Calcul memoizat: nu refiltreaza lista daca \"users\" si \"query\" nu s-au schimbat\n  const filtered = useMemo(() => {\n    return users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));\n  }, [users, query]);\n\n  useEffect(() => {\n    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setQuery(''); };\n    window.addEventListener('keydown', onKeyDown);\n    return () => window.removeEventListener('keydown', onKeyDown); // Cleanup obligatoriu\n  }, []);\n\n  return <input value={query} onChange={e => setQuery(e.target.value)} />;\n}",
    "prompt": "Scrie un apel useEffect care execută funcția \"fetchData()\" o singură dată la montarea componentei (array de dependențe gol).",
    "acceptedAnswers": [
      "useEffect(() => { fetchData(); }, []);"
    ],
    "regexPattern": "^useEffect\\s*\\(\\s*\\(\\s*\\)\\s*=>\\s*\\{\\s*fetchData\\s*\\(\\s*\\)\\s*;?\\s*\\}\\s*,\\s*\\[\\s*\\]\\s*\\)\\s*;?$",
    "officialSolution": "useEffect(() => { fetchData(); }, []);",
    "explanation": "useEffect(() => { fetchData(); }, []);",
    "hint": "useEffect(() => { fetchData(); }, []);",
    "matchingPairs": [
      {
        "left": "useState<T | null>(null)",
        "right": "Inițializează state ce poate conține obiectul T sau null"
      },
      {
        "left": "useEffect(fn, [])",
        "right": "Rulează fn o singură dată, la montarea inițială"
      },
      {
        "left": "return () => cleanup()",
        "right": "Funcție de eliberare a resurselor la demontarea componentei"
      },
      {
        "left": "useMemo",
        "right": "Memorează rezultatul unui calcul costisitor între randări"
      }
    ],
    "quiz": {
      "question": "Ce indică transmiterea unui array vid ([]) ca al doilea argument la useEffect?",
      "options": [
        "Efectul rulează la fiecare randare",
        "Efectul nu rulează niciodată",
        "Efectul rulează o singură dată la montare",
        "Efectul este asincron"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "dsa-1-ex1",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "level": "Mid-Level / Nivel 3",
    "xp": 25,
    "title": "Capitolul 1: Complexitatea Big-O, Two Pointers și Sliding Window — Partea 1",
    "theory": "Notația **Big-O** măsoară modul în care timpul de execuție (**Time Complexity**) și memoria auxiliară (**Space Complexity**) cresc odată cu dimensiunea inputului $N$:\n- **`O(1)` (Constant):** Accesul la un index într-un array sau căutarea într-un Hash Map.\n- **`O(log N)` (Logaritmic):** Căutarea binară (înjumătățirea spațiului de căutare la fiecare pas).\n- **`O(N)` (Liniar):** Parcurgerea unei liste printr-o singură buclă sau cu tehnica **Two Pointers**.\n- **`O(N log N)` (Liniaritmic):** Algoritmii optimi de sortare (MergeSort, QuickSort, TimSort).\n- **`O(N²)` (Pătratic):** Două bucle imbricate — adesea poate fi optimizat la `O(N)` folosind **Two Pointers** sau un **Hash Map**!",
    "glossary": [
      {
        "term": "Big-O Notation",
        "def": "Măsură matematică a modului în care timpul sau memoria cresc odată cu mărimea intrării N."
      },
      {
        "term": "Two Pointers",
        "def": "Tipar algoritmic ce folosește doi indici (stânga/dreapta) pentru a parcurge o structură liniară în O(N)."
      },
      {
        "term": "Sliding Window",
        "def": "Fereastră dinamică de date ce glisează peste un array pentru a găsi subșiruri optime."
      },
      {
        "term": "O(log n)",
        "def": "Complexitate logaritmică caracteristică algoritmilor de împărțire repetată (Binary Search)."
      }
    ],
    "example": "// Tehnica Two Pointers: Verificare palindrom sau pereche cu suma tinta in array sortat in O(N) timp si O(1) spatiu\nfunction hasPairWithSum(sortedArr, target) {\n  let left = 0;\n  let right = sortedArr.length - 1;\n\n  while (left < right) {\n    const sum = sortedArr[left] + sortedArr[right];\n    if (sum === target) return true;\n    if (sum < target) left++;\n    else right--;\n  }\n  return false;\n}",
    "prompt": "Scrie condiția buclei while din tehnica Two Pointers care continuă cât timp indexul \"left\" este strict mai mic decât indexul \"right\".",
    "acceptedAnswers": [
      "while (left < right)"
    ],
    "regexPattern": "^while\\s*\\(\\s*left\\s*<\\s*right\\s*\\)$",
    "officialSolution": "while (left < right)",
    "explanation": "while (left < right)",
    "hint": "while (left < right)",
    "matchingPairs": [
      {
        "left": "Two Pointers",
        "right": "Parcurgere simultană din ambele capete în O(N)"
      },
      {
        "left": "Binary Search",
        "right": "Căutare eficientă în tablou sortat în timp O(log N)"
      },
      {
        "left": "while (left < right)",
        "right": "Condiția de oprire când pointerii se întâlnesc"
      },
      {
        "left": "O(1)",
        "right": "Complexitate de timp constantă, independentă de N"
      }
    ],
    "quiz": {
      "question": "Care este complexitatea de timp a algoritmului Binary Search într-un tablou sortat de N elemente?",
      "options": [
        "O(N)",
        "O(N log N)",
        "O(log N)",
        "O(1)"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "dsa-1-ex2",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "level": "Mid-Level / Nivel 3",
    "xp": 30,
    "title": "Capitolul 1: Complexitatea Big-O, Two Pointers și Sliding Window — Partea 2",
    "theory": "Notația **Big-O** măsoară modul în care timpul de execuție (**Time Complexity**) și memoria auxiliară (**Space Complexity**) cresc odată cu dimensiunea inputului $N$:\n- **`O(1)` (Constant):** Accesul la un index într-un array sau căutarea într-un Hash Map.\n- **`O(log N)` (Logaritmic):** Căutarea binară (înjumătățirea spațiului de căutare la fiecare pas).\n- **`O(N)` (Liniar):** Parcurgerea unei liste printr-o singură buclă sau cu tehnica **Two Pointers**.\n- **`O(N log N)` (Liniaritmic):** Algoritmii optimi de sortare (MergeSort, QuickSort, TimSort).\n- **`O(N²)` (Pătratic):** Două bucle imbricate — adesea poate fi optimizat la `O(N)` folosind **Two Pointers** sau un **Hash Map**!",
    "glossary": [
      {
        "term": "Big-O Notation",
        "def": "Măsură matematică a modului în care timpul sau memoria cresc odată cu mărimea intrării N."
      },
      {
        "term": "Two Pointers",
        "def": "Tipar algoritmic ce folosește doi indici (stânga/dreapta) pentru a parcurge o structură liniară în O(N)."
      },
      {
        "term": "Sliding Window",
        "def": "Fereastră dinamică de date ce glisează peste un array pentru a găsi subșiruri optime."
      },
      {
        "term": "O(log n)",
        "def": "Complexitate logaritmică caracteristică algoritmilor de împărțire repetată (Binary Search)."
      }
    ],
    "example": "// Tehnica Two Pointers: Verificare palindrom sau pereche cu suma tinta in array sortat in O(N) timp si O(1) spatiu\nfunction hasPairWithSum(sortedArr, target) {\n  let left = 0;\n  let right = sortedArr.length - 1;\n\n  while (left < right) {\n    const sum = sortedArr[left] + sortedArr[right];\n    if (sum === target) return true;\n    if (sum < target) left++;\n    else right--;\n  }\n  return false;\n}",
    "prompt": "Care este complexitatea de timp Big-O a căutării binare (Binary Search) într-un array sortat de N elemente? Scrie doar notația (ex: O(N)).",
    "acceptedAnswers": [
      "O(log n)"
    ],
    "regexPattern": "^O\\s*\\(\\s*log\\s*n\\s*\\)$",
    "officialSolution": "O(log n)",
    "explanation": "Spațiul de căutare se înjumătățește la fiecare pas: O(log n).",
    "hint": "Spațiul de căutare se înjumătățește la fiecare pas: O(log n).",
    "matchingPairs": [
      {
        "left": "Two Pointers",
        "right": "Parcurgere simultană din ambele capete în O(N)"
      },
      {
        "left": "Binary Search",
        "right": "Căutare eficientă în tablou sortat în timp O(log N)"
      },
      {
        "left": "while (left < right)",
        "right": "Condiția de oprire când pointerii se întâlnesc"
      },
      {
        "left": "O(1)",
        "right": "Complexitate de timp constantă, independentă de N"
      }
    ],
    "quiz": {
      "question": "Care este complexitatea de timp a algoritmului Binary Search într-un tablou sortat de N elemente?",
      "options": [
        "O(N)",
        "O(N log N)",
        "O(log N)",
        "O(1)"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "dsa-2-ex1",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "level": "Senior / Nivel 4",
    "xp": 45,
    "title": "Capitolul 2: Căutarea Binară (Binary Search) fără Integer Overflow — Partea 1",
    "theory": "**Căutarea Binară (Binary Search)** găsește un element într-o colecție sortată în timp `O(log N)` (pentru $1.000.000$ de elemente, face maximum $20$ de comparații!).\n\n**Detaliul clasic de interviu (Prevenirea Integer Overflow):**\nÎn limbaje cu întregi pe 32 de biți (C, C++, Java, C#), calculul clasic `mid = (left + right) / 2` poate provoca **Integer Overflow** dacă `left + right` depășește `2^31 - 1` (`INT_MAX`).\nFormula matematică sigură folosită în producție este:\n`mid = left + (right - left) / 2` (sau cu trunchiere în JS: `left + Math.floor((right - left) / 2)`).",
    "glossary": [
      {
        "term": "Integer Overflow",
        "def": "Depășirea valorii maxime a unui tip întreg la adunarea (left + right)."
      },
      {
        "term": "left + (right - left) / 2",
        "def": "Formula sigură matematic pentru calcularea mijlocului fără depășire."
      },
      {
        "term": "Monotonicitate",
        "def": "Proprietatea tablourilor sortate care permite eliminarea a jumătate din spațiul de căutare."
      },
      {
        "term": "Search Space",
        "def": "Intervalul de indici [left, right] în care elementul căutat se poate afla."
      }
    ],
    "example": "int binarySearch(const std::vector<int>& nums, int target) {\n    int left = 0;\n    int right = static_cast<int>(nums.size()) - 1;\n\n    while (left <= right) {\n        // Formula sigura impotriva Integer Overflow:\n        int mid = left + (right - left) / 2;\n\n        if (nums[mid] == target) return mid;\n        if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}",
    "prompt": "Scrie în C/C++/Java/C# instrucțiunea care calculează \"int mid\" din \"left\" și \"right\" fără risc de integer overflow.",
    "acceptedAnswers": [
      "int mid = left + (right - left) / 2;"
    ],
    "regexPattern": "^int\\s+mid\\s*=\\s*left\\s*\\+\\s*\\(\\s*right\\s*-\\s*left\\s*\\)\\s*\\/\\s*2\\s*;?$",
    "officialSolution": "int mid = left + (right - left) / 2;",
    "explanation": "int mid = left + (right - left) / 2;",
    "hint": "int mid = left + (right - left) / 2;",
    "matchingPairs": [
      {
        "left": "left + (right - left) / 2",
        "right": "Calcul sigur al mijlocului fără integer overflow"
      },
      {
        "left": "left = mid + 1",
        "right": "Restrânge căutarea la jumătatea superioară (dreapta)"
      },
      {
        "left": "right = mid - 1",
        "right": "Restrânge căutarea la jumătatea inferioară (stânga)"
      },
      {
        "left": "nums[mid] === target",
        "right": "Elementul căutat a fost identificat cu succes"
      }
    ],
    "quiz": {
      "question": "De ce formula `left + (right - left) / 2` este preferată în locul `(left + right) / 2`?",
      "options": [
        "Este mai rapidă pe CPU",
        "Previne depășirea valorii maxime a întregilor (Integer Overflow)",
        "Funcționează pe numere flotante",
        "Returnează automat numere impare"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "dsa-2-ex2",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "level": "Senior / Nivel 4",
    "xp": 35,
    "title": "Capitolul 2: Căutarea Binară (Binary Search) fără Integer Overflow — Partea 2",
    "theory": "**Căutarea Binară (Binary Search)** găsește un element într-o colecție sortată în timp `O(log N)` (pentru $1.000.000$ de elemente, face maximum $20$ de comparații!).\n\n**Detaliul clasic de interviu (Prevenirea Integer Overflow):**\nÎn limbaje cu întregi pe 32 de biți (C, C++, Java, C#), calculul clasic `mid = (left + right) / 2` poate provoca **Integer Overflow** dacă `left + right` depășește `2^31 - 1` (`INT_MAX`).\nFormula matematică sigură folosită în producție este:\n`mid = left + (right - left) / 2` (sau cu trunchiere în JS: `left + Math.floor((right - left) / 2)`).",
    "glossary": [
      {
        "term": "Integer Overflow",
        "def": "Depășirea valorii maxime a unui tip întreg la adunarea (left + right)."
      },
      {
        "term": "left + (right - left) / 2",
        "def": "Formula sigură matematic pentru calcularea mijlocului fără depășire."
      },
      {
        "term": "Monotonicitate",
        "def": "Proprietatea tablourilor sortate care permite eliminarea a jumătate din spațiul de căutare."
      },
      {
        "term": "Search Space",
        "def": "Intervalul de indici [left, right] în care elementul căutat se poate afla."
      }
    ],
    "example": "int binarySearch(const std::vector<int>& nums, int target) {\n    int left = 0;\n    int right = static_cast<int>(nums.size()) - 1;\n\n    while (left <= right) {\n        // Formula sigura impotriva Integer Overflow:\n        int mid = left + (right - left) / 2;\n\n        if (nums[mid] == target) return mid;\n        if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}",
    "prompt": "În Binary Search, dacă valoarea de la mijloc este mai mică decât ținta (nums[mid] < target), actualizează limita stângă \"left\" pentru a căuta în jumătatea dreaptă.",
    "acceptedAnswers": [
      "left = mid + 1;"
    ],
    "regexPattern": "^left\\s*=\\s*mid\\s*\\+\\s*1\\s*;?$",
    "officialSolution": "left = mid + 1;",
    "explanation": "left = mid + 1;",
    "hint": "left = mid + 1;",
    "matchingPairs": [
      {
        "left": "left + (right - left) / 2",
        "right": "Calcul sigur al mijlocului fără integer overflow"
      },
      {
        "left": "left = mid + 1",
        "right": "Restrânge căutarea la jumătatea superioară (dreapta)"
      },
      {
        "left": "right = mid - 1",
        "right": "Restrânge căutarea la jumătatea inferioară (stânga)"
      },
      {
        "left": "nums[mid] === target",
        "right": "Elementul căutat a fost identificat cu succes"
      }
    ],
    "quiz": {
      "question": "De ce formula `left + (right - left) / 2` este preferată în locul `(left + right) / 2`?",
      "options": [
        "Este mai rapidă pe CPU",
        "Previne depășirea valorii maxime a întregilor (Integer Overflow)",
        "Funcționează pe numere flotante",
        "Returnează automat numere impare"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "fr-b1-1-ex1",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "level": "A2 Intermediar / Nivel 2",
    "xp": 35,
    "title": "Capitolul 1: Timpul Trecut — Le Passé Composé (cu Avoir și Être) — Partea 1",
    "theory": "Pentru a povesti evenimente încheiate în trecut, franceza folosește **Le Passé Composé**, format din:\n`Auxiliarul AVOIR sau ÊTRE (la prezent) + Participiul Trecut al verbului`\n\n1. **Formarea participiului trecut regulat:**\n   - Verbele în **-ER** $\\rightarrow$ **-é** (*parler* $\\rightarrow$ *parlé*, *travailler* $\\rightarrow$ *travaillé*, *manger* $\\rightarrow$ *mangé*)\n   - Verbele în **-IR** $\\rightarrow$ **-i** (*finir* $\\rightarrow$ *fini*, *choisir* $\\rightarrow$ *choisi*)\n   - Verbele în **-RE** $\\rightarrow$ **-u** (*vendre* $\\rightarrow$ *vendu*, *attendre* $\\rightarrow$ *attendu*)\n   - Participii neregulate frecvente: *faire* $\\rightarrow$ **fait**, *prendre* $\\rightarrow$ **pris**, *voir* $\\rightarrow$ **vu**, *avoir* $\\rightarrow$ **eu**, *être* $\\rightarrow$ **été**.\n\n2. **Când folosim ÊTRE ca auxiliar (cu acord în gen și număr!)?**\n   - Cu cele **14+ verbe de mișcare și schimbare de stare** (*aller $\\rightarrow$ allé, venir $\\rightarrow$ venu, arriver $\\rightarrow$ arrivé, partir $\\rightarrow$ parti, entrer, sortir, naître, mourir, rester, tomber*) și cu **toate verbele reflexive** (*se lever*).",
    "glossary": [
      {
        "term": "Passé Composé",
        "def": "Timpul trecut uzual în franceză, format din auxiliar (avoir/être) + participiu trecut."
      },
      {
        "term": "Futur Proche",
        "def": "Viitorul apropiat format din prezentul verbului aller + infinitivul verbului de bază."
      },
      {
        "term": "Conditionnel Présent",
        "def": "Modul folosit pentru exprimarea cerințelor politicoase (Je voudrais...)."
      },
      {
        "term": "Subjonctif Présent",
        "def": "Mod verbal francez ce exprimă nesiguranță, dorință, necesitate sau emoție subiectivă."
      }
    ],
    "example": "// Cu auxiliarul AVOIR (majoritatea verbelor):\n\"J'ai travaillé toute la journée.\" -> Am lucrat toată ziua.\n\"Nous avons fini le projet hier.\"  -> Am terminat proiectul ieri.\n\n// Cu auxiliarul ÊTRE (acord cu subiectul: +e la feminin, +s la plural):\n\"Il est allé à Paris.\"   -> El a mers la Paris.\n\"Elle est allée à Lyon.\" -> Ea a mers la Lyon.\n\"Ils sont arrivés tôt.\"  -> Ei au ajuns devreme.",
    "prompt": "Scrie în franceză la Passé Composé: \"Am mâncat\" (folosind verbul manger).",
    "acceptedAnswers": [
      "J'ai mangé."
    ],
    "regexPattern": "^j['’]ai\\s+mang[eé]\\.?$",
    "officialSolution": "J'ai mangé.",
    "explanation": "Auxiliarul avoir la pers. I (J'ai) + participiul mangé.",
    "hint": "Auxiliarul avoir la pers. I (J'ai) + participiul mangé.",
    "matchingPairs": [
      {
        "left": "J'ai mangé",
        "right": "Am mâncat (Passé Composé cu avoir)"
      },
      {
        "left": "Il est allé",
        "right": "El a mers (Passé Composé cu être)"
      },
      {
        "left": "Je voudrais",
        "right": "Aș dori (exprimare politicoasă)"
      },
      {
        "left": "qu'il vienne",
        "right": "să vină (Subjonctif Présent după expresii de necesitate)"
      }
    ],
    "quiz": {
      "question": "Ce auxiliar se folosește în franceză pentru a forma Passé Composé pentru verbul de mișcare 'aller'?",
      "options": [
        "Avoir",
        "Être",
        "Faire",
        "Aller"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "fr-b1-1-ex2",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "level": "A2 Intermediar / Nivel 2",
    "xp": 40,
    "title": "Capitolul 1: Timpul Trecut — Le Passé Composé (cu Avoir și Être) — Partea 2",
    "theory": "Pentru a povesti evenimente încheiate în trecut, franceza folosește **Le Passé Composé**, format din:\n`Auxiliarul AVOIR sau ÊTRE (la prezent) + Participiul Trecut al verbului`\n\n1. **Formarea participiului trecut regulat:**\n   - Verbele în **-ER** $\\rightarrow$ **-é** (*parler* $\\rightarrow$ *parlé*, *travailler* $\\rightarrow$ *travaillé*, *manger* $\\rightarrow$ *mangé*)\n   - Verbele în **-IR** $\\rightarrow$ **-i** (*finir* $\\rightarrow$ *fini*, *choisir* $\\rightarrow$ *choisi*)\n   - Verbele în **-RE** $\\rightarrow$ **-u** (*vendre* $\\rightarrow$ *vendu*, *attendre* $\\rightarrow$ *attendu*)\n   - Participii neregulate frecvente: *faire* $\\rightarrow$ **fait**, *prendre* $\\rightarrow$ **pris**, *voir* $\\rightarrow$ **vu**, *avoir* $\\rightarrow$ **eu**, *être* $\\rightarrow$ **été**.\n\n2. **Când folosim ÊTRE ca auxiliar (cu acord în gen și număr!)?**\n   - Cu cele **14+ verbe de mișcare și schimbare de stare** (*aller $\\rightarrow$ allé, venir $\\rightarrow$ venu, arriver $\\rightarrow$ arrivé, partir $\\rightarrow$ parti, entrer, sortir, naître, mourir, rester, tomber*) și cu **toate verbele reflexive** (*se lever*).",
    "glossary": [
      {
        "term": "Passé Composé",
        "def": "Timpul trecut uzual în franceză, format din auxiliar (avoir/être) + participiu trecut."
      },
      {
        "term": "Futur Proche",
        "def": "Viitorul apropiat format din prezentul verbului aller + infinitivul verbului de bază."
      },
      {
        "term": "Conditionnel Présent",
        "def": "Modul folosit pentru exprimarea cerințelor politicoase (Je voudrais...)."
      },
      {
        "term": "Subjonctif Présent",
        "def": "Mod verbal francez ce exprimă nesiguranță, dorință, necesitate sau emoție subiectivă."
      }
    ],
    "example": "// Cu auxiliarul AVOIR (majoritatea verbelor):\n\"J'ai travaillé toute la journée.\" -> Am lucrat toată ziua.\n\"Nous avons fini le projet hier.\"  -> Am terminat proiectul ieri.\n\n// Cu auxiliarul ÊTRE (acord cu subiectul: +e la feminin, +s la plural):\n\"Il est allé à Paris.\"   -> El a mers la Paris.\n\"Elle est allée à Lyon.\" -> Ea a mers la Lyon.\n\"Ils sont arrivés tôt.\"  -> Ei au ajuns devreme.",
    "prompt": "Scrie în franceză: \"Noi am terminat proiectul\" (finir -> fini, proiectul -> le projet).",
    "acceptedAnswers": [
      "Nous avons fini le projet."
    ],
    "regexPattern": "^nous\\s+avons\\s+fini\\s+le\\s+projet\\.?$",
    "officialSolution": "Nous avons fini le projet.",
    "explanation": "Nous avons fini le projet.",
    "hint": "Nous avons fini le projet.",
    "matchingPairs": [
      {
        "left": "J'ai mangé",
        "right": "Am mâncat (Passé Composé cu avoir)"
      },
      {
        "left": "Il est allé",
        "right": "El a mers (Passé Composé cu être)"
      },
      {
        "left": "Je voudrais",
        "right": "Aș dori (exprimare politicoasă)"
      },
      {
        "left": "qu'il vienne",
        "right": "să vină (Subjonctif Présent după expresii de necesitate)"
      }
    ],
    "quiz": {
      "question": "Ce auxiliar se folosește în franceză pentru a forma Passé Composé pentru verbul de mișcare 'aller'?",
      "options": [
        "Avoir",
        "Être",
        "Faire",
        "Aller"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "fr-b1-1-ex3",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "level": "A2 Intermediar / Nivel 2",
    "xp": 40,
    "title": "Capitolul 1: Timpul Trecut — Le Passé Composé (cu Avoir și Être) — Partea 3",
    "theory": "Pentru a povesti evenimente încheiate în trecut, franceza folosește **Le Passé Composé**, format din:\n`Auxiliarul AVOIR sau ÊTRE (la prezent) + Participiul Trecut al verbului`\n\n1. **Formarea participiului trecut regulat:**\n   - Verbele în **-ER** $\\rightarrow$ **-é** (*parler* $\\rightarrow$ *parlé*, *travailler* $\\rightarrow$ *travaillé*, *manger* $\\rightarrow$ *mangé*)\n   - Verbele în **-IR** $\\rightarrow$ **-i** (*finir* $\\rightarrow$ *fini*, *choisir* $\\rightarrow$ *choisi*)\n   - Verbele în **-RE** $\\rightarrow$ **-u** (*vendre* $\\rightarrow$ *vendu*, *attendre* $\\rightarrow$ *attendu*)\n   - Participii neregulate frecvente: *faire* $\\rightarrow$ **fait**, *prendre* $\\rightarrow$ **pris**, *voir* $\\rightarrow$ **vu**, *avoir* $\\rightarrow$ **eu**, *être* $\\rightarrow$ **été**.\n\n2. **Când folosim ÊTRE ca auxiliar (cu acord în gen și număr!)?**\n   - Cu cele **14+ verbe de mișcare și schimbare de stare** (*aller $\\rightarrow$ allé, venir $\\rightarrow$ venu, arriver $\\rightarrow$ arrivé, partir $\\rightarrow$ parti, entrer, sortir, naître, mourir, rester, tomber*) și cu **toate verbele reflexive** (*se lever*).",
    "glossary": [
      {
        "term": "Passé Composé",
        "def": "Timpul trecut uzual în franceză, format din auxiliar (avoir/être) + participiu trecut."
      },
      {
        "term": "Futur Proche",
        "def": "Viitorul apropiat format din prezentul verbului aller + infinitivul verbului de bază."
      },
      {
        "term": "Conditionnel Présent",
        "def": "Modul folosit pentru exprimarea cerințelor politicoase (Je voudrais...)."
      },
      {
        "term": "Subjonctif Présent",
        "def": "Mod verbal francez ce exprimă nesiguranță, dorință, necesitate sau emoție subiectivă."
      }
    ],
    "example": "// Cu auxiliarul AVOIR (majoritatea verbelor):\n\"J'ai travaillé toute la journée.\" -> Am lucrat toată ziua.\n\"Nous avons fini le projet hier.\"  -> Am terminat proiectul ieri.\n\n// Cu auxiliarul ÊTRE (acord cu subiectul: +e la feminin, +s la plural):\n\"Il est allé à Paris.\"   -> El a mers la Paris.\n\"Elle est allée à Lyon.\" -> Ea a mers la Lyon.\n\"Ils sont arrivés tôt.\"  -> Ei au ajuns devreme.",
    "prompt": "Scrie în franceză (masculin): \"El a mers la Paris\" (verbul aller se conjugă cu être!).",
    "acceptedAnswers": [
      "Il est allé à Paris."
    ],
    "regexPattern": "^il\\s+est\\s+all[eé]\\s+[aà]\\s+paris\\.?$",
    "officialSolution": "Il est allé à Paris.",
    "explanation": "Il est allé à Paris.",
    "hint": "Il est allé à Paris.",
    "matchingPairs": [
      {
        "left": "J'ai mangé",
        "right": "Am mâncat (Passé Composé cu avoir)"
      },
      {
        "left": "Il est allé",
        "right": "El a mers (Passé Composé cu être)"
      },
      {
        "left": "Je voudrais",
        "right": "Aș dori (exprimare politicoasă)"
      },
      {
        "left": "qu'il vienne",
        "right": "să vină (Subjonctif Présent după expresii de necesitate)"
      }
    ],
    "quiz": {
      "question": "Ce auxiliar se folosește în franceză pentru a forma Passé Composé pentru verbul de mișcare 'aller'?",
      "options": [
        "Avoir",
        "Être",
        "Faire",
        "Aller"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "fr-b1-2-ex1",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "level": "B1 Conversațional / Nivel 3",
    "xp": 35,
    "title": "Capitolul 2: Viitorul Apropiat (Futur Proche), Condiționalul Politicos și Conectori B1 — Partea 1",
    "theory": "**1. Le Futur Proche (Viitorul apropiat — planuri sigure):**\nSe formează extrem de simplu cu verbul **aller (la prezent) + infinitivul verbului**:\n- *Je vais voyager* (Voi călători / Urmează să călătoresc)\n- *Tu vas réussir* (Vei reuși)\n- *Nous allons commencer* (Vom începe)\n\n**2. Condiționalul de politețe (*Le Conditionnel Présent*):**\nÎn loc de *Je veux* („Vreau” — care sună prea direct în franceză), se folosește întotdeauna:\n- **Je voudrais + substantiv / infinitiv** (*Aș dori...*): *Je voudrais réserver une table, s'il vous plaît.*\n- **Pourriez-vous... ?** (*Ați putea...?*): *Pourriez-vous m'aider ?*\n\n**3. Conectori logici de nivel B1 (pentru argumentare și interviuri):**\n- *Parce que / Car* (pentru că), *Cependant / Pourtant* (cu toate acestea), *Donc / Par conséquent* (deci / prin urmare), *Grâce à* (datorită + aspect pozitiv).",
    "glossary": [
      {
        "term": "Passé Composé",
        "def": "Timpul trecut uzual în franceză, format din auxiliar (avoir/être) + participiu trecut."
      },
      {
        "term": "Futur Proche",
        "def": "Viitorul apropiat format din prezentul verbului aller + infinitivul verbului de bază."
      },
      {
        "term": "Conditionnel Présent",
        "def": "Modul folosit pentru exprimarea cerințelor politicoase (Je voudrais...)."
      },
      {
        "term": "Subjonctif Présent",
        "def": "Mod verbal francez ce exprimă nesiguranță, dorință, necesitate sau emoție subiectivă."
      }
    ],
    "example": "— Bonjour, je voudrais réserver une chambre pour deux nuits, s'il vous plaît.\n— Bien sûr ! Quand allez-vous arriver ?\n— Nous allons arriver demain soir, parce que nous prenons le train de 18h.",
    "prompt": "Traducere RO -> FR folosind Futur Proche: \"Vom începe mâine\" (nous + aller + commencer + demain).",
    "acceptedAnswers": [
      "Nous allons commencer demain."
    ],
    "regexPattern": "^nous\\s+allons\\s+commencer\\s+demain\\.?$",
    "officialSolution": "Nous allons commencer demain.",
    "explanation": "Nous allons commencer demain.",
    "hint": "Nous allons commencer demain.",
    "matchingPairs": [
      {
        "left": "J'ai mangé",
        "right": "Am mâncat (Passé Composé cu avoir)"
      },
      {
        "left": "Il est allé",
        "right": "El a mers (Passé Composé cu être)"
      },
      {
        "left": "Je voudrais",
        "right": "Aș dori (exprimare politicoasă)"
      },
      {
        "left": "qu'il vienne",
        "right": "să vină (Subjonctif Présent după expresii de necesitate)"
      }
    ],
    "quiz": {
      "question": "Ce auxiliar se folosește în franceză pentru a forma Passé Composé pentru verbul de mișcare 'aller'?",
      "options": [
        "Avoir",
        "Être",
        "Faire",
        "Aller"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "fr-b1-2-ex2",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "level": "B1 Conversațional / Nivel 3",
    "xp": 40,
    "title": "Capitolul 2: Viitorul Apropiat (Futur Proche), Condiționalul Politicos și Conectori B1 — Partea 2",
    "theory": "**1. Le Futur Proche (Viitorul apropiat — planuri sigure):**\nSe formează extrem de simplu cu verbul **aller (la prezent) + infinitivul verbului**:\n- *Je vais voyager* (Voi călători / Urmează să călătoresc)\n- *Tu vas réussir* (Vei reuși)\n- *Nous allons commencer* (Vom începe)\n\n**2. Condiționalul de politețe (*Le Conditionnel Présent*):**\nÎn loc de *Je veux* („Vreau” — care sună prea direct în franceză), se folosește întotdeauna:\n- **Je voudrais + substantiv / infinitiv** (*Aș dori...*): *Je voudrais réserver une table, s'il vous plaît.*\n- **Pourriez-vous... ?** (*Ați putea...?*): *Pourriez-vous m'aider ?*\n\n**3. Conectori logici de nivel B1 (pentru argumentare și interviuri):**\n- *Parce que / Car* (pentru că), *Cependant / Pourtant* (cu toate acestea), *Donc / Par conséquent* (deci / prin urmare), *Grâce à* (datorită + aspect pozitiv).",
    "glossary": [
      {
        "term": "Passé Composé",
        "def": "Timpul trecut uzual în franceză, format din auxiliar (avoir/être) + participiu trecut."
      },
      {
        "term": "Futur Proche",
        "def": "Viitorul apropiat format din prezentul verbului aller + infinitivul verbului de bază."
      },
      {
        "term": "Conditionnel Présent",
        "def": "Modul folosit pentru exprimarea cerințelor politicoase (Je voudrais...)."
      },
      {
        "term": "Subjonctif Présent",
        "def": "Mod verbal francez ce exprimă nesiguranță, dorință, necesitate sau emoție subiectivă."
      }
    ],
    "example": "— Bonjour, je voudrais réserver une chambre pour deux nuits, s'il vous plaît.\n— Bien sûr ! Quand allez-vous arriver ?\n— Nous allons arriver demain soir, parce que nous prenons le train de 18h.",
    "prompt": "Exprimă politicos în franceză: \"Aș dori o cafea, vă rog\" (folosind Je voudrais... și s'il vous plaît).",
    "acceptedAnswers": [
      "Je voudrais un café, s'il vous plaît."
    ],
    "regexPattern": "^je\\s+voudrais\\s+un\\s+caf[eé]\\s*,?\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?$",
    "officialSolution": "Je voudrais un café, s'il vous plaît.",
    "explanation": "Je voudrais un café, s'il vous plaît.",
    "hint": "Je voudrais un café, s'il vous plaît.",
    "matchingPairs": [
      {
        "left": "J'ai mangé",
        "right": "Am mâncat (Passé Composé cu avoir)"
      },
      {
        "left": "Il est allé",
        "right": "El a mers (Passé Composé cu être)"
      },
      {
        "left": "Je voudrais",
        "right": "Aș dori (exprimare politicoasă)"
      },
      {
        "left": "qu'il vienne",
        "right": "să vină (Subjonctif Présent după expresii de necesitate)"
      }
    ],
    "quiz": {
      "question": "Ce auxiliar se folosește în franceză pentru a forma Passé Composé pentru verbul de mișcare 'aller'?",
      "options": [
        "Avoir",
        "Être",
        "Faire",
        "Aller"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "es-b1-1-ex1",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "level": "A2 Intermediar / Nivel 2",
    "xp": 30,
    "title": "Capitolul 1: Structura Verbului „Gustar”, Verbele Reflexive și Gerunziul — Partea 1",
    "theory": "**1. Cum funcționează verbul GUSTAR (a plăcea):**\nÎn spaniolă (exact ca în română: *„Îmi place cafeaua / Îmi plac cărțile”*), lucrul care place este subiectul gramatical:\n- **Me gusta** + singular sau verb la infinitiv (*Me gusta el café. / Me gusta programar.*)\n- **Me gustan** + substantiv la plural (*Me gustan los coches deportivos.*)\n- Pronumele pentru toate persoanele: **Me** (mie), **Te** (ție), **Le** (lui/ei/dvs.), **Nos** (nouă), **Os** (vouă), **Les** (lor).\n\n**2. Prezentul Continuu (`Estar + Gerundio` — acțiune chiar în acest moment):**\n- Verbele în **-AR** $\\rightarrow$ **-ando** (*hablar* $\\rightarrow$ *hablando*, *trabajar* $\\rightarrow$ *trabajando*)\n- Verbele în **-ER / -IR** $\\rightarrow$ **-iendo** (*comer* $\\rightarrow$ *comiendo*, *aprender* $\\rightarrow$ *aprendiendo*)\n- Exemplu: *Estoy trabajando en un proyecto nuevo.* (Lucrez chiar acum la un proiect nou.)",
    "glossary": [
      {
        "term": "Verbul Gustar",
        "def": "Construcție spaniolă în care subiectul gramatical este lucrul plăcut (Me gusta viajar)."
      },
      {
        "term": "Gerundio (-ando, -iendo)",
        "def": "Formă verbală folosită cu 'estar' pentru a descrie acțiuni în desfășurare."
      },
      {
        "term": "Pretérito Indefinido",
        "def": "Trecutul simplu spaniol folosit pentru acțiuni finalizate la un moment clar (Ayer trabajé)."
      },
      {
        "term": "Modo Subjuntivo",
        "def": "Mod verbal ce exprimă dorințe, ipoteze, probabilități sau nesiguranță (Quiero que vengas)."
      }
    ],
    "example": "// GUSTAR (Singular vs. Plural):\n\"Me gusta mucho viajar y aprender idiomas.\" -> Îmi place mult să călătoresc și să învăț limbi străine.\n\"Nos gustan las películas de acción.\"       -> Ne plac filmele de acțiune.\n\n// ESTAR + GERUNDIO (Actiune in desfasurare):\n\"¿Qué estás haciendo?\" -> Ce faci (chiar acum)?\n\"Estoy estudiando español.\" -> Studiez spaniola (chiar acum).",
    "prompt": "Scrie în spaniolă: \"Îmi place să călătoresc\" (a călători = viajar).",
    "acceptedAnswers": [
      "Me gusta viajar."
    ],
    "regexPattern": "^me\\s+gusta\\s+viajar\\.?$",
    "officialSolution": "Me gusta viajar.",
    "explanation": "Me gusta viajar.",
    "hint": "Me gusta viajar.",
    "matchingPairs": [
      {
        "left": "Me gusta",
        "right": "Îmi place (construcție cu pronume indirect)"
      },
      {
        "left": "Estoy trabajando",
        "right": "Lucrez acum (estar + gerundio)"
      },
      {
        "left": "Ayer trabajé",
        "right": "Ieri am lucrat (pretérito indefinido)"
      },
      {
        "left": "Quiero que vengas",
        "right": "Vreau să vii (folosire obligatorie de subjuntivo)"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă a verbului 'trabajar' la gerunziu în spaniolă?",
      "options": [
        "Trabajado",
        "Trabajando",
        "Trabajiente",
        "Trabajó"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "es-b1-1-ex2",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "level": "A2 Intermediar / Nivel 2",
    "xp": 35,
    "title": "Capitolul 1: Structura Verbului „Gustar”, Verbele Reflexive și Gerunziul — Partea 2",
    "theory": "**1. Cum funcționează verbul GUSTAR (a plăcea):**\nÎn spaniolă (exact ca în română: *„Îmi place cafeaua / Îmi plac cărțile”*), lucrul care place este subiectul gramatical:\n- **Me gusta** + singular sau verb la infinitiv (*Me gusta el café. / Me gusta programar.*)\n- **Me gustan** + substantiv la plural (*Me gustan los coches deportivos.*)\n- Pronumele pentru toate persoanele: **Me** (mie), **Te** (ție), **Le** (lui/ei/dvs.), **Nos** (nouă), **Os** (vouă), **Les** (lor).\n\n**2. Prezentul Continuu (`Estar + Gerundio` — acțiune chiar în acest moment):**\n- Verbele în **-AR** $\\rightarrow$ **-ando** (*hablar* $\\rightarrow$ *hablando*, *trabajar* $\\rightarrow$ *trabajando*)\n- Verbele în **-ER / -IR** $\\rightarrow$ **-iendo** (*comer* $\\rightarrow$ *comiendo*, *aprender* $\\rightarrow$ *aprendiendo*)\n- Exemplu: *Estoy trabajando en un proyecto nuevo.* (Lucrez chiar acum la un proiect nou.)",
    "glossary": [
      {
        "term": "Verbul Gustar",
        "def": "Construcție spaniolă în care subiectul gramatical este lucrul plăcut (Me gusta viajar)."
      },
      {
        "term": "Gerundio (-ando, -iendo)",
        "def": "Formă verbală folosită cu 'estar' pentru a descrie acțiuni în desfășurare."
      },
      {
        "term": "Pretérito Indefinido",
        "def": "Trecutul simplu spaniol folosit pentru acțiuni finalizate la un moment clar (Ayer trabajé)."
      },
      {
        "term": "Modo Subjuntivo",
        "def": "Mod verbal ce exprimă dorințe, ipoteze, probabilități sau nesiguranță (Quiero que vengas)."
      }
    ],
    "example": "// GUSTAR (Singular vs. Plural):\n\"Me gusta mucho viajar y aprender idiomas.\" -> Îmi place mult să călătoresc și să învăț limbi străine.\n\"Nos gustan las películas de acción.\"       -> Ne plac filmele de acțiune.\n\n// ESTAR + GERUNDIO (Actiune in desfasurare):\n\"¿Qué estás haciendo?\" -> Ce faci (chiar acum)?\n\"Estoy estudiando español.\" -> Studiez spaniola (chiar acum).",
    "prompt": "Scrie în spaniolă folosind prezentul continuu (estar + gerunziu): \"Eu lucrez acum\" (trabajar -> trabajando, acum = ahora).",
    "acceptedAnswers": [
      "Estoy trabajando ahora."
    ],
    "regexPattern": "^(yo\\s+)?estoy\\s+trabajando\\s+ahora\\.?$",
    "officialSolution": "Estoy trabajando ahora.",
    "explanation": "Estoy trabajando ahora.",
    "hint": "Estoy trabajando ahora.",
    "matchingPairs": [
      {
        "left": "Me gusta",
        "right": "Îmi place (construcție cu pronume indirect)"
      },
      {
        "left": "Estoy trabajando",
        "right": "Lucrez acum (estar + gerundio)"
      },
      {
        "left": "Ayer trabajé",
        "right": "Ieri am lucrat (pretérito indefinido)"
      },
      {
        "left": "Quiero que vengas",
        "right": "Vreau să vii (folosire obligatorie de subjuntivo)"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă a verbului 'trabajar' la gerunziu în spaniolă?",
      "options": [
        "Trabajado",
        "Trabajando",
        "Trabajiente",
        "Trabajó"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "es-b1-2-ex1",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "level": "B1 Conversațional / Nivel 3",
    "xp": 40,
    "title": "Capitolul 2: Trecutul Simplu (Pretérito Indefinido) și Planuri de Viitor (Ir a + Infinitiv) — Partea 1",
    "theory": "**1. Pretérito Indefinido (Trecutul acțiunilor finalizate la un moment precis: *ayer, la semana pasada, en 2025*):**\n- Terminații regulate pentru **-AR** (*hablar / trabajar*):\n  - *yo trabaj**é***, *tú trabaj**aste***, *él trabaj**ó***, *nosotros trabaj**amos***, *ellos trabaj**aron***.\n- Terminații regulate pentru **-ER / -IR** (*comer / vivir*):\n  - *yo viv**í***, *tú viv**iste***, *él viv**ió***, *nosotros viv**imos***, *ellos viv**ieron***.\n- Verbele **SER** și **IR** (a merge) au exact aceeași formă la trecutul simplu (contextul face diferența!):\n  - **yo fui, tú fuiste, él/ella fue, nosotros fuimos, ellos fueron**.\n\n**2. Viitorul apropiat (`Ir a + Infinitiv`):**\n- *Voy a empezar* (Voi începe), *Vamos a viajar* (Vom călători).",
    "glossary": [
      {
        "term": "Verbul Gustar",
        "def": "Construcție spaniolă în care subiectul gramatical este lucrul plăcut (Me gusta viajar)."
      },
      {
        "term": "Gerundio (-ando, -iendo)",
        "def": "Formă verbală folosită cu 'estar' pentru a descrie acțiuni în desfășurare."
      },
      {
        "term": "Pretérito Indefinido",
        "def": "Trecutul simplu spaniol folosit pentru acțiuni finalizate la un moment clar (Ayer trabajé)."
      },
      {
        "term": "Modo Subjuntivo",
        "def": "Mod verbal ce exprimă dorințe, ipoteze, probabilități sau nesiguranță (Quiero que vengas)."
      }
    ],
    "example": "// Trecutul Simplu (Pretérito Indefinido):\n\"Ayer trabajé hasta tarde.\" -> Ieri am lucrat până târziu.\n\"El año pasado fuimos a Madrid.\" -> Anul trecut am mers la Madrid.\n\n// Viitorul cu IR + A + INFINITIV:\n\"Mañana voy a presentar mi proyecto.\" -> Mâine îmi voi prezenta proiectul.",
    "prompt": "Traducere RO -> ES la timpul trecut: \"Ieri am lucrat mult\" (ieri = ayer, am lucrat = trabajé, mult = mucho).",
    "acceptedAnswers": [
      "Ayer trabajé mucho."
    ],
    "regexPattern": "^ayer\\s+(yo\\s+)?trabaj[eé]\\s+mucho\\.?$",
    "officialSolution": "Ayer trabajé mucho.",
    "explanation": "Ayer trabajé mucho.",
    "hint": "Ayer trabajé mucho.",
    "matchingPairs": [
      {
        "left": "Me gusta",
        "right": "Îmi place (construcție cu pronume indirect)"
      },
      {
        "left": "Estoy trabajando",
        "right": "Lucrez acum (estar + gerundio)"
      },
      {
        "left": "Ayer trabajé",
        "right": "Ieri am lucrat (pretérito indefinido)"
      },
      {
        "left": "Quiero que vengas",
        "right": "Vreau să vii (folosire obligatorie de subjuntivo)"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă a verbului 'trabajar' la gerunziu în spaniolă?",
      "options": [
        "Trabajado",
        "Trabajando",
        "Trabajiente",
        "Trabajó"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "es-b1-2-ex2",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "level": "B1 Conversațional / Nivel 3",
    "xp": 40,
    "title": "Capitolul 2: Trecutul Simplu (Pretérito Indefinido) și Planuri de Viitor (Ir a + Infinitiv) — Partea 2",
    "theory": "**1. Pretérito Indefinido (Trecutul acțiunilor finalizate la un moment precis: *ayer, la semana pasada, en 2025*):**\n- Terminații regulate pentru **-AR** (*hablar / trabajar*):\n  - *yo trabaj**é***, *tú trabaj**aste***, *él trabaj**ó***, *nosotros trabaj**amos***, *ellos trabaj**aron***.\n- Terminații regulate pentru **-ER / -IR** (*comer / vivir*):\n  - *yo viv**í***, *tú viv**iste***, *él viv**ió***, *nosotros viv**imos***, *ellos viv**ieron***.\n- Verbele **SER** și **IR** (a merge) au exact aceeași formă la trecutul simplu (contextul face diferența!):\n  - **yo fui, tú fuiste, él/ella fue, nosotros fuimos, ellos fueron**.\n\n**2. Viitorul apropiat (`Ir a + Infinitiv`):**\n- *Voy a empezar* (Voi începe), *Vamos a viajar* (Vom călători).",
    "glossary": [
      {
        "term": "Verbul Gustar",
        "def": "Construcție spaniolă în care subiectul gramatical este lucrul plăcut (Me gusta viajar)."
      },
      {
        "term": "Gerundio (-ando, -iendo)",
        "def": "Formă verbală folosită cu 'estar' pentru a descrie acțiuni în desfășurare."
      },
      {
        "term": "Pretérito Indefinido",
        "def": "Trecutul simplu spaniol folosit pentru acțiuni finalizate la un moment clar (Ayer trabajé)."
      },
      {
        "term": "Modo Subjuntivo",
        "def": "Mod verbal ce exprimă dorințe, ipoteze, probabilități sau nesiguranță (Quiero que vengas)."
      }
    ],
    "example": "// Trecutul Simplu (Pretérito Indefinido):\n\"Ayer trabajé hasta tarde.\" -> Ieri am lucrat până târziu.\n\"El año pasado fuimos a Madrid.\" -> Anul trecut am mers la Madrid.\n\n// Viitorul cu IR + A + INFINITIV:\n\"Mañana voy a presentar mi proyecto.\" -> Mâine îmi voi prezenta proiectul.",
    "prompt": "Traducere RO -> ES folosind viitorul apropiat (ir a + infinitiv): \"Vom călători mâine\" (vamos a viajar mañana).",
    "acceptedAnswers": [
      "Vamos a viajar mañana."
    ],
    "regexPattern": "^(nosotros\\s+)?vamos\\s+a\\s+viajar\\s+ma[nñ]ana\\.?$",
    "officialSolution": "Vamos a viajar mañana.",
    "explanation": "Vamos a viajar mañana.",
    "hint": "Vamos a viajar mañana.",
    "matchingPairs": [
      {
        "left": "Me gusta",
        "right": "Îmi place (construcție cu pronume indirect)"
      },
      {
        "left": "Estoy trabajando",
        "right": "Lucrez acum (estar + gerundio)"
      },
      {
        "left": "Ayer trabajé",
        "right": "Ieri am lucrat (pretérito indefinido)"
      },
      {
        "left": "Quiero que vengas",
        "right": "Vreau să vii (folosire obligatorie de subjuntivo)"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă a verbului 'trabajar' la gerunziu în spaniolă?",
      "options": [
        "Trabajado",
        "Trabajando",
        "Trabajiente",
        "Trabajó"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-adv-1-ex1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "Senior Architect / Nivel 5",
    "xp": 40,
    "title": "Capitolul 1: Move Semantics, Rvalue References (&&) și std::move — Partea 1",
    "theory": "În C++ modern (C++11+), **Move Semantics** elimină copiile inutile de memorie pe Heap atunci când transferăm obiecte temporare (rvalues):\n- **Lvalue vs. Rvalue:** O lvalue are o adresă de memorie persistentă (un nume de variabilă), în timp ce o rvalue este o valoare temporară (un literal sau un obiect pe cale să expire).\n- **`std::move`**: Nu mută fizic nimic; este doar un cast care convertește o lvalue într-o rvalue reference (`T&&`), spunând compilatorului: *\"Tratează acest obiect ca pe o resursă temporară și fură-i pointerii intern (shallow copy urmată de nulificarea sursei)\"*.\n- **Move Constructor & Move Assignment Operator**: Evită alocările costisitoare de memorie în `std::vector` la redimensionare.",
    "glossary": [
      {
        "term": "Move Semantics",
        "def": "Transferul resurselor interne dintr-un obiect temporar în altul fără copiere costisitoare."
      },
      {
        "term": "Rvalue Reference (&&)",
        "def": "Referință la un obiect temporar care poate fi 'golit' de resurse în siguranță."
      },
      {
        "term": "std::move",
        "def": "Funcție standard ce efectuează un cast necondiționat al unei lvalue la o rvalue reference."
      },
      {
        "term": "std::lock_guard",
        "def": "Wrapper RAII care blochează un mutex la construcție și îl eliberează garantat la distrugere."
      }
    ],
    "example": "#include <iostream>\n#include <vector>\n#include <utility>\n\nclass HeavyBuffer {\nprivate:\n    size_t size;\n    int* data;\npublic:\n    explicit HeavyBuffer(size_t s) : size(s), data(new int[s]) {}\n\n    // Move Constructor (Noexcept pentru optimizari STL)\n    HeavyBuffer(HeavyBuffer&& other) noexcept \n        : size(other.size), data(other.data) {\n        other.size = 0;\n        other.data = nullptr; // Anulam sursa\n    }\n\n    ~HeavyBuffer() { delete[] data; }\n};",
    "prompt": "Convertește o lvalue \"obj\" într-o rvalue reference folosind funcția standard std::move.",
    "acceptedAnswers": [
      "std::move(obj)"
    ],
    "regexPattern": "^std::move\\s*\\(\\s*obj\\s*\\)$",
    "officialSolution": "std::move(obj)",
    "explanation": "std::move(obj)",
    "hint": "std::move(obj)",
    "matchingPairs": [
      {
        "left": "std::move(x)",
        "right": "Transformă x într-o rvalue reference pentru mutare"
      },
      {
        "left": "ClassName(ClassName&&)",
        "right": "Move constructor pentru preluarea resurselor"
      },
      {
        "left": "noexcept",
        "right": "Garantează că funcția nu aruncă excepții (esențial pentru move)"
      },
      {
        "left": "std::lock_guard",
        "right": "Gestiune sigură RAII a blocării și deblocării unui mutex"
      }
    ],
    "quiz": {
      "question": "Ce face în mod concret funcția `std::move` în C++ modern?",
      "options": [
        "Mută fizic octeții în memorie",
        "Efectuează un cast la rvalue reference (T&&)",
        "Șterge obiectul original",
        "Alocă un nou fir de execuție"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-adv-1-ex2",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "Senior Architect / Nivel 5",
    "xp": 45,
    "title": "Capitolul 1: Move Semantics, Rvalue References (&&) și std::move — Partea 2",
    "theory": "În C++ modern (C++11+), **Move Semantics** elimină copiile inutile de memorie pe Heap atunci când transferăm obiecte temporare (rvalues):\n- **Lvalue vs. Rvalue:** O lvalue are o adresă de memorie persistentă (un nume de variabilă), în timp ce o rvalue este o valoare temporară (un literal sau un obiect pe cale să expire).\n- **`std::move`**: Nu mută fizic nimic; este doar un cast care convertește o lvalue într-o rvalue reference (`T&&`), spunând compilatorului: *\"Tratează acest obiect ca pe o resursă temporară și fură-i pointerii intern (shallow copy urmată de nulificarea sursei)\"*.\n- **Move Constructor & Move Assignment Operator**: Evită alocările costisitoare de memorie în `std::vector` la redimensionare.",
    "glossary": [
      {
        "term": "Move Semantics",
        "def": "Transferul resurselor interne dintr-un obiect temporar în altul fără copiere costisitoare."
      },
      {
        "term": "Rvalue Reference (&&)",
        "def": "Referință la un obiect temporar care poate fi 'golit' de resurse în siguranță."
      },
      {
        "term": "std::move",
        "def": "Funcție standard ce efectuează un cast necondiționat al unei lvalue la o rvalue reference."
      },
      {
        "term": "std::lock_guard",
        "def": "Wrapper RAII care blochează un mutex la construcție și îl eliberează garantat la distrugere."
      }
    ],
    "example": "#include <iostream>\n#include <vector>\n#include <utility>\n\nclass HeavyBuffer {\nprivate:\n    size_t size;\n    int* data;\npublic:\n    explicit HeavyBuffer(size_t s) : size(s), data(new int[s]) {}\n\n    // Move Constructor (Noexcept pentru optimizari STL)\n    HeavyBuffer(HeavyBuffer&& other) noexcept \n        : size(other.size), data(other.data) {\n        other.size = 0;\n        other.data = nullptr; // Anulam sursa\n    }\n\n    ~HeavyBuffer() { delete[] data; }\n};",
    "prompt": "Marchează un move constructor ca fiind garantat fără excepții folosind cuvântul cheie noexcept.",
    "acceptedAnswers": [
      "ClassName(ClassName&& other) noexcept"
    ],
    "regexPattern": "^ClassName\\s*\\(\\s*ClassName\\s*&&\\s*other\\s*\\)\\s*noexcept$",
    "officialSolution": "ClassName(ClassName&& other) noexcept",
    "explanation": "ClassName(ClassName&& other) noexcept",
    "hint": "ClassName(ClassName&& other) noexcept",
    "matchingPairs": [
      {
        "left": "std::move(x)",
        "right": "Transformă x într-o rvalue reference pentru mutare"
      },
      {
        "left": "ClassName(ClassName&&)",
        "right": "Move constructor pentru preluarea resurselor"
      },
      {
        "left": "noexcept",
        "right": "Garantează că funcția nu aruncă excepții (esențial pentru move)"
      },
      {
        "left": "std::lock_guard",
        "right": "Gestiune sigură RAII a blocării și deblocării unui mutex"
      }
    ],
    "quiz": {
      "question": "Ce face în mod concret funcția `std::move` în C++ modern?",
      "options": [
        "Mută fizic octeții în memorie",
        "Efectuează un cast la rvalue reference (T&&)",
        "Șterge obiectul original",
        "Alocă un nou fir de execuție"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-adv-2-ex1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "Senior Architect / Nivel 5",
    "xp": 45,
    "title": "Capitolul 2: Concurrency, Threads, Mutexes și Lock Guards în C++",
    "theory": "Header-ul `<thread>` și `<mutex>` aduc suport nativ pentru programarea paralelă multithreaded în C++:\n1. **`std::thread`**: Lansează o funcție sau un apelable pe un fir de execuție separat. Este obligatoriu să apelezi `.join()` (așteptarea terminării) sau `.detach()` (rulare în background) înainte ca obiectul thread să iasă din scope (altfel se apelează `std::terminate`).\n2. **Race Conditions & `std::mutex`**: Când două thread-uri accesează simultan aceeași memorie și cel puțin o operație este scriere, apare o condiție de cursă. Folosim `std::mutex` și RAII cu `std::lock_guard` sau `std::unique_lock` pentru blocarea automată și sigură a secțiunilor critice.",
    "glossary": [
      {
        "term": "Move Semantics",
        "def": "Transferul resurselor interne dintr-un obiect temporar în altul fără copiere costisitoare."
      },
      {
        "term": "Rvalue Reference (&&)",
        "def": "Referință la un obiect temporar care poate fi 'golit' de resurse în siguranță."
      },
      {
        "term": "std::move",
        "def": "Funcție standard ce efectuează un cast necondiționat al unei lvalue la o rvalue reference."
      },
      {
        "term": "std::lock_guard",
        "def": "Wrapper RAII care blochează un mutex la construcție și îl eliberează garantat la distrugere."
      }
    ],
    "example": "#include <iostream>\n#include <thread>\n#include <mutex>\n\nstd::mutex mtx;\nint sharedCounter = 0;\n\nvoid increment() {\n    std::lock_guard<std::mutex> lock(mtx); // RAII Mutex Lock\n    ++sharedCounter;\n}\n\nint main() {\n    std::thread t1(increment);\n    std::thread t2(increment);\n    t1.join();\n    t2.join();\n    std::cout << \"Counter: \" << sharedCounter << \"\\n\";\n}",
    "prompt": "Creează un lock_guard RAII pentru un mutex numit \"mtx\" folosind tipul std::mutex.",
    "acceptedAnswers": [
      "std::lock_guard<std::mutex> lock(mtx);"
    ],
    "regexPattern": "^std::lock_guard\\s*<\\s*std::mutex\\s*>\\s+lock\\s*\\(\\s*mtx\\s*\\)\\s*;?$",
    "officialSolution": "std::lock_guard<std::mutex> lock(mtx);",
    "explanation": "std::lock_guard<std::mutex> lock(mtx);",
    "hint": "std::lock_guard<std::mutex> lock(mtx);",
    "matchingPairs": [
      {
        "left": "std::move(x)",
        "right": "Transformă x într-o rvalue reference pentru mutare"
      },
      {
        "left": "ClassName(ClassName&&)",
        "right": "Move constructor pentru preluarea resurselor"
      },
      {
        "left": "noexcept",
        "right": "Garantează că funcția nu aruncă excepții (esențial pentru move)"
      },
      {
        "left": "std::lock_guard",
        "right": "Gestiune sigură RAII a blocării și deblocării unui mutex"
      }
    ],
    "quiz": {
      "question": "Ce face în mod concret funcția `std::move` în C++ modern?",
      "options": [
        "Mută fizic octeții în memorie",
        "Efectuează un cast la rvalue reference (T&&)",
        "Șterge obiectul original",
        "Alocă un nou fir de execuție"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "java-spring-1-ex1",
    "track": "Java",
    "division": "Informatică și Programare",
    "level": "Mid-Senior / Nivel 3",
    "xp": 30,
    "title": "Capitolul 1: Spring Boot REST Controllers, Annotations & Dependency Injection — Partea 1",
    "theory": "**Spring Boot** simplifică dezvoltarea de aplicații enterprise prin configurare automată (*Convention over Configuration*):\n- **@RestController & @RequestMapping**: Marchează clasa ca punct de intrare HTTP care returnează direct obiecte serializate în JSON (prin Jackson).\n- **IoC & Dependency Injection (@Autowired sau Constructor Injection)**: Spring gestionează ciclul de viață al bean-urilor. **Constructor Injection** este considerată best practice deoarece imuabilitatea facilitează testarea unitară.",
    "glossary": [
      {
        "term": "@RestController",
        "def": "Adnotare convenabilă ce combină @Controller și @ResponseBody pentru API-uri REST."
      },
      {
        "term": "@GetMapping",
        "def": "Adnotare de rutare ce mapează cererile HTTP GET către o metodă specifică."
      },
      {
        "term": "Dependency Injection",
        "def": "Tipar de arhitectură prin care dependențele sunt injectate de containerul Spring."
      },
      {
        "term": "ResponseEntity",
        "def": "Wrapper complet ce reprezintă răspunsul HTTP (status code, headers și body)."
      }
    ],
    "example": "@RestController\n@RequestMapping(\"/api/v1/users\")\npublic class UserController {\n    private final UserService userService;\n\n    public UserController(UserService userService) {\n        this.userService = userService; // Constructor Injection recomandat\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {\n        return ResponseEntity.ok(userService.findById(id));\n    }\n}",
    "prompt": "Adaugă adnotarea Spring care marchează o clasă drept controller REST pentru rute HTTP.",
    "acceptedAnswers": [
      "@RestController"
    ],
    "regexPattern": "^@RestController$",
    "officialSolution": "@RestController",
    "explanation": "@RestController",
    "hint": "@RestController",
    "matchingPairs": [
      {
        "left": "@RestController",
        "right": "Marchează clasa ca furnizor de endpoint-uri REST JSON"
      },
      {
        "left": "@GetMapping('/url')",
        "right": "Rutează cererile HTTP GET către metoda adnotată"
      },
      {
        "left": "@Autowired",
        "right": "Injectează automat dependențele gestionate de contextul Spring"
      },
      {
        "left": "ResponseEntity<T>",
        "right": "Permite configurarea completă a statusului HTTP și a corpului răspunsului"
      }
    ],
    "quiz": {
      "question": "Ce adnotare Spring marchează o clasă drept controller de API REST ce serializează automat răspunsurile în JSON?",
      "options": [
        "@Service",
        "@Component",
        "@RestController",
        "@Repository"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "java-spring-1-ex2",
    "track": "Java",
    "division": "Informatică și Programare",
    "level": "Mid-Senior / Nivel 3",
    "xp": 35,
    "title": "Capitolul 1: Spring Boot REST Controllers, Annotations & Dependency Injection — Partea 2",
    "theory": "**Spring Boot** simplifică dezvoltarea de aplicații enterprise prin configurare automată (*Convention over Configuration*):\n- **@RestController & @RequestMapping**: Marchează clasa ca punct de intrare HTTP care returnează direct obiecte serializate în JSON (prin Jackson).\n- **IoC & Dependency Injection (@Autowired sau Constructor Injection)**: Spring gestionează ciclul de viață al bean-urilor. **Constructor Injection** este considerată best practice deoarece imuabilitatea facilitează testarea unitară.",
    "glossary": [
      {
        "term": "@RestController",
        "def": "Adnotare convenabilă ce combină @Controller și @ResponseBody pentru API-uri REST."
      },
      {
        "term": "@GetMapping",
        "def": "Adnotare de rutare ce mapează cererile HTTP GET către o metodă specifică."
      },
      {
        "term": "Dependency Injection",
        "def": "Tipar de arhitectură prin care dependențele sunt injectate de containerul Spring."
      },
      {
        "term": "ResponseEntity",
        "def": "Wrapper complet ce reprezintă răspunsul HTTP (status code, headers și body)."
      }
    ],
    "example": "@RestController\n@RequestMapping(\"/api/v1/users\")\npublic class UserController {\n    private final UserService userService;\n\n    public UserController(UserService userService) {\n        this.userService = userService; // Constructor Injection recomandat\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {\n        return ResponseEntity.ok(userService.findById(id));\n    }\n}",
    "prompt": "Definește o metodă mapată pentru o cerere HTTP GET pe ruta \"/health\" care returnează un ResponseEntity de tip String.",
    "acceptedAnswers": [
      "@GetMapping(\"/health\")"
    ],
    "regexPattern": "^@GetMapping\\s*\\(\\s*[\"']\\/health[\"']\\s*\\)$",
    "officialSolution": "@GetMapping(\"/health\")",
    "explanation": "@GetMapping(\"/health\")",
    "hint": "@GetMapping(\"/health\")",
    "matchingPairs": [
      {
        "left": "@RestController",
        "right": "Marchează clasa ca furnizor de endpoint-uri REST JSON"
      },
      {
        "left": "@GetMapping('/url')",
        "right": "Rutează cererile HTTP GET către metoda adnotată"
      },
      {
        "left": "@Autowired",
        "right": "Injectează automat dependențele gestionate de contextul Spring"
      },
      {
        "left": "ResponseEntity<T>",
        "right": "Permite configurarea completă a statusului HTTP și a corpului răspunsului"
      }
    ],
    "quiz": {
      "question": "Ce adnotare Spring marchează o clasă drept controller de API REST ce serializează automat răspunsurile în JSON?",
      "options": [
        "@Service",
        "@Component",
        "@RestController",
        "@Repository"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "cyber-net-1-ex1",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "level": "Senior / Nivel 4",
    "xp": 35,
    "title": "Capitolul 1: Modelul OSI, TCP 3-Way Handshake și Protocoale Web",
    "theory": "Înțelegerea profundă a rețelelor este critică pentru ingineria de sisteme:\n1. **TCP 3-Way Handshake:** Inițierea unei conexiuni sigure orientate pe conexiune se face prin pașii: **SYN** $\\rightarrow$ **SYN-ACK** $\\rightarrow$ **ACK**.\n2. **HTTP/2 vs. gRPC:**\n   - HTTP/2 aduce *Multiplexing* (mai multe cereri pe o singură conexiune TCP), *Header Compression (HPACK)* și *Server Push*.\n   - **gRPC** rulează deasupra HTTP/2 folosind **Protocol Buffers (Protobuf)** ca format de serializare binar ultra-rapid și compact (în loc de JSON textual).",
    "glossary": [
      {
        "term": "TCP Handshake",
        "def": "Secvența în 3 pași (SYN, SYN-ACK, ACK) prin care se inițializează o conexiune sigură TCP."
      },
      {
        "term": "SYN (Synchronize)",
        "def": "Primul pachet trimis de client ce solicită stabilirea conexiunii și numărul de secvență."
      },
      {
        "term": "ACK (Acknowledge)",
        "def": "Pachet de confirmare a recepției datelor sau a pachetului SYN primit."
      },
      {
        "term": "Modelul OSI",
        "def": "Cadrul arhitectural de referință cu 7 straturi pentru comunicațiile de rețea."
      }
    ],
    "example": "// Structura unui mesaj gRPC definit in Protobuf (.proto)\nsyntax = \"proto3\";\n\npackage user;\n\nservice UserService {\n    rpc GetUserById (UserRequest) returns (UserResponse);\n}\n\nmessage UserRequest {\n    int64 id = 1;\n}\n\nmessage UserResponse {\n    int64 id = 1;\n    string username = 2;\n    string email = 3;\n}",
    "prompt": "Care sunt cei 3 pași din secvența de stabilire a conexiunii TCP? Scrie acronimele separate prin virgulă (ex: SYN, SYN-ACK, ACK).",
    "acceptedAnswers": [
      "SYN, SYN-ACK, ACK"
    ],
    "regexPattern": "^SYN\\s*,\\s*SYN-ACK\\s*,\\s*ACK$",
    "officialSolution": "SYN, SYN-ACK, ACK",
    "explanation": "SYN, SYN-ACK, ACK",
    "hint": "SYN, SYN-ACK, ACK",
    "matchingPairs": [
      {
        "left": "SYN",
        "right": "Primul pas: clientul solicită conexiunea către server"
      },
      {
        "left": "SYN-ACK",
        "right": "Pasul doi: serverul confirmă și trimite propriul SYN"
      },
      {
        "left": "ACK",
        "right": "Pasul trei: clientul confirmă și conexiunea devine ESTABLISHED"
      },
      {
        "left": "Stratul Transport",
        "right": "Nivelul 4 din modelul OSI unde operează protocoalele TCP și UDP"
      }
    ],
    "quiz": {
      "question": "Care este ordinea corectă a pachetelor în cadrul TCP 3-Way Handshake?",
      "options": [
        "ACK, SYN, SYN-ACK",
        "SYN, SYN-ACK, ACK",
        "SYN, ACK, DATA",
        "HELLO, ACCEPT, ACK"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "fr-c1-1-ex1",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "level": "B2/C1 Avansat / Nivel 4",
    "xp": 45,
    "title": "Capitolul 1: Le Subjonctif Présent (Doubt, Necessity & Emotion)",
    "theory": "Modul **Subjonctif** este obligatoriu în limba franceză atunci când exprimăm incertitudine, dorință, necesitate sau emoție, fiind introdus aproape întotdeauna prin conjuncția **que**:\n- *Il faut que tu viennes.* (Este necesar să vii.)\n- *Je doute qu'il comprenne.* (Mă îndoiesc că el înțelege.)\n- Formare generală: se ia persoana *ils* de la prezent, se înlătură *-ent* și se adaugă terminațiile: *-e, -es, -e, -ions, -iez, -ent*.\n- **Forme neregulate majore:**\n  - *Être*: que je sois, tu sois, il soit, nous soyons, vous soyez, ils soient.\n  - *Avoir*: que j'aie, tu aies, il ait, nous ayons, vous ayez, ils aient.",
    "glossary": [
      {
        "term": "Passé Composé",
        "def": "Timpul trecut uzual în franceză, format din auxiliar (avoir/être) + participiu trecut."
      },
      {
        "term": "Futur Proche",
        "def": "Viitorul apropiat format din prezentul verbului aller + infinitivul verbului de bază."
      },
      {
        "term": "Conditionnel Présent",
        "def": "Modul folosit pentru exprimarea cerințelor politicoase (Je voudrais...)."
      },
      {
        "term": "Subjonctif Présent",
        "def": "Mod verbal francez ce exprimă nesiguranță, dorință, necesitate sau emoție subiectivă."
      }
    ],
    "example": "\"Il est important que nous terminions le projet avant vendredi.\"\n(Este important să terminăm proiectul înainte de vineri.)\n\n\"Bien que la solution soit complexe, elle est très efficace.\"\n(Deși soluția este complexă, ea este foarte eficientă.)",
    "prompt": "Traducere FR: \"Este important ca tu să vii\" (Il est important que tu...).",
    "acceptedAnswers": [
      "Il est important que tu viennes."
    ],
    "regexPattern": "^il\\s+est\\s+important\\s+que\\s+tu\\s+viennes\\.?$",
    "officialSolution": "Il est important que tu viennes.",
    "explanation": "Il est important que tu viennes.",
    "hint": "Il est important que tu viennes.",
    "matchingPairs": [
      {
        "left": "J'ai mangé",
        "right": "Am mâncat (Passé Composé cu avoir)"
      },
      {
        "left": "Il est allé",
        "right": "El a mers (Passé Composé cu être)"
      },
      {
        "left": "Je voudrais",
        "right": "Aș dori (exprimare politicoasă)"
      },
      {
        "left": "qu'il vienne",
        "right": "să vină (Subjonctif Présent după expresii de necesitate)"
      }
    ],
    "quiz": {
      "question": "Ce auxiliar se folosește în franceză pentru a forma Passé Composé pentru verbul de mișcare 'aller'?",
      "options": [
        "Avoir",
        "Être",
        "Faire",
        "Aller"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "es-c1-1-ex1",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "level": "B2/C1 Avansat / Nivel 4",
    "xp": 45,
    "title": "Capitolul 1: El Subjuntivo (Deseos, Dudas y Probabilidad)",
    "theory": "În spaniolă, **El Subjuntivo** exprimă subiectivitatea, dorințele, îndoielile și ipotezele. Se declanșează după verbe de dorință sau opinie negativă (*dudar que, es necesario que, quiero que*):\n- Formare: Se ia persoana *yo* de la prezent, se înlătură *-o* și se adaugă terminațiile inverse (pentru -ar se pun terminațiile de -er/-ir și invers):\n  - *Hablar* $\\rightarrow$ *hable, hables, hable, hablemos, habléis, hablen*.\n  - *Comer* $\\rightarrow$ *coma, comas, coma, comamos, comáis, coman*.",
    "glossary": [
      {
        "term": "Verbul Gustar",
        "def": "Construcție spaniolă în care subiectul gramatical este lucrul plăcut (Me gusta viajar)."
      },
      {
        "term": "Gerundio (-ando, -iendo)",
        "def": "Formă verbală folosită cu 'estar' pentru a descrie acțiuni în desfășurare."
      },
      {
        "term": "Pretérito Indefinido",
        "def": "Trecutul simplu spaniol folosit pentru acțiuni finalizate la un moment clar (Ayer trabajé)."
      },
      {
        "term": "Modo Subjuntivo",
        "def": "Mod verbal ce exprimă dorințe, ipoteze, probabilități sau nesiguranță (Quiero que vengas)."
      }
    ],
    "example": "\"Quiero que aprendas programación avanzada.\"\n(Vreau să înveți programare avansată.)\n\n\"No creo que sea una buena solución técnica.\"\n(Nu cred că este o soluție tehnică bună.)",
    "prompt": "Traducere ES: \"Vreau ca tu să vii\" (Quiero que tú...).",
    "acceptedAnswers": [
      "Quiero que vengas."
    ],
    "regexPattern": "^quiero\\s+que\\s+(tú\\s+)?vengas\\.?$",
    "officialSolution": "Quiero que vengas.",
    "explanation": "Quiero que vengas.",
    "hint": "Quiero que vengas.",
    "matchingPairs": [
      {
        "left": "Me gusta",
        "right": "Îmi place (construcție cu pronume indirect)"
      },
      {
        "left": "Estoy trabajando",
        "right": "Lucrez acum (estar + gerundio)"
      },
      {
        "left": "Ayer trabajé",
        "right": "Ieri am lucrat (pretérito indefinido)"
      },
      {
        "left": "Quiero que vengas",
        "right": "Vreau să vii (folosire obligatorie de subjuntivo)"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă a verbului 'trabajar' la gerunziu în spaniolă?",
      "options": [
        "Trabajado",
        "Trabajando",
        "Trabajiente",
        "Trabajó"
      ],
      "correctIndex": 1
    }
  }
];
