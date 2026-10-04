# Intona

**Intona la tua sala.** Un'app per iPhone che misura la sala con il microfono del telefono e dice a chi serve in regia, nelle chiese, quali manopole girare sul mixer per migliorare il suono.

Prototipo funzionante (versione 0.8). Nessun account, nessun server: tutto resta sul telefono.

## Cosa fa
- **Misura la sala** con il rumore rosa e il microfono del telefono, in tre punti.
- **Ascolta la differenza**: con il telefono collegato al mixer, alterna il suono prima e dopo la correzione.
- **Sistema il mixer** una banda alla volta, per il tipo di mixer che hai.
- **Test dell'eco**: riverbero per ottava, EDT e chiarezza della parola (C50), con tre battiti di mani.
- **Prima del culto**, **Aiuto al volo**, **Volume della sala**.
- **Strumenti**: analizzatore (1/3 e 1/6 di ottava, cascata, bersaglio, traccia salvata), fonometro (A, C, Z, Fast, Slow, Leq), monitor del culto con rapporto, generatore, ritardo delle casse, modi della sala, microfono di misura con file di calibrazione, taccuino del mixer.
- **Esporta**: immagine prima e dopo, filtri per Equalizer APO e REW, dati in CSV.
- **Libreria**: lezioni, impara a sentire, glossario, momenti del culto, posizione dei microfoni, ricette, acustica a basso costo.

## Provarla sul telefono
Serve un indirizzo `https` (Safari non apre il microfono senza).

1. Pubblica questo repository con GitHub Pages (vedi sotto).
2. Apri l'indirizzo con Safari sull'iPhone.
3. Tocca Condividi, poi «Aggiungi alla schermata Home».

Primo controllo: Libreria, poi «Prova il microfono». Le voci «Cancellazione eco», «Riduzione rumore» e «Controllo guadagno» devono dire «Spento».

## Pubblicare su GitHub Pages
Repository, Settings, Pages. In «Build and deployment» scegli «Deploy from a branch», branch `main`, cartella `/ (root)`, poi Save. Dopo un minuto l'app è su `https://<tuo-utente>.github.io/<nome-repo>/`.

## Struttura
- `index.html`: tutta l'app (HTML, CSS e JavaScript, senza librerie esterne)
- `manifest.webmanifest`, `sw.js`: installazione e uso senza rete
- `icon-*.png`, `splash-*.png`, `favicon.svg`: icone e schermate di avvio
- `brand/`: simbolo, logotipo e guida all'identità (`BRAND.md`)
- `assets/ill/`: illustrazioni (facoltative: compaiono solo se il file c'è) e anteprima `preview.html`
- `tools/check-illustrations.mjs`: controllo delle illustrazioni
- `docs/`: design system, note di ricerca, **`PARITA.md` (confronto con gli strumenti esistenti)** e `CODEX-ILLUSTRAZIONI.md`

## Limiti noti
- Non ancora provata su iPhone reali: i collaudi sono con un microfono simulato.
- La precisione dei microfoni dei telefoni cambia da modello a modello; sotto 100 Hz le indicazioni sono approssimate.
- I costi nella libreria di acustica sono stime.
- Manca la traduzione in altre lingue.

## Privacy
I dati (tarature, impostazioni) sono salvati solo nel browser del telefono. Il microfono serve a misurare i livelli per frequenza; l'audio non viene registrato né inviato.
