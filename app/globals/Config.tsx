/*
 * © 2021-2022 Marco Bresciani
 * This file is part of TKCompanionApp.
 *
 * TKCompanionApp is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * TKCompanionApp is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with TKCompanionApp.
 * If not, see <https://www.gnu.org/licenses/>.
 *
 * SPDX-FileCopyrightText: 2021-2022 Marco Bresciani
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    configureFonts,
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

const CombinedLight = merge(PaperDefaultTheme, NavigationDefaultTheme);

const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const fontConfig = {
    web: {
        regular: {
            fontFamily: 'FreeSans',
            fontWeight: '400' as '400',
        },
        medium: {
            fontFamily: 'FreeSansBold',
            fontWeight: '700' as '700',
        },
        light: {
            fontFamily: 'FreeSans',
            fontWeight: '300' as '300',
        },
        thin: {
            fontFamily: 'FreeSans',
            fontWeight: '100' as '100',
        },
    },
    ios: {
        regular: {
            fontFamily: 'FreeSans',
            fontWeight: '400' as '400',
        },
        medium: {
            fontFamily: 'FreeSansBold',
            fontWeight: '700' as '700',
        },
        light: {
            fontFamily: 'FreeSans',
            fontWeight: '300' as '300',
        },
        thin: {
            fontFamily: 'FreeSans',
            fontWeight: '100' as '100',
        },
    },
    default: {
        regular: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal' as 'normal',
        },
        medium: {
            fontFamily: 'FreeSansBold',
            fontWeight: 'bold' as 'bold',
        },
        light: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal' as 'normal',
        },
        thin: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal' as 'normal',
        },
    },
};

export const TkLightTheme = {
    ...CombinedLight,
    fonts: configureFonts(fontConfig),
    animation: {
        scale: 1.0,
    },
};

export const TkDarkTheme = {
    ...CombinedDarkTheme,
    fonts: configureFonts(fontConfig),
    animation: {
        scale: 1.0,
    },
};
