'use client'

import dynamic from 'next/dynamic'

const GlobalStylesComponent = dynamic(
  () =>
    import('../landing-page-styles').then((mod) => {
      const { GlobalStyles } = mod
      return function Component() {
        return <GlobalStyles />
      }
    }),
  { ssr: false }
)

export default function GlobalStylesClient() {
  return <GlobalStylesComponent />
}
