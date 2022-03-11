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
import {BoldText} from '../../globals/Texts';
import i18next from 'i18next';
import {Trans, useTranslation} from 'react-i18next';
import {Button, Card, Paragraph} from 'react-native-paper';
import {Card5Q, Card5QContent, Card5QTitle} from './5QPage';
import {DefaultTheme} from '@react-navigation/native';

type Props = {
    onPress: () => void;
};

const Back5Q: React.FC<Props> = ({onPress}: Props) => {
    const {t} = useTranslation('');

    return (
        <Card5Q>
            <Card5QTitle
                theme={{color: DefaultTheme.colors.primary}}
                title={i18next.t('5q.back.title')}
                subtitle={i18next.t('5q.back.quote')}
                subtitleNumberOfLines={2}
            />
            <Card5QContent>
                <Paragraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q1'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </Paragraph>
                <Paragraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q2'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </Paragraph>
                <Paragraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q3'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </Paragraph>
                <Paragraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q4'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </Paragraph>
            </Card5QContent>
            <Card.Actions>
                <Button
                    color={DefaultTheme.colors.primary}
                    icon="return-up-back-outline"
                    onPress={() => onPress()}
                >
                    {i18next.t('5q.back.return')}
                </Button>
            </Card.Actions>
        </Card5Q>
    );
};

export default Back5Q;
