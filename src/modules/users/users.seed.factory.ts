import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { UserEntity } from './users.model';

define(UserEntity, (faker: typeof Faker, settings: { roles: string[] }) => {
  const gender = faker.random.number(1);
  const user = new UserEntity();

  user.login = faker.internet.userName();
  user.surname = faker.name.lastName(gender);
  user.firstname = faker.name.firstName(gender);
  user.birthdate = faker.date.past();
  user.createdAt = new Date();
  user.updatedAt = new Date();

  return user;
})