import { Container, Logo, Navigation, BurguerMenu } from './styles'

import type { FC } from 'react'

interface Props {
  toggleTheme: () => void
}

const Header: FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Logo>
        next<span>Dashboard</span>
      </Logo>

      <BurguerMenu>
        <span></span>
        <span></span>
        <span></span>
      </BurguerMenu>
      <Navigation>
        <ul>
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
      </Navigation>
    </Container>
  )
}

export default Header
