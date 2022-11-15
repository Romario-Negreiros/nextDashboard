import React from 'react'

import { Link } from 'react-router-dom'

const SignIn: React.FC = () => {
  return (
    <div>
      oi mano
      <Link to={'/sign-up'}>Sign up instead</Link>
    </div>
  )
}

export default SignIn
