import { Body, forwardRef, Inject, Injectable, Post, UseGuards } from '@nestjs/common';
import { DoesUserExist } from 'src/guards/guard';
import { CreateUserDto } from 'src/users/dto/createUserDto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email, pass);
    if (user && user.password === pass && user.email === email) {
      return {
        message: 'User logged Succesfully',
        username: user.username,
        email: user.email
      };
    }
    return { message: 'Credentials are incorrect!'};
  }


}