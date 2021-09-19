import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessagesDto } from './dtos/createMessages.dtos';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;
  constructor() {
    this.messagesService = new MessagesService();
  }
  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message is not found');
    }
    return message;
  }

  @Get()
  listMessages(): any {
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessagesDto): any {
    return this.messagesService.createMessages(body.content);
  }
}
