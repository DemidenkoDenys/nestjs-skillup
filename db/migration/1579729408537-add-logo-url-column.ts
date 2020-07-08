import {MigrationInterface, QueryRunner} from "typeorm";

export class addLogoUrlColumn1579729408537 implements MigrationInterface {
    name = 'addLogoUrlColumn1579729408537'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ADD "logoUrl" character varying`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "logoUrl"`, undefined);
    }

}
