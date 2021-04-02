const test = require("tape");
const calculator = require("./calculator");

test("Prueba de suma de dos enteros", t => {
    t.plan(1);
    t.equal(calculator.add(1, 2), 3);
});

test("Obtener suma de dos string", t => {
    t.plan(1);
    t.equal(calculator.add(1, 2), 3);
});

test("Metodo ok", t => {
    t.plan(1);
    t.ok("texto", "Estado ok");
});

test("Metodo notOk", t => {
    t.plan(1);
    t.notOk(false, "Estado no Ok");
});

test("Metodo error", t => {
    t.plan(1);
    t.error(0, "Ha ocurrido un error");
});

test("Metodo notEqual", t => {
    t.plan(1);
    t.notEqual(true, false, "Estado no son Iguales");// devuelve true o false si no son iguales los parametros 1 y 2
});

test("Metodo equal", t => {
    t.plan(1);
    t.equal("Texto", "Texto", "Estado son Iguales");// devuelve true o false si son iguales los parametros 1 y 2
});

test("Metodo looseEqual", t => {
    t.plan(1);
    t.looseEqual("2", 2, "Estado looseEqual");
});

test("Metodo deepEqual", t => {
    t.plan(1);
    t.deepEqual("2", "2", "Estado deepEqual");
});

// ********* TEST CALCULATOR **********

test("Prueba Resta", t => {
    t.plan(1);
    t.equal(calculator.resta(3, 2), 1);
});

test("Prueba Multiplica", t => {
    t.plan(1);
    t.equal(calculator.multiplica(1, 2), 2);
});

test("Prueba divide", t => {
    t.plan(1);
    t.equal(calculator.divide(4, 2), 2);
});
/*
// ********  *****************
test("Prueba match", t => {
    t.plan(1);
    t.match("xx","xx","Estado match");
});
*/













