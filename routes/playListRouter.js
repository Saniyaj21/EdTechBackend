import express from 'express';


import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';
import { allPlaylist, createPlaylist, updatePlaylist } from '../controllers/playListController.js';


const router = express.Router();

router.post('/new', isAuthenticatedUser, authorizeRoles('admin'), createPlaylist)
router.get('/all', allPlaylist)
router.put('/update/:id', isAuthenticatedUser, authorizeRoles('admin'), updatePlaylist)


export default router