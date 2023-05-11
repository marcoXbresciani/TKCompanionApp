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
import { View } from 'react-native'
import * as React from 'react'
import styled from 'styled-components'
import { Divider, Text, useTheme } from 'react-native-paper'

const Container = styled(View)`
    border-bottom-color: ${props => props.theme.bg};
    border-bottom-width: 1px;
    border-top-color: ${props => props.theme.bg};
    border-top-width: 1px;
    flex-direction: row;
    margin: 10px auto;
`

export const Separator = ({ children }: React.PropsWithChildren<any>): JSX.Element => {
  const lineTheme = {
    bg: `${useTheme().colors.primary}`
  }

  return (
    <Container theme={lineTheme}>
      <Divider />
      <Text>{children}</Text>
      <Divider />
    </Container>
  )
}

export default Separator
