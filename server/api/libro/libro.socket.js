/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Libro = require('./libro.model');

exports.register = function (socket) {
    Libro.schema.post('save', function (doc) {
        onSave(socket, doc);
    });
    Libro.schema.post('remove', function (doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('libro:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('libro:remove', doc);
}