'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UbicacionSchema = new Schema({
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('Ubicacion', UbicacionSchema);