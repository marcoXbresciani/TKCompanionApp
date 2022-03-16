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
import {BoldText, DefaultText, SmallerText} from '../../globals/Texts';
import i18next from 'i18next';
import {Trans, useTranslation} from 'react-i18next';
import {TitleText} from './5QPage';

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

type Props = {
    onPress: () => void;
};

const Back5QScreen: React.FC<Props> = ({onPress}: Props) => {
    const {t} = useTranslation('');

    return (
        <>
            <BackView>
                <TitleText>{i18next.t('5q.back.title')}</TitleText>
                <QuoteText>{i18next.t('5q.back.quote')}</QuoteText>
                <QuestionsView>
                    <QuestionsText>
                        <Trans
                            t={t}
                            i18nKey={'5q.back.q1'}
                            components={{
                                bold: <BoldText />,
                            }}
                        />
                    </QuestionsText>
                    <QuestionsText>
                        <Trans
                            t={t}
                            i18nKey={'5q.back.q2'}
                            components={{
                                bold: <BoldText />,
                            }}
                        />
                    </QuestionsText>
                    <QuestionsText>
                        <Trans
                            t={t}
                            i18nKey={'5q.back.q3'}
                            components={{
                                bold: <BoldText />,
                            }}
                        />
                    </QuestionsText>
                    <QuestionsText>
                        <Trans
                            t={t}
                            i18nKey={'5q.back.q4'}
                            components={{
                                bold: <BoldText />,
                            }}
                        />
                    </QuestionsText>
                </QuestionsView>
                <Pressable onPress={() => onPress()}>
                    <Line />
                    <Returner>{i18next.t('5q.back.return')}</Returner>
                </Pressable>
            </BackView>
        </>
    );
};

export default Back5QScreen;
