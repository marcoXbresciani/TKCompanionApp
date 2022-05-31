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
   1. [Traduzioni](#traduzioni)
   1. [Altri contributi](#altri-contributi)
1. [Per gli sviluppatori](#per-gli-sviluppatori)
   1. [Come iniziare](#come-iniziare)
   1. [Come compilare](#come-compilare)
   1. [Come rilasciare](#come-rilasciare)
   1. [Come testare localmente](#come-testare-localmente)

## Per tutti i contributi
Se non sei uno sviluppatore di software e vuoi contribuire a migliorare
questa app, sei benvenuto!
Non ti serve il codice, ma se vuoi aiutare per tradurre nella tua lingua
(o correggere il mio inglese, dato che non sono madrelingua), aggiungere
altro contenuto, suggerire miglioramenti grafici o di layout o altro
contributo che puoi dare, per favore
[crea una nuova attività](https://github.com/marcoXbresciani/TKCompanionApp/issues)
spiegando il problema che hai notato e la soluzione proposta.

Siamo qui per migliorare!

### Traduzioni
Puoi contribuire colle traduzioni dall'italiano (o dall'inglese) alla
tua lingua madre, qualsiasi essa sia.

[![Stato traduzione](https://hosted.weblate.org/widgets/tkcompanionapp/-/287x66-white.png)](https://hosted.weblate.org/engage/tkcompanionapp/)

Le traduzioni sono gestite tramite il software e piattaforma libera
[Weblate](https://hosted.weblate.org/engage/tkcompanionapp/) tramite cui
si possono aggiungere lingue, completare e correggere le traduzioni, ...

### Altri contributi
> Puoi contribure anche tramite Liberapay:
>
> <a href="https://liberapay.com/marcoXbresciani/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
>
> <img alt="ricevuti via liberapay" src="https://img.shields.io/liberapay/receives/marcoXbresciani.svg?logo=liberapay">
> <img alt="sostenitori su liberapay" src="https://img.shields.io/liberapay/patrons/marcoXbresciani.svg?logo=liberapay">

## Per gli sviluppatori
Se sei uno sviluppatore software e vuoi contribuire a migliorare l'app,
sei benvenuto!

Trova l'ultimo NodeJS LTS corrente
([16.15.0](https://nodejs.org/download/release/latest-gallium/), al
2022-04-27) per il tuo sistema.
Prendi il codice sorgente clonando
[il repository](https://github.com/marcoXbresciani/TKCompanionApp).
Quindi vai nella cartella principale del progetto (contenente anche
questo stesso file che stai leggendo) ed esegui `npm install` e dovresti
vedere che tutte le dipendenze necessarie sono scaricate e installate
tramite il gestore di pacchetti NPM.

![dimensione del codice GitHub in byte](https://img.shields.io/github/languages/code-size/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)
![Attività di commit GitHub](https://img.shields.io/github/commit-activity/m/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)

Puoi anche eseguire `npm install -g npm-check-updates` per avere il tool
`ncu` disponibile globalmente, per controllare possibili aggiornamenti
di versioni delle dipendenze.

### Come iniziare
Dalla riga di comando avvia `npm start` che eseguirà lo strumento Metro
(non so cosa sia, in realtà, ma sembra necessario).

Da (un'altra) riga di comando avvia `npm run android` che preparerà e
avvierà la tua app, connettendoti al Metro-coso di cui sopra.

### Come compilare
Se vuoi creare l'applicazione per sistemi Android, vai nella cartella
`android` ed esegui `gradlew clean build` per generare gli APK.
Il file APK in modalità debug sarà disponibile nella cartella
`android\app\build\outputs\apk\debug` col nome `app-debug.apk`.
Il file APK in modalità rilascio sarà disponibile nella cartella
`android\app\build\outputs\apk\release` col nome `app-release.apk`.

#### Aggiornare NodeJS
Per aggiornare la versione di NodeJS all'ultima LTS disponibile, poiché
F-Droid gestisce autonomamente i rilasci non appena è disponibile una
nuova versione etichettata sul repository, è opportuno preparare la
versione senza il tag e creare una MR (richiesta di merge) su un fork
del repository F-Droid/Data di GitLab, con l'aggiornamento del file
metadata dell'applicazione e, solo dopo che è stata integrata la
modifica, rendere disponibile il tag sul repository del codice.
Cfr. https://gitlab.com/fdroid/fdroiddata/-/merge_requests/10826#note_895731121
Quindi:
* Eseguire la procedura che indica [Come rilasciare](#come-rilasciare),
  senza l'ultimo passo, quindi senza inviare il tag sul repository.
* aggiornare il
  [file metadata dell'app](https://gitlab.com/fdroid/fdroiddata/-/blob/master/metadata/name.bresciani.marco.tkcompanionapp.yml)
  su un fork del repository F-Droid/Data, aggiungendo una nuova
  versione, con l'aggiornamento della versione di NodeJS, il suo SHA,
  il numero di commit, ecc. guardando, per esempio, le differenze di
  NodeJS tra la versione 0.5.0 (50) e 0.6.0 (60) sul file metadata.
* Creare una MR sul repository F-Droid/Data originale con questa
  modifica dal fork.
* Una volta che la MR è stata approvata e integrata sul repository
  principale di F-Droid/Data, inviare il proprio tag in modo che il
  processo di build di F-Droid poss individuarlo e usarlo.

### Come rilasciare
Una volta che il codice è completo e testato, per rilasciare ci sono una
serie di passi da seguire.

**Lista di controllo pre-volo**: queste sono le attivitò da fare prima
di creare un nuovo rilascio.
> Dopo ogni passo è opportuno e consigliato committare e eseguire il
> push del codice al repository prinicipale.
1. Aggiornare [package.json](/package.json) col nuovo numero di versione
   ed eseguire `npm install`.
1. Verificare che [CHANGELOG.md](/CHANGELOG.md) contenga la relativa
   sezione numerata per il rilascio, spostando il contenuto relativo e
   rilevante da [Unreleased](CHANGELOG.md) alla suddetta sezione.
   E verificahe che il relativo link al tag sia aggiunto al titolo della
   specifica sezione.
1. Verificare che la cartella `fastlane` contenga i relativi file
   `changelogs` per lo specifico *codice* di versione, in tutte le
   lingue disponibili.
   Se necessario, aggiornare o aggiungere le relative schermate, in
   tutte le lingue disponibili.
1. Verificare che [Errors.md](Errors.md) contenga i problemi noti
   al momento, aggiungendo quelli rilevanti e rimuovendo quelli risolti.
   Se necessario, aprire dei problemi specifici sulla
   [GitHub Issues page](https://github.com/marcoXbresciani/TKCompanionApp/issues).
1. Aggiornare i valori di `versionCode` e `versionName` all'interno del
   campo `android.defaultConfig` del file
   [build.gradle](/android/app/build.gradle).
1. Aggiornare i valori di `CFBundleVersion` e
   `CFBundleShortVersionString` all'interno del campo `<dict>` del file
   [Info.plist](/ios/TKCompanionApp/Info.plist).
1. Verificare che [Architecture.md](architecture/Architecture.md)
   abbia le informazioni architetturali correttamente aggiornate, se
   necessario.
   Aggiungere i relativi documenti ADR nella cartella
   `docs/architecture/decisions`, se necessario, tracciandoli nel file
   [CHANGELOG.md](/CHANGELOG.md).
1. Verificare il soddisfacimento dei criteri
   [REUSE](https://reuse.software/) tramite il comando `reuse lint`.
1. *Se non si sta eseguendo un aggiornamento di Node*, etichettare il
   codice col numero di [versionamento (semantico)](https://semver.org/)
   relativo.

### Come testare localmente
Il file APK generato può essere (auto) firmato per consentirne
l'installazione su un dispositivo reale.
Lo strumento
[uber-apk-signer](https://github.com/patrickfav/uber-apk-signer) può
essere usato per firmare qualsiasi APK facilmente e velocemente.
