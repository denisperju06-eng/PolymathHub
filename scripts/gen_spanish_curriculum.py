# -*- coding: utf-8 -*-
"""
Curriculum complet de Limba Spaniolă — de la Zero absolut (A1) până la Măiestrie (C2).
Structurat pe 3 module canonice:
- Modulul 1 (A1-A2): 25 capitole (Pronume, verbe auxiliare ser/estar/tener, numere, negație, întrebări, vocabular de bază)
- Modulul 2 (B1-B2): 13 capitole (Trecut indefinido/imperfecto, viitor, condițional, por vs para, pronume OD/OI)
- Modulul 3 (C1-C2): 7 capitole (Subjuntivo, idiomuri, spaniolă de afaceri, nuanțe discursive)
Total: 45 capitole.
"""

def get_spanish_lessons():
    m1 = "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)"
    m2 = "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)"
    m3 = "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)"

    lessons = [
        # --- MODULUL 1: A1-A2 (25 capitole) ---
        {
            "id": "es-a1-p1",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 25,
            "title": "Capitolul 1: Pronumele Personale Subiect (Yo, Tú, Él, Ella, Usted, Nosotros, Vosotros, Ellos, Ustedes)",
            "theory": """
<p>Bine ai venit la limba spaniolă! Primul pas de la zero absolut este învățarea pronumelor personale subiect (persoanele: eu, tu, el, ea...).</p>
<h4>1. Cele 9 Pronume Personale</h4>
<ul>
  <li><code>Yo</code> [io] = Eu.</li>
  <li><code>Tú</code> [tu] = Tu (informal, cu accent grafic pentru a nu se confunda cu posesivul <em>tu</em>).</li>
  <li><code>Él</code> [el] = El (cu accent grafic) / <code>Ella</code> [eia] = Ea.</li>
  <li><code>Usted</code> [usted] = Dumneavoastră (formă de politețe singular, se conjugă cu persoana a III-a singular!).</li>
  <li><code>Nosotros</code> (masc./mixt) / <code>Nosotras</code> (exclusiv feminin) = Noi.</li>
  <li><code>Vosotros</code> / <code>Vosotras</code> = Voi (folosit în Spania).</li>
  <li><code>Ellos</code> / <code>Ellas</code> = Ei / Ele.</li>
  <li><code>Ustedes</code> = Dumneavoastră (plural de politețe în Spania; în America Latină înlocuiește complet pe 'vosotros').</li>
</ul>
<h4>2. Omiterea Pronumelui Subiect</h4>
<p>La fel ca în română, în spaniolă pronumele <strong>se omite în mod obișnuit</strong> deoarece terminația verbului arată clar persoana: <em>Hablo español</em> (nu e nevoie să spui <em>Yo hablo</em>).</p>
""",
            "glossary": [
                {"term": "Yo", "def": "Pronumele 'Eu' în limba spaniolă."},
                {"term": "Tú vs Usted", "def": "'Tú' este informal (tutuit); 'Usted' este pronumele de respect ('Dumneavoastră')."},
                {"term": "Nosotros / Nosotras", "def": "Distinge genul la persoana I plural: feminin exclusiv (nosotras) sau masculin/mixt (nosotros)."},
                {"term": "Omiterea subiectului", "def": "Spre deosebire de engleză sau franceză, spaniola nu cere menționarea pronumelui 'yo' la fiecare frază."}
            ],
            "matchingPairs": [
                {"left": "Yo", "right": "Eu"},
                {"left": "Tú", "right": "Tu (informal)"},
                {"left": "Usted", "right": "Dumneavoastră (singular politicos)"},
                {"left": "Nosotros / Ellos", "right": "Noi / Ei"}
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
            "starterCode": "// Completează pronumele\n",
            "expectedOutputPattern": "Yo,\\s*t[úu],\\s*[ée]l,\\s*ella\\.?",
            "hint": "Scrie Yo, tú, él, ella"
        },
        {
            "id": "es-a1-p2",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 25,
            "title": "Capitolul 2: Formule de Salut, Despărțire & Politețe (¡Hola!, Buenos días, Gracias)",
            "theory": """
<p>Spaniola este o limbă caldă și expresivă. Reține că în scris, propozițiile exclamative și interogative încep cu semnul de punctuație inversat: <code>¡</code> și <code>¿</code>.</p>
<h4>1. Saluturi Uzuale</h4>
<ul>
  <li><code>¡Hola!</code> [ola] = Bună / Salut (litera 'h' este complet mută în spaniolă!).</li>
  <li><code>Buenos días</code> = Bună dimineața / Bună ziua (până la prânz).</li>
  <li><code>Buenas tardes</code> = Bună ziua / Bună seara (de la prânz până la lăsarea întunericului).</li>
  <li><code>Buenas noches</code> = Noapte bună (sau bună seara târziu).</li>
</ul>
<h4>2. Politețe & Despărțire</h4>
<ul>
  <li><code>Por favor</code> = Vă rog / Te rog.</li>
  <li><code>Muchas gracias</code> = Mulțumesc mult / <code>De nada</code> = Cu plăcere.</li>
  <li><code>¡Adiós!</code> = La revedere / Adio.</li>
  <li><code>Hasta luego</code> = Pe mai târziu / <code>Hasta pronto</code> = Pe curând.</li>
</ul>
""",
            "glossary": [
                {"term": "¡Hola!", "def": "Formula universală de salut în orice moment al zilei ('H' este mut)."},
                {"term": "Por favor", "def": "'Te rog / Vă rog' în limba spaniolă."},
                {"term": "Muchas gracias", "def": "'Mulțumesc foarte mult'."},
                {"term": "Hasta luego", "def": "Formulă de despărțire frecventă ce înseamnă 'Pe mai târziu'."}
            ],
            "matchingPairs": [
                {"left": "¡Hola!", "right": "Bună!"},
                {"left": "Buenos días", "right": "Bună dimineața / Bună ziua"},
                {"left": "Muchas gracias", "right": "Mulțumesc mult"},
                {"left": "Hasta luego", "right": "Pe mai târziu"}
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
            "starterCode": "// Scrie salutul\n",
            "expectedOutputPattern": "(?:[¡!]\\s*)?Hola[!\\s]+Buenos\\s+d[íi]as,\\s*por\\s+favor\\.?",
            "hint": "Scrie ¡Hola! Buenos días, por favor."
        },
        {
            "id": "es-a1-p3",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 3: Prezentarea Personală (¿Cómo te llamas? Me llamo...)",
            "theory": """
<p>Pentru a face cunoștință, folosim verbul reflexiv <strong>llamarse</strong> (a se numi) și verbul <strong>ser</strong> (a fi).</p>
<h4>1. Numele Tău</h4>
<ul>
  <li><code>¿Cómo te llamas?</code> [komo te iamas] = Cum te cheamă? (informal).</li>
  <li><code>¿Cómo se llama usted?</code> = Cum vă numiți? (formal).</li>
  <li><code>Me llamo Carlos.</code> = Mă numesc Carlos.</li>
  <li><code>¡Mucho gusto!</code> / <code>¡Encantado/a!</code> = Încântat de cunoștință!</li>
</ul>
<h4>2. De Unde Ești (Origine & Naționalitate)</h4>
<ul>
  <li><code>¿De dónde eres?</code> = De unde ești?</li>
  <li><code>Soy de Rumanía.</code> = Sunt din România.</li>
  <li><code>Soy rumano</code> (masc.) / <code>Soy rumana</code> (fem.) = Sunt român / româncă.</li>
  <li><code>Vivo en Bucarest.</code> = Locuiesc în București.</li>
</ul>
""",
            "glossary": [
                {"term": "Me llamo...", "def": "Formula standard: 'Mă numesc...' / 'Numele meu este...'."},
                {"term": "Mucho gusto", "def": "'Încântat de cunoștință' (răspuns universal la prezentare)."},
                {"term": "¿De dónde eres?", "def": "Întrebare directă: 'De unde ești?'."},
                {"term": "Soy de...", "def": "'Sunt din...' (indică țara sau orașul de origine)."}
            ],
            "matchingPairs": [
                {"left": "Me llamo...", "right": "Mă numesc..."},
                {"left": "¿Cómo te llamas?", "right": "Cum te cheamă?"},
                {"left": "¡Mucho gusto!", "right": "Încântat de cunoștință!"},
                {"left": "Soy de Rumanía", "right": "Sunt din România"}
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
            "hint": "Scrie Me llamo Elena y soy de Rumanía."
        },
        {
            "id": "es-a1-p4",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 4: Verbul Auxiliar „SER” (A FI — Identitate & Natură)",
            "theory": """
<p>În spaniolă există <strong>două verbe diferite</strong> pentru „a fi”: <strong>SER</strong> și <strong>ESTAR</strong>. Verbul <code>SER</code> descrie identitatea esențială, caracteristicile permanente, originea și profesia.</p>
<h4>1. Conjugarea Verbului SER la Prezent</h4>
<ul>
  <li><code>Yo soy</code> [soi] = Eu sunt (<em>Soy estudiante</em> = Sunt student).</li>
  <li><code>Tú eres</code> [eres] = Tu ești (<em>Eres inteligente</em>).</li>
  <li><code>Él / Ella / Usted es</code> = El / Ea este (<em>Ella es doctora</em>).</li>
  <li><code>Nosotros somos</code> = Noi suntem (<em>Somos amigos</em>).</li>
  <li><code>Vosotros sois</code> = Voi sunteți.</li>
  <li><code>Ellos / Ellas / Ustedes son</code> = Ei / Ele sunt (<em>Son amables</em>).</li>
</ul>
<h4>2. Când Folosim SER (Mnemonică: DOCTOR)</h4>
<p><strong>D</strong>escriere, <strong>O</strong>rigine, <strong>C</strong>aracteristică fizică/morală, <strong>T</strong>imp/Oră (<em>Son las tres</em>), <strong>O</strong>cupație/Profesie, <strong>R</strong>elație (prieteni, frați).</p>
""",
            "glossary": [
                {"term": "Ser", "def": "Verbul 'a fi' utilizat pentru trăsături permanente, identitate, naționalitate, profesie și oră."},
                {"term": "Yo soy", "def": "Eu sunt."},
                {"term": "Somos", "def": "Noi suntem."},
                {"term": "Profesii fără articol", "def": "În spaniolă nu se pune 'un' la profesii: 'Soy profesor' (nu 'Soy un profesor')."}
            ],
            "matchingPairs": [
                {"left": "Yo soy", "right": "Eu sunt"},
                {"left": "Tú eres", "right": "Tu ești"},
                {"left": "Nosotros somos", "right": "Noi suntem"},
                {"left": "Ellos son", "right": "Ei sunt"}
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
            "hint": "Scrie Yo soy programador y él es médico."
        },
        {
            "id": "es-a1-p5",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 5: Verbul Auxiliar „ESTAR” (A FI — Stare, Emoții & Locație)",
            "theory": """
<p>Al doilea verb pentru „a fi” este <strong>ESTAR</strong>. Acesta descrie starea de sănătate, emoțiile temporare și <strong>locația fizică în spațiu</strong> (unde se află ceva).</p>
<h4>1. Conjugarea Verbului ESTAR la Prezent</h4>
<ul>
  <li><code>Yo estoy</code> [estoi] = Eu sunt / mă aflu (<em>Estoy contento</em>).</li>
  <li><code>Tú estás</code> [estas] = Tu ești (<em>¿Cómo estás?</em> = Ce mai faci?).</li>
  <li><code>Él / Ella / Usted está</code> = El / Ea este (<em>Está en casa</em> = E acasă).</li>
  <li><code>Nosotros estamos</code> = Noi suntem / ne aflăm.</li>
  <li><code>Vosotros estáis</code> = Voi sunteți.</li>
  <li><code>Ellos / Ellas / Ustedes están</code> = Ei / Ele sunt (<em>Están cansados</em> = Sunt obosiți).</li>
</ul>
<h4>2. Când Folosim ESTAR (Mnemonică: PLACE)</h4>
<p><strong>P</strong>oziție, <strong>L</strong>ocație (<em>Madrid está en España</em>), <strong>A</strong>cțiune în derulare, <strong>C</strong>ondiție fizică (bolnav, sănătos), <strong>E</strong>moție (trist, fericit).</p>
""",
            "glossary": [
                {"term": "Estar", "def": "Verbul 'a fi' utilizat pentru locație în spațiu, stări de moment și emoții trecătoare."},
                {"term": "Estoy bien", "def": "'Sunt bine' (răspunsul clasic la ¿Cómo estás?)."},
                {"term": "Locație cu Estar", "def": "Orice localizare pe hartă folosește obligatoriu Estar (El hotel está cerca)."},
                {"term": "Cansado/a", "def": "Obosit / obosită (se folosește întotdeauna cu estar)."}
            ],
            "matchingPairs": [
                {"left": "¿Cómo estás?", "right": "Ce mai faci? / Cum ești?"},
                {"left": "Estoy muy bien", "right": "Sunt foarte bine"},
                {"left": "Madrid está en España", "right": "Madridul se află în Spania (locație)"},
                {"left": "Estamos listos", "right": "Suntem gata / pregătiți"}
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
            "starterCode": "// Scrie dialogul\n",
            "expectedOutputPattern": "(?:[¿?]\\s*)?C[óo]mo\\s+est[áa]s\\??\\s*-\\s*Estoy\\s+bien,\\s*gracias\\.?",
            "hint": "Scrie ¿Cómo estás? - Estoy bien, gracias."
        },
        {
            "id": "es-a1-p6",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 6: Sinteză & Diferența Crucială: SER vs ESTAR",
            "theory": """
<p>Confundarea lui <em>SER</em> cu <em>ESTAR</em> poate schimba complet sensul unei propoziții! Iată exemple celebre de comparație directă:</p>
<h4>1. Schimbarea Semnificației cu Același Adjectiv</h4>
<ul>
  <li><code>Ser listo</code> = A fi deștept / inteligent.<br>
      <code>Estar listo</code> = A fi gata / pregătit pentru plecare.</li>
  <li><code>Ser bueno</code> = A fi o persoană bună la suflet.<br>
      <code>Estar bueno</code> = Mâncarea este delicioasă / gustoasă.</li>
  <li><code>Ser verde</code> = De culoare verde.<br>
      <code>Estar verde</code> = Un fruct necopt sau cineva neexperimentat.</li>
</ul>
<h4>2. Regula Simplă de Aur</h4>
<p><strong>SER = CINE și CE este</strong> (esența de neschimbat).<br>
<strong>ESTAR = CUM și UNDE este</strong> (starea și locația de moment).</p>
""",
            "glossary": [
                {"term": "Ser listo", "def": "A fi inteligent din fire."},
                {"term": "Estar listo", "def": "A fi gata de acțiune."},
                {"term": "Esență vs Stare", "def": "Ser descrie natura intrinsecă; Estar descrie stadiul prezent."},
                {"term": "Ubicación (Locație)", "def": "Aflarea în spațiu cere întotdeauna Estar (¿Dónde está el baño?)."}
            ],
            "matchingPairs": [
                {"left": "Soy feliz", "right": "Sunt o persoană fericită din fire (Ser)"},
                {"left": "Estoy feliz hoy", "right": "Sunt fericit astăzi pentru că am primit o veste (Estar)"},
                {"left": "La comida está rica", "right": "Mâncarea este gustoasă acum (Estar)"},
                {"left": "Juan es listo", "right": "Juan este foarte deștept (Ser)"}
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
            "hint": "Scrie Juan es inteligente pero hoy está cansado."
        },
        {
            "id": "es-a1-p7",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 7: Verbul Auxiliar „TENER” (A AVEA) la Prezent",
            "theory": """
<p>Verbul <strong>tener</strong> (a avea) este un verb neregulat cu schimbare de rădăcină (diftongare <em>e $\rightarrow$ ie</em>) și adăugare de <em>g</em> la persoana I (<em>yo tengo</em>).</p>
<h4>1. Conjugarea la Prezent</h4>
<ul>
  <li><code>Yo tengo</code> [tengo] = Eu am.</li>
  <li><code>Tú tienes</code> [tienes] = Tu ai.</li>
  <li><code>Él / Ella / Usted tiene</code> = El / Ea are.</li>
  <li><code>Nosotros tenemos</code> = Noi avem (fără diftong la nosotros!).</li>
  <li><code>Vosotros tenéis</code> = Voi aveți.</li>
  <li><code>Ellos / Ellas / Ustedes tienen</code> = Ei / Ele au.</li>
</ul>
<h4>2. Expresii cu TENER</h4>
<ul>
  <li><em>Tengo 24 años</em> = Am 24 de ani (vârsta se exprimă cu TENER, nu ser!).</li>
  <li><em>Tengo hambre</em> [ambre] = Mi-e foame / <em>Tengo sed</em> = Mi-e sete.</li>
  <li><em>Tengo calor / Tengo frío</em> = Mi-e cald / Mi-e frig.</li>
  <li><em>Tener que + infinitiv</em> = A trebui: <em>Tengo que estudiar</em> (Trebuie să învăț).</li>
</ul>
""",
            "glossary": [
                {"term": "Tener", "def": "Verbul 'a avea' (tengo, tienes, tiene, tenemos, tenéis, tienen)."},
                {"term": "Tengo 20 años", "def": "Exprimarea vârstei în spaniolă cere verbul tener."},
                {"term": "Tener que + inf", "def": "Structură ce exprimă o obligație personală ('trebuie să...')."},
                {"term": "Tener hambre / sed", "def": "A fi foame / sete (literalmente 'a avea foame/sete')."}
            ],
            "matchingPairs": [
                {"left": "Tengo un coche", "right": "Am o mașină"},
                {"left": "Tengo 25 años", "right": "Am 25 de ani"},
                {"left": "Tengo mucha hambre", "right": "Mi-e foarte foame"},
                {"left": "Tenemos que salir", "right": "Trebuie să ieșim (obligație)"}
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
            "hint": "Scrie Tengo hambre y tengo que comer ahora."
        },
        {
            "id": "es-a1-p8",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 8: Numerele de la 0 la 20 (Los Números del 0 al 20)",
            "theory": """
<p>Numerele în spaniolă au o logică fonetică foarte apropiată de limba română:</p>
<h4>1. De la 0 la 10</h4>
<p><code>0: cero</code>, <code>1: uno</code>, <code>2: dos</code>, <code>3: tres</code>, <code>4: cuatro</code>, <code>5: cinco</code>, <code>6: seis</code>, <code>7: siete</code>, <code>8: ocho</code>, <code>9: nueve</code>, <code>10: diez</code> [diez].</p>
<h4>2. De la 11 la 20</h4>
<p><code>11: once</code>, <code>12: doce</code>, <code>13: trece</code>, <code>14: catorce</code>, <code>15: quince</code> [kince].</p>
<p>De la 16 la 19 se formează prin compunerea „zece și...” scris într-un singur cuvânt:</p>
<p><code>16: dieciséis</code>, <code>17: diecisiete</code>, <code>18: dieciocho</code>, <code>19: diecinueve</code>, <code>20: veinte</code>.</p>
""",
            "glossary": [
                {"term": "uno, dos, tres", "def": "Unu, doi, trei în limba spaniolă."},
                {"term": "once a quince", "def": "Numerele de la 11 la 15 cu terminația caracteristică '-ce'."},
                {"term": "dieciséis", "def": "Numărul 16; conține accent grafic pe ultimul 'e'."},
                {"term": "veinte", "def": "Numărul 20."}
            ],
            "matchingPairs": [
                {"left": "uno, dos, tres", "right": "1, 2, 3"},
                {"left": "cuatro, cinco, seis", "right": "4, 5, 6"},
                {"left": "siete, ocho, nueve, diez", "right": "7, 8, 9, 10"},
                {"left": "quince, veinte", "right": "15, 20"}
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
            "starterCode": "// Scrie 1, 2, 3, 4 în spaniolă\n",
            "expectedOutputPattern": "uno,\\s*dos,\\s*tres,\\s*cuatro",
            "hint": "Scrie uno, dos, tres, cuatro"
        },
        {
            "id": "es-a1-p9",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 9: Numerele de la 20 la 100, Prețuri & Cumpărături",
            "theory": """
<p>Spre deosebire de franceză, spaniola folosește un sistem decimal curat și previzibil!</p>
<h4>1. Zecile în Spaniolă</h4>
<p><code>20: veinte</code>, <code>30: treinta</code>, <code>40: cuarenta</code>, <code>50: cincuenta</code>, <code>60: sesenta</code>, <code>70: setenta</code>, <code>80: ochenta</code>, <code>90: noventa</code>, <code>100: cien</code>.</p>
<h4>2. Regula lui „Y” (Și)</h4>
<ul>
  <li>Pentru numerele 21-29 se scrie într-un singur cuvânt: <em>veintiuno, veintidós, veintitrés...</em></li>
  <li>De la 31 în sus, se separă prin conjuncția <strong>y</strong> (și): <em>treinta y uno</em>, <em>cuarenta y cinco</em>, <em>noventa y nueve</em>.</li>
</ul>
<h4>3. Întrebarea Prețului</h4>
<p><code>¿Cuánto cuesta esto?</code> = Cât costă asta? / <code>Cuesta veinte euros</code> = Costă 20 de euro.</p>
""",
            "glossary": [
                {"term": "treinta y uno", "def": "31 (de la 31 încolo numerele se leagă cu 'y')."},
                {"term": "¿Cuánto cuesta?", "def": "'Cât costă?' în magazine și restaurante."},
                {"term": "cien", "def": "Numărul 100 exact (devine 'ciento uno' de la 101 în sus)."},
                {"term": "euro / euros", "def": "Moneda oficială."}
            ],
            "matchingPairs": [
                {"left": "treinta y cinco", "right": "35"},
                {"left": "cincuenta euros", "right": "50 de euro"},
                {"left": "¿Cuánto cuesta esto?", "right": "Cât costă asta?"},
                {"left": "cien", "right": "100"}
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
            "starterCode": "// Întreabă prețul biletului\n",
            "expectedOutputPattern": "(?:[¿?]\\s*)?Cu[áa]nto\\s+cuesta\\s+este\\s+billete,\\s*por\\s+favor\\??",
            "hint": "Scrie ¿Cuánto cuesta este billete, por favor?"
        },
        {
            "id": "es-a1-p10",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 10: Zilele Săptămânii, Lunile Anului & Anotimpurile",
            "theory": """
<p>În limba spaniolă, zilele săptămânii și lunile anului se scriu cu <strong>literă mică</strong> (nu cu majusculă ca în engleză!).</p>
<h4>1. Zilele Săptămânii (Los Días de la Semana)</h4>
<p>Toate zilele de luni până vineri se termină în <code>-s</code> și sunt de genul <strong>masculin</strong>:</p>
<p><code>el lunes</code> (luni), <code>el martes</code> (marți), <code>el miércoles</code> (miercuri), <code>el jueves</code> (joi), <code>el viernes</code> (vineri), <code>el sábado</code> (sâmbătă), <code>el domingo</code> (duminică).</p>
<p>Pentru a spune „lunea” sau „în fiecare luni”, folosim articolul plural: <em>los lunes</em> (nu spunem 'en lunes').</p>
<h4>2. Lunile Anului (Los Meses)</h4>
<p><em>enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre</em>.</p>
<h4>3. Anotimpurile (Las Estaciones)</h4>
<p><code>la primavera</code> (primăvara), <code>el verano</code> (vara), <code>el otoño</code> (toamna), <code>el invierno</code> (iarna).</p>
""",
            "glossary": [
                {"term": "el lunes / los lunes", "def": "Zilele folosesc articolul 'el' sau 'los' ('los viernes' = vinerea)."},
                {"term": "el fin de semana", "def": "Sfârșitul de săptămână (weekend)."},
                {"term": "hoy", "def": "Cuvântul pentru 'astăzi'."},
                {"term": "mañana", "def": "'Mâine' (sau 'dimineață' dacă este precedat de articol: la mañana)."}
            ],
            "matchingPairs": [
                {"left": "el lunes", "right": "Luni"},
                {"left": "el viernes", "right": "Vineri"},
                {"left": "el sábado y domingo", "right": "Sâmbătă și duminică"},
                {"left": "el verano", "right": "Vara"}
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
            "hint": "Scrie Hoy es viernes y mañana es sábado."
        },
        {
            "id": "es-a1-p11",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 11: ¿Qué hora es? Exprimarea Orei în Spaniolă",
            "theory": """
<p>Pentru a întreba cât este ceasul, spunem: <strong>« ¿Qué hora es? »</strong>. Răspunsul depinde dacă este ora 1 (singular) sau o altă oră (plural):</p>
<h4>1. Regula Singular / Plural</h4>
<ul>
  <li>Pentru ora 1:00: <code>Es la una</code> (singular: 'Es la', deoarece 'hora' este feminin singular).</li>
  <li>Pentru toate celelalte ore: <code>Son las dos</code>, <code>Son las tres</code>, <code>Son las diez</code> (plural: 'Son las').</li>
</ul>
<h4>2. Minute, Sferturi și Jumătăți</h4>
<ul>
  <li><code>y cuarto</code> = și un sfert (ex: <em>Son las cuatro y cuarto</em> = 4:15).</li>
  <li><code>y media</code> = și jumătate (ex: <em>Son las cinco y media</em> = 5:30).</li>
  <li><code>menos cuarto</code> = fără un sfert (ex: <em>Son las seis menos cuarto</em> = 5:45).</li>
  <li><code>menos diez</code> = fără 10 minute (ex: <em>Son las siete menos diez</em> = 6:50).</li>
</ul>
""",
            "glossary": [
                {"term": "¿Qué hora es?", "def": "Întrebarea standard: 'Cât este ceasul?'."},
                {"term": "Es la una", "def": "Formulă unică la singular dedicată orei 1."},
                {"term": "Son las...", "def": "Formulă plurală folosită pentru toate orele de la 2 la 12."},
                {"term": "y media", "def": "Și jumătate (ex: 8:30 = Son las ocho y media)."}
            ],
            "matchingPairs": [
                {"left": "¿Qué hora es?", "right": "Cât este ceasul?"},
                {"left": "Es la una en punto", "right": "Este ora 1 fix"},
                {"left": "Son las tres y cuarto", "right": "Este ora 3 și un sfert (3:15)"},
                {"left": "Son las cinco y media", "right": "Este ora 5 și jumătate (5:30)"}
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
            "hint": "Scrie Son las dos y media de la tarde."
        },
        {
            "id": "es-a1-p12",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 12: Articolele & Genul Substantivelor (El, La, Los, Las / Un, Una)",
            "theory": """
<p>În spaniolă, genul substantivelor este foarte predictibil pe baza terminației:</p>
<h4>1. Regula de Bază a Genului</h4>
<ul>
  <li>Cuvintele terminate în <code>-o</code> sunt în general <strong>masculine</strong>: <em>el libro, el perro</em>.</li>
  <li>Cuvintele terminate în <code>-a</code> sunt în general <strong>feminine</strong>: <em>la casa, la mesa</em>.</li>
  <li>Cuvintele terminate în <code>-ción</code>, <code>-sión</code>, <code>-dad</code> sunt întotdeauna <strong>feminine</strong>: <em>la estación, la ciudad</em>.</li>
</ul>
<h4>2. Articolele</h4>
<ul>
  <li><strong>Hotărâte</strong>: <code>el</code> (masc. sg.), <code>la</code> (fem. sg.), <code>los</code> (masc. pl.), <code>las</code> (fem. pl.).</li>
  <li><strong>Nehotărâte</strong>: <code>un</code> (masc. sg.), <code>una</code> (fem. sg.), <code>unos</code> (masc. pl.), <code>unas</code> (fem. pl.).</li>
</ul>
""",
            "glossary": [
                {"term": "el / la / los / las", "def": "Articole hotărâte spaniole (-ul, -a, -ii, -ele)."},
                {"term": "un / una / unos / unas", "def": "Articole nehotărâte (un, o, niște)."},
                {"term": "-dad / -ción", "def": "Terminații ce garantează genul feminin (la felicidad, la canción)."},
                {"term": "Excepții celebre", "def": "el problema, el día, el mapa (deși se termină în -a, sunt masculine de origine greacă!)."}
            ],
            "matchingPairs": [
                {"left": "el libro / los libros", "right": "cartea / cărțile (masculin)"},
                {"left": "la casa / las casas", "right": "casa / casele (feminin)"},
                {"left": "la ciudad", "right": "orașul (terminat în -dad: feminin)"},
                {"left": "el día", "right": "ziua (excepție: masculin deși se termină în -a)"}
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
            "starterCode": "// Scrie băiatul și fata\n",
            "expectedOutputPattern": "el\\s+chico\\s+y\\s+la\\s+chica\\.?",
            "hint": "Scrie el chico y la chica"
        },
        {
            "id": "es-a1-p13",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 13: Cum Spunem „NO”: Negația Simplă și Dublă în Spaniolă",
            "theory": """
<p>Negația în spaniolă este mult mai simplă decât în franceză: este suficient să plasezi cuvântul <strong>NO</strong> direct înaintea verbului conjugat.</p>
<h4>1. Negația Simplă</h4>
<ul>
  <li><em>Hablo inglés</em> (Vorbesc engleză) $\rightarrow$ <em><strong>No</strong> hablo inglés</em> (Nu vorbesc engleză).</li>
  <li><em>Tengo tiempo</em> $\rightarrow$ <em><strong>No</strong> tengo tiempo</em> (Nu am timp).</li>
</ul>
<h4>2. Negația Dublă Spaniolă (Obligatorie!)</h4>
<p>Spre deosebire de engleză unde dubla negație este interzisă, în spaniolă <strong>dubla negație este obligatorie</strong> dacă termenul negativ stă după verb:</p>
<ul>
  <li><code>nunca</code> (niciodată): <em><strong>No</strong> voy <strong>nunca</strong> allí</em> (Nu merg niciodată acolo).</li>
  <li><code>nada</code> (nimic): <em><strong>No</strong> sé <strong>nada</strong></em> (Nu știu nimic).</li>
  <li><code>nadie</code> (nimeni): <em><strong>No</strong> hay <strong>nadie</strong> aquí</em> (Nu este nimeni aici).</li>
</ul>
""",
            "glossary": [
                {"term": "no + verb", "def": "Structura de bază a negației în limba spaniolă."},
                {"term": "Doble negación", "def": "Regulă obligatorie: 'No entiendo nada' (literal: Nu înțeleg nimic)."},
                {"term": "nunca / jamás", "def": "'Niciodată'."},
                {"term": "nadie", "def": "'Nimeni'."}
            ],
            "matchingPairs": [
                {"left": "No hablo español", "right": "Nu vorbesc spaniolă"},
                {"left": "No sé nada", "right": "Nu știu nimic (dublă negație)"},
                {"left": "No hay nadie", "right": "Nu este nimeni"},
                {"left": "Nunca fumo", "right": "Niciodată nu fumez"}
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
            "hint": "Scrie No entiendo nada, lo siento."
        },
        {
            "id": "es-a1-p14",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 14: Cuvinte Interogative (¿Quién?, ¿Qué?, ¿Dónde?, ¿Cuándo?, ¿Por qué?)",
            "theory": """
<p>Toate cuvintele interogative din spaniolă poartă <strong>accent grafic (tilde)</strong> pentru a le distinge de conjuncțiile sau pronumele relative omonime.</p>
<h4>1. Cele 7 Cuvinte Cheie de Întrebare</h4>
<ul>
  <li><code>¿Quién? / ¿Quiénes?</code> = Cine? (<em>¿Quién es él?</em> = Cine este el?).</li>
  <li><code>¿Qué?</code> = Ce? (<em>¿Qué pasa?</em> = Ce se întâmplă?).</li>
  <li><code>¿Dónde?</code> = Unde? (<em>¿Dónde está el baño?</em> = Unde este toaleta?).</li>
  <li><code>¿Cuándo?</code> = Când? (<em>¿Cuándo salimos?</em> = Când plecăm?).</li>
  <li><code>¿Cómo?</code> = Cum? (<em>¿Cómo se dice...?</em> = Cum se spune...?).</li>
  <li><code>¿Cuánto / Cuánta?</code> = Cât? (<em>¿Cuánto cuesta?</em> = Cât costă?).</li>
  <li><code>¿Por qué?</code> (separat și cu accent) = De ce? Răspunsul este <code>Porque...</code> (într-un cuvânt și fără accent: Pentru că...).</li>
</ul>
""",
            "glossary": [
                {"term": "¿Por qué? vs Porque", "def": "¿Por qué? = De ce? (întrebare separată cu accent); Porque = Pentru că (răspuns legat fără accent)."},
                {"term": "¿Dónde está...?", "def": "Întrebare crucială pentru orientare: 'Unde se află...?'."},
                {"term": "¿Cómo se dice?", "def": "Cum se spune în spaniolă...?"},
                {"term": "Tilde en interrogativos", "def": "Accentul grafic obligatoriu pe toate cuvintele de întrebare (qué, quién, dónde...)."}
            ],
            "matchingPairs": [
                {"left": "¿Dónde está la estación?", "right": "Unde este gara?"},
                {"left": "¿Qué hora es?", "right": "Cât este ceasul?"},
                {"left": "¿Cómo te llamas?", "right": "Cum te cheamă?"},
                {"left": "¿Por qué estudias español?", "right": "De ce înveți spaniolă?"}
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
            "starterCode": "// Scrie întrebarea\n",
            "expectedOutputPattern": "(?:[¿?]\\s*)?D[óo]nde\\s+est[áa]\\s+la\\s+playa,\\s*por\\s+favor\\??",
            "hint": "Scrie ¿Dónde está la playa, por favor?"
        },
        {
            "id": "es-a1-p15",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 15: Culori, Adjective & Acordul de Gen și Număr",
            "theory": """
<p>În spaniolă, adjectivul <strong>se acordă întotdeauna în gen și număr</strong> cu substantivul determinat și este plasat de regulă <strong>după substantiv</strong>.</p>
<h4>1. Regula de Bază a Adjectivelor</h4>
<ul>
  <li>Adjectivele în <code>-o</code> fac femininul în <code>-a</code>: <em>un chico alto $\rightarrow$ una chica alta</em>.</li>
  <li>Adjectivele terminate în <code>-e</code> sau consoană sunt neutre în gen (rămân identice la masculin și feminin): <em>un libro grande / una casa grande</em>, <em>un examen difícil / una pregunta difícil</em>.</li>
  <li>Pluralul: adaugă <code>-s</code> după vocală (<em>altos / altas</em>) și <code>-es</code> după consoană (<em>difíciles</em>).</li>
</ul>
<h4>2. Culorile</h4>
<p><em>blanco/a</em> (alb), <em>negro/a</em> (negru), <em>rojo/a</em> (roșu), <em>amarillo/a</em> (galben), <em>azul / azules</em> (albastru), <em>verde / verdes</em> (verde).</p>
""",
            "glossary": [
                {"term": "Concordancia de adjetivos", "def": "Acordul obligatoriu în gen (o/a) și număr (s/es) între substantiv și adjectiv."},
                {"term": "Adjetivos en -e (grande)", "def": "Adjective invariabile în gen: se folosesc identic și la masculin și la feminin."},
                {"term": "Posición pospuesta", "def": "În spaniolă culorile și descrierile stau DUPĂ substantiv (un coche rojo)."},
                {"term": "azul / verdes", "def": "Pluralul adjectivelor: +s după vocală, +es după consoană."}
            ],
            "matchingPairs": [
                {"left": "un coche rojo", "right": "o mașină roșie (masculin în spaniolă)"},
                {"left": "una casa blanca", "right": "o casă albă (feminin)"},
                {"left": "los ojos azules", "right": "ochii albaștri (plural cu -es)"},
                {"left": "una ciudad grande", "right": "un oraș mare (adjectiv neutru în -e)"}
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
            "hint": "Scrie una casa blanca con puertas verdes"
        },
        {
            "id": "es-a1-p16",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 16: Familia & Arborele Genealogic (La Familia)",
            "theory": """
<p>Membrii familiei în spaniolă sunt ușor de reținut datorită perechilor regulate masculin (-o) / feminin (-a):</p>
<h4>1. Membrii Principali</h4>
<ul>
  <li><code>el padre</code> = tatăl / <code>papá</code> = tati.</li>
  <li><code>la madre</code> = mama / <code>mamá</code> = mami.</li>
  <li><code>los padres</code> = părinții (mama și tata).</li>
  <li><code>el hijo</code> = fiul / <code>la hija</code> = fiica / <code>los hijos</code> = copiii (sau fiii).</li>
  <li><code>el hermano</code> = fratele / <code>la hermana</code> = sora / <code>los hermanos</code> = frații.</li>
  <li><code>el abuelo</code> = bunicul / <code>la abuela</code> = bunica / <code>los abuelos</code> = bunicii.</li>
  <li><code>el tío / la tía</code> = unchiul / mătușa.</li>
  <li><code>el primo / la prima</code> = vărul / verișoara.</li>
</ul>
""",
            "glossary": [
                {"term": "los padres", "def": "Părinții (tatăl și mama)."},
                {"term": "los hermanos", "def": "Frații (sau frații și surorile împreună)."},
                {"term": "los abuelos", "def": "Bunicii."},
                {"term": "hijo / hija", "def": "Fiul / fiica."}
            ],
            "matchingPairs": [
                {"left": "el padre y la madre", "right": "Tatăl și mama"},
                {"left": "el hermano y la hermana", "right": "Fratele și sora"},
                {"left": "los abuelos", "right": "Bunicii"},
                {"left": "mis primos", "right": "Verii mei"}
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
            "hint": "Scrie Mi padre, mi madre y mis dos hermanos."
        },
        {
            "id": "es-a1-p17",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 17: Adjectivele Posesive (Mi, Tu, Su, Nuestro, Vuestro, Su)",
            "theory": """
<p>În spaniolă, posesivele scurte stau <strong>înaintea substantivului</strong> și se acordă în număr (singular/plural) cu lucrul posedat:</p>
<h4>1. Tabelul Posesivelor</h4>
<ul>
  <li><code>mi / mis</code> = al meu, a mea / ai mei, ale mele (<em>mi libro, mis libros</em>).</li>
  <li><code>tu / tus</code> = al tău, a ta / ai tăi, ale tale (<em>tu casa, tus amigos</em>). Fără accent grafic!</li>
  <li><code>su / sus</code> = al său, al lui, al ei, al dumneavoastră (<em>su pasaporte, sus llaves</em>).</li>
  <li><code>nuestro/a, nuestros/as</code> = al nostru, a noastră, ai noștri (se acordă și în gen!).</li>
  <li><code>vuestro/a, vuestros/as</code> = al vostru.</li>
  <li><code>su / sus</code> = al lor, al dumneavoastră (plural).</li>
</ul>
""",
            "glossary": [
                {"term": "mi / mis", "def": "Posesiv pentru persoana I: 'meu' / 'mei'."},
                {"term": "tu vs tú", "def": "'tu' fără accent este adjectiv posesiv (tu coche); 'tú' cu accent este pronume subiect (tú hablas)."},
                {"term": "su / sus", "def": "Posesiv polivalent ce înseamnă 'al lui', 'al ei' sau 'al Dumneavoastră'."},
                {"term": "nuestro / nuestra", "def": "Singurul posesiv de bază care se acordă și în gen: nuestro hijo / nuestra hija."}
            ],
            "matchingPairs": [
                {"left": "mi amigo / mis amigos", "right": "prietenul meu / prietenii mei"},
                {"left": "tu pasaporte", "right": "pașaportul tău"},
                {"left": "su casa", "right": "casa lui / casa ei / casa dumneavoastră"},
                {"left": "nuestra familia", "right": "familia noastră (acord feminin)"}
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
            "starterCode": "// Scrie sintagma\n",
            "expectedOutputPattern": "mi\\s+maleta\\s+y\\s+mis\\s+documentos\\.?",
            "hint": "Scrie mi maleta y mis documentos"
        },
        {
            "id": "es-a1-p18",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 18: Corpul Uman & Cum Exprimăm Durerea (Me duele...)",
            "theory": """
<p>Pentru a spune că te doare ceva în spaniolă, se folosește verbul reflexiv-afectiv <strong>DOLER</strong> (a durea). Acesta funcționează exact ca verbul <em>gustar</em>!</p>
<h4>1. Părțile Corpului (El Cuerpo Humano)</h4>
<p><code>la cabeza</code> (capul), <code>la espalda</code> (spatele), <code>el estómago</code> (stomacul), <code>la garganta</code> (gâtul), <code>los ojos</code> (ochii), <code>las muelas / los dientes</code> (dinții/măselele), <code>el brazo</code> (brațul), <code>la pierna</code> (piciorul).</p>
<h4>2. Structura: ME DUELE / ME DUELEN</h4>
<ul>
  <li>Dacă doare o singură parte (singular): <strong>Me duele</strong> (<em>Me duele la cabeza</em> = Mă doare capul).</li>
  <li>Dacă dor mai multe părți (plural): <strong>Me duelen</strong> (<em>Me duelen los ojos / los pies</em> = Mă dor ochii / picioarele).</li>
</ul>
<p>La medic: <em>Tengo fiebre</em> (Am febră), <em>Estoy resfriado</em> (Sunt răcit).</p>
""",
            "glossary": [
                {"term": "Me duele...", "def": "'Mă doare...' urmat de o parte a corpului la singular."},
                {"term": "Me duelen...", "def": "'Mă dor...' urmat de o parte a corpului la plural."},
                {"term": "la cabeza / la espalda", "def": "Capul / spatele."},
                {"term": "Tengo fiebre", "def": "Am febră (se folosește verbul tener)."}
            ],
            "matchingPairs": [
                {"left": "Me duele la cabeza", "right": "Mă doare capul (singular)"},
                {"left": "Me duelen los pies", "right": "Mă dor picioarele (plural: duelen)"},
                {"left": "Tengo dolor de garganta", "right": "Am durere de gât"},
                {"left": "Estoy enfermo", "right": "Sunt bolnav (cu estar)"}
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
            "hint": "Scrie Me duele la cabeza y tengo fiebre."
        },
        {
            "id": "es-a1-p19",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 19: Mâncarea, Băuturile & La Restaurant (En el Restaurante)",
            "theory": """
<p>Bucătăria spaniolă și tapas-urile sunt celebre în toată lumea. Iată vocabularul de bază pentru a comanda la bar sau restaurant:</p>
<h4>1. Mâncăruri & Băuturi</h4>
<ul>
  <li><em>el pan</em> (pâinea), <em>el queso</em> (brânza), <em>el jamón</em> (șunca), <em>el pollo</em> (puiul), <em>el pescado</em> (peștele).</li>
  <li><em>el agua</em> (apa - feminin, dar primește 'el' la singular pentru eufonie!), <em>el café con leche</em> (cafea cu lapte), <em>el zumo de naranja</em> (suc de portocale), <em>la cerveza</em> (berea), <em>el vino tinto</em> (vinul roșu).</li>
</ul>
<h4>2. Cum Comanzi Politicos</h4>
<ul>
  <li><code>Para mí...</code> = Pentru mine... (<em>Para mí, una paella, por favor</em>).</li>
  <li><code>Quisiera...</code> / <code>Me gustaría...</code> = Aș dori...</li>
  <li><code>¿Nos trae la cuenta, por favor?</code> = Ne aduceți nota de plată, vă rog?</li>
  <li><code>¡Buen provecho!</code> = Poftă bună!</li>
</ul>
""",
            "glossary": [
                {"term": "la cuenta, por favor", "def": "Cum ceri nota de plată în Spania ('Nota, vă rog')."},
                {"term": "el agua", "def": "Apa (substantiv feminin ce ia articolul 'el' la singular pentru a nu zice 'la agua')."},
                {"term": "las tapas", "def": "Mici porții de mâncare servite tradițional la băuturi în Spania."},
                {"term": "¡Buen provecho!", "def": "Urarea spaniolă pentru 'Poftă bună!'."}
            ],
            "matchingPairs": [
                {"left": "¿La cuenta, por favor?", "right": "Nota de plată, vă rog"},
                {"left": "Un café con leche", "right": "O cafea cu lapte"},
                {"left": "Una botella de agua", "right": "O sticlă de apă"},
                {"left": "¡Buen provecho!", "right": "Poftă bună!"}
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
            "hint": "Scrie Para mí una paella y un vaso de agua, por favor."
        },
        {
            "id": "es-a1-p20",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 20: Locuința & Verbul Existențial „HAY” (Acolo se află / Există)",
            "theory": """
<p>Forma impersonală <strong>HAY</strong> (de la verbul haber) se traduce prin „există”, „se află” sau „este/sunt”, fiind invariabilă (se folosește identic și pentru singular și pentru plural!).</p>
<h4>1. Încăperile Casei</h4>
<p><code>la casa</code> (casa), <code>el piso / el apartamento</code> (apartamentul), <code>la cocina</code> (bucătăria), <code>el salón</code> (sufrageria), <code>el dormitorio / la habitación</code> (dormitorul), <code>el baño</code> (baia).</p>
<h4>2. Utilizarea lui HAY</h4>
<ul>
  <li><em>En mi casa <strong>hay</strong> tres dormitorios</em> = În casa mea sunt trei dormitoare.</li>
  <li><em>¿<strong>Hay</strong> un banco cerca de aquí?</em> = Este o bancă aproape de aici?</li>
  <li><em>No <strong>hay</strong> problema</em> = Nu este nicio problemă.</li>
</ul>
""",
            "glossary": [
                {"term": "HAY", "def": "Formă impersonală invariabilă ce înseamnă 'Există / Se află' (atât singular cât și plural)."},
                {"term": "el dormitorio", "def": "Dormitorul în limba spaniolă."},
                {"term": "el salón", "def": "Camera de zi / sufrageria."},
                {"term": "cerca de / lejos de", "def": "Aproape de / departe de."}
            ],
            "matchingPairs": [
                {"left": "Hay una mesa", "right": "Se află o masă (singular)"},
                {"left": "Hay cuatro sillas", "right": "Se află patru scaune (plural - tot cu hay!)"},
                {"left": "No hay problema", "right": "Nu este nicio problemă"},
                {"left": "en la cocina", "right": "în bucătărie"}
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
            "hint": "Scrie En mi piso hay un salón grande y dos dormitorios."
        },
        {
            "id": "es-a1-p21",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 21: Orașul & Întrebarea Direcției (La Ciudad y las Direcciones)",
            "theory": """
<p>Când vizitezi Madrid, Barcelona sau Sevilla, orientarea în oraș necesită câteva formule clare:</p>
<h4>1. Locuri Publice Importante</h4>
<p><code>la calle</code> (strada), <code>la plaza</code> (piața), <code>la estación de tren / autobús</code> (gara / autogara), <code>el aeropuerto</code> (aeroportul), <code>la farmacia</code> (farmacia), <code>el supermercado</code> (supermarketul).</p>
<h4>2. Indicații de Traseu</h4>
<ul>
  <li><code>Siga todo recto</code> [siga todo rekto] = Mergeți drept înainte.</li>
  <li><code>Gire a la izquierda</code> = Virați la stânga.</li>
  <li><code>Gire a la derecha</code> = Virați la dreapta.</li>
  <li><code>Tome la primera calle</code> = Luați prima stradă.</li>
  <li><code>¿Por dónde se va a...?</code> = Pe unde se merge spre...?</li>
</ul>
""",
            "glossary": [
                {"term": "todo recto", "def": "Drept înainte (atenție: 'a la derecha' = la dreapta; 'todo recto' = drept înainte!)."},
                {"term": "a la izquierda / derecha", "def": "La stânga / la dreapta."},
                {"term": "la calle", "def": "Strada."},
                {"term": "la estación de tren", "def": "Gara de tren."}
            ],
            "matchingPairs": [
                {"left": "Siga todo recto", "right": "Mergeți drept înainte"},
                {"left": "Gire a la derecha", "right": "Virați la dreapta"},
                {"left": "Gire a la izquierda", "right": "Virați la stânga"},
                {"left": "¿Dónde está el metro?", "right": "Unde este metroul?"}
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
            "hint": "Scrie Siga todo recto y gire a la derecha, por favor."
        },
        {
            "id": "es-a1-p22",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 22: Vremea & Starea Meteo (¿Qué tiempo hace?)",
            "theory": """
<p>Pentru a întreba cum este vremea în spaniolă, spunem: <strong>« ¿Qué tiempo hace? »</strong>. Cele mai multe răspunsuri folosesc verbul <strong>HACER</strong> (a face):</p>
<h4>1. Expresii Climatice cu HACER</h4>
<ul>
  <li><code>Hace buen tiempo</code> = E vreme frumoasă.</li>
  <li><code>Hace mal tiempo</code> = E vreme urâtă.</li>
  <li><code>Hace calor</code> = E cald.</li>
  <li><code>Hace frío</code> = E frig.</li>
  <li><code>Hace sol</code> = E soare / strălucește soarele.</li>
  <li><code>Hace viento</code> = E vânt.</li>
</ul>
<h4>2. Verbe Climatice</h4>
<ul>
  <li><code>Llueve</code> (de la <em>llover</em>) = Plouă / <code>Está lloviendo</code> = Plouă chiar acum.</li>
  <li><code>Nieva</code> (de la <em>nevar</em>) = Ninge.</li>
</ul>
""",
            "glossary": [
                {"term": "¿Qué tiempo hace?", "def": "Întrebarea clasică: 'Cum este vremea?'."},
                {"term": "Hace calor / frío", "def": "Descrierea temperaturii cu verbul hacer ('face cald/frig')."},
                {"term": "Llueve", "def": "'Plouă' (verb neregulat llover -> llueve)."},
                {"term": "Hace sol", "def": "'Este soare'."}
            ],
            "matchingPairs": [
                {"left": "Hace mucho calor", "right": "Este foarte cald"},
                {"left": "Hace mucho frío", "right": "Este foarte frig"},
                {"left": "Hoy llueve", "right": "Astăzi plouă"},
                {"left": "Hace buen tiempo", "right": "Este vreme frumoasă"}
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
            "hint": "Scrie Hoy hace muy buen tiempo y hace sol."
        },
        {
            "id": "es-a1-p23",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 40,
            "title": "Capitolul 23: Verbul „IR” (A MERGE) & El Futuro Próximo (IR + A + Infinitiv)",
            "theory": """
<p>Verbul <strong>ir</strong> (a merge) este complet neregulat, dar este cheia pentru a construi <strong>viitorul apropiat (El Futuro Próximo)</strong>.</p>
<h4>1. Conjugarea Verbului IR</h4>
<ul>
  <li><code>Yo voy</code> [voi] = Eu merg.</li>
  <li><code>Tú vas</code> = Tu mergi.</li>
  <li><code>Él / Ella / Usted va</code> = El / Ea merge.</li>
  <li><code>Nosotros vamos</code> = Noi mergem.</li>
  <li><code>Vosotros vais</code> = Voi mergeți.</li>
  <li><code>Ellos / Ellas / Ustedes van</code> = Ei / Ele merg.</li>
</ul>
<h4>2. El Futuro Próximo (IR + A + Infinitiv)</h4>
<p>Formula magică este: <strong>IR conjugat + prepoziția 'A' + Infinitivul verbului</strong> (echivalentul perfect al lui 'going to'):</p>
<ul>
  <li><em><strong>Voy a comer</strong> paella</em> = Voi mânca paella.</li>
  <li><em><strong>Vamos a viajar</strong> a España</em> = Vom călători în Spania.</li>
  <li><em>¿Qué <strong>vas a hacer</strong> hoy?</em> = Ce ai de gând să faci azi?</li>
</ul>
""",
            "glossary": [
                {"term": "Ir", "def": "Verbul 'a merge' (voy, vas, va, vamos, vais, van)."},
                {"term": "Ir + a + infinitivo", "def": "Structura viitorului apropiat în spaniolă ('urmează să fac ceva')."},
                {"term": "¡Vamos!", "def": "Exclamație celebră ce înseamnă 'Haidem!' / 'Să mergem!'."},
                {"term": "al (a + el)", "def": "Contracție obligatorie: 'Voy al cine' (nu 'Voy a el cine')."}
            ],
            "matchingPairs": [
                {"left": "Voy a comer", "right": "Voi mânca / Urmează să mănânc"},
                {"left": "Vamos a la playa", "right": "Mergem la plajă"},
                {"left": "Van a salir", "right": "Ei vor ieși"},
                {"left": "¿Qué vas a hacer?", "right": "Ce vei face?"}
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
            "hint": "Scrie Mañana voy a estudiar español con mis amigos."
        },
        {
            "id": "es-a1-p24",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 40,
            "title": "Capitolul 24: Verbele Reflexive & Rutina Zilnică (Levantarse, Ducharse)",
            "theory": """
<p>Verbele care descriu rutina personală sunt <strong>verbe reflexive</strong> și sunt însoțite de pronumele reflexive: <code>me, te, se, nos, os, se</code>.</p>
<h4>1. Conjugarea Verbului LEVANTARSE (A se scula din pat)</h4>
<ul>
  <li><code>Yo me levanto</code> = Eu mă scol.</li>
  <li><code>Tú te levantas</code> = Tu te scoli.</li>
  <li><code>Él / Ella se levanta</code> = El / Ea se scoală.</li>
  <li><code>Nosotros nos levantamos</code> = Noi ne sculăm.</li>
  <li><code>Vosotros os levantáis</code> = Voi vă sculați.</li>
  <li><code>Ellos se levantan</code> = Ei se scoală.</li>
</ul>
<h4>2. Alte Verbe de Rutină</h4>
<p><code>despertarse (e->ie)</code> (a se trezi: <em>me despierto</em>), <code>ducharse</code> (a face duș), <code>vestirse (e->i)</code> (a se îmbrăca), <code>acostarse (o->ue)</code> (a merge la culcare: <em>me acuesto</em>).</p>
""",
            "glossary": [
                {"term": "Verbos reflexivos", "def": "Verbe marcate la infinitiv cu '-se' ce folosesc pronumele me, te, se, nos, os, se."},
                {"term": "me levanto", "def": "'Mă scol din pat'."},
                {"term": "me acuesto", "def": "'Mă culc' (cu diftongare o -> ue)."},
                {"term": "ducharse", "def": "A face duș."}
            ],
            "matchingPairs": [
                {"left": "Me despierto a las 7", "right": "Mă trezesc la ora 7"},
                {"left": "Me ducho por la mañana", "right": "Fac duș dimineața"},
                {"left": "Se viste rápido", "right": "Se îmbracă repede"},
                {"left": "Nos acostamos temprano", "right": "Ne culcăm devreme"}
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
            "hint": "Scrie Todos los días me levanto a las siete de la mañana."
        },
        {
            "id": "es-a1-p25",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m1,
            "xp": 45,
            "title": "Capitolul 25: Sinteză Conversațională A1: Sosirea la Hotel & Înregistrarea",
            "theory": """
<p>¡Enhorabuena! Ai finalizat modulul A1 de la zero. Să integrăm toate cunoștințele dobândite (saluturi, ser/estar/tener, numere, politețe) într-o conversație autentică la recepția unui hotel din Spania:</p>
<h4>1. Replicile Recepționerului</h4>
<ul>
  <li><em>¡Buenas tardes! Bienvenido al Hotel Sol.</em></li>
  <li><em>¿Tiene una reserva?</em> (Aveți o rezervare?)</li>
  <li><em>¿A qué nombre está la reserva?</em> (Pe ce nume este rezervarea?)</li>
  <li><em>¿Me deja su pasaporte, por favor?</em> (Îmi lăsați pașaportul, vă rog?)</li>
</ul>
<h4>2. Răspunsurile Oaspetelui</h4>
<ul>
  <li><em>Sí, tengo una reserva a nombre de Radu Popescu.</em></li>
  <li><em>Es para tres noches, con desayuno incluido.</em> (Pentru trei nopți, cu mic dejun inclus.)</li>
  <li><em>Aquí tiene mi pasaporte. ¿A qué hora es el desayuno?</em></li>
  <li><em>El desayuno es de 7:30 a 10:30. Su habitación es la 305 en la tercera planta.</em></li>
</ul>
""",
            "glossary": [
                {"term": "Tengo una reserva", "def": "Am o rezervare la hotel sau restaurant."},
                {"term": "a nombre de...", "def": "Pe numele lui..."},
                {"term": "Aquí tiene", "def": "'Poftiți / Iată' la înmânarea unui document."},
                {"term": "la habitación", "def": "Camera de hotel."}
            ],
            "matchingPairs": [
                {"left": "Tengo una reserva", "right": "Am o rezervare"},
                {"left": "¿A qué nombre?", "right": "Pe ce nume?"},
                {"left": "Aquí tiene mi pasaporte", "right": "Iată pașaportul meu"},
                {"left": "Para tres noches", "right": "Pentru trei nopți"}
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
            "hint": "Scrie ¡Buenas tardes! Tengo una reserva para dos personas, por favor."
        }
    ]

    try:
        from gen_spanish_b1_c2 import get_spanish_b1_c2_lessons
        lessons.extend(get_spanish_b1_c2_lessons())
    except ImportError:
        pass

    return lessons
