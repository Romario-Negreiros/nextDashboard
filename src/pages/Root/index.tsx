import { Outlet } from 'react-router-dom'
import Layout from '../../layout'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'

import type { FC } from 'react'

const Root: FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default Root
