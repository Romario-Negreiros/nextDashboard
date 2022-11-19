import { Container, Logo, Navigation } from './styles'

import type { FC } from 'react'

interface Props {
  toggleTheme: () => void
}

const Header: FC<Props> = ({ toggleTheme }) => {
  const handleClick = () => toggleTheme()

  return (
    <Container>
      <Logo>nextDashboard</Logo>

      <Navigation>
        <ul>
          <li>
            <button onClick={handleClick}>swap theme</button>
          </li>
        </ul>
      </Navigation>
    </Container>
  )
}

export default Header
