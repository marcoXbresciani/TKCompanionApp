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
import { Linking } from 'react-native'
import * as React from 'react'
import { useState } from 'react'
import { List, Snackbar } from 'react-native-paper'
import i18n from '../i18n/i18n'

const DownloadPage: React.FunctionComponent = () => {
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

      <List.Section>
        <List.Subheader>
          {`${i18n.t('download.title')}`}
        </List.Subheader>
        <List.Item
          description={`${i18n.t('download.pdf')}`}
          left={() => <List.Icon icon='download-outline' />}
          onPress={() =>
            download(
              'https://web.archive.org/web/20210828084438/http://www-personal.umich.edu/~mrother/KATA_Files/5Q_Card.pdf'
            )}
          title={`${i18n.t('download.5q')}`}
          titleNumberOfLines={2}
        />
        <List.Item
          description={`${i18n.t('download.pdf')}`}
          left={() => <List.Icon icon='download-outline' />}
          onPress={() =>
            download(
              'https://web.archive.org/web/20220326213548/http://www-personal.umich.edu/~mrother/KATA_Files/IK_Poster.pdf'
            )}
          title={`${i18n.t('download.4s')}`}
          titleNumberOfLines={2}
        />
        <List.Item
          description={`${i18n.t('download.pdf')}`}
          left={() => <List.Icon icon='download-outline' />}
          onPress={() =>
            download(
              'https://web.archive.org/web/20211208181337/http://www-personal.umich.edu/~mrother/KATA_Files/Kata_Code.pdf'
            )}
          title={`${i18n.t('download.tkc')}`}
          titleNumberOfLines={2}
        />
        <List.Item
          description={`${i18n.t('download.jpg')}`}
          left={() => <List.Icon icon='download-outline' />}
          onPress={() =>
            download(
              'https://web.archive.org/web/20220409213239/http://www-personal.umich.edu/~mrother/KATA_Files/KTS.jpg'
            )}
          title={`${i18n.t('download.kts')}`}
          titleNumberOfLines={2}
        />
      </List.Section>
    </>
  )
}

export default DownloadPage
