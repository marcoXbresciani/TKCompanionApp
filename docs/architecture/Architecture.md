<!--
© 2021-2022 Marco Bresciani

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty provided the copyright notice
and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2021-2022 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# Architecture
The app is using [React Native](https://reactnative.dev/) framework to
possibly be portable on more platforms.
Specifically, Android and iOS.

The actual code is written in
[TypeScript](https://www.typescriptlang.org/), and it's fully available
in the `app` folder.
The `assets` and `i18n` folders have additional resources needed for the
project.

Not much of an "architecture":
* `assets` folder contains static things like fonts and images.
* `components` folder contains components that are generally used in all
  pages, or in at least a couple of them.
* `config` folder contains configuration items and options.
* `i18n` contains the translations.
* in the `pages` folder there are the actual pages, using sub-folders if
  a page contains more than one main component.
* `utils` folder is the same as usual: those are not React components
  but functions and things that are generally used.

Local data (app theme, language, ...) are saved/stored locally on your
device only, in an encrypted form, through
[react-native-encrypted-storage](https://github.com/emeraldsanto/react-native-encrypted-storage).
