import React from 'react'

import { RouterProvider } from 'react-router-dom'
import { GlobalStyles } from './styles/global'

import router from './router'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
