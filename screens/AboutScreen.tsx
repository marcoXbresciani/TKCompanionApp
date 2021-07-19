import {Button, Linking, SectionList, Text, View} from 'react-native';
import * as React from 'react';
import styled from 'styled-components';
import {BiggerText, BoldText, SmallerText} from '../components/Texts';

const Notice = styled(View)`
        padding: 20px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 10px;
`;

const JustifiedText = styled(Text)`
        text-align: justify;
`;

const NotButton = styled(Button)`
        margin: 10px;
`;

const Sep = () => <View style={{margin: 2}} />;

export const AboutScreen = ({navigation}) => (
        <View
                style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                }}>
                <BoldText>
                        <BiggerText>TKCompanionApp</BiggerText>
                </BoldText>
                <Text>version 0.1.0</Text>
                <Text>
                        <SmallerText> </SmallerText>
                </Text>
                <Text>Copyright © 2021 Marco Bresciani</Text>
                <Text>
                        <SmallerText> </SmallerText>
                </Text>
                <Notice>
                        <JustifiedText>
                                This program is free software: you can
                                redistribute it and/or modify it under
                                the terms of the GNU General Public
                                License as published by the Free
                                Software Foundation, either version 3 of
                                the License, or (at your option) any
                                later version.
                        </JustifiedText>
                        <JustifiedText>
                                This program is distributed in the hope
                                that it will be useful, but WITHOUT ANY
                                WARRANTY; without even the implied
                                warranty of MERCHANTABILITY or FITNESS
                                FOR A PARTICULAR PURPOSE. See the GNU
                                General Public License for more details.
                        </JustifiedText>
                        <JustifiedText>
                                You should have received a copy of the
                                GNU General Public License along with
                                this program. If not,
                                see&lt;https://www.gnu.org/licenses/&gt;.
                        </JustifiedText>
                </Notice>

                <SectionList
                        ItemSeparatorComponent={Sep}
                        renderSectionHeader={({section: {title}}) => (
                                <BoldText style={{textAlign: 'center'}}>
                                        {title}
                                </BoldText>
                        )}
                        renderItem={({section, item}) => (
                                <NotButton
                                        title={item.key}
                                        color={section.color}
                                        onPress={() => {
                                                Linking.openURL(
                                                        item.uri,
                                                );
                                        }}
                                        accessibilityLabel={item.key}>
                                        {item.key}
                                </NotButton>
                        )}
                        sections={[
                                {
                                        title: 'This application does NOT',
                                        color: 'crimson',
                                        data: [
                                                {
                                                        key: 'collect your data',
                                                        uri: 'https://www.eff.org/issues/privacy',
                                                },
                                                {
                                                        key: 'contain tracking libraries',
                                                        uri: 'https://www.eff.org/issues/privacy',
                                                },
                                                {
                                                        key: 'phone home',
                                                        uri: 'https://en.wikipedia.org/wiki/Phoning_home',
                                                },
                                                {
                                                        key: 'use Google Play Store APIs',
                                                        uri: 'https://en.wikipedia.org/wiki/Google_Play_Services#Concerns',
                                                },
                                                {
                                                        key: 'save things on your device',
                                                        uri: 'https://www.eff.org/issues/privacy',
                                                },
                                                {
                                                        key: 'spy on you',
                                                        uri: 'https://www.eff.org/issues/privacy',
                                                },
                                        ],
                                },
                                {
                                        title: 'This application MIGHT',
                                        color: 'yellowgreen',
                                        data: [
                                                {
                                                        key: 'be fun',
                                                        uri: 'http://www-personal.umich.edu/~mrother/Extras.html',
                                                },
                                                {
                                                        key: 'help you coaching Kata',
                                                        uri: 'http://www-personal.umich.edu/~mrother/The_Coaching_Kata.html',
                                                },
                                                {
                                                        key: 'help you improving',
                                                        uri: 'http://www-personal.umich.edu/~mrother/The_Improvement_Kata.html',
                                                },
                                                {
                                                        key: 'teach you scientific thinking',
                                                        uri: 'http://www-personal.umich.edu/~mrother/Challenge.html',
                                                },
                                        ],
                                },
                        ]}
                />
        </View>
);
