# -*- coding: utf-8 -*-
"""
Generator for Python mega curriculum expansion (18 comprehensive lessons).
Covers Beginner to Architect levels with complete code examples,
clear conditions, and idiomatic PEP 8 practices.
"""

def get_python_lessons():
    return [
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
                "starterCode": "scor = 85\n\n# Scrie condiția if, elif și else:\n",
                "expectedOutputPattern": "if\\s+scor\\s*>=\\s*90\\s*:[\\s\\S]+?elif\\s+scor\\s*>=\\s*50\\s*:[\\s\\S]+?else\\s*:",
                "hint": "Folosește if scor >= 90:, apoi elif scor >= 50: și finalizează cu else:.",
                "officialSolution": "if scor >= 90:\n    print(\"Excelent\")\nelif scor >= 50:\n    print(\"Admis\")\nelse:\n    print(\"Respins\")",
                "example": "nota = 8\nif nota >= 9:\n    print(\"Excelent\")\nelif nota >= 5:\n    print(\"Admis\")\nelse:\n    print(\"Respins\")",
                "prompt": "Completează structura if - elif - else pentru variabila 'scor':\n- dacă scor >= 90, afișează 'Excelent' (print('Excelent'))\n- elif scor >= 50, afișează 'Admis' (print('Admis'))\n- else, afișează 'Respins' (print('Respins'))."
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
                "officialSolution": "data = [1, 2, 3, 4, 5]\nreversed_data = data[::-1]",
                "example": "numbers = [10, 20, 30]\ninverse = numbers[::-1]",
                "prompt": "Inversează lista 'data' folosind sintaxa slicing cu step negativ și stochează rezultatul în variabila 'reversed_data'."
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
                "officialSolution": "settings = {\"host\": \"localhost\"}\ntimeout = settings.get(\"timeout\", 30)",
                "example": "config = {\"port\": 8080}\nval = config.get(\"timeout\", 60)",
                "prompt": "Extrage din dicționarul 'settings' cheia 'timeout' cu valoarea implicită 30 folosind metoda .get()."
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
                "officialSolution": "numbers = [1, 2, 3, 4, 5, 6, 7, 8]\nevens = [x for x in numbers if x % 2 == 0]",
                "example": "squares = [n ** 2 for n in range(10) if n % 2 == 0]",
                "prompt": "Creează o listă 'evens' conținând numerele pare din 'numbers' folosind un list comprehension cu clauza 'if x % 2 == 0'."
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
                "starterCode": "# Deschide fișierul cu with:\n",
                "expectedOutputPattern": "with\\s+open\\([\"']data\\.txt[\"'],\\s*[\"']r[\"'],\\s*encoding=[\"']utf-8[\"']\\)\\s+as\\s+f\\s*:",
                "hint": "Scrie: with open('data.txt', 'r', encoding='utf-8') as f:.",
                "officialSolution": "with open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    pass",
                "example": "with open(\"config.json\", \"r\", encoding=\"utf-8\") as file:\n    pass",
                "prompt": "Deschide fișierul 'data.txt' în modul citire ('r') cu encoding-ul 'utf-8' folosind instrucțiunea 'with open(...) as f:'."
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
                "starterCode": "text = \"abc\"\n# Scrie blocul try-except:\n",
                "expectedOutputPattern": "try\\s*:[\\s\\S]+?val\\s*=\\s*int\\(text\\)[\\s\\S]+?except\\s+ValueError\\s+as\\s+\\w+\\s*:[\\s\\S]+?print\\([\"']Invalid[\"']\\)",
                "hint": "Scrie try: urmat de val = int(text) și except ValueError as e: print('Invalid').",
                "officialSolution": "text = \"abc\"\ntry:\n    val = int(text)\nexcept ValueError as e:\n    print(\"Invalid\")",
                "example": "try:\n    num = int(\"123\")\nexcept ValueError as err:\n    print(\"Eroare conversie\")",
                "prompt": "Scrie un bloc try-except care încearcă conversia 'val = int(text)' și capturează 'ValueError as e:' afișând print('Invalid')."
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
                "starterCode": "# Definește clasa Developer:\n",
                "expectedOutputPattern": "class\\s+Developer\\s*:[\\s\\S]+?def\\s+__init__\\s*\\(\\s*self,\\s*name,\\s*role\\s*\\)\\s*:[\\s\\S]+?self\\.name\\s*=\\s*name[\\s\\S]+?self\\.role\\s*=\\s*role",
                "hint": "Scrie class Developer: urmat de def __init__(self, name, role): self.name = name; self.role = role.",
                "officialSolution": "class Developer:\n    def __init__(self, name, role):\n        self.name = name\n        self.role = role",
                "example": "class Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age",
                "prompt": "Definește o clasă 'Developer' al cărei constructor '__init__(self, name, role)' setează 'self.name = name' și 'self.role = role'."
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
                "starterCode": "class Account:\n    def __init__(self, amount):\n        self._balance = amount\n\n    # Adaugă @property pentru balance:\n",
                "expectedOutputPattern": "@property\\s+def\\s+balance\\s*\\(\\s*self\\s*\\)\\s*:\\s*\\n\\s*return\\s+self\\._balance",
                "hint": "Scrie @property pe o linie, urmat de def balance(self): return self._balance.",
                "officialSolution": "class Account:\n    def __init__(self, amount):\n        self._balance = amount\n\n    @property\n    def balance(self):\n        return self._balance",
                "example": "class Circle:\n    def __init__(self, radius):\n        self._r = radius\n\n    @property\n    def radius(self):\n        return self._r",
                "prompt": "Definește un getter '@property def balance(self): return self._balance' în interiorul unei clase."
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
                "starterCode": "# Definește funcția sum_all:\n",
                "expectedOutputPattern": "def\\s+sum_all\\s*\\(\\s*\\*args\\s*\\)\\s*:\\s*\\n\\s*return\\s+sum\\(args\\)",
                "hint": "Scrie: def sum_all(*args): return sum(args).",
                "officialSolution": "def sum_all(*args):\n    return sum(args)",
                "example": "def multiply_all(*numbers):\n    res = 1\n    for n in numbers: res *= n\n    return res",
                "prompt": "Definește o funcție 'sum_all(*args)' care returnează suma argumentelor primite folosind 'return sum(args)'."
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
                "officialSolution": "from functools import wraps\n\ndef log_call(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper",
                "example": "from functools import wraps\n\ndef timer(fn):\n    @wraps(fn)\n    def inner(*args, **kwargs):\n        return fn(*args, **kwargs)\n    return inner",
                "prompt": "Completează decoratorul 'log_call' aplicând '@wraps(func)' deasupra funcției interne 'wrapper(*args, **kwargs)'."
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
                "starterCode": "# Definește generatorul count_up:\n",
                "expectedOutputPattern": "def\\s+count_up\\s*\\(\\s*limit\\s*\\)\\s*:[\\s\\S]+?for\\s+i\\s+in\\s+range\\(1,\\s*limit\\s*\\+\\s*1\\)\\s*:[\\s\\S]+?yield\\s+i",
                "hint": "Scrie def count_up(limit): for i in range(1, limit + 1): yield i.",
                "officialSolution": "def count_up(limit):\n    for i in range(1, limit + 1):\n        yield i",
                "example": "def generate_even(n):\n    for i in range(0, n, 2):\n        yield i",
                "prompt": "Scrie o funcție generator 'count_up(limit)' care generează numere de la 1 la limit folosind 'for i in range(1, limit + 1): yield i'."
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
                "officialSolution": "from collections import defaultdict\nuser_roles = defaultdict(list)",
                "example": "from collections import defaultdict\ncounts = defaultdict(int)",
                "prompt": "Inițializează un 'defaultdict' cu fabrică de tip 'list' în variabila 'user_roles = defaultdict(list)'."
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
                "starterCode": "# Scrie funcția cu type hints complete:\n",
                "expectedOutputPattern": "def\\s+get_length\\s*\\(\\s*text\\s*:\\s*str\\s*\\)\\s*->\\s*int\\s*:[\\s\\S]+?return\\s+len\\(text\\)",
                "hint": "Scrie: def get_length(text: str) -> int: return len(text).",
                "officialSolution": "def get_length(text: str) -> int:\n    return len(text)",
                "example": "def greet(name: str) -> str:\n    return f\"Hello, {name}\"",
                "prompt": "Adaugă type hinting complet pentru o funcție 'def get_length(text: str) -> int:' care returnează len(text)."
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
                "starterCode": "from dataclasses import dataclass\n\n# Definește @dataclass Server:\n",
                "expectedOutputPattern": "@dataclass\\s*\\n\\s*class\\s+Server\\s*:[\\s\\S]+?host\\s*:\\s*str[\\s\\S]+?port\\s*:\\s*int\\s*=\\s*8080",
                "hint": "Scrie @dataclass pe prima linie, urmat de class Server: host: str; port: int = 8080.",
                "officialSolution": "from dataclasses import dataclass\n\n@dataclass\nclass Server:\n    host: str\n    port: int = 8080",
                "example": "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: float\n    y: float = 0.0",
                "prompt": "Creează o clasă '@dataclass' numită 'Server' cu atributele 'host: str' și 'port: int = 8080'."
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
                "starterCode": "import asyncio\n\n# Definește coroutina fetch_status:\n",
                "expectedOutputPattern": "async\\s+def\\s+fetch_status\\s*\\(\\s*\\)\\s*:[\\s\\S]+?await\\s+asyncio\\.sleep\\(0\\.1\\)[\\s\\S]+?return\\s+200",
                "hint": "Scrie: async def fetch_status(): await asyncio.sleep(0.1); return 200.",
                "officialSolution": "import asyncio\n\nasync def fetch_status():\n    await asyncio.sleep(0.1)\n    return 200",
                "example": "import asyncio\n\nasync def ping():\n    await asyncio.sleep(0.05)\n    return \"pong\"",
                "prompt": "Scrie o coroutină 'async def fetch_status(): await asyncio.sleep(0.1); return 200'."
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
                "starterCode": "# Scrie importul și contextul Pool:\n",
                "expectedOutputPattern": "from\\s+multiprocessing\\s+import\\s+Pool[\\s\\S]+?with\\s+Pool\\(\\)\\s+as\\s+pool\\s*:",
                "hint": "Scrie from multiprocessing import Pool pe prima linie și with Pool() as pool: dedesubt.",
                "officialSolution": "from multiprocessing import Pool\n\nwith Pool() as pool:\n    pass",
                "example": "from multiprocessing import Pool\n\nwith Pool(processes=4) as p:\n    pass",
                "prompt": "Importă 'Pool' din 'multiprocessing' și inițializează un context manager 'with Pool() as pool:'."
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
                "starterCode": "class Base:\n    # Adaugă __init_subclass__:\n",
                "expectedOutputPattern": "def\\s+__init_subclass__\\s*\\(\\s*cls,\\s*\\*\\*kwargs\\s*\\)\\s*:[\\s\\S]+?super\\(\\)\\.__init_subclass__\\(\\*\\*kwargs\\)",
                "hint": "Scrie def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs).",
                "officialSolution": "class Base:\n    def __init_subclass__(cls, **kwargs):\n        super().__init_subclass__(**kwargs)",
                "example": "class PluginBase:\n    def __init_subclass__(cls, **kwargs):\n        super().__init_subclass__(**kwargs)",
                "prompt": "Definește metoda '__init_subclass__(cls, **kwargs):' care apelează 'super().__init_subclass__(**kwargs)'."
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
                "starterCode": "from pydantic import BaseModel\n\n# Definește schema Item:\n",
                "expectedOutputPattern": "class\\s+Item\\s*\\(\\s*BaseModel\\s*\\)\\s*:[\\s\\S]+?name\\s*:\\s*str[\\s\\S]+?price\\s*:\\s*float",
                "hint": "Scrie class Item(BaseModel): name: str; price: float pe linii separate indentate.",
                "officialSolution": "from pydantic import BaseModel\n\nclass Item(BaseModel):\n    name: str\n    price: float",
                "example": "from pydantic import BaseModel\n\nclass UserSchema(BaseModel):\n    username: str\n    email: str",
                "prompt": "Definește un model Pydantic 'class Item(BaseModel):' cu câmpurile 'name: str' și 'price: float'."
        }
]
