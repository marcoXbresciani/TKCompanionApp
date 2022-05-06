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
import {Storage} from './Storage';

export enum SettingsType {
    DARK_THEME = 'dark',
}

export class SettingsStorage {
    private static SETTINGS_ROOT: string = 'settings.';

    private static getFullKey(key: string) {
        return SettingsStorage.SETTINGS_ROOT + key;
    }

    static async write(key: SettingsType, value: string) {
        const fullKey = this.getFullKey(key);
        try {
            await Storage.write(fullKey, value);
            console.info(`Saved setting: '${fullKey}' = '${value}'.`);
        } catch (error) {
            console.error(
                `Error '${error}' while writing setting '${fullKey}'.`,
            );
        }
    }

    static async read(key: SettingsType) {
        const fullKey = this.getFullKey(key);
        try {
            let result = await Storage.read(fullKey);
            console.info(`Read setting '${fullKey}' = '${result}'.`);
            return result;
        } catch (error) {
            console.error(
                `Error '${error}' while reading setting '${fullKey}'.`,
            );
        }
    }

    static async remove(key: SettingsType) {
        const fullKey = this.getFullKey(key);
        try {
            await Storage.remove(fullKey);
            console.info(`Removed setting '${fullKey}'.`);
        } catch (error) {
            console.error(
                `Error '${error}' while removing setting '${fullKey}'`,
            );
        }
    }
}
