import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import AppUser from '../models/AppUser';
import AppUserRepository from '../repositories/AppUserRepository';
import jwt from 'jsonwebtoken';
import AuthenticationController from '@controllers/AuthenticationController';

const appAuthentcationRouter = Router();

appAuthentcationRouter.post('/', AuthenticationController.signIn, (req, res, next) => { //Authentication
    try {
      return res.status(res.locals.status).json(res.locals.data);
    } catch (err) {
      return res.status(res.locals.status).json(res.locals.data);
    }
})

export default appAuthentcationRouter;
