import app  from './app.js';

const port = process.env.port;
app.listen(port, ()=>{console.log(`Running on ${port}`)});
