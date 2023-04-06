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
import { ScrollView } from 'react-native'
import { Dialog, List } from 'react-native-paper'
import i18n from '../../../i18n/i18n'

const Legend: React.FC = () => {
  const legendAreas = [
    {
      items: [
        {
          description: i18n.t('nav.menu.settings.explain'),
          icon: 'tune-variant',
          title: i18n.t('nav.menu.settings.title')
        },
        {
          description: i18n.t('nav.menu.legend.explain'),
          icon: 'help-box',
          title: i18n.t('nav.menu.legend.title')
        },
        {
          description: i18n.t('nav.menu.contact.explain'),
          icon: 'comment-quote-outline',
          title: i18n.t('nav.menu.contact.title')
        },
        {
          description: i18n.t('nav.menu.copyright.explain'),
          icon: 'copyleft',
          title: i18n.t('nav.menu.copyright.title')
        },
        {
          description: i18n.t('nav.menu.legend.browse.explain'),
          icon: 'home-export-outline',
          title: i18n.t('nav.menu.legend.browse.title')
        },
        {
          description: i18n.t('nav.menu.about.explain'),
          icon: 'information-variant',
          title: i18n.t('nav.menu.about.title')
        }
      ],
      title: i18n.t('nav.home')
    },
    {
      items: [
        {
          description: i18n.t('pdsa.legend.calendar.explain'),
          icon: 'calendar-edit',
          title: i18n.t('pdsa.legend.calendar.title')
        },
        {
          description: i18n.t('pdsa.legend.before.explain'),
          icon: 'calendar-arrow-left',
          title: i18n.t('pdsa.legend.before.title')
        },
        {
          description: i18n.t('pdsa.legend.today.explain'),
          icon: 'calendar-today',
          title: i18n.t('pdsa.legend.today.title')
        },
        {
          description: i18n.t('pdsa.legend.after.explain'),
          icon: 'calendar-arrow-right',
          title: i18n.t('pdsa.legend.after.title')
        },
        {
          description: i18n.t('pdsa.legend.save.explain'),
          icon: 'content-save-all',
          title: i18n.t('pdsa.legend.save.title')
        },
        {
          description: i18n.t('pdsa.legend.delete.explain'),
          icon: 'trash-can-outline',
          title: i18n.t('pdsa.legend.delete.title')
        },
        {
          description: i18n.t('pdsa.legend.duplicate.explain'),
          icon: 'content-duplicate',
          title: i18n.t('pdsa.legend.duplicate.title')
        },
        {
          description: i18n.t('pdsa.legend.empty.explain'),
          icon: 'trash-can',
          title: i18n.t('pdsa.legend.empty.title')
        }
      ],
      title: i18n.t('pdsa.title')
    },
    {
      items: [
        {
          description: i18n.t('docs.legend.read.explain'),
          icon: 'page-next-outline',
          title: i18n.t('docs.legend.read.title')
        },
        {
          description: i18n.t('docs.legend.download.explain'),
          icon: 'tray-arrow-down',
          title: i18n.t('docs.legend.download.title')
        },
        {
          description: i18n.t('docs.legend.browse.explain'),
          icon: 'home-export-outline',
          title: i18n.t('docs.legend.browse.title')
        }
      ],
      title: i18n.t('docs.title')
    },
    {
      items: [
        {
          description: i18n.t('events.legend.browse.explain'),
          icon: 'home-export-outline',
          title: i18n.t('events.legend.browse.title')
        }
      ],
      title: i18n.t('events.title')
    }
  ]

  return (
    <>
      <Dialog.Title>{i18n.t('nav.menu.legend.title')}</Dialog.Title>
      <ScrollView>
        <Dialog.Content>
          <List.AccordionGroup>
            {legendAreas.flatMap(({ items, title }) => {
              return (
                <List.Accordion id={title} title={title}>
                  {items.flatMap(({ description, icon, title }) => {
                    return (
                      <List.Item
                        description={description}
                        descriptionNumberOfLines={3}
                        key={title}
                        left={props => <List.Icon {...props} icon={icon} />}
                        title={title}
                      />
                    )
                  })}
                </List.Accordion>
              )
            })}
          </List.AccordionGroup>
        </Dialog.Content>
      </ScrollView>
    </>
  )
}

export default Legend
