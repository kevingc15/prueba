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
    <div className="list-container">
      <h2 className="list-title">Categorías</h2>
      <ul className="list">
        {categories.map((cat) => (
          <li key={cat.id} className="list-item">
            <span>{cat.name}</span>
            <div className="item-actions">
              <button onClick={() => navigate(`/categorias/editar/${cat.id}`)} className="edit-button">
                Editar
              </button>
              <button onClick={() => handleDelete(cat.id)} className="delete-button">
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
