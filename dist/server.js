"use strict";

var _app = _interopRequireDefault(require("./app"));

require("reflect-metadata");

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(3001, () => {
  console.log('🏃 Running Server');
});