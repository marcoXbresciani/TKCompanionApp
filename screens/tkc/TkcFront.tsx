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
import { SectionList } from "react-native";
import * as React from "react";
import { BoldCentered } from "../../components/Texts";
import DefaultScreen from "../DefaultScreen";
import { useNavigation } from "@react-navigation/native";
import {
        FrontRenderer,
        SectionItemSeparator,
} from "../../components/Pieces";
import { NavButton } from "../../components/Buttons";
import i18next from "i18next";

const TkcFront: React.FunctionComponent = () => {
        const navigation = useNavigation();

        return (
                <DefaultScreen>
                        <BoldCentered>The Kata Code</BoldCentered>
                        <SectionList
                                ItemSeparatorComponent={
                                        SectionItemSeparator
                                }
                                renderItem={({ item }) => (
                                        <FrontRenderer>
                                                {item.key}
                                        </FrontRenderer>
                                )}
                                sections={[
                                        {
                                                data: [
                                                        {
                                                                key: i18next.t(
                                                                        "tkc.front.1",
                                                                ),
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        "tkc.front.2",
                                                                ),
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        "tkc.front.3",
                                                                ),
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        "tkc.front.4",
                                                                ),
                                                        },
                                                        {
                                                                key: i18next.t(
                                                                        "tkc.front.5",
                                                                ),
                                                        },
                                                ],
                                        },
                                ]}
                        />
                        <NavButton
                                onPress={() =>
                                        navigation.navigate("TkcBack")
                                }
                                title="Changing thinking
                                                through practice"
                        />
                </DefaultScreen>
        );
};

export default TkcFront;
