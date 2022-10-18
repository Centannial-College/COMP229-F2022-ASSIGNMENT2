/* File Name: contact.route.server.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 18, 2022 */

import { Router } from "express";

import {  DisplayContactsList, 
    DisplayContactsAddPage, 
    ProcessContactsAddPage, 
    ProcessContactsEditPage, 
    DisplayContactsEditPage, 
    ProcessContactsDelete } from "../controllers/contact.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/contacts-list', AuthGuard, DisplayContactsList);
router.get('/contacts-add',  AuthGuard, DisplayContactsAddPage);
router.post('/contacts-add', AuthGuard, ProcessContactsAddPage);
router.post('/contacts-edit/:id', AuthGuard, ProcessContactsEditPage);
router.get('/contacts-edit/:id', AuthGuard, DisplayContactsEditPage);
router.get('/contacts-delete/:id', AuthGuard, ProcessContactsDelete);

export default router;