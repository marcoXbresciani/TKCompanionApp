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
import {Linking} from 'react-native';
import * as React from 'react';
import {List} from 'react-native-paper';
import i18next from 'i18next';

const DownloadPage: React.FunctionComponent = () => (
    <>
        <List.Section>
            <List.Subheader>
                {i18next.t('download.title')}
            </List.Subheader>
            <List.Item
                description={i18next.t('download.pdf')}
                left={() => <List.Icon icon="download-outline" />}
                onPress={() => {
                    Linking.openURL(
                        'http://www-personal.umich.edu/~mrother/KATA_Files/5Q_Card.pdf',
                    );
                }}
                title={i18next.t('download.5q')}
                titleNumberOfLines={2}
            />
            <List.Item
                description={i18next.t('download.pdf')}
                left={() => <List.Icon icon="download-outline" />}
                onPress={() => {
                    Linking.openURL(
                        'http://www-personal.umich.edu/~mrother/KATA_Files/IK_Poster.pdf',
                    );
                }}
                title={i18next.t('download.4s')}
                titleNumberOfLines={2}
            />
            <List.Item
                description={i18next.t('download.pdf')}
                left={() => <List.Icon icon="download-outline" />}
                onPress={() => {
                    Linking.openURL(
                        'http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf',
                    );
                }}
                title={i18next.t('download.tkc')}
                titleNumberOfLines={2}
            />
            <List.Item
                description={i18next.t('download.jpg')}
                left={() => <List.Icon icon="download-outline" />}
                onPress={() => {
                    Linking.openURL(
                        'http://www-personal.umich.edu/~mrother/KATA_Files/KTS.jpg',
                    );
                }}
                title={i18next.t('download.kts')}
                titleNumberOfLines={2}
            />
        </List.Section>
    </>
);

export default DownloadPage;
