import React from 'react'
import { AppProps } from 'next/app'
import { Theme } from '../components/theme'
import 'tailwindcss/dist/base.css'

const App = ({ Component, pageProps }: AppProps) => (
  <Theme>
    <Component {...pageProps} />
  </Theme>
)

export default App
