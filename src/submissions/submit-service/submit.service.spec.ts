import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DbModule } from '../../db/db.module';
import { SubmissionService } from '../submission-service/submission.service';
import { SubmitService } from './submit.service';
import { Judge0Service } from '../judge0-service/judge0.service';
import { ResultGateway } from '../result-gateway/result.gateway';

describe('SubmitService', () => {
  let service: SubmitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Judge0Service,
        SubmitService,
        ResultGateway,
        SubmissionService,
      ],
      imports: [
        HttpModule.registerAsync({
          imports: [ConfigModule.forRoot()],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => ({
            baseURL: config.get<string>('JUDGE0_URI_MOCK') + '/submissions',
            headers: {
              'Content-Type': 'application/json',
              'X-Auth-Token': config.get<string>('JUDGE0_AUTH_TOKEN'),
            },
            params: {
              base64_encoded: true,
            },
          }),
        }),
        DbModule,
      ],
    }).compile();

    service = module.get<SubmitService>(SubmitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
