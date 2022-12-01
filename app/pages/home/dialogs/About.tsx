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
import { Dialog, List } from 'react-native-paper'
import { Trans, useTranslation } from 'react-i18next'
import { Linking, ScrollView } from 'react-native'
import i18n from '../../../i18n/i18n'
import BoldText from '../../../components/BoldText'
import TkText from '../../../components/TkText'
import { getIso8601 } from '../../../utils/Functions'
import {
  APP_NAME,
  APP_VERSION,
  FIRST_INSTALL,
  LATEST_UPDATE
} from '../../../utils/Constants'

const About: React.FunctionComponent = () => {
  const { t } = useTranslation()
  const urls: Array<{ address: string, icon: string, name: string }> = i18n.t('about.url.page', {
    returnObjects: true
  })

  return (
    <>
      <Dialog.Title>{APP_NAME}</Dialog.Title>
      <ScrollView>
        <Dialog.Content>
          <TkText>
            {i18n.t('about.dates.latest', { date: getIso8601(LATEST_UPDATE) })} ({APP_VERSION})
          </TkText>
          <TkText>
            {i18n.t('about.dates.first', { date: getIso8601(FIRST_INSTALL) })}
          </TkText>
          <List.AccordionGroup>
            <List.Accordion
              id={1}
              title={<Trans t={t} i18nKey='about.might.title' components={{ bold: <BoldText /> }} />}
              titleNumberOfLines={2}
              titleStyle={{ color: 'forestgreen' }}
            >
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('http://www-personal.umich.edu/~mrother/The_Improvement_Kata.html') }}
                title={`${i18n.t('about.might.key1')}`}
                titleNumberOfLines={2}
              />
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('http://www-personal.umich.edu/~mrother/The_Coaching_Kata.html') }}
                title={`${i18n.t('about.might.key2')}`}
                titleNumberOfLines={2}
              />
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('http://www-personal.umich.edu/~mrother/Extras.html') }}
                title={`${i18n.t('about.might.key3')}`}
                titleNumberOfLines={2}
              />
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('http://www-personal.umich.edu/~mrother/Challenge.html') }}
                title={`${i18n.t('about.might.key4')}`}
                titleNumberOfLines={2}
              />
            </List.Accordion>
            <List.Accordion
              id={2}
              title={<Trans t={t} i18nKey='about.not.title' components={{ bold: <BoldText /> }} />}
              titleNumberOfLines={2}
              titleStyle={{ color: 'crimson' }}
            >
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('https://www.eff.org/issues/privacy') }}
                title={`${i18n.t('about.not.key1')}`}
                titleNumberOfLines={2}
              />
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('https://www.eff.org/issues/privacy') }}
                title={`${i18n.t('about.not.key2')}`}
                titleNumberOfLines={2}
              />
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('https://en.wikipedia.org/wiki/Phoning_home') }}
                title={`${i18n.t('about.not.key3')}`}
                titleNumberOfLines={2}
              />
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('https://en.wikipedia.org/wiki/Google_Play_Services#Concerns') }}
                title={`${i18n.t('about.not.key4')}`}
                titleNumberOfLines={2}
              />
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('https://www.eff.org/issues/privacy') }}
                title={`${i18n.t('about.not.key5')}`}
                titleNumberOfLines={2}
              />
              <List.Item
                left={(props) => (<List.Icon {...props} icon='home-export-outline' />)}
                onPress={() => { void Linking.openURL('https://www.eff.org/issues/privacy') }}
                title={`${i18n.t('about.not.key6')}`}
                titleNumberOfLines={2}
              />
            </List.Accordion>
            <List.Accordion description={i18n.t('about.url.description')} id={3} title={i18n.t('about.url.title')}>
              {urls.flatMap(({ address, icon, name }) => {
                return (
                  <List.Item
                    description={address}
                    key={name}
                    left={(props) => (<List.Icon {...props} icon={icon} />)}
                    onPress={() => { void Linking.openURL(address) }}
                    title={name}
                    titleNumberOfLines={3}
                  />
                )
              })}
            </List.Accordion>
          </List.AccordionGroup>
        </Dialog.Content>
      </ScrollView>
    </>
  )
}

export default About
