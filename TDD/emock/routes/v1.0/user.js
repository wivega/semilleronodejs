import  express from 'express';
import { getUsers, getUserById } from '../../src/controller/user.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const userList = await getUsers();
    res.status(200).json(userList);
});

router.get('/:userid', async (req, res) => {
    const userToFind = req.params.userid;
    const userResult  = await getUserById(userToFind);
    res.status(200).json(userResult);
});

export default router;