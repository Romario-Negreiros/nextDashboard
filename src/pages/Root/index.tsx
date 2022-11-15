import React from 'react'

import { Outlet } from 'react-router-dom'
import Layout from '../../layout'

const Root: React.FC = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default Root
