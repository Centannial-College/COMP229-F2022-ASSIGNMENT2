/* File Name: auth.route.server.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 18, 2022 */
import {Router} from 'express';
import { DisplayLoginPage,  
    ProcessLoginPage,
    ProcessLogoutPage} from '../controllers/auth.controller.server.js';

const router = Router();

// Display Login Page
router.get('/login', DisplayLoginPage);
// Process Login Page
router.post('/login', ProcessLoginPage);

// Process Logout Page
router.get('/logout', ProcessLogoutPage);

export default router;