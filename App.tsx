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
 *
 * SPDX-FileCopyrightText: 2021 Marco Bresciani
 *
 * SPDX-License-Identifier: GFDL-1.3-or-later
 */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AboutScreen from "./screens/AboutScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import KTSScreen from "./screens/KTSScreen";
import HomeScreen from "./screens/HomeScreen";
import FiveQCard from "./screens/5qcard/FiveQCard";
import TKC from "./screens/tkc/TKC";

const Tab = createMaterialBottomTabNavigator();

const TabIcon5Q = ({ color }: { color: string }) => (
        <Ionicons
                name="people-circle-outline"
                color={color}
                size={25}
        />
);

const TabIconAbout = ({ color }: { color: string }) => (
        <Ionicons
                name="information-circle-outline"
                color={color}
                size={25}
        />
);

const TabIconHome = ({ color }: { color: string }) => (
        <Ionicons name="home" color={color} size={25} />
);

const TabIconKTS = ({ color }: { color: string }) => (
        <Ionicons name="warning-outline" color={color} size={25} />
);

const TabIconTKC = ({ color }: { color: string }) => (
        <Ionicons name="book-outline" color={color} size={25} />
);

const App: React.FunctionComponent = () => {
        return (
                <NavigationContainer>
                        <Tab.Navigator
                                backBehavior="history"
                                barStyle={{
                                        backgroundColor: "royalblue",
                                }}
                                initialRouteName="Home"
                        >
                                <Tab.Screen
                                        name="Home"
                                        options={{
                                                tabBarIcon: TabIconHome,
                                        }}
                                        component={HomeScreen}
                                />
                                <Tab.Screen
                                        name="5Q Card"
                                        options={{
                                                tabBarIcon: TabIcon5Q,
                                        }}
                                        component={FiveQCard}
                                />
                                <Tab.Screen
                                        name="KTS"
                                        options={{
                                                tabBarIcon: TabIconKTS,
                                        }}
                                        component={KTSScreen}
                                />
                                <Tab.Screen
                                        name="TKC"
                                        options={{
                                                tabBarIcon: TabIconTKC,
                                        }}
                                        component={TKC}
                                />
                                <Tab.Screen
                                        name="About"
                                        component={AboutScreen}
                                        options={{
                                                tabBarIcon: TabIconAbout,
                                        }}
                                />
                        </Tab.Navigator>
                </NavigationContainer>
        );
};

export default App;
