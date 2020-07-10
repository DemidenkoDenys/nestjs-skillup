import {MigrationInterface, QueryRunner} from "typeorm";

export class addEngRusTable1594419569664 implements MigrationInterface {
    name = 'addEngRusTable1594419569664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "eng_rus" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "eng_rus" ADD CONSTRAINT "PK_808aefcbec8759cf5046703b594" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "eng_rus" ADD "eng_id" integer`);
        await queryRunner.query(`ALTER TABLE "eng_rus" ADD "rus_id" integer`);
        await queryRunner.query(`ALTER TABLE "eng_rus" ADD CONSTRAINT "FK_ea3828a66db9797b816660193d4" FOREIGN KEY ("eng_id") REFERENCES "english"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "eng_rus" ADD CONSTRAINT "FK_4bacb0d81bd6a6a0e5f13d22d46" FOREIGN KEY ("rus_id") REFERENCES "russian"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "eng_rus" DROP CONSTRAINT "FK_4bacb0d81bd6a6a0e5f13d22d46"`);
        await queryRunner.query(`ALTER TABLE "eng_rus" DROP CONSTRAINT "FK_ea3828a66db9797b816660193d4"`);
        await queryRunner.query(`ALTER TABLE "eng_rus" DROP COLUMN "rus_id"`);
        await queryRunner.query(`ALTER TABLE "eng_rus" DROP COLUMN "eng_id"`);
        await queryRunner.query(`ALTER TABLE "eng_rus" DROP CONSTRAINT "PK_808aefcbec8759cf5046703b594"`);
        await queryRunner.query(`ALTER TABLE "eng_rus" DROP COLUMN "id"`);
    }

}
