import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HtmlEditor } from '../../HtmlEditor'
import '@testing-library/jest-dom/extend-expect'
import { renderWithProviders } from 'test-utils/renderWithProviders'
import { ExitHtmlModeMenu } from './ExitHtmlModeMenu'

describe('HtmlEditor', () => {
  it('should render HtmlEditor', () => {
    const { container } = render(<HtmlEditor onChange={() => {}} value="" />)
    expect(container).toBeInTheDocument()
  })

  it('should render ExitHtmlMode button', () => {
    renderWithProviders(<ExitHtmlModeMenu />)
    expect(document.getElementsByTagName('button').length).toBe(1)
  })

  it('should set textarea value based on initial value prop', () => {
    const { getByTestId } = render(<HtmlEditor onChange={() => {}} value="initial value" />)
    const textarea = getByTestId('html-editing-textarea') as HTMLTextAreaElement
    expect(textarea.value).toBe('initial value')
  })

  it('should render Menubar', () => {
    const { getByTestId } = render(<HtmlEditor onChange={() => {}} value="" />)
    const menubar = getByTestId('base-menubar')
    expect(menubar).toBeInTheDocument()
  })

  it('should focus textarea on mount', done => {
    const onChangeSpy = jest.fn()
    const { getByTestId } = renderWithProviders(<HtmlEditor onChange={onChangeSpy} value="test" />)

    setTimeout(() => {
      const textarea = getByTestId('html-editing-textarea')
      expect(document.activeElement).toBe(textarea)
      done()
    }, 0)
  })

  it('should call onChange when textarea changes', () => {
    const mockOnChange = jest.fn()
    const { getByTestId } = render(<HtmlEditor onChange={mockOnChange} value="" />)
    const textarea = getByTestId('html-editing-textarea')
    fireEvent.change(textarea, { target: { value: 'new value' } })
    expect(mockOnChange).toHaveBeenCalledWith('new value')
  })

  it('should update textarea when value prop changes', () => {
    const { getByTestId, rerender } = render(
      <HtmlEditor onChange={() => {}} value="initial" />
    )
    const textarea = getByTestId('html-editing-textarea') as HTMLTextAreaElement
    expect(textarea.value).toBe('initial')
    rerender(<HtmlEditor onChange={() => {}} value="updated" />)
    expect(textarea.value).toBe('updated')
  })
})
