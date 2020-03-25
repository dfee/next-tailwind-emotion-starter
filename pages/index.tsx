import React from 'react'
import { css } from '@emotion/core'
import tw from 'twin.macro'
import { Button } from '../components/button'
import { Logo } from '../components/logo'

const IndexPage = () => (
  <div
    css={[
      tw`h-screen flex flex-col items-center justify-center`,
      // Combine regular css and Tailwind styles within backticks
      css`
        background: linear-gradient(#db00ff, #0047ff);
        * {
          ${tw`mt-6`}
        }
      `
    ]}
  >
    <div tw="flex flex-col justify-center h-full">
      <h3 tw="text-cyan text-center text-xl">With TypeScript</h3>
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

export default IndexPage
