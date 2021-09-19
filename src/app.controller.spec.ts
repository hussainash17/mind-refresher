import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('return the length of the root string', () => {
      expect(appController.getTest()).toEqual(12);
    });

    it('Return the username length', () => {
      const username = 'Ashraf';
      expect(appController.postUsername(username)).toEqual('Ashraf Hussain');
    });
  });
});
