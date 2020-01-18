import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '../modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.POSTGRES_TYPE as any,
      host: process.env.POSTGRES_HOST as any,
      port: process.env.POSTGRES_PORT as any,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [...entities],
      synchronize: false,
      logging: true,
    }),
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class DatabaseModule {}
