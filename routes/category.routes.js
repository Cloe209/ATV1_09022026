import express from 'express';
import CategoryControllers from '../controllers/CategoryControllers.js';

const router = express.Router();

router.get("/", CategoryControllers.index)
router.post("/", CategoryControllers.store)
router.put("/:id", CategoryControllers.update)
router.delete("/:id", CategoryControllers.destroy)

export default router;