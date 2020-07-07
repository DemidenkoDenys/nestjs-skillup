import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { English, CreateEnglishDTO } from './';

@Injectable()
export class EnglishService {

  constructor(
    @InjectRepository(English)
    private readonly englishRepository: Repository<English>,
  ) {}

  async findWord(searchString: string): Promise<English[]> {
    const pattern = `${searchString}%`;
    const where = `word ILIKE '${pattern}'`;
    return await this.englishRepository.find({ where });
  }

  async findAllWords(): Promise<English[]> {
    return await this.englishRepository.find();
  }

  async createWord({ word }: CreateEnglishDTO): Promise<English> {
    const enslishWord: English = this.englishRepository.create({
      word: word.toLowerCase(),
      letters: word.length,
    });
    return await English.save(enslishWord);
  }

}
