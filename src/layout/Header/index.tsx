import { useState } from 'react'

import { Container, Logo, Navigation, BurguerMenu } from './styles'
import { HeaderThemeSwitcher } from '../../components'

import type { FC } from 'react'

interface Props {
  toggleTheme: () => void
}

const Header: FC<Props> = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen)

  return (
    <Container>
      <Logo>
        next<span>Dashboard</span>
      </Logo>

      <HeaderThemeSwitcher toggleTheme={toggleTheme}/>

      <BurguerMenu onClick={handleMenuClick}>
        <span className={isMenuOpen ? 'active' : ''}></span>
        <span className={isMenuOpen ? 'active' : ''}></span>
        <span className={isMenuOpen ? 'active' : ''}></span>
      </BurguerMenu>
      <Navigation isMenuOpen={isMenuOpen}>
        <ul>
          <li onClick={handleMenuClick}>
            <a>Sign in</a>
          </li>
          <li onClick={handleMenuClick}>
            <a>Sign up</a>
          </li>
        </ul>
      </Navigation>
    </Container>
  )
}

export default Header
