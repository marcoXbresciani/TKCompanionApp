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
import {useState} from 'react';
import DocsSelector from './DocsSelector';
import PageContainer from '../../globals/PageContainer';
import Kts from './Kts';
import Tkc from './Tkc';
import Practice from './Practice';
import DocsContainer from './DocsContainer';
import FiveQ from './5qcard/FiveQ';

export enum Pages {
    DefaultPage,
    FiveQCard,
    KtsPage,
    PracticePage,
    TkcPage,
}

const DocsPage: React.FunctionComponent = () => {
    const [status, setStatus] = useState<Pages>(Pages.DefaultPage);

    return (
        <>
            {status === Pages.DefaultPage && (
                <DocsSelector onPress={setStatus} />
            )}
            {status !== Pages.DefaultPage && (
                <PageContainer>
                    <DocsContainer
                        onPress={() => {
                            setStatus(Pages.DefaultPage);
                        }}
                    >
                        {status === Pages.FiveQCard && <FiveQ />}
                        {status === Pages.TkcPage && <Tkc />}
                        {status === Pages.PracticePage && <Practice />}
                        {status === Pages.KtsPage && <Kts />}
                    </DocsContainer>
                </PageContainer>
            )}
        </>
    );
};

export default DocsPage;
