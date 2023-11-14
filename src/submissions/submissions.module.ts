import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { Judge0Service } from './judge0/judge0.service';
import { SubmissionsController } from './submissions.controller';
import { SubmitService } from './submit-service/submit.service';
import { ResultGateway } from './result-gateway/result-gateway.gateway';

@Module({
  providers: [Judge0Service, SubmitService, ResultGateway],
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
})
export class SubmissionsModule {}
