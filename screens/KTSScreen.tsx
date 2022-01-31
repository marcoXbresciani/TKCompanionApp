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
import { Linking } from "react-native";
import * as React from "react";
import {
        BoldCentered,
        CenteredText,
        JustifiedMargin,
} from "../components/Texts";
import DefaultScreen from "./DefaultScreen";
import { TKWButton } from "../components/Buttons";
import i18next from "i18next";

const KTSScreen: React.FunctionComponent = () => (
        <DefaultScreen>
                <BoldCentered>Kata that Shit</BoldCentered>
                <CenteredText>[κατα]</CenteredText>
                <JustifiedMargin>
                        {i18next.t("kts.text")}
                </JustifiedMargin>
                <TKWButton
                        onPress={() => {
                                Linking.openURL(
                                        "http://www-personal.umich.edu/~mrother/KATA_Files/KTS.jpg",
                                );
                        }}
                />
        </DefaultScreen>
);

export default KTSScreen;
