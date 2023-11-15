import { Test, TestingModule } from '@nestjs/testing';
import { Judge0Service } from './judge0.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('Judge0Service', () => {
  let service: Judge0Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Judge0Service],
      imports: [
        HttpModule.registerAsync({
          imports: [ConfigModule.forRoot()],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) => ({
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
      ],
    }).compile();

    service = module.get<Judge0Service>(Judge0Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createSubmission', () => {
    const sampleRequest = {
      source_code:
        'I2luY2x1ZGUgPGlvc3RyZWFtPgoKaW50IG1haW4oKSB7CiAgICBzdGQ6OmNvdXQgPDwgIkhlbGxvLCBXb3JsZCI7Cn0=',
      language_id: 54,
    };
    const sampleResponse = {
      token: expect.any(String),
    };

    it('gives correct response', async () => {
      const response = await service.createSubmission(sampleRequest);
      expect(response).toMatchObject(sampleResponse);
    });
  });

  describe('getSubmission', () => {
    const sampleToken = '747639d9-0e8d-4b4a-acc3-c18163911e23';
    const sampleResponse = {
      stdout: expect.any(String),
      time: expect.any(String),
      memory: expect.any(Number),
      stderr: null,
      token: expect.any(String),
      compile_output: null,
      message: null,
      status: {
        id: 3,
        description: 'Accepted',
      },
    };

    it('gives correct response', async () => {
      const response = await service.getSubmission(sampleToken);
      expect(response).toMatchObject(sampleResponse);
    });
  });
});
