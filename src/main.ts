import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
//u import { MessagesModule } from './messages/messages.module';
import { MessagesDiModule } from './messages-di/messages-di.module';

(async function start() {
  const app = await NestFactory.create(MessagesDiModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
})();
