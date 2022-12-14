import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { parse } from 'date-fns';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepo: Repository<Users>,
  ) {}

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
  async checkCreateUser(
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    birthday: Date,
  ) {
    if ((await this.userRepo.findOneBy({ email: email })) !== null) return -2;
    else if ((await this.userRepo.findOneBy({ username: username })) !== null)
      return -1;
    else {
      if (birthday instanceof Date)
        this.userRepo.save({
          username: username,
          password: password,
          email: email,
          firstName: firstName,
          lastName: lastName,
          birthday: birthday,
        });
      else {
        const placeholderDate = parse('Jan 1', 'MMM d', new Date());
        this.userRepo.save({
          username: username,
          password: password,
          email: email,
          firstName: firstName,
          lastName: lastName,
          birthday: placeholderDate,
        });
      }
      return 1;
    }
  }

  async login(username: string, password: string) {
    try {
      const user = await this.userRepo.findOneOrFail({
        where: {
          username: username,
        },
      });
      if (user.password === password) return true;
      else return false;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }

  async deleteUser(username: string, password: string) {
    try {
      const user = await this.userRepo.findOneOrFail({
        where: {
          username: username,
        },
      });
      if (user.password === password) {
        this.userRepo.delete(user);
        return true;
      } else return false;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }
}
