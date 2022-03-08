import {configureFonts, DefaultTheme} from 'react-native-paper';

const fontConfig = {
    web: {
        regular: {
            fontFamily: 'FreeSans',
            fontWeight: '400' as '400',
        },
        medium: {
            fontFamily: 'FreeSansBold',
            fontWeight: '700' as '700',
        },
        light: {
            fontFamily: 'FreeSans',
            fontWeight: '300' as '300',
        },
        thin: {
            fontFamily: 'FreeSans',
            fontWeight: '100' as '100',
        },
    },
    ios: {
        regular: {
            fontFamily: 'FreeSans',
            fontWeight: '400' as '400',
        },
        medium: {
            fontFamily: 'FreeSansBold',
            fontWeight: '700' as '700',
        },
        light: {
            fontFamily: 'FreeSans',
            fontWeight: '300' as '300',
        },
        thin: {
            fontFamily: 'FreeSans',
            fontWeight: '100' as '100',
        },
    },
    default: {
        regular: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal' as 'normal',
        },
        medium: {
            fontFamily: 'FreeSansBold',
            fontWeight: 'bold' as 'bold',
        },
        light: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal' as 'normal',
        },
        thin: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal' as 'normal',
        },
    },
};

export const tkThemeConfig = {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        primary: 'royalblue',
        accent: 'gold',
        background: 'ghostwhite',
        surface: '#00ff00',
        error: 'crimson',
        text: 'black',
        onSurface: '#0000ff',
        // disabled: color('black').alpha(0.26).rgb().string(),
        // placeholder: color('black').alpha(0.54).rgb().string(),
        // backdrop: color('black').alpha(0.5).rgb().string(),
        notification: 'pink',
    },
    fonts: configureFonts(fontConfig),
    animation: {
        scale: 1.0,
    },
};
