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
import styled from "styled-components";
import { Pressable } from "react-native";

export const ThemedPressable = styled(Pressable)`
        background-color: ${(props) => props.theme.bg};
        border-radius: 15px;
        justify-content: center;
        margin: 10px auto;
        min-width: 140px;
        padding: 10px 15px;
        text-align: center;
`;

ThemedPressable.defaultProps = {
        theme: {
                bg: "royalblue",
        },
};
