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
1. [For General Contributions](#for-general-contributions)
1. [For Software Developers](#for-software-developers)

## For General Contributions
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

### How to Test Locally
The generated APK shall be (self) signed to be able to install it on a
real device.
The [uber-apk-signer](https://github.com/patrickfav/uber-apk-signer)
tool can be used to quickly and easily sign any APK.
