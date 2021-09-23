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
import { Pressable, SectionList, Text, View } from "react-native";
import * as React from "react";
import { BoldCentered, SmallerText } from "../../components/Texts";
import DefaultScreen from "../DefaultScreen";
import styled from "styled-components";
import { Separator } from "../../components/Separator";
import { useNavigation } from "@react-navigation/native";

const Sep = () => <View style={{ margin: 2 }} />;

const Code = styled(Text)`
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px 20px 5px 20px;
        padding: 5px;
`;

const FrontTKCScreen: React.FunctionComponent = () => {
        const navigation = useNavigation();

        return (
                <DefaultScreen>
                        <View>
                                <BoldCentered>
                                        The Kata Code
                                </BoldCentered>
                                <Text>
                                        <SmallerText> </SmallerText>
                                </Text>
                                <SectionList // style={{ height: "fitContent" }}
                                        ItemSeparatorComponent={Sep}
                                        renderItem={({ item }) => (
                                                <Code>{item.key}</Code>
                                        )}
                                        sections={[
                                                {
                                                        data: [
                                                                {
                                                                        key: "Conditions are unpredictable.",
                                                                },
                                                                {
                                                                        key: "Enjoy the learning zone.",
                                                                },
                                                                {
                                                                        key: "Understand the direction, grasp the current condition, establish a target condition, experiment toward the target condition.",
                                                                },
                                                                {
                                                                        key: "Beginners practice Starter Kata exactly.",
                                                                },
                                                                {
                                                                        key: "Have a coach, be a coach.",
                                                                },
                                                        ],
                                                },
                                        ]}
                                />
                                <Pressable
                                        onPress={() =>
                                                navigation.navigate(
                                                        "BackTKC",
                                                )
                                        }
                                >
                                        {" "}
                                        <Separator>
                                                {" "}
                                                (See Changing thinking
                                                through practice){" "}
                                        </Separator>{" "}
                                </Pressable>{" "}
                        </View>{" "}
                </DefaultScreen>
        );
};

export default FrontTKCScreen;
