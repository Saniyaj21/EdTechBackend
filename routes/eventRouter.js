import express from 'express';


import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';

import { allEvents, deleteEvent, newEvent } from '../controllers/eventController.js';


const router = express.Router();

router.post('/new', isAuthenticatedUser, authorizeRoles("admin"), newEvent);
router.get('/',  allEvents)
router.delete('/:id', isAuthenticatedUser, authorizeRoles("admin"), deleteEvent)


export default router