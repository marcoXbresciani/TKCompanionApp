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
> files access.
>
> See also the latest app analysis done by Exodus Privacy at
> <https://reports.exodus-privacy.eu.org/it/reports/344654/>.

## Known Security Issues

* **node-fetch is vulnerable to Exposure of Sensitive Information to an
  Unauthorized Actor** High
  * Package: node-fetch (npm)
  * Affected versions: < 2.6.7
  * Patched version: 2.6.7
* **The `size` option isn't honored after following a redirect in
  node-fetch** Low
  * Package: node-fetch (npm)
  * Affected versions: < 2.6.1
  * Patched version: 2.6.1

  **Impact**: Node Fetch did not honor the `size` option after following
  a redirect, which means that when a content size was over the limit, a
  `FetchError` would never get thrown and the process would end without
  failure.

  For most people, this fix will have a little or no impact.
  However, if you are relying on node-fetch to gate files above a size,
  the impact could be significant, for example: If you don't
  double-check the size of the data after `fetch()` has completed, your
  JS thread could get tied up doing work on a large file (DoS) and/or
  cost you money in computing.

  **Patches**: We released patched versions for both stable and beta
  channels:

  * For v2: 2.6.1
  * For v3: 3.0.0-beta.9

  **Workarounds**: None, it is strongly recommended to update as soon as
  possible.

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
