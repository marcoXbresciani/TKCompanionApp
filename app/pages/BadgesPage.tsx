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
import TkCard from '../components/tkcard/TkCard'
import TkCardTitle from '../components/tkcard/TkCardTitle'
import { TkCardContent } from '../components/tkcard/TkCardContent'
import { ScrollView } from 'react-native'
import PageContainer from './PageContainer'
import TkText from '../components/TkText'
import { Chip } from 'react-native-paper'
import Separator from './docs/5qcard/Separator'
import i18n from '../i18n/i18n'

const BadgesPage: React.FC = () => {
  const badges: { description: string, icon: string }[] = i18n.t('badges.list', { returnObjects: true})
  const messages: string[] = i18n.t('badges.message', { returnObjects: true})

  return (
    <ScrollView>
      <PageContainer>
        <TkCard>
          <TkCardTitle title={i18n.t('badges.title')}/>
          <TkCardContent>
            {
              messages.flatMap((message) => {
                return <TkText>{message}</TkText>
              })
            }
          </TkCardContent>
          <TkCardContent>
            {badges.flatMap((badge) => {
              return (<>
                  <Chip disabled={true} icon={badge.icon}>{i18n.t(badge.description)}</Chip>
                  <Separator />
              </>)
            })}
          </TkCardContent>
        </TkCard>
      </PageContainer>
    </ScrollView>
  )
}

export default BadgesPage
