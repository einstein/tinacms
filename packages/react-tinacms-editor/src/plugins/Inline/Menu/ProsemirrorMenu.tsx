/**

Copyright 2021 Forestry.io Holdings, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import * as React from 'react'
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  SuperscriptIcon,
  SubscriptIcon,
} from '@einsteinindustries/tinacms-icons'

import { markControl } from '../../../components/MenuHelpers'
import { formatKeymap } from '../../../utils'

export const ProsemirrorMenu = () => (
  <>
    <BoldControl />
    <ItalicControl />
    <Superscript />
    <Subscript />
    <StrikeControl />
  </>
)

const BoldControl = markControl({
  mark: 'strong',
  Icon: BoldIcon,
  tooltip: formatKeymap('Bold Mod-B'),
})

const ItalicControl = markControl({
  mark: 'em',
  Icon: ItalicIcon,
  tooltip: formatKeymap('Italic Mod-I'),
})

const StrikeControl = markControl({
  mark: 'strike',
  Icon: StrikethroughIcon,
  tooltip: 'Strike',
})

const Subscript = markControl({
  mark: 'subscript',
  Icon: SubscriptIcon,
  tooltip: 'Subscript',
})

const Superscript = markControl({
  mark: 'superscript',
  Icon: SuperscriptIcon,
  tooltip: 'Superscript',
})
