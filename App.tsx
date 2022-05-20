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
import {Provider as PaperProvider} from 'react-native-paper';
import {tkDarkTheme, tkLightTheme} from './app/globals/Config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isDark} from './app/utils/Functions';
import StorageFactory from './app/utils/storage/StorageFactory';
import {AllowedSettings} from './app/utils/storage/settings/AllowedSettings';
import {PreferencesContext} from './app/utils/Constants';
import TkNavigator from './app/globals/TkNavigator';

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
                <TkNavigator />
            </PaperProvider>
        </PreferencesContext.Provider>
    );
};

export default App;
