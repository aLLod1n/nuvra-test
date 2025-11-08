import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './root/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  app.enableCors({ origin: 'http://localhost:3000', credentials: true });
  await app.listen(3001);
  console.log('🚀 API running at http://localhost:3001');
}
bootstrap();
