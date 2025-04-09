import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}
