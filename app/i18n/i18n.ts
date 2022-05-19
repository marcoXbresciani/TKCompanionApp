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
import {NativeModules, Platform} from 'react-native';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {default as tEn} from './en.json';
import {default as tItIT} from './it-IT.json';

const locale = (
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLanguages[0] ||
          NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier
).replace('_', '-');

const resources = {
    en: {translation: tEn},
    'it-IT': {translation: tItIT},
};

i18next.use(initReactI18next).init({
    cleanCode: true,
    compatibilityJSON: 'v3',
    debug: false,
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: 'en',
    lng: locale,
    nonExplicitSupportedLngs: true,
    resources,
});

export default i18next;
