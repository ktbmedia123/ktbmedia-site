# Supabase — Konfiguracja dla KTB Media (instrukcja krok po kroku)

Masz konto Supabase, ale nie wiesz co z nim zrobić. Poniżej 7 kroków (~10 minut) żeby panel admin zaczął działać z Twoją stroną.

---

## Krok 1 — Utwórz projekt

1. Wejdź na **https://app.supabase.com**
2. Kliknij **New project**
3. Organization: wybierz swoją (albo stwórz "KTB Media")
4. Wypełnij:
   - **Name:** `ktb-media`
   - **Database Password:** wymyśl mocne hasło, **ZAPISZ je** (nie będzie więcej pokazane)
   - **Region:** `Central EU (Frankfurt)` — najbliżej Polski
   - **Pricing Plan:** Free (wystarczy)
5. Kliknij **Create new project** — czekaj ~2 min na setup

---

## Krok 2 — Uruchom skrypt SQL (tworzy tabelę + bucket)

1. W menu po lewej kliknij **SQL Editor**
2. Kliknij **+ New query**
3. Wklej dokładnie to:

```sql
-- Tabela z treścią strony
create table site_content (
  id text primary key,
  content jsonb not null,
  updated_at timestamptz default now()
);

-- Pusty rekord główny
insert into site_content (id, content) values ('main', '{}'::jsonb);

-- Storage bucket na obrazy
insert into storage.buckets (id, name, public)
values ('ktb-media', 'ktb-media', true)
on conflict (id) do nothing;

-- Row Level Security: publiczny odczyt, zapis tylko dla zalogowanych
alter table site_content enable row level security;

create policy "public read" on site_content for select using (true);
create policy "auth write" on site_content for all using (auth.role() = 'authenticated');

-- Storage policies: publiczny odczyt obrazów, upload tylko dla zalogowanych
create policy "public read images" on storage.objects
  for select using (bucket_id = 'ktb-media');
create policy "auth upload images" on storage.objects
  for insert with check (bucket_id = 'ktb-media' and auth.role() = 'authenticated');
create policy "auth update images" on storage.objects
  for update using (bucket_id = 'ktb-media' and auth.role() = 'authenticated');
create policy "auth delete images" on storage.objects
  for delete using (bucket_id = 'ktb-media' and auth.role() = 'authenticated');
```

4. Kliknij **Run** (prawy dolny róg albo Cmd/Ctrl+Enter)
5. Powinno pojawić się **"Success. No rows returned"** — to dobrze

---

## Krok 3 — Wyłącz potwierdzanie emaila (żeby się łatwiej zalogować)

1. W menu po lewej: **Authentication → Providers**
2. Kliknij **Email** na liście
3. Znajdź **Confirm email** → ustaw na **OFF**
4. Kliknij **Save**

---

## Krok 4 — Dodaj siebie jako użytkownika

1. **Authentication → Users**
2. Kliknij **Add user → Create new user**
3. Wypełnij:
   - **Email:** Twój email (np. `kozak@ktbmedia.eu`)
   - **Password:** mocne hasło (ZAPISZ je, tym będziesz się logować do panelu)
   - **Auto Confirm User:** ✓ zaznaczone
4. Kliknij **Create user**

---

## Krok 5 — Skopiuj klucze API

1. W menu: **Project Settings** (ikona koła zębatego na dole) → **API**
2. Zobaczysz dwa ważne pola:
   - **Project URL** — skopiuj cały, wygląda tak: `https://abcdefgh.supabase.co`
   - **Project API keys → anon / public** — skopiuj, wygląda tak: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (długi ciąg znaków)
3. Wklej je gdzieś tymczasowo (notatnik), będą za chwilę potrzebne

---

## Krok 6 — Wklej klucze w panelu admin

1. Otwórz swoją stronę KTB Media i dodaj `/admin.html` na końcu URL, np:
   - `https://ktbmedia.netlify.app/admin.html`
   - albo lokalnie `https://ktbmedia.eu/admin.html`
2. Na dole strony jest pole **"Konfiguracja Supabase"**
3. Wklej:
   - **Supabase URL:** ten z kroku 5 (`https://...supabase.co`)
   - **Anon public key:** ten drugi długi
4. Kliknij **Zapisz konfigurację**
5. Panel przeładuje się i pokaże ekran logowania

---

## Krok 7 — Zaloguj się i wrzuć początkowe treści

1. Wpisz email + hasło z kroku 4
2. Kliknij **Zaloguj**
3. Powinieneś zobaczyć panel administratora
4. Na górze będzie przycisk **"⚡ Wgraj aktualne treści do Supabase"** — kliknij go **jednorazowo**
5. To załaduje obecną zawartość strony (portfolio, blog, usługi, założyciele, kontakt) do Supabase
6. Od teraz strona pobiera dane z Supabase, a Ty edytujesz przez panel

---

## Gotowe — co teraz?

Od tej pory strona KTB Media **pobiera treści z Supabase** przy każdym wejściu. Zmiany w panelu są widoczne na stronie **po odświeżeniu** (F5 / Ctrl+R).

**Gdzie co edytować:**

- **Portfolio** → dodaj/edytuj klientów, upload 3 obrazów per klient, paleta kolorów, wyniki
- **Blog** → pisz artykuły w prostej składni markdown
- **Usługi** → 6 usług na stronie głównej
- **Założyciele** → Mateusz + Radek (lub więcej), po 2 zdjęcia na hover cross-fade
- **Kontakt** → email, telefon, adres, social media

---

## Problemy?

**"Błąd pobrania danych"** po zalogowaniu
→ Nie uruchomiłeś SQL z kroku 2. Wróć do SQL Editora i uruchom ponownie.

**"Invalid login credentials"**
→ Hasło z kroku 4 jest złe, albo confirm email nie jest OFF. Sprawdź Authentication → Providers → Email.

**Obrazy się nie wgrywają ("Upload błąd")**
→ Bucket `ktb-media` nie istnieje lub RLS jest zły. Uruchom ponownie SQL z kroku 2.

**Strona dalej pokazuje stare treści mimo że coś zmieniłem w panelu**
→ Hard refresh przeglądarki (Ctrl+Shift+R / Cmd+Shift+R). Jeśli dalej — wyczyść cache Netlify: Deploys → Trigger deploy → Clear cache.

---

## Bezpieczeństwo

- **Nie publikuj nigdzie hasła z kroku 4** — to jest klucz do Twojego CMS
- **Anon key** (krok 5) może być publiczny — on pozwala tylko czytać treść (bo RLS blokuje zapis bez logowania)
- **Service role key** (ten 2. w Settings → API, oznaczony "secret") — NIGDY nie wrzucaj w kod, nigdy nie wklejaj w panelu. On obchodzi RLS
