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
import styled from 'styled-components'
import { Pressable, View } from 'react-native'
import * as React from 'react'
import i18next from 'i18next'
import { Trans, useTranslation } from 'react-i18next'
import { TkText } from '../../../components/TkText'
import { BoldText } from '../../../components/BoldText'
import { CenteredTitle } from '../../../components/CenteredTitle'
import Separator from './Separator'
import { Caption, useTheme } from 'react-native-paper'

const FrontView = styled(View)`
    border: 10px solid ${props => props.theme.bg};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    display: flex;
    flex-direction: column;
    margin: 0;
`

const CkView = styled(View)`
  background: ${props => props.theme.bg}
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const CKText = styled(TkText)`
  font-weight: bold;
  height:40px;
  margin: auto;
  padding: 5px;
  text-transform: uppercase;
`

const CkTitle = styled(CenteredTitle)`
  color: ${props => props.theme.bg}
`

const QuestionsView = styled(View)`
  border-radius: 20px;
  padding: 10px;
`

interface Props {
  onPress: () => void
}

const Front5Q: React.FC<Props> = ({ onPress }: Props) => {
  const { t } = useTranslation()

  const borderTheme = {
    bg: `${useTheme().colors.primary}`
  }

  return (
    <>
      <CkView theme={borderTheme}>
        <CKText>{`${i18next.t('5q.front.header')}`}</CKText>
      </CkView>
      <FrontView theme={borderTheme}>
        <QuestionsView>
          <CkTitle theme={borderTheme}>{`${i18next.t('5q.front.title')}`}</CkTitle>
          <TkText>
            <Trans
              t={t}
              i18nKey='5q.front.q1'
              components={{
                bold: <BoldText />
              }}
            />
          </TkText>
          <TkText>
            <Trans
              t={t}
              i18nKey='5q.front.q2'
              components={{
                bold: <BoldText />
              }}
            />
          </TkText>
          <Pressable onPress={() => onPress()}>
            <Separator>
              {`${i18next.t('5q.front.separator')}`}
            </Separator>
          </Pressable>
          <TkText>
            <Trans
              t={t}
              i18nKey='5q.front.q3.1'
              components={{
                bold: <BoldText />
              }}
            />
            {'\n'}
            {`${i18next.t('5q.front.q3.2')}`}
          </TkText>
          <TkText>
            <Trans
              t={t}
              i18nKey='5q.front.q4.1'
              components={{
                bold: <BoldText />
              }}
            />
            {'\n'}
            {`${i18next.t('5q.front.q4.2')}`}
          </TkText>
          <TkText>
            <Trans
              t={t}
              i18nKey='5q.front.q5'
              components={{
                bold: <BoldText />
              }}
            />
          </TkText>
          <Caption>{`${i18next.t('5q.front.caption')}`}</Caption>
        </QuestionsView>
      </FrontView>
    </>
  )
}

export default Front5Q
