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
import EncryptedStorage from 'react-native-encrypted-storage';

export class Storage {
    private static APP_ROOT: string = 'tkcompanionapp.';

    static async write(key: string, value: string) {
        try {
            await EncryptedStorage.setItem(
                Storage.APP_ROOT + key,
                value,
            );
            console.log('Saved', key, '=', value);
        } catch (error) {
            console.error('Error', error, 'while writing', key);
        }
    }

    static async read(key: string) {
        try {
            let result = await EncryptedStorage.getItem(
                Storage.APP_ROOT + key,
            );
            console.log('Read', key, '=', result);
            return result;
        } catch (error) {
            console.error('Error', error, 'while reading', key);
        }
    }

    static async remove(key: string) {
        try {
            await EncryptedStorage.removeItem(Storage.APP_ROOT + key);
            console.log('Removed', key);
        } catch (error) {
            console.error('Error', error, 'while removing', key);
        }
    }

    static async clear() {
        try {
            await EncryptedStorage.clear();
            console.log('Encrypted storage cleared');
        } catch (error) {
            console.error('Error', error, 'while clearing storage');
        }
    }
}
