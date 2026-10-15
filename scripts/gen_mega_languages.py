# -*- coding: utf-8 -*-
"""
Generator for Foreign Languages & English mega curriculum expansion.
Covers French (45 chapters), Spanish (45 chapters),
English A1-A2 (8 lessons), English B1-B2 (8 lessons), English C1-C2 (8 lessons),
and English Familie & Hobby (10 lessons). Total: 124 lessons.
"""

from gen_french_curriculum import get_french_lessons
from gen_spanish_curriculum import get_spanish_lessons

def get_languages_lessons():
    lessons = []

    # ==========================================
    # 1. LIMBA FRANCEZĂ (45 capitole — 3 module de la zero)
    # ==========================================
    french = get_french_lessons()

    # ==========================================
    # 2. LIMBA SPANIOLĂ (45 capitole — 3 module de la zero)
    # ==========================================
    spanish = get_spanish_lessons()

    # ==========================================
    # 3. LIMBA ENGLEZĂ (A1-A2, B1-B2, C1-C2, Familie & Hobby)
    # ==========================================
    english_a = [
        {
            "id": "eng-a-1",
            "track": "Engleză (A1–A2)",
            "division": "Limbi Străine & Comunicare",
            "icon": "🌐",
            "level": "1. Începător / A1",
            "xp": 25,
            "title": "Capitolul 1: Ghid de Călătorie & Întrebarea Direcției (Asking for Directions)",
            "theory": """
<p>Când călătorești într-o țară vorbitoare de engleză, orientarea în oraș necesită structuri de politețe și expresii de direcție clare.</p>
<h4>1. Întrebări de Politețe</h4>
<p><em>Excuse me, could you tell me how to get to the train station?</em> sau <em>Where is the nearest pharmacy?</em>.</p>
<h4>2. Expresii de Direcție</h4>
<ul>
  <li><code>Turn left / Turn right</code> — Fă la stânga / la dreapta.</li>
  <li><code>Go straight ahead</code> — Mergi drept înainte.</li>
  <li><code>Across from / Opposite</code> — Vizavi de.</li>
  <li><code>Next to</code> — Lângă.</li>
</ul>
""",
            "glossary": [
                {"term": "Go straight ahead", "def": "Mergi drept înainte fără să virezi."},
                {"term": "Turn left / right", "def": "Virează la stânga sau la dreapta la următoarea intersecție."},
                {"term": "Across from", "def": "Situat pe partea opusă a străzii, vizavi de clădirea menționată."},
                {"term": "Excuse me", "def": "Formulă standard de curtoazie folosită pentru a atrage atenția cuiva pe stradă."}
            ],
            "matchingPairs": [
                {"left": "Excuse me, where is the station?", "right": "Scuzați-mă, unde este gara?"},
                {"left": "Go straight ahead for two blocks", "right": "Mergi drept înainte două străzi"},
                {"left": "Turn right at the traffic lights", "right": "Virează la dreapta la semafor"},
                {"left": "It is next to the museum", "right": "Este chiar lângă muzeu"}
            ],
            "quiz": {
                "question": "Ce expresie în limba engleză înseamnă 'Mergi drept înainte'?",
                "options": [
                    "Go straight ahead",
                    "Turn around now",
                    "Cross the bridge backwards",
                    "Stop at the corner"
                ],
                "correctIndex": 0,
                "explanation": "'Go straight ahead' este expresia standard în limba engleză pentru mersul drept înainte fără viraje."
            },
            "task": "Întreabă politicos unde se află cel mai apropiat spital: 'Excuse me, where is the nearest hospital?'.",
            "starterCode": "// Scrie întrebarea de direcție\n",
            "expectedOutputPattern": "Excuse\\s+me,\\s*where\\s+is\\s+the\\s+nearest\\s+hospital\\??",
            "hint": "Scrie Excuse me, where is the nearest hospital?"
        },
        {
            "id": "eng-a-2",
            "track": "Engleză (A1–A2)",
            "division": "Limbi Străine & Comunicare",
            "icon": "🌐",
            "level": "2. Elementar / A2",
            "xp": 30,
            "title": "Capitolul 2: Substantive Numărabile vs Nenumărabile (Countable vs Uncountable)",
            "theory": """
<p>În engleză, substantivele <strong>numărabile (Countable)</strong> pot avea formă de plural și pot fi numărate individual (<em>books</em>, <em>apples</em>), pe când cele <strong>nenumărabile (Uncountable)</strong> reprezintă mase, lichide sau concepte abstracte (<em>water</em>, <em>information</em>, <em>advice</em>, <em>money</em>) și au <strong>doar formă de singular</strong>.</p>
<h4>1. Many vs Much</h4>
<ul>
  <li><code>Many</code> se folosește cu substantive numărabile la plural: <em>How <strong>many</strong> apples do you have?</em></li>
  <li><code>Much</code> se folosește cu substantive nenumărabile (în special în întrebări și negații): <em>How <strong>much</strong> water is left?</em>, <em>I don't have <strong>much</strong> time</em>.</li>
</ul>
<h4>2. A lot of</h4>
<p>Se poate folosi atât cu cele numărabile, cât și cu cele nenumărabile în propoziții afirmative: <em>a lot of money</em>, <em>a lot of friends</em>.</p>
""",
            "glossary": [
                {"term": "Countable Nouns", "def": "Substantive ce pot fi numărate cu cifre și au formă de plural (car -> cars)."},
                {"term": "Uncountable Nouns", "def": "Substantive ce nu admit plural (water, information, advice, furniture, bread)."},
                {"term": "Much", "def": "Determinant cantitativ utilizat exclusiv cu substantive nenumărabile."},
                {"term": "Many", "def": "Determinant cantitativ utilizat exclusiv cu substantive numărabile la plural."}
            ],
            "matchingPairs": [
                {"left": "How many books?", "right": "Câte cărți? (numărabil la plural)"},
                {"left": "How much time?", "right": "Cât timp? (nenumărabil)"},
                {"left": "A lot of sugar", "right": "Mult zahăr (afirmativ)"},
                {"left": "Advice is uncountable", "right": "În engleză 'advice' nu primește niciodată 's' de plural"}
            ],
            "quiz": {
                "question": "De ce fraza 'He gave me many advices' este incorectă din punct de vedere gramatical în limba engleză?",
                "options": [
                    "'Advice' este un substantiv nenumărabil în engleză; nu poate avea plural și nu acceptă 'many' (forma corectă: much advice sau a lot of advice).",
                    "Verbul 'gave' este interzis la trecut.",
                    "Pronumele 'me' trebuie înlocuit cu 'I'.",
                    "Cuvântul 'advice' se folosește doar în justiție."
                ],
                "correctIndex": 0,
                "explanation": "În limba engleză, 'advice' și 'information' sunt strict nenumărabile (nu au plural și nu se numără direct; spunem 'pieces of advice' sau 'some advice')."
            },
            "task": "Întreabă cât costă folosind 'How much does this cost?'.",
            "starterCode": "// Întreabă prețul\n",
            "expectedOutputPattern": "How\\s+much\\s+does\\s+this\\s+cost\\??",
            "hint": "Scrie How much does this cost?"
        }
    ]

    english_b = [
        {
            "id": "eng-b-1",
            "track": "Engleză (B1–B2)",
            "division": "Limbi Străine & Comunicare",
            "icon": "🌐",
            "level": "1. Intermediar / B1",
            "xp": 40,
            "title": "Capitolul 1: Phrasal Verbs Esențiale în Context Profesional",
            "theory": """
<p>Un <strong>Phrasal Verb</strong> combină un verb cu o particulă prepozițională sau adverbială, creând un sens complet nou și adesea imprevizibil față de verbul de bază.</p>
<h4>1. Verbe Comune la Birou</h4>
<ul>
  <li><code>Bring up</code> — a aduce în discuție un subiect: <em>She brought up the budget during the meeting</em>.</li>
  <li><code>Call off</code> — a anula definitiv un eveniment: <em>They called off the conference due to bad weather</em>.</li>
  <li><code>Put off</code> — a amâna pentru o dată ulterioară: <em>Let's put off the decision until next Monday</em>.</li>
  <li><code>Carry out</code> — a executa, a duce la bun sfârșit: <em>We carried out a full security audit</em>.</li>
</ul>
""",
            "glossary": [
                {"term": "Phrasal Verb", "def": "Combinație verb + prepoziție ce generează o semnificație idiomatică nouă."},
                {"term": "Call off (Cancel)", "def": "A anula definitiv un plan sau o ședință stabilită."},
                {"term": "Put off (Postpone)", "def": "A amâna o activitate pentru o dată viitoare."},
                {"term": "Carry out (Execute)", "def": "A efectua o cercetare, un experiment sau un plan de acțiune."}
            ],
            "matchingPairs": [
                {"left": "Call off the meeting", "right": "Anulează complet ședința"},
                {"left": "Put off the deadline", "right": "Amână termenul limită"},
                {"left": "Bring up a new idea", "right": "Aduce în discuție o idee nouă"},
                {"left": "Carry out instructions", "right": "Duce la îndeplinire instrucțiunile"}
            ],
            "quiz": {
                "question": "Ce înseamnă propoziția: 'We decided to put off the launch until next month'?",
                "options": [
                    "Am decis să amânăm lansarea până luna viitoare.",
                    "Am decis să anulăm definitiv lansarea.",
                    "Am decis să grăbim lansarea.",
                    "Am lansat deja produsul luna trecută."
                ],
                "correctIndex": 0,
                "explanation": "'Put off' înseamnă a amâna (postpone) pentru o dată ulterioară, spre deosebire de 'call off' care înseamnă a anula definitiv."
            },
            "task": "Completează fraza profesională 'We must carry out a thorough investigation.'.",
            "starterCode": "We must ",
            "expectedOutputPattern": "We\\s+must\\s+carry\\s+out\\s+a\\s+thorough\\s+investigation\\.?",
            "hint": "Scrie We must carry out a thorough investigation."
        },
        {
            "id": "eng-b-2",
            "track": "Engleză (B1–B2)",
            "division": "Limbi Străine & Comunicare",
            "icon": "🌐",
            "level": "2. Intermediar Avansat / B2",
            "xp": 45,
            "title": "Capitolul 2: Modale de Deducție în Trecut (Must have, Can't have, Might have)",
            "theory": """
<p>Pentru a face deducții logice despre un eveniment care s-a petrecut în trecut pe baza dovezilor prezente, folosim verbe modale urmate de <strong>have + Past Participle</strong>.</p>
<h4>1. Certitudine Pozitivă: MUST HAVE</h4>
<p>Când ești aproape 100% convins că ceva s-a întâmplat: <em>The streets are wet; it <strong>must have rained</strong> last night</em>.</p>
<h4>2. Imposibilitate Logică: CAN'T HAVE (sau Couldn't have)</h4>
<p>Când ești convins că ceva a fost imposibil: <em>He <strong>can't have stolen</strong> the car; he was with me all night</em>.</p>
<h4>3. Posibilitate Incertă: MIGHT / MAY HAVE</h4>
<p>Când ceva este posibil, dar nesigur: <em>She hasn't arrived; she <strong>might have missed</strong> the bus</em>.</p>
""",
            "glossary": [
                {"term": "Modal of deduction", "def": "Verb modal utilizat pentru a estima probabilitatea sau certitudinea unui eveniment."},
                {"term": "Must have + V3", "def": "Deducție logică de certitudine pozitivă în trecut ('cu siguranță a...')."},
                {"term": "Can't have + V3", "def": "Deducție logică de imposibilitate absolută în trecut ('este imposibil să fi...')."},
                {"term": "Might have + V3", "def": "Posibilitate speculativă cu probabilitate de aproximativ 50%."}
            ],
            "matchingPairs": [
                {"left": "He must have forgotten his keys", "right": "Cu siguranță și-a uitat cheile (dovezi clare)"},
                {"left": "You can't have seen John yesterday", "right": "Este imposibil să-l fi văzut (e plecat din țară)"},
                {"left": "They might have lost their way", "right": "S-ar putea să se fi rătăcit (nesigur)"},
                {"left": "Could have helped", "right": "Ar fi putut ajuta, dar nu a făcut-o"}
            ],
            "quiz": {
                "question": "Ce structură modală este corectă pentru a spune 'Cu siguranță a plecat deja' pe baza faptului că biroul este gol și luminile sunt stinse?",
                "options": [
                    "He must have left already.",
                    "He can't have left already.",
                    "He should leave already.",
                    "He must leave yesterday."
                ],
                "correctIndex": 0,
                "explanation": "'Must have + past participle' exprimă concluzia logică fermă că o acțiune s-a produs în trecut pe baza indiciilor evidente din prezent."
            },
            "task": "Scrie propoziția de deducție 'She must have received my email.' (Cu siguranță a primit e-mailul meu).",
            "starterCode": "// Scrie deducția\n",
            "expectedOutputPattern": "She\\s+must\\s+have\\s+received\\s+my\\s+email\\.?",
            "hint": "Scrie She must have received my email."
        }
    ]

    english_c = [
        {
            "id": "eng-c-1",
            "track": "Engleză (C1–C2)",
            "division": "Limbi Străine & Comunicare",
            "icon": "🌐",
            "level": "1. Avansat / C1",
            "xp": 55,
            "title": "Capitolul 1: Propoziții Scindate (Cleft Sentences) pentru Accentuare",
            "theory": """
<p><strong>Cleft Sentences</strong> sunt structuri gramaticale complexe utilizate pentru a pune accentul pe un element precis al propoziției (subiectul, cauza, momentul sau acțiunea), transformând o propoziție simplă într-una cu două clauze.</p>
<h4>1. It-Clefts</h4>
<p>Formula: <code>It is / was + elementul accentuat + that / who</code>.</p>
<p><em>Dan wrote the code</em> $\rightarrow$ <em><strong>It was Dan who</strong> wrote the code</em> (Dan a fost cel care a scris codul, nu altcineva!).</p>
<h4>2. Wh-Clefts (Pseudo-Clefts)</h4>
<p>Formula: <code>What + clauză + is / was + elementul de impact</code>.</p>
<p><em>I need a quiet place</em> $\rightarrow$ <em><strong>What I really need is</strong> a quiet place</em>.</p>
""",
            "glossary": [
                {"term": "Cleft Sentence", "def": "Propoziție despicată sintactic pentru a focaliza atenția cititorului asupra unui detaliu crucial."},
                {"term": "It-Cleft", "def": "Structura 'It was [X] that/who...' ce izolează și subliniază responsabilitatea sau identitatea."},
                {"term": "Wh-Cleft", "def": "Structura 'What we need is...' ce creează suspans și accentuează predicatul logic."},
                {"term": "Emphatic Stress", "def": "Evidențierea stilistică a unei idei fără a ridica tonul vocii în discursul scris."}
            ],
            "matchingPairs": [
                {"left": "It was Alice who solved the bug", "right": "Alice a fost cea care a rezolvat problema (It-cleft)"},
                {"left": "What surprised me was his attitude", "right": "Ceea ce m-a surprins a fost atitudinea lui (Wh-cleft)"},
                {"left": "All I want is a fair decision", "right": "Tot ceea ce îmi doresc este o decizie corectă"},
                {"left": "The reason why we failed was...", "right": "Motivul pentru care am eșuat a fost..."}
            ],
            "quiz": {
                "question": "Transformă fraza 'The marketing campaign increased our sales' într-un Wh-cleft ce pune accent pe acțiunea campaniei:",
                "options": [
                    "What increased our sales was the marketing campaign.",
                    "It was sales that increased the marketing campaign.",
                    "The marketing campaign was that sales increased.",
                    "Why the campaign increased was our sales."
                ],
                "correctIndex": 0,
                "explanation": "'What increased our sales was the marketing campaign' folosește corect clauza 'What...' pentru a accentua campania de marketing ca factor determinant."
            },
            "task": "Scrie propoziția de accentuare 'What we really need is more time.' folosind un Wh-cleft.",
            "starterCode": "What we really ",
            "expectedOutputPattern": "What\\s+we\\s+really\\s+need\\s+is\\s+more\\s+time\\.?",
            "hint": "Scrie What we really need is more time."
        },
        {
            "id": "eng-c-2",
            "track": "Engleză (C1–C2)",
            "division": "Limbi Străine & Comunicare",
            "icon": "🌐",
            "level": "2. Măiestrie / C2",
            "xp": 70,
            "title": "Capitolul 2: Tehnici Avansate de Argumentare Diplomatică (Hedging & Nuance)",
            "theory": """
<p>În comunicarea executivă de nivel C2, dezacordul direct (<em>You are wrong</em>) este considerat neprofesionist. Vorbitorii nativi folosesc tehnica <strong>Hedging</strong> — atenuarea afirmațiilor categorice prin nuanțe subtile și formulări ipotetice.</p>
<h4>1. Verbe și Adverbe de Atenuare</h4>
<p>În loc de <em>This approach will fail</em>, se folosește: <em>This approach <strong>would seem to</strong> have significant drawbacks</em> sau <em>It is <strong>arguably</strong> not the most viable solution</em>.</p>
<h4>2. Dezacordul Diplomatic</h4>
<ul>
  <li><em>With all due respect, I am not entirely convinced that...</em></li>
  <li><em>I see your point, however, have we considered the potential repercussions?</em></li>
  <li><em>To a certain extent, that may be true, but...</em></li>
</ul>
""",
            "glossary": [
                {"term": "Hedging", "def": "Strategie discursivă de reducere a caracterului absolut al afirmațiilor pentru diplomație și rigoare academică."},
                {"term": "Arguably", "def": "Adverb sofisticat de nuanțare ce semnalează că o afirmație poate fi susținută cu argumente valide."},
                {"term": "Diplomatic Disagreement", "def": "Arta de a exprima o viziune contrară fără a ofensa interlocutorul."},
                {"term": "Tentative Language", "def": "Limbaj prudent ce utilizează forme condiționale (would, could, seem, appear)."}
            ],
            "matchingPairs": [
                {"left": "It would appear that...", "right": "S-ar părea că... (ton prudent și diplomat)"},
                {"left": "I am inclined to believe that...", "right": "Aș tinde să cred că..."},
                {"left": "With all due respect", "right": "Formulă de respect înainte de a contrazice un argument"},
                {"left": "To play devil's advocate", "right": "A susține intenționat opinia opusă pentru a testa rezistența unui plan"}
            ],
            "quiz": {
                "question": "Care dintre următoarele formulări reprezintă cel mai bun exemplu de 'Hedging' diplomatic într-o ședință de conducere?",
                "options": [
                    "It might be premature to draw definitive conclusions based on this preliminary data.",
                    "Your conclusions are completely false and ridiculous.",
                    "We must stop talking immediately.",
                    "I know everything about this project."
                ],
                "correctIndex": 0,
                "explanation": "Formularea folosește modale prudente (might be) și vocabular academic nuanțat (preliminary, definitive conclusions), reprezentând etalonul de stil diplomatic C2."
            },
            "task": "Scrie formula diplomatică de dezacord 'With all due respect, I must disagree with this assessment.'.",
            "starterCode": "// Scrie fraza diplomatică\n",
            "expectedOutputPattern": "With\\s+all\\s+due\\s+respect,\\s*I\\s+must\\s+disagree\\s+with\\s+this\\s+assessment\\.?",
            "hint": "Scrie With all due respect, I must disagree with this assessment."
        }
    ]

    english_hobby = [
        {
            "id": "eng-h-1",
            "track": "Engleză: Familie & Hobby",
            "division": "Limbi Străine & Comunicare",
            "icon": "🎨",
            "level": "1. Începător / A1",
            "xp": 30,
            "title": "Capitolul 1: Arborele Genealogic & Relațiile de Familie (Family & Relatives)",
            "theory": """
<p>Descrierea familiei este unul dintre primele subiecte de conversație. În limba engleză distingem clar între <strong>Immediate Family</strong> (familia restrânsă: părinți, copii, frați) și <strong>Extended Family</strong> (rudele extinse: veri, unchi, mătuși, bunici).</p>
<h4>1. Rudele prin Alianță (In-laws)</h4>
<p>Toate rudele dobândite prin căsătorie primesc sufixul <code>-in-law</code>:</p>
<ul>
  <li><code>Mother-in-law / Father-in-law</code> — Soacra / Socrul.</li>
  <li><code>Brother-in-law / Sister-in-law</code> — Cumnatul / Cumnata.</li>
  <li><code>Son-in-law / Daughter-in-law</code> — Ginerele / Nora.</li>
</ul>
<h4>2. Frați și Surori</h4>
<p>Substantivul colectiv neutru pentru frați și surori este <strong>siblings</strong> (<em>I have two siblings: one brother and one sister</em>).</p>
""",
            "glossary": [
                {"term": "Immediate Family", "def": "Familia de bază compusă din părinți, soț/soție și copii."},
                {"term": "Extended Family", "def": "Rudele de sânge lărgite (bunici, veri, mătuși, nepoți de frate)."},
                {"term": "In-laws", "def": "Termen generic pentru rudele partenerului de căsătorie."},
                {"term": "Siblings", "def": "Cuvânt colectiv ce desemnează frații și surorile unei persoane."}
            ],
            "matchingPairs": [
                {"left": "I have two siblings", "right": "Am doi frați/surori"},
                {"left": "My mother-in-law", "right": "Soacra mea"},
                {"left": "Nephew and niece", "right": "Nepot și nepoată (de frate/soră)"},
                {"left": "Only child", "right": "Copil unic la părinți (fără frați)"}
            ],
            "quiz": {
                "question": "Cum se traduce corect în limba engleză cuvântul 'cumnat' (fratele soției sau soțului)?",
                "options": [
                    "brother-in-law",
                    "step-brother",
                    "half-brother",
                    "cousin"
                ],
                "correctIndex": 0,
                "explanation": "Rudele dobândite prin căsătorie primesc terminația '-in-law'. Fratele partenerului este 'brother-in-law'."
            },
            "task": "Scrie propoziția 'I have three siblings and a large extended family.'.",
            "starterCode": "I have three ",
            "expectedOutputPattern": "I\\s+have\\s+three\\s+siblings\\s+and\\s+a\\s+large\\s+extended\\s+family\\.?",
            "hint": "Scrie I have three siblings and a large extended family."
        },
        {
            "id": "eng-h-2",
            "track": "Engleză: Familie & Hobby",
            "division": "Limbi Străine & Comunicare",
            "icon": "🎨",
            "level": "2. Elementar / A2",
            "xp": 35,
            "title": "Capitolul 2: Arta Culinară, Bucătărie & Gastronomie (Cooking & Recipes)",
            "theory": """
<p>Gătitul implică verbe specifice de preparare termică și mecanică ce diferențiază clar tehnicile culinare:</p>
<h4>1. Verbe de Bază în Bucătărie</h4>
<ul>
  <li><code>Chop</code> — a toca mărunt (legume, ierburi).</li>
  <li><code>Slice</code> — a tăia în felii (pâine, roșii).</li>
  <li><code>Grate</code> — a da pe răzătoare (brânză, morcovi).</li>
  <li><code>Stir</code> — a amesteca continuu cu o lingură într-un lichid.</li>
  <li><code>Boil</code> — a fierbe în clocot (apă la 100°C).</li>
  <li><code>Simmer</code> — a fierbe la foc mic, domol.</li>
  <li><code>Bake</code> — a coace la cuptor (pâine, prăjituri).</li>
  <li><code>Roast</code> — a rumeni la cuptor la temperatură înaltă (carne, cartofi).</li>
</ul>
""",
            "glossary": [
                {"term": "Chop", "def": "A tăia ingredientele în bucăți mici cu un cuțit."},
                {"term": "Simmer", "def": "A găti un lichid chiar sub punctul de fierbere, cu bule foarte fine."},
                {"term": "Grate", "def": "A mărunți alimentele folosind o răzătoare (grater)."},
                {"term": "Seasoning", "def": "Condimentarea mâncării cu sare, piper și ierburi aromate."}
            ],
            "matchingPairs": [
                {"left": "Chop the onions finely", "right": "Toacă ceapa mărunt"},
                {"left": "Simmer for 20 minutes", "right": "Fierbe la foc mic timp de 20 de minute"},
                {"left": "Grate some cheese on top", "right": "Rade niște brânză deasupra"},
                {"left": "Preheat the oven to 180°C", "right": "Preîncălzește cuptorul la 180 de grade"}
            ],
            "quiz": {
                "question": "Ce verb în limba engleză desemnează coacerea prăjiturilor sau a pâinii la cuptor?",
                "options": [
                    "Bake",
                    "Boil",
                    "Fry",
                    "Steam"
                ],
                "correctIndex": 0,
                "explanation": "'Bake' este verbul specific pentru coacerea produselor de panificație și a dulciurilor în cuptor."
            },
            "task": "Scrie instrucțiunea culinară 'Chop the vegetables and simmer the soup for 15 minutes.'.",
            "starterCode": "// Scrie instrucțiunea\n",
            "expectedOutputPattern": "Chop\\s+the\\s+vegetables\\s+and\\s+simmer\\s+the\\s+soup\\s+for\\s+15\\s+minutes\\.?",
            "hint": "Scrie Chop the vegetables and simmer the soup for 15 minutes."
        },
        {
            "id": "eng-h-3",
            "track": "Engleză: Familie & Hobby",
            "division": "Limbi Străine & Comunicare",
            "icon": "🎨",
            "level": "3. Intermediar / B1",
            "xp": 40,
            "title": "Capitolul 3: Cinematografie & Recenzii de Filme (Cinema & Movie Reviews)",
            "theory": """
<p>Discuțiile despre filme depășesc simplul „It was good”. Engleza intermediară oferă un vocabular precis pentru a analiza scenariul, jocul actoricesc și regia.</p>
<h4>1. Vocabular Cinematografic</h4>
<ul>
  <li><code>Plot twist</code> — o întorsătură neașteptată de situație în poveste.</li>
  <li><code>Blockbuster</code> — film comercial cu buget uriaș și succes masiv de casă.</li>
  <li><code>Soundtrack (OST)</code> — coloana sonoră originală compusă pentru film.</li>
  <li><code>Binge-watch</code> — a viziona mai multe episoade sau un sezon întreg dintr-un serial fără oprire.</li>
  <li><code>Lead actor / actress</code> — actorul / actrița în rolul principal.</li>
</ul>
""",
            "glossary": [
                {"term": "Plot twist", "def": "Schimbare bruscă și surprinzătoare în evoluția intrigii narative."},
                {"term": "Blockbuster", "def": "Film comercial de mare succes financiar la box-office."},
                {"term": "Binge-watch", "def": "Obiceiul modern de a consuma episoade consecutive ale unui serial într-o singură sesiune."},
                {"term": "Cinematography", "def": "Arta compoziției vizuale, a unghiurilor de filmare și a iluminării într-un film."}
            ],
            "matchingPairs": [
                {"left": "Unexpected plot twist", "right": "Întorsătură neașteptată de situație"},
                {"left": "I binge-watched the whole season", "right": "Am văzut tot sezonul dintr-o răsuflare"},
                {"left": "The soundtrack is breathtaking", "right": "Coloana sonoră îți taie răsuflarea"},
                {"left": "Directed by a visionary filmmaker", "right": "Regizat de un cineast vizionar"}
            ],
            "quiz": {
                "question": "Ce înseamnă expresia modernă 'to binge-watch a series'?",
                "options": [
                    "A viziona multe episoade consecutive dintr-un serial fără pauză.",
                    "A scrie o recenzie negativă despre un film.",
                    "A merge la cinematograf cu prietenii.",
                    "A șterge contul de pe platforma de streaming."
                ],
                "correctIndex": 0,
                "explanation": "'Binge-watch' descrie vizionarea maraton a mai multor episoade dintr-un serial într-o perioadă scurtă de timp."
            },
            "task": "Scrie recenzia scurtă 'The movie had an amazing plot twist at the end.'.",
            "starterCode": "The movie had an ",
            "expectedOutputPattern": "The\\s+movie\\s+had\\s+an\\s+amazing\\s+plot\\s+twist\\s+at\\s+the\\s+end\\.?",
            "hint": "Scrie The movie had an amazing plot twist at the end."
        },
        {
            "id": "eng-h-4",
            "track": "Engleză: Familie & Hobby",
            "division": "Limbi Străine & Comunicare",
            "icon": "🎨",
            "level": "4. Senior / B2",
            "xp": 50,
            "title": "Capitolul 4: Călătorii de Aventură & Imersiune Culturală (Travel & Adventure)",
            "theory": """
<p>Călătoriile moderne pun accent pe <strong>turismul sustenabil</strong> și pe explorarea locurilor autentice, dincolo de traseele turistice aglomerate.</p>
<h4>1. Colocații Idiomatice de Călătorie</h4>
<ul>
  <li><code>Off the beaten track</code> — departe de traseele turistice convenționale, într-o zonă izolată și autentică.</li>
  <li><code>Travel on a shoestring</code> — a călători cu un buget extrem de redus (economic).</li>
  <li><code>Wanderlust</code> — dorința puternică și irezistibilă de a călători și de a explora lumea.</li>
  <li><code>Cultural immersion</code> — integrarea completă în tradițiile, mâncarea și viața comunității locale.</li>
</ul>
""",
            "glossary": [
                {"term": "Off the beaten track", "def": "Locații neatinse de turismul de masă; destinații autentice și liniștite."},
                {"term": "Travel on a shoestring", "def": "Călătorie realizată cu fonduri financiare minime, dormind în hosteluri."},
                {"term": "Wanderlust", "def": "Pasiune profundă pentru călătorii și descoperirea de noi culturi."},
                {"term": "Itinerary", "def": "Planul detaliat zi cu zi al traseului și obiectivelor unei călătorii."}
            ],
            "matchingPairs": [
                {"left": "Explore off the beaten track", "right": "Explorează dincolo de traseele turistice aglomerate"},
                {"left": "A severe case of wanderlust", "right": "O dorință nestăvilită de a călători prin lume"},
                {"left": "Backpacking across South America", "right": "Călătorie cu rucsacul în spate prin America de Sud"},
                {"left": "Deep cultural immersion", "right": "Integrare completă în cultura comunității locale"}
            ],
            "quiz": {
                "question": "Ce înseamnă când cineva spune că preferă destinațiile 'off the beaten track'?",
                "options": [
                    "Preferă locuri autentice, mai puțin cunoscute și neaglomerate de autocarele de turiști.",
                    "Călătorește exclusiv cu trenuri de mare viteză.",
                    "Nu părăsește niciodată camera de hotel.",
                    "Vizitează doar parcuri tematice din marile capitale."
                ],
                "correctIndex": 0,
                "explanation": "'Off the beaten track' se referă la destinații izolate, puțin circulate de turiștii obișnuiți, care oferă experiențe locale autentice."
            },
            "task": "Scrie propoziția de călătorie 'We prefer traveling off the beaten track to experience authentic culture.'.",
            "starterCode": "We prefer traveling ",
            "expectedOutputPattern": "We\\s+prefer\\s+traveling\\s+off\\s+the\\s+beaten\\s+track\\s+to\\s+experience\\s+authentic\\s+culture\\.?",
            "hint": "Scrie We prefer traveling off the beaten track to experience authentic culture."
        }
    ]

    lessons.extend(french)
    lessons.extend(spanish)
    lessons.extend(english_a)
    lessons.extend(english_b)
    lessons.extend(english_c)
    lessons.extend(english_hobby)
    return lessons
