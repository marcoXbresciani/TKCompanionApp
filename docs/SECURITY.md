<!--
© 2022 Marco Bresciani

Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided the copyright
notice and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2022 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# Security Policy
> In evaluating the impact of the security issues described below (if
> any), please refer to the app analysis done by Exodus Privacy at
> https://reports.exodus-privacy.eu.org/en/reports/316354/ and remember
> that **TKCompanionApp** has _neither_ network _nor_ files access.

## Known Security Issues
* **node-fetch is vulnerable to Exposure of Sensitive Information to an
  Unauthorized Actor** High

  **Upgrade node-fetch to fix 2 Dependabot alerts in package-lock.json**

  Upgrade node-fetch to version 2.6.7 or later. For example:

  ```
  "dependencies": {
    "node-fetch": ">=2.6.7"
  }
  ```

  ```
  "devDependencies": {
    "node-fetch": ">=2.6.7"
  }
  ```
* **decode-uri-component vulnerable to Denial of Service (DoS)** Low

  Bump decode-uri-component from 0.2.0 to 0.2.2

* **The `size` option isn't honored after following a redirect in
  node-fetch** Low

  **Upgrade node-fetch to fix 2 Dependabot alerts in package-lock.json**

  Upgrade node-fetch to version 2.6.7 or later. For example:

  ```
  "dependencies": {
    "node-fetch": ">=2.6.7"
  }
  ```

  ```
  "devDependencies": {
    "node-fetch": ">=2.6.7"
  }
  ```

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
