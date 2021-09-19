import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

(async function start() {
  const app = await NestFactory.create(MessagesModule);
  await app.listen(3000);
})();
