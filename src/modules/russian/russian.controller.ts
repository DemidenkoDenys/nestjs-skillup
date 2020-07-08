import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import {
  SEARCH,
  RussianEntity,
  RussianService,
  CreateWordDTO,
  FindWordParams,
} from './';

@Controller('Russian')
export class RussianController {
  constructor(private readonly service: RussianService) {}

  @Get()
  public async getWord(@Query(SEARCH) queryParam: FindWordParams): Promise<RussianEntity[]> {
    return this.service.findWord(queryParam);
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
