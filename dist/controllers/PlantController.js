"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppPlantRepository = _interopRequireDefault(require("../repositories/AppPlantRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PlantController {
  async createAppPlant(req, res, next) {
    try {
      const appPlantRepository = (0, _typeorm.getCustomRepository)(_AppPlantRepository.default);
      const {
        name,
        imageURL,
        qtd
      } = req.body;
      const plant = await appPlantRepository.createAppPlant({
        name,
        imageURL,
        qtd
      });

      if (!plant) {
        return next({
          message: 'Planta não cadastrada',
          status: 404
        });
      }

      res.locals.data = plant;
      res.locals.status = 200;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getAppPlant(req, res, next) {
    try {
      const {
        id
      } = req.params;
      const appPlantRepository = (0, _typeorm.getCustomRepository)(_AppPlantRepository.default);

      if (id) {
        const [appPlant] = await appPlantRepository.getAppPlant(id);

        if (!appPlant) {
          return next({
            message: 'Produto não cadastrado',
            status: 404
          });
        }

        res.locals.data = appPlant;
        res.locals.status = 200;
      } else {
        const producappPlant = await appPlantRepository.getAppPlant();
        res.locals.data = producappPlant;
        res.locals.status = 200;
      }

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async updateAppPlant(req, res, next) {
    try {
      const data = req.body;
      const {
        id
      } = req.params;
      const appPlantRepository = (0, _typeorm.getCustomRepository)(_AppPlantRepository.default);
      const [appPlant] = await appPlantRepository.findByIds([id]);

      if (!appPlant) {
        return next({
          message: 'Planta não cadastrada',
          status: 404
        });
      }

      const updateInfos = await appPlantRepository.updateAppPlant(id, data);

      if (!updateInfos) {
        return next({
          message: 'Informação não atualizada, tentar novamente',
          status: 404
        });
      }

      if (data.name) {
        appPlant.name = data.name;
      }

      if (data.qtd) {
        appPlant.qtd = data.qtd;
      }

      if (data.imageURL) {
        appPlant.imageURL = data.imageURL;
      }

      res.locals.data = appPlant;
      res.locals.message = updateInfos;
      res.locals.status = 200;
      return next();
    } catch (error) {
      return next(error);
    }
  }

}

var _default = new PlantController();

exports.default = _default;