import  express  from "express";

import  router  from "../routes/v1.0/index.js";

const app = express();
//app.disable('');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',router)

export default app;