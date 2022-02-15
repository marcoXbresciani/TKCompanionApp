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

const customFonts = {
        OpenSans: require('../../assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('../../assets/fonts/OpenSans-Bold.ttf'),
        OpenSansItalic: require('../../assets/fonts/OpenSans-Italic.ttf'),
};

export const DefaultText = styled(Text)`
        font-family: OpenSans;
        font-size: 18px;
        line-height: 31px;
`;

// export const BiggerText = styled(DefaultText)`
//         font-size: 20px;
//         line-height: 34px;
// `;
// export const ButtonText = styled(DefaultText)`
//         font-size: 16px;
// `;
// export const SmallerText = styled(ButtonText)`
//         line-height: 27px;
// `;
//
// export const BoldText = styled(DefaultText)`
//         font-family: OpenSansBold;
// `;
//
// export const JustifiedText = styled(DefaultText)`
//         text-align: justify;
// `;
export const CenteredText = styled(DefaultText)`
        text-align: center;
`;

// export const BoldCentered = styled(CenteredText)`
//         font-family: OpenSansBold;
// `;
//
// export const JustifiedMargin = styled(JustifiedText)`
//         margin: 25px;
// `;

export const TitleText = styled(CenteredText)`
        font-family: OpenSansBold;
        font-size: 20px;
        line-height: 34px;
`;
