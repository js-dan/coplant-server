"use strict";

require("reflect-metadata");

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(3001, () => {
  console.log('🏃 Running Server');
});