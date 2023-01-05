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
import { ComposableKey } from './ComposableKey'
import { Storage } from './Storage'
import BaseStorage from './BaseStorage'
import SimpleKey from './SimpleKey'
import { StorableValue } from './StorableValue'

abstract class GenericStorage<T extends StorableValue>
implements ComposableKey, Storage<T> {
  protected component: ComposableKey
  private readonly baseStorage: BaseStorage

  constructor (component: ComposableKey) {
    this.component = component
    this.baseStorage = new BaseStorage(new SimpleKey())
  }

  getFullKey (key: string): string {
    return this.getRoot() !== ''
      ? this.getRoot() + '.' + this.component.getFullKey(key)
      : this.component.getFullKey(key)
  }

  abstract getRoot (): string

  async write (key: string, value: T): Promise<void> {
    const fullKey = this.getFullKey(key)
    await this.baseStorage.write(fullKey, value.toString())
  }

  async read (key: string): Promise<string | null> {
    const fullKey = this.getFullKey(key)
    return await this.baseStorage.read(fullKey)
  }

  async remove (key: string): Promise<void> {
    const fullKey = this.getFullKey(key)
    await this.baseStorage.remove(fullKey)
  }

  async clear (): Promise<void> {
    await this.baseStorage.clear()
  }
}

export default GenericStorage
