import { Router } from "express";
import { displayAboutePage, displayContactPage, displayHomePage, displayProjectsPage, displayServicesPage } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutePage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);


export default router;