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
import Version from '../../components/version/Version'
import {
  Appbar,
  Card,
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
import { TkCardContent } from '../../components/tkcard/TkCardContent'
import { TkCard } from '../../components/tkcard/TkCard'

const HomePage: React.FunctionComponent = () => {
  const [visibleAbout, setVisibleAbout] = React.useState(false)
  const showAbout = () => {
    closeMenu()
    setVisibleAbout(true)
  }
  const hideAbout = () => setVisibleAbout(false)

  const [visibleCopyright, setVisibleCopyright] =
        React.useState(false)
  const showCopyright = () => {
    closeMenu()
    setVisibleCopyright(true)
  }
  const hideCopyright = () => setVisibleCopyright(false)

  const [visibleSettings, setVisibleSettings] = React.useState(false)
  const showSettings = () => {
    closeMenu()
    setVisibleSettings(true)
  }
  const hideSettings = () => setVisibleSettings(false)

  const [visible, setVisible] = React.useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

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
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon='menu-outline'
              color={useTheme().colors.background}
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

      <TkCard>
        <Card.Cover
          source={require('../../assets/images/dh000004.jpg')}
        />
        <TkCardContent>
          <Version />
        </TkCardContent>
      </TkCard>
    </>
  )
}

export default HomePage
