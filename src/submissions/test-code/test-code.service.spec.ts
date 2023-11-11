import { Test, TestingModule } from '@nestjs/testing';
import { TestCodeService } from './test-code.service';

describe('TestCodeService', () => {
  let service: TestCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestCodeService],
    }).compile();

    service = module.get<TestCodeService>(TestCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
