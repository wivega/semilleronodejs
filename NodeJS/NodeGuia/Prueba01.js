const http = require('http')

const hostname = '127.0.0.1'
//Linux
//export PORT=3000
//Windows
//SET PORT=3000
const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
})  //Crea un servidor con NodeJS

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
