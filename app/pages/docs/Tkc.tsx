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
import i18n from '../../i18n/i18n'
import TkCard from '../../components/tkcard/TkCard'
import TkCardTitle from '../../components/tkcard/TkCardTitle'
import { TkCardContent } from '../../components/tkcard/TkCardContent'
import TkText from '../../components/TkText'

const Tkc: React.FunctionComponent = () => (
  <TkCard>
    <TkCardTitle title={`${i18n.t('docs.tkc.title')}`} />
    <TkCardContent>
      <TkText>{`${i18n.t('docs.tkc.1')}`}</TkText>
      <TkText>{`${i18n.t('docs.tkc.2')}`}</TkText>
      <TkText>{`${i18n.t('docs.tkc.3')}`}</TkText>
      <TkText>{`${i18n.t('docs.tkc.4')}`}</TkText>
      <TkText>{`${i18n.t('docs.tkc.5')}`}</TkText>
    </TkCardContent>
  </TkCard>
)

export default Tkc
