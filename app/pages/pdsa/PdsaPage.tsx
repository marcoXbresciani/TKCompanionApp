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
import {Appbar, Card, TextInput} from 'react-native-paper';
import {TkParagraph} from '../../globals/Texts';
import i18next from 'i18next';
import {ScrollView} from 'react-native';
import Wip from '../../globals/Wip';
import PdsaEntry from '../../utils/storage/pdsa/PdsaEntry';
import StorageFactory from '../../utils/storage/StorageFactory';

const DownloadPage: React.FC = () => {
    const [pdsaEntry, setPdsaEntry] = React.useState(new PdsaEntry());
    const [visibleWip, setVisibleWip] = React.useState(false);
    const pdsaStorage = StorageFactory.getPdsaStorage();

    return (
        <>
            <Wip
                message={i18next.t('pdsa.temp')}
                visible={visibleWip}
                setVisible={setVisibleWip}
            />

            <Appbar>
                <Appbar.Action
                    icon="save-outline"
                    onPress={() => {
                        setVisibleWip(true);
                        // const [today] = new Date()
                        //     .toISOString()
                        //     .split('T');
                        // pdsaStorage.write(today, pdsaEntry);
                    }}
                />
                <Appbar.Action
                    disabled={true}
                    icon="calendar-outline"
                    onPress={() => setVisibleWip(true)}
                />
            </Appbar>

            <ScrollView>
                <Card>
                    <Card.Title
                        title={i18next.t('pdsa.title')}
                        titleNumberOfLines={2}
                    />
                    <Card.Content>
                        <TkParagraph>
                            {i18next.t('pdsa.q1')}
                        </TkParagraph>
                        <TextInput
                            label="Target"
                            mode="outlined"
                            multiline={true}
                            onChangeText={(txt) =>
                                setPdsaEntry((entry) => ({
                                    ...entry,
                                    target: txt,
                                }))
                            }
                            placeholder="Target"
                            right={
                                <TextInput.Icon
                                    name="trash-outline"
                                    onPress={() =>
                                        setPdsaEntry((entry) => ({
                                            ...entry,
                                            target: '',
                                        }))
                                    }
                                />
                            }
                            value={pdsaEntry.target}
                        />
                        <TkParagraph>
                            {i18next.t('pdsa.q2')}
                        </TkParagraph>
                        <TextInput
                            label="Actual"
                            mode="outlined"
                            multiline={true}
                            onChangeText={(txt) =>
                                setPdsaEntry((entry) => ({
                                    ...entry,
                                    actual: txt,
                                }))
                            }
                            placeholder="Actual"
                            right={
                                <TextInput.Icon
                                    name="trash-outline"
                                    onPress={() =>
                                        setPdsaEntry((entry) => ({
                                            ...entry,
                                            actual: '',
                                        }))
                                    }
                                />
                            }
                            value={pdsaEntry.actual}
                        />
                        <TkParagraph>
                            {i18next.t('pdsa.q3')}
                        </TkParagraph>
                        <TextInput
                            label="Obstacle"
                            mode="outlined"
                            multiline={true}
                            onChangeText={(txt) =>
                                setPdsaEntry((entry) => ({
                                    ...entry,
                                    obstacle: txt,
                                }))
                            }
                            placeholder="Obstacle"
                            right={
                                <TextInput.Icon
                                    name="trash-outline"
                                    onPress={() =>
                                        setPdsaEntry((entry) => ({
                                            ...entry,
                                            obstacle: '',
                                        }))
                                    }
                                />
                            }
                            value={pdsaEntry.obstacle}
                        />
                        <TkParagraph>
                            {i18next.t('pdsa.q4')}
                        </TkParagraph>
                        <TextInput
                            label="Step"
                            mode="outlined"
                            multiline={true}
                            onChangeText={(txt) =>
                                setPdsaEntry((entry) => ({
                                    ...entry,
                                    step: txt,
                                }))
                            }
                            placeholder="Step"
                            right={
                                <TextInput.Icon
                                    name="trash-outline"
                                    onPress={() =>
                                        setPdsaEntry((entry) => ({
                                            ...entry,
                                            step: '',
                                        }))
                                    }
                                />
                            }
                            value={pdsaEntry.step}
                        />
                        <TkParagraph>
                            {i18next.t('pdsa.q5')}
                        </TkParagraph>
                        <TextInput
                            label="Learnt"
                            mode="outlined"
                            multiline={true}
                            onChangeText={(txt) =>
                                setPdsaEntry((entry) => ({
                                    ...entry,
                                    learnt: txt,
                                }))
                            }
                            placeholder="Learnt"
                            right={
                                <TextInput.Icon
                                    name="trash-outline"
                                    onPress={() =>
                                        setPdsaEntry((entry) => ({
                                            ...entry,
                                            step: '',
                                        }))
                                    }
                                />
                            }
                            value={pdsaEntry.learnt}
                        />
                    </Card.Content>
                </Card>
            </ScrollView>
        </>
    );
};

export default DownloadPage;
