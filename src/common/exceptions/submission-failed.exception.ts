import { HttpException, HttpStatus } from '@nestjs/common';

export class SubmissionFailed extends HttpException {
  constructor() {
    super(
      'Submission To Judge0 Service Failed',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
