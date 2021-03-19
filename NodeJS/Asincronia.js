/**
 * Fundamentalmente la programación asincrónica en javascript se realiza 
 * con devoluciones de llamada (Callbacks).
 * 
 * ¿Qué es un Callback ? 
 * Es una función que se crea y luego se pasa (como argumento) a otra función,
 * pero esta otra función invoca (devuelve la llamda) a nuestra función cuando 
 * se cumple una condición, o se produce un evento. Este evento es obviamente asincrónico
 * 
 * La invocación de la función de devolución de llamada notifica la condición o el 
 * evento.
 * 
 */

function cuadrado(x) {
    return x * x;
}

console.log('Antes');
console.log(cuadrado(4));
console.log('Después');

function cuadradoWithAsync(x, callback) {
    setTimeout(() => callback(x * x), 100);
}
console.log('-------------------------');
console.log('Antes');
console.log(cuadradoWithAsync(4, resultado => console.log(`result ${resultado}`)));
console.log('Después');

/**
 * Eliminar el detalle de las dependencias en los callbacks
 */

let seconds = 30;

function comenzarCuentaRegresiva(callback) {
    setInterval(() => {
        seconds--;
        callback();
    }, 1000);
}   

function mostrarSegundos() {
    console.log(seconds);
}

//comenzarCuentaRegresiva(mostrarSegundos);

/**
 * La evolución del callback
 */

/**
 * Errores con callbacks
 * No se ejecuta el segundo lector
 */


import { readFile } from 'fs';

const CACHE = new Map();

function lecturaInconsistente(nombreArchivo, callback) {
    if (CACHE.has(nombreArchivo)) {
        callback(CACHE.get(nombreArchivo));
    } else {
        readFile(nombreArchivo, 'utf8', (err, data) => {
            CACHE.set(nombreArchivo, data);
            callback(data);
        });
    }
}


function crearLectordeArchivo(nombreArchivo) {
    const LISTENERS = [];
    lecturaInconsistente(nombreArchivo, valor => LISTENERS.forEach(listener => listener(valor)));
    return { onDataReady: listener => LISTENERS.push(listener) };
}

const LECTOR1 = crearLectordeArchivo('data.txt');
LECTOR1.onDataReady(data => {
    console.log(`Primera llamada a data: ${data}`);
    const LECTOR2 = crearLectordeArchivo('data.txt');
    LECTOR2.onDataReady(data => console.log(`Segunda llamada a data: ${data}`));
});

/**
 * (Callback hell) cuando se hace abuso del callback, de múltiples funciones
 * 
 */

function comprarEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 1;
    callback(empanadas);
}

function comprarTresEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 3;
    callback(empanadas);
}

function comprarCincoEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 5;
    callback(empanadas);
}

let empanadas = 0;

comprarEmpanadas(empanadas, primeraCompra => {
    console.log(`Empanadas: ${primeraCompra}`);
    //Me ha gustado! quiero tres más!
    comprarTresEmpanadas(primeraCompra, segundaCompra => {
        console.log(`Empanadas: ${segundaCompra}`);
        //Me ha gustado! quiero cinco más!!
        comprarCincoEmpanadas(segundaCompra, terceraCompra => {
            console.log(`Empanadas ${terceraCompra}`);
        });
    });

});

/**
 * Promesas (Promises) en JS 
 * 
 * Las promesas se crearon en el estándar ES6.
 * Significa que esperamos que se cumpla una promesa y si no se cumple es por que se ha rechazado una promesa.
 * Soluciona muchas cosas:
 * 1 - Legibilidad del código
 * 2 - Mejora manejo de errores.
 * 
 * Las promesas son un objeto que envuelven nuestro return. Se manejan varios estados:
 * Estado resuelto.
 * Estado rechazado o error.
 * 
 */


function comprarEmpanadasConPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 1;
    let promesa;
    return promesa = new Promise((resolve) => resolve(empanadas));
}

function comprarTresEmpanadasConPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 3;
    let promesa;
    return promesa = new Promise((resolve) => resolve(empanadas));
}

function comprarCincoEmpanadasConPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 5;
    let promesa;
    return promesa = new Promise((resolve) => resolve(empanadas));
}

let empanadasPromesas = 0;

comprarEmpanadasConPromesas(empanadasPromesas)
    .then(
        resultado => {
            console.log(`empanadas: ${resultado}`);
            //Ahora quiero tres empanadas!
            comprarTresEmpanadasConPromesas(resultado)
                .then(
                    resultado => {
                        console.log(`empanadas: ${resultado}`);
                        //Ahora quiero cinco empanadas!!
                        comprarCincoEmpanadasConPromesas(resultado)
                            .then(
                                resultado => {
                                    console.log(`empanadas ${resultado}`);
                                }
                            );
                    }
                );
        }
    );

/**
 * Async Await
 * 
 */

function comprarEmpanadasConAsync(empanadasActuales) {
    const empanadas = empanadasActuales + 1;
    let promesa;
    return promesa = new Promise((resolve) => resolve(empanadas));
}

function comprarTresEmpanadasConAsync(empanadasActuales) {
    const empanadas = empanadasActuales + 3;
    let promesa;
    return promesa = new Promise((resolve) => resolve(empanadas));
}

function comprarCincoEmpanadasConAsync(empanadasActuales) {
    const empanadas = empanadasActuales + 5;
    let promesa;
    return promesa = new Promise((resolve) => resolve(empanadas));
}

let empanadasAsync = 0;

async function comprar() {
    const primerCompra = await comprarEmpanadasConAsync(empanadasAsync);
    console.log(`Empanadas: ${primerCompra}`);
    const segundaCompraAsync = await comprarTresEmpanadasConAsync(primerCompra);
    console.log(`Empanadas: ${segundaCompraAsync}`);
    const terceraCompraAsync = await comprarCincoEmpanadasConAsync(segundaCompraAsync);
    console.log(`Empanadas: ${terceraCompraAsync}`);
}

comprar();