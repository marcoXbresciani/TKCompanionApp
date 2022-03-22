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
import {IconButton} from 'react-native-paper';
import {
    DefaultCard,
    DefaultCardContent,
    DefaultCardTitle,
} from '../../globals/Pieces';
import {DefaultParagraph} from '../../globals/Texts';

type Props = {
    onPress: () => void;
};

const TkcFront: React.FC<Props> = ({onPress}: Props) => {
    return (
        <>
            <DefaultCard>
                <DefaultCardTitle
                    title={i18next.t('tkc.front.title')}
                />
                <DefaultCardContent>
                    <DefaultParagraph>
                        {i18next.t('tkc.front.1')}
                    </DefaultParagraph>
                    <DefaultParagraph>
                        {i18next.t('tkc.front.2')}
                    </DefaultParagraph>
                    <DefaultParagraph>
                        {i18next.t('tkc.front.3')}
                    </DefaultParagraph>
                    <DefaultParagraph>
                        {i18next.t('tkc.front.4')}
                    </DefaultParagraph>
                    <DefaultParagraph>
                        {i18next.t('tkc.front.5')}
                    </DefaultParagraph>
                </DefaultCardContent>
                <DefaultCard.Actions>
                    <IconButton
                        onPress={() => onPress()}
                        icon="arrow-forward-outline"
                    />
                </DefaultCard.Actions>
            </DefaultCard>
        </>
    );
};

export default TkcFront;
