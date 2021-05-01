import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import AppUser from '../models/AppUser';
import AppUserRepository from '../repositories/AppUserRepository';
import jwt from 'jsonwebtoken';

const appAuthentcationRouter = Router();

appAuthentcationRouter.post('/', (req, res, next) => { //Authentication
    const repository = getCustomRepository(AppUserRepository);
    let userPromise = repository.findByName(req.body.name)
    
    userPromise.then((user) => {
      const token = jwt.sign( user.id , process.env.SECRET);
      return res.json({ auth: true, token: token });

    }, (reason) => {
      return res.status(500).json({message: 'Login inválido!'});
    })    
})

appAuthentcationRouter.post('/signout', (req, res, next) => { //Não sei ainda
    let token = req.headers['x-access-token'];

    if (!token) {
      return res.status(401).json({ auth: false, message: 'Não há usuário logado' });
    }
})



export default appAuthentcationRouter;
