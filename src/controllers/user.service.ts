import { Injectable, Inject } from '@nestjs/common';
import { Users } from '../database';

@Injectable()
export class UserService {
  constructor(
    @Inject('user-providers') private readonly userRepository: typeof Users,
  ) {}

  async getAllUsers(): Promise<Users[]> {
    return await this.userRepository.findAll<Users>();
  }

  async createUser(createUser: any): Promise<Users> {
    return await this.userRepository.create<Users>(createUser);
  }
}
