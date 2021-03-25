const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => {
  console.log('Server ready')
  console.log(process.pid); //El Id del proceso 
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})


/// Enviar con otra aplicacion de Node la siguiente instrucción:
process.kill(process.pid, 'SIGTERM')