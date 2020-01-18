import { Controller, Get, Post, Body } from '@nestjs/common';
import { User, UsersService, UserInterface } from './';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Post()
  public async createUser(@Body() body: UserInterface): Promise<User> {
    return this.usersService.createUser(body);
  }
}
