const {getAllUsers, getUserById, createUser} = require('../controller/UserController');
const createRoutes = (app)=> {
    app.get('/users', getAllUsers);
    app.get('/user/:id', getUserById);
    app.post('/users', createUser);
};
module.exports={createRoutes};