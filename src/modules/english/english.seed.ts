import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { English } from './english.model';
import * as faker from 'faker';

const getWord = () => {
  const word = faker.random.word();
  return {
    word,
    letters: word.length,
  };
};

const getWords = count => Array(count).fill(0).map(item => getWord());

export default class CreateEnglishWords implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const words = getWords(10);
    await connection
      .createQueryBuilder()
      .insert()
      .into(English)
      .values(words)
      .execute();
  }
}
