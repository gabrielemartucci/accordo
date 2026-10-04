# Illustrazioni

Undici scene (WebP) che l'app mostra in cima ad alcune schermate. Sono **facoltative**: se un file manca, la schermata resta senza immagine e funziona lo stesso.

- Nomi e dimensioni esatti: `manifest.json`.
- Come crearle (stile, descrizioni, controlli): `../../docs/CODEX-ILLUSTRAZIONI.md`.
- Controllo: `node tools/check-illustrations.mjs --strict` dalla cartella principale.
- Anteprima: `python3 -m http.server`, poi `/assets/ill/preview.html`.

Per scelta di design (stile iOS, meno «scena») l'app mostra di default solo `history-empty`. Per riattivare le altre, aggiungi i nomi a `ILL_SHOW` in `index.html`.
