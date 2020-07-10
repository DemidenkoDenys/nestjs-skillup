import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ...Entity } from './';
import { ...Service } from './___.service';

@Module({
  imports: [TypeOrmModule.forFeature([...Entity])],
  exports: [...Service],
  providers: [...Service],
})
export class ...Module {}
