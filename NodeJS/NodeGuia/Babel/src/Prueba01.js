import { createServer } from 'http'

const hostname = '127.0.0.1'
//Linux
//export PORT=3000
//Windows
//SET PORT=3000
const port = process.env.PORT

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
})  //Crea un servidor con NodeJS

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

//Ejemplo de polyfills
Promise.resolve().finally();

//Otro ejemplo de polyfills
let timingpromise = new Promise((resolve, reject) => {
  setTimeout(function() {
     resolve("Promise is resolved!");
  }, 1000);
});

timingpromise.then((msg) => {
  console.log("%c"+msg, "font-size:25px;color:red;");
});
