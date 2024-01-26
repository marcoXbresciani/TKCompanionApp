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
import { ComposableKey } from './ComposableKey'
import { Storage } from './Storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

class BaseStorage implements Storage<string> {
  protected component: ComposableKey

  constructor (component: ComposableKey) {
    this.component = component
  }

  async write (key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.error(`Error '${error as string}' while writing '${key}'.`)
    }
  }

  async read (key: string): Promise<string | null> {
    let result = null
    try {
      result = await AsyncStorage.getItem(key)
    } catch (error) {
      console.error(`Error '${error as string}' while reading '${key}'.`)
    }
    return result
  }

  async remove (key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.error(`Error '${error as string}' while removing '${key}'.`)
    }
  }

  async clear (): Promise<void> {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.error(`Error '${error as string}' while clearing storage.`)
    }
  }
}

export default BaseStorage
