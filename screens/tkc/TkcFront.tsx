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
import { SectionList, Text, View } from "react-native";
import * as React from "react";
import { BoldCentered } from "../../components/Texts";
import DefaultScreen from "../DefaultScreen";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { SectionItemSeparator } from "../../components/Pieces";
import { NavButton } from "../../components/Buttons";

const FrontRenderer = styled(Text)`
        border: 1px solid black;
        border-radius: 15px;
        justify-content: center;
        margin: 5px 20px 5px 20px;
        max-width: 85%;
        padding: 10px 15px;
`;

const TkcFront: React.FunctionComponent = () => {
        const navigation = useNavigation();

        return (
                <DefaultScreen>
                        <View>
                                <BoldCentered>
                                        The Kata Code
                                </BoldCentered>
                                <SectionList // style={{ height: "fitContent" }}
                                        ItemSeparatorComponent={
                                                SectionItemSeparator
                                        }
                                        renderItem={({ item }) => (
                                                <FrontRenderer>
                                                        {item.key}
                                                </FrontRenderer>
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
                                <NavButton
                                        onPress={() =>
                                                navigation.navigate(
                                                        "TkcBack",
                                                )
                                        }
                                        title="Changing thinking
                                                through practice"
                                />
                        </View>
                </DefaultScreen>
        );
};

export default TkcFront;
