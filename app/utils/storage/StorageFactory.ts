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
import TkStorage from './TkStorage'
import SimpleKey from './SimpleKey'
import SettingsStorage from './settings/SettingsStorage'
import PdsaStorage from './pdsa/PdsaStorage'
import JournalStorage from './PdsaJournal/JournalStorage'

class StorageFactory {
  private static instance: StorageFactory
  private static tkStorage: TkStorage
  private static settingsStorage: SettingsStorage
  private static journalStorage: JournalStorage
  private static pdsaStorage: PdsaStorage

  private constructor () {}

  public static getInstance (): StorageFactory {
    if (StorageFactory.instance === undefined) {
      StorageFactory.instance = new StorageFactory()
    }

    return StorageFactory.instance
  }

  getTkStorage (): TkStorage {
    if (StorageFactory.tkStorage === undefined) {
      StorageFactory.tkStorage = new TkStorage(new SimpleKey())
    }

    return StorageFactory.tkStorage
  }

  getSettingsStorage (): SettingsStorage {
    if (StorageFactory.settingsStorage === undefined) {
      StorageFactory.settingsStorage = new SettingsStorage(
        new TkStorage(new SimpleKey())
      )
    }

    return StorageFactory.settingsStorage
  }

  getJournalStorage (): JournalStorage {
    if (StorageFactory.journalStorage === undefined) {
      StorageFactory.journalStorage = new JournalStorage(
        new TkStorage(new SimpleKey())
      )
    }

    return StorageFactory.journalStorage
  }

  getPdsaStorage (): PdsaStorage {
    if (StorageFactory.pdsaStorage === undefined) {
      StorageFactory.pdsaStorage = new PdsaStorage(
        new TkStorage(new SimpleKey())
      )
    }

    return StorageFactory.pdsaStorage
  }
}

export default StorageFactory
