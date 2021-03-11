/*
 * CribaEratostenes.js
 * Algoritmo que devuelve el mayor número primo antes de un número dado 
 * (Basado en la Criba de Eratostenes: https://es.wikipedia.org/wiki/Criba_de_Erat%C3%B3stenes ) 
 */

function sieve(numeroSolicitado) {
    let numeros = new Uint8Array(numeroSolicitado + 1);
    let max = Math.floor(Math.sqrt(numeroSolicitado));
    let puntero = 2;
    while(puntero <= max){
        for (let index = 2*puntero; index <= numeroSolicitado; index+=puntero) {
            numeros[index]=1;
        }
        while(numeros[++puntero]){}
    }
    while(numeros[numeroSolicitado]){
        numeroSolicitado--;
    }
    return numeroSolicitado;
}

console.log(sieve(120));