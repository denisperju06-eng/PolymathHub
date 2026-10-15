# -*- coding: utf-8 -*-
level2_lessons = [
    {
        "id": "cpp-mem-1",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Spații de Nume (namespace) și Operatorul de Rezoluție de Domeniu (::)",
        "theory": "Pe măsură ce programele C++ cresc în dimensiune și integrează biblioteci terțe, probabilitatea ca două funcții sau clase să aibă exact același nume crește exponențial (coliziune de nume sau name collision). Pentru a preveni conflictele globale de simboluri, C++ oferă 'spațiile de nume' (namespaces).\n\nUn spațiu de nume grupează declarațiile sub un identificator logic comun. Accesarea entităților din interiorul unui namespace se face folosind operatorul de rezoluție de domeniu '::' (de exemplu: 'std::cout' sau 'Audio::Engine::init()').\n\nDirectiva 'using namespace std;' este des întâlnită în tutoriale introductive, însă este considerată o anti-practică periculoasă în proiectele de producție, în special în fișierele header (.hpp). Includerea 'using namespace' importă mii de identificatori în spațiul global, generând ambiguități neașteptate.",
        "glossary": [
            {"term": "namespace", "def": "Mecanism C++ de izolare logică a identificatorilor pentru prevenirea coliziunilor."},
            {"term": "Scope Resolution (::)", "def": "Operatorul utilizat pentru calificarea și accesarea membrilor unui namespace sau clase."},
            {"term": "Name Collision", "def": "Eroare de compilare cauzată de existența a două entități identice în același scope."},
            {"term": "using namespace", "def": "Directivă ce deschide întregul namespace în scope-ul curent (nerecomandată în headere)."}
        ],
        "example": "namespace Engine {\n    void porneste() {\n        // initializare motor\n    }\n}\n\nint main() {\n    Engine::porneste(); // Calificare explicita prin ::\n    return 0;\n}",
        "prompt": "Scrie comanda pentru a apela funcția init() aparținând spațiului de nume Audio folosind operatorul de rezoluție de domeniu ::.",
        "caseSensitive": True,
        "acceptedAnswers": ["Audio::init();", "Audio::init()"],
        "regexPattern": "^Audio::init\\(\\);?$",
        "officialSolution": "Audio::init();",
        "explanation": "Se specifică numele namespace-ului urmat de operatorul de rezoluție :: și numele funcției: Audio::init();.",
        "hint": "Audio::init();",
        "matchingPairs": [
            {"left": "namespace N", "right": "Definește un domeniu izolat de nume"},
            {"left": "::", "right": "Operator de rezoluție a domeniului (scope resolution)"},
            {"left": "::identificator", "right": "Accesează un simbol din spațiul global"},
            {"left": "using N::f;", "right": "Importă o singură funcție specifică fără a deschide tot namespace-ul"}
        ],
        "quiz": {
            "question": "De ce este interzisă plasarea directivei 'using namespace std;' în interiorul fișierelor header (.hpp)?",
            "options": [
                "Deoarece încetinește viteza procesorului în bucle",
                "Deoarece poluează spațiul global al oricărui fișier .cpp care include acel header",
                "Deoarece compilatoarele pe 64 de biți nu suportă namespace-ul std",
                "Nu este interzisă, este practica recomandată"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-mem-2",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Durată de Stocare și Linkage: Variabile Locale, static și extern",
        "theory": "În C++, orice variabilă posedă o 'durată de stocare' (storage duration) și o 'legătură' (linkage). Variabilele locale declarate în funcții au 'automatic storage duration': sunt create pe stivă la intrarea în bloc și distruse automat la ieșire.\n\nDacă o variabilă locală este marcată cu specificatorul 'static', ea capătă 'static storage duration': este alocată în segmentul de date la pornirea programului, inițializată o singură dată la prima trecere a execuției și își păstrează valoarea între apelurile repetate ale funcției.\n\nCuvântul cheie 'extern' este folosit pentru 'external linkage', informând compilatorul că o variabilă sau funcție există și este definită într-un alt fișier de translație (.cpp), urmând ca linker-ul să îi rezolve adresa fizică.",
        "glossary": [
            {"term": "Automatic Storage", "def": "Alocare pe stivă (stack) cu viață limitată la blocul de cod delimitat de acolade."},
            {"term": "Static Local", "def": "Variabilă cu viață pe toată durata programului, dar vizibilă doar în funcția locală."},
            {"term": "extern", "def": "Declară un simbol a cărui definiție și alocare există în alt fișier .cpp."},
            {"term": "Internal Linkage", "def": "Simbol vizibil doar în unitatea curentă de translație (const sau static global)."}
        ],
        "example": "int genereazaID() {\n    static int ultimulID{0}; // Initializat O SINGURA DATA la primul apel\n    ++ultimulID;\n    return ultimulID;\n}\n// genereazaID() returneaza: 1, apoi 2, apoi 3...",
        "prompt": "Completează declarația din funcție a unei variabile întregi numită counter, inițializată cu 0, care își păstrează starea între apelurile funcției.",
        "caseSensitive": True,
        "acceptedAnswers": ["static int counter{0};", "static int counter = 0;", "static int counter{};"],
        "regexPattern": "^static\\s+int\\s+counter\\s*(=|\\{)\\s*0?\\s*\\}?\\s*;$",
        "officialSolution": "static int counter{0};",
        "explanation": "Specificatorul static în fața unei variabile locale îi extinde durata de viață la întreaga execuție a programului.",
        "hint": "static int counter{0};",
        "matchingPairs": [
            {"left": "static (local)", "right": "Păstrează valoarea între apeluri succesive"},
            {"left": "extern", "right": "Referă o variabilă definită în altă unitate de translație"},
            {"left": "automatic", "right": "Creat pe stivă și distrus la părăsirea acoladelor"},
            {"left": "Data Segment", "right": "Zona binară unde rezidă variabilele globale și statice"}
        ],
        "quiz": {
            "question": "De câte ori este executată linia de inițializare 'static int x{10};' dintr-o funcție apelată de 100 de ori?",
            "options": [
                "De 100 de ori",
                "O singură dată, la prima invocare a funcției",
                "Niciodată, este ignorată de compilator",
                "La fiecare al doilea apel"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-mem-3",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Tablouri Tradiționale C (Arrays), Indexare și Riscuri Out-of-Bounds",
        "theory": "Un tablou C-style ('int arr[N];') reprezintă o secvență contiguă de elemente de același tip alocate direct pe stivă sau în segmentul static. Dimensiunea 'N' trebuie să fie o expresie constantă cunoscută la timpul compilării (nu o variabilă dinamică).\n\nIndexarea tablourilor în C și C++ pornește de la 0 și se încheie la 'N - 1'. C++ oferă viteză absolută fără verificări ascunse: compilatorul NU verifică automat limitele de index la accesarea 'arr[i]'.\n\nDacă accesezi un index în afara limitelor (precum 'arr[N]' sau 'arr[-1]'), se produce un acces ilegal în memorie (Buffer Overflow / Out-of-Bounds). Acest lucru corupe datele din jur sau declanșează semnalul SIGSEGV (Segmentation Fault).",
        "glossary": [
            {"term": "C-style Array", "def": "Colecție contiguă de memorie cu dimensiune fixată la compilare."},
            {"term": "Indexare 0", "def": "Primul element are indexul 0, reprezentând deplasamentul de la adresa de start."},
            {"term": "Buffer Overflow", "def": "Scrierea de date dincolo de spațiul alocat tabloului în memorie."},
            {"term": "Contiguous Memory", "def": "Elementele sunt stocate consecutiv în octeți adiacenți în RAM."}
        ],
        "example": "constexpr std::size_t MAX_ELEMENTE{5};\nint valori[MAX_ELEMENTE]{10, 20, 30, 40, 50};\n\nint primul = valori[0]; // 10\nint ultimul = valori[MAX_ELEMENTE - 1]; // 50\n// valori[5] = 99; // PERICOL: Buffer Overflow! Undefined Behavior!",
        "prompt": "Declară un tablou de tip int numit data cu dimensiunea 4, inițializat uniform cu valorile 1, 2, 3, 4.",
        "caseSensitive": True,
        "acceptedAnswers": ["int data[4]{1, 2, 3, 4};", "int data[4] = {1, 2, 3, 4};", "int data[]{1, 2, 3, 4};"],
        "regexPattern": "^int\\s+data\\s*(\\[\\s*4?\\s*\\])?\\s*=?\\s*\\{\\s*1\\s*,\\s*2\\s*,\\s*3\\s*,\\s*4\\s*\\}\\s*;$",
        "officialSolution": "int data[4]{1, 2, 3, 4};",
        "explanation": "Se specifică tipul int, numele tabloului data cu mărimea [4] și acoladele cu cele 4 elemente.",
        "hint": "int data[4]{1, 2, 3, 4};",
        "matchingPairs": [
            {"left": "arr[0]", "right": "Primul element al tabloului"},
            {"left": "arr[N-1]", "right": "Ultimul element valid din tablou"},
            {"left": "Buffer Overflow", "right": "Acces ilegal în afara limitelor tabloului"},
            {"left": "Contiguous", "right": "Elemente aliniate unul după altul în memorie"}
        ],
        "quiz": {
            "question": "Ce se întâmplă în C++ standard dacă accesezi un index în afara limitelor unui tablou (ex: arr[10] pentru un tablou de 5 elemente)?",
            "options": [
                "Programul aruncă întotdeauna o excepție de tip IndexError",
                "Compilatorul oprește execuția și afișează o alertă grafică",
                "Este Undefined Behavior: poate corupe memoria sau cauza Segmentation Fault",
                "Tabloul se redimensionează automat pe stivă"
            ],
            "correctIndex": 2
        }
    },
    {
        "id": "cpp-mem-4",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Decăderea Tablourilor în Pointeri (Array Decay) și Parametri",
        "theory": "Una dintre cele mai mari surse de confuzie moștenite din limbajul C este 'Array-to-Pointer Decay' (Decăderea tabloului în pointer). Când un tablou C este transmis ca argument unei funcții sau utilizat într-o expresie aritmetică, el își pierde informația despre dimensiune și se convertește automat (decădere) într-un pointer către primul său element ('&arr[0]').\n\nDin acest motiv, semnăturile de funcții 'void proceseaza(int arr[10])' și 'void proceseaza(int* arr)' sunt identice pentru compilator! Dacă aplici 'sizeof(arr)' în interiorul funcției, NU vei obține dimensiunea tabloului, ci dimensiunea unui pointer pe arhitectura curentă (8 octeți pe 64 de biți).\n\nPentru a transmite în siguranță un tablou C-style, trebuie să transmiți fie un parametru suplimentar de dimensiune ('std::size_t size'), fie să utilizezi alternative moderne precum 'std::span' (C++20) sau 'std::array'.",
        "glossary": [
            {"term": "Array Decay", "def": "Conversia implicită a unui tablou într-un pointer către primul său element."},
            {"term": "sizeof pe parametru", "def": "Returnează dimensiunea pointerului (8 octeți), nu a tabloului întreg."},
            {"term": "std::span", "def": "Vedere C++20 modernă non-posesoare peste o secvență contiguă de date."},
            {"term": "Pass-by-pointer", "def": "Transmiterea adresei primului element pentru a evita copierea tabloului."}
        ],
        "example": "void afiseaza(const int* arr, std::size_t size) {\n    for (std::size_t i{0}; i < size; ++i) {\n        std::cout << arr[i] << \" \";\n    }\n}\n\nint numere[3]{10, 20, 30};\nafiseaza(numere, 3); // 'numere' decade automat in pointer catre 10",
        "prompt": "Completează semnătura funcției afiseaza care primește un tablou decăzut de întregi const sub formă de pointer numit data și un parametru std::size_t numit size, returnând void.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "void afiseaza(const int* data, std::size_t size)",
            "void afiseaza(const int *data, std::size_t size)",
            "void afiseaza(int const* data, std::size_t size)"
        ],
        "regexPattern": "^void\\s+afiseaza\\s*\\(\\s*(const\\s+int\\s*\\*|int\\s+const\\s*\\*)\\s*data\\s*,\\s*std::size_t\\s+size\\s*\\)$",
        "officialSolution": "void afiseaza(const int* data, std::size_t size)",
        "explanation": "Deoarece tablourile decad în pointeri la transmitere, parametrul se declară const int* data alături de std::size_t size.",
        "hint": "void afiseaza(const int* data, std::size_t size)",
        "matchingPairs": [
            {"left": "Array Decay", "right": "Tabloul devine pointer la primul său element"},
            {"left": "sizeof(arr) în funcție", "right": "Returnează 8 octeți (dimensiunea pointerului)"},
            {"left": "std::span<int>", "right": "Alternativă modernă C++20 ce păstrează mărimea"},
            {"left": "std::size_t size", "right": "Parametru adițional obligatoriu pentru limite"}
        ],
        "quiz": {
            "question": "Ce valoare returnează 'sizeof(arr)' dacă 'arr' este primit ca parametru 'void f(int arr[100])' pe o platformă pe 64 de biți?",
            "options": [
                "400 de octeți (100 * 4 octeți)",
                "8 octeți (deoarece arr a decăzut la un simplu pointer int*)",
                "100 de octeți",
                "0 octeți"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-mem-5",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Aritmetica de Pointeri, Deplasare de Memorie și ptrdiff_t",
        "theory": "Aritmetica de pointeri este mecanismul prin care C și C++ manipulează direct adresele de memorie ale tablourilor. Spre deosebire de aritmetica matematică simplă, adunarea sau scăderea unui întreg la un pointer ține cont de dimensiunea tipului de date spre care indică pointerul (scaled by sizeof(T)).\n\nDacă 'ptr' este de tip 'int*' (unde sizeof(int) = 4 octeți), expresia 'ptr + 1' NU va adăuga un octet la adresa din RAM, ci va deplasa adresa cu exact 4 octeți înainte (la următorul element int din tablou). Dereferențierea '*(ptr + i)' este identică semantic cu 'ptr[i]'.\n\nScăderea a doi pointeri care indică spre elemente ale aceluiași tablou ('ptr2 - ptr1') returnează numărul de elemente dintre ei, nu numărul de octeți. Rezultatul acestei scăderi are tipul standard cu semn 'std::ptrdiff_t' din header-ul '<cstddef>'.",
        "glossary": [
            {"term": "Pointer Arithmetic", "def": "Operații matematice scalate automat cu sizeof(T) peste adrese de memorie."},
            {"term": "*(ptr + i)", "def": "Sintaxa pointer echivalentă perfect cu indexarea tradițională ptr[i]."},
            {"term": "std::ptrdiff_t", "def": "Tip întreg cu semn ce reprezintă distanța în elemente dintre doi pointeri."},
            {"term": "Scaled Offset", "def": "Multiplicarea automată a offset-ului cu mărimea în octeți a tipului de date."}
        ],
        "example": "int numere[]{10, 20, 30, 40};\nint* p = numere; // p pointeaza la 10\n\nint alDoilea = *(p + 1); // 20 (avansat cu sizeof(int) = 4 octeti)\nint* pFinal = &numere[3]; // pointeaza la 40\nstd::ptrdiff_t distanta = pFinal - p; // 3 elemente",
        "prompt": "Scrie expresia de dereferențiere a pointerului ptr deplasat cu 2 poziții înainte folosind paranteze și operatorul de dereferențiere *.",
        "caseSensitive": True,
        "acceptedAnswers": ["*(ptr + 2)", "*(ptr+2)"],
        "regexPattern": "^\\*\\s*\\(\\s*ptr\\s*\\+\\s*2\\s*\\)$",
        "officialSolution": "*(ptr + 2)",
        "explanation": "Expresia *(ptr + 2) avansează cu 2 elemente și dereferențiază valoarea stocată acolo, fiind identică cu ptr[2].",
        "hint": "*(ptr + 2)",
        "matchingPairs": [
            {"left": "ptr + 1", "right": "Avansează adresa cu sizeof(T) octeți"},
            {"left": "*(ptr + i)", "right": "Echivalent canonic cu ptr[i]"},
            {"left": "ptr2 - ptr1", "right": "Distanța în număr de elemente (ptrdiff_t)"},
            {"left": "++ptr", "right": "Deplasează pointerul direct la următorul element"}
        ],
        "quiz": {
            "question": "Dacă un pointer 'double* p' are adresa 0x1000 și sizeof(double) este 8 octeți, ce adresă va avea 'p + 2'?",
            "options": [
                "0x1002 (adaugă 2 octeți)",
                "0x1010 (0x1000 + 2 * 8 = 16 octeți în hexazecimal)",
                "0x1008",
                "0x1020"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-mem-6",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Gestiunea Memoriei în C: malloc, calloc, realloc și free",
        "theory": "Înainte de introducerea operatorilor 'new' și 'delete' din C++, alocarea dinamică a memoriei pe Heap se realiza exclusiv prin funcțiile din biblioteca standard C ('<cstdlib>'): 'malloc()', 'calloc()', 'realloc()' și 'free()'. Înțelegerea acestora este esențială pentru interoperabilitatea cu sistemele de operare și bibliotecile C native.\n\n'malloc(bytes)' alocă un bloc contiguu de octeți lăsându-i neinițializați (cu date reziduale). 'calloc(num, size)' alocă memorie și o inițializează obligatoriu cu zerouri (zero-initialized). 'realloc(ptr, new_size)' redimensionează un bloc existent, copiind datele vechi într-o zonă nouă dacă este necesar.\n\nFiecare bloc alocat cu malloc/calloc trebuie eliberat explicit cu 'free(ptr)'. Spre deosebire de 'new' și 'delete' din C++, 'malloc' NU apelează constructorii obiectelor, iar 'free' NU apelează destructorii, operând strict pe memorie brută (raw bytes).",
        "glossary": [
            {"term": "malloc()", "def": "Alocă un număr specificat de octeți pe Heap fără inițializare."},
            {"term": "calloc()", "def": "Alocă și umple automat memoria cu zero octet cu octet."},
            {"term": "realloc()", "def": "Redimensionează un bloc de memorie alocat anterior pe Heap."},
            {"term": "free()", "def": "Eliberează blocul de memorie înapoi către allocatorul sistemului."}
        ],
        "example": "#include <cstdlib>\n\n// Alocare spatiu pentru 10 intregi in C:\nint* buffer = (int*)malloc(10 * sizeof(int));\nif (buffer != nullptr) {\n    buffer[0] = 100;\n    free(buffer); // Eliberare obligatorie!\n    buffer = nullptr; // Protectie impotriva dangling pointer\n}",
        "prompt": "Scrie instrucțiunea pentru a elibera memoria alocată cu malloc indicată de pointerul ptr și a preveni memory leak-ul.",
        "caseSensitive": True,
        "acceptedAnswers": ["free(ptr);", "free(ptr)"],
        "regexPattern": "^free\\s*\\(\\s*ptr\\s*\\)\\s*;?$",
        "officialSolution": "free(ptr);",
        "explanation": "Funcția free(ptr); notifică allocatorul de memorie că blocul indicat de ptr poate fi reutilizat.",
        "hint": "free(ptr);",
        "matchingPairs": [
            {"left": "malloc(size)", "right": "Alocă memorie brută neinițializată pe Heap"},
            {"left": "calloc(n, size)", "right": "Alocă și zeroizează memoria în mod garantat"},
            {"left": "free(ptr)", "right": "Eliberează memoria fără a apela destructori C++"},
            {"left": "realloc(ptr, s)", "right": "Extinde sau micșorează un bloc existent de memorie"}
        ],
        "quiz": {
            "question": "Care este diferența critică dintre 'malloc' și operatorul 'new' în C++?",
            "options": [
                "malloc rulează doar pe Linux, new doar pe Windows",
                "new alocă memorie și apelează automat constructorul obiectului; malloc alocă doar octeți bruți",
                "malloc este de două ori mai rapid în grafică",
                "new nu poate produce niciodată erori de memorie insuficientă"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-mem-7",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Șiruri de Caractere în Stil C (C-Strings) și Terminatorul Nul '\\0'",
        "theory": "În limbajul C, un șir de caractere nu este un obiect, ci un simplu tablou de tip 'char' terminat printr-un octet special numit 'Null Terminator' ('\\0', având valoarea numerică 0). Toate funcțiile din biblioteca '<cstring>' (cum ar fi 'strlen', 'strcmp', 'strcpy') parcurg memoria până când întâlnesc primul octet '\\0'.\n\nDacă un tablou de caractere nu conține '\\0' la final, funcțiile de citire vor continua să citească memoria adiacentă din RAM dincolo de limitele tabloului până la găsirea unui octet 0 întâmplător, provocând breșe de securitate (Heartbleed-style vulnerabilities).\n\nDimensiunea unui C-string literal include întotdeauna terminatorul nul: de exemplu, literalul \"Salut\" conține 5 caractere vizibile, dar ocupă 6 octeți în memorie ('S', 'a', 'l', 'u', 't', '\\0').",
        "glossary": [
            {"term": "Null Terminator ('\\0')", "def": "Caracterul cu valoarea ASCII 0 care marchează sfârșitul unui șir C."},
            {"term": "strlen()", "def": "Calculează lungimea unui C-string numărând caracterele până la '\\0'."},
            {"term": "Buffer Overread", "def": "Citirea memoriei neautorizate cauzată de lipsa terminatorului '\\0'."},
            {"term": "<cstring>", "def": "Header-ul C++ ce conține funcțiile clasice de manipulare char* (strcmp, strcpy)."}
        ],
        "example": "#include <cstring>\n#include <iostream>\n\nchar mesaj[6] = \"Salut\"; // 'S', 'a', 'l', 'u', 't', '\\0'\nstd::cout << \"Lungime text: \" << std::strlen(mesaj) << \"\\n\"; // 5\nstd::cout << \"Spatiu memorie: \" << sizeof(mesaj) << \"\\n\";    // 6 octeti",
        "prompt": "Scrie caracterul literal special C/C++ care reprezintă terminatorul nul al unui șir C-string.",
        "caseSensitive": True,
        "acceptedAnswers": ["'\\0'"],
        "regexPattern": "^'\\\\0'$",
        "officialSolution": "'\\0'",
        "explanation": "Caracterul '\\0' (backslash zero) reprezintă caracterul nul ce indică finalul unui șir în stil C.",
        "hint": "'\\0'",
        "matchingPairs": [
            {"left": "'\\0'", "right": "Terminatorul nul ce oprește parcurgerea șirului"},
            {"left": "strlen(str)", "right": "Returnează numărul de caractere fără terminatorul nul"},
            {"left": "sizeof(\"Text\")", "right": "Include și octetul '\\0' în mărimea totală"},
            {"left": "strcmp(a, b)", "right": "Compară lexicografic două șiruri de caractere"}
        ],
        "quiz": {
            "question": "Câți octeți de memorie ocupă în binar șirul literal \"C++\" în C/C++?",
            "options": [
                "3 octeți ('C', '+', '+')",
                "4 octeți ('C', '+', '+', și terminatorul nul '\\0')",
                "8 octeți",
                "2 octeți"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-mem-8",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Clasa Modernă std::string și Optimizarea SSO (Small String Optimization)",
        "theory": "Pentru a elimina erorile de alocare și atacurile de tip buffer overflow asociate cu C-strings, C++ oferă clasa standard 'std::string' în header-ul '<string>'. Aceasta gestionează automat alocarea dinamică, redimensionarea, copierea și eliberarea memoriei prin RAII.\n\nUn aspect fascinant al implementărilor moderne de std::string (în GCC libstdc++, Clang libc++ și MSVC) este 'Small String Optimization' (SSO). În mod normal, un string ar aloca memorie pe Heap pentru caracterele sale, necesitând o alocare costisitoare de sistem.\n\nPrin SSO, obiectul std::string conține un mic buffer intern direct pe stivă (uzual de 15-22 de caractere). Dacă textul este scurt, caracterele sunt stocate direct pe stivă în interiorul obiectului, evitând complet alocarea pe Heap și oferind o viteză excepțională.",
        "glossary": [
            {"term": "std::string", "def": "Clasă modernă RAII pentru șiruri de caractere redimensionabile dinamic."},
            {"term": "SSO", "def": "Small String Optimization: stochează textele scurte pe stivă fără alocare pe Heap."},
            {"term": "capacity()", "def": "Numărul de caractere pe care string-ul le poate conține fără o nouă realocare."},
            {"term": "size()", "def": "Numărul curent de caractere din string (fără terminator nul)."}
        ],
        "example": "#include <string>\n#include <iostream>\n\nstd::string nume{\"Alexandru\"}; // Text scurt: ramane pe STIVA prin SSO!\nnume += \" Popescu\";             // Redimensionare automata fara grija de buffer overflow\nstd::cout << nume << \" (Lungime: \" << nume.size() << \")\\n\";",
        "prompt": "Scrie metoda apelată pe un obiect std::string numit text pentru a adăuga caracterul '!' la finalul său (metoda de append a unui caracter).",
        "caseSensitive": True,
        "acceptedAnswers": [
            "text.push_back('!');",
            "text += '!';",
            "text.append(\"!\");"
        ],
        "regexPattern": "^text(\\.(push_back\\s*\\('\\!'\\)|append\\s*\\(\"\\!\"\\))|\\s*\\+=\\s*('!'|\"!\"|))\\s*;?$",
        "officialSolution": "text.push_back('!');",
        "explanation": "Metoda push_back adaugă eficient un caracter la finalul containerului std::string.",
        "hint": "text.push_back('!');",
        "matchingPairs": [
            {"left": "SSO", "right": "Evită alocarea pe Heap pentru texte mici (15-22 caractere)"},
            {"left": "text.size()", "right": "Returnează numărul de caractere din șir"},
            {"left": "text.c_str()", "right": "Returnează un const char* terminat în nul pentru API-uri C"},
            {"left": "text.clear()", "right": "Golește conținutul șirului resetând lungimea la 0"}
        ],
        "quiz": {
            "question": "Ce este 'Small String Optimization' (SSO) în biblioteca standard C++?",
            "options": [
                "O tehnică ce comprimă literele mari în litere mici",
                "O optimizare ce stochează textele scurte direct în obiect pe stivă, evitând Heap-ul",
                "Un algoritm care șterge spațiile albe la salvare",
                "Un sistem de criptare a parolelor scurte"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-mem-9",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Vederi Non-Posesoare: std::string_view C++17 și Zero Alocare",
        "theory": "Până la C++17, scrierea unei funcții care primește un text de citit impunea o dilemă: dacă accepta 'const std::string&', transmiterea unui literal C-string (\"Salut\") forța o alocare temporară de std::string pe Heap. Dacă accepta 'const char*', se pierdea lungimea șirului, necesitând un apel costisitor 'strlen()' O(N).\n\nC++17 a introdus 'std::string_view' în header-ul '<string_view>'. Un string_view este o vedere non-posesoare (non-owning view) peste o secvență contiguă de caractere. În memorie, el este compus simplu din doi membri: un pointer către primul caracter ('const char*') și o lungime ('std::size_t').\n\nDeoarece nu deține și nu alocă memoria, crearea și copierea unui std::string_view este instantanee (O(1)) și nu alocă NICIODATĂ memorie pe Heap. Este tipul ideal pentru parametrii de funcții destinați exclusiv citirii textului.",
        "glossary": [
            {"term": "std::string_view", "def": "Vedere C++17 non-posesoare (pointer + lungime) peste un șir de caractere."},
            {"term": "Non-owning View", "def": "Referință care nu deține memoria și nu eliberează resursa la distrugere."},
            {"term": "Zero-Allocation", "def": "Operație care nu solicită memorie de la sistemul de operare pe Heap."},
            {"term": "Dangling View", "def": "Eroare când string_view indică spre un string temporar distrus din memorie."}
        ],
        "example": "#include <string_view>\n#include <iostream>\n\n// Primeste atat std::string cat si const char* fara nicio alocare:\nvoid log(std::string_view sv) {\n    std::cout << \"Log: \" << sv << \" (caractere: \" << sv.length() << \")\\n\";\n}\n\nlog(\"Mesaj literal C\"); // Zero alocari pe Heap!",
        "prompt": "Scrie antetul unei funcții numite inspecteazaText care primește un parametru de tip std::string_view numit text și returnează void.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "void inspecteazaText(std::string_view text)",
            "void inspecteazaText(std::string_view text);"
        ],
        "regexPattern": "^void\\s+inspecteazaText\\s*\\(\\s*std::string_view\\s+text\\s*\\)\\s*;?$",
        "officialSolution": "void inspecteazaText(std::string_view text)",
        "explanation": "Deoarece std::string_view este mic (16 octeți pe 64-biți), se transmite de regulă prin valoare directă.",
        "hint": "void inspecteazaText(std::string_view text)",
        "matchingPairs": [
            {"left": "std::string_view", "right": "Pointer + dimensiune (non-possesor, O(1) copiere)"},
            {"left": "std::string", "right": "Posesor de memorie cu alocare dinamică și eliberare RAII"},
            {"left": "Dangling view", "right": "Vedere rămasă activă după ce stringul sursă a fost șters"},
            {"left": "sv.substr()", "right": "Creează o sub-vedere instantanee fără copiere de date"}
        ],
        "quiz": {
            "question": "Ce conține intern un obiect std::string_view pe o arhitectură pe 64 de biți?",
            "options": [
                "O copie comprimată a întregului text pe stivă",
                "Un pointer (8 octeți) și o dimensiune de tip size_t (8 octeți)",
                "Un tabel de dispersie (hash map)",
                "Un fișier temporar pe disc"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-mem-10",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "2. Junior",
        "xp": 30,
        "title": "Structuri (struct), Padding de Memorie, Aliniament și sizeof",
        "theory": "O structură ('struct') permite gruparea mai multor variabile de tipuri diferite într-o singură entitate contiguă în memorie. În C++, o structură este identică cu o clasă, cu o singură distincție: toți membrii unei structuri sunt 'public' în mod implicit.\n\nUn aspect critic de hardware este 'Alinierea Memoriei' (Data Alignment). Procesoarele moderne citesc memoria în cuvinte de 4 sau 8 octeți. Pentru ca un întreg pe 4 octeți să fie citit într-un singur ciclu de ceas, adresa sa fizică trebuie să fie divizibilă cu 4.\n\nPentru a asigura această aliniere, compilatorul introduce octeți invizibili de umplutură numiți 'Structure Padding'. De exemplu, o structură cu un char (1 octet) urmat de un int (4 octeți) nu va avea 5 octeți, ci 8 octeți (1 octet char + 3 octeți padding + 4 octeți int).",
        "glossary": [
            {"term": "struct", "def": "Tip compus ce grupează date eterogene cu vizibilitate implicită publică."},
            {"term": "Memory Padding", "def": "Octeți neutri inserați de compilator pentru alinierea eficientă a datelor."},
            {"term": "alignof", "def": "Operator C++11 ce returnează cerința de aliniere în octeți a unui tip."},
            {"term": "Natural Alignment", "def": "Regula hardware conform căreia tipurile de N octeți trebuie plasate la adrese divizibile cu N."}
        ],
        "example": "struct NodSenzor {\n    char status;     // 1 octet\n    // 3 octeti de PADDING inserati automat de compilator!\n    int valoare;     // 4 octeti (trebuie aliniat la multiplu de 4)\n};\n\nstd::cout << sizeof(NodSenzor); // Afiseaza 8, nu 5!",
        "prompt": "Declară o structură C++ numită Punct2D care conține două variabile membre publice de tip double: x și y.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "struct Punct2D { double x; double y; };",
            "struct Punct2D { double x, y; };"
        ],
        "regexPattern": "^struct\\s+Punct2D\\s*\\{\\s*double\\s+(x\\s*,\\s*y|x\\s*;\\s*double\\s+y)\\s*;?\\s*\\}\\s*;$",
        "officialSolution": "struct Punct2D { double x; double y; };",
        "explanation": "Structura se declară cu cuvântul cheie struct, acolade și membrii separați prin punct și virgulă.",
        "hint": "struct Punct2D { double x; double y; };",
        "matchingPairs": [
            {"left": "struct", "right": "Tip de date compus cu membri impliciți publici"},
            {"left": "Padding", "right": "Octeți adăugați de compilator pentru aliniament hardware"},
            {"left": "alignof(T)", "right": "Interoghează cerința de aliniere în octeți a tipului T"},
            {"left": "sizeof(struct)", "right": "Include datele reale plus toți octeții de padding"}
        ],
        "quiz": {
            "question": "De ce o structură compusă dintr-un 'char c;' (1 octet) și un 'int i;' (4 octeți) ocupă 8 octeți în loc de 5?",
            "options": [
                "Deoarece compilatorul adaugă 3 octeți de padding pentru a alinia întregul la o adresă divizibilă cu 4",
                "Deoarece fiecare structură are un antet ascuns de 3 octeți",
                "Este o eroare a compilatorului GCC",
                "Tipul char este transformat automat în int"
            ],
            "correctIndex": 0
        }
    }
]

print(f"Level 2 loaded: {len(level2_lessons)} lessons")
