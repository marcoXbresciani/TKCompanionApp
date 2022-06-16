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
import { Card, Dialog, IconButton, Portal } from 'react-native-paper'
import { Linking } from 'react-native'
import i18n from '../../i18n/i18n'
import { TkText } from '../TkText'
import { TkCardContent } from '../tkcard/TkCardContent'
import { TkParagraph } from '../TkParagraph'
import { TkCard } from '../tkcard/TkCard'
import { ItalicText } from './ItalicText'
import TkCardTitle from '../tkcard/TkCardTitle'

interface Props {
  message: string
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Wip: ({ message }: Props) => JSX.Element = ({
  message,
  visible,
  setVisible
}: Props) => {
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={() => setVisible(false)}
      >
        <Dialog.Content>
          <TkCard>
            <TkCardContent>
              <TkCardTitle
                title={`${i18n.t('app.wip.title')}`}
                wip
              />
              <TkParagraph>
                <TkText>
                  {`${i18n.t('app.wip.before')}`}
                </TkText>
              </TkParagraph>
              <TkParagraph>
                <ItalicText>{message}</ItalicText>
              </TkParagraph>
              <TkParagraph>
                <TkText>
                  {`${i18n.t('app.wip.after')}`}
                </TkText>
              </TkParagraph>
            </TkCardContent>
            <Card.Actions>
              <IconButton
                icon='mail-outline'
                onPress={() => {
                  Linking.openURL(
                    'mailto://marco.530@outlook.it'
                  )
                }}
              />
              <IconButton
                icon='chatbox-outline'
                onPress={() => {
                  Linking.openURL(
                    'mailto://marco.530@outlook.it'
                  )
                }}
              />
              <IconButton
                icon='chatbubble-outline'
                onPress={() => {
                  Linking.openURL(
                    'briar://advt45wcki7nmxhnb25sezrohkiistjq7qqjjeyo7njsdwflymydm'
                  )
                }}
              />
            </Card.Actions>
          </TkCard>
        </Dialog.Content>
      </Dialog>
    </Portal>
  )
}

export default Wip
