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
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import {Divider, IconButton, Menu} from 'react-native-paper';

const FontedIcon = styled(Icon)`
    font-family: FreeSans;
    font-size: 16px;
    line-height: 27px;
`;

export const TabIconHome = ({color}: {color: string}) => (
    <FontedIcon name="home" color={color} size={16} />
);

export const TabIcon5Q = ({color}: {color: string}) => (
    <FontedIcon name="chatbubbles-outline" color={color} size={16} />
);

export const TabIconMenu = () => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <IconButton
                        icon="menu-outline"
                        onPress={openMenu}
                    />
                }
            >
                <Menu.Item onPress={() => {}} title="Item 1" />
                <Menu.Item onPress={() => {}} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
        </>
    );
};

export const TabIconKTS = ({color}: {color: string}) => (
    <FontedIcon name="warning-outline" color={color} size={16} />
);

export const TabIconTKC = ({color}: {color: string}) => (
    // <FontedIcon name="book-outline" color={color} size={16} />
    <IconButton icon="book-outline" />
);

export const TabIconAbout = ({color}: {color: string}) => (
    <IconButton icon="information-circle-outline" />
    // <FontedIcon
    //     name="information-circle-outline"
    //     color={color}
    //     size={16}
    // />
);

export const TabIconSettings = ({color}: {color: string}) => (
    <IconButton icon="language-outline" />
    // <FontedIcon
    //     name="information-circle-outline"
    //     color={color}
    //     size={16}
    // />
);
