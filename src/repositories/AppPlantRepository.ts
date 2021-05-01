import { EntityRepository, Repository } from 'typeorm';
import AppPlant from '../models/AppPlant';

@EntityRepository(AppPlant)
export default class AppPlantRepository extends Repository<AppPlant> {
  public async findByName(name: string): Promise<AppPlant> {
    return this.findOne({
      where: {
        name,
      },
    });
  }


}