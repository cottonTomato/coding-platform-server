import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { CreateSubmissionDTO } from '../../common/interfaces/submissions.dto';
import {
  SubmissionFailed,
  SubmissionRetrievalFailed,
} from '../../common/exceptions';

@Injectable()
export class Judge0Service {
  constructor(private readonly http: HttpService) {}

  createSubmission(submission: Partial<CreateSubmissionDTO>): Promise<{
    token: string;
  }> {
    const response = this.http
      .post('/', submission)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((_) => {
          throw new SubmissionFailed();
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
          throw new SubmissionRetrievalFailed();
        }),
      );

    return lastValueFrom(response);
  }

  getAllUserSubmissions(tokens: string[]) {
    const response = this.http
      .get('/batch', {
        params: {
          tokens,
        },
      })
      .pipe(map((res) => res.data))
      .pipe(
        catchError((_) => {
          throw new SubmissionRetrievalFailed();
        }),
      );

    return lastValueFrom(response);
  }
}
