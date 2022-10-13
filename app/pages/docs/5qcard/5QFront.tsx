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
import { Pressable } from 'react-native'
import * as React from 'react'
import i18next from 'i18next'
import { Trans, useTranslation } from 'react-i18next'
import Separator from './Separator'
import TkCardTitle from '../../../components/tkcard/TkCardTitle'
import TkCard from '../../../components/tkcard/TkCard'
import { TkCardContent } from '../../../components/tkcard/TkCardContent'
import SmallerText from '../../../components/SmallerText'
import TkText from '../../../components/TkText'
import BoldText from '../../../components/BoldText'

interface Props {
  onPress: () => void
}

const Front5Q: React.FC<Props> = ({ onPress }: Props) => {
  const { t } = useTranslation()

  return (
    <TkCard>
      <TkCardTitle
        title={`${i18next.t('5q.front.header')}`}
        subtitle={`${i18next.t('5q.front.title')}`}
      />
      <TkCardContent>
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
        <SmallerText>{`${i18next.t('5q.front.caption')}`}</SmallerText>
      </TkCardContent>
    </TkCard>
  )
}

export default Front5Q
