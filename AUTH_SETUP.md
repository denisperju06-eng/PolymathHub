# Activarea conturilor pe Vercel

Site-ul public rămâne utilizabil fără cont. Butonul de autentificare apare numai când serviciul este configurat; nu există conturi simulate sau autentificare doar în localStorage.

## Servicii necesare

Un proiect Supabase pentru PostgreSQL și Supabase Auth, conectat la proiectul Vercel `PolymathHub`.

1. Aplică migrarea `supabase/migrations/202610240001_learning_progress.sql` în baza de date Supabase. Tabela are politici Row Level Security pentru a izola progresul fiecărui utilizator.
2. În Supabase → Authentication → Sign In / Providers → Email, activează email/parolă și dezactivează **Confirm email**, conform cerinței proiectului. Endpointul de înregistrare verifică această setare înainte de a crea un cont; altfel nu trimite cererea de signup.
3. În Vercel → Project Settings → Environment Variables, pentru Production și pentru mediul de preview folosit la testare, configurează `SUPABASE_URL` și `SUPABASE_PUBLISHABLE_KEY` (sau `SUPABASE_ANON_KEY`). Folosește cheia publicabilă/anon, nu cheia service-role.
4. Redeploy pe Vercel. `GET /api/account?action=config` trebuie să întoarcă `{"configured":true}`. Aceasta confirmă prezența configurației, nu verificarea completă a bazei de date.
5. Verifică înregistrarea, reconectarea, salvarea și izolarea progresului între două conturi. Verifică și limitele anti-abuz configurate în Supabase înainte de a deschide înscrierile unui public mare.

Nu se verifică existența căsuței poștale și nu se trimite email de confirmare. Emailul este un identificator, iar accesul se face prin parolă. Prin urmare, interfața nu prezintă adresa ca identitate verificată și nu oferă recuperare de parolă printr-o adresă neverificată.

## Arhitectură

- `api/account.mjs`: configurare, sesiune, signup, login și logout.
- `api/progress.mjs`: citire și salvare de progres pentru utilizatorul validat pe server.
- `server/auth.mjs`: cereri către Supabase, validare, cookie-uri și protecție pentru cererile de modificare.
- `account.js`: formular, starea contului și sincronizare. Tokenurile nu sunt expuse JavaScript-ului din browser.

Sesiunea folosește cookie-uri `HttpOnly`, `Secure` și `SameSite=Lax` pe domeniul public. Parolele sunt gestionate de Supabase Auth, nu sunt stocate de aplicație. Cheile rămân în variabilele Vercel. Verificarea originii protejează operațiile de modificare, iar accesul la PostgreSQL folosește tokenul utilizatorului și politicile RLS.

La conectare se preia progresul contului. Importul sesiunii de vizitator este oferit explicit doar la crearea unui cont nou. Conturile folosesc spații de cache separate în browser. Salvarea utilizează o revizie pentru a detecta modificările din altă sesiune și a evita suprascrierea lor automată.

## Testare locală

Necesită Node.js 22. Copiază `.env.example` în `.env.local` și completează variabilele din propriul proiect pentru un test real. Nu publica fișierul `.env.local`.

```sh
npm run dev
npm test
```

Testele automate folosesc răspunsuri simulate pentru a verifica regulile API și tratarea erorilor. Nu reprezintă dovada unei integrări funcționale cu un proiect Supabase real. Verificarea reală se face după conectarea serviciilor și aplicarea migrării.
