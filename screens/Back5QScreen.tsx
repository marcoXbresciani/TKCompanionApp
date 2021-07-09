import styled from 'styled-components';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {BoldText} from '../components/BoldText';
import * as React from 'react';

const BackView = styled(View)`
        background-color: white;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 10px 10px 10px 10px;
`;

const TitleText = styled(Text)`
        color: black;
        font-family: sans-serif;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
`;

const QuoteText = styled(Text)`
        margin: 0 20% 5% 20%;
        text-align: center;
`;

const QuestionsView = styled(View)`
        margin: 0 25%;
`;

const QuestionsText = styled(Text)`
        padding: 2% 0;
`;

const Returner = styled(Text)`
        border: 1px solid black;
        padding: 0 5px;
        margin-top: 15px;
        text-align: right;
`;

export const Back5QScreen = ({navigation}) => (
        <SafeAreaView>
                <StatusBar />
                <BackView>
                        <TitleText>
                                Reflect on the Last Step Taken
                        </TitleText>
                        <QuoteText>
                                Because you don't actually know what the
                                result of a step will be!
                        </QuoteText>
                        <QuestionsView>
                                <QuestionsText>
                                        1) What did you plan as your{' '}
                                        <BoldText>Last Step</BoldText>?
                                </QuestionsText>
                                <QuestionsText>
                                        2) What did you{' '}
                                        <BoldText>Expect</BoldText>?
                                </QuestionsText>
                                <QuestionsText>
                                        3) What{' '}
                                        <BoldText>
                                                Actually Happened
                                        </BoldText>
                                        ?
                                </QuestionsText>
                                <QuestionsText>
                                        4) What did you{' '}
                                        <BoldText>Learn</BoldText>?
                                </QuestionsText>
                        </QuestionsView>
                        <Returner>Return to question 3</Returner>
                </BackView>
        </SafeAreaView>
);
