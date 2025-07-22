import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../api/category';
import { useNavigate } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const loadCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    loadCategories();
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <h2>Categorías</h2>
      <button onClick={() => navigate('/categorias/nueva')}>Nueva Categoría</button>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            {cat.name}
            <button onClick={() => navigate(`/categorias/editar/${cat.id}`)}>Editar</button>
            <button onClick={() => handleDelete(cat.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
