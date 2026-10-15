# -*- coding: utf-8 -*-
"""
Generator for C# & .NET Core mega curriculum expansion (18 lessons).
Covers Beginner to Architect levels.
"""

def get_csharp_lessons():
    return [
        {
            "id": "cs-new-1",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "1. Începător",
            "xp": 30,
            "title": "Capitolul 1: Sintaxă C# 12 & Top-Level Statements",
            "theory": """
<p>C# este un limbaj orientat pe obiecte, cu tipizare statică puternică, compilat în CIL (Common Intermediate Language) și rulat de mașina virtuală CLR (Common Language Runtime).</p>
<h4>1. Top-Level Statements</h4>
<p>În versiunile moderne de C#, programele simple nu mai necesită clase <code>Program</code> sau metode <code>static void Main</code> explicite; instrucțiunile pot fi scrise direct la nivelul superior al fișierului.</p>
<h4>2. Tipuri de Valoare vs Tipuri de Referință</h4>
<p>Tipurile de valoare (<code>int</code>, <code>double</code>, <code>bool</code>, <code>struct</code>) sunt stocate pe <em>Stack</em>. Tipurile de referință (<code>string</code>, <code>class</code>, <code>object</code>) sunt alocate pe <em>Heap</em>, iar pe Stack se reține doar pointerul către adresa din memorie.</p>
""",
            "glossary": [
                {"term": "CLR (Common Language Runtime)", "def": "Mașina virtuală din .NET care gestionează execuția, securitatea și memoria (Garbage Collection)."},
                {"term": "Top-Level Statements", "def": "Caracteristică C# ce permite scrierea codului de pornire fără boilerplate-ul clasei Program."},
                {"term": "Value Type (Struct)", "def": "Tip stocat direct în cadrul cadrului de pe Stack cu alocare și eliberare instantanee."},
                {"term": "Reference Type (Class)", "def": "Tip alocat în memoria Heap, a cărui referință este administrată de Garbage Collector."}
            ],
            "matchingPairs": [
                {"left": "int, double, bool", "right": "Tipuri de valoare alocate pe Stack"},
                {"left": "string, class, object", "right": "Tipuri de referință alocate pe Heap"},
                {"left": "Console.WriteLine()", "right": "Afișare în consola standard a sistemului"},
                {"left": "CLR", "right": "Mașina de execuție a bytecode-ului .NET"}
            ],
            "quiz": {
                "question": "Unde este stocată valoarea unei variabile de tip primitiv 'int x = 10;' declarată local într-o metodă C#?",
                "options": [
                    "Pe Stack, direct în cadrul de apel (stack frame) al metodei curente.",
                    "În memoria Heap prin alocare dinamică cu pointer C++.",
                    "În registrul procesorului fără a trece prin memorie RAM.",
                    "Pe hard disk într-un fișier temporar al CLR-ului."
                ],
                "correctIndex": 0,
                "explanation": "Variabilele locale de tip valoare (primitive precum int, double, struct) sunt alocate pe Stack și sunt eliberate automat la ieșirea din metodă."
            },
            "task": "Afișează stringul 'Hello, Polymath!' în consolă folosind 'Console.WriteLine'.",
            "starterCode": "// Folosește Console.WriteLine\n",
            "expectedOutputPattern": "Console\\.WriteLine\\([\"']Hello,\\s*Polymath![\"']\\);",
            "hint": "Scrie Console.WriteLine(\"Hello, Polymath!\");"
        },
        {
            "id": "cs-new-2",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "1. Începător",
            "xp": 35,
            "title": "Capitolul 2: Parametri 'ref', 'out' și 'in' în Metode C#",
            "theory": """
<p>În mod implicit, tipurile de valoare sunt transmise prin copiere (by value). C# oferă modificatori expliciți pentru a transmite referința directă a locației din memorie.</p>
<h4>1. Modificatorul 'ref' vs 'out'</h4>
<p><code>ref</code> impune ca variabila să fie inițializată ÎNAINTE de a fi transmisă metodei. În contrast, <code>out</code> permite transmiterea unei variabile neinițializate, garantând că metoda o va inițializa înainte de returnare (util pentru pattern-uri de tip <code>int.TryParse</code>).</p>
<h4>2. Modificatorul 'in' (Read-Only By Reference)</h4>
<p><code>in</code> transmite structuri mari prin referință pentru a evita costul copierii pe Stack, interzicând totodată metodei apelate să modifice valoarea.</p>
""",
            "glossary": [
                {"term": "ref", "def": "Transmite adresa variabilei; necesită ca variabila să aibă deja o valoare asignată."},
                {"term": "out", "def": "Transmite o variabilă prin referință; metoda este obligată să-i asigneze o valoare."},
                {"term": "in", "def": "Transmite referința în mod read-only, prevenind alocările și modificările nedorite."},
                {"term": "int.TryParse()", "def": "Pattern canonic ce returnează bool și populează rezultatul printr-un parametru 'out'."}
            ],
            "matchingPairs": [
                {"left": "int.TryParse(s, out int n)", "right": "Parsează textul și setează valoarea prin out"},
                {"left": "void Swap(ref int a, ref int b)", "right": "Modifică variabilele originale prin referință"},
                {"left": "void Inspect(in BigStruct s)", "right": "Transmite prin referință fără drept de scriere"},
                {"left": "params int[] values", "right": "Număr variabil de argumente de același tip"}
            ],
            "quiz": {
                "question": "Care este diferența esențială între modificatorii 'ref' și 'out' în C#?",
                "options": [
                    "Variabila transmisă prin 'ref' trebuie inițializată înainte de apel, pe când la 'out' este inițializată în interiorul metodei.",
                    "'out' poate fi folosit doar cu șiruri de caractere, iar 'ref' doar cu numere întregi.",
                    "'ref' alocă memorie pe Heap, iar 'out' șterge variabila din memorie.",
                    "Nu există nicio diferență tehnică, sunt sinonime absolute."
                ],
                "correctIndex": 0,
                "explanation": "La 'ref', variabila trebuie să aibă o valoare înainte de apel. La 'out', compilatorul garantează că metoda îi va atribui o valoare înainte de finalizare."
            },
            "task": "Apelează metoda 'int.TryParse' pe stringul 'input' salvând rezultatul în 'out int result'.",
            "starterCode": "string input = \"42\";\nbool success = ",
            "expectedOutputPattern": "success\\s*=\\s*int\\.TryParse\\(input,\\s*out\\s+int\\s+result\\);",
            "hint": "Scrie success = int.TryParse(input, out int result);"
        },
        {
            "id": "cs-new-3",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "2. Junior",
            "xp": 40,
            "title": "Capitolul 3: POO: Moștenire, 'virtual', 'override' și 'sealed'",
            "theory": """
<p>În C#, polimorfismul este explicit: o metodă din clasa părinte NU este polimorfică decât dacă este marcată cu <code>virtual</code> sau <code>abstract</code>.</p>
<h4>1. Suprascrierea cu 'override'</h4>
<p>O subclasă trebuie să folosească explicit cuvântul <code>override</code> pentru a înlocui implementarea unei metode virtuale.</p>
<h4>2. Cuvântul Cheie 'sealed'</h4>
<p>Aplicat pe o clasă (<code>sealed class FinalService</code>), previne moștenirea acesteia. Aplicat pe o metodă <code>override</code>, interzice subclaselor ulterioare să o mai suprascrie, permițând optimizări agresive de devirtualizare în JIT.</p>
""",
            "glossary": [
                {"term": "virtual", "def": "Specifică că o metodă poate fi suprascrisă într-o clasă derivată printr-o tabelă vtable."},
                {"term": "override", "def": "Furnizează o implementare concretă nouă pentru o metodă virtuală sau abstractă."},
                {"term": "sealed", "def": "Interzice moștenirea unei clase sau suprascrierea suplimentară a unei metode."},
                {"term": "Devirtualizare JIT", "def": "Optimizare a runtime-ului .NET prin care apelurile virtuale sigilate sunt transformate în apeluri directe rapide."}
            ],
            "matchingPairs": [
                {"left": "public virtual void Draw()", "right": "Metodă deschisă pentru polimorfism"},
                {"left": "public override void Draw()", "right": "Suprascriere a metodei din clasa părinte"},
                {"left": "public sealed class CoreEngine", "right": "Clasă din care este interzisă moștenirea"},
                {"left": "base.Execute()", "right": "Invocă implementarea din clasa părinte"}
            ],
            "quiz": {
                "question": "Ce se întâmplă dacă o clasă copil definește o metodă cu același nume ca o metodă din părinte, dar omite cuvântul cheie 'override'?",
                "options": [
                    "Metoda ascunde metoda părintelui (hiding / warning de tip 'new'), rupând comportamentul polimorfic.",
                    "Compilatorul C# blochează compilarea cu o eroare fatală.",
                    "Metoda este ștearsă automat din memorie de către CLR.",
                    "Clasa copil moștenește ambele metode și le execută simultan."
                ],
                "correctIndex": 0,
                "explanation": "Fără 'override', metoda doar ascunde (shadows) metoda părintelui, iar apelurile prin referința părintelui vor executa în continuare codul din clasa de bază."
            },
            "task": "Declară o metodă publică 'override void Speak()' care apelează 'Console.WriteLine(\"Bark\");'.",
            "starterCode": "public class Dog : Animal {\n    // Suprascrie Speak\n",
            "expectedOutputPattern": "public\\s+override\\s+void\\s+Speak\\(\\)\\s*\\{\\s*Console\\.WriteLine\\([\"']Bark[\"']\\);\\s*\\}",
            "hint": "Scrie public override void Speak() { Console.WriteLine(\"Bark\"); }"
        },
        {
            "id": "cs-new-4",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "2. Junior",
            "xp": 40,
            "title": "Capitolul 4: Nullable Reference Types & Operatori de Siguranță",
            "theory": """
<p>Pentru a eradica celebra eroare <em>NullReferenceException</em> (inventată de Tony Hoare drept 'The Billion Dollar Mistake'), C# 8+ introduce <strong>Nullable Reference Types (NRT)</strong> activate prin <code>#nullable enable</code>.</p>
<h4>1. Sintaxa 'Type?'</h4>
<p>O referință <code>string s</code> nu poate fi niciodată null; dacă dorim să permitem valoarea null, trebuie să o declarăm explicit ca <code>string? maybeNull</code>.</p>
<h4>2. Operatori: '??', '??=' și '?.'</h4>
<p>Operatorul null-conditional (<code>user?.Address?.City</code>) scurtcircuitează dacă o verigă este null. Operatorul null-coalescing (<code>val ?? defaultVal</code>) furnizează o alternativă, iar <code>val ??= initVal</code> atribuie valoarea doar dacă variabila este null.</p>
""",
            "glossary": [
                {"term": "Nullable Reference Types", "def": "Sistem de verificare statică la compilare ce previne asignarea valorii null pe referințe nespecificate."},
                {"term": "Null-Conditional (?.)", "def": "Operator ce returnează null în loc să arunce NullReferenceException dacă ținta este null."},
                {"term": "Null-Coalescing (??)", "def": "Operator binar ce returnează operandul stâng dacă nu este null, altfel pe cel drept."},
                {"term": "Null-Forgiving (!)", "def": "Operator postfixat ce indică compilatorului că o expresie nu este null (asumpție asumată de dezvoltator)."}
            ],
            "matchingPairs": [
                {"left": "user?.Profile?.Bio", "right": "Acces înlănțuit protejat împotriva NullReference"},
                {"left": "name ?? \"Necunoscut\"", "right": "Valoare fallback dacă name este null"},
                {"left": "cache ??= new Dictionary()", "right": "Inițializare leneșă doar dacă variabila este null"},
                {"left": "string? email", "right": "Variabilă declarată explicit ca putând fi null"}
            ],
            "quiz": {
                "question": "Ce face expresia 'var name = user?.Name ?? \"Anonim\";'?",
                "options": [
                    "Dacă user sau user.Name este null, variabila 'name' primește valoarea 'Anonim'.",
                    "Aruncă o excepție dacă utilizatorul nu este autentificat în baza de date.",
                    "Setează user.Name la valoarea 'Anonim' pe serverul de producție.",
                    "Șterge obiectul user din memoria RAM."
                ],
                "correctIndex": 0,
                "explanation": "Operatorul ?. previne aruncarea erorii dacă user este null, iar ?? atribuie valoarea de rezervă 'Anonim' dacă rezultatul din stânga este null."
            },
            "task": "Atribuie variabilei 'displayName' valoarea 'user?.Name' sau fallback-ul '\"Guest\"' folosind operatorul '??'.",
            "starterCode": "string displayName = ",
            "expectedOutputPattern": "displayName\\s*=\\s*user\\?\\.Name\\s*\\?\\?\\s*[\"']Guest[\"'];",
            "hint": "Scrie displayName = user?.Name ?? \"Guest\";"
        },
        {
            "id": "cs-new-5",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "3. Middle",
            "xp": 45,
            "title": "Capitolul 5: Proprietăți Moderne: '{ get; init; }' și 'record'",
            "theory": """
<p>Imutabilitatea este cheia scrierii de sisteme concurente sigure. C# 9+ a introdus <strong>init-only setters</strong> și tipul <strong>record</strong>.</p>
<h4>1. Proprietăți 'init'</h4>
<p>Sintaxa <code>public string Id { get; init; }</code> permite setarea valorii DOAR la construirea obiectului (în constructor sau object initializer), devenind complet read-only după aceea.</p>
<h4>2. Tipul 'record' & Non-Destructive Mutation</h4>
<p>Un record (<code>public record Person(string Name, int Age);</code>) oferă automat egalitate pe bază de valori (Value Equality), reprezentare textuală formatată și mutație non-distructivă prin expresia <code>with</code>: <code>var adult = child with { Age = 18 };</code>.</p>
""",
            "glossary": [
                {"term": "init-only setter", "def": "Proprietate ce poate fi modificată doar în timpul instanțierii obiectului."},
                {"term": "record", "def": "Tip de referință cu egalitate structurală bazată pe valori și generare automată de metode boilerplate."},
                {"term": "with expression", "def": "Sintaxă de clonare a unui record cu modificarea selectivă a anumitor proprietăți."},
                {"term": "Value Equality", "def": "Două obiecte diferite în Heap sunt considerate egale dacă toate proprietățile lor au aceleași valori."}
            ],
            "matchingPairs": [
                {"left": "public record User(int Id)", "right": "Creează un record imutabil cu proprietăți automate"},
                {"left": "public int Age { get; init; }", "right": "Proprietate mutabilă doar la instanțiere"},
                {"left": "var updated = p with { Age = 20 }", "right": "Clonare superficială cu modificare non-distructivă"},
                {"left": "record struct Point(int X, int Y)", "right": "Record stocat pe Stack ca tip de valoare"}
            ],
            "quiz": {
                "question": "Ce se întâmplă dacă compari două instanțe separate de tip 'record' care au exact aceleași valori în câmpuri folosind operatorul '=='?",
                "options": [
                    "Operatorul returnează 'true' deoarece record-urile implementează egalitate structurală bazată pe valori.",
                    "Returnează 'false' deoarece sunt alocate la adrese diferite în memoria Heap.",
                    "Compilatorul C# refuză compilarea cerând implementarea manuală a metodei Equals.",
                    "Se produce o excepție de tip InvalidOperationException."
                ],
                "correctIndex": 0,
                "explanation": "Spre deosebire de clasele normale care compară adresele de memorie (referințele), record-urile compară automat valorile proprietăților lor."
            },
            "task": "Declară un record de o singură linie numit 'Customer' cu proprietățile 'string Name' și 'string Email'.",
            "starterCode": "// Declară record Customer\n",
            "expectedOutputPattern": "public\\s+record\\s+Customer\\(string\\s+Name,\\s*string\\s+Email\\);",
            "hint": "Scrie: public record Customer(string Name, string Email);"
        },
        {
            "id": "cs-new-6",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "3. Middle",
            "xp": 45,
            "title": "Capitolul 6: Delegați, 'Func<T>', 'Action<T>' & Expresii Lambda",
            "theory": """
<p>Un delegat (<code>delegate</code>) este un pointer de funcție sigur din punct de vedere al tipurilor (type-safe), capabil să rețină referințe către metode statice sau de instanță.</p>
<h4>1. Func și Action</h4>
<p>În loc să definim delegați personalizați, .NET oferă tipurile generice standard: <code>Action<T1, T2></code> pentru metode care returnează <code>void</code>, și <code>Func<T1, TResult></code> unde ultimul parametru generic este întotdeauna tipul returnat.</p>
<h4>2. Expresii Lambda</h4>
<p>Sintaxa cu săgeată <code>(x, y) => x + y</code> construiește funcții anonime concise care pot captura variabile din scope-ul părinte (closures).</p>
""",
            "glossary": [
                {"term": "Action<T>", "def": "Delegat generic standard care execută o operație fără a returna vreo valoare (void)."},
                {"term": "Func<T, TResult>", "def": "Delegat generic standard care acceptă parametri și returnează obligatoriu o valoare de tipul TResult."},
                {"term": "Lambda Expression", "def": "Sintaxă compactă (params) => body pentru declararea funcțiilor anonime inline."},
                {"term": "Predicate<T>", "def": "Delegat echivalent cu Func<T, bool>, utilizat frecvent în operațiuni de filtrare."}
            ],
            "matchingPairs": [
                {"left": "Func<int, int, int>", "right": "Primește doi întregi și returnează un întreg"},
                {"left": "Action<string>", "right": "Primește un string și returnează void"},
                {"left": "Predicate<int>", "right": "Primește un întreg și returnează bool"},
                {"left": "(a, b) => a * b", "right": "Expresie lambda ce multiplică două valori"}
            ],
            "quiz": {
                "question": "Care este semnătura delegatului 'Func<string, int>'?",
                "options": [
                    "O metodă care primește un argument de tip string și returnează un int.",
                    "O metodă care primește un argument de tip int și returnează un string.",
                    "O metodă care primește doi parametri: un string și un int, returnând void.",
                    "O funcție care nu primește niciun argument și returnează un string."
                ],
                "correctIndex": 0,
                "explanation": "În convenția .NET pentru Func<...>, ultimul tip generic specificat este întotdeauna valoarea de retur; tipurile anterioare sunt parametrii de intrare."
            },
            "task": "Declară un delegat 'Func<int, int, int>' numit 'multiplier' care multiplică cei doi parametri folosind o expresie lambda '(a, b) => a * b'.",
            "starterCode": "Func<int, int, int> multiplier = ",
            "expectedOutputPattern": "Func<int,\\s*int,\\s*int>\\s+multiplier\\s*=\\s*\\(a,\\s*b\\)\\s*=>\\s*a\\s*\\*\\s*b;",
            "hint": "Scrie: (a, b) => a * b;"
        },
        {
            "id": "cs-new-7",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "3. Middle",
            "xp": 50,
            "title": "Capitolul 7: LINQ — Language Integrated Query & Evaluare Leneșă",
            "theory": """
<p><strong>LINQ</strong> integrează capabilități de interogare direct în limbajul C#. Metodele de extensie din <code>System.Linq</code> operează pe colecții <code>IEnumerable<T></code>.</p>
<h4>1. Evaluare Leneșă (Deferred Execution)</h4>
<p>Metode precum <code>Where</code> și <code>Select</code> NU execută filtrarea în momentul apelării. Interogarea este evaluată doar când colecția este iterată efectiv (într-o buclă <code>foreach</code> sau prin apelul <code>ToList()</code> / <code>ToArray()</code>).</p>
<h4>2. Agregare & Căutare</h4>
<p>Metodele <code>Any()</code> și <code>All()</code> verifică condiții booleene scurtcircuitând evaluarea. <code>FirstOrDefault(predicate)</code> returnează primul element ce satisface condiția sau valoarea implicită (<code>null</code> pentru clase).</p>
""",
            "glossary": [
                {"term": "LINQ", "def": "'Language Integrated Query' - set de unelte pentru interogarea uniformă a colecțiilor și bazelor de date."},
                {"term": "Deferred Execution", "def": "Amânarea execuției interogării până când rezultatele sunt iterate efectiv."},
                {"term": "ToList()", "def": "Forțează executarea imediată a interogării LINQ și materializează rezultatele într-o List<T>."},
                {"term": "SelectMany()", "def": "Aplatizează o secvență de colecții într-o singură secvență continuă."}
            ],
            "matchingPairs": [
                {"left": "numbers.Where(x => x > 10)", "right": "Filtrează elementele fără a le materializa imediat"},
                {"left": "users.Select(u => u.Email)", "right": "Proiectează doar proprietatea Email"},
                {"left": "items.OrderByDescending(x => x.Price)", "right": "Sortează elementele descrescător"},
                {"left": "list.FirstOrDefault(x => x.Id == 5)", "right": "Găsește elementul sau returnează null"}
            ],
            "quiz": {
                "question": "Ce înseamnă că o interogare 'var query = users.Where(u => u.IsActive);' are execuție amânată (deferred execution)?",
                "options": [
                    "Codul de filtrare nu rulează la atribuirea variabilei, ci abia când 'query' este iterat cu foreach sau ToList().",
                    "Interogarea este trimisă pe un server extern din cloud cu o întârziere de 5 secunde.",
                    "LINQ rulează interogarea doar dacă procesorul are mai puțin de 50% încărcare.",
                    "Filtrarea este anulată automat dacă lista are mai mult de 100 de elemente."
                ],
                "correctIndex": 0,
                "explanation": "LINQ construiește doar un arbore de iterație; evaluarea efectivă are loc abia când se solicită primul element prin iterație sau materializare explicită."
            },
            "task": "Filtrează colecția 'users' selectând doar utilizatorii cu 'u.Age >= 18' și materializează rezultatul cu '.ToList()'.",
            "starterCode": "var adults = users.",
            "expectedOutputPattern": "adults\\s*=\\s*users\\.Where\\(u\\s*=>\\s*u\\.Age\\s*>=\\s*18\\)\\.ToList\\(\\);",
            "hint": "Apelează .Where(u => u.Age >= 18).ToList();"
        },
        {
            "id": "cs-new-8",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "4. Senior",
            "xp": 55,
            "title": "Capitolul 8: Programare Asincronă: 'async', 'await' & 'Task'",
            "theory": """
<p>Modelul <strong>TAP</strong> (Task-based Asynchronous Pattern) din .NET folosește <code>async</code> și <code>await</code> pentru a elibera thread-urile din ThreadPool în timpul operațiunilor de I/O blocante (rețea, disc, apeluri SQL).</p>
<h4>1. Cum Funcționează State Machine-ul C#</h4>
<p>La compilare, o metodă <code>async</code> este transformată de compilatorul Roslyn într-o mașină de stări (State Machine). Când se ajunge la <code>await task</code>, execuția metodei este suspendată, iar firul de execuție curent se întoarce în ThreadPool pentru a servi alte cereri HTTP.</p>
<h4>2. 'ValueTask<T>' pentru Evitarea Alocărilor</h4>
<p>În timp ce <code>Task<T></code> este o clasă alocată pe Heap, <code>ValueTask<T></code> este o structură alocată pe Stack, ideală pentru metode asincrone care returnează frecvent rezultate din cache sincron fără alocare de memorie.</p>
""",
            "glossary": [
                {"term": "Task<T>", "def": "Promisiune asincronă reprezentând o operație în derulare ce va produce un rezultat T."},
                {"term": "ThreadPool", "def": "Set administrat de fire de execuție reutilizabile din sistemul de operare gestionate de CLR."},
                {"term": "ValueTask<T>", "def": "Structură de tip valoare ce evită alocarea pe Heap când rezultatul asincron este deja disponibil."},
                {"term": "ConfigureAwait(false)", "def": "Instrucțiune ce specifică că continuarea metodei nu necesită sincronizarea cu contextul original."}
            ],
            "matchingPairs": [
                {"left": "await httpClient.GetStringAsync()", "right": "Eliberează thread-ul pe durata descărcării rețelei"},
                {"left": "Task.WhenAll(t1, t2)", "right": "Așteaptă finalizarea tuturor task-urilor asincrone"},
                {"left": "async Task<int>", "right": "Metodă asincronă ce va returna o valoare întreagă"},
                {"left": "ValueTask<T>", "right": "Optimizare zero-allocation pentru rezultate sincronizate din cache"}
            ],
            "quiz": {
                "question": "De ce este considerată o practică periculoasă utilizarea apelului sincron '.Result' sau '.Wait()' pe un Task în loc de 'await'?",
                "options": [
                    "Blochează thread-ul apelant și poate conduce la fenomenul de Deadlock sau ThreadPool Starvation.",
                    "Șterge automat variabilele din baza de date a serverului.",
                    "Provoacă o eroare de sintaxă la compilare în C# 12.",
                    "Dezactivează conexiunea la internet a serverului."
                ],
                "correctIndex": 0,
                "explanation": "Apelul .Result blochează synchron firul de execuție curent. Dacă firul așteaptă un context de sincronizare ocupat, aplicația intră în Deadlock sau epuizează firele din ThreadPool."
            },
            "task": "Scrie antetul unei metode asincrone publice 'async Task<string> FetchDataAsync()' care returnează 'await client.GetStringAsync(url);'.",
            "starterCode": "// Completează metoda asincronă\n",
            "expectedOutputPattern": "public\\s+async\\s+Task<string>\\s+FetchDataAsync\\(\\)\\s*\\{\\s*return\\s+await\\s+client\\.GetStringAsync\\(url\\);\\s*\\}",
            "hint": "Scrie public async Task<string> FetchDataAsync() { return await client.GetStringAsync(url); }"
        },
        {
            "id": "cs-new-9",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "4. Senior",
            "xp": 60,
            "title": "Capitolul 9: Dependency Injection (DI) & Cicluri de Viață în .NET",
            "theory": """
<p>Containerul IoC (Inversion of Control) integrat în .NET Core gestionează instanțierea și rezolvarea automată a dependențelor prin constructor injection.</p>
<h4>1. Cele Trei Cicluri de Viață (Service Lifetimes)</h4>
<ul>
  <li><code>AddTransient</code>: Se creează o instanță nouă la FIECARE solicitare a serviciului.</li>
  <li><code>AddScoped</code>: Se creează o singură instanță per ciclu de viață de cerere HTTP (per Web Request); ideal pentru DbContext.</li>
  <li><code>AddSingleton</code>: Se creează o singură instanță unică pe întreaga durată de viață a aplicației.</li>
</ul>
<h4>2. Anti-pattern: Captive Dependency</h4>
<p>Injectarea unui serviciu <em>Scoped</em> într-un <em>Singleton</em> transformă acel serviciu scoped într-un fals singleton, cauzând scurgeri de memorie sau stări concurente corupte în DbContext.</p>
""",
            "glossary": [
                {"term": "IoC Container", "def": "Sistem arhitectural ce gestionează ciclul de viață și injectarea automată a componentelor software."},
                {"term": "Transient Lifetime", "def": "Instanțiere nouă la fiecare injectare; componente ușoare și complet stateless."},
                {"term": "Scoped Lifetime", "def": "O singură instanță partajată pe durata întregului request HTTP curent."},
                {"term": "Captive Dependency", "def": "Eroare arhitecturală în care un serviciu cu viață scurtă este ținut în viață de un Singleton."}
            ],
            "matchingPairs": [
                {"left": "builder.Services.AddScoped<IOrderService, OrderService>()", "right": "O instanță unică per cerere HTTP"},
                {"left": "builder.Services.AddSingleton<ICache, MemoryCache>()", "right": "O singură instanță globală pe tot serverul"},
                {"left": "builder.Services.AddTransient<IEmailSender, EmailSender>()", "right": "Instanță nouă la fiecare rezolvare"},
                {"left": "Constructor Injection", "right": "Declararea dependențelor ca parametri în constructor"}
            ],
            "quiz": {
                "question": "Ce ciclu de viață (lifetime) este recomandat pentru contextul bazei de date (DbContext) în aplicațiile web ASP.NET Core?",
                "options": [
                    "Scoped, deoarece trebuie partajat pe durata unui singur request HTTP și distrus la finalul acestuia.",
                    "Singleton, pentru a refolosi aceeași conexiune la infinit între toți utilizatorii simultan.",
                    "Transient, recreând contextul la fiecare interogare individuală.",
                    "Static, stocând entitățile direct în fișiere text."
                ],
                "correctIndex": 0,
                "explanation": "DbContext nu este thread-safe și reține starea modificărilor de entități pentru tranzacția curentă. De aceea, AddScoped este ciclul de viață standard și corect."
            },
            "task": "Înregistrează serviciul 'IUserRepository' cu implementarea 'UserRepository' ca serviciu 'Scoped' pe colecția 'services'.",
            "starterCode": "// Înregistrează serviciul Scoped\nservices.",
            "expectedOutputPattern": "services\\.AddScoped<IUserRepository,\\s*UserRepository>\\(\\);",
            "hint": "Apelează services.AddScoped<IUserRepository, UserRepository>();"
        },
        {
            "id": "cs-new-10",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "4. Senior",
            "xp": 60,
            "title": "Capitolul 10: ASP.NET Core Minimal APIs & Routing de Înaltă Performanță",
            "theory": """
<p><strong>Minimal APIs</strong> este arhitectura modernă din ASP.NET Core ce permite construirea de microservicii HTTP cu alocări minime de memorie și overhead redus, eliminând controlerele greoaie.</p>
<h4>1. Rutare Declarativă cu MapGet & MapPost</h4>
<p>Endpoint-urile sunt mapate direct pe instanța <code>WebApplication</code>: <code>app.MapGet(\"/api/items\", (IRepository repo) => Results.Ok(repo.GetAll()));</code>. Parametrii sunt injectați automat fie din URL, query string, request body sau containerul DI.</p>
<h4>2. Tipul 'IResult' & Răspunsuri Tipizate</h4>
<p>Clasa statică <code>Results</code> oferă metode factory standardizate pentru coduri HTTP: <code>Results.Ok()</code> (200), <code>Results.Created()</code> (201), <code>Results.NotFound()</code> (404), <code>Results.ValidationProblem()</code> (400 conform RFC 7807).</p>
""",
            "glossary": [
                {"term": "Minimal APIs", "def": "Abordare ultra-rapidă pentru crearea de servicii REST fără clase Controller stufoase."},
                {"term": "Results.Ok(data)", "def": "Factory helper ce generează un răspuns HTTP 200 cu corp JSON serializat automat."},
                {"term": "Route Parameter", "def": "Segment dinamic din calea URL (ex: /users/{id}) mapat automat pe argumentul funcției lambda."},
                {"term": "Model Binding", "def": "Mecanism intern ce extrage datele din cererea HTTP și le convertește în obiecte C#."}
            ],
            "matchingPairs": [
                {"left": "app.MapGet(\"/items/{id}\", (int id) => ...)", "right": "Rutează cererile GET extrăgând ID-ul numeric"},
                {"left": "app.MapPost(\"/items\", (Item item) => ...)", "right": "Deserializare automată a corpului JSON din POST"},
                {"left": "Results.NotFound()", "right": "Returnează codul de stare HTTP 404"},
                {"left": "Results.Created($\"/items/{id}\", item)", "right": "Returnează codul HTTP 201 cu header Location"}
            ],
            "quiz": {
                "question": "De unde injectează Minimal APIs argumentele specificate în funcția lambda a unui endpoint precum 'app.MapGet(\"/users\", (IUserService service) => ...)'?",
                "options": [
                    "Automat din containerul nativ de Dependency Injection al aplicației.",
                    "Numai dacă utilizatorul trimite un header HTTP cu numele serviciului.",
                    "Dintr-un fișier local XML situat în rădăcina proiectului.",
                    "Minimal APIs nu suportă injectarea dependențelor."
                ],
                "correctIndex": 0,
                "explanation": "Motorul de model binding din Minimal APIs recunoaște automat tipurile înregistrate în containerul de DI și le injectează fără adnotări manuale."
            },
            "task": "Definește un endpoint Minimal API pe ruta '/api/ping' folosind 'app.MapGet' care returnează 'Results.Ok(\"pong\")'.",
            "starterCode": "// Înregistrează ruta GET /api/ping\napp.",
            "expectedOutputPattern": "app\\.MapGet\\([\"']/api/ping[\"'],\\s*\\(\\)\\s*=>\\s*Results\\.Ok\\([\"']pong[\"']\\)\\);",
            "hint": "Scrie app.MapGet(\"/api/ping\", () => Results.Ok(\"pong\"));"
        },
        {
            "id": "cs-new-11",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "5. Arhitect / Exemplar",
            "xp": 70,
            "title": "Capitolul 11: Eficiență Extremă de Memorie: 'Span<T>' și 'ReadOnlySpan<T>'",
            "theory": """
<p>Tradițional, operațiuni de manipulare a șirurilor precum <code>string.Substring()</code> creează noi obiecte pe Heap, încărcând agresiv colectorul de gunoi (GC). <strong>Span&lt;T&gt;</strong> și <strong>ReadOnlySpan&lt;T&gt;</strong> rezolvă această problemă oferind o fereastră de memorie contiguă cu <em>zero alocări</em>.</p>
<h4>1. Ce este un 'ref struct'?</h4>
<p><code>Span&lt;T&gt;</code> este un <code>ref struct</code> alocat exclusiv pe Stack. Nu poate fi salvat pe Heap sau în câmpuri de clase obișnuite, garantând performanță la nivelul pointerilor din C fără riscul de dangling pointers.</p>
<h4>2. Slicing Zero-Copy</h4>
<p>Apelul <code>span.Slice(start, length)</code> costă $O(1)$ și nu alocă niciun octet în RAM; doar ajustează pointerul și lungimea ferestrei de vizualizare peste memoria existentă.</p>
""",
            "glossary": [
                {"term": "Span<T>", "def": "Fereastră de memorie de tip ref-struct ce unifică accesul la tablouri, memorie nativă sau Stack fără alocări pe Heap."},
                {"term": "ref struct", "def": "Tip special C# restricționat la stiva de apel (Stack) pentru a preveni colectarea GC."},
                {"term": "Zero-Allocation", "def": "Tehnică de programare de înaltă performanță ce evită alocările de memorie pe Heap."},
                {"term": "ReadOnlySpan<char>", "def": "Înlocuitor de înaltă performanță pentru string în operațiuni de parsare și slicing."}
            ],
            "matchingPairs": [
                {"left": "ReadOnlySpan<char> span = text.AsSpan()", "right": "Creează o vizualizare peste string fără copiere"},
                {"left": "span.Slice(0, 5)", "right": "Slicing în timp O(1) cu zero alocare pe Heap"},
                {"left": "stackalloc byte[256]", "right": "Alocare ultra-rapidă direct pe Stack-ul metodei"},
                {"left": "ref struct", "right": "Structură restricționată strict la memoria Stack"}
            ],
            "quiz": {
                "question": "De ce este interzis ca un obiect de tip Span<T> să fie stocat ca atribut într-o clasă obișnuită (class)?",
                "options": [
                    "Deoarece este un 'ref struct' care trăiește exclusVal pe Stack; plasarea lui pe Heap ar crea referințe invalide după ieșirea din metodă.",
                    "Span<T> este incompatibil cu procesoarele pe 64 de biți.",
                    "Compilatorul C# limitează clasele la maxim 4 câmpuri de memorie.",
                    "Span<T> poate fi folosit doar în limbajul F#."
                ],
                "correctIndex": 0,
                "explanation": "Span<T> este un ref struct conceput exclusiv pentru Stack. Dacă ar ajunge pe Heap în interiorul unei clase, adresa către datele de pe Stack ar deveni invalidă la întoarcerea din metodă."
            },
            "task": "Convertește stringul 'rawText' într-un 'ReadOnlySpan<char>' folosind metoda de extensie '.AsSpan()'.",
            "starterCode": "string rawText = \"2026-10-15\";\nReadOnlySpan<char> span = ",
            "expectedOutputPattern": "span\\s*=\\s*rawText\\.AsSpan\\(\\);",
            "hint": "Scrie span = rawText.AsSpan();"
        },
        {
            "id": "cs-new-12",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "5. Arhitect / Exemplar",
            "xp": 75,
            "title": "Capitolul 12: Pattern Matching C# Modern & Switch Expressions",
            "theory": """
<p>Pattern Matching-ul din C# modern transformă structurile decizionale complexe în expresii declarative concise, sigure la compilare și verificate pentru exhaustivitate.</p>
<h4>1. Switch Expressions</h4>
<p>Sintaxa <code>val switch { pattern1 => res1, _ => defaultRes }</code> elimină cuvintele cheie <code>case</code> și <code>break</code>, fiind o expresie care returnează direct o valoare calculată.</p>
<h4>2. Patterns: Property, Relational & Positional</h4>
<p>Putem inspecta simultan tipul și proprietățile interne ale unui obiect: <code>Order { Status: \"Paid\", Total: > 1000 } => applyDiscount()</code>, combinând filtre logice cu <code>and</code>, <code>or</code> și <code>not</code>.</p>
""",
            "glossary": [
                {"term": "Switch Expression", "def": "Expresie compactă ce evaluează un pattern și returnează direct o valoare fără case/break."},
                {"term": "Discard Pattern (_)", "def": "Simbol ce prinde orice valoare neacoperită anterior, echivalentul ramurii 'default'."},
                {"term": "Property Pattern", "def": "Verifică dacă proprietățile unui obiect satisfac anumite valori sau condiții relaționale."},
                {"term": "Exhaustive Check", "def": "Verificare statică a compilatorului ce semnalează dacă au rămas cazuri neacoperite în switch."}
            ],
            "matchingPairs": [
                {"left": "val switch { ... }", "right": "Sintaxa expresiei switch moderne"},
                {"left": "int n when n > 0", "right": "Type pattern cu gardă condițională 'when'"},
                {"left": "{ IsAdmin: true } => ...", "right": "Property pattern verificat direct"},
                {"left": "_ => \"Necunoscut\"", "right": "Discard pattern pentru cazul fallback implicit"}
            ],
            "quiz": {
                "question": "Ce rol joacă simbolul '_' (underscore) într-o expresie switch în C# modern?",
                "options": [
                    "Este discard pattern-ul care acționează ca un caz 'default' pentru orice valoare neprinsă de ramurile anterioare.",
                    "Forțează aruncarea unei excepții dacă expresia este nulă.",
                    "Repornește execuția de la prima ramură a switch-ului.",
                    "Indică compilatorului să ignore linia respectivă de cod."
                ],
                "correctIndex": 0,
                "explanation": "Simbolul '_' se numește discard pattern și prinde orice valoare, având exact rolul clauzei 'default' din instrucțiunile switch clasice."
            },
            "task": "Scrie o expresie switch care evaluează 'statusCode' returnând '\"OK\"' pentru 200 și '\"Error\"' pentru orice altceva (_).",
            "starterCode": "int statusCode = 200;\nstring message = statusCode switch {\n    // Completează ramurile\n};",
            "expectedOutputPattern": "200\\s*=>\\s*[\"']OK[\"'],\\s*_\\s*=>\\s*[\"']Error[\"']",
            "hint": "Scrie 200 => \"OK\", _ => \"Error\" în interiorul blocului switch."
        }
    ]
