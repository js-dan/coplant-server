import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import AppUser from '../models/AppUser';
import AppUserRepository from '../repositories/AppUserRepository';

const appUserRouter = Router();

appUserRouter.post('/new', async (req, res) => {
  let userName = req.body.name
  let userPhone = req.body.phone

  let user = new AppUser()
  user.name = userName
  user.phone = userPhone
  user.latitude = 0
  user.longitude = 0

  try {
    const repo = getRepository(AppUser);
    const response = await repo.save(user);
    return res.status(201).json(response);

  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

appUserRouter.get('/test', async (req, res) => {
  res.send("foi");
});

appUserRouter.get('/', async (req, res) => {
  res.json(await getRepository(AppUser).find());
});

appUserRouter.get('/:name', async (req, res) => {
  const repository = getCustomRepository(AppUserRepository);
  const response = await repository.findByName(req.params.name);
  res.json(res);
});

export default appUserRouter;
