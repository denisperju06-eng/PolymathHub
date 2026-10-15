# -*- coding: utf-8 -*-
"""
Generator for DevOps & Sisteme Linux mega curriculum expansion (11 comprehensive lessons).
Covers Linux FHS, Shell Streams & Pipes, chmod/chown, Process Management, Systemd,
Docker Fundamentals, Volumes, Docker Compose, Multi-Stage Builds, Nginx Reverse Proxy, and CI/CD.
Each lesson features rich <pre><code>...</code></pre> code blocks, runnable examples, and precise tasks.
"""

def get_devops_lessons():
    return [
        {
            "id": "devops-new-1",
            "track": "DevOps & Sisteme Linux",
            "division": "Informatică și Programare",
            "icon": "🐧",
            "level": "1. Începător",
            "xp": 30,
            "title": "Capitolul 1: Ierarhia Sistemului de Fișiere Linux & Comenzi Bash",
            "theory": """
<p>În sistemele Unix/Linux, totul este reprezentat ca un fișier (<em>Everything is a file</em>). Structura directoarelor pornește de la rădăcina unică <code>/</code> conform standardului FHS (Filesystem Hierarchy Standard).</p>

<h4>1. Directoare Esențiale</h4>
<ul>
  <li><code>/etc</code> — Fișiere de configurare la nivel de sistem (ex: nginx.conf, sshd_config).</li>
  <li><code>/var/log</code> — Jurnale și loguri generate de servicii.</li>
  <li><code>/home/user</code> — Spațiul personal al utilizatorului obișnuit.</li>
  <li><code>/bin</code> și <code>/usr/bin</code> — Binare executabile esențiale.</li>
</ul>

<h4>2. Exemple Practice de Navigare și Inspecție</h4>
<pre><code># 1. Verifică calea absolută a directorului curent:
pwd
# /home/developer

# 2. Listare completă și detaliată (inclusiv fișiere ascunse .bashrc):
ls -la
# drwxr-xr-x  5 developer developer  4096 Oct 15 12:00 .
# -rw-r--r--  1 developer developer   220 Oct 15 10:00 .bashrc
# -rwxr-xr-x  1 developer developer  1024 Oct 15 11:30 deploy.sh

# 3. Creare structură de directoare în cascadă:
mkdir -p /var/log/polymath/archives
</code></pre>
""",
            "glossary": [
                {"term": "FHS (Filesystem Standard)", "def": "Standard ce definește structura și scopul fiecărui director într-un sistem Linux."},
                {"term": "ls -la", "def": "Comandă ce afișează toate fișierele (a = all) în format lung cu permisiuni (l = long)."},
                {"term": "/etc", "def": "Directorul rezervat configurărilor statice ale întregului sistem de operare."},
                {"term": "Hidden Files (.*)", "def": "Fișiere al căror nume începe cu punct, ascunse în mod implicit la listare simplă."}
            ],
            "matchingPairs": [
                {"left": "ls -la", "right": "Listare completă și detaliată a tuturor fișierelor"},
                {"left": "cd ~", "right": "Navigare rapidă către directorul home al utilizatorului"},
                {"left": "pwd", "right": "Afișează calea absolută a directorului curent de lucru"},
                {"left": "mkdir -p a/b/c", "right": "Creează recursiv întreaga structură de directoare"}
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
            "theory": """
<p>În Linux, fiecare proces deschide implicit 3 descriptori standard de fișiere: <code>0 (stdin)</code>, <code>1 (stdout)</code> și <code>2 (stderr)</code>.</p>

<h4>1. Redirecționări</h4>
<p>Operatorul <code>></code> suprascrie fișierul destinație, iar <code>>></code> adaugă la final (append). Sintaxa <code>2>&1</code> redirecționează erorile (stderr) pe același canal cu stdout.</p>

<h4>2. Exemple Practice de Stream-uri și Pipes</h4>
<pre><code># 1. Redirecționare simplă și append:
echo "Deployment started" > deploy.log
echo "Timestamp: $(date)" >> deploy.log

# 2. Filtrare în lanț cu Pipes (|):
cat app.log | grep ERROR | wc -l
# Numără câte linii de eroare există în app.log

# 3. Suprimarea erorilor (redirecționare către /dev/null):
find / -name "*.conf" 2>/dev/null
</code></pre>
""",
            "glossary": [
                {"term": "stdout (Descriptor 1)", "def": "Canalul de ieșire standard pentru mesajele obișnuite generate de un proces."},
                {"term": "stderr (Descriptor 2)", "def": "Canalul dedicat mesajelor de diagnostic și eroare, separat de stdout."},
                {"term": "Pipe (|)", "def": "Mecanism IPC ce transferă direct ieșirea unei comenzi ca intrare pentru următoarea."},
                {"term": "Redirecționare (2>&1)", "def": "Combinarea fluxului de erori stderr în fluxul standard de ieșire stdout."}
            ],
            "matchingPairs": [
                {"left": "cmd > file.txt", "right": "Suprascrie fișierul cu ieșirea standard a comenzii"},
                {"left": "cmd >> file.txt", "right": "Adaugă ieșirea la sfârșitul fișierului existent"},
                {"left": "cmd 2> error.log", "right": "Izolează doar mesajele de eroare (stderr) într-un fișier"},
                {"left": "cmd1 | cmd2", "right": "Trimite stdout-ul primei comenzi în stdin-ul celei de-a doua"}
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
            "theory": """
<p>Securitatea fișierelor în Linux este guvernată de o matrice de 3 categorii de utilizatori: <strong>User (u)</strong>, <strong>Group (g)</strong> și <strong>Others (o)</strong>, fiecare având 3 drepturi posibile:</p>
<ul>
  <li><code>r (read)</code> = 4</li>
  <li><code>w (write)</code> = 2</li>
  <li><code>x (execute)</code> = 1</li>
</ul>

<h4>1. Calculul Octal</h4>
<p>Suma valorilor binare dă cifra octală. De exemplu, <code>chmod 755 script.sh</code> conferă: User = 4+2+1 = <strong>7</strong> (rwx), Group = 4+0+1 = <strong>5</strong> (r-x), Others = 4+0+1 = <strong>5</strong> (r-x).</p>

<h4>2. Exemple Practice de Permisiuni</h4>
<pre><code># Fă un script executabil pentru toți, dar modificabil doar de owner:
chmod 755 deploy.sh
# -rwxr-xr-x 1 developer developer 1024 deploy.sh

# Securizează cheia SSH privată (doar owner-ul o poate citi și scrie):
chmod 600 ~/.ssh/id_rsa
# -rw------- 1 developer developer 2602 id_rsa

# Schimbă recursiv utilizatorul și grupul proprietar:
sudo chown -R www-data:www-data /var/www/html
</code></pre>
""",
            "glossary": [
                {"term": "chmod", "def": "Comandă pentru modificarea biților de permisiune (Change Mode) ai unui fișier."},
                {"term": "chown", "def": "Comandă administrativă pentru modificarea utilizatorului și grupului proprietar (Change Owner)."},
                {"term": "chmod 755", "def": "Configurație canonică pentru executabile: proprietarul are drepturi totale, restul pot citi și rula."},
                {"term": "chmod 600", "def": "Permisiune restrictivă recomandată pentru chei SSH private (doar proprietarul citește și scrie)."}
            ],
            "matchingPairs": [
                {"left": "chmod 755 deploy.sh", "right": "rwxr-xr-x: drepturi depline pentru owner, citire/execuție restul"},
                {"left": "chmod 600 id_rsa", "right": "rw-------: doar proprietarul are acces la cheia SSH privată"},
                {"left": "chown user:group file", "right": "Schimbă simultan utilizatorul și grupul fișierului"},
                {"left": "r = 4, w = 2, x = 1", "right": "Valorile numerice octale ale drepturilor Linux"}
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
            "theory": """
<p>Fiecare proces din Linux primește un identificator unic numeric (<strong>PID</strong>). Comanda <code>ps aux</code> sau <code>htop</code> permite monitorizarea consumului de memorie și procesor.</p>

<h4>1. Semnale POSIX Fundamentale</h4>
<ul>
  <li><code>SIGTERM (15)</code>: Semnalul politicos de oprire (Graceful Shutdown). Permite salvarea stării și eliberarea conexiunilor.</li>
  <li><code>SIGKILL (9)</code>: Oprire forțată și imediată executată direct de nucleul Linux (Kernel); nu poate fi ignorată.</li>
  <li><code>SIGHUP (1)</code>: Forțează reîncărcarea fișierului de configurare fără oprirea procesului.</li>
</ul>

<h4>2. Exemple Practice de Inspecție și Semnalizare</h4>
<pre><code># 1. Localizează PID-ul aplicației:
ps aux | grep node
# developer 4520  0.5  2.1 123456 45678 ? S 12:00 node server.js

# 2. Trimite semnal politicos de oprire (SIGTERM 15):
kill -15 4520

# 3. Forțează oprirea doar dacă procesul este complet blocat:
kill -9 4520

# 4. Reîncarcă configurația serverului fără downtime:
kill -HUP $(pidof nginx)
</code></pre>
""",
            "glossary": [
                {"term": "PID (Process ID)", "def": "Număr întreg pozitiv unic atribuit fiecărui proces activ de către nucleul Linux."},
                {"term": "SIGTERM (Semnal 15)", "def": "Cerere standard de terminare politicoasă ce permite curățarea resurselor (Graceful Shutdown)."},
                {"term": "SIGKILL (Semnal 9)", "def": "Distrugere imediată a procesului de către kernel, fără posibilitate de interceptare."},
                {"term": "htop / top", "def": "Aplicații terminal interactive pentru monitorizarea în timp real a resurselor hardware."}
            ],
            "matchingPairs": [
                {"left": "kill -15 1234", "right": "SIGTERM: cerere de oprire politicoasă"},
                {"left": "kill -9 1234", "right": "SIGKILL: forțare brutală a terminării procesului de către kernel"},
                {"left": "kill -HUP $(pidof nginx)", "right": "Reîncarcă configurația fără downtime"},
                {"left": "ps aux | grep node", "right": "Localizează PID-ul procesului Node.js"}
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
            "theory": """
<p><strong>Systemd</strong> este sistemul de inițializare și managerul de servicii standard în distribuțiile Linux moderne (Ubuntu, Debian, RedHat), având PID-ul 1.</p>

<h4>1. Comenzi Esențiale 'systemctl'</h4>
<ul>
  <li><code>sudo systemctl start nginx</code> — Pornește serviciul.</li>
  <li><code>sudo systemctl enable nginx</code> — Activează pornirea automată la boot-ul serverului.</li>
  <li><code>sudo systemctl status nginx</code> — Afișează starea curentă și logurile recente.</li>
  <li><code>sudo systemctl reload nginx</code> — Reîncarcă configurația fără restart.</li>
</ul>

<h4>2. Exemple Practice cu Systemd și Journalctl</h4>
<pre><code># 1. Verifică starea detaliată a serviciului Nginx:
sudo systemctl status nginx

# 2. Pornește și activează un serviciu dintr-un singur pas:
sudo systemctl enable --now docker

# 3. Urmărește logurile generate în timp real (-f = follow):
sudo journalctl -u nginx -f

# 4. Afișează ultimele 50 de linii de erori:
sudo journalctl -u api-backend -p err -n 50
</code></pre>
""",
            "glossary": [
                {"term": "systemd", "def": "Sistemul modern de inițializare PID 1 responsabil cu pornirea și supervizarea tuturor serviciilor Linux."},
                {"term": "systemctl enable", "def": "Creează link-uri simbolice pentru a asigura pornirea automată a serviciului la boot-ul serverului."},
                {"term": "journalctl -f", "def": "Afișează logurile în flux continuu, actualizându-se automat la fiecare linie nouă generată."},
                {"term": "Unit File (.service)", "def": "Fișier declarativ de configurare ce descrie comanda de pornire, utilizatorul și regulile de repornire ale serviciului."}
            ],
            "matchingPairs": [
                {"left": "systemctl status docker", "right": "Verifică dacă serviciul Docker este activ și sănătos"},
                {"left": "systemctl enable --now nginx", "right": "Pornește serviciul acum și îl activează la boot"},
                {"left": "journalctl -u app -n 50", "right": "Afișează ultimele 50 de linii de jurnal ale serviciului"},
                {"left": "systemctl restart my-service", "right": "Oprește și repornește complet procesul"}
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
            "theory": """
<p><strong>Docker</strong> împachetează aplicațiile și dependențele lor într-o unitate izolată numită <em>container</em>, partajând nucleul sistemului gazdă fără overhead-ul unei mașini virtuale.</p>

<h4>1. Exemplu de Dockerfile Optimizat</h4>
<pre><code># Imagine minimalistă Node.js:
FROM node:20-alpine

# Setează directorul de lucru:
WORKDIR /app

# Copiază fișierele de dependențe pentru layer caching:
COPY package*.json ./
RUN npm install

# Copiază codul sursă al aplicației:
COPY . .

EXPOSE 8080
CMD ["node", "server.js"]
</code></pre>

<h4>2. Comenzi de Rulare și Monitorizare</h4>
<pre><code># Construiește imaginea:
docker build -t my-web:latest .

# Rulează containerul în fundal (-d) cu mapare de port (80 host -> 80 container):
docker run -d -p 80:80 my-web:latest

# Verifică containerele active:
docker ps
</code></pre>
""",
            "glossary": [
                {"term": "Docker Image", "def": "Șablon imutabil compus din layere read-only din care se instanțiază containerele."},
                {"term": "Docker Container", "def": "Instanță activă izolată a unei imagini rulată cu un layer read-write superficial în memorie."},
                {"term": "Layer Caching", "def": "Optimizare Docker ce reutilizează layerele nemodificate la build-uri succesive pentru viteză."},
                {"term": "CMD vs RUN", "def": "RUN rulează la construirea imaginii (build time); CMD rulează când containerul pornește (runtime)."}
            ],
            "matchingPairs": [
                {"left": "docker build -t app:v1 .", "right": "Construiește o imagine etichetată din Dockerfile-ul curent"},
                {"left": "docker run -d -p 8080:80 app:v1", "right": "Rulează containerul în fundal mapând portul 8080 la 80"},
                {"left": "docker ps", "right": "Listează toate containerele active din sistem"},
                {"left": "docker exec -it my-app sh", "right": "Deschide un terminal interactiv în interiorul containerului"}
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
            "theory": """
<p>Sistemul de fișiere al unui container Docker este efemer: când containerul este șters, toate fișierele create în interior se pierd irevocabil. Persistența necesită mecanisme dedicate.</p>

<h4>1. Named Volumes vs Bind Mounts</h4>
<p>Volumele numite sunt complet gestionate de Docker (în <code>/var/lib/docker/volumes/</code>) și sunt recomandate pentru baze de date. Bind mounts leagă direct un director de pe host (ex: <code>-v $(pwd):/app</code>) pentru hot-reload în development.</p>

<h4>2. Exemple Practice cu Docker Volumes</h4>
<pre><code># 1. Creează un volum dedicat persistent:
docker volume create app_storage

# 2. Rulează PostgreSQL atașat la volumul creat:
docker run -d \\
  --name postgres-db \\
  -e POSTGRES_PASSWORD=secret \\
  -v app_storage:/var/lib/postgresql/data \\
  postgres:16-alpine

# 3. Listează volumele active:
docker volume ls
</code></pre>
""",
            "glossary": [
                {"term": "Docker Volume", "def": "Mecanism dedicat administrat de Docker pentru stocarea persistentă a datelor dincolo de viața containerului."},
                {"term": "Bind Mount", "def": "Maparea directă a unui fișier sau director de pe host în interiorul containerului."},
                {"term": "Ephemeral Storage", "def": "Natura temporară a layerului de scriere al containerului care se distruge la comanda docker rm."},
                {"term": "docker volume create", "def": "Comandă pentru crearea manuală a unui volum numit persistent."}
            ],
            "matchingPairs": [
                {"left": "-v db_data:/var/lib/mysql", "right": "Named volume persistent administrat direct de Docker"},
                {"left": "-v $(pwd)/src:/app/src", "right": "Bind mount local pentru hot-reloading la dezvoltare"},
                {"left": "docker volume ls", "right": "Listează toate volumele persistente de pe mașină"},
                {"left": "docker volume prune", "right": "Șterge toate volumele orfane neatașate vreunui container"}
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
            "theory": """
<p><strong>Docker Compose</strong> este utilitarul standard pentru definirea și rularea aplicațiilor multi-container (ex: backend Node.js + bază de date PostgreSQL + Redis cache) printr-un singur fișier declarativ YAML.</p>

<h4>1. Exemplu Complet de Fișier 'docker-compose.yml'</h4>
<pre><code>services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/app
  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=pass

volumes:
  pgdata:
</code></pre>

<h4>2. Comandă de Lansare</h4>
<pre><code># Pornește întreaga stivă în fundal (-d):
docker compose up -d
</code></pre>
""",
            "glossary": [
                {"term": "docker-compose.yml", "def": "Fișier de configurare declarativ YAML ce descrie arhitectura multi-container a aplicației."},
                {"term": "depends_on", "def": "Directivă ce controlează ordinea de pornire a serviciilor (ex: pornește db înainte de web)."},
                {"term": "Internal Service Discovery", "def": "Rezolvarea automată a numelui serviciului (ex: 'db') la adresa IP internă a containerului."},
                {"term": "docker compose up -d", "def": "Construiește, creează și lansează toate serviciile în fundal cu o singură comandă."}
            ],
            "matchingPairs": [
                {"left": "docker compose up -d", "right": "Pornește întreaga stivă de servicii în fundal"},
                {"left": "docker compose down -v", "right": "Oprește containerele și șterge și volumele asociate"},
                {"left": "docker compose logs -f web", "right": "Urmărește logurile specifice serviciului web"},
                {"left": "depends_on: [\"redis\"]", "right": "Garantează pornirea Redis-ului înainte de backend"}
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
            "theory": """
<p>Imaginile de producție nu trebuie să conțină compilatoare, SDK-uri greoaie sau fișiere sursă necompilate. <strong>Multi-Stage Builds</strong> permite utilizarea mai multor instrucțiuni <code>FROM</code> într-un singur Dockerfile.</p>

<h4>1. Exemplu Complet de Multi-Stage Dockerfile</h4>
<pre><code># Stagiul 1: Compilare (Build Stage)
FROM golang:1.22 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o myapp .

# Stagiul 2: Imaginea finală curată de producție (sub 20 MB)
FROM alpine:3.19
WORKDIR /app
COPY --from=builder /app/myapp /app/myapp
EXPOSE 8080
CMD ["/app/myapp"]
</code></pre>

<h4>2. Copierea Artefactelor Între Stagii</h4>
<p>Directiva <code>COPY --from=build /app/dist /public</code> extrage doar fișierele compilate, lăsând dependențele grele în primul stadiu.</p>
""",
            "glossary": [
                {"term": "Multi-Stage Build", "def": "Tehnică Docker ce folosește stadii intermediare pentru compilare, păstrând în imaginea finală doar binarul minim."},
                {"term": "COPY --from=builder", "def": "Directivă ce extrage exclusiv artefactele compilate dintr-un stadiu anterior."},
                {"term": "Alpine Linux", "def": "Distribuție Linux ultra-ușoară (aprox. 5 MB) cu suprafață minimă de atac."},
                {"term": "scratch", "def": "Cea mai mică imagine Docker posibilă (0 octeți), ce rulează exclusiv binare complet statice."}
            ],
            "matchingPairs": [
                {"left": "AS builder", "right": "Denumește stadiul intermediar de compilare"},
                {"left": "COPY --from=builder /app/bin /bin", "right": "Copiază doar rezultatul compilat în imaginea curată"},
                {"left": "Imagine redusă de la 1GB la 20MB", "right": "Efectul direct al eliminării SDK-ului din producție"},
                {"left": "Suprafață minimă de atac", "right": "Avantaj major de securitate al imaginilor alpine"}
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
            "theory": """
<p><strong>Nginx</strong> este un server web de mare viteză bazat pe o arhitectură asincronă event-driven, utilizat frecvent ca <strong>Reverse Proxy</strong>, Load Balancer și punct de terminare SSL/TLS în fața serverelor de aplicații.</p>

<h4>1. Exemplu Complet de Configurare Reverse Proxy</h4>
<pre><code>server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
</code></pre>

<h4>2. Testarea Sintaxei Fără Întreruperea Serviciului</h4>
<pre><code># Testează sintaxa fișierelor de configurare:
sudo nginx -t

# Reîncarcă configurația cu zero downtime:
sudo nginx -s reload
</code></pre>
""",
            "glossary": [
                {"term": "Reverse Proxy", "def": "Server intermediar ce recepționează cererile clienților și le transmite către backend-urile private."},
                {"term": "proxy_pass", "def": "Directiva centrală Nginx ce specifică adresa și portul serverului destinație."},
                {"term": "X-Forwarded-For", "def": "Header HTTP standard ce păstrează lanțul de adrese IP reale ale clienților prin proxy-uri."},
                {"term": "SSL Termination", "def": "Decriptarea traficului HTTPS de către Nginx, permițând comunicarea HTTP simplă internă cu backend-ul."}
            ],
            "matchingPairs": [
                {"left": "proxy_pass http://localhost:5000", "right": "Redirecționează traficul către serverul intern"},
                {"left": "proxy_set_header X-Real-IP $remote_addr", "right": "Păstrează IP-ul real al vizitatorului extern"},
                {"left": "nginx -t", "right": "Testează sintaxa fișierelor de configurare fără repornire"},
                {"left": "nginx -s reload", "right": "Reîncarcă configurația cu zero downtime pentru clienți"}
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
            "theory": """
<p><strong>CI/CD</strong> (Continuous Integration & Continuous Deployment) automatizează testarea, compilarea și livrarea sigură a codului la fiecare <code>git push</code> sau <code>Pull Request</code>.</p>

<h4>1. Structura unui Pipeline Complet GitHub Actions</h4>
<pre><code>name: CI/CD Pipeline
on:
  push:
    branches: [ "main" ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Clean Dependencies
        run: npm ci

      - name: Run Tests
        run: npm test
</code></pre>
""",
            "glossary": [
                {"term": "GitHub Actions", "def": "Platformă CI/CD integrată nativ în GitHub pentru automatizarea fluxurilor de lucru software."},
                {"term": "Workflow Trigger (on:)", "def": "Evenimentul git care declanșează execuția pipeline-ului (push, pull_request, release)."},
                {"term": "Runner (runs-on:)", "def": "Mașina virtuală temporară din cloud ce execută comenzile definite în job."},
                {"term": "Repository Secrets", "def": "Variabile de mediu criptate asimetric folosite în siguranță de pipeline fără expunere."}
            ],
            "matchingPairs": [
                {"left": "on: push: branches: [main]", "right": "Declanșează pipeline-ul la fiecare push pe ramura main"},
                {"left": "actions/checkout@v4", "right": "Descarcă codul sursă al repository-ului pe mașina runner"},
                {"left": "${{ secrets.DEPLOY_TOKEN }}", "right": "Injectare securizată a parolelor criptate"},
                {"left": "npm ci", "right": "Instalare curată și deterministă a dependențelor conform lockfile-ului"}
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
        }
    ]
