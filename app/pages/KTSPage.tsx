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
import PageContainer from '../globals/PageContainer';
import {TKWDownloadButton} from '../globals/Buttons';
import i18next from 'i18next';
import {
    CenteredSubheading,
    CenteredTitle,
    DefaultText,
} from '../globals/Texts';

const KTSPage: React.FunctionComponent = () => (
    <PageContainer>
        <CenteredTitle>{i18next.t('kts.title')}</CenteredTitle>
        <CenteredSubheading>{i18next.t('kts.tip')}</CenteredSubheading>
        <DefaultText>{i18next.t('kts.text')}</DefaultText>
        <TKWDownloadButton
            onPress={() => {
                Linking.openURL(
                    'http://www-personal.umich.edu/~mrother/KATA_Files/KTS.jpg',
                );
            }}
        />
    </PageContainer>
);

export default KTSPage;
