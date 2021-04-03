//Carga el objeto global io que viene del script: /socket.io/socket.io.js
//y se conecta de manera predeterminada al servidor que publica el cliente
let socket = io();

//Para que no sea por defecto seria algo como:
//let socket2  = io.connect('SERVER:PORT',{OPCIONES});

//El socket recive por el evento 'mensajes', los datos y los manipula en el callback
socket.on('mensajes', data => {
    console.log(data);
    publicarMensaje(data);
});

function publicarMensaje(data) {
    var html = data.map((mensaje, index) => {
        return (`
        <div class="mensaje">
            <strong>${mensaje.alias}</strong> dice:
            <p>${mensaje.texto}</p>
        </div>
        `);
    }).join(' ');

    document.getElementById('mensajes').innerHTML = html;
}

function agregarMensaje(e) {
    var mensaje = {
        alias: document.getElementById('alias').value,
        texto: document.getElementById('texto').value
    };

    document.getElementById('alias').style.display = 'none';
    //Envia al servidor con el evento 'agregar-mensaje' el mensaje 
    //(en este caso para que lo cargue al objeto que gestiona los mensajes del chat)
    socket.emit('agregar-mensaje', mensaje);
}