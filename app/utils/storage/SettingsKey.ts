import BasicStorage from './BasicStorage';

export enum SettingsType {
    DARK_THEME = 'dark',
}

class SettingsKey extends BasicStorage {
    getRoot(): string {
        return 'settings';
    }
}

export default SettingsKey;
