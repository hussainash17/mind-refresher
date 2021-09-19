import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateMessagesDto } from './dtos/createMessages.dtos';

@Controller('messages')
export class MessagesController {
  @Get('/:id')
  getMessages(@Param('id') id: string): void {
    console.log(id);
  }

  @Get()
  listMessages(@Query() query: boolean): any {
    console.log(query);
  }

  @Post()
  createMessages(@Body() body: CreateMessagesDto): any {
    console.log(body);
  }
}
