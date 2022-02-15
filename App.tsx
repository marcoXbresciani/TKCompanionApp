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

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import AboutScreen from "./screens/about/AboutScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/glyphmaps/Ionicons.json';

// import KTSScreen from "./screens/KTSScreen";
// import FiveQCard from "./screens/5qcard/5QScreen";
// import TkcScreen from "./screens/tkc/TkcScreen";
import i18next from 'i18next';
import {tEn, tItIT} from './i18n';
// import {Text, View} from 'react-native';

// import {Platform, NativeModules} from 'react-native';
import HomeScreen from './app/screens/HomeScreen';

// const locale =
//         Platform.OS === 'ios'
//                 ? NativeModules.SettingsManager.settings
//                           .AppleLanguages[0] ||
//                   NativeModules.SettingsManager.settings.AppleLocale
//                 : NativeModules.I18nManager.localeIdentifier;

type IoniconsIconNames = keyof typeof Ionicons;

const resources = {
        en: {
                translation: tEn,
        },
        'it-IT': {
                translation: tItIT,
        },
};

i18next.init({
        cleanCode: true,
        compatibilityJSON: 'v3',
        debug: false,
        interpolation: {
                escapeValue: false,
        },
        fallbackLng: 'en',
        lng: 'it-IT',
        nonExplicitSupportedLngs: true,
        resources: resources,
});

const Tab = createMaterialBottomTabNavigator();

const TabIcon5Q = ({color}: {color: string}) => (
        <Icon
                style={{fontFamily: 'OpenSans', fontSize: 16}}
                name="people-circle-outline"
                color={color}
                size={16}
        />
);

const TabIconAbout = ({color}: {color: string}) => (
        <Icon
                style={{fontFamily: 'OpenSans', fontSize: 16}}
                name="information-circle-outline"
                color={color}
                size={16}
        />
);

const TabIconHome = ({color}: {color: string}) => (
        <Icon
                style={{fontFamily: 'OpenSans', fontSize: 16}}
                name="home"
                color={color}
                size={16}
        />
);

const TabIconKTS = ({color}: {color: string}) => (
        <Icon
                style={{fontFamily: 'OpenSans', fontSize: 16}}
                name="warning-outline"
                color={color}
                size={16}
        />
);

const TabIconTKC = ({color}: {color: string}) => (
        <Icon
                style={{fontFamily: 'OpenSans', fontSize: 16}}
                name="book-outline"
                color={color}
                size={16}
        />
);

const AppNavigator: React.FunctionComponent = () => {
        return (
                <NavigationContainer>
                        <Tab.Navigator
                                backBehavior="history"
                                barStyle={{
                                        backgroundColor: 'royalblue',
                                }}
                                initialRouteName="Home">
                                <Tab.Screen
                                        name={i18next.t('nav.home')}
                                        options={{
                                                tabBarIcon: TabIconHome,
                                        }}
                                        component={HomeScreen}
                                />
                                <Tab.Screen
                                        name={i18next.t('nav.5qcard')}
                                        options={{
                                                tabBarIcon: TabIcon5Q,
                                        }}
                                        component={HomeScreen}
                                />
                                <Tab.Screen
                                        name={i18next.t('nav.kts')}
                                        options={{
                                                tabBarIcon: TabIconKTS,
                                        }}
                                        component={HomeScreen}
                                />
                                <Tab.Screen
                                        name={i18next.t('nav.tkc')}
                                        options={{
                                                tabBarIcon: TabIconTKC,
                                        }}
                                        component={HomeScreen}
                                />
                                <Tab.Screen
                                        name={i18next.t('nav.about')}
                                        component={HomeScreen}
                                        options={{
                                                tabBarIcon: TabIconAbout,
                                        }}
                                />
                        </Tab.Navigator>
                </NavigationContainer>
        );
};

const App: React.FunctionComponent = () => {
        return <AppNavigator />;
};

export default App;
