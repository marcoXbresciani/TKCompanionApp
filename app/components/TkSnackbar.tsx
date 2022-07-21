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
import { Snackbar } from 'react-native-paper'

interface Props {
  message: string
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const TkSnackbar: ({ message }: Props) => JSX.Element = ({
  message,
  visible,
  setVisible
}: Props) => {
  return (

    <Snackbar
      duration={750}
      onDismiss={() => setVisible(false)}
      visible={visible}
    >
      {message}
    </Snackbar>
  )
}

export default TkSnackbar
