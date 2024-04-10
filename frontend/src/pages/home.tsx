// import React from 'react'
import { Shop, Blog, Services, ProductList } from '@/components'
const homePage = () => {
  return (
    <>
      <ProductList featured={true}/>
  <div className="container">
    <hr />
  </div>
       <Shop/>
       <Blog/>
      <Services/>
    </>
  )
}

export default homePage