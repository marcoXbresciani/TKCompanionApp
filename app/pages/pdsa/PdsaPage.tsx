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
import { useEffect } from 'react'
import { Appbar, TextInput } from 'react-native-paper'
import { Alert, ScrollView } from 'react-native'
import Wip from '../../components/wip/Wip'
import PdsaEntry from '../../utils/storage/pdsa/PdsaEntry'
import StorageFactory from '../../utils/storage/StorageFactory'
import i18n from '../../i18n/i18n'
import { TkParagraph } from '../../components/TkParagraph'
import TkCardTitle from '../../components/tkcard/TkCardTitle'
import { TkCard } from '../../components/tkcard/TkCard'
import { TkCardContent } from '../../components/tkcard/TkCardContent'

const DownloadPage: React.FC = () => {
  const [pdsaEntry, setPdsaEntry] = React.useState(new PdsaEntry())
  const [visibleWip, setVisibleWip] = React.useState(false)
  const pdsaStorage = StorageFactory.getPdsaStorage()

  useEffect(() => {
    pdsaStorage
      .read('PDSA')
      .then((entryString) => {
        const parse: PdsaEntry = JSON.parse(entryString)
        setPdsaEntry(parse)
      })
      .catch((reason) => {
        Alert.alert(i18n.t('pdsa.alert.title'), `${reason as string}.`)
        setPdsaEntry(new PdsaEntry())
      })
  }, [pdsaStorage])

  return (
    <>
      <Wip
        message={i18n.t('pdsa.temp')}
        visible={visibleWip}
        setVisible={setVisibleWip}
      />

      <Appbar>
        <Appbar.Action
          icon='save-outline'
          onPress={() => {
            // const [today] = new Date()
            //     .toISOString()
            //     .split('T');
            void pdsaStorage.write('PDSA', pdsaEntry)
          }}
        />
        <Appbar.Action
          disabled
          icon='calendar-outline'
          onPress={() => setVisibleWip(true)}
        />
      </Appbar>

      <ScrollView>
        <TkCard>
          <TkCardTitle
            title={`${i18n.t('pdsa.title')}`}
            titleNumberOfLines={2}
          />
          <TkCardContent>
            <TkParagraph>{`${i18n.t(
                            'pdsa.q1'
                        )}`}
            </TkParagraph>
            <TextInput
              label='Target'
              mode='outlined'
              multiline
              onChangeText={(txt) => {
                setPdsaEntry({
                  ...pdsaEntry,
                  target: txt
                })
              }}
              placeholder='Target'
              right={
                <TextInput.Icon
                  name='trash-outline'
                  onPress={() =>
                    setPdsaEntry({
                      ...pdsaEntry,
                      target: ''
                    })}
                />
                            }
              value={pdsaEntry.target}
            />
            <TkParagraph>{`${i18n.t(
                            'pdsa.q2'
                        )}`}
            </TkParagraph>
            <TextInput
              label='Actual'
              mode='outlined'
              multiline
              onChangeText={(txt) => {
                setPdsaEntry({
                  ...pdsaEntry,
                  actual: txt
                })
              }}
              placeholder='Actual'
              right={
                <TextInput.Icon
                  name='trash-outline'
                  onPress={() =>
                    setPdsaEntry({
                      ...pdsaEntry,
                      actual: ''
                    })}
                />
                            }
              value={pdsaEntry.actual}
            />
            <TkParagraph>{`${i18n.t(
                            'pdsa.q3'
                        )}`}
            </TkParagraph>
            <TextInput
              label='Obstacle'
              mode='outlined'
              multiline
              onChangeText={(txt) => {
                setPdsaEntry({
                  ...pdsaEntry,
                  obstacle: txt
                })
              }}
              placeholder='Obstacle'
              right={
                <TextInput.Icon
                  name='trash-outline'
                  onPress={() =>
                    setPdsaEntry({
                      ...pdsaEntry,
                      obstacle: ''
                    })}
                />
                            }
              value={pdsaEntry.obstacle}
            />
            <TkParagraph>{`${i18n.t(
                            'pdsa.q4'
                        )}`}
            </TkParagraph>
            <TextInput
              label='Step'
              mode='outlined'
              multiline
              onChangeText={(txt) => {
                setPdsaEntry({
                  ...pdsaEntry,
                  step: txt
                })
              }}
              placeholder='Step'
              right={
                <TextInput.Icon
                  name='trash-outline'
                  onPress={() =>
                    setPdsaEntry({
                      ...pdsaEntry,
                      step: ''
                    })}
                />
                            }
              value={pdsaEntry.step}
            />
            <TkParagraph>{`${i18n.t(
                            'pdsa.q5'
                        )}`}
            </TkParagraph>
            <TextInput
              label='Learnt'
              mode='outlined'
              multiline
              onChangeText={(txt) => {
                setPdsaEntry({
                  ...pdsaEntry,
                  learnt: txt
                })
              }}
              placeholder='Learnt'
              right={
                <TextInput.Icon
                  name='trash-outline'
                  onPress={() =>
                    setPdsaEntry({
                      ...pdsaEntry,
                      learnt: ''
                    })}
                />
                            }
              value={pdsaEntry.learnt}
            />
          </TkCardContent>
        </TkCard>
      </ScrollView>
    </>
  )
}

export default DownloadPage
