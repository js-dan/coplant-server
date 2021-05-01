import { Router } from 'express';
import appUserRouter from './appUserRouter.routes';
import appAuthentcationRouter from './appAuthenticationRouter.routes';
import appPlantRouter from './appPlantRouter.routes';
import appOrderRouter from './appOrderRouter.routes';
const routes = Router();

routes.use('/user', appUserRouter);
routes.use('/login', appAuthentcationRouter);
routes.use('/plant', appPlantRouter);
routes.use('/order',appOrderRouter);
export default routes;
