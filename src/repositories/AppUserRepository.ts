import { EntityRepository, Repository } from 'typeorm';
import AppUser from '../models/AppUser';

@EntityRepository(AppUser)
export default class AppUserRepository extends Repository<AppUser> {
  public async findByName(name: string): Promise<AppUser> {
    return this.findOne({
      where: {
        name,
      },
    });
  }


}
