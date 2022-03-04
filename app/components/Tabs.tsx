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
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const FontedIcon = styled(Icon)`
    font-family: FreeSans;
    font-size: 16px;
    line-height: 27px;
`;

export const TabIconHome = ({color}: {color: string}) => (
    <FontedIcon name="home" color={color} size={16} />
);

export const TabIcon5Q = ({color}: {color: string}) => (
    <FontedIcon name="people-circle-outline" color={color} size={16} />
);

export const TabIconKTS = ({color}: {color: string}) => (
    <FontedIcon name="warning-outline" color={color} size={16} />
);

export const TabIconTKC = ({color}: {color: string}) => (
    <FontedIcon name="book-outline" color={color} size={16} />
);

export const TabIconAbout = ({color}: {color: string}) => (
    <FontedIcon
        name="information-circle-outline"
        color={color}
        size={16}
    />
);
