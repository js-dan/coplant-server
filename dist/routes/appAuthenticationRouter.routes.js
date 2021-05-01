"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthenticationController = _interopRequireDefault(require("../controllers/AuthenticationController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appAuthentcationRouter = (0, _express.Router)();
appAuthentcationRouter.post('/', _AuthenticationController.default.signIn, (req, res, next) => {
  //Authentication
  try {
    return res.status(res.locals.status).json(res.locals.data);
  } catch (err) {
    return res.status(res.locals.status).json(res.locals.data);
  }
});
var _default = appAuthentcationRouter;
exports.default = _default;