import { Injectable } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@Injectable()
@WebSocketGateway({ namespace: 'result', transports: ['websocket'] })
export class ResultGateway {
  private clients: Record<string, Socket>;

  @SubscribeMessage('token')
  handleToken(
    @MessageBody('token') token: string,
    @ConnectedSocket() client: Socket,
  ) {
    this.clients[token] = client;
  }

  broadcastResult(token: string, result: any) {
    this.clients[token].emit(result);
  }
}
