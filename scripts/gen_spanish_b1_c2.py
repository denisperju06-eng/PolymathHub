# -*- coding: utf-8 -*-
"""
Spanish Module 2 (B1-B2: 12 chapters) and Module 3 (C1-C2: 8 chapters).
Total: 20 chapters to complete Spanish curriculum from 25 to 45 chapters.
"""

def get_spanish_b1_c2_lessons():
    m2 = "2. Modulul B1–B2 (Intermediar: Timpuri, Pronume & Gramatică)"
    m3 = "3. Modulul C1–C2 (Avansat: Subjonctif, Idiomuri & Limbaj Formal)"

    lessons = [
        # --- MODULUL 2: B1-B2 (12 capitole) ---
        {
            "id": "es-b1-p26",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 26: Pretérito Perfecto Compuesto (He comido, has hablado — Trecutul Apropiat)",
            "theory": """
<p><strong>Pretérito Perfecto Compuesto</strong> este timpul acțiunilor finalizate într-o unitate de timp care <strong>încă include momentul prezent</strong> (marcat de: <em>hoy</em>, <em>esta mañana</em>, <em>esta semana</em>, <em>este año</em>, <em>últimamente</em>, <em>alguna vez</em>, <em>nunca</em>).</p>
<h4>1. Rețeta de Formare</h4>
<p><code>Auxiliarul HABER la prezent + Participiul Trecut Invariabil</code></p>
<pre><code>Yo he hablado / comido / vivido
Tú has hablado / comido / vivido
Él / Ella / Usted ha hablado / comido / vivido
Nosotros hemos hablado / comido / vivido
Vosotros habéis hablado / comido / vivido
Ellos / Ustedes han hablado / comido / vivido
</code></pre>
<h4>2. Regula Invariabilității</h4>
<p>Spre deosebire de franceză sau italiană, în spaniolă participiul trecut <strong>NU se acordă NICIODATĂ</strong> și <strong>NU se separă</strong> de auxiliar: <em>Ella ha comido</em> (nu comid<strong>a</strong>!).</p>
""",
            "glossary": [
                {"term": "Pretérito Perfecto", "def": "Timpul compus spaniol pentru acțiuni trecute legate de prezent (hoy, esta semana)."},
                {"term": "Auxiliarul HABER", "def": "He, has, ha, hemos, habéis, han — unicul auxiliar folosit la timpurile compuse active."},
                {"term": "Participiu invariabil", "def": "Forma în -ado/-ido nu își schimbă niciodată terminația în funcție de gen sau număr."},
                {"term": "Marcatori temporali (Hoy)", "def": "Indică faptul că perioada de timp nu s-a scurs încă în momentul vorbirii."}
            ],
            "matchingPairs": [
                {"left": "Hoy he estudiado mucho", "right": "Astăzi am învățat mult"},
                {"left": "Esta semana hemos trabajado", "right": "Săptămâna aceasta am lucrat"},
                {"left": "¿Has estado en España?", "right": "Ai fost vreodată în Spania?"},
                {"left": "Nunca han visto eso", "right": "Ei nu au văzut niciodată asta"}
            ],
            "quiz": {
                "question": "Cum se traduce corect 'Astăzi am mâncat paella' folosind pretérito perfecto?",
                "options": [
                    "Hoy he comido paella. (haber + participiu invariabil)",
                    "Hoy he comida paella.",
                    "Hoy soy comido paella.",
                    "Hoy comí paella siempre."
                ],
                "correctIndex": 0,
                "explanation": "Cu marcatorul 'Hoy', folosim 'he comido' (haber la prezent + participiu invariabil în -o)."
            },
            "task": "Scrie propoziția 'Hoy he estudiado español y he hablado con mi amigo.' (Astăzi am învățat spaniolă și am vorbit cu prietenul meu).",
            "starterCode": "Hoy he estudiado ",
            "expectedOutputPattern": "Hoy\\s+he\\s+estudiado\\s+espa[ñn]ol\\s+y\\s+he\\s+hablado\\s+con\\s+mi\\s+amigo\\.?",
            "hint": "Scrie Hoy he estudiado español y he hablado con mi amigo."
        },
        {
            "id": "es-b1-p27",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 27: Pretérito Indefinido (Perfectul Simplu Regulat: Hablé, Comí, Viví)",
            "theory": """
<p><strong>Pretérito Indefinido</strong> (sau <em>Pretérito Perfecto Simple</em>) este timpul suprem al narațiunii spaniole pentru evenimente petrecute într-un moment trecut <strong>complet încheiat</strong>, fără legătură cu prezentul (marcat de: <em>ayer</em>, <em>anoche</em>, <em>el año pasado</em>, <em>en 1995</em>).</p>
<h4>1. Terminațiile Regulate</h4>
<ul>
  <li>Verbe în <code>-ar</code> (<em>hablar</em>):<br>
  <strong>-é, -aste, -ó, -amos, -asteis, -aron</strong><br>
  <em>hablé, hablaste, habló, hablamos, hablasteis, hablaron</em>.</li>
  <li>Verbe în <code>-er / -ir</code> (<em>comer, vivir</em>):<br>
  <strong>-í, -iste, -ió, -imos, -isteis, -ieron</strong><br>
  <em>comí, comiste, comió, comimos, comisteis, comieron</em>.</li>
</ul>
<h4>2. Accentele Grafice Obligatorii</h4>
<p>Atenție: persoana I (<em>habl<strong>é</strong>, com<strong>í</strong></em>) și persoana a III-a singular (<em>habl<strong>ó</strong>, com<strong>ió</strong></em>) poartă obligatoriu accent grafic!</p>
""",
            "glossary": [
                {"term": "Pretérito Indefinido", "def": "Timpul perfect simplu spaniol pentru fapte punctuale petrecute în intervale de timp expirate."},
                {"term": "Marcatori de trecut (Ayer)", "def": "Ayer (ieri), anoche (aseară), la semana pasada (săptămâna trecută)."},
                {"term": "Accent grafic pe pers. 1 și 3", "def": "Hablé și habló cer obligatoriu accent pe tildă pentru a nu se confunda cu prezentul."},
                {"term": "Conjugarea unificată -er/-ir", "def": "Grupele a doua și a treia împart terminații identice la pretérito indefinido."}
            ],
            "matchingPairs": [
                {"left": "Ayer hablé con María", "right": "Ieri am vorbit cu Maria (-é)"},
                {"left": "Él comió una ensalada", "right": "El a mâncat o salată (-ió)"},
                {"left": "Vivimos dos años en Madrid", "right": "Am trăit doi ani la Madrid (-imos)"},
                {"left": "Ellos compraron una casa", "right": "Ei au cumpărat o casă (-aron)"}
            ],
            "quiz": {
                "question": "Care este forma de persoana a 3-a singular (él/ella) a verbului 'escribir' la pretérito indefinido?",
                "options": [
                    "escribió (accent grafic pe ó)",
                    "escribe",
                    "escribía",
                    "escribio"
                ],
                "correctIndex": 0,
                "explanation": "La verbele în -er/-ir, persoana a 3-a singular primește terminația '-ió' cu accent obligatoriu: escribió."
            },
            "task": "Scrie propoziția 'Ayer trabajé ocho horas y comí en un restaurante mexicano.'.",
            "starterCode": "Ayer trabajé ",
            "expectedOutputPattern": "Ayer\\s+trabaj[ée]\\s+ocho\\s+horas\\s+y\\s+com[íi]\\s+en\\s+un\\s+restaurante\\s+mexicano\\.?",
            "hint": "Scrie Ayer trabajé ocho horas y comí en un restaurante mexicano."
        },
        {
            "id": "es-b1-p28",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 28: Pretérito Indefinido: Forme Neregulate Fundamentale",
            "theory": """
<p>Multe dintre cele mai importante verbe din spaniolă au o rădăcină specială neregulată la pretérito indefinido și împart un <strong>set comun de terminații FĂRĂ accent grafic</strong>:</p>
<p><strong>-e, -iste, -o, -imos, -isteis, -ieron</strong></p>
<h4>1. Rădăcini Neregulate Esențiale</h4>
<ul>
  <li><code>estar &rarr; estuv-</code> (estuve, estuviste, estuvo...)</li>
  <li><code>tener &rarr; tuv-</code> (tuve, tuviste, tuvo...)</li>
  <li><code>hacer &rarr; hic-</code> (hice, hiciste, <strong>hizo</strong>, hicimos...)</li>
  <li><code>decir &rarr; dij-</code> (dije, dijiste, dijo, dijimos, <strong>dijeron</strong>)</li>
  <li><code>poder &rarr; pud-</code> (pude, pudiste, pudo...)</li>
</ul>
<h4>2. Dubletul Neregulat Unic: SER & IR</h4>
<p>Verbele <em>ser</em> (a fi) și <em>ir</em> (a merge) au <strong>forme 100% identice</strong> la indefinido (contextul decide înțelesul!):<br>
<strong>fui, fuiste, fue, fuimos, fuisteis, fueron</strong>.</p>
""",
            "glossary": [
                {"term": "Rădăcini neregulate în -u/-i/-j", "def": "Estuv-, tuv-, hic-, dij- împart terminațiile comune fără accent grafic."},
                {"term": "Hizo (pers. 3 faire)", "def": "La persoana a 3-a, 'c' se transformă în 'z' pentru a păstra pronunția: hizo."},
                {"term": "Fui (Ser / Ir)", "def": "Formă identică atât pentru 'am fost', cât și pentru 'am mers'."},
                {"term": "Absența accentului grafic", "def": "Verbele cu rădăcină neregulată la indefinido nu poartă niciodată accent grafic."}
            ],
            "matchingPairs": [
                {"left": "Ayer estuve en casa", "right": "Ieri am fost / am stat acasă (estar)"},
                {"left": "Tuve mucho trabajo", "right": "Am avut mult de lucru (tener)"},
                {"left": "Hizo un pastel delicioso", "right": "A făcut o prăjitură delicioasă (hacer)"},
                {"left": "El año pasado fui a Madrid", "right": "Anul trecut am mers la Madrid (ir)"}
            ],
            "quiz": {
                "question": "Care este forma de persoana a 3-a singular (él/ella) a verbului 'hacer' la pretérito indefinido?",
                "options": [
                    "hizo (cu 'z' pentru păstrarea foneticii)",
                    "hició",
                    "hace",
                    "hizo con acento"
                ],
                "correctIndex": 0,
                "explanation": "La verbul hacer, forma de persoana a 3-a se ortografiază cu 'z' (hizo) și nu poartă accent grafic."
            },
            "task": "Scrie propoziția 'El fin de semana estuve en Barcelona y fui al museo.'.",
            "starterCode": "El fin de semana ",
            "expectedOutputPattern": "El\\s+fin\\s+de\\s+semana\\s+estuve\\s+en\\s+Barcelona\\s+y\\s+fui\\s+al\\s+museo\\.?",
            "hint": "Scrie El fin de semana estuve en Barcelona y fui al museo."
        },
        {
            "id": "es-b1-p29",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 29: Pretérito Imperfecto — Rutine & Descrieri în Trecut",
            "theory": """
<p><strong>Pretérito Imperfecto</strong> descrie cum erau lucrurile în trecut, circumstanțele, stările fizice/psihice și acțiunile habituale din copilărie („ce făceai de obicei”).</p>
<h4>1. Terminațiile Regulate</h4>
<ul>
  <li>Verbe în <code>-ar</code> (<em>hablar</em>):<br>
  <strong>-aba, -abas, -aba, -ábamos, -abais, -aban</strong><br>
  <em>hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban</em>.</li>
  <li>Verbe în <code>-er / -ir</code> (<em>comer, vivir</em>):<br>
  <strong>-ía, -ías, -ía, -íamos, -íais, -ían</strong> (toate poartă accent pe í!).</li>
</ul>
<h4>2. Cele Singure Trei Verbe Neregulate</h4>
<p>Spaniola este extrem de generoasă: <strong>doar 3 verbe sunt neregulate</strong> la imperfect:</p>
<ul>
  <li><code>ser &rarr; era, eras, era, éramos, erais, eran</code></li>
  <li><code>ir &rarr; iba, ibas, iba, íbamos, ibais, iban</code></li>
  <li><code>ver &rarr; veía, veías, veía, veíamos, veíais, veían</code></li>
</ul>
""",
            "glossary": [
                {"term": "Pretérito Imperfecto", "def": "Timpul imperfect spaniol pentru descrieri, rutine din trecut și acțiuni continue."},
                {"term": "-aba / -ía", "def": "Sufixele caracteristice ale celor două mari grupe de verbe la imperfect."},
                {"term": "Era, iba, veía", "def": "Singurele trei verbe neregulate din întreaga limbă spaniolă la pretérito imperfecto."},
                {"term": "De niño / Cuando era joven", "def": "Expresii tipice ce introduc o descriere sau o acțiune continuă la imperfect."}
            ],
            "matchingPairs": [
                {"left": "Cuando era niño", "right": "Când eram copil (ser)"},
                {"left": "Siempre iba al parque", "right": "Mergeam mereu în parc (ir)"},
                {"left": "Vivíamos en una casa grande", "right": "Locuiam într-o casă mare (vivir)"},
                {"left": "Hacía mucho sol", "right": "Era foarte însorit (descriere meteo)"}
            ],
            "quiz": {
                "question": "Care este forma de persoana I singular (Yo) la imperfect a verbului 'ir'?",
                "options": [
                    "iba (Yo iba al colegio)",
                    "fui",
                    "iría",
                    "voy"
                ],
                "correctIndex": 0,
                "explanation": "'Ir' are forma neregulată 'iba' la pretérito imperfecto: yo iba, tú ibas, él iba."
            },
            "task": "Scrie amintirea 'Cuando era niño, vivía en el campo y jugaba con mis amigos.'.",
            "starterCode": "Cuando era niño, ",
            "expectedOutputPattern": "Cuando\\s+era\\s+ni[ñn]o,\\s*viv[íi]a\\s+en\\s+el\\s+campo\\s+y\\s+jugaba\\s+con\\s+mis\\s+amigos\\.?",
            "hint": "Scrie Cuando era niño, vivía en el campo y jugaba con mis amigos."
        },
        {
            "id": "es-b1-p30",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 30: Imperfecto vs Indefinido — Contrastul Narativ Fundamental",
            "theory": """
<p>Diferențierea dintre <strong>Imperfecto</strong> și <strong>Indefinido</strong> este inima narațiunii în spaniolă.</p>
<h4>1. Rolurile în Povestire</h4>
<ul>
  <li><strong>Imperfecto (Decorul / Fundalul):</strong> Pictează peisajul, ora, starea vremii, ce făcea personajul cândva: <em>Hacía frío y yo caminaba por la calle...</em></li>
  <li><strong>Indefinido (Evenimentul Punctual):</strong> Acțiunea punctuală care intervine brusc și împinge acțiunea înainte: <em>...cuando de repente vi a mi amigo.</em></li>
</ul>
<h4>2. Schema de Aur</h4>
<p><code>[Acțiune în desfășurare: Imperfecto] + cuando + [Eveniment întrerupător: Indefinido]</code><br>
<em>Dormía plácidamente cuando sonó la alarma.</em></p>
""",
            "glossary": [
                {"term": "Escenario (Imperfecto)", "def": "Cadrul temporal, emoțional sau spațial în care se plasează o poveste."},
                {"term": "Acontecimiento (Indefinido)", "def": "Evenimentul specific, marcat în timp, care schimbă starea de lucruri."},
                {"term": "De repente / De pronto", "def": "'Deodată' — conector ce marchează trecerea bruscă spre un pretérito indefinido."},
                {"term": "Interrupción temporal", "def": "Întreruperea unei activități continue printr-un eveniment scurt și punctual."}
            ],
            "matchingPairs": [
                {"left": "Estudiaba tranquilamente", "right": "Învățam liniștit (acțiune continuă: imperfecto)"},
                {"left": "Sonó el teléfono", "right": "A sunat telefonul (întrerupere: indefinido)"},
                {"left": "Hacía mal tiempo", "right": "Era vreme urâtă (descriere de fundal)"},
                {"left": "Decidimos quedarnos en casa", "right": "Am decis să rămânem acasă (decizie punctuală)"}
            ],
            "quiz": {
                "question": "În fraza 'Mientras nosotros cenábamos, alguien ... a la puerta', ce formă a verbului 'llamar' este corectă?",
                "options": [
                    "llamó (Indefinido: acțiune punctuală care întrerupe cina)",
                    "llamaba (Imperfecto)",
                    "llama (Presente)",
                    "ha llamado"
                ],
                "correctIndex": 0,
                "explanation": "Bătaia la ușă survine punctual în timp ce cina era în desfășurare, cerând 'llamó' (indefinido)."
            },
            "task": "Scrie propoziția 'Estudiaba en mi habitación cuando llegó mi hermano.' (Învățam în camera mea când a sosit fratele meu).",
            "starterCode": "Estudiaba en mi habitación ",
            "expectedOutputPattern": "Estudiaba\\s+en\\s+mi\\s+habitaci[óo]n\\s+quand[o]\\s+lleg[óo]\\s+mi\\s+hermano\\.?",
            "hint": "Scrie Estudiaba en mi habitación cuando llegó mi hermano."
        },
        {
            "id": "es-b1-p31",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 31: Pronombres de Objeto Directo (me, te, lo, la, nos, os, los, las)",
            "theory": """
<p><strong>Pronombres de Objeto Directo (OD)</strong> înlocuiesc substantivul asupra căruia cade direct acțiunea verbului (răspunde la întrebarea <em>¿qué?</em> sau <em>¿a quién?</em>).</p>
<h4>1. Formele Pronumelor OD</h4>
<ul>
  <li><code>me / te / nos / os</code> (pentru persoane)</li>
  <li><code>lo</code> = îl / pe el / pe acesta (masculin singular)</li>
  <li><code>la</code> = o / pe ea / pe aceasta (feminin singular)</li>
  <li><code>los / las</code> = îi / le (plural masculin / feminin)</li>
</ul>
<h4>2. Regula „A personal”</h4>
<p>Când complementul direct este o ființă umană specifică, spaniola impune prepoziția <strong>a</strong>: <em>Veo <strong>a</strong> María &rarr; <strong>La</strong> veo.</em></p>
<h4>3. Poziția Pronumelui</h4>
<p>Stă <strong>în fața</strong> verbului conjugat (<em>Lo compro</em>) SAU se leagă <strong>la sfârșitul</strong> infinitivului / gerunziului (<em>Quiero comprar<strong>lo</strong></em> / <em>Estoy comprándo<strong>lo</strong></em>).</p>
""",
            "glossary": [
                {"term": "Objeto Directo (OD)", "def": "Complementul direct înlocuit prin lo, la, los, las în funcție de gen și număr."},
                {"term": "A personal", "def": "Prepoziția obligatorie în spaniolă înaintea unui complement direct ce reprezintă o persoană."},
                {"term": "Enclisis (Alipire)", "def": "Lipirea pronumelui la sfârșitul formelor de infinitiv, gerunziu și imperativ afirmativ."},
                {"term": "Poziție proclitică", "def": "Plasarea pronumelui nemijlocit înaintea verbului conjugat (ex: Lo tengo)."}
            ],
            "matchingPairs": [
                {"left": "¿Compras el periódico?", "right": "Sí, lo compro todos los días (el periódico &rarr; lo)"},
                {"left": "¿Conoces a Carmen?", "right": "Sí, la conozco muy bien (a Carmen &rarr; la)"},
                {"left": "¿Tienes las llaves?", "right": "Sí, las tengo en el bolsillo (las llaves &rarr; las)"},
                {"left": "¿Quieres ver la película?", "right": "Sí, quiero verla esta noche (enclisis: verla)"}
            ],
            "quiz": {
                "question": "Cum înlocuiești 'la carta' în fraza 'Escribo la carta para mi jefe' folosind un pronume OD?",
                "options": [
                    "La escribo para mi jefe.",
                    "Lo escribo para mi jefe.",
                    "Le escribo para mi jefe.",
                    "Escribo la para mi jefe."
                ],
                "correctIndex": 0,
                "explanation": "'La carta' este feminin singular, prin urmare se înlocuiește cu pronumele proclitic 'la': La escribo."
            },
            "task": "Scrie replica 'Compro el periódico por la mañana y lo leo en el metro.'.",
            "starterCode": "Compro el periódico ",
            "expectedOutputPattern": "Compro\\s+el\\s+peri[óo]dico\\s+por\\s+la\\s+ma[ñn]ana\\s+y\\s+lo\\s+leo\\s+en\\s+el\\s+metro\\.?",
            "hint": "Scrie Compro el periódico por la mañana y lo leo en el metro."
        },
        {
            "id": "es-b1-p32",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 35,
            "title": "Capitolul 32: Pronombres de Objeto Indirecto (me, te, le, nos, os, les) & Dublarea",
            "theory": """
<p><strong>Pronombres de Objeto Indirecto (OI)</strong> arată destinatarul sau beneficiarul acțiunii (răspunde la întrebarea <em>¿a quién?</em> &mdash; cui?).</p>
<h4>1. Formele Pronumelor OI</h4>
<ul>
  <li><code>me / te / nos / os</code></li>
  <li><code>le</code> = lui / ei / Dumneavoastră (singular)</li>
  <li><code>les</code> = lor / Dumneavoastră plural</li>
</ul>
<h4>2. Fenomenul Dublării Pronumelui (Reduplicación)</h4>
<p>În spaniolă, este o regulă standard ca pronumele indirect (<em>le/les</em>) să apară în propoziție <strong>chiar dacă destinatarul este numit explicit</strong>:</p>
<p><em><strong>Le</strong> doy el regalo <strong>a Juan</strong>.</em> (Îi dau cadoul lui Juan &mdash; 'le' este obligatoriu!).<br>
<em><strong>Les</strong> escribo un correo <strong>a mis padres</strong>.</em></p>
""",
            "glossary": [
                {"term": "Objeto Indirecto (OI)", "def": "Complementul indirect ce desemnează beneficiarul unei acțiuni (me, te, le, nos, os, les)."},
                {"term": "Reduplicación del pronombre", "def": "Dublarea obligatorie a complementului prin pronumele 'le' chiar dacă persoana este numită."},
                {"term": "Le (singular)", "def": "Formă invariabilă în gen: înseamnă atât 'lui' cât și 'ei' sau 'dumneavoastră'."},
                {"term": "Les (plural)", "def": "Formă de plural indirect ce înseamnă 'lor' sau 'dumneavoastră (plural)'."}
            ],
            "matchingPairs": [
                {"left": "Le hablo a Pedro", "right": "Îi vorbesc lui Pedro (dublare cu le)"},
                {"left": "Le compro flores a mi madre", "right": "Îi cumpăr flori mamei mele"},
                {"left": "Les explico la lección a los alumnos", "right": "Le explic lecția elevilor (les plural)"},
                {"left": "¿Me dices la verdad?", "right": "Îmi spui adevărul mie? (me)"}
            ],
            "quiz": {
                "question": "De ce fraza 'Doy el libro a María' sună nefiresc în spaniolă fără pronume?",
                "options": [
                    "Deoarece spaniola cere dublarea prin 'le': 'Le doy el libro a María'.",
                    "Deoarece María trebuie să fie subiectul.",
                    "Deoarece lipsește un adjectiv.",
                    "Deoarece verbul dar este reflexiv."
                ],
                "correctIndex": 0,
                "explanation": "Dublarea complementului indirect prin 'le' este norma gramaticală firească în spaniolă."
            },
            "task": "Scrie propoziția 'Le escribo una carta a mi abuela todos los domingos.' (Îi scriu o scrisoare bunicii mele în fiecare duminică).",
            "starterCode": "Le escribo una carta ",
            "expectedOutputPattern": "Le\\s+escribo\\s+una\\s+carta\\s+a\\s+mi\\s+abuela\\s+todos\\s+los\\s+domingos\\.?",
            "hint": "Scrie Le escribo una carta a mi abuela todos los domingos."
        },
        {
            "id": "es-b1-p33",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 40,
            "title": "Capitolul 33: Combinarea Pronumelor OD + OI & Transformarea „SE LO / SE LA”",
            "theory": """
<p>Când o frază conține atât un pronume de Obiect Indirect (cui?) cât și unul de Obiect Direct (ce?), se aplică două reguli fundamentale:</p>
<h4>1. Ordinea Canonica: INDIRECTUL PRIMUL!</h4>
<p><code>Subiect + [OI] + [OD] + Verb</code><br>
<em>¿Me dejas tu libro? &rarr; Sí, <strong>te lo</strong> dejo.</em> (te = OI, lo = OD).</p>
<h4>2. Regula Eufonică Supremă: LE / LES devine SE!</h4>
<p>În spaniolă este interzisă cacofonia a două pronume consecutive ce încep cu 'L' (*le lo*, *le la*, *les los*). Prin urmare, <strong>le / les se transformă întotdeauna în SE</strong>:</p>
<p><em>¿Das el regalo a María? &rarr; Sí, <strong>se lo</strong> doy.</em> (în loc de *le lo doy*!).</p>
""",
            "glossary": [
                {"term": "Regla SE LO", "def": "Transformarea eufonică a lui le/les în 'se' în fața pronumelor lo, la, los, las."},
                {"term": "Orden OI + OD", "def": "Indirectul precede întotdeauna directul în secvența pronominală spaniolă."},
                {"term": "Cacofonía evitada", "def": "Evitarea sunetului dublu l-l (*le lo) prin conversia în sunetul sibilant 'se'."},
                {"term": "Te lo juro", "def": "'Ți-o jur' — expresie populară ilustrând combinarea pronumelor te + lo."}
            ],
            "matchingPairs": [
                {"left": "¿Me prestas el coche?", "right": "Sí, te lo presto (te + lo)"},
                {"left": "¿Le das la carta a Juan?", "right": "Sí, se la doy (le &rarr; se + la)"},
                {"left": "¿Nos envías las fotos?", "right": "Sí, os las envío mañana (os + las)"},
                {"left": "¿Les dices el secreto?", "right": "No, no se lo digo (les &rarr; se + lo)"}
            ],
            "quiz": {
                "question": "Cum răspunzi afirmativ la '¿Le entregas el informe al director?' înlocuind ambele complemente?",
                "options": [
                    "Sí, se lo entrego. (le devine se în fața lui lo)",
                    "Sí, le lo entrego.",
                    "Sí, lo le entrego.",
                    "Sí, se la entrego."
                ],
                "correctIndex": 0,
                "explanation": "OI 'le' devine obligatoriu 'se' în fața OD masculin 'lo' (el informe): 'se lo entrego'."
            },
            "task": "Scrie dialogul '¿Tienes el informe? Sí, se lo envío a mi jefe ahora mismo.'.",
            "starterCode": "¿Tienes el informe? ",
            "expectedOutputPattern": "(?:[¿?]\\s*)?Tienes\\s+el\\s+informe\\?\\s*S[íi],\\s*se\\s+lo\\s+env[íi]o\\s+a\\s+mi\\s+jefe\\s+ahora\\s+mismo\\.?",
            "hint": "Scrie ¿Tienes el informe? Sí, se lo envío a mi jefe ahora mismo."
        },
        {
            "id": "es-b1-p34",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 40,
            "title": "Capitolul 34: Por vs Para — Distincția Supremă în Limba Spaniolă",
            "theory": """
<p>Confundarea prepozițiilor <strong>POR</strong> și <strong>PARA</strong> este cea mai răspândită eroare a celor ce învață spaniola. Iată distincția definitivă:</p>
<h4>1. Când folosim PARA (Săgeata &rarr; Destinație / Scop)</h4>
<ul>
  <li><strong>Scopul / Finalitatea:</strong> <em>Estudio español <strong>para</strong> trabajar.</em> (urmat de infinitiv).</li>
  <li><strong>Destinatarul:</strong> <em>Este regalo es <strong>para</strong> ti.</em></li>
  <li><strong>Termen limită / Dead-line:</strong> <em>La tarea es <strong>para</strong> el lunes.</em></li>
  <li><strong>Direcție spre un loc:</strong> <em>Salgo <strong>para</strong> Madrid.</em></li>
</ul>
<h4>2. Când folosim POR (Cauza / Mijlocul / Schimbul)</h4>
<ul>
  <li><strong>Motivul / Cauza:</strong> <em>Llegué tarde <strong>por</strong> el tráfico.</em> (din cauza).</li>
  <li><strong>Mijlocul de comunicare/transport:</strong> <em>Te llamo <strong>por</strong> teléfono; Enviado <strong>por</strong> correo.</em></li>
  <li><strong>Durata / Momentul zilei:</strong> <em>Estudio <strong>por</strong> la mañana; Viví allí <strong>por</strong> tres años.</em></li>
  <li><strong>Prețul / Schimbul:</strong> <em>Lo compré <strong>por</strong> 20 euros.</em></li>
</ul>
""",
            "glossary": [
                {"term": "PARA (Finalidad)", "def": "Privește înainte: scopul, destinatarul, termenul limită."},
                {"term": "POR (Causa / Medio)", "def": "Privește înapoi sau prin: cauza, mijlocul, durata, prețul de schimb."},
                {"term": "Por la mañana / tarde", "def": "Expresie fixă cu por pentru momentele zilei (dimineața, după-amiaza)."},
                {"term": "Para siempre", "def": "Locuțiune adverbială însemnând 'pentru totdeauna'."}
            ],
            "matchingPairs": [
                {"left": "Trabajo para ganar dinero", "right": "Scop / Finalitate (para)"},
                {"left": "Gracias por tu ayuda", "right": "Cauză / Recunoștință (por)"},
                {"left": "El informe es para mañana", "right": "Termen limită viitor (para)"},
                {"left": "Lo compré por 50 euros", "right": "Preț de schimb comercial (por)"}
            ],
            "quiz": {
                "question": "Ce prepoziție folosești în fraza: 'Viajo a España ... mejorar mi pronunciación'?",
                "options": [
                    "para (exprimă scopul/finalitatea acțiunii)",
                    "por",
                    "de",
                    "con"
                ],
                "correctIndex": 0,
                "explanation": "'Para' urmat de infinitiv (mejorar) indică obiectivul sau scopul călătoriei."
            },
            "task": "Scrie propoziția 'Estudio español para viajar y trabajo por la mañana.'.",
            "starterCode": "Estudio español ",
            "expectedOutputPattern": "Estudio\\s+espa[ñn]ol\\s+para\\s+viajar\\s+y\\s+trabajo\\s+por\\s+la\\s+ma[ñn]ana\\.?",
            "hint": "Scrie Estudio español para viajar y trabajo por la mañana."
        },
        {
            "id": "es-b1-p35",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 40,
            "title": "Capitolul 35: El Futuro Simple & Forme Neregulate Esențiale",
            "theory": """
<p><strong>Futuro Simple</strong> (sau <em>Futuro Imperfecto</em>) este timpul proiectării viitoare și al predicțiilor.</p>
<h4>1. Formare Regulată Extrem de Simplă</h4>
<p>Se ia <strong>infinitivul întreg</strong> al verbului și se adaugă un set unic de terminații pentru TOATE cele 3 grupe:</p>
<p><strong>-é, -ás, -á, -emos, -éis, -án</strong></p>
<p><em>hablaré, comeré, viviré</em> (toate poartă accent grafic cu excepția persoanei I plural <em>-emos</em>!).</p>
<h4>2. Rădăcini Neregulate Majore</h4>
<ul>
  <li><code>tener &rarr; tendr-</code> (tendré, tendrás...)</li>
  <li><code>poner &rarr; pondr-</code> (pondré) / <code>salir &rarr; saldr-</code> (saldré)</li>
  <li><code>hacer &rarr; har-</code> (haré, harás, hará...)</li>
  <li><code>decir &rarr; dir-</code> (diré, dirás, dirá...)</li>
  <li><code>poder &rarr; podr-</code> (podré) / <code>saber &rarr; sabr-</code> (sabré)</li>
</ul>
""",
            "glossary": [
                {"term": "Futuro Simple", "def": "Timpul viitor format din infinitivul complet + terminațiile -é, -ás, -á, -emos, -éis, -án."},
                {"term": "Rădăcini cu -dr-", "def": "Tendr-, pondr-, saldr-, vendr- introduc un d eufonic în rădăcina de viitor."},
                {"term": "Haré / Diré", "def": "Formele contrase de viitor ale verbelor neregulate hacer și decir."},
                {"term": "Accente pe terminație", "def": "5 din cele 6 forme de viitor simplu poartă obligatoriu accent grafic."}
            ],
            "matchingPairs": [
                {"left": "Mañana hablaré con él", "right": "Mâine voi vorbi cu el (hablar)"},
                {"left": "Tendremos tiempo suficiente", "right": "Vom avea suficient timp (tener)"},
                {"left": "Haré todo lo posible", "right": "Voi face tot ce este posibil (hacer)"},
                {"left": "Te diré la verdad", "right": "Îți voi spune adevărul (decir)"}
            ],
            "quiz": {
                "question": "Care este forma de viitor simplu pentru 'Yo' a verbului 'tener'?",
                "options": [
                    "tendré (rădăcina neregulată tendr- + -é)",
                    "teneré",
                    "tuvé",
                    "tengo"
                ],
                "correctIndex": 0,
                "explanation": "'Tener' adoptă rădăcina neregulată 'tendr-', devenind la persoana I 'tendré'."
            },
            "task": "Scrie propoziția 'Mañana tendré una reunión importante y haré todo lo posible.'.",
            "starterCode": "Mañana tendré ",
            "expectedOutputPattern": "Ma[ñn]ana\\s+tendr[ée]\\s+una\\s+reuni[óo]n\\s+importante\\s+y\\s+har[ée]\\s+todo\\s+lo\\s+posible\\.?",
            "hint": "Scrie Mañana tendré una reunión importante y haré todo lo posible."
        },
        {
            "id": "es-b1-p36",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 40,
            "title": "Capitolul 36: El Condicional Simple — Politețe, Dorințe & Recomandări",
            "theory": """
<p><strong>El Condicional Simple</strong> este modul curtoaziei elegante, al ipotezelor și al sfaturilor amicale.</p>
<h4>1. Rețeta de Formare</h4>
<p>Se ia <strong>infinitivul întreg</strong> (sau aceeași rădăcină neregulată de la viitor!) și se adaugă terminațiile de imperfect de la <em>-er/-ir</em>:</p>
<p><strong>-ía, -ías, -ía, -íamos, -íais, -ían</strong></p>
<p><em>hablaría, comería, viviría</em>; neregulate: <em>tendría, haría, podría, sabría</em>.</p>
<h4>2. Utilizări Esențiale</h4>
<ul>
  <li>Politețe / Cereri respectuoase: <em>¿<strong>Podría</strong> traerme la cuenta?</em> (Ați putea să-mi aduceți nota?)</li>
  <li>Dorință: <em>Me <strong>gustaría</strong> aprender más idiomas.</em></li>
  <li>Sfat / Recomandare: <em><strong>Deberías</strong> descansar un poco.</em></li>
</ul>
""",
            "glossary": [
                {"term": "Condicional Simple", "def": "Modul folosit pentru cereri politicoase, sfaturi și dorințe ipotetice."},
                {"term": "Me gustaría...", "def": "Formula universală spaniolă de curtoazie ('Mi-ar plăcea să...')."},
                {"term": "¿Podría...?", "def": "Întrebare respectuoasă de politețe adresată unei persoane (Usted)."},
                {"term": "Deberías...", "def": "Formularea unui sfat prietenesc echivalent cu 'ar trebui să...'."}
            ],
            "matchingPairs": [
                {"left": "Me gustaría un café", "right": "Mi-ar plăcea o cafea (politețe)"},
                {"left": "¿Podría ayudarme, por favor?", "right": "Ați putea să mă ajutați? (cerere respectuoasă)"},
                {"left": "Deberías dormir más", "right": "Ar trebui să dormi mai mult (sfat)"},
                {"left": "Yo en tu lugar no lo haría", "right": "Eu în locul tău nu aș face-o (ipoteză)"}
            ],
            "quiz": {
                "question": "Cum soliciți politicos nota de plată într-un restaurant din Madrid?",
                "options": [
                    "¿Podría traerme la cuenta, por favor?",
                    "¡Dame la cuenta ya!",
                    "Quiero cuenta ahora.",
                    "Trae la cuenta."
                ],
                "correctIndex": 0,
                "explanation": "'¿Podría traerme...?' la condițional este formula etalon de politețe la restaurant."
            },
            "task": "Scrie cererea politicoasă '¿Podría traerme la cuenta y un vaso de agua, por favor?'.",
            "starterCode": "¿Podría traerme ",
            "expectedOutputPattern": "(?:[¿?]\\s*)?Podr[íi]a\\s+traerme\\s+la\\s+cuenta\\s+y\\s+un\\s+vaso\\s+de\\s+agua,\\s*por\\s+favor\\.?",
            "hint": "Scrie ¿Podría traerme la cuenta y un vaso de agua, por favor?"
        },
        {
            "id": "es-b1-p37",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m2,
            "xp": 45,
            "title": "Capitolul 37: Conversație Intermediară: La Medic, Farmacie & Călătorii",
            "theory": """
<p>Să unim întregul bagaj gramatical al Modulului B1–B2 într-o simulare reală la cabinetul medical și la farmacie în Spania.</p>
<h4>1. Replicile Pacientului</h4>
<ul>
  <li><em>Buenos días, doctor. No me encuentro bien desde hace dos días.</em></li>
  <li><em>Tengo fiebre alta, me duele la garganta y tengo tos seca.</em></li>
  <li><em>¿Necesito guardar reposo?</em> (Trebuie să stau la pat?)</li>
</ul>
<h4>2. Replicile Medicului & Farmacistului</h4>
<ul>
  <li><em>Vamos a ver... Abra la boca. Tiene una infección en la garganta.</em></li>
  <li><em>Le voy a recetar un antibiótico. Tome una pastilla cada ocho horas después de las comidas.</em></li>
</ul>
""",
            "glossary": [
                {"term": "la receta médica", "def": "Prescripția / rețeta emisă de medic pentru eliberarea medicamentelor."},
                {"term": "una pastilla", "def": "O pastilă sau comprimat."},
                {"term": "guardar reposo", "def": "A se odihni la pat conform indicațiilor medicale."},
                {"term": "cada ocho horas", "def": "La fiecare opt ore (ritmul de administrare a tratamentului)."}
            ],
            "matchingPairs": [
                {"left": "No me encuentro bien", "right": "Nu mă simt bine"},
                {"left": "Tengo fiebre alta", "right": "Am febră mare"},
                {"left": "Una pastilla cada ocho horas", "right": "O pastilă la fiecare opt ore"},
                {"left": "Con receta médica", "right": "Cu prescripție / rețetă medicală"}
            ],
            "quiz": {
                "question": "Cum îi spui farmacistului că ai febră mare și ai nevoie de acest medicament cu rețetă?",
                "options": [
                    "Tengo fiebre alta y necesito comprar este medicamento con receta.",
                    "Soy fiebre y quiero pastilla.",
                    "Tengo calor y medicamento papel.",
                    "Fiebre está alta comprar."
                ],
                "correctIndex": 0,
                "explanation": "Expresia corectă este 'Tengo fiebre alta' și 'con receta médica'."
            },
            "task": "Scrie replica 'Tengo fiebre alta y necesito comprar este medicamento con receta.'.",
            "starterCode": "Tengo fiebre alta ",
            "expectedOutputPattern": "Tengo\\s+fiebre\\s+alta\\s+y\\s+necesito\\s+comprar\\s+este\\s+medicamento\\s+con\\s+receta\\.?",
            "hint": "Scrie Tengo fiebre alta y necesito comprar este medicamento con receta."
        },

        # --- MODULUL 3: C1-C2 (8 capitole) ---
        {
            "id": "es-c1-p38",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m3,
            "xp": 50,
            "title": "Capitolul 38: El Subjuntivo Presente: Formare & Declanșatori W-E-I-R-D-O",
            "theory": """
<p><strong>Subjuntivo</strong> nu descrie fapte reale obiective, ci lumea dorințelor, a ipotezelor, emoțiilor și posibilităților.</p>
<h4>1. Rețeta Universală a Schimbului de Vocale</h4>
<p>Se pornește de la rădăcina formei 'yo' de la prezentul de indicativ și se inversează vocala caracteristică:</p>
<ul>
  <li>Verbe în <code>-ar</code> primesc terminațiile în <strong>-e</strong>:<br>
  <strong>-e, -es, -e, -emos, -éis, -en</strong> (<em>hable, hables, hable, hablemos...</em>).</li>
  <li>Verbe în <code>-er / -ir</code> primesc terminațiile în <strong>-a</strong>:<br>
  <strong>-a, -as, -a, -amos, -áis, -an</strong> (<em>coma, vivas, tenga, haga...</em>).</li>
</ul>
<h4>2. Acronimul Declanșatorilor W-E-I-R-D-O</h4>
<p><strong>W</strong>ishes (Quiero que...), <strong>E</strong>motions (Me alegra que...), <strong>I</strong>mpersonal (Es necesario que...), <strong>R</strong>ecommendations (Te aconsejo que...), <strong>D</strong>oubt (Dudo que...), <strong>O</strong>jalá (Măcar de...!).</p>
""",
            "glossary": [
                {"term": "El Subjuntivo", "def": "Modul gramatical al subiectivității, dorinței, îndoielii și emoției."},
                {"term": "Schimbul de vocale", "def": "-ar trece la setul -e; -er și -ir trec la setul -a."},
                {"term": "Quiero que...", "def": "Declanșator clasic de voință ce cere întotdeauna modul subjuntivo în secundară."},
                {"term": "Ojalá", "def": "Interjecție de origine arabă ce introduce obligatoriu modul conjunctiv ('De ar da Dumnezeu!')."}
            ],
            "matchingPairs": [
                {"left": "Quiero que vengas", "right": "Vreau să vii (voință: venir &rarr; vengas)"},
                {"left": "Es importante que estudies", "right": "Expresie impersonală (estudiar &rarr; estudies)"},
                {"left": "Me alegro de que estés aquí", "right": "Emoție (estar &rarr; estés)"},
                {"left": "¡Ojalá haga buen tiempo!", "right": "Dorință intensă (hacer &rarr; haga)"}
            ],
            "quiz": {
                "question": "Care este forma corectă de subjuntivo presente a verbului 'tener' pentru 'tú'?",
                "options": [
                    "tengas (din rădăcina 'tengo' + terminația -as)",
                    "tienes",
                    "tengás",
                    "tenas"
                ],
                "correctIndex": 0,
                "explanation": "Pornind de la 'yo tengo', înlocuim 'o' cu terminația '-as' a grupei -er: tengas."
            },
            "task": "Scrie urarea 'Quiero que aprendas español y que tengas mucho éxito.'.",
            "starterCode": "Quiero que aprendas ",
            "expectedOutputPattern": "Quiero\\s+que\\s+aprendas\\s+espa[ñn]ol\\s+y\\s+que\\s+tengas\\s+mucho\\s+[ée]xito\\.?",
            "hint": "Scrie Quiero que aprendas español y que tengas mucho éxito."
        },
        {
            "id": "es-c1-p39",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m3,
            "xp": 50,
            "title": "Capitolul 39: Subjuntivo: Opinie, Certitudine vs Îndoială (Creo que vs No creo que)",
            "theory": """
<p>Stăpânirea absolută a conjunctivului spaniol la nivel C1 impune gestionarea nuanțelor epistemice dintre certitudine și negație.</p>
<h4>1. Verbe de Gândire & Opinie (Creer, Pensar, Opinar)</h4>
<ul>
  <li><strong>Afirmativ (Certitudinea Vorbitorului) &rarr; INDICATIV:</strong><br>
  <em>Creo que él <strong>dice</strong> la verdad.</em> (Sunt convins)</li>
  <li><strong>Negativ (Îndoială / Dezacord) &rarr; SUBJUNTIVO:</strong><br>
  <em>No creo que él <strong>diga</strong> la verdad.</em> (Mă îndoiesc)</li>
</ul>
<h4>2. Dudar vs No dudar</h4>
<p><em>Dudo que <strong>sea</strong> verdad</em> (Subjuntivo) vs <em>No dudo que <strong>es</strong> verdad</em> (Indicativo &mdash; certitudine totală).</p>
""",
            "glossary": [
                {"term": "Creo que + indicativo", "def": "Formularea afirmativă a opiniei exprimă certitudine și cere modul indicativ."},
                {"term": "No creo que + subjuntivo", "def": "Negația opiniei contestă realitatea faptei și impune modul subjuntivo."},
                {"term": "Dudar que", "def": "Verb de dubiu ce impune obligatoriu modul conjunctiv (dudo que sea)."},
                {"term": "Sea (subjuntivo de ser)", "def": "Forma neregulată de conjunctiv a verbului ser (no creo que sea así)."}
            ],
            "matchingPairs": [
                {"left": "Pienso que es verdad", "right": "Indicativ (convingere afirmativă)"},
                {"left": "No pienso que sea verdad", "right": "Subjuntivo (dezacord la forma negativă)"},
                {"left": "Es seguro que vendrán", "right": "Indicativ (siguranță obiectivă)"},
                {"left": "No es seguro que vengan", "right": "Subjuntivo (incertitudine)"}
            ],
            "quiz": {
                "question": "Ce mod și formă verbală se folosește în: 'No creo que Juan ... la respuesta correcta' pentru verbul 'saber'?",
                "options": [
                    "sepa (Subjuntivo presente de la saber cerut de 'No creo que')",
                    "sabe (Indicativo)",
                    "sabrá (Futuro)",
                    "supo"
                ],
                "correctIndex": 0,
                "explanation": "'No creo que' impune în mod obligatoriu modul conjunctiv: forma neregulată este 'sepa'."
            },
            "task": "Scrie fraza 'No creo que sea la mejor solución para este problema.'.",
            "starterCode": "No creo que sea ",
            "expectedOutputPattern": "No\\s+creo\\s+que\\s+sea\\s+la\\s+mejor\\s+soluci[óo]n\\s+para\\s+este\\s+problema\\.?",
            "hint": "Scrie No creo que sea la mejor solución para este problema."
        },
        {
            "id": "es-c1-p40",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m3,
            "xp": 50,
            "title": "Capitolul 40: Pretérito Imperfecto de Subjuntivo (-ra / -se)",
            "theory": """
<p><strong>Imperfecto de Subjuntivo</strong> este timpul ipotezelor ireale și al concordanței timpurilor în trecut.</p>
<h4>1. Rețeta Universală de Derivare</h4>
<p>Se pornește de la <strong>persoana a 3-a plural a pretérito indefinido</strong> (<em>ellos hablaron, comieron, tuvieron, fueron</em>), se taie <code>-ron</code> și se adaugă terminațiile:</p>
<p><strong>-ra, -ras, -ra, -ramos, -rais, -ran</strong> (sau varianta literară în <em>-se</em>).</p>
<h4>2. Forme Neregulate Vitale</h4>
<ul>
  <li><code>tener &rarr; ellos tuvieron &rarr; tuviera, tuvieras, tuviera...</code></li>
  <li><code>ser / ir &rarr; ellos fueron &rarr; fuera, fueras, fuera...</code></li>
  <li><code>hacer &rarr; ellos hicieron &rarr; hiciera, hicieras, hiciera...</code></li>
</ul>
<p>Atenție: persoana 'nosotros' primește întotdeauna accent grafic: <em>tuviéramos, fuéramos, habláramos</em>.</p>
""",
            "glossary": [
                {"term": "Imperfecto de Subjuntivo", "def": "Conjunctivul trecut spaniol derivat direct din persoana a 3-a plural a pretérito indefinido."},
                {"term": "Terminații în -ra și -se", "def": "Formele în -ra (tuviera) și -se (tuviese) sunt 100% echivalente și interschimbabile."},
                {"term": "Tuviéramos", "def": "Persoana nosotros poartă accent pe vocala antepenultimei silabe."},
                {"term": "Si tuviera tiempo...", "def": "Formula canonică de debut a frazelor ipotetice ireale."}
            ],
            "matchingPairs": [
                {"left": "Si tuviera dinero", "right": "Dacă aș avea bani (tener &rarr; tuviera)"},
                {"left": "Si fuera tú", "right": "Dacă aș fi în locul tău (ser &rarr; fuera)"},
                {"left": "Ojalá supiera la verdad", "right": "Măcar de aș ști adevărul (saber &rarr; supiera)"},
                {"left": "Me pidió que viniera", "right": "Mi-a cerut să vin (venir &rarr; viniera)"}
            ],
            "quiz": {
                "question": "De la ce formă verbală se obține imperfecto de subjuntivo al verbului 'estar'?",
                "options": [
                    "De la 'estuvieron' (indefinido ellos) &rarr; estuviera",
                    "De la infinitivul estar",
                    "De la prezentul están",
                    "De la imperfectul estaban"
                ],
                "correctIndex": 0,
                "explanation": "Regula matematică este: persoana a 3-a plural indefinido (estuvieron) minus -ron plus -ra &rarr; estuviera."
            },
            "task": "Scrie fraza ipotetică 'Si tuviera más tiempo libre, estudiaría español todos los días.'.",
            "starterCode": "Si tuviera más tiempo libre, ",
            "expectedOutputPattern": "Si\\s+tuviera\\s+m[áa]s\\s+tiempo\\s+libre,\\s*estudiar[íi]a\\s+espa[ñn]ol\\s+todos\\s+los\\s+d[íi]as\\.?",
            "hint": "Scrie Si tuviera más tiempo libre, estudiaría español todos los días."
        },
        {
            "id": "es-c1-p41",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m3,
            "xp": 55,
            "title": "Capitolul 41: Fraze Ipotetice cu „SI” (Reale, Posibile & Ireale)",
            "theory": """
<p>La fel ca în franceză, în spaniolă regula de aur este: <strong>După „SI” nu se pune NICIODATĂ viitor sau condițional!</strong></p>
<h4>1. Cele 3 Structuri Condiționale Canonice</h4>
<ol>
  <li><strong>Condiție Reală / Probabilă:</strong><br>
  <code>Si + Presente de indicativo &rarr; Futuro simple / Presente</code><br>
  <em>Si tengo tiempo, te llamaré.</em> (Dacă am timp, te voi suna).</li>
  <li><strong>Condiție Ireală în Prezent (Improbabilă sau Imaginară):</strong><br>
  <code>Si + Imperfecto de subjuntivo &rarr; Condicional simple</code><br>
  <em>Si ganara la lotería, viajaría por todo el mundo.</em></li>
  <li><strong>Condiție Ireală în Trecut (Imposibilă / Regret Definitiv):</strong><br>
  <code>Si + Pluscuamperfecto de subjuntivo &rarr; Condicional compuesto</code><br>
  <em>Si hubiera sabido la verdad, habría actuado diferente.</em></li>
</ol>
""",
            "glossary": [
                {"term": "Oraciones condicionales", "def": "Fraze ipotetice introduse de conjuncția 'si' ce reglementează corelația timpurilor."},
                {"term": "Si + subjuntivo imperfecto", "def": "Combinația specifică pentru a exprima o ipoteză imaginară în prezent."},
                {"term": "Condicional en la principal", "def": "Propoziția principală conține consecința la modul condițional (viajaría)."},
                {"term": "Interdicția viitorului după SI", "def": "Nu se poate spune *Si tendré*, ci doar 'Si tengo'."}
            ],
            "matchingPairs": [
                {"left": "Si llueve mañana", "right": "no iremos a la playa (Si + presente &rarr; futuro)"},
                {"left": "Si supiera bailar", "right": "iría a la fiesta (Si + subjuntivo &rarr; condicional)"},
                {"left": "Si puedes", "right": "ven a verme esta tarde (Si + presente &rarr; imperativo)"},
                {"left": "Si fuera rico", "right": "compraría un barco (ireal actual)"}
            ],
            "quiz": {
                "question": "Care este continuarea gramatical corectă a frazei 'Si tuviera dinero, ... un coche nuevo'?",
                "options": [
                    "compraría (Condicional simple corelat cu imperfecto de subjuntivo)",
                    "compraré",
                    "compro",
                    "comprara"
                ],
                "correctIndex": 0,
                "explanation": "După 'Si + imperfecto de subjuntivo' (tuviera), concluzia ipotezei cere condiționalul: compraría."
            },
            "task": "Scrie replica 'Si supiera la respuesta correcta, te la diría ahora mismo.'.",
            "starterCode": "Si supiera la respuesta correcta, ",
            "expectedOutputPattern": "Si\\s+supiera\\s+la\\s+respuesta\\s+correcta,\\s*te\\s+la\\s+dir[íi]a\\s+ahora\\s+mismo\\.?",
            "hint": "Scrie Si supiera la respuesta correcta, te la diría ahora mismo."
        },
        {
            "id": "es-c1-p42",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m3,
            "xp": 55,
            "title": "Capitolul 42: Modul Imperativ: Porunci Afirmative vs Interdicții Negative",
            "theory": """
<p>Modul imperativ în spaniolă prezintă o asimetrie fascinantă între ordinele afirmative și interdicțiile negative.</p>
<h4>1. Imperativul Afirmativ (Porunci)</h4>
<ul>
  <li><code>Tú</code> = forma persoanei a III-a de la prezentul de indicativ: <em>¡Habla! ¡Come! ¡Escribe!</em> (Neregulate: <em>ven, di, sal, haz, ten, ve, pon, sé</em>).</li>
  <li><code>Vosotros</code> = se înlocuiește <code>-r</code> de la infinitiv cu <code>-d</code>: <em>¡Hablad! ¡Comed! ¡Venid!</em></li>
  <li><code>Usted / Ustedes</code> = folosesc formele de <strong>SUBJUNTIVO</strong>: <em>¡Hable usted! ¡Coman ustedes!</em></li>
</ul>
<h4>2. Imperativul Negativ (Interdicții: „Nu face asta!”)</h4>
<p>La forma negativă, <strong>TOATE PERSOANELE folosesc exclusiv modul SUBJUNTIVO</strong>:</p>
<p><em>¡No hables! ¡No comas! ¡No vengas! ¡No tengáis miedo! ¡No fumen aquí!</em></p>
""",
            "glossary": [
                {"term": "Imperativo afirmativo", "def": "Forme dedicate pentru comenzi pozitive (¡Ven aquí!)."},
                {"term": "Imperativo negativo", "def": "Interdicții formate exclusiv cu 'No' + forme de Subjuntivo presente."},
                {"term": "Ven, di, sal, haz...", "def": "Cele opt verbe neregulate monosilabice de imperativ afirmativ pentru tú."},
                {"term": "Enclisis la imperativ", "def": "La afirmativ pronumele se lipesc la final: ¡Dímelo! (Spune-mi-o!)."}
            ],
            "matchingPairs": [
                {"left": "¡Haz los deberes!", "right": "Fă-ți temele! (hacer afirmativ)"},
                {"left": "¡No hagas ruido!", "right": "Nu face zgomot! (subjuntivo negativ)"},
                {"left": "¡Dime la verdad!", "right": "Spune-mi adevărul! (enclisis: di + me)"},
                {"left": "¡No me digas mentiras!", "right": "Nu-mi spune minciuni! (negativ proclitic)"}
            ],
            "quiz": {
                "question": "Cum formulezi interdicția 'Nu vorbi atât de tare!' pentru persoana 'tú'?",
                "options": [
                    "¡No hables tan alto! (subjuntivo presente obligatoriu la negație)",
                    "¡No habla tan alto!",
                    "¡No hablar tan alto!",
                    "¡No hablas tan alto!"
                ],
                "correctIndex": 0,
                "explanation": "Imperativul negativ cere obligatoriu forma de subjuntivo presente: 'No hables'."
            },
            "task": "Scrie îndemnul '¡Dime la verdad y no tengas miedo de decir lo que piensas!'.",
            "starterCode": "¡Dime la verdad ",
            "expectedOutputPattern": "(?:[¡!]\\s*)?Dime\\s+la\\s+verdad\\s+y\\s+no\\s+tengas\\s+miedo\\s+de\\s+decir\\s+lo\\s+que\\s+piensas[!\\.]?",
            "hint": "Scrie ¡Dime la verdad y no tengas miedo de decir lo que piensas!"
        },
        {
            "id": "es-c1-p43",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m3,
            "xp": 55,
            "title": "Capitolul 43: Vocea Pasivă & Pasiva Reflejada cu „SE”",
            "theory": """
<p>Spre deosebire de engleză sau franceză, spaniola vorbită și scrisă evită pasiva analitică lungă (<em>fue construido por...</em>), preferând formularea dinamică numită <strong>Pasiva Reflejada cu SE</strong>.</p>
<h4>1. Pasiva Reflejada (SE + Verb la pers. a III-a)</h4>
<p>Verbul se acordă obligatoriu la singular sau plural cu obiectul pacient:</p>
<ul>
  <li>Singular: <em><strong>Se vende</strong> piso.</em> (Se vinde apartament).</li>
  <li>Plural: <em><strong>Se venden</strong> pisos.</em> (Se vând apartamente).</li>
  <li><em>En esta empresa <strong>se valoran</strong> las ideas creativas.</em></li>
</ul>
<h4>2. Pasiva Impersonală</h4>
<p>Când nu există un obiect determinat: <em><strong>Se vive</strong> bien aquí</em> (Se trăiește bine aici); <em><strong>Se trabaja</strong> mucho</em>.</p>
""",
            "glossary": [
                {"term": "Pasiva Reflejada", "def": "Construcție pasivă specifică spaniolă formată din particula 'se' + verb acordat la persoana a III-a."},
                {"term": "Se venden pisos", "def": "Exemplul clasic de acord plural la pasiva reflejada când substantivul este la plural."},
                {"term": "Pasiva analítica", "def": "Forma ser + participiu (El libro fue escrito por Cervantes) rezervată stilului jurnalistic solemn."},
                {"term": "Se impersonal", "def": "Structură fără subiect definit ce exprimă o generalitate valabilă pentru oricine."}
            ],
            "matchingPairs": [
                {"left": "Se habla español aquí", "right": "Aici se vorbește spaniolă (singular)"},
                {"left": "Se buscan programadores", "right": "Se caută programatori (plural: buscan)"},
                {"left": "Se alquila habitación", "right": "Se închiriază cameră (singular)"},
                {"left": "Se alquilan habitaciones", "right": "Se închiriază camere (plural: alquilan)"}
            ],
            "quiz": {
                "question": "Care este forma corectă pentru un anunț imobiliar care anunță vânzarea a trei case?",
                "options": [
                    "Se venden tres casas. (verbul se acordă la plural cu 'casas')",
                    "Se vende tres casas.",
                    "Es vendido tres casas.",
                    "Se vendieron tres casas ayer solo."
                ],
                "correctIndex": 0,
                "explanation": "La pasiva reflejada, verbul trebuie să se acorde la plural cu subiectul pacient: 'Se venden tres casas'."
            },
            "task": "Scrie descrierea 'En esta empresa se habla español y se valoran las ideas creativas.'.",
            "starterCode": "En esta empresa ",
            "expectedOutputPattern": "En\\s+esta\\s+empresa\\s+se\\s+habla\\s+espa[ñn]ol\\s+y\\s+se\\s+valoran\\s+las\\s+ideas\\s+creativas\\.?",
            "hint": "Scrie En esta empresa se habla español y se valoran las ideas creativas."
        },
        {
            "id": "es-c1-p44",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m3,
            "xp": 60,
            "title": "Capitolul 44: Expresii Idiomatice Autentice din Spania & Metafore Colocviale",
            "theory": """
<p>Stăpânirea registrului idiomatic (C1/C2) transformă vorbitorul într-un cunoscător autentic al culturii hispanice.</p>
<h4>1. Metafore Clinice & Expresii Esențiale</h4>
<ul>
  <li><code>Tomar el pelo a alguien</code> &mdash; a lua pe cineva peste picior / a glumi.</li>
  <li><code>Costar un ojo de la cara</code> &mdash; a fi extrem de scump / a costa o avere.</li>
  <li><code>Estar como una cabra</code> &mdash; a fi complet nebun / excentric.</li>
  <li><code>Ponerse las pilas</code> &mdash; a se pune serios pe treabă / a se mobiliza energic.</li>
  <li><code>Dar en el clavo</code> &mdash; a nimeri la fix / a găsi soluția exactă.</li>
  <li><code>Tirar la toalla</code> &mdash; a renunța, a se da bătut.</li>
</ul>
""",
            "glossary": [
                {"term": "Tomar el pelo", "def": "A tachina sau a glumi pe seama cuiva ('Nu mă lua peste picior!')."},
                {"term": "Costar un ojo de la cara", "def": "Expresie idiomatică pentru ceva extrem de scump."},
                {"term": "Ponerse las pilas", "def": "'A-și pune bateriile' — a deveni activ și concentrat pe un obiectiv."},
                {"term": "Dar en el clavo", "def": "A nimeri cuiul cu ciocanul &mdash; a spune exact lucrul potrivit."}
            ],
            "matchingPairs": [
                {"left": "No me tomes el pelo", "right": "Nu mă lua peste picior"},
                {"left": "Cuesta un ojo de la cara", "right": "Costă o avere"},
                {"left": "Hay que ponerse las pilas", "right": "Trebuie să ne punem serios pe treabă"},
                {"left": "Has dado en el clavo", "right": "Ai nimerit la fix"}
            ],
            "quiz": {
                "question": "Ce vrea să spună un coleg din Madrid când zice: '¡Tenemos que ponernos las pilas!'?",
                "options": [
                    "Trebuie să ne mobilizăm serios și să muncim cu energie.",
                    "Trebuie să cumpărăm baterii pentru telecomandă.",
                    "Trebuie să plecăm acasă mai devreme.",
                    "Trebuie să mergem la un concert rock."
                ],
                "correctIndex": 0,
                "explanation": "'Ponerse las pilas' este o expresie extrem de uzuală ce înseamnă a se mobiliza și a munci temeinic."
            },
            "task": "Scrie îndemnul 'Tenemos que ponernos las pilas para terminar el proyecto a tiempo.'.",
            "starterCode": "Tenemos que ponernos ",
            "expectedOutputPattern": "Tenemos\\s+que\\s+ponernos\\s+las\\s+pilas\\s+para\\s+terminar\\s+el\\s+proyecto\\s+a\\s+tiempo\\.?",
            "hint": "Scrie Tenemos que ponernos las pilas para terminar el proyecto a tiempo."
        },
        {
            "id": "es-c1-p45",
            "track": "Limba Spaniolă",
            "division": "Limbi Străine & Comunicare",
            "icon": "🥘",
            "level": m3,
            "xp": 65,
            "title": "Capitolul 45: Spaniolă de Afaceri, Registru Formal & Redactare de Emailuri Oficiale",
            "theory": """
<p>Măiestria supremă (C2) în spaniolă constă în capacitatea de a redacta documente corporative, oferte comerciale și scrisori oficiale de cel mai înalt nivel.</p>
<h4>1. Formule de Adresare & Deschidere</h4>
<p><em>« Estimado/a Señor/a [Apellido]: »</em><br>
<em>« Por medio de la presente, me pongo en contacto con usted con el fin de presentarle nuestra propuesta... »</em></p>
<h4>2. Formule de Încheiere de Protocol</h4>
<p><em>« Agradeciendo de antemano su atención a la presente, le saluda atentamente, »</em><br>
<em>« Quedo a su entera disposición para cualquier aclaración que estime oportuna. »</em></p>
""",
            "glossary": [
                {"term": "Estimado/a Señor/a", "def": "Formula standard formală de deschidere a unei corespondențe oficiale în lumea hispanică."},
                {"term": "Agradeciendo de antemano", "def": "'Mulțumindu-vă anticipat...' — formulă uzuală de respect profesional."},
                {"term": "Le saluda atentamente", "def": "'Vă salută cu respect' — încheierea standard a scrisorilor de afaceri."},
                {"term": "A su entera disposición", "def": "Expresie diplomatică ce confirmă disponibilitatea pentru clarificări."}
            ],
            "matchingPairs": [
                {"left": "Estimado Señor Director", "right": "Stimate Domnule Director (antet formal)"},
                {"left": "Por medio de la presente", "right": "Prin prezenta (scrisoare oficială)"},
                {"left": "Le saluda atentamente", "right": "Vă salută cu stimă (încheiere protocolară)"},
                {"left": "Quedo a su disposición", "right": "Rămân la dispoziția dumneavoastră"}
            ],
            "quiz": {
                "question": "Care este cea mai elegantă și respectuoasă formulă de încheiere a unui email corporativ oficial în Spania?",
                "options": [
                    "Agradeciendo de antemano su atención, le saluda atentamente,",
                    "¡Un abrazo muy fuerte y nos vemos!",
                    "Chao, hablamos pronto por WhatsApp.",
                    "Espero tu respuesta rápida hoy."
                ],
                "correctIndex": 0,
                "explanation": "'Agradeciendo de antemano su atención, le saluda atentamente' este formula clasică protocolară de afaceri."
            },
            "task": "Scrie formula diplomatică 'Agradeciendo de antemano su atención, le saluda atentamente.'.",
            "starterCode": "Agradeciendo de antemano ",
            "expectedOutputPattern": "Agradeciendo\\s+de\\s+antemano\\s+su\\s+atenci[óo]n,\\s*le\\s+saluda\\s+atentamente\\.?",
            "hint": "Scrie Agradeciendo de antemano su atención, le saluda atentamente."
        }
    ]

    return lessons
