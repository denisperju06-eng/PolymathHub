# -*- coding: utf-8 -*-
level4_lessons = [
    {
        "id": "cpp-stl-1",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "4. Senior",
        "xp": 30,
        "title": "Supraîncărcarea Operatorilor și Afișarea în Stream (operator<<)",
        "theory": "C++ permite definirea comportamentului operatorilor nativi (precum '+', '-', '==', '<<') pentru clasele utilizatorului, proces numit 'Operator Overloading'. Aceasta conferă tipurilor personalizate aceeași naturalețe sintactică pe care o au tipurile primitive.\n\nPentru afișarea unui obiect în consolă cu 'std::cout << obj', se supraîncarcă operatorul de inserție 'operator<<'. Deoarece primul operand din stânga este un flux ('std::ostream&'), iar al doilea operand din dreapta este obiectul ('const T&'), operatorul NU poate fi o metodă membră a clasei T! El trebuie implementat ca o funcție liberă (adesea declarată 'friend' în interiorul clasei).\n\nFuncția operator<< primește o referință la fluxul de ieșire și returnează aceeași referință ('std::ostream&') pentru a permite înlănțuirea firească a instrucțiunilor de afișare ('std::cout << a << b << c;').",
        "glossary": [
            {"term": "Operator Overloading", "def": "Definirea de logică personalizată pentru operatorii standard (+, -, <<)."},
            {"term": "std::ostream&", "def": "Tipul fluxului de ieșire returnat prin referință pentru a permite înlănțuirea <<."},
            {"term": "Symmetric Operators", "def": "Operatori binari implementați ca funcții libere pentru a permite conversii pe ambii operanzi."},
            {"term": "stream chaining", "def": "Înlănțuirea succesivă a operatorilor de flux (std::cout << x << y)."}
        ],
        "example": "#include <iostream>\n\nclass Punct {\n    int m_x, m_y;\npublic:\n    Punct(int x, int y) : m_x{x}, m_y{y} {}\n    friend std::ostream& operator<<(std::ostream& os, const Punct& p) {\n        os << \"(\" << p.m_x << \", \" << p.m_y << \")\";\n        return os; // Permite inlantuirea!\n    }\n};",
        "prompt": "Scrie semnătura completă a funcției libere de supraîncărcare a operatorului de afișare << pentru clasa Vector3D.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "std::ostream& operator<<(std::ostream& os, const Vector3D& v)",
            "std::ostream& operator<<(std::ostream& os, const Vector3D& v);",
            "std::ostream& operator<<(std::ostream &os, const Vector3D &v)"
        ],
        "regexPattern": "^std::ostream\\s*&\\s*operator<<\\s*\\(\\s*std::ostream\\s*&\\s*[a-zA-Z0-9_]+\\s*,\\s*(const\\s+Vector3D\\s*&|Vector3D\\s+const\\s*&)\\s*[a-zA-Z0-9_]+\\s*\\)\\s*;?$",
        "officialSolution": "std::ostream& operator<<(std::ostream& os, const Vector3D& v)",
        "explanation": "Operatorul de inserție primește std::ostream& și const T& și returnează std::ostream&.",
        "hint": "std::ostream& operator<<(std::ostream& os, const Vector3D& v)",
        "matchingPairs": [
            {"left": "operator<<", "right": "Operatorul de inserție în flux (std::cout)"},
            {"left": "operator>>", "right": "Operatorul de extracție din flux (std::cin)"},
            {"left": "return os;", "right": "Returnează fluxul pentru a permite înlănțuirea"},
            {"left": "friend", "right": "Permite operatorului extern accesul la membrii privați"}
        ],
        "quiz": {
            "question": "De ce trebuie operatorul '<<' supraîncărcat ca funcție liberă (și nu ca metodă membră a clasei pe care o afișăm)?",
            "options": [
                "Deoarece operandul din stânga este fluxul std::ostream, nu instanța clasei noastre",
                "Deoarece clasele nu au acces la memorie video",
                "Este o simplă eroare istorică a C++",
                "Metodele membre nu pot fi apelate cu paranteze"
            ],
            "correctIndex": 0
        }
    },
    {
        "id": "cpp-stl-2",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "4. Senior",
        "xp": 30,
        "title": "Operatorul Trei-Căi C++20 (Spaceship Operator <=>) și Ordonarea",
        "theory": "Până la C++20, pentru a oferi capabilități complete de comparare unui tip, programatorii trebuiau să implementeze manual toți cei 6 operatori relaționali: '==', '!=', '<', '<=', '>', '>=' – un proces redundant predispus la erori de logică.\n\nC++20 a introdus 'Three-Way Comparison Operator' sau 'Spaceship Operator' ('<=>'). Acest operator unic compară două valori și returnează o categorie de ordonare din header-ul '<compare>': 'std::strong_ordering::less', 'std::strong_ordering::equal' sau 'std::strong_ordering::greater'.\n\nPrin adăugarea unei singure linii 'auto operator<=>(const T&) const = default;', compilatorul generează automat toți cei 6 operatori relaționali, comparând membrii clasei membru cu membru în ordinea declarării lor.",
        "glossary": [
            {"term": "Spaceship Operator (<=>)", "def": "Operatorul C++20 ce rezolvă simultan toate comparațiile de mai mic, egal și mai mare."},
            {"term": "std::strong_ordering", "def": "Categorie de comparare strictă unde egalitatea implică substituibilitate perfectă."},
            {"term": "= default", "def": "Instrucțiune ce cere compilatorului să genereze automat implementarea optimă."},
            {"term": "<compare>", "def": "Header-ul C++20 ce conține tipurile de ordonare strong, weak și partial."}
        ],
        "example": "#include <compare>\n\nstruct Jucator {\n    int scor;\n    int nivel;\n    // C++20 genereaza automat ==, !=, <, <=, >, >= dintr-o singura linie:\n    auto operator<=>(const Jucator&) const = default;\n};\n\nJucator a{100, 2}, b{150, 1};\nbool maiBun = (b > a); // Functioneaza automat!",
        "prompt": "Completează declarația implicită din clasa Masina a operatorului spaceship C++20 cu implementare implicită: auto operator<=>(const Masina&) const = default;.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "auto operator<=>(const Masina&) const = default;",
            "auto operator<=>(const Masina&) const = default",
            "auto operator<=>(Masina const&) const = default;"
        ],
        "regexPattern": "^auto\\s+operator<=>\\s*\\(\\s*(const\\s+Masina\\s*&|Masina\\s+const\\s*&)\\s*\\)\\s*const\\s*=\\s*default\\s*;?$",
        "officialSolution": "auto operator<=>(const Masina&) const = default;",
        "explanation": "Sintaxa auto operator<=>(const T&) const = default; sintetizează toți operatorii de comparare.",
        "hint": "auto operator<=>(const Masina&) const = default;",
        "matchingPairs": [
            {"left": "operator<=>", "right": "Operatorul spaceship ce determină ordinea relativă"},
            {"left": "= default", "right": "Generează automat compararea membru cu membru"},
            {"left": "std::strong_ordering", "right": "Categorie de ordonare strictă fără ambiguități"},
            {"left": "<compare>", "right": "Header-ul obligatoriu pentru compararea trei-căi"}
        ],
        "quiz": {
            "question": "Ce avantaje aduce 'auto operator<=>(const T&) const = default;' introdus în C++20?",
            "options": [
                "Crește viteza de redare grafică pe GPU",
                "Sintetizează automat toți cei 6 operatori relaționali (<, <=, >, >=, ==, !=) dintr-o singură linie",
                "Elimină nevoia de destructori",
                "Forțează alocarea pe stivă"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-stl-3",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "4. Senior",
        "xp": 30,
        "title": "Moștenire de Bază, Specificatorul protected și Lanțul Constructorilor",
        "theory": "Moștenirea permite derivarea unei clase noi ('Derived') dintr-o clasă existentă ('Base'), reutilizând codul și stabilind o relație de tip 'IS-A' (este-un). Sintaxa standard în C++ este 'class Derivata : public Baza'. Modul de moștenire 'public' păstrează nivelurile de acces ale bazei.\n\nSecțiunea 'protected' oferă un nivel intermediar de securitate: membrii protejați sunt inaccesibili codului extern din afara clasei (la fel ca 'private'), dar sunt pe deplin accesibili claselor derivate din ierarhie.\n\nLa crearea unui obiect derivat, se execută mai întâi constructorul clasei de bază, urmat de cel al clasei derivate. În lista de inițializare, constructorul derivatei poate invoca explicit constructorul bazei: 'Derivata(int a, int b) : Baza{a}, m_b{b} {}'. Destructorii sunt executați în ordine inversă.",
        "glossary": [
            {"term": "Moștenire publică", "def": "Relație de tip IS-A în care interfața publică a bazei rămâne publică în derivată."},
            {"term": "protected", "def": "Acces permis exclusiv metodelor clasei curente și claselor derivate."},
            {"term": "Ordinea construcției", "def": "Clasa de bază se construiește prima; la distrugere, derivata se distruge prima."},
            {"term": "Base Initializer", "def": "Invocarea constructorului bazei din lista de inițializare a clasei derivate."}
        ],
        "example": "class Entitate {\nprotected:\n    int m_viata{100}; // Accesibil in derivate!\npublic:\n    Entitate(int v) : m_viata{v} {}\n};\n\nclass Jucator : public Entitate {\nprivate:\n    std::string m_nume;\npublic:\n    Jucator(std::string_view nume, int v) \n        : Entitate{v}, m_nume{nume} {} // Apel constructor baza\n};",
        "prompt": "Scrie antetul declarației clasei Robot care moștenește public clasa Dispozitiv.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "class Robot : public Dispozitiv",
            "class Robot : public Dispozitiv {",
            "class Robot: public Dispozitiv"
        ],
        "regexPattern": "^class\\s+Robot\\s*:\\s*public\\s+Dispozitiv(\\s*\\{)?$",
        "officialSolution": "class Robot : public Dispozitiv",
        "explanation": "Sintaxa moștenirii publice în C++ este class NumeDerivata : public NumeBaza.",
        "hint": "class Robot : public Dispozitiv",
        "matchingPairs": [
            {"left": ": public Base", "right": "Moștenire publică standard (relație IS-A)"},
            {"left": "protected:", "right": "Accesibil doar în clasa curentă și în descendenții săi"},
            {"left": "Ordinea construcției", "right": "Baza se construiește înaintea derivatei"},
            {"left": "Ordinea distrugerii", "right": "Derivata se distruge înaintea bazei"}
        ],
        "quiz": {
            "question": "Ce vizibilitate au membrii 'protected' dintr-o clasă de bază pentru funcțiile din afara ierarhiei de clase?",
            "options": [
                "Sunt accesibili ca oricare membru public",
                "Sunt complet inaccesibili (se comportă identic cu private pentru exterior)",
                "Sunt vizibili doar dacă se utilizează reinterpret_cast",
                "Sunt transformați automat în variabile globale"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-stl-4",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "4. Senior",
        "xp": 30,
        "title": "Polimorfism Dinamic: Funcții Virtuale, VTable și Pointerul VPTR",
        "theory": "Polimorfismul dinamic permite tratarea obiectelor derivate prin pointeri sau referințe către clasa lor de bază ('Baza* ptr = &derivata;'), invocând totuși implementarea corectă a derivatei la runtime. Pentru a activa acest mecanism, metoda din clasa de bază trebuie marcată cu cuvântul cheie 'virtual'.\n\nSub capotă, compilatorul implementează polimorfismul prin 'VTable' (Virtual Method Table): un tabel static de pointeri către funcțiile virtuale ale clasei. Fiecare instanță a unei clase polimorfice conține un membru invizibil ascuns: pointerul 'vptr' (uzual primii 8 octeți ai obiectului), care indică spre VTable-ul tipului său concret.\n\nCând se apelează 'ptr->metodaVirtuala()', execuția face o dublă dereferențiere: citește vptr din obiect, localizează adresa funcției în VTable și execută saltul indirect (Indirect Call), adăugând o mică penalizare hardware de pipeline branch prediction.",
        "glossary": [
            {"term": "virtual", "def": "Cuvânt cheie ce marchează o metodă pentru legare dinamică la runtime."},
            {"term": "VTable", "def": "Tabelă generată de compilator ce conține adresele funcțiilor virtuale ale clasei."},
            {"term": "vptr", "def": "Pointer ascuns în fiecare obiect polimorfic ce indică spre VTable-ul său."},
            {"term": "Dynamic Dispatch", "def": "Determinarea la timpul execuției a metodei apelate pe baza tipului real."}
        ],
        "example": "class Forma {\npublic:\n    virtual void deseneaza() const { // Metoda virtuala!\n        std::cout << \"Forma generica\\n\";\n    }\n};\n\nclass Cerc : public Forma {\npublic:\n    void deseneaza() const override {\n        std::cout << \"Cerc desenat\\n\";\n    }\n};\n\nForma* f = new Cerc();\nf->deseneaza(); // Afiseaza 'Cerc desenat' datorita VTable-ului!",
        "prompt": "Scrie declarația unei metode virtuale numită calculeaza() ce nu primește parametri și returnează double.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "virtual double calculeaza();",
            "virtual double calculeaza()",
            "virtual double calculeaza() const;",
            "virtual double calculeaza() const"
        ],
        "regexPattern": "^virtual\\s+double\\s+calculeaza\\s*\\(\\s*\\)(\\s*const)?\\s*;?$",
        "officialSolution": "virtual double calculeaza();",
        "explanation": "Cuvântul cheie 'virtual' plasat la începutul semnăturii activează legarea dinamică prin VTable.",
        "hint": "virtual double calculeaza();",
        "matchingPairs": [
            {"left": "virtual", "right": "Activează legarea dinamică la timpul execuției"},
            {"left": "VTable", "right": "Tabela de pointeri către metodele virtuale ale clasei"},
            {"left": "vptr", "right": "Pointerul din fiecare instanță ce pointează la VTable"},
            {"left": "Dynamic Binding", "right": "Rezolvarea apelului de funcție la runtime"}
        ],
        "quiz": {
            "question": "Ce cost de memorie introduce marcarea unei metode cu 'virtual' într-o clasă fără alte metode virtuale pe o arhitectură de 64 biți?",
            "options": [
                "Niciun cost de memorie",
                "Adaugă un pointer vptr de 8 octeți în fiecare instanță a clasei",
                "Dublează dimensiunea tuturor variabilelor întregi",
                "Consumă 1 KB de memorie statică per apel"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-stl-5",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "4. Senior",
        "xp": 30,
        "title": "Specificatorii override și final în Ierarhii Polimorfice",
        "theory": "Înainte de C++11, suprascrierea metodelor virtuale era extrem de vulnerabilă la erori invizibile: dacă scriai greșit un caracter din numele metodei sau diferențiai subtil un parametru ('const int&' vs 'int'), compilatorul nu genera eroare, ci considera că ai declarat o funcție complet nouă, blocând polimorfismul.\n\nC++11 a eliminat acest risc prin specificatorul 'override'. Plasat la sfârșitul semnăturii unei metode derivate ('void deseneaza() override;'), acesta solicită compilatorului să verifice dacă metoda suprascrie o funcție virtuală exactă din baza sa. Dacă nu există potrivire identică, se emite eroare de compilare.\n\nComplementar, specificatorul 'final' poate fi aplicat unei metode pentru a interzice suprascrierea ei ulterioară, sau unei întregi clase ('class Sigura final : public Baza') pentru a împiedica orice altă clasă să o moștenească. Aceasta permite compilatorului să optimizeze apelurile prin devirtualizare (salt direct fără VTable).",
        "glossary": [
            {"term": "override", "def": "Specificator C++11 ce forțează compilatorul să valideze suprascrierea unei metode virtuale."},
            {"term": "final", "def": "Specificator ce blochează suprascrierea unei metode sau moștenirea unei clase."},
            {"term": "Devirtualizare", "def": "Optimizare de compilator ce transformă apelul indirect virtual într-un salt direct."},
            {"term": "Signature Mismatch", "def": "Eroare subtilă de neconcordanță a parametrilor ce împiedică suprascrierea."}
        ],
        "example": "class Baza {\npublic:\n    virtual void proceseaza(int x);\n};\n\nclass Derivata : public Baza {\npublic:\n    // 'override' asigura ca semnaturile coincid perfect:\n    void proceseaza(int x) override;\n    // void proceseaza(double x) override; // EROARE DE COMPILARE: Detecteaza greseala de tip!\n};",
        "prompt": "Completează semnătura metodei render() fără parametri, cu tipul de return void, care suprascrie sigur o metodă virtuală din clasa de bază folosind override.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "void render() override;",
            "void render() override",
            "void render() const override;",
            "void render() const override"
        ],
        "regexPattern": "^void\\s+render\\s*\\(\\s*\\)(\\s*const)?\\s+override\\s*;?$",
        "officialSolution": "void render() override;",
        "explanation": "Specificatorul override se plasează la finalul semnăturii metodei pentru a asigura verificarea de către compilator.",
        "hint": "void render() override;",
        "matchingPairs": [
            {"left": "override", "right": "Verifică la compilare că metoda suprascrie o funcție din bază"},
            {"left": "final (metodă)", "right": "Interzice derivatelor viitoare să suprascrie această metodă"},
            {"left": "final (clasă)", "right": "Interzice complet moștenirea clasei de către alte clase"},
            {"left": "Devirtualizare", "right": "Elimină costul VTable dacă clasa este finală"}
        ],
        "quiz": {
            "question": "Ce se întâmplă dacă adaugi 'override' unei metode care are o greșeală de literă față de metoda din clasa de bază?",
            "options": [
                "Compilatorul corectează automat numele",
                "Compilatorul emite o eroare la compilare semnalând că nu există o metodă de suprascris",
                "Metoda este ignorată la rulare",
                "Se creează o copie a clasei de bază"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-stl-6",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "4. Senior",
        "xp": 30,
        "title": "Clase Abstracte, Metode Virtuale Pure (= 0) și Destructori Virtuali",
        "theory": "O metodă 'virtuală pură' este o funcție virtuală care nu are o implementare obligatorie în clasa de bază, fiind declarată cu sintaxa '= 0;' (de exemplu: 'virtual void deseneaza() = 0;'). O clasă care conține cel puțin o metodă virtuală pură devine o 'Clasă Abstractă' (Abstract Class).\n\nClasele abstracte nu pot fi instanțiate direct ('Forma f;' este o eroare de compilare); ele servesc ca interfețe contractuale riguroase pentru ierarhiile polimorfice. Orice clasă derivată trebuie să implementeze toate metodele pure moștenite pentru a deveni o clasă concretă instanțiabilă.\n\nO REGULĂ DE AUR ÎN C++: Orice clasă care conține cel puțin o funcție virtuală TREBUIE să aibă un 'Destructor Virtual' ('virtual ~Baza() = default;'). Dacă ștergi un obiect derivat printr-un pointer la clasa de bază fără destructor virtual, destructorul derivatei NU va fi apelat niciodată, cauzând scurgeri masive de memorie (Memory Leaks și Undefined Behavior).",
        "glossary": [
            {"term": "Pure Virtual (= 0)", "def": "Metodă fără implementare obligatorie în bază ce definește o interfață."},
            {"term": "Clasă Abstractă", "def": "Clasă cu cel puțin o metodă = 0, ce nu poate fi instanțiată direct."},
            {"term": "Virtual Destructor", "def": "Garantează apelul lanțului complet de destructori la ștergerea prin pointer la bază."},
            {"term": "Memory Leak", "def": "Memorie alocată pe Heap care nu mai este eliberată din cauza omiterii destructorului."}
        ],
        "example": "class DispozitivInterfata {\npublic:\n    virtual void porneste() = 0; // Metoda virtuala pura!\n    virtual ~DispozitivInterfata() = default; // Destructor virtual critic!\n};\n\n// DispozitivInterfata d; // EROARE: Clasa abstracta nu se poate instantia!",
        "prompt": "Scrie declarația unei metode virtuale pure numită execute() fără parametri, ce returnează void și are sufixul = 0;.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "virtual void execute() = 0;",
            "virtual void execute() = 0"
        ],
        "regexPattern": "^virtual\\s+void\\s+execute\\s*\\(\\s*\\)\\s*=\\s*0\\s*;?$",
        "officialSolution": "virtual void execute() = 0;",
        "explanation": "Sintaxa virtual tip nume() = 0; declară o metodă virtuală pură și transformă clasa în clasă abstractă.",
        "hint": "virtual void execute() = 0;",
        "matchingPairs": [
            {"left": "= 0;", "right": "Declară o funcție virtuală pură (pure virtual)"},
            {"left": "Clasă abstractă", "right": "Poate fi utilizată doar ca interfață și pointer/referință"},
            {"left": "virtual ~Baza()", "right": "Obligatoriu pentru distrugerea sigură a claselor polimorfice"},
            {"left": "Clasă concretă", "right": "Clasă care a implementat toate metodele pure și se poate instanția"}
        ],
        "quiz": {
            "question": "Ce se întâmplă dacă apelezi 'delete ptrBaza;' unde ptrBaza pointează către un obiect derivat, dar clasa Baza are un destructor nestatic obișnuit (ne-virtual)?",
            "options": [
                "Totul rulează corect fără probleme",
                "Este Undefined Behavior: destructorul clasei derivate nu este apelat, producând scurgeri de resurse",
                "Compilatorul transformă automat destructorul în virtual",
                "Memoria este eliberată de două ori"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-stl-7",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "4. Senior",
        "xp": 30,
        "title": "Conversii de Tip Explicite: static_cast, dynamic_cast și reinterpret_cast",
        "theory": "În C tradițional, conversiile de tip se realizau prin 'C-style cast' ('(TipNou)valoare'). Acest stil este deosebit de periculos deoarece combină nediferențiat conversii sigure, eliminarea const-ului și reinterpretarea memoriei brute fără nicio avertizare din partea compilatorului.\n\nC++ modern a înlocuit conversiile oarbe prin 4 operatori expliciți de casting: 1. 'static_cast<T>()' realizează conversii verificate la compilare (ex: int la double, pointeri în ierarhii sigure). 2. 'dynamic_cast<T>()' este folosit în polimorfism la runtime (RTTI) pentru a verifica dacă un pointer la bază indică într-adevăr către tipul derivat cerut (returnează nullptr dacă eșuează).\n\n3. 'const_cast<T>()' adaugă sau elimină specificatorul const/volatile. 4. 'reinterpret_cast<T>()' este cel mai periculos cast de nivel jos, reinterpretând tiparul brut de biți al unei adrese de memorie ca un alt tip de date neînrudit.",
        "glossary": [
            {"term": "static_cast", "def": "Conversie verificată la compile-time între tipuri compatibile matematic sau ierarhic."},
            {"term": "dynamic_cast", "def": "Conversie polimorfică la runtime ce folosește RTTI și returnează nullptr la eșec."},
            {"term": "reinterpret_cast", "def": "Reinterpretare binară directă a memoriei la cel mai scăzut nivel hardware."},
            {"term": "const_cast", "def": "Operator specializat exclusiv pe adăugarea sau înlăturarea atributului const."}
        ],
        "example": "Forma* f = new Cerc();\n\n// Downcasting sigur la runtime prin dynamic_cast:\nCerc* c = dynamic_cast<Cerc*>(f);\nif (c != nullptr) {\n    std::cout << \"Cast reusit! Este un Cerc real.\\n\";\n}\n\n// Conversie numerica sigura la compilare:\ndouble d = 4.5;\nint i = static_cast<int>(d); // 4",
        "prompt": "Scrie conversia explicită modernă a variabilei double numită rata la tipul int folosind static_cast.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "static_cast<int>(rata)",
            "static_cast<int>(rata);"
        ],
        "regexPattern": "^static_cast<int>\\s*\\(\\s*rata\\s*\\);?$",
        "officialSolution": "static_cast<int>(rata)",
        "explanation": "static_cast<int>(rata) este modalitatea standard, sigură și căutabilă în cod pentru conversii numerice.",
        "hint": "static_cast<int>(rata)",
        "matchingPairs": [
            {"left": "static_cast<T>", "right": "Conversie sigură verificată la momentul compilării"},
            {"left": "dynamic_cast<T>", "right": "Downcasting polimorfic sigur la runtime (returnează nullptr)"},
            {"left": "reinterpret_cast<T>", "right": "Reinterpretare brută de adrese de memorie (nivel jos)"},
            {"left": "const_cast<T>", "right": "Elimină specificatorul const de pe un pointer/referință"}
        ],
        "quiz": {
            "question": "Ce returnează 'dynamic_cast<Derivata*>(ptrBaza)' dacă obiectul indicat de ptrBaza NU este de tipul Derivata?",
            "options": [
                "Aruncă o excepție fatală de procesor",
                "Returnează nullptr în mod sigur",
                "Corupe memoria obiectului",
                "Returnează adresa 0xDEADBEEF"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-stl-8",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "4. Senior",
        "xp": 30,
        "title": "Containere Secvențiale STL: std::vector, Capacitate vs Mărime și emplace_back",
        "theory": "Biblioteca Standard C++ (STL) oferă o suită de containere performante gestionate automat prin RAII. Cel mai important și utilizat container este 'std::vector' din header-ul '<vector>', care reprezintă un tablou dinamic redimensionabil stocat contiguu pe Heap.\n\nEste esențială distincția dintre 'size()' (numărul curent de elemente efective din vector) și 'capacity()' (numărul total de elemente pentru care vectorul a alocat memorie în avans). Când mărimea depășește capacitatea, vectorul alocă un bloc dublu de memorie pe Heap, mută toate elementele vechi și eliberează spațiul anterior (operație O(N)). Pentru a preveni realocările costisitoare, se folosește 'v.reserve(N)'.\n\nÎncepând cu C++11, metoda 'emplace_back(args...)' construiește noul element 'in-place' direct în memoria internă a vectorului transmițând argumentele constructorului, eliminând copierea sau mutarea intermediară specifică vechiului 'push_back()'.",
        "glossary": [
            {"term": "std::vector", "def": "Tablou dinamic cu memorie contiguă pe Heap ce oferă acces O(1) prin index."},
            {"term": "size()", "def": "Numărul de elemente active stocate în prezent în container."},
            {"term": "capacity()", "def": "Capacitatea totală de stocare alocată în memoria RAM fără necesitatea realocării."},
            {"term": "emplace_back", "def": "Construiește elementul direct în buffer-ul vectorului, eliminând copiile temporare."}
        ],
        "example": "#include <vector>\n#include <iostream>\n\nstd::vector<int> numere;\nnumere.reserve(100); // Aloca spatiu pentru 100 intregi in avans (zero realocari!)\n\nnumere.push_back(10);\nnumere.emplace_back(20); // Constructie in-place\n\nstd::cout << \"Size: \" << numere.size() << \" Capacity: \" << numere.capacity() << \"\\n\";",
        "prompt": "Scrie metoda apelată pe un std::vector numit lista pentru a prealoca memorie în avans pentru 50 de elemente fără a adăuga elemente active.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "lista.reserve(50);",
            "lista.reserve(50)"
        ],
        "regexPattern": "^lista\\.reserve\\s*\\(\\s*50\\s*\\)\\s*;?$",
        "officialSolution": "lista.reserve(50);",
        "explanation": "Metoda reserve(N) mărește capacitatea vectorului la N fără a crea elemente noi, prevenind realocările.",
        "hint": "lista.reserve(50);",
        "matchingPairs": [
            {"left": "v.reserve(N)", "right": "Prealocă memorie mărind capacity fără a modifica size"},
            {"left": "v.resize(N)", "right": "Modifică efectiv numărul de elemente din vector"},
            {"left": "emplace_back", "right": "Construiește obiectul direct în container (in-place)"},
            {"left": "v.shrink_to_fit()", "right": "Eliberează capacitatea excedentară neutilizată"}
        ],
        "quiz": {
            "question": "De ce este metoda 'emplace_back()' preferată în locul lui 'push_back()' pentru obiecte complexe?",
            "options": [
                "Deoarece emplace_back rulează în mod asincron pe alt nucleu",
                "Deoarece construiește obiectul direct în memoria internă a vectorului, evitând crearea unui temporar",
                "Deoarece sortează automat elementele în vector",
                "Deoarece push_back este interzis în C++17"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-stl-9",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "4. Senior",
        "xp": 30,
        "title": "Containere Asociative: std::map (Arbori) vs std::unordered_map (Hash Tables)",
        "theory": "Containerele asociative stochează perechi cheie-valoare ('std::pair<const Key, Value>'). STL oferă două abordări arhitecturale fundamentally diferite pentru dicționare: 'std::map' și 'std::unordered_map'.\n\n'std::map' (din '<map>') este implementat ca un arbore binar auto-echilibrat de căutare (uzual Red-Black Tree). Elementele sunt menținute întotdeauna sortate strict după cheie conform operatorului '<'. Complexitatea căutării, inserției și ștergerii este strict O(log N).\n\nÎn schimb, 'std::unordered_map' (din '<unordered_map>') este implementat pe baza unui tabel de dispersie (Hash Table). Elementele nu sunt sortate, însă căutarea și inserția au o complexitate medie excepțională de O(1) constant. Pentru căutări ultra-rapide în volume mari de date fără cerințe de ordine, unordered_map este opțiunea optimă.",
        "glossary": [
            {"term": "std::map", "def": "Dicționar asociativ sortat implementat ca Red-Black Tree cu căutare O(log N)."},
            {"term": "std::unordered_map", "def": "Dicționar asociativ nesortat bazat pe Hash Table cu căutare medie O(1)."},
            {"term": "Hash Function", "def": "Funcție matematică ce transformă cheia într-un index de bucket în memorie."},
            {"term": "Red-Black Tree", "def": "Arbore binar echilibrat ce garantează operații O(log N) în cel mai defavorabil caz."}
        ],
        "example": "#include <map>\n#include <unordered_map>\n#include <string>\n\n// 1. Ordonat dupa cheie (Red-Black Tree): O(log N)\nstd::map<std::string, int> varsteSortate;\nvarsteSortate[\"Bogdan\"] = 30;\nvarsteSortate[\"Andrei\"] = 25; // 'Andrei' va fi primul la parcurgere!\n\n// 2. Neordonat, ultra-rapid (Hash Table): O(1)\nstd::unordered_map<std::string, int> cacheRapid;\ncacheRapid[\"user_102\"] = 99;",
        "prompt": "Declară un container std::map numit inventar care asociază chei de tip std::string cu valori întregi de tip int.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "std::map<std::string, int> inventar;",
            "std::map<std::string, int> inventar{};"
        ],
        "regexPattern": "^std::map<std::string,\\s*int>\\s+inventar\\s*(\\{\\s*\\})?\\s*;$",
        "officialSolution": "std::map<std::string, int> inventar;",
        "explanation": "Sintaxa std::map<KeyType, ValueType> nume; declară un dicționar ordonat pe baza cheii.",
        "hint": "std::map<std::string, int> inventar;",
        "matchingPairs": [
            {"left": "std::map", "right": "Elemente ordonate automat după cheie (Red-Black Tree, O(log N))"},
            {"left": "std::unordered_map", "right": "Elemente nesortate dar acces mediu O(1) prin Hash Table"},
            {"left": "m.find(key)", "right": "Returnează un iterator către element sau m.end() dacă nu există"},
            {"left": "operator[]", "right": "Inserează automat o valoare implicită dacă cheia lipsește"}
        ],
        "quiz": {
            "question": "Care este complexitatea căutării unui element într-un std::unordered_map în cazul mediu?",
            "options": [
                "O(N)",
                "O(log N)",
                "O(1) timp constant",
                "O(N^2)"
            ],
            "correctIndex": 2
        }
    }
]

print(f"Level 4 loaded: {len(level4_lessons)} lessons")
