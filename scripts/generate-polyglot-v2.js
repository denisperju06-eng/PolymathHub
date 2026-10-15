const fs = require('fs');
const vm = require('vm');

// 1. Read existing curriculum-polyglot.js (26 chapters)
const existingCode = fs.readFileSync('./curriculum-polyglot.js', 'utf8');
const existingSandbox = {};
vm.runInNewContext(existingCode, existingSandbox);
const part1And2 = existingSandbox.NEW_EXPANDED_CURRICULUM;
console.log('Existing polyglot lessons count:', part1And2.length);

// 2. Read Part 3 and Part 4
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('/Users/preference/Desktop/gemini-code-1792068276622.js', 'utf8'), sandbox);
vm.runInContext(fs.readFileSync('/Users/preference/Desktop/gemini-code-1792068284391.js', 'utf8'), sandbox);

const p3 = sandbox.window.NEW_EXPANDED_CURRICULUM_PART3;
const p4 = sandbox.window.NEW_EXPANDED_CURRICULUM_PART4;
const allModules = [...p3, ...p4];

// Helper to craft glossary, matching pairs and quiz for each exercise
function enrichExercise(mod, chap, ex, idx) {
  let track = '';
  let division = '';
  
  if (mod.id === 'devops-linux-git' || mod.id === 'cyber-networking') {
    track = 'DevOps & Sisteme Linux';
    division = 'Informatică și Programare';
  } else if (mod.id === 'typescript-react') {
    track = 'TypeScript & React';
    division = 'Informatică și Programare';
  } else if (mod.id === 'dsa-algorithms') {
    track = 'Algoritmi & Structuri de Date';
    division = 'Informatică și Programare';
  } else if (mod.id === 'cpp-advanced') {
    track = 'C & C++';
    division = 'Informatică și Programare';
  } else if (mod.id === 'java-spring') {
    track = 'Java';
    division = 'Informatică și Programare';
  } else if (mod.id === 'french-a2-b1' || mod.id === 'french-b2-c1') {
    track = 'Limba Franceză';
    division = 'Limbi Străine & Comunicare';
  } else if (mod.id === 'spanish-a2-b1' || mod.id === 'spanish-b2-c1') {
    track = 'Limba Spaniolă';
    division = 'Limbi Străine & Comunicare';
  }

  // Subtitle
  const exTitle = chap.exercises.length > 1 ? `${chap.title} — Partea ${idx + 1}` : chap.title;

  // Custom glossary, pairs and quiz based on topic
  let glossary = [
    { term: "File Descriptor", def: "Număr întreg prin care nucleul identifică un flux deschis de date (0=in, 1=out, 2=err)." },
    { term: "Pipe (|)", def: "Mecanism IPC ce transmite ieșirea standard a unui proces direct în intrarea altui proces." },
    { term: "Redirecționare", def: "Modificarea destinației sau sursei fluxurilor I/O către fișiere utilizând operatorii >, >> sau <." },
    { term: "Stderr (2)", def: "Canalul dedicat mesajelor de diagnoză și eroare, separat de fluxul standard stdout." }
  ];

  let matchingPairs = [
    { left: "stdin (0)", right: "Intrarea standard a procesului (tastatură / stream)" },
    { left: "stdout (1)", right: "Ieșirea standard a procesului pentru date normale" },
    { left: "stderr (2)", right: "Fluxul de diagnostic și erori al procesului" },
    { left: "2> /dev/null", right: "Suprimarea completă a mesajelor de eroare" }
  ];

  let quiz = {
    question: "Ce descriptor de fișier identifică fluxul standard de erori (stderr) în UNIX/Linux?",
    options: ["Descriptorul 0", "Descriptorul 1", "Descriptorul 2", "Descriptorul 3"],
    correctIndex: 2
  };

  // Specific customizations
  if (ex.id.includes('chmod')) {
    glossary = [
      { term: "chmod", def: "Comandă UNIX folosită pentru a altera biții de permisiune ai fișierelor." },
      { term: "+x", def: "Acordarea dreptului de execuție pentru proprietar, grup și ceilalți utilizatori." },
      { term: "POSIX", def: "Standardul portabil de operare care definește permisiunile Read/Write/Execute." },
      { term: "Shebang", def: "Secvența #! din prima linie a unui script ce specifică interpretorul." }
    ];
    matchingPairs = [
      { left: "chmod +x", right: "Adaugă permisiune de execuție fișierului" },
      { left: "chmod 755", right: "Drepturi rwxr-xr-x (execuție și citire pentru toți)" },
      { left: "chown", right: "Schimbă proprietarul sau grupul fișierului" },
      { left: "ls -l", right: "Afișează detaliat permisiunile și metadatele fișierelor" }
    ];
    quiz = {
      question: "Care este comanda corectă pentru a face un fișier script executabil în Linux?",
      options: ["chmod +x script.sh", "run script.sh", "exec +r script.sh", "allow script.sh"],
      correctIndex: 0
    };
  } else if (ex.id.includes('pipe') || ex.id === 'devops-1-ex3') {
    glossary = [
      { term: "Pipeline", def: "Înlănțuire de programe independente unde datele curg de la stânga la dreapta." },
      { term: "grep", def: "Utilitar UNIX de căutare a liniilor ce corespund unei expresii regulate." },
      { term: "cat", def: "Concatenarea și afișarea conținutului fișierelor pe stdout." },
      { term: "awk", def: "Limbaj de procesare a textului bazat pe coloane și tipare." }
    ];
    matchingPairs = [
      { left: "| (Pipe)", right: "Leagă stdout-ul din stânga la stdin-ul din dreapta" },
      { left: "grep", right: "Filtrează liniile de text pe baza unui tipar" },
      { left: "cat", right: "Afișează conținutul unui fișier" },
      { left: "wc -l", right: "Numără liniile de text primite ca intrare" }
    ];
    quiz = {
      question: "Ce operator este folosit în terminalul Linux pentru a conecta stdout-ul unei comenzi la stdin-ul altei comenzi?",
      options: [">", ">>", "|", "&"],
      correctIndex: 2
    };
  } else if (ex.id.startsWith('devops-2')) {
    glossary = [
      { term: "git checkout -b", def: "Creează instant o nouă ramură de dezvoltare și mută HEAD pe aceasta." },
      { term: "git stash", def: "Salvează modificările nestructurate într-o stivă temporară pentru a curăța working tree-ul." },
      { term: "git stash pop", def: "Reaplică cel mai recent stash salvat și îl elimină din stivă." },
      { term: "Fast-Forward", def: "Actualizarea pointerului de branch fără a crea un commit suplimentar de merge." }
    ];
    matchingPairs = [
      { left: "git checkout -b", right: "Creează și comută pe o nouă ramură" },
      { left: "git stash", right: "Salvează temporar modificările curente neterminate" },
      { left: "git stash pop", right: "Restaurează și șterge ultimul stash din stivă" },
      { left: "git rebase", right: "Reaplică commit-urile peste noua bază a ramurii" }
    ];
    quiz = {
      question: "Care comandă Git extrage și aplică ultimul stash din stivă, eliminându-l din listă?",
      options: ["git stash apply", "git stash pop", "git stash drop", "git stash clear"],
      correctIndex: 1
    };
  } else if (ex.id.startsWith('devops-3')) {
    glossary = [
      { term: "Docker Image", def: "Pachet imutabil ce conține codul, dependențele și runtime-ul necesar execuției." },
      { term: "Container", def: "Instanță izolată a unei imagini rulată pe kernel-ul sistemului gazdă." },
      { term: "Multi-Stage Build", def: "Tehnică Dockerfile ce separă mediul de compilare de imaginea finală minimală." },
      { term: "Port Mapping (-p)", def: "Redirecționarea traficului de pe un port al mașinii gazdă către un port din container." }
    ];
    matchingPairs = [
      { left: "docker build -t", right: "Construiește și etichetează o imagine din Dockerfile" },
      { left: "docker run -d", right: "Rulează un container în modul detașat (în fundal)" },
      { left: "-p 8080:80", right: "Mapează portul 8080 al gazdei la portul 80 din container" },
      { left: "Multi-stage", right: "Optimizează mărimea imaginii finale eliminând uneltele de build" }
    ];
    quiz = {
      question: "Ce flag este folosit la `docker run` pentru a rula containerul în fundal (daemon / detached mode)?",
      options: ["-b", "-d", "-f", "-bg"],
      correctIndex: 1
    };
  } else if (ex.id.startsWith('ts-react-1')) {
    glossary = [
      { term: "Union Type (|)", def: "Permite unei valori să aparțină unuia dintre mai multe tipuri declarate explicit." },
      { term: "Literal Types", def: "Tipuri care acceptă doar valori specifice constante (ex: 'light' | 'dark')." },
      { term: "Type Guard", def: "Expresie de verificare la runtime ce îngustează tipul unei variabile (ex: typeof, instanceof)." },
      { term: "Type Inference", def: "Abilitatea compilatorului TypeScript de a deduce automat tipul unei expresii." }
    ];
    matchingPairs = [
      { left: "type Theme", right: "Union type cu valori literale (\"light\" | \"dark\")" },
      { left: "Type Guard", right: "Verificare ce îngustează tipul la runtime (typeof x === 'number')" },
      { left: "interface", right: "Contract ce definește forma structurală a unui obiect" },
      { left: "Type Alias", right: "Nume alternativ atribuit unui tip complex sau primitiv" }
    ];
    quiz = {
      question: "Cum definim în TypeScript o variabilă care poate fi fie string, fie number?",
      options: ["string & number", "string | number", "string || number", "Union<string, number>"],
      correctIndex: 1
    };
  } else if (ex.id.startsWith('ts-react-2')) {
    glossary = [
      { term: "Partial<T>", def: "Utility Type care transformă toate proprietățile lui T în câmpuri opționale (?)" },
      { term: "Omit<T, K>", def: "Construiește un tip preluând toate proprietățile lui T și excluzând cheile K." },
      { term: "Pick<T, K>", def: "Construiește un tip preluând strict setul de proprietăți specificat în K." },
      { term: "Record<K, T>", def: "Creează un tip de dicționar unde cheile sunt de tip K și valorile de tip T." }
    ];
    matchingPairs = [
      { left: "Partial<User>", right: "Toate proprietățile devin opționale" },
      { left: "Omit<User, 'password'>", right: "Exclude proprietatea password din tip" },
      { left: "Pick<User, 'id'>", right: "Păstrează doar proprietatea id" },
      { left: "Record<string, number>", right: "Obiect de tip dicționar cu chei string și valori number" }
    ];
    quiz = {
      question: "Ce Utility Type TypeScript exclude o proprietate specificată dintr-o interfață existentă?",
      options: ["Exclude<T, K>", "Omit<T, K>", "Remove<T, K>", "Pick<T, K>"],
      correctIndex: 1
    };
  } else if (ex.id.startsWith('ts-react-3')) {
    glossary = [
      { term: "useState<T>", def: "Hook React pentru starea locală a componentei, tipizată generic." },
      { term: "useEffect", def: "Hook dedicat efectelor secundare (apeluri API, listeneri, subscripții)." },
      { term: "Cleanup Function", def: "Funcție returnată de useEffect pentru a elibera resurse la demontare." },
      { term: "Dependency Array", def: "Lista variabilelor ce determină re-executarea callback-ului useEffect." }
    ];
    matchingPairs = [
      { left: "useState<T | null>(null)", right: "Inițializează state ce poate conține obiectul T sau null" },
      { left: "useEffect(fn, [])", right: "Rulează fn o singură dată, la montarea inițială" },
      { left: "return () => cleanup()", right: "Funcție de eliberare a resurselor la demontarea componentei" },
      { left: "useMemo", right: "Memorează rezultatul unui calcul costisitor între randări" }
    ];
    quiz = {
      question: "Ce indică transmiterea unui array vid ([]) ca al doilea argument la useEffect?",
      options: ["Efectul rulează la fiecare randare", "Efectul nu rulează niciodată", "Efectul rulează o singură dată la montare", "Efectul este asincron"],
      correctIndex: 2
    };
  } else if (ex.id.startsWith('dsa-1')) {
    glossary = [
      { term: "Big-O Notation", def: "Măsură matematică a modului în care timpul sau memoria cresc odată cu mărimea intrării N." },
      { term: "Two Pointers", def: "Tipar algoritmic ce folosește doi indici (stânga/dreapta) pentru a parcurge o structură liniară în O(N)." },
      { term: "Sliding Window", def: "Fereastră dinamică de date ce glisează peste un array pentru a găsi subșiruri optime." },
      { term: "O(log n)", def: "Complexitate logaritmică caracteristică algoritmilor de împărțire repetată (Binary Search)." }
    ];
    matchingPairs = [
      { left: "Two Pointers", right: "Parcurgere simultană din ambele capete în O(N)" },
      { left: "Binary Search", right: "Căutare eficientă în tablou sortat în timp O(log N)" },
      { left: "while (left < right)", right: "Condiția de oprire când pointerii se întâlnesc" },
      { left: "O(1)", right: "Complexitate de timp constantă, independentă de N" }
    ];
    quiz = {
      question: "Care este complexitatea de timp a algoritmului Binary Search într-un tablou sortat de N elemente?",
      options: ["O(N)", "O(N log N)", "O(log N)", "O(1)"],
      correctIndex: 2
    };
  } else if (ex.id.startsWith('dsa-2')) {
    glossary = [
      { term: "Integer Overflow", def: "Depășirea valorii maxime a unui tip întreg la adunarea (left + right)." },
      { term: "left + (right - left) / 2", def: "Formula sigură matematic pentru calcularea mijlocului fără depășire." },
      { term: "Monotonicitate", def: "Proprietatea tablourilor sortate care permite eliminarea a jumătate din spațiul de căutare." },
      { term: "Search Space", def: "Intervalul de indici [left, right] în care elementul căutat se poate afla." }
    ];
    matchingPairs = [
      { left: "left + (right - left) / 2", right: "Calcul sigur al mijlocului fără integer overflow" },
      { left: "left = mid + 1", right: "Restrânge căutarea la jumătatea superioară (dreapta)" },
      { left: "right = mid - 1", right: "Restrânge căutarea la jumătatea inferioară (stânga)" },
      { left: "nums[mid] === target", right: "Elementul căutat a fost identificat cu succes" }
    ];
    quiz = {
      question: "De ce formula `left + (right - left) / 2` este preferată în locul `(left + right) / 2`?",
      options: ["Este mai rapidă pe CPU", "Previne depășirea valorii maxime a întregilor (Integer Overflow)", "Funcționează pe numere flotante", "Returnează automat numere impare"],
      correctIndex: 1
    };
  } else if (ex.id.startsWith('fr-b1') || ex.id.startsWith('fr-c1')) {
    glossary = [
      { term: "Passé Composé", def: "Timpul trecut uzual în franceză, format din auxiliar (avoir/être) + participiu trecut." },
      { term: "Futur Proche", def: "Viitorul apropiat format din prezentul verbului aller + infinitivul verbului de bază." },
      { term: "Conditionnel Présent", def: "Modul folosit pentru exprimarea cerințelor politicoase (Je voudrais...)." },
      { term: "Subjonctif Présent", def: "Mod verbal francez ce exprimă nesiguranță, dorință, necesitate sau emoție subiectivă." }
    ];
    matchingPairs = [
      { left: "J'ai mangé", right: "Am mâncat (Passé Composé cu avoir)" },
      { left: "Il est allé", right: "El a mers (Passé Composé cu être)" },
      { left: "Je voudrais", right: "Aș dori (exprimare politicoasă)" },
      { left: "qu'il vienne", right: "să vină (Subjonctif Présent după expresii de necesitate)" }
    ];
    quiz = {
      question: "Ce auxiliar se folosește în franceză pentru a forma Passé Composé pentru verbul de mișcare 'aller'?",
      options: ["Avoir", "Être", "Faire", "Aller"],
      correctIndex: 1
    };
  } else if (ex.id.startsWith('es-b1') || ex.id.startsWith('es-c1')) {
    glossary = [
      { term: "Verbul Gustar", def: "Construcție spaniolă în care subiectul gramatical este lucrul plăcut (Me gusta viajar)." },
      { term: "Gerundio (-ando, -iendo)", def: "Formă verbală folosită cu 'estar' pentru a descrie acțiuni în desfășurare." },
      { term: "Pretérito Indefinido", def: "Trecutul simplu spaniol folosit pentru acțiuni finalizate la un moment clar (Ayer trabajé)." },
      { term: "Modo Subjuntivo", def: "Mod verbal ce exprimă dorințe, ipoteze, probabilități sau nesiguranță (Quiero que vengas)." }
    ];
    matchingPairs = [
      { left: "Me gusta", right: "Îmi place (construcție cu pronume indirect)" },
      { left: "Estoy trabajando", right: "Lucrez acum (estar + gerundio)" },
      { left: "Ayer trabajé", right: "Ieri am lucrat (pretérito indefinido)" },
      { left: "Quiero que vengas", right: "Vreau să vii (folosire obligatorie de subjuntivo)" }
    ];
    quiz = {
      question: "Care este forma corectă a verbului 'trabajar' la gerunziu în spaniolă?",
      options: ["Trabajado", "Trabajando", "Trabajiente", "Trabajó"],
      correctIndex: 1
    };
  } else if (ex.id.startsWith('cpp-adv')) {
    glossary = [
      { term: "Move Semantics", def: "Transferul resurselor interne dintr-un obiect temporar în altul fără copiere costisitoare." },
      { term: "Rvalue Reference (&&)", def: "Referință la un obiect temporar care poate fi 'golit' de resurse în siguranță." },
      { term: "std::move", def: "Funcție standard ce efectuează un cast necondiționat al unei lvalue la o rvalue reference." },
      { term: "std::lock_guard", def: "Wrapper RAII care blochează un mutex la construcție și îl eliberează garantat la distrugere." }
    ];
    matchingPairs = [
      { left: "std::move(x)", right: "Transformă x într-o rvalue reference pentru mutare" },
      { left: "ClassName(ClassName&&)", right: "Move constructor pentru preluarea resurselor" },
      { left: "noexcept", right: "Garantează că funcția nu aruncă excepții (esențial pentru move)" },
      { left: "std::lock_guard", right: "Gestiune sigură RAII a blocării și deblocării unui mutex" }
    ];
    quiz = {
      question: "Ce face în mod concret funcția `std::move` în C++ modern?",
      options: [
        "Mută fizic octeții în memorie",
        "Efectuează un cast la rvalue reference (T&&)",
        "Șterge obiectul original",
        "Alocă un nou fir de execuție"
      ],
      correctIndex: 1
    };
  } else if (ex.id.startsWith('java-spring')) {
    glossary = [
      { term: "@RestController", def: "Adnotare convenabilă ce combină @Controller și @ResponseBody pentru API-uri REST." },
      { term: "@GetMapping", def: "Adnotare de rutare ce mapează cererile HTTP GET către o metodă specifică." },
      { term: "Dependency Injection", def: "Tipar de arhitectură prin care dependențele sunt injectate de containerul Spring." },
      { term: "ResponseEntity", def: "Wrapper complet ce reprezintă răspunsul HTTP (status code, headers și body)." }
    ];
    matchingPairs = [
      { left: "@RestController", right: "Marchează clasa ca furnizor de endpoint-uri REST JSON" },
      { left: "@GetMapping('/url')", right: "Rutează cererile HTTP GET către metoda adnotată" },
      { left: "@Autowired", right: "Injectează automat dependențele gestionate de contextul Spring" },
      { left: "ResponseEntity<T>", right: "Permite configurarea completă a statusului HTTP și a corpului răspunsului" }
    ];
    quiz = {
      question: "Ce adnotare Spring marchează o clasă drept controller de API REST ce serializează automat răspunsurile în JSON?",
      options: ["@Service", "@Component", "@RestController", "@Repository"],
      correctIndex: 2
    };
  } else if (ex.id.startsWith('cyber-net')) {
    glossary = [
      { term: "TCP Handshake", def: "Secvența în 3 pași (SYN, SYN-ACK, ACK) prin care se inițializează o conexiune sigură TCP." },
      { term: "SYN (Synchronize)", def: "Primul pachet trimis de client ce solicită stabilirea conexiunii și numărul de secvență." },
      { term: "ACK (Acknowledge)", def: "Pachet de confirmare a recepției datelor sau a pachetului SYN primit." },
      { term: "Modelul OSI", def: "Cadrul arhitectural de referință cu 7 straturi pentru comunicațiile de rețea." }
    ];
    matchingPairs = [
      { left: "SYN", right: "Primul pas: clientul solicită conexiunea către server" },
      { left: "SYN-ACK", right: "Pasul doi: serverul confirmă și trimite propriul SYN" },
      { left: "ACK", right: "Pasul trei: clientul confirmă și conexiunea devine ESTABLISHED" },
      { left: "Stratul Transport", right: "Nivelul 4 din modelul OSI unde operează protocoalele TCP și UDP" }
    ];
    quiz = {
      question: "Care este ordinea corectă a pachetelor în cadrul TCP 3-Way Handshake?",
      options: ["ACK, SYN, SYN-ACK", "SYN, SYN-ACK, ACK", "SYN, ACK, DATA", "HELLO, ACCEPT, ACK"],
      correctIndex: 1
    };
  }

  return {
    id: ex.id,
    track: track,
    division: division,
    level: chap.level,
    xp: ex.xp || 35,
    title: exTitle,
    theory: chap.explanation,
    glossary: glossary,
    example: chap.codeExample,
    prompt: ex.prompt,
    acceptedAnswers: [ ex.solution ],
    regexPattern: ex.regex ? ex.regex.source : undefined,
    officialSolution: ex.solution,
    explanation: ex.hint || "Urmează instrucțiunile și modelul prezentat în teoria de mai sus.",
    hint: ex.hint || "Consultă explicația și exemplul de cod din capitol.",
    matchingPairs: matchingPairs,
    quiz: quiz
  };
}

const newLessons = [];
allModules.forEach(mod => {
  mod.chapters.forEach(chap => {
    chap.exercises.forEach((ex, idx) => {
      newLessons.push(enrichExercise(mod, chap, ex, idx));
    });
  });
});

console.log('New synthesized lessons count:', newLessons.length);

const combinedPolyglot = [...part1And2, ...newLessons];
console.log('Total combined polyglot curriculum:', combinedPolyglot.length);

// Write out to curriculum-polyglot.js
const fileContent = 'var NEW_EXPANDED_CURRICULUM = ' + JSON.stringify(combinedPolyglot, null, 2) + ';\n';
fs.writeFileSync('./curriculum-polyglot.js', fileContent, 'utf8');
console.log('Successfully written to curriculum-polyglot.js!');
