// MEGA EXPANDED CURRICULUM — ALL TRACKS DEEP-DIVE
const MEGA_EXPANDED_CURRICULUM = [
  {
    "id": "py-new-1",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Sintaxă & Structuri Fundamentale de Control",
    "theory": "\n<p>Python este un limbaj cu tipizare dinamică și sintaxă bazată pe indentare strictă (4 spații conform PEP 8). În Python, blocurile de cod nu folosesc acolade, ci două puncte (<code>:</code>) urmate de bloc indentat.</p>\n<h4>1. Instrucțiuni Condiționale</h4>\n<p>Lanțul <code>if - elif - else</code> evaluează expresii booleene. Operatorii logici sunt cuvinte native: <code>and</code>, <code>or</code>, <code>not</code>.</p>\n<h4>2. Bucle & Iterare Idiomatică</h4>\n<p>Buclele <code>for item in iterable:</code> sunt cel mai eficient mod de a parcurge secvențe. Când avem nevoie de index, folosim funcția nativă <code>enumerate(iterable, start=0)</code> în loc să incrementăm manual un contor.</p>\n",
    "glossary": [
      {
        "term": "Indentare (PEP 8)",
        "def": "Regulă strictă de 4 spații per nivel de bloc de cod în loc de acolade."
      },
      {
        "term": "elif",
        "def": "Prescurtare de la 'else if', testează o condiție secundară dacă prima a eșuat."
      },
      {
        "term": "enumerate()",
        "def": "Funcție nativă ce returnează perechi de tipul (index, element) la fiecare iterație."
      },
      {
        "term": "zip()",
        "def": "Îmbină două sau mai multe iterabile element cu element în tupluri paralele."
      }
    ],
    "matchingPairs": [
      {
        "left": "enumerate(names)",
        "right": "Generează perechi (index, nume)"
      },
      {
        "left": "zip(keys, values)",
        "right": "Îmbină liste paralele în tupluri"
      },
      {
        "left": "range(1, 10, 2)",
        "right": "Generează 1, 3, 5, 7, 9"
      },
      {
        "left": "elif condition:",
        "right": "Ramură condițională alternativă"
      }
    ],
    "quiz": {
      "question": "Care este modul corect și idiomatic în Python de a itera o listă când ai nevoie și de index și de valoare?",
      "options": [
        "for i, val in enumerate(my_list):",
        "for i in range(len(my_list)): val = my_list[i]",
        "while i < len(my_list): val = my_list[i]; i += 1",
        "for val in my_list.with_index():"
      ],
      "correctIndex": 0,
      "explanation": "Funcția nativă enumerate() este mecanismul idiomatic în Python, oferind lizibilitate maximă și performanță optimă."
    },
    "task": "Scrie o iterație folosind 'enumerate' peste lista 'users' și afișează fiecare pereche cu print(f'{idx}: {name}').",
    "starterCode": "users = [\"Ana\", \"Bogdan\", \"Cristi\"]\n# Iterează cu enumerate\n",
    "expectedOutputPattern": "for\\s+\\w+,\\s*\\w+\\s+in\\s+enumerate\\(users\\):",
    "hint": "Folosește: for idx, name in enumerate(users): urmat de blocul indentat cu print."
  },
  {
    "id": "py-new-2",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 2: Liste, Tuple-uri & Tehnica Slicing",
    "theory": "\n<p>Listele (<code>list</code>) sunt structuri mutabile ordonate, pe când tuple-urile (<code>tuple</code>) sunt secvențe imutabile protejate împotriva modificării accidentale.</p>\n<h4>1. Sintaxa Slicing [start:stop:step]</h4>\n<p>Slicing-ul permite extragerea de subsecvențe fără a modifica lista originală. Indexul de <code>stop</code> este exclusiv. Un pas negativ (<code>[::-1]</code>) inversează eficient întreaga secvență.</p>\n<h4>2. Unpacking de Secvențe</h4>\n<p>Python permite despachetarea directă a elementelor: <code>first, *middle, last = numbers</code> capturează primul, ultimul și toate elementele intermediare într-o listă separată.</p>\n",
    "glossary": [
      {
        "term": "Mutable",
        "def": "Obiect a cărui stare internă poate fi modificată după instanțiere (ex: list, dict)."
      },
      {
        "term": "Immutable",
        "def": "Obiect a cărui valoare nu poate fi schimbată după creare (ex: tuple, str, int)."
      },
      {
        "term": "Slicing [::-1]",
        "def": "Tehnică O(n) de inversare a unei secvențe prin specificarea unui step negativ."
      },
      {
        "term": "Star Unpacking (*rest)",
        "def": "Operator ce colectează restul elementelor într-o listă separată la asignare."
      }
    ],
    "matchingPairs": [
      {
        "left": "items[::-1]",
        "right": "Inversează complet secvența"
      },
      {
        "left": "items[1:4]",
        "right": "Extrage elementele de la index 1 la 3"
      },
      {
        "left": "tuple((1, 2))",
        "right": "Secvență imutabilă hashable"
      },
      {
        "left": "a, *b = items",
        "right": "Despachetează primul element și restul"
      }
    ],
    "quiz": {
      "question": "Ce va returna expresia [10, 20, 30, 40, 50][1:4]?",
      "options": [
        "[20, 30, 40]",
        "[10, 20, 30]",
        "[20, 30, 40, 50]",
        "[10, 20, 30, 40]"
      ],
      "correctIndex": 0,
      "explanation": "Slicing-ul începe de la indexul 1 (valoarea 20) și se oprește înainte de indexul 4 (valoarea 50), rezultând [20, 30, 40]."
    },
    "task": "Inversează lista 'data' folosind sintaxa slicing cu step negativ și stochează rezultatul în 'reversed_data'.",
    "starterCode": "data = [1, 2, 3, 4, 5]\nreversed_data = ",
    "expectedOutputPattern": "reversed_data\\s*=\\s*data\\[::-1\\]",
    "hint": "Folosește slicing-ul data[::-1] pentru a crea o copie inversată a listei."
  },
  {
    "id": "py-new-3",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 3: Dicționare & Seturi (Hash Tables Native)",
    "theory": "\n<p>Dicționarele (<code>dict</code>) și seturile (<code>set</code>) din Python sunt implementate ca tabele hash de înaltă performanță, oferind timp mediu de căutare și inserare $O(1)$.</p>\n<h4>1. Dicționare & Metoda .get()</h4>\n<p>Accesarea unei chei inexistente cu <code>dict[key]</code> aruncă o excepție <code>KeyError</code>. Metoda <code>dict.get(key, default)</code> returnează o valoare fallback fără a întrerupe execuția.</p>\n<h4>2. Seturi & Teoria Mulțimilor</h4>\n<p>Seturile elimină automat duplicatele și oferă operatori rapizi: reuniune (<code>|</code>), intersecție (<code>&</code>), diferență (<code>-</code>) și diferență simetrică (<code>^</code>).</p>\n",
    "glossary": [
      {
        "term": "dict.get(k, default)",
        "def": "Returnează valoarea asociată cheii sau fallback-ul specificat fără KeyError."
      },
      {
        "term": "set",
        "def": "Colecție neordonată de elemente unice și hashable cu căutare în timp O(1)."
      },
      {
        "term": "Hashable",
        "def": "Proprietate a unui obiect de a avea o valoare hash constantă pe durata vieții sale."
      },
      {
        "term": "Intersecție (&)",
        "def": "Operație între două seturi ce returnează doar elementele comune ambelor mulțimi."
      }
    ],
    "matchingPairs": [
      {
        "left": "config.get('port', 8080)",
        "right": "Acces securizat cu valoare implicită"
      },
      {
        "left": "set(raw_list)",
        "right": "Elimină instant toate duplicatele"
      },
      {
        "left": "set_a & set_b",
        "right": "Intersecția elementelor comune"
      },
      {
        "left": "set_a | set_b",
        "right": "Reuniunea tuturor elementelor unice"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă apelezi user['email'] când cheia 'email' nu există în dicționar?",
      "options": [
        "Se aruncă o excepție de tip KeyError.",
        "Returnează valoarea None în mod silențios.",
        "Creează automat cheia 'email' cu valoare None.",
        "Aplicația intră într-o buclă infinită."
      ],
      "correctIndex": 0,
      "explanation": "Accesarea directă cu paranteze drepte aruncă KeyError. Pentru acces securizat fără excepție se folosește metoda .get()."
    },
    "task": "Extrage din dicționarul 'settings' cheia 'timeout' cu valoarea implicită 30 folosind metoda .get().",
    "starterCode": "settings = {\"host\": \"localhost\"}\ntimeout = ",
    "expectedOutputPattern": "timeout\\s*=\\s*settings\\.get\\([\"']timeout[\"'],\\s*30\\)",
    "hint": "Apelează settings.get('timeout', 30)."
  },
  {
    "id": "py-new-4",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "2. Junior",
    "xp": 35,
    "title": "Capitolul 4: List, Dict & Set Comprehensions",
    "theory": "\n<p>Comprehensions sunt construcții declarative sintetice și optimizate la nivel de bytecode CPython, fiind semnificativ mai rapide decât buclele clasice <code>for</code> cu <code>.append()</code>.</p>\n<h4>1. List Comprehensions cu Filtrare</h4>\n<p>Sintaxa de bază este <code>[expr for item in iterable if condition]</code>. Filtrul <code>if</code> de la final selectează elementele înainte de aplicarea transformării.</p>\n<h4>2. Dict & Set Comprehensions</h4>\n<p>Dict comprehensions folosesc acolade și două puncte: <code>{k: v for k, v in pairs}</code>. Set comprehensions folosesc acolade simple: <code>{x.strip() for x in raw_strings}</code>.</p>\n",
    "glossary": [
      {
        "term": "List Comprehension",
        "def": "Construcție declarativă pentru crearea unei liste dintr-un iterabil existent."
      },
      {
        "term": "Dict Comprehension",
        "def": "Sintaxă {k: v for ...} ce mapează dinamic chei la valori calculate."
      },
      {
        "term": "Bytecode CPython",
        "def": "Instrucțiuni compilate de nivel jos executate de mașina virtuală Python."
      },
      {
        "term": "Filtrare Inline",
        "def": "Clauza 'if condition' adăugată la sfârșitul unui comprehension pentru selecție."
      }
    ],
    "matchingPairs": [
      {
        "left": "[x*2 for x in nums]",
        "right": "Dublează fiecare element din listă"
      },
      {
        "left": "[x for x in nums if x > 0]",
        "right": "Filtrează doar numerele strict pozitive"
      },
      {
        "left": "{x: len(x) for x in words}",
        "right": "Creează un dicționar cu lungimea cuvintelor"
      },
      {
        "left": "{x.lower() for x in tags}",
        "right": "Set de tag-uri unice transformate în litere mici"
      }
    ],
    "quiz": {
      "question": "Care este rezultatul expresiei [x for x in range(6) if x % 2 == 0]?",
      "options": [
        "[0, 2, 4]",
        "[2, 4, 6]",
        "[0, 2, 4, 6]",
        "[1, 3, 5]"
      ],
      "correctIndex": 0,
      "explanation": "range(6) generează numerele de la 0 la 5. Numerele pare dintre acestea sunt 0, 2 și 4."
    },
    "task": "Creează o listă 'evens' ce conține pătratele numerelor pare din lista 'numbers' folosind list comprehension.",
    "starterCode": "numbers = [1, 2, 3, 4, 5, 6]\nevens = ",
    "expectedOutputPattern": "evens\\s*=\\s*\\[x\\s*\\*\\*\\s*2\\s+for\\s+x\\s+in\\s+numbers\\s+if\\s+x\\s*%\\s*2\\s*==\\s*0\\]",
    "hint": "Folosește: [x**2 for x in numbers if x % 2 == 0]"
  },
  {
    "id": "py-new-5",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 5: Manipularea Fișierelor & Context Managers ('with')",
    "theory": "\n<p>Gestionarea corectă a resurselor I/O (fișiere, conexiuni socket) necesită eliberarea garantată a descriptorilor de fișiere din sistemul de operare.</p>\n<h4>1. Instrucțiunea 'with'</h4>\n<p>Instrucțiunea <code>with open('file.txt', 'r', encoding='utf-8') as f:</code> garantează apelarea automată a metodei <code>close()</code> la ieșirea din bloc, chiar dacă se aruncă o excepție neașteptată.</p>\n<h4>2. Moduri de Deschidere</h4>\n<p>Modurile esențiale sunt: <code>'r'</code> (read), <code>'w'</code> (write cu suprascriere), <code>'a'</code> (append la final) și <code>'b'</code> (binary pentru imagini sau fișiere comprimate).</p>\n",
    "glossary": [
      {
        "term": "Context Manager",
        "def": "Obiect ce implementează metodele protocolului __enter__ și __exit__ pentru gestiunea resurselor."
      },
      {
        "term": "File Descriptor Leak",
        "def": "Epuizarea descriptorilor din sistemul de operare cauzată de fișiere lăsate deschise."
      },
      {
        "term": "encoding='utf-8'",
        "def": "Standardul modern de codare a caracterelor internaționale în operațiuni textuale."
      },
      {
        "term": "f.readlines()",
        "def": "Metodă ce citește toate liniile unui fișier și le returnează ca listă de șiruri."
      }
    ],
    "matchingPairs": [
      {
        "left": "with open(...) as f:",
        "right": "Închidere automată garantată a resursei"
      },
      {
        "left": "mode='a'",
        "right": "Deschide fișierul pentru adăugare la final"
      },
      {
        "left": "mode='w'",
        "right": "Deschide pentru scriere suprascriind conținutul"
      },
      {
        "left": "f.read()",
        "right": "Citește întregul conținut într-un singur string"
      }
    ],
    "quiz": {
      "question": "De ce este obligatorie utilizarea blocului 'with' la deschiderea fișierelor în Python?",
      "options": [
        "Garantează închiderea fișierului chiar și în cazul apariției unei excepții.",
        "Mărește viteza de citire a hard diskului de zece ori.",
        "Criptează automat fișierul pe disc cu algoritmul AES.",
        "Permite citirea fișierului fără încărcare în RAM."
      ],
      "correctIndex": 0,
      "explanation": "Protocolul context manager ('with') apelează automat __exit__() și închide descriptorul de fișier indiferent cum se părăsește blocul de cod."
    },
    "task": "Deschide fișierul 'log.txt' în modul adăugare ('a') cu codare 'utf-8' folosind un bloc 'with' și variabila 'f'.",
    "starterCode": "# Folosește blocul with pentru a deschide log.txt în modul 'a'\n",
    "expectedOutputPattern": "with\\s+open\\([\"']log\\.txt[\"'],\\s*[\"']a[\"'],\\s*encoding=[\"']utf-8[\"']\\)\\s+as\\s+f:",
    "hint": "Scrie: with open('log.txt', 'a', encoding='utf-8') as f: urmat de corpul blocului."
  },
  {
    "id": "py-new-6",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 6: Gestiunea Excepțiilor & Clauza 'finally'",
    "theory": "\n<p>Tratarea robustă a erorilor în Python se realizează prin blocul <code>try - except - else - finally</code>. Principiul Pythonic <em>EAFP</em> (Easier to Ask for Forgiveness than Permission) recomandă execuția directă protejată prin <code>try</code> în loc de verificări preliminare stufoase.</p>\n<h4>1. Specificitatea Excepțiilor</h4>\n<p>Nu captura niciodată <code>except Exception:</code> generic dacă poți captura excepții specifice precum <code>ValueError</code>, <code>FileNotFoundError</code> sau <code>ZeroDivisionError</code>.</p>\n<h4>2. Clauzele 'else' și 'finally'</h4>\n<p>Blocul <code>else</code> rulează DOAR dacă blocul <code>try</code> a finalizat fără nicio eroare. Blocul <code>finally</code> se execută ÎNTOTDEAUNA, indiferent de apariția sau capturarea erorii.</p>\n",
    "glossary": [
      {
        "term": "EAFP",
        "def": "'Easier to Ask for Forgiveness than Permission' - filozofie de programare Pythonic."
      },
      {
        "term": "try / except",
        "def": "Mecanism de interceptare și tratare a excepțiilor la rulare."
      },
      {
        "term": "else (în try)",
        "def": "Bloc executat exclusiv atunci când nu s-a declanșat nicio excepție în try."
      },
      {
        "term": "finally",
        "def": "Secțiune de curățare a resurselor care se execută garantat în orice scenariu."
      }
    ],
    "matchingPairs": [
      {
        "left": "except ValueError as e:",
        "right": "Capturează conversii de date invalide"
      },
      {
        "left": "finally:",
        "right": "Execuție necondiționată după try/except"
      },
      {
        "left": "else: (după try)",
        "right": "Rulare doar când nu a apărut nicio eroare"
      },
      {
        "left": "raise RuntimeError('msg')",
        "right": "Aruncă intenționat o nouă excepție"
      }
    ],
    "quiz": {
      "question": "Când se execută codul aflat într-un bloc 'else' atașat unui bloc 'try-except'?",
      "options": [
        "Numai dacă blocul try a finalizat cu succes, fără nicio excepție.",
        "Întotdeauna după ce s-a executat blocul finally.",
        "Numai dacă o excepție a fost aruncată și capturată cu succes.",
        "Dacă utilizatorul apasă tasta Cancel în consolă."
      ],
      "correctIndex": 0,
      "explanation": "Clauza else din structura try-except este destinată codului care trebuie să ruleze doar dacă operațiunea din try nu a generat nicio eroare."
    },
    "task": "Scrie un bloc try-except care convertește stringul 'raw_val' în 'int(raw_val)' și capturează 'ValueError' returnând 0.",
    "starterCode": "def parse_int(raw_val):\n    # Completează cu try-except\n",
    "expectedOutputPattern": "try:\\s+return\\s+int\\(raw_val\\)\\s+except\\s+ValueError:\\s+return\\s+0",
    "hint": "Scrie try: return int(raw_val) urmat de except ValueError: return 0."
  },
  {
    "id": "py-new-7",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 7: POO — Clase, Constructori '__init__' & 'self'",
    "theory": "\n<p>În Python, orice clasă este un tip de date personalizat. Instanțierea unui obiect invocă automat metoda magică <code>__init__(self, ...)</code>, unde <code>self</code> reprezintă referința explicită către instanța curentă.</p>\n<h4>1. Metode de Instanță & Atribute</h4>\n<p>Atributele definite pe <code>self</code> (ex: <code>self.name = name</code>) aparțin fiecărui obiect individual. Variabilele definite direct în corpul clasei sunt atribute de clasă partajate între toate instanțele.</p>\n<h4>2. Reprezentare Textuală: '__repr__' vs '__str__'</h4>\n<p><code>__str__</code> oferă o descriere lizibilă destinată utilizatorului final, în timp ce <code>__repr__</code> este destinat dezvoltatorilor pentru depanare și ar trebui să fie cât mai exact și neambiguu.</p>\n",
    "glossary": [
      {
        "term": "__init__",
        "def": "Metodă inițializatoare apelată imediat după crearea instanței cu __new__."
      },
      {
        "term": "self",
        "def": "Primul parametru obligatoriu al metodelor de instanță, referă obiectul curent."
      },
      {
        "term": "__repr__",
        "def": "Reprezentare oficială de depanare a obiectului pentru dezvoltatori."
      },
      {
        "term": "Atribut de Clasă",
        "def": "Variabilă partajată la nivelul întregii clase, comună tuturor instanțelor."
      }
    ],
    "matchingPairs": [
      {
        "left": "def __init__(self, x):",
        "right": "Inițializează atributele noii instanțe"
      },
      {
        "left": "def __str__(self):",
        "right": "Descriere lizibilă pentru utilizatori"
      },
      {
        "left": "def __repr__(self):",
        "right": "String detaliat de depanare pentru developeri"
      },
      {
        "left": "self.x = x",
        "right": "Asignează valoarea atributului instanței"
      }
    ],
    "quiz": {
      "question": "Ce reprezintă parametrul 'self' în definiția unei metode de clasă în Python?",
      "options": [
        "Referința către instanța curentă a clasei pe care se invocă metoda.",
        "Un cuvânt cheie rezervat de compilator echivalent cu 'static'.",
        "Pointer către clasa părinte din care moștenește clasa curentă.",
        "O variabilă globală accesibilă în toate fișierele din proiect."
      ],
      "correctIndex": 0,
      "explanation": "'self' este o convenție standard în Python prin care prima referință transmisă metodei este chiar obiectul pe care se face apelul."
    },
    "task": "Definește clasa 'User' cu metoda __init__ care primește parametrii 'self', 'username' și 'email' și îi asignează pe instanță.",
    "starterCode": "class User:\n    # Definește constructorul __init__\n",
    "expectedOutputPattern": "def\\s+__init__\\(self,\\s*username,\\s*email\\):\\s+self\\.username\\s*=\\s*username\\s+self\\.email\\s*=\\s*email",
    "hint": "Scrie def __init__(self, username, email): urmat de self.username = username și self.email = email."
  },
  {
    "id": "py-new-8",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 8: Încapsulare cu '@property' și Setter",
    "theory": "\n<p>Spre deosebire de Java sau C++, Python nu are specificatori rigizi de acces precum <code>private</code> sau <code>protected</code>. Convenția PEP 8 folosește un singur underscore prefixat (<code>_attr</code>) pentru a semnala un atribut intern.</p>\n<h4>1. Decoratorul '@property'</h4>\n<p>Decoratorul <code>@property</code> transformă o metodă într-un getter accesibil ca un atribut simplu fără paranteze: <code>user.full_name</code>.</p>\n<h4>2. Validare cu '@prop.setter'</h4>\n<p>Decoratorul <code>@name.setter</code> interceptează atribuirea de valori, permițând validări de integritate (ex: prețul nu poate fi negativ) menținând totodată o sintaxă curată.</p>\n",
    "glossary": [
      {
        "term": "@property",
        "def": "Decorator ce permite apelarea unei metode ca pe un atribut simplu de citire."
      },
      {
        "term": "@x.setter",
        "def": "Decorator complementar ce definește logica de scriere și validare a proprietății."
      },
      {
        "term": "Leading Underscore (_x)",
        "def": "Convenție comunitară ce semnalează că o variabilă este de uz intern."
      },
      {
        "term": "Dunder Name Mangling (__x)",
        "def": "Prefixarea cu două underscore-uri ce redenumește intern variabila pentru a preveni coliziuni în moștenire."
      }
    ],
    "matchingPairs": [
      {
        "left": "@property",
        "right": "Creează un getter accesibil ca atribut"
      },
      {
        "left": "@price.setter",
        "right": "Validează noua valoare la atribuire"
      },
      {
        "left": "self._balance",
        "right": "Atribut protejat prin convenție"
      },
      {
        "left": "self.__secret",
        "right": "Name mangling activat de CPython"
      }
    ],
    "quiz": {
      "question": "Care este principalul avantaj al utilizării decoratorului @property în Python?",
      "options": [
        "Permite adăugarea logicii de validare fără a modifica API-ul public de accesare a atributului.",
        "Face ca variabila să fie stocată direct în cache-ul L1 al procesorului.",
        "Transformă automat clasa într-o bază de date relațională.",
        "Previne ștergerea fișierului sursă de către alți utilizatori."
      ],
      "correctIndex": 0,
      "explanation": "Cu @property poți începe cu un atribut public simplu și, ulterior, poți adăuga validare fără a forța clienții să schimbe codul din obj.attr în obj.get_attr()."
    },
    "task": "Definește un getter @property numit 'age' în clasa 'Person' care returnează valoarea atributului protejat 'self._age'.",
    "starterCode": "class Person:\n    def __init__(self, age):\n        self._age = age\n\n    # Adaugă @property age\n",
    "expectedOutputPattern": "@property\\s+def\\s+age\\(self\\):\\s+return\\s+self\\._age",
    "hint": "Folosește @property urmat de def age(self): return self._age."
  },
  {
    "id": "py-new-9",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 9: Argumente Variabile '*args' și '**kwargs'",
    "theory": "\n<p>Operatorii de despachetare <code>*</code> și <code>**</code> permit funcțiilor să accepte un număr dinamic de parametri poziționali și nominali.</p>\n<h4>1. Tuple-ul '*args'</h4>\n<p>Parametrul <code>*args</code> împachetează toate argumentele poziționale suplimentare într-un <code>tuple</code> imutabil.</p>\n<h4>2. Dicționarul '**kwargs'</h4>\n<p>Parametrul <code>**kwargs</code> împachetează toate argumentele transmise ca perechi cheie-valoare într-un <code>dict</code> standard. Este fundamentul prin care decoratorii transmit mai departe argumentele funcției decorate.</p>\n",
    "glossary": [
      {
        "term": "*args",
        "def": "Colectează argumentele poziționale excedentare într-un tuple."
      },
      {
        "term": "**kwargs",
        "def": "Colectează argumentele cu nume (keyword arguments) într-un dicționar."
      },
      {
        "term": "Argument Unpacking",
        "def": "Transmiterea unei liste cu *list sau a unui dicționar cu **dict într-un apel de funcție."
      },
      {
        "term": "Keyword-Only Argument",
        "def": "Argument ce poate fi transmis doar cu nume, plasat după un '*' solitar."
      }
    ],
    "matchingPairs": [
      {
        "left": "def func(*args):",
        "right": "args este un tuple cu parametri poziționali"
      },
      {
        "left": "def func(**kwargs):",
        "right": "kwargs este un dict cu perechi cheie-valoare"
      },
      {
        "left": "func(*my_list)",
        "right": "Despachetează lista ca parametri individuali"
      },
      {
        "left": "func(**my_dict)",
        "right": "Despachetează dicționarul ca parametri numiți"
      }
    ],
    "quiz": {
      "question": "Ce tip de date are parametrul 'kwargs' în corpul funcției 'def log_event(**kwargs):'?",
      "options": [
        "dict (dicționar standard Python)",
        "tuple (tuplu imutabil)",
        "list (listă dinamică)",
        "set (mulțime de valori unice)"
      ],
      "correctIndex": 0,
      "explanation": "**kwargs capturează toate argumentele denumite (keyword arguments) într-un dicționar standard de tip dict."
    },
    "task": "Definește funcția 'wrapper(*args, **kwargs)' care apelează și returnează 'target(*args, **kwargs)'.",
    "starterCode": "def wrapper(*args, **kwargs):\n    # Apelează target și returnează rezultatul\n",
    "expectedOutputPattern": "return\\s+target\\(\\*args,\\s*\\*\\*kwargs\\)",
    "hint": "Scrie: return target(*args, **kwargs)"
  },
  {
    "id": "py-new-10",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 10: Decoratori & Metaprogramare cu '@functools.wraps'",
    "theory": "\n<p>Un decorator este o funcție de ordin superior care primește o funcție ca argument și returnează o versiune extinsă a acesteia, adăugând comportamente transversale (logging, benchmarking, autentificare) fără a altera codul original.</p>\n<h4>1. Structura Clasică a unui Decorator</h4>\n<p>Un decorator definește o funcție internă <code>wrapper(*args, **kwargs)</code> care execută cod înainte și după funcția țintă.</p>\n<h4>2. Salvarea Metadatelor cu @functools.wraps</h4>\n<p>Fără <code>@wraps(func)</code>, numele (<code>__name__</code>) și documentația (<code>__doc__</code>) a funcției originale sunt suprascrise de cele ale wrapper-ului. Folosirea <code>@wraps</code> păstrează identitatea intactă.</p>\n",
    "glossary": [
      {
        "term": "Higher-Order Function",
        "def": "Funcție ce acceptă alte funcții ca argumente sau returnează funcții."
      },
      {
        "term": "@functools.wraps",
        "def": "Decorator auxiliar ce copiază numele și docstringul funcției originale pe wrapper."
      },
      {
        "term": "Closure (Închidere)",
        "def": "Funcție internă ce reține accesul la variabilele din scope-ul funcției exterioare."
      },
      {
        "term": "Aspect-Oriented Design",
        "def": "Separarea preocupărilor transversale precum loggingul sau autorizarea de logica de business."
      }
    ],
    "matchingPairs": [
      {
        "left": "@wraps(fn)",
        "right": "Păstrează __name__ și __doc__ ale funcției originale"
      },
      {
        "left": "wrapper(*args, **kwargs)",
        "right": "Interceptează apelul și rulează logica transversală"
      },
      {
        "left": "@my_decorator",
        "right": "Zahăr sintactic pentru fn = my_decorator(fn)"
      },
      {
        "left": "fn(*args, **kwargs)",
        "right": "Execuția funcției decorate originale"
      }
    ],
    "quiz": {
      "question": "Ce problemă rezolvă adăugarea @functools.wraps(func) pe funcția wrapper a unui decorator?",
      "options": [
        "Păstrează numele (__name__) și docstringul (__doc__) funcției decorate originale.",
        "Face ca funcția să ruleze pe toate nucleele procesorului simultan.",
        "Previne complet apariția excepțiilor de tip TypeError.",
        "Compilează funcția direct în limbaj de asamblare x86."
      ],
      "correctIndex": 0,
      "explanation": "Fără @wraps(func), funcția decorată își pierde identitatea și va apărea în traceback-uri și unelte de depanare ca având numele 'wrapper'."
    },
    "task": "Scrie un decorator simplu 'my_dec(fn)' care conține un wrapper decorat cu '@wraps(fn)' ce returnează 'fn(*args, **kwargs)'.",
    "starterCode": "from functools import wraps\n\ndef my_dec(fn):\n    # Completează wrapper-ul\n",
    "expectedOutputPattern": "@wraps\\(fn\\)\\s+def\\s+wrapper\\(\\*args,\\s*\\*\\*kwargs\\):\\s+return\\s+fn\\(\\*args,\\s*\\*\\*kwargs\\)",
    "hint": "Folosește @wraps(fn) deasupra lui def wrapper(*args, **kwargs): return fn(*args, **kwargs) și returnează wrapper."
  },
  {
    "id": "py-new-11",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 11: Generatoare & Protocolul Iterator ('yield')",
    "theory": "\n<p>Generatoarele sunt funcții speciale care produc valori secvențial la cerere folosind cuvântul cheie <code>yield</code>, în loc să construiască o listă completă în memorie.</p>\n<h4>1. Eficiență Memorie $O(1)$</h4>\n<p>Când o funcție întâlnește <code>yield</code>, starea sa de execuție este înghețată și valoarea este trimisă apelantului. La următoarea cerere (via <code>next()</code> sau într-o buclă <code>for</code>), execuția se reia exact de la instrucțiunea următoare.</p>\n<h4>2. Generator Expressions</h4>\n<p>Sintaxa <code>(x * 2 for x in large_stream)</code> creează un generator anonim fără a aloca memorie pentru întreaga colecție, fiind esențial pentru procesarea fișierelor de zeci de gigaocteți.</p>\n",
    "glossary": [
      {
        "term": "yield",
        "def": "Instrucțiune ce returnează o valoare intermediară și suspendă execuția funcției generator."
      },
      {
        "term": "Lazy Evaluation",
        "def": "Calculul valorilor este amânat până în momentul precis în care acestea sunt solicitate."
      },
      {
        "term": "StopIteration",
        "def": "Excepție internă semnalată automat când generatorul nu mai are elemente de produs."
      },
      {
        "term": "next(iterator)",
        "def": "Funcție nativă ce solicită următoarea valoare disponibilă dintr-un generator."
      }
    ],
    "matchingPairs": [
      {
        "left": "yield item",
        "right": "Trimite valoarea și îngheață starea funcției"
      },
      {
        "left": "next(gen)",
        "right": "Reia execuția până la următorul yield"
      },
      {
        "left": "(x for x in data)",
        "right": "Generator expression cu consum O(1) de memorie"
      },
      {
        "left": "StopIteration",
        "right": "Excepție ce marchează epuizarea generatorului"
      }
    ],
    "quiz": {
      "question": "Care este principalul avantaj al unui generator cu 'yield' față de o funcție ce returnează o listă de 10.000.000 de elemente?",
      "options": [
        "Consum constant de memorie O(1), deoarece elementele sunt produse la cerere.",
        "Codul este compilat automat în WebAssembly.",
        "Generatoarele nu pot arunca niciodată excepții.",
        "Elementele pot fi accesate instant prin indexare directă gen gen[500]."
      ],
      "correctIndex": 0,
      "explanation": "Generatoarele generează fiecare element la cerere (lazy), fără a aloca memorie RAM pentru întreaga colecție simultan."
    },
    "task": "Scrie o funcție generator 'count_up(n)' care iterează de la 0 la n-1 folosind o buclă for și emite fiecare valoare cu 'yield'.",
    "starterCode": "def count_up(n):\n    # Folosește for și yield\n",
    "expectedOutputPattern": "for\\s+i\\s+in\\s+range\\(n\\):\\s+yield\\s+i",
    "hint": "Scrie for i in range(n): urmat de yield i."
  },
  {
    "id": "py-new-12",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 12: Structuri Avansate din Modulul 'collections'",
    "theory": "\n<p>Modulul standard <code>collections</code> oferă alternative optimizate în C la tipurile de date de bază din Python, rezolvând probleme comune de arhitectură.</p>\n<h4>1. defaultdict & Counter</h4>\n<p><code>defaultdict(factory)</code> elimină verificările repetitive de chei lipsă, instanțiind automat valoarea implicită (ex: <code>defaultdict(list)</code>). <code>Counter(iterable)</code> numără instant frecvența aparițiilor fiecărui element.</p>\n<h4>2. deque (Double-Ended Queue)</h4>\n<p>În timp ce adăugarea/ștergerea de la începutul unei liste clasice (<code>list.pop(0)</code>) costă $O(n)$, <code>collections.deque</code> oferă operațiuni de tip <code>appendleft()</code> și <code>popleft()</code> garantate în timp $O(1)$.</p>\n",
    "glossary": [
      {
        "term": "defaultdict(list)",
        "def": "Dicționar ce inițializează automat o listă nouă la accesarea unei chei inexistente."
      },
      {
        "term": "Counter",
        "def": "Subclasă de dict specializată în numărarea și ordonarea elementelor hashable."
      },
      {
        "term": "deque",
        "def": "Coadă dublă optimizată pentru adăugare și eliminare O(1) la ambele capete."
      },
      {
        "term": "namedtuple",
        "def": "Tuplu ale cărui câmpuri pot fi accesate atât prin index, cât și prin nume de atribut."
      }
    ],
    "matchingPairs": [
      {
        "left": "deque.popleft()",
        "right": "Eliminare garantată în timp O(1) de la început"
      },
      {
        "left": "Counter(words).most_common(3)",
        "right": "Returnează top 3 cele mai frecvente cuvinte"
      },
      {
        "left": "defaultdict(int)",
        "right": "Inițializează automat cheile lipsă cu 0"
      },
      {
        "left": "namedtuple('Point', ['x', 'y'])",
        "right": "Tuplu imutabil cu acces prin nume de câmp"
      }
    ],
    "quiz": {
      "question": "De ce este preferabil să folosești collections.deque în loc de list când implementezi o coadă FIFO?",
      "options": [
        "Operația popleft() pe deque durează O(1), în timp ce pe o listă clasică costă O(n).",
        "Listele clasice nu suportă adăugarea la final prin append().",
        "deque poate stoca doar numere întregi pe 64 de biți.",
        "deque criptează datele din coadă în memorie."
      ],
      "correctIndex": 0,
      "explanation": "Listele Python sunt vectori contigui; ștergerea primului element necesită deplasarea tuturor celorlalte elemente din memorie (O(n)). deque folosește blocuri legate în timp O(1)."
    },
    "task": "Creează un dicționar 'groups' de tip 'defaultdict(list)' din modulul 'collections'.",
    "starterCode": "from collections import defaultdict\n\ngroups = ",
    "expectedOutputPattern": "groups\\s*=\\s*defaultdict\\(list\\)",
    "hint": "Scrie groups = defaultdict(list)."
  },
  {
    "id": "py-new-13",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 13: Type Hinting Modern & Modulul 'typing'",
    "theory": "\n<p>Începând cu Python 3.9 și 3.10, adnotările de tipuri au devenit native (ex: <code>list[str]</code>, <code>dict[str, int]</code>, union-ul cu bară <code>int | None</code>), facilitând analiza statică prin unelte precum <code>mypy</code>.</p>\n<h4>1. Tipuri Opționale & Union</h4>\n<p>Sintaxa modernă <code>val: str | None = None</code> este echivalentă cu <code>Optional[str]</code> din modulul <code>typing</code>, indicând că o variabilă poate conține un șir sau valoarea <code>None</code>.</p>\n<h4>2. Protocol & Callable</h4>\n<p><code>Callable[[Arg1, Arg2], ReturnType]</code> tipizează semnătura unei funcții transmise ca parametru. Clasele ce moștenesc <code>typing.Protocol</code> permit implementarea de tipare structurală (Duck Typing verificat static).</p>\n",
    "glossary": [
      {
        "term": "Type Hints (PEP 484)",
        "def": "Adnotări de tip utilizate de linters și IDE-uri pentru detectarea erorilor înainte de rulare."
      },
      {
        "term": "Union (A | B)",
        "def": "Operator ce specifică că o valoare poate fi de oricare dintre tipurile indicate."
      },
      {
        "term": "Callable[[A], R]",
        "def": "Tip ce descrie o funcție care primește un argument de tip A și returnează R."
      },
      {
        "term": "Duck Typing",
        "def": "'Dacă merge ca o rață și măcăne ca o rață, este o rață' - compatibilitate pe bază de comportament."
      }
    ],
    "matchingPairs": [
      {
        "left": "items: list[str]",
        "right": "Listă ce conține exclusiv șiruri de caractere"
      },
      {
        "left": "val: int | None",
        "right": "Valoare opțională: întreg sau None"
      },
      {
        "left": "fn: Callable[[int], bool]",
        "right": "Funcție ce primește int și returnează bool"
      },
      {
        "left": "cache: dict[str, Any]",
        "right": "Dicționar cu chei string și valori de orice tip"
      }
    ],
    "quiz": {
      "question": "Ce reprezintă adnotarea de tip 'def find_user(id: int) -> User | None:'?",
      "options": [
        "Funcția primește un întreg și poate returna un obiect User sau valoarea None dacă nu a fost găsit.",
        "Funcția aruncă o eroare dacă nu găsește un User în baza de date.",
        "ID-ul utilizatorului este convertit automat din User în None.",
        "Funcția se execută doar dacă ID-ul este număr impar."
      ],
      "correctIndex": 0,
      "explanation": "Adnotarea 'User | None' semnalează static că funcția poate returna fie o instanță validă a clasei User, fie valoarea None."
    },
    "task": "Definește o funcție tipizată 'calculate(x: int, y: int) -> int:' care returnează suma lor.",
    "starterCode": "# Scrie funcția tipizată calculate\n",
    "expectedOutputPattern": "def\\s+calculate\\(x:\\s*int,\\s*y:\\s*int\\)\\s*->\\s*int:\\s+return\\s+x\\s*\\+\\s*y",
    "hint": "Scrie def calculate(x: int, y: int) -> int: return x + y."
  },
  {
    "id": "py-new-14",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 14: Clase de Date Moderne — '@dataclass'",
    "theory": "\n<p>Decoratorul <code>@dataclass</code> din modulul standard <code>dataclasses</code> generează automat metodele <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code> și altele pe baza adnotărilor de tip, eliminând codul de tip boilerplate.</p>\n<h4>1. Imutabilitate cu frozen=True</h4>\n<p>Specificarea <code>@dataclass(frozen=True)</code> transformă instanțele în obiecte imutabile și automat <em>hashable</em>, permițându-le să fie utilizate drept chei în dicționare sau elemente în seturi.</p>\n<h4>2. Câmpuri cu 'field(default_factory=...)'</h4>\n<p>Valorile implicite mutabile (precum liste goale) nu trebuie niciodată declarate ca <code>items: list = []</code>. Se folosește <code>field(default_factory=list)</code> pentru a asigura o instanță nouă pentru fiecare obiect.</p>\n",
    "glossary": [
      {
        "term": "@dataclass",
        "def": "Decorator ce autogenerează constructorul, egalitatea și reprezentarea pentru clase de date."
      },
      {
        "term": "frozen=True",
        "def": "Parametru ce interzice modificarea atributelor după instanțiere, făcând obiectul hashable."
      },
      {
        "term": "default_factory",
        "def": "Funcție furnizoare de valori implicite mutabile unice per instanță (ex: list, dict)."
      },
      {
        "term": "__post_init__",
        "def": "Metodă specială apelată automat după __init__ pentru validări suplimentare."
      }
    ],
    "matchingPairs": [
      {
        "left": "@dataclass(frozen=True)",
        "right": "Generează o clasă de date complet imutabilă"
      },
      {
        "left": "field(default_factory=list)",
        "right": "Evită partajarea listei mutabile între instanțe"
      },
      {
        "left": "def __post_init__(self):",
        "right": "Execută validări imediat după inițializare"
      },
      {
        "left": "asdict(my_dataclass)",
        "right": "Convertește instant instanța într-un dicționar"
      }
    ],
    "quiz": {
      "question": "De ce este interzisă atribuirea directă 'tags: list[str] = []' în interiorul unei @dataclass?",
      "options": [
        "Aceeași listă ar fi partajată periculos între toate instanțele clasei (eroare de valoare implicită mutabilă).",
        "Python refuză să ruleze dacă găsește caracterele '[]' într-o clasă.",
        "Listele ocupă prea multă memorie pe procesoarele ARM.",
        "Dataclass suportă doar tuple-uri, nu și liste."
      ],
      "correctIndex": 0,
      "explanation": "Valorile implicite mutabile sunt evaluate o singură dată la definirea clasei. Fără default_factory=list, toate instanțele ar partaja aceeași listă în memorie."
    },
    "task": "Definește un @dataclass numit 'Product' cu atributele 'name: str' și 'price: float'.",
    "starterCode": "from dataclasses import dataclass\n\n# Creează dataclass Product\n",
    "expectedOutputPattern": "@dataclass\\s+class\\s+Product:\\s+name:\\s*str\\s+price:\\s*float",
    "hint": "Scrie @dataclass deasupra lui class Product: name: str price: float."
  },
  {
    "id": "py-new-15",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 65,
    "title": "Capitolul 15: Asincronism Nativa cu 'asyncio' (Event Loop)",
    "theory": "\n<p>Modulul <code>asyncio</code> oferă o arhitectură concurentă cu cooperare bazată pe un singur fir de execuție (Single-Threaded Event Loop), ideală pentru operațiuni I/O bound (apeluri HTTP, baze de date).</p>\n<h4>1. Coroutine cu 'async def' și 'await'</h4>\n<p>O funcție declarată cu <code>async def</code> este o coroutină. Instrucțiunea <code>await coro()</code> suspendă coroutina curentă și cedează controlul Event Loop-ului până când rezultatul este gata, permițând altor coroutine să ruleze.</p>\n<h4>2. Execuție Concurentă cu asyncio.gather</h4>\n<p>Funcția <code>asyncio.gather(*tasks)</code> lansează multiple operațiuni asincrone în paralel și returnează toate rezultatele agregate când toate s-au încheiat.</p>\n",
    "glossary": [
      {
        "term": "Event Loop",
        "def": "Bucle centrală ce gestionează și distribuie execuția coroutinelor și evenimentelor asincrone."
      },
      {
        "term": "Coroutine",
        "def": "Funcție specială declarată cu 'async def' ce poate fi suspendată și reluată prin 'await'."
      },
      {
        "term": "asyncio.gather()",
        "def": "Metodă ce execută concurent mai multe coroutine și agregă rezultatele acestora."
      },
      {
        "term": "I/O Bound",
        "def": "Operațiuni a căror viteză depinde de rețea sau disc, nu de viteza procesorului."
      }
    ],
    "matchingPairs": [
      {
        "left": "async def fetch():",
        "right": "Definește o coroutină asincronă"
      },
      {
        "left": "await response.json()",
        "right": "Cedează controlul buclei până la finalizarea I/O"
      },
      {
        "left": "asyncio.run(main())",
        "right": "Inițializează și rulează bucla Event Loop"
      },
      {
        "left": "asyncio.gather(t1, t2)",
        "right": "Lansează task-urile în concurență deplină"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă apelezi o funcție declarată cu 'async def my_func():' fără a folosi cuvântul 'await'?",
      "options": [
        "Funcția NU se execută; este returnat doar un obiect de tip coroutine neevaluat.",
        "Funcția se execută automat într-un fir de execuție separat din sistemul de operare.",
        "Sistemul aruncă o excepție fatală de tip Segmentation Fault.",
        "Programul se blochează într-o buclă infinită de tip busy-wait."
      ],
      "correctIndex": 0,
      "explanation": "Apelul unei funcții asincrone creează doar un obiect coroutină. Pentru a programa execuția acesteia pe Event Loop este obligatoriu să folosești 'await' sau asyncio.create_task()."
    },
    "task": "Scrie funcția asincronă 'main()' care apelează 'await fetch_data()' și returnează rezultatul obținut.",
    "starterCode": "async def main():\n    # Așteaptă fetch_data() și returnează\n",
    "expectedOutputPattern": "async\\s+def\\s+main\\(\\):\\s+(?:res\\s*=\\s*)?await\\s+fetch_data\\(\\)(?:\\s+return\\s+res)?",
    "hint": "Scrie async def main(): return await fetch_data() (sau stochează într-o variabilă și returneaz-o)."
  },
  {
    "id": "py-new-16",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "5. Arhitect / Exemplar",
    "xp": 70,
    "title": "Capitolul 16: Arhitectura GIL & Concurență: Multiprocessing vs Threading",
    "theory": "\n<p>În CPython, <strong>GIL</strong> (Global Interpreter Lock) este un mutex care permite unui singur fir nativ de execuție să dețină controlul interpretorului Python la un moment dat, protejând managementul memoriei bazat pe reference counting.</p>\n<h4>1. CPU-Bound vs I/O-Bound</h4>\n<p>Pentru operațiuni <em>I/O-Bound</em>, multithreading-ul sau <code>asyncio</code> sunt suficiente deoarece GIL este eliberat în timpul așteptării rețelei/discului. Pentru sarcini intensive <em>CPU-Bound</em> (calcule matematice, machine learning), este obligatoriu modulul <code>multiprocessing</code>, care lansează procese OS separate cu spații de memorie independente și interpretor propriu.</p>\n<h4>2. concurrent.futures.ProcessPoolExecutor</h4>\n<p>Interfața unificată <code>ProcessPoolExecutor(max_workers=N)</code> permite distribuirea task-urilor pe toate nucleele hardware ale procesorului fără a gestiona manual procesele individuale.</p>\n",
    "glossary": [
      {
        "term": "GIL (Global Interpreter Lock)",
        "def": "Mutex intern din CPython ce restricționează execuția bytecode-ului la un singur thread per proces."
      },
      {
        "term": "CPU-Bound",
        "def": "Operație al cărei timp de execuție depinde exclusiv de puterea de calcul a procesorului."
      },
      {
        "term": "ProcessPoolExecutor",
        "def": "Pool de procese separate din sistem ce ocolesc complet limitarea impusă de GIL."
      },
      {
        "term": "IPC (Inter-Process Comm)",
        "def": "Mecanisme de transfer de date între procese OS diferite (pipe-uri, shared memory)."
      }
    ],
    "matchingPairs": [
      {
        "left": "ProcessPoolExecutor",
        "right": "Execuție paralelă reală pe nuclee CPU multiple"
      },
      {
        "left": "ThreadPoolExecutor",
        "right": "Optim pentru operațiuni I/O bound cu I/O blocant"
      },
      {
        "left": "Global Interpreter Lock",
        "right": "Protejează sistemul intern de reference counting"
      },
      {
        "left": "multiprocessing.Queue",
        "right": "Canal de comunicare thread/process-safe între procese"
      }
    ],
    "quiz": {
      "question": "De ce este necesar să folosești 'multiprocessing' în loc de 'threading' pentru procesare matematică intensivă în CPython?",
      "options": [
        "Deoarece GIL împiedică thread-urile Python să ruleze cod bytecode simultan pe nuclee multiple.",
        "Thread-urile din Python sunt limitate la maxim 1 MB de memorie RAM.",
        "Modulul threading nu poate fi importat pe sisteme Linux sau macOS.",
        "Procesoarele moderne refuză thread-urile care nu folosesc C++."
      ],
      "correctIndex": 0,
      "explanation": "GIL permite unui singur fir să ruleze instrucțiuni Python în același timp. Doar procesele separate (multiprocessing) au fiecare propriul lor GIL și pot rula în paralel pe nuclee diferite."
    },
    "task": "Instanțiază un pool de procese folosind 'ProcessPoolExecutor(max_workers=4)' din modulul 'concurrent.futures' în variabila 'executor'.",
    "starterCode": "from concurrent.futures import ProcessPoolExecutor\n\nexecutor = ",
    "expectedOutputPattern": "executor\\s*=\\s*ProcessPoolExecutor\\(max_workers=4\\)",
    "hint": "Scrie executor = ProcessPoolExecutor(max_workers=4)."
  },
  {
    "id": "py-new-17",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "5. Arhitect / Exemplar",
    "xp": 70,
    "title": "Capitolul 17: Metaclase & '__init_subclass__' (Metaprogramare la Nivel de Clasă)",
    "theory": "\n<p>În Python, clasele înseși sunt obiecte, fiind instanțe ale unei metaclase (implicit <code>type</code>). O metaclase permite interceptarea și modificarea modului în care clasele sunt construite.</p>\n<h4>1. '__init_subclass__' — Alternativa Modernă (PEP 487)</h4>\n<p>Înainte de Python 3.6, validarea claselor derivate necesita scrierea unei metaclase complexe moștenite din <code>type</code>. Metoda <code>__init_subclass__(cls, **kwargs)</code> simplifică radical acest proces, fiind apelată automat pe clasa de bază ori de câte ori cineva o moștenește.</p>\n<h4>2. Înregistrarea Automată de Plugin-uri</h4>\n<p>Prin <code>__init_subclass__</code>, un framework poate înregistra automat toate clasele copil într-un registru intern fără a necesita decoratori explicite.</p>\n",
    "glossary": [
      {
        "term": "Metaclass",
        "def": "Clasa unei clase; definește cum este construită și validată o definiție de clasă."
      },
      {
        "term": "__init_subclass__",
        "def": "Cârlig nativ (hook) invocat automat pe clasa părinte când este creată o subclasă."
      },
      {
        "term": "type (ca metaclasă)",
        "def": "Metaclasa implicită responsabilă pentru crearea tuturor claselor în Python."
      },
      {
        "term": "Plugin Registry",
        "def": "Mecanism arhitectural de colectare și activare dinamică a extensiilor."
      }
    ],
    "matchingPairs": [
      {
        "left": "def __init_subclass__(cls):",
        "right": "Interceptează crearea oricărei subclase derivate"
      },
      {
        "left": "type(name, bases, dict)",
        "right": "Instanțierea dinamică a unei clase la runtime"
      },
      {
        "left": "class Meta(type):",
        "right": "Definirea unei metaclase clasice"
      },
      {
        "left": "super().__init_subclass__()",
        "right": "Propagă apelul către clasele de bază superioare"
      }
    ],
    "quiz": {
      "question": "Care este principalul avantaj al utilizării '__init_subclass__' în locul unei metaclase moștenite din 'type'?",
      "options": [
        "Este mult mai simplu de scris și evită conflictele complexe de metaclase în moșteniri multiple.",
        "Reduce consumul de energie electrică al serverului cu 50%.",
        "Compilează clasa direct în binar nativ C fără verificare de tipuri.",
        "Elimină complet necesitatea utilizării metodei __init__."
      ],
      "correctIndex": 0,
      "explanation": "__init_subclass__ (introdus în PEP 487) permite validarea și înregistrarea claselor derivate printr-o simplă metodă de clasă, evitând metaclasele greoaie."
    },
    "task": "Definește metoda '__init_subclass__(cls, **kwargs)' pe clasa 'Plugin' care apelează 'super().__init_subclass__(**kwargs)'.",
    "starterCode": "class Plugin:\n    # Definește __init_subclass__\n",
    "expectedOutputPattern": "def\\s+__init_subclass__\\(cls,\\s*\\*\\*kwargs\\):\\s+super\\(\\)\\.__init_subclass__\\(\\*\\*kwargs\\)",
    "hint": "Scrie @classmethod def __init_subclass__(cls, **kwargs): urmat de super().__init_subclass__(**kwargs)."
  },
  {
    "id": "py-new-18",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 18: Validare Robustă de Date cu Pydantic",
    "theory": "\n<p><strong>Pydantic</strong> este biblioteca etalon în Python modern (la baza FastAPI) pentru validarea datelor, serializare JSON și definirea schemelor pe baza adnotărilor de tip native.</p>\n<h4>1. Modele 'BaseModel'</h4>\n<p>O clasă ce moștenește <code>pydantic.BaseModel</code> validează automat tipurile la instanțiere, convertind dacă este posibil datele (coercion) și aruncând un <code>ValidationError</code> structurat în caz de nepotrivire.</p>\n<h4>2. Constrângeri cu 'Field'</h4>\n<p>Metoda <code>Field(gt=0, le=100, max_length=50)</code> permite definirea de reguli de validare direct la nivel declarativ (ex: prețul strict mai mare ca 0).</p>\n",
    "glossary": [
      {
        "term": "BaseModel",
        "def": "Clasa de bază din Pydantic pentru modelarea și validarea datelor structurate."
      },
      {
        "term": "ValidationError",
        "def": "Excepție ce conține detalii precise despre fiecare câmp care a eșuat validarea."
      },
      {
        "term": "Type Coercion",
        "def": "Conversia automată securizată a datelor compatibile (ex: '123' în int 123)."
      },
      {
        "term": "Field()",
        "def": "Funcție de adnotare a constrângerilor de validare pe proprietăți."
      }
    ],
    "matchingPairs": [
      {
        "left": "class User(BaseModel):",
        "right": "Definește o schemă cu validare automată"
      },
      {
        "left": "Field(gt=0)",
        "right": "Validează ca valoarea să fie strict mai mare ca 0"
      },
      {
        "left": "model.model_dump()",
        "right": "Serializare în dicționar standard Python"
      },
      {
        "left": "model.model_dump_json()",
        "right": "Serializare directă în format JSON string"
      }
    ],
    "quiz": {
      "question": "Ce face Pydantic atunci când primește valoarea '42' (ca string) pentru un câmp adnotat cu tipul 'age: int'?",
      "options": [
        "Efectuează conversie automată (coercion) și setează valoarea numerică 42.",
        "Aruncă imediat ValidationError fără nicio încercare de conversie.",
        "Ignoră câmpul și îi atribuie valoarea None.",
        "Termină execuția programului cu cod de eroare 1."
      ],
      "correctIndex": 0,
      "explanation": "Pydantic realizează conversie automată (type coercion) pentru tipurile compatibile; astfel, stringul '42' este parsat cu succes în întregul 42."
    },
    "task": "Definește un model Pydantic 'Item' cu câmpul 'title: str' și 'price: float' care moștenește 'BaseModel'.",
    "starterCode": "from pydantic import BaseModel\n\n# Definește modelul Item\n",
    "expectedOutputPattern": "class\\s+Item\\(BaseModel\\):\\s+title:\\s*str\\s+price:\\s*float",
    "hint": "Scrie class Item(BaseModel): urmat de title: str și price: float."
  },
  {
    "id": "cs-new-1",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Sintaxă C# 12 & Top-Level Statements",
    "theory": "\n<p>C# este un limbaj orientat pe obiecte, cu tipizare statică puternică, compilat în CIL (Common Intermediate Language) și rulat de mașina virtuală CLR (Common Language Runtime).</p>\n<h4>1. Top-Level Statements</h4>\n<p>În versiunile moderne de C#, programele simple nu mai necesită clase <code>Program</code> sau metode <code>static void Main</code> explicite; instrucțiunile pot fi scrise direct la nivelul superior al fișierului.</p>\n<h4>2. Tipuri de Valoare vs Tipuri de Referință</h4>\n<p>Tipurile de valoare (<code>int</code>, <code>double</code>, <code>bool</code>, <code>struct</code>) sunt stocate pe <em>Stack</em>. Tipurile de referință (<code>string</code>, <code>class</code>, <code>object</code>) sunt alocate pe <em>Heap</em>, iar pe Stack se reține doar pointerul către adresa din memorie.</p>\n",
    "glossary": [
      {
        "term": "CLR (Common Language Runtime)",
        "def": "Mașina virtuală din .NET care gestionează execuția, securitatea și memoria (Garbage Collection)."
      },
      {
        "term": "Top-Level Statements",
        "def": "Caracteristică C# ce permite scrierea codului de pornire fără boilerplate-ul clasei Program."
      },
      {
        "term": "Value Type (Struct)",
        "def": "Tip stocat direct în cadrul cadrului de pe Stack cu alocare și eliberare instantanee."
      },
      {
        "term": "Reference Type (Class)",
        "def": "Tip alocat în memoria Heap, a cărui referință este administrată de Garbage Collector."
      }
    ],
    "matchingPairs": [
      {
        "left": "int, double, bool",
        "right": "Tipuri de valoare alocate pe Stack"
      },
      {
        "left": "string, class, object",
        "right": "Tipuri de referință alocate pe Heap"
      },
      {
        "left": "Console.WriteLine()",
        "right": "Afișare în consola standard a sistemului"
      },
      {
        "left": "CLR",
        "right": "Mașina de execuție a bytecode-ului .NET"
      }
    ],
    "quiz": {
      "question": "Unde este stocată valoarea unei variabile de tip primitiv 'int x = 10;' declarată local într-o metodă C#?",
      "options": [
        "Pe Stack, direct în cadrul de apel (stack frame) al metodei curente.",
        "În memoria Heap prin alocare dinamică cu pointer C++.",
        "În registrul procesorului fără a trece prin memorie RAM.",
        "Pe hard disk într-un fișier temporar al CLR-ului."
      ],
      "correctIndex": 0,
      "explanation": "Variabilele locale de tip valoare (primitive precum int, double, struct) sunt alocate pe Stack și sunt eliberate automat la ieșirea din metodă."
    },
    "task": "Afișează stringul 'Hello, Polymath!' în consolă folosind 'Console.WriteLine'.",
    "starterCode": "// Folosește Console.WriteLine\n",
    "expectedOutputPattern": "Console\\.WriteLine\\([\"']Hello,\\s*Polymath![\"']\\);",
    "hint": "Scrie Console.WriteLine(\"Hello, Polymath!\");"
  },
  {
    "id": "cs-new-2",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 2: Parametri 'ref', 'out' și 'in' în Metode C#",
    "theory": "\n<p>În mod implicit, tipurile de valoare sunt transmise prin copiere (by value). C# oferă modificatori expliciți pentru a transmite referința directă a locației din memorie.</p>\n<h4>1. Modificatorul 'ref' vs 'out'</h4>\n<p><code>ref</code> impune ca variabila să fie inițializată ÎNAINTE de a fi transmisă metodei. În contrast, <code>out</code> permite transmiterea unei variabile neinițializate, garantând că metoda o va inițializa înainte de returnare (util pentru pattern-uri de tip <code>int.TryParse</code>).</p>\n<h4>2. Modificatorul 'in' (Read-Only By Reference)</h4>\n<p><code>in</code> transmite structuri mari prin referință pentru a evita costul copierii pe Stack, interzicând totodată metodei apelate să modifice valoarea.</p>\n",
    "glossary": [
      {
        "term": "ref",
        "def": "Transmite adresa variabilei; necesită ca variabila să aibă deja o valoare asignată."
      },
      {
        "term": "out",
        "def": "Transmite o variabilă prin referință; metoda este obligată să-i asigneze o valoare."
      },
      {
        "term": "in",
        "def": "Transmite referința în mod read-only, prevenind alocările și modificările nedorite."
      },
      {
        "term": "int.TryParse()",
        "def": "Pattern canonic ce returnează bool și populează rezultatul printr-un parametru 'out'."
      }
    ],
    "matchingPairs": [
      {
        "left": "int.TryParse(s, out int n)",
        "right": "Parsează textul și setează valoarea prin out"
      },
      {
        "left": "void Swap(ref int a, ref int b)",
        "right": "Modifică variabilele originale prin referință"
      },
      {
        "left": "void Inspect(in BigStruct s)",
        "right": "Transmite prin referință fără drept de scriere"
      },
      {
        "left": "params int[] values",
        "right": "Număr variabil de argumente de același tip"
      }
    ],
    "quiz": {
      "question": "Care este diferența esențială între modificatorii 'ref' și 'out' în C#?",
      "options": [
        "Variabila transmisă prin 'ref' trebuie inițializată înainte de apel, pe când la 'out' este inițializată în interiorul metodei.",
        "'out' poate fi folosit doar cu șiruri de caractere, iar 'ref' doar cu numere întregi.",
        "'ref' alocă memorie pe Heap, iar 'out' șterge variabila din memorie.",
        "Nu există nicio diferență tehnică, sunt sinonime absolute."
      ],
      "correctIndex": 0,
      "explanation": "La 'ref', variabila trebuie să aibă o valoare înainte de apel. La 'out', compilatorul garantează că metoda îi va atribui o valoare înainte de finalizare."
    },
    "task": "Apelează metoda 'int.TryParse' pe stringul 'input' salvând rezultatul în 'out int result'.",
    "starterCode": "string input = \"42\";\nbool success = ",
    "expectedOutputPattern": "success\\s*=\\s*int\\.TryParse\\(input,\\s*out\\s+int\\s+result\\);",
    "hint": "Scrie success = int.TryParse(input, out int result);"
  },
  {
    "id": "cs-new-3",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 3: POO: Moștenire, 'virtual', 'override' și 'sealed'",
    "theory": "\n<p>În C#, polimorfismul este explicit: o metodă din clasa părinte NU este polimorfică decât dacă este marcată cu <code>virtual</code> sau <code>abstract</code>.</p>\n<h4>1. Suprascrierea cu 'override'</h4>\n<p>O subclasă trebuie să folosească explicit cuvântul <code>override</code> pentru a înlocui implementarea unei metode virtuale.</p>\n<h4>2. Cuvântul Cheie 'sealed'</h4>\n<p>Aplicat pe o clasă (<code>sealed class FinalService</code>), previne moștenirea acesteia. Aplicat pe o metodă <code>override</code>, interzice subclaselor ulterioare să o mai suprascrie, permițând optimizări agresive de devirtualizare în JIT.</p>\n",
    "glossary": [
      {
        "term": "virtual",
        "def": "Specifică că o metodă poate fi suprascrisă într-o clasă derivată printr-o tabelă vtable."
      },
      {
        "term": "override",
        "def": "Furnizează o implementare concretă nouă pentru o metodă virtuală sau abstractă."
      },
      {
        "term": "sealed",
        "def": "Interzice moștenirea unei clase sau suprascrierea suplimentară a unei metode."
      },
      {
        "term": "Devirtualizare JIT",
        "def": "Optimizare a runtime-ului .NET prin care apelurile virtuale sigilate sunt transformate în apeluri directe rapide."
      }
    ],
    "matchingPairs": [
      {
        "left": "public virtual void Draw()",
        "right": "Metodă deschisă pentru polimorfism"
      },
      {
        "left": "public override void Draw()",
        "right": "Suprascriere a metodei din clasa părinte"
      },
      {
        "left": "public sealed class CoreEngine",
        "right": "Clasă din care este interzisă moștenirea"
      },
      {
        "left": "base.Execute()",
        "right": "Invocă implementarea din clasa părinte"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă o clasă copil definește o metodă cu același nume ca o metodă din părinte, dar omite cuvântul cheie 'override'?",
      "options": [
        "Metoda ascunde metoda părintelui (hiding / warning de tip 'new'), rupând comportamentul polimorfic.",
        "Compilatorul C# blochează compilarea cu o eroare fatală.",
        "Metoda este ștearsă automat din memorie de către CLR.",
        "Clasa copil moștenește ambele metode și le execută simultan."
      ],
      "correctIndex": 0,
      "explanation": "Fără 'override', metoda doar ascunde (shadows) metoda părintelui, iar apelurile prin referința părintelui vor executa în continuare codul din clasa de bază."
    },
    "task": "Declară o metodă publică 'override void Speak()' care apelează 'Console.WriteLine(\"Bark\");'.",
    "starterCode": "public class Dog : Animal {\n    // Suprascrie Speak\n",
    "expectedOutputPattern": "public\\s+override\\s+void\\s+Speak\\(\\)\\s*\\{\\s*Console\\.WriteLine\\([\"']Bark[\"']\\);\\s*\\}",
    "hint": "Scrie public override void Speak() { Console.WriteLine(\"Bark\"); }"
  },
  {
    "id": "cs-new-4",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 4: Nullable Reference Types & Operatori de Siguranță",
    "theory": "\n<p>Pentru a eradica celebra eroare <em>NullReferenceException</em> (inventată de Tony Hoare drept 'The Billion Dollar Mistake'), C# 8+ introduce <strong>Nullable Reference Types (NRT)</strong> activate prin <code>#nullable enable</code>.</p>\n<h4>1. Sintaxa 'Type?'</h4>\n<p>O referință <code>string s</code> nu poate fi niciodată null; dacă dorim să permitem valoarea null, trebuie să o declarăm explicit ca <code>string? maybeNull</code>.</p>\n<h4>2. Operatori: '??', '??=' și '?.'</h4>\n<p>Operatorul null-conditional (<code>user?.Address?.City</code>) scurtcircuitează dacă o verigă este null. Operatorul null-coalescing (<code>val ?? defaultVal</code>) furnizează o alternativă, iar <code>val ??= initVal</code> atribuie valoarea doar dacă variabila este null.</p>\n",
    "glossary": [
      {
        "term": "Nullable Reference Types",
        "def": "Sistem de verificare statică la compilare ce previne asignarea valorii null pe referințe nespecificate."
      },
      {
        "term": "Null-Conditional (?.)",
        "def": "Operator ce returnează null în loc să arunce NullReferenceException dacă ținta este null."
      },
      {
        "term": "Null-Coalescing (??)",
        "def": "Operator binar ce returnează operandul stâng dacă nu este null, altfel pe cel drept."
      },
      {
        "term": "Null-Forgiving (!)",
        "def": "Operator postfixat ce indică compilatorului că o expresie nu este null (asumpție asumată de dezvoltator)."
      }
    ],
    "matchingPairs": [
      {
        "left": "user?.Profile?.Bio",
        "right": "Acces înlănțuit protejat împotriva NullReference"
      },
      {
        "left": "name ?? \"Necunoscut\"",
        "right": "Valoare fallback dacă name este null"
      },
      {
        "left": "cache ??= new Dictionary()",
        "right": "Inițializare leneșă doar dacă variabila este null"
      },
      {
        "left": "string? email",
        "right": "Variabilă declarată explicit ca putând fi null"
      }
    ],
    "quiz": {
      "question": "Ce face expresia 'var name = user?.Name ?? \"Anonim\";'?",
      "options": [
        "Dacă user sau user.Name este null, variabila 'name' primește valoarea 'Anonim'.",
        "Aruncă o excepție dacă utilizatorul nu este autentificat în baza de date.",
        "Setează user.Name la valoarea 'Anonim' pe serverul de producție.",
        "Șterge obiectul user din memoria RAM."
      ],
      "correctIndex": 0,
      "explanation": "Operatorul ?. previne aruncarea erorii dacă user este null, iar ?? atribuie valoarea de rezervă 'Anonim' dacă rezultatul din stânga este null."
    },
    "task": "Atribuie variabilei 'displayName' valoarea 'user?.Name' sau fallback-ul '\"Guest\"' folosind operatorul '??'.",
    "starterCode": "string displayName = ",
    "expectedOutputPattern": "displayName\\s*=\\s*user\\?\\.Name\\s*\\?\\?\\s*[\"']Guest[\"'];",
    "hint": "Scrie displayName = user?.Name ?? \"Guest\";"
  },
  {
    "id": "cs-new-5",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 5: Proprietăți Moderne: '{ get; init; }' și 'record'",
    "theory": "\n<p>Imutabilitatea este cheia scrierii de sisteme concurente sigure. C# 9+ a introdus <strong>init-only setters</strong> și tipul <strong>record</strong>.</p>\n<h4>1. Proprietăți 'init'</h4>\n<p>Sintaxa <code>public string Id { get; init; }</code> permite setarea valorii DOAR la construirea obiectului (în constructor sau object initializer), devenind complet read-only după aceea.</p>\n<h4>2. Tipul 'record' & Non-Destructive Mutation</h4>\n<p>Un record (<code>public record Person(string Name, int Age);</code>) oferă automat egalitate pe bază de valori (Value Equality), reprezentare textuală formatată și mutație non-distructivă prin expresia <code>with</code>: <code>var adult = child with { Age = 18 };</code>.</p>\n",
    "glossary": [
      {
        "term": "init-only setter",
        "def": "Proprietate ce poate fi modificată doar în timpul instanțierii obiectului."
      },
      {
        "term": "record",
        "def": "Tip de referință cu egalitate structurală bazată pe valori și generare automată de metode boilerplate."
      },
      {
        "term": "with expression",
        "def": "Sintaxă de clonare a unui record cu modificarea selectivă a anumitor proprietăți."
      },
      {
        "term": "Value Equality",
        "def": "Două obiecte diferite în Heap sunt considerate egale dacă toate proprietățile lor au aceleași valori."
      }
    ],
    "matchingPairs": [
      {
        "left": "public record User(int Id)",
        "right": "Creează un record imutabil cu proprietăți automate"
      },
      {
        "left": "public int Age { get; init; }",
        "right": "Proprietate mutabilă doar la instanțiere"
      },
      {
        "left": "var updated = p with { Age = 20 }",
        "right": "Clonare superficială cu modificare non-distructivă"
      },
      {
        "left": "record struct Point(int X, int Y)",
        "right": "Record stocat pe Stack ca tip de valoare"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă compari două instanțe separate de tip 'record' care au exact aceleași valori în câmpuri folosind operatorul '=='?",
      "options": [
        "Operatorul returnează 'true' deoarece record-urile implementează egalitate structurală bazată pe valori.",
        "Returnează 'false' deoarece sunt alocate la adrese diferite în memoria Heap.",
        "Compilatorul C# refuză compilarea cerând implementarea manuală a metodei Equals.",
        "Se produce o excepție de tip InvalidOperationException."
      ],
      "correctIndex": 0,
      "explanation": "Spre deosebire de clasele normale care compară adresele de memorie (referințele), record-urile compară automat valorile proprietăților lor."
    },
    "task": "Declară un record de o singură linie numit 'Customer' cu proprietățile 'string Name' și 'string Email'.",
    "starterCode": "// Declară record Customer\n",
    "expectedOutputPattern": "public\\s+record\\s+Customer\\(string\\s+Name,\\s*string\\s+Email\\);",
    "hint": "Scrie: public record Customer(string Name, string Email);"
  },
  {
    "id": "cs-new-6",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 6: Delegați, 'Func<T>', 'Action<T>' & Expresii Lambda",
    "theory": "\n<p>Un delegat (<code>delegate</code>) este un pointer de funcție sigur din punct de vedere al tipurilor (type-safe), capabil să rețină referințe către metode statice sau de instanță.</p>\n<h4>1. Func și Action</h4>\n<p>În loc să definim delegați personalizați, .NET oferă tipurile generice standard: <code>Action<T1, T2></code> pentru metode care returnează <code>void</code>, și <code>Func<T1, TResult></code> unde ultimul parametru generic este întotdeauna tipul returnat.</p>\n<h4>2. Expresii Lambda</h4>\n<p>Sintaxa cu săgeată <code>(x, y) => x + y</code> construiește funcții anonime concise care pot captura variabile din scope-ul părinte (closures).</p>\n",
    "glossary": [
      {
        "term": "Action<T>",
        "def": "Delegat generic standard care execută o operație fără a returna vreo valoare (void)."
      },
      {
        "term": "Func<T, TResult>",
        "def": "Delegat generic standard care acceptă parametri și returnează obligatoriu o valoare de tipul TResult."
      },
      {
        "term": "Lambda Expression",
        "def": "Sintaxă compactă (params) => body pentru declararea funcțiilor anonime inline."
      },
      {
        "term": "Predicate<T>",
        "def": "Delegat echivalent cu Func<T, bool>, utilizat frecvent în operațiuni de filtrare."
      }
    ],
    "matchingPairs": [
      {
        "left": "Func<int, int, int>",
        "right": "Primește doi întregi și returnează un întreg"
      },
      {
        "left": "Action<string>",
        "right": "Primește un string și returnează void"
      },
      {
        "left": "Predicate<int>",
        "right": "Primește un întreg și returnează bool"
      },
      {
        "left": "(a, b) => a * b",
        "right": "Expresie lambda ce multiplică două valori"
      }
    ],
    "quiz": {
      "question": "Care este semnătura delegatului 'Func<string, int>'?",
      "options": [
        "O metodă care primește un argument de tip string și returnează un int.",
        "O metodă care primește un argument de tip int și returnează un string.",
        "O metodă care primește doi parametri: un string și un int, returnând void.",
        "O funcție care nu primește niciun argument și returnează un string."
      ],
      "correctIndex": 0,
      "explanation": "În convenția .NET pentru Func<...>, ultimul tip generic specificat este întotdeauna valoarea de retur; tipurile anterioare sunt parametrii de intrare."
    },
    "task": "Declară un delegat 'Func<int, int, int>' numit 'multiplier' care multiplică cei doi parametri folosind o expresie lambda '(a, b) => a * b'.",
    "starterCode": "Func<int, int, int> multiplier = ",
    "expectedOutputPattern": "Func<int,\\s*int,\\s*int>\\s+multiplier\\s*=\\s*\\(a,\\s*b\\)\\s*=>\\s*a\\s*\\*\\s*b;",
    "hint": "Scrie: (a, b) => a * b;"
  },
  {
    "id": "cs-new-7",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 7: LINQ — Language Integrated Query & Evaluare Leneșă",
    "theory": "\n<p><strong>LINQ</strong> integrează capabilități de interogare direct în limbajul C#. Metodele de extensie din <code>System.Linq</code> operează pe colecții <code>IEnumerable<T></code>.</p>\n<h4>1. Evaluare Leneșă (Deferred Execution)</h4>\n<p>Metode precum <code>Where</code> și <code>Select</code> NU execută filtrarea în momentul apelării. Interogarea este evaluată doar când colecția este iterată efectiv (într-o buclă <code>foreach</code> sau prin apelul <code>ToList()</code> / <code>ToArray()</code>).</p>\n<h4>2. Agregare & Căutare</h4>\n<p>Metodele <code>Any()</code> și <code>All()</code> verifică condiții booleene scurtcircuitând evaluarea. <code>FirstOrDefault(predicate)</code> returnează primul element ce satisface condiția sau valoarea implicită (<code>null</code> pentru clase).</p>\n",
    "glossary": [
      {
        "term": "LINQ",
        "def": "'Language Integrated Query' - set de unelte pentru interogarea uniformă a colecțiilor și bazelor de date."
      },
      {
        "term": "Deferred Execution",
        "def": "Amânarea execuției interogării până când rezultatele sunt iterate efectiv."
      },
      {
        "term": "ToList()",
        "def": "Forțează executarea imediată a interogării LINQ și materializează rezultatele într-o List<T>."
      },
      {
        "term": "SelectMany()",
        "def": "Aplatizează o secvență de colecții într-o singură secvență continuă."
      }
    ],
    "matchingPairs": [
      {
        "left": "numbers.Where(x => x > 10)",
        "right": "Filtrează elementele fără a le materializa imediat"
      },
      {
        "left": "users.Select(u => u.Email)",
        "right": "Proiectează doar proprietatea Email"
      },
      {
        "left": "items.OrderByDescending(x => x.Price)",
        "right": "Sortează elementele descrescător"
      },
      {
        "left": "list.FirstOrDefault(x => x.Id == 5)",
        "right": "Găsește elementul sau returnează null"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă că o interogare 'var query = users.Where(u => u.IsActive);' are execuție amânată (deferred execution)?",
      "options": [
        "Codul de filtrare nu rulează la atribuirea variabilei, ci abia când 'query' este iterat cu foreach sau ToList().",
        "Interogarea este trimisă pe un server extern din cloud cu o întârziere de 5 secunde.",
        "LINQ rulează interogarea doar dacă procesorul are mai puțin de 50% încărcare.",
        "Filtrarea este anulată automat dacă lista are mai mult de 100 de elemente."
      ],
      "correctIndex": 0,
      "explanation": "LINQ construiește doar un arbore de iterație; evaluarea efectivă are loc abia când se solicită primul element prin iterație sau materializare explicită."
    },
    "task": "Filtrează colecția 'users' selectând doar utilizatorii cu 'u.Age >= 18' și materializează rezultatul cu '.ToList()'.",
    "starterCode": "var adults = users.",
    "expectedOutputPattern": "adults\\s*=\\s*users\\.Where\\(u\\s*=>\\s*u\\.Age\\s*>=\\s*18\\)\\.ToList\\(\\);",
    "hint": "Apelează .Where(u => u.Age >= 18).ToList();"
  },
  {
    "id": "cs-new-8",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 8: Programare Asincronă: 'async', 'await' & 'Task'",
    "theory": "\n<p>Modelul <strong>TAP</strong> (Task-based Asynchronous Pattern) din .NET folosește <code>async</code> și <code>await</code> pentru a elibera thread-urile din ThreadPool în timpul operațiunilor de I/O blocante (rețea, disc, apeluri SQL).</p>\n<h4>1. Cum Funcționează State Machine-ul C#</h4>\n<p>La compilare, o metodă <code>async</code> este transformată de compilatorul Roslyn într-o mașină de stări (State Machine). Când se ajunge la <code>await task</code>, execuția metodei este suspendată, iar firul de execuție curent se întoarce în ThreadPool pentru a servi alte cereri HTTP.</p>\n<h4>2. 'ValueTask<T>' pentru Evitarea Alocărilor</h4>\n<p>În timp ce <code>Task<T></code> este o clasă alocată pe Heap, <code>ValueTask<T></code> este o structură alocată pe Stack, ideală pentru metode asincrone care returnează frecvent rezultate din cache sincron fără alocare de memorie.</p>\n",
    "glossary": [
      {
        "term": "Task<T>",
        "def": "Promisiune asincronă reprezentând o operație în derulare ce va produce un rezultat T."
      },
      {
        "term": "ThreadPool",
        "def": "Set administrat de fire de execuție reutilizabile din sistemul de operare gestionate de CLR."
      },
      {
        "term": "ValueTask<T>",
        "def": "Structură de tip valoare ce evită alocarea pe Heap când rezultatul asincron este deja disponibil."
      },
      {
        "term": "ConfigureAwait(false)",
        "def": "Instrucțiune ce specifică că continuarea metodei nu necesită sincronizarea cu contextul original."
      }
    ],
    "matchingPairs": [
      {
        "left": "await httpClient.GetStringAsync()",
        "right": "Eliberează thread-ul pe durata descărcării rețelei"
      },
      {
        "left": "Task.WhenAll(t1, t2)",
        "right": "Așteaptă finalizarea tuturor task-urilor asincrone"
      },
      {
        "left": "async Task<int>",
        "right": "Metodă asincronă ce va returna o valoare întreagă"
      },
      {
        "left": "ValueTask<T>",
        "right": "Optimizare zero-allocation pentru rezultate sincronizate din cache"
      }
    ],
    "quiz": {
      "question": "De ce este considerată o practică periculoasă utilizarea apelului sincron '.Result' sau '.Wait()' pe un Task în loc de 'await'?",
      "options": [
        "Blochează thread-ul apelant și poate conduce la fenomenul de Deadlock sau ThreadPool Starvation.",
        "Șterge automat variabilele din baza de date a serverului.",
        "Provoacă o eroare de sintaxă la compilare în C# 12.",
        "Dezactivează conexiunea la internet a serverului."
      ],
      "correctIndex": 0,
      "explanation": "Apelul .Result blochează synchron firul de execuție curent. Dacă firul așteaptă un context de sincronizare ocupat, aplicația intră în Deadlock sau epuizează firele din ThreadPool."
    },
    "task": "Scrie antetul unei metode asincrone publice 'async Task<string> FetchDataAsync()' care returnează 'await client.GetStringAsync(url);'.",
    "starterCode": "// Completează metoda asincronă\n",
    "expectedOutputPattern": "public\\s+async\\s+Task<string>\\s+FetchDataAsync\\(\\)\\s*\\{\\s*return\\s+await\\s+client\\.GetStringAsync\\(url\\);\\s*\\}",
    "hint": "Scrie public async Task<string> FetchDataAsync() { return await client.GetStringAsync(url); }"
  },
  {
    "id": "cs-new-9",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 9: Dependency Injection (DI) & Cicluri de Viață în .NET",
    "theory": "\n<p>Containerul IoC (Inversion of Control) integrat în .NET Core gestionează instanțierea și rezolvarea automată a dependențelor prin constructor injection.</p>\n<h4>1. Cele Trei Cicluri de Viață (Service Lifetimes)</h4>\n<ul>\n  <li><code>AddTransient</code>: Se creează o instanță nouă la FIECARE solicitare a serviciului.</li>\n  <li><code>AddScoped</code>: Se creează o singură instanță per ciclu de viață de cerere HTTP (per Web Request); ideal pentru DbContext.</li>\n  <li><code>AddSingleton</code>: Se creează o singură instanță unică pe întreaga durată de viață a aplicației.</li>\n</ul>\n<h4>2. Anti-pattern: Captive Dependency</h4>\n<p>Injectarea unui serviciu <em>Scoped</em> într-un <em>Singleton</em> transformă acel serviciu scoped într-un fals singleton, cauzând scurgeri de memorie sau stări concurente corupte în DbContext.</p>\n",
    "glossary": [
      {
        "term": "IoC Container",
        "def": "Sistem arhitectural ce gestionează ciclul de viață și injectarea automată a componentelor software."
      },
      {
        "term": "Transient Lifetime",
        "def": "Instanțiere nouă la fiecare injectare; componente ușoare și complet stateless."
      },
      {
        "term": "Scoped Lifetime",
        "def": "O singură instanță partajată pe durata întregului request HTTP curent."
      },
      {
        "term": "Captive Dependency",
        "def": "Eroare arhitecturală în care un serviciu cu viață scurtă este ținut în viață de un Singleton."
      }
    ],
    "matchingPairs": [
      {
        "left": "builder.Services.AddScoped<IOrderService, OrderService>()",
        "right": "O instanță unică per cerere HTTP"
      },
      {
        "left": "builder.Services.AddSingleton<ICache, MemoryCache>()",
        "right": "O singură instanță globală pe tot serverul"
      },
      {
        "left": "builder.Services.AddTransient<IEmailSender, EmailSender>()",
        "right": "Instanță nouă la fiecare rezolvare"
      },
      {
        "left": "Constructor Injection",
        "right": "Declararea dependențelor ca parametri în constructor"
      }
    ],
    "quiz": {
      "question": "Ce ciclu de viață (lifetime) este recomandat pentru contextul bazei de date (DbContext) în aplicațiile web ASP.NET Core?",
      "options": [
        "Scoped, deoarece trebuie partajat pe durata unui singur request HTTP și distrus la finalul acestuia.",
        "Singleton, pentru a refolosi aceeași conexiune la infinit între toți utilizatorii simultan.",
        "Transient, recreând contextul la fiecare interogare individuală.",
        "Static, stocând entitățile direct în fișiere text."
      ],
      "correctIndex": 0,
      "explanation": "DbContext nu este thread-safe și reține starea modificărilor de entități pentru tranzacția curentă. De aceea, AddScoped este ciclul de viață standard și corect."
    },
    "task": "Înregistrează serviciul 'IUserRepository' cu implementarea 'UserRepository' ca serviciu 'Scoped' pe colecția 'services'.",
    "starterCode": "// Înregistrează serviciul Scoped\nservices.",
    "expectedOutputPattern": "services\\.AddScoped<IUserRepository,\\s*UserRepository>\\(\\);",
    "hint": "Apelează services.AddScoped<IUserRepository, UserRepository>();"
  },
  {
    "id": "cs-new-10",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 10: ASP.NET Core Minimal APIs & Routing de Înaltă Performanță",
    "theory": "\n<p><strong>Minimal APIs</strong> este arhitectura modernă din ASP.NET Core ce permite construirea de microservicii HTTP cu alocări minime de memorie și overhead redus, eliminând controlerele greoaie.</p>\n<h4>1. Rutare Declarativă cu MapGet & MapPost</h4>\n<p>Endpoint-urile sunt mapate direct pe instanța <code>WebApplication</code>: <code>app.MapGet(\"/api/items\", (IRepository repo) => Results.Ok(repo.GetAll()));</code>. Parametrii sunt injectați automat fie din URL, query string, request body sau containerul DI.</p>\n<h4>2. Tipul 'IResult' & Răspunsuri Tipizate</h4>\n<p>Clasa statică <code>Results</code> oferă metode factory standardizate pentru coduri HTTP: <code>Results.Ok()</code> (200), <code>Results.Created()</code> (201), <code>Results.NotFound()</code> (404), <code>Results.ValidationProblem()</code> (400 conform RFC 7807).</p>\n",
    "glossary": [
      {
        "term": "Minimal APIs",
        "def": "Abordare ultra-rapidă pentru crearea de servicii REST fără clase Controller stufoase."
      },
      {
        "term": "Results.Ok(data)",
        "def": "Factory helper ce generează un răspuns HTTP 200 cu corp JSON serializat automat."
      },
      {
        "term": "Route Parameter",
        "def": "Segment dinamic din calea URL (ex: /users/{id}) mapat automat pe argumentul funcției lambda."
      },
      {
        "term": "Model Binding",
        "def": "Mecanism intern ce extrage datele din cererea HTTP și le convertește în obiecte C#."
      }
    ],
    "matchingPairs": [
      {
        "left": "app.MapGet(\"/items/{id}\", (int id) => ...)",
        "right": "Rutează cererile GET extrăgând ID-ul numeric"
      },
      {
        "left": "app.MapPost(\"/items\", (Item item) => ...)",
        "right": "Deserializare automată a corpului JSON din POST"
      },
      {
        "left": "Results.NotFound()",
        "right": "Returnează codul de stare HTTP 404"
      },
      {
        "left": "Results.Created($\"/items/{id}\", item)",
        "right": "Returnează codul HTTP 201 cu header Location"
      }
    ],
    "quiz": {
      "question": "De unde injectează Minimal APIs argumentele specificate în funcția lambda a unui endpoint precum 'app.MapGet(\"/users\", (IUserService service) => ...)'?",
      "options": [
        "Automat din containerul nativ de Dependency Injection al aplicației.",
        "Numai dacă utilizatorul trimite un header HTTP cu numele serviciului.",
        "Dintr-un fișier local XML situat în rădăcina proiectului.",
        "Minimal APIs nu suportă injectarea dependențelor."
      ],
      "correctIndex": 0,
      "explanation": "Motorul de model binding din Minimal APIs recunoaște automat tipurile înregistrate în containerul de DI și le injectează fără adnotări manuale."
    },
    "task": "Definește un endpoint Minimal API pe ruta '/api/ping' folosind 'app.MapGet' care returnează 'Results.Ok(\"pong\")'.",
    "starterCode": "// Înregistrează ruta GET /api/ping\napp.",
    "expectedOutputPattern": "app\\.MapGet\\([\"']/api/ping[\"'],\\s*\\(\\)\\s*=>\\s*Results\\.Ok\\([\"']pong[\"']\\)\\);",
    "hint": "Scrie app.MapGet(\"/api/ping\", () => Results.Ok(\"pong\"));"
  },
  {
    "id": "cs-new-11",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "5. Arhitect / Exemplar",
    "xp": 70,
    "title": "Capitolul 11: Eficiență Extremă de Memorie: 'Span<T>' și 'ReadOnlySpan<T>'",
    "theory": "\n<p>Tradițional, operațiuni de manipulare a șirurilor precum <code>string.Substring()</code> creează noi obiecte pe Heap, încărcând agresiv colectorul de gunoi (GC). <strong>Span&lt;T&gt;</strong> și <strong>ReadOnlySpan&lt;T&gt;</strong> rezolvă această problemă oferind o fereastră de memorie contiguă cu <em>zero alocări</em>.</p>\n<h4>1. Ce este un 'ref struct'?</h4>\n<p><code>Span&lt;T&gt;</code> este un <code>ref struct</code> alocat exclusiv pe Stack. Nu poate fi salvat pe Heap sau în câmpuri de clase obișnuite, garantând performanță la nivelul pointerilor din C fără riscul de dangling pointers.</p>\n<h4>2. Slicing Zero-Copy</h4>\n<p>Apelul <code>span.Slice(start, length)</code> costă $O(1)$ și nu alocă niciun octet în RAM; doar ajustează pointerul și lungimea ferestrei de vizualizare peste memoria existentă.</p>\n",
    "glossary": [
      {
        "term": "Span<T>",
        "def": "Fereastră de memorie de tip ref-struct ce unifică accesul la tablouri, memorie nativă sau Stack fără alocări pe Heap."
      },
      {
        "term": "ref struct",
        "def": "Tip special C# restricționat la stiva de apel (Stack) pentru a preveni colectarea GC."
      },
      {
        "term": "Zero-Allocation",
        "def": "Tehnică de programare de înaltă performanță ce evită alocările de memorie pe Heap."
      },
      {
        "term": "ReadOnlySpan<char>",
        "def": "Înlocuitor de înaltă performanță pentru string în operațiuni de parsare și slicing."
      }
    ],
    "matchingPairs": [
      {
        "left": "ReadOnlySpan<char> span = text.AsSpan()",
        "right": "Creează o vizualizare peste string fără copiere"
      },
      {
        "left": "span.Slice(0, 5)",
        "right": "Slicing în timp O(1) cu zero alocare pe Heap"
      },
      {
        "left": "stackalloc byte[256]",
        "right": "Alocare ultra-rapidă direct pe Stack-ul metodei"
      },
      {
        "left": "ref struct",
        "right": "Structură restricționată strict la memoria Stack"
      }
    ],
    "quiz": {
      "question": "De ce este interzis ca un obiect de tip Span<T> să fie stocat ca atribut într-o clasă obișnuită (class)?",
      "options": [
        "Deoarece este un 'ref struct' care trăiește exclusVal pe Stack; plasarea lui pe Heap ar crea referințe invalide după ieșirea din metodă.",
        "Span<T> este incompatibil cu procesoarele pe 64 de biți.",
        "Compilatorul C# limitează clasele la maxim 4 câmpuri de memorie.",
        "Span<T> poate fi folosit doar în limbajul F#."
      ],
      "correctIndex": 0,
      "explanation": "Span<T> este un ref struct conceput exclusiv pentru Stack. Dacă ar ajunge pe Heap în interiorul unei clase, adresa către datele de pe Stack ar deveni invalidă la întoarcerea din metodă."
    },
    "task": "Convertește stringul 'rawText' într-un 'ReadOnlySpan<char>' folosind metoda de extensie '.AsSpan()'.",
    "starterCode": "string rawText = \"2026-10-15\";\nReadOnlySpan<char> span = ",
    "expectedOutputPattern": "span\\s*=\\s*rawText\\.AsSpan\\(\\);",
    "hint": "Scrie span = rawText.AsSpan();"
  },
  {
    "id": "cs-new-12",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 12: Pattern Matching C# Modern & Switch Expressions",
    "theory": "\n<p>Pattern Matching-ul din C# modern transformă structurile decizionale complexe în expresii declarative concise, sigure la compilare și verificate pentru exhaustivitate.</p>\n<h4>1. Switch Expressions</h4>\n<p>Sintaxa <code>val switch { pattern1 => res1, _ => defaultRes }</code> elimină cuvintele cheie <code>case</code> și <code>break</code>, fiind o expresie care returnează direct o valoare calculată.</p>\n<h4>2. Patterns: Property, Relational & Positional</h4>\n<p>Putem inspecta simultan tipul și proprietățile interne ale unui obiect: <code>Order { Status: \"Paid\", Total: > 1000 } => applyDiscount()</code>, combinând filtre logice cu <code>and</code>, <code>or</code> și <code>not</code>.</p>\n",
    "glossary": [
      {
        "term": "Switch Expression",
        "def": "Expresie compactă ce evaluează un pattern și returnează direct o valoare fără case/break."
      },
      {
        "term": "Discard Pattern (_)",
        "def": "Simbol ce prinde orice valoare neacoperită anterior, echivalentul ramurii 'default'."
      },
      {
        "term": "Property Pattern",
        "def": "Verifică dacă proprietățile unui obiect satisfac anumite valori sau condiții relaționale."
      },
      {
        "term": "Exhaustive Check",
        "def": "Verificare statică a compilatorului ce semnalează dacă au rămas cazuri neacoperite în switch."
      }
    ],
    "matchingPairs": [
      {
        "left": "val switch { ... }",
        "right": "Sintaxa expresiei switch moderne"
      },
      {
        "left": "int n when n > 0",
        "right": "Type pattern cu gardă condițională 'when'"
      },
      {
        "left": "{ IsAdmin: true } => ...",
        "right": "Property pattern verificat direct"
      },
      {
        "left": "_ => \"Necunoscut\"",
        "right": "Discard pattern pentru cazul fallback implicit"
      }
    ],
    "quiz": {
      "question": "Ce rol joacă simbolul '_' (underscore) într-o expresie switch în C# modern?",
      "options": [
        "Este discard pattern-ul care acționează ca un caz 'default' pentru orice valoare neprinsă de ramurile anterioare.",
        "Forțează aruncarea unei excepții dacă expresia este nulă.",
        "Repornește execuția de la prima ramură a switch-ului.",
        "Indică compilatorului să ignore linia respectivă de cod."
      ],
      "correctIndex": 0,
      "explanation": "Simbolul '_' se numește discard pattern și prinde orice valoare, având exact rolul clauzei 'default' din instrucțiunile switch clasice."
    },
    "task": "Scrie o expresie switch care evaluează 'statusCode' returnând '\"OK\"' pentru 200 și '\"Error\"' pentru orice altceva (_).",
    "starterCode": "int statusCode = 200;\nstring message = statusCode switch {\n    // Completează ramurile\n};",
    "expectedOutputPattern": "200\\s*=>\\s*[\"']OK[\"'],\\s*_\\s*=>\\s*[\"']Error[\"']",
    "hint": "Scrie 200 => \"OK\", _ => \"Error\" în interiorul blocului switch."
  },
  {
    "id": "ts-new-1",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Fundamente TypeScript — Adnotări Primitive & 'unknown' vs 'any'",
    "theory": "\n<p>TypeScript adaugă un sistem static de verificare a tipurilor peste JavaScript la momentul compilării (Type Erasure), prevenind erorile înainte ca aplicația să ajungă în producție.</p>\n<h4>1. Tipuri Primitive & 'any'</h4>\n<p>Tipurile de bază sunt <code>number</code>, <code>string</code>, <code>boolean</code>, <code>null</code> și <code>undefined</code>. Folosirea tipului <code>any</code> dezactivează complet verificatorul de tipuri, fiind un anti-pattern.</p>\n<h4>2. Tipul Sigur 'unknown'</h4>\n<p>În contrast cu <code>any</code>, tipul <code>unknown</code> obligă dezvoltatorul să efectueze o verificare de tip (type narrowing) prin <code>typeof</code> sau <code>instanceof</code> înainte de a putea apela orice metodă sau proprietate pe acea valoare.</p>\n",
    "glossary": [
      {
        "term": "Type Erasure",
        "def": "Procesul prin care compilatorul tsc elimină toate adnotările de tipuri, rezultând JavaScript nativ curat."
      },
      {
        "term": "any",
        "def": "Tip ce dezactivează complet verificările de tip; acceptă orice operație fără alertă de eroare."
      },
      {
        "term": "unknown",
        "def": "Tip universal type-safe; impune validarea tipului prin type narrowing înainte de utilizare."
      },
      {
        "term": "Type Inference",
        "def": "Capacitatea compilatorului TypeScript de a deduce automat tipul unei variabile din valoarea inițială."
      }
    ],
    "matchingPairs": [
      {
        "left": "let x: unknown",
        "right": "Valoare cu tip necunoscut ce impune verificare"
      },
      {
        "left": "let x: any",
        "right": "Dezactivează complet sistemul de tipuri"
      },
      {
        "left": "const id: number = 42",
        "right": "Adnotare explicită de număr"
      },
      {
        "left": "typeof val === 'string'",
        "right": "Type guard nativ pentru restrângerea tipului"
      }
    ],
    "quiz": {
      "question": "De ce este recomandat să folosești 'unknown' în loc de 'any' pentru date provenite dintr-un API extern?",
      "options": [
        "Deoarece 'unknown' forțează verificarea tipului înainte de accesare, prevenind crash-uri la runtime.",
        "'unknown' convertește automat răspunsul serverului în fișier binar.",
        "TypeScript refuză compilarea oricărui fișier ce conține cuvântul 'any'.",
        "'unknown' accelerează viteza rețelei cu 30%."
      ],
      "correctIndex": 0,
      "explanation": "'unknown' este type-safe: spre deosebire de 'any', nu poți apela metode pe el sau să-l transmiți altor funcții fără o verificare prealabilă (type narrowing)."
    },
    "task": "Declară o variabilă 'input' de tip 'unknown' și inițializeaz-o cu stringul '\"hello\"'.",
    "starterCode": "// Declară variabila input tipizată cu unknown\n",
    "expectedOutputPattern": "let\\s+input:\\s*unknown\\s*=\\s*[\"']hello[\"'];|const\\s+input:\\s*unknown\\s*=\\s*[\"']hello[\"'];",
    "hint": "Scrie const input: unknown = \"hello\"; (sau let)."
  },
  {
    "id": "ts-new-2",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 2: Interfețe ('interface') vs Type Aliases ('type')",
    "theory": "\n<p>În TypeScript, definirea formei unui obiect (object shape) se poate realiza prin <code>interface</code> sau <code>type</code>.</p>\n<h4>1. Când folosim 'interface'?</h4>\n<p>Interfețele sunt extensibile prin moștenire (<code>interface Admin extends User</code>) și suportă <em>declaration merging</em> (redeschiderea aceleiași interfețe pentru adăugarea de noi câmpuri de către plugin-uri).</p>\n<h4>2. Când folosim 'type'?</h4>\n<p>Type aliases sunt ideale pentru uniuni de tipuri (<code>type Status = 'loading' | 'success' | 'error'</code>), tuple-uri sau primitive compuse, fiind mai flexibile pentru manipulări complexe.</p>\n",
    "glossary": [
      {
        "term": "interface",
        "def": "Definiție de contract structural pentru obiecte, extensibilă prin extends și merging."
      },
      {
        "term": "Type Alias (type)",
        "def": "Nume atribuit oricărui tip (obiect, uniune, primitivă, tuplu)."
      },
      {
        "term": "Declaration Merging",
        "def": "Capacitatea TypeScript de a îmbina automat două declarații cu același nume de interfață."
      },
      {
        "term": "Union Type (|)",
        "def": "Tip ce permite unei valori să fie una din mai multe variante prestabilite."
      }
    ],
    "matchingPairs": [
      {
        "left": "interface User { id: string }",
        "right": "Contract structural extensibil pentru obiecte"
      },
      {
        "left": "type Status = 'ok' | 'fail'",
        "right": "Uniune de valori literale string"
      },
      {
        "left": "interface Admin extends User",
        "right": "Moștenire directă de proprietăți între interfețe"
      },
      {
        "left": "type Point = [number, number]",
        "right": "Definire a unui tuplu cu lungime fixă"
      }
    ],
    "quiz": {
      "question": "Ce caracteristică unică au interfețele ('interface') pe care 'type' nu o suportă în TypeScript?",
      "options": [
        "Declaration merging (posibilitatea de a redeschide și extinde interfața în blocuri separate de cod).",
        "Posibilitatea de a fi rulate în browser fără compilare prin Node.js.",
        "Capacitatea de a stoca valori numerice negative.",
        "Interfețele nu pot avea proprietăți opționale cu semnul întrebării."
      ],
      "correctIndex": 0,
      "explanation": "Dacă declari de două ori o interfață cu același nume în același scope, TypeScript îmbină automat câmpurile lor (declaration merging). 'type' va arunca eroare de identificator duplicat."
    },
    "task": "Definește o interfață 'UserProfile' cu proprietățile obligatorii 'id: number' și 'username: string'.",
    "starterCode": "// Completează interfața UserProfile\n",
    "expectedOutputPattern": "interface\\s+UserProfile\\s*\\{\\s*id:\\s*number;?\\s*username:\\s*string;?\\s*\\}",
    "hint": "Scrie interface UserProfile { id: number; username: string; }"
  },
  {
    "id": "ts-new-3",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 3: Generice Fundamentale în TypeScript ('<T>')",
    "theory": "\n<p>Genericele permit crearea de componente software reutilizabile care funcționează cu o varietate de tipuri fără a sacrifica verificarea statică.</p>\n<h4>1. Funcții Generice</h4>\n<p>Sintaxa <code>function getFirst<T>(items: T[]): T</code> introduce un parametru de tip <code>T</code> care capturează automat tipul de date al argumentului furnizat.</p>\n<h4>2. Constrângeri pe Generice ('extends')</h4>\n<p>Prin sintaxa <code><T extends { id: string }></code>, impunem ca tipul generic să respecte o structură minimă garantată, permițând accesul sigur la proprietatea <code>.id</code> în interiorul funcției.</p>\n",
    "glossary": [
      {
        "term": "Generic (<T>)",
        "def": "Variabilă de tip ce permite abstratizarea logicii peste tipuri de date diferite."
      },
      {
        "term": "Generic Constraint (extends)",
        "def": "Limitare impusă unui tip generic pentru a garanta existența anumitor metode sau atribute."
      },
      {
        "term": "Type Argument Inference",
        "def": "Deducerea automată a tipului generic de către compilator din argumentele de apel."
      },
      {
        "term": "Generic Interface",
        "def": "Interfață ce acceptă parametri de tip (ex: ApiResponse<T>)."
      }
    ],
    "matchingPairs": [
      {
        "left": "function wrap<T>(val: T): T",
        "right": "Păstrează tipul exact al valorii transmise"
      },
      {
        "left": "<T extends HasId>",
        "right": "Constrânge tipul generic să aibă proprietatea cerută"
      },
      {
        "left": "interface ApiResponse<T>",
        "right": "Răspuns API cu payload dinamic tipizat"
      },
      {
        "left": "const list = new Array<string>()",
        "right": "Instanțiere a unei colecții generice de stringuri"
      }
    ],
    "quiz": {
      "question": "De ce este preferabil 'function identity<T>(arg: T): T' față de 'function identity(arg: any): any'?",
      "options": [
        "Păstrează tipul de date exact la returnare, permițând IDE-ului să ofere autocompletare corectă.",
        "Funcțiile generice rulează de două ori mai rapid în motorul V8.",
        "Cu 'any', funcția nu poate primi ca parametru un număr întreg.",
        "Genericele sunt compilate automat în cod C++ nativ."
      ],
      "correctIndex": 0,
      "explanation": "Cu varianta generică <T>, dacă transmiți un 'string', tipul de retur este garantat 'string'. Cu 'any', tipul rezultat se pierde complet."
    },
    "task": "Scrie antetul unei funcții generice 'function wrap<T>(value: T): { data: T }' care returnează obiectul '{ data: value }'.",
    "starterCode": "// Completează funcția generică wrap\n",
    "expectedOutputPattern": "function\\s+wrap<T>\\(value:\\s*T\\):\\s*\\{\\s*data:\\s*T\\s*\\}\\s*\\{\\s*return\\s*\\{\\s*data:\\s*value\\s*\\};?\\s*\\}",
    "hint": "Scrie function wrap<T>(value: T): { data: T } { return { data: value }; }"
  },
  {
    "id": "ts-new-4",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 4: Componente Funcționale React & Tipizarea Props",
    "theory": "\n<p>În React cu TypeScript, componentele moderne sunt funcții pure care primesc proprietăți tipizate (Props) și returnează un element JSX (<code>JSX.Element</code> sau <code>React.ReactNode</code>).</p>\n<h4>1. Tipizarea Props prin Interfețe</h4>\n<p>Se declară o interfață cu proprietățile acceptate: <code>interface ButtonProps { label: string; onClick: () => void; disabled?: boolean; }</code>. Semnul întrebării (<code>?</code>) marchează proprietățile opționale.</p>\n<h4>2. Destructurarea cu Valori Implicite</h4>\n<p>Valorile implicite pentru proprietăți opționale se atribuie idiomatic în semnătura funcției: <code>export function Button({ label, disabled = false }: ButtonProps)</code>.</p>\n",
    "glossary": [
      {
        "term": "Props Interface",
        "def": "Definiție clară a tuturor atributelor pe care o componentă React le poate primi de la părinte."
      },
      {
        "term": "Optional Prop (?)",
        "def": "Proprietate care nu este obligatorie la instanțierea componentei în JSX."
      },
      {
        "term": "React.ReactNode",
        "def": "Tip ce cuprinde orice element randabil în React (JSX, string, număr, null, array)."
      },
      {
        "term": "JSX.Element",
        "def": "Tipul returnat de o componentă React ce reprezintă un nod virtual în Virtual DOM."
      }
    ],
    "matchingPairs": [
      {
        "left": "interface Props { title: string }",
        "right": "Contract de date primit de componentă"
      },
      {
        "left": "disabled?: boolean",
        "right": "Proprietate opțională ce poate fi omisă"
      },
      {
        "left": "children: React.ReactNode",
        "right": "Tipizează conținutul imbricat între etichete JSX"
      },
      {
        "left": "function Card({ title }: Props)",
        "right": "Componentă funcțională cu props destructurate"
      }
    ],
    "quiz": {
      "question": "Ce tip ar trebui să folosești pentru o proprietate 'children' în interfața unei componente container în React?",
      "options": [
        "React.ReactNode (permite text, numere, fragmente sau alte elemente JSX).",
        "string (acceptă doar text simplu fără tag-uri HTML).",
        "any[] (doar matrice de obiecte nespecificate).",
        "boolean (acceptă doar valori adevărat sau fals)."
      ],
      "correctIndex": 0,
      "explanation": "React.ReactNode este tipul standard și complet pentru proprietatea 'children', acoperind toate elementele pe care React le poate afișa în ecran."
    },
    "task": "Definește o componentă funcțională 'Greeting' ce primește '({ name }: { name: string })' și returnează '<h1>{name}</h1>'.",
    "starterCode": "// Definește funcția Greeting\n",
    "expectedOutputPattern": "function\\s+Greeting\\(\\s*\\{\\s*name\\s*\\}:\\s*\\{\\s*name:\\s*string\\s*\\}\\s*\\)\\s*\\{\\s*return\\s+<h1>\\{name\\}</h1>;?\\s*\\}",
    "hint": "Scrie function Greeting({ name }: { name: string }) { return <h1>{name}</h1>; }"
  },
  {
    "id": "ts-new-5",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "2. Junior",
    "xp": 45,
    "title": "Capitolul 5: Hook-ul 'useState' Tipizat & Actualizări Funcționale",
    "theory": "\n<p>Hook-ul <code>useState</code> gestionează starea internă a unei componente. Pentru stări primitive simple, TypeScript deduce automat tipul (ex: <code>useState(0)</code> deduce <code>number</code>).</p>\n<h4>1. Generice Explicite pentru Tipuri Complexe</h4>\n<p>Când starea inițială este <code>null</code> sau un obiect complex, trebuie să specificăm tipul generic: <code>const [user, setUser] = useState<User | null>(null);</code>.</p>\n<h4>2. Actualizări Funcționale</h4>\n<p>Când noua stare depinde de starea anterioară, transmitem o funcție pură către updater: <code>setCount(prev => prev + 1)</code>, prevenind race conditions cauzate de batching-ul asincron din React.</p>\n",
    "glossary": [
      {
        "term": "useState<T>",
        "def": "Hook React ce declară o variabilă de stare locală cu tip static garantat T."
      },
      {
        "term": "Functional Update",
        "def": "Actualizarea stării prin transmiterea unui callback (prev => next) pentru a evita stări învechite."
      },
      {
        "term": "State Batching",
        "def": "Optimizare React ce grupează multiple modificări de stare într-o singură randare."
      },
      {
        "term": "Nullable State",
        "def": "Stare inițializată cu null înainte de finalizarea încărcării datelor prin rețea."
      }
    ],
    "matchingPairs": [
      {
        "left": "useState<User | null>(null)",
        "right": "Stare complexă ce pornește goală"
      },
      {
        "left": "setCount(prev => prev + 1)",
        "right": "Actualizare sigură pe baza stării anterioare"
      },
      {
        "left": "useState<string[]>([])",
        "right": "Stare inițializată cu o listă goală de stringuri"
      },
      {
        "left": "const [val, setVal] = useState(false)",
        "right": "Inferență automată a tipului boolean"
      }
    ],
    "quiz": {
      "question": "De ce este preferabil să folosești 'setCount(prev => prev + 1)' în loc de 'setCount(count + 1)' când modifici un contor?",
      "options": [
        "Garantează utilizarea celei mai recente valori a stării chiar dacă apelurile sunt grupate (batched) asincron de React.",
        "Evită re-randarea completă a paginii web.",
        "Transformă variabila 'count' într-un număr pe 128 de biți.",
        "Previne apariția erorilor de conexiune la internet."
      ],
      "correctIndex": 0,
      "explanation": "Forma funcțională garantează că primești valoarea exactă calculată de actualizările anterioare din coadă, prevenind 'stale closures'."
    },
    "task": "Inițializează o stare numită 'query' cu valoarea inițială '\"\"' specificând tipul generic '<string>' pe 'useState'.",
    "starterCode": "const [query, setQuery] = ",
    "expectedOutputPattern": "const\\s*\\[query,\\s*setQuery\\]\\s*=\\s*useState<string>\\([\"'][\"']\\);",
    "hint": "Scrie useState<string>(\"\");"
  },
  {
    "id": "ts-new-6",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 6: Hook-ul 'useEffect' & Managementul Efectelor Laterale",
    "theory": "\n<p>Hook-ul <code>useEffect</code> gestionează efecte secundare (side effects): sincronizări cu serverul, abonamente la WebSockets sau manipulări directe de timere.</p>\n<h4>1. Tabloul de Dependințe</h4>\n<p>Un tablou gol (<code>[]</code>) execută efectul o singură dată la montare (mount). Includerea variabilelor (<code>[userId]</code>) re-execută efectul doar dacă valorile s-au modificat.</p>\n<h4>2. Funcția de Cleanup (Curățare)</h4>\n<p>Dacă efectul returnează o funcție, React o execută înainte de demontarea componentei sau înainte de următoarea re-rulare a efectului, prevenind scurgerile de memorie (ex: <code>clearInterval</code> sau <code>abort()</code> pe un controller de rețea).</p>\n",
    "glossary": [
      {
        "term": "useEffect",
        "def": "Hook ce execută cod după finalizarea ciclului de randare pe ecran."
      },
      {
        "term": "Dependency Array",
        "def": "Listă de variabile urmărite de React pentru a decide dacă efectul trebuie redeclanșat."
      },
      {
        "term": "Cleanup Function",
        "def": "Funcție returnată din useEffect pentru a anula abonamente, timere sau request-uri active."
      },
      {
        "term": "Stale Closure",
        "def": "Efect secundar care capturează variabile cu valori învechite din cauza lipsei din lista de dependențe."
      }
    ],
    "matchingPairs": [
      {
        "left": "useEffect(() => {}, [])",
        "right": "Rulează o singură dată la montarea componentei"
      },
      {
        "left": "return () => clearInterval(id)",
        "right": "Curăță timerul la demontare sau re-randare"
      },
      {
        "left": "[searchTerm]",
        "right": "Declanșează efectul doar la schimbarea termenului"
      },
      {
        "left": "AbortController",
        "right": "Anulează cererea fetch activă în cleanup"
      }
    ],
    "quiz": {
      "question": "Când apelează React funcția de curățare (cleanup) returnată de un useEffect?",
      "options": [
        "Înainte ca efectul să ruleze din nou și la demontarea (unmount) definitivă a componentei.",
        "Imediat înainte ca utilizatorul să dea refresh paginii în browser.",
        "Doar dacă serverul returnează codul HTTP 500.",
        "Exact la fiecare secundă prin intermediul unui timer intern."
      ],
      "correctIndex": 0,
      "explanation": "Funcția de curățare este executată de React pentru a anula starea efectului precedent înainte de o nouă execuție și la distrugerea componentei din DOM."
    },
    "task": "Scrie un useEffect cu array de dependențe gol '[]' care apelează 'fetchData();'.",
    "starterCode": "// Completează useEffect-ul\n",
    "expectedOutputPattern": "useEffect\\(\\(\\)\\s*=>\\s*\\{\\s*fetchData\\(\\);?\\s*\\},\\s*\\[\\]\\);",
    "hint": "Scrie useEffect(() => { fetchData(); }, []);"
  },
  {
    "id": "ts-new-7",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 7: Hook-ul 'useRef' — Referințe DOM & Valori Mutabile Fără Re-randare",
    "theory": "\n<p>Hook-ul <code>useRef</code> returnează un obiect mutabil <code>{ current: initialValue }</code> a cărui proprietate persistă pe întreaga durată de viață a componentei.</p>\n<h4>1. Acces Direct la Elemente DOM</h4>\n<p>Pentru a focaliza un input sau a măsura un element, tipizăm referința cu elementul HTML corespunzător: <code>const inputRef = useRef<HTMLInputElement>(null);</code>. În JSX, legăm elementul prin <code><input ref={inputRef} /></code>.</p>\n<h4>2. Păstrarea Datelor Fără Re-randare</h4>\n<p>Modificarea lui <code>ref.current = newValue</code> NU declanșează o nouă randare React, fiind ideal pentru stocarea ID-urilor de timere sau flag-uri interne.</p>\n",
    "glossary": [
      {
        "term": "useRef<T>",
        "def": "Hook ce păstrează o valoare mutabilă persistentă sau o referință către un nod real din DOM."
      },
      {
        "term": "HTMLInputElement",
        "def": "Interfață DOM TypeScript ce descrie proprietățile native ale unei etichete <input>."
      },
      {
        "term": "ref.current",
        "def": "Proprietatea mutabilă unică ce conține valoarea stocată în ref."
      },
      {
        "term": "Non-rendering State",
        "def": "Date a căror modificare nu trebuie să reflecte schimbări vizuale în UI."
      }
    ],
    "matchingPairs": [
      {
        "left": "useRef<HTMLInputElement>(null)",
        "right": "Referință tipizată pentru un câmp de input text"
      },
      {
        "left": "inputRef.current?.focus()",
        "right": "Focalizează elementul folosind optional chaining"
      },
      {
        "left": "timerRef.current = setInterval(...)",
        "right": "Stochează ID-ul timerului fără a re-randa ecranul"
      },
      {
        "left": "<div ref={containerRef}>",
        "right": "Leagă nodul DOM real de obiectul ref"
      }
    ],
    "quiz": {
      "question": "Ce diferențiază în mod esențial 'useRef' de 'useState' în React?",
      "options": [
        "Modificarea proprietății 'ref.current' nu provoacă re-randarea componentei în UI.",
        "useRef poate stoca doar șiruri de caractere criptate.",
        "useState este compatibil doar cu browserele Google Chrome.",
        "useRef șterge automat valoarea din memorie după 5 secunde."
      ],
      "correctIndex": 0,
      "explanation": "Spre deosebire de modificarea stării prin useState care declanșează un nou ciclu de randare, asignarea unei valori pe ref.current este silențioasă pentru motorul de randare."
    },
    "task": "Declară o referință 'inputRef' tipizată pentru 'HTMLInputElement' inițializată cu 'null' folosind 'useRef'.",
    "starterCode": "const inputRef = ",
    "expectedOutputPattern": "const\\s+inputRef\\s*=\\s*useRef<HTMLInputElement>\\(null\\);",
    "hint": "Scrie const inputRef = useRef<HTMLInputElement>(null);"
  },
  {
    "id": "ts-new-8",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 8: Tipizarea Evenimentelor React ('SyntheticEvent')",
    "theory": "\n<p>React folosește un sistem de evenimente sintetice (<code>SyntheticEvent</code>) care normalizează comportamentul evenimentelor native de browser între diferite platforme.</p>\n<h4>1. Tipuri de Evenimente Comune</h4>\n<ul>\n  <li><code>React.MouseEvent<HTMLButtonElement></code> pentru evenimente de click pe butoane.</li>\n  <li><code>React.ChangeEvent<HTMLInputElement></code> pentru modificarea textului din input-uri.</li>\n  <li><code>React.FormEvent<HTMLFormElement></code> pentru trimiterea formularelor cu <code>e.preventDefault()</code>.</li>\n</ul>\n<h4>2. Accesul Type-Safe la 'e.target.value'</h4>\n<p>Prin specificarea elementului generic <code>ChangeEvent<HTMLInputElement></code>, TypeScript știe garantat că <code>e.target.value</code> este de tip <code>string</code>, oferind autocompletare și eliminând erorile.</p>\n",
    "glossary": [
      {
        "term": "SyntheticEvent",
        "def": "Wrapper React peste evenimentul nativ al browserului cu compatibilitate cross-browser."
      },
      {
        "term": "ChangeEvent<T>",
        "def": "Eveniment declanșat la modificarea valorii unui element de formular de tipul T."
      },
      {
        "term": "FormEvent<T>",
        "def": "Eveniment asociat acțiunilor pe formulare (ex: onSubmit)."
      },
      {
        "term": "e.preventDefault()",
        "def": "Metodă ce anulează comportamentul implicit al browserului (ex: reîncărcarea paginii la submit)."
      }
    ],
    "matchingPairs": [
      {
        "left": "React.ChangeEvent<HTMLInputElement>",
        "right": "Eveniment tipizat de tastare într-un input"
      },
      {
        "left": "React.FormEvent<HTMLFormElement>",
        "right": "Eveniment tipizat de trimitere a formularului"
      },
      {
        "left": "React.MouseEvent<HTMLButtonElement>",
        "right": "Eveniment tipizat de click pe buton"
      },
      {
        "left": "e.preventDefault()",
        "right": "Oprește reîncărcarea automată a paginii web"
      }
    ],
    "quiz": {
      "question": "Ce tip de date are parametrul 'e' într-o funcție handler care primește evenimentul 'onChange' al unui element <input> în React cu TypeScript?",
      "options": [
        "React.ChangeEvent<HTMLInputElement>",
        "EventTarget",
        "HTMLDocumentEvent",
        "MouseEvent"
      ],
      "correctIndex": 0,
      "explanation": "Tipul specific React pentru onChange pe un input este React.ChangeEvent<HTMLInputElement>, asigurând acces valid la e.target.value."
    },
    "task": "Definește o funcție 'handleChange' ce primește parametrul 'e: React.ChangeEvent<HTMLInputElement>' și apelează 'setValue(e.target.value);'.",
    "starterCode": "const handleChange = ",
    "expectedOutputPattern": "const\\s+handleChange\\s*=\\s*\\(e:\\s*React\\.ChangeEvent<HTMLInputElement>\\)\\s*=>\\s*\\{\\s*setValue\\(e\\.target\\.value\\);?\\s*\\};?",
    "hint": "Scrie (e: React.ChangeEvent<HTMLInputElement>) => { setValue(e.target.value); };"
  },
  {
    "id": "ts-new-9",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 9: Optimizare Performanță: 'useMemo' & 'useCallback'",
    "theory": "\n<p>În React, fiecare re-randare a unei componente recreează toate funcțiile și recalculază toate valorile declarate în corpul său. Când aceste funcții sunt transmise ca props către componente optimizate, ele provoacă re-randări inutile.</p>\n<h4>1. 'useCallback' pentru Funcții Stabile</h4>\n<p><code>const handleClick = useCallback(() => doSomething(id), [id]);</code> reține aceeași referință de funcție între randări atâta timp cât dependențele nu se modifică.</p>\n<h4>2. 'useMemo' pentru Calcule Costisitoare</h4>\n<p><code>const sortedList = useMemo(() => expensiveSort(items), [items]);</code> memorează rezultatul unui calcul greu $O(n \\log n)$, re-evaluându-l doar la modificarea listei <code>items</code>.</p>\n",
    "glossary": [
      {
        "term": "useCallback",
        "def": "Hook ce memorează o instanță de funcție între randări pe baza dependențelor."
      },
      {
        "term": "useMemo",
        "def": "Hook ce memorează rezultatul calculat al unei funcții pentru a preveni recalculări costisitoare."
      },
      {
        "term": "Referential Equality",
        "def": "Verificarea dacă două variabile indică spre exact aceeași adresă de memorie (===)."
      },
      {
        "term": "Memoization",
        "def": "Tehnică de optimizare ce reține rezultatele apelurilor anterioare asociate aceluiași set de intrări."
      }
    ],
    "matchingPairs": [
      {
        "left": "useCallback(fn, [deps])",
        "right": "Păstrează referința identică a funcției"
      },
      {
        "left": "useMemo(() => compute(), [deps])",
        "right": "Stochează rezultatul valoric al calculului"
      },
      {
        "left": "React.memo(Component)",
        "right": "Evită re-randarea dacă props nu s-au schimbat"
      },
      {
        "left": "Expensive Sort / Filter",
        "right": "Caz ideal pentru optimizare prin useMemo"
      }
    ],
    "quiz": {
      "question": "De ce transmiterea unei funcții create inline ca prop 'onClick={() => setCount(c => c + 1)}' către o componentă React.memo poate anula memoizarea acesteia?",
      "options": [
        "O funcție anonimă nouă este creată în memorie la fiecare randare, având o referință diferită (referential equality eșuează).",
        "React.memo nu acceptă funcții ca proprietăți.",
        "Funcțiile inline provoacă întotdeauna o eroare de compilare în TypeScript.",
        "React interzice folosirea săgeții lambda în JSX."
      ],
      "correctIndex": 0,
      "explanation": "O nouă funcție are o adresă nouă de memorie. React.memo compară props prin egalitate superficială (===) și detectează o modificare, re-randând componenta."
    },
    "task": "Memorează o funcție 'handleSave' folosind 'useCallback' care apelează 'save(data);' cu dependența '[data]'.",
    "starterCode": "const handleSave = ",
    "expectedOutputPattern": "const\\s+handleSave\\s*=\\s*useCallback\\(\\(\\)\\s*=>\\s*\\{\\s*save\\(data\\);?\\s*\\},\\s*\\[data\\]\\);",
    "hint": "Scrie useCallback(() => { save(data); }, [data]);"
  },
  {
    "id": "ts-new-10",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 10: TypeScript Utility Types: 'Partial', 'Pick', 'Omit' & 'Record'",
    "theory": "\n<p>TypeScript include un set puternic de tipuri utilitare globale (Utility Types) care permit transformarea și derivarea dinamică a tipurilor existente.</p>\n<h4>1. Partial&lt;T&gt; și Required&lt;T&gt;</h4>\n<p><code>Partial<T></code> transformă toate proprietățile lui T în opționale (ideal pentru operații HTTP PATCH), iar <code>Required<T></code> face toate câmpurile obligatorii.</p>\n<h4>2. Pick&lt;T, K&gt; și Omit&lt;T, K&gt;</h4>\n<p><code>Pick<User, 'id' | 'email'></code> selectează doar proprietățile specificate. <code>Omit<User, 'passwordHash'></code> construiește un tip nou eliminând câmpul sensibil.</p>\n<h4>3. Record&lt;K, V&gt;</h4>\n<p><code>Record<string, number></code> definește un dicționar cu chei de un anumit tip și valori de alt tip.</p>\n",
    "glossary": [
      {
        "term": "Partial<T>",
        "def": "Creează un tip cu toate proprietățile lui T marcate ca opționale (?)."
      },
      {
        "term": "Required<T>",
        "def": "Creează un tip eliminând opționalitatea tuturor proprietăților din T."
      },
      {
        "term": "Pick<T, K>",
        "def": "Construiește un tip selectând doar un subset K de chei din T."
      },
      {
        "term": "Omit<T, K>",
        "def": "Construiește un tip excluzând un subset K de chei din T."
      }
    ],
    "matchingPairs": [
      {
        "left": "Partial<User>",
        "right": "Toate proprietățile devin opționale"
      },
      {
        "left": "Omit<User, 'id'>",
        "right": "Tipul User fără proprietatea 'id'"
      },
      {
        "left": "Pick<User, 'name' | 'email'>",
        "right": "Selectează strict câmpurile 'name' și 'email'"
      },
      {
        "left": "Record<string, User>",
        "right": "Tabelă hash cu chei string și valori User"
      }
    ],
    "quiz": {
      "question": "Ce tip ar trebui folosit pentru argumentul funcției 'function updateUser(id: string, updates: ...)' pentru a permite modificarea oricărui subset de câmpuri din interfața 'User'?",
      "options": [
        "Partial<User>",
        "Required<User>",
        "Record<string, any>",
        "Omit<User, keyof User>"
      ],
      "correctIndex": 0,
      "explanation": "Partial<User> face toate câmpurile din User opționale, permițând transmiterea doar a câmpurilor care trebuie efectiv modificate."
    },
    "task": "Definește un tip 'UserPreview' folosind 'Pick' pentru a extrage doar proprietățile 'id' și 'username' din 'User'.",
    "starterCode": "type UserPreview = ",
    "expectedOutputPattern": "type\\s+UserPreview\\s*=\\s*Pick<User,\\s*[\"']id[\"']\\s*\\|\\s*[\"']username[\"']>;",
    "hint": "Scrie type UserPreview = Pick<User, 'id' | 'username'>;"
  },
  {
    "id": "ts-new-11",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 11: Type Narrowing & Custom Type Guards ('is')",
    "theory": "\n<p>TypeScript realizează analiza fluxului de control (Control Flow Analysis) pentru a restrânge tipul unei variabile în interiorul blocurilor condiționale.</p>\n<h4>1. Predicate de Tip Personalizate ('arg is Type')</h4>\n<p>Când verificările cu <code>typeof</code> sau <code>in</code> nu sunt suficiente pentru obiecte complexe, scriem o funcție <strong>Custom Type Guard</strong> a cărei valoare de retur este de forma <code>pet is Fish</code>.</p>\n<h4>2. Cum Funcționează</h4>\n<p>Dacă funcția returnează <code>true</code>, compilatorul tratează automat variabila ca fiind de tipul <code>Fish</code> pe acea ramură de cod, deblocând accesul la metodele specifice fără type casting periculos.</p>\n",
    "glossary": [
      {
        "term": "Type Guard",
        "def": "Expresie booleană ce efectuează verificarea tipului la runtime pentru a restrânge tipul static."
      },
      {
        "term": "Type Predicate (arg is T)",
        "def": "Semnătură specială de retur a unei funcții ce informează compilatorul despre tipul verificat."
      },
      {
        "term": "Control Flow Analysis",
        "def": "Mecanismul intern al TypeScript prin care tipurile evoluează pe baza structurii condiționale if/else."
      },
      {
        "term": "Discriminated Property ('in')",
        "def": "Operator nativ JavaScript utilizat pentru a verifica prezența unei chei într-un obiect."
      }
    ],
    "matchingPairs": [
      {
        "left": "function isDog(a: Animal): a is Dog",
        "right": "Type predicate personalizat"
      },
      {
        "left": "typeof val === 'number'",
        "right": "Type guard nativ pentru tipuri primitive"
      },
      {
        "left": "item instanceof HTMLElement",
        "right": "Type guard bazat pe prototipul clasei"
      },
      {
        "left": "'swim' in pet",
        "right": "Verificare a existenței metodei pe obiect"
      }
    ],
    "quiz": {
      "question": "Ce efect are semnătura 'function isSuccess(res: ApiResponse): res is SuccessResponse' asupra compilatorului TypeScript?",
      "options": [
        "Dacă funcția returnează true, în blocul condițional respectiv variabila 'res' va fi considerată de tipul SuccessResponse.",
        "Convertește automat răspunsul eșuat într-un succes la nivel de rețea.",
        "Forțează browserul să reîncarce resursa de pe disc.",
        "Dezactivează verificările de tip pe variabila res."
      ],
      "correctIndex": 0,
      "explanation": "Semnătura 'res is SuccessResponse' este un type predicate care garantează compilatorului că pe ramura de 'true' tipul obiectului a fost restrâns la SuccessResponse."
    },
    "task": "Scrie antetul unei funcții type guard 'function isString(val: unknown): val is string' care returnează 'typeof val === \"string\"'.",
    "starterCode": "// Completează funcția type guard\n",
    "expectedOutputPattern": "function\\s+isString\\(val:\\s*unknown\\):\\s*val\\s+is\\s+string\\s*\\{\\s*return\\s+typeof\\s+val\\s*===\\s*[\"']string[\"'];?\\s*\\}",
    "hint": "Scrie function isString(val: unknown): val is string { return typeof val === \"string\"; }"
  },
  {
    "id": "ts-new-12",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "5. Arhitect / Exemplar",
    "xp": 70,
    "title": "Capitolul 12: Discriminated Unions & State Machines în React",
    "theory": "\n<p>Reprezentarea stării cu multiple flag-uri booleene independente (ex: <code>{ isLoading: true, isError: true, data: null }</code>) conduce la stări imposibile (Impossible States). <strong>Discriminated Unions</strong> rezolvă definitiv această problemă.</p>\n<h4>1. Proprietatea Discriminantă</h4>\n<p>Fiecare stare posibilă este un tip distinct ce partajează o proprietate literală comună (de regulă <code>status</code> sau <code>type</code>):</p>\n<pre><code>type State =\n  | { status: 'idle' }\n  | { status: 'loading' }\n  | { status: 'success'; data: User }\n  | { status: 'error'; error: Error };\n</code></pre>\n<h4>2. Exhaustive Checking cu 'never'</h4>\n<p>Într-un <code>switch (state.status)</code>, TypeScript garantează că ai acces la proprietatea <code>.data</code> DOAR în ramura <code>'success'</code>. O ramură <code>default: const _exhaustiveCheck: never = state;</code> asigură erori la compilare dacă uiți să tratezi un caz.</p>\n",
    "glossary": [
      {
        "term": "Discriminated Union",
        "def": "Uniune de tipuri de obiecte ce dețin o proprietate comună cu valoare literală unică."
      },
      {
        "term": "Impossible State",
        "def": "Combinație invalidă de variabile de stare ce nu ar trebui să poată exista în aplicație."
      },
      {
        "term": "Exhaustive Check (never)",
        "def": "Tehnică ce provoacă eroare la compilare dacă o nouă variantă a uniunii nu este tratată în switch."
      },
      {
        "term": "Tagged Union",
        "def": "Denumire alternativă pentru uniunile discriminate pe bază de etichetă literală."
      }
    ],
    "matchingPairs": [
      {
        "left": "status: 'idle' | 'loading'",
        "right": "Proprietate discriminantă cu tipuri literale"
      },
      {
        "left": "const _check: never = state",
        "right": "Garantează tratarea tuturor cazurilor la compilare"
      },
      {
        "left": "state.status === 'success'",
        "right": "Deblochează accesul type-safe la proprietatea .data"
      },
      {
        "left": "Impossible States",
        "right": "Anihilate prin modelarea riguroasă a stărilor"
      }
    ],
    "quiz": {
      "question": "De ce modelarea stării unui request ca Discriminated Union este superioară utilizării a 3 variabile separate 'isLoading', 'error' și 'data'?",
      "options": [
        "Elimină complet stările contradictorii imposibile (cum ar fi isLoading=true simultan cu error=true și data validă).",
        "Permite browserului să descarce fișierele JavaScript de trei ori mai repede.",
        "React nu permite folosirea variabilelor booleene în componente.",
        "Reduce consumul de baterie al dispozitivelor mobile cu 80%."
      ],
      "correctIndex": 0,
      "explanation": "Cu flag-uri separate poți ajunge în stări invalide (ex: și încărcare și eroare simultan). Discriminated union forțează starea să fie exact într-un singur stadiu bine definit."
    },
    "task": "Definește o uniune discriminată 'Action' cu variantele '{ type: \"ADD\"; amount: number }' și '{ type: \"RESET\" }'.",
    "starterCode": "type Action = \n",
    "expectedOutputPattern": "type\\s+Action\\s*=\\s*\\{\\s*type:\\s*[\"']ADD[\"'];?\\s*amount:\\s*number;?\\s*\\}\\s*\\|\\s*\\{\\s*type:\\s*[\"']RESET[\"'];?\\s*\\};?",
    "hint": "Scrie type Action = { type: 'ADD'; amount: number } | { type: 'RESET' };"
  },
  {
    "id": "ts-new-13",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 13: State Management Modern & Tipizat cu Zustand",
    "theory": "\n<p><strong>Zustand</strong> este biblioteca preferată în ecosistemul modern React pentru gestionarea stării globale, eliminând boilerplate-ul Redux și problemele de performanță cauzate de re-randările Context API-ului.</p>\n<h4>1. Crearea unui Store cu 'create'</h4>\n<p>Un store este o funcție hook generată prin <code>create<StoreState>()((set) => ({ ... }))</code>. Starea și acțiunile sunt definite în același loc.</p>\n<h4>2. Selectoare de Performanță</h4>\n<p>Componentele se abonează la felii atomice din stare: <code>const count = useStore(state => state.count);</code>. Componenta se va re-randa EXCLUSIV dacă valoarea selectată s-a modificat prin egalitate strictă, ignorând modificările din restul store-ului.</p>\n",
    "glossary": [
      {
        "term": "Zustand",
        "def": "Soluție minimalistă și rapidă de state management pentru React bazată pe pub/sub fără Context Provider."
      },
      {
        "term": "Atomic Selector",
        "def": "Funcție (state => state.val) ce izolează componenta de re-randările inutile din restul stării globale."
      },
      {
        "term": "set((state) => ({ ... }))",
        "def": "Funcție de mutație ce realizează shallow merge pe obiectul de stare."
      },
      {
        "term": "Store Hook",
        "def": "Hook custom returnat de create() ce poate fi apelat în orice componentă fără wrapping în Provider."
      }
    ],
    "matchingPairs": [
      {
        "left": "create<AppState>()((set) => ...)",
        "right": "Inițializează store-ul global tipizat"
      },
      {
        "left": "useStore(state => state.user)",
        "right": "Selector atomic pentru re-randare optimă"
      },
      {
        "left": "set(state => ({ count: state.count + 1 }))",
        "right": "Actualizează starea prin shallow merge"
      },
      {
        "left": "Fără Provider wrapping",
        "right": "Zustand funcționează independent de arborele React"
      }
    ],
    "quiz": {
      "question": "De ce este recomandat să folosești un selector 'useStore(state => state.items)' în loc de 'const state = useStore()'?",
      "options": [
        "Componenta se va re-randa doar atunci când 'items' se modifică, ignorând modificările altor proprietăți din store.",
        "useStore fără selector aruncă o excepție fatală de tip runtime error.",
        "Selectoarele compilează datele în format binar pentru viteză.",
        "React impune utilizarea selectorilor pentru a respecta standardul W3C."
      ],
      "correctIndex": 0,
      "explanation": "Fără selector, componenta se abonează la întregul obiect de stare și se va re-randa la absolut orice modificare a oricărui câmp din store."
    },
    "task": "Apelează hook-ul 'useAppStore' cu un selector atomic care extrage doar 'state.user'.",
    "starterCode": "const user = ",
    "expectedOutputPattern": "const\\s+user\\s*=\\s*useAppStore\\(state\\s*=>\\s*state\\.user\\);",
    "hint": "Scrie const user = useAppStore(state => state.user);"
  },
  {
    "id": "algo-new-1",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Analiza Complexității Asimptotice & Notația Big O",
    "theory": "\n<p>Notația <strong>Big O</strong> măsoară eficiența teoretică a unui algoritm în cel mai defavorabil scenariu (worst-case scenario), exprimând cum crește consumul de timp sau memorie odată cu mărimea setului de date de intrare ($n$).</p>\n<h4>1. Ierarhia uzuală a ordinelor de complexitate</h4>\n<ul>\n  <li>$O(1)$ — Timp constant (acces la un element de tablou prin index).</li>\n  <li>$O(\\log n)$ — Timp logaritmic (căutarea binară ce înjumătățește spațiul la fiecare pas).</li>\n  <li>$O(n)$ — Timp liniar (parcurgerea simplă a unei liste neordonate).</li>\n  <li>$O(n \\log n)$ — Timp cvasi-liniar (cei mai buni algoritmi de sortare prin comparație: MergeSort).</li>\n  <li>$O(n^2)$ — Timp pătratic (bucle imbricate precum BubbleSort sau selecția naivă).</li>\n</ul>\n<h4>2. Reguli de Simplificare</h4>\n<p>În analiza asimptotică se ignoră constantele multiplicative (ex: $2n \rightarrow O(n)$) și se păstrează doar termenul dominant ($n^2 + 5n + 100 \rightarrow O(n^2)$).</p>\n",
    "glossary": [
      {
        "term": "Big O Notation",
        "def": "Măsură a ratei de creștere a timpului de execuție sau a memoriei necesare în cel mai rău caz."
      },
      {
        "term": "Timp Constant O(1)",
        "def": "Operație a cărei durată nu depinde de mărimea setului de date de intrare."
      },
      {
        "term": "Timp Logaritmic O(log n)",
        "def": "Complexitate ideală unde spațiul de căutare este împărțit la o constantă la fiecare pas."
      },
      {
        "term": "Termen Dominant",
        "def": "Componenta cu cea mai rapidă rată de creștere ce dictează comportamentul la n mare."
      }
    ],
    "matchingPairs": [
      {
        "left": "O(1)",
        "right": "Acces direct la un element dintr-un array prin index"
      },
      {
        "left": "O(log n)",
        "right": "Căutare binară pe un tablou sortat"
      },
      {
        "left": "O(n)",
        "right": "Găsirea elementului maxim printr-o singură parcurgere"
      },
      {
        "left": "O(n^2)",
        "right": "Bucle imbricate pe o matrice n x n"
      }
    ],
    "quiz": {
      "question": "Care este complexitatea asimptotică Big O a unui algoritm cu timpul de rulare calculat ca T(n) = 5n^3 + 12n^2 + 400n + 1000?",
      "options": [
        "O(n^3)",
        "O(n^2)",
        "O(5n^3)",
        "O(n)"
      ],
      "correctIndex": 0,
      "explanation": "Se păstrează exclusiv termenul cu gradul cel mai înalt (n^3) și se elimină coeficienții constanți, rezultând O(n^3)."
    },
    "task": "Returnează stringul 'O(log n)' reprezentând complexitatea temporală a căutării binare pe un tablou sortat.",
    "starterCode": "function getBinarySearchComplexity() {\n    return ",
    "expectedOutputPattern": "return\\s*[\"']O\\(log\\s+n\\)[\"'];?",
    "hint": "Scrie return 'O(log n)';"
  },
  {
    "id": "algo-new-2",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 2: Căutarea Binară ($O(\\log n)$) pe Tablouri Sortate",
    "theory": "\n<p>Dacă un tablou este sortat, căutarea unui element nu necesită inspectarea fiecărei poziții ($O(n)$). <strong>Căutarea binară</strong> compară elementul căutat cu valoarea de la mijlocul intervalului curent.</p>\n<h4>1. Algoritmul</h4>\n<p>Menținem doi pointeri: <code>left = 0</code> și <code>right = n - 1</code>. Calculăm mijlocul protejat împotriva overflow-ului: <code>mid = left + Math.floor((right - left) / 2)</code>.</p>\n<h4>2. Ajustarea Marginilor</h4>\n<p>Dacă valoarea de la mijloc este mai mică decât ținta, căutăm în jumătatea dreaptă (<code>left = mid + 1</code>). Dacă este mai mare, căutăm în stânga (<code>right = mid - 1</code>). Dacă valorile coincid, am găsit indexul.</p>\n",
    "glossary": [
      {
        "term": "Binary Search",
        "def": "Algoritm de căutare în O(log n) ce înjumătățește intervalul de căutare la fiecare pas."
      },
      {
        "term": "Midpoint Calculation",
        "def": "Calculul mid = left + (right - left) / 2 pentru a preveni integer overflow."
      },
      {
        "term": "Precondiție de Sortare",
        "def": "Căutarea binară este validă exclusiv pe colecții deja sortate."
      },
      {
        "term": "Logaritm în Baza 2",
        "def": "Numărul de pași necesari pentru a reduce un număr n la 1 prin divizări repetate la 2."
      }
    ],
    "matchingPairs": [
      {
        "left": "left <= right",
        "right": "Condiția de continuare a căutării binare"
      },
      {
        "left": "target > arr[mid]",
        "right": "Ajustează marginea stângă: left = mid + 1"
      },
      {
        "left": "target < arr[mid]",
        "right": "Ajustează marginea dreaptă: right = mid - 1"
      },
      {
        "left": "left + Math.floor((right - left) / 2)",
        "right": "Calcul de mijloc sigur anti-overflow"
      }
    ],
    "quiz": {
      "question": "Câte comparații maxime sunt necesare în cel mai rău caz pentru a găsi un număr într-un tablou sortat de 1.000.000 de elemente folosind căutarea binară?",
      "options": [
        "Aproximativ 20 de comparații (deoarece 2^20 este peste 1.000.000).",
        "1.000.000 de comparații.",
        "500.000 de comparații.",
        "Exact 100 de comparații."
      ],
      "correctIndex": 0,
      "explanation": "log2(1.000.000) este aproximativ 19.93, ceea ce înseamnă că în cel mult 20 de pași intervalul este redus la un singur element."
    },
    "task": "Scrie calculul variabilei 'mid' folosind formula 'left + Math.floor((right - left) / 2)'.",
    "starterCode": "const mid = ",
    "expectedOutputPattern": "mid\\s*=\\s*left\\s*\\+\\s*Math\\.floor\\(\\s*\\(right\\s*-\\s*left\\)\\s*/\\s*2\\s*\\);?",
    "hint": "Scrie left + Math.floor((right - left) / 2);"
  },
  {
    "id": "algo-new-3",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 3: Liste Simplu Înlanțuite (Singly Linked Lists)",
    "theory": "\n<p>O <strong>listă simplu înlănțuită</strong> este o structură de date liniară în care elementele (nodurile) nu sunt stocate contiguu în memorie, ci fiecare nod conține datele proprii și un pointer către nodul următor (<code>next</code>).</p>\n<h4>1. Inserare $O(1)$ la Început</h4>\n<p>Inserarea unui nod nou la capătul listei (Head) necesită doar setarea <code>newNode.next = head</code> și actualizarea <code>head = newNode</code>, fără a muta celelalte elemente din memorie (spre deosebire de tablouri unde costă $O(n)$).</p>\n<h4>2. Acces Secvențial $O(n)$</h4>\n<p>Deoarece memoria este fragmentată, nu există acces direct prin index (nu putem face <code>list[5]</code>). Găsirea unui element necesită parcurgerea pas cu pas de la <code>head</code>.</p>\n",
    "glossary": [
      {
        "term": "Linked List Node",
        "def": "Obiect individual ce deține valoarea utilă și o referință spre nodul următor (next)."
      },
      {
        "term": "Head Pointer",
        "def": "Referința către primul nod din lista înlănțuită."
      },
      {
        "term": "Null-Termination",
        "def": "Proprietatea ultimului nod din listă de a avea next = null."
      },
      {
        "term": "Inserare O(1)",
        "def": "Adăugarea rapidă a unui nod la începutul listei prin reajustarea a două referințe."
      }
    ],
    "matchingPairs": [
      {
        "left": "newNode.next = head",
        "right": "Leagă nodul nou de primul nod existent"
      },
      {
        "left": "current = current.next",
        "right": "Avansare către următorul nod din listă"
      },
      {
        "left": "current.next === null",
        "right": "Condiție ce indică atingerea ultimului nod"
      },
      {
        "left": "ListNode { val, next }",
        "right": "Structura canonică a unui nod din listă"
      }
    ],
    "quiz": {
      "question": "Care este principalul avantaj al unei liste înlănțuite față de un tablou dinamic (array)?",
      "options": [
        "Inserarea și ștergerea la începutul listei (Head) se execută în timp garantat O(1) fără re-alocarea memoriei.",
        "Accesarea oricărui element arbitrar prin index se execută în timp O(1).",
        "Lista înlănțuită consumă mai puțină memorie RAM per element decât un array simplu.",
        "Listele înlănțuite sunt salvate automat pe hard disk."
      ],
      "correctIndex": 0,
      "explanation": "Inserarea la Head se face în O(1) prin schimbarea a doi pointeri. La un array, toate elementele trebuie mutate la dreapta cu o poziție (O(n))."
    },
    "task": "Scrie o buclă 'while (current !== null)' care parcurge lista avansând cu 'current = current.next;'.",
    "starterCode": "let current = head;\n// Scrie bucla while de parcurgere\n",
    "expectedOutputPattern": "while\\s*\\(current\\s*!==\\s*null\\)\\s*\\{\\s*current\\s*=\\s*current\\.next;?\\s*\\}",
    "hint": "Scrie while (current !== null) { current = current.next; }"
  },
  {
    "id": "algo-new-4",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 4: Stiva (Stack — LIFO) & Validarea Parantezelor",
    "theory": "\n<p>O <strong>stivă (Stack)</strong> funcționează pe principiul <strong>LIFO</strong> (Last-In, First-Out): ultimul element introdus este primul eliminat. Operațiunile de bază sunt <code>push</code> (adăugare) și <code>pop</code> (eliminare), ambele garantate în $O(1)$.</p>\n<h4>1. Aplicația Clasică: Validarea Parantezelor</h4>\n<p>Verificarea dacă un șir de paranteze (<code>()[]{}</code>) este valid se rezolvă optim cu o stivă: când întâlnim o paranteză deschisă o punem pe stivă (<code>push</code>). Când întâlnim una închisă, extragem vârful stivei (<code>pop</code>) și verificăm dacă perechea se potrivește.</p>\n<h4>2. Verificarea Finală</h4>\n<p>Dacă la finalul parcurgerii stiva este complet goală, șirul este perfect echilibrat.</p>\n",
    "glossary": [
      {
        "term": "Stack (LIFO)",
        "def": "'Last In First Out' - structură unde operațiunile se realizează exclusiv la un singur capăt (vârf)."
      },
      {
        "term": "push(val)",
        "def": "Operație O(1) de adăugare a unui nou element în vârful stivei."
      },
      {
        "term": "pop()",
        "def": "Operație O(1) de extragere și eliminare a elementului din vârful stivei."
      },
      {
        "term": "peek() / top()",
        "def": "Inspectarea valorii din vârf fără a o elimina din stivă."
      }
    ],
    "matchingPairs": [
      {
        "left": "stack.push(char)",
        "right": "Adaugă paranteza deschisă pe stivă"
      },
      {
        "left": "const top = stack.pop()",
        "right": "Extrage ultimul element introdus"
      },
      {
        "left": "stack.length === 0",
        "right": "Verifică dacă stiva a rămas complet echilibrată"
      },
      {
        "left": "Call Stack",
        "right": "Stiva internă a procesorului pentru execuția metodelor"
      }
    ],
    "quiz": {
      "question": "Ce condiție indică faptul că șirul de paranteze '([{}])' a fost parsat cu succes și este valid?",
      "options": [
        "Fiecare paranteză închisă s-a potrivit cu vârful extras din stivă, iar la final stiva este complet goală.",
        "Stiva conține exact 6 elemente la finalul algoritmului.",
        "S-a folosit o listă dublu înlănțuită în loc de stivă.",
        "Toate caracterele au fost transformate în litere mari."
      ],
      "correctIndex": 0,
      "explanation": "Validitatea impune ca fiecare pereche să se închidă în ordinea inversă deschiderii, iar la final nicio paranteză să nu fi rămas deschisă (stivă goală)."
    },
    "task": "Verifică dacă un array 'stack' folosit ca stivă este gol returnând 'stack.length === 0'.",
    "starterCode": "function isStackEmpty(stack) {\n    return ",
    "expectedOutputPattern": "return\\s+stack\\.length\\s*===\\s*0;?",
    "hint": "Scrie return stack.length === 0;"
  },
  {
    "id": "algo-new-5",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "2. Junior",
    "xp": 45,
    "title": "Capitolul 5: Tehnica 'Two Pointers' & 'Sliding Window'",
    "theory": "\n<p>Tehnicile <strong>Two Pointers</strong> și <strong>Sliding Window</strong> sunt două dintre cele mai importante metode de optimizare, reducând adesea complexitatea algoritmilor de la $O(n^2)$ la $O(n)$ prin evitarea calculelor redundante.</p>\n<h4>1. Tehnica Two Pointers (Convergență)</h4>\n<p>Pe un tablou sortat, plasăm un pointer la început (<code>left = 0</code>) și unul la sfârșit (<code>right = n - 1</code>). Pentru a găsi două numere cu suma $S$ (Two Sum II), dacă suma curentă este prea mică incrementăm <code>left</code>, dacă este prea mare decrementăm <code>right</code>.</p>\n<h4>2. Tehnica Sliding Window (Fereastră Glisantă)</h4>\n<p>Pentru a găsi suma maximă a unui subșir de lungime fixă $k$, calculăm suma primelor $k$ elemente. La fiecare pas următor, adăugăm noul element intrat în fereastră și îl scădem pe cel care a părăsit fereastra, menținând un cost $O(1)$ per pas.</p>\n",
    "glossary": [
      {
        "term": "Two Pointers",
        "def": "Tehnică ce deplasează doi indici coordonați prin tablou pentru a satisface o condiție în O(n)."
      },
      {
        "term": "Sliding Window",
        "def": "Fereastră de dimensiune variabilă sau fixă ce glisează peste date reutilizând calculele anterioare."
      },
      {
        "term": "Two Sum II",
        "def": "Problemă clasică rezolvată în O(n) timp și O(1) memorie cu doi pointeri pe tablou sortat."
      },
      {
        "term": "Optimizare de la O(n^2) la O(n)",
        "def": "Înlocuirea a două bucle for imbricate printr-o singură trecere inteligentă."
      }
    ],
    "matchingPairs": [
      {
        "left": "left++, right--",
        "right": "Deplasare convergentă a celor doi pointeri"
      },
      {
        "left": "currentSum += arr[i] - arr[i - k]",
        "right": "Actualizarea ferestrei glisante în timp O(1)"
      },
      {
        "left": "left < right",
        "right": "Condiția standard de oprire pentru doi pointeri convergenți"
      },
      {
        "left": "Subșir de sumă maximă",
        "right": "Problemă rezolvată optim prin Sliding Window"
      }
    ],
    "quiz": {
      "question": "De ce este tehnica Sliding Window mai rapidă decât abordarea naivă pentru calculul mediei mobile a fiecărei ferestre de dimensiune k dintr-un array de lungime n?",
      "options": [
        "Nu recalculează suma tuturor celor k elemente la fiecare pas; doar adaugă noul element și scade elementul ieșit din fereastră în O(1).",
        "Sliding Window ordonează array-ul de fiecare dată.",
        "Compilatorul transformă algoritmul într-un apel către o bază de date SQL.",
        "Funcționează doar dacă toate numerele sunt strict pare."
      ],
      "correctIndex": 0,
      "explanation": "Abordarea naivă necesită k operațiuni la fiecare pas (O(n * k)). Sliding Window actualizează suma printr-o adunare și o scădere în O(1), totalizând O(n)."
    },
    "task": "Actualizează 'windowSum' glisând fereastra: adaugă 'arr[i]' și scade 'arr[i - k]'.",
    "starterCode": "windowSum = ",
    "expectedOutputPattern": "windowSum\\s*=\\s*windowSum\\s*\\+\\s*arr\\[i\\]\\s*-\\s*arr\\[i\\s*-\\s*k\\];?|windowSum\\s*\\+=\\s*arr\\[i\\]\\s*-\\s*arr\\[i\\s*-\\s*k\\];?",
    "hint": "Scrie windowSum = windowSum + arr[i] - arr[i - k];"
  },
  {
    "id": "algo-new-6",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 6: Tabele Hash (Hash Maps) & Rezolvarea Coliziunilor",
    "theory": "\n<p>O <strong>tabelă hash (Hash Map)</strong> asociază chei cu valori folosind o funcție hash care transformă cheia într-un index numeric într-un tablou intern (bucket array), oferind căutare, inserare și ștergere în timp mediu $O(1)$.</p>\n<h4>1. Coliziuni Hash</h4>\n<p>Deoarece mulțimea cheilor posibile este infinită, două chei diferite pot produce același index hash (coliziune).</p>\n<h4>2. Strategii de Rezolvare a Coliziunilor</h4>\n<ul>\n  <li><strong>Separate Chaining</strong>: Fiecare bucket este o listă înlănțuită (sau arbore roșu-negru dacă lungimea depășește un prag).</li>\n  <li><strong>Open Addressing</strong> (Linear Probing): Când un bucket este ocupat, algoritmul caută secvențial următorul slot liber din tablou.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Hash Function",
        "def": "Funcție matematică deterministă ce mapează date arbitrare la o valoare întreagă fixă."
      },
      {
        "term": "Collision (Coliziune)",
        "def": "Situația în care două chei distincte generează exact aceeași valoare hash."
      },
      {
        "term": "Separate Chaining",
        "def": "Rezolvarea coliziunilor prin atașarea unei liste înlănțuite la fiecare slot din tabelă."
      },
      {
        "term": "Load Factor",
        "def": "Raportul elemente/capacitate ce dictează când tabela trebuie redimensionată prin rehashing."
      }
    ],
    "matchingPairs": [
      {
        "left": "Separate Chaining",
        "right": "Fiecare bucket conține o listă de noduri cu chei colizionate"
      },
      {
        "left": "Linear Probing",
        "right": "Căutarea următorului slot liber consecutiv în array"
      },
      {
        "left": "Load Factor > 0.75",
        "right": "Declanșează dublarea capacității și rehashing complet"
      },
      {
        "left": "Timp Mediu O(1)",
        "right": "Complexitatea operațiilor de bază într-o tabelă hash sănătoasă"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă cu complexitatea temporală a unei tabele hash dacă funcția hash este defectuoasă și mapează toate cheile în exact același bucket?",
      "options": [
        "Degradează de la O(1) la O(n) (comportament de simplă căutare liniară prin listă).",
        "Crește viteza de acces la O(0.5).",
        "Aruncă o excepție de tip StackOverflowException.",
        "Sistemul de operare oprește execuția programului."
      ],
      "correctIndex": 0,
      "explanation": "Dacă toate intrările ajung în același bucket, tabela hash devine o listă înlănțuită, iar căutarea necesită parcurgerea fiecărui element (O(n))."
    },
    "task": "Calculează indexul hash stocându-l în 'index' folosind formula 'hash(key) % capacity'.",
    "starterCode": "const index = ",
    "expectedOutputPattern": "const\\s+index\\s*=\\s*hash\\(key\\)\\s*%\\s*capacity;?",
    "hint": "Scrie const index = hash(key) % capacity;"
  },
  {
    "id": "algo-new-7",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 7: Algoritmul MergeSort ($O(n \\log n)$ Divide et Impera)",
    "theory": "\n<p><strong>MergeSort</strong> este un algoritm clasic de sortare bazat pe paradigma <strong>Divide et Impera</strong>, oferind performanță garantată $O(n \\log n)$ în cel mai bun, mediu și cel mai defavorabil scenariu.</p>\n<h4>1. Divide, Impera, Combină</h4>\n<ol>\n  <li><strong>Divide</strong>: Împarte tabloul recursiv în două jumătăți egale până când ajunge la tablouri de 1 element (deja sortate).</li>\n  <li><strong>Impera</strong>: Sortează recursiv fiecare jumătate.</li>\n  <li><strong>Combină (Merge)</strong>: Interclasează cele două jumătăți sortate într-un tablou auxiliar comparând elementele cap la cap în timp $O(n)$.</li>\n</ol>\n<h4>2. Stabilitate & Spațiu Auxiliar</h4>\n<p>MergeSort este o sortare <em>stabilă</em> (păstrează ordinea relativă a elementelor egale), dar necesită spațiu de memorie auxiliar $O(n)$ pentru operațiunea de interclasare.</p>\n",
    "glossary": [
      {
        "term": "Divide et Impera",
        "def": "Paradigmată ce descompune o problemă mare în subprobleme similare mai mici până devin triviale."
      },
      {
        "term": "Interclasare (Merge)",
        "def": "Îmbinarea a două tablouri gata sortate într-unul singur în timp liniar O(n)."
      },
      {
        "term": "Sortare Stabilă",
        "def": "Proprietate ce garantează că elementele cu valori identice își păstrează poziția relativă inițială."
      },
      {
        "term": "Memorie Auxiliară O(n)",
        "def": "Spațiul RAM suplimentar necesar pentru stocarea temporară a elementelor interclasate."
      }
    ],
    "matchingPairs": [
      {
        "left": "O(n log n)",
        "right": "Complexitate de timp garantată chiar și în cel mai rău caz"
      },
      {
        "left": "O(n) memorie",
        "right": "Consumul auxiliar de memorie pentru interclasare"
      },
      {
        "left": "Sortare Stabilă",
        "right": "Păstrează ordinea elementelor cu chei identice"
      },
      {
        "left": "left.length <= 1",
        "right": "Cazul de bază ce oprește recursivitatea"
      }
    ],
    "quiz": {
      "question": "Care este principalul dezavantaj al algoritmului MergeSort în comparație cu QuickSort pe tablouri în memorie RAM?",
      "options": [
        "MergeSort necesită memorie auxiliară O(n) pentru tabloul temporar de interclasare, nefiind sortare in-place.",
        "MergeSort are complexitatea O(n^2) în cazul cel mai nefavorabil.",
        "MergeSort nu poate sorta șiruri de caractere.",
        "MergeSort poate rula exclusiv pe sisteme cu mai mult de 64 GB RAM."
      ],
      "correctIndex": 0,
      "explanation": "QuickSort sortează pe loc (in-place) cu memorie suplimentară O(log n) doar pentru stivă, pe când MergeSort clasic cere un buffer separat de dimensiune O(n)."
    },
    "task": "Verifică cazul de bază din MergeSort returnând 'arr' dacă 'arr.length <= 1'.",
    "starterCode": "function mergeSort(arr) {\n    if (arr.length <= 1) return arr;\n    // restul algoritmului\n}",
    "expectedOutputPattern": "if\\s*\\(arr\\.length\\s*<=\\s*1\\)\\s*return\\s+arr;?",
    "hint": "Cazul de bază este: if (arr.length <= 1) return arr;"
  },
  {
    "id": "algo-new-8",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "3. Middle",
    "xp": 55,
    "title": "Capitolul 8: Arbori Binari de Căutare (BST — Binary Search Tree)",
    "theory": "\n<p>Un <strong>Arbore Binar de Căutare (BST)</strong> este o structură ierarhică unde fiecare nod conține cel mult doi copii, respectând invariantul BST:</p>\n<p>Toate valorile din subarborele stâng sunt strict mai mici decât valoarea nodului (<code>left < root</code>), iar toate valorile din subarborele drept sunt strict mai mari (<code>right > root</code>).</p>\n<h4>1. Traversarea Inorder Produce Date Sortate</h4>\n<p>Traversarea <strong>Inorder</strong> (Stânga $\rightarrow$ Rădăcină $\rightarrow$ Dreapta) parcurge elementele unui BST în ordine strict crescătoare în timp $O(n)$.</p>\n<h4>2. Echilibrarea Arborilor</h4>\n<p>Într-un arbore echilibrat (ex: AVL sau Red-Black), înălțimea este $O(\\log n)$, oferind căutare în $O(\\log n)$. Dacă inserăm date deja sortate într-un BST naiv, el degenerează într-o listă simplă de înălțime $O(n)$.</p>\n",
    "glossary": [
      {
        "term": "BST Invariant",
        "def": "Regula fundamentală: subarbore stâng < nod curent < subarbore drept."
      },
      {
        "term": "Inorder Traversal",
        "def": "Parcurgere Stânga -> Rădăcină -> Dreapta ce generează secvența sortată."
      },
      {
        "term": "Arbore Degenerat",
        "def": "BST neechilibrat ce devine o listă de înălțime O(n) cu operații ineficiente."
      },
      {
        "term": "TreeNode { val, left, right }",
        "def": "Nod arborescent cu pointeri către cei doi copii posibili."
      }
    ],
    "matchingPairs": [
      {
        "left": "Inorder (L, Root, R)",
        "right": "Vizitează nodurile în ordine strict crescătoare"
      },
      {
        "left": "Preorder (Root, L, R)",
        "right": "Util pentru clonarea și serializarea arborelui"
      },
      {
        "left": "Postorder (L, R, Root)",
        "right": "Util pentru eliberarea memoriei și calculul dimensiunii"
      },
      {
        "left": "Înălțime O(log n)",
        "right": "Garantată exclusiv în arbori echilibrați (AVL / Red-Black)"
      }
    ],
    "quiz": {
      "question": "Ce tip de traversare a unui Arbore Binar de Căutare (BST) returnează valorile în ordine strict sortată crescător?",
      "options": [
        "Traversarea Inorder (Stânga, Rădăcină, Dreapta).",
        "Traversarea Preorder (Rădăcină, Stânga, Dreapta).",
        "Traversarea Postorder (Stânga, Dreapta, Rădăcină).",
        "Traversarea pe nivele (BFS Level Order)."
      ],
      "correctIndex": 0,
      "explanation": "Datorită invariantului BST (stânga < rădăcină < dreapta), explorarea recursivă Inorder vizitează întotdeauna mai întâi elementele mai mici, apoi nodul curent, apoi cele mai mari."
    },
    "task": "Scrie condiția de căutare recursivă într-un BST: dacă 'val < node.val', caută în 'node.left'.",
    "starterCode": "if (val < node.val) {\n    return searchBST(node.left, val);\n}",
    "expectedOutputPattern": "if\\s*\\(val\\s*<\\s*node\\.val\\)\\s*\\{\\s*return\\s+searchBST\\(node\\.left,\\s*val\\);?\\s*\\}",
    "hint": "Scrie if (val < node.val) { return searchBST(node.left, val); }"
  },
  {
    "id": "algo-new-9",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 9: Parcurgerea Grafurilor: Breadth-First Search (BFS)",
    "theory": "\n<p>Un graf este o colecție de noduri (vârfuri) legate prin muchii. <strong>Breadth-First Search (BFS)</strong> parcurge graful nivel cu nivel, explorând toți vecinii imediați ai nodului de pornire înainte de a trece la nodurile de la distanța 2.</p>\n<h4>1. Utilizarea Cozii (Queue — FIFO)</h4>\n<p>BFS folosește obligatoriu o <strong>coadă (Queue)</strong> pentru a gestiona ordinea de explorare a nodurilor.</p>\n<h4>2. Garanția Celui Mai Scurt Drum</h4>\n<p>Într-un graf <em>neponderat</em> (unde toate muchiile au cost egal), BFS garantează că primul moment în care atinge nodul destinație reprezintă cel mai scurt drum (minim de muchii).</p>\n<h4>3. Setul de Vizitare</h4>\n<p>Pentru a preveni buclele infinite în grafuri cu cicluri, ținem evidența nodurilor explorate într-un set <code>visited</code>.</p>\n",
    "glossary": [
      {
        "term": "BFS (Breadth-First Search)",
        "def": "Algoritm de explorare radială pe niveluri folosind o structură de tip coadă."
      },
      {
        "term": "Adjacency List",
        "def": "Reprezentare optimă O(V + E) a unui graf ca un dicționar de liste de vecini."
      },
      {
        "term": "Visited Set",
        "def": "Tabelă hash de noduri vizitate pentru a preveni ciclurile și procesarea repetată."
      },
      {
        "term": "Cel mai scurt drum neponderat",
        "def": "Garantat de BFS datorită explorării în ordine strict crescătoare a distanțelor."
      }
    ],
    "matchingPairs": [
      {
        "left": "Queue (FIFO)",
        "right": "Structura de date fundamentală pentru implementarea BFS"
      },
      {
        "left": "visited.add(node)",
        "right": "Marchează nodul ca procesat pentru a evita ciclurile"
      },
      {
        "left": "queue.shift()",
        "right": "Extrage următorul nod de la începutul cozii"
      },
      {
        "left": "Graf Neponderat",
        "right": "Domeniu unde BFS găsește garantat drumul minim"
      }
    ],
    "quiz": {
      "question": "Ce structură de date este obligatorie pentru gestionarea nodurilor în algoritmul Breadth-First Search (BFS)?",
      "options": [
        "O Coadă (Queue — FIFO).",
        "O Stivă (Stack — LIFO).",
        "Un Arbore Binar Echilibrat.",
        "Un fișier JSON extern."
      ],
      "correctIndex": 0,
      "explanation": "BFS necesită o Coadă (FIFO) pentru a asigura explorarea nodurilor în ordinea exactă a distanței lor față de sursă (nivel cu nivel)."
    },
    "task": "Extrage primul nod dintr-o coadă 'queue' stocându-l în 'node' folosind 'queue.shift()'.",
    "starterCode": "const node = ",
    "expectedOutputPattern": "const\\s+node\\s*=\\s*queue\\.shift\\(\\);?",
    "hint": "Scrie const node = queue.shift();"
  },
  {
    "id": "algo-new-10",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 10: Parcurgerea Grafurilor: Depth-First Search (DFS) & Detectarea Ciclurilor",
    "theory": "\n<p><strong>Depth-First Search (DFS)</strong> explorează graful mergând cât mai adânc posibil de-a lungul fiecărei ramuri înainte de a face întoarcere (backtracking).</p>\n<h4>1. Implementare Recursivă (Call Stack)</h4>\n<p>Spre deosebire de BFS care cere o coadă, DFS se implementează natural recursiv folosind stiva de apel a sistemului (sau o stivă explicită).</p>\n<h4>2. Detectarea Ciclurilor în Grafuri Orientate</h4>\n<p>Pentru a detecta cicluri într-un graf orientat, clasificăm starea nodurilor în 3 culori:</p>\n<ul>\n  <li><em>Alb (0)</em>: Nevizitat încă.</li>\n  <li><em>Gri (1)</em>: În curs de vizitare (pe Call Stack-ul curent).</li>\n  <li><em>Negru (2)</em>: Vizitat complet și finalizat.</li>\n</ul>\n<p>Dacă în timpul explorării întâlnim un vecin aflat în starea <em>Gri</em>, am găsit o muchie de întoarcere (Back Edge) ce confirmă existența unui ciclu.</p>\n",
    "glossary": [
      {
        "term": "DFS (Depth-First Search)",
        "def": "Algoritm de explorare în adâncime bazat pe recursivitate și backtracking."
      },
      {
        "term": "Backtracking",
        "def": "Revenirea la pasul anterior când o cale explorată a ajuns la capăt sau este invalidă."
      },
      {
        "term": "Back Edge",
        "def": "Muchie ce leagă un nod curent de un strămoș aflat încă activ pe stivă, demonstrând un ciclu."
      },
      {
        "term": "Topological Sort",
        "def": "Ordonare liniară a nodurilor dintr-un graf orientat aciclic (DAG) realizată prin DFS."
      }
    ],
    "matchingPairs": [
      {
        "left": "Call Stack / Recursion",
        "right": "Motorul natural de execuție al algoritmului DFS"
      },
      {
        "left": "Starea Gri (Visiting)",
        "right": "Nod activ pe stiva curentă de apel a recursivității"
      },
      {
        "left": "Graf Orientat Aciclic (DAG)",
        "right": "Condiție obligatorie pentru sortarea topologică"
      },
      {
        "left": "Back Edge detectat",
        "right": "Demonstrează existența unui ciclu în graful orientat"
      }
    ],
    "quiz": {
      "question": "Ce indică faptul că DFS întâlnește un nod aflat în starea 'Gri' (în curs de vizitare pe stivă) într-un graf orientat?",
      "options": [
        "S-a detectat un ciclu în graful orientat.",
        "Graful este complet gol.",
        "S-a găsit cel mai scurt drum dintre două noduri.",
        "Memoria RAM s-a epuizat."
      ],
      "correctIndex": 0,
      "explanation": "Întâlnirea unui nod aflat deja pe stivă înseamnă că există o cale care se întoarce la el însuși, demonstrând existența unui ciclu."
    },
    "task": "Marchează nodul curent 'u' ca fiind în curs de vizitare setând 'visited[u] = 1;'.",
    "starterCode": "// Marchează nodul u ca gri (1)\n",
    "expectedOutputPattern": "visited\\[u\\]\\s*=\\s*1;?",
    "hint": "Scrie visited[u] = 1;"
  },
  {
    "id": "algo-new-11",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "4. Senior",
    "xp": 65,
    "title": "Capitolul 11: Algoritmul lui Dijkstra ($O((V + E) \\log V)$)",
    "theory": "\n<p><strong>Algoritmul lui Dijkstra</strong> rezolvă problema celui mai scurt drum de la o sursă unică către toate celelalte noduri într-un graf ponderat cu costuri <em>strict non-negative</em>.</p>\n<h4>1. Coada cu Priorități (Min-Heap)</h4>\n<p>Algoritmul menține un tablou <code>dist</code> inițializat cu infinit ($\\infty$) și o <strong>coadă cu priorități (Min-Heap)</strong> ce extrage întotdeauna nodul nefinalizat cu distanța minimă curentă în $O(\\log V)$.</p>\n<h4>2. Tehnica Relaxării Muchiilor</h4>\n<p>Pentru fiecare vecin <code>v</code> al nodului curent <code>u</code>, dacă drumul prin <code>u</code> oferă un cost mai mic: <code>if (dist[u] + weight < dist[v])</code>, actualizăm <code>dist[v]</code> și introducem noua pereche în Min-Heap.</p>\n",
    "glossary": [
      {
        "term": "Dijkstra Algorithm",
        "def": "Algoritm Greedy ce găsește distanțele minime într-un graf cu ponderi pozitive în O((V+E) log V)."
      },
      {
        "term": "Relaxare (Edge Relaxation)",
        "def": "Actualizarea distanței către un vecin dacă drumul prin nodul curent este mai scurt."
      },
      {
        "term": "Min-Heap",
        "def": "Structură ce extrage nodul cu costul minim în timp garantat O(log V)."
      },
      {
        "term": "Ponderi Negative",
        "def": "Limitare: Dijkstra eșuează pe ponderi negative; pentru acestea se folosește Bellman-Ford."
      }
    ],
    "matchingPairs": [
      {
        "left": "if (dist[u] + w < dist[v])",
        "right": "Condiția de relaxare a unei muchii în Dijkstra"
      },
      {
        "left": "Min-Heap / PriorityQueue",
        "right": "Extrage nodul optim în timp O(log V)"
      },
      {
        "left": "dist[source] = 0",
        "right": "Inițializarea distanței către nodul de plecare"
      },
      {
        "left": "Ponderi Strict Pozitive",
        "right": "Precondiție obligatorie pentru corectitudinea lui Dijkstra"
      }
    ],
    "quiz": {
      "question": "De ce algoritmul lui Dijkstra nu garantează corectitudinea pe grafuri care conțin muchii cu ponderi negative?",
      "options": [
        "Dijkstra este un algoritm greedy care presupune că odată ce un nod este extras din Min-Heap, distanța lui este definitiv optimă și nu mai poate scădea.",
        "Coada cu priorități refuză să stocheze numere negative.",
        "Ponderile negative pot fi procesate doar pe rețele neuronale.",
        "Dijkstra funcționează exclusiv pe grafuri bipartite."
      ],
      "correctIndex": 0,
      "explanation": "Dijkstra 'finalizează' un nod la extragerea din heap. O muchie negativă ulterioară ar putea reduce distanța unui nod deja finalizat, invalidând ipoteza greedy."
    },
    "task": "Scrie condiția de relaxare: dacă 'dist[u] + weight < dist[v]', actualizează 'dist[v] = dist[u] + weight;'.",
    "starterCode": "// Completează relaxarea\nif (dist[u] + weight < dist[v]) {\n    \n}",
    "expectedOutputPattern": "dist\\[v\\]\\s*=\\s*dist\\[u\\]\\s*\\+\\s*weight;?",
    "hint": "Scrie dist[v] = dist[u] + weight;"
  },
  {
    "id": "algo-new-12",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 12: Programare Dinamică (DP) — Memoization vs Tabulation",
    "theory": "\n<p><strong>Programarea Dinamică (Dynamic Programming — DP)</strong> este o tehnică algoritmică utilizată când o problemă de optimizare prezintă două proprietăți cheie:</p>\n<ol>\n  <li><strong>Substructură Optimă</strong>: Soluția optimă a problemei conține soluțiile optime ale subproblemelor sale.</li>\n  <li><strong>Subprobleme care se Suprapun (Overlapping Subproblems)</strong>: Aceleași subprobleme sunt calculate în mod repetat de nenumărate ori într-o abordare recursivă naivă (ex: arborele exponențial $O(2^n)$ al lui Fibonacci).</li>\n</ol>\n<h4>1. Top-Down cu Memoization</h4>\n<p>Păstrăm structura recursivă naturală a algoritmului, dar salvăm rezultatul fiecărui apel într-un cache (dicționar sau tablou <code>memo</code>). Complexitatea scade de la $O(2^n)$ la $O(n)$.</p>\n<h4>2. Bottom-Up cu Tabulation</h4>\n<p>Eliminăm complet recursivitatea și apelurile pe stivă: construim iterativ soluția într-un tablou <code>dp[]</code> de la cazurile de bază spre soluția finală, obținând viteză superioară și consum optim de memorie.</p>\n",
    "glossary": [
      {
        "term": "Overlapping Subproblems",
        "def": "Proprietate a unei probleme unde aceleași calcule mici sunt necesare de mai multe ori."
      },
      {
        "term": "Optimal Substructure",
        "def": "Capacitatea de a construi soluția globală optimă din soluțiile optime ale subproblemelor."
      },
      {
        "term": "Memoization (Top-Down)",
        "def": "Optimizarea recursivității prin reținerea rezultatelor deja calculate într-un cache."
      },
      {
        "term": "Tabulation (Bottom-Up)",
        "def": "Rezolvarea iterativă a problemelor începând cu stările de bază, fără recursivitate pe stivă."
      }
    ],
    "matchingPairs": [
      {
        "left": "Memoization",
        "right": "Abordare Top-Down recursivă cu stocare în cache"
      },
      {
        "left": "Tabulation",
        "right": "Abordare Bottom-Up iterativă bazată pe tablou dp"
      },
      {
        "left": "dp[i] = dp[i-1] + dp[i-2]",
        "right": "Relația de recurență pentru numerele Fibonacci"
      },
      {
        "left": "Reducere de la O(2^n) la O(n)",
        "right": "Câștigul masiv de eficiență prin eliminarea muncii redundante"
      }
    ],
    "quiz": {
      "question": "Ce două condiții esențiale trebuie să întrunească o problemă computațională pentru a fi rezolvabilă prin Programare Dinamică?",
      "options": [
        "Substructură optimă și subprobleme care se suprapun (overlapping subproblems).",
        "Toate datele să fie sortate descrescător și numerele să fie întregi impare.",
        "Graful să fie complet neorientat și să nu aibă cicluri.",
        "Codul sursă să fie scris obligatoriu în limbajul C++."
      ],
      "correctIndex": 0,
      "explanation": "Doar când problema se descompune în subprobleme recurente identice (overlapping) a căror compunere dă soluția globală optimă (substructură optimă) este aplicabilă Programarea Dinamică."
    },
    "task": "Scrie relația iterativă de recurență pentru calculul Fibonacci în tabloul 'dp': 'dp[i] = dp[i - 1] + dp[i - 2];'.",
    "starterCode": "for (let i = 2; i <= n; i++) {\n    // Completează recurența\n}",
    "expectedOutputPattern": "dp\\[i\\]\\s*=\\s*dp\\[i\\s*-\\s*1\\]\\s*\\+\\s*dp\\[i\\s*-\\s*2\\];?",
    "hint": "Scrie dp[i] = dp[i - 1] + dp[i - 2];"
  },
  {
    "id": "devops-new-1",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Ierarhia Sistemului de Fișiere Linux & Comenzi Bash",
    "theory": "\n<p>În sistemele Unix/Linux, totul este reprezentat ca un fișier (<em>Everything is a file</em>). Structura directoarelor pornește de la rădăcina unică <code>/</code> conform standardului FHS (Filesystem Hierarchy Standard).</p>\n<h4>1. Directoare Esențiale</h4>\n<ul>\n  <li><code>/etc</code> — Fișiere de configurare la nivel de sistem.</li>\n  <li><code>/var/log</code> — Jurnale și loguri generate de servicii.</li>\n  <li><code>/home/user</code> — Spațiul personal al utilizatorului obișnuit.</li>\n  <li><code>/bin</code> și <code>/usr/bin</code> — Binare executabile esențiale.</li>\n</ul>\n<h4>2. Comenzi de Bază</h4>\n<p>Comanda <code>ls -la</code> listează toate fișierele (inclusiv cele ascunse care încep cu punct) alături de permisiuni, proprietar și dimensiune în format detaliat.</p>\n",
    "glossary": [
      {
        "term": "FHS (Filesystem Standard)",
        "def": "Standard ce definește structura și scopul fiecărui director într-un sistem Linux."
      },
      {
        "term": "ls -la",
        "def": "Comandă ce afișează toate fișierele (a = all) în format lung cu permisiuni (l = long)."
      },
      {
        "term": "/etc",
        "def": "Directorul rezervat configurărilor statice ale întregului sistem de operare."
      },
      {
        "term": "Hidden Files (.*)",
        "def": "Fișiere al căror nume începe cu punct, ascunse în mod implicit la listare simplă."
      }
    ],
    "matchingPairs": [
      {
        "left": "ls -la",
        "right": "Listare completă și detaliată a tuturor fișierelor"
      },
      {
        "left": "cd ~",
        "right": "Navigare rapidă către directorul home al utilizatorului"
      },
      {
        "left": "pwd",
        "right": "Afișează calea absolută a directorului curent de lucru"
      },
      {
        "left": "mkdir -p a/b/c",
        "right": "Creează recursiv întreaga structură de directoare"
      }
    ],
    "quiz": {
      "question": "În ce director din sistemul de operare Linux sunt stocate fișierele de configurare ale serviciilor (de exemplu, configurația serverului Nginx sau SSH)?",
      "options": [
        "/etc (de exemplu /etc/nginx sau /etc/ssh)",
        "/home/bin",
        "/var/cache/tmp",
        "/usr/lib/fonts"
      ],
      "correctIndex": 0,
      "explanation": "/etc este directorul standard dedicat fișierelor de configurare pentru toate pachetele și serviciile instalate la nivel de sistem."
    },
    "task": "Scrie comanda Bash care listează toate fișierele (inclusiv cele ascunse) în format lung detaliat: 'ls -la'.",
    "starterCode": "# Listează fișierele detaliat\n",
    "expectedOutputPattern": "ls\\s+-la|ls\\s+-al|ls\\s+-l\\s+-a|ls\\s+-a\\s+-l",
    "hint": "Scrie ls -la."
  },
  {
    "id": "devops-new-2",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 2: Redirecționări de Stream-uri I/O & Mecanismul Pipes ('|')",
    "theory": "\n<p>În Linux, fiecare proces deschide implicit 3 descriptori standard de fișiere:</p>\n<ol>\n  <li><code>0 (stdin)</code>: Fluxul standard de intrare (tastatură).</li>\n  <li><code>1 (stdout)</code>: Fluxul standard de ieșire (consolă).</li>\n  <li><code>2 (stderr)</code>: Fluxul standard pentru erori (consolă).</li>\n</ol>\n<h4>1. Redirecționări</h4>\n<p>Operatorul <code>></code> suprascrie fișierul destinație, iar <code>>></code> adaugă la final (append). Sintaxa <code>2>&1</code> redirecționează erorile (stderr) pe același canal cu stdout.</p>\n<h4>2. Mecanismul Pipes ('|')</h4>\n<p>Operatorul pipe leagă <code>stdout</code> al primei comenzi direct în <code>stdin</code> al celei de-a doua fără a salva date intermediare pe disc: <code>cat access.log | grep \"404\" | wc -l</code>.</p>\n",
    "glossary": [
      {
        "term": "stdout (Descriptor 1)",
        "def": "Canalul de ieșire standard pentru mesajele obișnuite generate de un proces."
      },
      {
        "term": "stderr (Descriptor 2)",
        "def": "Canalul dedicat mesajelor de diagnostic și eroare, separat de stdout."
      },
      {
        "term": "Pipe (|)",
        "def": "Mecanism IPC ce transferă direct ieșirea unei comenzi ca intrare pentru următoarea."
      },
      {
        "term": "Redirecționare (2>&1)",
        "def": "Combinarea fluxului de erori stderr în fluxul standard de ieșire stdout."
      }
    ],
    "matchingPairs": [
      {
        "left": "cmd > file.txt",
        "right": "Suprascrie fișierul cu ieșirea standard a comenzii"
      },
      {
        "left": "cmd >> file.txt",
        "right": "Adaugă ieșirea la sfârșitul fișierului existent"
      },
      {
        "left": "cmd 2> error.log",
        "right": "Izolează doar mesajele de eroare (stderr) într-un fișier"
      },
      {
        "left": "cmd1 | cmd2",
        "right": "Trimite stdout-ul primei comenzi în stdin-ul celei de-a doua"
      }
    ],
    "quiz": {
      "question": "Ce face instrucțiunea Bash 'find / -name \"*.log\" 2>/dev/null'?",
      "options": [
        "Caută fișierele log în tot sistemul și aruncă (ignoră complet) mesajele de eroare de tip 'Permission denied'.",
        "Șterge toate fișierele log de pe hard disk.",
        "Trimite toate fișierele găsite direct la imprimantă.",
        "Oprește calculatorul în caz de eroare."
      ],
      "correctIndex": 0,
      "explanation": "Descriptorul 2 (stderr) este redirecționat către /dev/null (gaura neagră a sistemului Unix), suprimând toate erorile din afișajul consolei."
    },
    "task": "Filtrează ieșirea comenzii 'cat app.log' căutând liniile ce conțin 'ERROR' folosind pipe și grep: 'cat app.log | grep ERROR'.",
    "starterCode": "# Folosește pipe și grep\n",
    "expectedOutputPattern": "cat\\s+app\\.log\\s*\\|\\s*grep\\s+(?:[\"']ERROR[\"']|ERROR)",
    "hint": "Scrie cat app.log | grep ERROR"
  },
  {
    "id": "devops-new-3",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 3: Permisiuni Linux & Notarea Octală ('chmod', 'chown')",
    "theory": "\n<p>Securitatea fișierelor în Linux este guvernată de o matrice de 3 categorii de utilizatori: <strong>User (u)</strong>, <strong>Group (g)</strong> și <strong>Others (o)</strong>, fiecare având 3 drepturi posibile:</p>\n<ul>\n  <li><code>r (read)</code> = 4</li>\n  <li><code>w (write)</code> = 2</li>\n  <li><code>x (execute)</code> = 1</li>\n</ul>\n<h4>1. Calculul Octal</h4>\n<p>Suma valorilor binare dă cifra octală. De exemplu, <code>chmod 755 script.sh</code> conferă: User = 4+2+1 = <strong>7</strong> (rwx), Group = 4+0+1 = <strong>5</strong> (r-x), Others = 4+0+1 = <strong>5</strong> (r-x).</p>\n<h4>2. Schimbarea Proprietarului cu 'chown'</h4>\n<p>Comanda <code>sudo chown -R www-data:www-data /var/www/html</code> modifică recursiv atât utilizatorul proprietar, cât și grupul asociat directorului.</p>\n",
    "glossary": [
      {
        "term": "chmod",
        "def": "Comandă pentru modificarea biților de permisiune (Change Mode) ai unui fișier."
      },
      {
        "term": "chown",
        "def": "Comandă administrativă pentru modificarea utilizatorului și grupului proprietar (Change Owner)."
      },
      {
        "term": "chmod 755",
        "def": "Configurație canonică pentru executabile: proprietarul are drepturi totale, restul pot citi și rula."
      },
      {
        "term": "chmod 600",
        "def": "Permisiune restrictivă recomandată pentru chei SSH private (doar proprietarul citește și scrie)."
      }
    ],
    "matchingPairs": [
      {
        "left": "chmod 755 deploy.sh",
        "right": "rwxr-xr-x: drepturi depline pentru owner, citire/execuție restul"
      },
      {
        "left": "chmod 600 id_rsa",
        "right": "rw-------: doar proprietarul are acces la cheia SSH privată"
      },
      {
        "left": "chown user:group file",
        "right": "Schimbă simultan utilizatorul și grupul fișierului"
      },
      {
        "left": "r = 4, w = 2, x = 1",
        "right": "Valorile numerice octale ale drepturilor Linux"
      }
    ],
    "quiz": {
      "question": "Ce permisiuni conferă comanda 'chmod 644 config.json' fișierului specificat?",
      "options": [
        "Proprietarul poate citi și scrie (rw-), iar grupul și ceilalți pot doar citi (r--).",
        "Toți utilizatorii pot executa fișierul ca program binar.",
        "Fișierul este criptat și nu poate fi deschis de nimeni.",
        "Doar administratorul root are acces la fișier."
      ],
      "correctIndex": 0,
      "explanation": "6 = 4+2 (read + write pentru owner), 4 = read pentru group, 4 = read pentru others. Este permisiunea standard pentru fișiere de date."
    },
    "task": "Fă scriptul 'deploy.sh' executabil pentru proprietar și cu drepturi de citire/execuție pentru restul rulând 'chmod 755 deploy.sh'.",
    "starterCode": "# Setează permisiunile 755 pe deploy.sh\n",
    "expectedOutputPattern": "chmod\\s+755\\s+deploy\\.sh",
    "hint": "Scrie chmod 755 deploy.sh"
  },
  {
    "id": "devops-new-4",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 4: Managementul Proceselor & Semnale POSIX ('kill')",
    "theory": "\n<p>Fiecare proces din Linux primește un identificator unic numeric (<strong>PID</strong>). Comanda <code>ps aux</code> sau <code>htop</code> permite monitorizarea consumului de memorie și procesor.</p>\n<h4>1. Semnale POSIX Fundamentale</h4>\n<p>Procesele comunică prin semnale trimise cu utilitarul <code>kill</code>:</p>\n<ul>\n  <li><code>SIGTERM (15)</code>: Semnalul politicos de oprire. Procesul primește șansa de a elibera conexiunile, de a salva datele și de a se închide curat.</li>\n  <li><code>SIGKILL (9)</code>: Oprire forțată și imediată executată direct de nucleul Linux (Kernel); procesul nu poate intercepta sau ignora acest semnal.</li>\n  <li><code>SIGHUP (1)</code>: Trimis pentru a forța reîncărcarea fișierului de configurare fără repornirea procesului.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "PID (Process ID)",
        "def": "Număr întreg pozitiv unic atribuit fiecărui proces activ de către nucleul Linux."
      },
      {
        "term": "SIGTERM (Semnal 15)",
        "def": "Cerere standard de terminare politicoasă ce permite curățarea resurselor (Graceful Shutdown)."
      },
      {
        "term": "SIGKILL (Semnal 9)",
        "def": "Distrugere imediată a procesului de către kernel, fără posibilitate de interceptare."
      },
      {
        "term": "htop / top",
        "def": "Aplicații terminal interactive pentru monitorizarea în timp real a resurselor hardware."
      }
    ],
    "matchingPairs": [
      {
        "left": "kill -15 1234",
        "right": "SIGTERM: cerere de oprire politicoasă"
      },
      {
        "left": "kill -9 1234",
        "right": "SIGKILL: forțare brutală a terminării procesului de către kernel"
      },
      {
        "left": "kill -HUP $(pidof nginx)",
        "right": "Reîncarcă configurația fără downtime"
      },
      {
        "left": "ps aux | grep node",
        "right": "Localizează PID-ul procesului Node.js"
      }
    ],
    "quiz": {
      "question": "De ce este recomandat să încerci mai întâi 'kill -15 PID' (SIGTERM) înainte de a folosi 'kill -9 PID' (SIGKILL)?",
      "options": [
        "SIGTERM permite aplicației să finalizeze tranzacțiile în curs, să închidă conexiunile de baze de date și să prevină coruperea fișierelor.",
        "kill -9 este o comandă interzisă de legislația europeană.",
        "kill -15 curăță automat virușii din sistem.",
        "SIGKILL repornește întregul server în loc să oprească doar procesul."
      ],
      "correctIndex": 0,
      "explanation": "SIGTERM inițiază un 'graceful shutdown', oferind procesului oportunitatea de a-și salva starea și elibera resursele. SIGKILL îl distruge instantaneu, riscând coruperea datelor."
    },
    "task": "Trimite semnalul SIGTERM (15) către procesul cu PID-ul 4520 rulând 'kill -15 4520'.",
    "starterCode": "# Trimite SIGTERM la PID 4520\n",
    "expectedOutputPattern": "kill\\s+-15\\s+4520|kill\\s+-s\\s+TERM\\s+4520|kill\\s+-SIGTERM\\s+4520",
    "hint": "Scrie kill -15 4520"
  },
  {
    "id": "devops-new-5",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "2. Junior",
    "xp": 45,
    "title": "Capitolul 5: Gestiunea Serviciilor cu Systemd ('systemctl' & 'journalctl')",
    "theory": "\n<p><strong>Systemd</strong> este sistemul de inițializare și managerul de servicii standard în majoritatea distribuțiilor Linux moderne (Ubuntu, Debian, RedHat, CentOS), având PID-ul 1.</p>\n<h4>1. Comanda 'systemctl'</h4>\n<p>Comenzile frecvente includ:</p>\n<ul>\n  <li><code>sudo systemctl start nginx</code> — Pornește serviciul.</li>\n  <li><code>sudo systemctl enable nginx</code> — Configurează serviciul să pornească automat la boot-ul mașinii.</li>\n  <li><code>sudo systemctl status nginx</code> — Afișează starea curentă și ultimele linii de jurnal.</li>\n  <li><code>sudo systemctl reload nginx</code> — Reîncarcă configurația fără a întrerupe conexiunile clienților.</li>\n</ul>\n<h4>2. Inspectarea Jurnalelor cu 'journalctl'</h4>\n<p>Utilitarul centralizat <code>journalctl -u nginx -f</code> urmărește logurile serviciului în timp real (urmărire de tip 'follow').</p>\n",
    "glossary": [
      {
        "term": "systemd",
        "def": "Sistemul modern de inițializare PID 1 responsabil cu pornirea și supervizarea tuturor serviciilor Linux."
      },
      {
        "term": "systemctl enable",
        "def": "Creează link-uri simbolice pentru a asigura pornirea automată a serviciului la boot-ul serverului."
      },
      {
        "term": "journalctl -f",
        "def": "Afișează logurile în flux continuu, actualizându-se automat la fiecare linie nouă generată."
      },
      {
        "term": "Unit File (.service)",
        "def": "Fișier declarativ de configurare ce descrie comanda de pornire, utilizatorul și regulile de repornire ale serviciului."
      }
    ],
    "matchingPairs": [
      {
        "left": "systemctl status docker",
        "right": "Verifică dacă serviciul Docker este activ și sănătos"
      },
      {
        "left": "systemctl enable --now nginx",
        "right": "Pornește serviciul acum și îl activează la boot"
      },
      {
        "left": "journalctl -u app -n 50",
        "right": "Afișează ultimele 50 de linii de jurnal ale serviciului"
      },
      {
        "left": "systemctl restart my-service",
        "right": "Oprește și repornește complet procesul"
      }
    ],
    "quiz": {
      "question": "Ce comandă urmărește în timp real (stream continuu) logurile generate de serviciul 'api-backend' în systemd?",
      "options": [
        "journalctl -u api-backend -f",
        "cat /var/log/syslog | stop",
        "systemctl logs api-backend --watch",
        "tail -n 0 /dev/null"
      ],
      "correctIndex": 0,
      "explanation": "Flag-ul '-u' filtrează după numele unității de serviciu, iar '-f' (follow) menține conexiunea deschisă afișând noile intrări în timp real."
    },
    "task": "Pornește și verifică starea serviciului 'nginx' rulând comanda 'sudo systemctl status nginx'.",
    "starterCode": "# Verifică statusul Nginx\n",
    "expectedOutputPattern": "(?:sudo\\s+)?systemctl\\s+status\\s+nginx",
    "hint": "Scrie sudo systemctl status nginx (sau fără sudo)."
  },
  {
    "id": "devops-new-6",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 6: Docker Fundamente — Imagini, Containere & Dockerfile",
    "theory": "\n<p><strong>Docker</strong> împachetează aplicațiile și toate dependențele lor într-o unitate izolată numită <em>container</em>, partajând kernelul sistemului de operare gazdă (fără overhead-ul greoi al unei mașini virtuale cu hypervisor).</p>\n<h4>1. Instrucțiuni Esențiale în Dockerfile</h4>\n<ul>\n  <li><code>FROM node:20-alpine</code> — Imaginea de bază minimalistă.</li>\n  <li><code>WORKDIR /app</code> — Directorul de lucru din interiorul containerului.</li>\n  <li><code>COPY package*.json ./</code> — Copiază mai întâi fișierele de dependențe pentru a valorifica cache-ul de layere Docker.</li>\n  <li><code>RUN npm install</code> — Execută comenzi în timpul etapei de build.</li>\n  <li><code>COPY . .</code> — Copiază codul sursă.</li>\n  <li><code>EXPOSE 3000</code> — Documentează portul de rețea ascultat.</li>\n  <li><code>CMD [\"node\", \"server.js\"]</code> — Comanda implicită la pornirea containerului.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Docker Image",
        "def": "Șablon imutabil compus din layere read-only din care se instanțiază containerele."
      },
      {
        "term": "Docker Container",
        "def": "Instanță activă izolată a unei imagini rulată cu un layer read-write superficial în memorie."
      },
      {
        "term": "Layer Caching",
        "def": "Optimizare Docker ce reutilizează layerele nemodificate la build-uri succesive pentru viteză."
      },
      {
        "term": "CMD vs RUN",
        "def": "RUN rulează la construirea imaginii (build time); CMD rulează când containerul pornește (runtime)."
      }
    ],
    "matchingPairs": [
      {
        "left": "docker build -t app:v1 .",
        "right": "Construiește o imagine etichetată din Dockerfile-ul curent"
      },
      {
        "left": "docker run -d -p 8080:80 app:v1",
        "right": "Rulează containerul în fundal mapând portul 8080 la 80"
      },
      {
        "left": "docker ps",
        "right": "Listează toate containerele active din sistem"
      },
      {
        "left": "docker exec -it my-app sh",
        "right": "Deschide un terminal interactiv în interiorul containerului"
      }
    ],
    "quiz": {
      "question": "De ce se recomandă copierea fișierului 'package.json' și rularea 'npm install' ÎNAINTE de a copia restul codului sursă într-un Dockerfile?",
      "options": [
        "Pentru a profita de sistemul de layer caching din Docker: dependențele nu sunt reinstalate dacă package.json nu s-a schimbat.",
        "Altfel containerul refuză să pornească pe calculatoare cu Windows.",
        "Node.js nu permite rularea comenzilor într-un container fără fișiere JSON.",
        "Reduce dimensiunea hard diskului gazdă cu 90%."
      ],
      "correctIndex": 0,
      "explanation": "Docker cache-uiește fiecare linie. Dacă codul sursă se schimbă frecvent dar dependențele rămân aceleași, Docker va sări peste pasul lent de 'npm install', folosind cache-ul."
    },
    "task": "Rulează containerul din imaginea 'my-web:latest' în fundal (-d) mapând portul '80:80': 'docker run -d -p 80:80 my-web:latest'.",
    "starterCode": "# Rulează containerul\n",
    "expectedOutputPattern": "docker\\s+run\\s+-d\\s+-p\\s+80:80\\s+my-web:latest",
    "hint": "Scrie docker run -d -p 80:80 my-web:latest"
  },
  {
    "id": "devops-new-7",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 7: Persistența Datelor: Docker Volumes & Bind Mounts",
    "theory": "\n<p>Sistemul de fișiere al unui container Docker este efemer: când containerul este șters, toate fișierele create în interior se pierd irevocabil. Persistența necesită mecanisme dedicate.</p>\n<h4>1. Named Volumes (Recomandat pentru Baze de Date)</h4>\n<p>Volumele numite sunt complet gestionate de Docker (stocate în <code>/var/lib/docker/volumes/</code>). Sunt izolate de sistemul de fișiere al gazdei și optimizate pentru I/O performant: <code>-v pgdata:/var/lib/postgresql/data</code>.</p>\n<h4>2. Bind Mounts (Recomandat pentru Dezvoltare Locală)</h4>\n<p>Leagă un director concret de pe mașina gazdă direct în interiorul containerului: <code>-v $(pwd):/app</code>, reflectând instant modificările de cod fără a reconstrui imaginea.</p>\n",
    "glossary": [
      {
        "term": "Docker Volume",
        "def": "Mecanism dedicat administrat de Docker pentru stocarea persistentă a datelor dincolo de viața containerului."
      },
      {
        "term": "Bind Mount",
        "def": "Maparea directă a unui fișier sau director de pe host în interiorul containerului."
      },
      {
        "term": "Ephemeral Storage",
        "def": "Natura temporară a layerului de scriere al containerului care se distruge la comanda docker rm."
      },
      {
        "term": "docker volume create",
        "def": "Comandă pentru crearea manuală a unui volum numit persistent."
      }
    ],
    "matchingPairs": [
      {
        "left": "-v db_data:/var/lib/mysql",
        "right": "Named volume persistent administrat direct de Docker"
      },
      {
        "left": "-v $(pwd)/src:/app/src",
        "right": "Bind mount local pentru hot-reloading la dezvoltare"
      },
      {
        "left": "docker volume ls",
        "right": "Listează toate volumele persistente de pe mașină"
      },
      {
        "left": "docker volume prune",
        "right": "Șterge toate volumele orfane neatașate vreunui container"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă cu datele dintr-o bază de date PostgreSQL rulată în Docker dacă folosești un volum numit '-v pg_data:/var/lib/postgresql/data' și ștergi containerul cu 'docker rm -f'?",
      "options": [
        "Datele rămân 100% intacte în volumul 'pg_data' și vor fi accesibile instant la atașarea unui nou container.",
        "Datele sunt șterse definitiv de pe hard disk odată cu distrugerea containerului.",
        "Docker trimite datele într-un fișier zip pe adresa de e-mail a dezvoltatorului.",
        "Baza de date este coruptă și serverul trebuie reinstalat."
      ],
      "correctIndex": 0,
      "explanation": "Volumele gestionate de Docker au ciclu de viață complet independent de containere; distrugerea containerului lasă volumul și datele intacte."
    },
    "task": "Creează un volum Docker numit 'app_storage' rulând comanda 'docker volume create app_storage'.",
    "starterCode": "# Creează volumul Docker\n",
    "expectedOutputPattern": "docker\\s+volume\\s+create\\s+app_storage",
    "hint": "Scrie docker volume create app_storage"
  },
  {
    "id": "devops-new-8",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 8: Orchestare cu Docker Compose ('docker-compose.yml')",
    "theory": "\n<p><strong>Docker Compose</strong> este utilitarul standard pentru definirea și rularea aplicațiilor multi-container (ex: backend Node.js + frontend React + bază de date PostgreSQL + Redis cache) printr-un singur fișier declarativ YAML.</p>\n<h4>1. Structura 'docker-compose.yml'</h4>\n<p>Definim servicii, rețele și volume:</p>\n<pre><code>services:\n  web:\n    build: .\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - db\n    environment:\n      - DATABASE_URL=postgres://user:pass@db:5432/app\n  db:\n    image: postgres:16-alpine\n    volumes:\n      - pgdata:/var/lib/postgresql/data\nvolumes:\n  pgdata:\n</code></pre>\n<h4>2. DNS Intern Automat</h4>\n<p>Docker Compose creează automat o rețea comună (bridge) unde containerele pot comunica între ele folosind direct numele serviciului ca hostname (ex: conexiunea la baza de date se face la adresa <code>db:5432</code>).</p>\n",
    "glossary": [
      {
        "term": "docker-compose.yml",
        "def": "Fișier de configurare declarativ YAML ce descrie arhitectura multi-container a aplicației."
      },
      {
        "term": "depends_on",
        "def": "Directivă ce controlează ordinea de pornire a serviciilor (ex: pornește db înainte de web)."
      },
      {
        "term": "Internal Service Discovery",
        "def": "Rezolvarea automată a numelui serviciului (ex: 'db') la adresa IP internă a containerului."
      },
      {
        "term": "docker compose up -d",
        "def": "Construiește, creează și lansează toate serviciile în fundal cu o singură comandă."
      }
    ],
    "matchingPairs": [
      {
        "left": "docker compose up -d",
        "right": "Pornește întreaga stivă de servicii în fundal"
      },
      {
        "left": "docker compose down -v",
        "right": "Oprește containerele și șterge și volumele asociate"
      },
      {
        "left": "docker compose logs -f web",
        "right": "Urmărește logurile specifice serviciului web"
      },
      {
        "left": "depends_on: [\"redis\"]",
        "right": "Garantează pornirea Redis-ului înainte de backend"
      }
    ],
    "quiz": {
      "question": "Cum comunică serviciul 'backend' cu serviciul 'database' definit în același fișier docker-compose.yml?",
      "options": [
        "Folosind numele serviciului 'database' drept hostname (DNS-ul intern Docker rezolvă automat conexiunea pe rețeaua privată).",
        "Doar prin adresa IP publică a plăcii de rețea a routerului fizic.",
        "Containerele nu pot comunica între ele fără un cablu USB conectat.",
        "Prin intermediul unui cont plătit pe Docker Hub."
      ],
      "correctIndex": 0,
      "explanation": "Docker Compose creează o rețea privată comună și un DNS intern integrat, astfel încât 'database' este un hostname perfect valid și accesibil din oricare alt container din acea rețea."
    },
    "task": "Pornește toate serviciile din docker-compose.yml în fundal rulând 'docker compose up -d'.",
    "starterCode": "# Pornește stiva cu docker compose\n",
    "expectedOutputPattern": "docker\\s+compose\\s+up\\s+-d|docker-compose\\s+up\\s+-d",
    "hint": "Scrie docker compose up -d"
  },
  {
    "id": "devops-new-9",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 9: Optimizare Extremă Docker: Multi-Stage Builds",
    "theory": "\n<p>Imaginile de producție nu trebuie să conțină compilatoare, SDK-uri greoaie sau fișiere sursă necompilate. <strong>Multi-Stage Builds</strong> permite utilizarea mai multor instrucțiuni <code>FROM</code> într-un singur Dockerfile.</p>\n<h4>1. Stagiul de Build vs Stagiul de Producție</h4>\n<p>În prima etapă (<code>FROM golang:1.22 AS builder</code>) compilăm aplicația în binar nativ. În a doua etapă (<code>FROM alpine:latest</code> sau <code>FROM scratch</code>) copiem doar binarul final:</p>\n<pre><code>COPY --from=builder /app/server /server\nCMD [\"/server\"]\n</code></pre>\n<h4>2. Beneficii de Securitate și Viteză</h4>\n<p>Dimensiunea imaginii scade adesea de la 1.2 GB la sub 25 MB, eliminând uneltele de build care ar putea fi exploatate de atacatori în caz de compromitere a containerului.</p>\n",
    "glossary": [
      {
        "term": "Multi-Stage Build",
        "def": "Tehnică Docker ce folosește stadii intermediare pentru compilare, păstrând în imaginea finală doar binarul minim."
      },
      {
        "term": "COPY --from=builder",
        "def": "Directivă ce extrage exclusiv artefactele compilate dintr-un stadiu anterior."
      },
      {
        "term": "Alpine Linux",
        "def": "Distribuție Linux ultra-ușoară (aprox. 5 MB) cu suprafață minimă de atac."
      },
      {
        "term": "scratch",
        "def": "Cea mai mică imagine Docker posibilă (0 octeți), ce rulează exclusiv binare complet statice."
      }
    ],
    "matchingPairs": [
      {
        "left": "AS builder",
        "right": "Denumește stadiul intermediar de compilare"
      },
      {
        "left": "COPY --from=builder /app/bin /bin",
        "right": "Copiază doar rezultatul compilat în imaginea curată"
      },
      {
        "left": "Imagine redusă de la 1GB la 20MB",
        "right": "Efectul direct al eliminării SDK-ului din producție"
      },
      {
        "left": "Suprafață minimă de atac",
        "right": "Avantaj major de securitate al imaginilor alpine"
      }
    ],
    "quiz": {
      "question": "Care este principalul avantaj de securitate și performanță al utilizării Multi-Stage Builds în Docker?",
      "options": [
        "Imaginea finală de producție nu conține codul sursă, compilatoarele sau uneltele de build, fiind minusculă și mult mai sigură.",
        "Permite rularea containerului fără procesor hardware.",
        "Multi-stage builds elimină complet necesitatea utilizării parolelor.",
        "Transformă automat orice aplicație într-un microserviciu."
      ],
      "correctIndex": 0,
      "explanation": "Separarea fazei de compilare de imaginea de rulare lasă în urmă compilatoarele și fișierele temporare, rezultând imagini compacte, rapide la descărcare și lipsite de unelte inutile care ar putea fi exploatate de hackeri."
    },
    "task": "Copiază din stagiul 'build' fișierul '/app/dist' în directorul curent '/public': 'COPY --from=build /app/dist /public'.",
    "starterCode": "# Instrucțiune COPY multi-stage\n",
    "expectedOutputPattern": "COPY\\s+--from=build\\s+/app/dist\\s+/public",
    "hint": "Scrie COPY --from=build /app/dist /public"
  },
  {
    "id": "devops-new-10",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 10: Server Web & Reverse Proxy cu Nginx",
    "theory": "\n<p><strong>Nginx</strong> este un server web de mare viteză bazat pe o arhitectură asincronă event-driven, utilizat frecvent ca <strong>Reverse Proxy</strong>, Load Balancer și punct de terminare SSL/TLS în fața serverelor de aplicații (Node.js, Python, Java).</p>\n<h4>1. Directiva 'proxy_pass'</h4>\n<p>Redirecționează traficul HTTP primit din exterior către portul intern al aplicației:</p>\n<pre><code>location /api/ {\n    proxy_pass http://127.0.0.1:3000;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n}\n</code></pre>\n<h4>2. Headers Esențiale de Proxy</h4>\n<p>Fără <code>X-Forwarded-For</code> și <code>X-Real-IP</code>, aplicația din spate ar vedea ca IP al clientului adresa de loopback <code>127.0.0.1</code> a proxy-ului Nginx, făcând imposibilă localizarea sau rate-limiting-ul pe clienți reali.</p>\n",
    "glossary": [
      {
        "term": "Reverse Proxy",
        "def": "Server intermediar ce recepționează cererile clienților și le transmite către backend-urile private."
      },
      {
        "term": "proxy_pass",
        "def": "Directiva centrală Nginx ce specifică adresa și portul serverului destinație."
      },
      {
        "term": "X-Forwarded-For",
        "def": "Header HTTP standard ce păstrează lanțul de adrese IP reale ale clienților prin proxy-uri."
      },
      {
        "term": "SSL Termination",
        "def": "Decriptarea traficului HTTPS de către Nginx, permițând comunicarea HTTP simplă internă cu backend-ul."
      }
    ],
    "matchingPairs": [
      {
        "left": "proxy_pass http://localhost:5000",
        "right": "Redirecționează traficul către serverul intern"
      },
      {
        "left": "proxy_set_header X-Real-IP $remote_addr",
        "right": "Păstrează IP-ul real al vizitatorului extern"
      },
      {
        "left": "nginx -t",
        "right": "Testează sintaxa fișierelor de configurare fără repornire"
      },
      {
        "left": "nginx -s reload",
        "right": "Reîncarcă configurația cu zero downtime pentru clienți"
      }
    ],
    "quiz": {
      "question": "De ce este obligatorie transmiterea header-ului 'X-Forwarded-For' de către Nginx către serverul de backend?",
      "options": [
        "Pentru ca serverul din spate să cunoască adresa IP reală a clientului, nu IP-ul intern al serverului Nginx.",
        "Pentru a forța clientul să vizioneze o reclamă video înainte de afișare.",
        "Fără acest header Nginx blochează conexiunile de pe telefoane mobile.",
        "Header-ul activează compilarea codului JavaScript în backend."
      ],
      "correctIndex": 0,
      "explanation": "Un reverse proxy maschează IP-ul clientului. Header-ul 'X-Forwarded-For' adaugă adresa IP inițială a utilizatorului pentru ca backend-ul să o poată loga sau utiliza în securitate."
    },
    "task": "Testează corectitudinea sintaxei fișierului de configurare Nginx fără a opri serverul rulând 'sudo nginx -t'.",
    "starterCode": "# Testează configurația Nginx\n",
    "expectedOutputPattern": "(?:sudo\\s+)?nginx\\s+-t",
    "hint": "Scrie sudo nginx -t (sau nginx -t)."
  },
  {
    "id": "devops-new-11",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 11: CI/CD Automatizat cu GitHub Actions",
    "theory": "\n<p><strong>CI/CD</strong> (Continuous Integration & Continuous Deployment) automatizează testarea, compilarea și livrarea sigură a codului la fiecare <code>git push</code> sau <code>Pull Request</code>.</p>\n<h4>1. Structura unui Workflow GitHub Actions</h4>\n<p>Configurațiile sunt plasate în <code>.github/workflows/*.yml</code>:</p>\n<pre><code>name: Deploy Pipeline\non:\n  push:\n    branches: [ \"main\" ]\njobs:\n  test-and-build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Setup Node\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm test\n</code></pre>\n<h4>2. Gestiunea Secretelor</h4>\n<p>Cheile API, parolele și cheile private SSH nu se pun NICIODATĂ în cod; se accesează securizat din setările repository-ului prin sintaxa <code>${{ secrets.PROD_API_KEY }}</code>.</p>\n",
    "glossary": [
      {
        "term": "GitHub Actions",
        "def": "Platformă CI/CD integrată nativ în GitHub pentru automatizarea fluxurilor de lucru software."
      },
      {
        "term": "Workflow Trigger (on:)",
        "def": "Evenimentul git care declanșează execuția pipeline-ului (push, pull_request, release)."
      },
      {
        "term": "Runner (runs-on:)",
        "def": "Mașina virtuală temporară din cloud ce execută comenzile definite în job."
      },
      {
        "term": "Repository Secrets",
        "def": "Variabile de mediu criptate asimetric folosite în siguranță de pipeline fără expunere."
      }
    ],
    "matchingPairs": [
      {
        "left": "on: push: branches: [main]",
        "right": "Declanșează pipeline-ul la fiecare push pe ramura main"
      },
      {
        "left": "actions/checkout@v4",
        "right": "Descarcă codul sursă al repository-ului pe mașina runner"
      },
      {
        "left": "${{ secrets.DEPLOY_TOKEN }}",
        "right": "Injectare securizată a parolelor criptate"
      },
      {
        "left": "npm ci",
        "right": "Instalare curată și deterministă a dependențelor conform lockfile-ului"
      }
    ],
    "quiz": {
      "question": "De ce este preferabil 'npm ci' în loc de 'npm install' în cadrul unui pipeline automatizat de CI/CD?",
      "options": [
        "npm ci este mai rapid, șterge node_modules existent și instalează exact versiunile blocate în package-lock.json fără modificări.",
        "npm install este dezactivat pe mașinile virtuale Linux din cloud.",
        "npm ci transformă automat codul în aplicație Android.",
        "npm ci nu consumă conexiune de internet."
      ],
      "correctIndex": 0,
      "explanation": "npm ci (Clean Install) este strict determinist: cere ca package-lock.json să fie sincronizat cu package.json și refuză să modifice versiunile, garantând reproducibilitate 100% în pipeline."
    },
    "task": "Scrie comanda dintr-un pas de workflow GitHub Actions care instalează dependențele curat: 'npm ci'.",
    "starterCode": "      - run: ",
    "expectedOutputPattern": "(?:-\\s*run:\\s*)?npm\\s+ci",
    "hint": "Scrie npm ci"
  },
  {
    "id": "js-new-1",
    "track": "JavaScript",
    "division": "Informatică și Programare",
    "icon": "⚡",
    "level": "2. Junior",
    "xp": 35,
    "title": "Capitolul 1: Delegarea Evenimentelor DOM (Bubbling & Event Delegation)",
    "theory": "\n<p>Când un eveniment (precum un click) se produce pe un element din browser, el parcurge 3 faze conform standardului W3C:</p>\n<ol>\n  <li><strong>Faza de Captură (Capturing Phase)</strong>: Coboară de la <code>window</code> și <code>document</code> spre elementul țintă.</li>\n  <li><strong>Faza Țintă (Target Phase)</strong>: Atinge elementul pe care s-a dat click direct (<code>e.target</code>).</li>\n  <li><strong>Faza de Bule (Bubbling Phase)</strong>: Urcă înapoi prin toți părinții până la rădăcină.</li>\n</ol>\n<h4>1. Tehnica Event Delegation</h4>\n<p>În loc să atașăm 1000 de handleri de eveniment pe fiecare element dintr-o listă (consum masiv de RAM), atașăm <strong>un singur listener pe părinte</strong> (<code>ul</code>) și folosim <code>e.target.closest('li')</code> pentru a identifica elementul acționat.</p>\n<h4>2. 'e.target' vs 'e.currentTarget'</h4>\n<p><code>e.target</code> este elementul exact pe care s-a făcut click (poate fi un <code>span</code> sau iconiță interioară), în timp ce <code>e.currentTarget</code> este elementul pe care a fost înregistrat listenerul (părintele).</p>\n",
    "glossary": [
      {
        "term": "Event Bubbling",
        "def": "Propagarea naturală a unui eveniment în sus prin arborele DOM de la copil către părinți."
      },
      {
        "term": "Event Delegation",
        "def": "Tehnică de optimizare ce atașează un singur handler pe părinte pentru toți copiii prezenți și viitori."
      },
      {
        "term": "e.target",
        "def": "Referință către elementul DOM cel mai adânc care a declanșat inițial evenimentul."
      },
      {
        "term": "e.stopPropagation()",
        "def": "Metodă ce oprește propagarea evenimentului către părinții superiori din arbore."
      }
    ],
    "matchingPairs": [
      {
        "left": "e.target.closest('button')",
        "right": "Găsește cel mai apropiat strămoș de tip buton"
      },
      {
        "left": "e.stopPropagation()",
        "right": "Oprește urcarea evenimentului (bubbling) în arbore"
      },
      {
        "left": "e.currentTarget",
        "right": "Elementul pe care este atașat activ listenerul"
      },
      {
        "left": "Event Delegation",
        "right": "Economie masivă de memorie RAM pentru liste mari"
      }
    ],
    "quiz": {
      "question": "De ce tehnica Event Delegation funcționează perfect și pentru elementele adăugate dinamic în listă după încărcarea paginii?",
      "options": [
        "Deoarece listenerul este atașat pe containerul părinte existent, iar evenimentele noilor copii urcă (bubble) natural până la acesta.",
        "Browserul reîncarcă scriptul JS la fiecare inserare DOM.",
        "Event Delegation transformă elementele în noduri XML.",
        "Funcționează doar dacă serverul trimite un semnal WebSocket."
      ],
      "correctIndex": 0,
      "explanation": "Părintele este deja în DOM și ascultă evenimentele care urcă prin bubbling. Orice copil adăugat ulterior va propaga automat click-ul către părinte."
    },
    "task": "Atașează un eveniment 'click' pe 'list' și verifică dacă s-a dat click pe un buton folosind 'e.target.closest(\"button\")'.",
    "starterCode": "list.addEventListener('click', (e) => {\n    const btn = ",
    "expectedOutputPattern": "const\\s+btn\\s*=\\s*e\\.target\\.closest\\([\"']button[\"']\\);?",
    "hint": "Scrie const btn = e.target.closest('button');"
  },
  {
    "id": "js-new-2",
    "track": "JavaScript",
    "division": "Informatică și Programare",
    "icon": "⚡",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 2: API-ul 'IntersectionObserver' — Lazy Loading & Scroll Infinit",
    "theory": "\n<p>Tradițional, detectarea vizibilității elementelor pe ecran se făcea ascultând evenimentul <code>window.addEventListener('scroll')</code> și apelând <code>getBoundingClientRect()</code>, ceea ce forța recalcularea layout-ului (Forced Synchronous Layout / Layout Thrashing) și agăța derularea paginii.</p>\n<h4>1. Ce este IntersectionObserver?</h4>\n<p><strong>IntersectionObserver</strong> este un API modern asincron care monitorizează intersecția unui element țintă cu un element strămoș sau cu viewport-ul dispozitivului, fără a bloca firul principal de execuție.</p>\n<h4>2. Utilizare: Lazy Loading & Praguri (threshold)</h4>\n<p>Când <code>entry.isIntersecting</code> devine adevărat, atribuim atributul <code>src</code> din <code>data-src</code> al imaginii și oprim monitorizarea prin <code>observer.unobserve(entry.target)</code>.</p>\n",
    "glossary": [
      {
        "term": "IntersectionObserver",
        "def": "API asincron nativ ce monitorizează vizibilitatea unui element în viewport fără impact de performanță."
      },
      {
        "term": "isIntersecting",
        "def": "Proprietate booleană ce indică dacă elementul țintă se află în interiorul ariei vizibile."
      },
      {
        "term": "Layout Thrashing",
        "def": "Degradare de performanță cauzată de citiri și scrieri DOM repetate forțând browserul să recalculeze geometria."
      },
      {
        "term": "observer.unobserve(el)",
        "def": "Oprește monitorizarea unui element după ce acțiunea dorită (ex: încărcare imagine) s-a realizat."
      }
    ],
    "matchingPairs": [
      {
        "left": "new IntersectionObserver(callback, options)",
        "right": "Instanțiază observerul cu pragul dorit"
      },
      {
        "left": "entry.isIntersecting",
        "right": "Verifică dacă elementul a intrat în viewport"
      },
      {
        "left": "observer.observe(img)",
        "right": "Pornește monitorizarea vizibilității imaginii"
      },
      {
        "left": "observer.unobserve(img)",
        "right": "Oprește monitorizarea după încărcare"
      }
    ],
    "quiz": {
      "question": "De ce este IntersectionObserver mult mai performant pentru Lazy Loading decât ascultarea evenimentului 'scroll'?",
      "options": [
        "Rulează asincron în afara fluxului principal de randare și nu forțează reflow-uri sincrone la fiecare pixel derulat.",
        "IntersectionObserver descarcă imaginile înainte ca utilizatorul să deschidă browserul.",
        "Comprimă automat imaginile în format WebP la rezoluție 4K.",
        "Dezactivează complet bara de scroll a paginii."
      ],
      "correctIndex": 0,
      "explanation": "IntersectionObserver este gestionat intern de motorul browserului într-un mod complet decuplat și asincron, evitând blocajele (jank) produse de calculele la scroll."
    },
    "task": "Instanțiază un 'IntersectionObserver' transmițând callback-ul 'handleIntersect' în variabila 'observer'.",
    "starterCode": "const observer = ",
    "expectedOutputPattern": "const\\s+observer\\s*=\\s*new\\s+IntersectionObserver\\(handleIntersect(?:,\\s*options)?\\);?",
    "hint": "Scrie const observer = new IntersectionObserver(handleIntersect);"
  },
  {
    "id": "js-new-3",
    "track": "JavaScript",
    "division": "Informatică și Programare",
    "icon": "⚡",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 3: API-ul 'MutationObserver' — Monitorizarea Arborelui DOM",
    "theory": "\n<p>Înainte de MutationObserver, detectarea schimbărilor în DOM se baza pe evenimente învechite (Mutation Events precum <code>DOMNodeInserted</code>), care provocau scăderi drastice de performanță.</p>\n<h4>1. Monitorizare Eficientă și Asincronă</h4>\n<p><strong>MutationObserver</strong> colectează toate modificările (adăugare/ștergere noduri, schimbare atribute sau conținut text) și le livrează într-un singur batch asincron către funcția callback.</p>\n<h4>2. Configurare cu 'observe(target, config)'</h4>\n<p>Obiectul de configurare specifică exact ce schimbări ne interesează:</p>\n<pre><code>observer.observe(targetNode, {\n    childList: true,     // monitorizează adăugarea/ștergerea copiilor\n    subtree: true,       // extinde monitorizarea pe toți descendenții\n    attributes: true     // monitorizează schimbarea atributelor HTML\n});\n</code></pre>\n",
    "glossary": [
      {
        "term": "MutationObserver",
        "def": "API nativ de înaltă performanță pentru detectarea modificărilor structurale sau de atribute în DOM."
      },
      {
        "term": "childList",
        "def": "Opțiune de configurare ce semnalează adăugarea sau eliminarea de noduri copii directe."
      },
      {
        "term": "subtree: true",
        "def": "Extinde monitorizarea pe întreaga adâncime a subarborelui elementului țintă."
      },
      {
        "term": "observer.disconnect()",
        "def": "Dezactivează complet observerul și eliberează resursele de memorie."
      }
    ],
    "matchingPairs": [
      {
        "left": "childList: true",
        "right": "Detectează adăugarea sau ștergerea elementelor copil"
      },
      {
        "left": "attributes: true",
        "right": "Detectează modificările valorilor atributelor HTML (ex: class, id)"
      },
      {
        "left": "observer.disconnect()",
        "right": "Oprește definitiv ascultarea oricăror mutații DOM"
      },
      {
        "left": "record.addedNodes",
        "right": "Listă cu toate nodurile nou inserate în DOM"
      }
    ],
    "quiz": {
      "question": "Ce metodă trebuie apelată pe un MutationObserver atunci când o componentă este ștearsă din pagină pentru a preveni memory leaks?",
      "options": [
        "observer.disconnect()",
        "observer.destroyAll()",
        "observer.close()",
        "delete window.observer"
      ],
      "correctIndex": 0,
      "explanation": "Apelul disconnect() dezactivează observerul, curăță toate mutațiile din coadă și eliberează referințele către nodurile DOM, prevenind scurgerile de memorie."
    },
    "task": "Pornește monitorizarea pe 'targetElement' pentru 'childList: true' rulând 'observer.observe(targetElement, { childList: true });'.",
    "starterCode": "// Monitorizează childList\n",
    "expectedOutputPattern": "observer\\.observe\\(targetElement,\\s*\\{\\s*childList:\\s*true\\s*\\}\\);?",
    "hint": "Scrie observer.observe(targetElement, { childList: true });"
  },
  {
    "id": "js-new-4",
    "track": "JavaScript",
    "division": "Informatică și Programare",
    "icon": "⚡",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 4: Evenimente Personalizate ('CustomEvent' & 'dispatchEvent')",
    "theory": "\n<p>Pentru a construi arhitecturi decuplate și sisteme modulare (Publish/Subscribe) fără dependențe externe, browserul oferă clasa nativă <strong>CustomEvent</strong>.</p>\n<h4>1. Crearea unui CustomEvent cu Payload</h4>\n<p>Putem atașa date arbitrare prin proprietatea <code>detail</code>:</p>\n<pre><code>const event = new CustomEvent('userLogin', {\n    detail: { userId: 101, role: 'admin' },\n    bubbles: true,        // permite evenimentului să urce în arborele DOM\n    cancelable: true     // permite anularea cu e.preventDefault()\n});\n</code></pre>\n<h4>2. Declanșarea cu 'dispatchEvent'</h4>\n<p>Evenimentul este emis pe orice nod DOM prin <code>element.dispatchEvent(event)</code> și poate fi interceptat cu metoda standard <code>element.addEventListener('userLogin', (e) => console.log(e.detail));</code>.</p>\n",
    "glossary": [
      {
        "term": "CustomEvent",
        "def": "Clasă nativă DOM pentru crearea de evenimente cu nume personalizat și încărcătură de date (detail)."
      },
      {
        "term": "detail",
        "def": "Proprietate standard a unui CustomEvent unde sunt stocate datele transmise către handleri."
      },
      {
        "term": "dispatchEvent()",
        "def": "Metodă sincronă ce declanșează un eveniment pe elementul țintă din DOM."
      },
      {
        "term": "Decoupled Architecture",
        "def": "Model de proiectare unde componentele comunică exclusiv prin mesaje fără referințe directe."
      }
    ],
    "matchingPairs": [
      {
        "left": "new CustomEvent('cartUpdate', { detail: item })",
        "right": "Creează un eveniment cu date atașate"
      },
      {
        "left": "window.dispatchEvent(event)",
        "right": "Emite evenimentul la nivel global în aplicație"
      },
      {
        "left": "e.detail",
        "right": "Acces la datele transmise în corpul evenimentului"
      },
      {
        "left": "bubbles: true",
        "right": "Permite evenimentului personalizat să urce în DOM"
      }
    ],
    "quiz": {
      "question": "În ce proprietate a obiectului CustomEvent sunt plasate datele transmise către ascultătorii de evenimente?",
      "options": [
        "detail (de exemplu e.detail)",
        "payload",
        "data",
        "body"
      ],
      "correctIndex": 0,
      "explanation": "Conform standardului W3C DOM Events, proprietatea 'detail' din obiectul de inițializare este locul canonic unde se salvează datele transmise."
    },
    "task": "Emite evenimentul 'myEvent' pe elementul 'document' folosind 'document.dispatchEvent(myEvent);'.",
    "starterCode": "// Declanșează myEvent pe document\n",
    "expectedOutputPattern": "document\\.dispatchEvent\\(myEvent\\);?",
    "hint": "Scrie document.dispatchEvent(myEvent);"
  },
  {
    "id": "js-new-5",
    "track": "JavaScript",
    "division": "Informatică și Programare",
    "icon": "⚡",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 5: Web Workers — Execuție Paralelă în Background Threads",
    "theory": "\n<p>JavaScript în browser rulează pe un singur fir principal de execuție (Single-Threaded). Calculele intensive (procesare video/audio, criptografie, parsare masivă de JSON) blochează complet interfața utilizator (UI freeze).</p>\n<h4>1. Ce este un Web Worker?</h4>\n<p>Un <strong>Web Worker</strong> rulează un script într-un fir de execuție separat din sistemul de operare. Workerul NU are acces la DOM, la <code>window</code> sau la <code>document</code>, fiind complet izolat.</p>\n<h4>2. Comunicare prin Transmitere de Mesaje (postMessage)</h4>\n<p>Comunicarea dintre firul principal și worker se realizează exclusiv asincron prin mesaje serializate:</p>\n<pre><code>// Firul principal:\nconst worker = new Worker('worker.js');\nworker.postMessage({ data: rawNumbers });\nworker.onmessage = (e) => console.log('Rezultat:', e.data);\n</code></pre>\n",
    "glossary": [
      {
        "term": "Web Worker",
        "def": "Mecanism de rulare a scripturilor JavaScript în fire de execuție paralele fără acces la DOM."
      },
      {
        "term": "postMessage(data)",
        "def": "Metodă sigură de trimitere a datelor între firul principal și worker prin clonare structurală."
      },
      {
        "term": "onmessage",
        "def": "Handler de eveniment declanșat la primirea unui mesaj de la celălalt thread."
      },
      {
        "term": "Structured Clone Algorithm",
        "def": "Algoritm intern ce duplică obiecte complexe transmise prin postMessage."
      }
    ],
    "matchingPairs": [
      {
        "left": "new Worker('heavy-task.js')",
        "right": "Inițializează un nou fir de execuție în fundal"
      },
      {
        "left": "worker.postMessage(data)",
        "right": "Trimite date către worker pentru procesare"
      },
      {
        "left": "self.onmessage = (e) => ...",
        "right": "Recepționează mesajul în interiorul scriptului worker"
      },
      {
        "left": "Fără acces la DOM",
        "right": "Restricție de siguranță arhitecturală a Web Workers"
      }
    ],
    "quiz": {
      "question": "Ce resurse ale browserului NU pot fi accesate direct din interiorul unui Web Worker?",
      "options": [
        "Arborele DOM, obiectul document și obiectul window.",
        "Cereri de rețea prin fetch().",
        "Operații matematice cu Math.",
        "Stocarea IndexedDB."
      ],
      "correctIndex": 0,
      "explanation": "Web Workers rulează într-un context separat (DedicatedWorkerGlobalScope) și nu pot atinge direct DOM-ul pentru a preveni condiții de concurență (race conditions) pe UI."
    },
    "task": "Trimite obiectul '{ cmd: \"START\" }' către 'myWorker' folosind 'myWorker.postMessage({ cmd: \"START\" });'.",
    "starterCode": "// Trimite mesajul la worker\n",
    "expectedOutputPattern": "myWorker\\.postMessage\\(\\s*\\{\\s*cmd:\\s*[\"']START[\"']\\s*\\}\\s*\\);?",
    "hint": "Scrie myWorker.postMessage({ cmd: 'START' });"
  },
  {
    "id": "js-new-6",
    "track": "JavaScript",
    "division": "Informatică și Programare",
    "icon": "⚡",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 6: WebSockets — Comunicare Full-Duplex în Timp Real",
    "theory": "\n<p>Spre deosebire de protocolul HTTP care este de tip request-response (unidirecțional inițiat exclusiv de client), protocolul <strong>WebSocket (ws:// sau wss://)</strong> deschide un canal TCP persistent, bidirecțional și de latență minimă.</p>\n<h4>1. Handshake-ul WebSocket</h4>\n<p>Conexiunea începe ca o cerere HTTP normală cu header-ul <code>Upgrade: websocket</code>. După acceptarea serverului, conexiunea este transformată într-un socket binar continuu.</p>\n<h4>2. Ciclul de Viață al unui WebSocket în JS</h4>\n<pre><code>const ws = new WebSocket('wss://api.exemplu.ro/live');\nws.onopen = () => ws.send(JSON.stringify({ type: 'SUBSCRIBE' }));\nws.onmessage = (e) => console.log('Date primite:', JSON.parse(e.data));\nws.onerror = (err) => console.error('Eroare WS:', err);\nws.onclose = () => console.log('Conexiune închisă');\n</code></pre>\n",
    "glossary": [
      {
        "term": "WebSocket",
        "def": "Protocol de comunicație de rețea persistent și full-duplex peste o singură conexiune TCP."
      },
      {
        "term": "Full-Duplex",
        "def": "Capacitatea clientului și a serverului de a transmite date simultan în ambele sensuri."
      },
      {
        "term": "wss:// (Secure WebSocket)",
        "def": "Variantă criptată prin TLS a protocolului WebSocket (echivalentul HTTPS)."
      },
      {
        "term": "ws.send(data)",
        "def": "Metodă de transmitere instantanee a unui mesaj text sau binar către server."
      }
    ],
    "matchingPairs": [
      {
        "left": "new WebSocket('wss://...')",
        "right": "Inițiază conexiunea TCP persistentă criptată"
      },
      {
        "left": "ws.onopen",
        "right": "Eveniment declanșat la stabilirea cu succes a conexiunii"
      },
      {
        "left": "ws.onmessage",
        "right": "Eveniment declanșat la sosirea fiecărui pachet de la server"
      },
      {
        "left": "ws.send(payload)",
        "right": "Trimite date în timp real către server"
      }
    ],
    "quiz": {
      "question": "Care este avantajul major al WebSockets față de tehnica HTTP Polling (interogare periodică la fiecare 2 secunde)?",
      "options": [
        "Conexiunea rămâne permanent deschisă; serverul poate trimite date imediat ce apar, fără overhead-ul de headere HTTP repetate.",
        "WebSockets funcționează chiar dacă calculatorul este oprit complet.",
        "WebSockets permite descărcarea gratuită a fișierelor de pe orice site.",
        "Serverul nu mai are nevoie de adresă IP."
      ],
      "correctIndex": 0,
      "explanation": "Cu WebSockets nu mai există cereri HTTP repetate. Anteturile se transmit o singură dată la handshake, după care datele circulă instantaneu în ambele direcții cu overhead minim."
    },
    "task": "Trimite mesajul JSON 'JSON.stringify({ ping: true })' prin socket-ul 'ws' folosind 'ws.send()'.",
    "starterCode": "// Trimite date pe websocket\n",
    "expectedOutputPattern": "ws\\.send\\(JSON\\.stringify\\(\\s*\\{\\s*ping:\\s*true\\s*\\}\\s*\\)\\);?",
    "hint": "Scrie ws.send(JSON.stringify({ ping: true }));"
  },
  {
    "id": "js-new-7",
    "track": "JavaScript",
    "division": "Informatică și Programare",
    "icon": "⚡",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 7: Obiectele 'Proxy' și 'Reflect' — Metaprogramare & Reactivitate",
    "theory": "\n<p>Obiectul <strong>Proxy</strong> din ES6 permite împachetarea unui alt obiect și interceptarea (trapping) tuturor operațiunilor fundamentale: citire de proprietăți (<code>get</code>), atribuire (<code>set</code>), ștergere sau invocare de metode.</p>\n<h4>1. Cum funcționează un Trap</h4>\n<pre><code>const target = { price: 100 };\nconst reactive = new Proxy(target, {\n    set(obj, prop, value) {\n        console.log(`Proprietatea ${prop} s-a modificat în ${value}`);\n        return Reflect.set(obj, prop, value);\n    }\n});\n</code></pre>\n<h4>2. Motorul Reactivității Moderne</h4>\n<p>Proxy este fundamentul pe care sunt construite motoarele moderne de reactivitate din <strong>Vue 3</strong> și <strong>MobX</strong>, permițând detectarea automată a schimbărilor fără a folosi getteri/setteri manuali stufosi.</p>\n",
    "glossary": [
      {
        "term": "Proxy",
        "def": "Obiect wrapper ce interceptează și redefinește operațiunile fundamentale efectuate pe un obiect țintă."
      },
      {
        "term": "Trap",
        "def": "Metodă internă (ex: get, set, deleteProperty) definită în handlerul unui Proxy."
      },
      {
        "term": "Reflect",
        "def": "Obiect standard ce furnizează metode utilitare corespunzătoare fiecărui trap din Proxy."
      },
      {
        "term": "Reactive State",
        "def": "Stare care notifică automat sistemul de randare atunci când proprietățile sale sunt modificate."
      }
    ],
    "matchingPairs": [
      {
        "left": "get(target, prop, receiver)",
        "right": "Trap ce interceptează citirea oricărei proprietăți"
      },
      {
        "left": "set(target, prop, val, receiver)",
        "right": "Trap ce interceptează atribuirea de noi valori"
      },
      {
        "left": "Reflect.set(...)",
        "right": "Comportamentul nativ implicit de scriere pe obiect"
      },
      {
        "left": "Vue 3 Reactivity",
        "right": "Sistem construit în totalitate pe baza obiectelor Proxy"
      }
    ],
    "quiz": {
      "question": "Ce trebuie să returneze obligatoriu un trap de tip 'set' într-un Proxy când este setat în modul strict ('use strict')?",
      "options": [
        "Valoarea booleană 'true' dacă atribuirea a reușit (altfel aruncă TypeError).",
        "Numele proprietății modificate ca string.",
        "Numărul de secunde trecute de la pornire.",
        "Referința către obiectul window."
      ],
      "correctIndex": 0,
      "explanation": "Trap-ul 'set' trebuie să returneze un boolean; dacă returnează 'false' sau o valoare falsy în strict mode, JavaScript aruncă o excepție de tip TypeError."
    },
    "task": "Returnează rezultatul apelului 'Reflect.get(target, prop, receiver)' în interiorul unui trap 'get'.",
    "starterCode": "get(target, prop, receiver) {\n    return ",
    "expectedOutputPattern": "return\\s+Reflect\\.get\\(target,\\s*prop,\\s*receiver\\);?",
    "hint": "Scrie return Reflect.get(target, prop, receiver);"
  },
  {
    "id": "js-new-8",
    "track": "JavaScript",
    "division": "Informatică și Programare",
    "icon": "⚡",
    "level": "5. Arhitect / Exemplar",
    "xp": 70,
    "title": "Capitolul 8: Event Loop Aprofundat: Microtasks vs Macrotasks",
    "theory": "\n<p>Înțelegerea ordinii de execuție în JavaScript necesită cunoașterea distincției clare dintre <strong>Call Stack</strong>, <strong>Microtask Queue</strong> și <strong>Macrotask Queue (Task Queue)</strong>.</p>\n<h4>1. Microtasks au Prioritate Absolută</h4>\n<p>După ce Call Stack-ul se golește, Event Loop-ul execută <strong>TOATE</strong> microtask-urile existente în coadă înainte de a atinge următorul macrotask:</p>\n<ul>\n  <li><em>Microtasks</em>: <code>Promise.then()</code>, <code>Promise.catch()</code>, <code>async/await</code> (după reluare), <code>queueMicrotask()</code>, <code>MutationObserver</code>.</li>\n  <li><em>Macrotasks</em>: <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code> (Node.js), evenimente I/O, randarea UI a browserului.</li>\n</ul>\n<h4>2. Riscul de Starvation</h4>\n<p>Dacă o buclă generează continuu microtask-uri noi, browserul nu va ajunge niciodată la următorul macrotask sau la randarea cadrelor (60 FPS), blocând complet pagina.</p>\n",
    "glossary": [
      {
        "term": "Microtask Queue",
        "def": "Coadă de înaltă prioritate golită complet de Event Loop înainte de orice macrotask sau randare."
      },
      {
        "term": "Macrotask (Task)",
        "def": "Task obișnuit programat de setTimeout sau I/O, rulat câte unul per iterație a buclei de evenimente."
      },
      {
        "term": "queueMicrotask()",
        "def": "Funcție standard pentru programarea explicită a unei funcții pe coada de microtask-uri."
      },
      {
        "term": "UI Starvation",
        "def": "Blocarea randării grafice cauzată de un flux infinit de microtask-uri ce împiedică desenarea pe ecran."
      }
    ],
    "matchingPairs": [
      {
        "left": "Promise.resolve().then()",
        "right": "Programează o funcție pe Microtask Queue"
      },
      {
        "left": "setTimeout(fn, 0)",
        "right": "Programează o funcție pe Macrotask Queue"
      },
      {
        "left": "queueMicrotask(fn)",
        "right": "API standard pentru injectare directă în coada de microtask-uri"
      },
      {
        "left": "Golire completă a cozii",
        "right": "Regula strictă a Event Loop-ului pentru microtask-uri"
      }
    ],
    "quiz": {
      "question": "Care este ordinea exactă de afișare în consolă a codului:\nconsole.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);",
      "options": [
        "1, 4, 3, 2",
        "1, 2, 3, 4",
        "1, 3, 4, 2",
        "1, 4, 2, 3"
      ],
      "correctIndex": 0,
      "explanation": "Codul sincron rulează primul (1, 4). Apoi coada de microtask-uri este golită complet (3 de la Promise), și abia în final se extrage macrotask-ul din coadă (2 de la setTimeout)."
    },
    "task": "Programează funcția 'updateData' pe coada de microtask-uri folosind 'queueMicrotask(updateData);'.",
    "starterCode": "// Programează pe microtask queue\n",
    "expectedOutputPattern": "queueMicrotask\\(updateData\\);?",
    "hint": "Scrie queueMicrotask(updateData);"
  },
  {
    "id": "js-new-9",
    "track": "JavaScript",
    "division": "Informatică și Programare",
    "icon": "⚡",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 9: 'AbortController' & Anularea Cererilor HTTP Asincrone",
    "theory": "\n<p>Gestionarea corectă a cererilor asincrone în aplicațiile cu funcționalitate de căutare live (Search Typeahead) cere anularea cererilor anterioare pentru a preveni <em>Race Conditions</em> (când un răspuns mai lent al unei căutări vechi suprascrie rezultatul celei mai recente).</p>\n<h4>1. Obiectul AbortController</h4>\n<p>Instanțiem un controller: <code>const controller = new AbortController();</code> și transmitem proprietatea <code>signal</code> către opțiunile lui <code>fetch</code>:</p>\n<pre><code>fetch('/api/search?q=' + query, { signal: controller.signal })\n  .then(res => res.json())\n  .catch(err => {\n    if (err.name === 'AbortError') {\n      console.log('Cererea a fost anulată intenționat');\n    }\n  });\n</code></pre>\n<h4>2. Anularea cu 'controller.abort()'</h4>\n<p>Apelul <code>controller.abort()</code> oprește imediat conexiunea la nivel de rețea în browser și rejectează promisiunea cu o eroare cu numele <code>AbortError</code>.</p>\n",
    "glossary": [
      {
        "term": "AbortController",
        "def": "Obiect standard de control ce permite întreruperea operațiunilor DOM sau a cererilor asincrone fetch()."
      },
      {
        "term": "controller.signal",
        "def": "Obiect de tip AbortSignal transmis către fetch pentru stabilirea legăturii de anulare."
      },
      {
        "term": "AbortError",
        "def": "Eroare specifică aruncată de fetch() când cererea este întreruptă prin apelul abort()."
      },
      {
        "term": "Race Condition",
        "def": "Eroare de sincronizare în care rezultatul depinde necontrolat de ordinea de sosire a pachetelor de rețea."
      }
    ],
    "matchingPairs": [
      {
        "left": "const controller = new AbortController()",
        "right": "Creează un nou controler de anulare"
      },
      {
        "left": "fetch(url, { signal: controller.signal })",
        "right": "Leagă cererea fetch de semnalul de anulare"
      },
      {
        "left": "controller.abort()",
        "right": "Anulează instant conexiunea de rețea activă"
      },
      {
        "left": "err.name === 'AbortError'",
        "right": "Detectează că eroarea a fost cauzată de o anulare voluntară"
      }
    ],
    "quiz": {
      "question": "Ce excepție este aruncată de 'fetch()' atunci când operațiunea este întreruptă folosind apelul 'controller.abort()'?",
      "options": [
        "O eroare de tip DOMException având proprietatea name egală cu 'AbortError'.",
        "O eroare de tip SyntaxError.",
        "O eroare de tip NetworkTimeoutException.",
        "Nicio eroare; promisiunea rămâne înghețată la infinit."
      ],
      "correctIndex": 0,
      "explanation": "Browserul rejectează automat promisiunea returnată de fetch cu un DOMException special cu name: 'AbortError', permițând codului să ignore această eroare normală de anulare."
    },
    "task": "Anulează cererea activă apelând metoda 'abort()' pe instanța 'controller'.",
    "starterCode": "// Anulează cererea\n",
    "expectedOutputPattern": "controller\\.abort\\(\\);?",
    "hint": "Scrie controller.abort();"
  },
  {
    "id": "java-new-1",
    "track": "Java",
    "division": "Informatică și Programare",
    "icon": "☕",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 1: Colectoare Avansate în Java Streams ('groupingBy' & 'partitioningBy')",
    "theory": "\n<p>Metoda <code>Stream.collect()</code> este punctul culminant al procesării funcționale în Java. În loc de simple colecții <code>toList()</code>, clasa utilitară <code>Collectors</code> oferă operațiuni analitice de agregare sofisticate.</p>\n<h4>1. Gruparea Datelor cu 'Collectors.groupingBy'</h4>\n<p>Permite clasificarea elementelor după o cheie calculată:</p>\n<pre><code>Map<Department, List<Employee>> byDept = employees.stream()\n    .collect(Collectors.groupingBy(Employee::getDepartment));\n</code></pre>\n<h4>2. Partiționare Binară cu 'Collectors.partitioningBy'</h4>\n<p>Împarte fluxul în două grupuri distincte pe baza unui predicat boolean (<code>true</code> și <code>false</code>): <code>Map<Boolean, List<Student>> passed = students.stream().collect(Collectors.partitioningBy(s -> s.getGrade() >= 5));</code>.</p>\n",
    "glossary": [
      {
        "term": "Collectors.groupingBy()",
        "def": "Operație terminală ce grupează elementele unui flux într-un Map pe baza unei funcții de clasificare."
      },
      {
        "term": "Collectors.partitioningBy()",
        "def": "Caz special de grupare ce returnează un Map<Boolean, List<T>> pe baza unui predicat."
      },
      {
        "term": "Downstream Collector",
        "def": "Al doilea colector opțional transmis către groupingBy pentru reducerea fiecărui grup (ex: counting, averagingInt)."
      },
      {
        "term": "Method Reference (::)",
        "def": "Sintaxă compactă pentru transmiterea unei metode existente ca expresie lambda funcțională."
      }
    ],
    "matchingPairs": [
      {
        "left": "Collectors.groupingBy(User::getRole)",
        "right": "Grupează utilizatorii într-un Map după rolul lor"
      },
      {
        "left": "Collectors.partitioningBy(n -> n > 0)",
        "right": "Împarte numerele în pozitive (true) și negative (false)"
      },
      {
        "left": "Collectors.counting()",
        "right": "Numără elementele din fiecare subgrup"
      },
      {
        "left": "Collectors.joining(', ')",
        "right": "Concatenează stringurile separate prin virgulă"
      }
    ],
    "quiz": {
      "question": "Ce tip de date returnează apelul 'items.stream().collect(Collectors.partitioningBy(predicate))'?",
      "options": [
        "Map<Boolean, List<T>>",
        "List<T>",
        "Set<Boolean>",
        "HashMap<String, Integer>"
      ],
      "correctIndex": 0,
      "explanation": "partitioningBy returnează întotdeauna un Map cu chei booleene (true și false), valorile fiind listele elementelor corespunzătoare."
    },
    "task": "Grupează stream-ul 'users.stream()' după țară apelând '.collect(Collectors.groupingBy(User::getCountry));'.",
    "starterCode": "Map<String, List<User>> byCountry = users.stream()\n    ",
    "expectedOutputPattern": "\\.collect\\(Collectors\\.groupingBy\\(User::getCountry\\)\\);?",
    "hint": "Scrie .collect(Collectors.groupingBy(User::getCountry));"
  },
  {
    "id": "java-new-2",
    "track": "Java",
    "division": "Informatică și Programare",
    "icon": "☕",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 2: Programare Asincronă cu 'CompletableFuture'",
    "theory": "\n<p>Interfața clasică <code>Future<T></code> introdusă în Java 5 bloca firul apelant prin <code>get()</code>. În Java 8+, <strong>CompletableFuture&lt;T&gt;</strong> aduce un model reactiv non-blocant complet compatibil cu stilul funcțional.</p>\n<h4>1. Rularea Asincronă cu 'supplyAsync'</h4>\n<p>Metoda statică <code>CompletableFuture.supplyAsync(Supplier<U>)</code> execută calculul pe un thread din <code>ForkJoinPool.commonPool()</code>.</p>\n<h4>2. Înlănțuirea Operațiunilor ('thenApply' vs 'thenCompose')</h4>\n<p><code>thenApply(Function)</code> transformă rezultatul sincron ($T \rightarrow U$). <code>thenCompose</code> aplatizează viitoarele promisiuni (echivalentul monadic flatMap) când pasul următor este la rândul său o operație asincronă.</p>\n",
    "glossary": [
      {
        "term": "CompletableFuture<T>",
        "def": "Promisiune asincronă ce suportă transformări și compuneri non-blocante prin callback-uri funcționale."
      },
      {
        "term": "supplyAsync()",
        "def": "Lansează o sarcină pe pool-ul de thread-uri în fundal și returnează un CompletableFuture."
      },
      {
        "term": "thenApply()",
        "def": "Transformă valoarea calculată de viitor odată ce aceasta devine disponibilă."
      },
      {
        "term": "CompletableFuture.allOf()",
        "def": "Așteaptă finalizarea unui set arbitrar de viitoare asincrone rulate concurent."
      }
    ],
    "matchingPairs": [
      {
        "left": "CompletableFuture.supplyAsync(() -> fetch())",
        "right": "Execuție asincronă pe ForkJoinPool"
      },
      {
        "left": "future.thenApply(String::toUpperCase)",
        "right": "Transformare funcțională a valorii calculate"
      },
      {
        "left": "future.exceptionally(ex -> fallback)",
        "right": "Tratarea erorilor și furnizarea unei valori de rezervă"
      },
      {
        "left": "future.join()",
        "right": "Obține rezultatul aruncând excepții ne-verificate (unchecked)"
      }
    ],
    "quiz": {
      "question": "De ce este preferabil să folosești 'CompletableFuture.supplyAsync()' combinat cu callback-uri 'thenAccept()' în loc de 'Future.get()'?",
      "options": [
        "Nu blochează firul de execuție apelant, permițându-i să servească alte cereri până la sosirea rezultatului.",
        "CompletableFuture rulează doar pe plăci grafice GPU.",
        "Future.get() a fost șters complet din specificația Java 21.",
        "Reduce utilizarea memoriei RAM la 0 octeți."
      ],
      "correctIndex": 0,
      "explanation": "Future.get() este un apel sincron blocant. CompletableFuture funcționează reactiv prin înregistrarea de callback-uri ce rulează automat la finalizarea calculului."
    },
    "task": "Lansează o operație asincronă folosind 'CompletableFuture.supplyAsync(() -> \"OK\");'.",
    "starterCode": "CompletableFuture<String> future = ",
    "expectedOutputPattern": "CompletableFuture\\.supplyAsync\\(\\(\\)\\s*=>\\s*[\"']OK[\"']\\);?|CompletableFuture\\.supplyAsync\\(\\(\\)\\s*->\\s*[\"']OK[\"']\\);?",
    "hint": "Scrie CompletableFuture.supplyAsync(() -> \"OK\");"
  },
  {
    "id": "java-new-3",
    "track": "Java",
    "division": "Informatică și Programare",
    "icon": "☕",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 3: ThreadPools & 'ExecutorService' în Java Concurrency",
    "theory": "\n<p>Crearea unui fir de execuție nativ Java (<code>new Thread()</code>) este extrem de costisitoare pentru sistemul de operare (alocă 1 MB de Stack per thread și consumă syscall-uri). În producție se folosesc exclusiv <strong>Thread Pools</strong> administrate prin <code>ExecutorService</code>.</p>\n<h4>1. Tipuri de Pool-uri Standard</h4>\n<ul>\n  <li><code>Executors.newFixedThreadPool(int n)</code>: Menține un număr fix de thread-uri reutilizabile cu o coadă de așteptare <code>LinkedBlockingQueue</code>.</li>\n  <li><code>Executors.newCachedThreadPool()</code>: Creează thread-uri noi la nevoie și le distruge pe cele inactive după 60 de secunde.</li>\n</ul>\n<h4>2. Închiderea Curată (Graceful Shutdown)</h4>\n<p>Un ExecutorService nu se oprește de la sine; el menține JVM-ul activ. Este obligatoriu să apelăm <code>executor.shutdown()</code> și <code>awaitTermination()</code> la final.</p>\n",
    "glossary": [
      {
        "term": "ExecutorService",
        "def": "Framework de înalt nivel ce decuplează definirea task-urilor (Runnable/Callable) de execuția lor fizică pe thread-uri."
      },
      {
        "term": "FixedThreadPool",
        "def": "Pool cu un număr constant de thread-uri active ce previne epuizarea memoriei serverului."
      },
      {
        "term": "Callable<T>",
        "def": "Interfață similară cu Runnable, dar care poate returna o valoare și poate arunca excepții verificate."
      },
      {
        "term": "shutdown()",
        "def": "Inițiază oprirea ordonată: nu mai acceptă sarcini noi, dar le finalizează pe cele deja acceptate."
      }
    ],
    "matchingPairs": [
      {
        "left": "Executors.newFixedThreadPool(8)",
        "right": "Creează un pool dimensionat optim pentru 8 nuclee"
      },
      {
        "left": "executor.submit(callable)",
        "right": "Trimite un task și returnează un Future pentru rezultat"
      },
      {
        "left": "executor.shutdown()",
        "right": "Inițiază închiderea politicoasă a pool-ului"
      },
      {
        "left": "LinkedBlockingQueue",
        "right": "Coada de task-uri ce așteaptă un fir liber"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă o aplicație Java instanțiază un ExecutorService dar nu apelează niciodată 'shutdown()' pe acesta?",
      "options": [
        "Procesul JVM va continua să ruleze la infinit deoarece firele non-daemon din pool mențin procesul activ.",
        "Sistemul de operare forțează oprirea computerului după 10 minute.",
        "Baza de date este coruptă automat.",
        "Task-urile se rulează de două ori din greșeală."
      ],
      "correctIndex": 0,
      "explanation": "Firele create de ThreadPool-urile standard sunt fire non-daemon; JVM nu se poate opri atâta timp cât cel puțin un fir non-daemon este încă activ."
    },
    "task": "Creează un pool de 4 fire de execuție apelând 'Executors.newFixedThreadPool(4)'.",
    "starterCode": "ExecutorService executor = ",
    "expectedOutputPattern": "executor\\s*=\\s*Executors\\.newFixedThreadPool\\(4\\);?",
    "hint": "Scrie Executors.newFixedThreadPool(4);"
  },
  {
    "id": "java-new-4",
    "track": "Java",
    "division": "Informatică și Programare",
    "icon": "☕",
    "level": "4. Senior",
    "xp": 65,
    "title": "Capitolul 4: Virtual Threads în Java 21 (Project Loom)",
    "theory": "\n<p>Până la Java 21, fiecare fir de execuție Java era mapat 1:1 pe un fir al sistemului de operare (Platform Thread), limitând scalabilitatea unui server la câteva mii de conexiuni simultane din cauza memoriei consumate.</p>\n<h4>1. Ce sunt Firele Virtuale (Virtual Threads)?</h4>\n<p><strong>Virtual Threads</strong> sunt fire ultra-ușoare gestionate exclusiv de mașina virtuală JVM, nu de sistemul de operare. Un fir virtual consumă doar câțiva octeți de memorie, permițând crearea a <strong>milioane de fire simultane</strong> pe un singur calculator obișnuit!</p>\n<h4>2. Modelul Thread-Per-Request Revitalizat</h4>\n<p>Când un fir virtual execută o operație I/O blocantă (ex: o interogare JDBC sau un apel REST), JVM-ul îl demontează automat de pe firul hardware de operare (carrier thread) și îl montează înapoi instant când datele au sosit, oferind cod sincron simplu cu scalabilitatea asincronă a Node.js/Go.</p>\n",
    "glossary": [
      {
        "term": "Virtual Threads (JEP 444)",
        "def": "Fire ușoare gestionate de JVM în spațiul utilizator, permițând milioane de sarcini concurente fără overhead."
      },
      {
        "term": "Carrier Thread",
        "def": "Fir nativ al sistemului de operare pe care rulează temporar un fir virtual până la întâlnirea unei operații blocante."
      },
      {
        "term": "Project Loom",
        "def": "Inițiativa majoră din OpenJDK ce a transformat complet modelul de concurență din Java."
      },
      {
        "term": "Thread-Per-Request",
        "def": "Paradigma arhitecturală simplă unde fiecare cerere HTTP primește propriul său fir de execuție dedicat."
      }
    ],
    "matchingPairs": [
      {
        "left": "Executors.newVirtualThreadPerTaskExecutor()",
        "right": "Creează un executor ce alocă un fir virtual nou per sarcină"
      },
      {
        "left": "Thread.ofVirtual().start(runnable)",
        "right": "Lansează direct un fir virtual individual"
      },
      {
        "left": "Consum memorie: câțiva octeți",
        "right": "Față de 1 MB per Platform Thread clasic"
      },
      {
        "left": "Demontare automată la I/O",
        "right": "Eliberează firul carrier nativ fără blocare fizică"
      }
    ],
    "quiz": {
      "question": "De ce NU este recomandat să folosești un Thread Pool tradițional cu dimensiune fixă pentru Virtual Threads în Java 21?",
      "options": [
        "Deoarece firele virtuale sunt atât de ieftine încât crearea lor este instantanee; se creează un fir virtual nou pentru fiecare sarcină în loc să fie refolosite.",
        "Virtual Threads refuză să ruleze dacă sunt plasate într-un pool.",
        "Firele virtuale consumă prea multă memorie pe procesoarele Intel.",
        "Java 21 a eliminat complet interfața ExecutorService."
      ],
      "correctIndex": 0,
      "explanation": "Spre deosebire de firele OS scumpe, firele virtuale sunt proiectate pentru a fi efemere (aruncate după terminare). Pool-urile introduc overhead inutil în cazul lor."
    },
    "task": "Creează un executor de fire virtuale apelând 'Executors.newVirtualThreadPerTaskExecutor()'.",
    "starterCode": "ExecutorService vExecutor = ",
    "expectedOutputPattern": "vExecutor\\s*=\\s*Executors\\.newVirtualThreadPerTaskExecutor\\(\\);?",
    "hint": "Scrie Executors.newVirtualThreadPerTaskExecutor();"
  },
  {
    "id": "java-new-5",
    "track": "Java",
    "division": "Informatică și Programare",
    "icon": "☕",
    "level": "4. Senior",
    "xp": 65,
    "title": "Capitolul 5: Arhitectură Spring Boot — '@RestController' & Dependency Injection",
    "theory": "\n<p><strong>Spring Boot</strong> este cel mai utilizat framework enterprise din ecosistemul Java, oferind auto-configurare, server web integrat (Tomcat) și un container puternic de <strong>Inversion of Control (IoC)</strong>.</p>\n<h4>1. Componente & Injectarea Dependențelor</h4>\n<p>Adnotările cheie sunt <code>@Component</code>, <code>@Service</code> și <code>@Repository</code>. În Spring Boot modern, dependințele se injectează prin constructor (fără a fi nevoie de <code>@Autowired</code> explicit dacă există un singur constructor):</p>\n<pre><code>@Service\npublic class OrderService {\n    private final OrderRepository repository;\n\n    public OrderService(OrderRepository repository) {\n        this.repository = repository;\n    }\n}\n</code></pre>\n<h4>2. Controlere REST</h4>\n<p>Adnotarea <code>@RestController</code> combină <code>@Controller</code> și <code>@ResponseBody</code>, serializând automat rezultatele obiectelor Java în format JSON.</p>\n",
    "glossary": [
      {
        "term": "@RestController",
        "def": "Marchează o clasă ca punct de intrare HTTP unde toate metodele returnează JSON serializat automat."
      },
      {
        "term": "IoC (Inversion of Control)",
        "def": "Principiu prin care crearea și legarea obiectelor este delegată containerului Spring."
      },
      {
        "term": "Constructor Injection",
        "def": "Injectarea dependențelor prin argumentele constructorului; asigură imutabilitate și testabilitate facilă."
      },
      {
        "term": "@GetMapping / @PostMapping",
        "def": "Rutează cererile HTTP GET sau POST către metodele specifice din controller."
      }
    ],
    "matchingPairs": [
      {
        "left": "@RestController",
        "right": "Definește un controller web pentru servicii REST JSON"
      },
      {
        "left": "@GetMapping(\"/api/users\")",
        "right": "Rutează cererile HTTP GET pe calea specificată"
      },
      {
        "left": "@RequestBody UserDTO dto",
        "right": "Deserializare automată a corpului JSON din request"
      },
      {
        "left": "@PathVariable Long id",
        "right": "Extrage variabila numerică din segmentul URL"
      }
    ],
    "quiz": {
      "question": "Care este motivul pentru care comunitatea Spring recomandă injectarea dependențelor prin constructor în loc de '@Autowired' pe câmpuri private (field injection)?",
      "options": [
        "Permite declararea câmpurilor ca 'final' (imutabile) și simplifică scrierea testelor unitare fără a necesita un container Spring activ.",
        "Field injection este interzis pe sistemele de operare Windows.",
        "Constructor injection reduce viteza de execuție cu 200%.",
        "Adnotarea @Autowired este compatibilă doar cu Java 8."
      ],
      "correctIndex": 0,
      "explanation": "Constructor injection asigură că obiectul nu poate fi instanțiat într-o stare incompletă, permite câmpuri 'final' imutabile și facilitează instanțierea simplă cu mock-uri în testele unitare."
    },
    "task": "Adnotează clasa 'ApiController' cu '@RestController' pentru a expune un serviciu web REST.",
    "starterCode": "// Adaugă adnotarea Spring pe clasă\npublic class ApiController {\n}",
    "expectedOutputPattern": "@RestController\\s+public\\s+class\\s+ApiController",
    "hint": "Scrie @RestController deasupra declarației de clasă."
  },
  {
    "id": "java-new-6",
    "track": "Java",
    "division": "Informatică și Programare",
    "icon": "☕",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 6: JVM Internals — Memoria Heap, Metaspace & Garbage Collectors (G1, ZGC)",
    "theory": "\n<p>Arhitectura de memorie a mașinii virtuale Java (JVM) este împărțită în zone cu cicluri de viață distincte:</p>\n<h4>1. Structura Memoriei</h4>\n<ul>\n  <li><strong>Heap</strong>: Spațiul partajat unde sunt alocate toate obiectele create cu <code>new</code>. Este subdivizat în Young Generation (Eden + Survivor spaces) și Old/Tenured Generation.</li>\n  <li><strong>Metaspace</strong>: Memorie nativă off-heap (introdusă în Java 8 în locul PermGen) unde sunt stocate metadatele claselor compilate și bytecode-ul.</li>\n  <li><strong>Stack</strong>: Fiecare fir de execuție are propria stivă cu frame-uri de apel, variabile locale primitive și referințe către Heap.</li>\n</ul>\n<h4>2. Algoritmi Moderni de Garbage Collection</h4>\n<p><strong>G1 GC</strong> (Garbage-First) împarte heap-ul în regiuni egale și colectează cu prioritate zonele cu cel mai mult gunoi. <strong>ZGC</strong> (Z Garbage Collector) este un colector concurent de ultimă generație care garantează pauze de latență (STW - Stop-The-World) de <em>sub 1 milisecundă</em>, chiar și pe heap-uri uriașe de până la 16 Terabytes.</p>\n",
    "glossary": [
      {
        "term": "Metaspace",
        "def": "Zonă de memorie nativă din sistem unde JVM stochează definițiile și metadatele claselor încărcate."
      },
      {
        "term": "Stop-The-World (STW)",
        "def": "Pauză în care toate firele de aplicație sunt oprite temporar pentru ca GC să curețe memoria în siguranță."
      },
      {
        "term": "G1 GC",
        "def": "Colectorul implicit din Java modern, optimizat pentru balanță între throughput și pauze predictibile."
      },
      {
        "term": "ZGC (Z Garbage Collector)",
        "def": "Colector ultra-scăzut în latență (pauze < 1ms) ce efectuează compactarea concurent în timp ce aplicația rulează."
      }
    ],
    "matchingPairs": [
      {
        "left": "Young Generation (Eden)",
        "right": "Locația unde sunt alocate inițial noile obiecte"
      },
      {
        "left": "Old Generation (Tenured)",
        "right": "Obiecte cu durată lungă de viață ce au supraviețuit multiple cicluri GC"
      },
      {
        "left": "ZGC (-XX:+UseZGC)",
        "right": "Pauze Stop-The-World de sub 1 milisecundă"
      },
      {
        "left": "OutOfMemoryError: Metaspace",
        "right": "Epuizarea memoriei native rezervate pentru încărcarea claselor"
      }
    ],
    "quiz": {
      "question": "Ce distinge în mod revoluționar colectorul de gunoi ZGC (Z Garbage Collector) față de colectoarele tradiționale?",
      "options": [
        "Efectuează majoritatea fazelor de marcare și compactare în mod concurent cu execuția aplicației, garantând pauze STW sub 1ms.",
        "Nu șterge niciodată obiectele din memorie.",
        "ZGC rulează doar dacă serverul are mai puțin de 512 MB RAM.",
        "Elimină necesitatea de a folosi comanda java -jar."
      ],
      "correctIndex": 0,
      "explanation": "ZGC folosește pointeri colorați (colored pointers) și bariere de încărcare (load barriers) pentru a muta și compacta memoria în paralel cu aplicația, obținând pauze STW imperceptibile sub 1 milisecundă."
    },
    "task": "Specifică flag-ul JVM de activare a colectorului ZGC returnând stringul '-XX:+UseZGC'.",
    "starterCode": "public String getZgcFlag() {\n    return ",
    "expectedOutputPattern": "return\\s*[\"']-XX:\\+UseZGC[\"'];?",
    "hint": "Scrie return \"-XX:+UseZGC\";"
  },
  {
    "id": "sql-new-1",
    "track": "SQL",
    "division": "Informatică și Programare",
    "icon": "🗄️",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 1: Funcții Window de Clasament: 'ROW_NUMBER()', 'RANK()' și 'DENSE_RANK()'",
    "theory": "\n<p>Spre deosebire de <code>GROUP BY</code> care comprimă mai multe rânduri într-un singur rând agregat, <strong>Funcțiile Window</strong> calculează valori peste un set de rânduri (window frame), păstrând totodată identitatea fiecărui rând individual din rezultat.</p>\n<h4>1. Diferența dintre ROW_NUMBER, RANK și DENSE_RANK</h4>\n<p>Dacă avem două rânduri cu același salariu de pe poziția a doua:</p>\n<ul>\n  <li><code>ROW_NUMBER()</code>: Asignează valori strict unice fără duplicare (1, 2, 3, 4...).</li>\n  <li><code>RANK()</code>: Asignează același rang egalităților, dar <em>sare peste poziții</em> (1, 2, 2, 4...).</li>\n  <li><code>DENSE_RANK()</code>: Asignează același rang egalităților și <em>nu sare nicio poziție</em> (1, 2, 2, 3...).</li>\n</ul>\n<h4>2. Clauza 'PARTITION BY'</h4>\n<p>Sintaxa <code>OVER (PARTITION BY department_id ORDER BY salary DESC)</code> resetează numerotarea independent pentru fiecare departament în parte.</p>\n",
    "glossary": [
      {
        "term": "Window Function",
        "def": "Funcție SQL ce realizează calcule peste un set relaționat de rânduri fără a colapsa rezultatele."
      },
      {
        "term": "OVER (PARTITION BY ...)",
        "def": "Clauză ce împarte setul de date în ferestre independente de calcul."
      },
      {
        "term": "DENSE_RANK()",
        "def": "Rang continuu fără goluri numerice la întâlnirea valorilor egale."
      },
      {
        "term": "RANK()",
        "def": "Rang cu goluri proporționale cu numărul de elemente egale întâlnite anterior."
      }
    ],
    "matchingPairs": [
      {
        "left": "ROW_NUMBER() OVER (...)",
        "right": "Index secvențial strict unic per rând (1, 2, 3, 4)"
      },
      {
        "left": "RANK() OVER (...)",
        "right": "Rang cu sărituri peste numere la egalitate (1, 2, 2, 4)"
      },
      {
        "left": "DENSE_RANK() OVER (...)",
        "right": "Rang dens fără nicio săritură (1, 2, 2, 3)"
      },
      {
        "left": "PARTITION BY dept_id",
        "right": "Resetează calculul ferestrei pentru fiecare departament"
      }
    ],
    "quiz": {
      "question": "Ce valori de rang vor primi scorurile [100, 90, 90, 80] dacă folosim funcția 'DENSE_RANK() OVER (ORDER BY score DESC)'?",
      "options": [
        "1, 2, 2, 3",
        "1, 2, 3, 4",
        "1, 2, 2, 4",
        "1, 1, 1, 2"
      ],
      "correctIndex": 0,
      "explanation": "DENSE_RANK acordă același rang 2 celor două valori egale de 90, iar următorul scor (80) primește imediat rangul următor consecutiv, adică 3 (fără salt la 4)."
    },
    "task": "Scrie funcția 'DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC)' as rank_pos.",
    "starterCode": "SELECT name, salary,\n       ",
    "expectedOutputPattern": "DENSE_RANK\\(\\)\\s+OVER\\s*\\(\\s*PARTITION\\s+BY\\s+dept_id\\s+ORDER\\s+BY\\s+salary\\s+DESC\\s*\\)(?:\\s+AS\\s+rank_pos)?",
    "hint": "Scrie DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rank_pos"
  },
  {
    "id": "sql-new-2",
    "track": "SQL",
    "division": "Informatică și Programare",
    "icon": "🗄️",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 2: Funcții Window Analitice: 'LEAD()' și 'LAG()'",
    "theory": "\n<p>Funcțiile analitice <code>LEAD()</code> și <code>LAG()</code> permit accesarea valorilor din rândurile următoare sau anterioare direct din interogare, fără a recurge la auto-joncțiuni costisitoare (self-joins $O(n^2)$).</p>\n<h4>1. Sintaxa 'LAG(column, offset, default)'</h4>\n<p><code>LAG(amount, 1, 0) OVER (ORDER BY sale_date)</code> returnează valoarea vânzării din rândul imediat precedent. Este esențială pentru calculul creșterilor procentuale lunare (Month-over-Month growth).</p>\n<h4>2. Sintaxa 'LEAD()'</h4>\n<p>Funcționează identic, dar inspectează rândul din viitor (următorul pas temporal).</p>\n",
    "glossary": [
      {
        "term": "LAG()",
        "def": "Accesează o coloană dintr-un rând anterior la un decalaj (offset) specificat."
      },
      {
        "term": "LEAD()",
        "def": "Accesează o coloană dintr-un rând ulterior la un decalaj specificat."
      },
      {
        "term": "Self-Join Elimination",
        "def": "Înlocuirea joncțiunilor tabelei cu ea însăși prin funcții window mult mai rapide."
      },
      {
        "term": "Offset Default Value",
        "def": "Al treilea parametru opțional ce înlocuiește NULL-ul pentru primul/ultimul rând."
      }
    ],
    "matchingPairs": [
      {
        "left": "LAG(revenue, 1) OVER (...)",
        "right": "Extrage venitul din luna precedentă"
      },
      {
        "left": "LEAD(status, 1) OVER (...)",
        "right": "Extrage starea din pasul următor"
      },
      {
        "left": "val - LAG(val) OVER (...)",
        "right": "Calculează diferența absolută față de pasul anterior"
      },
      {
        "left": "LAG(price, 1, 0)",
        "right": "Returnează 0 în loc de NULL pentru primul rând"
      }
    ],
    "quiz": {
      "question": "Ce valoare returnează expresia 'LAG(amount, 1) OVER (ORDER BY date)' pe primul rând al rezultatului?",
      "options": [
        "NULL (deoarece nu există niciun rând anterior înaintea primului).",
        "0.",
        "Aruncă o excepție de tip IndexOutOfBoundsException.",
        "Valoarea din ultimul rând al tabelei."
      ],
      "correctIndex": 0,
      "explanation": "Pentru primul rând nu există un rând anterior, motiv pentru care LAG returnează NULL (cu excepția cazului în care se furnizează o valoare implicită ca al 3-lea parametru)."
    },
    "task": "Extrage valoarea precedentă a coloanei 'sales' folosind 'LAG(sales, 1) OVER (ORDER BY month)' as prev_sales.",
    "starterCode": "SELECT month, sales,\n       ",
    "expectedOutputPattern": "LAG\\(sales,\\s*1\\)\\s+OVER\\s*\\(\\s*ORDER\\s+BY\\s+month\\s*\\)(?:\\s+AS\\s+prev_sales)?",
    "hint": "Scrie LAG(sales, 1) OVER (ORDER BY month) AS prev_sales"
  },
  {
    "id": "sql-new-3",
    "track": "SQL",
    "division": "Informatică și Programare",
    "icon": "🗄️",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 3: Interogări Ierarhice cu Recursive CTE ('WITH RECURSIVE')",
    "theory": "\n<p>Datele ierarhice (organigrame de companie, structuri de directoare în fișiere, categorii cu subcategorii imbricate nelimitat) nu pot fi parcurse cu un număr fix de <code>JOIN</code>-uri. <strong>Recursive Common Table Expressions (WITH RECURSIVE)</strong> rezolvă această problemă în mod elegant.</p>\n<h4>1. Structura unui CTE Recursiv</h4>\n<p>Un CTE recursiv este format din două interogări unite prin <code>UNION ALL</code>:</p>\n<ol>\n  <li><strong>Termenul Ancoră (Anchor Member)</strong>: Selectează rădăcinile ierarhiei (ex: <code>WHERE manager_id IS NULL</code>).</li>\n  <li><strong>Termenul Recursiv (Recursive Member)</strong>: Face joncțiune între tabela sursă și numele propriului CTE, parcurgând nivel cu nivel până când interogarea nu mai produce rânduri noi.</li>\n</ol>\n",
    "glossary": [
      {
        "term": "WITH RECURSIVE",
        "def": "Directivă SQL ce permite unei tabele temporare (CTE) să se auto-referențieze recursiv."
      },
      {
        "term": "Anchor Member",
        "def": "Interogarea de bază non-recursivă ce furnizează setul de pornire (rădăcinile ierarhiei)."
      },
      {
        "term": "Recursive Member",
        "def": "Interogarea ce unește noile noduri copii cu rezultatele produse la pasul anterior."
      },
      {
        "term": "UNION ALL",
        "def": "Operator obligatoriu ce unește ancora cu termenul recursiv fără costul dedublicării."
      }
    ],
    "matchingPairs": [
      {
        "left": "WITH RECURSIVE org_chart AS (...)",
        "right": "Inițializează CTE-ul recursiv"
      },
      {
        "left": "SELECT id, name FROM emp WHERE mgr IS NULL",
        "right": "Termenul ancoră (rădăcina ierarhiei)"
      },
      {
        "left": "JOIN org_chart ON emp.mgr = org_chart.id",
        "right": "Termenul recursiv ce coboară în arbore"
      },
      {
        "left": "depth + 1",
        "right": "Calculul nivelului de adâncime în ierarhie"
      }
    ],
    "quiz": {
      "question": "Când se oprește execuția unui Recursive CTE în motorul de baze de date?",
      "options": [
        "Când iterația curentă a termenului recursiv nu mai returnează niciun rând nou.",
        "Exact după 10 secunde de la pornire.",
        "După ce toate tabelele din baza de date au fost șterse.",
        "Numai dacă utilizatorul apasă tasta ESC."
      ],
      "correctIndex": 0,
      "explanation": "Execuția continuă recursiv până când termenul recursiv produce un set vid (0 rânduri), moment în care algoritmul își atinge condiția naturală de oprire."
    },
    "task": "Inițializează un CTE recursiv numit 'hierarchy' scriind sintaxa de debut 'WITH RECURSIVE hierarchy AS ('.",
    "starterCode": "// Scrie începutul CTE-ului recursiv\n",
    "expectedOutputPattern": "WITH\\s+RECURSIVE\\s+hierarchy\\s+AS\\s*\\(",
    "hint": "Scrie WITH RECURSIVE hierarchy AS ("
  },
  {
    "id": "sql-new-4",
    "track": "SQL",
    "division": "Informatică și Programare",
    "icon": "🗄️",
    "level": "5. Arhitect / Exemplar",
    "xp": 70,
    "title": "Capitolul 4: Tranzacții, ACID & Niveluri de Izolare (Dirty, Non-Repeatable, Phantom Reads)",
    "theory": "\n<p>O <strong>tranzacție</strong> este o unitate logică indivizibilă de lucru garantată de proprietățile <strong>ACID</strong> (Atomicity, Consistency, Isolation, Durability).</p>\n<h4>1. Anomalii de Concurență</h4>\n<ul>\n  <li><em>Dirty Read</em>: Tranzacția A citește date modificate de Tranzacția B, dar B dă <code>ROLLBACK</code>.</li>\n  <li><em>Non-Repeatable Read</em>: Tranzacția A citește același rând de două ori și găsește valori diferite deoarece Tranzacția B a făcut <code>UPDATE</code> și <code>COMMIT</code> între timp.</li>\n  <li><em>Phantom Read</em>: Tranzacția A re-execută o interogare de tip interval și găsește rânduri noi inserate de B.</li>\n</ul>\n<h4>2. Nivelurile de Izolare SQL Standard</h4>\n<ol>\n  <li><code>READ UNCOMMITTED</code>: Permite toate anomaliile (inclusiv Dirty Reads).</li>\n  <li><code>READ COMMITTED</code> (implicit în Postgres): Previne Dirty Reads.</li>\n  <li><code>REPEATABLE READ</code>: Previne Dirty Reads și Non-Repeatable Reads.</li>\n  <li><code>SERIALIZABLE</code>: Cel mai strict nivel; previne absolut toate anomaliile emulând execuția serială printr-un mecanism SSI (Serializable Snapshot Isolation).</li>\n</ol>\n",
    "glossary": [
      {
        "term": "ACID",
        "def": "Atomicitate (totul sau nimic), Consistență (reguli de integritate), Izolare, Durabilitate (pe disc)."
      },
      {
        "term": "Dirty Read",
        "def": "Citirea datelor ne-comise dintr-o tranzacție concurentă ce ar putea fi anulată."
      },
      {
        "term": "REPEATABLE READ",
        "def": "Nivel de izolare ce garantează că recitirea aceluiași rând va produce exact aceleași date."
      },
      {
        "term": "SERIALIZABLE",
        "def": "Nivel de izolare maxim ce garantează absența oricărei anomalii de concurență prin MVCC și blocaje."
      }
    ],
    "matchingPairs": [
      {
        "left": "READ COMMITTED",
        "right": "Nivelul implicit în PostgreSQL ce previne Dirty Reads"
      },
      {
        "left": "SERIALIZABLE",
        "right": "Izolare totală ce anihilează și Phantom Reads"
      },
      {
        "left": "ROLLBACK",
        "right": "Anulează toate modificările din tranzacția curentă"
      },
      {
        "left": "SAVEPOINT point1",
        "right": "Permite rollback parțial la un punct intermediar"
      }
    ],
    "quiz": {
      "question": "Ce anomalie de concurență este prevenită prin trecerea de la nivelul de izolare 'READ COMMITTED' la 'REPEATABLE READ'?",
      "options": [
        "Non-Repeatable Read (citirea repetată a aceluiași rând garantează aceleași valori chiar dacă altcineva a dat COMMIT).",
        "Epuizarea memoriei hard diskului.",
        "Ștergerea tabelelor de sistem.",
        "Nu previne nicio anomalie suplimentară."
      ],
      "correctIndex": 0,
      "explanation": "În REPEATABLE READ, tranzacția vede un snapshot al bazei de date de la începutul său, astfel încât modificările de tip UPDATE/DELETE comise de alte tranzacții nu afectează valorile deja citite."
    },
    "task": "Setează nivelul de izolare al tranzacției la 'SERIALIZABLE' scriind 'SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;'.",
    "starterCode": "// Setează nivelul de izolare\n",
    "expectedOutputPattern": "SET\\s+TRANSACTION\\s+ISOLATION\\s+LEVEL\\s+SERIALIZABLE;?",
    "hint": "Scrie SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;"
  },
  {
    "id": "sql-new-5",
    "track": "SQL",
    "division": "Informatică și Programare",
    "icon": "🗄️",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 5: Optimizare Interogări: 'EXPLAIN ANALYZE' & Planuri de Execuție",
    "theory": "\n<p>Pentru a înțelege de ce o interogare este lentă, folosim comanda <code>EXPLAIN ANALYZE</code>. Aceasta nu doar estimează planul, ci <strong>execută efectiv interogarea</strong> pe server și afișează timpii reali măsurați în milisecunde și numărul de pagini de memorie (buffers) citite.</p>\n<h4>1. Noduri de Scanare</h4>\n<ul>\n  <li><code>Seq Scan (Sequential Scan)</code>: Citește fiecare bloc al tabelei de la cap la coadă ($O(n)$). Acceptabil pentru tabele mici, catastrofal pentru milioane de rânduri.</li>\n  <li><code>Index Scan</code>: Caută cheile în arborele B-Tree al indexului și apoi citește paginile de pe disc ($O(\\log n)$).</li>\n  <li><code>Index Only Scan</code>: Toate coloanele cerute în <code>SELECT</code> se află deja în index (Covering Index), eliminând complet citirea din tabelă (Heap Fetch = 0).</li>\n</ul>\n<h4>2. Buffers: Shared Hit vs Read</h4>\n<p><code>shared hit</code> înseamnă că datele erau deja în memoria RAM (Buffer Pool). <code>read</code> înseamnă citire fizică lentă de pe discul I/O.</p>\n",
    "glossary": [
      {
        "term": "EXPLAIN ANALYZE",
        "def": "Comandă ce execută interogarea și afișează planul real cu costuri, timpi și operațiuni de buffer."
      },
      {
        "term": "Sequential Scan",
        "def": "Parcurgerea secvențială a fiecărui bloc de pe disc din tabela respectivă."
      },
      {
        "term": "Index Only Scan",
        "def": "Scenariu optim unde interogarea este rezolvată exclusiv din datele conținute în index."
      },
      {
        "term": "Buffer Pool Hit",
        "def": "Găsirea paginii de date direct în memoria cache RAM a bazei de date."
      }
    ],
    "matchingPairs": [
      {
        "left": "EXPLAIN (ANALYZE, BUFFERS)",
        "right": "Afișează timpii reali și paginile de RAM citite"
      },
      {
        "left": "Seq Scan",
        "right": "Citire liniară completă a tabelei din cauza lipsei indexului"
      },
      {
        "left": "Index Only Scan",
        "right": "Performanță maximă: zero citiri din tabela fizică"
      },
      {
        "left": "shared hit",
        "right": "Blocuri găsite direct în memoria cache fără acces la disc"
      }
    ],
    "quiz": {
      "question": "Ce indică un nod 'Index Only Scan' în raportul generat de 'EXPLAIN ANALYZE'?",
      "options": [
        "Toate datele necesare interogării au fost extrase direct din structura indexului, fără a mai accesa tabela principală (Heap).",
        "Interogarea a eșuat din lipsă de memorie RAM.",
        "Indexul a fost șters automat de motorul bazei de date.",
        "Baza de date a scanat întreaga tabelă de două ori."
      ],
      "correctIndex": 0,
      "explanation": "Un Index Only Scan este scenariul ideal de înaltă performanță: indexul conține toate coloanele solicitate în interogare, eliminând complet operațiunile I/O către paginile de date ale tabelei."
    },
    "task": "Rulează analiza de execuție cu măsurare de timpi și buffere pe interogare scriind 'EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders;'.",
    "starterCode": "// Completează comanda EXPLAIN\n",
    "expectedOutputPattern": "EXPLAIN\\s+\\(ANALYZE,\\s*BUFFERS\\)\\s+SELECT\\s+\\*\\s+FROM\\s+orders;?",
    "hint": "Scrie EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders;"
  },
  {
    "id": "fr-new-1",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Începător / A1",
    "xp": 30,
    "title": "Capitolul 1: Verbe Regulate de Grupa 1 (-er) la Prezent",
    "theory": "\n<p>În limba franceză, verbele de grupa 1 (terminația <code>-er</code> la infinitiv) reprezintă peste 80% din totalul verbelor (ex: <em>parler</em>, <em>habiter</em>, <em>aimer</em>, <em>travailler</em>).</p>\n<h4>1. Terminațiile Prezentului</h4>\n<p>Se elimină <code>-er</code> de la infinitiv și se adaugă terminațiile: <strong>-e, -es, -e, -ons, -ez, -ent</strong>.</p>\n<pre><code>Je parle        Nous parlons\nTu parles       Vous parlez\nIl/Elle parle   Ils/Elles parlent\n</code></pre>\n<h4>2. Regula Fonetică Esențială</h4>\n<p>Terminațiile <code>-e</code>, <code>-es</code> și <code>-ent</code> sunt <strong>complet mute</strong> (se pronunță identic: [parl]). Doar terminațiile pentru <em>nous</em> (-ons) și <em>vous</em> (-ez) au sunet distinct.</p>\n",
    "glossary": [
      {
        "term": "Verbes du 1er groupe",
        "def": "Verbe regulate cu infinitivul în -er (cu excepția verbului neregulat aller)."
      },
      {
        "term": "Terminaisons muettes",
        "def": "Terminațiile -e, -es, -ent care nu se pronunță vocal în limba franceză vorbită."
      },
      {
        "term": "Élision (J')",
        "def": "Eliziunea lui 'Je' în 'J'' în fața unei vocale sau a unui h mut (ex: J'habite)."
      },
      {
        "term": "Radical",
        "def": "Rădăcina verbului rămasă după îndepărtarea terminației de infinitiv -er."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je parle français",
        "right": "Eu vorbesc franceză"
      },
      {
        "left": "Nous habitons à Paris",
        "right": "Noi locuim la Paris"
      },
      {
        "left": "Vous travaillez ici",
        "right": "Dumneavoastră lucrați aici"
      },
      {
        "left": "Ils aiment la musique",
        "right": "Ei iubesc muzica"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă de prezent a verbului 'habiter' pentru pronumele 'nous'?",
      "options": [
        "habitons (Nous habitons)",
        "habitez",
        "habitent",
        "habites"
      ],
      "correctIndex": 0,
      "explanation": "Terminația specifică pentru persoana I plural (nous) la verbele de grupa 1 este întotdeauna '-ons'."
    },
    "task": "Completează conjugarea pentru 'Je' a verbului 'parler' scriind 'Je parle roumain et français.'.",
    "starterCode": "// Completează propoziția\n",
    "expectedOutputPattern": "Je\\s+parle\\s+roumain\\s+et\\s+français\\.?",
    "hint": "Scrie Je parle roumain et français."
  },
  {
    "id": "fr-new-2",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Începător / A1",
    "xp": 35,
    "title": "Capitolul 2: Articole Partitive (du, de la, de l', des)",
    "theory": "\n<p>În limba franceză, când vorbim despre cantități nedeterminate sau alimente și substanțe nenumărabile (apă, pâine, curaj, cafea), este <strong>obligatorie</strong> utilizarea articolelor partitive.</p>\n<h4>1. Formele Articolului Partitiv</h4>\n<ul>\n  <li><code>du</code> — masculin singular (de + le): <em>du pain</em>, <em>du café</em>.</li>\n  <li><code>de la</code> — feminin singular: <em>de la viande</em>, <em>de la salade</em>.</li>\n  <li><code>de l'</code> — în fața unei vocale sau a unui h mut: <em>de l'eau</em>, <em>de l'huile</em>.</li>\n  <li><code>des</code> — plural (de + les): <em>des légumes</em>, <em>des pâtes</em>.</li>\n</ul>\n<h4>2. Regula Negației Stricte</h4>\n<p>La forma negativă, toate articolele partitive devin simplu <strong>de</strong> (sau <strong>d'</strong>): <em>Je bois du café</em> $\rightarrow$ <em>Je ne bois pas <strong>de</strong> café</em>.</p>\n",
    "glossary": [
      {
        "term": "Article partitif",
        "def": "Articol folosit pentru a desemna o parte dintr-o substanță nenumărabilă."
      },
      {
        "term": "du (de + le)",
        "def": "Articol partitiv masculin singular."
      },
      {
        "term": "de l'",
        "def": "Formă de eliziune folosită înaintea cuvintelor care încep cu vocală sau h mut."
      },
      {
        "term": "Transformare la negație",
        "def": "Regula prin care du, de la, des devin 'de' după negația 'ne... pas'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je bois du café",
        "right": "Beau cafea (masculin)"
      },
      {
        "left": "Elle mange de la salade",
        "right": "Ea mănâncă salată (feminin)"
      },
      {
        "left": "Je voudrais de l'eau",
        "right": "Aș dori apă (în fața vocalei)"
      },
      {
        "left": "Je n'ai pas de sucre",
        "right": "Nu am zahăr (de la negație)"
      }
    ],
    "quiz": {
      "question": "Cum se transformă propoziția 'Je mange du pain' la forma negativă?",
      "options": [
        "Je ne mange pas de pain.",
        "Je ne mange pas du pain.",
        "Je ne mange pas des pains.",
        "Je mange pas pain."
      ],
      "correctIndex": 0,
      "explanation": "După negația 'ne... pas', articolele partitive (du, de la, des) se transformă întotdeauna în prepoziția simplă 'de'."
    },
    "task": "Scrie propoziția 'Je voudrais de l'eau, s'il vous plaît.' folosind articolul partitiv pentru apă.",
    "starterCode": "// Cere apă politicos\n",
    "expectedOutputPattern": "Je\\s+voudrais\\s+de\\s+l['’]eau,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
    "hint": "Scrie Je voudrais de l'eau, s'il vous plaît."
  },
  {
    "id": "fr-new-3",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Junior / A2",
    "xp": 40,
    "title": "Capitolul 3: Passé Composé cu Auxiliarul „Avoir”",
    "theory": "\n<p><strong>Passé Composé</strong> exprimă o acțiune punctuală finalizată în trecut. Pentru majoritatea covârșitoare a verbelor, se formează cu auxiliarul <strong>avoir</strong> conjugat la prezent + <strong>participiul trecut (participe passé)</strong> al verbului.</p>\n<h4>1. Formarea Participiului Trecut</h4>\n<ul>\n  <li>Verbe în <code>-er</code> $\rightarrow$ <code>-é</code> (<em>parler $\rightarrow$ parlé</em>, <em>manger $\rightarrow$ mangé</em>).</li>\n  <li>Verbe în <code>-ir</code> $\rightarrow$ <code>-i</code> (<em>finir $\rightarrow$ fini</em>, <em>choisir $\rightarrow$ choisi</em>).</li>\n  <li>Verbe neregulate: <em>avoir $\rightarrow$ eu</em>, <em>être $\rightarrow$ été</em>, <em>faire $\rightarrow$ fait</em>, <em>voir $\rightarrow$ vu</em>.</li>\n</ul>\n<h4>2. Structura Propoziției</h4>\n<p><em>J'ai mangé un croissant</em> (Am mâncat un croissant). La negație, particulele <code>ne... pas</code> încadrează auxiliarul: <em>Je n'ai pas mangé</em>.</p>\n",
    "glossary": [
      {
        "term": "Passé Composé",
        "def": "Timpul trecut compus cel mai utilizat în limba franceză pentru acțiuni încheiate."
      },
      {
        "term": "Auxiliaire avoir",
        "def": "Verbul 'a avea' conjugat la prezent (ai, as, a, avons, avez, ont) ca bază a timpului."
      },
      {
        "term": "Participe passé",
        "def": "Forma verbală de participiu trecut (ex: parlé, fini, fait, vu)."
      },
      {
        "term": "Négation au passé",
        "def": "Plasarea lui 'ne... pas' în jurul auxiliarului avoir (n'ai pas)."
      }
    ],
    "matchingPairs": [
      {
        "left": "J'ai parlé avec lui",
        "right": "Am vorbit cu el"
      },
      {
        "left": "Nous avons fini le projet",
        "right": "Am terminat proiectul"
      },
      {
        "left": "Elle a fait ses devoirs",
        "right": "Ea și-a făcut temele"
      },
      {
        "left": "Tu n'as pas vu le film",
        "right": "Nu ai văzut filmul"
      }
    ],
    "quiz": {
      "question": "Care este participiul trecut (participe passé) corect al verbului 'faire' în franceză?",
      "options": [
        "fait (J'ai fait)",
        "faisé",
        "fais",
        "faise"
      ],
      "correctIndex": 0,
      "explanation": "'Faire' este un verb neregulat al cărui participiu trecut este 'fait'."
    },
    "task": "Scrie propoziția la Passé Composé 'J'ai fini mon travail.' (Mi-am terminat munca).",
    "starterCode": "// Completează propoziția\n",
    "expectedOutputPattern": "J['’]ai\\s+fini\\s+mon\\s+travail\\.?",
    "hint": "Scrie J'ai fini mon travail."
  },
  {
    "id": "fr-new-4",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Junior / A2",
    "xp": 40,
    "title": "Capitolul 4: Passé Composé cu Auxiliarul „Être” & Acordul Participiului",
    "theory": "\n<p>Un grup restrâns de verbe (verbele de mișcare și schimbare a stării — cunoscute ca <em>La maison d'être</em>) plus <strong>toate verbele reflexive</strong> formează Passé Composé cu auxiliarul <strong>être</strong>.</p>\n<h4>1. Verbele cu 'être'</h4>\n<p><em>aller</em>, <em>venir</em>, <em>arriver</em>, <em>partir</em>, <em>entrer</em>, <em>sortir</em>, <em>naître</em>, <em>mourir</em>, <em>rester</em>, <em>tomber</em>.</p>\n<h4>2. Regula Acordului Obligatoriu</h4>\n<p>La timpurile compuse cu <code>être</code>, participiul trecut <strong>se acordă obligatoriu în gen și număr</strong> cu subiectul:</p>\n<ul>\n  <li>Masculin plural: adaugă <code>-s</code> (<em>Ils sont allés</em>).</li>\n  <li>Feminin singular: adaugă <code>-e</code> (<em>Elle est allée</em>).</li>\n  <li>Feminin plural: adaugă <code>-es</code> (<em>Elles sont allées</em>).</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Verbes de mouvement (Être)",
        "def": "Cele 14 verbe fundamentale de mișcare ce folosesc obligatoriu auxiliarul être."
      },
      {
        "term": "Accord du participe",
        "def": "Modificarea terminației participiului trecut pentru a se potrivi în gen și număr cu subiectul."
      },
      {
        "term": "Verbes pronominaux",
        "def": "Verbe reflexive (se lever, se coucher) conjugate exclusiv cu être la trecut."
      },
      {
        "term": "Maison d'être",
        "def": "Mnemonică vizuală franceză pentru învățarea verbelor de mișcare pereche (venir/aller etc)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Il est allé au bureau",
        "right": "El a mers la birou (masculin singular)"
      },
      {
        "left": "Elle est allée au bureau",
        "right": "Ea a mers la birou (feminin singular cu -e)"
      },
      {
        "left": "Ils sont partis tôt",
        "right": "Ei au plecat devreme (masculin plural cu -s)"
      },
      {
        "left": "Elles sont arrivées",
        "right": "Ele au sosit (feminin plural cu -es)"
      }
    ],
    "quiz": {
      "question": "Cum se acordă corect participiul verbului 'partir' în propoziția 'Marie et Sophie sont ...'?",
      "options": [
        "parties (feminin plural: acord cu -es)",
        "parti",
        "partis",
        "partie"
      ],
      "correctIndex": 0,
      "explanation": "Subiectul este format din două persoane de gen feminin (Marie et Sophie = Elles), așadar participiul trecut primește terminația '-es': parties."
    },
    "task": "Scrie propoziția la trecut 'Elle est arrivée à l'heure.' (Ea a sosit la timp) cu acordul feminin.",
    "starterCode": "// Scrie propoziția cu acord\n",
    "expectedOutputPattern": "Elle\\s+est\\s+arriv[ée]e\\s+[àa]\\s+l['’]heure\\.?",
    "hint": "Scrie Elle est arrivée à l'heure."
  },
  {
    "id": "fr-new-5",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Middle / B1",
    "xp": 45,
    "title": "Capitolul 5: L'Imparfait vs Passé Composé în Narațiuni",
    "theory": "\n<p>Stăpânirea timpurilor trecute în franceză depinde de alternanța dintre <strong>L'Imparfait</strong> (Imperfect) și <strong>Passé Composé</strong>.</p>\n<h4>1. L'Imparfait: Decorul, Durata și Rutina</h4>\n<p>Descrie circumstanțele, stările sufletești, vremea sau acțiuni repetitive din trecut fără un început/sfârșit precis: <em>Il faisait beau</em> (Era vreme frumoasă), <em>Quand j'étais petit</em> (Când eram mic).</p>\n<h4>2. Passé Composé: Evenimentul Punctual</h4>\n<p>Exprimă acțiunea punctuală care întrerupe starea din fundal: <em>Je dormais (imparfait) quand le téléphone a sonné (passé composé)</em>.</p>\n",
    "glossary": [
      {
        "term": "L'Imparfait",
        "def": "Timp trecut folosit pentru descrieri, stări continue și acțiuni habituale în trecut."
      },
      {
        "term": "Terminaisons de l'imparfait",
        "def": "Terminațiile universale: -ais, -ais, -ait, -ions, -iez, -aient."
      },
      {
        "term": "Action de premier plan",
        "def": "Eveniment punctual rapid exprimat prin Passé Composé."
      },
      {
        "term": "Arrière-plan narratif",
        "def": "Cadrul narativ și descrierea de fundal exprimată prin Imparfait."
      }
    ],
    "matchingPairs": [
      {
        "left": "Il faisait froid",
        "right": "Era frig (descriere de fundal - Imparfait)"
      },
      {
        "left": "Soudain, il est tombé",
        "right": "Deodată, a căzut (acțiune punctuală - Passé Composé)"
      },
      {
        "left": "Chaque matin, je buvais",
        "right": "În fiecare dimineață beam (obicei repetat - Imparfait)"
      },
      {
        "left": "Pendant que je lisais",
        "right": "În timp ce citeam (acțiune continuă în derulare)"
      }
    ],
    "quiz": {
      "question": "În fraza 'Quand j'étais petit, je ... au football tous les jours', ce formă este corectă pentru a exprima o rutină repetată?",
      "options": [
        "jouais (L'Imparfait - exprimă un obicei repetat)",
        "ai joué (Passé Composé)",
        "joue (Présent)",
        "jouer"
      ],
      "correctIndex": 0,
      "explanation": "Expresia 'tous les jours' semnalează o acțiune repetată și habituală în trecut, caz clasic în care se folosește L'Imparfait (jouais)."
    },
    "task": "Completează fraza cu forma de imperfect a verbului être: 'Quand j'étais jeune, j'aimais voyager.'.",
    "starterCode": "Quand j'",
    "expectedOutputPattern": "Quand\\s+j['’][ée]tais\\s+jeune,\\s*j['’]aimais\\s+voyager\\.?",
    "hint": "Scrie Quand j'étais jeune, j'aimais voyager."
  },
  {
    "id": "fr-new-6",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Middle / B1",
    "xp": 50,
    "title": "Capitolul 6: Pronumele Relative: 'Qui', 'Que', 'Où' și 'Dont'",
    "theory": "\n<p>Pronumele relative leagă două propoziții simple într-o frază complexă, evitând repetiția substantivului (antecedentul).</p>\n<h4>1. Qui vs Que</h4>\n<ul>\n  <li><code>Qui</code> este <strong>subiect</strong> (urmat întotdeauna de un verb): <em>L'homme <strong>qui</strong> parle est mon professeur</em>.</li>\n  <li><code>Que</code> este <strong>obiect direct</strong> (urmat de subiect + verb): <em>Le livre <strong>que</strong> je lis est passionnant</em>.</li>\n</ul>\n<h4>2. Où și Dont</h4>\n<ul>\n  <li><code>Où</code> indică locul sau timpul: <em>La ville <strong>où</strong> j'habite</em>.</li>\n  <li><code>Dont</code> înlocuiește un complement introdus de prepoziția <strong>de</strong> (parler de, avoir besoin de): <em>Le projet <strong>dont</strong> j'ai besoin</em>.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Pronom relatif",
        "def": "Cuvânt de legătură ce preia rolul unui antecedent dintr-o propoziție anterioară."
      },
      {
        "term": "Qui (Subiect)",
        "def": "Pronume relativ ce îndeplinește funcția de subiect în propoziția secundară."
      },
      {
        "term": "Que (COD)",
        "def": "Pronume relativ ce îndeplinește funcția de complement direct."
      },
      {
        "term": "Dont (de + substantiv)",
        "def": "Pronume relativ specific ce înlocuiește expresii construite cu prepoziția 'de'."
      }
    ],
    "matchingPairs": [
      {
        "left": "C'est la femme qui travaille ici",
        "right": "Qui este subiectul verbului travaille"
      },
      {
        "left": "C'est le film que j'ai vu",
        "right": "Que este obiectul direct al lui j'ai vu"
      },
      {
        "left": "Le pays où je suis né",
        "right": "Où indică locul nașterii"
      },
      {
        "left": "Ce dont j'ai peur",
        "right": "Dont înlocuiește 'avoir peur de'"
      }
    ],
    "quiz": {
      "question": "Ce pronume relativ completează corect fraza: 'C'est un problème ... nous avons parlé hier' (a vorbi despre = parler de)?",
      "options": [
        "dont (deoarece verbul este 'parler de')",
        "que",
        "qui",
        "où"
      ],
      "correctIndex": 0,
      "explanation": "Verbul 'parler' cere prepoziția 'de' (parler de quelque chose). Complementele cu 'de' sunt înlocuite întotdeauna de pronumele relativ 'dont'."
    },
    "task": "Completează fraza cu pronumele relativ 'dont': 'Voici le livre dont tout le monde parle.'.",
    "starterCode": "Voici le livre ",
    "expectedOutputPattern": "Voici\\s+le\\s+livre\\s+dont\\s+tout\\s+le\\s+monde\\s+parle\\.?",
    "hint": "Scrie Voici le livre dont tout le monde parle."
  },
  {
    "id": "fr-new-7",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "4. Senior / B2",
    "xp": 55,
    "title": "Capitolul 7: Le Subjonctif Présent — Necesitate, Dorință & Îndoială",
    "theory": "\n<p><strong>Subjonctif</strong> nu este un timp, ci un <strong>mod verbal</strong> al subiectivității, al incertitudinii, al dorinței și al obligației, apărând aproape întotdeauna în propoziții secundare introduse de <code>que</code>.</p>\n<h4>1. Declanșatori Canonici</h4>\n<ul>\n  <li>Necesitate/Obligație: <em>Il faut que...</em>, <em>Il est nécessaire que...</em></li>\n  <li>Dorință/Voință: <em>Je veux que...</em>, <em>Je souhaite que...</em></li>\n  <li>Emoție/Sentiment: <em>Je suis content que...</em>, <em>J'ai peur que...</em></li>\n  <li>Îndoială: <em>Je doute que...</em></li>\n</ul>\n<h4>2. Formare</h4>\n<p>Se ia rădăcina persoanei a 3-a plural de la prezent (<em>ils finiss-ent</em>) și se adaugă terminațiile: <strong>-e, -es, -e, -ions, -iez, -ent</strong>. Forme neregulate esențiale: <em>être $\rightarrow$ que je sois</em>, <em>avoir $\rightarrow$ que j'aie</em>, <em>faire $\rightarrow$ que je fasse</em>.</p>\n",
    "glossary": [
      {
        "term": "Mode Subjonctif",
        "def": "Mod gramatical francez ce reflectă nesiguranța, voința, necesitatea sau emoția vorbitorului."
      },
      {
        "term": "Il faut que + subj.",
        "def": "Construcție impersonală obligatorie ce impune întotdeauna modul conjunctiv."
      },
      {
        "term": "Subjonctif irrégulier",
        "def": "Forme specifice pentru verbele être (sois), avoir (aie), faire (fasse), aller (aille)."
      },
      {
        "term": "Certitude vs Doute",
        "def": "Certitudinea (je pense que) cere indicativ; îndoiala (je doute que) cere subjonctif."
      }
    ],
    "matchingPairs": [
      {
        "left": "Il faut que tu fasses attention",
        "right": "Subjonctif de la faire (fasses)"
      },
      {
        "left": "Je veux qu'il vienne",
        "right": "Subjonctif de la venir (vienne)"
      },
      {
        "left": "Il est important que nous soyons là",
        "right": "Subjonctif de la être (soyons)"
      },
      {
        "left": "Bien que (quoique)",
        "right": "Conjuncție concesivă ce cere întotdeauna subjonctif"
      }
    ],
    "quiz": {
      "question": "Ce mod și formă verbală trebuie folosită după expresia 'Il faut que vous ...' pentru verbul 'partir'?",
      "options": [
        "partiez (Subjonctif présent: Il faut que vous partiez)",
        "partez (Indicatif présent)",
        "partir",
        "partirez (Futur)"
      ],
      "correctIndex": 0,
      "explanation": "'Il faut que' impune obligatoriu modul subjonctif. Pentru pronumele 'vous', terminația este '-iez' (partiez)."
    },
    "task": "Completează expresia de necesitate la subjonctif scriind 'Il faut que nous fassions un effort.'.",
    "starterCode": "Il faut que nous ",
    "expectedOutputPattern": "Il\\s+faut\\s+que\\s+nous\\s+fassions\\s+un\\s+effort\\.?",
    "hint": "Scrie Il faut que nous fassions un effort."
  },
  {
    "id": "fr-new-8",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "5. Arhitect / C1",
    "xp": 70,
    "title": "Capitolul 8: Expresii Idiomatice Avansate & Corespondență Formală",
    "theory": "\n<p>Atingerea măiestriei în limba franceză (nivel C1/C2) impune stăpânirea formulelor diplomatice de cancelarie și a expresiilor colocviale idiomatice.</p>\n<h4>1. Formule de Încheiere în Corespondență Oficială</h4>\n<p>Scrisorile profesionale se încheie cu formule consacrate precum: <em>« Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »</em>.</p>\n<h4>2. Expresii Idiomatice Esențiale</h4>\n<ul>\n  <li><em>Avoir le cafard</em> — a fi deprimat, melancolic.</li>\n  <li><em>Poser un lapin</em> — a trage pe sfoară / a nu te prezenta la o întâlnire stabilită.</li>\n  <li><em>Coûter les yeux de la tête</em> — a costa o avere (extrem de scump).</li>\n  <li><em>D'ores et déjà</em> — încă de pe acum, deja.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Correspondance formelle",
        "def": "Registru strict de politețe protocolară utilizat în scrisorile oficiale și contracte."
      },
      {
        "term": "Veuillez agréer...",
        "def": "Formula standard supremă de politețe la finalul unei scrisori oficiale."
      },
      {
        "term": "Poser un lapin",
        "def": "Expresie idiomatică ce înseamnă a lipsi nemotivat de la o întâlnire."
      },
      {
        "term": "D'ores et déjà",
        "def": "Locuțiune adverbială formală de nivel înalt sinonimă cu 'dès maintenant'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Poser un lapin à quelqu'un",
        "right": "A nu veni la o întâlnire stabilită"
      },
      {
        "left": "Ça coûte les yeux de la tête",
        "right": "Costă o avere"
      },
      {
        "left": "Avoir le cafard",
        "right": "A fi cuprins de tristețe sau nostalgie"
      },
      {
        "left": "Veuillez agréer mes salutations",
        "right": "Formulă solemnă de încheiere a scrisorilor oficiale"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă expresia franceză colocvială 'Il m'a posé un lapin hier soir'?",
      "options": [
        "Nu a venit la întâlnirea pe care o stabiliserăm aseară.",
        "Mi-a făcut cadou un iepure alb.",
        "A pregătit o cină delicioasă.",
        "A întârziat 5 minute din cauza traficului."
      ],
      "correctIndex": 0,
      "explanation": "'Poser un lapin' este o expresie idiomatică consacrată ce înseamnă a nu te prezenta la o întâlnire stabilită cu cineva."
    },
    "task": "Scrie expresia formală 'Veuillez agréer mes salutations distinguées.' ca formulă de încheiere diplomatică.",
    "starterCode": "// Scrie formula de politețe\n",
    "expectedOutputPattern": "Veuillez\\s+agr[ée]er\\s+mes\\s+salutations\\s+distingu[ée]es\\.?",
    "hint": "Scrie Veuillez agréer mes salutations distinguées."
  },
  {
    "id": "es-new-1",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Începător / A1",
    "xp": 30,
    "title": "Capitolul 1: Verbe Regulate la Prezent (-ar, -er, -ir)",
    "theory": "\n<p>Verbele în spaniolă se împart în 3 conjugări conform terminației de infinitiv: <strong>-ar</strong> (<em>hablar</em>), <strong>-er</strong> (<em>comer</em>) și <strong>-ir</strong> (<em>vivir</em>).</p>\n<h4>1. Terminațiile Prezentului de Indicativ</h4>\n<ul>\n  <li><code>-ar</code>: -o, -as, -a, -amos, -áis, -an (<em>hablo, hablas, habla...</em>)</li>\n  <li><code>-er</code>: -o, -es, -e, -emos, -éis, -en (<em>como, comes, come...</em>)</li>\n  <li><code>-ir</code>: -o, -es, -e, -imos, -ís, -en (<em>vivo, vives, vive...</em>)</li>\n</ul>\n<h4>2. Omiterea Pronumelui Subiect</h4>\n<p>Deoarece terminațiile verbale sunt unice și neambigue, pronumele subiect (yo, tú, nosotros) este <strong>omis în mod uzual</strong>, fiind folosit doar pentru emfază.</p>\n",
    "glossary": [
      {
        "term": "Presente de indicativo",
        "def": "Timpul prezent utilizat pentru fapte curente, adevăruri generale și rutine."
      },
      {
        "term": "Omisión del pronombre",
        "def": "Practica standard în spaniolă de a nu rosti 'yo' sau 'tú' datorită terminației clare a verbului."
      },
      {
        "term": "Conjugación en -ar",
        "def": "Prima grupă de verbe din limba spaniolă (hablar, trabajar, estudiar)."
      },
      {
        "term": "Conjugación en -er/-ir",
        "def": "A doua și a treia grupă de verbe (comer, beber, vivir, escribir)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Hablo español",
        "right": "Vorbesc spaniolă (Yo)"
      },
      {
        "left": "Comemos juntos",
        "right": "Mâncăm împreună (Nosotros)"
      },
      {
        "left": "Viven en Madrid",
        "right": "Ei trăiesc la Madrid (Ellos)"
      },
      {
        "left": "¿Trabajas hoy?",
        "right": "Lucrezi astăzi? (Tú)"
      }
    ],
    "quiz": {
      "question": "Care este forma de prezent a verbului 'escribir' pentru persoana 'nosotros'?",
      "options": [
        "escribimos (Nosotros escribimos)",
        "escribemos",
        "escriben",
        "escribo"
      ],
      "correctIndex": 0,
      "explanation": "La conjugarea a treia (-ir), persoana I plural primește terminația '-imos': escribimos."
    },
    "task": "Scrie propoziția 'Hablo español y rumano.' (Vorbesc spaniolă și română) omițând pronumele subiect.",
    "starterCode": "// Scrie propoziția\n",
    "expectedOutputPattern": "Hablo\\s+espa[ñn]ol\\s+y\\s+rumano\\.?",
    "hint": "Scrie Hablo español y rumano."
  },
  {
    "id": "es-new-2",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Începător / A1",
    "xp": 35,
    "title": "Capitolul 2: Verbul 'Gustar' și Construcțiile Afective",
    "theory": "\n<p>Verbul <strong>gustar</strong> nu funcționează ca verbul „a plăcea” din engleză; el se acordă cu <strong>obiectul care place</strong>, nu cu persoana căreia îi place!</p>\n<h4>1. Structura cu Pronume de Obiect Indirect</h4>\n<p>Folosim pronumele: <code>me</code>, <code>te</code>, <code>le</code>, <code>nos</code>, <code>os</code>, <code>les</code>:</p>\n<ul>\n  <li>Dacă lucrul care place este la singular sau un verb infinitiv: <strong>gusta</strong> (<em>Me gusta el café</em>, <em>Me gusta viajar</em>).</li>\n  <li>Dacă lucrul care place este la plural: <strong>gustan</strong> (<em>Me gustan los libros</em>).</li>\n</ul>\n<h4>2. Verbe Similare</h4>\n<p>Aceeași structură este folosită de: <em>encantar</em> (a adora), <em>interesar</em>, <em>doler</em> (a durea), <em>parecer</em>.</p>\n",
    "glossary": [
      {
        "term": "Verbo gustar",
        "def": "Verb special ce se acordă exclusiv cu lucrul sau lucrurile plăcute (gusta / gustan)."
      },
      {
        "term": "Pronombres de OI",
        "def": "Pronumele me, te, le, nos, os, les ce indică persoana afectată de senzație."
      },
      {
        "term": "A mí me gusta...",
        "def": "Construcție prepozițională de accentuare facultativă a persoanei."
      },
      {
        "term": "encantar",
        "def": "Verb similar cu gustar ce exprimă o preferință foarte puternică (a adora)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Me gusta la música",
        "right": "Îmi place muzica (singular)"
      },
      {
        "left": "Me gustan las ciudades",
        "right": "Îmi plac orașele (plural)"
      },
      {
        "left": "Nos encanta viajar",
        "right": "Ne încântă să călătorim (cu infinitiv)"
      },
      {
        "left": "¿Te gusta este libro?",
        "right": "Îți place această carte?"
      }
    ],
    "quiz": {
      "question": "Ce formă a verbului gustar este corectă în propoziția 'A ellos les ... las tapas españolas'?",
      "options": [
        "gustan (deoarece 'las tapas' este la plural)",
        "gusta",
        "gustamos",
        "gusto"
      ],
      "correctIndex": 0,
      "explanation": "Subiectul gramatical al propoziției este 'las tapas españolas' (plural); prin urmare, verbul se acordă la plural: 'gustan'."
    },
    "task": "Completează propoziția 'Me gustan los idiomas.' (Îmi plac limbile străine) cu forma corectă de plural.",
    "starterCode": "// Completează propoziția\n",
    "expectedOutputPattern": "Me\\s+gustan\\s+los\\s+idiomas\\.?",
    "hint": "Scrie Me gustan los idiomas."
  },
  {
    "id": "es-new-3",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Junior / A2",
    "xp": 40,
    "title": "Capitolul 3: Pretérito Indefinido — Acțiuni Finalizate în Trecut",
    "theory": "\n<p><strong>Pretérito Indefinido</strong> (echivalentul Simple Past din engleză sau al Perfectului Simplu) este timpul cel mai important pentru acțiuni complet finalizate în trecut într-un moment temporal precis.</p>\n<h4>1. Verbe Regulate</h4>\n<ul>\n  <li><code>-ar</code>: -é, -aste, -ó, -amos, -asteis, -aron (<em>hablé, hablaste, habló...</em>)</li>\n  <li><code>-er / -ir</code>: -í, -iste, -ió, -imos, -isteis, -ieron (<em>comí, comiste, comió...</em>)</li>\n</ul>\n<h4>2. Forme Neregulate Cruciale</h4>\n<p>Verbele <em>ser</em> (a fi) și <em>ir</em> (a merge) au exact aceeași formă la trecut: <strong>fui, fuiste, fue, fuimos, fuisteis, fueron</strong>. Verbul <em>hacer</em> devine <strong>hice, hiciste, hizo...</strong>.</p>\n",
    "glossary": [
      {
        "term": "Pretérito Indefinido",
        "def": "Timp trecut folosit pentru acțiuni precise și punctuale încheiate definitiv în trecut."
      },
      {
        "term": "Marcadores temporales",
        "def": "Cuvinte cheie: ayer (ieri), anoche (aseară), la semana pasada (săptămâna trecută)."
      },
      {
        "term": "Fui (Ser / Ir)",
        "def": "Formă identică la trecut atât pentru verbul 'a fi', cât și pentru 'a merge'."
      },
      {
        "term": "Acentuación aguda",
        "def": "Accentele grafice obligatorii pe prima și a treia persoană singular (-é, -ó, -í)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Ayer hablé con María",
        "right": "Ieri am vorbit cu Maria"
      },
      {
        "left": "El año pasado fui a Madrid",
        "right": "Anul trecut am fost la Madrid (ir/ser)"
      },
      {
        "left": "Hizo un trabajo excelente",
        "right": "A făcut o treabă excelentă (hacer)"
      },
      {
        "left": "Llegaron muy tarde",
        "right": "Au sosit foarte târziu"
      }
    ],
    "quiz": {
      "question": "Care este forma de persoana a 3-a singular (él/ella) a verbului 'hacer' la Pretérito Indefinido?",
      "options": [
        "hizo (cu 'z' pentru a păstra fonetica)",
        "hició",
        "haced",
        "hace"
      ],
      "correctIndex": 0,
      "explanation": "Verbul 'hacer' schimbă litera 'c' în 'z' la persoana a treia singular (hizo) pentru a menține pronunția corectă."
    },
    "task": "Scrie propoziția 'Ayer comí paella con mis amigos.' folosind forma de trecut a verbului comer.",
    "starterCode": "// Scrie propoziția la Pretérito Indefinido\n",
    "expectedOutputPattern": "Ayer\\s+com[íi]\\s+paella\\s+con\\s+mis\\s+amigos\\.?",
    "hint": "Scrie Ayer comí paella con mis amigos."
  },
  {
    "id": "es-new-4",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Junior / A2",
    "xp": 40,
    "title": "Capitolul 4: Pretérito Imperfecto & Diferența față de Indefinido",
    "theory": "\n<p><strong>Pretérito Imperfecto</strong> este timpul descrierilor, al stărilor continue și al obiceiurilor repetate din trecut (<em>Când eram mic, mergeam la plajă în fiecare vară</em>).</p>\n<h4>1. Formare</h4>\n<ul>\n  <li><code>-ar</code>: -aba, -abas, -aba, -ábamos, -abais, -aban (<em>hablaba, cantaba...</em>)</li>\n  <li><code>-er / -ir</code>: -ía, -ías, -ía, -íamos, -íais, -ían (<em>comía, vivía...</em>)</li>\n</ul>\n<h4>2. Contrastul în Narațiuni</h4>\n<p><em>Imperfecto</em> stabilește scena de fundal (<em>Hacía sol y la gente paseaba</em>), iar <em>Indefinido</em> introduce acțiunea bruscă (<em>De repente, empezó a llover</em>).</p>\n",
    "glossary": [
      {
        "term": "Pretérito Imperfecto",
        "def": "Timp trecut dedicat descrierilor de decor, vârstei, vremii și obiceiurilor din trecut."
      },
      {
        "term": "Terminaciones en -aba",
        "def": "Sufixul specific și regulat pentru verbele de grupa I la imperfect."
      },
      {
        "term": "Acción habitual",
        "def": "Comportamente repetate introduse de 'siempre', 'todos los días', 'a menudo'."
      },
      {
        "term": "De repente...",
        "def": "Marcator temporal care introduce o acțiune bruscă exprimată prin Indefinido."
      }
    ],
    "matchingPairs": [
      {
        "left": "Cuando era niño",
        "right": "Când eram copil (descriere - Imperfecto)"
      },
      {
        "left": "Siempre leía antes de dormir",
        "right": "Citeam mereu înainte de culcare (obicei)"
      },
      {
        "left": "Dormía cuando sonó la alarma",
        "right": "Dormeam (imperfecto) când a sunat alarma (indefinido)"
      },
      {
        "left": "Tenía 20 años",
        "right": "Aveam 20 de ani (vârsta se exprimă prin imperfect)"
      }
    ],
    "quiz": {
      "question": "În propoziția 'Mientras nosotros ... la cena, llegó Pedro', ce timp verbal este corect pentru acțiunea în derulare?",
      "options": [
        "preparábamos (Imperfecto - acțiune continuă în fundal)",
        "preparamos (Pretérito Indefinido)",
        "preparar",
        "habíamos preparado"
      ],
      "correctIndex": 0,
      "explanation": "'Mientras' (în timp ce) indică o acțiune continuă aflată în desfășurare în fundal, cerând modul Pretérito Imperfecto (preparábamos)."
    },
    "task": "Scrie propoziția de descriere din trecut 'Cuando vivía en Madrid, comía tapas todos los días.'.",
    "starterCode": "// Completează propoziția la imperfect\n",
    "expectedOutputPattern": "Cuando\\s+viv[íi]a\\s+en\\s+Madrid,\\s*com[íi]a\\s+tapas\\s+todos\\s+los\\s+d[íi]as\\.?",
    "hint": "Scrie Cuando vivía en Madrid, comía tapas todos los días."
  },
  {
    "id": "es-new-5",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "3. Middle / B1",
    "xp": 45,
    "title": "Capitolul 5: Diferența Esențială: 'Por' vs 'Para'",
    "theory": "\n<p>Distincția dintre <strong>por</strong> și <strong>para</strong> este una dintre cele mai frecvente provocări în limba spaniolă, ambele traducându-se prin „pentru”, dar având nuanțe logice total diferite.</p>\n<h4>1. Utilizările lui 'PARA' (Direcție, Scop & Destinatar)</h4>\n<ul>\n  <li>Scop/Obiectiv (In order to): <em>Estudio español <strong>para</strong> conseguir un trabajo</em>.</li>\n  <li>Destinatar: <em>Este regalo es <strong>para</strong> ti</em>.</li>\n  <li>Termen limită (Deadline): <em>La tarea es <strong>para</strong> mañana</em>.</li>\n</ul>\n<h4>2. Utilizările lui 'POR' (Cauză, Motiv & Mijloc)</h4>\n<ul>\n  <li>Cauză/Motiv (Because of): <em>Llegué tarde <strong>por</strong> el tráfico</em>.</li>\n  <li>Mijloc/Canal de comunicare: <em>Te llamo <strong>por</strong> teléfono</em>.</li>\n  <li>Durată aproximativă: <em>Viví allí <strong>por</strong> dos años</em>.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Para (Finalidad)",
        "def": "Prepoziție ce indică scopul, obiectivul viitor, destinația sau destinatarul."
      },
      {
        "term": "Por (Causa)",
        "def": "Prepoziție ce indică motivul trecut, cauza, prețul, mijlocul sau schimbul."
      },
      {
        "term": "Para siempre",
        "def": "Expresie fixă ce înseamnă 'pentru totdeauna'."
      },
      {
        "term": "Por favor / Por ejemplo",
        "def": "Locuțiuni uzuale formate cu prepoziția por."
      }
    ],
    "matchingPairs": [
      {
        "left": "Estudio para aprender",
        "right": "Învăț cu scopul de a ști (Para = finalitate)"
      },
      {
        "left": "Gracias por tu ayuda",
        "right": "Mulțumesc pentru ajutorul tău (Por = cauză/motiv)"
      },
      {
        "left": "El informe es para el viernes",
        "right": "Raportul este pentru vineri (Para = termen limită)"
      },
      {
        "left": "Viajamos por tren",
        "right": "Călătorim cu trenul (Por = mijloc de transport)"
      }
    ],
    "quiz": {
      "question": "Ce prepoziție completează corect fraza: 'No pudimos salir ... la lluvia' (din cauza ploii)?",
      "options": [
        "por (indică cauza sau motivul)",
        "para",
        "con",
        "de"
      ],
      "correctIndex": 0,
      "explanation": "Ploaia este cauza pentru care nu s-a putut ieși. Cauza sau motivul se exprimă întotdeauna prin prepoziția 'por'."
    },
    "task": "Completează fraza de scop 'Trabajo duro para tener éxito.' (Muncesc din greu pentru a avea succes).",
    "starterCode": "Trabajo duro ",
    "expectedOutputPattern": "Trabajo\\s+duro\\s+para\\s+tener\\s+[ée]xito\\.?",
    "hint": "Scrie Trabajo duro para tener éxito."
  },
  {
    "id": "es-new-6",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "4. Senior / B2",
    "xp": 55,
    "title": "Capitolul 6: Presente de Subjuntivo — Dorințe, Emoții și 'Ojalá'",
    "theory": "\n<p><strong>Modo Subjuntivo</strong> este folosit în spaniolă ori de câte ori acțiunea nu este un fapt sigur, ci o dorință, o cerință, o îndoială sau o reacție emoțională.</p>\n<h4>1. Formare: Schimbarea Vocalei</h4>\n<p>Se ia persoana I singular de la prezent (<em>yo hablo</em>, <em>yo como</em>), se elimină <code>-o</code> și se inversează vocala tematică:</p>\n<ul>\n  <li>Verbele în <code>-ar</code> iau terminații cu <strong>-e</strong>: -e, -es, -e, -emos, -éis, -en (<em>hable, hables...</em>).</li>\n  <li>Verbele în <code>-er / -ir</code> iau terminații cu <strong>-a</strong>: -a, -as, -a, -amos, -áis, -an (<em>coma, comas...</em>, <em>viva, vivas...</em>).</li>\n</ul>\n<h4>2. Cuvântul Magic: 'Ojalá'</h4>\n<p><em>Ojalá (que)</em> (de origine arabă, însemnând „Dacă vrea Dumnezeu”) este urmat întotdeauna de subjonctiv: <em>¡Ojalá tengas un buen día!</em>.</p>\n",
    "glossary": [
      {
        "term": "Subjuntivo",
        "def": "Modul gramatical al dorințelor, posibilității, incertitudinii și emoțiilor subiective."
      },
      {
        "term": "Inversión de vocal",
        "def": "Regula de aur a subjonctivului: verbele în -ar iau 'e', iar cele în -er/-ir iau 'a'."
      },
      {
        "term": "Ojalá",
        "def": "Particulă de dorință ce impune fără excepție utilizarea modului subjuntivo."
      },
      {
        "term": "Quiero que...",
        "def": "Expresie de voință cu schimbare de subiect ce cere subjuntivo (Quiero que vengas)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Quiero que estudies más",
        "right": "Vreau ca tu să înveți mai mult"
      },
      {
        "left": "¡Ojalá no llueva mañana!",
        "right": "Să sperăm că nu va ploua mâine!"
      },
      {
        "left": "Es necesario que tengamos paciencia",
        "right": "Este necesar să avem răbdare"
      },
      {
        "left": "Dudo que sea verdad",
        "right": "Mă îndoiesc că este adevărat (subjuntivo de la ser)"
      }
    ],
    "quiz": {
      "question": "Ce formă de Subjuntivo a verbului 'tener' completează corect urarea '¡Espero que ... un buen viaje!' (tú)?",
      "options": [
        "tengas (Espero que tengas)",
        "tienes",
        "tenga",
        "tener"
      ],
      "correctIndex": 0,
      "explanation": "Expresia 'Espero que' introduce o dorință adresată altei persoane (tú), cerând prezentul de subjonctiv al verbului tener: 'tengas'."
    },
    "task": "Scrie urarea clasică '¡Ojalá tengas un día excelente!' folosind modul subjuntivo.",
    "starterCode": "// Scrie urarea cu Ojalá\n",
    "expectedOutputPattern": "(?:[¡!]\\s*)?Ojal[áa]\\s+tengas\\s+un\\s+d[íi]a\\s+excelente[!]?\\.?",
    "hint": "Scrie ¡Ojalá tengas un día excelente!"
  },
  {
    "id": "es-new-7",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "4. Senior / B2",
    "xp": 60,
    "title": "Capitolul 7: Pronume Directe și Indirecte Combinate ('Se lo dije')",
    "theory": "\n<p>Când o propoziție conține atât un pronume de <strong>obiect indirect</strong> (cui?) cât și unul de <strong>obiect direct</strong> (ce?), ordinea este întotdeauna: <strong>OI + OD + Verb</strong>.</p>\n<h4>1. Regula de Cacofonie: 'Le lo' devine 'SE LO'</h4>\n<p>În limba spaniolă este interzisă succesiunea a două pronume care încep cu litera L (<em>le lo</em>, <em>le la</em>, <em>les los</em>). Din motive fonetice, <code>le</code> sau <code>les</code> se transformă automat în <strong>se</strong>:</p>\n<p><em>¿Le diste el libro a Juan? $\rightarrow$ Sí, <strong>se lo</strong> di</em> (în loc de <em>le lo di</em>).</p>\n<h4>2. Poziția Față de Verb</h4>\n<p>Pronumele stau în fața verbelor conjugate. În cazul infinitivului, gerunziului și imperativului afirmativ, ele se alipesc la final ca un singur cuvânt: <em>Voy a decírtelo</em>, <em>Dímelo</em>.</p>\n",
    "glossary": [
      {
        "term": "Doble pronombre",
        "def": "Combinația dintre pronumele de obiect indirect și cel de obiect direct într-o singură frază."
      },
      {
        "term": "Regla de 'SE'",
        "def": "Transformarea obligatorie a lui 'le' în 'se' înaintea pronumelor lo, la, los, las."
      },
      {
        "term": "Pronombres enclíticos",
        "def": "Pronume atașate direct la finalul infinitivului, gerunziului sau imperativului afirmativ."
      },
      {
        "term": "Orden OI + OD",
        "def": "Regula fixă conform căreia persoana (OI) precede întotdeauna lucrul (OD)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Se lo expliqué ayer",
        "right": "I l-am explicat ieri (în loc de le lo)"
      },
      {
        "left": "Me lo puedes enviar",
        "right": "Mi-l poți trimite mie"
      },
      {
        "left": "Dígamelo, por favor",
        "right": "Spuneți-mi-l mie (pronume enclitice atașate la imperativ)"
      },
      {
        "left": "No te lo creas",
        "right": "Să nu o crezi (la imperativ negativ)"
      }
    ],
    "quiz": {
      "question": "De ce propoziția 'Le lo dije a mi jefe' este incorectă în limba spaniolă?",
      "options": [
        "Succesiunea pronumelor 'le lo' este interzisă fonetic; 'le' trebuie înlocuit obligatoriu cu 'se' (Se lo dije).",
        "Verbul decir nu suportă pronume de obiect direct.",
        "Pronumele trebuie plasate întotdeauna după verb.",
        "Nu este permisă menționarea șefului într-o propoziție."
      ],
      "correctIndex": 0,
      "explanation": "Când pronumele de persoana a 3-a indirect (le/les) este urmat de un pronume direct (lo/la/los/las), el se transformă întotdeauna în 'se' pentru eufonie."
    },
    "task": "Răspunde afirmativ la întrebarea dacă i-ai dat raportul directorului: 'Sí, se lo entregué ayer.'.",
    "starterCode": "// Răspunde cu se lo\n",
    "expectedOutputPattern": "S[íi],\\s+se\\s+lo\\s+entregu[ée]\\s+ayer\\.?",
    "hint": "Scrie Sí, se lo entregué ayer."
  },
  {
    "id": "es-new-8",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "5. Arhitect / C1",
    "xp": 70,
    "title": "Capitolul 8: Modismos, Expresii Idiomatice & Spaniola de Afaceri",
    "theory": "\n<p>Fluența de nivel înalt (C1) în limba spaniolă presupune folosirea firească a expresiilor colocviale și stăpânirea limbajului formal corporativ.</p>\n<h4>1. Modisme Populare Spaniole</h4>\n<ul>\n  <li><em>Costar un ojo de la cara</em> — a costa o avere (extrem de scump).</li>\n  <li><em>Estar en las nubes</em> — a fi distrat, cu capul în nori.</li>\n  <li><em>Dar en el clavo</em> — a nimeri la fix, a găsi soluția perfectă.</li>\n  <li><em>Tomar el pelo</em> — a lua pe cineva peste picior, a glumi.</li>\n</ul>\n<h4>2. Conectori Discursivi pentru Afaceri</h4>\n<p>În negocieri și rapoarte se utilizează: <em>Sin embargo</em> (totuși), <em>Por consiguiente</em> (prin urmare), <em>En lo que respecta a</em> (în ceea ce privește), <em>Llevar a cabo</em> (a duce la îndeplinire un proiect).</p>\n",
    "glossary": [
      {
        "term": "Modismo",
        "def": "Expresie idiomatică specifică unei limbi al cărei înțeles nu rezultă din suma cuvintelor individuale."
      },
      {
        "term": "Dar en el clavo",
        "def": "A găsi exact răspunsul sau soluția corectă la o problemă complicată."
      },
      {
        "term": "Llevar a cabo",
        "def": "Sintagmă profesională elegantă ce înseamnă a executa, a realiza un plan sau proiect."
      },
      {
        "term": "Marcadores formales",
        "def": "Conectori logici utilizați pentru structurarea argumentației în contexte academice și de business."
      }
    ],
    "matchingPairs": [
      {
        "left": "Me estás tomando el pelo",
        "right": "Mă iei peste picior / glumești cu mine"
      },
      {
        "left": "Cuesta un ojo de la cara",
        "right": "Costă o avere"
      },
      {
        "left": "Vamos a llevar a cabo la auditoría",
        "right": "Vom duce la îndeplinire auditul"
      },
      {
        "left": "Por consiguiente",
        "right": "Prin urmare / în consecință"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă expresia spaniolă 'Has dado en el clavo con esta solución'?",
      "options": [
        "Ai nimerit perfect / ai găsit soluția exactă.",
        "Ai bătut un cui în peretele biroului.",
        "Soluția ta a costat prea mulți bani.",
        "Proiectul a eșuat din cauza ta."
      ],
      "correctIndex": 0,
      "explanation": "'Dar en el clavo' este o expresie idiomatică ce înseamnă a nimeri fix la țintă, a intui impecabil soluția unei probleme."
    },
    "task": "Scrie propoziția profesională 'Vamos a llevar a cabo el proyecto según lo planeado.'.",
    "starterCode": "// Completează propoziția formală\n",
    "expectedOutputPattern": "Vamos\\s+a\\s+llevar\\s+a\\s+cabo\\s+el\\s+proyecto\\s+seg[úu]n\\s+lo\\s+planeado\\.?",
    "hint": "Scrie Vamos a llevar a cabo el proyecto según lo planeado."
  },
  {
    "id": "eng-a-1",
    "track": "Engleză (A1–A2)",
    "division": "Limbi Străine & Comunicare",
    "icon": "🌐",
    "level": "1. Începător / A1",
    "xp": 25,
    "title": "Capitolul 1: Ghid de Călătorie & Întrebarea Direcției (Asking for Directions)",
    "theory": "\n<p>Când călătorești într-o țară vorbitoare de engleză, orientarea în oraș necesită structuri de politețe și expresii de direcție clare.</p>\n<h4>1. Întrebări de Politețe</h4>\n<p><em>Excuse me, could you tell me how to get to the train station?</em> sau <em>Where is the nearest pharmacy?</em>.</p>\n<h4>2. Expresii de Direcție</h4>\n<ul>\n  <li><code>Turn left / Turn right</code> — Fă la stânga / la dreapta.</li>\n  <li><code>Go straight ahead</code> — Mergi drept înainte.</li>\n  <li><code>Across from / Opposite</code> — Vizavi de.</li>\n  <li><code>Next to</code> — Lângă.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Go straight ahead",
        "def": "Mergi drept înainte fără să virezi."
      },
      {
        "term": "Turn left / right",
        "def": "Virează la stânga sau la dreapta la următoarea intersecție."
      },
      {
        "term": "Across from",
        "def": "Situat pe partea opusă a străzii, vizavi de clădirea menționată."
      },
      {
        "term": "Excuse me",
        "def": "Formulă standard de curtoazie folosită pentru a atrage atenția cuiva pe stradă."
      }
    ],
    "matchingPairs": [
      {
        "left": "Excuse me, where is the station?",
        "right": "Scuzați-mă, unde este gara?"
      },
      {
        "left": "Go straight ahead for two blocks",
        "right": "Mergi drept înainte două străzi"
      },
      {
        "left": "Turn right at the traffic lights",
        "right": "Virează la dreapta la semafor"
      },
      {
        "left": "It is next to the museum",
        "right": "Este chiar lângă muzeu"
      }
    ],
    "quiz": {
      "question": "Ce expresie în limba engleză înseamnă 'Mergi drept înainte'?",
      "options": [
        "Go straight ahead",
        "Turn around now",
        "Cross the bridge backwards",
        "Stop at the corner"
      ],
      "correctIndex": 0,
      "explanation": "'Go straight ahead' este expresia standard în limba engleză pentru mersul drept înainte fără viraje."
    },
    "task": "Întreabă politicos unde se află cel mai apropiat spital: 'Excuse me, where is the nearest hospital?'.",
    "starterCode": "// Scrie întrebarea de direcție\n",
    "expectedOutputPattern": "Excuse\\s+me,\\s*where\\s+is\\s+the\\s+nearest\\s+hospital\\??",
    "hint": "Scrie Excuse me, where is the nearest hospital?"
  },
  {
    "id": "eng-a-2",
    "track": "Engleză (A1–A2)",
    "division": "Limbi Străine & Comunicare",
    "icon": "🌐",
    "level": "2. Elementar / A2",
    "xp": 30,
    "title": "Capitolul 2: Substantive Numărabile vs Nenumărabile (Countable vs Uncountable)",
    "theory": "\n<p>În engleză, substantivele <strong>numărabile (Countable)</strong> pot avea formă de plural și pot fi numărate individual (<em>books</em>, <em>apples</em>), pe când cele <strong>nenumărabile (Uncountable)</strong> reprezintă mase, lichide sau concepte abstracte (<em>water</em>, <em>information</em>, <em>advice</em>, <em>money</em>) și au <strong>doar formă de singular</strong>.</p>\n<h4>1. Many vs Much</h4>\n<ul>\n  <li><code>Many</code> se folosește cu substantive numărabile la plural: <em>How <strong>many</strong> apples do you have?</em></li>\n  <li><code>Much</code> se folosește cu substantive nenumărabile (în special în întrebări și negații): <em>How <strong>much</strong> water is left?</em>, <em>I don't have <strong>much</strong> time</em>.</li>\n</ul>\n<h4>2. A lot of</h4>\n<p>Se poate folosi atât cu cele numărabile, cât și cu cele nenumărabile în propoziții afirmative: <em>a lot of money</em>, <em>a lot of friends</em>.</p>\n",
    "glossary": [
      {
        "term": "Countable Nouns",
        "def": "Substantive ce pot fi numărate cu cifre și au formă de plural (car -> cars)."
      },
      {
        "term": "Uncountable Nouns",
        "def": "Substantive ce nu admit plural (water, information, advice, furniture, bread)."
      },
      {
        "term": "Much",
        "def": "Determinant cantitativ utilizat exclusiv cu substantive nenumărabile."
      },
      {
        "term": "Many",
        "def": "Determinant cantitativ utilizat exclusiv cu substantive numărabile la plural."
      }
    ],
    "matchingPairs": [
      {
        "left": "How many books?",
        "right": "Câte cărți? (numărabil la plural)"
      },
      {
        "left": "How much time?",
        "right": "Cât timp? (nenumărabil)"
      },
      {
        "left": "A lot of sugar",
        "right": "Mult zahăr (afirmativ)"
      },
      {
        "left": "Advice is uncountable",
        "right": "În engleză 'advice' nu primește niciodată 's' de plural"
      }
    ],
    "quiz": {
      "question": "De ce fraza 'He gave me many advices' este incorectă din punct de vedere gramatical în limba engleză?",
      "options": [
        "'Advice' este un substantiv nenumărabil în engleză; nu poate avea plural și nu acceptă 'many' (forma corectă: much advice sau a lot of advice).",
        "Verbul 'gave' este interzis la trecut.",
        "Pronumele 'me' trebuie înlocuit cu 'I'.",
        "Cuvântul 'advice' se folosește doar în justiție."
      ],
      "correctIndex": 0,
      "explanation": "În limba engleză, 'advice' și 'information' sunt strict nenumărabile (nu au plural și nu se numără direct; spunem 'pieces of advice' sau 'some advice')."
    },
    "task": "Întreabă cât costă folosind 'How much does this cost?'.",
    "starterCode": "// Întreabă prețul\n",
    "expectedOutputPattern": "How\\s+much\\s+does\\s+this\\s+cost\\??",
    "hint": "Scrie How much does this cost?"
  },
  {
    "id": "eng-b-1",
    "track": "Engleză (B1–B2)",
    "division": "Limbi Străine & Comunicare",
    "icon": "🌐",
    "level": "1. Intermediar / B1",
    "xp": 40,
    "title": "Capitolul 1: Phrasal Verbs Esențiale în Context Profesional",
    "theory": "\n<p>Un <strong>Phrasal Verb</strong> combină un verb cu o particulă prepozițională sau adverbială, creând un sens complet nou și adesea imprevizibil față de verbul de bază.</p>\n<h4>1. Verbe Comune la Birou</h4>\n<ul>\n  <li><code>Bring up</code> — a aduce în discuție un subiect: <em>She brought up the budget during the meeting</em>.</li>\n  <li><code>Call off</code> — a anula definitiv un eveniment: <em>They called off the conference due to bad weather</em>.</li>\n  <li><code>Put off</code> — a amâna pentru o dată ulterioară: <em>Let's put off the decision until next Monday</em>.</li>\n  <li><code>Carry out</code> — a executa, a duce la bun sfârșit: <em>We carried out a full security audit</em>.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Phrasal Verb",
        "def": "Combinație verb + prepoziție ce generează o semnificație idiomatică nouă."
      },
      {
        "term": "Call off (Cancel)",
        "def": "A anula definitiv un plan sau o ședință stabilită."
      },
      {
        "term": "Put off (Postpone)",
        "def": "A amâna o activitate pentru o dată viitoare."
      },
      {
        "term": "Carry out (Execute)",
        "def": "A efectua o cercetare, un experiment sau un plan de acțiune."
      }
    ],
    "matchingPairs": [
      {
        "left": "Call off the meeting",
        "right": "Anulează complet ședința"
      },
      {
        "left": "Put off the deadline",
        "right": "Amână termenul limită"
      },
      {
        "left": "Bring up a new idea",
        "right": "Aduce în discuție o idee nouă"
      },
      {
        "left": "Carry out instructions",
        "right": "Duce la îndeplinire instrucțiunile"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă propoziția: 'We decided to put off the launch until next month'?",
      "options": [
        "Am decis să amânăm lansarea până luna viitoare.",
        "Am decis să anulăm definitiv lansarea.",
        "Am decis să grăbim lansarea.",
        "Am lansat deja produsul luna trecută."
      ],
      "correctIndex": 0,
      "explanation": "'Put off' înseamnă a amâna (postpone) pentru o dată ulterioară, spre deosebire de 'call off' care înseamnă a anula definitiv."
    },
    "task": "Completează fraza profesională 'We must carry out a thorough investigation.'.",
    "starterCode": "We must ",
    "expectedOutputPattern": "We\\s+must\\s+carry\\s+out\\s+a\\s+thorough\\s+investigation\\.?",
    "hint": "Scrie We must carry out a thorough investigation."
  },
  {
    "id": "eng-b-2",
    "track": "Engleză (B1–B2)",
    "division": "Limbi Străine & Comunicare",
    "icon": "🌐",
    "level": "2. Intermediar Avansat / B2",
    "xp": 45,
    "title": "Capitolul 2: Modale de Deducție în Trecut (Must have, Can't have, Might have)",
    "theory": "\n<p>Pentru a face deducții logice despre un eveniment care s-a petrecut în trecut pe baza dovezilor prezente, folosim verbe modale urmate de <strong>have + Past Participle</strong>.</p>\n<h4>1. Certitudine Pozitivă: MUST HAVE</h4>\n<p>Când ești aproape 100% convins că ceva s-a întâmplat: <em>The streets are wet; it <strong>must have rained</strong> last night</em>.</p>\n<h4>2. Imposibilitate Logică: CAN'T HAVE (sau Couldn't have)</h4>\n<p>Când ești convins că ceva a fost imposibil: <em>He <strong>can't have stolen</strong> the car; he was with me all night</em>.</p>\n<h4>3. Posibilitate Incertă: MIGHT / MAY HAVE</h4>\n<p>Când ceva este posibil, dar nesigur: <em>She hasn't arrived; she <strong>might have missed</strong> the bus</em>.</p>\n",
    "glossary": [
      {
        "term": "Modal of deduction",
        "def": "Verb modal utilizat pentru a estima probabilitatea sau certitudinea unui eveniment."
      },
      {
        "term": "Must have + V3",
        "def": "Deducție logică de certitudine pozitivă în trecut ('cu siguranță a...')."
      },
      {
        "term": "Can't have + V3",
        "def": "Deducție logică de imposibilitate absolută în trecut ('este imposibil să fi...')."
      },
      {
        "term": "Might have + V3",
        "def": "Posibilitate speculativă cu probabilitate de aproximativ 50%."
      }
    ],
    "matchingPairs": [
      {
        "left": "He must have forgotten his keys",
        "right": "Cu siguranță și-a uitat cheile (dovezi clare)"
      },
      {
        "left": "You can't have seen John yesterday",
        "right": "Este imposibil să-l fi văzut (e plecat din țară)"
      },
      {
        "left": "They might have lost their way",
        "right": "S-ar putea să se fi rătăcit (nesigur)"
      },
      {
        "left": "Could have helped",
        "right": "Ar fi putut ajuta, dar nu a făcut-o"
      }
    ],
    "quiz": {
      "question": "Ce structură modală este corectă pentru a spune 'Cu siguranță a plecat deja' pe baza faptului că biroul este gol și luminile sunt stinse?",
      "options": [
        "He must have left already.",
        "He can't have left already.",
        "He should leave already.",
        "He must leave yesterday."
      ],
      "correctIndex": 0,
      "explanation": "'Must have + past participle' exprimă concluzia logică fermă că o acțiune s-a produs în trecut pe baza indiciilor evidente din prezent."
    },
    "task": "Scrie propoziția de deducție 'She must have received my email.' (Cu siguranță a primit e-mailul meu).",
    "starterCode": "// Scrie deducția\n",
    "expectedOutputPattern": "She\\s+must\\s+have\\s+received\\s+my\\s+email\\.?",
    "hint": "Scrie She must have received my email."
  },
  {
    "id": "eng-c-1",
    "track": "Engleză (C1–C2)",
    "division": "Limbi Străine & Comunicare",
    "icon": "🌐",
    "level": "1. Avansat / C1",
    "xp": 55,
    "title": "Capitolul 1: Propoziții Scindate (Cleft Sentences) pentru Accentuare",
    "theory": "\n<p><strong>Cleft Sentences</strong> sunt structuri gramaticale complexe utilizate pentru a pune accentul pe un element precis al propoziției (subiectul, cauza, momentul sau acțiunea), transformând o propoziție simplă într-una cu două clauze.</p>\n<h4>1. It-Clefts</h4>\n<p>Formula: <code>It is / was + elementul accentuat + that / who</code>.</p>\n<p><em>Dan wrote the code</em> $\rightarrow$ <em><strong>It was Dan who</strong> wrote the code</em> (Dan a fost cel care a scris codul, nu altcineva!).</p>\n<h4>2. Wh-Clefts (Pseudo-Clefts)</h4>\n<p>Formula: <code>What + clauză + is / was + elementul de impact</code>.</p>\n<p><em>I need a quiet place</em> $\rightarrow$ <em><strong>What I really need is</strong> a quiet place</em>.</p>\n",
    "glossary": [
      {
        "term": "Cleft Sentence",
        "def": "Propoziție despicată sintactic pentru a focaliza atenția cititorului asupra unui detaliu crucial."
      },
      {
        "term": "It-Cleft",
        "def": "Structura 'It was [X] that/who...' ce izolează și subliniază responsabilitatea sau identitatea."
      },
      {
        "term": "Wh-Cleft",
        "def": "Structura 'What we need is...' ce creează suspans și accentuează predicatul logic."
      },
      {
        "term": "Emphatic Stress",
        "def": "Evidențierea stilistică a unei idei fără a ridica tonul vocii în discursul scris."
      }
    ],
    "matchingPairs": [
      {
        "left": "It was Alice who solved the bug",
        "right": "Alice a fost cea care a rezolvat problema (It-cleft)"
      },
      {
        "left": "What surprised me was his attitude",
        "right": "Ceea ce m-a surprins a fost atitudinea lui (Wh-cleft)"
      },
      {
        "left": "All I want is a fair decision",
        "right": "Tot ceea ce îmi doresc este o decizie corectă"
      },
      {
        "left": "The reason why we failed was...",
        "right": "Motivul pentru care am eșuat a fost..."
      }
    ],
    "quiz": {
      "question": "Transformă fraza 'The marketing campaign increased our sales' într-un Wh-cleft ce pune accent pe acțiunea campaniei:",
      "options": [
        "What increased our sales was the marketing campaign.",
        "It was sales that increased the marketing campaign.",
        "The marketing campaign was that sales increased.",
        "Why the campaign increased was our sales."
      ],
      "correctIndex": 0,
      "explanation": "'What increased our sales was the marketing campaign' folosește corect clauza 'What...' pentru a accentua campania de marketing ca factor determinant."
    },
    "task": "Scrie propoziția de accentuare 'What we really need is more time.' folosind un Wh-cleft.",
    "starterCode": "What we really ",
    "expectedOutputPattern": "What\\s+we\\s+really\\s+need\\s+is\\s+more\\s+time\\.?",
    "hint": "Scrie What we really need is more time."
  },
  {
    "id": "eng-c-2",
    "track": "Engleză (C1–C2)",
    "division": "Limbi Străine & Comunicare",
    "icon": "🌐",
    "level": "2. Măiestrie / C2",
    "xp": 70,
    "title": "Capitolul 2: Tehnici Avansate de Argumentare Diplomatică (Hedging & Nuance)",
    "theory": "\n<p>În comunicarea executivă de nivel C2, dezacordul direct (<em>You are wrong</em>) este considerat neprofesionist. Vorbitorii nativi folosesc tehnica <strong>Hedging</strong> — atenuarea afirmațiilor categorice prin nuanțe subtile și formulări ipotetice.</p>\n<h4>1. Verbe și Adverbe de Atenuare</h4>\n<p>În loc de <em>This approach will fail</em>, se folosește: <em>This approach <strong>would seem to</strong> have significant drawbacks</em> sau <em>It is <strong>arguably</strong> not the most viable solution</em>.</p>\n<h4>2. Dezacordul Diplomatic</h4>\n<ul>\n  <li><em>With all due respect, I am not entirely convinced that...</em></li>\n  <li><em>I see your point, however, have we considered the potential repercussions?</em></li>\n  <li><em>To a certain extent, that may be true, but...</em></li>\n</ul>\n",
    "glossary": [
      {
        "term": "Hedging",
        "def": "Strategie discursivă de reducere a caracterului absolut al afirmațiilor pentru diplomație și rigoare academică."
      },
      {
        "term": "Arguably",
        "def": "Adverb sofisticat de nuanțare ce semnalează că o afirmație poate fi susținută cu argumente valide."
      },
      {
        "term": "Diplomatic Disagreement",
        "def": "Arta de a exprima o viziune contrară fără a ofensa interlocutorul."
      },
      {
        "term": "Tentative Language",
        "def": "Limbaj prudent ce utilizează forme condiționale (would, could, seem, appear)."
      }
    ],
    "matchingPairs": [
      {
        "left": "It would appear that...",
        "right": "S-ar părea că... (ton prudent și diplomat)"
      },
      {
        "left": "I am inclined to believe that...",
        "right": "Aș tinde să cred că..."
      },
      {
        "left": "With all due respect",
        "right": "Formulă de respect înainte de a contrazice un argument"
      },
      {
        "left": "To play devil's advocate",
        "right": "A susține intenționat opinia opusă pentru a testa rezistența unui plan"
      }
    ],
    "quiz": {
      "question": "Care dintre următoarele formulări reprezintă cel mai bun exemplu de 'Hedging' diplomatic într-o ședință de conducere?",
      "options": [
        "It might be premature to draw definitive conclusions based on this preliminary data.",
        "Your conclusions are completely false and ridiculous.",
        "We must stop talking immediately.",
        "I know everything about this project."
      ],
      "correctIndex": 0,
      "explanation": "Formularea folosește modale prudente (might be) și vocabular academic nuanțat (preliminary, definitive conclusions), reprezentând etalonul de stil diplomatic C2."
    },
    "task": "Scrie formula diplomatică de dezacord 'With all due respect, I must disagree with this assessment.'.",
    "starterCode": "// Scrie fraza diplomatică\n",
    "expectedOutputPattern": "With\\s+all\\s+due\\s+respect,\\s*I\\s+must\\s+disagree\\s+with\\s+this\\s+assessment\\.?",
    "hint": "Scrie With all due respect, I must disagree with this assessment."
  },
  {
    "id": "eng-h-1",
    "track": "Engleză: Familie & Hobby",
    "division": "Limbi Străine & Comunicare",
    "icon": "🎨",
    "level": "1. Începător / A1",
    "xp": 30,
    "title": "Capitolul 1: Arborele Genealogic & Relațiile de Familie (Family & Relatives)",
    "theory": "\n<p>Descrierea familiei este unul dintre primele subiecte de conversație. În limba engleză distingem clar între <strong>Immediate Family</strong> (familia restrânsă: părinți, copii, frați) și <strong>Extended Family</strong> (rudele extinse: veri, unchi, mătuși, bunici).</p>\n<h4>1. Rudele prin Alianță (In-laws)</h4>\n<p>Toate rudele dobândite prin căsătorie primesc sufixul <code>-in-law</code>:</p>\n<ul>\n  <li><code>Mother-in-law / Father-in-law</code> — Soacra / Socrul.</li>\n  <li><code>Brother-in-law / Sister-in-law</code> — Cumnatul / Cumnata.</li>\n  <li><code>Son-in-law / Daughter-in-law</code> — Ginerele / Nora.</li>\n</ul>\n<h4>2. Frați și Surori</h4>\n<p>Substantivul colectiv neutru pentru frați și surori este <strong>siblings</strong> (<em>I have two siblings: one brother and one sister</em>).</p>\n",
    "glossary": [
      {
        "term": "Immediate Family",
        "def": "Familia de bază compusă din părinți, soț/soție și copii."
      },
      {
        "term": "Extended Family",
        "def": "Rudele de sânge lărgite (bunici, veri, mătuși, nepoți de frate)."
      },
      {
        "term": "In-laws",
        "def": "Termen generic pentru rudele partenerului de căsătorie."
      },
      {
        "term": "Siblings",
        "def": "Cuvânt colectiv ce desemnează frații și surorile unei persoane."
      }
    ],
    "matchingPairs": [
      {
        "left": "I have two siblings",
        "right": "Am doi frați/surori"
      },
      {
        "left": "My mother-in-law",
        "right": "Soacra mea"
      },
      {
        "left": "Nephew and niece",
        "right": "Nepot și nepoată (de frate/soră)"
      },
      {
        "left": "Only child",
        "right": "Copil unic la părinți (fără frați)"
      }
    ],
    "quiz": {
      "question": "Cum se traduce corect în limba engleză cuvântul 'cumnat' (fratele soției sau soțului)?",
      "options": [
        "brother-in-law",
        "step-brother",
        "half-brother",
        "cousin"
      ],
      "correctIndex": 0,
      "explanation": "Rudele dobândite prin căsătorie primesc terminația '-in-law'. Fratele partenerului este 'brother-in-law'."
    },
    "task": "Scrie propoziția 'I have three siblings and a large extended family.'.",
    "starterCode": "I have three ",
    "expectedOutputPattern": "I\\s+have\\s+three\\s+siblings\\s+and\\s+a\\s+large\\s+extended\\s+family\\.?",
    "hint": "Scrie I have three siblings and a large extended family."
  },
  {
    "id": "eng-h-2",
    "track": "Engleză: Familie & Hobby",
    "division": "Limbi Străine & Comunicare",
    "icon": "🎨",
    "level": "2. Elementar / A2",
    "xp": 35,
    "title": "Capitolul 2: Arta Culinară, Bucătărie & Gastronomie (Cooking & Recipes)",
    "theory": "\n<p>Gătitul implică verbe specifice de preparare termică și mecanică ce diferențiază clar tehnicile culinare:</p>\n<h4>1. Verbe de Bază în Bucătărie</h4>\n<ul>\n  <li><code>Chop</code> — a toca mărunt (legume, ierburi).</li>\n  <li><code>Slice</code> — a tăia în felii (pâine, roșii).</li>\n  <li><code>Grate</code> — a da pe răzătoare (brânză, morcovi).</li>\n  <li><code>Stir</code> — a amesteca continuu cu o lingură într-un lichid.</li>\n  <li><code>Boil</code> — a fierbe în clocot (apă la 100°C).</li>\n  <li><code>Simmer</code> — a fierbe la foc mic, domol.</li>\n  <li><code>Bake</code> — a coace la cuptor (pâine, prăjituri).</li>\n  <li><code>Roast</code> — a rumeni la cuptor la temperatură înaltă (carne, cartofi).</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Chop",
        "def": "A tăia ingredientele în bucăți mici cu un cuțit."
      },
      {
        "term": "Simmer",
        "def": "A găti un lichid chiar sub punctul de fierbere, cu bule foarte fine."
      },
      {
        "term": "Grate",
        "def": "A mărunți alimentele folosind o răzătoare (grater)."
      },
      {
        "term": "Seasoning",
        "def": "Condimentarea mâncării cu sare, piper și ierburi aromate."
      }
    ],
    "matchingPairs": [
      {
        "left": "Chop the onions finely",
        "right": "Toacă ceapa mărunt"
      },
      {
        "left": "Simmer for 20 minutes",
        "right": "Fierbe la foc mic timp de 20 de minute"
      },
      {
        "left": "Grate some cheese on top",
        "right": "Rade niște brânză deasupra"
      },
      {
        "left": "Preheat the oven to 180°C",
        "right": "Preîncălzește cuptorul la 180 de grade"
      }
    ],
    "quiz": {
      "question": "Ce verb în limba engleză desemnează coacerea prăjiturilor sau a pâinii la cuptor?",
      "options": [
        "Bake",
        "Boil",
        "Fry",
        "Steam"
      ],
      "correctIndex": 0,
      "explanation": "'Bake' este verbul specific pentru coacerea produselor de panificație și a dulciurilor în cuptor."
    },
    "task": "Scrie instrucțiunea culinară 'Chop the vegetables and simmer the soup for 15 minutes.'.",
    "starterCode": "// Scrie instrucțiunea\n",
    "expectedOutputPattern": "Chop\\s+the\\s+vegetables\\s+and\\s+simmer\\s+the\\s+soup\\s+for\\s+15\\s+minutes\\.?",
    "hint": "Scrie Chop the vegetables and simmer the soup for 15 minutes."
  },
  {
    "id": "eng-h-3",
    "track": "Engleză: Familie & Hobby",
    "division": "Limbi Străine & Comunicare",
    "icon": "🎨",
    "level": "3. Intermediar / B1",
    "xp": 40,
    "title": "Capitolul 3: Cinematografie & Recenzii de Filme (Cinema & Movie Reviews)",
    "theory": "\n<p>Discuțiile despre filme depășesc simplul „It was good”. Engleza intermediară oferă un vocabular precis pentru a analiza scenariul, jocul actoricesc și regia.</p>\n<h4>1. Vocabular Cinematografic</h4>\n<ul>\n  <li><code>Plot twist</code> — o întorsătură neașteptată de situație în poveste.</li>\n  <li><code>Blockbuster</code> — film comercial cu buget uriaș și succes masiv de casă.</li>\n  <li><code>Soundtrack (OST)</code> — coloana sonoră originală compusă pentru film.</li>\n  <li><code>Binge-watch</code> — a viziona mai multe episoade sau un sezon întreg dintr-un serial fără oprire.</li>\n  <li><code>Lead actor / actress</code> — actorul / actrița în rolul principal.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Plot twist",
        "def": "Schimbare bruscă și surprinzătoare în evoluția intrigii narative."
      },
      {
        "term": "Blockbuster",
        "def": "Film comercial de mare succes financiar la box-office."
      },
      {
        "term": "Binge-watch",
        "def": "Obiceiul modern de a consuma episoade consecutive ale unui serial într-o singură sesiune."
      },
      {
        "term": "Cinematography",
        "def": "Arta compoziției vizuale, a unghiurilor de filmare și a iluminării într-un film."
      }
    ],
    "matchingPairs": [
      {
        "left": "Unexpected plot twist",
        "right": "Întorsătură neașteptată de situație"
      },
      {
        "left": "I binge-watched the whole season",
        "right": "Am văzut tot sezonul dintr-o răsuflare"
      },
      {
        "left": "The soundtrack is breathtaking",
        "right": "Coloana sonoră îți taie răsuflarea"
      },
      {
        "left": "Directed by a visionary filmmaker",
        "right": "Regizat de un cineast vizionar"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă expresia modernă 'to binge-watch a series'?",
      "options": [
        "A viziona multe episoade consecutive dintr-un serial fără pauză.",
        "A scrie o recenzie negativă despre un film.",
        "A merge la cinematograf cu prietenii.",
        "A șterge contul de pe platforma de streaming."
      ],
      "correctIndex": 0,
      "explanation": "'Binge-watch' descrie vizionarea maraton a mai multor episoade dintr-un serial într-o perioadă scurtă de timp."
    },
    "task": "Scrie recenzia scurtă 'The movie had an amazing plot twist at the end.'.",
    "starterCode": "The movie had an ",
    "expectedOutputPattern": "The\\s+movie\\s+had\\s+an\\s+amazing\\s+plot\\s+twist\\s+at\\s+the\\s+end\\.?",
    "hint": "Scrie The movie had an amazing plot twist at the end."
  },
  {
    "id": "eng-h-4",
    "track": "Engleză: Familie & Hobby",
    "division": "Limbi Străine & Comunicare",
    "icon": "🎨",
    "level": "4. Senior / B2",
    "xp": 50,
    "title": "Capitolul 4: Călătorii de Aventură & Imersiune Culturală (Travel & Adventure)",
    "theory": "\n<p>Călătoriile moderne pun accent pe <strong>turismul sustenabil</strong> și pe explorarea locurilor autentice, dincolo de traseele turistice aglomerate.</p>\n<h4>1. Colocații Idiomatice de Călătorie</h4>\n<ul>\n  <li><code>Off the beaten track</code> — departe de traseele turistice convenționale, într-o zonă izolată și autentică.</li>\n  <li><code>Travel on a shoestring</code> — a călători cu un buget extrem de redus (economic).</li>\n  <li><code>Wanderlust</code> — dorința puternică și irezistibilă de a călători și de a explora lumea.</li>\n  <li><code>Cultural immersion</code> — integrarea completă în tradițiile, mâncarea și viața comunității locale.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Off the beaten track",
        "def": "Locații neatinse de turismul de masă; destinații autentice și liniștite."
      },
      {
        "term": "Travel on a shoestring",
        "def": "Călătorie realizată cu fonduri financiare minime, dormind în hosteluri."
      },
      {
        "term": "Wanderlust",
        "def": "Pasiune profundă pentru călătorii și descoperirea de noi culturi."
      },
      {
        "term": "Itinerary",
        "def": "Planul detaliat zi cu zi al traseului și obiectivelor unei călătorii."
      }
    ],
    "matchingPairs": [
      {
        "left": "Explore off the beaten track",
        "right": "Explorează dincolo de traseele turistice aglomerate"
      },
      {
        "left": "A severe case of wanderlust",
        "right": "O dorință nestăvilită de a călători prin lume"
      },
      {
        "left": "Backpacking across South America",
        "right": "Călătorie cu rucsacul în spate prin America de Sud"
      },
      {
        "left": "Deep cultural immersion",
        "right": "Integrare completă în cultura comunității locale"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă când cineva spune că preferă destinațiile 'off the beaten track'?",
      "options": [
        "Preferă locuri autentice, mai puțin cunoscute și neaglomerate de autocarele de turiști.",
        "Călătorește exclusiv cu trenuri de mare viteză.",
        "Nu părăsește niciodată camera de hotel.",
        "Vizitează doar parcuri tematice din marile capitale."
      ],
      "correctIndex": 0,
      "explanation": "'Off the beaten track' se referă la destinații izolate, puțin circulate de turiștii obișnuiți, care oferă experiențe locale autentice."
    },
    "task": "Scrie propoziția de călătorie 'We prefer traveling off the beaten track to experience authentic culture.'.",
    "starterCode": "We prefer traveling ",
    "expectedOutputPattern": "We\\s+prefer\\s+traveling\\s+off\\s+the\\s+beaten\\s+track\\s+to\\s+experience\\s+authentic\\s+culture\\.?",
    "hint": "Scrie We prefer traveling off the beaten track to experience authentic culture."
  }
];
