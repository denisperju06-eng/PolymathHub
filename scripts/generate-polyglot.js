const fs = require('fs');

global.window = {};
// 1. Part 1
let f1 = fs.readFileSync('/Users/preference/Desktop/gemini-code-1792067335503.js', 'utf8');
f1 += 'O referință C++ este un alias imutabil care trebuie legat de o variabilă la declarare și nu poate fi redirecționat sau setat la nullptr." } } ];';
const startIndex = f1.indexOf('window.NEW_EXPANDED_CURRICULUM = [', 50);
eval(f1.substring(startIndex));
const p1 = window.NEW_EXPANDED_CURRICULUM;

// 2. Part 2
eval(fs.readFileSync('/Users/preference/Desktop/gemini-code-1792067713421.js', 'utf8'));
const p2 = window.NEW_EXPANDED_CURRICULUM_PART2;

const normalized = [];

// Convert Part 1 lessons
p1.forEach(l => {
  const normGlossary = (l.glossary || []).map(g => ({
    term: g.term,
    def: g.def || g.definition
  }));
  const normPairs = (l.matchingPairs || []).map(p => {
    if (Array.isArray(p)) return { left: p[0], right: p[1] };
    return p;
  });

  normalized.push({
    id: l.id,
    track: l.track,
    division: l.division || "Informatică și Programare",
    icon: l.icon || "code",
    level: l.level || "1. Începător",
    xp: l.xp || 30,
    title: l.title,
    theory: l.theory,
    glossary: normGlossary,
    example: l.example,
    prompt: l.prompt,
    caseSensitive: true,
    acceptedAnswers: [l.officialSolution],
    officialSolution: l.officialSolution,
    explanation: l.hint || l.title,
    hint: l.hint,
    matchingPairs: normPairs,
    quiz: l.quiz
  });
});

// Rich data for Part 2 chapters (glossaries, matchingPairs, quizzes)
const part2Extras = {
  "cpp-sys-3": {
    id: "cpp-sys-raii",
    glossary: [
      { term: "RAII", def: "Resource Acquisition Is Initialization: eliberarea resursei este legată de destructorul pe stivă." },
      { term: "Stack", def: "Memorie ultra-rapidă (LIFO) eliberată automat la ieșirea din acolade." },
      { term: "Heap", def: "Memorie dinamică alocată cu new și eliberată obligatoriu cu delete/delete[]." },
      { term: "Rule of Three/Five", def: "Dacă implementezi un destructor, trebuie să definești copy/move constructor și operator=." }
    ],
    matchingPairs: [
      { left: "Stack", right: "Eliberare automată instantanee la final de scope" },
      { left: "Heap", right: "Memorie flexibilă alocată manual la runtime" },
      { left: "RAII", right: "Constructorul alocă, destructorul dezalocă garantat" },
      { left: "delete[] arr;", right: "Eliberează un array alocat pe Heap cu new[]" }
    ],
    quiz: {
      question: "Care este beneficiul principal al principiului RAII în C++?",
      options: [
        "Elimină complet utilizarea compilatorului C++",
        "Garantează eliberarea resurselor chiar dacă apare o excepție în cod",
        "Face programul să ruleze direct în mașina virtuală Java",
        "Dublează viteza ceasului procesorului la rulare"
      ],
      correctIndex: 1,
      explanation: "RAII garantează că destructorii obiectelor locale de pe stivă sunt apelați întotdeauna la ieșirea din scope (stack unwinding), prevenind scurgerile de memorie."
    }
  },
  "cpp-sys-4": {
    glossary: [
      { term: "std::unique_ptr", def: "Smart pointer cu proprietate exclusivă: nu poate fi copiat, doar mutat cu std::move()." },
      { term: "std::shared_ptr", def: "Smart pointer partajat: folosește reference counting și șterge obiectul când contorul ajunge la 0." },
      { term: "std::weak_ptr", def: "Observator non-owning care previne referințele circulare între shared_ptr-uri." },
      { term: "std::make_unique", def: "Funcție helper introdusă în C++14 pentru alocarea sigură a unui unique_ptr." }
    ],
    matchingPairs: [
      { left: "std::unique_ptr", right: "Proprietate unică, zero cost, mutabil doar cu move" },
      { left: "std::shared_ptr", right: "Reference counting thread-safe către aceeași resursă" },
      { left: "std::weak_ptr", right: "Previne referințele ciclice fără a crește use_count" },
      { left: "std::move()", right: "Transferă dreptul de proprietate al resursei" }
    ],
    quiz: {
      question: "Ce se întâmplă dacă încercăm să copiem un obiect de tip std::unique_ptr prin atribuire directă (u2 = u1)?",
      options: [
        "Codul nu se compilează deoarece copy constructor-ul este marcat = delete",
        "Obiectul se clonează automat pe Heap",
        "u1 devine automat nullptr",
        "Contorul de referințe crește la 2"
      ],
      correctIndex: 0,
      explanation: "std::unique_ptr garantează proprietatea exclusivă și interzice copierea; transferul se poate face doar prin mutare cu std::move()."
    }
  },
  "cpp-sys-5": {
    glossary: [
      { term: "Template (Generice)", def: "Șablon de cod evaluat la compilare care generează cod optimizat pentru orice tip de date." },
      { term: "std::vector", def: "Tablou dinamic contiguu în memorie, optimizat pentru cache-ul CPU." },
      { term: "reserve()", def: "Prealocă memorie în vector pentru a elimina realocările costisitoare ulterioare." },
      { term: "emplace_back()", def: "Construiește elementul direct in-place în container fără copii temporare." }
    ],
    matchingPairs: [
      { left: "template <typename T>", right: "Declară o funcție sau clasă generică" },
      { left: "std::vector<T>", right: "Container secvențial cu stocare contiguă" },
      { left: "reserve(N)", right: "Prealocă memorie pentru N elemente fără a mări size-ul" },
      { left: "push_back()", right: "Adaugă un element la finalul vectorului" }
    ],
    quiz: {
      question: "Care este complexitatea de timp pentru accesarea unui element prin index (v[i]) într-un std::vector?",
      options: [
        "O(N) - parcurgere liniară",
        "O(1) - timp constant instantaneu datorită memoriei contigue",
        "O(log N) - căutare binară",
        "O(N^2) - acces pătratic"
      ],
      correctIndex: 1,
      explanation: "Datorită stocării contigue în memoria RAM, accesul la orice index v[i] se face instantaneu în O(1) printr-un simplu calcul de adresă: adresa_baza + i * sizeof(T)."
    }
  },
  "cs-net-1": {
    glossary: [
      { term: "CLR", def: "Common Language Runtime: mașina virtuală .NET care rulează codul intermediar (IL)." },
      { term: "JIT Compiler", def: "Just-In-Time compiler: traduce bytecode-ul IL în cod mașină nativ optimizat." },
      { term: "Value Types", def: "Tipuri stocate direct pe Stack (int, struct, bool, enum)." },
      { term: "Null-coalescing (??)", def: "Operator care returnează operandul stâng dacă nu este null, altfel operandul drept." }
    ],
    matchingPairs: [
      { left: "Value Types", right: "Stocate direct pe Stack (struct, int, bool)" },
      { left: "Reference Types", right: "Instanța pe Heap, referința pe Stack (class, string)" },
      { left: "Operatorul ??", right: "Returnează fallback dacă valoarea din stânga este null" },
      { left: "CLR JIT", right: "Compilează codul IL în instrucțiuni native la runtime" }
    ],
    quiz: {
      question: "Unde este stocată instanța unui obiect de tip 'class' în .NET?",
      options: [
        "Direct pe Stack-ul funcției curente",
        "Pe Managed Heap, iar pe Stack se reține doar adresa de referință",
        "În fișierul temporar de swap al Windows-ului",
        "În memoria ROM a plăcii de bază"
      ],
      correctIndex: 1,
      explanation: "În C#, toate tipurile definite ca 'class' sunt Reference Types: datele lor sunt alocate pe Managed Heap și gestionate de Garbage Collector."
    }
  },
  "cs-net-2": {
    glossary: [
      { term: "virtual", def: "Modificator pe metoda din clasa părinte care autorizează suprascrierea în clase derivate." },
      { term: "override", def: "Modificator obligatoriu în clasa copil pentru a implementa o metodă virtuală sau abstractă." },
      { term: "sealed", def: "Cuvânt cheie care blochează posibilitatea de a mai moșteni clasa respectivă." },
      { term: "base", def: "Cuvânt cheie folosit pentru a apela constructorul sau metodele clasei părinte." }
    ],
    matchingPairs: [
      { left: "virtual", right: "Permite metodei să fie suprascrisă în copii" },
      { left: "override", right: "Furnizează implementarea concretă în clasa derivată" },
      { left: "sealed", right: "Interzice moștenirea clasei de către alte clase" },
      { left: "base()", right: "Apelează constructorul clasei de bază" }
    ],
    quiz: {
      question: "Spre deosebire de Java unde toate metodele sunt virtuale implicit, în C# ce este necesar pentru a suprascrie o metodă?",
      options: [
        "Metoda din părinte trebuie marcată virtual, iar în copil marcată override",
        "Trebuie adăugat doar @Override în clasa copil",
        "Nu se pot suprascrie metode în C#",
        "Trebuie marcată clasa cu static"
      ],
      correctIndex: 0,
      explanation: "În C#, metodele sunt non-virtuale implicit pentru performanță; pentru polimorfism este necesar cuplul 'virtual' în părinte și 'override' în clasa copil."
    }
  },
  "cs-net-3": {
    glossary: [
      { term: "Auto-Property", def: "Proprietate get/set pentru care compilatorul C# generează automat un backing field privat." },
      { term: "private set", def: "Restricționează modificarea proprietății exclusiv la interiorul clasei." },
      { term: "init (C# 9+)", def: "Permite setarea valorii doar la inițializare, devenind read-only după construire." },
      { term: "Record", def: "Tip de referință imutabil cu equality bazată pe valori și sintaxă concisă." }
    ],
    matchingPairs: [
      { left: "{ get; set; }", right: "Proprietate complet accesibilă la citire și scriere" },
      { left: "{ get; private set; }", right: "Citire publică, modificare doar din interiorul clasei" },
      { left: "{ get; init; }", right: "Modificabil doar la instanțiere în constructor/initializer" },
      { left: "record", right: "Tip de date orientat pe imutabilitate și egalitate structurală" }
    ],
    quiz: {
      question: "Ce avantaj oferă modificatorul 'init' introdus în C# 9+ pentru proprietăți?",
      options: [
        "Face proprietatea să fie calculată asincron",
        "Permite setarea valorii în object initializer, dar blochează orice modificare ulterioară (imutabilitate)",
        "Șterge proprietatea din memorie după prima citire",
        "Convertește automat șirurile în majuscule"
      ],
      correctIndex: 1,
      explanation: "Modificatorul 'init' garantează că obiectul poate fi inițializat curat prin sintaxa new Obj { Prop = val }, rămânând complet imutabil pe parcursul vieții sale."
    }
  },
  "cs-net-4": {
    glossary: [
      { term: "Interfață (IInterface)", def: "Contract pur de comportament care definește metode și proprietăți fără implementare." },
      { term: "Dependency Injection", def: "Șablon prin care dependențele sunt furnizate din exterior de containerul IoC." },
      { term: "Scoped", def: "Durată de viață în .NET: o singură instanță creată per cerere HTTP (Request)." },
      { term: "Singleton", def: "Durată de viață în .NET: o unică instanță partajată pe toată durata aplicației." }
    ],
    matchingPairs: [
      { left: "interface", right: "Contract abstract pe care clasele îl implementează" },
      { left: "AddScoped", right: "O instanță per HTTP Request (ideal pentru DbContext)" },
      { left: "AddSingleton", right: "O singură instanță pe întreaga viață a procesului" },
      { left: "AddTransient", right: "O instanță nouă la fiecare injectare individuală" }
    ],
    quiz: {
      question: "Ce durată de viață (lifetime) este recomandată în ASP.NET Core pentru serviciile care lucrează cu baze de date (DbContext)?",
      options: [
        "Singleton - pentru a partaja aceeași conexiune cu toți utilizatorii",
        "Scoped - o instanță nouă pentru fiecare cerere HTTP izolată",
        "Transient - instanțiere la fiecare metodă apelată",
        "Static - reținut permanent în memoria plăcii video"
      ],
      correctIndex: 1,
      explanation: "Scoped este durata de viață standard pentru DbContext deoarece izolează tranzacțiile și starea per utilizator/cerere HTTP, eliberând resursele la finalul requestului."
    }
  },
  "cs-net-5": {
    glossary: [
      { term: "LINQ", def: "Language Integrated Query: sintaxă declarativă uniformă pentru interogarea colecțiilor și bazelor de date." },
      { term: "Where()", def: "Operator LINQ de filtrare pe baza unui predicat boolean." },
      { term: "Select()", def: "Operator LINQ de proiecție / transformare (echivalentul lui map)." },
      { term: "Deferred Execution", def: "Interogarea se execută doar în momentul în care datele sunt iterate sau cerute cu ToList()." }
    ],
    matchingPairs: [
      { left: "Where(x => ...)", right: "Filtrează elementele după o condiție logică" },
      { left: "Select(x => ...)", right: "Proiectează / transformă fiecare element" },
      { left: "OrderBy(x => ...)", right: "Sortează secvența în ordine crescătoare" },
      { left: "ToList()", right: "Execută interogarea și materializează rezultatele în memorie" }
    ],
    quiz: {
      question: "Ce înseamnă că o interogare LINQ are 'Deferred Execution' (Execuție Amânată)?",
      options: [
        "Interogarea este amânată și aruncă eroare după 30 de secunde",
        "Codul de filtrare nu rulează în momentul definirii, ci doar când este iterat sau apelat ToList()",
        "Interogarea rulează exclusiv pe un thread secundar de fundal",
        "Rezultatele sunt șterse automat după 5 minute"
      ],
      correctIndex: 1,
      explanation: "LINQ construiește arborele de expresie sau iteratorul fără a procesa datele imediat; calculul are loc doar în momentul iterației efective (de exemplu la un foreach sau ToList())."
    }
  },
  "py-core-1": {
    glossary: [
      { term: "F-Strings", def: "Formatted String Literals (f'...'): cea mai rapidă metodă de interpolare a șirurilor în Python." },
      { term: "Expresii Inline", def: "Posibilitatea de a rula cod Python direct în interiorul acoladelor {expr} dintr-un f-string." },
      { term: "Format Specifier", def: "Instrucțiune de formatare numerică (ex: :.2f pentru 2 zecimale, :, pentru separatori de mii)." },
      { term: "Debug f'{var=}'", def: "Sintaxă introdusă în Python 3.8 care afișează automat numele variabilei și valoarea ei." }
    ],
    matchingPairs: [
      { left: "f'Salut {nume}'", right: "Interpolează direct variabila nume în șir" },
      { left: "f'{pret:.2f}'", right: "Formatează numărul cu exact două zecimale" },
      { left: "f'{x=}'", right: "Afișează x=valoare pentru debugging rapid" },
      { left: "str.format()", right: "Metoda anterioară de formatare, mai lentă decât f-strings" }
    ],
    quiz: {
      question: "Care dintre următoarele variante este un f-string valid în Python 3.6+?",
      options: [
        "$\"Total: {price}\"",
        "f\"Total: {price * 1.19:.2f}\"",
        "format(\"Total: %d\", price)",
        "@string(\"Total: {price}\")"
      ],
      correctIndex: 1,
      explanation: "F-strings sunt prefixate cu litera 'f' sau 'F' și permit expresii matematice și formatare numerică direct în acolade: f'Total: {price * 1.19:.2f}'."
    }
  },
  "py-core-2": {
    glossary: [
      { term: "List Comprehension", def: "Sintaxă concisă [expr for x in list if cond] pentru crearea și filtrarea rapidă a listelor." },
      { term: "Generator Expression", def: "Expresie cu paranteze rotunde (expr for x in iter) care evaluează elementele lazy în O(1) RAM." },
      { term: "Lazy Evaluation", def: "Calcularea fiecărui element la cerere pe măsură ce este parcurs, fără a încărca totul în memorie." },
      { term: "CPython Bytecode", def: "List comprehensions rulează optimizat la nivel de instrucțiuni C, fiind mai rapide decât for-append." }
    ],
    matchingPairs: [
      { left: "[x*2 for x in nums]", right: "Dublează fiecare element din listă" },
      { left: "[x for x in n if x > 0]", right: "Filtrează doar numerele pozitive" },
      { left: "(x for x in nums)", right: "Generator expression evaluat lazy în O(1) memorie" },
      { left: "sum(x for x in r)", right: "Calculează suma direct din generator fără alocare de listă" }
    ],
    quiz: {
      question: "Ce diferență fundamentală există între '[x for x in range(1000000)]' și '(x for x in range(1000000))'?",
      options: [
        "Nu există nicio diferență, ambele creează liste identice în memorie",
        "Varianta cu paranteze pătrate alocă o listă completă de 1 milion de elemente în RAM, pe când parantezele rotunde creează un generator lazy în O(1) RAM",
        "Parantezele rotunde aruncă eroare de sintaxă în Python 3",
        "Parantezele pătrate pot fi folosite doar pentru șiruri de caractere"
      ],
      correctIndex: 1,
      explanation: "List comprehension generează lista instantaneu consumând zeci de megabytes, în timp ce generator expression produce valorile pe rând (la cerere) cu consum infim de memorie."
    }
  },
  "py-core-3": {
    glossary: [
      { term: "dict (Dicționar)", def: "Tabel de dispersie (Hash Map) cheie-valoare cu căutare, inserare și ștergere în O(1) în medie." },
      { term: "dict.get(key, default)", def: "Accesare sigură a valorii care returnează valoarea implicită în loc de KeyError dacă cheia lipsește." },
      { term: "dict.items()", def: "Metodă care returnează o vedere iterabilă a perechilor (cheie, valoare)." },
      { term: "Dict Comprehension", def: "Sintaxă {k: v for ...} pentru construirea dinamică a dicționarelor dintr-un iterabil." }
    ],
    matchingPairs: [
      { left: "d.get('role', 'user')", right: "Citește fără KeyError, returnează 'user' ca fallback" },
      { left: "for k, v in d.items():", right: "Iterează simultan peste cheie și valoare" },
      { left: "d1 | d2", right: "Operatorul de union/merge pentru dicționare în Python 3.9+" },
      { left: "{w: len(w) for w in l}", right: "Dict comprehension care mapează cuvintele la lungimea lor" }
    ],
    quiz: {
      question: "Ce se întâmplă dacă accesăm o cheie inexistentă printr-un index direct 'user[\"email\"]' față de 'user.get(\"email\")'?",
      options: [
        "user['email'] returnează None, iar user.get() aruncă eroare",
        "user['email'] aruncă o excepție KeyError, pe când user.get('email') returnează None în siguranță",
        "Ambele returnează șirul gol \"\"",
        "Python creează automat cheia respectivă cu valoarea 0"
      ],
      correctIndex: 1,
      explanation: "Accesarea directă cu paranteze pătrate aruncă KeyError dacă cheia lipsește. Metoda .get() este modul defensiv și pythonic de a citi chei opționale."
    }
  },
  "py-core-4": {
    glossary: [
      { term: "*args", def: "Colectează orice număr de argumente poziționale suplimentare într-un tuple." },
      { term: "**kwargs", def: "Colectează orice număr de argumente numite (cheie=valoare) într-un dicționar." },
      { term: "Unpacking (*list, **dict)", def: "Operator de despachetare care expandează colecții în argumente individuale la apelul funcției." },
      { term: "Keyword-Only Args", def: "Parametri plasați după * în antet care pot fi transmiși exclusiv specificând numele lor." }
    ],
    matchingPairs: [
      { left: "def fn(*args):", right: "Colectează argumentele poziționale într-un tuplu" },
      { left: "def fn(**kwargs):", right: "Colectează argumentele numite într-un dicționar" },
      { left: "fn(*my_list)", right: "Despachetează lista în argumente poziționale separate" },
      { left: "{**d1, **d2}", right: "Fuzionează două dicționare prin despachetare" }
    ],
    quiz: {
      question: "Care este tipul de date al variabilei 'kwargs' în interiorul unei funcții definite ca 'def save_user(**kwargs):'?",
      options: [
        "Listă standard (list)",
        "Dicționar nativ (dict)",
        "Tuplu imutabil (tuple)",
        "Șir de caractere JSON"
      ],
      correctIndex: 1,
      explanation: "Operatorul dublu asterisc (**kwargs) împachetează toți parametrii numiți transmiși la apel într-un dicționar standard Python."
    }
  },
  "fr-a1-1": {
    glossary: [
      { term: "Être", def: "Verbul 'a fi': je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont." },
      { term: "Avoir", def: "Verbul 'a avea': j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont." },
      { term: "J'ai ... ans", def: "În franceză vârsta se exprimă obligatoriu cu verbul AVOIR (nu cu être)." },
      { term: "Avoir faim/soif", def: "Senzațiile corporale (foame, sete, frig, cald) se exprimă cu verbul AVOIR." }
    ],
    matchingPairs: [
      { left: "Je suis", right: "Eu sunt (verbul être)" },
      { left: "J'ai", right: "Eu am (verbul avoir)" },
      { left: "Nous sommes", right: "Noi suntem" },
      { left: "Ils ont", right: "Ei au (pronunțat cu legătură 'z')" }
    ],
    quiz: {
      question: "Cum se spune corect în limba franceză 'Am 25 de ani'?",
      options: [
        "Je suis 25 ans",
        "J'ai 25 ans",
        "Je fais 25 ans",
        "Moi être 25 ans"
      ],
      correctIndex: 1,
      explanation: "În limba franceză, vârsta se exprimă exclusiv cu verbul 'avoir' (a avea): 'J'ai 25 ans' (literal: Am 25 de ani)."
    }
  },
  "fr-a1-2": {
    glossary: [
      { term: "Bonjour", def: "Bună ziua / Bună dimineața (salut universal formal și politicos)." },
      { term: "Je m'appelle", def: "Mă numesc (conjugarea verbului reflexiv s'appeler la persoana I)." },
      { term: "Comment allez-vous ?", def: "Ce mai faceți? / Cum vă merge? (adresare politicoasă formală)." },
      { term: "Enchanté(e)", def: "Încântat(ă) de cunoștință." }
    ],
    matchingPairs: [
      { left: "Bonjour", right: "Bună ziua" },
      { left: "Au revoir", right: "La revedere" },
      { left: "Je m'appelle", right: "Mă numesc" },
      { left: "Merci beaucoup", right: "Mulțumesc foarte mult" }
    ],
    quiz: {
      question: "Care este formula politicoasă de salut la plecare în limba franceză?",
      options: [
        "Bonjour !",
        "Au revoir !",
        "Enchanté !",
        "S'il vous plaît !"
      ],
      correctIndex: 1,
      explanation: "'Au revoir !' înseamnă 'La revedere !' și se folosește standard la despărțire."
    }
  },
  "fr-a1-3": {
    glossary: [
      { term: "un / une", def: "Articole nehotărâte: un pentru masculin singular, une pentru feminin singular." },
      { term: "le / la / l'", def: "Articole hotărâte: le (masculin), la (feminin), l' (înainte de vocală sau h mut)." },
      { term: "ne ... pas", def: "Structura standard de negație care încadrează verbul conjugat (ex: Je ne sais pas)." },
      { term: "n' (eliziune)", def: "Forma scurtată a particulei 'ne' plasată înaintea verbelor care încep cu o vocală." }
    ],
    matchingPairs: [
      { left: "un livre", right: "o carte (masculin singular)" },
      { left: "une maison", right: "o casă (feminin singular)" },
      { left: "l'ordinateur", right: "calculatorul (articol cu eliziune l')" },
      { left: "ne ... pas", right: "negația care încadrează verbul conjugat" }
    ],
    quiz: {
      question: "Cum transformăm corect propoziția 'Il aime le café' la forma negativă?",
      options: [
        "Il pas aime le café",
        "Il n'aime pas le café",
        "Il ne aime pas le café",
        "Il non aime le café"
      ],
      correctIndex: 1,
      explanation: "Deoarece verbul 'aime' începe cu o vocală, particula 'ne' devine 'n' prin eliziune: 'Il n'aime pas le café'."
    }
  },
  "es-a1-1": {
    glossary: [
      { term: "SER", def: "Verbul 'a fi' folosit pentru identitate, naționalitate, profesie și trăsături permanente." },
      { term: "ESTAR", def: "Verbul 'a fi' folosit pentru locație fizică, stări emoționale și condiții temporare." },
      { term: "Soy de ...", def: "Construcție cu verbul SER pentru a exprima țara sau orașul de origine." },
      { term: "Estoy en ...", def: "Construcție cu verbul ESTAR pentru a exprima poziția sau locația actuală." }
    ],
    matchingPairs: [
      { left: "Yo soy", right: "Eu sunt (verbul SER - identitate permanentă)" },
      { left: "Yo estoy", right: "Eu sunt (verbul ESTAR - locație sau stare temporară)" },
      { left: "Soy programador", right: "Sunt programator (profesie -> SER)" },
      { left: "Estoy cansado", right: "Sunt obosit (stare fizică temporară -> ESTAR)" }
    ],
    quiz: {
      question: "Ce verb 'a fi' trebuie folosit în spaniolă pentru a spune 'Sunt în birou' (locație fizică)?",
      options: [
        "SER: Soy en la oficina",
        "ESTAR: Estoy en la oficina",
        "TENER: Tengo en la oficina",
        "HABER: Hay en la oficina"
      ],
      correctIndex: 1,
      explanation: "Pentru orice localizare spațială (chiar și a clădirilor fixe), spaniola impune exclusiv verbul ESTAR: 'Estoy en la oficina'."
    }
  },
  "es-a1-2": {
    glossary: [
      { term: "Verbe în -AR", def: "Grupa I de verbe: hablar, trabajar (hablo, hablas, habla, hablamos, habláis, hablan)." },
      { term: "Verbe în -ER", def: "Grupa II de verbe: comer, aprender (como, comes, come, comemos, coméis, comen)." },
      { term: "Verbe în -IR", def: "Grupa III de verbe: vivir, escribir (vivo, vives, vive, vivimos, vivís, viven)." },
      { term: "Tener que + inf", def: "Structură verbală care exprimă obligația personală ('trebuie să...')." }
    ],
    matchingPairs: [
      { left: "Yo hablo", right: "Eu vorbesc (verbul hablar)" },
      { left: "Nosotros vivimos", right: "Noi trăim / locuim (verbul vivir)" },
      { left: "Yo tengo", right: "Eu am (verbul tener la persoana I)" },
      { left: "Tengo que estudiar", right: "Trebuie să studiez (obligație)" }
    ],
    quiz: {
      question: "Care este forma corectă de persoana I singular la prezent pentru verbul neregulat 'tener' (a avea)?",
      options: [
        "Yo teno",
        "Yo tengo",
        "Yo tieno",
        "Yo tenez"
      ],
      correctIndex: 1,
      explanation: "Verbul 'tener' are persoana I neregulată: 'Yo tengo' (urmat de tú tienes, él tiene etc.)."
    }
  },
  "es-a1-3": {
    glossary: [
      { term: "¡Hola!", def: "Bună! / Salut! (salut universal colocvial și prietenos)." },
      { term: "Buenos días", def: "Bună dimineața / Bună ziua (folosit până la masa de prânz)." },
      { term: "Por favor", def: "Vă rog / Te rog." },
      { term: "La cuenta, por favor", def: "Formula standard de a cere nota de plată la restaurant." }
    ],
    matchingPairs: [
      { left: "¡Hola! ¿Qué tal?", right: "Salut! Cum merge?" },
      { left: "Muchas gracias", right: "Mulțumesc foarte mult" },
      { left: "De nada", right: "Cu plăcere / Pentru nimic" },
      { left: "¡Hasta luego!", right: "Pe mai târziu!" }
    ],
    quiz: {
      question: "Cum răspunzi politicos în spaniolă când cineva îți mulțumește spunând '¡Muchas gracias!'?",
      options: [
        "¡Por favor!",
        "¡De nada!",
        "¡Buenos días!",
        "¡Hasta mañana!"
      ],
      correctIndex: 1,
      explanation: "'¡De nada!' înseamnă 'Pentru nimic / Cu plăcere' și este replica standard după 'gracias'."
    }
  }
};

// Convert Part 2 tracks and chapters
p2.forEach(track => {
  track.chapters.forEach(chap => {
    const extra = part2Extras[chap.id] || {};
    const primaryEx = (chap.exercises && chap.exercises[0]) || {
      prompt: "Exercițiu practic",
      hint: "Scrie soluția",
      regex: /.+/,
      solution: "code"
    };

    const lessonId = extra.id || chap.id;

    normalized.push({
      id: lessonId,
      track: track.title,
      division: track.category === "programming" ? "Informatică și Programare" : "Limbi Străine",
      icon: track.icon || "code",
      level: chap.level || "1. Începător",
      xp: primaryEx.xp || 35,
      title: chap.title,
      theory: chap.explanation,
      glossary: extra.glossary || [
        { term: "Concept de Bază", def: "Explicația teoretică fundamentală a capitolului." },
        { term: "Sintaxă Modernă", def: "Regulile de scriere și structurare conform standardelor actuale." },
        { term: "Best Practices", def: "Recomandări de producție pentru securitate și performanță." },
        { term: "Erori Comune", def: "Capcane frecvente și modul de depanare rapidă a lor." }
      ],
      example: chap.codeExample || "",
      prompt: primaryEx.prompt,
      caseSensitive: track.category === "programming",
      acceptedAnswers: [primaryEx.solution],
      officialSolution: primaryEx.solution,
      explanation: primaryEx.hint || chap.title,
      hint: primaryEx.hint,
      matchingPairs: extra.matchingPairs || [
        { left: "Element 1", right: "Descriere corespunzătoare 1" },
        { left: "Element 2", right: "Descriere corespunzătoare 2" },
        { left: "Element 3", right: "Descriere corespunzătoare 3" },
        { left: "Element 4", right: "Descriere corespunzătoare 4" }
      ],
      quiz: extra.quiz || {
        question: `Care este rolul principal al conceptului din ${chap.title}?`,
        options: [
          "Optimizarea și structurarea corectă a codului",
          "Creșterea consumului de memorie",
          "Oprirea execuției aplicației",
          "Dezactivarea compilatorului"
        ],
        correctIndex: 0,
        explanation: "Structurile moderne sunt concepute pentru siguranță, lizibilitate și eficiență."
      }
    });
  });
});

console.log('Total normalized new lessons:', normalized.length);

const outputCode = 'const NEW_EXPANDED_CURRICULUM = ' + JSON.stringify(normalized, (k, v) => {
  if (v instanceof RegExp) {
    return v.toString();
  }
  return v;
}, 2) + ';\n';

// Replace regex strings with actual RegExp in output or parse properly
fs.writeFileSync('curriculum-polyglot.js', outputCode, 'utf8');
console.log('Written curriculum-polyglot.js successfully!');
