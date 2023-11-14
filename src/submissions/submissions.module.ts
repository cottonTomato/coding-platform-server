import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { Judge0Service } from './judge0/judge0.service';
import { SubmissionsController } from './submissions.controller';
import { SubmitService } from './submit-service/submit.service';
import { ResultGateway } from './result-gateway/result-gateway.gateway';

@Module({
  providers: [Judge0Service, SubmitService, ResultGateway],
  imports: [
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
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
  exports: [Judge0Service],
  controllers: [SubmissionsController],
})
export class SubmissionsModule {}
