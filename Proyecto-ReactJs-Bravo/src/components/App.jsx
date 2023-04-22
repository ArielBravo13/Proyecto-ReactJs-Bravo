import './App.css';
import { Navbar } from './Navbar/Navbar.jsx';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx';

export  function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetin={"Bienvenido!"} />
    </div>
  );
}