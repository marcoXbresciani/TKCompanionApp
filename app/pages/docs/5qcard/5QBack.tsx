/*
 * © 2021-2024 Marco Bresciani
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
 * SPDX-FileCopyrightText: 2021-2024 Marco Bresciani
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import styled from 'styled-components'
import { Pressable, View } from 'react-native'
import * as React from 'react'
import i18next from 'i18next'
import { Trans, useTranslation } from 'react-i18next'
import {
  Card,
  Divider,
  IconButton,
  List,
  Text,
  ToggleButton,
  useTheme
} from 'react-native-paper'
import TkCardTitle from '../../../components/tkcard/TkCardTitle'
import TkCard from '../../../components/tkcard/TkCard'
import { TkCardContent } from '../../../components/tkcard/TkCardContent'
import BoldText from '../../../components/BoldText'
import { useState } from 'react'

const Returner = styled(View)`
  border-top-color: ${props => props.theme.bg};
  border-top-width: 1px;
  padding: 0 5px;
  text-align: right;
`

interface Props {
  onPress: () => void
}

const Back5QScreen: React.FC<Props> = ({ onPress }: Props) => {
  const { t } = useTranslation('')
  const texts: string[] = t('docs.5qcard.back.5Q', { returnObjects: true })
  const [bookmarks, setBookmarks] = useState<Array<'checked' | 'unchecked'>>(['unchecked', 'unchecked', 'unchecked', 'unchecked', 'unchecked'])
  const toggleBookmark = (index: number): void => {
    const result: Array<'checked' | 'unchecked'> = [...bookmarks] as Array<'checked' | 'unchecked'>
    result[index] = result[index] === 'checked' ? 'unchecked' : 'checked'
    setBookmarks(result)
  }

  const lineTheme = {
    bg: `${useTheme().colors.primary}`
  }

  return (
    <TkCard>
      <TkCardTitle
        title={`${i18next.t('docs.5qcard.back.title')}`}
        subtitle={`${i18next.t('docs.5qcard.back.quote')}`}
        subtitleNumberOfLines={3}
      />
      <TkCardContent>
        <Text><Trans t={t} i18nKey='docs.5qcard.back.caption' components={{ bold: <BoldText /> }} /></Text>
        <Divider />
        {
          texts.flatMap((item, index) => {
            return (
              <List.Item
                key={item}
                left={() => <IconButton icon={`numeric-${index + 1}-circle-outline`} />}
                right={() => <ToggleButton icon='bookmark-outline' value={`Q${index}`} status={bookmarks[index] as 'checked' | 'unchecked'} onPress={() => toggleBookmark(index)} />}
                title={() => <Text variant='titleMedium'><Trans t={t} i18nKey={item} components={{ bold: <BoldText /> }} /></Text>}
                titleNumberOfLines={3}
              />
            )
          })
        }
      </TkCardContent>
      <Card.Actions>
        <Pressable onPress={() => onPress()}>
          <Returner theme={lineTheme}><Text>{`${i18next.t('docs.5qcard.back.return')}`}</Text></Returner>
        </Pressable>
      </Card.Actions>
    </TkCard>
  )
}

export default Back5QScreen
