import { Injectable } from '@nestjs/common';
import { Judge0Service } from '../judge0-service/judge0.service';
import { SubmissionService } from '../submission-service/submission.service';

@Injectable()
export class SubmitService {
  constructor(
    private readonly judge: Judge0Service,
    private readonly submission: SubmissionService,
  ) {}

  submit() {}

  testSample() {}

  testCustom() {}
}
