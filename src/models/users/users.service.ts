import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { User, UserInterface, USER_REPOSITORY } from './';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(userData: UserInterface): Promise<User> {
    const user: User = this.userRepository.create();
    for (const key of Object.keys(userData)) {
      user[key] = userData[key];
    }
    await User.save(user);
    return user;
  }
}
