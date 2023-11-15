import express from 'express';


import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';

import { allVideos, allVideosOfPlaylist, deleteVideo, postVideo, searchVideos, updateVideo } from '../controllers/videoController.js';


const router = express.Router();

router.get('/', allVideosOfPlaylist);
router.post('/post', isAuthenticatedUser, authorizeRoles('admin'), postVideo)
router.get('/all', allVideos);
router.post('/search', searchVideos);
router.put('/update/:id', updateVideo);
router.delete('/delete/:id', deleteVideo);


export default router