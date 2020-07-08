import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserEntity, CreateUserDTO } from './';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async createUser(userData: CreateUserDTO): Promise<UserEntity> {
    const user: UserEntity = this.userRepository.create();
    for (const key of Object.keys(userData)) {
      user[key] = userData[key];
    }
    await UserEntity.save(user);
    return user;
  }
}
