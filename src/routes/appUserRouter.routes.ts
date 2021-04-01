import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import AppUser from '../models/AppUser';
import AppUserRepository from '../repositories/AppUserRepository';

const appUserRouter = Router();

appUserRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(AppUser);
    const response = await repo.save(req.body);
    return res.status(201).json(res);
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
