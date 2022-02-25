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
import {DefaultText, SmallerText} from '../../components/Texts';
import styled from 'styled-components';
import {Linking, ScrollView, View} from 'react-native';
import {BrowseButton} from '../../components/Buttons';

const Notice = styled(View)`
        align-content: center;
        border: 1px solid black;
        border-radius: 10px;
        margin: 5% 5%;
        padding: 10px;
`;
const Copyright: React.FunctionComponent = () => {
        return (
                <ScrollView>
                        <Notice>
                                <DefaultText>
                                        © 2021-2022 Marco Bresciani
                                </DefaultText>
                                <SmallerText>
                                        TKCompanionApp is free software:
                                        you can redistribute it and/or
                                        modify it under the terms of the
                                        GNU General Public License as
                                        published by the Free Software
                                        Foundation, either version 3 of
                                        the License, or (at your option)
                                        any later version.
                                </SmallerText>
                                <SmallerText>
                                        TKCompanionApp is distributed in
                                        the hope that it will be useful,
                                        but WITHOUT ANY WARRANTY;
                                        without even the implied
                                        warranty of MERCHANTABILITY or
                                        FITNESS FOR A PARTICULAR
                                        PURPOSE. See the GNU General
                                        Public License for more details.
                                </SmallerText>
                                <SmallerText>
                                        You should have received a copy
                                        of the GNU General Public
                                        License along with
                                        TKCompanionApp. If not, see
                                        &lt;https://www.gnu.org/licenses/&gt;.
                                </SmallerText>
                        </Notice>
                        <Notice>
                                <DefaultText>
                                        FreeSans, GNU FreeFont
                                </DefaultText>
                                <DefaultText>
                                        © 2012 Primož Peterlin, Steve
                                        White
                                </DefaultText>
                                <BrowseButton
                                        onPress={() => {
                                                Linking.openURL(
                                                        'https://www.gnu.org/software/freefont/license.html',
                                                );
                                        }}
                                        text="See license page"
                                        theme={{bg: '#880088'}}
                                />
                        </Notice>
                </ScrollView>
        );
};
export default Copyright;
