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
import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

type EditorMode = 'markdown' | 'wysiwyg' | 'html'

export interface EditorModeContextProps {
  mode: EditorMode
  setMode: React.Dispatch<React.SetStateAction<EditorMode>>
}

export const EditorModeContext = createContext<EditorModeContextProps>({
  mode: 'wysiwyg',
  setMode: () => {},
})

export const EditorModeProvider = ({ children }: any) => {
  const [mode, setMode] = useState<EditorMode>('wysiwyg')

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.altKey && event.shiftKey) {
        if (event.keyCode === 77) { // 'M'
          setMode(prevMode => prevMode === 'markdown' ? 'wysiwyg' : 'markdown')
        } else if (event.keyCode === 72) { // 'H'
          setMode(prevMode => prevMode === 'html' ? 'wysiwyg' : 'html')
        }
      }
    }

    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  return (
    <EditorModeContext.Provider value={{ mode, setMode }}>
      {children}
    </EditorModeContext.Provider>
  )
}

export const EditorModeConsumer = EditorModeContext.Consumer

export const useEditorModeContext = () => useContext(EditorModeContext)
