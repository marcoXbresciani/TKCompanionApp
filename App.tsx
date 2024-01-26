/*
 * © 2021-2024 Marco Bresciani
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
 * SPDX-FileCopyrightText: 2021-2024 Marco Bresciani
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import StorageFactory from './app/utils/storage/StorageFactory'
import {
  AllowedSettings
} from './app/utils/storage/settings/AllowedSettings'
import TkNavigator from './app/components/TkNavigator'
import i18n from './app/i18n/i18n'
import { tkDarkTheme } from './app/config/tkDarkTheme'
import { tkLightTheme } from './app/config/tkLightTheme'
import { isDark } from './app/utils/Functions'

const App: React.FunctionComponent = () => {
  const settingsStorage = StorageFactory.getInstance().getSettingsStorage()

  void settingsStorage
    .read(AllowedSettings.LANGUAGE)
    .then((r) => {
      void i18n.changeLanguage(r ?? i18n.options.lng)
    })
    .catch(() => {
      void i18n.changeLanguage(i18n.options.fallbackLng as string)
    })

  return (
    <PaperProvider
      settings={{
        icon: (props) => <MaterialCommunityIcons {...props} />
      }}
      theme={isDark() ? tkDarkTheme : tkLightTheme}
    >
      <TkNavigator />
    </PaperProvider>
  )
}

export default App
