import { Injectable } from '@nestjs/common';
import { WebSocketClientsMap, WebSocketClientMessage, WebSocketClient } from '@interfaces';
import { getUrlQueryName } from '@utils';

@Injectable()
export class WebSocketClientsService {

  private clients: WebSocketClientsMap = {};

  add = (client: WebSocketClient): void => {
    client.id = Math.random();
    client.name = getUrlQueryName(client.url);
    this.clients[client.id] = client;
    this.broadcast(`${client.name} has joined to chat`);
  }

  broadcast = (message: string): void => {
    for (const key of Object.keys(this.clients)) {
      const sendingMessage: WebSocketClientMessage = {
        message,
        date: new Date(),
      };
      this.clients[key].send(sendingMessage);
    }
  }
}
