import { Test, TestingModule } from '@nestjs/testing';
import { MessagesDiService } from './messages-di.service';

describe('MessagesDiService', () => {
  let service: MessagesDiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesDiService],
    }).compile();

    service = module.get<MessagesDiService>(MessagesDiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
