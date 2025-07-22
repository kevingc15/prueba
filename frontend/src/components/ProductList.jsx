import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api/product';

function ProductList() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="product-list">
      <h2 className="product-list-title">📦 Productos</h2>
      <div className="product-grid">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            <div>
              <h3 className="product-name">{prod.name}</h3>
              <p className="product-description">{prod.description}</p>
              <p className="product-price">${prod.price}</p>
              <p className="product-category">
                Categoría: <span className="product-category-name">{prod.category_name}</span>
              </p>
            </div>
            <div className="product-actions">
              <button onClick={() => onEdit(prod)} className="btn btn-edit">Editar</button>
              <button onClick={() => onDelete(prod.id)} className="btn btn-delete">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
