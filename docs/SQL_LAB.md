# PolymathHub — laboratorul SQL experimental

Versiunea aprobată pentru teza de an: 6 lecții, 12 exerciții și 3 cerințe într-un proiect despre comenzile unui magazin. Numai branchul `production` este publicat ca laborator, la https://polymathhub-lab.vercel.app. `main` rămâne site-ul complet.

## Interfața de studiu

Pagina de start folosește un jurnal de studiu: continuarea ultimei activități și două intrări, Programare și Limbi străine. În curs, cuprinsul rămâne în stânga pe calculator și se deschide într-un dialog pe telefon. Teoria și practica au pagini distincte.

Practica SQL arată cerința și o previzualizare a tabelelor deasupra editorului; toate rândurile pot fi extinse. Rezultatul apare imediat sub butonul de execuție. Laboratorul include și o singură lecție demonstrativă de franceză, „Au marché”: explicații, conversație cu traducere și pronunție prin vocea disponibilă în browser, apoi trei completări cu feedback separat. Greșelile și progresul ei se salvează în același cont, cu 20 XP acordate o singură dată. Aceasta demonstrează adaptarea interfeței la alt domeniu; catalogul complet de limbi rămâne în `main`.

## Cum demonstrezi proiectul

1. Deschide prima lecție și citește explicația despre rânduri și coloane.
2. Execută `SELECT city FROM customers;` la exercițiul care cere toate coloanele. Rezultatul este afișat, răspunsul este marcat greșit și încercarea apare în **Greșelile mele**.
3. Deschide **Încearcă alte date**. Execută `SELECT * FROM customers;`. Greșeala trece în **Rezolvate ulterior**, iar aplicația acordă 20 XP.
4. Rulează din nou: XP rămâne neschimbat. Reîncarcă pagina: progresul persistă.
5. Continuă cu WHERE, ORDER BY, JOIN și GROUP BY. Fiecare exercițiu are trei indicii progresive.
6. În proiectul final, rezolvă cele trei rapoarte. Progresul proiectului arată separat 0–3 cerințe îndeplinite.
7. Deschide **Limbi străine → Au marché**, completează intenționat greșit primul cuvânt și verifică explicația din **Greșelile mele**. Corectează cu `acheter`, `combien`, `combien`, apoi reîncarcă: răspunsurile și progresul rămân salvate.
8. Creează un cont de laborator, rezolvă un exercițiu, ieși și reconectează-te. Progresul personal se încarcă din Supabase. Datele vizitatorului rămân separate.

## Tehnologii și responsabilități

- HTML/CSS/JavaScript: interfața, navigarea, editorul, indicii și progresul local.
- Python + SQLite: execuția reală în baze în memorie, fără acces la conturile utilizatorilor. Verificare pe setul vizibil, cel alternativ și două seturi independente.
- Node.js: API-urile de cont și progres, sesiuni în cookie-uri HttpOnly, verificarea utilizatorului și autorizarea cererilor.
- Supabase Auth + PostgreSQL: parole gestionate de Auth, progres în `learning_progress`, acces limitat prin RLS la propriul utilizator.

Interogările pot citi doar cele trei tabele demonstrative și pot folosi funcțiile SQL de bază permise. Scrierea datelor, fișierele, tabelele de sistem și extensiile sunt refuzate. Timpul de execuție și mărimea rezultatelor sunt limitate. Pentru exercițiile de sortare contează ordinea rândurilor; în celelalte, comparația păstrează rândurile duplicate, dar permite o altă ordine. Aliasurile coloanelor pot fi diferite.

## Izolarea mediilor

Proiectul Supabase de laborator: `preference-sql-lab` (`nfcnlugfdousvnqtdruq`), organizația **Preference**, plan gratuit. Conturile existente de pe site-ul principal nu sunt transferate. Emailul este identificator sintactic, fără confirmare a căsuței poștale, conform alegerii proprietarului.

Variabilele `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` și `POLYMATH_SQL_LAB=1` sunt configurate pe Vercel exclusiv pentru Preview / branchul `production`. Nu există cheie `service_role` în aplicație. Noul punct de intrare este `sql-course.html`; buildul îl copiază în `dist/index.html` numai când flagul este activ. Catalogul original și `index.html` original sunt păstrate în cod.

## Administrare

Panoul existent a fost adaptat pentru numărul de exerciții SQL rezolvate, cele de repetat și progresul proiectului. El este doar pentru citire și nu returnează parole, hashuri sau încercări SQL private.

Proiectul nou pornește fără administratori permanenți. Pentru proprietar: creează un cont în laborator și solicită acordarea rolului pentru UUID-ul exact al acelui cont. Nu se acordă rol automat după email, fiindcă emailul nu este verificat. Drepturile administratorului și refuzul accesului altor conturi au fost testate într-o tranzacție anulată, fără rol de test rămas activ.

## Verificare locală

Necesită Node.js 22+ și Python 3.11+. Suita verifică 37 de cazuri Node și 15 cazuri Python (52 în total):

```sh
npm test
POLYMATH_SQL_LAB=1 npm run build
POLYMATH_SQL_LAB=1 npm run dev
```

Pentru conturi locale, setează variabilele Supabase ale proiectului de laborator în mediul procesului sau într-un `.env.local` ignorat de Git. Nu folosi baza principală pentru teste. Testul opțional `tests/sql-live.mjs` se rulează numai pe portul 8012 și creează două conturi QA:

```sh
POLYMATH_SQL_TEST_URL=http://127.0.0.1:8012 node tests/sql-live.mjs
```

## Limite ale primei versiuni

SQLite este motorul exercițiilor; sintaxa specifică MySQL/PostgreSQL nu este inclusă. Explicațiile și indiciile sunt pregătite editorial, fără consum API de inteligență artificială. XP este o statistică didactică a progresului aplicației, nu un clasament rezistent la manipularea clientului. Nu sunt incluse resetarea parolei prin email, recuperarea conturilor și un editor de conținut pentru admin.

Pentru integrarea ulterioară în `main`, păstrează flagul de laborator doar pe branchul de test până alegem cum se afișează traseul SQL în catalogul complet. Migrarea nouă de statistici admin se aplică separat înainte de folosirea noilor coloane în panou.
