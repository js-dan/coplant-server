import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import AppUser from '@models/AppUser';

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        cpfUser,
        email,
        password,
        permissionRole,
      } = req.body;

      const userRepo = getRepository(UserModel);

      const emailExist = await userRepo.findOne({ email });
      if (emailExist) return next({ status: 400, message: messages.emailAlredyExist });

      if (!cpf.isValid(cpfUser)) return next({ status: 400, message: messages.cpfInvalid });

      const cpfExist = await userRepo.findOne({ cpf: cpfUser });

      if (cpfExist) return next({ status: 400, message: messages.cpfRegistered });

      const hash = await bcrypt.hash(password, 10);
      const user = await userRepo.create({
        name,
        cpf: cpfUser,
        email,
        password: hash,
        permissionRole,
      });

      const newUser = await userRepo.save(user);
      newUser.password = '';

      const data = {
        user: newUser,
        token: generateToken({ id: newUser.id }),
      };
      res.locals.status = 201;
      res.locals.data = data;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const userRepo = getRepository(UserModel);

      const users = await userRepo.find({ select: ['id', 'name', 'email', 'cpf', 'permissionRole', 'created_at', 'updated_at'] });

      res.locals.data = users;
      res.locals.status = 200;

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new UserController();
