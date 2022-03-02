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
import styled from 'styled-components';
import {BoldText} from '../../components/Texts';
import Version from './Version';
import {
        AboutButton,
        BrowseButton,
        LegendButton,
} from '../../components/Buttons';
import {
        ButtonStripe,
        SectionItemSeparator,
} from '../../components/Pieces';
import {useNavigation} from '@react-navigation/native';
import i18next from 'i18next';

const HeaderRenderer = styled(BoldText)`
        margin: 20px auto auto auto;
        text-align: center;
`;

const AboutFront: React.FunctionComponent = () => {
        const navigation = useNavigation();

        return (
                <>
                        <Version />
                        <ButtonStripe>
                                <LegendButton
                                        onPress={() =>
                                                navigation.navigate(
                                                        'AboutLegend',
                                                )
                                        }
                                />
                                <AboutButton
                                        onPress={() =>
                                                navigation.navigate(
                                                        'AboutBack',
                                                )
                                        }
                                />
                        </ButtonStripe>
                        <SectionList
                                style={{
                                        margin: 5,
                                }}
                                ItemSeparatorComponent={
                                        SectionItemSeparator
                                }
                                renderSectionHeader={({
                                        section: {title},
                                }) => (
                                        <HeaderRenderer>
                                                {title}
                                        </HeaderRenderer>
                                )}
                                renderItem={({section, item}) => (
                                        <BrowseButton
                                                onPress={() => {
                                                        Linking.openURL(
                                                                item.uri,
                                                        );
                                                }}
                                                theme={{
                                                        bg: section.color,
                                                }}
                                                text={item.key}
                                        />
                                )}
                                sections={[
                                        {
                                                title: i18next.t(
                                                        'about.front.might.title',
                                                ),
                                                color: 'forestgreen',
                                                data: [
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.might.key1',
                                                                ),
                                                                uri: 'http://www-personal.umich.edu/~mrother/The_Improvement_Kata.html',
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.might.key2',
                                                                ),
                                                                uri: 'http://www-personal.umich.edu/~mrother/The_Coaching_Kata.html',
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.might.key3',
                                                                ),
                                                                uri: 'http://www-personal.umich.edu/~mrother/Extras.html',
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.might.key3',
                                                                ),
                                                                uri: 'http://www-personal.umich.edu/~mrother/Challenge.html',
                                                        },
                                                ],
                                        },
                                        {
                                                title: i18next.t(
                                                        'about.front.not.title',
                                                ),
                                                color: 'crimson',
                                                data: [
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.not.key1',
                                                                ),
                                                                uri: 'https://www.eff.org/issues/privacy',
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.not.key2',
                                                                ),
                                                                uri: 'https://www.eff.org/issues/privacy',
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.not.key3',
                                                                ),
                                                                uri: 'https://en.wikipedia.org/wiki/Phoning_home',
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.not.key4',
                                                                ),
                                                                uri: 'https://en.wikipedia.org/wiki/Google_Play_Services#Concerns',
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.not.key5',
                                                                ),
                                                                uri: 'https://www.eff.org/issues/privacy',
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        'about.front.not.key6',
                                                                ),
                                                                uri: 'https://www.eff.org/issues/privacy',
                                                        },
                                                ],
                                        },
                                ]}
                        />
                </>
        );
};

export default AboutFront;
