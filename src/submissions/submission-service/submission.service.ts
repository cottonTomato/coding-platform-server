import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { UserInContest } from '@prisma/client';

type Status = 'PASSED' | 'COMPILATION_ERROR' | 'RUNTIME_ERROR' | 'WRONG_ANSWER';

@Injectable()
export class SubmissionService {
  constructor(private readonly prisma: PrismaService) {}

  createSubmission(
    contestantId_contestId: Pick<UserInContest, 'contestantId' | 'contestId'>,
    token: string,
  ) {
    return this.prisma.submission.create({
      data: {
        submitter: {
          connect: {
            contestantId_contestId,
          },
        },
        token,
      },
    });
  }

  updateSubmission(token: string, status: Status) {
    const isPassed = status == 'PASSED';
    return this.prisma.submission.update({
      where: {
        token,
      },
      data: {
        isPassed,
        status,
      },
    });
  }
}
