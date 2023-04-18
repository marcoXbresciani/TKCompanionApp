/*
 * © 2021-2023 Marco Bresciani
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
 * SPDX-FileCopyrightText: 2021-2023 Marco Bresciani
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import * as React from 'react'
import { useEffect } from 'react'
import { IconButton, TextInput, useTheme } from 'react-native-paper'
import PdsaEntry from '../../utils/storage/journal/PdsaEntry'
import StorageFactory from '../../utils/storage/StorageFactory'
import i18n from '../../i18n/i18n'
import TkCardTitle from '../../components/tkcard/TkCardTitle'
import TkCard from '../../components/tkcard/TkCard'
import { TkCardContent } from '../../components/tkcard/TkCardContent'
import PageContainer from '../PageContainer'
import PdsaCalendar from './PdsaCalendar'
import { getPreviousDay, getToday } from '../../utils/Functions'
import { Journal } from '../../utils/storage/journal/Journal'
import { ScrollView } from 'react-native'
import TkSnackbar from '../../components/TkSnackbar'
import TkText from '../../components/TkText'
import PdsaHeader from './PdsaHeader'

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
  const [day, setDay] = React.useState(getToday())
  const [disabledSave, setDisabledSave] = React.useState(true)
  const [pdsaEntry, setPdsaEntry] = React.useState(new PdsaEntry())
  const [visibleDialog, setVisibleDialog] = React.useState(false)
  const [visibleSnack, setVisibleSnack] = React.useState(false)
  const [snackMessage, setSnackMessage] = React.useState('')
  const [markedDates] = React.useState<{ [key: string]: object }>({})

  const TitleBar = (props: React.PropsWithChildren<any>): JSX.Element => {
    return (
      <>
        <IconButton
          {...props}
          disabled={disabledSave}
          icon='content-save-all'
          onPress={() => {
            void journalStorage.read('PDSA').then(value => {
              let journal: Journal = {}

              if (value != null) {
                journal = JSON.parse(value)
              }
              journal[day] = pdsaEntry
              markedDates[day] = markedSelectedDay
              journalStorage.write('PDSA', journal).then(() => {
                setSnackMessage(`${i18n.t('pdsa.snack.day.saved', { day })}`)
                setDisabledSave(true)
              }).catch(() => {
                setSnackMessage(`${i18n.t('pdsa.snack.day.error', { day })}`)
              }).finally(() => {
                setVisibleSnack(true)
              })
            })
          }}
        />
        <IconButton
          {...props}
          disabled={!disabledSave}
          icon='trash-can-outline'
          onPress={() => {
            setSnackMessage(`${i18n.t('pdsa.snack.day.deleted', { day })}`)
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
      </>
    )
  }

  interface PreviousJournal {
    day: string
    entry: PdsaEntry
  }

  const getPreviousEntry = async (field: string): Promise<PreviousJournal> => {
    let result: PreviousJournal = { day: '', entry: new PdsaEntry() }
    let found = 7
    let journal: Journal = {}

    for (let previousDay = getPreviousDay(day); found > 0; previousDay = getPreviousDay(previousDay), found--) {
      await journalStorage.read('PDSA').then(value => {
        if ((value !== null) && (value !== '') && (value !== '{}')) {
          journal = JSON.parse(value)
          if (journal[previousDay] != null) {
            const previousEntry = journal[previousDay]

            if (previousEntry != null) {
              switch (field) {
                case 'target':
                  if ((previousEntry.target !== undefined) && (previousEntry.target.length > 0)) {
                    result = { day: previousDay, entry: previousEntry }
                    found = 0
                  }
                  break
                case 'actual':
                  if ((previousEntry.actual !== undefined) && (previousEntry.actual.length > 0)) {
                    result = { day: previousDay, entry: previousEntry }
                    found = 0
                  }
                  break
                case 'obstacle':
                  if ((previousEntry.obstacle !== undefined) && (previousEntry.obstacle.length > 0)) {
                    result = { day: previousDay, entry: previousEntry }
                    found = 0
                  }
                  break
                case 'step':
                  if ((previousEntry.step !== undefined) && (previousEntry.step.length > 0)) {
                    result = { day: previousDay, entry: previousEntry }
                    found = 0
                  }
                  break
                case 'learnt':
                  if ((previousEntry.learnt !== undefined) && (previousEntry.learnt.length > 0)) {
                    result = { day: previousDay, entry: previousEntry }
                    found = 0
                  }
                  break
              }
            }
          }
        }
      })
    }
    return result
  }

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

        setPdsaEntry(journal[day] ?? new PdsaEntry())
      }
    }).finally(() => setDisabledSave(true))
  }, [day])

  console.log(i18n.t('calendar.dayNamesShort', { returnObjects: true }))

  function getDayOfWeek (): string {
    const date = new Date(day)

    let result = '?'
    if (date.toString() !== 'Invalid Date') {
      const dayOfWeek = date.getDay()
      const weekDays: string[] = i18n.t('calendar.dayNamesShort', { returnObjects: true })

      if ((dayOfWeek >= 0) && (dayOfWeek <= 6)) {
        if ((weekDays != null) && (weekDays.length === 7)) {
          if ((weekDays[dayOfWeek] !== null) && (weekDays[dayOfWeek] !== undefined)) {
            result = weekDays[dayOfWeek]
          }
        }
      }
    }
    return result
  }

  return (
    <>
      <PdsaCalendar
        day={day}
        setDay={setDay}
        markedDates={markedDates}
        visible={visibleDialog}
        setVisible={setVisibleDialog}
      />

      <PdsaHeader
        day={day}
        setDay={setDay}
        setVisibleDialog={setVisibleDialog}
      />

      <ScrollView>
        <PageContainer>
          <TkCard>
            <TkCardTitle
              right={() => <TitleBar />}
              subtitle={day === getToday() ? `${i18n.t('calendar.today').toLowerCase()}` : ''}
              titleNumberOfLines={2}
              title={`${day} (${(getDayOfWeek())})`}
            />
            <TkCardContent>
              <TkText>{`${i18n.t('pdsa.q1')}`}</TkText>
              <TextInput
                label={`${i18n.t('pdsa.labels.target')}`}
                left={
                  <TextInput.Icon
                    icon='content-duplicate'
                    onPress={() => {
                      void (async () => {
                        const previousEntry = await getPreviousEntry('target')
                        if (previousEntry.day !== '') {
                          setSnackMessage(`${i18n.t('pdsa.snack.field.duplicated', {
                            day: previousEntry.day,
                            field: i18n.t('pdsa.labels.target')
                          })}`)
                          setPdsaEntry({
                            ...pdsaEntry,
                            target: previousEntry.entry.target
                          })
                          setDisabledSave(false)
                          setVisibleSnack(true)
                        }
                      })()
                    }}
                  />
                }
                mode='outlined'
                multiline
                onChangeText={(txt) => {
                  setPdsaEntry({
                    ...pdsaEntry,
                    target: txt
                  })
                  setDisabledSave(false)
                }}
                right={
                  <TextInput.Icon
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.target') })}`)
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
                label={`${i18n.t('pdsa.labels.actual')}`}
                left={
                  <TextInput.Icon
                    icon='content-duplicate'
                    onPress={() => {
                      void (async () => {
                        const previousEntry = await getPreviousEntry('actual')
                        if (previousEntry.day !== '') {
                          setSnackMessage(`${i18n.t('pdsa.snack.field.duplicated', {
                            day: previousEntry.day,
                            field: i18n.t('pdsa.labels.actual')
                          })}`)
                          setPdsaEntry({
                            ...pdsaEntry,
                            actual: previousEntry.entry.actual
                          })
                          setDisabledSave(false)
                          setVisibleSnack(true)
                        }
                      })()
                    }}
                  />
                }
                mode='outlined'
                multiline
                onChangeText={(txt) => {
                  setPdsaEntry({
                    ...pdsaEntry,
                    actual: txt
                  })
                  setDisabledSave(false)
                }}
                right={
                  <TextInput.Icon
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.actual') })}`)
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
                label={`${i18n.t('pdsa.labels.obstacle')}`}
                left={
                  <TextInput.Icon
                    icon='content-duplicate'
                    onPress={() => {
                      void (async () => {
                        const previousEntry = await getPreviousEntry('obstacle')
                        if (previousEntry.day !== '') {
                          setSnackMessage(`${i18n.t('pdsa.snack.field.duplicated', {
                            day: previousEntry.day,
                            field: i18n.t('pdsa.labels.obstacle')
                          })}`)
                          setPdsaEntry({
                            ...pdsaEntry,
                            obstacle: previousEntry.entry.obstacle
                          })
                          setDisabledSave(false)
                          setVisibleSnack(true)
                        }
                      })()
                    }}
                  />
                }
                mode='outlined'
                multiline
                onChangeText={(txt) => {
                  setPdsaEntry({
                    ...pdsaEntry,
                    obstacle: txt
                  })
                  setDisabledSave(false)
                }}
                right={
                  <TextInput.Icon
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.obstacle') })}`)
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
                label={`${i18n.t('pdsa.labels.step')}`}
                left={
                  <TextInput.Icon
                    icon='content-duplicate'
                    onPress={() => {
                      void (async () => {
                        const previousEntry = await getPreviousEntry('step')
                        if (previousEntry.day !== '') {
                          setSnackMessage(`${i18n.t('pdsa.snack.field.duplicated', {
                            day: previousEntry.day,
                            field: i18n.t('pdsa.labels.step')
                          })}`)
                          setPdsaEntry({
                            ...pdsaEntry,
                            step: previousEntry.entry.step
                          })
                          setDisabledSave(false)
                          setVisibleSnack(true)
                        }
                      })()
                    }}
                  />
                }
                mode='outlined'
                multiline
                onChangeText={(txt) => {
                  setPdsaEntry({
                    ...pdsaEntry,
                    step: txt
                  })
                  setDisabledSave(false)
                }}
                right={
                  <TextInput.Icon
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.step') })}`)
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
                label={`${i18n.t('pdsa.labels.learnt')}`}
                left={
                  <TextInput.Icon
                    icon='content-duplicate'
                    onPress={() => {
                      void (async () => {
                        const previousEntry = await getPreviousEntry('learnt')
                        if (previousEntry.day !== '') {
                          setSnackMessage(`${i18n.t('pdsa.snack.field.duplicated', {
                            day: previousEntry.day,
                            field: i18n.t('pdsa.labels.learnt')
                          })}`)
                          setPdsaEntry({
                            ...pdsaEntry,
                            learnt: previousEntry.entry.learnt
                          })
                          setDisabledSave(false)
                          setVisibleSnack(true)
                        }
                      })()
                    }}
                  />
                }
                mode='outlined'
                multiline
                onChangeText={(txt) => {
                  setPdsaEntry({
                    ...pdsaEntry,
                    learnt: txt
                  })
                  setDisabledSave(false)
                }}
                right={
                  <TextInput.Icon
                    icon='trash-can'
                    onPress={() => {
                      setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.learnt') })}`)
                      setPdsaEntry({
                        ...pdsaEntry,
                        learnt: ''
                      })
                      setDisabledSave(false)
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
        duration={333}
        message={snackMessage} visible={visibleSnack}
        setVisible={setVisibleSnack}
      />
    </>
  )
}

export default PdsaPage
