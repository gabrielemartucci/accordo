# Intona · parità con gli strumenti esistenti

Studio di ottobre 2026 su fonometri, analizzatori e misure della sala, app dei mixer e strumenti per la regia delle chiese. **Le fonti sono risultati di ricerca web, non pagine lette per intero**: dove il dato è incerto lo dico. In fondo ci sono i link.

## 1. Cosa fanno gli altri

**Fonometri** (Decibel X, NIOSH SLM, SPLnFFT, Studio Six AudioTools, SignalScope, Smaart SPL, Apple Salute)
Pesature A/C/Z, tempi Fast e Slow, livello istantaneo, minimo, massimo e Leq, picco, grafico nel tempo, esportazione CSV, soglie con avviso, calibrazione. I più seri: dose di rumore (NIOSH), statistiche L10/L95, registrazione continua.

**Analizzatori e misura della sala** (REW, Smaart, HouseCurve, Studio Six RTA, SignalScope, Open Sound Meter, app RT60, FuzzMeasure)
Analizzatore a 1/3, 1/6 e oltre fino a 1/48 di ottava, media, picchi, congela, confronto di tracce, cascata/spettrogramma, curve bersaglio, generatore di rumore rosa, RT60 per ottava con EDT, C50/C80, calcolo dei modi della sala, calibrazione del microfono da file, esportazione dei filtri (Equalizer APO) e dei dati.

**App dei mixer e per le chiese** (X Air Edit, Soundcraft Ui, Mixing Station, A&H Qu-Pad, Yamaha StageMix, Church Sound Guide, Sound Guy Essentials, Planning Center)
Scene e snapshot, preset di canale, RTA sulle equalizzazioni, rilevamento dei fischi, formazione, scalette e turni dei volontari.

## 2. Tabella di parità

| Funzione | Gli altri | Intona 0.9 |
|---|---|---|
| Pesature A, C, Z | Tutti | ✓ filtri IEC verificati: a 4 kHz entro 0,03 dB dalla formula, a 8 kHz entro 0,5 dB |
| Fast e Slow | Tutti | ✓ |
| Leq, massimo, picco, minimo | Tutti | ✓ |
| Grafico nel tempo | Tutti | ✓ ultimi 5 minuti, sessione intera nel monitor |
| Esportazione CSV | Decibel X, SPLnFFT, AudioTools | ✓ un valore al secondo |
| Soglie con avviso | Smaart, Apple | ✓ limite regolabile nel monitor del culto |
| Calibrazione del fonometro | NIOSH, AudioTools, SignalScope | ✓ con un altro misuratore; etichetta chiara «non calibrato: ±8 dB» |
| Dose di rumore, L10/L95 | NIOSH, SPLnFFT | — non ancora |
| Analizzatore a 1/3 e 1/6 di ottava | Tutti | ✓ (non 1/12, 1/24, 1/48: per chi serve in regia sono eccessivi) |
| Media, picchi, congela, traccia salvata | REW, Smaart, AudioTools | ✓ |
| Cascata / spettrogramma | REW, Smaart, SignalScope | ✓ |
| Curve bersaglio | REW, Smaart, HouseCurve | ✓ per parola, musica o entrambe, in base al volume della sala |
| Rumore rosa, bianco, tono, sweep | AudioTools, REW | ✓ generatore con partenza dolce e avviso sulle casse |
| RT60 per ottava | REW, SignalScope, app RT60 | ✓ sei ottave da 125 Hz a 4 kHz |
| EDT | REW, SignalScope | ✓ per ottava |
| Chiarezza C50 | REW, SignalScope | ✓ stima dal battito di mani (verificata su un decadimento di 1,6 s: −2,6 dB, atteso −2,7) |
| Modi della sala e frequenza di Schroeder | Calcolatori, REW | ✓ dalle misure della sala, con conferma dalla misura fatta |
| Calibrazione del microfono da file | REW, Open Sound Meter, HouseCurve | ✓ file .cal e .txt (REW, UMIK-1, iMM-6) |
| Esportazione dei filtri (Equalizer APO) | REW, HouseCurve | ✓ |
| Esportazione dati in CSV | REW | ✓ |
| Confronto tra misure | REW, Smaart | ✓ prima e dopo, due tarature qualsiasi, traccia salvata nell'analizzatore |
| Rilevamento del fischio | Mixing Station, dbx AFS | ✓ nel ring-out e nel monitor del culto, con la frequenza e il taglio consigliato |
| Memoria dei culti | Scene dei mixer | ✓ taccuino e rapporti del culto, senza collegarsi al mixer |
| Calcolo del ritardo delle casse | Smaart (misura), calcolatori | ✓ calcolatore con temperatura |
| Formazione | Church Sound Guide, Sound Guy Essentials | ✓ lezioni, impara a sentire, guida per tipo di mixer, ricette |
| Equilibrio tra gli strumenti, mappa della sala, simulatore | — (non trovati negli altri) | ✓ equilibrio del mix, mappa, simulatore con Sabine |
| Passaggio di consegne tra volontari | Planning Center (scalette) | ✓ link con sala, mixer, taratura e note, senza account |
| Controllo del microfono (AGC, NS, eco) | — | ✓ test del microfono |
| Scene del mixer, controllo a distanza | X Air Edit, Ui, Mixing Station | — richiede il collegamento al mixer: vedi sotto |
| Funzione di trasferimento, coerenza, ritardo misurato | Smaart, REW | — serve un ingresso di riferimento: sul telefono non è praticabile |
| STI | Smaart, REW (stima) | — non c'è un metodo affidabile con il microfono di un telefono |

## 3. Dove Intona va oltre

1. **Ti dice cosa fare, non solo cosa succede.** Un analizzatore mostra una curva; Intona dice quale manopola girare e di quanto, per il tuo tipo di mixer.
2. **Il passo EQ visivo**: grafico del taglio e manopole come sul mixer.
3. **Ascolto prima e dopo** con lo stesso volume.
4. **Monitor del culto**: volume, minuti sopra il limite e fischi, con rapporto da condividere. Nessun'altra app trovata lo fa per le chiese.
5. **Frasi chiare** per chi non è tecnico, in italiano. Nella ricerca non è emersa nessuna app per la regia delle chiese in italiano.
6. **Gratuita, senza account, tutto sul telefono.**

## 4. Cosa manca, detto onestamente

- **Controllo del mixer.** Applicare i tagli da soli richiede il collegamento: X Air e X32 parlano OSC su UDP, che un browser non può usare senza un ponte; Soundcraft Ui usa un WebSocket sulla rete locale. Da un iPhone, una pagina `https` che apre un `ws://` locale viene probabilmente bloccata (non verificato su un telefono vero). È la strada per una app nativa, non per questa pagina.
- **Precisione assoluta.** Il microfono del telefono, senza calibrazione, può sbagliare di diversi dB: lo studio NIOSH del 2014 ha trovato errori molto diversi tra le app anche sullo stesso telefono, e con microfono esterno si scende a circa ±1 dB. Per questo l'app mostra sempre se è calibrata. Safari potrebbe anche ignorare la richiesta di spegnere i filtri automatici del microfono: la schermata «Prova il microfono» lo controlla.
- **Dose di rumore** e statistiche L10/L95.
- **Guide per modello**: ora ci sono per 14 famiglie, ma sono ricavate dai manuali online e **non provate** su console vere.
- **Altre lingue.**
- Non provata su iPhone reali.

## 5. Quali livelli dare come riferimento (con cautela)

- **Parola 70–80 dB(A), lode 85–95 dB(A)**: indicazioni comuni nella pratica delle chiese. Sopra circa 90 dB molti smettono di cantare.
- **DPCM 215/1999** (locali di intrattenimento e di pubblico spettacolo con amplificazione) fissa 95 dB(A) di Leq e 102 dB(A) di massimo in Slow. Dalle fonti non risulta che citi i luoghi di culto: va letto come **riferimento prudente, non come obbligo**. Chiedi a un tecnico competente o al tuo comune.
- **Limiti ambientali** (DPCM 14/11/1997, legge 447/1995): valgono per il rumore che arriva ai vicini, in base alla zonizzazione del comune.
- **D.Lgs. 81/2008, art. 189**: 80 dB(A) valore inferiore di azione, 85 dB(A) superiore, 87 dB(A) limite. Tutela i lavoratori; per i volontari come definiti dalla legge 266/1991 le fonti dicono che il Testo Unico non si applica, ma **non ho verificato** il dettaglio.
- **NIOSH**: 85 dBA per 8 ore con scambio di 3 dB. **OMS**: 80 dB(A) per 40 ore a settimana.

Nell'app queste cifre sono sempre presentate come riferimenti, mai come consulenza legale.

## 6. Fonti
- Fonometri: [Decibel X](https://apps.apple.com/us/app/decibel-x-db-sound-level-meter/id448155923) · [NIOSH SLM](https://www.cdc.gov/niosh/bulletin/2017/sound-app.html) · [studio NIOSH 2014](https://www.cdc.gov/niosh/bulletin/2014/sound-app.html) · [AudioTools, calibrazione](https://studiosixdigital.com/tools-and-utilities/calibration/) · [Smaart SPL](https://support.rationalacoustics.com/support/solutions/articles/150000069209-smaart-spl-v9-feature-list) · [Apple, rumore ambientale](https://support.apple.com/en-us/102315)
- Misura della sala: [REW](https://www.roomeqwizard.com/features.html) · [HouseCurve](https://housecurve.com/) · [Open Sound Meter](https://opensoundmeter.com/) · [SignalScope](https://www.faberacoustical.com/) · [Equalizer APO](https://sourceforge.net/p/equalizerapo/wiki/Configuration%20reference/)
- Chiese e mixer: [Church Sound Guide](https://apps.apple.com/us/app/church-sound-guide/id1457526305) · [Yamaha, tenere un mix coerente](https://www.yamaha.com/US/houseofworship/downloadables/Audio-System-How-to-Guides/Roadmap-to-a-Consistent-Mix.pdf) · [Sweetwater inSync](https://www.sweetwater.com/insync/how-to-eq-your-venue-the-easy-way) · [Soundcraft Ui](https://github.com/fmalcher/soundcraft-ui) · [OSC su X Air](https://github.com/adzialocha/osc-js)
- Norme: [DPCM 14/11/1997](https://www.anit.it/wp-content/uploads/2015/02/DPCM_14_11_19971.pdf) · [DPCM 215/1999 (ISPRA)](https://www.isprambiente.gov.it/contentfiles/00003500/3530-manuali-2001-05.pdf/) · [D.Lgs. 81/2008 art. 189](https://www.codiceappalti.it/dlgs_81_2008/Art_%C2%A0189__Valori_limite_di_esposizione_e_valori_di_azione/5206) · [OMS, ascolto sicuro](https://www.who.int/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening)
