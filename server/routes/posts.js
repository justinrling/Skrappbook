import express from 'express';


import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//handlers (logic) for routes found in 'Controllers' folder


//callback functions passed when someone arives at localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;