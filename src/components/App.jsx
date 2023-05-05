import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



export const App = () => {


  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='product/:id' element={<  ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </>

  );
}
