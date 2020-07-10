import {MigrationInterface, QueryRunner} from "typeorm";

export class addWordClassesTable1594419644602 implements MigrationInterface {
    name = 'addWordClassesTable1594419644602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "word_classes" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "word_classes" ADD CONSTRAINT "PK_123bc9cb981e84dfd14ef26f79d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "word_classes" ADD "class" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "word_classes" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "word_classes" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "word_classes" DROP COLUMN "class"`);
        await queryRunner.query(`ALTER TABLE "word_classes" DROP CONSTRAINT "PK_123bc9cb981e84dfd14ef26f79d"`);
        await queryRunner.query(`ALTER TABLE "word_classes" DROP COLUMN "id"`);
    }

}
