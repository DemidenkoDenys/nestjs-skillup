import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import {
  ...Entity,
  ...Service,
} from './';

@Controller('___')
export class ...Controller {
  constructor(private readonly service: ...Service) {}

  @Get()
  public async getMethod(@Query('') params: any): Promise<any> {
    return this.service.getMethod(params);
  }

  @Post()
  public async postMethod(@Body() body: AnyDTO): Promise<any> {
    return this.service.postMethod(body);
  }
}
