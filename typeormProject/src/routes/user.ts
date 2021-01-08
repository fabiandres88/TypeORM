import { Router } from 'express';
import { getUser, getUsers, postUser, updateUser, deleteUser } from '../controllers/user'


const router = Router();

router.get('/users',getUsers);
router.get('/users/:id', getUser);
router.post('/users', postUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router