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
import * as React from 'react'
import { useState } from 'react'
import DocsSelector from './DocsSelector'
import PageContainer from '../PageContainer'
import Kts from './Kts'
import Tkc from './Tkc'
import Practice from './Practice'
import DocsContainer from './DocsContainer'
import FiveQ from './5qcard/FiveQ'
import FourS from './FourS'
import CoachPattern from './CoachPattern'
import Carnegie from './Carnegie'

export enum Pages {
  DefaultPage,
  FiveQCard,
  Pattern,
  FourSteps,
  KtsPage,
  PracticePage,
  TkcPage,
  Carnegie
}

const DocsPage: React.FunctionComponent = () => {
  const [status, setStatus] = useState<Pages>(Pages.DefaultPage)

  return (
    <PageContainer>
      {status === Pages.DefaultPage && (
        <DocsSelector onPress={setStatus} />
      )}
      {status !== Pages.DefaultPage && (
        <>
          <DocsContainer
            onPress={() => {
              setStatus(Pages.DefaultPage)
            }}
          >
            {status === Pages.FiveQCard && <FiveQ />}
            {status === Pages.Pattern && <CoachPattern />}
            {status === Pages.FourSteps && <FourS />}
            {status === Pages.TkcPage && <Tkc />}
            {status === Pages.PracticePage && <Practice />}
            {status === Pages.KtsPage && <Kts />}
            {status === Pages.Carnegie && <Carnegie />}
          </DocsContainer>
        </>
      )}
    </PageContainer>
  )
}

export default DocsPage
