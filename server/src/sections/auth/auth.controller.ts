import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private svc: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.svc.register(dto.email, dto.password, dto.name);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.svc.login(dto.email, dto.password);
  }
}
