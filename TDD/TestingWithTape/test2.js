const test = require('tape'); // assign the tape library to the variable "test"
/*
test('should return -1 when the value is not present in Array', function (t) {
  t.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so passes
  t.end();
});
*/



function sum(a, b) {
    return a + b;
}

test('sum should return the addition of two numbers', function (t) {
    t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
    t.end();
});