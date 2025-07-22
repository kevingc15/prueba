import { Routes, Route, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <>
      <nav style={{ padding: '1rem', backgroundColor: '#eee', marginBottom: '1rem' }}>
        <Link to="/products" style={{ marginRight: '1rem' }}>Productos</Link>
        <Link to="/products/create" style={{ marginRight: '1rem' }}>Crear Producto</Link>
        <Link to="/categories" style={{ marginRight: '1rem' }}>Categorías</Link>
        <Link to="/categories/create">Crear Categoría</Link>
      </nav>

      <Routes>
        {/* Rutas Productos */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/create" element={<ProductForm />} />
        <Route path="/products/edit/:id" element={<ProductForm />} />

        {/* Rutas Categorías */}
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/create" element={<CategoryForm />} />
        <Route path="/categories/edit/:id" element={<CategoryForm />} />
      </Routes>
    </>
  );
}

export default App;
