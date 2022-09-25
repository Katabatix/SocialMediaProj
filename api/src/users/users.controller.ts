import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { roundToNearestMinutesWithOptions } from 'date-fns/fp';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
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

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res() response: Response) {
    if (
      await this.usersService.login(
        loginUserDto.username,
        loginUserDto.password,
      )
    )
      response.status(HttpStatus.OK).send('Logged in');
    else response.status(HttpStatus.BAD_REQUEST).send('Incorrect login');
  }

  @Delete('delete')
  async deleteUser(
    @Body() deleteUserDto: DeleteUserDto,
    @Res() response: Response,
  ) {
    if (
      await this.usersService.deleteUser(
        deleteUserDto.username,
        deleteUserDto.password,
      )
    )
      response
        .status(HttpStatus.ACCEPTED)
        .send(`${deleteUserDto.username} deleted`);
    else response.status(HttpStatus.BAD_REQUEST).send('Incorrect password');
  }
}
