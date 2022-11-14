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
import { Linking, ScrollView } from 'react-native'
import { Chip, Dialog, Divider } from 'react-native-paper'
import i18n from '../../../i18n/i18n'
import TkText from '../../../components/TkText'
import BoldText from '../../../components/BoldText'

const Feedback: React.FC = () => {
  const messages: string[] = i18n.t('panel.home.messages', { returnObjects: true })

  return (
    <>
      <Dialog.Title>{i18n.t('panel.home.title')}</Dialog.Title>
      <ScrollView>
        <Dialog.Content>
          <TkText>{i18n.t('panel.home.before')}</TkText>
          <Divider />
          {messages.flatMap((message, index) => {
            return <BoldText key={index}>{message}</BoldText>
          })}
          <Divider />
          <TkText>{i18n.t('panel.home.after')}</TkText>
        </Dialog.Content>
        <Dialog.Actions>
          <Chip
            icon='email-outline' onPress={() => {
              void Linking.openURL(
                'mailto://marco.530@outlook.it'
              )
            }}
          >e-mail
          </Chip>
          <Chip
            icon='chat-outline' onPress={() => {
              void Linking.openURL(
                'mailto://marco.530@outlook.it'
              )
            }}
          >Delta Chat
          </Chip>
        </Dialog.Actions>
      </ScrollView>
    </>
  )
}

export default Feedback
