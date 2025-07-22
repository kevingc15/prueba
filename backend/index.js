import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import categoryRoutes from './routes/categories.js';
import productRoutes from './routes/products.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
