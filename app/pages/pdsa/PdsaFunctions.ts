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
import StorageFactory from '../../utils/storage/StorageFactory'
import PdsaEntry from '../../utils/storage/journal/PdsaEntry'
import i18n from '../../i18n/i18n'
import { Journal } from '../../utils/storage/journal/Journal'
import { getIso8601 } from '../../utils/Functions'

const marked = { marked: true }
const unMarked = { marked: false }

export const getMarkers = (coloursDay: {
  color: string
  selectedDotColor: string
}): {
  markedSelectedDay: {
    marked: boolean
    color: string
    selectedDotColor: string
    selected: boolean
  }
  markedDay: {
    marked: boolean
    color: string
    selectedDotColor: string
    selected: boolean
  }
  unmarkedSelectedDay: {
    marked: boolean
    color: string
    selectedDotColor: string
    selected: boolean
  }
} => ({
  markedDay: { ...coloursDay, ...marked, ...unSelected },
  markedSelectedDay: { ...coloursDay, ...marked, ...selected },
  unmarkedSelectedDay: { ...coloursDay, ...unMarked, ...selected }
})

export interface PreviousJournal {
  day: string
  entry: PdsaEntry
}

export const journalStorage = StorageFactory.getInstance().getJournalStorage()
export const labels = [`${i18n.t('pdsa.labels.target')}`, `${i18n.t('pdsa.labels.actual')}`, `${i18n.t('pdsa.labels.obstacle')}`, `${i18n.t('pdsa.labels.step')}`, `${i18n.t('pdsa.labels.learnt')}`]
export const selected = { selected: true }
export const unSelected = { selected: false }
export const texts = [`${i18n.t('pdsa.q1')}`, `${i18n.t('pdsa.q2')}`, `${i18n.t('pdsa.q3')}`, `${i18n.t('pdsa.q4')}`, `${i18n.t('pdsa.q5')}`]

export const getAnswers = (pdsaEntry: PdsaEntry): string[] => {
  return [pdsaEntry.target, pdsaEntry.actual, pdsaEntry.obstacle, pdsaEntry.step, pdsaEntry.learnt]
}

export const getDayOfWeek = (currentDay: string): string => {
  const date = new Date(currentDay)

  let result = '?'
  if (date.toString() !== 'Invalid Date') {
    const dayOfWeek = date.getDay()
    const weekDays: string[] = i18n.t('calendar.dayNamesShort', { returnObjects: true })

    if ((dayOfWeek >= 0) && (dayOfWeek <= 6)) {
      if ((weekDays != null) && (weekDays.length === 7)) {
        if ((weekDays[dayOfWeek] !== null) && (weekDays[dayOfWeek] !== undefined)) {
          result = weekDays[dayOfWeek] as string
        }
      }
    }
  }
  return result
}

export const getNextDay = (date: string): string => {
  const currentDay = new Date(date)
  currentDay.setUTCDate(currentDay.getUTCDate() + 1)
  return getIso8601(currentDay.valueOf())
}

export const getPreviousDay = (date: string): string => {
  const currentDay = new Date(date)
  currentDay.setUTCDate(currentDay.getUTCDate() - 1)
  return getIso8601(currentDay.valueOf())
}

export const getPreviousEntry = async (field: string, currentDay: string): Promise<PreviousJournal> => {
  let result: PreviousJournal = { day: '', entry: new PdsaEntry() }
  let found = 7
  let journal: Journal = {}

  for (let previousDay = getPreviousDay(currentDay); found > 0; previousDay = getPreviousDay(previousDay), found--) {
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

export const getToday = (): string => {
  return getIso8601(new Date().valueOf())
}
