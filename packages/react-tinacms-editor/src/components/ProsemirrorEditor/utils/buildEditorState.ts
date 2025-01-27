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

import { EditorState } from 'prosemirror-state'
import { Schema } from 'prosemirror-model'
import { dropCursor } from 'prosemirror-dropcursor'
import { gapCursor } from 'prosemirror-gapcursor'
import { history } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import { tableEditing } from 'prosemirror-tables'

import { TranslatorClass } from '../../../translator'
import { commonPlugin } from '../../../plugins/Common'
import { buildKeymap } from '../../../plugins/Common/buildKeymap'
import { inputRules } from '../../../plugins/Common/input-rules'
import { imagePlugin } from '../../../plugins/Image'
import { codeBlockPlugin } from '../../../plugins/CodeBlock'
import { inlinePlugin } from '../../../plugins/Inline'
import { linkPlugin } from '../../../plugins/Link'
import { anchorPlugin } from '../../../plugins/Anchor'
import { tablePlugin } from '../../../plugins/Table'
import { ImageProps } from '../../../types'

export function buildEditorState(
  schema: Schema,
  translator: TranslatorClass,
  value: string,
  imageProps?: ImageProps
) {
  const plugins = [
    commonPlugin,
    inlinePlugin,
    inputRules(schema),
    keymap(buildKeymap(schema)),
    history(),
    linkPlugin(),
    anchorPlugin(),
    dropCursor({ width: 2, color: 'rgb(0, 132, 255)' }),
    gapCursor(),
    tableEditing(),
    tablePlugin,
    codeBlockPlugin,
  ]

  if (imageProps) {
    plugins.push(imagePlugin(imageProps))
  }

  return EditorState.create({
    schema,
    doc: translator.nodeFromString(value) ?? undefined,
    plugins,
  })
}
