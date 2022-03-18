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
    Provider as PaperProvider
} from 'react-native-paper';
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/about/AboutPage';
import FiveQpage from './app/pages/5qcard/FiveQPage';
import {initReactI18next} from 'react-i18next';
import {tkTheme} from './app/globals/Config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import KTSPage from './app/pages/KTSPage';
import TkcPage from './app/pages/tkc/TkcPage';

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


    // return (
    //     <NavigationContainer theme={tkTheme}>
    //         <Tab.Navigator
    //             backBehavior="history"
    //             initialRouteName="Home"
    //         >
    //             <Tab.Screen
    //                 name={i18next.t('nav.home.icon')}
    //                 options={{
    //                     tabBarIcon: TabIconHome,
    //                     headerTitle: i18next.t('nav.home.title'),
    //                 }}
    //                 component={HomePage}
    //             />
    //             <Tab.Screen
    //                 name={i18next.t('nav.5qcard.icon')}
    //                 options={{
    //                     tabBarIcon: TabIcon5Q,
    //                     headerTitle: i18next.t('nav.5qcard.title'),
    //                 }}
    //                 component={FiveQCard}
    //             />
    //             {/*<Tab.Screen*/}
    //             {/*    name={i18next.t('nav.menu.icon')}*/}
    //             {/*    options={{*/}
    //             {/*        tabBarIcon: TabIconMenu,*/}
    //             {/*        headerTitle: i18next.t('nav.menu.title'),*/}
    //             {/*    }}*/}
    //             {/*    component={FiveQCard}*/}
    //             {/*/>*/}
    //             <Tab.Screen
    //                 name={i18next.t('nav.kts')}
    //                 options={{
    //                     tabBarIcon: TabIconKTS,
    //                     headerTitle: i18next.t('nav.kts.title'),
    //                 }}
    //                 component={KTSPage}
    //             />
    //             <Tab.Screen
    //                 name={i18next.t('nav.tkc')}
    //                 options={{
    //                     tabBarIcon: TabIconTKC,
    //                     headerTitle: i18next.t('nav.tkc.title'),
    //                 }}
    //                 component={TkcPage}
    //             />
    //             <Tab.Screen
    //                 name={i18next.t('nav.settings.icon')}
    //                 component={AboutPage}
    //                 options={{
    //                     tabBarIcon: TabIconSettings,
    //                     headerTitle: i18next.t('nav.settings.title'),
    //                 }}
    //             />
    //             <Tab.Screen
    //                 name={i18next.t('nav.about.icon')}
    //                 component={AboutPage}
    //                 options={{
    //                     tabBarIcon: TabIconAbout,
    //                     headerTitle: i18next.t('nav.about.title'),
    //                 }}
    //             />
    //         </Tab.Navigator>
    //     </NavigationContainer>
    // );
};

const App: React.FunctionComponent = () => {
    return (
        <PaperProvider
            settings={{
                icon: (props) => <Ionicons {...props} />,
            }}
            theme={tkTheme}
        >
            <AppNavigator />
        </PaperProvider>
    );
};

export default App;
