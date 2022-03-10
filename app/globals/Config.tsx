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
import {configureFonts, DefaultTheme} from 'react-native-paper';

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

export const tkThemeConfig = {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        primary: 'royalblue',
        accent: 'gold',
        background: 'ghostwhite',
        surface: '#00ff00',
        error: 'crimson',
        text: 'black',
        onSurface: '#0000ff',
        // disabled: color('black').alpha(0.26).rgb().string(),
        // placeholder: color('black').alpha(0.54).rgb().string(),
        // backdrop: color('black').alpha(0.5).rgb().string(),
        notification: 'pink',
    },
    fonts: configureFonts(fontConfig),
    animation: {
        scale: 1.0,
    },
};
