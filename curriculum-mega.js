// MEGA EXPANDED CURRICULUM — ALL TRACKS DEEP-DIVE
const MEGA_EXPANDED_CURRICULUM = [
  {
    "id": "py-new-1",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Sintaxă, Structuri Condiționale (if-elif-else) & Bucle",
    "theory": "\n<p>Python este un limbaj de programare cu tipizare dinamică și sintaxă bazată pe <strong>indentare strictă</strong> (4 spații conform standardului PEP 8). În Python, blocurile de cod nu folosesc acolade <code>{}</code>, ci caracterul două puncte (<code>:</code>) urmat de un bloc indentat.</p>\n\n<h4>1. Structura Condițională: if, elif și else</h4>\n<p>Instrucțiunea <code>if</code> evaluează o expresie booleană (<code>True</code> sau <code>False</code>). Dacă prima condiție este falsă, se evaluează succesiv ramurile <code>elif</code> (prescurtare de la <em>else if</em>), iar dacă toate eșuează, se execută ramura opțională <code>else</code>.</p>\n\n<pre><code># Exemplu 1: Clasificarea unui scor numeric\nscor = 85\n\nif scor >= 90:\n    calificativ = \"Excelent\"\nelif scor >= 70:\n    calificativ = \"Bine\"\nelif scor >= 50:\n    calificativ = \"Suficient\"\nelse:\n    calificativ = \"Respins\"\n\nprint(f\"Rezultat final: {calificativ}\")\n# Output: Rezultat final: Bine\n</code></pre>\n\n<h4>2. Operatori Logici & Expresii Ternare</h4>\n<p>Operatorii logici sunt cuvinte native: <code>and</code> (și logic), <code>or</code> (sau logic), <code>not</code> (negație). De asemenea, Python oferă o sintaxă ternară elegantă într-o singură linie: <code>valoare_daca_true if conditie else valoare_daca_false</code>.</p>\n\n<pre><code># Exemplu 2: Verificare cu operatori logici și ternar\nvarsta = 20\nare_permis = True\n\nif varsta >= 18 and are_permis:\n    print(\"Poate conduce pe drumuri publice.\")\n\n# Operatorul ternar într-o singură linie:\nstatut = \"Major\" if varsta >= 18 else \"Minor\"\nprint(f\"Statut: {statut}\")\n</code></pre>\n\n<h4>3. Bucle & Iterare Idiomatică cu enumerate()</h4>\n<p>Bucla <code>for element in iterabil:</code> parcurge direct valorile unei colecții. Când ai nevoie atât de <strong>indexul</strong> elementului, cât și de <strong>valoarea</strong> lui, folosești funcția nativă <code>enumerate(iterabil, start=0)</code>:</p>\n\n<pre><code># Exemplu 3: Iterare cu index și valoare\ncursuri = [\"Python\", \"SQL\", \"Docker\"]\n\nfor idx, curs in enumerate(cursuri, start=1):\n    print(f\"Modulul {idx}: {curs}\")\n# Output:\n# Modulul 1: Python\n# Modulul 2: SQL\n# Modulul 3: Docker\n</code></pre>\n",
    "glossary": [
      {
        "term": "Indentare (PEP 8)",
        "def": "Regulă strictă de 4 spații per nivel de bloc de cod în loc de acolade sau begin/end."
      },
      {
        "term": "elif",
        "def": "Prescurtare de la 'else if', testează o condiție secundară dacă anterioara a fost falsă."
      },
      {
        "term": "Operator Ternar",
        "def": "Expresie compactă: x if conditie else y ce returnează o valoare condiționată."
      },
      {
        "term": "enumerate()",
        "def": "Funcție nativă ce generează tupluri de tipul (index, element) la fiecare pas al buclei."
      }
    ],
    "matchingPairs": [
      {
        "left": "if conditie:",
        "right": "Verifică prima condiție booleană"
      },
      {
        "left": "elif alta_conditie:",
        "right": "Condiție alternativă când if a eșuat"
      },
      {
        "left": "else:",
        "right": "Se execută când toate ramurile if/elif sunt false"
      },
      {
        "left": "enumerate(lista)",
        "right": "Generează perechi paralele (index, valoare)"
      }
    ],
    "quiz": {
      "question": "Ce va afișa următorul cod Python?\n\nx = 15\nif x > 20:\n    print('A')\nelif x >= 10:\n    print('B')\nelse:\n    print('C')",
      "options": [
        "B (deoarece prima condiție e falsă, iar 15 >= 10 este True)",
        "A",
        "C",
        "A și B simultan"
      ],
      "correctIndex": 0,
      "explanation": "Execuția verifică x > 20 (fals), apoi testează elif x >= 10 (adevărat), afișează 'B' și oprește evaluarea lanțului."
    },
    "task": "Completează structura if - elif - else pentru variabila 'scor':\n- dacă scor >= 90, afișează 'Excelent' (print('Excelent'))\n- elif scor >= 50, afișează 'Admis' (print('Admis'))\n- else, afișează 'Respins' (print('Respins')).",
    "starterCode": "scor = 85\n\n# Scrie condiția if, elif și else:\nif scor >= 90:\n    print(\"Excelent\")\nelif scor >= 50:\n    print(\"Admis\")\nelse:\n    print(\"Respins\")\n",
    "expectedOutputPattern": "if\\s+scor\\s*>=\\s*90\\s*:[\\s\\S]+?elif\\s+scor\\s*>=\\s*50\\s*:[\\s\\S]+?else\\s*:",
    "hint": "Folosește if scor >= 90:, apoi elif scor >= 50: și finalizează cu else:.",
    "prompt": "Completează structura if - elif - else pentru variabila 'scor':\n- dacă scor >= 90, afișează 'Excelent' (print('Excelent'))\n- elif scor >= 50, afișează 'Admis' (print('Admis'))\n- else, afișează 'Respins' (print('Respins')).",
    "officialSolution": "Folosește if scor >= 90:, apoi elif scor >= 50: și finalizează cu else:.",
    "example": "Folosește if scor >= 90:, apoi elif scor >= 50: și finalizează cu else:.",
    "regexPattern": "if\\s+scor\\s*>=\\s*90\\s*:[\\s\\S]+?elif\\s+scor\\s*>=\\s*50\\s*:[\\s\\S]+?else\\s*:"
  },
  {
    "id": "py-new-2",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 2: Liste, Tuple-uri & Tehnica Slicing",
    "theory": "\n<p>Listele (<code>list</code>) sunt structuri mutabile ordonate, pe când tuple-urile (<code>tuple</code>) sunt secvențe imutabile protejate împotriva modificării accidentale.</p>\n\n<h4>1. Sintaxa Slicing [start:stop:step]</h4>\n<p>Slicing-ul permite extragerea de felii dintr-o secvență fără a modifica lista originală. Indexul de <code>stop</code> este exclusiv. Un pas negativ (<code>step = -1</code>) inversează întreaga secvență:</p>\n\n<pre><code># Exemplu 1: Slicing pe liste\nnumere = [10, 20, 30, 40, 50, 60]\n\nsublista = numere[1:4]   # De la index 1 la 3: [20, 30, 40]\ninvers = numere[::-1]     # Inversare O(n): [60, 50, 40, 30, 20, 10]\npas_doi = numere[::2]     # Fiecare al 2-lea element: [10, 30, 50]\n</code></pre>\n\n<h4>2. Unpacking de Secvențe (Star Operator)</h4>\n<p>Operatorul steluță (<code>*</code>) permite capturarea restului elementelor la despachetare:</p>\n\n<pre><code># Exemplu 2: Extended Unpacking\ncoordonate = (100, 20, 30, 40, 500)\nprimul, *mijloc, ultimul = coordonate\n\nprint(primul)   # 100\nprint(mijloc)   # [20, 30, 40]\nprint(ultimul)  # 500\n</code></pre>\n",
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
    "task": "Inversează lista 'data' folosind sintaxa slicing cu step negativ și stochează rezultatul în variabila 'reversed_data'.",
    "starterCode": "data = [1, 2, 3, 4, 5]\nreversed_data = ",
    "expectedOutputPattern": "reversed_data\\s*=\\s*data\\[::-1\\]",
    "hint": "Folosește slicing-ul data[::-1] pentru a crea o copie inversată a listei.",
    "prompt": "Inversează lista 'data' folosind sintaxa slicing cu step negativ și stochează rezultatul în variabila 'reversed_data'.",
    "officialSolution": "Folosește slicing-ul data[::-1] pentru a crea o copie inversată a listei.",
    "example": "Folosește slicing-ul data[::-1] pentru a crea o copie inversată a listei.",
    "regexPattern": "reversed_data\\s*=\\s*data\\[::-1\\]"
  },
  {
    "id": "py-new-3",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 3: Dicționare & Seturi (Hash Tables Native)",
    "theory": "\n<p>Dicționarele (<code>dict</code>) și seturile (<code>set</code>) din Python sunt implementate ca tabele hash de înaltă performanță, oferind timp mediu de căutare, inserare și ștergere $O(1)$.</p>\n\n<h4>1. Dicționare & Acces Securizat cu .get()</h4>\n<p>Accesarea unei chei inexistente cu <code>dict[cheie]</code> aruncă o excepție <code>KeyError</code>. Metoda <code>dict.get(cheie, default)</code> returnează valoarea fallback fără a întrerupe execuția programului:</p>\n\n<pre><code># Exemplu 1: Utilizarea metodei .get()\nconfiguratie = {\"host\": \"localhost\", \"port\": 5432}\n\n# Sigur, returnează 30 dacă cheia 'timeout' nu există:\ntimeout = configuratie.get(\"timeout\", 30)\nprint(f\"Timeout aplicat: {timeout} secunde\")\n</code></pre>\n\n<h4>2. Seturi (Mulțimi Matematice)</h4>\n<p>Seturile elimină automat duplicatele și oferă operatori rapizi de mulțimi:</p>\n\n<pre><code># Exemplu 2: Operații pe mulțimi\nbackend = {\"Python\", \"SQL\", \"Docker\"}\nfrontend = {\"JavaScript\", \"React\", \"Docker\"}\n\ncomune = backend & frontend      # Intersecție: {'Docker'}\ntoate = backend | frontend       # Reuniune: {'Python', 'SQL', 'Docker', 'JavaScript', 'React'}\ndoar_backend = backend - frontend # Diferență: {'Python', 'SQL'}\n</code></pre>\n",
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
        "term": "Intersecție (&)",
        "def": "Operație între două seturi ce returnează doar elementele comune ambelor mulțimi."
      },
      {
        "term": "Reuniune (|)",
        "def": "Operație ce unește toate elementele distincte din două mulțimi."
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
    "hint": "Apelează settings.get('timeout', 30).",
    "prompt": "Extrage din dicționarul 'settings' cheia 'timeout' cu valoarea implicită 30 folosind metoda .get().",
    "officialSolution": "Apelează settings.get('timeout', 30).",
    "example": "Apelează settings.get('timeout', 30).",
    "regexPattern": "timeout\\s*=\\s*settings\\.get\\([\"']timeout[\"'],\\s*30\\)"
  },
  {
    "id": "py-new-4",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "2. Junior",
    "xp": 35,
    "title": "Capitolul 4: List, Dict & Set Comprehensions",
    "theory": "\n<p>Comprehensions sunt construcții declarative sintetice și optimizate la nivel de bytecode CPython, fiind semnificativ mai rapide decât buclele clasice <code>for</code> cu <code>.append()</code>.</p>\n\n<h4>1. List Comprehensions cu Filtrare</h4>\n<p>Sintaxa de bază este: <code>[expresie for element in iterabil if conditie]</code>.</p>\n\n<pre><code># Exemplu 1: List Comprehension\nnumere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# Pătratele numerelor pare:\npatrate_pare = [x ** 2 for x in numere if x % 2 == 0]\nprint(patrate_pare) # [4, 16, 36, 64, 100]\n</code></pre>\n\n<h4>2. Dict Comprehensions</h4>\n<p>Sintaxa pentru dicționare este: <code>{cheie_expr: val_expr for element in iterabil if conditie}</code>.</p>\n\n<pre><code># Exemplu 2: Dict Comprehension\nutilizatori = [\"ana\", \"bogdan\", \"cristi\"]\nlungimi = {nume: len(nume) for nume in utilizatori}\nprint(lungimi) # {'ana': 3, 'bogdan': 6, 'cristi': 6}\n</code></pre>\n",
    "glossary": [
      {
        "term": "List Comprehension",
        "def": "Sintaxă compactă [expr for x in iterable if cond] ce creează o listă nouă."
      },
      {
        "term": "Dict Comprehension",
        "def": "Construcție {k: v for x in iterable} pentru generarea rapidă de dicționare."
      },
      {
        "term": "Bytecode Optimization",
        "def": "Comprehensions rulează într-o instrucțiune CPython optimizată fără overhead de funcție."
      },
      {
        "term": "Filtru 'if'",
        "def": "Clauză opțională plasată la final pentru selectarea elementelor ce respectă un criteriu."
      }
    ],
    "matchingPairs": [
      {
        "left": "[x*2 for x in data]",
        "right": "Dublează fiecare element într-o listă"
      },
      {
        "left": "{x: x**2 for x in range(5)}",
        "right": "Creează un dicționar cu pătrate"
      },
      {
        "left": "{x for x in data}",
        "right": "Set comprehension (valori unice)"
      },
      {
        "left": "[x for x in data if x > 0]",
        "right": "Filtrează doar numerele pozitive"
      }
    ],
    "quiz": {
      "question": "Ce va produce expresia [x for x in range(6) if x % 2 != 0]?",
      "options": [
        "[1, 3, 5]",
        "[0, 2, 4]",
        "[1, 2, 3, 4, 5]",
        "[2, 4, 6]"
      ],
      "correctIndex": 0,
      "explanation": "range(6) produce 0..5, iar condiția x % 2 != 0 filtrează exclusiv numerele impare: [1, 3, 5]."
    },
    "task": "Creează o listă 'evens' conținând numerele pare din 'numbers' folosind un list comprehension cu clauza 'if x % 2 == 0'.",
    "starterCode": "numbers = [1, 2, 3, 4, 5, 6, 7, 8]\nevens = ",
    "expectedOutputPattern": "evens\\s*=\\s*\\[\\s*x\\s+for\\s+x\\s+in\\s+numbers\\s+if\\s+x\\s*%\\s*2\\s*==\\s*0\\s*\\]",
    "hint": "Scrie: [x for x in numbers if x % 2 == 0].",
    "prompt": "Creează o listă 'evens' conținând numerele pare din 'numbers' folosind un list comprehension cu clauza 'if x % 2 == 0'.",
    "officialSolution": "Scrie: [x for x in numbers if x % 2 == 0].",
    "example": "Scrie: [x for x in numbers if x % 2 == 0].",
    "regexPattern": "evens\\s*=\\s*\\[\\s*x\\s+for\\s+x\\s+in\\s+numbers\\s+if\\s+x\\s*%\\s*2\\s*==\\s*0\\s*\\]"
  },
  {
    "id": "py-new-5",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 5: Manipularea Fișierelor & Context Managers ('with')",
    "theory": "\n<p>Gestionarea resurselor externe (fișiere, conexiuni socket, baze de date) necesită eliberarea garantată a descriptorilor de fișiere pentru a preveni memory leaks.</p>\n\n<h4>1. Instrucțiunea 'with' & Protocolul Context Manager</h4>\n<p>Blocul <code>with</code> apelează automat metoda <code>__enter__()</code> la intrare și garantează apelul metodei <code>__exit__()</code> la ieșire, chiar dacă survine o eroare sau o excepție neașteptată:</p>\n\n<pre><code># Exemplu 1: Citirea sigură a unui fișier cu encoding UTF-8\nwith open(\"raport.txt\", \"r\", encoding=\"utf-8\") as f:\n    continut = f.read()\n    # Fișierul este automat închis la ieșirea din bloc!\n</code></pre>\n\n<h4>2. Scriere & Adăugare (Append)</h4>\n<p>Modul <code>'w'</code> suprascrie fișierul, în timp ce <code>'a'</code> adaugă conținut nou la sfârșit:</p>\n\n<pre><code># Exemplu 2: Scriere de date\nwith open(\"log.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"Eveniment salvat cu succes.\\n\")\n</code></pre>\n",
    "glossary": [
      {
        "term": "Context Manager",
        "def": "Obiect ce implementează __enter__ și __exit__ pentru administrarea sigură a resurselor."
      },
      {
        "term": "with open(...) as f",
        "def": "Construcție idiomatică ce asigură închiderea fișierului fără apel manual la f.close()."
      },
      {
        "term": "__exit__()",
        "def": "Metodă apelată automat ce eliberează resursele chiar și în cazul unei excepții aruncate."
      },
      {
        "term": "Encoding UTF-8",
        "def": "Standardul recomandat pentru citirea și scrierea caracterelor cu diacritice."
      }
    ],
    "matchingPairs": [
      {
        "left": "open(file, 'r')",
        "right": "Deschide fișierul pentru citire"
      },
      {
        "left": "open(file, 'w')",
        "right": "Deschide pentru scriere (suprascrie)"
      },
      {
        "left": "open(file, 'a')",
        "right": "Deschide pentru adăugare la final (append)"
      },
      {
        "left": "with open(...) as f:",
        "right": "Închide automat fișierul la ieșire"
      }
    ],
    "quiz": {
      "question": "De ce este considerată utilizarea clauzei 'with open(...)' o practică superioară apelului 'f = open(...); f.close()'?",
      "options": [
        "Garantează închiderea fișierului chiar dacă apare o excepție în interiorul blocului.",
        "Rulează citirea pe mai multe thread-uri paralele în fundal.",
        "Comprimă automat datele pe hard disk.",
        "Permite doar fișiere de tip JSON."
      ],
      "correctIndex": 0,
      "explanation": "Context managerul garantează execuția metodei __exit__() care închide fișierul indiferent dacă apare o eroare în blocul with."
    },
    "task": "Deschide fișierul 'data.txt' în modul citire ('r') cu encoding-ul 'utf-8' folosind instrucțiunea 'with open(...) as f:'.",
    "starterCode": "Scrie: with open('data.txt', 'r', encoding='utf-8') as f:.",
    "expectedOutputPattern": "with\\s+open\\([\"']data\\.txt[\"'],\\s*[\"']r[\"'],\\s*encoding=[\"']utf-8[\"']\\)\\s+as\\s+f\\s*:",
    "hint": "Scrie: with open('data.txt', 'r', encoding='utf-8') as f:.",
    "prompt": "Deschide fișierul 'data.txt' în modul citire ('r') cu encoding-ul 'utf-8' folosind instrucțiunea 'with open(...) as f:'.",
    "officialSolution": "Scrie: with open('data.txt', 'r', encoding='utf-8') as f:.",
    "example": "Scrie: with open('data.txt', 'r', encoding='utf-8') as f:.",
    "regexPattern": "with\\s+open\\([\"']data\\.txt[\"'],\\s*[\"']r[\"'],\\s*encoding=[\"']utf-8[\"']\\)\\s+as\\s+f\\s*:"
  },
  {
    "id": "py-new-6",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 6: Gestiunea Excepțiilor & Clauza 'finally'",
    "theory": "\n<p>În Python, tratarea excepțiilor se realizează prin blocul <code>try - except - else - finally</code>.</p>\n\n<h4>1. Anatomia Completă a Gestiunii Excepțiilor</h4>\n<ul>\n  <li><code>try</code>: Conține codul periculos ce poate arunca o excepție.</li>\n  <li><code>except TipExceptie as err</code>: Tratează specific tipul de eroare interceptat.</li>\n  <li><code>else</code>: Se execută <strong>doar dacă nu s-a aruncat nicio excepție</strong> în blocul <code>try</code>.</li>\n  <li><code>finally</code>: Se execută <strong>întotdeauna</strong>, indiferent dacă a apărut sau nu o eroare.</li>\n</ul>\n\n<pre><code># Exemplu complet de gestiune a erorilor\ndef parseaza_varsta(text):\n    try:\n        valoare = int(text)\n    except ValueError as err:\n        print(f\"Eroare de conversie: {err}\")\n        return None\n    else:\n        print(f\"Număr convertit cu succes: {valoare}\")\n        return valoare\n    finally:\n        print(\"Curățare resurse finalizată.\")\n</code></pre>\n",
    "glossary": [
      {
        "term": "try - except",
        "def": "Mecanismul de bază de capturare și remediere a erorilor runtime."
      },
      {
        "term": "clauza else",
        "def": "Bloc opțional ce rulează exclusiv dacă blocul try s-a încheiat fără nicio eroare."
      },
      {
        "term": "clauza finally",
        "def": "Bloc garantat de curățare ce rulează indiferent de succesul sau eșecul try-ului."
      },
      {
        "term": "ValueError",
        "def": "Excepție aruncată când o funcție primește un argument de tip corect dar cu valoare invalidă."
      }
    ],
    "matchingPairs": [
      {
        "left": "except ValueError as e:",
        "right": "Capturează eroarea de conversie într-o variabilă"
      },
      {
        "left": "else:",
        "right": "Rulează doar când nu a apărut nicio eroare"
      },
      {
        "left": "finally:",
        "right": "Se execută întotdeauna la final"
      },
      {
        "left": "raise RuntimeError('msg')",
        "right": "Aruncă explicit o excepție nouă"
      }
    ],
    "quiz": {
      "question": "Când se execută codul aflat în interiorul clauzei 'else' a unui bloc try-except?",
      "options": [
        "Doar atunci când blocul try se finalizează cu succes, fără nicio excepție.",
        "Întotdeauna, la fel ca blocul finally.",
        "Doar atunci când apare o excepție de tip KeyError.",
        "Niciodată, este ignorat de interpreter."
      ],
      "correctIndex": 0,
      "explanation": "În Python, blocul else din try-except se execută doar dacă nicio excepție nu a fost aruncată în interiorul blocului try."
    },
    "task": "Scrie un bloc try-except care încearcă conversia 'val = int(text)' și capturează 'ValueError as e:' afișând print('Invalid').",
    "starterCode": "text = \"abc\"\n# Scrie blocul try-except\n",
    "expectedOutputPattern": "try\\s*:[\\s\\S]+?val\\s*=\\s*int\\(text\\)[\\s\\S]+?except\\s+ValueError\\s+as\\s+\\w+\\s*:[\\s\\S]+?print\\([\"']Invalid[\"']\\)",
    "hint": "Scrie try: urmat de val = int(text) și except ValueError as e: print('Invalid').",
    "prompt": "Scrie un bloc try-except care încearcă conversia 'val = int(text)' și capturează 'ValueError as e:' afișând print('Invalid').",
    "officialSolution": "try: urmat de val = int(text) și except ValueError as e: print('Invalid').",
    "example": "try: urmat de val = int(text) și except ValueError as e: print('Invalid').",
    "regexPattern": "try\\s*:[\\s\\S]+?val\\s*=\\s*int\\(text\\)[\\s\\S]+?except\\s+ValueError\\s+as\\s+\\w+\\s*:[\\s\\S]+?print\\([\"']Invalid[\"']\\)"
  },
  {
    "id": "py-new-7",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 7: POO — Clase, Constructori '__init__' & 'self'",
    "theory": "\n<p>Programarea Orientată pe Obiecte (POO) în Python structurează datele și comportamentul asociat în <strong>clase</strong>.</p>\n\n<h4>1. Constructorul __init__ și Referința self</h4>\n<p>Metoda specială <code>__init__(self, ...)</code> este inițializatorul clasei. Parametrul <code>self</code> reprezintă instanța curentă a obiectului și este transmis automat la apelarea metodelor:</p>\n\n<pre><code># Exemplu complet de clasă POO\nclass Utilizator:\n    def __init__(self, nume: str, email: str):\n        self.nume = nume\n        self.email = email\n        self.activ = True\n\n    def trimite_notificare(self, mesaj: str) -> None:\n        if self.activ:\n            print(f\"Trimitere către {self.email}: {mesaj}\")\n\n# Instanțiere:\nu = Utilizator(\"Andrei\", \"andrei@polymath.com\")\nu.trimite_notificare(\"Bine ai venit!\")\n</code></pre>\n",
    "glossary": [
      {
        "term": "__init__",
        "def": "Metoda constructor/inițializator apelată automat la crearea unei noi instanțe."
      },
      {
        "term": "self",
        "def": "Referință explicită către instanța curentă a clasei transmisă ca prim parametru metodelor."
      },
      {
        "term": "Atribut de instanță",
        "def": "Variabilă legată de un obiect specific prin self.atribut."
      },
      {
        "term": "Instanțiere",
        "def": "Crearea unui obiect concret pe baza șablonului definit de o clasă."
      }
    ],
    "matchingPairs": [
      {
        "left": "class Utilizator:",
        "right": "Declară șablonul unei noi clase"
      },
      {
        "left": "def __init__(self, name):",
        "right": "Constructorul clasei cu inițializare"
      },
      {
        "left": "self.name = name",
        "right": "Atribuie valoarea unui câmp de instanță"
      },
      {
        "left": "user = Utilizator('Ion')",
        "right": "Instanțiază un nou obiect"
      }
    ],
    "quiz": {
      "question": "Ce rol are parametrul 'self' în definiția metodelor unei clase în Python?",
      "options": [
        "Reprezintă referința către instanța curentă a obiectului apelant.",
        "Este o variabilă globală accesibilă din orice modul.",
        "Este un cuvânt cheie rezervat ce obligă clasa să fie statică.",
        "Indică numărul de parametri transmiși funcției."
      ],
      "correctIndex": 0,
      "explanation": "Parametrul self asigură accesul la atributele și metodele instanței curente pe care s-a efectuat apelul."
    },
    "task": "Definește o clasă 'Developer' al cărei constructor '__init__(self, name, role)' setează 'self.name = name' și 'self.role = role'.",
    "starterCode": "class Developer: urmat de def __init__(self, name, role): self.name = name; self.role = role.",
    "expectedOutputPattern": "class\\s+Developer\\s*:[\\s\\S]+?def\\s+__init__\\s*\\(\\s*self,\\s*name,\\s*role\\s*\\)\\s*:[\\s\\S]+?self\\.name\\s*=\\s*name[\\s\\S]+?self\\.role\\s*=\\s*role",
    "hint": "Scrie class Developer: urmat de def __init__(self, name, role): self.name = name; self.role = role.",
    "prompt": "Definește o clasă 'Developer' al cărei constructor '__init__(self, name, role)' setează 'self.name = name' și 'self.role = role'.",
    "officialSolution": "class Developer: urmat de def __init__(self, name, role): self.name = name; self.role = role.",
    "example": "class Developer: urmat de def __init__(self, name, role): self.name = name; self.role = role.",
    "regexPattern": "class\\s+Developer\\s*:[\\s\\S]+?def\\s+__init__\\s*\\(\\s*self,\\s*name,\\s*role\\s*\\)\\s*:[\\s\\S]+?self\\.name\\s*=\\s*name[\\s\\S]+?self\\.role\\s*=\\s*role"
  },
  {
    "id": "py-new-8",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 8: Încapsulare cu '@property' și Setter",
    "theory": "\n<p>Decoratorul <code>@property</code> permite definirea de metode ce pot fi accesate ca atribute obișnuite, permițând validarea datelor și calculul dinamic (getter și setter).</p>\n\n<pre><code># Exemplu complet de @property cu validare în setter\nclass Produs:\n    def __init__(self, pret_initial: float):\n        self._pret = pret_initial\n\n    @property\n    def pret(self) -> float:\n        \"\"\"Getter pentru preț.\"\"\"\n        return self._pret\n\n    @pret.setter\n    def pret(self, valoare_noua: float) -> None:\n        \"\"\"Setter cu validare strictă.\"\"\"\n        if valoare_noua < 0:\n            raise ValueError(\"Prețul nu poate fi negativ!\")\n        self._pret = valoare_noua\n\np = Produs(100.0)\np.pret = 150.0  # Apelează transparent setter-ul cu validare\nprint(p.pret)   # 150.0\n</code></pre>\n",
    "glossary": [
      {
        "term": "@property",
        "def": "Decorator ce transformă o metodă într-un getter accesibil fără paranteze ca un atribut."
      },
      {
        "term": "@x.setter",
        "def": "Decorator asociat getter-ului pentru interceptarea și validarea modificărilor valorii."
      },
      {
        "term": "_atribut_privat",
        "def": "Convenție PEP 8 cu underscore inițial ce semnalează că atributul este intern clasei."
      },
      {
        "term": "Încapsulare",
        "def": "Principiu POO de protejare a stării interne și control al accesului prin metode dedicate."
      }
    ],
    "matchingPairs": [
      {
        "left": "@property",
        "right": "Definește getter-ul proprietății"
      },
      {
        "left": "@price.setter",
        "right": "Definește setter-ul de validare a proprietății"
      },
      {
        "left": "self._price",
        "right": "Atribut intern protejat prin convenție"
      },
      {
        "left": "p.price = 200",
        "right": "Invocare transparentă a metodei setter"
      }
    ],
    "quiz": {
      "question": "Ce avantaj major oferă utilizarea decoratorului @property în loc de metode clasice get_price() și set_price()?",
      "options": [
        "Păstrează o interfață curată de atribut (obj.price) permițând validare internă fără a strica backward-compatibility.",
        "Crește viteza de execuție de 10 ori prin compilare C.",
        "Obligă clasa să devină imutabilă pe durata execuției.",
        "Ascunde codul sursă de utilizatorii externi."
      ],
      "correctIndex": 0,
      "explanation": "@property permite accesarea obj.price în mod idiomatic și adăugarea ulterioară de validare fără modificarea codului apelant."
    },
    "task": "Definește un getter '@property def balance(self): return self._balance' în interiorul unei clase.",
    "starterCode": "class Account:\n    def __init__(self, amount):\n        self._balance = amount\n\n    # Adaugă @property pentru balance\n",
    "expectedOutputPattern": "@property\\s+def\\s+balance\\s*\\(\\s*self\\s*\\)\\s*:\\s*\\n\\s*return\\s+self\\._balance",
    "hint": "Scrie @property pe o linie, urmat de def balance(self): return self._balance.",
    "prompt": "Definește un getter '@property def balance(self): return self._balance' în interiorul unei clase.",
    "officialSolution": "@property pe o linie, urmat de def balance(self): return self._balance.",
    "example": "@property pe o linie, urmat de def balance(self): return self._balance.",
    "regexPattern": "@property\\s+def\\s+balance\\s*\\(\\s*self\\s*\\)\\s*:\\s*\\n\\s*return\\s+self\\._balance"
  },
  {
    "id": "py-new-9",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 9: Argumente Variabile '*args' și '**kwargs'",
    "theory": "\n<p>Sintaxa <code>*args</code> și <code>**kwargs</code> permite funcțiilor să accepte un număr dinamic și variabil de argumente poziționale și numite (keyword arguments).</p>\n\n<pre><code># Exemplu complet de funcție flexibilă cu *args și **kwargs\ndef construieste_interogare(tabel: str, *coloane, **filtre) -> str:\n    cols = \", \".join(coloane) if coloane else \"*\"\n    where = \" AND \".join([f\"{k} = '{v}'\" for k, v in filtre.items()])\n    \n    query = f\"SELECT {cols} FROM {tabel}\"\n    if where:\n        query += f\" WHERE {where}\"\n    return query\n\n# Apel flexibil:\nsql = construieste_interogare(\"users\", \"id\", \"email\", status=\"active\", role=\"admin\")\nprint(sql)\n# Output: SELECT id, email FROM users WHERE status = 'active' AND role = 'admin'\n</code></pre>\n",
    "glossary": [
      {
        "term": "*args",
        "def": "Colectează argumentele poziționale adiționale într-un tuplu (tuple)."
      },
      {
        "term": "**kwargs",
        "def": "Colectează argumentele numite (cheie=valoare) într-un dicționar (dict)."
      },
      {
        "term": "Argument Unpacking",
        "def": "Transmiterea unei liste (*list) sau a unui dicționar (**dict) la apelul unei funcții."
      },
      {
        "term": "Flexibilitate API",
        "def": "Capacitatea funcțiilor utilitare de a primi parametri necunoscuți în avans."
      }
    ],
    "matchingPairs": [
      {
        "left": "def f(*args):",
        "right": "Primește argumente poziționale ca tuplu"
      },
      {
        "left": "def f(**kwargs):",
        "right": "Primește argumente cu nume ca dicționar"
      },
      {
        "left": "func(*my_list)",
        "right": "Despachetează lista în argumente poziționale"
      },
      {
        "left": "func(**my_dict)",
        "right": "Despachetează dicționarul în keyword arguments"
      }
    ],
    "quiz": {
      "question": "Ce tip de date are parametrul kwargs în interiorul funcției def test(**kwargs)?",
      "options": [
        "dict (dicționar de perechi cheie-valoare)",
        "tuple (tuplu imutabil)",
        "list (listă ordonată)",
        "set (mulțime de valori unice)"
      ],
      "correctIndex": 0,
      "explanation": "**kwargs împachetează toți parametrii transmiși sub formă de cheie=valoare într-un dicționar standard Python."
    },
    "task": "Definește o funcție 'sum_all(*args)' care returnează suma argumentelor primite folosind 'return sum(args)'.",
    "starterCode": "Scrie: def sum_all(*args): return sum(args).",
    "expectedOutputPattern": "def\\s+sum_all\\s*\\(\\s*\\*args\\s*\\)\\s*:\\s*\\n\\s*return\\s+sum\\(args\\)",
    "hint": "Scrie: def sum_all(*args): return sum(args).",
    "prompt": "Definește o funcție 'sum_all(*args)' care returnează suma argumentelor primite folosind 'return sum(args)'.",
    "officialSolution": "Scrie: def sum_all(*args): return sum(args).",
    "example": "Scrie: def sum_all(*args): return sum(args).",
    "regexPattern": "def\\s+sum_all\\s*\\(\\s*\\*args\\s*\\)\\s*:\\s*\\n\\s*return\\s+sum\\(args\\)"
  },
  {
    "id": "py-new-10",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 10: Decoratori & Metaprogramare cu '@functools.wraps'",
    "theory": "\n<p>Un decorator este o funcție care primește o altă funcție ca argument și îi extinde comportamentul fără a-i modifica codul sursă. Pentru a păstra numele, docstring-ul și metadatele funcției originale, folosim întotdeauna <code>@functools.wraps</code>.</p>\n\n<pre><code>import time\nfrom functools import wraps\n\n# Decorator complet de măsurare a performanței:\ndef masoara_timp(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        rezultat = func(*args, **kwargs)\n        durata = time.perf_counter() - start\n        print(f\"[{func.__name__}] Executat în {durata:.6f}s\")\n        return rezultat\n    return wrapper\n\n@masoara_timp\ndef calcul_intensiv(n):\n    \"\"\"Calculează suma pătratelor.\"\"\"\n    return sum(i ** 2 for i in range(n))\n\nval = calcul_intensiv(1000000)\nprint(calcul_intensiv.__name__) # 'calcul_intensiv' (datorită @wraps!)\n</code></pre>\n",
    "glossary": [
      {
        "term": "Decorator",
        "def": "Funcție de ordin superior ce împachetează o altă funcție modificându-i comportamentul."
      },
      {
        "term": "@functools.wraps",
        "def": "Utilitar esențial ce copiază docstring-ul, numele și semnătura funcției originale în wrapper."
      },
      {
        "term": "Funcție de Ordin Superior",
        "def": "Funcție ce poate primi sau returna alte funcții ca valori cetățeni de rang 1."
      },
      {
        "term": "Metaprogramare",
        "def": "Tehnică prin care codul manipulează sau inspectează alte structuri de cod la runtime."
      }
    ],
    "matchingPairs": [
      {
        "left": "@my_decorator",
        "right": "Aplică decoratorul peste funcția definită dedesubt"
      },
      {
        "left": "@wraps(func)",
        "right": "Păstrează metadatele și numele funcției originale"
      },
      {
        "left": "wrapper(*args, **kwargs)",
        "right": "Funcția internă ce interceptează apelul"
      },
      {
        "left": "return wrapper",
        "right": "Decoratorul returnează funcția îmbunătățită"
      }
    ],
    "quiz": {
      "question": "Ce problemă rezolvă adăugarea @functools.wraps(func) pe funcția wrapper din interiorul unui decorator?",
      "options": [
        "Păstrează numele funcției originale (__name__) și docstring-ul, evitând suprascrierea cu 'wrapper'.",
        "Permite rularea funcției asincron pe GPU.",
        "Optimizează memoria prin compilare în C.",
        "Verifică tipurile de date ale argumentelor."
      ],
      "correctIndex": 0,
      "explanation": "Fără @wraps(func), introspecția (func.__name__) ar returna numele generic 'wrapper', perturbând logging-ul și documentația."
    },
    "task": "Completează decoratorul 'log_call' aplicând '@wraps(func)' deasupra funcției interne 'wrapper(*args, **kwargs)'.",
    "starterCode": "from functools import wraps\n\ndef log_call(func):\n    # Aplică decoratorul wraps\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper\n",
    "expectedOutputPattern": "@wraps\\(func\\)\\s*\\n\\s*def\\s+wrapper\\s*\\(\\s*\\*args,\\s*\\*\\*kwargs\\s*\\)",
    "hint": "Pune @wraps(func) chiar deasupra liniei def wrapper(*args, **kwargs):.",
    "prompt": "Completează decoratorul 'log_call' aplicând '@wraps(func)' deasupra funcției interne 'wrapper(*args, **kwargs)'.",
    "officialSolution": "Pune @wraps(func) chiar deasupra liniei def wrapper(*args, **kwargs):.",
    "example": "Pune @wraps(func) chiar deasupra liniei def wrapper(*args, **kwargs):.",
    "regexPattern": "@wraps\\(func\\)\\s*\\n\\s*def\\s+wrapper\\s*\\(\\s*\\*args,\\s*\\*\\*kwargs\\s*\\)"
  },
  {
    "id": "py-new-11",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 11: Generatoare & Protocolul Iterator ('yield')",
    "theory": "\n<p>Generatoarele produc valori <em>la cerere</em> (lazy evaluation) prin instrucțiunea <code>yield</code>, păstrându-și starea între apeluri fără a încărca întreaga colecție în memoria RAM ($O(1)$ memory footprint).</p>\n\n<pre><code># Exemplu complet de generator de date:\ndef citeste_linii_mari(cale_fisier):\n    \"\"\"Produce linii una câte una fără a bloca memoria.\"\"\"\n    with open(cale_fisier, \"r\", encoding=\"utf-8\") as f:\n        for linie in f:\n            yield linie.strip()\n\n# Generator expressions (sintaxă cu paranteze rotunde):\npatrate_gen = (x ** 2 for x in range(1000000000))\n# Memoria ocupată: doar câțiva octeți!\nprint(next(patrate_gen)) # 0\nprint(next(patrate_gen)) # 1\n</code></pre>\n",
    "glossary": [
      {
        "term": "yield",
        "def": "Instrucțiune ce suspendă funcția și returnează o valoare intermediară, reluând execuția ulterior."
      },
      {
        "term": "Lazy Evaluation",
        "def": "Calcul amânat până în momentul precis în care valoarea este solicitată de consumator."
      },
      {
        "term": "next(iterator)",
        "def": "Funcție nativă ce solicită următoarea valoare dintr-un generator sau aruncă StopIteration."
      },
      {
        "term": "O(1) Memory",
        "def": "Consum constant de memorie indiferent de dimensiunea secvenței generate."
      }
    ],
    "matchingPairs": [
      {
        "left": "yield x",
        "right": "Emite valoarea x și suspendă execuția funcției"
      },
      {
        "left": "next(gen)",
        "right": "Avansează generatorul la următorul yield"
      },
      {
        "left": "StopIteration",
        "right": "Excepție ce semnalează epuizarea generatorului"
      },
      {
        "left": "(x for x in data)",
        "right": "Generator expression cu evaluare leneșă"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă în memorie când creezi un generator cu g = (x for x in range(10**9))?",
      "options": [
        "Ocupă o cantitate minusculă de memorie constantă O(1), valorile fiind produse una câte una la cerere.",
        "Aruncă MemoryError deoarece nu încap un miliard de elemente în RAM.",
        "Pre-alocă 8 GB de memorie virtuală.",
        "Se blochează interpreterul până când se termină bucla."
      ],
      "correctIndex": 0,
      "explanation": "Generatoarele nu stochează valorile în memorie, ci memorează doar starea de execuție și algoritmul de calcul."
    },
    "task": "Scrie o funcție generator 'count_up(limit)' care generează numere de la 1 la limit folosind 'for i in range(1, limit + 1): yield i'.",
    "starterCode": "def count_up(limit): for i in range(1, limit + 1): yield i.",
    "expectedOutputPattern": "def\\s+count_up\\s*\\(\\s*limit\\s*\\)\\s*:[\\s\\S]+?for\\s+i\\s+in\\s+range\\(1,\\s*limit\\s*\\+\\s*1\\)\\s*:[\\s\\S]+?yield\\s+i",
    "hint": "Scrie def count_up(limit): for i in range(1, limit + 1): yield i.",
    "prompt": "Scrie o funcție generator 'count_up(limit)' care generează numere de la 1 la limit folosind 'for i in range(1, limit + 1): yield i'.",
    "officialSolution": "def count_up(limit): for i in range(1, limit + 1): yield i.",
    "example": "def count_up(limit): for i in range(1, limit + 1): yield i.",
    "regexPattern": "def\\s+count_up\\s*\\(\\s*limit\\s*\\)\\s*:[\\s\\S]+?for\\s+i\\s+in\\s+range\\(1,\\s*limit\\s*\\+\\s*1\\)\\s*:[\\s\\S]+?yield\\s+i"
  },
  {
    "id": "py-new-12",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 12: Structuri Avansate din Modulul 'collections'",
    "theory": "\n<p>Modulul standard <code>collections</code> oferă containere de înaltă performanță optimizate în C, ideale pentru statistici, procesare de fluxuri și cache-uri:</p>\n\n<pre><code>from collections import Counter, defaultdict, deque\n\n# 1. Counter: numărare instantă de frecvențe\ncuvinte = [\"python\", \"sql\", \"python\", \"docker\", \"python\", \"sql\"]\nfrecvente = Counter(cuvinte)\nprint(frecvente.most_common(2)) # [('python', 3), ('sql', 2)]\n\n# 2. defaultdict: previne KeyError cu valori implicite automate\ngrupe = defaultdict(list)\ngrupe[\"admin\"].append(\"Alex\") # Creează lista automat dacă cheia lipsește!\n\n# 3. deque: coadă dublu înlănțuită cu append/pop O(1) la ambele capete\ncoada = deque([1, 2, 3])\ncoada.appendleft(0) # Inserare instantanee la început O(1)\n</code></pre>\n",
    "glossary": [
      {
        "term": "Counter",
        "def": "Subclasă de dict optimizată pentru contorizarea frecvenței elementelor hashable."
      },
      {
        "term": "defaultdict",
        "def": "Dicționar ce apelează o fabrică (ex: list, int) când este accesată o cheie nouă."
      },
      {
        "term": "deque (Double-ended queue)",
        "def": "Coadă bidirecțională optimizată pentru inserare și extragere O(1) la ambele capete."
      },
      {
        "term": "Counter.most_common(n)",
        "def": "Returnează cele mai frecvente n elemente ordonate descrescător."
      }
    ],
    "matchingPairs": [
      {
        "left": "Counter(items)",
        "right": "Numără aparițiile fiecărui element"
      },
      {
        "left": "defaultdict(list)",
        "right": "Inițializează automat o listă goală pentru chei noi"
      },
      {
        "left": "deque.appendleft(x)",
        "right": "Inserare în timp constant O(1) la începutul cozii"
      },
      {
        "left": "counts.most_common(1)",
        "right": "Extrage elementul cu cea mai mare frecvență"
      }
    ],
    "quiz": {
      "question": "De ce este structura collections.deque superioară listei native pentru operații de inserare la începutul colecției?",
      "options": [
        "deque oferă complexitate O(1) la inserare la ambele capete, pe când list.insert(0, x) necesită deplasare O(n).",
        "deque ocupă de 10 ori mai puțin spațiu pe disc.",
        "listele native nu suportă valori de tip șir de caractere.",
        "deque nu permite valori duplicate."
      ],
      "correctIndex": 0,
      "explanation": "Listele Python sunt tablouri dinamice contigue unde inserarea la index 0 cere mutarea tuturor elementelor O(n), pe când deque este dublu înlănțuit O(1)."
    },
    "task": "Inițializează un 'defaultdict' cu fabrică de tip 'list' în variabila 'user_roles = defaultdict(list)'.",
    "starterCode": "from collections import defaultdict\nuser_roles = ",
    "expectedOutputPattern": "user_roles\\s*=\\s*defaultdict\\(list\\)",
    "hint": "Scrie user_roles = defaultdict(list).",
    "prompt": "Inițializează un 'defaultdict' cu fabrică de tip 'list' în variabila 'user_roles = defaultdict(list)'.",
    "officialSolution": "user_roles = defaultdict(list).",
    "example": "user_roles = defaultdict(list).",
    "regexPattern": "user_roles\\s*=\\s*defaultdict\\(list\\)"
  },
  {
    "id": "py-new-13",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 13: Type Hinting Modern & Modulul 'typing'",
    "theory": "\n<p>Type hints (PEP 484 / PEP 604) transformă Python într-un limbaj robust pentru companii enterprise, oferind autocompletare avansată în IDE și analiză statică cu <code>mypy</code>.</p>\n\n<pre><code>from typing import Optional, Union, List, Dict, Callable\n\n# În Python 3.10+, se poate folosi operatorul '|' (Union):\ndef gaseste_utilizator(user_id: int) -> Optional[dict]:\n    \"\"\"Returnează un dicționar sau None dacă utilizatorul lipsește.\"\"\"\n    if user_id <= 0:\n        return None\n    return {\"id\": user_id, \"name\": \"Elena\"}\n\n# Type alias modern:\nUserId = int\nScoresMap = Dict[str, List[float]]\n\ndef calculeaza_medie(scoruri: ScoresMap) -> float:\n    toate = [nota for note in scoruri.values() for nota in note]\n    return sum(toate) / len(toate) if toate else 0.0\n</code></pre>\n",
    "glossary": [
      {
        "term": "Optional[T]",
        "def": "Echivalent cu Union[T, None], semnalează că valoarea poate fi de tip T sau None."
      },
      {
        "term": "Union[A, B] (A | B)",
        "def": "Specifică faptul că un parametru sau return poate avea unul din tipurile menționate."
      },
      {
        "term": "mypy",
        "def": "Linterul oficial de verificare statică a tipurilor pentru Python."
      },
      {
        "term": "Type Alias",
        "def": "Definirea unui nume intuitiv pentru o compoziție complexă de tipuri."
      }
    ],
    "matchingPairs": [
      {
        "left": "Optional[str]",
        "right": "Poate fi un șir de caractere sau None"
      },
      {
        "left": "int | float",
        "right": "Sintaxă modernă Python 3.10+ pentru Union de tipuri"
      },
      {
        "left": "Callable[[int], bool]",
        "right": "Semnătură de funcție ce primește int și returnează bool"
      },
      {
        "left": "def f(x: int) -> str:",
        "right": "Parametru de tip întreg și retur de tip string"
      }
    ],
    "quiz": {
      "question": "Ce indică type hint-ul Optional[int] pentru valoarea de return a unei funcții?",
      "options": [
        "Funcția poate returna fie un număr întreg (int), fie valoarea None.",
        "Parametrul este opțional și nu trebuie furnizat la apel.",
        "Valoarea returnată este convertită automat în float dacă este pară.",
        "Funcția rulează doar în mod opțional."
      ],
      "correctIndex": 0,
      "explanation": "Optional[T] este un shorthand formal pentru Union[T, None], indicând explicit posibilitatea absenței valorii."
    },
    "task": "Adaugă type hinting complet pentru o funcție 'def get_length(text: str) -> int:' care returnează len(text).",
    "starterCode": "Scrie: def get_length(text: str) -> int: return len(text).",
    "expectedOutputPattern": "def\\s+get_length\\s*\\(\\s*text\\s*:\\s*str\\s*\\)\\s*->\\s*int\\s*:[\\s\\S]+?return\\s+len\\(text\\)",
    "hint": "Scrie: def get_length(text: str) -> int: return len(text).",
    "prompt": "Adaugă type hinting complet pentru o funcție 'def get_length(text: str) -> int:' care returnează len(text).",
    "officialSolution": "Scrie: def get_length(text: str) -> int: return len(text).",
    "example": "Scrie: def get_length(text: str) -> int: return len(text).",
    "regexPattern": "def\\s+get_length\\s*\\(\\s*text\\s*:\\s*str\\s*\\)\\s*->\\s*int\\s*:[\\s\\S]+?return\\s+len\\(text\\)"
  },
  {
    "id": "py-new-14",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 14: Clase de Date Moderne — '@dataclass'",
    "theory": "\n<p>Modulul <code>dataclasses</code> generează automat metodele <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code> și comparatori pe baza type annotations, eliminând complet codul boilerplate.</p>\n\n<pre><code>from dataclasses import dataclass, field\n\n@dataclass(frozen=True) # Obiect imutabil și hashable!\nclass Tranzactie:\n    id: str\n    suma: float\n    moneda: str = \"EUR\"\n    taguri: list = field(default_factory=list)\n\n# Utilizare:\nt1 = Tranzactie(\"tx_101\", 250.0, \"EUR\")\nt2 = Tranzactie(\"tx_101\", 250.0, \"EUR\")\n\nprint(t1)        # Tranzactie(id='tx_101', suma=250.0, moneda='EUR', taguri=[])\nprint(t1 == t2)  # True (comparație automată pe valori!)\n# t1.suma = 300 # Aruncă FrozenInstanceError dacă frozen=True!\n</code></pre>\n",
    "glossary": [
      {
        "term": "@dataclass",
        "def": "Decorator standard ce sintetizează automat metodele de instanțiere și reprezentare."
      },
      {
        "term": "frozen=True",
        "def": "Opțiune ce transformă instanța într-un obiect imutabil protejat împotriva mutațiilor."
      },
      {
        "term": "field(default_factory=...)",
        "def": "Metodă corectă de a atribui valori implicite mutabile (list, dict) într-o dataclass."
      },
      {
        "term": "__repr__ automat",
        "def": "Afișare lizibilă pentru debugging fără a scrie manual cod de formatare."
      }
    ],
    "matchingPairs": [
      {
        "left": "@dataclass",
        "right": "Generează automat __init__, __repr__ și __eq__"
      },
      {
        "left": "frozen=True",
        "right": "Face instanța imutabilă și compatibilă cu hash-uri"
      },
      {
        "left": "default_factory=list",
        "right": "Inițializare sigură pentru colecții mutabile"
      },
      {
        "left": "order_a == order_b",
        "right": "Compară câmpurile obiectelor valoare cu valoare"
      }
    ],
    "quiz": {
      "question": "De ce este interzis să scrii 'tags: list = []' direct ca valoare implicită într-o @dataclass?",
      "options": [
        "Lista ar fi partajată ca obiect mutabil comun între toate instanțele; trebuie folosit field(default_factory=list).",
        "Python nu suportă liste în interiorul dataclasses.",
        "Aruncă eroare de compilare CPython.",
        "Trebuie folosit exclusiv tuplu."
      ],
      "correctIndex": 0,
      "explanation": "La fel ca la parametrii funcțiilor, valorile implicite mutabile sunt evaluate o singură dată la definire; default_factory garantează o listă nouă per instanță."
    },
    "task": "Creează o clasă '@dataclass' numită 'Server' cu atributele 'host: str' și 'port: int = 8080'.",
    "starterCode": "from dataclasses import dataclass\n\n# Definește @dataclass Server\n",
    "expectedOutputPattern": "@dataclass\\s*\\n\\s*class\\s+Server\\s*:[\\s\\S]+?host\\s*:\\s*str[\\s\\S]+?port\\s*:\\s*int\\s*=\\s*8080",
    "hint": "Scrie @dataclass pe prima linie, urmat de class Server: host: str; port: int = 8080.",
    "prompt": "Creează o clasă '@dataclass' numită 'Server' cu atributele 'host: str' și 'port: int = 8080'.",
    "officialSolution": "@dataclass pe prima linie, urmat de class Server: host: str; port: int = 8080.",
    "example": "@dataclass pe prima linie, urmat de class Server: host: str; port: int = 8080.",
    "regexPattern": "@dataclass\\s*\\n\\s*class\\s+Server\\s*:[\\s\\S]+?host\\s*:\\s*str[\\s\\S]+?port\\s*:\\s*int\\s*=\\s*8080"
  },
  {
    "id": "py-new-15",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "4. Senior",
    "xp": 65,
    "title": "Capitolul 15: Asincronism Nativa cu 'asyncio' (Event Loop)",
    "theory": "\n<p>Modulul <code>asyncio</code> oferă execuție concurentă cooperativă prin <strong>coroutine</strong> bazate pe <code>async/await</code>, gestionate de un <strong>Event Loop</strong> single-threaded de înaltă performanță pentru sarcini I/O-bound (apeluri API, microservicii, websockets).</p>\n\n<pre><code>import asyncio\n\nasync def preia_utilizator(user_id: int) -> dict:\n    print(f\"Start fetch {user_id}...\")\n    await asyncio.sleep(0.5) # Simulare I/O asincron neblocant\n    return {\"id\": user_id, \"status\": \"activ\"}\n\nasync def main():\n    # Rulare concurentă cu asyncio.gather:\n    rezultate = await asyncio.gather(\n        preia_utilizator(1),\n        preia_utilizator(2),\n        preia_utilizator(3)\n    )\n    print(\"Toate datele preluate:\", rezultate)\n\n# Rulare Event Loop:\n# asyncio.run(main())\n</code></pre>\n",
    "glossary": [
      {
        "term": "Event Loop",
        "def": "Bucla centrală ce programează și distribuie execuția coroutinelor asincrone."
      },
      {
        "term": "async def",
        "def": "Definește o coroutină nativă ce nu rulează imediat, ci returnează un obiect awaitable."
      },
      {
        "term": "await",
        "def": "Punct de suspendare a execuției curente ce cedează controlul către Event Loop până la finalizarea I/O."
      },
      {
        "term": "asyncio.gather()",
        "def": "Lansează multiple coroutine concurent și așteaptă toate rezultatele simultan."
      }
    ],
    "matchingPairs": [
      {
        "left": "async def f():",
        "right": "Declară o funcție asincronă (coroutină)"
      },
      {
        "left": "await coro()",
        "right": "Așteaptă neblocant rezultatul unei coroutine"
      },
      {
        "left": "asyncio.gather(*tasks)",
        "right": "Rulează multiple task-uri concurent"
      },
      {
        "left": "asyncio.run(main())",
        "right": "Inițializează și rulează Event Loop-ul"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă apelezi o funcție declarată cu 'async def' fără să folosești operatorul 'await'?",
      "options": [
        "Funcția nu se execută, returnând doar un obiect de tip coroutină neevaluat.",
        "Funcția rulează sincron pe un nou thread.",
        "Aplicația se închide cu eroare de sintaxă.",
        "Returnează valoarea None instantaneu."
      ],
      "correctIndex": 0,
      "explanation": "Apelul unei coroutine fără await doar creează obiectul coroutine; acesta trebuie programat în Event Loop sau așteptat cu await pentru execuție."
    },
    "task": "Scrie o coroutină 'async def fetch_status(): await asyncio.sleep(0.1); return 200'.",
    "starterCode": "import asyncio\n\n# Definește coroutina fetch_status\n",
    "expectedOutputPattern": "async\\s+def\\s+fetch_status\\s*\\(\\s*\\)\\s*:[\\s\\S]+?await\\s+asyncio\\.sleep\\(0\\.1\\)[\\s\\S]+?return\\s+200",
    "hint": "Scrie: async def fetch_status(): await asyncio.sleep(0.1); return 200.",
    "prompt": "Scrie o coroutină 'async def fetch_status(): await asyncio.sleep(0.1); return 200'.",
    "officialSolution": "Scrie: async def fetch_status(): await asyncio.sleep(0.1); return 200.",
    "example": "Scrie: async def fetch_status(): await asyncio.sleep(0.1); return 200.",
    "regexPattern": "async\\s+def\\s+fetch_status\\s*\\(\\s*\\)\\s*:[\\s\\S]+?await\\s+asyncio\\.sleep\\(0\\.1\\)[\\s\\S]+?return\\s+200"
  },
  {
    "id": "py-new-16",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "5. Arhitect / Exemplar",
    "xp": 70,
    "title": "Capitolul 16: Arhitectura GIL & Concurență: Multiprocessing vs Threading",
    "theory": "\n<p><strong>Global Interpreter Lock (GIL)</strong> din CPython este un mutex care permite unui singur thread să execute bytecode Python la un moment dat. Din acest motiv, multi-threading-ul nu scalează pe CPU multicore pentru calcule intensive.</p>\n\n<pre><code># Matricea Decizională de Arhitect:\n# 1. I/O-Bound (Rețea, Disc) -> asyncio sau threading.Thread\n# 2. CPU-Bound (Machine Learning, Criptografie, Video) -> multiprocessing.Pool\n\nfrom multiprocessing import Pool\n\ndef calcul_greu(x):\n    return sum(i * i for i in range(x))\n\nif __name__ == \"__main__\":\n    # Ocolește complet GIL prin procese OS separate cu memorie izolată:\n    with Pool() as p:\n        rezultate = p.map(calcul_greu, [1000000, 2000000, 3000000])\n        print(\"Calcule paralele finalizate pe toate nucleele CPU:\", rezultate)\n</code></pre>\n",
    "glossary": [
      {
        "term": "GIL (Global Interpreter Lock)",
        "def": "Mecanism de sincronizare CPython ce previne execuția paralelă nativă a thread-urilor Python."
      },
      {
        "term": "I/O-Bound Tasks",
        "def": "Operații ce așteaptă rețeaua sau discul, eliberând GIL-ul pe durata așteptării."
      },
      {
        "term": "CPU-Bound Tasks",
        "def": "Calcule intensive ce necesită modulul multiprocessing pentru a utiliza toate nucleele procesorului."
      },
      {
        "term": "multiprocessing.Pool",
        "def": "Pool de procese de sistem separate ce ocolesc GIL prin instanțierea de procese paralele."
      }
    ],
    "matchingPairs": [
      {
        "left": "multiprocessing",
        "right": "Procese separate cu propriul interpreter CPython (fără limitare GIL)"
      },
      {
        "left": "threading",
        "right": "Thread-uri partajând aceeași memorie, limitate de GIL la CPU"
      },
      {
        "left": "I/O-bound",
        "right": "Sarcini ce beneficiază de asyncio sau threading"
      },
      {
        "left": "CPU-bound",
        "right": "Sarcini matematice ce cer multiprocessing multicore"
      }
    ],
    "quiz": {
      "question": "De ce este recomandat modulul multiprocessing în locul modulului threading pentru un algoritm de compresie video CPU-bound în Python?",
      "options": [
        "multiprocessing pornește procese de sistem independente, fiecare având propriul GIL și interpreter, scalând pe toate nucleele CPU.",
        "threading nu are voie să citească fișiere de pe disc.",
        "multiprocessing consumă mai puțină memorie decât un singur thread.",
        "GIL-ul accelerează doar codul matematic."
      ],
      "correctIndex": 0,
      "explanation": "Pentru CPU-bound, thread-urile se blochează reciproc la GIL. Doar procesele distincte rulează în paralel pe nuclee diferite."
    },
    "task": "Importă 'Pool' din 'multiprocessing' și inițializează un context manager 'with Pool() as pool:'.",
    "starterCode": "from multiprocessing import Pool pe prima linie și with Pool() as pool: dedesubt.",
    "expectedOutputPattern": "from\\s+multiprocessing\\s+import\\s+Pool[\\s\\S]+?with\\s+Pool\\(\\)\\s+as\\s+pool\\s*:",
    "hint": "Scrie from multiprocessing import Pool pe prima linie și with Pool() as pool: dedesubt.",
    "prompt": "Importă 'Pool' din 'multiprocessing' și inițializează un context manager 'with Pool() as pool:'.",
    "officialSolution": "from multiprocessing import Pool pe prima linie și with Pool() as pool: dedesubt.",
    "example": "from multiprocessing import Pool pe prima linie și with Pool() as pool: dedesubt.",
    "regexPattern": "from\\s+multiprocessing\\s+import\\s+Pool[\\s\\S]+?with\\s+Pool\\(\\)\\s+as\\s+pool\\s*:"
  },
  {
    "id": "py-new-17",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "5. Arhitect / Exemplar",
    "xp": 70,
    "title": "Capitolul 17: Metaclase & '__init_subclass__' (Metaprogramare la Nivel de Clasă)",
    "theory": "\n<p>O <strong>metaclasă</strong> este o „clasă a unei clase” (șablonul din care sunt instanțiate clasele). În Python modern (3.6+), metoda specială <code>__init_subclass__</code> oferă 90% din puterea metaclaselor într-o manieră mult mai simplă și lizibilă.</p>\n\n<pre><code># Exemplu de Plugin Registry automat cu __init_subclass__:\nclass PluginBase:\n    REGISTRY = {}\n\n    def __init_subclass__(cls, plugin_name=None, **kwargs):\n        super().__init_subclass__(**kwargs)\n        name = plugin_name or cls.__name__.lower()\n        cls.REGISTRY[name] = cls\n        print(f\"Plugin înregistrat automat în framework: '{name}'\")\n\n# Orice subclasă se înregistrează automat la definire:\nclass AudioPlugin(PluginBase, plugin_name=\"audio_mp3\"):\n    pass\n\nclass VideoPlugin(PluginBase, plugin_name=\"video_mp4\"):\n    pass\n\nprint(PluginBase.REGISTRY.keys()) # dict_keys(['audio_mp3', 'video_mp4'])\n</code></pre>\n",
    "glossary": [
      {
        "term": "Metaclass",
        "def": "Clasă a cărei instanță este o altă clasă (default este 'type')."
      },
      {
        "term": "__init_subclass__",
        "def": "Cârlig (hook) apelat automat la moștenire pentru validarea și înregistrarea subclaselor."
      },
      {
        "term": "Plugin Architecture",
        "def": "Design pattern ce permite descoperirea și activarea automată a modulelor fără cuplaj strâns."
      },
      {
        "term": "type(name, bases, dict)",
        "def": "Constructorul dinamic primitiv din CPython pentru crearea claselor la runtime."
      }
    ],
    "matchingPairs": [
      {
        "left": "__init_subclass__",
        "right": "Hook automat declanșat la crearea oricărei subclase"
      },
      {
        "left": "metaclass=type",
        "right": "Specificarea explicită a clasei părinte a clasei"
      },
      {
        "left": "PluginBase.REGISTRY",
        "right": "Registru centralizat populat automat la import"
      },
      {
        "left": "super().__init_subclass__",
        "right": "Păstrează lanțul de cooperare MRO"
      }
    ],
    "quiz": {
      "question": "Ce avantaj oferă metoda __init_subclass__ introdusă în PEP 487 comparativ cu definirea unei metaclase clasice?",
      "options": [
        "Permite personalizarea și validarea claselor derivate printr-o metodă curată fără complexitatea conflictelor de metaclase.",
        "Crește viteza de compilare a bytecode-ului.",
        "Interzice moștenirea multiplă.",
        "Este obligatorie pentru funcții asincrone."
      ],
      "correctIndex": 0,
      "explanation": "__init_subclass__ elimină nevoia de a scrie clase derivate din type, oferind o sintaxă mult mai lizibilă și evitând conflictele de metaclase."
    },
    "task": "Definește metoda '__init_subclass__(cls, **kwargs):' care apelează 'super().__init_subclass__(**kwargs)'.",
    "starterCode": "class Base:\n    # Adaugă __init_subclass__\n",
    "expectedOutputPattern": "def\\s+__init_subclass__\\s*\\(\\s*cls,\\s*\\*\\*kwargs\\s*\\)\\s*:[\\s\\S]+?super\\(\\)\\.__init_subclass__\\(\\*\\*kwargs\\)",
    "hint": "Scrie def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs).",
    "prompt": "Definește metoda '__init_subclass__(cls, **kwargs):' care apelează 'super().__init_subclass__(**kwargs)'.",
    "officialSolution": "def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs).",
    "example": "def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs).",
    "regexPattern": "def\\s+__init_subclass__\\s*\\(\\s*cls,\\s*\\*\\*kwargs\\s*\\)\\s*:[\\s\\S]+?super\\(\\)\\.__init_subclass__\\(\\*\\*kwargs\\)"
  },
  {
    "id": "py-new-18",
    "track": "Python",
    "division": "Informatică și Programare",
    "icon": "🐍",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 18: Validare Robustă de Date cu Pydantic",
    "theory": "\n<p><strong>Pydantic</strong> (nucleul framework-ului FastAPI) este biblioteca etalon pentru parsarea, validarea strictă și serializarea datelor bazată pe type hints de Python.</p>\n\n<pre><code>from pydantic import BaseModel, Field, EmailStr\n\n# Schemă robustă de date validate automat:\nclass UserSchema(BaseModel):\n    id: int\n    username: str = Field(min_length=3, max_length=20)\n    email: str\n    is_active: bool = True\n\n# Date primite dintr-un request JSON HTTP:\npayload_valid = {\"id\": 1, \"username\": \"dan_developer\", \"email\": \"dan@polymath.com\"}\nuser = UserSchema(**payload_valid)\nprint(user.username)     # 'dan_developer'\nprint(user.model_dump()) # Dicționar serializat curat\n\n# Dacă datele sunt greșite (ex: id=\"not_a_number\"), Pydantic aruncă ValidationError detaliat!\n</code></pre>\n",
    "glossary": [
      {
        "term": "BaseModel",
        "def": "Clasa de bază Pydantic ce oferă validare, parsare de tipuri și serializare JSON."
      },
      {
        "term": "Field()",
        "def": "Funcție pentru constrângeri avansate (min_length, ge, le, regex) și descrieri OpenAPI."
      },
      {
        "term": "ValidationError",
        "def": "Excepție structurată ce conține detalii precise despre câmpul invalid și motivul respingerii."
      },
      {
        "term": "model_dump()",
        "def": "Metodă Pydantic v2 de export al modelului într-un dicționar Python nativ."
      }
    ],
    "matchingPairs": [
      {
        "left": "class Model(BaseModel):",
        "right": "Definește o schemă Pydantic cu validare automată"
      },
      {
        "left": "Field(gt=0)",
        "right": "Constrângere numerică (mai mare decât 0)"
      },
      {
        "left": "model.model_dump()",
        "right": "Serializare în dicționar nativ"
      },
      {
        "left": "Model.model_validate(json)",
        "right": "Validare și parsare a datelor de intrare"
      }
    ],
    "quiz": {
      "question": "Ce face Pydantic atunci când primește un payload unde câmpul 'id' este șirul \"123\", deși a fost declarat ca 'id: int'?",
      "options": [
        "Convertește automat (coerciție de tip) șirul \"123\" în numărul întreg 123.",
        "Aruncă imediat ValidationError.",
        "Ignoră câmpul și îi dă valoarea None.",
        "Oprește serverul web."
      ],
      "correctIndex": 0,
      "explanation": "Pydantic este o bibliotecă de parsare și validare: încearcă coerciția sigură de tip; doar dacă '123' nu poate deveni int va arunca ValidationError."
    },
    "task": "Definește un model Pydantic 'class Item(BaseModel):' cu câmpurile 'name: str' și 'price: float'.",
    "starterCode": "from pydantic import BaseModel\n\n# Definește schema Item\n",
    "expectedOutputPattern": "class\\s+Item\\s*\\(\\s*BaseModel\\s*\\)\\s*:[\\s\\S]+?name\\s*:\\s*str[\\s\\S]+?price\\s*:\\s*float",
    "hint": "Scrie class Item(BaseModel): name: str; price: float pe linii separate indentate.",
    "prompt": "Definește un model Pydantic 'class Item(BaseModel):' cu câmpurile 'name: str' și 'price: float'.",
    "officialSolution": "class Item(BaseModel): name: str; price: float pe linii separate indentate.",
    "example": "class Item(BaseModel): name: str; price: float pe linii separate indentate.",
    "regexPattern": "class\\s+Item\\s*\\(\\s*BaseModel\\s*\\)\\s*:[\\s\\S]+?name\\s*:\\s*str[\\s\\S]+?price\\s*:\\s*float"
  },
  {
    "id": "cs-new-1",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Sintaxă C# 12 & Top-Level Statements",
    "theory": "\n<p>C# este un limbaj orientat pe obiecte, cu tipizare statică puternică, compilat în CIL (Common Intermediate Language) și rulat de mașina virtuală CLR (Common Language Runtime).</p>\n\n<h4>1. Top-Level Statements în C# 12</h4>\n<p>Programele moderne nu mai necesită clase <code>Program</code> sau metode <code>static void Main</code> explicite; instrucțiunile se scriu direct la nivelul superior al fișierului.</p>\n\n<pre><code>// Exemplu 1: Top-Level Statements și afișare interpolată în C# 12\nstring aplicatie = \"PolymathHub\";\nint versiune = 12;\nbool esteActiva = true;\n\nif (esteActiva) {\n    Console.WriteLine($\"Aplicația {aplicatie} v{versiune} este gata de rulare!\");\n} else {\n    Console.WriteLine(\"Serviciu inactiv.\");\n}\n// Output: Aplicația PolymathHub v12 este gata de rulare!\n</code></pre>\n\n<h4>2. Tipuri de Valoare (Stack) vs Tipuri de Referință (Heap)</h4>\n<p>Tipurile de valoare (<code>int</code>, <code>double</code>, <code>bool</code>, <code>struct</code>) sunt alocate pe <em>Stack</em>. Tipurile de referință (<code>string</code>, <code>class</code>, <code>record</code>) sunt alocate pe <em>Heap</em>, iar pe Stack se reține doar referința.</p>\n",
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
    "prompt": "Afișează stringul 'Hello, Polymath!' în consolă folosind metoda 'Console.WriteLine'.",
    "task": "Afișează stringul 'Hello, Polymath!' în consolă folosind metoda 'Console.WriteLine'.",
    "example": "Console.WriteLine(\"Hello, Polymath!\");",
    "starterCode": "Console.WriteLine(\"Hello, Polymath!\");",
    "officialSolution": "Console.WriteLine(\"Hello, Polymath!\");",
    "expectedOutputPattern": "Console\\.WriteLine\\([\"']Hello,\\s*Polymath![\"']\\);",
    "regexPattern": "Console\\.WriteLine\\([\"']Hello,\\s*Polymath![\"']\\);",
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
    "theory": "\n<p>În mod implicit, tipurile de valoare sunt transmise prin copiere (by value). C# oferă modificatori expliciți pentru a transmite referința directă a locației din memorie.</p>\n\n<h4>1. Modificatorul 'ref' vs 'out'</h4>\n<pre><code>// Exemplu 1: Modificatorul 'out' pentru parsare sigură\nstring text = \"42\";\nif (int.TryParse(text, out int rezultat)) {\n    Console.WriteLine($\"Număr parsat: {rezultat}\");\n}\n\n// Exemplu 2: Modificatorul 'ref' (necesită inițializare înainte de apel)\nvoid Dubleaza(ref int val) {\n    val *= 2;\n}\nint scor = 50;\nDubleaza(ref scor); // scor devine 100\n</code></pre>\n",
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
    "prompt": "Apelează metoda 'int.TryParse' pe stringul 'input' salvând rezultatul în 'out int result'.",
    "task": "Apelează metoda 'int.TryParse' pe stringul 'input' salvând rezultatul în 'out int result'.",
    "example": "string input = \"42\";\nbool success = int.TryParse(input, out int result);",
    "starterCode": "string input = \"42\";\nbool success = int.TryParse(input, out int result);",
    "officialSolution": "string input = \"42\";\nbool success = int.TryParse(input, out int result);",
    "expectedOutputPattern": "success\\s*=\\s*int\\.TryParse\\(input,\\s*out\\s+int\\s+result\\);",
    "regexPattern": "success\\s*=\\s*int\\.TryParse\\(input,\\s*out\\s+int\\s+result\\);",
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
    "theory": "\n<p>În C#, metodele nu sunt polimorfice (virtuale) în mod implicit. Pentru a permite suprascrierea, metoda din clasa de bază trebuie marcată explicit cu <code>virtual</code>, iar metoda din clasa copil cu <code>override</code>.</p>\n\n<pre><code>// Exemplu 1: Moștenire polimorfică în C#\npublic class Animal {\n    public virtual string EmiteSunet() => \"Sunet generic\";\n}\n\npublic class Caine : Animal {\n    public override string EmiteSunet() => \"Ham! Ham!\";\n}\n\npublic sealed class CainePolitist : Caine {\n    // sealed blochează moștenirea ulterioară\n}\n</code></pre>\n",
    "glossary": [
      {
        "term": "virtual",
        "def": "Permite unei metode să fie suprascrisă într-o clasă derivată."
      },
      {
        "term": "override",
        "def": "Furnizează o implementare nouă pentru o metodă virtuală sau abstractă moștenită."
      },
      {
        "term": "sealed",
        "def": "Blochează extinderea ulterioară a unei clase sau suprascrierea unei metode specifice."
      },
      {
        "term": "base",
        "def": "Cuvânt cheie folosit pentru apelarea constructorului sau a metodelor din clasa părinte."
      }
    ],
    "matchingPairs": [
      {
        "left": "public virtual void Run()",
        "right": "Metodă deschisă pentru polimorfism"
      },
      {
        "left": "public override void Run()",
        "right": "Suprascrie comportamentul din baza"
      },
      {
        "left": "public sealed class Admin",
        "right": "Clasă din care nu se mai poate moșteni"
      },
      {
        "left": "base.Run()",
        "right": "Apelează implementarea originală a părintelui"
      }
    ],
    "quiz": {
      "question": "Ce cuvânt cheie este obligatoriu în clasa derivată atunci când suprascrii o metodă 'virtual' din clasa părinte în C#?",
      "options": [
        "override",
        "new",
        "virtual",
        "implements"
      ],
      "correctIndex": 0,
      "explanation": "În C#, polimorfismul este explicit: metoda copil trebuie marcată obligatoriu cu 'override'."
    },
    "prompt": "Suprascrie metoda 'EmiteSunet' în clasa Dog returnând 'Ham!'.",
    "task": "Suprascrie metoda 'EmiteSunet' în clasa Dog returnând 'Ham!'.",
    "example": "public class Dog : Animal {\n    public override string EmiteSunet() => \"Ham!\";\n}",
    "starterCode": "public class Dog : Animal {\n    public override string EmiteSunet() => \"Ham!\";\n}",
    "officialSolution": "public class Dog : Animal {\n    public override string EmiteSunet() => \"Ham!\";\n}",
    "expectedOutputPattern": "public\\s+override\\s+string\\s+EmiteSunet\\(\\)\\s*=>\\s*[\"']Ham![\"'];",
    "regexPattern": "public\\s+override\\s+string\\s+EmiteSunet\\(\\)\\s*=>\\s*[\"']Ham![\"'];",
    "hint": "Scrie public override string EmiteSunet() => \"Ham!\";"
  },
  {
    "id": "cs-new-4",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 4: Proprietăți C#: Auto-Properties, 'init' & Computed",
    "theory": "\n<p>Proprietățile în C# oferă o modalitate elegantă de încapsulare fără metode manuale de tip getter/setter.</p>\n\n<pre><code>// Exemplu 1: Proprietăți moderne cu init și computed\npublic class Produs {\n    public int Id { get; init; } // Poate fi setat doar la inițializare\n    public string Nume { get; set; } = string.Empty;\n    public decimal Pret { get; set; }\n    \n    // Computed property (Expression-bodied):\n    public decimal PretCuTva => Pret * 1.19m;\n}\n\n// Instanțiere cu Object Initializer:\nvar p = new Produs { Id = 1, Nume = \"Laptop\", Pret = 3000m };\n</code></pre>\n",
    "glossary": [
      {
        "term": "init",
        "def": "Accessor ce permite asignarea valorii exclusiv la crearea obiectului (imutable after creation)."
      },
      {
        "term": "Computed Property",
        "def": "Proprietate calculată la cerere pe baza altor câmpuri, fără variabilă internă de stocare."
      },
      {
        "term": "Auto-Property",
        "def": "Sintaxă compactă get; set; unde compilatorul generează automat câmpul privat din spate."
      },
      {
        "term": "Expression-bodied (=>)",
        "def": "Sintaxă compactă cu săgeată pentru metode și proprietăți dintr-o singură linie."
      }
    ],
    "matchingPairs": [
      {
        "left": "public int Id { get; init; }",
        "right": "Imutabil după finalizarea inițializării"
      },
      {
        "left": "public decimal Total => Price * Qty;",
        "right": "Proprietate calculată dinamic la fiecare accesare"
      },
      {
        "left": "public string Name { get; private set; }",
        "right": "Citire publică, modificare doar din interior"
      },
      {
        "left": "new User { Age = 25 }",
        "right": "Sintaxă Object Initializer"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă încerci să modifici o proprietate definită cu 'get; init;' după ce obiectul a fost instanțiat?",
      "options": [
        "Compilatorul C# aruncă eroare de compilare deoarece valoarea este read-only.",
        "Obiectul este șters automat din memorie.",
        "Valoarea se modifică fără avertismente.",
        "Programul se blochează la runtime cu NullReferenceException."
      ],
      "correctIndex": 0,
      "explanation": "Accessorul 'init' garantează imutabilitatea: proprietatea poate fi asignată doar în constructor sau în blocul de Object Initializer."
    },
    "prompt": "Definește o proprietate auto-implementată 'Id' de tip 'int' cu accessorii 'get' și 'init'.",
    "task": "Definește o proprietate auto-implementată 'Id' de tip 'int' cu accessorii 'get' și 'init'.",
    "example": "public int Id { get; init; }",
    "starterCode": "public int Id { get; init; }",
    "officialSolution": "public int Id { get; init; }",
    "expectedOutputPattern": "public\\s+int\\s+Id\\s*\\{\\s*get;\\s*init;\\s*\\}",
    "regexPattern": "public\\s+int\\s+Id\\s*\\{\\s*get;\\s*init;\\s*\\}",
    "hint": "Scrie public int Id { get; init; }"
  },
  {
    "id": "cs-new-5",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 5: Pattern Matching Modern (switch expressions & patterns)",
    "theory": "\n<p>Pattern Matching-ul din C# transformă instrucțiunile <code>switch</code> prolixe în expresii concise, tipizate și sigure.</p>\n\n<pre><code>// Exemplu 1: Switch Expression cu Relational Patterns\nstring EvalueazaScor(int puncte) => puncte switch {\n    >= 90 => \"Excelent\",\n    >= 70 => \"Bine\",\n    >= 50 => \"Suficient\",\n    _ => \"Respins\"\n};\n\n// Exemplu 2: Type Pattern Matching\nstring Descrie(object obj) => obj switch {\n    string s => $\"Text cu lungimea: {s.Length}\",\n    int n => $\"Număr întreg: {n}\",\n    null => \"Nul\",\n    _ => \"Necunoscut\"\n};\n</code></pre>\n",
    "glossary": [
      {
        "term": "Switch Expression",
        "def": "Expresie modernă compactă ce returnează direct o valoare pe baza tiparului potrivit."
      },
      {
        "term": "Discard Pattern (_)",
        "def": "Echivalentul clauzei 'default' ce prinde orice caz nepotrivit anterior."
      },
      {
        "term": "Relational Pattern",
        "def": "Verificarea valorilor prin operatori de comparație (<, <=, >, >=) direct în switch."
      },
      {
        "term": "Type Pattern",
        "def": "Verifică tipul obiectului și îl distribuie direct într-o variabilă tipizată."
      }
    ],
    "matchingPairs": [
      {
        "left": "val switch { >= 18 => true, _ => false }",
        "right": "Switch expression cu verificare relațională"
      },
      {
        "left": "_ => defaultValue",
        "right": "Ramura de fallback (discard pattern)"
      },
      {
        "left": "is not null",
        "right": "Negated null check pattern"
      },
      {
        "left": "case string s when s.Length > 5:",
        "right": "Pattern matching cu clauză de gardă (when)"
      }
    ],
    "quiz": {
      "question": "Ce simbol ține locul clauzei 'default' într-o expresie C# switch modernă?",
      "options": [
        "Simbolul underscore (_), cunoscut ca Discard Pattern.",
        "Cuvântul cheie 'else'.",
        "Simbolul asterisc (*).",
        "Cuvântul cheie 'default:' obligatoriu."
      ],
      "correctIndex": 0,
      "explanation": "În switch expressions, 'default' este înlocuit cu discard pattern-ul '_ => valoare'."
    },
    "prompt": "Completează expresia switch pentru a returna 'Admis' dacă 'score >= 50' și 'Respins' pentru '_'.",
    "task": "Completează expresia switch pentru a returna 'Admis' dacă 'score >= 50' și 'Respins' pentru '_'.",
    "example": "string res = score switch {\n    >= 50 => \"Admis\",\n    _ => \"Respins\"\n};",
    "starterCode": "string res = score switch {\n    >= 50 => \"Admis\",\n    _ => \"Respins\"\n};",
    "officialSolution": "string res = score switch {\n    >= 50 => \"Admis\",\n    _ => \"Respins\"\n};",
    "expectedOutputPattern": ">= 50\\s*=>\\s*[\"']Admis[\"'],\\s*_\\s*=>\\s*[\"']Respins[\"']",
    "regexPattern": ">= 50\\s*=>\\s*[\"']Admis[\"'],\\s*_\\s*=>\\s*[\"']Respins[\"']",
    "hint": "Scrie >= 50 => \"Admis\", _ => \"Respins\""
  },
  {
    "id": "cs-new-6",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 6: Tipuri Record & Imutabilitate ('with' expressions)",
    "theory": "\n<p>Tipurile <strong>Record</strong> (<code>record class</code> sau <code>record struct</code>) oferă egalitate bazată pe valori (Value-based Equality) și imutabilitate nativă, fiind ideale pentru DTO-uri și arhitecturi bazate pe mesaje.</p>\n\n<pre><code>// Exemplu 1: Positional Record și Non-Destructive Mutation cu 'with'\npublic record UserRecord(int Id, string Nume, string Rol);\n\nvar user1 = new UserRecord(1, \"Denis\", \"Admin\");\n\n// Clauza 'with' creează o copie modificată păstrând originalul intact:\nvar user2 = user1 with { Nume = \"Alex\" };\n\n// Egalitate pe valori (nu pe adrese de memorie!):\nvar userCopy = new UserRecord(1, \"Denis\", \"Admin\");\nConsole.WriteLine(user1 == userCopy); // True!\n</code></pre>\n",
    "glossary": [
      {
        "term": "Record",
        "def": "Tip de date orientat pe stocarea imutabilă a valorilor cu egalitate bazată pe conținut."
      },
      {
        "term": "with expression",
        "def": "Mecanism de clonare parțială ce creează un obiect nou cu anumiți membri modificați."
      },
      {
        "term": "Value-based Equality",
        "def": "Două instanțe sunt egale dacă toate proprietățile lor au aceleași valori."
      },
      {
        "term": "Positional Record",
        "def": "Sintaxă ultra-scurtă: record Point(int X, int Y);"
      }
    ],
    "matchingPairs": [
      {
        "left": "public record Point(int X, int Y);",
        "right": "Positional record imutabil cu proprietăți auto-generate"
      },
      {
        "left": "var p2 = p1 with { X = 10 };",
        "right": "Clonare cu mutație non-destructivă"
      },
      {
        "left": "record1 == record2",
        "right": "Compară valorile câmpurilor, nu referințele de memorie"
      },
      {
        "left": "record struct",
        "right": "Variantă record alocată pe Stack ca Value Type"
      }
    ],
    "quiz": {
      "question": "Ce rezultat va afișa 'r1 == r2' dacă r1 și r2 sunt două instanțe distincte de record cu aceleași valori ale câmpurilor?",
      "options": [
        "True (deoarece tipurile record implementează egalitate bazată pe valorile câmpurilor).",
        "False (deoarece sunt adrese diferite în memoria Heap).",
        "Aruncă o excepție de compilare.",
        "Returnează null."
      ],
      "correctIndex": 0,
      "explanation": "Spre deosebire de clasele clasice unde '==' verifică referința, la records compilatorul suprascrie automat Equals() pentru a compara valorile interne ale fiecărui câmp."
    },
    "prompt": "Clonează 'original' modificând proprietatea 'Role' în 'Admin' folosind expresia 'original with { Role = \"Admin\" }'.",
    "task": "Clonează 'original' modificând proprietatea 'Role' în 'Admin' folosind expresia 'original with { Role = \"Admin\" }'.",
    "example": "var updated = original with { Role = \"Admin\" };",
    "starterCode": "var updated = original with { Role = \"Admin\" };",
    "officialSolution": "var updated = original with { Role = \"Admin\" };",
    "expectedOutputPattern": "updated\\s*=\\s*original\\s+with\\s*\\{\\s*Role\\s*=\\s*[\"']Admin[\"']\\s*\\};?",
    "regexPattern": "updated\\s*=\\s*original\\s+with\\s*\\{\\s*Role\\s*=\\s*[\"']Admin[\"']\\s*\\};?",
    "hint": "Scrie updated = original with { Role = \"Admin\" };"
  },
  {
    "id": "cs-new-7",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "3. Middle",
    "xp": 50,
    "title": "Capitolul 7: LINQ Avansat: 'Where', 'Select', 'GroupBy' & Deferred Execution",
    "theory": "\n<p><strong>LINQ</strong> (Language Integrated Query) unifică interogarea colecțiilor în memorie (<code>IEnumerable&lt;T&gt;</code>) și a bazelor de date prin EF Core (<code>IQueryable&lt;T&gt;</code>).</p>\n\n<h4>1. Execuție Amânată (Deferred Execution)</h4>\n<p>Interogările LINQ nu se execută la definire, ci la enumerare (<code>foreach</code>, <code>.ToList()</code>, <code>.Count()</code>).</p>\n\n<pre><code>// Exemplu 1: Pipeline LINQ complet cu filtrare, ordonare și selecție\nvar angajati = new List&lt;Angajat&gt; {\n    new(\"Ion\", 5000, \"IT\"),\n    new(\"Maria\", 7500, \"IT\"),\n    new(\"Elena\", 4200, \"HR\")\n};\n\nList&lt;string&gt; topIt = angajati\n    .Where(a => a.Departament == \"IT\")\n    .OrderByDescending(a => a.Salariu)\n    .Select(a => a.Nume)\n    .ToList();\n\n// Output: [\"Maria\", \"Ion\"]\n</code></pre>\n",
    "glossary": [
      {
        "term": "Deferred Execution",
        "def": "Executarea interogării doar în momentul în care datele sunt efectiv iterate sau materializate."
      },
      {
        "term": "IEnumerable<T>",
        "def": "Interfață pentru colecții în memorie ce evaluează elementele pas cu pas."
      },
      {
        "term": "IQueryable<T>",
        "def": "Interfață ce traduce interogarea C# în SQL nativ rulat pe serverul de baze de date."
      },
      {
        "term": "Select() vs Where()",
        "def": "Where filtrează colecția (reducând rândurile), Select transformă/proiectează elementele."
      }
    ],
    "matchingPairs": [
      {
        "left": "numbers.Where(x => x > 0)",
        "right": "Filtrează elementele după predicat"
      },
      {
        "left": "users.Select(u => u.Email)",
        "right": "Proiectează într-o colecție de adrese email"
      },
      {
        "left": "items.ToList()",
        "right": "Materializează imediat interogarea în memorie"
      },
      {
        "left": "orders.GroupBy(o => o.Status)",
        "right": "Grupează elementele după o cheie comună"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă 'Deferred Execution' (execuție amânată) în LINQ?",
      "options": [
        "Interogarea nu filtrează datele când este scrisă, ci abia atunci când colecția este iterată cu foreach sau materializată cu .ToList().",
        "Interogarea rulează doar când computerul este repornit.",
        "LINQ amână execuția dacă procesorul este prea fierbinte.",
        "Datele sunt descărcate doar după miezul nopții."
      ],
      "correctIndex": 0,
      "explanation": "LINQ construiește arborele de expresie sau iteratorul; calculul efectiv se declanșează doar la cererea primului element (lazy)."
    },
    "prompt": "Filtrează lista 'numbers' selectând doar numerele pare folosind '.Where(n => n % 2 == 0).ToList();'.",
    "task": "Filtrează lista 'numbers' selectând doar numerele pare folosind '.Where(n => n % 2 == 0).ToList();'.",
    "example": "var even = numbers.Where(n => n % 2 == 0).ToList();",
    "starterCode": "var even = numbers.Where(n => n % 2 == 0).ToList();",
    "officialSolution": "var even = numbers.Where(n => n % 2 == 0).ToList();",
    "expectedOutputPattern": "\\.Where\\(n\\s*=>\\s*n\\s*%\\s*2\\s*==\\s*0\\)\\.ToList\\(\\);?",
    "regexPattern": "\\.Where\\(n\\s*=>\\s*n\\s*%\\s*2\\s*==\\s*0\\)\\.ToList\\(\\);?",
    "hint": "Scrie .Where(n => n % 2 == 0).ToList();"
  },
  {
    "id": "cs-new-8",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 8: Programare Asincronă cu 'async' / 'await' & 'Task.WhenAll'",
    "theory": "\n<p>Modelul asincron din C# (Task-based Asynchronous Pattern — TAP) folosește o mașină de stări generată de compilator pentru a elibera firul curent în timp ce așteaptă I/O.</p>\n\n<pre><code>// Exemplu 1: Metode asincrone și Task.WhenAll\npublic async Task&lt;int&gt; DescarcaTotAsync(List&lt;string&gt; urls) {\n    using var client = new HttpClient();\n    \n    // Declanșează descărcările în paralel:\n    var tasks = urls.Select(url => client.GetStringAsync(url));\n    \n    // Așteaptă finalizarea tuturor cererilor:\n    string[] pagini = await Task.WhenAll(tasks);\n    \n    return pagini.Length;\n}\n</code></pre>\n",
    "glossary": [
      {
        "term": "async / await",
        "def": "Cuvinte cheie ce transformă o metodă într-o mașină de stări asincronă non-blocantă."
      },
      {
        "term": "Task<T>",
        "def": "Reprezentarea unei operațiuni asincrone ce va produce un rezultat în viitor."
      },
      {
        "term": "Task.WhenAll()",
        "def": "Combină multiple task-uri într-un singur task ce se finalizează când toate au terminat."
      },
      {
        "term": "ConfigureAwait(false)",
        "def": "Optimizare de bibliotecă ce evită capturarea contextului de sincronizare inițial."
      }
    ],
    "matchingPairs": [
      {
        "left": "await Task.WhenAll(t1, t2)",
        "right": "Așteaptă ambele sarcini rulate în paralel"
      },
      {
        "left": "async Task<int> Calculate()",
        "right": "Metodă asincronă ce returnează un întreg"
      },
      {
        "left": "Task.Delay(1000)",
        "right": "Pauză asincronă non-blocantă (fără Thread.Sleep)"
      },
      {
        "left": "CancellationToken",
        "right": "Permite anularea cooperativă a operațiunilor asincrone"
      }
    ],
    "quiz": {
      "question": "De ce este interzis să folosești 'task.Result' sau 'task.Wait()' pe o operație asincronă în C#?",
      "options": [
        "Blochează sincron firul curent și poate cauza Deadlock pe SynchronizationContext.",
        "Șterge rezultatul din memorie.",
        "Aruncă întotdeauna NullReferenceException.",
        "Dezactivează compilatorul Roslyn."
      ],
      "correctIndex": 0,
      "explanation": "Apelul '.Result' sau '.Wait()' blochează sincron firul curent, creând risc major de deadlock în interfețe grafice (WPF/MAUI) și ASP.NET clasic."
    },
    "prompt": "Așteaptă rularea concurentă a două sarcini 'task1' și 'task2' apelând 'await Task.WhenAll(task1, task2);'.",
    "task": "Așteaptă rularea concurentă a două sarcini 'task1' și 'task2' apelând 'await Task.WhenAll(task1, task2);'.",
    "example": "await Task.WhenAll(task1, task2);",
    "starterCode": "await Task.WhenAll(task1, task2);",
    "officialSolution": "await Task.WhenAll(task1, task2);",
    "expectedOutputPattern": "await\\s+Task\\.WhenAll\\(task1,\\s*task2\\);?",
    "regexPattern": "await\\s+Task\\.WhenAll\\(task1,\\s*task2\\);?",
    "hint": "Scrie await Task.WhenAll(task1, task2);"
  },
  {
    "id": "cs-new-9",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 9: Generice C# & Constrângeri ('where T : class, new()')",
    "theory": "\n<p>Genericele permit scrierea de clase și algoritmi independenți de tipul de date, cu verificări la compilare și fără penalizările de boxing/unboxing.</p>\n\n<pre><code>// Exemplu 1: Clasă generică cu constrângeri multiple\npublic class Repository&lt;T&gt; where T : class, new() {\n    private readonly List&lt;T&gt; _stoc = new();\n\n    public void Salveaza(T entitate) {\n        _stoc.Add(entitate);\n    }\n\n    public T CreeazaInstantaNoua() {\n        return new T(); // Posibil doar datorită constrângerii new()!\n    }\n}\n</code></pre>\n",
    "glossary": [
      {
        "term": "Generics (<T>)",
        "def": "Șabloane tipizate ce asigură reutilizarea codului și siguranță statică la compilare."
      },
      {
        "term": "where T : class",
        "def": "Constrângere ce limitează parametrul generic exclusiv la tipuri de referință."
      },
      {
        "term": "where T : new()",
        "def": "Constrângere ce impune ca tipul să aibă un constructor public fără parametri."
      },
      {
        "term": "Boxing / Unboxing",
        "def": "Conversia costisitoare între tipuri de valoare și obiecte pe Heap, evitată prin generice."
      }
    ],
    "matchingPairs": [
      {
        "left": "where T : class",
        "right": "T trebuie să fie un tip de referință"
      },
      {
        "left": "where T : struct",
        "right": "T trebuie să fie un tip de valoare non-nullable"
      },
      {
        "left": "where T : new()",
        "right": "T trebuie să aibă constructor public fără parametri"
      },
      {
        "left": "where T : IComparable<T>",
        "right": "T trebuie să suporte operații de comparare"
      }
    ],
    "quiz": {
      "question": "Ce permite constrângerea generică 'where T : new()' în corpul unei clase generice C#?",
      "options": [
        "Permite instanțierea directă a tipului generic folosind operatorul 'new T()'.",
        "Interzice crearea oricărui obiect.",
        "Obligă clasa să fie redenumită la fiecare compilare.",
        "Șterge Garbage Collector-ul."
      ],
      "correctIndex": 0,
      "explanation": "În lipsa constrângerii 'new()', compilatorul refuză apelul 'new T()' deoarece nu poate garanta existența unui constructor fără parametri."
    },
    "prompt": "Adaugă constrângerea ca parametrul generic 'T' să fie tip de referință și să aibă constructor fără parametri: 'where T : class, new()'.",
    "task": "Adaugă constrângerea ca parametrul generic 'T' să fie tip de referință și să aibă constructor fără parametri: 'where T : class, new()'.",
    "example": "public class Storage<T> where T : class, new() {\n}",
    "starterCode": "public class Storage<T> where T : class, new() {\n}",
    "officialSolution": "public class Storage<T> where T : class, new() {\n}",
    "expectedOutputPattern": "where\\s+T\\s*:\\s*class,\\s*new\\(\\)",
    "regexPattern": "where\\s+T\\s*:\\s*class,\\s*new\\(\\)",
    "hint": "Scrie where T : class, new()"
  },
  {
    "id": "cs-new-10",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "4. Senior",
    "xp": 65,
    "title": "Capitolul 10: Inversion of Control & Dependency Injection în .NET Core",
    "theory": "\n<p>.NET Core include un container nativ de Inversion of Control (IoC) configurabil în <code>Program.cs</code> prin 3 durate de viață (Lifetimes):</p>\n\n<pre><code>// Exemplu 1: Înregistrarea serviciilor în containerul IoC din Program.cs\nvar builder = WebApplication.CreateBuilder(args);\n\n// 1. Transient: Instanță proaspătă la fiecare cerere\nbuilder.Services.AddTransient&lt;ITokenGenerator, JwtTokenGenerator&gt;();\n\n// 2. Scoped: O singură instanță per cerere HTTP (recomandat DbContext)\nbuilder.Services.AddScoped&lt;IUserRepository, SqlUserRepository&gt;();\n\n// 3. Singleton: O singură instanță pe toată durata de viață a aplicației\nbuilder.Services.AddSingleton&lt;IMemoryCache, MemoryCache&gt;();\n</code></pre>\n",
    "glossary": [
      {
        "term": "AddTransient",
        "def": "Creează o nouă instanță de fiecare dată când serviciul este solicitat prin DI."
      },
      {
        "term": "AddScoped",
        "def": "Creează o singură instanță per request HTTP (ideal pentru baze de date și repository-uri)."
      },
      {
        "term": "AddSingleton",
        "def": "Instanță unică partajată de toate cererile pe toată durata procesului aplicației."
      },
      {
        "term": "Service Lifetime",
        "def": "Regula care guvernează când este creată și când este distrusă o dependență."
      }
    ],
    "matchingPairs": [
      {
        "left": "AddTransient<IService, Impl>()",
        "right": "Instanță nouă la fiecare cerere"
      },
      {
        "left": "AddScoped<IDbContext, AppDb>()",
        "right": "O instanță unică per request HTTP"
      },
      {
        "left": "AddSingleton<ICache, Cache>()",
        "right": "O singură instanță globală pe tot ciclul de viață"
      },
      {
        "left": "Constructor Injection",
        "right": "Furnizarea automată a serviciilor prin constructor"
      }
    ],
    "quiz": {
      "question": "Ce durată de viață (Lifetime) este recomandată pentru 'DbContext' în aplicațiile web ASP.NET Core?",
      "options": [
        "Scoped (pentru a izola tranzacțiile și starea entităților la nivelul unui singur request HTTP).",
        "Singleton (deoarece o singură conexiune este suficientă pentru 10.000 de utilizatori concurenți).",
        "Transient (pentru a crea câte o conexiune la fiecare metodă din controller).",
        "Static fără nicio înregistrare în DI."
      ],
      "correctIndex": 0,
      "explanation": "DbContext nu este thread-safe! Înregistrarea ca Scoped garantează că fiecare cerere HTTP primește propriul său context, prevenind coruperea concurentă a stării."
    },
    "prompt": "Înregistrează serviciul 'IOrderService' cu implementarea 'OrderService' ca durată Scoped: 'builder.Services.AddScoped<IOrderService, OrderService>();'.",
    "task": "Înregistrează serviciul 'IOrderService' cu implementarea 'OrderService' ca durată Scoped: 'builder.Services.AddScoped<IOrderService, OrderService>();'.",
    "example": "builder.Services.AddScoped<IOrderService, OrderService>();",
    "starterCode": "builder.Services.AddScoped<IOrderService, OrderService>();",
    "officialSolution": "builder.Services.AddScoped<IOrderService, OrderService>();",
    "expectedOutputPattern": "builder\\.Services\\.AddScoped<IOrderService,\\s*OrderService>\\(\\);?",
    "regexPattern": "builder\\.Services\\.AddScoped<IOrderService,\\s*OrderService>\\(\\);?",
    "hint": "Scrie builder.Services.AddScoped<IOrderService, OrderService>();"
  },
  {
    "id": "cs-new-11",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "5. Arhitect / Exemplar",
    "xp": 70,
    "title": "Capitolul 11: Entity Framework Core — Migrări, DbSet & AsNoTracking",
    "theory": "\n<p><strong>Entity Framework Core</strong> este ORM-ul de producție din .NET. Pentru interogări de tip read-only unde entitățile nu vor fi modificate, folosim <code>AsNoTracking()</code> pentru a decupla Change Tracker-ul și a reduce consumul de memorie cu până la 50%.</p>\n\n<pre><code>// Exemplu 1: Interogare de înaltă performanță cu AsNoTracking()\nusing var db = new AppDbContext();\n\nList&lt;UserDTO&gt; users = await db.Users\n    .AsNoTracking() // Elimină overhead-ul monitorizării modificărilor\n    .Where(u => u.IsActive)\n    .Select(u => new UserDTO(u.Id, u.Email))\n    .ToListAsync();\n</code></pre>\n",
    "glossary": [
      {
        "term": "AsNoTracking()",
        "def": "Dezactivează monitorizarea modificărilor pentru interogări de citire rapidă și consum redus de RAM."
      },
      {
        "term": "DbSet<T>",
        "def": "Colecție ce mapează o tabelă din baza de date și expune capabilități LINQ to SQL."
      },
      {
        "term": "Change Tracker",
        "def": "Mecanism intern din EF Core ce detectează proprietățile modificate pentru a genera comenzi UPDATE."
      },
      {
        "term": "Include()",
        "def": "Realizează Eager Loading (LEFT JOIN) pentru a încărca relațiile conexe într-o singură interogare."
      }
    ],
    "matchingPairs": [
      {
        "left": "db.Users.AsNoTracking()",
        "right": "Interogare optimizată fără monitorizare de memorie"
      },
      {
        "left": "db.Orders.Include(o => o.Items)",
        "right": "Eager Loading pentru relația cu articolele comenzii"
      },
      {
        "left": "await db.SaveChangesAsync()",
        "right": "Execută tranzacțional toate modificările în baza de date"
      },
      {
        "left": "dotnet ef migrations add Initial",
        "right": "Generează scriptul C# de sincronizare a tabelelor"
      }
    ],
    "quiz": {
      "question": "De ce este recomandat să folosești '.AsNoTracking()' în interogările EF Core care doar afișează date (read-only)?",
      "options": [
        "Dezactivează Change Tracker-ul intern, reducând consumul de RAM și sporind viteza de execuție.",
        "Șterge baza de date pentru a elibera spațiul pe disc.",
        "AsNoTracking face interogarea să ruleze doar pe dischete floppy.",
        "Este obligatoriu doar dacă tabela are peste 10 coloane."
      ],
      "correctIndex": 0,
      "explanation": "Monitorizarea entităților consumă memorie și cicluri CPU. Dacă doar returnezi date într-un API GET, AsNoTracking oferă un boost considerabil de performanță."
    },
    "prompt": "Aplică optimizarea 'AsNoTracking()' pe tabela 'db.Users' apelând 'db.Users.AsNoTracking().ToListAsync();'.",
    "task": "Aplică optimizarea 'AsNoTracking()' pe tabela 'db.Users' apelând 'db.Users.AsNoTracking().ToListAsync();'.",
    "example": "var list = await db.Users.AsNoTracking().ToListAsync();",
    "starterCode": "var list = await db.Users.AsNoTracking().ToListAsync();",
    "officialSolution": "var list = await db.Users.AsNoTracking().ToListAsync();",
    "expectedOutputPattern": "db\\.Users\\.AsNoTracking\\(\\)\\.ToListAsync\\(\\);?",
    "regexPattern": "db\\.Users\\.AsNoTracking\\(\\)\\.ToListAsync\\(\\);?",
    "hint": "Scrie db.Users.AsNoTracking().ToListAsync();"
  },
  {
    "id": "cs-new-12",
    "track": "C#",
    "division": "Informatică și Programare",
    "icon": "🔷",
    "level": "5. Arhitect / Exemplar",
    "xp": 75,
    "title": "Capitolul 12: High-Performance C#: 'Span<T>', 'Memory<T>' & Zero Alocări",
    "theory": "\n<p><code>Span&lt;T&gt;</code> și <code>ReadOnlySpan&lt;T&gt;</code> reprezintă revoluția de performanță din C# modern: oferă ferestre continue sigure peste memorie (Stack, Heap sau native memory) fără alocări secundare ($O(1)$ memory overhead).</p>\n\n<pre><code>// Exemplu 1: Parsarea unui șir de caractere cu Zero Alocări Heap\nstring dataStr = \"2025-10-15\";\nReadOnlySpan&lt;char&gt; span = dataStr.AsSpan();\n\n// Extragere felii (slices) de memorie fără a crea noi obiecte string:\nReadOnlySpan&lt;char&gt; anSpan = span.Slice(0, 4);\nReadOnlySpan&lt;char&gt; lunaSpan = span.Slice(5, 2);\nReadOnlySpan&lt;char&gt; ziSpan = span.Slice(8, 2);\n\nint anul = int.Parse(anSpan);\nint luna = int.Parse(lunaSpan);\nConsole.WriteLine($\"Data decodată: {ziSpan.ToString()}/{luna}/{anul}\");\n// Memorie alocată pe Heap: ZERO octeți!\n</code></pre>\n",
    "glossary": [
      {
        "term": "Span<T>",
        "def": "Structură 'ref struct' alocată exclusiv pe Stack ce reprezintă o fereastră contiguă de memorie mutabilă."
      },
      {
        "term": "ReadOnlySpan<T>",
        "def": "Versiunea imutabilă a lui Span, utilizată pentru felierea (slicing) eficientă a șirurilor string."
      },
      {
        "term": "Memory<T>",
        "def": "Echivalentul lui Span ce poate fi stocat pe Heap și folosit în operațiuni asincrone (async/await)."
      },
      {
        "term": "Zero-Allocation",
        "def": "Cod de înaltă performanță ce execută operațiuni I/O sau parsare fără a declanșa Garbage Collector-ul."
      }
    ],
    "matchingPairs": [
      {
        "left": "text.AsSpan()",
        "right": "Creează un ReadOnlySpan fără alocare pe Heap"
      },
      {
        "left": "span.Slice(start, length)",
        "right": "Extrage o secțiune de memorie în O(1)"
      },
      {
        "left": "ref struct Span<T>",
        "right": "Garantează alocarea exclusivă pe Stack"
      },
      {
        "left": "Memory<T>",
        "right": "Versiune de Span compatibilă cu async/await"
      }
    ],
    "quiz": {
      "question": "De ce este 'Span<T>' declarat ca 'ref struct' în limbajul C#?",
      "options": [
        "Pentru a garanta că este alocat exclusiv pe Stack și nu poate scăpa în memoria Heap, asigurând zero alocări de gunoi (GC).",
        "Pentru a forța compilatorul să-l salveze pe disc.",
        "Pentru a funcționa doar cu tipul boolean.",
        "Pentru a permite moștenirea multiplă."
      ],
      "correctIndex": 0,
      "explanation": "Ca 'ref struct', Span<T> nu poate fi boxat, nu poate fi câmp într-o clasă obișnuită și nu poate fi folosit în metode asincrone, garantând siguranță absolută a memoriei pe Stack."
    },
    "prompt": "Convertește stringul 'rawText' într-un 'ReadOnlySpan<char>' apelând 'rawText.AsSpan();'.",
    "task": "Convertește stringul 'rawText' într-un 'ReadOnlySpan<char>' apelând 'rawText.AsSpan();'.",
    "example": "ReadOnlySpan<char> span = rawText.AsSpan();",
    "starterCode": "ReadOnlySpan<char> span = rawText.AsSpan();",
    "officialSolution": "ReadOnlySpan<char> span = rawText.AsSpan();",
    "expectedOutputPattern": "span\\s*=\\s*rawText\\.AsSpan\\(\\);?",
    "regexPattern": "span\\s*=\\s*rawText\\.AsSpan\\(\\);?",
    "hint": "Scrie ReadOnlySpan<char> span = rawText.AsSpan();"
  },
  {
    "id": "ts-new-1",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Fundamente TypeScript — Adnotări Primitive & 'unknown' vs 'any'",
    "theory": "\n<p>TypeScript adaugă un sistem static de verificare a tipurilor peste JavaScript la momentul compilării (Type Erasure), prevenind erorile înainte ca aplicația să ajungă în producție.</p>\n\n<h4>1. Tipuri Primitive & 'any'</h4>\n<p>Tipurile de bază sunt <code>number</code>, <code>string</code>, <code>boolean</code>, <code>null</code> și <code>undefined</code>. Folosirea tipului <code>any</code> dezactivează complet verificatorul de tipuri, fiind un anti-pattern.</p>\n\n<h4>2. Exemplu Practic: unknown vs any și Type Narrowing</h4>\n<pre><code>// 1. Primitive de bază:\nconst age: number = 28;\nconst username: string = \"alex\";\nconst isActive: boolean = true;\n\n// 2. any este periculos - permite orice metodă invalidă:\nlet anyVal: any = \"salut\";\n// anyVal.nuExista(); // Compilatorul nu avertizează -> Crash la rulare!\n\n// 3. unknown este type-safe - impune verificare (type narrowing):\nlet input: unknown = \"hello\";\n\nif (typeof input === \"string\") {\n    // În interiorul acestui bloc, TypeScript știe garantat că input este string:\n    console.log(input.toUpperCase()); // HELLO\n}\n</code></pre>\n",
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
    "prompt": "Declară o variabilă 'input' de tip 'unknown' și inițializeaz-o cu stringul '\"hello\"': 'const input: unknown = \"hello\";'.",
    "task": "Declară o variabilă 'input' de tip 'unknown' și inițializeaz-o cu stringul '\"hello\"': 'const input: unknown = \"hello\";'.",
    "example": "const input: unknown = \"hello\";",
    "starterCode": "const input: unknown = \"hello\";",
    "officialSolution": "const input: unknown = \"hello\";",
    "expectedOutputPattern": "let\\s+input:\\s*unknown\\s*=\\s*[\"']hello[\"'];|const\\s+input:\\s*unknown\\s*=\\s*[\"']hello[\"'];",
    "regexPattern": "let\\s+input:\\s*unknown\\s*=\\s*[\"']hello[\"'];|const\\s+input:\\s*unknown\\s*=\\s*[\"']hello[\"'];",
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
    "theory": "\n<p>În TypeScript, definirea formei unui obiect (object shape) se poate realiza prin <code>interface</code> sau <code>type</code>.</p>\n\n<h4>1. Când folosim 'interface' și când folosim 'type'?</h4>\n<p>Interfețele sunt extensibile prin moștenire (<code>interface Admin extends User</code>) și suportă <em>declaration merging</em>. Type aliases sunt ideale pentru uniuni literale de tipuri, primitive compuse sau tupluri.</p>\n\n<h4>2. Exemplu Complet de Interfețe și Tipuri</h4>\n<pre><code>// 1. Interfață extensibilă pentru obiecte:\ninterface UserProfile {\n    id: number;\n    username: string;\n}\n\ninterface AdminProfile extends UserProfile {\n    permissions: string[];\n}\n\n// 2. Type Alias pentru uniuni și tupluri:\ntype Status = \"idle\" | \"loading\" | \"success\" | \"error\";\ntype Coordinates = [latitude: number, longitude: number];\n\nconst user: UserProfile = { id: 101, username: \"maria\" };\nconst currentStatus: Status = \"success\";\n</code></pre>\n",
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
    "prompt": "Definește o interfață 'UserProfile' cu proprietățile obligatorii 'id: number' și 'username: string'.",
    "task": "Definește o interfață 'UserProfile' cu proprietățile obligatorii 'id: number' și 'username: string'.",
    "example": "interface UserProfile {\n    id: number;\n    username: string;\n}",
    "starterCode": "interface UserProfile {\n    id: number;\n    username: string;\n}",
    "officialSolution": "interface UserProfile {\n    id: number;\n    username: string;\n}",
    "expectedOutputPattern": "interface\\s+UserProfile\\s*\\{\\s*id:\\s*number;?\\s*username:\\s*string;?\\s*\\}",
    "regexPattern": "interface\\s+UserProfile\\s*\\{\\s*id:\\s*number;?\\s*username:\\s*string;?\\s*\\}",
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
    "theory": "\n<p>Genericele permit crearea de componente software reutilizabile care funcționează cu o varietate de tipuri fără a sacrifica verificarea statică.</p>\n\n<h4>1. Funcții Generice și Constrângeri</h4>\n<p>Sintaxa <code>function wrap<T>(value: T): { data: T }</code> introduce parametrul de tip <code>T</code> care capturează automat tipul exact de date.</p>\n\n<h4>2. Exemplu Complet de Funcții și Interfețe Generice</h4>\n<pre><code>// 1. Funcție generică simplă:\nfunction wrap<T>(value: T): { data: T } {\n    return { data: value };\n}\n\nconst numBox = wrap(42);         // Tip dedus automat: { data: number }\nconst strBox = wrap(\"react\");    // Tip dedus automat: { data: string }\n\n// 2. Interfață generică pentru răspunsuri de rețea:\ninterface ApiResponse<T> {\n    success: boolean;\n    payload: T;\n}\n\nconst userRes: ApiResponse<{ name: string }> = {\n    success: true,\n    payload: { name: \"Elena\" }\n};\n</code></pre>\n",
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
    "prompt": "Scrie antetul unei funcții generice 'function wrap<T>(value: T): { data: T }' care returnează obiectul '{ data: value }'.",
    "task": "Scrie antetul unei funcții generice 'function wrap<T>(value: T): { data: T }' care returnează obiectul '{ data: value }'.",
    "example": "function wrap<T>(value: T): { data: T } {\n    return { data: value };\n}",
    "starterCode": "function wrap<T>(value: T): { data: T } {\n    return { data: value };\n}",
    "officialSolution": "function wrap<T>(value: T): { data: T } {\n    return { data: value };\n}",
    "expectedOutputPattern": "function\\s+wrap<T>\\(value:\\s*T\\):\\s*\\{\\s*data:\\s*T\\s*\\}\\s*\\{\\s*return\\s*\\{\\s*data:\\s*value\\s*\\};?\\s*\\}",
    "regexPattern": "function\\s+wrap<T>\\(value:\\s*T\\):\\s*\\{\\s*data:\\s*T\\s*\\}\\s*\\{\\s*return\\s*\\{\\s*data:\\s*value\\s*\\};?\\s*\\}",
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
    "theory": "\n<p>În React cu TypeScript, componentele moderne sunt funcții pure care primesc proprietăți tipizate (Props) și returnează un element JSX (<code>JSX.Element</code> sau <code>React.ReactNode</code>).</p>\n\n<h4>1. Exemplu de Componentă cu Props Tipizate</h4>\n<pre><code>interface GreetingProps {\n    name: string;\n    badge?: string; // Proprietate opțională\n}\n\nexport function Greeting({ name }: { name: string }) {\n    return <h1>{name}</h1>;\n}\n\n// Utilizare în JSX cu verificare statică:\n<Greeting name=\"Andrei\" />\n</code></pre>\n\n<h4>2. React.ReactNode pentru Children</h4>\n<p>Pentru containere care înglobează elemente copii, folosim tipul <code>React.ReactNode</code>: <code>interface CardProps { children: React.ReactNode; }</code>.</p>\n",
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
    "prompt": "Definește o componentă funcțională 'Greeting' ce primește '({ name }: { name: string })' și returnează '<h1>{name}</h1>'.",
    "task": "Definește o componentă funcțională 'Greeting' ce primește '({ name }: { name: string })' și returnează '<h1>{name}</h1>'.",
    "example": "function Greeting({ name }: { name: string }) {\n    return <h1>{name}</h1>;\n}",
    "starterCode": "function Greeting({ name }: { name: string }) {\n    return <h1>{name}</h1>;\n}",
    "officialSolution": "function Greeting({ name }: { name: string }) {\n    return <h1>{name}</h1>;\n}",
    "expectedOutputPattern": "function\\s+Greeting\\(\\s*\\{\\s*name\\s*\\}:\\s*\\{\\s*name:\\s*string\\s*\\}\\s*\\)\\s*\\{\\s*return\\s+<h1>\\{name\\}</h1>;?\\s*\\}",
    "regexPattern": "function\\s+Greeting\\(\\s*\\{\\s*name\\s*\\}:\\s*\\{\\s*name:\\s*string\\s*\\}\\s*\\)\\s*\\{\\s*return\\s+<h1>\\{name\\}</h1>;?\\s*\\}",
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
    "theory": "\n<p>Hook-ul <code>useState</code> gestionează starea internă a unei componente. Pentru stări primitive simple, TypeScript deduce automat tipul (ex: <code>useState(0)</code> deduce <code>number</code>).</p>\n\n<h4>1. Generice Explicite și Actualizări Funcționale</h4>\n<pre><code>import { useState } from \"react\";\n\nexport function SearchFilter() {\n    // Declarare explicită a stării tipizate generic cu string:\n    const [query, setQuery] = useState<string>(\"\");\n\n    // Actualizare funcțională pentru a evita stale closures:\n    const [count, setCount] = useState<number>(0);\n    const increment = () => setCount(prev => prev + 1);\n\n    return (\n        <div>\n            <input value={query} onChange={e => setQuery(e.target.value)} />\n            <button onClick={increment}>Contor: {count}</button>\n        </div>\n    );\n}\n</code></pre>\n",
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
    "prompt": "Inițializează o stare numită 'query' cu valoarea inițială '\"\"' specificând tipul generic '<string>' pe 'useState'.",
    "task": "Inițializează o stare numită 'query' cu valoarea inițială '\"\"' specificând tipul generic '<string>' pe 'useState'.",
    "example": "const [query, setQuery] = useState<string>(\"\");",
    "starterCode": "const [query, setQuery] = useState<string>(\"\");",
    "officialSolution": "const [query, setQuery] = useState<string>(\"\");",
    "expectedOutputPattern": "const\\s*\\[query,\\s*setQuery\\]\\s*=\\s*useState<string>\\([\"'][\"']\\);",
    "regexPattern": "const\\s*\\[query,\\s*setQuery\\]\\s*=\\s*useState<string>\\([\"'][\"']\\);",
    "hint": "Scrie const [query, setQuery] = useState<string>(\"\");"
  },
  {
    "id": "ts-new-6",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "3. Middle",
    "xp": 45,
    "title": "Capitolul 6: Hook-ul 'useEffect' & Managementul Efectelor Laterale",
    "theory": "\n<p>Hook-ul <code>useEffect</code> gestionează efecte secundare (side effects): sincronizări cu serverul, abonamente la WebSockets sau manipulări directe de timere.</p>\n\n<h4>1. Exemplu Complet de useEffect cu Cleanup</h4>\n<pre><code>import { useState, useEffect } from \"react\";\n\nexport function DataFetcher() {\n    const [data, setData] = useState(null);\n\n    useEffect(() => {\n        // Tabloul gol [] asigură rularea exclusiv la montare:\n        fetchData();\n\n        // Funcția de curățare returnată la demontare:\n        return () => {\n            console.log(\"Component unmounted - cleanup resources\");\n        };\n    }, []);\n\n    return <div>{JSON.stringify(data)}</div>;\n}\n</code></pre>\n",
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
    "prompt": "Scrie un useEffect cu array de dependențe gol '[]' care apelează 'fetchData();'.",
    "task": "Scrie un useEffect cu array de dependențe gol '[]' care apelează 'fetchData();'.",
    "example": "useEffect(() => {\n    fetchData();\n}, []);",
    "starterCode": "useEffect(() => {\n    fetchData();\n}, []);",
    "officialSolution": "useEffect(() => {\n    fetchData();\n}, []);",
    "expectedOutputPattern": "useEffect\\(\\(\\)\\s*=>\\s*\\{\\s*fetchData\\(\\);?\\s*\\},\\s*\\[\\]\\);",
    "regexPattern": "useEffect\\(\\(\\)\\s*=>\\s*\\{\\s*fetchData\\(\\);?\\s*\\},\\s*\\[\\]\\);",
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
    "theory": "\n<p>Hook-ul <code>useRef</code> returnează un obiect mutabil <code>{ current: initialValue }</code> a cărui proprietate persistă pe întreaga durată de viață a componentei fără a declanșa re-randare la modificare.</p>\n\n<h4>1. Exemplu de Focalizare DOM cu useRef</h4>\n<pre><code>import { useRef } from \"react\";\n\nexport function AutoFocusInput() {\n    // Declarare referință tipizată pentru nodul DOM:\n    const inputRef = useRef<HTMLInputElement>(null);\n\n    const handleFocus = () => {\n        // Acces sigur cu optional chaining:\n        inputRef.current?.focus();\n    };\n\n    return (\n        <div>\n            <input ref={inputRef} type=\"text\" placeholder=\"Scrie aici...\" />\n            <button onClick={handleFocus}>Focalizează Input</button>\n        </div>\n    );\n}\n</code></pre>\n",
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
    "prompt": "Declară o referință 'inputRef' tipizată pentru 'HTMLInputElement' inițializată cu 'null' folosind 'useRef'.",
    "task": "Declară o referință 'inputRef' tipizată pentru 'HTMLInputElement' inițializată cu 'null' folosind 'useRef'.",
    "example": "const inputRef = useRef<HTMLInputElement>(null);",
    "starterCode": "const inputRef = useRef<HTMLInputElement>(null);",
    "officialSolution": "const inputRef = useRef<HTMLInputElement>(null);",
    "expectedOutputPattern": "const\\s+inputRef\\s*=\\s*useRef<HTMLInputElement>\\(null\\);",
    "regexPattern": "const\\s+inputRef\\s*=\\s*useRef<HTMLInputElement>\\(null\\);",
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
    "theory": "\n<p>React folosește un sistem de evenimente sintetice (<code>SyntheticEvent</code>) care normalizează comportamentul evenimentelor native de browser între diferite platforme.</p>\n\n<h4>1. Exemplu de Handler Tipizat cu React.ChangeEvent</h4>\n<pre><code>import { useState } from \"react\";\n\nexport function ControlledInput() {\n    const [value, setValue] = useState(\"\");\n\n    // Eveniment tipizat exact pentru câmpul de text:\n    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n        setValue(e.target.value);\n    };\n\n    return <input value={value} onChange={handleChange} />;\n}\n</code></pre>\n",
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
    "prompt": "Definește o funcție 'handleChange' ce primește parametrul 'e: React.ChangeEvent<HTMLInputElement>' și apelează 'setValue(e.target.value);'.",
    "task": "Definește o funcție 'handleChange' ce primește parametrul 'e: React.ChangeEvent<HTMLInputElement>' și apelează 'setValue(e.target.value);'.",
    "example": "const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(e.target.value);\n};",
    "starterCode": "const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(e.target.value);\n};",
    "officialSolution": "const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(e.target.value);\n};",
    "expectedOutputPattern": "const\\s+handleChange\\s*=\\s*\\(e:\\s*React\\.ChangeEvent<HTMLInputElement>\\)\\s*=>\\s*\\{\\s*setValue\\(e\\.target\\.value\\);?\\s*\\};?",
    "regexPattern": "const\\s+handleChange\\s*=\\s*\\(e:\\s*React\\.ChangeEvent<HTMLInputElement>\\)\\s*=>\\s*\\{\\s*setValue\\(e\\.target\\.value\\);?\\s*\\};?",
    "hint": "Scrie const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setValue(e.target.value); };"
  },
  {
    "id": "ts-new-9",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "4. Senior",
    "xp": 55,
    "title": "Capitolul 9: Optimizare Performanță: 'useMemo' & 'useCallback'",
    "theory": "\n<p>În React, fiecare re-randare recreează funcțiile și recalculează valorile locale. Hook-urile <code>useMemo</code> și <code>useCallback</code> stabilizează referințele pentru a evita munca redundantă.</p>\n\n<h4>1. Exemplu de Stabilizare a Funcțiilor cu useCallback</h4>\n<pre><code>import { useCallback } from \"react\";\n\nexport function SaveButton({ data }: { data: string }) {\n    // Reține aceeași adresă de memorie pentru funcție atâta timp cât 'data' este identic:\n    const handleSave = useCallback(() => {\n        save(data);\n    }, [data]);\n\n    return <button onClick={handleSave}>Salvează</button>;\n}\n</code></pre>\n",
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
    "prompt": "Memorează o funcție 'handleSave' folosind 'useCallback' care apelează 'save(data);' cu dependența '[data]'.",
    "task": "Memorează o funcție 'handleSave' folosind 'useCallback' care apelează 'save(data);' cu dependența '[data]'.",
    "example": "const handleSave = useCallback(() => {\n    save(data);\n}, [data]);",
    "starterCode": "const handleSave = useCallback(() => {\n    save(data);\n}, [data]);",
    "officialSolution": "const handleSave = useCallback(() => {\n    save(data);\n}, [data]);",
    "expectedOutputPattern": "const\\s+handleSave\\s*=\\s*useCallback\\(\\(\\)\\s*=>\\s*\\{\\s*save\\(data\\);?\\s*\\},\\s*\\[data\\]\\);",
    "regexPattern": "const\\s+handleSave\\s*=\\s*useCallback\\(\\(\\)\\s*=>\\s*\\{\\s*save\\(data\\);?\\s*\\},\\s*\\[data\\]\\);",
    "hint": "Scrie const handleSave = useCallback(() => { save(data); }, [data]);"
  },
  {
    "id": "ts-new-10",
    "track": "TypeScript & React",
    "division": "Informatică și Programare",
    "icon": "⚛️",
    "level": "4. Senior",
    "xp": 60,
    "title": "Capitolul 10: TypeScript Utility Types: 'Partial', 'Pick', 'Omit' & 'Record'",
    "theory": "\n<p>TypeScript include un set puternic de tipuri utilitare globale (Utility Types) care permit transformarea și derivarea dinamică a tipurilor existente.</p>\n\n<h4>1. Exemplu de Pick, Omit și Partial</h4>\n<pre><code>interface User {\n    id: string;\n    username: string;\n    email: string;\n    passwordHash: string;\n}\n\n// Selectează strict proprietățile 'id' și 'username':\ntype UserPreview = Pick<User, \"id\" | \"username\">;\n\n// Elimină cheia privată:\ntype SafeUser = Omit<User, \"passwordHash\">;\n\n// Face toate câmpurile opționale pentru actualizări parțiale (PATCH):\ntype UpdateUserDto = Partial<User>;\n</code></pre>\n",
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
    "prompt": "Definește un tip 'UserPreview' folosind 'Pick' pentru a extrage doar proprietățile 'id' și 'username' din 'User'.",
    "task": "Definește un tip 'UserPreview' folosind 'Pick' pentru a extrage doar proprietățile 'id' și 'username' din 'User'.",
    "example": "type UserPreview = Pick<User, \"id\" | \"username\">;",
    "starterCode": "type UserPreview = Pick<User, \"id\" | \"username\">;",
    "officialSolution": "type UserPreview = Pick<User, \"id\" | \"username\">;",
    "expectedOutputPattern": "type\\s+UserPreview\\s*=\\s*Pick<User,\\s*[\"']id[\"']\\s*\\|\\s*[\"']username[\"']>;",
    "regexPattern": "type\\s+UserPreview\\s*=\\s*Pick<User,\\s*[\"']id[\"']\\s*\\|\\s*[\"']username[\"']>;",
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
    "theory": "\n<p>TypeScript realizează analiza fluxului de control (Control Flow Analysis) pentru a restrânge tipul unei variabile în interiorul blocurilor condiționale.</p>\n\n<h4>1. Exemplu de Type Guard Personalizat ('val is string')</h4>\n<pre><code>// Funcție de gardă de tip ce garantează compilatorului tipul verificat:\nfunction isString(val: unknown): val is string {\n    return typeof val === \"string\";\n}\n\nfunction processInput(input: unknown) {\n    if (isString(input)) {\n        // În acest bloc, input este garantat tratat ca string:\n        console.log(\"Lungime:\", input.length);\n    } else {\n        console.log(\"Nu este string\");\n    }\n}\n</code></pre>\n",
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
    "prompt": "Scrie antetul unei funcții type guard 'function isString(val: unknown): val is string' care returnează 'typeof val === \"string\"'.",
    "task": "Scrie antetul unei funcții type guard 'function isString(val: unknown): val is string' care returnează 'typeof val === \"string\"'.",
    "example": "function isString(val: unknown): val is string {\n    return typeof val === \"string\";\n}",
    "starterCode": "function isString(val: unknown): val is string {\n    return typeof val === \"string\";\n}",
    "officialSolution": "function isString(val: unknown): val is string {\n    return typeof val === \"string\";\n}",
    "expectedOutputPattern": "function\\s+isString\\(val:\\s*unknown\\):\\s*val\\s+is\\s+string\\s*\\{\\s*return\\s+typeof\\s+val\\s*===\\s*[\"']string[\"'];?\\s*\\}",
    "regexPattern": "function\\s+isString\\(val:\\s*unknown\\):\\s*val\\s+is\\s+string\\s*\\{\\s*return\\s+typeof\\s+val\\s*===\\s*[\"']string[\"'];?\\s*\\}",
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
    "theory": "\n<p>Reprezentarea stării cu multiple flag-uri booleene independente conduce la stări imposibile (Impossible States). <strong>Discriminated Unions</strong> rezolvă definitiv această problemă.</p>\n\n<h4>1. Exemplu de Discriminated Union și Reducer</h4>\n<pre><code>type Action = \n  | { type: \"ADD\"; amount: number }\n  | { type: \"RESET\" };\n\nfunction counterReducer(state: number, action: Action): number {\n    switch (action.type) {\n        case \"ADD\":\n            return state + action.amount;\n        case \"RESET\":\n            return 0;\n        default:\n            const _exhaustive: never = action;\n            return state;\n    }\n}\n</code></pre>\n",
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
    "prompt": "Definește o uniune discriminată 'Action' cu variantele '{ type: \"ADD\"; amount: number }' și '{ type: \"RESET\" }'.",
    "task": "Definește o uniune discriminată 'Action' cu variantele '{ type: \"ADD\"; amount: number }' și '{ type: \"RESET\" }'.",
    "example": "type Action = { type: \"ADD\"; amount: number } | { type: \"RESET\" };",
    "starterCode": "type Action = { type: \"ADD\"; amount: number } | { type: \"RESET\" };",
    "officialSolution": "type Action = { type: \"ADD\"; amount: number } | { type: \"RESET\" };",
    "expectedOutputPattern": "type\\s+Action\\s*=\\s*\\{\\s*type:\\s*[\"']ADD[\"'];?\\s*amount:\\s*number;?\\s*\\}\\s*\\|\\s*\\{\\s*type:\\s*[\"']RESET[\"'];?\\s*\\};?",
    "regexPattern": "type\\s+Action\\s*=\\s*\\{\\s*type:\\s*[\"']ADD[\"'];?\\s*amount:\\s*number;?\\s*\\}\\s*\\|\\s*\\{\\s*type:\\s*[\"']RESET[\"'];?\\s*\\};?",
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
    "theory": "\n<p><strong>Zustand</strong> este biblioteca preferată în ecosistemul modern React pentru gestionarea stării globale, eliminând boilerplate-ul Redux și problemele de performanță cauzate de re-randările Context API-ului.</p>\n\n<h4>1. Exemplu Complet de Store Zustand cu TypeScript</h4>\n<pre><code>import { create } from \"zustand\";\n\ninterface AppState {\n    user: string | null;\n    count: number;\n    setUser: (name: string) => void;\n    increment: () => void;\n}\n\nexport const useAppStore = create<AppState>()((set) => ({\n    user: null,\n    count: 0,\n    setUser: (name) => set({ user: name }),\n    increment: () => set((state) => ({ count: state.count + 1 })),\n}));\n\n// Consumare în componentă cu selector atomic (performanță maximă):\nexport function UserProfile() {\n    const user = useAppStore(state => state.user);\n    return <div>Utilizator: {user || \"Anonim\"}</div>;\n}\n</code></pre>\n",
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
    "prompt": "Apelează hook-ul 'useAppStore' cu un selector atomic care extrage doar 'state.user'.",
    "task": "Apelează hook-ul 'useAppStore' cu un selector atomic care extrage doar 'state.user'.",
    "example": "const user = useAppStore(state => state.user);",
    "starterCode": "const user = useAppStore(state => state.user);",
    "officialSolution": "const user = useAppStore(state => state.user);",
    "expectedOutputPattern": "const\\s+user\\s*=\\s*useAppStore\\(state\\s*=>\\s*state\\.user\\);",
    "regexPattern": "const\\s+user\\s*=\\s*useAppStore\\(state\\s*=>\\s*state\\.user\\);",
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
    "theory": "\n<p>Notația <strong>Big O</strong> măsoară eficiența teoretică a unui algoritm în cel mai defavorabil scenariu (worst-case scenario), exprimând cum crește consumul de timp sau memorie odată cu mărimea setului de date de intrare ($n$).</p>\n\n<h4>1. Ierarhia uzuală a ordinelor de complexitate</h4>\n<ul>\n  <li>$O(1)$ — Timp constant (acces la un element de tablou prin index).</li>\n  <li>$O(\\log n)$ — Timp logaritmic (căutarea binară ce înjumătățește spațiul la fiecare pas).</li>\n  <li>$O(n)$ — Timp liniar (parcurgerea simplă a unei liste neordonate).</li>\n  <li>$O(n \\log n)$ — Timp cvasi-liniar (cei mai buni algoritmi de sortare prin comparație: MergeSort).</li>\n  <li>$O(n^2)$ — Timp pătratic (bucle imbricate precum BubbleSort sau selecția naivă).</li>\n</ul>\n\n<h4>2. Exemple Practice de Complexitate în Cod</h4>\n<pre><code>// 1. O(1) - Timp Constant\nfunction getFirstElement(arr) {\n    return arr[0]; // Operație directă, independentă de lungimea lui arr\n}\n\n// 2. O(n) - Timp Liniar\nfunction findMax(arr) {\n    let max = arr[0];\n    for (let i = 1; i < arr.length; i++) {\n        if (arr[i] > max) max = arr[i];\n    }\n    return max; // Execută arr.length comparații\n}\n\n// 3. O(n^2) - Timp Pătratic\nfunction hasDuplicate(arr) {\n    for (let i = 0; i < arr.length; i++) {\n        for (let j = i + 1; j < arr.length; j++) {\n            if (arr[i] === arr[j]) return true; // Bucle imbricate\n        }\n    }\n    return false;\n}\n</code></pre>\n",
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
    "prompt": "Returnează stringul 'O(log n)' reprezentând complexitatea temporală a căutării binare pe un tablou sortat.",
    "task": "Returnează stringul 'O(log n)' reprezentând complexitatea temporală a căutării binare pe un tablou sortat.",
    "example": "function getBinarySearchComplexity() {\n    return 'O(log n)';\n}",
    "starterCode": "function getBinarySearchComplexity() {\n    return 'O(log n)';\n}",
    "officialSolution": "function getBinarySearchComplexity() {\n    return 'O(log n)';\n}",
    "expectedOutputPattern": "return\\s*[\"']O\\(log\\s+n\\)[\"'];?",
    "regexPattern": "return\\s*[\"']O\\(log\\s+n\\)[\"'];?",
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
    "theory": "\n<p>Dacă un tablou este sortat, căutarea unui element nu necesită inspectarea fiecărei poziții ($O(n)$). <strong>Căutarea binară</strong> compară elementul căutat cu valoarea de la mijlocul intervalului curent.</p>\n\n<h4>1. Algoritmul și Prevenirea Overflow-ului</h4>\n<p>Menținem doi pointeri: <code>left = 0</code> și <code>right = n - 1</code>. Calculăm mijlocul protejat împotriva overflow-ului: <code>mid = left + Math.floor((right - left) / 2)</code>.</p>\n\n<h4>2. Exemplu Complet de Căutare Binară</h4>\n<pre><code>function binarySearch(arr, target) {\n    let left = 0;\n    let right = arr.length - 1;\n\n    while (left <= right) {\n        // Calcul sigur al mijlocului:\n        const mid = left + Math.floor((right - left) / 2);\n\n        if (arr[mid] === target) {\n            return mid; // Elementul a fost găsit\n        } else if (arr[mid] < target) {\n            left = mid + 1; // Caută în jumătatea dreaptă\n        } else {\n            right = mid - 1; // Caută în jumătatea stângă\n        }\n    }\n    return -1; // Elementul nu există în tablou\n}\n\n// Testare:\nconst numbers = [10, 23, 35, 42, 59, 71, 88, 94];\nconsole.log(binarySearch(numbers, 42)); // Returnează indexul 3\n</code></pre>\n",
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
    "prompt": "Scrie calculul variabilei 'mid' folosind formula 'left + Math.floor((right - left) / 2);'.",
    "task": "Scrie calculul variabilei 'mid' folosind formula 'left + Math.floor((right - left) / 2);'.",
    "example": "const mid = left + Math.floor((right - left) / 2);",
    "starterCode": "const mid = left + Math.floor((right - left) / 2);",
    "officialSolution": "const mid = left + Math.floor((right - left) / 2);",
    "expectedOutputPattern": "mid\\s*=\\s*left\\s*\\+\\s*Math\\.floor\\(\\s*\\(right\\s*-\\s*left\\)\\s*/\\s*2\\s*\\);?",
    "regexPattern": "mid\\s*=\\s*left\\s*\\+\\s*Math\\.floor\\(\\s*\\(right\\s*-\\s*left\\)\\s*/\\s*2\\s*\\);?",
    "hint": "Scrie const mid = left + Math.floor((right - left) / 2);"
  },
  {
    "id": "algo-new-3",
    "track": "Algoritmi & Structuri de Date",
    "division": "Informatică și Programare",
    "icon": "🌲",
    "level": "2. Junior",
    "xp": 40,
    "title": "Capitolul 3: Liste Simplu Înlanțuite (Singly Linked Lists)",
    "theory": "\n<p>O <strong>listă simplu înlănțuită</strong> este o structură de date liniară în care elementele (nodurile) nu sunt stocate contiguu în memorie, ci fiecare nod conține datele proprii și un pointer către nodul următor (<code>next</code>).</p>\n\n<h4>1. Structura Nodului și Inserarea la Început ($O(1)$)</h4>\n<p>Inserarea unui nod nou la capătul listei (Head) necesită doar setarea <code>newNode.next = head</code> și actualizarea <code>head = newNode</code>, fără a muta celelalte elemente din memorie (spre deosebire de tablouri unde costă $O(n)$).</p>\n\n<h4>2. Exemplu de Implementare și Parcurgere</h4>\n<pre><code>class ListNode {\n    constructor(val, next = null) {\n        this.val = val;\n        this.next = next;\n    }\n}\n\n// Inserare la Head în O(1):\nfunction insertAtHead(head, val) {\n    const newNode = new ListNode(val);\n    newNode.next = head;\n    return newNode; // Noul head al listei\n}\n\n// Parcurgere liniară în O(n):\nfunction traverseList(head) {\n    let current = head;\n    while (current !== null) {\n        console.log(\"Valoare nod:\", current.val);\n        current = current.next; // Avansare către următorul nod\n    }\n}\n</code></pre>\n",
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
    "prompt": "Scrie o buclă 'while (current !== null) { current = current.next; }' ce parcurge nodurile listei înlănțuite.",
    "task": "Scrie o buclă 'while (current !== null) { current = current.next; }' ce parcurge nodurile listei înlănțuite.",
    "example": "let current = head;\nwhile (current !== null) {\n    current = current.next;\n}",
    "starterCode": "let current = head;\nwhile (current !== null) {\n    current = current.next;\n}",
    "officialSolution": "let current = head;\nwhile (current !== null) {\n    current = current.next;\n}",
    "expectedOutputPattern": "while\\s*\\(current\\s*!==\\s*null\\)\\s*\\{\\s*current\\s*=\\s*current\\.next;?\\s*\\}",
    "regexPattern": "while\\s*\\(current\\s*!==\\s*null\\)\\s*\\{\\s*current\\s*=\\s*current\\.next;?\\s*\\}",
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
    "theory": "\n<p>O <strong>stivă (Stack)</strong> funcționează pe principiul <strong>LIFO</strong> (Last-In, First-Out): ultimul element introdus este primul eliminat. Operațiunile de bază sunt <code>push</code> (adăugare) și <code>pop</code> (eliminare), ambele garantate în $O(1)$.</p>\n\n<h4>1. Aplicația Clasică: Validarea Parantezelor</h4>\n<p>Verificarea dacă un șir de paranteze (<code>()[]{}</code>) este valid se rezolvă optim cu o stivă: când întâlnim o paranteză deschisă o punem pe stivă (<code>push</code>). Când întâlnim una închisă, extragem vârful stivei (<code>pop</code>) și verificăm dacă perechea se potrivește.</p>\n\n<h4>2. Exemplu Complet de Validare cu Stivă</h4>\n<pre><code>function isValidParentheses(s) {\n    const stack = [];\n    const pairs = { ')': '(', ']': '[', '}': '{' };\n\n    for (let char of s) {\n        if (char === '(' || char === '[' || char === '{') {\n            stack.push(char);\n        } else if (char === ')' || char === ']' || char === '}') {\n            const top = stack.pop();\n            if (top !== pairs[char]) {\n                return false; // Paranteză nepotrivită sau stivă goală\n            }\n        }\n    }\n    // Dacă stiva este complet goală la final, parantezarea este validă\n    return stack.length === 0;\n}\n\nconsole.log(isValidParentheses(\"({[]})\")); // true\nconsole.log(isValidParentheses(\"([)]\"));   // false\n</code></pre>\n",
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
    "prompt": "Verifică dacă un array 'stack' folosit ca stivă este gol returnând 'stack.length === 0'.",
    "task": "Verifică dacă un array 'stack' folosit ca stivă este gol returnând 'stack.length === 0'.",
    "example": "function isStackEmpty(stack) {\n    return stack.length === 0;\n}",
    "starterCode": "function isStackEmpty(stack) {\n    return stack.length === 0;\n}",
    "officialSolution": "function isStackEmpty(stack) {\n    return stack.length === 0;\n}",
    "expectedOutputPattern": "return\\s+stack\\.length\\s*===\\s*0;?",
    "regexPattern": "return\\s+stack\\.length\\s*===\\s*0;?",
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
    "theory": "\n<p>Tehnicile <strong>Two Pointers</strong> și <strong>Sliding Window</strong> sunt două dintre cele mai importante metode de optimizare, reducând adesea complexitatea algoritmilor de la $O(n^2)$ la $O(n)$ prin evitarea calculelor redundante.</p>\n\n<h4>1. Two Pointers Convergenți</h4>\n<p>Pe un tablou sortat, plasăm un pointer la început (<code>left = 0</code>) și unul la sfârșit (<code>right = n - 1</code>). Dacă suma celor două numere este prea mică incrementăm <code>left</code>, dacă este prea mare decrementăm <code>right</code>.</p>\n\n<h4>2. Exemplu Sliding Window: Suma Maximă a unei Subferestre</h4>\n<pre><code>// Calculul sumei maxime a unui subtablou contiguu de lungime k în O(n)\nfunction maxSubarraySum(arr, k) {\n    if (arr.length < k) return null;\n\n    // Calculăm suma primei ferestre de dimensiune k:\n    let windowSum = 0;\n    for (let i = 0; i < k; i++) {\n        windowSum += arr[i];\n    }\n    let maxSum = windowSum;\n\n    // Glisăm fereastra: adăugăm noul element și îl scădem pe cel ieșit\n    for (let i = k; i < arr.length; i++) {\n        windowSum = windowSum + arr[i] - arr[i - k]; // Actualizare O(1)\n        maxSum = Math.max(maxSum, windowSum);\n    }\n    return maxSum;\n}\n\nconst scores = [2, 1, 5, 1, 3, 2];\nconsole.log(maxSubarraySum(scores, 3)); // 5 + 1 + 3 = 9\n</code></pre>\n",
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
    "prompt": "Actualizează 'windowSum' glisând fereastra: adaugă 'arr[i]' și scade 'arr[i - k]'.",
    "task": "Actualizează 'windowSum' glisând fereastra: adaugă 'arr[i]' și scade 'arr[i - k]'.",
    "example": "windowSum = windowSum + arr[i] - arr[i - k];",
    "starterCode": "windowSum = windowSum + arr[i] - arr[i - k];",
    "officialSolution": "windowSum = windowSum + arr[i] - arr[i - k];",
    "expectedOutputPattern": "windowSum\\s*=\\s*windowSum\\s*\\+\\s*arr\\[i\\]\\s*-\\s*arr\\[i\\s*-\\s*k\\];?|windowSum\\s*\\+=\\s*arr\\[i\\]\\s*-\\s*arr\\[i\\s*-\\s*k\\];?",
    "regexPattern": "windowSum\\s*=\\s*windowSum\\s*\\+\\s*arr\\[i\\]\\s*-\\s*arr\\[i\\s*-\\s*k\\];?|windowSum\\s*\\+=\\s*arr\\[i\\]\\s*-\\s*arr\\[i\\s*-\\s*k\\];?",
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
    "theory": "\n<p>O <strong>tabelă hash (Hash Map)</strong> asociază chei cu valori folosind o funcție hash care transformă cheia într-un index numeric într-un tablou intern (bucket array), oferind căutare, inserare și ștergere în timp mediu $O(1)$.</p>\n\n<h4>1. Coliziuni Hash și Separate Chaining</h4>\n<p>Deoarece mulțimea cheilor posibile este infinită, două chei diferite pot produce același index hash (coliziune). În <em>Separate Chaining</em>, fiecare bucket este o listă înlănțuită ce conține nodurile cu același index hash.</p>\n\n<h4>2. Exemplu Complet de Hash Map cu Separate Chaining</h4>\n<pre><code>class SimpleHashMap {\n    constructor(capacity = 16) {\n        this.capacity = capacity;\n        this.buckets = new Array(capacity).fill(null).map(() => []);\n    }\n\n    // Funcție simplă de dispersie (hash code):\n    hash(key) {\n        let h = 0;\n        for (let i = 0; i < key.length; i++) {\n            h = (h * 31 + key.charCodeAt(i)) % this.capacity;\n        }\n        return h;\n    }\n\n    set(key, value) {\n        const index = this.hash(key) % this.capacity;\n        const bucket = this.buckets[index];\n        const existing = bucket.find(item => item.key === key);\n        if (existing) {\n            existing.value = value;\n        } else {\n            bucket.push({ key, value });\n        }\n    }\n}\n</code></pre>\n",
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
    "prompt": "Calculează indexul hash stocându-l în 'index' folosind formula 'const index = hash(key) % capacity;'.",
    "task": "Calculează indexul hash stocându-l în 'index' folosind formula 'const index = hash(key) % capacity;'.",
    "example": "const index = hash(key) % capacity;",
    "starterCode": "const index = hash(key) % capacity;",
    "officialSolution": "const index = hash(key) % capacity;",
    "expectedOutputPattern": "const\\s+index\\s*=\\s*hash\\(key\\)\\s*%\\s*capacity;?",
    "regexPattern": "const\\s+index\\s*=\\s*hash\\(key\\)\\s*%\\s*capacity;?",
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
    "theory": "\n<p><strong>MergeSort</strong> este un algoritm clasic de sortare bazat pe paradigma <strong>Divide et Impera</strong>, oferind performanță garantată $O(n \\log n)$ în cel mai bun, mediu și cel mai defavorabil scenariu.</p>\n\n<h4>1. Divide, Impera, Combină</h4>\n<ol>\n  <li><strong>Divide</strong>: Împarte tabloul recursiv în două jumătăți egale până când ajunge la tablouri de 1 element (deja sortate).</li>\n  <li><strong>Impera</strong>: Sortează recursiv fiecare jumătate.</li>\n  <li><strong>Combină (Merge)</strong>: Interclasează cele două jumătăți sortate într-un tablou auxiliar comparând elementele cap la cap în timp $O(n)$.</li>\n</ol>\n\n<h4>2. Exemplu Complet de Implementare MergeSort</h4>\n<pre><code>function mergeSort(arr) {\n    // Cazul de bază: un tablou de 0 sau 1 element este deja sortat\n    if (arr.length <= 1) return arr;\n\n    const mid = Math.floor(arr.length / 2);\n    const left = mergeSort(arr.slice(0, mid));\n    const right = mergeSort(arr.slice(mid));\n\n    return merge(left, right);\n}\n\nfunction merge(left, right) {\n    const result = [];\n    let i = 0, j = 0;\n\n    while (i < left.length && j < right.length) {\n        if (left[i] <= right[j]) {\n            result.push(left[i++]);\n        } else {\n            result.push(right[j++]);\n        }\n    }\n    return result.concat(left.slice(i)).concat(right.slice(j));\n}\n</code></pre>\n",
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
    "prompt": "Verifică cazul de bază din MergeSort returnând 'arr' dacă 'arr.length <= 1'.",
    "task": "Verifică cazul de bază din MergeSort returnând 'arr' dacă 'arr.length <= 1'.",
    "example": "function mergeSort(arr) {\n    if (arr.length <= 1) return arr;\n    // restul algoritmului\n}",
    "starterCode": "function mergeSort(arr) {\n    if (arr.length <= 1) return arr;\n    // restul algoritmului\n}",
    "officialSolution": "function mergeSort(arr) {\n    if (arr.length <= 1) return arr;\n    // restul algoritmului\n}",
    "expectedOutputPattern": "if\\s*\\(arr\\.length\\s*<=\\s*1\\)\\s*return\\s+arr;?",
    "regexPattern": "if\\s*\\(arr\\.length\\s*<=\\s*1\\)\\s*return\\s+arr;?",
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
    "theory": "\n<p>Un <strong>Arbore Binar de Căutare (BST)</strong> este o structură ierarhică unde fiecare nod conține cel mult doi copii, respectând invariantul BST:</p>\n<p>Toate valorile din subarborele stâng sunt strict mai mici decât valoarea nodului (<code>left < root</code>), iar toate valorile din subarborele drept sunt strict mai mari (<code>right > root</code>).</p>\n\n<h4>1. Traversarea Inorder Produce Date Sortate</h4>\n<p>Traversarea <strong>Inorder</strong> (Stânga $\\rightarrow$ Rădăcină $\\rightarrow$ Dreapta) parcurge elementele unui BST în ordine strict crescătoare în timp $O(n)$.</p>\n\n<h4>2. Exemplu Complet de Nod BST și Căutare Recursivă</h4>\n<pre><code>class TreeNode {\n    constructor(val, left = null, right = null) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nfunction searchBST(node, val) {\n    if (!node || node.val === val) return node;\n\n    // Căutare binară în arbore:\n    if (val < node.val) {\n        return searchBST(node.left, val);  // Explorează ramura stângă\n    } else {\n        return searchBST(node.right, val); // Explorează ramura dreaptă\n    }\n}\n\n// Inorder Traversal ce generează un tablou sortat:\nfunction inorder(root, res = []) {\n    if (!root) return res;\n    inorder(root.left, res);\n    res.push(root.val);\n    inorder(root.right, res);\n    return res;\n}\n</code></pre>\n",
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
    "prompt": "Scrie condiția de căutare recursivă într-un BST: dacă 'val < node.val', caută în 'node.left'.",
    "task": "Scrie condiția de căutare recursivă într-un BST: dacă 'val < node.val', caută în 'node.left'.",
    "example": "if (val < node.val) {\n    return searchBST(node.left, val);\n}",
    "starterCode": "if (val < node.val) {\n    return searchBST(node.left, val);\n}",
    "officialSolution": "if (val < node.val) {\n    return searchBST(node.left, val);\n}",
    "expectedOutputPattern": "if\\s*\\(val\\s*<\\s*node\\.val\\)\\s*\\{\\s*return\\s+searchBST\\(node\\.left,\\s*val\\);?\\s*\\}",
    "regexPattern": "if\\s*\\(val\\s*<\\s*node\\.val\\)\\s*\\{\\s*return\\s+searchBST\\(node\\.left,\\s*val\\);?\\s*\\}",
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
    "theory": "\n<p>Un graf este o colecție de noduri (vârfuri) legate prin muchii. <strong>Breadth-First Search (BFS)</strong> parcurge graful nivel cu nivel, explorând toți vecinii imediați ai nodului de pornire înainte de a trece la nodurile de la distanța 2.</p>\n\n<h4>1. Utilizarea Cozii (Queue — FIFO) și Drumul Minim</h4>\n<p>BFS folosește obligatoriu o <strong>coadă (Queue)</strong> pentru a gestiona ordinea de explorare. Într-un graf <em>neponderat</em>, BFS garantează că primul moment în care atinge nodul destinație reprezintă cel mai scurt drum (număr minim de muchii).</p>\n\n<h4>2. Exemplu Complet de Implementare BFS</h4>\n<pre><code>function bfs(graph, startNode) {\n    const visited = new Set([startNode]);\n    const queue = [startNode];\n    const traversalOrder = [];\n\n    while (queue.length > 0) {\n        // Extrage primul nod din coadă în O(1)\n        const node = queue.shift();\n        traversalOrder.push(node);\n\n        for (const neighbor of graph[node] || []) {\n            if (!visited.has(neighbor)) {\n                visited.add(neighbor); // Marchează ca vizitat\n                queue.push(neighbor);  // Adaugă la coadă\n            }\n        }\n    }\n    return traversalOrder;\n}\n\n// Exemplu listă de adiacență:\nconst graph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D', 'E'],\n    'C': ['A', 'F'],\n    'D': ['B'], 'E': ['B'], 'F': ['C']\n};\nconsole.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']\n</code></pre>\n",
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
    "prompt": "Extrage primul nod dintr-o coadă 'queue' stocându-l în 'node' folosind 'queue.shift()'.",
    "task": "Extrage primul nod dintr-o coadă 'queue' stocându-l în 'node' folosind 'queue.shift()'.",
    "example": "const node = queue.shift();",
    "starterCode": "const node = queue.shift();",
    "officialSolution": "const node = queue.shift();",
    "expectedOutputPattern": "const\\s+node\\s*=\\s*queue\\.shift\\(\\);?",
    "regexPattern": "const\\s+node\\s*=\\s*queue\\.shift\\(\\);?",
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
    "theory": "\n<p><strong>Depth-First Search (DFS)</strong> explorează graful mergând cât mai adânc posibil de-a lungul fiecărei ramuri înainte de a face întoarcere (backtracking).</p>\n\n<h4>1. Detectarea Ciclurilor în Grafuri Orientate (3 Culori)</h4>\n<p>Pentru a detecta cicluri într-un graf orientat, clasificăm starea nodurilor în 3 stări:</p>\n<ul>\n  <li><em>0 (Alb)</em>: Nevizitat încă.</li>\n  <li><em>1 (Gri)</em>: În curs de vizitare (pe Call Stack-ul recursiv curent).</li>\n  <li><em>2 (Negru)</em>: Complet procesat și închis.</li>\n</ul>\n\n<h4>2. Exemplu Complet de Detectare a Ciclului prin DFS</h4>\n<pre><code>function hasCycle(graph, numNodes) {\n    const state = new Array(numNodes).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited\n\n    function dfs(u) {\n        state[u] = 1; // Marchează nodul ca 'gri' (activ pe stivă)\n\n        for (const v of graph[u] || []) {\n            if (state[v] === 1) {\n                return true; // S-a găsit o muchie de întoarcere (Back Edge) -> CICLU\n            }\n            if (state[v] === 0 && dfs(v)) {\n                return true;\n            }\n        }\n\n        state[u] = 2; // Marchează nodul ca 'negru' (finalizat)\n        return false;\n    }\n\n    for (let i = 0; i < numNodes; i++) {\n        if (state[i] === 0 && dfs(i)) return true;\n    }\n    return false;\n}\n</code></pre>\n",
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
    "prompt": "Marchează nodul curent 'u' ca fiind în curs de vizitare setând 'visited[u] = 1;'.",
    "task": "Marchează nodul curent 'u' ca fiind în curs de vizitare setând 'visited[u] = 1;'.",
    "example": "visited[u] = 1;",
    "starterCode": "visited[u] = 1;",
    "officialSolution": "visited[u] = 1;",
    "expectedOutputPattern": "visited\\[u\\]\\s*=\\s*1;?",
    "regexPattern": "visited\\[u\\]\\s*=\\s*1;?",
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
    "theory": "\n<p><strong>Algoritmul lui Dijkstra</strong> rezolvă problema celui mai scurt drum de la o sursă unică către toate celelalte noduri într-un graf ponderat cu costuri <em>strict non-negative</em>.</p>\n\n<h4>1. Coada cu Priorități și Relaxarea Muchiilor</h4>\n<p>Algoritmul menține un tablou <code>dist</code> inițializat cu infinit ($\\infty$) și o <strong>coadă cu priorități (Min-Heap)</strong> ce extrage întotdeauna nodul nefinalizat cu distanța minimă curentă în $O(\\log V)$. Pentru fiecare vecin, dacă <code>dist[u] + weight < dist[v]</code>, distanța este actualizată (relaxare).</p>\n\n<h4>2. Exemplu Complet de Dijkstra</h4>\n<pre><code>function dijkstra(graph, startNode, numNodes) {\n    const dist = new Array(numNodes).fill(Infinity);\n    dist[startNode] = 0;\n\n    // Coadă de priorități simulată cu perechi [node, distance]:\n    const pq = [[startNode, 0]];\n\n    while (pq.length > 0) {\n        pq.sort((a, b) => a[1] - b[1]); // Extrage nodul cu distanța minimă\n        const [u, currentDist] = pq.shift();\n\n        if (currentDist > dist[u]) continue;\n\n        for (const [v, weight] of graph[u] || []) {\n            // Condiția de relaxare a muchiei:\n            if (dist[u] + weight < dist[v]) {\n                dist[v] = dist[u] + weight;\n                pq.push([v, dist[v]]);\n            }\n        }\n    }\n    return dist;\n}\n</code></pre>\n",
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
    "prompt": "Scrie condiția de relaxare: dacă 'dist[u] + weight < dist[v]', actualizează 'dist[v] = dist[u] + weight;'.",
    "task": "Scrie condiția de relaxare: dacă 'dist[u] + weight < dist[v]', actualizează 'dist[v] = dist[u] + weight;'.",
    "example": "if (dist[u] + weight < dist[v]) {\n    dist[v] = dist[u] + weight;\n}",
    "starterCode": "if (dist[u] + weight < dist[v]) {\n    dist[v] = dist[u] + weight;\n}",
    "officialSolution": "if (dist[u] + weight < dist[v]) {\n    dist[v] = dist[u] + weight;\n}",
    "expectedOutputPattern": "dist\\[v\\]\\s*=\\s*dist\\[u\\]\\s*\\+\\s*weight;?",
    "regexPattern": "dist\\[v\\]\\s*=\\s*dist\\[u\\]\\s*\\+\\s*weight;?",
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
    "theory": "\n<p><strong>Programarea Dinamică (Dynamic Programming — DP)</strong> este o tehnică algoritmică utilizată când o problemă de optimizare prezintă două proprietăți cheie: <strong>Substructură Optimă</strong> și <strong>Subprobleme care se Suprapun</strong>.</p>\n\n<h4>1. Top-Down (Memoization) vs Bottom-Up (Tabulation)</h4>\n<p>În <em>Memoization</em> stocăm rezultatele apelurilor recursive într-un dicționar sau array pentru a preveni recalcularea. În <em>Tabulation</em> eliminăm recursivitatea, completând iterativ un tablou <code>dp[]</code> de la cazurile de bază până la $n$.</p>\n\n<h4>2. Exemplu Complet: Fibonacci cu Tabulation O(n)</h4>\n<pre><code>function fibonacci(n) {\n    if (n <= 1) return n;\n\n    // Tabloul DP pentru stocarea rezultatelor parțiale\n    const dp = new Array(n + 1);\n    dp[0] = 0;\n    dp[1] = 1;\n\n    // Relația de recurență Bottom-Up:\n    for (let i = 2; i <= n; i++) {\n        dp[i] = dp[i - 1] + dp[i - 2];\n    }\n\n    return dp[n];\n}\n\nconsole.log(fibonacci(10)); // 55 calculat instantaneu în O(n)\n</code></pre>\n",
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
    "prompt": "Scrie relația iterativă de recurență pentru calculul Fibonacci în tabloul 'dp': 'dp[i] = dp[i - 1] + dp[i - 2];'.",
    "task": "Scrie relația iterativă de recurență pentru calculul Fibonacci în tabloul 'dp': 'dp[i] = dp[i - 1] + dp[i - 2];'.",
    "example": "for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n}",
    "starterCode": "for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n}",
    "officialSolution": "for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n}",
    "expectedOutputPattern": "dp\\[i\\]\\s*=\\s*dp\\[i\\s*-\\s*1\\]\\s*\\+\\s*dp\\[i\\s*-\\s*2\\];?",
    "regexPattern": "dp\\[i\\]\\s*=\\s*dp\\[i\\s*-\\s*1\\]\\s*\\+\\s*dp\\[i\\s*-\\s*2\\];?",
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
    "theory": "\n<p>În sistemele Unix/Linux, totul este reprezentat ca un fișier (<em>Everything is a file</em>). Structura directoarelor pornește de la rădăcina unică <code>/</code> conform standardului FHS (Filesystem Hierarchy Standard).</p>\n\n<h4>1. Directoare Esențiale</h4>\n<ul>\n  <li><code>/etc</code> — Fișiere de configurare la nivel de sistem (ex: nginx.conf, sshd_config).</li>\n  <li><code>/var/log</code> — Jurnale și loguri generate de servicii.</li>\n  <li><code>/home/user</code> — Spațiul personal al utilizatorului obișnuit.</li>\n  <li><code>/bin</code> și <code>/usr/bin</code> — Binare executabile esențiale.</li>\n</ul>\n\n<h4>2. Exemple Practice de Navigare și Inspecție</h4>\n<pre><code># 1. Verifică calea absolută a directorului curent:\npwd\n# /home/developer\n\n# 2. Listare completă și detaliată (inclusiv fișiere ascunse .bashrc):\nls -la\n# drwxr-xr-x  5 developer developer  4096 Oct 15 12:00 .\n# -rw-r--r--  1 developer developer   220 Oct 15 10:00 .bashrc\n# -rwxr-xr-x  1 developer developer  1024 Oct 15 11:30 deploy.sh\n\n# 3. Creare structură de directoare în cascadă:\nmkdir -p /var/log/polymath/archives\n</code></pre>\n",
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
    "prompt": "Scrie comanda Bash care listează toate fișierele (inclusiv cele ascunse) în format lung detaliat: 'ls -la'.",
    "task": "Scrie comanda Bash care listează toate fișierele (inclusiv cele ascunse) în format lung detaliat: 'ls -la'.",
    "example": "ls -la",
    "starterCode": "ls -la",
    "officialSolution": "ls -la",
    "expectedOutputPattern": "ls\\s+-la|ls\\s+-al|ls\\s+-l\\s+-a|ls\\s+-a\\s+-l",
    "regexPattern": "ls\\s+-la|ls\\s+-al|ls\\s+-l\\s+-a|ls\\s+-a\\s+-l",
    "hint": "Scrie ls -la"
  },
  {
    "id": "devops-new-2",
    "track": "DevOps & Sisteme Linux",
    "division": "Informatică și Programare",
    "icon": "🐧",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 2: Redirecționări de Stream-uri I/O & Mecanismul Pipes ('|')",
    "theory": "\n<p>În Linux, fiecare proces deschide implicit 3 descriptori standard de fișiere: <code>0 (stdin)</code>, <code>1 (stdout)</code> și <code>2 (stderr)</code>.</p>\n\n<h4>1. Redirecționări</h4>\n<p>Operatorul <code>></code> suprascrie fișierul destinație, iar <code>>></code> adaugă la final (append). Sintaxa <code>2>&1</code> redirecționează erorile (stderr) pe același canal cu stdout.</p>\n\n<h4>2. Exemple Practice de Stream-uri și Pipes</h4>\n<pre><code># 1. Redirecționare simplă și append:\necho \"Deployment started\" > deploy.log\necho \"Timestamp: $(date)\" >> deploy.log\n\n# 2. Filtrare în lanț cu Pipes (|):\ncat app.log | grep ERROR | wc -l\n# Numără câte linii de eroare există în app.log\n\n# 3. Suprimarea erorilor (redirecționare către /dev/null):\nfind / -name \"*.conf\" 2>/dev/null\n</code></pre>\n",
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
    "prompt": "Filtrează ieșirea comenzii 'cat app.log' căutând liniile ce conțin 'ERROR' folosind pipe și grep: 'cat app.log | grep ERROR'.",
    "task": "Filtrează ieșirea comenzii 'cat app.log' căutând liniile ce conțin 'ERROR' folosind pipe și grep: 'cat app.log | grep ERROR'.",
    "example": "cat app.log | grep ERROR",
    "starterCode": "cat app.log | grep ERROR",
    "officialSolution": "cat app.log | grep ERROR",
    "expectedOutputPattern": "cat\\s+app\\.log\\s*\\|\\s*grep\\s+(?:[\"']ERROR[\"']|ERROR)",
    "regexPattern": "cat\\s+app\\.log\\s*\\|\\s*grep\\s+(?:[\"']ERROR[\"']|ERROR)",
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
    "theory": "\n<p>Securitatea fișierelor în Linux este guvernată de o matrice de 3 categorii de utilizatori: <strong>User (u)</strong>, <strong>Group (g)</strong> și <strong>Others (o)</strong>, fiecare având 3 drepturi posibile:</p>\n<ul>\n  <li><code>r (read)</code> = 4</li>\n  <li><code>w (write)</code> = 2</li>\n  <li><code>x (execute)</code> = 1</li>\n</ul>\n\n<h4>1. Calculul Octal</h4>\n<p>Suma valorilor binare dă cifra octală. De exemplu, <code>chmod 755 script.sh</code> conferă: User = 4+2+1 = <strong>7</strong> (rwx), Group = 4+0+1 = <strong>5</strong> (r-x), Others = 4+0+1 = <strong>5</strong> (r-x).</p>\n\n<h4>2. Exemple Practice de Permisiuni</h4>\n<pre><code># Fă un script executabil pentru toți, dar modificabil doar de owner:\nchmod 755 deploy.sh\n# -rwxr-xr-x 1 developer developer 1024 deploy.sh\n\n# Securizează cheia SSH privată (doar owner-ul o poate citi și scrie):\nchmod 600 ~/.ssh/id_rsa\n# -rw------- 1 developer developer 2602 id_rsa\n\n# Schimbă recursiv utilizatorul și grupul proprietar:\nsudo chown -R www-data:www-data /var/www/html\n</code></pre>\n",
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
    "prompt": "Fă scriptul 'deploy.sh' executabil pentru proprietar și cu drepturi de citire/execuție pentru restul rulând 'chmod 755 deploy.sh'.",
    "task": "Fă scriptul 'deploy.sh' executabil pentru proprietar și cu drepturi de citire/execuție pentru restul rulând 'chmod 755 deploy.sh'.",
    "example": "chmod 755 deploy.sh",
    "starterCode": "chmod 755 deploy.sh",
    "officialSolution": "chmod 755 deploy.sh",
    "expectedOutputPattern": "chmod\\s+755\\s+deploy\\.sh",
    "regexPattern": "chmod\\s+755\\s+deploy\\.sh",
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
    "theory": "\n<p>Fiecare proces din Linux primește un identificator unic numeric (<strong>PID</strong>). Comanda <code>ps aux</code> sau <code>htop</code> permite monitorizarea consumului de memorie și procesor.</p>\n\n<h4>1. Semnale POSIX Fundamentale</h4>\n<ul>\n  <li><code>SIGTERM (15)</code>: Semnalul politicos de oprire (Graceful Shutdown). Permite salvarea stării și eliberarea conexiunilor.</li>\n  <li><code>SIGKILL (9)</code>: Oprire forțată și imediată executată direct de nucleul Linux (Kernel); nu poate fi ignorată.</li>\n  <li><code>SIGHUP (1)</code>: Forțează reîncărcarea fișierului de configurare fără oprirea procesului.</li>\n</ul>\n\n<h4>2. Exemple Practice de Inspecție și Semnalizare</h4>\n<pre><code># 1. Localizează PID-ul aplicației:\nps aux | grep node\n# developer 4520  0.5  2.1 123456 45678 ? S 12:00 node server.js\n\n# 2. Trimite semnal politicos de oprire (SIGTERM 15):\nkill -15 4520\n\n# 3. Forțează oprirea doar dacă procesul este complet blocat:\nkill -9 4520\n\n# 4. Reîncarcă configurația serverului fără downtime:\nkill -HUP $(pidof nginx)\n</code></pre>\n",
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
    "prompt": "Trimite semnalul SIGTERM (15) către procesul cu PID-ul 4520 rulând 'kill -15 4520'.",
    "task": "Trimite semnalul SIGTERM (15) către procesul cu PID-ul 4520 rulând 'kill -15 4520'.",
    "example": "kill -15 4520",
    "starterCode": "kill -15 4520",
    "officialSolution": "kill -15 4520",
    "expectedOutputPattern": "kill\\s+-15\\s+4520|kill\\s+-s\\s+TERM\\s+4520|kill\\s+-SIGTERM\\s+4520",
    "regexPattern": "kill\\s+-15\\s+4520|kill\\s+-s\\s+TERM\\s+4520|kill\\s+-SIGTERM\\s+4520",
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
    "theory": "\n<p><strong>Systemd</strong> este sistemul de inițializare și managerul de servicii standard în distribuțiile Linux moderne (Ubuntu, Debian, RedHat), având PID-ul 1.</p>\n\n<h4>1. Comenzi Esențiale 'systemctl'</h4>\n<ul>\n  <li><code>sudo systemctl start nginx</code> — Pornește serviciul.</li>\n  <li><code>sudo systemctl enable nginx</code> — Activează pornirea automată la boot-ul serverului.</li>\n  <li><code>sudo systemctl status nginx</code> — Afișează starea curentă și logurile recente.</li>\n  <li><code>sudo systemctl reload nginx</code> — Reîncarcă configurația fără restart.</li>\n</ul>\n\n<h4>2. Exemple Practice cu Systemd și Journalctl</h4>\n<pre><code># 1. Verifică starea detaliată a serviciului Nginx:\nsudo systemctl status nginx\n\n# 2. Pornește și activează un serviciu dintr-un singur pas:\nsudo systemctl enable --now docker\n\n# 3. Urmărește logurile generate în timp real (-f = follow):\nsudo journalctl -u nginx -f\n\n# 4. Afișează ultimele 50 de linii de erori:\nsudo journalctl -u api-backend -p err -n 50\n</code></pre>\n",
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
    "prompt": "Pornește și verifică starea serviciului 'nginx' rulând comanda 'sudo systemctl status nginx'.",
    "task": "Pornește și verifică starea serviciului 'nginx' rulând comanda 'sudo systemctl status nginx'.",
    "example": "sudo systemctl status nginx",
    "starterCode": "sudo systemctl status nginx",
    "officialSolution": "sudo systemctl status nginx",
    "expectedOutputPattern": "(?:sudo\\s+)?systemctl\\s+status\\s+nginx",
    "regexPattern": "(?:sudo\\s+)?systemctl\\s+status\\s+nginx",
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
    "theory": "\n<p><strong>Docker</strong> împachetează aplicațiile și dependențele lor într-o unitate izolată numită <em>container</em>, partajând nucleul sistemului gazdă fără overhead-ul unei mașini virtuale.</p>\n\n<h4>1. Exemplu de Dockerfile Optimizat</h4>\n<pre><code># Imagine minimalistă Node.js:\nFROM node:20-alpine\n\n# Setează directorul de lucru:\nWORKDIR /app\n\n# Copiază fișierele de dependențe pentru layer caching:\nCOPY package*.json ./\nRUN npm install\n\n# Copiază codul sursă al aplicației:\nCOPY . .\n\nEXPOSE 8080\nCMD [\"node\", \"server.js\"]\n</code></pre>\n\n<h4>2. Comenzi de Rulare și Monitorizare</h4>\n<pre><code># Construiește imaginea:\ndocker build -t my-web:latest .\n\n# Rulează containerul în fundal (-d) cu mapare de port (80 host -> 80 container):\ndocker run -d -p 80:80 my-web:latest\n\n# Verifică containerele active:\ndocker ps\n</code></pre>\n",
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
    "prompt": "Rulează containerul din imaginea 'my-web:latest' în fundal (-d) mapând portul '80:80': 'docker run -d -p 80:80 my-web:latest'.",
    "task": "Rulează containerul din imaginea 'my-web:latest' în fundal (-d) mapând portul '80:80': 'docker run -d -p 80:80 my-web:latest'.",
    "example": "docker run -d -p 80:80 my-web:latest",
    "starterCode": "docker run -d -p 80:80 my-web:latest",
    "officialSolution": "docker run -d -p 80:80 my-web:latest",
    "expectedOutputPattern": "docker\\s+run\\s+-d\\s+-p\\s+80:80\\s+my-web:latest",
    "regexPattern": "docker\\s+run\\s+-d\\s+-p\\s+80:80\\s+my-web:latest",
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
    "theory": "\n<p>Sistemul de fișiere al unui container Docker este efemer: când containerul este șters, toate fișierele create în interior se pierd irevocabil. Persistența necesită mecanisme dedicate.</p>\n\n<h4>1. Named Volumes vs Bind Mounts</h4>\n<p>Volumele numite sunt complet gestionate de Docker (în <code>/var/lib/docker/volumes/</code>) și sunt recomandate pentru baze de date. Bind mounts leagă direct un director de pe host (ex: <code>-v $(pwd):/app</code>) pentru hot-reload în development.</p>\n\n<h4>2. Exemple Practice cu Docker Volumes</h4>\n<pre><code># 1. Creează un volum dedicat persistent:\ndocker volume create app_storage\n\n# 2. Rulează PostgreSQL atașat la volumul creat:\ndocker run -d \\\n  --name postgres-db \\\n  -e POSTGRES_PASSWORD=secret \\\n  -v app_storage:/var/lib/postgresql/data \\\n  postgres:16-alpine\n\n# 3. Listează volumele active:\ndocker volume ls\n</code></pre>\n",
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
    "prompt": "Creează un volum Docker numit 'app_storage' rulând comanda 'docker volume create app_storage'.",
    "task": "Creează un volum Docker numit 'app_storage' rulând comanda 'docker volume create app_storage'.",
    "example": "docker volume create app_storage",
    "starterCode": "docker volume create app_storage",
    "officialSolution": "docker volume create app_storage",
    "expectedOutputPattern": "docker\\s+volume\\s+create\\s+app_storage",
    "regexPattern": "docker\\s+volume\\s+create\\s+app_storage",
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
    "theory": "\n<p><strong>Docker Compose</strong> este utilitarul standard pentru definirea și rularea aplicațiilor multi-container (ex: backend Node.js + bază de date PostgreSQL + Redis cache) printr-un singur fișier declarativ YAML.</p>\n\n<h4>1. Exemplu Complet de Fișier 'docker-compose.yml'</h4>\n<pre><code>services:\n  web:\n    build: .\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - db\n    environment:\n      - DATABASE_URL=postgres://user:pass@db:5432/app\n  db:\n    image: postgres:16-alpine\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    environment:\n      - POSTGRES_PASSWORD=pass\n\nvolumes:\n  pgdata:\n</code></pre>\n\n<h4>2. Comandă de Lansare</h4>\n<pre><code># Pornește întreaga stivă în fundal (-d):\ndocker compose up -d\n</code></pre>\n",
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
    "prompt": "Pornește toate serviciile din docker-compose.yml în fundal rulând 'docker compose up -d'.",
    "task": "Pornește toate serviciile din docker-compose.yml în fundal rulând 'docker compose up -d'.",
    "example": "docker compose up -d",
    "starterCode": "docker compose up -d",
    "officialSolution": "docker compose up -d",
    "expectedOutputPattern": "docker\\s+compose\\s+up\\s+-d|docker-compose\\s+up\\s+-d",
    "regexPattern": "docker\\s+compose\\s+up\\s+-d|docker-compose\\s+up\\s+-d",
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
    "theory": "\n<p>Imaginile de producție nu trebuie să conțină compilatoare, SDK-uri greoaie sau fișiere sursă necompilate. <strong>Multi-Stage Builds</strong> permite utilizarea mai multor instrucțiuni <code>FROM</code> într-un singur Dockerfile.</p>\n\n<h4>1. Exemplu Complet de Multi-Stage Dockerfile</h4>\n<pre><code># Stagiul 1: Compilare (Build Stage)\nFROM golang:1.22 AS builder\nWORKDIR /app\nCOPY go.mod go.sum ./\nRUN go mod download\nCOPY . .\nRUN CGO_ENABLED=0 GOOS=linux go build -o myapp .\n\n# Stagiul 2: Imaginea finală curată de producție (sub 20 MB)\nFROM alpine:3.19\nWORKDIR /app\nCOPY --from=builder /app/myapp /app/myapp\nEXPOSE 8080\nCMD [\"/app/myapp\"]\n</code></pre>\n\n<h4>2. Copierea Artefactelor Între Stagii</h4>\n<p>Directiva <code>COPY --from=build /app/dist /public</code> extrage doar fișierele compilate, lăsând dependențele grele în primul stadiu.</p>\n",
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
    "prompt": "Copiază din stagiul 'build' fișierul '/app/dist' în directorul curent '/public': 'COPY --from=build /app/dist /public'.",
    "task": "Copiază din stagiul 'build' fișierul '/app/dist' în directorul curent '/public': 'COPY --from=build /app/dist /public'.",
    "example": "COPY --from=build /app/dist /public",
    "starterCode": "COPY --from=build /app/dist /public",
    "officialSolution": "COPY --from=build /app/dist /public",
    "expectedOutputPattern": "COPY\\s+--from=build\\s+/app/dist\\s+/public",
    "regexPattern": "COPY\\s+--from=build\\s+/app/dist\\s+/public",
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
    "theory": "\n<p><strong>Nginx</strong> este un server web de mare viteză bazat pe o arhitectură asincronă event-driven, utilizat frecvent ca <strong>Reverse Proxy</strong>, Load Balancer și punct de terminare SSL/TLS în fața serverelor de aplicații.</p>\n\n<h4>1. Exemplu Complet de Configurare Reverse Proxy</h4>\n<pre><code>server {\n    listen 80;\n    server_name api.example.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}\n</code></pre>\n\n<h4>2. Testarea Sintaxei Fără Întreruperea Serviciului</h4>\n<pre><code># Testează sintaxa fișierelor de configurare:\nsudo nginx -t\n\n# Reîncarcă configurația cu zero downtime:\nsudo nginx -s reload\n</code></pre>\n",
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
    "prompt": "Testează corectitudinea sintaxei fișierului de configurare Nginx fără a opri serverul rulând 'sudo nginx -t'.",
    "task": "Testează corectitudinea sintaxei fișierului de configurare Nginx fără a opri serverul rulând 'sudo nginx -t'.",
    "example": "sudo nginx -t",
    "starterCode": "sudo nginx -t",
    "officialSolution": "sudo nginx -t",
    "expectedOutputPattern": "(?:sudo\\s+)?nginx\\s+-t",
    "regexPattern": "(?:sudo\\s+)?nginx\\s+-t",
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
    "theory": "\n<p><strong>CI/CD</strong> (Continuous Integration & Continuous Deployment) automatizează testarea, compilarea și livrarea sigură a codului la fiecare <code>git push</code> sau <code>Pull Request</code>.</p>\n\n<h4>1. Structura unui Pipeline Complet GitHub Actions</h4>\n<pre><code>name: CI/CD Pipeline\non:\n  push:\n    branches: [ \"main\" ]\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Repository\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n\n      - name: Install Clean Dependencies\n        run: npm ci\n\n      - name: Run Tests\n        run: npm test\n</code></pre>\n",
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
    "prompt": "Scrie comanda dintr-un pas de workflow GitHub Actions care instalează dependențele curat: 'npm ci'.",
    "task": "Scrie comanda dintr-un pas de workflow GitHub Actions care instalează dependențele curat: 'npm ci'.",
    "example": "npm ci",
    "starterCode": "npm ci",
    "officialSolution": "npm ci",
    "expectedOutputPattern": "(?:-\\s*run:\\s*)?npm\\s+ci",
    "regexPattern": "(?:-\\s*run:\\s*)?npm\\s+ci",
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
    "theory": "\n<p>Când un eveniment (precum un click) se produce pe un element din browser, el parcurge 3 faze conform standardului W3C: Capturing, Target și Bubbling (urcarea înapoi prin toți părinții).</p>\n\n<h4>1. Tehnica Event Delegation</h4>\n<p>În loc să atașăm 1000 de handleri de eveniment pe fiecare element dintr-o listă, atașăm <strong>un singur listener pe părinte</strong> și folosim <code>e.target.closest('button')</code> pentru a identifica elementul acționat.</p>\n\n<h4>2. Exemplu Complet de Delegare de Evenimente</h4>\n<pre><code>const list = document.querySelector(\"#todo-list\");\n\n// Un singur listener atașat pe containerul părinte:\nlist.addEventListener(\"click\", (e) => {\n    // Găsește cel mai apropiat element buton de la punctul de click:\n    const btn = e.target.closest(\"button\");\n    if (!btn) return; // Click-ul nu a fost pe un buton\n\n    const item = btn.closest(\"li\");\n    console.log(\"Acțiune pe elementul ID:\", item.dataset.id);\n});\n</code></pre>\n",
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
    "prompt": "Atașează un eveniment 'click' pe 'list' și verifică dacă s-a dat click pe un buton folosind 'const btn = e.target.closest(\"button\");'.",
    "task": "Atașează un eveniment 'click' pe 'list' și verifică dacă s-a dat click pe un buton folosind 'const btn = e.target.closest(\"button\");'.",
    "example": "const btn = e.target.closest(\"button\");",
    "starterCode": "const btn = e.target.closest(\"button\");",
    "officialSolution": "const btn = e.target.closest(\"button\");",
    "expectedOutputPattern": "const\\s+btn\\s*=\\s*e\\.target\\.closest\\([\"']button[\"']\\);?",
    "regexPattern": "const\\s+btn\\s*=\\s*e\\.target\\.closest\\([\"']button[\"']\\);?",
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
    "theory": "\n<p><strong>IntersectionObserver</strong> este un API modern asincron care monitorizează intersecția unui element țintă cu viewport-ul dispozitivului, fără a bloca firul principal sau a forța Layout Thrashing.</p>\n\n<h4>1. Exemplu de Lazy Loading cu IntersectionObserver</h4>\n<pre><code>function handleIntersect(entries, observer) {\n    entries.forEach(entry => {\n        if (entry.isIntersecting) {\n            const img = entry.target;\n            img.src = img.dataset.src; // Încarcă imaginea reală\n            observer.unobserve(img);   // Oprește monitorizarea\n        }\n    });\n}\n\n// Instanțiere simplă:\nconst observer = new IntersectionObserver(handleIntersect);\ndocument.querySelectorAll(\"img.lazy\").forEach(el => observer.observe(el));\n</code></pre>\n",
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
    "prompt": "Instanțiază un 'IntersectionObserver' transmițând callback-ul 'handleIntersect' în variabila 'observer'.",
    "task": "Instanțiază un 'IntersectionObserver' transmițând callback-ul 'handleIntersect' în variabila 'observer'.",
    "example": "const observer = new IntersectionObserver(handleIntersect);",
    "starterCode": "const observer = new IntersectionObserver(handleIntersect);",
    "officialSolution": "const observer = new IntersectionObserver(handleIntersect);",
    "expectedOutputPattern": "const\\s+observer\\s*=\\s*new\\s+IntersectionObserver\\(handleIntersect(?:,\\s*options)?\\);?",
    "regexPattern": "const\\s+observer\\s*=\\s*new\\s+IntersectionObserver\\(handleIntersect(?:,\\s*options)?\\);?",
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
    "theory": "\n<p><strong>MutationObserver</strong> colectează toate modificările (adăugare/ștergere noduri, schimbare atribute sau text) și le livrează într-un singur batch asincron către funcția callback.</p>\n\n<h4>1. Exemplu Complet de Monitorizare cu MutationObserver</h4>\n<pre><code>const observer = new MutationObserver((mutationsList) => {\n    for (const mutation of mutationsList) {\n        if (mutation.type === \"childList\") {\n            console.log(\"Noduri modificate în DOM:\", mutation.addedNodes.length);\n        }\n    }\n});\n\n// Pornire monitorizare pe elementul țintă:\nobserver.observe(targetElement, { childList: true });\n</code></pre>\n",
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
    "prompt": "Pornește monitorizarea pe 'targetElement' pentru 'childList: true' rulând 'observer.observe(targetElement, { childList: true });'.",
    "task": "Pornește monitorizarea pe 'targetElement' pentru 'childList: true' rulând 'observer.observe(targetElement, { childList: true });'.",
    "example": "observer.observe(targetElement, { childList: true });",
    "starterCode": "observer.observe(targetElement, { childList: true });",
    "officialSolution": "observer.observe(targetElement, { childList: true });",
    "expectedOutputPattern": "observer\\.observe\\(targetElement,\\s*\\{\\s*childList:\\s*true\\s*\\}\\);?",
    "regexPattern": "observer\\.observe\\(targetElement,\\s*\\{\\s*childList:\\s*true\\s*\\}\\);?",
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
    "theory": "\n<p>Pentru a construi arhitecturi decuplate și sisteme modulare (Publish/Subscribe) fără biblioteci externe, browserul oferă clasa nativă <strong>CustomEvent</strong>.</p>\n\n<h4>1. Exemplu Complet de Creare și Declanșare de CustomEvent</h4>\n<pre><code>// 1. Creare eveniment cu payload prin proprietatea 'detail':\nconst myEvent = new CustomEvent(\"userLogin\", {\n    detail: { userId: 101, username: \"alex\" },\n    bubbles: true\n});\n\n// 2. Ascultare eveniment pe document:\ndocument.addEventListener(\"userLogin\", (e) => {\n    console.log(\"Date primite:\", e.detail.username);\n});\n\n// 3. Declanșare pe nodul DOM:\ndocument.dispatchEvent(myEvent);\n</code></pre>\n",
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
    "prompt": "Emite evenimentul 'myEvent' pe elementul 'document' folosind 'document.dispatchEvent(myEvent);'.",
    "task": "Emite evenimentul 'myEvent' pe elementul 'document' folosind 'document.dispatchEvent(myEvent);'.",
    "example": "document.dispatchEvent(myEvent);",
    "starterCode": "document.dispatchEvent(myEvent);",
    "officialSolution": "document.dispatchEvent(myEvent);",
    "expectedOutputPattern": "document\\.dispatchEvent\\(myEvent\\);?",
    "regexPattern": "document\\.dispatchEvent\\(myEvent\\);?",
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
    "theory": "\n<p>JavaScript în browser rulează pe un singur fir principal de execuție. Calculele intensive blochează complet interfața utilizator. Un <strong>Web Worker</strong> rulează codul într-un fir separat de execuție.</p>\n\n<h4>1. Exemplu de Comunicare cu Web Worker</h4>\n<pre><code>// Firul principal:\nconst myWorker = new Worker(\"worker.js\");\n\n// Trimitere mesaj către worker:\nmyWorker.postMessage({ cmd: \"START\" });\n\n// Recepționare rezultat:\nmyWorker.onmessage = (e) => {\n    console.log(\"Rezultat din background thread:\", e.data);\n};\n</code></pre>\n",
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
    "prompt": "Trimite obiectul '{ cmd: \"START\" }' către 'myWorker' folosind 'myWorker.postMessage({ cmd: \"START\" });'.",
    "task": "Trimite obiectul '{ cmd: \"START\" }' către 'myWorker' folosind 'myWorker.postMessage({ cmd: \"START\" });'.",
    "example": "myWorker.postMessage({ cmd: \"START\" });",
    "starterCode": "myWorker.postMessage({ cmd: \"START\" });",
    "officialSolution": "myWorker.postMessage({ cmd: \"START\" });",
    "expectedOutputPattern": "myWorker\\.postMessage\\(\\s*\\{\\s*cmd:\\s*[\"']START[\"']\\s*\\}\\s*\\);?",
    "regexPattern": "myWorker\\.postMessage\\(\\s*\\{\\s*cmd:\\s*[\"']START[\"']\\s*\\}\\s*\\);?",
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
    "theory": "\n<p>Spre deosebire de protocolul HTTP care este de tip request-response, <strong>WebSocket (wss://)</strong> deschide un canal TCP persistent, bidirecțional și de latență minimă.</p>\n\n<h4>1. Exemplu de Conexiune și Trimitere Mesaj</h4>\n<pre><code>const ws = new WebSocket(\"wss://api.example.com/live\");\n\nws.onopen = () => {\n    // Trimitere mesaj formatat ca JSON către server:\n    ws.send(JSON.stringify({ ping: true }));\n};\n\nws.onmessage = (event) => {\n    console.log(\"Răspuns server:\", event.data);\n};\n</code></pre>\n",
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
    "prompt": "Trimite mesajul JSON 'JSON.stringify({ ping: true })' prin socket-ul 'ws' folosind 'ws.send(JSON.stringify({ ping: true }));'.",
    "task": "Trimite mesajul JSON 'JSON.stringify({ ping: true })' prin socket-ul 'ws' folosind 'ws.send(JSON.stringify({ ping: true }));'.",
    "example": "ws.send(JSON.stringify({ ping: true }));",
    "starterCode": "ws.send(JSON.stringify({ ping: true }));",
    "officialSolution": "ws.send(JSON.stringify({ ping: true }));",
    "expectedOutputPattern": "ws\\.send\\(JSON\\.stringify\\(\\s*\\{\\s*ping:\\s*true\\s*\\}\\s*\\)\\);?",
    "regexPattern": "ws\\.send\\(JSON\\.stringify\\(\\s*\\{\\s*ping:\\s*true\\s*\\}\\s*\\)\\);?",
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
    "theory": "\n<p>Obiectul <strong>Proxy</strong> permite interceptarea și redefinirea operațiunilor de citire (<code>get</code>), atribuire (<code>set</code>) sau invocare de metode pe un obiect țintă.</p>\n\n<h4>1. Exemplu de Proxy cu Trap get și Reflect.get</h4>\n<pre><code>const target = { price: 100 };\n\nconst handler = {\n    get(target, prop, receiver) {\n        console.log(`Proprietatea citită: ${prop}`);\n        // Delegare către comportamentul nativ prin Reflect:\n        return Reflect.get(target, prop, receiver);\n    }\n};\n\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.price); // 100\n</code></pre>\n",
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
    "prompt": "Returnează rezultatul apelului 'Reflect.get(target, prop, receiver)' în interiorul unui trap 'get'.",
    "task": "Returnează rezultatul apelului 'Reflect.get(target, prop, receiver)' în interiorul unui trap 'get'.",
    "example": "return Reflect.get(target, prop, receiver);",
    "starterCode": "return Reflect.get(target, prop, receiver);",
    "officialSolution": "return Reflect.get(target, prop, receiver);",
    "expectedOutputPattern": "return\\s+Reflect\\.get\\(target,\\s*prop,\\s*receiver\\);?",
    "regexPattern": "return\\s+Reflect\\.get\\(target,\\s*prop,\\s*receiver\\);?",
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
    "theory": "\n<p>Înțelegerea ordinii de execuție asincrone în JavaScript necesită distincția clară dintre Microtask Queue și Macrotask Queue.</p>\n\n<h4>1. Exemplu de Programare a unui Microtask</h4>\n<pre><code>// Cod sincron:\nconsole.log(\"1. Sincron start\");\n\n// Macrotask (programat la final):\nsetTimeout(() => console.log(\"4. Macrotask (setTimeout)\"), 0);\n\n// Microtask de prioritate maximă:\nqueueMicrotask(() => {\n    console.log(\"3. Microtask (queueMicrotask)\");\n});\n\nPromise.resolve().then(() => console.log(\"2. Microtask (Promise)\"));\n</code></pre>\n",
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
    "prompt": "Programează funcția 'updateData' pe coada de microtask-uri folosind 'queueMicrotask(updateData);'.",
    "task": "Programează funcția 'updateData' pe coada de microtask-uri folosind 'queueMicrotask(updateData);'.",
    "example": "queueMicrotask(updateData);",
    "starterCode": "queueMicrotask(updateData);",
    "officialSolution": "queueMicrotask(updateData);",
    "expectedOutputPattern": "queueMicrotask\\(updateData\\);?",
    "regexPattern": "queueMicrotask\\(updateData\\);?",
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
    "theory": "\n<p><strong>AbortController</strong> permite anularea cererilor asincrone <code>fetch</code> sau a evenimentelor DOM pentru a preveni Race Conditions și consumul inutil de lățime de bandă.</p>\n\n<h4>1. Exemplu Complet de Anulare a unei Cereri HTTP</h4>\n<pre><code>const controller = new AbortController();\n\nfetch(\"https://api.example.com/search?q=js\", { signal: controller.signal })\n    .then(res => res.json())\n    .catch(err => {\n        if (err.name === \"AbortError\") {\n            console.log(\"Cererea a fost anulată cu succes.\");\n        }\n    });\n\n// Anulare la comandă:\ncontroller.abort();\n</code></pre>\n",
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
    "prompt": "Anulează cererea activă apelând metoda 'abort()' pe instanța 'controller': 'controller.abort();'.",
    "task": "Anulează cererea activă apelând metoda 'abort()' pe instanța 'controller': 'controller.abort();'.",
    "example": "controller.abort();",
    "starterCode": "controller.abort();",
    "officialSolution": "controller.abort();",
    "expectedOutputPattern": "controller\\.abort\\(\\);?",
    "regexPattern": "controller\\.abort\\(\\);?",
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
    "theory": "\n<p>Metoda <code>Stream.collect()</code> este punctul culminant al procesării funcționale în Java. În loc de simple colecții <code>toList()</code>, clasa utilitară <code>Collectors</code> oferă operațiuni analitice de agregare sofisticate.</p>\n\n<h4>1. Gruparea Datelor cu 'Collectors.groupingBy'</h4>\n<pre><code>// Exemplu 1: Clasificarea angajaților după departament\nMap&lt;Department, List&lt;Employee&gt;&gt; byDept = employees.stream()\n    .collect(Collectors.groupingBy(Employee::getDepartment));\n\n// Exemplu 2: Calculul salariului mediu per departament (downstream collector)\nMap&lt;Department, Double&gt; avgSalaryByDept = employees.stream()\n    .collect(Collectors.groupingBy(\n        Employee::getDepartment,\n        Collectors.averagingDouble(Employee::getSalary)\n    ));\n</code></pre>\n\n<h4>2. Partiționare Binară cu 'Collectors.partitioningBy'</h4>\n<pre><code>// Exemplu 3: Împărțirea studenților în admiși (true) și respinși (false)\nMap&lt;Boolean, List&lt;Student&gt;&gt; passedVsFailed = students.stream()\n    .collect(Collectors.partitioningBy(s -> s.getGrade() >= 5.0));\n\nSystem.out.println(\"Număr admiși: \" + passedVsFailed.get(true).size());\n</code></pre>\n",
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
    "prompt": "Grupează fluxul 'users.stream()' după țară apelând '.collect(Collectors.groupingBy(User::getCountry));'.",
    "task": "Grupează fluxul 'users.stream()' după țară apelând '.collect(Collectors.groupingBy(User::getCountry));'.",
    "example": "Map<String, List<User>> byCountry = users.stream()\n    .collect(Collectors.groupingBy(User::getCountry));",
    "starterCode": "Map<String, List<User>> byCountry = users.stream()\n    .collect(Collectors.groupingBy(User::getCountry));",
    "officialSolution": "Map<String, List<User>> byCountry = users.stream()\n    .collect(Collectors.groupingBy(User::getCountry));",
    "expectedOutputPattern": "\\.collect\\(Collectors\\.groupingBy\\(User::getCountry\\)\\);?",
    "regexPattern": "\\.collect\\(Collectors\\.groupingBy\\(User::getCountry\\)\\);?",
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
    "theory": "\n<p>Interfața clasică <code>Future<T></code> introdusă în Java 5 bloca firul apelant prin <code>get()</code>. În Java 8+, <strong>CompletableFuture&lt;T&gt;</strong> aduce un model reactiv non-blocant complet compatibil cu stilul funcțional.</p>\n\n<h4>1. Rularea Asincronă și Înlănțuirea Non-Blocantă</h4>\n<pre><code>// Exemplu 1: Execuție asincronă cu procesare de date în lanț\nCompletableFuture&lt;String&gt; future = CompletableFuture\n    .supplyAsync(() -> fetchUserDataFromDatabase(userId))\n    .thenApply(user -> user.getName().toUpperCase())\n    .thenApply(name -> \"Salut, \" + name + \"!\")\n    .exceptionally(ex -> \"Utilizator Anonim\");\n\n// Nu blochează firul apelant; afișează când calculul este gata:\nfuture.thenAccept(System.out::println);\n</code></pre>\n\n<h4>2. Combinarea Mai Multor Viitoare Concurente</h4>\n<pre><code>// Exemplu 2: Apelarea simultană a 2 servicii REST independente\nCompletableFuture&lt;User&gt; userFuture = CompletableFuture.supplyAsync(() -> getUser(id));\nCompletableFuture&lt;Orders&gt; orderFuture = CompletableFuture.supplyAsync(() -> getOrders(id));\n\n// Îmbină ambele rezultate când ambele sunt gata:\nCompletableFuture&lt;DashboardDTO&gt; dashboard = userFuture.thenCombine(\n    orderFuture,\n    (user, orders) -> new DashboardDTO(user, orders)\n);\n</code></pre>\n",
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
    "prompt": "Lansează o operație asincronă folosind 'CompletableFuture.supplyAsync(() -> \"OK\");'.",
    "task": "Lansează o operație asincronă folosind 'CompletableFuture.supplyAsync(() -> \"OK\");'.",
    "example": "CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> \"OK\");",
    "starterCode": "CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> \"OK\");",
    "officialSolution": "CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> \"OK\");",
    "expectedOutputPattern": "CompletableFuture\\.supplyAsync\\(\\(\\)\\s*=>\\s*[\"']OK[\"']\\);?|CompletableFuture\\.supplyAsync\\(\\(\\)\\s*->\\s*[\"']OK[\"']\\);?",
    "regexPattern": "CompletableFuture\\.supplyAsync\\(\\(\\)\\s*=>\\s*[\"']OK[\"']\\);?|CompletableFuture\\.supplyAsync\\(\\(\\)\\s*->\\s*[\"']OK[\"']\\);?",
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
    "theory": "\n<p>Crearea unui fir de execuție nativ Java (<code>new Thread()</code>) este extrem de costisitoare pentru sistemul de operare (alocă 1 MB de Stack per thread și consumă syscall-uri). În producție se folosesc exclusiv <strong>Thread Pools</strong> administrate prin <code>ExecutorService</code>.</p>\n\n<h4>1. Exemplu de Configurare și Rulare cu ExecutorService</h4>\n<pre><code>// Exemplu 1: Pool fix dimensionat optim pentru nucleele procesorului\nint cores = Runtime.getRuntime().availableProcessors();\nExecutorService executor = Executors.newFixedThreadPool(cores);\n\n// Trimite sarcini spre execuție concurentă:\nfor (int i = 0; i &lt; 10; i++) {\n    final int taskId = i;\n    executor.submit(() -> {\n        System.out.println(\"Rulează task \" + taskId + \" pe firul: \" + Thread.currentThread().getName());\n    });\n}\n\n// Oprire politicoasă (Graceful Shutdown):\nexecutor.shutdown();\nif (!executor.awaitTermination(5, TimeUnit.SECONDS)) {\n    executor.shutdownNow();\n}\n</code></pre>\n",
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
    "prompt": "Creează un pool de 4 fire de execuție apelând 'Executors.newFixedThreadPool(4);'.",
    "task": "Creează un pool de 4 fire de execuție apelând 'Executors.newFixedThreadPool(4);'.",
    "example": "ExecutorService executor = Executors.newFixedThreadPool(4);",
    "starterCode": "ExecutorService executor = Executors.newFixedThreadPool(4);",
    "officialSolution": "ExecutorService executor = Executors.newFixedThreadPool(4);",
    "expectedOutputPattern": "executor\\s*=\\s*Executors\\.newFixedThreadPool\\(4\\);?",
    "regexPattern": "executor\\s*=\\s*Executors\\.newFixedThreadPool\\(4\\);?",
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
    "theory": "\n<p>Până la Java 21, fiecare fir de execuție Java era mapat 1:1 pe un fir al sistemului de operare (Platform Thread), limitând scalabilitatea unui server la câteva mii de conexiuni simultane din cauza memoriei consumate.</p>\n\n<h4>1. Ce sunt Firele Virtuale (Virtual Threads)?</h4>\n<p><strong>Virtual Threads</strong> sunt fire ultra-ușoare gestionate exclusiv de mașina virtuală JVM, nu de sistemul de operare. Un fir virtual consumă doar câțiva octeți de memorie, permițând crearea a <strong>milioane de fire simultane</strong> pe un singur calculator obișnuit!</p>\n\n<h4>2. Exemplu Complet de Scalare cu Milioane de Fire</h4>\n<pre><code>// Exemplu 1: Lansarea a 100.000 de fire virtuale simultane în Java 21\ntry (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    IntStream.range(0, 100_000).forEach(i -> {\n        executor.submit(() -> {\n            // Operație I/O blocantă simulară: firul carrier este eliberat instant!\n            Thread.sleep(Duration.ofSeconds(1));\n            return i;\n        });\n    });\n} // try-with-resources așteaptă finalizarea tuturor firelor automat!\n</code></pre>\n",
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
    "prompt": "Creează un executor de fire virtuale apelând 'Executors.newVirtualThreadPerTaskExecutor()'.",
    "task": "Creează un executor de fire virtuale apelând 'Executors.newVirtualThreadPerTaskExecutor()'.",
    "example": "ExecutorService vExecutor = Executors.newVirtualThreadPerTaskExecutor();",
    "starterCode": "ExecutorService vExecutor = Executors.newVirtualThreadPerTaskExecutor();",
    "officialSolution": "ExecutorService vExecutor = Executors.newVirtualThreadPerTaskExecutor();",
    "expectedOutputPattern": "vExecutor\\s*=\\s*Executors\\.newVirtualThreadPerTaskExecutor\\(\\);?",
    "regexPattern": "vExecutor\\s*=\\s*Executors\\.newVirtualThreadPerTaskExecutor\\(\\);?",
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
    "theory": "\n<p><strong>Spring Boot</strong> este cel mai utilizat framework enterprise din ecosistemul Java, oferind auto-configurare, server web integrat (Tomcat) și un container puternic de <strong>Inversion of Control (IoC)</strong>.</p>\n\n<h4>1. Componente & Injectarea Dependențelor prin Constructor</h4>\n<pre><code>// Exemplu 1: Service cu Constructor Injection (imutabil și ușor de testat)\n@Service\npublic class OrderService {\n    private final OrderRepository repository;\n\n    public OrderService(OrderRepository repository) {\n        this.repository = repository;\n    }\n\n    public Order createOrder(OrderDTO dto) {\n        return repository.save(new Order(dto));\n    }\n}\n</code></pre>\n\n<h4>2. Controlere REST Curate</h4>\n<pre><code>// Exemplu 2: Endpoint HTTP GET și POST\n@RestController\n@RequestMapping(\"/api/orders\")\npublic class OrderController {\n    private final OrderService orderService;\n\n    public OrderController(OrderService orderService) {\n        this.orderService = orderService;\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity&lt;Order&gt; getOrder(@PathVariable Long id) {\n        return ResponseEntity.ok(orderService.findById(id));\n    }\n}\n</code></pre>\n",
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
    "prompt": "Adnotează clasa 'ApiController' cu adnotarea Spring '@RestController' pentru a expune un serviciu web REST.",
    "task": "Adnotează clasa 'ApiController' cu adnotarea Spring '@RestController' pentru a expune un serviciu web REST.",
    "example": "@RestController\npublic class ApiController {\n}",
    "starterCode": "@RestController\npublic class ApiController {\n}",
    "officialSolution": "@RestController\npublic class ApiController {\n}",
    "expectedOutputPattern": "@RestController\\s+public\\s+class\\s+ApiController",
    "regexPattern": "@RestController\\s+public\\s+class\\s+ApiController",
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
    "theory": "\n<p>Arhitectura de memorie a mașinii virtuale Java (JVM) este împărțită în zone cu cicluri de viață distincte:</p>\n\n<h4>1. Structura Memoriei JVM</h4>\n<ul>\n  <li><strong>Heap</strong>: Spațiul partajat unde sunt alocate toate obiectele create cu <code>new</code>. Subdivizat în Young Generation și Old Generation.</li>\n  <li><strong>Metaspace</strong>: Memorie nativă off-heap unde sunt stocate metadatele claselor încărcate.</li>\n  <li><strong>Stack</strong>: Fiecare fir de execuție are propria stivă cu frame-uri de apel și variabile locale.</li>\n</ul>\n\n<h4>2. Exemplu de Configurare JVM Flag-uri în Producție</h4>\n<pre><code># Exemplu de lansare containerizată cu colectorul ZGC ultra-rapid:\njava -XX:+UseZGC \\\n     -Xms4g -Xmx4g \\\n     -XX:+AlwaysPreTouch \\\n     -XX:+ExitOnOutOfMemoryError \\\n     -jar app.jar\n\n# Avantaj ZGC: Pauze Stop-The-World sub 1 milisecundă chiar și pe heap-uri de 16 TB!\n</code></pre>\n",
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
    "prompt": "Specifică flag-ul JVM de activare a colectorului ZGC returnând stringul '-XX:+UseZGC'.",
    "task": "Specifică flag-ul JVM de activare a colectorului ZGC returnând stringul '-XX:+UseZGC'.",
    "example": "public String getZgcFlag() {\n    return \"-XX:+UseZGC\";\n}",
    "starterCode": "public String getZgcFlag() {\n    return \"-XX:+UseZGC\";\n}",
    "officialSolution": "public String getZgcFlag() {\n    return \"-XX:+UseZGC\";\n}",
    "expectedOutputPattern": "return\\s*[\"']-XX:\\+UseZGC[\"'];?",
    "regexPattern": "return\\s*[\"']-XX:\\+UseZGC[\"'];?",
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
    "theory": "\n<p>Spre deosebire de <code>GROUP BY</code> care comprimă mai multe rânduri într-un singur rând agregat, <strong>Funcțiile Window</strong> calculează valori peste un set de rânduri (window frame), păstrând totodată identitatea fiecărui rând individual din rezultat.</p>\n\n<h4>1. Diferența dintre ROW_NUMBER, RANK și DENSE_RANK</h4>\n<p>Dacă avem două rânduri cu același salariu de pe poziția a doua:</p>\n<ul>\n  <li><code>ROW_NUMBER()</code>: Asignează valori strict unice fără duplicare (1, 2, 3, 4...).</li>\n  <li><code>RANK()</code>: Asignează același rang egalităților, dar <em>sare peste poziții</em> (1, 2, 2, 4...).</li>\n  <li><code>DENSE_RANK()</code>: Asignează același rang egalităților și <em>nu sare nicio poziție</em> (1, 2, 2, 3...).</li>\n</ul>\n\n<h4>2. Exemplu Complet de Interogare Window</h4>\n<pre><code>-- Exemplu 1: Calculul rangurilor salariale în cadrul fiecărui departament\nSELECT \n    name,\n    dept_id,\n    salary,\n    ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS row_num,\n    RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk,\n    DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS dense_rnk\nFROM employees;\n\n-- Output:\n-- | name   | dept_id | salary | row_num | rnk | dense_rnk |\n-- | Alice  | 10      | 8000   | 1       | 1   | 1         |\n-- | Bob    | 10      | 7000   | 2       | 2   | 2         |\n-- | Dan    | 10      | 7000   | 3       | 2   | 2         |\n-- | Eve    | 10      | 6000   | 4       | 4   | 3         |\n</code></pre>\n",
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
    "prompt": "Scrie funcția 'DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC)' cu aliasul rank_pos.",
    "task": "Scrie funcția 'DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC)' cu aliasul rank_pos.",
    "example": "SELECT name, salary,\n       DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rank_pos\nFROM employees;",
    "starterCode": "SELECT name, salary,\n       DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rank_pos\nFROM employees;",
    "officialSolution": "SELECT name, salary,\n       DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rank_pos\nFROM employees;",
    "expectedOutputPattern": "DENSE_RANK\\(\\)\\s+OVER\\s*\\(\\s*PARTITION\\s+BY\\s+dept_id\\s+ORDER\\s+BY\\s+salary\\s+DESC\\s*\\)(?:\\s+AS\\s+rank_pos)?",
    "regexPattern": "DENSE_RANK\\(\\)\\s+OVER\\s*\\(\\s*PARTITION\\s+BY\\s+dept_id\\s+ORDER\\s+BY\\s+salary\\s+DESC\\s*\\)(?:\\s+AS\\s+rank_pos)?",
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
    "theory": "\n<p>Funcțiile analitice <code>LEAD()</code> și <code>LAG()</code> permit accesarea valorilor din rândurile următoare sau anterioare direct din interogare, fără a recurge la auto-joncțiuni costisitoare (self-joins $O(n^2)$).</p>\n\n<h4>1. Sintaxa 'LAG(column, offset, default)'</h4>\n<p><code>LAG(amount, 1, 0) OVER (ORDER BY sale_date)</code> returnează valoarea vânzării din rândul imediat precedent. Este esențială pentru calculul creșterilor procentuale lunare (Month-over-Month growth).</p>\n\n<h4>2. Exemplu Complet de Analiză a Tendințelor</h4>\n<pre><code>-- Exemplu 1: Calculul evoluției vânzărilor lunare și a diferenței față de luna precedentă\nSELECT \n    month,\n    sales,\n    LAG(sales, 1, 0) OVER (ORDER BY month) AS prev_sales,\n    sales - LAG(sales, 1, 0) OVER (ORDER BY month) AS growth,\n    LEAD(sales, 1) OVER (ORDER BY month) AS next_month_sales\nFROM monthly_sales;\n\n-- Output:\n-- | month | sales | prev_sales | growth | next_month_sales |\n-- | Jan   | 1000  | 0          | +1000  | 1200             |\n-- | Feb   | 1200  | 1000       | +200   | 1500             |\n-- | Mar   | 1500  | 1200       | +300   | NULL             |\n</code></pre>\n",
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
    "prompt": "Extrage valoarea precedentă a vânzărilor 'sales' folosind 'LAG(sales, 1) OVER (ORDER BY month)' cu aliasul prev_sales.",
    "task": "Extrage valoarea precedentă a vânzărilor 'sales' folosind 'LAG(sales, 1) OVER (ORDER BY month)' cu aliasul prev_sales.",
    "example": "SELECT month, sales,\n       LAG(sales, 1) OVER (ORDER BY month) AS prev_sales\nFROM monthly_revenue;",
    "starterCode": "SELECT month, sales,\n       LAG(sales, 1) OVER (ORDER BY month) AS prev_sales\nFROM monthly_revenue;",
    "officialSolution": "SELECT month, sales,\n       LAG(sales, 1) OVER (ORDER BY month) AS prev_sales\nFROM monthly_revenue;",
    "expectedOutputPattern": "LAG\\(sales,\\s*1\\)\\s+OVER\\s*\\(\\s*ORDER\\s+BY\\s+month\\s*\\)(?:\\s+AS\\s+prev_sales)?",
    "regexPattern": "LAG\\(sales,\\s*1\\)\\s+OVER\\s*\\(\\s*ORDER\\s+BY\\s+month\\s*\\)(?:\\s+AS\\s+prev_sales)?",
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
    "theory": "\n<p>Datele ierarhice (organigrame de companie, structuri de directoare în fișiere, categorii cu subcategorii imbricate nelimitat) nu pot fi parcurse cu un număr fix de <code>JOIN</code>-uri. <strong>Recursive Common Table Expressions (WITH RECURSIVE)</strong> rezolvă această problemă în mod elegant.</p>\n\n<h4>1. Structura unui CTE Recursiv</h4>\n<p>Un CTE recursiv este format din două interogări unite prin <code>UNION ALL</code>:</p>\n<ol>\n  <li><strong>Termenul Ancoră (Anchor Member)</strong>: Selectează rădăcinile ierarhiei (ex: <code>WHERE manager_id IS NULL</code>).</li>\n  <li><strong>Termenul Recursiv (Recursive Member)</strong>: Face joncțiune între tabela sursă și numele propriului CTE, parcurgând nivel cu nivel până când interogarea nu mai produce rânduri noi.</li>\n</ol>\n\n<h4>2. Exemplu Complet de Ierarhie Organizațională</h4>\n<pre><code>-- Exemplu 1: Parcurgerea ierarhiei unei companii de la CEO până la angajați\nWITH RECURSIVE OrgHierarchy AS (\n    -- 1. Ancoră: nodul rădăcină (CEO)\n    SELECT id, name, manager_id, 1 AS depth\n    FROM employees\n    WHERE manager_id IS NULL\n    \n    UNION ALL\n    \n    -- 2. Membru Recursiv: găsește subordonații direcți\n    SELECT e.id, e.name, e.manager_id, o.depth + 1\n    FROM employees e\n    INNER JOIN OrgHierarchy o ON e.manager_id = o.id\n)\nSELECT * FROM OrgHierarchy ORDER BY depth, name;\n</code></pre>\n",
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
    "prompt": "Inițializează un CTE recursiv numit 'hierarchy' scriind clauza de debut 'WITH RECURSIVE hierarchy AS ('.",
    "task": "Inițializează un CTE recursiv numit 'hierarchy' scriind clauza de debut 'WITH RECURSIVE hierarchy AS ('.",
    "example": "WITH RECURSIVE hierarchy AS (\n    SELECT id, name, 1 AS level FROM categories WHERE parent_id IS NULL\n)",
    "starterCode": "WITH RECURSIVE hierarchy AS (\n    SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL\n)",
    "officialSolution": "WITH RECURSIVE hierarchy AS (\n    SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL\n)",
    "expectedOutputPattern": "WITH\\s+RECURSIVE\\s+hierarchy\\s+AS\\s*\\(",
    "regexPattern": "WITH\\s+RECURSIVE\\s+hierarchy\\s+AS\\s*\\(",
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
    "theory": "\n<p>O <strong>tranzacție</strong> este o unitate logică indivizibilă de lucru garantată de proprietățile <strong>ACID</strong> (Atomicity, Consistency, Isolation, Durability).</p>\n\n<h4>1. Nivelurile de Izolare SQL Standard</h4>\n<ol>\n  <li><code>READ UNCOMMITTED</code>: Permite toate anomaliile (inclusiv Dirty Reads).</li>\n  <li><code>READ COMMITTED</code> (implicit în Postgres): Previne Dirty Reads.</li>\n  <li><code>REPEATABLE READ</code>: Previne Dirty Reads și Non-Repeatable Reads.</li>\n  <li><code>SERIALIZABLE</code>: Cel mai strict nivel; previne absolut toate anomaliile prin execuție strict serială.</li>\n</ol>\n\n<h4>2. Exemplu de Tranzacție cu Nivel de Izolare Strict</h4>\n<pre><code>-- Exemplu 1: Tranzacție sigură de transfer bancar\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nBEGIN;\n\n-- Scădere din contul sursă:\nUPDATE accounts SET balance = balance - 250 WHERE id = 101;\n\n-- Creditare în contul destinație:\nUPDATE accounts SET balance = balance + 250 WHERE id = 202;\n\n-- Confirmare definitivă a ambelor operațiuni:\nCOMMIT;\n</code></pre>\n",
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
    "prompt": "Setează nivelul de izolare al tranzacției la 'SERIALIZABLE' scriind comanda completă 'SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;'.",
    "task": "Setează nivelul de izolare al tranzacției la 'SERIALIZABLE' scriind comanda completă 'SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;'.",
    "example": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nBEGIN;\n-- operatiuni sigure\nCOMMIT;",
    "starterCode": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;",
    "officialSolution": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;",
    "expectedOutputPattern": "SET\\s+TRANSACTION\\s+ISOLATION\\s+LEVEL\\s+SERIALIZABLE;?",
    "regexPattern": "SET\\s+TRANSACTION\\s+ISOLATION\\s+LEVEL\\s+SERIALIZABLE;?",
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
    "theory": "\n<p>Pentru a înțelege de ce o interogare este lentă, folosim comanda <code>EXPLAIN ANALYZE</code>. Aceasta nu doar estimează planul, ci <strong>execută efectiv interogarea</strong> pe server și afișează timpii reali măsurați în milisecunde și numărul de pagini de memorie (buffers) citite.</p>\n\n<h4>1. Noduri de Scanare</h4>\n<ul>\n  <li><code>Seq Scan (Sequential Scan)</code>: Citește fiecare bloc al tabelei de la cap la coadă ($O(n)$). Acceptabil pentru tabele mici, catastrofal pentru milioane de rânduri.</li>\n  <li><code>Index Scan</code>: Caută cheile în arborele B-Tree al indexului și apoi citește paginile de pe disc ($O(\\log n)$).</li>\n  <li><code>Index Only Scan</code>: Toate coloanele cerute în <code>SELECT</code> se află deja în index (Covering Index), eliminând complet citirea din tabelă.</li>\n</ul>\n\n<h4>2. Exemplu Complet de Raport EXPLAIN</h4>\n<pre><code>-- Exemplu 1: Analiza planului de execuție cu timpi reali și memorie RAM\nEXPLAIN (ANALYZE, BUFFERS) \nSELECT * FROM orders \nWHERE status = 'pending' AND total > 500;\n\n-- Output raport de execuție:\n-- -> Index Scan using idx_orders_status on orders (cost=0.29..8.30 rows=5) (actual time=0.045..0.052ms)\n--    Buffers: shared hit=4\n-- Planning Time: 0.120 ms\n-- Execution Time: 0.080 ms\n</code></pre>\n",
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
    "prompt": "Rulează analiza de execuție cu măsurare de timpi și buffere pe tabela 'orders' scriind 'EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders;'.",
    "task": "Rulează analiza de execuție cu măsurare de timpi și buffere pe tabela 'orders' scriind 'EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders;'.",
    "example": "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders;",
    "starterCode": "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders;",
    "officialSolution": "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders;",
    "expectedOutputPattern": "EXPLAIN\\s+\\(ANALYZE,\\s*BUFFERS\\)\\s+SELECT\\s+\\*\\s+FROM\\s+orders;?",
    "regexPattern": "EXPLAIN\\s+\\(ANALYZE,\\s*BUFFERS\\)\\s+SELECT\\s+\\*\\s+FROM\\s+orders;?",
    "hint": "Scrie EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders;"
  },
  {
    "id": "fr-a1-p1",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 25,
    "title": "Capitolul 1: Pronumele Personale Subiect (Je, Tu, Il, Elle, On, Nous, Vous, Ils, Elles)",
    "theory": "\n<p>Bine ai venit la limba franceză! Primul pas de la zero absolut este învățarea pronumelor personale subiect (persoanele: eu, tu, el, ea...).</p>\n<h4>1. Cele 8 Pronume Personale</h4>\n<ul>\n  <li><code>Je</code> [jœ] = Eu (devine <code>J'</code> în fața unei vocale: <em>J'habite</em>).</li>\n  <li><code>Tu</code> [ty] = Tu (folosit doar cu prietenii, familia, copiii).</li>\n  <li><code>Il</code> [il] = El.</li>\n  <li><code>Elle</code> [el] = Ea.</li>\n  <li><code>On</code> [õ] = Noi (în franceza vorbită de zi cu zi) sau „se” impersonal.</li>\n  <li><code>Nous</code> [nu] = Noi (în registrul formal/scris).</li>\n  <li><code>Vous</code> [vu] = Voi (plural) SAU Dumneavoastră (politețe singular și plural).</li>\n  <li><code>Ils</code> [il] = Ei (masculin sau grup mixt).</li>\n  <li><code>Elles</code> [el] = Ele (exclusiv feminin).</li>\n</ul>\n<h4>2. Regula de Aur: Subiectul este Obligatoriu</h4>\n<p>Spre deosebire de română sau spaniolă unde spunem simplu „Vorbesc”, în franceză este <strong>obligatoriu</strong> să pronunți subiectul: <em>Je parle</em>.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe, tu, il\n</code></pre>\n",
    "glossary": [
      {
        "term": "Je / J'",
        "def": "Pronumele persoanei I singular ('Eu'). Devine J' în fața vocalelor sau h mut."
      },
      {
        "term": "Tu vs Vous",
        "def": "'Tu' este informal (tutuit), 'Vous' exprimă politețea respectuoasă ('Dumneavoastră') sau pluralul."
      },
      {
        "term": "On",
        "def": "Pronume informal extrem de folosit în Franța ce înlocuiește 'Nous' (Noi) în conversații."
      },
      {
        "term": "Ils vs Elles",
        "def": "'Ils' pentru băieți sau grup mixt; 'Elles' exclusiv dacă toate persoanele sunt fete."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je / J'",
        "right": "Eu"
      },
      {
        "left": "Tu",
        "right": "Tu (informal)"
      },
      {
        "left": "Vous",
        "right": "Voi / Dumneavoastră (politețe)"
      },
      {
        "left": "Ils / Elles",
        "right": "Ei / Ele"
      }
    ],
    "quiz": {
      "question": "Cum i te adresezi respectuos unui necunoscut, unui profesor sau unui funcționar în limba franceză?",
      "options": [
        "Vous (pronumele de politețe echivalent cu 'Dumneavoastră')",
        "Tu",
        "On",
        "Il"
      ],
      "correctIndex": 0,
      "explanation": "'Vous' este forma obligatorie de respect și politețe (vouvoiement) când vorbești cu un adult necunoscut."
    },
    "task": "Scrie cele trei pronume de singular 'Je, tu, il' (eu, tu, el) separate prin virgulă.",
    "starterCode": "Je, tu, il",
    "expectedOutputPattern": "Je,\\s*tu,\\s*il\\.?",
    "hint": "Scrie Je, tu, il",
    "prompt": "Scrie cele trei pronume de singular 'Je, tu, il' (eu, tu, el) separate prin virgulă.",
    "officialSolution": "Je, tu, il",
    "example": "Je, tu, il",
    "regexPattern": "Je,\\s*tu,\\s*il\\.?"
  },
  {
    "id": "fr-a1-p2",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 25,
    "title": "Capitolul 2: Formule de Salut, Rămas Bun & Politețe (Bonjour, Merci, Au revoir)",
    "theory": "\n<p>Francezii pun un accent imens pe formulele de politețe. A intra într-un magazin fără a spune <em>Bonjour</em> este considerat o impolitețe gravă.</p>\n<h4>1. Saluturi Uzuale</h4>\n<ul>\n  <li><code>Bonjour</code> [bõjur] = Bună ziua / Bună dimineața (pe tot parcursul zilei).</li>\n  <li><code>Bonsoir</code> [bõswar] = Bună seara (după ora 18:00).</li>\n  <li><code>Salut</code> [saly] = Bună / Salut (informal, doar între prieteni; litera 't' finală este mută!).</li>\n  <li><code>Bonne nuit</code> [bon nwi] = Noapte bună (doar la culcare).</li>\n</ul>\n<h4>2. Politețe & Rămas Bun</h4>\n<ul>\n  <li><code>S'il vous plaît</code> [sil vu ple] = Vă rog / Te rog (formal).</li>\n  <li><code>Merci beaucoup</code> [mɛrsi boku] = Mulțumesc mult.</li>\n  <li><code>De rien</code> [də rjɛ̃] / <code>Je vous en prie</code> = Cu plăcere / Pentru nimic.</li>\n  <li><code>Au revoir</code> [o rəvwar] = La revedere.</li>\n  <li><code>À bientôt</code> [a bjɛ̃to] = Pe curând.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nBonjour, s'il vous plaît.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Bonjour",
        "def": "Formula universală de salut în timpul zilei ('Bună ziua')."
      },
      {
        "term": "S'il vous plaît",
        "def": "Expresie esențială de politețe ce înseamnă 'Vă rog' (abreviat SVP)."
      },
      {
        "term": "Merci beaucoup",
        "def": "'Mulțumesc foarte mult'."
      },
      {
        "term": "Au revoir",
        "def": "Formula clasică de despărțire ('La revedere')."
      }
    ],
    "matchingPairs": [
      {
        "left": "Bonjour",
        "right": "Bună ziua"
      },
      {
        "left": "Merci beaucoup",
        "right": "Mulțumesc mult"
      },
      {
        "left": "S'il vous plaît",
        "right": "Vă rog"
      },
      {
        "left": "Au revoir",
        "right": "La revedere"
      }
    ],
    "quiz": {
      "question": "Ce formulă de politețe este corectă pentru a spune 'Vă rog' unui chelner la restaurant în Franța?",
      "options": [
        "S'il vous plaît",
        "De rien",
        "Bonjour",
        "Salut"
      ],
      "correctIndex": 0,
      "explanation": "'S'il vous plaît' este expresia corectă și politicoasă pentru 'Vă rog'."
    },
    "task": "Scrie salutul de politețe complet 'Bonjour, s'il vous plaît.' (Bună ziua, vă rog).",
    "starterCode": "Bonjour, s'il vous plaît.",
    "expectedOutputPattern": "Bonjour,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
    "hint": "Scrie Bonjour, s'il vous plaît.",
    "prompt": "Scrie salutul de politețe complet 'Bonjour, s'il vous plaît.' (Bună ziua, vă rog).",
    "officialSolution": "Bonjour, s'il vous plaît.",
    "example": "Bonjour, s'il vous plaît.",
    "regexPattern": "Bonjour,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?"
  },
  {
    "id": "fr-a1-p3",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 3: Prezentarea Personală (Comment tu t'appelles? Je m'appelle...)",
    "theory": "\n<p>Când faci cunoștință cu cineva, folosești verbul reflexiv <strong>s'appeler</strong> (a se numi) și expresii de prezentare simple.</p>\n<h4>1. Cum te prezinți</h4>\n<ul>\n  <li><code>Comment tu t'appelles?</code> [komã ty tapɛl] = Cum te cheamă? (informal).</li>\n  <li><code>Comment vous vous appelez?</code> = Cum vă numiți? (formal/politicos).</li>\n  <li><code>Je m'appelle Andrei.</code> = Mă numesc Andrei.</li>\n  <li><code>Enchanté(e)!</code> [ãʃãte] = Încântat / Încântată de cunoștință!</li>\n</ul>\n<h4>2. Țara și Originea</h4>\n<ul>\n  <li><code>D'où viens-tu?</code> = De unde ești / vii?</li>\n  <li><code>Je viens de Roumanie.</code> = Vin din România.</li>\n  <li><code>Je suis roumain</code> (masculin) / <code>Je suis roumaine</code> (feminin) = Sunt român / româncă.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe m'appelle Dan et je suis roumain.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Je m'appelle...",
        "def": "Formula standard pentru 'Mă numesc...' / 'Numele meu este...'."
      },
      {
        "term": "Comment tu t'appelles?",
        "def": "Întrebare directă: 'Cum te cheamă?'."
      },
      {
        "term": "Enchanté / Enchantée",
        "def": "'Încântat(ă) de cunoștință' (se adaugă un 'e' suplimentar dacă vorbește o femeie)."
      },
      {
        "term": "Je suis roumain(e)",
        "def": "Exprimarea naționalității: 'Sunt român / româncă'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je m'appelle...",
        "right": "Mă numesc..."
      },
      {
        "left": "Comment tu t'appelles?",
        "right": "Cum te cheamă?"
      },
      {
        "left": "Enchanté!",
        "right": "Încântat de cunoștință!"
      },
      {
        "left": "Je suis roumain",
        "right": "Sunt român"
      }
    ],
    "quiz": {
      "question": "Ce răspunzi politicos imediat după ce o persoană ți se prezintă spunând 'Je m'appelle Pierre'?",
      "options": [
        "Enchanté! (Încântat de cunoștință)",
        "De rien!",
        "Au revoir!",
        "Pardon!"
      ],
      "correctIndex": 0,
      "explanation": "'Enchanté' este replica canonică de curtoazie la prezentarea unei persoane noi."
    },
    "task": "Scrie fraza completă de prezentare 'Je m'appelle Dan et je suis roumain.'.",
    "starterCode": "Je m'appelle ",
    "expectedOutputPattern": "Je\\s+m['’]appelle\\s+Dan\\s+et\\s+je\\s+suis\\s+roumain\\.?",
    "hint": "Scrie Je m'appelle Dan et je suis roumain.",
    "prompt": "Scrie fraza completă de prezentare 'Je m'appelle Dan et je suis roumain.'.",
    "officialSolution": "Je m'appelle Dan et je suis roumain.",
    "example": "Je m'appelle Dan et je suis roumain.",
    "regexPattern": "Je\\s+m['’]appelle\\s+Dan\\s+et\\s+je\\s+suis\\s+roumain\\.?"
  },
  {
    "id": "fr-a1-p4",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 4: Verbul Auxiliar „ÊTRE” (A FI) la Prezent",
    "theory": "\n<p>Verbul <strong>être</strong> (a fi) este cel mai important verb din limba franceză. Este complet neregulat și trebuie memorat la perfecție.</p>\n<h4>1. Conjugarea Completă la Prezent</h4>\n<ul>\n  <li><code>Je suis</code> [jə swi] = Eu sunt (<em>Je suis fatigué</em> = Sunt obosit).</li>\n  <li><code>Tu es</code> [ty ɛ] = Tu ești (<em>Tu es gentil</em> = Ești amabil).</li>\n  <li><code>Il / Elle / On est</code> [il ɛ] = El / Ea este (<em>Elle est professeure</em>).</li>\n  <li><code>Nous sommes</code> [nu sɔm] = Noi suntem (<em>Nous sommes ici</em> = Suntem aici).</li>\n  <li><code>Vous êtes</code> [vuz ɛt] = Voi sunteți / Dumneavoastră sunteți (atenție la legătura fonetică cu sunet [z]!).</li>\n  <li><code>Ils / Elles sont</code> [il sõ] = Ei / Ele sunt (<em>Ils sont contents</em>).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe suis prêt.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Être",
        "def": "Verbul 'a fi', utilizat pentru stări, profesii, naționalități și ca auxiliar de timp."
      },
      {
        "term": "Je suis",
        "def": "Forma de persoana I: 'Eu sunt'."
      },
      {
        "term": "Nous sommes",
        "def": "Forma de persoana I plural: 'Noi suntem'."
      },
      {
        "term": "Liaison la 'Vous êtes'",
        "def": "Pronunțarea literei s finale din 'vous' ca un sunet [z] legat de 'êtes' ([vuz-ɛt])."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je suis",
        "right": "Eu sunt"
      },
      {
        "left": "Tu es",
        "right": "Tu ești"
      },
      {
        "left": "Nous sommes",
        "right": "Noi suntem"
      },
      {
        "left": "Vous êtes",
        "right": "Voi sunteți / Dumneavoastră sunteți"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă a verbului 'être' pentru pronumele 'Nous' (Noi)?",
      "options": [
        "sommes (Nous sommes)",
        "êtes",
        "sont",
        "suis"
      ],
      "correctIndex": 0,
      "explanation": "Conjugarea regulată a verbului être la persoana I plural este 'Nous sommes'."
    },
    "task": "Scrie propoziția 'Je suis prêt.' (Sunt gata / pregătit).",
    "starterCode": "Je suis prêt.",
    "expectedOutputPattern": "Je\\s+suis\\s+pr[êe]t\\.?",
    "hint": "Scrie Je suis prêt.",
    "prompt": "Scrie propoziția 'Je suis prêt.' (Sunt gata / pregătit).",
    "officialSolution": "Je suis prêt.",
    "example": "Je suis prêt.",
    "regexPattern": "Je\\s+suis\\s+pr[êe]t\\.?"
  },
  {
    "id": "fr-a1-p5",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 5: Verbul Auxiliar „AVOIR” (A AVEA) la Prezent",
    "theory": "\n<p>Al doilea verb fundamental este <strong>avoir</strong> (a avea). Pe lângă posesie, în franceză se folosește pentru <strong>vârstă</strong> și pentru multe senzații fizice unde în română folosim „a fi”.</p>\n<h4>1. Conjugarea la Prezent</h4>\n<ul>\n  <li><code>J'ai</code> [je] = Eu am (<em>J'ai un ami</em> = Am un prieten).</li>\n  <li><code>Tu as</code> [ty a] = Tu ai.</li>\n  <li><code>Il / Elle / On a</code> [il a] = El / Ea are.</li>\n  <li><code>Nous avons</code> [nuz avõ] = Noi avem (cu liaison [z]).</li>\n  <li><code>Vous avez</code> [vuz ave] = Voi aveți / Dumneavoastră aveți.</li>\n  <li><code>Ils / Elles ont</code> [ilz õ] = Ei / Ele au (atenție: sunet [z] la legătură!).</li>\n</ul>\n<h4>2. Expresii Idiomatice cu Avoir</h4>\n<ul>\n  <li><em>J'ai 20 ans</em> = Am 20 de ani (NU spunem 'Je suis 20 ans').</li>\n  <li><em>J'ai faim</em> [fɛ̃] = Mi-e foame.</li>\n  <li><em>J'ai soif</em> [swaf] = Mi-e sete.</li>\n  <li><em>J'ai chaud / J'ai froid</em> = Mi-e cald / Mi-e frig.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJ'ai un livre et j'ai faim.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Avoir",
        "def": "Verbul 'a avea', folosit pentru posesie, vârstă și stări fiziologice."
      },
      {
        "term": "J'ai 25 ans",
        "def": "Exprimarea vârstei în franceză: folosește obligatoriu verbul avoir, nu être!"
      },
      {
        "term": "Avoir faim / soif",
        "def": "A-i fi foame / sete (literal: 'a avea foame')."
      },
      {
        "term": "Ils ont vs Ils sont",
        "def": "Ils ont se pronunță cu [z] ([il-zõ] = au); Ils sont se pronunță cu [s] ([il-sõ] = sunt)."
      }
    ],
    "matchingPairs": [
      {
        "left": "J'ai",
        "right": "Eu am"
      },
      {
        "left": "J'ai faim",
        "right": "Mi-e foame (am foame)"
      },
      {
        "left": "Nous avons",
        "right": "Noi avem"
      },
      {
        "left": "J'ai 25 ans",
        "right": "Am 25 de ani"
      }
    ],
    "quiz": {
      "question": "Cum spui corect 'Am 30 de ani' în limba franceză?",
      "options": [
        "J'ai 30 ans. (se folosește verbul avoir)",
        "Je suis 30 ans.",
        "Je fais 30 ans.",
        "Mon âge est 30."
      ],
      "correctIndex": 0,
      "explanation": "În limba franceză, vârsta se exprimă exclusiv cu verbul 'avoir' (J'ai ... ans)."
    },
    "task": "Scrie propoziția 'J'ai un livre et j'ai faim.' (Am o carte și mi-e foame).",
    "starterCode": "J'ai un ",
    "expectedOutputPattern": "J['’]ai\\s+un\\s+livre\\s+et\\s+j['’]ai\\s+faim\\.?",
    "hint": "Scrie J'ai un livre et j'ai faim.",
    "prompt": "Scrie propoziția 'J'ai un livre et j'ai faim.' (Am o carte și mi-e foame).",
    "officialSolution": "J'ai un livre et j'ai faim.",
    "example": "J'ai un livre et j'ai faim.",
    "regexPattern": "J['’]ai\\s+un\\s+livre\\s+et\\s+j['’]ai\\s+faim\\.?"
  },
  {
    "id": "fr-a1-p6",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 6: Numerele de la 0 la 20 (Les Nombres de 0 à 20)",
    "theory": "\n<p>Numărarea în franceză este esențială pentru ore, prețuri și numere de telefon. Iată primele 20 de numere:</p>\n<h4>1. De la 0 la 10</h4>\n<p><code>0: zéro</code>, <code>1: un</code>, <code>2: deux</code>, <code>3: trois</code>, <code>4: quatre</code>, <code>5: cinq</code>, <code>6: six</code>, <code>7: sept</code> (se pronunță [sɛt], p este mut!), <code>8: huit</code> [ɥit], <code>9: neuf</code>, <code>10: dix</code> [dis].</p>\n<h4>2. De la 11 la 20</h4>\n<p><code>11: onze</code>, <code>12: douze</code>, <code>13: treize</code>, <code>14: quatorze</code>, <code>15: quinze</code>, <code>16: seize</code>, <code>17: dix-sept</code>, <code>18: dix-huit</code>, <code>19: dix-neuf</code>, <code>20: vingt</code> [vɛ̃] (literele g și t sunt complet mute!).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nun, deux, trois\n</code></pre>\n",
    "glossary": [
      {
        "term": "un, deux, trois",
        "def": "Unu, doi, trei în limba franceză."
      },
      {
        "term": "sept [sɛt]",
        "def": "Cifra 7; litera 'p' nu se pronunță niciodată."
      },
      {
        "term": "vingt [vɛ̃]",
        "def": "Numărul 20; se pronunță nazal, fără 'g' sau 't' final."
      },
      {
        "term": "onze à seize",
        "def": "Numerele de la 11 la 16 care au terminația caracteristică '-ze'."
      }
    ],
    "matchingPairs": [
      {
        "left": "un, deux, trois",
        "right": "1, 2, 3"
      },
      {
        "left": "cinq, six, sept",
        "right": "5, 6, 7"
      },
      {
        "left": "huit, neuf, dix",
        "right": "8, 9, 10"
      },
      {
        "left": "quinze, vingt",
        "right": "15, 20"
      }
    ],
    "quiz": {
      "question": "Cum se scrie numărul 15 în limba franceză?",
      "options": [
        "quinze",
        "cincze",
        "seize",
        "quatorze"
      ],
      "correctIndex": 0,
      "explanation": "Numărul 15 se scrie 'quinze' [kɛ̃z]."
    },
    "task": "Scrie numerele 'un, deux, trois' separate prin virgulă și spațiu.",
    "starterCode": "un, deux, trois",
    "expectedOutputPattern": "un,\\s*deux,\\s*trois",
    "hint": "Scrie un, deux, trois",
    "prompt": "Scrie numerele 'un, deux, trois' separate prin virgulă și spațiu.",
    "officialSolution": "un, deux, trois",
    "example": "un, deux, trois",
    "regexPattern": "un,\\s*deux,\\s*trois"
  },
  {
    "id": "fr-a1-p7",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 7: Numerele de la 20 la 100 & Sistemul Vigesimal Francez",
    "theory": "\n<p>Numerele mari în franceză conțin o particularitate istorică fascinantă: sistemul de numărare în baze de 20 (sistem vigesimal de la celți).</p>\n<h4>1. Zecile Regulate</h4>\n<p><code>20: vingt</code>, <code>30: trente</code>, <code>40: quarante</code>, <code>50: cinquante</code>, <code>60: soixante</code>.</p>\n<p>Pentru 21, 31, 41, 51, 61 se adaugă 'et un': <em>vingt et un</em>, <em>trente et un</em>.</p>\n<h4>2. Zecile Speciale (70, 80, 90)</h4>\n<ul>\n  <li><code>70: soixante-dix</code> (literalmente: 60 + 10). 71 este <em>soixante et onze</em> (60 + 11).</li>\n  <li><code>80: quatre-vingts</code> (literalmente: 4 de 20, adică 4 × 20).</li>\n  <li><code>90: quatre-vingt-dix</code> (literalmente: 4 × 20 + 10). 95 este <em>quatre-vingt-quinze</em> (4 × 20 + 15).</li>\n  <li><code>100: cent</code> [sã].</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\ncent\n</code></pre>\n",
    "glossary": [
      {
        "term": "soixante-dix (70)",
        "def": "Compus din 60 (soixante) + 10 (dix)."
      },
      {
        "term": "quatre-vingts (80)",
        "def": "Compus din 4 × 20 (patru douăzeci)."
      },
      {
        "term": "quatre-vingt-dix (90)",
        "def": "Compus din 4 × 20 + 10."
      },
      {
        "term": "cent (100)",
        "def": "Numărul o sută în limba franceză."
      }
    ],
    "matchingPairs": [
      {
        "left": "trente",
        "right": "30"
      },
      {
        "left": "cinquante",
        "right": "50"
      },
      {
        "left": "soixante-dix",
        "right": "70 (60 + 10)"
      },
      {
        "left": "quatre-vingts",
        "right": "80 (4 x 20)"
      }
    ],
    "quiz": {
      "question": "Cum se spune numărul 80 în limba franceză standard?",
      "options": [
        "quatre-vingts (literal: patru de douăzeci)",
        "octante",
        "huitante",
        "dix-huit"
      ],
      "correctIndex": 0,
      "explanation": "În franceza din Franța, 80 se calculează ca 4 × 20: 'quatre-vingts'."
    },
    "task": "Scrie numărul 100 în limba franceză: 'cent'.",
    "starterCode": "cent",
    "expectedOutputPattern": "cent",
    "hint": "Scrie cent",
    "prompt": "Scrie numărul 100 în limba franceză: 'cent'.",
    "officialSolution": "cent",
    "example": "cent",
    "regexPattern": "cent"
  },
  {
    "id": "fr-a1-p8",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 8: Zilele Săptămânii, Lunile Anului & Anotimpurile",
    "theory": "\n<p>Toate zilele săptămânii și toate anotimpurile sunt de genul <strong>masculin</strong> în limba franceză și se scriu cu <strong>literă mică</strong>.</p>\n<h4>1. Zilele Săptămânii (Les Jours de la Semaine)</h4>\n<p><code>lundi</code> (luni), <code>mardi</code> (marți), <code>mercredi</code> (miercuri), <code>jeudi</code> (joi), <code>vendredi</code> (vineri), <code>samedi</code> (sâmbătă), <code>dimanche</code> (duminică).</p>\n<h4>2. Lunile Anului (Les Mois)</h4>\n<p><em>janvier, février, mars, avril, mai, juin, juillet, août [ut], septembre, octobre, novembre, décembre</em>.</p>\n<h4>3. Anotimpurile (Les Saisons)</h4>\n<p><code>le printemps</code> (primăvara), <code>l'été</code> (vara), <code>l'automne</code> (toamna), <code>l'hiver</code> (iarna).</p>\n<p>Spunem: <em>au printemps</em> (primăvara), dar <em>en été, en automne, en hiver</em> (în fața vocalelor).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nAujourd'hui c'est lundi.\n</code></pre>\n",
    "glossary": [
      {
        "term": "lundi, mardi...",
        "def": "Zilele săptămânii se scriu cu literă mică în franceză."
      },
      {
        "term": "le week-end",
        "def": "Sfârșitul de săptămână (sâmbătă și duminică)."
      },
      {
        "term": "en été / en hiver",
        "def": "Prepoziția 'en' folosită pentru anotimpurile care încep cu vocală."
      },
      {
        "term": "aujourd'hui",
        "def": "Cuvântul pentru 'astăzi' în limba franceză."
      }
    ],
    "matchingPairs": [
      {
        "left": "lundi",
        "right": "Luni"
      },
      {
        "left": "vendredi",
        "right": "Vineri"
      },
      {
        "left": "samedi et dimanche",
        "right": "Sâmbătă și duminică (weekend)"
      },
      {
        "left": "l'été et l'hiver",
        "right": "Vara și iarna"
      }
    ],
    "quiz": {
      "question": "Cum se spune 'Vineri' în limba franceză?",
      "options": [
        "vendredi",
        "mardi",
        "jeudi",
        "samedi"
      ],
      "correctIndex": 0,
      "explanation": "Ziua de vineri este 'vendredi'."
    },
    "task": "Scrie propoziția 'Aujourd'hui c'est lundi.' (Astăzi este luni).",
    "starterCode": "Aujourd'hui c'est ",
    "expectedOutputPattern": "Aujourd['’]hui\\s+c['’]est\\s+lundi\\.?",
    "hint": "Scrie Aujourd'hui c'est lundi.",
    "prompt": "Scrie propoziția 'Aujourd'hui c'est lundi.' (Astăzi este luni).",
    "officialSolution": "Aujourd'hui c'est lundi.",
    "example": "Aujourd'hui c'est lundi.",
    "regexPattern": "Aujourd['’]hui\\s+c['’]est\\s+lundi\\.?"
  },
  {
    "id": "fr-a1-p9",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 9: Cât este ceasul? Exprimarea Timpului (L'Heure)",
    "theory": "\n<p>Pentru a întreba cât este ceasul, spunem: <strong>« Quelle heure est-il? »</strong>. Răspunsul începe întotdeauna cu structura impersonală <strong>« Il est... »</strong>.</p>\n<h4>1. Ore Fixe</h4>\n<ul>\n  <li><em>Il est une heure</em> = Este ora 1.</li>\n  <li><em>Il est deux heures</em> = Este ora 2 (adăugăm 's' la heures).</li>\n  <li><em>Il est midi</em> = Este ora 12:00 la prânz.</li>\n  <li><em>Il est minuit</em> = Este ora 12:00 noaptea (miezul nopții).</li>\n</ul>\n<h4>2. Minute, Jumătăți și Sferturi</h4>\n<ul>\n  <li><em>et quart</em> = și un sfert (ex: <em>Il est trois heures et quart</em> = 3:15).</li>\n  <li><em>et demie</em> = și jumătate (ex: <em>Il est quatre heures et demie</em> = 4:30).</li>\n  <li><em>moins le quart</em> = fără un sfert (ex: <em>Il est cinq heures moins le quart</em> = 4:45).</li>\n  <li><em>moins dix</em> = fără 10 minute (ex: <em>cinq heures moins dix</em> = 4:50).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nIl est midi et quart.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Quelle heure est-il?",
        "def": "Întrebarea standard: 'Cât este ceasul?'."
      },
      {
        "term": "Il est midi / minuit",
        "def": "Ora 12 ziua (midi) / ora 12 noaptea (minuit)."
      },
      {
        "term": "et demie",
        "def": "Și jumătate (ex: 2:30 = deux heures et demie)."
      },
      {
        "term": "moins le quart",
        "def": "Fără un sfert (ex: 5:45 = six heures moins le quart)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Quelle heure est-il?",
        "right": "Cât este ceasul?"
      },
      {
        "left": "Il est midi",
        "right": "Este ora 12:00 la prânz"
      },
      {
        "left": "cinq heures et quart",
        "right": "5 și un sfert (5:15)"
      },
      {
        "left": "six heures et demie",
        "right": "6 și jumătate (6:30)"
      }
    ],
    "quiz": {
      "question": "Cum traduci în franceză 'Este ora 8 și jumătate' (8:30)?",
      "options": [
        "Il est huit heures et demie.",
        "Il est huit heures et quart.",
        "Il est huit heures moins le quart.",
        "Il est midi."
      ],
      "correctIndex": 0,
      "explanation": "'Et demie' înseamnă și jumătate; deci 'Il est huit heures et demie'."
    },
    "task": "Scrie propoziția 'Il est midi et quart.' (Este ora 12 și un sfert).",
    "starterCode": "Il est ",
    "expectedOutputPattern": "Il\\s+est\\s+midi\\s+et\\s+quart\\.?",
    "hint": "Scrie Il est midi et quart.",
    "prompt": "Scrie propoziția 'Il est midi et quart.' (Este ora 12 și un sfert).",
    "officialSolution": "Il est midi et quart.",
    "example": "Il est midi et quart.",
    "regexPattern": "Il\\s+est\\s+midi\\s+et\\s+quart\\.?"
  },
  {
    "id": "fr-a1-p10",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 10: Articolele Hotărâte & Nehotărâte (Le, La, L', Les / Un, Une, Des)",
    "theory": "\n<p>În franceză, fiecare substantiv are un gen (masculin sau feminin) și este însoțit aproape întotdeauna de un articol.</p>\n<h4>1. Articole Nehotărâte (Un, O, Niște)</h4>\n<ul>\n  <li><code>un</code> = masculin singular (<em>un livre</em> = o carte, <em>un garçon</em> = un băiat).</li>\n  <li><code>une</code> = feminin singular (<em>une table</em> = o masă, <em>une fille</em> = o fată).</li>\n  <li><code>des</code> = plural nedeterminat (<em>des livres</em> = niște cărți).</li>\n</ul>\n<h4>2. Articole Hotărâte (Cel, Cea, -ul, -a)</h4>\n<ul>\n  <li><code>le</code> = masculin singular (<em>le café</em> = cafeaua).</li>\n  <li><code>la</code> = feminin singular (<em>la maison</em> = casa).</li>\n  <li><code>l'</code> = masculin sau feminin înainte de vocală sau h mut (<em>l'ami</em>, <em>l'hôtel</em>).</li>\n  <li><code>les</code> = plural pentru ambele genuri (<em>les amis</em> = prietenii).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nle garçon et la fille\n</code></pre>\n",
    "glossary": [
      {
        "term": "un / une / des",
        "def": "Articole nehotărâte: un (masc.), une (fem.), des (plural)."
      },
      {
        "term": "le / la / les",
        "def": "Articole hotărâte: le (masc.), la (fem.), les (plural)."
      },
      {
        "term": "l' (Élision)",
        "def": "Forma redusă pentru le/la în fața cuvintelor care încep cu vocală (l'école)."
      },
      {
        "term": "Pluralul regulat (-s)",
        "def": "Majoritatea substantivelor formează pluralul adăugând un -s mut la final."
      }
    ],
    "matchingPairs": [
      {
        "left": "un livre / le livre",
        "right": "o carte / cartea (masculin)"
      },
      {
        "left": "une maison / la maison",
        "right": "o casă / casa (feminin)"
      },
      {
        "left": "l'ami / les amis",
        "right": "prietenul / prietenii (eliziune)"
      },
      {
        "left": "des étudiants",
        "right": "niște studenți (plural nehotărât)"
      }
    ],
    "quiz": {
      "question": "Ce articol hotărât este corect în fața cuvântului feminin 'école' (școală)?",
      "options": [
        "l' (l'école, datorită vocalei 'é')",
        "la école",
        "le école",
        "une école"
      ],
      "correctIndex": 0,
      "explanation": "Când un cuvânt feminin începe cu o vocală, 'la' devine 'l'' prin eliziune: 'l'école'."
    },
    "task": "Scrie perechea articol hotărât + substantiv: 'le garçon et la fille' (băiatul și fata).",
    "starterCode": "le garçon et la fille",
    "expectedOutputPattern": "le\\s+gar[çc]on\\s+et\\s+la\\s+fille\\.?",
    "hint": "Scrie le garçon et la fille",
    "prompt": "Scrie perechea articol hotărât + substantiv: 'le garçon et la fille' (băiatul și fata).",
    "officialSolution": "le garçon et la fille",
    "example": "le garçon et la fille",
    "regexPattern": "le\\s+gar[çc]on\\s+et\\s+la\\s+fille\\.?"
  },
  {
    "id": "fr-a1-p11",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 11: Cum Spunem „NU”: Negația (Ne ... Pas)",
    "theory": "\n<p>În limba franceză, negația standard este formată din <strong>două părți</strong> care îmbrățișează verbul ca un sandviș: <strong>NE + verb + PAS</strong>.</p>\n<h4>1. Structura de Bază</h4>\n<ul>\n  <li><em>Je parle</em> (Vorbesc) $\rightarrow$ <em>Je <strong>ne</strong> parle <strong>pas</strong></em> (Nu vorbesc).</li>\n  <li><em>Il comprend</em> (El înțelege) $\rightarrow$ <em>Il <strong>ne</strong> comprend <strong>pas</strong></em> (El nu înțelege).</li>\n</ul>\n<h4>2. Eliziunea 'N'' în fața Vocalelor</h4>\n<p>Dacă verbul începe cu o vocală sau un 'h' mut, <code>ne</code> devine obligatoriu <code>n'</code>:</p>\n<ul>\n  <li><em>J'aime</em> $\rightarrow$ <em>Je <strong>n'</strong>aime <strong>pas</strong></em>.</li>\n  <li><em>Il est prêt</em> $\rightarrow$ <em>Il <strong>n'</strong>est <strong>pas</strong> prêt</em>.</li>\n  <li><em>J'ai faim</em> $\rightarrow$ <em>Je <strong>n'</strong>ai <strong>pas</strong> faim</em>.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe ne parle pas français.\n</code></pre>\n",
    "glossary": [
      {
        "term": "ne ... pas",
        "def": "Negația franceză dublă ce încadrează verbul conjugat."
      },
      {
        "term": "n' ... pas",
        "def": "Forma elidată când verbul începe cu vocală sau h mut (ex: n'est pas)."
      },
      {
        "term": "Omiterea lui 'ne' în vorbire",
        "def": "În conversația rapidă informală, francezii omit des 'ne' spunând doar 'J'sais pas'."
      },
      {
        "term": "Negație la Passé Composé",
        "def": "Încadrează doar auxiliarul: 'Je n'ai pas mangé'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je ne sais pas",
        "right": "Nu știu"
      },
      {
        "left": "Je ne parle pas anglais",
        "right": "Nu vorbesc engleză"
      },
      {
        "left": "Il n'est pas ici",
        "right": "El nu este aici (cu n')"
      },
      {
        "left": "Je n'ai pas le temps",
        "right": "Nu am timp"
      }
    ],
    "quiz": {
      "question": "Care este forma negativă corectă a propoziției 'Je comprends' (Înțeleg)?",
      "options": [
        "Je ne comprends pas.",
        "Je pas comprends.",
        "Je non comprends.",
        "Je ne comprends."
      ],
      "correctIndex": 0,
      "explanation": "Formula obligatorie este 'ne' în fața verbului și 'pas' imediat după acesta: 'Je ne comprends pas'."
    },
    "task": "Scrie propoziția negativă 'Je ne parle pas français.' (Nu vorbesc franceză).",
    "starterCode": "Je ne ",
    "expectedOutputPattern": "Je\\s+ne\\s+parle\\s+pas\\s+fran[çc]ais\\.?",
    "hint": "Scrie Je ne parle pas français.",
    "prompt": "Scrie propoziția negativă 'Je ne parle pas français.' (Nu vorbesc franceză).",
    "officialSolution": "Je ne parle pas français.",
    "example": "Je ne parle pas français.",
    "regexPattern": "Je\\s+ne\\s+parle\\s+pas\\s+fran[çc]ais\\.?"
  },
  {
    "id": "fr-a1-p12",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 12: Cuvinte Interogative (Qui, Que, Où, Quand, Comment, Pourquoi)",
    "theory": "\n<p>Pentru a pune întrebări de la zero, ai nevoie de cele 7 cuvinte interogative esențiale:</p>\n<h4>1. Pronumele și Adverbele de Întrebare</h4>\n<ul>\n  <li><code>Qui?</code> [ki] = Cine? (<em>Qui est là?</em> = Cine este acolo?).</li>\n  <li><code>Que / Qu'est-ce que?</code> = Ce? (<em>Qu'est-ce que tu fais?</em> = Ce faci?).</li>\n  <li><code>Où?</code> [u] = Unde? (<em>Où habitez-vous?</em> = Unde locuiți?).</li>\n  <li><code>Quand?</code> [kã] = Când? (<em>Quand part le train?</em> = Când pleacă trenul?).</li>\n  <li><code>Comment?</code> [kɔmã] = Cum? (<em>Comment ça va?</em> = Cum merge / Ce mai faci?).</li>\n  <li><code>Combien?</code> [kõbjɛ̃] = Cât / Câți? (<em>Combien ça coûte?</em> = Cât costă asta?).</li>\n  <li><code>Pourquoi?</code> [purkwa] = De ce? Răspunsul începe cu <code>Parce que</code> (Pentru că).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nOù sont les toilettes, s'il vous plaît?\n</code></pre>\n",
    "glossary": [
      {
        "term": "Où",
        "def": "Unde (atenție la accentul grav 'ù' ce îl diferențiază de 'ou' = sau)."
      },
      {
        "term": "Qu'est-ce que...",
        "def": "Structură foarte folosită pentru a întreba 'Ce...' fără inversiune."
      },
      {
        "term": "Pourquoi / Parce que",
        "def": "Perechea 'De ce?' / 'Pentru că...' în limba franceză."
      },
      {
        "term": "Comment ça va?",
        "def": "Formula informală celebră: 'Ce mai faci?' / 'Cum merge?'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Où habites-tu?",
        "right": "Unde locuiești?"
      },
      {
        "left": "Combien ça coûte?",
        "right": "Cât costă asta?"
      },
      {
        "left": "Comment ça va?",
        "right": "Cum merge / Ce mai faci?"
      },
      {
        "left": "Pourquoi? - Parce que...",
        "right": "De ce? - Pentru că..."
      }
    ],
    "quiz": {
      "question": "Ce cuvânt interogativ folosești pentru a întreba 'Unde este gara?'?",
      "options": [
        "Où (Où est la gare?)",
        "Quand",
        "Qui",
        "Pourquoi"
      ],
      "correctIndex": 0,
      "explanation": "'Où' înseamnă 'Unde' în limba franceză."
    },
    "task": "Întreabă unde este toaleta: 'Où sont les toilettes, s'il vous plaît?'.",
    "starterCode": "Où sont ",
    "expectedOutputPattern": "O[ùu]\\s+sont\\s+les\\s+toilettes,\\s*s['’]il\\s+vous\\s+pla[iî]t\\??",
    "hint": "Scrie Où sont les toilettes, s'il vous plaît?",
    "prompt": "Întreabă unde este toaleta: 'Où sont les toilettes, s'il vous plaît?'.",
    "officialSolution": "Où sont les toilettes, s'il vous plaît?",
    "example": "Où sont les toilettes, s'il vous plaît?",
    "regexPattern": "O[ùu]\\s+sont\\s+les\\s+toilettes,\\s*s['’]il\\s+vous\\s+pla[iî]t\\??"
  },
  {
    "id": "fr-a1-p13",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 13: Culori, Adjective & Acordul de Gen și Număr",
    "theory": "\n<p>În franceză, adjectivele <strong>se acordă în gen (masculin/feminin) și număr (singular/plural)</strong> cu substantivul pe care îl descriu.</p>\n<h4>1. Regula Generală</h4>\n<ul>\n  <li>Pentru feminin: adaugă un <code>-e</code> la forma de masculin (<em>petit $\rightarrow$ petite</em>, <em>grand $\rightarrow$ grande</em>).</li>\n  <li>Pentru plural: adaugă un <code>-s</code> la ambele genuri (<em>petits / petites</em>).</li>\n</ul>\n<h4>2. Culorile de Bază</h4>\n<ul>\n  <li><em>blanc / blanche</em> (alb / albă), <em>noir / noire</em> (negru / neagră).</li>\n  <li><em>bleu / bleue</em> (albastru / albastră), <em>vert / verte</em> (verde).</li>\n  <li><em>rouge</em> (roșu - deja se termină în -e, rămâne la fel la feminin!).</li>\n  <li><em>jaune</em> (galben), <em>orange</em> și <em>marron</em> (sunt invariabile!).</li>\n</ul>\n<h4>3. Poziția Adjectivului</h4>\n<p>Majoritatea adjectivelor stau <strong>după substantiv</strong> (<em>un livre rouge</em>), cu excepția celor scurte de frumusețe, vârstă, bunătate și mărime (BAGS: <em>un beau garçon</em>, <em>une grande maison</em>).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nune maison blanche et une grande porte\n</code></pre>\n",
    "glossary": [
      {
        "term": "Accord des adjectifs",
        "def": "Regula prin care adjectivul primește -e la feminin și -s la plural."
      },
      {
        "term": "Poziție după substantiv",
        "def": "Culorile și majoritatea adjectivelor stau DUPĂ substantiv (une voiture blanche)."
      },
      {
        "term": "Invariable",
        "def": "Adjective de culoare care nu își schimbă niciodată forma (marron, orange)."
      },
      {
        "term": "blanc / blanche",
        "def": "Schimbare neregulată de feminin cu adăugarea lui 'he'."
      }
    ],
    "matchingPairs": [
      {
        "left": "un chat noir",
        "right": "o pisică neagră (motan negru - masc.)"
      },
      {
        "left": "une voiture noire",
        "right": "o mașină neagră (feminin cu -e)"
      },
      {
        "left": "des maisons blanches",
        "right": "case albe (feminin plural cu -es)"
      },
      {
        "left": "un grand appartement",
        "right": "un apartament mare (adjectiv plasat înainte)"
      }
    ],
    "quiz": {
      "question": "Cum se acordă adjectivul 'vert' (verde) pentru substantivul feminin plural 'les pommes' (merele)?",
      "options": [
        "vertes (feminin plural: primește -e și -s)",
        "verts",
        "verte",
        "vert"
      ],
      "correctIndex": 0,
      "explanation": "'Pomme' este feminin, iar 'les pommes' este la plural; așadar adăugăm '-es': 'les pommes vertes'."
    },
    "task": "Scrie sintagma 'une maison blanche et une grande porte' (o casă albă și o ușă mare).",
    "starterCode": "une maison ",
    "expectedOutputPattern": "une\\s+maison\\s+blanche\\s+et\\s+une\\s+grande\\s+porte\\.?",
    "hint": "Scrie une maison blanche et une grande porte",
    "prompt": "Scrie sintagma 'une maison blanche et une grande porte' (o casă albă și o ușă mare).",
    "officialSolution": "une maison blanche et une grande porte",
    "example": "une maison blanche et une grande porte",
    "regexPattern": "une\\s+maison\\s+blanche\\s+et\\s+une\\s+grande\\s+porte\\.?"
  },
  {
    "id": "fr-a1-p14",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 14: Familia & Arborele Genealogic (La Famille)",
    "theory": "\n<p>Să învățăm membrii familiei în limba franceză alături de articolele corespunzătoare:</p>\n<h4>1. Familia Directă</h4>\n<ul>\n  <li><code>le père</code> [pɛr] = tatăl / <code>papa</code> = tati.</li>\n  <li><code>la mère</code> [mɛr] = mama / <code>maman</code> = mami.</li>\n  <li><code>les parents</code> [parã] = părinții (atenție: nu înseamnă 'rude', ci strict 'părinți'!).</li>\n  <li><code>le fils</code> [fis] = fiul (litera l este mută, s se pronunță!).</li>\n  <li><code>la fille</code> [fij] = fiica (sau fata).</li>\n  <li><code>le frère</code> [frɛr] = fratele.</li>\n  <li><code>la sœur</code> [sœr] = sora.</li>\n</ul>\n<h4>2. Rude Extinse</h4>\n<p><code>les grands-parents</code> (bunicii), <code>le grand-père</code> (bunicul), <code>la grand-mère</code> (bunica), <code>l'oncle</code> (unchiul), <code>la tante</code> (mătușa), <code>le cousin / la cousine</code> (vărul / verișoara).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nMon père, ma mère et mon frère.\n</code></pre>\n",
    "glossary": [
      {
        "term": "les parents",
        "def": "Părinții (tatăl și mama); este un 'faux ami' (nu înseamnă toate rudele)."
      },
      {
        "term": "le frère / la sœur",
        "def": "Fratele / sora în limba franceză."
      },
      {
        "term": "le fils [fis]",
        "def": "Fiul; pronunția este specială: l nu se aude, s se aude clar."
      },
      {
        "term": "la grand-mère",
        "def": "Bunica (se leagă cu cratimă)."
      }
    ],
    "matchingPairs": [
      {
        "left": "le père et la mère",
        "right": "Tatăl și mama"
      },
      {
        "left": "le frère et la sœur",
        "right": "Fratele și sora"
      },
      {
        "left": "le grand-père",
        "right": "Bunicul"
      },
      {
        "left": "mon cousin",
        "right": "Vărul meu"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă cuvântul francez 'les parents'?",
      "options": [
        "Părinții (tatăl și mama)",
        "Toate rudele îndepărtate",
        "Bunicii",
        "Copiii"
      ],
      "correctIndex": 0,
      "explanation": "'Les parents' înseamnă strict părinții (mama și tata). Pentru rude în general se folosește cuvântul 'les proches' sau 'la famille'."
    },
    "task": "Scrie propoziția 'Mon père, ma mère et mon frère.' (Tatăl meu, mama mea și fratele meu).",
    "starterCode": "Mon père, ",
    "expectedOutputPattern": "Mon\\s+p[èe]re,\\s*ma\\s+m[èe]re\\s+et\\s+mon\\s+fr[èe]re\\.?",
    "hint": "Scrie Mon père, ma mère et mon frère.",
    "prompt": "Scrie propoziția 'Mon père, ma mère et mon frère.' (Tatăl meu, mama mea și fratele meu).",
    "officialSolution": "Mon père, ma mère et mon frère.",
    "example": "Mon père, ma mère et mon frère.",
    "regexPattern": "Mon\\s+p[èe]re,\\s*ma\\s+m[èe]re\\s+et\\s+mon\\s+fr[èe]re\\.?"
  },
  {
    "id": "fr-a1-p15",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 15: Adjectivele Posesive (Mon, Ma, Mes / Ton, Ta, Tes / Son, Sa, Ses)",
    "theory": "\n<p>În franceză, adjectivul posesiv <strong>se acordă cu obiectul posedat</strong> (cu ce ai), NU cu persoana care îl deține!</p>\n<h4>1. Tabelul Posesivelor</h4>\n<table>\n  <tr><th>Posesor</th><th>Masc. Sg.</th><th>Fem. Sg.</th><th>Plural (Masc & Fem)</th></tr>\n  <tr><td>Eu (Je)</td><td><code>mon</code></td><td><code>ma</code></td><td><code>mes</code></td></tr>\n  <tr><td>Tu (Tu)</td><td><code>ton</code></td><td><code>ta</code></td><td><code>tes</code></td></tr>\n  <tr><td>El/Ea (Il/Elle)</td><td><code>son</code></td><td><code>sa</code></td><td><code>ses</code></td></tr>\n  <tr><td>Noi (Nous)</td><td><code>notre</code></td><td><code>notre</code></td><td><code>nos</code></td></tr>\n  <tr><td>Voi/Dvs (Vous)</td><td><code>votre</code></td><td><code>votre</code></td><td><code>vos</code></td></tr>\n  <tr><td>Ei/Ele (Ils/Elles)</td><td><code>leur</code></td><td><code>leur</code></td><td><code>leurs</code></td></tr>\n</table>\n<h4>2. Regula Secretă: 'Mon' în loc de 'Ma'</h4>\n<p>Dacă un cuvânt feminin începe cu o vocală, se folosește <code>mon</code> în loc de <code>ma</code> pentru a evita ciocnirea a două vocale: <em><strong>mon</strong> amie</em> (prietena mea), NU <em>ma amie</em>!</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nmon passeport et mes bagages\n</code></pre>\n",
    "glossary": [
      {
        "term": "mon, ton, son",
        "def": "Posesive masculine: al meu, al tău, al său."
      },
      {
        "term": "ma, ta, sa",
        "def": "Posesive feminine: a mea, a ta, a sa."
      },
      {
        "term": "mes, tes, ses",
        "def": "Posesive de plural pentru ambele genuri."
      },
      {
        "term": "mon amie",
        "def": "Excepție eufonică: folosirea lui 'mon' în fața unui cuvânt feminin ce începe cu vocală."
      }
    ],
    "matchingPairs": [
      {
        "left": "mon livre / ma maison",
        "right": "cartea mea / casa mea"
      },
      {
        "left": "mes amis",
        "right": "prietenii mei"
      },
      {
        "left": "notre projet / nos projets",
        "right": "proiectul nostru / proiectele noastre"
      },
      {
        "left": "mon amie (feminin)",
        "right": "prietena mea (cu mon pentru eufonie)"
      }
    ],
    "quiz": {
      "question": "De ce spunem 'mon amie' (prietena mea) dacă 'amie' este un substantiv de genul feminin?",
      "options": [
        "Pentru a evita cacofonia și ciocnirea a două vocale (ma amie ar suna sacadat).",
        "'Amie' este de fapt de genul masculin.",
        "Forma 'ma' a fost ștearsă din dicționar.",
        "Se folosește doar când vorbește un băiat."
      ],
      "correctIndex": 0,
      "explanation": "În fața oricărui substantiv feminin care începe cu vocală sau h mut, ma/ta/sa devin obligatoriu mon/ton/son pentru fluiditate fonetică."
    },
    "task": "Scrie sintagma 'mon passeport et mes bagages' (pașaportul meu și bagajele mele).",
    "starterCode": "mon passeport et mes bagages",
    "expectedOutputPattern": "mon\\s+passeport\\s+et\\s+mes\\s+bagages\\.?",
    "hint": "Scrie mon passeport et mes bagages",
    "prompt": "Scrie sintagma 'mon passeport et mes bagages' (pașaportul meu și bagajele mele).",
    "officialSolution": "mon passeport et mes bagages",
    "example": "mon passeport et mes bagages",
    "regexPattern": "mon\\s+passeport\\s+et\\s+mes\\s+bagages\\.?"
  },
  {
    "id": "fr-a1-p16",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 16: Corpul Uman & Cum Exprimăm Durerea (J'ai mal à...)",
    "theory": "\n<p>Când mergi la medic sau la farmacie în Franța, trebuie să știi să indici unde te doare.</p>\n<h4>1. Părțile Corpului (Le Corps Humain)</h4>\n<ul>\n  <li><code>la tête</code> (capul), <code>le ventre</code> (burta/stomacul), <code>le dos</code> (spatele).</li>\n  <li><code>la gorge</code> (gâtul), <code>les yeux</code> (ochii), <code>les dents</code> (dinții).</li>\n  <li><code>le bras</code> (brațul), <code>la jambe</code> (piciorul).</li>\n</ul>\n<h4>2. Structura: AVOIR MAL À...</h4>\n<p>Prepoziția <code>à</code> se contractă cu articolul hotărât:</p>\n<ul>\n  <li>à + le = <strong>au</strong>: <em>J'ai mal <strong>au</strong> ventre / au dos</em> (Mă doare burta / spatele).</li>\n  <li>à + la = <strong>à la</strong>: <em>J'ai mal <strong>à la</strong> tête / à la gorge</em> (Mă doare capul / gâtul).</li>\n  <li>à + l' = <strong>à l'</strong>: <em>J'ai mal <strong>à l'</strong>oreille</em> (Mă doare urechea).</li>\n  <li>à + les = <strong>aux</strong>: <em>J'ai mal <strong>aux</strong> dents / aux yeux</em> (Mă dor dinții / ochii).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJ'ai mal à la tête et j'ai de la fièvre.\n</code></pre>\n",
    "glossary": [
      {
        "term": "J'ai mal à la tête",
        "def": "'Mă doare capul' (literal: am durere la cap)."
      },
      {
        "term": "J'ai mal au ventre",
        "def": "'Mă doare burta' (contractat: à + le = au)."
      },
      {
        "term": "J'ai mal aux dents",
        "def": "'Mă dor dinții' (contractat: à + les = aux)."
      },
      {
        "term": "le dos",
        "def": "Spatele (litera 's' este mută)."
      }
    ],
    "matchingPairs": [
      {
        "left": "J'ai mal à la tête",
        "right": "Mă doare capul"
      },
      {
        "left": "J'ai mal au ventre",
        "right": "Mă doare burta (au = à + le)"
      },
      {
        "left": "J'ai mal aux yeux",
        "right": "Mă dor ochii (aux = à + les)"
      },
      {
        "left": "J'ai de la fièvre",
        "right": "Am febră"
      }
    ],
    "quiz": {
      "question": "Cum spui corect 'Mă doare stomacul' dacă 'ventre' este un substantiv masculin?",
      "options": [
        "J'ai mal au ventre. (à + le = au)",
        "J'ai mal à la ventre.",
        "J'ai mal à le ventre.",
        "Je suis mal ventre."
      ],
      "correctIndex": 0,
      "explanation": "Prepoziția 'à' fuzionată cu articolul masculin 'le' formează obligatoriu articolul contractat 'au': 'J'ai mal au ventre'."
    },
    "task": "Scrie fraza medicală 'J'ai mal à la tête et j'ai de la fièvre.' (Mă doare capul și am febră).",
    "starterCode": "J'ai mal à ",
    "expectedOutputPattern": "J['’]ai\\s+mal\\s+[àa]\\s+la\\s+t[êe]te\\s+et\\s+j['’]ai\\s+de\\s+la\\s+fi[èe]vre\\.?",
    "hint": "Scrie J'ai mal à la tête et j'ai de la fièvre.",
    "prompt": "Scrie fraza medicală 'J'ai mal à la tête et j'ai de la fièvre.' (Mă doare capul și am febră).",
    "officialSolution": "J'ai mal à la tête et j'ai de la fièvre.",
    "example": "J'ai mal à la tête et j'ai de la fièvre.",
    "regexPattern": "J['’]ai\\s+mal\\s+[àa]\\s+la\\s+t[êe]te\\s+et\\s+j['’]ai\\s+de\\s+la\\s+fi[èe]vre\\.?"
  },
  {
    "id": "fr-a1-p17",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 17: Mâncarea, Băuturile & La Restaurant (Comanda & Nota)",
    "theory": "\n<p>Mâncarea este o artă în cultura franceză. Iată cum comanzi ca un localnic într-o braserie pariziană:</p>\n<h4>1. Mesele Zilei & Alimente Esențiale</h4>\n<ul>\n  <li><code>le petit-déjeuner</code> = micul dejun.</li>\n  <li><code>le déjeuner</code> = prânzul.</li>\n  <li><code>le dîner</code> = cina.</li>\n  <li><em>le poulet</em> (puiul), <em>la viande</em> (carnea), <em>le poisson</em> (peștele), <em>les légumes</em> (legumele), <em>le fromage</em> (brânza).</li>\n</ul>\n<h4>2. Cum Comanzi Politicos</h4>\n<p>Nu spune niciodată « Je veux » (Vreau - sună agresiv!). Folosește condiționalul de politețe:</p>\n<ul>\n  <li><code>Je voudrais...</code> [jə vudrɛ] = Aș dori... (<em>Je voudrais un café, s'il vous plaît</em>).</li>\n  <li><code>Pour moi, ce sera...</code> = Pentru mine va fi...</li>\n  <li><code>L'addition, s'il vous plaît!</code> [ladisjõ] = Nota de plată, vă rog!</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe voudrais l'addition, s'il vous plaît.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Je voudrais...",
        "def": "Formulă de aur de politețe: 'Aș dori...' în loc de brutalul 'Vreau'."
      },
      {
        "term": "L'addition, s'il vous plaît",
        "def": "Cum ceri nota de plată la restaurant în Franța."
      },
      {
        "term": "une carafe d'eau",
        "def": "O carafă de apă de la robinet, gratuită prin lege în restaurantele franceze."
      },
      {
        "term": "Bon appétit!",
        "def": "'Poftă bună!'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je voudrais un café",
        "right": "Aș dori o cafea"
      },
      {
        "left": "L'addition, s'il vous plaît",
        "right": "Nota de plată, vă rog"
      },
      {
        "left": "Une carafe d'eau",
        "right": "O carafă cu apă (gratuită)"
      },
      {
        "left": "C'est délicieux!",
        "right": "Este delicios!"
      }
    ],
    "quiz": {
      "question": "Ce expresie folosești pentru a cere nota de plată la finalul mesei într-un restaurant francez?",
      "options": [
        "L'addition, s'il vous plaît!",
        "Le compte, s'il vous plaît!",
        "La facture maintenant!",
        "Combien pour moi?"
      ],
      "correctIndex": 0,
      "explanation": "La restaurant, nota se numește exclusiv 'l'addition'."
    },
    "task": "Comandă politicos: 'Je voudrais l'addition, s'il vous plaît.'.",
    "starterCode": "Je voudrais ",
    "expectedOutputPattern": "Je\\s+voudrais\\s+l['’]addition,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
    "hint": "Scrie Je voudrais l'addition, s'il vous plaît.",
    "prompt": "Comandă politicos: 'Je voudrais l'addition, s'il vous plaît.'.",
    "officialSolution": "Je voudrais l'addition, s'il vous plaît.",
    "example": "Je voudrais l'addition, s'il vous plaît.",
    "regexPattern": "Je\\s+voudrais\\s+l['’]addition,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?"
  },
  {
    "id": "fr-a1-p18",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 18: Locuința, Camerele & Mobilierul (La Maison)",
    "theory": "\n<p>Să descriem o locuință (apartament sau casă) și încăperile sale:</p>\n<h4>1. Încăperile Casei</h4>\n<ul>\n  <li><code>la maison</code> = casa / <code>l'appartement</code> (masc.) = apartamentul.</li>\n  <li><code>le salon</code> / <code>le séjour</code> = sufrageria / camera de zi.</li>\n  <li><code>la cuisine</code> = bucătăria.</li>\n  <li><code>la chambre</code> = dormitorul.</li>\n  <li><code>la salle de bains</code> = baia.</li>\n  <li><code>les toilettes</code> (feminin plural) = toaleta (în Franța toaleta este adesea o cameră separată de baie!).</li>\n</ul>\n<h4>2. Mobilier & Obiecte</h4>\n<p><code>la table</code> (masa), <code>la chaise</code> (scaunul), <code>le lit</code> (patul), <code>l'armoire</code> (dulapul), <code>le canapé</code> (canapeaua).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nIl y a une table et quatre chaises dans la cuisine.\n</code></pre>\n",
    "glossary": [
      {
        "term": "la chambre",
        "def": "Dormitorul (sau o cameră de hotel)."
      },
      {
        "term": "la salle de bains",
        "def": "Baia unde se află cada sau dușul."
      },
      {
        "term": "le salon",
        "def": "Camera de zi / sufrageria."
      },
      {
        "term": "Il y a...",
        "def": "Expresie esențială ce înseamnă 'Se află...' / 'Există...'."
      }
    ],
    "matchingPairs": [
      {
        "left": "dans la cuisine",
        "right": "în bucătărie"
      },
      {
        "left": "dans la chambre",
        "right": "în dormitor"
      },
      {
        "left": "Il y a un grand lit",
        "right": "Se află un pat mare"
      },
      {
        "left": "sur la table",
        "right": "pe masă"
      }
    ],
    "quiz": {
      "question": "Cum se numește 'dormitorul' în limba franceză?",
      "options": [
        "la chambre",
        "la cuisine",
        "le bureau",
        "le garage"
      ],
      "correctIndex": 0,
      "explanation": "Dormitorul este 'la chambre'."
    },
    "task": "Scrie propoziția 'Il y a une table et quatre chaises dans la cuisine.'.",
    "starterCode": "Il y a une ",
    "expectedOutputPattern": "Il\\s+y\\s+a\\s+une\\s+table\\s+et\\s+quatre\\s+chaises\\s+dans\\s+la\\s+cuisine\\.?",
    "hint": "Scrie Il y a une table et quatre chaises dans la cuisine.",
    "prompt": "Scrie propoziția 'Il y a une table et quatre chaises dans la cuisine.'.",
    "officialSolution": "Il y a une table et quatre chaises dans la cuisine.",
    "example": "Il y a une table et quatre chaises dans la cuisine.",
    "regexPattern": "Il\\s+y\\s+a\\s+une\\s+table\\s+et\\s+quatre\\s+chaises\\s+dans\\s+la\\s+cuisine\\.?"
  },
  {
    "id": "fr-a1-p19",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 19: Orașul & Întrebarea Direcției (La Ville et les Directions)",
    "theory": "\n<p>Când vizitezi Parisul sau alt oraș francofon, trebuie să știi să te orientezi pe stradă:</p>\n<h4>1. Locuri Publice</h4>\n<p><code>la rue</code> (strada), <code>la place</code> (piața), <code>la gare</code> (gara), <code>l'hôtel</code> (hotelul), <code>la pharmacie</code> (farmacia), <code>le supermarché</code> (supermarketul), <code>le pont</code> (podul).</p>\n<h4>2. Indicații de Direcție</h4>\n<ul>\n  <li><code>Allez tout droit</code> [ale tu drwa] = Mergeți drept înainte.</li>\n  <li><code>Tournez à gauche</code> = Virați la stânga.</li>\n  <li><code>Tournez à droite</code> = Virați la dreapta.</li>\n  <li><code>Prenez la première rue à droite</code> = Luați prima stradă la dreapta.</li>\n  <li><code>C'est près d'ici / C'est loin</code> = E aproape de aici / E departe.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nAllez tout droit et tournez à gauche.\n</code></pre>\n",
    "glossary": [
      {
        "term": "tout droit",
        "def": "Drept înainte (atenție: 'à droite' înseamnă la dreapta; 'tout droit' înseamnă drept înainte!)."
      },
      {
        "term": "à gauche / à droite",
        "def": "La stânga / la dreapta."
      },
      {
        "term": "la gare",
        "def": "Gara feroviară."
      },
      {
        "term": "Où se trouve...?",
        "def": "Unde se află...?"
      }
    ],
    "matchingPairs": [
      {
        "left": "Allez tout droit",
        "right": "Mergeți drept înainte"
      },
      {
        "left": "Tournez à gauche",
        "right": "Virați la stânga"
      },
      {
        "left": "Tournez à droite",
        "right": "Virați la dreapta"
      },
      {
        "left": "Où est la gare?",
        "right": "Unde este gara?"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă instrucțiunea 'Allez tout droit, puis tournez à droite'?",
      "options": [
        "Mergeți drept înainte, apoi virați la dreapta.",
        "Mergeți la stânga, apoi opriți-vă.",
        "Traversați strada și luați autobuzul.",
        "Întoarceți-vă la hotel."
      ],
      "correctIndex": 0,
      "explanation": "'Tout droit' înseamnă drept înainte, iar 'à droite' înseamnă la dreapta."
    },
    "task": "Scrie îndrumarea 'Allez tout droit et tournez à gauche.' (Mergeți drept înainte și virați la stânga).",
    "starterCode": "Allez tout ",
    "expectedOutputPattern": "Allez\\s+tout\\s+droit\\s+et\\s+tournez\\s+[àa]\\s+gauche\\.?",
    "hint": "Scrie Allez tout droit et tournez à gauche.",
    "prompt": "Scrie îndrumarea 'Allez tout droit et tournez à gauche.' (Mergeți drept înainte și virați la stânga).",
    "officialSolution": "Allez tout droit et tournez à gauche.",
    "example": "Allez tout droit et tournez à gauche.",
    "regexPattern": "Allez\\s+tout\\s+droit\\s+et\\s+tournez\\s+[àa]\\s+gauche\\.?"
  },
  {
    "id": "fr-a1-p20",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 20: Vremea & Starea Meteo (Quel temps fait-il?)",
    "theory": "\n<p>Pentru a întreba despre vreme, se folosește întrebarea: <strong>« Quel temps fait-il? »</strong>. Răspunsul folosește aproape mereu construcția impersonală <strong>« Il fait... »</strong> (de la verbul faire):</p>\n<h4>1. Expresii Climatice</h4>\n<ul>\n  <li><code>Il fait beau</code> = E vreme frumoasă.</li>\n  <li><code>Il fait mauvais</code> = E vreme urâtă.</li>\n  <li><code>Il fait chaud</code> = E cald.</li>\n  <li><code>Il fait froid</code> = E frig.</li>\n  <li><code>Il y a du soleil</code> = E soare.</li>\n  <li><code>Il y a du vent</code> = E vânt.</li>\n</ul>\n<h4>2. Verbe Meteorologice Speciale</h4>\n<ul>\n  <li><code>Il pleut</code> (de la verbul <em>pleuvoir</em>) = Plouă.</li>\n  <li><code>Il neige</code> (de la verbul <em>neiger</em>) = Ninge.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nAujourd'hui il fait beau et il y a du soleil.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Quel temps fait-il?",
        "def": "Întrebarea clasică: 'Cum este vremea?'."
      },
      {
        "term": "Il fait beau / froid",
        "def": "Construcție impersonală cu verbul faire pentru descrierea vremii."
      },
      {
        "term": "Il pleut",
        "def": "'Plouă' (de la verbul neregulat pleuvoir)."
      },
      {
        "term": "Il neige",
        "def": "'Ninge'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Il fait beau",
        "right": "E vreme frumoasă"
      },
      {
        "left": "Il fait froid",
        "right": "E frig"
      },
      {
        "left": "Il pleut",
        "right": "Plouă"
      },
      {
        "left": "Il y a du soleil",
        "right": "Este soare"
      }
    ],
    "quiz": {
      "question": "Cum spui 'Plouă și e frig astăzi' în limba franceză?",
      "options": [
        "Il pleut et il fait froid aujourd'hui.",
        "Il fait pleuvoir et froid.",
        "Il est pleuvant et froid.",
        "La pluie est froide aujourd'hui."
      ],
      "correctIndex": 0,
      "explanation": "'Il pleut' înseamnă plouă, iar 'il fait froid' înseamnă este frig."
    },
    "task": "Scrie propoziția meteo 'Aujourd'hui il fait beau et il y a du soleil.'.",
    "starterCode": "Aujourd'hui il ",
    "expectedOutputPattern": "Aujourd['’]hui\\s+il\\s+fait\\s+beau\\s+et\\s+il\\s+y\\s+a\\s+du\\s+soleil\\.?",
    "hint": "Scrie Aujourd'hui il fait beau et il y a du soleil.",
    "prompt": "Scrie propoziția meteo 'Aujourd'hui il fait beau et il y a du soleil.'.",
    "officialSolution": "Aujourd'hui il fait beau et il y a du soleil.",
    "example": "Aujourd'hui il fait beau et il y a du soleil.",
    "regexPattern": "Aujourd['’]hui\\s+il\\s+fait\\s+beau\\s+et\\s+il\\s+y\\s+a\\s+du\\s+soleil\\.?"
  },
  {
    "id": "fr-a1-p21",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 40,
    "title": "Capitolul 21: Verbul „ALLER” (A MERGE) & Le Futur Proche (Viitorul Imediat)",
    "theory": "\n<p>Verbul <strong>aller</strong> (a merge) este al treilea cel mai utilizat verb din franceză și servește drept motor pentru construirea <strong>viitorului imediat (Le Futur Proche)</strong>.</p>\n<h4>1. Conjugarea Verbului ALLER</h4>\n<ul>\n  <li><code>Je vais</code> [jə vɛ] = Eu merg / mă duc.</li>\n  <li><code>Tu vas</code> [ty va] = Tu mergi.</li>\n  <li><code>Il / Elle va</code> = El / Ea merge.</li>\n  <li><code>Nous allons</code> [nuz alõ] = Noi mergem.</li>\n  <li><code>Vous allez</code> [vuz ale] = Voi mergeți.</li>\n  <li><code>Ils / Elles vont</code> [il võ] = Ei / Ele merg.</li>\n</ul>\n<h4>2. Le Futur Proche (ALLER + Infinitiv)</h4>\n<p>Pentru a exprima ceva ce vei face imediat sau în viitorul apropiat, folosești formula: <strong>ALLER conjugat + Infinitivul verbului</strong>:</p>\n<ul>\n  <li><em>Je <strong>vais manger</strong></em> = Voi mânca / Urmează să mănânc.</li>\n  <li><em>Nous <strong>allons partir</strong></em> = Vom pleca.</li>\n  <li><em>Qu'est-ce que tu <strong>vas faire</strong>?</em> = Ce ai de gând să faci?</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe vais étudier le français ce soir.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Aller",
        "def": "Verbul 'a merge', complet neregulat (vais, vas, va, allons, allez, vont)."
      },
      {
        "term": "Futur Proche",
        "def": "Timp viitor foarte simplu format din Aller + Infinitiv (echivalent cu 'I am going to...')."
      },
      {
        "term": "Je vais",
        "def": "Eu merg / Urmează să fac ceva."
      },
      {
        "term": "Nous allons",
        "def": "Noi mergem."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je vais au cinéma",
        "right": "Merg la cinema"
      },
      {
        "left": "Je vais manger",
        "right": "Urmează să mănânc (Futur Proche)"
      },
      {
        "left": "Nous allons voyager",
        "right": "Vom călători"
      },
      {
        "left": "Ils vont partir",
        "right": "Ei vor pleca"
      }
    ],
    "quiz": {
      "question": "Cum formezi Futur Proche pentru 'Eu voi dormi' (dormir = a dormi)?",
      "options": [
        "Je vais dormir.",
        "Je dors futur.",
        "Je suis dormir.",
        "Je aller dormir."
      ],
      "correctIndex": 0,
      "explanation": "Formula pentru Futur Proche este Je vais + infinitivul: 'Je vais dormir'."
    },
    "task": "Scrie propoziția la Futur Proche 'Je vais étudier le français ce soir.' (Voi studia franceza diseară).",
    "starterCode": "Je vais ",
    "expectedOutputPattern": "Je\\s+vais\\s+[ée]tudier\\s+le\\s+fran[çc]ais\\s+ce\\s+soir\\.?",
    "hint": "Scrie Je vais étudier le français ce soir.",
    "prompt": "Scrie propoziția la Futur Proche 'Je vais étudier le français ce soir.' (Voi studia franceza diseară).",
    "officialSolution": "Je vais étudier le français ce soir.",
    "example": "Je vais étudier le français ce soir.",
    "regexPattern": "Je\\s+vais\\s+[ée]tudier\\s+le\\s+fran[çc]ais\\s+ce\\s+soir\\.?"
  },
  {
    "id": "fr-a1-p22",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 40,
    "title": "Capitolul 22: Verbele Reflexive & Rutina Zilnică (Se lever, Se doucher)",
    "theory": "\n<p>Verbele care descriu acțiunile pe care le facem asupra propriului corp (rutina zilnică) sunt <strong>verbe pronominale (reflexive)</strong> și folosesc pronumele reflexive: <code>me, te, se, nous, vous, se</code>.</p>\n<h4>1. Conjugarea unui Verb Reflexiv (Exemplu: Se lever = A se trezi/scula)</h4>\n<ul>\n  <li><code>Je me lève</code> = Eu mă scol.</li>\n  <li><code>Tu te lèves</code> = Tu te scoli.</li>\n  <li><code>Il / Elle se lève</code> = El / Ea se scoală.</li>\n  <li><code>Nous nous levons</code> = Noi ne sculăm.</li>\n  <li><code>Vous vous levez</code> = Voi vă sculați.</li>\n  <li><code>Ils / Elles se lèvent</code> = Ei / Ele se scoală.</li>\n</ul>\n<h4>2. Alte Verbe de Rutină</h4>\n<p><code>se réveiller</code> (a se trezi), <code>se doucher</code> (a face duș), <code>s'habiller</code> (a se îmbrăca), <code>se coucher</code> (a se culca).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe me lève à sept heures tous les jours.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Verbes pronominaux",
        "def": "Verbe reflexive precedate de pronumele me, te, se, nous, vous, se."
      },
      {
        "term": "Je me réveille",
        "def": "'Mă trezesc'."
      },
      {
        "term": "Je me couche",
        "def": "'Mă culc' (merg la culcare)."
      },
      {
        "term": "s'habiller",
        "def": "A se îmbrăca (elidat în s' în fața vocalei)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je me réveille à 7h",
        "right": "Mă trezesc la ora 7"
      },
      {
        "left": "Je me douche",
        "right": "Fac duș"
      },
      {
        "left": "Il s'habille vite",
        "right": "El se îmbracă repede"
      },
      {
        "left": "Nous nous couchons",
        "right": "Ne culcăm"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă pentru 'Noi ne trezim la ora 8' folosind verbul 'se réveiller'?",
      "options": [
        "Nous nous réveillons à 8h.",
        "Nous réveillons à 8h.",
        "Nous se réveillons à 8h.",
        "Nous vous réveillons à 8h."
      ],
      "correctIndex": 0,
      "explanation": "La persoana 'nous', pronumele reflexiv se repetă: 'Nous nous réveillons'."
    },
    "task": "Scrie propoziția de rutină 'Je me lève à sept heures tous les jours.' (Mă scol la ora 7 în fiecare zi).",
    "starterCode": "Je me ",
    "expectedOutputPattern": "Je\\s+me\\s+l[èe]ve\\s+[àa]\\s+sept\\s+heures\\s+tous\\s+les\\s+jours\\.?",
    "hint": "Scrie Je me lève à sept heures tous les jours.",
    "prompt": "Scrie propoziția de rutină 'Je me lève à sept heures tous les jours.' (Mă scol la ora 7 în fiecare zi).",
    "officialSolution": "Je me lève à sept heures tous les jours.",
    "example": "Je me lève à sept heures tous les jours.",
    "regexPattern": "Je\\s+me\\s+l[èe]ve\\s+[àa]\\s+sept\\s+heures\\s+tous\\s+les\\s+jours\\.?"
  },
  {
    "id": "fr-a1-p23",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 40,
    "title": "Capitolul 23: Verbele Modale: Pouvoir (A putea), Vouloir (A vrea), Devoir (A trebui)",
    "theory": "\n<p>Verbele modale sunt urmate direct de un alt verb la <strong>infinitiv</strong> (fără nicio prepoziție între ele).</p>\n<h4>1. POUVOIR (A Putea)</h4>\n<p><em>Je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent</em>.<br>\nExemplu: <em>Je peux vous aider?</em> = Pot să vă ajut?</p>\n<h4>2. VOULOIR (A Vrea)</h4>\n<p><em>Je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent</em>.<br>\nExemplu: <em>Tu veux venir avec moi?</em> = Vrei să vii cu mine?</p>\n<h4>3. DEVOIR (A Trebui / Obligație)</h4>\n<p><em>Je dois, tu dois, il doit, nous devons, vous devez, ils doivent</em>.<br>\nExemplu: <em>Je dois partir maintenant</em> = Trebuie să plec acum.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe veux apprendre le français et je peux réussir.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Pouvoir",
        "def": "A putea (capacitate sau permisiune)."
      },
      {
        "term": "Vouloir",
        "def": "A vrea (dorință)."
      },
      {
        "term": "Devoir",
        "def": "A trebui (obligație sau datorie)."
      },
      {
        "term": "Modal + Infinitif",
        "def": "Construcție directă fără prepoziție: Je peux faire, Je dois partir."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je peux vous aider?",
        "right": "Pot să vă ajut?"
      },
      {
        "left": "Je veux apprendre",
        "right": "Vreau să învăț"
      },
      {
        "left": "Je dois partir",
        "right": "Trebuie să plec"
      },
      {
        "left": "Ils peuvent venir",
        "right": "Ei pot să vină"
      }
    ],
    "quiz": {
      "question": "Cum traduci în franceză 'Trebuie să lucrez astăzi' folosind verbul 'devoir'?",
      "options": [
        "Je dois travailler aujourd'hui.",
        "Je peux travailler aujourd'hui.",
        "Je veux travailler aujourd'hui.",
        "Je suis travailler aujourd'hui."
      ],
      "correctIndex": 0,
      "explanation": "'Je dois' înseamnă 'eu trebuie', urmat de infinitivul 'travailler'."
    },
    "task": "Scrie propoziția 'Je veux apprendre le français et je peux réussir.'.",
    "starterCode": "Je veux ",
    "expectedOutputPattern": "Je\\s+veux\\s+apprendre\\s+le\\s+fran[çc]ais\\s+et\\s+je\\s+peux\\s+r[ée]ussir\\.?",
    "hint": "Scrie Je veux apprendre le français et je peux réussir.",
    "prompt": "Scrie propoziția 'Je veux apprendre le français et je peux réussir.'.",
    "officialSolution": "Je veux apprendre le français et je peux réussir.",
    "example": "Je veux apprendre le français et je peux réussir.",
    "regexPattern": "Je\\s+veux\\s+apprendre\\s+le\\s+fran[çc]ais\\s+et\\s+je\\s+peux\\s+r[ée]ussir\\.?"
  },
  {
    "id": "fr-a1-p24",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 40,
    "title": "Capitolul 24: Verbele Neregulate Majore: FAIRE (A face) & PRENDRE (A lua)",
    "theory": "\n<p>Verbele <strong>faire</strong> și <strong>prendre</strong> apar în sute de expresii uzuale franceze:</p>\n<h4>1. FAIRE (A face)</h4>\n<p><code>Je fais, tu fais, il fait, nous faisons [fəzõ], vous faites, ils font</code>.<br>\nUtilizări: <em>faire du sport</em> (a face sport), <em>faire la cuisine</em> (a găti), <em>faire les courses</em> (a face cumpărături), <em>faire attention</em> (a fi atent).</p>\n<h4>2. PRENDRE (A lua)</h4>\n<p><code>Je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent</code>.<br>\nUtilizări: <em>prendre le bus/métro</em> (a lua autobuzul), <em>prendre un café</em> (a bea o cafea), <em>prendre une douche</em> (a face un duș).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe prends un café et je fais mes devoirs.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Faire",
        "def": "Verb neregulat: je fais, tu fais, il fait, nous faisons, vous faites, ils font."
      },
      {
        "term": "faire les courses",
        "def": "Expresie idiomatică ce înseamnă 'a face cumpărături de alimente'."
      },
      {
        "term": "Prendre",
        "def": "A lua; folosit și pentru mâncare/băutură (prendre un café) și transport (prendre le train)."
      },
      {
        "term": "vous faites",
        "def": "Atenție: la vous nu este 'faisez', ci 'vous faites'!"
      }
    ],
    "matchingPairs": [
      {
        "left": "Je fais du sport",
        "right": "Fac sport"
      },
      {
        "left": "Je prends le métro",
        "right": "Iau metroul"
      },
      {
        "left": "Nous faisons les courses",
        "right": "Facem cumpărăturile"
      },
      {
        "left": "Vous faites attention",
        "right": "Sunteți atent"
      }
    ],
    "quiz": {
      "question": "Care este forma de persoana a 2-a plural (vous) a verbului 'faire'?",
      "options": [
        "vous faites (formă neregulată unică)",
        "vous faisez",
        "vous font",
        "vous faitez"
      ],
      "correctIndex": 0,
      "explanation": "'Faire' este unul dintre puținele verbe a cărui formă pentru 'vous' este 'vous faites' (nu faisez!)."
    },
    "task": "Scrie propoziția 'Je prends un café et je fais mes devoirs.' (Beau o cafea și îmi fac temele).",
    "starterCode": "Je prends ",
    "expectedOutputPattern": "Je\\s+prends\\s+un\\s+caf[ée]\\s+et\\s+je\\s+fais\\s+mes\\s+devoirs\\.?",
    "hint": "Scrie Je prends un café et je fais mes devoirs.",
    "prompt": "Scrie propoziția 'Je prends un café et je fais mes devoirs.' (Beau o cafea și îmi fac temele).",
    "officialSolution": "Je prends un café et je fais mes devoirs.",
    "example": "Je prends un café et je fais mes devoirs.",
    "regexPattern": "Je\\s+prends\\s+un\\s+caf[ée]\\s+et\\s+je\\s+fais\\s+mes\\s+devoirs\\.?"
  },
  {
    "id": "fr-a1-p25",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 45,
    "title": "Capitolul 25: Sinteză Conversațională A1: Dialog Complet la Hotel & Check-in",
    "theory": "\n<p>Felicitări! Ai finalizat Fundamentele de la Zero A1. Să unim tot ce am învățat (salutări, être, avoir, numere, politețe) într-un dialog real de check-in la un hotel francez.</p>\n<h4>1. Replicile Recepționerului</h4>\n<ul>\n  <li><em>Bonjour Monsieur/Madame, bienvenue à l'Hôtel de Paris.</em></li>\n  <li><em>Vous avez une réservation?</em> (Aveți o rezervare?)</li>\n  <li><em>C'est à quel nom?</em> (Pe ce nume este?)</li>\n</ul>\n<h4>2. Răspunsurile Clientului</h4>\n<ul>\n  <li><em>Oui, j'ai une réservation au nom de Popescu pour trois nuits.</em></li>\n  <li><em>Voici mon passeport.</em> (Iată pașaportul meu.)</li>\n  <li><em>À quelle heure est le petit-déjeuner?</em> (La ce oră este micul dejun?)</li>\n  <li><em>Le petit-déjeuner est de 7h à 10h. Voici votre clé, chambre 204.</em></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nBonjour, j'ai une réservation pour deux personnes, s'il vous plaît.\n</code></pre>\n",
    "glossary": [
      {
        "term": "une réservation",
        "def": "O rezervare la hotel sau restaurant."
      },
      {
        "term": "Voici mon passeport",
        "def": "'Iată pașaportul meu' (prezentarea documentelor)."
      },
      {
        "term": "la clé",
        "def": "Cheia camerei de hotel."
      },
      {
        "term": "au nom de...",
        "def": "Pe numele lui..."
      }
    ],
    "matchingPairs": [
      {
        "left": "J'ai une réservation",
        "right": "Am o rezervare"
      },
      {
        "left": "C'est à quel nom?",
        "right": "Pe ce nume este?"
      },
      {
        "left": "Voici votre clé",
        "right": "Iată cheia dumneavoastră"
      },
      {
        "left": "Pour trois nuits",
        "right": "Pentru trei nopți"
      }
    ],
    "quiz": {
      "question": "Cum îi spui recepționerului că ai o rezervare pe numele 'Ionescu'?",
      "options": [
        "J'ai une réservation au nom de Ionescu.",
        "Je suis réservation nom Ionescu.",
        "Mon nom est réserver Ionescu.",
        "Je prends Ionescu."
      ],
      "correctIndex": 0,
      "explanation": "Formula consacrată în franceză este 'J'ai une réservation au nom de [Nume]'."
    },
    "task": "Scrie replica 'Bonjour, j'ai une réservation pour deux personnes, s'il vous plaît.'.",
    "starterCode": "Bonjour, j'ai ",
    "expectedOutputPattern": "Bonjour,\\s*j['’]ai\\s+une\\s+r[ée]servation\\s+pour\\s+deux\\s+personnes,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
    "hint": "Scrie Bonjour, j'ai une réservation pour deux personnes, s'il vous plaît.",
    "prompt": "Scrie replica 'Bonjour, j'ai une réservation pour deux personnes, s'il vous plaît.'.",
    "officialSolution": "Bonjour, j'ai une réservation pour deux personnes, s'il vous plaît.",
    "example": "Bonjour, j'ai une réservation pour deux personnes, s'il vous plaît.",
    "regexPattern": "Bonjour,\\s*j['’]ai\\s+une\\s+r[ée]servation\\s+pour\\s+deux\\s+personnes,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?"
  },
  {
    "id": "fr-b1-p26",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 26: Passé Composé cu Auxiliarul AVOIR & Participiul Regulat",
    "theory": "\n<p><strong>Passé Composé</strong> este cel mai frecvent timp trecut în limba franceză pentru acțiuni încheiate, punctuale.</p>\n<h4>1. Structura cu Auxiliarul AVOIR</h4>\n<p>Se compune din: <code>Subiect + AVOIR la prezent + Participiu trecut</code>.</p>\n<ul>\n  <li>Verbe în <code>-er</code> &rarr; participiu în <code>-é</code>: <em>parler &rarr; parlé</em>, <em>manger &rarr; mangé</em>.</li>\n  <li>Verbe în <code>-ir</code> &rarr; participiu în <code>-i</code>: <em>finir &rarr; fini</em>, <em>choisir &rarr; choisi</em>.</li>\n  <li>Verbe în <code>-re</code> &rarr; participiu în <code>-u</code>: <em>vendre &rarr; vendu</em>, <em>attendre &rarr; attendu</em>.</li>\n</ul>\n<h4>2. Regula Absenței Acordului cu Subiectul</h4>\n<p>Când auxiliarul este <strong>avoir</strong>, participiul trecut <strong>NU</strong> se acordă cu subiectul: <em>Elle a mangé</em> (fără 'e' la final!), <em>Ils ont parlé</em> (fără 's'!).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nHier, j'ai mangé une pomme et j'ai regardé un film.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Passé Composé",
        "def": "Timpul trecut compus francez pentru evenimente terminate punctual în trecut."
      },
      {
        "term": "Participiul trecut (-é, -i, -u)",
        "def": "Forma verbală trecută obținută prin înlocuirea terminației de infinitiv."
      },
      {
        "term": "Auxiliarul Avoir",
        "def": "Auxiliarul folosit de peste 85% din verbele franceze la timpurile compuse."
      },
      {
        "term": "Non-acord cu subiectul",
        "def": "La timpurile compuse cu avoir, participiul nu își schimbă forma după genul sau numărul subiectului."
      }
    ],
    "matchingPairs": [
      {
        "left": "J'ai parlé au directeur",
        "right": "Am vorbit cu directorul"
      },
      {
        "left": "Elle a fini ses devoirs",
        "right": "Ea și-a terminat temele"
      },
      {
        "left": "Nous avons attendu le train",
        "right": "Noi am așteptat trenul"
      },
      {
        "left": "Ils ont vendu la maison",
        "right": "Ei au vândut casa"
      }
    ],
    "quiz": {
      "question": "Cum se traduce corect 'Ea a mâncat o salată' folosind verbul 'manger' la passé composé?",
      "options": [
        "Elle a mangé une salade. (participiul nu se acordă cu subiectul la avoir)",
        "Elle a mangée une salade.",
        "Elle est mangé une salade.",
        "Elle a mangeait une salade."
      ],
      "correctIndex": 0,
      "explanation": "Cu auxiliarul avoir, participiul trecut rămâne neschimbat (mangé), indiferent dacă subiectul este feminin (Elle)."
    },
    "task": "Scrie propoziția 'Hier, j'ai mangé une pomme et j'ai regardé un film.' (Ieri am mâncat un măr și am privit un film).",
    "starterCode": "Hier, j'ai mangé ",
    "expectedOutputPattern": "Hier,\\s*j['’]ai\\s+mang[ée]\\s+une\\s+pomme\\s+et\\s+j['’]ai\\s+regard[ée]\\s+un\\s+film\\.?",
    "hint": "Scrie Hier, j'ai mangé une pomme et j'ai regardé un film.",
    "prompt": "Scrie propoziția 'Hier, j'ai mangé une pomme et j'ai regardé un film.' (Ieri am mâncat un măr și am privit un film).",
    "officialSolution": "Hier, j'ai mangé une pomme et j'ai regardé un film.",
    "example": "Hier, j'ai mangé une pomme et j'ai regardé un film.",
    "regexPattern": "Hier,\\s*j['’]ai\\s+mang[ée]\\s+une\\s+pomme\\s+et\\s+j['’]ai\\s+regard[ée]\\s+un\\s+film\\.?"
  },
  {
    "id": "fr-b1-p27",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 27: Passé Composé cu Auxiliarul ÊTRE & Acordul Participiului",
    "theory": "\n<p>Aproximativ 14 verbe fundamentale (de mișcare/transformare) și <strong>toate verbele reflexive</strong> formează trecutul compus cu auxiliarul <strong>ÊTRE</strong>.</p>\n<h4>1. Verbele din „Casa lui Être”</h4>\n<p><em>Aller/Venir, Arriver/Partir, Entrer/Sortir, Monter/Descendre, Naître/Mourir, Rester, Tomber, Retourner, Passer</em>.</p>\n<h4>2. Regula de Aur a Acordului</h4>\n<p>Cu auxiliarul <strong>être</strong>, participiul trecut <strong>SE ACORDĂ OBLIGATORIU</strong> în gen și număr cu subiectul frazei:</p>\n<ul>\n  <li>Masculin singular: <em>Il est allé</em></li>\n  <li>Feminin singular (+e): <em>Elle est allé<strong>e</strong></em></li>\n  <li>Masculin plural (+s): <em>Ils sont allé<strong>s</strong></em></li>\n  <li>Feminin plural (+es): <em>Elles sont allé<strong>es</strong></em></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nElle est allée à la gare et ils sont arrivés à l'heure.\n</code></pre>\n",
    "glossary": [
      {
        "term": "La maison d'être",
        "def": "Grupul de verbe de mișcare și stare ce cer auxiliarul être la timpurile compuse."
      },
      {
        "term": "Acordul în gen și număr",
        "def": "Adăugarea sufixului -e (feminin) și/sau -s (plural) la participiul verbelor conjugate cu être."
      },
      {
        "term": "Verbe reflexive la passé composé",
        "def": "Toate verbele reflexive folosesc obligatoriu être (ex: Elle s'est levée)."
      },
      {
        "term": "Partir / Arriver",
        "def": "Pereche clasică de verbe de deplasare conjugate cu être."
      }
    ],
    "matchingPairs": [
      {
        "left": "Elle est allée à Paris",
        "right": "Ea a mers la Paris (acord feminin +e)"
      },
      {
        "left": "Ils sont arrivés à l'heure",
        "right": "Ei au sosit la timp (acord plural +s)"
      },
      {
        "left": "Elles sont parties tôt",
        "right": "Ele au plecat devreme (acord feminin plural +es)"
      },
      {
        "left": "Il est né en France",
        "right": "El s-a născut în Franța"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă pentru 'Ele au sosit la gară' (Elles + arriver)?",
      "options": [
        "Elles sont arrivées à la gare. (acord feminin plural +es)",
        "Elles ont arrivé à la gare.",
        "Elles sont arrivé à la gare.",
        "Elles sont arrivés à la gare."
      ],
      "correctIndex": 0,
      "explanation": "'Arriver' cere auxiliarul être, iar subiectul 'Elles' impune adăugarea terminației '-es' (arrivées)."
    },
    "task": "Scrie propoziția 'Elle est allée à la gare et ils sont arrivés à l'heure.'.",
    "starterCode": "Elle est allée ",
    "expectedOutputPattern": "Elle\\s+est\\s+all[ée]e\\s+[àa]\\s+la\\s+gare\\s+et\\s+ils\\s+sont\\s+arriv[ée]s\\s+[àa]\\s+l['’]heure\\.?",
    "hint": "Scrie Elle est allée à la gare et ils sont arrivés à l'heure.",
    "prompt": "Scrie propoziția 'Elle est allée à la gare et ils sont arrivés à l'heure.'.",
    "officialSolution": "Elle est allée à la gare et ils sont arrivés à l'heure.",
    "example": "Elle est allée à la gare et ils sont arrivés à l'heure.",
    "regexPattern": "Elle\\s+est\\s+all[ée]e\\s+[àa]\\s+la\\s+gare\\s+et\\s+ils\\s+sont\\s+arriv[ée]s\\s+[àa]\\s+l['’]heure\\.?"
  },
  {
    "id": "fr-b1-p28",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 28: L'Imparfait — Formare, Valori & Descrieri în Trecut",
    "theory": "\n<p><strong>L'Imparfait</strong> este timpul evocării, al stărilor continue, al descrierilor și al obiceiurilor repetate din trecut („ce se întâmpla de obicei” sau „cum era”).</p>\n<h4>1. Regula Universală de Formare</h4>\n<p>Se ia rădăcina persoanei I plural (<code>nous</code>) de la prezent și se adaugă terminațiile unice:</p>\n<p><strong>-ais, -ais, -ait, -ions, -iez, -aient</strong></p>\n<p>Exemplu: <em>nous parl-ons &rarr; je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient</em>.</p>\n<h4>2. Singura Excepție: Verbul ÊTRE</h4>\n<p>Rădăcina lui <em>être</em> este <code>ét-</code>: <em>j'étais, tu étais, il était, nous étions, vous étiez, ils étaient</em>.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nQuand j'étais petit, je lisais beaucoup de livres.\n</code></pre>\n",
    "glossary": [
      {
        "term": "L'Imparfait",
        "def": "Timpul imperfect francez folosit pentru descrieri, stări și acțiuni habituale din trecut."
      },
      {
        "term": "Terminațiile unice",
        "def": "-ais, -ais, -ait, -ions, -iez, -aient (primele trei și ultima au sunet identic [ɛ])."
      },
      {
        "term": "Habitude dans le passé",
        "def": "Obicei sau rutină din trecut (ex: În fiecare duminică mergeam la bunici)."
      },
      {
        "term": "J'étais",
        "def": "Forma neregulată de imperfect a verbului auxiliar être."
      }
    ],
    "matchingPairs": [
      {
        "left": "Quand j'étais petit",
        "right": "Când eram mic"
      },
      {
        "left": "Il faisait beau hier",
        "right": "Era vreme frumoasă ieri (descriere)"
      },
      {
        "left": "Nous habitions à Lyon",
        "right": "Noi locuiam la Lyon (stare continuă)"
      },
      {
        "left": "Tu lisais tous les soirs",
        "right": "Tu citeai în fiecare seară (obicei)"
      }
    ],
    "quiz": {
      "question": "Care este forma de persoana I singular (Je) la imperfect a verbului 'faire' (nous faisons)?",
      "options": [
        "Je faisais (rădăcina fais- + -ais)",
        "Je ferais",
        "Je fais",
        "Je fis"
      ],
      "correctIndex": 0,
      "explanation": "Pornind de la 'nous faisons', îndepărtăm '-ons' și adăugăm '-ais' &rarr; 'je faisais'."
    },
    "task": "Scrie propoziția 'Quand j'étais petit, je lisais beaucoup de livres.' (Când eram mic, citeam multe cărți).",
    "starterCode": "Quand j'étais petit, ",
    "expectedOutputPattern": "Quand\\s+j['’][ée]tais\\s+petit,\\s*je\\s+lisais\\s+beaucoup\\s+de\\s+livres\\.?",
    "hint": "Scrie Quand j'étais petit, je lisais beaucoup de livres.",
    "prompt": "Scrie propoziția 'Quand j'étais petit, je lisais beaucoup de livres.' (Când eram mic, citeam multe cărți).",
    "officialSolution": "Quand j'étais petit, je lisais beaucoup de livres.",
    "example": "Quand j'étais petit, je lisais beaucoup de livres.",
    "regexPattern": "Quand\\s+j['’][ée]tais\\s+petit,\\s*je\\s+lisais\\s+beaucoup\\s+de\\s+livres\\.?"
  },
  {
    "id": "fr-b1-p29",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 29: Imparfait vs Passé Composé — Contrastul Narativ Fundamental",
    "theory": "\n<p>Stăpânirea contrastului dintre <strong>Imparfait</strong> și <strong>Passé Composé</strong> este piatra de temelie a nivelului B1 în limba franceză.</p>\n<h4>1. Rolul Narativ în Text</h4>\n<ul>\n  <li><strong>Imparfait (Fundalul / Decorul):</strong> Descrie starea vremii, sentimentele, acțiunea în desfășurare fără început sau sfârșit precizat.</li>\n  <li><strong>Passé Composé (Evenimentul Punctual):</strong> Acțiunea punctuală care survine brusc și întrerupe acțiunea din fundal.</li>\n</ul>\n<h4>2. Schema Clasică</h4>\n<p><em>Je dormais (imparfait - acțiune continuă) quand soudain le téléphone a sonné (passé composé - acțiune punctuală).</em></p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe marchais dans la rue quand j'ai vu mon ami.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Plan d'arrière (Decor)",
        "def": "Imperfectul creează atmosfera și contextul narațiunii."
      },
      {
        "term": "Premier plan (Eveniment)",
        "def": "Passé composé introduce evenimentele concrete ce împing povestea mai departe."
      },
      {
        "term": "Quand soudain",
        "def": "'Când deodată' — semnal narativ clasic ce introduce un passé composé."
      },
      {
        "term": "Interruption",
        "def": "O acțiune scurtă la trecut compus care întrerupe o acțiune continuă la imperfect."
      }
    ],
    "matchingPairs": [
      {
        "left": "Il pleuvait dehors",
        "right": "Ploua afară (imparfait: decor)"
      },
      {
        "left": "Il est sorti sans parapluie",
        "right": "A ieșit fără umbrelă (passé composé: acțiune)"
      },
      {
        "left": "Je regardais la télé",
        "right": "Mă uitam la televizor (acțiune în derulare)"
      },
      {
        "left": "La lumière s'est éteinte",
        "right": "S-a stins lumina (eveniment brusc)"
      }
    ],
    "quiz": {
      "question": "În fraza 'Pendant que je lisais, quelqu'un ... à la porte', ce timp trebuie folosit pentru verbul 'frapper' (a bate)?",
      "options": [
        "a frappé (Passé composé: acțiune punctuală care intervine)",
        "frappait (Imparfait)",
        "frappe (Présent)",
        "va frapper (Futur)"
      ],
      "correctIndex": 0,
      "explanation": "Bătaia la ușă este un eveniment punctual care întrerupe acțiunea continuă de citit (je lisais)."
    },
    "task": "Scrie propoziția 'Je marchais dans la rue quand j'ai vu mon ami.' (Mergeam pe stradă când l-am văzut pe prietenul meu).",
    "starterCode": "Je marchais dans la rue ",
    "expectedOutputPattern": "Je\\s+marchais\\s+dans\\s+la\\s+rue\\s+quand\\s+j['’]ai\\s+vu\\s+mon\\s+ami\\.?",
    "hint": "Scrie Je marchais dans la rue quand j'ai vu mon ami.",
    "prompt": "Scrie propoziția 'Je marchais dans la rue quand j'ai vu mon ami.' (Mergeam pe stradă când l-am văzut pe prietenul meu).",
    "officialSolution": "Je marchais dans la rue quand j'ai vu mon ami.",
    "example": "Je marchais dans la rue quand j'ai vu mon ami.",
    "regexPattern": "Je\\s+marchais\\s+dans\\s+la\\s+rue\\s+quand\\s+j['’]ai\\s+vu\\s+mon\\s+ami\\.?"
  },
  {
    "id": "fr-b1-p30",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 30: Pronumele de Obiect Direct (COD: Me, Te, Le, La, Nous, Vous, Les)",
    "theory": "\n<p><strong>Pronumele COD</strong> (Complément d'Objet Direct) înlocuiește o persoană sau un obiect determinat direct de verb (fără prepoziție), răspunzând la întrebarea <em>qui?</em> (pe cine?) sau <em>quoi?</em> (ce?).</p>\n<h4>1. Formele Pronumelor COD</h4>\n<ul>\n  <li><code>me / m'</code> = mă / pe mine</li>\n  <li><code>te / t'</code> = te / pe tine</li>\n  <li><code>le / l'</code> = îl / pe el / pe acesta</li>\n  <li><code>la / l'</code> = o / pe ea</li>\n  <li><code>nous</code> = ne / pe noi</li>\n  <li><code>vous</code> = vă / pe voi</li>\n  <li><code>les</code> = îi / le / pe ei / pe ele</li>\n</ul>\n<h4>2. Poziția în Frază</h4>\n<p>Pronumele COD stă <strong>în fața verbului conjugat</strong>: <em>Je regarde le film &rarr; Je <strong>le</strong> regarde.</em> La imperativ afirmativ stă după verb cu cratimă: <em>Regarde-le!</em>.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nTu aimes ce livre? Oui, je le lis tous les soirs.\n</code></pre>\n",
    "glossary": [
      {
        "term": "COD (Complément Direct)",
        "def": "Complement direct ce răspunde la întrebarea cine? sau ce? fără prepoziție."
      },
      {
        "term": "Le / La / Les",
        "def": "Pronume de persoana a III-a acordate cu genul și numărul substantivului înlocuit."
      },
      {
        "term": "Poziția pre-verbală",
        "def": "În franceză, pronumele complement se plasează în fața verbului, nu după el."
      },
      {
        "term": "Élision devant voyelle",
        "def": "Me, te, le, la devin m', t', l' în fața unei vocale (ex: Je l'adore)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Tu aimes cette chanson?",
        "right": "Oui, je l'aime beaucoup (la &rarr; l')"
      },
      {
        "left": "Il invite ses amis?",
        "right": "Oui, il les invite ce soir (les)"
      },
      {
        "left": "Tu m'écoutes?",
        "right": "Oui, je t'écoute attentivement"
      },
      {
        "left": "Vous voyez ce panneau?",
        "right": "Oui, nous le voyons clairement (le)"
      }
    ],
    "quiz": {
      "question": "Cum înlocuiești 'la valise' în fraza 'Je prépare la valise' folosind un pronume COD?",
      "options": [
        "Je la prépare.",
        "Je le prépare.",
        "Je lui prépare.",
        "Je prépare la."
      ],
      "correctIndex": 0,
      "explanation": "'La valise' este feminin singular direct, prin urmare se înlocuiește cu pronumele pre-verbal 'la': Je la prépare."
    },
    "task": "Scrie replica 'Tu aimes ce livre? Oui, je le lis tous les soirs.'.",
    "starterCode": "Tu aimes ce livre? ",
    "expectedOutputPattern": "Tu\\s+aimes\\s+ce\\s+livre\\?\\s*Oui,\\s*je\\s+le\\s+lis\\s+tous\\s+les\\s+soirs\\.?",
    "hint": "Scrie Tu aimes ce livre? Oui, je le lis tous les soirs.",
    "prompt": "Scrie replica 'Tu aimes ce livre? Oui, je le lis tous les soirs.'.",
    "officialSolution": "Tu aimes ce livre? Oui, je le lis tous les soirs.",
    "example": "Tu aimes ce livre? Oui, je le lis tous les soirs.",
    "regexPattern": "Tu\\s+aimes\\s+ce\\s+livre\\?\\s*Oui,\\s*je\\s+le\\s+lis\\s+tous\\s+les\\s+soirs\\.?"
  },
  {
    "id": "fr-b1-p31",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 31: Pronumele de Obiect Indirect (COI: Me, Te, Lui, Nous, Vous, Leur)",
    "theory": "\n<p><strong>Pronumele COI</strong> (Complément d'Objet Indirect) înlocuiește o persoană precedată de prepoziția <strong>à</strong> (răspunde la întrebarea <em>à qui?</em> &mdash; cui?).</p>\n<h4>1. Formele Pronumelor COI</h4>\n<ul>\n  <li><code>me / te / nous / vous</code> (identice cu cele de la COD)</li>\n  <li><code>lui</code> = lui / ei (singular, invariabil în gen! <em>à Pierre &rarr; lui; à Marie &rarr; lui</em>)</li>\n  <li><code>leur</code> = lor (plural, invariabil, fără 's'!)</li>\n</ul>\n<h4>2. Exemple Fundamentale</h4>\n<p><em>Je téléphone à mon père &rarr; Je <strong>lui</strong> téléphone.</em><br>\n<em>J'écris à mes collègues &rarr; Je <strong>leur</strong> écris.</em></p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe téléphone à Marie pour lui donner les clés.\n</code></pre>\n",
    "glossary": [
      {
        "term": "COI (Complément Indirect)",
        "def": "Complement indirect introdus de prepoziția à și care desemnează o persoană beneficiară."
      },
      {
        "term": "Lui (COI)",
        "def": "Pronume indirect invariabil ce înseamnă atât 'lui' cât și 'ei' (ex: Je lui donne la clé)."
      },
      {
        "term": "Leur (COI)",
        "def": "Pronume indirect plural ('lor'), care se scrie ÎNTOTDEAUNA fără 's' final."
      },
      {
        "term": "Téléphoner à qn",
        "def": "Verb cu regim indirect ce impune un pronume COI (je lui téléphone)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je parle à Thomas",
        "right": "Je lui parle (lui singular)"
      },
      {
        "left": "Je parle à Sophie",
        "right": "Je lui parle (identic pentru feminin!)"
      },
      {
        "left": "J'envoie un mail aux clients",
        "right": "Je leur envoie un mail (leur plural)"
      },
      {
        "left": "Tu me réponds?",
        "right": "Oui, je te réponds tout de suite"
      }
    ],
    "quiz": {
      "question": "Cum înlocuiești 'à mes parents' în fraza 'Je téléphone à mes parents chaque semaine'?",
      "options": [
        "Je leur téléphone chaque semaine. (leur = COI plural)",
        "Je les téléphone chaque semaine.",
        "Je lui téléphone chaque semaine.",
        "Je leurs téléphone chaque semaine."
      ],
      "correctIndex": 0,
      "explanation": "'Téléphoner à' cere COI, iar pentru plural ('mes parents') forma corectă este 'leur' fără -s."
    },
    "task": "Scrie propoziția 'Je téléphone à Marie pour lui donner les clés.' (Îi telefonez Mariei pentru a-i da cheile).",
    "starterCode": "Je téléphone à Marie ",
    "expectedOutputPattern": "Je\\s+t[ée]l[ée]phone\\s+[àa]\\s+Marie\\s+pour\\s+lui\\s+donner\\s+les\\s+cl[ée]s\\.?",
    "hint": "Scrie Je téléphone à Marie pour lui donner les clés.",
    "prompt": "Scrie propoziția 'Je téléphone à Marie pour lui donner les clés.' (Îi telefonez Mariei pentru a-i da cheile).",
    "officialSolution": "Je téléphone à Marie pour lui donner les clés.",
    "example": "Je téléphone à Marie pour lui donner les clés.",
    "regexPattern": "Je\\s+t[ée]l[ée]phone\\s+[àa]\\s+Marie\\s+pour\\s+lui\\s+donner\\s+les\\s+cl[ée]s\\.?"
  },
  {
    "id": "fr-b1-p32",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 40,
    "title": "Capitolul 32: Pronumele Adverbiale „EN” (Cantitate) & „Y” (Loc & à + Lucru)",
    "theory": "\n<p>Pronumele adverbiale <strong>EN</strong> și <strong>Y</strong> sunt specifice limbii franceze și înlocuiesc grupuri prepoziționale esențiale.</p>\n<h4>1. Pronumele „Y” (Acolo / La asta)</h4>\n<ul>\n  <li>Înlocuiește un complement de loc introdus de <em>à, en, dans, chez, sur</em>: <em>Tu vas à Paris? &rarr; Oui, j'<strong>y</strong> vais.</em></li>\n  <li>Înlocuiește un lucru introdus de <em>à</em>: <em>Tu penses à ton avenir? &rarr; Oui, j'<strong>y</strong> pense.</em></li>\n</ul>\n<h4>2. Pronumele „EN” (De acolo / Din asta / Cantitate)</h4>\n<ul>\n  <li>Înlocuiește un substantiv precedat de <em>de / du / de la / des</em>: <em>Tu veux du thé? &rarr; Oui, j'<strong>en</strong> veux.</em></li>\n  <li>Înlocuiește un substantiv însoțit de o cantitate sau număr: <em>Tu as des frères? &rarr; Oui, j'<strong>en</strong> ai deux.</em></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nTu vas au bureau aujourd'hui? Oui, j'y vais en métro.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Pronom Y",
        "def": "Înlocuiește un loc ('acolo') sau o idee/obiect introdus de prepoziția à."
      },
      {
        "term": "Pronom EN",
        "def": "Înlocuiește articole partitive (du, de la), cantități numerice sau expresii cu 'de'."
      },
      {
        "term": "J'y vais",
        "def": "'Merg acolo' — expresie uzuală de deplasare spre un loc stabilit."
      },
      {
        "term": "J'en ai deux",
        "def": "Menționarea cifrei rămâne la final când substantivul este înlocuit cu 'en'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Tu vas chez le médecin?",
        "right": "Oui, j'y vais à 15 heures (loc &rarr; y)"
      },
      {
        "left": "Tu manges des croissants?",
        "right": "Oui, j'en mange le matin (cantitate &rarr; en)"
      },
      {
        "left": "Tu penses à ce projet?",
        "right": "Oui, j'y pense constamment (à + lucru &rarr; y)"
      },
      {
        "left": "Combien de pommes as-tu?",
        "right": "J'en ai trois dans mon sac (en + număr)"
      }
    ],
    "quiz": {
      "question": "Cum răspunzi afirmativ la întrebarea 'Tu veux du café?' folosind pronumele corect?",
      "options": [
        "Oui, j'en veux. (du café &rarr; en)",
        "Oui, je le veux.",
        "Oui, j'y veux.",
        "Oui, je lui veux."
      ],
      "correctIndex": 0,
      "explanation": "Articolul partitiv 'du café' se înlocuiește întotdeauna cu pronumele adverbial 'en'."
    },
    "task": "Scrie replica 'Tu vas au bureau aujourd'hui? Oui, j'y vais en métro.'.",
    "starterCode": "Tu vas au bureau ",
    "expectedOutputPattern": "Tu\\s+vas\\s+au\\s+bureau\\s+aujourd['’]hui\\?\\s*Oui,\\s*j['’]y\\s+vais\\s+en\\s+m[ée]tro\\.?",
    "hint": "Scrie Tu vas au bureau aujourd'hui? Oui, j'y vais en métro.",
    "prompt": "Scrie replica 'Tu vas au bureau aujourd'hui? Oui, j'y vais en métro.'.",
    "officialSolution": "Tu vas au bureau aujourd'hui? Oui, j'y vais en métro.",
    "example": "Tu vas au bureau aujourd'hui? Oui, j'y vais en métro.",
    "regexPattern": "Tu\\s+vas\\s+au\\s+bureau\\s+aujourd['’]hui\\?\\s*Oui,\\s*j['’]y\\s+vais\\s+en\\s+m[ée]tro\\.?"
  },
  {
    "id": "fr-b1-p33",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 40,
    "title": "Capitolul 33: Le Futur Simple — Terminații, Rădăcini Neregulate & Proiecții",
    "theory": "\n<p><strong>Futur Simple</strong> este timpul viitor formal și proiectiv (programe, previziuni, planuri pe termen mediu și lung).</p>\n<h4>1. Formare Regulată</h4>\n<p>Se ia <strong>infinitivul întreg</strong> al verbului și se adaugă terminațiile verbului <em>avoir</em>:</p>\n<p><strong>-ai, -as, -a, -ons, -ez, -ont</strong></p>\n<p>Exemplu: <em>parler &rarr; je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront</em>.</p>\n<h4>2. Rădăcini Neregulate Majore</h4>\n<ul>\n  <li><em>être &rarr; ser-</em> (je serai)</li>\n  <li><em>avoir &rarr; aur-</em> (j'aurai)</li>\n  <li><em>aller &rarr; ir-</em> (j'irai)</li>\n  <li><em>faire &rarr; fer-</em> (je ferai)</li>\n  <li><em>pouvoir &rarr; pourr-</em> (je pourrai)</li>\n  <li><em>vouloir &rarr; voudr-</em> (je voudrai)</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nDemain, nous voyagerons en France et nous visiterons Paris.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Futur Simple",
        "def": "Timpul viitor simplu format din infinitiv + terminațiile -ai, -as, -a, -ons, -ez, -ont."
      },
      {
        "term": "Rădăcină în -r",
        "def": "Toate formele de viitor simplu conțin litera 'r' înainte de terminație."
      },
      {
        "term": "Je serai / J'aurai",
        "def": "Formele de viitor neregulate ale verbelor être și avoir."
      },
      {
        "term": "Projections futures",
        "def": "Previziuni meteorologice, carieră și evenimente oficiale viitoare."
      }
    ],
    "matchingPairs": [
      {
        "left": "Demain je serai là",
        "right": "Mâine voi fi acolo (être)"
      },
      {
        "left": "Nous aurons le temps",
        "right": "Vom avea timp (avoir)"
      },
      {
        "left": "Tu iras en vacances",
        "right": "Vei merge în vacanță (aller)"
      },
      {
        "left": "Ils feront un effort",
        "right": "Ei vor face un efort (faire)"
      }
    ],
    "quiz": {
      "question": "Care este forma de viitor simplu pentru 'Nous' a verbului 'aller'?",
      "options": [
        "Nous irons (rădăcina ir- + -ons)",
        "Nous allerons",
        "Nous allions",
        "Nous vont aller"
      ],
      "correctIndex": 0,
      "explanation": "'Aller' are rădăcina neregulată de viitor 'ir-', deci la nous devine 'nous irons'."
    },
    "task": "Scrie propoziția 'Demain, nous voyagerons en France et nous visiterons Paris.'.",
    "starterCode": "Demain, nous ",
    "expectedOutputPattern": "Demain,\\s*nous\\s+voyagerons\\s+en\\s+France\\s+et\\s+nous\\s+visiterons\\s+Paris\\.?",
    "hint": "Scrie Demain, nous voyagerons en France et nous visiterons Paris.",
    "prompt": "Scrie propoziția 'Demain, nous voyagerons en France et nous visiterons Paris.'.",
    "officialSolution": "Demain, nous voyagerons en France et nous visiterons Paris.",
    "example": "Demain, nous voyagerons en France et nous visiterons Paris.",
    "regexPattern": "Demain,\\s*nous\\s+voyagerons\\s+en\\s+France\\s+et\\s+nous\\s+visiterons\\s+Paris\\.?"
  },
  {
    "id": "fr-b1-p34",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 40,
    "title": "Capitolul 34: Le Conditionnel Présent — Politețe, Dorințe & Sfaturi",
    "theory": "\n<p><strong>Conditionnel Présent</strong> este modul politeții desăvârșite, al dorințelor ipotetice și al sfaturilor prietenești.</p>\n<h4>1. Rețeta Matematică de Formare</h4>\n<p><code>Rădăcina de viitor simplu + Terminațiile de Imparfait</code>:</p>\n<p><strong>-ais, -ais, -ait, -ions, -iez, -aient</strong></p>\n<p>Exemple: <em>vouloir &rarr; je voudr<strong>ais</strong></em> (aș dori); <em>pouvoir &rarr; pourr- &rarr; pourr<strong>iez</strong>-vous?</em> (ați putea?).</p>\n<h4>2. Utilizări Esențiale</h4>\n<ul>\n  <li>Politețe la restaurant/hotel: <em>Je voudrais un café</em> (în loc de agresivul 'je veux').</li>\n  <li>Sfat: <em>Tu devrais faire du sport</em> (ar trebui să faci sport).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe voudrais réserver une table pour deux personnes, s'il vous plaît.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Conditionnel Présent",
        "def": "Modul folosit pentru cereri politicoase, dorințe și ipoteze."
      },
      {
        "term": "Je voudrais",
        "def": "Formula universală de politețe la comandă ('Aș dori...')."
      },
      {
        "term": "Pourriez-vous...?",
        "def": "'Ați putea să...?' — cerere respectuoasă la adresa unei persoane necunoscute."
      },
      {
        "term": "Tu devrais",
        "def": "'Ar trebui să...' — formularea unui sfat sau a unei recomandări amicale."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je voudrais un café",
        "right": "Aș dori o cafea (politețe)"
      },
      {
        "left": "Pourriez-vous m'aider?",
        "right": "Ați putea să mă ajutați? (cerere respectuoasă)"
      },
      {
        "left": "J'aimerais voyager",
        "right": "Mi-ar plăcea să călătoresc (dorință)"
      },
      {
        "left": "Tu devrais te reposer",
        "right": "Ar trebui să te odihnești (sfat)"
      }
    ],
    "quiz": {
      "question": "Cum soliciți politicos un pahar cu apă într-o cafenea la Paris?",
      "options": [
        "Je voudrais un verre d'eau, s'il vous plaît.",
        "Je veux un verre d'eau immédiatement.",
        "J'ai un verre d'eau.",
        "Je prendrai de l'eau maintenant."
      ],
      "correctIndex": 0,
      "explanation": "'Je voudrais' la modul condițional este formula consacrată de politețe în franceză."
    },
    "task": "Scrie comanda 'Je voudrais réserver une table pour deux personnes, s'il vous plaît.'.",
    "starterCode": "Je voudrais réserver ",
    "expectedOutputPattern": "Je\\s+voudrais\\s+r[ée]server\\s+une\\s+table\\s+pour\\s+deux\\s+personnes,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
    "hint": "Scrie Je voudrais réserver une table pour deux personnes, s'il vous plaît.",
    "prompt": "Scrie comanda 'Je voudrais réserver une table pour deux personnes, s'il vous plaît.'.",
    "officialSolution": "Je voudrais réserver une table pour deux personnes, s'il vous plaît.",
    "example": "Je voudrais réserver une table pour deux personnes, s'il vous plaît.",
    "regexPattern": "Je\\s+voudrais\\s+r[ée]server\\s+une\\s+table\\s+pour\\s+deux\\s+personnes,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?"
  },
  {
    "id": "fr-b1-p35",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 40,
    "title": "Capitolul 35: Pronumele Relative Simple: QUI, QUE, OÙ, DONT",
    "theory": "\n<p>Pronumele relative leagă două propoziții, evitând repetiția inutilă a unui substantiv.</p>\n<h4>1. QUI vs QUE</h4>\n<ul>\n  <li><code>QUI</code> = subiectul propoziției relative (este <strong>urmat de un verb</strong>): <em>C'est l'homme <strong>qui parle</strong>.</em></li>\n  <li><code>QUE (QU')</code> = complement direct (este <strong>urmat de un subiect + verb</strong>): <em>C'est le livre <strong>que je lis</strong>.</em></li>\n</ul>\n<h4>2. OÙ & DONT</h4>\n<ul>\n  <li><code>OÙ</code> = loc sau timp: <em>La ville <strong>où j'habite</strong></em>; <em>Le jour <strong>où je suis né</strong></em>.</li>\n  <li><code>DONT</code> = înlocuiește un complement introdus de <strong>de</strong> (<em>parler de, avoir besoin de, être fier de</em>): <em>C'est le projet <strong>dont je parle</strong></em>.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nC'est l'ami qui m'aide et le livre que je lis.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Qui (relatif)",
        "def": "Pronume relativ cu rol de subiect, urmat nemijlocit de verb."
      },
      {
        "term": "Que / Qu'",
        "def": "Pronume relativ cu rol de complement direct, urmat de subiect și predicat."
      },
      {
        "term": "Dont",
        "def": "Pronume relativ ce înlocuiește un substantiv guvernat de prepoziția 'de'."
      },
      {
        "term": "Où",
        "def": "Pronume relativ de spațiu ('unde') sau de timp ('când')."
      }
    ],
    "matchingPairs": [
      {
        "left": "Le collègue qui travaille ici",
        "right": "Colegul care lucrează aici (qui + verb)"
      },
      {
        "left": "Le film que nous regardons",
        "right": "Filmul pe care îl privim (que + subiect)"
      },
      {
        "left": "La maison où je suis né",
        "right": "Casa unde m-am născut (où = loc)"
      },
      {
        "left": "Le livre dont j'ai besoin",
        "right": "Cartea de care am nevoie (avoir besoin de)"
      }
    ],
    "quiz": {
      "question": "În fraza 'Voici la voiture ... j'ai achetée hier', ce pronume relativ trebuie inserat?",
      "options": [
        "que (urmat de subiectul 'j'')",
        "qui",
        "dont",
        "où"
      ],
      "correctIndex": 0,
      "explanation": "Mașina este complementul direct al verbului cumpărat de mine (j'ai achetée), deci folosim 'que'."
    },
    "task": "Scrie fraza 'C'est l'ami qui m'aide et le livre que je lis.'.",
    "starterCode": "C'est l'ami ",
    "expectedOutputPattern": "C['’]est\\s+l['’]ami\\s+qui\\s+m['’]aide\\s+et\\s+le\\s+livre\\s+que\\s+je\\s+lis\\.?",
    "hint": "Scrie C'est l'ami qui m'aide et le livre que je lis.",
    "prompt": "Scrie fraza 'C'est l'ami qui m'aide et le livre que je lis.'.",
    "officialSolution": "C'est l'ami qui m'aide et le livre que je lis.",
    "example": "C'est l'ami qui m'aide et le livre que je lis.",
    "regexPattern": "C['’]est\\s+l['’]ami\\s+qui\\s+m['’]aide\\s+et\\s+le\\s+livre\\s+que\\s+je\\s+lis\\.?"
  },
  {
    "id": "fr-b1-p36",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 45,
    "title": "Capitolul 36: Conectori Logici: Cauză, Consecință & Opoziție",
    "theory": "\n<p>Pentru a structura un discurs coerent și nuanțat la nivelul B1/B2, este indispensabilă folosirea conectorilor logici.</p>\n<h4>1. Cauza (De ce?)</h4>\n<ul>\n  <li><code>Parce que</code> + frază: <em>Je reste chez moi parce qu'il pleut.</em></li>\n  <li><code>Puisque</code> = de vreme ce / fiindcă (cauză cunoscută de ambii interlocutori).</li>\n  <li><code>Grâce à</code> + substantiv (cauză pozitivă): <em>Grâce à son aide, j'ai réussi.</em></li>\n  <li><code>À cause de</code> + substantiv (cauză negativă): <em>À cause de la grève, le train est annulé.</em></li>\n</ul>\n<h4>2. Consecința & Opoziția</h4>\n<ul>\n  <li>Consecință: <code>Donc</code> (deci), <code>Par conséquent</code> (prin urmare).</li>\n  <li>Opoziție: <code>Mais</code> (dar), <code>Cependant / Pourtant</code> (totuși, cu toate acestea).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nIl fait froid, donc je mets un manteau chaud.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Grâce à (+)",
        "def": "Datorită (folosit exclusiv pentru cauze cu consecințe favorabile)."
      },
      {
        "term": "À cause de (-)",
        "def": "Din cauza (folosit pentru factori perturbatori sau negativi)."
      },
      {
        "term": "Donc / Par conséquent",
        "def": "Conectori logici fundamentali de exprimare a deducției și consecinței."
      },
      {
        "term": "Cependant",
        "def": "Conector formal de opoziție echivalent cu 'totuși' sau 'cu toate acestea'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Grâce à mon travail",
        "right": "Datorită muncii mele (pozitiv)"
      },
      {
        "left": "À cause de la pluie",
        "right": "Din cauza ploii (negativ)"
      },
      {
        "left": "Il étudie, donc il réussit",
        "right": "El învață, deci reușește (consecință)"
      },
      {
        "left": "Il est fatigué, pourtant il continue",
        "right": "E obosit, totuși continuă (opoziție)"
      }
    ],
    "quiz": {
      "question": "Ce conector cauzal folosești în: 'J'ai obtenu ce poste ... mes compétences en informatique'?",
      "options": [
        "grâce à (cauză pozitivă și favorabilă)",
        "à cause de",
        "parce que",
        "donc"
      ],
      "correctIndex": 0,
      "explanation": "'Grâce à' se folosește în fața unui substantiv atunci când rezultatul este un succes pozitiv."
    },
    "task": "Scrie fraza 'Il fait froid, donc je mets un manteau chaud.' (Este frig, deci îmi pun o haină călduroasă).",
    "starterCode": "Il fait froid, ",
    "expectedOutputPattern": "Il\\s+fait\\s+froid,\\s*donc\\s+je\\s+mets\\s+un\\s+manteau\\s+chaud\\.?",
    "hint": "Scrie Il fait froid, donc je mets un manteau chaud.",
    "prompt": "Scrie fraza 'Il fait froid, donc je mets un manteau chaud.' (Este frig, deci îmi pun o haină călduroasă).",
    "officialSolution": "Il fait froid, donc je mets un manteau chaud.",
    "example": "Il fait froid, donc je mets un manteau chaud.",
    "regexPattern": "Il\\s+fait\\s+froid,\\s*donc\\s+je\\s+mets\\s+un\\s+manteau\\s+chaud\\.?"
  },
  {
    "id": "fr-b1-p37",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 45,
    "title": "Capitolul 37: Conversație Intermediară: La Medic, Farmacie & Situații Urgente",
    "theory": "\n<p>Să consolidăm întregul Modul B1–B2 printr-un scenariu practic din viața reală: consultul medical și cumpărarea medicamentelor în Franța.</p>\n<h4>1. Replicile Pacientului</h4>\n<ul>\n  <li><em>Docteur, je ne me sens pas bien depuis hier.</em> (Nu mă simt bine de ieri.)</li>\n  <li><em>J'ai mal à la gorge, j'ai de la fièvre et je tousse.</em> (Mă doare în gât, am febră și tușesc.)</li>\n  <li><em>Est-ce que c'est grave?</em> (Este grav?)</li>\n</ul>\n<h4>2. Replicile Medicului & Farmacistului</h4>\n<ul>\n  <li><em>Ouvrez la bouche et respirez fort. C'est une angine.</em></li>\n  <li><em>Voici votre ordonnance. Prenez un comprimé trois fois par jour avant les repas.</em></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJ'ai mal à la gorge et j'ai besoin d'une ordonnance médicale.\n</code></pre>\n",
    "glossary": [
      {
        "term": "une ordonnance",
        "def": "Rețetă medicală eliberată de medic pentru farmacie."
      },
      {
        "term": "un comprimé",
        "def": "O pastilă sau comprimat medicamentos."
      },
      {
        "term": "tousser / avoir de la fièvre",
        "def": "A tuși / a avea temperatură/febră."
      },
      {
        "term": "trois fois par jour",
        "def": "De trei ori pe zi (frecvența de administrare a tratamentului)."
      }
    ],
    "matchingPairs": [
      {
        "left": "J'ai mal à la gorge",
        "right": "Mă doare în gât"
      },
      {
        "left": "Prenez un comprimé",
        "right": "Luați un comprimat"
      },
      {
        "left": "Avant les repas",
        "right": "Înainte de mese"
      },
      {
        "left": "Voici votre ordonnance",
        "right": "Iată rețeta dumneavoastră"
      }
    ],
    "quiz": {
      "question": "Cum îi spui medicului în franceză că ai o durere acută de gât și ai nevoie de o rețetă?",
      "options": [
        "J'ai mal à la gorge et j'ai besoin d'une ordonnance.",
        "Je suis mal gorge et veux papier.",
        "J'ai douleur gorge avec médicament.",
        "Mon gorge est cassé."
      ],
      "correctIndex": 0,
      "explanation": "Construcția corectă este 'J'ai mal à la gorge' urmată de substantivul 'une ordonnance'."
    },
    "task": "Scrie propoziția 'J'ai mal à la gorge et j'ai besoin d'une ordonnance médicale.'.",
    "starterCode": "J'ai mal à la gorge ",
    "expectedOutputPattern": "J['’]ai\\s+mal\\s+[àa]\\s+la\\s+gorge\\s+et\\s+j['’]ai\\s+besoin\\s+d['’]une\\s+ordonnance\\s+m[ée]dicale\\.?",
    "hint": "Scrie J'ai mal à la gorge et j'ai besoin d'une ordonnance médicale.",
    "prompt": "Scrie propoziția 'J'ai mal à la gorge et j'ai besoin d'une ordonnance médicale.'.",
    "officialSolution": "J'ai mal à la gorge et j'ai besoin d'une ordonnance médicale.",
    "example": "J'ai mal à la gorge et j'ai besoin d'une ordonnance médicale.",
    "regexPattern": "J['’]ai\\s+mal\\s+[àa]\\s+la\\s+gorge\\s+et\\s+j['’]ai\\s+besoin\\s+d['’]une\\s+ordonnance\\s+m[ée]dicale\\.?"
  },
  {
    "id": "fr-c1-p38",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 50,
    "title": "Capitolul 38: Le Subjonctif Présent — Necesitate, Voință & Declanșatori Canonici",
    "theory": "\n<p><strong>Subjonctif</strong> nu este un timp, ci <strong>modul subiectivității</strong>, al incertitudinii, al dorinței, sentimentelor și necesității.</p>\n<h4>1. Declanșatori Canonici Obligatorii</h4>\n<ul>\n  <li>Necesitate / Obligație: <em>Il faut que...</em>, <em>Il est impératif que...</em></li>\n  <li>Voință / Dorință: <em>Je veux que...</em>, <em>J'exige que...</em></li>\n  <li>Sentiment / Temere: <em>Je suis ravi que...</em>, <em>J'ai peur que...</em></li>\n</ul>\n<h4>2. Regula Universală de Formare</h4>\n<p>Se ia rădăcina persoanei a 3-a plural de la prezent (<em>ils finiss-ent</em>) și se adaugă terminațiile:</p>\n<p><strong>-e, -es, -e, -ions, -iez, -ent</strong></p>\n<p>Excepții esențiale: <em>faire &rarr; que je fasse</em>; <em>être &rarr; que je sois</em>; <em>avoir &rarr; que j'aie</em>; <em>aller &rarr; que j'aille</em>.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nIl faut que vous fassiez attention à tous les détails.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Le Subjonctif",
        "def": "Mod gramatical cerut de expresii ce denotă voință, îndoială, necesitate sau emoție."
      },
      {
        "term": "Il faut que + subj.",
        "def": "Construcție impersonală obligatorie ce impune întotdeauna modul conjunctiv."
      },
      {
        "term": "Que je fasse",
        "def": "Forma neregulată de subjonctif a verbului faire."
      },
      {
        "term": "Double sujet obligatoire",
        "def": "Subjonctif se folosește când subiectul din propoziția principală diferă de cel din secundară."
      }
    ],
    "matchingPairs": [
      {
        "left": "Il faut que tu fasses attention",
        "right": "Subjonctif de la faire (fasses)"
      },
      {
        "left": "Je veux que tu viennes",
        "right": "Subjonctif de la venir (viennes)"
      },
      {
        "left": "Il est temps que nous partions",
        "right": "Subjonctif de la partir (partions)"
      },
      {
        "left": "Bien que nous soyons prêts",
        "right": "Subjonctif de la être (soyons)"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă de subjonctif a verbului 'faire' pentru pronumele 'vous'?",
      "options": [
        "fassiez (Il faut que vous fassiez)",
        "faisez",
        "faites",
        "fassent"
      ],
      "correctIndex": 0,
      "explanation": "Rădăcina neregulată a verbului faire la subjonctif este fass-, primind terminația -iez pentru vous: fassiez."
    },
    "task": "Scrie cerința 'Il faut que vous fassiez attention à tous les détails.' (Trebuie să fiți atent la toate detaliile).",
    "starterCode": "Il faut que vous ",
    "expectedOutputPattern": "Il\\s+faut\\s+que\\s+vous\\s+fassiez\\s+attention\\s+[àa]\\s+tous\\s+les\\s+d[ée]tails\\.?",
    "hint": "Scrie Il faut que vous fassiez attention à tous les détails.",
    "prompt": "Scrie cerința 'Il faut que vous fassiez attention à tous les détails.' (Trebuie să fiți atent la toate detaliile).",
    "officialSolution": "Il faut que vous fassiez attention à tous les détails.",
    "example": "Il faut que vous fassiez attention à tous les détails.",
    "regexPattern": "Il\\s+faut\\s+que\\s+vous\\s+fassiez\\s+attention\\s+[àa]\\s+tous\\s+les\\s+d[ée]tails\\.?"
  },
  {
    "id": "fr-c1-p39",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 50,
    "title": "Capitolul 39: Subjonctif vs Indicatif — Certitudine vs Îndoială (Penser que vs Douter que)",
    "theory": "\n<p>La nivelul C1, nuanța dintre certitudine și dubiu determină alegerea dintre indicativ și subjonctif.</p>\n<h4>1. Verbele de Opinie & Gândire</h4>\n<ul>\n  <li>Forma Afirmativă (Certitudine) &rarr; <strong>INDICATIF</strong>:<br>\n  <em>Je pense qu'il <strong>sait</strong> la vérité.</em> (Sunt sigur)</li>\n  <li>Forma Negativă sau Interogativă (Îndoială) &rarr; <strong>SUBJONCTIF</strong>:<br>\n  <em>Je ne pense pas qu'il <strong>sache</strong> la vérité.</em> (Mă îndoiesc)</li>\n</ul>\n<h4>2. Douter que vs Se douter que</h4>\n<p><em>Je doute qu'il <strong>vienne</strong></em> (mă îndoiesc &rarr; subjonctif) vs <em>Je me doute qu'il <strong>viendra</strong></em> (bănuiesc / știu &rarr; indicatif).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJe ne pense pas qu'il sache la réponse exacte.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Certitude & Indicatif",
        "def": "Expresiile de certitudine (je sais que, il est certain que) cer modul indicativ."
      },
      {
        "term": "Doute & Subjonctif",
        "def": "Îndoiala (je ne crois pas que, je doute que) impune întotdeauna modul conjunctiv."
      },
      {
        "term": "Sache",
        "def": "Forma neregulată de subjonctif a verbului savoir (je ne pense pas qu'il sache)."
      },
      {
        "term": "Nuance de modalité",
        "def": "Schimbarea modului verbal modifică gradul de siguranță asumat de vorbitor."
      }
    ],
    "matchingPairs": [
      {
        "left": "Je pense qu'il a raison",
        "right": "Indicatif (convingere afirmativă)"
      },
      {
        "left": "Je ne pense pas qu'il ait raison",
        "right": "Subjonctif (incertitudine la forma negativă)"
      },
      {
        "left": "Il est évident que c'est vrai",
        "right": "Indicatif (evidență obiectivă)"
      },
      {
        "left": "Il est douteux que ce soit vrai",
        "right": "Subjonctif (caracter îndoielnic)"
      }
    ],
    "quiz": {
      "question": "Ce mod și formă se folosește în fraza 'Je ne crois pas qu'elle ... la bonne décision' pentru verbul 'prendre'?",
      "options": [
        "prenne (Subjonctif présent cerut de ne pas croire que)",
        "prend (Indicatif)",
        "prendra (Futur)",
        "prenait (Imparfait)"
      ],
      "correctIndex": 0,
      "explanation": "La forma negativă, 'ne pas croire que' declanșează obligatoriu subjonctif: 'qu'elle prenne'."
    },
    "task": "Scrie propoziția 'Je ne pense pas qu'il sache la réponse exacte.' (Nu cred că el știe răspunsul exact).",
    "starterCode": "Je ne pense pas ",
    "expectedOutputPattern": "Je\\s+ne\\s+pense\\s+pas\\s+qu['’]il\\s+sache\\s+la\\s+r[ée]ponse\\s+exacte\\.?",
    "hint": "Scrie Je ne pense pas qu'il sache la réponse exacte.",
    "prompt": "Scrie propoziția 'Je ne pense pas qu'il sache la réponse exacte.' (Nu cred că el știe răspunsul exact).",
    "officialSolution": "Je ne pense pas qu'il sache la réponse exacte.",
    "example": "Je ne pense pas qu'il sache la réponse exacte.",
    "regexPattern": "Je\\s+ne\\s+pense\\s+pas\\s+qu['’]il\\s+sache\\s+la\\s+r[ée]ponse\\s+exacte\\.?"
  },
  {
    "id": "fr-c1-p40",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 50,
    "title": "Capitolul 40: Frazele Ipotetice cu „SI” (Si + Présent, Si + Imparfait, Si + Plus-que-parfait)",
    "theory": "\n<p>Concordanța timpurilor în frazele condiționale introduse de <strong>SI</strong> este o regulă de aur: <em>„Si” n'aime pas les „-rais”!</em> (După „si” nu se pune NICIODATĂ viitor sau condițional!).</p>\n<h4>1. Cele 3 Tipuri Fundamentale de Ipoteză</h4>\n<ol>\n  <li><strong>Ipotetic Real / Posibil:</strong><br>\n  <code>Si + Présent &rarr; Futur Simple</code><br>\n  <em>Si j'ai le temps, je viendrai te voir.</em></li>\n  <li><strong>Ipotetic Ireál în Prezent (Condiție Nerealizată Acum):</strong><br>\n  <code>Si + Imparfait &rarr; Conditionnel Présent</code><br>\n  <em>Si j'avais de l'argent, j'achèterais cette maison.</em></li>\n  <li><strong>Ipotetic Ireál în Trecut (Regret Trecut):</strong><br>\n  <code>Si + Plus-que-parfait &rarr; Conditionnel Passé</code><br>\n  <em>Si j'avais su, je serais venu.</em></li>\n</ol>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nSi j'avais plus de temps, j'apprendrais le français chaque jour.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Hypothèse réalisable",
        "def": "Si + prezent urmat de viitor simplu pentru acțiuni posibile în viitor."
      },
      {
        "term": "Irréel du présent",
        "def": "Si + imperfect urmat de condițional prezent pentru situații imaginare actuale."
      },
      {
        "term": "Irréel du passé",
        "def": "Si + mai mult ca perfect urmat de condițional trecut pentru regrete definitive."
      },
      {
        "term": "Interdiction du futur après SI",
        "def": "Regulă strictă: conjuncția condițională 'si' nu poate fi urmată de -rai sau -rais."
      }
    ],
    "matchingPairs": [
      {
        "left": "Si tu veux, nous irons au cinéma",
        "right": "Si + présent &rarr; futur simple"
      },
      {
        "left": "Si j'étais riche, je voyagerais",
        "right": "Si + imparfait &rarr; conditionnel présent"
      },
      {
        "left": "Si tu avais travaillé, tu aurais réussi",
        "right": "Si + plus-que-parfait &rarr; conditionnel passé"
      },
      {
        "left": "Si vous avez faim, mangez!",
        "right": "Si + présent &rarr; impératif"
      }
    ],
    "quiz": {
      "question": "Care este continuarea corectă a frazei 'Si j'avais le choix, je ... en Italie'?",
      "options": [
        "vivrais (Conditionnel présent acordat cu Si + imparfait)",
        "vivrai (Futur simple)",
        "vis (Présent)",
        "aurais vécu"
      ],
      "correctIndex": 0,
      "explanation": "După 'Si + imparfait' (avais), propoziția principală cere în mod obligatoriu condiționalul prezent: vivrais."
    },
    "task": "Scrie fraza ipotetică 'Si j'avais plus de temps, j'apprendrais le français chaque jour.'.",
    "starterCode": "Si j'avais plus de temps, ",
    "expectedOutputPattern": "Si\\s+j['’]avais\\s+plus\\s+de\\s+temps,\\s*j['’]apprendrais\\s+le\\s+fran[çc]ais\\s+chaque\\s+jour\\.?",
    "hint": "Scrie Si j'avais plus de temps, j'apprendrais le français chaque jour.",
    "prompt": "Scrie fraza ipotetică 'Si j'avais plus de temps, j'apprendrais le français chaque jour.'.",
    "officialSolution": "Si j'avais plus de temps, j'apprendrais le français chaque jour.",
    "example": "Si j'avais plus de temps, j'apprendrais le français chaque jour.",
    "regexPattern": "Si\\s+j['’]avais\\s+plus\\s+de\\s+temps,\\s*j['’]apprendrais\\s+le\\s+fran[çc]ais\\s+chaque\\s+jour\\.?"
  },
  {
    "id": "fr-c1-p41",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 55,
    "title": "Capitolul 41: Vocea Pasivă & Formele Pasive Reflexive",
    "theory": "\n<p>Vocea pasivă este folosită intens în articolele de presă, documentele administrative și stilul științific din Franța.</p>\n<h4>1. Formarea Vocii Pasive</h4>\n<p><code>Subiect pacient + ÊTRE (la orice timp) + Participiu trecut (acordat!) + PAR + Agent</code>.</p>\n<ul>\n  <li>Prezent: <em>Le pont <strong>est construit</strong> par les ingénieurs.</em></li>\n  <li>Passé Composé: <em>Le musée <strong>a été inauguré</strong> par le président.</em></li>\n  <li>Futur Simple: <em>Le rapport <strong>sera publié</strong> demain.</em></li>\n</ul>\n<h4>2. Pasiva Reflexivă Impersonală</h4>\n<p>Când autorul acțiunii este nedeterminat, franceza preferă forma pronominală pasivă: <em>Ce vin <strong>se boit</strong> frais</em> (Acest vin se bea rece).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nCe projet a été réalisé avec succès par notre équipe.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Voix passive",
        "def": "Construcție sintactică ce evidențiază obiectul asupra căruia se răsfrânge acțiunea."
      },
      {
        "term": "Complément d'agent",
        "def": "Autorul acțiunii pasive introdus prin prepoziția 'par' sau 'de'."
      },
      {
        "term": "A été inauguré",
        "def": "Trecutul compus al vocii pasive (a été + participiu acordat)."
      },
      {
        "term": "Passif pronominal",
        "def": "Formă reflexivă cu valoare pasivă impersonală (ex: Cela ne se dit pas)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Le texte a été écrit par Paul",
        "right": "Textul a fost scris de Paul"
      },
      {
        "left": "La décision sera prise demain",
        "right": "Decizia va fi luată mâine"
      },
      {
        "left": "Ce livre se lit facilement",
        "right": "Această carte se citește ușor (pasiv reflexiv)"
      },
      {
        "left": "La maison est entourée d'arbres",
        "right": "Casa este înconjurată de copaci"
      }
    ],
    "quiz": {
      "question": "Cum se traduce la diateza pasivă trecută 'Acest proiect a fost realizat de echipa noastră'?",
      "options": [
        "Ce projet a été réalisé par notre équipe.",
        "Ce projet est réalisé notre équipe.",
        "Ce projet avait réaliser par équipe.",
        "Ce projet a réaliser de équipe."
      ],
      "correctIndex": 0,
      "explanation": "Structura de passé composé la pasiv este 'a été' urmat de participiul trecut acordat 'réalisé'."
    },
    "task": "Scrie propoziția 'Ce projet a été réalisé avec succès par notre équipe.'.",
    "starterCode": "Ce projet a été réalisé ",
    "expectedOutputPattern": "Ce\\s+projet\\s+a\\s+[ée]t[ée]\\s+r[ée]alis[ée]\\s+avec\\s+succ[èe]s\\s+par\\s+notre\\s+[ée]quipe\\.?",
    "hint": "Scrie Ce projet a été réalisé avec succès par notre équipe.",
    "prompt": "Scrie propoziția 'Ce projet a été réalisé avec succès par notre équipe.'.",
    "officialSolution": "Ce projet a été réalisé avec succès par notre équipe.",
    "example": "Ce projet a été réalisé avec succès par notre équipe.",
    "regexPattern": "Ce\\s+projet\\s+a\\s+[ée]t[ée]\\s+r[ée]alis[ée]\\s+avec\\s+succ[èe]s\\s+par\\s+notre\\s+[ée]quipe\\.?"
  },
  {
    "id": "fr-c1-p42",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 55,
    "title": "Capitolul 42: Le Gérondif & Le Participe Présent — Simultaneitate & Modalitate",
    "theory": "\n<p><strong>Le Gérondif</strong> și <strong>Le Participe Présent</strong> conferă fluiditate și eleganță frazei franceze, sintetizând idei complexe într-o singură propoziție.</p>\n<h4>1. Le Gérondif (EN + Participiu Prezent)</h4>\n<p>Se formează din: <code>EN + Rădăcina 'nous' de la prezent + -ANT</code>.</p>\n<ul>\n  <li><strong>Simultaneitate:</strong> <em>Il écoute de la musique <strong>en travaillant</strong>.</em> (Ascultă muzică în timp ce lucrează.)</li>\n  <li><strong>Mijloc / Modalitate:</strong> <em>C'est <strong>en forgeant</strong> qu'on devient forgeron.</em> (Practicând devii meșter.)</li>\n  <li><strong>Condiție:</strong> <em><strong>En faisant</strong> des efforts, vous réussirez.</em></li>\n</ul>\n<h4>2. Regula Subiectului Identic</h4>\n<p>Gérondif-ul cere obligatoriu ca subiectul acțiunii principale să fie identic cu cel al acțiunii secundare.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJ'ai appris le français en écoutant des podcasts tous les jours.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Le Gérondif",
        "def": "Formă verbală invariabilă precedată de prepoziția 'en' ce exprimă simultaneitatea sau modul."
      },
      {
        "term": "Terminația -ant",
        "def": "Terminația participiului prezent și a gerunziului obținută din rădăcina persoanei nous."
      },
      {
        "term": "Simultanéité",
        "def": "Două acțiuni realizate în același timp de către același subiect."
      },
      {
        "term": "En apprenant",
        "def": "Învățând / în timp ce înveți (gerunziul verbului apprendre)."
      }
    ],
    "matchingPairs": [
      {
        "left": "En écoutant la radio",
        "right": "Ascultând radioul (în timp ce ascultă)"
      },
      {
        "left": "En prenant le métro",
        "right": "Luând metroul (mijloc)"
      },
      {
        "left": "En faisant du sport",
        "right": "Făcând sport"
      },
      {
        "left": "Tout en souriant",
        "right": "Zâmbind în tot acest timp (emfază)"
      }
    ],
    "quiz": {
      "question": "Cum se formează gerunziul verbului 'écouter' (nous écoutons)?",
      "options": [
        "en écoutant (en + écout- + -ant)",
        "écoutant",
        "en écouté",
        "en écouter"
      ],
      "correctIndex": 0,
      "explanation": "Gérondif-ul se formează întotdeauna din prepoziția 'en' urmată de participiul prezent în '-ant': en écoutant."
    },
    "task": "Scrie mărturisirea 'J'ai appris le français en écoutant des podcasts tous les jours.'.",
    "starterCode": "J'ai appris le français ",
    "expectedOutputPattern": "J['’]ai\\s+appris\\s+le\\s+fran[çc]ais\\s+en\\s+[ée]coutant\\s+des\\s+podcasts\\s+tous\\s+les\\s+jours\\.?",
    "hint": "Scrie J'ai appris le français en écoutant des podcasts tous les jours.",
    "prompt": "Scrie mărturisirea 'J'ai appris le français en écoutant des podcasts tous les jours.'.",
    "officialSolution": "J'ai appris le français en écoutant des podcasts tous les jours.",
    "example": "J'ai appris le français en écoutant des podcasts tous les jours.",
    "regexPattern": "J['’]ai\\s+appris\\s+le\\s+fran[çc]ais\\s+en\\s+[ée]coutant\\s+des\\s+podcasts\\s+tous\\s+les\\s+jours\\.?"
  },
  {
    "id": "fr-c1-p43",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 60,
    "title": "Capitolul 43: Discursul Indirect în Trecut & Concordanța Timpurilor",
    "theory": "\n<p>Raportarea spuselor cuiva într-un context narativ trecut cere aplicarea strictă a concordanței timpurilor (<em>la concordance des temps</em>).</p>\n<h4>1. Schimbările de Timp când Verbul Introductiv este la Trecut</h4>\n<ul>\n  <li>Prezent &rarr; <strong>Imparfait</strong>:<br>\n  <em>Il a dit: « Je suis fatigué » &rarr; Il a dit qu'il <strong>était</strong> fatigué.</em></li>\n  <li>Passé Composé &rarr; <strong>Plus-que-parfait</strong>:<br>\n  <em>Il a dit: « J'ai fini » &rarr; Il a dit qu'il <strong>avait fini</strong>.</em></li>\n  <li>Futur Simple &rarr; <strong>Conditionnel Présent</strong>:<br>\n  <em>Il a dit: « Je viendrai » &rarr; Il a dit qu'il <strong>viendrait</strong>.</em></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nIl m'a expliqué qu'il viendrait demain matin à huit heures.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Discours indirect au passé",
        "def": "Raportarea replicilor când verbul de declarație (a dit, a expliqué) este la trecut."
      },
      {
        "term": "Futur dans le passé",
        "def": "Condiționalul prezent folosit pentru a exprima o acțiune viitoare din perspectiva trecutului."
      },
      {
        "term": "Plus-que-parfait",
        "def": "Timpul mai mult ca perfect (avais/étais + participiu) ce exprimă o anterioritate absolută."
      },
      {
        "term": "Verbe introducteur",
        "def": "Verbul de comunicare (dire, affirmer, expliquer, demander) ce declanșează concordanța."
      }
    ],
    "matchingPairs": [
      {
        "left": "Il a dit: 'Je pars' &rarr;",
        "right": "Il a dit qu'il partait (imparfait)"
      },
      {
        "left": "Il a dit: 'Je partirai' &rarr;",
        "right": "Il a dit qu'il partirait (conditionnel)"
      },
      {
        "left": "Il a dit: 'Je suis parti' &rarr;",
        "right": "Il a dit qu'il était parti (plus-que-parfait)"
      },
      {
        "left": "Il a demandé si...",
        "right": "Întrebare indirectă (fără inversiune)"
      }
    ],
    "quiz": {
      "question": "Cum transpui la vorbire indirectă trecută replica: Paul a affirmé: « Je téléphonerai à midi »?",
      "options": [
        "Paul a affirmé qu'il téléphonerait à midi. (futur &rarr; conditionnel présent)",
        "Paul a affirmé qu'il téléphonera à midi.",
        "Paul a affirmé qu'il téléphonait à midi.",
        "Paul a affirmé qu'il a téléphoné à midi."
      ],
      "correctIndex": 0,
      "explanation": "După un verb introductiv la trecut (a affirmé), timpul viitor 'téléphonerai' devine condițional prezent: 'téléphonerait'."
    },
    "task": "Scrie fraza indirectă 'Il m'a expliqué qu'il viendrait demain matin à huit heures.'.",
    "starterCode": "Il m'a expliqué qu'il ",
    "expectedOutputPattern": "Il\\s+m['’]a\\s+expliqu[ée]\\s+qu['’]il\\s+viendrait\\s+demain\\s+matin\\s+[àa]\\s+huit\\s+heures\\.?",
    "hint": "Scrie Il m'a expliqué qu'il viendrait demain matin à huit heures.",
    "prompt": "Scrie fraza indirectă 'Il m'a expliqué qu'il viendrait demain matin à huit heures.'.",
    "officialSolution": "Il m'a expliqué qu'il viendrait demain matin à huit heures.",
    "example": "Il m'a expliqué qu'il viendrait demain matin à huit heures.",
    "regexPattern": "Il\\s+m['’]a\\s+expliqu[ée]\\s+qu['’]il\\s+viendrait\\s+demain\\s+matin\\s+[àa]\\s+huit\\s+heures\\.?"
  },
  {
    "id": "fr-c1-p44",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 60,
    "title": "Capitolul 44: Expresii Idiomatice Majore din Hexagon & Nuanțe Argotice",
    "theory": "\n<p>Atingerea nivelului de măiestrie lingvistică (C1/C2) presupune înțelegerea metaforelor și a expresiilor idiomatice specifice culturii franceze contemporane.</p>\n<h4>1. Metafore Clinice & Cotidiene</h4>\n<ul>\n  <li><code>Avoir le cafard</code> &mdash; a fi deprimat, trist, melancolic.</li>\n  <li><code>Poser un lapin à quelqu'un</code> &mdash; a lipsi nemotivat de la o întâlnire stabilită.</li>\n  <li><code>Coûter les yeux de la tête</code> &mdash; a fi exorbitant de scump, a costa o avere.</li>\n  <li><code>Tomber dans les pommes</code> &mdash; a leșina, a-și pierde cunoștința.</li>\n  <li><code>Casser les pieds à quelqu'un</code> &mdash; a agasa, a enerva peste măsură.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nÇa coûte les yeux de la tête mais c'est d'une qualité exceptionnelle.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Avoir le cafard",
        "def": "Expresie idiomatică franceză celebră ce desemnează o stare de melancolie sau tristețe profundă."
      },
      {
        "term": "Coûter les yeux de la tête",
        "def": "Echivalentul francez pentru 'costă o avere'."
      },
      {
        "term": "Poser un lapin",
        "def": "A nu te prezenta la întâlnirea pe care ai fixat-o cu o altă persoană."
      },
      {
        "term": "Tomber dans les pommes",
        "def": "Expresie colocvială autentică ce înseamnă a leșina brusc."
      }
    ],
    "matchingPairs": [
      {
        "left": "Poser un lapin",
        "right": "A nu veni la o întâlnire stabilită"
      },
      {
        "left": "Coûter les yeux de la tête",
        "right": "A costa o avere"
      },
      {
        "left": "Tomber dans les pommes",
        "right": "A leșina din senin"
      },
      {
        "left": "Casser les pieds",
        "right": "A enerva sau agasa pe cineva"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă când un francez exclamă: 'Cette voiture coûte les yeux de la tête!'?",
      "options": [
        "Această mașină costă o avere (este extrem de scumpă).",
        "Această mașină are faruri foarte frumoase.",
        "Această mașină este la reducere promoțională.",
        "Această mașină este periculoasă la condus."
      ],
      "correctIndex": 0,
      "explanation": "'Coûter les yeux de la tête' este metafora franceză standard pentru un preț uriaș."
    },
    "task": "Scrie propoziția 'Ça coûte les yeux de la tête mais c'est d'une qualité exceptionnelle.'.",
    "starterCode": "Ça coûte les yeux de la tête ",
    "expectedOutputPattern": "[ÇC]a\\s+co[uû]te\\s+les\\s+yeux\\s+de\\s+la\\s+t[êe]te\\s+mais\\s+c['’]est\\s+d['’]une\\s+qualit[ée]\\s+exceptionnelle\\.?",
    "hint": "Scrie Ça coûte les yeux de la tête mais c'est d'une qualité exceptionnelle.",
    "prompt": "Scrie propoziția 'Ça coûte les yeux de la tête mais c'est d'une qualité exceptionnelle.'.",
    "officialSolution": "Ça coûte les yeux de la tête mais c'est d'une qualité exceptionnelle.",
    "example": "Ça coûte les yeux de la tête mais c'est d'une qualité exceptionnelle.",
    "regexPattern": "[ÇC]a\\s+co[uû]te\\s+les\\s+yeux\\s+de\\s+la\\s+t[êe]te\\s+mais\\s+c['’]est\\s+d['’]une\\s+qualit[ée]\\s+exceptionnelle\\.?"
  },
  {
    "id": "fr-c1-p45",
    "track": "Limba Franceză",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥖",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 65,
    "title": "Capitolul 45: Corespondență Formală, CV & Franceză Diplomatică / Corporativă",
    "theory": "\n<p>Culmea măiestriei (C2) este redactarea impecabilă a scrisorilor oficiale de cancelarie și a comunicării diplomatice corporative.</p>\n<h4>1. Formulele de Deschidere & Referință</h4>\n<p><em>« À l'attention de Monsieur le Directeur Général »</em><br>\n<em>« Suite à notre entretien téléphonique du 14 courant, j'ai l'honneur de vous soumettre ma candidature... »</em></p>\n<h4>2. Formula Supremă de Încheiere de Protocol</h4>\n<p><em>« Dans l'attente d'un retour favorable de votre part, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »</em></p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nVeuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Veuillez agréer...",
        "def": "Formula solemnă supremă de politețe la finalul documentelor oficiale franceze."
      },
      {
        "term": "Salutations distinguées",
        "def": "Formulă de respect aristocratic și diplomatic rezervată scrisorilor oficiale."
      },
      {
        "term": "Dans l'attente de...",
        "def": "'În așteptarea...' — locuițiune de tranziție către formula de curtoazie finală."
      },
      {
        "term": "À l'attention de",
        "def": "Formulă protocolară de adresare specifică către o persoană sau funcție executivă."
      }
    ],
    "matchingPairs": [
      {
        "left": "À l'attention de Monsieur...",
        "right": "În atenția Domnului... (antet oficial)"
      },
      {
        "left": "Dans l'attente de votre réponse",
        "right": "În așteptarea răspunsului dumneavoastră"
      },
      {
        "left": "Veuillez agréer mes salutations",
        "right": "Formulă solemnă de curtoazie finală"
      },
      {
        "left": "Je vous saurais gré de...",
        "right": "V-aș fi profund recunoscător dacă..."
      }
    ],
    "quiz": {
      "question": "Care este cea mai respectuoasă formulă diplomatică de încheiere a unei scrisori oficiale în Franța?",
      "options": [
        "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
        "Merci beaucoup et à bientôt!",
        "Salut cordialement à toute l'équipe.",
        "Je vous attends demain matin."
      ],
      "correctIndex": 0,
      "explanation": "Formula de cancelarie 'Veuillez agréer... salutations distinguées' este etalonul absolut al curtoaziei administrative franceze."
    },
    "task": "Scrie formula protocolară solemnă 'Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.'.",
    "starterCode": "Veuillez agréer, ",
    "expectedOutputPattern": "Veuillez\\s+agr[ée]er,\\s*Madame,\\s*Monsieur,\\s*l['’]expression\\s+de\\s+mes\\s+salutations\\s+distingu[ée]es\\.?",
    "hint": "Scrie Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    "prompt": "Scrie formula protocolară solemnă 'Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.'.",
    "officialSolution": "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    "example": "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    "regexPattern": "Veuillez\\s+agr[ée]er,\\s*Madame,\\s*Monsieur,\\s*l['’]expression\\s+de\\s+mes\\s+salutations\\s+distingu[ée]es\\.?"
  },
  {
    "id": "es-a1-p1",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 25,
    "title": "Capitolul 1: Pronumele Personale Subiect (Yo, Tú, Él, Ella, Usted, Nosotros, Vosotros, Ellos, Ustedes)",
    "theory": "\n<p>Bine ai venit la limba spaniolă! Primul pas de la zero absolut este învățarea pronumelor personale subiect (persoanele: eu, tu, el, ea...).</p>\n<h4>1. Cele 9 Pronume Personale</h4>\n<ul>\n  <li><code>Yo</code> [io] = Eu.</li>\n  <li><code>Tú</code> [tu] = Tu (informal, cu accent grafic pentru a nu se confunda cu posesivul <em>tu</em>).</li>\n  <li><code>Él</code> [el] = El (cu accent grafic) / <code>Ella</code> [eia] = Ea.</li>\n  <li><code>Usted</code> [usted] = Dumneavoastră (formă de politețe singular, se conjugă cu persoana a III-a singular!).</li>\n  <li><code>Nosotros</code> (masc./mixt) / <code>Nosotras</code> (exclusiv feminin) = Noi.</li>\n  <li><code>Vosotros</code> / <code>Vosotras</code> = Voi (folosit în Spania).</li>\n  <li><code>Ellos</code> / <code>Ellas</code> = Ei / Ele.</li>\n  <li><code>Ustedes</code> = Dumneavoastră (plural de politețe în Spania; în America Latină înlocuiește complet pe 'vosotros').</li>\n</ul>\n<h4>2. Omiterea Pronumelui Subiect</h4>\n<p>La fel ca în română, în spaniolă pronumele <strong>se omite în mod obișnuit</strong> deoarece terminația verbului arată clar persoana: <em>Hablo español</em> (nu e nevoie să spui <em>Yo hablo</em>).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nYo, tú, él, ella\n</code></pre>\n",
    "glossary": [
      {
        "term": "Yo",
        "def": "Pronumele 'Eu' în limba spaniolă."
      },
      {
        "term": "Tú vs Usted",
        "def": "'Tú' este informal (tutuit); 'Usted' este pronumele de respect ('Dumneavoastră')."
      },
      {
        "term": "Nosotros / Nosotras",
        "def": "Distinge genul la persoana I plural: feminin exclusiv (nosotras) sau masculin/mixt (nosotros)."
      },
      {
        "term": "Omiterea subiectului",
        "def": "Spre deosebire de engleză sau franceză, spaniola nu cere menționarea pronumelui 'yo' la fiecare frază."
      }
    ],
    "matchingPairs": [
      {
        "left": "Yo",
        "right": "Eu"
      },
      {
        "left": "Tú",
        "right": "Tu (informal)"
      },
      {
        "left": "Usted",
        "right": "Dumneavoastră (singular politicos)"
      },
      {
        "left": "Nosotros / Ellos",
        "right": "Noi / Ei"
      }
    ],
    "quiz": {
      "question": "Cum i te adresezi politicos unui adult necunoscut sau unui medic în limba spaniolă?",
      "options": [
        "Usted (Dumneavoastră)",
        "Tú",
        "Vosotros",
        "Ella"
      ],
      "correctIndex": 0,
      "explanation": "'Usted' este pronumele de politețe utilizat pentru adăpostirea respectului cuvenit interlocutorului."
    },
    "task": "Scrie pronumele personale de singular 'Yo, tú, él, ella' separate prin virgulă.",
    "starterCode": "Yo, tú, él, ella",
    "expectedOutputPattern": "Yo,\\s*t[úu],\\s*[ée]l,\\s*ella\\.?",
    "hint": "Scrie Yo, tú, él, ella",
    "prompt": "Scrie pronumele personale de singular 'Yo, tú, él, ella' separate prin virgulă.",
    "officialSolution": "Yo, tú, él, ella",
    "example": "Yo, tú, él, ella",
    "regexPattern": "Yo,\\s*t[úu],\\s*[ée]l,\\s*ella\\.?"
  },
  {
    "id": "es-a1-p2",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 25,
    "title": "Capitolul 2: Formule de Salut, Despărțire & Politețe (¡Hola!, Buenos días, Gracias)",
    "theory": "\n<p>Spaniola este o limbă caldă și expresivă. Reține că în scris, propozițiile exclamative și interogative încep cu semnul de punctuație inversat: <code>¡</code> și <code>¿</code>.</p>\n<h4>1. Saluturi Uzuale</h4>\n<ul>\n  <li><code>¡Hola!</code> [ola] = Bună / Salut (litera 'h' este complet mută în spaniolă!).</li>\n  <li><code>Buenos días</code> = Bună dimineața / Bună ziua (până la prânz).</li>\n  <li><code>Buenas tardes</code> = Bună ziua / Bună seara (de la prânz până la lăsarea întunericului).</li>\n  <li><code>Buenas noches</code> = Noapte bună (sau bună seara târziu).</li>\n</ul>\n<h4>2. Politețe & Despărțire</h4>\n<ul>\n  <li><code>Por favor</code> = Vă rog / Te rog.</li>\n  <li><code>Muchas gracias</code> = Mulțumesc mult / <code>De nada</code> = Cu plăcere.</li>\n  <li><code>¡Adiós!</code> = La revedere / Adio.</li>\n  <li><code>Hasta luego</code> = Pe mai târziu / <code>Hasta pronto</code> = Pe curând.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\n¡Hola! Buenos días, por favor.\n</code></pre>\n",
    "glossary": [
      {
        "term": "¡Hola!",
        "def": "Formula universală de salut în orice moment al zilei ('H' este mut)."
      },
      {
        "term": "Por favor",
        "def": "'Te rog / Vă rog' în limba spaniolă."
      },
      {
        "term": "Muchas gracias",
        "def": "'Mulțumesc foarte mult'."
      },
      {
        "term": "Hasta luego",
        "def": "Formulă de despărțire frecventă ce înseamnă 'Pe mai târziu'."
      }
    ],
    "matchingPairs": [
      {
        "left": "¡Hola!",
        "right": "Bună!"
      },
      {
        "left": "Buenos días",
        "right": "Bună dimineața / Bună ziua"
      },
      {
        "left": "Muchas gracias",
        "right": "Mulțumesc mult"
      },
      {
        "left": "Hasta luego",
        "right": "Pe mai târziu"
      }
    ],
    "quiz": {
      "question": "Cum se pronunță corect salutul '¡Hola!' în limba spaniolă?",
      "options": [
        "[ola] (litera H nu se pronunță niciodată în spaniolă)",
        "[hola] cu H aspirat ca în engleză",
        "[jola] cu sunetul H rusesc",
        "[ula]"
      ],
      "correctIndex": 0,
      "explanation": "În limba spaniolă, litera 'H' este complet mută; se pronunță direct vocala următoare: [ola]."
    },
    "task": "Scrie salutul de politețe '¡Hola! Buenos días, por favor.'.",
    "starterCode": "¡Hola! Buenos días, por favor.",
    "expectedOutputPattern": "(?:[¡!]\\s*)?Hola[!\\s]+Buenos\\s+d[íi]as,\\s*por\\s+favor\\.?",
    "hint": "Scrie ¡Hola! Buenos días, por favor.",
    "prompt": "Scrie salutul de politețe '¡Hola! Buenos días, por favor.'.",
    "officialSolution": "¡Hola! Buenos días, por favor.",
    "example": "¡Hola! Buenos días, por favor.",
    "regexPattern": "(?:[¡!]\\s*)?Hola[!\\s]+Buenos\\s+d[íi]as,\\s*por\\s+favor\\.?"
  },
  {
    "id": "es-a1-p3",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 3: Prezentarea Personală (¿Cómo te llamas? Me llamo...)",
    "theory": "\n<p>Pentru a face cunoștință, folosim verbul reflexiv <strong>llamarse</strong> (a se numi) și verbul <strong>ser</strong> (a fi).</p>\n<h4>1. Numele Tău</h4>\n<ul>\n  <li><code>¿Cómo te llamas?</code> [komo te iamas] = Cum te cheamă? (informal).</li>\n  <li><code>¿Cómo se llama usted?</code> = Cum vă numiți? (formal).</li>\n  <li><code>Me llamo Carlos.</code> = Mă numesc Carlos.</li>\n  <li><code>¡Mucho gusto!</code> / <code>¡Encantado/a!</code> = Încântat de cunoștință!</li>\n</ul>\n<h4>2. De Unde Ești (Origine & Naționalitate)</h4>\n<ul>\n  <li><code>¿De dónde eres?</code> = De unde ești?</li>\n  <li><code>Soy de Rumanía.</code> = Sunt din România.</li>\n  <li><code>Soy rumano</code> (masc.) / <code>Soy rumana</code> (fem.) = Sunt român / româncă.</li>\n  <li><code>Vivo en Bucarest.</code> = Locuiesc în București.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nMe llamo Elena y soy de Rumanía.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Me llamo...",
        "def": "Formula standard: 'Mă numesc...' / 'Numele meu este...'."
      },
      {
        "term": "Mucho gusto",
        "def": "'Încântat de cunoștință' (răspuns universal la prezentare)."
      },
      {
        "term": "¿De dónde eres?",
        "def": "Întrebare directă: 'De unde ești?'."
      },
      {
        "term": "Soy de...",
        "def": "'Sunt din...' (indică țara sau orașul de origine)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Me llamo...",
        "right": "Mă numesc..."
      },
      {
        "left": "¿Cómo te llamas?",
        "right": "Cum te cheamă?"
      },
      {
        "left": "¡Mucho gusto!",
        "right": "Încântat de cunoștință!"
      },
      {
        "left": "Soy de Rumanía",
        "right": "Sunt din România"
      }
    ],
    "quiz": {
      "question": "Ce răspunzi natural când cineva îți spune 'Me llamo Pedro'?",
      "options": [
        "¡Mucho gusto! (Încântat de cunoștință)",
        "De nada!",
        "Por favor!",
        "Buenas noches!"
      ],
      "correctIndex": 0,
      "explanation": "'¡Mucho gusto!' este formula canonică și călduroasă de curtoazie la prima întâlnire."
    },
    "task": "Scrie propoziția de prezentare 'Me llamo Elena y soy de Rumanía.'.",
    "starterCode": "Me llamo ",
    "expectedOutputPattern": "Me\\s+llamo\\s+Elena\\s+y\\s+soy\\s+de\\s+Ruman[íi]a\\.?",
    "hint": "Scrie Me llamo Elena y soy de Rumanía.",
    "prompt": "Scrie propoziția de prezentare 'Me llamo Elena y soy de Rumanía.'.",
    "officialSolution": "Me llamo Elena y soy de Rumanía.",
    "example": "Me llamo Elena y soy de Rumanía.",
    "regexPattern": "Me\\s+llamo\\s+Elena\\s+y\\s+soy\\s+de\\s+Ruman[íi]a\\.?"
  },
  {
    "id": "es-a1-p4",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 4: Verbul Auxiliar „SER” (A FI — Identitate & Natură)",
    "theory": "\n<p>În spaniolă există <strong>două verbe diferite</strong> pentru „a fi”: <strong>SER</strong> și <strong>ESTAR</strong>. Verbul <code>SER</code> descrie identitatea esențială, caracteristicile permanente, originea și profesia.</p>\n<h4>1. Conjugarea Verbului SER la Prezent</h4>\n<ul>\n  <li><code>Yo soy</code> [soi] = Eu sunt (<em>Soy estudiante</em> = Sunt student).</li>\n  <li><code>Tú eres</code> [eres] = Tu ești (<em>Eres inteligente</em>).</li>\n  <li><code>Él / Ella / Usted es</code> = El / Ea este (<em>Ella es doctora</em>).</li>\n  <li><code>Nosotros somos</code> = Noi suntem (<em>Somos amigos</em>).</li>\n  <li><code>Vosotros sois</code> = Voi sunteți.</li>\n  <li><code>Ellos / Ellas / Ustedes son</code> = Ei / Ele sunt (<em>Son amables</em>).</li>\n</ul>\n<h4>2. Când Folosim SER (Mnemonică: DOCTOR)</h4>\n<p><strong>D</strong>escriere, <strong>O</strong>rigine, <strong>C</strong>aracteristică fizică/morală, <strong>T</strong>imp/Oră (<em>Son las tres</em>), <strong>O</strong>cupație/Profesie, <strong>R</strong>elație (prieteni, frați).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nYo soy programador y él es médico.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Ser",
        "def": "Verbul 'a fi' utilizat pentru trăsături permanente, identitate, naționalitate, profesie și oră."
      },
      {
        "term": "Yo soy",
        "def": "Eu sunt."
      },
      {
        "term": "Somos",
        "def": "Noi suntem."
      },
      {
        "term": "Profesii fără articol",
        "def": "În spaniolă nu se pune 'un' la profesii: 'Soy profesor' (nu 'Soy un profesor')."
      }
    ],
    "matchingPairs": [
      {
        "left": "Yo soy",
        "right": "Eu sunt"
      },
      {
        "left": "Tú eres",
        "right": "Tu ești"
      },
      {
        "left": "Nosotros somos",
        "right": "Noi suntem"
      },
      {
        "left": "Ellos son",
        "right": "Ei sunt"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă a verbului 'ser' pentru persoana 'Él' (El)?",
      "options": [
        "es (Él es)",
        "soy",
        "eres",
        "somos"
      ],
      "correctIndex": 0,
      "explanation": "La persoana a III-a singular, verbul ser devine 'es' (Él es, Ella es, Usted es)."
    },
    "task": "Scrie propoziția 'Yo soy programador y él es médico.' (Eu sunt programator și el este medic).",
    "starterCode": "Yo soy ",
    "expectedOutputPattern": "Yo\\s+soy\\s+programador\\s+y\\s+[ée]l\\s+es\\s+m[ée]dico\\.?",
    "hint": "Scrie Yo soy programador y él es médico.",
    "prompt": "Scrie propoziția 'Yo soy programador y él es médico.' (Eu sunt programator și el este medic).",
    "officialSolution": "Yo soy programador y él es médico.",
    "example": "Yo soy programador y él es médico.",
    "regexPattern": "Yo\\s+soy\\s+programador\\s+y\\s+[ée]l\\s+es\\s+m[ée]dico\\.?"
  },
  {
    "id": "es-a1-p5",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 5: Verbul Auxiliar „ESTAR” (A FI — Stare, Emoții & Locație)",
    "theory": "\n<p>Al doilea verb pentru „a fi” este <strong>ESTAR</strong>. Acesta descrie starea de sănătate, emoțiile temporare și <strong>locația fizică în spațiu</strong> (unde se află ceva).</p>\n<h4>1. Conjugarea Verbului ESTAR la Prezent</h4>\n<ul>\n  <li><code>Yo estoy</code> [estoi] = Eu sunt / mă aflu (<em>Estoy contento</em>).</li>\n  <li><code>Tú estás</code> [estas] = Tu ești (<em>¿Cómo estás?</em> = Ce mai faci?).</li>\n  <li><code>Él / Ella / Usted está</code> = El / Ea este (<em>Está en casa</em> = E acasă).</li>\n  <li><code>Nosotros estamos</code> = Noi suntem / ne aflăm.</li>\n  <li><code>Vosotros estáis</code> = Voi sunteți.</li>\n  <li><code>Ellos / Ellas / Ustedes están</code> = Ei / Ele sunt (<em>Están cansados</em> = Sunt obosiți).</li>\n</ul>\n<h4>2. Când Folosim ESTAR (Mnemonică: PLACE)</h4>\n<p><strong>P</strong>oziție, <strong>L</strong>ocație (<em>Madrid está en España</em>), <strong>A</strong>cțiune în derulare, <strong>C</strong>ondiție fizică (bolnav, sănătos), <strong>E</strong>moție (trist, fericit).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\n¿Cómo estás? - Estoy bien, gracias.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Estar",
        "def": "Verbul 'a fi' utilizat pentru locație în spațiu, stări de moment și emoții trecătoare."
      },
      {
        "term": "Estoy bien",
        "def": "'Sunt bine' (răspunsul clasic la ¿Cómo estás?)."
      },
      {
        "term": "Locație cu Estar",
        "def": "Orice localizare pe hartă folosește obligatoriu Estar (El hotel está cerca)."
      },
      {
        "term": "Cansado/a",
        "def": "Obosit / obosită (se folosește întotdeauna cu estar)."
      }
    ],
    "matchingPairs": [
      {
        "left": "¿Cómo estás?",
        "right": "Ce mai faci? / Cum ești?"
      },
      {
        "left": "Estoy muy bien",
        "right": "Sunt foarte bine"
      },
      {
        "left": "Madrid está en España",
        "right": "Madridul se află în Spania (locație)"
      },
      {
        "left": "Estamos listos",
        "right": "Suntem gata / pregătiți"
      }
    ],
    "quiz": {
      "question": "De ce spunem 'El museo está cerrado' folosind verbul ESTAR și nu SER?",
      "options": [
        "Deoarece a fi închis este o stare temporară, nu o caracteristică permanentă a clădirii.",
        "Verbul ser este interzis pentru clădiri.",
        "Estar înseamnă doar a deschide.",
        "Nu există nicio regulă, sunt sinonime."
      ],
      "correctIndex": 0,
      "explanation": "Stările care se pot schimba (deschis/închis, curat/murdar, bolnav/sănătos) folosesc fără excepție verbul ESTAR."
    },
    "task": "Scrie întrebarea și răspunsul '¿Cómo estás? - Estoy bien, gracias.'.",
    "starterCode": "¿Cómo estás? - Estoy bien, gracias.",
    "expectedOutputPattern": "(?:[¿?]\\s*)?C[óo]mo\\s+est[áa]s\\??\\s*-\\s*Estoy\\s+bien,\\s*gracias\\.?",
    "hint": "Scrie ¿Cómo estás? - Estoy bien, gracias.",
    "prompt": "Scrie întrebarea și răspunsul '¿Cómo estás? - Estoy bien, gracias.'.",
    "officialSolution": "¿Cómo estás? - Estoy bien, gracias.",
    "example": "¿Cómo estás? - Estoy bien, gracias.",
    "regexPattern": "(?:[¿?]\\s*)?C[óo]mo\\s+est[áa]s\\??\\s*-\\s*Estoy\\s+bien,\\s*gracias\\.?"
  },
  {
    "id": "es-a1-p6",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 6: Sinteză & Diferența Crucială: SER vs ESTAR",
    "theory": "\n<p>Confundarea lui <em>SER</em> cu <em>ESTAR</em> poate schimba complet sensul unei propoziții! Iată exemple celebre de comparație directă:</p>\n<h4>1. Schimbarea Semnificației cu Același Adjectiv</h4>\n<ul>\n  <li><code>Ser listo</code> = A fi deștept / inteligent.<br>\n      <code>Estar listo</code> = A fi gata / pregătit pentru plecare.</li>\n  <li><code>Ser bueno</code> = A fi o persoană bună la suflet.<br>\n      <code>Estar bueno</code> = Mâncarea este delicioasă / gustoasă.</li>\n  <li><code>Ser verde</code> = De culoare verde.<br>\n      <code>Estar verde</code> = Un fruct necopt sau cineva neexperimentat.</li>\n</ul>\n<h4>2. Regula Simplă de Aur</h4>\n<p><strong>SER = CINE și CE este</strong> (esența de neschimbat).<br>\n<strong>ESTAR = CUM și UNDE este</strong> (starea și locația de moment).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nJuan es inteligente pero hoy está cansado.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Ser listo",
        "def": "A fi inteligent din fire."
      },
      {
        "term": "Estar listo",
        "def": "A fi gata de acțiune."
      },
      {
        "term": "Esență vs Stare",
        "def": "Ser descrie natura intrinsecă; Estar descrie stadiul prezent."
      },
      {
        "term": "Ubicación (Locație)",
        "def": "Aflarea în spațiu cere întotdeauna Estar (¿Dónde está el baño?)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Soy feliz",
        "right": "Sunt o persoană fericită din fire (Ser)"
      },
      {
        "left": "Estoy feliz hoy",
        "right": "Sunt fericit astăzi pentru că am primit o veste (Estar)"
      },
      {
        "left": "La comida está rica",
        "right": "Mâncarea este gustoasă acum (Estar)"
      },
      {
        "left": "Juan es listo",
        "right": "Juan este foarte deștept (Ser)"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă propoziția 'La sopa está fría'?",
      "options": [
        "Supa este rece acum (stare temporară, trebuie încălzită).",
        "Supa este o ființă rece.",
        "Supa se află în Spania.",
        "Supa este foarte fierbinte."
      ],
      "correctIndex": 0,
      "explanation": "Cu 'estar', 'fría' indică starea temporară a mâncării în acest moment."
    },
    "task": "Scrie propoziția 'Juan es inteligente pero hoy está cansado.' (Juan e inteligent, dar azi e obosit).",
    "starterCode": "Juan es ",
    "expectedOutputPattern": "Juan\\s+es\\s+inteligente\\s+pero\\s+hoy\\s+est[áa]\\s+cansado\\.?",
    "hint": "Scrie Juan es inteligente pero hoy está cansado.",
    "prompt": "Scrie propoziția 'Juan es inteligente pero hoy está cansado.' (Juan e inteligent, dar azi e obosit).",
    "officialSolution": "Juan es inteligente pero hoy está cansado.",
    "example": "Juan es inteligente pero hoy está cansado.",
    "regexPattern": "Juan\\s+es\\s+inteligente\\s+pero\\s+hoy\\s+est[áa]\\s+cansado\\.?"
  },
  {
    "id": "es-a1-p7",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 7: Verbul Auxiliar „TENER” (A AVEA) la Prezent",
    "theory": "\n<p>Verbul <strong>tener</strong> (a avea) este un verb neregulat cu schimbare de rădăcină (diftongare <em>e $\rightarrow$ ie</em>) și adăugare de <em>g</em> la persoana I (<em>yo tengo</em>).</p>\n<h4>1. Conjugarea la Prezent</h4>\n<ul>\n  <li><code>Yo tengo</code> [tengo] = Eu am.</li>\n  <li><code>Tú tienes</code> [tienes] = Tu ai.</li>\n  <li><code>Él / Ella / Usted tiene</code> = El / Ea are.</li>\n  <li><code>Nosotros tenemos</code> = Noi avem (fără diftong la nosotros!).</li>\n  <li><code>Vosotros tenéis</code> = Voi aveți.</li>\n  <li><code>Ellos / Ellas / Ustedes tienen</code> = Ei / Ele au.</li>\n</ul>\n<h4>2. Expresii cu TENER</h4>\n<ul>\n  <li><em>Tengo 24 años</em> = Am 24 de ani (vârsta se exprimă cu TENER, nu ser!).</li>\n  <li><em>Tengo hambre</em> [ambre] = Mi-e foame / <em>Tengo sed</em> = Mi-e sete.</li>\n  <li><em>Tengo calor / Tengo frío</em> = Mi-e cald / Mi-e frig.</li>\n  <li><em>Tener que + infinitiv</em> = A trebui: <em>Tengo que estudiar</em> (Trebuie să învăț).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nTengo hambre y tengo que comer ahora.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Tener",
        "def": "Verbul 'a avea' (tengo, tienes, tiene, tenemos, tenéis, tienen)."
      },
      {
        "term": "Tengo 20 años",
        "def": "Exprimarea vârstei în spaniolă cere verbul tener."
      },
      {
        "term": "Tener que + inf",
        "def": "Structură ce exprimă o obligație personală ('trebuie să...')."
      },
      {
        "term": "Tener hambre / sed",
        "def": "A fi foame / sete (literalmente 'a avea foame/sete')."
      }
    ],
    "matchingPairs": [
      {
        "left": "Tengo un coche",
        "right": "Am o mașină"
      },
      {
        "left": "Tengo 25 años",
        "right": "Am 25 de ani"
      },
      {
        "left": "Tengo mucha hambre",
        "right": "Mi-e foarte foame"
      },
      {
        "left": "Tenemos que salir",
        "right": "Trebuie să ieșim (obligație)"
      }
    ],
    "quiz": {
      "question": "Cum spui 'Câți ani ai?' în limba spaniolă?",
      "options": [
        "¿Cuántos años tienes?",
        "¿Cuántos años eres?",
        "¿Cómo tienes años?",
        "¿Qué edad eres?"
      ],
      "correctIndex": 0,
      "explanation": "Vârsta se asociază cu verbul 'tener': '¿Cuántos años tienes?' (Câți ani ai?)."
    },
    "task": "Scrie propoziția 'Tengo hambre y tengo que comer ahora.' (Mi-e foame și trebuie să mănânc acum).",
    "starterCode": "Tengo hambre ",
    "expectedOutputPattern": "Tengo\\s+hambre\\s+y\\s+tengo\\s+que\\s+comer\\s+ahora\\.?",
    "hint": "Scrie Tengo hambre y tengo que comer ahora.",
    "prompt": "Scrie propoziția 'Tengo hambre y tengo que comer ahora.' (Mi-e foame și trebuie să mănânc acum).",
    "officialSolution": "Tengo hambre y tengo que comer ahora.",
    "example": "Tengo hambre y tengo que comer ahora.",
    "regexPattern": "Tengo\\s+hambre\\s+y\\s+tengo\\s+que\\s+comer\\s+ahora\\.?"
  },
  {
    "id": "es-a1-p8",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 8: Numerele de la 0 la 20 (Los Números del 0 al 20)",
    "theory": "\n<p>Numerele în spaniolă au o logică fonetică foarte apropiată de limba română:</p>\n<h4>1. De la 0 la 10</h4>\n<p><code>0: cero</code>, <code>1: uno</code>, <code>2: dos</code>, <code>3: tres</code>, <code>4: cuatro</code>, <code>5: cinco</code>, <code>6: seis</code>, <code>7: siete</code>, <code>8: ocho</code>, <code>9: nueve</code>, <code>10: diez</code> [diez].</p>\n<h4>2. De la 11 la 20</h4>\n<p><code>11: once</code>, <code>12: doce</code>, <code>13: trece</code>, <code>14: catorce</code>, <code>15: quince</code> [kince].</p>\n<p>De la 16 la 19 se formează prin compunerea „zece și...” scris într-un singur cuvânt:</p>\n<p><code>16: dieciséis</code>, <code>17: diecisiete</code>, <code>18: dieciocho</code>, <code>19: diecinueve</code>, <code>20: veinte</code>.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nuno, dos, tres, cuatro\n</code></pre>\n",
    "glossary": [
      {
        "term": "uno, dos, tres",
        "def": "Unu, doi, trei în limba spaniolă."
      },
      {
        "term": "once a quince",
        "def": "Numerele de la 11 la 15 cu terminația caracteristică '-ce'."
      },
      {
        "term": "dieciséis",
        "def": "Numărul 16; conține accent grafic pe ultimul 'e'."
      },
      {
        "term": "veinte",
        "def": "Numărul 20."
      }
    ],
    "matchingPairs": [
      {
        "left": "uno, dos, tres",
        "right": "1, 2, 3"
      },
      {
        "left": "cuatro, cinco, seis",
        "right": "4, 5, 6"
      },
      {
        "left": "siete, ocho, nueve, diez",
        "right": "7, 8, 9, 10"
      },
      {
        "left": "quince, veinte",
        "right": "15, 20"
      }
    ],
    "quiz": {
      "question": "Cum se scrie numărul 15 în limba spaniolă?",
      "options": [
        "quince",
        "diecicinco",
        "once",
        "catorce"
      ],
      "correctIndex": 0,
      "explanation": "Numărul 15 se scrie 'quince' [kince]."
    },
    "task": "Scrie numerele 'uno, dos, tres, cuatro' separate prin virgulă și spațiu.",
    "starterCode": "uno, dos, tres, cuatro",
    "expectedOutputPattern": "uno,\\s*dos,\\s*tres,\\s*cuatro",
    "hint": "Scrie uno, dos, tres, cuatro",
    "prompt": "Scrie numerele 'uno, dos, tres, cuatro' separate prin virgulă și spațiu.",
    "officialSolution": "uno, dos, tres, cuatro",
    "example": "uno, dos, tres, cuatro",
    "regexPattern": "uno,\\s*dos,\\s*tres,\\s*cuatro"
  },
  {
    "id": "es-a1-p9",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 9: Numerele de la 20 la 100, Prețuri & Cumpărături",
    "theory": "\n<p>Spre deosebire de franceză, spaniola folosește un sistem decimal curat și previzibil!</p>\n<h4>1. Zecile în Spaniolă</h4>\n<p><code>20: veinte</code>, <code>30: treinta</code>, <code>40: cuarenta</code>, <code>50: cincuenta</code>, <code>60: sesenta</code>, <code>70: setenta</code>, <code>80: ochenta</code>, <code>90: noventa</code>, <code>100: cien</code>.</p>\n<h4>2. Regula lui „Y” (Și)</h4>\n<ul>\n  <li>Pentru numerele 21-29 se scrie într-un singur cuvânt: <em>veintiuno, veintidós, veintitrés...</em></li>\n  <li>De la 31 în sus, se separă prin conjuncția <strong>y</strong> (și): <em>treinta y uno</em>, <em>cuarenta y cinco</em>, <em>noventa y nueve</em>.</li>\n</ul>\n<h4>3. Întrebarea Prețului</h4>\n<p><code>¿Cuánto cuesta esto?</code> = Cât costă asta? / <code>Cuesta veinte euros</code> = Costă 20 de euro.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\n¿Cuánto cuesta este billete, por favor?\n</code></pre>\n",
    "glossary": [
      {
        "term": "treinta y uno",
        "def": "31 (de la 31 încolo numerele se leagă cu 'y')."
      },
      {
        "term": "¿Cuánto cuesta?",
        "def": "'Cât costă?' în magazine și restaurante."
      },
      {
        "term": "cien",
        "def": "Numărul 100 exact (devine 'ciento uno' de la 101 în sus)."
      },
      {
        "term": "euro / euros",
        "def": "Moneda oficială."
      }
    ],
    "matchingPairs": [
      {
        "left": "treinta y cinco",
        "right": "35"
      },
      {
        "left": "cincuenta euros",
        "right": "50 de euro"
      },
      {
        "left": "¿Cuánto cuesta esto?",
        "right": "Cât costă asta?"
      },
      {
        "left": "cien",
        "right": "100"
      }
    ],
    "quiz": {
      "question": "Cum se întreabă 'Cât costă cartea?' în limba spaniolă?",
      "options": [
        "¿Cuánto cuesta el libro?",
        "¿Cómo vale el libro?",
        "¿Qué precio tiene el libro?",
        "¿Cuánto libro cuesta?"
      ],
      "correctIndex": 0,
      "explanation": "'¿Cuánto cuesta...?' este formula standard de întrebare a prețului."
    },
    "task": "Întreabă prețul: '¿Cuánto cuesta este billete, por favor?'.",
    "starterCode": "¿Cuánto cuesta este billete, por favor?",
    "expectedOutputPattern": "(?:[¿?]\\s*)?Cu[áa]nto\\s+cuesta\\s+este\\s+billete,\\s*por\\s+favor\\??",
    "hint": "Scrie ¿Cuánto cuesta este billete, por favor?",
    "prompt": "Întreabă prețul: '¿Cuánto cuesta este billete, por favor?'.",
    "officialSolution": "¿Cuánto cuesta este billete, por favor?",
    "example": "¿Cuánto cuesta este billete, por favor?",
    "regexPattern": "(?:[¿?]\\s*)?Cu[áa]nto\\s+cuesta\\s+este\\s+billete,\\s*por\\s+favor\\??"
  },
  {
    "id": "es-a1-p10",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 10: Zilele Săptămânii, Lunile Anului & Anotimpurile",
    "theory": "\n<p>În limba spaniolă, zilele săptămânii și lunile anului se scriu cu <strong>literă mică</strong> (nu cu majusculă ca în engleză!).</p>\n<h4>1. Zilele Săptămânii (Los Días de la Semana)</h4>\n<p>Toate zilele de luni până vineri se termină în <code>-s</code> și sunt de genul <strong>masculin</strong>:</p>\n<p><code>el lunes</code> (luni), <code>el martes</code> (marți), <code>el miércoles</code> (miercuri), <code>el jueves</code> (joi), <code>el viernes</code> (vineri), <code>el sábado</code> (sâmbătă), <code>el domingo</code> (duminică).</p>\n<p>Pentru a spune „lunea” sau „în fiecare luni”, folosim articolul plural: <em>los lunes</em> (nu spunem 'en lunes').</p>\n<h4>2. Lunile Anului (Los Meses)</h4>\n<p><em>enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre</em>.</p>\n<h4>3. Anotimpurile (Las Estaciones)</h4>\n<p><code>la primavera</code> (primăvara), <code>el verano</code> (vara), <code>el otoño</code> (toamna), <code>el invierno</code> (iarna).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nHoy es viernes y mañana es sábado.\n</code></pre>\n",
    "glossary": [
      {
        "term": "el lunes / los lunes",
        "def": "Zilele folosesc articolul 'el' sau 'los' ('los viernes' = vinerea)."
      },
      {
        "term": "el fin de semana",
        "def": "Sfârșitul de săptămână (weekend)."
      },
      {
        "term": "hoy",
        "def": "Cuvântul pentru 'astăzi'."
      },
      {
        "term": "mañana",
        "def": "'Mâine' (sau 'dimineață' dacă este precedat de articol: la mañana)."
      }
    ],
    "matchingPairs": [
      {
        "left": "el lunes",
        "right": "Luni"
      },
      {
        "left": "el viernes",
        "right": "Vineri"
      },
      {
        "left": "el sábado y domingo",
        "right": "Sâmbătă și duminică"
      },
      {
        "left": "el verano",
        "right": "Vara"
      }
    ],
    "quiz": {
      "question": "Cum spui 'Ne vedem luni' sau 'Vin lunea' în spaniolă?",
      "options": [
        "el lunes / los lunes (folosind articolul hotărât, fără prepoziția 'en')",
        "en lunes",
        "a lunes",
        "sobre lunes"
      ],
      "correctIndex": 0,
      "explanation": "În limba spaniolă este o greșeală să spui 'en lunes'. Se folosește exclusiv articolul: 'el lunes' sau 'los lunes'."
    },
    "task": "Scrie propoziția 'Hoy es viernes y mañana es sábado.' (Azi e vineri și mâine e sâmbătă).",
    "starterCode": "Hoy es ",
    "expectedOutputPattern": "Hoy\\s+es\\s+viernes\\s+y\\s+ma[ñn]ana\\s+es\\s+s[áa]bado\\.?",
    "hint": "Scrie Hoy es viernes y mañana es sábado.",
    "prompt": "Scrie propoziția 'Hoy es viernes y mañana es sábado.' (Azi e vineri și mâine e sâmbătă).",
    "officialSolution": "Hoy es viernes y mañana es sábado.",
    "example": "Hoy es viernes y mañana es sábado.",
    "regexPattern": "Hoy\\s+es\\s+viernes\\s+y\\s+ma[ñn]ana\\s+es\\s+s[áa]bado\\.?"
  },
  {
    "id": "es-a1-p11",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 11: ¿Qué hora es? Exprimarea Orei în Spaniolă",
    "theory": "\n<p>Pentru a întreba cât este ceasul, spunem: <strong>« ¿Qué hora es? »</strong>. Răspunsul depinde dacă este ora 1 (singular) sau o altă oră (plural):</p>\n<h4>1. Regula Singular / Plural</h4>\n<ul>\n  <li>Pentru ora 1:00: <code>Es la una</code> (singular: 'Es la', deoarece 'hora' este feminin singular).</li>\n  <li>Pentru toate celelalte ore: <code>Son las dos</code>, <code>Son las tres</code>, <code>Son las diez</code> (plural: 'Son las').</li>\n</ul>\n<h4>2. Minute, Sferturi și Jumătăți</h4>\n<ul>\n  <li><code>y cuarto</code> = și un sfert (ex: <em>Son las cuatro y cuarto</em> = 4:15).</li>\n  <li><code>y media</code> = și jumătate (ex: <em>Son las cinco y media</em> = 5:30).</li>\n  <li><code>menos cuarto</code> = fără un sfert (ex: <em>Son las seis menos cuarto</em> = 5:45).</li>\n  <li><code>menos diez</code> = fără 10 minute (ex: <em>Son las siete menos diez</em> = 6:50).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nSon las dos y media de la tarde.\n</code></pre>\n",
    "glossary": [
      {
        "term": "¿Qué hora es?",
        "def": "Întrebarea standard: 'Cât este ceasul?'."
      },
      {
        "term": "Es la una",
        "def": "Formulă unică la singular dedicată orei 1."
      },
      {
        "term": "Son las...",
        "def": "Formulă plurală folosită pentru toate orele de la 2 la 12."
      },
      {
        "term": "y media",
        "def": "Și jumătate (ex: 8:30 = Son las ocho y media)."
      }
    ],
    "matchingPairs": [
      {
        "left": "¿Qué hora es?",
        "right": "Cât este ceasul?"
      },
      {
        "left": "Es la una en punto",
        "right": "Este ora 1 fix"
      },
      {
        "left": "Son las tres y cuarto",
        "right": "Este ora 3 și un sfert (3:15)"
      },
      {
        "left": "Son las cinco y media",
        "right": "Este ora 5 și jumătate (5:30)"
      }
    ],
    "quiz": {
      "question": "De ce spunem 'Es la una' dar 'Son las dos'?",
      "options": [
        "Ora 1 este la singular ('Es la'), pe când orele de la 2 în sus sunt la plural ('Son las').",
        "Ora 1 este specială doar duminica.",
        "Nu este nicio diferență, poți spune oricum.",
        "Depinde dacă este zi sau noapte."
      ],
      "correctIndex": 0,
      "explanation": "Substantivul subînțeles 'hora' este singular la 1 (Es la una hora), dar plural la 2-12 (Son las dos horas)."
    },
    "task": "Scrie propoziția 'Son las dos y media de la tarde.' (Este ora două și jumătate după-amiaza).",
    "starterCode": "Son las dos ",
    "expectedOutputPattern": "Son\\s+las\\s+dos\\s+y\\s+media\\s+de\\s+la\\s+tarde\\.?",
    "hint": "Scrie Son las dos y media de la tarde.",
    "prompt": "Scrie propoziția 'Son las dos y media de la tarde.' (Este ora două și jumătate după-amiaza).",
    "officialSolution": "Son las dos y media de la tarde.",
    "example": "Son las dos y media de la tarde.",
    "regexPattern": "Son\\s+las\\s+dos\\s+y\\s+media\\s+de\\s+la\\s+tarde\\.?"
  },
  {
    "id": "es-a1-p12",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 12: Articolele & Genul Substantivelor (El, La, Los, Las / Un, Una)",
    "theory": "\n<p>În spaniolă, genul substantivelor este foarte predictibil pe baza terminației:</p>\n<h4>1. Regula de Bază a Genului</h4>\n<ul>\n  <li>Cuvintele terminate în <code>-o</code> sunt în general <strong>masculine</strong>: <em>el libro, el perro</em>.</li>\n  <li>Cuvintele terminate în <code>-a</code> sunt în general <strong>feminine</strong>: <em>la casa, la mesa</em>.</li>\n  <li>Cuvintele terminate în <code>-ción</code>, <code>-sión</code>, <code>-dad</code> sunt întotdeauna <strong>feminine</strong>: <em>la estación, la ciudad</em>.</li>\n</ul>\n<h4>2. Articolele</h4>\n<ul>\n  <li><strong>Hotărâte</strong>: <code>el</code> (masc. sg.), <code>la</code> (fem. sg.), <code>los</code> (masc. pl.), <code>las</code> (fem. pl.).</li>\n  <li><strong>Nehotărâte</strong>: <code>un</code> (masc. sg.), <code>una</code> (fem. sg.), <code>unos</code> (masc. pl.), <code>unas</code> (fem. pl.).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nel chico y la chica\n</code></pre>\n",
    "glossary": [
      {
        "term": "el / la / los / las",
        "def": "Articole hotărâte spaniole (-ul, -a, -ii, -ele)."
      },
      {
        "term": "un / una / unos / unas",
        "def": "Articole nehotărâte (un, o, niște)."
      },
      {
        "term": "-dad / -ción",
        "def": "Terminații ce garantează genul feminin (la felicidad, la canción)."
      },
      {
        "term": "Excepții celebre",
        "def": "el problema, el día, el mapa (deși se termină în -a, sunt masculine de origine greacă!)."
      }
    ],
    "matchingPairs": [
      {
        "left": "el libro / los libros",
        "right": "cartea / cărțile (masculin)"
      },
      {
        "left": "la casa / las casas",
        "right": "casa / casele (feminin)"
      },
      {
        "left": "la ciudad",
        "right": "orașul (terminat în -dad: feminin)"
      },
      {
        "left": "el día",
        "right": "ziua (excepție: masculin deși se termină în -a)"
      }
    ],
    "quiz": {
      "question": "Ce articol hotărât primește cuvântul 'problema' în limba spaniolă?",
      "options": [
        "el (el problema — este o excepție masculină de origine greacă)",
        "la problema",
        "las problema",
        "lo problema"
      ],
      "correctIndex": 0,
      "explanation": "Cuvintele de origine greacă terminate în -ma (el problema, el tema, el sistema, el idioma) sunt de genul masculin: 'el problema'."
    },
    "task": "Scrie sintagma 'el chico y la chica' (băiatul și fata).",
    "starterCode": "el chico y la chica",
    "expectedOutputPattern": "el\\s+chico\\s+y\\s+la\\s+chica\\.?",
    "hint": "Scrie el chico y la chica",
    "prompt": "Scrie sintagma 'el chico y la chica' (băiatul și fata).",
    "officialSolution": "el chico y la chica",
    "example": "el chico y la chica",
    "regexPattern": "el\\s+chico\\s+y\\s+la\\s+chica\\.?"
  },
  {
    "id": "es-a1-p13",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 30,
    "title": "Capitolul 13: Cum Spunem „NO”: Negația Simplă și Dublă în Spaniolă",
    "theory": "\n<p>Negația în spaniolă este mult mai simplă decât în franceză: este suficient să plasezi cuvântul <strong>NO</strong> direct înaintea verbului conjugat.</p>\n<h4>1. Negația Simplă</h4>\n<ul>\n  <li><em>Hablo inglés</em> (Vorbesc engleză) $\rightarrow$ <em><strong>No</strong> hablo inglés</em> (Nu vorbesc engleză).</li>\n  <li><em>Tengo tiempo</em> $\rightarrow$ <em><strong>No</strong> tengo tiempo</em> (Nu am timp).</li>\n</ul>\n<h4>2. Negația Dublă Spaniolă (Obligatorie!)</h4>\n<p>Spre deosebire de engleză unde dubla negație este interzisă, în spaniolă <strong>dubla negație este obligatorie</strong> dacă termenul negativ stă după verb:</p>\n<ul>\n  <li><code>nunca</code> (niciodată): <em><strong>No</strong> voy <strong>nunca</strong> allí</em> (Nu merg niciodată acolo).</li>\n  <li><code>nada</code> (nimic): <em><strong>No</strong> sé <strong>nada</strong></em> (Nu știu nimic).</li>\n  <li><code>nadie</code> (nimeni): <em><strong>No</strong> hay <strong>nadie</strong> aquí</em> (Nu este nimeni aici).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nNo entiendo nada, lo siento.\n</code></pre>\n",
    "glossary": [
      {
        "term": "no + verb",
        "def": "Structura de bază a negației în limba spaniolă."
      },
      {
        "term": "Doble negación",
        "def": "Regulă obligatorie: 'No entiendo nada' (literal: Nu înțeleg nimic)."
      },
      {
        "term": "nunca / jamás",
        "def": "'Niciodată'."
      },
      {
        "term": "nadie",
        "def": "'Nimeni'."
      }
    ],
    "matchingPairs": [
      {
        "left": "No hablo español",
        "right": "Nu vorbesc spaniolă"
      },
      {
        "left": "No sé nada",
        "right": "Nu știu nimic (dublă negație)"
      },
      {
        "left": "No hay nadie",
        "right": "Nu este nimeni"
      },
      {
        "left": "Nunca fumo",
        "right": "Niciodată nu fumez"
      }
    ],
    "quiz": {
      "question": "Cum se traduce corect 'Nu știu nimic' în limba spaniolă?",
      "options": [
        "No sé nada. (cu dublă negație obligatorie)",
        "Sé nada.",
        "No sé algo.",
        "No nada sé."
      ],
      "correctIndex": 0,
      "explanation": "Când cuvântul negativ 'nada' stă după verb, verbul trebuie precedat obligatoriu de 'no': 'No sé nada'."
    },
    "task": "Scrie propoziția negativă 'No entiendo nada, lo siento.' (Nu înțeleg nimic, îmi pare rău).",
    "starterCode": "No entiendo ",
    "expectedOutputPattern": "No\\s+entiendo\\s+nada,\\s*lo\\s+siento\\.?",
    "hint": "Scrie No entiendo nada, lo siento.",
    "prompt": "Scrie propoziția negativă 'No entiendo nada, lo siento.' (Nu înțeleg nimic, îmi pare rău).",
    "officialSolution": "No entiendo nada, lo siento.",
    "example": "No entiendo nada, lo siento.",
    "regexPattern": "No\\s+entiendo\\s+nada,\\s*lo\\s+siento\\.?"
  },
  {
    "id": "es-a1-p14",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 14: Cuvinte Interogative (¿Quién?, ¿Qué?, ¿Dónde?, ¿Cuándo?, ¿Por qué?)",
    "theory": "\n<p>Toate cuvintele interogative din spaniolă poartă <strong>accent grafic (tilde)</strong> pentru a le distinge de conjuncțiile sau pronumele relative omonime.</p>\n<h4>1. Cele 7 Cuvinte Cheie de Întrebare</h4>\n<ul>\n  <li><code>¿Quién? / ¿Quiénes?</code> = Cine? (<em>¿Quién es él?</em> = Cine este el?).</li>\n  <li><code>¿Qué?</code> = Ce? (<em>¿Qué pasa?</em> = Ce se întâmplă?).</li>\n  <li><code>¿Dónde?</code> = Unde? (<em>¿Dónde está el baño?</em> = Unde este toaleta?).</li>\n  <li><code>¿Cuándo?</code> = Când? (<em>¿Cuándo salimos?</em> = Când plecăm?).</li>\n  <li><code>¿Cómo?</code> = Cum? (<em>¿Cómo se dice...?</em> = Cum se spune...?).</li>\n  <li><code>¿Cuánto / Cuánta?</code> = Cât? (<em>¿Cuánto cuesta?</em> = Cât costă?).</li>\n  <li><code>¿Por qué?</code> (separat și cu accent) = De ce? Răspunsul este <code>Porque...</code> (într-un cuvânt și fără accent: Pentru că...).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\n¿Dónde está la playa, por favor?\n</code></pre>\n",
    "glossary": [
      {
        "term": "¿Por qué? vs Porque",
        "def": "¿Por qué? = De ce? (întrebare separată cu accent); Porque = Pentru că (răspuns legat fără accent)."
      },
      {
        "term": "¿Dónde está...?",
        "def": "Întrebare crucială pentru orientare: 'Unde se află...?'."
      },
      {
        "term": "¿Cómo se dice?",
        "def": "Cum se spune în spaniolă...?"
      },
      {
        "term": "Tilde en interrogativos",
        "def": "Accentul grafic obligatoriu pe toate cuvintele de întrebare (qué, quién, dónde...)."
      }
    ],
    "matchingPairs": [
      {
        "left": "¿Dónde está la estación?",
        "right": "Unde este gara?"
      },
      {
        "left": "¿Qué hora es?",
        "right": "Cât este ceasul?"
      },
      {
        "left": "¿Cómo te llamas?",
        "right": "Cum te cheamă?"
      },
      {
        "left": "¿Por qué estudias español?",
        "right": "De ce înveți spaniolă?"
      }
    ],
    "quiz": {
      "question": "Care este diferența dintre '¿Por qué?' și 'Porque' în limba spaniolă?",
      "options": [
        "'¿Por qué?' este întrebarea ('De ce?'), iar 'Porque' este răspunsul explicativ ('Pentru că').",
        "Sunt complet identice și interschimbabile.",
        "'Porque' înseamnă 'Dacă'.",
        "'¿Por qué?' se folosește doar pentru mâncare."
      ],
      "correctIndex": 0,
      "explanation": "¿Por qué? (scris separat și cu accent pe 'é') întreabă cauza, în timp ce 'porque' (scris legat și fără accent) oferă explicația."
    },
    "task": "Întreabă unde este plaja: '¿Dónde está la playa, por favor?'.",
    "starterCode": "¿Dónde está la playa, por favor?",
    "expectedOutputPattern": "(?:[¿?]\\s*)?D[óo]nde\\s+est[áa]\\s+la\\s+playa,\\s*por\\s+favor\\??",
    "hint": "Scrie ¿Dónde está la playa, por favor?",
    "prompt": "Întreabă unde este plaja: '¿Dónde está la playa, por favor?'.",
    "officialSolution": "¿Dónde está la playa, por favor?",
    "example": "¿Dónde está la playa, por favor?",
    "regexPattern": "(?:[¿?]\\s*)?D[óo]nde\\s+est[áa]\\s+la\\s+playa,\\s*por\\s+favor\\??"
  },
  {
    "id": "es-a1-p15",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 15: Culori, Adjective & Acordul de Gen și Număr",
    "theory": "\n<p>În spaniolă, adjectivul <strong>se acordă întotdeauna în gen și număr</strong> cu substantivul determinat și este plasat de regulă <strong>după substantiv</strong>.</p>\n<h4>1. Regula de Bază a Adjectivelor</h4>\n<ul>\n  <li>Adjectivele în <code>-o</code> fac femininul în <code>-a</code>: <em>un chico alto $\rightarrow$ una chica alta</em>.</li>\n  <li>Adjectivele terminate în <code>-e</code> sau consoană sunt neutre în gen (rămân identice la masculin și feminin): <em>un libro grande / una casa grande</em>, <em>un examen difícil / una pregunta difícil</em>.</li>\n  <li>Pluralul: adaugă <code>-s</code> după vocală (<em>altos / altas</em>) și <code>-es</code> după consoană (<em>difíciles</em>).</li>\n</ul>\n<h4>2. Culorile</h4>\n<p><em>blanco/a</em> (alb), <em>negro/a</em> (negru), <em>rojo/a</em> (roșu), <em>amarillo/a</em> (galben), <em>azul / azules</em> (albastru), <em>verde / verdes</em> (verde).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nuna casa blanca con puertas verdes\n</code></pre>\n",
    "glossary": [
      {
        "term": "Concordancia de adjetivos",
        "def": "Acordul obligatoriu în gen (o/a) și număr (s/es) între substantiv și adjectiv."
      },
      {
        "term": "Adjetivos en -e (grande)",
        "def": "Adjective invariabile în gen: se folosesc identic și la masculin și la feminin."
      },
      {
        "term": "Posición pospuesta",
        "def": "În spaniolă culorile și descrierile stau DUPĂ substantiv (un coche rojo)."
      },
      {
        "term": "azul / verdes",
        "def": "Pluralul adjectivelor: +s după vocală, +es după consoană."
      }
    ],
    "matchingPairs": [
      {
        "left": "un coche rojo",
        "right": "o mașină roșie (masculin în spaniolă)"
      },
      {
        "left": "una casa blanca",
        "right": "o casă albă (feminin)"
      },
      {
        "left": "los ojos azules",
        "right": "ochii albaștri (plural cu -es)"
      },
      {
        "left": "una ciudad grande",
        "right": "un oraș mare (adjectiv neutru în -e)"
      }
    ],
    "quiz": {
      "question": "Cum se acordă adjectivul 'español' pentru substantivul feminin plural 'las ciudades' (orașele)?",
      "options": [
        "españolas (feminin plural)",
        "españoles",
        "españols",
        "española"
      ],
      "correctIndex": 0,
      "explanation": "Femininul este 'española', iar la plural primește '-s', rezultând 'españolas'."
    },
    "task": "Scrie sintagma 'una casa blanca con puertas verdes' (o casă albă cu uși verzi).",
    "starterCode": "una casa ",
    "expectedOutputPattern": "una\\s+casa\\s+blanca\\s+con\\s+puertas\\s+verdes\\.?",
    "hint": "Scrie una casa blanca con puertas verdes",
    "prompt": "Scrie sintagma 'una casa blanca con puertas verdes' (o casă albă cu uși verzi).",
    "officialSolution": "una casa blanca con puertas verdes",
    "example": "una casa blanca con puertas verdes",
    "regexPattern": "una\\s+casa\\s+blanca\\s+con\\s+puertas\\s+verdes\\.?"
  },
  {
    "id": "es-a1-p16",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 16: Familia & Arborele Genealogic (La Familia)",
    "theory": "\n<p>Membrii familiei în spaniolă sunt ușor de reținut datorită perechilor regulate masculin (-o) / feminin (-a):</p>\n<h4>1. Membrii Principali</h4>\n<ul>\n  <li><code>el padre</code> = tatăl / <code>papá</code> = tati.</li>\n  <li><code>la madre</code> = mama / <code>mamá</code> = mami.</li>\n  <li><code>los padres</code> = părinții (mama și tata).</li>\n  <li><code>el hijo</code> = fiul / <code>la hija</code> = fiica / <code>los hijos</code> = copiii (sau fiii).</li>\n  <li><code>el hermano</code> = fratele / <code>la hermana</code> = sora / <code>los hermanos</code> = frații.</li>\n  <li><code>el abuelo</code> = bunicul / <code>la abuela</code> = bunica / <code>los abuelos</code> = bunicii.</li>\n  <li><code>el tío / la tía</code> = unchiul / mătușa.</li>\n  <li><code>el primo / la prima</code> = vărul / verișoara.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nMi padre, mi madre y mis dos hermanos.\n</code></pre>\n",
    "glossary": [
      {
        "term": "los padres",
        "def": "Părinții (tatăl și mama)."
      },
      {
        "term": "los hermanos",
        "def": "Frații (sau frații și surorile împreună)."
      },
      {
        "term": "los abuelos",
        "def": "Bunicii."
      },
      {
        "term": "hijo / hija",
        "def": "Fiul / fiica."
      }
    ],
    "matchingPairs": [
      {
        "left": "el padre y la madre",
        "right": "Tatăl și mama"
      },
      {
        "left": "el hermano y la hermana",
        "right": "Fratele și sora"
      },
      {
        "left": "los abuelos",
        "right": "Bunicii"
      },
      {
        "left": "mis primos",
        "right": "Verii mei"
      }
    ],
    "quiz": {
      "question": "Cum spui 'fratele meu și sora mea' în limba spaniolă?",
      "options": [
        "mi hermano y mi hermana",
        "mi padre y mi madre",
        "mi tío y mi tía",
        "mi abuelo y mi abuela"
      ],
      "correctIndex": 0,
      "explanation": "'Hermano' este fratele, iar 'hermana' este sora."
    },
    "task": "Scrie propoziția 'Mi padre, mi madre y mis dos hermanos.' (Tatăl meu, mama mea și cei doi frați ai mei).",
    "starterCode": "Mi padre, ",
    "expectedOutputPattern": "Mi\\s+padre,\\s*mi\\s+madre\\s+y\\s+mis\\s+dos\\s+hermanos\\.?",
    "hint": "Scrie Mi padre, mi madre y mis dos hermanos.",
    "prompt": "Scrie propoziția 'Mi padre, mi madre y mis dos hermanos.' (Tatăl meu, mama mea și cei doi frați ai mei).",
    "officialSolution": "Mi padre, mi madre y mis dos hermanos.",
    "example": "Mi padre, mi madre y mis dos hermanos.",
    "regexPattern": "Mi\\s+padre,\\s*mi\\s+madre\\s+y\\s+mis\\s+dos\\s+hermanos\\.?"
  },
  {
    "id": "es-a1-p17",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 17: Adjectivele Posesive (Mi, Tu, Su, Nuestro, Vuestro, Su)",
    "theory": "\n<p>În spaniolă, posesivele scurte stau <strong>înaintea substantivului</strong> și se acordă în număr (singular/plural) cu lucrul posedat:</p>\n<h4>1. Tabelul Posesivelor</h4>\n<ul>\n  <li><code>mi / mis</code> = al meu, a mea / ai mei, ale mele (<em>mi libro, mis libros</em>).</li>\n  <li><code>tu / tus</code> = al tău, a ta / ai tăi, ale tale (<em>tu casa, tus amigos</em>). Fără accent grafic!</li>\n  <li><code>su / sus</code> = al său, al lui, al ei, al dumneavoastră (<em>su pasaporte, sus llaves</em>).</li>\n  <li><code>nuestro/a, nuestros/as</code> = al nostru, a noastră, ai noștri (se acordă și în gen!).</li>\n  <li><code>vuestro/a, vuestros/as</code> = al vostru.</li>\n  <li><code>su / sus</code> = al lor, al dumneavoastră (plural).</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nmi maleta y mis documentos\n</code></pre>\n",
    "glossary": [
      {
        "term": "mi / mis",
        "def": "Posesiv pentru persoana I: 'meu' / 'mei'."
      },
      {
        "term": "tu vs tú",
        "def": "'tu' fără accent este adjectiv posesiv (tu coche); 'tú' cu accent este pronume subiect (tú hablas)."
      },
      {
        "term": "su / sus",
        "def": "Posesiv polivalent ce înseamnă 'al lui', 'al ei' sau 'al Dumneavoastră'."
      },
      {
        "term": "nuestro / nuestra",
        "def": "Singurul posesiv de bază care se acordă și în gen: nuestro hijo / nuestra hija."
      }
    ],
    "matchingPairs": [
      {
        "left": "mi amigo / mis amigos",
        "right": "prietenul meu / prietenii mei"
      },
      {
        "left": "tu pasaporte",
        "right": "pașaportul tău"
      },
      {
        "left": "su casa",
        "right": "casa lui / casa ei / casa dumneavoastră"
      },
      {
        "left": "nuestra familia",
        "right": "familia noastră (acord feminin)"
      }
    ],
    "quiz": {
      "question": "Care este diferența dintre 'tu' (fără accent) și 'tú' (cu accent)?",
      "options": [
        "'tu' este adjectiv posesiv ('tău': tu libro), iar 'tú' este pronumele subiect ('tu': tú eres).",
        "Sunt complet identice.",
        "'tu' se folosește doar pentru femei.",
        "'tú' înseamnă 'eu'."
      ],
      "correctIndex": 0,
      "explanation": "Accentul diacritic diferențiază pronumele personal 'tú' (tú tienes) de adjectivul posesiv 'tu' (tu amigo)."
    },
    "task": "Scrie sintagma 'mi maleta y mis documentos' (valiza mea și documentele mele).",
    "starterCode": "mi maleta y mis documentos",
    "expectedOutputPattern": "mi\\s+maleta\\s+y\\s+mis\\s+documentos\\.?",
    "hint": "Scrie mi maleta y mis documentos",
    "prompt": "Scrie sintagma 'mi maleta y mis documentos' (valiza mea și documentele mele).",
    "officialSolution": "mi maleta y mis documentos",
    "example": "mi maleta y mis documentos",
    "regexPattern": "mi\\s+maleta\\s+y\\s+mis\\s+documentos\\.?"
  },
  {
    "id": "es-a1-p18",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 18: Corpul Uman & Cum Exprimăm Durerea (Me duele...)",
    "theory": "\n<p>Pentru a spune că te doare ceva în spaniolă, se folosește verbul reflexiv-afectiv <strong>DOLER</strong> (a durea). Acesta funcționează exact ca verbul <em>gustar</em>!</p>\n<h4>1. Părțile Corpului (El Cuerpo Humano)</h4>\n<p><code>la cabeza</code> (capul), <code>la espalda</code> (spatele), <code>el estómago</code> (stomacul), <code>la garganta</code> (gâtul), <code>los ojos</code> (ochii), <code>las muelas / los dientes</code> (dinții/măselele), <code>el brazo</code> (brațul), <code>la pierna</code> (piciorul).</p>\n<h4>2. Structura: ME DUELE / ME DUELEN</h4>\n<ul>\n  <li>Dacă doare o singură parte (singular): <strong>Me duele</strong> (<em>Me duele la cabeza</em> = Mă doare capul).</li>\n  <li>Dacă dor mai multe părți (plural): <strong>Me duelen</strong> (<em>Me duelen los ojos / los pies</em> = Mă dor ochii / picioarele).</li>\n</ul>\n<p>La medic: <em>Tengo fiebre</em> (Am febră), <em>Estoy resfriado</em> (Sunt răcit).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nMe duele la cabeza y tengo fiebre.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Me duele...",
        "def": "'Mă doare...' urmat de o parte a corpului la singular."
      },
      {
        "term": "Me duelen...",
        "def": "'Mă dor...' urmat de o parte a corpului la plural."
      },
      {
        "term": "la cabeza / la espalda",
        "def": "Capul / spatele."
      },
      {
        "term": "Tengo fiebre",
        "def": "Am febră (se folosește verbul tener)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Me duele la cabeza",
        "right": "Mă doare capul (singular)"
      },
      {
        "left": "Me duelen los pies",
        "right": "Mă dor picioarele (plural: duelen)"
      },
      {
        "left": "Tengo dolor de garganta",
        "right": "Am durere de gât"
      },
      {
        "left": "Estoy enfermo",
        "right": "Sunt bolnav (cu estar)"
      }
    ],
    "quiz": {
      "question": "Ce formă a verbului doler este corectă în propoziția 'Me ... los ojos' (Mă dor ochii)?",
      "options": [
        "duelen (deoarece 'los ojos' este la plural)",
        "duele",
        "duelo",
        "dolemos"
      ],
      "correctIndex": 0,
      "explanation": "La fel ca verbul gustar, doler se acordă cu ce doare: dacă este plural (los ojos), folosim 'duelen'."
    },
    "task": "Scrie propoziția 'Me duele la cabeza y tengo fiebre.' (Mă doare capul și am febră).",
    "starterCode": "Me duele ",
    "expectedOutputPattern": "Me\\s+duele\\s+la\\s+cabeza\\s+y\\s+tengo\\s+fiebre\\.?",
    "hint": "Scrie Me duele la cabeza y tengo fiebre.",
    "prompt": "Scrie propoziția 'Me duele la cabeza y tengo fiebre.' (Mă doare capul și am febră).",
    "officialSolution": "Me duele la cabeza y tengo fiebre.",
    "example": "Me duele la cabeza y tengo fiebre.",
    "regexPattern": "Me\\s+duele\\s+la\\s+cabeza\\s+y\\s+tengo\\s+fiebre\\.?"
  },
  {
    "id": "es-a1-p19",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 19: Mâncarea, Băuturile & La Restaurant (En el Restaurante)",
    "theory": "\n<p>Bucătăria spaniolă și tapas-urile sunt celebre în toată lumea. Iată vocabularul de bază pentru a comanda la bar sau restaurant:</p>\n<h4>1. Mâncăruri & Băuturi</h4>\n<ul>\n  <li><em>el pan</em> (pâinea), <em>el queso</em> (brânza), <em>el jamón</em> (șunca), <em>el pollo</em> (puiul), <em>el pescado</em> (peștele).</li>\n  <li><em>el agua</em> (apa - feminin, dar primește 'el' la singular pentru eufonie!), <em>el café con leche</em> (cafea cu lapte), <em>el zumo de naranja</em> (suc de portocale), <em>la cerveza</em> (berea), <em>el vino tinto</em> (vinul roșu).</li>\n</ul>\n<h4>2. Cum Comanzi Politicos</h4>\n<ul>\n  <li><code>Para mí...</code> = Pentru mine... (<em>Para mí, una paella, por favor</em>).</li>\n  <li><code>Quisiera...</code> / <code>Me gustaría...</code> = Aș dori...</li>\n  <li><code>¿Nos trae la cuenta, por favor?</code> = Ne aduceți nota de plată, vă rog?</li>\n  <li><code>¡Buen provecho!</code> = Poftă bună!</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nPara mí una paella y un vaso de agua, por favor.\n</code></pre>\n",
    "glossary": [
      {
        "term": "la cuenta, por favor",
        "def": "Cum ceri nota de plată în Spania ('Nota, vă rog')."
      },
      {
        "term": "el agua",
        "def": "Apa (substantiv feminin ce ia articolul 'el' la singular pentru a nu zice 'la agua')."
      },
      {
        "term": "las tapas",
        "def": "Mici porții de mâncare servite tradițional la băuturi în Spania."
      },
      {
        "term": "¡Buen provecho!",
        "def": "Urarea spaniolă pentru 'Poftă bună!'."
      }
    ],
    "matchingPairs": [
      {
        "left": "¿La cuenta, por favor?",
        "right": "Nota de plată, vă rog"
      },
      {
        "left": "Un café con leche",
        "right": "O cafea cu lapte"
      },
      {
        "left": "Una botella de agua",
        "right": "O sticlă de apă"
      },
      {
        "left": "¡Buen provecho!",
        "right": "Poftă bună!"
      }
    ],
    "quiz": {
      "question": "Cum ceri nota de plată chelnerului într-un restaurant din Madrid?",
      "options": [
        "¿La cuenta, por favor?",
        "¿El precio, señor?",
        "¿La adición, por favor?",
        "¿Cuánto dinero quiero?"
      ],
      "correctIndex": 0,
      "explanation": "'La cuenta, por favor' este formula standard și universală în lumea hispanică."
    },
    "task": "Comandă politicos: 'Para mí una paella y un vaso de agua, por favor.'.",
    "starterCode": "Para mí ",
    "expectedOutputPattern": "Para\\s+m[íi]\\s+una\\s+paella\\s+y\\s+un\\s+vaso\\s+de\\s+agua,\\s*por\\s+favor\\.?",
    "hint": "Scrie Para mí una paella y un vaso de agua, por favor.",
    "prompt": "Comandă politicos: 'Para mí una paella y un vaso de agua, por favor.'.",
    "officialSolution": "Para mí una paella y un vaso de agua, por favor.",
    "example": "Para mí una paella y un vaso de agua, por favor.",
    "regexPattern": "Para\\s+m[íi]\\s+una\\s+paella\\s+y\\s+un\\s+vaso\\s+de\\s+agua,\\s*por\\s+favor\\.?"
  },
  {
    "id": "es-a1-p20",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 20: Locuința & Verbul Existențial „HAY” (Acolo se află / Există)",
    "theory": "\n<p>Forma impersonală <strong>HAY</strong> (de la verbul haber) se traduce prin „există”, „se află” sau „este/sunt”, fiind invariabilă (se folosește identic și pentru singular și pentru plural!).</p>\n<h4>1. Încăperile Casei</h4>\n<p><code>la casa</code> (casa), <code>el piso / el apartamento</code> (apartamentul), <code>la cocina</code> (bucătăria), <code>el salón</code> (sufrageria), <code>el dormitorio / la habitación</code> (dormitorul), <code>el baño</code> (baia).</p>\n<h4>2. Utilizarea lui HAY</h4>\n<ul>\n  <li><em>En mi casa <strong>hay</strong> tres dormitorios</em> = În casa mea sunt trei dormitoare.</li>\n  <li><em>¿<strong>Hay</strong> un banco cerca de aquí?</em> = Este o bancă aproape de aici?</li>\n  <li><em>No <strong>hay</strong> problema</em> = Nu este nicio problemă.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nEn mi piso hay un salón grande y dos dormitorios.\n</code></pre>\n",
    "glossary": [
      {
        "term": "HAY",
        "def": "Formă impersonală invariabilă ce înseamnă 'Există / Se află' (atât singular cât și plural)."
      },
      {
        "term": "el dormitorio",
        "def": "Dormitorul în limba spaniolă."
      },
      {
        "term": "el salón",
        "def": "Camera de zi / sufrageria."
      },
      {
        "term": "cerca de / lejos de",
        "def": "Aproape de / departe de."
      }
    ],
    "matchingPairs": [
      {
        "left": "Hay una mesa",
        "right": "Se află o masă (singular)"
      },
      {
        "left": "Hay cuatro sillas",
        "right": "Se află patru scaune (plural - tot cu hay!)"
      },
      {
        "left": "No hay problema",
        "right": "Nu este nicio problemă"
      },
      {
        "left": "en la cocina",
        "right": "în bucătărie"
      }
    ],
    "quiz": {
      "question": "Ce formă a verbului folosești pentru a spune 'Se află multe hoteluri în acest oraș'?",
      "options": [
        "Hay (Hay muchos hoteles)",
        "Están muchos hoteles",
        "Son muchos hoteles",
        "Hacen muchos hoteles"
      ],
      "correctIndex": 0,
      "explanation": "'Hay' este forma impersonală existențială universală folosită cu substantive nedeterminate sau cantități la plural."
    },
    "task": "Scrie propoziția 'En mi piso hay un salón grande y dos dormitorios.'.",
    "starterCode": "En mi piso ",
    "expectedOutputPattern": "En\\s+mi\\s+piso\\s+hay\\s+un\\s+sal[óo]n\\s+grande\\s+y\\s+dos\\s+dormitorios\\.?",
    "hint": "Scrie En mi piso hay un salón grande y dos dormitorios.",
    "prompt": "Scrie propoziția 'En mi piso hay un salón grande y dos dormitorios.'.",
    "officialSolution": "En mi piso hay un salón grande y dos dormitorios.",
    "example": "En mi piso hay un salón grande y dos dormitorios.",
    "regexPattern": "En\\s+mi\\s+piso\\s+hay\\s+un\\s+sal[óo]n\\s+grande\\s+y\\s+dos\\s+dormitorios\\.?"
  },
  {
    "id": "es-a1-p21",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 21: Orașul & Întrebarea Direcției (La Ciudad y las Direcciones)",
    "theory": "\n<p>Când vizitezi Madrid, Barcelona sau Sevilla, orientarea în oraș necesită câteva formule clare:</p>\n<h4>1. Locuri Publice Importante</h4>\n<p><code>la calle</code> (strada), <code>la plaza</code> (piața), <code>la estación de tren / autobús</code> (gara / autogara), <code>el aeropuerto</code> (aeroportul), <code>la farmacia</code> (farmacia), <code>el supermercado</code> (supermarketul).</p>\n<h4>2. Indicații de Traseu</h4>\n<ul>\n  <li><code>Siga todo recto</code> [siga todo rekto] = Mergeți drept înainte.</li>\n  <li><code>Gire a la izquierda</code> = Virați la stânga.</li>\n  <li><code>Gire a la derecha</code> = Virați la dreapta.</li>\n  <li><code>Tome la primera calle</code> = Luați prima stradă.</li>\n  <li><code>¿Por dónde se va a...?</code> = Pe unde se merge spre...?</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nSiga todo recto y gire a la derecha, por favor.\n</code></pre>\n",
    "glossary": [
      {
        "term": "todo recto",
        "def": "Drept înainte (atenție: 'a la derecha' = la dreapta; 'todo recto' = drept înainte!)."
      },
      {
        "term": "a la izquierda / derecha",
        "def": "La stânga / la dreapta."
      },
      {
        "term": "la calle",
        "def": "Strada."
      },
      {
        "term": "la estación de tren",
        "def": "Gara de tren."
      }
    ],
    "matchingPairs": [
      {
        "left": "Siga todo recto",
        "right": "Mergeți drept înainte"
      },
      {
        "left": "Gire a la derecha",
        "right": "Virați la dreapta"
      },
      {
        "left": "Gire a la izquierda",
        "right": "Virați la stânga"
      },
      {
        "left": "¿Dónde está el metro?",
        "right": "Unde este metroul?"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă instrucțiunea 'Siga todo recto y luego gire a la izquierda'?",
      "options": [
        "Mergeți drept înainte și apoi virați la stânga.",
        "Mergeți la dreapta și opriți-vă.",
        "Luați autobuzul spre aeroport.",
        "Întoarceți-vă la hotel."
      ],
      "correctIndex": 0,
      "explanation": "'Todo recto' înseamnă drept înainte, iar 'a la izquierda' înseamnă la stânga."
    },
    "task": "Scrie îndrumarea 'Siga todo recto y gire a la derecha, por favor.'.",
    "starterCode": "Siga todo ",
    "expectedOutputPattern": "Siga\\s+todo\\s+recto\\s+y\\s+gire\\s+a\\s+la\\s+derecha,\\s*por\\s+favor\\.?",
    "hint": "Scrie Siga todo recto y gire a la derecha, por favor.",
    "prompt": "Scrie îndrumarea 'Siga todo recto y gire a la derecha, por favor.'.",
    "officialSolution": "Siga todo recto y gire a la derecha, por favor.",
    "example": "Siga todo recto y gire a la derecha, por favor.",
    "regexPattern": "Siga\\s+todo\\s+recto\\s+y\\s+gire\\s+a\\s+la\\s+derecha,\\s*por\\s+favor\\.?"
  },
  {
    "id": "es-a1-p22",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 35,
    "title": "Capitolul 22: Vremea & Starea Meteo (¿Qué tiempo hace?)",
    "theory": "\n<p>Pentru a întreba cum este vremea în spaniolă, spunem: <strong>« ¿Qué tiempo hace? »</strong>. Cele mai multe răspunsuri folosesc verbul <strong>HACER</strong> (a face):</p>\n<h4>1. Expresii Climatice cu HACER</h4>\n<ul>\n  <li><code>Hace buen tiempo</code> = E vreme frumoasă.</li>\n  <li><code>Hace mal tiempo</code> = E vreme urâtă.</li>\n  <li><code>Hace calor</code> = E cald.</li>\n  <li><code>Hace frío</code> = E frig.</li>\n  <li><code>Hace sol</code> = E soare / strălucește soarele.</li>\n  <li><code>Hace viento</code> = E vânt.</li>\n</ul>\n<h4>2. Verbe Climatice</h4>\n<ul>\n  <li><code>Llueve</code> (de la <em>llover</em>) = Plouă / <code>Está lloviendo</code> = Plouă chiar acum.</li>\n  <li><code>Nieva</code> (de la <em>nevar</em>) = Ninge.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nHoy hace muy buen tiempo y hace sol.\n</code></pre>\n",
    "glossary": [
      {
        "term": "¿Qué tiempo hace?",
        "def": "Întrebarea clasică: 'Cum este vremea?'."
      },
      {
        "term": "Hace calor / frío",
        "def": "Descrierea temperaturii cu verbul hacer ('face cald/frig')."
      },
      {
        "term": "Llueve",
        "def": "'Plouă' (verb neregulat llover -> llueve)."
      },
      {
        "term": "Hace sol",
        "def": "'Este soare'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Hace mucho calor",
        "right": "Este foarte cald"
      },
      {
        "left": "Hace mucho frío",
        "right": "Este foarte frig"
      },
      {
        "left": "Hoy llueve",
        "right": "Astăzi plouă"
      },
      {
        "left": "Hace buen tiempo",
        "right": "Este vreme frumoasă"
      }
    ],
    "quiz": {
      "question": "Cum spui 'Astăzi e cald și e soare' în limba spaniolă?",
      "options": [
        "Hoy hace calor y hace sol.",
        "Hoy es caliente y sol.",
        "Hoy está sol y calor.",
        "Hoy tiene calor."
      ],
      "correctIndex": 0,
      "explanation": "Temperatura și soarele se exprimă canonic cu verbul 'hacer': 'hace calor y hace sol'."
    },
    "task": "Scrie propoziția meteo 'Hoy hace muy buen tiempo y hace sol.'.",
    "starterCode": "Hoy hace ",
    "expectedOutputPattern": "Hoy\\s+hace\\s+muy\\s+buen\\s+tiempo\\s+y\\s+hace\\s+sol\\.?",
    "hint": "Scrie Hoy hace muy buen tiempo y hace sol.",
    "prompt": "Scrie propoziția meteo 'Hoy hace muy buen tiempo y hace sol.'.",
    "officialSolution": "Hoy hace muy buen tiempo y hace sol.",
    "example": "Hoy hace muy buen tiempo y hace sol.",
    "regexPattern": "Hoy\\s+hace\\s+muy\\s+buen\\s+tiempo\\s+y\\s+hace\\s+sol\\.?"
  },
  {
    "id": "es-a1-p23",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 40,
    "title": "Capitolul 23: Verbul „IR” (A MERGE) & El Futuro Próximo (IR + A + Infinitiv)",
    "theory": "\n<p>Verbul <strong>ir</strong> (a merge) este complet neregulat, dar este cheia pentru a construi <strong>viitorul apropiat (El Futuro Próximo)</strong>.</p>\n<h4>1. Conjugarea Verbului IR</h4>\n<ul>\n  <li><code>Yo voy</code> [voi] = Eu merg.</li>\n  <li><code>Tú vas</code> = Tu mergi.</li>\n  <li><code>Él / Ella / Usted va</code> = El / Ea merge.</li>\n  <li><code>Nosotros vamos</code> = Noi mergem.</li>\n  <li><code>Vosotros vais</code> = Voi mergeți.</li>\n  <li><code>Ellos / Ellas / Ustedes van</code> = Ei / Ele merg.</li>\n</ul>\n<h4>2. El Futuro Próximo (IR + A + Infinitiv)</h4>\n<p>Formula magică este: <strong>IR conjugat + prepoziția 'A' + Infinitivul verbului</strong> (echivalentul perfect al lui 'going to'):</p>\n<ul>\n  <li><em><strong>Voy a comer</strong> paella</em> = Voi mânca paella.</li>\n  <li><em><strong>Vamos a viajar</strong> a España</em> = Vom călători în Spania.</li>\n  <li><em>¿Qué <strong>vas a hacer</strong> hoy?</em> = Ce ai de gând să faci azi?</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nMañana voy a estudiar español con mis amigos.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Ir",
        "def": "Verbul 'a merge' (voy, vas, va, vamos, vais, van)."
      },
      {
        "term": "Ir + a + infinitivo",
        "def": "Structura viitorului apropiat în spaniolă ('urmează să fac ceva')."
      },
      {
        "term": "¡Vamos!",
        "def": "Exclamație celebră ce înseamnă 'Haidem!' / 'Să mergem!'."
      },
      {
        "term": "al (a + el)",
        "def": "Contracție obligatorie: 'Voy al cine' (nu 'Voy a el cine')."
      }
    ],
    "matchingPairs": [
      {
        "left": "Voy a comer",
        "right": "Voi mânca / Urmează să mănânc"
      },
      {
        "left": "Vamos a la playa",
        "right": "Mergem la plajă"
      },
      {
        "left": "Van a salir",
        "right": "Ei vor ieși"
      },
      {
        "left": "¿Qué vas a hacer?",
        "right": "Ce vei face?"
      }
    ],
    "quiz": {
      "question": "Ce prepoziție este OBLIGATORIE între verbul 'ir' și infinitiv pentru a forma viitorul apropiat (ex: 'Voy ... estudiar')?",
      "options": [
        "a (Voy a estudiar)",
        "de",
        "por",
        "en"
      ],
      "correctIndex": 0,
      "explanation": "Structura viitorului apropiat în spaniolă cere întotdeauna prepoziția 'a': 'Ir + a + infinitivo'."
    },
    "task": "Scrie propoziția la viitor apropiat 'Mañana voy a estudiar español con mis amigos.'.",
    "starterCode": "Mañana voy ",
    "expectedOutputPattern": "Ma[ñn]ana\\s+voy\\s+a\\s+estudiar\\s+espa[ñn]ol\\s+con\\s+mis\\s+amigos\\.?",
    "hint": "Scrie Mañana voy a estudiar español con mis amigos.",
    "prompt": "Scrie propoziția la viitor apropiat 'Mañana voy a estudiar español con mis amigos.'.",
    "officialSolution": "Mañana voy a estudiar español con mis amigos.",
    "example": "Mañana voy a estudiar español con mis amigos.",
    "regexPattern": "Ma[ñn]ana\\s+voy\\s+a\\s+estudiar\\s+espa[ñn]ol\\s+con\\s+mis\\s+amigos\\.?"
  },
  {
    "id": "es-a1-p24",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 40,
    "title": "Capitolul 24: Verbele Reflexive & Rutina Zilnică (Levantarse, Ducharse)",
    "theory": "\n<p>Verbele care descriu rutina personală sunt <strong>verbe reflexive</strong> și sunt însoțite de pronumele reflexive: <code>me, te, se, nos, os, se</code>.</p>\n<h4>1. Conjugarea Verbului LEVANTARSE (A se scula din pat)</h4>\n<ul>\n  <li><code>Yo me levanto</code> = Eu mă scol.</li>\n  <li><code>Tú te levantas</code> = Tu te scoli.</li>\n  <li><code>Él / Ella se levanta</code> = El / Ea se scoală.</li>\n  <li><code>Nosotros nos levantamos</code> = Noi ne sculăm.</li>\n  <li><code>Vosotros os levantáis</code> = Voi vă sculați.</li>\n  <li><code>Ellos se levantan</code> = Ei se scoală.</li>\n</ul>\n<h4>2. Alte Verbe de Rutină</h4>\n<p><code>despertarse (e->ie)</code> (a se trezi: <em>me despierto</em>), <code>ducharse</code> (a face duș), <code>vestirse (e->i)</code> (a se îmbrăca), <code>acostarse (o->ue)</code> (a merge la culcare: <em>me acuesto</em>).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nTodos los días me levanto a las siete de la mañana.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Verbos reflexivos",
        "def": "Verbe marcate la infinitiv cu '-se' ce folosesc pronumele me, te, se, nos, os, se."
      },
      {
        "term": "me levanto",
        "def": "'Mă scol din pat'."
      },
      {
        "term": "me acuesto",
        "def": "'Mă culc' (cu diftongare o -> ue)."
      },
      {
        "term": "ducharse",
        "def": "A face duș."
      }
    ],
    "matchingPairs": [
      {
        "left": "Me despierto a las 7",
        "right": "Mă trezesc la ora 7"
      },
      {
        "left": "Me ducho por la mañana",
        "right": "Fac duș dimineața"
      },
      {
        "left": "Se viste rápido",
        "right": "Se îmbracă repede"
      },
      {
        "left": "Nos acostamos temprano",
        "right": "Ne culcăm devreme"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă pentru 'Noi facem duș' folosind verbul reflexiv 'ducharse'?",
      "options": [
        "Nosotros nos duchamos.",
        "Nosotros se duchamos.",
        "Nosotros duchamos.",
        "Nosotros os duchamos."
      ],
      "correctIndex": 0,
      "explanation": "La persoana 'nosotros', pronumele reflexiv corespunzător este 'nos': 'Nosotros nos duchamos'."
    },
    "task": "Scrie propoziția de rutină 'Todos los días me levanto a las siete de la mañana.'.",
    "starterCode": "Todos los días ",
    "expectedOutputPattern": "Todos\\s+los\\s+d[íi]as\\s+me\\s+levanto\\s+a\\s+las\\s+siete\\s+de\\s+la\\s+ma[ñn]ana\\.?",
    "hint": "Scrie Todos los días me levanto a las siete de la mañana.",
    "prompt": "Scrie propoziția de rutină 'Todos los días me levanto a las siete de la mañana.'.",
    "officialSolution": "Todos los días me levanto a las siete de la mañana.",
    "example": "Todos los días me levanto a las siete de la mañana.",
    "regexPattern": "Todos\\s+los\\s+d[íi]as\\s+me\\s+levanto\\s+a\\s+las\\s+siete\\s+de\\s+la\\s+ma[ñn]ana\\.?"
  },
  {
    "id": "es-a1-p25",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)",
    "xp": 45,
    "title": "Capitolul 25: Sinteză Conversațională A1: Sosirea la Hotel & Înregistrarea",
    "theory": "\n<p>¡Enhorabuena! Ai finalizat modulul A1 de la zero. Să integrăm toate cunoștințele dobândite (saluturi, ser/estar/tener, numere, politețe) într-o conversație autentică la recepția unui hotel din Spania:</p>\n<h4>1. Replicile Recepționerului</h4>\n<ul>\n  <li><em>¡Buenas tardes! Bienvenido al Hotel Sol.</em></li>\n  <li><em>¿Tiene una reserva?</em> (Aveți o rezervare?)</li>\n  <li><em>¿A qué nombre está la reserva?</em> (Pe ce nume este rezervarea?)</li>\n  <li><em>¿Me deja su pasaporte, por favor?</em> (Îmi lăsați pașaportul, vă rog?)</li>\n</ul>\n<h4>2. Răspunsurile Oaspetelui</h4>\n<ul>\n  <li><em>Sí, tengo una reserva a nombre de Radu Popescu.</em></li>\n  <li><em>Es para tres noches, con desayuno incluido.</em> (Pentru trei nopți, cu mic dejun inclus.)</li>\n  <li><em>Aquí tiene mi pasaporte. ¿A qué hora es el desayuno?</em></li>\n  <li><em>El desayuno es de 7:30 a 10:30. Su habitación es la 305 en la tercera planta.</em></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\n¡Buenas tardes! Tengo una reserva para dos personas, por favor.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Tengo una reserva",
        "def": "Am o rezervare la hotel sau restaurant."
      },
      {
        "term": "a nombre de...",
        "def": "Pe numele lui..."
      },
      {
        "term": "Aquí tiene",
        "def": "'Poftiți / Iată' la înmânarea unui document."
      },
      {
        "term": "la habitación",
        "def": "Camera de hotel."
      }
    ],
    "matchingPairs": [
      {
        "left": "Tengo una reserva",
        "right": "Am o rezervare"
      },
      {
        "left": "¿A qué nombre?",
        "right": "Pe ce nume?"
      },
      {
        "left": "Aquí tiene mi pasaporte",
        "right": "Iată pașaportul meu"
      },
      {
        "left": "Para tres noches",
        "right": "Pentru trei nopți"
      }
    ],
    "quiz": {
      "question": "Cum îi spui recepționerului spaniol că ai o rezervare pe numele 'García'?",
      "options": [
        "Tengo una reserva a nombre de García.",
        "Soy una reserva nombre García.",
        "Mi reserva está García.",
        "Hago una reserva García."
      ],
      "correctIndex": 0,
      "explanation": "Formula canonică în spaniolă este 'Tengo una reserva a nombre de [Nume]'."
    },
    "task": "Scrie replica '¡Buenas tardes! Tengo una reserva para dos personas, por favor.'.",
    "starterCode": "¡Buenas tardes! ",
    "expectedOutputPattern": "(?:[¡!]\\s*)?Buenas\\s+tardes[!\\s]+Tengo\\s+una\\s+reserva\\s+para\\s+dos\\s+personas,\\s*por\\s+favor\\.?",
    "hint": "Scrie ¡Buenas tardes! Tengo una reserva para dos personas, por favor.",
    "prompt": "Scrie replica '¡Buenas tardes! Tengo una reserva para dos personas, por favor.'.",
    "officialSolution": "¡Buenas tardes! Tengo una reserva para dos personas, por favor.",
    "example": "¡Buenas tardes! Tengo una reserva para dos personas, por favor.",
    "regexPattern": "(?:[¡!]\\s*)?Buenas\\s+tardes[!\\s]+Tengo\\s+una\\s+reserva\\s+para\\s+dos\\s+personas,\\s*por\\s+favor\\.?"
  },
  {
    "id": "es-b1-p26",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 26: Pretérito Perfecto Compuesto (He comido, has hablado — Trecutul Apropiat)",
    "theory": "\n<p><strong>Pretérito Perfecto Compuesto</strong> este timpul acțiunilor finalizate într-o unitate de timp care <strong>încă include momentul prezent</strong> (marcat de: <em>hoy</em>, <em>esta mañana</em>, <em>esta semana</em>, <em>este año</em>, <em>últimamente</em>, <em>alguna vez</em>, <em>nunca</em>).</p>\n<h4>1. Rețeta de Formare</h4>\n<p><code>Auxiliarul HABER la prezent + Participiul Trecut Invariabil</code></p>\n<pre><code>Yo he hablado / comido / vivido\nTú has hablado / comido / vivido\nÉl / Ella / Usted ha hablado / comido / vivido\nNosotros hemos hablado / comido / vivido\nVosotros habéis hablado / comido / vivido\nEllos / Ustedes han hablado / comido / vivido\n</code></pre>\n<h4>2. Regula Invariabilității</h4>\n<p>Spre deosebire de franceză sau italiană, în spaniolă participiul trecut <strong>NU se acordă NICIODATĂ</strong> și <strong>NU se separă</strong> de auxiliar: <em>Ella ha comido</em> (nu comid<strong>a</strong>!).</p>\n",
    "glossary": [
      {
        "term": "Pretérito Perfecto",
        "def": "Timpul compus spaniol pentru acțiuni trecute legate de prezent (hoy, esta semana)."
      },
      {
        "term": "Auxiliarul HABER",
        "def": "He, has, ha, hemos, habéis, han — unicul auxiliar folosit la timpurile compuse active."
      },
      {
        "term": "Participiu invariabil",
        "def": "Forma în -ado/-ido nu își schimbă niciodată terminația în funcție de gen sau număr."
      },
      {
        "term": "Marcatori temporali (Hoy)",
        "def": "Indică faptul că perioada de timp nu s-a scurs încă în momentul vorbirii."
      }
    ],
    "matchingPairs": [
      {
        "left": "Hoy he estudiado mucho",
        "right": "Astăzi am învățat mult"
      },
      {
        "left": "Esta semana hemos trabajado",
        "right": "Săptămâna aceasta am lucrat"
      },
      {
        "left": "¿Has estado en España?",
        "right": "Ai fost vreodată în Spania?"
      },
      {
        "left": "Nunca han visto eso",
        "right": "Ei nu au văzut niciodată asta"
      }
    ],
    "quiz": {
      "question": "Cum se traduce corect 'Astăzi am mâncat paella' folosind pretérito perfecto?",
      "options": [
        "Hoy he comido paella. (haber + participiu invariabil)",
        "Hoy he comida paella.",
        "Hoy soy comido paella.",
        "Hoy comí paella siempre."
      ],
      "correctIndex": 0,
      "explanation": "Cu marcatorul 'Hoy', folosim 'he comido' (haber la prezent + participiu invariabil în -o)."
    },
    "task": "Scrie propoziția 'Hoy he estudiado español y he hablado con mi amigo.' (Astăzi am învățat spaniolă și am vorbit cu prietenul meu).",
    "starterCode": "Hoy he estudiado ",
    "expectedOutputPattern": "Hoy\\s+he\\s+estudiado\\s+espa[ñn]ol\\s+y\\s+he\\s+hablado\\s+con\\s+mi\\s+amigo\\.?",
    "hint": "Scrie Hoy he estudiado español y he hablado con mi amigo.",
    "prompt": "Scrie propoziția 'Hoy he estudiado español y he hablado con mi amigo.' (Astăzi am învățat spaniolă și am vorbit cu prietenul meu).",
    "officialSolution": "Hoy he estudiado español y he hablado con mi amigo.",
    "example": "Hoy he estudiado español y he hablado con mi amigo.",
    "regexPattern": "Hoy\\s+he\\s+estudiado\\s+espa[ñn]ol\\s+y\\s+he\\s+hablado\\s+con\\s+mi\\s+amigo\\.?"
  },
  {
    "id": "es-b1-p27",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 27: Pretérito Indefinido (Perfectul Simplu Regulat: Hablé, Comí, Viví)",
    "theory": "\n<p><strong>Pretérito Indefinido</strong> (sau <em>Pretérito Perfecto Simple</em>) este timpul suprem al narațiunii spaniole pentru evenimente petrecute într-un moment trecut <strong>complet încheiat</strong>, fără legătură cu prezentul (marcat de: <em>ayer</em>, <em>anoche</em>, <em>el año pasado</em>, <em>en 1995</em>).</p>\n<h4>1. Terminațiile Regulate</h4>\n<ul>\n  <li>Verbe în <code>-ar</code> (<em>hablar</em>):<br>\n  <strong>-é, -aste, -ó, -amos, -asteis, -aron</strong><br>\n  <em>hablé, hablaste, habló, hablamos, hablasteis, hablaron</em>.</li>\n  <li>Verbe în <code>-er / -ir</code> (<em>comer, vivir</em>):<br>\n  <strong>-í, -iste, -ió, -imos, -isteis, -ieron</strong><br>\n  <em>comí, comiste, comió, comimos, comisteis, comieron</em>.</li>\n</ul>\n<h4>2. Accentele Grafice Obligatorii</h4>\n<p>Atenție: persoana I (<em>habl<strong>é</strong>, com<strong>í</strong></em>) și persoana a III-a singular (<em>habl<strong>ó</strong>, com<strong>ió</strong></em>) poartă obligatoriu accent grafic!</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nAyer trabajé ocho horas y comí en un restaurante mexicano.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Pretérito Indefinido",
        "def": "Timpul perfect simplu spaniol pentru fapte punctuale petrecute în intervale de timp expirate."
      },
      {
        "term": "Marcatori de trecut (Ayer)",
        "def": "Ayer (ieri), anoche (aseară), la semana pasada (săptămâna trecută)."
      },
      {
        "term": "Accent grafic pe pers. 1 și 3",
        "def": "Hablé și habló cer obligatoriu accent pe tildă pentru a nu se confunda cu prezentul."
      },
      {
        "term": "Conjugarea unificată -er/-ir",
        "def": "Grupele a doua și a treia împart terminații identice la pretérito indefinido."
      }
    ],
    "matchingPairs": [
      {
        "left": "Ayer hablé con María",
        "right": "Ieri am vorbit cu Maria (-é)"
      },
      {
        "left": "Él comió una ensalada",
        "right": "El a mâncat o salată (-ió)"
      },
      {
        "left": "Vivimos dos años en Madrid",
        "right": "Am trăit doi ani la Madrid (-imos)"
      },
      {
        "left": "Ellos compraron una casa",
        "right": "Ei au cumpărat o casă (-aron)"
      }
    ],
    "quiz": {
      "question": "Care este forma de persoana a 3-a singular (él/ella) a verbului 'escribir' la pretérito indefinido?",
      "options": [
        "escribió (accent grafic pe ó)",
        "escribe",
        "escribía",
        "escribio"
      ],
      "correctIndex": 0,
      "explanation": "La verbele în -er/-ir, persoana a 3-a singular primește terminația '-ió' cu accent obligatoriu: escribió."
    },
    "task": "Scrie propoziția 'Ayer trabajé ocho horas y comí en un restaurante mexicano.'.",
    "starterCode": "Ayer trabajé ",
    "expectedOutputPattern": "Ayer\\s+trabaj[ée]\\s+ocho\\s+horas\\s+y\\s+com[íi]\\s+en\\s+un\\s+restaurante\\s+mexicano\\.?",
    "hint": "Scrie Ayer trabajé ocho horas y comí en un restaurante mexicano.",
    "prompt": "Scrie propoziția 'Ayer trabajé ocho horas y comí en un restaurante mexicano.'.",
    "officialSolution": "Ayer trabajé ocho horas y comí en un restaurante mexicano.",
    "example": "Ayer trabajé ocho horas y comí en un restaurante mexicano.",
    "regexPattern": "Ayer\\s+trabaj[ée]\\s+ocho\\s+horas\\s+y\\s+com[íi]\\s+en\\s+un\\s+restaurante\\s+mexicano\\.?"
  },
  {
    "id": "es-b1-p28",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 28: Pretérito Indefinido: Forme Neregulate Fundamentale",
    "theory": "\n<p>Multe dintre cele mai importante verbe din spaniolă au o rădăcină specială neregulată la pretérito indefinido și împart un <strong>set comun de terminații FĂRĂ accent grafic</strong>:</p>\n<p><strong>-e, -iste, -o, -imos, -isteis, -ieron</strong></p>\n<h4>1. Rădăcini Neregulate Esențiale</h4>\n<ul>\n  <li><code>estar &rarr; estuv-</code> (estuve, estuviste, estuvo...)</li>\n  <li><code>tener &rarr; tuv-</code> (tuve, tuviste, tuvo...)</li>\n  <li><code>hacer &rarr; hic-</code> (hice, hiciste, <strong>hizo</strong>, hicimos...)</li>\n  <li><code>decir &rarr; dij-</code> (dije, dijiste, dijo, dijimos, <strong>dijeron</strong>)</li>\n  <li><code>poder &rarr; pud-</code> (pude, pudiste, pudo...)</li>\n</ul>\n<h4>2. Dubletul Neregulat Unic: SER & IR</h4>\n<p>Verbele <em>ser</em> (a fi) și <em>ir</em> (a merge) au <strong>forme 100% identice</strong> la indefinido (contextul decide înțelesul!):<br>\n<strong>fui, fuiste, fue, fuimos, fuisteis, fueron</strong>.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nEl fin de semana estuve en Barcelona y fui al museo.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Rădăcini neregulate în -u/-i/-j",
        "def": "Estuv-, tuv-, hic-, dij- împart terminațiile comune fără accent grafic."
      },
      {
        "term": "Hizo (pers. 3 faire)",
        "def": "La persoana a 3-a, 'c' se transformă în 'z' pentru a păstra pronunția: hizo."
      },
      {
        "term": "Fui (Ser / Ir)",
        "def": "Formă identică atât pentru 'am fost', cât și pentru 'am mers'."
      },
      {
        "term": "Absența accentului grafic",
        "def": "Verbele cu rădăcină neregulată la indefinido nu poartă niciodată accent grafic."
      }
    ],
    "matchingPairs": [
      {
        "left": "Ayer estuve en casa",
        "right": "Ieri am fost / am stat acasă (estar)"
      },
      {
        "left": "Tuve mucho trabajo",
        "right": "Am avut mult de lucru (tener)"
      },
      {
        "left": "Hizo un pastel delicioso",
        "right": "A făcut o prăjitură delicioasă (hacer)"
      },
      {
        "left": "El año pasado fui a Madrid",
        "right": "Anul trecut am mers la Madrid (ir)"
      }
    ],
    "quiz": {
      "question": "Care este forma de persoana a 3-a singular (él/ella) a verbului 'hacer' la pretérito indefinido?",
      "options": [
        "hizo (cu 'z' pentru păstrarea foneticii)",
        "hició",
        "hace",
        "hizo con acento"
      ],
      "correctIndex": 0,
      "explanation": "La verbul hacer, forma de persoana a 3-a se ortografiază cu 'z' (hizo) și nu poartă accent grafic."
    },
    "task": "Scrie propoziția 'El fin de semana estuve en Barcelona y fui al museo.'.",
    "starterCode": "El fin de semana ",
    "expectedOutputPattern": "El\\s+fin\\s+de\\s+semana\\s+estuve\\s+en\\s+Barcelona\\s+y\\s+fui\\s+al\\s+museo\\.?",
    "hint": "Scrie El fin de semana estuve en Barcelona y fui al museo.",
    "prompt": "Scrie propoziția 'El fin de semana estuve en Barcelona y fui al museo.'.",
    "officialSolution": "El fin de semana estuve en Barcelona y fui al museo.",
    "example": "El fin de semana estuve en Barcelona y fui al museo.",
    "regexPattern": "El\\s+fin\\s+de\\s+semana\\s+estuve\\s+en\\s+Barcelona\\s+y\\s+fui\\s+al\\s+museo\\.?"
  },
  {
    "id": "es-b1-p29",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 29: Pretérito Imperfecto — Rutine & Descrieri în Trecut",
    "theory": "\n<p><strong>Pretérito Imperfecto</strong> descrie cum erau lucrurile în trecut, circumstanțele, stările fizice/psihice și acțiunile habituale din copilărie („ce făceai de obicei”).</p>\n<h4>1. Terminațiile Regulate</h4>\n<ul>\n  <li>Verbe în <code>-ar</code> (<em>hablar</em>):<br>\n  <strong>-aba, -abas, -aba, -ábamos, -abais, -aban</strong><br>\n  <em>hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban</em>.</li>\n  <li>Verbe în <code>-er / -ir</code> (<em>comer, vivir</em>):<br>\n  <strong>-ía, -ías, -ía, -íamos, -íais, -ían</strong> (toate poartă accent pe í!).</li>\n</ul>\n<h4>2. Cele Singure Trei Verbe Neregulate</h4>\n<p>Spaniola este extrem de generoasă: <strong>doar 3 verbe sunt neregulate</strong> la imperfect:</p>\n<ul>\n  <li><code>ser &rarr; era, eras, era, éramos, erais, eran</code></li>\n  <li><code>ir &rarr; iba, ibas, iba, íbamos, ibais, iban</code></li>\n  <li><code>ver &rarr; veía, veías, veía, veíamos, veíais, veían</code></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nCuando era niño, vivía en el campo y jugaba con mis amigos.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Pretérito Imperfecto",
        "def": "Timpul imperfect spaniol pentru descrieri, rutine din trecut și acțiuni continue."
      },
      {
        "term": "-aba / -ía",
        "def": "Sufixele caracteristice ale celor două mari grupe de verbe la imperfect."
      },
      {
        "term": "Era, iba, veía",
        "def": "Singurele trei verbe neregulate din întreaga limbă spaniolă la pretérito imperfecto."
      },
      {
        "term": "De niño / Cuando era joven",
        "def": "Expresii tipice ce introduc o descriere sau o acțiune continuă la imperfect."
      }
    ],
    "matchingPairs": [
      {
        "left": "Cuando era niño",
        "right": "Când eram copil (ser)"
      },
      {
        "left": "Siempre iba al parque",
        "right": "Mergeam mereu în parc (ir)"
      },
      {
        "left": "Vivíamos en una casa grande",
        "right": "Locuiam într-o casă mare (vivir)"
      },
      {
        "left": "Hacía mucho sol",
        "right": "Era foarte însorit (descriere meteo)"
      }
    ],
    "quiz": {
      "question": "Care este forma de persoana I singular (Yo) la imperfect a verbului 'ir'?",
      "options": [
        "iba (Yo iba al colegio)",
        "fui",
        "iría",
        "voy"
      ],
      "correctIndex": 0,
      "explanation": "'Ir' are forma neregulată 'iba' la pretérito imperfecto: yo iba, tú ibas, él iba."
    },
    "task": "Scrie amintirea 'Cuando era niño, vivía en el campo y jugaba con mis amigos.'.",
    "starterCode": "Cuando era niño, ",
    "expectedOutputPattern": "Cuando\\s+era\\s+ni[ñn]o,\\s*viv[íi]a\\s+en\\s+el\\s+campo\\s+y\\s+jugaba\\s+con\\s+mis\\s+amigos\\.?",
    "hint": "Scrie Cuando era niño, vivía en el campo y jugaba con mis amigos.",
    "prompt": "Scrie amintirea 'Cuando era niño, vivía en el campo y jugaba con mis amigos.'.",
    "officialSolution": "Cuando era niño, vivía en el campo y jugaba con mis amigos.",
    "example": "Cuando era niño, vivía en el campo y jugaba con mis amigos.",
    "regexPattern": "Cuando\\s+era\\s+ni[ñn]o,\\s*viv[íi]a\\s+en\\s+el\\s+campo\\s+y\\s+jugaba\\s+con\\s+mis\\s+amigos\\.?"
  },
  {
    "id": "es-b1-p30",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 30: Imperfecto vs Indefinido — Contrastul Narativ Fundamental",
    "theory": "\n<p>Diferențierea dintre <strong>Imperfecto</strong> și <strong>Indefinido</strong> este inima narațiunii în spaniolă.</p>\n<h4>1. Rolurile în Povestire</h4>\n<ul>\n  <li><strong>Imperfecto (Decorul / Fundalul):</strong> Pictează peisajul, ora, starea vremii, ce făcea personajul cândva: <em>Hacía frío y yo caminaba por la calle...</em></li>\n  <li><strong>Indefinido (Evenimentul Punctual):</strong> Acțiunea punctuală care intervine brusc și împinge acțiunea înainte: <em>...cuando de repente vi a mi amigo.</em></li>\n</ul>\n<h4>2. Schema de Aur</h4>\n<p><code>[Acțiune în desfășurare: Imperfecto] + cuando + [Eveniment întrerupător: Indefinido]</code><br>\n<em>Dormía plácidamente cuando sonó la alarma.</em></p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nEstudiaba en mi habitación cuando llegó mi hermano.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Escenario (Imperfecto)",
        "def": "Cadrul temporal, emoțional sau spațial în care se plasează o poveste."
      },
      {
        "term": "Acontecimiento (Indefinido)",
        "def": "Evenimentul specific, marcat în timp, care schimbă starea de lucruri."
      },
      {
        "term": "De repente / De pronto",
        "def": "'Deodată' — conector ce marchează trecerea bruscă spre un pretérito indefinido."
      },
      {
        "term": "Interrupción temporal",
        "def": "Întreruperea unei activități continue printr-un eveniment scurt și punctual."
      }
    ],
    "matchingPairs": [
      {
        "left": "Estudiaba tranquilamente",
        "right": "Învățam liniștit (acțiune continuă: imperfecto)"
      },
      {
        "left": "Sonó el teléfono",
        "right": "A sunat telefonul (întrerupere: indefinido)"
      },
      {
        "left": "Hacía mal tiempo",
        "right": "Era vreme urâtă (descriere de fundal)"
      },
      {
        "left": "Decidimos quedarnos en casa",
        "right": "Am decis să rămânem acasă (decizie punctuală)"
      }
    ],
    "quiz": {
      "question": "În fraza 'Mientras nosotros cenábamos, alguien ... a la puerta', ce formă a verbului 'llamar' este corectă?",
      "options": [
        "llamó (Indefinido: acțiune punctuală care întrerupe cina)",
        "llamaba (Imperfecto)",
        "llama (Presente)",
        "ha llamado"
      ],
      "correctIndex": 0,
      "explanation": "Bătaia la ușă survine punctual în timp ce cina era în desfășurare, cerând 'llamó' (indefinido)."
    },
    "task": "Scrie propoziția 'Estudiaba en mi habitación cuando llegó mi hermano.' (Învățam în camera mea când a sosit fratele meu).",
    "starterCode": "Estudiaba en mi habitación ",
    "expectedOutputPattern": "Estudiaba\\s+en\\s+mi\\s+habitaci[óo]n\\s+quand[o]\\s+lleg[óo]\\s+mi\\s+hermano\\.?",
    "hint": "Scrie Estudiaba en mi habitación cuando llegó mi hermano.",
    "prompt": "Scrie propoziția 'Estudiaba en mi habitación cuando llegó mi hermano.' (Învățam în camera mea când a sosit fratele meu).",
    "officialSolution": "Estudiaba en mi habitación cuando llegó mi hermano.",
    "example": "Estudiaba en mi habitación cuando llegó mi hermano.",
    "regexPattern": "Estudiaba\\s+en\\s+mi\\s+habitaci[óo]n\\s+quand[o]\\s+lleg[óo]\\s+mi\\s+hermano\\.?"
  },
  {
    "id": "es-b1-p31",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 31: Pronombres de Objeto Directo (me, te, lo, la, nos, os, los, las)",
    "theory": "\n<p><strong>Pronombres de Objeto Directo (OD)</strong> înlocuiesc substantivul asupra căruia cade direct acțiunea verbului (răspunde la întrebarea <em>¿qué?</em> sau <em>¿a quién?</em>).</p>\n<h4>1. Formele Pronumelor OD</h4>\n<ul>\n  <li><code>me / te / nos / os</code> (pentru persoane)</li>\n  <li><code>lo</code> = îl / pe el / pe acesta (masculin singular)</li>\n  <li><code>la</code> = o / pe ea / pe aceasta (feminin singular)</li>\n  <li><code>los / las</code> = îi / le (plural masculin / feminin)</li>\n</ul>\n<h4>2. Regula „A personal”</h4>\n<p>Când complementul direct este o ființă umană specifică, spaniola impune prepoziția <strong>a</strong>: <em>Veo <strong>a</strong> María &rarr; <strong>La</strong> veo.</em></p>\n<h4>3. Poziția Pronumelui</h4>\n<p>Stă <strong>în fața</strong> verbului conjugat (<em>Lo compro</em>) SAU se leagă <strong>la sfârșitul</strong> infinitivului / gerunziului (<em>Quiero comprar<strong>lo</strong></em> / <em>Estoy comprándo<strong>lo</strong></em>).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nCompro el periódico por la mañana y lo leo en el metro.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Objeto Directo (OD)",
        "def": "Complementul direct înlocuit prin lo, la, los, las în funcție de gen și număr."
      },
      {
        "term": "A personal",
        "def": "Prepoziția obligatorie în spaniolă înaintea unui complement direct ce reprezintă o persoană."
      },
      {
        "term": "Enclisis (Alipire)",
        "def": "Lipirea pronumelui la sfârșitul formelor de infinitiv, gerunziu și imperativ afirmativ."
      },
      {
        "term": "Poziție proclitică",
        "def": "Plasarea pronumelui nemijlocit înaintea verbului conjugat (ex: Lo tengo)."
      }
    ],
    "matchingPairs": [
      {
        "left": "¿Compras el periódico?",
        "right": "Sí, lo compro todos los días (el periódico &rarr; lo)"
      },
      {
        "left": "¿Conoces a Carmen?",
        "right": "Sí, la conozco muy bien (a Carmen &rarr; la)"
      },
      {
        "left": "¿Tienes las llaves?",
        "right": "Sí, las tengo en el bolsillo (las llaves &rarr; las)"
      },
      {
        "left": "¿Quieres ver la película?",
        "right": "Sí, quiero verla esta noche (enclisis: verla)"
      }
    ],
    "quiz": {
      "question": "Cum înlocuiești 'la carta' în fraza 'Escribo la carta para mi jefe' folosind un pronume OD?",
      "options": [
        "La escribo para mi jefe.",
        "Lo escribo para mi jefe.",
        "Le escribo para mi jefe.",
        "Escribo la para mi jefe."
      ],
      "correctIndex": 0,
      "explanation": "'La carta' este feminin singular, prin urmare se înlocuiește cu pronumele proclitic 'la': La escribo."
    },
    "task": "Scrie replica 'Compro el periódico por la mañana y lo leo en el metro.'.",
    "starterCode": "Compro el periódico ",
    "expectedOutputPattern": "Compro\\s+el\\s+peri[óo]dico\\s+por\\s+la\\s+ma[ñn]ana\\s+y\\s+lo\\s+leo\\s+en\\s+el\\s+metro\\.?",
    "hint": "Scrie Compro el periódico por la mañana y lo leo en el metro.",
    "prompt": "Scrie replica 'Compro el periódico por la mañana y lo leo en el metro.'.",
    "officialSolution": "Compro el periódico por la mañana y lo leo en el metro.",
    "example": "Compro el periódico por la mañana y lo leo en el metro.",
    "regexPattern": "Compro\\s+el\\s+peri[óo]dico\\s+por\\s+la\\s+ma[ñn]ana\\s+y\\s+lo\\s+leo\\s+en\\s+el\\s+metro\\.?"
  },
  {
    "id": "es-b1-p32",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 35,
    "title": "Capitolul 32: Pronombres de Objeto Indirecto (me, te, le, nos, os, les) & Dublarea",
    "theory": "\n<p><strong>Pronombres de Objeto Indirecto (OI)</strong> arată destinatarul sau beneficiarul acțiunii (răspunde la întrebarea <em>¿a quién?</em> &mdash; cui?).</p>\n<h4>1. Formele Pronumelor OI</h4>\n<ul>\n  <li><code>me / te / nos / os</code></li>\n  <li><code>le</code> = lui / ei / Dumneavoastră (singular)</li>\n  <li><code>les</code> = lor / Dumneavoastră plural</li>\n</ul>\n<h4>2. Fenomenul Dublării Pronumelui (Reduplicación)</h4>\n<p>În spaniolă, este o regulă standard ca pronumele indirect (<em>le/les</em>) să apară în propoziție <strong>chiar dacă destinatarul este numit explicit</strong>:</p>\n<p><em><strong>Le</strong> doy el regalo <strong>a Juan</strong>.</em> (Îi dau cadoul lui Juan &mdash; 'le' este obligatoriu!).<br>\n<em><strong>Les</strong> escribo un correo <strong>a mis padres</strong>.</em></p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nLe escribo una carta a mi abuela todos los domingos.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Objeto Indirecto (OI)",
        "def": "Complementul indirect ce desemnează beneficiarul unei acțiuni (me, te, le, nos, os, les)."
      },
      {
        "term": "Reduplicación del pronombre",
        "def": "Dublarea obligatorie a complementului prin pronumele 'le' chiar dacă persoana este numită."
      },
      {
        "term": "Le (singular)",
        "def": "Formă invariabilă în gen: înseamnă atât 'lui' cât și 'ei' sau 'dumneavoastră'."
      },
      {
        "term": "Les (plural)",
        "def": "Formă de plural indirect ce înseamnă 'lor' sau 'dumneavoastră (plural)'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Le hablo a Pedro",
        "right": "Îi vorbesc lui Pedro (dublare cu le)"
      },
      {
        "left": "Le compro flores a mi madre",
        "right": "Îi cumpăr flori mamei mele"
      },
      {
        "left": "Les explico la lección a los alumnos",
        "right": "Le explic lecția elevilor (les plural)"
      },
      {
        "left": "¿Me dices la verdad?",
        "right": "Îmi spui adevărul mie? (me)"
      }
    ],
    "quiz": {
      "question": "De ce fraza 'Doy el libro a María' sună nefiresc în spaniolă fără pronume?",
      "options": [
        "Deoarece spaniola cere dublarea prin 'le': 'Le doy el libro a María'.",
        "Deoarece María trebuie să fie subiectul.",
        "Deoarece lipsește un adjectiv.",
        "Deoarece verbul dar este reflexiv."
      ],
      "correctIndex": 0,
      "explanation": "Dublarea complementului indirect prin 'le' este norma gramaticală firească în spaniolă."
    },
    "task": "Scrie propoziția 'Le escribo una carta a mi abuela todos los domingos.' (Îi scriu o scrisoare bunicii mele în fiecare duminică).",
    "starterCode": "Le escribo una carta ",
    "expectedOutputPattern": "Le\\s+escribo\\s+una\\s+carta\\s+a\\s+mi\\s+abuela\\s+todos\\s+los\\s+domingos\\.?",
    "hint": "Scrie Le escribo una carta a mi abuela todos los domingos.",
    "prompt": "Scrie propoziția 'Le escribo una carta a mi abuela todos los domingos.' (Îi scriu o scrisoare bunicii mele în fiecare duminică).",
    "officialSolution": "Le escribo una carta a mi abuela todos los domingos.",
    "example": "Le escribo una carta a mi abuela todos los domingos.",
    "regexPattern": "Le\\s+escribo\\s+una\\s+carta\\s+a\\s+mi\\s+abuela\\s+todos\\s+los\\s+domingos\\.?"
  },
  {
    "id": "es-b1-p33",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 40,
    "title": "Capitolul 33: Combinarea Pronumelor OD + OI & Transformarea „SE LO / SE LA”",
    "theory": "\n<p>Când o frază conține atât un pronume de Obiect Indirect (cui?) cât și unul de Obiect Direct (ce?), se aplică două reguli fundamentale:</p>\n<h4>1. Ordinea Canonica: INDIRECTUL PRIMUL!</h4>\n<p><code>Subiect + [OI] + [OD] + Verb</code><br>\n<em>¿Me dejas tu libro? &rarr; Sí, <strong>te lo</strong> dejo.</em> (te = OI, lo = OD).</p>\n<h4>2. Regula Eufonică Supremă: LE / LES devine SE!</h4>\n<p>În spaniolă este interzisă cacofonia a două pronume consecutive ce încep cu 'L' (<em>le lo</em>, <em>le la</em>, <em>les los</em>). Prin urmare, <strong>le / les se transformă întotdeauna în SE</strong>:</p>\n<p><em>¿Das el regalo a María? &rarr; Sí, <strong>se lo</strong> doy.</em> (în loc de <em>le lo doy</em>!).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\n¿Tienes el informe? Sí, se lo envío a mi jefe ahora mismo.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Regla SE LO",
        "def": "Transformarea eufonică a lui le/les în 'se' în fața pronumelor lo, la, los, las."
      },
      {
        "term": "Orden OI + OD",
        "def": "Indirectul precede întotdeauna directul în secvența pronominală spaniolă."
      },
      {
        "term": "Cacofonía evitada",
        "def": "Evitarea sunetului dublu l-l (<em>le lo</em>) prin conversia în sunetul sibilant 'se'."
      },
      {
        "term": "Te lo juro",
        "def": "'Ți-o jur' — expresie populară ilustrând combinarea pronumelor te + lo."
      }
    ],
    "matchingPairs": [
      {
        "left": "¿Me prestas el coche?",
        "right": "Sí, te lo presto (te + lo)"
      },
      {
        "left": "¿Le das la carta a Juan?",
        "right": "Sí, se la doy (le &rarr; se + la)"
      },
      {
        "left": "¿Nos envías las fotos?",
        "right": "Sí, os las envío mañana (os + las)"
      },
      {
        "left": "¿Les dices el secreto?",
        "right": "No, no se lo digo (les &rarr; se + lo)"
      }
    ],
    "quiz": {
      "question": "Cum răspunzi afirmativ la '¿Le entregas el informe al director?' înlocuind ambele complemente?",
      "options": [
        "Sí, se lo entrego. (le devine se în fața lui lo)",
        "Sí, le lo entrego.",
        "Sí, lo le entrego.",
        "Sí, se la entrego."
      ],
      "correctIndex": 0,
      "explanation": "OI 'le' devine obligatoriu 'se' în fața OD masculin 'lo' (el informe): 'se lo entrego'."
    },
    "task": "Scrie dialogul '¿Tienes el informe? Sí, se lo envío a mi jefe ahora mismo.'.",
    "starterCode": "¿Tienes el informe? ",
    "expectedOutputPattern": "(?:[¿?]\\s*)?Tienes\\s+el\\s+informe\\?\\s*S[íi],\\s*se\\s+lo\\s+env[íi]o\\s+a\\s+mi\\s+jefe\\s+ahora\\s+mismo\\.?",
    "hint": "Scrie ¿Tienes el informe? Sí, se lo envío a mi jefe ahora mismo.",
    "prompt": "Scrie dialogul '¿Tienes el informe? Sí, se lo envío a mi jefe ahora mismo.'.",
    "officialSolution": "¿Tienes el informe? Sí, se lo envío a mi jefe ahora mismo.",
    "example": "¿Tienes el informe? Sí, se lo envío a mi jefe ahora mismo.",
    "regexPattern": "(?:[¿?]\\s*)?Tienes\\s+el\\s+informe\\?\\s*S[íi],\\s*se\\s+lo\\s+env[íi]o\\s+a\\s+mi\\s+jefe\\s+ahora\\s+mismo\\.?"
  },
  {
    "id": "es-b1-p34",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 40,
    "title": "Capitolul 34: Por vs Para — Distincția Supremă în Limba Spaniolă",
    "theory": "\n<p>Confundarea prepozițiilor <strong>POR</strong> și <strong>PARA</strong> este cea mai răspândită eroare a celor ce învață spaniola. Iată distincția definitivă:</p>\n<h4>1. Când folosim PARA (Săgeata &rarr; Destinație / Scop)</h4>\n<ul>\n  <li><strong>Scopul / Finalitatea:</strong> <em>Estudio español <strong>para</strong> trabajar.</em> (urmat de infinitiv).</li>\n  <li><strong>Destinatarul:</strong> <em>Este regalo es <strong>para</strong> ti.</em></li>\n  <li><strong>Termen limită / Dead-line:</strong> <em>La tarea es <strong>para</strong> el lunes.</em></li>\n  <li><strong>Direcție spre un loc:</strong> <em>Salgo <strong>para</strong> Madrid.</em></li>\n</ul>\n<h4>2. Când folosim POR (Cauza / Mijlocul / Schimbul)</h4>\n<ul>\n  <li><strong>Motivul / Cauza:</strong> <em>Llegué tarde <strong>por</strong> el tráfico.</em> (din cauza).</li>\n  <li><strong>Mijlocul de comunicare/transport:</strong> <em>Te llamo <strong>por</strong> teléfono; Enviado <strong>por</strong> correo.</em></li>\n  <li><strong>Durata / Momentul zilei:</strong> <em>Estudio <strong>por</strong> la mañana; Viví allí <strong>por</strong> tres años.</em></li>\n  <li><strong>Prețul / Schimbul:</strong> <em>Lo compré <strong>por</strong> 20 euros.</em></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nEstudio español para viajar y trabajo por la mañana.\n</code></pre>\n",
    "glossary": [
      {
        "term": "PARA (Finalidad)",
        "def": "Privește înainte: scopul, destinatarul, termenul limită."
      },
      {
        "term": "POR (Causa / Medio)",
        "def": "Privește înapoi sau prin: cauza, mijlocul, durata, prețul de schimb."
      },
      {
        "term": "Por la mañana / tarde",
        "def": "Expresie fixă cu por pentru momentele zilei (dimineața, după-amiaza)."
      },
      {
        "term": "Para siempre",
        "def": "Locuțiune adverbială însemnând 'pentru totdeauna'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Trabajo para ganar dinero",
        "right": "Scop / Finalitate (para)"
      },
      {
        "left": "Gracias por tu ayuda",
        "right": "Cauză / Recunoștință (por)"
      },
      {
        "left": "El informe es para mañana",
        "right": "Termen limită viitor (para)"
      },
      {
        "left": "Lo compré por 50 euros",
        "right": "Preț de schimb comercial (por)"
      }
    ],
    "quiz": {
      "question": "Ce prepoziție folosești în fraza: 'Viajo a España ... mejorar mi pronunciación'?",
      "options": [
        "para (exprimă scopul/finalitatea acțiunii)",
        "por",
        "de",
        "con"
      ],
      "correctIndex": 0,
      "explanation": "'Para' urmat de infinitiv (mejorar) indică obiectivul sau scopul călătoriei."
    },
    "task": "Scrie propoziția 'Estudio español para viajar y trabajo por la mañana.'.",
    "starterCode": "Estudio español ",
    "expectedOutputPattern": "Estudio\\s+espa[ñn]ol\\s+para\\s+viajar\\s+y\\s+trabajo\\s+por\\s+la\\s+ma[ñn]ana\\.?",
    "hint": "Scrie Estudio español para viajar y trabajo por la mañana.",
    "prompt": "Scrie propoziția 'Estudio español para viajar y trabajo por la mañana.'.",
    "officialSolution": "Estudio español para viajar y trabajo por la mañana.",
    "example": "Estudio español para viajar y trabajo por la mañana.",
    "regexPattern": "Estudio\\s+espa[ñn]ol\\s+para\\s+viajar\\s+y\\s+trabajo\\s+por\\s+la\\s+ma[ñn]ana\\.?"
  },
  {
    "id": "es-b1-p35",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 40,
    "title": "Capitolul 35: El Futuro Simple & Forme Neregulate Esențiale",
    "theory": "\n<p><strong>Futuro Simple</strong> (sau <em>Futuro Imperfecto</em>) este timpul proiectării viitoare și al predicțiilor.</p>\n<h4>1. Formare Regulată Extrem de Simplă</h4>\n<p>Se ia <strong>infinitivul întreg</strong> al verbului și se adaugă un set unic de terminații pentru TOATE cele 3 grupe:</p>\n<p><strong>-é, -ás, -á, -emos, -éis, -án</strong></p>\n<p><em>hablaré, comeré, viviré</em> (toate poartă accent grafic cu excepția persoanei I plural <em>-emos</em>!).</p>\n<h4>2. Rădăcini Neregulate Majore</h4>\n<ul>\n  <li><code>tener &rarr; tendr-</code> (tendré, tendrás...)</li>\n  <li><code>poner &rarr; pondr-</code> (pondré) / <code>salir &rarr; saldr-</code> (saldré)</li>\n  <li><code>hacer &rarr; har-</code> (haré, harás, hará...)</li>\n  <li><code>decir &rarr; dir-</code> (diré, dirás, dirá...)</li>\n  <li><code>poder &rarr; podr-</code> (podré) / <code>saber &rarr; sabr-</code> (sabré)</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nMañana tendré una reunión importante y haré todo lo posible.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Futuro Simple",
        "def": "Timpul viitor format din infinitivul complet + terminațiile -é, -ás, -á, -emos, -éis, -án."
      },
      {
        "term": "Rădăcini cu -dr-",
        "def": "Tendr-, pondr-, saldr-, vendr- introduc un d eufonic în rădăcina de viitor."
      },
      {
        "term": "Haré / Diré",
        "def": "Formele contrase de viitor ale verbelor neregulate hacer și decir."
      },
      {
        "term": "Accente pe terminație",
        "def": "5 din cele 6 forme de viitor simplu poartă obligatoriu accent grafic."
      }
    ],
    "matchingPairs": [
      {
        "left": "Mañana hablaré con él",
        "right": "Mâine voi vorbi cu el (hablar)"
      },
      {
        "left": "Tendremos tiempo suficiente",
        "right": "Vom avea suficient timp (tener)"
      },
      {
        "left": "Haré todo lo posible",
        "right": "Voi face tot ce este posibil (hacer)"
      },
      {
        "left": "Te diré la verdad",
        "right": "Îți voi spune adevărul (decir)"
      }
    ],
    "quiz": {
      "question": "Care este forma de viitor simplu pentru 'Yo' a verbului 'tener'?",
      "options": [
        "tendré (rădăcina neregulată tendr- + -é)",
        "teneré",
        "tuvé",
        "tengo"
      ],
      "correctIndex": 0,
      "explanation": "'Tener' adoptă rădăcina neregulată 'tendr-', devenind la persoana I 'tendré'."
    },
    "task": "Scrie propoziția 'Mañana tendré una reunión importante y haré todo lo posible.'.",
    "starterCode": "Mañana tendré ",
    "expectedOutputPattern": "Ma[ñn]ana\\s+tendr[ée]\\s+una\\s+reuni[óo]n\\s+importante\\s+y\\s+har[ée]\\s+todo\\s+lo\\s+posible\\.?",
    "hint": "Scrie Mañana tendré una reunión importante y haré todo lo posible.",
    "prompt": "Scrie propoziția 'Mañana tendré una reunión importante y haré todo lo posible.'.",
    "officialSolution": "Mañana tendré una reunión importante y haré todo lo posible.",
    "example": "Mañana tendré una reunión importante y haré todo lo posible.",
    "regexPattern": "Ma[ñn]ana\\s+tendr[ée]\\s+una\\s+reuni[óo]n\\s+importante\\s+y\\s+har[ée]\\s+todo\\s+lo\\s+posible\\.?"
  },
  {
    "id": "es-b1-p36",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 40,
    "title": "Capitolul 36: El Condicional Simple — Politețe, Dorințe & Recomandări",
    "theory": "\n<p><strong>El Condicional Simple</strong> este modul curtoaziei elegante, al ipotezelor și al sfaturilor amicale.</p>\n<h4>1. Rețeta de Formare</h4>\n<p>Se ia <strong>infinitivul întreg</strong> (sau aceeași rădăcină neregulată de la viitor!) și se adaugă terminațiile de imperfect de la <em>-er/-ir</em>:</p>\n<p><strong>-ía, -ías, -ía, -íamos, -íais, -ían</strong></p>\n<p><em>hablaría, comería, viviría</em>; neregulate: <em>tendría, haría, podría, sabría</em>.</p>\n<h4>2. Utilizări Esențiale</h4>\n<ul>\n  <li>Politețe / Cereri respectuoase: <em>¿<strong>Podría</strong> traerme la cuenta?</em> (Ați putea să-mi aduceți nota?)</li>\n  <li>Dorință: <em>Me <strong>gustaría</strong> aprender más idiomas.</em></li>\n  <li>Sfat / Recomandare: <em><strong>Deberías</strong> descansar un poco.</em></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\n¿Podría traerme la cuenta y un vaso de agua, por favor?\n</code></pre>\n",
    "glossary": [
      {
        "term": "Condicional Simple",
        "def": "Modul folosit pentru cereri politicoase, sfaturi și dorințe ipotetice."
      },
      {
        "term": "Me gustaría...",
        "def": "Formula universală spaniolă de curtoazie ('Mi-ar plăcea să...')."
      },
      {
        "term": "¿Podría...?",
        "def": "Întrebare respectuoasă de politețe adresată unei persoane (Usted)."
      },
      {
        "term": "Deberías...",
        "def": "Formularea unui sfat prietenesc echivalent cu 'ar trebui să...'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Me gustaría un café",
        "right": "Mi-ar plăcea o cafea (politețe)"
      },
      {
        "left": "¿Podría ayudarme, por favor?",
        "right": "Ați putea să mă ajutați? (cerere respectuoasă)"
      },
      {
        "left": "Deberías dormir más",
        "right": "Ar trebui să dormi mai mult (sfat)"
      },
      {
        "left": "Yo en tu lugar no lo haría",
        "right": "Eu în locul tău nu aș face-o (ipoteză)"
      }
    ],
    "quiz": {
      "question": "Cum soliciți politicos nota de plată într-un restaurant din Madrid?",
      "options": [
        "¿Podría traerme la cuenta, por favor?",
        "¡Dame la cuenta ya!",
        "Quiero cuenta ahora.",
        "Trae la cuenta."
      ],
      "correctIndex": 0,
      "explanation": "'¿Podría traerme...?' la condițional este formula etalon de politețe la restaurant."
    },
    "task": "Scrie cererea politicoasă '¿Podría traerme la cuenta y un vaso de agua, por favor?'.",
    "starterCode": "¿Podría traerme ",
    "expectedOutputPattern": "(?:[¿?]\\s*)?Podr[íi]a\\s+traerme\\s+la\\s+cuenta\\s+y\\s+un\\s+vaso\\s+de\\s+agua,\\s*por\\s+favor\\.?",
    "hint": "Scrie ¿Podría traerme la cuenta y un vaso de agua, por favor?",
    "prompt": "Scrie cererea politicoasă '¿Podría traerme la cuenta y un vaso de agua, por favor?'.",
    "officialSolution": "¿Podría traerme la cuenta y un vaso de agua, por favor?",
    "example": "¿Podría traerme la cuenta y un vaso de agua, por favor?",
    "regexPattern": "(?:[¿?]\\s*)?Podr[íi]a\\s+traerme\\s+la\\s+cuenta\\s+y\\s+un\\s+vaso\\s+de\\s+agua,\\s*por\\s+favor\\.?"
  },
  {
    "id": "es-b1-p37",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)",
    "xp": 45,
    "title": "Capitolul 37: Conversație Intermediară: La Medic, Farmacie & Călătorii",
    "theory": "\n<p>Să unim întregul bagaj gramatical al Modulului B1–B2 într-o simulare reală la cabinetul medical și la farmacie în Spania.</p>\n<h4>1. Replicile Pacientului</h4>\n<ul>\n  <li><em>Buenos días, doctor. No me encuentro bien desde hace dos días.</em></li>\n  <li><em>Tengo fiebre alta, me duele la garganta y tengo tos seca.</em></li>\n  <li><em>¿Necesito guardar reposo?</em> (Trebuie să stau la pat?)</li>\n</ul>\n<h4>2. Replicile Medicului & Farmacistului</h4>\n<ul>\n  <li><em>Vamos a ver... Abra la boca. Tiene una infección en la garganta.</em></li>\n  <li><em>Le voy a recetar un antibiótico. Tome una pastilla cada ocho horas después de las comidas.</em></li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nTengo fiebre alta y necesito comprar este medicamento con receta.\n</code></pre>\n",
    "glossary": [
      {
        "term": "la receta médica",
        "def": "Prescripția / rețeta emisă de medic pentru eliberarea medicamentelor."
      },
      {
        "term": "una pastilla",
        "def": "O pastilă sau comprimat."
      },
      {
        "term": "guardar reposo",
        "def": "A se odihni la pat conform indicațiilor medicale."
      },
      {
        "term": "cada ocho horas",
        "def": "La fiecare opt ore (ritmul de administrare a tratamentului)."
      }
    ],
    "matchingPairs": [
      {
        "left": "No me encuentro bien",
        "right": "Nu mă simt bine"
      },
      {
        "left": "Tengo fiebre alta",
        "right": "Am febră mare"
      },
      {
        "left": "Una pastilla cada ocho horas",
        "right": "O pastilă la fiecare opt ore"
      },
      {
        "left": "Con receta médica",
        "right": "Cu prescripție / rețetă medicală"
      }
    ],
    "quiz": {
      "question": "Cum îi spui farmacistului că ai febră mare și ai nevoie de acest medicament cu rețetă?",
      "options": [
        "Tengo fiebre alta y necesito comprar este medicamento con receta.",
        "Soy fiebre y quiero pastilla.",
        "Tengo calor y medicamento papel.",
        "Fiebre está alta comprar."
      ],
      "correctIndex": 0,
      "explanation": "Expresia corectă este 'Tengo fiebre alta' și 'con receta médica'."
    },
    "task": "Scrie replica 'Tengo fiebre alta y necesito comprar este medicamento con receta.'.",
    "starterCode": "Tengo fiebre alta ",
    "expectedOutputPattern": "Tengo\\s+fiebre\\s+alta\\s+y\\s+necesito\\s+comprar\\s+este\\s+medicamento\\s+con\\s+receta\\.?",
    "hint": "Scrie Tengo fiebre alta y necesito comprar este medicamento con receta.",
    "prompt": "Scrie replica 'Tengo fiebre alta y necesito comprar este medicamento con receta.'.",
    "officialSolution": "Tengo fiebre alta y necesito comprar este medicamento con receta.",
    "example": "Tengo fiebre alta y necesito comprar este medicamento con receta.",
    "regexPattern": "Tengo\\s+fiebre\\s+alta\\s+y\\s+necesito\\s+comprar\\s+este\\s+medicamento\\s+con\\s+receta\\.?"
  },
  {
    "id": "es-c1-p38",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 50,
    "title": "Capitolul 38: El Subjuntivo Presente: Formare & Declanșatori W-E-I-R-D-O",
    "theory": "\n<p><strong>Subjuntivo</strong> nu descrie fapte reale obiective, ci lumea dorințelor, a ipotezelor, emoțiilor și posibilităților.</p>\n<h4>1. Rețeta Universală a Schimbului de Vocale</h4>\n<p>Se pornește de la rădăcina formei 'yo' de la prezentul de indicativ și se inversează vocala caracteristică:</p>\n<ul>\n  <li>Verbe în <code>-ar</code> primesc terminațiile în <strong>-e</strong>:<br>\n  <strong>-e, -es, -e, -emos, -éis, -en</strong> (<em>hable, hables, hable, hablemos...</em>).</li>\n  <li>Verbe în <code>-er / -ir</code> primesc terminațiile în <strong>-a</strong>:<br>\n  <strong>-a, -as, -a, -amos, -áis, -an</strong> (<em>coma, vivas, tenga, haga...</em>).</li>\n</ul>\n<h4>2. Acronimul Declanșatorilor W-E-I-R-D-O</h4>\n<p><strong>W</strong>ishes (Quiero que...), <strong>E</strong>motions (Me alegra que...), <strong>I</strong>mpersonal (Es necesario que...), <strong>R</strong>ecommendations (Te aconsejo que...), <strong>D</strong>oubt (Dudo que...), <strong>O</strong>jalá (Măcar de...!).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nQuiero que aprendas español y que tengas mucho éxito.\n</code></pre>\n",
    "glossary": [
      {
        "term": "El Subjuntivo",
        "def": "Modul gramatical al subiectivității, dorinței, îndoielii și emoției."
      },
      {
        "term": "Schimbul de vocale",
        "def": "-ar trece la setul -e; -er și -ir trec la setul -a."
      },
      {
        "term": "Quiero que...",
        "def": "Declanșator clasic de voință ce cere întotdeauna modul subjuntivo în secundară."
      },
      {
        "term": "Ojalá",
        "def": "Interjecție de origine arabă ce introduce obligatoriu modul conjunctiv ('De ar da Dumnezeu!')."
      }
    ],
    "matchingPairs": [
      {
        "left": "Quiero que vengas",
        "right": "Vreau să vii (voință: venir &rarr; vengas)"
      },
      {
        "left": "Es importante que estudies",
        "right": "Expresie impersonală (estudiar &rarr; estudies)"
      },
      {
        "left": "Me alegro de que estés aquí",
        "right": "Emoție (estar &rarr; estés)"
      },
      {
        "left": "¡Ojalá haga buen tiempo!",
        "right": "Dorință intensă (hacer &rarr; haga)"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă de subjuntivo presente a verbului 'tener' pentru 'tú'?",
      "options": [
        "tengas (din rădăcina 'tengo' + terminația -as)",
        "tienes",
        "tengás",
        "tenas"
      ],
      "correctIndex": 0,
      "explanation": "Pornind de la 'yo tengo', înlocuim 'o' cu terminația '-as' a grupei -er: tengas."
    },
    "task": "Scrie urarea 'Quiero que aprendas español y que tengas mucho éxito.'.",
    "starterCode": "Quiero que aprendas ",
    "expectedOutputPattern": "Quiero\\s+que\\s+aprendas\\s+espa[ñn]ol\\s+y\\s+que\\s+tengas\\s+mucho\\s+[ée]xito\\.?",
    "hint": "Scrie Quiero que aprendas español y que tengas mucho éxito.",
    "prompt": "Scrie urarea 'Quiero que aprendas español y que tengas mucho éxito.'.",
    "officialSolution": "Quiero que aprendas español y que tengas mucho éxito.",
    "example": "Quiero que aprendas español y que tengas mucho éxito.",
    "regexPattern": "Quiero\\s+que\\s+aprendas\\s+espa[ñn]ol\\s+y\\s+que\\s+tengas\\s+mucho\\s+[ée]xito\\.?"
  },
  {
    "id": "es-c1-p39",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 50,
    "title": "Capitolul 39: Subjuntivo: Opinie, Certitudine vs Îndoială (Creo que vs No creo que)",
    "theory": "\n<p>Stăpânirea absolută a conjunctivului spaniol la nivel C1 impune gestionarea nuanțelor epistemice dintre certitudine și negație.</p>\n<h4>1. Verbe de Gândire & Opinie (Creer, Pensar, Opinar)</h4>\n<ul>\n  <li><strong>Afirmativ (Certitudinea Vorbitorului) &rarr; INDICATIV:</strong><br>\n  <em>Creo que él <strong>dice</strong> la verdad.</em> (Sunt convins)</li>\n  <li><strong>Negativ (Îndoială / Dezacord) &rarr; SUBJUNTIVO:</strong><br>\n  <em>No creo que él <strong>diga</strong> la verdad.</em> (Mă îndoiesc)</li>\n</ul>\n<h4>2. Dudar vs No dudar</h4>\n<p><em>Dudo que <strong>sea</strong> verdad</em> (Subjuntivo) vs <em>No dudo que <strong>es</strong> verdad</em> (Indicativo &mdash; certitudine totală).</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nNo creo que sea la mejor solución para este problema.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Creo que + indicativo",
        "def": "Formularea afirmativă a opiniei exprimă certitudine și cere modul indicativ."
      },
      {
        "term": "No creo que + subjuntivo",
        "def": "Negația opiniei contestă realitatea faptei și impune modul subjuntivo."
      },
      {
        "term": "Dudar que",
        "def": "Verb de dubiu ce impune obligatoriu modul conjunctiv (dudo que sea)."
      },
      {
        "term": "Sea (subjuntivo de ser)",
        "def": "Forma neregulată de conjunctiv a verbului ser (no creo que sea así)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Pienso que es verdad",
        "right": "Indicativ (convingere afirmativă)"
      },
      {
        "left": "No pienso que sea verdad",
        "right": "Subjuntivo (dezacord la forma negativă)"
      },
      {
        "left": "Es seguro que vendrán",
        "right": "Indicativ (siguranță obiectivă)"
      },
      {
        "left": "No es seguro que vengan",
        "right": "Subjuntivo (incertitudine)"
      }
    ],
    "quiz": {
      "question": "Ce mod și formă verbală se folosește în: 'No creo que Juan ... la respuesta correcta' pentru verbul 'saber'?",
      "options": [
        "sepa (Subjuntivo presente de la saber cerut de 'No creo que')",
        "sabe (Indicativo)",
        "sabrá (Futuro)",
        "supo"
      ],
      "correctIndex": 0,
      "explanation": "'No creo que' impune în mod obligatoriu modul conjunctiv: forma neregulată este 'sepa'."
    },
    "task": "Scrie fraza 'No creo que sea la mejor solución para este problema.'.",
    "starterCode": "No creo que sea ",
    "expectedOutputPattern": "No\\s+creo\\s+que\\s+sea\\s+la\\s+mejor\\s+soluci[óo]n\\s+para\\s+este\\s+problema\\.?",
    "hint": "Scrie No creo que sea la mejor solución para este problema.",
    "prompt": "Scrie fraza 'No creo que sea la mejor solución para este problema.'.",
    "officialSolution": "No creo que sea la mejor solución para este problema.",
    "example": "No creo que sea la mejor solución para este problema.",
    "regexPattern": "No\\s+creo\\s+que\\s+sea\\s+la\\s+mejor\\s+soluci[óo]n\\s+para\\s+este\\s+problema\\.?"
  },
  {
    "id": "es-c1-p40",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 50,
    "title": "Capitolul 40: Pretérito Imperfecto de Subjuntivo (-ra / -se)",
    "theory": "\n<p><strong>Imperfecto de Subjuntivo</strong> este timpul ipotezelor ireale și al concordanței timpurilor în trecut.</p>\n<h4>1. Rețeta Universală de Derivare</h4>\n<p>Se pornește de la <strong>persoana a 3-a plural a pretérito indefinido</strong> (<em>ellos hablaron, comieron, tuvieron, fueron</em>), se taie <code>-ron</code> și se adaugă terminațiile:</p>\n<p><strong>-ra, -ras, -ra, -ramos, -rais, -ran</strong> (sau varianta literară în <em>-se</em>).</p>\n<h4>2. Forme Neregulate Vitale</h4>\n<ul>\n  <li><code>tener &rarr; ellos tuvieron &rarr; tuviera, tuvieras, tuviera...</code></li>\n  <li><code>ser / ir &rarr; ellos fueron &rarr; fuera, fueras, fuera...</code></li>\n  <li><code>hacer &rarr; ellos hicieron &rarr; hiciera, hicieras, hiciera...</code></li>\n</ul>\n<p>Atenție: persoana 'nosotros' primește întotdeauna accent grafic: <em>tuviéramos, fuéramos, habláramos</em>.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nSi tuviera más tiempo libre, estudiaría español todos los días.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Imperfecto de Subjuntivo",
        "def": "Conjunctivul trecut spaniol derivat direct din persoana a 3-a plural a pretérito indefinido."
      },
      {
        "term": "Terminații în -ra și -se",
        "def": "Formele în -ra (tuviera) și -se (tuviese) sunt 100% echivalente și interschimbabile."
      },
      {
        "term": "Tuviéramos",
        "def": "Persoana nosotros poartă accent pe vocala antepenultimei silabe."
      },
      {
        "term": "Si tuviera tiempo...",
        "def": "Formula canonică de debut a frazelor ipotetice ireale."
      }
    ],
    "matchingPairs": [
      {
        "left": "Si tuviera dinero",
        "right": "Dacă aș avea bani (tener &rarr; tuviera)"
      },
      {
        "left": "Si fuera tú",
        "right": "Dacă aș fi în locul tău (ser &rarr; fuera)"
      },
      {
        "left": "Ojalá supiera la verdad",
        "right": "Măcar de aș ști adevărul (saber &rarr; supiera)"
      },
      {
        "left": "Me pidió que viniera",
        "right": "Mi-a cerut să vin (venir &rarr; viniera)"
      }
    ],
    "quiz": {
      "question": "De la ce formă verbală se obține imperfecto de subjuntivo al verbului 'estar'?",
      "options": [
        "De la 'estuvieron' (indefinido ellos) &rarr; estuviera",
        "De la infinitivul estar",
        "De la prezentul están",
        "De la imperfectul estaban"
      ],
      "correctIndex": 0,
      "explanation": "Regula matematică este: persoana a 3-a plural indefinido (estuvieron) minus -ron plus -ra &rarr; estuviera."
    },
    "task": "Scrie fraza ipotetică 'Si tuviera más tiempo libre, estudiaría español todos los días.'.",
    "starterCode": "Si tuviera más tiempo libre, ",
    "expectedOutputPattern": "Si\\s+tuviera\\s+m[áa]s\\s+tiempo\\s+libre,\\s*estudiar[íi]a\\s+espa[ñn]ol\\s+todos\\s+los\\s+d[íi]as\\.?",
    "hint": "Scrie Si tuviera más tiempo libre, estudiaría español todos los días.",
    "prompt": "Scrie fraza ipotetică 'Si tuviera más tiempo libre, estudiaría español todos los días.'.",
    "officialSolution": "Si tuviera más tiempo libre, estudiaría español todos los días.",
    "example": "Si tuviera más tiempo libre, estudiaría español todos los días.",
    "regexPattern": "Si\\s+tuviera\\s+m[áa]s\\s+tiempo\\s+libre,\\s*estudiar[íi]a\\s+espa[ñn]ol\\s+todos\\s+los\\s+d[íi]as\\.?"
  },
  {
    "id": "es-c1-p41",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 55,
    "title": "Capitolul 41: Fraze Ipotetice cu „SI” (Reale, Posibile & Ireale)",
    "theory": "\n<p>La fel ca în franceză, în spaniolă regula de aur este: <strong>După „SI” nu se pune NICIODATĂ viitor sau condițional!</strong></p>\n<h4>1. Cele 3 Structuri Condiționale Canonice</h4>\n<ol>\n  <li><strong>Condiție Reală / Probabilă:</strong><br>\n  <code>Si + Presente de indicativo &rarr; Futuro simple / Presente</code><br>\n  <em>Si tengo tiempo, te llamaré.</em> (Dacă am timp, te voi suna).</li>\n  <li><strong>Condiție Ireală în Prezent (Improbabilă sau Imaginară):</strong><br>\n  <code>Si + Imperfecto de subjuntivo &rarr; Condicional simple</code><br>\n  <em>Si ganara la lotería, viajaría por todo el mundo.</em></li>\n  <li><strong>Condiție Ireală în Trecut (Imposibilă / Regret Definitiv):</strong><br>\n  <code>Si + Pluscuamperfecto de subjuntivo &rarr; Condicional compuesto</code><br>\n  <em>Si hubiera sabido la verdad, habría actuado diferente.</em></li>\n</ol>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nSi supiera la respuesta correcta, te la diría ahora mismo.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Oraciones condicionales",
        "def": "Fraze ipotetice introduse de conjuncția 'si' ce reglementează corelația timpurilor."
      },
      {
        "term": "Si + subjuntivo imperfecto",
        "def": "Combinația specifică pentru a exprima o ipoteză imaginară în prezent."
      },
      {
        "term": "Condicional en la principal",
        "def": "Propoziția principală conține consecința la modul condițional (viajaría)."
      },
      {
        "term": "Interdicția viitorului după SI",
        "def": "Nu se poate spune <em>Si tendré</em>, ci doar 'Si tengo'."
      }
    ],
    "matchingPairs": [
      {
        "left": "Si llueve mañana",
        "right": "no iremos a la playa (Si + presente &rarr; futuro)"
      },
      {
        "left": "Si supiera bailar",
        "right": "iría a la fiesta (Si + subjuntivo &rarr; condicional)"
      },
      {
        "left": "Si puedes",
        "right": "ven a verme esta tarde (Si + presente &rarr; imperativo)"
      },
      {
        "left": "Si fuera rico",
        "right": "compraría un barco (ireal actual)"
      }
    ],
    "quiz": {
      "question": "Care este continuarea gramatical corectă a frazei 'Si tuviera dinero, ... un coche nuevo'?",
      "options": [
        "compraría (Condicional simple corelat cu imperfecto de subjuntivo)",
        "compraré",
        "compro",
        "comprara"
      ],
      "correctIndex": 0,
      "explanation": "După 'Si + imperfecto de subjuntivo' (tuviera), concluzia ipotezei cere condiționalul: compraría."
    },
    "task": "Scrie replica 'Si supiera la respuesta correcta, te la diría ahora mismo.'.",
    "starterCode": "Si supiera la respuesta correcta, ",
    "expectedOutputPattern": "Si\\s+supiera\\s+la\\s+respuesta\\s+correcta,\\s*te\\s+la\\s+dir[íi]a\\s+ahora\\s+mismo\\.?",
    "hint": "Scrie Si supiera la respuesta correcta, te la diría ahora mismo.",
    "prompt": "Scrie replica 'Si supiera la respuesta correcta, te la diría ahora mismo.'.",
    "officialSolution": "Si supiera la respuesta correcta, te la diría ahora mismo.",
    "example": "Si supiera la respuesta correcta, te la diría ahora mismo.",
    "regexPattern": "Si\\s+supiera\\s+la\\s+respuesta\\s+correcta,\\s*te\\s+la\\s+dir[íi]a\\s+ahora\\s+mismo\\.?"
  },
  {
    "id": "es-c1-p42",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 55,
    "title": "Capitolul 42: Modul Imperativ: Porunci Afirmative vs Interdicții Negative",
    "theory": "\n<p>Modul imperativ în spaniolă prezintă o asimetrie fascinantă între ordinele afirmative și interdicțiile negative.</p>\n<h4>1. Imperativul Afirmativ (Porunci)</h4>\n<ul>\n  <li><code>Tú</code> = forma persoanei a III-a de la prezentul de indicativ: <em>¡Habla! ¡Come! ¡Escribe!</em> (Neregulate: <em>ven, di, sal, haz, ten, ve, pon, sé</em>).</li>\n  <li><code>Vosotros</code> = se înlocuiește <code>-r</code> de la infinitiv cu <code>-d</code>: <em>¡Hablad! ¡Comed! ¡Venid!</em></li>\n  <li><code>Usted / Ustedes</code> = folosesc formele de <strong>SUBJUNTIVO</strong>: <em>¡Hable usted! ¡Coman ustedes!</em></li>\n</ul>\n<h4>2. Imperativul Negativ (Interdicții: „Nu face asta!”)</h4>\n<p>La forma negativă, <strong>TOATE PERSOANELE folosesc exclusiv modul SUBJUNTIVO</strong>:</p>\n<p><em>¡No hables! ¡No comas! ¡No vengas! ¡No tengáis miedo! ¡No fumen aquí!</em></p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\n¡Dime la verdad y no tengas miedo de decir lo que piensas!\n</code></pre>\n",
    "glossary": [
      {
        "term": "Imperativo afirmativo",
        "def": "Forme dedicate pentru comenzi pozitive (¡Ven aquí!)."
      },
      {
        "term": "Imperativo negativo",
        "def": "Interdicții formate exclusiv cu 'No' + forme de Subjuntivo presente."
      },
      {
        "term": "Ven, di, sal, haz...",
        "def": "Cele opt verbe neregulate monosilabice de imperativ afirmativ pentru tú."
      },
      {
        "term": "Enclisis la imperativ",
        "def": "La afirmativ pronumele se lipesc la final: ¡Dímelo! (Spune-mi-o!)."
      }
    ],
    "matchingPairs": [
      {
        "left": "¡Haz los deberes!",
        "right": "Fă-ți temele! (hacer afirmativ)"
      },
      {
        "left": "¡No hagas ruido!",
        "right": "Nu face zgomot! (subjuntivo negativ)"
      },
      {
        "left": "¡Dime la verdad!",
        "right": "Spune-mi adevărul! (enclisis: di + me)"
      },
      {
        "left": "¡No me digas mentiras!",
        "right": "Nu-mi spune minciuni! (negativ proclitic)"
      }
    ],
    "quiz": {
      "question": "Cum formulezi interdicția 'Nu vorbi atât de tare!' pentru persoana 'tú'?",
      "options": [
        "¡No hables tan alto! (subjuntivo presente obligatoriu la negație)",
        "¡No habla tan alto!",
        "¡No hablar tan alto!",
        "¡No hablas tan alto!"
      ],
      "correctIndex": 0,
      "explanation": "Imperativul negativ cere obligatoriu forma de subjuntivo presente: 'No hables'."
    },
    "task": "Scrie îndemnul '¡Dime la verdad y no tengas miedo de decir lo que piensas!'.",
    "starterCode": "¡Dime la verdad ",
    "expectedOutputPattern": "(?:[¡!]\\s*)?Dime\\s+la\\s+verdad\\s+y\\s+no\\s+tengas\\s+miedo\\s+de\\s+decir\\s+lo\\s+que\\s+piensas[!\\.]?",
    "hint": "Scrie ¡Dime la verdad y no tengas miedo de decir lo que piensas!",
    "prompt": "Scrie îndemnul '¡Dime la verdad y no tengas miedo de decir lo que piensas!'.",
    "officialSolution": "¡Dime la verdad y no tengas miedo de decir lo que piensas!",
    "example": "¡Dime la verdad y no tengas miedo de decir lo que piensas!",
    "regexPattern": "(?:[¡!]\\s*)?Dime\\s+la\\s+verdad\\s+y\\s+no\\s+tengas\\s+miedo\\s+de\\s+decir\\s+lo\\s+que\\s+piensas[!\\.]?"
  },
  {
    "id": "es-c1-p43",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 55,
    "title": "Capitolul 43: Vocea Pasivă & Pasiva Reflejada cu „SE”",
    "theory": "\n<p>Spre deosebire de engleză sau franceză, spaniola vorbită și scrisă evită pasiva analitică lungă (<em>fue construido por...</em>), preferând formularea dinamică numită <strong>Pasiva Reflejada cu SE</strong>.</p>\n<h4>1. Pasiva Reflejada (SE + Verb la pers. a III-a)</h4>\n<p>Verbul se acordă obligatoriu la singular sau plural cu obiectul pacient:</p>\n<ul>\n  <li>Singular: <em><strong>Se vende</strong> piso.</em> (Se vinde apartament).</li>\n  <li>Plural: <em><strong>Se venden</strong> pisos.</em> (Se vând apartamente).</li>\n  <li><em>En esta empresa <strong>se valoran</strong> las ideas creativas.</em></li>\n</ul>\n<h4>2. Pasiva Impersonală</h4>\n<p>Când nu există un obiect determinat: <em><strong>Se vive</strong> bien aquí</em> (Se trăiește bine aici); <em><strong>Se trabaja</strong> mucho</em>.</p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nEn esta empresa se habla español y se valoran las ideas creativas.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Pasiva Reflejada",
        "def": "Construcție pasivă specifică spaniolă formată din particula 'se' + verb acordat la persoana a III-a."
      },
      {
        "term": "Se venden pisos",
        "def": "Exemplul clasic de acord plural la pasiva reflejada când substantivul este la plural."
      },
      {
        "term": "Pasiva analítica",
        "def": "Forma ser + participiu (El libro fue escrito por Cervantes) rezervată stilului jurnalistic solemn."
      },
      {
        "term": "Se impersonal",
        "def": "Structură fără subiect definit ce exprimă o generalitate valabilă pentru oricine."
      }
    ],
    "matchingPairs": [
      {
        "left": "Se habla español aquí",
        "right": "Aici se vorbește spaniolă (singular)"
      },
      {
        "left": "Se buscan programadores",
        "right": "Se caută programatori (plural: buscan)"
      },
      {
        "left": "Se alquila habitación",
        "right": "Se închiriază cameră (singular)"
      },
      {
        "left": "Se alquilan habitaciones",
        "right": "Se închiriază camere (plural: alquilan)"
      }
    ],
    "quiz": {
      "question": "Care este forma corectă pentru un anunț imobiliar care anunță vânzarea a trei case?",
      "options": [
        "Se venden tres casas. (verbul se acordă la plural cu 'casas')",
        "Se vende tres casas.",
        "Es vendido tres casas.",
        "Se vendieron tres casas ayer solo."
      ],
      "correctIndex": 0,
      "explanation": "La pasiva reflejada, verbul trebuie să se acorde la plural cu subiectul pacient: 'Se venden tres casas'."
    },
    "task": "Scrie descrierea 'En esta empresa se habla español y se valoran las ideas creativas.'.",
    "starterCode": "En esta empresa ",
    "expectedOutputPattern": "En\\s+esta\\s+empresa\\s+se\\s+habla\\s+espa[ñn]ol\\s+y\\s+se\\s+valoran\\s+las\\s+ideas\\s+creativas\\.?",
    "hint": "Scrie En esta empresa se habla español y se valoran las ideas creativas.",
    "prompt": "Scrie descrierea 'En esta empresa se habla español y se valoran las ideas creativas.'.",
    "officialSolution": "En esta empresa se habla español y se valoran las ideas creativas.",
    "example": "En esta empresa se habla español y se valoran las ideas creativas.",
    "regexPattern": "En\\s+esta\\s+empresa\\s+se\\s+habla\\s+espa[ñn]ol\\s+y\\s+se\\s+valoran\\s+las\\s+ideas\\s+creativas\\.?"
  },
  {
    "id": "es-c1-p44",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 60,
    "title": "Capitolul 44: Expresii Idiomatice Autentice din Spania & Metafore Colocviale",
    "theory": "\n<p>Stăpânirea registrului idiomatic (C1/C2) transformă vorbitorul într-un cunoscător autentic al culturii hispanice.</p>\n<h4>1. Metafore Clinice & Expresii Esențiale</h4>\n<ul>\n  <li><code>Tomar el pelo a alguien</code> &mdash; a lua pe cineva peste picior / a glumi.</li>\n  <li><code>Costar un ojo de la cara</code> &mdash; a fi extrem de scump / a costa o avere.</li>\n  <li><code>Estar como una cabra</code> &mdash; a fi complet nebun / excentric.</li>\n  <li><code>Ponerse las pilas</code> &mdash; a se pune serios pe treabă / a se mobiliza energic.</li>\n  <li><code>Dar en el clavo</code> &mdash; a nimeri la fix / a găsi soluția exactă.</li>\n  <li><code>Tirar la toalla</code> &mdash; a renunța, a se da bătut.</li>\n</ul>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nTenemos que ponernos las pilas para terminar el proyecto a tiempo.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Tomar el pelo",
        "def": "A tachina sau a glumi pe seama cuiva ('Nu mă lua peste picior!')."
      },
      {
        "term": "Costar un ojo de la cara",
        "def": "Expresie idiomatică pentru ceva extrem de scump."
      },
      {
        "term": "Ponerse las pilas",
        "def": "'A-și pune bateriile' — a deveni activ și concentrat pe un obiectiv."
      },
      {
        "term": "Dar en el clavo",
        "def": "A nimeri cuiul cu ciocanul &mdash; a spune exact lucrul potrivit."
      }
    ],
    "matchingPairs": [
      {
        "left": "No me tomes el pelo",
        "right": "Nu mă lua peste picior"
      },
      {
        "left": "Cuesta un ojo de la cara",
        "right": "Costă o avere"
      },
      {
        "left": "Hay que ponerse las pilas",
        "right": "Trebuie să ne punem serios pe treabă"
      },
      {
        "left": "Has dado en el clavo",
        "right": "Ai nimerit la fix"
      }
    ],
    "quiz": {
      "question": "Ce vrea să spună un coleg din Madrid când zice: '¡Tenemos que ponernos las pilas!'?",
      "options": [
        "Trebuie să ne mobilizăm serios și să muncim cu energie.",
        "Trebuie să cumpărăm baterii pentru telecomandă.",
        "Trebuie să plecăm acasă mai devreme.",
        "Trebuie să mergem la un concert rock."
      ],
      "correctIndex": 0,
      "explanation": "'Ponerse las pilas' este o expresie extrem de uzuală ce înseamnă a se mobiliza și a munci temeinic."
    },
    "task": "Scrie îndemnul 'Tenemos que ponernos las pilas para terminar el proyecto a tiempo.'.",
    "starterCode": "Tenemos que ponernos ",
    "expectedOutputPattern": "Tenemos\\s+que\\s+ponernos\\s+las\\s+pilas\\s+para\\s+terminar\\s+el\\s+proyecto\\s+a\\s+tiempo\\.?",
    "hint": "Scrie Tenemos que ponernos las pilas para terminar el proyecto a tiempo.",
    "prompt": "Scrie îndemnul 'Tenemos que ponernos las pilas para terminar el proyecto a tiempo.'.",
    "officialSolution": "Tenemos que ponernos las pilas para terminar el proyecto a tiempo.",
    "example": "Tenemos que ponernos las pilas para terminar el proyecto a tiempo.",
    "regexPattern": "Tenemos\\s+que\\s+ponernos\\s+las\\s+pilas\\s+para\\s+terminar\\s+el\\s+proyecto\\s+a\\s+tiempo\\.?"
  },
  {
    "id": "es-c1-p45",
    "track": "Limba Spaniolă",
    "division": "Limbi Străine & Comunicare",
    "icon": "🥘",
    "level": "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)",
    "xp": 65,
    "title": "Capitolul 45: Spaniolă de Afaceri, Registru Formal & Redactare de Emailuri Oficiale",
    "theory": "\n<p>Măiestria supremă (C2) în spaniolă constă în capacitatea de a redacta documente corporative, oferte comerciale și scrisori oficiale de cel mai înalt nivel.</p>\n<h4>1. Formule de Adresare & Deschidere</h4>\n<p><em>« Estimado/a Señor/a [Apellido]: »</em><br>\n<em>« Por medio de la presente, me pongo en contacto con usted con el fin de presentarle nuestra propuesta... »</em></p>\n<h4>2. Formule de Încheiere de Protocol</h4>\n<p><em>« Agradeciendo de antemano su atención a la presente, le saluda atentamente, »</em><br>\n<em>« Quedo a su entera disposición para cualquier aclaración que estime oportuna. »</em></p>\n\n<h4>Exemple Practice de Dialog & Expresii</h4>\n<pre><code>-- Exemplu Canonic de Conversație:\nAgradeciendo de antemano su atención, le saluda atentamente.\n</code></pre>\n",
    "glossary": [
      {
        "term": "Estimado/a Señor/a",
        "def": "Formula standard formală de deschidere a unei corespondențe oficiale în lumea hispanică."
      },
      {
        "term": "Agradeciendo de antemano",
        "def": "'Mulțumindu-vă anticipat...' — formulă uzuală de respect profesional."
      },
      {
        "term": "Le saluda atentamente",
        "def": "'Vă salută cu respect' — încheierea standard a scrisorilor de afaceri."
      },
      {
        "term": "A su entera disposición",
        "def": "Expresie diplomatică ce confirmă disponibilitatea pentru clarificări."
      }
    ],
    "matchingPairs": [
      {
        "left": "Estimado Señor Director",
        "right": "Stimate Domnule Director (antet formal)"
      },
      {
        "left": "Por medio de la presente",
        "right": "Prin prezenta (scrisoare oficială)"
      },
      {
        "left": "Le saluda atentamente",
        "right": "Vă salută cu stimă (încheiere protocolară)"
      },
      {
        "left": "Quedo a su disposición",
        "right": "Rămân la dispoziția dumneavoastră"
      }
    ],
    "quiz": {
      "question": "Care este cea mai elegantă și respectuoasă formulă de încheiere a unui email corporativ oficial în Spania?",
      "options": [
        "Agradeciendo de antemano su atención, le saluda atentamente,",
        "¡Un abrazo muy fuerte y nos vemos!",
        "Chao, hablamos pronto por WhatsApp.",
        "Espero tu respuesta rápida hoy."
      ],
      "correctIndex": 0,
      "explanation": "'Agradeciendo de antemano su atención, le saluda atentamente' este formula clasică protocolară de afaceri."
    },
    "task": "Scrie formula diplomatică 'Agradeciendo de antemano su atención, le saluda atentamente.'.",
    "starterCode": "Agradeciendo de antemano ",
    "expectedOutputPattern": "Agradeciendo\\s+de\\s+antemano\\s+su\\s+atenci[óo]n,\\s*le\\s+saluda\\s+atentamente\\.?",
    "hint": "Scrie Agradeciendo de antemano su atención, le saluda atentamente.",
    "prompt": "Scrie formula diplomatică 'Agradeciendo de antemano su atención, le saluda atentamente.'.",
    "officialSolution": "Agradeciendo de antemano su atención, le saluda atentamente.",
    "example": "Agradeciendo de antemano su atención, le saluda atentamente.",
    "regexPattern": "Agradeciendo\\s+de\\s+antemano\\s+su\\s+atenci[óo]n,\\s*le\\s+saluda\\s+atentamente\\.?"
  },
  {
    "id": "eng-a-1",
    "track": "Engleză (A1–A2)",
    "division": "Limbi Străine & Comunicare",
    "icon": "🌐",
    "level": "1. Începător / A1",
    "xp": 25,
    "title": "Capitolul 1: Ghid de Călătorie & Întrebarea Direcției (Asking for Directions)",
    "theory": "\n<p>Când călătorești într-o țară vorbitoare de engleză, orientarea în oraș necesită structuri de politețe și expresii de direcție clare.</p>\n\n<h4>1. Întrebări de Politețe</h4>\n<p><em>Excuse me, could you tell me how to get to the train station?</em> sau <em>Where is the nearest pharmacy?</em>.</p>\n\n<h4>2. Expresii de Direcție și Model de Dialog</h4>\n<pre><code>-- Model de Dialog: Asking for Directions\nTourist: \"Excuse me, where is the nearest hospital?\"\nLocal:   \"Go straight ahead for two blocks, then turn left at the traffic light.\"\nTourist: \"Is it far from here?\"\nLocal:   \"No, it is right next to the central park, across from the pharmacy.\"\nTourist: \"Thank you so much for your help!\"\nLocal:   \"You're welcome. Have a safe day!\"\n</code></pre>\n",
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
    "prompt": "Întreabă politicos unde se află cel mai apropiat spital: 'Excuse me, where is the nearest hospital?'.",
    "task": "Întreabă politicos unde se află cel mai apropiat spital: 'Excuse me, where is the nearest hospital?'.",
    "example": "Excuse me, where is the nearest hospital?",
    "starterCode": "Excuse me, where is the nearest hospital?",
    "officialSolution": "Excuse me, where is the nearest hospital?",
    "expectedOutputPattern": "Excuse\\s+me,\\s*where\\s+is\\s+the\\s+nearest\\s+hospital\\??",
    "regexPattern": "Excuse\\s+me,\\s*where\\s+is\\s+the\\s+nearest\\s+hospital\\??",
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
    "theory": "\n<p>În engleză, substantivele <strong>numărabile (Countable)</strong> pot avea plural (<em>books</em>, <em>apples</em>), pe când cele <strong>nenumărabile (Uncountable)</strong> reprezintă mase, lichide sau concepte abstracte (<em>water</em>, <em>information</em>, <em>advice</em>, <em>money</em>) și au <strong>doar formă de singular</strong>.</p>\n\n<h4>1. Many vs Much</h4>\n<ul>\n  <li><code>Many</code> se folosește cu numărabile la plural: <em>How many apples?</em></li>\n  <li><code>Much</code> se folosește cu nenumărabile: <em>How much water?</em>, <em>How much does this cost?</em></li>\n</ul>\n\n<h4>2. Exemple Practice de Utilizare</h4>\n<pre><code>-- Countable (numărabile cu plural):\nThere are many cars in the parking lot.\nWe need three apples and two lemons.\n\n-- Uncountable (fără plural):\nHow much water do you drink daily?\nHe gave me some useful advice (NU: many advices).\nHow much does this jacket cost? It costs $50.\n</code></pre>\n",
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
    "prompt": "Întreabă cât costă folosind 'How much does this cost?'.",
    "task": "Întreabă cât costă folosind 'How much does this cost?'.",
    "example": "How much does this cost?",
    "starterCode": "How much does this cost?",
    "officialSolution": "How much does this cost?",
    "expectedOutputPattern": "How\\s+much\\s+does\\s+this\\s+cost\\??",
    "regexPattern": "How\\s+much\\s+does\\s+this\\s+cost\\??",
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
    "theory": "\n<p>Un <strong>Phrasal Verb</strong> combină un verb cu o particulă prepozițională sau adverbială, creând un sens complet nou și adesea imprevizibil față de verbul de bază.</p>\n\n<h4>1. Verbe Comune la Birou</h4>\n<ul>\n  <li><code>Bring up</code> — a aduce în discuție un subiect: <em>She brought up the budget during the meeting</em>.</li>\n  <li><code>Call off</code> — a anula definitiv un eveniment: <em>They called off the conference</em>.</li>\n  <li><code>Put off</code> — a amâna: <em>Let's put off the decision until next Monday</em>.</li>\n  <li><code>Carry out</code> — a executa, a duce la bun sfârșit: <em>We carried out a full security audit</em>.</li>\n</ul>\n\n<h4>2. Exemple Practice în Propoziții</h4>\n<pre><code>-- Exemple profesionale:\n1. \"The manager decided to call off Friday's meeting due to the holiday.\"\n2. \"Don't put off until tomorrow what you can do today.\"\n3. \"We must carry out a thorough investigation before reaching a conclusion.\"\n4. \"He brought up an important security vulnerability in the standup.\"\n</code></pre>\n",
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
    "prompt": "Completează fraza profesională 'We must carry out a thorough investigation.'.",
    "task": "Completează fraza profesională 'We must carry out a thorough investigation.'.",
    "example": "We must carry out a thorough investigation.",
    "starterCode": "We must carry out a thorough investigation.",
    "officialSolution": "We must carry out a thorough investigation.",
    "expectedOutputPattern": "We\\s+must\\s+carry\\s+out\\s+a\\s+thorough\\s+investigation\\.?",
    "regexPattern": "We\\s+must\\s+carry\\s+out\\s+a\\s+thorough\\s+investigation\\.?",
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
    "theory": "\n<p>Pentru a face deducții logice despre un eveniment care s-a petrecut în trecut pe baza dovezilor prezente, folosim verbe modale urmate de <strong>have + Past Participle</strong>.</p>\n\n<h4>1. Cele Trei Nivele de Certitudine</h4>\n<ul>\n  <li><code>Must have + V3</code> — Certitudine pozitivă: <em>The streets are wet; it must have rained last night</em>.</li>\n  <li><code>Can't have + V3</code> — Imposibilitate logică: <em>He can't have stolen the laptop; he wasn't at the office</em>.</li>\n  <li><code>Might have + V3</code> — Posibilitate incertă: <em>She might have missed the bus</em>.</li>\n</ul>\n\n<h4>2. Exemple Practice de Deducție</h4>\n<pre><code>-- Deducții în context:\nSituation: Sarah's phone is switched off and she hasn't replied.\nDeduction 1: \"Her battery must have died.\" (Certitudine ridicată)\nDeduction 2: \"She might have boarded her flight.\" (Posibilitate)\nDeduction 3: \"She can't have forgotten our anniversary!\" (Imposibil)\n\nExample Sentence:\n\"She must have received my email because she already completed the task.\"\n</code></pre>\n",
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
    "prompt": "Scrie propoziția de deducție 'She must have received my email.' (Cu siguranță a primit e-mailul meu).",
    "task": "Scrie propoziția de deducție 'She must have received my email.' (Cu siguranță a primit e-mailul meu).",
    "example": "She must have received my email.",
    "starterCode": "She must have received my email.",
    "officialSolution": "She must have received my email.",
    "expectedOutputPattern": "She\\s+must\\s+have\\s+received\\s+my\\s+email\\.?",
    "regexPattern": "She\\s+must\\s+have\\s+received\\s+my\\s+email\\.?",
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
    "theory": "\n<p><strong>Cleft Sentences</strong> sunt structuri gramaticale complexe utilizate pentru a pune accentul pe un element precis al propoziției (subiectul, cauza, momentul sau acțiunea).</p>\n\n<h4>1. Structuri Principale</h4>\n<ul>\n  <li><code>It-cleft</code>: <em>It was Dan who fixed the critical production bug.</em></li>\n  <li><code>Wh-cleft</code>: <em>What we really need is more time.</em></li>\n</ul>\n\n<h4>2. Exemple Comparative (Standard vs Cleft)</h4>\n<pre><code>-- Standard sentence:\n\"We need comprehensive user feedback to make a sound decision.\"\n\n-- Wh-Cleft (Emphatic):\n\"What we really need is comprehensive user feedback.\"\n\n-- It-Cleft (Focus on responsible entity):\n\"It was the design team that spearheaded the entire rebranding effort.\"\n</code></pre>\n",
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
    "prompt": "Scrie propoziția de accentuare 'What we really need is more time.' folosind un Wh-cleft.",
    "task": "Scrie propoziția de accentuare 'What we really need is more time.' folosind un Wh-cleft.",
    "example": "What we really need is more time.",
    "starterCode": "What we really need is more time.",
    "officialSolution": "What we really need is more time.",
    "expectedOutputPattern": "What\\s+we\\s+really\\s+need\\s+is\\s+more\\s+time\\.?",
    "regexPattern": "What\\s+we\\s+really\\s+need\\s+is\\s+more\\s+time\\.?",
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
    "theory": "\n<p>În comunicarea executivă de nivel C2, dezacordul direct (<em>You are wrong</em>) este considerat neprofesionist. Vorbitorii nativi folosesc tehnica <strong>Hedging</strong> — atenuarea afirmațiilor categorice prin nuanțe subtile și formulări ipotetice.</p>\n\n<h4>1. Formule Cheie de Hedging</h4>\n<ul>\n  <li><em>With all due respect, I must disagree with this assessment.</em></li>\n  <li><em>This approach would seem to have significant drawbacks.</em></li>\n  <li><em>It is arguably not the most viable long-term solution.</em></li>\n</ul>\n\n<h4>2. Exemple Practice de Dezacord Diplomatic</h4>\n<pre><code>-- Blunt statement (Unprofessional):\n\"Your proposal makes no sense and will lose us money.\"\n\n-- Diplomatic Hedging (Executive C2):\n\"With all due respect, I must disagree with this assessment. While I appreciate the creative direction, the financial projections would appear somewhat optimistic under current market conditions.\"\n</code></pre>\n",
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
    "prompt": "Scrie formula diplomatică de dezacord 'With all due respect, I must disagree with this assessment.'.",
    "task": "Scrie formula diplomatică de dezacord 'With all due respect, I must disagree with this assessment.'.",
    "example": "With all due respect, I must disagree with this assessment.",
    "starterCode": "With all due respect, I must disagree with this assessment.",
    "officialSolution": "With all due respect, I must disagree with this assessment.",
    "expectedOutputPattern": "With\\s+all\\s+due\\s+respect,\\s*I\\s+must\\s+disagree\\s+with\\s+this\\s+assessment\\.?",
    "regexPattern": "With\\s+all\\s+due\\s+respect,\\s*I\\s+must\\s+disagree\\s+with\\s+this\\s+assessment\\.?",
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
    "theory": "\n<p>Descrierea familiei este unul dintre primele subiecte de conversație. În limba engleză distingem clar între <strong>Immediate Family</strong> (familia restrânsă) și <strong>Extended Family</strong> (rudele extinse).</p>\n\n<h4>1. Rudele prin Alianță (In-laws) și Frați (Siblings)</h4>\n<p>Toate rudele prin căsătorie primesc <code>-in-law</code>: <em>mother-in-law</em> (soacra), <em>brother-in-law</em> (cumnatul). Termenul neutru pentru frați și surori este <strong>siblings</strong>.</p>\n\n<h4>2. Exemple de Propoziții Despre Familie</h4>\n<pre><code>-- Exemple practice:\n1. \"I have three siblings and a large extended family.\"\n2. \"My brother-in-law lives in Toronto with his two children.\"\n3. \"Are you an only child, or do you have any siblings?\"\n4. \"We visit our grandparents every Sunday afternoon.\"\n</code></pre>\n",
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
    "prompt": "Scrie propoziția 'I have three siblings and a large extended family.'.",
    "task": "Scrie propoziția 'I have three siblings and a large extended family.'.",
    "example": "I have three siblings and a large extended family.",
    "starterCode": "I have three siblings and a large extended family.",
    "officialSolution": "I have three siblings and a large extended family.",
    "expectedOutputPattern": "I\\s+have\\s+three\\s+siblings\\s+and\\s+a\\s+large\\s+extended\\s+family\\.?",
    "regexPattern": "I\\s+have\\s+three\\s+siblings\\s+and\\s+a\\s+large\\s+extended\\s+family\\.?",
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
    "theory": "\n<p>Gătitul implică verbe specifice de preparare termică și mecanică: <code>Chop</code> (a toca mărunt), <code>Slice</code> (a felia), <code>Grate</code> (a da pe răzătoare), <code>Boil</code> (a fierbe în clocot) și <code>Simmer</code> (a fierbe domol la foc mic).</p>\n\n<h4>1. Exemplu de Rețetă și Instrucțiuni Culinare</h4>\n<pre><code>-- Cooking Steps:\n1. \"Chop the vegetables and simmer the soup for 15 minutes.\"\n2. \"Slice the bread and toast it lightly.\"\n3. \"Grate some fresh parmesan cheese over the pasta.\"\n4. \"Bake the cake in the preheated oven at 180 degrees Celsius.\"\n</code></pre>\n",
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
    "prompt": "Scrie instrucțiunea culinară 'Chop the vegetables and simmer the soup for 15 minutes.'.",
    "task": "Scrie instrucțiunea culinară 'Chop the vegetables and simmer the soup for 15 minutes.'.",
    "example": "Chop the vegetables and simmer the soup for 15 minutes.",
    "starterCode": "Chop the vegetables and simmer the soup for 15 minutes.",
    "officialSolution": "Chop the vegetables and simmer the soup for 15 minutes.",
    "expectedOutputPattern": "Chop\\s+the\\s+vegetables\\s+and\\s+simmer\\s+the\\s+soup\\s+for\\s+15\\s+minutes\\.?",
    "regexPattern": "Chop\\s+the\\s+vegetables\\s+and\\s+simmer\\s+the\\s+soup\\s+for\\s+15\\s+minutes\\.?",
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
    "theory": "\n<p>Discuțiile despre cinematografie folosesc termeni consacrați: <code>Plot twist</code> (răsturnare de situație), <code>Blockbuster</code> (film de succes masiv), <code>Soundtrack</code> (coloana sonoră) și <code>Binge-watch</code> (vizionare maraton de episoade consecutive).</p>\n\n<h4>1. Exemple Practice de Recenzii</h4>\n<pre><code>-- Movie Review Examples:\n1. \"The movie had an amazing plot twist at the end.\"\n2. \"I binge-watched the entire miniseries in a single weekend.\"\n3. \"The lead actress delivered an Oscar-worthy performance.\"\n4. \"The soundtrack composed by Hans Zimmer elevated every emotional scene.\"\n</code></pre>\n",
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
    "prompt": "Scrie recenzia scurtă 'The movie had an amazing plot twist at the end.'.",
    "task": "Scrie recenzia scurtă 'The movie had an amazing plot twist at the end.'.",
    "example": "The movie had an amazing plot twist at the end.",
    "starterCode": "The movie had an amazing plot twist at the end.",
    "officialSolution": "The movie had an amazing plot twist at the end.",
    "expectedOutputPattern": "The\\s+movie\\s+had\\s+an\\s+amazing\\s+plot\\s+twist\\s+at\\s+the\\s+end\\.?",
    "regexPattern": "The\\s+movie\\s+had\\s+an\\s+amazing\\s+plot\\s+twist\\s+at\\s+the\\s+end\\.?",
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
    "theory": "\n<p>Călătoriile moderne pun accent pe <strong>turismul autentic</strong>: <code>Off the beaten track</code> (dincolo de traseele turistice clasice), <code>Wanderlust</code> (pasiunea puternică pentru explorare) și <code>Cultural immersion</code> (imersiune în viața locală).</p>\n\n<h4>1. Exemple Practice de Conversație despre Călătorii</h4>\n<pre><code>-- Travel Expressions in Context:\n1. \"We prefer traveling off the beaten track to experience authentic culture.\"\n2. \"Her wanderlust led her to backpack across Southeast Asia for six months.\"\n3. \"Traveling on a shoestring taught him how to budget and appreciate local hospitality.\"\n4. \"Living with a host family offered deep cultural immersion.\"\n</code></pre>\n",
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
    "prompt": "Scrie propoziția de călătorie 'We prefer traveling off the beaten track to experience authentic culture.'.",
    "task": "Scrie propoziția de călătorie 'We prefer traveling off the beaten track to experience authentic culture.'.",
    "example": "We prefer traveling off the beaten track to experience authentic culture.",
    "starterCode": "We prefer traveling off the beaten track to experience authentic culture.",
    "officialSolution": "We prefer traveling off the beaten track to experience authentic culture.",
    "expectedOutputPattern": "We\\s+prefer\\s+traveling\\s+off\\s+the\\s+beaten\\s+track\\s+to\\s+experience\\s+authentic\\s+culture\\.?",
    "regexPattern": "We\\s+prefer\\s+traveling\\s+off\\s+the\\s+beaten\\s+track\\s+to\\s+experience\\s+authentic\\s+culture\\.?",
    "hint": "Scrie We prefer traveling off the beaten track to experience authentic culture."
  }
];
