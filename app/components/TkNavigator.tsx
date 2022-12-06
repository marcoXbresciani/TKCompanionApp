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
import BadgesPage from '../pages/BadgesPage'
import { Route } from 'react-native'

const TkNavigator: React.FunctionComponent = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {
      focusedIcon: 'home-outline',
      key: 'home',
      testID: 'nav.home'
    },
    {
      focusedIcon: 'note-edit-outline',
      key: 'pdsa',
      testID: 'pdsa.title'
    },
    {
      focusedIcon: 'library-shelves',
      key: 'docs',
      testID: 'docs.title'
    },
    {
      focusedIcon: 'medal-outline',
      key: 'badges',
      testID: 'badges.title'
    }
  ])
  const renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    pdsa: PdsaPage,
    docs: DocsPage,
    badges: BadgesPage
  })

  const getTranslatedLabel = (route: Route): string => {
    return i18n.t(route.route.testID ?? '')
  }

  return (
    <BottomNavigation
      getLabelText={(route) => { return getTranslatedLabel(route) }}
      getAccessibilityLabel={(route) => { return getTranslatedLabel(route) }}
      getLazy={() => { return false }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting
    />
  )
}

export default TkNavigator
