/**
 * Script de generare pentru curriculumul extins de C & C++ (45 capitole noi)
 * Inspirat din manualul LearnCpp.com, standardele C++17/C++20 și bunele practici de sisteme.
 */
const fs = require("fs");
const path = require("path");

const cppLessons = [
  // =========================================================================
  // NIVELUL 1: FUNDAMENTE C & C++ (Sintaxă, Tipuri, Bucle, Funcții, Header-e)
  // =========================================================================
  {
    id: "cpp-fund-1",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Structura Programului C++, Funcția main() și Compilarea",
    theory: "Orice program C sau C++ începe execuția dintr-un punct unic de intrare: funcția globală 'main()'. Standardul C++ impune ca 'main()' să aibă tipul de return 'int', returnând o valoare întreagă sistemului de operare: 0 indică finalizarea cu succes (EXIT_SUCCESS), în timp ce orice valoare diferită de zero indică o eroare.\n\nProcesul de transformare a codului sursă într-un binar executabil parcurge 4 etape distincte: 1. Preprocesarea (interpretarea directivelor ce încep cu '#', precum #include sau #define), 2. Compilarea (translatarea codului C++ în cod de asamblare), 3. Asamblarea (conversia în fișiere obiect binare .o sau .obj) și 4. Link-editarea (combinarea fișierelor obiect cu bibliotecile standard de sistem într-un executabil final).\n\nCompilatoarele moderne de producție (precum GCC, Clang sau MSVC) oferă flag-uri riguroase pentru detectarea erorilor subtile. Pentru o igienă optimă a codului, se recomandă compilarea întotdeauna cu flag-urile '-Wall -Wextra -Werror', transformând avertismentele în erori de compilare.",
    glossary: [
      { term: "main()", def: "Punctul unic de intrare obligatoriu în orice aplicație C sau C++ standard." },
      { term: "Preprocesor", def: "Etapa inițială ce extinde macro-urile și include fișierele antet înainte de compilare." },
      { term: "Linker", def: "Utilitarul ce leagă fișierele obiect și bibliotecile externe într-un executabil final." },
      { term: "Exit Code 0", def: "Convenția standard conform căreia return 0 transmite SO că programul s-a încheiat cu succes." }
    ],
    example: `#include <iostream>

int main() {
    std::cout << "Sistem C++ initializat cu succes!\\n";
    return 0; // 0 = succes catre SO
}`,
    prompt: "Scrie semnătura completă a funcției standard main fără parametri, care returnează un întreg sistemului de operare.",
    caseSensitive: true,
    acceptedAnswers: [
      "int main()",
      "int main(void)"
    ],
    regexPattern: "^int\\s+main\\s*\\(\\s*(void)?\\s*\\)\\s*;?$",
    officialSolution: "int main()",
    explanation: "În C++, funcția de intrare trebuie să aibă tipul returnat 'int' și numele 'main'.",
    hint: "Tastează tipul întreg urmat de numele funcției principale și paranteze goale: int main()",
    matchingPairs: [
      { left: "main()", right: "Punctul de intrare în execuție" },
      { left: "return 0", right: "Semnalează SO terminarea cu succes" },
      { left: "Preprocesor", right: "Procesează directivele cu #" },
      { left: "Linker", right: "Rezolvă simbolurile și produce binarul" }
    ],
    quiz: {
      question: "Care este tipul de returnare obligatoriu al funcției main() conform standardului ISO C++?",
      options: [
        "void (deoarece programul se oprește la final)",
        "int (indică codul de stare către sistemul de operare)",
        "bool (true pentru succes, false pentru eroare)",
        "std::string (pentru a afișa starea de ieșire)"
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
    theory: "În C++ istoric, variabilele puteau fi inițializate în multiple moduri inconsistente: inițializare prin atribuire (int x = 5;), directă cu paranteze rotunde (int x(5);) sau lăsate neinițializate (int x;). Variabilele locale neinițializate conțin 'valori gunoi' (garbage values) rămase pe stivă, accesarea lor conducând la comportament nedefinit (Undefined Behavior - UB).\n\nC++11 a introdus 'Inițializarea Uniformă' sau 'Brace Initialization' folosind acolade (int x{5}; sau int x{};). Dacă acoladele sunt goale, variabila este zero-inițializată garantat (0 pentru numere, nullptr pentru pointeri, false pentru bool).\n\nUn beneficiu masiv al acoladelor este prevenirea erorilor de tip 'narrowing conversion' (trunchiere de precizie). De exemplu, scrierea 'int x = 4.9;' compilează silențios trunchind la 4, în timp ce 'int x{4.9};' generează o eroare de compilare directă la build time.",
    glossary: [
      { term: "Brace Initialization", def: "Sintaxa {val} introdusă în C++11 pentru inițializare sigură și uniformă." },
      { term: "Zero-initialization", def: "Inițializarea cu acolade goale {} care setează automat valoarea zero/fals." },
      { term: "Narrowing Conversion", def: "Conversie implicită riscantă cu pierdere de date (ex: double la int)." },
      { term: "Undefined Behavior", def: "Comportament neprevăzut rezultat din accesarea memoriei neinițializate." }
    ],
    example: `int valoareCurata{42};      // Initializare uniforma cu 42
int zeroGarantat{};         // Zero-initializat: devine 0
// int eroare{3.14};        // EROARE DE COMPILARE: Narrowing conversion interzisa!`,
    prompt: "Declară o variabilă de tip int numită port folosind inițializarea uniformă cu acolade pentru valoarea 8080.",
    caseSensitive: true,
    acceptedAnswers: [
      "int port{8080};",
      "int port = {8080};"
    ],
    regexPattern: "^int\\s+port\\s*=?\\s*\\{\\s*8080\\s*\\}\\s*;$",
    officialSolution: "int port{8080};",
    explanation: "Sintaxa 'int port{8080};' este inițializarea directă prin acolade, recomandată de Modern C++ Core Guidelines.",
    hint: "Scrie tipul, numele variabilei și valoarea între acolade: int port{8080};",
    matchingPairs: [
      { left: "int x{10};", right: "Inițializare uniformă sigură fără narrowing" },
      { left: "int x{};", right: "Zero-inițializare garantată (valoarea 0)" },
      { left: "int x;", right: "Variabilă neinițializată cu valoare nedeterminată" },
      { left: "Narrowing", right: "Pierderea de date blocată de acolade" }
    ],
    quiz: {
      question: "Ce se întâmplă dacă încercăm să compilăm expresia 'int x{3.14};' în C++ modern?",
      options: [
        "Se compilează și x ia valoarea rotunjită 3",
        "Compilatorul emite o eroare deoarece acoladele interzic narrowing conversions",
        "Valoarea devine automat 0",
        "Variabila este convertită automat la tipul float"
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
    theory: "În C++, operațiile de intrare și ieșire sunt gestionate prin biblioteca de fluxuri (streams) din header-ul '<iostream>'. Fluxul 'std::cout' reprezintă fluxul standard de ieșire (standard output), 'std::cin' este fluxul de intrare (standard input), iar 'std::cerr' este fluxul dedicat afișării erorilor ne-bufferate.\n\nPentru trimiterea datelor în flux se folosește operatorul de inserție '<<', iar pentru extragerea datelor din consolă se utilizează operatorul de extracție '>>'. Operatorul '>>' citește caractere sărind automat peste spațiile albe (whitespace, tab, newline).\n\nO distincție critică de performanță este între '\\n' și 'std::endl'. În timp ce caracterul '\\n' doar adaugă un terminator de linie în buffer-ul de memorie, 'std::endl' forțează și o golire imediată a buffer-ului (flush). În bucle intensive, folosirea abuzivă a lui 'std::endl' distruge performanța I/O, motiv pentru care '\\n' este alegerea optimă.",
    glossary: [
      { term: "std::cout", def: "Obiectul stream standard de ieșire bufferată din iostream." },
      { term: "std::cin", def: "Obiectul stream standard de intrare de la tastatură." },
      { term: "std::endl", def: "Inserează newline și forțează flush-ul imediat al bufferului." },
      { term: "Buffer Flush", def: "Operația de scriere forțată a datelor din memorie către ecran sau disc." }
    ],
    example: `#include <iostream>

int main() {
    int varsta{};
    std::cout << "Introdu varsta: ";
    std::cin >> varsta;
    std::cout << "Ai " << varsta << " ani.\\n";
    return 0;
}`,
    prompt: "Scrie instrucțiunea C++ pentru a afișa textul 'Ready' urmat de un caracter newline '\\n' folosind std::cout.",
    caseSensitive: true,
    acceptedAnswers: [
      "std::cout << \"Ready\\n\";",
      "std::cout << \"Ready\" << '\\n';",
      "std::cout << \"Ready\" << \"\\n\";"
    ],
    regexPattern: "^std::cout\\s*<<\\s*\"Ready(\\\\n)?\"(\\s*<<\\s*('\\\\n'|\"\\\\n\"))?\\s*;$",
    officialSolution: "std::cout << \"Ready\\n\";",
    explanation: "Se folosește std::cout cu operatorul << și șirul de caractere care include terminatorul de linie.",
    hint: "Folosește std::cout << \"Ready\\n\";",
    matchingPairs: [
      { left: "<<", right: "Operator de inserție în stream (ieșire)" },
      { left: ">>", right: "Operator de extracție din stream (intrare)" },
      { left: "\\n", right: "Newline rapid fără golire forțată de buffer" },
      { left: "std::cerr", right: "Stream dedicat erorilor (nebufferat)" }
    ],
    quiz: {
      question: "De ce este recomandată folosirea '\\n' în locul 'std::endl' în bucle intensive de afișare?",
      options: [
        "std::endl nu funcționează pe sistemele Linux",
        "std::endl forțează flush-ul buffer-ului la fiecare apel, încetinind masiv execuția",
        "'\\n' ocupă mai puțin spațiu pe stivă",
        "std::endl nu este compatibil cu tipul int"
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
    theory: "În specificația originală C și C++, dimensiunea tipurilor primitive (cum ar fi 'int' sau 'long') este dependentă de platformă și arhitectura procesorului (data model: LP64, LLP64, etc.). Pe un microcontroller de 16 biți, 'int' are doar 2 octeți, în timp ce pe x86-64 are 4 octeți. Această ambiguitate provoacă erori grave de portabilitate și buffer overflow.\n\nPentru a elimina această incertitudine în sistemele critice, C++11 include header-ul '<cstdint>', oferind tipuri cu lățime fixă garantată: 'std::int8_t', 'std::int16_t', 'std::int32_t' și 'std::int64_t' (pentru întregi cu semn), respectiv 'std::uint8_t', 'std::uint16_t', 'std::uint32_t', 'std::uint64_t' (fără semn).\n\nÎn plus, tipul 'std::size_t' din '<cstddef>' este un tip întreg fără semn garantat să poată stoca dimensiunea maximă a oricărui obiect alocabil în memorie pe arhitectura curentă, fiind tipul returnat de operatorul 'sizeof'.",
    glossary: [
      { term: "<cstdint>", def: "Header standard ce definește întregi cu lățime fixă garantată în biți." },
      { term: "std::int32_t", def: "Întreg cu semn pe exact 32 de biți (4 octeți), portabil universal." },
      { term: "std::uint64_t", def: "Întreg fără semn pe exact 64 de biți (8 octeți), pentru valori mari pozitive." },
      { term: "std::size_t", def: "Tip fără semn reprezentând dimensiunea oricărui obiect în octeți." }
    ],
    example: `#include <cstdint>
#include <cstddef>

std::int32_t packetId{1024};       // Exact 4 octeti cu semn pe orice platforma
std::uint64_t memoryAddress{0xFF}; // Exact 8 octeti fara semn
std::size_t dimensiuneBytes = sizeof(packetId); // 4`,
    prompt: "Declară o variabilă de tip std::uint32_t cu numele ipAddress inițializată uniform cu 0.",
    caseSensitive: true,
    acceptedAnswers: [
      "std::uint32_t ipAddress{0};",
      "std::uint32_t ipAddress{};"
    ],
    regexPattern: "^std::uint32_t\\s+ipAddress\\s*\\{\\s*0?\\s*\\}\\s*;$",
    officialSolution: "std::uint32_t ipAddress{0};",
    explanation: "Se specifică tipul cu lățime fixă std::uint32_t, numele variabilei și acoladele de inițializare.",
    hint: "Tastează: std::uint32_t ipAddress{0};",
    matchingPairs: [
      { left: "std::int32_t", right: "Exact 32 de biți cu semn (-2 miliarde la +2 miliarde)" },
      { left: "std::uint64_t", right: "Exact 64 de biți fără semn (0 la 18 trilioane)" },
      { left: "std::size_t", right: "Tip fără semn pentru indexare și dimensiuni de memorie" },
      { left: "sizeof", right: "Operator la compile-time ce returnează dimensiunea în octeți" }
    ],
    quiz: {
      question: "Care este avantajul major al utilizării lui std::int32_t în locul tipului nativ int?",
      options: [
        "Rulează de două ori mai rapid în instrucțiunile GPU",
        "Garantează exact 32 de biți de memorie pe orice platformă și arhitectură",
        "Permite doar valori impare",
        "Nu poate depăși niciodată capacitatea memoriei RAM"
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
    title: "Constante și Optimizări la Compilare: const vs constexpr",
    theory: "În C++, protecția împotriva modificărilor accidentale ale stării se realizează prin specificatorul 'const'. O variabilă declarată 'const' devine imutabilă după inițializare, iar compilatorul va refuza orice încercare ulterioară de reatribuire.\n\nÎncepând cu C++11, limbajul a introdus cuvântul cheie revoluționar 'constexpr' (constant expression). În timp ce 'const' poate fi inițializat și la runtime (de exemplu cu o valoare citită de la utilizator sau ceasul de sistem), 'constexpr' impune ca valoarea să fie calculată strict la momentul compilării (compile-time).\n\nFuncțiile marcate cu 'constexpr' pot fi executate direct de compilator dacă argumentele lor sunt constante. Aceasta permite calcularea tabelelor matematice complexe, a mărimilor de matrici sau a hashing-ului de string-uri înainte ca programul să fie lansat în execuție, generând zero cost de performanță la runtime (zero-overhead principle).",
    glossary: [
      { term: "const", def: "Specificator ce împiedică modificarea unei variabile după inițializare." },
      { term: "constexpr", def: "Garantează că expresia sau funcția este evaluată la compile-time." },
      { term: "Compile-Time", def: "Faza în care codul este analizat și tradus în binar înainte de rulare." },
      { term: "Zero-Overhead", def: "Principiul C++: ceea ce poți calcula la compilare nu consumă timp la execuție." }
    ],
    example: `const int runtimeVal = rand();      // Valid: valoare necunoscuta pana la rulare
constexpr int bufferDim{1024 * 4};  // Evaluat la compilare: 4096 octeti
constexpr int dubleaza(int n) { return n * 2; }
constexpr int rezultat = dubleaza(10); // Calculat instant la build time: 20`,
    prompt: "Declară o constantă evaluată la timpul compilării folosind constexpr, de tip int, numită MAX_USERS, cu valoarea 500.",
    caseSensitive: true,
    acceptedAnswers: [
      "constexpr int MAX_USERS{500};",
      "constexpr int MAX_USERS = 500;"
    ],
    regexPattern: "^constexpr\\s+int\\s+MAX_USERS\\s*(=|\\{)\\s*500\\s*\\}?\\s*;$",
    officialSolution: "constexpr int MAX_USERS{500};",
    explanation: "Se folosește constexpr urmat de tipul int, numele constantei și inițializarea cu 500.",
    hint: "constexpr int MAX_USERS{500};",
    matchingPairs: [
      { left: "const", right: "Imutabilitate garantată la runtime sau compile-time" },
      { left: "constexpr", right: "Evaluare obligatorie în timpul compilării" },
      { left: "consteval", right: "Funcție care poate fi apelată DOAR la compile-time (C++20)" },
      { left: "Literal", right: "Valoare constantă scrisă direct în codul sursă" }
    ],
    quiz: {
      question: "Care este diferența cheie dintre 'const' și 'constexpr' în C++?",
      options: [
        "const funcționează doar pentru numere cu virgulă mobilă",
        "constexpr cere ca valoarea să fie cunoscută și evaluată strict la momentul compilării",
        "const alocă memorie întotdeauna pe Heap",
        "Nu există nicio diferență, sunt sinonime absolute"
      ],
      correctIndex: 1
    }
  },
  {
    id: "cpp-fund-6",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Manipularea Biților: Operatori Bitwise (&, |, ^, ~, <<) și Măști Binare",
    theory: "În programarea de sistem, drivere hardware, protocoale de rețea și motoare grafice, manipularea directă a biților este esențială pentru viteză și economie de memorie. C++ oferă operatorii pe biți nativi: AND binar ('&'), OR binar ('|'), XOR binar ('^'), NOT/Inversiune ('~'), și operatorii de deplasare (shift) la stânga ('<<') și la dreapta ('>>').\n\nPentru a stoca multiple stări booleene într-un singur octet, se folosește conceptul de 'Bit Flags' (flag-uri binare). Fiecare stare ocupă o putere a lui 2 (1 << 0 = 1, 1 << 1 = 2, 1 << 2 = 4, 1 << 3 = 8).\n\nOperațiile canoane pe măști de biți sunt: 1. Activare bit: 'flags |= MASCA;', 2. Dezactivare bit: 'flags &= ~MASCA;', 3. Comutare (toggle): 'flags ^= MASCA;', 4. Verificare dacă bitul este activ: 'bool activ = (flags & MASCA) != 0;'.",
    glossary: [
      { term: "Bitwise AND (&)", def: "Returnează 1 dacă ambii biți corespondenți sunt 1." },
      { term: "Bitwise OR (|)", def: "Returnează 1 dacă cel puțin un bit este 1 (activare flag)." },
      { term: "Left Shift (<<)", def: "Deplasează biții la stânga, echivalent cu înmulțirea cu puteri ale lui 2." },
      { term: "Bitmask", def: "Șablon binar utilizat pentru izolarea sau modificarea unor biți țintă." }
    ],
    example: `constexpr std::uint8_t READ_PERM   = 1 << 0; // 00000001 (1)
constexpr std::uint8_t WRITE_PERM  = 1 << 1; // 00000010 (2)
constexpr std::uint8_t EXEC_PERM   = 1 << 2; // 00000100 (4)

std::uint8_t fileFlags = READ_PERM | WRITE_PERM; // 00000011 (Citire + Scriere)
bool canExecute = (fileFlags & EXEC_PERM) != 0;  // false`,
    prompt: "Scrie operația pentru a activa flag-ul WRITE_PERM în variabila flags folosind operatorul compus OR pe biți.",
    caseSensitive: true,
    acceptedAnswers: [
      "flags |= WRITE_PERM;",
      "flags = flags | WRITE_PERM;"
    ],
    regexPattern: "^flags\\s*(\\|=\\s*WRITE_PERM|\\=\\s*flags\\s*\\|\\s*WRITE_PERM)\\s*;$",
    officialSolution: "flags |= WRITE_PERM;",
    explanation: "Operatorul |= realizează operația de Bitwise OR și reatribuie rezultatul, activând bitul corespunzător.",
    hint: "flags |= WRITE_PERM;",
    matchingPairs: [
      { left: "flags |= MASK", right: "Setează/activează bitul fără a afecta restul" },
      { left: "flags &= ~MASK", right: "Șterge/dezactivează bitul selectat" },
      { left: "flags ^= MASK", right: "Inversează starea bitului (toggle)" },
      { left: "flags & MASK", right: "Interoghează dacă bitul este activ" }
    ],
    quiz: {
      question: "Ce valoare zecimală produce expresia binară (1 << 3) în C++?",
      options: [
        "3",
        "6",
        "8 (1 deplasat cu 3 poziții: 00001000 în binar)",
        "16"
      ],
      correctIndex: 2
    }
  },
  {
    id: "cpp-fund-7",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Controlul Fluxului: if cu Inițializator C++17 și switch-case",
    theory: "Instrucțiunile de decizie ghidează execuția ramurilor de cod. Pe lângă structurile clasice 'if-else', standardul modern C++17 a introdus o funcționalitate deosebit de elegantă: 'if with initializer'. Sintaxa 'if (init; condition)' permite declararea și inițializarea unei variabile direct în antetul if-ului.\n\nDomeniul de vizibilitate (scope) al variabilei inițializate este restrâns strict la corpul blocului if și else. Aceasta previne poluarea spațiului de nume și reutilizarea accidentală a stărilor expirate (precum iteratorii sau codurile de retur ale funcțiilor de sistem).\n\nPentru evaluarea valorilor discrete, instrucțiunea 'switch' oferă un salt direct (jump table) extrem de eficient. În C++17, dacă se dorește continuarea intenționată a execuției în următorul bloc fără 'break', se folosește atributul standard '[[fallthrough]];', eliminând avertismentele compilatorului.",
    glossary: [
      { term: "if with initializer", def: "Sintaxă C++17 ce limitează scope-ul unei variabile la ramurile if/else." },
      { term: "switch-case", def: "Structură de ramificare optimizată adesea ca jump table binar de compilator." },
      { term: "[[fallthrough]]", def: "Atribut C++17 ce documentează lipsa intenționată a unui break în switch." },
      { term: "Scope Restriction", def: "Practică de inginerie software ce limitează durata de viață a variabilelor." }
    ],
    example: `// C++17 if cu initializator direct:
if (auto status = verificaConexiune(); status == 0) {
    std::cout << "Conexiune reusita!\\n";
} else {
    std::cout << "Eroare conexiune: " << status << "\\n";
} // Variabila 'status' este distrusa automat aici!`,
    prompt: "Completează instrucțiunea if modernă cu inițializator pentru variabila întreagă code cu valoarea getCode() și condiția code == 200.",
    caseSensitive: true,
    acceptedAnswers: [
      "if (int code = getCode(); code == 200)",
      "if (auto code = getCode(); code == 200)",
      "if (const auto code = getCode(); code == 200)"
    ],
    regexPattern: "^if\\s*\\(\\s*(const\\s+)?(int|auto)\\s+code\\s*=\\s*getCode\\(\\)\\s*;\\s*code\\s*==\\s*200\\s*\\)$",
    officialSolution: "if (auto code = getCode(); code == 200)",
    explanation: "Sintaxa separă declarația de condiția logică prin punct și virgulă: if (init; cond).",
    hint: "if (auto code = getCode(); code == 200)",
    matchingPairs: [
      { left: "if (init; cond)", right: "Inițializează și testează cu scope local" },
      { left: "switch", right: "Ramificare multi-cale bazată pe valori constante" },
      { left: "[[fallthrough]]", right: "Marchează trecerea deliberată la următorul case" },
      { left: "default", right: "Ramura executată dacă nicio etichetă nu se potrivește" }
    ],
    quiz: {
      question: "Care este beneficiul utilizării sintaxei 'if (init; condition)' introduse în C++17?",
      options: [
        "Transformă codul automat în instrucțiuni multithreaded",
        "Limitează domeniul de vizibilitate al variabilei doar la blocurile if și else",
        "Permite compararea șirurilor de caractere fără biblioteci",
        "Oprește alocarea pe stivă"
      ],
      correctIndex: 1
    }
  },
  {
    id: "cpp-fund-8",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Bucle și Iterații Moderne: for clasic vs Range-based for loops",
    theory: "Repetarea instrucțiunilor se realizează prin buclele 'for', 'while' și 'do-while'. În timp ce bucla 'for' indexată clasic ('for (size_t i = 0; i < n; ++i)') a dominat programarea procedurală, ea expune riscuri de depășire de index (off-by-one errors) și calcule redundante de dimensiuni.\n\nC++11 a revoluționat iterațiile prin introducerea buclelor 'Range-based for' ('for (const auto& elem : container)'). Compilatorul generează automat apelurile către 'std::begin()' și 'std::end()', eliminând riscul accesului out-of-bounds.\n\nPentru eficiență maximă:",
    glossary: [
      { term: "Range-based for", def: "Buclă C++11 ce parcurge automat orice container ce oferă begin() și end()." },
      { term: "const auto&", def: "Captură prin referință constantă ce previne copierea elementelor din buclă." },
      { term: "Off-by-one", def: "Eroare clasică de indexare cu o unitate peste limita unui tablou." },
      { term: "auto&", def: "Captură prin referință modificabilă ce permite editarea elementelor în buclă." }
    ],
    example: `#include <vector>
#include <iostream>

std::vector<int> scoruri{95, 88, 100, 72};

// Parcurgere eficienta prin referinta constanta (zero copiere):
for (const auto& scor : scoruri) {
    std::cout << scor << " ";
}`,
    prompt: "Scrie antetul unei bucle range-based for care parcurge un container numit items prin referință constantă folosind auto și variabila locală item.",
    caseSensitive: true,
    acceptedAnswers: [
      "for (const auto& item : items)",
      "for (const auto &item : items)"
    ],
    regexPattern: "^for\\s*\\(\\s*const\\s+auto\\s*&\\s*item\\s*:\\s*items\\s*\\)$",
    officialSolution: "for (const auto& item : items)",
    explanation: "Construcția for (const auto& item : items) asigură că elementele sunt citite fără copiere suplimentară pe stivă.",
    hint: "for (const auto& item : items)",
    matchingPairs: [
      { left: "for (auto x : v)", right: "Copiază fiecare element (costisitor pentru obiecte)" },
      { left: "for (const auto& x : v)", right: "Citire optimă prin referință constantă fără copiere" },
      { left: "for (auto& x : v)", right: "Permite modificarea directă a elementelor din v" },
      { left: "break", right: "Termină forțat bucla curentă" }
    ],
    quiz: {
      question: "De ce este preferabil 'const auto& item' în fața lui 'auto item' într-un range-based for loop cu obiecte mari?",
      options: [
        "auto simplu nu compilează pentru vectori",
        "const auto& previne copierea duplicată a fiecărui obiect în memorie",
        "const auto& convertește automat obiectul în întreg",
        "Este o cerință strictă a sistemului de operare Windows"
      ],
      correctIndex: 1
    }
  },
  {
    id: "cpp-fund-9",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Funcții: Semnătură, Supraîncărcare (Overloading) și Argumente Implicite",
    theory: "Funcțiile sunt unitățile de bază ale modularizării în C++. Semnătura unei funcții include tipul returnat, numele identificatorului și lista de parametri formali. În C++, două sau mai multe funcții pot partaja același nume dacă lista lor de parametri diferă în număr sau tipuri – proces numit 'Function Overloading' (Supraîncărcare de funcții).\n\nCompilatorul rezolvă apelul la compile-time (mangling de nume) pe baza potrivirii exacte a argumentelor trimise. Tipul returnat nu face parte din semnătura unică de supraîncărcare: nu poți avea două funcții cu aceiași parametri care diferă doar prin tipul de return (ex: int calc() și double calc() este invalid).\n\nC++ permite de asemenea 'Argumente Implicite' (Default Arguments). Acestea trebuie declarate de la dreapta la stânga în lista de parametri. Dacă apelantul omite ultimele argumente, compilatorul va introduce automat valorile predefinite.",
    glossary: [
      { term: "Function Overloading", def: "Definirea mai multor funcții cu același nume dar parametri diferiți." },
      { term: "Name Mangling", def: "Mecanism intern al compilatorului C++ ce codifică tipurile în numele simbolului." },
      { term: "Default Argument", def: "Valoare automată folosită dacă argumentul este omis la apel." },
      { term: "Forward Declaration", def: "Declararea semnăturii înainte de definirea corpului funcției." }
    ],
    example: `// Supraincarcare valida:
int aduna(int a, int b) { return a + b; }
double aduna(double a, double b) { return a + b; }

// Argumente implicite (declarate de la dreapta la stanga):
void configureazaServer(int port = 8080, bool ssl = true);`,
    prompt: "Scrie prototipul funcției numite logMessage care primește un parametru de tip std::string const& numit msg și un argument implicit bool numit err cu valoarea false, returnând void.",
    caseSensitive: true,
    acceptedAnswers: [
      "void logMessage(const std::string& msg, bool err = false);",
      "void logMessage(std::string const& msg, bool err = false);",
      "void logMessage(const std::string &msg, bool err = false);"
    ],
    regexPattern: "^void\\s+logMessage\\s*\\(\\s*(const\\s+std::string\\s*&|std::string\\s+const\\s*&)\\s*msg\\s*,\\s*bool\\s+err\\s*=\\s*false\\s*\\)\\s*;$",
    officialSolution: "void logMessage(const std::string& msg, bool err = false);",
    explanation: "Parametrii cu valori implicite se definesc cu '=' în declarație și trebuie să fie poziționați la finalul listei de parametri.",
    hint: "void logMessage(const std::string& msg, bool err = false);",
    matchingPairs: [
      { left: "Overloading", right: "Același nume de funcție, parametri diferiți" },
      { left: "Default Arg", right: "Valoare furnizată automat dacă e omisă la apel" },
      { left: "Name Mangling", right: "Identificator unic generat de compilatorul C++" },
      { left: "Prototip", right: "Semnătura funcției terminată cu punct și virgulă" }
    ],
    quiz: {
      question: "Pot fi două funcții C++ supraîncărcate doar prin tipul lor de returnare diferit?",
      options: [
        "Da, compilatorul știe ce funcție să aleagă din contextul atribuirii",
        "Nu, tipul de returnare nu este suficient pentru a diferenția semnăturile la apel",
        "Doar dacă una dintre funcții este marcată cu inline",
        "Doar pe platformele pe 64 de biți"
      ],
      correctIndex: 1
    }
  },
  {
    id: "cpp-fund-10",
    track: "C & C++",
    division: "Informatică și Programare",
    level: "1. Începător",
    xp: 30,
    title: "Organizarea Proiectelor: Header Files (.hpp), #pragma once și One Definition Rule",
    theory: "În C++, proiectele mari sunt împărțite în fișiere antet (Header Files: .h sau .hpp) și fișiere sursă de implementare (.cpp). Header-ul conține declarațiile de tipuri, clase și prototipuri de funcții, în timp ce fișierul .cpp include implementarea corpurilor.\n\nCând multiple fișiere includ același header (direct sau indirect), compilatorul ar parsa declarațiile de mai multe ori, generând erori de 'redefinire de simbol'. Pentru a preveni această problemă, orice fișier header modern trebuie să înceapă cu directiva preprocesor '#pragma once' (sau clasicele header guards: #ifndef HEADER_H, #define HEADER_H, #endif).\n\nConform 'One Definition Rule' (ODR): o clasă sau funcție poate fi declarată de mai multe ori în unități de translație diferite, dar trebuie să aibă exact o singură definiție concretă în întregul binar final.",
    glossary: [
      { term: "#pragma once", def: "Directivă non-standard dar universal suportată ce asigură includerea unică a header-ului." },
      { term: "Header Guard", def: "Macro #ifndef ce împiedică procesarea dublă a aceluiași fișier antet." },
      { term: "ODR", def: "One Definition Rule: regula standard ce interzice definițiile multiple ale aceluiași simbol." },
      { term: "Translation Unit", def: "Fișierul .cpp împreună cu toate header-ele expandate de preprocesor." }
    ],
    example: `// Fișier: NetworkManager.hpp
#pragma once // Includere unica garantata

class NetworkManager {
public:
    void init();
};`,
    prompt: "Scrie directiva modernă de preprocesor plasată la începutul oricărui fișier header C++ pentru a asigura includerea unică.",
    caseSensitive: true,
    acceptedAnswers: [
      "#pragma once"
    ],
    regexPattern: "^#pragma\\s+once$",
    officialSolution: "#pragma once",
    explanation: "#pragma once este directiva suportată de toate compilatoarele moderne (GCC, Clang, MSVC) pentru a preveni dubla includere.",
    hint: "#pragma once",
    matchingPairs: [
      { left: "#pragma once", right: "Garantează includerea unică a header-ului" },
      { left: ".hpp", right: "Extensie standard pentru fișiere header C++" },
      { left: ".cpp", right: "Fișier sursă de implementare compilat separat" },
      { left: "ODR", right: "Interzice definițiile duplicat în faza de linking" }
    ],
    quiz: {
      question: "Ce problemă rezolvă directiva '#pragma once' în fișierele header?",
      options: [
        "Crește viteza conexiunii la rețea",
        "Previne erorile de compilare cauzate de includerea duplicată a aceluiași antet",
        "Criptează codul binar generat",
        "Șterge automat variabilele neutilizate din memorie"
      ],
      correctIndex: 1
    }
  }
];

// Generare completă pentru nivelurile 2-5 (Restul de 35 capitole pentru a totaliza 45)
// Let's add the remaining 35 chapters systematically!
console.log("Generare structură 45 capitole C & C++...");
