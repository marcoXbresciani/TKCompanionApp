<!--
© 2021-2022 Marco Bresciani

Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided the copyright
notice and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2021-2022 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# Contribuire
Grazie per essere qui!
Se vuoi contribuire al progetto, dai un'occhiata a questo file.
Per qualsiasi domanda... chiedi pure!

## Sommario
1. [Per tutti i contributi](#per-tutti-i-contributi)
1. [Per gli sviluppatori](#per-gli-sviluppatori)
   1. [Come iniziare](#come-iniziare)
   1. [Come compilare](#come-compilare)
   1. [Come rilasciare](#come-rilasciare)

## Per tutti i contributi
Se non sei uno sviluppatore di software e vuoi contribuire a migliorare
questa app, sei altrettanto più che benvenuto!
Non ti serve il codice, ma se vuoi aiutare per tradurre nella tua lingua
(o correggere il mio inglese, dato che non sono madrelingua), aggiungere
altro contenuto, suggerire miglioramenti grafici o di layout o altro
contributo che puoi dare, per favore
[crea una nuova attività](https://github.com/marcoXbresciani/TKCompanionApp/issues)
spiegando il problema che hai notato e la soluzione proposta.

Siamo qui per migliorare!

## Per gli sviluppatori
Se sei uno sviluppatore software e vuoi contribuire a migliorare l'app,
sei più che benvenuto!
Trova l'ultimo NodeJS LTS corrente
([16.14.0](https://nodejs.org/download/release/latest-gallium/), al
2022-03-03) per il tuo sistema.
Prendi il codice sorgente clonando
[il repository](https://github.com/marcoXbresciani/TKCompanionApp).
Quindi vai nella cartella principale del progetto (contenente anche
questo stesso file che stai leggendo) ed esegui `npm -g install yarn`.
Fatto questo, esegui `yarn install` e dovresti vedere che tutte le
dipendenze necessarie sono scaricate e installate tramite il gestore di
pacchetti Yarn.

![dimensione del codice GitHub in byte](https://img.shields.io/github/languages/code-size/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)
![Attività di commit GitHub](https://img.shields.io/github/commit-activity/m/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)

### Come iniziare
Dalla riga di comando avvia `npm start` che eseguirà lo strumento Metro
(non so cosa sia, in realtà, ma sembra necessario).

Da (un'altra) riga di comando avvia `npm run android` che preparerà e
avvierà la tua app, connettendoti al Metro-coso di cui sopra.

### Come compilare

### Come rilasciare
Una volta che il codice è completo e testato, per rilasciare ci sono una
serie di passi da seguire.

**Lista di controllo pre-volo**: queste sono le attivitò da fare prima
di creare un nuovo rilascio:
1. Aggiornare [package.json](package.json) col nuovo numero di versione
   ed eseguire `npm install`.
1. Verificare che [CHANGELOG.md](CHANGELOG.md) contenga la relativa
   sezione numerata per il rilascio, spostando il contenuto relativo e
   rilevante da [Unreleased](CHANGELOG.md) alla suddetta sezione.
   E verificahe che il relativo link al tag sia disponibile alla fine
   del file, insiele agli altri link ai tag già esistenti.
1. Verificare che la cartella `fastlane` contenga i relativi file
   `changelogs` per lo specifico *codice* di versione, in tutte le
   lingue disponibili.
   Se necessario, aggiornare o aggiungere le relative schermate, in
   tutte le lingue disponibili.
1. Verificare che [Errors.md](/docs/Errors.md) contenga i problemi noti
   al momento, aggiungendo quelli rilevanti e rimuovendo quelli risolti.
   Se necessario, aprire dei problemi specifici sulla
   [GitHub Issues page](https://github.com/marcoXbresciani/TKCompanionApp/issues).
1. Aggiornare i valori di `versionCode` e `versionName` all'interno del
   campo `android.defaultConfig` del file
   [build.gradle](/android/app/build.gradle).
1. Aggiornare i valori di `CFBundleVersion` e
   `CFBundleShortVersionString` all'interno del campo `<dict>` del file
   [Info.plist](/ios/TKCompanionApp/Info.plist).
1. Verificare che [Architecture.md](/docs/architecture/Architecture.md)
   abbia le informazioni architetturali correttamente aggiornate, se
   necessario.
   Aggiungere i relativi documenti ADR nella cartella
   `docs/architecture/decisions`, se necessario, tracciandoli nel file
   [CHANGELOG.md](CHANGELOG.md).
1. Verificare il soddisfacimento dei criteri
   [REUSE](https://reuse.software/) tramite il comando `reuse lint`.
1. Committare e etichettare il codice col numero di
   [versionamento (semantico)](https://semver.org/) relativo.
1. Aggiornare il codice.

### Come testare localmente
Il file APK generato può essere (auto) firmato per consentirne
l'installazione su un dispositivo reale.
Lo strumento
[uber-apk-signer](https://github.com/patrickfav/uber-apk-signer) può
essere usato per firmare qualsiasi APK facilmente e velocemente.
