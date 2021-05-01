"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppUser = _interopRequireDefault(require("../models/AppUser"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthenticationController {
  async tokenVerify(req, res, next) {
    const token = req.headers['x-access-token'];

    if (!token) {
      return res.status(401).json({
        auth: false,
        message: 'No token provided.'
      });
    }

    _jsonwebtoken.default.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).json({
          auth: false,
          message: 'Failed to authenticate token.'
        });
      }

      req.headers['userId'] = decoded.id;
      next();
    });
  }

  async signIn(req, res, next) {
    const repository = (0, _typeorm.getRepository)(_AppUser.default);
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      res.locals.status = 400;
      res.locals.data = "Email ou senha não fornecidos";
      return next();
    }

    const user = await repository.findOne({
      where: {
        email: email,
        password: password
      }
    });

    if (!user) {
      res.locals.status = 400;
      res.locals.data = "Usuário ou senha não correspondentes";
      return next();
    }

    const token = _jsonwebtoken.default.sign(user.id, process.env.SECRET);

    res.locals.status = 200;
    res.locals.data = {
      auth: true,
      token: token
    };
    return next();
  }

}

var _default = new AuthenticationController();

exports.default = _default;