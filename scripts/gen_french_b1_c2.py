# -*- coding: utf-8 -*-
"""
French Module 2 (B1-B2: 12 chapters) and Module 3 (C1-C2: 8 chapters).
Total: 20 chapters to complete French curriculum from 25 to 45 chapters.
"""

def get_french_b1_c2_lessons():
    m2 = "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)"
    m3 = "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)"

    lessons = [
        # --- MODULUL 2: B1-B2 (12 capitole) ---
        {
            "id": "fr-b1-p26",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 26: Passé Composé cu Auxiliarul AVOIR & Participiul Regulat",
            "theory": """
<p><strong>Passé Composé</strong> este cel mai frecvent timp trecut în limba franceză pentru acțiuni încheiate, punctuale.</p>
<h4>1. Structura cu Auxiliarul AVOIR</h4>
<p>Se compune din: <code>Subiect + AVOIR la prezent + Participiu trecut</code>.</p>
<ul>
  <li>Verbe în <code>-er</code> &rarr; participiu în <code>-é</code>: <em>parler &rarr; parlé</em>, <em>manger &rarr; mangé</em>.</li>
  <li>Verbe în <code>-ir</code> &rarr; participiu în <code>-i</code>: <em>finir &rarr; fini</em>, <em>choisir &rarr; choisi</em>.</li>
  <li>Verbe în <code>-re</code> &rarr; participiu în <code>-u</code>: <em>vendre &rarr; vendu</em>, <em>attendre &rarr; attendu</em>.</li>
</ul>
<h4>2. Regula Absenței Acordului cu Subiectul</h4>
<p>Când auxiliarul este <strong>avoir</strong>, participiul trecut <strong>NU</strong> se acordă cu subiectul: <em>Elle a mangé</em> (fără 'e' la final!), <em>Ils ont parlé</em> (fără 's'!).</p>
""",
            "glossary": [
                {"term": "Passé Composé", "def": "Timpul trecut compus francez pentru evenimente terminate punctual în trecut."},
                {"term": "Participiul trecut (-é, -i, -u)", "def": "Forma verbală trecută obținută prin înlocuirea terminației de infinitiv."},
                {"term": "Auxiliarul Avoir", "def": "Auxiliarul folosit de peste 85% din verbele franceze la timpurile compuse."},
                {"term": "Non-acord cu subiectul", "def": "La timpurile compuse cu avoir, participiul nu își schimbă forma după genul sau numărul subiectului."}
            ],
            "matchingPairs": [
                {"left": "J'ai parlé au directeur", "right": "Am vorbit cu directorul"},
                {"left": "Elle a fini ses devoirs", "right": "Ea și-a terminat temele"},
                {"left": "Nous avons attendu le train", "right": "Noi am așteptat trenul"},
                {"left": "Ils ont vendu la maison", "right": "Ei au vândut casa"}
            ],
            "quiz": {
                "question": "Cum se traduce corect 'Ea a mâncat o salată' folosind verbul 'manger' la passé composé?",
                "options": [
                    "Elle a mangé une salade. (participiul nu se acordă cu subiectul la avoir)",
                    "Elle a mangée une salade.",
                    "Elle est mangé une salade.",
                    "Elle a mangeait une salade."
                ],
                "correctIndex": 0,
                "explanation": "Cu auxiliarul avoir, participiul trecut rămâne neschimbat (mangé), indiferent dacă subiectul este feminin (Elle)."
            },
            "task": "Scrie propoziția 'Hier, j'ai mangé une pomme et j'ai regardé un film.' (Ieri am mâncat un măr și am privit un film).",
            "starterCode": "Hier, j'ai mangé ",
            "expectedOutputPattern": "Hier,\\s*j['’]ai\\s+mang[ée]\\s+une\\s+pomme\\s+et\\s+j['’]ai\\s+regard[ée]\\s+un\\s+film\\.?",
            "hint": "Scrie Hier, j'ai mangé une pomme et j'ai regardé un film."
        },
        {
            "id": "fr-b1-p27",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 27: Passé Composé cu Auxiliarul ÊTRE & Acordul Participiului",
            "theory": """
<p>Aproximativ 14 verbe fundamentale (de mișcare/transformare) și <strong>toate verbele reflexive</strong> formează trecutul compus cu auxiliarul <strong>ÊTRE</strong>.</p>
<h4>1. Verbele din „Casa lui Être”</h4>
<p><em>Aller/Venir, Arriver/Partir, Entrer/Sortir, Monter/Descendre, Naître/Mourir, Rester, Tomber, Retourner, Passer</em>.</p>
<h4>2. Regula de Aur a Acordului</h4>
<p>Cu auxiliarul <strong>être</strong>, participiul trecut <strong>SE ACORDĂ OBLIGATORIU</strong> în gen și număr cu subiectul frazei:</p>
<ul>
  <li>Masculin singular: <em>Il est allé</em></li>
  <li>Feminin singular (+e): <em>Elle est allé<strong>e</strong></em></li>
  <li>Masculin plural (+s): <em>Ils sont allé<strong>s</strong></em></li>
  <li>Feminin plural (+es): <em>Elles sont allé<strong>es</strong></em></li>
</ul>
""",
            "glossary": [
                {"term": "La maison d'être", "def": "Grupul de verbe de mișcare și stare ce cer auxiliarul être la timpurile compuse."},
                {"term": "Acordul în gen și număr", "def": "Adăugarea sufixului -e (feminin) și/sau -s (plural) la participiul verbelor conjugate cu être."},
                {"term": "Verbe reflexive la passé composé", "def": "Toate verbele reflexive folosesc obligatoriu être (ex: Elle s'est levée)."},
                {"term": "Partir / Arriver", "def": "Pereche clasică de verbe de deplasare conjugate cu être."}
            ],
            "matchingPairs": [
                {"left": "Elle est allée à Paris", "right": "Ea a mers la Paris (acord feminin +e)"},
                {"left": "Ils sont arrivés à l'heure", "right": "Ei au sosit la timp (acord plural +s)"},
                {"left": "Elles sont parties tôt", "right": "Ele au plecat devreme (acord feminin plural +es)"},
                {"left": "Il est né en France", "right": "El s-a născut în Franța"}
            ],
            "quiz": {
                "question": "Care este forma corectă pentru 'Ele au sosit la gară' (Elles + arriver)?",
                "options": [
                    "Elles sont arrivées à la gare. (acord feminin plural +es)",
                    "Elles ont arrivé à la gare.",
                    "Elles sont arrivé à la gare.",
                    "Elles sont arrivés à la gare."
                ],
                "correctIndex": 0,
                "explanation": "'Arriver' cere auxiliarul être, iar subiectul 'Elles' impune adăugarea terminației '-es' (arrivées)."
            },
            "task": "Scrie propoziția 'Elle est allée à la gare et ils sont arrivés à l'heure.'.",
            "starterCode": "Elle est allée ",
            "expectedOutputPattern": "Elle\\s+est\\s+all[ée]e\\s+[àa]\\s+la\\s+gare\\s+et\\s+ils\\s+sont\\s+arriv[ée]s\\s+[àa]\\s+l['’]heure\\.?",
            "hint": "Scrie Elle est allée à la gare et ils sont arrivés à l'heure."
        },
        {
            "id": "fr-b1-p28",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 28: L'Imparfait — Formare, Valori & Descrieri în Trecut",
            "theory": """
<p><strong>L'Imparfait</strong> este timpul evocării, al stărilor continue, al descrierilor și al obiceiurilor repetate din trecut („ce se întâmpla de obicei” sau „cum era”).</p>
<h4>1. Regula Universală de Formare</h4>
<p>Se ia rădăcina persoanei I plural (<code>nous</code>) de la prezent și se adaugă terminațiile unice:</p>
<p><strong>-ais, -ais, -ait, -ions, -iez, -aient</strong></p>
<p>Exemplu: <em>nous parl-ons &rarr; je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient</em>.</p>
<h4>2. Singura Excepție: Verbul ÊTRE</h4>
<p>Rădăcina lui <em>être</em> este <code>ét-</code>: <em>j'étais, tu étais, il était, nous étions, vous étiez, ils étaient</em>.</p>
""",
            "glossary": [
                {"term": "L'Imparfait", "def": "Timpul imperfect francez folosit pentru descrieri, stări și acțiuni habituale din trecut."},
                {"term": "Terminațiile unice", "def": "-ais, -ais, -ait, -ions, -iez, -aient (primele trei și ultima au sunet identic [ɛ])."},
                {"term": "Habitude dans le passé", "def": "Obicei sau rutină din trecut (ex: În fiecare duminică mergeam la bunici)."},
                {"term": "J'étais", "def": "Forma neregulată de imperfect a verbului auxiliar être."}
            ],
            "matchingPairs": [
                {"left": "Quand j'étais petit", "right": "Când eram mic"},
                {"left": "Il faisait beau hier", "right": "Era vreme frumoasă ieri (descriere)"},
                {"left": "Nous habitions à Lyon", "right": "Noi locuiam la Lyon (stare continuă)"},
                {"left": "Tu lisais tous les soirs", "right": "Tu citeai în fiecare seară (obicei)"}
            ],
            "quiz": {
                "question": "Care este forma de persoana I singular (Je) la imperfect a verbului 'faire' (nous faisons)?",
                "options": [
                    "Je faisais (rădăcina fais- + -ais)",
                    "Je ferais",
                    "Je fais",
                    "Je fis"
                ],
                "correctIndex": 0,
                "explanation": "Pornind de la 'nous faisons', îndepărtăm '-ons' și adăugăm '-ais' &rarr; 'je faisais'."
            },
            "task": "Scrie propoziția 'Quand j'étais petit, je lisais beaucoup de livres.' (Când eram mic, citeam multe cărți).",
            "starterCode": "Quand j'étais petit, ",
            "expectedOutputPattern": "Quand\\s+j['’][ée]tais\\s+petit,\\s*je\\s+lisais\\s+beaucoup\\s+de\\s+livres\\.?",
            "hint": "Scrie Quand j'étais petit, je lisais beaucoup de livres."
        },
        {
            "id": "fr-b1-p29",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 29: Imparfait vs Passé Composé — Contrastul Narativ Fundamental",
            "theory": """
<p>Stăpânirea contrastului dintre <strong>Imparfait</strong> și <strong>Passé Composé</strong> este piatra de temelie a nivelului B1 în limba franceză.</p>
<h4>1. Rolul Narativ în Text</h4>
<ul>
  <li><strong>Imparfait (Fundalul / Decorul):</strong> Descrie starea vremii, sentimentele, acțiunea în desfășurare fără început sau sfârșit precizat.</li>
  <li><strong>Passé Composé (Evenimentul Punctual):</strong> Acțiunea punctuală care survine brusc și întrerupe acțiunea din fundal.</li>
</ul>
<h4>2. Schema Clasică</h4>
<p><em>Je dormais (imparfait - acțiune continuă) quand soudain le téléphone a sonné (passé composé - acțiune punctuală).</em></p>
""",
            "glossary": [
                {"term": "Plan d'arrière (Decor)", "def": "Imperfectul creează atmosfera și contextul narațiunii."},
                {"term": "Premier plan (Eveniment)", "def": "Passé composé introduce evenimentele concrete ce împing povestea mai departe."},
                {"term": "Quand soudain", "def": "'Când deodată' — semnal narativ clasic ce introduce un passé composé."},
                {"term": "Interruption", "def": "O acțiune scurtă la trecut compus care întrerupe o acțiune continuă la imperfect."}
            ],
            "matchingPairs": [
                {"left": "Il pleuvait dehors", "right": "Ploua afară (imparfait: decor)"},
                {"left": "Il est sorti sans parapluie", "right": "A ieșit fără umbrelă (passé composé: acțiune)"},
                {"left": "Je regardais la télé", "right": "Mă uitam la televizor (acțiune în derulare)"},
                {"left": "La lumière s'est éteinte", "right": "S-a stins lumina (eveniment brusc)"}
            ],
            "quiz": {
                "question": "În fraza 'Pendant que je lisais, quelqu'un ... à la porte', ce timp trebuie folosit pentru verbul 'frapper' (a bate)?",
                "options": [
                    "a frappé (Passé composé: acțiune punctuală care intervine)",
                    "frappait (Imparfait)",
                    "frappe (Présent)",
                    "va frapper (Futur)"
                ],
                "correctIndex": 0,
                "explanation": "Bătaia la ușă este un eveniment punctual care întrerupe acțiunea continuă de citit (je lisais)."
            },
            "task": "Scrie propoziția 'Je marchais dans la rue quand j'ai vu mon ami.' (Mergeam pe stradă când l-am văzut pe prietenul meu).",
            "starterCode": "Je marchais dans la rue ",
            "expectedOutputPattern": "Je\\s+marchais\\s+dans\\s+la\\s+rue\\s+quand\\s+j['’]ai\\s+vu\\s+mon\\s+ami\\.?",
            "hint": "Scrie Je marchais dans la rue quand j'ai vu mon ami."
        },
        {
            "id": "fr-b1-p30",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 30: Pronumele de Obiect Direct (COD: Me, Te, Le, La, Nous, Vous, Les)",
            "theory": """
<p><strong>Pronumele COD</strong> (Complément d'Objet Direct) înlocuiește o persoană sau un obiect determinat direct de verb (fără prepoziție), răspunzând la întrebarea <em>qui?</em> (pe cine?) sau <em>quoi?</em> (ce?).</p>
<h4>1. Formele Pronumelor COD</h4>
<ul>
  <li><code>me / m'</code> = mă / pe mine</li>
  <li><code>te / t'</code> = te / pe tine</li>
  <li><code>le / l'</code> = îl / pe el / pe acesta</li>
  <li><code>la / l'</code> = o / pe ea</li>
  <li><code>nous</code> = ne / pe noi</li>
  <li><code>vous</code> = vă / pe voi</li>
  <li><code>les</code> = îi / le / pe ei / pe ele</li>
</ul>
<h4>2. Poziția în Frază</h4>
<p>Pronumele COD stă <strong>în fața verbului conjugat</strong>: <em>Je regarde le film &rarr; Je <strong>le</strong> regarde.</em> La imperativ afirmativ stă după verb cu cratimă: <em>Regarde-le!</em>.</p>
""",
            "glossary": [
                {"term": "COD (Complément Direct)", "def": "Complement direct ce răspunde la întrebarea cine? sau ce? fără prepoziție."},
                {"term": "Le / La / Les", "def": "Pronume de persoana a III-a acordate cu genul și numărul substantivului înlocuit."},
                {"term": "Poziția pre-verbală", "def": "În franceză, pronumele complement se plasează în fața verbului, nu după el."},
                {"term": "Élision devant voyelle", "def": "Me, te, le, la devin m', t', l' în fața unei vocale (ex: Je l'adore)."}
            ],
            "matchingPairs": [
                {"left": "Tu aimes cette chanson?", "right": "Oui, je l'aime beaucoup (la &rarr; l')"},
                {"left": "Il invite ses amis?", "right": "Oui, il les invite ce soir (les)"},
                {"left": "Tu m'écoutes?", "right": "Oui, je t'écoute attentivement"},
                {"left": "Vous voyez ce panneau?", "right": "Oui, nous le voyons clairement (le)"}
            ],
            "quiz": {
                "question": "Cum înlocuiești 'la valise' în fraza 'Je prépare la valise' folosind un pronume COD?",
                "options": [
                    "Je la prépare.",
                    "Je le prépare.",
                    "Je lui prépare.",
                    "Je prépare la."
                ],
                "correctIndex": 0,
                "explanation": "'La valise' este feminin singular direct, prin urmare se înlocuiește cu pronumele pre-verbal 'la': Je la prépare."
            },
            "task": "Scrie replica 'Tu aimes ce livre? Oui, je le lis tous les soirs.'.",
            "starterCode": "Tu aimes ce livre? ",
            "expectedOutputPattern": "Tu\\s+aimes\\s+ce\\s+livre\\?\\s*Oui,\\s*je\\s+le\\s+lis\\s+tous\\s+les\\s+soirs\\.?",
            "hint": "Scrie Tu aimes ce livre? Oui, je le lis tous les soirs."
        },
        {
            "id": "fr-b1-p31",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 31: Pronumele de Obiect Indirect (COI: Me, Te, Lui, Nous, Vous, Leur)",
            "theory": """
<p><strong>Pronumele COI</strong> (Complément d'Objet Indirect) înlocuiește o persoană precedată de prepoziția <strong>à</strong> (răspunde la întrebarea <em>à qui?</em> &mdash; cui?).</p>
<h4>1. Formele Pronumelor COI</h4>
<ul>
  <li><code>me / te / nous / vous</code> (identice cu cele de la COD)</li>
  <li><code>lui</code> = lui / ei (singular, invariabil în gen! <em>à Pierre &rarr; lui; à Marie &rarr; lui</em>)</li>
  <li><code>leur</code> = lor (plural, invariabil, fără 's'!)</li>
</ul>
<h4>2. Exemple Fundamentale</h4>
<p><em>Je téléphone à mon père &rarr; Je <strong>lui</strong> téléphone.</em><br>
<em>J'écris à mes collègues &rarr; Je <strong>leur</strong> écris.</em></p>
""",
            "glossary": [
                {"term": "COI (Complément Indirect)", "def": "Complement indirect introdus de prepoziția à și care desemnează o persoană beneficiară."},
                {"term": "Lui (COI)", "def": "Pronume indirect invariabil ce înseamnă atât 'lui' cât și 'ei' (ex: Je lui donne la clé)."},
                {"term": "Leur (COI)", "def": "Pronume indirect plural ('lor'), care se scrie ÎNTOTDEAUNA fără 's' final."},
                {"term": "Téléphoner à qn", "def": "Verb cu regim indirect ce impune un pronume COI (je lui téléphone)."}
            ],
            "matchingPairs": [
                {"left": "Je parle à Thomas", "right": "Je lui parle (lui singular)"},
                {"left": "Je parle à Sophie", "right": "Je lui parle (identic pentru feminin!)"},
                {"left": "J'envoie un mail aux clients", "right": "Je leur envoie un mail (leur plural)"},
                {"left": "Tu me réponds?", "right": "Oui, je te réponds tout de suite"}
            ],
            "quiz": {
                "question": "Cum înlocuiești 'à mes parents' în fraza 'Je téléphone à mes parents chaque semaine'?",
                "options": [
                    "Je leur téléphone chaque semaine. (leur = COI plural)",
                    "Je les téléphone chaque semaine.",
                    "Je lui téléphone chaque semaine.",
                    "Je leurs téléphone chaque semaine."
                ],
                "correctIndex": 0,
                "explanation": "'Téléphoner à' cere COI, iar pentru plural ('mes parents') forma corectă este 'leur' fără -s."
            },
            "task": "Scrie propoziția 'Je téléphone à Marie pour lui donner les clés.' (Îi telefonez Mariei pentru a-i da cheile).",
            "starterCode": "Je téléphone à Marie ",
            "expectedOutputPattern": "Je\\s+t[ée]l[ée]phone\\s+[àa]\\s+Marie\\s+pour\\s+lui\\s+donner\\s+les\\s+cl[ée]s\\.?",
            "hint": "Scrie Je téléphone à Marie pour lui donner les clés."
        },
        {
            "id": "fr-b1-p32",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 40,
            "title": "Capitolul 32: Pronumele Adverbiale „EN” (Cantitate) & „Y” (Loc & à + Lucru)",
            "theory": """
<p>Pronumele adverbiale <strong>EN</strong> și <strong>Y</strong> sunt specifice limbii franceze și înlocuiesc grupuri prepoziționale esențiale.</p>
<h4>1. Pronumele „Y” (Acolo / La asta)</h4>
<ul>
  <li>Înlocuiește un complement de loc introdus de <em>à, en, dans, chez, sur</em>: <em>Tu vas à Paris? &rarr; Oui, j'<strong>y</strong> vais.</em></li>
  <li>Înlocuiește un lucru introdus de <em>à</em>: <em>Tu penses à ton avenir? &rarr; Oui, j'<strong>y</strong> pense.</em></li>
</ul>
<h4>2. Pronumele „EN” (De acolo / Din asta / Cantitate)</h4>
<ul>
  <li>Înlocuiește un substantiv precedat de <em>de / du / de la / des</em>: <em>Tu veux du thé? &rarr; Oui, j'<strong>en</strong> veux.</em></li>
  <li>Înlocuiește un substantiv însoțit de o cantitate sau număr: <em>Tu as des frères? &rarr; Oui, j'<strong>en</strong> ai deux.</em></li>
</ul>
""",
            "glossary": [
                {"term": "Pronom Y", "def": "Înlocuiește un loc ('acolo') sau o idee/obiect introdus de prepoziția à."},
                {"term": "Pronom EN", "def": "Înlocuiește articole partitive (du, de la), cantități numerice sau expresii cu 'de'."},
                {"term": "J'y vais", "def": "'Merg acolo' — expresie uzuală de deplasare spre un loc stabilit."},
                {"term": "J'en ai deux", "def": "Menționarea cifrei rămâne la final când substantivul este înlocuit cu 'en'."}
            ],
            "matchingPairs": [
                {"left": "Tu vas chez le médecin?", "right": "Oui, j'y vais à 15 heures (loc &rarr; y)"},
                {"left": "Tu manges des croissants?", "right": "Oui, j'en mange le matin (cantitate &rarr; en)"},
                {"left": "Tu penses à ce projet?", "right": "Oui, j'y pense constamment (à + lucru &rarr; y)"},
                {"left": "Combien de pommes as-tu?", "right": "J'en ai trois dans mon sac (en + număr)"}
            ],
            "quiz": {
                "question": "Cum răspunzi afirmativ la întrebarea 'Tu veux du café?' folosind pronumele corect?",
                "options": [
                    "Oui, j'en veux. (du café &rarr; en)",
                    "Oui, je le veux.",
                    "Oui, j'y veux.",
                    "Oui, je lui veux."
                ],
                "correctIndex": 0,
                "explanation": "Articolul partitiv 'du café' se înlocuiește întotdeauna cu pronumele adverbial 'en'."
            },
            "task": "Scrie replica 'Tu vas au bureau aujourd'hui? Oui, j'y vais en métro.'.",
            "starterCode": "Tu vas au bureau ",
            "expectedOutputPattern": "Tu\\s+vas\\s+au\\s+bureau\\s+aujourd['’]hui\\?\\s*Oui,\\s*j['’]y\\s+vais\\s+en\\s+m[ée]tro\\.?",
            "hint": "Scrie Tu vas au bureau aujourd'hui? Oui, j'y vais en métro."
        },
        {
            "id": "fr-b1-p33",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 40,
            "title": "Capitolul 33: Le Futur Simple — Terminații, Rădăcini Neregulate & Proiecții",
            "theory": """
<p><strong>Futur Simple</strong> este timpul viitor formal și proiectiv (programe, previziuni, planuri pe termen mediu și lung).</p>
<h4>1. Formare Regulată</h4>
<p>Se ia <strong>infinitivul întreg</strong> al verbului și se adaugă terminațiile verbului <em>avoir</em>:</p>
<p><strong>-ai, -as, -a, -ons, -ez, -ont</strong></p>
<p>Exemplu: <em>parler &rarr; je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront</em>.</p>
<h4>2. Rădăcini Neregulate Majore</h4>
<ul>
  <li><em>être &rarr; ser-</em> (je serai)</li>
  <li><em>avoir &rarr; aur-</em> (j'aurai)</li>
  <li><em>aller &rarr; ir-</em> (j'irai)</li>
  <li><em>faire &rarr; fer-</em> (je ferai)</li>
  <li><em>pouvoir &rarr; pourr-</em> (je pourrai)</li>
  <li><em>vouloir &rarr; voudr-</em> (je voudrai)</li>
</ul>
""",
            "glossary": [
                {"term": "Futur Simple", "def": "Timpul viitor simplu format din infinitiv + terminațiile -ai, -as, -a, -ons, -ez, -ont."},
                {"term": "Rădăcină în -r", "def": "Toate formele de viitor simplu conțin litera 'r' înainte de terminație."},
                {"term": "Je serai / J'aurai", "def": "Formele de viitor neregulate ale verbelor être și avoir."},
                {"term": "Projections futures", "def": "Previziuni meteorologice, carieră și evenimente oficiale viitoare."}
            ],
            "matchingPairs": [
                {"left": "Demain je serai là", "right": "Mâine voi fi acolo (être)"},
                {"left": "Nous aurons le temps", "right": "Vom avea timp (avoir)"},
                {"left": "Tu iras en vacances", "right": "Vei merge în vacanță (aller)"},
                {"left": "Ils feront un effort", "right": "Ei vor face un efort (faire)"}
            ],
            "quiz": {
                "question": "Care este forma de viitor simplu pentru 'Nous' a verbului 'aller'?",
                "options": [
                    "Nous irons (rădăcina ir- + -ons)",
                    "Nous allerons",
                    "Nous allions",
                    "Nous vont aller"
                ],
                "correctIndex": 0,
                "explanation": "'Aller' are rădăcina neregulată de viitor 'ir-', deci la nous devine 'nous irons'."
            },
            "task": "Scrie propoziția 'Demain, nous voyagerons en France et nous visiterons Paris.'.",
            "starterCode": "Demain, nous ",
            "expectedOutputPattern": "Demain,\\s*nous\\s+voyagerons\\s+en\\s+France\\s+et\\s+nous\\s+visiterons\\s+Paris\\.?",
            "hint": "Scrie Demain, nous voyagerons en France et nous visiterons Paris."
        },
        {
            "id": "fr-b1-p34",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 40,
            "title": "Capitolul 34: Le Conditionnel Présent — Politețe, Dorințe & Sfaturi",
            "theory": """
<p><strong>Conditionnel Présent</strong> este modul politeții desăvârșite, al dorințelor ipotetice și al sfaturilor prietenești.</p>
<h4>1. Rețeta Matematică de Formare</h4>
<p><code>Rădăcina de viitor simplu + Terminațiile de Imparfait</code>:</p>
<p><strong>-ais, -ais, -ait, -ions, -iez, -aient</strong></p>
<p>Exemple: <em>vouloir &rarr; je voudr<strong>ais</strong></em> (aș dori); <em>pouvoir &rarr; pourr- &rarr; pourr<strong>iez</strong>-vous?</em> (ați putea?).</p>
<h4>2. Utilizări Esențiale</h4>
<ul>
  <li>Politețe la restaurant/hotel: <em>Je voudrais un café</em> (în loc de agresivul 'je veux').</li>
  <li>Sfat: <em>Tu devrais faire du sport</em> (ar trebui să faci sport).</li>
</ul>
""",
            "glossary": [
                {"term": "Conditionnel Présent", "def": "Modul folosit pentru cereri politicoase, dorințe și ipoteze."},
                {"term": "Je voudrais", "def": "Formula universală de politețe la comandă ('Aș dori...')."},
                {"term": "Pourriez-vous...?", "def": "'Ați putea să...?' — cerere respectuoasă la adresa unei persoane necunoscute."},
                {"term": "Tu devrais", "def": "'Ar trebui să...' — formularea unui sfat sau a unei recomandări amicale."}
            ],
            "matchingPairs": [
                {"left": "Je voudrais un café", "right": "Aș dori o cafea (politețe)"},
                {"left": "Pourriez-vous m'aider?", "right": "Ați putea să mă ajutați? (cerere respectuoasă)"},
                {"left": "J'aimerais voyager", "right": "Mi-ar plăcea să călătoresc (dorință)"},
                {"left": "Tu devrais te reposer", "right": "Ar trebui să te odihnești (sfat)"}
            ],
            "quiz": {
                "question": "Cum soliciți politicos un pahar cu apă într-o cafenea la Paris?",
                "options": [
                    "Je voudrais un verre d'eau, s'il vous plaît.",
                    "Je veux un verre d'eau immédiatement.",
                    "J'ai un verre d'eau.",
                    "Je prendrai de l'eau maintenant."
                ],
                "correctIndex": 0,
                "explanation": "'Je voudrais' la modul condițional este formula consacrată de politețe în franceză."
            },
            "task": "Scrie comanda 'Je voudrais réserver une table pour deux personnes, s'il vous plaît.'.",
            "starterCode": "Je voudrais réserver ",
            "expectedOutputPattern": "Je\\s+voudrais\\s+r[ée]server\\s+une\\s+table\\s+pour\\s+deux\\s+personnes,\\s*s['’]il\\s+vous\\s+pla[iî]t\\.?",
            "hint": "Scrie Je voudrais réserver une table pour deux personnes, s'il vous plaît."
        },
        {
            "id": "fr-b1-p35",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 40,
            "title": "Capitolul 35: Pronumele Relative Simple: QUI, QUE, OÙ, DONT",
            "theory": """
<p>Pronumele relative leagă două propoziții, evitând repetiția inutilă a unui substantiv.</p>
<h4>1. QUI vs QUE</h4>
<ul>
  <li><code>QUI</code> = subiectul propoziției relative (este <strong>urmat de un verb</strong>): <em>C'est l'homme <strong>qui parle</strong>.</em></li>
  <li><code>QUE (QU')</code> = complement direct (este <strong>urmat de un subiect + verb</strong>): <em>C'est le livre <strong>que je lis</strong>.</em></li>
</ul>
<h4>2. OÙ & DONT</h4>
<ul>
  <li><code>OÙ</code> = loc sau timp: <em>La ville <strong>où j'habite</strong></em>; <em>Le jour <strong>où je suis né</strong></em>.</li>
  <li><code>DONT</code> = înlocuiește un complement introdus de <strong>de</strong> (<em>parler de, avoir besoin de, être fier de</em>): <em>C'est le projet <strong>dont je parle</strong></em>.</li>
</ul>
""",
            "glossary": [
                {"term": "Qui (relatif)", "def": "Pronume relativ cu rol de subiect, urmat nemijlocit de verb."},
                {"term": "Que / Qu'", "def": "Pronume relativ cu rol de complement direct, urmat de subiect și predicat."},
                {"term": "Dont", "def": "Pronume relativ ce înlocuiește un substantiv guvernat de prepoziția 'de'."},
                {"term": "Où", "def": "Pronume relativ de spațiu ('unde') sau de timp ('când')."}
            ],
            "matchingPairs": [
                {"left": "Le collègue qui travaille ici", "right": "Colegul care lucrează aici (qui + verb)"},
                {"left": "Le film que nous regardons", "right": "Filmul pe care îl privim (que + subiect)"},
                {"left": "La maison où je suis né", "right": "Casa unde m-am născut (où = loc)"},
                {"left": "Le livre dont j'ai besoin", "right": "Cartea de care am nevoie (avoir besoin de)"}
            ],
            "quiz": {
                "question": "În fraza 'Voici la voiture ... j'ai achetée hier', ce pronume relativ trebuie inserat?",
                "options": [
                    "que (urmat de subiectul 'j'')",
                    "qui",
                    "dont",
                    "où"
                ],
                "correctIndex": 0,
                "explanation": "Mașina este complementul direct al verbului cumpărat de mine (j'ai achetée), deci folosim 'que'."
            },
            "task": "Scrie fraza 'C'est l'ami qui m'aide et le livre que je lis.'.",
            "starterCode": "C'est l'ami ",
            "expectedOutputPattern": "C['’]est\\s+l['’]ami\\s+qui\\s+m['’]aide\\s+et\\s+le\\s+livre\\s+que\\s+je\\s+lis\\.?",
            "hint": "Scrie C'est l'ami qui m'aide et le livre que je lis."
        },
        {
            "id": "fr-b1-p36",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 45,
            "title": "Capitolul 36: Conectori Logici: Cauză, Consecință & Opoziție",
            "theory": """
<p>Pentru a structura un discurs coerent și nuanțat la nivelul B1/B2, este indispensabilă folosirea conectorilor logici.</p>
<h4>1. Cauza (De ce?)</h4>
<ul>
  <li><code>Parce que</code> + frază: <em>Je reste chez moi parce qu'il pleut.</em></li>
  <li><code>Puisque</code> = de vreme ce / fiindcă (cauză cunoscută de ambii interlocutori).</li>
  <li><code>Grâce à</code> + substantiv (cauză pozitivă): <em>Grâce à son aide, j'ai réussi.</em></li>
  <li><code>À cause de</code> + substantiv (cauză negativă): <em>À cause de la grève, le train est annulé.</em></li>
</ul>
<h4>2. Consecința & Opoziția</h4>
<ul>
  <li>Consecință: <code>Donc</code> (deci), <code>Par conséquent</code> (prin urmare).</li>
  <li>Opoziție: <code>Mais</code> (dar), <code>Cependant / Pourtant</code> (totuși, cu toate acestea).</li>
</ul>
""",
            "glossary": [
                {"term": "Grâce à (+)", "def": "Datorită (folosit exclusiv pentru cauze cu consecințe favorabile)."},
                {"term": "À cause de (-)", "def": "Din cauza (folosit pentru factori perturbatori sau negativi)."},
                {"term": "Donc / Par conséquent", "def": "Conectori logici fundamentali de exprimare a deducției și consecinței."},
                {"term": "Cependant", "def": "Conector formal de opoziție echivalent cu 'totuși' sau 'cu toate acestea'."}
            ],
            "matchingPairs": [
                {"left": "Grâce à mon travail", "right": "Datorită muncii mele (pozitiv)"},
                {"left": "À cause de la pluie", "right": "Din cauza ploii (negativ)"},
                {"left": "Il étudie, donc il réussit", "right": "El învață, deci reușește (consecință)"},
                {"left": "Il est fatigué, pourtant il continue", "right": "E obosit, totuși continuă (opoziție)"}
            ],
            "quiz": {
                "question": "Ce conector cauzal folosești în: 'J'ai obtenu ce poste ... mes compétences en informatique'?",
                "options": [
                    "grâce à (cauză pozitivă și favorabilă)",
                    "à cause de",
                    "parce que",
                    "donc"
                ],
                "correctIndex": 0,
                "explanation": "'Grâce à' se folosește în fața unui substantiv atunci când rezultatul este un succes pozitiv."
            },
            "task": "Scrie fraza 'Il fait froid, donc je mets un manteau chaud.' (Este frig, deci îmi pun o haină călduroasă).",
            "starterCode": "Il fait froid, ",
            "expectedOutputPattern": "Il\\s+fait\\s+froid,\\s*donc\\s+je\\s+mets\\s+un\\s+manteau\\s+chaud\\.?",
            "hint": "Scrie Il fait froid, donc je mets un manteau chaud."
        },
        {
            "id": "fr-b1-p37",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m2,
            "xp": 45,
            "title": "Capitolul 37: Conversație Intermediară: La Medic, Farmacie & Situații Urgente",
            "theory": """
<p>Să consolidăm întregul Modul B1–B2 printr-un scenariu practic din viața reală: consultul medical și cumpărarea medicamentelor în Franța.</p>
<h4>1. Replicile Pacientului</h4>
<ul>
  <li><em>Docteur, je ne me sens pas bien depuis hier.</em> (Nu mă simt bine de ieri.)</li>
  <li><em>J'ai mal à la gorge, j'ai de la fièvre et je tousse.</em> (Mă doare în gât, am febră și tușesc.)</li>
  <li><em>Est-ce que c'est grave?</em> (Este grav?)</li>
</ul>
<h4>2. Replicile Medicului & Farmacistului</h4>
<ul>
  <li><em>Ouvrez la bouche et respirez fort. C'est une angine.</em></li>
  <li><em>Voici votre ordonnance. Prenez un comprimé trois fois par jour avant les repas.</em></li>
</ul>
""",
            "glossary": [
                {"term": "une ordonnance", "def": "Rețetă medicală eliberată de medic pentru farmacie."},
                {"term": "un comprimé", "def": "O pastilă sau comprimat medicamentos."},
                {"term": "tousser / avoir de la fièvre", "def": "A tuși / a avea temperatură/febră."},
                {"term": "trois fois par jour", "def": "De trei ori pe zi (frecvența de administrare a tratamentului)."}
            ],
            "matchingPairs": [
                {"left": "J'ai mal à la gorge", "right": "Mă doare în gât"},
                {"left": "Prenez un comprimé", "right": "Luați un comprimat"},
                {"left": "Avant les repas", "right": "Înainte de mese"},
                {"left": "Voici votre ordonnance", "right": "Iată rețeta dumneavoastră"}
            ],
            "quiz": {
                "question": "Cum îi spui medicului în franceză că ai o durere acută de gât și ai nevoie de o rețetă?",
                "options": [
                    "J'ai mal à la gorge et j'ai besoin d'une ordonnance.",
                    "Je suis mal gorge et veux papier.",
                    "J'ai douleur gorge avec médicament.",
                    "Mon gorge est cassé."
                ],
                "correctIndex": 0,
                "explanation": "Construcția corectă este 'J'ai mal à la gorge' urmată de substantivul 'une ordonnance'."
            },
            "task": "Scrie propoziția 'J'ai mal à la gorge et j'ai besoin d'une ordonnance médicale.'.",
            "starterCode": "J'ai mal à la gorge ",
            "expectedOutputPattern": "J['’]ai\\s+mal\\s+[àa]\\s+la\\s+gorge\\s+et\\s+j['’]ai\\s+besoin\\s+d['’]une\\s+ordonnance\\s+m[ée]dicale\\.?",
            "hint": "Scrie J'ai mal à la gorge et j'ai besoin d'une ordonnance médicale."
        },

        # --- MODULUL 3: C1-C2 (8 capitole) ---
        {
            "id": "fr-c1-p38",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m3,
            "xp": 50,
            "title": "Capitolul 38: Le Subjonctif Présent — Necesitate, Voință & Declanșatori Canonici",
            "theory": """
<p><strong>Subjonctif</strong> nu este un timp, ci <strong>modul subiectivității</strong>, al incertitudinii, al dorinței, sentimentelor și necesității.</p>
<h4>1. Declanșatori Canonici Obligatorii</h4>
<ul>
  <li>Necesitate / Obligație: <em>Il faut que...</em>, <em>Il est impératif que...</em></li>
  <li>Voință / Dorință: <em>Je veux que...</em>, <em>J'exige que...</em></li>
  <li>Sentiment / Temere: <em>Je suis ravi que...</em>, <em>J'ai peur que...</em></li>
</ul>
<h4>2. Regula Universală de Formare</h4>
<p>Se ia rădăcina persoanei a 3-a plural de la prezent (<em>ils finiss-ent</em>) și se adaugă terminațiile:</p>
<p><strong>-e, -es, -e, -ions, -iez, -ent</strong></p>
<p>Excepții esențiale: <em>faire &rarr; que je fasse</em>; <em>être &rarr; que je sois</em>; <em>avoir &rarr; que j'aie</em>; <em>aller &rarr; que j'aille</em>.</p>
""",
            "glossary": [
                {"term": "Le Subjonctif", "def": "Mod gramatical cerut de expresii ce denotă voință, îndoială, necesitate sau emoție."},
                {"term": "Il faut que + subj.", "def": "Construcție impersonală obligatorie ce impune întotdeauna modul conjunctiv."},
                {"term": "Que je fasse", "def": "Forma neregulată de subjonctif a verbului faire."},
                {"term": "Double sujet obligatoire", "def": "Subjonctif se folosește când subiectul din propoziția principală diferă de cel din secundară."}
            ],
            "matchingPairs": [
                {"left": "Il faut que tu fasses attention", "right": "Subjonctif de la faire (fasses)"},
                {"left": "Je veux que tu viennes", "right": "Subjonctif de la venir (viennes)"},
                {"left": "Il est temps que nous partions", "right": "Subjonctif de la partir (partions)"},
                {"left": "Bien que nous soyons prêts", "right": "Subjonctif de la être (soyons)"}
            ],
            "quiz": {
                "question": "Care este forma corectă de subjonctif a verbului 'faire' pentru pronumele 'vous'?",
                "options": [
                    "fassiez (Il faut que vous fassiez)",
                    "faisez",
                    "faites",
                    "fassent"
                ],
                "correctIndex": 0,
                "explanation": "Rădăcina neregulată a verbului faire la subjonctif este fass-, primind terminația -iez pentru vous: fassiez."
            },
            "task": "Scrie cerința 'Il faut que vous fassiez attention à tous les détails.' (Trebuie să fiți atent la toate detaliile).",
            "starterCode": "Il faut que vous ",
            "expectedOutputPattern": "Il\\s+faut\\s+que\\s+vous\\s+fassiez\\s+attention\\s+[àa]\\s+tous\\s+les\\s+d[ée]tails\\.?",
            "hint": "Scrie Il faut que vous fassiez attention à tous les détails."
        },
        {
            "id": "fr-c1-p39",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m3,
            "xp": 50,
            "title": "Capitolul 39: Subjonctif vs Indicatif — Certitudine vs Îndoială (Penser que vs Douter que)",
            "theory": """
<p>La nivelul C1, nuanța dintre certitudine și dubiu determină alegerea dintre indicativ și subjonctif.</p>
<h4>1. Verbele de Opinie & Gândire</h4>
<ul>
  <li>Forma Afirmativă (Certitudine) &rarr; <strong>INDICATIF</strong>:<br>
  <em>Je pense qu'il <strong>sait</strong> la vérité.</em> (Sunt sigur)</li>
  <li>Forma Negativă sau Interogativă (Îndoială) &rarr; <strong>SUBJONCTIF</strong>:<br>
  <em>Je ne pense pas qu'il <strong>sache</strong> la vérité.</em> (Mă îndoiesc)</li>
</ul>
<h4>2. Douter que vs Se douter que</h4>
<p><em>Je doute qu'il <strong>vienne</strong></em> (mă îndoiesc &rarr; subjonctif) vs <em>Je me doute qu'il <strong>viendra</strong></em> (bănuiesc / știu &rarr; indicatif).</p>
""",
            "glossary": [
                {"term": "Certitude & Indicatif", "def": "Expresiile de certitudine (je sais que, il est certain que) cer modul indicativ."},
                {"term": "Doute & Subjonctif", "def": "Îndoiala (je ne crois pas que, je doute que) impune întotdeauna modul conjunctiv."},
                {"term": "Sache", "def": "Forma neregulată de subjonctif a verbului savoir (je ne pense pas qu'il sache)."},
                {"term": "Nuance de modalité", "def": "Schimbarea modului verbal modifică gradul de siguranță asumat de vorbitor."}
            ],
            "matchingPairs": [
                {"left": "Je pense qu'il a raison", "right": "Indicatif (convingere afirmativă)"},
                {"left": "Je ne pense pas qu'il ait raison", "right": "Subjonctif (incertitudine la forma negativă)"},
                {"left": "Il est évident que c'est vrai", "right": "Indicatif (evidență obiectivă)"},
                {"left": "Il est douteux que ce soit vrai", "right": "Subjonctif (caracter îndoielnic)"}
            ],
            "quiz": {
                "question": "Ce mod și formă se folosește în fraza 'Je ne crois pas qu'elle ... la bonne décision' pentru verbul 'prendre'?",
                "options": [
                    "prenne (Subjonctif présent cerut de ne pas croire que)",
                    "prend (Indicatif)",
                    "prendra (Futur)",
                    "prenait (Imparfait)"
                ],
                "correctIndex": 0,
                "explanation": "La forma negativă, 'ne pas croire que' declanșează obligatoriu subjonctif: 'qu'elle prenne'."
            },
            "task": "Scrie propoziția 'Je ne pense pas qu'il sache la réponse exacte.' (Nu cred că el știe răspunsul exact).",
            "starterCode": "Je ne pense pas ",
            "expectedOutputPattern": "Je\\s+ne\\s+pense\\s+pas\\s+qu['’]il\\s+sache\\s+la\\s+r[ée]ponse\\s+exacte\\.?",
            "hint": "Scrie Je ne pense pas qu'il sache la réponse exacte."
        },
        {
            "id": "fr-c1-p40",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m3,
            "xp": 50,
            "title": "Capitolul 40: Frazele Ipotetice cu „SI” (Si + Présent, Si + Imparfait, Si + Plus-que-parfait)",
            "theory": """
<p>Concordanța timpurilor în frazele condiționale introduse de <strong>SI</strong> este o regulă de aur: <em>„Si” n'aime pas les „-rais”!</em> (După „si” nu se pune NICIODATĂ viitor sau condițional!).</p>
<h4>1. Cele 3 Tipuri Fundamentale de Ipoteză</h4>
<ol>
  <li><strong>Ipotetic Real / Posibil:</strong><br>
  <code>Si + Présent &rarr; Futur Simple</code><br>
  <em>Si j'ai le temps, je viendrai te voir.</em></li>
  <li><strong>Ipotetic Ireál în Prezent (Condiție Nerealizată Acum):</strong><br>
  <code>Si + Imparfait &rarr; Conditionnel Présent</code><br>
  <em>Si j'avais de l'argent, j'achèterais cette maison.</em></li>
  <li><strong>Ipotetic Ireál în Trecut (Regret Trecut):</strong><br>
  <code>Si + Plus-que-parfait &rarr; Conditionnel Passé</code><br>
  <em>Si j'avais su, je serais venu.</em></li>
</ol>
""",
            "glossary": [
                {"term": "Hypothèse réalisable", "def": "Si + prezent urmat de viitor simplu pentru acțiuni posibile în viitor."},
                {"term": "Irréel du présent", "def": "Si + imperfect urmat de condițional prezent pentru situații imaginare actuale."},
                {"term": "Irréel du passé", "def": "Si + mai mult ca perfect urmat de condițional trecut pentru regrete definitive."},
                {"term": "Interdiction du futur après SI", "def": "Regulă strictă: conjuncția condițională 'si' nu poate fi urmată de -rai sau -rais."}
            ],
            "matchingPairs": [
                {"left": "Si tu veux, nous irons au cinéma", "right": "Si + présent &rarr; futur simple"},
                {"left": "Si j'étais riche, je voyagerais", "right": "Si + imparfait &rarr; conditionnel présent"},
                {"left": "Si tu avais travaillé, tu aurais réussi", "right": "Si + plus-que-parfait &rarr; conditionnel passé"},
                {"left": "Si vous avez faim, mangez!", "right": "Si + présent &rarr; impératif"}
            ],
            "quiz": {
                "question": "Care este continuarea corectă a frazei 'Si j'avais le choix, je ... en Italie'?",
                "options": [
                    "vivrais (Conditionnel présent acordat cu Si + imparfait)",
                    "vivrai (Futur simple)",
                    "vis (Présent)",
                    "aurais vécu"
                ],
                "correctIndex": 0,
                "explanation": "După 'Si + imparfait' (avais), propoziția principală cere în mod obligatoriu condiționalul prezent: vivrais."
            },
            "task": "Scrie fraza ipotetică 'Si j'avais plus de temps, j'apprendrais le français chaque jour.'.",
            "starterCode": "Si j'avais plus de temps, ",
            "expectedOutputPattern": "Si\\s+j['’]avais\\s+plus\\s+de\\s+temps,\\s*j['’]apprendrais\\s+le\\s+fran[çc]ais\\s+chaque\\s+jour\\.?",
            "hint": "Scrie Si j'avais plus de temps, j'apprendrais le français chaque jour."
        },
        {
            "id": "fr-c1-p41",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m3,
            "xp": 55,
            "title": "Capitolul 41: Vocea Pasivă & Formele Pasive Reflexive",
            "theory": """
<p>Vocea pasivă este folosită intens în articolele de presă, documentele administrative și stilul științific din Franța.</p>
<h4>1. Formarea Vocii Pasive</h4>
<p><code>Subiect pacient + ÊTRE (la orice timp) + Participiu trecut (acordat!) + PAR + Agent</code>.</p>
<ul>
  <li>Prezent: <em>Le pont <strong>est construit</strong> par les ingénieurs.</em></li>
  <li>Passé Composé: <em>Le musée <strong>a été inauguré</strong> par le président.</em></li>
  <li>Futur Simple: <em>Le rapport <strong>sera publié</strong> demain.</em></li>
</ul>
<h4>2. Pasiva Reflexivă Impersonală</h4>
<p>Când autorul acțiunii este nedeterminat, franceza preferă forma pronominală pasivă: <em>Ce vin <strong>se boit</strong> frais</em> (Acest vin se bea rece).</p>
""",
            "glossary": [
                {"term": "Voix passive", "def": "Construcție sintactică ce evidențiază obiectul asupra căruia se răsfrânge acțiunea."},
                {"term": "Complément d'agent", "def": "Autorul acțiunii pasive introdus prin prepoziția 'par' sau 'de'."},
                {"term": "A été inauguré", "def": "Trecutul compus al vocii pasive (a été + participiu acordat)."},
                {"term": "Passif pronominal", "def": "Formă reflexivă cu valoare pasivă impersonală (ex: Cela ne se dit pas)."}
            ],
            "matchingPairs": [
                {"left": "Le texte a été écrit par Paul", "right": "Textul a fost scris de Paul"},
                {"left": "La décision sera prise demain", "right": "Decizia va fi luată mâine"},
                {"left": "Ce livre se lit facilement", "right": "Această carte se citește ușor (pasiv reflexiv)"},
                {"left": "La maison est entourée d'arbres", "right": "Casa este înconjurată de copaci"}
            ],
            "quiz": {
                "question": "Cum se traduce la diateza pasivă trecută 'Acest proiect a fost realizat de echipa noastră'?",
                "options": [
                    "Ce projet a été réalisé par notre équipe.",
                    "Ce projet est réalisé notre équipe.",
                    "Ce projet avait réaliser par équipe.",
                    "Ce projet a réaliser de équipe."
                ],
                "correctIndex": 0,
                "explanation": "Structura de passé composé la pasiv este 'a été' urmat de participiul trecut acordat 'réalisé'."
            },
            "task": "Scrie propoziția 'Ce projet a été réalisé avec succès par notre équipe.'.",
            "starterCode": "Ce projet a été réalisé ",
            "expectedOutputPattern": "Ce\\s+projet\\s+a\\s+[ée]t[ée]\\s+r[ée]alis[ée]\\s+avec\\s+succ[èe]s\\s+par\\s+notre\\s+[ée]quipe\\.?",
            "hint": "Scrie Ce projet a été réalisé avec succès par notre équipe."
        },
        {
            "id": "fr-c1-p42",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m3,
            "xp": 55,
            "title": "Capitolul 42: Le Gérondif & Le Participe Présent — Simultaneitate & Modalitate",
            "theory": """
<p><strong>Le Gérondif</strong> și <strong>Le Participe Présent</strong> conferă fluiditate și eleganță frazei franceze, sintetizând idei complexe într-o singură propoziție.</p>
<h4>1. Le Gérondif (EN + Participiu Prezent)</h4>
<p>Se formează din: <code>EN + Rădăcina 'nous' de la prezent + -ANT</code>.</p>
<ul>
  <li><strong>Simultaneitate:</strong> <em>Il écoute de la musique <strong>en travaillant</strong>.</em> (Ascultă muzică în timp ce lucrează.)</li>
  <li><strong>Mijloc / Modalitate:</strong> <em>C'est <strong>en forgeant</strong> qu'on devient forgeron.</em> (Practicând devii meșter.)</li>
  <li><strong>Condiție:</strong> <em><strong>En faisant</strong> des efforts, vous réussirez.</em></li>
</ul>
<h4>2. Regula Subiectului Identic</h4>
<p>Gérondif-ul cere obligatoriu ca subiectul acțiunii principale să fie identic cu cel al acțiunii secundare.</p>
""",
            "glossary": [
                {"term": "Le Gérondif", "def": "Formă verbală invariabilă precedată de prepoziția 'en' ce exprimă simultaneitatea sau modul."},
                {"term": "Terminația -ant", "def": "Terminația participiului prezent și a gerunziului obținută din rădăcina persoanei nous."},
                {"term": "Simultanéité", "def": "Două acțiuni realizate în același timp de către același subiect."},
                {"term": "En apprenant", "def": "Învățând / în timp ce înveți (gerunziul verbului apprendre)."}
            ],
            "matchingPairs": [
                {"left": "En écoutant la radio", "right": "Ascultând radioul (în timp ce ascultă)"},
                {"left": "En prenant le métro", "right": "Luând metroul (mijloc)"},
                {"left": "En faisant du sport", "right": "Făcând sport"},
                {"left": "Tout en souriant", "right": "Zâmbind în tot acest timp (emfază)"}
            ],
            "quiz": {
                "question": "Cum se formează gerunziul verbului 'écouter' (nous écoutons)?",
                "options": [
                    "en écoutant (en + écout- + -ant)",
                    "écoutant",
                    "en écouté",
                    "en écouter"
                ],
                "correctIndex": 0,
                "explanation": "Gérondif-ul se formează întotdeauna din prepoziția 'en' urmată de participiul prezent în '-ant': en écoutant."
            },
            "task": "Scrie mărturisirea 'J'ai appris le français en écoutant des podcasts tous les jours.'.",
            "starterCode": "J'ai appris le français ",
            "expectedOutputPattern": "J['’]ai\\s+appris\\s+le\\s+fran[çc]ais\\s+en\\s+[ée]coutant\\s+des\\s+podcasts\\s+tous\\s+les\\s+jours\\.?",
            "hint": "Scrie J'ai appris le français en écoutant des podcasts tous les jours."
        },
        {
            "id": "fr-c1-p43",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m3,
            "xp": 60,
            "title": "Capitolul 43: Discursul Indirect în Trecut & Concordanța Timpurilor",
            "theory": """
<p>Raportarea spuselor cuiva într-un context narativ trecut cere aplicarea strictă a concordanței timpurilor (<em>la concordance des temps</em>).</p>
<h4>1. Schimbările de Timp când Verbul Introductiv este la Trecut</h4>
<ul>
  <li>Prezent &rarr; <strong>Imparfait</strong>:<br>
  <em>Il a dit: « Je suis fatigué » &rarr; Il a dit qu'il <strong>était</strong> fatigué.</em></li>
  <li>Passé Composé &rarr; <strong>Plus-que-parfait</strong>:<br>
  <em>Il a dit: « J'ai fini » &rarr; Il a dit qu'il <strong>avait fini</strong>.</em></li>
  <li>Futur Simple &rarr; <strong>Conditionnel Présent</strong>:<br>
  <em>Il a dit: « Je viendrai » &rarr; Il a dit qu'il <strong>viendrait</strong>.</em></li>
</ul>
""",
            "glossary": [
                {"term": "Discours indirect au passé", "def": "Raportarea replicilor când verbul de declarație (a dit, a expliqué) este la trecut."},
                {"term": "Futur dans le passé", "def": "Condiționalul prezent folosit pentru a exprima o acțiune viitoare din perspectiva trecutului."},
                {"term": "Plus-que-parfait", "def": "Timpul mai mult ca perfect (avais/étais + participiu) ce exprimă o anterioritate absolută."},
                {"term": "Verbe introducteur", "def": "Verbul de comunicare (dire, affirmer, expliquer, demander) ce declanșează concordanța."}
            ],
            "matchingPairs": [
                {"left": "Il a dit: 'Je pars' &rarr;", "right": "Il a dit qu'il partait (imparfait)"},
                {"left": "Il a dit: 'Je partirai' &rarr;", "right": "Il a dit qu'il partirait (conditionnel)"},
                {"left": "Il a dit: 'Je suis parti' &rarr;", "right": "Il a dit qu'il était parti (plus-que-parfait)"},
                {"left": "Il a demandé si...", "right": "Întrebare indirectă (fără inversiune)"}
            ],
            "quiz": {
                "question": "Cum transpui la vorbire indirectă trecută replica: Paul a affirmé: « Je téléphonerai à midi »?",
                "options": [
                    "Paul a affirmé qu'il téléphonerait à midi. (futur &rarr; conditionnel présent)",
                    "Paul a affirmé qu'il téléphonera à midi.",
                    "Paul a affirmé qu'il téléphonait à midi.",
                    "Paul a affirmé qu'il a téléphoné à midi."
                ],
                "correctIndex": 0,
                "explanation": "După un verb introductiv la trecut (a affirmé), timpul viitor 'téléphonerai' devine condițional prezent: 'téléphonerait'."
            },
            "task": "Scrie fraza indirectă 'Il m'a expliqué qu'il viendrait demain matin à huit heures.'.",
            "starterCode": "Il m'a expliqué qu'il ",
            "expectedOutputPattern": "Il\\s+m['’]a\\s+expliqu[ée]\\s+qu['’]il\\s+viendrait\\s+demain\\s+matin\\s+[àa]\\s+huit\\s+heures\\.?",
            "hint": "Scrie Il m'a expliqué qu'il viendrait demain matin à huit heures."
        },
        {
            "id": "fr-c1-p44",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m3,
            "xp": 60,
            "title": "Capitolul 44: Expresii Idiomatice Majore din Hexagon & Nuanțe Argotice",
            "theory": """
<p>Atingerea nivelului de măiestrie lingvistică (C1/C2) presupune înțelegerea metaforelor și a expresiilor idiomatice specifice culturii franceze contemporane.</p>
<h4>1. Metafore Clinice & Cotidiene</h4>
<ul>
  <li><code>Avoir le cafard</code> &mdash; a fi deprimat, trist, melancolic.</li>
  <li><code>Poser un lapin à quelqu'un</code> &mdash; a lipsi nemotivat de la o întâlnire stabilită.</li>
  <li><code>Coûter les yeux de la tête</code> &mdash; a fi exorbitant de scump, a costa o avere.</li>
  <li><code>Tomber dans les pommes</code> &mdash; a leșina, a-și pierde cunoștința.</li>
  <li><code>Casser les pieds à quelqu'un</code> &mdash; a agasa, a enerva peste măsură.</li>
</ul>
""",
            "glossary": [
                {"term": "Avoir le cafard", "def": "Expresie idiomatică franceză celebră ce desemnează o stare de melancolie sau tristețe profundă."},
                {"term": "Coûter les yeux de la tête", "def": "Echivalentul francez pentru 'costă o avere'."},
                {"term": "Poser un lapin", "def": "A nu te prezenta la întâlnirea pe care ai fixat-o cu o altă persoană."},
                {"term": "Tomber dans les pommes", "def": "Expresie colocvială autentică ce înseamnă a leșina brusc."}
            ],
            "matchingPairs": [
                {"left": "Poser un lapin", "right": "A nu veni la o întâlnire stabilită"},
                {"left": "Coûter les yeux de la tête", "right": "A costa o avere"},
                {"left": "Tomber dans les pommes", "right": "A leșina din senin"},
                {"left": "Casser les pieds", "right": "A enerva sau agasa pe cineva"}
            ],
            "quiz": {
                "question": "Ce înseamnă când un francez exclamă: 'Cette voiture coûte les yeux de la tête!'?",
                "options": [
                    "Această mașină costă o avere (este extrem de scumpă).",
                    "Această mașină are faruri foarte frumoase.",
                    "Această mașină este la reducere promoțională.",
                    "Această mașină este periculoasă la condus."
                ],
                "correctIndex": 0,
                "explanation": "'Coûter les yeux de la tête' este metafora franceză standard pentru un preț uriaș."
            },
            "task": "Scrie propoziția 'Ça coûte les yeux de la tête mais c'est d'une qualité exceptionnelle.'.",
            "starterCode": "Ça coûte les yeux de la tête ",
            "expectedOutputPattern": "[ÇC]a\\s+co[uû]te\\s+les\\s+yeux\\s+de\\s+la\\s+t[êe]te\\s+mais\\s+c['’]est\\s+d['’]une\\s+qualit[ée]\\s+exceptionnelle\\.?",
            "hint": "Scrie Ça coûte les yeux de la tête mais c'est d'une qualité exceptionnelle."
        },
        {
            "id": "fr-c1-p45",
            "track": "Limba Franceză",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥖",
            "level": m3,
            "xp": 65,
            "title": "Capitolul 45: Corespondență Formală, CV & Franceză Diplomatică / Corporativă",
            "theory": """
<p>Culmea măiestriei (C2) este redactarea impecabilă a scrisorilor oficiale de cancelarie și a comunicării diplomatice corporative.</p>
<h4>1. Formulele de Deschidere & Referință</h4>
<p><em>« À l'attention de Monsieur le Directeur Général »</em><br>
<em>« Suite à notre entretien téléphonique du 14 courant, j'ai l'honneur de vous soumettre ma candidature... »</em></p>
<h4>2. Formula Supremă de Încheiere de Protocol</h4>
<p><em>« Dans l'attente d'un retour favorable de votre part, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »</em></p>
""",
            "glossary": [
                {"term": "Veuillez agréer...", "def": "Formula solemnă supremă de politețe la finalul documentelor oficiale franceze."},
                {"term": "Salutations distinguées", "def": "Formulă de respect aristocratic și diplomatic rezervată scrisorilor oficiale."},
                {"term": "Dans l'attente de...", "def": "'În așteptarea...' — locuițiune de tranziție către formula de curtoazie finală."},
                {"term": "À l'attention de", "def": "Formulă protocolară de adresare specifică către o persoană sau funcție executivă."}
            ],
            "matchingPairs": [
                {"left": "À l'attention de Monsieur...", "right": "În atenția Domnului... (antet oficial)"},
                {"left": "Dans l'attente de votre réponse", "right": "În așteptarea răspunsului dumneavoastră"},
                {"left": "Veuillez agréer mes salutations", "right": "Formulă solemnă de curtoazie finală"},
                {"left": "Je vous saurais gré de...", "right": "V-aș fi profund recunoscător dacă..."}
            ],
            "quiz": {
                "question": "Care este cea mai respectuoasă formulă diplomatică de încheiere a unei scrisori oficiale în Franța?",
                "options": [
                    "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
                    "Merci beaucoup et à bientôt!",
                    "Salut cordialement à toute l'équipe.",
                    "Je vous attends demain matin."
                ],
                "correctIndex": 0,
                "explanation": "Formula de cancelarie 'Veuillez agréer... salutations distinguées' este etalonul absolut al curtoaziei administrative franceze."
            },
            "task": "Scrie formula protocolară solemnă 'Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.'.",
            "starterCode": "Veuillez agréer, ",
            "expectedOutputPattern": "Veuillez\\s+agr[ée]er,\\s*Madame,\\s*Monsieur,\\s*l['’]expression\\s+de\\s+mes\\s+salutations\\s+distingu[ée]es\\.?",
            "hint": "Scrie Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées."
        }
    ]

    return lessons
