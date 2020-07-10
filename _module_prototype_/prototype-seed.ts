import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { ...Entity } from './___.model';
import * as faker from 'faker';

export default class Seed... implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    // const items = getItems(10);
    // await connection
    //   .createQueryBuilder()
    //   .insert()
    //   .into(SomeEntity)
    //   .values(items)
    //   .execute();
  }
}
