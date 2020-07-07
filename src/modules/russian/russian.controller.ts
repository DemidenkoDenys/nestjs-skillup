import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import {
  RussianEntity,
  RussianService,
  CreateWordDTO,
  SEARCH,
} from './';

@Controller('Russian')
export class RussianController {
  constructor(private readonly service: RussianService) {}

  @Get()
  public async getWord(@Query(SEARCH) searchString: string): Promise<RussianEntity[]> {
    return this.service.findWord(searchString);
  }

  @Get()
  public async getWords(): Promise<RussianEntity[]> {
    return this.service.findAllWords();
  }

  @Post()
  public async createWord(@Body() word: CreateWordDTO): Promise<RussianEntity> {
    return this.service.createWord(word);
  }
}
