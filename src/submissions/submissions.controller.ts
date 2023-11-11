import { Controller, Post } from '@nestjs/common';

@Controller('submissions')
export class SubmissionsController {
  @Post('/submit')
  submit() {}

  @Post('/sample-test')
  testAgainstSample() {}

  @Post('/custom-test')
  testAgainstCustom() {}
}
