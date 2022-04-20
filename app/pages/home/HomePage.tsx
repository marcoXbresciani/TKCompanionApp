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
import {
    Appbar,
    Card,
    Dialog,
    Modal,
    Portal,
    useTheme,
} from 'react-native-paper';
import {TkCard, TkCardContent} from '../../globals/Pieces';
import Settings from './Settings';
import Copyright from '../about/Copyright';

const HomePage: React.FunctionComponent = () => {
    const [visibleCopyright, setVisibleCopyright] =
        React.useState(false);
    const showCopyright = () => setVisibleCopyright(true);
    const hideCopyright = () => setVisibleCopyright(false);
    const [visibleSettings, setVisibleSettings] = React.useState(false);
    const showSettings = () => setVisibleSettings(true);
    const hideSettings = () => setVisibleSettings(false);
    const containerStyle = {
        backgroundColor: useTheme().colors.background,
        padding: 20,
    };

    return (
        <PageContainer>
            <Portal>
                <Modal
                    visible={visibleSettings}
                    onDismiss={hideSettings}
                    contentContainerStyle={containerStyle}
                >
                    <Settings />
                </Modal>
                <Dialog
                    visible={visibleCopyright}
                    onDismiss={hideCopyright}
                >
                    <Copyright />
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
