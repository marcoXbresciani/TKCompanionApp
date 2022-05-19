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
import i18next from '../i18n/i18n';
import {Caption, Subheading, Title} from 'react-native-paper';
import styled from 'styled-components';
import {APP_NAME, APP_VERSION} from '../utils/Constants';

export const CenteredTitle = styled(Title)`
    text-align: center;
`;

export const CenteredSubheading = styled(Subheading)`
    text-align: center;
`;

const Version: React.FunctionComponent = () => {
    return (
        <>
            <CenteredTitle>{APP_NAME}</CenteredTitle>
            <CenteredSubheading>{APP_VERSION}</CenteredSubheading>
            <Caption>{i18next.t('app.short')}</Caption>
        </>
    );
};
export default Version;
