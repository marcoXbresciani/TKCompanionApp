import {Appearance} from 'react-native';

export function isDark(): boolean {
    return Appearance.getColorScheme() === 'dark';
}
