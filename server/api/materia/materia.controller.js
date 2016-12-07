'use strict';

var _ = require('lodash');
var Materia = require('./materia.model');

// Get list of materias
exports.index = function (req, res) {
    Materia.find(function (err, materias) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(materias);
    });
};

// Get a single materia
exports.show = function (req, res) {
    Materia.findById(req.params.id, function (err, materia) {
        if (err) {
            return handleError(res, err);
        }
        if (!materia) {
            return res.status(404).send('Not Found');
        }
        return res.json(materia);
    });
};

// Creates a new materia in the DB.
exports.create = function (req, res) {
    Materia.create(req.body, function (err, materia) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(materia);
    });
};

// Updates an existing materia in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Materia.findById(req.params.id, function (err, materia) {
        if (err) {
            return handleError(res, err);
        }
        if (!materia) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(materia, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(materia);
        });
    });
};

// Deletes a materia from the DB.
exports.destroy = function (req, res) {
    Materia.findById(req.params.id, function (err, materia) {
        if (err) {
            return handleError(res, err);
        }
        if (!materia) {
            return res.status(404).send('Not Found');
        }
        materia.remove(function (err) {
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