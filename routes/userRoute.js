import express from 'express';

import {
    getAllUser,
    getUserDetails,
    login,
    logout,
    register,
    updateProfile,
} from '../controllers/userController.js';

import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';



const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

router.get('/profile', isAuthenticatedUser, getUserDetails)
router.patch('/profile/update', isAuthenticatedUser, updateProfile)
router.get('/all', isAuthenticatedUser, authorizeRoles('admin'), getAllUser)





export default router