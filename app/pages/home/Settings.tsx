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
import {List, Switch} from 'react-native-paper';
import {View} from 'react-native';
import {TkText} from '../../globals/Texts';
import styled from 'styled-components';
import StorageFactory from '../../utils/storage/StorageFactory';
import {AllowedSettings} from '../../utils/storage/settings/AllowedSettings';
import {PreferencesContext} from '../../utils/Constants';
import i18n from '../../i18n/i18n';

const RowView = styled(View)`
    flex-direction: row;
`;

const Settings: React.FunctionComponent = () => {
    const storage = StorageFactory.getSettingsStorage();
    const {toggleTheme, isThemeDark} =
        React.useContext(PreferencesContext);

    return (
        <>
            <RowView>
                <TkText>{i18n.t('settings.theme')}</TkText>
                <Switch
                    value={isThemeDark}
                    onValueChange={() => {
                        toggleTheme();
                        storage
                            .write(
                                AllowedSettings.DARK_THEME,
                                (!isThemeDark).toString(),
                            )
                            .then();
                    }}
                />
            </RowView>
            <List.AccordionGroup>
                <List.Accordion
                    id={1}
                    left={(props) => (
                        <List.Icon {...props} icon="language-outline" />
                    )}
                    title={i18n.t('settings.language')}
                >
                    <List.Item
                        left={(props) => (
                            <List.Icon {...props} icon="flag-outline" />
                        )}
                        title="English"
                        onPress={() => {
                            i18n.changeLanguage('en').then();
                            storage
                                .write(AllowedSettings.LANGUAGE, 'en')
                                .then();
                        }}
                    />
                    <List.Item
                        disabled={false}
                        left={(props) => (
                            <List.Icon {...props} icon="flag-outline" />
                        )}
                        title="Italiano"
                        onPress={() => {
                            i18n.changeLanguage('it-IT').then();
                            storage
                                .write(
                                    AllowedSettings.LANGUAGE,
                                    'it-IT',
                                )
                                .then();
                        }}
                    />
                    <List.Item
                        disabled={true}
                        // left={(props) => (
                        //     <List.Icon {...props} icon="flag-outline" />
                        // )}
                        title="Norsk (Bokmål)"
                        onPress={() => {
                            i18n.changeLanguage('nb-NO').then();
                            storage
                                .write(
                                    AllowedSettings.LANGUAGE,
                                    'nb-NO',
                                )
                                .then();
                        }}
                    />
                </List.Accordion>
            </List.AccordionGroup>
        </>
    );
};

export default Settings;
