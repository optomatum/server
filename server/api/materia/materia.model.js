'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MateriaSchema = new Schema({
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('Materia', MateriaSchema);