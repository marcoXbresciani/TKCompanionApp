/*
 * Copyright © 2021 Marco Bresciani
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
 * SPDX-FileCopyrightText: 2021 Marco Bresciani
 *
 * SPDX-License-Identifier: GFDL-1.3-or-later
 */
import { Text } from "react-native";
import * as React from "react";
import { CenteredText, JustifiedText } from "../../components/Texts";
import styled from "styled-components";

const Notice = styled(Text)`
        padding: 20px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 10px;
`;
const Copyright: React.FunctionComponent = () => {
        return (
                <>
                        <CenteredText>
                                Copyright © 2021 Marco Bresciani
                        </CenteredText>
                        <Notice>
                                <JustifiedText>
                                        This program is free software:
                                        you can redistribute it and/or
                                        modify it under the terms of the
                                        GNU General Public License as
                                        published by the Free Software
                                        Foundation, either version 3 of
                                        the License, or (at your option)
                                        any later version.
                                </JustifiedText>
                                <JustifiedText>
                                        This program is distributed in
                                        the hope that it will be useful,
                                        but WITHOUT ANY WARRANTY;
                                        without even the implied
                                        warranty of MERCHANTABILITY or
                                        FITNESS FOR A PARTICULAR
                                        PURPOSE. See the GNU General
                                        Public License for more details.
                                </JustifiedText>
                                <JustifiedText>
                                        You should have received a copy
                                        of the GNU General Public
                                        License along with this program.
                                        If not,
                                        see&lt;https://www.gnu.org/licenses/&gt;.
                                </JustifiedText>
                        </Notice>
                </>
        );
};
export default Copyright;
