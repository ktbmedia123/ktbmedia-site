# KTB Media — strona

## Sekcja "Jak pracujemy" — podmiana grafik

W sekcji między "O nas" a "Proces" (nazwa: showcase) są 3 bloki z żółto-kremowymi
kafelkami na zdjęcia produktowe w stylu Phenoma (widelec z przewodem, banan, telefon itp).

Dopóki plików zdjęć nie ma, pokazuje się placeholder z ikoną i etykietą.

### Jak dodać własne zdjęcia

1. Wygeneruj (np. w Midjourney, DALL-E) lub zrób zdjęcia 3 obiektów:
   - **showcase-1.jpg** — scena "strategia / tech" (np. widelec ze spaghetti, które
     jest kablem USB; obiekt-metafora wydajności)
   - **showcase-2.jpg** — scena "brand / sprzedaż" (np. obiekt codzienny z zaskakującym
     przeznaczeniem, coś co kojarzy się z regułami i sprzedażą)
   - **showcase-3.jpg** — scena "współpraca / zabawa" (np. gumowe kaczuszki, cokolwiek
     luźnego i zachęcającego)

2. **Wymagania techniczne:**
   - Format: `.jpg` lub `.webp` (zmień też ścieżkę w `content.js` jeśli używasz .webp)
   - Proporcje: najlepiej kwadrat lub 4:3 (sekcja sama dopasuje)
   - Rozmiar: szerokość 1000-1400 px, do 300 KB
   - **WAŻNE:** tło zdjęcia musi być w kolorach strony (żółto-kremowe, `#E8A838` lub
     jasne kremowe `#EFE9DC`) albo przezroczyste (PNG z alpha) — obiekt ma "wypływać"
     z kolorowego tła sekcji

3. Wrzuć pliki do folderu `assets/`:
   - `assets/showcase-1.jpg`
   - `assets/showcase-2.jpg`
   - `assets/showcase-3.jpg`

4. Deploy. Placeholder zniknie automatycznie.

### Jak zmienić teksty w showcase

Edytuj `content.js`, sekcja `showcase:` — jest dla `pl` i dla `en`.
Każdy blok ma: `eyebrow`, `title1`, `titleAccent`, `title2`, `body`.

### Prompt do Midjourney / DALL-E (punkt startowy)

> Minimalist creative product photograph, single everyday object with surprising
> twist, yellow and cream color palette (#E8A838, #EFE9DC), soft studio lighting,
> centered composition, white background gradient, editorial style, 1:1 aspect

Zmień obiekt per scena (spaghetti on fork with USB cable, peeled banana, rubber
ducks, vintage phone receiver itp.).
