"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _appUserRouter = _interopRequireDefault(require("./appUserRouter.routes"));

var _appAuthenticationRouter = _interopRequireDefault(require("./appAuthenticationRouter.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/user', _appUserRouter.default);
routes.use('/login', _appAuthenticationRouter.default);
var _default = routes;
exports.default = _default;