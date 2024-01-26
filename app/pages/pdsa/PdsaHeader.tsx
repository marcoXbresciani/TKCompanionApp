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
import { Appbar } from 'react-native-paper'
import i18n from '../../i18n/i18n'
import * as React from 'react'
import { getNextDay, getPreviousDay, getToday } from './PdsaFunctions'

interface HeaderProps {
  day: string
  setDay: React.Dispatch<React.SetStateAction<string>>
  setVisibleDialog: React.Dispatch<React.SetStateAction<boolean>>
}

const PdsaHeader: React.FunctionComponent<HeaderProps> = ({
  day,
  setDay,
  setVisibleDialog
}) => {
  return (
    <Appbar.Header mode='small'>
      <Appbar.Content title={i18n.t('pdsa.title')} />

      <Appbar.Action
        icon='calendar-edit'
        onPress={() => { setVisibleDialog(true) }}
      />
      <Appbar.Action
        icon='calendar-arrow-left'
        onPress={() => { setDay(getPreviousDay(day)) }}
      />
      <Appbar.Action
        icon='calendar-today'
        onPress={() => { setDay(getToday()) }}
      />
      <Appbar.Action
        disabled={day === getToday()} icon='calendar-arrow-right'
        onPress={() => { setDay(getNextDay(day)) }}
      />
    </Appbar.Header>
  )
}

export default PdsaHeader
