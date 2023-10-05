import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Plugin } from 'types'
import { Menubar } from './Menubar'

export interface HtmlEditorProps {
  onChange: (value: string) => void
  value: string
  plugins?: Plugin[]
  sticky?: boolean | string
}

const inputLineHeight = 20

export const HtmlEditor: React.FC<HtmlEditorProps> = ({
  onChange,
  value,
  plugins,
  sticky,
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [val, setVal] = useState<string>(value)

  useEffect(() => {
    const inputElm = inputRef.current
    if (!inputElm) return
    inputElm.focus({ preventScroll: true })
    inputElm.setSelectionRange(inputElm.value.length, inputElm.value.length)
  }, [])

  useEffect(() => {
    const inputElm = inputRef.current
    if (!inputElm) return
    inputElm.style.height = '0'
    inputElm.style.height = inputElm.scrollHeight + inputLineHeight + 'px'
  })

  useEffect(() => {
    setVal(value)
  }, [value])

  return (
    <>
      <Menubar sticky={sticky} plugins={plugins} />
      <HtmlEditingSection
        data-testid="html-editing-textarea"
        ref={inputRef}
        value={val}
        onChange={e => {
          const v = e.target.value
          setVal(v)
          onChange(v)
        }}
      />
    </>
  )
}

const HtmlEditingSection = styled.textarea`
  border: none;
  font-family: monospace;
  font-size: 16px;
  margin: 10px 0;
  resize: none;
  width: 100%;
  border-radius: var(--tina-radius-small);
  &:focus {
    box-shadow: 0 0 0 2px var(--tina-color-primary);
  }
`
