import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserEntity, UsersService, CreateUserDTO } from './';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getUsers(): Promise<UserEntity[]> {
    return this.usersService.getAllUsers();
  }

  @Post()
  public async createUser(@Body() body: CreateUserDTO): Promise<UserEntity> {
    return this.usersService.createUser(body);
  }
}
