import {MigrationInterface, QueryRunner} from "typeorm";

export class appPlant1619880698374 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "app_plant" 
        ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "name" character varying NOT NULL,
        "imageURL" character varying,
        "qtd" integer NOT NULL),
        CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "app_plant"`);
    }

}
