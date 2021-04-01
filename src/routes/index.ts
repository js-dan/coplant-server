import { Router } from 'express';
import appUserRouter from './appUserRouter.routes';

const routes = Router();

routes.use('/user', appUserRouter);

export default routes;
