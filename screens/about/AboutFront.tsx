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
import {
        Linking,
        Pressable,
        SafeAreaView,
        SectionList,
        StatusBar,
        Text,
} from "react-native";
import * as React from "react";
import styled from "styled-components";
import { BoldText } from "../../components/Texts";
import Version from "./Version";
import Separator from "../../components/Separator";
import { ThemedPressable } from "../../components/Buttons";
import { SectionItemSeparator } from "../../components/Pieces";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const HeaderRenderer = styled(BoldText)`
        margin: 20px auto auto auto;
        text-align: center;
`;

const ItemRenderer = styled(Text)`
        margin: auto;
`;

const AboutFront: React.FunctionComponent = () => {
        const navigation = useNavigation();

        return (
                <SafeAreaView>
                        <StatusBar />
                        <SectionList
                                style={{
                                        margin: 5,
                                }}
                                ListHeaderComponent={
                                        <>
                                                <Version />
                                                <Pressable
                                                        onPress={() =>
                                                                navigation.navigate(
                                                                        "AboutBack",
                                                                )
                                                        }
                                                >
                                                        <Separator>
                                                                (About)
                                                        </Separator>
                                                </Pressable>
                                        </>
                                }
                                ItemSeparatorComponent={
                                        SectionItemSeparator
                                }
                                renderSectionHeader={({
                                        section: { title },
                                }) => (
                                        <HeaderRenderer>
                                                {title}
                                        </HeaderRenderer>
                                )}
                                renderItem={({ section, item }) => (
                                        <ThemedPressable
                                                theme={{
                                                        bg: section.color,
                                                }}
                                                onPress={() => {
                                                        Linking.openURL(
                                                                item.uri,
                                                        );
                                                }}
                                                accessibilityLabel={
                                                        item.key
                                                }
                                        >
                                                <ItemRenderer>
                                                        <Ionicons
                                                                name="navigate-circle-outline"
                                                                color="white"
                                                        >
                                                                {
                                                                        item.key
                                                                }
                                                        </Ionicons>
                                                </ItemRenderer>
                                        </ThemedPressable>
                                )}
                                sections={[
                                        {
                                                title: "This application MIGHT",
                                                color: "limegreen",
                                                data: [
                                                        {
                                                                key: "help you improving",
                                                                uri: "http://www-personal.umich.edu/~mrother/The_Improvement_Kata.html",
                                                        },
                                                        {
                                                                key: "help you learning Kata",
                                                                uri: "http://www-personal.umich.edu/~mrother/The_Coaching_Kata.html",
                                                        },
                                                        {
                                                                key: "be fun",
                                                                uri: "http://www-personal.umich.edu/~mrother/Extras.html",
                                                        },
                                                        {
                                                                key: "teach you scientific thinking",
                                                                uri: "http://www-personal.umich.edu/~mrother/Challenge.html",
                                                        },
                                                ],
                                        },
                                        {
                                                title: "This application does NOT",
                                                color: "crimson",
                                                data: [
                                                        {
                                                                key: "collect your data",
                                                                uri: "https://www.eff.org/issues/privacy",
                                                        },
                                                        {
                                                                key: "contain tracking libraries",
                                                                uri: "https://www.eff.org/issues/privacy",
                                                        },
                                                        {
                                                                key: "phone home",
                                                                uri: "https://en.wikipedia.org/wiki/Phoning_home",
                                                        },
                                                        {
                                                                key: "use Google Play Store APIs",
                                                                uri: "https://en.wikipedia.org/wiki/Google_Play_Services#Concerns",
                                                        },
                                                        {
                                                                key: "save things on your device",
                                                                uri: "https://www.eff.org/issues/privacy",
                                                        },
                                                        {
                                                                key: "spy on you",
                                                                uri: "https://www.eff.org/issues/privacy",
                                                        },
                                                ],
                                        },
                                ]}
                        />
                </SafeAreaView>
        );
};

export default AboutFront;