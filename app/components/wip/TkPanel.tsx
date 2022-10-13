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
import { Chip, Dialog, Divider, Portal } from 'react-native-paper'
import { Linking } from 'react-native'
import TkText from '../TkText'
import { TkCardContent } from '../tkcard/TkCardContent'
import TkCard from '../tkcard/TkCard'
import TkCardTitle from '../tkcard/TkCardTitle'
import StorageFactory from '../../utils/storage/StorageFactory'
import {
  AllowedSettings
} from '../../utils/storage/settings/AllowedSettings'
import BoldText from '../BoldText'

interface Props {
  title: string
  before: string
  messages: string[]
  after: string
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const TkPanel: ({
  title,
  before,
  messages,
  after
}: Props) => JSX.Element = ({
  title,
  before,
  messages,
  after,
  visible,
  setVisible
}: Props) => {
  const storage = StorageFactory.getInstance().getSettingsStorage()

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={() => {
          setVisible(false)
          void storage.write(AllowedSettings.HOME_TITLE, 'true')
        }}
      >
        <Dialog.Content>
          <TkCard>
            <TkCardTitle
              title={title}
              wip
            />
            <TkCardContent>
              <TkText>{before}</TkText>
              <Divider />
              {messages.flatMap((message) => {
                return <BoldText>{message}</BoldText>
              })}
              <Divider />
              <TkText>{after}</TkText>
            </TkCardContent>
          </TkCard>
        </Dialog.Content>
        <Dialog.Actions>
          <Chip
            icon='mail-outline' onPress={() => {
              void Linking.openURL(
                'mailto://marco.530@outlook.it'
              )
            }}
          >e-mail
          </Chip>
          <Chip
            icon='chatbox-outline' onPress={() => {
              void Linking.openURL(
                'mailto://marco.530@outlook.it'
              )
            }}
          >Delta Chat
          </Chip>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default TkPanel
