//---------------------------------------------------------------------------------------------------------------------------------------------
const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
//Linux
//export PORT=3000
//Windows
//SET PORT=3000

//---------------------------------------------------------------------------------------------------------------------------------------------
console.log("Hello, World!");
//---------------------------------------------------------------------------------------------------------------------------------------------
const express = require('express')  //Hay que instalar express
const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

app.listen(3000, () => console.log('Server ready'))
//---------------------------------------------------------------------------------------------------------------------------------------------
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => {
  console.log('Server ready')
  console.log(process.pid);
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
//---------------------------------------------------------------------------------------------------------------------------------------------
process.kill(19626, 'SIGTERM')
//---------------------------------------------------------------------------------------------------------------------------------------------
process.env.NODE_ENV // "development"
console.log(process.env.NODE_ENV); 
//---------------------------------------------------------------------------------------------------------------------------------------------
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
const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + y + 
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
const function2 = () => console.trace()
const function1 = () => function2()
function1()
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
//---------------------------------------------------------------------------------------------------------------------------------------------
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)