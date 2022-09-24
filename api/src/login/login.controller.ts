import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('create-user')
  create(@Body() createLoginDto: CreateUserDto, @Res() response: Response) {
    const ok: number = this.loginService.checkCreateUser(
      createLoginDto.username,
      createLoginDto.password,
      createLoginDto.email,
      createLoginDto.firstName,
      createLoginDto.lastName,
      createLoginDto.birthday,
    );
    if (ok === 1) {
      return `${createLoginDto.username} created`;
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

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
