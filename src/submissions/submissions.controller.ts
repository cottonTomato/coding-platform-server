import { Controller, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('submissions')
export class SubmissionsController {
  @Sse('/submit')
  submit() {
    return new Observable((subscriber) => {
      subscriber.next({ status: 'Recieved' });
    });
  }

  @Sse('/sample')
  testSample() {
    return new Observable((subscriber) => {
      subscriber.next({ status: 'Recieved' });
    });
  }

  @Sse('/custom')
  customTest() {
    return new Observable((subscriber) => {
      subscriber.next({ status: 'Recieved' });
    });
  }
}
