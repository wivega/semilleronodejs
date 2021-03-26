"use strict";

require("core-js/modules/es.promise.finally.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

var _http = require("http");

var hostname = '127.0.0.1'; //Linux
//export PORT=3000
//Windows
//SET PORT=3000

var port = process.env.PORT;
var server = (0, _http.createServer)(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
}); //Crea un servidor con NodeJS

server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
}); //Ejemplo de polyfills

Promise.resolve().finally(); //Otro ejemplo de polyfills

var timingpromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise is resolved!");
  }, 1000);
});
timingpromise.then(function (msg) {
  console.log("%c" + msg, "font-size:25px;color:red;");
});