# -*- coding: utf-8 -*-
level3_lessons = [
    {
        "id": "cpp-poo-1",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "3. Middle",
        "xp": 30,
        "title": "Enumerări Scoped (enum class) și Siguranța Statică a Tipurilor",
        "theory": "În C++ tradițional, enumerările simple ('enum Stare { ACTIV, INACTIV };') prezentau două defecte majore de proiectare: 1. Poluarea domeniului (enum-urile nu aveau propriul scope, astfel că identificatorii ACTIV și INACTIV intrau direct în spațiul global), și 2. Conversia implicită nesigură la numere întregi (păcălirea compilatorului permițând comparații absurde între culori și stări de rețea: 'ROSU == ACTIV').\n\nC++11 a rezolvat definitiv aceste vulnerabilități prin 'Scoped Enumerations' ('enum class Stare { ACTIV, INACTIV };'). Pentru a accesa o valoare, este obligatorie calificarea explicită cu numele enumerării ('Stare::ACTIV').\n\nÎn plus, un 'enum class' interzice orice conversie implicită la 'int'. Dacă este absolut necesar să obții valoarea numerică subiacentă, conversia trebuie realizată explicit folosind 'static_cast<int>(Stare::ACTIV)'.",
        "glossary": [
            {"term": "enum class", "def": "Enumerare cu domeniu închis introdusă în C++11 cu verificare strictă de tip."},
            {"term": "Unscoped enum", "def": "Enumerare clasică C ce exportă identificatorii direct în spațiul părinte."},
            {"term": "Strong Typing", "def": "Sistem de tipuri ce interzice conversiile implicite între categorii distincte."},
            {"term": "Underlying Type", "def": "Tipul întreg nativ utilizat în spate pentru stocarea valorilor enum (implicit int)."}
        ],
        "example": "enum class StareConexiune : std::uint8_t {\n    Deconectat,\n    Conectat,\n    InAsteptare\n};\n\nStareConexiune stare = StareConexiune::Conectat;\n// int x = stare; // EROARE DE COMPILARE: Fara conversie implicita!\nint cod = static_cast<int>(stare); // Valid prin conversie explicita",
        "prompt": "Declară un enum class numit Culoare cu trei valori: Rosu, Verde, Albastru.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "enum class Culoare { Rosu, Verde, Albastru };",
            "enum class Culoare {Rosu, Verde, Albastru};"
        ],
        "regexPattern": "^enum\\s+class\\s+Culoare\\s*\\{\\s*Rosu\\s*,\\s*Verde\\s*,\\s*Albastru\\s*\\}\\s*;$",
        "officialSolution": "enum class Culoare { Rosu, Verde, Albastru };",
        "explanation": "Sintaxa enum class definește o enumerare puternic tipizată accesibilă prin Culoare::Rosu.",
        "hint": "enum class Culoare { Rosu, Verde, Albastru };",
        "matchingPairs": [
            {"left": "enum class", "right": "Scoped enum: nume izolate și fără conversie automată la int"},
            {"left": "enum clasic", "right": "Poluează spațiul global și decade implicit la numere întregi"},
            {"left": "Tipul subiacent", "right": "Poate fi specificat explicit: enum class E : uint8_t"},
            {"left": "static_cast<int>", "right": "Conversie explicită a unui enum class la întreg"}
        ],
        "quiz": {
            "question": "De ce este preferabil 'enum class' în locul clasicului 'enum' în C++ modern?",
            "options": [
                "Deoarece ocupă mai puțină memorie pe disc",
                "Deoarece previne poluarea spațiului de nume și blochează conversiile implicite periculoase la int",
                "Deoarece permite stocarea de șiruri de caractere",
                "Deoarece rulează în paralel pe mai multe nuclee"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-poo-2",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "3. Middle",
        "xp": 30,
        "title": "Structuri vs. Clase: Diferența Fundamentală de Vizibilitate",
        "theory": "O întrebare clasică în arhitectura C++ este diferența dintre cuvintele cheie 'struct' și 'class'. Din punct de vedere tehnic, în C++ clasele și structurile au exact aceleași capabilități: ambele pot avea constructori, destructori, metode membre, moștenire și polimorfism virtual.\n\nSingura distincție impusă de standard constă în nivelul de acces implicit (default access specifier): 1. Într-o 'struct', toți membrii și moștenirea sunt 'public' în mod implicit. 2. Într-o 'class', toți membrii și moștenirea sunt 'private' în mod implicit.\n\nConvenția idiomatică adoptată în industria software (C++ Core Guidelines) este: se folosește 'struct' pentru agregate pasive de date (Plain Old Data / DTOs fără invarianți de stare), și se folosește 'class' pentru entități care încapsulează logica internă și protejează invarianții de date prin metode publice.",
        "glossary": [
            {"term": "Default Access", "def": "Vizibilitatea aplicată automat membrilor: public pentru struct, private pentru class."},
            {"term": "POD / Aggregate", "def": "Structură simplă fără logică complexă, destinată strict transportului de date."},
            {"term": "Invariant de clasă", "def": "O condiție care trebuie să rămână întotdeauna adevărată pentru starea internă validă."},
            {"term": "Encapsulation", "def": "Ascunderea detaliilor de implementare și a datelor brute în spatele unei interfețe."}
        ],
        "example": "struct Configurație { // Implicit PUBLIC\n    int port{8080};\n    bool ssl{true};\n};\n\nclass Conexiune { // Implicit PRIVATE\n    int socketFd{-1}; // Nu poate fi accesat din exterior!\npublic:\n    void deschide();\n};",
        "prompt": "Care este specificatorul de acces implicit (public, private sau protected) pentru membrii declarați într-un bloc class C++?",
        "caseSensitive": True,
        "acceptedAnswers": ["private"],
        "regexPattern": "^private;?$",
        "officialSolution": "private",
        "explanation": "Într-o clasă C++, toți membrii declarați înainte de orice etichetă explicită sunt privați (private).",
        "hint": "private",
        "matchingPairs": [
            {"left": "struct", "right": "Acces implicit public pentru membri și moștenire"},
            {"left": "class", "right": "Acces implicit private pentru membri și moștenire"},
            {"left": "public:", "right": "Secțiune accesibilă oricărui cod exterior"},
            {"left": "private:", "right": "Secțiune accesibilă exclusiv metodelor clasei"}
        ],
        "quiz": {
            "question": "Care este singura diferență tehnică dintre o structură și o clasă în limbajul C++?",
            "options": [
                "Structurile nu pot avea metode sau constructori",
                "Clasele se alocă pe Heap, structurile pe stivă",
                "Membrii unei structuri sunt implicit publici, pe când membrii unei clase sunt implicit privați",
                "Structurile nu pot fi transmise ca parametri"
            ],
            "correctIndex": 2
        }
    },
    {
        "id": "cpp-poo-3",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "3. Middle",
        "xp": 30,
        "title": "Încapsularea și Protejarea Invarianților de Clasă",
        "theory": "Încapsularea este unul dintre cei 4 piloni fundamentali ai Programării Orientate pe Obiecte. Ea presupune combinarea datelor și a comportamentului asociat într-o singură entitate, ascunzând datele interne (private) și permițând accesul doar prin intermediul unei interfețe controlate (metode publice: getters și setters).\n\nScopul primar al încapsulării este garantarea 'Invarianților de Clasă'. Un invariant este o regulă ce definește starea validă a unui obiect pe toată durata existenței sale. De exemplu, un obiect 'ContBancar' nu trebuie să aibă niciodată un sold negativ dacă descoperirea de cont este interzisă.\n\nDacă membrii ar fi publici, orice linie externă de cod ar putea corupe starea prin atribuire directă ('cont.sold = -50000;'). Prin încapsulare, metoda setter verifică valoarea înainte de modificare și aruncă o excepție sau refuză operațiunea invalidă.",
        "glossary": [
            {"term": "Încapsulare", "def": "Izolarea stării interne a obiectului pentru a preveni coruperea directă."},
            {"term": "Invariant", "def": "Condiție ce definește validitatea permanentă a stării unui obiect."},
            {"term": "Getter", "def": "Metodă const publică ce oferă acces în mod citire la o variabilă privată."},
            {"term": "Setter", "def": "Metodă publică ce validează și modifică o variabilă privată."}
        ],
        "example": "class ContBancar {\nprivate:\n    double m_sold{0.0}; // Membru privat izolat\npublic:\n    void depune(double suma) {\n        if (suma > 0) m_sold += suma; // Invariant protejat!\n    }\n    double getSold() const { return m_sold; } // Getter const sigur\n};",
        "prompt": "Scrie declarația unei metode getter publice numită getId care nu primește parametri, returnează un întreg int și este marcată ca fiind constantă (const).",
        "caseSensitive": True,
        "acceptedAnswers": [
            "int getId() const;",
            "int getId() const",
            "int getId() const { return m_id; }"
        ],
        "regexPattern": "^int\\s+getId\\s*\\(\\s*\\)\\s*const(\\s*;|\\s*\\{[^}]*\\})?$",
        "officialSolution": "int getId() const;",
        "explanation": "Metodele care doar citesc date din obiect trebuie marcate obligatoriu cu 'const' la final.",
        "hint": "int getId() const;",
        "matchingPairs": [
            {"left": "private", "right": "Protejează variabilele interne de acces direct nevalidat"},
            {"left": "Getter const", "right": "Returnează valoarea fără a permite alterarea obiectului"},
            {"left": "Setter", "right": "Validează datele primite înainte de a modifica starea"},
            {"left": "m_prefix", "right": "Convenție comună pentru variabile membre private"}
        ],
        "quiz": {
            "question": "Ce reprezintă un 'invariant de clasă' în ingineria software C++?",
            "options": [
                "O variabilă care nu își poate schimba tipul de date la rulare",
                "O regulă sau condiție care garantează că starea internă a obiectului este mereu corectă și validă",
                "O clasă care nu poate fi moștenită",
                "O adresă fixă din memoria cache a procesorului"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-poo-4",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "3. Middle",
        "xp": 30,
        "title": "Constructori și Lista de Inițializare a Membrilor (Member Initializer List)",
        "theory": "Constructorul este o metodă specială apelată automat la crearea unei instanțe a clasei, responsabilă cu aducerea obiectului într-o stare validă inițială. Constructorul are același nume cu clasa și nu are niciun tip returnat (nici măcar void).\n\nCea mai eficientă metodă de a inițializa membrii este 'Lista de Inițializare a Membrilor' (Member Initializer List), plasată între două puncte ':' și acolada deschisă a constructorului. Inițializarea din listă construiește membrii direct cu valorile dorite.\n\nDacă în schimb atribui valorile în interiorul corpului constructorului cu '=', membrii sunt mai întâi inițializați cu valori implicite, iar apoi suprascriși prin atribuire – generând o dublă procesare costisitoare pentru obiecte complexe. Mai mult, membrii de tip 'const' și referințele ('&') POT FI inițializați EXCLUSIV prin lista de inițializare.",
        "glossary": [
            {"term": "Constructor", "def": "Metodă specială invocată automat pentru configurarea inițială a unui obiect."},
            {"term": "Initializer List", "def": "Sintaxa ': membru{val}' ce construiește direct datele înainte de corpul constructorului."},
            {"term": "Default Constructor", "def": "Constructorul ce poate fi apelat fără niciun argument furnizat."},
            {"term": "Direct Init", "def": "Crearea directă a obiectelor membre fără a trece prin asignare secundară."}
        ],
        "example": "class Server {\nprivate:\n    const int m_port; // Membru const: nu poate fi atribuit cu '=' in corp!\n    std::string m_nume;\npublic:\n    // Initializare canonică prin lista de initializare a membrilor:\n    Server(int port, std::string_view nume) \n        : m_port{port}, m_nume{nume} {\n        // Corpul ramane adesea gol!\n    }\n};",
        "prompt": "Completează antetul constructorului clasei Punct cu parametrii double x, double y ce inițializează membrii m_x{x} și m_y{y} prin lista de inițializare (cu corpul gol {}).",
        "caseSensitive": True,
        "acceptedAnswers": [
            "Punct(double x, double y) : m_x{x}, m_y{y} {}",
            "Punct(double x, double y) : m_x(x), m_y(y) {}"
        ],
        "regexPattern": "^Punct\\s*\\(\\s*double\\s+x\\s*,\\s*double\\s+y\\s*\\)\\s*:\\s*m_x[{(]x[})],\\s*m_y[{(]y[})]\\s*\\{\\s*\\}$",
        "officialSolution": "Punct(double x, double y) : m_x{x}, m_y{y} {}",
        "explanation": "Lista de inițializare a membrilor se introduce după ':' înainte de corpul constructorului.",
        "hint": "Punct(double x, double y) : m_x{x}, m_y{y} {}",
        "matchingPairs": [
            {"left": ": m_x{x}", "right": "Inițializare directă în lista membrilor fără dublă alocare"},
            {"left": "const membru", "right": "Poate fi inițializat exclusiv prin lista de inițializare"},
            {"left": "= default", "right": "Solicită compilatorului să genereze constructorul implicit"},
            {"left": "= delete", "right": "Interzice explicit apelul unui anumit constructor"}
        ],
        "quiz": {
            "question": "De ce este obligatorie lista de inițializare a membrilor pentru variabilele membre declarate 'const' sau referințe '&'?",
            "options": [
                "Deoarece compilatorul nu poate citi corpul metodelor",
                "Deoarece constantele și referințele nu pot fi reatribuite cu '=' după creare",
                "Pentru a preveni erorile de rețea",
                "Este o simplă convenție vizuală opțională"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-poo-5",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "3. Middle",
        "xp": 30,
        "title": "Constructori Delegatori (Delegating Constructors) în C++11",
        "theory": "Înainte de C++11, dacă o clasă avea mai mulți constructori supraîncărcați cu parametri diferiți, programatorii erau forțați fie să duplice codul de inițializare în fiecare constructor, fie să scrie o metodă privată auxiliară 'init()' pentru a partaja logica comună.\n\nC++11 a eliminat duplicarea de cod prin 'Constructori Delegatori' (Delegating Constructors). Un constructor delegator poate apela un alt constructor din aceeași clasă direct în lista sa de inițializare.\n\nRegula fundamentală a delegării este că apelul constructorului delegat trebuie să fie SINGURUL element din lista de inițializare. După ce constructorul țintă finalizează configurarea, corpul constructorului delegator își poate executa propriile instrucțiuni specifice.",
        "glossary": [
            {"term": "Delegating Constructor", "def": "Constructor ce transferă inițializarea unui alt constructor din aceeași clasă."},
            {"term": "DRY Principle", "def": "Don't Repeat Yourself: principiu arhitectural ce elimină duplicarea codului."},
            {"term": "Default Member Init", "def": "Inițializarea valorilor implicite direct la declararea variabilelor membre."},
            {"term": "Recursive Delegation", "def": "Eroare de compilare când constructorii se deleagă circular într-o buclă infinită."}
        ],
        "example": "class ConexiuneBD {\nprivate:\n    std::string m_gazda;\n    int m_port;\npublic:\n    // Constructorul principal complet:\n    ConexiuneBD(std::string_view gazda, int port) \n        : m_gazda{gazda}, m_port{port} {}\n\n    // Constructor delegator (foloseste portul implicit 5432):\n    ConexiuneBD(std::string_view gazda) \n        : ConexiuneBD{gazda, 5432} {} // DELEGARE!\n};",
        "prompt": "Completează constructorul fără parametri al clasei Socket care deleagă către constructorul Socket(80) cu un corp gol {}.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "Socket() : Socket{80} {}",
            "Socket() : Socket(80) {}"
        ],
        "regexPattern": "^Socket\\s*\\(\\s*\\)\\s*:\\s*Socket[{(]80[})]\\s*\\{\\s*\\}$",
        "officialSolution": "Socket() : Socket{80} {}",
        "explanation": "Delegarea se realizează apelând Socket{80} direct în lista de inițializare a constructorului fără parametri.",
        "hint": "Socket() : Socket{80} {}",
        "matchingPairs": [
            {"left": ": Clasa{args}", "right": "Sintaxa de delegare către alt constructor din clasă"},
            {"left": "DRY", "right": "Elimină logica redundantă de inițializare"},
            {"left": "In-class init", "right": "Valori implicite atribuite la declarația membrilor (int x{0};)"},
            {"left": "= delete", "right": "Blochează apelul constructorului implicit nedorit"}
        ],
        "quiz": {
            "question": "Poate un constructor delegator să inițializeze și alți membri independenți în aceeași listă de inițializare?",
            "options": [
                "Da, oricâți membri dorește",
                "Nu, dacă un constructor deleagă, apelul celuilalt constructor trebuie să fie singurul din listă",
                "Doar dacă membrii sunt de tip int",
                "Doar pe arhitecturi x86"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-poo-6",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "3. Middle",
        "xp": 30,
        "title": "Constructorul de Copiere (Copy Constructor) și Shallow vs Deep Copy",
        "theory": "Când un obiect este transmis prin valoare unei funcții sau este inițializat dintr-un alt obiect existent ('T a = b;'), se apelează 'Constructorul de Copiere' (Copy Constructor). Semnătura sa standard este 'T(const T& other)'. Dacă programatorul nu definește unul, compilatorul generează automat un constructor de copiere implicit.\n\nConstructorul implicit efectuează o 'Copiere Superficială' (Shallow Copy): copiază octet cu octet fiecare variabilă membră. Dacă obiectul gestionează memorie pe Heap printr-un pointer brut ('int* data'), copierea superficială va duplica doar valoarea adresei de memorie, ambele obiecte indicând spre același bloc fizic din RAM.\n\nAcest scenariu declanșează un dezastru de memorie la distrugerea obiectelor: 'Double Free' (ambele obiecte vor încerca să dea delete pe aceeași adresă). Pentru a rezolva problema, este obligatorie o 'Copiere Profundă' (Deep Copy), alocând un nou bloc separat de memorie și duplicând conținutul.",
        "glossary": [
            {"term": "Copy Constructor", "def": "Constructor special cu semnătura T(const T&) ce clonează un obiect existent."},
            {"term": "Shallow Copy", "def": "Duplicarea valorilor membrelor; dacă există pointeri, ambele obiecte împart aceeași memorie."},
            {"term": "Deep Copy", "def": "Alocarea unui nou spațiu de memorie independent și copierea datelor reale."},
            {"term": "Double Free", "def": "Eroare critică cauzată de apelul repetat al lui delete pe aceeași adresă de memorie."}
        ],
        "example": "class VectorIntregi {\nprivate:\n    int* m_date;\n    std::size_t m_size;\npublic:\n    // Constructor de copiere profund (Deep Copy):\n    VectorIntregi(const VectorIntregi& sursa) \n        : m_size{sursa.m_size}, m_date{new int[sursa.m_size]} {\n        for (std::size_t i{0}; i < m_size; ++i) {\n            m_date[i] = sursa.m_date[i]; // Copiere efectiva a elementelor\n        }\n    }\n    ~VectorIntregi() { delete[] m_date; }\n};",
        "prompt": "Scrie semnătura corectă a constructorului de copiere pentru o clasă numită Buffer (care primește o referință constantă către alt Buffer).",
        "caseSensitive": True,
        "acceptedAnswers": [
            "Buffer(const Buffer& other)",
            "Buffer(const Buffer& other);",
            "Buffer(Buffer const& other)",
            "Buffer(Buffer const& other);"
        ],
        "regexPattern": "^Buffer\\s*\\(\\s*(const\\s+Buffer\\s*&|Buffer\\s+const\\s*&)\\s*[a-zA-Z0-9_]+\\s*\\)\\s*;?$",
        "officialSolution": "Buffer(const Buffer& other)",
        "explanation": "Constructorul de copiere primește obligatoriu o referință constantă către tipul clasei: Buffer(const Buffer& other).",
        "hint": "Buffer(const Buffer& other)",
        "matchingPairs": [
            {"left": "T(const T&)", "right": "Semnătura standard a constructorului de copiere"},
            {"left": "Shallow Copy", "right": "Copiază adresele brute, riscând corupere prin Double Free"},
            {"left": "Deep Copy", "right": "Alocă un bloc complet nou pe Heap și duplică datele"},
            {"left": "Double Free", "right": "Eliberarea de două ori a aceluiași pointer de pe Heap"}
        ],
        "quiz": {
            "question": "Ce pericol grav apare dacă o clasă ce deține pointeri alocați dinamic folosește constructorul de copiere implicit (shallow copy)?",
            "options": [
                "Compilatorul va refuza să producă cod binar",
                "La distrugerea celor două obiecte, destructorul va elibera aceeași adresă de două ori (Double Free crash)",
                "Variabilele se transformă automat în șiruri de caractere",
                "Dimensiunea tabloului devine negativă"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-poo-7",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "3. Middle",
        "xp": 30,
        "title": "Operatorul de Atribuire prin Copiere și Idiomul Copy-and-Swap",
        "theory": "Spre deosebire de constructorul de copiere (care creează un obiect nou), 'Operatorul de Atribuire prin Copiere' ('operator=') este invocat atunci când un obiect deja existent primește starea unui alt obiect ('obiectA = obiectB;').\n\nImplementarea naivă a lui operator= prezintă două pericole masive: 1. Auto-atribuirea ('a = a;') poate șterge memoria proprie înainte de a o copia, și 2. Lipsa siguranței la excepții (dacă alocarea noului buffer eșuează cu bad_alloc, starea inițială este deja distrusă).\n\nCea mai robustă soluție din industria C++ modernă este 'Idiomul Copy-and-Swap'. Operatorul primește argumentul prin valoare directă (ceea ce declanșează automat constructorul de copiere), apoi face 'swap' între membrii interni și copia locală. La ieșirea din funcție, vechile resurse sunt distruse automat și sigur de destructorul copiei locale.",
        "glossary": [
            {"term": "operator=", "def": "Operator de atribuire supraîncărcat cu semnătura T& operator=(const T&)."},
            {"term": "Copy-and-Swap", "def": "Idiom modern ce garantează Strong Exception Safety la atribuire."},
            {"term": "Auto-atribuire", "def": "Cazul 'a = a;' ce poate corupe memoria dacă nu este verificat cu this == &other."},
            {"term": "Strong Exception Safety", "def": "Dacă apare o excepție, obiectul își păstrează starea intactă anterioară."}
        ],
        "example": "class StringInteligent {\n    char* m_data;\n    std::size_t m_size;\npublic:\n    // Copy-and-swap elegant (argument primit prin valoare!):\n    StringInteligent& operator=(StringInteligent temp) {\n        std::swap(m_data, temp.m_data);\n        std::swap(m_size, temp.m_size);\n        return *this; // Returneaza referinta catre sine\n    } // Memoria veche din 'm_data' este stearsa de destructorul lui 'temp' aici!\n};",
        "prompt": "Scrie semnătura operatorului de atribuire prin copiere pentru clasa Document care returnează o referință către Document și primește const Document& doc.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "Document& operator=(const Document& doc)",
            "Document& operator=(const Document& doc);",
            "Document& operator=(Document const& doc)"
        ],
        "regexPattern": "^Document\\s*&\\s*operator=\\s*\\(\\s*(const\\s+Document\\s*&|Document\\s+const\\s*&)\\s*[a-zA-Z0-9_]+\\s*\\)\\s*;?$",
        "officialSolution": "Document& operator=(const Document& doc)",
        "explanation": "Operatorul de atribuire returnează referință la obiectul curent (T&) pentru a permite înlănțuirea a = b = c;.",
        "hint": "Document& operator=(const Document& doc)",
        "matchingPairs": [
            {"left": "T& operator=(const T&)", "right": "Semnătura standard de atribuire prin copiere"},
            {"left": "return *this;", "right": "Permite înlănțuirea atribuirilor (a = b = c)"},
            {"left": "std::swap", "right": "Schimbă adresele interne în timpul Copy-and-Swap"},
            {"left": "Auto-atribuire", "right": "Verificare obligatorie dacă se folosește abordarea clasică (if (this == &other))"}
        ],
        "quiz": {
            "question": "De ce operatorul de atribuire 'operator=' returnează o referință către obiectul curent (T&)?",
            "options": [
                "Este o cerință a procesorului pentru memorie cache",
                "Pentru a permite înlănțuirea firească a atribuirilor (ex: a = b = c;)",
                "Pentru a forța crearea unui nou thread",
                "Pentru a converti obiectul în boolean"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-poo-8",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "3. Middle",
        "xp": 30,
        "title": "Pointerul this și Corectitudinea Const (Const Correctness)",
        "theory": "În interiorul oricărei metode membre dintr-o clasă, cuvântul cheie 'this' reprezintă un pointer implicit către instanța curentă a obiectului pe care s-a efectuat apelul. Tipul său este 'T*' în metode obișnuite și 'const T*' în metode constante.\n\n'Corectitudinea Const' (Const Correctness) este o disciplină vitală în C++: orice metodă care doar interoghează starea obiectului fără a-i modifica variabilele membre TREBUIE marcată cu specificatorul 'const' la finalul semnăturii ('int getValoare() const;').\n\nDacă o metodă nu este marcată cu 'const', ea NU va putea fi apelată pe instanțe constante sau pe referințe primite prin 'const T&'. Compilatorul protejează astfel starea imutabilă a obiectelor la momentul compilării.",
        "glossary": [
            {"term": "this", "def": "Pointer ascuns transmis ca prim argument ce indică spre adresa instanței curente."},
            {"term": "const method", "def": "Metodă ce promite să nu altereze starea niciunei variabile membre a obiectului."},
            {"term": "Const Correctness", "def": "Practica de a marca drept const toate referințele și metodele imutabile."},
            {"term": "mutable", "def": "Specificator rar ce permite modificarea unei variabile chiar și în metode const (ex: mutexuri)."}
        ],
        "example": "class Raport {\nprivate:\n    int m_linii{100};\npublic:\n    // Metoda const: poate fi apelata pe obiecte const!\n    int getLinii() const {\n        // m_linii = 200; // EROARE: Modificare interzisa in metoda const!\n        return this->m_linii;\n    }\n};",
        "prompt": "Scrie instrucțiunea dintr-o metodă care returnează referința către instanța curentă a obiectului folosind pointerul this dereferențiat.",
        "caseSensitive": True,
        "acceptedAnswers": ["return *this;", "return *this"],
        "regexPattern": "^return\\s+\\*this\\s*;?$",
        "officialSolution": "return *this;",
        "explanation": "Dereferențierea pointerului this (*this) returnează referința la instanța curentă a obiectului.",
        "hint": "return *this;",
        "matchingPairs": [
            {"left": "*this", "right": "Obiectul curent dereferențiat"},
            {"left": "const la final", "right": "Garantează că metoda nu alterează starea internă"},
            {"left": "Method chaining", "right": "Înlănțuirea apelurilor: obj.setX(1).setY(2)"},
            {"left": "mutable", "right": "Permite modificarea unei variabile specifice din metode const"}
        ],
        "quiz": {
            "question": "Ce se întâmplă dacă încerci să apelezi o metodă care NU este marcată 'const' pe un obiect primit ca 'const Dispozitiv& disp'?",
            "options": [
                "Metoda rulează, dar variabila devine statică",
                "Compilatorul emite o eroare refuzând apelul pe obiectul constant",
                "Obiectul își pierde proprietatea de const la rulare",
                "Se apelează automat destructorul obiectului"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-poo-9",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "3. Middle",
        "xp": 30,
        "title": "Membri Statici și Funcții Prietene (friend)",
        "theory": "Variabilele membre marcate cu 'static' aparțin clasei ca întreg, nu instanțelor individuale. Există o singură copie comună a variabilei statice partajată de toate instanțele create, fiind stocată în segmentul de date globale. Similar, metodele statice pot fi apelate fără nicio instanță ('Clasa::metodaStatic()'), dar nu au acces la pointerul 'this' sau la membrii nestatici.\n\nÎn mod normal, secțiunea 'private' este inaccesibilă din exterior. Totuși, prin declararea unei funcții sau clase externe ca 'friend' ('friend void log(const Clasa& c);'), clasa îi acordă acesteia acces privilegiat direct la toți membrii săi privați și protejați.\n\nMecanismul 'friend' este esențial în special pentru supraîncărcarea operatorilor de flux 'operator<<' și 'operator>>', permițând scrierea obiectelor direct în 'std::cout'.",
        "glossary": [
            {"term": "static member", "def": "Variabilă partajată de toate instanțele clasei, existentă independent de obiecte."},
            {"term": "static method", "def": "Metodă fără pointer this ce poate accesa exclusiv alți membri statici."},
            {"term": "friend function", "def": "Funcție din exterior căreia clasa îi acordă acces la membrii săi privați."},
            {"term": "Class-level State", "def": "Stare globală aparținând tipului, des utilizată pentru contoare de instanțe."}
        ],
        "example": "class Sesiune {\nprivate:\n    inline static int s_contor{0}; // static inline C++17\n    int m_id;\npublic:\n    Sesiune() : m_id{++s_contor} {}\n    static int getTotalSesiuni() { return s_contor; }\n    friend void afiseazaDebug(const Sesiune& s); // Functie prietena\n};",
        "prompt": "Scrie declarația din interiorul unei clase care definește funcția externă void inspecteaza(const Nod& n) ca fiind funcție prietenă (friend).",
        "caseSensitive": True,
        "acceptedAnswers": [
            "friend void inspecteaza(const Nod& n);",
            "friend void inspecteaza(const Nod& n)",
            "friend void inspecteaza(Nod const& n);"
        ],
        "regexPattern": "^friend\\s+void\\s+inspecteaza\\s*\\(\\s*(const\\s+Nod\\s*&|Nod\\s+const\\s*&)\\s*[a-zA-Z0-9_]+\\s*\\)\\s*;?$",
        "officialSolution": "friend void inspecteaza(const Nod& n);",
        "explanation": "Cuvântul cheie friend acordă funcției externe dreptul de a citi și scrie membrii privați ai clasei.",
        "hint": "friend void inspecteaza(const Nod& n);",
        "matchingPairs": [
            {"left": "static membru", "right": "O singură instanță partajată de toate obiectele clasei"},
            {"left": "static metodă", "right": "Poate fi apelată fără instanță: Clasa::metoda()"},
            {"left": "friend", "right": "Acordă acces la datele private ale clasei unei entități externe"},
            {"left": "inline static", "right": "Permite inițializarea membrilor statici direct în header (C++17)"}
        ],
        "quiz": {
            "question": "De ce o metodă marcată 'static' într-o clasă C++ nu poate accesa variabile membre obișnuite (nestatice)?",
            "options": [
                "Deoarece metodele statice nu primesc pointerul 'this' asociat unei instanțe specifice",
                "Deoarece variabilele nestatice sunt criptate în memorie",
                "Deoarece este interzis de sistemul de operare",
                "Doar variabilele de tip double nu pot fi accesate"
            ],
            "correctIndex": 0
        }
    }
]

print(f"Level 3 loaded: {len(level3_lessons)} lessons")
