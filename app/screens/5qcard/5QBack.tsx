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
import {Pressable, View} from 'react-native';
import * as React from 'react';
import {
        BoldText,
        DefaultText,
        SmallerText,
        TitleText,
} from '../../components/Texts';
import DefaultScreen from '../DefaultScreen';
import {useNavigation} from '@react-navigation/native';

const BackView = styled(View)`
        background-color: white;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 10px 10px 10px 10px;
`;

const QuoteText = styled(DefaultText)`
        margin: 0 5% 5% 5%;
        text-align: center;
`;

const QuestionsView = styled(View)`
        margin: 0 5%;
`;

const QuestionsText = styled(DefaultText)`
        padding: 2% 0;
`;

const Line = styled(View)`
        align-self: center;
        background-color: black;
        height: 1px;
        margin-bottom: 0;
        margin-left: 50%;
        margin-top: 15px;
        width: 50%;
`;

const Returner = styled(SmallerText)`
        padding: 0 5px;
        margin-top: 15px;
        text-align: right;
`;

const Back5QScreen: React.FunctionComponent = () => {
        const navigation = useNavigation();

        return (
                <DefaultScreen>
                        <BackView>
                                <TitleText>
                                        Reflect on the Last Step
                                </TitleText>
                                <QuoteText>
                                        Because you don&apos;t actually
                                        know what the result of a step
                                        will be!
                                </QuoteText>
                                <QuestionsView>
                                        <QuestionsText>
                                                1) What did you plan as
                                                your{' '}
                                                <BoldText>
                                                        Last Step
                                                </BoldText>
                                                ?
                                        </QuestionsText>
                                        <QuestionsText>
                                                2) What did you{' '}
                                                <BoldText>
                                                        Expect
                                                </BoldText>
                                                ?
                                        </QuestionsText>
                                        <QuestionsText>
                                                3) What{' '}
                                                <BoldText>
                                                        Actually
                                                        Happened
                                                </BoldText>
                                                ?
                                        </QuestionsText>
                                        <QuestionsText>
                                                4) What did you{' '}
                                                <BoldText>
                                                        Learn
                                                </BoldText>
                                                ?
                                        </QuestionsText>
                                </QuestionsView>
                                <Pressable
                                        onPress={() =>
                                                navigation.navigate(
                                                        '5QFront',
                                                )
                                        }>
                                        <Line />
                                        <Returner>
                                                Return to question 3
                                        </Returner>
                                </Pressable>
                        </BackView>
                </DefaultScreen>
        );
};

export default Back5QScreen;
