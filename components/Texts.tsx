/*
 * Copyright © 2021-2022 Marco Bresciani
 * This file is part of TKCompanionApp.
 *
 * TKCompanionApp is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * TKCompanionApp is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Foobar. If not, see <https://www.gnu.org/licenses/>.
 *
 * SPDX-FileCopyrightText: 2021-2022 Marco Bresciani
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import styled from "styled-components";
import { Text } from "react-native";

export const BiggerText = styled(Text)`
        font-size: 18px;
`;
export const BoldText = styled(Text)`
        font-weight: bold;
`;
export const CenteredText = styled(Text)`
        text-align: center;
`;
export const BoldCentered = styled(CenteredText)`
        font-weight: bold;
`;
export const JustifiedText = styled(Text)`
        text-align: justify;
`;

export const JustifiedMargin = styled(JustifiedText)`
        margin: 25px;
`;
export const SmallerText = styled(Text)`
        font-size: 10px;
`;
export const TitleText = styled(CenteredText)`
        font-size: 20px;
        font-weight: bold;
`;
