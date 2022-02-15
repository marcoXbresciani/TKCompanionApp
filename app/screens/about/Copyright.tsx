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
import {DefaultText} from '../../components/Texts';
import styled from 'styled-components';
import {ScrollView} from 'react-native';

const Notice = styled(DefaultText)`
        align-content: center;
        border: 1px solid black;
        border-radius: 10px;
        margin: 5% 5%;
        padding: 10px;
`;
const Copyright: React.FunctionComponent = () => {
        return (
                <ScrollView>
                        <Notice>© 2021-2022 Marco Bresciani</Notice>
                        <Notice>
                                TKCompanionApp is free software: you can
                                redistribute it and/or modify it under
                                the terms of the GNU General Public
                                License as published by the Free
                                Software Foundation, either version 3 of
                                the License, or (at your option) any
                                later version.
                                {'\n'}
                                TKCompanionApp is distributed in the
                                hope that it will be useful, but WITHOUT
                                ANY WARRANTY; without even the implied
                                warranty of MERCHANTABILITY or FITNESS
                                FOR A PARTICULAR PURPOSE. See the GNU
                                General Public License for more details.
                                {'\n'}
                                You should have received a copy of the
                                GNU General Public License along with
                                TKCompanionApp. If not, see
                                &lt;https://www.gnu.org/licenses/&gt;.
                        </Notice>
                        <Notice>Open Sans © 2021 Steve Matteson</Notice>
                </ScrollView>
        );
};
export default Copyright;
