import Header from './Header'

import type { FC } from 'react'

interface Props {
  children: JSX.Element
  toggleTheme: () => void
}

const Layout: FC<Props> = ({ children, toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme}/>
      {children}
    </>
  )
}

export default Layout
