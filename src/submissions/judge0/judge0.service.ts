import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { CreateSubmissionDTO } from '../interfaces/submissions.dto';

@Injectable()
export class Judge0Service {
  constructor(private readonly http: HttpService) {}

  createSubmission(submission: Partial<CreateSubmissionDTO>): Promise<{
    token: string;
  }> {
    const response = this.http
      .post('?wait=true', submission)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((_) => {
          throw new Error('Submission To Judge0 Service Failed');
        }),
      );

    return lastValueFrom(response);
  }

  getSubmission(token: string) {
    const response = this.http
      .get(`/${token}`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((_) => {
          throw new Error('Retrieval of Submission Failed');
        }),
      );

    return lastValueFrom(response);
  }
}
