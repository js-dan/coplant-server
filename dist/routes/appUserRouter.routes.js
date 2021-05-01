"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AuthenticationController = _interopRequireDefault(require("../controllers/AuthenticationController"));

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appUserRouter = (0, _express.Router)();
appUserRouter.post('/create', _UserController.default.create, async (req, res) => {
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
});
appUserRouter.get('/', _AuthenticationController.default.tokenVerify, _UserController.default.list, async (req, res) => {
  //Get caregiver list
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
});
appUserRouter.patch('/update', _AuthenticationController.default.tokenVerify, _UserController.default.update, async (req, res) => {
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
});
appUserRouter.get('/email', _AuthenticationController.default.tokenVerify, _UserController.default.findByEmail, async (req, res) => {
  //Read
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
});
var _default = appUserRouter;
exports.default = _default;