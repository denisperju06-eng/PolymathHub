// ============================================================================
// CURRICULUM AVANSAT ȘI EXTINS - EXPANDARE MASIVĂ (SQL, JAVA, JS, ENGLEZĂ C1)
// ============================================================================

const ADVANCED_CURRICULUM_EXPANSION = [
  // ==========================================================================
  // TRACK 1: SQL (BAZE DE DATE, WINDOW FUNCTIONS, TRANZACȚII, CTE)
  // ==========================================================================
  {
    id: "sql-adv-1",
    track: "SQL",
    icon: "🗄️",
    level: "1. Începător",
    xp: 25,
    title: "Sortare și Limitare: ORDER BY și LIMIT",
    theory: "Clauza <code>ORDER BY coloana ASC|DESC</code> ordonează rândurile după una sau mai multe coloane. Clauza <code>LIMIT n</code> restricționează numărul de înregistrări returnate la primele <code>n</code> rânduri din setul sortat.",
    example: "-- Returnează top 3 produse cele mai scumpe:\nSELECT ProductName, Price\nFROM Products\nORDER BY Price DESC\nLIMIT 3;",
    prompt: "Selectează toate coloanele (*) din tabelul 'Users' ordonate descrescător după 'Age', limitând rezultatul la primii 5 utilizatori.",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT * FROM Users ORDER BY Age DESC LIMIT 5;",
      "SELECT * FROM Users ORDER BY Age DESC LIMIT 5"
    ],
    officialSolution: "SELECT * FROM Users ORDER BY Age DESC LIMIT 5;",
    explanation: "Se specifică SELECT * FROM Users urmat de clauza ORDER BY Age DESC pentru ordonare descrescătoare și LIMIT 5 pentru a prelua doar primii 5.",
    hint: "Folosește sintaxa: SELECT * FROM Users ORDER BY Age DESC LIMIT 5;"
  },
  {
    id: "sql-adv-2",
    track: "SQL",
    icon: "🗄️",
    level: "1. Începător",
    xp: 25,
    title: "Căutare după Șablon: Operatorul LIKE și Wildcard-ul %",
    theory: "Operatorul <code>LIKE</code> filtrează datele pe baza unui model de text. Simbolul <code>%</code> reprezintă zero, unul sau multiple caractere arbitrare, iar <code>_</code> reprezintă exact un singur caracter.",
    example: "-- Găsește toți utilizatorii al căror nume începe cu litera 'A':\nSELECT * FROM Users WHERE Name LIKE 'A%';",
    prompt: "Selectează coloana 'Email' din tabelul 'Clients' unde adresa de email se termină cu '@gmail.com'.",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT Email FROM Clients WHERE Email LIKE '%@gmail.com';",
      "SELECT Email FROM Clients WHERE Email LIKE '%@gmail.com'"
    ],
    officialSolution: "SELECT Email FROM Clients WHERE Email LIKE '%@gmail.com';",
    explanation: "Șablonul '%@gmail.com' acceptă orice prefix de caractere înainte de secvența fixă '@gmail.com'.",
    hint: "Model: SELECT Email FROM Clients WHERE Email LIKE '%@gmail.com';"
  },
  {
    id: "sql-adv-3",
    track: "SQL",
    icon: "🗄️",
    level: "2. Junior",
    xp: 30,
    title: "Agregare și Grupare: GROUP BY cu AVG()",
    theory: "Clauza <code>GROUP BY</code> sintetizează rândurile pe baza valorilor identice dintr-o coloană. Se folosește împreună cu funcții de agregare precum <code>AVG()</code>, <code>COUNT()</code>, <code>SUM()</code>, <code>MIN()</code> sau <code>MAX()</code>.",
    example: "-- Calculează media prețurilor pe fiecare categorie:\nSELECT Category, AVG(Price)\nFROM Products\nGROUP BY Category;",
    prompt: "Selectează 'Department' și salariul mediu 'AVG(Salary)' din tabelul 'Employees', grupând datele după 'Department'.",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT Department, AVG(Salary) FROM Employees GROUP BY Department;",
      "SELECT Department, AVG(Salary) FROM Employees GROUP BY Department"
    ],
    officialSolution: "SELECT Department, AVG(Salary) FROM Employees GROUP BY Department;",
    explanation: "Interogarea grupează înregistrările după fiecare departament distinct și calculează media salariilor din acel grup.",
    hint: "Sintaxă: SELECT Department, AVG(Salary) FROM Employees GROUP BY Department;"
  },
  {
    id: "sql-adv-4",
    track: "SQL",
    icon: "🗄️",
    level: "2. Junior",
    xp: 30,
    title: "Filtrarea Grupurilor Agregate: Clauza HAVING",
    theory: "Clauza <code>HAVING</code> este echivalentul lui <code>WHERE</code> aplicat grupurilor rezultate din <code>GROUP BY</code>. Diferența crucială: <code>WHERE</code> filtrează rândurile înainte de agregare, în timp ce <code>HAVING</code> filtrează rezultatele după agregare.",
    example: "-- Păstrează doar departamentele cu mai mult de 5 angajați:\nSELECT Department, COUNT(*)\nFROM Employees\nGROUP BY Department\nHAVING COUNT(*) > 5;",
    prompt: "Selectează 'Category' și 'COUNT(*)' din 'Products', grupate după 'Category', păstrând doar categoriile cu mai mult de 10 produse folosind HAVING.",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT Category, COUNT(*) FROM Products GROUP BY Category HAVING COUNT(*) > 10;",
      "SELECT Category, COUNT(*) FROM Products GROUP BY Category HAVING COUNT(*) > 10"
    ],
    officialSolution: "SELECT Category, COUNT(*) FROM Products GROUP BY Category HAVING COUNT(*) > 10;",
    explanation: "HAVING COUNT(*) > 10 elimină din raport grupurile de produse care nu ating pragul numeric de 10 unități.",
    hint: "Scrie: SELECT Category, COUNT(*) FROM Products GROUP BY Category HAVING COUNT(*) > 10;"
  },
  {
    id: "sql-adv-5",
    track: "SQL",
    icon: "🗄️",
    level: "2. Junior",
    xp: 30,
    title: "Actualizare Date: UPDATE cu Condiție Strictă",
    theory: "Comanda <code>UPDATE tabel SET col = val WHERE conditie;</code> modifică valorile existente. Fără clauza <code>WHERE</code>, instrucțiunea ar actualiza indiscriminat absolut toate rândurile din tabel!",
    example: "UPDATE Users SET IsVerified = 1 WHERE EmailVerifiedAt IS NOT NULL;",
    prompt: "Actualizează tabelul 'Accounts' setând coloana 'Status' la valoarea 'Active' unde 'Balance' este mai mare decât 0.",
    caseSensitive: false,
    acceptedAnswers: [
      "UPDATE Accounts SET Status = 'Active' WHERE Balance > 0;",
      "UPDATE Accounts SET Status = 'Active' WHERE Balance > 0"
    ],
    officialSolution: "UPDATE Accounts SET Status = 'Active' WHERE Balance > 0;",
    explanation: "UPDATE modifică valorile din coloana Status doar pentru conturile cu sold pozitiv (Balance > 0).",
    hint: "Model: UPDATE Accounts SET Status = 'Active' WHERE Balance > 0;"
  },
  {
    id: "sql-adv-6",
    track: "SQL",
    icon: "🗄️",
    level: "2. Junior",
    xp: 30,
    title: "Ștergere Selectivă: DELETE FROM cu WHERE",
    theory: "Instrucțiunea <code>DELETE FROM tabel WHERE conditie;</code> șterge doar tuplurile care satisfac predicatul logic. Atenție: dacă omiți <code>WHERE</code>, conținutul întregului tabel va fi șters ireversibil.",
    example: "DELETE FROM Sessions WHERE ExpiredAt < CURRENT_TIMESTAMP;",
    prompt: "Șterge toate înregistrările din tabelul 'Logs' unde coloana 'CreatedYear' este mai mică de 2020.",
    caseSensitive: false,
    acceptedAnswers: [
      "DELETE FROM Logs WHERE CreatedYear < 2020;",
      "DELETE FROM Logs WHERE CreatedYear < 2020"
    ],
    officialSolution: "DELETE FROM Logs WHERE CreatedYear < 2020;",
    explanation: "Se folosește DELETE FROM Logs urmat de clauza WHERE CreatedYear < 2020.",
    hint: "Scrie: DELETE FROM Logs WHERE CreatedYear < 2020;"
  },
  {
    id: "sql-adv-7",
    track: "SQL",
    icon: "🗄️",
    level: "3. Middle",
    xp: 35,
    title: "Detecția Înregistrărilor Orfane: LEFT JOIN cu IS NULL",
    theory: "Un <code>LEFT JOIN</code> păstrează toate rândurile din tabelul stâng. Dacă un rând nu are corespondent în tabelul drept, câmpurile din dreapta vor fi populate cu <code>NULL</code>. Filtrând cu <code>WHERE dreapta.id IS NULL</code> identificăm instant elementele orfane (de exemplu clienți fără comenzi).",
    example: "SELECT u.Name FROM Users u LEFT JOIN Profiles p ON u.Id = p.UserId WHERE p.Id IS NULL;",
    prompt: "Selectează 'c.Name' din tabelul 'Customers c' cu LEFT JOIN pe 'Orders o' (pe c.Id = o.CustomerId) unde comanda lipsește (o.Id IS NULL).",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT c.Name FROM Customers c LEFT JOIN Orders o ON c.Id = o.CustomerId WHERE o.Id IS NULL;",
      "SELECT c.Name FROM Customers c LEFT JOIN Orders o ON c.Id = o.CustomerId WHERE o.Id IS NULL"
    ],
    officialSolution: "SELECT c.Name FROM Customers c LEFT JOIN Orders o ON c.Id = o.CustomerId WHERE o.Id IS NULL;",
    explanation: "Această tehnică este cel mai rapid mod de a găsi entități fără relații active (anti-join).",
    hint: "Scrie: SELECT c.Name FROM Customers c LEFT JOIN Orders o ON c.Id = o.CustomerId WHERE o.Id IS NULL;"
  },
  {
    id: "sql-adv-8",
    track: "SQL",
    icon: "🗄️",
    level: "3. Middle",
    xp: 35,
    title: "Condiționale în SQL: Expresia CASE WHEN",
    theory: "Expresia <code>CASE WHEN cond THEN val1 ELSE val2 END</code> permite adăugarea de logică condițională tip 'if-else' direct în clauza <code>SELECT</code> sau în clauze de ordonare.",
    example: "SELECT Name, CASE WHEN Score >= 50 THEN 'Pass' ELSE 'Fail' END AS Result FROM Students;",
    prompt: "Scrie o interogare care selectează 'Title' și expresia CASE WHEN Stock > 0 THEN 'In Stock' ELSE 'Out of Stock' END din tabelul 'Products'.",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT Title, CASE WHEN Stock > 0 THEN 'In Stock' ELSE 'Out of Stock' END FROM Products;",
      "SELECT Title, CASE WHEN Stock > 0 THEN 'In Stock' ELSE 'Out of Stock' END FROM Products"
    ],
    officialSolution: "SELECT Title, CASE WHEN Stock > 0 THEN 'In Stock' ELSE 'Out of Stock' END FROM Products;",
    explanation: "CASE evaluează coloana Stock pentru fiecare rând și întoarce eticheta adecvată.",
    hint: "Folosește: SELECT Title, CASE WHEN Stock > 0 THEN 'In Stock' ELSE 'Out of Stock' END FROM Products;"
  },
  {
    id: "sql-adv-9",
    track: "SQL",
    icon: "🗄️",
    level: "3. Middle",
    xp: 35,
    title: "Reuniunea Seturilor: UNION ALL",
    theory: "<code>UNION ALL</code> unește rezultatele a două sau mai multe interogări cu aceeași structură de coloane, păstrând toate duplicatele. Este mult mai rapid decât <code>UNION</code> simplu deoarece nu execută o sortare suplimentară pentru deduplicare.",
    example: "SELECT City FROM Customers UNION ALL SELECT City FROM Suppliers;",
    prompt: "Combină 'City' din tabelul 'Customers' cu 'City' din tabelul 'Suppliers' folosind UNION ALL.",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT City FROM Customers UNION ALL SELECT City FROM Suppliers;",
      "SELECT City FROM Customers UNION ALL SELECT City FROM Suppliers"
    ],
    officialSolution: "SELECT City FROM Customers UNION ALL SELECT City FROM Suppliers;",
    explanation: "UNION ALL concatenează listele celor două tabele păstrând duplicatele fără operații costisitoare de sortare.",
    hint: "Model: SELECT City FROM Customers UNION ALL SELECT City FROM Suppliers;"
  },
  {
    id: "sql-adv-10",
    track: "SQL",
    icon: "🗄️",
    level: "3. Middle",
    xp: 35,
    title: "Substituirea Valorilor Nule: Funcția COALESCE",
    theory: "Funcția standard <code>COALESCE(val1, val2, ... valN)</code> evaluează argumentele în ordine și returnează prima valoare care nu este <code>NULL</code>. Este soluția ideală pentru furnizarea de valori implicite.",
    example: "SELECT Name, COALESCE(Nickname, Name, 'Guest') FROM Users;",
    prompt: "Selectează 'Name' și COALESCE(Phone, 'Fără telefon') din tabelul 'Employees'.",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT Name, COALESCE(Phone, 'Fără telefon') FROM Employees;",
      "SELECT Name, COALESCE(Phone, 'Fără telefon') FROM Employees"
    ],
    officialSolution: "SELECT Name, COALESCE(Phone, 'Fără telefon') FROM Employees;",
    explanation: "Dacă Phone este NULL, COALESCE va returna șirul descriptiv 'Fără telefon'.",
    hint: "Scrie: SELECT Name, COALESCE(Phone, 'Fără telefon') FROM Employees;"
  },
  {
    id: "sql-adv-11",
    track: "SQL",
    icon: "🗄️",
    level: "4. Senior",
    xp: 40,
    title: "Optimizare Subinterogări: Operatorul EXISTS",
    theory: "Operatorul <code>WHERE EXISTS (SELECT 1 FROM ...)</code> verifică existența a cel puțin unui rând valid. Motorul de baze de date efectuează short-circuiting (se oprește la prima potrivire găsită), fiind adesea mult mai rapid decât <code>IN</code> cu subinterogări.",
    example: "SELECT * FROM Authors a WHERE EXISTS (SELECT 1 FROM Books b WHERE b.AuthorId = a.Id);",
    prompt: "Selectează toate coloanele (*) din 'Suppliers s' unde EXISTS (SELECT 1 FROM Products p WHERE p.SupplierId = s.Id).",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT * FROM Suppliers s WHERE EXISTS (SELECT 1 FROM Products p WHERE p.SupplierId = s.Id);",
      "SELECT * FROM Suppliers s WHERE EXISTS (SELECT 1 FROM Products p WHERE p.SupplierId = s.Id)"
    ],
    officialSolution: "SELECT * FROM Suppliers s WHERE EXISTS (SELECT 1 FROM Products p WHERE p.SupplierId = s.Id);",
    explanation: "Subinterogarea returnează adevărat de îndată ce este depistat un produs ce aparține furnizorului s.",
    hint: "Scrie: SELECT * FROM Suppliers s WHERE EXISTS (SELECT 1 FROM Products p WHERE p.SupplierId = s.Id);"
  },
  {
    id: "sql-adv-12",
    track: "SQL",
    icon: "🗄️",
    level: "4. Senior",
    xp: 40,
    title: "Window Functions: ROW_NUMBER() OVER",
    theory: "Funcțiile analitice (Window Functions) operează pe un set de rânduri denumit partiție, dar nu colapsează datele într-un singur rând precum GROUP BY. <code>ROW_NUMBER() OVER (PARTITION BY dep ORDER BY sal DESC)</code> generează indexul rândului per grup.",
    example: "SELECT Name, Department, ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RankNum FROM Employees;",
    prompt: "Selectează Name, Department, ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RankNum FROM Employees;",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT Name, Department, ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RankNum FROM Employees;",
      "SELECT Name, Department, ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RankNum FROM Employees"
    ],
    officialSolution: "SELECT Name, Department, ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RankNum FROM Employees;",
    explanation: "Fiecare angajat primește un număr de ordine unic în cadrul departamentului său, ordonat după mărimea salariului.",
    hint: "Copiază cu atenție sintaxa: SELECT Name, Department, ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RankNum FROM Employees;"
  },
  {
    id: "sql-adv-13",
    track: "SQL",
    icon: "🗄️",
    level: "4. Senior",
    xp: 40,
    title: "Common Table Expressions: Clauza WITH (CTE)",
    theory: "Un CTE (Common Table Expression) este un set de rezultate temporar pe care îl poți referenția în cadrul aceleiași instrucțiuni SELECT, INSERT sau UPDATE. Îmbunătățește masiv modularitatea și lizibilitatea interogărilor complexe.",
    example: "WITH RegionalSales AS (\n  SELECT Region, SUM(Amount) AS TotalSales FROM Orders GROUP BY Region\n)\nSELECT Region, TotalSales FROM RegionalSales WHERE TotalSales > 50000;",
    prompt: "Scrie un CTE: WITH HighEarners AS (SELECT * FROM Employees WHERE Salary > 10000) SELECT * FROM HighEarners;",
    caseSensitive: false,
    acceptedAnswers: [
      "WITH HighEarners AS (SELECT * FROM Employees WHERE Salary > 10000) SELECT * FROM HighEarners;",
      "WITH HighEarners AS (SELECT * FROM Employees WHERE Salary > 10000) SELECT * FROM HighEarners"
    ],
    officialSolution: "WITH HighEarners AS (SELECT * FROM Employees WHERE Salary > 10000) SELECT * FROM HighEarners;",
    explanation: "Construcția WITH definește blocul 'HighEarners', care este apoi consumat imediat în instrucțiunea SELECT următoare.",
    hint: "Scrie: WITH HighEarners AS (SELECT * FROM Employees WHERE Salary > 10000) SELECT * FROM HighEarners;"
  },
  {
    id: "sql-adv-14",
    track: "SQL",
    icon: "🗄️",
    level: "5. Exemplar",
    xp: 50,
    title: "Serii Temporale: Funcția Analitică LAG()",
    theory: "Funcția <code>LAG(val, offset) OVER (ORDER BY col)</code> returnează valoarea unei coloane din rândul anterior fără a recurge la un auto-join lent. Este esențială în analize financiare (creșteri MoM/YoY).",
    example: "SELECT Month, Revenue, LAG(Revenue, 1) OVER (ORDER BY Month) AS PreviousMonthRevenue FROM Sales;",
    prompt: "Selectează DayDate, Revenue, LAG(Revenue, 1) OVER (ORDER BY DayDate) AS PrevRevenue FROM DailySales;",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT DayDate, Revenue, LAG(Revenue, 1) OVER (ORDER BY DayDate) AS PrevRevenue FROM DailySales;",
      "SELECT DayDate, Revenue, LAG(Revenue, 1) OVER (ORDER BY DayDate) AS PrevRevenue FROM DailySales"
    ],
    officialSolution: "SELECT DayDate, Revenue, LAG(Revenue, 1) OVER (ORDER BY DayDate) AS PrevRevenue FROM DailySales;",
    explanation: "LAG accesează venitul zilei precedente conform ordonării calendaristice a coloanei DayDate.",
    hint: "Model: SELECT DayDate, Revenue, LAG(Revenue, 1) OVER (ORDER BY DayDate) AS PrevRevenue FROM DailySales;"
  },
  {
    id: "sql-adv-15",
    track: "SQL",
    icon: "🗄️",
    level: "5. Exemplar",
    xp: 50,
    title: "Garanția ACID: Comanda COMMIT",
    theory: "În sistemele RDBMS relaționale, modificările efectuate într-o tranzacție sunt izolate și temporare până când sunt scrise permanent pe disc prin comanda <code>COMMIT;</code> sau anulate prin <code>ROLLBACK;</code>.",
    example: "BEGIN TRANSACTION;\nUPDATE Accounts SET Balance = Balance - 100 WHERE Id = 1;\nUPDATE Accounts SET Balance = Balance + 100 WHERE Id = 2;\nCOMMIT;",
    prompt: "Scrie comanda SQL simplă și obligatorie pentru a confirma definitiv toate modificările tranzacției curente pe disc.",
    caseSensitive: false,
    acceptedAnswers: [
      "COMMIT;",
      "COMMIT"
    ],
    officialSolution: "COMMIT;",
    explanation: "Comanda COMMIT; persistă modificările tranzacției și eliberează blocajele de nivel de rând (locks).",
    hint: "Scrie simplu: COMMIT;"
  },

  // ==========================================================================
  // TRACK 2: JAVA (COLECȚII, STREAMS, CONCURENȚĂ, STRUCTURI MODERNE)
  // ==========================================================================
  {
    id: "java-adv-1",
    track: "Java",
    icon: "☕",
    level: "1. Începător",
    xp: 20,
    title: "Controlul Fluxului: Bucla for Clasică",
    theory: "Bucla <code>for (inițializare; condiție; pas)</code> iterează un bloc de cod un număr determinat de ori. Este fundamentul parcurgerii secvențiale în Java.",
    example: "for (int i = 0; i < 5; i++) {\n  System.out.println(\"Index: \" + i);\n}",
    prompt: "Scrie antetul unei bucle for care inițializează 'int i = 0', iterează cât timp 'i < 10' și incrementează 'i++' (scrie doar linia antetului).",
    caseSensitive: true,
    acceptedAnswers: [
      "for (int i = 0; i < 10; i++)",
      "for(int i = 0; i < 10; i++)",
      "for (int i=0; i<10; i++)"
    ],
    officialSolution: "for (int i = 0; i < 10; i++)",
    explanation: "Antetul for necesită cele 3 clauze separate prin punct și virgulă: inițializare, condiție de oprire și pas de incrementare.",
    hint: "Scrie exact: for (int i = 0; i < 10; i++)"
  },
  {
    id: "java-adv-2",
    track: "Java",
    icon: "☕",
    level: "1. Începător",
    xp: 20,
    title: "Tablouri Primitive (Arrays): Alocare cu new",
    theory: "În Java, un tablou este un obiect cu dimensiune fixă alocat pe heap. Dimensiunea este specificată la instanțiere prin operatorul <code>new tip[dimensiune]</code>.",
    example: "int[] numbers = new int[10];\nString[] words = new String[3];",
    prompt: "Declară și inițializează un tablou de numere întregi numit 'scores' cu o capacitate de 5 elemente (folosind new int[5];).",
    caseSensitive: true,
    acceptedAnswers: [
      "int[] scores = new int[5];",
      "int [] scores = new int[5];"
    ],
    officialSolution: "int[] scores = new int[5];",
    explanation: "Sintaxa int[] scores = new int[5]; creează un tablou cu 5 poziții inițializate implicit cu valoarea 0.",
    hint: "Model: int[] scores = new int[5];"
  },
  {
    id: "java-adv-3",
    track: "Java",
    icon: "☕",
    level: "1. Începător",
    xp: 20,
    title: "Parcurgere Modernă: Bucla Enhanced For (for-each)",
    theory: "Bucla <code>for (Tip element : colectie)</code> elimină necesitatea indexării manuale și a erorilor de tip <code>ArrayIndexOutOfBoundsException</code>.",
    example: "for (String item : items) {\n  System.out.println(item);\n}",
    prompt: "Scrie antetul for-each care parcurge tabloul 'names', declarând fiecare element curent ca 'String name' (scrie doar linia antetului).",
    caseSensitive: true,
    acceptedAnswers: [
      "for (String name : names)",
      "for(String name : names)",
      "for (String name: names)"
    ],
    officialSolution: "for (String name : names)",
    explanation: "Sintaxa 'for (String name : names)' extrage automat fiecare referință din colecție la fiecare iterație.",
    hint: "Scrie exact: for (String name : names)"
  },
  {
    id: "java-adv-4",
    track: "Java",
    icon: "☕",
    level: "2. Junior",
    xp: 25,
    title: "Liste Dinamice: ArrayList și Interfața List",
    theory: "În Java profesional, programăm către interfețe: declarăm tipul referinței ca <code>List&lt;T&gt;</code> și instanțiem cu implementarea concretă <code>ArrayList&lt;&gt;()</code>.",
    example: "List<String> cities = new ArrayList<>();\ncities.add(\"Bucharest\");",
    prompt: "Instanțiază o listă dinamică de șiruri numită 'items' folosind tipul 'List<String>' și implementarea 'new ArrayList<>()'.",
    caseSensitive: true,
    acceptedAnswers: [
      "List<String> items = new ArrayList<>();",
      "List<String> items = new ArrayList<String>();"
    ],
    officialSolution: "List<String> items = new ArrayList<>();",
    explanation: "Utilizarea operatorului diamond <> evită repetarea tipului generic în partea dreaptă a atribuirii.",
    hint: "Scrie: List<String> items = new ArrayList<>();"
  },
  {
    id: "java-adv-5",
    track: "Java",
    icon: "☕",
    level: "2. Junior",
    xp: 25,
    title: "Eficiență în Concatenare: Clasa StringBuilder",
    theory: "Obiectele <code>String</code> sunt imutabile în Java, fiecare concatenare cu '+' creând un nou obiect în memorie. <code>StringBuilder</code> este mutabil și mult mai rapid în bucle.",
    example: "StringBuilder sb = new StringBuilder();\nsb.append(\"Total: \").append(100);",
    prompt: "Instanțiază un StringBuilder numit 'sb' și adaugă textul \"OK\" prin metoda înlănțuită .append(\"OK\"); (pe o singură linie).",
    caseSensitive: true,
    acceptedAnswers: [
      "StringBuilder sb = new StringBuilder().append(\"OK\");",
      "StringBuilder sb = new StringBuilder(); sb.append(\"OK\");"
    ],
    officialSolution: "StringBuilder sb = new StringBuilder().append(\"OK\");",
    explanation: "Metoda append() returnează propria instanță (this), permițând apeluri fluide înlănțuite (method chaining).",
    hint: "Scrie: StringBuilder sb = new StringBuilder().append(\"OK\");"
  },
  {
    id: "java-adv-6",
    track: "Java",
    icon: "☕",
    level: "2. Junior",
    xp: 25,
    title: "Switch Expresie Modern (Săgeată ->)",
    theory: "De la Java 14, <code>switch</code> poate fi folosit ca expresie cu ramuri de tip săgeată <code>case VAL -> rezultat;</code> fără a mai risca scăparea execuției prin căderea dintr-un caz în altul (elimină necesitatea break-ului).",
    example: "int code = switch (role) {\n  case \"ADMIN\" -> 1;\n  case \"USER\" -> 2;\n  default -> 0;\n};",
    prompt: "Scrie ramura case din switch care pentru valoarea \"ADMIN\" returnează 1 folosind sintaxa cu săgeată (case \"ADMIN\" -> 1;).",
    caseSensitive: true,
    acceptedAnswers: [
      "case \"ADMIN\" -> 1;",
      "case \"ADMIN\" -> 1"
    ],
    officialSolution: "case \"ADMIN\" -> 1;",
    explanation: "Săgeata '->' execută doar expresia din dreapta și oprește automat evaluarea celorlalte ramuri.",
    hint: "Model: case \"ADMIN\" -> 1;"
  },
  {
    id: "java-adv-7",
    track: "Java",
    icon: "☕",
    level: "3. Middle",
    xp: 30,
    title: "Asocieri Cheie-Valoare: Map și HashMap",
    theory: "Interfața <code>Map&lt;K, V&gt;</code> stochează perechi cheie-valoare unice. <code>HashMap</code> oferă acces și căutare în timp mediu de <code>O(1)</code> pe baza codului hash al cheilor.",
    example: "Map<String, Integer> inventory = new HashMap<>();\ninventory.put(\"Laptop\", 15);",
    prompt: "Declară o referință 'Map<String, Integer> inventory' și instanțiaz-o cu 'new HashMap<>()'.",
    caseSensitive: true,
    acceptedAnswers: [
      "Map<String, Integer> inventory = new HashMap<>();",
      "Map<String, Integer> inventory = new HashMap<String, Integer>();"
    ],
    officialSolution: "Map<String, Integer> inventory = new HashMap<>();",
    explanation: "Folosim tipurile ambalaj (Wrapper classes) String și Integer ca parametri generici pentru HashMap.",
    hint: "Scrie: Map<String, Integer> inventory = new HashMap<>();"
  },
  {
    id: "java-adv-8",
    track: "Java",
    icon: "☕",
    level: "3. Middle",
    xp: 30,
    title: "Căutare Sigură în Map: Metoda getOrDefault()",
    theory: "Metoda <code>map.getOrDefault(cheie, valoareImplicita)</code> previne primirea valorilor <code>null</code> dacă cheia căutată nu este prezentă în dicționar.",
    example: "int count = wordCounts.getOrDefault(\"java\", 0);",
    prompt: "Folosind harta 'inventory', extrage valoarea cheii \"apple\", sau 0 dacă aceasta lipsește, apelând metoda .getOrDefault().",
    caseSensitive: true,
    acceptedAnswers: [
      "inventory.getOrDefault(\"apple\", 0);",
      "inventory.getOrDefault(\"apple\", 0)"
    ],
    officialSolution: "inventory.getOrDefault(\"apple\", 0);",
    explanation: "Dacă \"apple\" nu se află în inventory, metoda returnează fallback-ul specificat: 0.",
    hint: "Scrie: inventory.getOrDefault(\"apple\", 0);"
  },
  {
    id: "java-adv-9",
    track: "Java",
    icon: "☕",
    level: "3. Middle",
    xp: 30,
    title: "Unicitate Garantată: Colecția Set și HashSet",
    theory: "Un <code>Set</code> este o colecție care nu permite elemente duplicate. La adăugarea unui element duplicat, metoda <code>add()</code> returnează <code>false</code> și nu modifică structura.",
    example: "Set<String> uniqueTags = new HashSet<>();\nuniqueTags.add(\"sql\");\nuniqueTags.add(\"sql\"); // duplicatul este ignorat",
    prompt: "Instanțiază o mulțime Set<String> numită 'uniqueTags' folosind HashSet (Set<String> uniqueTags = new HashSet<>();).",
    caseSensitive: true,
    acceptedAnswers: [
      "Set<String> uniqueTags = new HashSet<>();",
      "Set<String> uniqueTags = new HashSet<String>();"
    ],
    officialSolution: "Set<String> uniqueTags = new HashSet<>();",
    explanation: "HashSet garantează unicitatea prin metodele hashCode() și equals() ale elementelor stocate.",
    hint: "Scrie: Set<String> uniqueTags = new HashSet<>();"
  },
  {
    id: "java-adv-10",
    track: "Java",
    icon: "☕",
    level: "3. Middle",
    xp: 30,
    title: "Gestiune Automată a Resurselor: try-with-resources",
    theory: "Instrucțiunea <code>try (Resursa r = new Resursa())</code> închide automat orice resursă care implementează <code>AutoCloseable</code> la finalul blocului, eliminând riscul scurgerilor de memorie (leak-uri).",
    example: "try (Scanner sc = new Scanner(System.in)) {\n  String text = sc.nextLine();\n}",
    prompt: "Scrie antetul unui try-with-resources care declară și deschide 'Scanner scanner = new Scanner(System.in)'.",
    caseSensitive: true,
    acceptedAnswers: [
      "try (Scanner scanner = new Scanner(System.in))",
      "try(Scanner scanner = new Scanner(System.in))"
    ],
    officialSolution: "try (Scanner scanner = new Scanner(System.in))",
    explanation: "Variabila scanner este închisă automat (scanner.close()) la ieșirea din blocul try, chiar dacă se aruncă o excepție.",
    hint: "Scrie: try (Scanner scanner = new Scanner(System.in))"
  },
  {
    id: "java-adv-11",
    track: "Java",
    icon: "☕",
    level: "4. Senior",
    xp: 40,
    title: "Procesare Declarativă: Java Streams și toList()",
    theory: "API-ul <code>Stream</code> permite procesarea funcțională a datelor. Metoda <code>.filter(predicat)</code> selectează elemente, iar <code>.toList()</code> (disponibil nativ din Java 16) creează o listă imutabilă cu rezultatele.",
    example: "List<User> adults = users.stream()\n  .filter(u -> u.getAge() >= 18)\n  .toList();",
    prompt: "Filtrează lista 'users' păstrând doar utilizatorii cu 'u -> u.getAge() >= 18' și colectează-i cu .toList(); (începând cu users.stream()...).",
    caseSensitive: true,
    acceptedAnswers: [
      "users.stream().filter(u -> u.getAge() >= 18).toList();",
      "users.stream().filter(u -> u.getAge() >= 18).toList()",
      "users.stream().filter(u -> u.getAge() >= 18).collect(Collectors.toList());"
    ],
    officialSolution: "users.stream().filter(u -> u.getAge() >= 18).toList();",
    explanation: "Pipeline-ul de streaming evaluează predicatul lambda și acumulează direct rezultatele într-o listă nouă.",
    hint: "Scrie: users.stream().filter(u -> u.getAge() >= 18).toList();"
  },
  {
    id: "java-adv-12",
    track: "Java",
    icon: "☕",
    level: "4. Senior",
    xp: 40,
    title: "Eliminarea NullPointerException: Clasa Optional",
    theory: "<code>Optional&lt;T&gt;</code> este un container monadă care poate sau nu să conțină o valoare non-null. Metoda <code>.orElse(valoare)</code> oferă o valoare sigură de rezervă fără branching complex.",
    example: "String username = findUser(id).orElse(\"Guest\");",
    prompt: "Extrage valoarea din 'Optional<String> optName' sau returnează șirul \"Anonymous\" dacă este absentă (folosind .orElse(\"Anonymous\");).",
    caseSensitive: true,
    acceptedAnswers: [
      "optName.orElse(\"Anonymous\");",
      "optName.orElse(\"Anonymous\")"
    ],
    officialSolution: "optName.orElse(\"Anonymous\");",
    explanation: "orElse returnează conținutul dacă este prezent sau parametrul de fallback dacă Optional-ul este gol.",
    hint: "Model: optName.orElse(\"Anonymous\");"
  },
  {
    id: "java-adv-13",
    track: "Java",
    icon: "☕",
    level: "4. Senior",
    xp: 40,
    title: "DTO-uri Imutabile Concise: Tipul Record",
    theory: "Introdus în Java 14/16, un <code>record</code> este o clasă imutabilă specială care generează automat constructorul, getterii (fără prefixul 'get'), metodele <code>equals()</code>, <code>hashCode()</code> și <code>toString()</code>.",
    example: "public record UserDto(Long id, String email) {}",
    prompt: "Declară un record public numit 'Point' care conține două câmpuri întregi: 'int x, int y' (public record Point(int x, int y) {}).",
    caseSensitive: true,
    acceptedAnswers: [
      "public record Point(int x, int y) {}",
      "public record Point(int x, int y){}"
    ],
    officialSolution: "public record Point(int x, int y) {}",
    explanation: "Record-ul reduce boilerplate-ul de sute de linii de cod din clasele clasice de date (POJO).",
    hint: "Scrie: public record Point(int x, int y) {}"
  },
  {
    id: "java-adv-14",
    track: "Java",
    icon: "☕",
    level: "5. Exemplar",
    xp: 50,
    title: "Calcul Asincron Non-blocant: CompletableFuture",
    theory: "<code>CompletableFuture.supplyAsync(Supplier)</code> rulează o sarcină pe un pool separat de thread-uri (ForkJoinPool) și returnează un future ce poate fi compus reactiv cu <code>thenApply</code> sau <code>thenCombine</code>.",
    example: "CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> \"Processed\");",
    prompt: "Rulează asincron o sarcină folosind metoda: CompletableFuture.supplyAsync(() -> \"Done\");",
    caseSensitive: true,
    acceptedAnswers: [
      "CompletableFuture.supplyAsync(() -> \"Done\");",
      "CompletableFuture.supplyAsync(() -> \"Done\")"
    ],
    officialSolution: "CompletableFuture.supplyAsync(() -> \"Done\");",
    explanation: "supplyAsync primește o expresie lambda de tip Supplier și returnează un CompletableFuture asociat execuției asincrone.",
    hint: "Scrie: CompletableFuture.supplyAsync(() -> \"Done\");"
  },
  {
    id: "java-adv-15",
    track: "Java",
    icon: "☕",
    level: "5. Exemplar",
    xp: 50,
    title: "Operații Atomice Thread-Safe: AtomicInteger",
    theory: "Pachetul <code>java.util.concurrent.atomic</code> oferă clase fără mecanisme greoaie de sincronizare (lock-free), bazate pe instrucțiuni CPU de tip Compare-And-Swap (CAS).",
    example: "AtomicInteger counter = new AtomicInteger(0);\nint next = counter.incrementAndGet();",
    prompt: "Având instanța 'AtomicInteger counter = new AtomicInteger(0);', incrementează atomic valoarea apelând metoda counter.incrementAndGet();",
    caseSensitive: true,
    acceptedAnswers: [
      "counter.incrementAndGet();",
      "counter.incrementAndGet()"
    ],
    officialSolution: "counter.incrementAndGet();",
    explanation: "incrementAndGet() garantează incrementarea atomică sigură pe mai multe fire de execuție concurente.",
    hint: "Scrie: counter.incrementAndGet();"
  },

  // ==========================================================================
  // TRACK 3: JAVASCRIPT (ES6+, ASYNC/AWAIT, OPERATORI MODERNI, DOM)
  // ==========================================================================
  {
    id: "js-adv-1",
    track: "JavaScript",
    icon: "🟨",
    level: "1. Începător",
    xp: 20,
    title: "Interpolare Text: Template Literals",
    theory: "Template literals permit interpolarea directă a expresiilor JavaScript în șiruri de caractere folosind caracterele backtick (<code>` `</code>) și sintaxa <code>${expresie}</code>.",
    example: "const name = 'Alex';\nconst message = `Bun venit, ${name}!`;",
    prompt: "Creează o variabilă 'const greeting' folosind backticks care afișează 'Hello, ' urmat de expresia interpolată '${user}' și semnul '!'.",
    caseSensitive: true,
    acceptedAnswers: [
      "const greeting = `Hello, ${user}!`;",
      "const greeting = `Hello, ${user}!`;"
    ],
    officialSolution: "const greeting = `Hello, ${user}!`;",
    explanation: "Template literals elimină concatenările complicate prin operatorul '+' și permit șiruri pe mai multe linii.",
    hint: "Scrie: const greeting = `Hello, ${user}!`;"
  },
  {
    id: "js-adv-2",
    track: "JavaScript",
    icon: "🟨",
    level: "1. Începător",
    xp: 20,
    title: "Operații pe Tablouri: Metoda push()",
    theory: "Metoda <code>Array.prototype.push()</code> adaugă unul sau mai multe elemente la sfârșitul unui tablou și returnează noua lungime a acestuia.",
    example: "const items = ['a', 'b'];\nitems.push('c'); // items devine ['a', 'b', 'c']",
    prompt: "Având tabloul 'const list = [1, 2];', adaugă numărul 3 la sfârșitul vectorului apelând metoda .push(3);",
    caseSensitive: true,
    acceptedAnswers: [
      "list.push(3);",
      "list.push(3)"
    ],
    officialSolution: "list.push(3);",
    explanation: "Metoda mută tabloul inițial adăugând elementul specificat ca ultim index.",
    hint: "Scrie: list.push(3);"
  },
  {
    id: "js-adv-3",
    track: "JavaScript",
    icon: "🟨",
    level: "1. Începător",
    xp: 20,
    title: "Verificare Existență: Metoda Array.includes()",
    theory: "Metoda <code>includes(valoare)</code> determină dacă un tablou conține o anumită valoare printre elementele sale, returnând un boolean (<code>true</code> sau <code>false</code>).",
    example: "const fruits = ['mere', 'pere'];\nif (fruits.includes('pere')) { ... }",
    prompt: "Verifică dacă tabloul 'tags' conține elementul 'js' apelând metoda tags.includes('js');",
    caseSensitive: true,
    acceptedAnswers: [
      "tags.includes('js');",
      "tags.includes('js')",
      "tags.includes(\"js\");",
      "tags.includes(\"js\")"
    ],
    officialSolution: "tags.includes('js');",
    explanation: "includes utilizează algoritmul SameValueZero pentru a verifica prezența valorii în tablou.",
    hint: "Scrie: tags.includes('js');"
  },
  {
    id: "js-adv-4",
    track: "JavaScript",
    icon: "🟨",
    level: "2. Junior",
    xp: 25,
    title: "Funcții Săgeată Concise: Arrow Functions",
    theory: "Funcțiile arrow oferă o sintaxă scurtă. Când au o singură instrucțiune, acoladele și cuvântul <code>return</code> pot fi omise (return implicit).",
    example: "const square = n => n * n;",
    prompt: "Scrie o funcție arrow asignată unei constante 'const double' care primește parametrul 'x' și returnează 'x * 2' cu return implicit (fără acolade).",
    caseSensitive: true,
    acceptedAnswers: [
      "const double = x => x * 2;",
      "const double = (x) => x * 2;",
      "const double = x => x * 2"
    ],
    officialSolution: "const double = x => x * 2;",
    explanation: "Sintaxa x => x * 2 creează o funcție anonimă concisă cu return automat al expresiei evaluate.",
    hint: "Model: const double = x => x * 2;"
  },
  {
    id: "js-adv-5",
    track: "JavaScript",
    icon: "🟨",
    level: "2. Junior",
    xp: 25,
    title: "Extragere de Proprietăți: Object Destructuring",
    theory: "Destructurarea obiectelor permite extragerea proprietăților în variabile individuale concise pe baza numelui cheii.",
    example: "const user = { id: 10, name: 'Dan' };\nconst { id, name } = user;",
    prompt: "Extrage proprietățile 'id' și 'role' dintr-un obiect 'user' folosind sintaxa de destructurare: const { id, role } = user;",
    caseSensitive: true,
    acceptedAnswers: [
      "const { id, role } = user;",
      "const { id, role } = user",
      "const { role, id } = user;"
    ],
    officialSolution: "const { id, role } = user;",
    explanation: "Variabilele id și role sunt create direct cu valorile corespunzătoare din obiectul user.",
    hint: "Scrie: const { id, role } = user;"
  },
  {
    id: "js-adv-6",
    track: "JavaScript",
    icon: "🟨",
    level: "2. Junior",
    xp: 25,
    title: "Îmbinarea Tablourilor: Operatorul Spread (...)",
    theory: "Operatorul spread (<code>...</code>) despachetează elementele unui iterabil într-un nou tablou, permițând concatenarea rapidă și imutabilă a vectorilor.",
    example: "const combined = [...listA, ...listB];",
    prompt: "Creează un tablou 'const combined' care îmbină elementele din 'arr1' și 'arr2' folosind operatorul spread ([...arr1, ...arr2]).",
    caseSensitive: true,
    acceptedAnswers: [
      "const combined = [...arr1, ...arr2];",
      "const combined = [...arr1, ...arr2]"
    ],
    officialSolution: "const combined = [...arr1, ...arr2];",
    explanation: "Spread copiază elementele ambelor liste într-un tablou nou fără a le modifica pe cele inițiale.",
    hint: "Scrie: const combined = [...arr1, ...arr2];"
  },
  {
    id: "js-adv-7",
    track: "JavaScript",
    icon: "🟨",
    level: "2. Junior",
    xp: 25,
    title: "Transformarea Colecțiilor: Metoda Array.map()",
    theory: "Metoda <code>map()</code> creează un nou tablou populat cu rezultatele apelării unei funcții pe fiecare element al tabloului apelant.",
    example: "const lengths = words.map(w => w.length);",
    prompt: "Folosind tabloul 'nums', obține un nou vector cu pătratele fiecărui număr apelând: nums.map(n => n * n);",
    caseSensitive: true,
    acceptedAnswers: [
      "nums.map(n => n * n);",
      "nums.map(n => n * n)",
      "nums.map((n) => n * n);"
    ],
    officialSolution: "nums.map(n => n * n);",
    explanation: "map() iterează prin fiecare număr n și returnează n * n într-un nou tablou de aceeași dimensiune.",
    hint: "Scrie: nums.map(n => n * n);"
  },
  {
    id: "js-adv-8",
    track: "JavaScript",
    icon: "🟨",
    level: "3. Middle",
    xp: 30,
    title: "Filtrare Selectivă: Metoda Array.filter()",
    theory: "Metoda <code>filter()</code> returnează o copie superficială (shallow copy) a porțiunii din tablou care trece de testul implementat de funcția furnizată.",
    example: "const activeUsers = users.filter(u => u.isActive);",
    prompt: "Filtrează vectorul 'products' păstrând doar obiectele cu prețul sub 50 apelând: products.filter(p => p.price < 50);",
    caseSensitive: true,
    acceptedAnswers: [
      "products.filter(p => p.price < 50);",
      "products.filter(p => p.price < 50)",
      "products.filter((p) => p.price < 50);"
    ],
    officialSolution: "products.filter(p => p.price < 50);",
    explanation: "Funcția predicat returnează true doar dacă p.price este mai mic decât 50.",
    hint: "Scrie: products.filter(p => p.price < 50);"
  },
  {
    id: "js-adv-9",
    track: "JavaScript",
    icon: "🟨",
    level: "3. Middle",
    xp: 30,
    title: "Agregare de Date: Metoda Array.reduce()",
    theory: "Metoda <code>reduce((acumulator, curent) => nouAcumulator, valoareInitiala)</code> reduce elementele unui tablou la o singură valoare finală (sumă, obiect agregat, etc.).",
    example: "const total = prices.reduce((acc, curr) => acc + curr, 0);",
    prompt: "Calculează suma numerelor din vectorul 'numbers' apelând: numbers.reduce((acc, curr) => acc + curr, 0);",
    caseSensitive: true,
    acceptedAnswers: [
      "numbers.reduce((acc, curr) => acc + curr, 0);",
      "numbers.reduce((acc, curr) => acc + curr, 0)"
    ],
    officialSolution: "numbers.reduce((acc, curr) => acc + curr, 0);",
    explanation: "reduce începe de la 0 și adaugă succesiv fiecare element curr în acumulatorul acc.",
    hint: "Scrie: numbers.reduce((acc, curr) => acc + curr, 0);"
  },
  {
    id: "js-adv-10",
    track: "JavaScript",
    icon: "🟨",
    level: "3. Middle",
    xp: 30,
    title: "Navigare Sigură în Structuri: Optional Chaining (?.)",
    theory: "Operatorul <code>?.</code> permite citirea proprietăților aflate adânc într-un lanț de obiecte fără a valida manual existența fiecărei referințe. Dacă referința este <code>null</code> sau <code>undefined</code>, expresia returnează direct <code>undefined</code> în loc să arunce o eroare.",
    example: "const zip = user?.address?.zipCode;",
    prompt: "Accesează în siguranță proprietatea 'city' din adresa utilizatorului: user?.address?.city",
    caseSensitive: true,
    acceptedAnswers: [
      "user?.address?.city;",
      "user?.address?.city"
    ],
    officialSolution: "user?.address?.city",
    explanation: "Dacă user.address este nedefinit, expresia se oprește fără a genera TypeError.",
    hint: "Scrie: user?.address?.city"
  },
  {
    id: "js-adv-11",
    track: "JavaScript",
    icon: "🟨",
    level: "3. Middle",
    xp: 30,
    title: "Valori Implicite: Nullish Coalescing (??)",
    theory: "Operatorul <code>??</code> returnează operandul din dreapta doar dacă cel din stânga este strict <code>null</code> sau <code>undefined</code>. Spre deosebire de <code>||</code>, valorile <code>0</code> sau <code>\"\"</code> (falsey) sunt păstrate corect.",
    example: "const timeout = customTimeout ?? 5000;",
    prompt: "Atribuie constantei 'port' valoarea din 'process.env.PORT ?? 3000;' folosind operatorul nullish coalescing.",
    caseSensitive: true,
    acceptedAnswers: [
      "const port = process.env.PORT ?? 3000;",
      "const port = process.env.PORT ?? 3000"
    ],
    officialSolution: "const port = process.env.PORT ?? 3000;",
    explanation: "Dacă PORT este nedefinit, port va primi valoarea de rezervă 3000.",
    hint: "Scrie: const port = process.env.PORT ?? 3000;"
  },
  {
    id: "js-adv-12",
    track: "JavaScript",
    icon: "🟨",
    level: "4. Senior",
    xp: 40,
    title: "Asincronism Elegant: async / await cu Fetch",
    theory: "Cuvântul-cheie <code>await</code> suspendă execuția funcției asincrone până când promisiunea este rezolvată, făcând codul asincron să arate și să se comporte similar celui sincron.",
    example: "const response = await fetch('/api/users');\nconst data = await response.json();",
    prompt: "Așteaptă răspunsul unui apel fetch('/api/data') și atribuie-l constantei 'res': const res = await fetch('/api/data');",
    caseSensitive: true,
    acceptedAnswers: [
      "const res = await fetch('/api/data');",
      "const res = await fetch('/api/data')",
      "const res = await fetch(\"/api/data\");"
    ],
    officialSolution: "const res = await fetch('/api/data');",
    explanation: "await fetch('/api/data') blochează execuția doar în interiorul funcției async până când serverul trimite headerele de răspuns.",
    hint: "Scrie: const res = await fetch('/api/data');"
  },
  {
    id: "js-adv-13",
    track: "JavaScript",
    icon: "🟨",
    level: "4. Senior",
    xp: 40,
    title: "Execuție Paralelă: Metoda Promise.all()",
    theory: "<code>Promise.all([p1, p2, ...])</code> rulează multiple sarcini asincrone în mod concurent și așteaptă ca toate să se finalizeze cu succes, reducând timpul total de execuție la durata celei mai lente sarcini.",
    example: "const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);",
    prompt: "Așteaptă finalizarea simultană a promisiunilor 'p1' și 'p2' apelând: await Promise.all([p1, p2]);",
    caseSensitive: true,
    acceptedAnswers: [
      "await Promise.all([p1, p2]);",
      "await Promise.all([p1, p2])"
    ],
    officialSolution: "await Promise.all([p1, p2]);",
    explanation: "Promise.all rulează sarcinile în paralel. Dacă oricare promisiune este respinsă, întregul Promise.all va arunca o eroare.",
    hint: "Scrie: await Promise.all([p1, p2]);"
  },
  {
    id: "js-adv-14",
    track: "JavaScript",
    icon: "🟨",
    level: "4. Senior",
    xp: 40,
    title: "Atribute HTML Personalizate: Obiectul dataset",
    theory: "În HTML5, atributele prefixate cu <code>data-*</code> (ex: <code>data-role=\"admin\"</code>) sunt accesate în JavaScript ca proprietăți camelCase prin obiectul <code>element.dataset</code>.",
    example: "const role = button.dataset.role;",
    prompt: "Citește atributul data-role al unui buton DOM numit 'btn' apelând: btn.dataset.role;",
    caseSensitive: true,
    acceptedAnswers: [
      "btn.dataset.role;",
      "btn.dataset.role"
    ],
    officialSolution: "btn.dataset.role;",
    explanation: "Proprietatea .dataset.role oferă acces nativ de tip read/write la atributul 'data-role' al elementului.",
    hint: "Scrie: btn.dataset.role;"
  },
  {
    id: "js-adv-15",
    track: "JavaScript",
    icon: "🟨",
    level: "5. Exemplar",
    xp: 50,
    title: "Încapsulare Lexicală: Concepte de Closure",
    theory: "Un closure (închidere lexicală) este combinația dintre o funcție și mediul lexical în care aceasta a fost declarată. Permite unei funcții interne să păstreze accesul la variabilele din scopul funcției părinte chiar și după terminarea execuției acesteia.",
    example: "function makeAdder(x) {\n  return y => x + y;\n}",
    prompt: "Creează o funcție 'createCounter' care declară 'let c = 0;' și returnează o funcție arrow '() => ++c;' (pe o singură linie).",
    caseSensitive: true,
    acceptedAnswers: [
      "function createCounter() { let c = 0; return () => ++c; }",
      "const createCounter = () => { let c = 0; return () => ++c; };"
    ],
    officialSolution: "function createCounter() { let c = 0; return () => ++c; }",
    explanation: "Variabila 'c' rămâne privată în interiorul closure-ului și poate fi modificată doar prin funcția returnată.",
    hint: "Scrie: function createCounter() { let c = 0; return () => ++c; }"
  },

  // ==========================================================================
  // TRACK 4: ENGLEZĂ (A1–A2: BEGINNER & ELEMENTARY)
  // ==========================================================================
  // --- NIVEL A1: BEGINNER (VERBUL TO BE, ARTICOLE, POSESIVE, RUTINE) ---
  {
    id: "eng-a1-1",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "1. A1 Începător",
    xp: 20,
    title: "Verbul 'to be' la Prezent: am, is, are",
    theory: "Verbul <code>to be</code> (a fi) are trei forme la Present Simple: <code>am</code> (pentru I), <code>is</code> (pentru he, she, it) și <code>are</code> (pentru you, we, they).",
    example: "I am a programmer.\nShe is in the office.\nThey are ready.",
    prompt: "Completează cu forma corectă a verbului to be: „I ___ a software developer.” (scrie întreaga propoziție).",
    caseSensitive: false,
    acceptedAnswers: [
      "I am a software developer.",
      "I am a software developer",
      "I'm a software developer.",
      "I'm a software developer"
    ],
    officialSolution: "I am a software developer.",
    explanation: "Subiectul 'I' se acordă obligatoriu cu forma 'am' a verbului to be.",
    hint: "Scrie: I am a software developer."
  },
  {
    id: "eng-a1-2",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "1. A1 Începător",
    xp: 20,
    title: "Articolele Nehotărâte: 'a' vs 'an'",
    theory: "Folosim <code>a</code> înaintea cuvintelor care încep cu un sunet consonantic (<em>a developer, a computer</em>) și <code>an</code> înaintea celor cu sunet vocalic (<em>an engineer, an application</em>).",
    example: "He is a designer, but she is an engineer.",
    prompt: "Completează propoziția cu articolul corect (a sau an): „She is an engineer.” (scrie întreaga propoziție).",
    caseSensitive: false,
    acceptedAnswers: [
      "She is an engineer.",
      "She is an engineer"
    ],
    officialSolution: "She is an engineer.",
    explanation: "Cuvântul 'engineer' începe cu sunetul vocalic 'e', cerând articolul 'an'.",
    hint: "Scrie: She is an engineer."
  },
  {
    id: "eng-a1-3",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "1. A1 Începător",
    xp: 20,
    title: "Adjectivele Posesive: my, your, his, her",
    theory: "Adjectivele posesive determină un substantiv: <code>my</code> (meu), <code>your</code> (tău), <code>his</code> (lui), <code>her</code> (ei), <code>our</code> (nostru), <code>their</code> (lor).",
    example: "This is my keyboard and that is his monitor.",
    prompt: "Tradu în engleză propoziția: „Acesta este laptopul meu.”",
    caseSensitive: false,
    acceptedAnswers: [
      "This is my laptop.",
      "This is my laptop"
    ],
    officialSolution: "This is my laptop.",
    explanation: "'This is my laptop' utilizează pronumele demonstrativ de apropiere 'this' și posesivul 'my'.",
    hint: "Scrie: This is my laptop."
  },
  {
    id: "eng-a1-4",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "1. A1 Începător",
    xp: 20,
    title: "Present Simple: Rutine Zilnice",
    theory: "Present Simple descrie activități recurente. La persoana a III-a singular (he, she, it), adăugăm sufixul <code>-s</code> sau <code>-es</code> la verb.",
    example: "I work from 9 to 5.\nHe works from home.",
    prompt: "Tradu în engleză la prezent simplu: „El lucrează de acasă.”",
    caseSensitive: false,
    acceptedAnswers: [
      "He works from home.",
      "He works from home"
    ],
    officialSolution: "He works from home.",
    explanation: "Verbul 'work' primește terminația '-s' la persoana a III-a singular: 'works'.",
    hint: "Scrie: He works from home."
  },
  {
    id: "eng-a1-5",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "1. A1 Începător",
    xp: 20,
    title: "Negația la Prezent: don't vs doesn't",
    theory: "Negația la Present Simple se formează cu auxiliarul <code>do not (don't)</code> pentru I/you/we/they și <code>does not (doesn't)</code> pentru he/she/it.",
    example: "I don't drink coffee.\nShe doesn't write code.",
    prompt: "Tradu în engleză propoziția negativă: „Eu nu beau cafea.”",
    caseSensitive: false,
    acceptedAnswers: [
      "I don't drink coffee.",
      "I don't drink coffee",
      "I do not drink coffee.",
      "I do not drink coffee"
    ],
    officialSolution: "I don't drink coffee.",
    explanation: "Pentru persoana întâi singular folosim auxiliarul negativ 'don't' urmat de verbul de bază 'drink'.",
    hint: "Scrie: I don't drink coffee."
  },
  {
    id: "eng-a1-6",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "1. A1 Începător",
    xp: 20,
    title: "Verbul Modal 'Can': Abilități",
    theory: "Verbul modal <code>can</code> exprimă capacitatea fizică sau intelectuală și se folosește direct cu infinitivul scurt al verbului următor.",
    example: "I can write code.\nCan you help me?",
    prompt: "Tradu folosind verbul modal 'can': „Pot să vorbesc engleză.”",
    caseSensitive: false,
    acceptedAnswers: [
      "I can speak English.",
      "I can speak English"
    ],
    officialSolution: "I can speak English.",
    explanation: "'Can' este urmat de verbul de bază 'speak' fără prepoziția 'to'.",
    hint: "Scrie: I can speak English."
  },
  {
    id: "eng-a1-7",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "1. A1 Începător",
    xp: 20,
    title: "Cuvinte Interogative: Where, What, Who",
    theory: "Întrebările de informare încep cu un cuvânt interogativ: <code>Where</code> (unde), <code>What</code> (ce), <code>When</code> (când), <code>Who</code> (cine).",
    example: "Where is the office?\nWhat is your name?",
    prompt: "Tradu în engleză întrebarea: „Unde este biroul?”",
    caseSensitive: false,
    acceptedAnswers: [
      "Where is the office?",
      "Where is the office",
      "Where's the office?",
      "Where's the office"
    ],
    officialSolution: "Where is the office?",
    explanation: "Construcția necesită ordinea: cuvânt interogativ (Where) + verb (is) + subiect (the office).",
    hint: "Scrie: Where is the office?"
  },
  {
    id: "eng-a1-8",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "1. A1 Începător",
    xp: 20,
    title: "Pluralul Substantivelor: -s și -es",
    theory: "Majoritatea substantivelor primesc <code>-s</code> la plural (<em>screens, books</em>), iar cele terminate în sunete sibilante primesc <code>-es</code> (<em>boxes</em>).",
    example: "one screen -> two screens\none box -> two boxes",
    prompt: "Completează propoziția: „I have two screens on my desk.” (scrie întreaga propoziție).",
    caseSensitive: false,
    acceptedAnswers: [
      "I have two screens on my desk.",
      "I have two screens on my desk"
    ],
    officialSolution: "I have two screens on my desk.",
    explanation: "'Screen' este un substantiv regulat care primește sufixul -s la plural.",
    hint: "Scrie: I have two screens on my desk."
  },

  // --- NIVEL A2: ELEMENTARY (PAST SIMPLE, PREPOZIȚII, VIITOR CU GOING TO) ---
  {
    id: "eng-a2-1",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "2. A2 Elementar",
    xp: 20,
    title: "Past Simple cu 'to be': was și were",
    theory: "Formele de trecut ale verbului to be sunt: <code>was</code> (pentru I, he, she, it) și <code>were</code> (pentru you, we, they).",
    example: "I was at home yesterday.\nThey were at the conference.",
    prompt: "Tradu la timpul trecut simplu: „Eram la birou ieri.”",
    caseSensitive: false,
    acceptedAnswers: [
      "I was at the office yesterday.",
      "I was at the office yesterday"
    ],
    officialSolution: "I was at the office yesterday.",
    explanation: "Subiectul 'I' la timpul trecut cere forma 'was'.",
    hint: "Scrie: I was at the office yesterday."
  },
  {
    id: "eng-a2-2",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "2. A2 Elementar",
    xp: 20,
    title: "Past Simple: Verbe Regulate cu -ed",
    theory: "Verbele regulate formează Past Simple prin adăugarea terminației <code>-ed</code> la forma de bază: <em>work -> worked, finish -> finished</em>.",
    example: "I finished my work at 6 PM.",
    prompt: "Tradu la Past Simple: „Am terminat proiectul aseară.”",
    caseSensitive: false,
    acceptedAnswers: [
      "I finished the project last night.",
      "I finished the project last night"
    ],
    officialSolution: "I finished the project last night.",
    explanation: "Verbul 'finish' primește terminația '-ed' pentru a indica o acțiune încheiată în trecut.",
    hint: "Scrie: I finished the project last night."
  },
  {
    id: "eng-a2-3",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "2. A2 Elementar",
    xp: 20,
    title: "Past Simple: Verbe Neregulate Uzuale",
    theory: "Verbele neregulate au forme proprii de trecut: <em>send -> sent, go -> went, make -> made, see -> saw</em>.",
    example: "She sent an email to the client.",
    prompt: "Tradu: „Am trimis un email în această dimineață.” folosind verbul neregulat 'sent': 'I sent an email this morning.'",
    caseSensitive: false,
    acceptedAnswers: [
      "I sent an email this morning.",
      "I sent an email this morning"
    ],
    officialSolution: "I sent an email this morning.",
    explanation: "Forma de Past Simple pentru verbul neregulat 'send' este 'sent'.",
    hint: "Scrie: I sent an email this morning."
  },
  {
    id: "eng-a2-4",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "2. A2 Elementar",
    xp: 20,
    title: "Viitorul Intenționat: be going to",
    theory: "Folosim <code>am/is/are + going to + verb</code> pentru planuri și decizii luate înainte de momentul vorbirii.",
    example: "I am going to study tonight.\nWe are going to deploy the app.",
    prompt: "Tradu folosind structura de intenție viitoare 'going to': „Urmează să învăț JavaScript.”",
    caseSensitive: false,
    acceptedAnswers: [
      "I am going to learn JavaScript.",
      "I am going to learn JavaScript",
      "I'm going to learn JavaScript.",
      "I'm going to learn JavaScript"
    ],
    officialSolution: "I am going to learn JavaScript.",
    explanation: "'Be going to' semnalează o intenție fermă de învățare în viitorul apropiat.",
    hint: "Scrie: I am going to learn JavaScript."
  },
  {
    id: "eng-a2-5",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "2. A2 Elementar",
    xp: 20,
    title: "Prepoziții de Timp: at, on, in",
    theory: "Regulă practică: <code>at</code> pentru ore exacte (<em>at 9 AM</em>), <code>on</code> pentru zile ale săptămânii (<em>on Monday</em>), <code>in</code> pentru luni sau ani.",
    example: "The meeting is at 10 AM on Tuesday.",
    prompt: "Completează propoziția: „The meeting starts at 9 AM on Monday.”",
    caseSensitive: false,
    acceptedAnswers: [
      "The meeting starts at 9 AM on Monday.",
      "The meeting starts at 9 AM on Monday"
    ],
    officialSolution: "The meeting starts at 9 AM on Monday.",
    explanation: "Se folosește 'at 9 AM' pentru oră și 'on Monday' pentru ziua săptămânii.",
    hint: "Scrie: The meeting starts at 9 AM on Monday."
  },
  {
    id: "eng-a2-6",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "2. A2 Elementar",
    xp: 20,
    title: "Modul Imperativ: Instrucțiuni Directe",
    theory: "Imperativul utilizează forma de bază a verbului fără subiect la începutul propoziției pentru comenzi și instrucțiuni de utilizare.",
    example: "Click the link below.\nPress Enter to submit.",
    prompt: "Tradu propoziția imperativă: „Apasă butonul pentru a continua.”",
    caseSensitive: false,
    acceptedAnswers: [
      "Press the button to continue.",
      "Press the button to continue"
    ],
    officialSolution: "Press the button to continue.",
    explanation: "'Press the button to continue' este formula clasică de ghidare în interfețe software.",
    hint: "Scrie: Press the button to continue."
  },
  {
    id: "eng-a2-7",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "2. A2 Elementar",
    xp: 20,
    title: "Comparativul Adjectivelor Scurte: -er + than",
    theory: "Adjectivele monosilabice primesc sufixul <code>-er</code> la gradul comparativ: <em>fast -> faster, old -> older, new -> newer</em>.",
    example: "This computer is faster than my old laptop.",
    prompt: "Tradu folosind comparativul de superioritate pentru 'fast': „Acest calculator este mai rapid.”",
    caseSensitive: false,
    acceptedAnswers: [
      "This computer is faster.",
      "This computer is faster"
    ],
    officialSolution: "This computer is faster.",
    explanation: "Adjectivul scurt 'fast' formează comparativul sintetic 'faster'.",
    hint: "Scrie: This computer is faster."
  },
  {
    id: "eng-a2-8",
    track: "Engleză (A1–A2)",
    icon: "🇬🇧",
    level: "2. A2 Elementar",
    xp: 20,
    title: "Oferirea de Asistență: 'Can I help you?'",
    theory: "Formula politicoasă standard pentru a oferi sprijin colegilor este <code>Can I help you with + problemă?</code>.",
    example: "Can I help you with your task?",
    prompt: "Tradu formula politicoasă: „Pot să te ajut cu această problemă?”",
    caseSensitive: false,
    acceptedAnswers: [
      "Can I help you with this problem?",
      "Can I help you with this problem"
    ],
    officialSolution: "Can I help you with this problem?",
    explanation: "'Can I help you with this problem?' este întrebarea optimă de colaborare în echipă.",
    hint: "Scrie: Can I help you with this problem?"
  },

  // ==========================================================================
  // TRACK 5: ENGLEZĂ (B1–B2: INTERMEDIATE & UPPER-INTERMEDIATE)
  // ==========================================================================
  // --- SUB-NIVEL B1: INTERMEDIATE ---
  {
    id: "eng-b1-1",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Present Perfect vs Past Simple",
    theory: "Folosim <code>Present Perfect (have/has + V3)</code> pentru acțiuni începute în trecut care continuă în prezent (cu <em>for/since</em>) sau experiențe de viață, spre deosebire de <code>Past Simple</code> care descrie momente încheiate.",
    example: "I have worked here for three years. (Încă lucrez aici)\nI worked there in 2020. (Nu mai lucrez acolo)",
    prompt: "Tradu în engleză: „Am lucrat aici timp de trei ani.” folosind Present Perfect (I have worked here for three years).",
    caseSensitive: false,
    acceptedAnswers: [
      "I have worked here for three years.",
      "I have worked here for three years",
      "I've worked here for three years.",
      "I've worked here for three years"
    ],
    officialSolution: "I have worked here for three years.",
    explanation: "'Have worked ... for three years' indică o acțiune continuată până în momentul vorbirii.",
    hint: "Model: I have worked here for three years."
  },
  {
    id: "eng-b1-2",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Comparatives: 'More efficient than'",
    theory: "Pentru adjective lungi (două sau mai multe silabe, precum <em>efficient</em>), comparativul de superioritate se construiește cu <code>more + adjectiv + than</code>.",
    example: "This new database is more efficient than the legacy system.",
    prompt: "Tradu în engleză propoziția comparativă: „Această soluție este mai eficientă decât cealaltă.”",
    caseSensitive: false,
    acceptedAnswers: [
      "This solution is more efficient than the other one.",
      "This solution is more efficient than the other one",
      "This solution is more efficient than the other.",
      "This solution is more efficient than the other"
    ],
    officialSolution: "This solution is more efficient than the other one.",
    explanation: "Construcția corectă este 'more efficient than', evitând terminația sintetică -er.",
    hint: "Scrie: This solution is more efficient than the other one."
  },
  {
    id: "eng-b1-3",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "First Conditional: Posibilități Reale în Viitor",
    theory: "Condiționalul de tip 1 exprimă o condiție reală în viitor: <code>If + Present Simple, will + verb de bază</code>. În clauza introdusă de 'if' nu se folosește niciodată 'will'!",
    example: "If the server goes down, we will restart the service.",
    prompt: "Scrie fraza condițională de tip 1: „If it rains tomorrow, we will stay at home.”",
    caseSensitive: false,
    acceptedAnswers: [
      "If it rains tomorrow, we will stay at home.",
      "If it rains tomorrow, we will stay at home",
      "If it rains tomorrow, we'll stay at home.",
      "If it rains tomorrow, we'll stay at home"
    ],
    officialSolution: "If it rains tomorrow, we will stay at home.",
    explanation: "Rains (Present Simple) în clauza if, urmat de will stay în clauza principală.",
    hint: "Scrie: If it rains tomorrow, we will stay at home."
  },
  {
    id: "eng-b1-4",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Second Conditional: Situații Ipotetice",
    theory: "Condiționalul de tip 2 descrie o situație nereală sau ipotetică în prezent: <code>If + Past Simple, would + verb de bază</code>.",
    example: "If I knew the password, I would share it with you.",
    prompt: "Tradu folosind Conditionalul II: „Dacă aș avea mai mult timp, aș învăța o limbă nouă.”",
    caseSensitive: false,
    acceptedAnswers: [
      "If I had more time, I would learn a new language.",
      "If I had more time, I would learn a new language",
      "If I had more time, I'd learn a new language.",
      "If I had more time, I'd learn a new language"
    ],
    officialSolution: "If I had more time, I would learn a new language.",
    explanation: "'Had' reprezintă timpul trecut ipotetic, iar 'would learn' este consecința potențială.",
    hint: "Scrie: If I had more time, I would learn a new language."
  },
  {
    id: "eng-b1-5",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Sfat Profesional: Verbul Modal 'Should'",
    theory: "Verbul modal <code>should</code> se folosește pentru a oferi sfaturi, recomandări profesionale și bune practici în echipă.",
    example: "You should review the pull request before approving it.",
    prompt: "Tradu folosind verbul modal de recomandare 'should': „Ar trebui să testezi codul înainte de a trimite modificările.”",
    caseSensitive: false,
    acceptedAnswers: [
      "You should test the code before submitting the changes.",
      "You should test the code before submitting the changes",
      "You should test the code before submitting.",
      "You should test the code before submitting"
    ],
    officialSolution: "You should test the code before submitting the changes.",
    explanation: "'Should test' este formula politicoasă de recomandare tehnică.",
    hint: "Scrie: You should test the code before submitting the changes."
  },
  {
    id: "eng-b1-6",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Phrasal Verbs Tehnice B1: 'Set up'",
    theory: "Verbul frazal <code>to set up</code> înseamnă a instala, a configura sau a inițializa un sistem, un cont sau o aplicație.",
    example: "It takes ten minutes to set up the development environment.",
    prompt: "Tradu: „Trebuie să configurez noul cont.” folosind verbul frazal 'to set up the new account'.",
    caseSensitive: false,
    acceptedAnswers: [
      "I need to set up the new account.",
      "I need to set up the new account",
      "We need to set up the new account.",
      "We need to set up the new account"
    ],
    officialSolution: "I need to set up the new account.",
    explanation: "'Set up' este expresia consacrată în IT pentru configurare și instalare.",
    hint: "Scrie: I need to set up the new account."
  },
  {
    id: "eng-b1-7",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Programarea Ședințelor: 'Schedule a meeting'",
    theory: "În comunicarea de business la nivelul B1, propunerea unei discuții se formulează natural cu <code>schedule a meeting for + moment</code>.",
    example: "Let's schedule a meeting for Friday afternoon.",
    prompt: "Tradu propunerea: „Hai să programăm o întâlnire pentru mâine dimineață.”",
    caseSensitive: false,
    acceptedAnswers: [
      "Let's schedule a meeting for tomorrow morning.",
      "Let's schedule a meeting for tomorrow morning",
      "Let us schedule a meeting for tomorrow morning.",
      "Let us schedule a meeting for tomorrow morning"
    ],
    officialSolution: "Let's schedule a meeting for tomorrow morning.",
    explanation: "'Schedule a meeting' este formularea naturală în engleza de birou.",
    hint: "Scrie: Let's schedule a meeting for tomorrow morning."
  },
  {
    id: "eng-b1-8",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Confirmarea Informației: Question Tags",
    theory: "Pentru a cere confirmarea unei afirmații, adăugăm un question tag negativ la final: <code>You speak English, don't you?</code>.",
    example: "You are the project manager, aren't you?",
    prompt: "Completează propoziția cu tag-ul de confirmare corect: „You speak English, don't you?”",
    caseSensitive: false,
    acceptedAnswers: [
      "You speak English, don't you?",
      "You speak English, don't you"
    ],
    officialSolution: "You speak English, don't you?",
    explanation: "Verbul principal 'speak' impune auxiliarul 'don't you?'.",
    hint: "Scrie: You speak English, don't you?"
  },
  {
    id: "eng-b1-9",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Obiceiuri Trecute: 'Used to'",
    theory: "Structura <code>used to + infinitiv</code> exprimă o stare sau un obicei din trecut care nu mai există în prezent.",
    example: "I used to write Java code, but now I work with TypeScript.",
    prompt: "Tradu folosind structura de obicei trecut 'used to': „Locuiam la Londra, dar acum locuiesc la Berlin.”",
    caseSensitive: false,
    acceptedAnswers: [
      "I used to live in London, but now I live in Berlin.",
      "I used to live in London, but now I live in Berlin"
    ],
    officialSolution: "I used to live in London, but now I live in Berlin.",
    explanation: "'Used to live' marchează clar trecerea de la starea trecută la cea actuală.",
    hint: "Scrie: I used to live in London, but now I live in Berlin."
  },
  {
    id: "eng-b1-10",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Exprimarea Opiniei: 'In my opinion'",
    theory: "Expresia introductivă <code>In my opinion, ...</code> deschide o perspectivă personală într-o conversație tehnică sau de afaceri.",
    example: "In my opinion, automated testing saves hundreds of hours.",
    prompt: "Tradu exprimarea opiniei: „În opinia mea, aceasta este cea mai bună abordare.”",
    caseSensitive: false,
    acceptedAnswers: [
      "In my opinion, this is the best approach.",
      "In my opinion, this is the best approach"
    ],
    officialSolution: "In my opinion, this is the best approach.",
    explanation: "'In my opinion, this is the best approach' este formula universală de consens la nivel B1.",
    hint: "Scrie: In my opinion, this is the best approach."
  },
  {
    id: "eng-adv-1",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "1. B1 Intermediate",
    xp: 20,
    title: "Modale de Deducție: Must be at home",
    theory: "Verbul modal <code>must</code> exprimă o deducție logică fermă bazată pe dovezi clare în prezent, în contrast cu <code>can't</code> care exprimă o imposibilitate logică.",
    example: "She has been working for 12 hours; she must be exhausted.",
    prompt: "Tradu deducția logică la prezent: „El trebuie să fie acasă; luminile sunt aprinse.”",
    caseSensitive: false,
    acceptedAnswers: [
      "He must be at home; the lights are on.",
      "He must be at home, the lights are on.",
      "He must be at home; the lights are on",
      "He must be at home."
    ],
    officialSolution: "He must be at home; the lights are on.",
    explanation: "'Must be' exprimă certitudinea dedusă logic din faptul că luminile sunt aprinse.",
    hint: "Model: He must be at home; the lights are on."
  },

  // --- SUB-NIVEL B2: UPPER-INTERMEDIATE ---
  {
    id: "eng-b2-1",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Diateza Pasivă în Rapoarte Tehnice",
    theory: "În engleza profesională B2, diateza pasivă (<code>to be + Past Participle</code>) mută atenția pe acțiunea realizată și obiectul afectat.",
    example: "The vulnerabilities were patched within three hours.",
    prompt: "Tradu la diateza pasivă (Past Simple): „Baza de date a fost actualizată aseară de către echipă.”",
    caseSensitive: false,
    acceptedAnswers: [
      "The database was updated last night by the team.",
      "The database was updated last night by the team"
    ],
    officialSolution: "The database was updated last night by the team.",
    explanation: "'Was updated' este forma pasivă la timpul trecut (Past Simple Passive).",
    hint: "Scrie: The database was updated last night by the team."
  },
  {
    id: "eng-b2-2",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Third Conditional: Regrete și Cauze Trecute",
    theory: "Condiționalul de tip 3 analizează situații imposibil de schimbat din trecut: <code>If + had + V3, would have + V3</code>.",
    example: "If we had run the load test, the server would not have crashed.",
    prompt: "Tradu folosind Conditionalul III: „Dacă am fi testat mai devreme, eroarea nu s-ar fi produs.”",
    caseSensitive: false,
    acceptedAnswers: [
      "If we had tested earlier, the error would not have occurred.",
      "If we had tested earlier, the error would not have occurred",
      "If we had tested earlier, the error wouldn't have occurred.",
      "If we had tested earlier, the error wouldn't have occurred"
    ],
    officialSolution: "If we had tested earlier, the error would not have occurred.",
    explanation: "Third conditional conectează acțiunea ipotetică ('had tested') de rezultatul ratat ('would not have occurred').",
    hint: "Scrie: If we had tested earlier, the error would not have occurred."
  },
  {
    id: "eng-b2-3",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Vorbirea Indirectă (Reported Speech)",
    theory: "După un verb introductiv la trecut (<em>said</em>), timpurile verbale fac un pas în trecut (backshift): Present devine Past.",
    example: "\"I am debugging the app\" -> He said that he was debugging the app.",
    prompt: "Transformă 'I am writing the documentation' în vorbire indirectă la trecut: „She said that she was writing the documentation.”",
    caseSensitive: false,
    acceptedAnswers: [
      "She said that she was writing the documentation.",
      "She said that she was writing the documentation",
      "She said she was writing the documentation.",
      "She said she was writing the documentation"
    ],
    officialSolution: "She said that she was writing the documentation.",
    explanation: "'am writing' se transformă în 'was writing' din cauza concordanței timpurilor după 'said'.",
    hint: "Scrie: She said that she was writing the documentation."
  },
  {
    id: "eng-b2-4",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Phrasal Verbs de Afaceri: 'Call off'",
    theory: "Verbul frazal <code>to call off</code> este sinonimul uzual profesional al verbului <em>to cancel</em> (a anula o întâlnire sau lansare).",
    example: "The stakeholders decided to call off the product launch.",
    prompt: "Tradu folosind phrasal verb-ul 'call off': „Au anulat întâlnirea din cauza vremii rele.”",
    caseSensitive: false,
    acceptedAnswers: [
      "They called off the meeting due to bad weather.",
      "They called off the meeting due to bad weather",
      "They called off the meeting because of bad weather.",
      "They called off the meeting because of bad weather"
    ],
    officialSolution: "They called off the meeting due to bad weather.",
    explanation: "'Called off' este cel mai frecvent phrasal verb pentru anulare în afaceri.",
    hint: "Scrie: They called off the meeting due to bad weather."
  },
  {
    id: "eng-b2-5",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Critica Constructivă: 'Should have told'",
    theory: "Construcția <code>should have + Past Participle</code> exprimă o acțiune recomandabilă care ar fi trebuit să se întâmple în trecut, dar nu a avut loc.",
    example: "You should have notified the team before pushing to master.",
    prompt: "Tradu: „Ar fi trebuit să mă anunți mai devreme.” folosind structura 'You should have told me earlier.'",
    caseSensitive: false,
    acceptedAnswers: [
      "You should have told me earlier.",
      "You should have told me earlier"
    ],
    officialSolution: "You should have told me earlier.",
    explanation: "'Should have told' semnalează o ocazie ratată sau o deficiență de sincronizare în trecut.",
    hint: "Scrie: You should have told me earlier."
  },
  {
    id: "eng-b2-6",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Conectori de Contrast: 'On the other hand'",
    theory: "Perechea <code>On the one hand..., on the other hand...</code> balansează avantaje și dezavantaje la nivelul B2.",
    example: "On the one hand microservices offer scalability, but on the other hand they increase complexity.",
    prompt: "Tradu folosind conectorii contrastivi 'on the one hand ... on the other hand': „Pe de o parte e rapid, dar pe de altă parte e scump.”",
    caseSensitive: false,
    acceptedAnswers: [
      "On the one hand it is fast, but on the other hand it is expensive.",
      "On the one hand it is fast, but on the other hand it is expensive",
      "On the one hand it's fast, but on the other hand it's expensive.",
      "On the one hand it's fast, but on the other hand it's expensive"
    ],
    officialSolution: "On the one hand it is fast, but on the other hand it is expensive.",
    explanation: "Structura prezintă un echilibru argumentativ clar și matur.",
    hint: "Scrie: On the one hand it is fast, but on the other hand it is expensive."
  },
  {
    id: "eng-b2-7",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Email Profesional: Încheiere Elegantă",
    theory: "În corespondența profesională, fraza standard de încheiere este <code>I look forward to hearing from you soon</code> (urmată obligatoriu de gerunziu -ing).",
    example: "Thank you for the prompt reply. I look forward to hearing from you soon.",
    prompt: "Scrie formula profesională de încheiere: „I look forward to hearing from you soon.”",
    caseSensitive: false,
    acceptedAnswers: [
      "I look forward to hearing from you soon.",
      "I look forward to hearing from you soon",
      "Looking forward to hearing from you soon.",
      "Looking forward to hearing from you soon"
    ],
    officialSolution: "I look forward to hearing from you soon.",
    explanation: "'look forward to' se construiește obligatoriu cu gerunziul verbului (hearing).",
    hint: "Scrie: I look forward to hearing from you soon."
  },
  {
    id: "eng-b2-8",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Prepoziții Dependente: 'Familiar with'",
    theory: "Adjectivul <code>familiar</code> se construiește cu prepoziția <code>with</code> pentru a exprima familiaritatea cu o tehnologie.",
    example: "Are you familiar with the microfrontend architecture?",
    prompt: "Tradu folosind adjectivul 'familiar' cu prepoziția potrivită: „Suntem familiarizați cu această tehnologie.”",
    caseSensitive: false,
    acceptedAnswers: [
      "We are familiar with this technology.",
      "We are familiar with this technology",
      "We're familiar with this technology.",
      "We're familiar with this technology"
    ],
    officialSolution: "We are familiar with this technology.",
    explanation: "'Familiar with' este colocarea corectă în limba engleză.",
    hint: "Scrie: We are familiar with this technology."
  },
  {
    id: "eng-b2-9",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Probabilitate și Predicție: 'Likely to'",
    theory: "Construcția <code>is likely to + verb</code> exprimă o probabilitate ridicată într-un stil formal de business.",
    example: "The market adoption is likely to accelerate next quarter.",
    prompt: "Tradu folosind adjectivul de probabilitate 'likely': „Este foarte probabil ca proiectul să aibă succes.”",
    caseSensitive: false,
    acceptedAnswers: [
      "The project is very likely to succeed.",
      "The project is very likely to succeed",
      "The project is likely to succeed.",
      "The project is likely to succeed"
    ],
    officialSolution: "The project is very likely to succeed.",
    explanation: "'Is likely to succeed' este formularea preferată în estimări profesionale.",
    hint: "Scrie: The project is very likely to succeed."
  },
  {
    id: "eng-b2-10",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Idiom de Aliniere: 'On the same page'",
    theory: "Expresia idiomatică <code>to be on the same page</code> înseamnă a avea aceeași înțelegere și aceeași viziune comună cu echipa.",
    example: "Before we sprint, let's make sure we are all on the same page.",
    prompt: "Tradu folosind expresia idiomatică pentru acord: „Trebuie să ne asigurăm că toți suntem pe aceeași lungime de undă.”",
    caseSensitive: false,
    acceptedAnswers: [
      "We need to make sure we are all on the same page.",
      "We need to make sure we are all on the same page",
      "We must make sure we are all on the same page.",
      "We must make sure we are all on the same page"
    ],
    officialSolution: "We need to make sure we are all on the same page.",
    explanation: "'On the same page' este unul dintre cele mai folosite idiomuri profesionale din mediul agil.",
    hint: "Scrie: We need to make sure we are all on the same page."
  },
  {
    id: "eng-adv-2",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Idiom Profesional: 'Hit the ground running'",
    theory: "Expresia idiomatică <code>to hit the ground running</code> înseamnă a începe o activitate nouă imediat, cu mare energie, entuziasm și fără perioadă de ezitare.",
    example: "With her extensive background in software engineering, she hit the ground running on day one.",
    prompt: "Completează propoziția: „The new manager was ready to hit the ground running.” (scrie întreaga propoziție în engleză).",
    caseSensitive: false,
    acceptedAnswers: [
      "The new manager was ready to hit the ground running.",
      "The new manager was ready to hit the ground running"
    ],
    officialSolution: "The new manager was ready to hit the ground running.",
    explanation: "Expresia este omniprezentă în interviurile tehnice și descrierile de performanță.",
    hint: "Scrie: The new manager was ready to hit the ground running."
  },
  {
    id: "eng-adv-3",
    track: "Engleză (B1–B2)",
    icon: "🇬🇧",
    level: "2. B2 Upper-Intermediate",
    xp: 25,
    title: "Idiom de Calitate: 'Cut corners'",
    theory: "Expresia <code>to cut corners</code> înseamnă a face ceva în modul cel mai ușor, ieftin sau rapid, sacrificând calitatea, rigoarea sau regulile de siguranță.",
    example: "Never cut corners when writing database migration scripts.",
    prompt: "Tradu în engleză: „Nu putem face rabat de la calitate când vine vorba de securitate.” folosind expresia 'cut corners'.",
    caseSensitive: false,
    acceptedAnswers: [
      "We cannot cut corners when it comes to security.",
      "We can't cut corners when it comes to security.",
      "We cannot cut corners when it comes to security",
      "We can't cut corners when it comes to security"
    ],
    officialSolution: "We cannot cut corners when it comes to security.",
    explanation: "'Cut corners' surprinde perfect nuanța de compromis periculos asupra standardelor.",
    hint: "Scrie: We cannot cut corners when it comes to security."
  },

  // ==========================================================================
  // TRACK 6: ENGLEZĂ (C1–C2: ADVANCED & PROFICIENCY)
  // ==========================================================================
  // --- SUB-NIVEL C1: ADVANCED ---
  {
    id: "eng-adv-4",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "1. C1 Advanced",
    xp: 30,
    title: "Subjonctivul Mandativ Formal: 'that he be'",
    theory: "În engleza academică și profesională formală, după adjective precum <em>imperative, essential, crucial</em> sau verbe ca <em>demand, insist</em>, verbul din clauza subordonată rămâne la forma de bază neinflectată (bare subjunctive), indiferent de persoană.",
    example: "It is crucial that each member remain calm during an outage.",
    prompt: "Scrie propoziția de registru formal C1: „It is imperative that he be present.”",
    caseSensitive: false,
    acceptedAnswers: [
      "It is imperative that he be present.",
      "It is imperative that he be present"
    ],
    officialSolution: "It is imperative that he be present.",
    explanation: "În registrul formal C1, se folosește 'that he be', nu 'that he is'.",
    hint: "Scrie: It is imperative that he be present."
  },
  {
    id: "eng-adv-5",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "1. C1 Advanced",
    xp: 30,
    title: "Inversiune Emfatică: 'Little did they know'",
    theory: "Inversiunile cu adverbe restrictive plasează verbul auxiliar înaintea subiectului pentru un efect dramatic sau narativ puternic: <code>Little did + subiect + verb de bază</code>.",
    example: "Little did we realize how quickly the system would scale.",
    prompt: "Scrie propoziția: „Little did they know that the system had already been compromised.”",
    caseSensitive: false,
    acceptedAnswers: [
      "Little did they know that the system had already been compromised.",
      "Little did they know that the system had already been compromised"
    ],
    officialSolution: "Little did they know that the system had already been compromised.",
    explanation: "'Little did they know' inversează ordinea subiect-auxiliar pentru a accentua neștiința totală a protagoniștilor.",
    hint: "Scrie: Little did they know that the system had already been compromised."
  },
  {
    id: "eng-adv-6",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "1. C1 Advanced",
    xp: 30,
    title: "Vocabular Tehnic C1: 'Paradigm shift'",
    theory: "Termenul <code>paradigm shift</code> desemnează o schimbare fundamentală în conceptele de bază și practicile experimentale ale unei discipline tehnologice sau științifice.",
    example: "Cloud computing represented a massive paradigm shift for enterprise infrastructure.",
    prompt: "Tradu expresia academică C1: „Această tehnologie reprezintă o schimbare de paradigmă.”",
    caseSensitive: false,
    acceptedAnswers: [
      "This technology represents a paradigm shift.",
      "This technology represents a paradigm shift"
    ],
    officialSolution: "This technology represents a paradigm shift.",
    explanation: "Termenul este utilizat pe scară largă în arhitectura software și managementul inovației.",
    hint: "Scrie: This technology represents a paradigm shift."
  },
  {
    id: "eng-adv-7",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "1. C1 Advanced",
    xp: 30,
    title: "Vocabular de Audit C1: 'Discrepancy'",
    theory: "Substantivul <code>discrepancy</code> indică o diferență ilogică, neașteptată sau inacceptabilă între două fapte, sume sau înregistrări care ar trebui să coincidă.",
    example: "Financial auditors detected a severe discrepancy in the quarterly balance sheet.",
    prompt: "Tradu la nivel C1: „Am observat o discrepanță majoră între rapoarte.”",
    caseSensitive: false,
    acceptedAnswers: [
      "I noticed a major discrepancy between the reports.",
      "I noticed a major discrepancy between the reports",
      "We noticed a major discrepancy between the reports.",
      "We noticed a major discrepancy between the reports"
    ],
    officialSolution: "I noticed a major discrepancy between the reports.",
    explanation: "'Discrepancy' denotă o discrepanță sau nepotrivire tehnică specifică registrelor formale.",
    hint: "Scrie: I noticed a major discrepancy between the reports."
  },
  {
    id: "eng-adv-8",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "1. C1 Advanced",
    xp: 30,
    title: "Conector Academic C1: 'Notwithstanding'",
    theory: "Prepoziția și conectorul formal <code>notwithstanding</code> este sinonimul elevat al lui 'in spite of' sau 'despite', fiind foarte des întâlnit în contracte și publicații tehnice.",
    example: "Notwithstanding these minor bugs, the release was approved for production.",
    prompt: "Completează cu conectorul academic: „Notwithstanding the challenges, the project was delivered on schedule.”",
    caseSensitive: false,
    acceptedAnswers: [
      "Notwithstanding the challenges, the project was delivered on schedule.",
      "Notwithstanding the challenges, the project was delivered on schedule"
    ],
    officialSolution: "Notwithstanding the challenges, the project was delivered on schedule.",
    explanation: "Notwithstanding adaugă o solemnitate și o eleganță stilistică specifică nivelului avansat C1.",
    hint: "Scrie: Notwithstanding the challenges, the project was delivered on schedule."
  },

  // --- SUB-NIVEL C1+: PROFESSIONAL ---
  {
    id: "eng-adv-9",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "2. C1+ Professional",
    xp: 40,
    title: "Condițional Mixt: Past Action -> Present Consequence",
    theory: "Condiționalele mixte combină o ipoteză nereală din trecut (Past Perfect) cu un rezultat ipotetic în prezent (would + verb de bază).",
    example: "If she had taken that job offer last year, she would be leading the team today.",
    prompt: "Scrie fraza condițională mixtă: „If they had invested earlier, they would be profitable now.”",
    caseSensitive: false,
    acceptedAnswers: [
      "If they had invested earlier, they would be profitable now.",
      "If they had invested earlier, they would be profitable now"
    ],
    officialSolution: "If they had invested earlier, they would be profitable now.",
    explanation: "Construcția leagă o decizie din trecut ('had invested') de starea actuală din prezent ('would be profitable').",
    hint: "Scrie: If they had invested earlier, they would be profitable now."
  },
  {
    id: "eng-adv-10",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "2. C1+ Professional",
    xp: 40,
    title: "Inversiune Condițională Eleganta: 'Had I known...'",
    theory: "În engleza de elită, 'if' poate fi omis în frazele condiționale de tip 3 prin inversarea subiectului cu auxiliarul: <code>Had + subiect + past participle</code>.",
    example: "Had the engineers inspected the logs sooner, the outage could have been avoided.",
    prompt: "Transformă 'If I had known earlier' în forma inversată formală: „Had I known earlier, I would have warned you.”",
    caseSensitive: false,
    acceptedAnswers: [
      "Had I known earlier, I would have warned you.",
      "Had I known earlier, I would have warned you"
    ],
    officialSolution: "Had I known earlier, I would have warned you.",
    explanation: "Această inversiune demonstrează o stăpânire nativă a structurilor stilistice avansate.",
    hint: "Scrie: Had I known earlier, I would have warned you."
  },
  {
    id: "eng-adv-11",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "2. C1+ Professional",
    xp: 40,
    title: "Vocabular C1: 'Ubiquitous' (Omniprezent)",
    theory: "Adjectivul <code>ubiquitous</code> descrie ceva care este prezent, întâlnit sau pare să existe peste tot în același timp.",
    example: "Internet connectivity has become virtually ubiquitous in urban centers.",
    prompt: "Tradu: „Smartphone-urile au devenit omniprezente în societatea modernă.” folosind cuvântul 'ubiquitous'.",
    caseSensitive: false,
    acceptedAnswers: [
      "Smartphones have become ubiquitous in modern society.",
      "Smartphones have become ubiquitous in modern society"
    ],
    officialSolution: "Smartphones have become ubiquitous in modern society.",
    explanation: "Termenul 'ubiquitous' este preferat în mediul tehnic în locul comunului 'omnipresent' sau 'everywhere'.",
    hint: "Scrie: Smartphones have become ubiquitous in modern society."
  },
  {
    id: "eng-adv-12",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "2. C1+ Professional",
    xp: 40,
    title: "Vocabular C1: 'A pragmatic approach'",
    theory: "Adjectivul <code>pragmatic</code> caracterizează o gândire orientată pe rezultate concrete, eficiență și realism practic, evitând teoriile pure sau dogmele.",
    example: "Engineers often adopt a pragmatic approach when balancing performance and deadlines.",
    prompt: "Tradu la nivel C1: „Avem nevoie de o abordare pragmatică pentru rezolvarea acestei probleme.”",
    caseSensitive: false,
    acceptedAnswers: [
      "We need a pragmatic approach to solve this problem.",
      "We need a pragmatic approach to solve this problem",
      "We need a pragmatic approach to solving this problem.",
      "We need a pragmatic approach to solving this problem"
    ],
    officialSolution: "We need a pragmatic approach to solve this problem.",
    explanation: "'Pragmatic approach' este una dintre cele mai apreciate colocații în interviurile de Senior Engineer.",
    hint: "Scrie: We need a pragmatic approach to solve this problem."
  },
  {
    id: "eng-adv-13",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "2. C1+ Professional",
    xp: 40,
    title: "Verbe de Inspecție C1: 'Scrutinize'",
    theory: "Verbul <code>to scrutinize</code> înseamnă a examina ceva extrem de minuțios, critic și cu o atenție desăvârșită la fiecare detaliu ascuns.",
    example: "Security experts carefully scrutinize open-source dependencies before deployment.",
    prompt: "Tradu: „Comisia va analiza cu atenție fiecare linie de cod.” folosind verbul 'scrutinize'.",
    caseSensitive: false,
    acceptedAnswers: [
      "The committee will scrutinize every line of code.",
      "The committee will scrutinize every line of code",
      "The team will scrutinize every line of code."
    ],
    officialSolution: "The committee will scrutinize every line of code.",
    explanation: "'Scrutinize' depășește simplitatea verbelor 'check' sau 'examine', implicând rigoare meticuloasă.",
    hint: "Scrie: The committee will scrutinize every line of code."
  },

  // --- SUB-NIVEL C2: MASTERY ---
  {
    id: "eng-adv-14",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "3. C2 Mastery",
    xp: 50,
    title: "Inversiune Negativă C2: 'Seldom have we...'",
    theory: "Adverbul restrictiv <code>seldom</code> (rar) declanșează inversiunea topică a propoziției (auxiliarul plasat înaintea subiectului), creând un ton retoric magistral de nivel C2 Mastery.",
    example: "Seldom had a software framework transformed the web as profoundly as React.",
    prompt: "Scrie inversiunea retorică C2: „Seldom have we witnessed such remarkable resilience.”",
    caseSensitive: false,
    acceptedAnswers: [
      "Seldom have we witnessed such remarkable resilience.",
      "Seldom have we witnessed such remarkable resilience"
    ],
    officialSolution: "Seldom have we witnessed such remarkable resilience.",
    explanation: "'Seldom have we witnessed' reprezintă vârful construcțiilor inversate în registrul C2.",
    hint: "Scrie: Seldom have we witnessed such remarkable resilience."
  },
  {
    id: "eng-adv-15",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "3. C2 Mastery",
    xp: 50,
    title: "Verbe Strategice C2: 'Mitigate'",
    theory: "Verbul <code>to mitigate</code> înseamnă a reduce gravitatea, nocivitatea sau severitatea unei probleme sau a unui risc. Opusul său direct este <code>to exacerbate</code>.",
    example: "Redundant power supplies mitigate the impact of electrical grid failures.",
    prompt: "Tradu la nivel C1: „Am implementat noi protocoale pentru a atenua riscurile potențiale.”",
    caseSensitive: false,
    acceptedAnswers: [
      "We implemented new protocols to mitigate potential risks.",
      "We implemented new protocols to mitigate potential risks",
      "We have implemented new protocols to mitigate potential risks.",
      "We have implemented new protocols to mitigate potential risks"
    ],
    officialSolution: "We implemented new protocols to mitigate potential risks.",
    explanation: "'Mitigate' este termenul etalon utilizat în gestionarea incidentelor și a riscurilor cibernetice.",
    hint: "Scrie: We implemented new protocols to mitigate potential risks."
  },
  {
    id: "eng-adv-16",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "3. C2 Mastery",
    xp: 50,
    title: "Argumentare Critică C2: 'Play devil's advocate'",
    theory: "Expresia <code>to play devil's advocate</code> înseamnă a susține în mod deliberat o opinie contrară celei comune pentru a testa temeinicia unui argument și a descoperi vulnerabilități logice.",
    example: "During code reviews, it is healthy to play devil's advocate to stress-test architecture.",
    prompt: "Tradu expresia retorică C1: „Permite-mi să joc rolul avocatului diavolului pentru o clipă.”",
    caseSensitive: false,
    acceptedAnswers: [
      "Let me play devil's advocate for a moment.",
      "Let me play devil's advocate for a moment",
      "Allow me to play devil's advocate for a moment.",
      "Allow me to play devil's advocate for a moment"
    ],
    officialSolution: "Let me play devil's advocate for a moment.",
    explanation: "Un idiom de referință în dezbaterile intelectuale de nivel înalt.",
    hint: "Scrie: Let me play devil's advocate for a moment."
  },
  {
    id: "eng-adv-17",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "3. C2 Mastery",
    xp: 50,
    title: "Colocație Academică C2: 'Mounting evidence'",
    theory: "Colocația <code>mounting evidence</code> descrie un volum de dovezi sau date concrete care continuă să crească și devine tot mai greu de combătut.",
    example: "There is mounting evidence that microservice sprawl increases operational latency.",
    prompt: "Tradu expresia academică C1: „Există dovezi din ce în ce mai copleșitoare care susțin această ipoteză.”",
    caseSensitive: false,
    acceptedAnswers: [
      "There is mounting evidence supporting this hypothesis.",
      "There is mounting evidence supporting this hypothesis",
      "There is mounting evidence to support this hypothesis.",
      "There is mounting evidence to support this hypothesis"
    ],
    officialSolution: "There is mounting evidence supporting this hypothesis.",
    explanation: "'Mounting evidence' exprimă eleganță stilistică academică fără egal.",
    hint: "Scrie: There is mounting evidence supporting this hypothesis."
  },
  {
    id: "eng-adv-18",
    track: "Engleză (C1–C2)",
    icon: "🇬🇧",
    level: "3. C2 Mastery",
    xp: 50,
    title: "Adjective de Impact C2: 'Unprecedented'",
    theory: "Adjectivul <code>unprecedented</code> desemnează un fenomen sau o stare de fapt care nu a mai fost niciodată întâlnită, experimentată sau înregistrată în istorie.",
    example: "The platform endured an unprecedented surge in concurrent traffic.",
    prompt: "Tradu adjectivul avansat C1: „Compania se confruntă cu o creștere fără precedent.”",
    caseSensitive: false,
    acceptedAnswers: [
      "The company is facing unprecedented growth.",
      "The company is facing unprecedented growth",
      "The company is experiencing unprecedented growth.",
      "The company is experiencing unprecedented growth"
    ],
    officialSolution: "The company is facing unprecedented growth.",
    explanation: "'Unprecedented' este adjectivul cheie pentru evenimente istorice sau salturi scalare remarcabile.",
    hint: "Scrie: The company is facing unprecedented growth."
  }
];

// Fuziune sigură și normalizare automată a celor 3 discipline distincte de limba engleză
if (typeof DEFAULT_CURRICULUM !== "undefined" && Array.isArray(DEFAULT_CURRICULUM)) {
  DEFAULT_CURRICULUM.push(...ADVANCED_CURRICULUM_EXPANSION);

  // Normalizare în 3 discipline distincte: A1-A2, B1-B2, C1-C2
  DEFAULT_CURRICULUM.forEach(l => {
    if (l.track && l.track.includes("Engleză")) {
      l.icon = "🇬🇧";
      if (l.id.startsWith("eng-a1") || l.id.startsWith("eng-a2") || l.level.includes("A1") || l.level.includes("A2")) {
        l.track = "Engleză (A1–A2)";
        if (l.id.startsWith("eng-a1") || l.level.includes("A1")) l.level = "1. A1 Începător";
        else l.level = "2. A2 Elementar";
      } else if (
        l.id.startsWith("eng-b1") || l.id.startsWith("eng-b2") ||
        l.id === "eng-adv-1" || l.id === "eng-adv-2" || l.id === "eng-adv-3" ||
        l.id === "eng-v1" || l.id === "eng-lexical-4" || l.id === "eng-lexical-12" ||
        l.level.includes("B1") || l.level.includes("B2")
      ) {
        l.track = "Engleză (B1–B2)";
        if (l.id.startsWith("eng-b1") || l.id === "eng-adv-1" || l.level.includes("B1")) {
          l.level = "1. B1 Intermediate";
        } else {
          l.level = "2. B2 Upper-Intermediate";
        }
      } else {
        l.track = "Engleză (C1–C2)";
        if (l.level.includes("C2") || l.id.startsWith("eng-adv-14") || l.id.startsWith("eng-adv-15") || l.id.startsWith("eng-adv-16") || l.id.startsWith("eng-adv-17") || l.id.startsWith("eng-adv-18") || l.id === "eng-v6") {
          l.level = "3. C2 Mastery";
        } else if (l.id.startsWith("eng-adv-9") || l.id.startsWith("eng-adv-10") || l.id.startsWith("eng-adv-11") || l.id.startsWith("eng-adv-12") || l.id.startsWith("eng-adv-13") || l.level.includes("C1+")) {
          l.level = "2. C1+ Professional";
        } else {
          l.level = "1. C1 Advanced";
        }
      }
    }
  });
}

