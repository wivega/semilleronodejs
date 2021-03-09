/*
 * Set class: Un set es una coleccion de valores como lo es una matriz. Sin embargo
 * a diferencia de las matrices, los set no estan ordenados ni indexados y no permiten
 * duplicados. Un valor es miembro de un set o no es miembro. No es posible preguntar
 * cuantas veces aparece un valor un conjunto.
 */
let setOne = new Set(); //Un Set vacío.
let setTwo = new Set([1, setOne]);
let setThree = new Set(setOne); //Un nuevo set que copia los elementos de sets    .
let setFour = new Set('Mississipi'); //Colocaremos cuatro elementos: 'M, I, S, P'
console.log(setFour.size);
setOne.add(1);
setOne.add(1);
setOne.add(true);
setOne.add([1, 2, 3]);
setOne.add("prueba");
setOne.add(1);
console.log(setOne.size); //3
setOne.delete(1);
console.log(setOne.size); //2
setOne.delete("prueba");
console.log(setOne.size); //1
setOne.clear();
console.log(setOne.size); //0
setOne.add('a').add('b').add('c');
console.log(setOne.size); //3

//Verificación de si un valor es miembro del Set.
let digitPrimes = new Set([2, 3, 5, 7]);
console.log(digitPrimes.has(2)); //true
console.log(digitPrimes.has("2")); //false
console.log(digitPrimes.has(70)); //false

let sum = 0;
for (let primes of digitPrimes) {
    sum += primes
}
console.log(sum); //17

//Conversión a matrices

console.log([...digitPrimes]); // [2,3,5,7]
console.log(Math.max([...digitPrimes])); //7

let product = 1;
digitPrimes.forEach(prime => product *= prime);
console.log(product);