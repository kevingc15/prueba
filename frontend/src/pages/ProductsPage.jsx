import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api/products';
import { getCategories } from '../api/categories';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', category_id: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateProduct(editingId, form);
    } else {
      await createProduct(form);
    }

    setForm({ name: '', description: '', price: '', category_id: '' });
    setEditingId(null);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category_id: product.category_id,
    });
    setEditingId(product.id);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Productos</h2>

      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} className="border p-2 w-full" />
        <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange} className="border p-2 w-full" />
        <input name="price" placeholder="Precio" value={form.price} onChange={handleChange} className="border p-2 w-full" />
        <select name="category_id" value={form.category_id} onChange={handleChange} className="border p-2 w-full">
          <option value="">Selecciona una categoría</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingId ? 'Actualizar' : 'Crear'}
        </button>
      </form>

      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="border p-2 flex justify-between items-center">
            <div>
              <strong>{product.name}</strong> - ${product.price} <br />
              <small>{product.description}</small> <br />
              <em>Categoría: {product.category_name}</em>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(product)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
