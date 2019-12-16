import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Users } from '../database';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getUsers(): Promise<Users[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  public async createUser(@Body() body): Promise<Users> {
    return this.userService.createUser(body);
  }
}
