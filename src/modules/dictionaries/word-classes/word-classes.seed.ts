import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { WordClassesEntity } from './word-classes.model';

const WORD_CLASSES_NAMES = [
  'noun',
  'verb',
  'adjective',
  'adverb',
  'pronoun',
  'preposition',
  'conjunction',
  'determiner',
  'exclamation',
];

const wordClasses = WORD_CLASSES_NAMES.map(className => ({
  class: className,
  description: '',
}));

export default class SeedWordClasses implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(WordClassesEntity)
      .values(wordClasses)
      .execute();
  }
}
