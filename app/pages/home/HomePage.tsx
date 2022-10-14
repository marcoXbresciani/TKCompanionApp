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
import { useEffect } from 'react'
import { Appbar, Card, Dialog, Portal } from 'react-native-paper'
import Settings from './Settings'
import Copyright from './Copyright'
import About from './About'
import i18n from '../../i18n/i18n'
import { APP_NAME, APP_VERSION } from '../../utils/Constants'
import TkPanel from '../../components/wip/TkPanel'
import StorageFactory from '../../utils/storage/StorageFactory'
import {
  AllowedSettings
} from '../../utils/storage/settings/AllowedSettings'
import TkCard from '../../components/tkcard/TkCard'
import TkCardTitle from '../../components/tkcard/TkCardTitle'
import TkText from '../../components/TkText'

const HomePage: React.FunctionComponent = () => {
  const [visibleAbout, setVisibleAbout] = React.useState(false)
  const showAbout = (): void => {
    setVisibleAbout(true)
  }
  const hideAbout = (): void => setVisibleAbout(false)

  const [visibleCopyright, setVisibleCopyright] =
    React.useState(false)
  const showCopyright = (): void => {
    setVisibleCopyright(true)
  }
  const hideCopyright = (): void => setVisibleCopyright(false)

  const [visibleSettings, setVisibleSettings] = React.useState(false)
  const showSettings = (): void => {
    setVisibleSettings(true)
  }
  const hideSettings = (): void => setVisibleSettings(false)

  const [visiblePanel, setVisiblePanel] = React.useState(false)
  const showPanel = (): void => {
    setVisiblePanel(true)
  }

  useEffect(() => {
    const storage = StorageFactory.getInstance().getSettingsStorage()
    const read = Boolean(storage.read(AllowedSettings.HOME_TITLE))

    setVisiblePanel(!read)
  }, [])

  return (
    <>
      <Portal>
        <Dialog visible={visibleAbout} onDismiss={hideAbout}>
          <Dialog.Content>
            <About />
          </Dialog.Content>
        </Dialog>
        <Dialog
          visible={visibleCopyright}
          onDismiss={hideCopyright}
        >
          <Dialog.ScrollArea>
            <Copyright />
          </Dialog.ScrollArea>
        </Dialog>
        <Dialog
          visible={visibleSettings}
          onDismiss={hideSettings}
        >
          <Dialog.ScrollArea>
            <Settings />
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>

      <TkPanel
        title={i18n.t('panel.home.title')}
        before={i18n.t('panel.home.before')}
        messages={i18n.t('panel.home.messages', { returnObjects: true })}
        after={i18n.t('panel.home.after')}
        visible={visiblePanel}
        setVisible={setVisiblePanel}
      />

      <Appbar.Header>
        <Appbar.Action
          onPress={showSettings}
          icon='settings-outline'
          isLeading
        />
        <Appbar.Content title='' />
        <Appbar.Action
          onPress={showPanel}
          icon='ear-outline'
        />
        <Appbar.Action
          onPress={showCopyright}
          icon='document-text-outline'
        />
        <Appbar.Action
          onPress={showAbout}
          icon='information-circle-outline'
        />
      </Appbar.Header>

      <TkCard>
        <Card.Cover source={require('../../assets/images/featureGraphic.png')} />
        <TkCardTitle title={APP_NAME} subtitle={APP_VERSION} />
        <Card.Content>
          <TkText>{`${i18n.t('app.short')}`}</TkText>
        </Card.Content>
      </TkCard>
    </>
  )
}

export default HomePage
