import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { SubmissionsController } from './submissions.controller';
import { Judge0Service } from './judge0/judge0.service';
import { SubmitService } from './submit-service/submit.service';

describe('SubmissionsController', () => {
  let controller: SubmissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Judge0Service, SubmitService],
      imports: [
        ConfigModule.forRoot(),
        HttpModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) => ({
            baseURL: config.get<string>('JUDGE0_URI') + '/submissions',
            headers: {
              'Content-Type': 'application/json',
              'X-Auth-Token': config.get<string>('JUDGE0_AUTH_TOKEN'),
            },
            params: {
              base64_encoded: true,
            },
          }),
        }),
      ],
      controllers: [SubmissionsController],
    }).compile();

    controller = module.get<SubmissionsController>(SubmissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
