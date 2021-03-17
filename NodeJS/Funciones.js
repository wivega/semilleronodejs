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
//Declaración de función
function factorial(x) {
    if (x <= 1) {
        return 1;
    }

    return x * factorial(x-1);
}

console.log(factorial(5));

//Expresión de función
const factorial2 = function factural2(x){
    if (x <= 1) {
        return 1;
    }
    return x * factorial2(x-1);
}

console.log(factorial2(6));

