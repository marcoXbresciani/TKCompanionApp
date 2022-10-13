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

import { Platform } from 'react-native'
import { Font } from 'react-native-paper/src/types'

const typeface = {
  brandRegular: Platform.select({
    web: 'FreeSans',
    ios: 'FreeSans',
    default: 'FreeSans'
  }),
  weightRegular: '400' as Font['fontWeight'],

  plainMedium: Platform.select({
    web: 'FreeSans',
    ios: 'FreeSans',
    default: 'FreeSans'
  }),
  weightMedium: 'bold' as Font['fontWeight']
}

const regularType = {
  fontFamily: typeface.brandRegular,
  letterSpacing: 0,
  fontWeight: typeface.weightRegular
}

const mediumType = {
  fontFamily: typeface.plainMedium,
  letterSpacing: 0.15,
  fontWeight: typeface.weightMedium
}

export const fontConfig = {
  displayLarge: {
    ...regularType,
    lineHeight: 64,
    fontSize: 57
  },
  displayMedium: {
    ...regularType,
    lineHeight: 52,
    fontSize: 45
  },
  displaySmall: {
    ...regularType,
    lineHeight: 44,
    fontSize: 36
  },

  headlineLarge: {
    ...regularType,
    lineHeight: 40,
    fontSize: 32
  },
  headlineMedium: {
    ...regularType,
    lineHeight: 36,
    fontSize: 28
  },
  headlineSmall: {
    ...regularType,
    lineHeight: 32,
    fontSize: 24
  },

  titleLarge: {
    ...regularType,
    lineHeight: 28,
    fontSize: 22
  },
  titleMedium: {
    ...mediumType,
    lineHeight: 24,
    fontSize: 16
  },
  titleSmall: {
    ...mediumType,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 14
  },

  labelLarge: {
    ...mediumType,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 14
  },
  labelMedium: {
    ...mediumType,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontSize: 12
  },
  labelSmall: {
    ...mediumType,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontSize: 11
  },

  bodyLarge: {
    ...regularType,
    fontWeight: typeface.weightRegular,
    fontFamily: typeface.brandRegular,
    fontSize: 18
  },
  bodyMedium: {
    ...regularType,
    fontWeight: typeface.weightRegular,
    fontFamily: typeface.brandRegular,
    lineHeight: 24,
    fontSize: 16
  },
  bodySmall: {
    ...regularType,
    fontWeight: typeface.weightRegular,
    fontFamily: typeface.brandRegular,
    letterSpacing: 0.25,
    lineHeight: 20,
    fontSize: 14
  }
}
