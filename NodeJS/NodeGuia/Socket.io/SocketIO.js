/**
 * Socket.IO
 * 
 * Socket.IO es una biblioteca de JavaScript para aplicaciones web en tiempo real. Permite la comunicación bidireccional 
 * en tiempo real entre clientes y servidores web. Tiene dos partes: una biblioteca del lado del cliente que se ejecuta en 
 * el navegador y una biblioteca del lado del servidor para Node.js.
 *                                                              From https://en.wikipedia.org/wiki/Socket.IO
 * 
 * 
 * 
 * Empezando con Socket.io
 * Primer Ejemplo: Escribir un CHAT
 * Necesitamos:
 * - NodeJS!
 * - Express (npm install express)
 */

/**
 * 1. - Crear el archivo index que se utilizará como el servidor principal
 * 2. - Crear el cliente que se conectará a nuestro servidor (una página web por ejemplo)
 */

/**
 * Objectos/Funciones principales de Socket.io
 * 
 * io  
 * Es la instancia principal de la libreria socket. Hay varias formas de realizar esta instancia:
 */

 // CommonJS
 const io1 = require("socket.io")(httpServer, { 
    // ...
  }); 

// Módulos ES (similar a la de TypeScript)
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io2 = new Server(httpServer, {
  // ...
});

/**
 * Tambien hay dos formas o modos de la instancia: Standalone o pegado a un servidor Http.
 * 
 */

// Standalone
const options = { /* ... */ };
const io = require("socket.io")(options);

io.on("connection", socket => { /* ... */ });

io.listen(3000);

// Pegado a un servidor Http.
const httpServer = require("http").createServer();
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);

io.on("connection", socket => { /* ... */ });

httpServer.listen(3000);


/**
 * 
 */