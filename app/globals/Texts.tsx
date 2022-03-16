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
import {Paragraph, Subheading, Text, Title} from 'react-native-paper';

export const DefaultText = styled(Text)`
    font-size: 16px;
    line-height: 27px;
`;

export const DefaultParagraph = styled(Paragraph)`
    font-size: 16px;
    line-height: 27px;
`;

export const CenteredTitle = styled(Title)`
    text-align: center;
`;

export const CenteredSubheading = styled(Subheading)`
    text-align: center;
`;

// export const BiggerText = styled(DefaultText)`
//         font-color: back;
//         font-size: 20px;
//         line-height: 33px;
// `;

export const SmallerText = styled(DefaultText)`
    font-size: 13px;
    line-height: 23px;
`;

// export const ButtonText = styled(SmallerText)`
//     color: white;
// `;

export const BoldText = styled(DefaultText)`
    font-weight: bold;
`;

export const CenteredText = styled(DefaultText)`
    text-align: center;
`;
