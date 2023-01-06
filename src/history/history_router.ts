import { historyController } from './history_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new historyController();
        
        router.get('/', controller.getHistory);
        router.post('/', controller.postHistory);
        router.put('/:id', controller.putHistory);
        router.delete('/:id', controller.deleteHistory);
        
        export default router;