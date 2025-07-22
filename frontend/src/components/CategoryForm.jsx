import React, { useEffect, useState } from 'react';
import { createCategory, updateCategory, getCategoryById } from '../api/category';
import { useParams, useNavigate } from 'react-router-dom';

function CategoryForm() {
  const [form, setForm] = useState({ name: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getCategoryById(id).then((res) => setForm(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateCategory(id, form);
    } else {
      await createCategory(form);
    }
    navigate('/categorias');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nombre de categoría"
        value={form.name}
        onChange={handleChange}
        required
      />
      <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}

export default CategoryForm;
