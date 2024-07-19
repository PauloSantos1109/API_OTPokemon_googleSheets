import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { SheetsService } from '../services/app.service';

@Controller('sheets')
export class SheetsController {
  constructor(private readonly sheetsService: SheetsService) {}

  @Get()
  async getData() {
    const spreadsheetId = '1_mmmXawYrs0DQFDMamj8mraMNXJuMr58wNoGWHc6pvY'; // Substitua pelo seu ID da planilha
    const sheetName = 'api';
    const range = `${sheetName}!A1:D1000`;
    
    try {
      const data = await this.sheetsService.getSpreadsheetData(spreadsheetId, range);
      return data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}