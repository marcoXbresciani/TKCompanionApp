/*
 * © 2021-2023 Marco Bresciani
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
 * SPDX-FileCopyrightText: 2021-2023 Marco Bresciani
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
import { IconButton } from 'react-native-paper'
import i18n from '../i18n/i18n'
import styled from 'styled-components'
import TkSnackbar from '../components/TkSnackbar'

const BadgesContent = styled(TkCardContent)`
    flex-direction: row;
    flex-wrap: wrap;
  `

const BadgesPage: React.FC = () => {
  const badges: Array<{ description: string, icon: string }> = i18n.t('badges.list', { returnObjects: true })
  const messages: string[] = i18n.t('badges.message', { returnObjects: true })
  const [visibleSnack, setVisibleSnack] = React.useState(false)
  const [snackMessage, setSnackMessage] = React.useState('')
  const earned: boolean[] = [false, true, true]

  return (
    <>
      <ScrollView>
        <PageContainer>
          <TkCard>
            <TkCardTitle title={i18n.t('badges.title')} titleNumberOfLines={1} />
            <TkCardContent>
              {
              messages.flatMap((message) => {
                return <TkText key={message}>{message}</TkText>
              })
            }
            </TkCardContent>
            <BadgesContent>
              {badges.flatMap((badge, index) => {
                return (
                  <IconButton
                    key={badge.icon}
                    mode={(earned[index] ?? false) ? 'outlined' : 'contained-tonal'} disabled={earned[index] ?? true} icon={badge.icon} onPress={() => {
                      setSnackMessage(badge.description)
                      setVisibleSnack(true)
                    }}
                  />
                )
              })}
            </BadgesContent>
          </TkCard>
        </PageContainer>
      </ScrollView>
      <TkSnackbar
        duration={1500}
        message={snackMessage} visible={visibleSnack}
        setVisible={setVisibleSnack}
      />
    </>
  )
}

export default BadgesPage
