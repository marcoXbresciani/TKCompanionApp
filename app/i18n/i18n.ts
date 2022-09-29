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
import { NativeModules, Platform } from 'react-native'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import de from './de.json'
import en from './en.json'
import fr from './fr.json'
import itIT from './it-IT.json'
import nbNO from './nb-NO.json'
import { LocaleConfig } from 'react-native-calendars/src'

let appleLocale

if (Platform.OS === 'ios') {
  if (NativeModules.SettingsManager.settings.AppleLanguages[0] !== undefined) {
    appleLocale = NativeModules.SettingsManager.settings.AppleLanguages[0]
  } else if (NativeModules.SettingsManager.settings.AppleLocale !== undefined) {
    appleLocale = NativeModules.SettingsManager.settings.AppleLocale
  }
}

const deviceLocale = (
  Platform.OS === 'ios'
    ? appleLocale
    : NativeModules.I18nManager.localeIdentifier
).replace('_', '-')

interface Resources { [key: string]: { translation: { calendar: {} } } }

const resources: Resources = {
  de: { translation: de },
  en: { translation: en },
  fr: { translation: fr },
  'it-IT': { translation: itIT },
  'nb-NO': { translation: nbNO }
}

const i18n = i18next.use(initReactI18next)

void i18n.init({
  cleanCode: true,
  compatibilityJSON: 'v3',
  debug: false,
  interpolation: {
    escapeValue: false
  },
  fallbackLng: 'en',
  lng: deviceLocale,
  nonExplicitSupportedLngs: true,
  resources
})

Object.keys(resources).forEach((key) => {
  LocaleConfig.locales[key] = resources[`${key}`].translation.calendar
})

LocaleConfig.defaultLocale = i18n.resolvedLanguage

export default i18n
