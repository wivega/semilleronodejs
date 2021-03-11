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

/*
 * Typed Arrays
 * Los elementos de un Typed Array son todos números. Permiten
 * especificar el tipo y el tamaño de los números que se almacenarán
 * en la raiz. Se debe especificar la longitud de una matriz con tipo
 * cuando se crea, y esa longitud nunca puede cambiar.
 * Los elementos de una Typed Array siempre se inicializan a cero
 * cuando se crean.
 */
let bytes = new Uint8Array(1024);    // 1024 bytes
let matrix = new Float64Array(9);    // Matriz 3 x 3 
let points = new Int16Array(3);      // Un punto en un espacion 3-D
let rgba = new Uint8ClampedArray(4); // Un valor de pixel rgba de 4 bytes
let white = Uint8ClampedArray.of(255,255,255,0); // Creamos el color blanco
let ints = Uint32Array.from(white);  // Mismos 4 numeros pero enteros
console.log(Uint8Array.of(1.23, 2.99,45000));

//Referencia opaca
let buffer = new ArrayBuffer(1024*1024);
console.log(buffer.byteLength); // Imprime el tamaño de la memoria (Un MegaByte de memoria)

let asBytes = new Uint8Array(buffer);

let asInt = new Int32Array(buffer);

/* 
 * REGULAR EXPRESSIONS
 *
 * Una expresión regular es un objeto que describe un patrón textual.
 */
//Utilizando literales
let pattern1 = /s$/i;

//Utilizando contructor de RegExp
let pattern2 = new RegExp("s$");  // $ metacaracter especial Bandera (flag en inglés). Va a coincidir con el final de una cadena

/*
 * Metacaracteres en expresiones reguales:
 *
 *     ^  $  .  *  +  ?  =  !  :  |  /  \   ( )  [ ] { }
 * 
 * Caracteres de puntuación  ""  @,  no tienen significado especial.
 * 
 * Clases de caracteres:
 * Una clase de caracter coincide con cualquier caracter que contenga los corchetes.
 * \w :  Cualquier carácter de palabra ASCII. Equivalente a [a-zA-Z0-9_].
 * \W :  Cualquier carácter que no sea un carácter de palabra ASCII. Equivalente a [^a-zA-Z0-9_].
 * \s :  Cualquier carácter de espacio en blanco Unicode.
 * \S :  Cualquier carácter que no sea un espacio en blanco Unicode.
 * \d :  Cualquier dígito ASCII. Equivalente a [0-9].
 * \D :  Cualquier carácter que no sea un dígito ASCII. Equivalente a [^0-9].
 * [\b] : Un retroceso literal (caso especial).
 * .  :  Cualquier carácter excepto nueva línea u otro terminador de línea Unicode. O, 
 *      si la expresión regular usa la marca s, entonces un punto coincide con cualquier carácter, 
 *      incluidos los terminadores de línea.
 * 
 */

let pattern3 = /[abc]/;  // Coincide con cualquiera de las letras a, b o c.

let pattern4 = /[^abc]/; // Coincide con cualquier caracter que no sea a, b o c.

let pattern5 = /[a-z]/;  // Coincide con cualquier caracter en minúscula del alfabeto latino.

let pattern6 = /[a-zA-Z]/;   // Coincide con cualquier caracter en minúscula o mayúsculas del alfabeto latino.

let pattern7 = /[a-zA-Z0-9]/;  // Coincide con cualquier caracter en minúscula o mayúsculas y digitos del alfabeto latino 

let pattern8 = /[...]/;  //Coincide con cualquier caracter entre corchetes

let pattern9 = /[^...]/;  //Coincide con cualquier caracter que no este entre corchetes

/*
 * Repeticiones en expresiones regulares
 *
 * Son patrones más complejos que utilizan una sintaxis que especifica cuántas veces se puede 
 * repetir un elemento.
 * {n,m}: Esto significa que coincide con el elemento anterior al menos n veces, pero no más de m veces.
 * {n,} : Esto significa que coincide con el elemento anterior n o más veces.
 * {n}  : Esto significa que coincide exactamente con n apariciones del elemento anterior.
 * ?    : Esto significa que coincide con cero o una apariciones del elemento anterior. Esto significa que el elemento anterior es opcional.
 *        Esto es similar a colocar: {0,1}
 * +    : Esto significa que coincide con una o más ocurrencias del elemento anterior. Esto equivale a: {1,}
 * *    : Esto significa que coincide con cero o más ocurrencias del elemento anterior. Esto equivale a: {0,}
 */

let pattern10 = /\d/;  // Coincide con un dígito entre 0 y 9.

let pattern11 = /\d\d/;  // Coincide con dos dígito entre 0 y 9.

let pattern12 = /\d{2,4}/; // Coincide ente 2 y no más de 4 digitos.

let pattern13 = /\w{3}\d?/; // Coincide exactamente con 3 caracteres de palabras ASCII  y 1 dígito opcional.

let pattern14 = /\s+java\s+/; // Coincide con java con uno o más espacios antes y despues.

let pattern15 = /[^(]*/;  // Coincide con cero o más caracteres que no sean paréntesis abiertos.

/*
 * Flags
 * 
 * g : Esto significa global. Es decir que pretendemos usarla para encontrar todas las coincidencias dentro de una
 *     cadena en lugar de simplemente encontrar la primera coincidencia.
 * i : Especifica que la coincidencia no debe distinguir entre mayúsculas y minúsculas.
 * m : Especifica que la coincidencia debe realizarse en modo multilínea.
 * s : Es util cuando se trabaja con texto que incluye nuevas líneas. Es similar a la m
 * u : Significa Unicode. Esto hace que la expresión coincida con los puntos de Unicode completos, en lugar de 
 *     coincidir con los valores de 16 bits. Si no se usa esta bandera, las expresiones regulares no funcionarán
 *     bien con textos que utilizan emojis y otros caracteres como caracteres chinos.
 * y : Esta bandera indica que la expresión regular es sticky (pegajosa) debe coincidir al principio de una cadena
 *     o al primer caracter que sigue a la coincidencia anterior.
 */


/*
 * Métodos de String para coincidencia de patrones.
 *
 * search:  Toma un argumento de expresión regular y devuelve la primera subcadena coincidente o -1 si no encuentra coincidencias.
 *          No admite búsquedas globales por lo tanto ignora la bandera g
 * replace: Lo que hace es una operación de búsqueda y reemplazo. Como primer argumento toma una expresión regular, y como segundo 
 *          arqumento, una cadena de reemplazo.
 * match:   Este método toma una expresión regular como único argurmento y devuelve una matriz que 
 *          contiene los resultados de la coincidencia.
 * split:   Divide la cadena en una matriz utilizando el argumento como separador.
 */

console.log("JavaScript".search(/script/ui));

console.log("Python".search(/script/ui));

let text = "javascript";

text = text.replace(/javascript/gi, "JavaScript");

console.log(text);

let times = "15 times 15 is 225";

//Se tranforman los digitos en Hexagesimal
console.log(times.replace(/\d+/gu, n => parseInt(n).toString(16))); 

//Se tranforman los digitos en Binario
console.log(times.replace(/\d+/gu, n => parseInt(n).toString(2))); 

let text2 = "7 plus 8 equals 15";

console.log(text2.match(/\d+/g));

let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text3 = "Visit my blog at http://www.amazon.com/blogs";

let match1 = text3.match(url);
let fullUrl ,host, path, protocol;
if(match1 !== null){
    fullUrl = match1[0];
    protocol = match1[1];
    host = match1[2];
    path = match1[3];
}

console.log(match1.index);

console.log(fullUrl);
console.log(protocol);
console.log(host);
console.log(path);

console.log("123,456,789".split(","));

console.log("1, 2, 3, \n4, 5".split(/\s*,\s*/));

const htmlTag = /<([^>]+)>/;  // < followed by one or more non->, followed by >
console.log("Testing<br/>1,2,3".split(htmlTag)); 