# CRUD de Productos y Categorías

Aplicación full-stack para gestionar productos y categorías, desarrollada con React.js (frontend), Node.js y Express (backend), y MySQL como base de datos.

---

## ⚙️ Tecnologías utilizadas

- **Frontend**
  - React.js
  - React Router DOM
  - Axios
  - Vite

- **Backend**
  - Node.js
  - Express
  - MySQL
  - CORS
  - dotenv

---

## 🗂️ Estructura del proyecto

**Backend (`/backend`):**
- `index.js`: servidor Express y configuración de rutas
- `db.js`: conexión a MySQL
- `routes/`
  - `product.js`: rutas CRUD de productos
  - `category.js`: rutas CRUD de categorías

**Frontend (`/frontend/src`):**
- `api/`: funciones Axios para consumir la API
  - `product.js`
  - `category.js`
- `components/`: vistas y formularios
  - `ProductList.jsx`
  - `ProductForm.jsx`
  - `CategoryList.jsx`
  - `CategoryForm.jsx`
  - `Navbar.jsx`
- `App.jsx`: configuración de rutas con React Router
- `main.jsx`, `index.css`: entrada principal y estilos globales

---

## 📌 Rutas del backend

### 📦 Productos (`/api/products`)

- `GET /api/products`  
  - Descripción: Obtiene todos los productos  
  - Respuesta: JSON con array de productos

- `GET /api/products/:id`  
  - Descripción: Obtiene un producto por su ID  
  - Parámetro: `id` (número)  
  - Respuesta: JSON con los datos del producto

- `POST /api/products`  
  - Descripción: Crea un nuevo producto  
  - Body (JSON):  
    ```json
    {
      "name": "Nombre del producto",
      "description": "Descripción",
      "price": 199.99,
      "category_id": 1
    }
    ```
  - Respuesta: Mensaje de éxito

- `PUT /api/products/:id`  
  - Descripción: Actualiza un producto existente  
  - Parámetro: `id` (número)  
  - Body (JSON): Igual al de POST  
  - Respuesta: Mensaje de éxito

- `DELETE /api/products/:id`  
  - Descripción: Elimina un producto  
  - Parámetro: `id` (número)  
  - Respuesta: Mensaje de éxito

---

### 🗃️ Categorías (`/api/categories`)

- `GET /api/categories`  
  - Descripción: Obtiene todas las categorías  
  - Respuesta: JSON con array de categorías

- `GET /api/categories/:id`  
  - Descripción: Obtiene una categoría por ID  
  - Parámetro: `id` (número)  
  - Respuesta: JSON con los datos de la categoría

- `POST /api/categories`  
  - Descripción: Crea una nueva categoría  
  - Body (JSON):  
    ```json
    {
      "name": "Categoría ejemplo"
    }
    ```
  - Respuesta: Mensaje de éxito

- `PUT /api/categories/:id`  
  - Descripción: Actualiza una categoría  
  - Parámetro: `id` (número)  
  - Body (JSON): igual al de POST  
  - Respuesta: Mensaje de éxito

- `DELETE /api/categories/:id`  
  - Descripción: Elimina una categoría  
  - Parámetro: `id` (número)  
  - Respuesta: Mensaje de éxito

---

## 🧪 Rutas del frontend (React)

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/products` | `ProductList.jsx` | Lista de productos |
| `/products/create` | `ProductForm.jsx` | Crear producto |
| `/products/edit/:id` | `ProductForm.jsx` | Editar producto |
| `/categories` | `CategoryList.jsx` | Lista de categorías |
| `/categories/create` | `CategoryForm.jsx` | Crear categoría |
| `/categories/edit/:id` | `CategoryForm.jsx` | Editar categoría |

---

## ▶️ Cómo ejecutar el proyecto

### 🖥️ Backend

1. Ir a la carpeta `backend`:

```bash
cd backend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=crud_app
PORT=5000
```

4. Ejecutar el servidor:

```bash
node index.js
```

> El backend se ejecutará en `http://localhost:5000`.

---

### 🌐 Frontend

1. Ir a la carpeta `frontend`:

```bash
cd frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación:

```bash
npm run dev
```

> El frontend se ejecutará en `http://localhost:5173` por defecto.

---

## ✍️ Autor

**Kevin GC**  
GitHub: [@kevingc15](https://github.com/kevingc15)