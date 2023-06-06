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
import { Linking, ScrollView } from 'react-native'
import PageContainer from './PageContainer'
import TkText from '../components/TkText'
import { Chip, IconButton, List } from 'react-native-paper'
import i18n from '../i18n/i18n'

const BadgesPage: React.FC = () => {
  const events: Array<{ date: string, location: string, title: string, url: string }> = [
    {
      date: '2023-07-22',
      location: 'CN',
      title: 'TOYOTA KATA',
      url: 'https://www.cameraitacina.com/en/events/toyota-kata'
    },
    {
      date: '2023-08-16',
      location: 'WWW',
      title: 'A Vision of Process Excellence and Seven Habits for the Journey',
      url: 'https://us02web.zoom.us/webinar/register/WN_LF16EVAuRAOtp-aEys_OPQ'
    }
  ]

  const messages: string[] = i18n.t('events.message', { returnObjects: true })

  return (
    <>
      <ScrollView>
        <PageContainer>
          <TkCard>
            <TkCardTitle title={i18n.t('events.title')} />
            <TkCardContent>
              {
                messages.flatMap((message) => {
                  return <TkText key={message}>{message}</TkText>
                })
              }
              <List.Section>
                {
                  events.flatMap(event => {
                    return (
                      <List.Item
                        description={event.location}
                        key={event.url}
                        left={() => (
                          <Chip>{event.date}</Chip>
                        )}
                        right={() => (
                          <IconButton
                            icon='home-export-outline'
                            onPress={() => { void Linking.openURL(event.url) }}
                          />
                        )}
                        title={event.title}
                        titleNumberOfLines={10}
                      />
                    )
                  })
                }
              </List.Section>
            </TkCardContent>
          </TkCard>
        </PageContainer>
      </ScrollView>
    </>
  )
}

export default BadgesPage
