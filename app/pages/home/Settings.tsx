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
import * as React from 'react'
import { List, Switch, useTheme } from 'react-native-paper'
import { View } from 'react-native'
import styled from 'styled-components'
import StorageFactory from '../../utils/storage/StorageFactory'
import { AllowedSettings } from '../../utils/storage/settings/AllowedSettings'
import { PreferencesContext } from '../../utils/Constants'
import i18n from '../../i18n/i18n'
import { LocaleConfig } from 'react-native-calendars/src'
import TkText from '../../components/TkText'

const RowView = styled(View)`
    flex-direction: row;
`

const Settings: React.FunctionComponent = () => {
  const storage = StorageFactory.getInstance().getSettingsStorage()
  const { toggleTheme, isThemeDark } =
        React.useContext(PreferencesContext)

  return (
    <>
      <RowView>
        <TkText>{`${i18n.t('settings.theme')}`}</TkText>
        <Switch
          color={useTheme().colors.primary}
          value={isThemeDark}
          onValueChange={() => {
            toggleTheme()
            void storage
              .write(
                AllowedSettings.DARK_THEME,
                (!isThemeDark).toString()
              )
              .then()
          }}
        />
      </RowView>
      <List.AccordionGroup>
        <List.Accordion
          id={1}
          left={(props) => (
            <List.Icon {...props} icon='language-outline' />
          )}
          title={`${i18n.t('settings.language')}`}
        >
          <List.Item
            left={(props) => (
              <List.Icon {...props} icon='flag-outline' />
            )}
            title='Deutsch'
            onPress={() => {
              void i18n.changeLanguage('de').then()
              LocaleConfig.defaultLocale = 'de'
              void storage
                .write(AllowedSettings.LANGUAGE, 'de')
                .then()
            }}
          />
          <List.Item
            left={(props) => (
              <List.Icon {...props} icon='flag-outline' />
            )}
            title='English'
            onPress={() => {
              void i18n.changeLanguage('en').then()
              LocaleConfig.defaultLocale = 'en'
              void storage
                .write(AllowedSettings.LANGUAGE, 'en')
                .then()
            }}
          />
          <List.Item
            left={(props) => (
              <List.Icon {...props} icon='flag-outline' />
            )}
            title='Français'
            onPress={() => {
              void i18n.changeLanguage('fr').then()
              LocaleConfig.defaultLocale = 'fr'
              void storage
                .write(AllowedSettings.LANGUAGE, 'fr')
                .then()
            }}
          />
          <List.Item
            left={(props) => (
              <List.Icon {...props} icon='flag-outline' />
            )}
            title='Italiano'
            onPress={() => {
              void i18n.changeLanguage('it-IT').then()
              LocaleConfig.defaultLocale = 'it-IT'
              void storage
                .write(
                  AllowedSettings.LANGUAGE,
                  'it-IT'
                )
                .then()
            }}
          />
          <List.Item
            left={(props) => (
              <List.Icon {...props} icon='flag-outline' />
            )}
            title='Norsk (Bokmål)'
            onPress={() => {
              void i18n.changeLanguage('nb-NO').then()
              LocaleConfig.defaultLocale = 'nb-NO'
              void storage
                .write(
                  AllowedSettings.LANGUAGE,
                  'nb-NO'
                )
                .then()
            }}
          />
        </List.Accordion>
      </List.AccordionGroup>
    </>
  )
}

export default Settings
