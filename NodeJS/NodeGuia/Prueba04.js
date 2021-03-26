/**
 * Utilidades del módulo console en NodeJS
 */

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})
//---------------------------------------------------------------------------------------------------------------------------------------------
const args = require('minimist')(process.argv.slice(2))
args['name'] //joe
//---------------------------------------------------------------------------------------------------------------------------------------------
const x = 'x'
const y = 'y'
console.log(x, y)
//---------------------------------------------------------------------------------------------------------------------------------------------
console.log('My %s has %d years', 'cat', 2)
//---------------------------------------------------------------------------------------------------------------------------------------------
const x1 = 1
const y1 = 2
const z1 = 3
console.count(
'The value of x is ' + x1 + 
' and has been checked .. how many times?'
)
console.count(
'The value of x is ' + x1 + 
' and has been checked .. how many times?'
)
console.count(
'The value of y is ' + y1 + 
' and has been checked .. how many times?'
)
//---------------------------------------------------------------------------------------------------------------------------------------------
const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
console.count(fruit)
})
apples.forEach(fruit => {
console.count(fruit)
})
//---------------------------------------------------------------------------------------------------------------------------------------------
const function2 = () => console.trace();
const function1 = () => function2();
function1();
//---------------------------------------------------------------------------------------------------------------------------------------------
const doSomething = () => {
setTimeout(()=>{console.log('Here!');},1000);
console.log('test');
}

const measureDoingSomething = () => {
console.time('doSomething()')
doSomething();
console.timeEnd('doSomething()');
}

measureDoingSomething()