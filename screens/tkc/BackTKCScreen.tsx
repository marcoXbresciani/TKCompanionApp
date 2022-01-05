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
        SectionList,
        Text,
        View,
} from "react-native";
import * as React from "react";
import { BoldCentered } from "../../components/Texts";
import TKButton from "../../components/TKButton";
import DefaultScreen from "../DefaultScreen";
import styled from "styled-components";
import { Separator } from "../../components/Separator";
import { useNavigation } from "@react-navigation/native";

const Sep = () => <View style={{ margin: 2 }} />;

const SideMargin = styled(Text)`
        margin: 0 10px 0 10px;
`;

const BackTKCScreen: React.FunctionComponent = () => {
        const navigation = useNavigation();

        return (
                <DefaultScreen>
                        <View>
                                <BoldCentered>
                                        Changing thinking through
                                        practice
                                </BoldCentered>
                                <SectionList
                                        ItemSeparatorComponent={Sep}
                                        renderItem={({ item }) => (
                                                <SideMargin>
                                                        {item.key}
                                                </SideMargin>
                                        )}
                                        sections={[
                                                {
                                                        data: [
                                                                {
                                                                        key: "Improvement Kata / Coaching Kata practitioners are creating a dynamic that helps humans everywhere practice more scientific ways of thinking and acting, toward the best we can imagine, and beyond.",
                                                                },
                                                                {
                                                                        key: "The 21st Century is demanding a way of working that is cognitively complex, interpersonal, iterative, and even entrepreneurial. Practicing the Improvement Kata and Coaching Kata is a way to obtain those skills and mindset, helping us adapt to the world around us. It doesn't give you solutions, but a thought process for how to approach your goals and obstacles.",
                                                                },
                                                                {
                                                                        key: 'The Kata community has structured practice routines, called "Starter Kata", for learning fundamentals for both the learner and the coach—like playing musical scales when learning a new instrument. Practicing Starter Kata is a foundation upon which any learner\'s creativity and initiative can grow.',
                                                                },
                                                                {
                                                                        key: "The practice routines of the Improvement Kata and Coaching Kata are a useful starting point for any team or organization that wants to develop and utilize a more scientific approach. Beginners start by trying to follow the pattern of the Starter Kata exactly. As their proficiency increases and they understand the purpose behind the routines, they can start to develop their own style, as long as it continues to incorporate the underlying scientific pattern and purpose.",
                                                                },
                                                                {
                                                                        key: 'The "Kata Code" defines what we think should probably not change as you advance and evolve your own style.',
                                                                },
                                                                {
                                                                        key: "Best wishes!",
                                                                },
                                                        ],
                                                },
                                        ]}
                                />
                                <Pressable
                                        onPress={() =>
                                                navigation.navigate(
                                                        "FrontTKC",
                                                )
                                        }
                                >
                                        <Separator>
                                                (Back to Toyota Kata
                                                Code)
                                        </Separator>
                                </Pressable>
                                <TKButton
                                        onPress={() => {
                                                Linking.openURL(
                                                        "http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf",
                                                );
                                        }}
                                />
                        </View>
                </DefaultScreen>
        );
};

export default BackTKCScreen;
