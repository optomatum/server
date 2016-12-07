/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Alumno = require('./alumno.model');

exports.register = function (socket) {
    Alumno.schema.post('save', function (doc) {
        onSave(socket, doc);
    });
    Alumno.schema.post('remove', function (doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('alumno:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('alumno:remove', doc);
}