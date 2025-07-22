import db from '../config/db.js';

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT products.*, categories.name AS category_name
      FROM products
      LEFT JOIN categories ON products.category_id = categories.id
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT products.*, categories.name AS category_name
      FROM products
      LEFT JOIN categories ON products.category_id = categories.id
      WHERE products.id = ?
    `, [req.params.id]);

    if (rows.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un producto por categoria
export const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const [rows] = await db.execute(
      `SELECT p.id, p.name, p.description, c.name AS category 
       FROM products p 
       JOIN categories c ON p.category_id = c.id 
       WHERE c.id = ?`,
      [categoryId]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear producto
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category_id } = req.body;

    if (!name || !description || !price || !category_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(
      'INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?, ?)',
      [name, description, price, category_id]
    );

    res.status(201).json({ id: result.insertId, name, description, price, category_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar producto
export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category_id } = req.body;
    const { id } = req.params;

    if (!name || !description || !price || !category_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(
      'UPDATE products SET name = ?, description = ?, price = ?, category_id = ? WHERE id = ?',
      [name, description, price, category_id, id]
    );

    if (result.affectedRows === 0) return res.status(404).json({ error: 'Producto no encontrado' });

    res.json({ id, name, description, price, category_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar producto
export const deleteProduct = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) return res.status(404).json({ error: 'Producto no encontrado' });

    res.json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
