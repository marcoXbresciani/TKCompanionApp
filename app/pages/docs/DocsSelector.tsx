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
  const [visible, setVisible] = React.useState(false)

  const onToggleSnackBar = (): void => setVisible(!visible)
  const onDismissSnackBar = (): void => {
    setVisible(false)
    setMessage('')
  }

  const download = (fileName: string): void => {
    Linking.openURL(fileName).catch((reason) => {
      setMessage(
        i18n.t('download.error', {
          reason: reason
        })
      )
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
                <IconButton icon='chatbubbles-outline' onPress={() => onPress(Pages.FiveQCard)} />
              )}
              right={() => (
                <IconButton
                  icon='download-outline' onPress={() =>
                    download(
                      'https://web.archive.org/web/20210828084438/http://www-personal.umich.edu/~mrother/KATA_Files/5Q_Card.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.5qcard')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => (
                <IconButton icon='egg-outline' onPress={() => onPress(Pages.Pattern)} />
              )}
              right={() => (
                <IconButton
                  icon='download-outline' onPress={() =>
                    download(
                      'https://web.archive.org/web/20210828084438/http://www-personal.umich.edu/~mrother/KATA_Files/5Q_Card.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.pattern')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => <IconButton icon='analytics-outline' onPress={() => onPress(Pages.FourSteps)} />}
              right={() => (
                <IconButton
                  icon='download-outline' onPress={() =>
                    download(
                      'https://web.archive.org/web/20220326213548/http://www-personal.umich.edu/~mrother/KATA_Files/IK_Poster.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.4steps')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => <IconButton icon='code-outline' onPress={() => onPress(Pages.TkcPage)} />}
              right={() => (
                <IconButton
                  icon='download-outline' onPress={() =>
                    download(
                      'https://web.archive.org/web/20211208181337/http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.tkc')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => <IconButton icon='construct-outline' onPress={() => onPress(Pages.PracticePage)} />}
              right={() => (
                <IconButton
                  icon='download-outline' onPress={() =>
                    download(
                      'https://web.archive.org/web/20211208181337/http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf'
                    )}
                />
              )}
              title={`${i18n.t('docs.practice')}`}
              titleNumberOfLines={3}
            />
            <List.Item
              left={() => (
                <IconButton icon='thunderstorm-outline' onPress={() => onPress(Pages.KtsPage)} />
              )}
              right={() => (
                <IconButton
                  icon='download-outline' onPress={() =>
                    download(
                      'https://web.archive.org/web/20220409213239/http://www-personal.umich.edu/~mrother/KATA_Files/KTS.jpg'
                    )}
                />
              )}
              title={`${i18n.t('docs.kts')}`}
              titleNumberOfLines={3}
            />
          </List.Section>
        </TkCardContent>
      </TkCard>
    </>
  )
}

export default DocsSelector
