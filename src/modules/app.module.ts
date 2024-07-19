import { Module } from '@nestjs/common';
import { SheetsService } from '../services/app.service';
import { SheetsController } from '../controllers/app.controller';

@Module({
  controllers: [SheetsController],
  providers: [SheetsService],
})
export class SheetsModule {}