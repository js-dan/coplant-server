import e, { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import AppPlant from '@models/AppPlant';

class PlantController {

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const name = req.body.name
      const imageURL = req.body.imageURL 
      const qtd = req.body.qtd

      const plantRepo = getRepository(AppPlant);
      const nameExist = await plantRepo.findOne({ name:name });

      if (nameExist) {
        res.locals.status = 400
        res.locals.data = "Planta já cadastrado, tente outro!"
        return next()
      }
      
      const plant = await plantRepo.create({
        name, qtd, 
        imageURL: imageURL ? imageURL : "",
      });

      const newPlant = await plantRepo.save(plant);

      res.locals.status = 201;
      res.locals.data = newPlant;
      return next();
      
    } catch (error) {
      res.locals.status = 400
      res.locals.data = "Há campos faltando"
      return next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const userRepo = getRepository(AppPlant);
      const name = req.body.name
      const imageURL = req.body.imageURL 
      const qtd = req.body.qtd


      let plant = await userRepo.findOne({ name:name })
      
      if (!plant) {
        res.locals.status = 400
        res.locals.data = "Usuário não encontrado"
        return next()
      }

      plant.name = name ? name : plant.name
      plant.imageURL = imageURL ? imageURL : plant.imageURL
      plant.qtd = qtd ? qtd : plant.qtd
      
      
      let updatedPlant = await userRepo.save(plant)

      res.locals.status = 200;
      res.locals.data = updatedPlant;
      return next()
    }

    catch(error) {
      return next(error);
    }
  }
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("Aqui")
      const PlantRepo = getRepository(AppPlant);
      const plants = await PlantRepo.find({ select: ['id', 'name', 'imageURL', 'qtd'] });
      
      res.locals.data = plants;
      res.locals.status = 200;

      return next();
    } catch (error) {
      return next(error);
    }
  }

}

export default new PlantController();
