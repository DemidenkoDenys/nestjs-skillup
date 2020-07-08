import {MigrationInterface, QueryRunner} from "typeorm";

export class initUsersMigration1579378714010 implements MigrationInterface {
    name = 'initUsersMigration1579378714010'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "firstname" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "surname" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthdate" TIMESTAMP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "login" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "login"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "surname"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstname"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`, undefined);
    }

}
