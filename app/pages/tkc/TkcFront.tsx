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
import styled from 'styled-components';
import {Card, IconButton, Paragraph} from 'react-native-paper';
import {tkTheme} from '../../globals/Config';

const ParagraphRenderer = styled(Paragraph)`
    border: 1px solid black;
    border-radius: 27px;
    justify-content: center;
    margin: 2.5% 0;
    padding: 2.5% 5%;
`;

type Props = {
    onPress: () => void;
};

const TkcFront: React.FC<Props> = ({onPress}: Props) => {
    return (
        <>
            <Card>
                <Card.Title title={i18next.t('tkc.front.title')} />
                <Card.Content>
                    <ParagraphRenderer>
                        {i18next.t('tkc.front.1')}
                    </ParagraphRenderer>
                    <ParagraphRenderer>
                        {i18next.t('tkc.front.2')}
                    </ParagraphRenderer>
                    <ParagraphRenderer>
                        {i18next.t('tkc.front.3')}
                    </ParagraphRenderer>
                    <ParagraphRenderer>
                        {i18next.t('tkc.front.4')}
                    </ParagraphRenderer>
                    <ParagraphRenderer>
                        {i18next.t('tkc.front.5')}
                    </ParagraphRenderer>
                </Card.Content>
                <Card.Actions>
                    <IconButton
                        color={tkTheme.colors.primary}
                        rippleColor={tkTheme.colors.accent}
                        onPress={() => onPress()}
                        icon="arrow-forward-outline"
                    />
                </Card.Actions>
            </Card>
        </>
    );
};

export default TkcFront;
