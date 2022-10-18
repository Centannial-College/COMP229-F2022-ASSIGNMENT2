/* File Name: user.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 18, 2022 */

import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';

const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String
},{
    timestamps:true,
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);