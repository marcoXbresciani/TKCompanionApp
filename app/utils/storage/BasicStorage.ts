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
