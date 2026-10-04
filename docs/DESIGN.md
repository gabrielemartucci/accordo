# Accordo · design system per iOS

Principi: chiarezza, deferenza, profondità. Una cosa per schermata, un bottone principale.

## Colore
Sfondi: systemGroupedBackground (#F2F2F7 / #000), celle (#FFF / #1C1C1E), riempimenti (rgba 120,120,128 .12/.24).
Testo: label / secondaryLabel / tertiaryLabel come in iOS (opacità .62 e .34 sul bianco o nero).
Tinta unica: ottone #F5B83D, testo sul tinta #1A1200; testo di tinta #946000 (chiaro) / #FFC85A (scuro).
Semantici: verde #34C759 / #30D158 (a posto), rosso #FF3B30 / #FF453A (problema). Sempre con icona e parola.
Tema automatico col sistema. Barra di stato "default": sfondo e barra coincidono in entrambi i temi.

## Tipografia
Font di sistema (SF Pro). Titolo grande 34/41 bold, titolo 22, headline 17 semibold, corpo 17, sottotitolo 15, nota 13, didascalia 12.
Tracking come la tabella Apple (corpo −0,41 px, titolo grande +0,37 px). Numeri in SF Pro Rounded.
Testo con Dynamic Type dove Safari lo consente (corpo, sottotitolo, nota, headline).

## Forma
Elenchi raggruppati ad angolo 20, carte 24, bottoni a capsula 52 pt, controlli in vetro 44 pt.
Area di tocco minima 44 × 44. Margini 16. Separatori sottili .5 pt, rientrati.

## Materiali
Barra di navigazione in vetro (blur 24, saturazione 180%) che compare allo scorrimento del titolo grande.
Dock azioni in basso con sfumatura. Fogli modali con maniglia, angolo 32.

## Movimento
Push/pop con curva (0,32 · 0,72 · 0 · 1) in 0,36 s. Anelli e numeri che si riempiono all'apertura.
Con "riduci movimento" attivo, niente animazioni.
