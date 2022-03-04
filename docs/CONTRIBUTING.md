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
Thanks for being here!
If you want to contribute to the project, take a look at this file.
Any question, feel free to ask!

## Table of Contents
1. [For All Contributions](#for-all-contributions)
1. [For Software Developers](#for-software-developers)
   1. [How to Start](#how-to-start)
   1. [How to Build](#how-to-build)
   1. [How to Release](#how-to-release)
   1. [How to Test Locally](#how-to-test-locally)

## For All Contributions
If you're not a software developer, and want to contribute improving
this app, you're also more than very welcome!
You don't need the code, but if you want help translating in your
language (or fix my English, since I'm not a native speaker), add more
content, suggest graphical or layout improvement or whatever
contribution you can give, please [open a new
issue](https://github.com/marcoXbresciani/TKCompanionApp/issues)
explaining the problem you've noticed and your proposed solution.

We're here to improve!

## For Software Developers
If you are a software developer and want to contribute improving this
app, you're more than very welcome!
Find the latest current LTS NodeJS
([16.14.0](https://nodejs.org/download/release/latest-gallium/), as of
2022-03-03) for your system.
Grab the source code by cloning
[the repository](https://github.com/marcoXbresciani/TKCompanionApp).
Then go to this project main folder (also containing this same file
you're reading) and run `npm install` and you should see all the needed
dependencies downloaded and installed through NPM package manager.

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)

### How to Start
From command line launch `npm start` that will run Metro tool (don't
know what it actually is, but seems something needed).

From (another) command line launch `npm run android` that will prepare
and launch your app, connecting to the Metro thing above.

### How to Build

### How to Release
Once the code is completed and tested, in order to release there are a
bit of steps to follow.

**Preflight checklist**: these are the tasks to do before creating a new
release:
1. Update [package.json](package.json) with the new version number and
   run `npm install`.
1. Verify that [CHANGELOG.md](CHANGELOG.md) contains the properly
   numbered section for the upcoming release, moving the related and
   relevant [Unreleased](CHANGELOG.md) content to such section.
   And verify that the related tag link is available at the end of the
   file, together with all other already existing tag links.
1. Verify that `fastlane` folder contain the proper `changelogs` files
   for the upcoming version *code* in all available languages.
   If needed, also updates or add relevant screenshots in all available
   languages.
1. Verify that [Errors.md](/docs/Errors.md) contains the currently known
   issues by adding those relevant and removing those solved.
   If needed, also open specific issues on the project
   [GitHub Issues page](https://github.com/marcoXbresciani/TKCompanionApp/issues).
1. Update the `versionCode` and `versionName` values inside the
   `android.defaultConfig` field of file
   [build.gradle](/android/app/build.gradle).
1. Update the `CFBundleVersion` and `CFBundleShortVersionString` values
   inside the `<dict>` field of file
   [Info.plist](/ios/TKCompanionApp/Info.plist).
1. Verify that [Architecture.md](/docs/architecture/Architecture.md)
   has the latest architectural information properly updated, if needed.
   Add relevant ADR documents in the `docs/architecture/decisions`
   folder if needed, tracking them in the [CHANGELOG.md](CHANGELOG.md)
   file.
1. Verify [REUSE](https://reuse.software/) compliance through
   `reuse lint` command.
1. Commit and tag with the corresponding
   [(semantic) version](https://semver.org/) number.
1. Push the code.

### How to Test Locally
The generated APK shall be (self) signed to be able to install it on a
real device.
The [uber-apk-signer](https://github.com/patrickfav/uber-apk-signer)
tool can be used to quickly and easily sign any APK.
