import { Injectable, OnModuleInit } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class SseService implements OnModuleInit {
  private streams: Map<string, Subject<object>>;

  onModuleInit() {
    this.streams = new Map();
  }
}
