import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DbModule } from 'src/db/db.module';
import { ConfigService } from '@nestjs/config';
import { SubmissionsController } from './submissions.controller';
import { SubmitService } from './submit-service/submit.service';
import { Judge0Service } from './judge0-service/judge0.service';
import { SubmissionService } from './submission-service/submission.service';
import { SseService } from './sse/sse.service';

@Module({
  providers: [Judge0Service, SubmitService, SubmissionService, SseService],
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
    DbModule,
  ],
  exports: [Judge0Service, SubmissionService],
  controllers: [SubmissionsController],
})
export class SubmissionsModule {}
