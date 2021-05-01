import AuthenticationController from '@controllers/AuthenticationController';
import UserController from '@controllers/UserController';
import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import AppUser from '../models/AppUser';
import AppUserRepository from '../repositories/AppUserRepository';

const appUserRouter = Router();

appUserRouter.post('/create', UserController.create, async (req, res) => {
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
});

appUserRouter.get('/', AuthenticationController.tokenVerify ,UserController.list, async (req, res) => { //Get caregiver list
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
})

appUserRouter.patch('/update', UserController.update, async(req, res) => {
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
})

appUserRouter.get('/email', UserController.findByEmail, async (req, res) => { //Read
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
});

export default appUserRouter;
