import {MigrationInterface, QueryRunner} from "typeorm";

export class NomeDaMigration1611330564715 implements MigrationInterface {
    name = 'NomeDaMigration1611330564715'

    public async up(queryRunner: QueryRunner): Promise<void> {
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "app_user"`);
    }

}
