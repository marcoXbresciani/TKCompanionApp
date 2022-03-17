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
import {Linking, SectionList} from 'react-native';
import * as React from 'react';
import i18next from 'i18next';
import {Card, IconButton, Paragraph} from 'react-native-paper';
import {tkTheme} from '../../globals/Config';
import styled from 'styled-components';

type Props = {
    onPress: () => void;
};

const PaddedCard = styled(Card)`
    padding: 2%;
`;

const TkcBack: React.FC<Props> = ({onPress}: Props) => {
    return (
        <PaddedCard>
            <SectionList
                renderSectionHeader={() => (
                    <Card.Title
                        title={i18next.t('tkc.back.title')}
                        titleNumberOfLines={2}
                    />
                )}
                renderItem={({item}) => (
                    <Paragraph>{item.key}</Paragraph>
                )}
                renderSectionFooter={() => (
                    <Card.Actions>
                        <IconButton
                            color={tkTheme.colors.primary}
                            icon="arrow-back-outline"
                            onPress={() => onPress()}
                        />
                        <IconButton
                            color={tkTheme.colors.primary}
                            icon="download-outline"
                            onPress={() => {
                                Linking.openURL(
                                    'http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf',
                                );
                            }}
                        />
                    </Card.Actions>
                )}
                sections={[
                    {
                        data: [
                            {
                                key: i18next.t('tkc.back.1'),
                            },
                            {
                                key: i18next.t('tkc.back.2'),
                            },
                            {
                                key: i18next.t('tkc.back.3'),
                            },
                            {
                                key: i18next.t('tkc.back.4'),
                            },
                            {
                                key: i18next.t('tkc.back.5'),
                            },
                            {
                                key: i18next.t('tkc.back.6'),
                            },
                        ],
                    },
                ]}
            />
        </PaddedCard>
    );
};

export default TkcBack;
