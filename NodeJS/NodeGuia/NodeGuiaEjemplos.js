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
