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
import {TkParagraph} from '../../../components/TkParagraph';
import {BoldText} from '../../../components/BoldText';
import {TkCard} from '../../../components/tkcard/TkCard';
import TkCardTitle from '../../../components/tkcard/TkCardTitle';
import {TkCardContent} from '../../../components/tkcard/TkCardContent';

type Props = {
    onPress: () => void;
};

const Back5QScreen: React.FC<Props> = ({onPress}: Props) => {
    const {t} = useTranslation();

    return (
        <TkCard>
            <TkCardTitle
                title={`${i18n.t('5q.back.title')}`}
                subtitle={`${i18n.t('5q.back.quote')}`}
                subtitleNumberOfLines={2}
            />
            <TkCardContent>
                <TkParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q1'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </TkParagraph>
                <TkParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q2'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </TkParagraph>
                <TkParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q3'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </TkParagraph>
                <TkParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q4'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </TkParagraph>
            </TkCardContent>
            <Card.Actions>
                <Button
                    icon="return-down-back-outline"
                    mode="outlined"
                    onPress={() => onPress()}
                >
                    {`${i18n.t('5q.back.return')}`}
                </Button>
            </Card.Actions>
        </TkCard>
    );
};

export default Back5QScreen;
