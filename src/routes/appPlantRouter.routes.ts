import { Router } from 'express';
import PlantController from '../controllers/PlantController';

const appPlantRouter = Router();

appPlantRouter.route('/')
  .post(PlantController.createAppPlant);

appPlantRouter.route('/:id')
  .get(PlantController.list)
  .patch(PlantController.update);

export default appPlantRouter;
