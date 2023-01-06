import { authController } from './auth_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new authController();
        
        router.get('/', controller.getAuth);
        router.post('/', controller.postAuth);
        router.put('/:id', controller.putAuth);
        router.delete('/:id', controller.deleteAuth);
        
        export default router;