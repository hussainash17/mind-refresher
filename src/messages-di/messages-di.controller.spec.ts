import { Test, TestingModule } from '@nestjs/testing';
import { MessagesDiController } from './messages-di.controller';

describe('MessagesDiController', () => {
  let controller: MessagesDiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesDiController],
    }).compile();

    controller = module.get<MessagesDiController>(MessagesDiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
