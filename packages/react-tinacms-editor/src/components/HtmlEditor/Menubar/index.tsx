import React from 'react'
import { ExitHtmlModeMenu } from './ExitHtmlModeMenu'
import { Plugin } from '../../../types'
import { BaseMenubar } from '../../BaseMenubar'

interface Props {
  sticky?: boolean | string
  plugins?: Plugin[]
}

export const Menubar = ({ plugins, sticky, ...rest }: Props) => (
  <BaseMenubar
    {...rest}
    menus={[
      <ExitHtmlModeMenu key="exit-html-mode" />
    ]}
    plugins={plugins}
    sticky={sticky}
  />
)
