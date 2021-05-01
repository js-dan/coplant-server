"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppUser = _interopRequireDefault(require("../models/AppUser"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AppUserRepository = (_dec = (0, _typeorm.EntityRepository)(_AppUser.default), _dec(_class = class AppUserRepository extends _typeorm.Repository {
  async findByName(name) {
    return this.findOne({
      where: {
        name
      }
    });
  }

}) || _class);
exports.default = AppUserRepository;