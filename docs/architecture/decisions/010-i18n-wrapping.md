<!--
© 2022 Marco Bresciani

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty provided the copyright notice
and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2022 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# 10 I18N Wrapping

## Context
Considering that the app natively supports multiple languages, there is
the need so somehow isolate this responsibility in its own area, to
mixing it up with other things.

## Decision
The `app\i18n\i18n.ts` will collect all the needs for the I18N concerns
and exposes the correct `i18next` function for all other modules.

## Status
Accepted.

## Consequences
All modules, functions and components in need for the I18N, must import
`i18next` from the local `app\i18n\i18n.ts` file instead of importing it
from the reference library.
