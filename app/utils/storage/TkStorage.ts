import TkKey from './TkKey';
import SimpleKey from './SimpleKey';
import {Storage} from './Storage';

class TkStorage {
    private static instance: Storage;

    private constructor() {}

    public static getInstance(): Storage {
        if (!TkStorage.instance) {
            TkStorage.instance = new TkKey(new SimpleKey());
        }

        return TkStorage.instance;
    }
}

export default TkStorage;
