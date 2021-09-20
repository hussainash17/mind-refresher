import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessagesDto } from './dtos/createMessages.dtos';
import { MessagesService } from './messages-di.service';

@Controller('messages-di')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
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
