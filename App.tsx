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
import {
    BottomNavigation,
    Provider as PaperProvider,
} from 'react-native-paper';
import HomePage from './app/pages/home/HomePage';
import {tkDarkTheme, tkLightTheme} from './app/globals/Config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isDark} from './app/utils/Functions';
import DownloadPage from './app/pages/DownloadPage';
import DocsPage from './app/pages/docs/DocsPage';
import PdsaPage from './app/pages/pdsa/PdsaPage';
import StorageFactory from './app/utils/storage/StorageFactory';
import {AllowedSettings} from './app/utils/storage/settings/AllowedSettings';
import i18next from './app/i18n/i18n';
import {PreferencesContext} from './app/utils/Constants';

const AppNavigator: React.FunctionComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'home',
            title: i18next.t('nav.home'),
            icon: 'home-outline',
        },
        {
            key: 'pdsa',
            title: i18next.t('nav.pdsa'),
            icon: 'journal-outline',
        },
        {
            key: 'docs',
            title: i18next.t('nav.docs'),
            icon: 'library-outline',
        },
        {
            key: 'download',
            title: i18next.t('nav.download'),
            icon: 'download-outline',
        },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        home: HomePage,
        pdsa: PdsaPage,
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

    StorageFactory.getSettingsStorage()
        .read(AllowedSettings.DARK_THEME)
        .then((r) => setIsThemeDark(r === 'true'));

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
