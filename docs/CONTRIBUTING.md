<!--
© 2021-2022 Marco Bresciani

Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided the copyright
notice and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2021-2022 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# CONTRIBUTING
A short and small helper for Toyota Kata practitioners.

Goal of this app is to be a practical vademecum/handbook for those
interested in applying scientific thinking through Toyota Kata.

Thanks for being here!
If you want to contribute to the project, take a look at this file.
Any question, feel free to ask!

## Table of Contents
1. [For All Contributions](#for-all-contributions)
   1. [Translations](#translations)
   1. [Other Contributions](#other-contributions)
1. [For Software Developers](#for-software-developers)
   1. [How to Start](#how-to-start)
   1. [How to Build](#how-to-build)
      1. [How to Test Locally](#how-to-test-locally)
   1. [How to Release](#how-to-release)
      1. [Updating NodeJS (& Co.)](#updating-nodejs--co)
   1. [How to Add a New Translation](#how-to-add-a-new-translation)

## For All Contributions
Here we are.
So you want to contribute to this project?
Thanks a lot!

There's no code of conduct, yet, but if this project will grow up,
something will be introduced.

In project main folder, the file [README.md](../README.md) is a useful
starting point to better understand this project.
Obviously, if you don't understand it... let me know, so that we can
improve it!

Anyway, for any question or request you can contact me through:
* [Delta Chat](https://delta.chat/en/) with the email address
  [marco.530@outlook.it](mailto:marco.530@outlook.it).
* as <a rel="me" href="https://fosstodon.org/@AAMfP">@AAMfP</a> on
  [Fosstodon](https://fosstodon.org), a
  [Mastodon](https://joinmastodon.org/) instance.

If you're not a software developer, and want to contribute improving
this app, you're welcome!

You don't need the code, but if you want help translating in your
native language (or fix my English, since I'm not a native speaker), add
more content, suggest graphical or layout improvement or whatever
contribution you can give, please
[open a new issue](https://github.com/marcoXbresciani/TKCompanionApp/issues)
explaining the problem you've noticed and your proposed solution.
Through the
[issues](https://github.com/marcoXbresciani/TKCompanionApp/issues) page
you can
* notify problems (_bug_),
* propose improvements (_enhancement_),
* improve descriptions (_documentation_),
* ask questions (_question_)

and, generally speaking, contribute to improve this project.

We're here to improve!

### Translations
You can contribute with translations from English (or Italian) to your
native language, whichever it is.

[![Stato traduzione](https://hosted.weblate.org/widgets/tkcompanionapp/-/287x66-white.png)](https://hosted.weblate.org/engage/tkcompanionapp/)

Translations are managed through the free software and platform
[Weblate](https://hosted.weblate.org/engage/tkcompanionapp/) through
which you can add languages, complete and correct translations, ...

### Other Contributions
If you can't decide on how to contribute to this project, you can always
choose the easier way, contributing through Liberapay:
> <a href="https://liberapay.com/marcoXbresciani/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
>
> <img alt="receives on liberapay" src="https://img.shields.io/liberapay/receives/marcoXbresciani.svg?logo=liberapay">
> <img alt="patrons on liberapay" src="https://img.shields.io/liberapay/patrons/marcoXbresciani.svg?logo=liberapay">

In this way, the project might be able to grow and even be available on
other platform.

## For Software Developers
If you are a software developer and want to contribute improving this
app, you're welcome!

Find the latest current LTS NodeJS
([16.17.0](https://nodejs.org/download/release/latest-gallium/), as of
2022-08-16) for your system.

Grab the source code by cloning
[the repository](https://github.com/marcoXbresciani/TKCompanionApp).

Then go to this project main folder and run `npm install`.
You should see all the needed dependencies downloaded and installed
through NPM package manager.

[![Maintenance](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODAuMDEiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxODAuMDEgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjQuOTEiIGhlaWdodD0iMzUiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIxMjIuOTEiIHk9IjAiIHdpZHRoPSI1Ny4wOTk5OTk5OTk5OTk5OTQiIGhlaWdodD0iMzUiIGZpbGw9IiM4RkM5NjUiLz48cGF0aCBjbGFzcz0ic3ZnX190ZXh0IiBkPSJNMTUuNjkgMjJMMTQuMjIgMjJMMTQuMjIgMTMuNDdMMTYuMTQgMTMuNDdMMTguNjAgMjAuMDFMMjEuMDYgMTMuNDdMMjIuOTcgMTMuNDdMMjIuOTcgMjJMMjEuNDkgMjJMMjEuNDkgMTkuMTlMMjEuNjQgMTUuNDNMMTkuMTIgMjJMMTguMDYgMjJMMTUuNTUgMTUuNDNMMTUuNjkgMTkuMTlMMTUuNjkgMjJaTTI4LjQ5IDIyTDI2Ljk1IDIyTDMwLjE3IDEzLjQ3TDMxLjUwIDEzLjQ3TDM0LjczIDIyTDMzLjE4IDIyTDMyLjQ5IDIwLjAxTDI5LjE4IDIwLjAxTDI4LjQ5IDIyWk0zMC44MyAxNS4yOEwyOS42MCAxOC44MkwzMi4wNyAxOC44MkwzMC44MyAxNS4yOFpNNDAuMjUgMjJMMzguNzcgMjJMMzguNzcgMTMuNDdMNDAuMjUgMTMuNDdMNDAuMjUgMjJaTTQ2LjU0IDIyTDQ1LjA2IDIyTDQ1LjA2IDEzLjQ3TDQ2LjU0IDEzLjQ3TDUwLjM2IDE5LjU0TDUwLjM2IDEzLjQ3TDUxLjgzIDEzLjQ3TDUxLjgzIDIyTDUwLjM1IDIyTDQ2LjU0IDE1Ljk1TDQ2LjU0IDIyWk01OC4yNSAxNC42Nkw1NS42MSAxNC42Nkw1NS42MSAxMy40N0w2Mi4zOCAxMy40N0w2Mi4zOCAxNC42Nkw1OS43MiAxNC42Nkw1OS43MiAyMkw1OC4yNSAyMkw1OC4yNSAxNC42NlpNNjYuOTIgMjJMNjUuMzggMjJMNjguNjAgMTMuNDdMNjkuOTMgMTMuNDdMNzMuMTYgMjJMNzEuNjEgMjJMNzAuOTEgMjAuMDFMNjcuNjEgMjAuMDFMNjYuOTIgMjJaTTY5LjI2IDE1LjI4TDY4LjAyIDE4LjgyTDcwLjUwIDE4LjgyTDY5LjI2IDE1LjI4Wk03OC42OCAyMkw3Ny4yMCAyMkw3Ny4yMCAxMy40N0w3OC42OCAxMy40N0w3OC42OCAyMlpNODQuOTcgMjJMODMuNDkgMjJMODMuNDkgMTMuNDdMODQuOTcgMTMuNDdMODguNzggMTkuNTRMODguNzggMTMuNDdMOTAuMjUgMTMuNDdMOTAuMjUgMjJMODguNzcgMjJMODQuOTcgMTUuOTVMODQuOTcgMjJaTTEwMC41NyAyMkw5NC45OSAyMkw5NC45OSAxMy40N0wxMDAuNTMgMTMuNDdMMTAwLjUzIDE0LjY2TDk2LjQ4IDE0LjY2TDk2LjQ4IDE3LjAyTDk5Ljk4IDE3LjAyTDk5Ljk4IDE4LjE5TDk2LjQ4IDE4LjE5TDk2LjQ4IDIwLjgyTDEwMC41NyAyMC44MkwxMDAuNTcgMjJaTTEwNy4yMiAyMkwxMDQuNzcgMjJMMTA0Ljc3IDEzLjQ3TDEwNy4yOSAxMy40N1ExMDguNDIgMTMuNDcgMTA5LjI5IDEzLjk3UTExMC4xNyAxNC40OCAxMTAuNjUgMTUuNDBRMTExLjEzIDE2LjMzIDExMS4xMyAxNy41MkwxMTEuMTMgMTcuNTJMMTExLjEzIDE3Ljk1UTExMS4xMyAxOS4xNiAxMTAuNjUgMjAuMDhRMTEwLjE2IDIxLjAwIDEwOS4yNyAyMS41MFExMDguMzggMjIgMTA3LjIyIDIyTDEwNy4yMiAyMlpNMTA2LjI1IDE0LjY2TDEwNi4yNSAyMC44MkwxMDcuMjIgMjAuODJRMTA4LjM4IDIwLjgyIDEwOS4wMSAyMC4wOVExMDkuNjMgMTkuMzYgMTA5LjY0IDE3Ljk5TDEwOS42NCAxNy45OUwxMDkuNjQgMTcuNTJRMTA5LjY0IDE2LjEzIDEwOS4wNCAxNS40MFExMDguNDQgMTQuNjYgMTA3LjI5IDE0LjY2TDEwNy4yOSAxNC42NkwxMDYuMjUgMTQuNjZaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTEzOS4yMiAxOC45NUwxMzYuMDIgMTMuNjBMMTM4LjUzIDEzLjYwTDE0MC41MiAxNi45NEwxNDIuNTEgMTMuNjBMMTQ0LjgxIDEzLjYwTDE0MS42MCAxOC45OUwxNDEuNjAgMjJMMTM5LjIyIDIyTDEzOS4yMiAxOC45NVpNMTU1LjY0IDIyTDE0OC45MCAyMkwxNDguOTAgMTMuNjBMMTU1LjQ5IDEzLjYwTDE1NS40OSAxNS40NEwxNTEuMjUgMTUuNDRMMTUxLjI1IDE2Ljg1TDE1NC45OSAxNi44NUwxNTQuOTkgMTguNjNMMTUxLjI1IDE4LjYzTDE1MS4yNSAyMC4xN0wxNTUuNjQgMjAuMTdMMTU1LjY0IDIyWk0xNTkuODYgMjEuMjRMMTU5Ljg2IDIxLjI0TDE2MC42NCAxOS40OVExNjEuMjAgMTkuODYgMTYxLjk1IDIwLjA5UTE2Mi42OSAyMC4zMiAxNjMuNDEgMjAuMzJMMTYzLjQxIDIwLjMyUTE2NC43OCAyMC4zMiAxNjQuNzggMTkuNjRMMTY0Ljc4IDE5LjY0UTE2NC43OCAxOS4yOCAxNjQuMzkgMTkuMTFRMTY0LjAwIDE4LjkzIDE2My4xNCAxOC43NEwxNjMuMTQgMTguNzRRMTYyLjE5IDE4LjUzIDE2MS41NSAxOC4zMFExNjAuOTIgMTguMDYgMTYwLjQ2IDE3LjU1UTE2MC4wMSAxNy4wMyAxNjAuMDEgMTYuMTZMMTYwLjAxIDE2LjE2UTE2MC4wMSAxNS4zOSAxNjAuNDMgMTQuNzdRMTYwLjg1IDE0LjE1IDE2MS42OCAxMy43OVExNjIuNTIgMTMuNDMgMTYzLjcyIDEzLjQzTDE2My43MiAxMy40M1ExNjQuNTUgMTMuNDMgMTY1LjM1IDEzLjYyUTE2Ni4xNiAxMy44MCAxNjYuNzggMTQuMTdMMTY2Ljc4IDE0LjE3TDE2Ni4wNCAxNS45M1ExNjQuODQgMTUuMjggMTYzLjcxIDE1LjI4TDE2My43MSAxNS4yOFExNjMuMDAgMTUuMjggMTYyLjY4IDE1LjQ5UTE2Mi4zNiAxNS43MCAxNjIuMzYgMTYuMDRMMTYyLjM2IDE2LjA0UTE2Mi4zNiAxNi4zNyAxNjIuNzQgMTYuNTRRMTYzLjEzIDE2LjcxIDE2My45NyAxNi44OUwxNjMuOTcgMTYuODlRMTY0Ljk0IDE3LjEwIDE2NS41NyAxNy4zM1ExNjYuMjAgMTcuNTYgMTY2LjY2IDE4LjA3UTE2Ny4xMiAxOC41OCAxNjcuMTIgMTkuNDZMMTY3LjEyIDE5LjQ2UTE2Ny4xMiAyMC4yMSAxNjYuNzAgMjAuODNRMTY2LjI4IDIxLjQ0IDE2NS40NCAyMS44MFExNjQuNjAgMjIuMTcgMTYzLjQwIDIyLjE3TDE2My40MCAyMi4xN1ExNjIuMzggMjIuMTcgMTYxLjQyIDIxLjkyUTE2MC40NiAyMS42NyAxNTkuODYgMjEuMjRaIiBmaWxsPSIjRkZGRkZGIiB4PSIxMzUuOTEiLz48L3N2Zz4=)](https://codeberg.org/marco.bresciani/TKCompanionApp/commits/branch/master)
![GitHub issues](https://img.shields.io/github/issues/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)

Also run `npm install -g ts-standard` to make the `ts-standard` command
available into your system.
This is used in `husky` pre-commit hook to verify the coding conventions
consistency.

You might want to also run `npm install -g npm-check-updates` to make
the `ncu` tool globally available, to check possible dependencies
versions updates.
Not much used, though: `npm outdated` is also available as NPM command.

You also need to install REUSE helper tool (by Free Software Foundation
Europe) to assist with achieving and confirming
[REUSE](https://reuse.software/) compliance.
See installation instructions at
[reuse](https://git.fsfe.org/reuse/tool) repository.

Please take note of the current status and improve the app code an
content based on the
[OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/en/projects/6084),
without reducing the already achieved level of quality.

### How to Start
From command line launch `npm start` that will run Metro tool (don't
know what it actually is, but seems something needed).

From (another) command line launch `npm run android` that will prepare
and launch your app, connecting to the Metro thing above.
Run `npm run ios` if you're on an Apple system: I don't have one, never
tried the app on an Apple, so if you want to do that... feel free to
try!

### How to Build
If you're going to build for Android systems, go in the `android` folder
and run `gradlew clean build` for generating the APKs.
The debug mode APK will be available in
`android\app\build\outputs\apk\debug` folder as `app-debug.apk`.
The release mode APK will be available in
`android\app\build\outputs\apk\release` folder as `app-release.apk`.

I actually have no idea on how to do that, for iOS.
If you find it out, let me know so that we can update this document!

#### How to Test Locally
The generated APK (see [How to Build](#how-to-build)) shall be (self)
signed to be able to install it on a real device.
The [uber-apk-signer](https://github.com/patrickfav/uber-apk-signer)
tool can be used to quickly and easily sign any APK.

### How to Release
Once the code is completed and tested, in order to release there are a
bit of steps to follow.

**Preflight checklist**: these are the tasks to do before creating a new
release.
> After each step is suggested to commit and push the code on main
> repository.
1. Update [package.json](/package.json) with the new version number and
   run `npm install`.
1. Verify that [CHANGELOG.md](/CHANGELOG.md) contains the properly
   numbered section for the upcoming release, moving the related and
   relevant [Unreleased](/CHANGELOG.md) content to such section.
   And verify that the related tag link is added to the specific section
   header.
1. Verify that `fastlane` folder contain the proper `changelogs` files
   for the upcoming version *code* in all available languages.
   If needed, also updates or add relevant screenshots in all available
   languages.
1. Verify that [Errors.md](Errors.md) contains the currently known
   issues by adding those relevant and removing those solved.
   If needed, also open specific issues on the project
   [GitHub Issues page](https://github.com/marcoXbresciani/TKCompanionApp/issues).
1. Update the `versionCode` and `versionName` values inside the
   `android.defaultConfig` field of file
   [build.gradle](/android/app/build.gradle).
1. Update the `CFBundleVersion` and `CFBundleShortVersionString` values
   inside the `<dict>` field of file
   [Info.plist](/ios/TKCompanionApp/Info.plist).
1. Verify that [Architecture.md](architecture/Architecture.md)
   has the latest architectural information properly updated, if needed.
   Add relevant ADR documents in the `docs/architecture/decisions`
   folder if needed, tracking them in the [CHANGELOG.md](/CHANGELOG.md)
   file.
1. Verify [REUSE](https://reuse.software/) compliance through
   `reuse lint` command.
1. Verify clean code criteria through `npm run lint` command.
   Please note this command is also automatically launched before each
   commit.
1. If you're not updating Node*, tag with the corresponding
   [(semantic) version](https://semver.org/) number.

#### Updating NodeJS (& Co.)
To update the version of NodeJS (or NPM, Java and, generally, everything
related to building tools used by F-Droid building system through
metadata file), it's better to prepare the version without the tag and
create an MR (merge request) on a fork of the GitLab F-Droid/Data
repository, with the update of the application metadata file and, only
after the merge has been added, make the tag available on the code
repository.
This is because F-Droid independently manages releases as soon as one is
available (labeled) on the repository.
See https://gitlab.com/fdroid/fdroiddata/-/merge_requests/10826#note_895731121
So:
* Execute the procedure on [How to release](#how-to-release), without
  the last step, so without sending the tag to the repository.
* update your fork of the F-Droid/Data repository with the latest
  modifications from the
  [upstream repository](https://gitlab.com/fdroid/fdroiddata/),
  following
  [these instructions](https://forum.gitlab.com/t/refreshing-a-fork/32469/2)
  through command line (pull mirroring seems not available on GitLab).
  Only the first time, execute
  `git remote add upstream https://gitlab.com/fdroid/fdroiddata.git` to
  add the upstream source repository to easily mirror it.
  Then, every time you need to update it, just run these commands:
  ```shell
  git checkout master
  git fetch upstream
  git pull upstream master
  git push origin master
  ```
* update the
  [app metadata file](https://gitlab.com/fdroid/fdroiddata/-/blob/master/metadata/name.bresciani.marco.tkcompanionapp.yml)
  on a(n unprotected) branch of your fork of the F-Droid/Data
  repository, adding a new version, with  the update of the version of
  NodeJS, its SHA, commit number, etc. looking, for example, at the
  NodeJS differences between the version 0.5.0 (50) and 0.6.0 (60) on
  the metadata file.
* Create an MR on the original F-Droid/Data repository with this
  modification from the fork.
* Once the MR has been approved and integrated into the main
  F-Droid/Data repository, send the tag to the repository, so that
  F-Droid build process can locate and use it.

Same instructions stand for updating JDK, NPM or Android NDK versions.

### How to Add a New Translation
If there's a new translated language in the project Weblate page, after
Weblate commit the new file JSON will be available in the
[repository](https://github.com/marcoXbresciani/TKCompanionApp).

As soon as the new language file will be available, it's possible to
import it in the [i18n.ts](../app/i18n/i18n.ts) file, as in
```typescript
import {default as itIT} from './it-IT.json';
import {default as nbNO} from './nb-NO.json';
```
Then you have to add the new language in the available resoruces as done
in
```typescript
    fr: {translation: fr},
    'it-IT': {translation: itIT},
```
And, add the language in the list of fallback languages when
translations are missing.
```typescript
fallbackLng: ['en', 'it-IT', 'fr', 'de', 'nb-NO'],
```
While in the previous cases it is advisable to keep the alphabetical
order, in this situation I preferred to use what seems to me to be a
sorting by use / popularity, keeping English and Italian fixed and
adding the other languages based on what I think it's a good order ...
or so I hope!
