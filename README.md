# PolymathHub · Învață cu sens

Platformă de învățare în română pentru programare și limbi străine. Aplicație statică HTML/CSS/JavaScript, fără backend sau chei API obligatorii.

## Noua experiență

- **Acasă**: continuarea lecției, progresul real, obiectivul zilnic și acces rapid la domenii.
- **Explorează**: catalogul existent, cu filtre, căutare de capitole și selecția disciplinei.
- **Învățare**: teorie, exemple, scriere, potrivire și quiz; curriculumul existent este păstrat.
- **Vocabular**: engleză, franceză și spaniolă, cu româna ca limbă de sprijin.
- **Progresul meu / Realizări**: activitate, calendar, XP, ligi și realizări.

Paginile au rute proprii în fragmentul URL. Navigarea Înapoi/Înainte și reîncărcarea păstrează pagina și lecția sau cuvântul indicat în adresă. Interfața include navigare laterală pe desktop, navigare inferioară pe telefon, focus vizibil și reducerea animațiilor conform preferinței sistemului.

## Dicționar și carduri

Selecția inițială conține **24 de fișe originale**: 8 pentru fiecare limbă. Fiecare are traducere, explicație în română și în limba studiată, pronunție fonetică, utilizare, două exemple traduse și un exercițiu.

Căutarea locală acceptă cuvântul sau traducerea română, fără a impune diacritice. Pentru alte cuvinte, se introduce forma din limba selectată și se apasă **Caută**. Căutarea online trimite termenul către serviciile publice de dicționar; explicațiile și exemplele sunt traduse prin MyMemory. Este afișat primul sens disponibil. Dacă sursa nu oferă exemple sau un serviciu nu răspunde, interfața indică acest lucru explicit.

Steaua salvează cuvântul în **Colecția mea**. **Practică rapidă** folosește cuvintele salvate din limba selectată; când colecția este goală, folosește selecția disponibilă. Răspunsul rămâne ascuns până la verificare sau dezvăluire. Cuvintele exersate sunt marcate fără a acorda XP repetat. Pronunția audio folosește vocile disponibile în browser/dispozitiv.

Progresul cursurilor rămâne în cheia existentă `polymath_edtech_state_v2`. Vocabularul folosește separat `polymath_vocabulary_v1`. Datele rămân în browserul curent; nu există sincronizare între dispozitive. Fișele locale nu au nevoie de API după încărcarea aplicației; căutările noi necesită internet. Nu este implementată instalarea offline prin service worker.

## Pornire și verificare

Necesită Node.js 18+ pentru teste/build și Python 3 pentru serverul local. Aplicația nu are dependențe JavaScript de runtime.

```sh
npm run dev
# http://127.0.0.1:8000

npm test
npm run build
```

Buildul copiază exclusiv cele 13 fișiere publice ale aplicației în `dist/`. Testele unitare verifică fișele bilingve, căutarea, validarea răspunsurilor, alegerea sensului, conversia răspunsurilor API, fallbackul, cotele și limitele UTF-8. Vechile scripturi de audit din `tests/` rămân disponibile separat; unele presupun Chrome instalat într-o cale fixă și structura vechii interfețe.

## Fișiere principale

- `app.js`: curriculum, progresul lecțiilor și rutare.
- `studio.js`: dashboard, colecție, căutare și practica vocabularului.
- `vocabulary.js`: cele 24 de fișe și adaptoarele API, cu funcții testabile.
- `studio.css`: noua interfață responsive; `styles.css` păstrează componentele și temele existente.
- `scripts/build-static.js`: build static fără bundler.

## Surse pentru căutarea online

- [FreeDictionaryAPI.com](https://freedictionaryapi.com/): date din Wiktionary, cu [licență CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- [Wiktionary](https://en.wiktionary.org/): sursă alternativă; fișele afișează linkul paginii originale.
- [MyMemory](https://mymemory.translated.net/doc/spec.php): traduceri automate, supuse disponibilității și cotelor serviciului.

Fișele online păstrează atribuirea și indică traducerile automate. Nuanțele, polisemia și traducerile trebuie interpretate în context.
