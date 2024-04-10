// import React from 'react'

import { Outlet } from "react-router-dom"
import { Banner, Footer, Header } from "../components"

const LayoutWebside = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutWebside