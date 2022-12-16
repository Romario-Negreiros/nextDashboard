import { useState } from 'react'

import { Container, Logo, Navigation, BurguerMenu } from './styles'
import { Link } from 'react-router-dom'

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
          <li>
            <Link to="/sign-in" onClick={handleMenuClick}>
              Sign in
            </Link>
          </li>
          <Link to="/sign-up" onClick={handleMenuClick}>
            Sign up
          </Link>
        </ul>
      </Navigation>
    </Container>
  )
}

export default Header
