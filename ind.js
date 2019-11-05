const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;


const app = espress();
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT,() => console.log(`server has
port ${PORT}`))