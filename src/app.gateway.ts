import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import {
  INIT_LOG_MSG,
  CLIENT_CONNECTED,
  CLIENT_DISCONNECTED,
  MSG_TO_CLIENT_EVENT_NAME,
  MSG_TO_SERVER_EVENT_NAME,
  CONNECTION_MSG_TO_SERVER,
} from './constants';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage(CONNECTION_MSG_TO_SERVER)
  handleConnectionMessage(client: Socket, payload: { name: string }): void {
    client.name = payload.name;
    this.broadcastMessage(`${CLIENT_CONNECTED}: ${client.name}`);
  }

  @SubscribeMessage(MSG_TO_SERVER_EVENT_NAME)
  handleMessage(client: Socket, payload: string): void {
    this.broadcastMessage(payload);
  }

  broadcastMessage(message: string) {
    this.server.emit(MSG_TO_CLIENT_EVENT_NAME, message);
  }

  afterInit(server: Server) {
    this.logger.log(INIT_LOG_MSG);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`${CLIENT_CONNECTED}: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`${CLIENT_DISCONNECTED}: ${client.id}`);
    this.broadcastMessage(`${CLIENT_DISCONNECTED}: ${client.name}`);
  }

}
