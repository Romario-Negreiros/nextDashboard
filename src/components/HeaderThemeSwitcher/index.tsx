import { Container } from './styles'

import type { FC } from 'react'

interface Props {
  toggleTheme: () => void
}

const HeaderThemeSwitcher: FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
     <div onClick={toggleTheme}></div>
    </Container>
  )
}

export default HeaderThemeSwitcher
