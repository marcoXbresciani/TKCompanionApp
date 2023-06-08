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
import i18n from '../../i18n/i18n'
import TkCardTitle from '../../components/tkcard/TkCardTitle'
import TkCard from '../../components/tkcard/TkCard'
import { TkCardContent } from '../../components/tkcard/TkCardContent'
import PageContainer from '../PageContainer'
import PdsaCalendar from './PdsaCalendar'
import { getPreviousDay, getToday } from '../../utils/Functions'
import { Journal } from '../../utils/storage/journal/Journal'
import { ScrollView, View } from 'react-native'
import TkSnackbar from '../../components/TkSnackbar'
import TkText from '../../components/TkText'
import PdsaHeader from './PdsaHeader'
import {
  getAnswers,
  getDayOfWeek,
  getMarkers,
  journalStorage,
  labels,
  PreviousJournal,
  selected,
  texts,
  unSelected
} from './PdsaFunctions'

const PdsaPage: React.FC = () => {
  const selectionColour = useTheme().colors.onPrimary
  const dotColour = useTheme().colors.primary
  const coloursDay = {
    color: dotColour,
    selectedDotColor: selectionColour
  }

  const { markedDay, markedSelectedDay, unmarkedSelectedDay } = getMarkers(coloursDay)

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

  const targetDuplicate = (): void => {
    void (async () => {
      const previousEntry = await getPreviousEntry('target')
      if (previousEntry.day !== '') {
        setSnackMessage(`${i18n.t('pdsa.snack.field.duplicated', { day: previousEntry.day, field: i18n.t('pdsa.labels.target') })}`)
        setPdsaEntry({ ...pdsaEntry, target: previousEntry.entry.target })
        setDisabledSave(false)
        setVisibleSnack(true)
      }
    })()
  }
  const actualDuplicate = (): void => {
    void (async () => {
      const previousEntry = await getPreviousEntry('actual')
      if (previousEntry.day !== '') {
        setSnackMessage(`${i18n.t('pdsa.snack.field.duplicated', { day: previousEntry.day, field: i18n.t('pdsa.labels.actual') })}`)
        setPdsaEntry({ ...pdsaEntry, actual: previousEntry.entry.actual })
        setDisabledSave(false)
        setVisibleSnack(true)
      }
    })()
  }
  const obstacleDuplicate = (): void => {
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
  }
  const stepDuplicate = (): void => {
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
  }
  const learntDuplicate = (): void => {
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
  }

  const duplicates = [targetDuplicate, actualDuplicate, obstacleDuplicate, stepDuplicate, learntDuplicate]

  const targetChange = (txt: string): void => {
    setPdsaEntry({ ...pdsaEntry, target: txt })
    setDisabledSave(false)
  }
  const actualChange = (txt: string): void => {
    setPdsaEntry({ ...pdsaEntry, actual: txt })
    setDisabledSave(false)
  }
  const obstacleChange = (txt: string): void => {
    setPdsaEntry({ ...pdsaEntry, obstacle: txt })
    setDisabledSave(false)
  }
  const stepChange = (txt: string): void => {
    setPdsaEntry({ ...pdsaEntry, step: txt })
    setDisabledSave(false)
  }
  const learntChange = (txt: string): void => {
    setPdsaEntry({ ...pdsaEntry, learnt: txt })
    setDisabledSave(false)
  }

  const changes = [targetChange, actualChange, obstacleChange, stepChange, learntChange]

  const targetDelete = (): void => {
    setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.target') })}`)
    setPdsaEntry({ ...pdsaEntry, target: '' })
    setDisabledSave(false)
    setVisibleSnack(true)
  }
  const actualDelete = (): void => {
    setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.actual') })}`)
    setPdsaEntry({ ...pdsaEntry, actual: '' })
    setVisibleSnack(true)
  }
  const obstacleDelete = (): void => {
    setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.obstacle') })}`)
    setPdsaEntry({ ...pdsaEntry, obstacle: '' })
    setDisabledSave(false)
    setVisibleSnack(true)
  }
  const stepDelete = (): void => {
    setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.step') })}`)
    setPdsaEntry({ ...pdsaEntry, step: '' })
    setDisabledSave(false)
    setVisibleSnack(true)
  }
  const learntDelete = (): void => {
    setSnackMessage(`${i18n.t('pdsa.snack.field.deleted', { day, field: i18n.t('pdsa.labels.learnt') })}`)
    setPdsaEntry({ ...pdsaEntry, learnt: '' })
    setDisabledSave(false)
    setVisibleSnack(true)
  }

  const deletes = [targetDelete, actualDelete, obstacleDelete, stepDelete, learntDelete]

  return (
    <>
      <PdsaCalendar day={day} markedDates={markedDates} setDay={setDay} setVisible={setVisibleDialog} visible={visibleDialog} />

      <PdsaHeader day={day} setDay={setDay} setVisibleDialog={setVisibleDialog} />

      <ScrollView>
        <PageContainer>
          <TkCard>
            <TkCardTitle
              right={() => <TitleBar />}
              subtitle={day === getToday() ? `${i18n.t('calendar.today').toLowerCase()}` : ''}
              titleNumberOfLines={2}
              title={`${day} (${getDayOfWeek(day)})`}
            />
            <TkCardContent>
              {
                texts.flatMap((value, index) => {
                  return (
                    <View key={value}><TkText>{value}</TkText>
                      <TextInput
                        label={labels[index] as string}
                        left={<TextInput.Icon icon='content-duplicate' onPress={duplicates[index] as () => {}} />}
                        mode='outlined'
                        multiline
                        onChangeText={(txt) => (changes[index] as (txt: string) => {})(txt)}
                        right={<TextInput.Icon icon='trash-can' onPress={deletes[index] as () => {}} />}
                        value={(getAnswers(pdsaEntry))[index] as string}
                      />
                    </View>
                  )
                })
              }
            </TkCardContent>
          </TkCard>
        </PageContainer>
      </ScrollView>

      <TkSnackbar
        duration={500}
        message={snackMessage} visible={visibleSnack}
        setVisible={setVisibleSnack}
      />
    </>
  )
}

export default PdsaPage
