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

* **Always-Incorrect Control Flow Implementation in Facebook Hermes**
  * Opened on *hermes-engine*
  * Weaknesses: CWE-670, CWE-1119
  * CVE ID: CVE-2020-1914
  * A logic vulnerability when handling the SaveGeneratorLong instruction in Facebook Hermes prior to commit b2021df620824627f5a8c96615edbd1eb7fdddfc allows attackers to potentially read out of bounds or theoretically execute arbitrary code via crafted JavaScript. Note that this is only exploitable if the application using Hermes permits evaluation of untrusted JavaScript. Hence, most React Native applications are not affected.

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
