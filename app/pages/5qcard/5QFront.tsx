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
import {Linking} from 'react-native';
import * as React from 'react';
import i18next from 'i18next';
import {Trans, useTranslation} from 'react-i18next';
import {tkTheme} from '../../globals/Config';
import {BoldText, DefaultParagraph} from '../../globals/Texts';
import {Button, Card, IconButton} from 'react-native-paper';
import {
    DefaultCard,
    DefaultCardContent,
    DefaultCardTitle,
} from '../../globals/Pieces';

type Props = {
    onPress: () => void;
};

const Front5Q: React.FC<Props> = ({onPress}: Props) => {
    const {t} = useTranslation('');

    return (
        <DefaultCard>
            <DefaultCardTitle
                theme={{color: tkTheme.colors.primary}}
                title={i18next.t('5q.front.header')}
                subtitle={i18next.t('5q.front.title')}
                subtitleNumberOfLines={2}
            />
            <DefaultCardContent>
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
                        color={tkTheme.colors.primary}
                        mode="outlined"
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
            </DefaultCardContent>
            <Card.Actions>
                <IconButton
                    color={tkTheme.colors.primary}
                    icon="download-outline"
                    onPress={() => {
                        Linking.openURL(
                            'http://www-personal.umich.edu/~mrother/KATA_Files/5Q_Card.pdf',
                        );
                    }}
                />
            </Card.Actions>
        </DefaultCard>
    );
};

export default Front5Q;
