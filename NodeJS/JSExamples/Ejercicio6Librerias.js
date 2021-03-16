/**
 * Clase MathError
 */
class MathError extends Error {
    constructor(oper, op1, op2, message) {
        super(`Error en la operacion: ${oper}, con los operandos ${op1} y ${op2}: ` + message);
        this.name = `Error de ${oper}`;
    }
}



function calcularPositivos(oper,op1, op2) {
    if("+"===oper){
        if (op1 < 0 || op2 < 0) {
            throw new MathError('Suma', op1, op2,'Los operadores no pueden ser negativos');
        }
        return op1+op2;
    }
    if("-"===oper){
        if (op2 > op1 ) {
            throw new MathError('Resta', op1, op2,'El segundo operador no puede ser mayor al primero');
        }
        return op1-op2;
    }
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

try {
    console.log(calcularPositivos('-',2, 1));    
} catch (error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);

}


//console.log(validarFecha(new Date(2022,1,1)));
