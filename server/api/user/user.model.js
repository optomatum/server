'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    active: Boolean,
    role: String
});

module.exports = mongoose.model('User', UserSchema);