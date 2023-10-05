import { MenuButton } from "components/MenuHelpers"
import { useEditorModeContext } from "context/editorMode"
import React from "react"

export const ExitHtmlModeMenu: React.FC = () => {
  const { setMode } = useEditorModeContext()

  const exitHtmlMode = () => {
    setMode('wysiwyg')
  }

  return (
    <MenuButton
      data-testid="exit-html-mode"
      data-tooltip="Exit HTML mode"
      title="Exit HTML mode"
      onClick={exitHtmlMode}
    >
      Exit HTML Editor
    </MenuButton>
  )
}
