import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

(async function start() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
})();
