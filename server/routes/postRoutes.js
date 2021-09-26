import express from 'express';
import {
  getPosts,
  createPost,
  // updatePost,
} from '../controllers/postControllers.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
// router.put('/:id', updatePost);

export default router;
