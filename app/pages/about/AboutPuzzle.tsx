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
import {ActivityIndicator, Card, IconButton} from 'react-native-paper';
import {Dimensions, Image} from 'react-native';
import {TkText} from '../../globals/Texts';
import i18next from 'i18next';
import {TkCard, TkCardContent, TkCardTitle} from '../../globals/Pieces';

const AboutPuzzle: React.FunctionComponent = () => {
    const [hidden, setHidden] = React.useState<number | null>(0);
    const [pieces, setPieces] = React.useState<PuzzlePieces>([
        0, 1, 2, 3, 4, 5, 6, 7, 8,
    ]);
    const [steps, setSteps] = React.useState<number>(0);
    const puzzleUri = Image.resolveAssetSource(
        require('../../assets/images/dh000004.jpg'),
    ).uri;
    const source = React.useMemo(
        () => ({
            uri: puzzleUri,
        }),
        [puzzleUri],
    );
    const renderLoading = React.useCallback(
        (): JSX.Element => <ActivityIndicator />,
        [],
    );
    const onChange = React.useCallback(
        (nextPieces: PuzzlePieces, nextHidden: number | null): void => {
            setPieces(nextPieces);
            setHidden(nextHidden);
            setSteps(steps + 1);
        },
        [steps],
    );

    return (
        <>
            <TkCard>
                <TkCardTitle
                    title="Puoi migliorare?"
                    subtitle={i18next.t('puzzle.button', {
                        steps: steps,
                    })}
                />
                <Card.Actions>
                    <IconButton
                        icon="refresh-outline"
                        onPress={() => setSteps(0)}
                    />
                </Card.Actions>
                <TkCardContent>
                    <PicturePuzzle
                        size={Dimensions.get('window').width}
                        pieces={pieces}
                        hidden={hidden}
                        onChange={onChange}
                        source={source}
                        renderLoading={renderLoading}
                    />
                    <TkText>{i18next.t('puzzle.instructions')}</TkText>
                </TkCardContent>
            </TkCard>
        </>
    );
};

export default AboutPuzzle;
