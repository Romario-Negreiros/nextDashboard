import React from 'react'

import { Outlet } from 'react-router-dom'

const Root: React.FC = () => {
  return (
    <div>
      header
      <Outlet />
      footer
    </div>
  )
}

export default Root
