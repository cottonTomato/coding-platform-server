import { Test, TestingModule } from '@nestjs/testing';
import { CustomTestService } from './custom-test.service';

describe('CustomTestService', () => {
  let service: CustomTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomTestService],
    }).compile();

    service = module.get<CustomTestService>(CustomTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
