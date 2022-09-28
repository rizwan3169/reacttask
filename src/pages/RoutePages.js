import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import Blog from './Blog';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Login from './Login';
import ProductDetails from './ProductDetails'

export default function RoutePages() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/404' element={<PageNotFound />} />
            {/* <Route path='/category/:cat' element={<Login />} />
            <Route path='/category/:cat' element={<ProductDetails />} /> */}


        </Routes>
    </Router>
    </>
  )
}
