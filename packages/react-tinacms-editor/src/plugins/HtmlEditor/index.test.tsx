import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ProsemirrorMenu } from './index'
import '@testing-library/jest-dom/extend-expect'
import { EditorModeContext, EditorModeContextProps } from 'context/editorMode'

describe('ProsemirrorMenu', () => {
  it('should render MenuButton if content is available from context', () => {
    const mockSetMode = jest.fn()

    const mockContextValue: EditorModeContextProps = {
      setMode: mockSetMode,
      mode: 'wysiwyg'
    }

    const { getByTestId } = render(
      <EditorModeContext.Provider value={mockContextValue}>
        <ProsemirrorMenu />
      </EditorModeContext.Provider>
    )
    expect(getByTestId('menu-button')).toBeInTheDocument()
  })

  it('should call setMode with "html" when MenuButton is clicked', () => {
    const mockSetMode = jest.fn()

    const mockContextValue: EditorModeContextProps = {
      setMode: mockSetMode,
      mode: 'wysiwyg'
    }

    const { getByTestId } = render(
      <EditorModeContext.Provider value={mockContextValue}>
        <ProsemirrorMenu />
      </EditorModeContext.Provider>
    )
    fireEvent.click(getByTestId('menu-button'))
    expect(mockSetMode).toHaveBeenCalledWith('html')
  })

  it('should rerender when context changes', () => {
    const { getByTestId, rerender } = render(
      <EditorModeContext.Provider value={{ setMode: jest.fn(), mode: 'wysiwyg' }}>
        <ProsemirrorMenu />
      </EditorModeContext.Provider>
    )

    expect(getByTestId('menu-button')).toBeInTheDocument()
    
    rerender(
      <EditorModeContext.Provider value={{ setMode: jest.fn(), mode: 'markdown' }}>
        <ProsemirrorMenu />
      </EditorModeContext.Provider>
    )
  })
})
