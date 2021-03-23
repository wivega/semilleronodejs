console.log(process.agv);

/**
 * Buffers
 * 
 * Es un tipo de dato que lo que hace es ayudarnos a leer datos de archivo o de la red. Buffers es 
 * una secuencia de bytes en lugar de una secuencia de carácteres. Buffer es una subclase de la clase
 * Uint8Array. Buffer está diseñado para operar con cadenas de JavaScript, esto quiere decir que los 
 * bytes de un buffer se pueden inicializar a partir de cadenas de carácteres o convertirse en cadenas
 * de carácteres.
 * 
 * Caracteristicas del Buffer:
 * - Asigna a cada carácter un número entero
 * 
 * Las codificaciones que admite el Buffer en NodeJS:
 * - UTF-8: Valor por defecto del Buffer 
 * - Unicode: Valor Unicode
 * - UTF-16LE: Es unicode de 2 bytes. Abarca más tipos de carácteres
 * - Latin1: Para idiomas de Europa Occidental
 * - ASCII: Valor para ASCII
 * - Base64: Convierte cada secuencia de 3 bytes en una secuencia de 4 carácteres ASCII
 */

let buffer = Buffer.from([0x41, 0x42, 0x43]);
console.log(buffer.toString());
console.log(buffer.toString("hex"));

let computer = Buffer.from("IBM 3111", "ascii");
console.log(computer.toString());
console.log(computer.toString("ascii"));
console.log(computer.subarray(0, 3).map(x => x + 1).toString());
for (let i = 0; i < computer.length; i++) {
    computer[i]--;
}
console.log(computer.toString("ascii"));

let zeros = Buffer.alloc(1024);
console.log(zeros);

let ones = Buffer.alloc(1024, 1);
console.log(ones);

let patterns = Buffer.alloc(1024, 'DBEF', 'hex');
console.log(patterns);


const EventEmitter = require('events');
const net = require('net');

let server = new net.Server();
console.log(server instanceof EventEmitter);

server.on('connection', socket => {
    socket.end('Hello, World!!','utf-8');
});


/**
 * Sreams
 * - Readable: son streams fuentes de datos. devuelve un rs.createReadStrem
 * - Writeable: receptores o destinanarios de datos. devuelve un createWriteStream
 * - Tuplex: combinan los dos anterioes (Writeables, Readables)
 * - Transform: Transformadores, pueden leer y escribir, con la diferencia de que estos datos se 
 *              leen y se escirben en un flujo de datos, se transforman en legibles 
 *              (Readables)
 * 
 */

const fs = require('fs');

function pipeFileToSocker(fileName, socket){
    fs.createReadStream(fileName).pipe(socket);
}

console.log(process.argv);
console.log(process.arch);
console.log(process.cwd());
console.log(process.chdir('.'));
console.log(process.cpuUsage());

const os = require('os');
console.log(os.arch());
console.log(os.cpus());
console.log(os.type());
