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
import { IconButton, List, Snackbar } from 'react-native-paper'
import { Pages } from './DocsPage'
import i18n from '../../i18n/i18n'
import { Linking } from 'react-native'
import { useState } from 'react'
import TkCard from '../../components/tkcard/TkCard'
import TkCardTitle from '../../components/tkcard/TkCardTitle'
import { TkCardContent } from '../../components/tkcard/TkCardContent'

interface Props {
  onPress: (page: Pages) => void
}

const DocsSelector: React.FC<Props> = ({ onPress }: Props) => {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)

  const onToggleSnackBar = (): void => setVisible(!visible)
  const onDismissSnackBar = (): void => {
    setVisible(false)
    setMessage('')
  }

  const openUrl = (fileName: string): void => {
    Linking.openURL(fileName).catch((reason) => {
      const message = i18n.t('download.error', { reason })
      setMessage(message)
      onToggleSnackBar()
    })
  }

  const documents = [
    {
      onPress: Pages.FiveQCard,
      url: 'http://www-personal.umich.edu/~mrother/KATA_Files/5Q_Card.pdf',
      title: 'docs.5qcard.front.title'
    },
    {
      onPress: Pages.Pattern,
      url: 'http://www-personal.umich.edu/~mrother/KATA_Files/5Q_Card.pdf',
      title: 'docs.pattern.title'
    },
    {
      onPress: Pages.FourSteps,
      url: 'http://www-personal.umich.edu/~mrother/KATA_Files/IK_Poster.pdf',
      title: 'docs.4steps.title'
    },
    {
      onPress: Pages.TkcPage,
      url: 'http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf',
      title: 'docs.tkc.title'
    },
    {
      onPress: Pages.PracticePage,
      url: 'http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf',
      title: 'docs.practice.title'
    },
    {
      onPress: Pages.KtsPage,
      url: 'http://www-personal.umich.edu/~mrother/KATA_Files/KTS.jpg',
      title: 'docs.kts.title'
    },
    {
      onPress: Pages.Carnegie,
      url: 'https://www.carnegiehall.org/Explore/Articles/2020/04/10/The-Joke',
      title: 'docs.carnegie.title'
    }
  ]

  return (
    <>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: i18n.t('download.close'),
          onPress: () => {}
        }}
      >
        {message}
      </Snackbar>

      <TkCard>
        <TkCardTitle title={`${i18n.t('docs.title')}`} subtitle={`${i18n.t('docs.subtitle')}`} />
        <TkCardContent>
          <List.Section>
            {
              documents.flatMap(document => {
                return (
                  <List.Item
                    key={document.title}
                    left={() => (
                      <IconButton icon='page-next-outline' onPress={() => onPress(document.onPress)} />
                    )}
                    right={() => (
                      <IconButton
                        icon='tray-arrow-down' onPress={() =>
                          openUrl(
                            document.url
                          )}
                      />
                    )}
                    title={`${i18n.t(document.title)}`}
                    titleNumberOfLines={3}
                  />
                )
              })
            }
          </List.Section>
        </TkCardContent>
      </TkCard>
    </>
  )
}

export default DocsSelector
