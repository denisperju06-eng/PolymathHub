const RUST_RESOURCES_CURRICULUM = [
  // =========================================================================
  // TRACK 1: RUST & SISTEME MODERNE (12 CAPITOLE PRACTICE)
  // =========================================================================
  {
    "id": "rust-1",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "1. Începător",
    "xp": 30,
    "title": "Capitolul 1: Fundamente Rust, Cargo & Imutabilitate (let vs let mut)",
    "theory": "\n<p><strong>Rust</strong> este un limbaj de programare compilat nativ, de nivel de sistem, conceput la standarde industriale pentru viteză extremă, siguranță la nivel de memorie și concurență fără erori (data race free), <em>fără a utiliza un Garbage Collector (GC)</em>.</p>\n\n<h4>1. Ecosistemul Cargo & Structura Unui Proiect</h4>\n<p>Toate proiectele Rust sunt gestionate prin instrumentul unificat <code>cargo</code>:</p>\n<ul>\n  <li><code>cargo new nume_proiect</code>: generează scheletul proiectului cu manifestul <code>Cargo.toml</code> și codul sursă în <code>src/main.rs</code>.</li>\n  <li><code>cargo check</code>: validează rapid tipurile și împrumutul fără a genera binarul final (mult mai rapid decât compilarea completă).</li>\n  <li><code>cargo run</code>: compilează și execută programul.</li>\n</ul>\n\n<h4>2. Imutabilitate Implicită & let mut</h4>\n<p>În Rust, toate variabilele sunt <strong>imutabile în mod implicit</strong>. Aceasta este o decizie de design menită să prevină modificările accidentale de stare. Pentru a permite modificarea unei valori, trebuie să declarăm explicit variabila cu <code>let mut</code>:</p>\n\n<pre><code>fn main() {\n    let versiune = \"1.0.0\"; // Imutabil: nu poate fi reatribuit\n    let mut contor: i32 = 0; // Mutabil cu tip explicit (întreg pe 32 biți cu semn)\n\n    contor += 1;\n    println!(\"Versiune: {}, Contor: {}\", versiune, contor);\n}</code></pre>\n",
    "glossary": [
      {
        "term": "Cargo",
        "def": "Sistemul oficial de build, package manager și test runner al limbajului Rust."
      },
      {
        "term": "Imutabilitate (let)",
        "def": "Proprietatea variabilelor din Rust de a nu permite reatribuirea dacă nu au fost declarate cu 'mut'."
      },
      {
        "term": "let mut",
        "def": "Cuvânt cheie ce marchează o variabilă ca fiind modificabilă pe durata execuției."
      },
      {
        "term": "println!",
        "def": "Macro nativ din Rust pentru formatare și afișare pe stdout, verificat la compilare."
      }
    ],
    "matchingPairs": [
      {
        "left": "let x = 10;",
        "right": "Variabilă imutabilă (nu se poate modifica)"
      },
      {
        "left": "let mut y = 20;",
        "right": "Variabilă mutabilă (permite modificări)"
      },
      {
        "left": "cargo check",
        "right": "Verifică compilarea fără a genera binarul"
      },
      {
        "left": "println!(\"{}\", v)",
        "right": "Macro de afișare formatată"
      }
    ],
    "quiz": {
      "question": "Ce se va întâmpla dacă încerci să compilezi următorul cod Rust?\n\nfn main() {\n    let scor = 100;\n    scor = 150;\n}",
      "options": [
        "Eroare de compilare: cannot assign twice to immutable variable `scor`",
        "Programul rulează și afișează 150",
        "Avertisment (warning), dar programul rulează",
        "Valoarea devine None"
      ],
      "correctIndex": 0,
      "explanation": "În Rust, variabilele sunt imutabile implicit. Fără cuvântul cheie 'mut' (let mut scor = 100;), compilatorul refuză categoric compilarea."
    },
    "task": "Declară o variabilă mutabilă numită 'contor' de tip i32 cu valoarea inițială 0 și incrementează-o cu 1 (contor += 1;).",
    "starterCode": "fn main() {\n    // Declară contor mutabil și adaugă 1:\n}\n",
    "acceptedAnswers": [
      "let mut contor: i32 = 0;\ncontor += 1;",
      "let mut contor = 0;\ncontor += 1;",
      "let mut contor = 0;\ncontor = contor + 1;",
      "let mut contor: i32 = 0;\ncontor = contor + 1;"
    ],
    "officialSolution": "let mut contor: i32 = 0;\ncontor += 1;",
    "explanation": "Declarăm 'let mut contor = 0;' pentru a permite modificarea, apoi incrementăm cu 'contor += 1;'.",
    "hint": "Scrie 'let mut contor: i32 = 0;' urmat pe linia următoare de 'contor += 1;'."
  },
  {
    "id": "rust-2",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "1. Începător",
    "xp": 35,
    "title": "Capitolul 2: Arhitectura de Ownership (Proprietate, Move Semantics & Drop)",
    "theory": "\n<p>Mecanismul cheie care distinge Rust de C, C++, Java sau Go este <strong>Ownership (Proprietatea)</strong>. Memoria pe Heap este eliberată automat în momentul exact în care proprietarul ei părăsește domeniul de vizibilitate (scope), eliminând complet scurgerile de memorie (memory leaks) și erorile de tip <em>double free</em> sau <em>use-after-free</em>.</p>\n\n<h4>Cele 3 Reguli Fundamentale ale Ownership-ului:</h4>\n<ol>\n  <li>Fiecare valoare din Rust are o variabilă unică denumită <strong>proprietar (owner)</strong>.</li>\n  <li>Poate exista un <strong>singur proprietar</strong> la un moment dat.</li>\n  <li>Când proprietarul iese din blocul său de acolade (<code>scope</code>), valoarea este de-alocată instant prin funcția <code>drop()</code>.</li>\n</ol>\n\n<h4>Move Semantics vs Copy</h4>\n<p>Tipul <code>String</code> alocă memorie pe Heap. Când atribuim o variabilă de tip <code>String</code> alteia, proprietatea este <strong>mutată (Move)</strong>, iar variabila inițială devine invalidă!</p>\n\n<pre><code>let s1 = String::from(\"polymath\");\nlet s2 = s1; // Dreptul de proprietate s-a mutat în s2!\n// s1 nu mai poate fi folosit aici! (Eroare la compilare)\n\n// Dacă dorim o duplicare reală pe Heap, folosim .clone():\nlet s3 = s2.clone(); // s2 rămâne valid, iar s3 are propria copie</code></pre>\n",
    "glossary": [
      {
        "term": "Ownership",
        "def": "Sistemul prin care compilatorul Rust gestionează alocarea și eliberarea memoriei fără Garbage Collector."
      },
      {
        "term": "Move Semantics",
        "def": "Transferul dreptului de proprietate asupra unei valori de la o variabilă la alta, invalidând sursa."
      },
      {
        "term": "Drop",
        "def": "Funcția automată apelată exact la sfârșitul duratei de viață a unei valori pentru de-alocarea resurselor."
      },
      {
        "term": "Clone",
        "def": "Metodă explicită pentru duplicarea profundă (deep copy) a datelor alocate pe Heap."
      }
    ],
    "matchingPairs": [
      {
        "left": "Move",
        "right": "Transferă proprietatea și invalidează variabila sursă"
      },
      {
        "left": ".clone()",
        "right": "Creează o copie completă pe Heap"
      },
      {
        "left": "Drop",
        "right": "De-alocare automată la ieșirea din scope"
      },
      {
        "left": "Stack",
        "right": "Memorie fixă, rapidă (Copy implicit pentru i32, bool)"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă dacă rulați: let a = String::from(\"data\"); let b = a; println!(\"{}\", a); ?",
      "options": [
        "Eroare de compilare: value borrowed here after move",
        "Afișează \"data\" fără probleme",
        "Afișează null",
        "Programul se blochează cu segmentation fault la runtime"
      ],
      "correctIndex": 0,
      "explanation": "Rust invalidează automat 'a' odată ce proprietatea valorii a fost mutată (moved) în 'b', împiedicând accesul la memorie partajată necontrolat."
    },
    "task": "Creează variabila 's2' prin clonarea explicită a lui 's1' folosind metoda .clone(), astfel încât 's1' să rămână valid.",
    "starterCode": "let s1 = String::from(\"polymath\");\n// Creează s2 prin clonarea lui s1:\n",
    "acceptedAnswers": [
      "let s2 = s1.clone();",
      "let s2 = s1.clone()"
    ],
    "officialSolution": "let s2 = s1.clone();",
    "explanation": "Apelul 's1.clone()' alocă un nou buffer pe Heap și copiază datele, permițând ambelor variabile să aibă proprietari valizi.",
    "hint": "Scrie 'let s2 = s1.clone();'."
  },
  {
    "id": "rust-3",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "2. Elementar",
    "xp": 35,
    "title": "Capitolul 3: Împrumut și Referințe (Borrowing: & Imutabil vs &mut Exclusiv)",
    "theory": "\n<p>Dacă am transfera mereu proprietatea când transmitem parametri către funcții, ar trebui să returnăm fiecare variabilă înapoi. În schimb, Rust oferă mecanismul de <strong>Împrumut (Borrowing)</strong> prin <em>referințe</em>.</p>\n\n<h4>Regulile Stricte ale Referințelor:</h4>\n<ul>\n  <li>O referință imutabilă (<code>&T</code>) permite citirea valorii fără a prelua proprietatea.</li>\n  <li>O referință mutabilă (<code>&mut T</code>) permite modificarea directă a valorii împrumutate.</li>\n  <li><strong>Regula de Aur a Concurrency-ului:</strong> Poți avea <em>oricâte referințe imutabile</em> (<code>&T</code>) simultan, <strong>SAU</strong> <em>o singură referință mutabilă</em> (<code>&mut T</code>) exclusivă la un moment dat. Niciodată ambele în același timp!</li>\n</ul>\n\n<pre><code>fn lungime(text: &String) -> usize {\n    text.len() // Nu transferă proprietatea; doar citește\n}\n\nfn adauga_sufix(text: &mut String) {\n    text.push_str(\" [Verificat]\"); // Modificare prin referință mutabilă exclusivă\n}</code></pre>\n",
    "glossary": [
      {
        "term": "Borrowing",
        "def": "Mecanismul de creare a unei referințe către o valoare fără a-i prelua dreptul de proprietate."
      },
      {
        "term": "&T (Referință Imutabilă)",
        "def": "Permite citirea partajată a unei valori de către multiple entități simultan."
      },
      {
        "term": "&mut T (Referință Mutabilă)",
        "def": "Garantează acces exclusiv de scriere; previne condițiile de concurență (data races)."
      },
      {
        "term": "Dangling Pointer",
        "def": "Un pointer ce indică spre o locație de memorie de-alocată; imposibil în Rust datorită verificatorului de împrumuturi."
      }
    ],
    "matchingPairs": [
      {
        "left": "&String",
        "right": "Împrumut de citire (poate fi partajat multiplu)"
      },
      {
        "left": "&mut String",
        "right": "Împrumut de scriere (strict exclusiv)"
      },
      {
        "left": "Data Race",
        "right": "Condiție eliminată la compilare prin regulile de borrowing"
      },
      {
        "left": "text.len()",
        "right": "Metodă ce necesită doar referință imutabilă &self"
      }
    ],
    "quiz": {
      "question": "De ce nu permite Rust două referințe mutabile (&mut) către aceeași variabilă în același bloc?",
      "options": [
        "Pentru a preveni condițiile de concurență (data races) și modificările neașteptate ale memoriei",
        "Pentru că memoria Heap nu suportă mai mult de o referință",
        "Pentru că Rust nu are pointeri",
        "Este o limitare temporară a compilatorului"
      ],
      "correctIndex": 0,
      "explanation": "Garantând că există cel mult o referință mutabilă exclusivă, Rust elimină complet la compilare conflictele de scriere/citire simultană."
    },
    "task": "Scrie semnătura completă a unei funcții 'calculeaza_lungime' care primește parametrul 's' ca referință imutabilă la String (&String) și returnează un întreg 'usize'.",
    "starterCode": "// Scrie semnătura funcției:\n",
    "acceptedAnswers": [
      "fn calculeaza_lungime(s: &String) -> usize",
      "fn calculeaza_lungime(s: &String) -> usize {",
      "fn calculeaza_lungime(s: &str) -> usize"
    ],
    "officialSolution": "fn calculeaza_lungime(s: &String) -> usize",
    "explanation": "Semnătura corectă folosește 'fn calculeaza_lungime(s: &String) -> usize' cu săgeata '->' pentru tipul returnat.",
    "hint": "Folosește: 'fn calculeaza_lungime(s: &String) -> usize'."
  },
  {
    "id": "rust-4",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "2. Elementar",
    "xp": 35,
    "title": "Capitolul 4: Structuri (struct), Tuple Structs și Metode (impl)",
    "theory": "\n<p>Structurile (<code>struct</code>) sunt coloana vertebrală a modelării datelor în Rust. Spre deosebire de limbajele clasice POO, Rust separă explicit <strong>stocarea datelor</strong> de <strong>comportament</strong>:</p>\n\n<pre><code>// 1. Definirea structurii cu câmpuri numite\nstruct Server {\n    nume: String,\n    port: u16,\n    activ: bool,\n}\n\n// 2. Blocul 'impl' conține metodele asociate\nimpl Server {\n    // Funcție asociată (constructor convențional)\n    fn new(nume: &str, port: u16) -> Self {\n        Server {\n            nume: nume.to_string(),\n            port,\n            activ: true,\n        }\n    }\n\n    // Metodă ce împrumută instanța cu &self\n    fn status(&self) -> String {\n        format!(\"Serverul {} rulează pe portul {}\", self.nume, self.port)\n    }\n}</code></pre>\n",
    "glossary": [
      {
        "term": "struct",
        "def": "Tip compus de date ce permite gruparea mai multor câmpuri numite sau fără nume (tuple struct)."
      },
      {
        "term": "impl",
        "def": "Cuvânt cheie ce definește un bloc de implementare a metodelor și funcțiilor asociate pentru un tip."
      },
      {
        "term": "&self",
        "def": "Primul parametru al unei metode, reprezentând o referință imutabilă la instanța curentă."
      },
      {
        "term": "Self",
        "def": "Alias de tip ce desemnează structura sau tipul pentru care este scris blocul 'impl'."
      }
    ],
    "matchingPairs": [
      {
        "left": "struct Punct { x: f64, y: f64 }",
        "right": "Structură cu câmpuri numite"
      },
      {
        "left": "impl Punct { ... }",
        "right": "Bloc de metode și funcții asociate"
      },
      {
        "left": "&self",
        "right": "Împrumut de citire al instanței curente"
      },
      {
        "left": "&mut self",
        "right": "Permite metodei să modifice câmpurile structurii"
      }
    ],
    "quiz": {
      "question": "Cum se apelează o funcție asociată (de tip constructor) definită ca 'fn new(...) -> Self' în blocul 'impl Server'?",
      "options": [
        "Server::new(\"api\", 8080)",
        "new Server(\"api\", 8080)",
        "Server.new(\"api\", 8080)",
        "Server->new(\"api\", 8080)"
      ],
      "correctIndex": 0,
      "explanation": "În Rust, funcțiile asociate fără parametrul 'self' se apelează cu sintaxa de cale 'Tip::functie', similar unui namespace static."
    },
    "task": "Apelează funcția constructor asociată 'Server::new' transmițând parametrii '\"api\"' și '8080' pentru a crea o variabilă 'srv'.",
    "starterCode": "// Inițializează srv folosind Server::new:\n",
    "acceptedAnswers": [
      "let srv = Server::new(\"api\", 8080);",
      "let srv = Server::new(\"api\", 8080)"
    ],
    "officialSolution": "let srv = Server::new(\"api\", 8080);",
    "explanation": "Sintaxa corectă este 'let srv = Server::new(\"api\", 8080);'.",
    "hint": "Scrie 'let srv = Server::new(\"api\", 8080);'."
  },
  {
    "id": "rust-5",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "3. Intermediar",
    "xp": 40,
    "title": "Capitolul 5: Enum-uri Puternice, Option<T> și Pattern Matching cu match",
    "theory": "\n<p>Enum-urile din Rust sunt mult mai puternice decât în C/C++ sau Java: fiecare variantă a unui <code>enum</code> poate stoca date de tipuri complet diferite (algebre de tipuri sau <em>tagged unions</em>).</p>\n\n<h4>Eliminarea Conceptului de NULL: Option&lt;T&gt;</h4>\n<p>Rust nu are pointeri nuli (<code>null</code> sau <code>undefined</code>). Când o valoare poate lipsi, se folosește enumul standard <code>Option&lt;T&gt;</code>:</p>\n\n<pre><code>enum Option&lt;T&gt; {\n    Some(T), // Conține o valoare de tip T\n    None,    // Nicio valoare prezentă\n}</code></pre>\n\n<h4>Pattern Matching Exhaustiv cu match</h4>\n<p>Instrucțiunea <code>match</code> forțează tratarea tuturor ramurilor posibile:</p>\n\n<pre><code>fn verifica(varsta: Option&lt;u32&gt;) {\n    match varsta {\n        Some(v) if v >= 18 => println!(\"Major cu vârsta {}\", v),\n        Some(v) => println!(\"Minor cu vârsta {}\", v),\n        None => println!(\"Vârstă nespecificată!\"),\n    }\n}\n\n// Pentru un singur caz, putem folosi 'if let':\nif let Some(v) = varsta {\n    println!(\"Valoarea extrasă este: {}\", v);\n}</code></pre>\n",
    "glossary": [
      {
        "term": "Option<T>",
        "def": "Tip generic standard ce reprezintă fie prezența unei valori (Some), fie absența ei (None)."
      },
      {
        "term": "match",
        "def": "Structură de control pentru pattern matching exhaustiv; compilatorul verifică acoperirea tuturor variantelor."
      },
      {
        "term": "if let",
        "def": "Sintaxă compactă de potrivire a unei singure variante dintr-un enum, ignorând restul cazurilor."
      },
      {
        "term": "Algebraic Data Type",
        "def": "Model de tip compus în care un tip este fie o sumă de variante (enum), fie un produs de câmpuri (struct)."
      }
    ],
    "matchingPairs": [
      {
        "left": "Some(val)",
        "right": "Varianta Option ce conține o valoare reală"
      },
      {
        "left": "None",
        "right": "Varianta Option ce semnifică absența valorii"
      },
      {
        "left": "match x { ... }",
        "right": "Verificare exhaustivă a tuturor variantelor"
      },
      {
        "left": "if let Some(v) = x",
        "right": "Sintaxă compactă pentru extragerea unei singure ramuri"
      }
    ],
    "quiz": {
      "question": "De ce refuză compilatorul Rust o expresie 'match' dacă o variantă a enum-ului este omisă fără ramură wildcard (_)?",
      "options": [
        "Pentru că verificarea exhaustivă garantează că programul nu va întâmpina stări neprevăzute la rulare",
        "Pentru că memoria enumului nu poate fi alocată altfel",
        "Este permis doar dacă folosim un linter",
        "Pentru a economisi instrucțiuni CPU"
      ],
      "correctIndex": 0,
      "explanation": "Compilatorul Rust impune verificarea exhaustivă a oricărui 'match', asigurând că fiecare stare validă are o tratare definită."
    },
    "task": "Folosește 'if let Some(val) = rezultat' pentru a afișa valoarea extrasă folosind 'println!(\"{}\", val);'.",
    "starterCode": "let rezultat: Option<i32> = Some(100);\n// Scrie blocul if let:\n",
    "acceptedAnswers": [
      "if let Some(val) = rezultat { println!(\"{}\", val); }",
      "if let Some(val) = rezultat {\n    println!(\"{}\", val);\n}",
      "if let Some(val) = rezultat { println!(\"{}\", val); }"
    ],
    "officialSolution": "if let Some(val) = rezultat {\n    println!(\"{}\", val);\n}",
    "explanation": "Expresia 'if let Some(val) = rezultat { println!(\"{}\", val); }' despachetează sigur valoarea fără risc de panic.",
    "hint": "Scrie 'if let Some(val) = rezultat { println!(\"{}\", val); }'."
  },
  {
    "id": "rust-6",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "3. Intermediar",
    "xp": 40,
    "title": "Capitolul 6: Gestiunea Idiomatică a Erorilor și Operatorul ?",
    "theory": "\n<p>În Rust, erorile nu folosesc excepții (fără <code>try-catch</code>). În schimb, erorile recuperabile sunt valori de prim rang reprezentate prin tipul standard <code>Result&lt;T, E&gt;</code>:</p>\n\n<pre><code>enum Result&lt;T, E&gt; {\n    Ok(T),  // Operațiunea a reușit cu valoarea de tip T\n    Err(E), // Operațiunea a eșuat cu eroarea de tip E\n}</code></pre>\n\n<h4>Operatorul '?' (Try Operator)</h4>\n<p>În loc să scriem manual <code>match</code> pentru fiecare funcție ce poate returna o eroare, plasăm operatorul <code>?</code> la finalul apelului:</p>\n<ul>\n  <li>Dacă rezultatul este <code>Ok(val)</code>, operatorul despachetează automat valoarea <code>val</code>.</li>\n  <li>Dacă rezultatul este <code>Err(e)</code>, funcția curentă se oprește imediat și returnează <code>Err(e)</code> către apelant!</li>\n</ul>\n\n<pre><code>use std::fs::File;\nuse std::io::{self, Read};\n\nfn citeste_config() -> Result&lt;String, io::Error&gt; {\n    let mut fisier = File::open(\"config.json\")?; // Returnează Err imediat dacă fișierul lipsește\n    let mut continut = String::new();\n    fisier.read_to_string(&mut continut)?;\n    Ok(continut)\n}</code></pre>\n",
    "glossary": [
      {
        "term": "Result<T, E>",
        "def": "Tipul oficial pentru erori recuperabile în Rust: conține fie Ok(succes), fie Err(detalii eroare)."
      },
      {
        "term": "Operatorul ?",
        "def": "Sintaxă compactă ce propagă automat o eroare dacă rezultatul este Err sau despachetează valoarea dacă este Ok."
      },
      {
        "term": "panic!",
        "def": "Macro ce oprește imediat execuția (eroare irecuperabilă) și începe derularea stivei (stack unwinding)."
      },
      {
        "term": "unwrap()",
        "def": "Metodă ce returnează valoarea dintr-un Ok/Some sau declanșează panic! dacă întâlnește Err/None."
      }
    ],
    "matchingPairs": [
      {
        "left": "Ok(valoare)",
        "right": "Succes cu date valide"
      },
      {
        "left": "Err(eroare)",
        "right": "Eșec cu obiect de eroare"
      },
      {
        "left": "File::open(cale)?",
        "right": "Propagă eroarea automat dacă eșuează"
      },
      {
        "left": "panic!(\"Mesaj\")",
        "right": "Oprire imediată a firului de execuție"
      }
    ],
    "quiz": {
      "question": "Ce face operatorul '?' dacă o funcție returnează Err(e)?",
      "options": [
        "Oprește funcția curentă și returnează Err(e) către funcția apelantă",
        "Ignoră eroarea și returnează o valoare null",
        "Transformă eroarea într-un avertisment pe consolă",
        "Declanșează imediat panic! și termină procesul"
      ],
      "correctIndex": 0,
      "explanation": "Operatorul '?' oferă propagare idiomatică și curată a erorilor în stiva de apeluri fără structuri imbricate de cod."
    },
    "task": "Deschide fișierul folosind 'File::open(\"date.txt\")' și aplică operatorul '?' pentru propagarea erorii, atribuind rezultatul variabilei 'fisier'.",
    "starterCode": "// Completează atribuirea cu operatorul ?:\nlet fisier = ",
    "acceptedAnswers": [
      "let fisier = File::open(\"date.txt\")?;",
      "File::open(\"date.txt\")?;",
      "File::open(\"date.txt\")?"
    ],
    "officialSolution": "let fisier = File::open(\"date.txt\");",
    "explanation": "Adăugarea operatorului '?' despachetează instanța File dacă apelul reușește sau returnează Err(io::Error).",
    "hint": "Scrie 'let fisier = File::open(\"date.txt\")?;'."
  },
  {
    "id": "rust-7",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "3. Intermediar",
    "xp": 45,
    "title": "Capitolul 7: Colecții Esențiale (Vec<T>, String și HashMap)",
    "theory": "\n<p>Biblioteca standard Rust oferă colecții extrem de optimizate stocate pe Heap:</p>\n\n<h4>1. Vectori Dinamici: Vec&lt;T&gt;</h4>\n<p>Stochează elemente omogene în memorie contiguă. Macro-ul <code>vec![]</code> permite inițializarea concisă:</p>\n<pre><code>let mut note = vec![10, 9, 8];\nnote.push(10); // Adaugă la final\nprintln!(\"Prima notă: {}\", note[0]);</code></pre>\n\n<h4>2. Dicționare: HashMap&lt;K, V&gt;</h4>\n<p>Stochează perechi cheie-valoare cu căutare în timp mediu <code>O(1)</code>. Oferă API-ul puternic <code>entry</code> pentru inserare condiționată:</p>\n<pre><code>use std::collections::HashMap;\n\nlet mut scoruri = HashMap::new();\nscoruri.insert(\"Echipa Alpha\", 15);\n\n// Dacă cheia nu există, o inserează cu valoarea 0 și returnează o referință mutabilă:\nscoruri.entry(\"Echipa Beta\").or_insert(0);</code></pre>\n",
    "glossary": [
      {
        "term": "Vec<T>",
        "def": "Listă redimensionabilă stocată în memorie contiguă pe Heap."
      },
      {
        "term": "HashMap<K, V>",
        "def": "Tabelă de dispersie pentru asocieri rapide între chei unice și valori."
      },
      {
        "term": "vec![]",
        "def": "Macro comod pentru construirea rapidă a instanțelor Vec cu elemente inițiale."
      },
      {
        "term": ".entry().or_insert()",
        "def": "Metodă atomică de verificare și inserare a unei valori implicite într-un HashMap."
      }
    ],
    "matchingPairs": [
      {
        "left": "vec![1, 2, 3]",
        "right": "Vector alocat pe Heap cu 3 elemente"
      },
      {
        "left": "vector.push(x)",
        "right": "Adaugă un element la finalul vectorului"
      },
      {
        "left": "map.insert(k, v)",
        "right": "Inserează o pereche cheie-valoare"
      },
      {
        "left": "map.entry(k).or_insert(0)",
        "right": "Garantează existența unei chei cu valoare inițială"
      }
    ],
    "quiz": {
      "question": "Ce complexitate temporală oferă accesul prin index (v[i]) la un element dintr-un Vec<T> în Rust?",
      "options": [
        "O(1) - timp constant direct pe baza adresei din memorie",
        "O(n) - parcurgere liniară",
        "O(log n) - căutare binară",
        "O(n^2)"
      ],
      "correctIndex": 0,
      "explanation": "Deoarece vectorul este o zonă contiguă de memorie pe Heap, calculul adresei v[i] = baza + (i * dimensiune_element) se face instant în O(1)."
    },
    "task": "Adaugă valoarea 100 la finalul vectorului mutabil 'valori' folosind metoda .push().",
    "starterCode": "let mut valori = vec![10, 20, 30];\n// Adaugă 100 la final:\n",
    "acceptedAnswers": [
      "valori.push(100);",
      "valori.push(100)"
    ],
    "officialSolution": "valori.push(100);",
    "explanation": "Apelul 'valori.push(100);' redimensionează dacă e necesar capacitatea vectorului și inserează 100 la final.",
    "hint": "Scrie 'valori.push(100);'."
  },
  {
    "id": "rust-8",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "4. Avansat",
    "xp": 50,
    "title": "Capitolul 8: Trăsături (traits), Polimorfism Static și Generice",
    "theory": "\n<p>O <strong>trăsătură (trait)</strong> definește un contract sau un set de metode pe care un tip le poate implementa (echivalentul conceptului de interfață, dar mult mai flexibil și fără costuri suplimentare de runtime).</p>\n\n<h4>Monomorfizare & Zero-Cost Abstractions</h4>\n<p>Când folosim generice cu constrângeri de trăsături (<em>trait bounds</em>), compilatorul Rust generează la compilare copii specializate pentru fiecare tip concret utilizat (<strong>monomorfizare</strong>). Rezultatul este apel direct de funcție fără tabele de pointeri virtuali (vtable), atingând performanță maximă:</p>\n\n<pre><code>// Definirea unei trăsături\ntrait Descriptibil {\n    fn descriere(&self) -> String;\n}\n\n// Funcție generică cu Trait Bound\nfn printeaza_detalii&lt;T: Descriptibil&gt;(obiect: &T) {\n    println!(\"{}\", obiect.descriere());\n}\n\n// Sau cu sintaxa concisă 'impl Trait':\nfn afiseaza_compact(obiect: &impl Descriptibil) {\n    println!(\"{}\", obiect.descriere());\n}</code></pre>\n",
    "glossary": [
      {
        "term": "trait",
        "def": "Definiție a unui set de metode abstracte sau cu implementare implicită ce pot fi partajate de multiple tipuri."
      },
      {
        "term": "Monomorfizare",
        "def": "Procesul de generare a codului mașină specific pentru fiecare tip generic la compilare."
      },
      {
        "term": "Zero-Cost Abstraction",
        "def": "Principiu de design conform căruia abstracțiile de nivel înalt nu adaugă nicio penalizare de runtime peste codul scris manual."
      },
      {
        "term": "#[derive(...)]",
        "def": "Atribut macro ce generează automat implementarea trăsăturilor standard precum Debug, Clone sau PartialEq."
      }
    ],
    "matchingPairs": [
      {
        "left": "trait Resursa { fn id(&self); }",
        "right": "Definirea unui contract de interfață"
      },
      {
        "left": "impl Resursa for Utilizator",
        "right": "Implementarea trăsăturii pentru un tip concret"
      },
      {
        "left": "T: Display + Clone",
        "right": "Constrângere multiplă de trăsături pe tipul generic"
      },
      {
        "left": "Monomorfizare",
        "right": "Specializarea codului generic la compilare"
      }
    ],
    "quiz": {
      "question": "Ce înseamnă că genericele din Rust respectă principiul 'Zero-Cost Abstractions'?",
      "options": [
        "Codul generic este optimizat și compilat ca și cum ai fi scris o funcție manuală pentru fiecare tip concret, fără overhead la rulare",
        "Genericele nu consumă spațiu pe hard disk la compilare",
        "Este gratuit din punct de vedere al licenței open source",
        "Compilatorul nu verifică tipurile până la execuție"
      ],
      "correctIndex": 0,
      "explanation": "Monomorfizarea produce cod binar dedicat pentru fiecare tip fără dispatch dinamic, obținând viteză nativă identică cu codul scris manual."
    },
    "task": "Scrie antetul unei funcții generice 'afiseaza' ce primește parametrul 'val' de tip generic 'T' constrâns de trăsătura 'std::fmt::Display'.",
    "starterCode": "// Scrie antetul funcției:\n",
    "acceptedAnswers": [
      "fn afiseaza<T: std::fmt::Display>(val: T)",
      "fn afiseaza<T: Display>(val: T)",
      "fn afiseaza<T: std::fmt::Display>(val: T) {",
      "fn afiseaza<T: Display>(val: T) {"
    ],
    "officialSolution": "fn afiseaza<T: std::fmt::Display>(val: T)",
    "explanation": "Antetul folosește paranteze unghiulare cu constrângerea de trăsătură: 'fn afiseaza<T: std::fmt::Display>(val: T)'.",
    "hint": "Scrie 'fn afiseaza<T: std::fmt::Display>(val: T)'."
  },
  {
    "id": "rust-9",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "4. Avansat",
    "xp": 50,
    "title": "Capitolul 9: Durate de Viață (lifetimes) și Adnotări 'a",
    "theory": "\n<p>Fiecare referință din Rust are o <strong>durată de viață (lifetime)</strong>: domeniul de memorie în care referința este garantată să fie validă. În 90% din cazuri, compilatorul aplică regulile automate de deducere (<em>lifetime elision rules</em>).</p>\n\n<h4>Când avem nevoie de adnotări explicite 'a?</h4>\n<p>Când o funcție primește două sau mai multe referințe și returnează o referință, compilatorul nu poate ghici care dintre parametrii de intrare va fi returnat și dacă durata sa de viață este suficient de lungă:</p>\n\n<pre><code>// 'a indică faptul că referința returnată este validă\n// atâta timp cât ambele intrări x și y rămân valide\nfn cel_mai_lung&lt;'a&gt;(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}</code></pre>\n<p>Adnotările de durată de viață nu modifică timpul real de execuție, ci oferă metadate pentru ca verificatorul de împrumuturi (<em>Borrow Checker</em>) să poată garanta absența pointerilor nuli sau orfani (<em>dangling pointers</em>).</p>\n",
    "glossary": [
      {
        "term": "Lifetime ('a)",
        "def": "Parametru generic ce descrie relația dintre duratele de viață ale mai multor referințe."
      },
      {
        "term": "Borrow Checker",
        "def": "Componenta internă a compilatorului Rust responsabilă de validarea regulilor de memorie și lifetime."
      },
      {
        "term": "Lifetime Elision",
        "def": "Set de reguli automate aplicate de compilator pentru a deduce duratele de viață fără adnotare manuală."
      },
      {
        "term": "'static",
        "def": "Durată de viață specială ce acoperă întreaga durată de rulare a programului (ex: string literal stocat în binar)."
      }
    ],
    "matchingPairs": [
      {
        "left": "'a",
        "right": "Adnotare generică de durată de viață"
      },
      {
        "left": "'static",
        "right": "Valid pe întreaga durată a execuției programului"
      },
      {
        "left": "&'a str",
        "right": "Slice de string cu durata de viață delimitată de 'a"
      },
      {
        "left": "Borrow Checker",
        "right": "Garantează absența referințelor orfane la compilare"
      }
    ],
    "quiz": {
      "question": "Ce scop au adnotările de durată de viață precum <'a> în semnăturile funcțiilor Rust?",
      "options": [
        "Informează compilatorul despre relația dintre duratele de viață ale referințelor fără a schimba timpul lor de viață la runtime",
        "Măresc automat durata de viață a variabilelor locale pentru a nu fi de-alocate",
        "Alocă referințele pe Heap în loc de Stack",
        "Activează modul multi-threading pentru funcția respectivă"
      ],
      "correctIndex": 0,
      "explanation": "Adnotările descriu relațiile de dependență dintre referințe astfel încât compilatorul să poată respinge orice apel nesigur."
    },
    "task": "Scrie antetul funcției 'mai_lung' cu durata de viață generică 'a care primește 'x: &'a str' și 'y: &'a str' și returnează '&'a str'.",
    "starterCode": "// Scrie antetul funcției mai_lung:\n",
    "acceptedAnswers": [
      "fn mai_lung<'a>(x: &'a str, y: &'a str) -> &'a str",
      "fn mai_lung<'a>(x: &'a str, y: &'a str) -> &'a str {",
      "fn mai_lung<'a>(x: &'a str, y: &'a str)->&'a str"
    ],
    "officialSolution": "fn mai_lung<'a>(x: &'a str, y: &'a str) -> &'a str",
    "explanation": "Sintaxa este 'fn mai_lung<'a>(x: &'a str, y: &'a str) -> &'a str'.",
    "hint": "Scrie 'fn mai_lung<'a>(x: &'a str, y: &'a str) -> &'a str'."
  },
  {
    "id": "rust-10",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "5. Senior / Arhitect",
    "xp": 50,
    "title": "Capitolul 10: Fearless Concurrency (Thread-uri, Canale mpsc și Arc<Mutex<T>>)",
    "theory": "\n<p>În Rust, concurența este numită <strong>Fearless Concurrency</strong> deoarece modelul de tipuri și ownership detectează greșelile de sincronizare la compilare. Dacă un tip nu poate fi partajat în siguranță între fire de execuție, compilatorul refuză să ruleze codul!</p>\n\n<h4>Cele Două Modele de Concurență:</h4>\n<ol>\n  <li><strong>Message Passing (Canale mpsc - Multiple Producer, Single Consumer):</strong>\n    <pre><code>use std::sync::mpsc;\nuse std::thread;\n\nlet (tx, rx) = mpsc::channel();\nthread::spawn(move || {\n    tx.send(\"Mesaj din thread secundar\").unwrap();\n});\nprintln!(\"Primit: {}\", rx.recv().unwrap());</code></pre>\n  </li>\n  <li><strong>Shared State Concurrency: Arc&lt;Mutex&lt;T&gt;&gt;</strong>\n    <p><code>Arc&lt;T&gt;</code> (Atomic Reference Counting) permite proprietari multipli siguri între thread-uri, iar <code>Mutex&lt;T&gt;</code> oferă acces exclusiv temporar:</p>\n    <pre><code>use std::sync::{Arc, Mutex};\n\nlet contor = Arc::new(Mutex::new(0));\nlet c = Arc::clone(&contor);\n\nlet handle = thread::spawn(move || {\n    let mut num = c.lock().unwrap();\n    *num += 1; // Deblocare automată la ieșirea din scope\n});</code></pre>\n  </li>\n</ol>\n",
    "glossary": [
      {
        "term": "Arc<T>",
        "def": "Atomic Reference Counting: pointer inteligent partajabil în siguranță între multiple fire de execuție."
      },
      {
        "term": "Mutex<T>",
        "def": "Barieră de excludere reciprocă ce protejează datele împotriva accesului concurent nesincronizat."
      },
      {
        "term": "mpsc::channel()",
        "def": "Canal de mesaje 'multi-producer, single-consumer' pentru comunicare izolată între fire de execuție."
      },
      {
        "term": "Send & Sync",
        "def": "Trăsături native automate ce indică dacă un tip poate fi transferat sau partajat în siguranță între thread-uri."
      }
    ],
    "matchingPairs": [
      {
        "left": "Arc<T>",
        "right": "Contor de referințe sigur între thread-uri"
      },
      {
        "left": "Mutex<T>",
        "right": "Asigură acces exclusiv la scriere prin lock()"
      },
      {
        "left": "mpsc::channel()",
        "right": "Canal de transmitere de mesaje sigure"
      },
      {
        "left": "thread::spawn(move || ...)",
        "right": "Lansează un nou fir de execuție al sistemului"
      }
    ],
    "quiz": {
      "question": "Ce se întâmplă cu lock-ul dobândit prin 'let mut gardian = date.lock().unwrap();' când variabila 'gardian' iese din scope?",
      "options": [
        "Lock-ul este eliberat automat prin mecanismul Drop, permițând altor thread-uri să acceseze datele",
        "Rămâne blocat până la închiderea programului (deadlock)",
        "Trebuie apelat manual date.unlock() ca în C",
        "Compilatorul emite o eroare de sincronizare"
      ],
      "correctIndex": 0,
      "explanation": "Tipul MutexGuard implementează trăsătura Drop, garantând că mutexul este deblocat automat chiar dacă funcția returnează anticipat sau eșuează."
    },
    "task": "Obține acces exclusiv de citire/scriere la un Mutex numit 'date' apelând 'date.lock().unwrap();' și stocând gardianul în 'let mut gardian = ...'.",
    "starterCode": "// Obține lock-ul pe date:\nlet mut gardian = ",
    "acceptedAnswers": [
      "let mut gardian = date.lock().unwrap();",
      "date.lock().unwrap();",
      "date.lock().unwrap()"
    ],
    "officialSolution": "let mut gardian = date.lock().unwrap();",
    "explanation": "Sintaxa corectă este 'let mut gardian = date.lock().unwrap();'.",
    "hint": "Scrie 'let mut gardian = date.lock().unwrap();'."
  },
  {
    "id": "rust-11",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "5. Senior / Arhitect",
    "xp": 50,
    "title": "Capitolul 11: Smart Pointers (Box<T>, Rc<T> și RefCell<T>)",
    "theory": "\n<p>Pe lângă referințele simple (<code>&T</code>), Rust dispune de <strong>Smart Pointers (Pointeri Inteligenți)</strong> care conțin metadate și capabilități avansate de gestionare a memoriei:</p>\n\n<h4>1. Box&lt;T&gt; (Alocare Precisă pe Heap)</h4>\n<p>Este cel mai direct mod de a plasa o valoare pe Heap. Este obligatoriu atunci când creăm structuri de date recursive (cum ar fi liste înlănțuite sau arbori binari), unde dimensiunea tipului nu poate fi calculată la compilare:</p>\n<pre><code>enum NodArbore {\n    Frunza(i32),\n    Ramura(Box&lt;NodArbore&gt;, Box&lt;NodArbore&gt;), // Dimensiune finită pe Stack datorită pointerului Box\n}</code></pre>\n\n<h4>2. Rc&lt;T&gt; și RefCell&lt;T&gt;</h4>\n<ul>\n  <li><code>Rc&lt;T&gt;</code> (Reference Counted): permite deținerea aceleiași valori de către mai multe părți ale programului (doar single-threaded).</li>\n  <li><code>RefCell&lt;T&gt;</code>: oferă <em>Interior Mutability</em>, verificând regulile de împrumut (borrowing) dinamic la rulare, nu la compilare.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Box<T>",
        "def": "Pointer inteligent simplu ce alocă date pe Heap; se comportă ca o referință dar deține proprietatea valorii."
      },
      {
        "term": "Rc<T>",
        "def": "Contor de referințe single-threaded ce permite proprietate partajată pe Heap fără clonare profundă."
      },
      {
        "term": "RefCell<T>",
        "def": "Tip ce mută verificarea regulilor de borrowing de la compilare la runtime (Interior Mutability)."
      },
      {
        "term": "Tip Recursiv",
        "def": "Tip de date care conține ca și câmp o altă instanță de același tip; necesită Box pentru a avea o dimensiune calculabilă."
      }
    ],
    "matchingPairs": [
      {
        "left": "Box::new(x)",
        "right": "Alocă valoarea x pe Heap cu proprietar unic"
      },
      {
        "left": "Rc::clone(&x)",
        "right": "Incrementează contorul de referințe fără a copia datele"
      },
      {
        "left": "RefCell<T>",
        "right": "Permite mutarea internă a datelor dintr-o referință imutabilă"
      },
      {
        "left": "Deref / Drop",
        "right": "Trăsăturile fundamentale ce definesc comportamentul unui Smart Pointer"
      }
    ],
    "quiz": {
      "question": "De ce este necesar Box<T> pentru a defini un arbore binar recursiv în Rust?",
      "options": [
        "Pentru că Rust trebuie să cunoască dimensiunea exactă a unui tip pe Stack la compilare, iar Box are o dimensiune fixă de pointer",
        "Pentru că arborii funcționează doar cu Garbage Collection",
        "Pentru a activa accesul asincron în arbore",
        "Este doar o convenție stilistică din Rust"
      ],
      "correctIndex": 0,
      "explanation": "Fără Box, o structură recursivă ar avea dimensiune infinită la compilare. Un Box are mereu dimensiunea fixă a unui pointer (8 octeți pe 64-bit)."
    },
    "task": "Alocă pe Heap valoarea întreagă 42 folosind constructorul 'Box::new(42)' și atribuie-o variabilei 'val'.",
    "starterCode": "// Alocă pe Heap valoarea 42 cu Box::new:\nlet val = ",
    "acceptedAnswers": [
      "let val = Box::new(42);",
      "Box::new(42);",
      "Box::new(42)"
    ],
    "officialSolution": "let val = Box::new(42);",
    "explanation": "Apelul 'let val = Box::new(42);' alocă numărul 42 pe Heap și stochează pointerul inteligent în val.",
    "hint": "Scrie 'let val = Box::new(42);'."
  },
  {
    "id": "rust-12",
    "track": "Rust & Sisteme Moderne",
    "division": "Informatică și Programare",
    "icon": "🦀",
    "level": "5. Senior / Arhitect",
    "xp": 60,
    "title": "Capitolul 12: Proiect Practic: Mini-CLI de Căutare Rapidă în Fișiere (mini-grep)",
    "theory": "\n<p>În acest capitol final integrăm conceptele într-o unealtă CLI completă, de viteză nativă (inspirată din utilitarul clasic <code>grep</code>). Proiectul combină argumentele liniei de comandă, I/O pe fișiere și iteratori funcționali de înaltă performanță.</p>\n\n<h4>Arhitectura Utilitarului mini-grep:</h4>\n<pre><code>use std::env;\nuse std::fs;\nuse std::error::Error;\n\n// Funcție pură de căutare folosind iteratori nativi zero-cost:\npub fn cauta&lt;'a&gt;(interogare: &str, continut: &'a str) -> Vec&lt;&'a str&gt; {\n    continut\n        .lines()\n        .filter(|linie| linie.contains(interogare))\n        .collect()\n}\n\nfn main() -> Result&lt;(), Box&lt;dyn Error&gt;&gt; {\n    let args: Vec&lt;String&gt; = env::args().collect();\n    let interogare = &args[1];\n    let cale = &args[2];\n\n    let continut = fs::read_to_string(cale)?;\n    for potrivire in cauta(interogare, &continut) {\n        println!(\"Găsit: {}\", potrivire);\n    }\n    Ok(())\n}</code></pre>\n",
    "glossary": [
      {
        "term": "env::args()",
        "def": "Iterator ce furnizează argumentele transmise aplicației prin linia de comandă."
      },
      {
        "term": ".lines()",
        "def": "Iterator zero-cost ce împarte un string în linii fără alocări suplimentare pe Heap."
      },
      {
        "term": ".filter()",
        "def": "Adaptor de iterator ce reține doar elementele care satisfac predicatul specificat."
      },
      {
        "term": ".collect()",
        "def": "Metodă ce transformă un iterator într-o colecție concretă (ex: Vec<&str>)."
      }
    ],
    "matchingPairs": [
      {
        "left": "continut.lines()",
        "right": "Iterează linie cu linie fără alocări inutile"
      },
      {
        "left": ".filter(|l| l.contains(q))",
        "right": "Păstrează doar liniile ce conțin interogarea"
      },
      {
        "left": ".collect()",
        "right": "Transformă iteratorul într-un Vector final"
      },
      {
        "left": "fs::read_to_string()",
        "right": "Citește întregul fișier într-un String pe Heap"
      }
    ],
    "quiz": {
      "question": "De ce este utilizarea iteratorilor (.lines().filter().collect()) la fel de rapidă ca o buclă for manuală scrisă în C?",
      "options": [
        "Compilatorul Rust elimină verificările repetitive și vectorizează instrucțiunile mașină prin optimizări zero-cost",
        "Pentru că folosește fire de execuție ascunse pe fundal",
        "Pentru că datele sunt comprimate în memorie",
        "Nu este la fel de rapidă, este mai lentă"
      ],
      "correctIndex": 0,
      "explanation": "Iteratorii din Rust sunt abstracții cu cost zero: sunt transformați la compilare în bucle extrem de optimizate la nivel de registru CPU."
    },
    "task": "Completează lanțul de metode pe 'continut.lines()' filtrând liniile ce conțin 'interogare' și colectându-le într-un Vec: continut.lines().filter(|linie| linie.contains(interogare)).collect();",
    "starterCode": "let rezultate: Vec<&str> = continut.lines()",
    "acceptedAnswers": [
      "continut.lines().filter(|linie| linie.contains(interogare)).collect();",
      "continut.lines().filter(|linie| linie.contains(interogare)).collect()",
      "continut.lines().filter(|line| line.contains(query)).collect();",
      "continut.lines().filter(|l| l.contains(interogare)).collect();"
    ],
    "officialSolution": "continut.lines().filter(|linie| linie.contains(interogare)).collect();",
    "explanation": "Metoda '.filter(...)' filtrează fluxul de date, iar '.collect()' asamblează rezultatul într-un vector fără costuri ascunse.",
    "hint": "Scrie '.filter(|linie| linie.contains(interogare)).collect();'."
  },

  // =========================================================================
  // TRACK 2: RESURSE & PROIECTE OPEN-SOURCE (6 CAPITOLE STRATEGICE)
  // =========================================================================
  {
    "id": "oss-1",
    "track": "Resurse & Proiecte Open-Source",
    "division": "Informatică și Programare",
    "icon": "🧭",
    "level": "1. Ghid de Carieră",
    "xp": 35,
    "title": "Capitolul 1: Trasee de Învățare (Developer Roadmaps: Backend, Frontend și Sisteme)",
    "theory": "\n<p>Unul dintre cele mai populare proiecte GitHub la nivel mondial este <strong>Developer Roadmap</strong> (menținut de <code>kamranahmedse/developer-roadmap</code> / roadmap.sh). Acesta rezolvă problema numărul 1 a studenților: <em>„Ce ar trebui să învăț mai departe și în ce ordine?”</em>.</p>\n\n<h4>Structura Unui Traseu Modern de Backend:</h4>\n<ol>\n  <li><strong>Fundamente Internet & Rețele:</strong> Protocolul HTTP/HTTPS, DNS, găzduire, TLS/SSL, modelul Client-Server.</li>\n  <li><strong>Limbaj de Bază:</strong> Un limbaj cu compilare nativă sau VM rapidă (Rust, Go, Python, Java, C#, Node.js).</li>\n  <li><strong>Gestiunea Versiunilor (Git):</strong> Branching, pull requests, semantic versioning, rebase și convenții de commit.</li>\n  <li><strong>Baze de Date:</strong> Relaționale (PostgreSQL, MySQL) vs Document/Key-Value (Redis, MongoDB), indexare și tranzacții ACID.</li>\n  <li><strong>APIs & Arhitecturi:</strong> RESTful APIs, GraphQL, gRPC, microservicii, WebSockets și API Gateways.</li>\n  <li><strong>DevOps & Livrare:</strong> Containere Docker, orchestratori, pipeline-uri CI/CD (GitHub Actions) și observabilitate.</li>\n</ol>\n",
    "glossary": [
      {
        "term": "Roadmap.sh",
        "def": "Comunitate și depozit open-source ce menține ghiduri vizuale structurate pentru cariere tech."
      },
      {
        "term": "ACID",
        "def": "Proprietăți esențiale ale tranzacțiilor SQL: Atomicitate, Consistență, Izolare și Durabilitate."
      },
      {
        "term": "RESTful API",
        "def": "Arhitectură standard de servicii web bazată pe metode HTTP (GET, POST, PUT, DELETE) și resurse identificate prin URI."
      },
      {
        "term": "CI/CD",
        "def": "Integrare și livrare continuă: automatizarea testelor și a publicării aplicațiilor la fiecare commit."
      }
    ],
    "matchingPairs": [
      {
        "left": "HTTP/HTTPS",
        "right": "Protocolul de comunicare client-server pe web"
      },
      {
        "left": "PostgreSQL",
        "right": "Bază de date relațională robustă cu suport ACID"
      },
      {
        "left": "Redis",
        "right": "Bază de date în memorie pentru caching de mare viteză"
      },
      {
        "left": "Docker",
        "right": "Containerizare pentru medii identice de rulare"
      }
    ],
    "quiz": {
      "question": "De ce recomandă comunitatea Roadmap.sh învățarea protocoalelor (HTTP, DNS) înainte de framework-urile specifice?",
      "options": [
        "Framework-urile se schimbă des, dar fundamentele de rețea și arhitectură rămân valabile decenii întregi",
        "Framework-urile nu folosesc HTTP",
        "Pentru că programarea nu necesită logică",
        "Este o cerință legală a companiilor"
      ],
      "correctIndex": 0,
      "explanation": "Stăpânirea fundamentelor îți permite să înțelegi orice framework modern (React, Django, Spring, Express) în câteva zile."
    },
    "task": "Răspunde cu 'ROADMAP' pentru a confirma însușirea traseului de învățare structurat bazat pe arhitecturi moderne.",
    "starterCode": "// Confirmă cuvântul cheie:\n",
    "acceptedAnswers": [
      "ROADMAP",
      "roadmap",
      "Roadmap"
    ],
    "officialSolution": "ROADMAP",
    "explanation": "Traseele de învățare oferă o hartă predictibilă a progresului tehnic.",
    "hint": "Introdu cuvântul 'ROADMAP'."
  },
  {
    "id": "oss-2",
    "track": "Resurse & Proiecte Open-Source",
    "division": "Informatică și Programare",
    "icon": "🧭",
    "level": "2. Educație Academică",
    "xp": 40,
    "title": "Capitolul 2: Curricula Universitară de Computer Science Open-Source (Ghidul OSSU)",
    "theory": "\n<p>Proiectul <strong>OSSU (Open Source Society University)</strong>, disponibil la <code>ossu/computer-science</code>, reprezintă un curriculum universitar complet de licență în informatică, bazat exclusiv pe cursuri gratuite oferite de universități de elită (MIT, Harvard, Princeton, Stanford).</p>\n\n<h4>Cele 4 Etape ale Formării de Inginer Software Complet:</h4>\n<ol>\n  <li><strong>Introducere în CS (Intro CS):</strong> Gândire computațională, paradigme de programare (funcțională și imperativă), rezolvare de probleme algoritmice.</li>\n  <li><strong>Core CS (Inima Informaticii):</strong>\n    <ul>\n      <li><em>Matematică Discretă & Logică:</em> Teoria grafurilor, combinatorică, logică booleană și inducție.</li>\n      <li><em>Structuri de Date & Algoritmi:</em> Sortare, arbori de căutare, tabele hash, grafuri și complexitate asimptotică.</li>\n      <li><em>Arhitectura Calculatoarelor:</em> De la porți logice NAND la CPU, instrucțiuni Assembly și ierarhia de memorie Cache.</li>\n      <li><em>Sisteme de Operare:</em> Gestionarea memoriei virtuale, paginare, planificarea proceselor (scheduling) și apeluri de sistem (syscalls).</li>\n    </ul>\n  </li>\n  <li><strong>Advanced CS:</strong> Baze de date distribuite, compilatoare, grafică computerizată, securitate cibernetică și inteligență artificială.</li>\n  <li><strong>Proiect Final (Capstone Project):</strong> O aplicație reală, documentată și testată complet.</li>\n</ol>\n",
    "glossary": [
      {
        "term": "OSSU",
        "def": "Open Source Society University: ghid educațional deschis ce reproduce programa de licență CS a marilor universități."
      },
      {
        "term": "Arhitectura Calculatoarelor",
        "def": "Studiul modului în care componentele hardware (CPU, registre, memorie cache) execută codul mașină."
      },
      {
        "term": "Memorie Virtuală",
        "def": "Tehnică a sistemului de operare ce oferă fiecărui proces o adresă continuă de memorie protejată."
      },
      {
        "term": "Capstone Project",
        "def": "Proiect complex independent ce demonstrează stăpânirea holistică a întregii programe de studiu."
      }
    ],
    "matchingPairs": [
      {
        "left": "Intro CS",
        "right": "Gândire computațională și fundamente de programare"
      },
      {
        "left": "Core Systems",
        "right": "Arhitectura calculatoarelor și sisteme de operare"
      },
      {
        "left": "Core Theory",
        "right": "Structuri de date, algoritmi și matematică discretă"
      },
      {
        "left": "Capstone",
        "right": "Proiect practic final demonstrativ"
      }
    ],
    "quiz": {
      "question": "De ce include programa OSSU arhitectura calculatoarelor și sistemele de operare pe lângă simplul scris de cod?",
      "options": [
        "Pentru a înțelege cum interacționează software-ul cu memoria și hardware-ul fizic, scriind cod optimizat și fără erori arhitecturale",
        "Pentru a putea asambla fizic plăci de bază",
        "Pentru a înlocui complet compilatoarele",
        "Este doar o formalitate istorică"
      ],
      "correctIndex": 0,
      "explanation": "Înțelegerea modului în care funcționează CPU-ul, cache-ul și sistemul de operare diferențiază un inginer software de top de un simplu scriitor de scripturi."
    },
    "task": "Răspunde cu 'OSSU' pentru a confirma însușirea modelului universitar open-source.",
    "starterCode": "// Confirmă abrevierea universității open-source:\n",
    "acceptedAnswers": [
      "OSSU",
      "ossu"
    ],
    "officialSolution": "OSSU",
    "explanation": "OSSU este standardul de aur pentru educația autodidactă în Computer Science.",
    "hint": "Introdu 'OSSU'."
  },
  {
    "id": "oss-3",
    "track": "Resurse & Proiecte Open-Source",
    "division": "Informatică și Programare",
    "icon": "🧭",
    "level": "3. Practică Avansată",
    "xp": 45,
    "title": "Capitolul 3: Build Your Own X — Arhitectura Recreării Tehnologiilor de la Zero",
    "theory": "\n<p>Celebrul citat al fizicianului Richard Feynman: <em>„Ce nu pot crea, nu înțeleg”</em> este fundamentul depozitului <strong>Build Your Own X</strong> (<code>codecrafters-io/build-your-own-x</code>). În loc să folosești instrumentele ca pe niște „cutii negre”, înveți cum funcționează recreându-le de la zero.</p>\n\n<h4>Exemple Clasice de Tehnologii Recreate Pas cu Pas:</h4>\n<ul>\n  <li><strong>Construiește propriul Git:</strong>\n    <p>Înțelegi că Git este de fapt o bază de date simplă bazată pe graf aciclic orientat (DAG) și stocare cu adresare prin conținut (<em>content-addressable storage</em>). Obiectele sunt identificate prin hash SHA-1 (<code>blob</code> pentru fișiere, <code>tree</code> pentru foldere, <code>commit</code> pentru snapshot-uri).</p>\n  </li>\n  <li><strong>Construiește propriul Redis:</strong>\n    <p>Implementezi un server TCP asincron cu buclă de evenimente (event loop), un parser pentru protocolul de rețea RESP (Redis Serialization Protocol) și o tabelă de dispersie în memorie.</p>\n  </li>\n  <li><strong>Construiește propriul Docker:</strong>\n    <p>Descoperi că containerele Linux nu sunt mașini virtuale, ci procese obișnuite izolate prin facilitățile nucleului: <code>namespaces</code> (izolare rețea, PID, fișiere) și <code>cgroups</code> (limitare CPU și RAM).</p>\n  </li>\n</ul>\n",
    "glossary": [
      {
        "term": "Content-Addressable Storage",
        "def": "Metodă de stocare în care adresa sau identificatorul unui obiect este determinat de conținutul său (ex: hash SHA-1 în Git)."
      },
      {
        "term": "RESP Protocol",
        "def": "Protocolul simplu bazat pe text folosit de Redis pentru comunicare ultra-rapidă client-server."
      },
      {
        "term": "Linux Namespaces",
        "def": "Funcționalitate a kernelului Linux ce izolează resursele de sistem (procese, rețea, utilizatori) per container."
      },
      {
        "term": "cgroups (Control Groups)",
        "def": "Mecanism Linux ce măsoară și limitează consumul de resurse fizice (memorie, procesor, I/O) al grupurilor de procese."
      }
    ],
    "matchingPairs": [
      {
        "left": "Git",
        "right": "Graf aciclic orientat (DAG) cu adrese hash SHA-1"
      },
      {
        "left": "Redis",
        "right": "Server în memorie bazat pe event loop și protocolul RESP"
      },
      {
        "left": "Docker",
        "right": "Izolare nativă prin Linux namespaces și cgroups"
      },
      {
        "left": "Compilator",
        "right": "Lexer (tokeni) -> Parser (AST) -> Generator cod"
      }
    ],
    "quiz": {
      "question": "Ce este un container Docker din punct de vedere al arhitecturii sistemului de operare Linux?",
      "options": [
        "Un proces nativ standard izolat prin namespaces și restricționat prin cgroups",
        "O mașină virtuală completă cu propriul kernel emulat",
        "Un fișier zip rulat în memorie",
        "Un server hardware separat"
      ],
      "correctIndex": 0,
      "explanation": "Containerele folosesc aceleași nucleu Linux ca gazda, oferind izolare aproape fără penalizare de performanță prin namespaces și cgroups."
    },
    "task": "Răspunde cu 'BUILD' pentru a confirma însușirea metodologiei de construire de la zero a uneltelor.",
    "starterCode": "// Confirmă metodologia:\n",
    "acceptedAnswers": [
      "BUILD",
      "build"
    ],
    "officialSolution": "BUILD",
    "explanation": "Recrearea tehnologiilor de bază este cel mai rapid mod de a dobândi expertiză de nivel arhitectural.",
    "hint": "Introdu 'BUILD'."
  },
  {
    "id": "oss-4",
    "track": "Resurse & Proiecte Open-Source",
    "division": "Informatică și Programare",
    "icon": "🧭",
    "level": "3. Practică Avansată",
    "xp": 45,
    "title": "Capitolul 4: Project-Based Learning — Învățare Aplicată prin Construire de Aplicații",
    "theory": "\n<p>Depozitul <strong>Project-Based Learning</strong> (<code>practical-tutorials/project-based-learning</code>) este cea mai amplă colecție de tutoriale practice organizate pe limbaje de programare (Python, Rust, C++, JavaScript, Go, C#).</p>\n\n<h4>Cum depășești „Tutorial Hell”?</h4>\n<p>„Tutorial Hell” este capcana în care urmărești zeci de ore de video fără a putea scrie un proiect independent de la zero. Metodologia bazată pe proiecte propune parcurgerea unui ciclu complet de inginerie software:</p>\n\n<ol>\n  <li><strong>Specificația Cerințelor:</strong> Definește pe o pagină ce face aplicația și care este intrarea/ieșirea exactă (MVP - Minimum Viable Product).</li>\n  <li><strong>Proiectarea Arhitecturală:</strong> Desenează schema bazei de date și contractul API înainte de a scrie cod.</li>\n  <li><strong>Implementare Incrementală:</strong> Construiește mai întâi nucleul funcțional (core engine), apoi interfața sau endpoint-urile web.</li>\n  <li><strong>Testare Automată:</strong> Adaugă teste unitare pentru a preveni regresiile la modificări ulterioare.</li>\n  <li><strong>Publicare & Documentare:</strong> Scrie un README impecabil cu pași clari de instalare și exemple concrete de utilizare.</li>\n</ol>\n",
    "glossary": [
      {
        "term": "Tutorial Hell",
        "def": "Starea în care un programator poate reproduce exemple asistate, dar întâmpină blocaje la crearea unui proiect autonom."
      },
      {
        "term": "MVP",
        "def": "Minimum Viable Product: versiunea simplificată a unei aplicații ce include doar funcționalitățile esențiale."
      },
      {
        "term": "Test Unitar",
        "def": "Test automat ce verifică funcționarea corectă a unei singure funcții sau componente izolate."
      },
      {
        "term": "README.md",
        "def": "Documentul principal al unui depozit open-source ce explică scopul, configurarea și modul de rulare a proiectului."
      }
    ],
    "matchingPairs": [
      {
        "left": "MVP",
        "right": "Versiunea minimală funcțională pentru validarea ideii"
      },
      {
        "left": "Testare Unitară",
        "right": "Validarea comportamentului componentelor izolate"
      },
      {
        "left": "README.md",
        "right": "Ghidul complet de utilizare și documentare al proiectului"
      },
      {
        "left": "Project-Based Learning",
        "right": "Învățare prin rezolvarea de provocări concrete de dezvoltare"
      }
    ],
    "quiz": {
      "question": "Care este primul pas recomandat în ingineria software înainte de scrierea propriu-zisă a codului unui proiect nou?",
      "options": [
        "Definirea specificațiilor clare și a arhitecturii de date/API",
        "Alegerea celor mai noi biblioteci de animații",
        "Cumpărarea unui domeniu web",
        "Scrierea a sute de linii de cod fără plan"
      ],
      "correctIndex": 0,
      "explanation": "Clarificarea specificațiilor și proiectarea arhitecturii previn refactorizările majore și confuzia în etapele avansate ale proiectului."
    },
    "task": "Răspunde cu 'PROJECT' pentru a confirma adoptarea învățării bazate pe proiecte reale.",
    "starterCode": "// Confirmă abordarea:\n",
    "acceptedAnswers": [
      "PROJECT",
      "project"
    ],
    "officialSolution": "PROJECT",
    "explanation": "Construirea de proiecte concrete este cea mai eficientă cale către competența practică profesională.",
    "hint": "Introdu 'PROJECT'."
  },
  {
    "id": "oss-5",
    "track": "Resurse & Proiecte Open-Source",
    "division": "Informatică și Programare",
    "icon": "🧭",
    "level": "4. Instrumente Profesionale",
    "xp": 50,
    "title": "Capitolul 5: The Missing Semester (MIT) — Unelte Esențiale: Terminal, Git & Debugging",
    "theory": "\n<p>Creat de lectori și cercetători de la MIT (<code>missing-semester/missing-semester</code>), acest curs abordează subiectele pe care facultățile le presupun adesea ca fiind deja știute, dar pe care rareori le predau explicit: <strong>uneltele profesionale de lucru</strong>.</p>\n\n<h4>Uneltele Esențiale ale unui Dezvoltator Modern:</h4>\n<ul>\n  <li><strong>Terminal & Shell Scripting:</strong> Stăpânirea comenzilor de manipulare text (<code>grep</code>, <code>sed</code>, <code>awk</code>), redirecționarea fluxurilor (<code>|</code>, <code>&gt;</code>, <code>2&gt;&1</code>) și utilizarea <code>xargs</code> pentru procesare în masă.</li>\n  <li><strong>Git Plumbing & Reparare:</strong>\n    <ul>\n      <li><code>git bisect</code>: căutare binară automată pentru identificarea commit-ului exact care a introdus un bug.</li>\n      <li><code>git reflog</code>: jurnalul de siguranță al tuturor mișcărilor HEAD, salvatorul în situațiile în care ai șters accidental un branch.</li>\n      <li><code>git rebase -i</code>: rescrierea curată a istoricului înainte de pull request.</li>\n    </ul>\n  </li>\n  <li><strong>Securitate & SSH:</strong> Autentificare prin chei asimetrice (Ed25519), fișierul de configurare <code>~/.ssh/config</code> și SSH tunneling.</li>\n  <li><strong>Profiling & Debugging:</strong> Folosirea debuggerelor (GDB, LLDB), analiza apelurilor de sistem cu <code>strace</code> și identificarea zonelor lente de cod prin flame graphs.</li>\n</ul>\n",
    "glossary": [
      {
        "term": "Missing Semester",
        "def": "Curs MIT celebru ce acoperă instrumentele practice de productivitate, CLI, debugging și automatizare."
      },
      {
        "term": "git bisect",
        "def": "Comandă Git ce folosește căutarea binară pentru a localiza automat commit-ul responsabil de o defecțiune."
      },
      {
        "term": "git reflog",
        "def": "Jurnal complet de referințe locale ce ține evidența fiecărei modificări a vârfului de branch (HEAD)."
      },
      {
        "term": "strace",
        "def": "Instrument de diagnosticare pe Linux ce interceptează și înregistrează toate apelurile de sistem (syscalls) făcute de un proces."
      }
    ],
    "matchingPairs": [
      {
        "left": "git bisect",
        "right": "Căutare binară a commit-ului cu bug"
      },
      {
        "left": "git reflog",
        "right": "Recuperarea commit-urilor pierdute sau a branch-urilor șterse"
      },
      {
        "left": "sed & awk",
        "right": "Procesare avansată de fluxuri de text în terminal"
      },
      {
        "left": "strace",
        "right": "Monitorizarea apelurilor de sistem ale unui proces"
      }
    ],
    "quiz": {
      "question": "Ce comandă Git te poate salva dacă ai executat un 'git reset --hard' din greșeală și ai pierdut ultimele commit-uri?",
      "options": [
        "git reflog (pentru a găsi hash-ul commit-ului din istoric și a reveni la el)",
        "git delete",
        "git push --force",
        "Nu se mai poate recupera nimic"
      ],
      "correctIndex": 0,
      "explanation": "Git păstrează toate referințele recente în reflog timp de săptămâni, permițând recuperarea oricărei stări chiar și după resetare dură."
    },
    "task": "Răspunde cu 'MIT' pentru a confirma importanța stăpânirii uneltelor de terminal și depanare.",
    "starterCode": "// Confirmă sursa cursului MIT Missing Semester:\n",
    "acceptedAnswers": [
      "MIT",
      "mit"
    ],
    "officialSolution": "MIT",
    "explanation": "Instrumentele de lucru eficiente cresc productivitatea unui inginer software de zeci de ori.",
    "hint": "Introdu 'MIT'."
  },
  {
    "id": "oss-6",
    "track": "Resurse & Proiecte Open-Source",
    "division": "Informatică și Programare",
    "icon": "🧭",
    "level": "4. Instrumente Profesionale",
    "xp": 50,
    "title": "Capitolul 6: The Algorithms & Optimizări Big-O — Analiza Structurilor de Date",
    "theory": "\n<p>Organizația open-source <strong>The Algorithms</strong> (<code>TheAlgorithms</code> pe GitHub) menține cele mai curate și complete implementări educaționale de algoritmi și structuri de date în peste 30 de limbaje.</p>\n\n<h4>Ghidul Rapid al Complexității Big-O:</h4>\n<table style=\"width:100%; border-collapse: collapse; margin-top: 1rem;\">\n  <thead>\n    <tr style=\"background: rgba(0,0,0,0.05); text-align: left;\">\n      <th style=\"padding: 8px; border: 1px solid #ccc;\">Complexitate</th>\n      <th style=\"padding: 8px; border: 1px solid #ccc;\">Nume</th>\n      <th style=\"padding: 8px; border: 1px solid #ccc;\">Exemplu Clasat</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\"><code>O(1)</code></td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Timp Constant</td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Căutare după cheie în HashMap sau acces direct la tablou prin index</td>\n    </tr>\n    <tr>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\"><code>O(log n)</code></td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Logaritmic</td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Căutare Binară (Binary Search) într-un tablou sortat</td>\n    </tr>\n    <tr>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\"><code>O(n)</code></td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Liniar</td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Parcurgerea completă a unei liste pentru găsirea valorii maxime</td>\n    </tr>\n    <tr>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\"><code>O(n log n)</code></td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Liniar-Logaritmic</td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Algoritmi eficienți de sortare: Merge Sort, Quick Sort, Tim Sort</td>\n    </tr>\n    <tr>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\"><code>O(n^2)</code></td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Pătratic</td>\n      <td style=\"padding: 8px; border: 1px solid #ccc;\">Bucle imbricate ineficiente: Bubble Sort, verificarea tuturor perechilor</td>\n    </tr>\n  </tbody>\n</table>\n",
    "glossary": [
      {
        "term": "The Algorithms",
        "def": "Cea mai mare bibliotecă open-source de algoritmi implementați în toate limbajele majore."
      },
      {
        "term": "Notația Big-O",
        "def": "Reprezentare matematică ce măsoară modul în care crește timpul de execuție sau memoria pe măsură ce crește volumul de date."
      },
      {
        "term": "Căutare Binară",
        "def": "Algoritm ce împarte la doi intervalul de căutare la fiecare pas, având complexitate O(log n)."
      },
      {
        "term": "Two Pointers",
        "def": "Tehnică algoritmică ce folosește doi indici independenți pentru a reduce complexitatea de la O(n^2) la O(n)."
      }
    ],
    "matchingPairs": [
      {
        "left": "O(1)",
        "right": "Acces direct prin index sau cheie în hash map"
      },
      {
        "left": "O(log n)",
        "right": "Căutare binară în tablou ordonat"
      },
      {
        "left": "O(n log n)",
        "right": "Sortare optimă (Merge Sort / Quick Sort)"
      },
      {
        "left": "O(n^2)",
        "right": "Sortare naivă cu două bucle imbricate (Bubble Sort)"
      }
    ],
    "quiz": {
      "question": "De câte comparații maxime are nevoie algoritmul Binary Search O(log n) pentru a găsi un număr într-o listă sortată de 1.000.000 de elemente?",
      "options": [
        "Aproximativ 20 de comparații (deoarece 2^20 ≈ 1.048.576)",
        "1.000.000 de comparații",
        "500.000 de comparații",
        "10.000 de comparații"
      ],
      "correctIndex": 0,
      "explanation": "Deoarece intervalul este înjumătățit la fiecare pas, log2(1.000.000) este mai mic de 20 de pași, demonstrând puterea uriașă a algoritmilor eficienți."
    },
    "task": "Răspunde cu 'ALGO' pentru a confirma însușirea conceptelor de complexitate și algoritmi eficienți.",
    "starterCode": "// Confirmă cuvântul cheie:\n",
    "acceptedAnswers": [
      "ALGO",
      "algo"
    ],
    "officialSolution": "ALGO",
    "explanation": "Înțelegerea complexității Big-O este indispensabilă pentru scrierea de sisteme performante și scalabile.",
    "hint": "Introdu 'ALGO'."
  }
];
