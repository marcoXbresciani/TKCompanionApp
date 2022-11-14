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
import { ScrollView } from 'react-native'
import { Dialog, List } from 'react-native-paper'
import i18n from '../../../i18n/i18n'

const Legend: React.FC = () => {
  return (
    <>
      <Dialog.Title>Legend</Dialog.Title>
      <ScrollView>
        <Dialog.Content>
          <List.Accordion title={i18n.t('nav.home')}>
            <List.Item left={props => <List.Icon {...props} icon='tune-variant' />} title='Settings' description='Open the Settings Dialog.' />
            <List.Item left={props => <List.Icon {...props} icon='comment-quote-outline' />} title='Feedback' description='Open the Feedback Dialog.' />
            <List.Item left={props => <List.Icon {...props} icon='copyleft' />} title='Copyleft' description='Open the Copyleft Dialog.' />
            <List.Item left={props => <List.Icon {...props} icon='home-export-outline' />} title='Browse' description='Browse External Web Page.' />
            <List.Item left={props => <List.Icon {...props} icon='information-variant' />} title={i18n.t('nav.menu.about')} description='Open the About Dialog.' />
          </List.Accordion>
          <List.Accordion title={i18n.t('nav.pdsa')}>
            <List.Item left={props => <List.Icon {...props} icon='calendar-cursor' />} title={i18n.t('calendar.today')} description='Go to Today PDSA.' />
            <List.Item left={props => <List.Icon {...props} icon='calendar-blank' />} title='Calendar' description='Open Calendar Dialog.' />
            <List.Item left={props => <List.Icon {...props} icon='content-save-all' />} title='Save' description='Save Current Day PDSA.' />
            <List.Item left={props => <List.Icon {...props} icon='trash-can-outline' />} title='Delete' description='Delete Current Day PDSA.' />
            <List.Item left={props => <List.Icon {...props} icon='trash-can' />} title='Delete' description='Empty PDSA Entry Field.' />
          </List.Accordion>
          <List.Accordion title={i18n.t('nav.docs')}>
            <List.Item left={props => <List.Icon {...props} icon='page-next-outline' />} title='Read' description='Go to Document Page in App.' />
            <List.Item left={props => <List.Icon {...props} icon='tray-arrow-down' />} title='Download' description='Download Content from Source Website.' />
            <List.Item left={props => <List.Icon {...props} icon='home-export-outline' />} title='Browse' description='Browse External Web Page.' />
          </List.Accordion>
        </Dialog.Content>
      </ScrollView>
    </>
  )
}

export default Legend
