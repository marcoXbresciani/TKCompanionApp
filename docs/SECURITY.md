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

## Known Security Issues
> In evaluating the impact of these (known) security issues below (if
> any), please remember that **TKCompanionApp** has _neither_ network
> _nor_ files access.

* **node-fetch is vulnerable to Exposure of Sensitive Information to an
  Unauthorized Actor #11**
  * Severity: High, 8.8 / 10
  * CVSS base metrics
    * Attack vector: Network
    * Attack complexity: Low
    * Privileges required: Low
    * User interaction: None
    * Scope: Unchanged
    * Confidentiality: High
    * Integrity: High
    * Availability: High
  * CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H
  * Weaknesses: CWE-173, CWE-200, CWE-601
  * CVE ID: CVE-2022-0235
  * GHSA ID: GHSA-r683-j2x4-v87g
* **The `size` option isn't honored after following a redirect in
  node-fetch**
  * Severity: Low, 2.6 / 10
  * CVSS base metrics
    * Attack vector: Network
    * Attack complexity: High
    * Privileges required: Low
    * User interaction: Required
    * Scope: Unchanged
    * Confidentiality: None
    * Integrity: None
    * Availability: Low
  * CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:U/C:N/I:N/A:L
  * Weaknesses: CWE-20, CWE-770
  * CVE ID: CVE-2020-15168
  * GHSA ID: GHSA-w7rc-rwvf-8q5r

For more information
If you have any questions or comments about this advisory:
* Open an issue in node-fetch
* Contact one of the core maintainers.

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
[Issues](https://github.com/marcoXbresciani/TKCompanionApp/issues) page
describing the problem, a possible way to reproduce it and the risk it
poses.
