import { Router } from 'express';
import appUserRouter from './appUserRouter.routes';
import appAuthentcationRouter from './appAuthenticationRouter.routes';
const routes = Router();

routes.use('/user', appUserRouter);
routes.use('/login', appAuthentcationRouter);

export default routes;
