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
import {View} from 'react-native';
import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {SmallerText} from './Texts';

const Container = styled(View)`
        flex-direction: row;
        margin: 10px 0;
`;

const Line = styled(View)`
        background-color: black;
        height: 1px;
        flex: 1;
        margin: 3px 0 0 0;
        align-self: center;
`;

const Content = styled(SmallerText)`
        align-self: center;
        font-style: italic;
        padding-left: 5px;
        padding-right: 5px;
        color: #de602b;
`;

export const Separator: React.FC = ({children}) => (
        <Container>
                <Line />
                <Content>{children}</Content>
                <Line />
        </Container>
);

export default Separator;

Separator.propTypes = {children: PropTypes.node.isRequired};
