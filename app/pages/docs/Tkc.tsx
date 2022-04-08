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
import {Card, IconButton} from 'react-native-paper';
import {TkCard, TkCardContent, TkCardTitle} from '../../globals/Pieces';
import {TkParagraph} from '../../globals/Texts';

type Props = {
    onPress: () => void;
};

const Tkc: React.FC<Props> = ({onPress}: Props) => {
    return (
        <TkCard>
            <TkCardTitle title={i18next.t('tkc.title')} />
            <TkCardContent>
                <TkParagraph>{i18next.t('tkc.1')}</TkParagraph>
                <TkParagraph>{i18next.t('tkc.2')}</TkParagraph>
                <TkParagraph>{i18next.t('tkc.3')}</TkParagraph>
                <TkParagraph>{i18next.t('tkc.4')}</TkParagraph>
                <TkParagraph>{i18next.t('tkc.5')}</TkParagraph>
            </TkCardContent>
            <Card.Actions>
                <IconButton
                    icon="return-down-back-outline"
                    onPress={onPress}
                />
            </Card.Actions>
        </TkCard>
    );
};

export default Tkc;
