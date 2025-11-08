import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../shared/prisma.service';
import { AuthModule } from '../sections/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  providers: [PrismaService]
})
export class AppModule {}
