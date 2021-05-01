"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NomeDaMigration1611330564715 = void 0;

class NomeDaMigration1611330564715 {
  constructor() {
    this.name = 'NomeDaMigration1611330564715';
  }

  async up(queryRunner) {
    await queryRunner.query(`
        CREATE TABLE "app_user" 
        ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "email" character varying NOT NULL,
        "password" character varying NOT NULL,
        "name" character varying NOT NULL,
        "address" character varying NOT NULL,
        "imageURL" character varying,
        "isCaregiver" boolean NOT NULL,
        "note" double precision NOT NULL,
        "description" character varying NOT NULL,
        CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))
        `);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "app_user"`);
  }

}

exports.NomeDaMigration1611330564715 = NomeDaMigration1611330564715;