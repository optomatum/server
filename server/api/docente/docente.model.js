'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DocenteSchema = new Schema({
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('Docente', DocenteSchema);