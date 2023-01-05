<!--
© 2022 Marco Bresciani

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty provided the copyright notice
and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2022 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# 12 Async Storage

## Context
Giving the possibility to change settings of the application, it is
better for the user to be able to keep those settings valid through all
the uses of the application, even if the application is frozen or
terminated.

## Decision
Since the app is not password-protected, using an encrypted storage is
basically useless.
For this reason, this decision reverts and cancels decision number
[9 Encrypted Storage](009-encrypted-storage.md) while introduce the more
plain [React Native Async Storage](https://reactnative.dev/docs/asyncstorage).
There is no need to use files for this purpose.

## Status
Accepted.
Deprecates [9 Encrypted Storage](009-encrypted-storage.md).

## Consequences
If users ask for more safety, there'll be the need to password-protect
the application.
