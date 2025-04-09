import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  // user 생성 메서드
  async createUser(createUserInfo: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserInfo);
    return this.userRepository.save(user);
  }
}
