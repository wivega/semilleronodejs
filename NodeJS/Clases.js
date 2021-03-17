/**
 * Clases en JavaScript
 * En JS una clase es un conjunto de objetos que heredan propiedades del mismo objeto prototipo.
 * El objeto prototipo es la característica central de una clase.
 */

//Forma antigua de crear clases en JS.
//Esto es un constructor que inicializa nuevos objetos.
function Range(from, to) {
    this.from = from;
    this.to = to;
}

//Funciona para rangos textuales, de fecha y númerico. Devuelve verdadero si x está en el rango.
Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },

    [Symbol.iterator]: function* () { //Funcion generadora que hace iterables los rangos de nuestra clase.
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },

    toString: function () {
        return "(" + this.from + " ... " + this.to + ")";
    }
};

let range = new Range(1, 10);
console.log(range.includes(3));
console.log(range.includes(30));
console.log(range.toString());
console.log([...range]);

/**
 * Forma actual de crear clases en JS.
 */

class RangeCurrent {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) {
        return this.from <= x && x <= this.to;
    }

    *[Symbol.iterator]() { //Funcion generadora que hace iterables los rangos de nuestra clase.
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }

    toString() {
        return "(" + this.from + " ... " + this.to + ")";
    }
}

let rangeCurrent = new RangeCurrent(1, 10);
console.log(rangeCurrent.includes(3));
console.log(rangeCurrent.includes(30));
console.log(rangeCurrent.toString());
console.log([...rangeCurrent]);

class Span extends RangeCurrent {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}

let span1 = new Span(1, 10);
console.log(span1.includes(5));
console.log(span1.toString());

//Función como expresión
let square = function (x) {
    return x * x;
}
console.log(square(6));

//Clase como expresión
let Square = class {
    constructor(x) {
        this.area = x * x;
    }
}

console.log(new Square(4).area);

let squareObject = new Square(7);
console.log(squareObject.area);


/**
 * 
 */

class Cuadrado {
    static calcularCuadrado(num) {
        return num * num;
    }

    static texto = "Una palabrita";

    metodoAbstracto() {
        throw new error("Metodo abstracto");
    }

    #propiedadPrivada = 0;
}

let objCuadrado = new Cuadrado();
//console.log(objCuadrado.calcularCuadrado(12));
console.log(Cuadrado.calcularCuadrado(23));
console.log(Cuadrado.texto);
console.log(objCuadrado.propiedadPrivada);