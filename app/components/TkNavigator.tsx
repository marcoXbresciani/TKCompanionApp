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
import { BottomNavigation } from 'react-native-paper'
import HomePage from '../pages/home/HomePage'
import PdsaPage from '../pages/pdsa/PdsaPage'
import DocsPage from '../pages/docs/DocsPage'
import i18n from '../i18n/i18n'

const TkNavigator: React.FunctionComponent = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {
      key: 'home',
      title: i18n.t('nav.home'),
      focusedIcon: 'home-outline'
    },
    {
      key: 'pdsa',
      title: i18n.t('pdsa.title'),
      focusedIcon: 'note-edit-outline'
    },
    {
      key: 'docs',
      title: i18n.t('docs.title'),
      focusedIcon: 'library-shelves'
    }
  ])
  const renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    pdsa: PdsaPage,
    docs: DocsPage
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      sceneAnimationType='shifting'
    />
  )
}

export default TkNavigator
