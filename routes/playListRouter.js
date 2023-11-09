import express from 'express';


import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';
import { createPlaylist } from '../controllers/playListController.js';


const router = express.Router();

router.post('/new', isAuthenticatedUser, authorizeRoles('admin'), createPlaylist)


export default router