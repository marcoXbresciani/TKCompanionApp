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
import * as React from 'react';
import {BoldText, DefaultParagraph} from '../../globals/Texts';
import i18next from 'i18next';
import {Trans, useTranslation} from 'react-i18next';
import {Button, Card} from 'react-native-paper';
import {Card5Q, Card5QContent, Card5QTitle} from './5QPage';
import {DefaultTheme} from '@react-navigation/native';

type Props = {
    onPress: () => void;
};

const Front5Q: React.FC<Props> = ({onPress}: Props) => {
    const {t} = useTranslation('');

    return (
        <Card5Q>
            <Card5QTitle
                theme={{color: DefaultTheme.colors.primary}}
                title={i18next.t('5q.front.header')}
                subtitle={i18next.t('5q.front.title')}
                subtitleNumberOfLines={2}
            />
            <Card5QContent>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q1'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </DefaultParagraph>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q2'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </DefaultParagraph>
                <Card.Actions>
                    <Button
                        color={DefaultTheme.colors.primary}
                        icon="return-down-forward-outline"
                        onPress={() => onPress()}
                    >
                        {i18next.t('5q.front.separator')}
                    </Button>
                </Card.Actions>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q3.1'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                    {i18next.t('5q.front.q3.2')}
                </DefaultParagraph>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q4.1'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                    {i18next.t('5q.front.q4.2')}
                </DefaultParagraph>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q5'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </DefaultParagraph>
            </Card5QContent>
        </Card5Q>
    );
};

export default Front5Q;
