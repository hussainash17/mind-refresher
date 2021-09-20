import { Injectable } from '@nestjs/common';
import { MessageRepositoris } from './messages-di.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepository: MessageRepositoris) {}

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  createMessages(message: string) {
    return this.messagesRepository.createMessage(message);
  }
}
