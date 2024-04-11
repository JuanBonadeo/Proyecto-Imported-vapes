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
import FinishPurchaseView from './components/FinishPurchase/FinishPurchaseView'

function App() {

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
          <Route path="/terminarcompra" element={<FinishPurchaseView/>}/>
          
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
