
const { json } = require('express');
const express = require('express');
const {createRoutes} = require('./routes/routes');
const port = 9300;
const myserver = express();

createRoutes(myserver);
myserver.use(express.json());

myserver.use((req,res)=>{
    res.status(404).send({message: 'No se encontró nada acá'});
})


myserver.listen(port, ()=>{
    console.log(`Escuchando en el pruerto ${port}`);
});