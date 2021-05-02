import e, { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import {AppOrder} from '@models/AppOrder';

class OrderController {

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const start_date = req.body.start_date
      const end_date = req.body.end_date
      const price = req.body.price 
      const score_caregiver = req.body.score_caregiver 
      const score_client = req.body.score_client 
      const comment = req.body.comment
      const description = req.body.description
      const id_client = req.body.id_client
      const id_caregiver = req.body.id_caregiver
      const order_status = req.body.order_status
      const orderRepo = getRepository(AppOrder);
      
      const order = await orderRepo.create({
        start_date,end_date,price,score_caregiver,score_client,comment,description,id_client,id_caregiver,order_status
      });

      const newOrder = await orderRepo.save(order);

      res.locals.status = 201;
      res.locals.data = newOrder;
      return next();
      
    } catch (error) {
      res.locals.status = 400
      res.locals.data = "Há campos faltando"
      return next(error);
    }
  }
  async list(req: Request, res: Response, next: NextFunction) {
        try {
        const orderRepo = getRepository(AppOrder);
        const orders = await orderRepo.find({select: ['id', 'start_date', 'end_date', 'price', 'score_caregiver', 'score_client', 'comment', 'description','id_client','id_caregiver','order_status']});
        
        res.locals.data = orders;
        res.locals.status = 200;

        return next();
        } catch (error) {
        return next(error);
        }
    }

}

export default new OrderController();
