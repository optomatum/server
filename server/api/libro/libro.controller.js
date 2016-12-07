'use strict';

var _ = require('lodash');
var Libro = require('./libro.model');

// Get list of libros
exports.index = function (req, res) {
    Libro.find(function (err, libros) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(libros);
    });
};

// Get a single libro
exports.show = function (req, res) {
    Libro.findById(req.params.id, function (err, libro) {
        if (err) {
            return handleError(res, err);
        }
        if (!libro) {
            return res.status(404).send('Not Found');
        }
        return res.json(libro);
    });
};

// Creates a new libro in the DB.
exports.create = function (req, res) {
    Libro.create(req.body, function (err, libro) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(libro);
    });
};

// Updates an existing libro in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Libro.findById(req.params.id, function (err, libro) {
        if (err) {
            return handleError(res, err);
        }
        if (!libro) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(libro, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(libro);
        });
    });
};

// Deletes a libro from the DB.
exports.destroy = function (req, res) {
    Libro.findById(req.params.id, function (err, libro) {
        if (err) {
            return handleError(res, err);
        }
        if (!libro) {
            return res.status(404).send('Not Found');
        }
        libro.remove(function (err) {
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