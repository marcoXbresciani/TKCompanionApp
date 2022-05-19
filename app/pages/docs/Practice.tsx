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
import i18next from '../../i18n/i18n';
import {TkParagraph} from '../../globals/Texts';
import {Card} from 'react-native-paper';

const Practice: React.FunctionComponent = () => (
    <Card>
        <Card.Title
            title={i18next.t('practice.title')}
            titleNumberOfLines={2}
        />
        <Card.Content>
            <TkParagraph>{i18next.t('practice.1')}</TkParagraph>
        </Card.Content>
        <Card.Content>
            <TkParagraph>{i18next.t('practice.2')}</TkParagraph>
        </Card.Content>
        <Card.Content>
            <TkParagraph>{i18next.t('practice.3')}</TkParagraph>
        </Card.Content>
        <Card.Content>
            <TkParagraph>{i18next.t('practice.4')}</TkParagraph>
        </Card.Content>
        <Card.Content>
            <TkParagraph>{i18next.t('practice.5')}</TkParagraph>
        </Card.Content>
        <Card.Content>
            <TkParagraph>{i18next.t('practice.6')}</TkParagraph>
        </Card.Content>
    </Card>
);

export default Practice;
