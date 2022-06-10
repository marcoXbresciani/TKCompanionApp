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
import {Text} from 'react-native';

export const Text5Q = styled(Text)`
    color: black;
    font-family: FreeSans, sans-serif;
    font-size: 16px;
    line-height: 27px;
`;

export const Bold5Q = styled(Text5Q)`
    font-family: FreeSansBold, sans-serif;
`;

export const Centered5Q = styled(Text5Q)`
    text-align: center;
`;

export const BoldCentered5Q = styled(Centered5Q)`
    font-family: FreeSansBold, sans-serif;
`;

export const Title5Q = styled(BoldCentered5Q)`
    font-size: 20px;
    line-height: 33px;
`;

export const Smaller5Q = styled(Text5Q)`
    font-size: 13px;
    line-height: 23px;
`;
