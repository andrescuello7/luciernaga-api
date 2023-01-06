import { userController } from './user_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new userController();
        
        router.get('/', controller.getUser);
        router.post('/', controller.postUser);
        router.put('/:id', controller.putUser);
        router.delete('/:id', controller.deleteUser);
        
        export default router;