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
import {List} from 'react-native-paper';
import {Pages} from './DocsPage';
import i18n from '../../i18n/i18n';

type Props = {
    onPress: (page: Pages) => void;
};

const DocsSelector: React.FC<Props> = ({onPress}: Props) => {
    return (
        <>
            <List.Section>
                <List.Subheader>{i18n.t('docs.title')}</List.Subheader>
                <List.Item
                    left={() => (
                        <List.Icon icon="chatbubbles-outline" />
                    )}
                    onPress={() => onPress(Pages.FiveQCard)}
                    title={i18n.t('docs.5qcard')}
                    titleNumberOfLines={2}
                />
                <List.Item
                    left={() => <List.Icon icon="analytics-outline" />}
                    onPress={() => onPress(Pages.FourSteps)}
                    title={i18n.t('docs.4steps')}
                    titleNumberOfLines={2}
                />
                <List.Item
                    left={() => <List.Icon icon="code-outline" />}
                    onPress={() => onPress(Pages.TkcPage)}
                    title={i18n.t('docs.tkc')}
                    titleNumberOfLines={2}
                />
                <List.Item
                    left={() => <List.Icon icon="construct-outline" />}
                    onPress={() => onPress(Pages.PracticePage)}
                    title={i18n.t('docs.practice')}
                    titleNumberOfLines={2}
                />
                <List.Item
                    left={() => (
                        <List.Icon icon="thunderstorm-outline" />
                    )}
                    onPress={() => onPress(Pages.KtsPage)}
                    title={i18n.t('docs.kts')}
                    titleNumberOfLines={2}
                />
            </List.Section>
        </>
    );
};

export default DocsSelector;
