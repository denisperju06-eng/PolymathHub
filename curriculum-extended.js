// ============================================================================
// CURRICULUM EXTINS: DE LA ÎNCEPĂTOR LA EXEMPLAR (LUNI DE STUDIU ACTIV)
// ============================================================================

const EXTENDED_MODULES = [
  // ==========================================================================
  // SECȚIUNEA 1: JAVA (ÎNCEPĂTOR -> JUNIOR -> MIDDLE -> SENIOR -> EXEMPLAR)
  // ==========================================================================
  {
    id: "java-b1",
    track: "Java",
    icon: "☕",
    level: "1. Începător",
    xp: 20,
    title: "Variabile, Tipuri Primitive și Afișare",
    theory: "În Java, orice variabilă trebuie declarată cu un tip de date strict: <code>int</code> (numere întregi), <code>double</code> (numere cu virgulă), <code>boolean</code> (<code>true</code>/<code>false</code>), <code>char</code> (un caracter între apostrofuri) și <code>String</code> (text între ghilimele duble).",
    example: "int count = 10;\ndouble price = 19.99;\nboolean isActive = true;\nSystem.out.println(\"Total: \" + count);",
    prompt: "Declară o variabilă de tip 'int' numită 'limit' și inițializeaz-o cu valoarea 100 (nu uita punctul și virgula).",
    starterContext: "// Declară variabila întreagă:",
    caseSensitive: true,
    acceptedAnswers: ["int limit = 100;"],
    officialSolution: "int limit = 100;",
    explanation: "Sintaxa de bază în Java impune ordinea: tipul (int), numele variabilei (limit), operatorul '=' și valoarea terminată cu ';'.",
    hint: "Scrie exact: int limit = 100;"
  },
  {
    id: "java-b2",
    track: "Java",
    icon: "☕",
    level: "1. Începător",
    xp: 20,
    title: "Decizii Ramificate: if / else și Operatorul Ternar",
    theory: "Instrucțiunea <code>if (condiție)</code> execută un bloc doar dacă expresia booleană este adevărată. Pentru atribuiri rapide pe o singură linie se folosește operatorul ternar: <code>tip rezultat = (condiție) ? valoareAdevărat : valoareFals;</code>.",
    example: "int score = 75;\nString status = (score >= 50) ? \"Promovat\" : \"Respins\";",
    prompt: "Folosind operatorul ternar, atribuie variabilei 'String role' valoarea \"Admin\" dacă 'level > 5', altfel \"User\".",
    starterContext: "int level = 8;\n// Scrie linia cu operatorul ternar:",
    caseSensitive: true,
    acceptedAnswers: [
      "String role = (level > 5) ? \"Admin\" : \"User\";",
      "String role = level > 5 ? \"Admin\" : \"User\";"
    ],
    officialSolution: "String role = (level > 5) ? \"Admin\" : \"User\";",
    explanation: "Operatorul ternar evaluează condiția level > 5; dacă este true, returnează primul operand după '?', altfel pe cel de după ':'.",
    hint: "Model: String role = (level > 5) ? \"Admin\" : \"User\";"
  },
  {
    id: "java-b3",
    track: "Java",
    icon: "☕",
    level: "1. Începător",
    xp: 25,
    title: "Bucla FOR Clasică: Inițializare, Condiție și Pas",
    theory: "Bucla <code>for</code> se folosește atunci când cunoaștem numărul de iterații. Are trei secțiuni separate prin punct și virgulă: <code>for (inițializare; condiție_continuare; incrementare) { ... }</code>.",
    example: "// Afișează numerele de la 0 la 4:\nfor (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}",
    prompt: "Scrie antetul unei bucle 'for' care pornește cu 'int i = 1', rulează cât timp 'i <= 10' și incrementează cu 'i++', urmat de acolada deschisă '{'.",
    starterContext: "// Antetul buclei for de la 1 la 10 inclusiv:",
    caseSensitive: true,
    acceptedAnswers: [
      "for (int i = 1; i <= 10; i++) {",
      "for(int i = 1; i <= 10; i++) {"
    ],
    officialSolution: "for (int i = 1; i <= 10; i++) {",
    explanation: "Cele trei expresii din paranteza for controlează contorul i: pornirea de la 1, pragul superior <= 10 și pasul i++.",
    hint: "Scrie: for (int i = 1; i <= 10; i++) {"
  },
  {
    id: "java-b4",
    track: "Java",
    icon: "☕",
    level: "1. Începător",
    xp: 25,
    title: "Bucla WHILE și DO-WHILE: Repetiție Condiționată",
    theory: "Bucla <code>while (condiție)</code> verifică condiția <strong>înainte</strong> de fiecare iterație (dacă este falsă de la început, nu se execută niciodată). În schimb, <code>do { ... } while (condiție);</code> execută corpul buclei <strong>cel puțin o dată</strong> înainte de a testa condiția.",
    example: "int n = 5;\nwhile (n > 0) {\n  System.out.println(n);\n  n--;\n}",
    prompt: "Scrie o buclă 'while' pe o singură linie care scade variabila 'energy' (energy--;) atât timp cât 'energy > 0'.",
    starterContext: "int energy = 10;\n// Scrie bucla while completă:",
    caseSensitive: true,
    acceptedAnswers: [
      "while (energy > 0) { energy--; }",
      "while(energy > 0) { energy--; }"
    ],
    officialSolution: "while (energy > 0) { energy--; }",
    explanation: "Cât timp condiția (energy > 0) este adevărată, instrucțiunea energy--; decrementează variabila pentru a evita o buclă infinită.",
    hint: "Scrie: while (energy > 0) { energy--; }"
  },
  {
    id: "java-b5",
    track: "Java",
    icon: "☕",
    level: "1. Începător",
    xp: 25,
    title: "Tablouri (Arrays) și Bucla Enhanced For-Each",
    theory: "Un tablou stochează mai multe valori de același tip: <code>int[] nums = {10, 20, 30};</code>. Pentru a parcurge toate elementele fără a folosi indecși, Java oferă bucla <em>for-each</em>: <code>for (Tip element : tablou) { ... }</code>.",
    example: "String[] langs = {\"SQL\", \"Java\", \"JS\"};\nfor (String lang : langs) {\n  System.out.println(lang);\n}",
    prompt: "Scrie antetul unei bucle for-each care parcurge fiecare 'int n' din tabloul 'numbers', urmat de '{'.",
    starterContext: "int[] numbers = {2, 4, 6, 8};",
    caseSensitive: true,
    acceptedAnswers: [
      "for (int n : numbers) {",
      "for(int n : numbers) {"
    ],
    officialSolution: "for (int n : numbers) {",
    explanation: "Sintaxa for (int n : numbers) citește secvențial fiecare valoare din tabloul 'numbers' în variabila locală 'n'.",
    hint: "Folosește două puncte ':' între declarația elementului și numele tabloului: for (int n : numbers) {"
  },
  {
    id: "java-j1",
    track: "Java",
    icon: "☕",
    level: "2. Junior",
    xp: 30,
    title: "Switch Expressions Moderne (Java 14+)",
    theory: "În versiunile moderne de Java, instrucțiunea <code>switch</code> poate folosi săgeți <code>-></code> fără a mai necesita <code>break;</code>, prevenind căderea accidentală pe cazul următor (<em>fall-through</em>) și putând returna direct o valoare.",
    example: "String dayType = switch (day) {\n  case 1, 2, 3, 4, 5 -> \"Workday\";\n  case 6, 7 -> \"Weekend\";\n  default -> \"Invalid\";\n};",
    prompt: "Scrie ramura 'case 1 -> \"Start\";' într-un switch modern Java.",
    starterContext: "switch (code) {\n  // Adaugă cazul pentru valoarea 1:\n}",
    caseSensitive: true,
    acceptedAnswers: ["case 1 -> \"Start\";"],
    officialSolution: "case 1 -> \"Start\";",
    explanation: "Sintaxa cu săgeată (->) execută doar expresia din dreapta și iese automat din switch.",
    hint: "Scrie exact: case 1 -> \"Start\";"
  },
  {
    id: "java-j2",
    track: "Java",
    icon: "☕",
    level: "2. Junior",
    xp: 30,
    title: "Interfețe și Contracte Multiple (implements)",
    theory: "Deși Java permite moștenirea unei singure clase cu <code>extends</code>, o clasă poate implementa oricâte interfețe folosind cuvântul-cheie <code>implements</code>, garantând că oferă implementare pentru toate metodele din contract.",
    example: "interface Payable { double calculatePay(); }\ninterface Auditable { void logAudit(); }\n\npublic class Contractor implements Payable, Auditable {\n  public double calculatePay() { return 500.0; }\n  public void logAudit() {}\n}",
    prompt: "Scrie antetul clasei publice 'Invoice' care implementează interfața 'Payable' și deschide acolada '{'.",
    starterContext: "interface Payable { double getAmount(); }",
    caseSensitive: true,
    acceptedAnswers: [
      "public class Invoice implements Payable {",
      "class Invoice implements Payable {"
    ],
    officialSolution: "public class Invoice implements Payable {",
    explanation: "Cuvântul-cheie 'implements' leagă clasa concretă Invoice de contractul definit în interfața Payable.",
    hint: "Folosește: public class Invoice implements Payable {"
  },
  {
    id: "java-m1",
    track: "Java",
    icon: "☕",
    level: "3. Middle",
    xp: 40,
    title: "Colecții Generice: HashMap și ArrayList",
    theory: "Spre deosebire de tablourile cu dimensiune fixă, <code>ArrayList&lt;T&gt;</code> se redimensionează dinamic, iar <code>HashMap&lt;K, V&gt;</code> stochează perechi cheie-valoare cu timp de căutare $O(1)$ în medie.",
    example: "Map<String, Integer> scores = new HashMap<>();\nscores.put(\"Alex\", 95);\nint val = scores.getOrDefault(\"Alex\", 0);",
    prompt: "Inițializează o listă generică 'List<String> names' folosind 'new ArrayList<>();'.",
    starterContext: "import java.util.*;",
    caseSensitive: true,
    acceptedAnswers: [
      "List<String> names = new ArrayList<>();",
      "ArrayList<String> names = new ArrayList<>();"
    ],
    officialSolution: "List<String> names = new ArrayList<>();",
    explanation: "Programarea la interfață (List<String> în stânga, new ArrayList<>() în dreapta cu operatorul diamant <>) este standardul în ingineria Java.",
    hint: "Scrie: List<String> names = new ArrayList<>();"
  },
  {
    id: "java-m2",
    track: "Java",
    icon: "☕",
    level: "3. Middle",
    xp: 45,
    title: "Java Streams API & Expresii Lambda",
    theory: "API-ul <code>Stream</code> introdus în Java 8 permite procesarea funcțională a colecțiilor prin conducte declarative: <code>list.stream().filter(...).map(...).toList()</code>.",
    example: "List<Integer> evens = nums.stream()\n  .filter(n -> n % 2 == 0)\n  .map(n -> n * 10)\n  .toList();",
    prompt: "Pornind de la 'names.stream()', filtrează doar șirurile care nu sunt goale folosind '.filter(s -> !s.isEmpty())' și colectează-le cu '.toList();'.",
    starterContext: "List<String> clean = // continuă expresia:",
    caseSensitive: true,
    acceptedAnswers: [
      "names.stream().filter(s -> !s.isEmpty()).toList();",
      "List<String> clean = names.stream().filter(s -> !s.isEmpty()).toList();"
    ],
    officialSolution: "names.stream().filter(s -> !s.isEmpty()).toList();",
    explanation: "Conducta deschide fluxul cu .stream(), aplică predicatul lambda s -> !s.isEmpty() și materializează rezultatul imutabil cu .toList().",
    hint: "Scrie: names.stream().filter(s -> !s.isEmpty()).toList();"
  },
  {
    id: "java-m3",
    track: "Java",
    icon: "☕",
    level: "3. Middle",
    xp: 45,
    title: "Gestionarea Excepțiilor și try-with-resources",
    theory: "Blocul <code>try (Resursă r = ...) { ... } catch (Exception e) { ... }</code> închide automat resursele care implementează <code>AutoCloseable</code> (conexiuni SQL, fișiere), prevenind scurgerile de memorie chiar și atunci când apare o excepție.",
    example: "try (BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"))) {\n  System.out.println(br.readLine());\n} catch (IOException e) {\n  e.printStackTrace();\n}",
    prompt: "Aruncă explicit o excepție de tip 'IllegalArgumentException' cu mesajul \"Invalid ID\" folosind cuvântul-cheie 'throw new'.",
    starterContext: "if (id < 0) {\n  // Aruncă excepția aici:\n}",
    caseSensitive: true,
    acceptedAnswers: [
      "throw new IllegalArgumentException(\"Invalid ID\");"
    ],
    officialSolution: "throw new IllegalArgumentException(\"Invalid ID\");",
    explanation: "Instrucțiunea 'throw new' instanțiază și propagă imediat obiectul excepției pe stiva de apeluri.",
    hint: "Scrie: throw new IllegalArgumentException(\"Invalid ID\");"
  },
  {
    id: "java-s1",
    track: "Java",
    icon: "☕",
    level: "4. Senior",
    xp: 55,
    title: "Java Records (Purtători Imutabili de Date)",
    theory: "Un <code>record</code> în Java (introdus stabil în Java 16) generează automat câmpuri <code>private final</code>, constructorul canonic, metodele de acces, precum și implementările <code>equals()</code>, <code>hashCode()</code> și <code>toString()</code> într-o singură linie.",
    example: "public record UserDto(Long id, String email) {}",
    prompt: "Declară un record public numit 'Point' cu două componente: 'int x' și 'int y', urmat de '{}'.",
    starterContext: "// Echivalentul imutabil în 1 linie pentru o clasă de coordonate:",
    caseSensitive: true,
    acceptedAnswers: [
      "public record Point(int x, int y) {}",
      "record Point(int x, int y) {}"
    ],
    officialSolution: "public record Point(int x, int y) {}",
    explanation: "Un record elimină zeci de linii de cod boilerplate și garantează imutabilitatea superficială a datelor.",
    hint: "Scrie: public record Point(int x, int y) {}"
  },
  {
    id: "java-s2",
    track: "Java",
    icon: "☕",
    level: "4. Senior",
    xp: 60,
    title: "Programare Asincronă cu CompletableFuture",
    theory: "Pentru operații neblocante în sisteme distribuite, <code>CompletableFuture.supplyAsync(() -&gt; ...)</code> execută sarcina pe un fir de execuție din <code>ForkJoinPool.commonPool()</code>, permițând înlănțuirea cu <code>.thenApply()</code> și <code>.exceptionally()</code>.",
    example: "CompletableFuture.supplyAsync(() -> fetchOrder(101))\n  .thenApply(order -> calculateTax(order))\n  .thenAccept(System.out::println);",
    prompt: "Lansează un calcul asincron care returnează valoarea 42 folosind 'CompletableFuture.supplyAsync(() -> 42);'.",
    starterContext: "CompletableFuture<Integer> future = // continuă:",
    caseSensitive: true,
    acceptedAnswers: [
      "CompletableFuture.supplyAsync(() -> 42);",
      "CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> 42);"
    ],
    officialSolution: "CompletableFuture.supplyAsync(() -> 42);",
    explanation: "Metoda statică supplyAsync primește un Supplier<U> și returnează imediat un CompletableFuture fără a bloca firul curent.",
    hint: "Scrie: CompletableFuture.supplyAsync(() -> 42);"
  },
  {
    id: "java-e1",
    track: "Java",
    icon: "☕",
    level: "5. Exemplar",
    xp: 75,
    title: "Arhitectură Concurrency: volatile și Double-Checked Locking",
    theory: "La nivel de arhitect JVM, cuvântul-cheie <code>volatile</code> garantează vizibilitatea modificărilor între firele de execuție (citire/scriere directă din memoria principală, nu din cache-ul CPU) și interzice reordonarea instrucțiunilor de către compilatorul JIT la instanțierea unui Singleton.",
    example: "public class Engine {\n  private static volatile Engine instance;\n  public static Engine getInstance() {\n    if (instance == null) {\n      synchronized (Engine.class) {\n        if (instance == null) instance = new Engine();\n      }\n    }\n    return instance;\n  }\n}",
    prompt: "Declară câmpul static privat și volatil de tip 'Config' numit 'instance' pentru un Singleton thread-safe.",
    starterContext: "public class Config {\n  // Declară câmpul aici:\n}",
    caseSensitive: true,
    acceptedAnswers: [
      "private static volatile Config instance;",
      "private volatile static Config instance;"
    ],
    officialSolution: "private static volatile Config instance;",
    explanation: "Fără modificatorul 'volatile', un alt fir de execuție ar putea vedea o referință nenulă către un obiect parțial construit din cauza reordonării instrucțiunilor în JVM.",
    hint: "Folosește toți modificatorii: private static volatile Config instance;"
  },

  // ==========================================================================
  // SECȚIUNEA 2: SQL (ÎNCEPĂTOR -> JUNIOR -> MIDDLE -> SENIOR -> EXEMPLAR)
  // ==========================================================================
  {
    id: "sql-b1",
    track: "SQL",
    icon: "🗄️",
    level: "1. Începător",
    xp: 20,
    title: "UPDATE și DELETE cu Filtrare Sigură WHERE",
    theory: "Comanda <code>UPDATE tabel SET col = val WHERE condiție;</code> modifică rândurile existente, iar <code>DELETE FROM tabel WHERE condiție;</code> le șterge. Atenție: omiterea clauzei <code>WHERE</code> va modifica sau șterge <strong>toate înregistrările din tabel</strong>!",
    example: "UPDATE Products\nSET Price = 29.99\nWHERE ProductID = 105;\n\nDELETE FROM Logs WHERE CreatedYear < 2020;",
    prompt: "Scrie o comandă SQL care actualizează tabelul 'Users', setând coloana 'Active = 0' doar acolo unde 'UserID = 10'.",
    starterContext: "Tabel: Users (UserID, Active)",
    caseSensitive: false,
    acceptedAnswers: [
      "UPDATE Users SET Active = 0 WHERE UserID = 10;",
      "UPDATE Users SET Active = 0 WHERE UserID = 10"
    ],
    officialSolution: "UPDATE Users SET Active = 0 WHERE UserID = 10;",
    explanation: "Clauza WHERE UserID = 10 izolează actualizarea la un singur rând, protejând restul tabelului.",
    hint: "Structura este: UPDATE Users SET Active = 0 WHERE UserID = 10;"
  },
  {
    id: "sql-j1",
    track: "SQL",
    icon: "🗄️",
    level: "2. Junior",
    xp: 30,
    title: "Funcții de Agregare, GROUP BY și HAVING",
    theory: "Funcțiile <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code> grupează rândurile prin <code>GROUP BY</code>. Regula de aur: <code>WHERE</code> filtrează rândurile <strong>înainte</strong> de grupare, în timp ce <code>HAVING</code> filtrează grupurile <strong>după</strong> aplicarea funcției de agregare.",
    example: "SELECT Department, COUNT(*) AS TotalEmp\nFROM Employees\nGROUP BY Department\nHAVING COUNT(*) > 5;",
    prompt: "Selectează 'Country' și 'COUNT(*)' din tabelul 'Customers', grupate după 'Country', păstrând cu HAVING doar țările cu 'COUNT(*) > 10'.",
    starterContext: "Ordinea clauzelor: SELECT ... FROM ... GROUP BY ... HAVING ...",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 10;",
      "SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 10"
    ],
    officialSolution: "SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 10;",
    explanation: "Deoarece filtrarea se bazează pe rezultatul agregat COUNT(*), trebuie utilizată clauza HAVING, nu WHERE.",
    hint: "Scrie: SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 10;"
  },
  {
    id: "sql-j2",
    track: "SQL",
    icon: "🗄️",
    level: "2. Junior",
    xp: 35,
    title: "INNER JOIN vs LEFT JOIN pe Tabele Relaționale",
    theory: "<code>INNER JOIN</code> returnează doar rândurile care au corespondent în ambele tabele. <code>LEFT JOIN</code> returnează toate rândurile din tabelul din stânga, completând cu <code>NULL</code> coloanele din dreapta dacă nu există potrivire.",
    example: "SELECT u.Name, o.OrderID\nFROM Users u\nLEFT JOIN Orders o ON u.UserID = o.UserID;",
    prompt: "Scrie o interogare care selectează '*' din 'Orders' și face 'INNER JOIN' cu tabelul 'Customers' pe condiția 'Orders.CustomerID = Customers.CustomerID'.",
    starterContext: "Tabele: Orders (OrderID, CustomerID), Customers (CustomerID, Name)",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
      "SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID",
      "SELECT * FROM Orders JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
      "SELECT * FROM Orders JOIN Customers ON Orders.CustomerID = Customers.CustomerID"
    ],
    officialSolution: "SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
    explanation: "Clauza ON specifică cheia străină și cheia primară prin care cele două tabele sunt corelate.",
    hint: "Folosește: SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
  },
  {
    id: "sql-m1",
    track: "SQL",
    icon: "🗄️",
    level: "3. Middle",
    xp: 45,
    title: "Expresii Condiționale CASE WHEN și COALESCE",
    theory: "Expresia <code>CASE WHEN condiție THEN rezultat ELSE alt_rezultat END</code> introduce logica if-else direct în proiecția SQL, iar <code>COALESCE(col, valoare_rezervă)</code> înlocuiește prima valoare <code>NULL</code> întâlnită cu o valoare implicită.",
    example: "SELECT Name,\n  COALESCE(Phone, 'Fără telefon') AS Contact,\n  CASE WHEN Salary > 5000 THEN 'Senior' ELSE 'Standard' END AS Tier\nFROM Staff;",
    prompt: "Folosește funcția COALESCE într-un SELECT pentru a returna coloana 'Discount' sau valoarea 0 dacă aceasta este NULL, din tabelul 'Sales'.",
    starterContext: "Sintaxă: SELECT COALESCE(col, 0) FROM Tabel;",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT COALESCE(Discount, 0) FROM Sales;",
      "SELECT COALESCE(Discount, 0) FROM Sales"
    ],
    officialSolution: "SELECT COALESCE(Discount, 0) FROM Sales;",
    explanation: "COALESCE previne propagarea valorilor NULL în calculele aritmetice ulterioare.",
    hint: "Scrie: SELECT COALESCE(Discount, 0) FROM Sales;"
  },
  {
    id: "sql-s1",
    track: "SQL",
    icon: "🗄️",
    level: "4. Senior",
    xp: 55,
    title: "Window Functions: ROW_NUMBER(), RANK() și PARTITION BY",
    theory: "Funcțiile fereastră (<em>Window Functions</em>) calculează valori agregate sau clasamente peste o partiție de rânduri fără a le comprima într-un singur rând (spre deosebire de <code>GROUP BY</code>). Sintaxa este: <code>FUNCȚIE() OVER (PARTITION BY col ORDER BY col DESC)</code>.",
    example: "SELECT Name, Department, Salary,\n  RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS DeptRank\nFROM Employees;",
    prompt: "Scrie expresia unei funcții fereastră care generează 'ROW_NUMBER() OVER (ORDER BY Salary DESC)' într-un SELECT pe tabelul 'Employees'.",
    starterContext: "Selectează doar expresia ROW_NUMBER() din Employees:",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) FROM Employees;",
      "SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) FROM Employees"
    ],
    officialSolution: "SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) FROM Employees;",
    explanation: "Clauza OVER (ORDER BY Salary DESC) definește fereastra ordonată descrescător după salariu și atribuie fiecărui rând un număr secvențial unic.",
    hint: "Scrie: SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) FROM Employees;"
  },
  {
    id: "sql-s2",
    track: "SQL",
    icon: "🗄️",
    level: "4. Senior",
    xp: 60,
    title: "Common Table Expressions (WITH / CTE)",
    theory: "Un CTE definit prin clauza <code>WITH NumeCTE AS (SELECT ...)</code> creează un set de rezultate temporar și lizibil care poate fi interogat ca un tabel obișnuit sau chiar auto-referențiat recursiv pentru parcurgerea arborilor organizaționali.",
    example: "WITH HighValueOrders AS (\n  SELECT CustomerID, Total FROM Orders WHERE Total > 1000\n)\nSELECT CustomerID, COUNT(*) FROM HighValueOrders GROUP BY CustomerID;",
    prompt: "Definește un CTE numit 'ActiveUsers' care selectează '*' din 'Users' unde 'Active = 1', apoi selectează '*' din 'ActiveUsers'.",
    starterContext: "Model: WITH ActiveUsers AS (...) SELECT * FROM ActiveUsers;",
    caseSensitive: false,
    acceptedAnswers: [
      "WITH ActiveUsers AS (SELECT * FROM Users WHERE Active = 1) SELECT * FROM ActiveUsers;",
      "WITH ActiveUsers AS (SELECT * FROM Users WHERE Active = 1) SELECT * FROM ActiveUsers"
    ],
    officialSolution: "WITH ActiveUsers AS (SELECT * FROM Users WHERE Active = 1) SELECT * FROM ActiveUsers;",
    explanation: "CTE-urile înlocuiesc subinterogările greu de citit și permit modularizarea interogărilor complexe de raportare.",
    hint: "Scrie: WITH ActiveUsers AS (SELECT * FROM Users WHERE Active = 1) SELECT * FROM ActiveUsers;"
  },
  {
    id: "sql-e1",
    track: "SQL",
    icon: "🗄️",
    level: "5. Exemplar",
    xp: 75,
    title: "Arhitectură DBA: Covering Indexes și Tranzacții Izolate",
    theory: "Un <strong>Covering Index</strong> include toate coloanele cerute de o interogare (prin clauza <code>INCLUDE</code> în SQL Server / PostgreSQL), permițând motorului de stocare să răspundă exclusiv din arborele B-Tree (<em>Index-Only Scan</em>) fără a mai accesa pagina de tabel (<em>Key Lookup / Heap Fetch</em>).",
    example: "CREATE INDEX IX_Orders_CustomerDate\nON Orders (CustomerID, OrderDate)\nINCLUDE (TotalAmount, Status);",
    prompt: "Creează un index numit 'IX_Users_Email' pe tabelul 'Users' pentru coloana '(Email)' care include coloana '(FullName)' folosind clauza INCLUDE.",
    starterContext: "Sintaxă: CREATE INDEX <nume> ON <tabel> (<cheie>) INCLUDE (<coloane>);",
    caseSensitive: false,
    acceptedAnswers: [
      "CREATE INDEX IX_Users_Email ON Users (Email) INCLUDE (FullName);",
      "CREATE INDEX IX_Users_Email ON Users (Email) INCLUDE (FullName)"
    ],
    officialSolution: "CREATE INDEX IX_Users_Email ON Users (Email) INCLUDE (FullName);",
    explanation: "Coloana Email devine cheia de căutare în B-Tree, iar FullName este stocată doar la nivelul nodurilor frunză pentru a elimina accesul la tabel.",
    hint: "Scrie: CREATE INDEX IX_Users_Email ON Users (Email) INCLUDE (FullName);"
  },

  // ==========================================================================
  // SECȚIUNEA 3: JAVASCRIPT (ÎNCEPĂTOR -> JUNIOR -> MIDDLE -> SENIOR -> EXEMPLAR)
  // ==========================================================================
  {
    id: "js-b1",
    track: "JavaScript",
    icon: "🟨",
    level: "1. Începător",
    xp: 20,
    title: "Buclele for, for...of și while în JavaScript",
    theory: "În JavaScript modern, pe lângă bucla clasică <code>for (let i = 0; i &lt; arr.length; i++)</code> și bucla <code>while</code>, parcurgerea valorilor dintr-un tablou sau șir de caractere se face cel mai curat cu <code>for (const item of iterable)</code>.",
    example: "const scores = [10, 20, 30];\nlet total = 0;\nfor (const s of scores) {\n  total += s;\n}",
    prompt: "Scrie antetul unei bucle 'for...of' care declară 'const user of users' și deschide acolada '{'.",
    starterContext: "const users = ['Ana', 'Dan', 'Mia'];",
    caseSensitive: true,
    acceptedAnswers: [
      "for (const user of users) {",
      "for(const user of users) {",
      "for (let user of users) {"
    ],
    officialSolution: "for (const user of users) {",
    explanation: "Bucla for...of iterează direct peste valorile elementelor din tablou, spre deosebire de for...in care iterează peste cheile/indecșii obiectului.",
    hint: "Scrie: for (const user of users) {"
  },
  {
    id: "js-j1",
    track: "JavaScript",
    icon: "🟨",
    level: "2. Junior",
    xp: 30,
    title: "Operatorul Spread (...) și Clonarea Imutabilă",
    theory: "Operatorul <code>...</code> (<em>spread</em>) despachetează elementele unui tablou sau proprietățile unui obiect într-o structură nouă, fiind esențial pentru actualizarea imutabilă a stării fără a modifica obiectul original.",
    example: "const baseConfig = { theme: 'dark', retries: 3 };\nconst prodConfig = { ...baseConfig, retries: 5 };",
    prompt: "Combină tablourile 'a' și 'b' într-o constantă nouă 'merged' folosind operatorul spread '[...a, ...b]'.",
    starterContext: "const a = [1, 2]; const b = [3, 4];",
    caseSensitive: true,
    acceptedAnswers: [
      "const merged = [...a, ...b];",
      "const merged = [...a, ...b]"
    ],
    officialSolution: "const merged = [...a, ...b];",
    explanation: "Expresia [...a, ...b] creează o instanță nouă de Array care conține toate elementele din 'a' urmate de cele din 'b'.",
    hint: "Scrie: const merged = [...a, ...b];"
  },
  {
    id: "js-m1",
    track: "JavaScript",
    icon: "🟨",
    level: "3. Middle",
    xp: 45,
    title: "Closures (Închideri Lexicale) și Încapsularea Stării",
    theory: "Un <strong>Closure</strong> apare atunci când o funcție internă păstrează accesul la variabilele din funcția părinte chiar și după ce funcția părinte și-a terminat execuția. Permite crearea de variabile private.",
    example: "function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = createCounter();\nnext(); // 1\nnext(); // 2",
    prompt: "Scrie o funcție săgeată pe o linie 'const makeAdder = x => y => x + y;' care folosește closure pentru a aduna 'x' și 'y'.",
    starterContext: "// Currying & Closure în ES6:",
    caseSensitive: true,
    acceptedAnswers: [
      "const makeAdder = x => y => x + y;",
      "const makeAdder = (x) => (y) => x + y;",
      "const makeAdder = x => y => x + y"
    ],
    officialSolution: "const makeAdder = x => y => x + y;",
    explanation: "Funcția internă y => x + y memorează parametrul 'x' în mediul său lexical chiar și după apelul inițial makeAdder(5).",
    hint: "Scrie: const makeAdder = x => y => x + y;"
  },
  {
    id: "js-m2",
    track: "JavaScript",
    icon: "🟨",
    level: "3. Middle",
    xp: 45,
    title: "Programare Asincronă: async / await și Promise.all()",
    theory: "Cuvântul-cheie <code>async</code> transformă orice funcție într-una care returnează o promisiune (<code>Promise</code>), iar <code>await</code> suspendă execuția funcției curente până la rezolvarea promisiunii. Pentru rularea în paralel a mai multor promisiuni se folosește <code>await Promise.all([p1, p2])</code>.",
    example: "async function loadDashboard() {\n  const [users, stats] = await Promise.all([fetchUsers(), fetchStats()]);\n  return { users, stats };\n}",
    prompt: "Folosește 'await Promise.all([p1, p2]);' și atribuie rezultatul constantei 'const results'.",
    starterContext: "// În interiorul unei funcții async:",
    caseSensitive: true,
    acceptedAnswers: [
      "const results = await Promise.all([p1, p2]);",
      "const results = await Promise.all([p1, p2])"
    ],
    officialSolution: "const results = await Promise.all([p1, p2]);",
    explanation: "Promise.all pornește ambele operații simultan și returnează un tablou cu rezultatele lor în ordinea declarată.",
    hint: "Scrie: const results = await Promise.all([p1, p2]);"
  },
  {
    id: "js-s1",
    track: "JavaScript",
    icon: "🟨",
    level: "4. Senior",
    xp: 60,
    title: "Event Loop: Microtasks vs Macrotasks și Debounce",
    theory: "În Event Loop-ul JavaScript, coada de <strong>Microtasks</strong> (<code>Promise.then</code>, <code>queueMicrotask</code>) este golită complet imediat după stiva de apeluri curentă, <strong>înainte</strong> ca browserul să execute orice <strong>Macrotask</strong> (<code>setTimeout</code>, <code>setInterval</code>).",
    example: "console.log('1');\nsetTimeout(() => console.log('2 - Macrotask'), 0);\nPromise.resolve().then(() => console.log('3 - Microtask'));\nconsole.log('4');\n// Ordinea reală afișată: 1, 4, 3 - Microtask, 2 - Macrotask",
    prompt: "Care este ordinea exactă a cifrelor afișate de codul: console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4); ? (Scrie cifrele separate prin virgulă).",
    starterContext: "// Analizează prioritatea Call Stack -> Microtask Queue -> Macrotask Queue:",
    caseSensitive: false,
    acceptedAnswers: ["1, 4, 3, 2", "1,4,3,2"],
    officialSolution: "1, 4, 3, 2",
    explanation: "1 și 4 rulează sincron pe stivă; 3 este un Microtask (Promise) și rulează imediat după codul sincron; 2 este un Macrotask (setTimeout) și rulează ultimul.",
    hint: "Codul sincron (1, 4) -> Microtask (3) -> Macrotask (2)."
  },
  {
    id: "js-e1",
    track: "JavaScript",
    icon: "🟨",
    level: "5. Exemplar",
    xp: 75,
    title: "Metaprogramare cu Proxy și Reflect",
    theory: "Obiectul <code>Proxy</code> permite interceptarea și redefinirea operațiilor fundamentale pe un obiect țintă (citire <code>get</code>, scriere <code>set</code>, ștergere <code>deleteProperty</code>) prin capcane (<em>traps</em>), stând la baza sistemelor de reactivitate moderne.",
    example: "const reactive = new Proxy(target, {\n  get(obj, prop, receiver) {\n    console.log(`Citire: ${String(prop)}`);\n    return Reflect.get(obj, prop, receiver);\n  }\n});",
    prompt: "Creează o instanță 'const p = new Proxy(target, handler);'.",
    starterContext: "const target = {}; const handler = {};",
    caseSensitive: true,
    acceptedAnswers: [
      "const p = new Proxy(target, handler);",
      "const p = new Proxy(target, handler)"
    ],
    officialSolution: "const p = new Proxy(target, handler);",
    explanation: "Constructorul Proxy primește două argumente obligatorii: obiectul țintă (target) și obiectul cu metodele interceptoare (handler).",
    hint: "Scrie: const p = new Proxy(target, handler);"
  },

  // ==========================================================================
  // SECȚIUNEA 4: ENGLEZĂ VOCABULAR GREU & TRADUCERI RO <-> EN (B2 -> C1 -> C2)
  // ==========================================================================
  {
    id: "eng-v1",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "2. Junior",
    xp: 30,
    title: "Vocabular & Traducere RO → EN: Verbe Esențiale detranziție B2+",
    theory: "Pentru a trece de la exprimarea simplă la una profesionistă, înlocuiește verbele uzuale cu echivalentele lor precise:\n• <strong>a amâna</strong> = <code>postpone</code> / <code>defer</code> (sau <code>put off</code>)\n• <strong>a îndeplini / a realiza</strong> = <code>accomplish</code> / <code>fulfil</code>\n• <strong>a depăși (un obstacol)</strong> = <code>overcome</code>\n• <strong>a îmbunătăți / a spori</strong> = <code>enhance</code>",
    example: "• RO: Am reușit să depășim toate dificultățile tehnice și să îmbunătățim performanța.\n• EN: We managed to overcome all technical difficulties and enhance performance.",
    prompt: "Traducere RO → EN: Tradu în engleză propoziția:\n„Trebuie să depășim aceste obstacole pentru a îmbunătăți calitatea.”\n(Folosește verbele 'overcome' și 'enhance').",
    starterContext: "Structură: We must [a depăși] these obstacles to [a îmbunătăți] quality.",
    caseSensitive: false,
    acceptedAnswers: [
      "We must overcome these obstacles to enhance quality.",
      "We must overcome these obstacles to enhance quality",
      "We must overcome these obstacles in order to enhance quality.",
      "We have to overcome these obstacles to enhance quality."
    ],
    officialSolution: "We must overcome these obstacles to enhance quality.",
    explanation: "'Overcome obstacles' și 'enhance quality' sunt colocații standard de nivel B2+/C1.",
    hint: "We must overcome these obstacles to enhance quality."
  },
  {
    id: "eng-v2",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "3. Middle",
    xp: 40,
    title: "Cuvinte Grele RO → EN: Verbe Academice și de Business (C1)",
    theory: "Memorează aceste 6 verbe de înaltă frecvență în texte C1/C2:\n1. <strong>a atenua / a diminua (un risc/impact)</strong> = <code>mitigate</code> (sau <code>alleviate</code>)\n2. <strong>a înrăutăți / a agrava o problemă</strong> = <code>exacerbate</code>\n3. <strong>a examina minuțios / la sânge</strong> = <code>scrutinize</code>\n4. <strong>a pune în pericol / a compromite</strong> = <code>jeopardize</code>\n5. <strong>a ocoli / a eluda o regulă</strong> = <code>circumvent</code>\n6. <strong>a submina / a slăbi treptat</strong> = <code>undermine</code>",
    example: "• RO: Această decizie pripită va înrăutăți criza și va pune în pericol întregul proiect.\n• EN: This hasty decision will exacerbate the crisis and jeopardize the entire project.",
    prompt: "Traducere RO → EN: Scrie în engleză propoziția:\n„Noile măsuri vor atenua riscurile financiare.”\n(Folosește verbul C1 'mitigate').",
    starterContext: "The new measures will [a atenua] financial risks.",
    caseSensitive: false,
    acceptedAnswers: [
      "The new measures will mitigate financial risks.",
      "The new measures will mitigate financial risks",
      "The new measures will mitigate the financial risks.",
      "The new measures will mitigate the financial risks"
    ],
    officialSolution: "The new measures will mitigate financial risks.",
    explanation: "Colocația 'mitigate risks' (a atenua riscurile) este indispensabilă în registrul formal, tehnic și financiar.",
    hint: "Înlocuiește [a atenua] cu 'mitigate': The new measures will mitigate financial risks."
  },
  {
    id: "eng-v3",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "3. Middle",
    xp: 45,
    title: "Cuvinte Grele EN → RO: Înțelegerea Nuanțelor de Nivel C1",
    theory: "Analizează sensul exact în română al acestor termeni dificili:\n• <code>ubiquitous</code> = <strong>omniprezent / ubicuu</strong> (prezent peste tot)\n• <code>ephemeral</code> = <strong>efemer / trecător</strong> (de scurtă durată)\n• <code>meticulous</code> = <strong>meticulos / extrem de atent la detalii</strong>\n• <code>detrimental</code> = <strong>dăunător / nociv</strong> (urmat de <em>to</em>)\n• <code>unprecedented</code> = <strong>fără precedent / nemaivăzut</strong>\n• <code>complacency</code> = <strong>autocomplacere / mulțumire de sine periculoasă</strong>",
    example: "• EN: Prolonged lack of sleep is detrimental to cognitive proficiency.\n• RO: Lipsa prelungită de somn este dăunătoare pentru competența cognitivă.",
    prompt: "Traducere EN → RO: Tradu în limba română propoziția:\n'Smartphones have become ubiquitous in modern society, while privacy has become ephemeral.'\n(Folosește cuvintele 'omniprezente' și 'efemeră').",
    starterContext: "Telefoanele inteligente au devenit [ubiquitous] în societatea modernă, în timp ce confidențialitatea a devenit [ephemeral].",
    caseSensitive: false,
    acceptedAnswers: [
      "Telefoanele inteligente au devenit omniprezente în societatea modernă, în timp ce confidențialitatea a devenit efemeră.",
      "Telefoanele inteligente au devenit omniprezente in societatea moderna, in timp ce confidentialitatea a devenit efemera.",
      "Telefoanele inteligente au devenit omniprezente în societatea modernă, în timp ce intimitatea a devenit efemeră."
    ],
    officialSolution: "Telefoanele inteligente au devenit omniprezente în societatea modernă, în timp ce confidențialitatea a devenit efemeră.",
    explanation: "'Ubiquitous' se traduce prin 'omniprezent(e)', iar 'ephemeral' prin 'efemer(ă) / trecător(oare)'.",
    hint: "Completează cu: Telefoanele inteligente au devenit omniprezente în societatea modernă, în timp ce confidențialitatea a devenit efemeră."
  },
  {
    id: "eng-v4",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "4. Senior",
    xp: 55,
    title: "Substantive Abstracte Grele: Traducere RO → EN (C1/C2)",
    theory: "Substantivele de nivel C1/C2 oferă greutate oricărui discurs:\n• <strong>discrepanță / neconcordanță</strong> = <code>discrepancy</code>\n• <strong>repercusiune / consecință complexă</strong> = <code>ramification</code> / <code>repercussion</code>\n• <strong>dilemă / situație dificilă</strong> = <code>predicament</code> / <code>quandary</code>\n• <strong>stimulent / motivație</strong> = <code>incentive</code>\n• <strong>reziliență / capacitate de revenire</strong> = <code>resilience</code>\n• <strong>competență înaltă / măiestrie</strong> = <code>proficiency</code>",
    example: "• RO: Există o discrepanță majoră între datele raportate și realitate.\n• EN: There is a major discrepancy between the reported data and reality.",
    prompt: "Traducere RO → EN: Tradu în engleză:\n„Există o discrepanță gravă între cele două rapoarte.”\n(Folosește 'There is a serious discrepancy...').",
    starterContext: "Folosește substantivul C1 'discrepancy' și prepoziția 'between':",
    caseSensitive: false,
    acceptedAnswers: [
      "There is a serious discrepancy between the two reports.",
      "There is a serious discrepancy between the two reports",
      "There is a grave discrepancy between the two reports."
    ],
    officialSolution: "There is a serious discrepancy between the two reports.",
    explanation: "Structura 'a discrepancy between X and Y' exprimă o diferență inexplicabilă între două surse care ar trebui să coincidă.",
    hint: "Scrie: There is a serious discrepancy between the two reports."
  },
  {
    id: "eng-v5",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "4. Senior",
    xp: 60,
    title: "Expresii Idiomatice & Phrasal Verbs C1/C2 (RO ↔ EN)",
    theory: "Expresii idiomatice și verbe frazale de nivel avansat:\n• <strong>a fi la înălțimea așteptărilor</strong> = <code>live up to expectations</code>\n• <strong>a da înapoi de la o promisiune / un acord</strong> = <code>renege on</code> / <code>back out of</code>\n• <strong>a ajunge la miezul / esența problemei</strong> = <code>get to the crux of the matter</code>\n• <strong>o sabie cu două tăișuri</strong> = <code>a double-edged sword</code>\n• <strong>a elimina treptat (un produs/sistem vechi)</strong> = <code>phase out</code>",
    example: "• RO: Automatizarea este o sabie cu două tăișuri, dar compania a decis să elimine treptat sistemele vechi.\n• EN: Automation is a double-edged sword, but the company decided to phase out legacy systems.",
    prompt: "Traducere RO → EN: Tradu în engleză:\n„Din păcate, noul software nu a fost la înălțimea așteptărilor noastre.”\n(Folosește 'did not live up to our expectations').",
    starterContext: "Unfortunately, the new software ...",
    caseSensitive: false,
    acceptedAnswers: [
      "Unfortunately, the new software did not live up to our expectations.",
      "Unfortunately, the new software didn't live up to our expectations.",
      "Unfortunately, the new software did not live up to our expectations"
    ],
    officialSolution: "Unfortunately, the new software did not live up to our expectations.",
    explanation: "'To live up to expectations' este expresia idiomatică standard în C1 pentru 'a se ridica la nivelul așteptărilor'.",
    hint: "Scrie: Unfortunately, the new software did not live up to our expectations."
  },
  {
    id: "eng-v6",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "5. Exemplar",
    xp: 75,
    title: "Sinteză C2: Traducere Complexă cu Vocabular Greu & Inversiune",
    theory: "La nivelul C2 (Exemplar), combinăm vocabularul academic (<code>jeopardize</code>, <code>scrutinize</code>, <code>ostensibly</code>, <code>inexorable</code>, <code>corroborate</code>) cu structurile gramaticale de elită (inversiunea negativă și subjonctivul formal).",
    example: "• RO: Sub nicio formă nu trebuie să eludăm protocolul de securitate, deoarece acest lucru ar pune în pericol integritatea sistemului.\n• EN: Under no circumstances must we circumvent the security protocol, as doing so would jeopardize system integrity.",
    prompt: "Traducere RO → EN (Nivel C2): Tradu în engleză folosind inversiunea 'Under no circumstances should you' și verbul 'jeopardize':\n„Sub nicio formă nu ar trebui să pui în pericol acest proiect.”",
    starterContext: "Under no circumstances should you [a pune în pericol] this project.",
    caseSensitive: false,
    acceptedAnswers: [
      "Under no circumstances should you jeopardize this project.",
      "Under no circumstances should you jeopardize this project",
      "Under no circumstances should you jeopardise this project."
    ],
    officialSolution: "Under no circumstances should you jeopardize this project.",
    explanation: "Această frază îmbină inversiunea după locuțiunea negativă 'Under no circumstances' (should you) cu verbul de registru înalt 'jeopardize'.",
    hint: "Scrie: Under no circumstances should you jeopardize this project."
  }
];

// ============================================================================
// GENERATOR AUTOMAT DE MODULE SUPLIMENTARE (DICȚIONAR ACTIV RO <-> EN & COD)
// Creează automat zeci de exerciții suplimentare pentru studiu pe luni înainte
// ============================================================================
const VOCABULARY_DRILLS_BANK = [
  {
    ro: "inexorabil / imposibil de oprit",
    en: "inexorable",
    level: "5. Exemplar",
    sentenceRo: "Progresul tehnologic este inexorabil.",
    sentenceEn: "Technological progress is inexorable."
  },
  {
    ro: "a corobora / a confirma cu dovezi solide",
    en: "corroborate",
    level: "5. Exemplar",
    sentenceRo: "Noile date coroborează ipoteza noastră inițială.",
    sentenceEn: "The new data corroborates our initial hypothesis."
  },
  {
    ro: "învechit / perimat / scos din uz",
    en: "obsolete",
    level: "3. Middle",
    sentenceRo: "Acest protocol de criptare a devenit complet perimat.",
    sentenceEn: "This encryption protocol has become completely obsolete."
  },
  {
    ro: "echivoc / ambiguu (deschis la mai multe interpretări)",
    en: "ambiguous",
    level: "2. Junior",
    sentenceRo: "Formularea contractului este intenționat ambiguă.",
    sentenceEn: "The wording of the contract is intentionally ambiguous."
  },
  {
    ro: "a încuraja / a cultiva (inovația, colaborarea)",
    en: "foster",
    level: "4. Senior",
    sentenceRo: "Scopul nostru este să încurajăm inovația pe termen lung.",
    sentenceEn: "Our goal is to foster long-term innovation."
  },
  {
    ro: "plauzibil / verosimil (credibil la prima vedere)",
    en: "plausible",
    level: "3. Middle",
    sentenceRo: "Explicația lui pare plauzibilă, dar necesită verificare.",
    sentenceEn: "His explanation seems plausible, but it requires verification."
  },
  {
    ro: "aparent / chipurile (pe dinafară așa pare, dar realitatea diferă)",
    en: "ostensibly",
    level: "5. Exemplar",
    sentenceRo: "Aparent, decizia a fost luată pentru a reduce costurile.",
    sentenceEn: "Ostensibly, the decision was made to reduce costs."
  },
  {
    ro: "întortocheat / excesiv de complicat (un argument, un cod)",
    en: "convoluted",
    level: "4. Senior",
    sentenceRo: "Arhitectura veche era prea întortocheată pentru a fi menținută.",
    sentenceEn: "The old architecture was too convoluted to maintain."
  },
  {
    ro: "scrupulos / extrem de pretențios și atent la detalii",
    en: "fastidious",
    level: "5. Exemplar",
    sentenceRo: "El este extrem de scrupulos în privința calității codului.",
    sentenceEn: "He is fastidious about code quality."
  },
  {
    ro: "a divulga / a dezvălui informații confidențiale",
    en: "disclose",
    level: "3. Middle",
    sentenceRo: "Angajații nu au voie să divulge informații confidențiale.",
    sentenceEn: "Employees are not allowed to disclose confidential information."
  },
  {
    ro: "tenacitate / perseverență neclintită",
    en: "tenacity",
    level: "4. Senior",
    sentenceRo: "Succesul în inginerie cere disciplină și tenacitate.",
    sentenceEn: "Success in engineering requires discipline and tenacity."
  },
  {
    ro: "părtinire / prejudecată cognitivă",
    en: "bias",
    level: "2. Junior",
    sentenceRo: "Algoritmul trebuie testat pentru a elimina orice părtinire.",
    sentenceEn: "The algorithm must be tested to eliminate any bias."
  }
];

// Transformă banca de vocabular în lecții bidirecționale RO -> EN și EN -> RO
const GENERATED_VOCAB_LESSONS = VOCABULARY_DRILLS_BANK.map((item, idx) => ({
  id: `eng- lexical-${idx + 1}`,
  track: "Engleză C1",
  icon: "🇬🇧",
  level: item.level,
  xp: 45,
  title: `Lexic Avansat #${idx + 1}: „${item.en}” (${item.ro})`,
  theory: `Cuvânt-cheie de nivel avansat: <code>${item.en}</code> = <strong>${item.ro}</strong>.<br>Analizează modul în care acest termen ridică nivelul stilistic al propoziției din română în engleză și invers.`,
  example: `• Română: ${item.sentenceRo}\n• Engleză: ${item.sentenceEn}`,
  prompt: `Traducere RO → EN: Tradu în engleză propoziția de mai jos folosind obligatoriu cuvântul '${item.en}':\n„${item.sentenceRo}”`,
  starterContext: `Cuvânt țintă: ${item.en} (${item.ro})`,
  caseSensitive: false,
  acceptedAnswers: [
    item.sentenceEn,
    item.sentenceEn.replace(/\.$/, "")
  ],
  officialSolution: item.sentenceEn,
  explanation: `Termenul '${item.en}' redă cu precizie maximă sensul de '${item.ro}' în registrul C1/C2.`,
  hint: `Folosește structura: ${item.sentenceEn}`
}));

// Îmbinarea cu DEFAULT_CURRICULUM existent astfel încât nimic să nu se piardă
if (typeof DEFAULT_CURRICULUM !== "undefined" && Array.isArray(DEFAULT_CURRICULUM)) {
  // Etichetăm lecțiile inițiale pe niveluri clare dacă nu aveau număr de nivel
  DEFAULT_CURRICULUM.forEach(lesson => {
    if (!/^[1-5]\./.test(lesson.level)) {
      if (lesson.id === "sql-1" || lesson.id === "sql-2") lesson.level = "1. Începător";
      else if (lesson.id === "java-1" || lesson.id === "js-1") lesson.level = "2. Junior";
      else if (lesson.id === "sql-3" || lesson.id === "java-2" || lesson.id === "js-2" || lesson.id === "eng-1") lesson.level = "3. Middle";
      else lesson.level = "4. Senior";
    }
  });

  DEFAULT_CURRICULUM.push(...EXTENDED_MODULES, ...GENERATED_VOCAB_LESSONS);
}