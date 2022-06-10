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
import {Trans, useTranslation} from 'react-i18next';
import {Button, Card} from 'react-native-paper';
import i18n from '../../../i18n/i18n';
import {BoldText} from '../../../components/BoldText';
import {TkParagraph} from '../../../components/TkParagraph';

type Props = {
    onPress: () => void;
};

const Front5Q: React.FC<Props> = ({onPress}: Props) => {
    const {t} = useTranslation();

    return (
        <Card>
            <Card.Title
                title={`${i18n.t('5q.front.header')}`}
                subtitle={`${i18n.t('5q.front.title')}`}
                subtitleNumberOfLines={2}
            />
            <Card.Content>
                <TkParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q1'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </TkParagraph>
                <TkParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q2'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </TkParagraph>
                <Card.Actions>
                    <Button
                        mode="outlined"
                        icon="return-down-forward-outline"
                        onPress={() => onPress()}
                    >
                        {`${i18n.t('5q.front.separator')}`}
                    </Button>
                </Card.Actions>
                <TkParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q3.1'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                    {`${i18n.t('5q.front.q3.2')}`}
                </TkParagraph>
                <TkParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q4.1'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                    {`${i18n.t('5q.front.q4.2')}`}
                </TkParagraph>
                <TkParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.front.q5'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </TkParagraph>
            </Card.Content>
        </Card>
    );
};

export default Front5Q;
