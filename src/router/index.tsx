import React from 'react'

import { createBrowserRouter } from 'react-router-dom'

import { Root, Landing, SignIn, SignUp } from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  }
])

export default router
