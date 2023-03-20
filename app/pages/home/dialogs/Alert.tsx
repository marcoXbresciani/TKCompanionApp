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
import { ScrollView, View } from 'react-native'
import { Dialog, Divider } from 'react-native-paper'
import TkText from '../../../components/TkText'
import SmallerText from '../../../components/SmallerText'
import BoldText from '../../../components/BoldText'

const Notice = styled(View)`
  align-content: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5% 5%;
  padding: 10px;
`
styled(View)`
  flex-direction: row;
`
const Alert: React.FunctionComponent = () => {
  return (
    <>
      <Dialog.Title>Alert</Dialog.Title>
      <ScrollView>
        <Dialog.Content>
          <Notice key='alert'>
            <TkText><BoldText>DO NOT</BoldText> download TKCompanionApp
              from Google Play or Apple App Store!
            </TkText>
            <Divider />
            <SmallerText>
              There has been found at least one unauthorized clone of
              TKCompanionApp on Google Play.
            </SmallerText>
            <SmallerText>
              That is is filled with advertisement and is neither done
              nor endorsed by the original author.
            </SmallerText>
            <SmallerText>
              TKCompanionApp is available only through F-Droid or via
              Codeberg APK files direct download.
            </SmallerText>
            <Divider />
            <TkText>
              If you have downloaded TKCompanionApp from Google Play or
              Apple App Store, please remove it for your safety and
              download it from F-Droid.
            </TkText>
          </Notice>
          <Notice key='bug'>
            <TkText>This message will unfortunately remain till that
              clone/scam app will be removed (as requested, for
              copyright infringement) by Google from Google
              Play.
            </TkText>
            <Divider />
            <SmallerText>I'll fix this message in next release, to make
              it appear only once, instead of every time when opening
              the app.
            </SmallerText>
          </Notice>
        </Dialog.Content>
      </ScrollView>
    </>
  )
}
export default Alert
