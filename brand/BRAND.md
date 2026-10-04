# Intona · identità

## Il nome
**Intona** viene dal verbo *intonare*: accordare, mettere in tono, e anche dare l'attacco a un inno. In chiesa si dice «intonare un canto»; qui si intona la sala. È corto, si pronuncia come si scrive, funziona nelle lingue romanze (es. *entonar*, *entoar*, *entonner*) ed è un invito: «Intona la tua sala».

**Slogan:** *Intona la tua sala.*  Secondario, per i momenti più caldi: *Dai il La al tuo suono.* (il La è la nota del corista, 440 Hz).

### Perché non gli altri
| Nome | Perché no |
|---|---|
| Accordo | È una parola comune, difficile da distinguere e da trovare. |
| Diapason | Già usato da almeno cinque app (accordatori, rivista, app medica). |
| Sintonia | Titolo di una serie TV molto nota in Brasile. |
| Selah | Bellissimo, ma usatissimo da musica e meditazione cristiana. |
| Corista | In italiano è anche il diapason, ma fa pensare a un'app per cori. |

### Verifica fatta e da fare
Ricerca web e negli store (ottobre 2026): nessuna app chiamata «Intona» per l'audio o le chiese. Esiste **Intonia** (accordatore per strumenti ad arco): nome vicino ma altro prodotto. **Da fare prima di pubblicare negli store:** ricerca di marchio (UIBM / EUIPO, classi 9 e 42) e controllo dei domini. Non è una verifica legale.

## Il simbolo: il corista con la fiamma
Un **diapason** (in italiano *corista*): due punte che vibrano insieme fino a dare una sola nota pura. Tra le punte, una **goccia di luce a forma di fiamma**.

- Per chiunque: una nota che prende forma, la luce nel suono.
- Per le chiese pentecostali ed evangeliche: la fiamma, senza simboli religiosi espliciti.
- Per il prodotto: due voci in accordo (il pastore e la sala, il tecnico e la band) che diventano una sola.

È riconoscibile anche a 16 px, non assomiglia a nessun microfono o onda sonora, e ha una sola cosa colorata: la fiamma.

### Costruzione (griglia 512 × 512)
- Tratto **52**, estremi arrotondati.
- Punte: due linee verticali a x = 182 e x = 330, da y = 70 a y = 244.
- Curva di raccordo: semicerchio di raggio 74 centrato a (256, 244).
- Gambo: x = 256, da y = 318 a y = 444.
- Fiamma: punta in (256, 128), base circolare di raggio 28 centrata a (256, 236). Gradiente verticale `#F08A1C` → `#F5B83D` → `#FFE08A`.
- La fiamma non tocca mai le punte (almeno 12 unità di distanza).

### Logotipo
Parola in minuscolo, **disegnata a tratti** (nessun font): tratto 18 su altezza della x di 100, estremi arrotondati, spazio fra le lettere 26. Il puntino della *i* è la fiamma. Resta identico su ogni telefono e a ogni dimensione.

### File (`brand/`)
| File | Uso |
|---|---|
| `mark.svg` | Simbolo a colori (il corpo usa `currentColor`, la fiamma è in gradiente) |
| `mark-mono.svg` | Simbolo a un solo colore (anche la fiamma segue `currentColor`) |
| `word.svg` | Logotipo |
| `lockup.svg` | Simbolo + logotipo affiancati |
| `favicon.svg` | Simbolo crema su tessera nera |
| `app-icon-1024.png` | Icona dell'app a 1024 px (per gli store) |

## Colori
| Nome | Valore | Uso |
|---|---|---|
| Ambra (tinta) | `#F5B83D` | Azione principale, fiamma, punti importanti |
| Fiamma | `#F08A1C` | Fondo del gradiente della fiamma |
| Oro chiaro | `#FFE08A` | Cima della fiamma, aloni |
| Notte calda | `#0B0B0C` | Sfondo delle icone, della schermata di avvio, delle illustrazioni |
| Crema | `#FFF4DC` | Corpo del simbolo su fondo scuro |
| Inchiostro | `#1C1A17` | Corpo del simbolo su fondo chiaro |
| Teal | `#2BA8C2` | Solo piccoli dettagli (schermi); mai in primo piano |

Nell'app i colori di interfaccia seguono iOS (vedi `docs/DESIGN.md`). Le aree hanno ognuna il suo colore, come nelle Impostazioni di iOS: verde (culto), corallo (aiuto), teal (volume), indaco (libreria), viola (lezioni), rosa (ascolto), marrone (glossario), arancio (microfoni), blu (mixer). L'ambra resta riservato all'azione principale.

## Uso
- **Area di rispetto:** almeno la larghezza di una punta (52 su 512) tutto intorno.
- **Dimensioni minime:** simbolo 16 px; simbolo + logotipo 96 px di larghezza.
- **Su fondo ambra:** usare `mark-mono.svg` in inchiostro (la fiamma ambra sparirebbe).
- **Non:** ruotare, deformare, aggiungere ombre o contorni, cambiare il colore della fiamma (tranne in monocromatico), inserire il simbolo in un cerchio.

## Icona dell'app
Fondo `#0B0B0C` con un alone ambra radiale (30%) centrato sulla fiamma, simbolo crema al 60% della larghezza. iOS arrotonda da solo gli angoli. Versione *maskable* con il simbolo al 46%.

## Movimento: «il corista suona»
Ogni 3 secondi le due punte vibrano e si smorzano in circa un secondo, mentre quattro archi sottili si allargano dai lati e la fiamma «respira». Si usa solo in tre momenti: **benvenuto**, **home al primo avvio**, **analisi della sala**. Mai nelle schermate di lavoro. Con «riduci movimento» attivo, resta fermo.

## Suono: il La
Una nota pura di 440 Hz (con un'ottava e una quinta molto leggere), 2,4 s di decadimento, alla fine di una taratura riuscita. **È spento di default** (Impostazioni → «Il La di Intona»): se il telefono è collegato al mixer, la nota esce dalle casse.

## Voce
- Dai del tu. Frasi corte. Un'idea per frase.
- Parla di *suono*, non di *banda* o *Q*: «la voce suona ovattata», non «eccesso a 250 Hz».
- Nessun gergo senza spiegazione; se serve, tocca il glossario.
- Calda e pratica, mai allarmista. Si dice «si può sistemare», non «errore».
- Il merito è dei volontari: Intona accompagna, non giudica.

## Illustrazioni
Scene calde e cinematografiche, con una sola fonte di luce dorata. Le regole complete e le descrizioni di ogni immagine sono in `docs/CODEX-ILLUSTRAZIONI.md`; i file vanno in `assets/ill/`.
