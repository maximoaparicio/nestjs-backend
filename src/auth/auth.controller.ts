import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  signIn(@Body() registerDto: RegisterDto) {
    return this.authService.SignIn(registerDto);
    // return this.authService.SignIn(newUser.username, newUser.password);
  }
}
