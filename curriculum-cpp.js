var CPP_EXPANDED_CURRICULUM = [
  {
    "id": "cpp-fund-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Structura Programului C++, Funcția main() și Compilarea",
    "theory": "Orice program C sau C++ începe execuția dintr-un punct unic de intrare: funcția globală 'main()'. Standardul C++ impune ca 'main()' să aibă tipul de return 'int', returnând o valoare întreagă sistemului de operare: 0 indică finalizarea cu succes (EXIT_SUCCESS), în timp ce orice valoare diferită de zero indică o eroare.\n\nProcesul de transformare a codului sursă într-un binar executabil parcurge 4 etape distincte: 1. Preprocesarea (interpretarea directivelor ce încep cu '#', precum #include sau #define), 2. Compilarea (translatarea codului C++ în cod de asamblare), 3. Asamblarea (conversia în fișiere obiect binare .o sau .obj) și 4. Link-editarea (combinarea fișierelor obiect cu bibliotecile standard de sistem într-un executabil final).\n\nCompilatoarele moderne de producție (precum GCC, Clang sau MSVC) oferă flag-uri riguroase pentru detectarea erorilor subtile. Pentru o igienă optimă a codului, se recomandă compilarea întotdeauna cu flag-urile '-Wall -Wextra -Werror', transformând avertismentele în erori de compilare.",
    "glossary": [
      {
        "term": "main()",
        "def": "Punctul unic de intrare obligatoriu în orice aplicație C sau C++ standard."
      },
      {
        "term": "Preprocesor",
        "def": "Etapa inițială ce extinde macro-urile și include fișierele antet înainte de compilare."
      },
      {
        "term": "Linker",
        "def": "Utilitarul ce leagă fișierele obiect și bibliotecile externe într-un executabil final."
      },
      {
        "term": "Exit Code 0",
        "def": "Convenția standard conform căreia return 0 transmite SO că programul s-a încheiat cu succes."
      }
    ],
    "example": "#include <iostream>\n\nint main() {\n    std::cout << \"Sistem C++ initializat cu succes!\\n\";\n    return 0; // 0 = succes catre SO\n}",
    "prompt": "Scrie semnătura completă a funcției standard main fără parametri, care returnează un întreg sistemului de operare.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "int main()",
      "int main(void)"
    ],
    "regexPattern": "^int\\s+main\\s*\\(\\s*(void)?\\s*\\)\\s*;?$",
    "officialSolution": "int main()",
    "explanation": "În C++, funcția de intrare trebuie să aibă tipul returnat 'int' și numele 'main'.",
    "hint": "Tastează tipul întreg urmat de numele funcției principale și paranteze goale: int main()",
    "matchingPairs": [
      {
        "left": "main()",
        "right": "Punctul de intrare în execuție"
      },
      {
        "left": "return 0",
        "right": "Semnalează SO terminarea cu succes"
      },
      {
        "left": "Preprocesor",
        "right": "Procesează directivele cu #"
      },
      {
        "left": "Linker",
        "right": "Rezolvă simbolurile și produce binarul"
      }
    ],
    "quiz": {
      "question": "Care este tipul de returnare obligatoriu al funcției main() conform standardului ISO C++?",
      "options": [
        "void (deoarece programul se oprește la final)",
        "int (indică codul de stare către sistemul de operare)",
        "bool (true pentru succes, false pentru eroare)",
        "std::string (pentru a afișa starea de ieșire)"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-fund-2",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Inițializarea Uniformă (Brace Initialization) și Prevenirea Narrowing",
    "theory": "În C++ istoric, variabilele puteau fi inițializate în multiple moduri inconsistente: inițializare prin atribuire (int x = 5;), directă cu paranteze rotunde (int x(5);) sau lăsate neinițializate (int x;). Variabilele locale neinițializate conțin 'valori gunoi' (garbage values) rămase pe stivă, accesarea lor conducând la comportament nedefinit (Undefined Behavior - UB).\n\nC++11 a introdus 'Inițializarea Uniformă' sau 'Brace Initialization' folosind acolade (int x{5}; sau int x{};). Dacă acoladele sunt goale, variabila este zero-inițializată garantat (0 pentru numere, nullptr pentru pointeri, false pentru bool).\n\nUn beneficiu masiv al acoladelor este prevenirea erorilor de tip 'narrowing conversion' (trunchiere de precizie). De exemplu, scrierea 'int x = 4.9;' compilează silențios trunchind la 4, în timp ce 'int x{4.9};' generează o eroare de compilare directă la build time.",
    "glossary": [
      {
        "term": "Brace Initialization",
        "def": "Sintaxa {val} introdusă în C++11 pentru inițializare sigură și uniformă."
      },
      {
        "term": "Zero-initialization",
        "def": "Inițializarea cu acolade goale {} care setează automat valoarea zero/fals."
      },
      {
        "term": "Narrowing Conversion",
        "def": "Conversie implicită riscantă cu pierdere de date (ex: double la int)."
      },
      {
        "term": "Undefined Behavior",
        "def": "Comportament neprevăzut rezultat din accesarea memoriei neinițializate."
      }
    ],
    "example": "int valoareCurata{42};      // Initializare uniforma cu 42\nint zeroGarantat{};         // Zero-initializat: devine 0\n// int eroare{3.14};        // EROARE DE COMPILARE: Narrowing conversion interzisa!",
    "prompt": "Declară o variabilă de tip int numită port folosind inițializarea uniformă cu acolade pentru valoarea 8080.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "int port{8080};",
      "int port = {8080};"
    ],
    "regexPattern": "^int\\s+port\\s*=?\\s*\\{\\s*8080\\s*\\}\\s*;$",
    "officialSolution": "int port{8080};",
    "explanation": "Sintaxa 'int port{8080};' este inițializarea directă prin acolade, recomandată de Modern C++ Core Guidelines.",
    "hint": "Scrie tipul, numele variabilei și valoarea între acolade: int port{8080};",
    "matchingPairs": [
      {
        "left": "int x{10};",
        "right": "Inițializare uniformă sigură fără narrowing"
      },
      {
        "left": "int x{};",
        "right": "Zero-inițializare garantată (valoarea 0)"
      },
      {
        "left": "int x;",
        "right": "Variabilă neinițializată cu valoare nedeterminată"
      },
      {
        "left": "Narrowing",
        "right": "Pierderea de date blocată de acolade"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă încercăm să compilăm expresia 'int x{3.14};' în C++ modern?",
      "options": [
        "Se compilează și x ia valoarea rotunjită 3",
        "Compilatorul emite o eroare deoarece acoladele interzic narrowing conversions",
        "Valoarea devine automat 0",
        "Variabila este convertită automat la tipul float"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-fund-3",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Fluxuri Standard I/O: std::cout, std::cin și std::endl vs '\\n'",
    "theory": "În C++, operațiile de intrare și ieșire sunt gestionate prin biblioteca de fluxuri (streams) din header-ul '<iostream>'. Fluxul 'std::cout' reprezintă fluxul standard de ieșire (standard output), 'std::cin' este fluxul de intrare (standard input), iar 'std::cerr' este fluxul dedicat afișării erorilor ne-bufferate.\n\nPentru trimiterea datelor în flux se folosește operatorul de inserție '<<', iar pentru extragerea datelor din consolă se utilizează operatorul de extracție '>>'. Operatorul '>>' citește caractere sărind automat peste spațiile albe (whitespace, tab, newline).\n\nO distincție critică de performanță este între '\\n' și 'std::endl'. În timp ce caracterul '\\n' doar adaugă un terminator de linie în buffer-ul de memorie, 'std::endl' forțează și o golire imediată a buffer-ului (flush). În bucle intensive, folosirea abuzivă a lui 'std::endl' distruge performanța I/O, motiv pentru care '\\n' este alegerea optimă.",
    "glossary": [
      {
        "term": "std::cout",
        "def": "Obiectul stream standard de ieșire bufferată din iostream."
      },
      {
        "term": "std::cin",
        "def": "Obiectul stream standard de intrare de la tastatură."
      },
      {
        "term": "std::endl",
        "def": "Inserează newline și forțează flush-ul imediat al bufferului."
      },
      {
        "term": "Buffer Flush",
        "def": "Operația de scriere forțată a datelor din memorie către ecran sau disc."
      }
    ],
    "example": "#include <iostream>\n\nint main() {\n    int varsta{};\n    std::cout << \"Introdu varsta: \";\n    std::cin >> varsta;\n    std::cout << \"Ai \" << varsta << \" ani.\\n\";\n    return 0;\n}",
    "prompt": "Scrie instrucțiunea C++ pentru a afișa textul 'Ready' urmat de un caracter newline '\\n' folosind std::cout.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::cout << \"Ready\\n\";",
      "std::cout << \"Ready\" << '\\n';",
      "std::cout << \"Ready\" << \"\\n\";"
    ],
    "regexPattern": "^std::cout\\s*<<\\s*\"Ready(\\\\n)?\"(\\s*<<\\s*('\\\\n'|\"\\\\n\"))?\\s*;$",
    "officialSolution": "std::cout << \"Ready\\n\";",
    "explanation": "Se folosește std::cout cu operatorul << și șirul de caractere care include terminatorul de linie.",
    "hint": "Folosește std::cout << \"Ready\\n\";",
    "matchingPairs": [
      {
        "left": "<<",
        "right": "Operator de inserție în stream (ieșire)"
      },
      {
        "left": ">>",
        "right": "Operator de extracție din stream (intrare)"
      },
      {
        "left": "\\n",
        "right": "Newline rapid fără golire forțată de buffer"
      },
      {
        "left": "std::cerr",
        "right": "Stream dedicat erorilor (nebufferat)"
      }
    ],
    "quiz": {
      "question": "De ce este recomandată folosirea '\\n' în locul 'std::endl' în bucle intensive de afișare?",
      "options": [
        "std::endl nu funcționează pe sistemele Linux",
        "std::endl forțează flush-ul buffer-ului la fiecare apel, încetinind masiv execuția",
        "'\\n' ocupă mai puțin spațiu pe stivă",
        "std::endl nu este compatibil cu tipul int"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-fund-4",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Tipuri cu Lățime Fixă: std::int32_t, std::uint64_t și Siguranța Memoriei",
    "theory": "În specificația originală C și C++, dimensiunea tipurilor primitive (cum ar fi 'int' sau 'long') este dependentă de platformă și arhitectura procesorului (data model: LP64, LLP64, etc.). Pe un microcontroller de 16 biți, 'int' are doar 2 octeți, în timp ce pe x86-64 are 4 octeți. Această ambiguitate provoacă erori grave de portabilitate și buffer overflow.\n\nPentru a elimina această incertitudine în sistemele critice, C++11 include header-ul '<cstdint>', oferind tipuri cu lățime fixă garantată: 'std::int8_t', 'std::int16_t', 'std::int32_t' și 'std::int64_t' (pentru întregi cu semn), respectiv 'std::uint8_t', 'std::uint16_t', 'std::uint32_t', 'std::uint64_t' (fără semn).\n\nÎn plus, tipul 'std::size_t' din '<cstddef>' este un tip întreg fără semn garantat să poată stoca dimensiunea maximă a oricărui obiect alocabil în memorie pe arhitectura curentă, fiind tipul returnat de operatorul 'sizeof'.",
    "glossary": [
      {
        "term": "<cstdint>",
        "def": "Header standard ce definește întregi cu lățime fixă garantată în biți."
      },
      {
        "term": "std::int32_t",
        "def": "Întreg cu semn pe exact 32 de biți (4 octeți), portabil universal."
      },
      {
        "term": "std::uint64_t",
        "def": "Întreg fără semn pe exact 64 de biți (8 octeți), pentru valori mari pozitive."
      },
      {
        "term": "std::size_t",
        "def": "Tip fără semn reprezentând dimensiunea oricărui obiect în octeți."
      }
    ],
    "example": "#include <cstdint>\n#include <cstddef>\n\nstd::int32_t packetId{1024};       // Exact 4 octeti cu semn pe orice platforma\nstd::uint64_t memoryAddress{0xFF}; // Exact 8 octeti fara semn\nstd::size_t dimensiuneBytes = sizeof(packetId); // 4",
    "prompt": "Declară o variabilă de tip std::uint32_t cu numele ipAddress inițializată uniform cu 0.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::uint32_t ipAddress{0};",
      "std::uint32_t ipAddress{};"
    ],
    "regexPattern": "^std::uint32_t\\s+ipAddress\\s*\\{\\s*0?\\s*\\}\\s*;$",
    "officialSolution": "std::uint32_t ipAddress{0};",
    "explanation": "Se specifică tipul cu lățime fixă std::uint32_t, numele variabilei și acoladele de inițializare.",
    "hint": "Tastează: std::uint32_t ipAddress{0};",
    "matchingPairs": [
      {
        "left": "std::int32_t",
        "right": "Exact 32 de biți cu semn (-2 miliarde la +2 miliarde)"
      },
      {
        "left": "std::uint64_t",
        "right": "Exact 64 de biți fără semn (0 la 18 trilioane)"
      },
      {
        "left": "std::size_t",
        "right": "Tip fără semn pentru indexare și dimensiuni de memorie"
      },
      {
        "left": "sizeof",
        "right": "Operator la compile-time ce returnează dimensiunea în octeți"
      }
    ],
    "quiz": {
      "question": "Care este avantajul major al utilizării lui std::int32_t în locul tipului nativ int?",
      "options": [
        "Rulează de două ori mai rapid în instrucțiunile GPU",
        "Garantează exact 32 de biți de memorie pe orice platformă și arhitectură",
        "Permite doar valori impare",
        "Nu poate depăși niciodată capacitatea memoriei RAM"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-fund-5",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Constante și Optimizări la Compilare: const vs constexpr",
    "theory": "În C++, protecția împotriva modificărilor accidentale ale stării se realizează prin specificatorul 'const'. O variabilă declarată 'const' devine imutabilă după inițializare, iar compilatorul va refuza orice încercare ulterioară de reatribuire.\n\nÎncepând cu C++11, limbajul a introdus cuvântul cheie revoluționar 'constexpr' (constant expression). În timp ce 'const' poate fi inițializat și la runtime (de exemplu cu o valoare citită de la utilizator sau ceasul de sistem), 'constexpr' impune ca valoarea să fie calculată strict la momentul compilării (compile-time).\n\nFuncțiile marcate cu 'constexpr' pot fi executate direct de compilator dacă argumentele lor sunt constante. Aceasta permite calcularea tabelelor matematice complexe, a mărimilor de matrici sau a hashing-ului de string-uri înainte ca programul să fie lansat în execuție, generând zero cost de performanță la runtime (zero-overhead principle).",
    "glossary": [
      {
        "term": "const",
        "def": "Specificator ce împiedică modificarea unei variabile după inițializare."
      },
      {
        "term": "constexpr",
        "def": "Garantează că expresia sau funcția este evaluată la compile-time."
      },
      {
        "term": "Compile-Time",
        "def": "Faza în care codul este analizat și tradus în binar înainte de rulare."
      },
      {
        "term": "Zero-Overhead",
        "def": "Principiul C++: ceea ce poți calcula la compilare nu consumă timp la execuție."
      }
    ],
    "example": "const int runtimeVal = rand();      // Valid: valoare necunoscuta pana la rulare\nconstexpr int bufferDim{1024 * 4};  // Evaluat la compilare: 4096 octeti\nconstexpr int dubleaza(int n) { return n * 2; }\nconstexpr int rezultat = dubleaza(10); // Calculat instant la build time: 20",
    "prompt": "Declară o constantă evaluată la timpul compilării folosind constexpr, de tip int, numită MAX_USERS, cu valoarea 500.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "constexpr int MAX_USERS{500};",
      "constexpr int MAX_USERS = 500;"
    ],
    "regexPattern": "^constexpr\\s+int\\s+MAX_USERS\\s*(=|\\{)\\s*500\\s*\\}?\\s*;$",
    "officialSolution": "constexpr int MAX_USERS{500};",
    "explanation": "Se folosește constexpr urmat de tipul int, numele constantei și inițializarea cu 500.",
    "hint": "constexpr int MAX_USERS{500};",
    "matchingPairs": [
      {
        "left": "const",
        "right": "Imutabilitate garantată la runtime sau compile-time"
      },
      {
        "left": "constexpr",
        "right": "Evaluare obligatorie în timpul compilării"
      },
      {
        "left": "consteval",
        "right": "Funcție care poate fi apelată DOAR la compile-time (C++20)"
      },
      {
        "left": "Literal",
        "right": "Valoare constantă scrisă direct în codul sursă"
      }
    ],
    "quiz": {
      "question": "Care este diferența cheie dintre 'const' și 'constexpr' în C++?",
      "options": [
        "const funcționează doar pentru numere cu virgulă mobilă",
        "constexpr cere ca valoarea să fie cunoscută și evaluată strict la momentul compilării",
        "const alocă memorie întotdeauna pe Heap",
        "Nu există nicio diferență, sunt sinonime absolute"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-fund-6",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Manipularea Biților: Operatori Bitwise (&, |, ^, ~, <<) și Măști Binare",
    "theory": "În programarea de sistem, drivere hardware, protocoale de rețea și motoare grafice, manipularea directă a biților este esențială pentru viteză și economie de memorie. C++ oferă operatorii pe biți nativi: AND binar ('&'), OR binar ('|'), XOR binar ('^'), NOT/Inversiune ('~'), și operatorii de deplasare (shift) la stânga ('<<') și la dreapta ('>>').\n\nPentru a stoca multiple stări booleene într-un singur octet, se folosește conceptul de 'Bit Flags' (flag-uri binare). Fiecare stare ocupă o putere a lui 2 (1 << 0 = 1, 1 << 1 = 2, 1 << 2 = 4, 1 << 3 = 8).\n\nOperațiile canoane pe măști de biți sunt: 1. Activare bit: 'flags |= MASCA;', 2. Dezactivare bit: 'flags &= ~MASCA;', 3. Comutare (toggle): 'flags ^= MASCA;', 4. Verificare dacă bitul este activ: 'bool activ = (flags & MASCA) != 0;'.",
    "glossary": [
      {
        "term": "Bitwise AND (&)",
        "def": "Returnează 1 dacă ambii biți corespondenți sunt 1."
      },
      {
        "term": "Bitwise OR (|)",
        "def": "Returnează 1 dacă cel puțin un bit este 1 (activare flag)."
      },
      {
        "term": "Left Shift (<<)",
        "def": "Deplasează biții la stânga, echivalent cu înmulțirea cu puteri ale lui 2."
      },
      {
        "term": "Bitmask",
        "def": "Șablon binar utilizat pentru izolarea sau modificarea unor biți țintă."
      }
    ],
    "example": "constexpr std::uint8_t READ_PERM   = 1 << 0; // 00000001 (1)\nconstexpr std::uint8_t WRITE_PERM  = 1 << 1; // 00000010 (2)\nconstexpr std::uint8_t EXEC_PERM   = 1 << 2; // 00000100 (4)\n\nstd::uint8_t fileFlags = READ_PERM | WRITE_PERM; // 00000011 (Citire + Scriere)\nbool canExecute = (fileFlags & EXEC_PERM) != 0;  // false",
    "prompt": "Scrie operația pentru a activa flag-ul WRITE_PERM în variabila flags folosind operatorul compus OR pe biți.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "flags |= WRITE_PERM;",
      "flags = flags | WRITE_PERM;"
    ],
    "regexPattern": "^flags\\s*(\\|=\\s*WRITE_PERM|\\=\\s*flags\\s*\\|\\s*WRITE_PERM)\\s*;$",
    "officialSolution": "flags |= WRITE_PERM;",
    "explanation": "Operatorul |= realizează operația de Bitwise OR și reatribuie rezultatul, activând bitul corespunzător.",
    "hint": "flags |= WRITE_PERM;",
    "matchingPairs": [
      {
        "left": "flags |= MASK",
        "right": "Setează/activează bitul fără a afecta restul"
      },
      {
        "left": "flags &= ~MASK",
        "right": "Șterge/dezactivează bitul selectat"
      },
      {
        "left": "flags ^= MASK",
        "right": "Inversează starea bitului (toggle)"
      },
      {
        "left": "flags & MASK",
        "right": "Interoghează dacă bitul este activ"
      }
    ],
    "quiz": {
      "question": "Ce valoare zecimală produce expresia binară (1 << 3) în C++?",
      "options": [
        "3",
        "6",
        "8 (1 deplasat cu 3 poziții: 00001000 în binar)",
        "16"
      ],
      "correctIndex": 2
    }
  },
  {
    "id": "cpp-fund-7",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Controlul Fluxului: if cu Inițializator C++17 și switch-case",
    "theory": "Instrucțiunile de decizie ghidează execuția ramurilor de cod. Pe lângă structurile clasice 'if-else', standardul modern C++17 a introdus o funcționalitate deosebit de elegantă: 'if with initializer'. Sintaxa 'if (init; condition)' permite declararea și inițializarea unei variabile direct în antetul if-ului.\n\nDomeniul de vizibilitate (scope) al variabilei inițializate este restrâns strict la corpul blocului if și else. Aceasta previne poluarea spațiului de nume și reutilizarea accidentală a stărilor expirate (precum iteratorii sau codurile de retur ale funcțiilor de sistem).\n\nPentru evaluarea valorilor discrete, instrucțiunea 'switch' oferă un salt direct (jump table) extrem de eficient. În C++17, dacă se dorește continuarea intenționată a execuției în următorul bloc fără 'break', se folosește atributul standard '[[fallthrough]];', eliminând avertismentele compilatorului.",
    "glossary": [
      {
        "term": "if with initializer",
        "def": "Sintaxă C++17 ce limitează scope-ul unei variabile la ramurile if/else."
      },
      {
        "term": "switch-case",
        "def": "Structură de ramificare optimizată adesea ca jump table binar de compilator."
      },
      {
        "term": "[[fallthrough]]",
        "def": "Atribut C++17 ce documentează lipsa intenționată a unui break în switch."
      },
      {
        "term": "Scope Restriction",
        "def": "Practică de inginerie software ce limitează durata de viață a variabilelor."
      }
    ],
    "example": "// C++17 if cu initializator direct:\nif (auto status = verificaConexiune(); status == 0) {\n    std::cout << \"Conexiune reusita!\\n\";\n} else {\n    std::cout << \"Eroare conexiune: \" << status << \"\\n\";\n} // Variabila 'status' este distrusa automat aici!",
    "prompt": "Completează instrucțiunea if modernă cu inițializator pentru variabila întreagă code cu valoarea getCode() și condiția code == 200.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "if (int code = getCode(); code == 200)",
      "if (auto code = getCode(); code == 200)",
      "if (const auto code = getCode(); code == 200)"
    ],
    "regexPattern": "^if\\s*\\(\\s*(const\\s+)?(int|auto)\\s+code\\s*=\\s*getCode\\(\\)\\s*;\\s*code\\s*==\\s*200\\s*\\)$",
    "officialSolution": "if (auto code = getCode(); code == 200)",
    "explanation": "Sintaxa separă declarația de condiția logică prin punct și virgulă: if (init; cond).",
    "hint": "if (auto code = getCode(); code == 200)",
    "matchingPairs": [
      {
        "left": "if (init; cond)",
        "right": "Inițializează și testează cu scope local"
      },
      {
        "left": "switch",
        "right": "Ramificare multi-cale bazată pe valori constante"
      },
      {
        "left": "[[fallthrough]]",
        "right": "Marchează trecerea deliberată la următorul case"
      },
      {
        "left": "default",
        "right": "Ramura executată dacă nicio etichetă nu se potrivește"
      }
    ],
    "quiz": {
      "question": "Care este beneficiul utilizării sintaxei 'if (init; condition)' introduse în C++17?",
      "options": [
        "Transformă codul automat în instrucțiuni multithreaded",
        "Limitează domeniul de vizibilitate al variabilei doar la blocurile if și else",
        "Permite compararea șirurilor de caractere fără biblioteci",
        "Oprește alocarea pe stivă"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-fund-8",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Bucle și Iterații Moderne: for clasic vs Range-based for loops",
    "theory": "Repetarea instrucțiunilor se realizează prin buclele 'for', 'while' și 'do-while'. În timp ce bucla 'for' indexată clasic ('for (size_t i = 0; i < n; ++i)') a dominat programarea procedurală, ea expune riscuri de depășire de index (off-by-one errors) și calcule redundante de dimensiuni.\n\nC++11 a revoluționat iterațiile prin introducerea buclelor 'Range-based for' ('for (const auto& elem : container)'). Compilatorul generează automat apelurile către 'std::begin()' și 'std::end()', eliminând riscul accesului out-of-bounds.\n\nPentru eficiență maximă, obiectele compuse (structuri, clase, string-uri) trebuie parcurse prin referință constantă ('const auto&') pentru a preveni copierea costisitoare a fiecărui element la fiecare pas al buclei.",
    "glossary": [
      {
        "term": "Range-based for",
        "def": "Buclă C++11 ce parcurge automat orice container ce oferă begin() și end()."
      },
      {
        "term": "const auto&",
        "def": "Captură prin referință constantă ce previne copierea elementelor din buclă."
      },
      {
        "term": "Off-by-one",
        "def": "Eroare clasică de indexare cu o unitate peste limita unui tablou."
      },
      {
        "term": "auto&",
        "def": "Captură prin referință modificabilă ce permite editarea elementelor în buclă."
      }
    ],
    "example": "#include <vector>\n#include <iostream>\n\nstd::vector<int> scoruri{95, 88, 100, 72};\n\n// Parcurgere eficienta prin referinta constanta (zero copiere):\nfor (const auto& scor : scoruri) {\n    std::cout << scor << \" \";\n}",
    "prompt": "Scrie antetul unei bucle range-based for care parcurge un container numit items prin referință constantă folosind auto și variabila locală item.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "for (const auto& item : items)",
      "for (const auto &item : items)"
    ],
    "regexPattern": "^for\\s*\\(\\s*const\\s+auto\\s*&\\s*item\\s*:\\s*items\\s*\\)$",
    "officialSolution": "for (const auto& item : items)",
    "explanation": "Construcția for (const auto& item : items) asigură că elementele sunt citite fără copiere suplimentară pe stivă.",
    "hint": "for (const auto& item : items)",
    "matchingPairs": [
      {
        "left": "for (auto x : v)",
        "right": "Copiază fiecare element (costisitor pentru obiecte)"
      },
      {
        "left": "for (const auto& x : v)",
        "right": "Citire optimă prin referință constantă fără copiere"
      },
      {
        "left": "for (auto& x : v)",
        "right": "Permite modificarea directă a elementelor din v"
      },
      {
        "left": "break",
        "right": "Termină forțat bucla curentă"
      }
    ],
    "quiz": {
      "question": "De ce este preferabil 'const auto& item' în fața lui 'auto item' într-un range-based for loop cu obiecte mari?",
      "options": [
        "auto simplu nu compilează pentru vectori",
        "const auto& previne copierea duplicată a fiecărui obiect în memorie",
        "const auto& convertește automat obiectul în întreg",
        "Este o cerință strictă a sistemului de operare Windows"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-fund-9",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Funcții: Semnătură, Supraîncărcare (Overloading) și Argumente Implicite",
    "theory": "Funcțiile sunt unitățile de bază ale modularizării în C++. Semnătura unei funcții include tipul returnat, numele identificatorului și lista de parametri formali. În C++, două sau mai multe funcții pot partaja același nume dacă lista lor de parametri diferă în număr sau tipuri – proces numit 'Function Overloading' (Supraîncărcare de funcții).\n\nCompilatorul rezolvă apelul la compile-time (mangling de nume) pe baza potrivirii exacte a argumentelor trimise. Tipul returnat nu face parte din semnătura unică de supraîncărcare: nu poți avea două funcții cu aceiași parametri care diferă doar prin tipul de return (ex: int calc() și double calc() este invalid).\n\nC++ permite de asemenea 'Argumente Implicite' (Default Arguments). Acestea trebuie declarate de la dreapta la stânga în lista de parametri. Dacă apelantul omite ultimele argumente, compilatorul va introduce automat valorile predefinite.",
    "glossary": [
      {
        "term": "Function Overloading",
        "def": "Definirea mai multor funcții cu același nume dar parametri diferiți."
      },
      {
        "term": "Name Mangling",
        "def": "Mecanism intern al compilatorului C++ ce codifică tipurile în numele simbolului."
      },
      {
        "term": "Default Argument",
        "def": "Valoare automată folosită dacă argumentul este omis la apel."
      },
      {
        "term": "Forward Declaration",
        "def": "Declararea semnăturii înainte de definirea corpului funcției."
      }
    ],
    "example": "// Supraincarcare valida:\nint aduna(int a, int b) { return a + b; }\ndouble aduna(double a, double b) { return a + b; }\n\n// Argumente implicite (declarate de la dreapta la stanga):\nvoid configureazaServer(int port = 8080, bool ssl = true);",
    "prompt": "Scrie prototipul funcției numite logMessage care primește un parametru de tip std::string const& numit msg și un argument implicit bool numit err cu valoarea false, returnând void.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "void logMessage(const std::string& msg, bool err = false);",
      "void logMessage(std::string const& msg, bool err = false);",
      "void logMessage(const std::string &msg, bool err = false);"
    ],
    "regexPattern": "^void\\s+logMessage\\s*\\(\\s*(const\\s+std::string\\s*&|std::string\\s+const\\s*&)\\s*msg\\s*,\\s*bool\\s+err\\s*=\\s*false\\s*\\)\\s*;$",
    "officialSolution": "void logMessage(const std::string& msg, bool err = false);",
    "explanation": "Parametrii cu valori implicite se definesc cu '=' în declarație și trebuie să fie poziționați la finalul listei de parametri.",
    "hint": "void logMessage(const std::string& msg, bool err = false);",
    "matchingPairs": [
      {
        "left": "Overloading",
        "right": "Același nume de funcție, parametri diferiți"
      },
      {
        "left": "Default Arg",
        "right": "Valoare furnizată automat dacă e omisă la apel"
      },
      {
        "left": "Name Mangling",
        "right": "Identificator unic generat de compilatorul C++"
      },
      {
        "left": "Prototip",
        "right": "Semnătura funcției terminată cu punct și virgulă"
      }
    ],
    "quiz": {
      "question": "Pot fi două funcții C++ supraîncărcate doar prin tipul lor de returnare diferit?",
      "options": [
        "Da, compilatorul știe ce funcție să aleagă din contextul atribuirii",
        "Nu, tipul de returnare nu este suficient pentru a diferenția semnăturile la apel",
        "Doar dacă una dintre funcții este marcată cu inline",
        "Doar pe platformele pe 64 de biți"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-fund-10",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "1. Începător",
    "xp": 30,
    "title": "Organizarea Proiectelor: Header Files (.hpp), #pragma once și One Definition Rule",
    "theory": "În C++, proiectele mari sunt împărțite în fișiere antet (Header Files: .h sau .hpp) și fișiere sursă de implementare (.cpp). Header-ul conține declarațiile de tipuri, clase și prototipuri de funcții, în timp ce fișierul .cpp include implementarea corpurilor.\n\nCând multiple fișiere includ același header (direct sau indirect), compilatorul ar parsa declarațiile de mai multe ori, generând erori de 'redefinire de simbol'. Pentru a preveni această problemă, orice fișier header modern trebuie să înceapă cu directiva preprocesor '#pragma once' (sau clasicele header guards: #ifndef HEADER_H, #define HEADER_H, #endif).\n\nConform 'One Definition Rule' (ODR): o clasă sau funcție poate fi declarată de mai multe ori în unități de translație diferite, dar trebuie să aibă exact o singură definiție concretă în întregul binar final.",
    "glossary": [
      {
        "term": "#pragma once",
        "def": "Directivă non-standard dar universal suportată ce asigură includerea unică a header-ului."
      },
      {
        "term": "Header Guard",
        "def": "Macro #ifndef ce împiedică procesarea dublă a aceluiași fișier antet."
      },
      {
        "term": "ODR",
        "def": "One Definition Rule: regula standard ce interzice definițiile multiple ale aceluiași simbol."
      },
      {
        "term": "Translation Unit",
        "def": "Fișierul .cpp împreună cu toate header-ele expandate de preprocesor."
      }
    ],
    "example": "// Fișier: NetworkManager.hpp\n#pragma once // Includere unica garantata\n\nclass NetworkManager {\npublic:\n    void init();\n};",
    "prompt": "Scrie directiva modernă de preprocesor plasată la începutul oricărui fișier header C++ pentru a asigura includerea unică.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "#pragma once"
    ],
    "regexPattern": "^#pragma\\s+once$",
    "officialSolution": "#pragma once",
    "explanation": "#pragma once este directiva suportată de toate compilatoarele moderne (GCC, Clang, MSVC) pentru a preveni dubla includere.",
    "hint": "#pragma once",
    "matchingPairs": [
      {
        "left": "#pragma once",
        "right": "Garantează includerea unică a header-ului"
      },
      {
        "left": ".hpp",
        "right": "Extensie standard pentru fișiere header C++"
      },
      {
        "left": ".cpp",
        "right": "Fișier sursă de implementare compilat separat"
      },
      {
        "left": "ODR",
        "right": "Interzice definițiile duplicat în faza de linking"
      }
    ],
    "quiz": {
      "question": "Ce problemă rezolvă directiva '#pragma once' în fișierele header?",
      "options": [
        "Crește viteza conexiunii la rețea",
        "Previne erorile de compilare cauzate de includerea duplicată a aceluiași antet",
        "Criptează codul binar generat",
        "Șterge automat variabilele neutilizate din memorie"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-mem-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "2. Junior",
    "xp": 30,
    "title": "Spații de Nume (namespace) și Operatorul de Rezoluție de Domeniu (::)",
    "theory": "Pe măsură ce programele C++ cresc în dimensiune și integrează biblioteci terțe, probabilitatea ca două funcții sau clase să aibă exact același nume crește exponențial (coliziune de nume sau name collision). Pentru a preveni conflictele globale de simboluri, C++ oferă 'spațiile de nume' (namespaces).\n\nUn spațiu de nume grupează declarațiile sub un identificator logic comun. Accesarea entităților din interiorul unui namespace se face folosind operatorul de rezoluție de domeniu '::' (de exemplu: 'std::cout' sau 'Audio::Engine::init()').\n\nDirectiva 'using namespace std;' este des întâlnită în tutoriale introductive, însă este considerată o anti-practică periculoasă în proiectele de producție, în special în fișierele header (.hpp). Includerea 'using namespace' importă mii de identificatori în spațiul global, generând ambiguități neașteptate.",
    "glossary": [
      {
        "term": "namespace",
        "def": "Mecanism C++ de izolare logică a identificatorilor pentru prevenirea coliziunilor."
      },
      {
        "term": "Scope Resolution (::)",
        "def": "Operatorul utilizat pentru calificarea și accesarea membrilor unui namespace sau clase."
      },
      {
        "term": "Name Collision",
        "def": "Eroare de compilare cauzată de existența a două entități identice în același scope."
      },
      {
        "term": "using namespace",
        "def": "Directivă ce deschide întregul namespace în scope-ul curent (nerecomandată în headere)."
      }
    ],
    "example": "namespace Engine {\n    void porneste() {\n        // initializare motor\n    }\n}\n\nint main() {\n    Engine::porneste(); // Calificare explicita prin ::\n    return 0;\n}",
    "prompt": "Scrie comanda pentru a apela funcția init() aparținând spațiului de nume Audio folosind operatorul de rezoluție de domeniu ::.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "Audio::init();",
      "Audio::init()"
    ],
    "regexPattern": "^Audio::init\\(\\);?$",
    "officialSolution": "Audio::init();",
    "explanation": "Se specifică numele namespace-ului urmat de operatorul de rezoluție :: și numele funcției: Audio::init();.",
    "hint": "Audio::init();",
    "matchingPairs": [
      {
        "left": "namespace N",
        "right": "Definește un domeniu izolat de nume"
      },
      {
        "left": "::",
        "right": "Operator de rezoluție a domeniului (scope resolution)"
      },
      {
        "left": "::identificator",
        "right": "Accesează un simbol din spațiul global"
      },
      {
        "left": "using N::f;",
        "right": "Importă o singură funcție specifică fără a deschide tot namespace-ul"
      }
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
      {
        "term": "Automatic Storage",
        "def": "Alocare pe stivă (stack) cu viață limitată la blocul de cod delimitat de acolade."
      },
      {
        "term": "Static Local",
        "def": "Variabilă cu viață pe toată durata programului, dar vizibilă doar în funcția locală."
      },
      {
        "term": "extern",
        "def": "Declară un simbol a cărui definiție și alocare există în alt fișier .cpp."
      },
      {
        "term": "Internal Linkage",
        "def": "Simbol vizibil doar în unitatea curentă de translație (const sau static global)."
      }
    ],
    "example": "int genereazaID() {\n    static int ultimulID{0}; // Initializat O SINGURA DATA la primul apel\n    ++ultimulID;\n    return ultimulID;\n}\n// genereazaID() returneaza: 1, apoi 2, apoi 3...",
    "prompt": "Completează declarația din funcție a unei variabile întregi numită counter, inițializată cu 0, care își păstrează starea între apelurile funcției.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "static int counter{0};",
      "static int counter = 0;",
      "static int counter{};"
    ],
    "regexPattern": "^static\\s+int\\s+counter\\s*(=|\\{)\\s*0?\\s*\\}?\\s*;$",
    "officialSolution": "static int counter{0};",
    "explanation": "Specificatorul static în fața unei variabile locale îi extinde durata de viață la întreaga execuție a programului.",
    "hint": "static int counter{0};",
    "matchingPairs": [
      {
        "left": "static (local)",
        "right": "Păstrează valoarea între apeluri succesive"
      },
      {
        "left": "extern",
        "right": "Referă o variabilă definită în altă unitate de translație"
      },
      {
        "left": "automatic",
        "right": "Creat pe stivă și distrus la părăsirea acoladelor"
      },
      {
        "left": "Data Segment",
        "right": "Zona binară unde rezidă variabilele globale și statice"
      }
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
      {
        "term": "C-style Array",
        "def": "Colecție contiguă de memorie cu dimensiune fixată la compilare."
      },
      {
        "term": "Indexare 0",
        "def": "Primul element are indexul 0, reprezentând deplasamentul de la adresa de start."
      },
      {
        "term": "Buffer Overflow",
        "def": "Scrierea de date dincolo de spațiul alocat tabloului în memorie."
      },
      {
        "term": "Contiguous Memory",
        "def": "Elementele sunt stocate consecutiv în octeți adiacenți în RAM."
      }
    ],
    "example": "constexpr std::size_t MAX_ELEMENTE{5};\nint valori[MAX_ELEMENTE]{10, 20, 30, 40, 50};\n\nint primul = valori[0]; // 10\nint ultimul = valori[MAX_ELEMENTE - 1]; // 50\n// valori[5] = 99; // PERICOL: Buffer Overflow! Undefined Behavior!",
    "prompt": "Declară un tablou de tip int numit data cu dimensiunea 4, inițializat uniform cu valorile 1, 2, 3, 4.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "int data[4]{1, 2, 3, 4};",
      "int data[4] = {1, 2, 3, 4};",
      "int data[]{1, 2, 3, 4};"
    ],
    "regexPattern": "^int\\s+data\\s*(\\[\\s*4?\\s*\\])?\\s*=?\\s*\\{\\s*1\\s*,\\s*2\\s*,\\s*3\\s*,\\s*4\\s*\\}\\s*;$",
    "officialSolution": "int data[4]{1, 2, 3, 4};",
    "explanation": "Se specifică tipul int, numele tabloului data cu mărimea [4] și acoladele cu cele 4 elemente.",
    "hint": "int data[4]{1, 2, 3, 4};",
    "matchingPairs": [
      {
        "left": "arr[0]",
        "right": "Primul element al tabloului"
      },
      {
        "left": "arr[N-1]",
        "right": "Ultimul element valid din tablou"
      },
      {
        "left": "Buffer Overflow",
        "right": "Acces ilegal în afara limitelor tabloului"
      },
      {
        "left": "Contiguous",
        "right": "Elemente aliniate unul după altul în memorie"
      }
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
      {
        "term": "Array Decay",
        "def": "Conversia implicită a unui tablou într-un pointer către primul său element."
      },
      {
        "term": "sizeof pe parametru",
        "def": "Returnează dimensiunea pointerului (8 octeți), nu a tabloului întreg."
      },
      {
        "term": "std::span",
        "def": "Vedere C++20 modernă non-posesoare peste o secvență contiguă de date."
      },
      {
        "term": "Pass-by-pointer",
        "def": "Transmiterea adresei primului element pentru a evita copierea tabloului."
      }
    ],
    "example": "void afiseaza(const int* arr, std::size_t size) {\n    for (std::size_t i{0}; i < size; ++i) {\n        std::cout << arr[i] << \" \";\n    }\n}\n\nint numere[3]{10, 20, 30};\nafiseaza(numere, 3); // 'numere' decade automat in pointer catre 10",
    "prompt": "Completează semnătura funcției afiseaza care primește un tablou decăzut de întregi const sub formă de pointer numit data și un parametru std::size_t numit size, returnând void.",
    "caseSensitive": true,
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
      {
        "left": "Array Decay",
        "right": "Tabloul devine pointer la primul său element"
      },
      {
        "left": "sizeof(arr) în funcție",
        "right": "Returnează 8 octeți (dimensiunea pointerului)"
      },
      {
        "left": "std::span<int>",
        "right": "Alternativă modernă C++20 ce păstrează mărimea"
      },
      {
        "left": "std::size_t size",
        "right": "Parametru adițional obligatoriu pentru limite"
      }
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
      {
        "term": "Pointer Arithmetic",
        "def": "Operații matematice scalate automat cu sizeof(T) peste adrese de memorie."
      },
      {
        "term": "*(ptr + i)",
        "def": "Sintaxa pointer echivalentă perfect cu indexarea tradițională ptr[i]."
      },
      {
        "term": "std::ptrdiff_t",
        "def": "Tip întreg cu semn ce reprezintă distanța în elemente dintre doi pointeri."
      },
      {
        "term": "Scaled Offset",
        "def": "Multiplicarea automată a offset-ului cu mărimea în octeți a tipului de date."
      }
    ],
    "example": "int numere[]{10, 20, 30, 40};\nint* p = numere; // p pointeaza la 10\n\nint alDoilea = *(p + 1); // 20 (avansat cu sizeof(int) = 4 octeti)\nint* pFinal = &numere[3]; // pointeaza la 40\nstd::ptrdiff_t distanta = pFinal - p; // 3 elemente",
    "prompt": "Scrie expresia de dereferențiere a pointerului ptr deplasat cu 2 poziții înainte folosind paranteze și operatorul de dereferențiere *.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "*(ptr + 2)",
      "*(ptr+2)"
    ],
    "regexPattern": "^\\*\\s*\\(\\s*ptr\\s*\\+\\s*2\\s*\\)$",
    "officialSolution": "*(ptr + 2)",
    "explanation": "Expresia *(ptr + 2) avansează cu 2 elemente și dereferențiază valoarea stocată acolo, fiind identică cu ptr[2].",
    "hint": "*(ptr + 2)",
    "matchingPairs": [
      {
        "left": "ptr + 1",
        "right": "Avansează adresa cu sizeof(T) octeți"
      },
      {
        "left": "*(ptr + i)",
        "right": "Echivalent canonic cu ptr[i]"
      },
      {
        "left": "ptr2 - ptr1",
        "right": "Distanța în număr de elemente (ptrdiff_t)"
      },
      {
        "left": "++ptr",
        "right": "Deplasează pointerul direct la următorul element"
      }
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
      {
        "term": "malloc()",
        "def": "Alocă un număr specificat de octeți pe Heap fără inițializare."
      },
      {
        "term": "calloc()",
        "def": "Alocă și umple automat memoria cu zero octet cu octet."
      },
      {
        "term": "realloc()",
        "def": "Redimensionează un bloc de memorie alocat anterior pe Heap."
      },
      {
        "term": "free()",
        "def": "Eliberează blocul de memorie înapoi către allocatorul sistemului."
      }
    ],
    "example": "#include <cstdlib>\n\n// Alocare spatiu pentru 10 intregi in C:\nint* buffer = (int*)malloc(10 * sizeof(int));\nif (buffer != nullptr) {\n    buffer[0] = 100;\n    free(buffer); // Eliberare obligatorie!\n    buffer = nullptr; // Protectie impotriva dangling pointer\n}",
    "prompt": "Scrie instrucțiunea pentru a elibera memoria alocată cu malloc indicată de pointerul ptr și a preveni memory leak-ul.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "free(ptr);",
      "free(ptr)"
    ],
    "regexPattern": "^free\\s*\\(\\s*ptr\\s*\\)\\s*;?$",
    "officialSolution": "free(ptr);",
    "explanation": "Funcția free(ptr); notifică allocatorul de memorie că blocul indicat de ptr poate fi reutilizat.",
    "hint": "free(ptr);",
    "matchingPairs": [
      {
        "left": "malloc(size)",
        "right": "Alocă memorie brută neinițializată pe Heap"
      },
      {
        "left": "calloc(n, size)",
        "right": "Alocă și zeroizează memoria în mod garantat"
      },
      {
        "left": "free(ptr)",
        "right": "Eliberează memoria fără a apela destructori C++"
      },
      {
        "left": "realloc(ptr, s)",
        "right": "Extinde sau micșorează un bloc existent de memorie"
      }
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
      {
        "term": "Null Terminator ('\\0')",
        "def": "Caracterul cu valoarea ASCII 0 care marchează sfârșitul unui șir C."
      },
      {
        "term": "strlen()",
        "def": "Calculează lungimea unui C-string numărând caracterele până la '\\0'."
      },
      {
        "term": "Buffer Overread",
        "def": "Citirea memoriei neautorizate cauzată de lipsa terminatorului '\\0'."
      },
      {
        "term": "<cstring>",
        "def": "Header-ul C++ ce conține funcțiile clasice de manipulare char* (strcmp, strcpy)."
      }
    ],
    "example": "#include <cstring>\n#include <iostream>\n\nchar mesaj[6] = \"Salut\"; // 'S', 'a', 'l', 'u', 't', '\\0'\nstd::cout << \"Lungime text: \" << std::strlen(mesaj) << \"\\n\"; // 5\nstd::cout << \"Spatiu memorie: \" << sizeof(mesaj) << \"\\n\";    // 6 octeti",
    "prompt": "Scrie caracterul literal special C/C++ care reprezintă terminatorul nul al unui șir C-string.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "'\\0'"
    ],
    "regexPattern": "^'\\\\0'$",
    "officialSolution": "'\\0'",
    "explanation": "Caracterul '\\0' (backslash zero) reprezintă caracterul nul ce indică finalul unui șir în stil C.",
    "hint": "'\\0'",
    "matchingPairs": [
      {
        "left": "'\\0'",
        "right": "Terminatorul nul ce oprește parcurgerea șirului"
      },
      {
        "left": "strlen(str)",
        "right": "Returnează numărul de caractere fără terminatorul nul"
      },
      {
        "left": "sizeof(\"Text\")",
        "right": "Include și octetul '\\0' în mărimea totală"
      },
      {
        "left": "strcmp(a, b)",
        "right": "Compară lexicografic două șiruri de caractere"
      }
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
      {
        "term": "std::string",
        "def": "Clasă modernă RAII pentru șiruri de caractere redimensionabile dinamic."
      },
      {
        "term": "SSO",
        "def": "Small String Optimization: stochează textele scurte pe stivă fără alocare pe Heap."
      },
      {
        "term": "capacity()",
        "def": "Numărul de caractere pe care string-ul le poate conține fără o nouă realocare."
      },
      {
        "term": "size()",
        "def": "Numărul curent de caractere din string (fără terminator nul)."
      }
    ],
    "example": "#include <string>\n#include <iostream>\n\nstd::string nume{\"Alexandru\"}; // Text scurt: ramane pe STIVA prin SSO!\nnume += \" Popescu\";             // Redimensionare automata fara grija de buffer overflow\nstd::cout << nume << \" (Lungime: \" << nume.size() << \")\\n\";",
    "prompt": "Scrie metoda apelată pe un obiect std::string numit text pentru a adăuga caracterul '!' la finalul său (metoda de append a unui caracter).",
    "caseSensitive": true,
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
      {
        "left": "SSO",
        "right": "Evită alocarea pe Heap pentru texte mici (15-22 caractere)"
      },
      {
        "left": "text.size()",
        "right": "Returnează numărul de caractere din șir"
      },
      {
        "left": "text.c_str()",
        "right": "Returnează un const char* terminat în nul pentru API-uri C"
      },
      {
        "left": "text.clear()",
        "right": "Golește conținutul șirului resetând lungimea la 0"
      }
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
      {
        "term": "std::string_view",
        "def": "Vedere C++17 non-posesoare (pointer + lungime) peste un șir de caractere."
      },
      {
        "term": "Non-owning View",
        "def": "Referință care nu deține memoria și nu eliberează resursa la distrugere."
      },
      {
        "term": "Zero-Allocation",
        "def": "Operație care nu solicită memorie de la sistemul de operare pe Heap."
      },
      {
        "term": "Dangling View",
        "def": "Eroare când string_view indică spre un string temporar distrus din memorie."
      }
    ],
    "example": "#include <string_view>\n#include <iostream>\n\n// Primeste atat std::string cat si const char* fara nicio alocare:\nvoid log(std::string_view sv) {\n    std::cout << \"Log: \" << sv << \" (caractere: \" << sv.length() << \")\\n\";\n}\n\nlog(\"Mesaj literal C\"); // Zero alocari pe Heap!",
    "prompt": "Scrie antetul unei funcții numite inspecteazaText care primește un parametru de tip std::string_view numit text și returnează void.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "void inspecteazaText(std::string_view text)",
      "void inspecteazaText(std::string_view text);"
    ],
    "regexPattern": "^void\\s+inspecteazaText\\s*\\(\\s*std::string_view\\s+text\\s*\\)\\s*;?$",
    "officialSolution": "void inspecteazaText(std::string_view text)",
    "explanation": "Deoarece std::string_view este mic (16 octeți pe 64-biți), se transmite de regulă prin valoare directă.",
    "hint": "void inspecteazaText(std::string_view text)",
    "matchingPairs": [
      {
        "left": "std::string_view",
        "right": "Pointer + dimensiune (non-possesor, O(1) copiere)"
      },
      {
        "left": "std::string",
        "right": "Posesor de memorie cu alocare dinamică și eliberare RAII"
      },
      {
        "left": "Dangling view",
        "right": "Vedere rămasă activă după ce stringul sursă a fost șters"
      },
      {
        "left": "sv.substr()",
        "right": "Creează o sub-vedere instantanee fără copiere de date"
      }
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
      {
        "term": "struct",
        "def": "Tip compus ce grupează date eterogene cu vizibilitate implicită publică."
      },
      {
        "term": "Memory Padding",
        "def": "Octeți neutri inserați de compilator pentru alinierea eficientă a datelor."
      },
      {
        "term": "alignof",
        "def": "Operator C++11 ce returnează cerința de aliniere în octeți a unui tip."
      },
      {
        "term": "Natural Alignment",
        "def": "Regula hardware conform căreia tipurile de N octeți trebuie plasate la adrese divizibile cu N."
      }
    ],
    "example": "struct NodSenzor {\n    char status;     // 1 octet\n    // 3 octeti de PADDING inserati automat de compilator!\n    int valoare;     // 4 octeti (trebuie aliniat la multiplu de 4)\n};\n\nstd::cout << sizeof(NodSenzor); // Afiseaza 8, nu 5!",
    "prompt": "Declară o structură C++ numită Punct2D care conține două variabile membre publice de tip double: x și y.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "struct Punct2D { double x; double y; };",
      "struct Punct2D { double x, y; };"
    ],
    "regexPattern": "^struct\\s+Punct2D\\s*\\{\\s*double\\s+(x\\s*,\\s*y|x\\s*;\\s*double\\s+y)\\s*;?\\s*\\}\\s*;$",
    "officialSolution": "struct Punct2D { double x; double y; };",
    "explanation": "Structura se declară cu cuvântul cheie struct, acolade și membrii separați prin punct și virgulă.",
    "hint": "struct Punct2D { double x; double y; };",
    "matchingPairs": [
      {
        "left": "struct",
        "right": "Tip de date compus cu membri impliciți publici"
      },
      {
        "left": "Padding",
        "right": "Octeți adăugați de compilator pentru aliniament hardware"
      },
      {
        "left": "alignof(T)",
        "right": "Interoghează cerința de aliniere în octeți a tipului T"
      },
      {
        "left": "sizeof(struct)",
        "right": "Include datele reale plus toți octeții de padding"
      }
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
  },
  {
    "id": "cpp-poo-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "3. Middle",
    "xp": 30,
    "title": "Enumerări Scoped (enum class) și Siguranța Statică a Tipurilor",
    "theory": "În C++ tradițional, enumerările simple ('enum Stare { ACTIV, INACTIV };') prezentau două defecte majore de proiectare: 1. Poluarea domeniului (enum-urile nu aveau propriul scope, astfel că identificatorii ACTIV și INACTIV intrau direct în spațiul global), și 2. Conversia implicită nesigură la numere întregi (păcălirea compilatorului permițând comparații absurde între culori și stări de rețea: 'ROSU == ACTIV').\n\nC++11 a rezolvat definitiv aceste vulnerabilități prin 'Scoped Enumerations' ('enum class Stare { ACTIV, INACTIV };'). Pentru a accesa o valoare, este obligatorie calificarea explicită cu numele enumerării ('Stare::ACTIV').\n\nÎn plus, un 'enum class' interzice orice conversie implicită la 'int'. Dacă este absolut necesar să obții valoarea numerică subiacentă, conversia trebuie realizată explicit folosind 'static_cast<int>(Stare::ACTIV)'.",
    "glossary": [
      {
        "term": "enum class",
        "def": "Enumerare cu domeniu închis introdusă în C++11 cu verificare strictă de tip."
      },
      {
        "term": "Unscoped enum",
        "def": "Enumerare clasică C ce exportă identificatorii direct în spațiul părinte."
      },
      {
        "term": "Strong Typing",
        "def": "Sistem de tipuri ce interzice conversiile implicite între categorii distincte."
      },
      {
        "term": "Underlying Type",
        "def": "Tipul întreg nativ utilizat în spate pentru stocarea valorilor enum (implicit int)."
      }
    ],
    "example": "enum class StareConexiune : std::uint8_t {\n    Deconectat,\n    Conectat,\n    InAsteptare\n};\n\nStareConexiune stare = StareConexiune::Conectat;\n// int x = stare; // EROARE DE COMPILARE: Fara conversie implicita!\nint cod = static_cast<int>(stare); // Valid prin conversie explicita",
    "prompt": "Declară un enum class numit Culoare cu trei valori: Rosu, Verde, Albastru.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "enum class Culoare { Rosu, Verde, Albastru };",
      "enum class Culoare {Rosu, Verde, Albastru};"
    ],
    "regexPattern": "^enum\\s+class\\s+Culoare\\s*\\{\\s*Rosu\\s*,\\s*Verde\\s*,\\s*Albastru\\s*\\}\\s*;$",
    "officialSolution": "enum class Culoare { Rosu, Verde, Albastru };",
    "explanation": "Sintaxa enum class definește o enumerare puternic tipizată accesibilă prin Culoare::Rosu.",
    "hint": "enum class Culoare { Rosu, Verde, Albastru };",
    "matchingPairs": [
      {
        "left": "enum class",
        "right": "Scoped enum: nume izolate și fără conversie automată la int"
      },
      {
        "left": "enum clasic",
        "right": "Poluează spațiul global și decade implicit la numere întregi"
      },
      {
        "left": "Tipul subiacent",
        "right": "Poate fi specificat explicit: enum class E : uint8_t"
      },
      {
        "left": "static_cast<int>",
        "right": "Conversie explicită a unui enum class la întreg"
      }
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
      {
        "term": "Default Access",
        "def": "Vizibilitatea aplicată automat membrilor: public pentru struct, private pentru class."
      },
      {
        "term": "POD / Aggregate",
        "def": "Structură simplă fără logică complexă, destinată strict transportului de date."
      },
      {
        "term": "Invariant de clasă",
        "def": "O condiție care trebuie să rămână întotdeauna adevărată pentru starea internă validă."
      },
      {
        "term": "Encapsulation",
        "def": "Ascunderea detaliilor de implementare și a datelor brute în spatele unei interfețe."
      }
    ],
    "example": "struct Configurație { // Implicit PUBLIC\n    int port{8080};\n    bool ssl{true};\n};\n\nclass Conexiune { // Implicit PRIVATE\n    int socketFd{-1}; // Nu poate fi accesat din exterior!\npublic:\n    void deschide();\n};",
    "prompt": "Care este specificatorul de acces implicit (public, private sau protected) pentru membrii declarați într-un bloc class C++?",
    "caseSensitive": true,
    "acceptedAnswers": [
      "private"
    ],
    "regexPattern": "^private;?$",
    "officialSolution": "private",
    "explanation": "Într-o clasă C++, toți membrii declarați înainte de orice etichetă explicită sunt privați (private).",
    "hint": "private",
    "matchingPairs": [
      {
        "left": "struct",
        "right": "Acces implicit public pentru membri și moștenire"
      },
      {
        "left": "class",
        "right": "Acces implicit private pentru membri și moștenire"
      },
      {
        "left": "public:",
        "right": "Secțiune accesibilă oricărui cod exterior"
      },
      {
        "left": "private:",
        "right": "Secțiune accesibilă exclusiv metodelor clasei"
      }
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
      {
        "term": "Încapsulare",
        "def": "Izolarea stării interne a obiectului pentru a preveni coruperea directă."
      },
      {
        "term": "Invariant",
        "def": "Condiție ce definește validitatea permanentă a stării unui obiect."
      },
      {
        "term": "Getter",
        "def": "Metodă const publică ce oferă acces în mod citire la o variabilă privată."
      },
      {
        "term": "Setter",
        "def": "Metodă publică ce validează și modifică o variabilă privată."
      }
    ],
    "example": "class ContBancar {\nprivate:\n    double m_sold{0.0}; // Membru privat izolat\npublic:\n    void depune(double suma) {\n        if (suma > 0) m_sold += suma; // Invariant protejat!\n    }\n    double getSold() const { return m_sold; } // Getter const sigur\n};",
    "prompt": "Scrie declarația unei metode getter publice numită getId care nu primește parametri, returnează un întreg int și este marcată ca fiind constantă (const).",
    "caseSensitive": true,
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
      {
        "left": "private",
        "right": "Protejează variabilele interne de acces direct nevalidat"
      },
      {
        "left": "Getter const",
        "right": "Returnează valoarea fără a permite alterarea obiectului"
      },
      {
        "left": "Setter",
        "right": "Validează datele primite înainte de a modifica starea"
      },
      {
        "left": "m_prefix",
        "right": "Convenție comună pentru variabile membre private"
      }
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
      {
        "term": "Constructor",
        "def": "Metodă specială invocată automat pentru configurarea inițială a unui obiect."
      },
      {
        "term": "Initializer List",
        "def": "Sintaxa ': membru{val}' ce construiește direct datele înainte de corpul constructorului."
      },
      {
        "term": "Default Constructor",
        "def": "Constructorul ce poate fi apelat fără niciun argument furnizat."
      },
      {
        "term": "Direct Init",
        "def": "Crearea directă a obiectelor membre fără a trece prin asignare secundară."
      }
    ],
    "example": "class Server {\nprivate:\n    const int m_port; // Membru const: nu poate fi atribuit cu '=' in corp!\n    std::string m_nume;\npublic:\n    // Initializare canonică prin lista de initializare a membrilor:\n    Server(int port, std::string_view nume) \n        : m_port{port}, m_nume{nume} {\n        // Corpul ramane adesea gol!\n    }\n};",
    "prompt": "Completează antetul constructorului clasei Punct cu parametrii double x, double y ce inițializează membrii m_x{x} și m_y{y} prin lista de inițializare (cu corpul gol {}).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "Punct(double x, double y) : m_x{x}, m_y{y} {}",
      "Punct(double x, double y) : m_x(x), m_y(y) {}"
    ],
    "regexPattern": "^Punct\\s*\\(\\s*double\\s+x\\s*,\\s*double\\s+y\\s*\\)\\s*:\\s*m_x[{(]x[})],\\s*m_y[{(]y[})]\\s*\\{\\s*\\}$",
    "officialSolution": "Punct(double x, double y) : m_x{x}, m_y{y} {}",
    "explanation": "Lista de inițializare a membrilor se introduce după ':' înainte de corpul constructorului.",
    "hint": "Punct(double x, double y) : m_x{x}, m_y{y} {}",
    "matchingPairs": [
      {
        "left": ": m_x{x}",
        "right": "Inițializare directă în lista membrilor fără dublă alocare"
      },
      {
        "left": "const membru",
        "right": "Poate fi inițializat exclusiv prin lista de inițializare"
      },
      {
        "left": "= default",
        "right": "Solicită compilatorului să genereze constructorul implicit"
      },
      {
        "left": "= delete",
        "right": "Interzice explicit apelul unui anumit constructor"
      }
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
      {
        "term": "Delegating Constructor",
        "def": "Constructor ce transferă inițializarea unui alt constructor din aceeași clasă."
      },
      {
        "term": "DRY Principle",
        "def": "Don't Repeat Yourself: principiu arhitectural ce elimină duplicarea codului."
      },
      {
        "term": "Default Member Init",
        "def": "Inițializarea valorilor implicite direct la declararea variabilelor membre."
      },
      {
        "term": "Recursive Delegation",
        "def": "Eroare de compilare când constructorii se deleagă circular într-o buclă infinită."
      }
    ],
    "example": "class ConexiuneBD {\nprivate:\n    std::string m_gazda;\n    int m_port;\npublic:\n    // Constructorul principal complet:\n    ConexiuneBD(std::string_view gazda, int port) \n        : m_gazda{gazda}, m_port{port} {}\n\n    // Constructor delegator (foloseste portul implicit 5432):\n    ConexiuneBD(std::string_view gazda) \n        : ConexiuneBD{gazda, 5432} {} // DELEGARE!\n};",
    "prompt": "Completează constructorul fără parametri al clasei Socket care deleagă către constructorul Socket(80) cu un corp gol {}.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "Socket() : Socket{80} {}",
      "Socket() : Socket(80) {}"
    ],
    "regexPattern": "^Socket\\s*\\(\\s*\\)\\s*:\\s*Socket[{(]80[})]\\s*\\{\\s*\\}$",
    "officialSolution": "Socket() : Socket{80} {}",
    "explanation": "Delegarea se realizează apelând Socket{80} direct în lista de inițializare a constructorului fără parametri.",
    "hint": "Socket() : Socket{80} {}",
    "matchingPairs": [
      {
        "left": ": Clasa{args}",
        "right": "Sintaxa de delegare către alt constructor din clasă"
      },
      {
        "left": "DRY",
        "right": "Elimină logica redundantă de inițializare"
      },
      {
        "left": "In-class init",
        "right": "Valori implicite atribuite la declarația membrilor (int x{0};)"
      },
      {
        "left": "= delete",
        "right": "Blochează apelul constructorului implicit nedorit"
      }
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
      {
        "term": "Copy Constructor",
        "def": "Constructor special cu semnătura T(const T&) ce clonează un obiect existent."
      },
      {
        "term": "Shallow Copy",
        "def": "Duplicarea valorilor membrelor; dacă există pointeri, ambele obiecte împart aceeași memorie."
      },
      {
        "term": "Deep Copy",
        "def": "Alocarea unui nou spațiu de memorie independent și copierea datelor reale."
      },
      {
        "term": "Double Free",
        "def": "Eroare critică cauzată de apelul repetat al lui delete pe aceeași adresă de memorie."
      }
    ],
    "example": "class VectorIntregi {\nprivate:\n    int* m_date;\n    std::size_t m_size;\npublic:\n    // Constructor de copiere profund (Deep Copy):\n    VectorIntregi(const VectorIntregi& sursa) \n        : m_size{sursa.m_size}, m_date{new int[sursa.m_size]} {\n        for (std::size_t i{0}; i < m_size; ++i) {\n            m_date[i] = sursa.m_date[i]; // Copiere efectiva a elementelor\n        }\n    }\n    ~VectorIntregi() { delete[] m_date; }\n};",
    "prompt": "Scrie semnătura corectă a constructorului de copiere pentru o clasă numită Buffer (care primește o referință constantă către alt Buffer).",
    "caseSensitive": true,
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
      {
        "left": "T(const T&)",
        "right": "Semnătura standard a constructorului de copiere"
      },
      {
        "left": "Shallow Copy",
        "right": "Copiază adresele brute, riscând corupere prin Double Free"
      },
      {
        "left": "Deep Copy",
        "right": "Alocă un bloc complet nou pe Heap și duplică datele"
      },
      {
        "left": "Double Free",
        "right": "Eliberarea de două ori a aceluiași pointer de pe Heap"
      }
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
      {
        "term": "operator=",
        "def": "Operator de atribuire supraîncărcat cu semnătura T& operator=(const T&)."
      },
      {
        "term": "Copy-and-Swap",
        "def": "Idiom modern ce garantează Strong Exception Safety la atribuire."
      },
      {
        "term": "Auto-atribuire",
        "def": "Cazul 'a = a;' ce poate corupe memoria dacă nu este verificat cu this == &other."
      },
      {
        "term": "Strong Exception Safety",
        "def": "Dacă apare o excepție, obiectul își păstrează starea intactă anterioară."
      }
    ],
    "example": "class StringInteligent {\n    char* m_data;\n    std::size_t m_size;\npublic:\n    // Copy-and-swap elegant (argument primit prin valoare!):\n    StringInteligent& operator=(StringInteligent temp) {\n        std::swap(m_data, temp.m_data);\n        std::swap(m_size, temp.m_size);\n        return *this; // Returneaza referinta catre sine\n    } // Memoria veche din 'm_data' este stearsa de destructorul lui 'temp' aici!\n};",
    "prompt": "Scrie semnătura operatorului de atribuire prin copiere pentru clasa Document care returnează o referință către Document și primește const Document& doc.",
    "caseSensitive": true,
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
      {
        "left": "T& operator=(const T&)",
        "right": "Semnătura standard de atribuire prin copiere"
      },
      {
        "left": "return *this;",
        "right": "Permite înlănțuirea atribuirilor (a = b = c)"
      },
      {
        "left": "std::swap",
        "right": "Schimbă adresele interne în timpul Copy-and-Swap"
      },
      {
        "left": "Auto-atribuire",
        "right": "Verificare obligatorie dacă se folosește abordarea clasică (if (this == &other))"
      }
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
      {
        "term": "this",
        "def": "Pointer ascuns transmis ca prim argument ce indică spre adresa instanței curente."
      },
      {
        "term": "const method",
        "def": "Metodă ce promite să nu altereze starea niciunei variabile membre a obiectului."
      },
      {
        "term": "Const Correctness",
        "def": "Practica de a marca drept const toate referințele și metodele imutabile."
      },
      {
        "term": "mutable",
        "def": "Specificator rar ce permite modificarea unei variabile chiar și în metode const (ex: mutexuri)."
      }
    ],
    "example": "class Raport {\nprivate:\n    int m_linii{100};\npublic:\n    // Metoda const: poate fi apelata pe obiecte const!\n    int getLinii() const {\n        // m_linii = 200; // EROARE: Modificare interzisa in metoda const!\n        return this->m_linii;\n    }\n};",
    "prompt": "Scrie instrucțiunea dintr-o metodă care returnează referința către instanța curentă a obiectului folosind pointerul this dereferențiat.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "return *this;",
      "return *this"
    ],
    "regexPattern": "^return\\s+\\*this\\s*;?$",
    "officialSolution": "return *this;",
    "explanation": "Dereferențierea pointerului this (*this) returnează referința la instanța curentă a obiectului.",
    "hint": "return *this;",
    "matchingPairs": [
      {
        "left": "*this",
        "right": "Obiectul curent dereferențiat"
      },
      {
        "left": "const la final",
        "right": "Garantează că metoda nu alterează starea internă"
      },
      {
        "left": "Method chaining",
        "right": "Înlănțuirea apelurilor: obj.setX(1).setY(2)"
      },
      {
        "left": "mutable",
        "right": "Permite modificarea unei variabile specifice din metode const"
      }
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
      {
        "term": "static member",
        "def": "Variabilă partajată de toate instanțele clasei, existentă independent de obiecte."
      },
      {
        "term": "static method",
        "def": "Metodă fără pointer this ce poate accesa exclusiv alți membri statici."
      },
      {
        "term": "friend function",
        "def": "Funcție din exterior căreia clasa îi acordă acces la membrii săi privați."
      },
      {
        "term": "Class-level State",
        "def": "Stare globală aparținând tipului, des utilizată pentru contoare de instanțe."
      }
    ],
    "example": "class Sesiune {\nprivate:\n    inline static int s_contor{0}; // static inline C++17\n    int m_id;\npublic:\n    Sesiune() : m_id{++s_contor} {}\n    static int getTotalSesiuni() { return s_contor; }\n    friend void afiseazaDebug(const Sesiune& s); // Functie prietena\n};",
    "prompt": "Scrie declarația din interiorul unei clase care definește funcția externă void inspecteaza(const Nod& n) ca fiind funcție prietenă (friend).",
    "caseSensitive": true,
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
      {
        "left": "static membru",
        "right": "O singură instanță partajată de toate obiectele clasei"
      },
      {
        "left": "static metodă",
        "right": "Poate fi apelată fără instanță: Clasa::metoda()"
      },
      {
        "left": "friend",
        "right": "Acordă acces la datele private ale clasei unei entități externe"
      },
      {
        "left": "inline static",
        "right": "Permite inițializarea membrilor statici direct în header (C++17)"
      }
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
  },
  {
    "id": "cpp-stl-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "4. Senior",
    "xp": 30,
    "title": "Supraîncărcarea Operatorilor și Afișarea în Stream (operator<<)",
    "theory": "C++ permite definirea comportamentului operatorilor nativi (precum '+', '-', '==', '<<') pentru clasele utilizatorului, proces numit 'Operator Overloading'. Aceasta conferă tipurilor personalizate aceeași naturalețe sintactică pe care o au tipurile primitive.\n\nPentru afișarea unui obiect în consolă cu 'std::cout << obj', se supraîncarcă operatorul de inserție 'operator<<'. Deoarece primul operand din stânga este un flux ('std::ostream&'), iar al doilea operand din dreapta este obiectul ('const T&'), operatorul NU poate fi o metodă membră a clasei T! El trebuie implementat ca o funcție liberă (adesea declarată 'friend' în interiorul clasei).\n\nFuncția operator<< primește o referință la fluxul de ieșire și returnează aceeași referință ('std::ostream&') pentru a permite înlănțuirea firească a instrucțiunilor de afișare ('std::cout << a << b << c;').",
    "glossary": [
      {
        "term": "Operator Overloading",
        "def": "Definirea de logică personalizată pentru operatorii standard (+, -, <<)."
      },
      {
        "term": "std::ostream&",
        "def": "Tipul fluxului de ieșire returnat prin referință pentru a permite înlănțuirea <<."
      },
      {
        "term": "Symmetric Operators",
        "def": "Operatori binari implementați ca funcții libere pentru a permite conversii pe ambii operanzi."
      },
      {
        "term": "stream chaining",
        "def": "Înlănțuirea succesivă a operatorilor de flux (std::cout << x << y)."
      }
    ],
    "example": "#include <iostream>\n\nclass Punct {\n    int m_x, m_y;\npublic:\n    Punct(int x, int y) : m_x{x}, m_y{y} {}\n    friend std::ostream& operator<<(std::ostream& os, const Punct& p) {\n        os << \"(\" << p.m_x << \", \" << p.m_y << \")\";\n        return os; // Permite inlantuirea!\n    }\n};",
    "prompt": "Scrie semnătura completă a funcției libere de supraîncărcare a operatorului de afișare << pentru clasa Vector3D.",
    "caseSensitive": true,
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
      {
        "left": "operator<<",
        "right": "Operatorul de inserție în flux (std::cout)"
      },
      {
        "left": "operator>>",
        "right": "Operatorul de extracție din flux (std::cin)"
      },
      {
        "left": "return os;",
        "right": "Returnează fluxul pentru a permite înlănțuirea"
      },
      {
        "left": "friend",
        "right": "Permite operatorului extern accesul la membrii privați"
      }
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
      {
        "term": "Spaceship Operator (<=>)",
        "def": "Operatorul C++20 ce rezolvă simultan toate comparațiile de mai mic, egal și mai mare."
      },
      {
        "term": "std::strong_ordering",
        "def": "Categorie de comparare strictă unde egalitatea implică substituibilitate perfectă."
      },
      {
        "term": "= default",
        "def": "Instrucțiune ce cere compilatorului să genereze automat implementarea optimă."
      },
      {
        "term": "<compare>",
        "def": "Header-ul C++20 ce conține tipurile de ordonare strong, weak și partial."
      }
    ],
    "example": "#include <compare>\n\nstruct Jucator {\n    int scor;\n    int nivel;\n    // C++20 genereaza automat ==, !=, <, <=, >, >= dintr-o singura linie:\n    auto operator<=>(const Jucator&) const = default;\n};\n\nJucator a{100, 2}, b{150, 1};\nbool maiBun = (b > a); // Functioneaza automat!",
    "prompt": "Completează declarația implicită din clasa Masina a operatorului spaceship C++20 cu implementare implicită: auto operator<=>(const Masina&) const = default;.",
    "caseSensitive": true,
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
      {
        "left": "operator<=>",
        "right": "Operatorul spaceship ce determină ordinea relativă"
      },
      {
        "left": "= default",
        "right": "Generează automat compararea membru cu membru"
      },
      {
        "left": "std::strong_ordering",
        "right": "Categorie de ordonare strictă fără ambiguități"
      },
      {
        "left": "<compare>",
        "right": "Header-ul obligatoriu pentru compararea trei-căi"
      }
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
      {
        "term": "Moștenire publică",
        "def": "Relație de tip IS-A în care interfața publică a bazei rămâne publică în derivată."
      },
      {
        "term": "protected",
        "def": "Acces permis exclusiv metodelor clasei curente și claselor derivate."
      },
      {
        "term": "Ordinea construcției",
        "def": "Clasa de bază se construiește prima; la distrugere, derivata se distruge prima."
      },
      {
        "term": "Base Initializer",
        "def": "Invocarea constructorului bazei din lista de inițializare a clasei derivate."
      }
    ],
    "example": "class Entitate {\nprotected:\n    int m_viata{100}; // Accesibil in derivate!\npublic:\n    Entitate(int v) : m_viata{v} {}\n};\n\nclass Jucator : public Entitate {\nprivate:\n    std::string m_nume;\npublic:\n    Jucator(std::string_view nume, int v) \n        : Entitate{v}, m_nume{nume} {} // Apel constructor baza\n};",
    "prompt": "Scrie antetul declarației clasei Robot care moștenește public clasa Dispozitiv.",
    "caseSensitive": true,
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
      {
        "left": ": public Base",
        "right": "Moștenire publică standard (relație IS-A)"
      },
      {
        "left": "protected:",
        "right": "Accesibil doar în clasa curentă și în descendenții săi"
      },
      {
        "left": "Ordinea construcției",
        "right": "Baza se construiește înaintea derivatei"
      },
      {
        "left": "Ordinea distrugerii",
        "right": "Derivata se distruge înaintea bazei"
      }
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
      {
        "term": "virtual",
        "def": "Cuvânt cheie ce marchează o metodă pentru legare dinamică la runtime."
      },
      {
        "term": "VTable",
        "def": "Tabelă generată de compilator ce conține adresele funcțiilor virtuale ale clasei."
      },
      {
        "term": "vptr",
        "def": "Pointer ascuns în fiecare obiect polimorfic ce indică spre VTable-ul său."
      },
      {
        "term": "Dynamic Dispatch",
        "def": "Determinarea la timpul execuției a metodei apelate pe baza tipului real."
      }
    ],
    "example": "class Forma {\npublic:\n    virtual void deseneaza() const { // Metoda virtuala!\n        std::cout << \"Forma generica\\n\";\n    }\n};\n\nclass Cerc : public Forma {\npublic:\n    void deseneaza() const override {\n        std::cout << \"Cerc desenat\\n\";\n    }\n};\n\nForma* f = new Cerc();\nf->deseneaza(); // Afiseaza 'Cerc desenat' datorita VTable-ului!",
    "prompt": "Scrie declarația unei metode virtuale numită calculeaza() ce nu primește parametri și returnează double.",
    "caseSensitive": true,
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
      {
        "left": "virtual",
        "right": "Activează legarea dinamică la timpul execuției"
      },
      {
        "left": "VTable",
        "right": "Tabela de pointeri către metodele virtuale ale clasei"
      },
      {
        "left": "vptr",
        "right": "Pointerul din fiecare instanță ce pointează la VTable"
      },
      {
        "left": "Dynamic Binding",
        "right": "Rezolvarea apelului de funcție la runtime"
      }
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
      {
        "term": "override",
        "def": "Specificator C++11 ce forțează compilatorul să valideze suprascrierea unei metode virtuale."
      },
      {
        "term": "final",
        "def": "Specificator ce blochează suprascrierea unei metode sau moștenirea unei clase."
      },
      {
        "term": "Devirtualizare",
        "def": "Optimizare de compilator ce transformă apelul indirect virtual într-un salt direct."
      },
      {
        "term": "Signature Mismatch",
        "def": "Eroare subtilă de neconcordanță a parametrilor ce împiedică suprascrierea."
      }
    ],
    "example": "class Baza {\npublic:\n    virtual void proceseaza(int x);\n};\n\nclass Derivata : public Baza {\npublic:\n    // 'override' asigura ca semnaturile coincid perfect:\n    void proceseaza(int x) override;\n    // void proceseaza(double x) override; // EROARE DE COMPILARE: Detecteaza greseala de tip!\n};",
    "prompt": "Completează semnătura metodei render() fără parametri, cu tipul de return void, care suprascrie sigur o metodă virtuală din clasa de bază folosind override.",
    "caseSensitive": true,
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
      {
        "left": "override",
        "right": "Verifică la compilare că metoda suprascrie o funcție din bază"
      },
      {
        "left": "final (metodă)",
        "right": "Interzice derivatelor viitoare să suprascrie această metodă"
      },
      {
        "left": "final (clasă)",
        "right": "Interzice complet moștenirea clasei de către alte clase"
      },
      {
        "left": "Devirtualizare",
        "right": "Elimină costul VTable dacă clasa este finală"
      }
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
      {
        "term": "Pure Virtual (= 0)",
        "def": "Metodă fără implementare obligatorie în bază ce definește o interfață."
      },
      {
        "term": "Clasă Abstractă",
        "def": "Clasă cu cel puțin o metodă = 0, ce nu poate fi instanțiată direct."
      },
      {
        "term": "Virtual Destructor",
        "def": "Garantează apelul lanțului complet de destructori la ștergerea prin pointer la bază."
      },
      {
        "term": "Memory Leak",
        "def": "Memorie alocată pe Heap care nu mai este eliberată din cauza omiterii destructorului."
      }
    ],
    "example": "class DispozitivInterfata {\npublic:\n    virtual void porneste() = 0; // Metoda virtuala pura!\n    virtual ~DispozitivInterfata() = default; // Destructor virtual critic!\n};\n\n// DispozitivInterfata d; // EROARE: Clasa abstracta nu se poate instantia!",
    "prompt": "Scrie declarația unei metode virtuale pure numită execute() fără parametri, ce returnează void și are sufixul = 0;.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "virtual void execute() = 0;",
      "virtual void execute() = 0"
    ],
    "regexPattern": "^virtual\\s+void\\s+execute\\s*\\(\\s*\\)\\s*=\\s*0\\s*;?$",
    "officialSolution": "virtual void execute() = 0;",
    "explanation": "Sintaxa virtual tip nume() = 0; declară o metodă virtuală pură și transformă clasa în clasă abstractă.",
    "hint": "virtual void execute() = 0;",
    "matchingPairs": [
      {
        "left": "= 0;",
        "right": "Declară o funcție virtuală pură (pure virtual)"
      },
      {
        "left": "Clasă abstractă",
        "right": "Poate fi utilizată doar ca interfață și pointer/referință"
      },
      {
        "left": "virtual ~Baza()",
        "right": "Obligatoriu pentru distrugerea sigură a claselor polimorfice"
      },
      {
        "left": "Clasă concretă",
        "right": "Clasă care a implementat toate metodele pure și se poate instanția"
      }
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
      {
        "term": "static_cast",
        "def": "Conversie verificată la compile-time între tipuri compatibile matematic sau ierarhic."
      },
      {
        "term": "dynamic_cast",
        "def": "Conversie polimorfică la runtime ce folosește RTTI și returnează nullptr la eșec."
      },
      {
        "term": "reinterpret_cast",
        "def": "Reinterpretare binară directă a memoriei la cel mai scăzut nivel hardware."
      },
      {
        "term": "const_cast",
        "def": "Operator specializat exclusiv pe adăugarea sau înlăturarea atributului const."
      }
    ],
    "example": "Forma* f = new Cerc();\n\n// Downcasting sigur la runtime prin dynamic_cast:\nCerc* c = dynamic_cast<Cerc*>(f);\nif (c != nullptr) {\n    std::cout << \"Cast reusit! Este un Cerc real.\\n\";\n}\n\n// Conversie numerica sigura la compilare:\ndouble d = 4.5;\nint i = static_cast<int>(d); // 4",
    "prompt": "Scrie conversia explicită modernă a variabilei double numită rata la tipul int folosind static_cast.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "static_cast<int>(rata)",
      "static_cast<int>(rata);"
    ],
    "regexPattern": "^static_cast<int>\\s*\\(\\s*rata\\s*\\);?$",
    "officialSolution": "static_cast<int>(rata)",
    "explanation": "static_cast<int>(rata) este modalitatea standard, sigură și căutabilă în cod pentru conversii numerice.",
    "hint": "static_cast<int>(rata)",
    "matchingPairs": [
      {
        "left": "static_cast<T>",
        "right": "Conversie sigură verificată la momentul compilării"
      },
      {
        "left": "dynamic_cast<T>",
        "right": "Downcasting polimorfic sigur la runtime (returnează nullptr)"
      },
      {
        "left": "reinterpret_cast<T>",
        "right": "Reinterpretare brută de adrese de memorie (nivel jos)"
      },
      {
        "left": "const_cast<T>",
        "right": "Elimină specificatorul const de pe un pointer/referință"
      }
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
      {
        "term": "std::vector",
        "def": "Tablou dinamic cu memorie contiguă pe Heap ce oferă acces O(1) prin index."
      },
      {
        "term": "size()",
        "def": "Numărul de elemente active stocate în prezent în container."
      },
      {
        "term": "capacity()",
        "def": "Capacitatea totală de stocare alocată în memoria RAM fără necesitatea realocării."
      },
      {
        "term": "emplace_back",
        "def": "Construiește elementul direct în buffer-ul vectorului, eliminând copiile temporare."
      }
    ],
    "example": "#include <vector>\n#include <iostream>\n\nstd::vector<int> numere;\nnumere.reserve(100); // Aloca spatiu pentru 100 intregi in avans (zero realocari!)\n\nnumere.push_back(10);\nnumere.emplace_back(20); // Constructie in-place\n\nstd::cout << \"Size: \" << numere.size() << \" Capacity: \" << numere.capacity() << \"\\n\";",
    "prompt": "Scrie metoda apelată pe un std::vector numit lista pentru a prealoca memorie în avans pentru 50 de elemente fără a adăuga elemente active.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "lista.reserve(50);",
      "lista.reserve(50)"
    ],
    "regexPattern": "^lista\\.reserve\\s*\\(\\s*50\\s*\\)\\s*;?$",
    "officialSolution": "lista.reserve(50);",
    "explanation": "Metoda reserve(N) mărește capacitatea vectorului la N fără a crea elemente noi, prevenind realocările.",
    "hint": "lista.reserve(50);",
    "matchingPairs": [
      {
        "left": "v.reserve(N)",
        "right": "Prealocă memorie mărind capacity fără a modifica size"
      },
      {
        "left": "v.resize(N)",
        "right": "Modifică efectiv numărul de elemente din vector"
      },
      {
        "left": "emplace_back",
        "right": "Construiește obiectul direct în container (in-place)"
      },
      {
        "left": "v.shrink_to_fit()",
        "right": "Eliberează capacitatea excedentară neutilizată"
      }
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
      {
        "term": "std::map",
        "def": "Dicționar asociativ sortat implementat ca Red-Black Tree cu căutare O(log N)."
      },
      {
        "term": "std::unordered_map",
        "def": "Dicționar asociativ nesortat bazat pe Hash Table cu căutare medie O(1)."
      },
      {
        "term": "Hash Function",
        "def": "Funcție matematică ce transformă cheia într-un index de bucket în memorie."
      },
      {
        "term": "Red-Black Tree",
        "def": "Arbore binar echilibrat ce garantează operații O(log N) în cel mai defavorabil caz."
      }
    ],
    "example": "#include <map>\n#include <unordered_map>\n#include <string>\n\n// 1. Ordonat dupa cheie (Red-Black Tree): O(log N)\nstd::map<std::string, int> varsteSortate;\nvarsteSortate[\"Bogdan\"] = 30;\nvarsteSortate[\"Andrei\"] = 25; // 'Andrei' va fi primul la parcurgere!\n\n// 2. Neordonat, ultra-rapid (Hash Table): O(1)\nstd::unordered_map<std::string, int> cacheRapid;\ncacheRapid[\"user_102\"] = 99;",
    "prompt": "Declară un container std::map numit inventar care asociază chei de tip std::string cu valori întregi de tip int.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::map<std::string, int> inventar;",
      "std::map<std::string, int> inventar{};"
    ],
    "regexPattern": "^std::map<std::string,\\s*int>\\s+inventar\\s*(\\{\\s*\\})?\\s*;$",
    "officialSolution": "std::map<std::string, int> inventar;",
    "explanation": "Sintaxa std::map<KeyType, ValueType> nume; declară un dicționar ordonat pe baza cheii.",
    "hint": "std::map<std::string, int> inventar;",
    "matchingPairs": [
      {
        "left": "std::map",
        "right": "Elemente ordonate automat după cheie (Red-Black Tree, O(log N))"
      },
      {
        "left": "std::unordered_map",
        "right": "Elemente nesortate dar acces mediu O(1) prin Hash Table"
      },
      {
        "left": "m.find(key)",
        "right": "Returnează un iterator către element sau m.end() dacă nu există"
      },
      {
        "left": "operator[]",
        "right": "Inserează automat o valoare implicită dacă cheia lipsește"
      }
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
  },
  {
    "id": "cpp-adv-3",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Containere cu Mărime Fixă: std::array<T, N> și Siguranța pe Stivă",
    "theory": "În timp ce 'std::vector' alocă memorie pe Heap, iar tablourile clasice C ('T arr[N]') decad periculos în pointeri fără a-și cunoaște mărimea, C++11 oferă containerul ideal pentru secvențe fixe: 'std::array<T, N>' din header-ul '<array>'.\n\n'std::array' este un container subțire (thin wrapper) peste un tablou C nativ, stocat direct pe stivă (zero alocare dinamică), dar dotat cu întreaga interfață standard STL: 'size()', 'begin()', 'end()', 'at()' și bucle range-based for.\n\nSpre deosebire de tablourile C, 'std::array' NU decade automat în pointeri la transmiterea către funcții, poate fi copiat și atribuit direct prin '=' și oferă metoda 'at(index)' care aruncă excepția 'std::out_of_range' dacă indexul depășește limitele, prevenind breșele de memorie.",
    "glossary": [
      {
        "term": "std::array<T, N>",
        "def": "Container STL de mărime fixă alocat direct pe stivă fără overhead pe Heap."
      },
      {
        "term": "Stack Allocation",
        "def": "Alocare ultra-rapidă realizată printr-o simplă mutare a pointerului de stivă (RSP)."
      },
      {
        "term": "at() vs []",
        "def": "Metoda at() verifică limitele la runtime aruncând excepții, pe când [] este neprotejat."
      },
      {
        "term": "Non-decay",
        "def": "Proprietatea std::array de a-și păstra tipul și dimensiunea exactă la transmiterea ca parametru."
      }
    ],
    "example": "#include <array>\n#include <iostream>\n\nstd::array<int, 4> puncte{10, 20, 30, 40}; // 16 octeti alocati pe STIVA!\n\nstd::cout << \"Numar elemente: \" << puncte.size() << \"\\n\";\nfor (const auto p : puncte) {\n    std::cout << p << \" \";\n}",
    "prompt": "Declară un container std::array de tip double cu dimensiunea fixă de 3 elemente, numit coordonate.",
    "caseSensitive": true,
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
      {
        "left": "std::array<T, N>",
        "right": "Tablou STL de mărime fixă stocat direct pe stivă"
      },
      {
        "left": "arr.size()",
        "right": "Returnează N ca expresie constantă constexpr"
      },
      {
        "left": "arr.at(i)",
        "right": "Acces protejat ce aruncă std::out_of_range la depășire"
      },
      {
        "left": "arr.data()",
        "right": "Returnează un pointer brut T* către bufferul de memorie"
      }
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
      {
        "term": "Iterator",
        "def": "Obiect ce generalizează un pointer pentru navigarea secvențială a containerelor."
      },
      {
        "term": "[begin, end)",
        "def": "Interval semi-deschis în care end() indică dincolo de ultimul element valid."
      },
      {
        "term": "std::ranges",
        "def": "Modul C++20 ce permite rularea algoritmilor direct pe containere fără iteratori manuali."
      },
      {
        "term": "Ranges Pipe (|)",
        "def": "Sintaxă C++20 pentru înlănțuirea leneșă (lazy) a transformărilor de date."
      }
    ],
    "example": "#include <vector>\n#include <algorithm>\n#include <ranges>\n#include <iostream>\n\nstd::vector<int> numere{5, 2, 8, 1, 9};\n\n// 1. C++20 Ranges: sortare directa fara v.begin(), v.end():\nstd::ranges::sort(numere);\n\n// 2. Filtrare lenesa cu operatorul pipe |:\nfor (int n : numere | std::views::filter([](int x){ return x % 2 != 0; })) {\n    std::cout << n << \" \"; // Afiseaza doar numerele impare\n}",
    "prompt": "Scrie instrucțiunea modernă C++20 pentru a sorta direct containerul numere folosind std::ranges::sort.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::ranges::sort(numere);",
      "std::ranges::sort(numere)"
    ],
    "regexPattern": "^std::ranges::sort\\s*\\(\\s*numere\\s*\\)\\s*;?$",
    "officialSolution": "std::ranges::sort(numere);",
    "explanation": "std::ranges::sort(container) sortează direct întreaga secvență fără a specifica manual begin() și end().",
    "hint": "std::ranges::sort(numere);",
    "matchingPairs": [
      {
        "left": "v.begin()",
        "right": "Iterator către primul element valid din container"
      },
      {
        "left": "v.end()",
        "right": "Iterator santinelă poziționat după ultimul element"
      },
      {
        "left": "std::ranges::sort",
        "right": "Sortare directă a containerului fără perechi de iteratori"
      },
      {
        "left": "std::views::filter",
        "right": "Vedere leneșă (lazy) ce filtrează elementele la cerere"
      }
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
      {
        "term": "Algoritmi STL",
        "def": "Funcții generice ce decuplează logica de procesare de structura containerului."
      },
      {
        "term": "Predicat",
        "def": "Funcție sau obiect invocabil ce primește un element și returnează o valoare booleană."
      },
      {
        "term": "IntroSort",
        "def": "Algoritmul hibrid din spatele lui std::sort ce garantează O(N log N)."
      },
      {
        "term": "std::find_if",
        "def": "Algoritm de căutare liniară ce returnează primul iterator ce satisface un predicat."
      }
    ],
    "example": "#include <vector>\n#include <algorithm>\n#include <iostream>\n\nstd::vector<int> scoruri{45, 88, 92, 60};\n\n// Gaseste primul scor de trecere (>= 50):\nauto it = std::find_if(scoruri.begin(), scoruri.end(), [](int s) {\n    return s >= 50;\n});\n\nif (it != scoruri.end()) {\n    std::cout << \"Gasit: \" << *it << \"\\n\"; // 88\n}",
    "prompt": "Scrie comanda clasică STL pentru a sorta întregul vector numere în ordine crescătoare folosind std::sort cu begin() și end().",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::sort(numere.begin(), numere.end());",
      "std::sort(numere.begin(), numere.end())"
    ],
    "regexPattern": "^std::sort\\s*\\(\\s*numere\\.begin\\(\\)\\s*,\\s*numere\\.end\\(\\)\\s*\\)\\s*;?$",
    "officialSolution": "std::sort(numere.begin(), numere.end());",
    "explanation": "std::sort primește iteratorul de început și cel de final pentru a ordona elementele.",
    "hint": "std::sort(numere.begin(), numere.end());",
    "matchingPairs": [
      {
        "left": "std::sort",
        "right": "Sortează elementele în O(N log N) prin IntroSort"
      },
      {
        "left": "std::find_if",
        "right": "Găsește primul element care îndeplinește o condiție"
      },
      {
        "left": "std::transform",
        "right": "Aplică o funcție fiecărui element și stochează rezultatul"
      },
      {
        "left": "std::accumulate",
        "right": "Calculează suma sau reducerea cumulativă a elementelor"
      }
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
      {
        "term": "template <typename T>",
        "def": "Directiva ce declară un parametru generic de tip pentru funcție sau clasă."
      },
      {
        "term": "Instanțiere",
        "def": "Procesul de generare la compilare a codului binar concret pentru un tip specific T."
      },
      {
        "term": "Type Deduction",
        "def": "Capacitatea compilatorului de a deduce automat tipul T din valorile parametrilor."
      },
      {
        "term": "Specializare Template",
        "def": "Furnizarea unei implementări particulare pentru un tip anume (ex: T = bool)."
      }
    ],
    "example": "template <typename T>\nT maxim(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint x = maxim(10, 20);       // Compilatorul instantiaza maxim<int>\ndouble y = maxim(3.14, 2.71); // Compilatorul instantiaza maxim<double>",
    "prompt": "Scrie antetul de declarație a unui șablon de funcție cu un singur parametru generic de tip numit T (folosind cuvântul cheie typename).",
    "caseSensitive": true,
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
      {
        "left": "template <typename T>",
        "right": "Declară un șablon generic parametrizat pe tipul T"
      },
      {
        "left": "Instanțiere",
        "right": "Compilatorul generează codul nativ pentru tipul concret"
      },
      {
        "left": "TAD",
        "right": "Deducerea automată a tipului T din argumentele apelului"
      },
      {
        "left": "Zero runtime overhead",
        "right": "Codul generat este la fel de rapid ca o funcție scrisă manual"
      }
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
      {
        "term": "concept",
        "def": "Constrângere numită C++20 evaluată la compile-time ce validează proprietățile unui tip."
      },
      {
        "term": "requires clause",
        "def": "Clauză ce specifică cerințele operaționale sau sintactice obligatorii pentru un șablon."
      },
      {
        "term": "<concepts>",
        "def": "Header C++20 ce oferă concepte standard (std::integral, std::floating_point)."
      },
      {
        "term": "SFINAE",
        "def": "Mecanismul vechi și complex C++ de eliminare a erorilor de substituție."
      }
    ],
    "example": "#include <concepts>\n\n// Constrangere directa prin concept standard:\ntemplate <std::integral T>\nT calculeazaRest(T a, T b) {\n    return a % b;\n}\n\ncalculeazaRest(10, 3);    // Valid: int este integral\n// calculeazaRest(4.5, 1.2); // EROARE IMEDIATA LIZIBILA: double nu este std::integral!",
    "prompt": "Scrie antetul de șablon pentru funcția care constrânge tipul T să respecte conceptul standard std::integral folosind sintaxa directă: template <std::integral T>.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "template <std::integral T>",
      "template<std::integral T>"
    ],
    "regexPattern": "^template\\s*<\\s*std::integral\\s+T\\s*>$",
    "officialSolution": "template <std::integral T>",
    "explanation": "În C++20, numele conceptului (std::integral) poate înlocui direct cuvântul cheie generic typename.",
    "hint": "template <std::integral T>",
    "matchingPairs": [
      {
        "left": "template <std::integral T>",
        "right": "Acceptă doar tipuri întregi (int, long, short etc.)"
      },
      {
        "left": "requires",
        "right": "Introduce condiții logice suplimentare pentru template"
      },
      {
        "left": "std::floating_point",
        "right": "Concept standard pentru tipuri cu virgulă mobilă (float, double)"
      },
      {
        "left": "Compile-time error",
        "right": "Eroare scurtă și clară generată imediat dacă tipul e invalid"
      }
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
      {
        "term": "Lambda Expression",
        "def": "Funcție anonimă locală compilată ca un obiect funcțional (functor)."
      },
      {
        "term": "Capture List ([])",
        "def": "Specifică variabilele externe accesibile și dacă sunt capturate prin copie sau referință."
      },
      {
        "term": "mutable",
        "def": "Specificator ce permite modificarea copiilor locale ale variabilelor capturate prin valoare."
      },
      {
        "term": "Init Capture",
        "def": "Sintaxă C++14 ce permite inițializarea și mutarea resurselor în starea lambda."
      }
    ],
    "example": "#include <iostream>\n\nint factor{5};\n\n// Lambda cu captare explicita prin valoare si specificator mutable:\nauto multiplicator = [factor](int x) mutable {\n    factor += 2; // Permis datorita lui mutable!\n    return x * factor;\n};\n\nstd::cout << multiplicator(10); // 70 (10 * 7)\nstd::cout << factor; // 5 (variabila externa originala nu a fost afectata!)",
    "prompt": "Scrie o expresie lambda anonimă C++ care primește un întreg int x și returnează x * 2 (fără a captura nimic din exterior []).",
    "caseSensitive": true,
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
      {
        "left": "[&]",
        "right": "Capturează toate variabilele externe prin referință"
      },
      {
        "left": "[=]",
        "right": "Capturează toate variabilele externe prin copiere"
      },
      {
        "left": "[x = std::move(p)]",
        "right": "Transferă proprietatea unui obiect move-only în lambda"
      },
      {
        "left": "mutable",
        "right": "Permite modificarea variabilelor capturate prin valoare"
      }
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
      {
        "term": "Stack Unwinding",
        "def": "Procesul automat de apel al destructorilor obiectelor de pe stivă la aruncarea unei excepții."
      },
      {
        "term": "std::exception",
        "def": "Clasa de bază standard cu metoda virtuală what() pentru descrierea erorilor."
      },
      {
        "term": "noexcept",
        "def": "Garanție la compilare că o funcție nu aruncă excepții, permițând optimizări de mutare."
      },
      {
        "term": "Object Slicing",
        "def": "Trunchierea datelor clasei derivate cauzată de prinderea erorii prin valoare în loc de referință."
      }
    ],
    "example": "#include <stdexcept>\n#include <iostream>\n\ndouble imparte(double a, double b) {\n    if (b == 0.0) {\n        throw std::invalid_argument(\"Impartire la zero interzisa!\");\n    }\n    return a / b;\n}\n\ntry {\n    double r = imparte(10.0, 0.0);\n} catch (const std::exception& e) { // Prindere sigura prin const&\n    std::cerr << \"Eroare: \" << e.what() << \"\\n\";\n}",
    "prompt": "Scrie blocul catch care interceptează orice excepție derivată din clasa standard std::exception prin referință constantă numită e.",
    "caseSensitive": true,
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
      {
        "left": "throw",
        "right": "Aruncă o excepție semnalând o eroare critică"
      },
      {
        "left": "catch (const std::exception&)",
        "right": "Prinde excepția polimorfic fără object slicing"
      },
      {
        "left": "Stack Unwinding",
        "right": "Distrugerea sigură a obiectelor de pe stivă în timpul excepției"
      },
      {
        "left": "noexcept",
        "right": "Garantează că funcția nu aruncă excepții (apelează std::terminate)"
      }
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
  },
  {
    "id": "cpp-sys-posix-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Apeluri de Sistem POSIX: Descriptori de Fișiere (open, read, write, close)",
    "theory": "Sub platformele UNIX/Linux (inclusiv macOS), interacțiunea de nivel scăzut cu fișierele și dispozitivele ocolește stream-urile C++ de tip fstream și folosește direct apelurile de sistem POSIX. În modelul UNIX, 'totul este un fișier', iar accesul se realizează prin 'Descriptori de Fișiere' (File Descriptors - FD), reprezentate ca simple numere întregi pozitive.\n\nDescriptorii standard pre-deschiși sunt: 0 pentru STDIN_FILENO (intrare), 1 pentru STDOUT_FILENO (ieșire) și 2 pentru STDERR_FILENO (erori). Apelul 'open(path, flags, mode)' solicită kernel-ului alocarea unui nou FD în tabela de fișiere a procesului (folosind flag-uri bitwise precum O_RDONLY, O_WRONLY, O_CREAT, O_TRUNC).\n\nCitirea și scrierea se realizează prin 'read(fd, buffer, count)' și 'write(fd, buffer, count)', care transferă blocuri brute de octeți fără bufferizare în spațiul utilizator (unbuffered I/O). La final, apelul 'close(fd)' eliberează descriptorul înapoi către kernel.",
    "glossary": [
      {
        "term": "File Descriptor",
        "def": "Index întreg pozitiv în tabela kernel-ului ce identifică un canal deschis de I/O."
      },
      {
        "term": "open()",
        "def": "Apel de sistem POSIX ce deschide sau creează un fișier returnând un descriptor."
      },
      {
        "term": "O_CREAT | O_WRONLY",
        "def": "Măști de biți ce instruiesc kernel-ul să deschidă fișierul pentru scriere și să îl creeze dacă lipsește."
      },
      {
        "term": "Unbuffered I/O",
        "def": "Transfer direct între memoria procesului și cache-ul kernel-ului fără buffer în libc."
      }
    ],
    "example": "#include <fcntl.h>\n#include <unistd.h>\n#include <iostream>\n\nint fd = open(\"date.bin\", O_WRONLY | O_CREAT | O_TRUNC, 0644);\nif (fd == -1) {\n    std::cerr << \"Eroare la deschidere!\\n\";\n} else {\n    const char text[] = \"Kernel I/O\";\n    write(fd, text, sizeof(text) - 1);\n    close(fd); // Inchidere obligatorie a descriptorului!\n}",
    "prompt": "Scrie apelul de sistem POSIX pentru a închide descriptorul de fișier reținut în variabila fd.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "close(fd);",
      "close(fd)"
    ],
    "regexPattern": "^close\\s*\\(\\s*fd\\s*\\)\\s*;?$",
    "officialSolution": "close(fd);",
    "explanation": "Apelul close(fd); notifică kernel-ul să șteargă indexul fd din tabela procesului și să elibereze resursele.",
    "hint": "close(fd);",
    "matchingPairs": [
      {
        "left": "open()",
        "right": "Deschide resursa și returnează un descriptor întreg (FD)"
      },
      {
        "left": "read()",
        "right": "Citește octeți bruți direct în bufferul furnizat"
      },
      {
        "left": "write()",
        "right": "Scrie octeți din buffer către descriptorul de fișier"
      },
      {
        "left": "close()",
        "right": "Eliberează descriptorul înapoi către sistemul de operare"
      }
    ],
    "quiz": {
      "question": "Ce valoare numerică returnează apelul de sistem POSIX 'open()' dacă fișierul nu poate fi accesat?",
      "options": [
        "0 (deoarece 0 este primul descriptor)",
        "-1 (indicând eroare, codul specific fiind salvat în errno)",
        "nullptr",
        "Aruncă o excepție de tip std::ios_base::failure"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-sys-posix-2",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Fișiere Mapate în Memorie: mmap(), munmap() și I/O de Mare Viteză",
    "theory": "Pentru procesarea fișierelor masive (baze de date, modele AI, indexări de text de zeci de gigaocteți), apelurile convenționale read/write devin o gâtuire de performanță deoarece copiază datele de două ori: din disc în Page Cache-ul kernel-ului, și apoi din kernel în spațiul de adrese al procesului.\n\nApelul de sistem 'mmap()' (Memory Map) din '<sys/mman.h>' revoluționează acest transfer: el mapează un fișier direct în spațiul de memorie virtuală al procesului. Fișierul devine accesibil ca un simplu pointer brut la tablou în memorie ('const char* data = (const char*)mmap(...)').\n\nPaginile de date sunt încărcate leneș (on-demand) direct de unitatea de gestiune a memoriei (MMU) a procesorului prin mecanismul de 'Page Fault'. Când accesul se încheie, memoria este demapată cu 'munmap(addr, length)'. Aceasta oferă viteză de acces la fișiere comparabilă cu citirea din RAM.",
    "glossary": [
      {
        "term": "mmap()",
        "def": "Apel de sistem ce proiectează un fișier direct în adresele virtuale ale procesului."
      },
      {
        "term": "munmap()",
        "def": "Eliberează maparea de memorie virtuală alocată anterior de mmap."
      },
      {
        "term": "Page Fault",
        "def": "Întrerupere hardware generată de MMU când o pagină virtuală este accesată prima dată."
      },
      {
        "term": "Zero-Copy I/O",
        "def": "Tehnică ce elimină copierea intermediară de date între kernel și user-space."
      }
    ],
    "example": "#include <sys/mman.h>\n#include <fcntl.h>\n#include <unistd.h>\n\nint fd = open(\"baza_date.dat\", O_RDONLY);\nsize_t dim = 1024 * 1024; // 1 MB\n\n// Mapeaza 1 MB direct in memoria procesului in mod citire:\nvoid* addr = mmap(nullptr, dim, PROT_READ, MAP_SHARED, fd, 0);\nif (addr != MAP_FAILED) {\n    char* date = static_cast<char*>(addr);\n    char primulOctet = date[0]; // Acces direct ca la un tablou in RAM!\n    munmap(addr, dim); // Demapare la final\n}\nclose(fd);",
    "prompt": "Scrie valoarea santinelă specială returnată de apelul de sistem mmap() în caz de eroare la mapare (definită în sys/mman.h).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "MAP_FAILED"
    ],
    "regexPattern": "^MAP_FAILED;?$",
    "officialSolution": "MAP_FAILED",
    "explanation": "mmap returnează constanta MAP_FAILED ((void*)-1) în caz de eșec, nu nullptr.",
    "hint": "MAP_FAILED",
    "matchingPairs": [
      {
        "left": "mmap()",
        "right": "Proiectează fișierul direct în memoria virtuală"
      },
      {
        "left": "munmap()",
        "right": "Șterge proiecția virtuală eliberând spațiul de adrese"
      },
      {
        "left": "PROT_READ",
        "right": "Permisiune de citire a paginilor mapate"
      },
      {
        "left": "MAP_SHARED",
        "right": "Modificările sunt scrise înapoi în fișierul fizic"
      }
    ],
    "quiz": {
      "question": "De ce este 'mmap()' mult mai rapid decât 'read()' pentru fișiere de mari dimensiuni?",
      "options": [
        "Deoarece comprimă datele cu algoritmul gzip",
        "Deoarece elimină copierea duplicată a datelor între bufferul kernel-ului și cel al aplicației (Zero-Copy)",
        "Deoarece rulează doar pe unități SSD NVMe",
        "Deoarece dezactivează sistemul de fișiere"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-sys-posix-3",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Gestionarea Semnalelor POSIX: sigaction și volatile sig_atomic_t",
    "theory": "Semnalele POSIX sunt întreruperi asincrone la nivel de software trimise unui proces de către sistemul de operare sau de către alte procese (precum SIGINT la apăsarea Ctrl+C, SIGTERM pentru oprire curată sau SIGSEGV la acces ilegal de memorie).\n\nFuncția veche 'signal()' este considerată depreciată și periculoasă în sistemele moderne. Standardul POSIX cere utilizarea funcției 'sigaction()' din '<signal.h>', care garantează o instalare robustă și fără condiții de cursă (race conditions) a rutinei de tratare a semnalului (Signal Handler).\n\nÎntr-un handler de semnal este strict interzis apelul funcțiilor ne-reentrante (precum malloc, printf sau std::cout), deoarece execuția poate fi întreruptă în mijlocul unei alocări interne, ducând la deadlock. Singura operație 100% sigură este setarea unui flag global de tip 'volatile std::sig_atomic_t' pentru oprire ordonată (Graceful Shutdown).",
    "glossary": [
      {
        "term": "Signal Handler",
        "def": "Funcție apelată asincron de kernel când procesul primește un semnal specific."
      },
      {
        "term": "sigaction",
        "def": "Interfață POSIX robustă și reentrantă pentru configurarea handlerelor de semnal."
      },
      {
        "term": "Async-Signal-Safe",
        "def": "Funcții care pot fi apelate în siguranță dintr-un handler fără a produce deadlock."
      },
      {
        "term": "sig_atomic_t",
        "def": "Tip întreg a cărui citire și scriere este garantată a fi atomică chiar dacă e întreruptă de semnal."
      }
    ],
    "example": "#include <csignal>\n#include <atomic>\n#include <iostream>\n#include <unistd.h>\n\nvolatile std::sig_atomic_t g_ruleaza = 1;\n\nvoid handlerOprire(int semnal) {\n    g_ruleaza = 0; // Async-signal-safe!\n}\n\n// In main se configureaza cu sigaction pentru SIGINT (Ctrl+C)",
    "prompt": "Declară o variabilă globală numită g_stop de tip volatile std::sig_atomic_t inițializată cu valoarea 0.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "volatile std::sig_atomic_t g_stop = 0;",
      "volatile std::sig_atomic_t g_stop{0};",
      "volatile sig_atomic_t g_stop = 0;",
      "volatile sig_atomic_t g_stop{0};"
    ],
    "regexPattern": "^volatile\\s+(std::)?sig_atomic_t\\s+g_stop\\s*(=|\\{)\\s*0\\s*\\}?\\s*;$",
    "officialSolution": "volatile std::sig_atomic_t g_stop = 0;",
    "explanation": "Tipul volatile std::sig_atomic_t garantează modificări atomice sigure în interiorul handlerelor de semnale.",
    "hint": "volatile std::sig_atomic_t g_stop = 0;",
    "matchingPairs": [
      {
        "left": "SIGINT",
        "right": "Semnal de întrerupere trimis de utilizator (Ctrl+C)"
      },
      {
        "left": "SIGTERM",
        "right": "Semnal standard de solicitare a opririi curate (Graceful)"
      },
      {
        "left": "sigaction",
        "right": "Structură și funcție POSIX pentru rutine de semnal sigure"
      },
      {
        "left": "sig_atomic_t",
        "right": "Tip întreg cu scriere atomică neîntreruptibilă de semnale"
      }
    ],
    "quiz": {
      "question": "De ce este interzis apelul funcțiilor 'malloc()' sau 'std::cout' în interiorul unui Signal Handler POSIX?",
      "options": [
        "Deoarece semnalele rulează exclusiv în modul kernel pe 16 biți",
        "Deoarece nu sunt funcții async-signal-safe și pot provoca blocaj permanent (deadlock)",
        "Deoarece compilatorul dezactivează fluxurile în fișierele C++",
        "Nu este interzis, se pot folosi oricând"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-sys-posix-4",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Procese POSIX: fork(), execve(), waitpid() și Prevenirea Zombie",
    "theory": "Spre deosebire de thread-uri (care împart același spațiu de memorie virtuală), un 'Proces' deține propriul său spațiu izolat de adrese, tabele proprii de descriptori și memorie protejată de MMU. În UNIX, un nou proces este creat prin clonare folosind apelul de sistem 'fork()'.\n\n'fork()' este o funcție remarcabilă: este apelată o dată, dar returnează de două ori! În procesul părinte returnează PID-ul copilului creat (un număr pozitiv), iar în procesul copil returnează exact 0. Ulterior, copilul poate înlocui imaginea sa de memorie cu un alt binar executabil prin familia de apeluri 'execve()' / 'execlp()'.\n\nCând un proces copil se termină, el intră în starea de 'Zombie' (rămâne în tabela de procese până când părintele îi citește codul de ieșire). Pentru a elibera resursele și a preveni epuizarea tabelei PID din kernel, părintele trebuie să apeleze 'wait()' sau 'waitpid(pid, &status, 0)'.",
    "glossary": [
      {
        "term": "fork()",
        "def": "Apel de sistem ce clonează procesul apelant prin Copy-On-Write (COW)."
      },
      {
        "term": "PID",
        "def": "Process IDentifier: număr întreg unic atribuit fiecărui proces de către kernel."
      },
      {
        "term": "Proces Zombie",
        "def": "Proces terminat al cărui cod de ieșire nu a fost încă citit de părinte cu waitpid."
      },
      {
        "term": "execve()",
        "def": "Înlocuiește complet memoria procesului curent cu un nou program executabil."
      }
    ],
    "example": "#include <unistd.h>\n#include <sys/wait.h>\n#include <iostream>\n\npid_t pid = fork();\nif (pid == 0) {\n    // Suntem in procesul COPIL:\n    std::cout << \"Sunt copilul cu PID: \" << getpid() << \"\\n\";\n    _exit(0); // Terminare imediata copil\n} else if (pid > 0) {\n    // Suntem in procesul PARINTE:\n    int status;\n    waitpid(pid, &status, 0); // Curata procesul copil, prevenind starea Zombie!\n    std::cout << \"Copilul a fost curatat din sistem.\\n\";\n}",
    "prompt": "Scrie apelul de sistem POSIX fără parametri care clonează procesul curent creând un proces copil.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "fork();",
      "fork()"
    ],
    "regexPattern": "^fork\\s*\\(\\s*\\)\\s*;?$",
    "officialSolution": "fork();",
    "explanation": "Apelul fork() duplică spațiul procesului curent, returnând 0 în copil și PID-ul copilului în părinte.",
    "hint": "fork();",
    "matchingPairs": [
      {
        "left": "fork()",
        "right": "Clonează procesul curent (returnează 0 în copil)"
      },
      {
        "left": "execve()",
        "right": "Înlocuiește imaginea de memorie cu un nou binar"
      },
      {
        "left": "waitpid()",
        "right": "Așteaptă finalizarea copilului și elimină starea Zombie"
      },
      {
        "left": "getpid()",
        "right": "Returnează PID-ul unic al procesului apelant"
      }
    ],
    "quiz": {
      "question": "Ce valoare returnează apelul 'fork()' în interiorul noului proces copil creat?",
      "options": [
        "PID-ul părintelui său",
        "Valoarea 0",
        "Valoarea -1",
        "Adresa stivei procesului"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-sys-posix-5",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Comunicare Inter-Procese (IPC): Canale Anonime (pipe) și FIFO",
    "theory": "Deoarece procesele au spații de memorie complet izolate, ele nu pot partaja variabile globale sau pointeri. Pentru a transmite fluxuri de date între procese înrudite (create prin fork), UNIX oferă 'Canalele Anonime' (Pipes) prin apelul de sistem 'pipe(int pipefd[2])'.\n\n'pipe()' alocă un canal de comunicare unidirecțional în memoria kernel-ului și populează un tablou cu doi descriptori de fișiere: 'pipefd[0]' este deschis exclusiv pentru CITIRE (Read End), iar 'pipefd[1]' este deschis exclusiv pentru SCRIERE (Write End).\n\nDatele scrise în 'pipefd[1]' sunt bufferate de kernel și citite în ordinea FIFO (First-In, First-Out) din 'pipefd[0]'. Când procesul scriitor închide capătul de scriere ('close(pipefd[1])'), cititorul primește EOF (read returnează 0 octeți). Dacă ambele capete trebuie numite pe disc pentru procese neînrudite, se folosește 'mkfifo()'.",
    "glossary": [
      {
        "term": "pipe(pipefd)",
        "def": "Creează un canal unidirecțional de comunicare între procese în memoria kernel-ului."
      },
      {
        "term": "pipefd[0]",
        "def": "Capătul de intrare (Read End) utilizat pentru citirea datelor din canal."
      },
      {
        "term": "pipefd[1]",
        "def": "Capătul de ieșire (Write End) utilizat pentru injectarea datelor în canal."
      },
      {
        "term": "mkfifo()",
        "def": "Creează un canal numit (FIFO) reprezentat ca un fișier special în sistemul de fișiere."
      }
    ],
    "example": "#include <unistd.h>\n#include <iostream>\n\nint fds[2];\nif (pipe(fds) == 0) {\n    // fds[0] = citire, fds[1] = scriere\n    const char msg[] = \"Ping IPC\";\n    write(fds[1], msg, sizeof(msg)); // Trimite prin capatul de scriere\n\n    char buffer[32]{};\n    read(fds[0], buffer, sizeof(buffer)); // Citeste prin capatul de citire\n    std::cout << \"Receptionat: \" << buffer << \"\\n\";\n\n    close(fds[0]);\n    close(fds[1]);\n}",
    "prompt": "Declară un tablou de 2 întregi numit fds și apelează funcția pipe(fds) pentru a crea un canal de comunicare.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "int fds[2]; pipe(fds);",
      "int fds[2]; pipe(fds)"
    ],
    "regexPattern": "^int\\s+fds\\[\\s*2\\s*\\]\\s*;\\s*pipe\\s*\\(\\s*fds\\s*\\)\\s*;?$",
    "officialSolution": "int fds[2]; pipe(fds);",
    "explanation": "Funcția pipe populează tabloul de 2 elemente: fds[0] pentru citire și fds[1] pentru scriere.",
    "hint": "int fds[2]; pipe(fds);",
    "matchingPairs": [
      {
        "left": "pipefd[0]",
        "right": "Capătul de citire (Read End) al canalului"
      },
      {
        "left": "pipefd[1]",
        "right": "Capătul de scriere (Write End) al canalului"
      },
      {
        "left": "pipe()",
        "right": "Creează un canal anonim în memoria kernel-ului"
      },
      {
        "left": "FIFO",
        "right": "Datele ies exact în ordinea în care au fost trimise"
      }
    ],
    "quiz": {
      "question": "Care este indexul din tabloul 'int fds[2]' utilizat pentru CITIREA datelor dintr-un pipe UNIX?",
      "options": [
        "fds[0] (primul element este capătul de citire)",
        "fds[1] (al doilea element)",
        "Ambele capete permit citirea simultană",
        "fds[2]"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "cpp-sys-posix-6",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Programare de Rețea: Sockets Berkeley (socket, bind, listen, accept)",
    "theory": "Pentru comunicarea prin rețea între mașini diferite peste stiva TCP/IP, standardul universal este reprezentat de 'Berkeley Sockets API' ('<sys/socket.h>', '<netinet/in.h>'). Un socket este un descriptor de fișier special asociat unui punct terminal de rețea (adresă IP + Port).\n\nCiclul de viață al unui server TCP urmează pașii clasici: 1. 'socket(AF_INET, SOCK_STREAM, 0)' alocă resursa socket-ului pentru protocoalele IPv4 și flux de date fiabil TCP. 2. 'bind(sockfd, addr, len)' leagă socket-ul de o adresă IP locală și un port specific (ex: portul 8080).\n\n3. 'listen(sockfd, backlog)' marchează socket-ul ca fiind pasiv, gata să accepte conexiuni de intrare. 4. 'accept(sockfd, client_addr, len)' blochează execuția până când un client extern se conectează, returnând un NOU descriptor de fișier dedicat exclusiv comunicării cu acel client.",
    "glossary": [
      {
        "term": "SOCK_STREAM",
        "def": "Specifică un socket bazat pe conexiune fiabilă bidirecțională TCP."
      },
      {
        "term": "bind()",
        "def": "Asociază descriptorul de socket cu un port și o interfață IP specifică."
      },
      {
        "term": "listen()",
        "def": "Setează socket-ul în mod de ascultare a cererilor de conexiune sosite din rețea."
      },
      {
        "term": "accept()",
        "def": "Extrage prima conexiune din coadă și returnează un nou descriptor dedicat clientului."
      }
    ],
    "example": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <unistd.h>\n\n// Creare socket TCP IPv4:\nint serverFd = socket(AF_INET, SOCK_STREAM, 0);\n\nsockaddr_in adresa{};\nadresa.sin_family = AF_INET;\nadresa.sin_addr.s_addr = INADDR_ANY; // Asculta pe toate placile de retea\nadresa.sin_port = htons(8080);       // Host to Network Short\n\nbind(serverFd, (struct sockaddr*)&adresa, sizeof(adresa));\nlisten(serverFd, 10); // Coada de asteptare de 10 conexiuni",
    "prompt": "Scrie comanda C++ pentru a crea un socket TCP IPv4 folosind funcția socket() cu parametrii AF_INET, SOCK_STREAM și protocolul 0.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "socket(AF_INET, SOCK_STREAM, 0)",
      "socket(AF_INET, SOCK_STREAM, 0);",
      "int fd = socket(AF_INET, SOCK_STREAM, 0);"
    ],
    "regexPattern": "^(int\\s+[a-zA-Z0-9_]+\\s*=\\s*)?socket\\s*\\(\\s*AF_INET\\s*,\\s*SOCK_STREAM\\s*,\\s*0\\s*\\)\\s*;?$",
    "officialSolution": "socket(AF_INET, SOCK_STREAM, 0);",
    "explanation": "socket(AF_INET, SOCK_STREAM, 0) creează un descriptor de rețea TCP peste IPv4.",
    "hint": "socket(AF_INET, SOCK_STREAM, 0);",
    "matchingPairs": [
      {
        "left": "socket()",
        "right": "Creează punctul de comunicare în kernel"
      },
      {
        "left": "bind()",
        "right": "Asociază socket-ul cu portul și IP-ul local"
      },
      {
        "left": "listen()",
        "right": "Pregătește socket-ul pentru conexiuni TCP de intrare"
      },
      {
        "left": "accept()",
        "right": "Acceptă o conexiune și returnează un descriptor pentru client"
      }
    ],
    "quiz": {
      "question": "Ce returnează funcția 'accept()' a unui server TCP după ce un client se conectează cu succes?",
      "options": [
        "Un cod boolean true sau false",
        "Un nou descriptor de fișier dedicat exclusiv comunicării cu acel client conectat",
        "Adresa MAC a plăcii de rețea a serverului",
        "Șirul de caractere HTTP"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-sys-posix-7",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Multiplexare I/O Non-Blocantă: epoll și Modelul Event-Driven",
    "theory": "În arhitecturile tradiționale de servere, fiecare client nou necesita crearea unui thread separat (one-thread-per-client). Când numărul conexiunilor simultane atinge ordinul zecilor de mii (problema C10K / C100K), comutarea de context a thread-urilor și memoria consumată pe stivă (2-8 MB per thread) epuizează complet serverul.\n\nSoluția sistemelor de ultra-înaltă performanță (precum NGINX, Node.js sau Redis) este 'Multiplexarea I/O Non-Blocantă' cu mecanismul 'epoll' pe Linux (sau 'kqueue' pe BSD/macOS). Descriptorii de socket sunt configurați în mod non-blocant ('O_NONBLOCK').\n\n'epoll_create1()' creează o instanță de monitorizare în kernel bazată pe arbori Red-Black. Prin 'epoll_ctl()' înregistrăm descriptorii pe care dorim să îi supraveghem, iar un singur thread apelează 'epoll_wait()'. Kernel-ul blochează thread-ul și îl trezește DOAR atunci când pe unul dintre mii de socket-uri au sosit octeți noi, oferind o scalabilitate O(1) independentă de numărul total de conexiuni idle.",
    "glossary": [
      {
        "term": "epoll",
        "def": "Mecanism de multiplexare I/O scalabil din kernel-ul Linux pentru zeci de mii de conexiuni simultane."
      },
      {
        "term": "O_NONBLOCK",
        "def": "Flag ce face ca apelurile read/write să returneze imediat fără a bloca firul de execuție."
      },
      {
        "term": "C10K Problem",
        "def": "Provocarea de inginerie software de a deservi peste 10.000 de clienți concurenți pe un singur server."
      },
      {
        "term": "Event Loop",
        "def": "Bucla principală ce procesează evenimentele returnate de epoll_wait."
      }
    ],
    "example": "#include <sys/epoll.h>\n#include <unistd.h>\n\nint epollFd = epoll_create1(0); // Instanta epoll in kernel\n\nepoll_event ev{};\nev.events = EPOLLIN; // Notificare cand sosesc date de citit\nev.data.fd = 0;      // Monitorizam STDIN\n\nepoll_ctl(epollFd, EPOLL_CTL_ADD, 0, &ev);\n\nepoll_event evenimenteActive[10];\n// Asteapta evenimente cu timeout de 5000ms:\nint count = epoll_wait(epollFd, evenimenteActive, 10, 5000);",
    "prompt": "Scrie funcția apelată pentru a crea o instanță de monitorizare epoll în kernel-ul Linux (folosind argumentul 0): epoll_create1(0);.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "epoll_create1(0);",
      "epoll_create1(0)",
      "int epollFd = epoll_create1(0);"
    ],
    "regexPattern": "^(int\\s+[a-zA-Z0-9_]+\\s*=\\s*)?epoll_create1\\s*\\(\\s*0\\s*\\)\\s*;?$",
    "officialSolution": "epoll_create1(0);",
    "explanation": "epoll_create1(0) alocă structura internă din kernel pentru multiplexarea asincronă a evenimentelor de I/O.",
    "hint": "epoll_create1(0);",
    "matchingPairs": [
      {
        "left": "epoll_create1",
        "right": "Creează contextul de monitorizare în kernel"
      },
      {
        "left": "epoll_ctl",
        "right": "Adaugă, modifică sau șterge descriptori din monitorizare"
      },
      {
        "left": "epoll_wait",
        "right": "Așteaptă eficient evenimente gata de procesare"
      },
      {
        "left": "O_NONBLOCK",
        "right": "Previne blocarea thread-ului la citire când nu sunt date"
      }
    ],
    "quiz": {
      "question": "De ce este 'epoll' mult mai scalabil decât vechiul apel de sistem 'select()' în servere mari?",
      "options": [
        "Deoarece select() scanează liniar toți descriptorii O(N), în timp ce epoll returnează doar descriptorii activi O(1)",
        "Deoarece epoll folosește memorie video",
        "Deoarece select() suportă doar conexiuni prin cablu",
        "epoll comprimă pachetele TCP"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "cpp-mod-opt-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Tipuri Opționale: std::optional<T> (C++17) și Eliminarea Pointerilor Nuli",
    "theory": "Istoric, când o funcție putea să nu returneze nicio valoare validă (de exemplu: căutarea unui utilizator într-o bază de date), programatorii apelau la artificii periculoase: returnarea unui pointer brut 'User*' (ce putea fi 'nullptr') sau valori magice sentinelă (precum indexul '-1' sau stringul gol \"\"). Aceste abordări cauzau crash-uri masive prin 'Null Pointer Dereference'.\n\nC++17 a introdus tipul de date sigur 'std::optional<T>' în header-ul '<optional>'. Un obiect optional conține fie o valoare validă de tip T, fie starea specială 'std::nullopt' (care semnalează absența valorii).\n\nValoarea este stocată direct în obiect (fără nicio alocare pe Heap), alături de un flag boolean intern. Verificarea se face simplu cu 'has_value()' sau 'if (opt)', iar extragerea valorii cu protecție se poate face cu 'opt.value_or(valoareImplicita)', eliminând definitiv bug-urile cauzate de null.",
    "glossary": [
      {
        "term": "std::optional<T>",
        "def": "Container C++17 ce poate conține fie o valoare de tip T, fie starea std::nullopt."
      },
      {
        "term": "std::nullopt",
        "def": "Constanta standard ce reprezintă absența oricărei valori într-un std::optional."
      },
      {
        "term": "value_or()",
        "def": "Returnează valoarea conținută sau o valoare de rezervă dacă optionalul este gol."
      },
      {
        "term": "Null Dereference",
        "def": "Eroare fatală cauzată de accesarea unei zone de memorie prin pointer nul."
      }
    ],
    "example": "#include <optional>\n#include <string>\n#include <iostream>\n\nstd::optional<std::string> cautaEmail(int id) {\n    if (id == 42) return \"contact@polymath.com\";\n    return std::nullopt; // Fara valoare gasita!\n}\n\nauto email = cautaEmail(10);\nstd::cout << email.value_or(\"fara_email@domeniu.com\"); // Afiseaza fallback-ul in siguranta!",
    "prompt": "Scrie constanta standard C++17 returnată dintr-o funcție std::optional pentru a semnala absența oricărei valori: return std::nullopt;.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "return std::nullopt;",
      "return std::nullopt",
      "std::nullopt"
    ],
    "regexPattern": "^(return\\s+)?std::nullopt\\s*;?$",
    "officialSolution": "return std::nullopt;",
    "explanation": "std::nullopt este santinela standard din header-ul <optional> ce indică un container opțional gol.",
    "hint": "return std::nullopt;",
    "matchingPairs": [
      {
        "left": "std::optional<T>",
        "right": "Conține fie o valoare validă T, fie este gol"
      },
      {
        "left": "std::nullopt",
        "right": "Reprezintă absența valorii fără a folosi pointeri nuli"
      },
      {
        "left": "opt.has_value()",
        "right": "Returnează true dacă există o valoare prezentă"
      },
      {
        "left": "opt.value_or(def)",
        "right": "Extrage valoarea sau folosește valoarea implicită def"
      }
    ],
    "quiz": {
      "question": "Unde este alocată memoria pentru valoarea conținută într-un 'std::optional<int>'?",
      "options": [
        "Pe Heap prin alocatorul de sistem",
        "Direct în interiorul obiectului pe Stivă (fără alocare dinamică)",
        "Într-un fișier swap",
        "În memoria plăcii de sunet"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-mod-var-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Uniuni Tipizate Sigure: std::variant și std::visit în C++17",
    "theory": "Uniunile clasice din C ('union { int i; double d; }') stochează mai multe tipuri în aceeași zonă de memorie, însă nu știu ce tip activ conțin la un moment dat (untagged union). Dacă citești membrul greșit, se produce Undefined Behavior prin coruperea tipului.\n\nC++17 a introdus 'std::variant<Ts...>' în header-ul '<variant>'. Acesta este o 'Uniune Tipizată' (Tagged Union sau Sum Type) care ține evidența strictă a tipului stocat curent. Un variant poate stoca la un moment dat o valoare aparținând oricăruia dintre tipurile declarate în șablon.\n\nPentru a procesa valoarea fără instrucțiuni 'if-else' murdare, C++17 oferă funcția 'std::visit()'. Aceasta aplică un obiect funcțional sau un set de lambda-uri peste valoarea din variant, garantând la momentul compilării că toate tipurile posibile sunt tratate exhaustiv.",
    "glossary": [
      {
        "term": "std::variant",
        "def": "Uniune tipizată sigură C++17 ce memorează tipul activ curent."
      },
      {
        "term": "std::visit",
        "def": "Funcție ce aplică un vizitator polimorfic peste valoarea activă a unui variant."
      },
      {
        "term": "std::holds_alternative",
        "def": "Funcție șablon ce testează dacă variantul conține un anumit tip T."
      },
      {
        "term": "Tagged Union",
        "def": "Structură ce combină datele cu un indicator de tip (discriminator)."
      }
    ],
    "example": "#include <variant>\n#include <string>\n#include <iostream>\n\nstd::variant<int, double, std::string> date;\ndate = 42;            // Detine int\ndate = \"Text C++17\";  // Acum detine std::string!\n\nstd::visit([](const auto& val) {\n    std::cout << \"Valoare activa: \" << val << \"\\n\";\n}, date);",
    "prompt": "Declară un container std::variant numit rezultat care poate stoca fie un întreg de tip int, fie un șir de tip std::string.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::variant<int, std::string> rezultat;",
      "std::variant<int, std::string> rezultat{};"
    ],
    "regexPattern": "^std::variant<int,\\s*std::string>\\s+rezultat\\s*(\\{\\s*\\})?\\s*;$",
    "officialSolution": "std::variant<int, std::string> rezultat;",
    "explanation": "Sintaxa std::variant<Tip1, Tip2> nume; declară o uniune sigură ce poate comuta între tipurile menționate.",
    "hint": "std::variant<int, std::string> rezultat;",
    "matchingPairs": [
      {
        "left": "std::variant",
        "right": "Uniune sigură cu verificare automată a tipului activ"
      },
      {
        "left": "std::visit",
        "right": "Aplică un vizitator funcțional peste tipul activ"
      },
      {
        "left": "std::get<T>",
        "right": "Extrage tipul T sau aruncă std::bad_variant_access"
      },
      {
        "left": "std::holds_alternative",
        "right": "Verifică dacă variantul conține tipul specificat"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă apelezi 'std::get<int>(v)' pe un variant care conține în prezent un 'std::string'?",
      "options": [
        "Returnează valoarea 0",
        "Aruncă excepția standard std::bad_variant_access",
        "Convertește automat stringul în număr",
        "Programul repornește"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-mod-tuple-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Legături Structurate (Structured Bindings) în C++17",
    "theory": "Înainte de C++17, dacă o funcție trebuia să returneze valori multiple, opțiunile erau inestetice: fie crearea unei structuri dedicate pentru fiecare funcție, fie returnarea unui 'std::pair' sau 'std::tuple' despachetat greoi cu 'std::tie()' sau 'std::get<0>()'.\n\nC++17 a introdus una dintre cele mai apreciate facilități de sintaxă din limbaj: 'Structured Bindings' (Legături Structurate). Sintaxa 'auto [x, y, z] = functie();' permite desfacerea instantanee a valorilor unui tuplu, pereche sau structură în variabile locale independente.\n\nLegăturile structurate funcționează perfect prin copiere ('auto [a, b]'), prin referință modificabilă ('auto& [a, b]') sau prin referință constantă ('const auto& [a, b]'). Aceasta este deosebit de utilă la parcurgerea containerelor de tip map: 'for (const auto& [cheie, valoare] : dictionar)'.",
    "glossary": [
      {
        "term": "Structured Bindings",
        "def": "Sintaxa C++17 auto [a, b] ce descompune un agregat în variabile locale."
      },
      {
        "term": "std::tuple",
        "def": "Colecție eterogenă de elemente cu lungime fixă din header-ul <tuple>."
      },
      {
        "term": "std::pair",
        "def": "Tuplu specializat pe exact două elemente (first și second)."
      },
      {
        "term": "Decompoziție",
        "def": "Separarea automată a componentelor unui obiect pe baza numelui sau indexului."
      }
    ],
    "example": "#include <map>\n#include <string>\n#include <iostream>\n\nstd::map<std::string, int> scoruri{{\"Denis\", 100}, {\"Elena\", 95}};\n\n// Despachetare eleganta a perechilor cheie-valoare prin Structured Bindings:\nfor (const auto& [nume, scor] : scoruri) {\n    std::cout << nume << \" are scorul: \" << scor << \"\\n\";\n}",
    "prompt": "Scrie instrucțiunea C++17 cu legături structurate auto [x, y] pentru a despacheta perechea returnată de funcția getCoordonate();.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "auto [x, y] = getCoordonate();",
      "const auto [x, y] = getCoordonate();",
      "const auto& [x, y] = getCoordonate();",
      "auto& [x, y] = getCoordonate();"
    ],
    "regexPattern": "^(const\\s+)?auto(&)?\\s*\\[\\s*x\\s*,\\s*y\\s*\\]\\s*=\\s*getCoordonate\\(\\)\\s*;$",
    "officialSolution": "auto [x, y] = getCoordonate();",
    "explanation": "Sintaxa auto [x, y] = getCoordonate(); inițializează simultan x și y din valorile returnate.",
    "hint": "auto [x, y] = getCoordonate();",
    "matchingPairs": [
      {
        "left": "auto [a, b]",
        "right": "Despachetează membrii prin copiere"
      },
      {
        "left": "const auto& [a, b]",
        "right": "Despachetează prin referință constantă fără copiere"
      },
      {
        "left": "std::pair",
        "right": "Structură cu doi membri numiți first și second"
      },
      {
        "left": "std::make_tuple",
        "right": "Funcție utilitară pentru construirea unui tuplu"
      }
    ],
    "quiz": {
      "question": "Ce tip de structuri pot fi despachetate folosind Structured Bindings 'auto [x, y]' în C++17?",
      "options": [
        "Doar fișierele binare",
        "Tablouri C, structuri simple fără membri privați, std::pair și std::tuple",
        "Orice clasă cu constructori privați",
        "Doar numere întregi"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-mod-fold-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Template-uri Variadice și Expresii de Pliere (Fold Expressions) în C++17",
    "theory": "C++11 a introdus 'Template-urile Variadice' ('template <typename... Args>'), permițând funcțiilor și claselor să primească un număr arbitrar de argumente de tipuri diferite (parameter packs). Totuși, în C++11 despachetarea acestora necesita recursivitate la compilare cu o funcție de bază.\n\nC++17 a simplificat dramatic această tehnică prin 'Expresiile de Pliere' (Fold Expressions). O expresie de pliere permite aplicarea directă a unui operator binar peste toate elementele unui pachet de parametri fără nicio funcție recursivă.\n\nSintaxa '(... + args)' aplică adunarea peste toți parametrii: 'args1 + (args2 + args3)'. În mod similar, se pot folosi operatorii '&&' (pentru a verifica dacă toate condițiile sunt adevărate), ',' (pentru apelarea unei instrucțiuni peste fiecare argument) sau '<<' (pentru afișare consecutivă).",
    "glossary": [
      {
        "term": "Fold Expression",
        "def": "Sintaxă C++17 ce pliază un pachet de parametri peste un operator binar."
      },
      {
        "term": "Parameter Pack",
        "def": "Pachet de parametri generici notat cu elipsă 'typename... Args'."
      },
      {
        "term": "Unary Right Fold",
        "def": "Pliere de forma (args op ...) ce evaluează de la dreapta la stânga."
      },
      {
        "term": "Variadic Template",
        "def": "Șablon ce acceptă un număr variabil de argumente de tipuri eterogene."
      }
    ],
    "example": "template <typename... Args>\nauto adunaTot(Args... args) {\n    return (... + args); // Fold expression C++17: a + b + c + ...\n}\n\nint suma = adunaTot(1, 2, 3, 4, 5); // 15 calculat instant!",
    "prompt": "Scrie corpul funcției (expresia de pliere) care însumează toți parametrii din pachetul args folosind parantezele și operatorul de adunare: return (... + args);.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "return (... + args);",
      "return (... + args)",
      "(... + args)"
    ],
    "regexPattern": "^(return\\s+)?\\(\\s*\\.\\.\\.\\s*\\+\\s*args\\s*\\)\\s*;?$",
    "officialSolution": "return (... + args);",
    "explanation": "Expresia de pliere (... + args) expandează operatorul + peste întregul pachet de parametri.",
    "hint": "return (... + args);",
    "matchingPairs": [
      {
        "left": "(... + args)",
        "right": "Însumează toți parametrii din pachet"
      },
      {
        "left": "(... && args)",
        "right": "Verifică dacă toate argumentele sunt true"
      },
      {
        "left": "typename... Args",
        "right": "Declară un pachet generic de tipuri variadice"
      },
      {
        "left": "sizeof...(args)",
        "right": "Returnează numărul de argumente primite în pachet"
      }
    ],
    "quiz": {
      "question": "Ce operator returnează numărul de argumente conținute într-un pachet de parametri variadici?",
      "options": [
        "countof(args)",
        "sizeof...(args)",
        "args.size()",
        "pack_length(args)"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-mod-smart-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Smart Pointers Avansați: Deleteri Personalizați și Gestiune C-API",
    "theory": "În timp ce utilizarea standard 'std::unique_ptr<T>' apelează 'delete' la distrugerea obiectului, clasa suportă un al doilea parametru șablon: un 'Deleter Personalizat' ('std::unique_ptr<T, Deleter>'). Această funcționalitate permite încapsularea oricărei resurse externe de sistem în tiparul RAII.\n\nUn caz clasic de utilizare este interoperabilitatea cu API-urile C (de exemplu fișiere deschise cu 'fopen' sau descriptori de rețea). În loc să reții un pointer brut 'FILE*' și să riști să uiți apelul 'fclose()', poți crea un unique_ptr cu deleterul 'decltype(&fclose)'.\n\nCând obiectul unique_ptr iese din domeniul de vizibilitate (chiar și dacă o excepție a fost aruncată), pointerul va apela automat funcția 'fclose()', garantând că resursele sistemului de operare sunt eliberate impecabil fără memorie orfană.",
    "glossary": [
      {
        "term": "Custom Deleter",
        "def": "Funcție sau lambda furnizată unui smart pointer pentru a înlocui comportamentul implicit de delete."
      },
      {
        "term": "decltype",
        "def": "Operator la compilare ce extrage tipul exact al unei expresii sau funcții."
      },
      {
        "term": "C-API Wrapper",
        "def": "Împachetarea resurselor C tradiționale în containere sigure RAII din C++."
      },
      {
        "term": "fclose",
        "def": "Funcția standard C ce închide un stream de fișier de tip FILE*."
      }
    ],
    "example": "#include <memory>\n#include <cstdio>\n\n// Smart pointer RAII pentru fisiere C native:\nusing FilePtr = std::unique_ptr<FILE, decltype(&fclose)>;\n\nvoid proceseazaFisier() {\n    FilePtr f(std::fopen(\"date.txt\", \"r\"), &fclose);\n    if (f) {\n        // Citire din fisier...\n    }\n} // fclose() este apelat automat AICI, chiar daca apare o exceptie!",
    "prompt": "Declară un tip alias numit FilePtr folosind using pentru un std::unique_ptr de tip FILE cu deleterul decltype(&fclose).",
    "caseSensitive": true,
    "acceptedAnswers": [
      "using FilePtr = std::unique_ptr<FILE, decltype(&fclose)>;",
      "using FilePtr = std::unique_ptr<FILE, decltype(&fclose)>"
    ],
    "regexPattern": "^using\\s+FilePtr\\s*=\\s*std::unique_ptr<FILE,\\s*decltype\\(&fclose\\)>\\s*;?$",
    "officialSolution": "using FilePtr = std::unique_ptr<FILE, decltype(&fclose)>;",
    "explanation": "Tipul specifică FILE ca tip al resursei și decltype(&fclose) ca tip al funcției de eliberare.",
    "hint": "using FilePtr = std::unique_ptr<FILE, decltype(&fclose)>;",
    "matchingPairs": [
      {
        "left": "decltype(&fclose)",
        "right": "Tipul pointerului la funcția de închidere fișier C"
      },
      {
        "left": "Custom Deleter",
        "right": "Înlocuiește apelul implicit de delete cu o funcție proprie"
      },
      {
        "left": "std::unique_ptr",
        "right": "Smart pointer cu proprietate unică și exclusivă"
      },
      {
        "left": "ptr.get()",
        "right": "Extrage pointerul brut nativ din interiorul smart pointerului"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă o funcție aruncă o excepție într-un bloc unde un 'std::unique_ptr' cu Custom Deleter este activ pe stivă?",
      "options": [
        "Deleterul personalizat este apelat garantat în timpul derulării stivei (Stack Unwinding)",
        "Resursa rămâne blocată în sistemul de operare",
        "Compilatorul transformă fișierul în memorie virtuală",
        "Programul intră în buclă infinită"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "cpp-thr-lock-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Sincronizarea Firelor: std::unique_lock și Prevenirea Deadlock cu std::scoped_lock",
    "theory": "În aplicațiile multithreaded, accesul concurent nesincronizat la date partajate duce la 'Condiții de Cursă' (Data Races) și coruperea memoriei. Primitivele de sincronizare sunt furnizate în header-ul '<mutex>'.\n\nÎn timp ce 'std::lock_guard' oferă o blocare strictă RAII de bază, 'std::unique_lock' oferă flexibilitate maximă: permite blocare amânată ('std::defer_lock'), deblocare explicită manuală ('unlock()') și este obligatoriu pentru utilizarea cu variabile de condiție ('std::condition_variable').\n\nCând un thread trebuie să blocheze două sau mai multe mutexuri simultan, apare pericolul mortal de 'Deadlock' (interblocare: Thread 1 deține M1 și cere M2, iar Thread 2 deține M2 și cere M1). C++17 a rezolvat definitiv această problemă prin 'std::scoped_lock': acesta blochează oricâte mutexuri simultan folosind un algoritm intern de evitare a deadlock-ului (Deadlock Avoidance Algorithm).",
    "glossary": [
      {
        "term": "std::mutex",
        "def": "Primitivă de excludere mutuală ce permite unui singur fir accesul la o secțiune critică."
      },
      {
        "term": "std::scoped_lock",
        "def": "RAII lock C++17 ce blochează multiple mutexuri simultan fără risc de deadlock."
      },
      {
        "term": "std::unique_lock",
        "def": "Gestionar flexibil de mutex ce permite deblocare și reinchidere la cerere."
      },
      {
        "term": "Deadlock",
        "def": "Blocaj definitiv în care două sau mai multe thread-uri se așteaptă reciproc la infinit."
      }
    ],
    "example": "#include <mutex>\n#include <thread>\n\nstd::mutex mtx1, mtx2;\n\nvoid transferBancar() {\n    // C++17 scoped_lock blocheaza ambele mutexuri sigur fara deadlock:\n    std::scoped_lock lock(mtx1, mtx2);\n    // Sectiune critica protejata complet!\n}",
    "prompt": "Scrie instrucțiunea C++17 pentru a bloca în siguranță două mutexuri numite m1 și m2 folosind std::scoped_lock lock(m1, m2);.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::scoped_lock lock(m1, m2);",
      "std::scoped_lock lock{m1, m2};",
      "std::scoped_lock lock(m1, m2)"
    ],
    "regexPattern": "^std::scoped_lock\\s+lock[{(]m1,\\s*m2[})]\\s*;?$",
    "officialSolution": "std::scoped_lock lock(m1, m2);",
    "explanation": "std::scoped_lock blochează simultan ambele mutexuri fără posibilitatea de a produce deadlock.",
    "hint": "std::scoped_lock lock(m1, m2);",
    "matchingPairs": [
      {
        "left": "std::scoped_lock",
        "right": "Blochează multiple mutexuri fără risc de deadlock (C++17)"
      },
      {
        "left": "std::unique_lock",
        "right": "Permite deblocare și re-blocare manuală flexibilă"
      },
      {
        "left": "std::lock_guard",
        "right": "Blocare simplă strictă pe durata acoladelor"
      },
      {
        "left": "Data Race",
        "right": "Scriere concurentă nesincronizată pe aceeași adresă"
      }
    ],
    "quiz": {
      "question": "Ce avantaj critic aduce 'std::scoped_lock' (C++17) față de blocarea manuală secvențială a două mutexuri?",
      "options": [
        "Rulează codul mai rapid pe procesoare AMD",
        "Previne automat situațiile de Deadlock prin blocare atomică cu algoritm de evitare",
        "Dezactivează memoria cache L3",
        "Nu necesită instanțiere pe stivă"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-thr-cv-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Variabile de Condiție: std::condition_variable și Treziri Spurious",
    "theory": "Când un thread consumator trebuie să aștepte ca un thread producător să finalizeze o sarcină (de exemplu: adăugarea unui element într-o coadă de task-uri), o buclă de așteptare continuă ('while (!gata) {}') consumă 100% CPU (Busy Waiting).\n\nPentru a suspenda complet thread-ul fără consum de procesor, C++11 oferă 'std::condition_variable' din '<condition_variable>'. Thread-ul consumator apelează 'cv.wait(lock, predicat)', care eliberează atomic mutexul asociat ('std::unique_lock') și plasează thread-ul în starea de repaus profund.\n\nLa nivel hardware și de kernel, un fir de execuție se poate trezi din repaus chiar și în lipsa unei notificări reale – fenomen numit 'Spurious Wakeup' (Trezire Falsă). Din acest motiv, apelul 'wait()' trebuie însoțit întotdeauna de o funcție predicat ('cv.wait(lock, []{ return coada.size() > 0; })'), care re-verifică condiția înainte de a continua execuția.",
    "glossary": [
      {
        "term": "std::condition_variable",
        "def": "Primitivă de sincronizare ce permite suspendarea unui thread până la notificarea unei condiții."
      },
      {
        "term": "Spurious Wakeup",
        "def": "Trezire neașteptată a unui thread din wait fără apel direct de notify."
      },
      {
        "term": "notify_one()",
        "def": "Trezește un singur thread aflat în așteptare pe variabila de condiție."
      },
      {
        "term": "notify_all()",
        "def": "Trezește toate thread-urile aflate în așteptare pe variabila de condiție."
      }
    ],
    "example": "#include <mutex>\n#include <condition_variable>\n#include <queue>\n\nstd::mutex mtx;\nstd::condition_variable cv;\nstd::queue<int> taskuri;\n\nvoid consumator() {\n    std::unique_lock<std::mutex> lock(mtx);\n    // Asteapta cu predicat pentru a preveni trezirile spurious:\n    cv.wait(lock, [] { return !taskuri.empty(); });\n    int task = taskuri.front();\n    taskuri.pop();\n}",
    "prompt": "Scrie metoda apelată pe o variabilă de condiție numită cv pentru a trezi un singur thread aflat în așteptare: cv.notify_one();.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "cv.notify_one();",
      "cv.notify_one()"
    ],
    "regexPattern": "^cv\\.notify_one\\s*\\(\\s*\\)\\s*;?$",
    "officialSolution": "cv.notify_one();",
    "explanation": "Metoda notify_one() semnalizează un singur thread aflat în repaus pe variabila de condiție.",
    "hint": "cv.notify_one();",
    "matchingPairs": [
      {
        "left": "cv.wait(lock, pred)",
        "right": "Oprește thread-ul până când predicatul devine adevărat"
      },
      {
        "left": "cv.notify_one()",
        "right": "Trezește un singur thread din starea de repaus"
      },
      {
        "left": "cv.notify_all()",
        "right": "Trezește toate thread-urile aflate în așteptare"
      },
      {
        "left": "Spurious Wakeup",
        "right": "Trezire accidentală a thread-ului fără semnalizare reală"
      }
    ],
    "quiz": {
      "question": "De ce este obligatoriu să transmiți un predicat metodei 'cv.wait(lock, predicat)'?",
      "options": [
        "Pentru a preveni acțiunea eronată a trezirilor false (Spurious Wakeups)",
        "Pentru a cripta datele din coadă",
        "Pentru a transforma mutexul într-un canal anonim pipe",
        "Nu este obligatoriu, este doar decorativ"
      ],
      "correctIndex": 0
    }
  },
  {
    "id": "cpp-thr-async-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Programare Asincronă la Nivel Înalt: std::async și std::future",
    "theory": "Crearea și gestionarea manuală a thread-urilor cu 'std::thread' implică numeroase dificultăți: gestionarea ciclului de viață, alăturarea obligatorie ('join()') și transmiterea valorii returnate sau a excepțiilor prin variabile partajate și mutexuri.\n\nC++11 oferă o abstractizare asincronă la nivel înalt prin 'std::async' și 'std::future' din header-ul '<future>'. Apelul 'std::async(std::launch::async, functie, args...)' lansează funcția pe un fir de execuție separat din fundal și returnează un obiect 'std::future<T>'.\n\nObiectul 'future' reprezintă promisiunea unui rezultat viitor. Când apelantul are nevoie de date, invocă 'f.get()': dacă calculul s-a încheiat, rezultatul este returnat instant; dacă este încă în curs, firul curent se blochează până la finalizare. Dacă funcția asincronă a aruncat o excepție, 'f.get()' o va re-arunca transparent în thread-ul principal.",
    "glossary": [
      {
        "term": "std::async",
        "def": "Funcție șablon ce lansează o sarcină în fundal și returnează un std::future."
      },
      {
        "term": "std::future",
        "def": "Obiect ce permite recuperarea rezultatului sau excepției unei operații asincrone."
      },
      {
        "term": "f.get()",
        "def": "Blochează execuția până când sarcina se termină și returnează rezultatul calculat."
      },
      {
        "term": "std::launch::async",
        "def": "Politică de lansare ce garantează crearea unui nou fir separat de execuție."
      }
    ],
    "example": "#include <future>\n#include <iostream>\n\nint calculeazaDateGree() {\n    // Procesare grea...\n    return 42;\n}\n\n// Lansare asincrona garantata pe alt nucleu:\nstd::future<int> rezultatViitor = std::async(std::launch::async, calculeazaDateGree);\n\n// Thread-ul principal continua alte operatii...\n\nint valoareFinala = rezultatViitor.get(); // Asteapta si preia valoarea 42",
    "prompt": "Scrie metoda apelată pe un obiect std::future numit fut pentru a extrage valoarea finală calculată (blocând execuția dacă e necesar): fut.get();.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "fut.get();",
      "fut.get()"
    ],
    "regexPattern": "^fut\\.get\\s*\\(\\s*\\)\\s*;?$",
    "officialSolution": "fut.get();",
    "explanation": "Metoda get() extrage valoarea returnată de sarcina asincronă și eliberează starea partajată a viitorului.",
    "hint": "fut.get();",
    "matchingPairs": [
      {
        "left": "std::async",
        "right": "Lansează o funcție în fundal returnând un future"
      },
      {
        "left": "fut.get()",
        "right": "Așteaptă rezultatul și îl returnează (poate fi apelat o singură dată)"
      },
      {
        "left": "fut.wait()",
        "right": "Așteaptă terminarea fără a consuma rezultatul"
      },
      {
        "left": "std::promise",
        "right": "Obiectul pereche folosit pentru a scrie rezultatul către un future"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă o funcție lansată asincron prin 'std::async' aruncă o excepție în timpul execuției sale?",
      "options": [
        "Programul se prăbușește imediat fără posibilitate de recuperare",
        "Excepția este capturată în interiorul obiectului future și re-aruncată când se apelează '.get()'",
        "Excepția este convertită automat în numărul -1",
        "Compilatorul reîncearcă funcția la infinit"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-thr-atom-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Operații Atomice Hardware: std::atomic<T> și Algoritmi Lock-Free",
    "theory": "Mutexurile oferă sincronizare sigură, dar introduc o penalizare substanțială de performanță prin apeluri de sistem și blocarea thread-urilor (blocare greoaie în kernel). În sistemele financiare de înaltă frecvență (HFT) și motoarele de jocuri, se utilizează structuri de date 'Lock-Free' bazate pe 'Operații Atomice Hardware' din header-ul '<atomic>'.\n\nO operație atomică este executată indivizibil la nivelul tranzacției de cache a procesorului: niciun alt nucleu nu poate citi sau modifica variabila în mijlocul actualizării. Clasa șablon 'std::atomic<T>' suportă întregi, pointeri și tipuri trivial copiable.\n\nOperatorul '++' pe un 'std::atomic<int>' generează o instrucțiune atomică unică de procesor (cum ar fi 'LOCK XADD' pe x86-64). Metoda de bază a algoritmilor lock-free este 'compare_exchange_strong(expected, desired)', care actualizează valoarea doar dacă starea curentă corespunde cu așteptarea, permițând bucle sigure de tip Compare-And-Swap (CAS).",
    "glossary": [
      {
        "term": "std::atomic<T>",
        "def": "Tip ce garantează operații atomice hardware indivizibile fără mutexuri."
      },
      {
        "term": "Lock-Free",
        "def": "Arhitectură concurentă în care cel puțin un fir progresează fără a fi blocat de mutexuri."
      },
      {
        "term": "CAS (Compare-And-Swap)",
        "def": "Instrucțiune CPU ce verifică și actualizează o valoare atomic într-un singur ciclu."
      },
      {
        "term": "fetch_add()",
        "def": "Adună o valoare atomic și returnează valoarea anterioară înainte de adunare."
      }
    ],
    "example": "#include <atomic>\n#include <thread>\n\nstd::atomic<int> contorGlobal{0};\n\nvoid incrementeaza() {\n    for (int i = 0; i < 10000; ++i) {\n        contorGlobal.fetch_add(1); // Incrementare atomica hardware thread-safe!\n    }\n}",
    "prompt": "Declară o variabilă atomică de tip int numită vizite inițializată cu valoarea 0 folosind std::atomic<int>.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::atomic<int> vizite{0};",
      "std::atomic<int> vizite = 0;",
      "std::atomic<int> vizite{};"
    ],
    "regexPattern": "^std::atomic<int>\\s+vizite\\s*(=|\\{)\\s*0?\\s*\\}?\\s*;$",
    "officialSolution": "std::atomic<int> vizite{0};",
    "explanation": "std::atomic<int> vizite{0}; declară un întreg protejat hardware împotriva condițiilor de cursă.",
    "hint": "std::atomic<int> vizite{0};",
    "matchingPairs": [
      {
        "left": "std::atomic<int>",
        "right": "Întreg sincronizat direct prin instrucțiuni CPU fără mutex"
      },
      {
        "left": "fetch_add(1)",
        "right": "Adăugare atomică sigură la nivel de memorie cache"
      },
      {
        "left": "compare_exchange",
        "right": "Primitivă CAS fundamentală pentru algoritmi lock-free"
      },
      {
        "left": "is_lock_free()",
        "right": "Interoghează dacă operațiile atomice sunt hardware native"
      }
    ],
    "quiz": {
      "question": "Ce instrucțiune hardware generează compilatorul pentru incrementarea unui 'std::atomic<int>' pe o arhitectură x86-64?",
      "options": [
        "Un apel către kernelul sistemului de operare",
        "O instrucțiune cu prefixul LOCK (precum LOCK XADD sau LOCK INC) direct pe magistrală",
        "O alocare de memorie pe stivă",
        "O întrerupere software de tip trap"
      ],
      "correctIndex": 1
    }
  },
  {
    "id": "cpp-mod-pmr-1",
    "track": "C & C++",
    "division": "Informatică și Programare",
    "level": "5. Arhitect / Exemplar",
    "xp": 30,
    "title": "Alocatoare Polimorfice în C++17: PMR și Monotonic Buffer Resource",
    "theory": "Până la C++17, alocatorul unui container STL făcea parte integrantă din tipul său concret ('std::vector<int, AlocatorPersonalizat>' era un tip complet incompatibil cu 'std::vector<int>'), împiedicând transmiterea lor către funcții comune fără șabloane greoaie.\n\nC++17 a introdus 'PMR' (Polymorphic Memory Resources) în header-ul '<memory_resource>'. Containerele din namespace-ul 'std::pmr' (precum 'std::pmr::vector' sau 'std::pmr::string') partajează exact același tip binar, decuplând gestionarea memoriei de tipul containerului printr-o clasă de bază abstractă 'std::pmr::memory_resource'.\n\nUnul dintre cele mai rapide alocatoare este 'std::pmr::monotonic_buffer_resource'. Acesta primește un buffer static fix de memorie pe stivă (ex: char buffer[4096]) și alocă elementele prin simpla avansare a unui pointer (Bump Allocation) în doar câteva nanosecunde, eliberând întreaga memorie dintr-o singură mișcare la distrugerea resursei.",
    "glossary": [
      {
        "term": "PMR",
        "def": "Polymorphic Memory Resources: arhitectură C++17 pentru alocare dinamică polimorfică."
      },
      {
        "term": "monotonic_buffer",
        "def": "Alocator extrem de rapid ce avansează un pointer în buffer fără eliberări individuale."
      },
      {
        "term": "std::pmr::vector",
        "def": "Vector standard ce utilizează un alocator polimorfic configurabil la rulare."
      },
      {
        "term": "Bump Allocation",
        "def": "Alocare ultra-rapidă prin simpla adunare a dimensiunii la adresa curentă a pointerului."
      }
    ],
    "example": "#include <memory_resource>\n#include <vector>\n#include <array>\n\nstd::array<std::byte, 1024> bufferStiva; // 1 KB pe stiva\nstd::pmr::monotonic_buffer_resource resursaMemorie(bufferStiva.data(), bufferStiva.size());\n\n// Vectorul aloca direct din bufferul de pe stiva fara niciun apel la malloc/Heap!\nstd::pmr::vector<int> numere(&resursaMemorie);\nnumere.push_back(10);\nnumere.push_back(20);",
    "prompt": "Declară un vector polimorfic de tip int numit date folosind aliasul standard std::pmr::vector<int>.",
    "caseSensitive": true,
    "acceptedAnswers": [
      "std::pmr::vector<int> date;",
      "std::pmr::vector<int> date{};"
    ],
    "regexPattern": "^std::pmr::vector<int>\\s+date\\s*(\\{\\s*\\})?\\s*;$",
    "officialSolution": "std::pmr::vector<int> date;",
    "explanation": "std::pmr::vector<int> este versiunea C++17 a vectorului care acceptă alocatoare polimorfice de memorie.",
    "hint": "std::pmr::vector<int> date;",
    "matchingPairs": [
      {
        "left": "std::pmr::vector",
        "right": "Vector compatibil cu resurse de memorie polimorfice (PMR)"
      },
      {
        "left": "monotonic_buffer",
        "right": "Alocator rapid bazat pe avansarea unui pointer (Bump Allocation)"
      },
      {
        "left": "memory_resource",
        "right": "Clasa de bază abstractă pentru alocatoarele din C++17"
      },
      {
        "left": "Zero Heap Overhead",
        "right": "Alocarea are loc direct în memoria prealocată pe stivă"
      }
    ],
    "quiz": {
      "question": "Care este beneficiul major al utilizării 'std::pmr::monotonic_buffer_resource' în sisteme de înaltă frecvență?",
      "options": [
        "Alocă memoria instantaneu printr-o simplă incrementare de pointer (Bump Allocator), fără blocaje pe Heap",
        "Permite rularea pe calculatoare fără memorie RAM",
        "Criptează automat vectorul",
        "Sortează vectorul la fiecare push_back"
      ],
      "correctIndex": 0
    }
  }
];
