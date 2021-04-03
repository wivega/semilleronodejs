
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
//Se crea una instancia de socket.io con el servidor http como parámetro
const io = socketio(server);
//Lo usamos para publicar a través de express nuestro cliente en el servidor
app.use(express.static('client')); 

//Creamos un objeto para gestionar nuestros mensajes en el chat
var mensajes = [{
  texto: 'Bienvenido al chat de Socket.io y NodeJS de Wilman Vega',
  alias: 'Wilman'
}];

//Se escuchan sockets entrantes con el evento de conexión y se ejecuta el callback con esos sockets
io.on('connection', (socket) => {     
  console.log("Cliente conectado desde " + socket.handshake.address);

  //Con esto enviamos el objeto mensajes, con el evento mensajes
  socket.emit('mensajes', mensajes);  

  //Con esto recibimos mensajes (data), con el evento agregar-mensaje
  socket.on('agregar-mensaje', data => {
    //Agregamos mensajes al objeto que gestiona los mensajes en el servidor
    mensajes.push(data); 
    //Se envia a todos los clientes conectados (ver: https://socket.io/docs/v3/emit-cheatsheet/index.html)
    io.sockets.emit('mensajes', mensajes);
  });
});

server.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});
