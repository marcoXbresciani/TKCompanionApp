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
import { Dialog, List, Switch, useTheme } from 'react-native-paper'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components'
import StorageFactory from '../../../utils/storage/StorageFactory'
import { AllowedSettings } from '../../../utils/storage/settings/AllowedSettings'
import { PreferencesContext } from '../../../utils/Constants'
import i18n from '../../../i18n/i18n'
import { LocaleConfig } from 'react-native-calendars/src'
import TkText from '../../../components/TkText'

const RowView = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

const Settings: React.FunctionComponent = () => {
  const storage = StorageFactory.getInstance().getSettingsStorage()
  const { toggleTheme, isThemeDark } =
        React.useContext(PreferencesContext)

  return (
    <>
      <Dialog.Title>{`${i18n.t('nav.menu.settings.title')}`}</Dialog.Title>
      <ScrollView>
        <Dialog.Content>
          <RowView>
            <TkText>{`${i18n.t('nav.menu.settings.theme')}`}</TkText>
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
              left={(props) => (
                <List.Icon {...props} icon='translate' />
              )}
              id={1}
              title={`${i18n.t('nav.menu.settings.language')}`}
            >
              <List.Item
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
        </Dialog.Content>
      </ScrollView>
    </>
  )
}

export default Settings
