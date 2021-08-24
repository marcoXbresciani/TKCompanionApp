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
import { SafeAreaView, StatusBar, View } from "react-native";
import * as React from "react";
import { CenteredText, TitleText } from "../components/Texts";

const HomeScreen: React.FunctionComponent = () => (
        <SafeAreaView
                style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                }}
        >
                <StatusBar />
                <View>
                        <TitleText>Toyota Kata Companion App</TitleText>
                        <CenteredText>0.1.0</CenteredText>
                </View>
        </SafeAreaView>
);

export default HomeScreen;
