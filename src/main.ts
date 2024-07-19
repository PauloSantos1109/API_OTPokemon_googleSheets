import { NestFactory } from '@nestjs/core';
import { SheetsModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(SheetsModule);
  await app.listen(3000);
}
bootstrap();
