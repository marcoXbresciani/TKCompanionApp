<!--
© 2022 Marco Bresciani

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty provided the copyright notice
and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2022 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# 9 Encrypted Storage

## Context
Giving the possibility to change settings of the application, it is
better for the user to be able to keep those settings valid through all
the uses of the application, even if the application is frozen or
terminated.

## Decision
The app is going to use the
[React Native Encrypted Storage](https://github.com/emeraldsanto/react-native-encrypted-storage)
that is based on [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/),
but in encrypted form, for better security.
There is no need to use files for this purpose.

## Status
Accepted.

## Consequences
There will be soon the need to use a password of the phone unlock
mechanism to protect those encrypted data.
