/**
 * Ejercicio 5 Librerias JavaScript: Date and Time
 * 
 */

function agregarMinutoFecha(fecha, minuto) {
    //now.setTime(now.getTime()+30000);
    fecha.setTime(fecha.getTime() + minuto * 60000);
    return fecha.toLocaleString();
}

let now = new Date();
let fecha2 = new Date(2021, 2, 12, 11, 40);
console.log(fecha2);
console.log(agregarMinutoFecha(now, 20));

/**
 * Funcion que da un saludo al usuario nombre, dependiendo del parametro de fecha
 * @param {*} fecha2 fecha para el saludo
 * @param {*} nombre nombre del usuario
 * @returns saludo
 */
function saludo(fecha2, nombre) {
    let greeting = "";
    let greeting2 = "";
    if (fecha2.toLocaleTimeString('es-CO').match(/p.\sm/gi) == null) {
        greeting = "Buenas días";
    } else if (fecha2.toLocaleTimeString('es-CO', { hour12: false }).match(/\d{2}/)[0] < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }
    
    greeting2 =
        fecha2.toLocaleString('es-CO', {
            weekday: "long", day: "numeric", month: "long", year: "numeric"
        }) +
        " y son las " + fecha2.getHours() + " horas y " + fecha2.getMinutes() + " minutos";

    return `${greeting}, ${nombre}. Hoy es ${greeting2} de ${greeting.match(/(?<=Buenas\s)\w*[^s]/)}`;

}

console.log(saludo(new Date(2021,2,2,19,23), "Wilman"));




