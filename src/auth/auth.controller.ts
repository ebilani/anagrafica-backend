import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DoesUserExist } from 'src/guards/guard';
import { CreateUserDto } from 'src/users/dto/createUserDto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

@Post('login')
  async login(@Request() req) {
    return this.authService.validateUser(req.body.email, req.body.password);
  } 


  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: CreateUserDto) {
    this.userService.create(user);
    return await {
      message: 'User created Succesfully',
      name: user.name,
      username: user.username,
      email: user.email
    };
  }
}
