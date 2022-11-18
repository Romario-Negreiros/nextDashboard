import React from 'react'

import { Outlet } from 'react-router-dom'
import Layout from '../../layout'
import { ThemeProvider } from 'styled-components'

import { usePersistedState } from '../../modules/hooks'

import { dark, light } from '../../styles/themes'

import type { DefaultTheme } from 'styled-components'

const Root: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = () => {
    setTheme(theme => (theme.title === 'light' ? dark : light))
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout toggleTheme={toggleTheme}>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default Root
