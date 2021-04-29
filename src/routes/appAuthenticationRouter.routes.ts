import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import AppUser from '../models/AppUser';
import AppUserRepository from '../repositories/AppUserRepository';
import jwt from 'jsonwebtoken';

const appAuthentcationRouter = Router();
// require("dotenv-safe").config();


appAuthentcationRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(AppUser);
    const response = await repo.save(req.body);
    return res.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

appAuthentcationRouter.post('/', (req, res, next) => {
    const repository = getCustomRepository(AppUserRepository);
    let userPromise = repository.findOne(req.body.user)
    
    userPromise.then((user) => {
      const token = jwt.sign( user.id , process.env.SECRET, { expiresIn: 300 });
      return res.json({ auth: true, token: token });

    }, (reason) => {
      return res.status(500).json({message: 'Login inválido!'});
    })    
})

appAuthentcationRouter.get('/', async (req, res) => {
  res.json(await getRepository(AppUser).find());
});

appAuthentcationRouter.get('/:name', async (req, res) => {
  const repository = getCustomRepository(AppUserRepository);
  const response = await repository.findByName(req.params.name);
  res.json(res);
});

export default appAuthentcationRouter;
