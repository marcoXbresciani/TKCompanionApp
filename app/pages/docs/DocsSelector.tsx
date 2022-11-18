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
            <List.Item
              left={() => (
                <IconButton icon='page-next-outline' onPress={() => onPress(Pages.FiveQCard)} />
              )}
              right={() => (
                <IconButton
                  icon='tray-arrow-down' onPress={() =>
                    openUrl(
                      'https://web.archive.org/web/20210828084438/http://www-personal.umich.edu/~mrother/KATA_Files/5Q_Card.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.5qcard.front.title')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => (
                <IconButton icon='page-next-outline' onPress={() => onPress(Pages.Pattern)} />
              )}
              right={() => (
                <IconButton
                  icon='tray-arrow-down' onPress={() =>
                    openUrl(
                      'https://web.archive.org/web/20210828084438/http://www-personal.umich.edu/~mrother/KATA_Files/5Q_Card.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.pattern.title')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => <IconButton icon='page-next-outline' onPress={() => onPress(Pages.FourSteps)} />}
              right={() => (
                <IconButton
                  icon='tray-arrow-down' onPress={() =>
                    openUrl(
                      'https://web.archive.org/web/20220326213548/http://www-personal.umich.edu/~mrother/KATA_Files/IK_Poster.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.4steps.title')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => <IconButton icon='page-next-outline' onPress={() => onPress(Pages.TkcPage)} />}
              right={() => (
                <IconButton
                  icon='tray-arrow-down' onPress={() =>
                    openUrl(
                      'https://web.archive.org/web/20211208181337/http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.tkc.title')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => <IconButton icon='page-next-outline' onPress={() => onPress(Pages.PracticePage)} />}
              right={() => (
                <IconButton
                  icon='tray-arrow-down' onPress={() =>
                    openUrl(
                      'https://web.archive.org/web/20211208181337/http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.practice.title')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => (
                <IconButton icon='page-next-outline' onPress={() => onPress(Pages.KtsPage)} />
              )}
              right={() => (
                <IconButton
                  icon='tray-arrow-down' onPress={() =>
                    openUrl(
                      'https://web.archive.org/web/20220409213239/http://www-personal.umich.edu/~mrother/KATA_Files/KTS.jpg'
                    )}
                />
              )}
              title={`${i18n.t('docs.kts.title')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => (
                <IconButton icon='page-next-outline' onPress={() => onPress(Pages.Carnegie)} />
              )}
              right={() => (
                <IconButton
                  icon='home-export-outline' onPress={() =>
                    openUrl(
                      'https://www.carnegiehall.org/Explore/Articles/2020/04/10/The-Joke'
                    )}
                />
              )}
              title={`${i18n.t('docs.carnegie.title')}`}
              titleNumberOfLines={3}
            />
          </List.Section>
        </TkCardContent>
      </TkCard>
    </>
  )
}

export default DocsSelector
