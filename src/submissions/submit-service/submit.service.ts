import { Injectable } from '@nestjs/common';
import { Judge0Service } from '../judge0/judge0.service';
import { ResultGateway } from '../result-gateway/result-gateway.gateway';

@Injectable()
export class SubmitService {
  constructor(
    private readonly judge: Judge0Service,
    private readonly resultService: ResultGateway,
  ) {}

  submit() {}

  testSample() {}

  testCustom() {}
}
