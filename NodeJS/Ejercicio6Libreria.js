/**
 * Clase MathError
 */
class MathError extends Error {
    constructor(oper, op1, op2, message) {
        super(`Error en la operacion: ${oper}, con los operandos ${op1} y ${op2}: ` + message);
    }
}



function sumarPositivos(op1, op2) {
    if (op1 < 0 || op2 < 0) {
        throw new MathError('SUMA', op1, op2,'Los operadores no pueden ser negativos');
    }
    return op1+op2;
}

class DateError extends Error{
    constructor(fecha, message){
        super(`Error en la fecha: ${fecha}: `+message);
    }
}


function validarFecha(fecha){
    if(fecha > new Date()){
        throw new DateError(fecha,'Es mayor a la fecha actual');
    }
    return new Date(fecha.setTime(fecha.getTime()+60000));
}

console.log(sumarPositivos(2, 3));

console.log(validarFecha(new Date(2022,1,1)));
