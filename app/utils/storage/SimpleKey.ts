import {Key} from './Key';

class SimpleKey implements Key {
    getFullKey(key: string): string {
        return key;
    }

    getRoot(): string {
        return '';
    }
}

export default SimpleKey;
