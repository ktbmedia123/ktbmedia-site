# KTB Media — start CMS bez Supabase

1. Wgraj stronę na Netlify z repo Git.
2. W Netlify włącz: **Identity**.
3. W Identity włącz: **Git Gateway**.
4. W Identity zaproś swój e-mail: **Invite users**.
5. Po zaakceptowaniu zaproszenia wejdź na `/admin/`.
6. Edytuj treści i kliknij **Publish**.

## Ważne
- Ten CMS edytuje plik `content/site.json`.
- Strona główna korzysta z tych danych od razu po deployu.
- Panel admina nie wymaga Supabase.

## Co jest edytowalne
- menu
- hero
- usługi
- sekcja o nas
- proces współpracy
- kontakt
- stopka

## Gdy nie działa logowanie
- upewnij się, że strona jest podpięta do repo Git
- Identity i Git Gateway muszą być włączone
- użytkownik musi zaakceptować zaproszenie mailowe
