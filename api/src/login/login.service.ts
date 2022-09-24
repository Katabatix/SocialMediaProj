import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { parse } from 'date-fns';
import { Repository } from 'typeorm';
import { Login } from './entities/login.entity';
import { Users } from '../users/entities/users.entity';

@Injectable()
export class LoginService {
  // constructor(
  //   @InjectRepository(Login)
  //   private loginRepo: Repository<Login>,
  //   @InjectRepository(Login)
  //   private userRepo: Repository<Users>,
  // ) {}
  // /**
  //  *
  //  * @param username
  //  * @param password
  //  * @param email
  //  * @param firstName
  //  * @param lastName
  //  * @param birthday
  //  * @returns 1 if OK, -1 if username exists, -2 if email exists
  //  */
  // async checkCreateUser(
  //   username: string,
  //   password: string,
  //   email: string,
  //   firstName: string,
  //   lastName: string,
  //   birthday: Date,
  // ) {
  //   if ((await this.userRepo.findOneBy({ email: email })) !== null) return -2;
  //   else if ((await this.userRepo.findOneBy({ username: username })) !== null)
  //     return -1;
  //   else {
  //     if (birthday instanceof Date)
  //       this.userRepo.save({
  //         username: username,
  //         password: password,
  //         email: email,
  //         firstName: firstName,
  //         lastName: lastName,
  //         birthday: birthday,
  //       });
  //     else {
  //       const placeholderDate = parse('Jan 1', 'MMM d', new Date());
  //       this.userRepo.save({
  //         username: username,
  //         password: password,
  //         email: email,
  //         firstName: firstName,
  //         lastName: lastName,
  //         birthday: placeholderDate,
  //       });
  //     }
  //     return 1;
  //   }
  // }
  // // async checkLogin(username: string, password: string) {
  // //   const user = this.userRepo.findOneOrFail({ username: username})
  // //   if (await this.loginRepo.findBy)
  // // }
}
