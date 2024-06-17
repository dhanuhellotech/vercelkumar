import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/Not found/NotFound'
import Header from './components/Header/Header';
import Forgot from './pages/forgotpassword/Forgot';
import Home from './pages/protectedRoutes/Home/Home';
import Cart from './pages/protectedRoutes/cart/Cart';
// Assuming AuthContext is your authentication context
import { AuthContext } from './pages/context/Authcontext';
import ProductDetail from './pages/protectedRoutes/ProductDetail/ProductDetail';
import Checkout from './pages/protectedRoutes/checkout/Checkout';
import Product from './pages/protectedRoutes/product/Product';
import Contact from './pages/protectedRoutes/contact/Contact';
import PrivateRoutes from './pages/protectedRoutes/PrivateRoute';
function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className='App'>

        {/* <Header /> */}
        <Routes>
          <Route path='/login' element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />} />
          <Route element={<PrivateRoutes/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/contact' element={<Contact  />}/>
          <Route path='/productdetail' element={<ProductDetail/>}/>
          </Route>
          
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/forgote' element={<Forgot />} />
          <Route path='api/password-reset/:userId/:token' element={<Forgot />} />
          <Route path='/register' element={isAuthenticated ? <Navigate to="/" replace /> : <Register />} />
          <Route path='/' element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />} />
          <Route path='*' element={<NotFound />} />
          
        </Routes>
  
    </div>
  );
}

export default App;
