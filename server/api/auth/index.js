/**
 * Created by optomatum on 5/12/16.
 */
'use strict';

var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken')


router.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, 'bla', function (err, decoded) {
            if (err) {
                return res.json({success: false})
            } else {
                req.decoded = decoded;
                next();
            }

        })

    }
    else {
        return res.status(403).send({success: false});
    }


});

module.exports = router;