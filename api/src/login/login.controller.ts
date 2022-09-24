import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('create-user')
  async create(
    @Body() createLoginDto: CreateUserDto,
    @Res() response: Response,
  ) {
    const ok: number = await this.loginService.checkCreateUser(
      createLoginDto.username,
      createLoginDto.password,
      createLoginDto.email,
      createLoginDto.firstName,
      createLoginDto.lastName,
      createLoginDto.birthday,
    );
    if (ok === 1) {
      response
        .status(HttpStatus.CREATED)
        .send(`${createLoginDto.username} created`);
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
}
