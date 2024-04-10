// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import ShopPage from './pages/shop'
import NotFound from './pages/notFound'
import ContactPage from './pages/contact'
import AboutPage from './pages/about'
import LayoutWebside from './Layout/LayoutWebside'
import DetailProduct from './pages/detail-product'
import LayoutAdmin from './Layout/LayoutAdmin'
import Product from './pages/Admin/product'
import ProductAdd from './pages/Admin/productAdd'
import ProductEdit from './pages/Admin/productEdit'
import Signup from './components/Signup'
import Signin from './components/Signin'
import CartPage from './pages/Cart'
import CheckOut from './pages/CheckOut'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LayoutWebside/>}>
          <Route index element={<HomePage/>} />
          <Route path="shop" element={<ShopPage/>} />
          <Route path="products/:id" element={<DetailProduct/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="contact" element={<ContactPage/>} />
          <Route  path="/signup" element={<Signup/>}/>
          <Route  path="signin" element={<Signin/>}/>
          <Route path="cart" element={<CartPage/>} />
          <Route path="checkout" element={<CheckOut/>} />
      </Route>
    </Routes>
        <Routes>
      <Route path="/admin" element={<LayoutAdmin/>}>
        <Route index element={<Product/>}/>
        <Route path="products" element={<Product/>}/>
        <Route path="products/add" element={<ProductAdd/>}/>
        <Route path="products/:id/edit" element={<ProductEdit/>}/>
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
