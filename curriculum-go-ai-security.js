const GO_AI_SECURITY_CURRICULUM = [
  // =========================================================================
  // TRACK: GO & SISTEME DISTRIBUITE (10 CAPITOLE COMPLETE)
  // =========================================================================
  {
    "id": "go-1",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Fundamente Go, Structura Pachetelor & Declararea Variabilelor",
    "theory": "\n<p><strong>Go (Golang)</strong> este un limbaj compilat nativ dezvoltat de Google (Robert Griesemer, Rob Pike și Ken Thompson), conceput special pentru simplitate extremă, viteză de compilare și scalabilitate în servicii de rețea și cloud native.</p>\n\n<h4>1. Structura Unui Program & Pachetul 'main'</h4>\n<p>Orice aplicație executabilă în Go începe în pachetul <code>main</code> și funcția de intrare <code>func main()</code>:</p>\n<pre><code>package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Bun venit în universul Go!\")\n}</code></pre>\n\n<h4>2. Declararea Scurtă cu Operatorul ':='</h4>\n<p>În interiorul funcțiilor, Go oferă operatorul de declarare și inferență rapidă <code>:=</code> (fără necesitatea specificării tipului). La nivel de pachet (global) se folosește cuvântul cheie <code>var</code>:</p>\n<pre><code>var domeniu string = \"polymathhub.vercel.app\" // Global\n\nfunc main() {\n    port := 8080        // Inferat automat ca int\n    activ := true       // Inferat ca bool\n    fmt.Printf(\"Server pe portul %d (activ: %t)\\n\", port, activ)\n}</code></pre>\n",
    "glossary": [
      { "term": "package main", "def": "Pachetul special de intrare necesar pentru a genera un fișier executabil binar în Go." },
      { "term": "Operatorul :=", "def": "Sintaxă compactă pentru declararea și inițializarea unei variabile locale cu inferență de tip." },
      { "term": "fmt", "def": "Pachetul standard Go pentru formatarea intrărilor și ieșirilor (Println, Printf, Sprintf)." },
      { "term": "go mod init", "def": "Comanda CLI pentru inițializarea unui modul Go cu urmărirea dependențelor în go.mod." }
    ],
    "matchingPairs": [
      { "left": "package main", "right": "Punctul de intrare pentru un binar executabil" },
      { "left": "x := 42", "right": "Declarare scurtă cu inferență de tip" },
      { "left": "fmt.Println()", "right": "Afișare pe consolă cu linie nouă" },
      { "left": "var s string", "right": "Declarare explicită cu zero-value (string gol)" }
    ],
    "quiz": {
      "question": "Ce valoare inițială (zero-value) primește o variabilă de tip 'int' declarată ca 'var contor int' fără inițializare în Go?",
      "options": [
        "0",
        "nil",
        "undefined",
        "Valoare aleatoare din memorie"
      ],
      "correctIndex": 0,
      "explanation": "În Go, variabilele neinițializate primesc întotdeauna zero-value-ul tipului lor (0 pentru numere, \"\" pentru string, false pentru bool, nil pentru pointeri/felii)."
    },
    "task": "Declară o variabilă 'port' cu valoarea 8080 folosind operatorul de declarare scurtă ':='.",
    "starterCode": "func main() {\n    // Declară port cu 8080:\n}\n",
    "acceptedAnswers": [
      "port := 8080",
      "port := 8080;",
      "var port = 8080",
      "var port int = 8080"
    ],
    "officialSolution": "port := 8080",
    "explanation": "Operatorul ':=' deduce automat tipul 'int' și inițializează variabila 'port' cu 8080.",
    "hint": "Scrie 'port := 8080'."
  },
  {
    "id": "go-2",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 2: Bucle Idiomatice & Instrucțiunea Magică 'defer'",
    "theory": "\n<p>Go este renumit pentru minimalism: are <strong>o singură structură repetitivă: bucla <code>for</code></strong>. Nu există <code>while</code> sau <code>do-while</code>; bucla <code>for</code> acoperă toate cazurile.</p>\n\n<h4>Instrucțiunea 'defer' pentru Curățarea Resurselor</h4>\n<p>Cuvântul cheie <code>defer</code> amână execuția unei funcții până în momentul exact în care funcția părinte se termină (returnează). Este utilizat pe scară largă pentru închiderea fișierelor, eliberarea conexiunilor de rețea sau deblocarea mutex-urilor:</p>\n\n<pre><code>func citesteFisier(nume string) {\n    fisier, err := os.Open(nume)\n    if err != nil {\n        return\n    }\n    defer fisier.Close() // Se execută GARANTAT la ieșirea din funcție!\n\n    // Procesare date...\n}</code></pre>\n",
    "glossary": [
      { "term": "defer", "def": "Instrucțiune ce amână execuția unui apel de funcție până la finalul funcției curente."
      },
      { "term": "for range", "def": "Sintaxă idiomatică pentru iterarea peste tablouri, slices, string-uri sau map-uri." },
      { "term": "Zero Values", "def": "Valorile sigure implicite atribuite oricărei variabile înainte de atribuire." },
      { "term": "Stack LIFO la defer", "def": "Dacă există apeluri multiple 'defer', acestea sunt executate în ordine inversă (Last-In, First-Out)." }
    ],
    "matchingPairs": [
      { "left": "defer fisier.Close()", "right": "Garantează eliberarea resursei la ieșirea din funcție" },
      { "left": "for i := 0; i < n; i++", "right": "Buclă for clasică în 3 părți" },
      { "left": "for conditie { ... }", "right": "Echivalentul buclei while din alte limbaje" },
      { "left": "for { ... }", "right": "Buclă infinită în Go" }
    ],
    "quiz": {
      "question": "În ce ordine se execută apelurile defer a(), defer b(), defer c() atunci când funcția returnează?",
      "options": [
        "c(), apoi b(), apoi a() (ordine LIFO - Last-In First-Out)",
        "a(), apoi b(), apoi c() (ordine FIFO)",
        "În ordine aleatoare",
        "Simultan pe fire separate"
      ],
      "correctIndex": 0,
      "explanation": "Apelurile 'defer' sunt plasate pe o stivă (Stack), astfel că ultimul apel deferrat este primul executat la ieșirea din funcție."
    },
    "task": "Scrie instrucțiunea 'defer fisier.Close()' pentru a garanta închiderea resursei la finalul funcției.",
    "starterCode": "// Amână închiderea fișierului:\n",
    "acceptedAnswers": [
      "defer fisier.Close()",
      "defer fisier.Close();"
    ],
    "officialSolution": "defer fisier.Close()",
    "explanation": "'defer fisier.Close()' este modelul standard de programare defensivă în Go.",
    "hint": "Scrie 'defer fisier.Close()'."
  },
  {
    "id": "go-3",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "2. Elementar",
    "xp": 35,
    "title": "Capitolul 3: Pointeri & Escape Analysis (Stack vs Heap)",
    "theory": "\n<p>Go suportă pointeri pentru a permite transmiterea referințelor fără copierea datelor masive în memorie. Spre deosebire de C/C++, în Go <strong>nu există aritmetică pe pointeri</strong> (nu poți incrementa <code>ptr++</code>), eliminând riscurile de corupere a memoriei.</p>\n\n<h4>Escape Analysis: Decizia Compilatorului</h4>\n<p>În Go, programatorul nu decide explicit <code>malloc</code> sau <code>free</code>. Compilatorul realizează <strong>Escape Analysis</strong>: dacă o variabilă creată într-o funcție „scapă” în afara ei (de exemplu, este returnat un pointer către ea), compilatorul o alocă automat pe <strong>Heap</strong>. Dacă nu scapă, o alocă pe <strong>Stack</strong>, unde este curățată instant în $O(1)$!</p>\n\n<pre><code>func creeazaServer(port int) *Server {\n    srv := Server{Port: port}\n    return &srv // Sigur în Go! Compilatorul mută srv pe Heap automat\n}</code></pre>\n",
    "glossary": [
      { "term": "Pointer (*T)", "def": "Variabilă ce stochează adresa din memorie a unei valori de tip T." },
      { "term": "Operatorul &", "def": "Operator de adresare ce returnează pointerul (adresa) unei variabile." },
      { "term": "Operatorul *", "def": "Operator de dereferențiere ce accesează valoarea stocată la adresa indicată." },
      { "term": "Escape Analysis", "def": "Optimizare de compilare ce decide dacă o variabilă poate rămâne pe Stack sau trebuie alocată pe Heap." }
    ],
    "matchingPairs": [
      { "left": "&variabila", "right": "Obține adresa din memorie (pointer)" },
      { "left": "*pointer", "right": "Accesează sau modifică valoarea dereferențiată" },
      { "left": "Stack", "right": "Memorie ultra-rapidă, de-alocată instant la retur" },
      { "left": "Heap", "right": "Memorie gestionată prin Garbage Collector" }
    ],
    "quiz": {
      "question": "Este permis în Go să returnezi adresa unei variabile locale (&srv) dintr-o funcție?",
      "options": [
        "Da, este perfect sigur; compilatorul detectează evadarea prin Escape Analysis și alocă srv pe Heap",
        "Nu, provoacă un dangling pointer și segmentation fault ca în C",
        "Este permis doar dacă folosim cuvântul cheie unsafe",
        "Doar pentru variabile de tip int"
      ],
      "correctIndex": 0,
      "explanation": "Compilatorul Go analizează ciclul de viață al referinței și alocă automat obiectul pe Heap dacă adresa lui este returnată."
    },
    "task": "Obține adresa din memorie a variabilei 'valoare' folosind operatorul '&' și atribuie pointerul la 'ptr := ...'.",
    "starterCode": "valoare := 42\n// Atribuie pointerul lui valoare în ptr:\n",
    "acceptedAnswers": [
      "ptr := &valoare",
      "ptr := &valoare;",
      "var ptr = &valoare",
      "var ptr *int = &valoare"
    ],
    "officialSolution": "ptr := &valoare",
    "explanation": "Sintaxa 'ptr := &valoare' creează un pointer de tip *int către variabilă.",
    "hint": "Scrie 'ptr := &valoare'."
  },
  {
    "id": "go-4",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "2. Elementar",
    "xp": 40,
    "title": "Capitolul 4: Structuri & Compoziție prin Embedding (Fără Moștenire)",
    "theory": "\n<p>Go refuză ierarhiile complexe de clase și moștenirea clasică (nu există cuvintele cheie <code>class</code> sau <code>extends</code>). În schimb, Go promovează principiul: <strong>„Compoziția este superioară moștenirii”</strong> prin <em>struct embedding</em>.</p>\n\n<pre><code>type Persoana struct {\n    Nume string\n    Email string\n}\n\n// Admin include toate câmpurile și metodele lui Persoana prin embedding anonim:\ntype Admin struct {\n    Persoana // Embedded struct\n    NivelAcces int\n}\n\nfunc main() {\n    a := Admin{\n        Persoana: Persoana{Nume: \"Alex\", Email: \"alex@polymath.ro\"},\n        NivelAcces: 10,\n    }\n    // Câmpurile din Persoana sunt promovate direct la nivelul superior:\n    fmt.Println(a.Nume) // Acces direct fără a.Persoana.Nume!\n}</code></pre>\n",
    "glossary": [
      { "term": "struct", "def": "Colecție de câmpuri de date tipizate grupate sub un singur nume." },
      { "term": "Struct Embedding", "def": "Mecanismul Go de compoziție prin care o structură include anonim o altă structură, promovându-i câmpurile." },
      { "term": "Receiver Function", "def": "Metodă asociată unei structuri definite cu 'func (s *Server) Porneste()'." },
      { "term": "Pointer Receiver", "def": "Receiver de forma (s *Struct) ce permite modificarea stării interne a structurii." }
    ],
    "matchingPairs": [
      { "left": "type User struct { ... }", "right": "Definirea unei structuri de date" },
      { "left": "func (u *User) Salveaza()", "right": "Metodă cu pointer receiver ce poate modifica instanța" },
      { "left": "Embedding", "right": "Compoziție curată în loc de moștenire OOP" },
      { "left": "user.Nume", "right": "Acces la câmp promovat automat din structura încapsulată" }
    ],
    "quiz": {
      "question": "De ce preferă dezvoltatorii Go pointer receiver-ul 'func (u *User) SetEmail(...)' în locul valorii 'func (u User)'?",
      "options": [
        "Pentru a modifica direct instanța originală și a evita copierea întregii structuri în memorie la fiecare apel",
        "Pentru că metodele fără pointer sunt interzise în Go",
        "Pentru a activa Garbage Collectorul",
        "Nu există nicio diferență de comportament"
      ],
      "correctIndex": 0,
      "explanation": "Cu pointer receiver (*User), metoda primește adresa directă a obiectului și poate modifica valorile câmpurilor fără overhead de copiere."
    },
    "task": "Completează semnătura metodei 'Activeaza' pentru structura 'Server' folosind un pointer receiver '(s *Server)': func (s *Server) Activeaza()",
    "starterCode": "// Scrie antetul metodei cu pointer receiver:\n",
    "acceptedAnswers": [
      "func (s *Server) Activeaza()",
      "func (s *Server) Activeaza() {",
      "func (srv *Server) Activeaza()"
    ],
    "officialSolution": "func (s *Server) Activeaza()",
    "explanation": "Sintaxa 'func (s *Server) Activeaza()' leagă metoda direct de structura Server.",
    "hint": "Scrie 'func (s *Server) Activeaza()'."
  },
  {
    "id": "go-5",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "3. Intermediar",
    "xp": 40,
    "title": "Capitolul 5: Interfețe Implicite & Polimorfism la Nivel de Compilare",
    "theory": "\n<p>Interfețele din Go sunt <strong>complet implicite</strong>: un tip implementează o interfață automat dacă implementează toate metodele cerute, fără a declara vreodată <code>implements</code>!</p>\n\n<pre><code>// Definirea interfeței (contractul):\ntype Notificator interface {\n    Trimite(mesaj string) error\n}\n\n// Tip concret:\ntype EmailNotificator struct{}\n\n// Implementare implicită:\nfunc (e EmailNotificator) Trimite(mesaj string) error {\n    fmt.Println(\"Email trimis:\", mesaj)\n    return nil\n}\n\n// Funcție polimorfică ce acceptă orice Notificator:\nfunc NotificaUtilizator(n Notificator, text string) {\n    n.Trimite(text)\n}</code></pre>\n<p>Această decizie arhitecturală decuplează pachetele complet: poți defini o interfață în pachetul tău pe care tipuri din alte biblioteci terțe o satisfac fără ca autorii lor să fi știut de codul tău.</p>\n",
    "glossary": [
      { "term": "interface", "def": "Tip ce definește un set de semnături de metode reprezentând un contract abstract." },
      { "term": "Implementare Implicită", "def": "Proprietatea din Go unde satisfacerea metodelor unei interfețe o implementează automat fără cuvântul 'implements'." },
      { "term": "interface{} (any)", "def": "Interfața vidă ce poate conține valori de orice tip (aliasat ca 'any' din Go 1.18)." },
      { "term": "Type Assertion", "def": "Sintaxă de forma val.(Tip) pentru extragerea tipului concret dintr-o interfață." }
    ],
    "matchingPairs": [
      { "left": "type Reader interface", "right": "Interfață standard Go (funcția Read)" },
      { "left": "Duck Typing", "right": "Dacă merge ca o rață și măcăne ca o rață, este o rață" },
      { "left": "any", "right": "Alias modern pentru interfața vidă interface{}" },
      { "left": "v, ok := x.(string)", "right": "Type assertion sigur cu verificare de succes" }
    ],
    "quiz": {
      "question": "Ce trebuie să adaugi în definiția unei structuri pentru ca aceasta să implementeze o interfață în Go?",
      "options": [
        "Nimic în definiția structurii; este suficient să implementezi metodele respective pentru tip",
        "Cuvântul cheie 'implements NumeInterfata'",
        "O adnotare @Override",
        "O referință către fișierul header"
      ],
      "correctIndex": 0,
      "explanation": "Go folosește structural subtyping (interfețe implicite); tipul implementează interfața pur și simplu având metodele definite."
    },
    "task": "Scrie definiția unei interfețe 'Logger' ce conține o singură metodă 'Log(mesaj string)'.",
    "starterCode": "type Logger interface {\n    // Adaugă metoda Log:\n}\n",
    "acceptedAnswers": [
      "Log(mesaj string)",
      "Log(mesaj string);",
      "Log(string)",
      "Log(msg string)"
    ],
    "officialSolution": "Log(mesaj string)",
    "explanation": "În interiorul interfeței specificăm doar semnătura metodei: 'Log(mesaj string)'.",
    "hint": "Introdu 'Log(mesaj string)'."
  },
  {
    "id": "go-6",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "3. Intermediar",
    "xp": 45,
    "title": "Capitolul 6: Gestiunea Idiomatică a Erorilor (Valori Returnate, errors.Is & errors.As)",
    "theory": "\n<p>Go tratează erorile ca simple <strong>valori obișnuite returnate</strong> de funcții (de regulă ca ultim parametru de tip <code>error</code>), evitând controlul de flux ascuns al excepțiilor:</p>\n\n<pre><code>valoare, err := executaOperatiune()\nif err != nil {\n    // Tratare explicită a erorii\n    return fmt.Errorf(\"eșec la procesare: %w\", err) // Împachetare eroare cu %w\n}</code></pre>\n\n<h4>Verificarea Erorilor cu errors.Is()</h4>\n<p>Pentru a compara erori împachetate (wrapped errors), Go oferă pachetul standard <code>errors</code>:</p>\n<pre><code>if errors.Is(err, os.ErrNotExist) {\n    fmt.Println(\"Fișierul căutat nu există pe disc!\")\n}</code></pre>\n",
    "glossary": [
      { "term": "error", "def": "Interfață standard Go predefinită cu metoda unică 'Error() string'." },
      { "term": "errors.Is(err, target)", "def": "Verifică dacă o eroare sau oricare dintre erorile împachetate în ea se potrivește cu o țintă specifică." },
      { "term": "fmt.Errorf(\"... %w\", err)", "def": "Formatează o eroare nouă împachetând eroarea cauzală pentru trasabilitate completă." },
      { "term": "panic & recover", "def": "Mecanism intern excepțional pentru erori cu adevărat irecuperabile (ex: nil pointer dereference)." }
    ],
    "matchingPairs": [
      { "left": "if err != nil", "right": "Verificarea standard a apariției unei erori" },
      { "left": "%w", "right": "Specificator de formatare pentru împachetarea unei erori" },
      { "left": "errors.Is()", "right": "Comparație sigură a lanțului de erori împachetate" },
      { "left": "nil", "right": "Absența oricărei erori în valoarea de retur" }
    ],
    "quiz": {
      "question": "De ce recomandă comunitatea Go verificarea explicită a erorilor în loc de excepții globale try-catch?",
      "options": [
        "Pentru că fluxul de execuție rămâne predictibil, clar și fără ramificații ascunse pe stivă",
        "Pentru că Go nu are memorie pentru try-catch",
        "Pentru că compilatorul nu poate genera erori",
        "Este o cerință impusă de sistemul de operare"
      ],
      "correctIndex": 0,
      "explanation": "Tratarea erorilor ca valori forțează dezvoltatorul să gândească fiecare scenariu de eșec local, reducând dramatic erorile nesupravegheate în producție."
    },
    "task": "Scrie verificarea clasică 'if err != nil {' pentru a valida o eroare returnată în Go.",
    "starterCode": "// Verifică dacă err nu este nil:\n",
    "acceptedAnswers": [
      "if err != nil {",
      "if err != nil"
    ],
    "officialSolution": "if err != nil {",
    "explanation": "'if err != nil {' este cel mai comun și important idiom din întregul ecosistem Go.",
    "hint": "Scrie 'if err != nil {'."
  },
  {
    "id": "go-7",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "4. Avansat",
    "xp": 50,
    "title": "Capitolul 7: Goroutines & Concurrency Masiv (Green Threads de 2KB)",
    "theory": "\n<p>Cel mai mare atu al limbajului Go este sistemul său de concurență nativă bazat pe <strong>Goroutines</strong>. O gorutină nu este un thread greoi al sistemului de operare (care consumă 1-2 MB de stivă), ci un fir de execuție virtual administrat de Go Runtime cu o stivă inițială de <strong>doar 2 KB</strong>!</p>\n<p>Poți lansa cu ușurință sute de mii de gorutine concurente pe un singur server fără a epuiza memoria:</p>\n\n<pre><code>func proceseazaComanda(id int) {\n    fmt.Printf(\"Comanda #%d procesată concurent\\n\", id)\n}\n\nfunc main() {\n    // Lansarea unei gorutine se face simplu prin cuvântul cheie 'go':\n    for i := 1; i <= 10; i++ {\n        go proceseazaComanda(i) // Rulează asincron pe fundal!\n    }\n}</code></pre>\n",
    "glossary": [
      { "term": "goroutine", "def": "Fir de execuție ușor (green thread) gestionat de Go runtime, cu alocare inițială de doar 2 KB." },
      { "term": "Cuvântul cheie 'go'", "def": "Instrucțiune ce lansează o funcție concurent într-o nouă gorutină separată." },
      { "term": "Go Scheduler (GMP)", "def": "Planificatorul intern din Go ce multiplexează G (gorutine) pe M (thread-uri OS) folosind P (procesoare logice)." },
      { "term": "Work Stealing", "def": "Algoritm prin care un nucleu inactiv fură gorutine din coada altui nucleu aglomerat." }
    ],
    "matchingPairs": [
      { "left": "go func()", "right": "Lansează o execuție concurentă imediată" },
      { "left": "2 KB", "right": "Dimensiunea inițială a stivei unei gorutine" },
      { "left": "OS Thread", "right": "Fir de execuție de 1-2 MB administrat de kernel" },
      { "left": "Go Runtime", "right": "Multiplexează gorutinele pe nucleele CPU disponibile" }
    ],
    "quiz": {
      "question": "De ce poate un server Go să gestioneze 100.000 de conexiuni concurente mai eficient decât limbajele tradiționale bazate pe fire OS?",
      "options": [
        "Deoarece gorutinele consumă doar 2 KB de memorie fiecare și sunt planificate în spațiul utilizator fără context switch greu de kernel",
        "Pentru că Go oprește celelalte aplicații din sistem",
        "Pentru că nu folosește memorie RAM",
        "Pentru că folosește plăci grafice GPU"
      ],
      "correctIndex": 0,
      "explanation": "Stiva mică și scalabilă dinamic a gorutinelor permite densitate uriașă de concurență pe resurse hardware modeste."
    },
    "task": "Lansează funcția 'proceseazaDate()' într-o nouă gorutină folosind cuvântul cheie 'go'.",
    "starterCode": "// Lansează funcția concurent:\n",
    "acceptedAnswers": [
      "go proceseazaDate()",
      "go proceseazaDate();"
    ],
    "officialSolution": "go proceseazaDate()",
    "explanation": "Prefixarea apelului cu 'go' creează instant o nouă gorutină.",
    "hint": "Scrie 'go proceseazaDate()'."
  },
  {
    "id": "go-8",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "4. Avansat",
    "xp": 50,
    "title": "Capitolul 8: Canale (chan) & Instrucțiunea 'select' pentru Sincronizare",
    "theory": "\n<p>Filosofia celebră a limbajului Go este: <em>„Nu comunica prin partajarea memoriei; partajează memoria prin comunicare!”</em>.</p>\n<p>Pentru a trimite date în siguranță între gorutine fără erori de concurență (data races), Go folosește <strong>Canale (Channels)</strong>:</p>\n\n<pre><code>// Crearea unui canal de string-uri:\nmesaje := make(chan string)\n\n// Trimitere date în canal din gorutină (operatorul &lt;-):\ngo func() {\n    mesaje &lt;- \"Pachet recepționat cu succes\"\n}()\n\n// Recepție din canal (blochează până sosește valoarea):\nraspuns := &lt;-mesaje\nfmt.Println(raspuns)</code></pre>\n\n<h4>Instrucțiunea 'select' pentru Canale Multiple</h4>\n<p><code>select</code> funcționează ca un switch pentru canale, așteptând pe oricare canal care este gata de I/O:</p>\n<pre><code>select {\ncase msg1 := &lt;-ch1:\n    fmt.Println(\"Primit de pe ch1:\", msg1)\ncase ch2 &lt;- \"notificare\":\n    fmt.Println(\"Trimis pe ch2\")\ncase &lt;-time.After(1 * time.Second):\n    fmt.Println(\"Timeout atins!\")\n}</code></pre>\n",
    "glossary": [
      { "term": "chan T", "def": "Canal tipizat ce permite transmiterea sigură de date de tip T între gorutine concurente." },
      { "term": "Operatorul <-", "def": "Operator de trimitere (ch <- val) sau de recepție (val := <-ch) pe un canal." },
      { "term": "Unbuffered Channel", "def": "Canal fără buffer (implicit); sincronizează direct transmițătorul cu receptorul." },
      { "term": "select", "def": "Structură de control ce așteaptă concurent pe multiple operațiuni pe canale." }
    ],
    "matchingPairs": [
      { "left": "ch <- val", "right": "Trimite valoarea în canal" },
      { "left": "val := <-ch", "right": "Recepționează valoarea din canal" },
      { "left": "make(chan int, 10)", "right": "Creează un canal cu buffer de 10 elemente" },
      { "left": "select { ... }", "right": "Multiplexare concurentă a canalelor" }
    ],
    "quiz": {
      "question": "Ce se întâmplă când încerci să citești dintr-un canal fără buffer (unbuffered) înainte ca altcineva să trimită date?",
      "options": [
        "Gorutina curentă este blocată în siguranță până când o altă gorutină trimite o valoare",
        "Returnează valoarea null",
        "Aplicația se blochează cu panic",
        "Returnează -1"
      ],
      "correctIndex": 0,
      "explanation": "Canalele fără buffer realizează sincronizare completă (rendez-vous): cititorul așteaptă scriitorul și invers."
    },
    "task": "Trimite valoarea numerică 100 în canalul numit 'ch' folosind operatorul '<-'.",
    "starterCode": "// Trimite 100 în canalul ch:\n",
    "acceptedAnswers": [
      "ch <- 100",
      "ch <- 100;"
    ],
    "officialSolution": "ch <- 100",
    "explanation": "Sintaxa 'ch <- 100' trimite valoarea în canalul indicat.",
    "hint": "Scrie 'ch <- 100'."
  },
  {
    "id": "go-9",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "5. Senior / Arhitect",
    "xp": 50,
    "title": "Capitolul 9: Sincronizare Robustă cu Pachetul 'sync' (WaitGroup & Mutex)",
    "theory": "\n<p>Când ai nevoie să aștepți terminarea unui grup de gorutine înainte de a continua execuția sau când ai o structură de memorie partajată, pachetul <code>sync</code> este instrumentul indispensabil.</p>\n\n<h4>Sincronizarea cu sync.WaitGroup</h4>\n<pre><code>import \"sync\"\n\nvar wg sync.WaitGroup\n\nfor i := 1; i <= 3; i++ {\n    wg.Add(1) // Incrementează numărul de sarcini așteptate\n    go func(id int) {\n        defer wg.Done() // Decrementează contorul când gorutina se finalizează\n        proceseaza(id)\n    }(i)\n}\n\nwg.Wait() // Blochează execuția până când contorul ajunge la 0!\nfmt.Println(\"Toate sarcinile s-au finalizat!\")</code></pre>\n",
    "glossary": [
      { "term": "sync.WaitGroup", "def": "Structură de sincronizare ce ține contorul sarcinilor concurente active (Add, Done, Wait)." },
      { "term": "wg.Add(n)", "def": "Adaugă n sarcini de așteptat în contor." },
      { "term": "wg.Done()", "def": "Semnalizează finalizarea unei sarcini (echivalent cu Add(-1))." },
      { "term": "wg.Wait()", "def": "Blochează firul apelant până când contorul ajunge la zero." }
    ],
    "matchingPairs": [
      { "left": "wg.Add(1)", "right": "Incrementează contorul sarcinilor active" },
      { "left": "wg.Done()", "right": "Marchează o sarcină finalizată" },
      { "left": "wg.Wait()", "right": "Așteaptă finalizarea tuturor sarcinilor" },
      { "left": "sync.Mutex", "right": "Protecție mutual exclusivă a memoriei partajate" }
    ],
    "quiz": {
      "question": "De ce trebuie apelat 'defer wg.Done()' în interiorul gorutinei?",
      "options": [
        "Pentru a garanta decrementarea contorului chiar dacă funcția returnează anticipat sau eșuează",
        "Pentru a elibera memoria RAM a compilatorului",
        "Pentru a mări viteza procesorului",
        "Este opțional și nu afectează sincronizarea"
      ],
      "correctIndex": 0,
      "explanation": "Apelul prin 'defer wg.Done()' asigură că WaitGroup nu va rămâne blocat într-un deadlock infinit dacă o gorutină iese neașteptat."
    },
    "task": "Apelează 'wg.Wait()' pentru a aștepta finalizarea tuturor gorutinelor înregistrate în WaitGroup.",
    "starterCode": "// Așteaptă finalizarea tuturor sarcinilor:\n",
    "acceptedAnswers": [
      "wg.Wait()",
      "wg.Wait();"
    ],
    "officialSolution": "wg.Wait()",
    "explanation": "'wg.Wait()' blochează funcția curentă până când fiecare apel 'wg.Add' a fost balansat de un 'wg.Done'.",
    "hint": "Scrie 'wg.Wait()'."
  },
  {
    "id": "go-10",
    "track": "Go & Sisteme Distribuite",
    "division": "Informatică și Programare",
    "icon": "🐹",
    "level": "5. Senior / Arhitect",
    "xp": 60,
    "title": "Capitolul 10: Proiect Practic: Crearea Unui Microserviciu REST API Rapid",
    "theory": "\n<p>Biblioteca standard Go conține probabil cel mai puternic server HTTP din industrie inclus direct fără dependențe externe: <code>net/http</code>. Proiectul final construiește un microserviciu REST complet cu rutare modernă și serializare JSON:</p>\n\n<pre><code>package main\n\nimport (\n    \"encoding/json\"\n    \"net/http\"\n)\n\ntype RaspunsHealth struct {\n    Status  string `json:\"status\"`\n    Versiune string `json:\"versiune\"`\n}\n\nfunc healthHandler(w http.ResponseWriter, r *http.Request) {\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    raspuns := RaspunsHealth{Status: \"UP\", Versiune: \"1.0.0\"}\n    json.NewEncoder(w).Encode(raspuns)\n}\n\nfunc main() {\n    http.HandleFunc(\"/api/health\", healthHandler)\n    http.ListenAndServe(\":8080\", nil)\n}</code></pre>\n",
    "glossary": [
      { "term": "net/http", "def": "Pachet standard Go ce oferă un server și client HTTP de nivel enterprise complet echipat." },
      { "term": "http.ResponseWriter", "def": "Interfață folosită de un handler HTTP pentru a scrie antetele și corpul răspunsului către client." },
      { "term": "http.Request", "def": "Structură ce descrie cererea HTTP primită (metodă, URL, headere, body)." },
      { "term": "json.NewEncoder", "def": "Generator eficient ce transmite obiecte serializate JSON direct în fluxul de rețea." }
    ],
    "matchingPairs": [
      { "left": "http.HandleFunc()", "right": "Înregistrează o rută și funcția ei de tratare" },
      { "left": "http.ListenAndServe()", "right": "Pornește serverul pe portul specificat" },
      { "left": "w.Header().Set()", "right": "Configurează antetele răspunsului HTTP" },
      { "left": "json.NewEncoder(w).Encode()", "right": "Scrie JSON direct în corpul răspunsului" }
    ],
    "quiz": {
      "question": "De ce este pachetul nativ net/http din Go atât de popular pentru microservicii în producție chiar și fără framework-uri externe greoaie?",
      "options": [
        "Fiecare cerere HTTP primită este tratată automat într-o gorutină independentă ultra-rapidă, oferind scalabilitate nativă masivă",
        "Pentru că alte framework-uri nu sunt permise pe Linux",
        "Pentru că nu suportă JSON",
        "Pentru că rulează doar pe un singur fir secvențial"
      ],
      "correctIndex": 0,
      "explanation": "Serverul HTTP din Go pornește automat câte o gorutină de 2KB pentru fiecare conexiune TCP, permițând zeci de mii de cereri simultane fără efort."
    },
    "task": "Pornește serverul HTTP pe portul \":8080\" apelând 'http.ListenAndServe(\":8080\", nil)'.",
    "starterCode": "// Pornește serverul HTTP:\n",
    "acceptedAnswers": [
      "http.ListenAndServe(\":8080\", nil)",
      "http.ListenAndServe(\":8080\", nil);"
    ],
    "officialSolution": "http.ListenAndServe(\":8080\", nil)",
    "explanation": "'http.ListenAndServe(\":8080\", nil)' pornește bucla serverului pe portul 8080.",
    "hint": "Scrie 'http.ListenAndServe(\":8080\", nil)'."
  },

  // =========================================================================
  // TRACK: SECURITATE CIBERNETICĂ & WEB (6 CAPITOLE COMPLETE)
  // =========================================================================
  {
    "id": "sec-1",
    "track": "Securitate Cibernetică & Web",
    "division": "Informatică și Programare",
    "icon": "🛡️",
    "level": "1. Fundamente Securitate",
    "xp": 35,
    "title": "Capitolul 1: Same-Origin Policy (SOP), CORS & Antete Securizate",
    "theory": "\n<p>Securitatea aplicațiilor web moderne începe cu <strong>Same-Origin Policy (SOP)</strong>: politica de bază a browserelor care împiedică un script descărcat de pe o origine (ex: <code>hacker.com</code>) să citească date sensibile din originea altei aplicații (ex: <code>banca-ta.ro</code>).</p>\n\n<h4>Origin = Protocol + Host + Port</h4>\n<p>Două adrese au aceeași origine DOAR dacă toate cele trei componente coincid:</p>\n<ul>\n  <li><code>https://polymath.ro:443</code> și <code>http://polymath.ro:80</code> &rarr; <strong>Origini Diferite</strong> (protocol diferit).</li>\n  <li><code>https://api.polymath.ro</code> și <code>https://polymath.ro</code> &rarr; <strong>Origini Diferite</strong> (subdomeniu diferit).</li>\n</ul>\n\n<h4>Cross-Origin Resource Sharing (CORS)</h4>\n<p>CORS este mecanismul prin care serverul informează browserul ce origini externe au permisiunea de a citi datele protejate prin antetul <code>Access-Control-Allow-Origin</code>.</p>\n",
    "glossary": [
      { "term": "Same-Origin Policy (SOP)", "def": "Mecanism de securitate critic din browsere ce izolează documentele încărcate din origini diferite." },
      { "term": "CORS", "def": "Cross-Origin Resource Sharing: mecanism bazat pe antete HTTP ce relaxează controlat politica SOP." },
      { "term": "Content-Security-Policy (CSP)", "def": "Antet HTTP ce restricționează sursele permise de unde browserul poate încărca scripturi, imagini sau stiluri." },
      { "term": "HSTS", "def": "HTTP Strict Transport Security: forțează browserul să comunice exclusiv prin conexiuni HTTPS securizate." }
    ],
    "matchingPairs": [
      { "left": "SOP", "right": "Izolarea documentelor între origini web diferite" },
      { "left": "CORS", "right": "Partajarea controlată a resurselor între domenii" },
      { "left": "CSP", "right": "Blochează scripturile neautorizate și atacurile XSS" },
      { "left": "HTTPS / TLS", "right": "Criptarea canalului de comunicare împotriva interceptării" }
    ],
    "quiz": {
      "question": "Ce definește 'Originea' unei cereri web conform politicii Same-Origin Policy?",
      "options": [
        "Combinația exactă de Protocol + Domeniu (Host) + Port",
        "Doar adresa IP a serverului",
        "Numele fișierului HTML solicitat",
        "Sistemul de operare al clientului"
      ],
      "correctIndex": 0,
      "explanation": "O origine este definită strict prin tripletul (Protocol, Host, Port). Dacă oricare diferă, se aplică restricțiile cross-origin."
    },
    "task": "Răspunde cu 'SOP' pentru a confirma însușirea conceptului de Same-Origin Policy.",
    "starterCode": "// Confirmă abrevierea politicii de securitate:\n",
    "acceptedAnswers": [
      "SOP",
      "sop"
    ],
    "officialSolution": "SOP",
    "explanation": "Same-Origin Policy este piatra de temelie a securității pe web.",
    "hint": "Introdu 'SOP'."
  },
  {
    "id": "sec-2",
    "track": "Securitate Cibernetică & Web",
    "division": "Informatică și Programare",
    "icon": "🛡️",
    "level": "2. Protecție Date",
    "xp": 40,
    "title": "Capitolul 2: Prevenirea Injecțiilor SQL (SQLi) prin Interogări Parametrizate",
    "theory": "\n<p><strong>SQL Injection (SQLi)</strong> rămâne una dintre cele mai periculoase vulnerabilități din clasamentul OWASP Top 10. Apare atunci când datele introduse de utilizator sunt concatenate direct ca text într-o interogare SQL, permițând atacatorului să injecteze comenzi de administrare sau să exfiltreze baza de date.</p>\n\n<h4>Exemplu Vulnerabil vs Soluție Securizată:</h4>\n<pre><code>// ❌ VULNERABIL: Concatenare directă (Atac: ' OR '1'='1)\nquery := \"SELECT * FROM users WHERE email = '\" + email + \"';\"\n\n// ✅ SECURIZAT: Interogare Parametrizată (Prepared Statements)\ndb.Query(\"SELECT * FROM users WHERE email = $1;\", email)</code></pre>\n<p>Într-o interogare parametrizată, motorul bazei de date compilează arborele sintactic al instrucțiunii <em>înainte</em> de primirea valorilor; parametrii sunt tratați strict ca date literale, făcând imposibilă interpretarea lor ca și comenzi SQL!</p>\n",
    "glossary": [
      { "term": "SQL Injection", "def": "Vulnerabilitate de securitate ce permite atacatorului să modifice interogările executate pe baza de date." },
      { "term": "Prepared Statement", "def": "Tehnică în care structura SQL este pre-compilată, iar parametrii sunt transmiși separat ca date sigure." },
      { "term": "Sanitizare de Date", "def": "Procesul de curățare și validare strictă a intrărilor de la utilizatori înainte de procesare." },
      { "term": "Principiul Least Privilege", "def": "Acordarea către utilizatorul bazei de date doar a permisiunilor strict necesare rulării aplicației." }
    ],
    "matchingPairs": [
      { "left": "Concatenare SQL", "right": "Vulnerabilitate critică la SQL Injection" },
      { "left": "Prepared Statement", "right": "Separarea instrucțiunii SQL de datele introduse" },
      { "left": "Parametru $1 / ?", "right": "Placeholder sigur tratat exclusiv ca valoare literală" },
      { "left": "OWASP", "right": "Organizație globală ce definește standardele de securitate web" }
    ],
    "quiz": {
      "question": "De ce elimină interogările parametrizate (Prepared Statements) riscul de SQL Injection?",
      "options": [
        "Planul de execuție SQL este compilat înainte de adăugarea datelor, astfel încât datele nu pot fi interpretate ca și comenzi",
        "Pentru că criptează baza de date cu parolă",
        "Pentru că șterge ghilimelele automat",
        "Pentru că rulează doar pe servere speciale"
      ],
      "correctIndex": 0,
      "explanation": "Baza de date compilează structura sintactică înainte și nu permite niciodată datelor utilizatorului să modifice logica comenzii."
    },
    "task": "Răspunde cu 'PARAMETRIZAT' pentru a confirma utilizarea interogărilor parametrizate în fața concatenării de text.",
    "starterCode": "// Confirmă tipul de interogare sigură:\n",
    "acceptedAnswers": [
      "PARAMETRIZAT",
      "parametrizat",
      "Parametrizat"
    ],
    "officialSolution": "PARAMETRIZAT",
    "explanation": "Interogările parametrizate reprezintă cel mai eficient scut împotriva SQL Injection.",
    "hint": "Introdu 'PARAMETRIZAT'."
  },
  {
    "id": "sec-3",
    "track": "Securitate Cibernetică & Web",
    "division": "Informatică și Programare",
    "icon": "🛡️",
    "level": "3. Protecție Web",
    "xp": 40,
    "title": "Capitolul 3: Prevenirea Atacurilor XSS (Cross-Site Scripting) & Politica CSP",
    "theory": "\n<p><strong>XSS (Cross-Site Scripting)</strong> are loc atunci când o aplicație web include date nesigure într-o pagină web fără codare/sanitizare corespunzătoare, determinând browserul victimei să execute scripturi JavaScript malițioase create de atacator.</p>\n\n<h4>Cele 3 Tipuri Principale de XSS:</h4>\n<ol>\n  <li><strong>Stored XSS:</strong> Scriptul malițios este salvat permanent în baza de date (ex: într-un comentariu) și rulat de fiecare utilizator care vizitează pagina.</li>\n  <li><strong>Reflected XSS:</strong> Scriptul este transmis printr-un link (ex: <code>?cauta=&lt;script&gt;...</code>) și reflectat direct în răspunsul serverului.</li>\n  <li><strong>DOM-based XSS:</strong> Vulnerabilitatea este prezentă exclusiv pe client prin funcții periculoase precum <code>element.innerHTML = userInput</code>.</li>\n</ol>\n\n<p>Pentru a preveni XSS, se folosește întotdeauna <code>textContent</code> în loc de <code>innerHTML</code> și se impune antetul HTTP <code>Content-Security-Policy</code> (CSP).</p>\n",
    "glossary": [
      { "term": "Cross-Site Scripting (XSS)", "def": "Injecție de cod JavaScript malițios ce rulează în contextul sesiunii de navigare a victimei." },
      { "term": "textContent", "def": "Proprietate DOM sigură ce inserează datele exclusiv ca text brut, fără a parsa taguri HTML." },
      { "term": "innerHTML", "def": "Proprietate DOM ce parsează șirul ca HTML; prezintă risc major de XSS dacă primește intrări nesigure." },
      { "term": "Cookie HttpOnly", "def": "Atribut ce împiedică accesarea cookie-urilor de sesiune prin cod JavaScript (document.cookie)." }
    ],
    "matchingPairs": [
      { "left": "textContent", "right": "Inserare sigură de text fără risc de execuție HTML/JS" },
      { "left": "innerHTML", "right": "Risc de XSS dacă este folosit cu date neverificate" },
      { "left": "HttpOnly", "right": "Protejează cookie-urile de furt prin JavaScript" },
      { "left": "CSP Header", "right": "Restricționează sursele autorizate de execuție a scripturilor" }
    ],
    "quiz": {
      "question": "Ce atribut aplicat unui cookie previne furtul acestuia de către un script malițios injectat prin XSS?",
      "options": [
        "HttpOnly (blochează accesul din document.cookie)",
        "Secure",
        "SameSite",
        "Path=/"
      ],
      "correctIndex": 0,
      "explanation": "Flag-ul 'HttpOnly' indică browserului că respectivul cookie poate fi transmis doar prin antete HTTP de rețea, blocând complet accesul prin API-ul JavaScript."
    },
    "task": "Răspunde cu 'textContent' pentru a confirma alternativa sigură la proprietatea vulnerabilă innerHTML.",
    "starterCode": "// Scrie proprietatea DOM sigură:\n",
    "acceptedAnswers": [
      "textContent",
      "textcontent"
    ],
    "officialSolution": "textContent",
    "explanation": "Folosirea proprietății textContent este o regulă fundamentală de igienă a codului frontend.",
    "hint": "Introdu 'textContent'."
  },
  {
    "id": "sec-4",
    "track": "Securitate Cibernetică & Web",
    "division": "Informatică și Programare",
    "icon": "🛡️",
    "level": "3. Protecție Web",
    "xp": 45,
    "title": "Capitolul 4: Atacuri CSRF & Atributele Cookie SameSite (Lax vs Strict)",
    "theory": "\n<p><strong>CSRF (Cross-Site Request Forgery)</strong> păcălește browserul unui utilizator autentificat să trimită cereri nedorite către o aplicație vulnerabilă în care utilizatorul are o sesiune activă (de exemplu: transfer bancar, schimbare parolă).</p>\n\n<h4>Apărarea Modernă: Atributul Cookie 'SameSite'</h4>\n<p>Înainte, CSRF necesita obligatoriu generarea de token-uri unice per formular (Anti-CSRF Tokens). În prezent, standardul de securitate se bazează pe atributul <code>SameSite</code> din antetul <code>Set-Cookie</code>:</p>\n<ul>\n  <li><code>SameSite=Strict</code>: Cookie-ul nu este trimis NICIODATĂ la cereri venite din alte site-uri (nici măcar când utilizatorul dă click pe un link extern).</li>\n  <li><code>SameSite=Lax</code> (Standardul recomandat): Cookie-ul este trimis la navigări de tip GET la nivel de top-window, dar blocat la formulare POST cross-site sau apeluri iframe/fetch externe.</li>\n  <li><code>SameSite=None</code>: Necesită obligatoriu flagul <code>Secure</code> (HTTPS).</li>\n</ul>\n",
    "glossary": [
      { "term": "CSRF", "def": "Cross-Site Request Forgery: falsificarea unei cereri autentificate trimise automat prin browserul victimei." },
      { "term": "SameSite=Lax", "def": "Setare modernă a cookie-urilor ce blochează transmiterea automată a credențialelor la cereri POST cross-site." },
      { "term": "SameSite=Strict", "def": "Izolare totală: cookie-ul nu părăsește niciodată originea proprie." },
      { "term": "Anti-CSRF Token", "def": "Valoare criptografică aleatoare inclusă în formulare ce trebuie validată de server la trimitere." }
    ],
    "matchingPairs": [
      { "left": "CSRF", "right": "Păcălirea browserului să trimită o cerere autentificată" },
      { "left": "SameSite=Lax", "right": "Standardul de protecție împotriva CSRF la cereri POST externe" },
      { "left": "SameSite=Strict", "right": "Restricție maximă: niciun cookie la navigare externă" },
      { "left": "Anti-CSRF Token", "right": "Verificare unică per sesiune a legitimității formularului" }
    ],
    "quiz": {
      "question": "Ce efect are setarea cookie-ului 'SameSite=Lax' împotriva unui atac CSRF efectuat prin formular ascuns de tip POST de pe alt site?",
      "options": [
        "Browserul refuză să atașeze cookie-ul de sesiune la cererea POST cross-site, neutralizând atacul",
        "Șterge contul utilizatorului",
        "Trimite parola în clar",
        "Nu are niciun efect"
      ],
      "correctIndex": 0,
      "explanation": "Politica SameSite=Lax blochează transmiterea automată a cookie-urilor la metode periculoase (POST, PUT, DELETE) generate de pe alte origini."
    },
    "task": "Răspunde cu 'SameSite=Lax' pentru a confirma politica recomandată de protecție împotriva CSRF.",
    "starterCode": "// Confirmă valoarea atributului:\n",
    "acceptedAnswers": [
      "SameSite=Lax",
      "samesite=lax",
      "Lax"
    ],
    "officialSolution": "SameSite=Lax",
    "explanation": "SameSite=Lax oferă echilibrul optim între securitate împotriva CSRF și ergonomie la navigare.",
    "hint": "Introdu 'SameSite=Lax'."
  },
  {
    "id": "sec-5",
    "track": "Securitate Cibernetică & Web",
    "division": "Informatică și Programare",
    "icon": "🛡️",
    "level": "4. Criptografie & Autentificare",
    "xp": 50,
    "title": "Capitolul 5: Stocarea Sigură a Parolelor (Argon2, bcrypt & Salt Criptografic)",
    "theory": "\n<p>Nicio aplicație profesională nu salvează parolele utilizatorilor în clar (plaintext) sau folosind algoritmi rapizi precum MD5 sau SHA-256 (care pot fi sparți în câteva secunde folosind plăci video GPU moderne și tabele curcubeu - <em>Rainbow Tables</em>).</p>\n\n<h4>Algoritmi Criptografici Moderni: Slow by Design</h4>\n<p>Algoritmii specializați pentru parole sunt concepuți să fie intenționat lenți și consumatori de memorie (Memory-Hard), făcând atacurile brute-force imposibile:</p>\n<ul>\n  <li><strong>Argon2id:</strong> Câștigătorul competiției Password Hashing Competition (PHC) - standardul de aur mondial recomandat în prezent.</li>\n  <li><strong>bcrypt:</strong> Algoritm clasic extrem de robust bazat pe Blowfish, cu factor configurabil de lucru (cost factor).</li>\n  <li><strong>Salt Criptografic:</strong> Un șir aleator unic generat pentru fiecare utilizator, adăugat parolei înainte de hashing, ce împiedică folosirea tabelelor precalculate.</li>\n</ul>\n",
    "glossary": [
      { "term": "Argon2id", "def": "Cel mai avansat standard internațional de hashing al parolelor, rezistent la atacuri GPU și ASIC." },
      { "term": "bcrypt", "def": "Algoritm adaptiv de derivare a cheilor ce permite creșterea dificultății de calcul pe măsură ce hardware-ul devine mai rapid." },
      { "term": "Salt", "def": "Șir aleator unic de octeți generat per utilizator pentru a garanta că parole identice au hash-uri complet diferite." },
      { "term": "Rainbow Table", "def": "Tabelă precalculată de hash-uri folosită de atacatori pentru spargerea instantanee a hash-urilor fără salt." }
    ],
    "matchingPairs": [
      { "left": "Argon2id", "right": "Standardul de aur actual pentru protecția parolelor" },
      { "left": "Salt", "right": "Previne utilizarea tabelelor precalculate Rainbow Tables" },
      { "left": "MD5 / SHA1", "right": "Algoritmi compromiși, complet interziși pentru parole" },
      { "left": "Cost Factor", "right": "Parametru ce mărește timpul de calcul împotriva atacurilor brute-force" }
    ],
    "quiz": {
      "question": "De ce este periculos să folosești SHA-256 simplu pentru stocarea parolelor?",
      "options": [
        "SHA-256 este calculat extrem de rapid de GPU-uri (miliarde de hash-uri/secundă), permițând spargerea prin brute-force în timp record",
        "Pentru că SHA-256 nu este un algoritm matematic",
        "Pentru că funcționează doar pe Windows",
        "Pentru că parolele expiră după 24 de ore"
      ],
      "correctIndex": 0,
      "explanation": "Algoritmii rapizi de integritate precum SHA-256 nu oferă rezistență la atacurile masiv paralele hardware fără un mecanism de încetinire precum Argon2 sau bcrypt."
    },
    "task": "Răspunde cu 'Argon2id' pentru a confirma cel mai recomandat algoritm contemporan de hashing de parole.",
    "starterCode": "// Confirmă standardul actual:\n",
    "acceptedAnswers": [
      "Argon2id",
      "argon2id",
      "Argon2"
    ],
    "officialSolution": "Argon2id",
    "explanation": "Argon2id este recomandat de OWASP ca algoritm primar pentru stocarea parolelor.",
    "hint": "Introdu 'Argon2id'."
  },
  {
    "id": "sec-6",
    "track": "Securitate Cibernetică & Web",
    "division": "Informatică și Programare",
    "icon": "🛡️",
    "level": "4. Criptografie & Autentificare",
    "xp": 50,
    "title": "Capitolul 6: Arhitectura Token-urilor JWT & Securitatea Sesiunilor",
    "theory": "\n<p><strong>JSON Web Tokens (JWT)</strong> sunt un standard deschis (RFC 7519) pentru transmiterea sigură de informații sub formă de obiect JSON compact și autonom semnat digital.</p>\n\n<h4>Structura Unui JWT (3 părți separate prin punct):</h4>\n<p><code>Header.Payload.Signature</code></p>\n<ul>\n  <li><strong>Header:</strong> Specifică algoritmul de semnare (ex: <code>{\"alg\": \"HS256\", \"typ\": \"JWT\"}</code>).</li>\n  <li><strong>Payload:</strong> Conține revendicările (claims): ID-ul utilizatorului, rolul, data de expirare <code>exp</code>. <em>Atenție: Payload-ul este doar codat în Base64Url, NU criptat! Oricine îl poate citi, deci nu introduceți niciodată secrete în el!</em></li>\n  <li><strong>Signature:</strong> Garantează integritatea datelor folosind o cheie secretă pe server: <code>HMACSHA256(header + \".\" + payload, secret)</code>.</li>\n</ul>\n\n<h4>Bune Practici de Stocare:</h4>\n<p>Nu stocați token-uri de autentificare pe termen lung în <code>localStorage</code> (unde sunt vulnerabile la furt prin XSS)! Folosiți cookie-uri securizate cu flagurile <code>HttpOnly; Secure; SameSite=Lax</code>.</p>\n",
    "glossary": [
      { "term": "JWT", "def": "JSON Web Token: structură compactă de autentificare bazată pe semnătură criptografică." },
      { "term": "Header", "def": "Prima parte a unui JWT ce specifică algoritmul de semnare utilizat." },
      { "term": "Payload", "def": "A doua parte a unui JWT ce stochează revendicările (claims) codate în Base64." },
      { "term": "Signature", "def": "Partea finală ce verifică că token-ul nu a fost modificat de client sau de un intermediar." }
    ],
    "matchingPairs": [
      { "left": "Header", "right": "Definește algoritmul criptografic de semnare" },
      { "left": "Payload", "right": "Conține datele utilizatorului și termenul de expirare (exp)" },
      { "left": "Signature", "right": "Verifică integritatea matematică a token-ului" },
      { "left": "HttpOnly Cookie", "right": "Cea mai sigură locație de stocare împotriva furtului XSS" }
    ],
    "quiz": {
      "question": "Sunt datele din secțiunea Payload a unui JWT criptate și secrete în mod implicit?",
      "options": [
        "Nu, sunt doar codate în Base64Url și pot fi decodate ușor de oricine; doar semnătura garantează integritatea",
        "Da, sunt criptate cu cheie militară de 4096 biți",
        "Sunt vizibile doar dacă ai parola de root",
        "Sunt șterse automat după citire"
      ],
      "correctIndex": 0,
      "explanation": "Payload-ul JWT este doar codat în Base64 pentru a fi transmis în antete HTTP; nu stocați niciodată date confidențiale în payload fără criptare separată."
    },
    "task": "Răspunde cu 'JWT' pentru a confirma structura formată din Header, Payload și Signature.",
    "starterCode": "// Confirmă abrevierea standardului RFC 7519:\n",
    "acceptedAnswers": [
      "JWT",
      "jwt"
    ],
    "officialSolution": "JWT",
    "explanation": "JSON Web Tokens sunt standardul preferat pentru microservicii și API-uri distribuite.",
    "hint": "Introdu 'JWT'."
  },

  // =========================================================================
  // TRACK: INTELIGENȚĂ ARTIFICIALĂ & MACHINE LEARNING (6 CAPITOLE COMPLETE)
  // =========================================================================
  {
    "id": "ai-1",
    "track": "Inteligență Artificială & ML",
    "division": "Informatică și Programare",
    "icon": "🧠",
    "level": "1. Fundamente AI",
    "xp": 35,
    "title": "Capitolul 1: Cele 3 Paradigme ale Machine Learning (Supervised, Unsupervised & RL)",
    "theory": "\n<p><strong>Machine Learning (ML)</strong> este subdomeniul inteligenței artificiale în care calculatoarele învață tipare direct din date empirice, fără a fi programate explicit prin reguli rigide <code>if-else</code>.</p>\n\n<h4>Cele 3 Ramuri Fundamentale ale ML:</h4>\n<ol>\n  <li><strong>Învățare Supervizată (Supervised Learning):</strong>\n    <p>Modelul este antrenat pe date etichetate (perechi <em>intrare &rarr; etichetă dorită</em>). Se împarte în:</p>\n    <ul>\n      <li><em>Regresie:</em> predicția unei valori numerice continue (ex: prețul unei locuințe).</li>\n      <li><em>Clasificare:</em> atribuirea unei categorii discrete (ex: email Spam vs Ham).</li>\n    </ul>\n  </li>\n  <li><strong>Învățare Nesupervizată (Unsupervised Learning):</strong>\n    <p>Algoritmul descoperă structuri și tipare ascunse în date fără etichete predefinite (ex: segmentarea clienților prin clustering k-means, reducerea dimensionalității prin PCA).</p>\n  </li>\n  <li><strong>Învățare prin Recompensă (Reinforcement Learning - RL):</strong>\n    <p>Un agent software interacționează cu un mediu dinamic și învață politici optime prin încercare și eroare, ghidat de recompense și penalizări (ex: AlphaGo, conducere autonomă).</p>\n  </li>\n</ol>\n",
    "glossary": [
      { "term": "Machine Learning", "def": "Studiul algoritmilor computaționali ce își îmbunătățesc performanța automat prin experiență și date." },
      { "term": "Supervised Learning", "def": "Antrenarea modelelor folosind seturi de date ce conțin intrări și ieșiri etichetate cunoscute." },
      { "term": "Unsupervised Learning", "def": "Descoperirea de tipare, grupări sau anomalii în date neetichetate." },
      { "term": "Reinforcement Learning", "def": "Învățarea deciziilor optime de către un agent ghidat de recompense din mediu." }
    ],
    "matchingPairs": [
      { "left": "Regresie", "right": "Predicția unei valori numerice continue" },
      { "left": "Clasificare", "right": "Atribuirea unei etichete dintr-un set discret de clase" },
      { "left": "Clustering", "right": "Gruparea nesupervizată a datelor similare" },
      { "left": "Agent RL", "right": "Maximizează recompensa cumulată pe termen lung" }
    ],
    "quiz": {
      "question": "Ce tip de Machine Learning este folosit pentru a clasifica dacă o tranzacție bancară este frauduloasă sau legitimă pe baza milioanelor de tranzacții trecute deja etichetate?",
      "options": [
        "Învățare Supervizată (Supervised Learning - Clasificare)",
        "Învățare prin Recompensă pură",
        "Grafică Computațională",
        "Compilare Assembly"
      ],
      "correctIndex": 0,
      "explanation": "Deoarece datele istorice conțin deja eticheta dacă tranzacția a fost sau nu fraudă, modelul învață supervizat prin clasificare binară."
    },
    "task": "Răspunde cu 'SUPERVIZAT' pentru a confirma tipul de învățare bazat pe date etichetate de intrare și ieșire.",
    "starterCode": "// Confirmă tipul de învățare:\n",
    "acceptedAnswers": [
      "SUPERVIZAT",
      "supervizat",
      "Supervizat"
    ],
    "officialSolution": "SUPERVIZAT",
    "explanation": "Învățarea supervizată reprezintă majoritatea aplicațiilor industriale de ML de astăzi.",
    "hint": "Introdu 'SUPERVIZAT'."
  },
  {
    "id": "ai-2",
    "track": "Inteligență Artificială & ML",
    "division": "Informatică și Programare",
    "icon": "🧠",
    "level": "2. Rețele Neuronale",
    "xp": 40,
    "title": "Capitolul 2: Arhitectura Rețelelor Neuronale: Perceptron & Funcții de Activare",
    "theory": "\n<p>O <strong>rețea neuronală artificială (ANN)</strong> este formată din unități de calcul interconectate numite neuroni artificiali (perceptroni), organizate pe straturi: <em>strat de intrare</em>, <em>straturi ascunse (hidden layers)</em> și <em>strat de ieșire</em>.</p>\n\n<h4>Formula de Bază a unui Neuron:</h4>\n<p>$$y = \\sigma\\left(\\sum_{i} w_i x_i + b\\right)$$</p>\n<ul>\n  <li>$x_i$: valorile de intrare.</li>\n  <li>$w_i$: <strong>ponderile (weights)</strong> sinaptice ce amplifică sau atenuează semnalul.</li>\n  <li>$b$: <strong>termenul liber (bias)</strong> ce deplasează pragul de activare.</li>\n  <li>$\\sigma$: <strong>funcția de activare</strong> care introduce non-liniaritate! Fără non-liniaritate, o rețea de 100 de straturi ar echivala cu o simplă transformare liniară!</li>\n</ul>\n\n<h4>Funcții de Activare Populare:</h4>\n<ul>\n  <li><strong>ReLU (Rectified Linear Unit):</strong> $f(x) = \\max(0, x)$ — standardul industrial pentru straturile ascunse, extrem de rapid de calculat.</li>\n  <li><strong>Sigmoid:</strong> $f(x) = \\frac{1}{1 + e^{-x}}$ — mapează ieșirea în intervalul $(0, 1)$, ideală pentru probabilități binare.</li>\n  <li><strong>Softmax:</strong> Transformă un vector numeric într-o distribuție de probabilități ce însumează exact 1.0.</li>\n</ul>\n",
    "glossary": [
      { "term": "Perceptron", "def": "Cel mai simplu model matematic al unui neuron artificial, calculând suma ponderată a intrărilor." },
      { "term": "Weight (Pondere)", "def": "Parametru ajustabil ce controlează forța influenței unei intrări asupra stării neuronului." },
      { "term": "Bias", "def": "Valoare constantă adăugată sumei ponderate pentru a ajusta pragul de activare independent de intrări." },
      { "term": "ReLU", "def": "Rectified Linear Unit: funcție de activare ce returnează x pentru valori pozitive și 0 pentru negative." }
    ],
    "matchingPairs": [
      { "left": "Ponderi (Weights)", "right": "Parametrii învățați ce măsoară importanța fiecărei conexiuni" },
      { "left": "ReLU", "right": "f(x) = max(0, x), previne saturarea gradientului" },
      { "left": "Softmax", "right": "Distribuție de probabilități la stratul final de ieșire" },
      { "left": "Non-liniaritate", "right": "Permite rețelelor să învețe forme și relații complexe" }
    ],
    "quiz": {
      "question": "De ce sunt funcțiile de activare non-liniare (precum ReLU) indispensabile într-o rețea neuronală cu mai multe straturi?",
      "options": [
        "Fără ele, compunerea oricărui număr de straturi ar deveni o simplă operație liniară incapabilă să rezolve probleme complexe",
        "Pentru a economisi memorie pe disc",
        "Pentru a rula mai puține bucle for",
        "Nu sunt indispensabile, se pot omite oricând"
      ],
      "correctIndex": 0,
      "explanation": "Proprietatea de aproximator universal al funcțiilor complexe este posibilă doar datorită non-liniarităților introduse de funcțiile de activare."
    },
    "task": "Răspunde cu 'ReLU' pentru a confirma cea mai utilizată funcție de activare din Deep Learning modern.",
    "starterCode": "// Confirmă funcția f(x) = max(0, x):\n",
    "acceptedAnswers": [
      "ReLU",
      "relu",
      "Relu"
    ],
    "officialSolution": "ReLU",
    "explanation": "ReLU este funcția standard folosită în marea majoritate a rețelelor profunde.",
    "hint": "Introdu 'ReLU'."
  },
  {
    "id": "ai-3",
    "track": "Inteligență Artificială & ML",
    "division": "Informatică și Programare",
    "icon": "🧠",
    "level": "2. Rețele Neuronale",
    "xp": 45,
    "title": "Capitolul 3: Antrenarea Modelelor: Loss Function, Gradient Descent & Backpropagation",
    "theory": "\n<p>Cum „învață” o rețea neuronală? Antrenarea este un proces de optimizare matematică ghidat de 3 piloni:</p>\n\n<ol>\n  <li><strong>Funcția de Pierdere (Loss Function):</strong>\n    <p>Măsoară eroarea dintre predicția modelului și realitate (ex: <em>Mean Squared Error</em> pentru regresie, <em>Cross-Entropy Loss</em> pentru clasificare).</p>\n  </li>\n  <li><strong>Backpropagation (Retropropagarea Erorii):</strong>\n    <p>Aplicarea eficientă a regulii de derivare a funcțiilor compuse (<em>Chain Rule</em>) din calcul diferențial, calculând derivata parțială a erorii în raport cu fiecare pondere: $\\frac{\\partial L}{\\partial w}$.</p>\n  </li>\n  <li><strong>Gradient Descent (Coborârea pe Gradient):</strong>\n    <p>Ajustează ponderile în direcția opusă gradientului pentru a minimiza eroarea, controlat de <strong>rata de învățare (Learning Rate - $\\alpha$)</strong>:</p>\n    <p>$$w_{nou} = w_{vechi} - \\alpha \\cdot \\frac{\\partial L}{\\partial w}$$</p>\n  </li>\n</ol>\n",
    "glossary": [
      { "term": "Loss Function", "def": "Funcție matematică ce măsoară diferența (penalizarea) dintre predicția modelului și adevărul absolut." },
      { "term": "Gradient", "def": "Vector de derivate parțiale ce indică direcția de creștere maximă a erorii." },
      { "term": "Learning Rate", "def": "Hiperparametru ce dictează mărimea pasului efectuat la fiecare iterație de optimizare a ponderilor." },
      { "term": "Epoch (Epocă)", "def": "O trecere completă a întregului set de date de antrenament prin rețeaua neuronală." }
    ],
    "matchingPairs": [
      { "left": "Loss Function", "right": "Cuantifică abaterea predicției de la realitate" },
      { "left": "Backpropagation", "right": "Calculul eficient al gradientului prin regula lanțului" },
      { "left": "Gradient Descent", "right": "Ajustarea pas cu pas a ponderilor pentru minimizarea pierderii" },
      { "left": "Learning Rate", "right": "Dimensiunea pasului de actualizare a parametrilor" }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă rata de învățare (Learning Rate) este setată la o valoare mult prea mare?",
      "options": [
        "Modelul oscilează instabil și poate diverge, ratând complet punctul minim al funcției de pierdere",
        "Modelul învață instantaneu în 1 secundă",
        "Compilatorul raportează eroare de sintaxă",
        "Eroarea devine automat 0"
      ],
      "correctIndex": 0,
      "explanation": "Un Learning Rate exagerat determină pași prea mari care sar peste minimul global, provocând divergență."
    },
    "task": "Răspunde cu 'BACKPROPAGATION' pentru a confirma algoritmul fundamental de propagare a erorii în rețele neuronale.",
    "starterCode": "// Confirmă algoritmul:\n",
    "acceptedAnswers": [
      "BACKPROPAGATION",
      "backpropagation",
      "Backpropagation"
    ],
    "officialSolution": "BACKPROPAGATION",
    "explanation": "Backpropagation este motorul matematic care a făcut posibil Deep Learning-ul modern.",
    "hint": "Introdu 'BACKPROPAGATION'."
  },
  {
    "id": "ai-4",
    "track": "Inteligență Artificială & ML",
    "division": "Informatică și Programare",
    "icon": "🧠",
    "level": "3. NLP & Text",
    "xp": 45,
    "title": "Capitolul 4: NLP Modern: Tokenizare & Reprezentări Vectoriale (Embeddings)",
    "theory": "\n<p>Calculatoarele nu pot înțelege cuvintele direct ca text; ele operează exclusiv cu numere și tensori. <strong>Procesarea Limbajului Natural (NLP)</strong> transformă limbajul uman în spații matematice continue:</p>\n\n<h4>1. Tokenizarea (Subword Tokenization)</h4>\n<p>Algoritmi moderni precum <strong>Byte-Pair Encoding (BPE)</strong> împart textul în unități numite tokeni (cuvinte sau fragmente de cuvinte), permițând modelarea oricărui vocabular fără erori de cuvânt necunoscut (OOV):</p>\n<pre><code>\"PolymathHub\" -> [\"Poly\", \"math\", \"Hub\"] -> Token IDs: [1420, 891, 552]</code></pre>\n\n<h4>2. Embeddings (Vectori Semantici)</h4>\n<p>Fiecare token este mapat la un vector dens de numere reale (ex: 1536 dimensiuni). Proprietatea fascinantă a spațiului vectorial este că <strong>distanța și unghiul dintre vectori (Cosine Similarity) reflectă asemănarea semantică</strong>:</p>\n<p>$$\\vec{v}_{rege} - \\vec{v}_{bărbat} + \\vec{v}_{femeie} \\approx \\vec{v}_{regină}$$</p>\n",
    "glossary": [
      { "term": "Token", "def": "Cea mai mică unitate de text (cuvânt, parte de cuvânt sau simbol) procesată de un model lingvistic." },
      { "term": "Embedding", "def": "Vector numeric dens ce proiectează un concept sau token într-un spațiu geometric semantic." },
      { "term": "Cosine Similarity", "def": "Măsură a cosinusului unghiului dintre doi vectori, evaluând cât de apropiați sunt ca semnificație." },
      { "term": "BPE (Byte-Pair Encoding)", "def": "Algoritm de tokenizare sub-cuvânt utilizat pe scară largă de modelele GPT." }
    ],
    "matchingPairs": [
      { "left": "Tokenizare", "right": "Fragmentarea textului brut într-o secvență de ID-uri întregi" },
      { "left": "Vector Embedding", "right": "Reprezentare matematică a sensului semantic în spațiu multi-dimensional" },
      { "left": "Cosine Similarity", "right": "Măsoară apropierea semantică dintre doi vectori" },
      { "left": "BPE", "right": "Algoritm de tokenizare bazat pe compresie de perechi frecvente" }
    ],
    "quiz": {
      "question": "Ce proprietate deosebită au vectorii de tip Embedding într-un spațiu semantic bine antrenat?",
      "options": [
        "Cuvintele cu sens similar sau context comun au vectori geometric apropiați în spațiul vectorial",
        "Toți vectorii au suma exact zero",
        "Sunt identici pentru toate limbile fără traducere",
        "Ocupă doar 1 bit de memorie"
      ],
      "correctIndex": 0,
      "explanation": "Embeddings proiectează semnificația lingvistică în geometrie: concepte similare (ex: 'câine' și 'cățel') au reprezentări vectoriale orientate aproape identic."
    },
    "task": "Răspunde cu 'EMBEDDING' pentru a confirma reprezentarea vectorială densă a unui token în spațiu semantic.",
    "starterCode": "// Confirmă termenul vectorial:\n",
    "acceptedAnswers": [
      "EMBEDDING",
      "embedding",
      "Embedding"
    ],
    "officialSolution": "EMBEDDING",
    "explanation": "Vectorii embeddings sunt fundamentul pe care funcționează căutarea semantică și LLM-urile.",
    "hint": "Introdu 'EMBEDDING'."
  },
  {
    "id": "ai-5",
    "track": "Inteligență Artificială & ML",
    "division": "Informatică și Programare",
    "icon": "🧠",
    "level": "4. Arhitecturi Avansate",
    "xp": 50,
    "title": "Capitolul 5: Arhitectura Transformer & Mecanismul de Auto-Atenție (Self-Attention)",
    "theory": "\n<p>Articolul revoluționar publicat de cercetătorii de la Google în 2017: <em>„Attention Is All You Need”</em> a marcat nașterea arhitecturii <strong>Transformer</strong>, fundamentul tuturor modelelor lingvistice mari de astăzi (GPT, Claude, Gemini, LLaMA).</p>\n\n<h4>De ce a înlocuit Transformer-ul vechile rețele RNN/LSTM?</h4>\n<p>Rețelele recurente procesau textul cuvânt cu cuvânt în mod secvențial, fiind imposibil de paralelizat pe plăci grafice GPU. Transformer-ul procesează <strong>întreaga secvență simultan</strong> prin <strong>Self-Attention (Auto-Atenție)</strong>.</p>\n\n<h4>Formula Matematică a Auto-Atenției (Scaled Dot-Product):</h4>\n<p>$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$$</p>\n<ul>\n  <li><strong>Query ($Q$):</strong> Ce caută cuvântul curent?</li>\n  <li><strong>Key ($K$):</strong> Ce identitate oferă celelalte cuvinte din text?</li>\n  <li><strong>Value ($V$):</strong> Ce informație concretă furnizează cuvintele relevante?</li>\n</ul>\n<p>Acest mecanism permite fiecărui cuvânt să acorde atenție ponderată oricărui alt cuvânt din frază, indiferent de distanța dintre ele (rezolvând dependențele pe distanțe lungi!).</p>\n",
    "glossary": [
      { "term": "Transformer", "def": "Arhitectură de rețea neuronală bazată exclusiv pe mecanismul de atenție, masiv paralelizabilă pe GPU." },
      { "term": "Self-Attention", "def": "Mecanism prin care un model calculează corelațiile dintre toate pozițiile dintr-o secvență de text simultan." },
      { "term": "Query, Key, Value (Q, K, V)", "def": "Cele 3 proiecții liniare derivate din input ce calculează ponderile de atenție reciprocă." },
      { "term": "Context Window", "def": "Numărul maxim de tokeni pe care un model lingvistic îi poate menține activi în memorie simultan." }
    ],
    "matchingPairs": [
      { "left": "Query (Q)", "right": "Vectorul de interogare al poziției curente" },
      { "left": "Key (K)", "right": "Vectorul de identificare pentru calculul potrivirii" },
      { "left": "Value (V)", "right": "Conținutul efectiv ponderat prin atenție" },
      { "left": "Multi-Head Attention", "right": "Mecanism ce permite modelului să acorde atenție din multiple perspective simultan" }
    ],
    "quiz": {
      "question": "Ce avantaj crucial au avut rețelele Transformer față de modelele recurente vechi (RNN)?",
      "options": [
        "Permit antrenarea masiv paralelă pe GPU peste întreaga secvență deodată, capturând dependențe pe distanțe lungi fără degradare",
        "Funcționează fără nicio ecuație matematică",
        "Nu necesită date de antrenament",
        "Consumă mai puțin curent decât un bec"
      ],
      "correctIndex": 0,
      "explanation": "Paralelizarea masivă a permis antrenarea pe miliarde de pagini web, dând naștere saltului calitativ al LLM-urilor."
    },
    "task": "Răspunde cu 'TRANSFORMER' pentru a confirma arhitectura fondatoare din lucrarea «Attention Is All You Need».",
    "starterCode": "// Confirmă arhitectura revoluționară:\n",
    "acceptedAnswers": [
      "TRANSFORMER",
      "transformer",
      "Transformer"
    ],
    "officialSolution": "TRANSFORMER",
    "explanation": "Arhitectura Transformer stă la baza întregii revoluții actuale de Inteligență Artificială Generativă.",
    "hint": "Introdu 'TRANSFORMER'."
  },
  {
    "id": "ai-6",
    "track": "Inteligență Artificială & ML",
    "division": "Informatică și Programare",
    "icon": "🧠",
    "level": "4. Arhitecturi Avansate",
    "xp": 50,
    "title": "Capitolul 6: Prompt Engineering, RAG (Retrieval-Augmented Generation) & Agenți AI",
    "theory": "\n<p>În dezvoltarea practică de software modern cu AI, interacționăm cu LLM-urile pre-antrenate prin două tehnologii cheie:</p>\n\n<h4>1. RAG (Retrieval-Augmented Generation)</h4>\n<p>Modelele lingvistice au date limitate la momentul antrenării și pot suferi de halucinații. <strong>RAG</strong> rezolvă această problemă conectând modelul la baze de date vectoriale proprii:</p>\n<ol>\n  <li>Întrebarea utilizatorului este transformată într-un vector embedding.</li>\n  <li>O căutare de similaritate într-o <strong>bază de date vectorială</strong> (ex: Pinecone, Qdrant, pgvector) extrage cele mai relevante paragrafe din documentele interne.</li>\n  <li>Documentele extrase sunt inserate ca și context în promptul transmis către LLM.</li>\n  <li>LLM-ul generează un răspuns ancorat strict pe fapte verificate din contextul furnizat!</li>\n</ol>\n\n<h4>2. Agenți Autonomi & Function Calling</h4>\n<p>Un <strong>Agent AI</strong> extinde LLM-ul cu instrumente: modelul decide autonom când să apeleze API-uri externe, să interogheze o bază de date SQL sau să execute cod pentru a rezolva obiective complexe în mai mulți pași.</p>\n",
    "glossary": [
      { "term": "RAG", "def": "Retrieval-Augmented Generation: arhitectură ce furnizează documente relevante din baze vectoriale către LLM înainte de generare." },
      { "term": "Halucinație", "def": "Situație în care un model generativ produce informații false prezentate cu aparență de certitudine." },
      { "term": "Bază de Date Vectorială", "def": "Sistem de stocare optimizat pentru indexarea și căutarea rapidă a vectorilor embedding (k-NN / HNSW)." },
      { "term": "Function Calling", "def": "Abilitatea unui model AI de a returna structuri JSON standardizate pentru invocarea automată a uneltelor externe." }
    ],
    "matchingPairs": [
      { "left": "RAG", "right": "Generare augmentată cu documente din baze vectoriale" },
      { "left": "Halucinație", "right": "Generarea de informații factuale eronate de către model" },
      { "left": "Function Calling", "right": "Decizia autonomă a LLM-ului de a invoca instrumente externe" },
      { "left": "Few-Shot Prompting", "right": "Includerea unor exemple demonstrative în prompt" }
    ],
    "quiz": {
      "question": "Care este avantajul principal al utilizării arhitecturii RAG (Retrieval-Augmented Generation) față de re-antrenarea de la zero a unui LLM?",
      "options": [
        "Permite accesul instant la date private recente la costuri minime, fără riscul re-antrenării și reducând dramatic halucinațiile",
        "Nu mai necesită curent electric",
        "Șterge baza de date automat",
        "RAG funcționează doar offline fără calculator"
      ],
      "correctIndex": 0,
      "explanation": "RAG injectează dinamic cele mai proaspete și exacte date direct în contextul cererii, oferind acuratețe factuală fără costurile uriașe ale re-antrenării modelului."
    },
    "task": "Răspunde cu 'RAG' pentru a confirma arhitectura de generare augmentată prin regăsire de documente.",
    "starterCode": "// Confirmă abrevierea arhitecturii:\n",
    "acceptedAnswers": [
      "RAG",
      "rag"
    ],
    "officialSolution": "RAG",
    "explanation": "RAG este arhitectura de referință în dezvoltarea soluțiilor enterprise bazate pe inteligență artificială generativă.",
    "hint": "Introdu 'RAG'."
  }
];
