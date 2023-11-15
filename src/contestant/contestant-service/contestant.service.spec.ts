import { Test, TestingModule } from '@nestjs/testing';
import { ContestantService } from './contestant.service';
import { DbModule } from '../../db/db.module';

describe('ContestantService', () => {
  let service: ContestantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DbModule],
      providers: [ContestantService],
    }).compile();

    service = module.get<ContestantService>(ContestantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
