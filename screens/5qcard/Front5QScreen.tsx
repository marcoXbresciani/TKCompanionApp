/*
 * Copyright © 2021-2022 Marco Bresciani
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
 * SPDX-FileCopyrightText: 2021-2022 Marco Bresciani
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import styled from "styled-components";
import { Pressable, Text, View } from "react-native";
import { Separator } from "../../components/Separator";
import * as React from "react";
import { BoldText } from "../../components/Texts";
import DefaultScreen from "../DefaultScreen";
import { useNavigation } from "@react-navigation/native";

const FrontView = styled(View)`
        background-color: royalblue;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 10px 10px 10px 10px;
`;

const CKText = styled(Text)`
        color: white;
        font-family: serif;
        font-size: 20px;
        font-weight: bold;
        margin: auto;
        padding: 5px;
        text-align: center;
        text-transform: uppercase;
        /*transform: rotate(-90deg);*/
        /*white-space:nowrap;*/
        /*transform-origin:0 50%;*/
        /*transform:rotate(-90deg) translate(-50%, 50%);*/
        /*position: absolute;*/
        /*top:0;*/
        /*bottom:0;*/
        /*height:40px;*/
`;

const QuestionsView = styled(View)`
        background-color: white;
        border-radius: 20px;
        padding: 10px;
`;

const TitleText = styled(Text)`
        color: royalblue;
        font-family: serif;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
`;

const QuestionsText = styled(Text)`
        padding: 1% 0;
`;

const Front5QScreen: React.FunctionComponent = () => {
        const navigation = useNavigation();

        return (
                <DefaultScreen>
                        <FrontView>
                                <View>
                                        <CKText>Coaching Kata</CKText>
                                </View>
                                <QuestionsView>
                                        <TitleText>
                                                The Five Questions
                                        </TitleText>
                                        <QuestionsText>
                                                ① What is the{" "}
                                                <BoldText>
                                                        Target Condition
                                                </BoldText>
                                                ?
                                        </QuestionsText>
                                        <QuestionsText>
                                                ② What is the{" "}
                                                <BoldText>
                                                        Actual Condition
                                                </BoldText>{" "}
                                                now?
                                        </QuestionsText>
                                        <Pressable
                                                onPress={() =>
                                                        navigation.navigate(
                                                                "Back5Q",
                                                        )
                                                }
                                        >
                                                <Separator>
                                                        (Click here to
                                                        Turn Card Over)
                                                </Separator>
                                        </Pressable>
                                        <QuestionsText>
                                                ③ What{" "}
                                                <BoldText>
                                                        Obstacles
                                                </BoldText>{" "}
                                                do you think are
                                                preventing you from
                                                reaching the target
                                                condition?{"\n"}
                                                Which *one* are you
                                                addressing now?
                                        </QuestionsText>
                                        <QuestionsText>
                                                ④ What is your{" "}
                                                <BoldText>
                                                        Next Step
                                                </BoldText>
                                                ? (Next experiment)
                                                {"\n"}
                                                What do you expect?
                                        </QuestionsText>
                                        <QuestionsText>
                                                ⑤ How quickly can we go
                                                and see what we{" "}
                                                <BoldText>
                                                        Have Learned
                                                </BoldText>{" "}
                                                from taking that step?
                                        </QuestionsText>
                                </QuestionsView>
                        </FrontView>
                </DefaultScreen>
        );
};

export default Front5QScreen;
