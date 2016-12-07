'use strict';

var _ = require('lodash');
var Alumno = require('./alumno.model');

// Get list of alumnos
exports.index = function (req, res) {
    Alumno.find(function (err, alumnos) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(alumnos);
    });
};

// Get a single alumno
exports.show = function (req, res) {
    Alumno.findById(req.params.id, function (err, alumno) {
        if (err) {
            return handleError(res, err);
        }
        if (!alumno) {
            return res.status(404).send('Not Found');
        }
        return res.json(alumno);
    });
};

// Creates a new alumno in the DB.
exports.create = function (req, res) {
    Alumno.create(req.body, function (err, alumno) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(alumno);
    });
};

// Updates an existing alumno in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Alumno.findById(req.params.id, function (err, alumno) {
        if (err) {
            return handleError(res, err);
        }
        if (!alumno) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(alumno, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(alumno);
        });
    });
};

// Deletes a alumno from the DB.
exports.destroy = function (req, res) {
    Alumno.findById(req.params.id, function (err, alumno) {
        if (err) {
            return handleError(res, err);
        }
        if (!alumno) {
            return res.status(404).send('Not Found');
        }
        alumno.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}