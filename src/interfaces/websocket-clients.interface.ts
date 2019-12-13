export interface WebSocketClient {
  id: number;
  url: string;
  name: string;
  send(msg: WebSocketClientMessage): void;
}

export interface WebSocketClientsMap {
  [id: string]: WebSocketClient;
}

export interface WebSocketClients {
  add(client: WebSocketClient): void;
  broadcast(message: string): void;
}

export interface WebSocketClientMessage {
  date: Date;
  message: string;
}
