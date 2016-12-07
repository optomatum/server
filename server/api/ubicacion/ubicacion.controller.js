'use strict';

var _ = require('lodash');
var Ubicacion = require('./ubicacion.model');

// Get list of ubicacions
exports.index = function (req, res) {
    Ubicacion.find(function (err, ubicacions) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(ubicacions);
    });
};

// Get a single ubicacion
exports.show = function (req, res) {
    Ubicacion.findById(req.params.id, function (err, ubicacion) {
        if (err) {
            return handleError(res, err);
        }
        if (!ubicacion) {
            return res.status(404).send('Not Found');
        }
        return res.json(ubicacion);
    });
};

// Creates a new ubicacion in the DB.
exports.create = function (req, res) {
    Ubicacion.create(req.body, function (err, ubicacion) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(ubicacion);
    });
};

// Updates an existing ubicacion in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Ubicacion.findById(req.params.id, function (err, ubicacion) {
        if (err) {
            return handleError(res, err);
        }
        if (!ubicacion) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(ubicacion, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(ubicacion);
        });
    });
};

// Deletes a ubicacion from the DB.
exports.destroy = function (req, res) {
    Ubicacion.findById(req.params.id, function (err, ubicacion) {
        if (err) {
            return handleError(res, err);
        }
        if (!ubicacion) {
            return res.status(404).send('Not Found');
        }
        ubicacion.remove(function (err) {
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