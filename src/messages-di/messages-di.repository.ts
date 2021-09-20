import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepositoris {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf8');
    const message = JSON.parse(content);

    return message[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    const message = JSON.parse(content);
    return message;
  }

  async createMessage(message: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content: message };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
