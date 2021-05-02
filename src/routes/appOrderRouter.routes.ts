import { Router } from 'express';
import OrderController from '@controllers/OrderController';

const appOrderRouter = Router();

appOrderRouter.post('/create', OrderController.create, async (req, res) => {
    try {
      return res.status(res.locals.status).json(res.locals.data);
    } catch (err) {
      return res.status(res.locals.status).json(res.locals.data);
    }
  });
  
// appOrderRouter.get('/',OrderController.list, async (req, res) => { //Get order list
//     try {
//       return res.status(res.locals.status).json(res.locals.data);
//     } catch (err) {
//       return res.status(res.locals.status).json(res.locals.data);
//     }
//   })
  
  export default appOrderRouter;
  
