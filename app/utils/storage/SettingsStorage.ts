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

export class SettingsStorage {
    private static SETTINGS_ROOT: string = 'settings.';
    public static THEME: string = 'theme';

    static async write(key: string, value: string) {
        try {
            await Storage.write(
                SettingsStorage.SETTINGS_ROOT + key,
                value,
            );
            console.log('Saved setting', key, '=', value);
        } catch (error) {
            console.error('Error', error, 'while writing setting', key);
        }
    }

    static async read(key: string) {
        try {
            let result = await Storage.read(
                SettingsStorage.SETTINGS_ROOT + key,
            );
            console.log('Read setting', key, '=', result);
            return result;
        } catch (error) {
            console.error('Error', error, 'while reading setting', key);
        }
    }

    static async remove(key: string) {
        try {
            await Storage.remove(SettingsStorage.SETTINGS_ROOT + key);
            console.log('Removed setting', key);
        } catch (error) {
            console.error(
                'Error',
                error,
                'while removing setting',
                key,
            );
        }
    }
}
