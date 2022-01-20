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
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import TkcFront from "./TkcFront";
import TkcBack from "./TkcBack";

const Stack = createStackNavigator();

const TckScreen: React.FunctionComponent = () => {
        return (
                <Stack.Navigator initialRouteName="TkcFront">
                        <Stack.Screen
                                name="TkcFront"
                                component={TkcFront}
                                options={{
                                        headerShown: false,
                                }}
                        />
                        <Stack.Screen
                                name="TkcBack"
                                component={TkcBack}
                                options={{
                                        headerShown: false,
                                }}
                        />
                </Stack.Navigator>
        );
};

export default TckScreen;