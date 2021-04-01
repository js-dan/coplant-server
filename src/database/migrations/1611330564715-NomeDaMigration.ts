import {MigrationInterface, QueryRunner} from "typeorm";

export class NomeDaMigration1611330564715 implements MigrationInterface {
    name = 'NomeDaMigration1611330564715'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "phone" character varying NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "app_user"`);
    }

}
