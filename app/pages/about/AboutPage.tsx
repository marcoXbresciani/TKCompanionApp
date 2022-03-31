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
import PageContainer from '../../globals/PageContainer';
import {
    Button,
    Card,
    Dialog,
    IconButton,
    List,
    Modal,
    Portal,
    useTheme,
} from 'react-native-paper';
import Copyright from './Copyright';
import Version from '../../globals/Version';
import {Trans, useTranslation} from 'react-i18next';
import {BoldText} from '../../globals/Texts';
import {Linking} from 'react-native';
import i18next from 'i18next';
import styled from 'styled-components';
import Settings from './Settings';

const MightItem = styled(List.Item)``;
const NotItem = styled(List.Item)``;

MightItem.defaultProps = {
    titleStyle: {color: 'forestgreen'},
};
NotItem.defaultProps = {
    titleStyle: {color: 'crimson'},
};

const AboutPage: React.FunctionComponent = () => {
    const {t} = useTranslation('');

    const [visibleCopyright, setVisibleCopyright] =
        React.useState(false);
    const [visibleLegend, setVisibleLegend] = React.useState(false);
    const [visibleSettings, setVisibleSettings] = React.useState(false);

    const showCopyright = () => setVisibleCopyright(true);
    const hideCopyright = () => setVisibleCopyright(false);
    const showLegend = () => setVisibleLegend(true);
    const hideLegend = () => setVisibleLegend(false);
    const showSettings = () => setVisibleSettings(true);
    const hideSettings = () => setVisibleSettings(false);
    const containerStyle = {
        backgroundColor: useTheme().colors.background,
        padding: 20,
    };

    return (
        <PageContainer>
            <Portal>
                <Dialog
                    visible={visibleCopyright}
                    onDismiss={hideCopyright}
                >
                    <Copyright />
                </Dialog>
                <Modal
                    visible={visibleLegend}
                    onDismiss={hideLegend}
                    contentContainerStyle={containerStyle}
                >
                    <Version />
                </Modal>
                <Modal
                    visible={visibleSettings}
                    onDismiss={hideSettings}
                    contentContainerStyle={containerStyle}
                >
                    <Settings />
                </Modal>
            </Portal>
            <Card>
                <Card.Content>
                    <Version />
                </Card.Content>
                <Card.Content>
                    <List.AccordionGroup>
                        <List.Accordion
                            id={1}
                            title={
                                <Trans
                                    t={t}
                                    i18nKey={'about.might.title'}
                                    components={{bold: <BoldText />}}
                                />
                            }
                            titleNumberOfLines={2}
                        >
                            <MightItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'http://www-personal.umich.edu/~mrother/The_Improvement_Kata.html',
                                    );
                                }}
                                title={i18next.t('about.might.key1')}
                                titleNumberOfLines={2}
                            />
                            <MightItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'http://www-personal.umich.edu/~mrother/The_Coaching_Kata.html',
                                    );
                                }}
                                title={i18next.t('about.might.key2')}
                                titleNumberOfLines={2}
                            />
                            <MightItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'http://www-personal.umich.edu/~mrother/Extras.html',
                                    );
                                }}
                                title={i18next.t('about.might.key3')}
                                titleNumberOfLines={2}
                            />
                            <MightItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'http://www-personal.umich.edu/~mrother/Challenge.html',
                                    );
                                }}
                                title={i18next.t('about.might.key4')}
                                titleNumberOfLines={2}
                            />
                        </List.Accordion>
                        <List.Accordion
                            id={2}
                            title={
                                <Trans
                                    t={t}
                                    i18nKey={'about.not.title'}
                                    components={{bold: <BoldText />}}
                                />
                            }
                            titleNumberOfLines={2}
                        >
                            <NotItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'https://www.eff.org/issues/privacy',
                                    );
                                }}
                                title={i18next.t('about.not.key1')}
                                titleNumberOfLines={2}
                            />
                            <NotItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'https://www.eff.org/issues/privacy',
                                    );
                                }}
                                title={i18next.t('about.not.key2')}
                                titleNumberOfLines={2}
                            />
                            <NotItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'https://en.wikipedia.org/wiki/Phoning_home',
                                    );
                                }}
                                title={i18next.t('about.not.key3')}
                                titleNumberOfLines={2}
                            />
                            <NotItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'https://en.wikipedia.org/wiki/Google_Play_Services#Concerns',
                                    );
                                }}
                                title={i18next.t('about.not.key4')}
                                titleNumberOfLines={2}
                            />
                            <NotItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'https://www.eff.org/issues/privacy',
                                    );
                                }}
                                title={i18next.t('about.not.key5')}
                                titleNumberOfLines={2}
                            />
                            <NotItem
                                left={(props) => (
                                    <List.Icon
                                        {...props}
                                        icon="navigate-circle-outline"
                                    />
                                )}
                                onPress={() => {
                                    Linking.openURL(
                                        'https://www.eff.org/issues/privacy',
                                    );
                                }}
                                title={i18next.t('about.not.key6')}
                                titleNumberOfLines={2}
                            />
                        </List.Accordion>
                    </List.AccordionGroup>
                </Card.Content>
                <Card.Actions>
                    <Button
                        disabled={true}
                        icon="map-outline"
                        mode="outlined"
                        onPress={showLegend}
                    >
                        {i18next.t('about.legend')}
                    </Button>
                    <Button
                        icon="document-text-outline"
                        mode="outlined"
                        onPress={showCopyright}
                    >
                        {i18next.t('about.copyright')}
                    </Button>
                </Card.Actions>
                <Card.Actions>
                    <IconButton
                        icon="settings-outline"
                        onPress={showSettings}
                    />
                </Card.Actions>
            </Card>
        </PageContainer>
    );
};

export default AboutPage;
