import { HttpException, HttpStatus } from '@nestjs/common';

export class SubmissionRetrievalFailed extends HttpException {
  constructor() {
    super('Retrieval of Submission Failed', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
