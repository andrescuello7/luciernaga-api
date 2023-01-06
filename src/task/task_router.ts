import { taskController } from './task_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new taskController();
        
        router.get('/', controller.getTask);
        router.post('/', controller.postTask);
        router.put('/:id', controller.putTask);
        router.delete('/:id', controller.deleteTask);
        
        export default router;