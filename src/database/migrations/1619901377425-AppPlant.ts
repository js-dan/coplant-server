import {MigrationInterface, QueryRunner} from "typeorm";

export class AppPlant1619901377425 implements MigrationInterface {
    name = 'AppPlant1619901377425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_plant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "imageURL" character varying NOT NULL, "qtd" integer NOT NULL, CONSTRAINT "PK_0929db500ef9f95f20fc5a66ec1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "imageURL" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "app_user"."imageURL" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "app_user"."imageURL" IS NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "imageURL" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "app_plant"`);
    }

}
