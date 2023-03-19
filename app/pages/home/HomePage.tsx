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
import * as React from 'react'
import { Appbar, Dialog, Portal } from 'react-native-paper'
import Settings from './dialogs/Settings'
import Copyright from './dialogs/Copyright'
import About from './dialogs/About'
import i18n from '../../i18n/i18n'
import Legend from './dialogs/Legend'
import TkDialog from '../../components/wip/TkDialog'
import PageContainer from '../PageContainer'
import FiveQ from '../docs/5qcard/FiveQ'
import Alert from './dialogs/Alert'

const HomePage: React.FunctionComponent = () => {
  const [visibleAbout, setVisibleAbout] = React.useState(false)
  const [visibleAlert, setVisibleAlert] = React.useState(true)
  const [visibleCopyright, setVisibleCopyright] = React.useState(false)
  const [visibleSettings, setVisibleSettings] = React.useState(false)
  const [visibleLegend, setVisibleLegend] = React.useState(false)
  const [visibleFeedback, setVisibleFeedback] = React.useState(false)

  return (
    <>
      <Portal>
        <Dialog visible={visibleAlert} onDismiss={(): void => setVisibleAlert(false)}>
          <Alert />
        </Dialog>
        <Dialog visible={visibleSettings} onDismiss={(): void => setVisibleSettings(false)}>
          <Settings />
        </Dialog>
        <Dialog visible={visibleLegend} onDismiss={(): void => setVisibleLegend(false)}>
          <Legend />
        </Dialog>
        <TkDialog
          title={i18n.t('home.feedback.title')}
          before={i18n.t('home.feedback.before')}
          messages={i18n.t('home.feedback.messages', { returnObjects: true })}
          after={i18n.t('home.feedback.after')}
          visible={visibleFeedback}
          setVisible={setVisibleFeedback}
        />
        <Dialog visible={visibleAbout} onDismiss={(): void => setVisibleAbout(false)}>
          <About />
        </Dialog>
        <Dialog visible={visibleCopyright} onDismiss={(): void => setVisibleCopyright(false)}>
          <Copyright />
        </Dialog>
      </Portal>

      <Appbar.Header>
        <Appbar.Action
          onPress={(): void => { setVisibleSettings(true) }}
          icon='tune-variant'
          isLeading
        />
        <Appbar.Action
          onPress={(): void => { setVisibleLegend(true) }}
          icon='help-box'
          isLeading
        />
        <Appbar.Content title='' />
        <Appbar.Action
          onPress={(): void => { setVisibleFeedback(true) }}
          icon='comment-quote-outline'
        />
        <Appbar.Action
          onPress={(): void => { setVisibleCopyright(true) }}
          icon='copyleft'
        />
        <Appbar.Action
          onPress={(): void => { setVisibleAbout(true) }}
          icon='information-variant'
        />
      </Appbar.Header>

      <PageContainer>
        <FiveQ />
      </PageContainer>
    </>
  )
}

export default HomePage
