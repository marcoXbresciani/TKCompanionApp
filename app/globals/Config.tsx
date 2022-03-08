import {configureFonts, DefaultTheme} from 'react-native-paper';

const fontConfig = {
    web: {
        regular: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'FreeSansBold',
            fontWeight: 'bold',
        },
        light: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal',
        },
    },
    ios: {
        regular: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'FreeSansBold',
            fontWeight: 'bold',
        },
        light: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal',
        },
    },
    default: {
        regular: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'FreeSansBold',
            fontWeight: 'bold',
        },
        light: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'FreeSans',
            fontWeight: 'normal',
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
        // accent: 'gold',
        // background: '#f0f0f0',
        // surface: '#ffff00',
        error: 'crimson',
        text: 'black',
        // onSurface: '#000000',
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
