import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import {
  EnglishEntity,
  EnglishService,
  CreateEnglishDTO,
  SEARCH,
} from './';

@Controller('english')
export class EnglishController {
  constructor(private readonly englishService: EnglishService) {}

  @Get()
  public async getWord(@Query(SEARCH) searchString: string): Promise<EnglishEntity[]> {
    return this.englishService.findWord(searchString);
  }

  @Get()
  public async getWords(): Promise<EnglishEntity[]> {
    return this.englishService.findAllWords();
  }

  @Post()
  public async createWord(@Body() word: CreateEnglishDTO): Promise<EnglishEntity> {
    return this.englishService.createWord(word);
  }
}
