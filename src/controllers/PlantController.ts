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

  async getAppPlant(req:Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const appPlantRepository = getCustomRepository(AppPlantRepository);

      if (id) {
        const [appPlant] = await appPlantRepository.getAppPlant(id);
        if (!appPlant) {
          return next({
            message: 'Produto não cadastrado',
            status: 404,
          });
        }
        res.locals.data = appPlant;
        res.locals.status = 200;
      } else {
        const producappPlant = await appPlantRepository.getAppPlant();
        res.locals.data = producappPlant;
        res.locals.status = 200;
      }
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async updateAppPlant(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const { id } = req.params;
      const appPlantRepository = getCustomRepository(AppPlantRepository);
      const [appPlant] = await appPlantRepository.findByIds([id]);
      if (!appPlant) {
        return next({
          message: 'Planta não cadastrada',
          status: 404,
        });
      }
      const updateInfos = await appPlantRepository.updateAppPlant(id, data);
      if (!updateInfos) {
        return next({
          message: 'Informação não atualizada, tentar novamente',
          status: 404,
        });
      }

      if (data.name) { appPlant.name = data.name; }
      if (data.qtd) { appPlant.qtd = data.qtd; }
      if (data.imageURL) { appPlant.imageURL = data.imageURL; }

      res.locals.data = appPlant;
      res.locals.message = updateInfos;
      res.locals.status = 200;
      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new PlantController();
