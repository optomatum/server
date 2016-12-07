/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Ubicacion = require('./ubicacion.model');

exports.register = function (socket) {
    Ubicacion.schema.post('save', function (doc) {
        onSave(socket, doc);
    });
    Ubicacion.schema.post('remove', function (doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('ubicacion:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('ubicacion:remove', doc);
}