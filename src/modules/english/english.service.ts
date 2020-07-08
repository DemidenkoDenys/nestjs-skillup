import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { EnglishEntity, CreateEnglishDTO, FinsWordParams } from './';

@Injectable()
export class EnglishService {

  constructor(
    @InjectRepository(EnglishEntity)
    private readonly englishRepository: Repository<EnglishEntity>,
  ) {}

  async findWord(params: FinsWordParams): Promise<EnglishEntity[]> {
    const pattern = `${params.search}%`;
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
