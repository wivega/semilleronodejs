const express = require('express');
const app = express();
const pug = require('pug');
const LoginHelper = require('./login');
const config = require('../package').config;

app.use(express.urlencoded({extended:true}));
app.get('/login', (req, res)=> {
    res.type('text/html');
    let loginFuncion = pug.compileFile('./templates/login.pug', {});
    let html = loginFuncion();
    res.status(200).send(html);
});
app.post('/login', (req, res)=> {
    res.type('text/html');
    let credentials = {un: req.body.userEmail, pw: req.body.userPassword};
    const login = new LoginHelper(credentials);
    login.validateCredentials().then(data => {
        let welcomeFunction = pug.compileFile('./templates/welcome.pug', {});
        let html = welcomeFunction();
        res.status(200).send(html);
    }).catch(data => {
        let errorFunction = pug.compileFile('./templates/error.pug', {});
        let html = errorFunction();
        res.status(403).send(html);
    });
});
app.listen(config.port);
console.log(`Listening on ${config.port}`);