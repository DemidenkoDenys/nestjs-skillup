import { Module } from '@nestjs/common';
import { WebsocketGateway } from './gateways';

@Module({
  imports: [],
  controllers: [],
  providers: [WebsocketGateway],
})
export class AppModule {}
