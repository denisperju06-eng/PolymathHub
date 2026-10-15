# -*- coding: utf-8 -*-
systems_lessons = [
    {
        "id": "cpp-sys-posix-1",
        "track": "C & C++",
        "division": "Informatică și Programare",
        "level": "5. Arhitect / Exemplar",
        "xp": 30,
        "title": "Apeluri de Sistem POSIX: Descriptori de Fișiere (open, read, write, close)",
        "theory": "Sub platformele UNIX/Linux (inclusiv macOS), interacțiunea de nivel scăzut cu fișierele și dispozitivele ocolește stream-urile C++ de tip fstream și folosește direct apelurile de sistem POSIX. În modelul UNIX, 'totul este un fișier', iar accesul se realizează prin 'Descriptori de Fișiere' (File Descriptors - FD), reprezentate ca simple numere întregi pozitive.\n\nDescriptorii standard pre-deschiși sunt: 0 pentru STDIN_FILENO (intrare), 1 pentru STDOUT_FILENO (ieșire) și 2 pentru STDERR_FILENO (erori). Apelul 'open(path, flags, mode)' solicită kernel-ului alocarea unui nou FD în tabela de fișiere a procesului (folosind flag-uri bitwise precum O_RDONLY, O_WRONLY, O_CREAT, O_TRUNC).\n\nCitirea și scrierea se realizează prin 'read(fd, buffer, count)' și 'write(fd, buffer, count)', care transferă blocuri brute de octeți fără bufferizare în spațiul utilizator (unbuffered I/O). La final, apelul 'close(fd)' eliberează descriptorul înapoi către kernel.",
        "glossary": [
            {"term": "File Descriptor", "def": "Index întreg pozitiv în tabela kernel-ului ce identifică un canal deschis de I/O."},
            {"term": "open()", "def": "Apel de sistem POSIX ce deschide sau creează un fișier returnând un descriptor."},
            {"term": "O_CREAT | O_WRONLY", "def": "Măști de biți ce instruiesc kernel-ul să deschidă fișierul pentru scriere și să îl creeze dacă lipsește."},
            {"term": "Unbuffered I/O", "def": "Transfer direct între memoria procesului și cache-ul kernel-ului fără buffer în libc."}
        ],
        "example": "#include <fcntl.h>\n#include <unistd.h>\n#include <iostream>\n\nint fd = open(\"date.bin\", O_WRONLY | O_CREAT | O_TRUNC, 0644);\nif (fd == -1) {\n    std::cerr << \"Eroare la deschidere!\\n\";\n} else {\n    const char text[] = \"Kernel I/O\";\n    write(fd, text, sizeof(text) - 1);\n    close(fd); // Inchidere obligatorie a descriptorului!\n}",
        "prompt": "Scrie apelul de sistem POSIX pentru a închide descriptorul de fișier reținut în variabila fd.",
        "caseSensitive": True,
        "acceptedAnswers": ["close(fd);", "close(fd)"],
        "regexPattern": "^close\\s*\\(\\s*fd\\s*\\)\\s*;?$",
        "officialSolution": "close(fd);",
        "explanation": "Apelul close(fd); notifică kernel-ul să șteargă indexul fd din tabela procesului și să elibereze resursele.",
        "hint": "close(fd);",
        "matchingPairs": [
            {"left": "open()", "right": "Deschide resursa și returnează un descriptor întreg (FD)"},
            {"left": "read()", "right": "Citește octeți bruți direct în bufferul furnizat"},
            {"left": "write()", "right": "Scrie octeți din buffer către descriptorul de fișier"},
            {"left": "close()", "right": "Eliberează descriptorul înapoi către sistemul de operare"}
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
            {"term": "mmap()", "def": "Apel de sistem ce proiectează un fișier direct în adresele virtuale ale procesului."},
            {"term": "munmap()", "def": "Eliberează maparea de memorie virtuală alocată anterior de mmap."},
            {"term": "Page Fault", "def": "Întrerupere hardware generată de MMU când o pagină virtuală este accesată prima dată."},
            {"term": "Zero-Copy I/O", "def": "Tehnică ce elimină copierea intermediară de date între kernel și user-space."}
        ],
        "example": "#include <sys/mman.h>\n#include <fcntl.h>\n#include <unistd.h>\n\nint fd = open(\"baza_date.dat\", O_RDONLY);\nsize_t dim = 1024 * 1024; // 1 MB\n\n// Mapeaza 1 MB direct in memoria procesului in mod citire:\nvoid* addr = mmap(nullptr, dim, PROT_READ, MAP_SHARED, fd, 0);\nif (addr != MAP_FAILED) {\n    char* date = static_cast<char*>(addr);\n    char primulOctet = date[0]; // Acces direct ca la un tablou in RAM!\n    munmap(addr, dim); // Demapare la final\n}\nclose(fd);",
        "prompt": "Scrie valoarea santinelă specială returnată de apelul de sistem mmap() în caz de eroare la mapare (definită în sys/mman.h).",
        "caseSensitive": True,
        "acceptedAnswers": ["MAP_FAILED"],
        "regexPattern": "^MAP_FAILED;?$",
        "officialSolution": "MAP_FAILED",
        "explanation": "mmap returnează constanta MAP_FAILED ((void*)-1) în caz de eșec, nu nullptr.",
        "hint": "MAP_FAILED",
        "matchingPairs": [
            {"left": "mmap()", "right": "Proiectează fișierul direct în memoria virtuală"},
            {"left": "munmap()", "right": "Șterge proiecția virtuală eliberând spațiul de adrese"},
            {"left": "PROT_READ", "right": "Permisiune de citire a paginilor mapate"},
            {"left": "MAP_SHARED", "right": "Modificările sunt scrise înapoi în fișierul fizic"}
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
            {"term": "Signal Handler", "def": "Funcție apelată asincron de kernel când procesul primește un semnal specific."},
            {"term": "sigaction", "def": "Interfață POSIX robustă și reentrantă pentru configurarea handlerelor de semnal."},
            {"term": "Async-Signal-Safe", "def": "Funcții care pot fi apelate în siguranță dintr-un handler fără a produce deadlock."},
            {"term": "sig_atomic_t", "def": "Tip întreg a cărui citire și scriere este garantată a fi atomică chiar dacă e întreruptă de semnal."}
        ],
        "example": "#include <csignal>\n#include <atomic>\n#include <iostream>\n#include <unistd.h>\n\nvolatile std::sig_atomic_t g_ruleaza = 1;\n\nvoid handlerOprire(int semnal) {\n    g_ruleaza = 0; // Async-signal-safe!\n}\n\n// In main se configureaza cu sigaction pentru SIGINT (Ctrl+C)",
        "prompt": "Declară o variabilă globală numită g_stop de tip volatile std::sig_atomic_t inițializată cu valoarea 0.",
        "caseSensitive": True,
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
            {"left": "SIGINT", "right": "Semnal de întrerupere trimis de utilizator (Ctrl+C)"},
            {"left": "SIGTERM", "right": "Semnal standard de solicitare a opririi curate (Graceful)"},
            {"left": "sigaction", "right": "Structură și funcție POSIX pentru rutine de semnal sigure"},
            {"left": "sig_atomic_t", "right": "Tip întreg cu scriere atomică neîntreruptibilă de semnale"}
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
            {"term": "fork()", "def": "Apel de sistem ce clonează procesul apelant prin Copy-On-Write (COW)."},
            {"term": "PID", "def": "Process IDentifier: număr întreg unic atribuit fiecărui proces de către kernel."},
            {"term": "Proces Zombie", "def": "Proces terminat al cărui cod de ieșire nu a fost încă citit de părinte cu waitpid."},
            {"term": "execve()", "def": "Înlocuiește complet memoria procesului curent cu un nou program executabil."}
        ],
        "example": "#include <unistd.h>\n#include <sys/wait.h>\n#include <iostream>\n\npid_t pid = fork();\nif (pid == 0) {\n    // Suntem in procesul COPIL:\n    std::cout << \"Sunt copilul cu PID: \" << getpid() << \"\\n\";\n    _exit(0); // Terminare imediata copil\n} else if (pid > 0) {\n    // Suntem in procesul PARINTE:\n    int status;\n    waitpid(pid, &status, 0); // Curata procesul copil, prevenind starea Zombie!\n    std::cout << \"Copilul a fost curatat din sistem.\\n\";\n}",
        "prompt": "Scrie apelul de sistem POSIX fără parametri care clonează procesul curent creând un proces copil.",
        "caseSensitive": True,
        "acceptedAnswers": ["fork();", "fork()"],
        "regexPattern": "^fork\\s*\\(\\s*\\)\\s*;?$",
        "officialSolution": "fork();",
        "explanation": "Apelul fork() duplică spațiul procesului curent, returnând 0 în copil și PID-ul copilului în părinte.",
        "hint": "fork();",
        "matchingPairs": [
            {"left": "fork()", "right": "Clonează procesul curent (returnează 0 în copil)"},
            {"left": "execve()", "right": "Înlocuiește imaginea de memorie cu un nou binar"},
            {"left": "waitpid()", "right": "Așteaptă finalizarea copilului și elimină starea Zombie"},
            {"left": "getpid()", "right": "Returnează PID-ul unic al procesului apelant"}
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
            {"term": "pipe(pipefd)", "def": "Creează un canal unidirecțional de comunicare între procese în memoria kernel-ului."},
            {"term": "pipefd[0]", "def": "Capătul de intrare (Read End) utilizat pentru citirea datelor din canal."},
            {"term": "pipefd[1]", "def": "Capătul de ieșire (Write End) utilizat pentru injectarea datelor în canal."},
            {"term": "mkfifo()", "def": "Creează un canal numit (FIFO) reprezentat ca un fișier special în sistemul de fișiere."}
        ],
        "example": "#include <unistd.h>\n#include <iostream>\n\nint fds[2];\nif (pipe(fds) == 0) {\n    // fds[0] = citire, fds[1] = scriere\n    const char msg[] = \"Ping IPC\";\n    write(fds[1], msg, sizeof(msg)); // Trimite prin capatul de scriere\n\n    char buffer[32]{};\n    read(fds[0], buffer, sizeof(buffer)); // Citeste prin capatul de citire\n    std::cout << \"Receptionat: \" << buffer << \"\\n\";\n\n    close(fds[0]);\n    close(fds[1]);\n}",
        "prompt": "Declară un tablou de 2 întregi numit fds și apelează funcția pipe(fds) pentru a crea un canal de comunicare.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "int fds[2]; pipe(fds);",
            "int fds[2]; pipe(fds)"
        ],
        "regexPattern": "^int\\s+fds\\[\\s*2\\s*\\]\\s*;\\s*pipe\\s*\\(\\s*fds\\s*\\)\\s*;?$",
        "officialSolution": "int fds[2]; pipe(fds);",
        "explanation": "Funcția pipe populează tabloul de 2 elemente: fds[0] pentru citire și fds[1] pentru scriere.",
        "hint": "int fds[2]; pipe(fds);",
        "matchingPairs": [
            {"left": "pipefd[0]", "right": "Capătul de citire (Read End) al canalului"},
            {"left": "pipefd[1]", "right": "Capătul de scriere (Write End) al canalului"},
            {"left": "pipe()", "right": "Creează un canal anonim în memoria kernel-ului"},
            {"left": "FIFO", "right": "Datele ies exact în ordinea în care au fost trimise"}
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
            {"term": "SOCK_STREAM", "def": "Specifică un socket bazat pe conexiune fiabilă bidirecțională TCP."},
            {"term": "bind()", "def": "Asociază descriptorul de socket cu un port și o interfață IP specifică."},
            {"term": "listen()", "def": "Setează socket-ul în mod de ascultare a cererilor de conexiune sosite din rețea."},
            {"term": "accept()", "def": "Extrage prima conexiune din coadă și returnează un nou descriptor dedicat clientului."}
        ],
        "example": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <unistd.h>\n\n// Creare socket TCP IPv4:\nint serverFd = socket(AF_INET, SOCK_STREAM, 0);\n\nsockaddr_in adresa{};\nadresa.sin_family = AF_INET;\nadresa.sin_addr.s_addr = INADDR_ANY; // Asculta pe toate placile de retea\nadresa.sin_port = htons(8080);       // Host to Network Short\n\nbind(serverFd, (struct sockaddr*)&adresa, sizeof(adresa));\nlisten(serverFd, 10); // Coada de asteptare de 10 conexiuni",
        "prompt": "Scrie comanda C++ pentru a crea un socket TCP IPv4 folosind funcția socket() cu parametrii AF_INET, SOCK_STREAM și protocolul 0.",
        "caseSensitive": True,
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
            {"left": "socket()", "right": "Creează punctul de comunicare în kernel"},
            {"left": "bind()", "right": "Asociază socket-ul cu portul și IP-ul local"},
            {"left": "listen()", "right": "Pregătește socket-ul pentru conexiuni TCP de intrare"},
            {"left": "accept()", "right": "Acceptă o conexiune și returnează un descriptor pentru client"}
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
            {"term": "epoll", "def": "Mecanism de multiplexare I/O scalabil din kernel-ul Linux pentru zeci de mii de conexiuni simultane."},
            {"term": "O_NONBLOCK", "def": "Flag ce face ca apelurile read/write să returneze imediat fără a bloca firul de execuție."},
            {"term": "C10K Problem", "def": "Provocarea de inginerie software de a deservi peste 10.000 de clienți concurenți pe un singur server."},
            {"term": "Event Loop", "def": "Bucla principală ce procesează evenimentele returnate de epoll_wait."}
        ],
        "example": "#include <sys/epoll.h>\n#include <unistd.h>\n\nint epollFd = epoll_create1(0); // Instanta epoll in kernel\n\nepoll_event ev{};\nev.events = EPOLLIN; // Notificare cand sosesc date de citit\nev.data.fd = 0;      // Monitorizam STDIN\n\nepoll_ctl(epollFd, EPOLL_CTL_ADD, 0, &ev);\n\nepoll_event evenimenteActive[10];\n// Asteapta evenimente cu timeout de 5000ms:\nint count = epoll_wait(epollFd, evenimenteActive, 10, 5000);",
        "prompt": "Scrie funcția apelată pentru a crea o instanță de monitorizare epoll în kernel-ul Linux (folosind argumentul 0): epoll_create1(0);.",
        "caseSensitive": True,
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
            {"left": "epoll_create1", "right": "Creează contextul de monitorizare în kernel"},
            {"left": "epoll_ctl", "right": "Adaugă, modifică sau șterge descriptori din monitorizare"},
            {"left": "epoll_wait", "right": "Așteaptă eficient evenimente gata de procesare"},
            {"left": "O_NONBLOCK", "right": "Previne blocarea thread-ului la citire când nu sunt date"}
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
            {"term": "std::optional<T>", "def": "Container C++17 ce poate conține fie o valoare de tip T, fie starea std::nullopt."},
            {"term": "std::nullopt", "def": "Constanta standard ce reprezintă absența oricărei valori într-un std::optional."},
            {"term": "value_or()", "def": "Returnează valoarea conținută sau o valoare de rezervă dacă optionalul este gol."},
            {"term": "Null Dereference", "def": "Eroare fatală cauzată de accesarea unei zone de memorie prin pointer nul."}
        ],
        "example": "#include <optional>\n#include <string>\n#include <iostream>\n\nstd::optional<std::string> cautaEmail(int id) {\n    if (id == 42) return \"contact@polymath.com\";\n    return std::nullopt; // Fara valoare gasita!\n}\n\nauto email = cautaEmail(10);\nstd::cout << email.value_or(\"fara_email@domeniu.com\"); // Afiseaza fallback-ul in siguranta!",
        "prompt": "Scrie constanta standard C++17 returnată dintr-o funcție std::optional pentru a semnala absența oricărei valori: return std::nullopt;.",
        "caseSensitive": True,
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
            {"left": "std::optional<T>", "right": "Conține fie o valoare validă T, fie este gol"},
            {"left": "std::nullopt", "right": "Reprezintă absența valorii fără a folosi pointeri nuli"},
            {"left": "opt.has_value()", "right": "Returnează true dacă există o valoare prezentă"},
            {"left": "opt.value_or(def)", "right": "Extrage valoarea sau folosește valoarea implicită def"}
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
            {"term": "std::variant", "def": "Uniune tipizată sigură C++17 ce memorează tipul activ curent."},
            {"term": "std::visit", "def": "Funcție ce aplică un vizitator polimorfic peste valoarea activă a unui variant."},
            {"term": "std::holds_alternative", "def": "Funcție șablon ce testează dacă variantul conține un anumit tip T."},
            {"term": "Tagged Union", "def": "Structură ce combină datele cu un indicator de tip (discriminator)."}
        ],
        "example": "#include <variant>\n#include <string>\n#include <iostream>\n\nstd::variant<int, double, std::string> date;\ndate = 42;            // Detine int\ndate = \"Text C++17\";  // Acum detine std::string!\n\nstd::visit([](const auto& val) {\n    std::cout << \"Valoare activa: \" << val << \"\\n\";\n}, date);",
        "prompt": "Declară un container std::variant numit rezultat care poate stoca fie un întreg de tip int, fie un șir de tip std::string.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "std::variant<int, std::string> rezultat;",
            "std::variant<int, std::string> rezultat{};"
        ],
        "regexPattern": "^std::variant<int,\\s*std::string>\\s+rezultat\\s*(\\{\\s*\\})?\\s*;$",
        "officialSolution": "std::variant<int, std::string> rezultat;",
        "explanation": "Sintaxa std::variant<Tip1, Tip2> nume; declară o uniune sigură ce poate comuta între tipurile menționate.",
        "hint": "std::variant<int, std::string> rezultat;",
        "matchingPairs": [
            {"left": "std::variant", "right": "Uniune sigură cu verificare automată a tipului activ"},
            {"left": "std::visit", "right": "Aplică un vizitator funcțional peste tipul activ"},
            {"left": "std::get<T>", "right": "Extrage tipul T sau aruncă std::bad_variant_access"},
            {"left": "std::holds_alternative", "right": "Verifică dacă variantul conține tipul specificat"}
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
            {"term": "Structured Bindings", "def": "Sintaxa C++17 auto [a, b] ce descompune un agregat în variabile locale."},
            {"term": "std::tuple", "def": "Colecție eterogenă de elemente cu lungime fixă din header-ul <tuple>."},
            {"term": "std::pair", "def": "Tuplu specializat pe exact două elemente (first și second)."},
            {"term": "Decompoziție", "def": "Separarea automată a componentelor unui obiect pe baza numelui sau indexului."}
        ],
        "example": "#include <map>\n#include <string>\n#include <iostream>\n\nstd::map<std::string, int> scoruri{{\"Denis\", 100}, {\"Elena\", 95}};\n\n// Despachetare eleganta a perechilor cheie-valoare prin Structured Bindings:\nfor (const auto& [nume, scor] : scoruri) {\n    std::cout << nume << \" are scorul: \" << scor << \"\\n\";\n}",
        "prompt": "Scrie instrucțiunea C++17 cu legături structurate auto [x, y] pentru a despacheta perechea returnată de funcția getCoordonate();.",
        "caseSensitive": True,
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
            {"left": "auto [a, b]", "right": "Despachetează membrii prin copiere"},
            {"left": "const auto& [a, b]", "right": "Despachetează prin referință constantă fără copiere"},
            {"left": "std::pair", "right": "Structură cu doi membri numiți first și second"},
            {"left": "std::make_tuple", "right": "Funcție utilitară pentru construirea unui tuplu"}
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
            {"term": "Fold Expression", "def": "Sintaxă C++17 ce pliază un pachet de parametri peste un operator binar."},
            {"term": "Parameter Pack", "def": "Pachet de parametri generici notat cu elipsă 'typename... Args'."},
            {"term": "Unary Right Fold", "def": "Pliere de forma (args op ...) ce evaluează de la dreapta la stânga."},
            {"term": "Variadic Template", "def": "Șablon ce acceptă un număr variabil de argumente de tipuri eterogene."}
        ],
        "example": "template <typename... Args>\nauto adunaTot(Args... args) {\n    return (... + args); // Fold expression C++17: a + b + c + ...\n}\n\nint suma = adunaTot(1, 2, 3, 4, 5); // 15 calculat instant!",
        "prompt": "Scrie corpul funcției (expresia de pliere) care însumează toți parametrii din pachetul args folosind parantezele și operatorul de adunare: return (... + args);.",
        "caseSensitive": True,
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
            {"left": "(... + args)", "right": "Însumează toți parametrii din pachet"},
            {"left": "(... && args)", "right": "Verifică dacă toate argumentele sunt true"},
            {"left": "typename... Args", "right": "Declară un pachet generic de tipuri variadice"},
            {"left": "sizeof...(args)", "right": "Returnează numărul de argumente primite în pachet"}
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
            {"term": "Custom Deleter", "def": "Funcție sau lambda furnizată unui smart pointer pentru a înlocui comportamentul implicit de delete."},
            {"term": "decltype", "def": "Operator la compilare ce extrage tipul exact al unei expresii sau funcții."},
            {"term": "C-API Wrapper", "def": "Împachetarea resurselor C tradiționale în containere sigure RAII din C++."},
            {"term": "fclose", "def": "Funcția standard C ce închide un stream de fișier de tip FILE*."}
        ],
        "example": "#include <memory>\n#include <cstdio>\n\n// Smart pointer RAII pentru fisiere C native:\nusing FilePtr = std::unique_ptr<FILE, decltype(&fclose)>;\n\nvoid proceseazaFisier() {\n    FilePtr f(std::fopen(\"date.txt\", \"r\"), &fclose);\n    if (f) {\n        // Citire din fisier...\n    }\n} // fclose() este apelat automat AICI, chiar daca apare o exceptie!",
        "prompt": "Declară un tip alias numit FilePtr folosind using pentru un std::unique_ptr de tip FILE cu deleterul decltype(&fclose).",
        "caseSensitive": True,
        "acceptedAnswers": [
            "using FilePtr = std::unique_ptr<FILE, decltype(&fclose)>;",
            "using FilePtr = std::unique_ptr<FILE, decltype(&fclose)>"
        ],
        "regexPattern": "^using\\s+FilePtr\\s*=\\s*std::unique_ptr<FILE,\\s*decltype\\(&fclose\\)>\\s*;?$",
        "officialSolution": "using FilePtr = std::unique_ptr<FILE, decltype(&fclose)>;",
        "explanation": "Tipul specifică FILE ca tip al resursei și decltype(&fclose) ca tip al funcției de eliberare.",
        "hint": "using FilePtr = std::unique_ptr<FILE, decltype(&fclose)>;",
        "matchingPairs": [
            {"left": "decltype(&fclose)", "right": "Tipul pointerului la funcția de închidere fișier C"},
            {"left": "Custom Deleter", "right": "Înlocuiește apelul implicit de delete cu o funcție proprie"},
            {"left": "std::unique_ptr", "right": "Smart pointer cu proprietate unică și exclusivă"},
            {"left": "ptr.get()", "right": "Extrage pointerul brut nativ din interiorul smart pointerului"}
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
            {"term": "std::mutex", "def": "Primitivă de excludere mutuală ce permite unui singur fir accesul la o secțiune critică."},
            {"term": "std::scoped_lock", "def": "RAII lock C++17 ce blochează multiple mutexuri simultan fără risc de deadlock."},
            {"term": "std::unique_lock", "def": "Gestionar flexibil de mutex ce permite deblocare și reinchidere la cerere."},
            {"term": "Deadlock", "def": "Blocaj definitiv în care două sau mai multe thread-uri se așteaptă reciproc la infinit."}
        ],
        "example": "#include <mutex>\n#include <thread>\n\nstd::mutex mtx1, mtx2;\n\nvoid transferBancar() {\n    // C++17 scoped_lock blocheaza ambele mutexuri sigur fara deadlock:\n    std::scoped_lock lock(mtx1, mtx2);\n    // Sectiune critica protejata complet!\n}",
        "prompt": "Scrie instrucțiunea C++17 pentru a bloca în siguranță două mutexuri numite m1 și m2 folosind std::scoped_lock lock(m1, m2);.",
        "caseSensitive": True,
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
            {"left": "std::scoped_lock", "right": "Blochează multiple mutexuri fără risc de deadlock (C++17)"},
            {"left": "std::unique_lock", "right": "Permite deblocare și re-blocare manuală flexibilă"},
            {"left": "std::lock_guard", "right": "Blocare simplă strictă pe durata acoladelor"},
            {"left": "Data Race", "right": "Scriere concurentă nesincronizată pe aceeași adresă"}
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
            {"term": "std::condition_variable", "def": "Primitivă de sincronizare ce permite suspendarea unui thread până la notificarea unei condiții."},
            {"term": "Spurious Wakeup", "def": "Trezire neașteptată a unui thread din wait fără apel direct de notify."},
            {"term": "notify_one()", "def": "Trezește un singur thread aflat în așteptare pe variabila de condiție."},
            {"term": "notify_all()", "def": "Trezește toate thread-urile aflate în așteptare pe variabila de condiție."}
        ],
        "example": "#include <mutex>\n#include <condition_variable>\n#include <queue>\n\nstd::mutex mtx;\nstd::condition_variable cv;\nstd::queue<int> taskuri;\n\nvoid consumator() {\n    std::unique_lock<std::mutex> lock(mtx);\n    // Asteapta cu predicat pentru a preveni trezirile spurious:\n    cv.wait(lock, [] { return !taskuri.empty(); });\n    int task = taskuri.front();\n    taskuri.pop();\n}",
        "prompt": "Scrie metoda apelată pe o variabilă de condiție numită cv pentru a trezi un singur thread aflat în așteptare: cv.notify_one();.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "cv.notify_one();",
            "cv.notify_one()"
        ],
        "regexPattern": "^cv\\.notify_one\\s*\\(\\s*\\)\\s*;?$",
        "officialSolution": "cv.notify_one();",
        "explanation": "Metoda notify_one() semnalizează un singur thread aflat în repaus pe variabila de condiție.",
        "hint": "cv.notify_one();",
        "matchingPairs": [
            {"left": "cv.wait(lock, pred)", "right": "Oprește thread-ul până când predicatul devine adevărat"},
            {"left": "cv.notify_one()", "right": "Trezește un singur thread din starea de repaus"},
            {"left": "cv.notify_all()", "right": "Trezește toate thread-urile aflate în așteptare"},
            {"left": "Spurious Wakeup", "right": "Trezire accidentală a thread-ului fără semnalizare reală"}
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
            {"term": "std::async", "def": "Funcție șablon ce lansează o sarcină în fundal și returnează un std::future."},
            {"term": "std::future", "def": "Obiect ce permite recuperarea rezultatului sau excepției unei operații asincrone."},
            {"term": "f.get()", "def": "Blochează execuția până când sarcina se termină și returnează rezultatul calculat."},
            {"term": "std::launch::async", "def": "Politică de lansare ce garantează crearea unui nou fir separat de execuție."}
        ],
        "example": "#include <future>\n#include <iostream>\n\nint calculeazaDateGree() {\n    // Procesare grea...\n    return 42;\n}\n\n// Lansare asincrona garantata pe alt nucleu:\nstd::future<int> rezultatViitor = std::async(std::launch::async, calculeazaDateGree);\n\n// Thread-ul principal continua alte operatii...\n\nint valoareFinala = rezultatViitor.get(); // Asteapta si preia valoarea 42",
        "prompt": "Scrie metoda apelată pe un obiect std::future numit fut pentru a extrage valoarea finală calculată (blocând execuția dacă e necesar): fut.get();.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "fut.get();",
            "fut.get()"
        ],
        "regexPattern": "^fut\\.get\\s*\\(\\s*\\)\\s*;?$",
        "officialSolution": "fut.get();",
        "explanation": "Metoda get() extrage valoarea returnată de sarcina asincronă și eliberează starea partajată a viitorului.",
        "hint": "fut.get();",
        "matchingPairs": [
            {"left": "std::async", "right": "Lansează o funcție în fundal returnând un future"},
            {"left": "fut.get()", "right": "Așteaptă rezultatul și îl returnează (poate fi apelat o singură dată)"},
            {"left": "fut.wait()", "right": "Așteaptă terminarea fără a consuma rezultatul"},
            {"left": "std::promise", "right": "Obiectul pereche folosit pentru a scrie rezultatul către un future"}
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
            {"term": "std::atomic<T>", "def": "Tip ce garantează operații atomice hardware indivizibile fără mutexuri."},
            {"term": "Lock-Free", "def": "Arhitectură concurentă în care cel puțin un fir progresează fără a fi blocat de mutexuri."},
            {"term": "CAS (Compare-And-Swap)", "def": "Instrucțiune CPU ce verifică și actualizează o valoare atomic într-un singur ciclu."},
            {"term": "fetch_add()", "def": "Adună o valoare atomic și returnează valoarea anterioară înainte de adunare."}
        ],
        "example": "#include <atomic>\n#include <thread>\n\nstd::atomic<int> contorGlobal{0};\n\nvoid incrementeaza() {\n    for (int i = 0; i < 10000; ++i) {\n        contorGlobal.fetch_add(1); // Incrementare atomica hardware thread-safe!\n    }\n}",
        "prompt": "Declară o variabilă atomică de tip int numită vizite inițializată cu valoarea 0 folosind std::atomic<int>.",
        "caseSensitive": True,
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
            {"left": "std::atomic<int>", "right": "Întreg sincronizat direct prin instrucțiuni CPU fără mutex"},
            {"left": "fetch_add(1)", "right": "Adăugare atomică sigură la nivel de memorie cache"},
            {"left": "compare_exchange", "right": "Primitivă CAS fundamentală pentru algoritmi lock-free"},
            {"left": "is_lock_free()", "right": "Interoghează dacă operațiile atomice sunt hardware native"}
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
            {"term": "PMR", "def": "Polymorphic Memory Resources: arhitectură C++17 pentru alocare dinamică polimorfică."},
            {"term": "monotonic_buffer", "def": "Alocator extrem de rapid ce avansează un pointer în buffer fără eliberări individuale."},
            {"term": "std::pmr::vector", "def": "Vector standard ce utilizează un alocator polimorfic configurabil la rulare."},
            {"term": "Bump Allocation", "def": "Alocare ultra-rapidă prin simpla adunare a dimensiunii la adresa curentă a pointerului."}
        ],
        "example": "#include <memory_resource>\n#include <vector>\n#include <array>\n\nstd::array<std::byte, 1024> bufferStiva; // 1 KB pe stiva\nstd::pmr::monotonic_buffer_resource resursaMemorie(bufferStiva.data(), bufferStiva.size());\n\n// Vectorul aloca direct din bufferul de pe stiva fara niciun apel la malloc/Heap!\nstd::pmr::vector<int> numere(&resursaMemorie);\nnumere.push_back(10);\nnumere.push_back(20);",
        "prompt": "Declară un vector polimorfic de tip int numit date folosind aliasul standard std::pmr::vector<int>.",
        "caseSensitive": True,
        "acceptedAnswers": [
            "std::pmr::vector<int> date;",
            "std::pmr::vector<int> date{};"
        ],
        "regexPattern": "^std::pmr::vector<int>\\s+date\\s*(\\{\\s*\\})?\\s*;$",
        "officialSolution": "std::pmr::vector<int> date;",
        "explanation": "std::pmr::vector<int> este versiunea C++17 a vectorului care acceptă alocatoare polimorfice de memorie.",
        "hint": "std::pmr::vector<int> date;",
        "matchingPairs": [
            {"left": "std::pmr::vector", "right": "Vector compatibil cu resurse de memorie polimorfice (PMR)"},
            {"left": "monotonic_buffer", "right": "Alocator rapid bazat pe avansarea unui pointer (Bump Allocation)"},
            {"left": "memory_resource", "right": "Clasa de bază abstractă pentru alocatoarele din C++17"},
            {"left": "Zero Heap Overhead", "right": "Alocarea are loc direct în memoria prealocată pe stivă"}
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
]

print(f"Systems & Advanced C++ loaded: {len(systems_lessons)} lessons")
