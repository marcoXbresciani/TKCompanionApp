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
> any), remember that **TKCompanionApp** has _neither_ network _nor_
> files access.
>
> See also the latest app analysis done by Exodus Privacy at
> https://reports.exodus-privacy.eu.org/it/reports/322713/.

## Known Security Issues
* **node-fetch is vulnerable to Exposure of Sensitive Information to an
  Unauthorized Actor** High
* **The `size` option isn't honored after following a redirect in
  node-fetch** Low

## Supported Versions
Generally the latest version is the only one supported with updates
related to security, if any.

Consider that this application does not save files, does not use the
Internet or ask for any kind of permission when running on your device.

Should be pretty safe.

Nevertheless, it is suggested to always use the latest available version
are read the possible security issues reported here.

## Reporting a Vulnerability
To report a vulnerability, please use the project
[Issues](https://codeberg.org/marco.bresciani/TKCompanionApp/issues) page
describing the problem, a possible way to reproduce it and the risk it
poses.
