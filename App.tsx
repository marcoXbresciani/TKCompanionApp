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
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/about/AboutPage';
import FiveQPage from './app/pages/5qcard/FiveQPage';
import {initReactI18next} from 'react-i18next';
import {TkDarkTheme, TkLightTheme} from './app/globals/Config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import KTSPage from './app/pages/KTSPage';
import TkcPage from './app/pages/tkc/TkcPage';
import FourStepsPage from './app/pages/FourStepsPage';
import {Appearance} from 'react-native';

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
        { key: 'home', title: i18next.t('nav.home'), icon: 'home'},
        { key: 'card5q', title: i18next.t('nav.5qcard'), icon: 'chatbubbles-outline' },
        { key: 'kts', title: i18next.t('nav.kts'), icon: 'warning-outline' },
        { key: 'tkc', title: i18next.t('nav.tkc'), icon: 'book-outline' },
        // { key: 'language', title: i18next.t('nav.language'), icon: 'language-outline' },
        { key: 'about', title: i18next.t('nav.about'), icon: 'information-circle-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomePage,
        card5q: FiveQpage,
        kts: KTSPage,
        tkc: TkcPage,
        language: TkcPage,
        about: AboutPage,
    });

    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

function isDark(): boolean {
    return Appearance.getColorScheme() === 'dark';
}

const App: React.FunctionComponent = () => {
    return (
        <PaperProvider
            settings={{
                icon: (props) => <Ionicons {...props} />,
            }}
            theme={isDark() ? TkDarkTheme : TkLightTheme}
        >
            <AppNavigator />
        </PaperProvider>
    );
};

export default App;
