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
import {GestureResponderEvent, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {ButtonText} from './Texts';

export const ThemedPressable = styled(Pressable)`
        background-color: ${props => props.theme.bg};
        border-radius: 23px;
        justify-content: center;
        margin: 4.5px auto;
        padding: 4.5px 9px;
        text-align: center;
        width: auto;
`;

ThemedPressable.defaultProps = {
        theme: {
                bg: 'royalblue',
        },
};

export const CustomIonicons = styled(Ionicons)`
        font-family: FreeSans;
        font-size: 16px;
        line-height: 27px;
`;

CustomIonicons.defaultProps = {
        size: 16,
        color: 'white',
};

export function NavButton(props: {
        onPress: null | ((event: GestureResponderEvent) => void);
}): JSX.Element {
        const {onPress} = props;
        return (
                <ThemedPressable onPress={onPress}>
                        <CustomIonicons name="arrow-forward-outline" />
                </ThemedPressable>
        );
}

export function BackButton(props: {
        onPress: null | ((event: GestureResponderEvent) => void);
}): JSX.Element {
        const {onPress} = props;
        return (
                <ThemedPressable onPress={onPress}>
                        <CustomIonicons name="arrow-back-outline" />
                </ThemedPressable>
        );
}

export function AboutButton(props: {
        onPress: null | ((event: GestureResponderEvent) => void);
}): JSX.Element {
        const {onPress} = props;
        return (
                <ThemedPressable onPress={onPress}>
                        <CustomIonicons name="document-text-outline" />
                </ThemedPressable>
        );
}

export function LegendButton(props: {
        onPress: null | ((event: GestureResponderEvent) => void);
}): JSX.Element {
        const {onPress} = props;
        return (
                <ThemedPressable onPress={onPress}>
                        <CustomIonicons name="map-outline" />
                </ThemedPressable>
        );
}

export function BrowseButton(props: {
        onPress: null | ((event: GestureResponderEvent) => void);
        theme: any;
        text: string;
}): JSX.Element {
        const {onPress, text, theme} = props;
        return (
                <ThemedPressable onPress={onPress} theme={theme}>
                        <CustomIonicons name="navigate-circle-outline">
                                <ButtonText>{text}</ButtonText>
                        </CustomIonicons>
                </ThemedPressable>
        );
}

export function TKWButton(props: {
        onPress: null | ((event: GestureResponderEvent) => void);
        text?: null | string;
}): JSX.Element {
        const {onPress, text} = props;
        return (
                <ThemedPressable
                        onPress={onPress}
                        theme={{bg: '#004479'}}>
                        <CustomIonicons name="navigate-circle-outline">
                                <ButtonText>{text}</ButtonText>
                        </CustomIonicons>
                </ThemedPressable>
        );
}

export function TKWDownloadButton(props: {
        onPress: null | ((event: GestureResponderEvent) => void);
}): JSX.Element {
        const {onPress} = props;
        return (
                <ThemedPressable
                        onPress={onPress}
                        theme={{bg: '#004479'}}>
                        <CustomIonicons name="download-outline" />
                </ThemedPressable>
        );
}
