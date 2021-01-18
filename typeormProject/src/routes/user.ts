import { Router } from 'express';
import { UserControllers } from '../controllers/user'

const router = Router();

router.get('/users', UserControllers.getUsers);
router.get('/users/:id', UserControllers.getUser);
router.post('/users', UserControllers.postUser);
router.put('/users/:id', UserControllers.updateUser);
router.delete('/users/:id', UserControllers.deleteUser);

export default router