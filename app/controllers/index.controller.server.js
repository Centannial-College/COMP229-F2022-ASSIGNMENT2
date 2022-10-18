/* File Name: index.controller.server.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 18, 2022 */

import { UserDisplayName } from '../utils/index.js';

export function displayHomePage(req, res, next) {
    res.render('index', {title: 'Home', page: 'home', displayName: UserDisplayName(req)});
};

export function displayAboutePage(req, res, next) {
    res.render('index', {title: 'About me', page: 'about', displayName: UserDisplayName(req)});
};

export function displayProjectsPage(req, res, next) {
    res.render('index', {title: 'Projects', page: 'projects', displayName: UserDisplayName(req)});
};

export function displayServicesPage(req, res, next) {
    res.render('index', {title: 'Services', page: 'services', displayName: UserDisplayName(req)});
};

export function displayContactPage(req, res, next) {
    res.render('main', {title: 'Contact', page: 'contact', displayName: UserDisplayName(req)});
};
