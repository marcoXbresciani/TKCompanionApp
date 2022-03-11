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
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import i18next from 'i18next';
import {tEn, tItIT} from './app/i18n';
import {NativeModules, Platform} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/about/AboutPage';
import KTSPage from './app/pages/KTSPage';
import TkcScreen from './app/pages/tkc/TkcPage';
import FiveQCard from './app/pages/5qcard/5QPage';
import {
    TabIcon5Q,
    TabIconAbout,
    TabIconHome,
    TabIconKTS,
    TabIconTKC,
} from './app/components/Tabs';
import {initReactI18next} from 'react-i18next';
import {tkThemeConfig} from './app/globals/Config';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const Tab = createBottomTabNavigator();

const AppNavigator: React.FunctionComponent = () => {
    return (
        <NavigationContainer theme={tkThemeConfig}>
            <Tab.Navigator
                backBehavior="history"
                initialRouteName="Home"
            >
                <Tab.Screen
                    name={i18next.t('nav.home')}
                    options={{
                        tabBarIcon: TabIconHome,
                    }}
                    component={HomePage}
                />
                <Tab.Screen
                    name={i18next.t('nav.5qcard')}
                    options={{
                        tabBarIcon: TabIcon5Q,
                    }}
                    component={FiveQCard}
                />
                <Tab.Screen
                    name={i18next.t('nav.kts')}
                    options={{
                        tabBarIcon: TabIconKTS,
                    }}
                    component={KTSPage}
                />
                <Tab.Screen
                    name={i18next.t('nav.tkc')}
                    options={{
                        tabBarIcon: TabIconTKC,
                    }}
                    component={TkcScreen}
                />
                <Tab.Screen
                    name={i18next.t('nav.about')}
                    component={AboutPage}
                    options={{
                        tabBarIcon: TabIconAbout,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const App: React.FunctionComponent = () => {
    return (
        <PaperProvider
            settings={{
                icon: (props) => <Ionicons {...props} />,
            }}
            theme={tkThemeConfig}
        >
            <AppNavigator />
        </PaperProvider>
    );
};

export default App;
