import {MigrationInterface, QueryRunner} from "typeorm";

export class addEngRusTranslationTable1594230937739 implements MigrationInterface {
    name = 'addEngRusTranslationTable1594230937739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "eng-rus" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "eng-rus" ADD CONSTRAINT "PK_188fbfc9ac146cb5a518418db34" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "eng-rus" ADD "eng_id" integer`);
        await queryRunner.query(`ALTER TABLE "eng-rus" ADD "rus_id" integer`);
        await queryRunner.query(`ALTER TABLE "eng-rus" ADD CONSTRAINT "FK_e851fdb8d455ab9da6726dcbfd5" FOREIGN KEY ("eng_id") REFERENCES "english"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "eng-rus" ADD CONSTRAINT "FK_3e910058f282bef7f12aee66505" FOREIGN KEY ("rus_id") REFERENCES "russian"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "eng-rus" DROP CONSTRAINT "FK_3e910058f282bef7f12aee66505"`);
        await queryRunner.query(`ALTER TABLE "eng-rus" DROP CONSTRAINT "FK_e851fdb8d455ab9da6726dcbfd5"`);
        await queryRunner.query(`ALTER TABLE "eng-rus" DROP COLUMN "rus_id"`);
        await queryRunner.query(`ALTER TABLE "eng-rus" DROP COLUMN "eng_id"`);
        await queryRunner.query(`ALTER TABLE "eng-rus" DROP CONSTRAINT "PK_188fbfc9ac146cb5a518418db34"`);
        await queryRunner.query(`ALTER TABLE "eng-rus" DROP COLUMN "id"`);
    }

}
