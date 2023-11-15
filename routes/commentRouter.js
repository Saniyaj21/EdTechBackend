import express from 'express';


import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';
import { deleteComment, newComment, videoComments } from '../controllers/commentController.js';


const router = express.Router();

router.post('/new', isAuthenticatedUser,  newComment)
router.get('/:id',  videoComments)
router.delete('/:id', isAuthenticatedUser, authorizeRoles("admin"), deleteComment)


export default router