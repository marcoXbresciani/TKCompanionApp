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
import i18next from 'i18next';
import {Trans, useTranslation} from 'react-i18next';
import {
    DefaultCard,
    DefaultCardContent,
    DefaultCardTitle,
} from '../../globals/Pieces';
import {BoldText, DefaultParagraph} from '../../globals/Texts';
import {Button, Card} from 'react-native-paper';

type Props = {
    onPress: () => void;
};

const Back5QScreen: React.FC<Props> = ({onPress}: Props) => {
    const {t} = useTranslation();

    return (
        <DefaultCard>
            <DefaultCardTitle
                title={i18next.t('5q.back.title')}
                subtitle={i18next.t('5q.back.quote')}
                subtitleNumberOfLines={2}
            />
            <DefaultCardContent>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q1'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </DefaultParagraph>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q2'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </DefaultParagraph>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q3'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </DefaultParagraph>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey={'5q.back.q4'}
                        components={{
                            bold: <BoldText />,
                        }}
                    />
                </DefaultParagraph>
            </DefaultCardContent>
            <Card.Actions>
                <Button
                    icon="return-up-back-outline"
                    mode="outlined"
                    onPress={() => onPress()}
                >
                    {i18next.t('5q.back.return')}
                </Button>
            </Card.Actions>
        </DefaultCard>
    );
};

export default Back5QScreen;
