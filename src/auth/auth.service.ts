import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async SignIn({ username, password }: RegisterDto) {
    const user = this.usersService.findByUsername(username);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    return await this.usersService.createUser({
      username,
      password: await bcrypt.hash(password, 10),
    });
  }
}
