import express from 'express';
import ProductControllers from '../controllers/ProductControllers.js';

const router = express.Router();

router.get("/", ProductControllers.index)
router.post("/", ProductControllers.store)
router.put("/:id", ProductControllers.update)
router.delete("/:id", ProductControllers.destroy)

export default router;