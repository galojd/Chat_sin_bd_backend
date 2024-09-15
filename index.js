const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
require('dotenv').config();
const { Server } = require('socket.io');
const corsConfig = require('./Cors/cors');
const { ConectarCliente } = require('./Controllers/socket');


app.use(cors());

const server = http.createServer(app);

//Establesco quien accedera a mi programa
const io = new Server(server, {
    cors: corsConfig
});

//Configuro la coneccion del socket y las salas
ConectarCliente(io);

server.listen(process.env.PORT,() => {
    console.log('Servidor conectado y listo', process.env.PORT)
});

