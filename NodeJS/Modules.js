const modules = {};

function require(moduleName) {
    return modules[moduleName];
}

modules['stats.js'] = (function () {
    const exports = {};

    const sum = (x, y) => x + y;
    const square = x => x * x;

    exports.mean = function (data) {
        return data.reduce(sum) / data.length;
    };

    exports.stdDev = function (data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    };

    return exports;
}());


modules['calculadora.js'] = (function () {

    const exports = {};

    exports.multiplicar = function (x, y) { return x * y };
    exports.restar = function (x, y) { return x - y };
    exports.dividir = function (x, y) { return x / y };
    exports.sumar = function (x, y) { return x + y };

    return exports;

}());


const stats = require('stats.js');
console.log(stats.mean([1, 2, 3, 9]));
//console.log(stats.stdDev([1,2,4,5,6]));

const calculadora = require('calculadora.js');
console.log(calculadora.sumar(1, 4));


/**
 * MÓDULOS ES6 
 * Los módulos en ES6 son oficiales para la mayoría de navegadores (excepto IE). Los módulos de ES6 cada
 * archivo tiene su propio contexto privado, y se puede usar las declaraciones de inportación y
 * exportación que están en modo estricto.
 * 
 */

//Primera alternativa para exportar
export const PI = Math.PI;

export function degreesToRadians(grads) {
    return grads * PI / 180;
}

export class Circle {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
}

//Segunda alternativa para exportar

 const PI2 = Math.PI;

 function degreesToRadians2(grads) {
    return grads * PI2 / 180;
}

 class Circle2 {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
}

export {PI2, degreesToRadians2, Circle2};

//----------------------------
//En el caso de querer exportar un solo elemento usamos default.
//Solamente un default por modulo
//La palabra clave export  solo debe aparecer en el nivel superior de nuestro código, es decir
//No se puede utilizar export dentro de una clase, funcion, ciclo, etc.
//El export es como un public de Java
export default class BitSet {

}


/**
 * Palabra clave import: importa los elementos exportados de los módulos
 */

import BitSet from './bitset.js';

//Para poder importar un módulo con varios elementos, cambia un poco en su sintaxis:

import {mean, stdDev} from './stats.js';

/**
 * Para tener en cuenta:
 * 1. Las importaciones solo pueden aparecer en el nivel superior del módulo
 * 2. Por convención las importaciones es colocan al inicio del módulo (Buena práctica de 
 *    programación)
 * 3. Para la ruta del módulo se puede usar comillas simples o dobles (No está permitida
 *    la comilla inversa).
 * 4- Siempre se debe colocar ./ y el nombre del archivo o la ruta.
 * 5- Se pueden importar todos los elementos con una sola palabra
 * 6- Expresiones como Math.cos no están permitidas dentro del export, nos va a dar syntax error
 */
import * as stats from './stats.js'; //Punto 5

/**
 * Import para casos especiales en los que se tiene un export default y otras exportaciones
 */

import BitSet, { OtroElementoExportado, OtroSegundoElementoExportado } from './stats.js'

//Importar un archivo sin exports. No es muy común. Se ejecuta una vez se importa
import './archivoSinExports.js'

// Import renombrado: se utiliza cuando se tenga que importar dos módulos con elementos
// exportados que tengan nombres iguales 
import {mean, stdDev} from './stats.js';
import { mean as mean2, stdDev2 } from "./otherstats.js";

import {default as bitSet2} from "./bitset.js";

//Export renombrado: el 'as' también sirve en los exports:
export {PI_2 as NUMERO_PI, degreesToRadians as convertir};

/*
//Re-exports: re- exportaciones

//Unir dos archivos o módulos en uno solo
import {mean} from "./stats/mean.js";
import {stdDev} from "./stats/stdDev.js";

//Re-exports desde nuevo archivo
export {mean} from "./stats/mean.js";
export {stdDev} from "./stats/mean.js";
<----------- COMPLETAR ESTA PARTE DE LAS IMAGENES!!!!!!!!
*/

//Importar módulos re-exportados
import {mean, stdDev} from 'stats.js';
//Renombrado
import {mean as meanOtherName, stdDev} from 'stats.js';

//re-exportar elementos default
export {default as mean} from './stats/mean.js';
export {default as stdDev} from './stats/stdDev.js';


