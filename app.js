import express from 'express';
import cors from 'cors';
import product from "./routes/product.routes.js"
import category from './routes/category.routes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

// http://localhost:3000/produtos
app.use("/produtos", product);

app.use("/categorias", category);
app.use(errorHandler);

export default app;