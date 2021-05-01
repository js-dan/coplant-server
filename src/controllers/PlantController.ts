import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import AppPlantRepository from '../repositories/AppPlantRepository';

class PlantController {
  async createAppPlant(req: Request, res: Response, next: NextFunction) {
    try {
      const appPlantRepository = getCustomRepository(AppPlantRepository);

      const { name, imageURL, qtd } = req.body;

      const plant = await appPlantRepository.createAppPlant({ name, imageURL, qtd });

      if (!plant) {
        return next({
          message: 'Planta não cadastrada',
          status: 404,
        });
      }

      res.locals.data = plant;
      res.locals.status = 200;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const userRepo = getCustomRepository(AppPlantRepository);
      const { name } = req.body;
      const { imageURL } = req.body;
      const { qtd } = req.body;

      const plant = await userRepo.findOne({ name });

      if (!plant) {
        res.locals.status = 400;
        res.locals.data = 'Usuário não encontrado';
        return next();
      }

      plant.name = name || plant.name;
      plant.imageURL = imageURL || plant.imageURL;
      plant.qtd = qtd || plant.qtd;

      const updatedPlant = await userRepo.save(plant);

      res.locals.status = 200;
      res.locals.data = updatedPlant;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('Aqui');
      const PlantRepo = getCustomRepository(AppPlantRepository);
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
