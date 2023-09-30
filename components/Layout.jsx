import React, { Children } from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { useRouter } from 'next/router';


const Layout = ({children, navPosition}) => {
  const router = useRouter();
  const handleFormSubmitSuccess = () => {
    router.push("/thanks");
  };
  return (
    <>
        {/* <Navigation position={navPosition}  /> */}
        {children}
        {/* <Footer onFormSubmitSuccess={handleFormSubmitSuccess}  /> */}
    </>
  )
}

export default Layout