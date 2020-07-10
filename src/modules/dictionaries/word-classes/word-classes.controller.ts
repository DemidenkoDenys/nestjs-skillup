import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import {
  WordClassesEntity,
  WordClassesService,
  WordClassesDTO,
} from './';

@Controller('word-classes')
export class WordClassesController {
  constructor(private readonly service: WordClassesService) {}

  @Get()
  public async getMethod(@Query('') params: any): Promise<any> {
    return this.service.getMethod(params);
  }

  @Post()
  public async postMethod(@Body() body: WordClassesDTO): Promise<any> {
    return this.service.postMethod(body);
  }
}
