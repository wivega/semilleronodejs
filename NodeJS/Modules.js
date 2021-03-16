const modules = {};

function require(moduleName) {
    return modules[moduleName];
}

modules['stats.js'] = (function () {
    const exports = {};

    const sum = (x, y) => x + y;
    const square = x => x * x;

    exports.mean = function (data) {
        return data.reduce(sum) / data.length;
    };

    exports.stdDev = function (data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    };

    return exports;
}());


modules['calculadora.js'] = (function () {

    const exports = {};

    exports.multiplicar = function (x, y) { return x * y };
    exports.restar = function (x, y) { return x - y };
    exports.dividir = function (x, y) { return x / y };
    exports.sumar = function (x, y) { return x + y };

    return exports;

}());


const stats = require('stats.js');
console.log(stats.mean([1,2,3,9]));
//console.log(stats.stdDev([1,2,4,5,6]));

const calculadora = require('calculadora.js');
console.log(calculadora.sumar(1,4));
