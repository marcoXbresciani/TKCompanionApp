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
import PdsaEntry from '../../utils/storage/pdsa/PdsaEntry'
import StorageFactory from '../../utils/storage/StorageFactory'
import i18n from '../../i18n/i18n'
import { TkParagraph } from '../../components/TkParagraph'
import TkCardTitle from '../../components/tkcard/TkCardTitle'
import { TkCard } from '../../components/tkcard/TkCard'
import { TkCardContent } from '../../components/tkcard/TkCardContent'
import PageContainer from '../docs/PageContainer'
import PdsaCalendar from './PdsaCalendar'
import { getTodayIso8601 } from '../../utils/Functions'
import { Journal } from '../../utils/storage/PdsaJournal/Journal'
import { ScrollView } from 'react-native'

const DownloadPage: React.FC = () => {
  const pdsaStorage = StorageFactory.getInstance().getPdsaStorage()
  const journalStorage = StorageFactory.getInstance().getJournalStorage()

  pdsaStorage.read('PDSA')
    .then(value => console.log(`>>> ${value}`))

  const [day, setDay] = React.useState(getTodayIso8601())
  const [disabledSave, setDisabledSave] = React.useState(true)
  const [pdsaEntry, setPdsaEntry] = React.useState(new PdsaEntry())
  const [visibleDialog, setVisibleDialog] = React.useState(false)

  useEffect(() => {
    journalStorage.read('PDSA').then(value => {
      let journal: Journal = { };

      if (value == null) {
        setPdsaEntry(new PdsaEntry())
        journal[day] = pdsaEntry
      } else {
        journal = JSON.parse(value)
        setPdsaEntry(journal[day])
      }
    }).finally(() => setDisabledSave(true))
  }, [day])

  return (
    <>
      <PdsaCalendar
        day={day}
        setDay={setDay}
        markedDates={{ '`${getTodayIso8601()}`': { selected: true, marked: false } }}
        visible={visibleDialog}
        setVisible={setVisibleDialog}
      />

      <Appbar>
        <Appbar.Action
          icon='today-outline'
          onPress={() => {
            setDay(getTodayIso8601())
          }}

        />
        <Appbar.Action
          icon='calendar-outline'
          onPress={() => {
            setVisibleDialog(true)
          }}
        />
        <Appbar.Action
          icon='save-outline'
          disabled={disabledSave}
          onPress={() => {
            const journal: Journal = void journalStorage.read('PDSA') as unknown as Journal
            journal[day] = pdsaEntry
            void journalStorage.write('PDSA', journal)
            setDisabledSave(true)
          }}
        />
        <Appbar.Action
          icon='trash-outline'
          disabled={!disabledSave}
          onPress={() => {
            void pdsaStorage.remove(`PDSA.${day}`)
            setPdsaEntry(new PdsaEntry())
            setDisabledSave(true)
          }}
        />
      </Appbar>

      <ScrollView>
        <PageContainer>
          <TkCard>
            <TkCardTitle
              title={`${i18n.t('pdsa.title')}`}
              titleNumberOfLines={2}
              subtitle={day}
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
                  setDisabledSave(false)
                }}
                placeholder='Target'
                right={
                  <TextInput.Icon
                    name='trash-outline'
                    onPress={() => {
                      setPdsaEntry({
                        ...pdsaEntry,
                        target: ''
                      })
                      setDisabledSave(false)
                    }}
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
                  setDisabledSave(false)
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
                  setDisabledSave(false)
                }}
                placeholder='Obstacle'
                right={
                  <TextInput.Icon
                    name='trash-outline'
                    onPress={() => {
                      setPdsaEntry({
                        ...pdsaEntry,
                        obstacle: ''
                      })
                      setDisabledSave(false)
                    }}
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
                  setDisabledSave(false)
                }}
                placeholder='Step'
                right={
                  <TextInput.Icon
                    name='trash-outline'
                    onPress={() => {
                      setPdsaEntry({
                        ...pdsaEntry,
                        step: ''
                      })
                      setDisabledSave(false)
                    }}
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
                  setDisabledSave(true)
                }}
                placeholder='Learnt'
                right={
                  <TextInput.Icon
                    name='trash-outline'
                    onPress={() => {
                      setPdsaEntry({
                        ...pdsaEntry,
                        learnt: ''
                      })
                      setDisabledSave(true)
                    }}
                  />
                }
                value={pdsaEntry.learnt}
              />
            </TkCardContent>
          </TkCard>
        </PageContainer>
      </ScrollView>
    </>
  )
}

export default DownloadPage
