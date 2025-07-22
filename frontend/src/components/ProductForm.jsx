import React, { useEffect, useState } from 'react';
import { createProduct, updateProduct, getProductById } from '../api/product';
import { getCategories } from '../api/category';
import { useParams, useNavigate } from 'react-router-dom';

function ProductForm() {
  const [form, setForm] = useState({ name: '', description: '', price: '', category_id: '' });
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
    if (id) {
      getProductById(id).then((res) => setForm(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateProduct(id, form);
    } else {
      await createProduct(form);
    }
    navigate('/productos');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
      <input name="description" placeholder="Descripción" onChange={handleChange} value={form.description} />
      <input name="price" type="number" placeholder="Precio" onChange={handleChange} value={form.price} />
      <select name="category_id" onChange={handleChange} value={form.category_id}>
        <option value="">Selecciona una categoría</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}

export default ProductForm;
