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

### Come testare localmente
Il file APK generato può essere (auto) firmato per consentirne
l'installazione su un dispositivo reale.
Lo strumento
[uber-apk-signer](https://github.com/patrickfav/uber-apk-signer) può
essere usato per firmare qualsiasi APK facilmente e velocemente.
