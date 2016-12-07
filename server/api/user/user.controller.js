'use strict';

var _ = require('lodash');
var User = require('./user.model');
var jwt = require('jsonwebtoken');

// Get list of users
exports.index = function (req, res) {
    User.find(function (err, users) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(users);
    });
};

// Get a single user
exports.show = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return handleError(res, err);
        }
        if (!user) {
            return res.status(404).send('Not Found');
        }
        return res.json(user);
    });
};

// Creates a new user in the DB.
exports.create = function (req, res) {
    User.create(req.body, function (err, user) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(user);
    });
};

// Updates an existing user in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return handleError(res, err);
        }
        if (!user) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(user, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(user);
        });
    });
};

// Deletes a user from the DB.
exports.destroy = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return handleError(res, err);
        }
        if (!user) {
            return res.status(404).send('Not Found');
        }
        user.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(204).send('No Content');
        });
    });
};
exports.auth = function (req, res) {
    console.log(req.body);

    User.findOne({'username': req.body.username}, function (err, user) {
        if (err) {
            return handleError(res, err);
        }
        if (!user) {
            return res.status(403).send('Error no usuario');
        }
        if (req.body.password != user.password) {
            return res.status(403).send('Invalid password');
        }
        var token = jwt.sign(user, 'bla', {expiresIn: '5h'});
        return res.json(token);
    })
}
function handleError(res, err) {
    return res.status(500).send(err);
}