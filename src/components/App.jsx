import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart/Cart';
import { Checkout } from './Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import { createProducts } from '../firebase/firebase';



export const App = () => {

  //createProducts() 
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToastContainer />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/Cart' element={<Cart />} />            
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='product/:id' element={<  ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
      </BrowserRouter>
    </>

  );
}
