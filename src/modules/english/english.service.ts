import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { EnglishEntity, CreateEnglishDTO } from './';

@Injectable()
export class EnglishService {

  constructor(
    @InjectRepository(EnglishEntity)
    private readonly englishRepository: Repository<EnglishEntity>,
  ) {}

  async findWord(searchString: string): Promise<EnglishEntity[]> {
    const pattern = `${searchString}%`;
    const where = `word ILIKE '${pattern}'`;
    return await this.englishRepository.find({ where });
  }

  async findAllWords(): Promise<EnglishEntity[]> {
    return await this.englishRepository.find();
  }

  async createWord({ word }: CreateEnglishDTO): Promise<EnglishEntity> {
    const enslishWord: EnglishEntity = this.englishRepository.create({
      word: word.toLowerCase(),
      letters: word.length,
    });
    return await EnglishEntity.save(enslishWord);
  }

}
