/**
 * Escriba un nodo. Programa JS que lee y muestra en la consola el código html de una página externa. El vínculo de la página externa debe leerse desde un archivo link.txt

Sugerencia: Necesita módulo npm -> solicitud

Lista de archivos
Escriba un nodo. JS que enumeran el contenido del directorio actual que indica si es un directorio o un archivo

$ node ex4.js
FILE:ex1.js
FILE:ex2.js
FILE:ex3.js
FILE:ex4.js
FILE:getLinksNode.js
FILE:link.txt
DIR :node_modules
FILE:recursiveContentsDir.js
FILE:results.txt
FILE:test.txt
Sugerencia: Necesita fs.readdirSync, fs.lstatSync y isDirectory()
 */


const fs = require('fs');
function leerArchivoURL() {
        try {
        const data = fs.readFileSync('./link.txt', 'utf8')
        //console.log(data);
        return data;
    } catch (err) {
       // console.error(err);
        return '';
    }
}

let url = '';
url = leerArchivoURL();
console.log(url);

//https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');
fetch(url)
    .then(res => res.text())
    .then(body => console.log(body));

//-------------------------------------

let ruta = '.';

fs.readdirSync(ruta).filter(file => {
    console.log(fs.statSync(file).isDirectory() === true ? 'DIR:'+file : 'FILE:'+file);
});

