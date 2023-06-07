<!--
© 2021-2023 Marco Bresciani

Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided the copyright
notice and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2021-2023 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# Security Policy

> In evaluating the impact of the security issues described below (if
> any), remember that **TKCompanionApp** has *neither* network *nor*
> files access on your device.
>
> See also the latest app analysis done by Exodus Privacy at
> <https://reports.exodus-privacy.eu.org/it/reports/344654/>.

## Known Security Issues

* **fast-xml-parser vulnerable to Regex Injection via Doctype Entities**

  * High
  * **Impact**

    "fast-xml-parser" allows special characters in entity names, which
    are not escaped or sanitized.
    Since the entity name is used for creating a regex for searching and
    replacing entities in the XML body, an attacker can abuse it for DoS
    attacks.
    By crafting an entity name that results in an intentionally bad
    performing regex and utilizing it in the entity replacement step of
    the parser, this can cause the parser to stall for an indefinite
    amount of time.

  * **Patches**

    The problem has been resolved in v4.2.4

  * **Workarounds**

    Avoid using DOCTYPE parsing by `processEntities: false` option.

  * **References**

    _Are there any links users can visit to find out more?_

## Supported Versions

> Please note that TKCompanionApp is currently *neither* on Google Play
> *nor* Apple App Store and *won't be there in the near future*.

Generally the latest version is the only one supported with updates
related to security, if any.

Consider that this application does not save files, does not use the
Internet or ask for any kind of permission when running on your device.

Should be pretty safe.

Nevertheless, it is suggested to always use the latest available version
are read the possible security issues reported here.

> If you have downloaded TKCompanionApp from Google Play or Apple App
> Store, please remove it and download it from F-Droid or grab the APK
> files directly from either
> [F-Droid](https://f-droid.org/it/packages/name.bresciani.marco.tkcompanionapp/)
> or
> [Codeberg](https://codeberg.org/marco.bresciani/TKCompanionApp/releases).

## Reporting a Vulnerability

To report a vulnerability, please use the project
[Issues](https://codeberg.org/marco.bresciani/TKCompanionApp/issues) page
describing the problem, a possible way to reproduce it and the risk it
poses.
