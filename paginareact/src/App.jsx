import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<ItemListContainer></ItemListContainer>}/>
      <Route path='/item/:idProducto' element={<ItemDetailContainer></ItemDetailContainer>}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>}/>
      <Route path='/categoria/:categoriaId/item/:idProducto' element={<ItemDetailContainer></ItemDetailContainer>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
  </Routes>
  </CartProvider>
  </BrowserRouter>

  </>
  )
  }
export default App