import {Text, View} from 'react-native';
import * as React from 'react';
import {BoldText} from '../components/BoldText';
import styled from 'styled-components';

const Notice = styled(View)`
        padding: 20px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 10px;
`;

export const AboutScreen = () => (
        <View
                style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                }}>
                <BoldText>
                        Toyota Kata Companion App (TKCompanionApp)
                </BoldText>
                <Text> </Text>
                <Text>Copyright © 2021 Marco Bresciani</Text>
                <Text> </Text>
                <Notice>
                        <Text>
                                This program is free software: you can
                                redistribute it and/or modify it under
                                the terms of the GNU General Public
                                License as published by the Free
                                Software Foundation, either version 3 of
                                the License, or (at your option) any
                                later version.
                        </Text>
                        <Text>
                                This program is distributed in the hope
                                that it will be useful, but WITHOUT ANY
                                WARRANTY; without even the implied
                                warranty of MERCHANTABILITY or FITNESS
                                FOR A PARTICULAR PURPOSE. See the GNU
                                General Public License for more details.
                        </Text>
                        <Text>
                                You should have received a copy of the
                                GNU General Public License along with
                                this program. If not,
                                see&lt;https://www.gnu.org/licenses/&gt;.
                        </Text>
                </Notice>
        </View>
);
