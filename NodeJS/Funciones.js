/**
 * Funciones
 * 
 * Es un bloque de códgo JavaScript que se define una vez, pero que puede ejecutarse tantas 
 * veces como se desee.
 * Parametro es cuando se define la función.
 * Argumento es cuando se pasan valores a la función.
 * 
 * Las funciones en en JS son objetos: como son objetos podemos establecer propiedades
 * también podemos invocar otras funciones, las definiciones de funci´pon se pueden
 * anidar dentro de otras funciones.
 * Las funciones que están anidades tienen acceso a cualquier variable de la función
 * en la que estan anidadas.
 * 
 * Hay tres formas en las que se pueden definir funciones:
 * En ES6 se definen lo que son las funciones flecha (Lambda)
 */


//Declaración de función: Existen inmediatamente, pueden llamarse en cualquier punto.
function factorial(x) {
    if (x <= 1) {
        return 1;
    }

    return x * factorial(x-1);
}

console.log(factorial(5));

/**
 * Expresión de función. 
 * 
 * Las funciones de expresion solo existen cuando se realiza la expresión. 
 * No pueden llamarse antes de la definición de la expresión.
 * Buena practica: Las expresiones de función hacerlas como const
 * 
 */
                     
//
const factorial2 = function factural2(x){
    if (x <= 1) {
        return 1;
    }
    return x * factorial2(x-1);
}


console.log(factorial2(6));

const cuadrado = function(x){
    return x*x;
}


console.log(cuadrado(12));

//expresión que se autoinvoque

let cuadradoV2 = (function(x){
    return x*x;
}(8));
console.log(cuadradoV2);

//

//
/**
 * Funciones flechas o lambdas.
 * 
 * son tambien expresiones de función, con la diferencia de que son más compactas.
 * 
 */

const suma = (x,y) => {
    return x+y;
};
console.log(suma(2,3));

//La anterior función más compacta
const sumaV2 = (x,y) => x+y;

//Con un solo parámetro (no requiere el paréntesis)
const polinomio = x => x*x + 2*x +3;
console.log(polinomio(5));

//Función lambda sin parámetro.
const devolverConstante = () => 10;
console.log(devolverConstante());


