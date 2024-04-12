import './App.css'
import {HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/NavBar/NavBar'
import HomeView from './components/HomeView/HomeView'
import WspButton from './components/WspButton/WspButton'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import ProductInfoView from './components/ProductInfo/ProudctInfoView'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'
import FinishPurchase from './components/FinishPurchase/FinishPurchase'
import Admin from './components/Admin/Admin'
import { GraciasXtuCompra } from './components/GraciasXtuCompra/GraciasXtuCompra'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import Toast from './context/CartContext'

function App() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: true,
      timer: 10000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      title: 'Envio Gratis a partir de $30000',
    })
  
  return (
    <div className='App'>
    <BrowserRouter>
      <CartProvider>
      <Header/> 
      <div className="contain">
        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/marca/:marcaId" element={<ProductsContainer/>}/>
          <Route path="/marca/:marcaId/categoria/:categoriaId" element={<ProductsContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ProductsContainer/>}/>
            <Route path="/producto/:productId" element={<ProductInfoView/>}/>
          <Route path="/carrito" element={<Cart/>}/>
          <Route path="/productos" element={<ProductsContainer/>}/>
          <Route path="/terminarcompra" element={<FinishPurchase/>}/>
          <Route path='/admin123' element={<Admin/>}/>
          <Route path='/gracias' element={<GraciasXtuCompra/>}/>
          
        </Routes>  
      </div>
      <WspButton/>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
