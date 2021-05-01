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
      
      const orderRepo = getRepository(AppOrder);
      
      const order = await orderRepo.create({
        start_date,end_date,price,score_caregiver,score_client,comment,description
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
//   async update(req: Request, res: Response, next: NextFunction) {
//     try {
//       const orderRepo = getRepository(AppOrder);
//       const name = req.body.name
//       const email = req.body.email 
//       const password = req.body.password 
//       const description = req.body.description 
//       const imageURL = req.body.imageURL 
//       const isCaregiver = req.body.isCaregiver
//       const address = req.body.address
//       const note = req.body.note

//       let order = await orderRepo.findOne({ email: email })
      
//       if (!order) {
//         res.locals.status = 400
//         res.locals.data = "Usuário não encontrado"
//         return next()
//       }
//       order.note = note ? note : order.note
//       order.name = name ? name : order.name
//       order.password = password ? password : order.password
//       order.description = description ? description : order.description
//       order.imageURL = imageURL ? imageURL : order.imageURL
//       order.isCaregiver = isCaregiver == null ? isCaregiver : order.isCaregiver
//       order.address = address ? address : order.address
      
//       let updatedOrder = await orderRepo.save(order)

//       res.locals.status = 200;
//       res.locals.data = updatedOrder;
//       return next()
//     }

//     catch(error) {
//       return next(error);
//     }
//   }
//   async list(req: Request, res: Response, next: NextFunction) {
//     try {
//       const orderRepo = getRepository(AppOrder);
//       const orders = await orderRepo.find({ where: {isCaregiver: true} ,select: ['id', 'name', 'email', 'isCaregiver', 'imageURL', 'address', 'description', 'note'] });
      
//       res.locals.data = orders;
//       res.locals.status = 200;

//       return next();
//     } catch (error) {
//       return next(error);
//     }
//   }

//   async findByEmail(req: Request, res: Response, next: NextFunction) {
//     try {
//       const orderRepo = getRepository(AppOrder);
//       const email = req.query.email

//       if (!email) {
//         return next({ status: 400, message: "O email do usuário não foi fornecido"});
//       }

//       const order = await orderRepo.findOne({where: {email: email}})
      
//       res.locals.data = order
//       res.locals.status = 200

//       return next()

//     } catch (error) {
//       return next(error)
//     }
//   }
}

export default new OrderController();
