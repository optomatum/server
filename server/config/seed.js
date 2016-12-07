/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var User = require('../api/user/user.model');
var Ubicacion = require('../api/ubicacion/ubicacion.model');
var Materia = require('../api/materia/materia.model');
var Docente = require('../api/docente/docente.model');
var Alumno = require('../api/alumno/alumno.model');
var Libro = require('../api/libro/libro.model');
var Thing = require('../api/thing/thing.model');


// Insert seed data below
var userSeed = require('../api/user/user.seed.json');
var ubicacionSeed = require('../api/ubicacion/ubicacion.seed.json');
var materiaSeed = require('../api/materia/materia.seed.json');
var docenteSeed = require('../api/docente/docente.seed.json');
var alumnoSeed = require('../api/alumno/alumno.seed.json');
var libroSeed = require('../api/libro/libro.seed.json');
var thingSeed = require('../api/thing/thing.seed.json');

// Insert seed inserts below
User.find({}).remove(function () {
    User.create(userSeed);
});

Ubicacion.find({}).remove(function () {
    Ubicacion.create(ubicacionSeed);
});

Materia.find({}).remove(function () {
    Materia.create(materiaSeed);
});

Docente.find({}).remove(function () {
    Docente.create(docenteSeed);
});

Alumno.find({}).remove(function () {
    Alumno.create(alumnoSeed);
});

Libro.find({}).remove(function () {
    Libro.create(libroSeed);
});

Thing.find({}).remove(function () {
    Thing.create(thingSeed);
});