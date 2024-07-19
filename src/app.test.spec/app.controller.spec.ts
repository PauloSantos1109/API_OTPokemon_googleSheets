import { Test, TestingModule } from '@nestjs/testing';
import { SheetsController } from '../controllers/app.controller';
import { SheetsService } from '../services/app.service';

describe('AppController', () => {
  let appController: SheetsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SheetsController],
      providers: [SheetsService],
    }).compile();

    appController = app.get<SheetsController>(SheetsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController).toBe('Hello World!');
    });
  });
});
