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
import {SectionList} from 'react-native';
import * as React from 'react';
import i18next from 'i18next';
import {Card, IconButton} from 'react-native-paper';
import {TkCard, TkCardContent, TkCardTitle} from '../../globals/Pieces';
import {TkParagraph} from '../../globals/Texts';

type Props = {
    onPress: () => void;
};

const Practice: React.FC<Props> = ({onPress}: Props) => {
    return (
        <TkCard>
            <SectionList
                renderSectionHeader={() => (
                    <TkCardTitle
                        title={i18next.t('practice.title')}
                        titleNumberOfLines={2}
                    />
                )}
                renderItem={({item}) => (
                    <TkCardContent>
                        <TkParagraph>{item.key}</TkParagraph>
                    </TkCardContent>
                )}
                renderSectionFooter={() => (
                    <Card.Actions>
                        <IconButton
                            icon="return-down-back-outline"
                            onPress={() => onPress()}
                        />
                    </Card.Actions>
                )}
                sections={[
                    {
                        data: [
                            {
                                key: i18next.t('practice.1'),
                            },
                            {
                                key: i18next.t('practice.2'),
                            },
                            {
                                key: i18next.t('practice.3'),
                            },
                            {
                                key: i18next.t('practice.4'),
                            },
                            {
                                key: i18next.t('practice.5'),
                            },
                            {
                                key: i18next.t('practice.6'),
                            },
                        ],
                    },
                ]}
            />
        </TkCard>
    );
};

export default Practice;
