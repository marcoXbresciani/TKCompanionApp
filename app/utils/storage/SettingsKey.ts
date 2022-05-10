import BasicStorage from './BasicStorage';

export enum AllowedSettings {
    DARK_THEME = 'dark',
    LANGUAGE = 'language',
}

class SettingsKey extends BasicStorage {
    getRoot(): string {
        return 'settings';
    }

    async write(key: AllowedSettings, value: string): Promise<void> {
        return super.write(key, value);
    }

    async read(key: AllowedSettings): Promise<string> {
        return super.read(key);
    }

    async remove(key: AllowedSettings): Promise<void> {
        return super.remove(key);
    }
}

export default SettingsKey;
