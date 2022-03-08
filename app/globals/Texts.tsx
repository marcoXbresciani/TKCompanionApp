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
import {Subheading, Title} from 'react-native-paper';

export const CenteredTitle = styled(Title)`
    text-align: center;
`;

export const CenteredSubheading = styled(Subheading)`
    text-align: center;
`;

export const DefaultText = styled(Text)`
    color: black;
    font-family: FreeSans;
    font-size: 16px;
    line-height: 27px;
`;

// export const BiggerText = styled(DefaultText)`
//         font-color: back;
//         font-size: 20px;
//         line-height: 33px;
// `;
export const SmallerText = styled(DefaultText)`
    color: black;
    font-size: 13px;
    line-height: 23px;
`;
export const ButtonText = styled(SmallerText)`
    color: white;
`;

export const BoldText = styled(DefaultText)`
    font-family: FreeSansBold;
    //font-weight: bold;
`;

export const JustifiedText = styled(DefaultText)`
    color: black;
    text-align: justify;
`;
export const CenteredText = styled(DefaultText)`
    color: black;
    text-align: center;
`;

export const BoldCentered = styled(CenteredText)`
    font-family: FreeSansBold;
    //font-weight: bold;
`;

export const JustifiedMargin = styled(JustifiedText)`
    margin: 25px;
`;

export const TitleText = styled(BoldCentered)`
    font-size: 20px;
    line-height: 33px;
`;
