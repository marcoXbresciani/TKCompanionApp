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
import {CenteredTitle, DefaultText} from '../../globals/Texts';
import PageContainer from '../../globals/PageContainer';
import {useNavigation} from '@react-navigation/native';
import {
    ButtonStripe,
    Nav,
    SectionItemSeparator,
} from '../../globals/Pieces';
import {BackButton, TKWDownloadButton} from '../../globals/Buttons';
import i18next from 'i18next';

const TkcBack: React.FunctionComponent = () => {
    const navigation = useNavigation<Nav>();

    return (
        <PageContainer>
            <CenteredTitle>{i18next.t('tkc.back.title')}</CenteredTitle>
            <SectionList
                ItemSeparatorComponent={SectionItemSeparator}
                renderItem={({item}) => (
                    <DefaultText>{item.key}</DefaultText>
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
            <ButtonStripe>
                <BackButton
                    onPress={() => navigation.navigate('TkcFront')}
                />
                <TKWDownloadButton
                    onPress={() => {
                        Linking.openURL(
                            'http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf',
                        );
                    }}
                />
            </ButtonStripe>
        </PageContainer>
    );
};

export default TkcBack;
