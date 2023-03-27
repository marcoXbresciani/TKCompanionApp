<!--
© 2021-2023 Marco Bresciani

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty provided the copyright notice
and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2021-2023 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

```text
© 2021-2023 Marco Bresciani

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty provided the copyright notice
and this notice are preserved.
This file is offered as-is, without any warranty.
```

## [Unreleased](https://codeberg.org/marco.bresciani/TKCompanionApp/src/branch/master/)

### Added

* Welcome/splash dialog on first time application open.
  Same content of new "Contact" menu entry.
* Daily reminder for remembering to add the PDSA.
* Reworked navigation to avoid page caching.
* App usage badges (Badges page).

### Changed

### Fixed

### Security

## [6.4.1](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/6.4.1) - 2023-03-28

### Changed

* Events list removed from I18N.
* Updated Events.

## [6.4.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/6.4.0) - 2023-03-23

### Added

* New Events page with currently known events.

### Changed

* Update to Node LTS 18.15.0.
* Simplified font management.

## [6.3.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/6.3.0) - 2023-03-20

### Added

* Alert splash for scam on Google Play.

### Removed

* Documentation and files in Italian.
  Removed to avoid misalignment with English.

## [6.2.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/6.2.0) - 2023-02-03

### Removed

* Theme setting removed: the app will start automagically with current
  device theme.

## [6.1.1](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/6.1.1) - 2023-01-05

### Added

* Introduce error message when saving PDSA entry.

### Changed

* Simplify language settings icon(s).
* Wrap Home Page in PageContainer

### Fixed

* [#23 Restore 5Q card in Home Page/Screen](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/23)

## [6.1.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/6.1.0)

### Added

* Draft example for Badges page.

### Changed

* Small layout and graphical reviews.
* Rework for bug #6.

## [6.0.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/6.0.0) - 2022-12-12

### Added

* New [ADR-12](docs/architecture/decisions/012-async-storage.md)
  introduced, to deprecate and cancel
  [ADR-9](docs/architecture/decisions/009-encrypted-storage.md).

### Changed

* Main repository is now [Codeberg](https://codeberg.org/) and the
  reference URL is [TKCompanionApp](https://codeberg.org/marco.bresciani/TKCompanionApp).
* Update dependencies (React Native, RN Calendars, ...).
* Update README files badges.
  Goal is to remove dependency from external services, where possible.
* Refactored translations and naming.

## [5.0.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/5.0.0) - 2022-11-04

### Added

* Introduce Carnegie Hall joke.

### Changed

* Update React Native Paper to v5(RC9).
* Upgraded Gradle Wrapper with SHA256 checksum.
* Home page, 5Q card, Contact dialog, About, ... many screens have been
  reviewed and simplified.

### Removed

* Simplification lead to unused components that has been removed.

## [4.0.1](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/4.0.1) - 2022-10-04

### Fixed

* Version 4.0.0 crashes
  [#19](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/19)

## [4.0.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/4.0.0) - 2022-09-30

### Added

### Changed

* React Native version 0.68.3.
* NPM version 8.19.2.
* Android NDK r23c
* OpenSSF Best Practices moved from 88% to 90% (see
  [#11](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/11)).
* Updated NodeJS to LTS v16.17.1.
* Rework of `nb_NO.json` translation file to use proper standard with
  `nb-NO.json` name.

### Removed

* Unused fonts removed.

### Fixed

* App crashes when opening calendar in a language different from Italian bug
  [#14](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/14)
* Wrong dark/light mode and default language
  [#17](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/17)

### Security

## [3.1.2](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/3.1.2) - 2022-09-13

### Removed

* Briar link.

### Fixed

* Fix bugs #14 and #15 for calendar translations.

## [3.1.1](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/3.1.1) - 2022-08-26

### Added

* Marker for saved dates

### Changed

* Update pre-commit hook
* Update security file
* Update Norwegian translation

## [3.1.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/3.1.0) - 2022-07-21

### Added

* Basic daily PDSA with save, read and delete.
  Now you can choose a day, read/write/modify your own PDSA notes, save
  or delete them or even delete the whole day, if needed.
  Plus a button for the current day.

### Changed

* Updated NodeJS to LTS v16.16.0.

## [3.0.1](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/3.0.1) - 2022-07-07

### Added

* Alert on calendar click for PDSA WIP status page.

## [3.0.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/3.0.0) - 2022-06-28

### Added

* Save and restore selected language.
  If your phone is in Italian language, but you choose English language
  for this application, the English language will be saved to be later
  restored on application reuse.
  And viceversa.
* New coaching model page added.

### Changed

* Download icon buttons added to the documents selector page.
* 5Q card revamp in the original style, placed in home page.

### Removed

* Downloads page removed.

### Fixed

* Add support for ts-standard
  [#10](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/10).
* JSON Syntax Error bug
  [#13](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/13).

### Security

* OpenSSF Best Practices moved from 82% to 88% (see
  [#11](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/11)).

## [2.2.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/2.2.0) - 2022-06-15

### Added

* Introduce French translation (thanks
  [J. Lavoie (@Edanas)](https://hosted.weblate.org/user/Edanas/)!)
* Introduce Norwegian Bokmål translation (thanks
  [Allan Nordhøy (@comradekingu)](https://github.com/comradekingu)!)
* Introduce German translation (thanks
  [Amy Dora Lang (@amydoralang)](https://hosted.weblate.org/user/amydoralang/)!)
* [ADR-010](/docs/architecture/decisions/010-i18n-wrapping.md) for
  using the I18N APIs in a more wrapped and safer way.
* [ADR-011](/docs/architecture/decisions/011-openssf-best-practices.md)
  for complying with OpenSSF Best Practices, when working on this app.

### Changed

* Internal improvement on I18N management.
* Internal improvement on bottom navigation management.
* Update to latest Node LTS: 16.15.1.
* Proper attributions for translations licences.

### Fixed

* Introduce translator(s) field(s) for fixing
  [#9](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/9).
* Bug "Download links error"
  [#8](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/8).
* Bug "Change download links to TK website"
  [#12](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/12).

### Security

## [2.1.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/2.1.0) - 2022-05-16

### Added

* [ADR-009](/docs/architecture/decisions/009-encrypted-storage.md) for
  choosing the way to save settings and, possibly, other app data.
* Save and restore selected theme.
  If your phone is in light mode, but you choose dark/night mode for
  this application, the dark/night mode will be saved to be later
  restored on application reuse.
  And viceversa.
* Selected language saved: now if you change language, your selection is
  saved, in encrypted form, to be reused when reopening the application.
  The selected language is not yet restored on application reuse.
* Basic structure and layout for PDSA page.
* [Delta Chat](https://delta.chat/en/) link for contact.

## [2.0.2](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/2.0.2) - 2022-05-05

### Added

* [Briar](https://briarproject.org/) link for contact.
* [Donate](https://liberapay.com/marcoXbresciani/donate) button in
  F-Droid
  [app page](https://f-droid.org/it/packages/name.bresciani.marco.tkcompanionapp/).
* Proper error management for `Linking` functionality when downloading
  files.
  Not a solution for issue
  [#8](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/8), but
  still a possible way to, at least, catch errors.
  Introducing `rn-fetch-blob` is difficult, due to old toolchain in
  React Native, also I prefer to let the phone decide how to manage
  those links.

### Changed

* News "Docs" icon.

## [2.0.1](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/2.0.1) - 2022-04-27

### Changed

* Updated dependencies versions.

## [2.0.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/2.0.0) - 2022-04-21

### Added

* [ADR-008](/docs/architecture/decisions/008-group-contents.md) for
  grouping the whole set of readable documents, including the 5Q card,
  in the "Documents" page.
* Introduce menu in "app bar" for about, copyright and settings.

### Changed

* Move about, copyright and settings to home "app bar".
* Move 5Q Card and Four Steps to Docs.

### Removed

* Puzzle game.

## [1.1.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/1.1.0) - 2022-04-14

### Added

* Introduce Download icon in READMEs legend.
* Introduce simplest puzzle game.

### Changed

* Copyright page links.

## [1.0.1](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/1.0.1) - 2022-04-11

### Changed

* Improve `package.json` information.

## [1.0.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/1.0.0) - 2022-04-08

### Added

* "Downloads" page, to collect all downloadable items (from The Toyota
  Kata Website or, possibly, other sources)

### Changed

* Collect docs and texts in "Docs" page.

## [0.6.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.6.0) - 2022-03-31

### Added

* Dark/Light theme switcher and automatic initial selection of theme
  based on phone theme.

## [0.5.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.5.0) - 2022-03-30

### Added

* Thanks to Marco Montalbano.
* Settings page with basic language change.

### Changed

* Home page layout.

### Removed

* Unused @react-navigation/material-bottom-tabs.

## [0.4.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.4.0) - 2022-03-23

### Added

* Support for light/dark theme.
* The Four Steps of Improvement Kata.

### Changed

* Improved icons and layouts.
* Default card layout also for 5Q card.

## [0.3.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.3.0) - 2022-03-18

### Changed

* Improved themed (React Native Paper) layout for TKC.
* Updated NodeJS LTS.
* Updated React Native.
* Graphical revamping.

## [0.2.14](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.14) - 2022-03-15

### Added

* Introduce themed colours management.

### Changed

* Introduce React Native Paper components for (possibly) better theming
  management.
* New icon for 5Q card menu item.
* Replace Material Bottom Tabs with default Bottom Tabs.

## [0.2.13](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.13) - 2022-03-10

### Fixed

* Proper I18N management with correct language identification.

## [0.2.12](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.12) - 2022-03-07

### Fixed

* [#5](https://codeberg.org/marco.bresciani/TKCompanionApp/issues/5)
  Complete I18N introduction with English and Italian translations.

## [0.2.11](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.11) - 2022-03-04

### Added

* screenshots in Italian.
* [ADR-007](/docs/architecture/decisions/007-use-freefont.md)
  for [GNU FreeFont](https://www.gnu.org/software/freefont/index.html)
  Free Sans in the app.
* First [CONTRIBUTING](/docs/CONTRIBUTING.md) draft file, extracted from
  [README](/README.md), in both English and Italian.

### Changed

* updated screenshots
* Former `doc` folder renamed to `docs`.

### Fixed

* REUSE compliance

## [0.2.10](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.10) - 2022-03-03

### Added

* Colour codes to readme.
* Local tests' subsection.
* Proper "rounded" icons for Android.
* Introducing older versions management in metadata.
* More I18N management.

### Changed

* Wrong package name

### Removed

* Non-important inner style.
* Pending type check for TypeScript in Navigation element.

## [0.2.9](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.9) - 2022-02-28

### Fixed

Error in PNG file.

## [0.2.8](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.8) - 2022-02-28

### Fixed

Error in PNG file.

## [0.2.7](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.7) - 2022-02-25

### Changed

* App Icon
* Better copyright screen
* README content properly updated

### Fixed

* Missing default text colour
* REUSE compliance

## [0.2.6](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.6) - 2022-02-23

### Changed

* .gitignore
* README content properly updated

### Fixed

* REUSE compliance

## [0.2.5](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.5) - 2022-02-23

### Added

* App Icon

## [0.2.4](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.4) - 2022-02-22

## [0.2.3](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.3) - 2022-02-22

### Removed

* Duplicated Ionicons.tts

## [0.2.2](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.2) - 2022-02-22

## [0.2.1](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.1) - 2022-02-22

### Added

* FreeSans as default font.
* [ADR-006](docs/architecture/decisions/006-remove-expo-framework.md)
  for the removal of Expo Framework to allow F-Droid publishing.

### Removed

* OpenSans font.

## [0.2.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.2.0) - 2022-02-18

### Added

* Full CHANGELOG.md, for historical purposes.
* Fastlane 20.txt for latest changelog/version.

### Changed

* Get rid of Expo framework since not compatible with F-Droid.
  No money for "developer programs" of Google or Apple.

## [0.1.12](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.12) - 2022-01-25

### Added

* New Open Sans font.
* Font sizes as per <https://grtcalculator.com/>.

### Changed

* Refactor pages and buttons.

### Fixed

* Remove Improper Expo permissions from AndroidManifest.xml

## [0.1.11](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.11) - 2022-01-19

### Added

* Add icons to navigation buttons.

## [0.1.10](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.10) - 2022-01-12

### Added

* Fastlane structure

## [0.1.9](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.9) - 2022-01-11

### Changed

* Update pics, version management

### Fixed

* Compiles for F-Droid.

## [0.1.7](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.7) - 2022-01-11

### Changed

* Update build.

## [0.1.8](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.8) - 2022-01-10

### Added

* Missing version code.

## [0.1.5](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.5) - 2022-01-10

### Added

* Missing version code.

## [0.1.4](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.4) - 2022-01-10

### Added

* Missing version code.

## [0.1.3](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.3) - 2022-01-05

### Changed

* Updated README.md.
* Do some refactoring.

## [0.1.2](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.2) - 2021-12-29

### Changed

* Swap bad and good abouts

## [0.1.1](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.1) - 2021-12-29

### Changed

* Update README and "infrastructure".

## [0.1.0](https://codeberg.org/marco.bresciani/TKCompanionApp/src/tag/0.1.0) - 2021-10-21

### Added

* Introduced [ADR-000](docs/architecture/decisions/000-use-adr-conventions.md) for using ADR format for ADRs...
  See <http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions>
* Introduced [ADR-001](docs/architecture/decisions/001-commit-message-rules.md) for using proper commit
  message rules.
  See <https://chris.beams.io/posts/git-commit/#seven-rules>.
* Introduced [ADR-002](docs/architecture/decisions/002-use-editorconfig.md) for using EditorConfig
  configuration.
  See <https://editorconfig.org>.
* Introduced [ADR-003](docs/architecture/decisions/003-use-standard-readme.md) for using a defined README
  format.
  See <https://github.com/RichardLitt/standard-readme>.
* Introduced [ADR-004](docs/architecture/decisions/004-keep-a-changelog.md) for using a defined
  CHANGELOG format.
  See <https://keepachangelog.com>.
* Introduced [ADR-005](docs/architecture/decisions/005-apply-semantic-versioning.md) for using Semantic
  Versioning.
  See <https://semver.org>.
* Introducing REUSE compliance.
  See <https://reuse.software>.
* Added React Styled Components.
  See <https://styled-components.com/>.
* Added main menu with Home, 5Q and About pages/screens.
* Home page
* 5Q card with front and back.
