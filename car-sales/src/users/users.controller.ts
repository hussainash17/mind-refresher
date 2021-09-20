import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { FetchUsersDto } from './dtos/findAllUser.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    const users = await this.userService.fetchUsers(body.email);
    const usersEmail = [];
    users.forEach((user) => usersEmail.push(user.email));
    if (usersEmail.includes(body.email)) {
      return 'Duplicate Email, Please use another email';
    } else this.userService.createsUser(body.email, body.password);
  }

  @Get('/all')
  async fetchAllUsers(@Body() body: FetchUsersDto) {
    const users = await this.userService.fetchUsers(body.email);
    return users;
  }
}
