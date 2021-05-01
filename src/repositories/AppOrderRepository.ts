import { EntityRepository, Repository } from 'typeorm';
import {AppOrder} from '../models/AppOrder';

@EntityRepository(AppOrder)
export default class AppOrderRepository extends Repository<AppOrder> {
  public async findByName(comment: string): Promise<AppOrder[]> {
    return this.find({
      where: {
        comment,
      },
    });
  }
}
