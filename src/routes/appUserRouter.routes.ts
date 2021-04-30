import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import AppUser from '../models/AppUser';
import AppUserRepository from '../repositories/AppUserRepository';

const appUserRouter = Router();

appUserRouter.post('/create', async (req, res) => { //Create
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

appUserRouter.get('/:name', async (req, res) => { //Read
  const repository = getCustomRepository(AppUserRepository);
  const response = await repository.findByName(req.params.name);
  
  return res.json(response);
});

appUserRouter.get('/all', async (req, res) => { // Not Working
  const repository = getCustomRepository(AppUserRepository);
  let usersPromise = await repository.find()

  return res.status(201).json(usersPromise)
})

appUserRouter.put('/:name', async (req, res) => { //Update
  const repository = getCustomRepository(AppUserRepository);
  let user = await repository.findByName(req.params.name);

  user.phone = req.params.phone ? req.params.phone : user.phone
  
  res.json(user);
});

appUserRouter.delete('/:name', async (req, res) => { //Delete
  const repository = getCustomRepository(AppUserRepository);
  let user = await repository.findByName(req.params.name)
  repository.delete(user)

  return res.status(201).json("Usuário removido com sucesso!")
});

export default appUserRouter;
