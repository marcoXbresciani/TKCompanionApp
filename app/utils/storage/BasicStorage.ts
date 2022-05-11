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
import {Key} from './Key';
import {Storage} from './Storage';
import EncryptedStorage from 'react-native-encrypted-storage';

abstract class BasicStorage implements Key, Storage {
    protected component: Key;

    constructor(component: Key) {
        this.component = component;
    }

    getFullKey(key: string): string {
        return this.getRoot() !== ''
            ? this.getRoot() + '.' + this.component.getFullKey(key)
            : this.component.getFullKey(key);
    }

    abstract getRoot(): string;

    async write(key: string, value: string): Promise<void> {
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

    async read(key: string): Promise<string> {
        const fullKey = this.getFullKey(key);
        let result: string = fullKey;
        try {
            result =
                (await EncryptedStorage.getItem(fullKey)) || fullKey;
            console.debug(`Read '${fullKey}' = '${result}'.`);
        } catch (error) {
            console.error(
                `Error '${error}' while reading '${fullKey}'.`,
            );
        }
        return result;
    }

    async remove(key: string): Promise<void> {
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

    async clear() {
        try {
            await EncryptedStorage.clear();
            console.debug('Encrypted storage cleared');
        } catch (error) {
            console.error(`Error '${error}' while clearing storage.`);
        }
    }
}

export default BasicStorage;
