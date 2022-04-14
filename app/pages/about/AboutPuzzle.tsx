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
import {PicturePuzzle, PuzzlePieces} from 'react-native-picture-puzzle';
import {ActivityIndicator} from 'react-native-paper';
import {Dimensions} from 'react-native';

const AboutPuzzle: React.FunctionComponent = () => {
    const [hidden, setHidden] = React.useState<number | null>(0); // piece to obscure
    const [pieces, setPieces] = React.useState<PuzzlePieces>([
        0, 1, 2, 3, 4, 5, 6, 7, 8,
    ]);

    const source = React.useMemo(
        () => ({
            uri: 'file://WTTPC.jpg',
        }),
        [],
    );
    const renderLoading = React.useCallback(
        (): JSX.Element => <ActivityIndicator />,
        [],
    );
    const onChange = React.useCallback(
        (nextPieces: PuzzlePieces, nextHidden: number | null): void => {
            setPieces(nextPieces);
            setHidden(nextHidden);
        },
        [setPieces, setHidden],
    );
    return (
        <PicturePuzzle
            size={Dimensions.get('window').width}
            pieces={pieces}
            hidden={hidden}
            onChange={onChange}
            source={source}
            renderLoading={renderLoading}
        />
    );
};

export default AboutPuzzle;
