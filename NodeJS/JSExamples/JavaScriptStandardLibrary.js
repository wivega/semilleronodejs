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

/**
 * Representa un conjunto de valores conocidos como claves, donde cada clave
 * tiene un otro valor asociado (o mapeado). Un Map o mapa es como una
 * matriz, pero en lugar de usar un conjunto de numeros enteros secuenciales
 * como claves, los mapas nos permiten usar valores arbitrarios como indices
 */

let mapOne = new Map(); // Empty map
let mapTwo = new Map([  // Un nuevo mapa inicializado con claves de tipo string y mapeadas a 
    ["one",1],          // numeros
    ["two",2]
]); 
let mapThree = new Map(mapTwo); // Copia de un map
let obj = {x:1,y:2}
let mapFour = new Map(Object.entries(obj)); // Igual a new Map(["x",1],["y":1]);

let mapFive = new Map();
console.log(mapFive.size);

mapFive.set("one",1);
mapFive.set("two",2);
console.log(mapFive.size);

console.log(mapFive.get("two"));
mapFive.set("one",true);
console.log(mapFive.get("one"));
console.log(mapFive.has("one"));
console.log(mapFive.has(true)); // El has solo busca claves
mapFive.delete("one");
console.log(mapFive.size);
mapFive.clear();
console.log(mapFive.size);
mapFive.set(["one",1]).set(["two",2]).set(["three"],3);
console.log(mapFive.size);

let mapSix = new Map();
mapSix.set({},1);
mapSix.set({},2);
console.log(mapSix.size);
console.log(mapSix.get({}));
mapSix.set("one",undefined);
console.log(mapSix.get("one"));
console.log(mapSix.get("two"));
let mapSeven = new Map();
mapSeven.set(["one"],1).set(["two"],2).set(["three"],3);
console.log(...[mapSeven]);
for(let [key, value] of mapSeven){
    console.log(`llave: ${key} valor: ${value}`);
}

console.log([...mapSeven.keys()]); //Traemos las claves

console.log([...mapSeven.values()]); //Traemos los valores

console.log([...mapSeven.entries()]);

mapSeven.forEach((key,value)=>{
    console.log(`${key}: ${value}`);
});
