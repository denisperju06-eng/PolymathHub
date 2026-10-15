# -*- coding: utf-8 -*-
"""
Generator for Algoritmi & Structuri de Date mega curriculum expansion (12 comprehensive lessons).
Covers Big O, Binary Search, Singly Linked Lists, Stack/Queue, Two Pointers/Sliding Window,
Hash Tables, MergeSort, Binary Search Trees (BST), BFS, DFS, Dijkstra, and Dynamic Programming.
Each lesson features rich <pre><code>...</code></pre> code blocks, runnable examples, and precise tasks.
"""

def get_algo_lessons():
    return [
        {
            "id": "algo-new-1",
            "track": "Algoritmi & Structuri de Date",
            "division": "Informatică și Programare",
            "icon": "🌲",
            "level": "1. Începător",
            "xp": 30,
            "title": "Capitolul 1: Analiza Complexității Asimptotice & Notația Big O",
            "theory": """
<p>Notația <strong>Big O</strong> măsoară eficiența teoretică a unui algoritm în cel mai defavorabil scenariu (worst-case scenario), exprimând cum crește consumul de timp sau memorie odată cu mărimea setului de date de intrare ($n$).</p>

<h4>1. Ierarhia uzuală a ordinelor de complexitate</h4>
<ul>
  <li>$O(1)$ — Timp constant (acces la un element de tablou prin index).</li>
  <li>$O(\\log n)$ — Timp logaritmic (căutarea binară ce înjumătățește spațiul la fiecare pas).</li>
  <li>$O(n)$ — Timp liniar (parcurgerea simplă a unei liste neordonate).</li>
  <li>$O(n \\log n)$ — Timp cvasi-liniar (cei mai buni algoritmi de sortare prin comparație: MergeSort).</li>
  <li>$O(n^2)$ — Timp pătratic (bucle imbricate precum BubbleSort sau selecția naivă).</li>
</ul>

<h4>2. Exemple Practice de Complexitate în Cod</h4>
<pre><code>// 1. O(1) - Timp Constant
function getFirstElement(arr) {
    return arr[0]; // Operație directă, independentă de lungimea lui arr
}

// 2. O(n) - Timp Liniar
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max; // Execută arr.length comparații
}

// 3. O(n^2) - Timp Pătratic
function hasDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true; // Bucle imbricate
        }
    }
    return false;
}
</code></pre>
""",
            "glossary": [
                {"term": "Big O Notation", "def": "Măsură a ratei de creștere a timpului de execuție sau a memoriei necesare în cel mai rău caz."},
                {"term": "Timp Constant O(1)", "def": "Operație a cărei durată nu depinde de mărimea setului de date de intrare."},
                {"term": "Timp Logaritmic O(log n)", "def": "Complexitate ideală unde spațiul de căutare este împărțit la o constantă la fiecare pas."},
                {"term": "Termen Dominant", "def": "Componenta cu cea mai rapidă rată de creștere ce dictează comportamentul la n mare."}
            ],
            "matchingPairs": [
                {"left": "O(1)", "right": "Acces direct la un element dintr-un array prin index"},
                {"left": "O(log n)", "right": "Căutare binară pe un tablou sortat"},
                {"left": "O(n)", "right": "Găsirea elementului maxim printr-o singură parcurgere"},
                {"left": "O(n^2)", "right": "Bucle imbricate pe o matrice n x n"}
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
            "theory": """
<p>Dacă un tablou este sortat, căutarea unui element nu necesită inspectarea fiecărei poziții ($O(n)$). <strong>Căutarea binară</strong> compară elementul căutat cu valoarea de la mijlocul intervalului curent.</p>

<h4>1. Algoritmul și Prevenirea Overflow-ului</h4>
<p>Menținem doi pointeri: <code>left = 0</code> și <code>right = n - 1</code>. Calculăm mijlocul protejat împotriva overflow-ului: <code>mid = left + Math.floor((right - left) / 2)</code>.</p>

<h4>2. Exemplu Complet de Căutare Binară</h4>
<pre><code>function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calcul sigur al mijlocului:
        const mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid; // Elementul a fost găsit
        } else if (arr[mid] < target) {
            left = mid + 1; // Caută în jumătatea dreaptă
        } else {
            right = mid - 1; // Caută în jumătatea stângă
        }
    }
    return -1; // Elementul nu există în tablou
}

// Testare:
const numbers = [10, 23, 35, 42, 59, 71, 88, 94];
console.log(binarySearch(numbers, 42)); // Returnează indexul 3
</code></pre>
""",
            "glossary": [
                {"term": "Binary Search", "def": "Algoritm de căutare în O(log n) ce înjumătățește intervalul de căutare la fiecare pas."},
                {"term": "Midpoint Calculation", "def": "Calculul mid = left + (right - left) / 2 pentru a preveni integer overflow."},
                {"term": "Precondiție de Sortare", "def": "Căutarea binară este validă exclusiv pe colecții deja sortate."},
                {"term": "Logaritm în Baza 2", "def": "Numărul de pași necesari pentru a reduce un număr n la 1 prin divizări repetate la 2."}
            ],
            "matchingPairs": [
                {"left": "left <= right", "right": "Condiția de continuare a căutării binare"},
                {"left": "target > arr[mid]", "right": "Ajustează marginea stângă: left = mid + 1"},
                {"left": "target < arr[mid]", "right": "Ajustează marginea dreaptă: right = mid - 1"},
                {"left": "left + Math.floor((right - left) / 2)", "right": "Calcul de mijloc sigur anti-overflow"}
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
            "theory": """
<p>O <strong>listă simplu înlănțuită</strong> este o structură de date liniară în care elementele (nodurile) nu sunt stocate contiguu în memorie, ci fiecare nod conține datele proprii și un pointer către nodul următor (<code>next</code>).</p>

<h4>1. Structura Nodului și Inserarea la Început ($O(1)$)</h4>
<p>Inserarea unui nod nou la capătul listei (Head) necesită doar setarea <code>newNode.next = head</code> și actualizarea <code>head = newNode</code>, fără a muta celelalte elemente din memorie (spre deosebire de tablouri unde costă $O(n)$).</p>

<h4>2. Exemplu de Implementare și Parcurgere</h4>
<pre><code>class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Inserare la Head în O(1):
function insertAtHead(head, val) {
    const newNode = new ListNode(val);
    newNode.next = head;
    return newNode; // Noul head al listei
}

// Parcurgere liniară în O(n):
function traverseList(head) {
    let current = head;
    while (current !== null) {
        console.log("Valoare nod:", current.val);
        current = current.next; // Avansare către următorul nod
    }
}
</code></pre>
""",
            "glossary": [
                {"term": "Linked List Node", "def": "Obiect individual ce deține valoarea utilă și o referință spre nodul următor (next)."},
                {"term": "Head Pointer", "def": "Referința către primul nod din lista înlănțuită."},
                {"term": "Null-Termination", "def": "Proprietatea ultimului nod din listă de a avea next = null."},
                {"term": "Inserare O(1)", "def": "Adăugarea rapidă a unui nod la începutul listei prin reajustarea a două referințe."}
            ],
            "matchingPairs": [
                {"left": "newNode.next = head", "right": "Leagă nodul nou de primul nod existent"},
                {"left": "current = current.next", "right": "Avansare către următorul nod din listă"},
                {"left": "current.next === null", "right": "Condiție ce indică atingerea ultimului nod"},
                {"left": "ListNode { val, next }", "right": "Structura canonică a unui nod din listă"}
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
            "theory": """
<p>O <strong>stivă (Stack)</strong> funcționează pe principiul <strong>LIFO</strong> (Last-In, First-Out): ultimul element introdus este primul eliminat. Operațiunile de bază sunt <code>push</code> (adăugare) și <code>pop</code> (eliminare), ambele garantate în $O(1)$.</p>

<h4>1. Aplicația Clasică: Validarea Parantezelor</h4>
<p>Verificarea dacă un șir de paranteze (<code>()[]{}</code>) este valid se rezolvă optim cu o stivă: când întâlnim o paranteză deschisă o punem pe stivă (<code>push</code>). Când întâlnim una închisă, extragem vârful stivei (<code>pop</code>) și verificăm dacă perechea se potrivește.</p>

<h4>2. Exemplu Complet de Validare cu Stivă</h4>
<pre><code>function isValidParentheses(s) {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            const top = stack.pop();
            if (top !== pairs[char]) {
                return false; // Paranteză nepotrivită sau stivă goală
            }
        }
    }
    // Dacă stiva este complet goală la final, parantezarea este validă
    return stack.length === 0;
}

console.log(isValidParentheses("({[]})")); // true
console.log(isValidParentheses("([)]"));   // false
</code></pre>
""",
            "glossary": [
                {"term": "Stack (LIFO)", "def": "'Last In First Out' - structură unde operațiunile se realizează exclusiv la un singur capăt (vârf)."},
                {"term": "push(val)", "def": "Operație O(1) de adăugare a unui nou element în vârful stivei."},
                {"term": "pop()", "def": "Operație O(1) de extragere și eliminare a elementului din vârful stivei."},
                {"term": "peek() / top()", "def": "Inspectarea valorii din vârf fără a o elimina din stivă."}
            ],
            "matchingPairs": [
                {"left": "stack.push(char)", "right": "Adaugă paranteza deschisă pe stivă"},
                {"left": "const top = stack.pop()", "right": "Extrage ultimul element introdus"},
                {"left": "stack.length === 0", "right": "Verifică dacă stiva a rămas complet echilibrată"},
                {"left": "Call Stack", "right": "Stiva internă a procesorului pentru execuția metodelor"}
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
            "theory": """
<p>Tehnicile <strong>Two Pointers</strong> și <strong>Sliding Window</strong> sunt două dintre cele mai importante metode de optimizare, reducând adesea complexitatea algoritmilor de la $O(n^2)$ la $O(n)$ prin evitarea calculelor redundante.</p>

<h4>1. Two Pointers Convergenți</h4>
<p>Pe un tablou sortat, plasăm un pointer la început (<code>left = 0</code>) și unul la sfârșit (<code>right = n - 1</code>). Dacă suma celor două numere este prea mică incrementăm <code>left</code>, dacă este prea mare decrementăm <code>right</code>.</p>

<h4>2. Exemplu Sliding Window: Suma Maximă a unei Subferestre</h4>
<pre><code>// Calculul sumei maxime a unui subtablou contiguu de lungime k în O(n)
function maxSubarraySum(arr, k) {
    if (arr.length < k) return null;

    // Calculăm suma primei ferestre de dimensiune k:
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    let maxSum = windowSum;

    // Glisăm fereastra: adăugăm noul element și îl scădem pe cel ieșit
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i - k]; // Actualizare O(1)
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

const scores = [2, 1, 5, 1, 3, 2];
console.log(maxSubarraySum(scores, 3)); // 5 + 1 + 3 = 9
</code></pre>
""",
            "glossary": [
                {"term": "Two Pointers", "def": "Tehnică ce deplasează doi indici coordonați prin tablou pentru a satisface o condiție în O(n)."},
                {"term": "Sliding Window", "def": "Fereastră de dimensiune variabilă sau fixă ce glisează peste date reutilizând calculele anterioare."},
                {"term": "Two Sum II", "def": "Problemă clasică rezolvată în O(n) timp și O(1) memorie cu doi pointeri pe tablou sortat."},
                {"term": "Optimizare de la O(n^2) la O(n)", "def": "Înlocuirea a două bucle for imbricate printr-o singură trecere inteligentă."}
            ],
            "matchingPairs": [
                {"left": "left++, right--", "right": "Deplasare convergentă a celor doi pointeri"},
                {"left": "currentSum += arr[i] - arr[i - k]", "right": "Actualizarea ferestrei glisante în timp O(1)"},
                {"left": "left < right", "right": "Condiția standard de oprire pentru doi pointeri convergenți"},
                {"left": "Subșir de sumă maximă", "right": "Problemă rezolvată optim prin Sliding Window"}
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
            "theory": """
<p>O <strong>tabelă hash (Hash Map)</strong> asociază chei cu valori folosind o funcție hash care transformă cheia într-un index numeric într-un tablou intern (bucket array), oferind căutare, inserare și ștergere în timp mediu $O(1)$.</p>

<h4>1. Coliziuni Hash și Separate Chaining</h4>
<p>Deoarece mulțimea cheilor posibile este infinită, două chei diferite pot produce același index hash (coliziune). În <em>Separate Chaining</em>, fiecare bucket este o listă înlănțuită ce conține nodurile cu același index hash.</p>

<h4>2. Exemplu Complet de Hash Map cu Separate Chaining</h4>
<pre><code>class SimpleHashMap {
    constructor(capacity = 16) {
        this.capacity = capacity;
        this.buckets = new Array(capacity).fill(null).map(() => []);
    }

    // Funcție simplă de dispersie (hash code):
    hash(key) {
        let h = 0;
        for (let i = 0; i < key.length; i++) {
            h = (h * 31 + key.charCodeAt(i)) % this.capacity;
        }
        return h;
    }

    set(key, value) {
        const index = this.hash(key) % this.capacity;
        const bucket = this.buckets[index];
        const existing = bucket.find(item => item.key === key);
        if (existing) {
            existing.value = value;
        } else {
            bucket.push({ key, value });
        }
    }
}
</code></pre>
""",
            "glossary": [
                {"term": "Hash Function", "def": "Funcție matematică deterministă ce mapează date arbitrare la o valoare întreagă fixă."},
                {"term": "Collision (Coliziune)", "def": "Situația în care două chei distincte generează exact aceeași valoare hash."},
                {"term": "Separate Chaining", "def": "Rezolvarea coliziunilor prin atașarea unei liste înlănțuite la fiecare slot din tabelă."},
                {"term": "Load Factor", "def": "Raportul elemente/capacitate ce dictează când tabela trebuie redimensionată prin rehashing."}
            ],
            "matchingPairs": [
                {"left": "Separate Chaining", "right": "Fiecare bucket conține o listă de noduri cu chei colizionate"},
                {"left": "Linear Probing", "right": "Căutarea următorului slot liber consecutiv în array"},
                {"left": "Load Factor > 0.75", "right": "Declanșează dublarea capacității și rehashing complet"},
                {"left": "Timp Mediu O(1)", "right": "Complexitatea operațiilor de bază într-o tabelă hash sănătoasă"}
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
            "theory": """
<p><strong>MergeSort</strong> este un algoritm clasic de sortare bazat pe paradigma <strong>Divide et Impera</strong>, oferind performanță garantată $O(n \\log n)$ în cel mai bun, mediu și cel mai defavorabil scenariu.</p>

<h4>1. Divide, Impera, Combină</h4>
<ol>
  <li><strong>Divide</strong>: Împarte tabloul recursiv în două jumătăți egale până când ajunge la tablouri de 1 element (deja sortate).</li>
  <li><strong>Impera</strong>: Sortează recursiv fiecare jumătate.</li>
  <li><strong>Combină (Merge)</strong>: Interclasează cele două jumătăți sortate într-un tablou auxiliar comparând elementele cap la cap în timp $O(n)$.</li>
</ol>

<h4>2. Exemplu Complet de Implementare MergeSort</h4>
<pre><code>function mergeSort(arr) {
    // Cazul de bază: un tablou de 0 sau 1 element este deja sortat
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
</code></pre>
""",
            "glossary": [
                {"term": "Divide et Impera", "def": "Paradigmată ce descompune o problemă mare în subprobleme similare mai mici până devin triviale."},
                {"term": "Interclasare (Merge)", "def": "Îmbinarea a două tablouri gata sortate într-unul singur în timp liniar O(n)."},
                {"term": "Sortare Stabilă", "def": "Proprietate ce garantează că elementele cu valori identice își păstrează poziția relativă inițială."},
                {"term": "Memorie Auxiliară O(n)", "def": "Spațiul RAM suplimentar necesar pentru stocarea temporară a elementelor interclasate."}
            ],
            "matchingPairs": [
                {"left": "O(n log n)", "right": "Complexitate de timp garantată chiar și în cel mai rău caz"},
                {"left": "O(n) memorie", "right": "Consumul auxiliar de memorie pentru interclasare"},
                {"left": "Sortare Stabilă", "right": "Păstrează ordinea elementelor cu chei identice"},
                {"left": "left.length <= 1", "right": "Cazul de bază ce oprește recursivitatea"}
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
            "theory": """
<p>Un <strong>Arbore Binar de Căutare (BST)</strong> este o structură ierarhică unde fiecare nod conține cel mult doi copii, respectând invariantul BST:</p>
<p>Toate valorile din subarborele stâng sunt strict mai mici decât valoarea nodului (<code>left < root</code>), iar toate valorile din subarborele drept sunt strict mai mari (<code>right > root</code>).</p>

<h4>1. Traversarea Inorder Produce Date Sortate</h4>
<p>Traversarea <strong>Inorder</strong> (Stânga $\\rightarrow$ Rădăcină $\\rightarrow$ Dreapta) parcurge elementele unui BST în ordine strict crescătoare în timp $O(n)$.</p>

<h4>2. Exemplu Complet de Nod BST și Căutare Recursivă</h4>
<pre><code>class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function searchBST(node, val) {
    if (!node || node.val === val) return node;

    // Căutare binară în arbore:
    if (val < node.val) {
        return searchBST(node.left, val);  // Explorează ramura stângă
    } else {
        return searchBST(node.right, val); // Explorează ramura dreaptă
    }
}

// Inorder Traversal ce generează un tablou sortat:
function inorder(root, res = []) {
    if (!root) return res;
    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);
    return res;
}
</code></pre>
""",
            "glossary": [
                {"term": "BST Invariant", "def": "Regula fundamentală: subarbore stâng < nod curent < subarbore drept."},
                {"term": "Inorder Traversal", "def": "Parcurgere Stânga -> Rădăcină -> Dreapta ce generează secvența sortată."},
                {"term": "Arbore Degenerat", "def": "BST neechilibrat ce devine o listă de înălțime O(n) cu operații ineficiente."},
                {"term": "TreeNode { val, left, right }", "def": "Nod arborescent cu pointeri către cei doi copii posibili."}
            ],
            "matchingPairs": [
                {"left": "Inorder (L, Root, R)", "right": "Vizitează nodurile în ordine strict crescătoare"},
                {"left": "Preorder (Root, L, R)", "right": "Util pentru clonarea și serializarea arborelui"},
                {"left": "Postorder (L, R, Root)", "right": "Util pentru eliberarea memoriei și calculul dimensiunii"},
                {"left": "Înălțime O(log n)", "right": "Garantată exclusiv în arbori echilibrați (AVL / Red-Black)"}
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
            "theory": """
<p>Un graf este o colecție de noduri (vârfuri) legate prin muchii. <strong>Breadth-First Search (BFS)</strong> parcurge graful nivel cu nivel, explorând toți vecinii imediați ai nodului de pornire înainte de a trece la nodurile de la distanța 2.</p>

<h4>1. Utilizarea Cozii (Queue — FIFO) și Drumul Minim</h4>
<p>BFS folosește obligatoriu o <strong>coadă (Queue)</strong> pentru a gestiona ordinea de explorare. Într-un graf <em>neponderat</em>, BFS garantează că primul moment în care atinge nodul destinație reprezintă cel mai scurt drum (număr minim de muchii).</p>

<h4>2. Exemplu Complet de Implementare BFS</h4>
<pre><code>function bfs(graph, startNode) {
    const visited = new Set([startNode]);
    const queue = [startNode];
    const traversalOrder = [];

    while (queue.length > 0) {
        // Extrage primul nod din coadă în O(1)
        const node = queue.shift();
        traversalOrder.push(node);

        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor); // Marchează ca vizitat
                queue.push(neighbor);  // Adaugă la coadă
            }
        }
    }
    return traversalOrder;
}

// Exemplu listă de adiacență:
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'], 'E': ['B'], 'F': ['C']
};
console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']
</code></pre>
""",
            "glossary": [
                {"term": "BFS (Breadth-First Search)", "def": "Algoritm de explorare radială pe niveluri folosind o structură de tip coadă."},
                {"term": "Adjacency List", "def": "Reprezentare optimă O(V + E) a unui graf ca un dicționar de liste de vecini."},
                {"term": "Visited Set", "def": "Tabelă hash de noduri vizitate pentru a preveni ciclurile și procesarea repetată."},
                {"term": "Cel mai scurt drum neponderat", "def": "Garantat de BFS datorită explorării în ordine strict crescătoare a distanțelor."}
            ],
            "matchingPairs": [
                {"left": "Queue (FIFO)", "right": "Structura de date fundamentală pentru implementarea BFS"},
                {"left": "visited.add(node)", "right": "Marchează nodul ca procesat pentru a evita ciclurile"},
                {"left": "queue.shift()", "right": "Extrage următorul nod de la începutul cozii"},
                {"left": "Graf Neponderat", "right": "Domeniu unde BFS găsește garantat drumul minim"}
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
            "theory": """
<p><strong>Depth-First Search (DFS)</strong> explorează graful mergând cât mai adânc posibil de-a lungul fiecărei ramuri înainte de a face întoarcere (backtracking).</p>

<h4>1. Detectarea Ciclurilor în Grafuri Orientate (3 Culori)</h4>
<p>Pentru a detecta cicluri într-un graf orientat, clasificăm starea nodurilor în 3 stări:</p>
<ul>
  <li><em>0 (Alb)</em>: Nevizitat încă.</li>
  <li><em>1 (Gri)</em>: În curs de vizitare (pe Call Stack-ul recursiv curent).</li>
  <li><em>2 (Negru)</em>: Complet procesat și închis.</li>
</ul>

<h4>2. Exemplu Complet de Detectare a Ciclului prin DFS</h4>
<pre><code>function hasCycle(graph, numNodes) {
    const state = new Array(numNodes).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited

    function dfs(u) {
        state[u] = 1; // Marchează nodul ca 'gri' (activ pe stivă)

        for (const v of graph[u] || []) {
            if (state[v] === 1) {
                return true; // S-a găsit o muchie de întoarcere (Back Edge) -> CICLU
            }
            if (state[v] === 0 && dfs(v)) {
                return true;
            }
        }

        state[u] = 2; // Marchează nodul ca 'negru' (finalizat)
        return false;
    }

    for (let i = 0; i < numNodes; i++) {
        if (state[i] === 0 && dfs(i)) return true;
    }
    return false;
}
</code></pre>
""",
            "glossary": [
                {"term": "DFS (Depth-First Search)", "def": "Algoritm de explorare în adâncime bazat pe recursivitate și backtracking."},
                {"term": "Backtracking", "def": "Revenirea la pasul anterior când o cale explorată a ajuns la capăt sau este invalidă."},
                {"term": "Back Edge", "def": "Muchie ce leagă un nod curent de un strămoș aflat încă activ pe stivă, demonstrând un ciclu."},
                {"term": "Topological Sort", "def": "Ordonare liniară a nodurilor dintr-un graf orientat aciclic (DAG) realizată prin DFS."}
            ],
            "matchingPairs": [
                {"left": "Call Stack / Recursion", "right": "Motorul natural de execuție al algoritmului DFS"},
                {"left": "Starea Gri (Visiting)", "right": "Nod activ pe stiva curentă de apel a recursivității"},
                {"left": "Graf Orientat Aciclic (DAG)", "right": "Condiție obligatorie pentru sortarea topologică"},
                {"left": "Back Edge detectat", "right": "Demonstrează existența unui ciclu în graful orientat"}
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
            "theory": """
<p><strong>Algoritmul lui Dijkstra</strong> rezolvă problema celui mai scurt drum de la o sursă unică către toate celelalte noduri într-un graf ponderat cu costuri <em>strict non-negative</em>.</p>

<h4>1. Coada cu Priorități și Relaxarea Muchiilor</h4>
<p>Algoritmul menține un tablou <code>dist</code> inițializat cu infinit ($\\infty$) și o <strong>coadă cu priorități (Min-Heap)</strong> ce extrage întotdeauna nodul nefinalizat cu distanța minimă curentă în $O(\\log V)$. Pentru fiecare vecin, dacă <code>dist[u] + weight < dist[v]</code>, distanța este actualizată (relaxare).</p>

<h4>2. Exemplu Complet de Dijkstra</h4>
<pre><code>function dijkstra(graph, startNode, numNodes) {
    const dist = new Array(numNodes).fill(Infinity);
    dist[startNode] = 0;

    // Coadă de priorități simulată cu perechi [node, distance]:
    const pq = [[startNode, 0]];

    while (pq.length > 0) {
        pq.sort((a, b) => a[1] - b[1]); // Extrage nodul cu distanța minimă
        const [u, currentDist] = pq.shift();

        if (currentDist > dist[u]) continue;

        for (const [v, weight] of graph[u] || []) {
            // Condiția de relaxare a muchiei:
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push([v, dist[v]]);
            }
        }
    }
    return dist;
}
</code></pre>
""",
            "glossary": [
                {"term": "Dijkstra Algorithm", "def": "Algoritm Greedy ce găsește distanțele minime într-un graf cu ponderi pozitive în O((V+E) log V)."},
                {"term": "Relaxare (Edge Relaxation)", "def": "Actualizarea distanței către un vecin dacă drumul prin nodul curent este mai scurt."},
                {"term": "Min-Heap", "def": "Structură ce extrage nodul cu costul minim în timp garantat O(log V)."},
                {"term": "Ponderi Negative", "def": "Limitare: Dijkstra eșuează pe ponderi negative; pentru acestea se folosește Bellman-Ford."}
            ],
            "matchingPairs": [
                {"left": "if (dist[u] + w < dist[v])", "right": "Condiția de relaxare a unei muchii în Dijkstra"},
                {"left": "Min-Heap / PriorityQueue", "right": "Extrage nodul optim în timp O(log V)"},
                {"left": "dist[source] = 0", "right": "Inițializarea distanței către nodul de plecare"},
                {"left": "Ponderi Strict Pozitive", "right": "Precondiție obligatorie pentru corectitudinea lui Dijkstra"}
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
            "theory": """
<p><strong>Programarea Dinamică (Dynamic Programming — DP)</strong> este o tehnică algoritmică utilizată când o problemă de optimizare prezintă două proprietăți cheie: <strong>Substructură Optimă</strong> și <strong>Subprobleme care se Suprapun</strong>.</p>

<h4>1. Top-Down (Memoization) vs Bottom-Up (Tabulation)</h4>
<p>În <em>Memoization</em> stocăm rezultatele apelurilor recursive într-un dicționar sau array pentru a preveni recalcularea. În <em>Tabulation</em> eliminăm recursivitatea, completând iterativ un tablou <code>dp[]</code> de la cazurile de bază până la $n$.</p>

<h4>2. Exemplu Complet: Fibonacci cu Tabulation O(n)</h4>
<pre><code>function fibonacci(n) {
    if (n <= 1) return n;

    // Tabloul DP pentru stocarea rezultatelor parțiale
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    // Relația de recurență Bottom-Up:
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

console.log(fibonacci(10)); // 55 calculat instantaneu în O(n)
</code></pre>
""",
            "glossary": [
                {"term": "Overlapping Subproblems", "def": "Proprietate a unei probleme unde aceleași calcule mici sunt necesare de mai multe ori."},
                {"term": "Optimal Substructure", "def": "Capacitatea de a construi soluția globală optimă din soluțiile optime ale subproblemelor."},
                {"term": "Memoization (Top-Down)", "def": "Optimizarea recursivității prin reținerea rezultatelor deja calculate într-un cache."},
                {"term": "Tabulation (Bottom-Up)", "def": "Rezolvarea iterativă a problemelor începând cu stările de bază, fără recursivitate pe stivă."}
            ],
            "matchingPairs": [
                {"left": "Memoization", "right": "Abordare Top-Down recursivă cu stocare în cache"},
                {"left": "Tabulation", "right": "Abordare Bottom-Up iterativă bazată pe tablou dp"},
                {"left": "dp[i] = dp[i-1] + dp[i-2]", "right": "Relația de recurență pentru numerele Fibonacci"},
                {"left": "Reducere de la O(2^n) la O(n)", "right": "Câștigul masiv de eficiență prin eliminarea muncii redundante"}
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
        }
    ]
