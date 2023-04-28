import React, { Children } from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

const Layout = ({children, navPosition}) => {
  return (
    <>
        <Navigation position={navPosition}  />
        {children}
        <Footer />
    </>
  )
}

export default Layout