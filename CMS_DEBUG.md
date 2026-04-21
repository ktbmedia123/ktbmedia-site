# Panel CMS się nie ładuje — co sprawdzić

Jeśli po wejściu na `ktbmedia.eu/admin/` dostajesz biały ekran albo błąd, przejdź przez tę listę po kolei. W 95% przypadków problem jest po stronie konfiguracji Netlify, nie w kodzie.

---

## Krok 1 — Otwórz DevTools i zobacz błąd

1. Otwórz `ktbmedia.eu/admin/` w przeglądarce
2. Naciśnij **F12** (Chrome/Firefox) — otworzy się panel developer'a
3. Kliknij zakładkę **Console**
4. Odśwież stronę (Ctrl+R)
5. Zobacz co jest w Console — to powie Ci dokładnie co się wywala

Typowe błędy które tam zobaczysz:

### Błąd: `Failed to load config.yml`
**Przyczyna:** plik `admin/config.yml` nie istnieje w repo albo Netlify go nie deployuje.
**Fix:** sprawdź w repo GitHub czy `admin/config.yml` tam jest. Sprawdź też Netlify → Deploys → najnowszy deploy → Summary → Files — czy widzisz tam `admin/config.yml`.

### Błąd: `Config Errors` (czerwone okno zamiast panelu)
**Przyczyna:** błąd w config.yml — Decap pokazuje dokładnie który widget źle ustawiony.
**Fix:** przeczytaj komunikat — zwykle wskazuje linię w config.yml.

### Błąd: `Identity init failed` albo `Git Gateway: not enabled`
**Przyczyna:** Netlify Identity nie włączone, albo Git Gateway nie włączony.
**Fix:** zobacz Krok 2 niżej.

### Biały ekran, brak błędów w Console
**Przyczyna:** Decap CMS nie załadował się w ogóle (np. blokowany przez adblock, CSP, lub unpkg nie odpowiada).
**Fix:** wyłącz adblock dla domeny, odśwież z Ctrl+Shift+R (hard refresh bez cache). Sprawdź zakładkę **Network** w DevTools — czy `decap-cms.js` ma status 200.

---

## Krok 2 — Netlify Identity musi być włączone

1. Wejdź na https://app.netlify.com/
2. Wybierz swoją stronę `ktbmedia-site` (albo jak ją nazwałeś)
3. W lewym menu: **Identity**
4. Jeśli widzisz przycisk **Enable Identity** — kliknij go
5. Po włączeniu zobaczysz panel Identity — to ma być aktywne

### Ustawienia Identity które muszą być OK:

- **Registration preferences** → `Invite only` (nie Open)
- **External providers** (opcjonalnie) — możesz dodać Google żeby się łatwiej logować
- **Emails** → sprawdź że są włączone (Confirmation, Invitation)

---

## Krok 3 — Git Gateway musi być włączony

Decap CMS komunikuje się z GitHubem **przez Netlify Git Gateway**, nie bezpośrednio. Bez Git Gateway panel nie ma jak zapisywać plików.

1. Netlify → Twoja strona → **Identity**
2. Zjedź w dół na **Services**
3. Znajdź **Git Gateway** → kliknij **Enable Git Gateway**
4. Netlify zapyta się o autoryzację GitHub — autoryzuj
5. Powinno się zmienić na `Git Gateway: Enabled` (zielone)

To jest najczęstsza przyczyna białego ekranu w Decap CMS.

---

## Krok 4 — Zaproszenie dla siebie

Skoro Identity jest `Invite only`, musisz sobie wysłać zaproszenie:

1. Netlify → Identity → **Invite users**
2. Wpisz swój email → **Send**
3. Dostaniesz mail z linkiem typu `https://ktbmedia.eu/#invite_token=...`
4. Kliknij link → otworzy się strona KTB Media z formularzem ustawienia hasła
5. Ustaw hasło → zostaniesz zalogowany → automatyczny redirect na `/admin/`

Jeśli po kliknięciu linku z maila lądujesz na stronie głównej **bez żadnej reakcji** — znaczy że skrypt Identity nie przechwycił tokenu z URL. Wtedy:

- Otwórz ręcznie `ktbmedia.eu/admin/` z tym samym linkiem z maila (przeklej token do paska, np. `ktbmedia.eu/admin/#invite_token=abc123...`)

---

## Krok 5 — Sprawdź że repo ma branch `main`

W `admin/config.yml` na górze jest:
```yaml
backend:
  name: git-gateway
  branch: main
```

Jeśli Twoje repo ma branch `master` zamiast `main` — Decap się nie podłączy do repo.

**Sprawdź:** GitHub → repo → lewy górny dropdown nazwy brancha → czy jest `main`?

**Jeśli `master`:** albo zmień branch name w repo na `main`, albo zmień w config.yml `branch: master`.

---

## Krok 6 — Wypróbuj local_backend dla szybszego debug

Jeśli nic powyżej nie pomaga, możesz pobawić się lokalnie:

1. W `admin/config.yml` zmień `local_backend: false` na `local_backend: true`
2. Zainstaluj lokalnie Decap proxy: `npx @staticcms/proxy-server`
3. Lokalnie `http://localhost:PORT/admin/` pokaże panel z plikami na dysku

To pozwala sprawdzić czy panel w ogóle się renderuje (czy problem jest tylko z git-gateway czy z samym configiem).

---

## Krok 7 — Nuclear option

Jeśli nic nie działa, a Identity / Git Gateway są na pewno włączone:

1. Usuń `admin/index.html` i `admin/config.yml` z repo
2. Commit
3. Poczekaj na deploy
4. Skopiuj nowy `admin/index.html` i `admin/config.yml` z paczki ponownie
5. Commit
6. Poczekaj na deploy, spróbuj znowu

Czasem Netlify cache'uje stare pliki i wymaga force-deployu.

---

## Jak wygląda działający panel

Gdy wszystko działa, po wejściu na `/admin/` zobaczysz:
1. Ekran logowania **Decap CMS** (dark theme z pomarańczowym przyciskiem "Login with Netlify Identity")
2. Po kliknięciu — modal Identity z polem email/hasło
3. Po zalogowaniu — lewa sidebar `Strona` z jedną pozycją `Wszystkie treści strony`
4. Po kliknięciu — formularz z sekcjami PL i EN, zawinietymi

Jeśli widzisz coś innego — wracaj do Kroku 1 i diagnozuj po Console.
