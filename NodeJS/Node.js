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
    socket.end('Hello, World!!', 'utf-8');
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

function pipeFileToSocker(fileName, socket) {
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
/*
console.log(process.argv); // Una matriz de argumentos de la línea de comandos.
console.log(process.arch);// La arquitectura de la CPU: "x64", por ejemplo.
console.log(process.cwd()); // Devuelve el directorio de trabajo actual.
console.log(process.chdir(".")); // Establece el directorio de trabajo actual.
console.log(process.cpuUsage()); // Informa el uso de la CPU.
console.log(process.env); // Un objeto de variables de entorno.
console.log(process.execPath); // La ruta absoluta del sistema de archivos al ejecutable del nodo.
console.log(process.exit ());// Termina el programa.
console.log(process.exitCode); // Un código entero que se informará cuando se cierre el programa.
//console.log(process.getuid()); // Devuelve el ID de usuario de Unix del usuario actual.
console.log(process.hrtime.bigint()); // Devuelve una marca de tiempo de nanosegundos de "alta resolución".
//console.log(process.kill()); // Envía una señal a otro proceso.
console.log(process.memoryUsage()); // Devuelve un objeto con detalles de uso de memoria.
console.log(process.nextTick()); // Como setImmediate (), invoca una función pronto.
console.log(process.pid); // El ID de proceso del proceso actual.
console.log(process.ppid); // El ID del proceso padre.
console.log(process.platform); // El sistema operativo: "linux", "darwin" o "win32", por ejemplo.
console.log(process.resourceUsage()); // Devuelve un objeto con detalles de uso de recursos.
console.log(process.setuid()); // Establece el usuario actual, por id o nombre.
console.log(process.title); // El nombre del proceso que aparece en los listados `ps`.
console.log(process.umask()); // Establece o devuelve los permisos predeterminados para nuevos archivos.
console.log(process.uptime()); // Devuelve el tiempo de actividad de Node en segundos.
console.log(process.version); // Cadena de versión de Node
console.log(process.versions); // Cadenas de versión para las bibliotecas de las que depende Node.

console.log(os.arch()); // Devuelve la arquitectura de la CPU. "x64" o "arm", por ejemplo.
console.log(os.constants); // Constantes útiles como os.constants.signals.SIGINT.
console.log(os.cpus()); // Datos sobre los núcleos de la CPU del sistema, incluidos los tiempos de uso.
console.log(os.endianness()); // El endianness nativo de la CPU "BE" o "LE".
console.log(os.EOL); // El terminador de línea nativo del sistema operativo: "\ n" o "\ r \ n".
console.log(os.freemem()); // Devuelve la cantidad de RAM libre en bytes.
console.log(os.getPriority()); // Devuelve la prioridad de programación del sistema operativo de un proceso.
console.log(os.homedir()); // Devuelve el directorio de inicio del usuario actual.
console.log(os.hostname()); // Devuelve el nombre de host de la computadora.
console.log(os.loadavg()); // Devuelve los promedios de carga de 1, 5 y 15 minutos.
console.log(os.networkInterfaces ()); // Devuelve detalles sobre la red disponible. conexiones.
console.log(os.platform()); // Devuelve OS: "linux", "darwin" o "win32", por ejemplo.
console.log(os.release()); // Devuelve el número de versión del SO.
console.log(os.setPriority()); // Intenta establecer la prioridad de programación para un proceso.
console.log(os.tmpdir()); // Devuelve el directorio temporal predeterminado.
console.log(os.totalmem()); // Devuelve la cantidad total de RAM en bytes.
console.log(os.type()); // Devuelve SO: "Linux", "Darwin" o "Windows_NT", p. ej.
console.log(os.uptime()); // Devuelve el tiempo de actividad del sistema en segundos.
console.log(os.userInfo()); // Devuelve uid, nombre de usuario, inicio y shell del usuario actual.
*/

/**
 * Modulo FS (FileSystem)
 * Es una api para trabajar con archivos y directorios
 * La mayoría de sus funciones son asíncronas, pero también tiene su contraparte síncrona
 * fs.readFile() > fs.readFileAsync()
 * fs.promises.readFile() : Después de versión 10 de NodeJS.
 * 
 */


/**
 * PATHS
 * 
 */
console.log(process.cwd);
console.log(__filename);
console.log(__dirname);
console.log(os.homedir());

const path = require("path");

console.log(path.sep);

let directorio = "src/pkg/test.js";

console.log(path.basename(directorio));

console.log(path.normalize("a/./b"));
console.log(path.normalize("//a//b//"));
console.log(path.join('src', 'pkg', 't.js'));
console.log(path.resolve("t.js"));

//lectura de forma síncrona
const fs1 = require('fs');

let buffer1 = fs1.readFileSync("fs.txt");
console.log(buffer1);
let text = fs1.readFileSync("fs.txt", "utf-8");
console.log(text);

//Lectura de forma asíncrona con callback
fs1.readFile("fs.txt", (err, buffer) => {
    if (err) {
        console.log(err);
    } else {
        console.log(buffer);
    }
});

//Lectura con promesas

fs1.promises.readFile("fs.txt", "utf-8")
    .then(processFileText => {
        console.log(processFileText)
    })
    .catch(handleReadError => {
        console.log(handleReadError)
    });

//Lectura con async await
async function leerArchivo(fileName, encoding = "utf-8") {
    let text2 = await fs1.promises.readFile(fileName, encoding);
    console.log(text2);
}

leerArchivo("fs.txt");

/**
 * Salida estandar a nivel de contenedores
 * - Descriptores
 * 
 * Hay tres tipos de contenedores
 * stdin
 * stderr
 * stdout
 * 
 * RECOMENDACION: Los logs siempre es mejor hacerlo a la salida estándar
 */

function printFile(fileName, encoding = "utf-8") {
    fs1.createReadStream(fileName, encoding).pipe(process.stdout);
}

let configuracion = { name: "Juan", lastname: "Perez" };
fileNameToWrite = "configuracion.txt";
//fs1.writeFileSync(path.resolve(__dirname, fileNameToWrite), JSON.stringify(configuracion));
fs1.writeFileSync(path.resolve(__dirname, fileNameToWrite), "Datos iniciales desde fs1.writeFileSync\n");

fs.appendFile(path.resolve(__dirname, fileNameToWrite), "Datos desde fs.appendFile\n", err => {
    if (err) {
        console.log(err);
    } else {
        let configuracionText = fs.readFileSync(path.resolve(__dirname, fileNameToWrite), "utf-8");
        console.log(configuracionText);
    }
});

/**
 * fs.appendFile  
 * fs.appendFileSync 
 * fs.promises.appendFile
 */

//fs.appendFileSync 
fs.appendFileSync(path.resolve(__dirname, fileNameToWrite), "Datos desde fs.appendFileSync\n");

// fs.promises.appendFile
fs.promises.appendFile(path.resolve(__dirname, fileNameToWrite), "Datos desde fs.promises.appendFile\n").then(appendedProcess => {
    console.log("fs.promises.appendFile ");
}).catch(error => { console.log(error); })

//appendFile Async Await
//Regla obligatoria: poner try catch
async function appendFileAsyncAwait(fileName, data) {
    try {
        let appendedSuccess = await fs.promises.appendFile(fileName, data);
        console.log("se agregaron datos al archivo ");
    } catch (error) {
        console.log(error);
    }
}

appendFileAsyncAwait(path.resolve(__dirname, fileNameToWrite),"Datos desde  appendFile Async Await\n");


/**
 * Metadatos de los archivos
 */


let stats  = fs.statSync(path.resolve(__dirname, fileNameToWrite));
console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.size); //tamaño del archivo en bytes
console.log(stats.ctime);
console.log(stats.atime); //Fecha ultima lectura
console.log(stats.mtime); //Fecha ultima modificacion
console.log(stats.uid); //Id del usuario dueño del archivo
console.log(stats.gid); //Id grupo dueño del archivo
console.log(stats.mode.toString(8)); //octal de los permisos del archivo

/**
 * Copia de archivos
 * 
 * fs1.copyFileSync  primer archivo es el nombre del archivo y el segundo es donde quieres copiar este archivo
 */

 fs1.copyFileSync(path.resolve(__dirname, fileNameToWrite), path.resolve(__dirname, 'configuracion_copia.txt'));

let output = fs1.createWriteStream(path.resolve(__dirname, "configuracion.txt"));
for(let i=0; i <=100; i++){
    output.write(`${i}\n`);
}
console.log(output.end());
