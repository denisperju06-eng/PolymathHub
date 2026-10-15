# -*- coding: utf-8 -*-
"""
Generator for C# & .NET Core mega curriculum expansion (12 comprehensive lessons).
Covers Top-Level Statements, ref/out/in, OOP, Properties/init, Pattern Matching, Records, LINQ, async/await, Generics, DI, EF Core, and Span<T>.
Each lesson features rich <pre><code>...</code></pre> code blocks, runnable examples, and precise tasks.
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

<h4>1. Top-Level Statements în C# 12</h4>
<p>Programele moderne nu mai necesită clase <code>Program</code> sau metode <code>static void Main</code> explicite; instrucțiunile se scriu direct la nivelul superior al fișierului.</p>

<pre><code>// Exemplu 1: Top-Level Statements și afișare interpolată în C# 12
string aplicatie = "PolymathHub";
int versiune = 12;
bool esteActiva = true;

if (esteActiva) {
    Console.WriteLine($"Aplicația {aplicatie} v{versiune} este gata de rulare!");
} else {
    Console.WriteLine("Serviciu inactiv.");
}
// Output: Aplicația PolymathHub v12 este gata de rulare!
</code></pre>

<h4>2. Tipuri de Valoare (Stack) vs Tipuri de Referință (Heap)</h4>
<p>Tipurile de valoare (<code>int</code>, <code>double</code>, <code>bool</code>, <code>struct</code>) sunt alocate pe <em>Stack</em>. Tipurile de referință (<code>string</code>, <code>class</code>, <code>record</code>) sunt alocate pe <em>Heap</em>, iar pe Stack se reține doar referința.</p>
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
            "prompt": "Afișează stringul 'Hello, Polymath!' în consolă folosind metoda 'Console.WriteLine'.",
            "task": "Afișează stringul 'Hello, Polymath!' în consolă folosind metoda 'Console.WriteLine'.",
            "example": "Console.WriteLine(\"Hello, Polymath!\");",
            "starterCode": "Console.WriteLine(\"Hello, Polymath!\");",
            "officialSolution": "Console.WriteLine(\"Hello, Polymath!\");",
            "expectedOutputPattern": "Console\\.WriteLine\\([\"']Hello,\\s*Polymath![\"']\\);",
            "regexPattern": "Console\\.WriteLine\\([\"']Hello,\\s*Polymath![\"']\\);",
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
<pre><code>// Exemplu 1: Modificatorul 'out' pentru parsare sigură
string text = "42";
if (int.TryParse(text, out int rezultat)) {
    Console.WriteLine($"Număr parsat: {rezultat}");
}

// Exemplu 2: Modificatorul 'ref' (necesită inițializare înainte de apel)
void Dubleaza(ref int val) {
    val *= 2;
}
int scor = 50;
Dubleaza(ref scor); // scor devine 100
</code></pre>
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
            "prompt": "Apelează metoda 'int.TryParse' pe stringul 'input' salvând rezultatul în 'out int result'.",
            "task": "Apelează metoda 'int.TryParse' pe stringul 'input' salvând rezultatul în 'out int result'.",
            "example": "string input = \"42\";\nbool success = int.TryParse(input, out int result);",
            "starterCode": "string input = \"42\";\nbool success = int.TryParse(input, out int result);",
            "officialSolution": "string input = \"42\";\nbool success = int.TryParse(input, out int result);",
            "expectedOutputPattern": "success\\s*=\\s*int\\.TryParse\\(input,\\s*out\\s+int\\s+result\\);",
            "regexPattern": "success\\s*=\\s*int\\.TryParse\\(input,\\s*out\\s+int\\s+result\\);",
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
<p>În C#, metodele nu sunt polimorfice (virtuale) în mod implicit. Pentru a permite suprascrierea, metoda din clasa de bază trebuie marcată explicit cu <code>virtual</code>, iar metoda din clasa copil cu <code>override</code>.</p>

<pre><code>// Exemplu 1: Moștenire polimorfică în C#
public class Animal {
    public virtual string EmiteSunet() => "Sunet generic";
}

public class Caine : Animal {
    public override string EmiteSunet() => "Ham! Ham!";
}

public sealed class CainePolitist : Caine {
    // sealed blochează moștenirea ulterioară
}
</code></pre>
""",
            "glossary": [
                {"term": "virtual", "def": "Permite unei metode să fie suprascrisă într-o clasă derivată."},
                {"term": "override", "def": "Furnizează o implementare nouă pentru o metodă virtuală sau abstractă moștenită."},
                {"term": "sealed", "def": "Blochează extinderea ulterioară a unei clase sau suprascrierea unei metode specifice."},
                {"term": "base", "def": "Cuvânt cheie folosit pentru apelarea constructorului sau a metodelor din clasa părinte."}
            ],
            "matchingPairs": [
                {"left": "public virtual void Run()", "right": "Metodă deschisă pentru polimorfism"},
                {"left": "public override void Run()", "right": "Suprascrie comportamentul din baza"},
                {"left": "public sealed class Admin", "right": "Clasă din care nu se mai poate moșteni"},
                {"left": "base.Run()", "right": "Apelează implementarea originală a părintelui"}
            ],
            "quiz": {
                "question": "Ce cuvânt cheie este obligatoriu în clasa derivată atunci când suprascrii o metodă 'virtual' din clasa părinte în C#?",
                "options": [
                    "override",
                    "new",
                    "virtual",
                    "implements"
                ],
                "correctIndex": 0,
                "explanation": "În C#, polimorfismul este explicit: metoda copil trebuie marcată obligatoriu cu 'override'."
            },
            "prompt": "Suprascrie metoda 'EmiteSunet' în clasa Dog returnând 'Ham!'.",
            "task": "Suprascrie metoda 'EmiteSunet' în clasa Dog returnând 'Ham!'.",
            "example": "public class Dog : Animal {\n    public override string EmiteSunet() => \"Ham!\";\n}",
            "starterCode": "public class Dog : Animal {\n    public override string EmiteSunet() => \"Ham!\";\n}",
            "officialSolution": "public class Dog : Animal {\n    public override string EmiteSunet() => \"Ham!\";\n}",
            "expectedOutputPattern": "public\\s+override\\s+string\\s+EmiteSunet\\(\\)\\s*=>\\s*[\"']Ham![\"'];",
            "regexPattern": "public\\s+override\\s+string\\s+EmiteSunet\\(\\)\\s*=>\\s*[\"']Ham![\"'];",
            "hint": "Scrie public override string EmiteSunet() => \"Ham!\";"
        },
        {
            "id": "cs-new-4",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "2. Junior",
            "xp": 40,
            "title": "Capitolul 4: Proprietăți C#: Auto-Properties, 'init' & Computed",
            "theory": """
<p>Proprietățile în C# oferă o modalitate elegantă de încapsulare fără metode manuale de tip getter/setter.</p>

<pre><code>// Exemplu 1: Proprietăți moderne cu init și computed
public class Produs {
    public int Id { get; init; } // Poate fi setat doar la inițializare
    public string Nume { get; set; } = string.Empty;
    public decimal Pret { get; set; }
    
    // Computed property (Expression-bodied):
    public decimal PretCuTva => Pret * 1.19m;
}

// Instanțiere cu Object Initializer:
var p = new Produs { Id = 1, Nume = "Laptop", Pret = 3000m };
</code></pre>
""",
            "glossary": [
                {"term": "init", "def": "Accessor ce permite asignarea valorii exclusiv la crearea obiectului (imutable after creation)."},
                {"term": "Computed Property", "def": "Proprietate calculată la cerere pe baza altor câmpuri, fără variabilă internă de stocare."},
                {"term": "Auto-Property", "def": "Sintaxă compactă get; set; unde compilatorul generează automat câmpul privat din spate."},
                {"term": "Expression-bodied (=>)", "def": "Sintaxă compactă cu săgeată pentru metode și proprietăți dintr-o singură linie."}
            ],
            "matchingPairs": [
                {"left": "public int Id { get; init; }", "right": "Imutabil după finalizarea inițializării"},
                {"left": "public decimal Total => Price * Qty;", "right": "Proprietate calculată dinamic la fiecare accesare"},
                {"left": "public string Name { get; private set; }", "right": "Citire publică, modificare doar din interior"},
                {"left": "new User { Age = 25 }", "right": "Sintaxă Object Initializer"}
            ],
            "quiz": {
                "question": "Ce se întâmplă dacă încerci să modifici o proprietate definită cu 'get; init;' după ce obiectul a fost instanțiat?",
                "options": [
                    "Compilatorul C# aruncă eroare de compilare deoarece valoarea este read-only.",
                    "Obiectul este șters automat din memorie.",
                    "Valoarea se modifică fără avertismente.",
                    "Programul se blochează la runtime cu NullReferenceException."
                ],
                "correctIndex": 0,
                "explanation": "Accessorul 'init' garantează imutabilitatea: proprietatea poate fi asignată doar în constructor sau în blocul de Object Initializer."
            },
            "prompt": "Definește o proprietate auto-implementată 'Id' de tip 'int' cu accessorii 'get' și 'init'.",
            "task": "Definește o proprietate auto-implementată 'Id' de tip 'int' cu accessorii 'get' și 'init'.",
            "example": "public int Id { get; init; }",
            "starterCode": "public int Id { get; init; }",
            "officialSolution": "public int Id { get; init; }",
            "expectedOutputPattern": "public\\s+int\\s+Id\\s*\\{\\s*get;\\s*init;\\s*\\}",
            "regexPattern": "public\\s+int\\s+Id\\s*\\{\\s*get;\\s*init;\\s*\\}",
            "hint": "Scrie public int Id { get; init; }"
        },
        {
            "id": "cs-new-5",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "3. Middle",
            "xp": 45,
            "title": "Capitolul 5: Pattern Matching Modern (switch expressions & patterns)",
            "theory": """
<p>Pattern Matching-ul din C# transformă instrucțiunile <code>switch</code> prolixe în expresii concise, tipizate și sigure.</p>

<pre><code>// Exemplu 1: Switch Expression cu Relational Patterns
string EvalueazaScor(int puncte) => puncte switch {
    >= 90 => "Excelent",
    >= 70 => "Bine",
    >= 50 => "Suficient",
    _ => "Respins"
};

// Exemplu 2: Type Pattern Matching
string Descrie(object obj) => obj switch {
    string s => $"Text cu lungimea: {s.Length}",
    int n => $"Număr întreg: {n}",
    null => "Nul",
    _ => "Necunoscut"
};
</code></pre>
""",
            "glossary": [
                {"term": "Switch Expression", "def": "Expresie modernă compactă ce returnează direct o valoare pe baza tiparului potrivit."},
                {"term": "Discard Pattern (_)", "def": "Echivalentul clauzei 'default' ce prinde orice caz nepotrivit anterior."},
                {"term": "Relational Pattern", "def": "Verificarea valorilor prin operatori de comparație (<, <=, >, >=) direct în switch."},
                {"term": "Type Pattern", "def": "Verifică tipul obiectului și îl distribuie direct într-o variabilă tipizată."}
            ],
            "matchingPairs": [
                {"left": "val switch { >= 18 => true, _ => false }", "right": "Switch expression cu verificare relațională"},
                {"left": "_ => defaultValue", "right": "Ramura de fallback (discard pattern)"},
                {"left": "is not null", "right": "Negated null check pattern"},
                {"left": "case string s when s.Length > 5:", "right": "Pattern matching cu clauză de gardă (when)"}
            ],
            "quiz": {
                "question": "Ce simbol ține locul clauzei 'default' într-o expresie C# switch modernă?",
                "options": [
                    "Simbolul underscore (_), cunoscut ca Discard Pattern.",
                    "Cuvântul cheie 'else'.",
                    "Simbolul asterisc (*).",
                    "Cuvântul cheie 'default:' obligatoriu."
                ],
                "correctIndex": 0,
                "explanation": "În switch expressions, 'default' este înlocuit cu discard pattern-ul '_ => valoare'."
            },
            "prompt": "Completează expresia switch pentru a returna 'Admis' dacă 'score >= 50' și 'Respins' pentru '_'.",
            "task": "Completează expresia switch pentru a returna 'Admis' dacă 'score >= 50' și 'Respins' pentru '_'.",
            "example": "string res = score switch {\n    >= 50 => \"Admis\",\n    _ => \"Respins\"\n};",
            "starterCode": "string res = score switch {\n    >= 50 => \"Admis\",\n    _ => \"Respins\"\n};",
            "officialSolution": "string res = score switch {\n    >= 50 => \"Admis\",\n    _ => \"Respins\"\n};",
            "expectedOutputPattern": ">= 50\\s*=>\\s*[\"']Admis[\"'],\\s*_\\s*=>\\s*[\"']Respins[\"']",
            "regexPattern": ">= 50\\s*=>\\s*[\"']Admis[\"'],\\s*_\\s*=>\\s*[\"']Respins[\"']",
            "hint": "Scrie >= 50 => \"Admis\", _ => \"Respins\""
        },
        {
            "id": "cs-new-6",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "3. Middle",
            "xp": 45,
            "title": "Capitolul 6: Tipuri Record & Imutabilitate ('with' expressions)",
            "theory": """
<p>Tipurile <strong>Record</strong> (<code>record class</code> sau <code>record struct</code>) oferă egalitate bazată pe valori (Value-based Equality) și imutabilitate nativă, fiind ideale pentru DTO-uri și arhitecturi bazate pe mesaje.</p>

<pre><code>// Exemplu 1: Positional Record și Non-Destructive Mutation cu 'with'
public record UserRecord(int Id, string Nume, string Rol);

var user1 = new UserRecord(1, "Denis", "Admin");

// Clauza 'with' creează o copie modificată păstrând originalul intact:
var user2 = user1 with { Nume = "Alex" };

// Egalitate pe valori (nu pe adrese de memorie!):
var userCopy = new UserRecord(1, "Denis", "Admin");
Console.WriteLine(user1 == userCopy); // True!
</code></pre>
""",
            "glossary": [
                {"term": "Record", "def": "Tip de date orientat pe stocarea imutabilă a valorilor cu egalitate bazată pe conținut."},
                {"term": "with expression", "def": "Mecanism de clonare parțială ce creează un obiect nou cu anumiți membri modificați."},
                {"term": "Value-based Equality", "def": "Două instanțe sunt egale dacă toate proprietățile lor au aceleași valori."},
                {"term": "Positional Record", "def": "Sintaxă ultra-scurtă: record Point(int X, int Y);"}
            ],
            "matchingPairs": [
                {"left": "public record Point(int X, int Y);", "right": "Positional record imutabil cu proprietăți auto-generate"},
                {"left": "var p2 = p1 with { X = 10 };", "right": "Clonare cu mutație non-destructivă"},
                {"left": "record1 == record2", "right": "Compară valorile câmpurilor, nu referințele de memorie"},
                {"left": "record struct", "right": "Variantă record alocată pe Stack ca Value Type"}
            ],
            "quiz": {
                "question": "Ce rezultat va afișa 'r1 == r2' dacă r1 și r2 sunt două instanțe distincte de record cu aceleași valori ale câmpurilor?",
                "options": [
                    "True (deoarece tipurile record implementează egalitate bazată pe valorile câmpurilor).",
                    "False (deoarece sunt adrese diferite în memoria Heap).",
                    "Aruncă o excepție de compilare.",
                    "Returnează null."
                ],
                "correctIndex": 0,
                "explanation": "Spre deosebire de clasele clasice unde '==' verifică referința, la records compilatorul suprascrie automat Equals() pentru a compara valorile interne ale fiecărui câmp."
            },
            "prompt": "Clonează 'original' modificând proprietatea 'Role' în 'Admin' folosind expresia 'original with { Role = \"Admin\" }'.",
            "task": "Clonează 'original' modificând proprietatea 'Role' în 'Admin' folosind expresia 'original with { Role = \"Admin\" }'.",
            "example": "var updated = original with { Role = \"Admin\" };",
            "starterCode": "var updated = original with { Role = \"Admin\" };",
            "officialSolution": "var updated = original with { Role = \"Admin\" };",
            "expectedOutputPattern": "updated\\s*=\\s*original\\s+with\\s*\\{\\s*Role\\s*=\\s*[\"']Admin[\"']\\s*\\};?",
            "regexPattern": "updated\\s*=\\s*original\\s+with\\s*\\{\\s*Role\\s*=\\s*[\"']Admin[\"']\\s*\\};?",
            "hint": "Scrie updated = original with { Role = \"Admin\" };"
        },
        {
            "id": "cs-new-7",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "3. Middle",
            "xp": 50,
            "title": "Capitolul 7: LINQ Avansat: 'Where', 'Select', 'GroupBy' & Deferred Execution",
            "theory": """
<p><strong>LINQ</strong> (Language Integrated Query) unifică interogarea colecțiilor în memorie (<code>IEnumerable&lt;T&gt;</code>) și a bazelor de date prin EF Core (<code>IQueryable&lt;T&gt;</code>).</p>

<h4>1. Execuție Amânată (Deferred Execution)</h4>
<p>Interogările LINQ nu se execută la definire, ci la enumerare (<code>foreach</code>, <code>.ToList()</code>, <code>.Count()</code>).</p>

<pre><code>// Exemplu 1: Pipeline LINQ complet cu filtrare, ordonare și selecție
var angajati = new List&lt;Angajat&gt; {
    new("Ion", 5000, "IT"),
    new("Maria", 7500, "IT"),
    new("Elena", 4200, "HR")
};

List&lt;string&gt; topIt = angajati
    .Where(a => a.Departament == "IT")
    .OrderByDescending(a => a.Salariu)
    .Select(a => a.Nume)
    .ToList();

// Output: ["Maria", "Ion"]
</code></pre>
""",
            "glossary": [
                {"term": "Deferred Execution", "def": "Executarea interogării doar în momentul în care datele sunt efectiv iterate sau materializate."},
                {"term": "IEnumerable<T>", "def": "Interfață pentru colecții în memorie ce evaluează elementele pas cu pas."},
                {"term": "IQueryable<T>", "def": "Interfață ce traduce interogarea C# în SQL nativ rulat pe serverul de baze de date."},
                {"term": "Select() vs Where()", "def": "Where filtrează colecția (reducând rândurile), Select transformă/proiectează elementele."}
            ],
            "matchingPairs": [
                {"left": "numbers.Where(x => x > 0)", "right": "Filtrează elementele după predicat"},
                {"left": "users.Select(u => u.Email)", "right": "Proiectează într-o colecție de adrese email"},
                {"left": "items.ToList()", "right": "Materializează imediat interogarea în memorie"},
                {"left": "orders.GroupBy(o => o.Status)", "right": "Grupează elementele după o cheie comună"}
            ],
            "quiz": {
                "question": "Ce înseamnă 'Deferred Execution' (execuție amânată) în LINQ?",
                "options": [
                    "Interogarea nu filtrează datele când este scrisă, ci abia atunci când colecția este iterată cu foreach sau materializată cu .ToList().",
                    "Interogarea rulează doar când computerul este repornit.",
                    "LINQ amână execuția dacă procesorul este prea fierbinte.",
                    "Datele sunt descărcate doar după miezul nopții."
                ],
                "correctIndex": 0,
                "explanation": "LINQ construiește arborele de expresie sau iteratorul; calculul efectiv se declanșează doar la cererea primului element (lazy)."
            },
            "prompt": "Filtrează lista 'numbers' selectând doar numerele pare folosind '.Where(n => n % 2 == 0).ToList();'.",
            "task": "Filtrează lista 'numbers' selectând doar numerele pare folosind '.Where(n => n % 2 == 0).ToList();'.",
            "example": "var even = numbers.Where(n => n % 2 == 0).ToList();",
            "starterCode": "var even = numbers.Where(n => n % 2 == 0).ToList();",
            "officialSolution": "var even = numbers.Where(n => n % 2 == 0).ToList();",
            "expectedOutputPattern": "\\.Where\\(n\\s*=>\\s*n\\s*%\\s*2\\s*==\\s*0\\)\\.ToList\\(\\);?",
            "regexPattern": "\\.Where\\(n\\s*=>\\s*n\\s*%\\s*2\\s*==\\s*0\\)\\.ToList\\(\\);?",
            "hint": "Scrie .Where(n => n % 2 == 0).ToList();"
        },
        {
            "id": "cs-new-8",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "4. Senior",
            "xp": 60,
            "title": "Capitolul 8: Programare Asincronă cu 'async' / 'await' & 'Task.WhenAll'",
            "theory": """
<p>Modelul asincron din C# (Task-based Asynchronous Pattern — TAP) folosește o mașină de stări generată de compilator pentru a elibera firul curent în timp ce așteaptă I/O.</p>

<pre><code>// Exemplu 1: Metode asincrone și Task.WhenAll
public async Task&lt;int&gt; DescarcaTotAsync(List&lt;string&gt; urls) {
    using var client = new HttpClient();
    
    // Declanșează descărcările în paralel:
    var tasks = urls.Select(url => client.GetStringAsync(url));
    
    // Așteaptă finalizarea tuturor cererilor:
    string[] pagini = await Task.WhenAll(tasks);
    
    return pagini.Length;
}
</code></pre>
""",
            "glossary": [
                {"term": "async / await", "def": "Cuvinte cheie ce transformă o metodă într-o mașină de stări asincronă non-blocantă."},
                {"term": "Task<T>", "def": "Reprezentarea unei operațiuni asincrone ce va produce un rezultat în viitor."},
                {"term": "Task.WhenAll()", "def": "Combină multiple task-uri într-un singur task ce se finalizează când toate au terminat."},
                {"term": "ConfigureAwait(false)", "def": "Optimizare de bibliotecă ce evită capturarea contextului de sincronizare inițial."}
            ],
            "matchingPairs": [
                {"left": "await Task.WhenAll(t1, t2)", "right": "Așteaptă ambele sarcini rulate în paralel"},
                {"left": "async Task<int> Calculate()", "right": "Metodă asincronă ce returnează un întreg"},
                {"left": "Task.Delay(1000)", "right": "Pauză asincronă non-blocantă (fără Thread.Sleep)"},
                {"left": "CancellationToken", "right": "Permite anularea cooperativă a operațiunilor asincrone"}
            ],
            "quiz": {
                "question": "De ce este interzis să folosești 'task.Result' sau 'task.Wait()' pe o operație asincronă în C#?",
                "options": [
                    "Blochează sincron firul curent și poate cauza Deadlock pe SynchronizationContext.",
                    "Șterge rezultatul din memorie.",
                    "Aruncă întotdeauna NullReferenceException.",
                    "Dezactivează compilatorul Roslyn."
                ],
                "correctIndex": 0,
                "explanation": "Apelul '.Result' sau '.Wait()' blochează sincron firul curent, creând risc major de deadlock în interfețe grafice (WPF/MAUI) și ASP.NET clasic."
            },
            "prompt": "Așteaptă rularea concurentă a două sarcini 'task1' și 'task2' apelând 'await Task.WhenAll(task1, task2);'.",
            "task": "Așteaptă rularea concurentă a două sarcini 'task1' și 'task2' apelând 'await Task.WhenAll(task1, task2);'.",
            "example": "await Task.WhenAll(task1, task2);",
            "starterCode": "await Task.WhenAll(task1, task2);",
            "officialSolution": "await Task.WhenAll(task1, task2);",
            "expectedOutputPattern": "await\\s+Task\\.WhenAll\\(task1,\\s*task2\\);?",
            "regexPattern": "await\\s+Task\\.WhenAll\\(task1,\\s*task2\\);?",
            "hint": "Scrie await Task.WhenAll(task1, task2);"
        },
        {
            "id": "cs-new-9",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "4. Senior",
            "xp": 60,
            "title": "Capitolul 9: Generice C# & Constrângeri ('where T : class, new()')",
            "theory": """
<p>Genericele permit scrierea de clase și algoritmi independenți de tipul de date, cu verificări la compilare și fără penalizările de boxing/unboxing.</p>

<pre><code>// Exemplu 1: Clasă generică cu constrângeri multiple
public class Repository&lt;T&gt; where T : class, new() {
    private readonly List&lt;T&gt; _stoc = new();

    public void Salveaza(T entitate) {
        _stoc.Add(entitate);
    }

    public T CreeazaInstantaNoua() {
        return new T(); // Posibil doar datorită constrângerii new()!
    }
}
</code></pre>
""",
            "glossary": [
                {"term": "Generics (<T>)", "def": "Șabloane tipizate ce asigură reutilizarea codului și siguranță statică la compilare."},
                {"term": "where T : class", "def": "Constrângere ce limitează parametrul generic exclusiv la tipuri de referință."},
                {"term": "where T : new()", "def": "Constrângere ce impune ca tipul să aibă un constructor public fără parametri."},
                {"term": "Boxing / Unboxing", "def": "Conversia costisitoare între tipuri de valoare și obiecte pe Heap, evitată prin generice."}
            ],
            "matchingPairs": [
                {"left": "where T : class", "right": "T trebuie să fie un tip de referință"},
                {"left": "where T : struct", "right": "T trebuie să fie un tip de valoare non-nullable"},
                {"left": "where T : new()", "right": "T trebuie să aibă constructor public fără parametri"},
                {"left": "where T : IComparable<T>", "right": "T trebuie să suporte operații de comparare"}
            ],
            "quiz": {
                "question": "Ce permite constrângerea generică 'where T : new()' în corpul unei clase generice C#?",
                "options": [
                    "Permite instanțierea directă a tipului generic folosind operatorul 'new T()'.",
                    "Interzice crearea oricărui obiect.",
                    "Obligă clasa să fie redenumită la fiecare compilare.",
                    "Șterge Garbage Collector-ul."
                ],
                "correctIndex": 0,
                "explanation": "În lipsa constrângerii 'new()', compilatorul refuză apelul 'new T()' deoarece nu poate garanta existența unui constructor fără parametri."
            },
            "prompt": "Adaugă constrângerea ca parametrul generic 'T' să fie tip de referință și să aibă constructor fără parametri: 'where T : class, new()'.",
            "task": "Adaugă constrângerea ca parametrul generic 'T' să fie tip de referință și să aibă constructor fără parametri: 'where T : class, new()'.",
            "example": "public class Storage<T> where T : class, new() {\n}",
            "starterCode": "public class Storage<T> where T : class, new() {\n}",
            "officialSolution": "public class Storage<T> where T : class, new() {\n}",
            "expectedOutputPattern": "where\\s+T\\s*:\\s*class,\\s*new\\(\\)",
            "regexPattern": "where\\s+T\\s*:\\s*class,\\s*new\\(\\)",
            "hint": "Scrie where T : class, new()"
        },
        {
            "id": "cs-new-10",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "4. Senior",
            "xp": 65,
            "title": "Capitolul 10: Inversion of Control & Dependency Injection în .NET Core",
            "theory": """
<p>.NET Core include un container nativ de Inversion of Control (IoC) configurabil în <code>Program.cs</code> prin 3 durate de viață (Lifetimes):</p>

<pre><code>// Exemplu 1: Înregistrarea serviciilor în containerul IoC din Program.cs
var builder = WebApplication.CreateBuilder(args);

// 1. Transient: Instanță proaspătă la fiecare cerere
builder.Services.AddTransient&lt;ITokenGenerator, JwtTokenGenerator&gt;();

// 2. Scoped: O singură instanță per cerere HTTP (recomandat DbContext)
builder.Services.AddScoped&lt;IUserRepository, SqlUserRepository&gt;();

// 3. Singleton: O singură instanță pe toată durata de viață a aplicației
builder.Services.AddSingleton&lt;IMemoryCache, MemoryCache&gt;();
</code></pre>
""",
            "glossary": [
                {"term": "AddTransient", "def": "Creează o nouă instanță de fiecare dată când serviciul este solicitat prin DI."},
                {"term": "AddScoped", "def": "Creează o singură instanță per request HTTP (ideal pentru baze de date și repository-uri)."},
                {"term": "AddSingleton", "def": "Instanță unică partajată de toate cererile pe toată durata procesului aplicației."},
                {"term": "Service Lifetime", "def": "Regula care guvernează când este creată și când este distrusă o dependență."}
            ],
            "matchingPairs": [
                {"left": "AddTransient<IService, Impl>()", "right": "Instanță nouă la fiecare cerere"},
                {"left": "AddScoped<IDbContext, AppDb>()", "right": "O instanță unică per request HTTP"},
                {"left": "AddSingleton<ICache, Cache>()", "right": "O singură instanță globală pe tot ciclul de viață"},
                {"left": "Constructor Injection", "right": "Furnizarea automată a serviciilor prin constructor"}
            ],
            "quiz": {
                "question": "Ce durată de viață (Lifetime) este recomandată pentru 'DbContext' în aplicațiile web ASP.NET Core?",
                "options": [
                    "Scoped (pentru a izola tranzacțiile și starea entităților la nivelul unui singur request HTTP).",
                    "Singleton (deoarece o singură conexiune este suficientă pentru 10.000 de utilizatori concurenți).",
                    "Transient (pentru a crea câte o conexiune la fiecare metodă din controller).",
                    "Static fără nicio înregistrare în DI."
                ],
                "correctIndex": 0,
                "explanation": "DbContext nu este thread-safe! Înregistrarea ca Scoped garantează că fiecare cerere HTTP primește propriul său context, prevenind coruperea concurentă a stării."
            },
            "prompt": "Înregistrează serviciul 'IOrderService' cu implementarea 'OrderService' ca durată Scoped: 'builder.Services.AddScoped<IOrderService, OrderService>();'.",
            "task": "Înregistrează serviciul 'IOrderService' cu implementarea 'OrderService' ca durată Scoped: 'builder.Services.AddScoped<IOrderService, OrderService>();'.",
            "example": "builder.Services.AddScoped<IOrderService, OrderService>();",
            "starterCode": "builder.Services.AddScoped<IOrderService, OrderService>();",
            "officialSolution": "builder.Services.AddScoped<IOrderService, OrderService>();",
            "expectedOutputPattern": "builder\\.Services\\.AddScoped<IOrderService,\\s*OrderService>\\(\\);?",
            "regexPattern": "builder\\.Services\\.AddScoped<IOrderService,\\s*OrderService>\\(\\);?",
            "hint": "Scrie builder.Services.AddScoped<IOrderService, OrderService>();"
        },
        {
            "id": "cs-new-11",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "5. Arhitect / Exemplar",
            "xp": 70,
            "title": "Capitolul 11: Entity Framework Core — Migrări, DbSet & AsNoTracking",
            "theory": """
<p><strong>Entity Framework Core</strong> este ORM-ul de producție din .NET. Pentru interogări de tip read-only unde entitățile nu vor fi modificate, folosim <code>AsNoTracking()</code> pentru a decupla Change Tracker-ul și a reduce consumul de memorie cu până la 50%.</p>

<pre><code>// Exemplu 1: Interogare de înaltă performanță cu AsNoTracking()
using var db = new AppDbContext();

List&lt;UserDTO&gt; users = await db.Users
    .AsNoTracking() // Elimină overhead-ul monitorizării modificărilor
    .Where(u => u.IsActive)
    .Select(u => new UserDTO(u.Id, u.Email))
    .ToListAsync();
</code></pre>
""",
            "glossary": [
                {"term": "AsNoTracking()", "def": "Dezactivează monitorizarea modificărilor pentru interogări de citire rapidă și consum redus de RAM."},
                {"term": "DbSet<T>", "def": "Colecție ce mapează o tabelă din baza de date și expune capabilități LINQ to SQL."},
                {"term": "Change Tracker", "def": "Mecanism intern din EF Core ce detectează proprietățile modificate pentru a genera comenzi UPDATE."},
                {"term": "Include()", "def": "Realizează Eager Loading (LEFT JOIN) pentru a încărca relațiile conexe într-o singură interogare."}
            ],
            "matchingPairs": [
                {"left": "db.Users.AsNoTracking()", "right": "Interogare optimizată fără monitorizare de memorie"},
                {"left": "db.Orders.Include(o => o.Items)", "right": "Eager Loading pentru relația cu articolele comenzii"},
                {"left": "await db.SaveChangesAsync()", "right": "Execută tranzacțional toate modificările în baza de date"},
                {"left": "dotnet ef migrations add Initial", "right": "Generează scriptul C# de sincronizare a tabelelor"}
            ],
            "quiz": {
                "question": "De ce este recomandat să folosești '.AsNoTracking()' în interogările EF Core care doar afișează date (read-only)?",
                "options": [
                    "Dezactivează Change Tracker-ul intern, reducând consumul de RAM și sporind viteza de execuție.",
                    "Șterge baza de date pentru a elibera spațiul pe disc.",
                    "AsNoTracking face interogarea să ruleze doar pe dischete floppy.",
                    "Este obligatoriu doar dacă tabela are peste 10 coloane."
                ],
                "correctIndex": 0,
                "explanation": "Monitorizarea entităților consumă memorie și cicluri CPU. Dacă doar returnezi date într-un API GET, AsNoTracking oferă un boost considerabil de performanță."
            },
            "prompt": "Aplică optimizarea 'AsNoTracking()' pe tabela 'db.Users' apelând 'db.Users.AsNoTracking().ToListAsync();'.",
            "task": "Aplică optimizarea 'AsNoTracking()' pe tabela 'db.Users' apelând 'db.Users.AsNoTracking().ToListAsync();'.",
            "example": "var list = await db.Users.AsNoTracking().ToListAsync();",
            "starterCode": "var list = await db.Users.AsNoTracking().ToListAsync();",
            "officialSolution": "var list = await db.Users.AsNoTracking().ToListAsync();",
            "expectedOutputPattern": "db\\.Users\\.AsNoTracking\\(\\)\\.ToListAsync\\(\\);?",
            "regexPattern": "db\\.Users\\.AsNoTracking\\(\\)\\.ToListAsync\\(\\);?",
            "hint": "Scrie db.Users.AsNoTracking().ToListAsync();"
        },
        {
            "id": "cs-new-12",
            "track": "C#",
            "division": "Informatică și Programare",
            "icon": "🔷",
            "level": "5. Arhitect / Exemplar",
            "xp": 75,
            "title": "Capitolul 12: High-Performance C#: 'Span<T>', 'Memory<T>' & Zero Alocări",
            "theory": """
<p><code>Span&lt;T&gt;</code> și <code>ReadOnlySpan&lt;T&gt;</code> reprezintă revoluția de performanță din C# modern: oferă ferestre continue sigure peste memorie (Stack, Heap sau native memory) fără alocări secundare ($O(1)$ memory overhead).</p>

<pre><code>// Exemplu 1: Parsarea unui șir de caractere cu Zero Alocări Heap
string dataStr = "2025-10-15";
ReadOnlySpan&lt;char&gt; span = dataStr.AsSpan();

// Extragere felii (slices) de memorie fără a crea noi obiecte string:
ReadOnlySpan&lt;char&gt; anSpan = span.Slice(0, 4);
ReadOnlySpan&lt;char&gt; lunaSpan = span.Slice(5, 2);
ReadOnlySpan&lt;char&gt; ziSpan = span.Slice(8, 2);

int anul = int.Parse(anSpan);
int luna = int.Parse(lunaSpan);
Console.WriteLine($"Data decodată: {ziSpan.ToString()}/{luna}/{anul}");
// Memorie alocată pe Heap: ZERO octeți!
</code></pre>
""",
            "glossary": [
                {"term": "Span<T>", "def": "Structură 'ref struct' alocată exclusiv pe Stack ce reprezintă o fereastră contiguă de memorie mutabilă."},
                {"term": "ReadOnlySpan<T>", "def": "Versiunea imutabilă a lui Span, utilizată pentru felierea (slicing) eficientă a șirurilor string."},
                {"term": "Memory<T>", "def": "Echivalentul lui Span ce poate fi stocat pe Heap și folosit în operațiuni asincrone (async/await)."},
                {"term": "Zero-Allocation", "def": "Cod de înaltă performanță ce execută operațiuni I/O sau parsare fără a declanșa Garbage Collector-ul."}
            ],
            "matchingPairs": [
                {"left": "text.AsSpan()", "right": "Creează un ReadOnlySpan fără alocare pe Heap"},
                {"left": "span.Slice(start, length)", "right": "Extrage o secțiune de memorie în O(1)"},
                {"left": "ref struct Span<T>", "right": "Garantează alocarea exclusivă pe Stack"},
                {"left": "Memory<T>", "right": "Versiune de Span compatibilă cu async/await"}
            ],
            "quiz": {
                "question": "De ce este 'Span<T>' declarat ca 'ref struct' în limbajul C#?",
                "options": [
                    "Pentru a garanta că este alocat exclusiv pe Stack și nu poate scăpa în memoria Heap, asigurând zero alocări de gunoi (GC).",
                    "Pentru a forța compilatorul să-l salveze pe disc.",
                    "Pentru a funcționa doar cu tipul boolean.",
                    "Pentru a permite moștenirea multiplă."
                ],
                "correctIndex": 0,
                "explanation": "Ca 'ref struct', Span<T> nu poate fi boxat, nu poate fi câmp într-o clasă obișnuită și nu poate fi folosit în metode asincrone, garantând siguranță absolută a memoriei pe Stack."
            },
            "prompt": "Convertește stringul 'rawText' într-un 'ReadOnlySpan<char>' apelând 'rawText.AsSpan();'.",
            "task": "Convertește stringul 'rawText' într-un 'ReadOnlySpan<char>' apelând 'rawText.AsSpan();'.",
            "example": "ReadOnlySpan<char> span = rawText.AsSpan();",
            "starterCode": "ReadOnlySpan<char> span = rawText.AsSpan();",
            "officialSolution": "ReadOnlySpan<char> span = rawText.AsSpan();",
            "expectedOutputPattern": "span\\s*=\\s*rawText\\.AsSpan\\(\\);?",
            "regexPattern": "span\\s*=\\s*rawText\\.AsSpan\\(\\);?",
            "hint": "Scrie ReadOnlySpan<char> span = rawText.AsSpan();"
        }
    ]
