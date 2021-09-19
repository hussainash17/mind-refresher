import { MessageRepositoris } from './messages.repositories';

export class MessagesService {
  messagesRepository: MessageRepositoris;
  constructor() {
    this.messagesRepository = new MessageRepositoris();
  }

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
