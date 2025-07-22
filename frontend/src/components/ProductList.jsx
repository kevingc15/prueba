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
     <div className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📦 Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between border hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{prod.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{prod.description}</p>
              <p className="text-md font-medium text-blue-600">${prod.price}</p>
              <p className="text-sm text-gray-600 mt-1">Categoría: <span className="font-medium">{prod.category_name}</span></p>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => onEdit(prod)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm transition"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(prod.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm transition"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
