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
import styled from 'styled-components';
import {Card} from 'react-native-paper';
import {TkDarkTheme, TkLightTheme} from './Config';
import {isDark} from '../utils/Functions';

export const DefaultCard = styled(Card)`
    border: 1px solid
        ${isDark() ? TkDarkTheme.colors.text : TkLightTheme.colors.text};
    border-radius: 15px;
`;

export const DefaultCardTitle = styled(Card.Title)`
    border-bottom-color: ${isDark()
        ? TkDarkTheme.colors.primary
        : TkLightTheme.colors.primary};
    border-bottom-style: solid;
    border-bottom-width: 3px;
`;

export const DefaultCardContent = styled(Card.Content)`
    padding: 5%;
`;
