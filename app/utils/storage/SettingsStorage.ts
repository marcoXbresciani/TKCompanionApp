import TkKey from './TkKey';
import SettingsKey from './SettingsKey';
import SimpleKey from './SimpleKey';

class SettingsStorage {
    private static instance: SettingsKey;

    private constructor() {}

    public static getInstance(): SettingsKey {
        if (!SettingsStorage.instance) {
            SettingsStorage.instance = new TkKey(
                new SettingsKey(new SimpleKey()),
            );
        }

        return SettingsStorage.instance;
    }
}

export default SettingsStorage;
