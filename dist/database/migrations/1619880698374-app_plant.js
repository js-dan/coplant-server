"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appPlant1619880698374 = void 0;

class appPlant1619880698374 {
  async up(queryRunner) {
    await queryRunner.query(`
        CREATE TABLE "app_plant" 
        ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "name" character varying NOT NULL,
        "imageURL" character varying,
        "qtd" integer NOT NULL),
        CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))
        `);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "app_plant"`);
  }

}

exports.appPlant1619880698374 = appPlant1619880698374;