"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppUser = _interopRequireDefault(require("../models/AppUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  async create(req, res, next) {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const description = req.body.description;
      const imageURL = req.body.imageURL;
      const isCaregiver = req.body.isCaregiver;
      const address = req.body.address;
      const userRepo = (0, _typeorm.getRepository)(_AppUser.default);
      const emailExist = await userRepo.findOne({
        email: email
      });

      if (emailExist) {
        res.locals.status = 400;
        res.locals.data = "E-mail já cadastrado, tente outro!";
        return next();
      }

      const user = await userRepo.create({
        name,
        email,
        password,
        note: 0,
        description,
        imageURL: imageURL ? imageURL : "",
        isCaregiver,
        address
      });
      const newUser = await userRepo.save(user);
      res.locals.status = 201;
      res.locals.data = newUser;
      return next();
    } catch (error) {
      res.locals.status = 400;
      res.locals.data = "Há campos faltando";
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      const userRepo = (0, _typeorm.getRepository)(_AppUser.default);
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const description = req.body.description;
      const imageURL = req.body.imageURL;
      const isCaregiver = req.body.isCaregiver;
      const address = req.body.address;
      const note = req.body.note;
      let user = await userRepo.findOne({
        email: email
      });

      if (!user) {
        res.locals.status = 400;
        res.locals.data = "Usuário não encontrado";
        return next();
      }

      user.note = note ? note : user.note;
      user.name = name ? name : user.name;
      user.password = password ? password : user.password;
      user.description = description ? description : user.description;
      user.imageURL = imageURL ? imageURL : user.imageURL;
      user.isCaregiver = isCaregiver == null ? isCaregiver : user.isCaregiver;
      user.address = address ? address : user.address;
      let updatedUser = await userRepo.save(user);
      res.locals.status = 200;
      res.locals.data = updatedUser;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async list(req, res, next) {
    try {
      const userRepo = (0, _typeorm.getRepository)(_AppUser.default);
      const users = await userRepo.find({
        where: {
          isCaregiver: true
        },
        select: ['id', 'name', 'email', 'isCaregiver', 'imageURL', 'address', 'description', 'note']
      });
      res.locals.data = users;
      res.locals.status = 200;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async findByEmail(req, res, next) {
    try {
      const userRepo = (0, _typeorm.getRepository)(_AppUser.default);
      const email = req.query.email;

      if (!email) {
        return next({
          status: 400,
          message: "O email do usuário não foi fornecido"
        });
      }

      const user = await userRepo.findOne({
        where: {
          email: email
        }
      });
      res.locals.data = user;
      res.locals.status = 200;
      return next();
    } catch (error) {
      return next(error);
    }
  }

}

var _default = new UserController();

exports.default = _default;