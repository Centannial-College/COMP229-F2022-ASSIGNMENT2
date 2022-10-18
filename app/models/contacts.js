/* File Name: contacts.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 18, 2022 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
    name: String, 
    number: Number, 
    email: String
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactsSchema);