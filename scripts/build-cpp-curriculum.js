// Generator modular pentru curriculum-cpp.js
const fs = require("fs");
const path = require("path");

const lessonsPart1 = [
  {
    id: "cpp-fund-1",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Structura Programului C++, Funcția main() și Pipeline-ul de Compilare",
    theory: "Orice program C sau C++ începe execuția dintr-un punct unic de intrare: funcția globală 'main()'. Standardul C++ impune ca 'main()' să returneze un întreg 'int' către sistemul de operare: valoarea 0 (sau EXIT_SUCCESS) semnalează execuția fără erori, în timp ce orice alt număr indică un cod de eroare.\n\nTransformarea codului C++ într-un binar executabil nativ parcurge 4 etape fundamentale: 1. Preprocesarea (expandarea directivelor ce încep cu '#', precum #include), 2. Compilarea (translatarea în instrucțiuni de asamblare), 3. Asamblarea (producerea fișierelor obiect binare .o/.obj) și 4. Link-editarea (combinarea codului propriu cu runtime-ul C++ și bibliotecile de sistem).\n\nÎn mediile de producție, compilarea se realizează întotdeauna cu flag-uri de diagnostic strict (ex: g++ -Wall -Wextra -Wpedantic -O2), prevenind comportamentele nedefinite (Undefined Behavior).",
    glossary: [
      { term: "main()", def: "Punctul standard de intrare în execuția oricărui binar C++." },
      { term: "Preprocesor", def: "Etapa care procesează macrourile și directivele antet înainte de compilare." },
      { term: "Linker", def: "Utilitarul care rezolvă referințele externe și produce fișierul executabil." },
      { term: "Exit Code", def: "Cod numeric transmis sistemului de operare la finalul procesului." }
    ],
    example: `#include <iostream>

int main() {
    std::cout << "Sistem C++ functional!\\n";
    return 0; // Succes catre SO
}`,
    prompt: "Scrie semnătura completă a funcției standard main fără parametri, care returnează un întreg sistemului de operare.",
    caseSensitive: true,
    acceptedAnswers: ["int main()", "int main(void)"],
    regexPattern: "^int\\s+main\\s*\\(\\s*(void)?\\s*\\)\\s*;?$",
    officialSolution: "int main()",
    explanation: "Standardul impune ca funcția principală să returneze int și să se numească main.",
    hint: "int main()",
    matchingPairs: [
      { left: "int main()", right: "Punctul de intrare cerut de standardul C++" },
      { left: "return 0;", right: "Indică SO că execuția s-a terminat cu succes" },
      { left: "Preprocesor", right: "Expandează directivele ce încep cu caracterul #" },
      { left: "Linker", right: "Combină fișierele obiect într-un binar final" }
    ],
    quiz: {
      question: "Care este tipul de returnare obligatoriu al funcției main() conform standardului ISO C++?",
      options: [
        "void (deoarece programul se oprește oricum la final)",
        "int (comunică codul de stare către sistemul de operare)",
        "bool (true pentru succes, false pentru eșec)",
        "std::string (pentru mesajul de încheiere)"
      ],
      correctIndex: 1
    }
  },
  {
    id: "cpp-fund-2",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Inițializarea Uniformă (Brace Initialization) și Prevenirea Narrowing",
    theory: "În C++ clasic existau multiple moduri ambigue de inițializare: prin atribuire (int x = 5;), directă cu paranteze rotunde (int x(5);) sau variabila era lăsată neinițializată (int x;). Variabilele neinițializate conțin valori arbitrare reziduale pe stivă ('garbage values'), accesul lor ducând la Undefined Behavior (UB).\n\nC++11 a unificat acest proces prin 'Brace Initialization' (inițializare cu acolade: int x{5};). Când acoladele sunt goale (int x{};), se aplică garantat 'zero-initialization' (0 pentru întregi, 0.0 pentru reale, nullptr pentru pointeri, false pentru bool).\n\nUn avantaj uriaș este prevenirea automată a 'narrowing conversions' (conversii care pierd precizie). De exemplu, 'int x = 7.9;' compilează silențios trunchind la 7, pe când 'int x{7.9};' generează eroare de compilare directă.",
    glossary: [
      { term: "Brace Init", def: "Sintaxa {val} introdusă în C++11 pentru inițializare sigură și uniformă." },
      { term: "Zero-Init", def: "Inițializarea cu acolade goale {} care setează automat valoarea zero/fals." },
      { term: "Narrowing", def: "Conversie implicită periculoasă cu pierdere de octeți sau precizie." },
      { term: "Garbage Value", def: "Valoare reziduală nespecificată dintr-o zonă de memorie neinițializată." }
    ],
    example: `int portCorect{8080}; // Sigur, valoare explicita
int contorZero{};     // Zero-initializat: devine 0 garantat
// int eroare{3.14};  // EROARE DE COMPILARE: Narrowing interzis!`,
    prompt: "Declară o variabilă de tip int numită port folosind inițializarea uniformă cu acolade pentru valoarea 8080.",
    caseSensitive: true,
    acceptedAnswers: ["int port{8080};", "int port = {8080};"],
    regexPattern: "^int\\s+port\\s*=?\\s*\\{\\s*8080\\s*\\}\\s*;$",
    officialSolution: "int port{8080};",
    explanation: "Sintaxa directă cu acolade int port{8080}; este recomandată de C++ Core Guidelines.",
    hint: "int port{8080};",
    matchingPairs: [
      { left: "int x{10};", right: "Inițializare uniformă sigură fără narrowing" },
      { left: "int x{};", right: "Zero-inițializare garantată (valoarea 0)" },
      { left: "int x;", right: "Variabilă neinițializată cu date reziduale" },
      { left: "Narrowing", right: "Conversie trunchiată blocată de acolade" }
    ],
    quiz: {
      question: "Ce se întâmplă dacă scrii 'int x{3.14};' într-un compilator modern C++?",
      options: [
        "Se compilează și x ia valoarea 3",
        "Compilatorul emite eroare deoarece inițializarea cu acolade interzice narrowing",
        "x devine 0",
        "Valoarea este convertită automat la tipul float"
      ],
      correctIndex: 1
    }
  },
  {
    id: "cpp-fund-3",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Fluxuri Standard I/O: std::cout, std::cin și std::endl vs '\\n'",
    theory: "Biblioteca '<iostream>' oferă obiectele fundamentale de intrare/ieșire din C++: 'std::cout' (standard output bufferat), 'std::cin' (standard input) și 'std::cerr' (standard error nebufferat).\n\nDatele sunt trimise prin operatorul de inserție '<<' și extrase prin operatorul '>>'. Operatorul de extracție '>>' citește secvențial, ignorând automat spațiile albe (whitespace, tab, newline).\n\nO distincție esențială de performanță este între '\\n' și 'std::endl'. '\\n' adaugă un caracter newline în buffer-ul de memorie, în timp ce 'std::endl' introduce un newline și FORȚEAZĂ o golire imediată a buffer-ului (flush). În bucle intensive, folosirea 'std::endl' încetinește execuția de zeci de ori din cauza apelurilor repetate de sistem.",
    glossary: [
      { term: "std::cout", def: "Fluxul standard de ieșire bufferat către consolă." },
      { term: "std::cin", def: "Fluxul standard de citire a datelor de la tastatură." },
      { term: "std::endl", def: "Inserează newline și forțează flush-ul imediat al bufferului." },
      { term: "Buffer Flush", def: "Operația de scriere a datelor din RAM pe ecran sau disc." }
    ],
    example: `#include <iostream>

int main() {
    int id{};
    std::cout << "Introdu ID: ";
    std::cin >> id;
    std::cout << "ID inregistrat: " << id << "\\n";
    return 0;
}`,
    prompt: "Scrie instrucțiunea C++ pentru a afișa textul 'Ready' urmat de un caracter newline '\\n' folosind std::cout.",
    caseSensitive: true,
    acceptedAnswers: ["std::cout << \"Ready\\n\";", "std::cout << \"Ready\" << '\\n';", "std::cout << \"Ready\" << \"\\n\";"],
    regexPattern: "^std::cout\\s*<<\\s*\"Ready(\\\\n)?\"(\\s*<<\\s*('\\\\n'|\"\\\\n\"))?\\s*;$",
    officialSolution: "std::cout << \"Ready\\n\";",
    explanation: "Se utilizează std::cout cu operatorul << și șirul de caractere conținând \\n.",
    hint: "std::cout << \"Ready\\n\";",
    matchingPairs: [
      { left: "<<", right: "Operator de inserție în stream (ieșire)" },
      { left: ">>", right: "Operator de extracție din stream (intrare)" },
      { left: "\\n", right: "Newline rapid în buffer fără flush forțat" },
      { left: "std::cerr", right: "Stream pentru erori critice nebufferate" }
    ],
    quiz: {
      question: "De ce este preferat '\\n' în locul lui 'std::endl' în codul de performanță?",
      options: [
        "std::endl nu este disponibil în C++20",
        "std::endl forțează flush-ul buffer-ului la fiecare apel, blocând CPU-ul",
        "'\\n' funcționează doar cu tipul std::string",
        "std::endl consumă memorie pe Heap"
      ],
      correctIndex: 1
    }
  },
  {
    id: "cpp-fund-4",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Tipuri cu Lățime Fixă: std::int32_t, std::uint64_t și Siguranța Memoriei",
    theory: "În C++ nativ, dimensiunea tipurilor precum 'int' sau 'long' variază în funcție de arhitectură și compilator: pe 16 biți un int are 2 octeți, iar pe 64 de biți poate avea 4 octeți. Această ambiguitate provoacă breșe de securitate și incompatibilități între sisteme.\n\nPentru a garanta portabilitatea binară, header-ul '<cstdint>' oferă tipuri întregi cu lățime fixă garantată: 'std::int8_t', 'std::int16_t', 'std::int32_t' și 'std::int64_t' (cu semn), respectiv 'std::uint8_t', 'std::uint16_t', 'std::uint32_t' și 'std::uint64_t' (fără semn).\n\nTotodată, tipul 'std::size_t' din '<cstddef>' este tipul fără semn garantat de standard să poată stoca dimensiunea oricărui obiect alocabil pe arhitectura curentă, fiind tipul returnat de operatorul 'sizeof'.",
    glossary: [
      { term: "<cstdint>", def: "Header standard ce definește întregi cu lățime fixă în biți." },
      { term: "std::int32_t", def: "Întreg cu semn pe exact 32 de biți (4 octeți) pe orice platformă." },
      { term: "std::uint64_t", def: "Întreg fără semn pe exact 64 de biți (8 octeți)." },
      { term: "std::size_t", def: "Tip întreg fără semn pentru indexare și dimensiuni de memorie." }
    ],
    example: `#include <cstdint>
#include <cstddef>

std::int32_t packetId{1024};       // Exact 4 octeti cu semn
std::uint64_t largeCounter{50000}; // Exact 8 octeti fara semn
std::size_t bytes = sizeof(packetId); // 4 octeti`,
    prompt: "Declară o variabilă de tip std::uint32_t cu numele ipAddress inițializată uniform cu 0.",
    caseSensitive: true,
    acceptedAnswers: ["std::uint32_t ipAddress{0};", "std::uint32_t ipAddress{};"],
    regexPattern: "^std::uint32_t\\s+ipAddress\\s*\\{\\s*0?\\s*\\}\\s*;$",
    officialSolution: "std::uint32_t ipAddress{0};",
    explanation: "Se declară tipul fix pe 32 biți fără semn std::uint32_t urmat de identificator și {0}.",
    hint: "std::uint32_t ipAddress{0};",
    matchingPairs: [
      { left: "std::int32_t", right: "Exact 32 de biți cu semn (-2 miliarde la +2 miliarde)" },
      { left: "std::uint64_t", right: "Exact 64 de biți fără semn (0 la 18 trilioane)" },
      { left: "std::size_t", right: "Tip fără semn folosit pentru dimensiuni și indexare" },
      { left: "sizeof", right: "Operator ce returnează dimensiunea în octeți la compilare" }
    ],
    quiz: {
      question: "Care este beneficiul utilizării std::int32_t în locul tipului clasic int?",
      options: [
        "Permite rularea fără sistem de operare",
        "Garantează exact 32 de biți indiferent dacă rulează pe 32 sau 64 de biți",
        "Consumă de două ori mai puțină memorie pe stivă",
        "Nu poate produce overflow niciodată"
      ],
      correctIndex: 1
    }
  },
  {
    id: "cpp-fund-5",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Constante și Calcule la Compilare: const vs constexpr",
    theory: "În C++, 'const' indică faptul că o variabilă este imutabilă după inițializare. Totuși, o variabilă 'const' poate fi inițializată cu o valoare calculată la runtime (de exemplu rezultatul citirii din fișier sau ora de sistem).\n\nÎncepând cu C++11, cuvântul cheie 'constexpr' (constant expression) impune ca valoarea să poată fi evaluată strict la momentul compilării (compile-time). Dacă o expresie marcată cu constexpr nu poate fi calculată la compilare, codul generează eroare.\n\nFuncțiile constexpr pot fi rulate direct de compilator. Acest mecanism stă la baza principiului 'Zero-Overhead': tabelele matematice, configurările de rețea și constantele sistemului sunt precalculate la compilare, consumând zero cicluri de CPU la rulare.",
    glossary: [
      { term: "const", def: "Specificator de imutabilitate ce poate fi inițializat la runtime sau compile-time." },
      { term: "constexpr", def: "Garantează evaluarea expresiei sau funcției în timpul compilării." },
      { term: "Compile-Time", def: "Etapa de construire a binarului în care se pot rezolva calcule statice." },
      { term: "Zero-Overhead", def: "Principiul că abstractizările din limbaj nu adaugă cost de performanță la rulare." }
    ],
    example: `const int runtimeVal = rand();      // Valid la runtime
constexpr int BUFFER_SIZE{1024 * 4}; // Calculat la compilare: 4096
constexpr int dubleaza(int n) { return n * 2; }
constexpr int val = dubleaza(5);    // 10 evaluat la build time`,
    prompt: "Declară o constantă evaluată la compilare folosind constexpr, de tip int, numită MAX_USERS, cu valoarea 500.",
    caseSensitive: true,
    acceptedAnswers: ["constexpr int MAX_USERS{500};", "constexpr int MAX_USERS = 500;"],
    regexPattern: "^constexpr\\s+int\\s+MAX_USERS\\s*(=|\\{)\\s*500\\s*\\}?\\s*;$",
    officialSolution: "constexpr int MAX_USERS{500};",
    explanation: "Se utilizează constexpr int MAX_USERS{500}; pentru evaluare garantată la compilare.",
    hint: "constexpr int MAX_USERS{500};",
    matchingPairs: [
      { left: "const", right: "Imutabil după atribuire (poate fi runtime)" },
      { left: "constexpr", right: "Valoare calculată strict la timpul compilării" },
      { left: "consteval", right: "Funcție C++20 forțată să ruleze DOAR la compile-time" },
      { left: "Literal", right: "Valoare directă scrisă în cod (ex: 42, 3.14)" }
    ],
    quiz: {
      question: "Care este diferența esențială dintre 'const' și 'constexpr'?",
      options: [
        "const alocă memorie dinamică, constexpr pe stivă",
        "constexpr garantează că expresia este calculată la compilare",
        "const este compatibil doar cu C, nu și cu C++",
        "constexpr nu permite parametri întregi"
      ],
      correctIndex: 1
    }
  }
];

console.log("Partea 1 configurata: " + lessonsPart1.length + " capitole");
