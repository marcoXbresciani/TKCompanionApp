/*
 * Copyright © 2021 Marco Bresciani
 * This file is part of TKCompanionApp.
 *
 * TKCompanionApp is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * TKCompanionApp is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Foobar. If not, see <https://www.gnu.org/licenses/>.
 */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Front5QScreen} from './screens/Front5QScreen';
import {AboutScreen} from './screens/AboutScreen';
import {Back5QScreen} from './screens/Back5QScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TitleText} from './components/Texts';

function HomeScreen() {
        return (
                <View
                        style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                        }}>
                        <TitleText>Toyota Kata Companion App</TitleText>
                        <Text>0.1.0</Text>
                </View>
        );
}

const Stack = createStackNavigator();

function FiveQCard() {
        return (
                <Stack.Navigator>
                        <Stack.Screen
                                name="Front"
                                component={Front5QScreen}
                                options={{
                                        headerShown: false,
                                }}
                        />
                        <Stack.Screen
                                name="Back"
                                component={Back5QScreen}
                                options={{
                                        headerShown: false,
                                }}
                        />
                </Stack.Navigator>
        );
}

const Tab = createMaterialBottomTabNavigator();

function App() {
        return (
                <NavigationContainer>
                        <Tab.Navigator initialRouteName="Home">
                                <Tab.Screen
                                        name="Home"
                                        options={{
                                                tabBarIcon: ({
                                                        color,
                                                }) => (
                                                        <Ionicons
                                                                name="home"
                                                                color={
                                                                        color
                                                                }
                                                                size={
                                                                        25
                                                                }
                                                        />
                                                ),
                                        }}
                                        component={HomeScreen}
                                />
                                <Tab.Screen
                                        name="5Q"
                                        options={{
                                                tabBarIcon: ({
                                                        color,
                                                }) => (
                                                        <Ionicons
                                                                name="people-circle-outline"
                                                                color={
                                                                        color
                                                                }
                                                                size={
                                                                        25
                                                                }
                                                        />
                                                ),
                                        }}
                                        component={FiveQCard}
                                />
                                <Tab.Screen
                                        name="About"
                                        component={AboutScreen}
                                        options={{
                                                tabBarIcon: ({
                                                        color,
                                                }) => (
                                                        <Ionicons
                                                                name="information-circle-outline"
                                                                color={
                                                                        color
                                                                }
                                                                size={
                                                                        25
                                                                }
                                                        />
                                                ),
                                        }}
                                />
                        </Tab.Navigator>
                </NavigationContainer>
        );
}
export default App;
