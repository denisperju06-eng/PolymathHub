# -*- coding: utf-8 -*-
"""
Generator for TypeScript & React mega curriculum expansion (13 comprehensive lessons).
Covers Primitive Types & unknown vs any, interface vs type, Generics, Component Props,
useState, useEffect, useRef, SyntheticEvent, useCallback/useMemo, Utility Types,
Custom Type Guards, Discriminated Unions, and Zustand State Management.
Each lesson features rich <pre><code>...</code></pre> code blocks, runnable examples, and precise tasks.
"""

def get_ts_react_lessons():
    return [
        {
            "id": "ts-new-1",
            "track": "TypeScript & React",
            "division": "Informatică și Programare",
            "icon": "⚛️",
            "level": "1. Începător",
            "xp": 30,
            "title": "Capitolul 1: Fundamente TypeScript — Adnotări Primitive & 'unknown' vs 'any'",
            "theory": """
<p>TypeScript adaugă un sistem static de verificare a tipurilor peste JavaScript la momentul compilării (Type Erasure), prevenind erorile înainte ca aplicația să ajungă în producție.</p>

<h4>1. Tipuri Primitive & 'any'</h4>
<p>Tipurile de bază sunt <code>number</code>, <code>string</code>, <code>boolean</code>, <code>null</code> și <code>undefined</code>. Folosirea tipului <code>any</code> dezactivează complet verificatorul de tipuri, fiind un anti-pattern.</p>

<h4>2. Exemplu Practic: unknown vs any și Type Narrowing</h4>
<pre><code>// 1. Primitive de bază:
const age: number = 28;
const username: string = "alex";
const isActive: boolean = true;

// 2. any este periculos - permite orice metodă invalidă:
let anyVal: any = "salut";
// anyVal.nuExista(); // Compilatorul nu avertizează -> Crash la rulare!

// 3. unknown este type-safe - impune verificare (type narrowing):
let input: unknown = "hello";

if (typeof input === "string") {
    // În interiorul acestui bloc, TypeScript știe garantat că input este string:
    console.log(input.toUpperCase()); // HELLO
}
</code></pre>
""",
            "glossary": [
                {"term": "Type Erasure", "def": "Procesul prin care compilatorul tsc elimină toate adnotările de tipuri, rezultând JavaScript nativ curat."},
                {"term": "any", "def": "Tip ce dezactivează complet verificările de tip; acceptă orice operație fără alertă de eroare."},
                {"term": "unknown", "def": "Tip universal type-safe; impune validarea tipului prin type narrowing înainte de utilizare."},
                {"term": "Type Inference", "def": "Capacitatea compilatorului TypeScript de a deduce automat tipul unei variabile din valoarea inițială."}
            ],
            "matchingPairs": [
                {"left": "let x: unknown", "right": "Valoare cu tip necunoscut ce impune verificare"},
                {"left": "let x: any", "right": "Dezactivează complet sistemul de tipuri"},
                {"left": "const id: number = 42", "right": "Adnotare explicită de număr"},
                {"left": "typeof val === 'string'", "right": "Type guard nativ pentru restrângerea tipului"}
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
            "theory": """
<p>În TypeScript, definirea formei unui obiect (object shape) se poate realiza prin <code>interface</code> sau <code>type</code>.</p>

<h4>1. Când folosim 'interface' și când folosim 'type'?</h4>
<p>Interfețele sunt extensibile prin moștenire (<code>interface Admin extends User</code>) și suportă <em>declaration merging</em>. Type aliases sunt ideale pentru uniuni literale de tipuri, primitive compuse sau tupluri.</p>

<h4>2. Exemplu Complet de Interfețe și Tipuri</h4>
<pre><code>// 1. Interfață extensibilă pentru obiecte:
interface UserProfile {
    id: number;
    username: string;
}

interface AdminProfile extends UserProfile {
    permissions: string[];
}

// 2. Type Alias pentru uniuni și tupluri:
type Status = "idle" | "loading" | "success" | "error";
type Coordinates = [latitude: number, longitude: number];

const user: UserProfile = { id: 101, username: "maria" };
const currentStatus: Status = "success";
</code></pre>
""",
            "glossary": [
                {"term": "interface", "def": "Definiție de contract structural pentru obiecte, extensibilă prin extends și merging."},
                {"term": "Type Alias (type)", "def": "Nume atribuit oricărui tip (obiect, uniune, primitivă, tuplu)."},
                {"term": "Declaration Merging", "def": "Capacitatea TypeScript de a îmbina automat două declarații cu același nume de interfață."},
                {"term": "Union Type (|)", "def": "Tip ce permite unei valori să fie una din mai multe variante prestabilite."}
            ],
            "matchingPairs": [
                {"left": "interface User { id: string }", "right": "Contract structural extensibil pentru obiecte"},
                {"left": "type Status = 'ok' | 'fail'", "right": "Uniune de valori literale string"},
                {"left": "interface Admin extends User", "right": "Moștenire directă de proprietăți între interfețe"},
                {"left": "type Point = [number, number]", "right": "Definire a unui tuplu cu lungime fixă"}
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
            "theory": """
<p>Genericele permit crearea de componente software reutilizabile care funcționează cu o varietate de tipuri fără a sacrifica verificarea statică.</p>

<h4>1. Funcții Generice și Constrângeri</h4>
<p>Sintaxa <code>function wrap<T>(value: T): { data: T }</code> introduce parametrul de tip <code>T</code> care capturează automat tipul exact de date.</p>

<h4>2. Exemplu Complet de Funcții și Interfețe Generice</h4>
<pre><code>// 1. Funcție generică simplă:
function wrap<T>(value: T): { data: T } {
    return { data: value };
}

const numBox = wrap(42);         // Tip dedus automat: { data: number }
const strBox = wrap("react");    // Tip dedus automat: { data: string }

// 2. Interfață generică pentru răspunsuri de rețea:
interface ApiResponse<T> {
    success: boolean;
    payload: T;
}

const userRes: ApiResponse<{ name: string }> = {
    success: true,
    payload: { name: "Elena" }
};
</code></pre>
""",
            "glossary": [
                {"term": "Generic (<T>)", "def": "Variabilă de tip ce permite abstratizarea logicii peste tipuri de date diferite."},
                {"term": "Generic Constraint (extends)", "def": "Limitare impusă unui tip generic pentru a garanta existența anumitor metode sau atribute."},
                {"term": "Type Argument Inference", "def": "Deducerea automată a tipului generic de către compilator din argumentele de apel."},
                {"term": "Generic Interface", "def": "Interfață ce acceptă parametri de tip (ex: ApiResponse<T>)."}
            ],
            "matchingPairs": [
                {"left": "function wrap<T>(val: T): T", "right": "Păstrează tipul exact al valorii transmise"},
                {"left": "<T extends HasId>", "right": "Constrânge tipul generic să aibă proprietatea cerută"},
                {"left": "interface ApiResponse<T>", "right": "Răspuns API cu payload dinamic tipizat"},
                {"left": "const list = new Array<string>()", "right": "Instanțiere a unei colecții generice de stringuri"}
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
            "theory": """
<p>În React cu TypeScript, componentele moderne sunt funcții pure care primesc proprietăți tipizate (Props) și returnează un element JSX (<code>JSX.Element</code> sau <code>React.ReactNode</code>).</p>

<h4>1. Exemplu de Componentă cu Props Tipizate</h4>
<pre><code>interface GreetingProps {
    name: string;
    badge?: string; // Proprietate opțională
}

export function Greeting({ name }: { name: string }) {
    return <h1>{name}</h1>;
}

// Utilizare în JSX cu verificare statică:
<Greeting name="Andrei" />
</code></pre>

<h4>2. React.ReactNode pentru Children</h4>
<p>Pentru containere care înglobează elemente copii, folosim tipul <code>React.ReactNode</code>: <code>interface CardProps { children: React.ReactNode; }</code>.</p>
""",
            "glossary": [
                {"term": "Props Interface", "def": "Definiție clară a tuturor atributelor pe care o componentă React le poate primi de la părinte."},
                {"term": "Optional Prop (?)", "def": "Proprietate care nu este obligatorie la instanțierea componentei în JSX."},
                {"term": "React.ReactNode", "def": "Tip ce cuprinde orice element randabil în React (JSX, string, număr, null, array)."},
                {"term": "JSX.Element", "def": "Tipul returnat de o componentă React ce reprezintă un nod virtual în Virtual DOM."}
            ],
            "matchingPairs": [
                {"left": "interface Props { title: string }", "right": "Contract de date primit de componentă"},
                {"left": "disabled?: boolean", "right": "Proprietate opțională ce poate fi omisă"},
                {"left": "children: React.ReactNode", "right": "Tipizează conținutul imbricat între etichete JSX"},
                {"left": "function Card({ title }: Props)", "right": "Componentă funcțională cu props destructurate"}
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
            "theory": """
<p>Hook-ul <code>useState</code> gestionează starea internă a unei componente. Pentru stări primitive simple, TypeScript deduce automat tipul (ex: <code>useState(0)</code> deduce <code>number</code>).</p>

<h4>1. Generice Explicite și Actualizări Funcționale</h4>
<pre><code>import { useState } from "react";

export function SearchFilter() {
    // Declarare explicită a stării tipizate generic cu string:
    const [query, setQuery] = useState<string>("");

    // Actualizare funcțională pentru a evita stale closures:
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={increment}>Contor: {count}</button>
        </div>
    );
}
</code></pre>
""",
            "glossary": [
                {"term": "useState<T>", "def": "Hook React ce declară o variabilă de stare locală cu tip static garantat T."},
                {"term": "Functional Update", "def": "Actualizarea stării prin transmiterea unui callback (prev => next) pentru a evita stări învechite."},
                {"term": "State Batching", "def": "Optimizare React ce grupează multiple modificări de stare într-o singură randare."},
                {"term": "Nullable State", "def": "Stare inițializată cu null înainte de finalizarea încărcării datelor prin rețea."}
            ],
            "matchingPairs": [
                {"left": "useState<User | null>(null)", "right": "Stare complexă ce pornește goală"},
                {"left": "setCount(prev => prev + 1)", "right": "Actualizare sigură pe baza stării anterioare"},
                {"left": "useState<string[]>([])", "right": "Stare inițializată cu o listă goală de stringuri"},
                {"left": "const [val, setVal] = useState(false)", "right": "Inferență automată a tipului boolean"}
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
            "theory": """
<p>Hook-ul <code>useEffect</code> gestionează efecte secundare (side effects): sincronizări cu serverul, abonamente la WebSockets sau manipulări directe de timere.</p>

<h4>1. Exemplu Complet de useEffect cu Cleanup</h4>
<pre><code>import { useState, useEffect } from "react";

export function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Tabloul gol [] asigură rularea exclusiv la montare:
        fetchData();

        // Funcția de curățare returnată la demontare:
        return () => {
            console.log("Component unmounted - cleanup resources");
        };
    }, []);

    return <div>{JSON.stringify(data)}</div>;
}
</code></pre>
""",
            "glossary": [
                {"term": "useEffect", "def": "Hook ce execută cod după finalizarea ciclului de randare pe ecran."},
                {"term": "Dependency Array", "def": "Listă de variabile urmărite de React pentru a decide dacă efectul trebuie redeclanșat."},
                {"term": "Cleanup Function", "def": "Funcție returnată din useEffect pentru a anula abonamente, timere sau request-uri active."},
                {"term": "Stale Closure", "def": "Efect secundar care capturează variabile cu valori învechite din cauza lipsei din lista de dependențe."}
            ],
            "matchingPairs": [
                {"left": "useEffect(() => {}, [])", "right": "Rulează o singură dată la montarea componentei"},
                {"left": "return () => clearInterval(id)", "right": "Curăță timerul la demontare sau re-randare"},
                {"left": "[searchTerm]", "right": "Declanșează efectul doar la schimbarea termenului"},
                {"left": "AbortController", "right": "Anulează cererea fetch activă în cleanup"}
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
            "theory": """
<p>Hook-ul <code>useRef</code> returnează un obiect mutabil <code>{ current: initialValue }</code> a cărui proprietate persistă pe întreaga durată de viață a componentei fără a declanșa re-randare la modificare.</p>

<h4>1. Exemplu de Focalizare DOM cu useRef</h4>
<pre><code>import { useRef } from "react";

export function AutoFocusInput() {
    // Declarare referință tipizată pentru nodul DOM:
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        // Acces sigur cu optional chaining:
        inputRef.current?.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Scrie aici..." />
            <button onClick={handleFocus}>Focalizează Input</button>
        </div>
    );
}
</code></pre>
""",
            "glossary": [
                {"term": "useRef<T>", "def": "Hook ce păstrează o valoare mutabilă persistentă sau o referință către un nod real din DOM."},
                {"term": "HTMLInputElement", "def": "Interfață DOM TypeScript ce descrie proprietățile native ale unei etichete <input>."},
                {"term": "ref.current", "def": "Proprietatea mutabilă unică ce conține valoarea stocată în ref."},
                {"term": "Non-rendering State", "def": "Date a căror modificare nu trebuie să reflecte schimbări vizuale în UI."}
            ],
            "matchingPairs": [
                {"left": "useRef<HTMLInputElement>(null)", "right": "Referință tipizată pentru un câmp de input text"},
                {"left": "inputRef.current?.focus()", "right": "Focalizează elementul folosind optional chaining"},
                {"left": "timerRef.current = setInterval(...)", "right": "Stochează ID-ul timerului fără a re-randa ecranul"},
                {"left": "<div ref={containerRef}>", "right": "Leagă nodul DOM real de obiectul ref"}
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
            "theory": """
<p>React folosește un sistem de evenimente sintetice (<code>SyntheticEvent</code>) care normalizează comportamentul evenimentelor native de browser între diferite platforme.</p>

<h4>1. Exemplu de Handler Tipizat cu React.ChangeEvent</h4>
<pre><code>import { useState } from "react";

export function ControlledInput() {
    const [value, setValue] = useState("");

    // Eveniment tipizat exact pentru câmpul de text:
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return <input value={value} onChange={handleChange} />;
}
</code></pre>
""",
            "glossary": [
                {"term": "SyntheticEvent", "def": "Wrapper React peste evenimentul nativ al browserului cu compatibilitate cross-browser."},
                {"term": "ChangeEvent<T>", "def": "Eveniment declanșat la modificarea valorii unui element de formular de tipul T."},
                {"term": "FormEvent<T>", "def": "Eveniment asociat acțiunilor pe formulare (ex: onSubmit)."},
                {"term": "e.preventDefault()", "def": "Metodă ce anulează comportamentul implicit al browserului (ex: reîncărcarea paginii la submit)."}
            ],
            "matchingPairs": [
                {"left": "React.ChangeEvent<HTMLInputElement>", "right": "Eveniment tipizat de tastare într-un input"},
                {"left": "React.FormEvent<HTMLFormElement>", "right": "Eveniment tipizat de trimitere a formularului"},
                {"left": "React.MouseEvent<HTMLButtonElement>", "right": "Eveniment tipizat de click pe buton"},
                {"left": "e.preventDefault()", "right": "Oprește reîncărcarea automată a paginii web"}
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
            "theory": """
<p>În React, fiecare re-randare recreează funcțiile și recalculează valorile locale. Hook-urile <code>useMemo</code> și <code>useCallback</code> stabilizează referințele pentru a evita munca redundantă.</p>

<h4>1. Exemplu de Stabilizare a Funcțiilor cu useCallback</h4>
<pre><code>import { useCallback } from "react";

export function SaveButton({ data }: { data: string }) {
    // Reține aceeași adresă de memorie pentru funcție atâta timp cât 'data' este identic:
    const handleSave = useCallback(() => {
        save(data);
    }, [data]);

    return <button onClick={handleSave}>Salvează</button>;
}
</code></pre>
""",
            "glossary": [
                {"term": "useCallback", "def": "Hook ce memorează o instanță de funcție între randări pe baza dependențelor."},
                {"term": "useMemo", "def": "Hook ce memorează rezultatul calculat al unei funcții pentru a preveni recalculări costisitoare."},
                {"term": "Referential Equality", "def": "Verificarea dacă două variabile indică spre exact aceeași adresă de memorie (===)."},
                {"term": "Memoization", "def": "Tehnică de optimizare ce reține rezultatele apelurilor anterioare asociate aceluiași set de intrări."}
            ],
            "matchingPairs": [
                {"left": "useCallback(fn, [deps])", "right": "Păstrează referința identică a funcției"},
                {"left": "useMemo(() => compute(), [deps])", "right": "Stochează rezultatul valoric al calculului"},
                {"left": "React.memo(Component)", "right": "Evită re-randarea dacă props nu s-au schimbat"},
                {"left": "Expensive Sort / Filter", "right": "Caz ideal pentru optimizare prin useMemo"}
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
            "theory": """
<p>TypeScript include un set puternic de tipuri utilitare globale (Utility Types) care permit transformarea și derivarea dinamică a tipurilor existente.</p>

<h4>1. Exemplu de Pick, Omit și Partial</h4>
<pre><code>interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
}

// Selectează strict proprietățile 'id' și 'username':
type UserPreview = Pick<User, "id" | "username">;

// Elimină cheia privată:
type SafeUser = Omit<User, "passwordHash">;

// Face toate câmpurile opționale pentru actualizări parțiale (PATCH):
type UpdateUserDto = Partial<User>;
</code></pre>
""",
            "glossary": [
                {"term": "Partial<T>", "def": "Creează un tip cu toate proprietățile lui T marcate ca opționale (?)."},
                {"term": "Required<T>", "def": "Creează un tip eliminând opționalitatea tuturor proprietăților din T."},
                {"term": "Pick<T, K>", "def": "Construiește un tip selectând doar un subset K de chei din T."},
                {"term": "Omit<T, K>", "def": "Construiește un tip excluzând un subset K de chei din T."}
            ],
            "matchingPairs": [
                {"left": "Partial<User>", "right": "Toate proprietățile devin opționale"},
                {"left": "Omit<User, 'id'>", "right": "Tipul User fără proprietatea 'id'"},
                {"left": "Pick<User, 'name' | 'email'>", "right": "Selectează strict câmpurile 'name' și 'email'"},
                {"left": "Record<string, User>", "right": "Tabelă hash cu chei string și valori User"}
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
            "theory": """
<p>TypeScript realizează analiza fluxului de control (Control Flow Analysis) pentru a restrânge tipul unei variabile în interiorul blocurilor condiționale.</p>

<h4>1. Exemplu de Type Guard Personalizat ('val is string')</h4>
<pre><code>// Funcție de gardă de tip ce garantează compilatorului tipul verificat:
function isString(val: unknown): val is string {
    return typeof val === "string";
}

function processInput(input: unknown) {
    if (isString(input)) {
        // În acest bloc, input este garantat tratat ca string:
        console.log("Lungime:", input.length);
    } else {
        console.log("Nu este string");
    }
}
</code></pre>
""",
            "glossary": [
                {"term": "Type Guard", "def": "Expresie booleană ce efectuează verificarea tipului la runtime pentru a restrânge tipul static."},
                {"term": "Type Predicate (arg is T)", "def": "Semnătură specială de retur a unei funcții ce informează compilatorul despre tipul verificat."},
                {"term": "Control Flow Analysis", "def": "Mecanismul intern al TypeScript prin care tipurile evoluează pe baza structurii condiționale if/else."},
                {"term": "Discriminated Property ('in')", "def": "Operator nativ JavaScript utilizat pentru a verifica prezența unei chei într-un obiect."}
            ],
            "matchingPairs": [
                {"left": "function isDog(a: Animal): a is Dog", "right": "Type predicate personalizat"},
                {"left": "typeof val === 'number'", "right": "Type guard nativ pentru tipuri primitive"},
                {"left": "item instanceof HTMLElement", "right": "Type guard bazat pe prototipul clasei"},
                {"left": "'swim' in pet", "right": "Verificare a existenței metodei pe obiect"}
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
            "theory": """
<p>Reprezentarea stării cu multiple flag-uri booleene independente conduce la stări imposibile (Impossible States). <strong>Discriminated Unions</strong> rezolvă definitiv această problemă.</p>

<h4>1. Exemplu de Discriminated Union și Reducer</h4>
<pre><code>type Action = 
  | { type: "ADD"; amount: number }
  | { type: "RESET" };

function counterReducer(state: number, action: Action): number {
    switch (action.type) {
        case "ADD":
            return state + action.amount;
        case "RESET":
            return 0;
        default:
            const _exhaustive: never = action;
            return state;
    }
}
</code></pre>
""",
            "glossary": [
                {"term": "Discriminated Union", "def": "Uniune de tipuri de obiecte ce dețin o proprietate comună cu valoare literală unică."},
                {"term": "Impossible State", "def": "Combinație invalidă de variabile de stare ce nu ar trebui să poată exista în aplicație."},
                {"term": "Exhaustive Check (never)", "def": "Tehnică ce provoacă eroare la compilare dacă o nouă variantă a uniunii nu este tratată în switch."},
                {"term": "Tagged Union", "def": "Denumire alternativă pentru uniunile discriminate pe bază de etichetă literală."}
            ],
            "matchingPairs": [
                {"left": "status: 'idle' | 'loading'", "right": "Proprietate discriminantă cu tipuri literale"},
                {"left": "const _check: never = state", "right": "Garantează tratarea tuturor cazurilor la compilare"},
                {"left": "state.status === 'success'", "right": "Deblochează accesul type-safe la proprietatea .data"},
                {"left": "Impossible States", "right": "Anihilate prin modelarea riguroasă a stărilor"}
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
            "theory": """
<p><strong>Zustand</strong> este biblioteca preferată în ecosistemul modern React pentru gestionarea stării globale, eliminând boilerplate-ul Redux și problemele de performanță cauzate de re-randările Context API-ului.</p>

<h4>1. Exemplu Complet de Store Zustand cu TypeScript</h4>
<pre><code>import { create } from "zustand";

interface AppState {
    user: string | null;
    count: number;
    setUser: (name: string) => void;
    increment: () => void;
}

export const useAppStore = create<AppState>()((set) => ({
    user: null,
    count: 0,
    setUser: (name) => set({ user: name }),
    increment: () => set((state) => ({ count: state.count + 1 })),
}));

// Consumare în componentă cu selector atomic (performanță maximă):
export function UserProfile() {
    const user = useAppStore(state => state.user);
    return <div>Utilizator: {user || "Anonim"}</div>;
}
</code></pre>
""",
            "glossary": [
                {"term": "Zustand", "def": "Soluție minimalistă și rapidă de state management pentru React bazată pe pub/sub fără Context Provider."},
                {"term": "Atomic Selector", "def": "Funcție (state => state.val) ce izolează componenta de re-randările inutile din restul stării globale."},
                {"term": "set((state) => ({ ... }))", "def": "Funcție de mutație ce realizează shallow merge pe obiectul de stare."},
                {"term": "Store Hook", "def": "Hook custom returnat de create() ce poate fi apelat în orice componentă fără wrapping în Provider."}
            ],
            "matchingPairs": [
                {"left": "create<AppState>()((set) => ...)", "right": "Inițializează store-ul global tipizat"},
                {"left": "useStore(state => state.user)", "right": "Selector atomic pentru re-randare optimă"},
                {"left": "set(state => ({ count: state.count + 1 }))", "right": "Actualizează starea prin shallow merge"},
                {"left": "Fără Provider wrapping", "right": "Zustand funcționează independent de arborele React"}
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
        }
    ]
