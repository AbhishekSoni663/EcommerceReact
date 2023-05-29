import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { ProductProvider } from './Context/ProductContext'
import { CartProivder } from './CartContext/CartContext'
import Cart from './Pages/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Jewelery from './Pages/Jewelery'
import { JeweleryProvider } from './Context2/JeweleryContext'
import Electronic from './Pages/Electronic'
import { ElectronicProvider } from './Context3/ElectronicContext'
import Man from './Pages/Man'
import { ManProvider } from './Context4/ManContext'
import About from './Components/About'
import Contact from './Pages/Contact'
import { ProProvider } from './ProContext/ProContex'
import ProductPage from './Pages/ProductPage'
import ElectronicPage from './Pages/ElectronicPage'
import { ElecProvider } from './ElecContext/ElecContext'
import JweleryPages from './Pages/JweleryPages'
import { JwelProvider } from './JwelContext/JwelContext'



const App = () => {

 
  return (
    <Router>
      <ProductProvider>
        <CartProivder>
          <JeweleryProvider>
            <ElectronicProvider>
              <ManProvider>
                <ProProvider>
                  <ElecProvider>
                    <JwelProvider>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/jewelery" element={<Jewelery/>}/>
            <Route path='/electronic' element={<Electronic/>}/>
            <Route path='/men&women' element={<Man/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/productpages' element={<ProductPage/>} />
            <Route path='/electronicpages' element={<ElectronicPage/>} />
            <Route path='/jwelerypage' element={<JweleryPages/>}/>
          </Routes>
          </JwelProvider>
          </ElecProvider>
          </ProProvider>
          </ManProvider>
          </ElectronicProvider>
          </JeweleryProvider>
        </CartProivder>
      </ProductProvider>
    </Router >
  )
}
export default App