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
import { Pressable } from 'react-native'
import * as React from 'react'
import { useState } from 'react'
import i18next from 'i18next'
import { Trans, useTranslation } from 'react-i18next'
import Separator from './Separator'
import TkCardTitle from '../../../components/tkcard/TkCardTitle'
import TkCard from '../../../components/tkcard/TkCard'
import { TkCardContent } from '../../../components/tkcard/TkCardContent'
import BoldText from '../../../components/BoldText'
import { List, Text, ToggleButton } from 'react-native-paper'

interface Props {
  onPress: () => void
}

const Front5Q: React.FC<Props> = ({ onPress }: Props) => {
  const { t } = useTranslation()
  const texts: Array<{ text: string, description?: string }> = t('docs.5qcard.front.5Q', { returnObjects: true })

  const [toggles, setToggles] = useState<{ [key: string]: 'checked' | 'unchecked' }>({ Q1: 'unchecked', Q2: 'unchecked', Q3: 'unchecked', Q4: 'unchecked', Q5: 'unchecked' })

  const doToggles = (index: number): void => {
    const result = toggles
    result[`Q${index}`] = result[`Q${index}`] === 'checked' ? 'unchecked' : 'checked'
    setToggles(result)
  }

  return (
    <TkCard>
      <TkCardTitle
        title={`${i18next.t('docs.5qcard.front.header')}`}
        // right={() => <IconButton icon='bookmark-remove-outline' onPress={() => setToggles({ Q1 : 'unchecked', Q2: 'unchecked', Q3: 'unchecked', Q4: 'unchecked', Q5: 'unchecked'})} />}
        subtitle={`${i18next.t('docs.5qcard.front.title')}`}
      />
      <TkCardContent>

        {
         texts.flatMap((item, index) => {
           return (
             <><List.Item
               description={() => item.description !== undefined ? <Text variant='titleMedium'>{item.description}</Text> : <></>}
               descriptionNumberOfLines={10}
               key={item.text}
               left={() => <ToggleButton icon={`numeric-${index + 1}-circle-outline`} size={42} value={`Q${index}`} status={toggles[`Q${index}`] as 'checked' | 'unchecked'} onPress={() => doToggles(index)} />}
               title={() => <Text variant='titleMedium'><Trans t={t} i18nKey={item.text} components={{ bold: <BoldText /> }} /></Text>}
               titleNumberOfLines={5}
               />
               {index === 1 && <Pressable onPress={() => onPress()}><Separator>{`${i18next.t('docs.5qcard.front.separator')}`}</Separator></Pressable>}
             </>
           )
         })
        }
        <Text>{`${i18next.t('docs.5qcard.front.caption')}`}</Text>
      </TkCardContent>
    </TkCard>
  )
}

export default Front5Q
