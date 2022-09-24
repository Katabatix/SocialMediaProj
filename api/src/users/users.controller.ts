import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() response: Response,
  ) {
    const ok: number = await this.usersService.checkCreateUser(
      createUserDto.username,
      createUserDto.password,
      createUserDto.email,
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.birthday,
    );
    if (ok === 1) {
      response
        .status(HttpStatus.CREATED)
        .send(`${createUserDto.username} created`);
    }
    if (ok === -1) {
      response
        .status(HttpStatus.FORBIDDEN)
        .send('This username already exists');
    }
    if (ok == -2) {
      response.status(HttpStatus.FORBIDDEN).send('This email already exists');
    }
  }

  @


}
