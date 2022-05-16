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
this app, you're welcome!
You don't need the code, but if you want help translating in your
language (or fix my English, since I'm not a native speaker), add more
content, suggest graphical or layout improvement or whatever
contribution you can give, please [open a new
issue](https://github.com/marcoXbresciani/TKCompanionApp/issues)
explaining the problem you've noticed and your proposed solution.

We're here to improve!

> You can even contribute through Liberapay:
>
> <a href="https://liberapay.com/marcoXbresciani/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
>
> <img alt="receives on liberapay" src="https://img.shields.io/liberapay/receives/marcoXbresciani.svg?logo=liberapay">
> <img alt="patrons on liberapay" src="https://img.shields.io/liberapay/patrons/marcoXbresciani.svg?logo=liberapay">

## For Software Developers
If you are a software developer and want to contribute improving this
app, you're welcome!

Find the latest current LTS NodeJS
([16.15.0](https://nodejs.org/download/release/latest-gallium/), as of
2022-04-27) for your system.
Grab the source code by cloning
[the repository](https://github.com/marcoXbresciani/TKCompanionApp).
Then go to this project main folder (also containing this same file
you're reading) and run `npm install` and you should see all the needed
dependencies downloaded and installed through NPM package manager.

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/marcoXbresciani/TKCompanionApp?logo=github&style=plastic)

You might want to also run `npm install -g npm-check-updates` to make
the `ncu` tool globally available, to check possible dependencies
versions updates.

### How to Start
From command line launch `npm start` that will run Metro tool (don't
know what it actually is, but seems something needed).

From (another) command line launch `npm run android` that will prepare
and launch your app, connecting to the Metro thing above.

### How to Build

#### Updating NodeJS
To update the version of NodeJS to the latest available LTS, it's better
to prepare the version without the tag and create an MR (merge request)
on a fork of the GitLab F-Droid/Data repository, with the update of the
application metadata file and, only after the merge has been added, make
the tag available on the code repository.
This is because F-Droid independently manages releases as soon as one is
available (labeled) on the repository.
See https://gitlab.com/fdroid/fdroiddata/-/merge_requests/10826#note_895731121
So:
* Execute the procedure on [How to release](#how-to-release), without
  the last step, so without sending the tag to the repository.
* update the
  [app metadata file](https://gitlab.com/fdroid/fdroiddata/-/blob/master/metadata/name.bresciani.marco.tkcompanionapp.yml)
  on a fork of the F-Droid/Data repository, adding a new version, with
  the update of the version of NodeJS, its SHA, commit number, etc.
  looking, for example, at the NodeJS differences between the version
  0.5.0 (50) and 0.6.0 (60) on the metadata file.
* Create an MR on the original F-Droid/Data repository with this
  modification from the fork.
* Once the MR has been approved and integrated into the main
  F-Droid/Data repository, send the tag to the repository, so that
  F-Droid build process can locate and use it.

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
1. Commit and tag with the corresponding
   [(semantic) version](https://semver.org/) number.
1. Push the code.

### How to Test Locally
The generated APK shall be (self) signed to be able to install it on a
real device.
The [uber-apk-signer](https://github.com/patrickfav/uber-apk-signer)
tool can be used to quickly and easily sign any APK.
