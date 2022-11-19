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
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      }
    ]
  }
])

export default router
