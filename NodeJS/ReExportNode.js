module.exports.module1 = require('./luz.js');
module.exports.module2 = require('./x.js'); //ejemplo



const fs = require('fs');

function leerArchivoURL(nombreArchivo) {
    fs.readFile(`./${nombreArchivo}`, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return '';
        }
        return data.toString();
    });
}

let url = '';
url = leerArchivoURL('link.txt');
//console.log(url);
/*
const bent = require('bent');
const getStream = bent(url);
let stream = getStream(url);
const str = stream.text();
console.log(str);
*/


