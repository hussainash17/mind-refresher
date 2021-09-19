import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTest(): number {
    return this.getHello().length;
  }
  postUser(username: string): string {
    return this.postUser(username);
  }
}
