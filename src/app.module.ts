import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WebSocketClientsService } from '@providers';
import { AppGateway } from './app.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    WebSocketClientsService,
    AppGateway,
  ],
})
export class AppModule {}
