import { Router } from 'express';
import appUserRouter from './appUserRouter.routes';
import appAuthentcationRouter from './appAuthenticationRouter.routes';
import appPlantRouter from './appPlantRouter.routes';
const routes = Router();

routes.use('/user', appUserRouter);
routes.use('/login', appAuthentcationRouter);
routes.use('/plant', appPlantRouter);


export default routes;
