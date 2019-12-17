import { Controller, Get, Post, Body } from '@nestjs/common';
import { User, UsersService, UserInterface } from './';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  public async getUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Post('users')
  public async createUser(@Body('user') body: UserInterface): Promise<User> {
    return this.usersService.createUser(body);
  }
}
