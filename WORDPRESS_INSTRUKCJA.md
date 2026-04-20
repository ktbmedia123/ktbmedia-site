# Instrukcja: strona KTB Media na WordPress

## Uwaga wstępna

Strona KTB Media to **statyczna aplikacja React**, nie motyw WordPress. Są 3 sposoby wrzucenia jej na WP. Omawiam od najlepszego do najbardziej karkołomnego.

---

## Rekomendacja: NIE WordPress, tylko sama Netlify (opcja 0)

Jeśli nie masz konkretnego powodu, dla którego _musi_ być to WordPress (np. już masz WP z zespołem/klientami/wtyczkami, do których jesteś przywiązany), najlepszym rozwiązaniem jest po prostu:

1. Kupić domenę ktbmedia.eu (jeśli nie masz)
2. Wypiąć ją z WordPress (zmienić DNS)
3. Podpiąć do Netlify
4. Deploy z tego ZIPa

**Wtedy masz:**
- błyskawiczne ładowanie (statyczne pliki + CDN Netlify)
- brak podatności bezpieczeństwa WordPress
- darmowy SSL
- panel admin (admin.html + Supabase) działa od razu
- łatwa aktualizacja: edytujesz content → deploy

WordPress pod spodem dokłada narzut bezpieczeństwa, performance i kosztów hostingu, bez żadnej korzyści dla strony wizytówki.

---

## Opcja A: Subdomena (zalecane dla WordPress)

Zostaw WordPress pod ktbmedia.eu i wrzuć stronę React pod inną subdomenę, np. **www2.ktbmedia.eu** lub **new.ktbmedia.eu**, a potem przekieruj główny adres.

**Jak:**

1. W panelu rejestratora domeny (OVH, nazwa.pl, Hekko...) dodaj rekord CNAME:
   - `new.ktbmedia.eu` → Twój Netlify URL (np. `ktbmedia.netlify.app`)
2. W Netlify w zakładce **Domains** dodaj custom domain `new.ktbmedia.eu`
3. SSL się automatycznie wygeneruje (Let's Encrypt)
4. Gdy działa → w WordPress w **Ustawienia → Ogólne** zmień "Adres strony" z `ktbmedia.eu` na `blog.ktbmedia.eu` (bo Twój WP stanie się blogiem)
5. Zmień CNAME dla `ktbmedia.eu` → Netlify
6. W Netlify dodaj też `ktbmedia.eu` jako domain alias
7. Zmień CNAME `blog.ktbmedia.eu` → Twój hosting WP

**Efekt:** `ktbmedia.eu` serwuje nową stronę, `blog.ktbmedia.eu` serwuje dotychczasowy WordPress.

---

## Opcja B: React wewnątrz motywu WordPress (umiarkowanie zalecane)

Wrzucasz pliki React do katalogu WordPress i robisz stronę-kontener która ładuje Reacta. Zachowujesz WP, ale strona główna jest nasza.

**Jak:**

### Krok 1 — Upload plików

1. Wejdź na swoje WordPress przez FTP / cPanel (FileZilla, Filezilla, WinSCP lub panel hostingu)
2. Idź do katalogu głównego WordPress (tam gdzie są `wp-config.php`, `wp-content/`, `wp-admin/`)
3. Utwórz folder `ktb-app/` w katalogu głównym
4. Rozpakuj ZIP i **wrzuć wszystkie pliki** (`index.html`, `app.js`, `content.js`, `styles.css`, folder `assets/`, `admin.html`, `sitemap.xml`, `robots.txt`) do folderu `ktb-app/`

Struktura powinna wyglądać:
```
/ (katalog główny WP)
  wp-admin/
  wp-content/
  wp-includes/
  wp-config.php
  index.php
  ktb-app/          ← tu
    index.html
    app.js
    content.js
    styles.css
    assets/
    admin.html
    ...
```

### Krok 2 — Szablon strony WordPress

1. Zaloguj się do WordPress admin
2. **Wygląd → Edytor motywu** (lub lepiej: utwórz child-theme, żeby aktualizacja motywu tego nie nadpisała)
3. Utwórz nowy plik `page-ktb.php` z zawartością:

```php
<?php
/**
 * Template Name: KTB Media — strona główna
 */

// Wyłącza header/footer WordPressa, serwuje Reacta
$file = get_home_path() . 'ktb-app/index.html';
if (file_exists($file)) {
    $html = file_get_contents($file);
    // Poprawka ścieżek: zamień /assets/ na /ktb-app/assets/, app.js → /ktb-app/app.js itd.
    $html = str_replace('href="styles.css', 'href="/ktb-app/styles.css', $html);
    $html = str_replace('src="content.js', 'src="/ktb-app/content.js', $html);
    $html = str_replace('src="app.js', 'src="/ktb-app/app.js', $html);
    $html = str_replace('src="assets/', 'src="/ktb-app/assets/', $html);
    $html = str_replace('href="assets/', 'href="/ktb-app/assets/', $html);
    $html = str_replace('"/assets/', '"/ktb-app/assets/', $html);
    echo $html;
    exit;
}
get_header();
?>
<p>Plik ktb-app/index.html nie istnieje — sprawdź czy wgrano pliki.</p>
<?php get_footer(); ?>
```

### Krok 3 — Utwórz stronę w WP

1. **Strony → Dodaj nową**
2. Tytuł: "Strona główna"
3. Po prawej w "Atrybuty strony" → **Szablon: KTB Media — strona główna**
4. Opublikuj
5. **Ustawienia → Czytanie** → "Strona główna wyświetla: Strona statyczna" → wybierz "Strona główna"

### Krok 4 — Router SPA (bez tego nie działają /realizacje /blog itd.)

W katalogu głównym WordPressa znajdź lub utwórz plik `.htaccess` i dodaj **przed blokiem "BEGIN WordPress"**:

```apache
# KTB App SPA fallback — wszystkie /realizacje, /blog, /kontakt, /o-nas
RewriteEngine On
RewriteCond %{REQUEST_URI} ^/(realizacje|blog|kontakt|o-nas|polityka-prywatnosci)(/.*)?$
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /ktb-app/index.html [L]
```

**Ostrzeżenia:**
- Panel administracyjny `/admin.html` działa pod `ktbmedia.eu/ktb-app/admin.html`
- Sitemap działa pod `ktbmedia.eu/ktb-app/sitemap.xml` (opcjonalnie zrób przekierowanie)
- Jeśli chcesz wpisy blogowe pisać w WordPressie (a nie w panelu Supabase), to się tu rozjeżdża — blog jest w Reakcie, musisz go edytować przez `admin.html`
- **WP mogą nadpisać `.htaccess`** przy zapisywaniu permalinków — wtedy dodaj reguły ponownie

---

## Opcja C: Motyw WordPress (odradzam)

Przerobienie Reacta na motyw WordPress oznacza przepisanie całego frontendu od nowa jako szablony PHP + ACF dla treści. To kilka dni pracy. **Jeśli tego potrzebujesz, lepiej zamówić to osobnym zleceniem** – to praktycznie osobny projekt, nie "wrzucenie na WP".

---

## Co polecam konkretnie Tobie

Jeśli dobrze czytam Twoją sytuację (agencja marketingowa, chcesz panel do edycji treści), to **Opcja 0 – czysta Netlify + Supabase** to jest to co faktycznie chcesz:

1. Zostaw obecną stronę ktbmedia.eu tak długo aż testowo postawisz nową (może być pod netlify.app)
2. Skonfiguruj Supabase zgodnie z instrukcją w admin panelu (plik `admin.html`, zakładka "Jak to działa")
3. Jak działa → przerzuć DNS ktbmedia.eu na Netlify
4. Edytujesz treść przez `ktbmedia.eu/admin.html`
5. Pełne SEO, szybkość, łatwość aktualizacji

Jeśli masz konkretny powód dlaczego MUSI być WP — najpewniej Opcja A (subdomena).

---

## Panel admin i WordPress

**Admin panel (`admin.html` + Supabase) działa niezależnie od WordPressa.** Możesz go umieścić gdziekolwiek — na Netlify, na swoim WP, na innym hostingu. Panel tylko komunikuje się z Supabase via API. Jeśli strona główna jest w WP (opcja B), admin panel też może być w `ktb-app/admin.html` i działa normalnie.

---

## W razie problemów

Jeśli po podmianie domeny strona nie działa:
1. Sprawdź DNS propagation: `https://dnschecker.org/#CNAME/ktbmedia.eu`
2. Sprawdź czy w Netlify custom domain jest "Verified" i SSL "Issued"
3. Twardy odśwież przeglądarki: **Ctrl+Shift+R** (Windows) lub **Cmd+Shift+R** (Mac)
4. Incognito mode żeby wyeliminować cache

Jeśli rok 2022 nadal pokazuje jako 2019:
1. To cache — **Ctrl+F5** (ostatni ZIP ma już meta no-cache + wersjonowane pliki, więc kolejne deploye nie będą tego problemu miały)
2. Jeśli dalej — wyczyść cache w Netlify: **Deploys → Trigger deploy → Clear cache and deploy site**
