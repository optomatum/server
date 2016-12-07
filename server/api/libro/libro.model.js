'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LibroSchema = new Schema({
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('Libro', LibroSchema);