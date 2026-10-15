# -*- coding: utf-8 -*-
"""
Curriculum complet de Limba Franceză — de la Zero absolut (A1) până la Măiestrie (C2).
Structurat pe 3 module canonice:
- Modulul 1 (A1-A2): 25 capitole (Pronume, verbe auxiliare, numere, negație, întrebări, vocabular de bază)
- Modulul 2 (B1-B2): 13 capitole (Trecut, viitor, condițional, pronume COD/COI, ipoteze)
- Modulul 3 (C1-C2): 7 capitole (Subjonctif, nuanțe literare, idiomuri, corespondență formală)
Total: 45 capitole.
"""

def get_french_lessons():
    m1 = "1. Modulul A1–A2 (De la Zero: Pronume, Auxiliare & Conversație)"
    m2 = "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)"
    m3 = "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)"

    lessons = [
        # --- MODULUL 1: A1-A2 ---
        {
            "id": "fr-a1-p1",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 25,
            "title": "Capitolul 1: Pronumele Personale Subiect (Je, Tu, Il, Elle, On, Nous, Vous, Ils, Elles)",
            "theory": """
<p>Bine ai venit la limba franceză! Primul pas de la zero absolut este învățarea pronumelor personale subiect (persoanele: eu, tu, el, ea...).</p>
<h4>1. Cele 8 Pronume Personale</h4>
<ul>
  <li><code>Je</code> [jœ] = Eu (devine <code>J'</code> în fața unei vocale: <em>J'habite</em>).</li>
  <li><code>Tu</code> [ty] = Tu (folosit doar cu prietenii, familia, copiii).</li>
  <li><code>Il</code> [il] = El.</li>
  <li><code>Elle</code> [el] = Ea.</li>
  <li><code>On</code> [õ] = Noi (în franceza vorbită de zi cu zi) sau „se” impersonal.</li>
  <li><code>Nous</code> [nu] = Noi (în registrul formal/scris).</li>
  <li><code>Vous</code> [vu] = Voi (plural) SAU Dumneavoastră (politețe singular și plural).</li>
  <li><code>Ils</code> [il] = Ei (masculin sau grup mixt).</li>
  <li><code>Elles</code> [el] = Ele (exclusiv feminin).</li>
</ul>
<h4>2. Regula de Aur: Subiectul este Obligatoriu</h4>
<p>Spre deosebire de română sau spaniolă unde spunem simplu „Vorbesc”, în franceză este <strong>obligatoriu</strong> să pronunți subiectul: <em>Je parle</em>.</p>
""",
            "glossary": [
                {"term": "Je / J'", "def": "Pronumele persoanei I singular ('Eu'). Devine J' în fața vocalelor sau h mut."},
                {"term": "Tu vs Vous", "def": "'Tu' este informal (tutuit), 'Vous' exprimă politețea respectuoasă ('Dumneavoastră') sau pluralul."},
                {"term": "On", "def": "Pronume informal extrem de folosit în Franța ce înlocuiește 'Nous' (Noi) în conversații."},
                {"term": "Ils vs Elles", "def": "'Ils' pentru băieți sau grup mixt; 'Elles' exclusiv dacă toate persoanele sunt fete."}
            ],
            "matchingPairs": [
                {"left": "Je / J'", "right": "Eu"},
                {"left": "Tu", "right": "Tu (informal)"},
                {"left": "Vous", "right": "Voi / Dumneavoastră (politețe)"},
                {"left": "Ils / Elles", "right": "Ei / Ele"}
            ],
            "quiz": {
                "question": "Cum i te adresezi respectuos unui necunoscut, unui profesor sau unui funcționar în limba franceză?",
                "options": [
                    "Vous (pronumele de politețe echivalent cu 'Dumneavoastră')",
                    "Tu",
                    "On",
                    "Il"
                ],
                "correctIndex": 0,
                "explanation": "'Vous' este forma obligatorie de respect și politețe (vouvoiement) când vorbești cu un adult necunoscut."
            },
            "task": "Scrie cele trei pronume de singular 'Je, tu, il' (eu, tu, el) separate prin virgulă.",
            "starterCode": "// Completează pronumele\n",
            "expectedOutputPattern": "Je,\\s*tu,\\s*il\\.?",
            "hint": "Scrie Je, tu, il"
        },
        {
            "id": "fr-a1-p2",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 25,
            "title": "Capitolul 2: Formule de Salut, Rămas Bun & Politețe (Bonjour, Merci, Au revoir)",
            "theory": """
<p>Francezii pun un accent imens pe formulele de politețe. A intra într-un magazin fără a spune <em>Bonjour</em> este considerat o impolitețe gravă.</p>
<h4>1. Saluturi Uzuale</h4>
<ul>
  <li><code>Bonjour</code> [bõjur] = Bună ziua / Bună dimineața (pe tot parcursul zilei).</li>
  <li><code>Bonsoir</code> [bõswar] = Bună seara (după ora 18:00).</li>
  <li><code>Salut</code> [saly] = Bună / Salut (informal, doar între prieteni; litera 't' finală este mută!).</li>
  <li><code>Bonne nuit</code> [bon nwi] = Noapte bună (doar la culcare).</li>
</ul>
<h4>2. Politețe & Rămas Bun</h4>
<ul>
  <li><code>S'il vous plaît</code> [sil vu ple] = Vă rog / Te rog (formal).</li>
  <li><code>Merci beaucoup</code> [mɛrsi boku] = Mulțumesc mult.</li>
  <li><code>De rien</code> [də rjɛ̃] / <code>Je vous en prie</code> = Cu plăcere / Pentru nimic.</li>
  <li><code>Au revoir</code> [o rəvwar] = La revedere.</li>
  <li><code>À bientôt</code> [a bjɛ̃to] = Pe curând.</li>
</ul>
""",
            "glossary": [
                {"term": "Bonjour", "def": "Formula universală de salut în timpul zilei ('Bună ziua')."},
                {"term": "S'il vous plaît", "def": "Expresie esențială de politețe ce înseamnă 'Vă rog' (abreviat SVP)."},
                {"term": "Merci beaucoup", "def": "'Mulțumesc foarte mult'."},
                {"term": "Au revoir", "def": "Formula clasică de despărțire ('La revedere')."}
            ],
            "matchingPairs": [
                {"left": "Bonjour", "right": "Bună ziua"},
                {"left": "Merci beaucoup", "right": "Mulțumesc mult"},
                {"left": "S'il vous plaît", "right": "Vă rog"},
                {"left": "Au revoir", "right": "La revedere"}
            ],
            "quiz": {
                "question": "Ce formulă de politețe este corectă pentru a spune 'Vă rog' unui chelner la restaurant în Franța?",
                "options": [
                    "S'il vous plaît",
                    "De rien",
                    "Bonjour",
                    "Salut"
                ],
                "correctIndex": 0,
                "explanation": "'S'il vous plaît' este expresia corectă și politicoasă pentru 'Vă rog'."
            },
            "task": "Scrie salutul de politețe complet 'Bonjour, s'il vous plaît.' (Bună ziua, vă rog).",
            "starterCode": "// Scrie salutul\n",
            "expectedOutputPattern": "Bonjour,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
            "hint": "Scrie Bonjour, s'il vous plaît."
        },
        {
            "id": "fr-a1-p3",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 3: Prezentarea Personală (Comment tu t'appelles? Je m'appelle...)",
            "theory": """
<p>Când faci cunoștință cu cineva, folosești verbul reflexiv <strong>s'appeler</strong> (a se numi) și expresii de prezentare simple.</p>
<h4>1. Cum te prezinți</h4>
<ul>
  <li><code>Comment tu t'appelles?</code> [komã ty tapɛl] = Cum te cheamă? (informal).</li>
  <li><code>Comment vous vous appelez?</code> = Cum vă numiți? (formal/politicos).</li>
  <li><code>Je m'appelle Andrei.</code> = Mă numesc Andrei.</li>
  <li><code>Enchanté(e)!</code> [ãʃãte] = Încântat / Încântată de cunoștință!</li>
</ul>
<h4>2. Țara și Originea</h4>
<ul>
  <li><code>D'où viens-tu?</code> = De unde ești / vii?</li>
  <li><code>Je viens de Roumanie.</code> = Vin din România.</li>
  <li><code>Je suis roumain</code> (masculin) / <code>Je suis roumaine</code> (feminin) = Sunt român / româncă.</li>
</ul>
""",
            "glossary": [
                {"term": "Je m'appelle...", "def": "Formula standard pentru 'Mă numesc...' / 'Numele meu este...'."},
                {"term": "Comment tu t'appelles?", "def": "Întrebare directă: 'Cum te cheamă?'."},
                {"term": "Enchanté / Enchantée", "def": "'Încântat(ă) de cunoștință' (se adaugă un 'e' suplimentar dacă vorbește o femeie)."},
                {"term": "Je suis roumain(e)", "def": "Exprimarea naționalității: 'Sunt român / româncă'."}
            ],
            "matchingPairs": [
                {"left": "Je m'appelle...", "right": "Mă numesc..."},
                {"left": "Comment tu t'appelles?", "right": "Cum te cheamă?"},
                {"left": "Enchanté!", "right": "Încântat de cunoștință!"},
                {"left": "Je suis roumain", "right": "Sunt român"}
            ],
            "quiz": {
                "question": "Ce răspunzi politicos imediat după ce o persoană ți se prezintă spunând 'Je m'appelle Pierre'?",
                "options": [
                    "Enchanté! (Încântat de cunoștință)",
                    "De rien!",
                    "Au revoir!",
                    "Pardon!"
                ],
                "correctIndex": 0,
                "explanation": "'Enchanté' este replica canonică de curtoazie la prezentarea unei persoane noi."
            },
            "task": "Scrie fraza completă de prezentare 'Je m'appelle Dan et je suis roumain.'.",
            "starterCode": "Je m'appelle ",
            "expectedOutputPattern": "Je\\s+m['’]appelle\\s+Dan\\s+et\\s+je\\s+suis\\s+roumain\\.?",
            "hint": "Scrie Je m'appelle Dan et je suis roumain."
        },
        {
            "id": "fr-a1-p4",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 4: Verbul Auxiliar „ÊTRE” (A FI) la Prezent",
            "theory": """
<p>Verbul <strong>être</strong> (a fi) este cel mai important verb din limba franceză. Este complet neregulat și trebuie memorat la perfecție.</p>
<h4>1. Conjugarea Completă la Prezent</h4>
<ul>
  <li><code>Je suis</code> [jə swi] = Eu sunt (<em>Je suis fatigué</em> = Sunt obosit).</li>
  <li><code>Tu es</code> [ty ɛ] = Tu ești (<em>Tu es gentil</em> = Ești amabil).</li>
  <li><code>Il / Elle / On est</code> [il ɛ] = El / Ea este (<em>Elle est professeure</em>).</li>
  <li><code>Nous sommes</code> [nu sɔm] = Noi suntem (<em>Nous sommes ici</em> = Suntem aici).</li>
  <li><code>Vous êtes</code> [vuz ɛt] = Voi sunteți / Dumneavoastră sunteți (atenție la legătura fonetică cu sunet [z]!).</li>
  <li><code>Ils / Elles sont</code> [il sõ] = Ei / Ele sunt (<em>Ils sont contents</em>).</li>
</ul>
""",
            "glossary": [
                {"term": "Être", "def": "Verbul 'a fi', utilizat pentru stări, profesii, naționalități și ca auxiliar de timp."},
                {"term": "Je suis", "def": "Forma de persoana I: 'Eu sunt'."},
                {"term": "Nous sommes", "def": "Forma de persoana I plural: 'Noi suntem'."},
                {"term": "Liaison la 'Vous êtes'", "def": "Pronunțarea literei s finale din 'vous' ca un sunet [z] legat de 'êtes' ([vuz-ɛt])."}
            ],
            "matchingPairs": [
                {"left": "Je suis", "right": "Eu sunt"},
                {"left": "Tu es", "right": "Tu ești"},
                {"left": "Nous sommes", "right": "Noi suntem"},
                {"left": "Vous êtes", "right": "Voi sunteți / Dumneavoastră sunteți"}
            ],
            "quiz": {
                "question": "Care este forma corectă a verbului 'être' pentru pronumele 'Nous' (Noi)?",
                "options": [
                    "sommes (Nous sommes)",
                    "êtes",
                    "sont",
                    "suis"
                ],
                "correctIndex": 0,
                "explanation": "Conjugarea regulată a verbului être la persoana I plural este 'Nous sommes'."
            },
            "task": "Scrie propoziția 'Je suis prêt.' (Sunt gata / pregătit).",
            "starterCode": "// Scrie propoziția cu être\n",
            "expectedOutputPattern": "Je\\s+suis\\s+pr[êe]t\\.?",
            "hint": "Scrie Je suis prêt."
        },
        {
            "id": "fr-a1-p5",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 5: Verbul Auxiliar „AVOIR” (A AVEA) la Prezent",
            "theory": """
<p>Al doilea verb fundamental este <strong>avoir</strong> (a avea). Pe lângă posesie, în franceză se folosește pentru <strong>vârstă</strong> și pentru multe senzații fizice unde în română folosim „a fi”.</p>
<h4>1. Conjugarea la Prezent</h4>
<ul>
  <li><code>J'ai</code> [je] = Eu am (<em>J'ai un ami</em> = Am un prieten).</li>
  <li><code>Tu as</code> [ty a] = Tu ai.</li>
  <li><code>Il / Elle / On a</code> [il a] = El / Ea are.</li>
  <li><code>Nous avons</code> [nuz avõ] = Noi avem (cu liaison [z]).</li>
  <li><code>Vous avez</code> [vuz ave] = Voi aveți / Dumneavoastră aveți.</li>
  <li><code>Ils / Elles ont</code> [ilz õ] = Ei / Ele au (atenție: sunet [z] la legătură!).</li>
</ul>
<h4>2. Expresii Idiomatice cu Avoir</h4>
<ul>
  <li><em>J'ai 20 ans</em> = Am 20 de ani (NU spunem 'Je suis 20 ans').</li>
  <li><em>J'ai faim</em> [fɛ̃] = Mi-e foame.</li>
  <li><em>J'ai soif</em> [swaf] = Mi-e sete.</li>
  <li><em>J'ai chaud / J'ai froid</em> = Mi-e cald / Mi-e frig.</li>
</ul>
""",
            "glossary": [
                {"term": "Avoir", "def": "Verbul 'a avea', folosit pentru posesie, vârstă și stări fiziologice."},
                {"term": "J'ai 25 ans", "def": "Exprimarea vârstei în franceză: folosește obligatoriu verbul avoir, nu être!"},
                {"term": "Avoir faim / soif", "def": "A-i fi foame / sete (literal: 'a avea foame')."},
                {"term": "Ils ont vs Ils sont", "def": "Ils ont se pronunță cu [z] ([il-zõ] = au); Ils sont se pronunță cu [s] ([il-sõ] = sunt)."}
            ],
            "matchingPairs": [
                {"left": "J'ai", "right": "Eu am"},
                {"left": "J'ai faim", "right": "Mi-e foame (am foame)"},
                {"left": "Nous avons", "right": "Noi avem"},
                {"left": "J'ai 25 ans", "right": "Am 25 de ani"}
            ],
            "quiz": {
                "question": "Cum spui corect 'Am 30 de ani' în limba franceză?",
                "options": [
                    "J'ai 30 ans. (se folosește verbul avoir)",
                    "Je suis 30 ans.",
                    "Je fais 30 ans.",
                    "Mon âge est 30."
                ],
                "correctIndex": 0,
                "explanation": "În limba franceză, vârsta se exprimă exclusiv cu verbul 'avoir' (J'ai ... ans)."
            },
            "task": "Scrie propoziția 'J'ai un livre et j'ai faim.' (Am o carte și mi-e foame).",
            "starterCode": "J'ai un ",
            "expectedOutputPattern": "J['’]ai\\s+un\\s+livre\\s+et\\s+j['’]ai\\s+faim\\.?",
            "hint": "Scrie J'ai un livre et j'ai faim."
        },
        {
            "id": "fr-a1-p6",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 6: Numerele de la 0 la 20 (Les Nombres de 0 à 20)",
            "theory": """
<p>Numărarea în franceză este esențială pentru ore, prețuri și numere de telefon. Iată primele 20 de numere:</p>
<h4>1. De la 0 la 10</h4>
<p><code>0: zéro</code>, <code>1: un</code>, <code>2: deux</code>, <code>3: trois</code>, <code>4: quatre</code>, <code>5: cinq</code>, <code>6: six</code>, <code>7: sept</code> (se pronunță [sɛt], p este mut!), <code>8: huit</code> [ɥit], <code>9: neuf</code>, <code>10: dix</code> [dis].</p>
<h4>2. De la 11 la 20</h4>
<p><code>11: onze</code>, <code>12: douze</code>, <code>13: treize</code>, <code>14: quatorze</code>, <code>15: quinze</code>, <code>16: seize</code>, <code>17: dix-sept</code>, <code>18: dix-huit</code>, <code>19: dix-neuf</code>, <code>20: vingt</code> [vɛ̃] (literele g și t sunt complet mute!).</p>
""",
            "glossary": [
                {"term": "un, deux, trois", "def": "Unu, doi, trei în limba franceză."},
                {"term": "sept [sɛt]", "def": "Cifra 7; litera 'p' nu se pronunță niciodată."},
                {"term": "vingt [vɛ̃]", "def": "Numărul 20; se pronunță nazal, fără 'g' sau 't' final."},
                {"term": "onze à seize", "def": "Numerele de la 11 la 16 care au terminația caracteristică '-ze'."}
            ],
            "matchingPairs": [
                {"left": "un, deux, trois", "right": "1, 2, 3"},
                {"left": "cinq, six, sept", "right": "5, 6, 7"},
                {"left": "huit, neuf, dix", "right": "8, 9, 10"},
                {"left": "quinze, vingt", "right": "15, 20"}
            ],
            "quiz": {
                "question": "Cum se scrie numărul 15 în limba franceză?",
                "options": [
                    "quinze",
                    "cincze",
                    "seize",
                    "quatorze"
                ],
                "correctIndex": 0,
                "explanation": "Numărul 15 se scrie 'quinze' [kɛ̃z]."
            },
            "task": "Scrie numerele 'un, deux, trois' separate prin virgulă și spațiu.",
            "starterCode": "// Scrie 1, 2, 3 în franceză\n",
            "expectedOutputPattern": "un,\\s*deux,\\s*trois",
            "hint": "Scrie un, deux, trois"
        },
        {
            "id": "fr-a1-p7",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 7: Numerele de la 20 la 100 & Sistemul Vigesimal Francez",
            "theory": """
<p>Numerele mari în franceză conțin o particularitate istorică fascinantă: sistemul de numărare în baze de 20 (sistem vigesimal de la celți).</p>
<h4>1. Zecile Regulate</h4>
<p><code>20: vingt</code>, <code>30: trente</code>, <code>40: quarante</code>, <code>50: cinquante</code>, <code>60: soixante</code>.</p>
<p>Pentru 21, 31, 41, 51, 61 se adaugă 'et un': <em>vingt et un</em>, <em>trente et un</em>.</p>
<h4>2. Zecile Speciale (70, 80, 90)</h4>
<ul>
  <li><code>70: soixante-dix</code> (literalmente: 60 + 10). 71 este <em>soixante et onze</em> (60 + 11).</li>
  <li><code>80: quatre-vingts</code> (literalmente: 4 de 20, adică 4 × 20).</li>
  <li><code>90: quatre-vingt-dix</code> (literalmente: 4 × 20 + 10). 95 este <em>quatre-vingt-quinze</em> (4 × 20 + 15).</li>
  <li><code>100: cent</code> [sã].</li>
</ul>
""",
            "glossary": [
                {"term": "soixante-dix (70)", "def": "Compus din 60 (soixante) + 10 (dix)."},
                {"term": "quatre-vingts (80)", "def": "Compus din 4 × 20 (patru douăzeci)."},
                {"term": "quatre-vingt-dix (90)", "def": "Compus din 4 × 20 + 10."},
                {"term": "cent (100)", "def": "Numărul o sută în limba franceză."}
            ],
            "matchingPairs": [
                {"left": "trente", "right": "30"},
                {"left": "cinquante", "right": "50"},
                {"left": "soixante-dix", "right": "70 (60 + 10)"},
                {"left": "quatre-vingts", "right": "80 (4 x 20)"}
            ],
            "quiz": {
                "question": "Cum se spune numărul 80 în limba franceză standard?",
                "options": [
                    "quatre-vingts (literal: patru de douăzeci)",
                    "octante",
                    "huitante",
                    "dix-huit"
                ],
                "correctIndex": 0,
                "explanation": "În franceza din Franța, 80 se calculează ca 4 × 20: 'quatre-vingts'."
            },
            "task": "Scrie numărul 100 în limba franceză: 'cent'.",
            "starterCode": "// Scrie 100\n",
            "expectedOutputPattern": "cent",
            "hint": "Scrie cent"
        },
        {
            "id": "fr-a1-p8",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 8: Zilele Săptămânii, Lunile Anului & Anotimpurile",
            "theory": """
<p>Toate zilele săptămânii și toate anotimpurile sunt de genul <strong>masculin</strong> în limba franceză și se scriu cu <strong>literă mică</strong>.</p>
<h4>1. Zilele Săptămânii (Les Jours de la Semaine)</h4>
<p><code>lundi</code> (luni), <code>mardi</code> (marți), <code>mercredi</code> (miercuri), <code>jeudi</code> (joi), <code>vendredi</code> (vineri), <code>samedi</code> (sâmbătă), <code>dimanche</code> (duminică).</p>
<h4>2. Lunile Anului (Les Mois)</h4>
<p><em>janvier, février, mars, avril, mai, juin, juillet, août [ut], septembre, octobre, novembre, décembre</em>.</p>
<h4>3. Anotimpurile (Les Saisons)</h4>
<p><code>le printemps</code> (primăvara), <code>l'été</code> (vara), <code>l'automne</code> (toamna), <code>l'hiver</code> (iarna).</p>
<p>Spunem: <em>au printemps</em> (primăvara), dar <em>en été, en automne, en hiver</em> (în fața vocalelor).</p>
""",
            "glossary": [
                {"term": "lundi, mardi...", "def": "Zilele săptămânii se scriu cu literă mică în franceză."},
                {"term": "le week-end", "def": "Sfârșitul de săptămână (sâmbătă și duminică)."},
                {"term": "en été / en hiver", "def": "Prepoziția 'en' folosită pentru anotimpurile care încep cu vocală."},
                {"term": "aujourd'hui", "def": "Cuvântul pentru 'astăzi' în limba franceză."}
            ],
            "matchingPairs": [
                {"left": "lundi", "right": "Luni"},
                {"left": "vendredi", "right": "Vineri"},
                {"left": "samedi et dimanche", "right": "Sâmbătă și duminică (weekend)"},
                {"left": "l'été et l'hiver", "right": "Vara și iarna"}
            ],
            "quiz": {
                "question": "Cum se spune 'Vineri' în limba franceză?",
                "options": [
                    "vendredi",
                    "mardi",
                    "jeudi",
                    "samedi"
                ],
                "correctIndex": 0,
                "explanation": "Ziua de vineri este 'vendredi'."
            },
            "task": "Scrie propoziția 'Aujourd'hui c'est lundi.' (Astăzi este luni).",
            "starterCode": "Aujourd'hui c'est ",
            "expectedOutputPattern": "Aujourd['’]hui\\s+c['’]est\\s+lundi\\.?",
            "hint": "Scrie Aujourd'hui c'est lundi."
        },
        {
            "id": "fr-a1-p9",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 9: Cât este ceasul? Exprimarea Timpului (L'Heure)",
            "theory": """
<p>Pentru a întreba cât este ceasul, spunem: <strong>« Quelle heure est-il? »</strong>. Răspunsul începe întotdeauna cu structura impersonală <strong>« Il est... »</strong>.</p>
<h4>1. Ore Fixe</h4>
<ul>
  <li><em>Il est une heure</em> = Este ora 1.</li>
  <li><em>Il est deux heures</em> = Este ora 2 (adăugăm 's' la heures).</li>
  <li><em>Il est midi</em> = Este ora 12:00 la prânz.</li>
  <li><em>Il est minuit</em> = Este ora 12:00 noaptea (miezul nopții).</li>
</ul>
<h4>2. Minute, Jumătăți și Sferturi</h4>
<ul>
  <li><em>et quart</em> = și un sfert (ex: <em>Il est trois heures et quart</em> = 3:15).</li>
  <li><em>et demie</em> = și jumătate (ex: <em>Il est quatre heures et demie</em> = 4:30).</li>
  <li><em>moins le quart</em> = fără un sfert (ex: <em>Il est cinq heures moins le quart</em> = 4:45).</li>
  <li><em>moins dix</em> = fără 10 minute (ex: <em>cinq heures moins dix</em> = 4:50).</li>
</ul>
""",
            "glossary": [
                {"term": "Quelle heure est-il?", "def": "Întrebarea standard: 'Cât este ceasul?'."},
                {"term": "Il est midi / minuit", "def": "Ora 12 ziua (midi) / ora 12 noaptea (minuit)."},
                {"term": "et demie", "def": "Și jumătate (ex: 2:30 = deux heures et demie)."},
                {"term": "moins le quart", "def": "Fără un sfert (ex: 5:45 = six heures moins le quart)."}
            ],
            "matchingPairs": [
                {"left": "Quelle heure est-il?", "right": "Cât este ceasul?"},
                {"left": "Il est midi", "right": "Este ora 12:00 la prânz"},
                {"left": "cinq heures et quart", "right": "5 și un sfert (5:15)"},
                {"left": "six heures et demie", "right": "6 și jumătate (6:30)"}
            ],
            "quiz": {
                "question": "Cum traduci în franceză 'Este ora 8 și jumătate' (8:30)?",
                "options": [
                    "Il est huit heures et demie.",
                    "Il est huit heures et quart.",
                    "Il est huit heures moins le quart.",
                    "Il est midi."
                ],
                "correctIndex": 0,
                "explanation": "'Et demie' înseamnă și jumătate; deci 'Il est huit heures et demie'."
            },
            "task": "Scrie propoziția 'Il est midi et quart.' (Este ora 12 și un sfert).",
            "starterCode": "Il est ",
            "expectedOutputPattern": "Il\\s+est\\s+midi\\s+et\\s+quart\\.?",
            "hint": "Scrie Il est midi et quart."
        },
        {
            "id": "fr-a1-p10",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 10: Articolele Hotărâte & Nehotărâte (Le, La, L', Les / Un, Une, Des)",
            "theory": """
<p>În franceză, fiecare substantiv are un gen (masculin sau feminin) și este însoțit aproape întotdeauna de un articol.</p>
<h4>1. Articole Nehotărâte (Un, O, Niște)</h4>
<ul>
  <li><code>un</code> = masculin singular (<em>un livre</em> = o carte, <em>un garçon</em> = un băiat).</li>
  <li><code>une</code> = feminin singular (<em>une table</em> = o masă, <em>une fille</em> = o fată).</li>
  <li><code>des</code> = plural nedeterminat (<em>des livres</em> = niște cărți).</li>
</ul>
<h4>2. Articole Hotărâte (Cel, Cea, -ul, -a)</h4>
<ul>
  <li><code>le</code> = masculin singular (<em>le café</em> = cafeaua).</li>
  <li><code>la</code> = feminin singular (<em>la maison</em> = casa).</li>
  <li><code>l'</code> = masculin sau feminin înainte de vocală sau h mut (<em>l'ami</em>, <em>l'hôtel</em>).</li>
  <li><code>les</code> = plural pentru ambele genuri (<em>les amis</em> = prietenii).</li>
</ul>
""",
            "glossary": [
                {"term": "un / une / des", "def": "Articole nehotărâte: un (masc.), une (fem.), des (plural)."},
                {"term": "le / la / les", "def": "Articole hotărâte: le (masc.), la (fem.), les (plural)."},
                {"term": "l' (Élision)", "def": "Forma redusă pentru le/la în fața cuvintelor care încep cu vocală (l'école)."},
                {"term": "Pluralul regulat (-s)", "def": "Majoritatea substantivelor formează pluralul adăugând un -s mut la final."}
            ],
            "matchingPairs": [
                {"left": "un livre / le livre", "right": "o carte / cartea (masculin)"},
                {"left": "une maison / la maison", "right": "o casă / casa (feminin)"},
                {"left": "l'ami / les amis", "right": "prietenul / prietenii (eliziune)"},
                {"left": "des étudiants", "right": "niște studenți (plural nehotărât)"}
            ],
            "quiz": {
                "question": "Ce articol hotărât este corect în fața cuvântului feminin 'école' (școală)?",
                "options": [
                    "l' (l'école, datorită vocalei 'é')",
                    "la école",
                    "le école",
                    "une école"
                ],
                "correctIndex": 0,
                "explanation": "Când un cuvânt feminin începe cu o vocală, 'la' devine 'l'' prin eliziune: 'l'école'."
            },
            "task": "Scrie perechea articol hotărât + substantiv: 'le garçon et la fille' (băiatul și fata).",
            "starterCode": "// Scrie băiatul și fata\n",
            "expectedOutputPattern": "le\\s+gar[çc]on\\s+et\\s+la\\s+fille\\.?",
            "hint": "Scrie le garçon et la fille"
        },
        {
            "id": "fr-a1-p11",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 30,
            "title": "Capitolul 11: Cum Spunem „NU”: Negația (Ne ... Pas)",
            "theory": """
<p>În limba franceză, negația standard este formată din <strong>două părți</strong> care îmbrățișează verbul ca un sandviș: <strong>NE + verb + PAS</strong>.</p>
<h4>1. Structura de Bază</h4>
<ul>
  <li><em>Je parle</em> (Vorbesc) $\rightarrow$ <em>Je <strong>ne</strong> parle <strong>pas</strong></em> (Nu vorbesc).</li>
  <li><em>Il comprend</em> (El înțelege) $\rightarrow$ <em>Il <strong>ne</strong> comprend <strong>pas</strong></em> (El nu înțelege).</li>
</ul>
<h4>2. Eliziunea 'N'' în fața Vocalelor</h4>
<p>Dacă verbul începe cu o vocală sau un 'h' mut, <code>ne</code> devine obligatoriu <code>n'</code>:</p>
<ul>
  <li><em>J'aime</em> $\rightarrow$ <em>Je <strong>n'</strong>aime <strong>pas</strong></em>.</li>
  <li><em>Il est prêt</em> $\rightarrow$ <em>Il <strong>n'</strong>est <strong>pas</strong> prêt</em>.</li>
  <li><em>J'ai faim</em> $\rightarrow$ <em>Je <strong>n'</strong>ai <strong>pas</strong> faim</em>.</li>
</ul>
""",
            "glossary": [
                {"term": "ne ... pas", "def": "Negația franceză dublă ce încadrează verbul conjugat."},
                {"term": "n' ... pas", "def": "Forma elidată când verbul începe cu vocală sau h mut (ex: n'est pas)."},
                {"term": "Omiterea lui 'ne' în vorbire", "def": "În conversația rapidă informală, francezii omit des 'ne' spunând doar 'J'sais pas'."},
                {"term": "Negație la Passé Composé", "def": "Încadrează doar auxiliarul: 'Je n'ai pas mangé'."}
            ],
            "matchingPairs": [
                {"left": "Je ne sais pas", "right": "Nu știu"},
                {"left": "Je ne parle pas anglais", "right": "Nu vorbesc engleză"},
                {"left": "Il n'est pas ici", "right": "El nu este aici (cu n')"},
                {"left": "Je n'ai pas le temps", "right": "Nu am timp"}
            ],
            "quiz": {
                "question": "Care este forma negativă corectă a propoziției 'Je comprends' (Înțeleg)?",
                "options": [
                    "Je ne comprends pas.",
                    "Je pas comprends.",
                    "Je non comprends.",
                    "Je ne comprends."
                ],
                "correctIndex": 0,
                "explanation": "Formula obligatorie este 'ne' în fața verbului și 'pas' imediat după acesta: 'Je ne comprends pas'."
            },
            "task": "Scrie propoziția negativă 'Je ne parle pas français.' (Nu vorbesc franceză).",
            "starterCode": "Je ne ",
            "expectedOutputPattern": "Je\\s+ne\\s+parle\\s+pas\\s+fran[çc]ais\\.?",
            "hint": "Scrie Je ne parle pas français."
        },
        {
            "id": "fr-a1-p12",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 12: Cuvinte Interogative (Qui, Que, Où, Quand, Comment, Pourquoi)",
            "theory": """
<p>Pentru a pune întrebări de la zero, ai nevoie de cele 7 cuvinte interogative esențiale:</p>
<h4>1. Pronumele și Adverbele de Întrebare</h4>
<ul>
  <li><code>Qui?</code> [ki] = Cine? (<em>Qui est là?</em> = Cine este acolo?).</li>
  <li><code>Que / Qu'est-ce que?</code> = Ce? (<em>Qu'est-ce que tu fais?</em> = Ce faci?).</li>
  <li><code>Où?</code> [u] = Unde? (<em>Où habitez-vous?</em> = Unde locuiți?).</li>
  <li><code>Quand?</code> [kã] = Când? (<em>Quand part le train?</em> = Când pleacă trenul?).</li>
  <li><code>Comment?</code> [kɔmã] = Cum? (<em>Comment ça va?</em> = Cum merge / Ce mai faci?).</li>
  <li><code>Combien?</code> [kõbjɛ̃] = Cât / Câți? (<em>Combien ça coûte?</em> = Cât costă asta?).</li>
  <li><code>Pourquoi?</code> [purkwa] = De ce? Răspunsul începe cu <code>Parce que</code> (Pentru că).</li>
</ul>
""",
            "glossary": [
                {"term": "Où", "def": "Unde (atenție la accentul grav 'ù' ce îl diferențiază de 'ou' = sau)."},
                {"term": "Qu'est-ce que...", "def": "Structură foarte folosită pentru a întreba 'Ce...' fără inversiune."},
                {"term": "Pourquoi / Parce que", "def": "Perechea 'De ce?' / 'Pentru că...' în limba franceză."},
                {"term": "Comment ça va?", "def": "Formula informală celebră: 'Ce mai faci?' / 'Cum merge?'."}
            ],
            "matchingPairs": [
                {"left": "Où habites-tu?", "right": "Unde locuiești?"},
                {"left": "Combien ça coûte?", "right": "Cât costă asta?"},
                {"left": "Comment ça va?", "right": "Cum merge / Ce mai faci?"},
                {"left": "Pourquoi? - Parce que...", "right": "De ce? - Pentru că..."}
            ],
            "quiz": {
                "question": "Ce cuvânt interogativ folosești pentru a întreba 'Unde este gara?'?",
                "options": [
                    "Où (Où est la gare?)",
                    "Quand",
                    "Qui",
                    "Pourquoi"
                ],
                "correctIndex": 0,
                "explanation": "'Où' înseamnă 'Unde' în limba franceză."
            },
            "task": "Întreabă unde este toaleta: 'Où sont les toilettes, s'il vous plaît?'.",
            "starterCode": "Où sont ",
            "expectedOutputPattern": "O[ùu]\\s+sont\\s+les\\s+toilettes,\\s*s['’]il\\s+vous\\s+pla[iî]t\\??",
            "hint": "Scrie Où sont les toilettes, s'il vous plaît?"
        },
        {
            "id": "fr-a1-p13",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 13: Culori, Adjective & Acordul de Gen și Număr",
            "theory": """
<p>În franceză, adjectivele <strong>se acordă în gen (masculin/feminin) și număr (singular/plural)</strong> cu substantivul pe care îl descriu.</p>
<h4>1. Regula Generală</h4>
<ul>
  <li>Pentru feminin: adaugă un <code>-e</code> la forma de masculin (<em>petit $\rightarrow$ petite</em>, <em>grand $\rightarrow$ grande</em>).</li>
  <li>Pentru plural: adaugă un <code>-s</code> la ambele genuri (<em>petits / petites</em>).</li>
</ul>
<h4>2. Culorile de Bază</h4>
<ul>
  <li><em>blanc / blanche</em> (alb / albă), <em>noir / noire</em> (negru / neagră).</li>
  <li><em>bleu / bleue</em> (albastru / albastră), <em>vert / verte</em> (verde).</li>
  <li><em>rouge</em> (roșu - deja se termină în -e, rămâne la fel la feminin!).</li>
  <li><em>jaune</em> (galben), <em>orange</em> și <em>marron</em> (sunt invariabile!).</li>
</ul>
<h4>3. Poziția Adjectivului</h4>
<p>Majoritatea adjectivelor stau <strong>după substantiv</strong> (<em>un livre rouge</em>), cu excepția celor scurte de frumusețe, vârstă, bunătate și mărime (BAGS: <em>un beau garçon</em>, <em>une grande maison</em>).</p>
""",
            "glossary": [
                {"term": "Accord des adjectifs", "def": "Regula prin care adjectivul primește -e la feminin și -s la plural."},
                {"term": "Poziție după substantiv", "def": "Culorile și majoritatea adjectivelor stau DUPĂ substantiv (une voiture blanche)."},
                {"term": "Invariable", "def": "Adjective de culoare care nu își schimbă niciodată forma (marron, orange)."},
                {"term": "blanc / blanche", "def": "Schimbare neregulată de feminin cu adăugarea lui 'he'."}
            ],
            "matchingPairs": [
                {"left": "un chat noir", "right": "o pisică neagră (motan negru - masc.)"},
                {"left": "une voiture noire", "right": "o mașină neagră (feminin cu -e)"},
                {"left": "des maisons blanches", "right": "case albe (feminin plural cu -es)"},
                {"left": "un grand appartement", "right": "un apartament mare (adjectiv plasat înainte)"}
            ],
            "quiz": {
                "question": "Cum se acordă adjectivul 'vert' (verde) pentru substantivul feminin plural 'les pommes' (merele)?",
                "options": [
                    "vertes (feminin plural: primește -e și -s)",
                    "verts",
                    "verte",
                    "vert"
                ],
                "correctIndex": 0,
                "explanation": "'Pomme' este feminin, iar 'les pommes' este la plural; așadar adăugăm '-es': 'les pommes vertes'."
            },
            "task": "Scrie sintagma 'une maison blanche et une grande porte' (o casă albă și o ușă mare).",
            "starterCode": "une maison ",
            "expectedOutputPattern": "une\\s+maison\\s+blanche\\s+et\\s+une\\s+grande\\s+porte\\.?",
            "hint": "Scrie une maison blanche et une grande porte"
        },
        {
            "id": "fr-a1-p14",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 14: Familia & Arborele Genealogic (La Famille)",
            "theory": """
<p>Să învățăm membrii familiei în limba franceză alături de articolele corespunzătoare:</p>
<h4>1. Familia Directă</h4>
<ul>
  <li><code>le père</code> [pɛr] = tatăl / <code>papa</code> = tati.</li>
  <li><code>la mère</code> [mɛr] = mama / <code>maman</code> = mami.</li>
  <li><code>les parents</code> [parã] = părinții (atenție: nu înseamnă 'rude', ci strict 'părinți'!).</li>
  <li><code>le fils</code> [fis] = fiul (litera l este mută, s se pronunță!).</li>
  <li><code>la fille</code> [fij] = fiica (sau fata).</li>
  <li><code>le frère</code> [frɛr] = fratele.</li>
  <li><code>la sœur</code> [sœr] = sora.</li>
</ul>
<h4>2. Rude Extinse</h4>
<p><code>les grands-parents</code> (bunicii), <code>le grand-père</code> (bunicul), <code>la grand-mère</code> (bunica), <code>l'oncle</code> (unchiul), <code>la tante</code> (mătușa), <code>le cousin / la cousine</code> (vărul / verișoara).</p>
""",
            "glossary": [
                {"term": "les parents", "def": "Părinții (tatăl și mama); este un 'faux ami' (nu înseamnă toate rudele)."},
                {"term": "le frère / la sœur", "def": "Fratele / sora în limba franceză."},
                {"term": "le fils [fis]", "def": "Fiul; pronunția este specială: l nu se aude, s se aude clar."},
                {"term": "la grand-mère", "def": "Bunica (se leagă cu cratimă)."}
            ],
            "matchingPairs": [
                {"left": "le père et la mère", "right": "Tatăl și mama"},
                {"left": "le frère et la sœur", "right": "Fratele și sora"},
                {"left": "le grand-père", "right": "Bunicul"},
                {"left": "mon cousin", "right": "Vărul meu"}
            ],
            "quiz": {
                "question": "Ce înseamnă cuvântul francez 'les parents'?",
                "options": [
                    "Părinții (tatăl și mama)",
                    "Toate rudele îndepărtate",
                    "Bunicii",
                    "Copiii"
                ],
                "correctIndex": 0,
                "explanation": "'Les parents' înseamnă strict părinții (mama și tata). Pentru rude în general se folosește cuvântul 'les proches' sau 'la famille'."
            },
            "task": "Scrie propoziția 'Mon père, ma mère et mon frère.' (Tatăl meu, mama mea și fratele meu).",
            "starterCode": "Mon père, ",
            "expectedOutputPattern": "Mon\\s+p[èe]re,\\s*ma\\s+m[èe]re\\s+et\\s+mon\\s+fr[èe]re\\.?",
            "hint": "Scrie Mon père, ma mère et mon frère."
        },
        {
            "id": "fr-a1-p15",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 15: Adjectivele Posesive (Mon, Ma, Mes / Ton, Ta, Tes / Son, Sa, Ses)",
            "theory": """
<p>În franceză, adjectivul posesiv <strong>se acordă cu obiectul posedat</strong> (cu ce ai), NU cu persoana care îl deține!</p>
<h4>1. Tabelul Posesivelor</h4>
<table>
  <tr><th>Posesor</th><th>Masc. Sg.</th><th>Fem. Sg.</th><th>Plural (Masc & Fem)</th></tr>
  <tr><td>Eu (Je)</td><td><code>mon</code></td><td><code>ma</code></td><td><code>mes</code></td></tr>
  <tr><td>Tu (Tu)</td><td><code>ton</code></td><td><code>ta</code></td><td><code>tes</code></td></tr>
  <tr><td>El/Ea (Il/Elle)</td><td><code>son</code></td><td><code>sa</code></td><td><code>ses</code></td></tr>
  <tr><td>Noi (Nous)</td><td><code>notre</code></td><td><code>notre</code></td><td><code>nos</code></td></tr>
  <tr><td>Voi/Dvs (Vous)</td><td><code>votre</code></td><td><code>votre</code></td><td><code>vos</code></td></tr>
  <tr><td>Ei/Ele (Ils/Elles)</td><td><code>leur</code></td><td><code>leur</code></td><td><code>leurs</code></td></tr>
</table>
<h4>2. Regula Secretă: 'Mon' în loc de 'Ma'</h4>
<p>Dacă un cuvânt feminin începe cu o vocală, se folosește <code>mon</code> în loc de <code>ma</code> pentru a evita ciocnirea a două vocale: <em><strong>mon</strong> amie</em> (prietena mea), NU <em>ma amie</em>!</p>
""",
            "glossary": [
                {"term": "mon, ton, son", "def": "Posesive masculine: al meu, al tău, al său."},
                {"term": "ma, ta, sa", "def": "Posesive feminine: a mea, a ta, a sa."},
                {"term": "mes, tes, ses", "def": "Posesive de plural pentru ambele genuri."},
                {"term": "mon amie", "def": "Excepție eufonică: folosirea lui 'mon' în fața unui cuvânt feminin ce începe cu vocală."}
            ],
            "matchingPairs": [
                {"left": "mon livre / ma maison", "right": "cartea mea / casa mea"},
                {"left": "mes amis", "right": "prietenii mei"},
                {"left": "notre projet / nos projets", "right": "proiectul nostru / proiectele noastre"},
                {"left": "mon amie (feminin)", "right": "prietena mea (cu mon pentru eufonie)"}
            ],
            "quiz": {
                "question": "De ce spunem 'mon amie' (prietena mea) dacă 'amie' este un substantiv de genul feminin?",
                "options": [
                    "Pentru a evita cacofonia și ciocnirea a două vocale (ma amie ar suna sacadat).",
                    "'Amie' este de fapt de genul masculin.",
                    "Forma 'ma' a fost ștearsă din dicționar.",
                    "Se folosește doar când vorbește un băiat."
                ],
                "correctIndex": 0,
                "explanation": "În fața oricărui substantiv feminin care începe cu vocală sau h mut, ma/ta/sa devin obligatoriu mon/ton/son pentru fluiditate fonetică."
            },
            "task": "Scrie sintagma 'mon passeport et mes bagages' (pașaportul meu și bagajele mele).",
            "starterCode": "// Scrie sintagma\n",
            "expectedOutputPattern": "mon\\s+passeport\\s+et\\s+mes\\s+bagages\\.?",
            "hint": "Scrie mon passeport et mes bagages"
        },
        {
            "id": "fr-a1-p16",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 16: Corpul Uman & Cum Exprimăm Durerea (J'ai mal à...)",
            "theory": """
<p>Când mergi la medic sau la farmacie în Franța, trebuie să știi să indici unde te doare.</p>
<h4>1. Părțile Corpului (Le Corps Humain)</h4>
<ul>
  <li><code>la tête</code> (capul), <code>le ventre</code> (burta/stomacul), <code>le dos</code> (spatele).</li>
  <li><code>la gorge</code> (gâtul), <code>les yeux</code> (ochii), <code>les dents</code> (dinții).</li>
  <li><code>le bras</code> (brațul), <code>la jambe</code> (piciorul).</li>
</ul>
<h4>2. Structura: AVOIR MAL À...</h4>
<p>Prepoziția <code>à</code> se contractă cu articolul hotărât:</p>
<ul>
  <li>à + le = <strong>au</strong>: <em>J'ai mal <strong>au</strong> ventre / au dos</em> (Mă doare burta / spatele).</li>
  <li>à + la = <strong>à la</strong>: <em>J'ai mal <strong>à la</strong> tête / à la gorge</em> (Mă doare capul / gâtul).</li>
  <li>à + l' = <strong>à l'</strong>: <em>J'ai mal <strong>à l'</strong>oreille</em> (Mă doare urechea).</li>
  <li>à + les = <strong>aux</strong>: <em>J'ai mal <strong>aux</strong> dents / aux yeux</em> (Mă dor dinții / ochii).</li>
</ul>
""",
            "glossary": [
                {"term": "J'ai mal à la tête", "def": "'Mă doare capul' (literal: am durere la cap)."},
                {"term": "J'ai mal au ventre", "def": "'Mă doare burta' (contractat: à + le = au)."},
                {"term": "J'ai mal aux dents", "def": "'Mă dor dinții' (contractat: à + les = aux)."},
                {"term": "le dos", "def": "Spatele (litera 's' este mută)."}
            ],
            "matchingPairs": [
                {"left": "J'ai mal à la tête", "right": "Mă doare capul"},
                {"left": "J'ai mal au ventre", "right": "Mă doare burta (au = à + le)"},
                {"left": "J'ai mal aux yeux", "right": "Mă dor ochii (aux = à + les)"},
                {"left": "J'ai de la fièvre", "right": "Am febră"}
            ],
            "quiz": {
                "question": "Cum spui corect 'Mă doare stomacul' dacă 'ventre' este un substantiv masculin?",
                "options": [
                    "J'ai mal au ventre. (à + le = au)",
                    "J'ai mal à la ventre.",
                    "J'ai mal à le ventre.",
                    "Je suis mal ventre."
                ],
                "correctIndex": 0,
                "explanation": "Prepoziția 'à' fuzionată cu articolul masculin 'le' formează obligatoriu articolul contractat 'au': 'J'ai mal au ventre'."
            },
            "task": "Scrie fraza medicală 'J'ai mal à la tête et j'ai de la fièvre.' (Mă doare capul și am febră).",
            "starterCode": "J'ai mal à ",
            "expectedOutputPattern": "J['’]ai\\s+mal\\s+[àa]\\s+la\\s+t[êe]te\\s+et\\s+j['’]ai\\s+de\\s+la\\s+fi[èe]vre\\.?",
            "hint": "Scrie J'ai mal à la tête et j'ai de la fièvre."
        },
        {
            "id": "fr-a1-p17",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 17: Mâncarea, Băuturile & La Restaurant (Comanda & Nota)",
            "theory": """
<p>Mâncarea este o artă în cultura franceză. Iată cum comanzi ca un localnic într-o braserie pariziană:</p>
<h4>1. Mesele Zilei & Alimente Esențiale</h4>
<ul>
  <li><code>le petit-déjeuner</code> = micul dejun.</li>
  <li><code>le déjeuner</code> = prânzul.</li>
  <li><code>le dîner</code> = cina.</li>
  <li><em>le poulet</em> (puiul), <em>la viande</em> (carnea), <em>le poisson</em> (peștele), <em>les légumes</em> (legumele), <em>le fromage</em> (brânza).</li>
</ul>
<h4>2. Cum Comanzi Politicos</h4>
<p>Nu spune niciodată « Je veux » (Vreau - sună agresiv!). Folosește condiționalul de politețe:</p>
<ul>
  <li><code>Je voudrais...</code> [jə vudrɛ] = Aș dori... (<em>Je voudrais un café, s'il vous plaît</em>).</li>
  <li><code>Pour moi, ce sera...</code> = Pentru mine va fi...</li>
  <li><code>L'addition, s'il vous plaît!</code> [ladisjõ] = Nota de plată, vă rog!</li>
</ul>
""",
            "glossary": [
                {"term": "Je voudrais...", "def": "Formulă de aur de politețe: 'Aș dori...' în loc de brutalul 'Vreau'."},
                {"term": "L'addition, s'il vous plaît", "def": "Cum ceri nota de plată la restaurant în Franța."},
                {"term": "une carafe d'eau", "def": "O carafă de apă de la robinet, gratuită prin lege în restaurantele franceze."},
                {"term": "Bon appétit!", "def": "'Poftă bună!'."}
            ],
            "matchingPairs": [
                {"left": "Je voudrais un café", "right": "Aș dori o cafea"},
                {"left": "L'addition, s'il vous plaît", "right": "Nota de plată, vă rog"},
                {"left": "Une carafe d'eau", "right": "O carafă cu apă (gratuită)"},
                {"left": "C'est délicieux!", "right": "Este delicios!"}
            ],
            "quiz": {
                "question": "Ce expresie folosești pentru a cere nota de plată la finalul mesei într-un restaurant francez?",
                "options": [
                    "L'addition, s'il vous plaît!",
                    "Le compte, s'il vous plaît!",
                    "La facture maintenant!",
                    "Combien pour moi?"
                ],
                "correctIndex": 0,
                "explanation": "La restaurant, nota se numește exclusiv 'l'addition'."
            },
            "task": "Comandă politicos: 'Je voudrais l'addition, s'il vous plaît.'.",
            "starterCode": "Je voudrais ",
            "expectedOutputPattern": "Je\\s+voudrais\\s+l['’]addition,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
            "hint": "Scrie Je voudrais l'addition, s'il vous plaît."
        },
        {
            "id": "fr-a1-p18",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 18: Locuința, Camerele & Mobilierul (La Maison)",
            "theory": """
<p>Să descriem o locuință (apartament sau casă) și încăperile sale:</p>
<h4>1. Încăperile Casei</h4>
<ul>
  <li><code>la maison</code> = casa / <code>l'appartement</code> (masc.) = apartamentul.</li>
  <li><code>le salon</code> / <code>le séjour</code> = sufrageria / camera de zi.</li>
  <li><code>la cuisine</code> = bucătăria.</li>
  <li><code>la chambre</code> = dormitorul.</li>
  <li><code>la salle de bains</code> = baia.</li>
  <li><code>les toilettes</code> (feminin plural) = toaleta (în Franța toaleta este adesea o cameră separată de baie!).</li>
</ul>
<h4>2. Mobilier & Obiecte</h4>
<p><code>la table</code> (masa), <code>la chaise</code> (scaunul), <code>le lit</code> (patul), <code>l'armoire</code> (dulapul), <code>le canapé</code> (canapeaua).</p>
""",
            "glossary": [
                {"term": "la chambre", "def": "Dormitorul (sau o cameră de hotel)."},
                {"term": "la salle de bains", "def": "Baia unde se află cada sau dușul."},
                {"term": "le salon", "def": "Camera de zi / sufrageria."},
                {"term": "Il y a...", "def": "Expresie esențială ce înseamnă 'Se află...' / 'Există...'."}
            ],
            "matchingPairs": [
                {"left": "dans la cuisine", "right": "în bucătărie"},
                {"left": "dans la chambre", "right": "în dormitor"},
                {"left": "Il y a un grand lit", "right": "Se află un pat mare"},
                {"left": "sur la table", "right": "pe masă"}
            ],
            "quiz": {
                "question": "Cum se numește 'dormitorul' în limba franceză?",
                "options": [
                    "la chambre",
                    "la cuisine",
                    "le bureau",
                    "le garage"
                ],
                "correctIndex": 0,
                "explanation": "Dormitorul este 'la chambre'."
            },
            "task": "Scrie propoziția 'Il y a une table et quatre chaises dans la cuisine.'.",
            "starterCode": "Il y a une ",
            "expectedOutputPattern": "Il\\s+y\\s+a\\s+une\\s+table\\s+et\\s+quatre\\s+chaises\\s+dans\\s+la\\s+cuisine\\.?",
            "hint": "Scrie Il y a une table et quatre chaises dans la cuisine."
        },
        {
            "id": "fr-a1-p19",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 19: Orașul & Întrebarea Direcției (La Ville et les Directions)",
            "theory": """
<p>Când vizitezi Parisul sau alt oraș francofon, trebuie să știi să te orientezi pe stradă:</p>
<h4>1. Locuri Publice</h4>
<p><code>la rue</code> (strada), <code>la place</code> (piața), <code>la gare</code> (gara), <code>l'hôtel</code> (hotelul), <code>la pharmacie</code> (farmacia), <code>le supermarché</code> (supermarketul), <code>le pont</code> (podul).</p>
<h4>2. Indicații de Direcție</h4>
<ul>
  <li><code>Allez tout droit</code> [ale tu drwa] = Mergeți drept înainte.</li>
  <li><code>Tournez à gauche</code> = Virați la stânga.</li>
  <li><code>Tournez à droite</code> = Virați la dreapta.</li>
  <li><code>Prenez la première rue à droite</code> = Luați prima stradă la dreapta.</li>
  <li><code>C'est près d'ici / C'est loin</code> = E aproape de aici / E departe.</li>
</ul>
""",
            "glossary": [
                {"term": "tout droit", "def": "Drept înainte (atenție: 'à droite' înseamnă la dreapta; 'tout droit' înseamnă drept înainte!)."},
                {"term": "à gauche / à droite", "def": "La stânga / la dreapta."},
                {"term": "la gare", "def": "Gara feroviară."},
                {"term": "Où se trouve...?", "def": "Unde se află...?"}
            ],
            "matchingPairs": [
                {"left": "Allez tout droit", "right": "Mergeți drept înainte"},
                {"left": "Tournez à gauche", "right": "Virați la stânga"},
                {"left": "Tournez à droite", "right": "Virați la dreapta"},
                {"left": "Où est la gare?", "right": "Unde este gara?"}
            ],
            "quiz": {
                "question": "Ce înseamnă instrucțiunea 'Allez tout droit, puis tournez à droite'?",
                "options": [
                    "Mergeți drept înainte, apoi virați la dreapta.",
                    "Mergeți la stânga, apoi opriți-vă.",
                    "Traversați strada și luați autobuzul.",
                    "Întoarceți-vă la hotel."
                ],
                "correctIndex": 0,
                "explanation": "'Tout droit' înseamnă drept înainte, iar 'à droite' înseamnă la dreapta."
            },
            "task": "Scrie îndrumarea 'Allez tout droit et tournez à gauche.' (Mergeți drept înainte și virați la stânga).",
            "starterCode": "Allez tout ",
            "expectedOutputPattern": "Allez\\s+tout\\s+droit\\s+et\\s+tournez\\s+[àa]\\s+gauche\\.?",
            "hint": "Scrie Allez tout droit et tournez à gauche."
        },
        {
            "id": "fr-a1-p20",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 35,
            "title": "Capitolul 20: Vremea & Starea Meteo (Quel temps fait-il?)",
            "theory": """
<p>Pentru a întreba despre vreme, se folosește întrebarea: <strong>« Quel temps fait-il? »</strong>. Răspunsul folosește aproape mereu construcția impersonală <strong>« Il fait... »</strong> (de la verbul faire):</p>
<h4>1. Expresii Climatice</h4>
<ul>
  <li><code>Il fait beau</code> = E vreme frumoasă.</li>
  <li><code>Il fait mauvais</code> = E vreme urâtă.</li>
  <li><code>Il fait chaud</code> = E cald.</li>
  <li><code>Il fait froid</code> = E frig.</li>
  <li><code>Il y a du soleil</code> = E soare.</li>
  <li><code>Il y a du vent</code> = E vânt.</li>
</ul>
<h4>2. Verbe Meteorologice Speciale</h4>
<ul>
  <li><code>Il pleut</code> (de la verbul <em>pleuvoir</em>) = Plouă.</li>
  <li><code>Il neige</code> (de la verbul <em>neiger</em>) = Ninge.</li>
</ul>
""",
            "glossary": [
                {"term": "Quel temps fait-il?", "def": "Întrebarea clasică: 'Cum este vremea?'."},
                {"term": "Il fait beau / froid", "def": "Construcție impersonală cu verbul faire pentru descrierea vremii."},
                {"term": "Il pleut", "def": "'Plouă' (de la verbul neregulat pleuvoir)."},
                {"term": "Il neige", "def": "'Ninge'."}
            ],
            "matchingPairs": [
                {"left": "Il fait beau", "right": "E vreme frumoasă"},
                {"left": "Il fait froid", "right": "E frig"},
                {"left": "Il pleut", "right": "Plouă"},
                {"left": "Il y a du soleil", "right": "Este soare"}
            ],
            "quiz": {
                "question": "Cum spui 'Plouă și e frig astăzi' în limba franceză?",
                "options": [
                    "Il pleut et il fait froid aujourd'hui.",
                    "Il fait pleuvoir et froid.",
                    "Il est pleuvant et froid.",
                    "La pluie est froide aujourd'hui."
                ],
                "correctIndex": 0,
                "explanation": "'Il pleut' înseamnă plouă, iar 'il fait froid' înseamnă este frig."
            },
            "task": "Scrie propoziția meteo 'Aujourd'hui il fait beau et il y a du soleil.'.",
            "starterCode": "Aujourd'hui il ",
            "expectedOutputPattern": "Aujourd['’]hui\\s+il\\s+fait\\s+beau\\s+et\\s+il\\s+y\\s+a\\s+du\\s+soleil\\.?",
            "hint": "Scrie Aujourd'hui il fait beau et il y a du soleil."
        },
        {
            "id": "fr-a1-p21",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 40,
            "title": "Capitolul 21: Verbul „ALLER” (A MERGE) & Le Futur Proche (Viitorul Imediat)",
            "theory": """
<p>Verbul <strong>aller</strong> (a merge) este al treilea cel mai utilizat verb din franceză și servește drept motor pentru construirea <strong>viitorului imediat (Le Futur Proche)</strong>.</p>
<h4>1. Conjugarea Verbului ALLER</h4>
<ul>
  <li><code>Je vais</code> [jə vɛ] = Eu merg / mă duc.</li>
  <li><code>Tu vas</code> [ty va] = Tu mergi.</li>
  <li><code>Il / Elle va</code> = El / Ea merge.</li>
  <li><code>Nous allons</code> [nuz alõ] = Noi mergem.</li>
  <li><code>Vous allez</code> [vuz ale] = Voi mergeți.</li>
  <li><code>Ils / Elles vont</code> [il võ] = Ei / Ele merg.</li>
</ul>
<h4>2. Le Futur Proche (ALLER + Infinitiv)</h4>
<p>Pentru a exprima ceva ce vei face imediat sau în viitorul apropiat, folosești formula: <strong>ALLER conjugat + Infinitivul verbului</strong>:</p>
<ul>
  <li><em>Je <strong>vais manger</strong></em> = Voi mânca / Urmează să mănânc.</li>
  <li><em>Nous <strong>allons partir</strong></em> = Vom pleca.</li>
  <li><em>Qu'est-ce que tu <strong>vas faire</strong>?</em> = Ce ai de gând să faci?</li>
</ul>
""",
            "glossary": [
                {"term": "Aller", "def": "Verbul 'a merge', complet neregulat (vais, vas, va, allons, allez, vont)."},
                {"term": "Futur Proche", "def": "Timp viitor foarte simplu format din Aller + Infinitiv (echivalent cu 'I am going to...')."},
                {"term": "Je vais", "def": "Eu merg / Urmează să fac ceva."},
                {"term": "Nous allons", "def": "Noi mergem."}
            ],
            "matchingPairs": [
                {"left": "Je vais au cinéma", "right": "Merg la cinema"},
                {"left": "Je vais manger", "right": "Urmează să mănânc (Futur Proche)"},
                {"left": "Nous allons voyager", "right": "Vom călători"},
                {"left": "Ils vont partir", "right": "Ei vor pleca"}
            ],
            "quiz": {
                "question": "Cum formezi Futur Proche pentru 'Eu voi dormi' (dormir = a dormi)?",
                "options": [
                    "Je vais dormir.",
                    "Je dors futur.",
                    "Je suis dormir.",
                    "Je aller dormir."
                ],
                "correctIndex": 0,
                "explanation": "Formula pentru Futur Proche este Je vais + infinitivul: 'Je vais dormir'."
            },
            "task": "Scrie propoziția la Futur Proche 'Je vais étudier le français ce soir.' (Voi studia franceza diseară).",
            "starterCode": "Je vais ",
            "expectedOutputPattern": "Je\\s+vais\\s+[ée]tudier\\s+le\\s+fran[çc]ais\\s+ce\\s+soir\\.?",
            "hint": "Scrie Je vais étudier le français ce soir."
        },
        {
            "id": "fr-a1-p22",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 40,
            "title": "Capitolul 22: Verbele Reflexive & Rutina Zilnică (Se lever, Se doucher)",
            "theory": """
<p>Verbele care descriu acțiunile pe care le facem asupra propriului corp (rutina zilnică) sunt <strong>verbe pronominale (reflexive)</strong> și folosesc pronumele reflexive: <code>me, te, se, nous, vous, se</code>.</p>
<h4>1. Conjugarea unui Verb Reflexiv (Exemplu: Se lever = A se trezi/scula)</h4>
<ul>
  <li><code>Je me lève</code> = Eu mă scol.</li>
  <li><code>Tu te lèves</code> = Tu te scoli.</li>
  <li><code>Il / Elle se lève</code> = El / Ea se scoală.</li>
  <li><code>Nous nous levons</code> = Noi ne sculăm.</li>
  <li><code>Vous vous levez</code> = Voi vă sculați.</li>
  <li><code>Ils / Elles se lèvent</code> = Ei / Ele se scoală.</li>
</ul>
<h4>2. Alte Verbe de Rutină</h4>
<p><code>se réveiller</code> (a se trezi), <code>se doucher</code> (a face duș), <code>s'habiller</code> (a se îmbrăca), <code>se coucher</code> (a se culca).</p>
""",
            "glossary": [
                {"term": "Verbes pronominaux", "def": "Verbe reflexive precedate de pronumele me, te, se, nous, vous, se."},
                {"term": "Je me réveille", "def": "'Mă trezesc'."},
                {"term": "Je me couche", "def": "'Mă culc' (merg la culcare)."},
                {"term": "s'habiller", "def": "A se îmbrăca (elidat în s' în fața vocalei)."}
            ],
            "matchingPairs": [
                {"left": "Je me réveille à 7h", "right": "Mă trezesc la ora 7"},
                {"left": "Je me douche", "right": "Fac duș"},
                {"left": "Il s'habille vite", "right": "El se îmbracă repede"},
                {"left": "Nous nous couchons", "right": "Ne culcăm"}
            ],
            "quiz": {
                "question": "Care este forma corectă pentru 'Noi ne trezim la ora 8' folosind verbul 'se réveiller'?",
                "options": [
                    "Nous nous réveillons à 8h.",
                    "Nous réveillons à 8h.",
                    "Nous se réveillons à 8h.",
                    "Nous vous réveillons à 8h."
                ],
                "correctIndex": 0,
                "explanation": "La persoana 'nous', pronumele reflexiv se repetă: 'Nous nous réveillons'."
            },
            "task": "Scrie propoziția de rutină 'Je me lève à sept heures tous les jours.' (Mă scol la ora 7 în fiecare zi).",
            "starterCode": "Je me ",
            "expectedOutputPattern": "Je\\s+me\\s+l[èe]ve\\s+[àa]\\s+sept\\s+heures\\s+tous\\s+les\\s+jours\\.?",
            "hint": "Scrie Je me lève à sept heures tous les jours."
        },
        {
            "id": "fr-a1-p23",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 40,
            "title": "Capitolul 23: Verbele Modale: Pouvoir (A putea), Vouloir (A vrea), Devoir (A trebui)",
            "theory": """
<p>Verbele modale sunt urmate direct de un alt verb la <strong>infinitiv</strong> (fără nicio prepoziție între ele).</p>
<h4>1. POUVOIR (A Putea)</h4>
<p><em>Je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent</em>.<br>
Exemplu: <em>Je peux vous aider?</em> = Pot să vă ajut?</p>
<h4>2. VOULOIR (A Vrea)</h4>
<p><em>Je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent</em>.<br>
Exemplu: <em>Tu veux venir avec moi?</em> = Vrei să vii cu mine?</p>
<h4>3. DEVOIR (A Trebui / Obligație)</h4>
<p><em>Je dois, tu dois, il doit, nous devons, vous devez, ils doivent</em>.<br>
Exemplu: <em>Je dois partir maintenant</em> = Trebuie să plec acum.</p>
""",
            "glossary": [
                {"term": "Pouvoir", "def": "A putea (capacitate sau permisiune)."},
                {"term": "Vouloir", "def": "A vrea (dorință)."},
                {"term": "Devoir", "def": "A trebui (obligație sau datorie)."},
                {"term": "Modal + Infinitif", "def": "Construcție directă fără prepoziție: Je peux faire, Je dois partir."}
            ],
            "matchingPairs": [
                {"left": "Je peux vous aider?", "right": "Pot să vă ajut?"},
                {"left": "Je veux apprendre", "right": "Vreau să învăț"},
                {"left": "Je dois partir", "right": "Trebuie să plec"},
                {"left": "Ils peuvent venir", "right": "Ei pot să vină"}
            ],
            "quiz": {
                "question": "Cum traduci în franceză 'Trebuie să lucrez astăzi' folosind verbul 'devoir'?",
                "options": [
                    "Je dois travailler aujourd'hui.",
                    "Je peux travailler aujourd'hui.",
                    "Je veux travailler aujourd'hui.",
                    "Je suis travailler aujourd'hui."
                ],
                "correctIndex": 0,
                "explanation": "'Je dois' înseamnă 'eu trebuie', urmat de infinitivul 'travailler'."
            },
            "task": "Scrie propoziția 'Je veux apprendre le français et je peux réussir.'.",
            "starterCode": "Je veux ",
            "expectedOutputPattern": "Je\\s+veux\\s+apprendre\\s+le\\s+fran[çc]ais\\s+et\\s+je\\s+peux\\s+r[ée]ussir\\.?",
            "hint": "Scrie Je veux apprendre le français et je peux réussir."
        },
        {
            "id": "fr-a1-p24",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 40,
            "title": "Capitolul 24: Verbele Neregulate Majore: FAIRE (A face) & PRENDRE (A lua)",
            "theory": """
<p>Verbele <strong>faire</strong> și <strong>prendre</strong> apar în sute de expresii uzuale franceze:</p>
<h4>1. FAIRE (A face)</h4>
<p><code>Je fais, tu fais, il fait, nous faisons [fəzõ], vous faites, ils font</code>.<br>
Utilizări: <em>faire du sport</em> (a face sport), <em>faire la cuisine</em> (a găti), <em>faire les courses</em> (a face cumpărături), <em>faire attention</em> (a fi atent).</p>
<h4>2. PRENDRE (A lua)</h4>
<p><code>Je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent</code>.<br>
Utilizări: <em>prendre le bus/métro</em> (a lua autobuzul), <em>prendre un café</em> (a bea o cafea), <em>prendre une douche</em> (a face un duș).</p>
""",
            "glossary": [
                {"term": "Faire", "def": "Verb neregulat: je fais, tu fais, il fait, nous faisons, vous faites, ils font."},
                {"term": "faire les courses", "def": "Expresie idiomatică ce înseamnă 'a face cumpărături de alimente'."},
                {"term": "Prendre", "def": "A lua; folosit și pentru mâncare/băutură (prendre un café) și transport (prendre le train)."},
                {"term": "vous faites", "def": "Atenție: la vous nu este 'faisez', ci 'vous faites'!"}
            ],
            "matchingPairs": [
                {"left": "Je fais du sport", "right": "Fac sport"},
                {"left": "Je prends le métro", "right": "Iau metroul"},
                {"left": "Nous faisons les courses", "right": "Facem cumpărăturile"},
                {"left": "Vous faites attention", "right": "Sunteți atent"}
            ],
            "quiz": {
                "question": "Care este forma de persoana a 2-a plural (vous) a verbului 'faire'?",
                "options": [
                    "vous faites (formă neregulată unică)",
                    "vous faisez",
                    "vous font",
                    "vous faitez"
                ],
                "correctIndex": 0,
                "explanation": "'Faire' este unul dintre puținele verbe a cărui formă pentru 'vous' este 'vous faites' (nu faisez!)."
            },
            "task": "Scrie propoziția 'Je prends un café et je fais mes devoirs.' (Beau o cafea și îmi fac temele).",
            "starterCode": "Je prends ",
            "expectedOutputPattern": "Je\\s+prends\\s+un\\s+caf[ée]\\s+et\\s+je\\s+fais\\s+mes\\s+devoirs\\.?",
            "hint": "Scrie Je prends un café et je fais mes devoirs."
        },
        {
            "id": "fr-a1-p25",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m1,
            "xp": 45,
            "title": "Capitolul 25: Sinteză Conversațională A1: Dialog Complet la Hotel & Check-in",
            "theory": """
<p>Felicitări! Ai finalizat Fundamentele de la Zero A1. Să unim tot ce am învățat (salutări, être, avoir, numere, politețe) într-un dialog real de check-in la un hotel francez.</p>
<h4>1. Replicile Recepționerului</h4>
<ul>
  <li><em>Bonjour Monsieur/Madame, bienvenue à l'Hôtel de Paris.</em></li>
  <li><em>Vous avez une réservation?</em> (Aveți o rezervare?)</li>
  <li><em>C'est à quel nom?</em> (Pe ce nume este?)</li>
</ul>
<h4>2. Răspunsurile Clientului</h4>
<ul>
  <li><em>Oui, j'ai une réservation au nom de Popescu pour trois nuits.</em></li>
  <li><em>Voici mon passeport.</em> (Iată pașaportul meu.)</li>
  <li><em>À quelle heure est le petit-déjeuner?</em> (La ce oră este micul dejun?)</li>
  <li><em>Le petit-déjeuner est de 7h à 10h. Voici votre clé, chambre 204.</em></li>
</ul>
""",
            "glossary": [
                {"term": "une réservation", "def": "O rezervare la hotel sau restaurant."},
                {"term": "Voici mon passeport", "def": "'Iată pașaportul meu' (prezentarea documentelor)."},
                {"term": "la clé", "def": "Cheia camerei de hotel."},
                {"term": "au nom de...", "def": "Pe numele lui..."}
            ],
            "matchingPairs": [
                {"left": "J'ai une réservation", "right": "Am o rezervare"},
                {"left": "C'est à quel nom?", "right": "Pe ce nume este?"},
                {"left": "Voici votre clé", "right": "Iată cheia dumneavoastră"},
                {"left": "Pour trois nuits", "right": "Pentru trei nopți"}
            ],
            "quiz": {
                "question": "Cum îi spui recepționerului că ai o rezervare pe numele 'Ionescu'?",
                "options": [
                    "J'ai une réservation au nom de Ionescu.",
                    "Je suis réservation nom Ionescu.",
                    "Mon nom est réserver Ionescu.",
                    "Je prends Ionescu."
                ],
                "correctIndex": 0,
                "explanation": "Formula consacrată în franceză este 'J'ai une réservation au nom de [Nume]'."
            },
            "task": "Scrie replica 'Bonjour, j'ai une réservation pour deux personnes, s'il vous plaît.'.",
            "starterCode": "Bonjour, j'ai ",
            "expectedOutputPattern": "Bonjour,\\s*j['’]ai\\s+une\\s+r[ée]servation\\s+pour\\s+deux\\s+personnes,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
            "hint": "Scrie Bonjour, j'ai une réservation pour deux personnes, s'il vous plaît."
        }
    ]

    try:
        from gen_french_b1_c2 import get_french_b1_c2_lessons
        lessons.extend(get_french_b1_c2_lessons())
    except ImportError:
        pass

    return lessons
