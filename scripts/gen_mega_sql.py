# -*- coding: utf-8 -*-
"""
Generator for SQL mega curriculum expansion (10 lessons).
Covers Window Functions, Recursive CTEs, ACID & Isolation Levels, EXPLAIN ANALYZE, and JSONB.
"""

def get_sql_lessons():
    return [
        {
            "id": "sql-new-1",
            "track": "SQL",
            "division": "Informatică și Programare",
            "icon": "🗄️",
            "level": "4. Senior",
            "xp": 55,
            "title": "Capitolul 1: Funcții Window de Clasament: 'ROW_NUMBER()', 'RANK()' și 'DENSE_RANK()'",
            "theory": """
<p>Spre deosebire de <code>GROUP BY</code> care comprimă mai multe rânduri într-un singur rând agregat, <strong>Funcțiile Window</strong> calculează valori peste un set de rânduri (window frame), păstrând totodată identitatea fiecărui rând individual din rezultat.</p>
<h4>1. Diferența dintre ROW_NUMBER, RANK și DENSE_RANK</h4>
<p>Dacă avem două rânduri cu același salariu de pe poziția a doua:</p>
<ul>
  <li><code>ROW_NUMBER()</code>: Asignează valori strict unice fără duplicare (1, 2, 3, 4...).</li>
  <li><code>RANK()</code>: Asignează același rang egalităților, dar <em>sare peste poziții</em> (1, 2, 2, 4...).</li>
  <li><code>DENSE_RANK()</code>: Asignează același rang egalităților și <em>nu sare nicio poziție</em> (1, 2, 2, 3...).</li>
</ul>
<h4>2. Clauza 'PARTITION BY'</h4>
<p>Sintaxa <code>OVER (PARTITION BY department_id ORDER BY salary DESC)</code> resetează numerotarea independent pentru fiecare departament în parte.</p>
""",
            "glossary": [
                {"term": "Window Function", "def": "Funcție SQL ce realizează calcule peste un set relaționat de rânduri fără a colapsa rezultatele."},
                {"term": "OVER (PARTITION BY ...)", "def": "Clauză ce împarte setul de date în ferestre independente de calcul."},
                {"term": "DENSE_RANK()", "def": "Rang continuu fără goluri numerice la întâlnirea valorilor egale."},
                {"term": "RANK()", "def": "Rang cu goluri proporționale cu numărul de elemente egale întâlnite anterior."}
            ],
            "matchingPairs": [
                {"left": "ROW_NUMBER() OVER (...)", "right": "Index secvențial strict unic per rând (1, 2, 3, 4)"},
                {"left": "RANK() OVER (...)", "right": "Rang cu sărituri peste numere la egalitate (1, 2, 2, 4)"},
                {"left": "DENSE_RANK() OVER (...)", "right": "Rang dens fără nicio săritură (1, 2, 2, 3)"},
                {"left": "PARTITION BY dept_id", "right": "Resetează calculul ferestrei pentru fiecare departament"}
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
            "theory": """
<p>Funcțiile analitice <code>LEAD()</code> și <code>LAG()</code> permit accesarea valorilor din rândurile următoare sau anterioare direct din interogare, fără a recurge la auto-joncțiuni costisitoare (self-joins $O(n^2)$).</p>
<h4>1. Sintaxa 'LAG(column, offset, default)'</h4>
<p><code>LAG(amount, 1, 0) OVER (ORDER BY sale_date)</code> returnează valoarea vânzării din rândul imediat precedent. Este esențială pentru calculul creșterilor procentuale lunare (Month-over-Month growth).</p>
<h4>2. Sintaxa 'LEAD()'</h4>
<p>Funcționează identic, dar inspectează rândul din viitor (următorul pas temporal).</p>
""",
            "glossary": [
                {"term": "LAG()", "def": "Accesează o coloană dintr-un rând anterior la un decalaj (offset) specificat."},
                {"term": "LEAD()", "def": "Accesează o coloană dintr-un rând ulterior la un decalaj specificat."},
                {"term": "Self-Join Elimination", "def": "Înlocuirea joncțiunilor tabelei cu ea însăși prin funcții window mult mai rapide."},
                {"term": "Offset Default Value", "def": "Al treilea parametru opțional ce înlocuiește NULL-ul pentru primul/ultimul rând."}
            ],
            "matchingPairs": [
                {"left": "LAG(revenue, 1) OVER (...)", "right": "Extrage venitul din luna precedentă"},
                {"left": "LEAD(status, 1) OVER (...)", "right": "Extrage starea din pasul următor"},
                {"left": "val - LAG(val) OVER (...)", "right": "Calculează diferența absolută față de pasul anterior"},
                {"left": "LAG(price, 1, 0)", "right": "Returnează 0 în loc de NULL pentru primul rând"}
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
            "theory": """
<p>Datele ierarhice (organigrame de companie, structuri de directoare în fișiere, categorii cu subcategorii imbricate nelimitat) nu pot fi parcurse cu un număr fix de <code>JOIN</code>-uri. <strong>Recursive Common Table Expressions (WITH RECURSIVE)</strong> rezolvă această problemă în mod elegant.</p>
<h4>1. Structura unui CTE Recursiv</h4>
<p>Un CTE recursiv este format din două interogări unite prin <code>UNION ALL</code>:</p>
<ol>
  <li><strong>Termenul Ancoră (Anchor Member)</strong>: Selectează rădăcinile ierarhiei (ex: <code>WHERE manager_id IS NULL</code>).</li>
  <li><strong>Termenul Recursiv (Recursive Member)</strong>: Face joncțiune între tabela sursă și numele propriului CTE, parcurgând nivel cu nivel până când interogarea nu mai produce rânduri noi.</li>
</ol>
""",
            "glossary": [
                {"term": "WITH RECURSIVE", "def": "Directivă SQL ce permite unei tabele temporare (CTE) să se auto-referențieze recursiv."},
                {"term": "Anchor Member", "def": "Interogarea de bază non-recursivă ce furnizează setul de pornire (rădăcinile ierarhiei)."},
                {"term": "Recursive Member", "def": "Interogarea ce unește noile noduri copii cu rezultatele produse la pasul anterior."},
                {"term": "UNION ALL", "def": "Operator obligatoriu ce unește ancora cu termenul recursiv fără costul dedublicării."}
            ],
            "matchingPairs": [
                {"left": "WITH RECURSIVE org_chart AS (...)", "right": "Inițializează CTE-ul recursiv"},
                {"left": "SELECT id, name FROM emp WHERE mgr IS NULL", "right": "Termenul ancoră (rădăcina ierarhiei)"},
                {"left": "JOIN org_chart ON emp.mgr = org_chart.id", "right": "Termenul recursiv ce coboară în arbore"},
                {"left": "depth + 1", "right": "Calculul nivelului de adâncime în ierarhie"}
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
            "theory": """
<p>O <strong>tranzacție</strong> este o unitate logică indivizibilă de lucru garantată de proprietățile <strong>ACID</strong> (Atomicity, Consistency, Isolation, Durability).</p>
<h4>1. Anomalii de Concurență</h4>
<ul>
  <li><em>Dirty Read</em>: Tranzacția A citește date modificate de Tranzacția B, dar B dă <code>ROLLBACK</code>.</li>
  <li><em>Non-Repeatable Read</em>: Tranzacția A citește același rând de două ori și găsește valori diferite deoarece Tranzacția B a făcut <code>UPDATE</code> și <code>COMMIT</code> între timp.</li>
  <li><em>Phantom Read</em>: Tranzacția A re-execută o interogare de tip interval și găsește rânduri noi inserate de B.</li>
</ul>
<h4>2. Nivelurile de Izolare SQL Standard</h4>
<ol>
  <li><code>READ UNCOMMITTED</code>: Permite toate anomaliile (inclusiv Dirty Reads).</li>
  <li><code>READ COMMITTED</code> (implicit în Postgres): Previne Dirty Reads.</li>
  <li><code>REPEATABLE READ</code>: Previne Dirty Reads și Non-Repeatable Reads.</li>
  <li><code>SERIALIZABLE</code>: Cel mai strict nivel; previne absolut toate anomaliile emulând execuția serială printr-un mecanism SSI (Serializable Snapshot Isolation).</li>
</ol>
""",
            "glossary": [
                {"term": "ACID", "def": "Atomicitate (totul sau nimic), Consistență (reguli de integritate), Izolare, Durabilitate (pe disc)."},
                {"term": "Dirty Read", "def": "Citirea datelor ne-comise dintr-o tranzacție concurentă ce ar putea fi anulată."},
                {"term": "REPEATABLE READ", "def": "Nivel de izolare ce garantează că recitirea aceluiași rând va produce exact aceleași date."},
                {"term": "SERIALIZABLE", "def": "Nivel de izolare maxim ce garantează absența oricărei anomalii de concurență prin MVCC și blocaje."}
            ],
            "matchingPairs": [
                {"left": "READ COMMITTED", "right": "Nivelul implicit în PostgreSQL ce previne Dirty Reads"},
                {"left": "SERIALIZABLE", "right": "Izolare totală ce anihilează și Phantom Reads"},
                {"left": "ROLLBACK", "right": "Anulează toate modificările din tranzacția curentă"},
                {"left": "SAVEPOINT point1", "right": "Permite rollback parțial la un punct intermediar"}
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
            "theory": """
<p>Pentru a înțelege de ce o interogare este lentă, folosim comanda <code>EXPLAIN ANALYZE</code>. Aceasta nu doar estimează planul, ci <strong>execută efectiv interogarea</strong> pe server și afișează timpii reali măsurați în milisecunde și numărul de pagini de memorie (buffers) citite.</p>
<h4>1. Noduri de Scanare</h4>
<ul>
  <li><code>Seq Scan (Sequential Scan)</code>: Citește fiecare bloc al tabelei de la cap la coadă ($O(n)$). Acceptabil pentru tabele mici, catastrofal pentru milioane de rânduri.</li>
  <li><code>Index Scan</code>: Caută cheile în arborele B-Tree al indexului și apoi citește paginile de pe disc ($O(\log n)$).</li>
  <li><code>Index Only Scan</code>: Toate coloanele cerute în <code>SELECT</code> se află deja în index (Covering Index), eliminând complet citirea din tabelă (Heap Fetch = 0).</li>
</ul>
<h4>2. Buffers: Shared Hit vs Read</h4>
<p><code>shared hit</code> înseamnă că datele erau deja în memoria RAM (Buffer Pool). <code>read</code> înseamnă citire fizică lentă de pe discul I/O.</p>
""",
            "glossary": [
                {"term": "EXPLAIN ANALYZE", "def": "Comandă ce execută interogarea și afișează planul real cu costuri, timpi și operațiuni de buffer."},
                {"term": "Sequential Scan", "def": "Parcurgerea secvențială a fiecărui bloc de pe disc din tabela respectivă."},
                {"term": "Index Only Scan", "def": "Scenariu optim unde interogarea este rezolvată exclusiv din datele conținute în index."},
                {"term": "Buffer Pool Hit", "def": "Găsirea paginii de date direct în memoria cache RAM a bazei de date."}
            ],
            "matchingPairs": [
                {"left": "EXPLAIN (ANALYZE, BUFFERS)", "right": "Afișează timpii reali și paginile de RAM citite"},
                {"left": "Seq Scan", "right": "Citire liniară completă a tabelei din cauza lipsei indexului"},
                {"left": "Index Only Scan", "right": "Performanță maximă: zero citiri din tabela fizică"},
                {"left": "shared hit", "right": "Blocuri găsite direct în memoria cache fără acces la disc"}
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
        }
    ]
