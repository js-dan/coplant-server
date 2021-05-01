import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import AppUser from '@models/AppUser';
import jwt from 'jsonwebtoken';

class AuthenticationController {
  async tokenVerify(req, res, next){
    const token = req.headers['x-access-token'];
    console.log("Testando")
    
    if (!token) {
      return res.status(401).json({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      
      if (err) {
        return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      } 
      
      // se tudo estiver ok, salva no request para uso posterior
      req.headers['userId'] = decoded.id;
      next();
    });
}
}

export default new AuthenticationController();
