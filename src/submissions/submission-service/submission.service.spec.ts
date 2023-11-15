import { Test, TestingModule } from '@nestjs/testing';
import { SubmissionService } from './submission.service';
import { DbModule } from '../../db/db.module';

describe('SubmissionService', () => {
  let service: SubmissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubmissionService],
      imports: [DbModule],
    }).compile();

    service = module.get<SubmissionService>(SubmissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
