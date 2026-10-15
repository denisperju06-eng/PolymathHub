# -*- coding: utf-8 -*-
"""
Generator for Java & Spring Boot mega curriculum expansion (12 lessons).
Covers Concurrency, Streams, Virtual Threads, Spring Boot REST, and JVM internals.
"""

def get_java_lessons():
    return [
        {
            "id": "java-new-1",
            "track": "Java",
            "division": "Informatică și Programare",
            "icon": "☕",
            "level": "3. Middle",
            "xp": 45,
            "title": "Capitolul 1: Colectoare Avansate în Java Streams ('groupingBy' & 'partitioningBy')",
            "theory": """
<p>Metoda <code>Stream.collect()</code> este punctul culminant al procesării funcționale în Java. În loc de simple colecții <code>toList()</code>, clasa utilitară <code>Collectors</code> oferă operațiuni analitice de agregare sofisticate.</p>
<h4>1. Gruparea Datelor cu 'Collectors.groupingBy'</h4>
<p>Permite clasificarea elementelor după o cheie calculată:</p>
<pre><code>Map<Department, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));
</code></pre>
<h4>2. Partiționare Binară cu 'Collectors.partitioningBy'</h4>
<p>Împarte fluxul în două grupuri distincte pe baza unui predicat boolean (<code>true</code> și <code>false</code>): <code>Map<Boolean, List<Student>> passed = students.stream().collect(Collectors.partitioningBy(s -> s.getGrade() >= 5));</code>.</p>
""",
            "glossary": [
                {"term": "Collectors.groupingBy()", "def": "Operație terminală ce grupează elementele unui flux într-un Map pe baza unei funcții de clasificare."},
                {"term": "Collectors.partitioningBy()", "def": "Caz special de grupare ce returnează un Map<Boolean, List<T>> pe baza unui predicat."},
                {"term": "Downstream Collector", "def": "Al doilea colector opțional transmis către groupingBy pentru reducerea fiecărui grup (ex: counting, averagingInt)."},
                {"term": "Method Reference (::)", "def": "Sintaxă compactă pentru transmiterea unei metode existente ca expresie lambda funcțională."}
            ],
            "matchingPairs": [
                {"left": "Collectors.groupingBy(User::getRole)", "right": "Grupează utilizatorii într-un Map după rolul lor"},
                {"left": "Collectors.partitioningBy(n -> n > 0)", "right": "Împarte numerele în pozitive (true) și negative (false)"},
                {"left": "Collectors.counting()", "right": "Numără elementele din fiecare subgrup"},
                {"left": "Collectors.joining(', ')", "right": "Concatenează stringurile separate prin virgulă"}
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
            "theory": """
<p>Interfața clasică <code>Future<T></code> introdusă în Java 5 bloca firul apelant prin <code>get()</code>. În Java 8+, <strong>CompletableFuture&lt;T&gt;</strong> aduce un model reactiv non-blocant complet compatibil cu stilul funcțional.</p>
<h4>1. Rularea Asincronă cu 'supplyAsync'</h4>
<p>Metoda statică <code>CompletableFuture.supplyAsync(Supplier<U>)</code> execută calculul pe un thread din <code>ForkJoinPool.commonPool()</code>.</p>
<h4>2. Înlănțuirea Operațiunilor ('thenApply' vs 'thenCompose')</h4>
<p><code>thenApply(Function)</code> transformă rezultatul sincron ($T \rightarrow U$). <code>thenCompose</code> aplatizează viitoarele promisiuni (echivalentul monadic flatMap) când pasul următor este la rândul său o operație asincronă.</p>
""",
            "glossary": [
                {"term": "CompletableFuture<T>", "def": "Promisiune asincronă ce suportă transformări și compuneri non-blocante prin callback-uri funcționale."},
                {"term": "supplyAsync()", "def": "Lansează o sarcină pe pool-ul de thread-uri în fundal și returnează un CompletableFuture."},
                {"term": "thenApply()", "def": "Transformă valoarea calculată de viitor odată ce aceasta devine disponibilă."},
                {"term": "CompletableFuture.allOf()", "def": "Așteaptă finalizarea unui set arbitrar de viitoare asincrone rulate concurent."}
            ],
            "matchingPairs": [
                {"left": "CompletableFuture.supplyAsync(() -> fetch())", "right": "Execuție asincronă pe ForkJoinPool"},
                {"left": "future.thenApply(String::toUpperCase)", "right": "Transformare funcțională a valorii calculate"},
                {"left": "future.exceptionally(ex -> fallback)", "right": "Tratarea erorilor și furnizarea unei valori de rezervă"},
                {"left": "future.join()", "right": "Obține rezultatul aruncând excepții ne-verificate (unchecked)"}
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
            "theory": """
<p>Crearea unui fir de execuție nativ Java (<code>new Thread()</code>) este extrem de costisitoare pentru sistemul de operare (alocă 1 MB de Stack per thread și consumă syscall-uri). În producție se folosesc exclusiv <strong>Thread Pools</strong> administrate prin <code>ExecutorService</code>.</p>
<h4>1. Tipuri de Pool-uri Standard</h4>
<ul>
  <li><code>Executors.newFixedThreadPool(int n)</code>: Menține un număr fix de thread-uri reutilizabile cu o coadă de așteptare <code>LinkedBlockingQueue</code>.</li>
  <li><code>Executors.newCachedThreadPool()</code>: Creează thread-uri noi la nevoie și le distruge pe cele inactive după 60 de secunde.</li>
</ul>
<h4>2. Închiderea Curată (Graceful Shutdown)</h4>
<p>Un ExecutorService nu se oprește de la sine; el menține JVM-ul activ. Este obligatoriu să apelăm <code>executor.shutdown()</code> și <code>awaitTermination()</code> la final.</p>
""",
            "glossary": [
                {"term": "ExecutorService", "def": "Framework de înalt nivel ce decuplează definirea task-urilor (Runnable/Callable) de execuția lor fizică pe thread-uri."},
                {"term": "FixedThreadPool", "def": "Pool cu un număr constant de thread-uri active ce previne epuizarea memoriei serverului."},
                {"term": "Callable<T>", "def": "Interfață similară cu Runnable, dar care poate returna o valoare și poate arunca excepții verificate."},
                {"term": "shutdown()", "def": "Inițiază oprirea ordonată: nu mai acceptă sarcini noi, dar le finalizează pe cele deja acceptate."}
            ],
            "matchingPairs": [
                {"left": "Executors.newFixedThreadPool(8)", "right": "Creează un pool dimensionat optim pentru 8 nuclee"},
                {"left": "executor.submit(callable)", "right": "Trimite un task și returnează un Future pentru rezultat"},
                {"left": "executor.shutdown()", "right": "Inițiază închiderea politicoasă a pool-ului"},
                {"left": "LinkedBlockingQueue", "right": "Coada de task-uri ce așteaptă un fir liber"}
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
            "theory": """
<p>Până la Java 21, fiecare fir de execuție Java era mapat 1:1 pe un fir al sistemului de operare (Platform Thread), limitând scalabilitatea unui server la câteva mii de conexiuni simultane din cauza memoriei consumate.</p>
<h4>1. Ce sunt Firele Virtuale (Virtual Threads)?</h4>
<p><strong>Virtual Threads</strong> sunt fire ultra-ușoare gestionate exclusiv de mașina virtuală JVM, nu de sistemul de operare. Un fir virtual consumă doar câțiva octeți de memorie, permițând crearea a <strong>milioane de fire simultane</strong> pe un singur calculator obișnuit!</p>
<h4>2. Modelul Thread-Per-Request Revitalizat</h4>
<p>Când un fir virtual execută o operație I/O blocantă (ex: o interogare JDBC sau un apel REST), JVM-ul îl demontează automat de pe firul hardware de operare (carrier thread) și îl montează înapoi instant când datele au sosit, oferind cod sincron simplu cu scalabilitatea asincronă a Node.js/Go.</p>
""",
            "glossary": [
                {"term": "Virtual Threads (JEP 444)", "def": "Fire ușoare gestionate de JVM în spațiul utilizator, permițând milioane de sarcini concurente fără overhead."},
                {"term": "Carrier Thread", "def": "Fir nativ al sistemului de operare pe care rulează temporar un fir virtual până la întâlnirea unei operații blocante."},
                {"term": "Project Loom", "def": "Inițiativa majoră din OpenJDK ce a transformat complet modelul de concurență din Java."},
                {"term": "Thread-Per-Request", "def": "Paradigma arhitecturală simplă unde fiecare cerere HTTP primește propriul său fir de execuție dedicat."}
            ],
            "matchingPairs": [
                {"left": "Executors.newVirtualThreadPerTaskExecutor()", "right": "Creează un executor ce alocă un fir virtual nou per sarcină"},
                {"left": "Thread.ofVirtual().start(runnable)", "right": "Lansează direct un fir virtual individual"},
                {"left": "Consum memorie: câțiva octeți", "right": "Față de 1 MB per Platform Thread clasic"},
                {"left": "Demontare automată la I/O", "right": "Eliberează firul carrier nativ fără blocare fizică"}
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
            "theory": """
<p><strong>Spring Boot</strong> este cel mai utilizat framework enterprise din ecosistemul Java, oferind auto-configurare, server web integrat (Tomcat) și un container puternic de <strong>Inversion of Control (IoC)</strong>.</p>
<h4>1. Componente & Injectarea Dependențelor</h4>
<p>Adnotările cheie sunt <code>@Component</code>, <code>@Service</code> și <code>@Repository</code>. În Spring Boot modern, dependințele se injectează prin constructor (fără a fi nevoie de <code>@Autowired</code> explicit dacă există un singur constructor):</p>
<pre><code>@Service
public class OrderService {
    private final OrderRepository repository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }
}
</code></pre>
<h4>2. Controlere REST</h4>
<p>Adnotarea <code>@RestController</code> combină <code>@Controller</code> și <code>@ResponseBody</code>, serializând automat rezultatele obiectelor Java în format JSON.</p>
""",
            "glossary": [
                {"term": "@RestController", "def": "Marchează o clasă ca punct de intrare HTTP unde toate metodele returnează JSON serializat automat."},
                {"term": "IoC (Inversion of Control)", "def": "Principiu prin care crearea și legarea obiectelor este delegată containerului Spring."},
                {"term": "Constructor Injection", "def": "Injectarea dependențelor prin argumentele constructorului; asigură imutabilitate și testabilitate facilă."},
                {"term": "@GetMapping / @PostMapping", "def": "Rutează cererile HTTP GET sau POST către metodele specifice din controller."}
            ],
            "matchingPairs": [
                {"left": "@RestController", "right": "Definește un controller web pentru servicii REST JSON"},
                {"left": "@GetMapping(\"/api/users\")", "right": "Rutează cererile HTTP GET pe calea specificată"},
                {"left": "@RequestBody UserDTO dto", "right": "Deserializare automată a corpului JSON din request"},
                {"left": "@PathVariable Long id", "right": "Extrage variabila numerică din segmentul URL"}
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
            "theory": """
<p>Arhitectura de memorie a mașinii virtuale Java (JVM) este împărțită în zone cu cicluri de viață distincte:</p>
<h4>1. Structura Memoriei</h4>
<ul>
  <li><strong>Heap</strong>: Spațiul partajat unde sunt alocate toate obiectele create cu <code>new</code>. Este subdivizat în Young Generation (Eden + Survivor spaces) și Old/Tenured Generation.</li>
  <li><strong>Metaspace</strong>: Memorie nativă off-heap (introdusă în Java 8 în locul PermGen) unde sunt stocate metadatele claselor compilate și bytecode-ul.</li>
  <li><strong>Stack</strong>: Fiecare fir de execuție are propria stivă cu frame-uri de apel, variabile locale primitive și referințe către Heap.</li>
</ul>
<h4>2. Algoritmi Moderni de Garbage Collection</h4>
<p><strong>G1 GC</strong> (Garbage-First) împarte heap-ul în regiuni egale și colectează cu prioritate zonele cu cel mai mult gunoi. <strong>ZGC</strong> (Z Garbage Collector) este un colector concurent de ultimă generație care garantează pauze de latență (STW - Stop-The-World) de <em>sub 1 milisecundă</em>, chiar și pe heap-uri uriașe de până la 16 Terabytes.</p>
""",
            "glossary": [
                {"term": "Metaspace", "def": "Zonă de memorie nativă din sistem unde JVM stochează definițiile și metadatele claselor încărcate."},
                {"term": "Stop-The-World (STW)", "def": "Pauză în care toate firele de aplicație sunt oprite temporar pentru ca GC să curețe memoria în siguranță."},
                {"term": "G1 GC", "def": "Colectorul implicit din Java modern, optimizat pentru balanță între throughput și pauze predictibile."},
                {"term": "ZGC (Z Garbage Collector)", "def": "Colector ultra-scăzut în latență (pauze < 1ms) ce efectuează compactarea concurent în timp ce aplicația rulează."}
            ],
            "matchingPairs": [
                {"left": "Young Generation (Eden)", "right": "Locația unde sunt alocate inițial noile obiecte"},
                {"left": "Old Generation (Tenured)", "right": "Obiecte cu durată lungă de viață ce au supraviețuit multiple cicluri GC"},
                {"left": "ZGC (-XX:+UseZGC)", "right": "Pauze Stop-The-World de sub 1 milisecundă"},
                {"left": "OutOfMemoryError: Metaspace", "right": "Epuizarea memoriei native rezervate pentru încărcarea claselor"}
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
        }
    ]
