import { Request, Response, NextFunction } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import AppUser from '@models/AppUser';
import jwt from 'jsonwebtoken';
import AppUserRepository from '../repositories/AppUserRepository';

class AuthenticationController {
  async tokenVerify(req, res, next){
    const token = req.headers['x-access-token'];
    
    if (!token) {
      return res.status(401).json({ auth: false, message: 'No token provided.'});
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      
      if (err) {
        return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      } 
      
      req.headers['userId'] = decoded.id;
      next();
    });
  }
  
  async signIn(req, res, next) {
    const repository = getRepository(AppUser);

    const email = req.body.email
    const password =  req.body.password

    if (!email || !password) {
      res.locals.status = 400
      res.locals.data = "Email ou senha não fornecidos"
      return next()
    }

    const user = await repository.findOne({where: {email: email, password: password}})
    
    if (!user) {
      res.locals.status = 400
      res.locals.data = "Usuário ou senha não correspondentes"
      return next()
    }

    const token = jwt.sign(user.id, process.env.SECRET)
    
    res.locals.status = 200
    res.locals.data = {auth: true, token: token}
    return next()
  }
}

export default new AuthenticationController();
