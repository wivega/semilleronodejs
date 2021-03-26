import {createServer} from 'http';
import {Server} from 'socket.io';
const http = createServer();
const io = new Server(http);
io.on('connection', socket =>{
    console.log("Se ha conectado un cliente desde: "+socket.handshake.address);
});

http.listen(6677, ()=>{
    console.log("Iniciando el servidor en ");
});