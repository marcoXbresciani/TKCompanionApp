<!--
© 2021-2022 Marco Bresciani

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty provided the copyright notice
and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2021-2022 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# Errors
This is the list of known errors or issues.
They might be in the
[GitHub Issues page](https://github.com/marcoXbresciani/TKCompanionApp/issues)
or not.

6. [Switching language through settings does not switch bottom navigation bar](https://github.com/marcoXbresciani/TKCompanionApp/issues/6)

   When switching languages through the Info -> Language area, the
   bottom navigation bar remains in the original language.
   See 5Q Card screenshot in README.md.

   Found in v0.6.0.
   Since v0.5.0.

----

10. [Add support for ts-standard](https://github.com/marcoXbresciani/TKCompanionApp/issues/10)

    Trying to add support for `ts-standard` is branch with same name.
    I'm having configuration issues and an error I can't solve.
    Running `ts-standard` from the command line, as per current
    `ts-standard` branch, I see this:
    ```
    ts-standard: Unexpected linter output:

    Failed to load plugin '@typescript-eslint' declared in '--config » eslint-config-standard-with-typescript': Class extends value undefined is not a constructor or null: TypeError: Failed
    js:12:34)
        at Module._compile (node:internal/modules/cjs/loader:1105:14)

        at Module.load (node:internal/modules/cjs/loader:981:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Module.require (node:internal/modules/cjs/loader:1005:19)
        at require (node:internal/modules/cjs/helpers:102:18)
        at Object.<anonymous> ([........]\node_modules\@typescript-eslint\experimental-utils\dist\ts-eslint\index.js:14:14)
        at Module._compile (node:internal/modules/cjs/loader:1105:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)

    If you think this is a bug in `ts-standard`, open an issue: https://github.com/standard/ts-standard/issues
    ```
    (I've only replaced the actual path with `[........]`.)

    Can't make it work. Ideas?

----

11. [Cope with OpenSSF Best Practices](https://github.com/marcoXbresciani/TKCompanionApp/issues/11)

    It would be nice to fulfill the requirements for the OpenSSF Best
    Practices concepts, competing all the needed information to apply
    for a badge describing these practices.
    See https://bestpractices.coreinfrastructure.org/en

----
