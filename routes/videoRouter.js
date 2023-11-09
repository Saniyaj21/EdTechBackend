import express from 'express';


import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';

import { postVideo } from '../controllers/videoController.js';


const router = express.Router();

router.post('/post', isAuthenticatedUser, authorizeRoles('admin'), postVideo)


export default router