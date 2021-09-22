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
import { Linking } from "react-native";
import * as React from "react";
import {
        BoldCentered,
        CenteredText,
        JustifiedMargin,
        SmallerText,
} from "../components/Texts";
import TKButton from "../components/TKButton";
import DefaultScreen from "./DefaultScreen";

const KTSScreen: React.FunctionComponent = () => (
        <DefaultScreen>
                <BoldCentered>Kata that Shit</BoldCentered>
                <CenteredText>[κατα]</CenteredText>
                <CenteredText>
                        <SmallerText> </SmallerText>
                </CenteredText>
                <JustifiedMargin>
                        Applying the pattern of the Improvement Kata
                        (from the book &apos;Toyota Kata&apos;) to a
                        persistently aggravating problem that involves
                        obstacles and has no obvious solution. Statement
                        used when someone has been repeatedly
                        frustrated, wants black-and-white answers or
                        expects someone else to solve the problem.
                </JustifiedMargin>
                <TKButton
                        onPress={() => {
                                Linking.openURL(
                                        "http://www-personal.umich.edu/~mrother/KATA_Files/KTS.jpg",
                                );
                        }}
                />
        </DefaultScreen>
);

export default KTSScreen;