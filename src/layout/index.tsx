import Header from './Header'

import type { FC } from 'react'

interface Props {
  children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
