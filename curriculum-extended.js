// Enciclopedia Extinsă: Module Avansate & Familie & Hobby
const EXTENDED_MODULES = [
  {
    "id": "java-b1",
    "track": "Java",
    "icon": "☕",
    "level": "1. Începător",
    "xp": 20,
    "title": "Variabile, Tipuri Primitive și Afișare",
    "theory": "În Java, orice variabilă trebuie declarată cu un tip de date strict: <code>int</code> (numere întregi), <code>double</code> (numere cu virgulă), <code>boolean</code> (<code>true</code>/<code>false</code>), <code>char</code> (un caracter între apostrofuri) și <code>String</code> (text între ghilimele duble).",
    "example": "int count = 10;\ndouble price = 19.99;\nboolean isActive = true;\nSystem.out.println(\"Total: \" + count);",
    "prompt": "Declară o variabilă de tip 'int' numită 'limit' și inițializeaz-o cu valoarea 100 (nu uita punctul și virgula).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "int limit = 100;"
    ],
    "officialSolution": "int limit = 100;",
    "explanation": "Sintaxa de bază în Java impune ordinea: tipul (int), numele variabilei (limit), operatorul '=' și valoarea terminată cu ';'.",
    "hint": "Scrie exact: int limit = 100;"
  },
  {
    "id": "java-b2",
    "track": "Java",
    "icon": "☕",
    "level": "1. Începător",
    "xp": 20,
    "title": "Decizii Ramificate: if / else și Operatorul Ternar",
    "theory": "Instrucțiunea <code>if (condiție)</code> execută un bloc doar dacă expresia booleană este adevărată. Pentru atribuiri rapide pe o singură linie se folosește operatorul ternar: <code>tip rezultat = (condiție) ? valoareAdevărat : valoareFals;</code>.",
    "example": "int score = 75;\nString status = (score >= 50) ? \"Promovat\" : \"Respins\";",
    "prompt": "Folosind operatorul ternar, atribuie variabilei 'String role' valoarea \"Admin\" dacă 'level > 5', altfel \"User\".",
    "caseSensitive": true,
    "acceptedAnswers": [
      "String role = (level > 5) ? \"Admin\" : \"User\";",
      "String role = level > 5 ? \"Admin\" : \"User\";"
    ],
    "officialSolution": "String role = (level > 5) ? \"Admin\" : \"User\";",
    "explanation": "Operatorul ternar evaluează condiția level > 5; dacă este true, returnează primul operand după '?', altfel pe cel de după ':'.",
    "hint": "Model: String role = (level > 5) ? \"Admin\" : \"User\";"
  },
  {
    "id": "java-b3",
    "track": "Java",
    "icon": "☕",
    "level": "1. Începător",
    "xp": 25,
    "title": "Capitolul 3: Controlul Fluxului — Buclele FOR, WHILE și DO-WHILE în Detaliu",
    "theory": "\n      <p>Buclele sunt structurile fundamentale care permit executarea repetată a unui bloc de instrucțiuni atât timp cât o condiție booleană rămâne adevărată. În Java avem patru forme principale:</p>\n      <h4>1. Bucla <code>for</code> clasică (cu contor)</h4>\n      <p>Se folosește atunci când știm exact de câte ori trebuie să repetăm acțiunea. Antetul conține trei secțiuni separate prin punct și virgulă: <code>for (inițializare; condiție; pas)</code>. Inițializarea se execută o singură dată la început; condiția este testată înaintea fiecărei iterații; pasul (<code>i++</code> sau <code>i--</code>) se execută la finalul fiecărei iterații.</p>\n      <h4>2. Bucla <code>while</code> vs. <code>do-while</code></h4>\n      <p>Bucla <code>while (condiție) { ... }</code> evaluează condiția <strong>la intrare</strong> (dacă este falsă de la început, corpul nu se execută niciodată). În schimb, <code>do { ... } while (condiție);</code> evaluează condiția <strong>la ieșire</strong>, garantând cel puțin o execuție.</p>\n    ",
    "glossary": [
      {
        "term": "for (int i = 0; i < N; i++)",
        "def": "Buclă cu contor explicit: start, prag de oprire și incrementare."
      },
      {
        "term": "while (condiție)",
        "def": "Repetă blocul cât timp condiția este true (0 sau mai multe execuții)."
      },
      {
        "term": "do { ... } while (cond);",
        "def": "Execută blocul cel puțin o dată înainte de a verifica condiția."
      },
      {
        "term": "break / continue",
        "def": "Oprește complet bucla (break) sau sare la iterația următoare (continue)."
      }
    ],
    "example": "// Exemplu Asemănător (buclă for de la 0 la 4):\nfor (int k = 0; k < 5; k++) {\n  System.out.println(k);\n}",
    "prompt": "Scrie antetul unei bucle 'for' în Java care declară contorul 'int i = 1', rulează cât timp 'i <= 10' și îl incrementează cu 'i++', urmat de acolada deschisă '{'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "for (int i = 1; i <= 10; i++) {",
      "for(int i = 1; i <= 10; i++) {"
    ],
    "officialSolution": "for (int i = 1; i <= 10; i++) {",
    "explanation": "Cele trei expresii din paranteza for sunt separate prin ';' și definesc pornirea de la 1, condiția <= 10 și pasul i++.",
    "hint": "Înlocuiește în exemplul asemănător variabila cu i, valoarea de pornire cu 1 și condiția cu i <= 10.",
    "matchingPairs": [
      {
        "left": "int i = 1",
        "right": "Expresia de inițializare (rulează o singură dată)"
      },
      {
        "left": "i <= 10",
        "right": "Condiția de continuare a buclei"
      },
      {
        "left": "i++",
        "right": "Pasul de incrementare după fiecare iterație"
      },
      {
        "left": "break;",
        "right": "Întrerupe imediat execuția buclei"
      }
    ],
    "quiz": {
      "question": "De câte ori se va executa corpul unei bucle 'do { ... } while (false);' în Java?",
      "options": [
        "Exact o dată, deoarece condiția este verificată la sfârșit",
        "Niciodată (0 ori)",
        "La infinit",
        "Nu compilează"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "java-b4",
    "track": "Java",
    "icon": "☕",
    "level": "1. Începător",
    "xp": 25,
    "title": "Bucla WHILE și DO-WHILE: Repetiție Condiționată",
    "theory": "Bucla <code>while (condiție)</code> verifică condiția <strong>înainte</strong> de fiecare iterație (dacă este falsă de la început, nu se execută niciodată). În schimb, <code>do { ... } while (condiție);</code> execută corpul buclei <strong>cel puțin o dată</strong> înainte de a testa condiția.",
    "example": "int n = 5;\nwhile (n > 0) {\n  System.out.println(n);\n  n--;\n}",
    "prompt": "Scrie o buclă 'while' pe o singură linie care scade variabila 'energy' (energy--;) atât timp cât 'energy > 0'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "while (energy > 0) { energy--; }",
      "while(energy > 0) { energy--; }"
    ],
    "officialSolution": "while (energy > 0) { energy--; }",
    "explanation": "Cât timp condiția (energy > 0) este adevărată, instrucțiunea energy--; decrementează variabila pentru a evita o buclă infinită.",
    "hint": "Scrie: while (energy > 0) { energy--; }"
  },
  {
    "id": "java-b5",
    "track": "Java",
    "icon": "☕",
    "level": "1. Începător",
    "xp": 25,
    "title": "Tablouri (Arrays) și Bucla Enhanced For-Each",
    "theory": "Un tablou stochează mai multe valori de același tip: <code>int[] nums = {10, 20, 30};</code>. Pentru a parcurge toate elementele fără a folosi indecși, Java oferă bucla <em>for-each</em>: <code>for (Tip element : tablou) { ... }</code>.",
    "example": "String[] langs = {\"SQL\", \"Java\", \"JS\"};\nfor (String lang : langs) {\n  System.out.println(lang);\n}",
    "prompt": "Scrie antetul unei bucle for-each care parcurge fiecare 'int n' din tabloul 'numbers', urmat de '{'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "for (int n : numbers) {",
      "for(int n : numbers) {"
    ],
    "officialSolution": "for (int n : numbers) {",
    "explanation": "Sintaxa for (int n : numbers) citește secvențial fiecare valoare din tabloul 'numbers' în variabila locală 'n'.",
    "hint": "Folosește două puncte ':' între declarația elementului și numele tabloului: for (int n : numbers) {"
  },
  {
    "id": "java-j1",
    "track": "Java",
    "icon": "☕",
    "level": "2. Junior",
    "xp": 30,
    "title": "Switch Expressions Moderne (Java 14+)",
    "theory": "În versiunile moderne de Java, instrucțiunea <code>switch</code> poate folosi săgeți <code>-></code> fără a mai necesita <code>break;</code>, prevenind căderea accidentală pe cazul următor (<em>fall-through</em>) și putând returna direct o valoare.",
    "example": "String dayType = switch (day) {\n  case 1, 2, 3, 4, 5 -> \"Workday\";\n  case 6, 7 -> \"Weekend\";\n  default -> \"Invalid\";\n};",
    "prompt": "Scrie ramura 'case 1 -> \"Start\";' într-un switch modern Java.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "case 1 -> \"Start\";"
    ],
    "officialSolution": "case 1 -> \"Start\";",
    "explanation": "Sintaxa cu săgeată (->) execută doar expresia din dreapta și iese automat din switch.",
    "hint": "Scrie exact: case 1 -> \"Start\";"
  },
  {
    "id": "java-j2",
    "track": "Java",
    "icon": "☕",
    "level": "2. Junior",
    "xp": 30,
    "title": "Interfețe și Contracte Multiple (implements)",
    "theory": "Deși Java permite moștenirea unei singure clase cu <code>extends</code>, o clasă poate implementa oricâte interfețe folosind cuvântul-cheie <code>implements</code>, garantând că oferă implementare pentru toate metodele din contract.",
    "example": "interface Payable { double calculatePay(); }\ninterface Auditable { void logAudit(); }\n\npublic class Contractor implements Payable, Auditable {\n  public double calculatePay() { return 500.0; }\n  public void logAudit() {}\n}",
    "prompt": "Scrie antetul clasei publice 'Invoice' care implementează interfața 'Payable' și deschide acolada '{'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "public class Invoice implements Payable {",
      "class Invoice implements Payable {"
    ],
    "officialSolution": "public class Invoice implements Payable {",
    "explanation": "Cuvântul-cheie 'implements' leagă clasa concretă Invoice de contractul definit în interfața Payable.",
    "hint": "Folosește: public class Invoice implements Payable {"
  },
  {
    "id": "java-m1",
    "track": "Java",
    "icon": "☕",
    "level": "3. Middle",
    "xp": 40,
    "title": "Colecții Generice: HashMap și ArrayList",
    "theory": "Spre deosebire de tablourile cu dimensiune fixă, <code>ArrayList&lt;T&gt;</code> se redimensionează dinamic, iar <code>HashMap&lt;K, V&gt;</code> stochează perechi cheie-valoare cu timp de căutare $O(1)$ în medie.",
    "example": "Map<String, Integer> scores = new HashMap<>();\nscores.put(\"Alex\", 95);\nint val = scores.getOrDefault(\"Alex\", 0);",
    "prompt": "Inițializează o listă generică 'List<String> names' folosind 'new ArrayList<>();'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "List<String> names = new ArrayList<>();",
      "ArrayList<String> names = new ArrayList<>();"
    ],
    "officialSolution": "List<String> names = new ArrayList<>();",
    "explanation": "Programarea la interfață (List<String> în stânga, new ArrayList<>() în dreapta cu operatorul diamant <>) este standardul în ingineria Java.",
    "hint": "Scrie: List<String> names = new ArrayList<>();"
  },
  {
    "id": "java-m2",
    "track": "Java",
    "icon": "☕",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 4: Java Streams API, Expresii Lambda și Records Imutabile",
    "theory": "\n      <p>Începând cu Java 8 și consolidat în Java 17/21 LTS, limbajul îmbină programarea orientată pe obiecte cu <strong>programarea funcțională</strong> prin <code>Stream API</code> și <code>Records</code>.</p>\n      <h4>Conducte de procesare (Stream Pipelines)</h4>\n      <p>Un <code>Stream&lt;T&gt;</code> nu stochează date și nu modifică lista sursă, ci trece elementele printr-o secvență de operații intermediare leneșe (<em>lazy</em>), precum <code>.filter(predicat)</code>, <code>.map(funcție)</code> sau <code>.sorted()</code>, finalizându-se cu o operație terminală precum <code>.toList()</code> sau <code>.reduce()</code>.</p>\n    ",
    "glossary": [
      {
        "term": "list.stream()",
        "def": "Deschide un flux secvențial de procesare peste o colecție."
      },
      {
        "term": ".filter(x -> cond)",
        "def": "Operație intermediară care păstrează elementele ce satisfac predicatul."
      },
      {
        "term": ".toList()",
        "def": "Operație terminală (Java 16+) care colectează fluxul într-o listă imutabilă."
      },
      {
        "term": "public record R(int a) {}",
        "def": "Clasă de date imutabilă cu constructor, getters și equals/hashCode auto-generate."
      }
    ],
    "example": "// Exemplu Asemănător:\nList<String> valid = items.stream().filter(x -> x != null).toList();",
    "prompt": "Pornind de la 'names.stream()', filtrează cu '.filter()' doar șirurile 's' care NU sunt goale ('!s.isEmpty()') și colectează rezultatul cu '.toList();'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "names.stream().filter(s -> !s.isEmpty()).toList();",
      "names.stream().filter(s -> !s.isEmpty()).toList()"
    ],
    "officialSolution": "names.stream().filter(s -> !s.isEmpty()).toList();",
    "explanation": "Expresia lambda s -> !s.isEmpty() elimină șirurile vide, iar .toList() închide conducta Stream.",
    "hint": "Înlănțuie cele trei apeluri: names.stream(), apoi .filter(...) cu predicatul cerut și .toList();",
    "matchingPairs": [
      {
        "left": ".stream()",
        "right": "Creează fluxul din colecția sursă"
      },
      {
        "left": ".filter(s -> ...)",
        "right": "Operație intermediară de selecție"
      },
      {
        "left": ".map(s -> ...)",
        "right": "Operație intermediară de transformare"
      },
      {
        "left": ".toList()",
        "right": "Operație terminală care produce lista finală"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă cu operațiile intermediare (.filter, .map) dintr-un Stream Java dacă nu apelăm o operație terminală (precum .toList() sau .count())?",
      "options": [
        "Nu se execută deloc, deoarece operațiile intermediare sunt evaluate leneș (lazy evaluation)",
        "Aruncă NullPointerException",
        "Modifică lista originală pe loc",
        "Blochează firul de execuție"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "java-m3",
    "track": "Java",
    "icon": "☕",
    "level": "3. Middle",
    "xp": 45,
    "title": "Gestionarea Excepțiilor și try-with-resources",
    "theory": "Blocul <code>try (Resursă r = ...) { ... } catch (Exception e) { ... }</code> închide automat resursele care implementează <code>AutoCloseable</code> (conexiuni SQL, fișiere), prevenind scurgerile de memorie chiar și atunci când apare o excepție.",
    "example": "try (BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"))) {\n  System.out.println(br.readLine());\n} catch (IOException e) {\n  e.printStackTrace();\n}",
    "prompt": "Aruncă explicit o excepție de tip 'IllegalArgumentException' cu mesajul \"Invalid ID\" folosind cuvântul-cheie 'throw new'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "throw new IllegalArgumentException(\"Invalid ID\");"
    ],
    "officialSolution": "throw new IllegalArgumentException(\"Invalid ID\");",
    "explanation": "Instrucțiunea 'throw new' instanțiază și propagă imediat obiectul excepției pe stiva de apeluri.",
    "hint": "Scrie: throw new IllegalArgumentException(\"Invalid ID\");"
  },
  {
    "id": "java-s1",
    "track": "Java",
    "icon": "☕",
    "level": "4. Senior",
    "xp": 55,
    "title": "Java Records (Purtători Imutabili de Date)",
    "theory": "Un <code>record</code> în Java (introdus stabil în Java 16) generează automat câmpuri <code>private final</code>, constructorul canonic, metodele de acces, precum și implementările <code>equals()</code>, <code>hashCode()</code> și <code>toString()</code> într-o singură linie.",
    "example": "public record UserDto(Long id, String email) {}",
    "prompt": "Declară un record public numit 'Point' cu două componente: 'int x' și 'int y', urmat de '{}'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "public record Point(int x, int y) {}",
      "record Point(int x, int y) {}"
    ],
    "officialSolution": "public record Point(int x, int y) {}",
    "explanation": "Un record elimină zeci de linii de cod boilerplate și garantează imutabilitatea superficială a datelor.",
    "hint": "Scrie: public record Point(int x, int y) {}"
  },
  {
    "id": "java-s2",
    "track": "Java",
    "icon": "☕",
    "level": "4. Senior",
    "xp": 60,
    "title": "Programare Asincronă cu CompletableFuture",
    "theory": "Pentru operații neblocante în sisteme distribuite, <code>CompletableFuture.supplyAsync(() -&gt; ...)</code> execută sarcina pe un fir de execuție din <code>ForkJoinPool.commonPool()</code>, permițând înlănțuirea cu <code>.thenApply()</code> și <code>.exceptionally()</code>.",
    "example": "CompletableFuture.supplyAsync(() -> fetchOrder(101))\n  .thenApply(order -> calculateTax(order))\n  .thenAccept(System.out::println);",
    "prompt": "Lansează un calcul asincron care returnează valoarea 42 folosind 'CompletableFuture.supplyAsync(() -> 42);'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "CompletableFuture.supplyAsync(() -> 42);",
      "CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> 42);"
    ],
    "officialSolution": "CompletableFuture.supplyAsync(() -> 42);",
    "explanation": "Metoda statică supplyAsync primește un Supplier<U> și returnează imediat un CompletableFuture fără a bloca firul curent.",
    "hint": "Scrie: CompletableFuture.supplyAsync(() -> 42);"
  },
  {
    "id": "java-e1",
    "track": "Java",
    "icon": "☕",
    "level": "5. Exemplar",
    "xp": 75,
    "title": "Arhitectură Concurrency: volatile și Double-Checked Locking",
    "theory": "La nivel de arhitect JVM, cuvântul-cheie <code>volatile</code> garantează vizibilitatea modificărilor între firele de execuție (citire/scriere directă din memoria principală, nu din cache-ul CPU) și interzice reordonarea instrucțiunilor de către compilatorul JIT la instanțierea unui Singleton.",
    "example": "public class Engine {\n  private static volatile Engine instance;\n  public static Engine getInstance() {\n    if (instance == null) {\n      synchronized (Engine.class) {\n        if (instance == null) instance = new Engine();\n      }\n    }\n    return instance;\n  }\n}",
    "prompt": "Declară câmpul static privat și volatil de tip 'Config' numit 'instance' pentru un Singleton thread-safe.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "private static volatile Config instance;",
      "private volatile static Config instance;"
    ],
    "officialSolution": "private static volatile Config instance;",
    "explanation": "Fără modificatorul 'volatile', un alt fir de execuție ar putea vedea o referință nenulă către un obiect parțial construit din cauza reordonării instrucțiunilor în JVM.",
    "hint": "Folosește toți modificatorii: private static volatile Config instance;"
  },
  {
    "id": "sql-b1",
    "track": "SQL",
    "icon": "🗄️",
    "level": "1. Începător",
    "xp": 20,
    "title": "UPDATE și DELETE cu Filtrare Sigură WHERE",
    "theory": "Comanda <code>UPDATE tabel SET col = val WHERE condiție;</code> modifică rândurile existente, iar <code>DELETE FROM tabel WHERE condiție;</code> le șterge. Atenție: omiterea clauzei <code>WHERE</code> va modifica sau șterge <strong>toate înregistrările din tabel</strong>!",
    "example": "UPDATE Products\nSET Price = 29.99\nWHERE ProductID = 105;\n\nDELETE FROM Logs WHERE CreatedYear < 2020;",
    "prompt": "Scrie o comandă SQL care actualizează tabelul 'Users', setând coloana 'Active = 0' doar acolo unde 'UserID = 10'.",
    "caseSensitive": false,
    "acceptedAnswers": [
      "UPDATE Users SET Active = 0 WHERE UserID = 10;",
      "UPDATE Users SET Active = 0 WHERE UserID = 10"
    ],
    "officialSolution": "UPDATE Users SET Active = 0 WHERE UserID = 10;",
    "explanation": "Clauza WHERE UserID = 10 izolează actualizarea la un singur rând, protejând restul tabelului.",
    "hint": "Structura este: UPDATE Users SET Active = 0 WHERE UserID = 10;"
  },
  {
    "id": "sql-j1",
    "track": "SQL",
    "icon": "🗄️",
    "level": "2. Junior",
    "xp": 30,
    "title": "Funcții de Agregare, GROUP BY și HAVING",
    "theory": "Funcțiile <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code> grupează rândurile prin <code>GROUP BY</code>. Regula de aur: <code>WHERE</code> filtrează rândurile <strong>înainte</strong> de grupare, în timp ce <code>HAVING</code> filtrează grupurile <strong>după</strong> aplicarea funcției de agregare.",
    "example": "SELECT Department, COUNT(*) AS TotalEmp\nFROM Employees\nGROUP BY Department\nHAVING COUNT(*) > 5;",
    "prompt": "Selectează 'Country' și 'COUNT(*)' din tabelul 'Customers', grupate după 'Country', păstrând cu HAVING doar țările cu 'COUNT(*) > 10'.",
    "caseSensitive": false,
    "acceptedAnswers": [
      "SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 10;",
      "SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 10"
    ],
    "officialSolution": "SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 10;",
    "explanation": "Deoarece filtrarea se bazează pe rezultatul agregat COUNT(*), trebuie utilizată clauza HAVING, nu WHERE.",
    "hint": "Scrie: SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 10;"
  },
  {
    "id": "sql-j2",
    "track": "SQL",
    "icon": "🗄️",
    "level": "2. Junior",
    "xp": 35,
    "title": "INNER JOIN vs LEFT JOIN pe Tabele Relaționale",
    "theory": "<code>INNER JOIN</code> returnează doar rândurile care au corespondent în ambele tabele. <code>LEFT JOIN</code> returnează toate rândurile din tabelul din stânga, completând cu <code>NULL</code> coloanele din dreapta dacă nu există potrivire.",
    "example": "SELECT u.Name, o.OrderID\nFROM Users u\nLEFT JOIN Orders o ON u.UserID = o.UserID;",
    "prompt": "Scrie o interogare care selectează '*' din 'Orders' și face 'INNER JOIN' cu tabelul 'Customers' pe condiția 'Orders.CustomerID = Customers.CustomerID'.",
    "caseSensitive": false,
    "acceptedAnswers": [
      "SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
      "SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID",
      "SELECT * FROM Orders JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
      "SELECT * FROM Orders JOIN Customers ON Orders.CustomerID = Customers.CustomerID"
    ],
    "officialSolution": "SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
    "explanation": "Clauza ON specifică cheia străină și cheia primară prin care cele două tabele sunt corelate.",
    "hint": "Folosește: SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
  },
  {
    "id": "sql-m1",
    "track": "SQL",
    "icon": "🗄️",
    "level": "3. Middle",
    "xp": 45,
    "title": "Expresii Condiționale CASE WHEN și COALESCE",
    "theory": "Expresia <code>CASE WHEN condiție THEN rezultat ELSE alt_rezultat END</code> introduce logica if-else direct în proiecția SQL, iar <code>COALESCE(col, valoare_rezervă)</code> înlocuiește prima valoare <code>NULL</code> întâlnită cu o valoare implicită.",
    "example": "SELECT Name,\n  COALESCE(Phone, 'Fără telefon') AS Contact,\n  CASE WHEN Salary > 5000 THEN 'Senior' ELSE 'Standard' END AS Tier\nFROM Staff;",
    "prompt": "Folosește funcția COALESCE într-un SELECT pentru a returna coloana 'Discount' sau valoarea 0 dacă aceasta este NULL, din tabelul 'Sales'.",
    "caseSensitive": false,
    "acceptedAnswers": [
      "SELECT COALESCE(Discount, 0) FROM Sales;",
      "SELECT COALESCE(Discount, 0) FROM Sales"
    ],
    "officialSolution": "SELECT COALESCE(Discount, 0) FROM Sales;",
    "explanation": "COALESCE previne propagarea valorilor NULL în calculele aritmetice ulterioare.",
    "hint": "Scrie: SELECT COALESCE(Discount, 0) FROM Sales;"
  },
  {
    "id": "sql-s1",
    "track": "SQL",
    "icon": "🗄️",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 4: JOIN-uri Relaționale, GROUP BY / HAVING și Window Functions",
    "theory": "\n      <p>La nivel avansat, interogările SQL corelează mai multe tabele și calculează indicatori analitici complecși:</p>\n      <h4>1. INNER JOIN vs. LEFT JOIN</h4>\n      <p><code>INNER JOIN</code> păstrează doar rândurile care au corespondent în ambele tabele pe condiția din <code>ON</code>. <code>LEFT JOIN</code> păstrează absolut toate rândurile din tabelul din stânga, punând <code>NULL</code> în coloanele tabelului din dreapta atunci când nu există potrivire (de exemplu, clienții care nu au plasat încă nicio comandă).</p>\n      <h4>2. Window Functions (OVER PARTITION BY)</h4>\n      <p>Spre deosebire de <code>GROUP BY</code>, care comprimă rândurile unui grup într-un singur rând sumar, funcțiile fereastră precum <code>ROW_NUMBER() OVER (ORDER BY Salary DESC)</code> sau <code>RANK()</code> calculează clasamentul păstrând fiecare rând individual intact.</p>\n    ",
    "glossary": [
      {
        "term": "INNER JOIN ... ON",
        "def": "Returnează intersecția dintre două tabele pe cheia comună."
      },
      {
        "term": "LEFT JOIN ... ON",
        "def": "Returnează tot tabelul stâng + potrivirile din tabelul drept (sau NULL)."
      },
      {
        "term": "HAVING COUNT(*) > 5",
        "def": "Filtrează grupurile formate de GROUP BY după agregare."
      },
      {
        "term": "ROW_NUMBER() OVER (...)",
        "def": "Atribuie un număr secvențial fiecărui rând în fereastra ordonată."
      }
    ],
    "example": "-- Exemplu Asemănător:\nSELECT RANK() OVER (ORDER BY Points DESC) FROM Players;",
    "prompt": "Scrie o interogare SELECT care calculează 'ROW_NUMBER() OVER (ORDER BY Salary DESC)' din tabelul 'Employees'.",
    "caseSensitive": false,
    "acceptedAnswers": [
      "SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) FROM Employees;",
      "SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) FROM Employees"
    ],
    "officialSolution": "SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) FROM Employees;",
    "explanation": "Funcția fereastră ROW_NUMBER() necesită clauza OVER (ORDER BY Salary DESC) pentru a numerota angajații în ordinea descrescătoare a salariului.",
    "hint": "Urmează exact structura din exemplul cu Players, dar folosește funcția ROW_NUMBER(), coloana Salary DESC și tabelul Employees.",
    "matchingPairs": [
      {
        "left": "WHERE",
        "right": "Filtrează rândurile individuale înainte de grupare"
      },
      {
        "left": "HAVING",
        "right": "Filtrează grupurile după aplicarea COUNT/SUM/AVG"
      },
      {
        "left": "LEFT JOIN",
        "right": "Păstrează toate rândurile din tabelul din stânga"
      },
      {
        "left": "OVER (PARTITION BY ...)",
        "right": "Definește fereastra pentru o funcție analitică"
      }
    ],
    "quiz": {
      "question": "De ce nu putem scrie 'WHERE COUNT(*) > 10' într-o interogare SQL?",
      "options": [
        "Deoarece clauza WHERE se execută înainte de GROUP BY; funcțiile de agregare se filtrează cu HAVING",
        "Deoarece COUNT(*) funcționează doar în MySQL",
        "Deoarece numerele mai mari ca 10 trebuie puse între ghilimele",
        "Deoarece COUNT(*) poate fi folosit doar în UPDATE"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "sql-s2",
    "track": "SQL",
    "icon": "🗄️",
    "level": "4. Senior",
    "xp": 60,
    "title": "Common Table Expressions (WITH / CTE)",
    "theory": "Un CTE definit prin clauza <code>WITH NumeCTE AS (SELECT ...)</code> creează un set de rezultate temporar și lizibil care poate fi interogat ca un tabel obișnuit sau chiar auto-referențiat recursiv pentru parcurgerea arborilor organizaționali.",
    "example": "WITH HighValueOrders AS (\n  SELECT CustomerID, Total FROM Orders WHERE Total > 1000\n)\nSELECT CustomerID, COUNT(*) FROM HighValueOrders GROUP BY CustomerID;",
    "prompt": "Definește un CTE numit 'ActiveUsers' care selectează '*' din 'Users' unde 'Active = 1', apoi selectează '*' din 'ActiveUsers'.",
    "caseSensitive": false,
    "acceptedAnswers": [
      "WITH ActiveUsers AS (SELECT * FROM Users WHERE Active = 1) SELECT * FROM ActiveUsers;",
      "WITH ActiveUsers AS (SELECT * FROM Users WHERE Active = 1) SELECT * FROM ActiveUsers"
    ],
    "officialSolution": "WITH ActiveUsers AS (SELECT * FROM Users WHERE Active = 1) SELECT * FROM ActiveUsers;",
    "explanation": "CTE-urile înlocuiesc subinterogările greu de citit și permit modularizarea interogărilor complexe de raportare.",
    "hint": "Scrie: WITH ActiveUsers AS (SELECT * FROM Users WHERE Active = 1) SELECT * FROM ActiveUsers;"
  },
  {
    "id": "sql-e1",
    "track": "SQL",
    "icon": "🗄️",
    "level": "5. Exemplar",
    "xp": 75,
    "title": "Arhitectură DBA: Covering Indexes și Tranzacții Izolate",
    "theory": "Un <strong>Covering Index</strong> include toate coloanele cerute de o interogare (prin clauza <code>INCLUDE</code> în SQL Server / PostgreSQL), permițând motorului de stocare să răspundă exclusiv din arborele B-Tree (<em>Index-Only Scan</em>) fără a mai accesa pagina de tabel (<em>Key Lookup / Heap Fetch</em>).",
    "example": "CREATE INDEX IX_Orders_CustomerDate\nON Orders (CustomerID, OrderDate)\nINCLUDE (TotalAmount, Status);",
    "prompt": "Creează un index numit 'IX_Users_Email' pe tabelul 'Users' pentru coloana '(Email)' care include coloana '(FullName)' folosind clauza INCLUDE.",
    "caseSensitive": false,
    "acceptedAnswers": [
      "CREATE INDEX IX_Users_Email ON Users (Email) INCLUDE (FullName);",
      "CREATE INDEX IX_Users_Email ON Users (Email) INCLUDE (FullName)"
    ],
    "officialSolution": "CREATE INDEX IX_Users_Email ON Users (Email) INCLUDE (FullName);",
    "explanation": "Coloana Email devine cheia de căutare în B-Tree, iar FullName este stocată doar la nivelul nodurilor frunză pentru a elimina accesul la tabel.",
    "hint": "Scrie: CREATE INDEX IX_Users_Email ON Users (Email) INCLUDE (FullName);"
  },
  {
    "id": "js-b1",
    "track": "JavaScript",
    "icon": "🟨",
    "level": "1. Începător",
    "xp": 20,
    "title": "Buclele for, for...of și while în JavaScript",
    "theory": "În JavaScript modern, pe lângă bucla clasică <code>for (let i = 0; i &lt; arr.length; i++)</code> și bucla <code>while</code>, parcurgerea valorilor dintr-un tablou sau șir de caractere se face cel mai curat cu <code>for (const item of iterable)</code>.",
    "example": "const scores = [10, 20, 30];\nlet total = 0;\nfor (const s of scores) {\n  total += s;\n}",
    "prompt": "Scrie antetul unei bucle 'for...of' care declară 'const user of users' și deschide acolada '{'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "for (const user of users) {",
      "for(const user of users) {",
      "for (let user of users) {"
    ],
    "officialSolution": "for (const user of users) {",
    "explanation": "Bucla for...of iterează direct peste valorile elementelor din tablou, spre deosebire de for...in care iterează peste cheile/indecșii obiectului.",
    "hint": "Scrie: for (const user of users) {"
  },
  {
    "id": "js-j1",
    "track": "JavaScript",
    "icon": "🟨",
    "level": "2. Junior",
    "xp": 30,
    "title": "Operatorul Spread (...) și Clonarea Imutabilă",
    "theory": "Operatorul <code>...</code> (<em>spread</em>) despachetează elementele unui tablou sau proprietățile unui obiect într-o structură nouă, fiind esențial pentru actualizarea imutabilă a stării fără a modifica obiectul original.",
    "example": "const baseConfig = { theme: 'dark', retries: 3 };\nconst prodConfig = { ...baseConfig, retries: 5 };",
    "prompt": "Combină tablourile 'a' și 'b' într-o constantă nouă 'merged' folosind operatorul spread '[...a, ...b]'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const merged = [...a, ...b];",
      "const merged = [...a, ...b]"
    ],
    "officialSolution": "const merged = [...a, ...b];",
    "explanation": "Expresia [...a, ...b] creează o instanță nouă de Array care conține toate elementele din 'a' urmate de cele din 'b'.",
    "hint": "Scrie: const merged = [...a, ...b];"
  },
  {
    "id": "js-m1",
    "track": "JavaScript",
    "icon": "🟨",
    "level": "3. Middle",
    "xp": 45,
    "title": "Closures (Închideri Lexicale) și Încapsularea Stării",
    "theory": "Un <strong>Closure</strong> apare atunci când o funcție internă păstrează accesul la variabilele din funcția părinte chiar și după ce funcția părinte și-a terminat execuția. Permite crearea de variabile private.",
    "example": "function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = createCounter();\nnext(); // 1\nnext(); // 2",
    "prompt": "Scrie o funcție săgeată pe o linie 'const makeAdder = x => y => x + y;' care folosește closure pentru a aduna 'x' și 'y'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const makeAdder = x => y => x + y;",
      "const makeAdder = (x) => (y) => x + y;",
      "const makeAdder = x => y => x + y"
    ],
    "officialSolution": "const makeAdder = x => y => x + y;",
    "explanation": "Funcția internă y => x + y memorează parametrul 'x' în mediul său lexical chiar și după apelul inițial makeAdder(5).",
    "hint": "Scrie: const makeAdder = x => y => x + y;"
  },
  {
    "id": "js-m2",
    "track": "JavaScript",
    "icon": "🟨",
    "level": "3. Middle",
    "xp": 45,
    "title": "Programare Asincronă: async / await și Promise.all()",
    "theory": "Cuvântul-cheie <code>async</code> transformă orice funcție într-una care returnează o promisiune (<code>Promise</code>), iar <code>await</code> suspendă execuția funcției curente până la rezolvarea promisiunii. Pentru rularea în paralel a mai multor promisiuni se folosește <code>await Promise.all([p1, p2])</code>.",
    "example": "async function loadDashboard() {\n  const [users, stats] = await Promise.all([fetchUsers(), fetchStats()]);\n  return { users, stats };\n}",
    "prompt": "Folosește 'await Promise.all([p1, p2]);' și atribuie rezultatul constantei 'const results'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const results = await Promise.all([p1, p2]);",
      "const results = await Promise.all([p1, p2])"
    ],
    "officialSolution": "const results = await Promise.all([p1, p2]);",
    "explanation": "Promise.all pornește ambele operații simultan și returnează un tablou cu rezultatele lor în ordinea declarată.",
    "hint": "Scrie: const results = await Promise.all([p1, p2]);"
  },
  {
    "id": "js-s1",
    "track": "JavaScript",
    "icon": "🟨",
    "level": "5. Exemplar",
    "xp": 65,
    "title": "Capitolul 2: Asincronitate Avansată — Event Loop, Promises, async/await și Closures",
    "theory": "\n      <p>Deși JavaScript rulează codul utilizatorului pe un singur fir de execuție (<em>single-threaded Call Stack</em>), reușește să gestioneze mii de operații I/O concurente fără blocare datorită arhitecturii <strong>Event Loop</strong>.</p>\n      <h4>Prioritatea Cozilor în Event Loop</h4>\n      <ol>\n        <li><strong>Call Stack (Codul Sincron)</strong>: se execută imediat, linie cu linie.</li>\n        <li><strong>Microtask Queue</strong> (<code>Promise.then</code>, <code>await</code>, <code>queueMicrotask</code>): se golește <strong>integral</strong> imediat ce stiva de apeluri devine liberă, înainte de orice Macrotask!</li>\n        <li><strong>Macrotask / Task Queue</strong> (<code>setTimeout</code>, <code>setInterval</code>, evenimente DOM): se execută abia după ce toate microtask-urile curente au fost procesate.</li>\n      </ol>\n    ",
    "glossary": [
      {
        "term": "Promise.all([p1, p2])",
        "def": "Rulează mai multe promisiuni în paralel și așteaptă rezolvarea tuturor."
      },
      {
        "term": "Microtask Queue",
        "def": "Coada de înaltă prioritate dedicată promisiunilor (Promise.then / await)."
      },
      {
        "term": "Macrotask Queue",
        "def": "Coada pentru timere (setTimeout / setInterval) și evenimente I/O."
      },
      {
        "term": "Closure",
        "def": "Funcție care memorează mediul lexical în care a fost creată."
      }
    ],
    "example": "// Exemplu Asemănător de apel paralel:\nconst data = await Promise.all([fetchProfile(), fetchPosts()]);",
    "prompt": "În interiorul unei funcții async, atribuie constantei 'const results' rezultatul așteptării în paralel (cu 'await Promise.all') a tabloului de promisiuni '[p1, p2]'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const results = await Promise.all([p1, p2]);",
      "const results = await Promise.all([p1, p2])"
    ],
    "officialSolution": "const results = await Promise.all([p1, p2]);",
    "explanation": "await Promise.all([p1, p2]) lansează concurent ambele promisiuni și returnează un tablou cu valorile lor rezolvate.",
    "hint": "Adaptează exemplul asemănător înlocuind variabila cu results și elementele tabloului cu p1, p2.",
    "matchingPairs": [
      {
        "left": "Call Stack",
        "right": "Execută codul sincron imediat (prioritatea 1)"
      },
      {
        "left": "Microtask Queue",
        "right": "Execută Promise.then / await (prioritatea 2)"
      },
      {
        "left": "Macrotask Queue",
        "right": "Execută setTimeout / setInterval (prioritatea 3)"
      },
      {
        "left": "Promise.all()",
        "right": "Așteaptă rezolvarea în paralel a unui grup de promisiuni"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă cu 'Promise.all([p1, p2, p3])' dacă promisiunea 'p2' este respinsă (rejected)?",
      "options": [
        "Întregul Promise.all este respins imediat (fail-fast) cu eroarea lui p2",
        "Ignoră eroarea și returnează null pentru p2",
        "Reîncearcă automat p2 de 3 ori",
        "Blochează browserul definitiv"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "js-e1",
    "track": "JavaScript",
    "icon": "🟨",
    "level": "5. Exemplar",
    "xp": 75,
    "title": "Metaprogramare cu Proxy și Reflect",
    "theory": "Obiectul <code>Proxy</code> permite interceptarea și redefinirea operațiilor fundamentale pe un obiect țintă (citire <code>get</code>, scriere <code>set</code>, ștergere <code>deleteProperty</code>) prin capcane (<em>traps</em>), stând la baza sistemelor de reactivitate moderne.",
    "example": "const reactive = new Proxy(target, {\n  get(obj, prop, receiver) {\n    console.log(`Citire: ${String(prop)}`);\n    return Reflect.get(obj, prop, receiver);\n  }\n});",
    "prompt": "Creează o instanță 'const p = new Proxy(target, handler);'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const p = new Proxy(target, handler);",
      "const p = new Proxy(target, handler)"
    ],
    "officialSolution": "const p = new Proxy(target, handler);",
    "explanation": "Constructorul Proxy primește două argumente obligatorii: obiectul țintă (target) și obiectul cu metodele interceptoare (handler).",
    "hint": "Scrie: const p = new Proxy(target, handler);"
  },
  {
    "id": "eng-v1",
    "track": "Engleză: Vocabular & Traduceri",
    "icon": "🇬🇧",
    "level": "2. Junior",
    "xp": 35,
    "title": "Vocabular Activ 1: Verbe de Tranziție B2 → C1 (Overcome, Enhance, Postpone, Fulfil)",
    "theory": "\n      <p>Trecerea de la nivelul B2 la C1 se cunoaște imediat după precizia verbelor folosite. În loc să repetăm verbe generice precum <em>get better</em>, <em>do</em> sau <em>wait</em>, limba engleză avansată utilizează verbe specifice cu colocații clare:</p>\n      <ul>\n        <li><code>to overcome (obstacles / difficulties / fear)</code> = a depăși, a învinge un obstacol sau o teamă.</li>\n        <li><code>to enhance (quality / performance / reputation)</code> = a îmbunătăți substanțial, a spori valoarea sau calitatea.</li>\n        <li><code>to postpone / to defer (a meeting / a decision)</code> = a amâna pentru o dată ulterioară.</li>\n        <li><code>to accomplish / to fulfil (a goal / a promise / potential)</code> = a îndeplini, a duce la bun sfârșit cu succes.</li>\n      </ul>\n    ",
    "glossary": [
      {
        "term": "overcome",
        "def": "A depăși cu succes o dificultate, o barieră sau o criză."
      },
      {
        "term": "enhance",
        "def": "A intensifica sau a spori calitatea, eficiența ori valoarea."
      },
      {
        "term": "postpone / defer",
        "def": "A reprograma sau a amâna un eveniment pentru mai târziu."
      },
      {
        "term": "accomplish",
        "def": "A realiza cu succes un obiectiv sau o misiune."
      }
    ],
    "example": "• Exemplu Asemănător (Diferit de cerință):\nRO: Echipa a amânat lansarea pentru a îndeplini toate standardele de siguranță.\nEN: The team postponed the launch to fulfil all safety standards.",
    "prompt": "Traducere RO → EN: Tradu în limba engleză propoziția:\n„Trebuie să depășim aceste obstacole pentru a îmbunătăți calitatea.”\n(Folosește verbele din dicționar pentru 'a depăși' și 'a îmbunătăți').",
    "caseSensitive": false,
    "acceptedAnswers": [
      "We must overcome these obstacles to enhance quality.",
      "We must overcome these obstacles to enhance quality",
      "We have to overcome these obstacles to enhance quality.",
      "We must overcome these obstacles in order to enhance quality."
    ],
    "officialSolution": "We must overcome these obstacles to enhance quality.",
    "explanation": "'Overcome these obstacles' și 'enhance quality' sunt colocațiile naturale de registru C1.",
    "hint": "Începe cu 'We must', adaugă verbul pentru a depăși + 'these obstacles to' + verbul pentru a spori/îmbunătăți + 'quality'.",
    "matchingPairs": [
      {
        "left": "to overcome obstacles",
        "right": "a depăși obstacolele"
      },
      {
        "left": "to enhance quality",
        "right": "a îmbunătăți / a spori calitatea"
      },
      {
        "left": "to postpone a meeting",
        "right": "a amâna o ședință"
      },
      {
        "left": "to accomplish a goal",
        "right": "a îndeplini un obiectiv"
      }
    ],
    "quiz": {
      "question": "Care verb se potrivește cel mai bine în colocația C1: 'The new algorithm will ______ system performance'?",
      "options": [
        "enhance",
        "postpone",
        "hesitate",
        "complain"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "eng-v2",
    "track": "Engleză: Vocabular & Traduceri",
    "icon": "🇬🇧",
    "level": "3. Middle",
    "xp": 45,
    "title": "Vocabular Activ 2: Verbe de Impact C1 (Mitigate, Exacerbate, Jeopardize, Circumvent)",
    "theory": "\n      <p>În textele analitice, juridice, de inginerie și de business, aceste șase verbe apar constant și fac diferența dintre un vorbitor mediu și unul avansat:</p>\n      <ul>\n        <li><code>to mitigate (risks / damage / impact)</code> = a atenua, a diminua gravitatea unui risc sau a unui efect negativ.</li>\n        <li><code>to exacerbate (a crisis / a problem / tensions)</code> = a înrăutăți, a agrava o situație deja dificilă (antonimul lui <em>mitigate / alleviate</em>).</li>\n        <li><code>to jeopardize (a project / health / security)</code> = a pune în pericol, a compromite.</li>\n        <li><code>to circumvent (rules / restrictions / a problem)</code> = a eluda, a ocoli o regulă în mod ingenios sau la limita legii.</li>\n        <li><code>to scrutinize (data / a contract)</code> = a examina minuțios, a verifica la sânge fiecare detaliu.</li>\n        <li><code>to undermine (authority / confidence)</code> = a submina, a slăbi treptat baza sau încrederea.</li>\n      </ul>\n    ",
    "glossary": [
      {
        "term": "mitigate",
        "def": "A atenua, a reduce severitatea sau impactul unui risc."
      },
      {
        "term": "exacerbate",
        "def": "A agrava, a face o problemă și mai rea decât era."
      },
      {
        "term": "jeopardize",
        "def": "A pune în pericol grav o realizare sau un plan."
      },
      {
        "term": "circumvent",
        "def": "A ocoli sau a eluda un obstacol ori o reglementare."
      },
      {
        "term": "scrutinize",
        "def": "A inspecta cu atenție critică fiecare detaliu."
      },
      {
        "term": "undermine",
        "def": "A submina treptat încrederea, puterea sau stabilitatea."
      }
    ],
    "example": "• Exemplu Asemănător (Diferit de cerință):\nRO: Ignorarea erorilor va agrava criza și va pune în pericol lansarea.\nEN: Ignoring the errors will exacerbate the crisis and jeopardize the launch.",
    "prompt": "Traducere RO → EN: Tradu în limba engleză propoziția:\n„Noile măsuri vor atenua riscurile financiare.”",
    "caseSensitive": false,
    "acceptedAnswers": [
      "The new measures will mitigate financial risks.",
      "The new measures will mitigate financial risks",
      "The new measures will mitigate the financial risks.",
      "The new measures will mitigate the financial risks"
    ],
    "officialSolution": "The new measures will mitigate financial risks.",
    "explanation": "Verbul 'mitigate' formează colocația standard cu 'risks' (mitigate financial risks).",
    "hint": "Subiectul este 'The new measures', urmat de 'will', verbul C1 pentru 'a atenua' și 'financial risks'.",
    "matchingPairs": [
      {
        "left": "mitigate",
        "right": "a atenua / a diminua un risc"
      },
      {
        "left": "exacerbate",
        "right": "a înrăutăți / a agrava o problemă"
      },
      {
        "left": "jeopardize",
        "right": "a pune în pericol / a compromite"
      },
      {
        "left": "circumvent",
        "right": "a ocoli / a eluda o regulă"
      },
      {
        "left": "scrutinize",
        "right": "a examina minuțios la sânge"
      }
    ],
    "quiz": {
      "question": "Care este antonimul direct al verbului 'to mitigate / alleviate' (a atenua o problemă)?",
      "options": [
        "to exacerbate (a agrava / a înrăutăți)",
        "to accomplish (a realiza)",
        "to foster (a încuraja)",
        "to disclose (a dezvălui)"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "eng-v3",
    "track": "Engleză: Vocabular & Traduceri",
    "icon": "🇬🇧",
    "level": "4. Senior",
    "xp": 55,
    "title": "Vocabular Activ 3: Adjective de Nivel C1/C2 — Traducere EN → RO și RO → EN",
    "theory": "\n      <p>Adjectivele de registru înalt îți permit să exprimi într-un singur cuvânt idei care altfel ar necesita o propoziție întreagă:</p>\n      <ul>\n        <li><code>ubiquitous</code> = <strong>omniprezent / ubicuu</strong> (care se găsește peste tot în același timp).</li>\n        <li><code>ephemeral</code> = <strong>efemer / trecător</strong> (care durează foarte puțin, precum trendurile online).</li>\n        <li><code>obsolete</code> = <strong>perimat / învechit / scos din uz</strong> (înlocuit de o tehnologie mai nouă).</li>\n        <li><code>ambiguous</code> = <strong>ambiguu / echivoc</strong> (care poate fi interpretat în două sau mai multe feluri).</li>\n        <li><code>convoluted</code> = <strong>întortocheat / excesiv de complicat</strong> (greu de urmărit — despre o explicație, un cod sau o procedură).</li>\n        <li><code>plausible</code> = <strong>plauzibil / verosimil</strong> (care pare rezonabil și credibil la prima vedere).</li>\n      </ul>\n    ",
    "glossary": [
      {
        "term": "ubiquitous",
        "def": "Omniprezent; întâlnit pretutindeni."
      },
      {
        "term": "ephemeral",
        "def": "Efemer, de scurtă durată, trecător."
      },
      {
        "term": "obsolete",
        "def": "Perimat, depășit tehnologic, scos din uz."
      },
      {
        "term": "convoluted",
        "def": "Întortocheat, alambicat, inutil de complicat."
      },
      {
        "term": "plausible",
        "def": "Plauzibil, credibil, demn de luat în calcul."
      },
      {
        "term": "ambiguous",
        "def": "Ambiguu, neclar, deschis la interpretări multiple."
      }
    ],
    "example": "• Exemplu Asemănător (Diferit de cerință):\nEN: The old software became obsolete because its architecture was too convoluted.\nRO: Vechiul software a devenit perimat deoarece arhitectura lui era prea întortocheată.",
    "prompt": "Traducere EN → RO: Tradu în limba română propoziția de mai jos (folosind termenii din dicționar pentru 'ubiquitous' și 'ephemeral'):\n'Smartphones have become ubiquitous in modern society, while privacy has become ephemeral.'",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Telefoanele inteligente au devenit omniprezente în societatea modernă, în timp ce confidențialitatea a devenit efemeră.",
      "Telefoanele inteligente au devenit omniprezente in societatea moderna, in timp ce confidentialitatea a devenit efemera.",
      "Telefoanele inteligente au devenit omniprezente în societatea modernă, în timp ce intimitatea a devenit efemeră."
    ],
    "officialSolution": "Telefoanele inteligente au devenit omniprezente în societatea modernă, în timp ce confidențialitatea a devenit efemeră.",
    "explanation": "'Ubiquitous' se traduce prin 'omniprezente', iar 'ephemeral' prin 'efemeră'.",
    "hint": "Tradu structura pas cu pas: 'Telefoanele inteligente au devenit [traducerea pentru ubiquitous] în societatea modernă, în timp ce confidențialitatea a devenit [traducerea pentru ephemeral].'",
    "matchingPairs": [
      {
        "left": "ubiquitous",
        "right": "omniprezent (peste tot)"
      },
      {
        "left": "ephemeral",
        "right": "efemer / de scurtă durată"
      },
      {
        "left": "obsolete",
        "right": "perimat / scos din uz"
      },
      {
        "left": "convoluted",
        "right": "întortocheat / prea complicat"
      },
      {
        "left": "plausible",
        "right": "plauzibil / verosimil"
      }
    ],
    "quiz": {
      "question": "Cum descriem în engleza C1 un sistem tehnic care nu mai este folosit deoarece a fost depășit de tehnologii noi?",
      "options": [
        "obsolete",
        "ubiquitous",
        "plausible",
        "meticulous"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "eng-v4",
    "track": "Engleză: Vocabular & Traduceri",
    "icon": "🇬🇧",
    "level": "5. Exemplar",
    "xp": 70,
    "title": "Vocabular Activ 4: Nivel C2 Mastery — Discrepancy, Inexorable, Corroborate, Ostensibly",
    "theory": "\n      <p>La nivelul C2 (Exemplar / Proficiency), stăpânirea nuanțelor fine îți permite să redai idei complexe cu eleganță academică:</p>\n      <ul>\n        <li><code>discrepancy (between A and B)</code> = o <strong>discrepanță / neconcordanță</strong> între două calcule, declarații sau rapoarte care ar trebui să fie identice.</li>\n        <li><code>inexorable</code> = <strong>inexorabil / de neoprit</strong> (despre timp, progres tehnologic sau un proces istoric).</li>\n        <li><code>to corroborate (a theory / a statement / evidence)</code> = <strong>a corobora / a confirma</strong> o ipoteză prin dovezi suplimentare independente.</li>\n        <li><code>ostensibly</code> = <strong>aparent / chipurile</strong> (indică faptul că motivul declarat oficial ascunde adesea un alt motiv real).</li>\n        <li><code>fastidious</code> = <strong>scrupulos / extrem de meticulos și pretențios</strong> în privința detaliilor și a ordinii.</li>\n      </ul>\n    ",
    "glossary": [
      {
        "term": "discrepancy",
        "def": "Neconcordanță sau diferență neașteptată între două seturi de date."
      },
      {
        "term": "inexorable",
        "def": "Inexorabil; imposibil de oprit sau de înduplecat."
      },
      {
        "term": "corroborate",
        "def": "A confirma și a susține o afirmație prin dovezi noi."
      },
      {
        "term": "ostensibly",
        "def": "Aparent, la suprafață (dar adesea diferit în realitate)."
      },
      {
        "term": "fastidious",
        "def": "Extrem de atent și exigent cu cele mai mici detalii."
      }
    ],
    "example": "• Exemplu Asemănător (Diferit de cerință):\nRO: Noile experimente coroborează ipoteza noastră, iar progresul este inexorabil.\nEN: The new experiments corroborate our hypothesis, and progress is inexorable.",
    "prompt": "Traducere RO → EN: Tradu în limba engleză propoziția:\n„Există o discrepanță gravă între cele două rapoarte.”\n(Folosește substantivul C1/C2 pentru discrepanță și 'serious').",
    "caseSensitive": false,
    "acceptedAnswers": [
      "There is a serious discrepancy between the two reports.",
      "There is a serious discrepancy between the two reports",
      "There is a grave discrepancy between the two reports."
    ],
    "officialSolution": "There is a serious discrepancy between the two reports.",
    "explanation": "'A serious discrepancy between X and Y' este structura canonică în registrul formal.",
    "hint": "Începe cu 'There is a serious', adaugă substantivul din dicționar pentru discrepanță și încheie cu 'between the two reports.'",
    "matchingPairs": [
      {
        "left": "discrepancy",
        "right": "discrepanță / neconcordanță în date"
      },
      {
        "left": "inexorable",
        "right": "inexorabil / imposibil de oprit"
      },
      {
        "left": "corroborate",
        "right": "a confirma cu dovezi solide"
      },
      {
        "left": "ostensibly",
        "right": "aparent / ca motiv declarat"
      },
      {
        "left": "fastidious",
        "right": "scrupulos / extrem de exigent la detalii"
      }
    ],
    "quiz": {
      "question": "Ce nuanță adaugă adverbul C2 'ostensibly' în propoziția 'Ostensibly, the company restructured to improve efficiency'?",
      "options": [
        "Sugerează că acesta este motivul declarat la suprafață, dar în spate ar putea exista alt motiv (ex: reducerea costurilor)",
        "Garantează 100% că eficiența a crescut",
        "Arată că acțiunea a avut loc în secret",
        "Exprimă o obligație legală"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "eng-v5",
    "track": "Engleză C1",
    "icon": "🇬🇧",
    "level": "4. Senior",
    "xp": 60,
    "title": "Expresii Idiomatice & Phrasal Verbs C1/C2 (RO ↔ EN)",
    "theory": "Expresii idiomatice și verbe frazale de nivel avansat:\n• <strong>a fi la înălțimea așteptărilor</strong> = <code>live up to expectations</code>\n• <strong>a da înapoi de la o promisiune / un acord</strong> = <code>renege on</code> / <code>back out of</code>\n• <strong>a ajunge la miezul / esența problemei</strong> = <code>get to the crux of the matter</code>\n• <strong>o sabie cu două tăișuri</strong> = <code>a double-edged sword</code>\n• <strong>a elimina treptat (un produs/sistem vechi)</strong> = <code>phase out</code>",
    "example": "• RO: Automatizarea este o sabie cu două tăișuri, dar compania a decis să elimine treptat sistemele vechi.\n• EN: Automation is a double-edged sword, but the company decided to phase out legacy systems.",
    "prompt": "Traducere RO → EN: Tradu în engleză:\n„Din păcate, noul software nu a fost la înălțimea așteptărilor noastre.”\n(Folosește 'did not live up to our expectations').",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Unfortunately, the new software did not live up to our expectations.",
      "Unfortunately, the new software didn't live up to our expectations.",
      "Unfortunately, the new software did not live up to our expectations"
    ],
    "officialSolution": "Unfortunately, the new software did not live up to our expectations.",
    "explanation": "'To live up to expectations' este expresia idiomatică standard în C1 pentru 'a se ridica la nivelul așteptărilor'.",
    "hint": "Scrie: Unfortunately, the new software did not live up to our expectations."
  },
  {
    "id": "eng-v6",
    "track": "Engleză C1",
    "icon": "🇬🇧",
    "level": "5. Exemplar",
    "xp": 75,
    "title": "Sinteză C2: Traducere Complexă cu Vocabular Greu & Inversiune",
    "theory": "La nivelul C2 (Exemplar), combinăm vocabularul academic (<code>jeopardize</code>, <code>scrutinize</code>, <code>ostensibly</code>, <code>inexorable</code>, <code>corroborate</code>) cu structurile gramaticale de elită (inversiunea negativă și subjonctivul formal).",
    "example": "• RO: Sub nicio formă nu trebuie să eludăm protocolul de securitate, deoarece acest lucru ar pune în pericol integritatea sistemului.\n• EN: Under no circumstances must we circumvent the security protocol, as doing so would jeopardize system integrity.",
    "prompt": "Traducere RO → EN (Nivel C2): Tradu în engleză folosind inversiunea 'Under no circumstances should you' și verbul 'jeopardize':\n„Sub nicio formă nu ar trebui să pui în pericol acest proiect.”",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Under no circumstances should you jeopardize this project.",
      "Under no circumstances should you jeopardize this project",
      "Under no circumstances should you jeopardise this project."
    ],
    "officialSolution": "Under no circumstances should you jeopardize this project.",
    "explanation": "Această frază îmbină inversiunea după locuțiunea negativă 'Under no circumstances' (should you) cu verbul de registru înalt 'jeopardize'.",
    "hint": "Scrie: Under no circumstances should you jeopardize this project."
  },
  {
    "id": "eng-fam-1",
    "track": "Engleză: Familie & Hobby",
    "icon": "🏡",
    "level": "2. Junior",
    "xp": 35,
    "title": "Capitolul 1: Familie, Rude și Relații Interumane (Vocabular & Expresii B2-C1)",
    "theory": "\n      <p>Pentru a vorbi natural și nuanțat despre familie în limba engleză, trebuie să depășim termenii elementari (<em>mother, father, brother</em>) și să stăpânim distincțiile dintre tipurile de familii, gradele de rudenie prin alianță și expresiile idiomatice despre moștenirea trăsăturilor de caracter.</p>\n      <h4>1. Structura familiei: Nuclear vs. Extended vs. Blended</h4>\n      <ul>\n        <li><strong>Immediate / Nuclear family</strong>: familia restrânsă (părinții și copiii).</li>\n        <li><strong>Extended family</strong>: familia extinsă (bunici, unchi, mătuși, verișori de gradul I sau II — <em>distant relatives</em>).</li>\n        <li><strong>In-laws (Rude prin alianță)</strong>: <code>mother-in-law</code> (soacră), <code>father-in-law</code> (socru), <code>brother-in-law</code> (cumnat), <code>sister-in-law</code> (cumnată), <code>son-in-law</code> (ginere), <code>daughter-in-law</code> (noră).</li>\n        <li><strong>Siblings</strong>: termenul generic pentru frați și surori (foarte folosit în registrul formal și conversațional: <em>Do you have any siblings?</em>).</li>\n      </ul>\n      <h4>2. Expresii și Phrasal Verbs esențiale despre familie</h4>\n      <ul>\n        <li><code>to take after somebody</code> = a semăna cu cineva din familie (la caracter sau aspect). Atenție: nu se folosește cu sensul de „a avea grijă” (acela este <em>to look after</em>!).</li>\n        <li><code>to bring up (a child)</code> = a crește, a educa un copil (substantivul pentru educația primită acasă este <code>upbringing</code>).</li>\n        <li><code>to run in the family</code> = a fi o trăsătură de familie, a se transmite din generație în generație (ex: <em>Musical talent runs in our family</em>).</li>\n        <li><code>a close-knit family</code> = o familie foarte unită, strâns legată.</li>\n      </ul>\n    ",
    "glossary": [
      {
        "term": "siblings",
        "def": "Frați și surori (termen colectiv neutru ca gen)."
      },
      {
        "term": "close-knit family",
        "def": "Familie foarte unită, în care membrii se sprijină reciproc."
      },
      {
        "term": "to take after someone",
        "def": "A moșteni trăsăturile sau temperamentul unui părinte/bunic."
      },
      {
        "term": "upbringing",
        "def": "Educația și creșterea primită în copilărie în sânul familiei."
      },
      {
        "term": "brother-in-law / sister-in-law",
        "def": "Cumnat / Cumnată (rudă prin căsătorie)."
      },
      {
        "term": "to run in the family",
        "def": "A fi o calitate sau un obicei moștenit în toată familia."
      }
    ],
    "example": "• Exemplu Asemănător (Traducere RO ↔ EN):\nRO: Ea seamănă cu bunica ei, iar pasiunea pentru pictură este o trăsătură de familie.\nEN: She takes after her grandmother, and passion for painting runs in the family.",
    "prompt": "Traducere RO → EN: Tradu în engleză propoziția de mai jos folosind expresiile din capitol ('close-knit family' și 'siblings'):\n„Provenim dintr-o familie foarte unită și mă înțeleg excelent cu frații și surorile mele.”\n(Structură: We come from a ... and I get along great with my ...)",
    "caseSensitive": false,
    "acceptedAnswers": [
      "We come from a close-knit family and I get along great with my siblings.",
      "We come from a close-knit family and I get along great with my siblings",
      "We come from a close-knit family and I get along very well with my siblings.",
      "We come from a close-knit family and I get on well with my siblings."
    ],
    "officialSolution": "We come from a close-knit family and I get along great with my siblings.",
    "explanation": "'A close-knit family' redă ideea de familie foarte unită, iar 'siblings' acoperă simultan frații și surorile.",
    "hint": "Începe cu 'We come from a close-knit family' și continuă cu 'and I get along great with my siblings.'",
    "matchingPairs": [
      {
        "left": "close-knit family",
        "right": "familie foarte unită"
      },
      {
        "left": "to take after",
        "right": "a semăna cu un părinte"
      },
      {
        "left": "upbringing",
        "right": "educația primită în copilărie"
      },
      {
        "left": "brother-in-law",
        "right": "cumnat"
      },
      {
        "left": "to look after",
        "right": "a avea grijă de cineva"
      }
    ],
    "quiz": {
      "question": "Care este diferența dintre 'to take after' și 'to look after' în limba engleză?",
      "options": [
        "'To take after' înseamnă a semăna cu cineva din familie, iar 'to look after' înseamnă a avea grijă de cineva",
        "Ambele înseamnă exact același lucru",
        "'To take after' înseamnă a adopta un animal, iar 'to look after' înseamnă a căuta în dicționar",
        "'To look after' se folosește doar pentru rude îndepărtate"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "eng-fam-2",
    "track": "Engleză: Familie & Hobby",
    "icon": "🏡",
    "level": "3. Middle",
    "xp": 40,
    "title": "Capitolul 2: Hobby-uri, Pasiuni, Timp Liber și Deconectare (B2-C1)",
    "theory": "\n      <p>Când discutăm despre hobby-uri și activități recreative la nivel B2-C1, evităm formulările repetitive de tipul <em>I like playing / My hobby is...</em> și apelăm la expresii idiomatice care descriu pasiunea, relaxarea mentală și dezvoltarea unei abilități noi.</p>\n      <h4>1. Cum exprimăm începerea și practicarea unui hobby?</h4>\n      <ul>\n        <li><code>to take up a hobby / sport</code> = a începe să practici un hobby nou (ex: <em>I recently took up photography</em>).</li>\n        <li><code>to unwind / to blow off steam</code> = a te destinde, a te deconecta de la stresul zilnic, a-ți descărca energia.</li>\n        <li><code>an avid reader / collector / gamer</code> = un cititor / colecționar / jucător pasionat, înfocat.</li>\n        <li><code>to dabble in something</code> = a cocheta cu un domeniu/hobby, a-l practica la nivel de amator din plăcere (ex: <em>He dabbles in watercolour painting on weekends</em>).</li>\n        <li><code>time-consuming</code> vs. <code>rewarding</code> = consumator de timp vs. plin de satisfacții.</li>\n      </ul>\n    ",
    "glossary": [
      {
        "term": "to take up (a hobby)",
        "def": "A începe practicarea unei noi pasiuni sau activități."
      },
      {
        "term": "to unwind",
        "def": "A te relaxa și a te deconecta după o perioadă solicitantă."
      },
      {
        "term": "avid (reader / traveller)",
        "def": "Pasionat, entuziast, dedicat unei activități."
      },
      {
        "term": "to dabble in",
        "def": "A experimenta sau a practica un hobby ocazional, fără pretenții profesionale."
      },
      {
        "term": "rewarding",
        "def": "Care oferă o satisfacție interioară profundă."
      },
      {
        "term": "pastime",
        "def": "Activitate plăcută de petrecere a timpului liber."
      }
    ],
    "example": "• Exemplu Asemănător:\nRO: Deși grădinăritul consumă mult timp, este extrem de plin de satisfacții.\nEN: Although gardening is time-consuming, it is extremely rewarding.",
    "prompt": "Traducere RO → EN: Tradu în engleză propoziția de mai jos folosind verbele 'took up' (a început să practice) și 'unwind' (a se deconecta):\n„Am început să practic șahul anul trecut pentru a mă deconecta după cursuri.”\n(Structură: I ... chess last year to ... after classes.)",
    "caseSensitive": false,
    "acceptedAnswers": [
      "I took up chess last year to unwind after classes.",
      "I took up chess last year to unwind after classes",
      "I took up chess last year in order to unwind after classes."
    ],
    "officialSolution": "I took up chess last year to unwind after classes.",
    "explanation": "'Took up chess' exprimă începerea unui nou hobby la trecut, iar 'to unwind' înseamnă a te relaxa după efort intelectual.",
    "hint": "Folosește trecutul lui take up ('took up') urmat de 'chess last year to unwind after classes'.",
    "matchingPairs": [
      {
        "left": "to take up a hobby",
        "right": "a începe un hobby nou"
      },
      {
        "left": "to unwind",
        "right": "a se destinde / a se deconecta"
      },
      {
        "left": "to dabble in",
        "right": "a cocheta ocazional cu o activitate"
      },
      {
        "left": "avid reader",
        "right": "cititor pasionat / înfocat"
      },
      {
        "left": "rewarding",
        "right": "plin de satisfacții"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă propoziția 'She dabbles in astronomy in her spare time'?",
      "options": [
        "Cochetează cu astronomia ca amatoare în timpul liber, din plăcere",
        "Este profesoară universitară de astrofizică cu normă întreagă",
        "Detestă complet astronomia",
        "A renunțat definitiv la astronomie anul trecut"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "eng-fam-3",
    "track": "Engleză: Familie & Hobby",
    "icon": "🏡",
    "level": "4. Senior",
    "xp": 50,
    "title": "Capitolul 3: Echilibrul Viață-Studiu, Obiceiuri și Dezvoltare Personală (C1)",
    "theory": "\n      <p>La nivelul C1, discuțiile despre stilul de viață, disciplină și rutina zilnică folosesc un vocabular precis care descrie modul în care obiceiurile ne modelează productivitatea și starea de spirit.</p>\n      <h4>Termeni C1 pentru rutină, obiceiuri și echilibru</h4>\n      <ul>\n        <li><code>to strike a balance (between X and Y)</code> = a găsi un echilibru optim între două domenii (ex: între studiu și viața de familie).</li>\n        <li><code>ingrained habit</code> = un obicei adânc înrădăcinat, greu de schimbat.</li>\n        <li><code>procrastination</code> / <code>to put things off</code> = tergiversare, amânarea sarcinilor importante.</li>\n        <li><code>burnout</code> vs. <code>resilience</code> = epuizare cronică vs. capacitatea psihologică de a-ți reveni după dificultăți.</li>\n        <li><code>sedentary lifestyle</code> = stil de viață sedentar, lipsit de mișcare fizică.</li>\n      </ul>\n    ",
    "glossary": [
      {
        "term": "to strike a balance",
        "def": "A găsi proporția corectă între două responsabilități concurente."
      },
      {
        "term": "ingrained habit",
        "def": "Obicei adânc întipărit în comportamentul cuiva."
      },
      {
        "term": "resilience",
        "def": "Reziliență; puterea de adaptare și refacere în fața stresului."
      },
      {
        "term": "detrimental to",
        "def": "Dăunător, nociv pentru sănătate sau progres."
      },
      {
        "term": "conducive to",
        "def": "Favorabil, propice pentru (ex: un mediu propice învățării)."
      }
    ],
    "example": "• Exemplu Asemănător:\nRO: Un mediu liniștit este propice studiului aprofundat.\nEN: A quiet environment is conducive to deep study.",
    "prompt": "Traducere RO → EN: Tradu în engleză folosind expresia 'strike a balance between':\n„Este esențial să găsești un echilibru între muncă și timpul liber.”\n(Structură: It is essential to ... work and leisure.)",
    "caseSensitive": false,
    "acceptedAnswers": [
      "It is essential to strike a balance between work and leisure.",
      "It is essential to strike a balance between work and leisure",
      "It is essential to strike a balance between work and free time.",
      "It's essential to strike a balance between work and leisure."
    ],
    "officialSolution": "It is essential to strike a balance between work and leisure.",
    "explanation": "Colocația C1 'strike a balance between work and leisure' este expresia consacrată pentru echilibrul viață-profesie.",
    "hint": "Combină 'It is essential to' cu 'strike a balance between work and leisure.'",
    "matchingPairs": [
      {
        "left": "strike a balance",
        "right": "a găsi un echilibru"
      },
      {
        "left": "ingrained habit",
        "right": "obicei adânc înrădăcinat"
      },
      {
        "left": "conducive to",
        "right": "propice / favorabil pentru"
      },
      {
        "left": "detrimental to",
        "right": "dăunător / nociv pentru"
      },
      {
        "left": "sedentary lifestyle",
        "right": "stil de viață sedentar"
      }
    ],
    "quiz": {
      "question": "Ce prepoziție urmează obligatoriu după adjectivele C1 'conducive' (propice) și 'detrimental' (dăunător)?",
      "options": [
        "Prepoziția 'to' (conducive to / detrimental to)",
        "Prepoziția 'with'",
        "Prepoziția 'from'",
        "Nu primesc niciodată prepoziție"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "eng-1",
    "track": "Engleză: Gramatică & Stil",
    "icon": "✍️",
    "level": "3. Middle",
    "xp": 40,
    "title": "Gramatică 1: Inversiunea după Adverbe Negative (Never, Rarely, Little, Under no circumstances)",
    "theory": "\n      <p>În limba engleză avansată (C1/C2), plasarea unei expresii negative sau restrictive la începutul propoziției pentru efect dramatic declanșează obligatoriu <strong>inversiunea dintre subiect și verbul auxiliar</strong> (exact ca într-o întrebare).</p>\n      <h4>Formula de Aur a Inversiunii</h4>\n      <p><code>[Adverb Negativ] + [Verb Auxiliar: have / had / did / do / should / can] + [Subiect] + [Verb Principal]</code></p>\n      <ul>\n        <li>Dacă propoziția originală este la Present Perfect (<em>I have never seen...</em>), mutăm <code>have</code> înaintea lui <code>I</code>: <code>Never have I seen...</code></li>\n        <li>Dacă propoziția originală nu are auxiliar vizibil (Past Simple: <em>She little knew...</em>), introducem auxiliarul <code>did</code> și trecem verbul la infinitiv: <code>Little did she know...</code></li>\n      </ul>\n    ",
    "glossary": [
      {
        "term": "Never have I seen...",
        "def": "Niciodată nu am văzut... (inversiune cu Present Perfect)."
      },
      {
        "term": "Rarely do we find...",
        "def": "Rareori găsim... (inversiune cu Present Simple)."
      },
      {
        "term": "Little did she know...",
        "def": "Habar nu avea ea... (inversiune cu Past Simple)."
      },
      {
        "term": "Under no circumstances should you...",
        "def": "Sub nicio formă nu ar trebui să..."
      }
    ],
    "example": "• Exemplu Asemănător (Diferit de cerință):\nStandard (B2): She rarely complains about her workload.\nInversiune (C1): Rarely does she complain about her workload.",
    "prompt": "Transformă propoziția de mai jos la nivel C1 începând cu 'Never in my life':\n'I have never in my life seen such a mess.'",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Never in my life have I seen such a mess.",
      "Never in my life have I seen such a mess"
    ],
    "officialSolution": "Never in my life have I seen such a mess.",
    "explanation": "După locuțiunea negativă 'Never in my life' plasată la început, auxiliarul 'have' trece înaintea subiectului 'I'.",
    "hint": "După 'Never in my life', inversează ordinea cuvintelor 'I have' și păstrează restul propoziției neschimbat.",
    "matchingPairs": [
      {
        "left": "Never in my life...",
        "right": "...have I seen such a thing."
      },
      {
        "left": "Little...",
        "right": "...did he realize the danger."
      },
      {
        "left": "Rarely...",
        "right": "...do they visit us nowadays."
      },
      {
        "left": "Under no circumstances...",
        "right": "...must you open this door."
      }
    ],
    "quiz": {
      "question": "Care dintre următoarele variante este corectă gramatical la nivelul C1?",
      "options": [
        "Little did she know that the plan had changed.",
        "Little knew she that the plan had changed.",
        "Little she did know that the plan had changed.",
        "Little she knew that the plan had changed."
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "eng-2",
    "track": "Engleză: Gramatică & Stil",
    "icon": "✍️",
    "level": "4. Senior",
    "xp": 45,
    "title": "Gramatică 2: Corelative Temporale (No sooner... than, Hardly... when) și Condiționale Inversate",
    "theory": "\n      <p>Pentru a exprima două acțiuni trecute care s-au succedat aproape instantaneu („Nici nu s-a întâmplat bine X, că a și urmat Y”), engleza C1 folosește Past Perfect inversat în două perechi fixe:</p>\n      <ul>\n        <li><code>No sooner had [Subiect] [Participiu] ... THAN [Past Simple]</code> (Atenție: <em>sooner</em> este comparativ, deci cere obligatoriu <code>than</code>, niciodată <em>when</em>!).</li>\n        <li><code>Hardly / Scarcely had [Subiect] [Participiu] ... WHEN [Past Simple]</code>.</li>\n      </ul>\n      <h4>Condiționalele Inversate (fără IF)</h4>\n      <p>În registrul formal, conjuncția <code>if</code> dispare, iar auxiliarul trece pe prima poziție: <code>Should you need...</code> (Tip 1), <code>Were I in your shoes...</code> (Tip 2), <code>Had we known...</code> (Tip 3).</p>\n    ",
    "glossary": [
      {
        "term": "No sooner had... than...",
        "def": "Nici nu... bine, că... (cere obligatoriu 'than')."
      },
      {
        "term": "Hardly had... when...",
        "def": "Abia... că... (cere conjuncția 'when')."
      },
      {
        "term": "Had we known...",
        "def": "Dacă am fi știut... ( înlocuiește 'If we had known')."
      },
      {
        "term": "Should you require...",
        "def": "În caz că aveți nevoie de... (înlocuiește 'If you should require')."
      }
    ],
    "example": "• Exemplu Asemănător (Diferit de cerință):\nStandard: As soon as we arrived home, it started to snow.\nC1: No sooner had we arrived home than it started to snow.",
    "prompt": "Rescrie propoziția de mai jos la nivel C1 începând cu 'No sooner':\n'As soon as the film started, the power went off.'",
    "caseSensitive": false,
    "acceptedAnswers": [
      "No sooner had the film started than the power went off.",
      "No sooner had the film started than the power went off"
    ],
    "officialSolution": "No sooner had the film started than the power went off.",
    "explanation": "Prima acțiune trece la Past Perfect inversat (had the film started), iar legătura cu a doua acțiune se face prin 'than'.",
    "hint": "Privește exemplul cu 'No sooner had we arrived home than...' și aplică aceeași structură pentru 'the film started' și 'the power went off'.",
    "matchingPairs": [
      {
        "left": "No sooner had I sat down...",
        "right": "...than the phone rang."
      },
      {
        "left": "Hardly had the train left...",
        "right": "...when the storm began."
      },
      {
        "left": "Had I known the truth...",
        "right": "...I would have told you."
      },
      {
        "left": "Should you have questions...",
        "right": "...please contact us."
      }
    ],
    "quiz": {
      "question": "Identifică varianta care NU conține nicio greșeală gramaticală:",
      "options": [
        "Had we left earlier, we would not have missed the flight.",
        "No sooner had we arrived when the concert started.",
        "If we would have known, we had called you.",
        "Hardly the rain had stopped than the sun came out."
      ],
      "correctIndex": 0
    }
  }
];
const EXTENDED_CURRICULUM = EXTENDED_MODULES;
