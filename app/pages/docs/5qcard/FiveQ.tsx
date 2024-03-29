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
import { useState } from 'react'
import Front5Q from './5QFront'
import Back5Q from './5QBack'

const FiveQ: React.FunctionComponent = () => {
  const [front, setFront] = useState<boolean>(true)
  const [bookmarks, setBookmarks] = useState<Array<'checked' | 'unchecked'>>(['unchecked', 'unchecked', 'unchecked', 'unchecked', 'unchecked'])

  const toggleBookmark = (index: number): void => {
    const result: Array<'checked' | 'unchecked'> = [...bookmarks] as Array<'checked' | 'unchecked'>
    result[index] = result[index] === 'checked' ? 'unchecked' : 'checked'
    setBookmarks(result)
  }

  return (
    <>
      {front
        ? (
          <Front5Q
            bookmarks={bookmarks}
            onPress={() => {
              setFront(false)
            }}
            setBookmarks={setBookmarks}
            toggler={toggleBookmark}
          />
          )
        : (
          <Back5Q
            onPress={() => {
              setFront(true)
            }}
          />
          )}
    </>
  )
}

export default FiveQ
