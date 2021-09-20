import { Module } from '@nestjs/common';
import { MessagesController } from './messages-di.controller';
import { MessagesService } from './messages-di.service';
import { MessageRepositoris } from './messages-di.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessageRepositoris, MessagesService],
})
export class MessagesDiModule {}
