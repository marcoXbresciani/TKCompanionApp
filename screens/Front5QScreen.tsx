import styled from 'styled-components';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {BoldText} from '../components/BoldText';
import {Separator} from '../components/Separator';
import * as React from 'react';

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

export const Front5QScreen = () => (
        <SafeAreaView>
                <StatusBar />
                <View>
                        <FrontView>
                                <View>
                                        <CKText>Coaching Kata</CKText>
                                </View>
                                <QuestionsView>
                                        <TitleText>
                                                The Five Questions
                                        </TitleText>
                                        <Text>
                                                ① What is the{' '}
                                                <BoldText>
                                                        Target Condition
                                                </BoldText>
                                                ?
                                        </Text>
                                        <Text>
                                                ② What is the{' '}
                                                <BoldText>
                                                        Actual Condition
                                                </BoldText>{' '}
                                                now?
                                        </Text>
                                        <Separator>
                                                (Turn Card Over)
                                        </Separator>
                                        <Text>
                                                ③ What{' '}
                                                <BoldText>
                                                        Obstacles
                                                </BoldText>{' '}
                                                do you think are
                                                preventing you from
                                                reaching the target
                                                condition?{'\n'}
                                                Which *one* are you
                                                addressing now?
                                        </Text>
                                        <Text>
                                                ④ What is your{' '}
                                                <BoldText>
                                                        Next Step
                                                </BoldText>
                                                ? (Next experiment)
                                                {'\n'}
                                                What do you expect?
                                        </Text>
                                        <Text>
                                                ⑤ How quickly can we go
                                                and see what we{' '}
                                                <BoldText>
                                                        Have Learned
                                                </BoldText>{' '}
                                                from taking that step?
                                        </Text>
                                </QuestionsView>
                        </FrontView>
                </View>
        </SafeAreaView>
);
