const DEFAULT_CURRICULUM = [
  {
    "id": "sql-1",
    "track": "SQL",
    "icon": "🗄️",
    "level": "1. Începător",
    "xp": 25,
    "title": "Capitolul 1: Arhitectura Interogărilor SELECT, WHERE, BETWEEN și IN",
    "theory": "\n      <p>În bazele de date relaționale, instrucțiunea <code>SELECT</code> este motorul prin care extragem și filtrăm datele din tabele. O interogare profesională nu aduce niciodată date inutile în memoria aplicației, ci folosește clauza <code>WHERE</code> pentru a filtra rândurile direct pe serverul bazei de date.</p>\n      <h4>1. Filtrarea pe intervale închise cu BETWEEN</h4>\n      <p>Operatorul <code>BETWEEN min AND max</code> verifică dacă o valoare numerică, calendaristică sau alfabetică se află în intervalul specificat. Foarte important: în SQL, <code>BETWEEN</code> este <strong>inclusiv</strong> la ambele capete (echivalent cu <code>val &gt;= min AND val &lt;= max</code>).</p>\n      <h4>2. Mulțimi de valori cu IN și eliminarea duplicatelor cu DISTINCT</h4>\n      <p>În loc să scriem condiții repetate cu <code>OR</code> (de exemplu, <code>City = 'Iași' OR City = 'Cluj'</code>), folosim operatorul <code>IN ('Iași', 'Cluj')</code>. Dacă dorim ca rezultatul să nu conțină rânduri identice, plasăm <code>DISTINCT</code> imediat după <code>SELECT</code>.</p>\n    ",
    "glossary": [
      {
        "term": "SELECT DISTINCT",
        "def": "Returnează doar valorile unice, eliminând duplicatele din rezultat."
      },
      {
        "term": "WHERE col BETWEEN a AND b",
        "def": "Filtrează valorile aflate între a și b (incluzând capetele a și b)."
      },
      {
        "term": "WHERE col IN (v1, v2)",
        "def": "Verifică dacă valoarea coloanei se regăsește în lista specificată."
      },
      {
        "term": "WHERE col IS NOT NULL",
        "def": "Exclude înregistrările care au valoarea lipsă (NULL)."
      }
    ],
    "example": "-- Exemplu Asemănător (pe tabelul Products):\nSELECT * FROM Products\nWHERE Price BETWEEN 50 AND 200;",
    "prompt": "Scrie o interogare SQL care selectează toate coloanele (*) din tabelul 'Orders' unde coloana 'Quantity' este între 1 și 100 (folosind operatorul BETWEEN).",
    "caseSensitive": false,
    "acceptedAnswers": [
      "SELECT * FROM Orders WHERE Quantity BETWEEN 1 AND 100;",
      "SELECT * FROM Orders WHERE Quantity BETWEEN 1 AND 100"
    ],
    "officialSolution": "SELECT * FROM Orders WHERE Quantity BETWEEN 1 AND 100;",
    "explanation": "Clauza WHERE Quantity BETWEEN 1 AND 100 filtrează toate comenzile cu cantitatea de la 1 până la 100 inclusiv.",
    "hint": "Urmează structura din exemplul asemănător, dar înlocuiește tabelul cu Orders, coloana cu Quantity și limitele cu 1 AND 100.",
    "matchingPairs": [
      {
        "left": "SELECT *",
        "right": "Extrage toate coloanele din tabel"
      },
      {
        "left": "BETWEEN 1 AND 100",
        "right": "Interval închis (>= 1 și <= 100)"
      },
      {
        "left": "IN ('A', 'B')",
        "right": "Înlocuiește condițiile multiple cu OR"
      },
      {
        "left": "DISTINCT",
        "right": "Elimină rândurile duplicate la afișare"
      }
    ],
    "quiz": {
      "question": "Ce valori sunt incluse de clauza WHERE Price BETWEEN 10 AND 20 în SQL?",
      "options": [
        "Toate valorile de la 10 la 20, inclusiv 10 și 20",
        "Doar valorile strict mai mari ca 10 și mai mici ca 20 (11..19)",
        "Doar valoarea 10 și valoarea 20",
        "Returnează eroare dacă nu folosim GROUP BY"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "sql-2",
    "track": "SQL",
    "icon": "🗄️",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 2: Inserarea Sigură a Datelor cu INSERT INTO și VALUES",
    "theory": "\n      <p>Instrucțiunea <code>INSERT INTO</code> face parte din limbajul de manipulare a datelor (DML) și are rolul de a adăuga înregistrări noi într-un tabel. În ingineria bazelor de date, scrierea unui <code>INSERT</code> fără lista explicită de coloane este considerată o practică riscantă: dacă structura tabelului primește ulterior o coloană nouă, interogarea va eșua.</p>\n      <h4>Regula de Aur a Inserării Explicite</h4>\n      <p>Specificăm întotdeauna numele tabelului, urmat între paranteze de coloanele vizate, cuvântul-cheie <code>VALUES</code> și valorile corespunzătoare în aceeași ordine: șirurile de caractere se pun între apostrofuri simple <code>'text'</code>, iar numerele se scriu direct.</p>\n    ",
    "glossary": [
      {
        "term": "INSERT INTO Tabel (c1, c2)",
        "def": "Declară tabelul țintă și ordinea exactă a coloanelor."
      },
      {
        "term": "VALUES ('val1', 10)",
        "def": "Furnizează valorile efective pentru rândul nou."
      },
      {
        "term": "AUTO_INCREMENT / IDENTITY",
        "def": "Coloană ID generată automat care se omite din lista INSERT."
      },
      {
        "term": "'Text între apostrofuri'",
        "def": "Standardul SQL pentru delimitarea literalilor de tip VARCHAR/TEXT."
      }
    ],
    "example": "-- Exemplu Asemănător (pe tabelul Clients):\nINSERT INTO Clients (ClientName, Points) VALUES ('Elena', 150);",
    "prompt": "Scrie o comandă SQL pentru a insera în tabelul 'Employees' pe coloanele (Name, Age) valorile ('Alex', 28).",
    "caseSensitive": false,
    "acceptedAnswers": [
      "INSERT INTO Employees (Name, Age) VALUES ('Alex', 28);",
      "INSERT INTO Employees (Name, Age) VALUES ('Alex', 28)"
    ],
    "officialSolution": "INSERT INTO Employees (Name, Age) VALUES ('Alex', 28);",
    "explanation": "Coloanele (Name, Age) primesc în ordine șirul de caractere 'Alex' și întregul 28 prin clauza VALUES.",
    "hint": "Începe cu INSERT INTO Employees, pune cele două coloane între paranteze, apoi VALUES și valorile între paranteze.",
    "matchingPairs": [
      {
        "left": "INSERT INTO",
        "right": "Adaugă un rând nou în tabel"
      },
      {
        "left": "VALUES (...)",
        "right": "Introduce tuplul de valori pentru coloane"
      },
      {
        "left": "UPDATE ... SET",
        "right": "Modifică rândurile deja existente"
      },
      {
        "left": "DELETE FROM",
        "right": "Șterge rânduri din tabel pe baza WHERE"
      }
    ],
    "quiz": {
      "question": "De ce este recomandat să scriem explicit numele coloanelor în INSERT INTO Tabel (col1, col2) VALUES (...)?",
      "options": [
        "Protejează codul dacă se adaugă coloane noi în tabel și permite omiterea ID-ului auto-generat",
        "Pentru că SQL nu permite niciodată INSERT fără paranteze",
        "Pentru a șterge automat duplicatele din tabel",
        "Pentru a sorta tabelul alfabetic la inserare"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "sql-3",
    "track": "SQL",
    "icon": "🗄️",
    "level": "3. Middle",
    "xp": 35,
    "title": "Capitolul 3: Integritatea Datelor cu ALTER TABLE și ADD CONSTRAINT CHECK",
    "theory": "\n      <p>O bază de date robustă nu se bazează doar pe validările din interfața web, ci blochează datele invalide direct la nivel de schemă folosind <strong>constrângeri (constraints)</strong>. Constrângerea <code>CHECK</code> evaluează o condiție logică pentru fiecare rând inserat sau modificat.</p>\n      <h4>Cum adăugăm o regulă pe un tabel existent?</h4>\n      <p>Folosim instrucțiunea DDL <code>ALTER TABLE</code> combinată cu <code>ADD CONSTRAINT NumeRegulă CHECK (condiție)</code>. Oferirea unui nume explicit constrângerii (de exemplu, <code>CHK_Price</code> sau <code>AgeCheck</code>) este esențială: dacă mai târziu dorim să ștergem sau să modificăm regula, o putem identifica precis după acest nume în mesajele de eroare și în comanda <code>DROP CONSTRAINT</code>.</p>\n    ",
    "glossary": [
      {
        "term": "ALTER TABLE NumeTabel",
        "def": "Modifică structura unui tabel deja existent în baza de date."
      },
      {
        "term": "ADD CONSTRAINT Nume",
        "def": "Înregistrează o regulă nouă cu un identificator unic în catalogul SQL."
      },
      {
        "term": "CHECK (expresie_logică)",
        "def": "Respinge orice INSERT/UPDATE pentru care expresia este FALSE."
      },
      {
        "term": "DROP CONSTRAINT Nume",
        "def": "Elimină o constrângere existentă din tabel."
      }
    ],
    "example": "-- Exemplu Asemănător (pe tabelul Products):\nALTER TABLE Products ADD CONSTRAINT PriceCheck CHECK (Price > 0);",
    "prompt": "Modifică tabelul existent 'Employees' (cu ALTER TABLE) pentru a adăuga o constrângere numită 'AgeCheck' care verifică faptul că vârsta (Age) este strict mai mare decât 18 (Age > 18).",
    "caseSensitive": false,
    "acceptedAnswers": [
      "ALTER TABLE Employees ADD CONSTRAINT AgeCheck CHECK (Age > 18);",
      "ALTER TABLE Employees ADD CONSTRAINT AgeCheck CHECK (Age > 18)",
      "ALTER TABLE Employees ADD CHECK (Age > 18);",
      "ALTER TABLE Employees ADD CHECK (Age > 18)"
    ],
    "officialSolution": "ALTER TABLE Employees ADD CONSTRAINT AgeCheck CHECK (Age > 18);",
    "explanation": "Sintaxa atașează constrângerea numită AgeCheck pe tabelul Employees și impune condiția (Age > 18).",
    "hint": "Privește exemplul pentru Products și adaptează numele tabelului (Employees), numele regulii (AgeCheck) și condiția din paranteza CHECK.",
    "matchingPairs": [
      {
        "left": "PRIMARY KEY",
        "right": "Identifică unic fiecare rând și nu permite NULL"
      },
      {
        "left": "FOREIGN KEY",
        "right": "Asigură integritatea referențială între două tabele"
      },
      {
        "left": "CHECK (Age > 18)",
        "right": "Validează domeniul valorilor printr-o expresie booleană"
      },
      {
        "left": "UNIQUE",
        "right": "Interzice valorile duplicate pe o coloană"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă în SQL dacă o coloană are doar CHECK (Age > 18), fără NOT NULL, și inserăm valoarea NULL?",
      "options": [
        "Inserarea este permisă, deoarece NULL evaluează condiția ca UNKNOWN, nu ca FALSE",
        "Baza de date înlocuiește automat NULL cu 19",
        "Tabelul se șterge automat",
        "Returnează eroare de sintaxă la compilare"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "sql-4",
    "track": "SQL",
    "icon": "🗄️",
    "level": "Integritate Avansată",
    "xp": 40,
    "title": "Capcana Valorilor NULL în Constrângerile CHECK",
    "theory": "O particularitate critică în SQL este că valorile <code>NULL</code> sunt evaluate ca <code>UNKNOWN</code> în interiorul unei clauze <code>CHECK</code>, nu ca <code>FALSE</code>. Astfel, o regulă <code>CHECK (Status IN ('Y', 'N'))</code> va permite inserarea lui <code>NULL</code>! Pentru a bloca valorile nule direct în constrângere, condiția trebuie combinată cu <code>IS NOT NULL</code> sau coloana trebuie eliminată și recreată. De asemenea, o constrângere nu se editează direct, ci se șterge cu <code>ALTER TABLE nume_tabel DROP CONSTRAINT nume_constrangere;</code>.",
    "example": "-- Eliminarea unei constrângeri vechi:\nALTER TABLE Scores DROP CONSTRAINT CHK_Score;\n\n-- Adăugarea unei constrângeri care blochează explicit și NULL:\nALTER TABLE Orders ADD CONSTRAINT CHK_Status\nCHECK (Status IN ('Pending', 'Completed') AND Status IS NOT NULL);",
    "prompt": "Scrie comanda SQL care șterge (DROP CONSTRAINT) constrângerea numită 'CHK_Score' din tabelul 'Scores'.",
    "caseSensitive": false,
    "acceptedAnswers": [
      "ALTER TABLE Scores DROP CONSTRAINT CHK_Score;",
      "ALTER TABLE Scores DROP CONSTRAINT CHK_Score"
    ],
    "officialSolution": "ALTER TABLE Scores DROP CONSTRAINT CHK_Score;",
    "explanation": "Înainte de a modifica intervalul unei constrângeri CHECK, vechea regulă trebuie eliminată cu ALTER TABLE Scores DROP CONSTRAINT CHK_Score;.",
    "hint": "Începe cu ALTER TABLE Scores și continuă cu DROP CONSTRAINT CHK_Score;"
  },
  {
    "id": "sql-5",
    "track": "SQL",
    "icon": "🗄️",
    "level": "Normalizare Text & Regex",
    "xp": 40,
    "title": "Normalizarea Spațiilor în SQL cu REGEXP_REPLACE",
    "theory": "Bazele de date moderne (PostgreSQL, Oracle, SQL Server 2025) oferă funcții native pentru expresii regulate precum <code>REGEXP_LIKE</code> și <code>REGEXP_REPLACE</code>. Pentru a curăța textele care conțin spații multiple consecutive, modelul regex <code>'\\s+'</code> identifică unul sau mai multe caractere de spațiere și le înlocuiește cu un singur spațiu <code>' '</code>.",
    "example": "-- Înlocuiește secvențele de spații multiple cu un singur spațiu:\nSELECT REGEXP_REPLACE(address, '\\s+', ' ', 'g') AS normalized_address\nFROM customers;",
    "prompt": "Scrie o interogare SELECT care selectează coloana 'username' din tabelul 'users' unde 'username' respectă expresia regulată (folosind operatorul REGEXP) '^[A-Za-z0-9_]+$'.",
    "caseSensitive": false,
    "acceptedAnswers": [
      "SELECT username FROM users WHERE username REGEXP '^[A-Za-z0-9_]+$';",
      "SELECT username FROM users WHERE username REGEXP '^[A-Za-z0-9_]+$'"
    ],
    "officialSolution": "SELECT username FROM users WHERE username REGEXP '^[A-Za-z0-9_]+$';",
    "explanation": "Ancorele ^ și $ garantează că întregul șir conține exclusiv caractere alfanumerice și underscore, prevenind valorile malformate.",
    "hint": "Folosește: SELECT username FROM users WHERE username REGEXP '^[A-Za-z0-9_]+$';"
  },
  {
    "id": "java-1",
    "track": "Java",
    "icon": "☕",
    "level": "2. Junior",
    "xp": 30,
    "title": "Capitolul 1: Încapsularea în OOP — Atribute Private, Constructori și Getters",
    "theory": "\n      <p>În limbajul Java, <strong>Încapsularea</strong> este primul pilon al Programării Orientate pe Obiecte (OOP). Ideea centrală este protejarea datelor interne ale unui obiect împotriva modificărilor neautorizate din exteriorul clasei.</p>\n      <h4>De ce declarăm câmpurile <code>private</code>?</h4>\n      <p>Dacă un câmp precum <code>balance</code> sau <code>age</code> ar fi <code>public</code>, orice parte a programului ar putea atribui valori invalide (ex: <code>person.age = -50;</code>). Declarând câmpul <code>private</code>, accesul la citire se face controlat printr-o metodă <strong>Getter</strong> (<code>public Tip getNume()</code>), iar modificarea printr-un <strong>Setter</strong> care poate valida valoarea înainte de atribuire.</p>\n    ",
    "glossary": [
      {
        "term": "private",
        "def": "Modificator de acces care restricționează vizibilitatea strict în interiorul clasei curente."
      },
      {
        "term": "public Tip getAtribut()",
        "def": "Metodă accesor (Getter) care returnează valoarea câmpului privat."
      },
      {
        "term": "public void setAtribut(Tip v)",
        "def": "Metodă mutator (Setter) care actualizează câmpul privat."
      },
      {
        "term": "this.atribut",
        "def": "Referință către instanța curentă, folosită pentru a diferenția câmpul de parametru."
      }
    ],
    "example": "// Exemplu Asemănător (pentru atributul privat 'score'):\nprivate int score;\n\npublic int getScore() {\n  return score;\n}",
    "prompt": "În clasa Person există atributul 'private int age;'. Scrie metoda getter publică completă (numită getAge) care returnează acest atribut.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "public int getAge() { return age; }",
      "public int getAge() { return this.age; }"
    ],
    "officialSolution": "public int getAge() { return age; }",
    "explanation": "Metoda este publică, are tipul de return int, se numește getAge() conform convenției camelCase și returnează câmpul age.",
    "hint": "Urmează modelul getScore() din exemplu, dar adaptează numele metodei și variabila returnată pentru 'age'.",
    "matchingPairs": [
      {
        "left": "private",
        "right": "Vizibil doar în interiorul aceleiași clase"
      },
      {
        "left": "protected",
        "right": "Vizibil în pachet și în subclase (moștenire)"
      },
      {
        "left": "public",
        "right": "Vizibil de oriunde din aplicație"
      },
      {
        "left": "this",
        "right": "Referință către obiectul curent"
      }
    ],
    "quiz": {
      "question": "Care este semnătura corectă pentru un getter al unui atribut 'private boolean active;' în convențiile Java?",
      "options": [
        "public boolean isActive() sau public boolean getActive()",
        "private void getActive(boolean a)",
        "public String active()",
        "static int getActive()"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "java-2",
    "track": "Java",
    "icon": "☕",
    "level": "3. Middle",
    "xp": 35,
    "title": "Capitolul 2: Moștenirea (Inheritance), extends și Suprascrierea (@Override)",
    "theory": "\n      <p>Moștenirea permite crearea unei clase noi (<strong>subclasă / clasă copil</strong>) pe baza unei clase existente (<strong>superclasă / clasă părinte</strong>), reutilizând atributele și comportamentul deja scris. În Java, moștenirea între clase este <strong>simplă</strong>: o clasă poate extinde o singură superclasă directă prin cuvântul-cheie <code>extends</code>.</p>\n      <h4>Specializarea comportamentului</h4>\n      <p>Subclasa poate adăuga metode noi sau poate redefini o metodă din superclasă păstrând exact aceeași semnătură — proces numit <em>Method Overriding</em> și marcat cu adnotarea <code>@Override</code>. De asemenea, apelul <code>super(...)</code> invocă constructorul clasei părinte.</p>\n    ",
    "glossary": [
      {
        "term": "class Sub extends Super",
        "def": "Stabilește relația de moștenire de tip 'is-a' (Sub este un tip de Super)."
      },
      {
        "term": "@Override",
        "def": "Adnotare care verifică la compilare că metoda suprascrie corect superclasa."
      },
      {
        "term": "super()",
        "def": "Apelează constructorul sau o metodă din clasa părinte."
      },
      {
        "term": "final class",
        "def": "Clasă care nu mai poate fi moștenită de nicio altă clasă (ex: String)."
      }
    ],
    "example": "// Exemplu Asemănător:\npublic class ElectricCar extends Vehicle {\n  // preia proprietățile din Vehicle\n}",
    "prompt": "Scrie antetul (linia de declarare) unei clase publice numite 'SavingsAccount' care moștenește clasa 'BankAccount', urmată de acolada deschisă '{'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "public class SavingsAccount extends BankAccount {",
      "class SavingsAccount extends BankAccount {"
    ],
    "officialSolution": "public class SavingsAccount extends BankAccount {",
    "explanation": "Cuvântul-cheie extends leagă subclasa SavingsAccount de superclasa BankAccount.",
    "hint": "Privește cum ElectricCar extinde Vehicle în exemplu și aplică același tipar pentru SavingsAccount și BankAccount.",
    "matchingPairs": [
      {
        "left": "extends",
        "right": "Moștenește o clasă părinte"
      },
      {
        "left": "implements",
        "right": "Implementează una sau mai multe interfețe"
      },
      {
        "left": "@Override",
        "right": "Redefinește o metodă din superclasă"
      },
      {
        "left": "super.method()",
        "right": "Invocă implementarea din clasa părinte"
      }
    ],
    "quiz": {
      "question": "Câte clase poate moșteni direct o clasă în Java folosind cuvântul-cheie 'extends'?",
      "options": [
        "O singură clasă (moștenire simplă la nivel de clase)",
        "Oricât de multe clase simultan",
        "Exact două clase",
        "Nicio clasă, doar interfețe"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "java-3",
    "track": "Java",
    "icon": "☕",
    "level": "Polimorfism & Abstractizare",
    "xp": 40,
    "title": "Clase Abstracte și Calculul Ariei în Ierarhia Shape",
    "theory": "O clasă declarată cu <code>abstract</code> nu poate fi instanțiată direct și poate conține metode abstracte (fără corp), obligând subclasele concrete precum <code>Rectangle</code> sau <code>Circle</code> să furnizeze implementarea exactă pentru calculul ariei și al perimetrului.",
    "example": "abstract class Shape {\n  public abstract double getArea();\n}\n\nclass Rectangle extends Shape {\n  private double width, height;\n  public double getArea() { return width * height; }\n}",
    "prompt": "Scrie declarația unei metode abstracte publice numite 'getArea' care returnează un 'double' (în interiorul clasei abstracte Shape).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "public abstract double getArea();",
      "abstract public double getArea();"
    ],
    "officialSolution": "public abstract double getArea();",
    "explanation": "O metodă abstractă în Java se termină direct cu punct și virgulă (;), fără acolade, deoarece implementarea revine subclaselor.",
    "hint": "Nu pune acolade! Scrie: public abstract double getArea();"
  },
  {
    "id": "js-1",
    "track": "JavaScript",
    "icon": "🟨",
    "level": "2. Junior",
    "xp": 30,
    "title": "Capitolul 1: Metode Funcționale pe Tablouri — .filter(), .map() și .reduce()",
    "theory": "\n      <p>JavaScript-ul modern (ES6+) încurajează <strong>programarea declarativă și imutabilă</strong>. În loc să modificăm un tablou existent cu bucle imperative, folosim metode de ordin superior care primesc o funcție săgeată (<em>arrow function</em>) și returnează un tablou nou.</p>\n      <ul>\n        <li><code>array.filter(x =&gt; condiție)</code>: evaluează predicatul boolean pentru fiecare element și păstrează în noul tablou doar elementele pentru care expresia este <code>true</code>.</li>\n        <li><code>array.map(x =&gt; transformare)</code>: aplică formula fiecărui element și returnează un tablou nou de aceeași lungime.</li>\n        <li><code>array.reduce((acc, x) =&gt; acc + x, 0)</code>: agregă toate elementele într-o singură valoare finală.</li>\n      </ul>\n    ",
    "glossary": [
      {
        "term": ".filter(fn)",
        "def": "Selectează un subset de elemente care trec testul boolean."
      },
      {
        "term": ".map(fn)",
        "def": "Transformă fiecare element 1-la-1 într-un tablou nou."
      },
      {
        "term": ".reduce(fn, init)",
        "def": "Comprimă tabloul într-un singur rezultat acumulat."
      },
      {
        "term": "x => x > 5",
        "def": "Funcție săgeată (Arrow Function) cu return implicit."
      }
    ],
    "example": "// Exemplu Asemănător (filtrarea prețurilor mai mici decât 50):\nconst cheap = prices.filter(p => p < 50);",
    "prompt": "Având tabloul 'nums', atribuie constantei 'const big' rezultatul filtrării cu '.filter()' folosind parametrul 'n' pentru a păstra doar numerele strict mai mari decât 10 (n > 10).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const big = nums.filter(n => n > 10);",
      "const big = nums.filter(n => n > 10)",
      "const big = nums.filter((n) => n > 10);",
      "const big = nums.filter((n) => n > 10)"
    ],
    "officialSolution": "const big = nums.filter(n => n > 10);",
    "explanation": "Metoda filter parcurge tabloul nums și păstrează doar valorile pentru care predicatul n > 10 este adevărat.",
    "hint": "Urmează modelul din exemplu: declară const big =, apelează .filter() pe tabloul nums și scrie funcția săgeată cu parametrul n.",
    "matchingPairs": [
      {
        "left": ".filter()",
        "right": "Returnează doar elementele care îndeplinesc condiția"
      },
      {
        "left": ".map()",
        "right": "Transformă fiecare element păstrând lungimea tabloului"
      },
      {
        "left": ".find()",
        "right": "Returnează primul element care corespunde condiției"
      },
      {
        "left": ".some()",
        "right": "Returnează true dacă cel puțin un element trece testul"
      }
    ],
    "quiz": {
      "question": "Ce returnează expresia [2, 5, 8, 1].filter(x => x >= 5) în JavaScript?",
      "options": [
        "Un tablou nou: [5, 8]",
        "Valoarea booleană true",
        "Suma elementelor: 13",
        "Numărul de elemente: 2"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "js-2",
    "track": "JavaScript",
    "icon": "🟨",
    "level": "Sintaxă Modernă ES6",
    "xp": 35,
    "title": "Destructurarea Obiectelor și a Tablourilor (Destructuring)",
    "theory": "Sintaxa de <strong>destructurare</strong> din ES6 permite extragerea directă a proprietăților unui obiect sau a elementelor unui tablou în variabile distincte. Pentru obiecte se folosesc acolade <code>const { title, author } = book;</code>, iar pentru tablouri se folosesc paranteze drepte <code>const [first, second] = scores;</code>.",
    "example": "const user = { username: 'alex_dev', role: 'architect', active: true };\n// Extragere într-o singură linie:\nconst { username, role } = user;",
    "prompt": "Folosind destructurarea de obiecte ES6, extrage proprietățile 'title' și 'salary' din obiectul 'employee' într-o constantă (const).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const { title, salary } = employee;",
      "const { title, salary } = employee",
      "const { salary, title } = employee;",
      "const { salary, title } = employee"
    ],
    "officialSolution": "const { title, salary } = employee;",
    "explanation": "Acoladele din stânga operatorului '=' indică destructurarea proprietăților cu același nume din obiectul sursă 'employee'.",
    "hint": "Folosește acolade după const: const { title, salary } = employee;"
  },
  {
    "id": "js-3",
    "track": "JavaScript",
    "icon": "🟨",
    "level": "Agregare & Regex",
    "xp": 40,
    "title": "Agregarea cu .reduce() și Normalizarea Regex în JS",
    "theory": "Metoda <code>.reduce((acc, val) => acc + val, 0)</code> comprimă un tablou într-o singură valoare, acumulând rezultatul în <code>acc</code>. De asemenea, în procesarea șirurilor de caractere, lanțul <code>str.replace(/\\s+/g, ' ').trim()</code> reprezintă standardul industrial în JavaScript pentru eliminarea spațiilor redundante.",
    "example": "const cart = [15, 25, 60];\nconst total = cart.reduce((acc, item) => acc + item, 0); // 100\n\nconst clean = rawText.replace(/\\s+/g, ' ').trim();",
    "prompt": "Calculează suma elementelor din tabloul 'scores' folosind .reduce() cu parametrii (acc, s) și valoarea inițială 0, atribuind rezultatul la 'const sum = ...'.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "const sum = scores.reduce((acc, s) => acc + s, 0);",
      "const sum = scores.reduce((acc, s) => acc + s, 0)"
    ],
    "officialSolution": "const sum = scores.reduce((acc, s) => acc + s, 0);",
    "explanation": "Funcția săgeată (acc, s) => acc + s adună fiecare element la acumulatorul inițializat cu 0.",
    "hint": "Scrie: const sum = scores.reduce((acc, s) => acc + s, 0);"
  },
  {
    "id": "eng-1",
    "track": "Engleză C1",
    "icon": "🇬🇧",
    "level": "C1 Inversiune",
    "xp": 35,
    "title": "Inversiunea după Adverbe Negative (Rarely, Little, Never)",
    "theory": "La nivelul C1, când o propoziție începe cu un adverb negativ sau restrictiv (<code>Never</code>, <code>Rarely</code>, <code>Seldom</code>, <code>Little</code>, <code>Under no circumstances</code>, <code>On no account</code>), ordinea cuvintelor devine cea a unei întrebări: <strong>Auxiliar + Subiect + Verb Principal</strong>. Dacă propoziția nu are auxiliar (Present Simple sau Past Simple), se adaugă <code>do / does / did</code> și verbul rămâne la infinitiv! Eroare clasică: <em>Little knew she the truth</em> ❌ → Corect: <em>Little did she know the truth</em> ✓.",
    "example": "• Normal (B2): We rarely get snow in this part of the country.\n• Inversiune (C1): Rarely do we get snow in this part of the country.\n\n• Normal (B2): She little knew that her life was about to change.\n• Inversiune (C1): Little did she know that her life was about to change.",
    "prompt": "Rescrie propoziția la nivel C1 începând cu 'Never in my life':\nPropoziție B2: 'I have never in my life seen such a mess.'",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Never in my life have I seen such a mess.",
      "Never in my life have I seen such a mess"
    ],
    "officialSolution": "Never in my life have I seen such a mess.",
    "explanation": "Auxiliarul 'have' trece înaintea subiectului 'I': 'Never in my life have I seen such a mess.'",
    "hint": "Inversează 'I have' în 'have I' imediat după 'Never in my life'."
  },
  {
    "id": "eng-2",
    "track": "Engleză C1",
    "icon": "🇬🇧",
    "level": "C1 Corelative & Timp",
    "xp": 40,
    "title": "No sooner... than, Hardly... when și Not until",
    "theory": "Expresia <code>No sooner</code> este urmată obligatoriu de conjuncția <code>than</code> (niciodată <em>when</em>!), în timp ce <code>Hardly / Scarcely</code> sunt urmate de <code>when</code>, ambele folosind Past Perfect inversat (<code>No sooner had we left than...</code>). În schimb, după <code>Not until</code> sau <code>Only when</code>, inversiunea nu se pune în prima parte, ci în propoziția principală: <em>Not until I moved abroad <strong>did I appreciate</strong> home</em>.",
    "example": "• Eroare frecventă: No sooner had the meeting begun when the alarm went off. ❌\n• Corect C1: No sooner had the meeting begun than the alarm went off. ✓\n• Corect C1: Only after the meeting did I realise how serious the problem was. ✓",
    "prompt": "Transformă propoziția folosind 'No sooner' la început (atenție la conjuncția corelativă corectă!):\n'As soon as the film started, the power went off.'",
    "caseSensitive": false,
    "acceptedAnswers": [
      "No sooner had the film started than the power went off.",
      "No sooner had the film started than the power went off"
    ],
    "officialSolution": "No sooner had the film started than the power went off.",
    "explanation": "Structura C1 cere inversiunea Past Perfect (had the film started) și conectorul 'than' (nu 'when').",
    "hint": "No sooner had the film started than the power went off."
  },
  {
    "id": "eng-3",
    "track": "Engleză C1",
    "icon": "🇬🇧",
    "level": "C1 Condiționale",
    "xp": 40,
    "title": "Condiționale Inversate (Had, Were, Should) și Mixte",
    "theory": "În registrul formal C1, conjuncția <code>if</code> poate fi eliminată prin plasarea lui <code>Should</code> (Tip 1), <code>Were</code> (Tip 2) sau <code>Had</code> (Tip 3) pe prima poziție. În condiționalele mixte, o acțiune trecută (Past Perfect) are un rezultat în prezent (<code>would + infinitiv prezent</code>).",
    "example": "• Tip 1: Should you need any assistance, please contact our office.\n• Tip 2: Were I in your position, I would accept the offer.\n• Tip 3: Had I known the truth, I would have told you.\n• Mixt: Had I studied harder last summer, I wouldn't be retaking the exam now.",
    "prompt": "Rescrie condiționalul de mai jos fără 'If', folosind inversiunea C1 la începutul propoziției:\n'If we had known about the strike, we would have taken a taxi.'",
    "caseSensitive": false,
    "acceptedAnswers": [
      "Had we known about the strike, we would have taken a taxi.",
      "Had we known about the strike, we would have taken a taxi"
    ],
    "officialSolution": "Had we known about the strike, we would have taken a taxi.",
    "explanation": "Prin eliminarea lui 'If' și mutarea lui 'Had' pe prima poziție, 'If we had known' devine 'Had we known'.",
    "hint": "Începe propoziția cu: Had we known about the strike, ..."
  },
  {
    "id": "eng-4",
    "track": "Engleză C1",
    "icon": "🇬🇧",
    "level": "C1 Emfază & Stil",
    "xp": 45,
    "title": "Fraze Scindate (Cleft Sentences: It was... that / What... was)",
    "theory": "Pentru a pune accentul (emfaza) pe un anumit element în discursul avansat, engleza C1 folosește două tipuri de <em>Cleft Sentences</em>:\n1. <strong>It-Cleft</strong>: <code>It + is/was + [elementul accentuat] + that/who + restul propoziției</code>.\n2. <strong>Wh-Cleft (Pseudo-cleft)</strong>: <code>What + clauză subiect + is/was + [elementul accentuat]</code>.",
    "example": "• Neutru: The waiter's attitude made things worse.\n• It-Cleft: It was the waiter's attitude that made things worse.\n\n• Neutru: I was most unhappy with the service.\n• Wh-Cleft: What I was most unhappy with was the service.",
    "prompt": "Rescrie propoziția într-o structură emfatică de tip Wh-Cleft care să înceapă cu 'What annoyed me most':\n'Her terrible accent annoyed me most.'",
    "caseSensitive": false,
    "acceptedAnswers": [
      "What annoyed me most was her terrible accent.",
      "What annoyed me most was her terrible accent"
    ],
    "officialSolution": "What annoyed me most was her terrible accent.",
    "explanation": "Pseudo-scindata izolează cauza în poziție finală de focus după verbul copulativ 'was': 'What annoyed me most was her terrible accent.'",
    "hint": "Continuă expresia 'What annoyed me most' cu verbul 'was' și elementul accentuat."
  }
];
