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
    private static APP_ROOT = 'tkcompanionapp.';

    private static getFullKey(key: string) {
        return Storage.APP_ROOT + key;
    }

    static async write(key: string, value: string) {
        const fullKey = this.getFullKey(key);
        try {
            await EncryptedStorage.setItem(fullKey, value);
            console.debug(`Saved '${fullKey}' = '${value}'.`);
        } catch (error) {
            console.error(
                `Error '${error}' while writing '${fullKey}'.`,
            );
        }
    }

    static async read(key: string) {
        const fullKey = this.getFullKey(key);
        try {
            let result = await EncryptedStorage.getItem(fullKey);
            console.debug(`Read '${fullKey}' = '${result}'.`);
            return result;
        } catch (error) {
            console.error(
                `Error '${error}' while reading '${fullKey}'.`,
            );
        }
    }

    static async remove(key: string) {
        const fullKey = this.getFullKey(key);
        try {
            await EncryptedStorage.removeItem(fullKey);
            console.log(`Removed '${fullKey}'.`);
        } catch (error) {
            console.error(
                `Error '${error}' while removing '${fullKey}'.`,
            );
        }
    }

    static async clear() {
        try {
            await EncryptedStorage.clear();
            console.debug('Encrypted storage cleared');
        } catch (error) {
            console.error(`Error '${error}' while clearing storage.`);
        }
    }
}
