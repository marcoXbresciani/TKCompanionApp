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
import {useState} from 'react';
import Front5Q from './5QFront';
import Back5Q from './5QBack';
import styled from 'styled-components';
import {Card} from 'react-native-paper';
import PageContainer from '../../globals/PageContainer';

export const Card5Q = styled(Card)`
    border: 1px solid black;
    border-radius: 15px;
    background-color: white;
`;

export const Card5QTitle = styled(Card.Title)`
    border-bottom-color: ${(props) => props.theme.color};
    border-bottom-style: solid;
    border-bottom-width: 3px;
`;

Card5QTitle.defaultProps = {
    theme: {
        color: undefined,
    },
};

export const Card5QContent = styled(Card.Content)`
    padding: 5%;
`;

const FiveQCard: React.FunctionComponent = () => {
    const [front, setFront] = useState<boolean>(true);

    return (
        <PageContainer>
            {front ? (
                <Front5Q
                    onPress={() => {
                        setFront(false);
                    }}
                />
            ) : (
                <Back5Q
                    onPress={() => {
                        setFront(true);
                    }}
                />
            )}
        </PageContainer>
    );
};

export default FiveQCard;
