# Intona · design system per iOS

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

## 0.6 · identità e momenti
- **Simbolo e logotipo** disegnati a tratti (vedi `brand/BRAND.md`). Il corista vibra solo in benvenuto, home al primo avvio e analisi.
- **Colori per area**, come le Impostazioni di iOS: ogni sezione ha il suo colore sull'icona; l'ambra resta solo per l'azione principale.
- **Passo EQ visivo**: grafico del taglio (la curva che si abbassa) e manopole che riproducono i controlli del mixer (frequenza, guadagno, Q), con la riga «Imposta 250 Hz, porta il guadagno a −2,5 dB».
- **Ascolto**: spettro vivo dentro la scheda del grafico (grigio «prima», ambra «dopo»), tasto che pulsa durante la riproduzione, grafico che si disegna all'apertura dei risultati.
- **Disegni di istruzione** in SVG per il volume (fader che sale, rumore rosa, canzone in sala), la piantina dei punti e le manopole.
- **Illustrazioni a scena** facoltative in `assets/ill/`: compaiono solo se il file c'è (vedi `docs/CODEX-ILLUSTRAZIONI.md`). In scuro sono attenuate al 93%.
- **Immagine da condividere** (prima e dopo) generata sul telefono, 1080 × 1350, per WhatsApp.

## 0.7 · iOS 26
- **Vetro**: i controlli (pulsanti nella barra, barra a schede, fogli, bottoni secondari) sono di vetro: sfondo traslucido, sfocatura con saturazione, bordo chiaro interno e ombra morbida. Se il browser non supporta la sfocatura restano leggibili perché lo sfondo non è mai del tutto trasparente.
- **Barra a schede flottante** (Home, Aiuto, Libreria, Opzioni) sulle quattro schermate principali; «Aiuto» è sempre a un tocco, anche durante il culto. Sotto la barra il contenuto sfuma, senza linee.
- **Barra in alto e azioni in basso** con sfumatura e sfocatura progressive, non più una riga o una banda piena.
- **Fogli** staccati dai bordi, angolo 40, in vetro.
- **Curve concentriche**: carte 28, elenchi 26, bottoni a capsula 56 pt, interruttori con pomello largo.
- **Via gli effetti**: nessun alone ambra dietro simbolo e bottoni, nessun gradiente di sfondo sulle carte, spettro in tinta piena.
- **Scene illustrate**: di default si mostra solo lo stato vuoto dello storico (`history-empty`). Le altre scene restano nel progetto e si riattivano aggiungendo il loro nome a `ILL_SHOW` in `index.html`.
- Impostazioni senza bottone «Salva»: nome e sala si salvano mentre si scrive.

## 0.8 · strumenti
- Quinta scheda **Strumenti** (Home, Strumenti, Aiuto, Libreria, Opzioni).
- **Analizzatore**: il grafico resta fisso in alto mentre si scorrono i comandi; barre, curva, cascata; colori per scostamento dal bersaglio (verde ±3 dB, rosso sopra, grigio sotto).
- **Fonometro e monitor del culto**: un grande numero, il colore dello stato (verde, arancio, rosso) e il rapporto. Mentre il monitor lavora compare in alto una pillola di vetro «Monitor · 88 dB(A)» su ogni schermata.
- Sempre visibile se il valore è **calibrato** o no, con la tolleranza (±3 dB o ±8 dB).

## 0.9 · funzioni nuove
- **Strumenti** raggruppati per uso (Misura, La sala, Prova e calcola); in cima la **Scansione rapida**.
- **Equilibrio del mix**: ogni gruppo suona da solo per qualche secondo, il confronto con le voci dà una riga per strumento («troppo forte», «giusto», «non si sente»).
- **Mappa della sala**: i punti misurati sulla piantina, colorati per distanza dal punto 1 (verde fino a 3 dB, arancio 3–6, rosso oltre).
- **Simulatore acustico**: stima del riverbero con pannelli, tende e tappeti (formula di Sabine, assorbimenti tipici); è una stima, il riscontro è la misura vera.
- **Test del microfono**: controlla che eco, riduzione rumore e controllo guadagno siano spenti e prova la compressione (rumore a due livelli, +12 dB attesi).
- **Monitor per momenti** (lode, predicazione…) con limite proprio e rapporto per momento.
- **Link di passaggio**: sala, mixer, ultima taratura e note codificati nell'indirizzo (`#s=`); niente server né account.
- **Copia dei dati** in un file e ripristino.
- **Guide mixer**: dati in `MIXG` (modello, dove sono EQ canale, EQ master, filtro bassi, gain, RTA, come tagliare, attenzione, fiducia). Etichette oneste: «Dai manuali ufficiali», «Da controllare sul manuale», «Indicazioni generali».
- **Misura non riuscita**: se oltre metà delle bande è coperta dal rumore di fondo non si dà un punteggio (prima poteva comparire un 100 finto); l'elaborazione si scarta o si ripete.
