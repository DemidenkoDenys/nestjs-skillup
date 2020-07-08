import {MigrationInterface, QueryRunner} from "typeorm";

export class addRussianTable1594152143817 implements MigrationInterface {
    name = 'addRussianTable1594152143817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "russian" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "russian" ADD CONSTRAINT "PK_5fa92085dbf9a1e30223702304a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "russian" ADD "word" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "russian" ADD "letters" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "russian" DROP COLUMN "letters"`);
        await queryRunner.query(`ALTER TABLE "russian" DROP COLUMN "word"`);
        await queryRunner.query(`ALTER TABLE "russian" DROP CONSTRAINT "PK_5fa92085dbf9a1e30223702304a"`);
        await queryRunner.query(`ALTER TABLE "russian" DROP COLUMN "id"`);
    }

}
