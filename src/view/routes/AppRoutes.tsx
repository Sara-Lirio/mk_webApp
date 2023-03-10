import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Home from '../pages/Home'
import ProductId from '../pages/Product'
import ProductsType from '../pages/Product_Type'
import Registration from '../pages/Registration'
import ShoppingCart from '../pages/ShoppingCart'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Header />
        <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cadastre-se' element={<Registration/>} />
        <Route path='/products/:product_type' element={<ProductsType/>} />
        <Route path='/shopping' element={<ShoppingCart/>} />
        <Route path='/products/:id' element={<ProductId/>} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes