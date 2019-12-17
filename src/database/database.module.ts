import { Module } from '@nestjs/common';
import { typeOrmProviders } from './providers/typeorm.provider';

@Module({
  providers: [...typeOrmProviders],
  exports: [...typeOrmProviders],
})
export class DatabaseModule {}
