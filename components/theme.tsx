import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../tailwind.config'

const { theme } = resolveConfig(tailwindConfig)

export type ThemeProps = React.PropsWithChildren<{}>

export const Theme = (props: ThemeProps) => (
  <ThemeProvider {...props} {...{ theme }} />
)
