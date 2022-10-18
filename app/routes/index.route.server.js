/* File Name: index.route.server.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 18, 2022 */

import { Router } from "express";
import { displayAboutePage, displayContactPage, displayHomePage, displayProjectsPage, displayServicesPage } from "../controllers/index.controller.server.js";
import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutePage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);


export default router;