import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { RussianEntity, CreateWordDTO } from './';

@Injectable()
export class RussianService {

  constructor(
    @InjectRepository(RussianEntity)
    private readonly repository: Repository<RussianEntity>,
  ) {}

  async findWord(searchString: string): Promise<RussianEntity[]> {
    const pattern = `${searchString}%`;
    const where = `word ILIKE '${pattern}'`;
    return await this.repository.find({ where });
  }

  async findAllWords(): Promise<RussianEntity[]> {
    return await this.repository.find();
  }

  async createWord({ word }: CreateWordDTO): Promise<RussianEntity> {
    const addingWord: RussianEntity = this.repository.create({
      word: word.toLowerCase(),
      letters: word.length,
    });
    return await RussianEntity.save(addingWord);
  }

}
