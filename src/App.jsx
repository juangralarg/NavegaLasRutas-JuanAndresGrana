import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      
        <Routes>
        {/* catálogo principal */}
        <Route path='/' element={<ItemListContainer greeting={'¡Si existe, lo tenemos!'} />} />
        
        {/* se ve filtrado por categoría. Uso el parámetro dinámico :categoryId */}
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados:'} />} />
        
        {/* Para la vista en detalle de un producto. Usoun parámetro dinámico :itemId */}
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />

        {/* Ruta para cuando no se encuentra lo que busco */}
        <Route path='*' element={<h4> 404 NOT FOUND: NO EXISTE ESTA CATEGORIA</h4>} />
      </Routes>
    </>
  );
}

export default App;