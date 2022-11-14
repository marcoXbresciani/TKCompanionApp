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
import styled from 'styled-components'
import { Linking, ScrollView, View } from 'react-native'
import { Dialog, IconButton } from 'react-native-paper'
import TkText from '../../../components/TkText'
import i18n from '../../../i18n/i18n'
import SmallerText from '../../../components/SmallerText'

const Notice = styled(View)`
  align-content: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5% 5%;
  padding: 10px;
`

const ButtonsStrip = styled(View)`
  flex-direction: row;
`

const Copyright: React.FunctionComponent = () => {
  const translators: string[] = i18n.t('about.translation.author', {
    returnObjects: true
  })

  return (
    <>
      <Dialog.Title>Copyright</Dialog.Title>
      <ScrollView>
        <Dialog.Content>
          <Notice key='licence'>
            <TkText>© 2021-2022 Marco Bresciani</TkText>
            <SmallerText>
              TKCompanionApp is free software: you can redistribute it
              and/or modify it under the terms of the GNU General Public
              License as published by the Free Software Foundation,
              either version 3 of the License, or (at your option) any
              later version.
            </SmallerText>
            <SmallerText>
              TKCompanionApp is distributed in the hope that it will be
              useful, but WITHOUT ANY WARRANTY; without even the implied
              warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
              PURPOSE. See the GNU General Public License for more
              details.
            </SmallerText>
            <SmallerText>
              You should have received a copy of the GNU General Public
              License along with TKCompanionApp. If not, see
              &lt;https://www.gnu.org/licenses/&gt;.
            </SmallerText>
          </Notice>
          <Notice key='translators'>
            <TkText>{i18n.t('about.translation.title')}</TkText>
            {translators.flatMap((name, index) => {
              return (
                <SmallerText
                  key={index}
                >&bull; {name}
                </SmallerText>
              )
            })}
          </Notice>
          <Notice key='font'>
            <TkText>© 2012 Primož Peterlin, Steve White</TkText>
            <SmallerText>GNU FreeFont</SmallerText>
            <ButtonsStrip>
              <IconButton
                icon='copyleft'
                onPress={() => {
                  void Linking.openURL(
                    'https://www.gnu.org/software/freefont/license.html'
                  )
                }}
              />
              <IconButton
                icon='home-export-outline'
                onPress={() => {
                  void Linking.openURL(
                    'https://www.gnu.org/software/freefont/'
                  )
                }}
              />
            </ButtonsStrip>
          </Notice>
        </Dialog.Content>
      </ScrollView>
    </>
  )
}
export default Copyright
