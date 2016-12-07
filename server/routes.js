/**
 * Main application routes
 */

'use strict';

var path = require('path');

var userController = require('./api/user/user.controller');

var cors = require('cors');

module.exports = function (app) {


    app.use(cors());

    // Insert routes below
    /*    app.use(function (req, res, next) {
     console.log('reset headers');
     console.log(req.body);
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
     });*/


    app.use('/api/auth', userController.auth);
    app.use('/api', require('./api/auth'));
    app.use('/api/users', require('./api/user'));
    app.use('/api/ubicaciones', require('./api/ubicacion'));
    app.use('/api/materias', require('./api/materia'));
    app.use('/api/docentes', require('./api/docente'));
    app.use('/api/alumnos', require('./api/alumno'));
    app.use('/api/libros', require('./api/libro'));
    // app.use('/api/things', require('./api/thing'));


};
