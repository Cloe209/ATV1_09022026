import express from 'express';
import ProdutosControllers from '../controllers/ProdutosControllers.js';

const router = express.Router();

router.get("/", ProdutosControllers.index)
router.post("/", ProdutosControllers.store)
router.put("/:id", ProdutosControllers.update)
router.delete("/:id", ProdutosControllers.destroy)

export default router;