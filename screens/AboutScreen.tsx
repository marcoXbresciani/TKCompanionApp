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
import {
        Button,
        Linking,
        SafeAreaView,
        SectionList,
        StatusBar,
        View,
} from "react-native";
import * as React from "react";
import styled from "styled-components";
import { BoldText } from "../components/Texts";
import Version from "./about/Version";
import Copyright from "./about/Copyright";
import Separator from "../components/Separator";

const NotButton = styled(Button)`
        margin: 10px;
`;

const Sep = () => <View style={{ margin: 2 }} />;

const AboutScreen: React.FunctionComponent = () => (
        <SafeAreaView>
                <StatusBar />
                <SectionList
                        style={{
                                margin: 5,
                        }}
                        ListHeaderComponent={
                                <>
                                        <Version />
                                        <Separator>About</Separator>
                                        <Copyright />
                                </>
                        }
                        ItemSeparatorComponent={Sep}
                        renderSectionHeader={({
                                section: { title },
                        }) => (
                                <BoldText
                                        style={{
                                                textAlign: "center",
                                        }}
                                >
                                        {title}
                                </BoldText>
                        )}
                        renderItem={({ section, item }) => (
                                <NotButton
                                        title={item.key}
                                        color={section.color}
                                        onPress={() => {
                                                Linking.openURL(
                                                        item.uri,
                                                );
                                        }}
                                        accessibilityLabel={item.key}
                                >
                                        {item.key}
                                </NotButton>
                        )}
                        sections={[
                                {
                                        title: "This application MIGHT",
                                        color: "yellowgreen",
                                        data: [
                                                {
                                                        key: "be fun",
                                                        uri: "http://www-personal.umich.edu/~mrother/Extras.html",
                                                },
                                                {
                                                        key: "help you coaching Kata",
                                                        uri: "http://www-personal.umich.edu/~mrother/The_Coaching_Kata.html",
                                                },
                                                {
                                                        key: "help you improving",
                                                        uri: "http://www-personal.umich.edu/~mrother/The_Improvement_Kata.html",
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

export default AboutScreen;
