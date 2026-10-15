const DEFAULT_CURRICULUM = [
  // =========================================================================
  // 1. MODULUL SQL: INTEROGĂRI, INSERĂRI ȘI CONSTRÂNGERI DE INTEGRITATE
  // =========================================================================
  {
    id: "sql-1",
    track: "SQL",
    icon: "🗄️",
    level: "Fundamente & Filtrare",
    xp: 25,
    title: "SELECT, WHERE, BETWEEN și IN",
    theory: "Instrucțiunea <code>SELECT</code> extrage date dintr-un tabel. Clauza <code>WHERE</code> filtrează rândurile și poate fi combinată cu operatorul <code>BETWEEN</code> (care selectează valori într-un interval închis, inclusiv capetele) și cu operatorul <code>IN</code> (care specifică o listă de valori posibile fără a repeta <code>OR</code>). Pentru eliminarea duplicatelor se utilizează <code>SELECT DISTINCT</code>.",
    example: "-- Selectează produsele cu prețul între 10 și 50 din categoriile 'Tech' sau 'Books':\nSELECT ProductName, Price\nFROM Products\nWHERE Price BETWEEN 10 AND 50\n  AND Category IN ('Tech', 'Books');",
    prompt: "Scrie o interogare SQL care să selecteze toate coloanele (*) din tabelul 'Orders' unde coloana 'Quantity' este între 1 și 100 (folosind BETWEEN).",
    starterContext: "Tabel: Orders (order_id, Quantity, Status)",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT * FROM Orders WHERE Quantity BETWEEN 1 AND 100;",
      "SELECT * FROM Orders WHERE Quantity BETWEEN 1 AND 100"
    ],
    officialSolution: "SELECT * FROM Orders WHERE Quantity BETWEEN 1 AND 100;",
    explanation: "Sintaxa standard utilizează SELECT * FROM Orders urmat de filtrul WHERE Quantity BETWEEN 1 AND 100. Punctul și virgula final este opțional în validator.",
    hint: "Începe cu SELECT * FROM Orders WHERE ... și folosește operatorul BETWEEN 1 AND 100."
  },
  {
    id: "sql-2",
    track: "SQL",
    icon: "🗄️",
    level: "Manipulare Date (DML)",
    xp: 30,
    title: "INSERT INTO: Adăugarea Înregistrărilor în Tabel",
    theory: "Comanda <code>INSERT INTO</code> adaugă unul sau mai multe rânduri noi într-un tabel. Cea mai sigură practică este specificarea explicită a numelor coloanelor urmată de clauza <code>VALUES</code>: <code>INSERT INTO table_name (col1, col2) VALUES (val1, val2);</code>. Astfel, coloanele auto-incrementate (precum ID-ul) se actualizează automat.",
    example: "-- Inserarea unui client nou doar pe coloanele specificate:\nINSERT INTO Customers (CustomerName, City, Country)\nVALUES ('Cardinal', 'Stavanger', 'Norway');",
    prompt: "Scrie o comandă SQL pentru a insera în tabelul 'Employees' pe coloanele (Name, Age) valorile ('Alex', 28).",
    starterContext: "Tabel: Employees (EmployeeID AUTO, Name VARCHAR, Age INT)",
    caseSensitive: false,
    acceptedAnswers: [
      "INSERT INTO Employees (Name, Age) VALUES ('Alex', 28);",
      "INSERT INTO Employees (Name, Age) VALUES ('Alex', 28)"
    ],
    officialSolution: "INSERT INTO Employees (Name, Age) VALUES ('Alex', 28);",
    explanation: "Se specifică mai întâi tabelul și lista coloanelor între paranteze (Name, Age), apoi cuvântul cheie VALUES urmat de ('Alex', 28).",
    hint: "Structura este: INSERT INTO Employees (Name, Age) VALUES (...);"
  },
  {
    id: "sql-3",
    track: "SQL",
    icon: "🗄️",
    level: "Constrângeri DDL",
    xp: 35,
    title: "ALTER TABLE & ADD CONSTRAINT CHECK",
    theory: "Constrângerea <code>CHECK</code> impune o regulă asupra valorilor unei coloane: dacă expresia booleană din paranteze returnează <code>FALSE</code> la <code>INSERT</code> sau <code>UPDATE</code>, operația este respinsă. Pentru a adăuga o constrângere numită pe un tabel deja existent, se folosește sintaxa: <code>ALTER TABLE table_name ADD CONSTRAINT constraint_name CHECK (condiție);</code>.",
    example: "-- Adaugă o constrângere numită CHK_Quantity care obligă cantitatea să fie pozitivă:\nALTER TABLE Orders\nADD CONSTRAINT CHK_Quantity CHECK (amount > 0);",
    prompt: "Modifică tabelul existent 'Employees' (folosind ALTER TABLE) pentru a adăuga o constrângere numită 'AgeCheck' care verifică faptul că vârsta (Age) este mai mare decât 18 (Age > 18).",
    starterContext: "Sintaxă: ALTER TABLE <tabel> ADD CONSTRAINT <nume> CHECK (<condiție>);",
    caseSensitive: false,
    acceptedAnswers: [
      "ALTER TABLE Employees ADD CONSTRAINT AgeCheck CHECK (Age > 18);",
      "ALTER TABLE Employees ADD CONSTRAINT AgeCheck CHECK (Age > 18)",
      "ALTER TABLE Employees ADD CHECK (Age > 18);",
      "ALTER TABLE Employees ADD CHECK (Age > 18)"
    ],
    officialSolution: "ALTER TABLE Employees ADD CONSTRAINT AgeCheck CHECK (Age > 18);",
    explanation: "Comanda ALTER TABLE Employees ADD CONSTRAINT AgeCheck CHECK (Age > 18); atașează regula la schema tabelului și evaluează atât datele existente, cât și viitoarele inserări.",
    hint: "Folosește exact cuvintele: ALTER TABLE Employees ADD CONSTRAINT AgeCheck CHECK (Age > 18);"
  },
  {
    id: "sql-4",
    track: "SQL",
    icon: "🗄️",
    level: "Integritate Avansată",
    xp: 40,
    title: "Capcana Valorilor NULL în Constrângerile CHECK",
    theory: "O particularitate critică în SQL este că valorile <code>NULL</code> sunt evaluate ca <code>UNKNOWN</code> în interiorul unei clauze <code>CHECK</code>, nu ca <code>FALSE</code>. Astfel, o regulă <code>CHECK (Status IN ('Y', 'N'))</code> va permite inserarea lui <code>NULL</code>! Pentru a bloca valorile nule direct în constrângere, condiția trebuie combinată cu <code>IS NOT NULL</code> sau coloana trebuie eliminată și recreată. De asemenea, o constrângere nu se editează direct, ci se șterge cu <code>ALTER TABLE nume_tabel DROP CONSTRAINT nume_constrangere;</code>.",
    example: "-- Eliminarea unei constrângeri vechi:\nALTER TABLE Scores DROP CONSTRAINT CHK_Score;\n\n-- Adăugarea unei constrângeri care blochează explicit și NULL:\nALTER TABLE Orders ADD CONSTRAINT CHK_Status\nCHECK (Status IN ('Pending', 'Completed') AND Status IS NOT NULL);",
    prompt: "Scrie comanda SQL care șterge (DROP CONSTRAINT) constrângerea numită 'CHK_Score' din tabelul 'Scores'.",
    starterContext: "Operație de mentenanță a schemei pe SQL Server / PostgreSQL / CockroachDB",
    caseSensitive: false,
    acceptedAnswers: [
      "ALTER TABLE Scores DROP CONSTRAINT CHK_Score;",
      "ALTER TABLE Scores DROP CONSTRAINT CHK_Score"
    ],
    officialSolution: "ALTER TABLE Scores DROP CONSTRAINT CHK_Score;",
    explanation: "Înainte de a modifica intervalul unei constrângeri CHECK, vechea regulă trebuie eliminată cu ALTER TABLE Scores DROP CONSTRAINT CHK_Score;.",
    hint: "Începe cu ALTER TABLE Scores și continuă cu DROP CONSTRAINT CHK_Score;"
  },
  {
    id: "sql-5",
    track: "SQL",
    icon: "🗄️",
    level: "Normalizare Text & Regex",
    xp: 40,
    title: "Normalizarea Spațiilor în SQL cu REGEXP_REPLACE",
    theory: "Bazele de date moderne (PostgreSQL, Oracle, SQL Server 2025) oferă funcții native pentru expresii regulate precum <code>REGEXP_LIKE</code> și <code>REGEXP_REPLACE</code>. Pentru a curăța textele care conțin spații multiple consecutive, modelul regex <code>'\\s+'</code> identifică unul sau mai multe caractere de spațiere și le înlocuiește cu un singur spațiu <code>' '</code>.",
    example: "-- Înlocuiește secvențele de spații multiple cu un singur spațiu:\nSELECT REGEXP_REPLACE(address, '\\s+', ' ', 'g') AS normalized_address\nFROM customers;",
    prompt: "Scrie o interogare SELECT care selectează coloana 'username' din tabelul 'users' unde 'username' respectă expresia regulată (folosind operatorul REGEXP) '^[A-Za-z0-9_]+$'.",
    starterContext: "Sintaxă MySQL: SELECT <coloană> FROM <tabel> WHERE <coloană> REGEXP '<pattern>';",
    caseSensitive: false,
    acceptedAnswers: [
      "SELECT username FROM users WHERE username REGEXP '^[A-Za-z0-9_]+$';",
      "SELECT username FROM users WHERE username REGEXP '^[A-Za-z0-9_]+$'"
    ],
    officialSolution: "SELECT username FROM users WHERE username REGEXP '^[A-Za-z0-9_]+$';",
    explanation: "Ancorele ^ și $ garantează că întregul șir conține exclusiv caractere alfanumerice și underscore, prevenind valorile malformate.",
    hint: "Folosește: SELECT username FROM users WHERE username REGEXP '^[A-Za-z0-9_]+$';"
  },

  // =========================================================================
  // 2. MODULUL JAVA: PROGRAMARE ORIENTATĂ PE OBIECTE (OOP)
  // =========================================================================
  {
    id: "java-1",
    track: "Java",
    icon: "☕",
    level: "Clase & Încapsulare",
    xp: 30,
    title: "Atribute Private, Constructori și Metode Getter/Setter",
    theory: "Programarea Orientată pe Obiecte (OOP) protejează starea internă a unui obiect prin <strong>încapsulare</strong>: atributele clasei sunt declarate <code>private</code>, iar inițializarea și citirea lor se realizează prin constructori și metode publice <code>get</code> / <code>set</code>. Cuvântul-cheie <code>this</code> dezambiguizează atributul instanței față de parametrul constructorului.",
    example: "public class Person {\n  private String name;\n  private int age;\n\n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n  public String getName() { return name; }\n}",
    prompt: "Scrie declarația completă a unei metode getter publice în Java care returnează atributul int 'age' (numită getAge).",
    starterContext: "private int age;\n// Scrie metoda getter pe o singură linie sau bloc:",
    caseSensitive: true,
    acceptedAnswers: [
      "public int getAge() { return age; }",
      "public int getAge() { return this.age; }"
    ],
    officialSolution: "public int getAge() { return age; }",
    explanation: "În Java, convenția pentru un atribut int numit 'age' este o metodă publică cu tipul de return int, numită getAge(), care returnează valoarea atributului.",
    hint: "Semnătura este public int getAge() urmată de { return age; }."
  },
  {
    id: "java-2",
    track: "Java",
    icon: "☕",
    level: "Moștenire (Inheritance)",
    xp: 35,
    title: "Extinderea Claselor cu extends și Suprascrierea Metodelor",
    theory: "Moștenirea permite unei subclase să preia atributele și metodele unei superclase folosind cuvântul-cheie <code>extends</code>. Cu excepția clasei <code>Object</code>, fiecare clasă în Java are o singură superclasă directă (moștenire simplă). Subclasa poate redefini comportamentul unei metode moștenite prin suprascriere (<em>method overriding</em>).",
    example: "class Animal {\n  public void move() { System.out.println(\"Moving\"); }\n}\n\nclass Cheetah extends Animal {\n  @Override\n  public void move() { System.out.println(\"Running fast!\"); }\n}",
    prompt: "Scrie antetul (linia de definire) unei clase numite 'SavingsAccount' care moștenește clasa 'BankAccount' și deschide acolada '{'.",
    starterContext: "// Definirea subclasei pentru un cont de economii care blochează retragerile sub 100:",
    caseSensitive: true,
    acceptedAnswers: [
      "public class SavingsAccount extends BankAccount {",
      "class SavingsAccount extends BankAccount {"
    ],
    officialSolution: "public class SavingsAccount extends BankAccount {",
    explanation: "Cuvântul-cheie extends stabilește relația de moștenire de tipul 'is-a' între subclasa SavingsAccount și superclasa BankAccount.",
    hint: "Folosește cuvântul cheie extends între numele celor două clase."
  },
  {
    id: "java-3",
    track: "Java",
    icon: "☕",
    level: "Polimorfism & Abstractizare",
    xp: 40,
    title: "Clase Abstracte și Calculul Ariei în Ierarhia Shape",
    theory: "O clasă declarată cu <code>abstract</code> nu poate fi instanțiată direct și poate conține metode abstracte (fără corp), obligând subclasele concrete precum <code>Rectangle</code> sau <code>Circle</code> să furnizeze implementarea exactă pentru calculul ariei și al perimetrului.",
    example: "abstract class Shape {\n  public abstract double getArea();\n}\n\nclass Rectangle extends Shape {\n  private double width, height;\n  public double getArea() { return width * height; }\n}",
    prompt: "Scrie declarația unei metode abstracte publice numite 'getArea' care returnează un 'double' (în interiorul clasei abstracte Shape).",
    starterContext: "public abstract class Shape {\n  // Declară metoda abstractă aici:\n}",
    caseSensitive: true,
    acceptedAnswers: [
      "public abstract double getArea();",
      "abstract public double getArea();"
    ],
    officialSolution: "public abstract double getArea();",
    explanation: "O metodă abstractă în Java se termină direct cu punct și virgulă (;), fără acolade, deoarece implementarea revine subclaselor.",
    hint: "Nu pune acolade! Scrie: public abstract double getArea();"
  },

  // =========================================================================
  // 3. MODULUL JAVASCRIPT (ES6+): METODE FUNCȚIONALE & DESTRUCTURARE
  // =========================================================================
  {
    id: "js-1",
    track: "JavaScript",
    icon: "🟨",
    level: "Metode ES6 pe Array",
    xp: 30,
    title: "Transformări Declarative cu .map() și .filter()",
    theory: "În ES6, metodele funcționale înlocuiesc buclele clasice: <code>.map()</code> aplică o funcție fiecărui element și returnează un tablou nou de aceeași lungime, în timp ce <code>.filter()</code> păstrează doar elementele pentru care funcția săgeată (<em>arrow function</em>) returnează <code>true</code>.",
    example: "const prices = [10, 25, 60, 80];\nconst discounted = prices\n  .filter(p => p >= 50)\n  .map(p => p * 0.9); // [54, 72]",
    prompt: "Folosind metoda .filter() și o funcție săgeată cu parametrul 'n', filtrează tabloul 'nums' pentru a păstra doar numerele strict mai mari decât 10 (atribuie rezultatul constantei 'big').",
    starterContext: "const nums = [4, 12, 8, 25, 3];",
    caseSensitive: true,
    acceptedAnswers: [
      "const big = nums.filter(n => n > 10);",
      "const big = nums.filter(n => n > 10)",
      "const big = nums.filter((n) => n > 10);",
      "const big = nums.filter((n) => n > 10)"
    ],
    officialSolution: "const big = nums.filter(n => n > 10);",
    explanation: "Metoda nums.filter(n => n > 10) evaluează predicatul n > 10 pentru fiecare element și returnează un tablou nou [12, 25].",
    hint: "Scrie: const big = nums.filter(n => n > 10);"
  },
  {
    id: "js-2",
    track: "JavaScript",
    icon: "🟨",
    level: "Sintaxă Modernă ES6",
    xp: 35,
    title: "Destructurarea Obiectelor și a Tablourilor (Destructuring)",
    theory: "Sintaxa de <strong>destructurare</strong> din ES6 permite extragerea directă a proprietăților unui obiect sau a elementelor unui tablou în variabile distincte. Pentru obiecte se folosesc acolade <code>const { title, author } = book;</code>, iar pentru tablouri se folosesc paranteze drepte <code>const [first, second] = scores;</code>.",
    example: "const user = { username: 'alex_dev', role: 'architect', active: true };\n// Extragere într-o singură linie:\nconst { username, role } = user;",
    prompt: "Folosind destructurarea de obiecte ES6, extrage proprietățile 'title' și 'salary' din obiectul 'employee' într-o constantă (const).",
    starterContext: "const employee = { title: 'Lead Engineer', salary: 9500, dept: 'R&D' };",
    caseSensitive: true,
    acceptedAnswers: [
      "const { title, salary } = employee;",
      "const { title, salary } = employee",
      "const { salary, title } = employee;",
      "const { salary, title } = employee"
    ],
    officialSolution: "const { title, salary } = employee;",
    explanation: "Acoladele din stânga operatorului '=' indică destructurarea proprietăților cu același nume din obiectul sursă 'employee'.",
    hint: "Folosește acolade după const: const { title, salary } = employee;"
  },
  {
    id: "js-3",
    track: "JavaScript",
    icon: "🟨",
    level: "Agregare & Regex",
    xp: 40,
    title: "Agregarea cu .reduce() și Normalizarea Regex în JS",
    theory: "Metoda <code>.reduce((acc, val) => acc + val, 0)</code> comprimă un tablou într-o singură valoare, acumulând rezultatul în <code>acc</code>. De asemenea, în procesarea șirurilor de caractere, lanțul <code>str.replace(/\\s+/g, ' ').trim()</code> reprezintă standardul industrial în JavaScript pentru eliminarea spațiilor redundante.",
    example: "const cart = [15, 25, 60];\nconst total = cart.reduce((acc, item) => acc + item, 0); // 100\n\nconst clean = rawText.replace(/\\s+/g, ' ').trim();",
    prompt: "Calculează suma elementelor din tabloul 'scores' folosind .reduce() cu parametrii (acc, s) și valoarea inițială 0, atribuind rezultatul la 'const sum = ...'.",
    starterContext: "const scores = [20, 35, 45];",
    caseSensitive: true,
    acceptedAnswers: [
      "const sum = scores.reduce((acc, s) => acc + s, 0);",
      "const sum = scores.reduce((acc, s) => acc + s, 0)"
    ],
    officialSolution: "const sum = scores.reduce((acc, s) => acc + s, 0);",
    explanation: "Funcția săgeată (acc, s) => acc + s adună fiecare element la acumulatorul inițializat cu 0.",
    hint: "Scrie: const sum = scores.reduce((acc, s) => acc + s, 0);"
  },

  // =========================================================================
  // 4. MODULUL ENGLEZĂ (B2 -> C1): INVERSIUNE, CONDIȚIONALE & CLEFT SENTENCES
  // =========================================================================
  {
    id: "eng-1",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "C1 Inversiune",
    xp: 35,
    title: "Inversiunea după Adverbe Negative (Rarely, Little, Never)",
    theory: "La nivelul C1, când o propoziție începe cu un adverb negativ sau restrictiv (<code>Never</code>, <code>Rarely</code>, <code>Seldom</code>, <code>Little</code>, <code>Under no circumstances</code>, <code>On no account</code>), ordinea cuvintelor devine cea a unei întrebări: <strong>Auxiliar + Subiect + Verb Principal</strong>. Dacă propoziția nu are auxiliar (Present Simple sau Past Simple), se adaugă <code>do / does / did</code> și verbul rămâne la infinitiv! Eroare clasică: <em>Little knew she the truth</em> ❌ → Corect: <em>Little did she know the truth</em> ✓.",
    example: "• Normal (B2): We rarely get snow in this part of the country.\n• Inversiune (C1): Rarely do we get snow in this part of the country.\n\n• Normal (B2): She little knew that her life was about to change.\n• Inversiune (C1): Little did she know that her life was about to change.",
    prompt: "Rescrie propoziția la nivel C1 începând cu 'Never in my life':\nPropoziție B2: 'I have never in my life seen such a mess.'",
    starterContext: "Regulă: Never in my life + [auxiliar] + [subiect] + [participiu]...",
    caseSensitive: false,
    acceptedAnswers: [
      "Never in my life have I seen such a mess.",
      "Never in my life have I seen such a mess"
    ],
    officialSolution: "Never in my life have I seen such a mess.",
    explanation: "Auxiliarul 'have' trece înaintea subiectului 'I': 'Never in my life have I seen such a mess.'",
    hint: "Inversează 'I have' în 'have I' imediat după 'Never in my life'."
  },
  {
    id: "eng-2",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "C1 Corelative & Timp",
    xp: 40,
    title: "No sooner... than, Hardly... when și Not until",
    theory: "Expresia <code>No sooner</code> este urmată obligatoriu de conjuncția <code>than</code> (niciodată <em>when</em>!), în timp ce <code>Hardly / Scarcely</code> sunt urmate de <code>when</code>, ambele folosind Past Perfect inversat (<code>No sooner had we left than...</code>). În schimb, după <code>Not until</code> sau <code>Only when</code>, inversiunea nu se pune în prima parte, ci în propoziția principală: <em>Not until I moved abroad <strong>did I appreciate</strong> home</em>.",
    example: "• Eroare frecventă: No sooner had the meeting begun when the alarm went off. ❌\n• Corect C1: No sooner had the meeting begun than the alarm went off. ✓\n• Corect C1: Only after the meeting did I realise how serious the problem was. ✓",
    prompt: "Transformă propoziția folosind 'No sooner' la început (atenție la conjuncția corelativă corectă!):\n'As soon as the film started, the power went off.'",
    starterContext: "Folosește Past Perfect inversat: No sooner had the film started...",
    caseSensitive: false,
    acceptedAnswers: [
      "No sooner had the film started than the power went off.",
      "No sooner had the film started than the power went off"
    ],
    officialSolution: "No sooner had the film started than the power went off.",
    explanation: "Structura C1 cere inversiunea Past Perfect (had the film started) și conectorul 'than' (nu 'when').",
    hint: "No sooner had the film started than the power went off."
  },
  {
    id: "eng-3",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "C1 Condiționale",
    xp: 40,
    title: "Condiționale Inversate (Had, Were, Should) și Mixte",
    theory: "În registrul formal C1, conjuncția <code>if</code> poate fi eliminată prin plasarea lui <code>Should</code> (Tip 1), <code>Were</code> (Tip 2) sau <code>Had</code> (Tip 3) pe prima poziție. În condiționalele mixte, o acțiune trecută (Past Perfect) are un rezultat în prezent (<code>would + infinitiv prezent</code>).",
    example: "• Tip 1: Should you need any assistance, please contact our office.\n• Tip 2: Were I in your position, I would accept the offer.\n• Tip 3: Had I known the truth, I would have told you.\n• Mixt: Had I studied harder last summer, I wouldn't be retaking the exam now.",
    prompt: "Rescrie condiționalul de mai jos fără 'If', folosind inversiunea C1 la începutul propoziției:\n'If we had known about the strike, we would have taken a taxi.'",
    starterContext: "Elimină 'If' și inversează subiectul 'we' cu auxiliarul 'had':",
    caseSensitive: false,
    acceptedAnswers: [
      "Had we known about the strike, we would have taken a taxi.",
      "Had we known about the strike, we would have taken a taxi"
    ],
    officialSolution: "Had we known about the strike, we would have taken a taxi.",
    explanation: "Prin eliminarea lui 'If' și mutarea lui 'Had' pe prima poziție, 'If we had known' devine 'Had we known'.",
    hint: "Începe propoziția cu: Had we known about the strike, ..."
  },
  {
    id: "eng-4",
    track: "Engleză C1",
    icon: "🇬🇧",
    level: "C1 Emfază & Stil",
    xp: 45,
    title: "Fraze Scindate (Cleft Sentences: It was... that / What... was)",
    theory: "Pentru a pune accentul (emfaza) pe un anumit element în discursul avansat, engleza C1 folosește două tipuri de <em>Cleft Sentences</em>:\n1. <strong>It-Cleft</strong>: <code>It + is/was + [elementul accentuat] + that/who + restul propoziției</code>.\n2. <strong>Wh-Cleft (Pseudo-cleft)</strong>: <code>What + clauză subiect + is/was + [elementul accentuat]</code>.",
    example: "• Neutru: The waiter's attitude made things worse.\n• It-Cleft: It was the waiter's attitude that made things worse.\n\n• Neutru: I was most unhappy with the service.\n• Wh-Cleft: What I was most unhappy with was the service.",
    prompt: "Rescrie propoziția într-o structură emfatică de tip Wh-Cleft care să înceapă cu 'What annoyed me most':\n'Her terrible accent annoyed me most.'",
    starterContext: "Model: What annoyed me most was ...",
    caseSensitive: false,
    acceptedAnswers: [
      "What annoyed me most was her terrible accent.",
      "What annoyed me most was her terrible accent"
    ],
    officialSolution: "What annoyed me most was her terrible accent.",
    explanation: "Pseudo-scindata izolează cauza în poziție finală de focus după verbul copulativ 'was': 'What annoyed me most was her terrible accent.'",
    hint: "Continuă expresia 'What annoyed me most' cu verbul 'was' și elementul accentuat."
  }
];