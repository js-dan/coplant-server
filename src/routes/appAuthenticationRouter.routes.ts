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

appAuthentcationRouter.post('/login', (req, res, next) => {
    if(req.body.user === 'luiz' && req.body.password === '123'){
      const id = 1; 
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
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
