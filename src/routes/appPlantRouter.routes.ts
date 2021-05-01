import { Router } from 'express';
import PlantController from '../controllers/PlantController';

const appPlantRouter = Router();

appPlantRouter.route('/')
  .post(PlantController.createAppPlant);

appPlantRouter.route('/:id')
  .get(PlantController.getAppPlant)
  .patch(PlantController.updateAppPlant);

export default appPlantRouter;
