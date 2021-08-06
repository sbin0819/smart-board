import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { User } from './user.entity';
import CreateUserDto from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<string> {
    await this.usersService.create(user);
    return 'good';
  }
}
