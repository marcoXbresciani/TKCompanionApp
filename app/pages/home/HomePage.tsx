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
import Version from '../../globals/Version';
import PageContainer from '../../globals/PageContainer';
import {Appbar, Card, Dialog, Portal} from 'react-native-paper';
import {TkCard, TkCardContent} from '../../globals/Pieces';
import Settings from './Settings';
import Copyright from './Copyright';
import About from './About';

const HomePage: React.FunctionComponent = () => {
    const [visibleAbout, setVisibleAbout] = React.useState(false);
    const showAbout = () => setVisibleAbout(true);
    const hideAbout = () => setVisibleAbout(false);

    const [visibleCopyright, setVisibleCopyright] =
        React.useState(false);
    const showCopyright = () => setVisibleCopyright(true);
    const hideCopyright = () => setVisibleCopyright(false);

    const [visibleSettings, setVisibleSettings] = React.useState(false);
    const showSettings = () => setVisibleSettings(true);
    const hideSettings = () => setVisibleSettings(false);

    return (
        <PageContainer>
            <Portal>
                <Dialog visible={visibleAbout} onDismiss={hideAbout}>
                    <Dialog.Content>
                        <About />
                    </Dialog.Content>
                </Dialog>
                <Dialog
                    visible={visibleCopyright}
                    onDismiss={hideCopyright}
                >
                    <Dialog.ScrollArea>
                        <Copyright />
                    </Dialog.ScrollArea>
                </Dialog>
                <Dialog
                    visible={visibleSettings}
                    onDismiss={hideSettings}
                >
                    <Dialog.Content>
                        <Settings />
                    </Dialog.Content>
                </Dialog>
            </Portal>

            <Appbar>
                <Appbar.Action
                    icon="settings-outline"
                    onPress={showSettings}
                />
                <Appbar.Action
                    icon="document-text-outline"
                    onPress={showCopyright}
                />
                <Appbar.Action
                    icon="information-circle-outline"
                    onPress={showAbout}
                />
            </Appbar>

            <TkCard>
                <Card.Cover
                    source={require('../../assets/images/dh000004.jpg')}
                />
                <TkCardContent>
                    <Version />
                </TkCardContent>
            </TkCard>
        </PageContainer>
    );
};

export default HomePage;
