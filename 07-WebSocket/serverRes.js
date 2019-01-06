var app = require('express')();
var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function (client) {
    client.emit('data', 'Hello WebSocket from 6001.');
});

server.listen(6001, function () {
    console.log('Responser is listening on port 6001');
});    //监听6001端口