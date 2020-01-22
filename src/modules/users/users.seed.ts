import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from './users.model';
import * as faker from 'faker';

const getUser = () => ({
  login: faker.internet.userName(),
  surname: faker.name.lastName(1),
  firstname: faker.name.firstName(1),
  birthdate: faker.date.past(),
  // logoUrl: `${faker.image.imageUrl()}`,
  createdAt: new Date(),
  updatedAt: new Date(),
});

const getUsers = count => Array(count).fill(0).map(item => getUser());

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const users = getUsers(10);
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(users)
      .execute();
  }
}
