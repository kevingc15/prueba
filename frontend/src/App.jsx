import { Routes, Route, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/products" className="nav-link">Productos</Link>
        <Link to="/products/create" className="nav-link">Crear Producto</Link>
        <Link to="/categories" className="nav-link">Categorías</Link>
        <Link to="/categories/create" className="nav-link">Crear Categoría</Link>
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
