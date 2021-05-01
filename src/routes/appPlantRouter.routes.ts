import AuthenticationController from '@controllers/AuthenticationController';
import PlantController from '@controllers/PlantController';
import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import AppUser from '../models/AppUser';
import AppUserRepository from '../repositories/AppUserRepository';

const appPlantRouter = Router();

appPlantRouter.post('/create', PlantController.create, async (req, res) => {
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
});

appPlantRouter.get('/', AuthenticationController.tokenVerify ,PlantController.list, async (req, res) => { //Get caregiver list
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
})

appPlantRouter.patch('/update', PlantController.update, async(req, res) => {
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
})


export default appPlantRouter;
