import { useState } from 'react'

import { Container, Logo, Navigation, BurguerMenu } from './styles'

import type { FC } from 'react'

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen)

  return (
    <Container>
      <Logo>
        next<span>Dashboard</span>
      </Logo>

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
