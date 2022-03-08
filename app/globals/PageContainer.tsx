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
import {StatusBar, View} from 'react-native';
import * as React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';

const NicerAreaView = styled(SafeAreaView)`
    align-items: center;
    flex: 1;
    justify-content: center;
    max-width: 85%;
    margin: ${(props) => props.theme.marginTop} 5% 0;
`;

NicerAreaView.defaultProps = {
    theme: {
        marginTop: StatusBar.currentHeight + 'px',
    },
};

const PageContainer: React.FunctionComponent = ({children}) => (
    <NicerAreaView>
        <StatusBar />
        <View>{children}</View>
    </NicerAreaView>
);

export default PageContainer;

PageContainer.propTypes = {children: PropTypes.node.isRequired};
