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
import { Appearance } from 'react-native'

export function isDark (): boolean {
  return Appearance.getColorScheme() === 'dark'
}

export const getPreviousDay = (date: string): string => {
  const currentDay = new Date(date)
  currentDay.setUTCDate(currentDay.getUTCDate() - 1)
  return getIso8601(currentDay.valueOf())
}

export const getToday = (): string => {
  return getIso8601(new Date().valueOf())
}

export const getNextDay = (date: string): string => {
  const currentDay = new Date(date)
  currentDay.setUTCDate(currentDay.getUTCDate() + 1)
  return getIso8601(currentDay.valueOf())
}

export const getIso8601 = (date: number): string => {
  return new Date(date).toISOString().substring(0, 10)
}
