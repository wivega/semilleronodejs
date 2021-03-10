/*
 * Ejemplo 2 de las librerias de javascritp: Map
 */
let mapaHeroes = new Map();
let heroesLJusticia = {
    1:"Superman",
    2:"Mujer maravilla",
    3:"Acuaman"
};

//mapaHeroes.set("Liga-Justicia", Object.entries(heroesLJusticia));
mapaHeroes.set("Liga-Justicia",  Object.entries(heroesLJusticia));
mapaHeroes.set("Titanes", { 1: 'Cyborg', 
2: 'Robin', 
3: 'Raven' });

let mapaXmen = new Map([ 
    [1,"Profesor X"],           
    [2,"Jean Gray",],
    [3,"Wofverine"]
]);

mapaHeroes.set("Marvel", mapaXmen);
/*
mapaHeroes.forEach((key, value)=> {
   console.log( `${key}: ${value}`);
});

*/

console.log("TODO EL MAP CREADO DE SUPER HEROES");
console.log(mapaHeroes);
console.log("------------------------------------------------------------");
console.log("Impresos con el foreach clave valor");
mapaHeroes.forEach((key, value)=> {
    console.log( `${key}: ${value}`);
 });
console.log("------------------------------------------------------------");
console.log("UNIVERSO DE SUPER HEROES: (llaves)");
console.log(...mapaHeroes.keys());

console.log("NOMBRE DE SUPER HEROES: (valores)");
console.log(...mapaHeroes.values());

console.log("------------------------------------------------------------");
console.log("ESTA NO ME SIRVIÓ COMO PENSÉ :(");
try {
    console.log("mapaHeroes.get(\"Titanes\").set(4,'Starfire')");
    mapaHeroes.get("Titanes").set(4,'Starfire');
} catch (error) {
    console.log(error);
}

console.log("------------------------------------------------------------");
console.log("ESTA SI SIRVIÓ :) ");
console.log("mapaHeroes.get(\"Marvel\").set(4,'Gambito');");
mapaHeroes.get("Marvel").set(4,'Gambito');
console.log(mapaHeroes.get("Marvel"));
/*
mapaHeroes.set();
mapaHeroes.set();
mapaHeroes.set("Gotica","Batman");
mapaHeroes.set("Detroit","Cyborg");
mapaHeroes.set("Detroit","Cyborg");
*/