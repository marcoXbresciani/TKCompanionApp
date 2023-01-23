<!--
© 2021-2023 Marco Bresciani

Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided the copyright
notice and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2021-2023 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# Contribuire

Un piccolo e semplice aiuto per i praticanti di Toyota Kata.

L'obiettivo di quest'app è di diventare un pratico vademecum/manuale per
le persone interessate ad applicare il metodo scientifico tramite Toyota
Kata.

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
      1. [Come testare localmente](#come-testare-localmente)
   1. [Come rilasciare](#come-rilasciare)
      1. [Aggiornare NodeJS e associati](#aggiornare-nodejs-e-associati)
   1. [Come aggiungere una traduzione](#come-aggiungere-una-traduzione)

## Per tutti i contributi

Eccoci qui.
Quindi vuoi contribuire a questo progetto?
Grazie mille!

Non c'è ancora un codice di condotta del progetto, ma se questo progetto
si ingrandirà ne sarà subito adottato uno.

Nella cartella principale del progetto, il file
[README.md](../README.it.md) è un utile punto di partenza per capire
meglio questo progetto.
E, ovviamente, se non si dovesse capire... dimmelo, che si migliora!

In ogni caso, per qualsiasi domanda o richiesta, puoi contattarmi
tramite:

* [Delta Chat](https://delta.chat/en/) con l'indirizzo di posta
  elettronica [marco.530@outlook.it](mailto:marco.530@outlook.it).
* Come <a rel="me" href="https://fosstodon.org/@AAMfP">@AAMfP</a>, su
  [Fosstodon](https://fosstodon.org), un'istanza di
  [Mastodon](https://joinmastodon.org/).

Se non sviluppi software ma vuoi contribuire comunque a migliorare
quest'app, ogni contributo sarà ben accetto!

Non serve il codice, ma se vuoi aiutare per tradurre nella tua lingua (o
correggere il mio inglese, dato che non sono madrelingua), aggiungere
altro contenuto, suggerire miglioramenti grafici o di layout o altro
contributo che puoi dare, per favore
[crea una nuova attività](https://codeberg.org/marco.bresciani/TKCompanionApp/issues)
spiegando il problema che hai notato e la soluzione proposta.
Tramite la pagina
[Problemi](https://codeberg.org/marco.bresciani/TKCompanionApp/issues)
puoi:

* segnalare problemi (*bug*),
* proporre miglioramenti (*enhancement*),
* migliorare la documentazione (*documentation*,
* fare domande generiche (*question*)

e, in generale, contribuire al miglioramento del progetto.

Siamo qui per migliorare!

### Traduzioni

Puoi contribuire colle traduzioni dall'italiano (o dall'inglese) alla
tua lingua madre, qualsiasi essa sia.

[![Stato traduzione](https://hosted.weblate.org/widgets/tkcompanionapp/-/287x66-grey.png)](https://hosted.weblate.org/engage/tkcompanionapp/)

Le traduzioni sono gestite tramite il software e piattaforma libera
[Weblate](https://hosted.weblate.org/engage/tkcompanionapp/) con cui si
possono aggiungere lingue, completare e correggere le traduzioni, ...

### Altri contributi

Se proprio non riesci a decidere su come contribuire al progetto, puoi
sempre pensare alla via più semplice, puoi contribure tramite Liberapay:
> <a href="https://liberapay.com/marcoXbresciani/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
>
> <img alt="ricevuti via liberapay" src="https://img.shields.io/liberapay/receives/marcoXbresciani.svg?logo=liberapay">
> <img alt="sostenitori su liberapay" src="https://img.shields.io/liberapay/patrons/marcoXbresciani.svg?logo=liberapay">

In questo modo il progetto potrebbe riuscire a crescere un po' di più e,
magari, essere disponibile anche su altre piattaforme.

## Per gli sviluppatori

Se sviluppi software e vuoi contribuire a migliorare l'app, anche in
questo caso ogni contributo è ben accetto!

Trova l'ultimo NodeJS LTS corrente
([18.13.0](https://nodejs.org/dist/latest-hydrogen/), al
2023-01-12) per il tuo sistema.

Prenditi il codice sorgente clonando il
[repository](https://codeberg.org/marco.bresciani/TKCompanionApp).

Quindi vai nella cartella principale del progetto ed esegui
`npm install --force`.
Dovresti vedere che tutte le dipendenze necessarie sono state scaricate
e installate tramite il gestore di pacchetti NPM.

[![Manutenzione](https://badgen.net/badge/maintenance/yes/green)](https://codeberg.org/marco.bresciani/TKCompanionApp/commits/branch/master)
[![Github issues](https://img.shields.io/github/issues/marcoXbresciani/TKCompanionApp?logo=codeberg)](https://codeberg.org/marco.bresciani/TKCompanionApp/issues)
![dimensione del repository Github](https://img.shields.io/github/repo-size/marcoXbresciani/TKCompanionApp?logo=github)
![dimensione del codice GitHub in byte](https://img.shields.io/github/languages/code-size/marcoXbresciani/TKCompanionApp?logo=github)
![Attività di commit GitHub](https://img.shields.io/github/commit-activity/m/marcoXbresciani/TKCompanionApp?logo=github)

Viene usato l'attivatore pre-commit di `husky` per verificare la
consistenza delle convenzioni di scrittura del codice tramite il
pacchetto `ts-standard`, inserito nelle dipendenze di sviluppo.

Devi anche installare il REUSE helper tool (della Free Software
Foundation Europe) per assisterti nel raggiungimento e la conferma della
conformità [REUSE](https://reuse.software/).
Vedi le istruzioni d'installazione nel repository
[reuse](https://git.fsfe.org/reuse/tool).

Puoi anche eseguire `npm install -g npm-check-updates` per avere il tool
`ncu` disponibile globalmente, per controllare possibili aggiornamenti
di versioni delle dipendenze.
Non è usato molto però, al momento: è già disponibile `npm outdated`
come comando di NPM.

Per favore, cerca di prendere in considerazione lo stato corrente
dell'app e del suo codice, rispetto a quanto indicato dalle
[OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/en/projects/6084),
senza ridurre il livello di qualità già raggiunto.

### Come iniziare

Dalla riga di comando avvia `npm start` che eseguirà lo strumento Metro
(non so cosa sia, in realtà, ma sembra necessario).

Da (un'altra) riga di comando avvia `npm run android` che preparerà e
avvierà la tua app, connettendoti al Metro-coso di cui sopra.
Esegui ovviamente `npm run ios` se sei in un sistema Apple: io non ce
l'ho, non ho mai collaudato l'app su un Apple, quindi se vuoi farlo...
beh, prova!

### Come compilare

Se vuoi creare l'applicazione (il file APK da copiare ed eseguire sul
telefono, per intenderci!) per sistemi Android, vai nella cartella
`android` ed esegui `gradlew clean build` per generare gli APK.
Il file APK in modalità debug sarà disponibile nella cartella
`android\app\build\outputs\apk\debug` col nome `app-debug.apk`.
Il file APK in modalità rilascio sarà disponibile nella cartella
`android\app\build\outputs\apk\release` col nome `app-release.apk`.

Non ho idea di come si faccia la stessa cosa, per iOS.
Se lo scopri, fammi sapere che aggiorniamo questo documento!

#### Come testare localmente

Il file APK generato può essere (auto) firmato per consentirne
l'installazione su un dispositivo reale.
Lo strumento
[uber-apk-signer](https://github.com/patrickfav/uber-apk-signer) può
essere usato per firmare qualsiasi APK facilmente e velocemente.

### Come rilasciare

Una volta che il codice è completo e testato, per rilasciare ci sono una
serie di passi da seguire.

**Lista di controllo pre-volo**: queste sono le attività da fare prima
di creare un nuovo rilascio.
> Dopo ogni passo è opportuno e consigliato committare ed eseguire il
> push del codice al repository principale.

1. Aggiorna [package.json](/package.json) col nuovo numero di versione
   ed esegui `npm install`.
1. Verifica che [CHANGELOG.md](/CHANGELOG.md) contenga la relativa
   sezione numerata per il rilascio, spostando il contenuto relativo e
   rilevante da [Unreleased](CHANGELOG.md) alla suddetta sezione.
1. Verifica che i file `README.md` contengano l'ultimo tag (che stai
   rilasciando) nei badge,
1. Verifica che la cartella `fastlane` contenga i relativi file
   `changelogs` per lo specifico *codice* di versione, in tutte le
   lingue disponibili.
   Se necessario, aggiorna o aggiungi le relative schermate, in tutte le
   lingue disponibili.
1. Verifica che [Errors.md](Errors.md) contenga i problemi noti al
   momento, aggiungendo quelli rilevanti e rimuovendo quelli risolti.
   Se necessario, apri dei problemi specifici sulla
   pagina
   [Problemi](https://codeberg.org/marco.bresciani/TKCompanionApp/issues)
   di Codeberg.
1. Aggiorna i valori di `versionCode` e `versionName` all'interno del
   campo `android.defaultConfig` del file
   [build.gradle](/android/app/build.gradle).
1. Aggiorna i valori di `CFBundleVersion` e
   `CFBundleShortVersionString` all'interno del campo `<dict>` del file
   [Info.plist](/ios/TKCompanionApp/Info.plist).
1. Verifica che [Architecture.md](architecture/Architecture.md) abbia le
   informazioni architetturali correttamente aggiornate, se necessario.
   Aggiungi i relativi documenti ADR nella cartella
   `docs/architecture/decisions`, se necessario, tracciandoli nel file
   [CHANGELOG.md](/CHANGELOG.md).
1. Verifica il soddisfacimento dei criteri
   [REUSE](https://reuse.software/) tramite il comando `reuse lint`.
   Nota che questo comando è eseguito automaticamente prima di ogni
   commit.
1. Verifica il soddisfacimento dei criteri di pulizia del codice tramite
   il comando `npm run lint`.
   Nota che questo comando è eseguito automaticamente prima di ogni
   commit.
1. *Se non si sta eseguendo un aggiornamento di Node*, etichettare il
   codice col numero di [versionamento (semantico)](https://semver.org/)
   relativo.

#### Aggiornare NodeJS e associati

Per aggiornare la versione di NodeJS (o NPM, Java e, in generale, tutto
quanto collegato agli strumenti di build di F-Droid, specificati nel
file metadata), poiché F-Droid gestisce autonomamente i rilasci non
appena è disponibile una nuova versione etichettata sul repository, è
necessario preparare la versione *senza il tag* e creare una MR
(richiesta di merge) su un fork del repository `F-Droid/Data` di GitLab,
con l'aggiornamento del file metadata dell'applicazione e, solo dopo che
è stata integrata la modifica, rendere disponibile il tag sul repository
del codice.
Cfr. <https://gitlab.com/fdroid/fdroiddata/-/merge_requests/10826#note_895731121>
Quindi:

* Esegui la procedura che indica [Come rilasciare](#come-rilasciare),
  senza l'ultimo passo, quindi senza inviare il tag sul repository.
* aggiorna il tuo fork del repository F-Droid/Data colle ultime
  modifiche provenienti dal
  [repository principale](https://gitlab.com/fdroid/fdroiddata/),
  seguendo
  [queste istruzioni](https://forum.gitlab.com/t/refreshing-a-fork/32469/2)
  da linea di comando (la ricezione dei repository remoti non sembra
  disponibile su GitLab).
  Solo la prima volta, esegui
  `git remote add upstream https://gitlab.com/fdroid/fdroiddata.git` per
  aggiungere il repository sorgente per aggiornare facilmente.
  Poi, ogni volta che si deve aggiornare, bisogna eseguire questi
  comandi:

  ```shell
  git checkout master
  git fetch upstream
  git pull upstream master
  git push origin master
  ```

* aggiorna il
  [file metadata dell'app](https://gitlab.com/fdroid/fdroiddata/-/blob/master/metadata/name.bresciani.marco.tkcompanionapp.yml)
  su un branch non protetto del tuo fork del repository F-Droid/Data,
  aggiungendo una nuova versione, con l'aggiornamento della versione di
  NodeJS, il suo SHA, il numero di commit, ecc. guardando, per esempio,
  le differenze di NodeJS tra la versione 0.5.0 (50) e 0.6.0 (60) sul
  file metadata.
* Crea una MR sul repository `F-Droid/Data` originale con questa
  modifica dal fork.
* Una volta che la MR è stata approvata e integrata sul repository
  principale di F-Droid/Data, invia il tuo tag in modo che il processo
  di build di F-Droid poss individuarlo e usarlo.

Le stesse istruzioni valgono per l'aggiornamento delle versioni di JDK,
NPM o Android NDK.

### Come aggiungere una traduzione

Se compare la traduzione in una nuova lingua nelle Weblate del progetto,
dopo il commit di Weblate il nuovo file JSON colla traduzione sarà
disponibile nel
[repository](https://codeberg.org/marco.bresciani/TKCompanionApp/src/branch/master/app/i18n).

Non appena il file colla nuova lingua sarà disponibile, si può
aggiungere l'import del file all'interno del file
[i18n.ts](../app/i18n/i18n.ts) come per

```typescript
import {default as itIT} from './it-IT.json';
import {default as nbNO} from './nb-NO.json';
```

Poi bisogna aggiungere la nuova lingua tra le risorse disponibili come
in

```typescript
fr: {translation: fr},
'it-IT': {translation: itIT},
```

E, infine, aggiungere la lingua nella lista delle lingue di "fallback"
in caso di traduzioni mancanti.

```typescript
fallbackLng: ['en', 'it-IT', 'fr', 'de', 'nb-NO'],
```

Mentre nei casi precedenti è consigliabile mantenere l'ordinamento
alfabetico, in questo ho preferito usare quello che mi sembra essere un
ordinamento per uso/popolarità, mantenendo fissi inglese e italiano e
aggiungendo le altre lingue in base a quello che mi sembra essere un
buon ordine... spero!
