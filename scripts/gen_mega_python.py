# -*- coding: utf-8 -*-
"""
Generator for Python mega curriculum expansion (22 lessons).
Covers Beginner to Architect levels.
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
            "title": "Capitolul 1: Sintaxă & Structuri Fundamentale de Control",
            "theory": """
<p>Python este un limbaj cu tipizare dinamică și sintaxă bazată pe indentare strictă (4 spații conform PEP 8). În Python, blocurile de cod nu folosesc acolade, ci două puncte (<code>:</code>) urmate de bloc indentat.</p>
<h4>1. Instrucțiuni Condiționale</h4>
<p>Lanțul <code>if - elif - else</code> evaluează expresii booleene. Operatorii logici sunt cuvinte native: <code>and</code>, <code>or</code>, <code>not</code>.</p>
<h4>2. Bucle & Iterare Idiomatică</h4>
<p>Buclele <code>for item in iterable:</code> sunt cel mai eficient mod de a parcurge secvențe. Când avem nevoie de index, folosim funcția nativă <code>enumerate(iterable, start=0)</code> în loc să incrementăm manual un contor.</p>
""",
            "glossary": [
                {"term": "Indentare (PEP 8)", "def": "Regulă strictă de 4 spații per nivel de bloc de cod în loc de acolade."},
                {"term": "elif", "def": "Prescurtare de la 'else if', testează o condiție secundară dacă prima a eșuat."},
                {"term": "enumerate()", "def": "Funcție nativă ce returnează perechi de tipul (index, element) la fiecare iterație."},
                {"term": "zip()", "def": "Îmbină două sau mai multe iterabile element cu element în tupluri paralele."}
            ],
            "matchingPairs": [
                {"left": "enumerate(names)", "right": "Generează perechi (index, nume)"},
                {"left": "zip(keys, values)", "right": "Îmbină liste paralele în tupluri"},
                {"left": "range(1, 10, 2)", "right": "Generează 1, 3, 5, 7, 9"},
                {"left": "elif condition:", "right": "Ramură condițională alternativă"}
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
            "theory": """
<p>Listele (<code>list</code>) sunt structuri mutabile ordonate, pe când tuple-urile (<code>tuple</code>) sunt secvențe imutabile protejate împotriva modificării accidentale.</p>
<h4>1. Sintaxa Slicing [start:stop:step]</h4>
<p>Slicing-ul permite extragerea de subsecvențe fără a modifica lista originală. Indexul de <code>stop</code> este exclusiv. Un pas negativ (<code>[::-1]</code>) inversează eficient întreaga secvență.</p>
<h4>2. Unpacking de Secvențe</h4>
<p>Python permite despachetarea directă a elementelor: <code>first, *middle, last = numbers</code> capturează primul, ultimul și toate elementele intermediare într-o listă separată.</p>
""",
            "glossary": [
                {"term": "Mutable", "def": "Obiect a cărui stare internă poate fi modificată după instanțiere (ex: list, dict)."},
                {"term": "Immutable", "def": "Obiect a cărui valoare nu poate fi schimbată după creare (ex: tuple, str, int)."},
                {"term": "Slicing [::-1]", "def": "Tehnică O(n) de inversare a unei secvențe prin specificarea unui step negativ."},
                {"term": "Star Unpacking (*rest)", "def": "Operator ce colectează restul elementelor într-o listă separată la asignare."}
            ],
            "matchingPairs": [
                {"left": "items[::-1]", "right": "Inversează complet secvența"},
                {"left": "items[1:4]", "right": "Extrage elementele de la index 1 la 3"},
                {"left": "tuple((1, 2))", "right": "Secvență imutabilă hashable"},
                {"left": "a, *b = items", "right": "Despachetează primul element și restul"}
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
            "theory": """
<p>Dicționarele (<code>dict</code>) și seturile (<code>set</code>) din Python sunt implementate ca tabele hash de înaltă performanță, oferind timp mediu de căutare și inserare $O(1)$.</p>
<h4>1. Dicționare & Metoda .get()</h4>
<p>Accesarea unei chei inexistente cu <code>dict[key]</code> aruncă o excepție <code>KeyError</code>. Metoda <code>dict.get(key, default)</code> returnează o valoare fallback fără a întrerupe execuția.</p>
<h4>2. Seturi & Teoria Mulțimilor</h4>
<p>Seturile elimină automat duplicatele și oferă operatori rapizi: reuniune (<code>|</code>), intersecție (<code>&</code>), diferență (<code>-</code>) și diferență simetrică (<code>^</code>).</p>
""",
            "glossary": [
                {"term": "dict.get(k, default)", "def": "Returnează valoarea asociată cheii sau fallback-ul specificat fără KeyError."},
                {"term": "set", "def": "Colecție neordonată de elemente unice și hashable cu căutare în timp O(1)."},
                {"term": "Hashable", "def": "Proprietate a unui obiect de a avea o valoare hash constantă pe durata vieții sale."},
                {"term": "Intersecție (&)", "def": "Operație între două seturi ce returnează doar elementele comune ambelor mulțimi."}
            ],
            "matchingPairs": [
                {"left": "config.get('port', 8080)", "right": "Acces securizat cu valoare implicită"},
                {"left": "set(raw_list)", "right": "Elimină instant toate duplicatele"},
                {"left": "set_a & set_b", "right": "Intersecția elementelor comune"},
                {"left": "set_a | set_b", "right": "Reuniunea tuturor elementelor unice"}
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
            "theory": """
<p>Comprehensions sunt construcții declarative sintetice și optimizate la nivel de bytecode CPython, fiind semnificativ mai rapide decât buclele clasice <code>for</code> cu <code>.append()</code>.</p>
<h4>1. List Comprehensions cu Filtrare</h4>
<p>Sintaxa de bază este <code>[expr for item in iterable if condition]</code>. Filtrul <code>if</code> de la final selectează elementele înainte de aplicarea transformării.</p>
<h4>2. Dict & Set Comprehensions</h4>
<p>Dict comprehensions folosesc acolade și două puncte: <code>{k: v for k, v in pairs}</code>. Set comprehensions folosesc acolade simple: <code>{x.strip() for x in raw_strings}</code>.</p>
""",
            "glossary": [
                {"term": "List Comprehension", "def": "Construcție declarativă pentru crearea unei liste dintr-un iterabil existent."},
                {"term": "Dict Comprehension", "def": "Sintaxă {k: v for ...} ce mapează dinamic chei la valori calculate."},
                {"term": "Bytecode CPython", "def": "Instrucțiuni compilate de nivel jos executate de mașina virtuală Python."},
                {"term": "Filtrare Inline", "def": "Clauza 'if condition' adăugată la sfârșitul unui comprehension pentru selecție."}
            ],
            "matchingPairs": [
                {"left": "[x*2 for x in nums]", "right": "Dublează fiecare element din listă"},
                {"left": "[x for x in nums if x > 0]", "right": "Filtrează doar numerele strict pozitive"},
                {"left": "{x: len(x) for x in words}", "right": "Creează un dicționar cu lungimea cuvintelor"},
                {"left": "{x.lower() for x in tags}", "right": "Set de tag-uri unice transformate în litere mici"}
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
            "theory": """
<p>Gestionarea corectă a resurselor I/O (fișiere, conexiuni socket) necesită eliberarea garantată a descriptorilor de fișiere din sistemul de operare.</p>
<h4>1. Instrucțiunea 'with'</h4>
<p>Instrucțiunea <code>with open('file.txt', 'r', encoding='utf-8') as f:</code> garantează apelarea automată a metodei <code>close()</code> la ieșirea din bloc, chiar dacă se aruncă o excepție neașteptată.</p>
<h4>2. Moduri de Deschidere</h4>
<p>Modurile esențiale sunt: <code>'r'</code> (read), <code>'w'</code> (write cu suprascriere), <code>'a'</code> (append la final) și <code>'b'</code> (binary pentru imagini sau fișiere comprimate).</p>
""",
            "glossary": [
                {"term": "Context Manager", "def": "Obiect ce implementează metodele protocolului __enter__ și __exit__ pentru gestiunea resurselor."},
                {"term": "File Descriptor Leak", "def": "Epuizarea descriptorilor din sistemul de operare cauzată de fișiere lăsate deschise."},
                {"term": "encoding='utf-8'", "def": "Standardul modern de codare a caracterelor internaționale în operațiuni textuale."},
                {"term": "f.readlines()", "def": "Metodă ce citește toate liniile unui fișier și le returnează ca listă de șiruri."}
            ],
            "matchingPairs": [
                {"left": "with open(...) as f:", "right": "Închidere automată garantată a resursei"},
                {"left": "mode='a'", "right": "Deschide fișierul pentru adăugare la final"},
                {"left": "mode='w'", "right": "Deschide pentru scriere suprascriind conținutul"},
                {"left": "f.read()", "right": "Citește întregul conținut într-un singur string"}
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
            "theory": """
<p>Tratarea robustă a erorilor în Python se realizează prin blocul <code>try - except - else - finally</code>. Principiul Pythonic <em>EAFP</em> (Easier to Ask for Forgiveness than Permission) recomandă execuția directă protejată prin <code>try</code> în loc de verificări preliminare stufoase.</p>
<h4>1. Specificitatea Excepțiilor</h4>
<p>Nu captura niciodată <code>except Exception:</code> generic dacă poți captura excepții specifice precum <code>ValueError</code>, <code>FileNotFoundError</code> sau <code>ZeroDivisionError</code>.</p>
<h4>2. Clauzele 'else' și 'finally'</h4>
<p>Blocul <code>else</code> rulează DOAR dacă blocul <code>try</code> a finalizat fără nicio eroare. Blocul <code>finally</code> se execută ÎNTOTDEAUNA, indiferent de apariția sau capturarea erorii.</p>
""",
            "glossary": [
                {"term": "EAFP", "def": "'Easier to Ask for Forgiveness than Permission' - filozofie de programare Pythonic."},
                {"term": "try / except", "def": "Mecanism de interceptare și tratare a excepțiilor la rulare."},
                {"term": "else (în try)", "def": "Bloc executat exclusiv atunci când nu s-a declanșat nicio excepție în try."},
                {"term": "finally", "def": "Secțiune de curățare a resurselor care se execută garantat în orice scenariu."}
            ],
            "matchingPairs": [
                {"left": "except ValueError as e:", "right": "Capturează conversii de date invalide"},
                {"left": "finally:", "right": "Execuție necondiționată după try/except"},
                {"left": "else: (după try)", "right": "Rulare doar când nu a apărut nicio eroare"},
                {"left": "raise RuntimeError('msg')", "right": "Aruncă intenționat o nouă excepție"}
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
            "theory": """
<p>În Python, orice clasă este un tip de date personalizat. Instanțierea unui obiect invocă automat metoda magică <code>__init__(self, ...)</code>, unde <code>self</code> reprezintă referința explicită către instanța curentă.</p>
<h4>1. Metode de Instanță & Atribute</h4>
<p>Atributele definite pe <code>self</code> (ex: <code>self.name = name</code>) aparțin fiecărui obiect individual. Variabilele definite direct în corpul clasei sunt atribute de clasă partajate între toate instanțele.</p>
<h4>2. Reprezentare Textuală: '__repr__' vs '__str__'</h4>
<p><code>__str__</code> oferă o descriere lizibilă destinată utilizatorului final, în timp ce <code>__repr__</code> este destinat dezvoltatorilor pentru depanare și ar trebui să fie cât mai exact și neambiguu.</p>
""",
            "glossary": [
                {"term": "__init__", "def": "Metodă inițializatoare apelată imediat după crearea instanței cu __new__."},
                {"term": "self", "def": "Primul parametru obligatoriu al metodelor de instanță, referă obiectul curent."},
                {"term": "__repr__", "def": "Reprezentare oficială de depanare a obiectului pentru dezvoltatori."},
                {"term": "Atribut de Clasă", "def": "Variabilă partajată la nivelul întregii clase, comună tuturor instanțelor."}
            ],
            "matchingPairs": [
                {"left": "def __init__(self, x):", "right": "Inițializează atributele noii instanțe"},
                {"left": "def __str__(self):", "right": "Descriere lizibilă pentru utilizatori"},
                {"left": "def __repr__(self):", "right": "String detaliat de depanare pentru developeri"},
                {"left": "self.x = x", "right": "Asignează valoarea atributului instanței"}
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
            "theory": """
<p>Spre deosebire de Java sau C++, Python nu are specificatori rigizi de acces precum <code>private</code> sau <code>protected</code>. Convenția PEP 8 folosește un singur underscore prefixat (<code>_attr</code>) pentru a semnala un atribut intern.</p>
<h4>1. Decoratorul '@property'</h4>
<p>Decoratorul <code>@property</code> transformă o metodă într-un getter accesibil ca un atribut simplu fără paranteze: <code>user.full_name</code>.</p>
<h4>2. Validare cu '@prop.setter'</h4>
<p>Decoratorul <code>@name.setter</code> interceptează atribuirea de valori, permițând validări de integritate (ex: prețul nu poate fi negativ) menținând totodată o sintaxă curată.</p>
""",
            "glossary": [
                {"term": "@property", "def": "Decorator ce permite apelarea unei metode ca pe un atribut simplu de citire."},
                {"term": "@x.setter", "def": "Decorator complementar ce definește logica de scriere și validare a proprietății."},
                {"term": "Leading Underscore (_x)", "def": "Convenție comunitară ce semnalează că o variabilă este de uz intern."},
                {"term": "Dunder Name Mangling (__x)", "def": "Prefixarea cu două underscore-uri ce redenumește intern variabila pentru a preveni coliziuni în moștenire."}
            ],
            "matchingPairs": [
                {"left": "@property", "right": "Creează un getter accesibil ca atribut"},
                {"left": "@price.setter", "right": "Validează noua valoare la atribuire"},
                {"left": "self._balance", "right": "Atribut protejat prin convenție"},
                {"left": "self.__secret", "right": "Name mangling activat de CPython"}
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
            "theory": """
<p>Operatorii de despachetare <code>*</code> și <code>**</code> permit funcțiilor să accepte un număr dinamic de parametri poziționali și nominali.</p>
<h4>1. Tuple-ul '*args'</h4>
<p>Parametrul <code>*args</code> împachetează toate argumentele poziționale suplimentare într-un <code>tuple</code> imutabil.</p>
<h4>2. Dicționarul '**kwargs'</h4>
<p>Parametrul <code>**kwargs</code> împachetează toate argumentele transmise ca perechi cheie-valoare într-un <code>dict</code> standard. Este fundamentul prin care decoratorii transmit mai departe argumentele funcției decorate.</p>
""",
            "glossary": [
                {"term": "*args", "def": "Colectează argumentele poziționale excedentare într-un tuple."},
                {"term": "**kwargs", "def": "Colectează argumentele cu nume (keyword arguments) într-un dicționar."},
                {"term": "Argument Unpacking", "def": "Transmiterea unei liste cu *list sau a unui dicționar cu **dict într-un apel de funcție."},
                {"term": "Keyword-Only Argument", "def": "Argument ce poate fi transmis doar cu nume, plasat după un '*' solitar."}
            ],
            "matchingPairs": [
                {"left": "def func(*args):", "right": "args este un tuple cu parametri poziționali"},
                {"left": "def func(**kwargs):", "right": "kwargs este un dict cu perechi cheie-valoare"},
                {"left": "func(*my_list)", "right": "Despachetează lista ca parametri individuali"},
                {"left": "func(**my_dict)", "right": "Despachetează dicționarul ca parametri numiți"}
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
            "theory": """
<p>Un decorator este o funcție de ordin superior care primește o funcție ca argument și returnează o versiune extinsă a acesteia, adăugând comportamente transversale (logging, benchmarking, autentificare) fără a altera codul original.</p>
<h4>1. Structura Clasică a unui Decorator</h4>
<p>Un decorator definește o funcție internă <code>wrapper(*args, **kwargs)</code> care execută cod înainte și după funcția țintă.</p>
<h4>2. Salvarea Metadatelor cu @functools.wraps</h4>
<p>Fără <code>@wraps(func)</code>, numele (<code>__name__</code>) și documentația (<code>__doc__</code>) a funcției originale sunt suprascrise de cele ale wrapper-ului. Folosirea <code>@wraps</code> păstrează identitatea intactă.</p>
""",
            "glossary": [
                {"term": "Higher-Order Function", "def": "Funcție ce acceptă alte funcții ca argumente sau returnează funcții."},
                {"term": "@functools.wraps", "def": "Decorator auxiliar ce copiază numele și docstringul funcției originale pe wrapper."},
                {"term": "Closure (Închidere)", "def": "Funcție internă ce reține accesul la variabilele din scope-ul funcției exterioare."},
                {"term": "Aspect-Oriented Design", "def": "Separarea preocupărilor transversale precum loggingul sau autorizarea de logica de business."}
            ],
            "matchingPairs": [
                {"left": "@wraps(fn)", "right": "Păstrează __name__ și __doc__ ale funcției originale"},
                {"left": "wrapper(*args, **kwargs)", "right": "Interceptează apelul și rulează logica transversală"},
                {"left": "@my_decorator", "right": "Zahăr sintactic pentru fn = my_decorator(fn)"},
                {"left": "fn(*args, **kwargs)", "right": "Execuția funcției decorate originale"}
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
            "theory": """
<p>Generatoarele sunt funcții speciale care produc valori secvențial la cerere folosind cuvântul cheie <code>yield</code>, în loc să construiască o listă completă în memorie.</p>
<h4>1. Eficiență Memorie $O(1)$</h4>
<p>Când o funcție întâlnește <code>yield</code>, starea sa de execuție este înghețată și valoarea este trimisă apelantului. La următoarea cerere (via <code>next()</code> sau într-o buclă <code>for</code>), execuția se reia exact de la instrucțiunea următoare.</p>
<h4>2. Generator Expressions</h4>
<p>Sintaxa <code>(x * 2 for x in large_stream)</code> creează un generator anonim fără a aloca memorie pentru întreaga colecție, fiind esențial pentru procesarea fișierelor de zeci de gigaocteți.</p>
""",
            "glossary": [
                {"term": "yield", "def": "Instrucțiune ce returnează o valoare intermediară și suspendă execuția funcției generator."},
                {"term": "Lazy Evaluation", "def": "Calculul valorilor este amânat până în momentul precis în care acestea sunt solicitate."},
                {"term": "StopIteration", "def": "Excepție internă semnalată automat când generatorul nu mai are elemente de produs."},
                {"term": "next(iterator)", "def": "Funcție nativă ce solicită următoarea valoare disponibilă dintr-un generator."}
            ],
            "matchingPairs": [
                {"left": "yield item", "right": "Trimite valoarea și îngheață starea funcției"},
                {"left": "next(gen)", "right": "Reia execuția până la următorul yield"},
                {"left": "(x for x in data)", "right": "Generator expression cu consum O(1) de memorie"},
                {"left": "StopIteration", "right": "Excepție ce marchează epuizarea generatorului"}
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
            "theory": """
<p>Modulul standard <code>collections</code> oferă alternative optimizate în C la tipurile de date de bază din Python, rezolvând probleme comune de arhitectură.</p>
<h4>1. defaultdict & Counter</h4>
<p><code>defaultdict(factory)</code> elimină verificările repetitive de chei lipsă, instanțiind automat valoarea implicită (ex: <code>defaultdict(list)</code>). <code>Counter(iterable)</code> numără instant frecvența aparițiilor fiecărui element.</p>
<h4>2. deque (Double-Ended Queue)</h4>
<p>În timp ce adăugarea/ștergerea de la începutul unei liste clasice (<code>list.pop(0)</code>) costă $O(n)$, <code>collections.deque</code> oferă operațiuni de tip <code>appendleft()</code> și <code>popleft()</code> garantate în timp $O(1)$.</p>
""",
            "glossary": [
                {"term": "defaultdict(list)", "def": "Dicționar ce inițializează automat o listă nouă la accesarea unei chei inexistente."},
                {"term": "Counter", "def": "Subclasă de dict specializată în numărarea și ordonarea elementelor hashable."},
                {"term": "deque", "def": "Coadă dublă optimizată pentru adăugare și eliminare O(1) la ambele capete."},
                {"term": "namedtuple", "def": "Tuplu ale cărui câmpuri pot fi accesate atât prin index, cât și prin nume de atribut."}
            ],
            "matchingPairs": [
                {"left": "deque.popleft()", "right": "Eliminare garantată în timp O(1) de la început"},
                {"left": "Counter(words).most_common(3)", "right": "Returnează top 3 cele mai frecvente cuvinte"},
                {"left": "defaultdict(int)", "right": "Inițializează automat cheile lipsă cu 0"},
                {"left": "namedtuple('Point', ['x', 'y'])", "right": "Tuplu imutabil cu acces prin nume de câmp"}
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
            "theory": """
<p>Începând cu Python 3.9 și 3.10, adnotările de tipuri au devenit native (ex: <code>list[str]</code>, <code>dict[str, int]</code>, union-ul cu bară <code>int | None</code>), facilitând analiza statică prin unelte precum <code>mypy</code>.</p>
<h4>1. Tipuri Opționale & Union</h4>
<p>Sintaxa modernă <code>val: str | None = None</code> este echivalentă cu <code>Optional[str]</code> din modulul <code>typing</code>, indicând că o variabilă poate conține un șir sau valoarea <code>None</code>.</p>
<h4>2. Protocol & Callable</h4>
<p><code>Callable[[Arg1, Arg2], ReturnType]</code> tipizează semnătura unei funcții transmise ca parametru. Clasele ce moștenesc <code>typing.Protocol</code> permit implementarea de tipare structurală (Duck Typing verificat static).</p>
""",
            "glossary": [
                {"term": "Type Hints (PEP 484)", "def": "Adnotări de tip utilizate de linters și IDE-uri pentru detectarea erorilor înainte de rulare."},
                {"term": "Union (A | B)", "def": "Operator ce specifică că o valoare poate fi de oricare dintre tipurile indicate."},
                {"term": "Callable[[A], R]", "def": "Tip ce descrie o funcție care primește un argument de tip A și returnează R."},
                {"term": "Duck Typing", "def": "'Dacă merge ca o rață și măcăne ca o rață, este o rață' - compatibilitate pe bază de comportament."}
            ],
            "matchingPairs": [
                {"left": "items: list[str]", "right": "Listă ce conține exclusiv șiruri de caractere"},
                {"left": "val: int | None", "right": "Valoare opțională: întreg sau None"},
                {"left": "fn: Callable[[int], bool]", "right": "Funcție ce primește int și returnează bool"},
                {"left": "cache: dict[str, Any]", "right": "Dicționar cu chei string și valori de orice tip"}
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
            "theory": """
<p>Decoratorul <code>@dataclass</code> din modulul standard <code>dataclasses</code> generează automat metodele <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code> și altele pe baza adnotărilor de tip, eliminând codul de tip boilerplate.</p>
<h4>1. Imutabilitate cu frozen=True</h4>
<p>Specificarea <code>@dataclass(frozen=True)</code> transformă instanțele în obiecte imutabile și automat <em>hashable</em>, permițându-le să fie utilizate drept chei în dicționare sau elemente în seturi.</p>
<h4>2. Câmpuri cu 'field(default_factory=...)'</h4>
<p>Valorile implicite mutabile (precum liste goale) nu trebuie niciodată declarate ca <code>items: list = []</code>. Se folosește <code>field(default_factory=list)</code> pentru a asigura o instanță nouă pentru fiecare obiect.</p>
""",
            "glossary": [
                {"term": "@dataclass", "def": "Decorator ce autogenerează constructorul, egalitatea și reprezentarea pentru clase de date."},
                {"term": "frozen=True", "def": "Parametru ce interzice modificarea atributelor după instanțiere, făcând obiectul hashable."},
                {"term": "default_factory", "def": "Funcție furnizoare de valori implicite mutabile unice per instanță (ex: list, dict)."},
                {"term": "__post_init__", "def": "Metodă specială apelată automat după __init__ pentru validări suplimentare."}
            ],
            "matchingPairs": [
                {"left": "@dataclass(frozen=True)", "right": "Generează o clasă de date complet imutabilă"},
                {"left": "field(default_factory=list)", "right": "Evită partajarea listei mutabile între instanțe"},
                {"left": "def __post_init__(self):", "right": "Execută validări imediat după inițializare"},
                {"left": "asdict(my_dataclass)", "right": "Convertește instant instanța într-un dicționar"}
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
            "theory": """
<p>Modulul <code>asyncio</code> oferă o arhitectură concurentă cu cooperare bazată pe un singur fir de execuție (Single-Threaded Event Loop), ideală pentru operațiuni I/O bound (apeluri HTTP, baze de date).</p>
<h4>1. Coroutine cu 'async def' și 'await'</h4>
<p>O funcție declarată cu <code>async def</code> este o coroutină. Instrucțiunea <code>await coro()</code> suspendă coroutina curentă și cedează controlul Event Loop-ului până când rezultatul este gata, permițând altor coroutine să ruleze.</p>
<h4>2. Execuție Concurentă cu asyncio.gather</h4>
<p>Funcția <code>asyncio.gather(*tasks)</code> lansează multiple operațiuni asincrone în paralel și returnează toate rezultatele agregate când toate s-au încheiat.</p>
""",
            "glossary": [
                {"term": "Event Loop", "def": "Bucle centrală ce gestionează și distribuie execuția coroutinelor și evenimentelor asincrone."},
                {"term": "Coroutine", "def": "Funcție specială declarată cu 'async def' ce poate fi suspendată și reluată prin 'await'."},
                {"term": "asyncio.gather()", "def": "Metodă ce execută concurent mai multe coroutine și agregă rezultatele acestora."},
                {"term": "I/O Bound", "def": "Operațiuni a căror viteză depinde de rețea sau disc, nu de viteza procesorului."}
            ],
            "matchingPairs": [
                {"left": "async def fetch():", "right": "Definește o coroutină asincronă"},
                {"left": "await response.json()", "right": "Cedează controlul buclei până la finalizarea I/O"},
                {"left": "asyncio.run(main())", "right": "Inițializează și rulează bucla Event Loop"},
                {"left": "asyncio.gather(t1, t2)", "right": "Lansează task-urile în concurență deplină"}
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
            "theory": """
<p>În CPython, <strong>GIL</strong> (Global Interpreter Lock) este un mutex care permite unui singur fir nativ de execuție să dețină controlul interpretorului Python la un moment dat, protejând managementul memoriei bazat pe reference counting.</p>
<h4>1. CPU-Bound vs I/O-Bound</h4>
<p>Pentru operațiuni <em>I/O-Bound</em>, multithreading-ul sau <code>asyncio</code> sunt suficiente deoarece GIL este eliberat în timpul așteptării rețelei/discului. Pentru sarcini intensive <em>CPU-Bound</em> (calcule matematice, machine learning), este obligatoriu modulul <code>multiprocessing</code>, care lansează procese OS separate cu spații de memorie independente și interpretor propriu.</p>
<h4>2. concurrent.futures.ProcessPoolExecutor</h4>
<p>Interfața unificată <code>ProcessPoolExecutor(max_workers=N)</code> permite distribuirea task-urilor pe toate nucleele hardware ale procesorului fără a gestiona manual procesele individuale.</p>
""",
            "glossary": [
                {"term": "GIL (Global Interpreter Lock)", "def": "Mutex intern din CPython ce restricționează execuția bytecode-ului la un singur thread per proces."},
                {"term": "CPU-Bound", "def": "Operație al cărei timp de execuție depinde exclusiv de puterea de calcul a procesorului."},
                {"term": "ProcessPoolExecutor", "def": "Pool de procese separate din sistem ce ocolesc complet limitarea impusă de GIL."},
                {"term": "IPC (Inter-Process Comm)", "def": "Mecanisme de transfer de date între procese OS diferite (pipe-uri, shared memory)."}
            ],
            "matchingPairs": [
                {"left": "ProcessPoolExecutor", "right": "Execuție paralelă reală pe nuclee CPU multiple"},
                {"left": "ThreadPoolExecutor", "right": "Optim pentru operațiuni I/O bound cu I/O blocant"},
                {"left": "Global Interpreter Lock", "right": "Protejează sistemul intern de reference counting"},
                {"left": "multiprocessing.Queue", "right": "Canal de comunicare thread/process-safe între procese"}
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
            "theory": """
<p>În Python, clasele înseși sunt obiecte, fiind instanțe ale unei metaclase (implicit <code>type</code>). O metaclase permite interceptarea și modificarea modului în care clasele sunt construite.</p>
<h4>1. '__init_subclass__' — Alternativa Modernă (PEP 487)</h4>
<p>Înainte de Python 3.6, validarea claselor derivate necesita scrierea unei metaclase complexe moștenite din <code>type</code>. Metoda <code>__init_subclass__(cls, **kwargs)</code> simplifică radical acest proces, fiind apelată automat pe clasa de bază ori de câte ori cineva o moștenește.</p>
<h4>2. Înregistrarea Automată de Plugin-uri</h4>
<p>Prin <code>__init_subclass__</code>, un framework poate înregistra automat toate clasele copil într-un registru intern fără a necesita decoratori explicite.</p>
""",
            "glossary": [
                {"term": "Metaclass", "def": "Clasa unei clase; definește cum este construită și validată o definiție de clasă."},
                {"term": "__init_subclass__", "def": "Cârlig nativ (hook) invocat automat pe clasa părinte când este creată o subclasă."},
                {"term": "type (ca metaclasă)", "def": "Metaclasa implicită responsabilă pentru crearea tuturor claselor în Python."},
                {"term": "Plugin Registry", "def": "Mecanism arhitectural de colectare și activare dinamică a extensiilor."}
            ],
            "matchingPairs": [
                {"left": "def __init_subclass__(cls):", "right": "Interceptează crearea oricărei subclase derivate"},
                {"left": "type(name, bases, dict)", "right": "Instanțierea dinamică a unei clase la runtime"},
                {"left": "class Meta(type):", "right": "Definirea unei metaclase clasice"},
                {"left": "super().__init_subclass__()", "right": "Propagă apelul către clasele de bază superioare"}
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
            "theory": """
<p><strong>Pydantic</strong> este biblioteca etalon în Python modern (la baza FastAPI) pentru validarea datelor, serializare JSON și definirea schemelor pe baza adnotărilor de tip native.</p>
<h4>1. Modele 'BaseModel'</h4>
<p>O clasă ce moștenește <code>pydantic.BaseModel</code> validează automat tipurile la instanțiere, convertind dacă este posibil datele (coercion) și aruncând un <code>ValidationError</code> structurat în caz de nepotrivire.</p>
<h4>2. Constrângeri cu 'Field'</h4>
<p>Metoda <code>Field(gt=0, le=100, max_length=50)</code> permite definirea de reguli de validare direct la nivel declarativ (ex: prețul strict mai mare ca 0).</p>
""",
            "glossary": [
                {"term": "BaseModel", "def": "Clasa de bază din Pydantic pentru modelarea și validarea datelor structurate."},
                {"term": "ValidationError", "def": "Excepție ce conține detalii precise despre fiecare câmp care a eșuat validarea."},
                {"term": "Type Coercion", "def": "Conversia automată securizată a datelor compatibile (ex: '123' în int 123)."},
                {"term": "Field()", "def": "Funcție de adnotare a constrângerilor de validare pe proprietăți."}
            ],
            "matchingPairs": [
                {"left": "class User(BaseModel):", "right": "Definește o schemă cu validare automată"},
                {"left": "Field(gt=0)", "right": "Validează ca valoarea să fie strict mai mare ca 0"},
                {"left": "model.model_dump()", "right": "Serializare în dicționar standard Python"},
                {"left": "model.model_dump_json()", "right": "Serializare directă în format JSON string"}
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
        }
    ]
