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
import {APP_NAME, APP_VERSION} from './about/Version';
import PageContainer from '../globals/PageContainer';
import {Card} from 'react-native-paper';
import i18next from 'i18next';
import {DefaultParagraph} from '../globals/Texts';

const HomePage: React.FunctionComponent = () => (
    <PageContainer>
        <Card>
            <Card.Cover
                source={require('../assets/images/dh000004.jpg')}
            />
            <Card.Title
                title={APP_NAME}
                subtitle={APP_VERSION}
                subtitleNumberOfLines={2}
            />
            <Card.Content>
                <DefaultParagraph>
                    {i18next.t('app.short')}
                </DefaultParagraph>
            </Card.Content>
        </Card>
    </PageContainer>
);

export default HomePage;
