import { Router } from 'express';
import appUserRouter from './appUserRouter.routes';
import appOrderRouter from './appOrderRouter.routes';
const routes = Router();

routes.use('/user', appUserRouter);
routes.use('/order',appOrderRouter);
export default routes;
