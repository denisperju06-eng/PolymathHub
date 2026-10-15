# -*- coding: utf-8 -*-
level5_lessons = [
    {
        "id": "cpp-adv-3",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "5. Arhitect / Exemplar",
        "xp": 30,
        "title": "Containere cu Mărime Fixă: std::array<T, N> și Siguranța pe Stivă",
        "theory": "În timp ce 'std::vector' alocă memorie pe Heap, iar tablourile clasice C ('T arr[N]') decad periculos în pointeri fără a-și cunoaște mărimea, C++11 oferă containerul ideal pentru secvențe fixe: 'std::array<T, N>' din header-ul '<array>'.\n\n'std::array' este un container subțire (thin wrapper) peste un tablou C nativ, stocat direct pe stivă (zero alocare dinamică), dar dotat cu întreaga interfață standard STL: 'size()', 'begin()', 'end()', 'at()' și bucle range-based for.\n\nSpre deosebire de tablourile C, 'std::array' NU decade automat în pointeri la transmiterea către funcții, poate fi copiat și atribuit direct prin '=' și oferă metoda 'at(index)' care aruncă excepția 'std::out_of_range' dacă indexul depășește limitele, prevenind breșele de memorie.",
        "glossary": [
            {"term": "std::array<T, N>", "def": "Container STL de mărime fixă alocat direct pe stivă fără overhead pe Heap."},
            {"term": "Stack Allocation", "def": "Alocare ultra-rapidă realizată printr-o simplă mutare a pointerului de stivă (RSP)."},
            {"term": "at() vs []", "def": "Metoda at() verifică limitele la runtime aruncând excepții, pe când [] este neprotejat."},
            {"term": "Non-decay", "def": "Proprietatea std::array de a-și păstra tipul și dimensiunea exactă la transmiterea ca parametru."}
        ],
        "example": "#include <array>\n#include <iostream>\n\nstd::array<int, 4> puncte{10, 20, 30, 40}; // 16 octeti alocati pe STIVA!\n\nstd::cout << \"Numar elemente: \" << puncte.size() << \"\\n\";\nfor (const auto p : puncte) {\n    std::cout << p << \" \";\n}",
        "prompt": "Declară un container std::array de tip double cu dimensiunea fixă de 3 elemente, numit coordonate.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "std::array<double, 3> coordonate;",
            "std::array<double, 3> coordonate{};",
            "std::array<double, 3> coordonate;"
        ],
        "regexPattern": "^std::array<double,\\s*3>\\s+coordonate\\s*(\\{\\s*\\})?\\s*;$",
        "officialSolution": "std::array<double, 3> coordonate;",
        "explanation": "Sintaxa std::array<Tip, Dimensiune> nume; declară un tablou STL alocat pe stivă.",
        "hint": "std::array<double, 3> coordonate;",
        "matchingPairs": [
            {"left": "std::array<T, N>", "right": "Tablou STL de mărime fixă stocat direct pe stivă"},
            {"left": "arr.size()", "right": "Returnează N ca expresie constantă constexpr"},
            {"left": "arr.at(i)", "right": "Acces protejat ce aruncă std::out_of_range la depășire"},
            {"left": "arr.data()", "right": "Returnează un pointer brut T* către bufferul de memorie"}
        ],
        "quiz": {
            "question": "Unde alocă memoria elementelor containerul 'std::array<int, 100>'?",
            "options": [
                "Pe Heap prin operatorul new",
                "Direct pe Stivă (Stack), la fel ca un tablou nativ C",
                "Într-un fișier temporar de sistem",
                "În memoria cache L1 a plăcii video"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-adv-4",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "5. Arhitect / Exemplar",
        "xp": 30,
        "title": "Iteratori STL, Categorii și Revoluția std::ranges în C++20",
        "theory": "Iteratorii reprezintă puntea de legătură fundamentală din STL între containere și algoritmi. Un iterator este o abstractizare a conceptului de pointer: el permite parcurgerea unei secvențe fără a expune structura internă a containerului (fie că este vector contiguu, listă înlănțuită sau arbore).\n\nConvenția universală STL este că intervalele sunt semi-deschise: '[begin, end)'. 'begin()' indică spre primul element valid, iar 'end()' indică spre poziția ILEGALĂ dincolo de ultimul element (one-past-the-end sentinel). Dereferențierea lui end() este Undefined Behavior!\n\nC++20 a adus o revoluție prin biblioteca 'std::ranges'. În loc să transmitem perechi greoaie de iteratori ('std::sort(v.begin(), v.end())'), putem transmite containerul direct ('std::ranges::sort(v)'). Mai mult, mecanismul de Views permite compunerea leneșă (lazy evaluation) prin operatorul pipe '|': 'auto res = v | std::views::filter(par) | std::views::take(5);'.",
        "glossary": [
            {"term": "Iterator", "def": "Obiect ce generalizează un pointer pentru navigarea secvențială a containerelor."},
            {"term": "[begin, end)", "def": "Interval semi-deschis în care end() indică dincolo de ultimul element valid."},
            {"term": "std::ranges", "def": "Modul C++20 ce permite rularea algoritmilor direct pe containere fără iteratori manuali."},
            {"term": "Ranges Pipe (|)", "def": "Sintaxă C++20 pentru înlănțuirea leneșă (lazy) a transformărilor de date."}
        ],
        "example": "#include <vector>\n#include <algorithm>\n#include <ranges>\n#include <iostream>\n\nstd::vector<int> numere{5, 2, 8, 1, 9};\n\n// 1. C++20 Ranges: sortare directa fara v.begin(), v.end():\nstd::ranges::sort(numere);\n\n// 2. Filtrare lenesa cu operatorul pipe |:\nfor (int n : numere | std::views::filter([](int x){ return x % 2 != 0; })) {\n    std::cout << n << \" \"; // Afiseaza doar numerele impare\n}",
        "prompt": "Scrie instrucțiunea modernă C++20 pentru a sorta direct containerul numere folosind std::ranges::sort.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "std::ranges::sort(numere);",
            "std::ranges::sort(numere)"
        ],
        "regexPattern": "^std::ranges::sort\\s*\\(\\s*numere\\s*\\)\\s*;?$",
        "officialSolution": "std::ranges::sort(numere);",
        "explanation": "std::ranges::sort(container) sortează direct întreaga secvență fără a specifica manual begin() și end().",
        "hint": "std::ranges::sort(numere);",
        "matchingPairs": [
            {"left": "v.begin()", "right": "Iterator către primul element valid din container"},
            {"left": "v.end()", "right": "Iterator santinelă poziționat după ultimul element"},
            {"left": "std::ranges::sort", "right": "Sortare directă a containerului fără perechi de iteratori"},
            {"left": "std::views::filter", "right": "Vedere leneșă (lazy) ce filtrează elementele la cerere"}
        ],
        "quiz": {
            "question": "Ce element indică iteratorul returnat de metoda 'container.end()'?",
            "options": [
                "Ultimul element din container",
                "Poziția imediat următoare de după ultimul element (one-past-the-end)",
                "Primul element din container",
                "Nodul rădăcină al arborelui"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-adv-5",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "5. Arhitect / Exemplar",
        "xp": 30,
        "title": "Algoritmi STL: std::sort, std::find_if și Funcții Predicat",
        "theory": "Header-ul '<algorithm>' oferă peste 100 de algoritmi ultra-optimizați care operează peste secvențe delimitate de iteratori. Regula de bază în Modern C++ este: 'Nu scrie bucle for manuale dacă există deja un algoritm STL standard'.\n\n'std::sort' implementează IntroSort (o combinație hibridă de QuickSort, HeapSort și InsertionSort), garantând o complexitate de O(N log N) în cel mai defavorabil caz, fără degradare pătratică.\n\nAlgoritmii precum 'std::find_if' și 'std::count_if' primesc un 'Predicat' (o funcție sau expresie lambda care returnează bool). 'std::find_if(begin, end, predicat)' scanează secvența și returnează un iterator către primul element care satisface condiția predicatului (sau 'end' dacă niciun element nu o îndeplinește).",
        "glossary": [
            {"term": "Algoritmi STL", "def": "Funcții generice ce decuplează logica de procesare de structura containerului."},
            {"term": "Predicat", "def": "Funcție sau obiect invocabil ce primește un element și returnează o valoare booleană."},
            {"term": "IntroSort", "def": "Algoritmul hibrid din spatele lui std::sort ce garantează O(N log N)."},
            {"term": "std::find_if", "def": "Algoritm de căutare liniară ce returnează primul iterator ce satisface un predicat."}
        ],
        "example": "#include <vector>\n#include <algorithm>\n#include <iostream>\n\nstd::vector<int> scoruri{45, 88, 92, 60};\n\n// Gaseste primul scor de trecere (>= 50):\nauto it = std::find_if(scoruri.begin(), scoruri.end(), [](int s) {\n    return s >= 50;\n});\n\nif (it != scoruri.end()) {\n    std::cout << \"Gasit: \" << *it << \"\\n\"; // 88\n}",
        "prompt": "Scrie comanda clasică STL pentru a sorta întregul vector numere în ordine crescătoare folosind std::sort cu begin() și end().",
        "caseSensitive": True,
        "acceptedAnswers": [
            "std::sort(numere.begin(), numere.end());",
            "std::sort(numere.begin(), numere.end())"
        ],
        "regexPattern": "^std::sort\\s*\\(\\s*numere\\.begin\\(\\)\\s*,\\s*numere\\.end\\(\\)\\s*\\)\\s*;?$",
        "officialSolution": "std::sort(numere.begin(), numere.end());",
        "explanation": "std::sort primește iteratorul de început și cel de final pentru a ordona elementele.",
        "hint": "std::sort(numere.begin(), numere.end());",
        "matchingPairs": [
            {"left": "std::sort", "right": "Sortează elementele în O(N log N) prin IntroSort"},
            {"left": "std::find_if", "right": "Găsește primul element care îndeplinește o condiție"},
            {"left": "std::transform", "right": "Aplică o funcție fiecărui element și stochează rezultatul"},
            {"left": "std::accumulate", "right": "Calculează suma sau reducerea cumulativă a elementelor"}
        ],
        "quiz": {
            "question": "Ce returnează funcția 'std::find_if(v.begin(), v.end(), p)' dacă niciun element nu satisface predicatul 'p'?",
            "options": [
                "nullptr",
                "Iteratorul v.end()",
                "Aruncă o excepție de tip std::runtime_error",
                "Numărul 0"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-adv-6",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "5. Arhitect / Exemplar",
        "xp": 30,
        "title": "Programare Generică: Funcții Template și Deducerea Tipurilor",
        "theory": "În C++, 'Template-urile' (șabloanele) reprezintă pilonul fundamental al programării generice și al metaprogramării. În loc să scrii funcții separate pentru 'int', 'double', 'std::string' și tipuri personalizate, un template permite definirea unei singure rețete generice parametrizate pe baza tipurilor de date ('template <typename T>').\n\nTemplate-urile sunt evaluate exclusiv la momentul compilării prin procesul de 'Instanțiere a Template-ului' (Template Instantiation). Când apelezi 'maxim(5, 10)', compilatorul generează în binar o funcție concretă cu semnătura 'int maxim(int, int)', iar când apelezi 'maxim(2.5, 4.1)', generează o a doua funcție nativă 'double maxim(double, double)'.\n\nDatorită mecanismului de 'Template Argument Deduction' (TAD), apelantul nu trebuie să specifice manual tipul ('maxim<int>(a, b)'); compilatorul deduce automat tipul 'T' din argumentele transmise, oferind flexibilitate maximă cu zero cost de performanță la rulare.",
        "glossary": [
            {"term": "template <typename T>", "def": "Directiva ce declară un parametru generic de tip pentru funcție sau clasă."},
            {"term": "Instanțiere", "def": "Procesul de generare la compilare a codului binar concret pentru un tip specific T."},
            {"term": "Type Deduction", "def": "Capacitatea compilatorului de a deduce automat tipul T din valorile parametrilor."},
            {"term": "Specializare Template", "def": "Furnizarea unei implementări particulare pentru un tip anume (ex: T = bool)."}
        ],
        "example": "template <typename T>\nT maxim(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint x = maxim(10, 20);       // Compilatorul instantiaza maxim<int>\ndouble y = maxim(3.14, 2.71); // Compilatorul instantiaza maxim<double>",
        "prompt": "Scrie antetul de declarație a unui șablon de funcție cu un singur parametru generic de tip numit T (folosind cuvântul cheie typename).",
        "caseSensitive": True,
        "acceptedAnswers": [
            "template <typename T>",
            "template<typename T>",
            "template <class T>",
            "template<class T>"
        ],
        "regexPattern": "^template\\s*<\\s*(typename|class)\\s+T\\s*>$",
        "officialSolution": "template <typename T>",
        "explanation": "Sintaxa template <typename T> introduce un parametru de tip generic aplicat funcției sau clasei următoare.",
        "hint": "template <typename T>",
        "matchingPairs": [
            {"left": "template <typename T>", "right": "Declară un șablon generic parametrizat pe tipul T"},
            {"left": "Instanțiere", "right": "Compilatorul generează codul nativ pentru tipul concret"},
            {"left": "TAD", "right": "Deducerea automată a tipului T din argumentele apelului"},
            {"left": "Zero runtime overhead", "right": "Codul generat este la fel de rapid ca o funcție scrisă manual"}
        ],
        "quiz": {
            "question": "Când este generat codul binar executabil pentru o funcție template C++?",
            "options": [
                "La momentul rulării programului (JIT compilation)",
                "La timpul compilării (Compile-time), doar pentru tipurile concrete cu care a fost apelat șablonul",
                "Niciodată, template-urile sunt interpretate",
                "La încărcarea în memoria RAM a sistemului de operare"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-adv-7",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "5. Arhitect / Exemplar",
        "xp": 30,
        "title": "Concepte și Constrângeri C++20 (Concepts & requires clause)",
        "theory": "Timp de decenii, cel mai mare coșmar al programatorilor C++ a fost reprezentat de mesajele de eroare ale template-urilor: o singură neconcordanță de tip într-un algoritm generic producea pagini întregi de erori criptice în cascadă din cauza substituției eșuate (SFINAE).\n\nC++20 a rezolvat definitiv această problemă prin introducerea 'Conceptelor' (Concepts) în header-ul '<concepts>'. Un concept este un predicat evaluat la compile-time care specifică constrângerile pe care un tip 'T' trebuie să le respecte (de exemplu: dacă tipul este incrementabil, serializabil sau dacă suportă operatorul '<').\n\nPrin adăugarea clauzei 'requires' sau folosirea conceptelor direct în semnătură ('void sorteaza(std::sortable auto& container);'), compilatorul respinge instantaneu tipurile incompatibile cu un mesaj de eroare scurt și clar ('type does not satisfy constraint').",
        "glossary": [
            {"term": "concept", "def": "Constrângere numită C++20 evaluată la compile-time ce validează proprietățile unui tip."},
            {"term": "requires clause", "def": "Clauză ce specifică cerințele operaționale sau sintactice obligatorii pentru un șablon."},
            {"term": "<concepts>", "def": "Header C++20 ce oferă concepte standard (std::integral, std::floating_point)."},
            {"term": "SFINAE", "def": "Mecanismul vechi și complex C++ de eliminare a erorilor de substituție."}
        ],
        "example": "#include <concepts>\n\n// Constrangere directa prin concept standard:\ntemplate <std::integral T>\nT calculeazaRest(T a, T b) {\n    return a % b;\n}\n\ncalculeazaRest(10, 3);    // Valid: int este integral\n// calculeazaRest(4.5, 1.2); // EROARE IMEDIATA LIZIBILA: double nu este std::integral!",
        "prompt": "Scrie antetul de șablon pentru funcția care constrânge tipul T să respecte conceptul standard std::integral folosind sintaxa directă: template <std::integral T>.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "template <std::integral T>",
            "template<std::integral T>"
        ],
        "regexPattern": "^template\\s*<\\s*std::integral\\s+T\\s*>$",
        "officialSolution": "template <std::integral T>",
        "explanation": "În C++20, numele conceptului (std::integral) poate înlocui direct cuvântul cheie generic typename.",
        "hint": "template <std::integral T>",
        "matchingPairs": [
            {"left": "template <std::integral T>", "right": "Acceptă doar tipuri întregi (int, long, short etc.)"},
            {"left": "requires", "right": "Introduce condiții logice suplimentare pentru template"},
            {"left": "std::floating_point", "right": "Concept standard pentru tipuri cu virgulă mobilă (float, double)"},
            {"left": "Compile-time error", "right": "Eroare scurtă și clară generată imediat dacă tipul e invalid"}
        ],
        "quiz": {
            "question": "Ce problemă majoră a template-urilor tradiționale C++ este rezolvată de 'Concepts' în C++20?",
            "options": [
                "Crește viteza conexiunii la internet",
                "Elimină miile de linii de erori criptice de compilare, oferind mesaje clare de neconcordanță",
                "Permite rularea codului C++ fără compilare",
                "Face ca toate variabilele să devină dinamice la runtime"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-adv-8",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "5. Arhitect / Exemplar",
        "xp": 30,
        "title": "Expresii Lambda Moderne: Clauze de Captură și Specificatorul mutable",
        "theory": "Expresiile Lambda (funcții anonime introduse în C++11) permit definirea de logică invocabilă direct la locul utilizării ('in-place'). Sintaxa de bază este '[captura](parametri) -> return { corp };'.\n\n'Clauza de Captură' ('[]') definește modul în care lambda accesează variabilele din domeniul său înconjurător: 1. '[]' nu capturează nimic. 2. '[=]' capturează toate variabilele utilizate prin copiere (valoare). 3. '[&]' capturează toate variabilele prin referință. 4. C++14 a adus 'Init Capture' ('[p = std::move(ptr)]'), permițând capturarea obiectelor care nu pot fi copiate (move-only precum unique_ptr).\n\nImplicit, variabilele capturate prin valoare sunt imutabile (const) în interiorul corpului lambda. Dacă este necesară modificarea copiei locale a unei variabile capturate, lambda trebuie marcată explicit cu cuvântul cheie 'mutable'.",
        "glossary": [
            {"term": "Lambda Expression", "def": "Funcție anonimă locală compilată ca un obiect funcțional (functor)."},
            {"term": "Capture List ([])", "def": "Specifică variabilele externe accesibile și dacă sunt capturate prin copie sau referință."},
            {"term": "mutable", "def": "Specificator ce permite modificarea copiilor locale ale variabilelor capturate prin valoare."},
            {"term": "Init Capture", "def": "Sintaxă C++14 ce permite inițializarea și mutarea resurselor în starea lambda."}
        ],
        "example": "#include <iostream>\n\nint factor{5};\n\n// Lambda cu captare explicita prin valoare si specificator mutable:\nauto multiplicator = [factor](int x) mutable {\n    factor += 2; // Permis datorita lui mutable!\n    return x * factor;\n};\n\nstd::cout << multiplicator(10); // 70 (10 * 7)\nstd::cout << factor; // 5 (variabila externa originala nu a fost afectata!)",
        "prompt": "Scrie o expresie lambda anonimă C++ care primește un întreg int x și returnează x * 2 (fără a captura nimic din exterior []).",
        "caseSensitive": True,
        "acceptedAnswers": [
            "[](int x) { return x * 2; }",
            "[](int x){ return x * 2; }",
            "[](int x) -> int { return x * 2; }"
        ],
        "regexPattern": "^\\[\\]\\s*\\(\\s*int\\s+x\\s*\\)(\\s*->\\s*int)?\\s*\\{\\s*return\\s+x\\s*\\*\\s*2\\s*;\\s*\\}$",
        "officialSolution": "[](int x) { return x * 2; }",
        "explanation": "Expresia lambda [](int x) { return x * 2; } definește funcția anonimă completă.",
        "hint": "[](int x) { return x * 2; }",
        "matchingPairs": [
            {"left": "[&]", "right": "Capturează toate variabilele externe prin referință"},
            {"left": "[=]", "right": "Capturează toate variabilele externe prin copiere"},
            {"left": "[x = std::move(p)]", "right": "Transferă proprietatea unui obiect move-only în lambda"},
            {"left": "mutable", "right": "Permite modificarea variabilelor capturate prin valoare"}
        ],
        "quiz": {
            "question": "De ce este necesar specificatorul 'mutable' pe o expresie lambda dacă vrei să modifici o variabilă capturată prin valoare [x]?",
            "options": [
                "Pentru a forța execuția pe mai multe fire de execuție",
                "Deoarece operatorul operator() al unei lambda este generat implicit ca fiind const",
                "Pentru a preveni scurgerile de memorie",
                "Nu este necesar, variabilele pot fi modificate oricând"
            ],
            "correctIndex": 1
        }
    },
    {
        "id": "cpp-adv-9",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "5. Arhitect / Exemplar",
        "xp": 30,
        "title": "Gestiunea Excepțiilor: try, catch, Ierarhia std::exception și noexcept",
        "theory": "Tratarea excepțiilor în C++ separă fluxul normal de execuție de logica de gestiune a erorilor critice. Când o funcție întâmpină o stare imposibil de remediat local, ea 'aruncă' o excepție folosind cuvântul cheie 'throw'.\n\nExecuția întrerupe imediat blocul curent și începe procesul de 'Stack Unwinding' (Derularea Stivei): runtime-ul C++ parcurge stiva de apeluri înapoi, apelând în mod garantat destructorii tuturor obiectelor locale create, prevenind scurgerile de resurse (dacă se respectă principiul RAII).\n\nExcepția este interceptată într-un bloc 'try-catch'. Se recomandă prinderea excepțiilor întotdeauna prin referință constantă ('const std::exception& e') pentru a preveni 'Object Slicing'. Specificatorul 'noexcept' informează compilatorul că funcția garantează că nu va arunca nicio excepție; dacă o funcție noexcept aruncă totuși, programul apelează instantaneu 'std::terminate()'.",
        "glossary": [
            {"term": "Stack Unwinding", "def": "Procesul automat de apel al destructorilor obiectelor de pe stivă la aruncarea unei excepții."},
            {"term": "std::exception", "def": "Clasa de bază standard cu metoda virtuală what() pentru descrierea erorilor."},
            {"term": "noexcept", "def": "Garanție la compilare că o funcție nu aruncă excepții, permițând optimizări de mutare."},
            {"term": "Object Slicing", "def": "Trunchierea datelor clasei derivate cauzată de prinderea erorii prin valoare în loc de referință."}
        ],
        "example": "#include <stdexcept>\n#include <iostream>\n\ndouble imparte(double a, double b) {\n    if (b == 0.0) {\n        throw std::invalid_argument(\"Impartire la zero interzisa!\");\n    }\n    return a / b;\n}\n\ntry {\n    double r = imparte(10.0, 0.0);\n} catch (const std::exception& e) { // Prindere sigura prin const&\n    std::cerr << \"Eroare: \" << e.what() << \"\\n\";\n}",
        "prompt": "Scrie blocul catch care interceptează orice excepție derivată din clasa standard std::exception prin referință constantă numită e.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "catch (const std::exception& e)",
            "catch (std::exception const& e)",
            "catch (const std::exception &e)"
        ],
        "regexPattern": "^catch\\s*\\(\\s*(const\\s+std::exception\\s*&|std::exception\\s+const\\s*&)\\s*e\\s*\\)$",
        "officialSolution": "catch (const std::exception& e)",
        "explanation": "Prinderea prin const std::exception& e previne trunchierea obiectelor polimorfice de eroare (object slicing).",
        "hint": "catch (const std::exception& e)",
        "matchingPairs": [
            {"left": "throw", "right": "Aruncă o excepție semnalând o eroare critică"},
            {"left": "catch (const std::exception&)", "right": "Prinde excepția polimorfic fără object slicing"},
            {"left": "Stack Unwinding", "right": "Distrugerea sigură a obiectelor de pe stivă în timpul excepției"},
            {"left": "noexcept", "right": "Garantează că funcția nu aruncă excepții (apelează std::terminate)"}
        ],
        "quiz": {
            "question": "De ce este crucial ca destructorii claselor C++ să fie implicit marcați ca 'noexcept'?",
            "options": [
                "Deoarece o excepție aruncată în timpul unui Stack Unwinding activ duce la prăbușirea instantanee a aplicației (std::terminate)",
                "Pentru a preveni blocarea ecranului pe Windows",
                "Pentru a mări dimensiunea stivei",
                "Este o cerință a compilatorului Clang"
            ],
            "correctIndex": 0
        }
    }
]

print(f"Level 5 loaded: {len(level5_lessons)} lessons")
