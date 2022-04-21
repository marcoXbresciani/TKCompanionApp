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
import * as React from 'react';
import i18next from 'i18next';
import {tEn, tItIT} from './app/i18n';
import {NativeModules, Platform} from 'react-native';
import {
    BottomNavigation,
    Provider as PaperProvider,
} from 'react-native-paper';
import HomePage from './app/pages/home/HomePage';
import {initReactI18next} from 'react-i18next';
import {tkDarkTheme, tkLightTheme} from './app/globals/Config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isDark} from './app/utils/Functions';
import DownloadPage from './app/pages/DownloadPage';
import DocsPage from './app/pages/docs/DocsPage';

const locale = (
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLanguages[0] ||
          NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier
).replace('_', '-');

const resources = {
    en: {translation: tEn},
    'it-IT': {translation: tItIT},
};

i18next.use(initReactI18next).init({
    cleanCode: true,
    compatibilityJSON: 'v3',
    debug: false,
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: 'en',
    lng: locale,
    nonExplicitSupportedLngs: true,
    resources,
});

const AppNavigator: React.FunctionComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'home',
            title: i18next.t('nav.home'),
            icon: 'home-outline',
        },
        {
            key: 'docs',
            title: i18next.t('nav.docs'),
            icon: 'book-outline',
        },
        {
            key: 'download',
            title: i18next.t('nav.download'),
            icon: 'download-outline',
        },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        home: HomePage,
        docs: DocsPage,
        download: DownloadPage,
    });

    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export const PreferencesContext = React.createContext({
    toggleTheme: () => {},
    isThemeDark: isDark(),
});

const App: React.FunctionComponent = () => {
    const [isThemeDark, setIsThemeDark] = React.useState(isDark());
    let theme = isThemeDark ? tkDarkTheme : tkLightTheme;

    const toggleTheme = React.useCallback(() => {
        return setIsThemeDark(!isThemeDark);
    }, [isThemeDark]);

    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            isThemeDark,
        }),
        [toggleTheme, isThemeDark],
    );

    return (
        <PreferencesContext.Provider value={preferences}>
            <PaperProvider
                settings={{
                    icon: (props) => <Ionicons {...props} />,
                }}
                theme={theme}
            >
                <AppNavigator />
            </PaperProvider>
        </PreferencesContext.Provider>
    );
};

export default App;
