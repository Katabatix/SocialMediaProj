import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private loginRepo: Repository<Login>,
  ) {}

  create(createLoginDto: CreateUserDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }

  private createUser(
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    birthday: Date,
  ) {
    this.loginRepo.insert({
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    });
  }

  /**
   *
   * @param username
   * @param password
   * @param email
   * @param firstName
   * @param lastName
   * @param birthday
   * @returns 1 if OK, -1 if username exists, -2 if email exists
   */
  checkCreateUser(
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    birthday: Date,
  ) {
    if (this.loginRepo.findOneBy({ email: email }) !== null) return -2;
    else if (this.loginRepo.findOneBy({ username: username }) !== null)
      return -1;
    else {
      this.createUser(username, password, email, firstName, lastName, birthday);
      return 1;
    }
  }
}
