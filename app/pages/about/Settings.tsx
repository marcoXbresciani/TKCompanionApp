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
import {List} from 'react-native-paper';
import i18next from 'i18next';
import {ScrollView} from 'react-native';

const Settings: React.FunctionComponent = () => {
    return (
        <ScrollView>
            <List.AccordionGroup>
                <List.Accordion
                    id={1}
                    left={(props) => (
                        <List.Icon {...props} icon="language-outline" />
                    )}
                    title={i18next.t('settings.language')}
                >
                    <List.Item
                        left={(props) => (
                            <List.Icon {...props} icon="flag-outline" />
                        )}
                        title="English"
                        onPress={() => {
                            i18next.changeLanguage('en').then();
                        }}
                    />
                    <List.Item
                        disabled={false}
                        left={(props) => (
                            <List.Icon {...props} icon="flag-outline" />
                        )}
                        title="Italiano"
                        onPress={() => {
                            i18next.changeLanguage('it-IT').then();
                        }}
                    />
                    <List.Item disabled={true} title="日本語" />
                </List.Accordion>
            </List.AccordionGroup>
        </ScrollView>
    );
};

export default Settings;
