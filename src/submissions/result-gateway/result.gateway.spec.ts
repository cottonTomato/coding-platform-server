import { Test, TestingModule } from '@nestjs/testing';
import { ResultGateway } from './result.gateway';

describe('ResultGateway', () => {
  let gateway: ResultGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultGateway],
    }).compile();

    gateway = module.get<ResultGateway>(ResultGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
