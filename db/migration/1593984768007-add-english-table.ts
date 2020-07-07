import {MigrationInterface, QueryRunner} from "typeorm";

export class addEnglishTable1593984768007 implements MigrationInterface {
    name = 'addEnglishTable1593984768007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "english" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "english" ADD CONSTRAINT "PK_660962a4b063c0fc4beee44f05d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "english" ADD "word" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "english" ADD "letters" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "english" DROP COLUMN "letters"`);
        await queryRunner.query(`ALTER TABLE "english" DROP COLUMN "word"`);
        await queryRunner.query(`ALTER TABLE "english" DROP CONSTRAINT "PK_660962a4b063c0fc4beee44f05d"`);
        await queryRunner.query(`ALTER TABLE "english" DROP COLUMN "id"`);
    }

}
