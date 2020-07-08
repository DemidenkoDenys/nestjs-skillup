import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { RussianEntity } from './';

const words = [
  'пример',
  'автомобиль',
  'фонтан',
  'программирование',
  'делать',
  'писать',
  'ходить',
  'выгул',
  'аннотация',
  'в',
  'пропаганда',
];

export default class SeedWords implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const seedingWords = words.map(word => ({
      word, letters: word.length,
    }));
    await connection
      .createQueryBuilder()
      .insert()
      .into(RussianEntity)
      .values(seedingWords)
      .execute();
  }
}
