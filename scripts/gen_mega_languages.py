# -*- coding: utf-8 -*-
"""
Generator for Foreign Languages & English mega curriculum expansion.
Covers French (16 lessons), Spanish (16 lessons),
English A1-A2 (8 lessons), English B1-B2 (8 lessons), English C1-C2 (8 lessons),
and English Familie & Hobby (10 lessons). Total: 66 lessons.
"""

def get_languages_lessons():
    lessons = []

    # ==========================================
    # 1. LIMBA FRANCEZĂ (16 lessons)
    # ==========================================
    french = [
        {
            "id": "fr-new-1",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": "1. Începător / A1",
            "xp": 30,
            "title": "Capitolul 1: Verbe Regulate de Grupa 1 (-er) la Prezent",
            "theory": """
<p>În limba franceză, verbele de grupa 1 (terminația <code>-er</code> la infinitiv) reprezintă peste 80% din totalul verbelor (ex: <em>parler</em>, <em>habiter</em>, <em>aimer</em>, <em>travailler</em>).</p>
<h4>1. Terminațiile Prezentului</h4>
<p>Se elimină <code>-er</code> de la infinitiv și se adaugă terminațiile: <strong>-e, -es, -e, -ons, -ez, -ent</strong>.</p>
<pre><code>Je parle        Nous parlons
Tu parles       Vous parlez
Il/Elle parle   Ils/Elles parlent
</code></pre>
<h4>2. Regula Fonetică Esențială</h4>
<p>Terminațiile <code>-e</code>, <code>-es</code> și <code>-ent</code> sunt <strong>complet mute</strong> (se pronunță identic: [parl]). Doar terminațiile pentru <em>nous</em> (-ons) și <em>vous</em> (-ez) au sunet distinct.</p>
""",
            "glossary": [
                {"term": "Verbes du 1er groupe", "def": "Verbe regulate cu infinitivul în -er (cu excepția verbului neregulat aller)."},
                {"term": "Terminaisons muettes", "def": "Terminațiile -e, -es, -ent care nu se pronunță vocal în limba franceză vorbită."},
                {"term": "Élision (J')", "def": "Eliziunea lui 'Je' în 'J'' în fața unei vocale sau a unui h mut (ex: J'habite)."},
                {"term": "Radical", "def": "Rădăcina verbului rămasă după îndepărtarea terminației de infinitiv -er."}
            ],
            "matchingPairs": [
                {"left": "Je parle français", "right": "Eu vorbesc franceză"},
                {"left": "Nous habitons à Paris", "right": "Noi locuim la Paris"},
                {"left": "Vous travaillez ici", "right": "Dumneavoastră lucrați aici"},
                {"left": "Ils aiment la musique", "right": "Ei iubesc muzica"}
            ],
            "quiz": {
                "question": "Care este forma corectă de prezent a verbului 'habiter' pentru pronumele 'nous'?",
                "options": [
                    "habitons (Nous habitons)",
                    "habitez",
                    "habitent",
                    "habites"
                ],
                "correctIndex": 0,
                "explanation": "Terminația specifică pentru persoana I plural (nous) la verbele de grupa 1 este întotdeauna '-ons'."
            },
            "task": "Completează conjugarea pentru 'Je' a verbului 'parler' scriind 'Je parle roumain et français.'.",
            "starterCode": "// Completează propoziția\n",
            "expectedOutputPattern": "Je\\s+parle\\s+roumain\\s+et\\s+français\\.?",
            "hint": "Scrie Je parle roumain et français."
        },
        {
            "id": "fr-new-2",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": "1. Începător / A1",
            "xp": 35,
            "title": "Capitolul 2: Articole Partitive (du, de la, de l', des)",
            "theory": """
<p>În limba franceză, când vorbim despre cantități nedeterminate sau alimente și substanțe nenumărabile (apă, pâine, curaj, cafea), este <strong>obligatorie</strong> utilizarea articolelor partitive.</p>
<h4>1. Formele Articolului Partitiv</h4>
<ul>
  <li><code>du</code> — masculin singular (de + le): <em>du pain</em>, <em>du café</em>.</li>
  <li><code>de la</code> — feminin singular: <em>de la viande</em>, <em>de la salade</em>.</li>
  <li><code>de l'</code> — în fața unei vocale sau a unui h mut: <em>de l'eau</em>, <em>de l'huile</em>.</li>
  <li><code>des</code> — plural (de + les): <em>des légumes</em>, <em>des pâtes</em>.</li>
</ul>
<h4>2. Regula Negației Stricte</h4>
<p>La forma negativă, toate articolele partitive devin simplu <strong>de</strong> (sau <strong>d'</strong>): <em>Je bois du café</em> $\rightarrow$ <em>Je ne bois pas <strong>de</strong> café</em>.</p>
""",
            "glossary": [
                {"term": "Article partitif", "def": "Articol folosit pentru a desemna o parte dintr-o substanță nenumărabilă."},
                {"term": "du (de + le)", "def": "Articol partitiv masculin singular."},
                {"term": "de l'", "def": "Formă de eliziune folosită înaintea cuvintelor care încep cu vocală sau h mut."},
                {"term": "Transformare la negație", "def": "Regula prin care du, de la, des devin 'de' după negația 'ne... pas'."}
            ],
            "matchingPairs": [
                {"left": "Je bois du café", "right": "Beau cafea (masculin)"},
                {"left": "Elle mange de la salade", "right": "Ea mănâncă salată (feminin)"},
                {"left": "Je voudrais de l'eau", "right": "Aș dori apă (în fața vocalei)"},
                {"left": "Je n'ai pas de sucre", "right": "Nu am zahăr (de la negație)"}
            ],
            "quiz": {
                "question": "Cum se transformă propoziția 'Je mange du pain' la forma negativă?",
                "options": [
                    "Je ne mange pas de pain.",
                    "Je ne mange pas du pain.",
                    "Je ne mange pas des pains.",
                    "Je mange pas pain."
                ],
                "correctIndex": 0,
                "explanation": "După negația 'ne... pas', articolele partitive (du, de la, des) se transformă întotdeauna în prepoziția simplă 'de'."
            },
            "task": "Scrie propoziția 'Je voudrais de l'eau, s'il vous plaît.' folosind articolul partitiv pentru apă.",
            "starterCode": "// Cere apă politicos\n",
            "expectedOutputPattern": "Je\\s+voudrais\\s+de\\s+l['’]eau,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
            "hint": "Scrie Je voudrais de l'eau, s'il vous plaît."
        },
        {
            "id": "fr-new-3",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": "2. Junior / A2",
            "xp": 40,
            "title": "Capitolul 3: Passé Composé cu Auxiliarul „Avoir”",
            "theory": """
<p><strong>Passé Composé</strong> exprimă o acțiune punctuală finalizată în trecut. Pentru majoritatea covârșitoare a verbelor, se formează cu auxiliarul <strong>avoir</strong> conjugat la prezent + <strong>participiul trecut (participe passé)</strong> al verbului.</p>
<h4>1. Formarea Participiului Trecut</h4>
<ul>
  <li>Verbe în <code>-er</code> $\rightarrow$ <code>-é</code> (<em>parler $\rightarrow$ parlé</em>, <em>manger $\rightarrow$ mangé</em>).</li>
  <li>Verbe în <code>-ir</code> $\rightarrow$ <code>-i</code> (<em>finir $\rightarrow$ fini</em>, <em>choisir $\rightarrow$ choisi</em>).</li>
  <li>Verbe neregulate: <em>avoir $\rightarrow$ eu</em>, <em>être $\rightarrow$ été</em>, <em>faire $\rightarrow$ fait</em>, <em>voir $\rightarrow$ vu</em>.</li>
</ul>
<h4>2. Structura Propoziției</h4>
<p><em>J'ai mangé un croissant</em> (Am mâncat un croissant). La negație, particulele <code>ne... pas</code> încadrează auxiliarul: <em>Je n'ai pas mangé</em>.</p>
""",
            "glossary": [
                {"term": "Passé Composé", "def": "Timpul trecut compus cel mai utilizat în limba franceză pentru acțiuni încheiate."},
                {"term": "Auxiliaire avoir", "def": "Verbul 'a avea' conjugat la prezent (ai, as, a, avons, avez, ont) ca bază a timpului."},
                {"term": "Participe passé", "def": "Forma verbală de participiu trecut (ex: parlé, fini, fait, vu)."},
                {"term": "Négation au passé", "def": "Plasarea lui 'ne... pas' în jurul auxiliarului avoir (n'ai pas)."}
            ],
            "matchingPairs": [
                {"left": "J'ai parlé avec lui", "right": "Am vorbit cu el"},
                {"left": "Nous avons fini le projet", "right": "Am terminat proiectul"},
                {"left": "Elle a fait ses devoirs", "right": "Ea și-a făcut temele"},
                {"left": "Tu n'as pas vu le film", "right": "Nu ai văzut filmul"}
            ],
            "quiz": {
                "question": "Care este participiul trecut (participe passé) corect al verbului 'faire' în franceză?",
                "options": [
                    "fait (J'ai fait)",
                    "faisé",
                    "fais",
                    "faise"
                ],
                "correctIndex": 0,
                "explanation": "'Faire' este un verb neregulat al cărui participiu trecut este 'fait'."
            },
            "task": "Scrie propoziția la Passé Composé 'J'ai fini mon travail.' (Mi-am terminat munca).",
            "starterCode": "// Completează propoziția\n",
            "expectedOutputPattern": "J['’]ai\\s+fini\\s+mon\\s+travail\\.?",
            "hint": "Scrie J'ai fini mon travail."
        },
        {
            "id": "fr-new-4",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": "2. Junior / A2",
            "xp": 40,
            "title": "Capitolul 4: Passé Composé cu Auxiliarul „Être” & Acordul Participiului",
            "theory": """
<p>Un grup restrâns de verbe (verbele de mișcare și schimbare a stării — cunoscute ca <em>La maison d'être</em>) plus <strong>toate verbele reflexive</strong> formează Passé Composé cu auxiliarul <strong>être</strong>.</p>
<h4>1. Verbele cu 'être'</h4>
<p><em>aller</em>, <em>venir</em>, <em>arriver</em>, <em>partir</em>, <em>entrer</em>, <em>sortir</em>, <em>naître</em>, <em>mourir</em>, <em>rester</em>, <em>tomber</em>.</p>
<h4>2. Regula Acordului Obligatoriu</h4>
<p>La timpurile compuse cu <code>être</code>, participiul trecut <strong>se acordă obligatoriu în gen și număr</strong> cu subiectul:</p>
<ul>
  <li>Masculin plural: adaugă <code>-s</code> (<em>Ils sont allés</em>).</li>
  <li>Feminin singular: adaugă <code>-e</code> (<em>Elle est allée</em>).</li>
  <li>Feminin plural: adaugă <code>-es</code> (<em>Elles sont allées</em>).</li>
</ul>
""",
            "glossary": [
                {"term": "Verbes de mouvement (Être)", "def": "Cele 14 verbe fundamentale de mișcare ce folosesc obligatoriu auxiliarul être."},
                {"term": "Accord du participe", "def": "Modificarea terminației participiului trecut pentru a se potrivi în gen și număr cu subiectul."},
                {"term": "Verbes pronominaux", "def": "Verbe reflexive (se lever, se coucher) conjugate exclusiv cu être la trecut."},
                {"term": "Maison d'être", "def": "Mnemonică vizuală franceză pentru învățarea verbelor de mișcare pereche (venir/aller etc)."}
            ],
            "matchingPairs": [
                {"left": "Il est allé au bureau", "right": "El a mers la birou (masculin singular)"},
                {"left": "Elle est allée au bureau", "right": "Ea a mers la birou (feminin singular cu -e)"},
                {"left": "Ils sont partis tôt", "right": "Ei au plecat devreme (masculin plural cu -s)"},
                {"left": "Elles sont arrivées", "right": "Ele au sosit (feminin plural cu -es)"}
            ],
            "quiz": {
                "question": "Cum se acordă corect participiul verbului 'partir' în propoziția 'Marie et Sophie sont ...'?",
                "options": [
                    "parties (feminin plural: acord cu -es)",
                    "parti",
                    "partis",
                    "partie"
                ],
                "correctIndex": 0,
                "explanation": "Subiectul este format din două persoane de gen feminin (Marie et Sophie = Elles), așadar participiul trecut primește terminația '-es': parties."
            },
            "task": "Scrie propoziția la trecut 'Elle est arrivée à l'heure.' (Ea a sosit la timp) cu acordul feminin.",
            "starterCode": "// Scrie propoziția cu acord\n",
            "expectedOutputPattern": "Elle\\s+est\\s+arriv[ée]e\\s+[àa]\\s+l['’]heure\\.?",
            "hint": "Scrie Elle est arrivée à l'heure."
        },
        {
            "id": "fr-new-5",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": "3. Middle / B1",
            "xp": 45,
            "title": "Capitolul 5: L'Imparfait vs Passé Composé în Narațiuni",
            "theory": """
<p>Stăpânirea timpurilor trecute în franceză depinde de alternanța dintre <strong>L'Imparfait</strong> (Imperfect) și <strong>Passé Composé</strong>.</p>
<h4>1. L'Imparfait: Decorul, Durata și Rutina</h4>
<p>Descrie circumstanțele, stările sufletești, vremea sau acțiuni repetitive din trecut fără un început/sfârșit precis: <em>Il faisait beau</em> (Era vreme frumoasă), <em>Quand j'étais petit</em> (Când eram mic).</p>
<h4>2. Passé Composé: Evenimentul Punctual</h4>
<p>Exprimă acțiunea punctuală care întrerupe starea din fundal: <em>Je dormais (imparfait) quand le téléphone a sonné (passé composé)</em>.</p>
""",
            "glossary": [
                {"term": "L'Imparfait", "def": "Timp trecut folosit pentru descrieri, stări continue și acțiuni habituale în trecut."},
                {"term": "Terminaisons de l'imparfait", "def": "Terminațiile universale: -ais, -ais, -ait, -ions, -iez, -aient."},
                {"term": "Action de premier plan", "def": "Eveniment punctual rapid exprimat prin Passé Composé."},
                {"term": "Arrière-plan narratif", "def": "Cadrul narativ și descrierea de fundal exprimată prin Imparfait."}
            ],
            "matchingPairs": [
                {"left": "Il faisait froid", "right": "Era frig (descriere de fundal - Imparfait)"},
                {"left": "Soudain, il est tombé", "right": "Deodată, a căzut (acțiune punctuală - Passé Composé)"},
                {"left": "Chaque matin, je buvais", "right": "În fiecare dimineață beam (obicei repetat - Imparfait)"},
                {"left": "Pendant que je lisais", "right": "În timp ce citeam (acțiune continuă în derulare)"}
            ],
            "quiz": {
                "question": "În fraza 'Quand j'étais petit, je ... au football tous les jours', ce formă este corectă pentru a exprima o rutină repetată?",
                "options": [
                    "jouais (L'Imparfait - exprimă un obicei repetat)",
                    "ai joué (Passé Composé)",
                    "joue (Présent)",
                    "jouer"
                ],
                "correctIndex": 0,
                "explanation": "Expresia 'tous les jours' semnalează o acțiune repetată și habituală în trecut, caz clasic în care se folosește L'Imparfait (jouais)."
            },
            "task": "Completează fraza cu forma de imperfect a verbului être: 'Quand j'étais jeune, j'aimais voyager.'.",
            "starterCode": "Quand j'",
            "expectedOutputPattern": "Quand\\s+j['’][ée]tais\\s+jeune,\\s*j['’]aimais\\s+voyager\\.?",
            "hint": "Scrie Quand j'étais jeune, j'aimais voyager."
        },
        {
            "id": "fr-new-6",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": "3. Middle / B1",
            "xp": 50,
            "title": "Capitolul 6: Pronumele Relative: 'Qui', 'Que', 'Où' și 'Dont'",
            "theory": """
<p>Pronumele relative leagă două propoziții simple într-o frază complexă, evitând repetiția substantivului (antecedentul).</p>
<h4>1. Qui vs Que</h4>
<ul>
  <li><code>Qui</code> este <strong>subiect</strong> (urmat întotdeauna de un verb): <em>L'homme <strong>qui</strong> parle est mon professeur</em>.</li>
  <li><code>Que</code> este <strong>obiect direct</strong> (urmat de subiect + verb): <em>Le livre <strong>que</strong> je lis est passionnant</em>.</li>
</ul>
<h4>2. Où și Dont</h4>
<ul>
  <li><code>Où</code> indică locul sau timpul: <em>La ville <strong>où</strong> j'habite</em>.</li>
  <li><code>Dont</code> înlocuiește un complement introdus de prepoziția <strong>de</strong> (parler de, avoir besoin de): <em>Le projet <strong>dont</strong> j'ai besoin</em>.</li>
</ul>
""",
            "glossary": [
                {"term": "Pronom relatif", "def": "Cuvânt de legătură ce preia rolul unui antecedent dintr-o propoziție anterioară."},
                {"term": "Qui (Subiect)", "def": "Pronume relativ ce îndeplinește funcția de subiect în propoziția secundară."},
                {"term": "Que (COD)", "def": "Pronume relativ ce îndeplinește funcția de complement direct."},
                {"term": "Dont (de + substantiv)", "def": "Pronume relativ specific ce înlocuiește expresii construite cu prepoziția 'de'."}
            ],
            "matchingPairs": [
                {"left": "C'est la femme qui travaille ici", "right": "Qui este subiectul verbului travaille"},
                {"left": "C'est le film que j'ai vu", "right": "Que este obiectul direct al lui j'ai vu"},
                {"left": "Le pays où je suis né", "right": "Où indică locul nașterii"},
                {"left": "Ce dont j'ai peur", "right": "Dont înlocuiește 'avoir peur de'"}
            ],
            "quiz": {
                "question": "Ce pronume relativ completează corect fraza: 'C'est un problème ... nous avons parlé hier' (a vorbi despre = parler de)?",
                "options": [
                    "dont (deoarece verbul este 'parler de')",
                    "que",
                    "qui",
                    "où"
                ],
                "correctIndex": 0,
                "explanation": "Verbul 'parler' cere prepoziția 'de' (parler de quelque chose). Complementele cu 'de' sunt înlocuite întotdeauna de pronumele relativ 'dont'."
            },
            "task": "Completează fraza cu pronumele relativ 'dont': 'Voici le livre dont tout le monde parle.'.",
            "starterCode": "Voici le livre ",
            "expectedOutputPattern": "Voici\\s+le\\s+livre\\s+dont\\s+tout\\s+le\\s+monde\\s+parle\\.?",
            "hint": "Scrie Voici le livre dont tout le monde parle."
        },
        {
            "id": "fr-new-7",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": "4. Senior / B2",
            "xp": 55,
            "title": "Capitolul 7: Le Subjonctif Présent — Necesitate, Dorință & Îndoială",
            "theory": """
<p><strong>Subjonctif</strong> nu este un timp, ci un <strong>mod verbal</strong> al subiectivității, al incertitudinii, al dorinței și al obligației, apărând aproape întotdeauna în propoziții secundare introduse de <code>que</code>.</p>
<h4>1. Declanșatori Canonici</h4>
<ul>
  <li>Necesitate/Obligație: <em>Il faut que...</em>, <em>Il est nécessaire que...</em></li>
  <li>Dorință/Voință: <em>Je veux que...</em>, <em>Je souhaite que...</em></li>
  <li>Emoție/Sentiment: <em>Je suis content que...</em>, <em>J'ai peur que...</em></li>
  <li>Îndoială: <em>Je doute que...</em></li>
</ul>
<h4>2. Formare</h4>
<p>Se ia rădăcina persoanei a 3-a plural de la prezent (<em>ils finiss-ent</em>) și se adaugă terminațiile: <strong>-e, -es, -e, -ions, -iez, -ent</strong>. Forme neregulate esențiale: <em>être $\rightarrow$ que je sois</em>, <em>avoir $\rightarrow$ que j'aie</em>, <em>faire $\rightarrow$ que je fasse</em>.</p>
""",
            "glossary": [
                {"term": "Mode Subjonctif", "def": "Mod gramatical francez ce reflectă nesiguranța, voința, necesitatea sau emoția vorbitorului."},
                {"term": "Il faut que + subj.", "def": "Construcție impersonală obligatorie ce impune întotdeauna modul conjunctiv."},
                {"term": "Subjonctif irrégulier", "def": "Forme specifice pentru verbele être (sois), avoir (aie), faire (fasse), aller (aille)."},
                {"term": "Certitude vs Doute", "def": "Certitudinea (je pense que) cere indicativ; îndoiala (je doute que) cere subjonctif."}
            ],
            "matchingPairs": [
                {"left": "Il faut que tu fasses attention", "right": "Subjonctif de la faire (fasses)"},
                {"left": "Je veux qu'il vienne", "right": "Subjonctif de la venir (vienne)"},
                {"left": "Il est important que nous soyons là", "right": "Subjonctif de la être (soyons)"},
                {"left": "Bien que (quoique)", "right": "Conjuncție concesivă ce cere întotdeauna subjonctif"}
            ],
            "quiz": {
                "question": "Ce mod și formă verbală trebuie folosită după expresia 'Il faut que vous ...' pentru verbul 'partir'?",
                "options": [
                    "partiez (Subjonctif présent: Il faut que vous partiez)",
                    "partez (Indicatif présent)",
                    "partir",
                    "partirez (Futur)"
                ],
                "correctIndex": 0,
                "explanation": "'Il faut que' impune obligatoriu modul subjonctif. Pentru pronumele 'vous', terminația este '-iez' (partiez)."
            },
            "task": "Completează expresia de necesitate la subjonctif scriind 'Il faut que nous fassions un effort.'.",
            "starterCode": "Il faut que nous ",
            "expectedOutputPattern": "Il\\s+faut\\s+que\\s+nous\\s+fassions\\s+un\\s+effort\\.?",
            "hint": "Scrie Il faut que nous fassions un effort."
        },
        {
            "id": "fr-new-8",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": "5. Arhitect / C1",
            "xp": 70,
            "title": "Capitolul 8: Expresii Idiomatice Avansate & Corespondență Formală",
            "theory": """
<p>Atingerea măiestriei în limba franceză (nivel C1/C2) impune stăpânirea formulelor diplomatice de cancelarie și a expresiilor colocviale idiomatice.</p>
<h4>1. Formule de Încheiere în Corespondență Oficială</h4>
<p>Scrisorile profesionale se încheie cu formule consacrate precum: <em>« Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »</em>.</p>
<h4>2. Expresii Idiomatice Esențiale</h4>
<ul>
  <li><em>Avoir le cafard</em> — a fi deprimat, melancolic.</li>
  <li><em>Poser un lapin</em> — a trage pe sfoară / a nu te prezenta la o întâlnire stabilită.</li>
  <li><em>Coûter les yeux de la tête</em> — a costa o avere (extrem de scump).</li>
  <li><em>D'ores et déjà</em> — încă de pe acum, deja.</li>
</ul>
""",
            "glossary": [
                {"term": "Correspondance formelle", "def": "Registru strict de politețe protocolară utilizat în scrisorile oficiale și contracte."},
                {"term": "Veuillez agréer...", "def": "Formula standard supremă de politețe la finalul unei scrisori oficiale."},
                {"term": "Poser un lapin", "def": "Expresie idiomatică ce înseamnă a lipsi nemotivat de la o întâlnire."},
                {"term": "D'ores et déjà", "def": "Locuțiune adverbială formală de nivel înalt sinonimă cu 'dès maintenant'."}
            ],
            "matchingPairs": [
                {"left": "Poser un lapin à quelqu'un", "right": "A nu veni la o întâlnire stabilită"},
                {"left": "Ça coûte les yeux de la tête", "right": "Costă o avere"},
                {"left": "Avoir le cafard", "right": "A fi cuprins de tristețe sau nostalgie"},
                {"left": "Veuillez agréer mes salutations", "right": "Formulă solemnă de încheiere a scrisorilor oficiale"}
            ],
            "quiz": {
                "question": "Ce înseamnă expresia franceză colocvială 'Il m'a posé un lapin hier soir'?",
                "options": [
                    "Nu a venit la întâlnirea pe care o stabiliserăm aseară.",
                    "Mi-a făcut cadou un iepure alb.",
                    "A pregătit o cină delicioasă.",
                    "A întârziat 5 minute din cauza traficului."
                ],
                "correctIndex": 0,
                "explanation": "'Poser un lapin' este o expresie idiomatică consacrată ce înseamnă a nu te prezenta la o întâlnire stabilită cu cineva."
            },
            "task": "Scrie expresia formală 'Veuillez agréer mes salutations distinguées.' ca formulă de încheiere diplomatică.",
            "starterCode": "// Scrie formula de politețe\n",
            "expectedOutputPattern": "Veuillez\\s+agr[ée]er\\s+mes\\s+salutations\\s+distingu[ée]es\\.?",
            "hint": "Scrie Veuillez agréer mes salutations distinguées."
        }
    ]

    # ==========================================
    # 2. LIMBA SPANIOLĂ (16 lessons)
    # ==========================================
    spanish = [
        {
            "id": "es-new-1",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": "1. Începător / A1",
            "xp": 30,
            "title": "Capitolul 1: Verbe Regulate la Prezent (-ar, -er, -ir)",
            "theory": """
<p>Verbele în spaniolă se împart în 3 conjugări conform terminației de infinitiv: <strong>-ar</strong> (<em>hablar</em>), <strong>-er</strong> (<em>comer</em>) și <strong>-ir</strong> (<em>vivir</em>).</p>
<h4>1. Terminațiile Prezentului de Indicativ</h4>
<ul>
  <li><code>-ar</code>: -o, -as, -a, -amos, -áis, -an (<em>hablo, hablas, habla...</em>)</li>
  <li><code>-er</code>: -o, -es, -e, -emos, -éis, -en (<em>como, comes, come...</em>)</li>
  <li><code>-ir</code>: -o, -es, -e, -imos, -ís, -en (<em>vivo, vives, vive...</em>)</li>
</ul>
<h4>2. Omiterea Pronumelui Subiect</h4>
<p>Deoarece terminațiile verbale sunt unice și neambigue, pronumele subiect (yo, tú, nosotros) este <strong>omis în mod uzual</strong>, fiind folosit doar pentru emfază.</p>
""",
            "glossary": [
                {"term": "Presente de indicativo", "def": "Timpul prezent utilizat pentru fapte curente, adevăruri generale și rutine."},
                {"term": "Omisión del pronombre", "def": "Practica standard în spaniolă de a nu rosti 'yo' sau 'tú' datorită terminației clare a verbului."},
                {"term": "Conjugación en -ar", "def": "Prima grupă de verbe din limba spaniolă (hablar, trabajar, estudiar)."},
                {"term": "Conjugación en -er/-ir", "def": "A doua și a treia grupă de verbe (comer, beber, vivir, escribir)."}
            ],
            "matchingPairs": [
                {"left": "Hablo español", "right": "Vorbesc spaniolă (Yo)"},
                {"left": "Comemos juntos", "right": "Mâncăm împreună (Nosotros)"},
                {"left": "Viven en Madrid", "right": "Ei trăiesc la Madrid (Ellos)"},
                {"left": "¿Trabajas hoy?", "right": "Lucrezi astăzi? (Tú)"}
            ],
            "quiz": {
                "question": "Care este forma de prezent a verbului 'escribir' pentru persoana 'nosotros'?",
                "options": [
                    "escribimos (Nosotros escribimos)",
                    "escribemos",
                    "escriben",
                    "escribo"
                ],
                "correctIndex": 0,
                "explanation": "La conjugarea a treia (-ir), persoana I plural primește terminația '-imos': escribimos."
            },
            "task": "Scrie propoziția 'Hablo español y rumano.' (Vorbesc spaniolă și română) omițând pronumele subiect.",
            "starterCode": "// Scrie propoziția\n",
            "expectedOutputPattern": "Hablo\\s+espa[ñn]ol\\s+y\\s+rumano\\.?",
            "hint": "Scrie Hablo español y rumano."
        },
        {
            "id": "es-new-2",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": "1. Începător / A1",
            "xp": 35,
            "title": "Capitolul 2: Verbul 'Gustar' și Construcțiile Afective",
            "theory": """
<p>Verbul <strong>gustar</strong> nu funcționează ca verbul „a plăcea” din engleză; el se acordă cu <strong>obiectul care place</strong>, nu cu persoana căreia îi place!</p>
<h4>1. Structura cu Pronume de Obiect Indirect</h4>
<p>Folosim pronumele: <code>me</code>, <code>te</code>, <code>le</code>, <code>nos</code>, <code>os</code>, <code>les</code>:</p>
<ul>
  <li>Dacă lucrul care place este la singular sau un verb infinitiv: <strong>gusta</strong> (<em>Me gusta el café</em>, <em>Me gusta viajar</em>).</li>
  <li>Dacă lucrul care place este la plural: <strong>gustan</strong> (<em>Me gustan los libros</em>).</li>
</ul>
<h4>2. Verbe Similare</h4>
<p>Aceeași structură este folosită de: <em>encantar</em> (a adora), <em>interesar</em>, <em>doler</em> (a durea), <em>parecer</em>.</p>
""",
            "glossary": [
                {"term": "Verbo gustar", "def": "Verb special ce se acordă exclusiv cu lucrul sau lucrurile plăcute (gusta / gustan)."},
                {"term": "Pronombres de OI", "def": "Pronumele me, te, le, nos, os, les ce indică persoana afectată de senzație."},
                {"term": "A mí me gusta...", "def": "Construcție prepozițională de accentuare facultativă a persoanei."},
                {"term": "encantar", "def": "Verb similar cu gustar ce exprimă o preferință foarte puternică (a adora)."}
            ],
            "matchingPairs": [
                {"left": "Me gusta la música", "right": "Îmi place muzica (singular)"},
                {"left": "Me gustan las ciudades", "right": "Îmi plac orașele (plural)"},
                {"left": "Nos encanta viajar", "right": "Ne încântă să călătorim (cu infinitiv)"},
                {"left": "¿Te gusta este libro?", "right": "Îți place această carte?"}
            ],
            "quiz": {
                "question": "Ce formă a verbului gustar este corectă în propoziția 'A ellos les ... las tapas españolas'?",
                "options": [
                    "gustan (deoarece 'las tapas' este la plural)",
                    "gusta",
                    "gustamos",
                    "gusto"
                ],
                "correctIndex": 0,
                "explanation": "Subiectul gramatical al propoziției este 'las tapas españolas' (plural); prin urmare, verbul se acordă la plural: 'gustan'."
            },
            "task": "Completează propoziția 'Me gustan los idiomas.' (Îmi plac limbile străine) cu forma corectă de plural.",
            "starterCode": "// Completează propoziția\n",
            "expectedOutputPattern": "Me\\s+gustan\\s+los\\s+idiomas\\.?",
            "hint": "Scrie Me gustan los idiomas."
        },
        {
            "id": "es-new-3",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": "2. Junior / A2",
            "xp": 40,
            "title": "Capitolul 3: Pretérito Indefinido — Acțiuni Finalizate în Trecut",
            "theory": """
<p><strong>Pretérito Indefinido</strong> (echivalentul Simple Past din engleză sau al Perfectului Simplu) este timpul cel mai important pentru acțiuni complet finalizate în trecut într-un moment temporal precis.</p>
<h4>1. Verbe Regulate</h4>
<ul>
  <li><code>-ar</code>: -é, -aste, -ó, -amos, -asteis, -aron (<em>hablé, hablaste, habló...</em>)</li>
  <li><code>-er / -ir</code>: -í, -iste, -ió, -imos, -isteis, -ieron (<em>comí, comiste, comió...</em>)</li>
</ul>
<h4>2. Forme Neregulate Cruciale</h4>
<p>Verbele <em>ser</em> (a fi) și <em>ir</em> (a merge) au exact aceeași formă la trecut: <strong>fui, fuiste, fue, fuimos, fuisteis, fueron</strong>. Verbul <em>hacer</em> devine <strong>hice, hiciste, hizo...</strong>.</p>
""",
            "glossary": [
                {"term": "Pretérito Indefinido", "def": "Timp trecut folosit pentru acțiuni precise și punctuale încheiate definitiv în trecut."},
                {"term": "Marcadores temporales", "def": "Cuvinte cheie: ayer (ieri), anoche (aseară), la semana pasada (săptămâna trecută)."},
                {"term": "Fui (Ser / Ir)", "def": "Formă identică la trecut atât pentru verbul 'a fi', cât și pentru 'a merge'."},
                {"term": "Acentuación aguda", "def": "Accentele grafice obligatorii pe prima și a treia persoană singular (-é, -ó, -í)."}
            ],
            "matchingPairs": [
                {"left": "Ayer hablé con María", "right": "Ieri am vorbit cu Maria"},
                {"left": "El año pasado fui a Madrid", "right": "Anul trecut am fost la Madrid (ir/ser)"},
                {"left": "Hizo un trabajo excelente", "right": "A făcut o treabă excelentă (hacer)"},
                {"left": "Llegaron muy tarde", "right": "Au sosit foarte târziu"}
            ],
            "quiz": {
                "question": "Care este forma de persoana a 3-a singular (él/ella) a verbului 'hacer' la Pretérito Indefinido?",
                "options": [
                    "hizo (cu 'z' pentru a păstra fonetica)",
                    "hició",
                    "haced",
                    "hace"
                ],
                "correctIndex": 0,
                "explanation": "Verbul 'hacer' schimbă litera 'c' în 'z' la persoana a treia singular (hizo) pentru a menține pronunția corectă."
            },
            "task": "Scrie propoziția 'Ayer comí paella con mis amigos.' folosind forma de trecut a verbului comer.",
            "starterCode": "// Scrie propoziția la Pretérito Indefinido\n",
            "expectedOutputPattern": "Ayer\\s+com[íi]\\s+paella\\s+con\\s+mis\\s+amigos\\.?",
            "hint": "Scrie Ayer comí paella con mis amigos."
        },
        {
            "id": "es-new-4",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": "2. Junior / A2",
            "xp": 40,
            "title": "Capitolul 4: Pretérito Imperfecto & Diferența față de Indefinido",
            "theory": """
<p><strong>Pretérito Imperfecto</strong> este timpul descrierilor, al stărilor continue și al obiceiurilor repetate din trecut (<em>Când eram mic, mergeam la plajă în fiecare vară</em>).</p>
<h4>1. Formare</h4>
<ul>
  <li><code>-ar</code>: -aba, -abas, -aba, -ábamos, -abais, -aban (<em>hablaba, cantaba...</em>)</li>
  <li><code>-er / -ir</code>: -ía, -ías, -ía, -íamos, -íais, -ían (<em>comía, vivía...</em>)</li>
</ul>
<h4>2. Contrastul în Narațiuni</h4>
<p><em>Imperfecto</em> stabilește scena de fundal (<em>Hacía sol y la gente paseaba</em>), iar <em>Indefinido</em> introduce acțiunea bruscă (<em>De repente, empezó a llover</em>).</p>
""",
            "glossary": [
                {"term": "Pretérito Imperfecto", "def": "Timp trecut dedicat descrierilor de decor, vârstei, vremii și obiceiurilor din trecut."},
                {"term": "Terminaciones en -aba", "def": "Sufixul specific și regulat pentru verbele de grupa I la imperfect."},
                {"term": "Acción habitual", "def": "Comportamente repetate introduse de 'siempre', 'todos los días', 'a menudo'."},
                {"term": "De repente...", "def": "Marcator temporal care introduce o acțiune bruscă exprimată prin Indefinido."}
            ],
            "matchingPairs": [
                {"left": "Cuando era niño", "right": "Când eram copil (descriere - Imperfecto)"},
                {"left": "Siempre leía antes de dormir", "right": "Citeam mereu înainte de culcare (obicei)"},
                {"left": "Dormía cuando sonó la alarma", "right": "Dormeam (imperfecto) când a sunat alarma (indefinido)"},
                {"left": "Tenía 20 años", "right": "Aveam 20 de ani (vârsta se exprimă prin imperfect)"}
            ],
            "quiz": {
                "question": "În propoziția 'Mientras nosotros ... la cena, llegó Pedro', ce timp verbal este corect pentru acțiunea în derulare?",
                "options": [
                    "preparábamos (Imperfecto - acțiune continuă în fundal)",
                    "preparamos (Pretérito Indefinido)",
                    "preparar",
                    "habíamos preparado"
                ],
                "correctIndex": 0,
                "explanation": "'Mientras' (în timp ce) indică o acțiune continuă aflată în desfășurare în fundal, cerând modul Pretérito Imperfecto (preparábamos)."
            },
            "task": "Scrie propoziția de descriere din trecut 'Cuando vivía en Madrid, comía tapas todos los días.'.",
            "starterCode": "// Completează propoziția la imperfect\n",
            "expectedOutputPattern": "Cuando\\s+viv[íi]a\\s+en\\s+Madrid,\\s*com[íi]a\\s+tapas\\s+todos\\s+los\\s+d[íi]as\\.?",
            "hint": "Scrie Cuando vivía en Madrid, comía tapas todos los días."
        },
        {
            "id": "es-new-5",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": "3. Middle / B1",
            "xp": 45,
            "title": "Capitolul 5: Diferența Esențială: 'Por' vs 'Para'",
            "theory": """
<p>Distincția dintre <strong>por</strong> și <strong>para</strong> este una dintre cele mai frecvente provocări în limba spaniolă, ambele traducându-se prin „pentru”, dar având nuanțe logice total diferite.</p>
<h4>1. Utilizările lui 'PARA' (Direcție, Scop & Destinatar)</h4>
<ul>
  <li>Scop/Obiectiv (In order to): <em>Estudio español <strong>para</strong> conseguir un trabajo</em>.</li>
  <li>Destinatar: <em>Este regalo es <strong>para</strong> ti</em>.</li>
  <li>Termen limită (Deadline): <em>La tarea es <strong>para</strong> mañana</em>.</li>
</ul>
<h4>2. Utilizările lui 'POR' (Cauză, Motiv & Mijloc)</h4>
<ul>
  <li>Cauză/Motiv (Because of): <em>Llegué tarde <strong>por</strong> el tráfico</em>.</li>
  <li>Mijloc/Canal de comunicare: <em>Te llamo <strong>por</strong> teléfono</em>.</li>
  <li>Durată aproximativă: <em>Viví allí <strong>por</strong> dos años</em>.</li>
</ul>
""",
            "glossary": [
                {"term": "Para (Finalidad)", "def": "Prepoziție ce indică scopul, obiectivul viitor, destinația sau destinatarul."},
                {"term": "Por (Causa)", "def": "Prepoziție ce indică motivul trecut, cauza, prețul, mijlocul sau schimbul."},
                {"term": "Para siempre", "def": "Expresie fixă ce înseamnă 'pentru totdeauna'."},
                {"term": "Por favor / Por ejemplo", "def": "Locuțiuni uzuale formate cu prepoziția por."}
            ],
            "matchingPairs": [
                {"left": "Estudio para aprender", "right": "Învăț cu scopul de a ști (Para = finalitate)"},
                {"left": "Gracias por tu ayuda", "right": "Mulțumesc pentru ajutorul tău (Por = cauză/motiv)"},
                {"left": "El informe es para el viernes", "right": "Raportul este pentru vineri (Para = termen limită)"},
                {"left": "Viajamos por tren", "right": "Călătorim cu trenul (Por = mijloc de transport)"}
            ],
            "quiz": {
                "question": "Ce prepoziție completează corect fraza: 'No pudimos salir ... la lluvia' (din cauza ploii)?",
                "options": [
                    "por (indică cauza sau motivul)",
                    "para",
                    "con",
                    "de"
                ],
                "correctIndex": 0,
                "explanation": "Ploaia este cauza pentru care nu s-a putut ieși. Cauza sau motivul se exprimă întotdeauna prin prepoziția 'por'."
            },
            "task": "Completează fraza de scop 'Trabajo duro para tener éxito.' (Muncesc din greu pentru a avea succes).",
            "starterCode": "Trabajo duro ",
            "expectedOutputPattern": "Trabajo\\s+duro\\s+para\\s+tener\\s+[ée]xito\\.?",
            "hint": "Scrie Trabajo duro para tener éxito."
        },
        {
            "id": "es-new-6",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": "4. Senior / B2",
            "xp": 55,
            "title": "Capitolul 6: Presente de Subjuntivo — Dorințe, Emoții și 'Ojalá'",
            "theory": """
<p><strong>Modo Subjuntivo</strong> este folosit în spaniolă ori de câte ori acțiunea nu este un fapt sigur, ci o dorință, o cerință, o îndoială sau o reacție emoțională.</p>
<h4>1. Formare: Schimbarea Vocalei</h4>
<p>Se ia persoana I singular de la prezent (<em>yo hablo</em>, <em>yo como</em>), se elimină <code>-o</code> și se inversează vocala tematică:</p>
<ul>
  <li>Verbele în <code>-ar</code> iau terminații cu <strong>-e</strong>: -e, -es, -e, -emos, -éis, -en (<em>hable, hables...</em>).</li>
  <li>Verbele în <code>-er / -ir</code> iau terminații cu <strong>-a</strong>: -a, -as, -a, -amos, -áis, -an (<em>coma, comas...</em>, <em>viva, vivas...</em>).</li>
</ul>
<h4>2. Cuvântul Magic: 'Ojalá'</h4>
<p><em>Ojalá (que)</em> (de origine arabă, însemnând „Dacă vrea Dumnezeu”) este urmat întotdeauna de subjonctiv: <em>¡Ojalá tengas un buen día!</em>.</p>
""",
            "glossary": [
                {"term": "Subjuntivo", "def": "Modul gramatical al dorințelor, posibilității, incertitudinii și emoțiilor subiective."},
                {"term": "Inversión de vocal", "def": "Regula de aur a subjonctivului: verbele în -ar iau 'e', iar cele în -er/-ir iau 'a'."},
                {"term": "Ojalá", "def": "Particulă de dorință ce impune fără excepție utilizarea modului subjuntivo."},
                {"term": "Quiero que...", "def": "Expresie de voință cu schimbare de subiect ce cere subjuntivo (Quiero que vengas)."}
            ],
            "matchingPairs": [
                {"left": "Quiero que estudies más", "right": "Vreau ca tu să înveți mai mult"},
                {"left": "¡Ojalá no llueva mañana!", "right": "Să sperăm că nu va ploua mâine!"},
                {"left": "Es necesario que tengamos paciencia", "right": "Este necesar să avem răbdare"},
                {"left": "Dudo que sea verdad", "right": "Mă îndoiesc că este adevărat (subjuntivo de la ser)"}
            ],
            "quiz": {
                "question": "Ce formă de Subjuntivo a verbului 'tener' completează corect urarea '¡Espero que ... un buen viaje!' (tú)?",
                "options": [
                    "tengas (Espero que tengas)",
                    "tienes",
                    "tenga",
                    "tener"
                ],
                "correctIndex": 0,
                "explanation": "Expresia 'Espero que' introduce o dorință adresată altei persoane (tú), cerând prezentul de subjonctiv al verbului tener: 'tengas'."
            },
            "task": "Scrie urarea clasică '¡Ojalá tengas un día excelente!' folosind modul subjuntivo.",
            "starterCode": "// Scrie urarea cu Ojalá\n",
            "expectedOutputPattern": "(?:[¡!]\\s*)?Ojal[áa]\\s+tengas\\s+un\\s+d[íi]a\\s+excelente[!]?\\.?",
            "hint": "Scrie ¡Ojalá tengas un día excelente!"
        },
        {
            "id": "es-new-7",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": "4. Senior / B2",
            "xp": 60,
            "title": "Capitolul 7: Pronume Directe și Indirecte Combinate ('Se lo dije')",
            "theory": """
<p>Când o propoziție conține atât un pronume de <strong>obiect indirect</strong> (cui?) cât și unul de <strong>obiect direct</strong> (ce?), ordinea este întotdeauna: <strong>OI + OD + Verb</strong>.</p>
<h4>1. Regula de Cacofonie: 'Le lo' devine 'SE LO'</h4>
<p>În limba spaniolă este interzisă succesiunea a două pronume care încep cu litera L (<em>le lo</em>, <em>le la</em>, <em>les los</em>). Din motive fonetice, <code>le</code> sau <code>les</code> se transformă automat în <strong>se</strong>:</p>
<p><em>¿Le diste el libro a Juan? $\rightarrow$ Sí, <strong>se lo</strong> di</em> (în loc de <em>le lo di</em>).</p>
<h4>2. Poziția Față de Verb</h4>
<p>Pronumele stau în fața verbelor conjugate. În cazul infinitivului, gerunziului și imperativului afirmativ, ele se alipesc la final ca un singur cuvânt: <em>Voy a decírtelo</em>, <em>Dímelo</em>.</p>
""",
            "glossary": [
                {"term": "Doble pronombre", "def": "Combinația dintre pronumele de obiect indirect și cel de obiect direct într-o singură frază."},
                {"term": "Regla de 'SE'", "def": "Transformarea obligatorie a lui 'le' în 'se' înaintea pronumelor lo, la, los, las."},
                {"term": "Pronombres enclíticos", "def": "Pronume atașate direct la finalul infinitivului, gerunziului sau imperativului afirmativ."},
                {"term": "Orden OI + OD", "def": "Regula fixă conform căreia persoana (OI) precede întotdeauna lucrul (OD)."}
            ],
            "matchingPairs": [
                {"left": "Se lo expliqué ayer", "right": "I l-am explicat ieri (în loc de le lo)"},
                {"left": "Me lo puedes enviar", "right": "Mi-l poți trimite mie"},
                {"left": "Dígamelo, por favor", "right": "Spuneți-mi-l mie (pronume enclitice atașate la imperativ)"},
                {"left": "No te lo creas", "right": "Să nu o crezi (la imperativ negativ)"}
            ],
            "quiz": {
                "question": "De ce propoziția 'Le lo dije a mi jefe' este incorectă în limba spaniolă?",
                "options": [
                    "Succesiunea pronumelor 'le lo' este interzisă fonetic; 'le' trebuie înlocuit obligatoriu cu 'se' (Se lo dije).",
                    "Verbul decir nu suportă pronume de obiect direct.",
                    "Pronumele trebuie plasate întotdeauna după verb.",
                    "Nu este permisă menționarea șefului într-o propoziție."
                ],
                "correctIndex": 0,
                "explanation": "Când pronumele de persoana a 3-a indirect (le/les) este urmat de un pronume direct (lo/la/los/las), el se transformă întotdeauna în 'se' pentru eufonie."
            },
            "task": "Răspunde afirmativ la întrebarea dacă i-ai dat raportul directorului: 'Sí, se lo entregué ayer.'.",
            "starterCode": "// Răspunde cu se lo\n",
            "expectedOutputPattern": "S[íi],\\s+se\\s+lo\\s+entregu[ée]\\s+ayer\\.?",
            "hint": "Scrie Sí, se lo entregué ayer."
        },
        {
            "id": "es-new-8",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": "5. Arhitect / C1",
            "xp": 70,
            "title": "Capitolul 8: Modismos, Expresii Idiomatice & Spaniola de Afaceri",
            "theory": """
<p>Fluența de nivel înalt (C1) în limba spaniolă presupune folosirea firească a expresiilor colocviale și stăpânirea limbajului formal corporativ.</p>
<h4>1. Modisme Populare Spaniole</h4>
<ul>
  <li><em>Costar un ojo de la cara</em> — a costa o avere (extrem de scump).</li>
  <li><em>Estar en las nubes</em> — a fi distrat, cu capul în nori.</li>
  <li><em>Dar en el clavo</em> — a nimeri la fix, a găsi soluția perfectă.</li>
  <li><em>Tomar el pelo</em> — a lua pe cineva peste picior, a glumi.</li>
</ul>
<h4>2. Conectori Discursivi pentru Afaceri</h4>
<p>În negocieri și rapoarte se utilizează: <em>Sin embargo</em> (totuși), <em>Por consiguiente</em> (prin urmare), <em>En lo que respecta a</em> (în ceea ce privește), <em>Llevar a cabo</em> (a duce la îndeplinire un proiect).</p>
""",
            "glossary": [
                {"term": "Modismo", "def": "Expresie idiomatică specifică unei limbi al cărei înțeles nu rezultă din suma cuvintelor individuale."},
                {"term": "Dar en el clavo", "def": "A găsi exact răspunsul sau soluția corectă la o problemă complicată."},
                {"term": "Llevar a cabo", "def": "Sintagmă profesională elegantă ce înseamnă a executa, a realiza un plan sau proiect."},
                {"term": "Marcadores formales", "def": "Conectori logici utilizați pentru structurarea argumentației în contexte academice și de business."}
            ],
            "matchingPairs": [
                {"left": "Me estás tomando el pelo", "right": "Mă iei peste picior / glumești cu mine"},
                {"left": "Cuesta un ojo de la cara", "right": "Costă o avere"},
                {"left": "Vamos a llevar a cabo la auditoría", "right": "Vom duce la îndeplinire auditul"},
                {"left": "Por consiguiente", "right": "Prin urmare / în consecință"}
            ],
            "quiz": {
                "question": "Ce înseamnă expresia spaniolă 'Has dado en el clavo con esta solución'?",
                "options": [
                    "Ai nimerit perfect / ai găsit soluția exactă.",
                    "Ai bătut un cui în peretele biroului.",
                    "Soluția ta a costat prea mulți bani.",
                    "Proiectul a eșuat din cauza ta."
                ],
                "correctIndex": 0,
                "explanation": "'Dar en el clavo' este o expresie idiomatică ce înseamnă a nimeri fix la țintă, a intui impecabil soluția unei probleme."
            },
            "task": "Scrie propoziția profesională 'Vamos a llevar a cabo el proyecto según lo planeado.'.",
            "starterCode": "// Completează propoziția formală\n",
            "expectedOutputPattern": "Vamos\\s+a\\s+llevar\\s+a\\s+cabo\\s+el\\s+proyecto\\s+seg[úu]n\\s+lo\\s+planeado\\.?",
            "hint": "Scrie Vamos a llevar a cabo el proyecto según lo planeado."
        }
    ]

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
