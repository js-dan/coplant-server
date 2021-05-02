import {MigrationInterface, QueryRunner} from "typeorm";

export class Order1619885604136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "app_order" 
        ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "start_date" character varying NOT NULL,
        "id_client" character varying NOT NULL,
        "id_caregiver" character varying NOT NULL,
        "end_date" character varying NOT NULL,
        "price" double precision NOT NULL,
        "score_caregiver" double precision NOT NULL,
        "score_client" double precision NOT NULL,
        "comment" character varying NOT NULL,
        "description" character varying NOT NULL,
        "order_status" character varying NOT NULL,
        CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada2" PRIMARY KEY ("id"))
        `); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "app_order"`);
    }

}
