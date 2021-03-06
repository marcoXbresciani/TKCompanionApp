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
import {
  Appbar,
  Dialog,
  Divider,
  Menu,
  Portal,
  useTheme
} from 'react-native-paper'
import Settings from './Settings'
import Copyright from './Copyright'
import About from './About'
import i18n from '../../i18n/i18n'
import { APP_NAME, APP_VERSION } from '../../utils/Constants'
import FiveQ from '../docs/5qcard/FiveQ'

const HomePage: React.FunctionComponent = () => {
  const [visibleAbout, setVisibleAbout] = React.useState(false)
  const showAbout = (): void => {
    closeMenu()
    setVisibleAbout(true)
  }
  const hideAbout = (): void => setVisibleAbout(false)

  const [visibleCopyright, setVisibleCopyright] =
        React.useState(false)
  const showCopyright = (): void => {
    closeMenu()
    setVisibleCopyright(true)
  }
  const hideCopyright = (): void => setVisibleCopyright(false)

  const [visibleSettings, setVisibleSettings] = React.useState(false)
  const showSettings = (): void => {
    closeMenu()
    setVisibleSettings(true)
  }
  const hideSettings = (): void => setVisibleSettings(false)

  const [visible, setVisible] = React.useState(false)
  const openMenu = (): void => setVisible(true)
  const closeMenu = (): void => setVisible(false)

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

      <Appbar>
        <Appbar.Content title={APP_NAME} subtitle={APP_VERSION} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon='menu-outline'
              color={useTheme().colors.onSurface}
              onPress={openMenu}
            />
                    }
        >
          <Menu.Item
            onPress={showSettings}
            icon='settings-outline'
            title={`${i18n.t('nav.menu.settings')}`}
          />
          <Menu.Item
            onPress={showCopyright}
            icon='document-text-outline'
            title={`${i18n.t('nav.menu.copyright')}`}
          />
          <Divider />
          <Menu.Item
            onPress={showAbout}
            icon='information-circle-outline'
            title={`${i18n.t('nav.menu.about')}`}
          />
        </Menu>
      </Appbar>

      <FiveQ />
    </>
  )
}

export default HomePage
