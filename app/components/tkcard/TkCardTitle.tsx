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
import styled from 'styled-components';
import {isDark} from '../../utils/Functions';
import {tkDarkTheme} from '../../config/tkDarkTheme';
import {tkLightTheme} from '../../config/tkLightTheme';
import * as React from 'react';
import {Card} from 'react-native-paper';

const TKCardTitleBorder = styled(Card.Title)`
    border-bottom-style: solid;
    border-bottom-width: 3px;
`;

const TkCardDefaultTitle = styled(TKCardTitleBorder)`
    border-bottom-color: ${isDark()
        ? tkDarkTheme.colors.primary
        : tkLightTheme.colors.primary};
`;

const TkCardWipTitle = styled(TKCardTitleBorder)`
    border-bottom-color: ${isDark()
        ? tkDarkTheme.colors.accent
        : tkLightTheme.colors.accent};
`;

type MyProps = {
    title: string;
    titleNumberOfLines?: number;
    subtitle?: string;
    subtitleNumberOfLines?: number;
    wip?: boolean;
};

const TkCardTitle: React.FunctionComponent<MyProps> = ({
    title,
    titleNumberOfLines,
    subtitle,
    subtitleNumberOfLines,
    wip = false,
}) => {
    return (
        <>
            {wip ? (
                <TkCardWipTitle
                    title={title}
                    titleNumberOfLines={titleNumberOfLines}
                    subtitle={subtitle}
                    subtitleNumberOfLines={subtitleNumberOfLines}
                />
            ) : (
                <TkCardDefaultTitle
                    title={title}
                    titleNumberOfLines={titleNumberOfLines}
                    subtitle={subtitle}
                    subtitleNumberOfLines={subtitleNumberOfLines}
                />
            )}
        </>
    );
};

export default TkCardTitle;
