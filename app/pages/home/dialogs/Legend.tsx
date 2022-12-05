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
      <Dialog.Title>{i18n.t('nav.menu.legend.title')}</Dialog.Title>
      <ScrollView>
        <Dialog.Content>
          <List.Accordion title={i18n.t('nav.home')}>
            <List.Item
              left={props => <List.Icon {...props} icon='tune-variant' />}
              title={i18n.t('nav.menu.settings.title')}
              description={i18n.t('nav.menu.settings.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='help-box' />}
              title={i18n.t('nav.menu.legend.title')}
              description={i18n.t('nav.menu.legend.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='comment-quote-outline' />}
              title={i18n.t('nav.menu.contact.title')}
              description={i18n.t('nav.menu.contact.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='copyleft' />}
              title={i18n.t('nav.menu.copyright.title')}
              description={i18n.t('nav.menu.copyright.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='home-export-outline' />}
              title={i18n.t('nav.menu.legend.browse.title')}
              description={i18n.t('nav.menu.legend.browse.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='information-variant' />}
              title={i18n.t('nav.menu.about.title')}
              description={i18n.t('nav.menu.about.explain')}
              descriptionNumberOfLines={3}
            />
          </List.Accordion>
          <List.Accordion title={i18n.t('pdsa.title')}>
            <List.Item
              left={props => <List.Icon {...props} icon='calendar-cursor' />}
              title={i18n.t('pdsa.legend.today.title')}
              description={i18n.t('pdsa.legend.today.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='calendar-blank' />}
              title={i18n.t('pdsa.legend.calendar.title')}
              description={i18n.t('pdsa.legend.calendar.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='content-save-all' />}
              title={i18n.t('pdsa.legend.save.title')}
              description={i18n.t('pdsa.legend.save.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='trash-can-outline' />}
              title={i18n.t('pdsa.legend.delete.title')}
              description={i18n.t('pdsa.legend.delete.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='trash-can' />}
              title={i18n.t('pdsa.legend.empty.title')}
              description={i18n.t('pdsa.legend.empty.explain')}
              descriptionNumberOfLines={3}
            />
          </List.Accordion>
          <List.Accordion title={i18n.t('docs.title')}>
            <List.Item
              left={props => <List.Icon {...props} icon='page-next-outline' />}
              title={i18n.t('docs.legend.read.title')}
              description={i18n.t('docs.legend.read.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='tray-arrow-down' />}
              title={i18n.t('docs.legend.download.title')}
              description={i18n.t('docs.legend.download.explain')}
              descriptionNumberOfLines={3}
            />
            <List.Item
              left={props => <List.Icon {...props} icon='home-export-outline' />}
              title={i18n.t('docs.legend.browse.title')}
              description={i18n.t('docs.legend.browse.explain')}
              descriptionNumberOfLines={3}
            />
          </List.Accordion>
        </Dialog.Content>
      </ScrollView>
    </>
  )
}

export default Legend
