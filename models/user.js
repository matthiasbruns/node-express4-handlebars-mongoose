'use strict';

/**
 * This model is used for authentication only.
 * It should be used by passport.
 * It also uses 'passport-local-mongoose' to make authentication easier.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const logger = require('../services/logger').create('UserModel');

var userSchema = new Schema({
  username: String,
  password: String,
  email: String
}, {
  timestamps: true
});
userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);

module.exports = User;
