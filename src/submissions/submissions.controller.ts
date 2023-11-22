import { Controller, Post, Sse } from '@nestjs/common';
import { SubmitService } from './submit-service/submit.service';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submitHandler: SubmitService) {}

  @Sse('/result')
  sendResult() {}

  @Post('/submit')
  submit() {}

  @Post('/sample-test')
  testSample() {}

  @Post('/custom-test')
  testCustom() {}
}
