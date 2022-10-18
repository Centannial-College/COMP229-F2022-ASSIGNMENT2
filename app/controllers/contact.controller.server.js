/* File Name: contact.controller.server.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 18, 2022 */

import contactsModel from '../models/contacts.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayContactsList(req, res, next){
    contactsModel.find(function(err, contactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contacts List', page: 'contacts/list', contacts: contactsCollection, displayName: UserDisplayName(req)});
    }).sort({'name': 1})
}

export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: 'Add Contact', page: 'contacts/edit', contact: {}, displayName: UserDisplayName(req) });
}

export function ProcessContactsAddPage(req, res, next){
    
    let newContact = contactsModel({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    contactsModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contacts-list')
    } )
}

export function DisplayContactsEditPage(req, res, next){
    let id = req.params.id;

    contactsModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Contact', page: 'contacts/edit', contact: contact, displayName: UserDisplayName(req) });
    });    
}

export function ProcessContactsEditPage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactsModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    contactsModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contacts-list')
    } )
}

export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactsModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contacts-list');
    })
}