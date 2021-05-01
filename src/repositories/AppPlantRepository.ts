import Joi from 'joi';
import { EntityRepository, Repository } from 'typeorm';
import AppPlant from '../models/AppPlant';

type AppPlantInput = {
  name?: string;
  imageURL?: number;
  qtd?: number;
}

const AppPlantSchema = Joi.object({
  name: Joi.string().required(),
  imageURL: Joi.string().required(),
  qtd: Joi.number().required(),
});

@EntityRepository(AppPlant)
export default class AppPlantRepository extends Repository<AppPlant> {
  async createAppPlant(appPlant: AppPlantInput): Promise<string> {
    try {
      const ValidAppPlant = await AppPlantSchema.validateAsync(appPlant);
      return this.save(ValidAppPlant);
    } catch (error) {
      return error;
    }
  }

  async getAppPlant(id?: string): Promise<AppPlant[]> {
    try {
      if (id) {
        return this.find({ id });
      }
      return this.find();
    } catch (error) {
      return error;
    }
  }

  async updateAppPlant(id: string, data: any): Promise<any> {
    try {
      this.update(id, data);
      return 'Plant updated';
    } catch (error) {
      return error;
    }
  }

  async deleteAppPlant(id: string): Promise<string> {
    try {
      this.delete(id);
      return 'Plant deleted';
    } catch (error) {
      return (error);
    }
  }
}
