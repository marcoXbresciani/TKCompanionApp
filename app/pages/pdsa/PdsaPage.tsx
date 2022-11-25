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
import { Appbar, TextInput, useTheme } from 'react-native-paper'
import PdsaEntry from '../../utils/storage/pdsa/PdsaEntry'
import StorageFactory from '../../utils/storage/StorageFactory'
import i18n from '../../i18n/i18n'
import TkCardTitle from '../../components/tkcard/TkCardTitle'
import TkCard from '../../components/tkcard/TkCard'
import { TkCardContent } from '../../components/tkcard/TkCardContent'
import PageContainer from '../PageContainer'
import PdsaCalendar from './PdsaCalendar'
import { getTodayIso8601 } from '../../utils/Functions'
import { Journal } from '../../utils/storage/PdsaJournal/Journal'
import { ScrollView } from 'react-native'
import TkSnackbar from '../../components/TkSnackbar'
import TkText from '../../components/TkText'

const PdsaPage: React.FC = () => {
  const selectionColour = useTheme().colors.onPrimary
  const dotColour = useTheme().colors.primary
  const coloursDay = {
    color: dotColour,
    selectedDotColor: selectionColour
  }
  const marked = { marked: true }
  const unMarked = { marked: false }
  const selected = { selected: true }
  const unSelected = { selected: false }

  const markedDay = { ...coloursDay, ...marked, ...unSelected }
  const markedSelectedDay = { ...coloursDay, ...marked, ...selected }
  const unmarkedSelectedDay = { ...coloursDay, ...unMarked, ...selected }

  const journalStorage = StorageFactory.getInstance().getJournalStorage()
  const [day, setDay] = React.useState(getTodayIso8601())
  const [disabledSave, setDisabledSave] = React.useState(true)
  const [pdsaEntry, setPdsaEntry] = React.useState(new PdsaEntry())
  const [visibleDialog, setVisibleDialog] = React.useState(false)
  const [visibleSnack, setVisibleSnack] = React.useState(false)
  const [snackMessage, setSnackMessage] = React.useState('')
  const [markedDates] = React.useState<{ [key: string]: object }>({})

  useEffect(() => {
    journalStorage.read('PDSA').then(value => {
      let journal: Journal = {}

      Object.keys(markedDates).forEach(key => {
        markedDates[key] = { ...markedDates[key], ...unSelected }
      })

      if ((value == null) || (value === '') || (value === '{}')) {
        setPdsaEntry(new PdsaEntry())
        markedDates[day] = { ...markedDates[day], ...unmarkedSelectedDay }
        journal[day] = pdsaEntry
      } else {
        journal = JSON.parse(value)

        Object.keys(journal).forEach(key => {
          markedDates[key] = markedDay
        })
        markedDates[day] = { ...markedDates[day], ...selected }

        if (journal[day] === undefined) {
          setPdsaEntry(new PdsaEntry())
        } else {
          setPdsaEntry(journal[day])
        }
      }
    }).finally(() => setDisabledSave(true))
  }, [day])

  return (
    <>
      <PdsaCalendar
        day={day}
        setDay={setDay}
        markedDates={markedDates}
        visible={visibleDialog}
        setVisible={setVisibleDialog}
      />

      <Appbar.Header>
        <Appbar.Action
          icon='calendar-cursor'
          onPress={() => {
            setDay(getTodayIso8601())
          }}

        />
        <Appbar.Action
          icon='calendar-blank'
          onPress={() => {
            setVisibleDialog(true)
          }}
        />
        <Appbar.Action
          icon='content-save-all'
          disabled={disabledSave}
          onPress={() => {
            setSnackMessage(`Saved ${day}.`)
            void journalStorage.read('PDSA').then(value => {
              let journal: Journal = {}

              if (value != null) {
                journal = JSON.parse(value)
              }
              journal[day] = pdsaEntry
              markedDates[day] = markedSelectedDay
              void journalStorage.write('PDSA', journal)
              setDisabledSave(true)
              setVisibleSnack(true)
            })
          }}
        />
        <Appbar.Action
          icon='trash-can-outline'
          disabled={!disabledSave}
          onPress={() => {
            setSnackMessage(`Deleted ${day}.`)
            void journalStorage.read('PDSA').then(value => {
              let journal: Journal = {}
              if (value != null) {
                journal = JSON.parse(value)
              }
              setPdsaEntry(new PdsaEntry())
              journal[day] = undefined as unknown as PdsaEntry
              markedDates[day] = unmarkedSelectedDay
              void journalStorage.write('PDSA', journal)
              setDisabledSave(true)
              setVisibleSnack(true)
            })
          }}
        />
      </Appbar.Header>

      <ScrollView>
        <PageContainer>
          <TkCard>
            <TkCardTitle
              title={`${i18n.t('pdsa.title')}`}
              titleNumberOfLines={2}
              subtitle={day === getTodayIso8601() ? `${i18n.t('calendar.today').toUpperCase()}: ${day}` : day}
            />
            <TkCardContent>
              <TkText>{`${i18n.t('pdsa.q1')}`}</TkText>
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
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`Deleted ${day} Target.`)
                      setPdsaEntry({
                        ...pdsaEntry,
                        target: ''
                      })
                      setDisabledSave(false)
                      setVisibleSnack(true)
                    }}
                  />
                }
                value={pdsaEntry.target}
              />
              <TkText>{`${i18n.t('pdsa.q2')}`}</TkText>
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
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`Deleted ${day} Actual.`)
                      setPdsaEntry({
                        ...pdsaEntry,
                        actual: ''
                      })
                      setVisibleSnack(true)
                    }}
                  />
                }
                value={pdsaEntry.actual}
              />
              <TkText>{`${i18n.t('pdsa.q3')}`}</TkText>
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
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`Deleted ${day} Obstacle.`)
                      setPdsaEntry({
                        ...pdsaEntry,
                        obstacle: ''
                      })
                      setDisabledSave(false)
                      setVisibleSnack(true)
                    }}
                  />
                }
                value={pdsaEntry.obstacle}
              />
              <TkText>{`${i18n.t('pdsa.q4')}`}</TkText>
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
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`Deleted ${day} Step.`)
                      setPdsaEntry({
                        ...pdsaEntry,
                        step: ''
                      })
                      setDisabledSave(false)
                      setVisibleSnack(true)
                    }}
                  />
                }
                value={pdsaEntry.step}
              />
              <TkText>{`${i18n.t('pdsa.q5')}`}</TkText>
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
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`Deleted ${day} Learnt.`)
                      setPdsaEntry({
                        ...pdsaEntry,
                        learnt: ''
                      })
                      setDisabledSave(true)
                      setVisibleSnack(true)
                    }}
                  />
                }
                value={pdsaEntry.learnt}
              />
            </TkCardContent>
          </TkCard>
        </PageContainer>
      </ScrollView>

      <TkSnackbar
        message={snackMessage} visible={visibleSnack}
        setVisible={setVisibleSnack}
      />
    </>
  )
}

export default PdsaPage
